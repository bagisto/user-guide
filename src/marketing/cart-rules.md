# Cart Rules

It is human nature that everyone is attracted to offers, sales, and discounts while shopping. A Cart Rule is applied to the product in the shopping cart. Here we will discuss how to set cart rules in Bagisto.

By using it, you can set one or multiple discounts on the same product. Follow the below steps to learn **how to set cart rules in Bagisto**.

### Step 1: Add New Cart Rule

1. In the Admin Panel, go to **Marketing >> Promotions >> Cart Rules**.

2. Click on **Create Cart Rule** as shown in the image below.

<ImagePopup src="/images/marketing/create-cartrule.png" alt="Create Cart Rule" />

From the Cart Rules listing page, you can also **Copy** an existing rule by clicking the Copy icon in the action column. This creates a duplicate with "Inactive" status, allowing you to modify and enable it later.

### General Section

- **Name:** Enter the name of the new cart rule (only for internal reference).

- **Description:** Enter a description of the rule (only for internal reference).

### Settings (Right Sidebar)

The Settings panel is located in the right sidebar and contains:

<ImagePopup src="/images/marketing/cart-rule-right.png" alt="Create Cart Rule Right Sidebar Settings" />

- **Priority:** Enter the priority of this rule. Lower numbers have higher priority. When multiple rules match, the rule with the lowest priority number is applied first.

- **Channels:** Select one or more channels by checking the checkboxes. The cart rule will only apply to the selected channels.

- **Customer Groups:** Select one or more customer groups by checking the checkboxes. The cart rule will only apply to the selected customer groups.

- **Status:** Toggle the switch to enable or disable the cart rule.

**Note:** Priority is important when products meet the condition set for more than one cart rule. The highest priority is 0. So when multiple conditions are met, the rule with the highest priority will be applied first.

### Marketing Time (Right Sidebar)

The Marketing Time panel is located below Settings in the right sidebar:

- **From:** Set the start date and time from which the cart rule becomes active. Leave blank to apply immediately.

- **To:** Set the end date and time after which the cart rule expires. Leave blank for no expiry.

### Coupon Section

**Coupon Type:** Select coupon type with or without a coupon. If you want the cart rule to apply to all carts without requiring a coupon code, set it to **No Coupon**. Select **Specific Coupon** to require a coupon code.

**If you select Specific Coupon, configure the following fields:**

<ImagePopup src="/images/marketing/cart-rule-generate-coupon.png" alt="Create Cart Rule Coupon" />

- **Auto Generate Coupon:** Set Yes to have the system generate coupon codes automatically. Set No to enter a coupon code manually.

- **Coupon Code:** If Auto Generate Coupon is set to No, enter the coupon code that customers will use during checkout.

- **Uses Per Coupon:** Define how many times the coupon code can be used in total. Leave blank for unlimited uses.

- **Uses Per Customer:** Define how many times the same customer can use this cart rule. Leave blank for unlimited.

**If Auto Generate Coupon is set to Yes, you can generate bulk coupons after saving the rule. On the edit page, a Generated Coupons section appears where you can click Generate Coupons and configure:**

<ImagePopup src="/images/marketing/cart-rule-generate-now.png" alt="Cart Rule Coupon Generate" />

- **Coupon Quantity:** Number of unique coupon codes to generate.
- **Coupon Length:** Length of each coupon code (minimum 10).
- **Code Format:** Format of the generated codes — **Alphanumeric** (A-Z, 0-9), **Alphabetical** (A-Z only), or **Numeric** (0-9 only).
- **Code Prefix:** Optional prefix added to every generated coupon code.
- **Code Suffix:** Optional suffix added to every generated coupon code.

**How Auto-Generated Coupons Work on the Frontend:**

Each auto-generated coupon code is a unique code that customers can use at checkout. These codes work the same way as a manually entered coupon — the customer enters the code in the **Apply Coupon** field on the checkout page.

Auto-generated coupons are useful for marketing campaigns where you need to distribute many unique codes (e.g., email campaigns, loyalty programs). Each generated code has its own usage tracking based on the **Uses Per Coupon** and **Uses Per Customer** limits configured in the rule.

<ImagePopup src="/images/marketing/configurations.png" alt="Coupon Section" />

You can also set **No Coupon** if you want the discount to apply automatically to all eligible carts without requiring any code entry.

