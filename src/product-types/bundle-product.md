# Bundle Product

Today's document will guide you on how to create bundle products in Bagisto. Bundle products and Grouped products are similar, where a bundle product includes customizable items that the store owner can configure to create a unique product in [Bagisto](https://bagisto.com/en/).

Each item in a bundle product can be based on one of the following product types:

- [Simple Product](https://bagisto.com/en/how-to-create-simple-product-in-bagisto/)
- [Configurable Products](https://bagisto.com/en/how-to-create-configurable-product-in-bagisto/)

### Creating a bundle product

1. Go to **Catalog >> Products**.
2. Click **Create Product**.
3. Select **Bundle** under **Type**.
4. Select the **Family**.
5. Enter the **SKU** (Stock Keeping Unit) for the product (unique to every product).
6. Click **Save Product**. You are redirected to the edit product page with several new settings.

<ImagePopup src="/images/bundle-product/bundle.png" alt="Bundle Product" />

### General Settings

- **Name:** Enter the name of the product.
- **URL Key:** This will be the end of the URL, e.g., products/assembled-core-i3-4-gb-ddr3500-gbwindows-10-pro151-inch-screen-black.
- **Tax Category:** Select the Tax Category from the dropdown list.

<ImagePopup src="/images/bundle-product/edit-product.png" alt="Edit Product" />

#### New

- Enable the toggle button to feature the product as a new product, shown under the New Products section.

#### Featured

- Enable the toggle button to show the product under the Featured Products section.

#### Visible Individually

- Enable the toggle button to make the product visible on the frontend.

#### Status

- Enable the toggle button to enable the product on your eCommerce store.

#### Guest Checkout

- Enable the toggle button to allow guest customers to order the product.

<ImagePopup src="/images/bundle-product/toggle-buttons.png" alt="Toggle Buttons" />

### Description

Fill in the following fields under description:

- **Short Description:** Enter a short description of the product feature.
- **Description:** Mention your product in detail.

<ImagePopup src="/images/bundle-product/description.png" alt="Product Description" />

### Meta Description

Fill in the following fields under meta description for improved searchability on search engines:

- **Meta Title:** Provide the main title of the product.
- **Meta Keywords:** Provide meta keywords for specific search engine optimization.
- **Meta Description:** Enter a description for better search engine listings.

<ImagePopup src="/images/bundle-product/meta-description.png" alt="Meta Description" />

### Images

To add product images, click on **Add Image**. You can add multiple images for your product.

<ImagePopup src="/images/bundle-product/image.png" alt="Product Images" />

### Bundle Items

Click **Add Option** and fill in the option fields:

- **Title:** The name of the option shown to the customer.
- **Type:** How the customer picks from the option — **Select**, **Radio**, **Checkbox** or **Multiselect**.
- **Is Required:** Set **Yes** if the customer must choose from this option, or **No** if it is optional.

<ImagePopup src="/images/bundle-product/options.png" alt="Bundle Options" />

To add products to the option:

1. Click **Add Product** on the option. The **Select Products** modal opens.
2. Search for the product and tick it.
3. Click **Add Selected Product**.
4. Enter the **Default Qty** for each product in the option.

At the front end, the customer chooses the products of each option and picks the overall quantity of the bundle. For a **Select** or **Radio** option, the customer can also change the quantity of the chosen product; for **Checkbox** and **Multiselect** options, the **Default Qty** you set is used.

<ImagePopup src="/images/bundle-product/bundle-options.png" alt="Bundle Product Options" />

### Product At Front End

The bundle product will be visible at the front end.

<ImagePopup src="/images/bundle-product/output.png" alt="Front End Output" />
