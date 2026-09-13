# Personalized Checkout Message

After an order is placed, the order confirmation page shows a standard thank-you line. With this feature on, Bagisto asks the model to write a short message for that order, mentioning what the shopper bought, and shows it under the thank-you heading in place of the standard line. It gives the moment a personal touch without any work on your side.

## Turning it on

1. Go to **Configure >> Magic AI >> Storefront Features** and choose the channel at the top of the page.
2. In the **Personalized Checkout Message** section, switch **Enabled** on.
3. Choose the **Model**.
4. Click **Save Configuration**.

The Magic AI master switch and the provider key must be in place first; see [Generative AI Configuration](../configure/magic-ai.md).

## What the shopper sees

The message is written when the confirmation page opens, right after the order is placed. It is not stored with the order, so reloading the page asks the model again and the wording may differ. If the provider cannot be reached, the page shows its standard thank-you line and the order is unaffected.

<ImagePopup src="/images/generative-ai/personalized-chckout-message.png" alt="Personalised message on the order confirmation page" />

Because the text is generated for each order, wording varies from one order to the next. It draws only on the order itself, such as the items bought, and does not use anything the shopper has not shared with the store. Each confirmation page view is one request to the provider.
