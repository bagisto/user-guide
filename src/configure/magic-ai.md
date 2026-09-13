# Magic AI

Magic AI adds AI assistance to the admin and the storefront: it writes and translates text, generates product images, understands the photos shoppers search with, and writes a personal message on the order confirmation page. It works with the AI provider of your choice.

To configure it, go to **Configure >> Magic AI**. The page has four sections: **General**, **Providers**, **Admin Features** and **Storefront Features**.

<ImagePopup src="/images/configure/magic.png" alt="Magic AI" />

### General

**Enabled:** Turns every Magic AI feature on or off for the whole store. Nothing below works until this is on.

Click **Save Configuration**.

<ImagePopup src="/images/configure/general-setting.png" alt="Magic AI General Settings" />

### Providers

Magic AI ships with eight providers: **OpenAI, Anthropic, Gemini, Groq, xAI, DeepSeek, Mistral** and **Ollama**.

To use a provider, create an **API Key** in your account on the provider's website and paste it into that provider's row. Only the providers you fill in are offered elsewhere; you do not need a key for all of them. **Ollama** runs models on your own server instead of a paid service, so it also takes the **Base URL** of that server (`http://localhost:11434` when it runs on the same machine).

Keys are stored as passwords and never shown again once saved. Click **Save Configuration**.

<ImagePopup src="/images/configure/providers-magicai.png" alt="Magic AI Providers" />

### Admin Features

Two features help you while you work in the admin:

**1) Text Generation**

**2) Image Generation**

Each has an **Enabled** switch and a **Providers** list. Pick the providers whose models admins may use for that feature; the models of those providers are then offered in the editor.

Click **Save Configuration**.

<ImagePopup src="/images/configure/admin-features-magicai.png" alt="Magic AI Admin Features" />

### Text Generation

Text Generation writes or rewrites text in any rich-text editor in the admin: product descriptions, category descriptions, CMS pages and email templates.

Open the product under **Catalog >> Products** and click the **Magic AI** button in the toolbar of the description editor.

<ImagePopup src="/images/configure/description-magicai.png" alt="Magic AI Button in the Description Editor" />

A form opens. Enter a **Prompt** describing what you want written, choose a **Model** from the list, and click **Generate**. Read the result, and click **Apply** to place it in the editor, or generate again with a different prompt.

<ImagePopup src="/images/configure/textgeneration.png" alt="Text Generation" />

### Image Generation

Image Generation creates product images from a description.

Open the product under **Catalog >> Products** and, in the **Images** section, click **Magic AI** beside **Add Image**.

1. Enter the **Prompt** describing the image you want.
2. Choose the **Number of Images** to generate.
3. Choose the **Size**: **Square (1:1)**, **Portrait (2:3)** or **Landscape (3:2)**.
4. Choose the **Quality**: **High**, **Medium** or **Low**.
5. Choose a **Model** and click **Generate**.

<ImagePopup src="/images/configure/image-generate.png" alt="Image Generation" />

Click the images you want to keep and apply them; they are added to the product like uploaded images. Click **Regenerate** to try again with the same settings.

<ImagePopup src="/images/configure/ai-images.png" alt="Generated Product Images" />

### Storefront Features

Three features run on the storefront. Each is set **per channel**, with its own **Enabled** switch and a **Model** to run on, so switch channel at the top of the page to configure each store.

**1) AI Image Search**

**2) Review Translation**

**3) Personalized Checkout Message**

Click **Save Configuration**.

<ImagePopup src="/images/configure/storefront-features-magicai.png" alt="Magic AI Storefront Features" />

### AI Image Search

Shoppers can search for products by uploading a photo from the search bar. With this feature on, the chosen model describes what is in the photo and the store searches for matching products. With it off, the image search still works but uses a simpler recognition that runs in the shopper's browser, which recognises fewer things.

The image search itself is switched on separately under **Configure >> Catalog >> Products >> Settings**, with the **Image Search Option** switch.

### Review Translation

A **Translate** link appears under each product review. Clicking it shows the review in the shopper's language, so a review written in another language is still useful.

<ImagePopup src="/images/configure/review-magicai.png" alt="Review Translation" />

### Personalized Checkout Message

After an order is placed, the order confirmation page shows a short message written for that order, mentioning what the shopper bought. It replaces the fixed thank-you text and gives the moment a more personal touch.

<ImagePopup src="/images/configure/personalized-chckout-message.png" alt="Personalized Checkout Message" />
