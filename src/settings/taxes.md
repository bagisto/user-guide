# Taxes

In e-commerce, various taxes are applied when purchasing products, and these rates can differ by country. Bagisto allows you to create and manage taxes efficiently.  

## Tax Rate

1. Go to **Settings >> Taxes >> Tax Rates**.

2. Click **Create Tax Rate**.

   <ImagePopup src="/images/settings/tax-rate.png" alt="Tax Rate" />

3. Enter the following fields:

   - **Identifier**
   - **Country**
   - **State**
   - **Zip Code**
   - **Rate**

   **Note:** You can also set a zip code range so that the tax applies only within that range.

4. Click **Save Tax Rate**.

   <ImagePopup src="/images/settings/save-tax-rate.png" alt="Save Tax Rate" />

## Tax Categories

1. Go to **Settings >> Taxes >> Tax Categories**.

2. Fill in the following fields:

   - **Code:** Enter a unique code for the tax category.
   - **Name:** Enter the name of the tax category.
   - **Description:** Enter a description.
   - **Tax Rates:** Assign the tax rate.

3. Click **Save Tax Category**.

   <ImagePopup src="/images/settings/save-category.png" alt="Save Tax Category" />

4. Assign the tax category when creating a product.

   <ImagePopup src="/images/settings/product-category.png" alt="Product Tax Category" />

### Frontend

1. On the checkout page, enter the billing address or sign in to your account and continue.

2. Select the shipping method and continue.

3. Select the payment method and continue.

   <ImagePopup src="/images/settings/tax-front.png" alt="Tax Frontend" />

The tax will appear on the product price in the frontend. For example, if a 20% tax is set, it will be applied to the product price at checkout.  

This is how you can create **Taxes** in Bagisto.
