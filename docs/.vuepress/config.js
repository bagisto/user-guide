module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Bagisto Documentation',
    description: 'Bagisto Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }],
        ['script', { src: 'https://vikastiwari-webkul.github.io/ai-chatbot/chatbot.js', async: true}]
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'bagisto/bagisto',
        repoLabel: 'Contribute to Bagisto',
        docsRepo: 'bagisto/bagisto-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
            { text: 'Community Forum', link: 'https://forums.bagisto.com/' }
        ],

        contactUs: { text: 'Contact Us', link: 'https://bagisto.com/en/contacts/' },

        sidebar: {
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
