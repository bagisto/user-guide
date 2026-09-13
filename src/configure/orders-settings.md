# Order Settings

Go to **Configure >> Sales >> Order Settings**.

<ImagePopup src="/images/configure/order-settings.png" alt="Order settings" />

## Order number settings

Decide how order numbers are built: an **Order Number Prefix**, the **Order Number Length** it is padded to, and an **Order Number Suffix**. Change these before the store takes orders, so the numbering stays consistent.

## Minimum order settings

1. Switch **Enable** on.
2. Enter the **Minimum Order Amount** a cart must reach before checkout is allowed.
3. Choose whether the check counts the discount (**Include Discount Amount**) and the tax (**Include Tax to Amount**).
4. Enter the **Description** shown in the cart when the amount is not reached.
5. Click **Save Configuration**.

## Allow reorder

Two switches let an order be placed again with the same items: **Admin Reorder** adds a **Reorder** button to the admin order page, and **Shop Reorder** adds one to the customer's order page on the storefront.

<ImagePopup src="/images/configure/allow-reorder.png" alt="Allow Reorder switches" />

To reorder from the admin, go to **Sales >> Orders** and open an order placed by a registered customer. The **Reorder** button appears when every product on the order can still be bought; guest orders cannot be reordered, and booking products are skipped and must be booked again.

<ImagePopup src="/images/configure/admin-reorder.png" alt="Reorder button on an admin order" />

On the storefront, the customer opens **My Account >> Orders**, opens the order, and finds **Reorder** at the top of the order's detail page.

<ImagePopup src="/images/configure/frontreorder.png" alt="Reorder button on a customer's order" />

## Order creation

**Max Retry Attempts** is how many times the store retries creating an order when the attempt fails part-way, for example when two orders are placed at the same instant. Leave the default unless you see failed order placements.
