// L'Oréal Skin Care Assistant - Cloudflare Worker
// Deploy this to Cloudflare Workers to secure your OpenAI API key

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    // Handle CORS preflight requests
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

    const openAIRequestBody = {
      model: 'gpt-4o',
      messages: requestBody.messages,
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