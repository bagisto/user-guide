# Inventory Sources

An inventory source is a place where you keep stock, such as a warehouse or a shop. Bagisto tracks each product's quantity per source, so you can sell stock from several locations and choose where each shipment comes from.

Every store starts with one inventory source, **Default**.

## Your inventory sources

Go to **Settings >> Inventory Sources** to see every source with its **ID**, **Code**, **Name**, **Priority** and **Status**. Search by code, name or priority, or use **Filter** to show only active or inactive sources.

<ImagePopup src="/images/settings/inventory-sources.png" alt="Inventory Sources grid with the Default and West Coast Warehouse sources" />

## Create an inventory source

1. Go to **Settings >> Inventory Sources**.
2. Click **Create Inventory Source**. The **Add Inventory Source** page opens.
3. In **General**, enter the **Code** and **Name**, and optionally a **Description**.
4. In **Contact Information**, enter the **Name**, **Email** and **Contact Number** of the person responsible for the source, and optionally a **Fax**.
5. In **Source Address**, choose the **Country** and **State**.
6. Enter the **City**, **Street** and **Postcode**.
7. Optionally, in **Settings**, enter the **Latitude**, **Longitude** and **Priority**.
8. Switch **Status** on.
9. Click **Save Inventory Sources**.

   <ImagePopup src="/images/settings/create-inventory-source.png" alt="Add Inventory Source page filled in for an East Coast Warehouse" />

The message *Inventory Source Created Successfully* appears and the new source is listed.

| Field | What to enter |
|---|---|
| **Code** | A unique code for the source, such as `east_coast_warehouse`. Use at least two characters: start with a letter, then letters, numbers or underscores. |
| **Name** | The name of the source, such as **East Coast Warehouse**. |
| **Description** | Optional notes about the source. |
| **Contact Information** | The contact person's **Name**, **Email** and **Contact Number**. The contact number can have only digits, with an optional `+` at the start. **Fax** is optional. When **Send a notification e-mail to the inventory source after creating a shipment** is on under [Configure >> Email >> Notifications](../configure/notifications.md), this **Email** gets an email for each shipment from the source. |
| **Source Address** | The full address of the source. Every address field is required. **State** is a list for countries that have one, and a text box for others. **Street** can be up to 60 characters of letters, numbers, spaces and `' - , ( )`; dots, slashes and `#` aren't accepted. **Postcode** is at least two letters, numbers, spaces or hyphens, and starts and ends with a letter or number. |
| **Latitude** and **Longitude** | Optional map coordinates of the source, such as `40.7033` and `-74.0170`. Latitude is between -90 and 90, longitude between -180 and 180. |
| **Priority** | An optional whole number shown in the grid to help you rank your sources. It doesn't change which source stock is sold or shipped from. If you leave it empty, `0` is saved. |
| **Status** | Turn on to use the source. It's off until you switch it on. |

### What an inactive source means

When **Status** is off, the source isn't listed on product pages or when you edit a channel. Its stock stops counting as available for sale once each product's stock is updated, for example when you save the product.

If you save a channel while one of its sources is inactive, the source is removed from the channel. After you switch the source back on, select it on the channel again.

## Sell a source's stock on a channel

1. Go to **Settings >> Channels**.
2. Click the edit icon of the channel.
3. In **General**, select the source under **Inventory Sources**. You can select several sources.
4. Click **Save Channel**.

A product's quantity available for sale on a channel is its stock at that channel's active sources, minus the quantity already ordered but not shipped.

## Set a product's stock per source

Simple and virtual products have an **Inventories** section; other product types don't.

1. Go to **Catalog >> Products**.
2. Open the product.
3. In **Inventories**, check that **Manage Stock** is on. The quantity for each source appears only when it is.
4. Enter the quantity held at each source. Every active source is listed.
5. Click **Save Product**.

   <ImagePopup src="/images/settings/product-inventory.png" alt="Inventories section of a product with a quantity for each inventory source" />

**Pending Ordered Qty** is the quantity that has been ordered but not shipped yet. It is taken from the source's stock when the order is shipped, and becomes available for sale again if the order is canceled.

Virtual products aren't shipped. Their stock is taken when the order is invoiced, starting with the channel's source that has the most stock.

## Ship from a source

When you [create a shipment](../orders/create-shipment.md), choose the **Source** the items ship from. Bagisto doesn't choose a source for you. The shipment form shows the **Qty. Available** at that source, and you enter the **Qty. To Ship**. It can't be more than the quantity left to ship or the stock at that source; otherwise *Qty. Invalid* appears when you save.

## Edit or delete an inventory source

To edit a source:

1. Go to **Settings >> Inventory Sources**.
2. Click the edit icon of the source. The **Edit Inventory Sources** page opens.
3. Make your changes.
4. Click **Save Inventory Sources**.

The message *Inventory Sources Updated Successfully* appears.

To remove a source:

1. Go to **Settings >> Inventory Sources**.
2. Click the delete icon of the source.
3. Click **Agree** to confirm.

- A store must keep at least one inventory source.
- Before you delete a source, make sure each channel that uses it has another source. A channel left with no source can't be saved until you add one.
- Deleting a source also deletes the stock recorded at it for every product, and removes it from your channels. Shipments already made from it are kept.
