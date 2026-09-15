# AI Image Search

<div class="feature-meta feature--ai"><span class="feature-meta__primary">Generative AI</span><span>Storefront</span></div>

Shoppers can search your catalog with a photo instead of words. With AI image search on, the model you choose looks at the photo and lists what it sees as search keywords, such as the product type, material, color and style. The storefront then shows the matching products. It helps shoppers who don't know what a product is called.

## Where it appears

A camera icon sits inside the search bar at the top of the storefront, on desktop and on mobile. It's shown while **Image Search Option** is switched on under **Configure >> Catalog >> Products**, which is the default. See [Product Settings](../configure/configurable-choices.md).

<ImagePopup src="/images/generative-ai/image-search-camera.png" alt="The storefront search bar with the camera icon for searching with a photo" />

## Search with a photo

This is what a shopper does on the storefront:

1. Click the camera icon in the search bar.
2. Choose a JPEG, PNG, GIF, WebP or SVG image of up to 2 MB.
3. Wait while the photo is analyzed. A spinner replaces the camera icon.

The search results open for the first keyword. Above the results, the photo is shown beside **Analyzed Keywords:** and the keywords found. The shopper can click another keyword to search for it instead. The keywords go straight to the search, without your review.

If the file isn't an image, the shopper sees "Only images (.jpeg, .jpg, .png, ..) are allowed." If it's larger than 2 MB, they see "Size Limit Error". An image in another format, such as a HEIC photo from a phone, shows "Something went wrong, please try again later."

## With and without AI image search

The camera icon works even when AI image search is off, with a simpler way of recognizing the photo:

| | AI image search on | AI image search off |
|---|---|---|
| **Who recognizes the photo** | The model you chose, at your AI provider | A basic recognition model that runs in the shopper's browser |
| **What it finds** | Product type, material, color, style, a visible brand and key features | General names of common objects |
| **If recognition fails** | The browser model is used instead | The shopper sees "Something went wrong, please try again later." |

## What you control

| Setting | What it does |
|---|---|
| **Image Search Option** under **Configure >> Catalog >> Products** | Shows the camera icon in the search bar |
| **Enabled** under **Configure >> Magic AI >> General** | Switches every Magic AI feature on or off |
| **Enabled** in the **AI Image Search** section of **Configure >> Magic AI >> Storefront Features** | Sends the photo to the AI model, per channel |
| **Model** in the **AI Image Search** section | The model that describes the photo, per channel. Choose a model that can read images. With a text-only model, the browser recognition is used instead. |

To set everything up, see [Enable the storefront features](../configure/magic-ai.md#enable-the-storefront-features).

### Photos leave your store

The photo is uploaded to your store so it can be shown beside the results. With AI image search on, it's also sent to the provider of the chosen model. If your privacy policy lists the services that process visitor data, add that provider.
