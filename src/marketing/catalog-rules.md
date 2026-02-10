# Catalog Rules

The catalog rule is a special rule that allows the customer to purchase the product at discounted prices that are set by the admin from the backend. Here will discuss how to set catalog rules in Bagisto.

The catalog rule is applied to the product before placed into the shopping cart. Follow the below step “How to set catalog rules in Bagisto”.

### Step 1: Add New Catalog Rule

a) On Admin panel, go to **Marketing >> Promotions >> Catalog Rules**

b) On the upper right side, click on **Create Catalog Rule** button as shown below

<ImagePopup src="/images/marketing/catalogRule.png" alt="Catalog" />

### Do the following entry in the Rule Information Section

**1. Name:-** Enter the name of the new catalog rule. (only for internal reference)

**2. Description:-** Enter a description of the rule. (only for internal reference)

**3. Status:-** Set status of catalog rule is active.

**4. Channels:-** Select the channel on which this catalog rule will be applied.

**5. Customer Group:-** Select the customer group on which this catalog rule will be applied.

**6. From and To dates:-** Set the range of dates, when the catalog rule will be affected. If you do not set the dates, the rule applies as soon as the rule is saved.

**7. Priority:-** Enter the priority of this rule.

<ImagePopup src="/images/marketing/catalogConfigurations.png" alt="Catalog Configurations" />

### Step 2: Set Conditions

All condition in the catalog rule is based on the product attribute. If you want to apply the rule on all products don’t set any condition. Set the condition type to all conditions that are true or any condition that is true.

<ImagePopup src="/images/marketing/condition.png" alt="Condition" />

Then click on the Add condition to set the conditions. Under the list of a product attribute, select the attribute that you want to set for the condition.

<ImagePopup src="/images/marketing/catalogConditions.png" alt="Conditions" />

For example, if you have selected Categories then you have to choose contains/does not contain and select the category as in the below image.

If you want to delete any condition, then click on the delete icon.

<ImagePopup src="/images/marketing/contains.png" alt="Contains" />

### Step 3: Set the Actions

In the Action section, we have to set actions like how we want to apply the rule to the product.

<ImagePopup src="/images/marketing/catalogAction.png" alt="Catalog Action" />

**1. Actions Type:-** You can apply a discount on a percentage basis or a fixed amount basis.

**2. Discount Amount:-** Enter discount amount.

**3. End Other Rules:-** To stop applying other rules after this rule applies set “Yes”. This will work for applying multiple discounts on the same product.

**Note:- If you want multiple rules to apply to the product then set “NO”. So in that case the rule which has the highest priority will apply first.**

Now **Save the Catalog Rule** and you will able to see a new **Catalog Rule** is been created successfully.

<ImagePopup src="/images/marketing/catalogOutput.png" alt="Catalog Output" />

### Front End:-

You will get a flat 50% OFF on the product after applying a catalog rule as shown below.

<ImagePopup src="/images/marketing/catalogFront.png" alt="Catalog Front" />

By this, you can easily create a **Catalog Rule** in Bagisto.
