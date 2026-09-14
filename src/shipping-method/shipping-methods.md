# Shipping Methods

Bagisto comes with two shipping methods, **Free Shipping** and **Flat Rate Shipping**. At checkout, shoppers choose from the methods you turn on.

## Offer a shipping method

1. Go to **Configure >> Sales >> Shipping Methods**.
2. In the section of the method you want to offer, switch **Status** on.
3. Enter the **Title** shoppers see at checkout.
4. Optionally, enter a **Description**.
5. For **Flat Rate Shipping**, enter the **Rate** and choose the **Type**.
6. Click **Save Configuration**.

<ImagePopup src="/images/configure/shipping-methods-settings.png" alt="Shipping Methods screen with Free Shipping and Flat Rate Shipping turned on" />

To stop offering a method, switch its **Status** off and save. All settings are set per channel, and the title and description are also set per language.

## Free shipping

A shipping method with no charge.

| Setting | What it does |
|---|---|
| **Title** | The name of the method at checkout, such as `Free Shipping`. Required while **Status** is on. |
| **Description** | A short line shown with the method at checkout. |
| **Status** | Offers the method at checkout. |

## Flat rate shipping

A shipping method that charges a fixed rate.

| Setting | What it does |
|---|---|
| **Title** | The name of the method at checkout, such as `Flat Rate`. Required while **Status** is on. |
| **Description** | A short line shown with the method at checkout. |
| **Rate** | The amount charged, in your store's base currency. Required while **Status** is on. |
| **Type** | **Per Unit** charges the rate for every unit of each physical product in the cart, so three units cost three times the rate. **Per Order** charges the rate once for the whole order. |
| **Status** | Offers the method at checkout. |

The address orders are shipped from is set under [Shipping Settings](../configure/shipping.md).
