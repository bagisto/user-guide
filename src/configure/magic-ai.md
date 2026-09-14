# Generative AI Configuration

Bagisto's generative AI features are branded **Magic AI** in the admin, and they are all configured in one place: **Configure >> Magic AI**. The group has four screens: **General**, **Providers**, **Admin Features** and **Storefront Features**.

This page covers the configuration only. What each feature does, and how to use it, is described in the [Generative AI](../generative-ai/introduction.md) section.

<ImagePopup src="/images/configure/magic.png" alt="Magic AI configuration" />

## Turn generative AI on

1. Go to **Configure >> Magic AI >> General**.
2. In the **Settings** section, switch **Enabled** on. This is the master switch: the admin features, AI image search and the checkout message do not run until it is on. Review translation is governed by its own switch alone.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/general-setting.png" alt="Magic AI General settings" />

## Connect a provider

Bagisto ships with eight providers: **OpenAI, Anthropic, Gemini, Groq, xAI, DeepSeek, Mistral** and **Ollama**. You only need to connect the ones you plan to use.

1. Create an API key in your account on the provider's website.
2. Go to **Configure >> Magic AI >> Providers**.
3. Paste the key into that provider's **API Key** field.
4. For **Ollama**, which runs models on your own server, enter the **Base URL** of that server as well, for example `http://localhost:11434`.
5. Click **Save Configuration**.

Keys are stored as passwords and are not shown again once saved.

<ImagePopup src="/images/configure/providers-magicai.png" alt="Magic AI Providers section" />

## Enable the admin features

Two features help you while you work in the admin: **Text Generation**, described under [Generate text content](../generative-ai/generate-content.md), and **Image Generation**, described under [Generate product images](../generative-ai/generate-images.md).

1. Go to **Configure >> Magic AI >> Admin Features**.
2. In the **Text Generation** section, switch **Enabled** on.
3. In **Providers**, pick the providers whose models admins may use for text. Only providers with a saved key are useful here.
4. Repeat the two steps in the **Image Generation** section. Not every provider offers image models.
5. Click **Save Configuration**.

<ImagePopup src="/images/configure/admin-features-magicai.png" alt="Magic AI Admin Features section" />

## Enable the storefront features

Three features run on the storefront: **AI Image Search**, **Review Translation** and **Personalized Checkout Message**. Each is set **per channel**; when your store has more than one channel, choose the channel at the top of the page first.

1. Go to **Configure >> Magic AI >> Storefront Features**.
2. In the **AI Image Search**, **Review Translation** and **Personalized Checkout Message** sections, switch **Enabled** on for each feature you want.
3. Choose the **Model** each feature runs on. Only models of providers with a saved key work.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/storefront-features-magicai.png" alt="Magic AI Storefront Features section" />

AI image search also needs the storefront's image search switched on under **Configure >> Catalog >> Products**; see [AI image search](../generative-ai/image-search.md).

## Where each setting takes effect

| Setting | What it turns on | Read more |
|---|---|---|
| **Admin Features >> Text Generation** | The **Magic AI** button in every rich-text editor in the admin | [Generate text content](../generative-ai/generate-content.md) |
| **Admin Features >> Image Generation** | The **Magic AI** button beside **Add Image** in the image uploader | [Generate product images](../generative-ai/generate-images.md) |
| **Storefront Features >> AI Image Search** | AI analysis of the photo a shopper searches with | [AI image search](../generative-ai/image-search.md) |
| **Storefront Features >> Review Translation** | The **Translate** link under each product review | [Review translation](../generative-ai/review-translation.md) |
| **Storefront Features >> Personalized Checkout Message** | The message written for each order on the confirmation page | [Personalized checkout message](../generative-ai/checkout-message.md) |
