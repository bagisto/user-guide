import { defineConfig } from "vitepress";
import { redirects, makeRedirectHtml } from "./_redirects";
import fs from "fs";
import path from "path";

// Function to generate sitemap
function generateSitemap(outputDir) {
  const baseUrl = "https://docs.bagisto.com";
  const srcDir = path.join(process.cwd(), "src");

  const getAllMarkdownFiles = (dir, prefix = "") => {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      const pathPrefix = prefix ? `${prefix}/${entry.name}` : entry.name;

      if (entry.isDirectory() && entry.name !== "public") {
        files.push(...getAllMarkdownFiles(fullPath, pathPrefix));
      } else if (
        entry.isFile() &&
        entry.name.endsWith(".md") &&
        entry.name !== "index.md"
      ) {
        const urlPath = pathPrefix.replace(/\.md$/, "");
        files.push(urlPath);
      }
    });

    return files;
  };

  const mdFiles = getAllMarkdownFiles(srcDir);
  const sitemapUrls = [
    { url: "", lastmod: new Date().toISOString() },
    ...mdFiles.map((file) => ({
      url: `/${file}`,
      lastmod: new Date().toISOString(),
    })),
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(
    path.join(outputDir, "sitemap.xml"),
    sitemapContent,
    "utf-8",
  );
  console.log(
    `Sitemap generated: ${path.join(outputDir, "sitemap.xml")} with ${sitemapUrls.length} URLs`,
  );
}

