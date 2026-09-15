# Bundle Product

A bundle product is a kit that shoppers put together from options, such as an outfit where
they choose the jeans, the jacket, the T-shirt and the shoes. Each option offers a few
simple products, and the bundle's price is the total of the products the shopper chooses.

This page covers what's specific to bundle products. For the sections every product shares,
see [Products](./products.md).

## Create a bundle product

Create the product as described in [Create a product](./products.md#create-a-product),
choosing **Bundle** as the **Type**.

A bundle product has no **Price**, **Shipping** or **Inventories** section. Prices, weights
and stock come from the products in its options.

## Add an option

The **Bundle Items** section holds the bundle's options, such as **Select Jeans**.

1. In **Bundle Items**, click **Add Option**. The **Option** dialog opens.
2. Enter the **Title** shoppers see for the option.
3. Choose the **Type**, which decides how shoppers choose:
   - **Select**: a drop-down list, one product.
   - **Radio**: radio buttons, one product.
   - **Checkbox**: tick boxes, any number of products.
   - **Multiselect**: a list where shoppers can pick several products.
4. Choose whether the option **Is Required**. When it's **Yes**, shoppers must choose from
   the option.
5. Click **Save**.

<ImagePopup src="/images/bundle-product/bundle-option.png" alt="Option dialog with Title, Type and Is Required" />

To change an option, click **Edit** on it. **Delete** removes the option and its products.

## Add products to an option

1. Click **Add Product** on the option. The **Select Products** panel opens.
2. Search for the products by name. Only simple products without customizable options are
   listed.
3. Tick the products.
4. Click **Add Selected Product**.
5. Enter the **Default Qty** for each product.
6. Mark the product chosen by default: the radio button for **Select** and **Radio**
   options, or the tick boxes for **Checkbox** and **Multiselect** options.
7. Click **Save Product**.

<ImagePopup src="/images/bundle-product/bundle-items.png" alt="Bundle Items section with the Select Jeans option and its products" />

Drag a product by its handle to reorder it, or click **Delete** on its row to remove it.

## What shoppers see

The product page lists each option with its products and their prices, with the default
products already chosen, and a **Total Amount** that updates as shoppers choose.

- For **Select** and **Radio** options, shoppers can change the quantity of the product
  they choose.
- For **Checkbox** and **Multiselect** options, each product's **Default Qty** is used.
- A **Select**, **Radio** or **Multiselect** option that isn't required also offers **None**.

<ImagePopup src="/images/bundle-product/output.png" alt="Bundle product page with the Select Jeans and Select Jacket options" />
