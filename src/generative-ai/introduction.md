# Generative AI (Magic AI)

Bagisto has generative AI built into the platform. Branded **Magic AI** in the admin, it uses the text and image models of the AI provider you choose to write, draw, translate and describe, so the content work behind a store takes minutes rather than hours. It is part of Bagisto itself; there is nothing extra to install.

## What you can do with it

| Feature | Who uses it | What it does |
|---|---|---|
| [Generate text content](./generate-content.md) | Admin | Writes or rewrites product and category descriptions, CMS pages and email templates from a prompt, in any rich-text editor. |
| [Generate product images](./generate-images.md) | Admin | Creates product images from a written description, in the size and quality you pick. |
| [AI image search](./image-search.md) | Shopper | Understands the photo a shopper uploads in the search bar and finds matching products. |
| [Review translation](./review-translation.md) | Shopper | Shows a product review in the shopper's language with one click. |
| [Personalized checkout message](./checkout-message.md) | Shopper | Writes a short thank-you for the order confirmation page that mentions what was bought. |

## How it works

- **Your provider, your model.** Bagisto connects to **OpenAI, Anthropic, Gemini, Groq, xAI, DeepSeek, Mistral** and **Ollama**. You add the API key of the providers you use, and you choose the model per feature. Ollama runs open models on your own server, so nothing leaves it.
- **Admin features suggest, you decide.** Generated text and images are shown in a dialog first and go into the product, page or template only when you click **Apply**.
- **Storefront features respond to the shopper.** A photo is analysed when the shopper searches with it, a review is translated when they click **Translate**, and the checkout message is written when the order is placed. Each of these is switched on per channel with its own model.

## Before you start

Everything is configured under **Configure >> Magic AI**. Follow [Generative AI Configuration](../configure/magic-ai.md) to turn the feature on, connect a provider and enable the features you want, then come back to the feature pages above.

## What it does not do

Magic AI does not run the store by itself. It does not publish content, change prices, place orders or answer customers. Everything it produces in the admin is reviewed and applied by you, and on the storefront it only reacts to what the shopper does. Text and images from an AI model can be wrong or misleading, which is why the admin dialogs ask you to review the result before applying it.
