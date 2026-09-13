# Order Settings

To configure order settings, go to the Admin Panel and navigate to **Configure >> Sales >> Order Settings**.

**Order Number Settings:**  
These settings determine how order numbers are generated, formatted, and managed within the system. They are crucial for organizing and tracking orders efficiently.

**Minimum Order Settings:**  
Configured criteria specifying the lowest required quantity or value for an order to be processed or qualify for benefits.

You can also add new configuration options in the Order section, including **Include Discount Amount**, **Include Tax to Amount**, and **Description** on the cart page.

<ImagePopup src="/images/configure/order-settings.png" alt="Order Settings" />

**Allow Reorder:**  
Enable or disable the reordering feature for admin users and for customers on the storefront, with a switch for each.

**Order Creation:**  
**Max Retry Attempts** is how many times the store retries creating an order when the attempt fails part-way, for example when two orders are placed at the same instant. Leave the default unless you see failed order placements.

<ImagePopup src="/images/configure/allow-reorder.png" alt="Allow Reorder" />

After making changes, click the **Save Configuration** button.

## Admin Reorder

To check admin reorder functionality, go to **Sales >> Orders** and open an order placed by a registered customer. The **Reorder** option appears when at least one of its products can still be bought; guest orders and booking products cannot be reordered.

<ImagePopup src="/images/configure/admin-reorder.png" alt="Admin Reorder" />

## Frontend Reorder

After completing your order, navigate to **My Account >> Orders** and open the order. The **Reorder** button appears at the top of the order's detail page.

<ImagePopup src="/images/configure/frontreorder.png" alt="Frontend Reorder" />
