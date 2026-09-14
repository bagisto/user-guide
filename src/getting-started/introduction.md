# Introduction

[Bagisto](https://bagisto.com/en/) is a free, open-source eCommerce platform for building and running online stores. It is released under the MIT license and built on the [Laravel](https://laravel.com/) framework, with [Vue.js](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/) powering a fast, responsive admin panel and storefront.

This guide is for merchants and store administrators. It shows you how to set up and run a Bagisto store from the admin panel, with no coding required. If you are building extensions, integrations or themes, see the [developer documentation](https://devdocs.bagisto.com/) instead.

## What you can do with Bagisto

- **Sell any kind of product** – simple, configurable, virtual, downloadable, grouped, bundle and booking products, organized with categories, attributes and attribute families.
- **Run several storefronts from one admin panel** – each channel has its own domain, theme, root category, languages and currencies.
- **Sell internationally** – 22 languages with right-to-left support, multiple currencies and exchange rates.
- **Manage stock across locations** – track inventory across warehouses and stores.
- **Handle every order** – invoices, shipments, refunds, returns (RMA) and EU withdrawal requests.
- **Promote your store** – catalog and cart rules, coupons, email campaigns, sitemaps and search optimization.
- **Create content with Generative AI (Magic AI)** – draft product descriptions, generate product images, translate reviews and more.
- **Design your storefront** – choose a theme for each channel and build its pages from sections with a live preview.
- **Keep your team secure** – admin users, roles with granular permissions and two-factor authentication.
- **Measure performance** – sales, customer and product reports.

## How this guide is organized

| Section | What it covers |
|---|---|
| **Getting Started** | This introduction, the [command palette](./command-palette.md) and [two-factor authentication](../authentication/2fa-authentication.md). |
| [Generative AI](../generative-ai/introduction.md) | The AI features built into Bagisto and how to use each one. |
| [Theme](../appearance/themes.md) | Choosing a theme and customizing your storefront with sections. |
| [Store Setup](../settings/channels.md) | Channels, languages, currencies, inventory, taxes, team access and data imports. |
| [Configure](../configure/introduction.md) | Store-wide settings, from shipping, payment and checkout to email, search engines and caching. |
| [Catalog](../category/create-category.md) | Categories, attributes and every product type. |
| [Customers](../customer/create-customer.md) | Customer accounts, groups, group pricing and reviews. |
| [Sales](../orders/create-order.md) | Orders, invoices, shipments, refunds, returns, and shipping and payment methods. |
| [Marketing](../marketing/cart-rules.md) | Promotions, email communications and search engine optimization. |
| [CMS](../cms/create-cms.md) | Content pages such as About Us or your returns policy. |
| [Reporting](../reporting/sales-report.md) | Sales, customer and product reports. |

The extensions — [B2B Marketplace](../b2b-marketplace/introduction.md), [Multi Tenant Ecommerce](../multi-tenant-ecommerce/introduction.md), the [B2B eCommerce Platform](../b2b-ecommerce-platform/introduction.md) and the [Native Mobile App](../open-source-mobile-app/open-source-mobile-app.md) — are covered at the end of the guide.

## Before you begin

You manage your store from the admin panel. On a standard installation it is at `/admin` on your store's domain, for example `https://your-store.com/admin`; whoever installed the store can move it to a different path.

Press **Ctrl + K** (**⌘ K** on a Mac) on any admin page to open the [command palette](./command-palette.md) and jump straight to a menu item, a configuration screen, an action or a record.
