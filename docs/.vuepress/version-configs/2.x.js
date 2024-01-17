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
    {
        title: 'Introduction',
        path: setVersionPrefix('introduction'),
        collapsable: true,
        children: setVersionPrefix([   
            ['introduction/bagisto', 'Getting Started'],
        ])
    }, 
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
    }
]
