# Cart Rules

A cart rule gives shoppers a discount in the cart. It can apply on its own, or only when the shopper enters a coupon code. Use cart rules for offers such as 20% off orders of $50 or more, free shipping for wholesale customers, or buy two and get one free.

To lower product prices before anything reaches the cart, use [catalog rules](catalog-rules.md) instead.

## Create a cart rule

1. Go to **Marketing >> Promotions >> Cart Rules**.
2. Click **Create Cart Rule**.
3. Fill in the **General**, **Conditions** and **Actions** sections, and the **Settings** and **Marketing Time** panels, as described below.

   <ImagePopup src="/images/marketing/cart-rule-create.png" alt="The Create Cart Rule page with the General section and the Settings and Marketing Time panels" />

4. In the **Settings** panel, switch **Status** on. A new rule starts switched off.
5. Click **Save Cart Rule**.

You see "Cart rule created successfully".

### General

| Setting | What it does |
|---|---|
| **Name** | Identifies the rule in the admin panel |
| **Description** | Your own notes about the rule |
| **Coupon Type** | **No Coupon** applies the discount to every cart that matches the rule. **Specific Coupon** applies it only when the shopper enters a code. |
| **Auto Generate Coupon** | Appears for **Specific Coupon**. **No** lets you type one code. **Yes** lets you generate many unique codes after you save the rule. |
| **Coupon Code** | Appears when **Auto Generate Coupon** is **No**. The code shoppers enter. Every code must be unique in your store. |
| **Uses Per Coupon** | Appears for **Specific Coupon**. How many times each code can be used in total, including each generated code. Leave it at 0 for no limit. |
| **Uses Per Customer** | How many times one signed-in customer can use the rule and each of its codes. Guests aren't limited. Leave it at 0 for no limit. |

### Conditions

Conditions decide which carts and items get the discount. Leave them empty to apply the rule to every cart.

1. Choose the **Condition Type**: **All Conditions Are True** or **Any Conditions Are True**.
2. Click **Add Condition**.
3. Choose what to check, the operator and the value.

<ImagePopup src="/images/marketing/cart-rule-conditions.png" alt="The Conditions section with a Subtotal, Equals or greater than, 50 condition" />

Remove a condition with the bin icon beside it. You can check:

- **Cart attribute**: **Subtotal**, **Total items-qty**, **Payment method**, **Shipping method**, **Shipping postcode**, **Shipping state** and **Shipping country**.
- **Cart item attribute**: **Price in cart**, **Quantity in cart**, **Total Weight**, **Subtotal** and **Additional**.
- **Product attribute**: **Categories**, **Categories(Children Only)**, **Categories(Parent Only)**, **Attribute Family** and your product attributes.

For categories, tick them in the tree. Each product attribute is also offered with (Children Only) and (Parent Only) after its name. Text area, image and file attributes aren't offered.

The operators depend on what you check:

- **Numbers and dates** offer **Is equal to**, **Is not equal to**, **Equals or greater than**, **Equals or less than**, **Greater than** and **Less than**.
- **Text** offers **Is equal to**, **Is not equal to**, **Contain** and **Does not contain**.
- **Single choices**, such as **Payment method**, **Shipping country** and **Attribute Family**, and Yes/No attributes offer **Is equal to** and **Is not equal to**.
- **Categories and multiple-choice attributes** offer **Contains** and **Does not contain**.

### Actions

1. Choose the **Action Type**.
2. Fill in the fields that appear for it.

| Action Type | What it gives | Fields |
|---|---|---|
| **Percentage Product Price** | A percentage off each matching item | **Discount Percent (%)**, from 0 to 100, and **Maximum Discounted Quantity** |
| **Fixed Amount** | A fixed amount off each matching item | **Discount Amount** and **Maximum Discounted Quantity** |
| **Fixed Amount Whole Cart** | A fixed amount off the whole cart, shared across the matching items by price | **Discount Amount** |
| **Buy X Get Y Free** | Free units when the shopper buys a set quantity of an item | **Free Quantity (Y)**, **Buy X Quantity** and **Maximum Eligible Quantity** |

**Maximum Discounted Quantity** caps how many units of each matching item get the discount. Enter 0 for no cap. An empty box counts as 1.

<ImagePopup src="/images/marketing/cart-rule-actions.png" alt="The Actions section with Percentage Product Price and a 20 percent discount" />

**Apply to Shipping**, **Free Shipping** and **End Of Other Rules** appear for every action type:

