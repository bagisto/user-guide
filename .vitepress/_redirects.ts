const MARKETPLACE_DOCS = "https://marketplace-docs.bagisto.com";

/**
 * Legacy versioned docs.
 */
const LEGACY_VERSIONS = ["2.3.0", "2.2.0", "2.1.0", "2.0"];

/**
 * Old marketplace page
 */
const MARKETPLACE_PAGES: Record<string, string> = {
  // Getting started
  introduction: "getting-started/introduction",

  // Sellers
  "vendor-management": "sellers/seller-management",
  "seller-attributes": "sellers/seller-attributes",
  "seller-user-role-management": "sellers/seller-user-role-management",
  "featured-sellers": "sellers/featured-sellers",

  // Catalog
  "product-management": "catalog/product-management",
  "quick-create-product": "catalog/product-management",
  "seller-catalog-bulk-upload": "catalog/bulk-upload",
  "product-barcode": "catalog/product-barcode",
  "dealership-management": "catalog/selling-existing-products",

  // Inventory
  "inventory-source-management": "inventory/inventory-source-management",

  // Orders & fulfilment
  "order-management": "orders/order-management",
  "booking-management": "orders/booking-management",
  "return-merchandise-authorization": "orders/return-merchandise-authorization",

  // Payments & commission
  "payment-management": "payments/payment-management",
  "commission-management": "payments/commission-management",
  "mass-payout-management": "payments/mass-payout-management",

  // Moderation
  "rating-management": "moderation/rating-management",
  "seller-product-flagging": "moderation/seller-product-flagging",

  // Subscriptions
  "seller-subscription-management":
    "subscriptions/seller-subscription-management",

  // Customers & communication
  "customer-management": "customers/customer-management",
  communications: "customers/communications",

  // Reporting
  "seller-reporting": "reporting/seller-reporting",
};

/**
 * Pages that moved inside the current guide. Themes moved to the new Appearance
 * area; captcha and the payment and shipping method pages were consolidated
 * onto the pages that already documented them; the weight unit, custom scripts
 * and guest checkout pages were merged into the configuration screen pages that
 * hold those settings.
 */
const MOVED_PAGES: Record<string, string> = {
  "settings/themes": "/appearance/themes",
  "configure/captcha": "/configure/google-captcha",
  "configure/payment-methods": "/payment-method/payment-methods",
  "configure/shipping-methods": "/shipping-method/shipping-methods",
  "configure/coyright-content": "/configure/content.html#copyright-content",
  "configure/pricing": "/configure/taxes",
  "configure/weight-unit": "/configure/general",
  "configure/custom-scripts": "/configure/content.html#custom-scripts",
  "configure/guest-checkout": "/configure/checkout.html#guest-checkout",
};

/**
 * Legacy documentation paths
 */
