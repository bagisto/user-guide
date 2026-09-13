# AI Image Search

Shoppers can search your catalog with a photo instead of words. A camera icon in the storefront search bar opens the file picker; the shopper picks a photo and the store searches for matching products.

With AI image search on, the model you chose describes what is in the photo, and the store searches for those keywords, so it recognises far more kinds of products. With it off, the photo is still recognised, but by a simpler model that runs in the shopper's browser and knows fewer things.

## Turning it on

Image search has two switches: one that shows the camera icon, and one that hands the photo to the AI model.

1. Go to **Configure >> Catalog >> Products**.
2. In the **Settings** section, switch **Image Search Option** on.
3. Click **Save Configuration**.
4. Go to **Configure >> Magic AI >> Storefront Features** and choose the channel at the top of the page.
5. In the **AI Image Search** section, switch **Enabled** on.
6. Choose the **Model**.
7. Click **Save Configuration**.

The Magic AI master switch and the provider key must be in place first; see [Generative AI Configuration](../configure/magic-ai.md).

## What the shopper sees

1. The shopper clicks the camera icon in the search bar and chooses a photo. Only image files of up to 2 MB are accepted.
2. The photo is analysed and the search results page opens with the products that match what was found in it.

The photo is sent to the provider of the chosen model so it can be described. If your privacy policy lists the services that process visitor data, add the provider there.
