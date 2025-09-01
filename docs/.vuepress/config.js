module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Bagisto User Documentation',
    description: 'Unlock the full potential of Bagisto with our detailed user guide. This step-by-step documentation is perfect for beginners, covering installation, configuration, and advanced features to help you master your eCommerce platform',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }],
        ['script', { src: 'https://bagisto.github.io/ai-chatbot/chatbot.js', async: true}]
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        docsRepo: 'bagisto/bagisto-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        logo: '/logo.png',
        nav: [
            { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
            { text: 'Community Forum', link: 'https://forums.bagisto.com/' },
            { text: 'Dev Docs', link: 'https://devdocs.bagisto.com/' }
        ],

        contactUs: { text: 'Contact Us', link: 'https://bagisto.com/en/contacts/' },

        sidebar: {
            '/2.3.0/': require('./version-configs/2.3.0'),
            '/2.2.0/': require('./version-configs/2.2.0'),
            '/2.1.0/': require('./version-configs/2.1.0'),   
            '/2.0/': require('./version-configs/2.0') 
        }
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};
