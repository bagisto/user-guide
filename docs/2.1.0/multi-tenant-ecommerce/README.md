# Multi Tenant Ecommerce <span style="background-color: rgb(40, 167, 69);color: white;padding: 6px 16px;border-radius: 8px;font-size: 22px;font-weight: bold;">Paid</span>

[Mutlti-Tenant eCommerce](https://bagisto.com/en/laravel-multi-tenant-saas/) in Bagisto allows businesses to build a SaaS-based marketplace platform where multiple vendors or merchants can create and manage their own individual stores under a single system.

Each tenant (merchant) gets a dedicated storefront with complete control over products, categories, orders, and customers, while the platform owner manages the overall infrastructure, subscriptions, and revenue models. This setup reduces operational costs for merchants, as they don’t need to invest in separate eCommerce development or hosting.

### Super Admin Management 

The Super Admin position is the top authority in the SaaS mall, in charge of overseeing tenants, staff, and the entire platform's operations.

This role includes managing merchants (tenants), giving roles to staff (agents), and making sure everything works well together in the system.

Super Admins set up what products are visible, manage channels, and design themes to keep a consistent look and branding for all tenant stores.

They also take care of CMS pages, send out email broadcasts, and manage global settings to ensure clear communication and proper governance of the platform.

### Tenant Management

Tenant Management in the SaaS makes it easy for tenants to sign up and quickly create their online store by filling in their login, personal, and organization information.

After they register, the tenant’s storefront is set up automatically, so they can begin selling immediately without any technical difficulties.

Using the Tenant Admin Panel, tenants can manage products, categories, attributes, customers, and more through a user-friendly interface similar to Bagisto.

Tenants can also manage orders by making invoices, setting up shipments, and using other menu options to run their store efficiently.

### CName Mapping

CName Mapping lets tenants connect their own domain to the subdomain made by the SaaS, which helps with professional branding.

When a tenant signs up, a default subdomain like **username.rootdomain.com** is created. With CNAME, their actual domain can be directed to this subdomain.

This makes it easy for customers to find the store and keeps a reliable, consistent online image.

The mapping is set up through the tenant's DNS provider and the SaaS by the Super Admin, and it doesn't need any extra plugins.