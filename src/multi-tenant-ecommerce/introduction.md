# Multi Tenant Ecommerce

[Multi-Tenant eCommerce](https://bagisto.com/en/laravel-multi-tenant-saas/) in Bagisto lets you run a SaaS platform where many merchants create and manage their own individual stores under a single system.

Each tenant (merchant) gets a dedicated storefront and admin panel with complete control over products, categories, orders, and customers, while you — the platform owner — manage the overall infrastructure, subscription plans, and revenue from one place. This setup reduces operational costs for merchants, as they do not need to invest in separate eCommerce development or hosting.

The platform is run from two separate panels:

- The **Super Admin panel**, where you oversee every tenant, subscription plan, and platform-wide setting.
- The **Tenant Admin panel**, a Bagisto-like backend each merchant uses to run their own store.

<ImagePopup src="/images/multi-tenant-ecommerce/multi-tenant.webp" alt="Multi-tenant SaaS overview" />

## What you can do

### Super Admin

The Super Admin is the top authority on the platform. From the Super Admin panel you can:

- Register tenants, view their store insights, edit them, and sign in as any tenant.
- Create subscription plans, watch which tenants have purchased them, and review subscription invoices.
- Manage platform staff (agents) and their roles, currencies, exchange rates, webhooks, and Super Admin themes.
- Publish CMS pages and configure platform-wide payment, trial, and notification settings.

See [Super Admin Management](./super-admin-management), [Subscription Plans & Billing](./subscription), [Super Admin Settings](./super-admin-settings), [CMS Management](./cms-management), and [Configuration](./configuration).

### Tenant

A tenant signs up, gets a storefront and admin panel provisioned automatically, and starts selling right away. Using the Tenant Admin panel, a merchant can manage products, categories, attributes, customers, and orders, and can review their own subscription plan, usage, and invoices.

See [Tenant Management](./tenant-management).

### CName Mapping

Each tenant is reachable at a default subdomain such as **username.rootdomain.com**. With CNAME mapping, a tenant can point their own domain at that subdomain for professional branding, without any extra plugins.

See [CName Mapping](./cname-mapping).
