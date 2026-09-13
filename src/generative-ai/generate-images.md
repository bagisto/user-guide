# Generate Product Images

Image generation adds a **Magic AI** button beside **Add Image** in the admin's image uploader, so you can create images from a written description instead of uploading a file. It is most useful in the **Images** section of a product, and the same button appears in the other image uploaders of the admin, such as a category's logo and banner.

Before you start, switch **Image Generation** on and choose its providers, as described under [Enable the admin features](../configure/magic-ai.md#enable-the-admin-features). Not every provider offers image models.

## Generating images

1. Open the product under **Catalog >> Products**.

2. In the **Images** section, click **Magic AI** beside **Add Image**. The **AI Image Generation** dialog opens.

3. Enter a **Prompt** describing the image you want, for example "A minimalist running shoe on a white background, studio lighting".

4. Choose the **Number of Images** to generate.

5. Choose the **Size**: **Square (1:1)**, **Portrait (2:3)** or **Landscape (3:2)**.

6. Choose the **Quality**: **High**, **Medium** or **Low**.

7. Choose a **Model**. The list holds the image models of the providers enabled for image generation.

8. Click **Generate**.

   <ImagePopup src="/images/generative-ai/image-generate.png" alt="Image generation dialog" />

9. Click the images you want to keep. Click **Regenerate** to try again with the same settings.

10. Click **Apply**. The images are added to the product like uploaded ones, so you can reorder them, set their alt text and file name, or remove them.

    <ImagePopup src="/images/generative-ai/ai-images.png" alt="Generated product images" />

11. Click **Save Product**.

Higher quality and larger counts take longer and cost more at the provider. Generate one image at medium quality while you refine the prompt, then generate the final set.
