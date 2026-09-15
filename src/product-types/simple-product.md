# Simple Product

A simple product is one physical item with no choices to make, such as a desk lamp or a
book. It has its own price, weight and stock, and it's shipped to the shopper. Simple
products are also the building blocks of configurable, grouped and bundle products.

This page covers what's specific to simple products. For the sections every product shares,
see [Products](./products.md).

## Create a simple product

Create the product as described in [Create a product](./products.md#create-a-product),
choosing **Simple** as the **Type**. A simple product uses every section described in
[The edit screen](./products.md#the-edit-screen), including **Price**, **Shipping** and
**Inventories**.

## Customizable options

The **Customizable Item** section adds choices shoppers make on the product page, such as
engraving text, gift wrapping or a file to print, each with an optional extra price.

<ImagePopup src="/images/simple-product/customizable-item.png" alt="Customizable Item section with a Gift Message text option" />

### Add an option

1. In **Customizable Item**, click **Add Option**. The **Option** dialog opens.
2. Enter the **Title** shoppers see, such as **Engraving Text**.
3. Choose the **Type**.
4. Choose whether the option **Is Required**.
5. Fill in the fields for the type:
   - **Text** or **Textarea**: shoppers type text. Enter the **Max Characters** and the
     **Price**.
   - **File**: shoppers upload a file. Enter the **Supported File Extensions** and the
     **Price**.
   - **Date**, **Datetime** or **Time**: shoppers pick a date or time. Enter the **Price**.
   - **Checkbox**, **Radio**, **Select** or **Multiselect**: shoppers choose from a list.
     You add the list's choices after saving the option.
6. Click **Save**.
7. Click **Save Product**.

<ImagePopup src="/images/simple-product/customizable-option.png" alt="Option dialog for a Text option with Max Characters and Price" />

### Add choices to a list option

For a **Checkbox**, **Radio**, **Select** or **Multiselect** option:

1. Click **Add Option** inside the option.
2. Enter the choice's **Label**, such as **Gift Box**.
3. Enter the **Price** added when a shopper picks it.
4. Click **Save**.
5. Repeat for each choice.
6. Click **Save Product**.

Drag options and choices by their handles to reorder them. Use **Edit** and **Delete** to
change or remove them.

### What shoppers see

The options appear on the product page. The prices of the options a shopper picks are added
to the product price, and a **Total Amount** shows the result.

<ImagePopup src="/images/simple-product/customizable-option-storefront.png" alt="Gift Message field on the product page, above the Total Amount" />

::: info Where customizable options can't be used
A simple product that's a variant of a configurable product, or part of a grouped or bundle
product, can't have customizable options. Products with customizable options can't be added
to grouped or bundle products.
:::

## On the storefront

<ImagePopup src="/images/simple-product/product.png" alt="Simple product page for an Android tablet" />
