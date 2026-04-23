# L'Oréal Product-Aware Routine Builder Chatbot

A smart skincare routine builder that lets users browse L'Oréal products, select favorites, and generate personalized routines through an AI-powered chat interface.

---

## Project Structure

```
loreal-skincare-chatbot/
├── index.html              # Main HTML structure
├── style.css               # L'Oréal branded styling
├── script.js               # Chat logic + product selection + conversation history
├── secrets.js              # Placeholder for local dev (API key goes here temporarily)
├── cloudflare-worker.js    # Cloudflare Worker script (SECURE - keeps key hidden)
├── wrangler.jsonc          # Wrangler config for Worker deployment
└── README.md               # This file
```

---

## Phase 1 — Chatbot Foundation ✅ Complete

- [x] L'Oréal branding (logo, brand colors, typography)
- [x] System prompt keeps responses on-topic for L'Oréal skincare
- [x] User input captured and sent to OpenAI via Cloudflare Worker
- [x] Response displayed in chat
- [x] API key protected behind Cloudflare Worker (never exposed in browser)
- [x] Conversation history maintained across messages
- [x] User question displayed above each AI response
- [x] Chat bubble UI with distinct styling (user vs. assistant)
- [x] Skin type selector (Dry / Oily / Combination / Sensitive) adjusts recommendations

---

## Phase 2 — Product-Aware Routine Builder 🚧 In Progress

### Required Features

- [x] **Product Grid** — Display real L'Oréal products with name, image, and category
- [x] **Product Selection** — Click a product to select/deselect it; visual highlight (border/glow) updates on click; selected products list appears above the "Generate Routine" button
- [x] **Reveal Product Description** — Each product card shows its description (hover overlay, modal, or toggle button)
- [x] **Save Selected Products** — Selections persist after page reload using localStorage; user can remove individual products or clear all
- [x] **Generate Routine Button** — Sends selected product data + conversation history to the Cloudflare Worker; displays a personalized routine in the chat

### Bonus Features (LevelUp)

- [ ] **Product Search** — Real-time search field filters products by name or keyword alongside category filters
- [ ] **Web Search Integration** — Chatbot responses include current, real-world information with visible links or citations
- [ ] **RTL Language Support** — Layout supports right-to-left languages; product grid, selected products section, and chat all adjust correctly

---

## Cloudflare Worker Setup

1. Create a Cloudflare account at [cloudflare.com](https://cloudflare.com)
2. Go to **Workers & Pages → Create Application → Create Worker**
3. Name your worker (e.g., `loreal-chatbot-worker`)
4. Copy the contents of `cloudflare-worker.js` into the worker editor
5. Add your OpenAI API key as an environment variable:
   - Worker Settings → Variables → Add Variable
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
6. Deploy the worker
7. Copy the worker URL (e.g., `https://loreal-chatbot-worker.your-subdomain.workers.dev`)
8. In `script.js`, replace `YOUR_CLOUDFLARE_WORKER_URL` with your actual worker URL:
   ```js
   const workerUrl = 'https://loreal-chatbot-worker.your-subdomain.workers.dev';
   ```
9. Open `index.html` in your browser to test locally

---

## Brand Colors

| Color | Hex | Usage |
|---|---|---|
| L'Oréal Blue | `#10069f` | Primary brand color |
| Gold | `#c5a88e` | Accents |
| Rose | `#d4a5a5` | Subtle highlights |
| Dark | `#1a1a2e` | Text |
| Light | `#faf8f5` | Backgrounds |

---

## Rubric Checklist

| Criteria | Status |
|---|---|
| Product Selection (click, visual state, selected list) | ✅ Done |
| Routine Generation (Generate Routine → chat response) | ✅ Done |
| Follow-Up Chat (context-aware responses) | ✅ Done |
| Save Selected Products (localStorage, clearable) | ✅ Done |
| Reveal Product Description (hover/modal/toggle) | ✅ Done |
| Cloudflare Worker Integration (API key hidden) | ✅ Done |
| LevelUp: Product Search | ⬜ Not yet |
| LevelUp: Web Search | ⬜ Not yet |
| LevelUp: RTL Language Support | ⬜ Not yet |

---

*Built as part of a GCA coding assignment. L'Oréal is a registered trademark of L'Oréal S.A.*
