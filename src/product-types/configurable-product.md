# Configurable Product

A configurable product is one product page for an item that comes in variants, such as a
T-shirt in several colors and sizes. Each variant is a simple product with its own SKU,
price, weight, stock and images. Shoppers pick the values they want on the product page,
and the matching variant is what they buy.

This page covers what's specific to configurable products. For the sections every product
shares, see [Products](./products.md).

## Before you start

- The attributes the variants differ by, such as **Color** and **Size**, must be
  **Select** attributes with **Use To Create Configurable Product** switched on. See
  [Product Attributes](../attribute/product-attribute.md).
- Those attributes must be in the attribute family you choose. See
  [Attribute Families](../attribute/attribute-family.md).

## Create a configurable product

1. Go to **Catalog >> Products**.
2. Click **Create Product**.
3. Choose **Configurable** as the **Type**.
4. Choose the **Family**.
5. Enter the **SKU**.

   <ImagePopup src="/images/configurable-product/configurable.png" alt="Create New Product dialog with the Configurable type" />

6. Click **Save Product**. The **Configurable Attributes** step lists every value of the
   family's configurable attributes.
7. Click the **×** on each value you don't sell. Removing all of an attribute's values
   leaves that attribute out.

   <ImagePopup src="/images/configurable-product/configurable-attributes.png" alt="Configurable Attributes step with the Color, Size and Sleeve values" />

8. Click **Save Product**. The product is created with one variant for every combination
   of the remaining values, and its edit screen opens.

To go back to the type, family and SKU, click **Back** instead of saving.

::: tip Fewer values, fewer variants
Three colors and four sizes make twelve variants. Remove the values you don't stock before
you save, so you don't have to delete extra variants afterwards.
:::

## What the configurable product holds

The configurable product itself has no **Price**, **Shipping** or **Inventories** section,
because each variant has its own. Its other sections, such as **Description**, **Images**
and **Categories**, describe the product page shoppers see. See
[The edit screen](./products.md#the-edit-screen).

The **Variations** section lists the variants, each with its image, name, SKU, values,
price and quantity.

<ImagePopup src="/images/configurable-product/variations.png" alt="Variations section listing the variants of a T-shirt" />

## Set up the variants

New variants are named **Variant** followed by numbers, and their SKUs are made from the
product's SKU, such as `linen-summer-shirt-variant-1-6`. They start with a price and weight
of 0 and no stock, so rename them and set their prices before you sell the product. The
quickest way is to change several variants at once.

1. In **Variations**, tick the variants to change. To tick every variant with a value, such
   as every **Black** variant, use **Select Variants**.
2. Open **Select Action** and choose what to change: **Edit Names**, **Edit SKU**,
   **Edit Prices**, **Edit Inventories**, **Edit Weight**, **Edit Status**,
   **Add Images**, **Remove Images** or **Remove Variants**.

   <ImagePopup src="/images/configurable-product/variant-mass-edit.png" alt="Select Action menu for the ticked variants" />

3. In the panel that opens, enter a value for each variant. To give every variant the same
   value, enter it once at the top and click **Apply to All**.
4. Click **Save**.
5. Click **Save Product**.

### Edit one variant

1. Click **Edit** on the variant. The **Product** panel opens.
2. Change the **Name**, **SKU**, **Price**, **Status** or **Weight**, the **Quantities** for
   each inventory source, or the **Images**.
3. Click **Save**.
4. Click **Save Product**.

<ImagePopup src="/images/configurable-product/variant-edit.png" alt="Product panel for editing one variant" />

To change anything else about a saved variant, such as its description, click
**Product Details Page** at the bottom of the panel. The variant's edit screen opens in a
new tab.

### Add or remove a variant

- **Add Variant** opens a dialog with a list for each configurable attribute. Choose the
  values and click **Add**. A combination that already exists isn't added twice.
- **Delete** on a variant's row removes the variant.

Click **Save Product** to keep the change.

<ImagePopup src="/images/configurable-product/add-variant.png" alt="Add Variant dialog with a list for each configurable attribute" />

## What shoppers see

The product page shows the lowest variant price, labelled **As low as**, and a choice for
each configurable attribute. The values shoppers pick decide which variant goes into the
cart. When an attribute's **Input Options** is a color, image or text
swatch, shoppers pick from swatches instead of a list. See
[Product Attributes](../attribute/product-attribute.md).

<ImagePopup src="/images/configurable-product/output.png" alt="Configurable product page with Color and Size choices" />
