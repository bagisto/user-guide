# Inventory Source

Multi-Warehouse Inventory is one of the unique features of Bagisto. Here we will explain how you can manage multi-warehouse inventory in Laravel eCommerce and provide reliable service to your customer. Having a single inventory source can pose some restrictions for your eCommerce store.

For instance, suppose you have only one inventory in Delhi. A Customer from Chennai has ordered some products. So delivering that product from the Delhi location can have some impacts like delay in delivery of the product, increased transportation cost, etc. However, if you have an inventory in Chennai, then the product will reach the customer very quickly which will further cut down the time and shipping cost. 

By using Multi-Warehouse Inventory you can easily manage all inventory sources. In Bagisto, you can create as many inventory sources and easily manage them.

### Easy step to managing your inventory in Bagisto 2.1.0

**Step 1:** On the Admin panel of Bagisto click on **Setting >> Inventory Sources >> Create Inventory Source** as shown in the below image.

  ![Inventory Source](../../assets/2.1.0/images/settings/inventorySource.png)

**Step 2:** **General**

Enter the **Code, Name, Description, Latitude, Longitude, and Priority**, and set the **Status** active.

![Inventory Configuration](../../assets/2.1.0/images/settings/inventoryConfiguration.png)

**Step 3:** **Contact Information**

You have to enter a **Name, Email, Fax, Contact Number**  

![Contact Info](../../assets/2.1.0/images/settings/contactInfo.png)

**Step 4:** **Source Address**

You have to enter the source address like country, address, state, city, etc of your inventory.

![Source Address](../../assets/2.1.0/images/settings/sourceAddress.png)

After that, you need to click on **Save Inventory Source**. So now you will able to see our new inventory source is been created successfully as shown in the below image.

![Inventory Output](../../assets/2.1.0/images/settings/inventoryOutput.png)

**Step 5:** Click on **Setting >> Channel**. Open the selected channel in **Edit Mode >> Inventory Sources**. This is the multi-select type where you can select multiple inventory sources for your channels. After that, click **Save Channel**.

### Inventory Setting on the Product Page

Click on **Catalog >> Products.** Open the selected product in **Edit Mode** and enter the **quantity** in each inventory source. At last, after filling up the necessary fields, click **Save Product Note:-** If you do not enter any quantity, by default 0 is saved, and having 0 quantity inventory will be not visible in the inventory option on the shipment page.

![Product Inventory](../../assets/2.1.0/images/settings/productInventory.png)

### Inventory Setting on the Shipment Page

Click on **Sales >> Orders**. Open the selected order in **Edit Mode >> Invoice >> Save Invoice >> Ship** Under the Product Ordered Section, Admin can decide from which inventory they want to deliver the product.

![Inventory Setting](../../assets/2.1.0/images/settings/inventorySetting.png)

**Note:-** You can enable only one Inventory at a  time when you select one inventory rest inventory will be automatically disabled. For example, I selected Noida Warehouse so another inventory will be disabled. Enter the quantity to ship and **Create Shipment**.

So by this you can easily create **Inventory Sources** in Bagisto. 