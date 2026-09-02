# Tenant Management

A **tenant** is a merchant running their own store on the platform. Signing up takes three short steps, after which the tenant's storefront and admin panel are provisioned automatically, so they can start selling without any technical setup.

The **Tenant Admin panel** is a full Bagisto backend. A merchant manages products, categories, attributes, customers, and orders there exactly as in a standard Bagisto store, and also gets a **Billing** menu for their subscription.

## Register a store

Open the platform address and go to the registration page. Registration runs in three steps, shown as **01 Your Sign**, **02 Account**, and **03 You**. The store's address is reserved at the first step.

**Step 1 — Your Sign.** Enter the **Store name** and a **Username**. As you type the username, the subdomain your store will live at is previewed below it (for example, **aishaceramics.rootdomain.com**). Click **Reserve & continue**.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-register-1.png" alt="Registration step 1 — store name and username" />

**Step 2 — Account.** Enter the **Email**, **Password**, and **Confirm password** the store will sign in with. Click **Continue**.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-register-2.png" alt="Registration step 2 — account details" />

**Step 3 — You.** Enter the owner's **First name**, **Last name**, and **Phone**. Click **Open your store** to finish.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-register-3.png" alt="Registration step 3 — personal details" />

### The store is set up for you

Once registration finishes, the storefront and admin panel are created automatically. There is nothing to install — the tenant can sign in and begin adding products right away.

## Sign in to an existing store

A returning merchant goes to the **Sign in** page and enters their **Email**. The platform looks up their store and redirects them to sign in at their own store's address.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-sign-in.png" alt="Find your store sign-in" />

They can also go straight to their store's admin login at **their-domain/admin/login**.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-admin-login.png" alt="Tenant admin login" />

## The storefront

After registration the store is live and ready for customers to browse and buy.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-store.png" alt="Tenant storefront" />

## The admin panel

Signing in opens the Tenant Admin dashboard. A **Store Setup** checklist walks a new merchant through getting ready to sell — add a product, group products into a category, name the store and pick a channel, choose a theme, turn on a payment method and a shipping method, and receive the first order. Below it, the dashboard shows store stats, overall and today's sales, orders, and customers.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-dashboard.png" alt="Tenant admin dashboard" />

### Running the store

Because the Tenant Admin panel is a standard Bagisto backend, day-to-day store operations work exactly as documented in the rest of this guide:

- **Products** — create and manage products under **Catalog >> Products**. See [Simple Product](../product-types/simple-product).
- **Categories, attributes, and attribute families** — organize the catalog under **Catalog**. See [Create Category](../category/create-category).
- **Orders** — handle orders under **Sales >> Orders**. See [Create Order](../orders/create-order), [Create Invoice](../orders/create-invoice), and [Create Shipment](../orders/create-shipment).
- **Storefront theme** — choose and customize the store's design, depending on what the subscription allows. See [Storefront Themes](./storefront-themes).

## Manage profile details

Under **Settings**, a merchant opens **Edit Company Detail** to update their profile. They can change:

**First Name** and **Last Name**
**Email**
**Skype**
**cName** — the custom domain to point at the store (see [CName Mapping](./cname-mapping))
**Phone**

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-profile.png" alt="Edit company detail" />

Click **Save Detail** to keep the changes, or **Back** to return.

## Billing

The **Billing** menu is where a merchant reviews their subscription plan, usage, invoices, and billing address, and upgrades or changes plans. This is covered in full in [Subscription Plans & Billing](./subscription).

The **Billing Address** used on subscription invoices is managed under **Billing >> Billing Address** — click **Add Address** to add one.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-billing-address.png" alt="Billing address" />
