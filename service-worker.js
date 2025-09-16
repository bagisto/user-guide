/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2.0/attribute-family/attribute-families.html",
    "revision": "3e60a69982f7ec9041215ca45dcdbe84"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "bd382b3b685535dbe3db847a0dd2e424"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "a914e5a3095c36f8c189361e74f61cb7"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "bd45c792330626e8c6d1120a6a85a527"
  },
  {
    "url": "2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "b2812f652f49a86b30cb4f95fae96e25"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "d6ce35e2e55400b6269ecd496efd4d3f"
  },
  {
    "url": "2.0/b2b-marketplace/buying-leads.html",
    "revision": "906a3fdcc1dc15a02a1f44f432f405c0"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "18506d844d9364e5d4d2238175776969"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "0c48f4321b9a2175b3787bd5731f7113"
  },
  {
    "url": "2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "1737ee637f8b2785c9a08fdc80dfb5a8"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "77aeb6012d7f9163d83557fa891dd8f4"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "3bc21d60d7d7cfa5b44d57de74ba278b"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "63f15edb3e70137c9853074c3a52c52a"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "77b04b55cc9284aa7f28a77e86d59cab"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "d53d5c41e9c0f2525225dbe35f98479e"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "1824adf66f91a2053555133eea8b566a"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "17bc743ee768d611857a9dbfb8e157ad"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "ebb903a983d9e9fd0a3f4b2d786a2e24"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "3efc2b4648bd76e3598e8d5b657edbb1"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "4b8d9fd6608e1cf0df5647505a395d45"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "03079466c716b7ab441632adb2424dd4"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "a4ca481423f2739dbc192b6bc87aeaec"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "61ac1d800b2eabee537796964882edf1"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "c057361439cec90073aec5f6b590217e"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "fdfbda9cc0c152a43ee057c3a4e7cbdf"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "b3d6ffbda9aa852aaf918ae68d93a222"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "e256d30c92ccb019f21274556de15c8c"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "aead4ab609fffae7e1fcac404acc7ad8"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "0a843a93cfefffe23fd77b131327472a"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "b87b8972ebd28ef0da050d22983cb199"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "3128aad94f997531081215410c2a3313"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "dc4a2e44fa3248027d8aa906dc76de7b"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "8e0f9366f9592e1f42cb80bd55e45535"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "071535b8a0be77668ebca556c06ff05e"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "9dc1a75d16f2181bc4e79bde3556bbbb"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "8334d733c5c1715d30ce9a63d91af521"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "85b01b5f4b9915acf2b4abe9d82929b1"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "912a4ba7f45bb752cc4914c4a1489259"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "4bd831e2d7936bd1b7df06bfb74f2e88"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "2dcae3cc0c71719b9129a135d6fdfdec"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "96fcec505703966c799edeb879fcfb50"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "222447296a57f966d56a3df83340dcd0"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "57d5182a00f71b0851b8264d5e292b2d"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "fce97deb42ac908af6539b4f377ae493"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "18cad1f646bde9d7c5d2f5498945ee66"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "1a535a584ba743bfb0d5065a06e67b18"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "0c3228aa5b44b981a4e3832cb19f25db"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "46ad6f06b68b3845411b98050df26567"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "19bccd876a922670d210f1b63c5cc266"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "2ec6988a55aeabed55083f5dba5978f9"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "3a2c49046371623e138603e7aa686348"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "24d3642dc4c1c0882949bf693a6f2496"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "62adfb4324485a616a99a2b995b01261"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "63e33d3b4f2ca841fbd491fefdd85bcc"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "34b60efb04aa3aab4aae531e39fc68ef"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "27210982f4280ecae445030400c90b20"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "66d32c80f7ab5230343099be5d870646"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "13dbe0b073713d452a0b257b17cf5ce3"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "5b283b4c86928086f1f7ba0d5bdb0833"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "e06c83d848479e4c6e6c94c78d5b76e2"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "6da5d5d38a57d9cb4950fcacfdc0e176"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "d3d9ea7ff3d184b3ed41d183c14c4bd0"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "21998248016cfb3b00a473a7a1533002"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "04ef300ca5743848fff3d7f332259280"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "90052e28b6fe8030497ccd235e8e8cf8"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "848763340c7c1899a86ed65eb653cce4"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "08054dd0e693df13483a75076b2ce958"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "7a95657722215b13851939bb77267e18"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "a0ed33b41f2d802f3b1cbbb97a9581ff"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "3a5beea736b41ecf724e47a258bfc5fd"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "a9c99357c04a2a94eee7578d97413901"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "71caab9137cbe90a77fea167dfa177b7"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "2b9e72b7ad1b75e8b92142eb16180371"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "ec87659e524a4644a2413dc75faf1067"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "84b89993a87b9f00e53d577489445d62"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "db9971263def14a11883e8aab7cb81c8"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "0ed39ccb5644b6ff558dab2b1a1a998f"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "a8065ee691561a6c09ca2cde481e7cce"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "6439381492381773da900945951cd7e4"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "4198e4f16d6792894483f5dfa86de5e9"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "bf6b35c7e3abdc894abba1e1064a1669"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "86f9d1c3907cbeb5a3404d7e4d99bedd"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "73c8458ff2ae2c3d087b745f09e1a1d9"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "2819ca1fd1a7df5288e759e7f33de02a"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "9738bd40045162d9b63806658449d794"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "f52d3a54ff5618666de11410a5e37c43"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "59e121f69359aecf61b7255aba544e1e"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "ffe6e6645fd4ec0b19dadcf4cbfc4bbb"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "fc8726c06552963d88d2edb4ef5c8023"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "60ab907d08c72f5a720bc862d71e3790"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "06981c715b0bc38fd84aecf80580680f"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "accf7a9bb26bcc4f4a7b97bcd9235772"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "86f5e05a3aefc91e0ef1b95725733e6a"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "94e4121e54ead2910fadab04910043fe"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "bc475d2e5e68da343aa699153e83c4c1"
  },
  {
    "url": "2.1.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "d941b49ec0fbbd2d1b4306bd2199d353"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "6b4a119c3020d6c355f3821cb18c4ae8"
  },
  {
    "url": "2.1.0/b2b-marketplace/buying-leads.html",
    "revision": "3b5d7373debd26a7987b7e771a0e333b"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "d50f905960775da2eefb409d1c3a2840"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "28ea96b2d28d21522f523b0cfd469e32"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier-microsite.html",
    "revision": "a0b9e157a43ce3c3adcbae9bb7a34ec4"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "0d62140c18baba61ee18208d171284e8"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "55d5a273c951f4544879ae5207fbb709"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "e5c16125806e019b65b376d0a3b5e389"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "9fc807026ab303ea25ce6bbbea759ac2"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "41a8c2ddc517d2a5d28862072ebf10a3"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "36f6af4a01606638061c5ddee6d88634"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "f82cdecc87e41edd48cc90f0c7aba171"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "cde927daeb0f0699bfe45823de581ddd"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "620736f59e0968165a4ec58fa28bf242"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "0ebaa14b643f9e5dc088dd667651b3e5"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "1472046be0b1a84afff6b139c77f2422"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "adc60724a796846cde9b87bf694b1c49"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "58ba218fa97b1fea8c3dc426a2b8cf3e"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "87679fdeef8f616f898577f53b8dff4d"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "862521076221725343347a498e56bd66"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "48e0e08779cce38c71a6c0394ffd9461"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "cce3c3df2fe50dbdde45b8b585d13358"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "3afc646c934a48016a3515f7a7ed5e2e"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "e80ceea17728e8c7eecbc0b071af5b77"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "e041639076149e8b033e0ecc0ca48419"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "96bf911cb07b7f938a24b08dac50a1bf"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "199c9628c6e7e409d3d5ff0591980500"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "0a4f57a242f0b3502202bded6a3b4cfb"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "94b787638fac971f0ebbfb79510e21b0"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "eb85089769cce384860b4d0f9f7621f5"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "81c430aaa21f42d531ee5ba0f954e79a"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "4bb5870f87af83917eecb7d62560aab5"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "d812a4373870bad4b8e133fb6b7db19c"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "e39b148af2c2545b04ee5a9f080811d2"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "f4491b2da61b798a4afac2faf11fb1d4"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "53774e74de169d139db7e2a735776e35"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "aa8f0a0680e4097707a8b851aad718c5"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "ebe1f8bd5eaa7cbdad9117e369a259de"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "a6393a8d0f8d952b9a120103f93bd35f"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "4945be65eacb3b09b099f81f6c8d53f6"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "e004f61783f58bbe3a949ae463cd1817"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "aa6f7ae436c82d57e086e3a00694e8ff"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "46c1a3de7b43a9c3ff6520b2f171c406"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "9918b6ce3574b7df35a9757157f8a171"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "7395dc8ff6a439deb5eea1c610480172"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "9134a737ef2d9b89cf8d187ac54d1219"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "6f14c285732aa8a93cb013d75b19adc3"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "7731e3942320ad713a0f9a45b05c8e45"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "9804cb9abf1ce9ad0df398263188a7db"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "a06ae0a6932d3cbec6f84fbf94a3b6cd"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "4d99b2340d9da5f82c12abe68bc93e46"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "1e98d2e430fc1b0dd7a49a7cb0a9a845"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "b710653dc454acea1bac0fdde33143ca"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "874c26c78ba6637a2bb0bea56e42db66"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "6b46bc16a965c7c5b6c1e9b1b4cb45b2"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "9835efdbf9dd8c915fb81a75c45a6c9b"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "eb7fd0a565f0fc44c44ac149ba2a93fd"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "cadd6fe23f0aed757adb47bdfb50dfa8"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "ac87aef8792e6fe8de1f2d7f8cd7ad49"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "8015c5ffc0a6a39d34a87442c9a3b991"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "d96cd2bc4b38b947f190756cc7c896ca"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "4223bb67d62bed2cf3d485baf4539a84"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "b9dd3d5401f8a3dc9cd7ca3a083e0b26"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "3f282da125a031a65abf1014f58b4fa9"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "704c84116fd44a0b4c8aab44b1f69fbd"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "60fd3d50ec39acdedf5d61fabd8f28bf"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "f56ad007af43321607e64eba5b95ddf0"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "74cb80c240d59ec135010cee1f84e3ff"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "5e0dc40f6e5bfa56c1032e6398eeb8fe"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "f8ec4b9eaed395134cfb2ac454dc3422"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "b7b6b6aef694d63f122ebd6876413a68"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "0705bda4a04b5a15c132a9e80990e323"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "0e51bf00c5f75f45f83ec7ad2996ba3f"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "36db500b084ef665d45370100617f30f"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "2149c80c047045bb3c4752d42f05032d"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "352c2d30ad2178a9f5cc314cb15c40f9"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "8e103f18f3dd311a7b5a80cec79cc00a"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "82c33be126d95021b300d3f610ad193b"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "2991ede17ef6edde67ae4317d006d12b"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "b3da1cc282bb9b1984390b7be28efb99"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "609313da5d5b756cdf1d3d7d367a2402"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "c7a28d7adce15a1c90986086c8d79bf3"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "049457fd86c34f742cb060e0ca33b02a"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "49d8f0f1677a09f8d3978cc6bca4599f"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "aa2675abd5b5d94679bbca57a7bfce04"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "c24c021e38b24f043c95ce3f2020fe2f"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "bb66a21bf55383ebf67f1fb19a852063"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "dff050cf54dec5112b38100fff970137"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "11268d9df11a73ff31ba2eb06c1af6ad"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "0a2366f3bda07bd9958bd2e9f86f7115"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "80a9ca492d87a712d8c81a9ed10dbaeb"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "47efdc01c7c71df467d68f5325c5fe36"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "89962b248fad7a3ac0956b87186f1a17"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "b9c0906105c963db976153cf0e95eee7"
  },
  {
    "url": "2.2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "bb8dd9b20661653a2bb1bf795adc70c8"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "8b5339ed331379876df839e5d059a8ea"
  },
  {
    "url": "2.2.0/b2b-marketplace/buying-leads.html",
    "revision": "2ffbc5e9f584c56f87d1a2bf1f2787f0"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "001e85169d31f0948aceb67225a3c489"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "e4e3b5d3f5d68c6fcae17171caace7de"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "298dd8ed32c7c0227e6eee6de3e390f8"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "a9614899ebcbb32a7e8cf5a95d4af0de"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "4722ed668f3423684944aafab37ac999"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "175dc5e5d75e90bbd5c596dd9bc84ba7"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "1b4d832e5ae3ac40b8342c88af8e4ffd"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "ba046dc449b8491092c160cceb3ed435"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "375595f26f2029cfb526ce24c3a7dc95"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "2917a8821366894cd4bfe0f97f5a921e"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "03a9ccf7ca30d32dcbc08cbf0af36a18"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "4a7f9bdf9af7a047d54196fe5c1a8b56"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "145abfdaff1b731a80102faac8837982"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "17cc367a5f50e965476e5be791254c60"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "6c9ff1401a14b362eedfe47abade2ae1"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "16d00fd1929a59e4c2388a42a3b06837"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "7145887e5c3830fda16c98f7d15ee870"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "3197129cdbb4709e2f8892de68b868a1"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "767de165cde82723b3dc5442ee3c830a"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "347f7e3de3f1fb7fc1e673752ca71b11"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "0f78bc281edcba70c911d0a6a9308b9d"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "f4ba9ec8afb83fb20ce045160561c757"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "94f2edf433bfa8c49473911d332132fa"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "6860659fdc5754ae23c94cee249a5baf"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "87b01aee639c1b5801c1c47a515a958e"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "861b87ed81e487b933879c318b97cdf0"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "1a7953f7798dd92dfefed618787456ed"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "b58f7928a2e84093f0e970191cb98630"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "9c4b5ead74cc680575c3f2bd4ae4887c"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "b4127174be029fbbe46a872ad7c16631"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "5c54411670280d9d133350a7ffd25850"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "b066ee2fb5b9ae2edcabbc4a4c63cccf"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "8ebba8769daeebf8833ac6d2fd76a05d"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "a8ac5719a3178ba4cea791390c3aa831"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "16d65ec663a243b926f7db838885b21a"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "2c1a2a7167fd50fb3e166695667c178e"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "1c4bcca19b30c8f3ffd86d9790dc1a7e"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "e7102b50c96d940adf9119d462aa164d"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "bee529601b50c7654c589ca8b6cffd78"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "d97dd2c93df77b7e904f40d1bc58b5f9"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "ea2b1f93fbf7659e879c8cfc1f1e12bc"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "d8fdfd047cb5150dec8fecb38c236cd2"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "a292c7b5dd9faaaa0a61745be86ad408"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "02294e8d25cc6081872940b480a0718e"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "29ffecbe8bc686f409db638dd23ae23d"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "ef7d0d5d44a96e6e55875b2ecaed2c23"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "4d08cd84e4624632ea7ce4270ddb872f"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "8b6414f6fc6a62ac4ae5deb9ae81fa9c"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "552299b7cc729a28d7da654d98fb63a5"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "e8f5d6736695e2257cfd5e6366a464ee"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "356e860dff7e7b0a6b08a369cdced6a0"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "abc833e82b80ca236b41f30305356a40"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "5a4fca0b32e4adb2d49e7189639802ba"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "f453ea0858e44df04e5536cf15e92a79"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "068c205f111ea9fe3adf345e3a734162"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "e95e4df8dc94b89e32cfb4c9106a5831"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "885d7270f9aba3f5df500946e6c3d27d"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "84fc0e1e4dde7c1bb976ba0e6ccd4482"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "6572d1ab4a95501d1efda0f5b02af063"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "96fd799070042534e862684fd03f7ea7"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "6c789309f20050d70a3dcc3969c6dd31"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "be50cf2d7649d99508d44564e62564bb"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "6667f7a40475a5d594e6420c6a709478"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "1627ffbed6c0890b310bcbc704c59960"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "16b0adfd5d53ff320b5f4abfbde6930d"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "cdc8e08e9249bcea02c31f167d30c523"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "b8de676ffee362634420fede8c210988"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "db22a34a58927be4889512699644c2f3"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "8e0347fd18498496950856a927454121"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "b0417593e3a3d0ad6608240c2a3bc6e8"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "233dfb924c7062875388f29724efb5dc"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "751a283c50351c1b092d698e089a9c74"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "2cfdc64462767f60ec31545da571c65c"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "a25e0f19b3aae4e9d7dc48e7aaf9085d"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "725f24ca9af2c8068dc1abfa29761c8d"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "2fd976dcef310ce6cf593816f9d4945c"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "f13a72a4bb9b3316e6553ec3f28310bd"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "45c7565827b42979f53be14d8e60fabe"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "e166ca8666e609925ed12819ccad3971"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "727b900284f9b89b74b70e9ff5f5334c"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "d4c0bbdcadb06d0dc73ad03890674e40"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "4195514ae5983b63328beb6332bc168d"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "d41feb1e02d3a48169c931339cf11bc5"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "99a98a47d8a8d2e17fd04e2481f1429f"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "223af56eb27c0c5b75b549908d97eb3c"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "1d912f30b9c41b64ca673d71a502987e"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "baf3596972f1e68a8b567778afd86003"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "6f668254dca34344ec3648c6a6f1b89f"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "4d5902e6c0afa3fc67d7d938f21ae194"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "cc4354dcdd9eb8ec8f0c9d9bb4f05cb1"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "dcb49b4936941cd3793ec89d89ef1a04"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "2e07105d1d2404091e87cb7d12e8b614"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "f313d2694f80ff8839b54e4b6f2a653a"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "387703fd82217af94a349cf0fcd26c98"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "def5d0aabd32e1f87bc3fd2220a2e54d"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "67e347423fa284abdfb8e090ff741cfa"
  },
  {
    "url": "2.3.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "47b68efe676654bb2003b3844708c7ee"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "6a30d2791a42b79a43be6b8520e1a8e3"
  },
  {
    "url": "2.3.0/b2b-marketplace/buying-leads.html",
    "revision": "0950363a1f52e47faf0a90bafed70666"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "7d2c80fcc9172aa9a4901e47de62ad30"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "8326d1d993321bbc2d897332cd3da937"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier-microsite.html",
    "revision": "53b2fb74770c0ae0526a124356f99c0d"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "ee8438c92c0c48aef4c4e74d58e98692"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "ed86efc716b2b0cba95388a14aa9cc9d"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "a7b447bb78a3e3e227d9e90adf3d2e5d"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "ef3e9178acfd5236e21341e44129435d"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "10aa47cd7e2457f2254ab17735b4bba3"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "39a1bc6ea90c69e4968fb7587c08668f"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "7ec3c23caa02f9f9c6dafccf023b9bc8"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "a61ffc5a5669375be00f4bc7f474081f"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "a037f52e38f56e83fafe13895b50f8ee"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "6cc829834c72e0fd39f8d1b61b2724fe"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "d0d60611fb6d0a1e4785f3034a02ba17"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "5d050a2a3749c8808e5010fcc642dfd0"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "112f58863e30f0d573779d5cc3c4cec3"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "6c20b17d0fce0a316392fd04cf550d76"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "c8d6d8885ad95b90d75b5ccebe710cd1"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "e4952a32dc5b93779054e14164ce2126"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "228c10b3c86384a8c6578b24f665c677"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "100881b941ea04bdf9175fc05f0c520d"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "88effb5679ea31f7cb7d8a1e7ad6d4d4"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "d34cb0b4501b663ae9a52b986d0114e9"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "9b2ce84dbd3a7724273a51139d1f7b1a"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "3ac16538ed731ea20ff3d1ab4f6d4f68"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "ec8aedadb9ee718c6579a9b507295b64"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "7128e46c0330b4a1dff153c0242f0d37"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "f4f3d7547c71e158768c41f8e91c4bc2"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "ffe626272fc6fb2103aba577d7049daf"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "500367a8c631b8b53c6ffff56362f3e6"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "5aeeba0d0ddef0ffe8e571bf65cc2138"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "83061e7929de201b139373eaa322b9e8"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "4d93f2300b2a2ab097ac5882b9c1917d"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "2fcc8b2b875cc0bc7a3236a964b6f132"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "450c77c42e852249bbb0d0e02b99fafc"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "b6bd592c8b02dc81b1bf8b31f840087c"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "920cb39b6a14358fdaec4c1b8b678b43"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "89812d5f52b4685d4d9a0629f6f81d0b"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "b75d43ef9b436477cdfa14bf88e8fb22"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "1611fc5991993100ba8132d1acd03970"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "6cd8600594f78b0df7bc1b9e01128043"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "b775c03dadc14f65c8d70ffc244a6791"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "390602299edb62b1b4bd7b0943ba43fa"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "2bfa2c6e7032dbc6d61789e7c2f6e769"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "1f4afe6cddcc2f7388da3da72f9c5cec"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "b4de630ed21cbe256ad43c85125d7d9f"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "bc175db7d0383b7258bac59a413271d9"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "0e8d75452c1c5a2b64354d9db5588e4b"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "2c6fdd86c3b077e35f34b5c37d716351"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "912819d384c7d5893da418403b455a0c"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "da4d39adfebbabae80ebac77ecec5188"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "6d6247d16822095eba5b3c96a331aa1f"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "6bc263e7cdabdbb597b0f4a7f795495c"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "8e038cea7fd9c5cef9ea31d1169a68ef"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "2576ce810d9a7364e129f28a8a030abf"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "1a3efa97ed43dff57a9567dda2d8f5e3"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "4d1eb28f8e49b3bd638944558bde7f51"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "1bf1fd0e1be1a38c3abd745045a256e9"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "9844b69f8b0fedea6ba997dd1d7d409c"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "fa9cc2e76e58306b04978e5fb24ee7c0"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "65dbd924f3642b64bbfe5d1194eec833"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "886b9c545414aa3e4d1af5d226ecc2e9"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "4e41297a5c658f97945c3690c62e60af"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "69e0af243499ee62effbe71133854d18"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "4913c48f77e7651a83640c7aca74cc7d"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "8c94c8769f0564f1d33c8663f564d798"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "f14a49fdb0d854c560d97a2cb58bfcd9"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "ed26fe6df584878b66c8894427c0851f"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "0cd2bb2af4d8efd0c8fe24a389e0f828"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "703d47948938a18ab27820179a6a4d2e"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "9f88ddf1d30125cb05b1faeae8ea4382"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "691a22742a03cf53e54d7732e1c38486"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "6e361182451357ffaf92d64d7c6ce81b"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "f67ba1b8c9e6f6d9722a84fd023647c9"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "849c65b04ea66c0a0371c41b05bc1985"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "09ce9cfbfb3f514722ef2f1e37a7e4df"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "e334297c247b378d8f9c71d3678d29ae"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "cb3247c990f36454192c1295e6303a4d"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "b162c9c649b5efa6a31d7c2bd4988d70"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "5675a6b936823a6a7bdb95299a9b4bcd"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "8ee993951f8d34e3aa6018db9bcc8c90"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "0fe3b68ca100dcc5b5c2a1fa5410eaf5"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "d93e0ed3d480764fa0a84d5ccd1d0582"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "c406c49652dcf28a25683bd00dd66e32"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "93a89eab6a40528970f6ea94bbc404cd"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "13739a53ffcdce733615c19eafdb3ddc"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "25b63ba6417e0c666aa59ce666c294da"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "598c32a8c7ff57830e5777f5bf8c6d92"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "c6021e83671674d6eb691dfc21eeb957"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "d28dd39e2e02844088aecd0780d4b001"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "4ffbe8cd733a260b9e022f678debdbcf"
  },
  {
    "url": "404.html",
    "revision": "dde2da880de83199ab6274a0614dbcd0"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/1-godaddy.55b4e970.png",
    "revision": "55b4e970a9c3dc8ad0323287df5d0ad2"
  },
  {
    "url": "assets/img/1-guest-sign-in.52afa71b.png",
    "revision": "52afa71b42eff25a33aec8a4aedc9da0"
  },
  {
    "url": "assets/img/1-product-page-msg.204d4d0f.png",
    "revision": "204d4d0f589b09dfa14d43148e657f29"
  },
  {
    "url": "assets/img/1-registration-tenant.23ec4d8d.png",
    "revision": "23ec4d8d0f9cd5dc4c46e6cd608e1971"
  },
  {
    "url": "assets/img/1-seller-dashboard.153db513.png",
    "revision": "153db513847c3df74c38b76b5b2ad7ff"
  },
  {
    "url": "assets/img/1-seller-dashbord.2961c05e.png",
    "revision": "2961c05ead3295ebe68b3166312d8e9c"
  },
  {
    "url": "assets/img/1-seller-payment-request-to-admin.abfbdf27.png",
    "revision": "abfbdf27cff6d5a73fb4c2c96f6c6906"
  },
  {
    "url": "assets/img/1-seller-profile-page.eaa3cf69.png",
    "revision": "eaa3cf6921c95e4b83efa56bfe93f16f"
  },
  {
    "url": "assets/img/1-super-login.d3c8c157.png",
    "revision": "d3c8c15721e98d2ca817f89023a0593d"
  },
  {
    "url": "assets/img/1-supplier-login-button.ee9425e0.png",
    "revision": "ee9425e05062caf0d7349dadbe5766c8"
  },
  {
    "url": "assets/img/1.customer-login-signin-button.8f99e8e1.png",
    "revision": "8f99e8e12ea5020b672ffdfec298907b"
  },
  {
    "url": "assets/img/10-admin-product-review-pending-state.b945c508.png",
    "revision": "b945c508c6d759bd6b4b1533e0e9b710"
  },
  {
    "url": "assets/img/10-approved-last-quotes-button.5b3250ab.png",
    "revision": "5b3250ab1fff9f97bdbfa5c70d5a118e"
  },
  {
    "url": "assets/img/10-customization-item.f45d2721.png",
    "revision": "f45d27217c2d6050c01a35a2372bd691"
  },
  {
    "url": "assets/img/10-policies.431d06d7.png",
    "revision": "431d06d778b07c09a065514801f3934f"
  },
  {
    "url": "assets/img/10-tenant-profile.51c607d0.png",
    "revision": "51c607d0428a067abab9bd08d1119ccb"
  },
  {
    "url": "assets/img/11-admin-select-action.9299c048.png",
    "revision": "9299c04800f10a5c62a5ea781a3d7bfd"
  },
  {
    "url": "assets/img/11-price.91cf49f2.png",
    "revision": "91cf49f23764be0e43f8a38b8f609468"
  },
  {
    "url": "assets/img/11-quotes-confirm-by-customer.0530bb9f.png",
    "revision": "0530bb9faac00c36ab4fa8dbf748f49e"
  },
  {
    "url": "assets/img/11-social-links.371f78b4.png",
    "revision": "371f78b4d1906dc64e0e5dfe8271eddb"
  },
  {
    "url": "assets/img/12-admin-product-approved-state.14b41e6b.png",
    "revision": "14b41e6b05ca679de8c3451fd3ffb695"
  },
  {
    "url": "assets/img/12-buying-leads-seller.bfa02d8f.png",
    "revision": "bfa02d8f616b60799e40c108699efb8e"
  },
  {
    "url": "assets/img/12-seo.347ce8a2.png",
    "revision": "347ce8a2831b7e60cc092716d6224333"
  },
  {
    "url": "assets/img/12-shipping.4fff4598.png",
    "revision": "4fff45987be6de4946967b1c6caed327"
  },
  {
    "url": "assets/img/13-admin-customer-review.456e143c.png",
    "revision": "456e143cb70d5bedbeacd98165e27c88"
  },
  {
    "url": "assets/img/13-send-quote-request-to-customer.362fd7a5.png",
    "revision": "362fd7a5204944e85712b8fa47545d11"
  },
  {
    "url": "assets/img/13-setting.b03a2298.png",
    "revision": "b03a2298a09509b1a2e69cb3e178526e"
  },
  {
    "url": "assets/img/13-store-frontend.3db5f5a1.png",
    "revision": "3db5f5a1415ef515ac5a898a82a09c13"
  },
  {
    "url": "assets/img/14-inventory-and-category.d51fe2b6.png",
    "revision": "d51fe2b63acf9352033b0cc99b5cdfc9"
  },
  {
    "url": "assets/img/14-req-ans-by-seller.c1f208b2.png",
    "revision": "c1f208b2f07fbafb6061a54904a32251"
  },
  {
    "url": "assets/img/14-seller-profile-review.abee2844.png",
    "revision": "abee2844dbe574a0192ac3156963711d"
  },
  {
    "url": "assets/img/15-product-disapproved-state.5ff7ceba.png",
    "revision": "5ff7cebacec6692761bc008037920944"
  },
  {
    "url": "assets/img/15-seller-review-submit.3596b6cf.png",
    "revision": "3596b6cfb6b049bdb9afdb99c30a36bd"
  },
  {
    "url": "assets/img/16-admin-product-page.10e67f4c.png",
    "revision": "10e67f4cf8f5d1e17965756ac37b8624"
  },
  {
    "url": "assets/img/16-admin-seller-reviews-pending-page.45ce9c70.png",
    "revision": "45ce9c70afb533b10f8c8fcac4d69640"
  },
  {
    "url": "assets/img/17-admin-seller-select-action.903392f4.png",
    "revision": "903392f4a7f5572d14541bf965682f7d"
  },
  {
    "url": "assets/img/17-admin-update-status.c4bd6e1d.png",
    "revision": "c4bd6e1d8f797bba10547608ee926972"
  },
  {
    "url": "assets/img/18-admin-approved-seller-review.7c853842.png",
    "revision": "7c853842e7320af7d22013ef7a40dd2a"
  },
  {
    "url": "assets/img/19-Seller-profile-review-page.8cea9537.png",
    "revision": "8cea953762c14386dd34bf03aadbc8c7"
  },
  {
    "url": "assets/img/1frontend.60a9f83d.png",
    "revision": "60a9f83d3897ccfc85b19edaa45be0da"
  },
  {
    "url": "assets/img/1homepage.6bc15315.png",
    "revision": "6bc15315d10f260cb7434bb1132632c1"
  },
  {
    "url": "assets/img/1mycart.fea04e56.png",
    "revision": "fea04e5670e65fc427e521a15ff61b17"
  },
  {
    "url": "assets/img/2-buying-leads.8d9e21e5.png",
    "revision": "8d9e21e569011c3579cbaf5189067a7f"
  },
  {
    "url": "assets/img/2-create-supplier.4426308c.png",
    "revision": "4426308c4b6eeb545e040025f7654c8f"
  },
  {
    "url": "assets/img/2-customer-email-pwd.ee3a22fa.png",
    "revision": "ee3a22fa92be9d4b73d8190032376888"
  },
  {
    "url": "assets/img/2-customer-login.4e8a775f.png",
    "revision": "4e8a775fa4ed8035d1ad504259696d3e"
  },
  {
    "url": "assets/img/2-product-page.aea4908d.png",
    "revision": "aea4908db5c12f32b2b2f51f72e049ae"
  },
  {
    "url": "assets/img/2-registration-tenant.9e533e82.png",
    "revision": "9e533e8262e6ad59b0902f9eda82baa9"
  },
  {
    "url": "assets/img/2-seller-transtion.e2c2379a.png",
    "revision": "e2c2379abfd3bf215c83d713ade1ff85"
  },
  {
    "url": "assets/img/2-super-dashboard.d91b3a81.png",
    "revision": "d91b3a81ae12582126709895b66a1057"
  },
  {
    "url": "assets/img/2-write-a-review.0a62119d.png",
    "revision": "0a62119d8c5a2ee5d056e160759ff100"
  },
  {
    "url": "assets/img/2-write-msg.404c8306.png",
    "revision": "404c83064de1a07addf9d31dcf267ccc"
  },
  {
    "url": "assets/img/20-product-frontend-view.87dd32a5.png",
    "revision": "87dd32a5145c688f16d163d56e1bbd4b"
  },
  {
    "url": "assets/img/21-search-product.45f5ad86.png",
    "revision": "45f5ad86c466fe8f79487a2eb5eb4e45"
  },
  {
    "url": "assets/img/22-assign-produt-details.58f7b4d5.png",
    "revision": "58f7b4d584df6c9238abf77da8e39da0"
  },
  {
    "url": "assets/img/23-assign-product-disapproved.aa20cd92.png",
    "revision": "aa20cd926f42d9ab6154f2561b989527"
  },
  {
    "url": "assets/img/28-assign-product-store-frontend.8e8c9002.png",
    "revision": "8e8c900258dd5ae255c18e9715a72e31"
  },
  {
    "url": "assets/img/3-admin-payment-request-byseller.a1dab1fe.png",
    "revision": "a1dab1fe0596f55d581366d02e7dd2d5"
  },
  {
    "url": "assets/img/3-admin-suppliers-disapproved-state.8413280b.png",
    "revision": "8413280b9c04b1e82aaf67915b4f65f1"
  },
  {
    "url": "assets/img/3-customer-profile-page.87289c2f.png",
    "revision": "87289c2f9ab573340cffe2942c314cb9"
  },
  {
    "url": "assets/img/3-message-box.fe8f775c.png",
    "revision": "fe8f775ce1d1df9fdf139599eb3952ee"
  },
  {
    "url": "assets/img/3-product-creation.2ae8a534.png",
    "revision": "2ae8a5345fdfd60144d87ddbc9d298a7"
  },
  {
    "url": "assets/img/3-product-review.ca4e7643.png",
    "revision": "ca4e76438d32b5ebb20a7c28d3e3f67a"
  },
  {
    "url": "assets/img/3-registration-tenant.9607e800.png",
    "revision": "9607e8002bdaed83bfc906a0babc6a4f"
  },
  {
    "url": "assets/img/3-review-msg.93e4f25a.png",
    "revision": "93e4f25a007301f65db4d9c251ee539f"
  },
  {
    "url": "assets/img/3-super-create-tenant.f662b40f.png",
    "revision": "f662b40f10c73b59d905b793d8041d23"
  },
  {
    "url": "assets/img/3-super-tenants.ee5f2d80.png",
    "revision": "ee5f2d8062c2bc3c5c83d0f7cf52196c"
  },
  {
    "url": "assets/img/3-supplier-msg.524459c5.png",
    "revision": "524459c54e83f439b5c8e206408f0483"
  },
  {
    "url": "assets/img/4-create-new-product.cf9d0665.png",
    "revision": "cf9d0665acd501fe45e531fa6ccbe3b1"
  },
  {
    "url": "assets/img/4-customer-product-submit.53ce57dc.png",
    "revision": "53ce57dcedb1e97bfb8fc80db862b163"
  },
  {
    "url": "assets/img/4-edit-tenant.f02d2c72.png",
    "revision": "f02d2c72ef418610260a3f400d0f1453"
  },
  {
    "url": "assets/img/4-message-communication.2ad412f4.png",
    "revision": "2ad412f4a840e53e4f4a0a62adf46aef"
  },
  {
    "url": "assets/img/4-popup.e86f1cf0.png",
    "revision": "e86f1cf0ccdf8e1950f0fe9e25a647f1"
  },
  {
    "url": "assets/img/4-quote-info.7ab8fc9c.png",
    "revision": "7ab8fc9c64238e06cc43e9710cde6b7e"
  },
  {
    "url": "assets/img/4-reply-to-supplier.e13f7f95.png",
    "revision": "e13f7f95def4ce50c2dcf99f90e9883a"
  },
  {
    "url": "assets/img/4-review-unapproved-state.82a94362.png",
    "revision": "82a94362e60bca2fea2b3f4795421c32"
  },
  {
    "url": "assets/img/4-Super-tenant-Insights.bdd69873.png",
    "revision": "bdd698736b2573973d6e005b76b19a9d"
  },
  {
    "url": "assets/img/4-supplier-approved-by-admin.dd11d306.png",
    "revision": "dd11d306bad1810709f8c4d18c316bbe"
  },
  {
    "url": "assets/img/4-tenant-store.e62ae897.png",
    "revision": "e62ae89712b98e70d6397672d2680012"
  },
  {
    "url": "assets/img/5-admin-transaction.2640b420.png",
    "revision": "2640b420dd5a42f97680d9eb96a83917"
  },
  {
    "url": "assets/img/5-contact-info.9fb66d81.png",
    "revision": "9fb66d811c0de92f1da0340f798f6e84"
  },
  {
    "url": "assets/img/5-general-arrtibute.521ccee5.png",
    "revision": "521ccee561a438a47cdb7c786df77bc4"
  },
  {
    "url": "assets/img/5-reply-to-customer.98c858ae.png",
    "revision": "98c858ae63df8ca607fc2534a7f3be41"
  },
  {
    "url": "assets/img/5-select-action.487dcf74.png",
    "revision": "487dcf74bbbd2a69c79d926a6aa05733"
  },
  {
    "url": "assets/img/5-seller-dashboard-product-review.b1747eb4.png",
    "revision": "b1747eb4ce62f4d615279119ea9dc6d3"
  },
  {
    "url": "assets/img/5-send-quote.28b779a0.png",
    "revision": "28b779a06f42a3fa3037bcadcb252704"
  },
  {
    "url": "assets/img/5-super-edit-tenant.19413be0.png",
    "revision": "19413be07791e590f6f8b13827b65a4b"
  },
  {
    "url": "assets/img/5-supplier-sign-in.14727708.png",
    "revision": "14727708fdc18d6962becee72161cf43"
  },
  {
    "url": "assets/img/5-tenant-dashboard.588b75de.png",
    "revision": "588b75de84f51e76408769813d9ab3d0"
  },
  {
    "url": "assets/img/5-tenant-store.8c547917.png",
    "revision": "8c547917f4f02bea0a77945fa386b383"
  },
  {
    "url": "assets/img/6-approved.5bb664b3.png",
    "revision": "5bb664b353389c3130f84ef1e227f503"
  },
  {
    "url": "assets/img/6-order.26515697.png",
    "revision": "2651569775d86c8d7a24dbe2f85e53c9"
  },
  {
    "url": "assets/img/6-product-info.47242d57.png",
    "revision": "47242d57cd156a0edd1419e5c377da85"
  },
  {
    "url": "assets/img/6-rfq.56e168b8.png",
    "revision": "56e168b8e19977461ceb20d91e24bd95"
  },
  {
    "url": "assets/img/6-seller-product-review-pending-state.ae7f1d44.png",
    "revision": "ae7f1d44718f1831332442dcbc7ee6ab"
  },
  {
    "url": "assets/img/6-Short-description.c8ad9733.png",
    "revision": "c8ad97335d9e182c9c56753c599e7767"
  },
  {
    "url": "assets/img/6-super-delete-tenant.d91b3a81.png",
    "revision": "d91b3a81ae12582126709895b66a1057"
  },
  {
    "url": "assets/img/6-supplier-dashboard.0b60c8e9.png",
    "revision": "0b60c8e98509379d9b57d132299ffc56"
  },
  {
    "url": "assets/img/7-description.403ff5ef.png",
    "revision": "403ff5ef1b1df9465dc0e08eb4c24cea"
  },
  {
    "url": "assets/img/7-invoice.c4dcad07.png",
    "revision": "c4dcad0794a4f3882ee22b4c71d1a5c6"
  },
  {
    "url": "assets/img/7-popup-rfq.da0c26be.png",
    "revision": "da0c26be484f35513957e073d4a12573"
  },
  {
    "url": "assets/img/7-profile-banner-and-logo.5724602f.png",
    "revision": "5724602ff43a088b69b50448e4a60eaa"
  },
  {
    "url": "assets/img/7-seller-product-select-action.91cf5db7.png",
    "revision": "91cf5db777cedb79e6842c5f239600e6"
  },
  {
    "url": "assets/img/7-store-frontend.20b45665.png",
    "revision": "20b45665876ee4735da283d47837fc14"
  },
  {
    "url": "assets/img/7-super-customer-list.af1b595e.png",
    "revision": "af1b595e220dcd1f1eb059f5e966dc09"
  },
  {
    "url": "assets/img/7-supplier-review.7906bf68.png",
    "revision": "7906bf68a81bd0669dadb2bb081f4ff0"
  },
  {
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
  },
  {
    "url": "assets/img/8-create-shipment.11fe78e8.png",
    "revision": "11fe78e8928b16ea5030352c880c997e"
  },
  {
    "url": "assets/img/8-general-and-operational-address.86298b5a.png",
    "revision": "86298b5aa0e8eb22d5de809332eb259d"
  },
  {
    "url": "assets/img/8-meta-description.2a261e75.png",
    "revision": "2a261e75b401ee0ccd3ff6aae5eed3d5"
  },
  {
    "url": "assets/img/8-product-review-approved-state-seller.9837053c.png",
    "revision": "9837053c095f3bae3a0feb14c1b0dcdf"
  },
  {
    "url": "assets/img/8-redirect-page.c27b2a54.png",
    "revision": "c27b2a54ebea91be2b76efd366b9aee5"
  },
  {
    "url": "assets/img/8-review-at-frontend.a7af756e.png",
    "revision": "a7af756ef414cc5ab5d12f113fbc8bd0"
  },
  {
    "url": "assets/img/8-super-product-list.36db1aea.png",
    "revision": "36db1aea8f21708e408a1a3f476d570c"
  },
  {
    "url": "assets/img/9-corporate-address-and-about-shop.47497d53.png",
    "revision": "47497d536f6fcc11d074d04103a86de9"
  },
  {
    "url": "assets/img/9-customer-review-for-procuct-seller.c7c53655.png",
    "revision": "c7c53655f4d0276a1d3d062118827db1"
  },
  {
    "url": "assets/img/9-Img.ae77bbc5.png",
    "revision": "ae77bbc57ea2aab59e024a6911cfde56"
  },
  {
    "url": "assets/img/9-product.a7b812ec.png",
    "revision": "a7b812ecaa43a00c778fa3e319dce691"
  },
  {
    "url": "assets/img/9-super-order-list.8ae4947a.png",
    "revision": "8ae4947ab9f0124467a1d2f5bc2c435e"
  },
  {
    "url": "assets/img/9-supplier-responsenew.5cb86562.png",
    "revision": "5cb86562461613c1be5c2c9e73db85db"
  },
  {
    "url": "assets/img/abandoned-cart.40d28282.png",
    "revision": "40d282829a330c99a715eed34402753b"
  },
  {
    "url": "assets/img/aboutstore-sociallinkt.146b2de0.png",
    "revision": "146b2de06e6838caff8dd36ef2586718"
  },
  {
    "url": "assets/img/accessControl.76a3d346.png",
    "revision": "76a3d3469396fe88d18e5ee5aaa1a19a"
  },
  {
    "url": "assets/img/add-slot.f443a0e2.png",
    "revision": "f443a0e2e02e4ab8691ccb4f8e09d389"
  },
  {
    "url": "assets/img/address.54c54bb8.png",
    "revision": "54c54bb834084ac699488810bd27877b"
  },
  {
    "url": "assets/img/address.73f9d9c3.png",
    "revision": "73f9d9c3c0accc57e57c570a4e5e1bd6"
  },
  {
    "url": "assets/img/adjust.167cbf6f.png",
    "revision": "167cbf6fcbb3f92a4f1ce26f03aec4c5"
  },
  {
    "url": "assets/img/adjustFee.d7f3f7e8.png",
    "revision": "d7f3f7e8aeabaa98c1535cfa96b4e917"
  },
  {
    "url": "assets/img/adjustfeeRefund.cc122ee9.png",
    "revision": "cc122ee9d3f39af1766aa0189bb021a6"
  },
  {
    "url": "assets/img/adjustRefund.8d6b314f.png",
    "revision": "8d6b314f9cd68097a791b6d5d79411c2"
  },
  {
    "url": "assets/img/adminOrder.c87ffdf0.png",
    "revision": "c87ffdf09c7707c0396195d25f4a113d"
  },
  {
    "url": "assets/img/adminReorder.95b00c0d.png",
    "revision": "95b00c0d6f0e1e733882929a7fad3f9f"
  },
  {
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
  },
  {
    "url": "assets/img/allowReorder.bcf70145.png",
    "revision": "bcf701459c18156b50cbeb2789b7addf"
  },
  {
    "url": "assets/img/applyCoupon.1fd0032b.png",
    "revision": "1fd0032b9015a51ef289c19eb6a0a09e"
  },
  {
    "url": "assets/img/appointment-duration.86c30215.png",
    "revision": "86c302159028e4ccf728cfec91c6d9a7"
  },
  {
    "url": "assets/img/appointment.011047ff.png",
    "revision": "011047ff7a21be2a353ad09cfcaf05b6"
  },
  {
    "url": "assets/img/attribute.096f9150.png",
    "revision": "096f9150a23344cbae1bd9105771034c"
  },
  {
    "url": "assets/img/attributeCondition.655b39fd.png",
    "revision": "655b39fd6c08eb73855b1e8eebc63faa"
  },
  {
    "url": "assets/img/attributeFamily.288663af.png",
    "revision": "288663afa26b990715f1742c296a81e8"
  },
  {
    "url": "assets/img/attributeTypes.1a15bed5.png",
    "revision": "1a15bed5d16ae27a096828f27bca331e"
  },
  {
    "url": "assets/img/average-order-value.69fd907e.png",
    "revision": "69fd907e92e903d661ce74438d838c9d"
  },
  {
    "url": "assets/img/backorder.ce2cbb76.png",
    "revision": "ce2cbb765a1ab49f0e7e6e1bfab71561"
  },
  {
    "url": "assets/img/backorderOutput.a79776d7.png",
    "revision": "a79776d71b3aa529893f99db22817b03"
  },
  {
    "url": "assets/img/banner-logo.dbe4541b.png",
    "revision": "dbe4541b0d337a44377377460c241fb7"
  },
  {
    "url": "assets/img/bill.3dc36a38.png",
    "revision": "3dc36a3808a0e6c75efcceb8cc7c0836"
  },
  {
    "url": "assets/img/billAddress.3e38faa1.png",
    "revision": "3e38faa114ff98f1763a700e9b881960"
  },
  {
    "url": "assets/img/billingAddress.89151ce8.png",
    "revision": "89151ce8150f7098db13961aef747ca0"
  },
  {
    "url": "assets/img/booking-type.1471d100.png",
    "revision": "1471d100ce40213e1b19f5118b9c1aac"
  },
  {
    "url": "assets/img/both-basis.412f1c79.png",
    "revision": "412f1c79fb6cbc9d6d4c2c93a6ce762c"
  },
  {
    "url": "assets/img/bundle.5302b129.png",
    "revision": "5302b129967146ebc686735ba8c55ff0"
  },
  {
    "url": "assets/img/bundleOptions.01cb8cdc.png",
    "revision": "01cb8cdc5eeee8f6684dd51da2050d5a"
  },
  {
    "url": "assets/img/buyNow.2683aa9c.png",
    "revision": "2683aa9c5033194aa12b7c5222915613"
  },
  {
    "url": "assets/img/calender-view.f7c3ffa9.png",
    "revision": "f7c3ffa9d46b8b4d0390d0cffe81595b"
  },
  {
    "url": "assets/img/calender.9f451667.png",
    "revision": "9f451667563e5247c3ea4b7430613796"
  },
  {
    "url": "assets/img/campaign.91fe3411.png",
    "revision": "91fe3411810de28aea525a453a58d967"
  },
  {
    "url": "assets/img/campaignConfigration.e42a9937.png",
    "revision": "e42a99378a914bf01862025b214b79d7"
  },
  {
    "url": "assets/img/campaignOutput.f00bb683.png",
    "revision": "f00bb683ca4455f7e3ca9a38a20f3d21"
  },
  {
    "url": "assets/img/cancel-button.c541daec.png",
    "revision": "c541daec0df51c57125208994d380af7"
  },
  {
    "url": "assets/img/cancelled.63029149.png",
    "revision": "6302914901deeeb085dacf080ace87f2"
  },
  {
    "url": "assets/img/captcha.67275c7f.png",
    "revision": "67275c7f46a825296a8f97e966834997"
  },
  {
    "url": "assets/img/cart.0d42b772.png",
    "revision": "0d42b772a15096e9edc7056fa2fe2d97"
  },
  {
    "url": "assets/img/cartpageConfiguration.2a8cc626.png",
    "revision": "2a8cc6265574d17e2cad9a0b66d1607f"
  },
  {
    "url": "assets/img/cartSummary.ddb14953.png",
    "revision": "ddb14953d3dd65cf481f2c74cda92a64"
  },
  {
    "url": "assets/img/catAdmin.dabb8c35.png",
    "revision": "dabb8c35436d23f43f4a7ca5b405cc8f"
  },
  {
    "url": "assets/img/catalogConditions.3f3cf255.png",
    "revision": "3f3cf255fede57553424291559b4e0ac"
  },
  {
    "url": "assets/img/catalogConfigurations.ecca3049.png",
    "revision": "ecca304994b24c73e3fb55130153639b"
  },
  {
    "url": "assets/img/catalogFront.04438821.png",
    "revision": "04438821a4e0bf377024e9a786ac335a"
  },
  {
    "url": "assets/img/catalogOutput.db2a4bb7.png",
    "revision": "db2a4bb7d81cfd5ac38d76b730cef561"
  },
  {
    "url": "assets/img/catalogRule.d389090c.png",
    "revision": "d389090cbd9b5b05a33d7f83f180ac43"
  },
  {
    "url": "assets/img/categories.9654bd7b.png",
    "revision": "9654bd7bc173241027a741805b2bc98a"
  },
  {
    "url": "assets/img/categoryGrid.30d2b5c1.png",
    "revision": "30d2b5c1f28ee421ad2949fbe956fbc4"
  },
  {
    "url": "assets/img/catSide.ffabd07f.png",
    "revision": "ffabd07f8c2548322f4dc8d7c17e84e9"
  },
  {
    "url": "assets/img/channelGrid.2fb2d268.png",
    "revision": "2fb2d268ad269255efd23c1148ab16e7"
  },
  {
    "url": "assets/img/channels.eadfb45b.png",
    "revision": "eadfb45be94bde3cf14aa99e48f442de"
  },
  {
    "url": "assets/img/checkout.ab9b0f97.png",
    "revision": "ab9b0f976dfe52f807452715beb19d82"
  },
  {
    "url": "assets/img/checkoutMessage.7fec4305.png",
    "revision": "7fec4305b6e80c79137eda387ce363d1"
  },
  {
    "url": "assets/img/checkoutPage.d39fa003.png",
    "revision": "d39fa003a222d6dddd99ae40363bd2ca"
  },
  {
    "url": "assets/img/cod.a12ca48a.png",
    "revision": "a12ca48af4446c77d697d6a91c4859a0"
  },
  {
    "url": "assets/img/command.9351feae.png",
    "revision": "9351feaecaec23c14bbc13be7942a439"
  },
  {
    "url": "assets/img/complete.076010b3.png",
    "revision": "076010b35c5a136dd4f8167a800dcb7e"
  },
  {
    "url": "assets/img/condition.ab321770.png",
    "revision": "ab32177015ee86d4aa9934cedd5b30e1"
  },
  {
    "url": "assets/img/configurable.9fa6fb76.png",
    "revision": "9fa6fb7664af716acdf07eb82708f5ba"
  },
  {
    "url": "assets/img/configurableAttributes.0341eddd.png",
    "revision": "0341eddd298735466ee157f6485d9706"
  },
  {
    "url": "assets/img/configurations.5d9c124c.png",
    "revision": "5d9c124ce63ba29a935aad5281986e68"
  },
  {
    "url": "assets/img/configure_commission.beeb6947.png",
    "revision": "beeb694765720a312cbf38d96e501957"
  },
  {
    "url": "assets/img/contactInfo.4d1e076d.png",
    "revision": "4d1e076dfd3113456026a3f539bdbdaf"
  },
  {
    "url": "assets/img/contains.3ed8311c.png",
    "revision": "3ed8311c9895e1cedf09bec880bd00a1"
  },
  {
    "url": "assets/img/content.7e1b8e48.png",
    "revision": "7e1b8e486e6c73a245083b7239471f9d"
  },
  {
    "url": "assets/img/content.9140afd6.png",
    "revision": "9140afd64a40ae73085809e92f97a2a6"
  },
  {
    "url": "assets/img/content.d90f471e.png",
    "revision": "d90f471eb0cb66d7c7da150e4ab7a89c"
  },
  {
    "url": "assets/img/contentspec.67545044.png",
    "revision": "67545044fe5fc1c5d5dbce946f640f56"
  },
  {
    "url": "assets/img/cookies-position.bcba3078.png",
    "revision": "bcba30784d5b2c9e2c01881c11610bed"
  },
  {
    "url": "assets/img/cookies-Preferences.0a706068.png",
    "revision": "0a706068aaa824c26b3b949c44acd897"
  },
  {
    "url": "assets/img/couponApplied.22a6cb26.png",
    "revision": "22a6cb2644a9db78adb2818f756a4b35"
  },
  {
    "url": "assets/img/couponCode.7f792622.png",
    "revision": "7f7926226eef9ed70ee18bd80dcfd3dd"
  },
  {
    "url": "assets/img/create-invoice.74a5bc54.png",
    "revision": "74a5bc54c034fb31fa853432c2a18975"
  },
  {
    "url": "assets/img/create-product.de3763bd.png",
    "revision": "de3763bd35b420fae98e2bd46f259ddb"
  },
  {
    "url": "assets/img/create-ship.82246059.png",
    "revision": "82246059231c0b13b1f529c9a1367cd7"
  },
  {
    "url": "assets/img/create.757552e8.png",
    "revision": "757552e8c1a3f7f3623eafd87da6e3db"
  },
  {
    "url": "assets/img/createAttribute.bf9dd39a.png",
    "revision": "bf9dd39ae6079ef5613992d6e4812d50"
  },
  {
    "url": "assets/img/createCartrule.f59d3c55.png",
    "revision": "f59d3c55e87645f1ab3bca95d4d9eed6"
  },
  {
    "url": "assets/img/createCurrency.80f5dbec.png",
    "revision": "80f5dbec7e268bf73a29385cbb371f4c"
  },
  {
    "url": "assets/img/createCustomer.a6c9698b.png",
    "revision": "a6c9698b28099326d39cf735ca3468c1"
  },
  {
    "url": "assets/img/createFamily.ba7fc9a9.png",
    "revision": "ba7fc9a9c8e73f8962cad699c47e340d"
  },
  {
    "url": "assets/img/createGroup.08afdc81.png",
    "revision": "08afdc8109ffa43d47e454900e483da5"
  },
  {
    "url": "assets/img/createImport.8a18e6f7.png",
    "revision": "8a18e6f712cebe01f4966ba2cea89567"
  },
  {
    "url": "assets/img/createPage.8392fa25.png",
    "revision": "8392fa251d47307c792bbd8ab88cb9c5"
  },
  {
    "url": "assets/img/createShipment.f1b18478.png",
    "revision": "f1b18478ca01419ad43d14af3c624c9e"
  },
  {
    "url": "assets/img/createSitemap.d3b98b83.png",
    "revision": "d3b98b83b7631a9f494f69c5cd0891f3"
  },
  {
    "url": "assets/img/createSitemap.d6148cff.png",
    "revision": "d6148cff22a71aaaae2df2d116e6077c"
  },
  {
    "url": "assets/img/createTheme.0b94db18.png",
    "revision": "0b94db1864cfe92426a3044bf75cdea3"
  },
  {
    "url": "assets/img/createTransaction.71680d0a.png",
    "revision": "71680d0a0aebb6babfc0564d1b12ef1d"
  },
  {
    "url": "assets/img/createUser.f36e2467.png",
    "revision": "f36e2467b839a9711fe536a06b5e6f42"
  },
  {
    "url": "assets/img/css.2b4e1926.png",
    "revision": "2b4e19263e7221e2f43c054f7ab1a6d6"
  },
  {
    "url": "assets/img/cssOutput.f20f7109.png",
    "revision": "f20f710933d21bed21ab4f1db6ee9e93"
  },
  {
    "url": "assets/img/currencyLocal.4e83b107.png",
    "revision": "4e83b1073426ccd438831e6d3abb9d40"
  },
  {
    "url": "assets/img/custom-shoes.3855e8a7.png",
    "revision": "3855e8a774d155b4316a5c8cd91af44d"
  },
  {
    "url": "assets/img/custom.bad01684.png",
    "revision": "bad01684012cb08bd3bf4e36c39ec5e6"
  },
  {
    "url": "assets/img/customer-group.b2e8d240.png",
    "revision": "b2e8d24057db830319da6ab27135a77d"
  },
  {
    "url": "assets/img/customer-most-order.ab12bc7e.png",
    "revision": "ab12bc7ed09a30f4b9735fd7301d3d5a"
  },
  {
    "url": "assets/img/customer-most-review.2e3306dd.png",
    "revision": "2e3306dd0b905807240960ec38f5e4ad"
  },
  {
    "url": "assets/img/customer-traffic.cb4d6371.png",
    "revision": "cb4d6371213745f5544b2905247b7507"
  },
  {
    "url": "assets/img/customer.4e4dd06f.png",
    "revision": "4e4dd06f9864f5c9993299da841d35e9"
  },
  {
    "url": "assets/img/customerGrid.3a719b2e.png",
    "revision": "3a719b2e9bd9e2a9e7ba7867800b26c1"
  },
  {
    "url": "assets/img/customerPrice.9d1e5d18.png",
    "revision": "9d1e5d18955dede0d7c9a90fae5e5da9"
  },
  {
    "url": "assets/img/customization.3b816a28.png",
    "revision": "3b816a283d78e65c0a6da9a6906323bc"
  },
  {
    "url": "assets/img/customization.ee6ffc23.png",
    "revision": "ee6ffc2366ed4d947c9c00ab7fe80f85"
  },
  {
    "url": "assets/img/dashboard-manage-profile.58168eb8.png",
    "revision": "58168eb87b38e41d0ff22ed79724d274"
  },
  {
    "url": "assets/img/dashboard-order.58168eb8.png",
    "revision": "58168eb87b38e41d0ff22ed79724d274"
  },
  {
    "url": "assets/img/default-booking.01849695.png",
    "revision": "018496952ec06f81d7b36837cb6df20c"
  },
  {
    "url": "assets/img/description.0c5cd1d1.png",
    "revision": "0c5cd1d17dd0de93eb5775d38cc824ff"
  },
  {
    "url": "assets/img/description.40848a5f.png",
    "revision": "40848a5f5f247f682852c84998efa3c0"
  },
  {
    "url": "assets/img/description.8a01022f.png",
    "revision": "8a01022faa9c7169b3b464d3b50ae2db"
  },
  {
    "url": "assets/img/description.b1ef58bc.png",
    "revision": "b1ef58bcfccd11a44c92be2741854a59"
  },
  {
    "url": "assets/img/description.cf62b04a.png",
    "revision": "cf62b04aa2f445f10339b56579fa52f8"
  },
  {
    "url": "assets/img/description.d969131c.png",
    "revision": "d969131c908608da5860ee182e6229bd"
  },
  {
    "url": "assets/img/description.dcf2688e.png",
    "revision": "dcf2688ee434ac2cfd839e613c73bd5d"
  },
  {
    "url": "assets/img/descriptions.765ffef8.png",
    "revision": "765ffef8e6c1d256cd89e6cd63e8a99e"
  },
  {
    "url": "assets/img/design.242fdac4.png",
    "revision": "242fdac496c51c86a3441fbfa1957133"
  },
  {
    "url": "assets/img/design.3a73ffcb.png",
    "revision": "3a73ffcb7572045dddabe71e47447436"
  },
  {
    "url": "assets/img/designOutput.9f21e89f.png",
    "revision": "9f21e89ff570e9fa4bafe0a6248d57ba"
  },
  {
    "url": "assets/img/designOutput.c4642cb8.png",
    "revision": "c4642cb8d8e8c75bb2096f11e22521e3"
  },
  {
    "url": "assets/img/designOutput2.f072f094.png",
    "revision": "f072f094c679f8c291199b166ded471a"
  },
  {
    "url": "assets/img/destination.6deed041.png",
    "revision": "6deed041fc5339ded21e4918591a455b"
  },
  {
    "url": "assets/img/disableminiCart.4a099c89.png",
    "revision": "4a099c89ed6b902f3af25fcba3a1b832"
  },
  {
    "url": "assets/img/downloadable.67051ddc.png",
    "revision": "67051ddc29b8b662b724eddb30ba604e"
  },
  {
    "url": "assets/img/downlodableInfo.b6d199cc.png",
    "revision": "b6d199cc406607e28eaa126d0e1b8b6e"
  },
  {
    "url": "assets/img/duration.849dd4ce.png",
    "revision": "849dd4ceae32bc631055dca8fb8748f8"
  },
  {
    "url": "assets/img/edit-product.795e7782.png",
    "revision": "795e7782de26403aa2a2b3b9b1be9607"
  },
  {
    "url": "assets/img/edit-profile.21bff29b.png",
    "revision": "21bff29b1f516ffd9bb154dbb440f8ce"
  },
  {
    "url": "assets/img/editCategory.1e673965.png",
    "revision": "1e673965381721c39d193150c361755d"
  },
  {
    "url": "assets/img/editPage.5ad3e91b.png",
    "revision": "5ad3e91b4ed121bbc11c70665f3a0284"
  },
  {
    "url": "assets/img/editProduct.24b4c21d.png",
    "revision": "24b4c21dd133cc882224853a6be174fd"
  },
  {
    "url": "assets/img/editProduct.a0f174d2.png",
    "revision": "a0f174d28c7d61054863da62174ba8d1"
  },
  {
    "url": "assets/img/editProduct.ccce09c2.png",
    "revision": "ccce09c29ff97353f018001dfac74cd9"
  },
  {
    "url": "assets/img/editProduct.f3d03ba3.png",
    "revision": "f3d03ba38a9663379dd57eb22b49d626"
  },
  {
    "url": "assets/img/editProduct.fff08496.png",
    "revision": "fff0849642df2f8807b13fad295e8837"
  },
  {
    "url": "assets/img/editProducts.1d1ea4f3.png",
    "revision": "1d1ea4f388a0ccd939097fe3c8139328"
  },
  {
    "url": "assets/img/emailSetting.861f2aa4.png",
    "revision": "861f2aa493357812b89efe051baaa4a5"
  },
  {
    "url": "assets/img/emailSettings.39150cea.png",
    "revision": "39150cea1ae9747a18b55493c028cb17"
  },
  {
    "url": "assets/img/enableNewsletter.d0472579.png",
    "revision": "d04725797a67f04091339da2de467b92"
  },
  {
    "url": "assets/img/event-booking.33f16931.png",
    "revision": "33f169316c2470813bc66b473b605f5a"
  },
  {
    "url": "assets/img/event.7eb17475.png",
    "revision": "7eb17475b469586397490e70b4dadec0"
  },
  {
    "url": "assets/img/eventName.50f4e068.png",
    "revision": "50f4e0685269914c2d3ff2a0a3887c05"
  },
  {
    "url": "assets/img/eventOutput.ca12f7e6.png",
    "revision": "ca12f7e6e171f8e2945da64a1bde655d"
  },
  {
    "url": "assets/img/exchangeOutput.c1dd511d.png",
    "revision": "c1dd511d49748d1caa1b31e16ccb0b84"
  },
  {
    "url": "assets/img/exchangeRate.6949e640.png",
    "revision": "6949e6408e43a509bad3c4a68dec9b5b"
  },
  {
    "url": "assets/img/exchangerateConfigurations.3fef1f77.png",
    "revision": "3fef1f77ac2ea8c113ad3fee785e79c8"
  },
  {
    "url": "assets/img/exchangerateGrid.18b0f0f7.png",
    "revision": "18b0f0f767a286b8ecec4305e7e015fb"
  },
  {
    "url": "assets/img/excludeTax.ca9ac8ea.png",
    "revision": "ca9ac8ea55c2fe44feebf857f259cf52"
  },
  {
    "url": "assets/img/familyGrid.8370fbab.png",
    "revision": "8370fbabc01b668e7d0b83c858d9e089"
  },
  {
    "url": "assets/img/faviconOutput.0af4ffb5.png",
    "revision": "0af4ffb591592d1e7893fc1a040730ca"
  },
  {
    "url": "assets/img/frontend2.148bb3d9.png",
    "revision": "148bb3d9154bb53d2431e757cae76554"
  },
  {
    "url": "assets/img/frontend2.864a8940.png",
    "revision": "864a894032e86df0e8cd907d60957280"
  },
  {
    "url": "assets/img/frontend3.8cf117d6.png",
    "revision": "8cf117d65c8bd306f0fd94347b06e7bc"
  },
  {
    "url": "assets/img/frontend3.eabff820.png",
    "revision": "eabff820731fe9ccc11cb51642570f78"
  },
  {
    "url": "assets/img/frontend4.2e6593e2.png",
    "revision": "2e6593e2b87e9d87d1991c250b0527c8"
  },
  {
    "url": "assets/img/frontend5.eed29077.png",
    "revision": "eed2907742fe5034f078de31c76f15e5"
  },
  {
    "url": "assets/img/frontendFavicon.2fb0d95a.png",
    "revision": "2fb0d95aaeb8e6138715620a1599af7a"
  },
  {
    "url": "assets/img/frontendLogos.686a5669.png",
    "revision": "686a5669a7300675dccc77bcc0832cd8"
  },
  {
    "url": "assets/img/frontendOutput.380a6cd1.png",
    "revision": "380a6cd10fc15e240b0ca3e629a661e5"
  },
  {
    "url": "assets/img/frontreorder.22b948e2.png",
    "revision": "22b948e2b1b2378d14827dee2e387096"
  },
  {
    "url": "assets/img/gdpr-agreement.7ac81b74.png",
    "revision": "7ac81b74bd66792f67ef20f4f625418b"
  },
  {
    "url": "assets/img/gdpr-agreement2.47141f66.png",
    "revision": "47141f669aac6be789eeebaa121da930"
  },
  {
    "url": "assets/img/gdpr-message.0fa31f5d.png",
    "revision": "0fa31f5d75b428ae639522e07dc5ff3c"
  },
  {
    "url": "assets/img/gdpr-request.839731e3.png",
    "revision": "839731e3e3f72a1d48c97e520dacca98"
  },
  {
    "url": "assets/img/gdpr-status.d0a0ef87.png",
    "revision": "d0a0ef87ad696b4cb44037d65cc1a94e"
  },
  {
    "url": "assets/img/gdpr1.526b5a64.png",
    "revision": "526b5a646882a0367ffc008ac98e2588"
  },
  {
    "url": "assets/img/general.5849fe78.png",
    "revision": "5849fe78c23e9940aa3c4bab5eb717a8"
  },
  {
    "url": "assets/img/gridmode.74754395.png",
    "revision": "747543955a832346c7beaa7d39568ff8"
  },
  {
    "url": "assets/img/grouped.2f44c858.png",
    "revision": "2f44c858253f417437320c5c9ea3667c"
  },
  {
    "url": "assets/img/groupGrid.c4785f5f.png",
    "revision": "c4785f5ff2390e4d265850c801bdad2e"
  },
  {
    "url": "assets/img/groupPrice.924928de.png",
    "revision": "924928de7250cc7817f1d014bc84ed09"
  },
  {
    "url": "assets/img/groupProducts.67a99166.png",
    "revision": "67a99166d6e7b65e0fa7777cfabace42"
  },
  {
    "url": "assets/img/guestCheckout.4e097830.png",
    "revision": "4e097830b799d41574e207014b0d6bad"
  },
  {
    "url": "assets/img/header.29950b1c.png",
    "revision": "29950b1c7b632f9f7922feb01f721825"
  },
  {
    "url": "assets/img/homepage.6bc15315.png",
    "revision": "6bc15315d10f260cb7434bb1132632c1"
  },
  {
    "url": "assets/img/hourly-basis.21c795c2.png",
    "revision": "21c795c2f086d40da1312cca586ff568"
  },
  {
    "url": "assets/img/image-ai.fd1bf4e0.png",
    "revision": "fd1bf4e02f90dc729016319dbddacadf"
  },
  {
    "url": "assets/img/image.14ecf612.png",
    "revision": "14ecf612cd25f06d6b8e0697ba510c52"
  },
  {
    "url": "assets/img/image.4fb420d5.png",
    "revision": "4fb420d5f271c4c97f186eb11e1dff05"
  },
  {
    "url": "assets/img/image.5fcfa261.png",
    "revision": "5fcfa261a6017b174d1da408d814911f"
  },
  {
    "url": "assets/img/image.6a9cc529.png",
    "revision": "6a9cc529f91e47c9fed2a5bca27de29a"
  },
  {
    "url": "assets/img/image.ac99298b.png",
    "revision": "ac99298bc7c874fc29cd2279398e2655"
  },
  {
    "url": "assets/img/image.b30e57d4.png",
    "revision": "b30e57d4619cab816c7f63f1f039c26a"
  },
  {
    "url": "assets/img/image.e99c275b.png",
    "revision": "e99c275be41933e50a8ebfbb862e0e59"
  },
  {
    "url": "assets/img/imageMagic.3cc5adec.png",
    "revision": "3cc5adeccff6836619050eb055c5e5fd"
  },
  {
    "url": "assets/img/images.4a69d22e.png",
    "revision": "4a69d22e7884b0a3cde7ff619496f46f"
  },
  {
    "url": "assets/img/images.f98aa4ee.png",
    "revision": "f98aa4ee292000aba41322d91160024a"
  },
  {
    "url": "assets/img/imageSize.8e066795.png",
    "revision": "8e066795f9129b4fd7da35ec8f8288d1"
  },
  {
    "url": "assets/img/import.724fed65.png",
    "revision": "724fed65d7ed4881824b62c03a95dc11"
  },
  {
    "url": "assets/img/importDone.0d444b37.png",
    "revision": "0d444b374f97ef023c12a81ef49f86ad"
  },
  {
    "url": "assets/img/importOutput.eeb6d038.png",
    "revision": "eeb6d038073f42ffa84377842b7d5270"
  },
  {
    "url": "assets/img/includeexcludeBoth.0cd8803b.png",
    "revision": "0cd8803b37bd819db03d7464e8a1e441"
  },
  {
    "url": "assets/img/includeTax.d3a03586.png",
    "revision": "d3a035865b78aa7dafd152de912d4631"
  },
  {
    "url": "assets/img/inventoryConfiguration.3d59b832.png",
    "revision": "3d59b832b80fb87801a0fb424a93c2bc"
  },
  {
    "url": "assets/img/inventoryOutput.2b30b856.png",
    "revision": "2b30b856b6f4572dc578e9838781b3c4"
  },
  {
    "url": "assets/img/inventorySetting.bfce85d5.png",
    "revision": "bfce85d5821f613402a25b49b762249e"
  },
  {
    "url": "assets/img/inventorySource.703ce5b3.png",
    "revision": "703ce5b39e6977f9ac933c806b203fb0"
  },
  {
    "url": "assets/img/invoice.befbdba3.png",
    "revision": "befbdba38ad837425e6a20e8278637b7"
  },
  {
    "url": "assets/img/invoice.ed818124.png",
    "revision": "ed818124a62153f919036c140f7a3e35"
  },
  {
    "url": "assets/img/invoicenumberSettings.495f7127.png",
    "revision": "495f712718a7b86806df3307165d04c0"
  },
  {
    "url": "assets/img/invoiceReminder.d09415a1.png",
    "revision": "d09415a145d7bbdb914ae41f9cbd0928"
  },
  {
    "url": "assets/img/invoiceSlip.8d53aba6.png",
    "revision": "8d53aba693968cfbe1f4e6a4dddcf977"
  },
  {
    "url": "assets/img/invoiceSubmit.da097460.png",
    "revision": "da0974603b074d5dd4a66eba35945d63"
  },
  {
    "url": "assets/img/itemQuantity.c04ba958.png",
    "revision": "c04ba958e61a9aa20469869e477527b6"
  },
  {
    "url": "assets/img/items.33946b16.png",
    "revision": "33946b16a190e59f25ac0c4392f12443"
  },
  {
    "url": "assets/img/js.c347da35.png",
    "revision": "c347da35f27b670819805af58578695c"
  },
  {
    "url": "assets/img/last-searchTerm.9aea5eda.png",
    "revision": "9aea5edaab70881c5e2f17dd7dfa12a2"
  },
  {
    "url": "assets/img/link.68f3ea34.png",
    "revision": "68f3ea347f52221dab0cfb28f17f3a6e"
  },
  {
    "url": "assets/img/link.ef489c2e.png",
    "revision": "ef489c2ecd25145c1ea738c82eaf4edc"
  },
  {
    "url": "assets/img/listmode.c8699863.png",
    "revision": "c86998630824813567c96ac7d20a4ed5"
  },
  {
    "url": "assets/img/localeChannel.61e5efa8.png",
    "revision": "61e5efa86318d439b1d7438389eb3bc2"
  },
  {
    "url": "assets/img/localeGrid.3cc059ab.png",
    "revision": "3cc059ab5b961f59a840fd4f4a24f944"
  },
  {
    "url": "assets/img/locales.1eec3541.png",
    "revision": "1eec3541589c43acfd900c577a90e2cb"
  },
  {
    "url": "assets/img/logoOutputs.3be56cf8.png",
    "revision": "3be56cf8cce9f1405a499e2c5cf7ed82"
  },
  {
    "url": "assets/img/magic.c9b20146.png",
    "revision": "c9b20146402bfb72c7b2b32f67b104f1"
  },
  {
    "url": "assets/img/Meta-desc.09fbcbab.png",
    "revision": "09fbcbabadfdea2339a4aa296a6425f5"
  },
  {
    "url": "assets/img/meta-fields.8fd70f1b.png",
    "revision": "8fd70f1b7e5a02a64c3cf36590a5c7f2"
  },
  {
    "url": "assets/img/metaDescription.16764ed9.png",
    "revision": "16764ed924978ceba5e8309f09f5ca78"
  },
  {
    "url": "assets/img/metaDescription.74f66c89.png",
    "revision": "74f66c899f15052cfaaa76033580ef0e"
  },
  {
    "url": "assets/img/metaDescription.afb36600.png",
    "revision": "afb36600eab84ea9868a197a962dde20"
  },
  {
    "url": "assets/img/metaDescription.dd43b5fa.png",
    "revision": "dd43b5fa54988ec0dd492416f63f6deb"
  },
  {
    "url": "assets/img/metaDescription.efc89005.png",
    "revision": "efc890052f6645d6745646af2b18bd40"
  },
  {
    "url": "assets/img/metaDescriptions.4dfbc31b.png",
    "revision": "4dfbc31baabc5bdc385e298bb43d42b2"
  },
  {
    "url": "assets/img/mini-cart.6439a672.png",
    "revision": "6439a6720799a5062489518f7dc83cfa"
  },
  {
    "url": "assets/img/mini-cart1.cc6fcbbf.png",
    "revision": "cc6fcbbf7b7c1d7acdb214369078169f"
  },
  {
    "url": "assets/img/moneyTransfer.d78c9eeb.png",
    "revision": "d78c9eebbc07cf1dbcc0e20c2ca0a2ef"
  },
  {
    "url": "assets/img/msg-popup.299dfbac.png",
    "revision": "299dfbac2f8718055c58412b7ad06d28"
  },
  {
    "url": "assets/img/new-slots.1863be66.png",
    "revision": "1863be665ddc8b63c18090a5c137495b"
  },
  {
    "url": "assets/img/newCurrency.ad269f28.png",
    "revision": "ad269f28da67564867b6782f90199416"
  },
  {
    "url": "assets/img/newGroup.0ffae93a.png",
    "revision": "0ffae93ad5842d7e77209c73c2ee8f10"
  },
  {
    "url": "assets/img/newLocale.0e9afa70.png",
    "revision": "0e9afa702eff98da246a19e18ee54007"
  },
  {
    "url": "assets/img/news.da67ed03.png",
    "revision": "da67ed0331fdd3a5bfad7054438d3e01"
  },
  {
    "url": "assets/img/newsletter.c363c83a.png",
    "revision": "c363c83a145fe9742343bf1dab91bd34"
  },
  {
    "url": "assets/img/newsletterGrid.fe1bd92d.png",
    "revision": "fe1bd92df43b9eef5ebe493650930929"
  },
  {
    "url": "assets/img/newsletterSettings.b9d66c0a.png",
    "revision": "b9d66c0a1c96bf0d50fc15edc511c050"
  },
  {
    "url": "assets/img/notifications.0cf7b2b1.png",
    "revision": "0cf7b2b1537dad395e36ef791eae7e0d"
  },
  {
    "url": "assets/img/numberItems.a5fcac32.png",
    "revision": "a5fcac321184a03259d7db4bbc4c4f12"
  },
  {
    "url": "assets/img/options.001937e2.png",
    "revision": "001937e250d31e5f629729cfe7151e50"
  },
  {
    "url": "assets/img/options.725fc8d0.png",
    "revision": "725fc8d0e18059346598f02e4aabf2de"
  },
  {
    "url": "assets/img/order-page.682a70c4.png",
    "revision": "682a70c4eafc3ea5e19f204e4f9dbc86"
  },
  {
    "url": "assets/img/orderID.05515d8b.png",
    "revision": "05515d8b0ec724d380e00578091597cf"
  },
  {
    "url": "assets/img/orderID.2c2d3b76.png",
    "revision": "2c2d3b7625544f02c95f3120fdb7ed0c"
  },
  {
    "url": "assets/img/orderInfo.653f834c.png",
    "revision": "653f834c7e13e5eda039763e29a7011b"
  },
  {
    "url": "assets/img/orderPlace.c0ba8da5.png",
    "revision": "c0ba8da5e4cde026b7ee7268b94b1717"
  },
  {
    "url": "assets/img/orderSettings.f4ab6c13.png",
    "revision": "f4ab6c13c25e37cd93dde2287785c7a8"
  },
  {
    "url": "assets/img/other.de9bb79b.png",
    "revision": "de9bb79b1f5e1bb89519f95b3a23523b"
  },
  {
    "url": "assets/img/outofstock.383c7271.png",
    "revision": "383c727177947943215434993682c870"
  },
  {
    "url": "assets/img/output.16c1b819.png",
    "revision": "16c1b819868428bcdd6f034f1d5d66a8"
  },
  {
    "url": "assets/img/output.31b099f6.png",
    "revision": "31b099f668578a9215701cbe7e382c5a"
  },
  {
    "url": "assets/img/output.41bd8676.png",
    "revision": "41bd86762890d2f525078bca7e186536"
  },
  {
    "url": "assets/img/output.4778ea36.png",
    "revision": "4778ea36ffc3c72e1c69e17d3b36d50f"
  },
  {
    "url": "assets/img/output.71dc9bec.png",
    "revision": "71dc9bece4c5b15ab5f7dd076fe361cb"
  },
  {
    "url": "assets/img/output.7881c7c4.png",
    "revision": "7881c7c4e6cc64e4163339e667b411d7"
  },
  {
    "url": "assets/img/output.919d1184.png",
    "revision": "919d1184445ccdc6575ac69f96fc81c4"
  },
  {
    "url": "assets/img/output.c8ed1df3.png",
    "revision": "c8ed1df3080c6c55af735ddb1d491ff7"
  },
  {
    "url": "assets/img/output.cc9621ee.png",
    "revision": "cc9621eecc949453e93b99ae86a9ce7e"
  },
  {
    "url": "assets/img/output.df4635e8.png",
    "revision": "df4635e844f2cca421177674a30e307e"
  },
  {
    "url": "assets/img/output.f6302d0e.png",
    "revision": "f6302d0e87674b638a14a9e97e755125"
  },
  {
    "url": "assets/img/pageConfiguration.d4acc9ec.png",
    "revision": "d4acc9ecfa471060a232843411b19558"
  },
  {
    "url": "assets/img/paymentmethod.50f0f3d5.png",
    "revision": "50f0f3d52b4b753d936b49e9356dfe2a"
  },
  {
    "url": "assets/img/paymentTerms.6bc06672.png",
    "revision": "6bc066729a21ce264d448791c7599b08"
  },
  {
    "url": "assets/img/paypal.08e56b66.png",
    "revision": "08e56b6616a2f58b5f79e2aaf49ad38b"
  },
  {
    "url": "assets/img/paypalStandard.eb088da0.png",
    "revision": "eb088da0fea21d1a77683e6e02549e18"
  },
  {
    "url": "assets/img/pending-status-invoice.f1cc4df3.png",
    "revision": "f1cc4df31e6d3348eccfb3a63e7f5c35"
  },
  {
    "url": "assets/img/personalizedCheckout.0a465abe.png",
    "revision": "0a465abefe3c21e37d6644363e8c21a0"
  },
  {
    "url": "assets/img/personalizedCheckout.a6f6b184.png",
    "revision": "a6f6b1842f555ec1b60c1ca29b7a65ed"
  },
  {
    "url": "assets/img/placeOrder.4b5ab597.png",
    "revision": "4b5ab5978315613992e24f88515d4db7"
  },
  {
    "url": "assets/img/price.4315931a.png",
    "revision": "4315931a1c332f9f20eb322b394f1258"
  },
  {
    "url": "assets/img/price.86fae45c.png",
    "revision": "86fae45cb1a4e4afe4bde5667ab03074"
  },
  {
    "url": "assets/img/price.b32785ac.png",
    "revision": "b32785acffd1121a1079927e0670f95a"
  },
  {
    "url": "assets/img/priceOutput.cd52618f.png",
    "revision": "cd52618fad240d3beeb7fb2f71cbf543"
  },
  {
    "url": "assets/img/pricing.05f6d9d9.png",
    "revision": "05f6d9d9f5e5f4461e1e2ba8b1d36a54"
  },
  {
    "url": "assets/img/privacy-policy.4b89ff16.png",
    "revision": "4b89ff165768a80451a61028b10004cb"
  },
  {
    "url": "assets/img/processing-state.9ce1844e.png",
    "revision": "9ce1844ef2e0a9f2c7c235d7fc6d0a41"
  },
  {
    "url": "assets/img/product-review.832df4ac.png",
    "revision": "832df4ac826b534b3d1bfb0821363fd2"
  },
  {
    "url": "assets/img/product-visits.c040062e.png",
    "revision": "c040062e393eb3349d29e5f25c512333"
  },
  {
    "url": "assets/img/product.4402c959.png",
    "revision": "4402c959fad67f9bbeb0855e84b8e541"
  },
  {
    "url": "assets/img/productCarousel.5a334508.png",
    "revision": "5a334508dcf6e400ecd526cf4d74f9bc"
  },
  {
    "url": "assets/img/productCategory.c158016f.png",
    "revision": "c158016f873fce0881518c9e3633878c"
  },
  {
    "url": "assets/img/productInventory.2a6d376b.png",
    "revision": "2a6d376b49a37ba160dd486f55ec3ce1"
  },
  {
    "url": "assets/img/productPage.0913d8b4.png",
    "revision": "0913d8b48fc4906e17f430524af08086"
  },
  {
    "url": "assets/img/products-quantity.a06852b1.png",
    "revision": "a06852b1b1f3820dda928e5afc3df529"
  },
  {
    "url": "assets/img/products-wishlist.269e3206.png",
    "revision": "269e3206e5340715882c5b0d01ab7dba"
  },
  {
    "url": "assets/img/products.3865c39b.png",
    "revision": "3865c39b4ef983793361bb01e55b8403"
  },
  {
    "url": "assets/img/purchase-funnel.97aef38c.png",
    "revision": "97aef38c811c7dc146ed8935c2051156"
  },
  {
    "url": "assets/img/rating.3679908c.png",
    "revision": "3679908cff55dcc0c0fb4f7a99b500cd"
  },
  {
    "url": "assets/img/refund.09ecb441.png",
    "revision": "09ecb441a72704b1d28a4c8d54fb5789"
  },
  {
    "url": "assets/img/refund.d66c6517.png",
    "revision": "d66c6517591e4fbbbb23f8b881f274c9"
  },
  {
    "url": "assets/img/refundGrid.42bc1d1c.png",
    "revision": "42bc1d1c90cc25b6a1f6d4e24d377f70"
  },
  {
    "url": "assets/img/refundShipped.99608d23.png",
    "revision": "99608d23ded540d9778491b0fca93f4b"
  },
  {
    "url": "assets/img/refundShipping.4d8b9070.png",
    "revision": "4d8b90709a1a6f071c8eddf6da1ce0a3"
  },
  {
    "url": "assets/img/reorder.20a44d56.png",
    "revision": "20a44d567c5c2ebc58ee88c05aad13ae"
  },
  {
    "url": "assets/img/reorderAddress.e6723f30.png",
    "revision": "e6723f303700199f3b8ad8ad9c7c2918"
  },
  {
    "url": "assets/img/reorderOutput.38c4eec0.png",
    "revision": "38c4eec04252cdb695e1f47d6810fde8"
  },
  {
    "url": "assets/img/return-policy.da7d6769.png",
    "revision": "da7d6769f6dfd446c9a8be6374639a7b"
  },
  {
    "url": "assets/img/revenue-products.a40f8679.png",
    "revision": "a40f86797d05794666e995347483083c"
  },
  {
    "url": "assets/img/review.91414169.png",
    "revision": "91414169bfcb300e4a48ab09ab60c09d"
  },
  {
    "url": "assets/img/review.97d17f45.png",
    "revision": "97d17f45342502ee075640a128762069"
  },
  {
    "url": "assets/img/reviewMagic.a6377095.png",
    "revision": "a6377095f839990b377eda2ca3b079c6"
  },
  {
    "url": "assets/img/reviewMagic.f9bb1189.png",
    "revision": "f9bb1189c73e87d904035c4c923c790f"
  },
  {
    "url": "assets/img/reviewStatus.347d2b17.png",
    "revision": "347d2b17a6d7abc03995c73d55ca0837"
  },
  {
    "url": "assets/img/role.d29f5e51.png",
    "revision": "d29f5e513d513b6bb333491d7716db7a"
  },
  {
    "url": "assets/img/roleGrid.8c856367.png",
    "revision": "8c856367466c7cd785ee13da5856fb5b"
  },
  {
    "url": "assets/img/Save.9cda1a3e.png",
    "revision": "9cda1a3ee7363132492849c1ae8edd44"
  },
  {
    "url": "assets/img/saveCategory.89f05b5c.png",
    "revision": "89f05b5cf82a626e6691689505f2fba0"
  },
  {
    "url": "assets/img/saveCurrency.d61ef1e7.png",
    "revision": "d61ef1e7e058aaf2df07595c9f15af22"
  },
  {
    "url": "assets/img/saveCurrency.f006311d.png",
    "revision": "f006311d38ecd3502f3a4e82cf9488e0"
  },
  {
    "url": "assets/img/saveFamily.30a732be.png",
    "revision": "30a732be79f350059a629ce8c9fcc461"
  },
  {
    "url": "assets/img/saveSitemap.9d549fa5.png",
    "revision": "9d549fa5eda56a30d0f36770bb69198d"
  },
  {
    "url": "assets/img/saveSitemap.c7785ab4.png",
    "revision": "c7785ab45983693dee9e0b2ee7aa1fb9"
  },
  {
    "url": "assets/img/savetaxRate.30e22c4d.png",
    "revision": "30e22c4d79233052db8f64938aa647bc"
  },
  {
    "url": "assets/img/saveTheme.d74db5b4.png",
    "revision": "d74db5b4d4c3f8885223fcb19f6c6701"
  },
  {
    "url": "assets/img/saveTheme.fece12f0.png",
    "revision": "fece12f03744c824b2525579e71d93f6"
  },
  {
    "url": "assets/img/saveTransaction.33483e9f.png",
    "revision": "33483e9fe758a9e416ce7414e1c39635"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/searchCustomer.95d5654c.png",
    "revision": "95d5654c56267778606419349014da53"
  },
  {
    "url": "assets/img/searchField.de2dd0e2.png",
    "revision": "de2dd0e25b64eb5052c6c59cfbbfa266"
  },
  {
    "url": "assets/img/searchGrids.05edc08e.png",
    "revision": "05edc08ecf31f7a0344df346d681ec15"
  },
  {
    "url": "assets/img/searchProduct.6f685a4a.png",
    "revision": "6f685a4a8ec35e726ff2cffcfe26a21e"
  },
  {
    "url": "assets/img/searchSynonym.3844db4a.png",
    "revision": "3844db4a8f0c024759d2b7b6b5fb504d"
  },
  {
    "url": "assets/img/searchTerm.848f16e0.png",
    "revision": "848f16e0d25339ad014fd1ce824f00ee"
  },
  {
    "url": "assets/img/seller_commission.7f1f6001.png",
    "revision": "7f1f6001cadff9b1a0b348f1351ee3ae"
  },
  {
    "url": "assets/img/Seller-login.ab4ee7fd.png",
    "revision": "ab4ee7fd70edc3eabab6d4af1bd12426"
  },
  {
    "url": "assets/img/seo.0fe2a12e.png",
    "revision": "0fe2a12e28ae684ad59cded993695277"
  },
  {
    "url": "assets/img/seo.43c81d1e.png",
    "revision": "43c81d1e466f44350197e09d98ce17ca"
  },
  {
    "url": "assets/img/settings.bc0811ed.png",
    "revision": "bc0811ed6f10a3efbb433a05c37d80ee"
  },
  {
    "url": "assets/img/Ship-button.c021281c.png",
    "revision": "c021281c66b1a6bcacf272b05f8cc4c8"
  },
  {
    "url": "assets/img/Shipment.6d5b9ae0.png",
    "revision": "6d5b9ae0721976d5ab38a07fc48713bb"
  },
  {
    "url": "assets/img/shipmentOutput.3e0d9740.png",
    "revision": "3e0d9740c504c803c7e8cea13595ed43"
  },
  {
    "url": "assets/img/shipping-collected.d2126828.png",
    "revision": "d21268289fb68775e60ac70cdf6cf6b6"
  },
  {
    "url": "assets/img/shipping.c2dae652.png",
    "revision": "c2dae652ee87990725785957fe6b604b"
  },
  {
    "url": "assets/img/shippingMethods.cfa03447.png",
    "revision": "cfa03447db2765d2e65294b8c2b2063a"
  },
  {
    "url": "assets/img/shippingOutput.028aea9a.png",
    "revision": "028aea9ac047f921d6d8925b81b6f64e"
  },
  {
    "url": "assets/img/shoppingCart.a89412b1.png",
    "revision": "a89412b1e66c5f066c6f162baccbd2a4"
  },
  {
    "url": "assets/img/simple-product.ddb1ac42.png",
    "revision": "ddb1ac42f19502140c2055e41cba8496"
  },
  {
    "url": "assets/img/simple.548f03a1.png",
    "revision": "548f03a1366af976be5f6baa86428155"
  },
  {
    "url": "assets/img/sitemapOutput.ceffe7ff.png",
    "revision": "ceffe7ffe838b6f514286cef4b25fb0d"
  },
  {
    "url": "assets/img/sitemapOutput.e24ff06d.png",
    "revision": "e24ff06d3165dceebb45c6453657eb5a"
  },
  {
    "url": "assets/img/slot-duration.97d528dc.png",
    "revision": "97d528dc99f4c126c6bcac25a239c60f"
  },
  {
    "url": "assets/img/slot2.f53bdadc.png",
    "revision": "f53bdadc215bb8b77c77ed50ea770c8e"
  },
  {
    "url": "assets/img/socialOutput.3896fec4.png",
    "revision": "3896fec4529040dcaac7eb7940371192"
  },
  {
    "url": "assets/img/socialShare.dcf350bd.png",
    "revision": "dcf350bd7c6a69e01a684aa44e9514fb"
  },
  {
    "url": "assets/img/sold-products.af8d9c44.png",
    "revision": "af8d9c44e608f4af48d1c875b6a42974"
  },
  {
    "url": "assets/img/sourceAddress.ee2e69a5.png",
    "revision": "ee2e69a5700fec03accb2b06a106d51d"
  },
  {
    "url": "assets/img/store-address.5bf07654.png",
    "revision": "5bf0765472ce938bf7204082c7014d58"
  },
  {
    "url": "assets/img/storefront.a0695081.png",
    "revision": "a0695081bf6125bf67739945536454b8"
  },
  {
    "url": "assets/img/synonymField.dac8c96a.png",
    "revision": "dac8c96ae4ec7249b2869618909d7d84"
  },
  {
    "url": "assets/img/synonymGrid.72ffd066.png",
    "revision": "72ffd066b60baa41373c2a0926800f85"
  },
  {
    "url": "assets/img/synonymOutput.67432a8c.png",
    "revision": "67432a8c2936f23947b87957dcfa2219"
  },
  {
    "url": "assets/img/table-booking.ed1d9c74.png",
    "revision": "ed1d9c746f27cf8483fae799845bf07c"
  },
  {
    "url": "assets/img/table-duration.25063880.png",
    "revision": "250638802b8bcdd539b599c7d98a6d81"
  },
  {
    "url": "assets/img/table.aa2f4277.png",
    "revision": "aa2f4277b7c83ce60c0aedd6e2321edb"
  },
  {
    "url": "assets/img/tax-collected.07bbefb7.png",
    "revision": "07bbefb72f03e792cd3042113103b328"
  },
  {
    "url": "assets/img/taxFront.5242347c.png",
    "revision": "5242347c1306003a46e2810d37931087"
  },
  {
    "url": "assets/img/taxRate.023eb978.png",
    "revision": "023eb97817841b7c866ed3a6c6613dbb"
  },
  {
    "url": "assets/img/template.9b486bdd.png",
    "revision": "9b486bdd4d7175b34e132a6df8148c2c"
  },
  {
    "url": "assets/img/templateName.43120a7a.png",
    "revision": "43120a7a054d78614433576051480f3b"
  },
  {
    "url": "assets/img/theme.9274b839.png",
    "revision": "9274b83993edf501f5935d220fed10d0"
  },
  {
    "url": "assets/img/themeOutput.02bd1082.png",
    "revision": "02bd1082e7cbad107c58e4db4b5f1089"
  },
  {
    "url": "assets/img/themeOutput.fb0c0721.png",
    "revision": "fb0c072183d8d0df429c56772e2dc1d8"
  },
  {
    "url": "assets/img/toggle-buttons.f44cfaa1.png",
    "revision": "f44cfaa142299d65bc4922b3c44dc583"
  },
  {
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
  },
  {
    "url": "assets/img/top-payment-method.d0b65af5.png",
    "revision": "d0b65af5724aeea668e7a0a967976c52"
  },
  {
    "url": "assets/img/top-searchTerm.1bcd799b.png",
    "revision": "1bcd799b2532a2a8770bbd23276b5426"
  },
  {
    "url": "assets/img/total_commission_paid_reporting.18d89214.png",
    "revision": "18d89214ad4849d7065e16fb2b936f3e"
  },
  {
    "url": "assets/img/total-customers.96945387.png",
    "revision": "969453873e32f3d7ca733bf92d1d5f32"
  },
  {
    "url": "assets/img/total-order.3c1ec690.png",
    "revision": "3c1ec690a194c87c4bc034a9e0cd6a5e"
  },
  {
    "url": "assets/img/total-sale-customers.fee25dfd.png",
    "revision": "fee25dfdce011f1883efa99361060018"
  },
  {
    "url": "assets/img/total-sale.b80c8593.png",
    "revision": "b80c859320a684149b530794ebe507f7"
  },
  {
    "url": "assets/img/transactionGrid.3028d914.png",
    "revision": "3028d9147e16a6477b4adedb13634d75"
  },
  {
    "url": "assets/img/transactionOutput.45613c77.png",
    "revision": "45613c77d231e3d01bf739d96e30c089"
  },
  {
    "url": "assets/img/urlFields.51f0b59e.png",
    "revision": "51f0b59e3066f795bfb7060828724db9"
  },
  {
    "url": "assets/img/urlOutput.1a1e6414.png",
    "revision": "1a1e641433cd569d5186488a3513435f"
  },
  {
    "url": "assets/img/urlRewrite.cc5d8f75.png",
    "revision": "cc5d8f75656cac9b722dcf499c9cad94"
  },
  {
    "url": "assets/img/user.506a3658.png",
    "revision": "506a3658ffbe570bb93948b46bc4ec28"
  },
  {
    "url": "assets/img/userOutput.113745b3.png",
    "revision": "113745b35c89cc73195439db94fa4625"
  },
  {
    "url": "assets/img/validation.9c7ee3aa.png",
    "revision": "9c7ee3aae6a85912e64cf5879932b696"
  },
  {
    "url": "assets/img/variations.9be19c16.png",
    "revision": "9be19c168dd7dc86d64dd341abb15832"
  },
  {
    "url": "assets/img/virtual-customization.42885b7d.png",
    "revision": "42885b7d390f0c44b7cf838137ff1bf4"
  },
  {
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/visit-page.6f93888c.png",
    "revision": "6f93888c8416169687351d75536bd952"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.3119c19e.js",
    "revision": "45247ed00b798c663ade6c2311b385f1"
  },
  {
    "url": "assets/js/10.7e0ae862.js",
    "revision": "d97fb944a499ae1d2e5601812aff2473"
  },
  {
    "url": "assets/js/100.2435e06a.js",
    "revision": "35e15a8423d4221eb9740a0c5aaff09d"
  },
  {
    "url": "assets/js/101.bae7269b.js",
    "revision": "1eb7f2565c3de1c75f8396ce3c2965eb"
  },
  {
    "url": "assets/js/102.fbb3ee13.js",
    "revision": "1f83ac784bbab3537bafbf61de779798"
  },
  {
    "url": "assets/js/103.f266b954.js",
    "revision": "b60b45434b2aa919f93a588c0ef360a0"
  },
  {
    "url": "assets/js/104.e2face2b.js",
    "revision": "3501cafefca1e91cd41432700e5fcb35"
  },
  {
    "url": "assets/js/105.3598b45b.js",
    "revision": "27066884383427cafe1bad3c38f3f9ae"
  },
  {
    "url": "assets/js/106.3beb6436.js",
    "revision": "7486ea99358d2ba17ff1a03160438b5b"
  },
  {
    "url": "assets/js/107.20a64935.js",
    "revision": "f8c3bc383660cc4138e376babb09dc90"
  },
  {
    "url": "assets/js/108.66300eeb.js",
    "revision": "f2387ae9c901485ee0ba170087e6698b"
  },
  {
    "url": "assets/js/109.59c5b199.js",
    "revision": "04b96dafec9f83465565c848407ac00b"
  },
  {
    "url": "assets/js/11.ecb16866.js",
    "revision": "77767d95f72d4e30f7ba93093380a997"
  },
  {
    "url": "assets/js/110.2292d422.js",
    "revision": "772e464c9a079a1154b4c86bf181ca96"
  },
  {
    "url": "assets/js/111.a529dbf6.js",
    "revision": "38bc9bf9b178a3d4ab2c448f2519bc22"
  },
  {
    "url": "assets/js/112.96ccddaa.js",
    "revision": "b9a4e9ba65fd94cd5cb9d9fbb1b86abf"
  },
  {
    "url": "assets/js/113.06882581.js",
    "revision": "df5a36fe186f23d2cbc39bb95d466cc4"
  },
  {
    "url": "assets/js/114.a64deba2.js",
    "revision": "bcee0e9dbcb78e11d12d9148f01522c5"
  },
  {
    "url": "assets/js/115.8058ee45.js",
    "revision": "cd07adbdc93a1e7ebf64484c8e6916f0"
  },
  {
    "url": "assets/js/116.9a063e52.js",
    "revision": "d0cf8196d401ca8661ec999019dd4d93"
  },
  {
    "url": "assets/js/117.5b398259.js",
    "revision": "887a04fd044927f6c207aea4c8ab41c1"
  },
  {
    "url": "assets/js/118.867109e9.js",
    "revision": "ae7bc848e59a632584f6f9083f5c5ae1"
  },
  {
    "url": "assets/js/119.75ad6c92.js",
    "revision": "1e8d0ad81614dd1385183a4c5b3bb0f6"
  },
  {
    "url": "assets/js/12.831f9101.js",
    "revision": "464e501c5aa9530e47744f6512605f49"
  },
  {
    "url": "assets/js/120.a533678e.js",
    "revision": "11753e908f11ed65da1a448edc6ce47a"
  },
  {
    "url": "assets/js/121.6bf4e1d5.js",
    "revision": "eee998b1ea1e76c828469ed12cd79bd2"
  },
  {
    "url": "assets/js/122.448626bd.js",
    "revision": "55ba45e804db9b1bed3df36b3e29d5f9"
  },
  {
    "url": "assets/js/123.9504f677.js",
    "revision": "4bdda1ea3bb4ed15c3a0daa57513b749"
  },
  {
    "url": "assets/js/124.357ec674.js",
    "revision": "164331dc8c1e4f8230543ca5d38035f6"
  },
  {
    "url": "assets/js/125.84535ec8.js",
    "revision": "fbc69c8d0196e97e714cb01ced30aa1d"
  },
  {
    "url": "assets/js/126.c912b975.js",
    "revision": "557ed0eb74228c94fa80905908df481f"
  },
  {
    "url": "assets/js/127.ddb192d4.js",
    "revision": "40c2c9a82fccbef34b52da4a67f08d26"
  },
  {
    "url": "assets/js/128.017a2057.js",
    "revision": "e049efa721416409dbde6e418ffc7b0e"
  },
  {
    "url": "assets/js/129.64bca642.js",
    "revision": "168c37f91642f85d5ec4b4edfd973dbc"
  },
  {
    "url": "assets/js/13.5ff0d2dd.js",
    "revision": "e36f316bcb4474fef833be1986414a39"
  },
  {
    "url": "assets/js/130.4bc84f2f.js",
    "revision": "a790c4989aeeed36d19666e243e068a9"
  },
  {
    "url": "assets/js/131.faa7a604.js",
    "revision": "28ab1586c9f03d154cd3d86f7c431c0f"
  },
  {
    "url": "assets/js/132.f8dba054.js",
    "revision": "d02c5d002be3e4534b49331907bbaa05"
  },
  {
    "url": "assets/js/133.4de27bd8.js",
    "revision": "b12165f1646d35937c7ad1f0bfcfc05b"
  },
  {
    "url": "assets/js/134.9e1f46d6.js",
    "revision": "56f1346d1123aa7f6b13ec3e375eaeec"
  },
  {
    "url": "assets/js/135.b20d97ee.js",
    "revision": "64d12703a5d49d6fa17f21060f0388b9"
  },
  {
    "url": "assets/js/136.4482174f.js",
    "revision": "b04418093090d625e1776ac134009bc0"
  },
  {
    "url": "assets/js/137.d103ed3b.js",
    "revision": "72c23e6317f69db88425750e4ecff54d"
  },
  {
    "url": "assets/js/138.e6012358.js",
    "revision": "024dca1d625a5129b2551f04023ee081"
  },
  {
    "url": "assets/js/139.fb7de96f.js",
    "revision": "a1c886288387c021bc2942b5f73c9383"
  },
  {
    "url": "assets/js/14.1c7afb01.js",
    "revision": "1f1aaf825bab8e1c2e41c9165b81fdbb"
  },
  {
    "url": "assets/js/140.dfc5fc2a.js",
    "revision": "0f1123477fc7b2c91de131956440dc28"
  },
  {
    "url": "assets/js/141.6f415c37.js",
    "revision": "989fb5074e3de2b479e5368809bdfe38"
  },
  {
    "url": "assets/js/142.dfa51e6a.js",
    "revision": "32b1e2aa6924c8f2e6beb1187eca9580"
  },
  {
    "url": "assets/js/143.94db750c.js",
    "revision": "d4cc6a89339ed17eadc55cf73775a054"
  },
  {
    "url": "assets/js/144.04750b74.js",
    "revision": "af4fbc7c2225020c48eb9175e2bb4e40"
  },
  {
    "url": "assets/js/145.10e684f4.js",
    "revision": "ba7edac32668f4bab5da8cb5b7bb77b7"
  },
  {
    "url": "assets/js/146.7aabd4c1.js",
    "revision": "7ca298bcd4c1d295cc5387e8fb76bec8"
  },
  {
    "url": "assets/js/147.d420f1b2.js",
    "revision": "6e7486b5cf2b2bdd293b2a4af1bfc3ba"
  },
  {
    "url": "assets/js/148.c1716959.js",
    "revision": "808eb8b3d4f08bd13c0285cbabd9d72b"
  },
  {
    "url": "assets/js/149.8781910d.js",
    "revision": "d0c190ba46af03a3a3e2c03e07cfb506"
  },
  {
    "url": "assets/js/15.799bee81.js",
    "revision": "d697b7b20c4ce68189593c06130151ff"
  },
  {
    "url": "assets/js/150.678b7b0f.js",
    "revision": "c9a6b13233a317e9fb4e656f6f430a91"
  },
  {
    "url": "assets/js/151.5e2aed67.js",
    "revision": "15c7afaf24d14f9fe32094b3224abdbe"
  },
  {
    "url": "assets/js/152.a65bbf32.js",
    "revision": "54039ad801024df6898c076496d15b0f"
  },
  {
    "url": "assets/js/153.10ecff0c.js",
    "revision": "5b982f6107b4dd1912d35c56b380b6bc"
  },
  {
    "url": "assets/js/154.409b1b78.js",
    "revision": "c1c1d47be78386033b2bdf1cbb9e5015"
  },
  {
    "url": "assets/js/155.99e292f2.js",
    "revision": "4f376a9ee1465aac3ec4d474b50a28a6"
  },
  {
    "url": "assets/js/156.6acb6313.js",
    "revision": "4bd60d63ac21c7b3d30116280baf87ba"
  },
  {
    "url": "assets/js/157.143ea99a.js",
    "revision": "5d9119859f09bde6f020f38422ad2913"
  },
  {
    "url": "assets/js/158.d68af6bb.js",
    "revision": "5ac28d4f440cdced1ddc93820c0ede7d"
  },
  {
    "url": "assets/js/159.585d926b.js",
    "revision": "16658c56416ae4a4e7387987cf283162"
  },
  {
    "url": "assets/js/16.93e2e0c4.js",
    "revision": "e54e8c385f64c7bb99b5ed1796d29aed"
  },
  {
    "url": "assets/js/160.cacb0448.js",
    "revision": "4f67b74582543e66a268918fdc7bcc79"
  },
  {
    "url": "assets/js/161.9dead54c.js",
    "revision": "2a63bc6629e7e6b6eeee6432eea4232a"
  },
  {
    "url": "assets/js/162.e4c4d1d6.js",
    "revision": "5606d91149577ff8b391df24a6b24913"
  },
  {
    "url": "assets/js/163.85a41343.js",
    "revision": "441e830cc2c35feb284c5459764fa8ae"
  },
  {
    "url": "assets/js/164.fcf12b90.js",
    "revision": "59f782d2cbe15936eba4a3a2ed7cee14"
  },
  {
    "url": "assets/js/165.71176db1.js",
    "revision": "9112aa9149532f99a0b20f4a3341a381"
  },
  {
    "url": "assets/js/166.8425c234.js",
    "revision": "6d8758077b480235faa269e5b8d99308"
  },
  {
    "url": "assets/js/167.6108d476.js",
    "revision": "c0291456094077e40e72a4644707b5b7"
  },
  {
    "url": "assets/js/168.aca4c368.js",
    "revision": "974b8165d1f35db955c49377ef335454"
  },
  {
    "url": "assets/js/169.fed61d9c.js",
    "revision": "e090d6e5d52717c04a90462eb910794b"
  },
  {
    "url": "assets/js/17.80c6eaed.js",
    "revision": "8762e70e6e43d49f35b72492c55ad647"
  },
  {
    "url": "assets/js/170.cf3f7a87.js",
    "revision": "656cae258a85fe3d144e607e09ab2077"
  },
  {
    "url": "assets/js/171.f03dc82b.js",
    "revision": "f43373d4ae9e344892fe257fc59a4542"
  },
  {
    "url": "assets/js/172.900aed12.js",
    "revision": "c142ff40a4707bd1bb5e8a2ab94b55b9"
  },
  {
    "url": "assets/js/173.c725c797.js",
    "revision": "9b05e21f0d95cf26f3112994c1c47892"
  },
  {
    "url": "assets/js/174.59b6e31a.js",
    "revision": "758c74ce3ef4a7cbc99571244ce1eb9b"
  },
  {
    "url": "assets/js/175.12ce7706.js",
    "revision": "001d64d4962f0e91bcdcbf654b4e39d1"
  },
  {
    "url": "assets/js/176.93782a97.js",
    "revision": "9a1a79a6e58e157a6866e6f92c978c63"
  },
  {
    "url": "assets/js/177.47ecb612.js",
    "revision": "3b8752269c24d5910cc00f260bd1ed43"
  },
  {
    "url": "assets/js/178.27ae9bed.js",
    "revision": "d684b887d4766ebabed0f3d48f9d0455"
  },
  {
    "url": "assets/js/179.0ece85d5.js",
    "revision": "19053e8014de5c2048334f9149d3fee8"
  },
  {
    "url": "assets/js/18.1e727af3.js",
    "revision": "7bc263f1848997fc74fcace4fdb36c7a"
  },
  {
    "url": "assets/js/180.2a8c6ec3.js",
    "revision": "295b25fddccedb817a0501c244ba26ad"
  },
  {
    "url": "assets/js/181.43765cf0.js",
    "revision": "d70cc5653f2a164b6ac1adf1d5852251"
  },
  {
    "url": "assets/js/182.59a8746c.js",
    "revision": "5ea6e9b8c23b60ecdbe7feeaa8b47386"
  },
  {
    "url": "assets/js/183.8c075753.js",
    "revision": "b77b0c0d95a45ca5a14b5326e5568a83"
  },
  {
    "url": "assets/js/184.e16731d0.js",
    "revision": "13f4307f8cc35565e428b6916eacf2d5"
  },
  {
    "url": "assets/js/185.931a6c15.js",
    "revision": "6369b1c918412200aaf3c178c5aeac7d"
  },
  {
    "url": "assets/js/186.b25ca7ee.js",
    "revision": "a7a08195cdea8a101872ec5c33d00387"
  },
  {
    "url": "assets/js/187.8df8bb46.js",
    "revision": "fb247d0198d40181c92ed629958f4343"
  },
  {
    "url": "assets/js/188.d686fdd2.js",
    "revision": "b1fe25656b80a1aef6bc94473f80021d"
  },
  {
    "url": "assets/js/189.1936b599.js",
    "revision": "af6ae7ac2d63bb69ba0b168b0d8c11a9"
  },
  {
    "url": "assets/js/19.ccff40e7.js",
    "revision": "7c315c764c425eb07652990693cd117f"
  },
  {
    "url": "assets/js/190.eb912e6f.js",
    "revision": "90c7460f50c55de84be8afc6a9cd416e"
  },
  {
    "url": "assets/js/191.dcb32d22.js",
    "revision": "983fb1f8c9f8a8a3a3fbc1a8b0e7894f"
  },
  {
    "url": "assets/js/192.f0f19f67.js",
    "revision": "d217004c22fc892fe2788bcb15fa41e1"
  },
  {
    "url": "assets/js/193.e861df87.js",
    "revision": "a549f7cf2c239beb7873ff98bfa2d497"
  },
  {
    "url": "assets/js/194.8be2b1ad.js",
    "revision": "363f2f4b04186b1c100d2ca3f2ad1dde"
  },
  {
    "url": "assets/js/195.83ff0c09.js",
    "revision": "d11e3e621035b1ac81003f3a75c8f91d"
  },
  {
    "url": "assets/js/196.00bc87a8.js",
    "revision": "73cba2671945fe2bed7e443ce33dc50c"
  },
  {
    "url": "assets/js/197.95708f20.js",
    "revision": "a236cbf004017cc55620fb902525cfad"
  },
  {
    "url": "assets/js/198.ed3bed7b.js",
    "revision": "1c0d5f0e7b81f0eebfc569fe47c2b191"
  },
  {
    "url": "assets/js/199.dcae5f01.js",
    "revision": "e1948202ffa8ed96609888b284fb6dcd"
  },
  {
    "url": "assets/js/2.9ac3a358.js",
    "revision": "f3419f8a63e682b1e6fad43febfb6a77"
  },
  {
    "url": "assets/js/20.6528c97c.js",
    "revision": "141f5e29805bc59d11c00dddb92fa5f2"
  },
  {
    "url": "assets/js/200.7e1b9f0f.js",
    "revision": "6691a83d976fe35c3d3495b0078204bc"
  },
  {
    "url": "assets/js/201.ec27d2c2.js",
    "revision": "963cdc16a7b22105305fd18b8988e9a2"
  },
  {
    "url": "assets/js/202.9daa9e03.js",
    "revision": "c2ef0d26254adb7a3ac85ebcd945951e"
  },
  {
    "url": "assets/js/203.6a1ac081.js",
    "revision": "b8409f32cca9b9b0ea79f6f1144bd360"
  },
  {
    "url": "assets/js/204.746856f1.js",
    "revision": "1c9d2876aa5913983b3c2084a652ba3d"
  },
  {
    "url": "assets/js/205.d4101af8.js",
    "revision": "ef3679a8888a29e3997762214d53ba5b"
  },
  {
    "url": "assets/js/206.3fca7ccc.js",
    "revision": "bba8fc613bc02056959e63bcea91216f"
  },
  {
    "url": "assets/js/207.f6b3db71.js",
    "revision": "b9cce290c74e8076f30f188e433234c3"
  },
  {
    "url": "assets/js/208.74c1c717.js",
    "revision": "ac8bea1dc4d635cc5c5ac095a4f02cc7"
  },
  {
    "url": "assets/js/209.f4d8eda5.js",
    "revision": "e595d37eb33a6c14bc9065f38eae44c9"
  },
  {
    "url": "assets/js/21.949d9ef8.js",
    "revision": "78499400dbe6b262b22db87b7af5f1b2"
  },
  {
    "url": "assets/js/210.4ee8f0a3.js",
    "revision": "fcc79ccf104d7c76829f1d5f96704443"
  },
  {
    "url": "assets/js/211.6b1170a0.js",
    "revision": "ca3b5b2d70a68c14a698ab1b803c4b65"
  },
  {
    "url": "assets/js/212.f7eb0e72.js",
    "revision": "f2ee45e7ad58e061d80c5effccac9e4f"
  },
  {
    "url": "assets/js/213.49500f72.js",
    "revision": "82836d8b9d26bb055296fd30a85fd1bc"
  },
  {
    "url": "assets/js/214.9735f9b7.js",
    "revision": "6a78badb7c5b5e0a54bd600376e0fbae"
  },
  {
    "url": "assets/js/215.f184409a.js",
    "revision": "01fcce4ce1bd39e4da4ff6b8ac68e8c9"
  },
  {
    "url": "assets/js/216.11a102a0.js",
    "revision": "5bb666ee986d513e5d8f462d9a0504ad"
  },
  {
    "url": "assets/js/217.a4a77dcd.js",
    "revision": "1063268ce9a4b2ebf2f390bf0ed15843"
  },
  {
    "url": "assets/js/218.d22a3592.js",
    "revision": "91d24d40a4c4900633039de24f8ce5ab"
  },
  {
    "url": "assets/js/219.6439c9c5.js",
    "revision": "b8a49614f69cd41ecf8eb894473eda6a"
  },
  {
    "url": "assets/js/22.bb5095a5.js",
    "revision": "6630800c87f3c20ea58747b8d80bcbbe"
  },
  {
    "url": "assets/js/220.0cfd0702.js",
    "revision": "e29542e3a37f5786d3e17151d5c7507c"
  },
  {
    "url": "assets/js/221.eebf9353.js",
    "revision": "a68adbb40cf92187b24915d99c1a3488"
  },
  {
    "url": "assets/js/222.5b2a92c3.js",
    "revision": "a08b0cced761307a7c74ab53289750c5"
  },
  {
    "url": "assets/js/223.6359aa46.js",
    "revision": "f1ea21ee9ebc2bff7b54a29865a6fe75"
  },
  {
    "url": "assets/js/224.aced6ff0.js",
    "revision": "b1a3ffaad8db753741a51987ec97150b"
  },
  {
    "url": "assets/js/225.b36809b2.js",
    "revision": "d51a9a21fa7634248590c0f91fb0aa6c"
  },
  {
    "url": "assets/js/226.6be92462.js",
    "revision": "d8632591f22481a3c814e8175ebd31a0"
  },
  {
    "url": "assets/js/227.bdea59e7.js",
    "revision": "e7e82ef337e8639b84144673a048ada6"
  },
  {
    "url": "assets/js/228.6bfdb074.js",
    "revision": "ed965f2ff95efeb65a4ba22198ee6437"
  },
  {
    "url": "assets/js/229.62b97d0f.js",
    "revision": "044c1a83ba89e68c48078c90996b39db"
  },
  {
    "url": "assets/js/23.7bc33bd1.js",
    "revision": "cd9b25d13759df69621b5176fc06a804"
  },
  {
    "url": "assets/js/230.03d11527.js",
    "revision": "1803c978997378e2108d807e7d0ff97a"
  },
  {
    "url": "assets/js/231.80e08a26.js",
    "revision": "07391bb807ef81cd231d1cb368d8e89b"
  },
  {
    "url": "assets/js/232.67ff8d45.js",
    "revision": "c68247c15befdb09e037ff293a364448"
  },
  {
    "url": "assets/js/233.3ca10924.js",
    "revision": "a758abe96791e31a42f5a50fba506e0e"
  },
  {
    "url": "assets/js/234.c1d01e2b.js",
    "revision": "bbf3906d002f09b1d3902a60ba09e1eb"
  },
  {
    "url": "assets/js/235.cec9e7c6.js",
    "revision": "eca68ff7fbdabc182122508aa0108dce"
  },
  {
    "url": "assets/js/236.9863db61.js",
    "revision": "05d698e503b1573adce23eb7dde0e04f"
  },
  {
    "url": "assets/js/237.b2568c87.js",
    "revision": "7fdf116da079541c9b683278a871cf32"
  },
  {
    "url": "assets/js/238.91cf551f.js",
    "revision": "00c7947bf0e0498bae91809201759914"
  },
  {
    "url": "assets/js/239.52067a74.js",
    "revision": "5198f6c67a390098d0bd292cb98451b3"
  },
  {
    "url": "assets/js/24.926603da.js",
    "revision": "0572129a1fdb8b2ba54699be69a296f4"
  },
  {
    "url": "assets/js/240.8d3e9908.js",
    "revision": "0139b7c27f46b949a669b91fe4f4c38c"
  },
  {
    "url": "assets/js/241.8549e8b9.js",
    "revision": "ad4846ac52bf9e1cc495b65eb0189450"
  },
  {
    "url": "assets/js/242.2aa9318e.js",
    "revision": "1e214b02967a162b4eeaec899bc99f91"
  },
  {
    "url": "assets/js/243.3589a7c8.js",
    "revision": "1e5949d6c260d3d9a52d7c4431a6084f"
  },
  {
    "url": "assets/js/244.387194a2.js",
    "revision": "80761e24f7c1d67ca9ccc5553af59dbc"
  },
  {
    "url": "assets/js/245.cfac0fb8.js",
    "revision": "82975b1646cc2c1aa8f9771908a00f2d"
  },
  {
    "url": "assets/js/246.b9faf4d6.js",
    "revision": "4cd13b080a94f5731018f2d0ecafca2b"
  },
  {
    "url": "assets/js/247.5744ee9a.js",
    "revision": "6ea2ccbe6d959ce1804aee158e71c2aa"
  },
  {
    "url": "assets/js/248.cc5acf5b.js",
    "revision": "95646f2acd6e25613a1a8f8229c9dc30"
  },
  {
    "url": "assets/js/249.9ea561b1.js",
    "revision": "8da2a825327e91d9687e466d3116fa9c"
  },
  {
    "url": "assets/js/25.7814340a.js",
    "revision": "370975165d3760ff8203ef8e681ada82"
  },
  {
    "url": "assets/js/250.64a1bc80.js",
    "revision": "95c5c54ba3899cc9490cc01324d9212b"
  },
  {
    "url": "assets/js/251.b50cb563.js",
    "revision": "a087a0fcca5ee5147fbe4a7132d18440"
  },
  {
    "url": "assets/js/252.555d5e93.js",
    "revision": "43f35b4c498a2e9c177bbbab0adcdf83"
  },
  {
    "url": "assets/js/253.60141dc6.js",
    "revision": "146fe958c6d0e51ad3c37aea4af70db4"
  },
  {
    "url": "assets/js/254.4af73043.js",
    "revision": "a29eeed26acc55d32bda8a399c9d3b44"
  },
  {
    "url": "assets/js/255.8f83604e.js",
    "revision": "dbcf58149579eb5d89ad0249a08fd0de"
  },
  {
    "url": "assets/js/256.b4c542bb.js",
    "revision": "b68423f63dfd962d3d99bfb913ed3d27"
  },
  {
    "url": "assets/js/257.f3d607db.js",
    "revision": "9479513975e97d81724cc89799d28301"
  },
  {
    "url": "assets/js/258.c245d66a.js",
    "revision": "4a57378beaf125e933895ab4d49a57d3"
  },
  {
    "url": "assets/js/259.008f3f41.js",
    "revision": "e9a8afe1066eff59b441c655d8d7264f"
  },
  {
    "url": "assets/js/26.a45121ee.js",
    "revision": "994e35a1ef3dd12850c9ee96912f323c"
  },
  {
    "url": "assets/js/260.0bae2806.js",
    "revision": "2c52f2d5db47ac2b68a65d20a48e1711"
  },
  {
    "url": "assets/js/261.82d98aaa.js",
    "revision": "bdbb68dcf0e20603e9a1dcee246bb0c8"
  },
  {
    "url": "assets/js/262.8e00d551.js",
    "revision": "1b4e926b9a174fbc81636f38c2edf091"
  },
  {
    "url": "assets/js/263.1ca0ba3e.js",
    "revision": "977a74b12b49bc4be673e669d5b0495d"
  },
  {
    "url": "assets/js/264.6807421b.js",
    "revision": "385014015311b3b00371ae65541860a1"
  },
  {
    "url": "assets/js/265.a99fd044.js",
    "revision": "90dabc13fc1f3fcdbac168253c4803ce"
  },
  {
    "url": "assets/js/266.9ee3415e.js",
    "revision": "427624b0a0958499b6920e99e4e479e7"
  },
  {
    "url": "assets/js/267.8d511dc5.js",
    "revision": "a5ec30fcdc609497223246aac34f8b56"
  },
  {
    "url": "assets/js/268.a62ba45c.js",
    "revision": "70b4455797428f2a1bef34e0798a5881"
  },
  {
    "url": "assets/js/269.1911e5c0.js",
    "revision": "ec4c234d926de2a6eda0709d2a97cd6b"
  },
  {
    "url": "assets/js/27.b36b4ac2.js",
    "revision": "47f0e76126ad4940f0fbd2c51079ba57"
  },
  {
    "url": "assets/js/270.431921f0.js",
    "revision": "bf02d6de9033f3b5166170ef99d825ea"
  },
  {
    "url": "assets/js/271.56a06a10.js",
    "revision": "14fff8770aea0496d6f01c969096d699"
  },
  {
    "url": "assets/js/272.d0f3a43f.js",
    "revision": "a41b6b7a759ab47158490ddd790f8243"
  },
  {
    "url": "assets/js/273.49a7f10c.js",
    "revision": "0f525a8898a9a76eb55e78b9413b4c64"
  },
  {
    "url": "assets/js/274.33d9d440.js",
    "revision": "3b5dd13f940b90ce53a3cda24e4f56a0"
  },
  {
    "url": "assets/js/275.17d87da8.js",
    "revision": "629103f83e427333197f15ca4568bb6b"
  },
  {
    "url": "assets/js/276.bb0bd532.js",
    "revision": "e54cfca6cd601e983135c657935bdd80"
  },
  {
    "url": "assets/js/277.c0a31155.js",
    "revision": "24557224e8d2599ff1d35faa4d84b43f"
  },
  {
    "url": "assets/js/278.cfd6039c.js",
    "revision": "da29c1aa8ba3d15ef5f28311ba556a5a"
  },
  {
    "url": "assets/js/279.c8e966fe.js",
    "revision": "3cc1b79d32e4051e3acb90ce8fa11eaa"
  },
  {
    "url": "assets/js/28.06693c51.js",
    "revision": "135f1ac2d2e6b3f5a4ac529e002aab5f"
  },
  {
    "url": "assets/js/280.cad13afa.js",
    "revision": "18c28ed344c2d15c61d23114ce4283e8"
  },
  {
    "url": "assets/js/281.9c840e27.js",
    "revision": "bc73f36056fc980663fb2b66fe04a8fc"
  },
  {
    "url": "assets/js/282.5ad66504.js",
    "revision": "8737e13e7b027789f9879f69edc891d7"
  },
  {
    "url": "assets/js/283.a83723f1.js",
    "revision": "f4dfeff9b5be753151db151d6b776222"
  },
  {
    "url": "assets/js/284.8e22817b.js",
    "revision": "96ba396950fedb3235a673f7f77506f0"
  },
  {
    "url": "assets/js/285.d4aef5a3.js",
    "revision": "213f5e1d381b5753ea3447e68e3b1b04"
  },
  {
    "url": "assets/js/286.3957a227.js",
    "revision": "057e927690aa9d63dba26cdb336a3b5a"
  },
  {
    "url": "assets/js/287.08a81275.js",
    "revision": "b7d6e7bd152c0e4c6c8b7c3c4127cb4f"
  },
  {
    "url": "assets/js/288.d42019dd.js",
    "revision": "332c6eb0622ca3d8227377e85247bab6"
  },
  {
    "url": "assets/js/289.173f8dc4.js",
    "revision": "a062ed5214deb6a67709c70210e90bda"
  },
  {
    "url": "assets/js/29.6cbcce96.js",
    "revision": "a15c06e0c148824552641748940de86d"
  },
  {
    "url": "assets/js/290.ee00274d.js",
    "revision": "c0e912d4a1609eed5493453efbcd2d42"
  },
  {
    "url": "assets/js/291.8e63d70a.js",
    "revision": "78658d4e748451971fa7d69fb41611a0"
  },
  {
    "url": "assets/js/292.62497c8e.js",
    "revision": "e0f5471106431225b324b28b2246f26e"
  },
  {
    "url": "assets/js/293.4ca66c65.js",
    "revision": "690d6f2c169e73dcca54a51704c5693a"
  },
  {
    "url": "assets/js/294.164ef2fd.js",
    "revision": "4b6fc0e18d37453f18b692b696363c13"
  },
  {
    "url": "assets/js/295.6b9f65de.js",
    "revision": "903a43c186a1294b556bf74ceba236f4"
  },
  {
    "url": "assets/js/296.f7e06592.js",
    "revision": "48575a5cac01487381f7566d344acf83"
  },
  {
    "url": "assets/js/297.49be4e10.js",
    "revision": "e4a5f1e770b801df688ccdb86ab65787"
  },
  {
    "url": "assets/js/298.34e61266.js",
    "revision": "723c88d7241786f7fa02b7c7ac78a1f8"
  },
  {
    "url": "assets/js/299.68a68d14.js",
    "revision": "0b2046a80c10c5287abd94345590a8d4"
  },
  {
    "url": "assets/js/3.49c1def6.js",
    "revision": "49c581cf207c3e4dc3de8952c00ca0ff"
  },
  {
    "url": "assets/js/30.d68d691c.js",
    "revision": "849e1047e591e71b272ecbc3f2e87f08"
  },
  {
    "url": "assets/js/300.e0dd110e.js",
    "revision": "d791a8101b1d8fa176acad5e1548b691"
  },
  {
    "url": "assets/js/301.8a701a07.js",
    "revision": "6785612fc32c610129625a8736f9a7d8"
  },
  {
    "url": "assets/js/302.5cbab71e.js",
    "revision": "d0060460cb3bfe789da0bed54d5b90f6"
  },
  {
    "url": "assets/js/303.de4f692e.js",
    "revision": "bb51380a7730e950711889e6daa0d8a0"
  },
  {
    "url": "assets/js/304.2ae580dd.js",
    "revision": "b15ef8014bdfd6312f62cbe47fadf85e"
  },
  {
    "url": "assets/js/305.d162dc18.js",
    "revision": "03487ee3371e2637e0ca2c56a33d759f"
  },
  {
    "url": "assets/js/306.5cc4c584.js",
    "revision": "d1e7b1595ac32b21b626bd2b9502a374"
  },
  {
    "url": "assets/js/307.beb7e08b.js",
    "revision": "a4a287d50603e574d77e2a2da977419d"
  },
  {
    "url": "assets/js/308.3804316d.js",
    "revision": "6afa245a5e2aeab2ca63cdd8415d8109"
  },
  {
    "url": "assets/js/309.101ec499.js",
    "revision": "4ee53c3e23a6c95ae95d792b63b8849d"
  },
  {
    "url": "assets/js/31.d716f330.js",
    "revision": "84799aca2bbddbb8a9c5250b9d5aaf94"
  },
  {
    "url": "assets/js/310.3dd193ba.js",
    "revision": "7a0930ae4cbf0e9901b3e1d420195c6c"
  },
  {
    "url": "assets/js/311.e0f4dd2f.js",
    "revision": "0bbb9cc1e794069f203922e8c4c23fd0"
  },
  {
    "url": "assets/js/312.e43f345c.js",
    "revision": "13a4fb014ff896f3b76d1dd11d60518f"
  },
  {
    "url": "assets/js/313.44a09e32.js",
    "revision": "d1580b9fed0ad45c142a4bbedfe3e514"
  },
  {
    "url": "assets/js/314.3d0e53a2.js",
    "revision": "9726d3185780390d98b03e6e2a47842f"
  },
  {
    "url": "assets/js/315.835fba2f.js",
    "revision": "e7b508268f1631f74e2ffb4f0bf70a60"
  },
  {
    "url": "assets/js/316.db9df45b.js",
    "revision": "77b61fcfd0aa1fe120ac07c889169fc1"
  },
  {
    "url": "assets/js/317.167360c0.js",
    "revision": "72c243750bcb5c4997206dab53c71525"
  },
  {
    "url": "assets/js/318.b32ac22b.js",
    "revision": "39dbcfee277650e1cde94ba26971ee42"
  },
  {
    "url": "assets/js/319.0664251c.js",
    "revision": "6baeb5dec82a18b33b65cdd6880308ba"
  },
  {
    "url": "assets/js/32.dab16607.js",
    "revision": "6241a98fd564175f3b097532cbdf3a1d"
  },
  {
    "url": "assets/js/320.1ab98a14.js",
    "revision": "4dc3269886b8514ce6445840c388096b"
  },
  {
    "url": "assets/js/321.5e21d1c4.js",
    "revision": "1cde81701a5cf2ad0e448fccc8645061"
  },
  {
    "url": "assets/js/322.f3ee7afb.js",
    "revision": "f67b72a18edf99955090a867de06a347"
  },
  {
    "url": "assets/js/323.df0b1d4c.js",
    "revision": "0d28452807d370a95c5eb9f9eaa499c4"
  },
  {
    "url": "assets/js/324.dcf4e43c.js",
    "revision": "9145d611218629b6b206735c7c186332"
  },
  {
    "url": "assets/js/325.6214fc51.js",
    "revision": "827821b73cdd7c4520e78bd6e065b3be"
  },
  {
    "url": "assets/js/326.9b8d938c.js",
    "revision": "2b15873578ea6bd7534eaa06b9edbd2a"
  },
  {
    "url": "assets/js/327.ca4cc4c3.js",
    "revision": "cf13dd3cb514a6b1616a18b83c031c70"
  },
  {
    "url": "assets/js/328.80cbb8dc.js",
    "revision": "7e82289d842350a13aa5b3cce8489ac9"
  },
  {
    "url": "assets/js/329.7d451002.js",
    "revision": "d607316e10f5aa764c7219f26ecc0c24"
  },
  {
    "url": "assets/js/33.a7bb803c.js",
    "revision": "8458d73cf54e26880601efa8afec2be7"
  },
  {
    "url": "assets/js/330.0c6c9b6c.js",
    "revision": "bbc15067ac6784dbd8661dd5da631350"
  },
  {
    "url": "assets/js/331.cbe6e3df.js",
    "revision": "28fd22c607f0ba607f42a1793b9f2cf2"
  },
  {
    "url": "assets/js/332.0ac418e3.js",
    "revision": "40f87978f773ade9b56e0b35ba6d830b"
  },
  {
    "url": "assets/js/333.0a7f1909.js",
    "revision": "2d976c61c6192e236f0451460c73167b"
  },
  {
    "url": "assets/js/334.a7ef6a05.js",
    "revision": "fa68a000f47b2d4f5065d0a9b535aaae"
  },
  {
    "url": "assets/js/335.f43f531e.js",
    "revision": "b0f46d8c570eacd22e87a078e5983e79"
  },
  {
    "url": "assets/js/336.301e28c5.js",
    "revision": "de3b62b8e14b08ff75208d2457bd980c"
  },
  {
    "url": "assets/js/337.5ce92098.js",
    "revision": "793f5ba0f71d31f5ef1e219a2c87e198"
  },
  {
    "url": "assets/js/338.1e0842dc.js",
    "revision": "799e2c9d6fb144d1044d2774dd1853bd"
  },
  {
    "url": "assets/js/339.5ba4fa1d.js",
    "revision": "0897a633edc4a135cb03cbb12bdbcac8"
  },
  {
    "url": "assets/js/34.28256a5b.js",
    "revision": "b1bcf4ebc856eb73b90b04b0d47b72c2"
  },
  {
    "url": "assets/js/340.48ca16de.js",
    "revision": "aef0a91780bfead3d74b91e8c98ac492"
  },
  {
    "url": "assets/js/341.a4952cc4.js",
    "revision": "804fb6a064e763a58bd9c7e71a9e3227"
  },
  {
    "url": "assets/js/342.b4de089e.js",
    "revision": "39e2c601bbf8bd2ffc91a86c63d26681"
  },
  {
    "url": "assets/js/343.360ee2f2.js",
    "revision": "c87fdec41dba978d737ee5a96b229335"
  },
  {
    "url": "assets/js/344.e15f0f64.js",
    "revision": "3dfea33ab8be51105297323bce0c7974"
  },
  {
    "url": "assets/js/345.05468192.js",
    "revision": "90312dbb0b5b9e5e92f3fe5b84d3c31d"
  },
  {
    "url": "assets/js/346.f8b6eceb.js",
    "revision": "942b5e58bf7d058d477f3ce6fb15728c"
  },
  {
    "url": "assets/js/347.9ea83890.js",
    "revision": "60ed61fba3d405fc9b690440eca27f4e"
  },
  {
    "url": "assets/js/348.b2d1e3dc.js",
    "revision": "686b9741c08aef169dd10fbfd088817f"
  },
  {
    "url": "assets/js/349.319731f3.js",
    "revision": "07c9f7dd94409a44470df291a44f8943"
  },
  {
    "url": "assets/js/35.d7134903.js",
    "revision": "b3aea6d2436ac056bdcbaa0cc87957fb"
  },
  {
    "url": "assets/js/350.b3cc9a1a.js",
    "revision": "13759a35fc7ec5c356721cabed8fcd04"
  },
  {
    "url": "assets/js/351.154e6d71.js",
    "revision": "4917ac1dcf5dfc3615da7e217e3f7ada"
  },
  {
    "url": "assets/js/352.2fc0abdd.js",
    "revision": "ff6e8229114fe8ac021d7c699cab38c4"
  },
  {
    "url": "assets/js/353.8462a08f.js",
    "revision": "8960b1491d08ed2ae8c5dab7860e822c"
  },
  {
    "url": "assets/js/354.ba05e9af.js",
    "revision": "157ffea163c1b7b51f71d607010c9153"
  },
  {
    "url": "assets/js/355.b42d7e44.js",
    "revision": "e5e054f6a75193d160d0c6d192ffada4"
  },
  {
    "url": "assets/js/356.d6c5dfe0.js",
    "revision": "6f9d5aabbaa3b0a0b94440a5cc0be2dc"
  },
  {
    "url": "assets/js/357.ea02c252.js",
    "revision": "66610d02fd298a5bfee13f76b0c6d97f"
  },
  {
    "url": "assets/js/358.062fda6c.js",
    "revision": "83bc3bc9ed4a84914bff3c7651cf4624"
  },
  {
    "url": "assets/js/359.34c8e923.js",
    "revision": "6b189fc0f978240b205f1a3d85707543"
  },
  {
    "url": "assets/js/36.a3dbbf00.js",
    "revision": "18ebed0bbae7903a09345cee6c3bf8c6"
  },
  {
    "url": "assets/js/360.7775e599.js",
    "revision": "99fe983e6bc1548bf53e9c098a9205dd"
  },
  {
    "url": "assets/js/361.2c79f3d8.js",
    "revision": "a3860993c4ed9e85f5de39cb844cc4d1"
  },
  {
    "url": "assets/js/362.e1fb5048.js",
    "revision": "c2bbbae9201c7d1c5f63ca62502cb624"
  },
  {
    "url": "assets/js/363.72e1b720.js",
    "revision": "9d7fb3cf36f4538ad437be2cb38df715"
  },
  {
    "url": "assets/js/364.83dff1b0.js",
    "revision": "83b950347f0482d7aea80900d6800d67"
  },
  {
    "url": "assets/js/365.0e3b175a.js",
    "revision": "87707515cd8201fe479ed6c40dfb76e7"
  },
  {
    "url": "assets/js/366.945c49f8.js",
    "revision": "7f91f25438a3804ccf6f578e54ab9905"
  },
  {
    "url": "assets/js/367.4386407d.js",
    "revision": "f9a7fb5d892a3b92401eda10fa3ff366"
  },
  {
    "url": "assets/js/368.e6de170c.js",
    "revision": "7261ad1e5ace4dfe35613221dd6ecd04"
  },
  {
    "url": "assets/js/369.6d41094e.js",
    "revision": "a0a854a28b94c1cf6bbe8d483958c899"
  },
  {
    "url": "assets/js/37.250fafe0.js",
    "revision": "c3c13c55ba582754167e0217cd860f51"
  },
  {
    "url": "assets/js/370.590f1d69.js",
    "revision": "4f544fe9757954004607503ff4a24e58"
  },
  {
    "url": "assets/js/371.abca31fe.js",
    "revision": "10a365c12be1d3e8c060d47033b75433"
  },
  {
    "url": "assets/js/372.283e5fab.js",
    "revision": "0933bf147b28492acb33bee735129ba6"
  },
  {
    "url": "assets/js/373.6cf715a6.js",
    "revision": "d984cfdb7bda014ad419f95d0fd93f31"
  },
  {
    "url": "assets/js/374.656e7bbf.js",
    "revision": "3db0497b6dfa7e01b01b3249a7b28b9c"
  },
  {
    "url": "assets/js/375.9fd7eeec.js",
    "revision": "08800aa9784348be0c6ce213d668685c"
  },
  {
    "url": "assets/js/376.bfecf14e.js",
    "revision": "49af246bb509d737fda2a8eb6167ac5c"
  },
  {
    "url": "assets/js/377.d26dfb43.js",
    "revision": "501d7c20e8896dec0ff1df414e0597f1"
  },
  {
    "url": "assets/js/378.8ef6bd99.js",
    "revision": "714581193f2b94edbb62848a6433a219"
  },
  {
    "url": "assets/js/379.0b52c7ad.js",
    "revision": "cf3254ecf85732a7cfb0cbf8340e0c74"
  },
  {
    "url": "assets/js/38.5a5b61d1.js",
    "revision": "287cac0b898307845456daf6e4a0e830"
  },
  {
    "url": "assets/js/380.52ca85f7.js",
    "revision": "36033c89792be0a6e16f0bdfe3577d8b"
  },
  {
    "url": "assets/js/381.f3a5cdc1.js",
    "revision": "dfca72353661b87cbc602c9dcb2e83d6"
  },
  {
    "url": "assets/js/382.2f6b1147.js",
    "revision": "44e83cd79c33fca95a2ab6ca0a32abfa"
  },
  {
    "url": "assets/js/383.78dbd465.js",
    "revision": "ea0f69eb33c4b9633643bc13db115a42"
  },
  {
    "url": "assets/js/384.02fdbbec.js",
    "revision": "d303ab5919ca4340b7b5e1fe2df2f2e5"
  },
  {
    "url": "assets/js/385.5f768f08.js",
    "revision": "8348a6bbfba8d0b4f39a748f18f60e48"
  },
  {
    "url": "assets/js/386.368d45c5.js",
    "revision": "f9109a5a13a43b2cf52295a6a9e3efe6"
  },
  {
    "url": "assets/js/387.544e8170.js",
    "revision": "2cef69b67ec6968572784af219c3f5bb"
  },
  {
    "url": "assets/js/388.30f4f683.js",
    "revision": "18284b9e1f32dc557c029864e8a487d3"
  },
  {
    "url": "assets/js/389.ed10c55d.js",
    "revision": "5fdf7c842772ad6ec78747d46598b215"
  },
  {
    "url": "assets/js/39.6acdb0fa.js",
    "revision": "a00e00c609d9f6923fbbc98fc09588eb"
  },
  {
    "url": "assets/js/390.0ea11e32.js",
    "revision": "31c776f6badda650aac008475f5359fb"
  },
  {
    "url": "assets/js/391.33572eee.js",
    "revision": "284aeb8c22933d114e3c65d5cc943cd6"
  },
  {
    "url": "assets/js/392.7e557c64.js",
    "revision": "c4d49341fc88bd33cd9873c57387b972"
  },
  {
    "url": "assets/js/393.ee90ba83.js",
    "revision": "d0c27c20ca0e8f8f508e7bdb838017de"
  },
  {
    "url": "assets/js/394.8e754b67.js",
    "revision": "4a828cf7198519bbed1e3140ff04a5d2"
  },
  {
    "url": "assets/js/395.f0825bec.js",
    "revision": "84a10ee115acf22dc62202635c0176d7"
  },
  {
    "url": "assets/js/396.e5c0e15b.js",
    "revision": "f3c8d34b6d16b1afc1e8dc43a432970e"
  },
  {
    "url": "assets/js/397.0935cad1.js",
    "revision": "7c0b22e158885e2aacc99418a939e900"
  },
  {
    "url": "assets/js/398.57510ecf.js",
    "revision": "4ae225873ed5bf68a2fb4f93bfd194db"
  },
  {
    "url": "assets/js/399.f8d21eb5.js",
    "revision": "d38798eb7cc01cdccd0e6a3184aff1b7"
  },
  {
    "url": "assets/js/4.599b7111.js",
    "revision": "bee7345be4861fab8f7aa50e80c735f8"
  },
  {
    "url": "assets/js/40.9197c749.js",
    "revision": "3deedc5429a6ddcb3f66338d8ae6566f"
  },
  {
    "url": "assets/js/400.71de9681.js",
    "revision": "43fb035e3df14bb4fab7fc232e61de52"
  },
  {
    "url": "assets/js/401.f6e23dbf.js",
    "revision": "0d98c9a40f19ecf09e568a2a7f247bc0"
  },
  {
    "url": "assets/js/402.bfcffc4a.js",
    "revision": "ea35dfd617ad87ee30c6f49f641d73e4"
  },
  {
    "url": "assets/js/403.52fc2cf3.js",
    "revision": "0a039e003afdbdbcd60d81e031368728"
  },
  {
    "url": "assets/js/404.6e9749fc.js",
    "revision": "a9308f865b52b822f8dba146e91e1a0c"
  },
  {
    "url": "assets/js/41.b49d4414.js",
    "revision": "991d3cfb4a99c896fe25cd00633efed9"
  },
  {
    "url": "assets/js/42.34b86a15.js",
    "revision": "36d17a16e4c8e27b635400aea2955b72"
  },
  {
    "url": "assets/js/43.ee544d8a.js",
    "revision": "9763e811af89649f2c8ac23cfedd4acd"
  },
  {
    "url": "assets/js/44.1da1dafc.js",
    "revision": "b3a8c94be0da7a066054293de5c942b7"
  },
  {
    "url": "assets/js/45.c342ffae.js",
    "revision": "2d473299fc6659656d9069dbcbbbd095"
  },
  {
    "url": "assets/js/46.7e36022f.js",
    "revision": "0322dbd5e748a1fbabae9711795f481a"
  },
  {
    "url": "assets/js/47.56d67a24.js",
    "revision": "c3689f2c5c4912537d0717e1370445a7"
  },
  {
    "url": "assets/js/48.bc198ee8.js",
    "revision": "04e931002dfce8e186a4882f6cc4ca63"
  },
  {
    "url": "assets/js/49.4afbfc28.js",
    "revision": "ee0a438179ae375705dd4cbec7f6d2ee"
  },
  {
    "url": "assets/js/5.bacfcfc5.js",
    "revision": "c1418fcc33c3acd0144a0142d1582857"
  },
  {
    "url": "assets/js/50.37d42348.js",
    "revision": "6c31fc9637fc2fb7cd4e0eb3c8463c2f"
  },
  {
    "url": "assets/js/51.2b03f2fe.js",
    "revision": "8d9580c67fea5e548eb6c15fb2ba93dd"
  },
  {
    "url": "assets/js/52.b8313510.js",
    "revision": "9db56e72d8a0472dafc088fa85d2d04b"
  },
  {
    "url": "assets/js/53.5e9dae04.js",
    "revision": "2dad70ac36e0d58c5341cd348b22060f"
  },
  {
    "url": "assets/js/54.72e48ba4.js",
    "revision": "462e5e1252603b721383b01d2be19a16"
  },
  {
    "url": "assets/js/55.a9045f52.js",
    "revision": "fa77e3c168f1137c62e808e62813111f"
  },
  {
    "url": "assets/js/56.155e91fc.js",
    "revision": "338a82fd7c051e52da947f01d70b8c3a"
  },
  {
    "url": "assets/js/57.3c7c8b54.js",
    "revision": "a7d652c8cb270e37f695f42bcc7a9012"
  },
  {
    "url": "assets/js/58.238ec798.js",
    "revision": "cc5abc465b96897c65314a11f6c9353e"
  },
  {
    "url": "assets/js/59.c486fed7.js",
    "revision": "a699a4f4c4807d6070f209661b0bf527"
  },
  {
    "url": "assets/js/60.8a7a11a0.js",
    "revision": "288b4f771fa6c88c46870cb98c2d0f1e"
  },
  {
    "url": "assets/js/61.6f8b470a.js",
    "revision": "7110883fbd3e15600ddc01398b4381e1"
  },
  {
    "url": "assets/js/62.9466bfc9.js",
    "revision": "f84b9dab7986bd0c2bed650b82b217ab"
  },
  {
    "url": "assets/js/63.ce7ddc10.js",
    "revision": "eb70fa85213a61ca01f7e3a79a8c5a30"
  },
  {
    "url": "assets/js/64.6bb71320.js",
    "revision": "18d2baf855002d582042b856ce06204b"
  },
  {
    "url": "assets/js/65.6f834fbe.js",
    "revision": "5e33790937de5d99b0b3f171f3b43d1c"
  },
  {
    "url": "assets/js/66.5c48cae1.js",
    "revision": "b737d97e6f91bdfb145ee326bf9025ee"
  },
  {
    "url": "assets/js/67.7e75207f.js",
    "revision": "e49076a5ed94a0810f6f7810ccc455d8"
  },
  {
    "url": "assets/js/68.675f6dbf.js",
    "revision": "299e7f0a87f0b5a06c2c9fde79366994"
  },
  {
    "url": "assets/js/69.d9807e3b.js",
    "revision": "2d5df40810046c4324f236bd5b9f018c"
  },
  {
    "url": "assets/js/70.137b73e3.js",
    "revision": "0a87648804961e983d77bcd6d746bf94"
  },
  {
    "url": "assets/js/71.c6b76ac2.js",
    "revision": "01526fb04d61d1ab5bff5c17b2bdb9b0"
  },
  {
    "url": "assets/js/72.b42ad95c.js",
    "revision": "dc958107d68e94190f3ab25b0e67abd9"
  },
  {
    "url": "assets/js/73.566d88b4.js",
    "revision": "f4ed49987620f79420e0601e514dbac1"
  },
  {
    "url": "assets/js/74.b349f142.js",
    "revision": "39c12e4260f7993e1bd45f4286e69e17"
  },
  {
    "url": "assets/js/75.da805f78.js",
    "revision": "1d5bdcc6a50d487d5ec95026a2ae8b84"
  },
  {
    "url": "assets/js/76.07f80382.js",
    "revision": "809ac25d7591a8d8a11012cdadb94b3a"
  },
  {
    "url": "assets/js/77.dc3c03e2.js",
    "revision": "1e0065467a8b5385e56f6b4f7f8c9db0"
  },
  {
    "url": "assets/js/78.5e2b37d9.js",
    "revision": "268b9093784f1a13e2d404e26c2f92d4"
  },
  {
    "url": "assets/js/79.df583c9a.js",
    "revision": "8ac3275047756c89a88d16692e1f3a55"
  },
  {
    "url": "assets/js/8.e21e157c.js",
    "revision": "a4309e71a738e5b14e65b006180197f3"
  },
  {
    "url": "assets/js/80.5b37871b.js",
    "revision": "e5b6e9974223847b59be803c09f1133e"
  },
  {
    "url": "assets/js/81.48172ff5.js",
    "revision": "99b8ddc21b8dccf261426e259a67c1dc"
  },
  {
    "url": "assets/js/82.63f71212.js",
    "revision": "0d21d77873cfe1fa5f45a683b34804fb"
  },
  {
    "url": "assets/js/83.017280a1.js",
    "revision": "3a8defd4fa66a041910f8b4d465b6b3e"
  },
  {
    "url": "assets/js/84.bc7b1267.js",
    "revision": "446aa9c9577663d129744d984088e0ec"
  },
  {
    "url": "assets/js/85.1995beb3.js",
    "revision": "2d26c9a3555b22a03f7b881e4535d822"
  },
  {
    "url": "assets/js/86.b893b030.js",
    "revision": "e6ba251da8b46d8e1fc391c02a354000"
  },
  {
    "url": "assets/js/87.df16c9f8.js",
    "revision": "b46a7b222cfda15b04e4d7b5f84333de"
  },
  {
    "url": "assets/js/88.cfe05e0b.js",
    "revision": "c91b5e186dc6336c15e4ff42a86d5d13"
  },
  {
    "url": "assets/js/89.e3412146.js",
    "revision": "e94fd548727e61a26d317e517632bb0f"
  },
  {
    "url": "assets/js/9.79690b92.js",
    "revision": "0ae93586a4bb42f59ff560d79aa27546"
  },
  {
    "url": "assets/js/90.05449b9f.js",
    "revision": "79036d5bb3f74aba6517a05a09b70413"
  },
  {
    "url": "assets/js/91.2a0a0e44.js",
    "revision": "36244ed4ba254a98c51d85e401fd7397"
  },
  {
    "url": "assets/js/92.b23699f6.js",
    "revision": "17b2fbf276d795c845f685e66217d2d2"
  },
  {
    "url": "assets/js/93.1f0a3c9c.js",
    "revision": "9d2913da50aabd42489b99deba99870b"
  },
  {
    "url": "assets/js/94.305062ef.js",
    "revision": "4ccad10fda3b603e12b4bc3b81fd9ba3"
  },
  {
    "url": "assets/js/95.568588fa.js",
    "revision": "4a6bd53e50e6f9b18fc84cb251cbf242"
  },
  {
    "url": "assets/js/96.96646027.js",
    "revision": "7572e491047d38bb44df858f6f87e5df"
  },
  {
    "url": "assets/js/97.1f175d0e.js",
    "revision": "57a7f190cb24409b3ed137b3852ca8d1"
  },
  {
    "url": "assets/js/98.44ecf5db.js",
    "revision": "a059d3c6df9867bc00b7eb14b17d14cc"
  },
  {
    "url": "assets/js/99.3d63f1ec.js",
    "revision": "1fa5a2cff6474f999eb040560d2638f7"
  },
  {
    "url": "assets/js/app.fd0e92e1.js",
    "revision": "246390b2f022db2a024d43243ec8192a"
  },
  {
    "url": "assets/js/vendors~docsearch.8bd08f1a.js",
    "revision": "03c088dc541bec2acedf24580ea8930b"
  },
  {
    "url": "index.html",
    "revision": "2a28a3b2e6d7a3a4ec0df2b8c5abd024"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
