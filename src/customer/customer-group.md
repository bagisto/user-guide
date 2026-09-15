# Customer Groups

A customer group sorts your customers so you can price and promote to them differently, for
example to give trade customers lower prices. Every customer belongs to one group, and shoppers
who aren't signed in are treated as the **Guest** group.

## What groups are used for

- **Customer group prices:** lower prices on a product for a group, for larger quantities, or
  both. See [Customer Group Pricing](./customer-group-price.md).
- **Cart rules:** a cart rule's discount applies only to the **Customer Groups** you tick on the
  rule. See [Cart Rules](../marketing/cart-rules.md).
- **Catalog rules:** a catalog rule's discounted price applies only to the **Customer Groups**
  you choose on the rule. See [Catalog Rules](../marketing/catalog-rules.md).

## The default groups

Bagisto comes with three groups:

| Group | Code | Who's in it |
|---|---|---|
| **Guest** | `guest` | Shoppers who aren't signed in. You can't choose it for a customer in the admin panel. |
| **General** | `general` | Customers who sign up on the storefront, unless you choose another group for new accounts. |
| **Wholesale** | `wholesale` | Nobody, until you move customers into it, for example your trade customers. |

You can rename the default groups, but you can't delete them.

::: warning Keep the codes of the default groups
The storefront finds the group for new accounts by its code. Change a default group's **Name**
if you like, but leave its **Code** as it is.
:::

## The groups list

Go to **Customers >> Groups**.

<ImagePopup src="/images/customer/group-grid.png" alt="The groups list under Customers >> Groups with the Wholesale, General and Guest groups" />

The list shows each group's **ID**, **Code** and **Name**.

- **Search:** type in the search box to find groups by name.
- **Filter:** click **Filter** and filter by **ID**, **Code** or **Name**.
- **Sort:** click **ID**, **Code** or **Name** in the header row.
- **Edit** (the pencil) and **Delete** (the bin) are at the end of each row.

## Create a group

1. Go to **Customers >> Groups**.
2. Click **Create Group**. The **Create new Group** dialog opens.
3. Enter the **Code**, a unique identifier such as `retail_club`. It must start with a letter and
   can contain letters, numbers and underscores.
4. Enter the **Name**, which the admin panel shows wherever you choose a group.

   <ImagePopup src="/images/customer/create-group.png" alt="Create new Group dialog with the code retail_club and the name Retail Club" />

5. Click **Save Group**. The group is added to the list.

## Edit a group

1. Go to **Customers >> Groups**.
2. Click the pencil on the group's row. The **Edit Group** dialog opens.
3. Change the **Code** or **Name**.
4. Click **Save Group**.

## Delete a group

1. Go to **Customers >> Groups**.
2. Click the bin on the group's row.
3. Click **Agree** to confirm.

A group can't be deleted when:

- it's one of the default groups. The page shows *Default Group Can not be Deleted*.
- customers still belong to it. The page shows *This group has associated customers and cannot
  be deleted.* Move the customers to another group first, with **Edit** on each customer's page.
  See [Edit customer details](./create-customer.md#edit-customer-details).

## The group for new customers

Customers who sign up on the storefront join the **Default Group** chosen in
[Customer Settings](../configure/settings.md#create-new-account-options), which is **General** in
a new store. When you create a customer in the admin panel, you choose their group in the
dialog. You can move a customer to another group at any time with **Edit** on their page.
