// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = [
  {
    id: 'revitalift-triple-power-moisturizer',
    name: 'Revitalift Triple Power Moisturizer',
    category: 'moisturizer',
    image: 'images/revitalift-moisturizer.png',
    description: 'A pro-retinol, hyaluronic acid, and vitamin C powered anti-aging moisturizer that visibly reduces wrinkles, firms skin, and brightens in just 1 week.',
    url: 'https://www.lorealparisusa.com/skin-care/facial-moisturizers/revitalift-triple-power-anti-aging-moisturizer',
    skinTypes: ['dry', 'combination']
  },
  {
    id: 'revitalift-moisturizer-spf30',
    name: 'Revitalift Moisturizer SPF 30',
    category: 'sunscreen',
    image: 'images/revitalift-spf30.png',
    description: 'Triple-action anti-aging moisturizer with SPF 30. Protects from UV damage while reducing wrinkles and firming skin. Lightweight daily wear.',
    url: 'https://www.lorealparisusa.com/skin-care/facial-moisturizers/revitalift-triple-power-moisturizer-spf-30',
    skinTypes: ['dry', 'combination', 'sensitive']
  },
  {
    id: 'hydra-genius-normal-dry',
    name: 'Hydra Genius Daily Liquid Care',
    category: 'moisturizer',
    image: 'images/hydra-genius.png',
    description: 'A water-based liquid moisturizer with hyaluronic acid and aloe vera water. Provides 72-hour hydration for normal to dry skin without heaviness.',
    url: 'https://www.lorealparisusa.com/skin-care/facial-moisturizers/hydra-genius-daily-liquid-care-normal-dry-skin',
    skinTypes: ['dry', 'sensitive']
  },
  {
    id: 'revitalift-triple-power-serum',
    name: 'Revitalift Triple Power Serum',
    category: 'serum',
    image: 'images/revitalift-serum.png',
    description: 'Concentrated anti-aging serum with pro-retinol, vitamin C, and hyaluronic acid. Visibly reduces wrinkles and firms skin with each application.',
    url: 'https://www.lorealparisusa.com/skin-care/face-serums/revitalift-triple-power-concentrated-serum',
    skinTypes: ['dry', 'combination', 'oily']
  },
  {
    id: 'pure-retinol-serum',
    name: 'Pure Retinol 0.3% Serum',
    category: 'serum',
    image: 'images/pure-retinol-serum.png',
    description: '0.3% pure retinol serum that reduces the look of deep wrinkles and improves skin texture. Formulated with hyaluronic acid to maintain hydration.',
    url: 'https://www.lorealparisusa.com/skin-care/face-serums/pure-retinol-serum',
    skinTypes: ['combination', 'oily']
  },
  {
    id: 'genifique-dark-spot-serum',
    name: 'Genifique Dark Spot Serum',
    category: 'serum',
    image: 'images/genifique-serum.png',
    description: 'Advanced serum that targets dark spots and uneven tone. Formulated with glycolic acid and niacinamide to visibly brighten and even out skin.',
    url: 'https://www.lorealparisusa.com/skin-care/face-serums/genifique-dark-spot-serum',
    skinTypes: ['combination', 'oily', 'dry']
  },
  {
    id: 'glycolic-acid-cleanser',
    name: 'Revitalift 10% Glycolic Acid Cleanser',
    category: 'cleanser',
    image: 'images/glycolic-cleanser.png',
    description: 'Exfoliating cleanser with 10% glycolic acid that removes dead skin cells, unclogs pores, and reveals brighter, smoother skin. Use 2–3 times per week.',
    url: 'https://www.lorealparisusa.com/skin-care/facial-cleansers/revitalift-derm-intensive-10-percent-glycolic-acid-cleanser',
    skinTypes: ['oily', 'combination']
  },
  {
    id: 'age-perfect-eye-cream',
    name: 'Age Perfect Eye Cream',
    category: 'eye',
    image: 'images/age-perfect-eye.png',
    description: 'Nourishing eye cream with soy protein and pro-calcium to reinforce the delicate eye area. Reduces the look of puffiness, dark circles, and crow\'s feet.',
    url: 'https://www.lorealparisusa.com/skin-care/eye-treatments/age-perfect-eye-cream',
    skinTypes: ['dry', 'combination', 'sensitive']
  },
  {
    id: 'hyaluronic-acid-serum',
    name: 'Revitalift 1.5% Hyaluronic Acid Serum',
    category: 'serum',
    image: 'images/hyaluronic-serum.png',
    description: '1.5% pure hyaluronic acid serum that plumps and visibly replumps skin. Micro and macro hyaluronic acid penetrate surface layers for deep and surface hydration.',
    url: 'https://www.lorealparisusa.com/skin-care/face-serums/revitalift-derm-intensives-1-5-hyaluronic-acid-serum',
    skinTypes: ['dry', 'sensitive', 'combination']
  },
  {
    id: 'age-perfect-honey-cream',
    name: 'Age Perfect Honey Day Cream',
    category: 'moisturizer',
    image: 'images/honey-cream.png',
    description: 'Rich honey day cream for extra-dry, mature skin. Formulated with royal jelly and manuka honey to deeply nourish, soothe, and restore radiance.',
    url: 'https://www.lorealparisusa.com/skin-care/facial-moisturizers/age-perfect-hydra-nutrition-honey-day-cream',
    skinTypes: ['dry', 'sensitive']
  },
  {
    id: 'revitalift-pressed-serum',
    name: 'Revitalift LZR Pressed Serum',
    category: 'serum',
    image: 'images/lzr-pressed-serum.png',
    description: 'Solid-to-serum formula with pure retinol and pro-retinol. Visibly reduces wrinkles and firms skin while providing intense moisture. Fragrance-free.',
    url: 'https://www.lorealparisusa.com/skin-care/face-serums/revitalift-triple-power-lzr-pressed-serum',
    skinTypes: ['dry', 'sensitive', 'combination']
  },
  {
    id: 'revitalift-cleanser',
    name: 'Revitalift Cream Cleanser',
    category: 'cleanser',
    image: 'images/revitalift-cleanser.png',
    description: 'Creamy daily facial cleanser with vitamin C and lemon essence. Gently removes dirt and impurities while leaving skin smooth, radiant, and refreshed.',
    url: 'https://www.lorealparisusa.com/skin-care/facial-cleansers/revitalift-radiant-smoothing-cream-cleanser',
    skinTypes: ['dry', 'sensitive']
  }
];

