# Magic AI

Magic AI is the generative AI built into Bagisto. In the admin it writes and rewrites text and generates product images; on the storefront it understands the photos shoppers search with, translates reviews, and writes a personal message on the order confirmation page. It works with the AI provider of your choice, including models you host yourself.

Every generated text and image is a suggestion until you apply it, so you stay in control of what goes live. Magic AI does not act on your store by itself; it helps you do the work faster.

To configure it, go to **Configure >> Magic AI**. The group has four pages, listed on the left: **General**, **Providers**, **Admin Features** and **Storefront Features**.

<ImagePopup src="/images/configure/magic.png" alt="Magic AI configuration" />

## Turn Magic AI on

1. Open the **General** page and, in the **Settings** section, switch **Enabled** on. This is the master switch; nothing below works until it is on.
2. Click **Save Configuration**.

<ImagePopup src="/images/configure/general-setting.png" alt="Magic AI General settings" />

## Connect a provider

Magic AI ships with eight providers: **OpenAI, Anthropic, Gemini, Groq, xAI, DeepSeek, Mistral** and **Ollama**. You only need to connect the ones you plan to use.

1. Create an API key in your account on the provider's website.
2. Open the **Providers** page and paste it into that provider's **API Key** field.
3. For **Ollama**, which runs models on your own server, enter the **Base URL** of that server as well, for example `http://localhost:11434`.
4. Click **Save Configuration**.

Keys are stored as passwords and are not shown again once saved.

<ImagePopup src="/images/configure/providers-magicai.png" alt="Magic AI Providers section" />

## Choose the admin features

Two features help you while you work in the admin: **Text Generation** and **Image Generation**.

1. Open the **Admin Features** page. In the **Text Generation** and **Image Generation** sections, switch **Enabled** on for each feature you want.
2. In **Providers**, pick the providers whose models admins may use for that feature. Only providers with a saved key are useful here.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/admin-features-magicai.png" alt="Magic AI Admin Features section" />

### Generate text

Text Generation writes or rewrites text in any rich-text editor in the admin: product descriptions, category descriptions, CMS pages and email templates.

1. Open the item, for example a product under **Catalog >> Products**.
2. Click the **Magic AI** button in the toolbar of the description editor.

<ImagePopup src="/images/configure/description-magicai.png" alt="Magic AI button in the description editor" />

3. Enter a **Prompt** describing what you want written.
4. Choose a **Model** from the list.
5. Click **Generate** and read the result.
6. Click **Apply** to place the text in the editor, or change the prompt and generate again.

<ImagePopup src="/images/configure/textgeneration.png" alt="Text generation dialog" />

### Generate images

Image Generation creates product images from a written description.

1. Open the product under **Catalog >> Products**.
2. In the **Images** section, click **Magic AI** beside **Add Image**.
3. Enter a **Prompt** describing the image you want.
4. Choose the **Number of Images** to generate.
5. Choose the **Size**: **Square (1:1)**, **Portrait (2:3)** or **Landscape (3:2)**.
6. Choose the **Quality**: **High**, **Medium** or **Low**.
7. Choose a **Model** and click **Generate**.

<ImagePopup src="/images/configure/image-generate.png" alt="Image generation dialog" />

8. Click the images you want to keep and apply them; they are added to the product like uploaded images. Click **Regenerate** to try again with the same settings.

<ImagePopup src="/images/configure/ai-images.png" alt="Generated product images" />

## Choose the storefront features

Three features run on the storefront: **AI Image Search**, **Review Translation** and **Personalized Checkout Message**. Each is set **per channel**, so switch channel at the top of the page to configure each store.

1. Open the **Storefront Features** page. In the **AI Image Search**, **Review Translation** and **Personalized Checkout Message** sections, switch **Enabled** on for each feature you want.
2. Choose the **Model** it runs on.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/storefront-features-magicai.png" alt="Magic AI Storefront Features section" />

### AI image search

Shoppers can search for products by uploading a photo from the search bar. With this feature on, the chosen model describes what is in the photo and the store searches for matching products. With it off, the image search still works but uses a simpler recognition that runs in the shopper's browser, which recognises fewer things.

The image search itself is switched on separately under **Configure >> Catalog >> Products**, with the **Image Search Option** switch in the **Settings** section.

### Review translation

A **Translate** link appears under each product review. Clicking it shows the review in the shopper's language, so a review written in another language is still useful.

<ImagePopup src="/images/configure/review-magicai.png" alt="Translate link under a review" />

### Personalized checkout message

After an order is placed, the order confirmation page shows a short message written for that order, mentioning what the shopper bought. It appears under the thank-you heading in place of the standard line and gives the moment a more personal touch.

<ImagePopup src="/images/configure/personalized-chckout-message.png" alt="Personalised message on the order confirmation page" />