<ImagePopup src="/images/marketing/configurations.png" alt="Coupon Section" />

### Step 2: Set Conditions

Conditions define when the cart rule should be applied. They are based on three groups of attributes, named as they appear in the attribute dropdown:

- **Cart attribute:** **Subtotal**, **Total items-qty**, **Payment method**, **Shipping method**, **Shipping postcode**, **Shipping state**, **Shipping country**.
- **Cart item attribute:** **Price in cart**, **Quantity in cart**, **Total Weight**, **Subtotal**, **Additional**.
- **Product attribute:** **Categories**, **Attribute Family**, plus all product attributes (excluding textarea, image, and file types).

If you want to apply the rule to all products without any restriction, leave the conditions section empty.

**Condition Type:**

- **All Conditions Are True:** Every condition must be satisfied for the rule to apply.
- **Any Conditions Are True:** At least one condition must be satisfied for the rule to apply.

<ImagePopup src="/images/marketing/condition.png" alt="Set Cart Rule Conditions" />

Click on **Add Condition** to add a new condition row. For each condition, configure:

- **Attribute:** Select the attribute from the dropdown (grouped by Cart attribute, Cart item attribute, and Product attribute).
- **Operator:** Depending on the attribute type, the operators offered are **Is equal to**, **Is not equal to**, **Greater than**, **Less than**, **Equals or greater than**, **Equals or less than**, **Contains** and **Does not contain**.
- **Value:** Enter or select the value to compare against. For category attributes, a tree selector is available.

For example, if you select **Categories**, choose the operator **Contains** and then select the desired category from the tree.

To delete a condition, click the **Delete icon** on the right side of the condition row.

### Step 3: Set the Actions

In the Actions section, define how the discount will be applied. Select one of the four action types:

  <ImagePopup src="/images/marketing/cart-rule-buy-condition.png" alt="Attribute Condition" />
  

- **Action Type:** Choose how the discount is calculated.

   **a) Percentage Product Price —** Discount is applied as a percentage (%) of the product price. The discount amount is capped at 100. Apply to Shipping is available.

   **b) Fixed Amount —** A fixed discount amount is subtracted from each matching item's price. Apply to Shipping is available.

   **c) Fixed Amount Whole Cart —** The discount amount is split proportionally across all matching cart items based on their price. Apply to Shipping is disabled for this type.

   **d) Buy X Get Y Free —** Customers get free products when they buy a certain quantity. Configure **Free Quantity (Y)** (the number of free items) and **Buy X Quantity** (the number of items the customer must purchase to qualify). Apply to Shipping is disabled for this type.

- **Discount Amount / Free Quantity (Y):** Enter the discount value. For **Percentage** this is the percentage off. For **Buy X Get Y** the field is labelled **Free Quantity (Y)** and holds the number of free items. For other types this is the fixed discount amount.

- **Buy X Quantity:** (Only for Buy X Get Y) Enter the quantity the customer must purchase to qualify for the free items.

- **Maximum Discounted Quantity:** Enter the maximum number of items that can receive the discount. (Not shown for Fixed Amount Whole Cart or Buy X Get Y Free.)

- **Maximum Eligible Quantity:** (Only for Buy X Get Y) Enter the maximum number of items eligible for the free discount.

- **Apply to Shipping:** Set Yes to also apply the discount to the shipping cost. Disabled for Fixed Amount Whole Cart and Buy X Get Y.

- **Free Shipping:** Set Yes to make shipping free when this rule is applied.

- **End Of Other Rules:** Set Yes to stop processing further cart rules after this one is applied. Useful when you have multiple overlapping discounts.

After configuring all sections, click the **Save Cart Rule** button.

Now copy the **Coupon Code** as shown below.

<ImagePopup src="/images/marketing/coupon-code.png" alt="Coupon Code Example" />

### Frontend

On the **Checkout Page**, while placing an order, click on **Apply Coupon** as shown below.

<ImagePopup src="/images/marketing/checkout-page.png" alt="Checkout Page Coupon" />

After entering the coupon code, click on the **Apply** button.

<ImagePopup src="/images/marketing/apply-coupon.png" alt="Apply Coupon" />

Now the **Coupon** is applied successfully.

<ImagePopup src="/images/marketing/coupon-applied.png" alt="Coupon Applied Successfully" />
