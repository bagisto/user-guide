# Configuration

**Configure** holds the settings that decide how your store behaves: units and storefront content, generative AI, shipping and payment, checkout, orders and taxes, the catalog, customer accounts, email, search, file storage and caching. You set most of them once while setting up the store, and come back when something changes.

## Open a configuration screen

1. In the admin panel, click **Configure** in the left menu.
2. Find the group you need, such as **Sales**.
3. Click one of its tiles, such as **Checkout**.
4. Change the settings.
5. Click **Save Configuration**.

<ImagePopup src="/images/configure/configuration-index.png" alt="Configuration page with the General, Magic AI and Sales groups of tiles" />

To find a setting without browsing, type at least two letters of its name in the **Search** box at the top of the **Configuration** page, and choose it from the results.

## Settings per channel and per language

Some settings can differ from one channel or language to another. The badge beside a field's label tells you which:

- A field with the channel badge, such as **Default**, is saved for the channel you are editing.
- A field with the language badge, such as **English**, is saved for the language you are editing.
- A field without a badge applies to the whole store.

<ImagePopup src="/images/configure/configuration-scope.png" alt="GDPR screen with the language selector and fields marked with the Default and English badges" />

To change another channel or language, choose it in the selectors above the settings before you edit anything. The channel selector appears only when your store has more than one channel, and the language selector only when the channel offers more than one language.

## What each group covers

| Group | Screens | What you set there |
|---|---|---|
| **General** | [General](./general.md), [Content](./content.md), [Design](./design.md), [Exchange Rates](./exchange-rates-configurations.md), [Sitemap](./sitemap.md), [GDPR](./gdpr.md) | The weight unit and breadcrumbs, the header offer, footer text and custom scripts, the admin logo and category menu, automatic exchange rates, sitemap limits and privacy consent. |
| **Magic AI** | [Generative AI (Magic AI)](./magic-ai.md) | Switching generative AI on, provider API keys, and the AI features of the admin panel and the storefront. |
| **Sales** | [Shipping Settings](./shipping.md), [Shipping Methods](../shipping-method/shipping-methods.md), [Payment Methods](../payment-method/payment-methods.md), [Checkout](./checkout.md), [Order Settings](./orders-settings.md), [Invoice Settings](./invoice-settings.md), [Taxes](./taxes.md), [RMA](./rma.md), [EU Withdrawals](./eu-withdrawals.md) | Where you ship from, the shipping and payment methods, the cart and checkout, order and invoice numbers, tax calculation, returns and EU withdrawals. |
| **Catalog** | [Products](./configurable-choices.md), [Inventory](./back-orders.md), [Rich Snippets](./rich-snippets.md) | Product listings and pages, reviews, sharing, image sizes, upload limits, price disclosure, back orders and structured data for search engines. |
| **Customer** | [Customer Settings](./settings.md), [Address](./address.md), [Google Captcha](./google-captcha.md) | New accounts, sign-in, social login, the wishlist and newsletter, address forms and bot protection. |
| **Email** | [Email Settings](./email-settings.md), [Notifications](./notifications.md) | How email is sent, the sender addresses and which emails go out. |
| **Search Engines** | [Search Engines](./search-engines.md) | Whether product search runs on the database or on Elasticsearch. |
| **File Management** | [File Management](./file-management.md) | Where uploaded files are stored: on the server, in Amazon S3 or in Cloudflare R2. |
| **Cache Management** | [Cache Management](./cache-management.md) | Clearing and rebuilding caches, and the storefront's full page cache. |
| **About** | [About](./about.md) | The versions and services your store runs on. |

## Differences in Bagisto 2.4

This guide describes the Configuration screens of Bagisto 2.5. Most of them are the same in Bagisto 2.4, except for these:

- **Search Engines**, **File Management** and **About** are new in Bagisto 2.5, and so is the **Omnibus Price Disclosure** section under **Catalog >> Products**.
- In Bagisto 2.4, the search engine and the query length limits are set in the **Search** section under **Configure >> Catalog >> Products**. See [Search Engines](./search-engines.md).
- In Bagisto 2.4, **Allow customers to directly buy products** is in the **Storefront** section under **Configure >> Catalog >> Products**. In Bagisto 2.5 it is in **Product view page configuration**.
- In Bagisto 2.4, the cart icon's **Summary** has its own **My Cart** section under **Configure >> Sales >> Checkout**. In Bagisto 2.5 it is in **Mini Cart**.