const LEGACY_PATHS: Record<string, string> = {
  // Introduction
  "introduction/": "/getting-started/introduction.html",
  "introduction/introductions.html": "/getting-started/introduction.html",

  // Product Types
  "products/": "/product-types/simple-product",
  "product-types/simple.html": "/product-types/simple-product",
  "product-types/configurable.html": "/product-types/configurable-product",
  "product-types/virtual.html": "/product-types/virtual-product",
  "product-types/bundle.html": "/product-types/bundle-product",
  "product-types/grouped.html": "/product-types/grouped-product",
  "product-types/downloadable.html": "/product-types/downloadable-product",

  // Category
  "category/": "/category/create-category",
  "category/create-category.html": "/category/create-category",

  // Attribute
  "attribute/": "/attribute/attribute-input",
  "attribute/attribute-input.html": "/attribute/attribute-input",
  "attribute/product-attribute.html": "/attribute/product-attribute",
  "attribute-family/attribute-families.html": "/attribute/attribute-family",

  // Orders
  "orders/": "/orders/create-order",
  "orders/create-order.html": "/orders/create-order",
  "orders/create-invoice.html": "/orders/create-invoice",
  "orders/create-shipment.html": "/orders/create-shipment",
  "orders/refunds.html": "/orders/create-refunds",
  "orders/transaction.html": "/orders/transactions",

  // Customers
  "customers/": "/customer/create-customer",
  "customer/create-customer.html": "/customer/create-customer",
  "customer/customer-groups.html": "/customer/customer-group",
  "customer/customer-reviews.html": "/customer/customer-review",

  // CMS
  "cms/cms-page.html": "/cms/create-cms",

  // Marketing
  "marketing/": "/marketing/cart-rules",
  "marketing/promotions.html": "/marketing/cart-rules",
  "marketing/communications.html": "/marketing/email-templates",

  // Reporting
  "reporting/": "/reporting/sales-report",
  "reporting/sales.html": "/reporting/sales-report",
  "reporting/customers.html": "/reporting/customers-report",
  "reporting/products.html": "/reporting/product-report",

  // Settings
  "settings/": "/settings/locales",
  "settings/locale.html": "/settings/locales",
  "settings/currencies.html": "/settings/currencies",
  "settings/exchange-rates.html": "/settings/exchange-rates",
  "settings/inventory-source.html": "/settings/inventory-source",
  "settings/channels.html": "/settings/channels",
  "settings/users.html": "/settings/users",
  "settings/roles.html": "/settings/roles",
  "settings/themes.html": "/appearance/themes",
  "settings/taxes.html": "/settings/taxes",
  "settings/data-transfer.html": "/settings/data-transfer",

  // Configure
  "configure/": "/configure/introduction",
  "configure/weight-unit.html": "/configure/general",
  "configure/configurable-choices.html": "/configure/configurable-choices",
  "configure/custom-scripts.html": "/configure/content.html#custom-scripts",
  "configure/design.html": "/configure/design",
  "configure/back-orders.html": "/configure/back-orders",
  "configure/guest-checkout.html": "/configure/checkout.html#guest-checkout",
  "configure/product-view-page.html": "/configure/product-view-page",
  "configure/cart-view-page.html": "/configure/cart-view-page",
  "configure/frontend.html": "/configure/frontend",
  "configure/image-size.html": "/configure/image-size",
  "configure/review.html": "/configure/review",
  "configure/attribute.html": "/configure/attribute",
  "configure/captcha.html": "/configure/google-captcha",
  "configure/settings.html": "/configure/settings",
  "configure/email-settings.html": "/configure/email-settings",
  "configure/notifications.html": "/configure/notifications",
  "configure/shipping.html": "/configure/shipping",
  "configure/shipping-methods.html": "/shipping-method/shipping-methods",
  "configure/payment-methods.html": "/payment-method/payment-methods",
  "configure/orders-settings.html": "/configure/orders-settings",
  "configure/invoice-settings.html": "/configure/invoice-settings",
  "configure/pricing.html": "/configure/taxes",

  // Shipping Methods
  "shipping-method/shipping-method.html": "/shipping-method/shipping-methods",

  // Payment Methods
  "payment-method/payment-method.html": "/payment-method/payment-methods",

  // B2B Marketplace
  "b2b-marketplace/": "/b2b-marketplace/request-for-quotes",
  "b2b-marketplace/request-for-quotes.html":
    "/b2b-marketplace/request-for-quotes",
  "b2b-marketplace/buyer-seller-communication.html":
    "/b2b-marketplace/buyer-seller-communication",
  "b2b-marketplace/supplier-microsite.html":
    "/b2b-marketplace/supplier-microsite",
  "b2b-marketplace/buying-leads.html": "/b2b-marketplace/buying-leads",
  "b2b-marketplace/b2b-marketplace-review.html":
    "/b2b-marketplace/b2b-marketplace-review",

  // Multi Tenant ECommerce
  "multi-tenant-ecommerce/": "/multi-tenant-ecommerce/super-admin-management",
  "multi-tenant-ecommerce/super-admin-management.html":
    "/multi-tenant-ecommerce/super-admin-management",
  "multi-tenant-ecommerce/tenant-management.html":
    "/multi-tenant-ecommerce/tenant-management",
  "multi-tenant-ecommerce/cname-mapping.html":
    "/multi-tenant-ecommerce/cname-mapping",
};

/**
 * Adds the marketplace redirects under `prefix` — `""` for the current URLs,
 * `/2.3.0` and friends for the legacy ones.
 */
function addMarketplaceRedirects(map: Record<string, string>, prefix: string) {
  const section = `${prefix}/multi-vendor-marketplace`;

  map[`${section}/`] = `${MARKETPLACE_DOCS}/getting-started/introduction`;

  for (const [slug, target] of Object.entries(MARKETPLACE_PAGES)) {
    const to = `${MARKETPLACE_DOCS}/${target}`;

    map[`${section}/${slug}`] = to;
    map[`${section}/${slug}.html`] = to;
  }
}

function buildRedirects(): Record<string, string> {
  const map: Record<string, string> = {};

  // Marketplace pages removed from the current guide.
  addMarketplaceRedirects(map, "");

  // Pages that moved within the guide, at their live URL.
  for (const [from, to] of Object.entries(MOVED_PAGES)) {
    map[`/${from}`] = to;
    map[`/${from}.html`] = to;
  }

  // Legacy versioned documentation.
  for (const version of LEGACY_VERSIONS) {
    for (const [from, to] of Object.entries(LEGACY_PATHS)) {
      map[`/${version}/${from}`] = to;
    }

    addMarketplaceRedirects(map, `/${version}`);
  }

  return map;
}

export const redirects = buildRedirects();

export function makeRedirectHtml(to: string) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="${to}" />
    <script>window.location.replace("${to}");</script>
  </head>
  <body>
    <p>Redirecting to <a href="${to}">${to}</a>…</p>
  </body>
</html>`;
}