// Vite plugin to serve sitemap.xml dynamically
function sitemapPlugin() {
  return {
    name: "sitemap-plugin",
    apply: "serve",
    configResolved(config) {
      // Generate sitemap to public folder on server start
      const publicDir = path.join(process.cwd(), "src/public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      generateSitemap(publicDir);
      console.log("Sitemap plugin initialized for dev server");
    },
  };
}

// Sidebar group headings. Every top-level group gets an icon, and the two
// headline groups (Generative AI and Theme) also get their gradient treatment.
// The styles live in theme/custom.css.
function groupLabel(label, icon) {
  return `<span class="sb-group sb-icon--${icon}"><span class="sb-group__icon" aria-hidden="true"></span><span class="sb-group__label">${label}</span></span>`;
}

function featureLabel(label, feature) {
  return `<span class="sb-feature feature--${feature}"><span class="sb-feature__icon" aria-hidden="true"></span><span class="sb-feature__label">${label}</span></span>`;
}

export default defineConfig({
  lang: "en-US",
  title: "Bagisto User Documentation",
  description: "Bagisto User Documentation",

  vite: {
    server: {
      host: "0.0.0.0",
    },
    plugins: [sitemapPlugin()],
  },

  srcDir: "./src",

  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "elxsIWt5ea-SmaO99B5RD3z_35WCl-hLJejTZEfVu4I",
      },
    ],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }],
    [
      "script",
      {},
      `window.chatbotConfig = { url: "https://ask.bagisto.com:5000/chat" };`,
    ],
    [
      "script",
      {
        src: "https://bagisto.github.io/ai-chatbot/chatbot.js",
        async: true,
      },
    ],
  ],

  themeConfig: {
    siteTitle: false,

    logo: {
      light: "/logo.png",
      dark: "/logo.png",
    },

    nav: [
      { text: "Dev Docs", link: "https://devdocs.bagisto.com/" },
      { text: "Extensions", link: "https://bagisto.com/en/extensions/" },
      { text: "Community Forum", link: "https://forums.bagisto.com/" },
      { text: "Contact Us", link: "https://bagisto.com/en/contacts/" },
    ],

    editLink: {
      pattern: "https://github.com/bagisto/bagisto-docs/edit/master/src/:path",
      text: "Help us improve this page on Github.",
    },

    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "full",
      },
    },

    sidebar: [
      {
        text: groupLabel("Getting Started", "rocket"),
        collapsed: false,
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
          { text: "Command Palette", link: "/getting-started/command-palette" },
          {
            text: "Two Factor Authentication",
            link: "/authentication/2fa-authentication",
          },
        ],
      },

      {
        text: featureLabel("Generative AI", "ai"),
        collapsed: false,
        items: [
          { text: "Overview", link: "/generative-ai/introduction" },
          {
            text: "Generate Text Content",
            link: "/generative-ai/generate-content",
          },
          {
            text: "Generate Product Images",
            link: "/generative-ai/generate-images",
          },
          { text: "AI Image Search", link: "/generative-ai/image-search" },
          {
            text: "Review Translation",
            link: "/generative-ai/review-translation",
          },
          {
            text: "Personalized Checkout Message",
            link: "/generative-ai/checkout-message",
          },
        ],
      },

      {
        text: featureLabel("Theme", "theme"),
        collapsed: false,
        items: [{ text: "Themes & Sections", link: "/appearance/themes" }],
      },

      {
        text: groupLabel("Store Setup", "settings"),
        collapsed: false,
        items: [
          { text: "Channels", link: "/settings/channels" },
          { text: "Locales", link: "/settings/locales" },
          { text: "Currencies", link: "/settings/currencies" },
          { text: "Exchange Rates", link: "/settings/exchange-rates" },
          { text: "Inventory Sources", link: "/settings/inventory-source" },
          { text: "Taxes", link: "/settings/taxes" },
          { text: "Users", link: "/settings/users" },
          { text: "Roles", link: "/settings/roles" },
          { text: "Data Transfer", link: "/settings/data-transfer" },
        ],
      },

      {
        text: groupLabel("Configure", "wrench"),
        collapsed: false,
        items: [
          { text: "Overview", link: "/configure/introduction" },
          {
            text: "General",
            collapsed: false,
            items: [
              { text: "General", link: "/configure/general" },
              { text: "Content", link: "/configure/content" },
              { text: "Design", link: "/configure/design" },
              {
                text: "Exchange Rates",
                link: "/configure/exchange-rates-configurations",
              },
              { text: "Sitemap", link: "/configure/sitemap" },
              { text: "GDPR", link: "/configure/gdpr" },
            ],
          },
          { text: "Generative AI (Magic AI)", link: "/configure/magic-ai" },
          {
            text: "Sales",
            collapsed: false,
            items: [
              { text: "Shipping Settings", link: "/configure/shipping" },
              {
                text: "Shipping Methods",
                link: "/shipping-method/shipping-methods",
              },
              { text: "Payment Methods", link: "/payment-method/payment-methods" },
              { text: "Checkout", link: "/configure/checkout" },
              { text: "Order Settings", link: "/configure/orders-settings" },
              { text: "Invoice Settings", link: "/configure/invoice-settings" },
              { text: "Taxes", link: "/configure/taxes" },
              { text: "RMA", link: "/configure/rma" },
              { text: "EU Withdrawals", link: "/configure/eu-withdrawals" },
            ],
          },
          {
            text: "Catalog",
            collapsed: false,
            items: [
              {
                text: "Products",
                collapsed: false,
                items: [
                  {
                    text: "Product Settings",
                    link: "/configure/configurable-choices",
                  },
                  { text: "Storefront", link: "/configure/frontend" },
                  {
                    text: "Product View Page",
                    link: "/configure/product-view-page",
                  },
                  { text: "Review", link: "/configure/review" },
                  { text: "Social Share", link: "/configure/social-share" },
                  { text: "Cart View Page", link: "/configure/cart-view-page" },
                  { text: "Image Size", link: "/configure/image-size" },
                  { text: "Attribute", link: "/configure/attribute" },
                  {
                    text: "Omnibus Price Disclosure",
                    link: "/configure/omnibus",
                  },
                ],
              },
              { text: "Inventory", link: "/configure/back-orders" },
              { text: "Rich Snippets", link: "/configure/rich-snippets" },
            ],
          },
          {
            text: "Customer",
            collapsed: false,
            items: [
              { text: "Customer Settings", link: "/configure/settings" },
              { text: "Address", link: "/configure/address" },
              { text: "Google Captcha", link: "/configure/google-captcha" },
            ],
          },
          {
            text: "Email",
            collapsed: false,
            items: [
              { text: "Email Settings", link: "/configure/email-settings" },
              { text: "Notifications", link: "/configure/notifications" },
            ],
          },
          { text: "Search Engines", link: "/configure/search-engines" },
          { text: "File Management", link: "/configure/file-management" },
          { text: "Cache Management", link: "/configure/cache-management" },
          { text: "About", link: "/configure/about" },
        ],
      },

      {
        text: groupLabel("Catalog", "package"),
        collapsed: false,
        items: [
          { text: "Categories", link: "/category/create-category" },
          {
            text: "Attributes",
            collapsed: false,
            items: [
              { text: "Attribute Input Types", link: "/attribute/attribute-input" },
              {
                text: "Create Product Attributes",
                link: "/attribute/product-attribute",
              },
              { text: "Attribute Families", link: "/attribute/attribute-family" },
            ],
          },
          {
            text: "Products",
            collapsed: false,
            items: [
              { text: "Simple Product", link: "/product-types/simple-product" },
              {
                text: "Configurable Product",
                link: "/product-types/configurable-product",
              },
              { text: "Virtual Product", link: "/product-types/virtual-product" },
              {
                text: "Downloadable Product",
                link: "/product-types/downloadable-product",
              },
              { text: "Grouped Product", link: "/product-types/grouped-product" },
              { text: "Bundle Product", link: "/product-types/bundle-product" },
              { text: "Booking Product", link: "/product-types/booking-product" },
            ],
          },
        ],
      },

      {
        text: groupLabel("Customers", "users"),
        collapsed: false,
        items: [
          { text: "Create Customer", link: "/customer/create-customer" },
          { text: "Customer Groups", link: "/customer/customer-group" },
          {
            text: "Customer Group Pricing",
            link: "/customer/customer-group-price",
          },
          { text: "Customer Reviews", link: "/customer/customer-review" },
        ],
      },

      {
        text: groupLabel("Sales", "cart"),
        collapsed: false,
        items: [
          { text: "Create Order", link: "/orders/create-order" },
          { text: "Create Invoice", link: "/orders/create-invoice" },
          { text: "Create Shipment", link: "/orders/create-shipment" },
          { text: "Create Refund", link: "/orders/create-refunds" },
          { text: "Transactions", link: "/orders/transactions" },
          { text: "EU Withdrawal", link: "/orders/eu-withdrawal" },
          { text: "RMA", link: "/orders/rma" },
        ],
      },

      {
        text: groupLabel("Marketing", "megaphone"),
        collapsed: false,
        items: [
          { text: "Cart Rules", link: "/marketing/cart-rules" },
          { text: "Catalog Rules", link: "/marketing/catalog-rules" },
          { text: "Email Templates", link: "/marketing/email-templates" },
          { text: "Events", link: "/marketing/events" },
          { text: "Campaigns", link: "/marketing/campaigns" },
          {
            text: "Newsletter Subscriptions",
            link: "/marketing/newsletter-subscription",
          },
          { text: "Sitemaps", link: "/marketing/sitemaps" },
          { text: "URL Rewrites", link: "/marketing/url-rewrite" },
          { text: "Search Terms", link: "/marketing/search-terms" },
          { text: "Search Synonyms", link: "/marketing/search-synonyms" },
        ],
      },

      {
        text: groupLabel("CMS", "file"),
        collapsed: false,
        items: [{ text: "Pages", link: "/cms/create-cms" }],
      },

      {
        text: groupLabel("Reporting", "chart"),
        collapsed: false,
        items: [
          { text: "Sales", link: "/reporting/sales-report" },
          { text: "Customers", link: "/reporting/customers-report" },
          { text: "Products", link: "/reporting/product-report" },
        ],
      },

      {
        text: groupLabel("B2B Marketplace", "store"),
        collapsed: false,
        items: [
          { text: "Introduction", link: "/b2b-marketplace/introduction" },
          {
            text: "Request for Quotes",
            link: "/b2b-marketplace/request-for-quotes",
          },
          {
            text: "Buyer Seller Communication",
            link: "/b2b-marketplace/buyer-seller-communication",
          },
          {
            text: "Supplier Microsite",
            link: "/b2b-marketplace/supplier-microsite",
          },
          { text: "Buying leads", link: "/b2b-marketplace/buying-leads" },
          {
            text: "Review Management",
            link: "/b2b-marketplace/b2b-marketplace-review",
          },
        ],
      },

      {
        text: groupLabel("Multi Tenant Ecommerce", "cloud"),
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/multi-tenant-ecommerce/introduction",
          },
          {
            text: "Super Admin Management",
            link: "/multi-tenant-ecommerce/super-admin-management",
          },
          {
            text: "Tenant Management",
            link: "/multi-tenant-ecommerce/tenant-management",
          },
          {
            text: "CName Mapping",
            link: "/multi-tenant-ecommerce/cname-mapping",
          },
        ],
      },

      {
        text: groupLabel("B2B eCommerce Platform", "briefcase"),
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/b2b-ecommerce-platform/introduction",
          },
          {
            text: "Configuration",
            link: "/b2b-ecommerce-platform/configuration",
          },
          {
            text: "Company Registration",
            link: "/b2b-ecommerce-platform/company-registration",
          },
          {
            text: "Company Attributes",
            link: "/b2b-ecommerce-platform/company-attributes",
          },
          {
            text: "Role Based Permissions",
            link: "/b2b-ecommerce-platform/role-based-permissions",
          },
          {
            text: "Sales Representatives",
            link: "/b2b-ecommerce-platform/sales-representative",
          },
          {
            text: "Company Catalog",
            link: "/b2b-ecommerce-platform/company-catalog",
          },
          {
            text: "Company Credit",
            link: "/b2b-ecommerce-platform/company-credit",
          },
          {
            text: "Requisition Lists",
            link: "/b2b-ecommerce-platform/requisition-lists",
          },
          { text: "Quick Order", link: "/b2b-ecommerce-platform/quick-order" },
          {
            text: "Request for Quote",
            link: "/b2b-ecommerce-platform/request-for-quote",
          },
          {
            text: "Quotation Handling",
            link: "/b2b-ecommerce-platform/quotation-handling",
          },
          {
            text: "Purchase Orders",
            link: "/b2b-ecommerce-platform/purchase-orders",
          },
        ],
      },

      {
        text: groupLabel("Native Mobile App", "phone"),
        link: "/open-source-mobile-app/open-source-mobile-app",
      },
    ],

    outline: {
      level: "deep",
    },

    footer: {
      message:
        'Released under the <a href="https://opensource.org/licenses/mit" target="_blank" class="mit-license">MIT License</a>.',
      copyright: `Copyright © ${new Date().getFullYear()} Webkul`,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/bagisto/bagisto" },
    ],

    search: {
      provider: "local",
    },
  },

  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir;

    // Generate sitemap
    generateSitemap(outDir);

    Object.entries(redirects).forEach(([from, to]) => {
      if (from.includes("*")) {
        console.warn(`⚠️ Skipping wildcard redirect: ${from} -> ${to}`);
        return;
      }

      let filePath;

      if (from.endsWith(".html")) {
        filePath = path.join(outDir, from);
      } else {
        filePath = path.join(outDir, from, "index.html");
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, makeRedirectHtml(to), "utf-8");
      console.log(`✅ Redirect created: ${from} -> ${to}`);
    });
  },

  configResolved(config) {
    // Generate sitemap for dev server in public folder
    const publicDir = path.join(process.cwd(), "src/public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    generateSitemap(publicDir);
  },
});
