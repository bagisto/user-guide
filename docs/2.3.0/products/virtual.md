# Virtual Product

This document provides a guide on creating virtual products in Bagisto 2.3.0. In an eCommerce store, products can generally be categorized into two types: physical and intangible. Virtual products fall under the category of intangible products, including memberships, services, warranties, or subscriptions in [Bagisto](https://bagisto.com/en/).

A virtual product, unlike a downloadable product, is not something that can be downloaded but rather a service offered to customers.

### Steps To Create Virtual Product In Bagisto 2.3.0

1. Go to **Catalog >> Products >> Select Virtual** under Product Type select **Family**.
2. Enter **SKU** and **Save the Product**, as shown in the image below.

    ![Virtual](../../assets/2.3.0/images/virtual-product/virtual.png)

After clicking on the Save Product button, you'll be redirected to the next page with various new settings.

### General Settings

- **Name:** Enter the name of the product.
- **URL Key:** This will be the end of the URL, 
    e.g., http://bagisto.test.com/products/fitness-membership (fitness-membership is a URL key).
- **Tax Category:** Select the tax category from the dropdown list.

    ![editProduct](../../assets/2.3.0/images/virtual-product/editProduct.png)

#### New

- Enable the toggle button to feature the product as a new product, which will be shown under the New Products section.

#### Featured

- Enable the toggle button to show the product under the Featured Products section.

#### Visible Individually

- Enable the toggle button to make the product visible on the frontend.

#### Status

- Enable the toggle button to enable the product on your eCommerce store.

#### Guest Checkout

- Enable the toggle button to allow guest customers to order the product.

    ![toggleButtons](../../assets/2.3.0/images/virtual-product/toggleButtons.png)

### Description

Fill in the following fields under the description:

- **Short Description:** Enter a brief description of the product feature.
- **Description:** Provide a detailed description of the product.

    ![description](../../assets/2.3.0/images/virtual-product/description.png)

### Meta Description

Fill in the following fields under meta description for improved searchability on search engines:

- **Meta Title:** Provide the main title of the product.
- **Meta Keyword:** Provide meta keywords for specific search engine optimization.
- **Meta Description:** Enter a description for better search engine listings.

    ![metaDescription](../../assets/2.3.0/images/virtual-product/metaDescription.png)

### Images

Add product images by clicking on **Add Images**. Multiple images can be added.

 ![image](../../assets/2.3.0/images/virtual-product/image.png)

 ### Customizable Item
There is the list of fields you need to provide under the Customizable Item section to allow product personalization in Bagisto:

### Title
Provide the title of the customization by which will be known in Product.

### Type
These options enhance flexibility, allowing customers to personalize their purchases easily. 

![customization](../../assets/2.3.0/images/simple-product/customization.png)

### Is Required
This Feature allows admins to specify whether a customization field must be filled before checkout.

![customization](../../assets/2.3.0/images/simple-product/is-required.png)

### Channels

Select the channels in which you want to save this product.

![Channels](../../assets/2.3.0/images/simple-product/channels.png)

### Inventory

Insert the quantity of the product available in your inventory. The default is set to 0, indicating out of stock on the frontend.

![inventories](../../assets/2.3.0/images/virtual-product/inventories.png)

### Price

Insert the price, cost, and special price. Set the special price date for displaying the special price on the website.

![price](../../assets/2.3.0/images/virtual-product/price.png)

### Product At Front End

The virtual product will be visible at the front end.

![output](../../assets/2.3.0/images/virtual-product/output.png)

