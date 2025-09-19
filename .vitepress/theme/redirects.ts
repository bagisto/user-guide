import { inBrowser } from 'vitepress'

export const redirects = {
  /**
   * Version 2.3 Redirects
   * 
   * Note: These redirects are for the legacy 2.3 documentation.
   */

  // Prologue
  '/2.3/prologue/upgrade-guide': '/getting-started/upgrade-guide',
  '/2.3/prologue/contribution-guide': '/getting-started/contribution-guide',

  // Introduction
  '/2.3/introduction/requirements': '/getting-started/before-you-start.html#system-requirements',
  '/2.3/introduction/installation': '/getting-started/installation',
  '/2.3/introduction/docker': '/getting-started/installation.html#🐳-docker-installation',
  '/2.3/introduction/sail': '/getting-started/installation.html#⛵-laravel-sail-installation',
  '/2.3/introduction/llms': '/getting-started/llms',

  // Architecture Concepts
  '/2.3/architecture/packages': '/architecture/backend',
  '/2.3/architecture/frontend': '/architecture/frontend',
  '/2.3/architecture/theme': '/architecture/frontend',
  '/2.3/architecture/repository-pattern': '/architecture/backend.html#repository-pattern-in-bagisto',
  '/2.3/architecture/modular-design': '/architecture/backend.html#modular-design-in-bagisto',

  // Package Development
  '/2.3/packages/create-package': '/package-development/getting-started',
  '/2.3/packages/create-migrations': '/package-development/migrations',
  '/2.3/packages/create-models': '/package-development/models',
  '/2.3/packages/store-data-through-repositories': '/package-development/repositories',
  '/2.3/packages/routes': '/package-development/routes',
  '/2.3/packages/controllers': '/package-development/controllers',
  '/2.3/packages/views': '/package-development/views',
  '/2.3/packages/localization': '/package-development/localization',
  '/2.3/packages/blade-components': '/theme-development/blade-components',
  '/2.3/packages/layouts': '/theme-development/understanding-layouts',
  '/2.3/packages/bundling-assets': '/theme-development/vite-powered-theme-assets',
  '/2.3/packages/add-menu-in-admin': '/package-development/menu',
  '/2.3/packages/validation': '/theme-development/validation',
  '/2.3/packages/datagrid': '/package-development/datagrid',
  '/2.3/packages/create-acl': '/package-development/access-control-list',
  '/2.3/packages/create-system-configuration': '/package-development/system-configuration',

  // Digging Deeper
  '/2.3/advanced/create-shipping-method': '/shipping-method-development/create-your-first-shipping-method',
  '/2.3/advanced/create-payment-method': '/payment-method-development/create-your-first-payment-method',
  '/2.3/advanced/create-product-type': '/product-type-development/create-your-first-product-type',
  '/2.3/advanced/events': '/advanced/event-listeners',
  '/2.3/advanced/helpers': '/advanced/understanding-core-class',
  '/2.3/advanced/override-core-model': '/package-development/models.html#overriding-core-models-optional',
  '/2.3/advanced/render-event': '/advanced/view-render-events',
  '/2.3/advanced/change-email-template.md': '/theme-development/email-template',
  '/2.3/advanced/indexing-products-to-elasticsearch.md': '/performance/configure-elasticsearch',
  '/2.3/advanced/security-practice': '/getting-started/best-security-practice',
  '/2.3/advanced/create-data-import': '/advanced/understanding-data-transfer',

  // Themes
  '/2.3/themes/create-store-theme': '/theme-development/creating-store-theme',
  '/2.3/themes/create-admin-theme': '/theme-development/creating-admin-theme',
  '/2.3/themes/custom-theme-package': '/theme-development/creating-custom-theme-package',

  // Performance
  '/2.3/performance/indexing': '/advanced/understanding-indexers',
  '/2.3/performance/fpc': '/performance/configure-fpc',
  '/2.3/performance/octane': '/performance/configure-laravel-octane',
  '/2.3/performance/loadbalancing': '/performance/configure-load-balancing',

  // Bagisto APIs
  '/2.3/api/rest-api': '/api/rest-api',
  '/2.3/api/graphql-api': '/api/graphql-api',

  /**
   * Version 2.2 Redirects
   * 
   * Note: These redirects are for the legacy 2.2 documentation.
   */

  // Prologue
  '/2.2/prologue/upgrade-guide': '/getting-started/upgrade-guide',
  '/2.2/prologue/contribution-guide': '/getting-started/contribution-guide',

  // Introduction
  '/2.2/introduction/requirements': '/getting-started/before-you-start.html#system-requirements',
  '/2.2/introduction/installation': '/getting-started/installation',
  '/2.2/introduction/docker': '/getting-started/installation.html#🐳-docker-installation',

  // Architecture Concepts
  '/2.2/architecture/packages': '/architecture/backend',
  '/2.2/architecture/frontend': '/architecture/frontend',
  '/2.2/architecture/theme': '/architecture/frontend',
  '/2.2/architecture/repository-pattern': '/architecture/backend.html#repository-pattern-in-bagisto',
  '/2.2/architecture/modular-design': '/architecture/backend.html#modular-design-in-bagisto',

  // Package Development  
  '/2.2/packages/create-package': '/package-development/getting-started',
  '/2.2/packages/create-migrations': '/package-development/migrations',
  '/2.2/packages/create-models': '/package-development/models',
  '/2.2/packages/store-data-through-repositories': '/package-development/repositories',
  '/2.2/packages/routes': '/package-development/routes',
  '/2.2/packages/controllers': '/package-development/controllers',
  '/2.2/packages/views': '/package-development/views',
  '/2.2/packages/localization': '/package-development/localization',
  '/2.2/packages/blade-components': '/theme-development/blade-components',
  '/2.2/packages/layouts': '/theme-development/understanding-layouts',
  '/2.2/packages/bundling-assets': '/theme-development/vite-powered-theme-assets',
  '/2.2/packages/add-menu-in-admin': '/package-development/menu',
  '/2.2/packages/validation': '/theme-development/validation',
  '/2.2/packages/datagrid': '/package-development/datagrid',
  '/2.2/packages/create-acl': '/package-development/access-control-list',
  '/2.2/packages/create-system-configuration': '/package-development/system-configuration',

  // Digging Deeper
  '/2.2/advanced/create-shipping-method': '/shipping-method-development/create-your-first-shipping-method',
  '/2.2/advanced/create-payment-method': '/payment-method-development/create-your-first-payment-method',
  '/2.2/advanced/create-product-type': '/product-type-development/create-your-first-product-type',
  '/2.2/advanced/events': '/advanced/event-listeners',
  '/2.2/advanced/helpers': '/advanced/understanding-core-class',
  '/2.2/advanced/override-core-model': '/package-development/models.html#overriding-core-models-optional',
  '/2.2/advanced/render-event': '/advanced/view-render-events',
  '/2.2/advanced/change-email-template.md': '/theme-development/email-template',
  '/2.2/advanced/indexing-products-to-elasticsearch.md': '/performance/configure-elasticsearch',
  '/2.2/advanced/security-practice': '/getting-started/best-security-practice',
  '/2.2/advanced/create-data-import': '/advanced/understanding-data-transfer',

  // Themes
  '/2.2/themes/create-store-theme': '/theme-development/creating-store-theme',
  '/2.2/themes/create-admin-theme': '/theme-development/creating-admin-theme',

  // Performance
  '/2.2/performance/indexing': '/advanced/understanding-indexers',
  '/2.2/performance/fpc': '/performance/configure-fpc',
  '/2.2/performance/octane': '/performance/configure-laravel-octane',
  '/2.2/performance/loadbalancing': '/performance/configure-load-balancing',

  // Bagisto APIs
  '/2.2/api/rest-api': '/api/rest-api',
  '/2.2/api/graphql-api': '/api/graphql-api',

  /**
   * Version 2.1 Redirects
   * 
   * Note: These redirects are for the legacy 2.1 documentation.
   */

  // Prologue
  '/2.1/prologue/upgrade-guide': '/getting-started/upgrade-guide',
  '/2.1/prologue/contribution-guide': '/getting-started/contribution-guide',

  // Introduction
  '/2.1/introduction/requirements': '/getting-started/before-you-start.html#system-requirements',
  '/2.1/introduction/installation': '/getting-started/installation',
  '/2.1/introduction/docker': '/getting-started/installation.html#🐳-docker-installation',

  // Architecture Concepts
  '/2.1/architecture/packages': '/architecture/backend',
  '/2.1/architecture/frontend': '/architecture/frontend',
  '/2.1/architecture/theme': '/architecture/frontend',
  '/2.1/architecture/repository-pattern': '/architecture/backend.html#repository-pattern-in-bagisto',
  '/2.1/architecture/modular-design': '/architecture/backend.html#modular-design-in-bagisto',

  // Package Development
  '/2.1/packages/create-package': '/package-development/getting-started',
  '/2.1/packages/create-migrations': '/package-development/migrations',
  '/2.1/packages/create-models': '/package-development/models',
  '/2.1/packages/store-data-through-repositories': '/package-development/repositories',
  '/2.1/packages/routes': '/package-development/routes',
  '/2.1/packages/controllers': '/package-development/controllers',
  '/2.1/packages/views': '/package-development/views',
  '/2.1/packages/localization': '/package-development/localization',
  '/2.1/packages/blade-components': '/theme-development/blade-components',
  '/2.1/packages/layouts': '/theme-development/understanding-layouts',
  '/2.1/packages/bundling-assets': '/theme-development/vite-powered-theme-assets',
  '/2.1/packages/add-menu-in-admin': '/package-development/menu',
  '/2.1/packages/validation': '/theme-development/validation',
  '/2.1/packages/datagrid': '/package-development/datagrid',
  '/2.1/packages/create-acl': '/package-development/access-control-list',
  '/2.1/packages/create-system-configuration': '/package-development/system-configuration',

  // Digging Deeper
  '/2.1/advanced/create-shipping-method': '/shipping-method-development/create-your-first-shipping-method',
  '/2.1/advanced/create-payment-method': '/payment-method-development/create-your-first-payment-method',
  '/2.1/advanced/create-product-type': '/product-type-development/create-your-first-product-type',
  '/2.1/advanced/events': '/advanced/event-listeners',
  '/2.1/advanced/helpers': '/advanced/understanding-core-class',
  '/2.1/advanced/override-core-model': '/package-development/models.html#overriding-core-models-optional',
  '/2.1/advanced/render-event': '/advanced/view-render-events',
  '/2.1/advanced/change-email-template.md': '/theme-development/email-template',
  '/2.1/advanced/indexing-products-to-elasticsearch.md': '/performance/configure-elasticsearch',
  '/2.1/advanced/security-practice': '/getting-started/best-security-practice',
  '/2.1/advanced/create-data-import': '/advanced/understanding-data-transfer',

  // Themes
  '/2.1/themes/create-store-theme': '/theme-development/creating-store-theme',
  '/2.1/themes/create-admin-theme': '/theme-development/creating-admin-theme',

  // Performance
  '/2.1/performance/indexing': '/advanced/understanding-indexers',
  '/2.1/performance/fpc': '/performance/configure-fpc',
  '/2.1/performance/octane': '/performance/configure-laravel-octane',
  '/2.1/performance/loadbalancing': '/performance/configure-load-balancing',

  // Bagisto APIs
  '/2.1/api/getting-started-with-the-api': '/api/rest-api',

  /**
   * Version 2.0 Redirects
   * 
   * Note: These redirects are for the legacy 2.0 documentation.
   */

  // Prologue
  '/2.0/prologue/upgrade-guide': '/getting-started/upgrade-guide',
  '/2.0/prologue/contribution-guide': '/getting-started/contribution-guide',

  // Introduction
  '/2.0/introduction/requirements': '/getting-started/before-you-start.html#system-requirements',
  '/2.0/introduction/installation': '/getting-started/installation',
  '/2.0/introduction/docker': '/getting-started/installation.html#🐳-docker-installation',

  // Architecture Concepts
  '/2.0/architecture/packages': '/architecture/backend',
  '/2.0/architecture/frontend': '/architecture/frontend',
  '/2.0/architecture/theme': '/architecture/frontend',
  '/2.0/architecture/repository-pattern': '/architecture/backend.html#repository-pattern-in-bagisto',
  '/2.0/architecture/modular-design': '/architecture/backend.html#modular-design-in-bagisto',

  // Package Development
  '/2.0/packages/create-package': '/package-development/getting-started',
  '/2.0/packages/create-migrations': '/package-development/migrations',
  '/2.0/packages/create-models': '/package-development/models',
  '/2.0/packages/store-data-through-repositories': '/package-development/repositories',
  '/2.0/packages/routes': '/package-development/routes',
  '/2.0/packages/controllers': '/package-development/controllers',
  '/2.0/packages/views': '/package-development/views',
  '/2.0/packages/localization': '/package-development/localization',
  '/2.0/packages/blade-components': '/theme-development/blade-components',
  '/2.0/packages/layouts': '/theme-development/understanding-layouts',
  '/2.0/packages/bundling-assets': '/theme-development/vite-powered-theme-assets',
  '/2.0/packages/add-menu-in-admin': '/package-development/menu',
  '/2.0/packages/validation': '/theme-development/validation',
  '/2.0/packages/datagrid': '/package-development/datagrid',
  '/2.0/packages/create-acl': '/package-development/access-control-list',
  '/2.0/packages/create-system-configuration': '/package-development/system-configuration',

  // Digging Deeper
  '/2.0/advanced/create-shipping-method': '/shipping-method-development/create-your-first-shipping-method',
  '/2.0/advanced/create-payment-method': '/payment-method-development/create-your-first-payment-method',
  '/2.0/advanced/create-product-type': '/product-type-development/create-your-first-product-type',
  '/2.0/advanced/events': '/advanced/event-listeners',
  '/2.0/advanced/helpers': '/advanced/understanding-core-class',
  '/2.0/advanced/override-core-model': '/package-development/models.html#overriding-core-models-optional',
  '/2.0/advanced/render-event': '/advanced/view-render-events',
  '/2.0/advanced/change-email-template.md': '/theme-development/email-template',
  '/2.0/advanced/indexing-products-to-elasticsearch.md': '/performance/configure-elasticsearch',
  '/2.0/advanced/security-practice': '/getting-started/best-security-practice',
  '/2.0/advanced/create-data-import': '/advanced/understanding-data-transfer',

  // Themes
  '/2.0/themes/create-store-theme': '/theme-development/creating-store-theme',
  '/2.0/themes/create-admin-theme': '/theme-development/creating-admin-theme',

  // Performance
  '/2.0/performance/indexing': '/advanced/understanding-indexers',
  '/2.0/performance/fpc': '/performance/configure-fpc',
  '/2.0/performance/octane': '/performance/configure-laravel-octane',
  '/2.0/performance/loadbalancing': '/performance/configure-load-balancing',

  // Bagisto APIs
  '/2.0/api/getting-started-with-the-api': '/api/rest-api',

  /**
   * Version 2.x Redirects
   * 
   * Note: These redirects are for the legacy 2.x documentation.
   */

  // Prologue
  '/2.x/prologue/upgrade-guide': '/getting-started/upgrade-guide',
  '/2.x/prologue/contribution-guide': '/getting-started/contribution-guide',

  // Introduction
  '/2.x/introduction/requirements': '/getting-started/before-you-start.html#system-requirements',
  '/2.x/introduction/installation': '/getting-started/installation',
  '/2.x/introduction/docker': '/getting-started/installation.html#🐳-docker-installation',

  // Architecture Concepts
  '/2.x/architecture/packages': '/architecture/backend',
  '/2.x/architecture/frontend': '/architecture/frontend',
  '/2.x/architecture/theme': '/architecture/frontend',
  '/2.x/architecture/performance': '/performance/introduction',
  '/2.x/architecture/repository-pattern': '/architecture/backend.html#repository-pattern-in-bagisto',
  '/2.x/architecture/modular-design': '/architecture/backend.html#modular-design-in-bagisto',

  // Package Development
  '/2.x/packages/create-package': '/package-development/getting-started',
  '/2.x/packages/create-migrations': '/package-development/migrations',
  '/2.x/packages/create-models': '/package-development/models',
  '/2.x/packages/store-data-through-repositories': '/package-development/repositories',
  '/2.x/packages/routes': '/package-development/routes',
  '/2.x/packages/controllers': '/package-development/controllers',
  '/2.x/packages/views': '/package-development/views',
  '/2.x/packages/localization': '/package-development/localization',
  '/2.x/packages/blade-components': '/theme-development/blade-components',
  '/2.x/packages/layouts': '/theme-development/understanding-layouts',
  '/2.x/packages/bundling-assets': '/theme-development/vite-powered-theme-assets',
  '/2.x/packages/add-menu-in-admin': '/package-development/menu',
  '/2.x/packages/validation': '/theme-development/validation',
  '/2.x/packages/datagrid': '/package-development/datagrid',
  '/2.x/packages/create-acl': '/package-development/access-control-list',
  '/2.x/packages/create-system-configuration': '/package-development/system-configuration',

  // Digging Deeper
  '/2.x/advanced/create-shipping-method': '/shipping-method-development/create-your-first-shipping-method',
  '/2.x/advanced/create-payment-method': '/payment-method-development/create-your-first-payment-method',
  '/2.x/advanced/create-product-type': '/product-type-development/create-your-first-product-type',
  '/2.x/advanced/events': '/advanced/event-listeners',
  '/2.x/advanced/helpers': '/advanced/understanding-core-class',
  '/2.x/advanced/override-core-model': '/package-development/models.html#overriding-core-models-optional',
  '/2.x/advanced/render-event': '/advanced/view-render-events',
  '/2.x/advanced/change-email-template.md': '/theme-development/email-template',
  '/2.x/advanced/indexing-products-to-elasticsearch.md': '/performance/configure-elasticsearch',
  '/2.x/advanced/security-practice': '/getting-started/best-security-practice',
  '/2.x/advanced/create-data-import': '/advanced/understanding-data-transfer',

  // Themes
  '/2.x/themes/create-store-theme': '/theme-development/creating-store-theme',
  '/2.x/themes/create-admin-theme': '/theme-development/creating-admin-theme',

  // Bagisto APIs
  '/2.x/api/getting-started-with-the-api': '/api/rest-api',

  /**
   * Version 1.5.x Redirects
   * 
   * Note: These redirects are for the legacy 1.5.x documentation.
   */

  // Prologue
  '/1.5.x/prologue/upgrade-guide': '/getting-started/upgrade-guide',
  '/1.5.x/prologue/contribution-guide': '/getting-started/contribution-guide',

  // Introduction
  '/1.5.x/introduction/requirements': '/getting-started/before-you-start.html#system-requirements',
  '/1.5.x/introduction/installation': '/getting-started/installation',
  '/1.5.x/introduction/docker': '/getting-started/installation.html#🐳-docker-installation',

  // Architecture Concepts
  '/1.5.x/architecture/packages': '/architecture/backend',
  '/1.5.x/architecture/frontend': '/architecture/frontend',
  '/1.5.x/architecture/theme': '/architecture/frontend',
  '/1.5.x/architecture/performance': '/performance/introduction',
  '/1.5.x/architecture/repository-pattern': '/architecture/backend.html#repository-pattern-in-bagisto',
  '/1.5.x/architecture/modular-design': '/architecture/backend.html#modular-design-in-bagisto',

  // Package Development
  '/1.5.x/packages/create-package': '/package-development/getting-started',
  '/1.5.x/packages/create-migrations': '/package-development/migrations',
  '/1.5.x/packages/create-models': '/package-development/models',
  '/1.5.x/packages/store-data-through-repositories': '/package-development/repositories',
  '/1.5.x/packages/routes': '/package-development/routes',
  '/1.5.x/packages/controllers': '/package-development/controllers',
  '/1.5.x/packages/views': '/package-development/views',
  '/1.5.x/packages/localization': '/package-development/localization',
  '/1.5.x/packages/layouts': '/theme-development/understanding-layouts',
  '/1.5.x/packages/assets': '/theme-development/vite-powered-theme-assets',
  '/1.5.x/packages/add-menu-in-admin': '/package-development/menu',
  '/1.5.x/packages/customize-hompepage-menu.md': '/package-development/menu',
  '/1.5.x/packages/validation': '/theme-development/validation',
  '/1.5.x/packages/datagrid': '/package-development/datagrid',
  '/1.5.x/packages/create-acl': '/package-development/access-control-list',
  '/1.5.x/packages/create-system-configuration': '/package-development/system-configuration',

  // Digging Deeper
  '/1.5.x/advanced/create-shipping-method': '/shipping-method-development/create-your-first-shipping-method',
  '/1.5.x/advanced/create-payment-method': '/payment-method-development/create-your-first-payment-method',
  '/1.5.x/advanced/create-product-type': '/product-type-development/create-your-first-product-type',
  '/1.5.x/advanced/events': '/advanced/event-listeners',
  '/1.5.x/advanced/helpers': '/advanced/understanding-core-class',
  '/1.5.x/advanced/override-core-model': '/package-development/models.html#overriding-core-models-optional',
  '/1.5.x/advanced/render-event': '/advanced/view-render-events',
  '/1.5.x/advanced/change-email-template.md': '/theme-development/email-template',
  '/1.5.x/advanced/indexing-products-to-elasticsearch.md': '/performance/configure-elasticsearch',
  '/1.5.x/advanced/security-practice': '/getting-started/best-security-practice',

  // Themes
  '/1.5.x/themes/create-store-theme': '/theme-development/creating-store-theme',
  '/1.5.x/themes/create-admin-theme': '/theme-development/creating-admin-theme',
  '/1.5.x/themes/notification': '/advanced/event-listeners',
  '/1.5.x/themes/integrate-image-search-in-theme': '/theme-development/creating-store-theme',

  /**
   * Version 1.x Redirects
   * 
   * Note: These redirects are for the legacy 1.x documentation.
   */

  // Introduction
  '/1.x/introduction/requirements': '/getting-started/before-you-start.html#system-requirements',
  '/1.x/introduction/installation': '/getting-started/installation',
  '/1.x/introduction/upgrade-to-latest-bagisto': '/getting-started/upgrade-guide',
  '/1.x/introduction/docker': '/getting-started/installation.html#🐳-docker-installation',

  // Package Development
  '/1.x/packages/create-package': '/package-development/getting-started',
  '/1.x/packages/create-migrations': '/package-development/migrations',
  '/1.x/packages/add-menu-in-admin': '/package-development/menu',
  '/1.x/packages/create-acl': '/package-development/access-control-list',
  '/1.x/packages/create-system-configuration': '/package-development/system-configuration',
  '/1.x/packages/create-models': '/package-development/models',
  '/1.x/packages/store-data-through-repositories': '/package-development/repositories',

  // Advanced Topics
  '/1.x/advanced/create-shipping-method': '/shipping-method-development/create-your-first-shipping-method',
  '/1.x/advanced/create-payment-method': '/payment-method-development/create-your-first-payment-method',
  '/1.x/advanced/create-product-type': '/product-type-development/create-your-first-product-type',
  '/1.x/advanced/datagrid': '/package-development/datagrid',
  '/1.x/advanced/events': '/advanced/event-listeners',
  '/1.x/advanced/helpers': '/advanced/understanding-core-class',
  '/1.x/advanced/override-core-model': '/package-development/models.html#overriding-core-models-optional',
  '/1.x/advanced/render-event': '/advanced/view-render-events',
  '/1.x/advanced/indexing-products-to-elasticsearch.md': '/performance/configure-elasticsearch',
  '/1.x/advanced/security-practice': '/getting-started/best-security-practice',

  // Themes
  '/1.x/themes/tracer': '/theme-development/getting-started',
  '/1.x/themes/create-store-theme': '/theme-development/creating-store-theme',
  '/1.x/themes/create-admin-theme': '/theme-development/creating-admin-theme',
  '/1.x/themes/change-email-template.md': '/theme-development/email-template',
  '/1.x/themes/customize-hompepage-menu.md': '/package-development/menu',
  '/1.x/themes/integrate-image-search-in-theme': '/theme-development/creating-store-theme',

  // Admin Theme
  '/1.x/admin-theme/notification': '/advanced/event-listeners',

  // Translations
  '/1.x/translations/translation-based-on-locale': '/package-development/localization',
  '/1.x/translations/change-the-language-of-error-validations-on-your-store': '/package-development/localization',

  // User Guides
  '/1.x/user-guides/tax-rates': '/getting-started/before-you-start',
  '/1.x/user-guides/cart-rule': '/getting-started/before-you-start',
  '/1.x/user-guides/social-auth': '/getting-started/before-you-start',

  // Bagisto Web API
  '/1.x/api/getting-started-with-the-api': '/api/rest-api',
  '/1.x/api/customers': '/api/rest-api',
  '/1.x/api/locales': '/api/rest-api',
  '/1.x/api/addresses': '/api/rest-api',
  '/1.x/api/products': '/api/rest-api',
  '/1.x/api/categories': '/api/rest-api',
  '/1.x/api/attributes': '/api/rest-api',
  '/1.x/api/attribute-families': '/api/rest-api',
  '/1.x/api/cart': '/api/rest-api',
  '/1.x/api/orders': '/api/rest-api',
  '/1.x/api/invoices': '/api/rest-api',
  '/1.x/api/shipments': '/api/rest-api',
  '/1.x/api/transactions': '/api/rest-api',
  '/1.x/api/reviews': '/api/rest-api',
  '/1.x/api/wishlists': '/api/rest-api',

  // Bagisto GraphQL Admin API
  '/1.x/graphql-admin-api/installation': '/api/graphql-api',
  '/1.x/graphql-admin-api/getting-started-with-the-api.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/settings.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/cms.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/velocity.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/customers.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/promotions.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/products.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/categories.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/attributes.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/attribute-groups.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/attribute-families.md': '/api/graphql-api',
  '/1.x/graphql-admin-api/sales.md': '/api/graphql-api',

  // Bagisto GraphQL Shop API
  '/1.x/graphql-shop-api/getting-started-with-the-api.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/addresses.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/orders.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/reviews.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/wishlists.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/compare.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/downloadable-links.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/cart.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/checkout.md': '/api/graphql-api',
  '/1.x/graphql-shop-api/homepage.md': '/api/graphql-api',
}

export function setupRedirects(router: any) {
  if (!inBrowser) return

  // Check for redirects on route changes and initial load
  const checkRedirect = (path: string) => {
    const cleanPath = path.replace(/\.html$/i, '').replace(/\/$/, '') || '/'
    const redirectTo = redirects[cleanPath] || redirects[cleanPath + '/']

    if (redirectTo) {
      console.log(`Redirect triggered: ${cleanPath} → ${redirectTo}`)
      router.go(redirectTo)
      return true
    }
    return false
  }

  // Handle initial page load
  if (window.location) {
    checkRedirect(window.location.pathname)
  }

  // Handle route changes (if supported)
  if (router.onBeforeRouteChange) {
    const originalHandler = router.onBeforeRouteChange
    router.onBeforeRouteChange = (to: string) => {
      if (checkRedirect(to)) {
        return false
      }
      return originalHandler ? originalHandler(to) : true
    }
  }
}
