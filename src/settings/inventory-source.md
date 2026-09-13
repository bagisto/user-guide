# Inventory Source

Multi-Warehouse Inventory is one of the unique features of Bagisto. Here we will explain how you can manage multi-warehouse inventory in Laravel eCommerce and provide reliable service to your customers.  

Having a single inventory source can pose some restrictions for your eCommerce store.  

For instance, suppose you have only one inventory in Delhi. A customer from Chennai places an order. Delivering that product from Delhi may result in delays, higher transportation costs, etc. However, if you have an inventory in Chennai, the product will reach the customer faster, cutting down time and shipping cost.  

By using Multi-Warehouse Inventory, you can manage all inventory sources. In Bagisto, you can create as many inventory sources as needed and manage them seamlessly.

### Creating an inventory source

1. Go to **Settings >> Inventory Sources**.

2. Click **Create Inventory Source**, as shown below.

   <ImagePopup src="/images/settings/inventory-source.png" alt="Inventory Source" />

3. Under **General**, enter the **Code**, **Name**, **Description**, **Latitude**, **Longitude** and **Priority**, and set the **Status** as active.

   <ImagePopup src="/images/settings/inventory-configuration.png" alt="Inventory Configuration" />

4. Under **Contact Information**, enter the **Name**, **Email**, **Fax** and **Contact Number**.

   <ImagePopup src="/images/settings/contact-info.png" alt="Contact Information" />

5. Under **Source Address**, enter the address details such as country, street, state and city.

   <ImagePopup src="/images/settings/source-address.png" alt="Source Address" />

6. Click **Save Inventory Sources**. The newly created inventory source is listed, as shown below.

   <ImagePopup src="/images/settings/inventory-output.png" alt="Inventory Output" />

### Assigning the inventory source to a channel

1. Go to **Settings >> Channels** and open the channel.

2. In the **Inventory Sources** field, select the inventory sources for the channel. This is a multi-select field, so you can select several.

3. Click **Save Channel**.

### Inventory Setting on the Product Page

1. Go to **Catalog >> Products** and open the product.

2. Under **Inventories**, enter the quantity for each inventory source.

3. Click **Save Product**.

**Note:** If you do not enter any quantity, by default 0 is saved, and an inventory with 0 quantity will not be visible in the shipment page inventory options.  

<ImagePopup src="/images/settings/product-inventory.png" alt="Product Inventory" />

### Inventory Setting on the Shipment Page

1. Go to **Sales >> Orders** and open the order.

2. Click **Invoice** and create the invoice.

3. Click **Ship**.

4. For each ordered product, choose the inventory it should be delivered from in the **Source** field.

   <ImagePopup src="/images/settings/inventory-setting.png" alt="Inventory Setting" />

5. Enter the quantity to ship.

6. Click **Create Shipment**.

**Note:** You can enable only one inventory at a time. When one inventory is selected, the others are automatically disabled. For example, if you select **Noida Warehouse**, other inventories will be disabled.

So, by following these steps, you can create and manage **Inventory Sources** in Bagisto.