// ============================================================
// PRODUCT GRID RENDERING
// ============================================================
let activeCategory = 'all';

function renderProductGrid(category = 'all') {
  const grid = document.getElementById('productGrid');
  const filtered = category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => {
    const imgSrc = product.image;
    return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img-wrap">
        <img
          src="${imgSrc}"
          alt="${product.name}"
          class="product-img"
        />
        <span class="product-category-badge">${formatCategory(product.category)}</span>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
      </div>
    </div>
  `;
  }).join('');
}

function formatCategory(cat) {
  const map = { moisturizer: 'Moisturizer', serum: 'Serum', cleanser: 'Cleanser', sunscreen: 'Sunscreen', eye: 'Eye Care' };
  return map[cat] || cat;
}

// Category tab filtering
document.querySelectorAll('.category-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.category;
    renderProductGrid(activeCategory);
  });
});

// Initial render
renderProductGrid();

// ============================================================
// PRODUCT SELECTION
// ============================================================
const STORAGE_KEY = 'loreal_selected_products';

// Load persisted selections from localStorage
let selectedProductIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

function saveSelections() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedProductIds));
}

function toggleProductSelection(productId) {
  const idx = selectedProductIds.indexOf(productId);
  if (idx === -1) {
    selectedProductIds.push(productId);
  } else {
    selectedProductIds.splice(idx, 1);
  }
  saveSelections();
  updateSelectionUI();
}

function updateSelectionUI() {
  // Update card visual state
  document.querySelectorAll('.product-card').forEach(card => {
    const id = card.dataset.id;
    if (selectedProductIds.includes(id)) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });

  // Update selected section visibility
  const section = document.getElementById('selectedSection');
  const list = document.getElementById('selectedList');

  if (selectedProductIds.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');

  // Render selected product chips
  list.innerHTML = selectedProductIds.map(id => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return '';
    return `
      <div class="selected-chip">
        <span class="selected-chip-name">${product.name}</span>
        <button type="button" class="selected-chip-remove" data-id="${id}" aria-label="Remove ${product.name}">&times;</button>
      </div>
    `;
  }).join('');

  // Wire up remove buttons on chips
  list.querySelectorAll('.selected-chip-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      selectedProductIds = selectedProductIds.filter(sid => sid !== id);
      saveSelections();
      updateSelectionUI();
    });
  });
}

// Delegate click on product grid (works after re-renders)
document.getElementById('productGrid').addEventListener('click', (e) => {
  const card = e.target.closest('.product-card');
  if (card) toggleProductSelection(card.dataset.id);
});

// Clear all
document.getElementById('clearAllBtn').addEventListener('click', () => {
  selectedProductIds = [];
  saveSelections();
  updateSelectionUI();
});

// Apply persisted selections on page load
updateSelectionUI();

// Show welcome message on load
showAssistantMessage('👋 Welcome! Browse and select products above, then click **Generate My Routine** — or ask me anything about L\'Oréal skincare.');

// ============================================================
// Get references to the DOM elements
// ============================================================
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