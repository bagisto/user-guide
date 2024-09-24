/* set version */
let version = '2.0';

/* version prefix setter */
function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;
            return child;
        });
    }
    return `/${version}/${children}`;
}

/* module export */
module.exports = [
    [setVersionPrefix('introduction/introductions'), 'Introduction'],

    {
        title: 'Product Types',
        path: setVersionPrefix('products'),
        collapsable: true,
        children: setVersionPrefix([
            ['products/simple', 'Simple Product'],
            ['products/configurable', 'Configurable Product'],
            ['products/virtual', 'Virtual Product'],
            ['products/bundle', 'Bundle Product'],
            ['products/grouped', 'Grouped Product'],
            ['products/downloadable', 'Downloadable Product'],
        ])
    },
    {
        title: 'Category',
        path: setVersionPrefix('category'),
        collapsable: true,
        children: setVersionPrefix([

            ['category/create-category', 'Create Category'],
        ])
    },
    {
        title: 'Attributes',
        path: setVersionPrefix('attribute'),
        collapsable: true,
        children: setVersionPrefix([
            ['attribute/product-attribute', 'Create Product Attribute'],
            ['attribute/attribute-input', 'Attribute Input Type'],
        ])
    },
        [setVersionPrefix('attribute-family/attribute-families'), 'Attribute Family'],
    {
        title: 'Orders',
        path: setVersionPrefix('orders'),
        collapsable: true,
        children: setVersionPrefix([
            ['orders/create-order', 'Orders'],
            ['orders/create-invoice', 'Invoice'],
            ['orders/create-shipment', 'Shipment'],
            ['orders/refunds', 'Refunds'],
            ['orders/transaction', 'Transactions'],
        ])
    },
    {
        title: 'Customers',
        path: setVersionPrefix('customer'),
        collapsable: true,
        children: setVersionPrefix([
            ['customer/create-customer', 'Customers'],
            ['customer/customer-groups', 'Groups'],
            ['customer/customer-reviews', 'Reviews'],
        ])
    },

        [setVersionPrefix('cms/cms-page'), 'CMS'],

    {
        title: 'Marketing',
        path: setVersionPrefix('marketing'),
        collapsable: true,
        children: setVersionPrefix([
            ['marketing/promotions', 'Promotions'],
            ['marketing/communications', 'Communications'],
            ['marketing/sitemaps', 'Sitemaps'],
        ])
    }, 
    {
        title: 'Settings',
        path: setVersionPrefix('settings'),
        collapsable: true,
        children: setVersionPrefix([
            ['settings/locale', 'Locales'],
            ['settings/currencies', 'Currencies'],
            ['settings/exchange-rates', 'Exchange Rates'],
            ['settings/inventory-source', 'Inventory Source'],
            ['settings/channels', 'Channels'],
            ['settings/users', 'Users'],
            ['settings/roles', 'Roles'],
            ['settings/themes', 'Themes'],
            ['settings/taxes', 'Taxes'],
        ])
    },

    [setVersionPrefix('configure/configurations'), 'Configure'],  
]
