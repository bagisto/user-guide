# Generative AI (Magic AI)

<div class="feature-hero feature--ai">
  <span class="feature-hero__eyebrow">Built into Bagisto</span>
  <p class="feature-hero__lead">Write product content, create product images, translate reviews and personalize order confirmations with the AI provider you choose. Branded <strong>Magic AI</strong> in the admin panel, it is part of Bagisto itself, with nothing extra to install.</p>
  <div class="feature-hero__actions">
    <a class="feature-hero__btn feature-hero__btn--primary" href="/configure/magic-ai.html">Set up Generative AI</a>
    <a class="feature-hero__btn feature-hero__btn--ghost" href="#what-you-can-do">Explore the features</a>
  </div>
  <ul class="feature-hero__chips" aria-label="Supported AI providers">
    <li>OpenAI</li>
    <li>Anthropic</li>
    <li>Gemini</li>
    <li>Groq</li>
    <li>xAI</li>
    <li>DeepSeek</li>
    <li>Mistral</li>
    <li>Ollama</li>
  </ul>
</div>

## What you can do

<div class="feature-cards feature--ai">
  <a class="feature-card" href="/generative-ai/generate-content.html">
    <span class="feature-card__icon feature-card__icon--text" aria-hidden="true"></span>
    <span class="feature-card__title">Generate text content</span>
    <span class="feature-card__desc">Draft product and category descriptions, CMS pages and email templates from a prompt, right in the editor.</span>
    <span class="feature-card__tag">Admin panel</span>
  </a>
  <a class="feature-card" href="/generative-ai/generate-images.html">
    <span class="feature-card__icon feature-card__icon--image" aria-hidden="true"></span>
    <span class="feature-card__title">Generate product images</span>
    <span class="feature-card__desc">Create images from a written description, in the size and quality you choose, and keep the ones you like.</span>
    <span class="feature-card__tag">Admin panel</span>
  </a>
  <a class="feature-card" href="/generative-ai/image-search.html">
    <span class="feature-card__icon feature-card__icon--camera" aria-hidden="true"></span>
    <span class="feature-card__title">AI image search</span>
    <span class="feature-card__desc">Shoppers search with a photo. The model describes what is in it, and the store finds matching products.</span>
    <span class="feature-card__tag">Storefront</span>
  </a>
  <a class="feature-card" href="/generative-ai/review-translation.html">
    <span class="feature-card__icon feature-card__icon--translate" aria-hidden="true"></span>
    <span class="feature-card__title">Review translation</span>
    <span class="feature-card__desc">Shoppers read any product review in their own language with one click on <strong>Translate</strong>.</span>
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
    <span class="feature-card__desc">Switch Generative AI on, connect your providers and choose the model each feature uses.</span>
    <span class="feature-card__tag">Configure &gt;&gt; Magic AI</span>
  </a>
</div>

## How it works

<ol class="feature-steps feature--ai">
  <li><span class="feature-steps__title">Connect a provider</span>Add an API key for OpenAI, Anthropic, Gemini, Groq, xAI, DeepSeek or Mistral, or the address of your own Ollama server.</li>
  <li><span class="feature-steps__title">Switch on the features</span>Choose the features you want, the providers admins can pick from, and the model each storefront feature runs on.</li>
  <li><span class="feature-steps__title">Review, then apply</span>Admin features show their result in a dialog first. Nothing is added to your store until you click <strong>Apply</strong>.</li>
</ol>

- **Your provider, your model.** In the admin panel you pick a model each time you generate. Each storefront feature uses the model you set for it on each channel. Ollama runs open models on your own server, so requests to it stay on your own infrastructure.
- **Admin features suggest, you decide.** Generated text and images go into the product, page or template only when you click **Apply**.
- **Storefront features respond to the shopper.** A photo is analyzed when the shopper searches with it, a review is translated when they click **Translate**, and the checkout message is written when the order confirmation page opens.

## Before you start

All settings live under **Configure >> Magic AI**. Follow [Generative AI Configuration](../configure/magic-ai.md) to switch the features on, connect a provider and choose models, then open the page for the feature you want to use.

## What it does not do

Magic AI does not run the store by itself. It does not publish content, change prices, place orders or answer customers. Everything it produces in the admin panel is reviewed and applied by you, and on the storefront it only reacts to what the shopper does. Text and images from an AI model can be wrong or misleading, which is why the admin dialogs ask you to review the result before applying it.
