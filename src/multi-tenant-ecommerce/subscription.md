# Subscription Plans & Billing

Subscriptions are how the platform earns from its tenants. As Super Admin you build the plans, set what each one allows, and price them. Each tenant then chooses a plan, pays for it, and runs their store within that plan's limits.

There are two sides to this feature: the **Super Admin** side, where plans are created and tracked, and the **Tenant** side, where a merchant subscribes and manages their billing.

## Super Admin: create and manage plans

Go to **Subscription >> Plans** to see every plan, with its code, name, monthly and yearly amount, and status.

<ImagePopup src="/images/multi-tenant-ecommerce/super-plans.png" alt="Subscription plans list" />

### Create a plan

Click **Create Plan** and fill in the form.

<ImagePopup src="/images/multi-tenant-ecommerce/super-create-plan.png" alt="Add Plan form" />

**General**

**Code:** A unique identifier for the plan. Use only letters, numbers, dashes, and underscores.
**Name:** The plan name a tenant sees, such as *Starter* or *Growth*.
**Description:** A short summary of what the plan offers.

**Billing Amount**

**Monthly Amount:** The price when billed monthly.
**Yearly Amount (Month by Month):** The per-month price when billed yearly.

**Plan Limitation**

These set the ceilings a tenant on this plan cannot exceed. Enter a number for each:

**Allowed Products**, **Allowed Categories**, **Allowed Attributes**, **Allowed Attribute Families**, **Allowed Channels**, and **Allowed Orders**.

**Premium Themes:** Choose whether premium themes are **Included** or **Not included** on this plan. This controls which [storefront themes](./storefront-themes) a tenant on the plan can use.

**Offers**

Add an optional discount shown against the plan:

**Status:** Whether the offer is active.
**Title:** The offer label.
**Type:** **Fixed** or **Percentage**.
**Discount:** The amount taken off.

Click **Save Plan** to publish it. You can **Edit** or **Delete** a plan later from the list.

### A plan in use cannot be deleted

Once a tenant has purchased a plan, you can no longer delete it, because it is tied to that tenant's subscription. Edit it instead, or create a new plan.

### Purchased Plans

Go to **Subscription >> Purchased Plans** to see which tenants are on which plan, the amount, the billing period, and the profile state.

<ImagePopup src="/images/multi-tenant-ecommerce/super-purchased-plans.png" alt="Purchased plans" />

Click the **View** (eye) icon on a row to see the full subscription profile for that tenant.

### Subscription Invoices

Go to **Subscription >> Invoices** to see every invoice raised for a subscription, with the customer, total, expiry, and creation date. Click the **View** icon to open an individual invoice.

<ImagePopup src="/images/multi-tenant-ecommerce/super-invoices.png" alt="Subscription invoices" />

### Assign or cancel a tenant's plan

From a tenant's [insights page](./super-admin-management#view-a-tenant-s-insights) you can **Assign** a plan to a tenant directly, or **Cancel Plan** to stop their current subscription.

## Tenant: subscribe and manage billing

A merchant manages their own subscription from the **Billing** menu in their admin panel.

### Plan Overview

Go to **Billing >> Overview** for a snapshot of the current plan: its name and price, next billing date, payment status, and payment method.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-billing-overview.png" alt="Tenant plan overview" />

**Plan Usage** shows how much of each allowance is used — products, categories, attributes, attribute families, channels, and orders — as a bar against the plan's limit. **Purchased Plan History** below lists every plan the store has been on.

### Approaching a limit

When a store gets close to a plan allowance, the usage bar warns the merchant. To keep adding once a limit is reached, they upgrade to a plan with a higher allowance.

### Choose a plan

Go to **Billing >> Plans** to compare every available plan side by side, each with its price and feature list. Toggle between **Monthly** and **Yearly** pricing, and the current plan is marked. Click **Choose** on a plan to start subscribing to it.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-plans.png" alt="Choose a subscription plan" />

At checkout the merchant enters their billing details, picks a payment method — **Stripe**, **PayPal**, or **Manual** — and confirms. With Stripe or PayPal they are redirected to pay securely; with Manual, an invoice is generated instead.

### Invoices

Go to **Billing >> Invoices** for the store's own subscription invoices. Click the **View** icon to open one.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-invoices.png" alt="Tenant subscription invoices" />

### Purchased Plan History

Go to **Billing >> Plans** and open the history, or view it on the overview, to see every plan the store has subscribed to, with the paid amount, payment cycle, and state.

<ImagePopup src="/images/multi-tenant-ecommerce/tenant-plan-history.png" alt="Purchased plan history" />
