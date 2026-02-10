# Cart Rules

It is human nature that everyone is attracted to offers, sales, and discounts while shopping. A Cart Rule is applied to the product in the shopping cart. Here we will discuss how to set cart rules in Bagisto.

By using it, you can set one or multiple discounts on the same product. Follow the below steps to learn **how to set cart rules in Bagisto**.

### Step 1: Add New Cart Rule

1. In the Admin Panel, go to **Marketing >> Promotions >> Cart Rules**.  
   Click on **Create Cart Rule** as shown in the image below.

<ImagePopup src="/images/marketing/createCartrule.png" alt="Create Cart Rule" />

### Rule Information Section

1. **Name:** Enter the name of the new cart rule (only for internal reference).

2. **Description:** Enter a description of the rule (only for internal reference). 

3. **Status:** Set the status of the cart rule as Active.  

4. **Channels:** Select the channel on which this cart rule will be applied. 

5. **Customer Group:** Select the customer group on which this cart rule will be applied.  

6. **Coupon Type:** Select coupon type with or without a coupon. If you want the cart rule to apply to all carts, set it to **No Coupon**.

**If you want to use a coupon, select Specific Coupon and fill in the following fields:**

1. **Auto Generate Coupon:** Set Yes/No. If Yes, the system generates the coupon automatically. If No, enter the coupon manually.  

2. **Coupon Code:** Enter the coupon code that customers will use during checkout.  

3. **Uses Per Coupon:** Define how many times the coupon can be used. Leave blank for unlimited.  

4. **Uses Per Customer:** Define how many times the same customer can use the cart rule. Leave blank for unlimited.  

5. **From and To Dates:** Set the date range when the cart rule will be active. If left blank, the rule applies as soon as it is saved.  

6. **Priority:** Enter the priority of this rule.  

**Note:** Priority is important when products meet the condition set for more than one cart rule. The highest priority is 0. So when multiple conditions are met, the rule with the highest priority will be applied first.

<ImagePopup src="/images/marketing/configurations.png" alt="Cart Rule Configurations" />

### Step 2: Set Conditions

Conditions in cart rules are based on cart attributes, cart item attributes, and product attributes.  

If you want to apply the rule on all products, don’t set any condition.  

You can set the condition type to **all conditions are true** or **any condition is true**.

<ImagePopup src="/images/marketing/condition.png" alt="Set Cart Rule Conditions" />

Click on **Add Condition** to set conditions. Under the list of product attributes, select the attribute you want to use for the condition.

<ImagePopup src="/images/marketing/attributeCondition.png" alt="Attribute Condition" />

For example, if you select **Categories**, you have to choose between *contains/does not contain* and then select the category.  

To delete any condition, click on the **Delete icon**.

### Step 3: Set the Actions

In the Actions section, define how the rule will apply to products.

1. **Action Type:** Apply discount on a percentage basis or a fixed amount basis. 

2. **Discount Amount:** Enter the discount amount.  

3. **End Other Rules:** Set Yes to stop applying other rules after this one is applied. Useful for multiple discounts.  

4. **Apply to Shipping:** Set Yes/No depending on whether you want to apply the discount to shipping.  

5. **Buy X Quantity:** Enter the number of quantities required.  

6. **Free Shipping:** Set Yes/No depending on whether you want to allow free shipping.  

7. **Maximum Quantity Allowed to be Discounted:** Enter the maximum quantity eligible for discount.  

After configuring, click on the **Save Cart Rule** button.  

Now copy the **Coupon Code** as shown below.

<ImagePopup src="/images/marketing/couponCode.png" alt="Coupon Code Example" />

### Frontend

On the **Checkout Page**, while placing an order, click on **Apply Coupon** as shown below.

<ImagePopup src="/images/marketing/checkoutPage.png" alt="Checkout Page Coupon" />

After entering the coupon code, click on the **Apply** button.

<ImagePopup src="/images/marketing/applyCoupon.png" alt="Apply Coupon" />

Now the **Coupon** is applied successfully.

<ImagePopup src="/images/marketing/couponApplied.png" alt="Coupon Applied Successfully" />

By following the above steps, you can easily create **Cart Rules** in Bagisto.
