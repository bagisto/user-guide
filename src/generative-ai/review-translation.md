# Review Translation

<div class="feature-meta feature--ai"><span class="feature-meta__primary">Generative AI</span><span>Storefront</span></div>

With review translation on, a **Translate** link appears under each product review on the storefront. Clicking it shows the review in the language of the store the shopper is browsing, so a review written in another language is still useful to them. The review itself is not changed; the translation is made when the shopper asks for it.

## Turning it on

1. Go to **Configure >> Magic AI >> Storefront Features**. If your store has more than one channel, choose the channel at the top of the page.
2. In the **Review Translation** section, switch **Enabled** on.
3. Choose the **Model**.
4. Click **Save Configuration**.

The API key of the chosen model's provider must be saved first; see [Generative AI Configuration](../configure/magic-ai.md). Unlike the other storefront features, review translation is controlled by this switch alone and keeps working when the general **Enabled** switch is off.

## What the shopper sees

1. The shopper opens a product page and scrolls to its reviews.
2. Under a review, they click **Translate**. The link reads **Translating...** while the model works, and the translated text then replaces the original.

<ImagePopup src="/images/generative-ai/review-magicai.png" alt="Translate link under a review" />

The translation is into the locale the shopper has selected in the storefront, so a store that serves several languages translates each review into whichever one the visitor is using.
