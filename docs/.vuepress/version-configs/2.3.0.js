/* set version */
let version = "2.3.0";

/* version prefix setter */
function setVersionPrefix(children) {
  if (children.constructor === Array) {
    return children.map((child) => {
      child[0] = `/${version}/${child[0]}`;
      return child;
    });
  }
  return `/${version}/${children}`;
}

/* module export */
module.exports = [
  [setVersionPrefix("introduction/introductions"), "Introduction"],

  {
    title: "Product Types",
    path: setVersionPrefix("products"),
    collapsable: true,
    children: setVersionPrefix([
      ["products/simple", "Simple Product"],
      ["products/configurable", "Configurable Product"],
      ["products/virtual", "Virtual Product"],
      ["products/bundle", "Bundle Product"],
      ["products/grouped", "Grouped Product"],
      ["products/downloadable", "Downloadable Product"],
      ["products/booking", "Booking Product"],
    ]),
  },
  {
    title: "Category",
    path: setVersionPrefix("category"),
    collapsable: true,
    children: setVersionPrefix([
      ["category/create-category", "Create Category"],
    ]),
  },
  {
    title: "Attributes",
    path: setVersionPrefix("attribute"),
    collapsable: true,
    children: setVersionPrefix([
      ["attribute/product-attribute", "Create Product Attribute"],
      ["attribute/attribute-input", "Attribute Input Type"],
    ]),
  },

  [setVersionPrefix("attribute-family/attribute-families"), "Attribute Family"],

  {
    title: "Orders",
    path: setVersionPrefix("orders"),
    collapsable: true,
    children: setVersionPrefix([
      ["orders/create-order", "Orders"],
      ["orders/create-invoice", "Invoice"],
      ["orders/create-shipment", "Shipment"],
      ["orders/refunds", "Refunds"],
      ["orders/reorder", "Reorder"],
      ["orders/admin-order", "Admin Order"],
      ["orders/transaction", "Transactions"],
    ]),
  },
  {
    title: "Customers",
    path: setVersionPrefix("customer"),
    collapsable: true,
    children: setVersionPrefix([
      ["customer/create-customer", "Customers"],
      ["customer/customer-groups", "Groups"],
      ["customer/customer-reviews", "Reviews"],
      ["customer/gdpr-request", "GDPR Request"],
    ]),
  },

  [setVersionPrefix("cms/cms-page"), "CMS"],

  {
    title: "Marketing",
    path: setVersionPrefix("marketing"),
    collapsable: true,
    children: setVersionPrefix([
      ["marketing/promotions", "Promotions"],
      ["marketing/communications", "Communications"],
      ["marketing/searchseo", "Search & SEO"],
    ]),
  },
  {
    title: "Settings",
    path: setVersionPrefix("settings"),
    collapsable: true,
    children: setVersionPrefix([
      ["settings/locale", "Locales"],
      ["settings/currencies", "Currencies"],
      ["settings/exchange-rates", "Exchange Rates"],
      ["settings/inventory-source", "Inventory Source"],
      ["settings/channels", "Channels"],
      ["settings/users", "Users"],
      ["settings/roles", "Roles"],
      ["settings/themes", "Themes"],
      ["settings/taxes", "Taxes"],
      ["settings/data-transfer", "Data Transfer"],
    ]),
  },
  {
    title: "Configure",
    path: setVersionPrefix("configure"),
    collapsable: true,
    children: setVersionPrefix([
      ["configure/magic-ai", "Magic AI"],
      ["configure/gdpr", "GDPR"],
      ["configure/weight-unit", "Weight Unit"],
      ["configure/configurable-choices", "Configurable Choices"],
      ["configure/custom-scripts", "Custom Script"],
      ["configure/content", "Content"],
      ["configure/design", "Design"],
      ["configure/back-orders", "Back Orders"],
      ["configure/guest-checkout", "Guest Checkout"],
      ["configure/product-view-page", "Product View Page"],
      ["configure/cart-view-page", "Cart View Page"],
      ["configure/frontend", "Frontend"],
      ["configure/image-size", "Image Size"],
      ["configure/review", "Review"],
      ["configure/attribute", "Attribute"],
      ["configure/social-share", "Social Share"],
      ["configure/rich-snippets", "Rich Snippets"],
      ["configure/address", "Address"],
      ["configure/captcha", "Captcha"],
      ["configure/settings", "Settings"],
      ["configure/email-settings", "E-mail Settings"],
      ["configure/taxes", "Taxes"],
      ["configure/checkout", "Checkout"],
      ["configure/notifications", "Notifications"],
      ["configure/shipping", "Shipping"],
      ["configure/shipping-methods", "Shipping Methods"],
      ["configure/payment-methods", "Payment Methods"],
      ["configure/orders-settings", "Orders Settings"],
      ["configure/invoice-settings", "Invoice Settings"],
      ["configure/pricing", "Pricing"],
    ]),
  },
  [setVersionPrefix("shipping-method/shipping-method"), "Shipping Method"],
  [setVersionPrefix("payment-method/payment-method"), "Payment Method"],
  [setVersionPrefix("magic/magic-ai"), "Magic AI"],

 {
    title: "Multi Vendor Marketplace",
    path: setVersionPrefix("multi-vendor-marketplace"),
    collapsable: true,
    children: setVersionPrefix([
      ["multi-vendor-marketplace/vendor-management", "Vendor Management"],
      ["multi-vendor-marketplace/order-management", "Order Management"],
      ["multi-vendor-marketplace/commission-management", "Commission Management"],
      ["multi-vendor-marketplace/product-management", "Product Management"],
      ["multi-vendor-marketplace/rating-management", "Rating Management"],
    ]),
  },
];