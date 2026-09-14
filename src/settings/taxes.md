# Taxes

Bagisto adds tax to an order using two things you set up under **Settings >> Taxes**:

- **Tax rates** – the percentage charged in a location, such as 8.875% in New York.
- **Tax categories** – groups of tax rates that you assign to products.

Create your tax rates first, then a tax category that includes them, and then assign the category to your products. At checkout, Bagisto applies the rates in the product's tax category that match the customer's address.

How tax is calculated and displayed, such as which address is used and whether prices include tax, is set under [Configure >> Sales >> Taxes](../configure/taxes.md).

## Create a tax rate

1. Go to **Settings >> Taxes >> Tax Rates**.
2. Click **Create Tax Rate**.
3. Enter an **Identifier**, such as `US-NY`.
4. Choose the **Country**.
5. Choose the **State**, or leave it empty to use the rate in the whole country.
6. Enter the **Rate** as a percentage, such as `8.875`.
7. Optionally, in **Settings**, limit the rate to certain postcodes. See the table below.
8. Click **Save Tax Rate**.

   <ImagePopup src="/images/settings/create-tax-rate.png" alt="Create Tax Rate page for a New York rate of 8.875%" />

You return to **Tax Rates**, where the message *Tax rate created successfully.* appears and the new rate is listed.

| Field | What it does |
|---|---|
| **Identifier** | A unique name for the rate. Pick one that tells you the location, such as `US-NY`. |
| **Country** | The country the rate applies to. |
| **State** | The state the rate applies to. Leave it empty to apply the rate in every state of the country. |
| **Rate** | The tax percentage, from 0 to 100. |
| **Zip Code** | A single postcode the rate applies to. Leave it empty to apply the rate to every postcode. |
| **Enable Zip Range** | Turn on to enter a **Zip From** and **Zip To** instead, and apply the rate to every postcode in that range. |

## Create a tax category

1. Go to **Settings >> Taxes >> Tax Categories**.
2. Click **Create Tax Category**. The **Create Tax Category** form opens.
3. Enter a **Code**, such as `standard_rate`. The code must be unique.
4. Enter the **Name** and a **Description**.
5. In **Tax Rates**, select the rates this category uses. To select more than one, hold **Ctrl** (**⌘** on a Mac) while you click.
6. Click **Save Tax Category**.

   <ImagePopup src="/images/settings/create-tax-category.png" alt="Create Tax Category form with the US-NY tax rate selected" />

The message *Tax category created successfully.* appears and the new category is listed.

## Assign the tax category to products

1. Go to **Catalog >> Products** and open the product.
2. In **General**, choose the **Tax Category**.
3. Click **Save Product**.

   <ImagePopup src="/images/settings/product-tax-category.png" alt="Tax Category field in the General section of a product" />

Products that don't have a tax category of their own use the **Product Default Tax Category** chosen under [Configure >> Sales >> Taxes](../configure/taxes.md), so set it to the category most of your products use.
