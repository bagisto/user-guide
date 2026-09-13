# Customer Group Price | Tier Pricing

Customer Group Pricing in Bagisto allows store owners to offer different product prices to different customer groups — such as **General, Wholesale, or Guest**.

This feature helps businesses create personalized pricing strategies, reward loyal buyers, and encourage bulk purchases. 

By assigning customers to specific groups, you can control how much each group pays for the same product, making your pricing model more flexible and customer-focused.

### Steps to Create a Customer Group Price in Bagisto

Before you start, create the customer group and assign it to the customer, or use one of the default groups **General, Wholesale, or Guest**.

1. Go to **Catalog >> Products** and open the product edit page. The **Customer Group Price** section is shown as in the below image.

   <ImagePopup src="/images/customer/customer-price.png" alt="Customer Group Price" />

2. Click **Add New**.

3. Fill in the following fields:

   - **Customer Group** – Select the customer group (Guest, General, Wholesale, or any group you have created).

   - **Minimum Qty** – Minimum quantity required to avail of the offer.

   - **Price Type** – Choose **Fixed** to set a fixed price for the product, or **Discount** to set a percentage discount on the product price.

   - **Price** – The fixed price or the discount percentage, depending on the price type.

4. Click the **Save** button, as shown below.

   <ImagePopup src="/images/customer/group-price.png" alt="Save Customer Group Price" />

5. Click **Save Product**.

---

**Fixed Price Example**  

Here I have set the fixed price of the product in the **Guest Customer group** with a minimum quantity of 1.  

It means if you purchase one piece of this product at $2500, and a Customer Group Price is added at $220, then the cost will be $220 for a quantity of one.

After saving the product, you can see the price change according to the group.  

As set for the Guest group with the fixed price, it is showing the pricing according to the guest group as shown below.  

<ImagePopup src="/images/customer/price-output.png" alt="Group Price Output" />

### Adding Multiple Customer Group Pricing

You can also add multiple Customer Group Pricing options for different quantities or groups to encourage bulk purchases and offer better deals.

For example, you can configure the following tier pricing structure:

**Buy 2 for $400.00 each and save 55.56%**

**Buy 3 for $350.00 each and save 61.11%**

**Buy 4 for $200.00 each and save 77.78%**

**Buy 5 for $150.00 each and save 83.33%**

These pricing tiers can be added directly in the Customer Group Price section of the Admin Panel, as shown below:

<ImagePopup src="/images/customer/all-group-price.png" alt="Multiple Customer Group Pricing" />

You can check the Storefront view to see how all the tiered customer pricing options appear together for the same product.

<ImagePopup src="/images/customer/price-output1.png" alt="Storefront Multiple Customer Group Pricing" />
