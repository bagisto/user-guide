# Catalog Rules

A catalog rule lowers the price of products before they're added to the cart, so shoppers see the discounted price while they browse. Use it for a sale on a category, or for lower prices for your wholesale customers.

To give a discount in the cart or with a coupon code, use [cart rules](cart-rules.md) instead.

## Create a catalog rule

1. Go to **Marketing >> Promotions >> Catalog Rules**.
2. Click **Create Catalog Rule**.
3. Fill in the sections described below.

   <ImagePopup src="/images/marketing/catalog-rule-create.png" alt="The Create Catalog Rule page with a Categories condition for Mens, a 15 percent discount and the Settings panel" />

4. In the **Settings** panel, switch **Status** on. A new rule starts switched off.
5. Click **Save Catalog Rule**.

You see "Catalog rule created successfully".

### General, Settings and Marketing Time

| Setting | What it does |
|---|---|
| **Name** | Identifies the rule in the admin panel |
| **Description** | Your own notes about the rule |
| **Priority** | The order rules are applied in, starting from the lowest number |
| **Channels** | The channels the rule works on |
| **Customer Groups** | The customer groups who see the lower price |
| **Status** | Switches the rule on or off. Off by default, and a rule that's off doesn't apply. |
| **From** and **To** | Dates, not times. A rule starts at the beginning of the **From** date and ends at the end of the **To** date. Leave them empty for no start or end date. |

### Conditions

Conditions decide which products get the lower price. Leave them empty to apply the rule to every product.

1. Choose **All Conditions are true** or **Any Conditions are true**.
2. Click **Add Condition**.
3. Choose the product attribute, the operator and the value.

You can check **Categories**, **Attribute Family** and your product attributes, listed by name. For **Categories**, tick the categories in the tree. Remove a condition with the bin icon beside it.

The operators depend on the attribute, as on the [cart rules](cart-rules.md#conditions) page: numbers and dates offer comparisons such as **Equals or greater than**, text offers **Contain** and **Does not contain**, and categories offer **Contains** and **Does not contain**.

Conditions are checked on each simple product and on each variant of a configurable product. Configurable, bundle and grouped products aren't checked themselves; their prices follow the products they're made of.

### Actions

| Setting | What it does |
|---|---|
| **Action Type** | **Percentage of Product Price** takes a percentage off. **Fixed Amount** takes a set amount off. |
| **Discount Amount** | A percentage from 0 to 100, or an amount. The price never goes below 0. |
| **End other rules** | **Yes** stops rules with a higher **Priority** number from changing the price of the products this rule covers |

When several rules cover the same product, they're applied in **Priority** order until a rule with **End other rules** set to **Yes**.

## When prices change

The form shows a note that saving a rule updates the price of every product it applies to.

- **When you save a rule**, Bagisto recalculates the prices of the products it covers. On many stores this runs in the background, so prices change a little after you save.
- **When you delete a rule**, its discount is removed. Where other rules cover the same products, their prices are fully corrected by the nightly update.
- **When you save a product**, its catalog rule prices are recalculated.
- **Every night at 00:01**, Bagisto recalculates all catalog rule prices, so rules start and stop on their dates.

::: warning Catalog rules need scheduled tasks
Catalog rule prices are calculated for a few days at a time, and the nightly update keeps them current. It runs through the scheduled tasks your developer or host sets up for Bagisto. Without them, every catalog rule, dated or not, stops lowering prices within about two days of the last save. See [Scheduled Tasks](../getting-started/scheduled-tasks.md).
:::

## Manage catalog rules

The **Catalog Rules** list shows each rule's **ID**, **Name**, **Start**, **End**, **Status** and **Priority**, with icons to edit and delete it.

<ImagePopup src="/images/marketing/catalog-rules.png" alt="The Catalog Rules list with the Weekend Apparel Sale rule" />

## What shoppers see

Shoppers in the rule's customer groups see the lower price on product listings and product pages, on the rule's channels. They see the lowest of the catalog rule price, the product's special price and its customer group price. [Cart rules](cart-rules.md) can then discount the cart further.
