# Cart Rules

It is human nature that everyone is attracted to offers, sales, and discounts while shopping. A Cart Rule is applied to the product in the shopping cart. Here we will discuss how to set cart rules in Bagisto.

By using it, you can set one or multiple discounts on the same product. Follow the below steps to learn **how to set cart rules in Bagisto**.

### Step 1: Add New Cart Rule

1. In the Admin Panel, go to **Marketing >> Promotions >> Cart Rules**.  
   Click on **Create Cart Rule** as shown in the image below.

<ImagePopup src="/images/marketing/createCartrule.png" alt="Create Cart Rule" />

From the Cart Rules listing page, you can also **Copy** an existing rule by clicking the Copy icon in the action column. This creates a duplicate with "Inactive" status, allowing you to modify and enable it later.

### Rule Information Section

1. **Name:** Enter the name of the new cart rule (only for internal reference).

2. **Description:** Enter a description of the rule (only for internal reference).

3. **Status:** Toggle the status switch to Active or Inactive.

4. **Priority:** Enter the priority of this rule. Lower numbers have higher priority. When multiple rules match, the rule with the lowest sort order is applied first.

**Note:** Priority is important when products meet the condition set for more than one cart rule. The highest priority is 0. So when multiple conditions are met, the rule with the highest priority will be applied first.

### Settings (Right Sidebar)

The Settings panel is located in the right sidebar and contains:

<ImagePopup src="/images/marketing/cart-rule-right.png" alt="Create Cart Rule Right Sidebar Settings" />

1. **Priority:** Enter the sort order/priority of this rule.

2. **Channels:** Select one or more channels by checking the checkboxes. The cart rule will only apply to the selected channels.

3. **Customer Groups:** Select one or more customer groups by checking the checkboxes. The cart rule will only apply to the selected customer groups.

4. **Status:** Toggle the switch to enable or disable the cart rule.

### Marketing Time (Right Sidebar)

The Marketing Time panel is located below Settings in the right sidebar:

1. **From:** Set the start date and time from which the cart rule becomes active. Leave blank to apply immediately.

2. **To:** Set the end date and time after which the cart rule expires. Leave blank for no expiry.

### Coupon Section

1. **Coupon Type:** Select coupon type with or without a coupon. If you want the cart rule to apply to all carts without requiring a coupon code, set it to **No Coupon**. Select **Specific Coupon** to require a coupon code.

**If you select Specific Coupon, configure the following fields:**

<ImagePopup src="/images/marketing/cart-rule-generate-coupon.png" alt="Create Cart Rule Coupon" />

1. **Auto Generate Coupon:** Set Yes to have the system generate coupon codes automatically. Set No to enter a coupon code manually.

2. **Coupon Code:** If Auto Generate Coupon is set to No, enter the coupon code that customers will use during checkout.

3. **Uses Per Coupon:** Define how many times the coupon code can be used in total. Leave blank for unlimited uses.

4. **Uses Per Customer:** Define how many times the same customer can use this cart rule. Leave blank for unlimited.

**If Auto Generate Coupon is set to Yes, you can generate bulk coupons after saving the rule. On the edit page, a Generated Coupons section appears where you can click Generate Coupons and configure:**

<ImagePopup src="/images/marketing/cart-rule-generate-now.png" alt="Cart Rule Coupon Generate" />

- **Coupon Quantity:** Number of unique coupon codes to generate.
- **Code Length:** Length of each coupon code (minimum 10).
- **Code Format:** Format of the generated codes — **Alphanumeric** (A-Z, 0-9), **Alphabetical** (A-Z only), or **Numeric** (0-9 only).
- **Code Prefix:** Optional prefix added to every generated coupon code.
- **Code Suffix:** Optional suffix added to every generated coupon code.

**How Auto-Generated Coupons Work on the Frontend:**

Each auto-generated coupon code is a unique code that customers can use at checkout. These codes work the same way as a manually entered coupon — the customer enters the code in the **Apply Coupon** field on the checkout page.

