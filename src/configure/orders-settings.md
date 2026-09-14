# Order Settings

These settings decide how order numbers are built, the smallest order total a customer can check out with, whether an order can be placed again, and how often the store retries creating an order.

Go to **Configure >> Sales >> Order Settings**.

## Order numbers

1. In **Order Number Settings**, enter the **Order Number Prefix**, such as `ORD-`.
2. Enter the **Order Number Length**, a number from `1` to `10`.
3. Optionally, enter an **Order Number Suffix**.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/order-settings-numbers.png" alt="Order Number Settings and Minimum Order Settings sections of the Order Settings screen" />

The number is padded with zeros to the length you set, so a prefix of `ORD-` and a length of `6` give order numbers such as `ORD-000042`. Leave **Order Number Generator** empty unless a developer has built a custom number generator for your store. These settings are set per channel, so set them before the channel takes its first order.

## Minimum order amount

1. In **Minimum Order Settings**, switch **Enable** on. The other settings appear.
2. Enter the **Minimum Order Amount**.
3. Switch **Include Discount Amount** on to check the cart total after discounts.
4. Switch **Include Tax to Amount** on to count tax in the cart total.
5. Enter the **Description**, the message shoppers see when their cart is below the minimum.
6. Click **Save Configuration**.

If **Description** is empty, shoppers see *Minimum order amount is* followed by the amount. The amount and the description are set per channel.

## Allow reorder

**Admin Reorder** adds a **Reorder** button to orders in the admin panel, and **Shop Reorder** adds one to a customer's orders on the storefront. Both are on by default.

1. In **Allow Reorder**, switch **Admin Reorder** on or off.
2. Switch **Shop Reorder** on or off.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/order-settings-reorder.png" alt="Allow Reorder and Order Creation sections of the Order Settings screen" />

The **Reorder** button appears only on orders placed by a registered customer, and only while the ordered products can still be bought. Booking products are left out and have to be booked again. In the admin panel, only users allowed to create orders see the button.

## Order creation

**Max Retry Attempts** is how many times the store tries to create an order when an attempt fails during checkout. The default is `3`, and it is set per channel.
