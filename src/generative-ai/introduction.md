# Generative AI (Magic AI)

<div class="feature-hero feature--ai">
  <span class="feature-hero__eyebrow">Built into Bagisto</span>
  <p class="feature-hero__lead">Draft product and page content, create product images, let shoppers search with a photo, translate reviews and thank each customer with a personal message. Generative AI is part of Bagisto itself. The admin panel calls it <strong>Magic AI</strong>, and it works with the AI provider you choose.</p>
  <div class="feature-hero__actions">
    <a class="feature-hero__btn feature-hero__btn--primary" href="/configure/magic-ai.html">Set up Generative AI</a>
    <a class="feature-hero__btn feature-hero__btn--ghost" href="#what-you-can-do">Explore the features</a>
  </div>
  <ul class="feature-hero__chips" aria-label="Supported AI providers">
    <li>Anthropic</li>
    <li>DeepSeek</li>
    <li>Gemini</li>
    <li>Groq</li>
    <li>Mistral</li>
    <li>Ollama</li>
    <li>OpenAI</li>
    <li>xAI</li>
  </ul>
</div>

## What you can do

<div class="feature-cards feature--ai">
  <a class="feature-card" href="/generative-ai/generate-content.html">
    <span class="feature-card__icon feature-card__icon--text" aria-hidden="true"></span>
    <span class="feature-card__title">Generate text content</span>
    <span class="feature-card__desc">Draft product descriptions, category text, CMS pages and email templates from a prompt, right in the editor.</span>
    <span class="feature-card__tag">Admin panel</span>
  </a>
  <a class="feature-card" href="/generative-ai/generate-images.html">
    <span class="feature-card__icon feature-card__icon--image" aria-hidden="true"></span>
    <span class="feature-card__title">Generate product images</span>
    <span class="feature-card__desc">Create images from a written description in the size and quality you choose, then keep the ones you like.</span>
    <span class="feature-card__tag">Admin panel</span>
  </a>
  <a class="feature-card" href="/generative-ai/image-search.html">
    <span class="feature-card__icon feature-card__icon--camera" aria-hidden="true"></span>
    <span class="feature-card__title">AI image search</span>
    <span class="feature-card__desc">Shoppers search with a photo. The model lists what it sees, and the storefront shows matching products.</span>
    <span class="feature-card__tag">Storefront</span>
  </a>
  <a class="feature-card" href="/generative-ai/review-translation.html">
    <span class="feature-card__icon feature-card__icon--translate" aria-hidden="true"></span>
    <span class="feature-card__title">Review translation</span>
    <span class="feature-card__desc">Shoppers read a product review in their own language with one click on <strong>Translate</strong>.</span>
    <span class="feature-card__tag">Storefront</span>
  </a>
  <a class="feature-card" href="/generative-ai/checkout-message.html">
    <span class="feature-card__icon feature-card__icon--message" aria-hidden="true"></span>
    <span class="feature-card__title">Personalized checkout message</span>
    <span class="feature-card__desc">Thank each customer on the order confirmation page with a short message about what they bought.</span>
    <span class="feature-card__tag">Storefront</span>
  </a>
  <a class="feature-card" href="/configure/magic-ai.html">
    <span class="feature-card__icon feature-card__icon--settings" aria-hidden="true"></span>
    <span class="feature-card__title">Configuration</span>
    <span class="feature-card__desc">Switch Magic AI on, connect your providers and choose the model each feature uses.</span>
    <span class="feature-card__tag">Configure &gt;&gt; Magic AI</span>
  </a>
</div>

## How it works

<ol class="feature-steps feature--ai">
  <li><span class="feature-steps__title">Connect a provider</span>Save an API key for OpenAI, Anthropic, Gemini, Groq, xAI, DeepSeek or Mistral, or the address of an Ollama server.</li>
  <li><span class="feature-steps__title">Switch on the features</span>Turn on the features you want. Choose which providers admins can pick from, and the model each storefront feature uses.</li>
  <li><span class="feature-steps__title">Review, then apply</span>Admin features show their result in a dialog first. Nothing is added to your store until you click <strong>Apply</strong> and save.</li>
</ol>

## Where each feature appears

| Feature | Where it appears | What starts it |
|---|---|---|
| [Generate text content](generate-content.md) | The **Magic AI** button in the admin's rich-text editors | You click **Generate** |
| [Generate product images](generate-images.md) | The **Magic AI** tile beside **Add Image** in the admin's image uploaders | You click **Generate** |
| [AI image search](image-search.md) | The camera icon in the storefront search bar | A shopper chooses a photo |
| [Review translation](review-translation.md) | The **Translate** button under each review on a product page | A shopper clicks **Translate** |
| [Personalized checkout message](checkout-message.md) | The order confirmation page | A shopper places an order |

## Providers and models

- **Text generation, review translation and the checkout message work with all eight providers.**
- **AI image search needs a model that can read images.** With a text-only model, photo search falls back to the simpler recognition in the shopper's browser, without any message.
- **Image generation works with the image models of OpenAI, Gemini and xAI.**
- **In the admin panel, you pick the model each time you generate.** The list holds the models of the providers you allowed for that feature.
- **Each storefront feature uses the model you set for it on each channel.**
- **Ollama runs open models on a server you choose.** When that server runs on your own infrastructure, requests to it stay there.
- **Each request is billed by the provider of the chosen model**, except requests to your own Ollama server.

## You stay in control

Magic AI doesn't run your store by itself. It doesn't publish content, change prices, place orders or answer customers' questions.

- **In the admin panel**, generated text and images go into a product, page or template only after you click **Apply** and save.
- **On the storefront**, a feature runs only when a shopper acts: a photo is analyzed when they search with it, a review is translated when they click **Translate**, and the checkout message is written when their order confirmation page opens.
- **Storefront results go straight to the shopper, without your review.** Test each feature on a few orders and reviews before you switch it on for a channel.

AI models can produce wrong or misleading text and images. Check names, numbers and claims before you apply a result.

## Before you start

All the settings live under **Configure >> Magic AI**. Follow [Generative AI (Magic AI)](../configure/magic-ai.md) under Configure to switch the features on, connect a provider and choose models. Then open the page for the feature you want to use.
