# Super Admin Management

The **Super Admin** is the top authority on the platform, in charge of tenants, staff, and platform-wide operations. From the Super Admin panel you oversee every merchant store, manage subscription plans, and keep the platform running smoothly.

## Sign in to the Super Admin panel

**Step 1:** Open the platform address and go to **/super/login**. You can also reach it from the **Super Admin Login** link on the registration page.

**Step 2:** Enter your registered **Email Address** and **Password**, then click **Sign In**.

<ImagePopup src="/images/multi-tenant-ecommerce/super-login.png" alt="Super Admin Sign In" />

## Dashboard

After you sign in, the **Dashboard** opens with an overview of the whole platform: total and active tenants, active subscriptions, total revenue, recent tenants, recent invoices, and expiring plans.

<ImagePopup src="/images/multi-tenant-ecommerce/super-dashboard.png" alt="Super Admin Dashboard" />

## Insights

Go to **Insights** for a performance view across all tenants. The top cards show **Gross Volume**, **Orders**, **Active Tenants**, and **New Signups** for the selected period, which you can switch between **7d**, **30d**, and **90d**.

Below the cards, the **Trend** chart plots volume and orders over time, **Needs Attention** flags tenants that require a look, and the **Leaderboard** ranks tenants by gross volume, orders, average order, and customers. Use **Export** to download the leaderboard.

<ImagePopup src="/images/multi-tenant-ecommerce/super-insights.png" alt="Tenant Insights and Leaderboard" />

## Tenants

Go to **Tenants >> Tenants** to see every tenant on the platform. You can **search**, **filter**, and **paginate** the list to find a store quickly.

<ImagePopup src="/images/multi-tenant-ecommerce/super-tenants.png" alt="Tenants list" />

### Register a tenant

You can add a tenant directly from the Super Admin panel. Click **Register Tenant** (or **Create**) in the top right and fill in the form.

<ImagePopup src="/images/multi-tenant-ecommerce/super-create-tenant.png" alt="Create Tenant form" />

**First Name:** The tenant's first name.
**Last Name:** The tenant's last name.
**Email:** The email the tenant signs in with.
**Phone:** A contact number.
**Organization Name:** The store's business name.
**User Name:** Used to build the tenant's default subdomain.
**Password / Confirm Password:** The tenant's sign-in password.
**Profile Image:** An optional profile picture, in PNG or JPG at **110 × 110**.

Click **Save Tenant** to create the store. The tenant's storefront and admin panel are provisioned automatically.

### View a tenant's insights

Click the **View** (eye) icon on a tenant row to open **Tenant Insights**, a read-only summary of that store: its subscription plan, domain information, counts of attributes, attribute families, products, categories, customers, and customer groups, and the tenant's address list.

<ImagePopup src="/images/multi-tenant-ecommerce/super-tenant-view.png" alt="Tenant Insights" />

From this screen you can also **Cancel Plan**, **Assign** a plan, or **Login As Tenant** (see below).

### Edit or delete a tenant

Click the **Edit** (pencil) icon to change a tenant's details, such as name, contact information, organization, or CNAME.

<ImagePopup src="/images/multi-tenant-ecommerce/super-edit-tenant.png" alt="Edit Tenant" />

To remove a tenant, click the **Delete** icon on the row and confirm.

### Sign in as a tenant

From a tenant's view page, click **Login As Tenant** to open that merchant's admin panel as them. This is useful for support — you see exactly what the merchant sees.

### This does not undo a delete

Deleting a tenant removes the store and its data. There is no undo, so confirm you have the right tenant before you delete.

## Tenants' customers, products, and orders

The Super Admin can review the data behind every tenant store in read-only lists.

- **Customers** — go to **Tenants >> Customers** to see every customer across all tenant stores.

  <ImagePopup src="/images/multi-tenant-ecommerce/super-customers.png" alt="All tenant customers" />

- **Products** — go to **Tenants >> Products** to see every product across all tenant stores.

  <ImagePopup src="/images/multi-tenant-ecommerce/super-products.png" alt="All tenant products" />

- **Orders** — go to **Tenants >> Orders** to see every order across all tenant stores.

  <ImagePopup src="/images/multi-tenant-ecommerce/super-orders.png" alt="All tenant orders" />

### These lists are view only

On the customers, products, and orders lists you can browse, search, and filter, but you cannot edit or delete a tenant's records. Only the tenant manages their own store data.
