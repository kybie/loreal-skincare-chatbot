// Get references to the DOM elements
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatHistory = document.getElementById('chatHistory');
const typingIndicator = document.getElementById('typingIndicator');

// System prompt for L'Oréal skincare focus
const systemPrompt = `You are a friendly and knowledgeable L'Oréal Skin Care Assistant. You help users discover L'Oréal skincare products, build personalized skincare routines, and learn about ingredients and beauty tips.

You ONLY respond to questions related to:
- L'Oréal skincare products (cleansers, moisturizers, serums, sunscreen, treatments, etc.)
- Skincare routines and order of product application
- Skin types (oily, dry, combination, sensitive) and product recommendations
- Skincare ingredients and their benefits
- L'Oréal brand history and values
- General beauty and wellness tips related to skincare

If a user asks about anything unrelated to L'Oréal or skincare (e.g., travel, food, other brands, makeup, hair care, etc.), politely redirect them back to skincare topics with a kind response like:
"I'm here to help with L'Oréal skincare! Is there a skincare question I can help you with today?"

Be conversational, helpful, and occasionally mention specific L'Oréal product lines like Genifique, Revitalift, Pure Retinol, Melanozyme, etc.`;

let messages = [
  { role: 'system', content: systemPrompt }
];

// REPLACE with your actual Cloudflare Worker URL
const workerUrl = 'YOUR_CLOUDLARE_WORKER_URL';

// Add event listener to the form
chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const userMessage = userInput.value.trim();
  if (!userMessage) return;
  
  // Show user question above response (for LevelUp bonus)
  showUserQuestion(userMessage);
  
  // Show typing indicator
  typingIndicator.classList.remove('hidden');
  
  // Add user's message to conversation history
  messages.push({ role: 'user', content: userMessage });
  
  // Clear input immediately
  userInput.value = '';
  
  try {
    const response = await fetch(workerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    const replyText = result.choices[0].message.content;
    
    // Add assistant's response to conversation history
    messages.push({ role: 'assistant', content: replyText });
    
    // Hide typing indicator and show response
    typingIndicator.classList.add('hidden');
    showAssistantMessage(replyText);
    
  } catch (error) {
    console.error('Error:', error);
    typingIndicator.classList.add('hidden');
    showAssistantMessage('Sorry, something went wrong. Please try again later.');
  }
});

function showUserQuestion(text) {
  const questionDiv = document.createElement('div');
  questionDiv.className = 'message user-question-display';
  questionDiv.textContent = `"${text}"`;
  chatHistory.appendChild(questionDiv);
  scrollToBottom();
}

function showAssistantMessage(text) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message assistant-message';
  messageDiv.textContent = text;
  chatHistory.appendChild(messageDiv);
  scrollToBottom();
}

function scrollToBottom() {
  const chatContainer = document.getElementById('chatContainer');
  chatContainer.scrollTop = chatContainer.scrollHeight;
}