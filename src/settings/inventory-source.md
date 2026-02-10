# Inventory Source

Multi-Warehouse Inventory is one of the unique features of Bagisto. Here we will explain how you can manage multi-warehouse inventory in Laravel eCommerce and provide reliable service to your customers.  

Having a single inventory source can pose some restrictions for your eCommerce store.  

For instance, suppose you have only one inventory in Delhi. A customer from Chennai places an order. Delivering that product from Delhi may result in delays, higher transportation costs, etc. However, if you have an inventory in Chennai, the product will reach the customer faster, cutting down time and shipping cost.  

By using Multi-Warehouse Inventory, you can easily manage all inventory sources. In Bagisto, you can create as many inventory sources as needed and manage them seamlessly.

### Easy Steps to Manage Inventory in Bagisto

**Step 1:** On the Admin panel of Bagisto, go to **Settings >> Inventory Sources >> Create Inventory Source** as shown below.  

<ImagePopup src="/images/settings/inventorySource.png" alt="Inventory Source" />

**Step 2: General**  
Enter the **Code, Name, Description, Latitude, Longitude, and Priority**, and set the **Status** as active.  

<ImagePopup src="/images/settings/inventoryConfiguration.png" alt="Inventory Configuration" />

**Step 3: Contact Information**  
Enter **Name, Email, Fax, and Contact Number**.  

<ImagePopup src="/images/settings/contactInfo.png" alt="Contact Information" />

**Step 4: Source Address**  
Enter the source address details like country, address, state, and city.  

<ImagePopup src="/images/settings/sourceAddress.png" alt="Source Address" />

After that, click on **Save Inventory Source**. You will now see the newly created inventory source as shown below.  

<ImagePopup src="/images/settings/inventoryOutput.png" alt="Inventory Output" />

**Step 5:** Go to **Settings >> Channels**. Open the selected channel in **Edit Mode >> Inventory Sources**. This is a multi-select field where you can select multiple inventory sources for your channels. After that, click **Save Channel**.

### Inventory Setting on the Product Page

Go to **Catalog >> Products**. Open the selected product in **Edit Mode** and enter the **quantity** for each inventory source. After filling up the required fields, click **Save Product**.  

**Note:** If you do not enter any quantity, by default 0 is saved, and an inventory with 0 quantity will not be visible in the shipment page inventory options.  

<ImagePopup src="/images/settings/productInventory.png" alt="Product Inventory" />

### Inventory Setting on the Shipment Page

Go to **Sales >> Orders**. Open the selected order in **Edit Mode >> Invoice >> Save Invoice >> Ship**.  

Under the **Product Ordered Section**, the Admin can decide from which inventory the product should be delivered.  

<ImagePopup src="/images/settings/inventorySetting.png" alt="Inventory Setting" />

**Note:** You can enable only one Inventory at a time. When one inventory is selected, others will automatically be disabled.  
For example, if you select **Noida Warehouse**, other inventories will be disabled. Enter the quantity to ship and click **Create Shipment**.

So, by following these steps, you can easily create and manage **Inventory Sources** in Bagisto.
