// L'Oréal Skin Care Assistant - Cloudflare Worker
// Deploy this to Cloudflare Workers to secure your OpenAI API key

async function wikipediaSearch(query) {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'LorealSkincareChatbot/1.0' } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.extract) return null;
    return { snippet: data.extract.substring(0, 300), url: data.content_urls?.desktop?.page || '' };
  } catch (e) {
    return null;
  }
}

function getWikipediaTopic(messages) {
  const last = [...messages].reverse().find(m => m.role === 'user');
  if (!last) return null;
  const text = last.content.toLowerCase();
  const topics = {
    'retinol': 'Retinol',
    'vitamin c': 'Vitamin C',
    'hyaluronic acid': 'Hyaluronic acid',
    'niacinamide': 'Niacinamide',
    'glycolic acid': 'Glycolic acid',
    'spf': 'Sunscreen',
    'sunscreen': 'Sunscreen',
    'collagen': 'Collagen',
    'peptide': 'Peptide',
    'ceramide': 'Ceramide',
  };
  for (const [keyword, topic] of Object.entries(topics)) {
    if (text.includes(keyword)) return topic;
  }
  return null;
}

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const apiKey = env.OPENAI_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders });
    }

    const messages = requestBody.messages || [];

    // Wikipedia web search — inject context for ingredient questions
    const topic = getWikipediaTopic(messages);
    let finalMessages = messages;
    if (topic) {
      const wiki = await wikipediaSearch(topic);
      if (wiki) {
        const lastUserIdx = finalMessages.map(m => m.role).lastIndexOf('user');
        finalMessages = [
          ...finalMessages.slice(0, lastUserIdx),
          { role: 'system', content: `Here is factual information about ${topic} from Wikipedia. Reference this in your response and cite the source URL:\n\n${wiki.snippet}\n\nSource: ${wiki.url}` },
          ...finalMessages.slice(lastUserIdx)
        ];
      }
    }

    const openAIRequestBody = {
      model: 'gpt-4o',
      messages: finalMessages,
      max_completion_tokens: 800,
      temperature: 0.5,
      frequency_penalty: 0.8,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(openAIRequestBody)
      });

      const data = await response.json();
      return new Response(JSON.stringify(data), { headers: corsHeaders });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to call OpenAI API' }), { status: 500, headers: corsHeaders });
    }
  }
};