| Setting | What it does |
|---|---|
| **Apply to Shipping** | **Yes** also takes the discount off the shipping cost. It works only with **Percentage Product Price** and **Fixed Amount**. |
| **Free Shipping** | **Yes** makes shipping free when the rule applies |
| **End Of Other Rules** | **Yes** stops rules with a higher **Priority** number from applying after this one |

An item's discount never goes above the item's price. Before you launch a **Fixed Amount Whole Cart** rule, test it with a cart that holds several units of one product, and check the discount.

#### Buy X Get Y Free

With **Buy X Quantity** set to 2 and **Free Quantity (Y)** set to 1, every third unit of a matching item is free. A shopper with 3 units gets 1 free, and with 6 units gets 2 free. The free units come out of the quantity in the cart, so the shopper adds them. **Maximum Eligible Quantity** caps how many units of the item count towards the deal. Enter 0 for no cap. An empty box counts as 1.

There's no discount when **Free Quantity (Y)** is more than **Buy X Quantity**, or when **Buy X Quantity** is 0, its starting value.

<ImagePopup src="/images/marketing/cart-rule-buy-x-get-y.png" alt="The Actions section with Buy X Get Y Free, Free Quantity 1, Buy X Quantity 2 and Maximum Eligible Quantity 6" />

### Settings and Marketing Time

| Setting | What it does |
|---|---|
| **Priority** | The order rules are applied in, starting from the lowest number |
| **Channels** | The channels the rule works on |
| **Customer Groups** | The customer groups who get the discount, such as **Guest**, **General** and **Wholesale** |
| **Status** | Switches the rule on or off. Off by default, and a rule that's off doesn't apply. |
| **From** | The date and time the rule starts. Leave it empty to start straight away. |
| **To** | The date and time the rule ends. It must be the same as or later than **From**. Leave it empty for no end. Generated coupons show it as their expiration date. |

### How rules work together

- **Every active rule that matches applies**, in **Priority** order, until a rule with **End Of Other Rules** set to **Yes**. Give rules different priorities when the order matters.
- **A cart holds one coupon code at a time.**
- **Uses are counted when an order with a discount is placed.** Once a code reaches **Uses Per Coupon**, or a signed-in customer reaches **Uses Per Customer**, it stops applying.
- **Changing To, Uses Per Coupon or Uses Per Customer later updates every generated code too.**

## Generate coupon codes

Generate many unique codes for one rule, for example to send a different code to each subscriber.

1. Create a rule with **Coupon Type** set to **Specific Coupon** and **Auto Generate Coupon** set to **Yes**, and save it.

   <ImagePopup src="/images/marketing/cart-rule-auto-generate.png" alt="The General section with Specific Coupon, Auto Generate Coupon set to Yes and the note about generating codes after saving" />

2. In **Marketing >> Promotions >> Cart Rules**, click the edit icon of the rule.
3. In the **Generated Coupons** section, click **Generate Coupons**.
4. Enter the **Coupon Quantity**, 1 or more.
5. Enter the **Coupon Length**. It's 12 by default and must be at least 10, not counting the prefix and suffix.
6. Choose the **Code Format**: **Alphanumeric**, **Alphabetical** or **Numeric**.
7. Enter a **Code Prefix** and a **Code Suffix**, if you like.

   <ImagePopup src="/images/marketing/cart-rule-generate-coupons.png" alt="The Generate Coupons dialog with a quantity of 5, a length of 12, the Alphanumeric format and a VIP- prefix" />

8. Click **Generate**.

The codes are listed under **Generated Coupons** with their **ID**, **Coupon Code**, **Times Used**, **Created Date** and **Expiration Date**. Delete a code with its delete icon, or select several codes and delete them together. Click **Export** to download the list.

<ImagePopup src="/images/marketing/cart-rule-generated-coupons.png" alt="The Generated Coupons section of a cart rule with the list of generated codes" />

On the rule's edit page, **Generate now** under **Auto-generation enabled** in the **General** section opens the same dialog.

## Copy a cart rule

In **Marketing >> Promotions >> Cart Rules**, click the copy icon of a rule. A copy is saved straight away, switched off, and opens for editing. It has the same name as the original, so rename it. Coupon codes aren't copied, so enter a new code or generate new ones.

## Manage cart rules

The **Cart Rules** list shows each rule's **ID**, **Name**, **Coupon Code**, **Start**, **End**, **Status** and **Priority**, with icons to edit, copy and delete it.

<ImagePopup src="/images/marketing/cart-rules.png" alt="The Cart Rules list with four rules, one of them using the coupon code WELCOME15" />

## What shoppers see

A rule without a coupon applies on its own as soon as the cart matches. For a rule with a coupon, shoppers click **Apply Coupon** in the cart and enter the code.
