# Review Translation

<div class="feature-meta feature--ai"><span class="feature-meta__primary">Generative AI</span><span>Storefront</span></div>

Review translation lets shoppers read a product review in their own language. A **Translate** button appears under each review on the product page. When a shopper clicks it, the model translates the review into the language they're browsing your store in. A review written in another language is still useful to them, and the review itself isn't changed.

## Where it appears

The **Translate** button sits under the text of each approved review on a product page.

## Translate a review

This is what a shopper does on the storefront:

1. Open a product page and scroll to its reviews.
2. Under a review, click **Translate**. The button reads **Translating...** while the model works.

The review's text is replaced on the shopper's screen by the translation, in the language currently selected in the storefront. The review title stays as it was written. When the shopper reloads the page, the original text is shown again. If the translation fails, the shopper sees an error message and the review stays as written.

### What to expect

- **Translations go straight to the shopper, without your review.** Try the feature on a few reviews before you switch it on for a channel.
- **Each click is a new translation.** Translations aren't stored. Every click on **Translate** sends the review to the provider again, and each one is a separate request that the provider bills.

## What you control

| Setting | What it does |
|---|---|
| **Enabled** under **Configure >> Magic AI >> General** | Switches Magic AI on for your store |
| **Enabled** in the **Review Translation** section of **Configure >> Magic AI >> Storefront Features** | Shows the **Translate** button, per channel |
| **Model** in the **Review Translation** section | The model that translates reviews, per channel |

Save the API key of the chosen model's provider under **Configure >> Magic AI >> Providers** first. To set everything up, see [Enable the storefront features](../configure/magic-ai.md#enable-the-storefront-features).

Only reviews you've approved appear on the storefront, so only approved reviews can be translated. See [Approve or disapprove a review](../customer/customer-review.md#approve-or-disapprove-a-review).
