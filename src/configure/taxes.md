# Taxes

This screen decides how tax is calculated and how it is shown to shoppers. The tax rates and tax categories themselves are created under **Settings >> Taxes**; see [Taxes](../settings/taxes.md).

Go to **Configure >> Sales >> Taxes**.

## Choose the tax categories

1. In **Tax Categories**, choose the **Shipping Tax Category**.
2. Choose the **Product Default Tax Category**.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/taxes-calculation.png" alt="Tax Categories and Calculation Settings sections of the Taxes screen" />

**Shipping Tax Category:** The tax category used to calculate tax on shipping. If none is chosen, shipping is not taxed.

**Product Default Tax Category:** The tax category used for products that don't have a tax category of their own.

## Decide how tax is calculated

1. In **Calculation Settings**, choose the options described below.
2. Click **Save Configuration**.

| Setting | Options |
|---|---|
| **Calculation Based On** | The address that decides which tax rates apply: **Shipping Address** (the default), **Billing Address**, or **Shipping Origin**, the address set under [Shipping Settings](./shipping.md). |
| **Product Prices** | **Excluding Tax** (the default) when the prices you enter don't include tax, so tax is added on top. **Including Tax** when they already include it. |
| **Shipping Prices** | The same choice for shipping rates. |
| **Apply Tax On** | **After Discount** (the default) calculates tax on the price after cart rule discounts. **Before Discount** calculates it on the original price. This applies only to prices that exclude tax. |

## Set a default destination

Until a shopper enters an address, tax is calculated for the default destination.

1. In **Default Destination Calculation**, choose the **Default Country**.
2. Choose the **Default State**.
3. Enter the **Default Post Code**.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/taxes-display.png" alt="Default Destination Calculation and tax display sections of the Taxes screen" />

## Choose how tax is displayed

**Shopping Cart Display Settings** decide how tax is shown in the cart and at checkout. **Orders, Invoices, Refunds Display Settings** decide the same for orders, invoices and refunds. Both sections have **Display Prices**, **Display Subtotal** and **Display Shipping Amount**, each with these options:

- **Excluding Tax** – the amount without tax. This is the default.
- **Including Tax** – the amount with tax.
- **Excluding and Including Both** – both amounts.

**Show Tax Breakdown**, in the cart section, lists the tax for each product and tax rate in the cart and checkout summary. It is meant for checking your tax setup, and is off by default.
