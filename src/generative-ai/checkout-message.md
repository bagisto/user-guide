# Personalized Checkout Message

<div class="feature-meta feature--ai"><span class="feature-meta__primary">Generative AI</span><span>Storefront</span></div>

After an order is placed, the order confirmation page shows **Thank you for your order!** and a standard line: "We will email you, your order details and tracking information". With the personalized checkout message on, Magic AI writes a short thank-you message for that order and shows it in place of the standard line. It gives the moment a personal touch, with no work on your side.

## Where it appears

On the order confirmation page, under **Thank you for your order!**, straight after checkout.

## How the message is written

1. A shopper places an order.
2. When the confirmation page opens, Bagisto sends the model the order's details: each item's name, quantity and total, the customer's name, the storefront language and your store's name.
3. The model's message is shown as plain text in place of the standard line.

If the provider can't be reached, the page shows the standard line and the order isn't affected.

::: tip Try it before shoppers see it
The message isn't checked before the shopper sees it. Place a few test orders after you switch the feature on, and read the messages they get.
:::

### The message is written once and not stored

- **The confirmation page waits for the model's reply before it opens**, so choose a fast model.
- **The message isn't saved with the order** and isn't included in order emails.
- **The confirmation page is shown only once.** If the shopper reloads it, they're taken to the cart.
- **Only the order's own details are used**, nothing the shopper hasn't shared with your store.

## What you control

| Setting | What it does |
|---|---|
| **Enabled** under **Configure >> Magic AI >> General** | Switches every Magic AI feature on or off |
| **Enabled** in the **Personalized Checkout Message** section of **Configure >> Magic AI >> Storefront Features** | Turns the message on, per channel |
| **Model** in the **Personalized Checkout Message** section | The model that writes the message, per channel |

To set everything up, see [Enable the storefront features](../configure/magic-ai.md#enable-the-storefront-features).

Each order confirmation is one request to the provider, billed by that provider.
