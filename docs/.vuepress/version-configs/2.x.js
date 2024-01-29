/* set version */
let version = '2.x';

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
    [setVersionPrefix('introduction/getting-started'), 'Introduction'],

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
            ['category/overview', 'Category Overview'],
            ['category/create-category', 'Create Category'],
        ])
    },
    {
        title: 'Attributes',
        path: setVersionPrefix('attribute'),
        collapsable: true,
        children: setVersionPrefix([
            ['attribute/overview', 'Attribute Overview'],
            ['attribute/product-attribute', 'Create Product Attribute'],
            ['attribute/attribute-family', 'Attribute Family'],
            ['attribute/attribute-input', 'Attribute Input Type'],
        ])
    }
]
