# Generate Text Content

Text generation adds a **Magic AI** button to the toolbar of the rich-text editors in the admin. You describe what you need, pick a model, and the generated text is placed in the editor once you apply it. The button appears wherever the editor does:

- **Product descriptions** — the **Description** and **Short Description** fields of a product under **Catalog >> Products**, and any other textarea attribute with the editor enabled.
- **Category descriptions** — the **Description** field under **Catalog >> Categories**.
- **CMS pages** — the page content under **CMS >> Pages**.
- **Email templates** — the template content under **Marketing >> Communications >> Email Templates**.

Before you start, switch **Text Generation** on and choose its providers, as described under [Enable the admin features](../configure/magic-ai.md#enable-the-admin-features).

## Generating text

1. Open the item, for example a product under **Catalog >> Products**.

2. Click the **Magic AI** button in the toolbar of the description editor. The **AI Assistance** dialog opens.

   <ImagePopup src="/images/generative-ai/description-magicai.png" alt="Magic AI button in the description editor" />

3. Enter a **Prompt** describing what you want written, for example "Write a 120-word description of a full-grain leather wallet with an RFID lining, in a warm tone".

4. Choose a **Model**. The list holds the text models of the providers enabled for text generation.

5. Click **Generate**. The result appears under **Generated Content**.

6. Read the result. If it is not right, change the prompt and click **Generate** again.

7. Click **Apply** to place the text in the editor.

   <ImagePopup src="/images/generative-ai/textgeneration.png" alt="Text generation dialog" />

8. Edit the text as you would any other and save the item.

## Writing a good prompt

- Say what the text is for and how long it should be: a product description, a category introduction, a 200-word page.
- Give the facts the model cannot know: material, sizes, what is in the box, the audience.
- Ask for the tone you want: warm, technical, playful.
- The dialog notes that AI-generated content may be misleading. Check names, numbers and claims before you apply the text.

Each request is sent to the provider of the chosen model and is billed by that provider, except for models served by your own Ollama server.