Auto-generated coupons are useful for marketing campaigns where you need to distribute many unique codes (e.g., email campaigns, loyalty programs). Each generated code has its own usage tracking based on the **Uses Per Coupon** and **Uses Per Customer** limits configured in the rule.

<ImagePopup src="/images/marketing/configurations.png" alt="Cart Rule Configurations" />

You can also set **No Coupon** if you want the discount to apply automatically to all eligible carts without requiring any code entry.

<ImagePopup src="/images/marketing/configurations.png" alt="Cart Rule Configurations" />

### Step 2: Set Conditions

Conditions define when the cart rule should be applied. They are based on three categories of attributes:

- **Cart Attributes:** Sub Total, Items Qty, Payment Method, Shipping Method, Postcode, State, Country.
- **Cart Item Attributes:** Base Price, Quantity, Base Total Weight, Base Total.
- **Product Attributes:** Category IDs, Attribute Family, plus all product EAV attributes (excluding textarea, image, and file types).

If you want to apply the rule to all products without any restriction, leave the conditions section empty.

**Condition Type:**

- **All Conditions are True:** Every condition must be satisfied for the rule to apply.
- **Any Condition is True:** At least one condition must be satisfied for the rule to apply.

<ImagePopup src="/images/marketing/condition.png" alt="Set Cart Rule Conditions" />

Click on **Add Condition** to add a new condition row. For each condition, configure:

1. **Attribute:** Select the attribute from the dropdown (grouped by Cart, Cart Item, and Product).
2. **Operator:** Depending on the attribute type, operators include: Equals (==), Not Equals (!=), Greater Than (>=), Less Than (<=), Greater or Equal (>=), Less or Equal (<=), Contains ({}), Not Contains (!{}).
3. **Value:** Enter or select the value to compare against. For category attributes, a tree selector is available.

For example, if you select **Categories**, choose the operator **contains** and then select the desired category from the tree.

To delete a condition, click the **Delete icon** on the right side of the condition row.

### Step 3: Set the Actions

In the Actions section, define how the discount will be applied. Select one of the four action types:

  <ImagePopup src="/images/marketing/cart-rule-buy-condition.png" alt="Attribute Condition" />
  

1. **Action Type:** Choose how the discount is calculated.

   **a) Percentage Product Price —** Discount is applied as a percentage (%) of the product price. The discount amount is capped at 100. Apply to Shipping is available.

   **b) Fixed Amount —** A fixed discount amount is subtracted from each matching item's price. Apply to Shipping is available.

   **c) Fixed Amount Whole Cart —** The discount amount is split proportionally across all matching cart items based on their price. Apply to Shipping is disabled for this type.

   **d) Buy X Get Y Free —** Customers get free products when they buy a certain quantity. Configure "Free Quantity" (discount amount = number of free items) and "Buy X Quantity" (number of items the customer must purchase to qualify). Apply to Shipping is disabled for this type.

2. **Discount Amount / Free Quantity:** Enter the discount value. For **Percentage** this is the percentage off. For **Buy X Get Y** this is the number of free items. For other types this is the fixed discount amount.

3. **Buy X Quantity:** (Only for Buy X Get Y) Enter the quantity the customer must purchase to qualify for the free items.

4. **Maximum Discounted Quantity:** Enter the maximum number of items that can receive the discount. (Not applicable for Fixed Amount Whole Cart.)

5. **Maximum Eligible Quantity:** (Only for Buy X Get Y) Enter the maximum number of items eligible for the free discount.

6. **Apply to Shipping:** Set Yes to also apply the discount to the shipping cost. Disabled for Fixed Amount Whole Cart and Buy X Get Y.

7. **Free Shipping:** Set Yes to make shipping free when this rule is applied.

8. **End Other Rules:** Set Yes to stop processing further cart rules after this one is applied. Useful when you have multiple overlapping discounts.

After configuring all sections, click the **Save Cart Rule** button.

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
