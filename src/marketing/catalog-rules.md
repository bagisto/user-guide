# Catalog Rules

The catalog rule is a special rule that allows the customer to purchase the product at discounted prices that are set by the admin from the backend. Here will discuss how to set catalog rules in Bagisto.

The catalog rule is applied to the product before placed into the shopping cart. Follow the below step “How to set catalog rules in Bagisto”.

### Step 1: Add New Catalog Rule

1. Go to **Marketing >> Promotions >> Catalog Rules**.

2. On the upper right side, click the **Create Catalog Rule** button, as shown below.

   <ImagePopup src="/images/marketing/catalog-rule.png" alt="Catalog" />

Fill in the following fields in the **General** section:

- **Name:** Enter the name of the new catalog rule (only for internal reference).

- **Description:** Enter a description of the rule (only for internal reference).

Then fill in the **Settings** panel in the right sidebar:

- **Priority:** Enter the priority of this rule.

- **Channels:** Select the channel on which this catalog rule will be applied.

- **Customer Groups:** Select the customer group on which this catalog rule will be applied.

- **Status:** Set the status of the catalog rule to active.

Finally, set the **Marketing Time** panel below it:

- **From** and **To** dates: Set the range of dates when the catalog rule will be in effect. If you do not set the dates, the rule applies as soon as the rule is saved.

<ImagePopup src="/images/marketing/catalog-configurations.png" alt="Catalog Configurations" />

### Step 2: Set Conditions

All conditions in the catalog rule are based on the product attributes. If you want to apply the rule on all products, don’t set any condition.

1. Set the **Condition Type** to **All Conditions are true** or **Any Conditions are true**.

   <ImagePopup src="/images/marketing/condition.png" alt="Condition" />

2. Click **Add Condition**.

3. Under the list of product attributes, select the attribute that you want to set for the condition.

   <ImagePopup src="/images/marketing/catalog-conditions.png" alt="Conditions" />

4. Choose the operator. For example, if you have selected **Categories**, choose **Contains** or **Does not contain**.

5. Choose the value. For **Categories**, select the category from the tree, as in the below image.

   <ImagePopup src="/images/marketing/contains.png" alt="Contains" />

If you want to delete any condition, click the delete icon.

### Step 3: Set the Actions

In the Action section, we have to set actions like how we want to apply the rule to the product.

<ImagePopup src="/images/marketing/catalog-action.png" alt="Catalog Action" />

- **Action Type:** You can apply a discount on a percentage basis (**Percentage of Product Price**) or a fixed amount basis (**Fixed Amount**).

- **Discount Amount:** Enter the discount amount.

- **End other rules:** To stop applying other rules after this rule applies, set **Yes**. This will work for applying multiple discounts on the same product.

**Note:** If you want multiple rules to apply to the product, set **No**. In that case the rule which has the highest priority applies first.

Finally, click **Save Catalog Rule**. The new **Catalog Rule** is listed, as shown below.

<ImagePopup src="/images/marketing/catalog-output.png" alt="Catalog Output" />

### Front End:-

You will get a flat 50% OFF on the product after applying a catalog rule as shown below.

<ImagePopup src="/images/marketing/catalog-front.png" alt="Catalog Front" />

By this, you can create a **Catalog Rule** in Bagisto.
