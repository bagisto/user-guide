# Introduction

[Bagisto](https://bagisto.com/en/) is a free and open-source eCommerce platform that lets businesses launch and run modern online stores with ease. Released under the MIT license, it is fully customizable, so every part of the storefront and the admin experience can be adapted to the needs of your business.

The platform is built on top of the reliable [Laravel](https://laravel.com/) framework and uses [Vue.js](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/) on the front end. Together they provide a clean, responsive admin interface and a smooth shopping experience for your customers.

From a single dashboard, you can manage your catalog, inventory, customers, orders, shipments, and marketing campaigns, while keeping full control over how your store looks and behaves.

## Key Features

* **Product Catalog** – Simple, configurable, virtual, grouped, downloadable, bundle, and booking products, organized with categories, attributes, and attribute families.
* **Inventory Management** – Multiple inventory sources with stock tracking across warehouses and store locations.
* **Order Management** – End-to-end order processing, including invoices, shipments, refunds, and cancellations.
* **Customer Management** – Customer accounts, groups, addresses, and product reviews.
* **Multi Channel & Multi Store** – Run several stores or brands from one installation, each with its own theme, catalog, and settings.
* **Multi Currency & Multi Locale** – Sell worldwide with built-in currency and exchange rate handling, translations for 22 locales, and full right-to-left (RTL) support.
* **Payment & Shipping Methods** – Built-in payment and shipping options that can be extended with your own integrations.
* **Marketing Tools** – Cart price rules, catalog price rules, coupons, email campaigns, and abandoned cart recovery.
* **Generative AI** – [Magic AI](../configure/magic-ai.md) writes product and page copy, generates product images, translates reviews, lets shoppers search by photo and personalises the order confirmation, using the AI provider you choose. The storefront also exposes its actions to AI shopping agents in browsers that support them, the first step toward agentic commerce.
* **CMS Pages** – Create and manage static content pages for your storefront.
* **Access Control** – Admin users, roles, and granular permissions for your team.
* **Reporting** – Sales, customer, product, and visitor reports to track how your store is performing.

## Working with the Listing Grids

Most admin screens are listing grids — products, orders, customers, imports, and so on. They all share the same header, search box, **Filter** control, and pagination.

On a small screen, grids that define their own layout, such as **Catalog >> Products**, are shown as cards instead of a wide table. The column header is dropped there, because **Filter** and **Sort By** are reachable from the bar fixed to the foot of the screen. Grids that use the default layout keep the table and scroll sideways.

<ImagePopup src="/images/getting-started/mobile-datagrid.png" alt="Admin Listing Grid on Mobile" />

While a grid is loading, the placeholders match the grid they stand in for on both desktop and mobile, so the layout no longer shifts once the rows arrive.

## Finding your way around

Press **Ctrl + K** (**⌘ K** on a Mac) on any admin page to open the [command palette](./command-palette.md) and jump to a menu item, a configuration screen, an action or a record by typing part of its name.

Whether you are starting a small store or scaling a large catalog across multiple markets, Bagisto gives you the tools to build and grow your online business.
