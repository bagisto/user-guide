# Inventory

The **Inventory** screen decides whether shoppers can order more of a product than you have in stock, and the stock level the admin dashboard highlights. These settings apply to the whole store.

## Allow back orders

A back order is an order for more units than you have in stock. Allowing back orders keeps products buyable while you restock.

1. Go to **Configure >> Catalog >> Inventory**.
2. In **Product Stock Option**, switch **Allow Back Orders** on.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/inventory-settings.png" alt="Product Stock Option section of the Inventory screen with Allow Back Orders switched on" />

While it's on, products that have [**Manage Stock**](../product-types/products.md#inventories) switched on can be added to the cart and ordered even when their stock runs out. This covers simple products and the variants of configurable products, and bundle and grouped products through the products in them.

While it's off, shoppers can't add more units than you have in stock, and out-of-stock products can't be bought. Products with **Manage Stock** switched off can always be bought.

## Set the out-of-stock threshold

1. Go to **Configure >> Catalog >> Inventory**.
2. In **Product Stock Option**, enter the **Out-of-Stock Threshold**.
3. Click **Save Configuration**.

The default is `0`. On the admin dashboard, the [**Stock Threshold**](../getting-started/dashboard.md#stock-threshold) card shows the stock of each product it lists in red when the stock is at or below this number, and in green above it, so you can see what needs restocking.
