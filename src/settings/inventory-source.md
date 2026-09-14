# Inventory Sources

An inventory source is a place where you keep stock, such as a warehouse or a shop. Bagisto tracks each product's quantity per source, so you can sell stock from several locations and choose where each shipment comes from.

Every store starts with one inventory source, **Default**.

## Create an inventory source

1. Go to **Settings >> Inventory Sources**.
2. Click **Create Inventory Source**. The **Add Inventory Source** page opens.
3. In **General**, enter the **Code**, **Name** and **Description**.
4. In **Contact Information**, enter the **Name**, **Email**, **Contact Number** and **Fax** of the person responsible for the source.
5. In **Source Address**, enter the **Country**, **State**, **City**, **Street** and **Postcode**.
6. In **Settings**, enter the **Latitude**, **Longitude** and **Priority**.
7. Turn on **Status**.
8. Click **Save Inventory Sources**.

   <ImagePopup src="/images/settings/create-inventory-source.png" alt="Add Inventory Source page filled in for a New York warehouse" />

The message *Inventory Source Created Successfully* appears and the new source is listed.

| Field | What to enter |
|---|---|
| **Code** | A unique code for the source, such as `new_york`. Start with a letter and use only letters, numbers and underscores. |
| **Name** | The name of the source, such as **New York Warehouse**. |
| **Description** | Optional notes about the source. |
| **Contact Information** | The contact person's **Name**, **Email** and **Contact Number**. **Fax** is optional. |
| **Source Address** | The full address of the source. Every address field is required. |
| **Latitude** and **Longitude** | Optional map coordinates of the source, such as `40.7484` and `-73.9857`. |
| **Priority** | An optional number for ranking the source. If you leave it empty, `0` is saved. |
| **Status** | Turn on to use the source. Only active sources appear on the product page. |

## Sell a source's stock on a channel

1. Go to **Settings >> Channels** and click the edit icon of the channel.
2. In **General**, select the source under **Inventory Sources**. You can select several sources.
3. Click **Save Channel**.

## Set a product's stock per source

1. Go to **Catalog >> Products** and open the product.
2. In **Inventories**, enter the quantity held at each source.
3. Click **Save Product**.

   <ImagePopup src="/images/settings/product-inventory.png" alt="Inventories section of a product with a quantity for the Default source" />

**Pending Ordered Qty** is the quantity that has been ordered but not shipped yet. It is taken from the source's stock when the order is shipped, and becomes available for sale again if the order is canceled.

## Ship from a source

When you [create a shipment](../orders/create-shipment.md), choose the **Source** the items ship from. The shipment form shows the **Qty. Available** at that source, and you enter the **Qty. To Ship**.

## Edit or delete an inventory source

On **Settings >> Inventory Sources**, click the edit icon of a source to change it, or the delete icon to remove it. A store must keep at least one inventory source.
