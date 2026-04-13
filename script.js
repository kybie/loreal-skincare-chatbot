// Get references to the DOM elements
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatHistory = document.getElementById('chatHistory');
const typingIndicator = document.getElementById('typingIndicator');

// Base system prompt for L'Oréal skincare focus
const baseSystemPrompt = `You are a friendly and knowledgeable L'Oréal Skin Care Assistant. You help users discover L'Oréal skincare products, build personalized skincare routines, and learn about ingredients and beauty tips.

You ONLY respond to questions related to:
- L'Oréal skincare products (cleansers, moisturizers, serums, sunscreen, treatments, etc.)
- Skincare routines and order of product application
- Skin types (oily, dry, combination, sensitive) and product recommendations
- Skincare ingredients and their benefits
- L'Oréal brand history and values
- General beauty and wellness tips related to skincare

When you recommend a product, include its product link from the official L'Oréal Paris USA website when available. Always try to link to actual product pages.

Here are some key L'Oréal skincare products with their URLs:
- Revitalift Triple Power Anti-Aging Moisturizer: https://www.lorealparisusa.com/skin-care/facial-moisturizers/revitalift-triple-power-anti-aging-moisturizer
- Revitalift Triple Power Anti-Aging Moisturizer (Fragrance-Free): https://www.lorealparisusa.com/skin-care/facial-moisturizers/revitalift-triple-power-anti-aging-moisturizer-fragrance-free
- Revitalift Triple Power Moisturizer SPF 30: https://www.lorealparisusa.com/skin-care/facial-moisturizers/revitalift-triple-power-moisturizer-spf-30
- Hydra Genius Daily Liquid Care (Normal to Dry Skin): https://www.lorealparisusa.com/skin-care/facial-moisturizers/hydra-genius-daily-liquid-care-normal-dry-skin
- Hydra Genius Daily Liquid Care (Extra Dry Skin): https://www.lorealparisusa.com/products/skin-care/products/facial-moisturizers/hydra-genius-daily-liquid-care-extra-dry-skin.aspx
- Revitalift Triple Power Concentrated Serum: https://www.lorealparisusa.com/skin-care/face-serums/revitalift-triple-power-concentrated-serum
- Pure Retinol 0.3% Serum: https://www.lorealparisusa.com/skin-care/face-serums/pure-retinol-serum
- Genifique Dark Spot Laser Light Serum: https://www.lorealparisusa.com/skin-care/face-serums/genifique-dark-spot-serum
- Revitalift Derm Intensives 10% Glycolic Acid Cleanser: https://www.lorealparisusa.com/skin-care/facial-cleansers/revitalift-derm-intensive-10-percent-glycolic-acid-cleanser

If a user asks about anything unrelated to L'Oréal or skincare (e.g., travel, food, other brands, makeup, hair care, etc.), politely redirect them back to skincare topics with a kind response like:
"I'm here to help with L'Oréal skincare! Is there a skincare question I can help you with today?"

Be conversational, helpful, and reference specific L'Oréal product lines and their official URLs when making recommendations.`;

// Skin type prefix
let skinTypePrefix = ``;

// Initialize messages with base system prompt
let messages = [
  { role: 'system', content: baseSystemPrompt }
];

const workerUrl = 'https://loreal-skincare-chatbot.krenne.workers.dev';

// Skin type button handling
const skinTypeButtons = document.querySelectorAll('.skin-type-btn');
skinTypeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    skinTypeButtons.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Update skin type prefix
    const skinType = btn.dataset.skin;
    skinTypePrefix = `\nThe user has indicated they have ${skinType} skin. Tailor your product recommendations accordingly.\n`;
    
    // Update the system message with the skin type context
    updateSystemMessage();
  });
});

function updateSystemMessage() {
  // If user has selected a skin type, add it to the system prompt
  const fullSystemPrompt = baseSystemPrompt + skinTypePrefix;
  messages[0] = { role: 'system', content: fullSystemPrompt };
}

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
  messageDiv.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  chatHistory.appendChild(messageDiv);
  scrollToBottom();
}

function scrollToBottom() {
  const chatContainer = document.getElementById('chatContainer');
  chatContainer.scrollTop = chatContainer.scrollHeight;
}