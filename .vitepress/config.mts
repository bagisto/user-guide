import { defineConfig } from 'vitepress'
import { redirects, makeRedirectHtml } from './_redirects'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  lang: 'en-US',
  title: "Bagisto User Documentation",
  description: "Bagisto User Documentation",

  vite: {
    server: {
      host: '0.0.0.0'
    }
  },

  srcDir: './src',

  themeConfig: {
    siteTitle: false,

    logo: {
      light: '/logo.png',
      dark: '/logo.png',
    },

    nav: [
      { text: 'Dev Docs', link: 'https://devdocs.bagisto.com/' },
      { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
      { text: 'Community Forum', link: 'https://forums.bagisto.com/' },
      { text: 'Contact Us', link: 'https://bagisto.com/en/contacts/' }
    ],

    editLink: {
      pattern: 'https://github.com/bagisto/bagisto-docs/edit/master/src/:path',
      text: 'Help us improve this page on Github.'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'full'
      }
    },

    sidebar: [
      {
        text: 'Introduction',
        link: '/getting-started/introduction'
      },

      {
        text: 'Product Types',
        collapsed: false,
        items: [
          { text: 'Simple Product', link: '/product-types/simple-product' },
          { text: 'Configurable Product', link: '/product-types/configurable-product' },
          { text: 'Virtual Product', link: '/product-types/virtual-product' },
          { text: 'Bundle Product', link: '/product-types/bundle-product' },
          { text: 'Grouped Product', link: '/product-types/grouped-product' },
          { text: 'Downlodable Product', link: '/product-types/downloadable-product' },
          { text: 'Booking Product', link: '/product-types/booking-product' },
        ]
      },

      {
        text: 'Category',
        collapsed: false,
        items: [
          { text: 'Create Category', link: '/category/create-category' },
        ]
      },

      {
        text: 'Attributes',
        collapsed: false,
        items: [
          { text: 'Attribute Input Types', link: '/attribute/attribute-input' },
          { text: 'Create Product Attributes', link: '/attribute/product-attribute' },
          { text: 'Attribute Family', link: '/attribute/attribute-family' },
        ]
      },

      {
        text: 'Orders',
        collapsed: false,
        items: [
          { text: 'Create Order', link: '/orders/create-order' },
          { text: 'Create Invoice', link: '/orders/create-invoice' },
          { text: 'Create Shipment', link: '/orders/create-shipment' },
          { text: 'Create Refunds', link: '/orders/create-refunds' },
          { text: 'Transactions', link: '/orders/transactions' },
        ]
      },
      {
        text: 'Customers',
        collapsed: false,
        items: [
          { text: 'Create Customer', link: '/customer/create-customer' },
          { text: 'Customer Group', link: '/customer/customer-group' },
          { text: 'Customer Group Pricing', link: '/customer/customer-group-price' },
          { text: 'Customer Review', link: '/customer/customer-review' },
        ]
      },

      {
        text: 'CMS',
        collapsed: false,
        items: [
          { text: 'Create CMS', link: '/cms/create-cms' },
        ]
      },

      {
        text: 'Marketing',
        collapsed: false,
        items: [
          { text: 'Cart Rules', link: '/marketing/cart-rules' },
          { text: 'Catalog Rules', link: '/marketing/catalog-rules' },
          { text: 'Email Templates', link: '/marketing/email-templates' },
          { text: 'Events', link: '/marketing/events' },
          { text: 'Campaigns', link: '/marketing/campaigns' },
          { text: 'Newsletter Subscriptions', link: '/marketing/newsletter-subscription' },
          { text: 'Sitemaps', link: '/marketing/sitemaps' },
          { text: 'URL Rewrite', link: '/marketing/url-rewrite' },
          { text: 'Search Terms', link: '/marketing/search-terms' },
          { text: 'Search Synonyms', link: '/marketing/search-synonyms' },
        ]
      },

      {
        text: 'Reporting',
        collapsed: false,
        items: [
          { text: 'Sales', link: '/reporting/sales-report' },
          { text: 'Customers', link: '/reporting/customers-report' },
          { text: 'Products', link: '/reporting/product-report' },
        ]
      },


      {
        text: 'Settings',
        collapsed: false,
        items: [
          { text: 'Locales', link: '/settings/locales' },
          { text: 'Currencies', link: '/settings/currencies' },
          { text: 'Exchange Rates', link: '/settings/exchange-rates' },
          { text: 'Inventory Source', link: '/settings/inventory-source' },
          { text: 'Channels', link: '/settings/channels' },
          { text: 'Users', link: '/settings/users' },
          { text: 'Roles', link: '/settings/roles' },
          { text: 'Themes', link: '/settings/themes' },
          { text: 'Taxes', link: '/settings/taxes' },
          { text: 'Data Transfer', link: '/settings/data-transfer' },
        ]
      },

      {
        text: 'Configure',
        collapsed: false,
        items: [
          { text: 'Address', link: '/configure/address' },
          { text: 'Attribute', link: '/configure/attribute' },
          { text: 'Back Orders', link: '/configure/back-orders' },
          { text: 'Captcha', link: '/configure/captcha' },
          { text: 'Cart View Page', link: '/configure/cart-view-page' },
          { text: 'Checkout', link: '/configure/checkout' },
          { text: 'Configurable Choices', link: '/configure/configurable-choices' },
          { text: 'Content', link: '/configure/content' },
          { text: 'Custom Scripts', link: '/configure/custom-scripts' },
          { text: 'Design', link: '/configure/design' },
          { text: 'Email Settings', link: '/configure/email-settings' },
          { text: 'Frontend', link: '/configure/frontend' },
          { text: 'GDPR', link: '/configure/gdpr' },
          { text: 'Guest Checkout', link: '/configure/guest-checkout' },
          { text: 'Image Size', link: '/configure/image-size' },
          { text: 'Invoice Settings', link: '/configure/invoice-settings' },
          { text: 'Magic AI', link: '/configure/magic-ai' },
          { text: 'Notifications', link: '/configure/notifications' },
          { text: 'Order Settings', link: '/configure/orders-settings' },
          { text: 'Payment Methods', link: '/configure/payment-methods' },
          { text: 'Pricing', link: '/configure/pricing' },
          { text: 'Product View Page', link: '/configure/product-view-page ' },
          { text: 'Review', link: '/configure/review' },
          { text: 'Rich Snippets', link: '/configure/rich-snippets' },
          { text: 'Settings', link: '/configure/settings' },
          { text: 'Shipping Methods', link: '/configure/shipping-methods' },
          { text: 'Shipping', link: '/configure/shipping' },
          { text: 'Social Share', link: '/configure/social-share' },
          { text: 'Taxes', link: '/configure/taxes' },
          { text: 'Weight Unit', link: '/configure/weight-unit' },

        ]
      },

      {
        text: 'Shipping Methods',
        link: '/shipping-method/shipping-methods'
      },

      {
        text: 'Payment Methods',
        link: '/payment-method/payment-methods'
      },

      {
        text: 'Multi Vendor Marketplace',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/multi-vendor-marketplace/introduction' },
          { text: 'Vendor Management', link: '/multi-vendor-marketplace/vendor-management' },
          { text: 'Dealership Management', link: '/multi-vendor-marketplace/dealership-management' },
          { text: 'Order Management', link: '/multi-vendor-marketplace/order-management' },
          { text: 'Commission Management', link: '/multi-vendor-marketplace/commission-management' },
          { text: 'Product Management', link: '/multi-vendor-marketplace/product-management' },
          { text: 'Rating Management', link: '/multi-vendor-marketplace/rating-management' },
          { text: 'Payment Management', link: '/multi-vendor-marketplace/payment-management' },
        ]
      },

       {
        text: 'B2B Marketplace',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/b2b-marketplace/introduction' },
          { text: 'Request for Quotes', link: '/b2b-marketplace/request-for-quotes' },
          { text: 'Buyer Seller Communication', link: '/b2b-marketplace/buyer-seller-communication' },
          { text: 'Supplier Microsite', link: '/b2b-marketplace/supplier-microsite' },
          { text: 'Buying leads', link: '/b2b-marketplace/buying-leads' },
          { text: 'Review Management', link: '/b2b-marketplace/b2b-marketplace-review' },
        ]
      },

       {
        text: 'Multi Tenant Ecommerce',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/multi-tenant-ecommerce/introduction' },
          { text: 'Super Admin Management', link: '/multi-tenant-ecommerce/super-admin-management' },
          { text: 'Tenant Management', link: '/multi-tenant-ecommerce/tenant-management' },
          { text: 'CName Mapping', link: '/multi-tenant-ecommerce/cname-mapping' },
        ]
      },
    ],

      outline: {
      level: 'deep'
    },

    footer: {
      message: 'Released under the <a href="https://opensource.org/licenses/mit" target="_blank" class="mit-license">MIT License</a>.',
      copyright: `Copyright © ${new Date().getFullYear()} Webkul`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bagisto/bagisto' }
    ],

    search: {
      provider: 'local'
    }
  },

  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir

    Object.entries(redirects).forEach(([from, to]) => {
      if (from.includes('*')) {
        console.warn(`⚠️ Skipping wildcard redirect: ${from} -> ${to}`)
        return
      }

      let filePath

      if (from.endsWith('.html')) {
        filePath = path.join(outDir, from)
      } else {
        filePath = path.join(outDir, from, 'index.html')
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true })
      fs.writeFileSync(filePath, makeRedirectHtml(to), 'utf-8')
      console.log(`✅ Redirect created: ${from} -> ${to}`)
    })
  }
})