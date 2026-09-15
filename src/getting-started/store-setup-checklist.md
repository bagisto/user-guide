# Store Setup Checklist

A new Bagisto store already has a **Default** channel, a **Default** inventory source, the **Administrator** role, and the languages and currencies chosen when Bagisto was installed. Work through these steps in order to turn it into a store that's ready for its first order. Each step links to the page with the details.

::: tip Hide the storefront while you set up
Turn on [maintenance mode](../settings/channels.md#maintenance-mode) for your channel and add your own IP address to **Allowed IPs**, so only you can see the storefront until it's ready.
:::

## Set up your store

### 1. Secure your account

Update your name, email address and password in **My Account**, and turn on two-factor authentication.
See [Admin Panel](./admin-panel.md#update-your-account) and [Two-Factor Authentication](../authentication/2fa-authentication.md).

### 2. Set up your channel and languages

Check the **Default** channel's name, hostname, logo, favicon and home page SEO. Add any language you sell in that isn't there yet, select it in the channel, and choose the language the storefront opens in.
See [Channels](../settings/channels.md) and [Locales](../settings/locales.md).

### 3. Set up currencies and exchange rates

Product prices are entered in your base currency. Add each other currency shoppers can choose, select it in the channel, and give it an exchange rate, by hand or from an exchange rate service.
See [Currencies](../settings/currencies.md) and [Exchange Rates](../settings/exchange-rates.md).

### 4. Set up taxes

Create a tax rate for each place you charge tax, and group the rates in a tax category. Then choose which address tax is based on, whether prices include tax, and the default tax category.
See [Taxes](../settings/taxes.md) and [Configure >> Sales >> Taxes](../configure/taxes.md).

### 5. Add your inventory sources

If you keep stock in more than one place, add each warehouse or shop as an inventory source, and select it in the channel.
See [Inventory Sources](../settings/inventory-source.md).

### 6. Choose shipping and payment methods

Check your shipping settings, switch on the shipping methods you offer and set their prices, then switch on the payment methods customers can use.
See [Shipping Settings](../configure/shipping.md), [Shipping Methods](../shipping-method/shipping-methods.md) and [Payment Methods](../payment-method/payment-methods.md).

### 7. Add categories and products

Create your categories under the channel's root category, then add your products one by one or import them from a file. Give each product its channels, tax category and stock.
See [Categories](../category/create-category.md), [Products](../product-types/products.md) and [Data Transfer](../settings/data-transfer.md).

### 8. Design your storefront

Choose the theme for your channel and build its pages from sections. Nothing changes on the storefront until you publish.
See [Themes & Sections](../appearance/themes.md).

### 9. Set up store email

Choose how your store sends email, enter the sender's name and email address, and choose which emails are sent. Without this, customers don't get order emails, and admins don't get password reset links or two-factor backup codes.
See [Email Settings](../configure/email-settings.md) and [Notifications](../configure/notifications.md).

### 10. Ask for scheduled tasks and the queue worker

Some work runs on a timetable or in the background, such as nightly catalog rule prices, campaigns and queued emails. Ask your developer or hosting provider to set up the scheduler and, if your store uses a queue, a queue worker.
See [Scheduled Tasks](./scheduled-tasks.md).

### 11. Place a test order

1. Click **Visit Shop** in the header to open your storefront.
2. Add a product to the cart.
3. Go to the checkout.
4. Choose one of your shipping methods and payment methods.
5. Place the order.
6. In the admin panel, go to **Sales >> Orders**.
7. Open the order.
8. Check the prices, tax and shipping.
9. Create an invoice for the order.
10. Create a shipment for the order.

See [Orders](../orders/orders.md), [Create Invoice](../orders/create-invoice.md) and [Create Shipment](../orders/create-shipment.md). When everything works, switch maintenance mode off to open your store.

## Keep going

- **Add your team**: create a role for each kind of work, then a user for each person. See [Roles](../settings/roles.md) and [Users](../settings/users.md).
- **Write content faster**: draft product content and images with Generative AI (Magic AI). See [Generative AI](../generative-ai/introduction.md).
- **Promote your store**: offer discounts and coupons. See [Cart Rules](../marketing/cart-rules.md) and [Catalog Rules](../marketing/catalog-rules.md).
- **Follow your results**: check the [Dashboard](./dashboard.md) and [Reporting](../reporting/sales-report.md).
