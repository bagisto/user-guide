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
    "revision": "028f437e37927cb29c2c779ed3903802"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "996d017f7f580c82e72f4dec173dd18b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "0c63ece98e477ef684d84edbe5428627"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "619a2abcd53e7173847608c3b4245736"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "bdfdab37da633f85e7bdef9cb3cd963f"
  },
  {
    "url": "2.0/b2b-marketplace/buying-leads.html",
    "revision": "bf1b45f346c761ea48efdc83f2e9feb8"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "8d11406813f5395dd7e39ac2a7ab4ead"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "9d7ae529b9bf810ab9ffbfc63a98eae5"
  },
  {
    "url": "2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "25fcd4228306ad2e0b2609b607672719"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "17eff5865e156a7dc90a5112859d64da"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "6727b9b473e61df92ed60986482a2003"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "17862786ae96747def2dddb5c618092c"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "0288b1a056aa513d0befc3e5245efec7"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "faad1bb4dd87c6be48ce7ce299f37a99"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "a7fa0f6c6a006c92de1d8b8c98d08c73"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "5b908195fc246a5c791ec173de14aa35"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "934e6e82debbf05e8c0e563e0b1e2ab4"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "e8139b34840ca984a17dce1ad51a546f"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "177769a041fc18618234edfc870686ca"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "2fed090328657dc93ec85a01e4a5cd17"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "c3b2ca3ac4664ec55c4441ba89951c3f"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "7c93a0d935331512c12bdb087d4589d9"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "68e48785a4f124e093fd681e91cb18ae"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "de5e3c7236e35d5762213ea59ffdfddd"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "7abc3617ac3c0b92855d1de81e052c39"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "46730aed569c8ca2dd91cdf268db3ede"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "99982fb0712f6838e9ead0b5afe2de16"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "1dbcb221ff20e25a5b933ef7aa6cfd4c"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "c7127aad27b0824458675e5a362068a0"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "490c4242f9611e76da6b3b29bc5e90eb"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "80a24f7c7d111dccb7a51d48961975a5"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "97af12132693b83c86047cffb1f732c1"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "35327635a25fb6bc0d8f6b4f91eeb8a8"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "65b4a3d6ee4ee2f8f9df96375b84fd7f"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "e49436b9b7391720f2bc16a3d22f21f1"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "357be806b647514cd370227e6d8b304a"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "5efde49484a1f0cb781aea578809bb64"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "bb4c8e4a9b02cb26defe9682651bd7d4"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "f144f3690b764eb8c4e539026858b47e"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "622e5bc3b2104715fab20097a93d18a5"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "cb06fb8faf379d9d1619bb81373ccf62"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "1858faab6a28ad3f0a10995df5ea6073"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "68aa850756ce5deaa84764fab7aaa42c"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "ea098a751e35679dff00cc07b1b44d61"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "0fd0845e18cf5b0b3ef335eccbe7c912"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "a3bdb90efe2b7b81903802c1bff7b583"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "8c8b48ef71f657b31af0d34472397398"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "d41d1e45ecdea2524d936aea80ce5a02"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "8d53704156075fb3c67d9c1dd1ad342b"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "b9b2a8537acdd33d18688957144832c7"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "0387c23902408ae1b4f7f568c2512166"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "2b1aebe16be177517a20c9e6743c754c"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "b0bac93b526fd521e7e15e1a686432fb"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "1c82f170cc890ef52ba1266f459e7784"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "6473d64c41ac4f87acfff1bc05569838"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "de4d6a7c69ea2945dd416f15cabf9195"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "4653acc3c0a33ab513f398a2c835a654"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "45b789c50b052f299f04ba63e3c43f74"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "b2c87850968f208dda77e440b19d739f"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "c160365371991c3a1e2cf45e7a687e31"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "ab827e5ddd9d7efed17aaecaf40b5d8b"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "76c5ea08d4267807859e962538241aec"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "27bb88fb3db3ff94ba2c2380f6c83d29"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "6e57d041db3e304073b8b03c841a69da"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "30bf76cf39ff590bc1f65621f562fda7"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "dc05b0439a04ad17bbb51c97227169a7"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "b4914a33e6e9a5fc96c92f2251d1e453"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "abdbf9f5a56cc71160a9828b71b7d5b6"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "32a5ab8666e2ad5ce62897a571718e62"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "4d11a369fd9017e6f5ebe2b53c3a7cb1"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "317dc608eabc1bab9ae6ece5d75cad41"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "950b31fd198463e714109a297653640f"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "aa156f62c5f1cd2815f28463f4b2cb26"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "60a9ae7993c80a2df0f009f8d32958b1"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "3e0136f80a02110ee7b1def81844a180"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "6ca2e3303529b6b2e3751fa7def0c0cf"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "fa18ca089f84a0e6c3b63a12ecc16791"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "82abda323fab8a8252cb618b510ff0fa"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "a6ef4d9959ae0d0126e6bb292ae9d5f8"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "7ed8a3059ddc38e083f29b41277efb0e"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "4fa9527627b7d0f7dbc445472726c73a"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "a3d10a3f08b65888b5311869e7eef90d"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "7da72cfd3bfaebafdf3fadf3dc9037c0"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "94afa250bcc2e4bddf88683f0fb76a6f"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "f98581e8bbfb7d49dc420ddd739c9620"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "b59fa17d4935b31ad4aefbd466e70fe3"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "a781e3e5b4ebfc25e5edeb2ef046677f"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "7b89d2404d266269dab1a47794d6c841"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "c735cb90d7e285282f6d27268c1121f6"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "a20e7d787ea1a5de03d70e5311776304"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "924222434d2646e42f20289d7b0a6831"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "794661cf7b09a4e5ad9d5b141b220e28"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "ce1d579d3947f58d393581b3a568f2ca"
  },
  {
    "url": "2.1.0/b2b-marketplace/buying-leads.html",
    "revision": "371d9ab30585196956879e75f18b5e0e"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "5c7b870f97ed2fc760e7b9bbabaee7a1"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "77abe43e3bfbefc6ad27629027f24260"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier-microsite.html",
    "revision": "da1a524214b0d02a64edc9683aeef157"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "1ac136693efe0484f9e3e8c265a417da"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "e4c937de5ee3cdb697e7e0fb6b6e2a11"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "2f9b03fc411ad1d7c604a02388554f24"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "0567c65fc17862402241d442ea26c19d"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "234ea0770e31d199be5802d0360ef297"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "24206fd6bc0d9271c09340b5367063ce"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "2fa795bcb5e570452a3e20ec4dfb0a6f"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "4ac6c334f9a32b4f74d30c0e1928b8a3"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "e39a4767afb1493667f6840651c392b2"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "2fe554ef684c8bb995b0348ddc0a1abc"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "c3695748f8bad2a5df7a4c258188923c"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "6a9bc226a0574cc9c34f527ae31efa75"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "0613c854bb0fe83dc56efe3ec6a55aaf"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "a09f79a7490babe40e2922406089b940"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "e6b2d234a057a594e7dc7bc1e97cf9bd"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "f761913fee04a533634c6c7ea77bb7d5"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "c0504705894ccdaabb58124b567cd661"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "80ef34045bf52ef70be1cfac9fb8e823"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "804b7ae4a00787218ef8c7f821683199"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "af6f7959184ae4c45f15eefe477218a1"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "6ea294b8c5e1699bf96a7f38cd7a56e0"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "11d44847f40b56d6e2b7952f17c840d8"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "e21b418fa96176fe4a1b613ced75c85d"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "3e81d485f956237230b4509e6a7352e1"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "cdf16edc634b427af23431793912408b"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "b8e353c91817076fd9c5cb5267edaf74"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "559f19f2b179ae0e5d4380533a5eedc5"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "d188081a73cd4e04e3a9f0cf46e3a1f8"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "b701ae92bda68ffc95d147c2daa61aac"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "559c39a70554b1616d60b89cc087aa14"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "bff095be11591fe2ce1362e69292356f"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "dc9c51cc8369523ed658b5839e0d52a7"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "b8522ef1800a3f42a61c45541dd74497"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "ab1187d0592d2e34c74f1d4c0f340585"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "d25e73bca0fb39f84f238f7e05e0405c"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "eb45bdc2743338c17b0b150e6c240fe3"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "da5c821bebed4d9aa7b78773e31df5d3"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "803116d82c159371fefe44549310427b"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "468e299cb14e06f7dfdebdf222a6412c"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "29dc82b892711c839bd089114e78c822"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "e4b763e57a8a69a0b2a3f3d1b14969fd"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "b3a36a94a651757f6cb1b7c2ce27aa93"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "68a6b09dd26cd15d080886953a86182b"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "a6fc215cffe22beb1e780f164ab98d86"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "6f7830d90989da8cc5e75bf9e4357b4d"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "79b529d480001aac5a41377665be6879"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "01e6348e83acfadda0bf2081a8976fec"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "b63ba2c25766bce2279a9d1fdfbd1a89"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "1b1dcaeffd3bdec545c316c5832711ee"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "8435fe5e55683ecbb7580d0669c48c92"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "da25b6c052c080853d60f10f94ca5b08"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "9fceb2fd7acc0cca6c2f6fe9561fe648"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "b7e914b4a43c051f2a8862a7b587fdf0"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "e09b95b1aa4367ae52e1c26ab03ecedb"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "2a1d11be3d2855dffa5ccb7c0f74aac7"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "58584a1d7dac16e3d5b1a43d59da1e8b"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "12697950cfab6533a7550dba37f5491f"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "11f97aeef60df27127661545811be6e1"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "04f8e8fe62f4579d0f8fb7d85b9d7330"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "bd3b2b7ae2bd9556b3faf2419da25f17"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "56cd3019d6c94c8f3a9881e68ec15331"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "f5ac4e3e50cbc915a56c86e559b16c89"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "6e45b085062d9a414cca404b916b2dde"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "13142643ca713ac09a669a02259dfc25"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "01caa4de4ed3e374b72fe2ef3dbbe3d8"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "7afd4709939c677e0f425deae9094cdf"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "b0702c1ed789f164e8cd8c80d04e2298"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "489de429652ff192d04801a1d0d24e8b"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "3ac98b2c94aaf032f33676f21309a8b1"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "efc9e6acd9ec8499690358451b68b292"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "81bb2e02d191cd286c7f3bc95fb4e068"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "d1bedd89b4030ba10680085c67856caf"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "31555b6fefb5dd279976c98161dc19ab"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "9ad98d42ca42a40d9b5351da468327f2"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "a2c251d7baee7f2b5091f34131438df5"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "f3939c9c76e4e08e11425a395c010171"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "27e2aacca41314741e0f02ff3ecdd0fb"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "1404a4ea8a89f7c110de79afa198acdf"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "537d7aefb736089b9c099b3d0f66bc74"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "3d8ac83f40261154847ea3238f2134ba"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "5c0ce6df22a52c8d53d4e898db82edd6"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "3e4df435fdd0bae17b02980016c1457b"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "b35a1f8640f4176196b2e6d5eebb324f"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "0af77db07eef65ff849bb1db0467d4e7"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "8c86288b03fe7f934a80df920d1b63a0"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "1189b08410a3b28ec75fddc61f31926f"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "4b58c2c62c419c328b793b8592a18abb"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "0c8d75afd24aa99e2994200844efee22"
  },
  {
    "url": "2.2.0/b2b-marketplace/buying-leads.html",
    "revision": "641f7d5c4f00b8bbdc500d5bdeac4584"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "1b992258943a52b8790d23f5e2fc8fc6"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "1fd75602db05b16474bece291a2bc1f0"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "c2924aea7d7953bbc84c20218e39ef15"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "4f13a6d7bef212ac423eb13551ce7589"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "faaa574a957f8901e278f73e3c299ea7"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "69625485512b62f9bf009c5223ef6096"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "4d4f70297c5e992bd776f18dee9ea419"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "259a6ec926656bd8b59eafc1a3f2e780"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "64a5e36de636cb4a1270ba5c272a627b"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "9b30ee7ece4e5aa94c1a1a8277056cea"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "6c68405c13d870f788ca707ead704b3d"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "2c4839f9b9c5584bb56c71f1fad2b88a"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "f5ce095ca9b9934d6a303bc39bd20ef0"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "f69ff73a6986c4e8026f3fd06b3dccba"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "dcf324d9ead5fd86b4aab5f4ed7b75cf"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "86cafec31a94b0b8094014f4d264d6ed"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "77def2469edc75c5c11b749e16625143"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "1e8da3fadebf44fb272299bfa51f53f7"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "60e0384bc19b079f2c657644e414bf4e"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "663924f6078833d93a68f4494d11a59e"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "df28d48f14af5b379940750ecb619bac"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "2e13cdd7827f8e3df3a58c2c8b21aa2b"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "2cd84c5884176528de0ad9f80421f5f3"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "cd6656a5bf7ba71918552069bfc3bfd5"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "fdcd6afb6f7bf2618e2ce76e632ca78b"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "cca5dd25fe1f80b196ac0719575cf053"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "d70464c054bea6c159fd8946533543a1"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "7e885388339145b356ab178bbf40b685"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "be5534a6d5bf4e73b9530338fd60c1c8"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "843daba3681705dfe5a8fae610d86f54"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "7cfba5a8d2f22fb933fc323fbe5591fc"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "d705bff7a7bbfffd63a85fb954c2ee25"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "aab5249e676cc9bf402c75a689f7f6dd"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "0ab995d4dcd7bacd1f3568bc4f6bbff0"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "c3eca2235b292c2504ff6d94a15edbaf"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "08db2f4d085757f4dfb257a9135466d7"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "e70f6ef812bf028b8bc61a618fc6530e"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "2f9733b497a503eac631e187e2e8a502"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "4e6d997ec3cb635738d4ba2c0cb06717"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "18c409c10e5aba6b5b8e565606dbc8a3"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "b998d22a40c7c8e57233250daf37b82c"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "c861a304dbb1cea1e878a3e4d0909b3d"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "4e1d8009370faabf21233270de876f3e"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "8370bf83065489a916a090557e62b2cd"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "a4672a8ba8dfcb23b6aa31a87d1fe201"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "15853dd428aa2fbd0f83cc2b01fe0ef9"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "2bb486c99fcd97ff2f2f730d90da808c"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "3845fa48ecac0b18ee510b9f583cc311"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "d3a88173acebec2a5e81795637b1ad27"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "23d4516fbdcd14773e940a9de62b74df"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "c2e12e8da693c129841843905ac8c2a6"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "3fa1bec030287520f0b4869672884f25"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "073b58298cd58ef382599a87c2352d89"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "162b3c2aca5bf899d6ec81e02685abaa"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "0ad6c3e0c115622ac46039dfddfecaec"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "f3cac9f8845c49281cafd1bbd9bd253f"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "2f1fc6d4cc2f8e7857f7ad2f6bf1fcd5"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "b564b1861ed5973fc2118efb670a6bb6"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "5e1fe9869f7bb7ee528f5682b86718b4"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "d512e2aaff4ac4b41c30dae0a84430e3"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "907c7dcbd49b80c39dfdc0a49d6499c6"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "ae949e0db927a641e0688c3942484871"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "89789177fde8c0294f79101906893f31"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "58006f628d24a5a22c61197771d3064e"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "6604b064f94fa4f9a2de5f33948b55e1"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "86ef825b8e7bf54f9af902a3dacfd8a5"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "b7310d5475ff3d5f23ad56d0a3fb2732"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "fcb6b2e3f06bcc72d26931d96bc912f6"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "53a1360b62fb268da4914f580dd8cd66"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "cd7f8ae63d47f9389b3bd284bc922ed5"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "97cedae9f821030e0547bc3a615f19ba"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "ac953128ed45838e2b59b9f5215c4391"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "7abe8c10df0bf4f9f0bb8a34de608808"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "3bbf2094c673c46deb020c8b5e31e33f"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "1d973e196578d8a914ea44de7c658363"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "07c79768942c96edcf074b346c05601e"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "0f0cd9169f5c45a89ef50a3cc8967738"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "9b37cecd40c26cbf0db4629b50a64111"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "998eca95826b3c91f3c3f84eff1ebada"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "1f662f2e2b8b0d0d4d8e9ddf6d70650f"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "67b952497f7ac289a05e6532fa1ebf0d"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "46e530b5aa3221ad022dbe16a1faed4e"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "681c70d54d4040b3332dcaa11ad53456"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "c38924fc429f757aceb00f9d65af3631"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "d1842d6a6b7fda444b06ce8cd6913c7c"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "42992efef980fff9317cfffe4caa60ca"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "6ab52bb85b7fa4d31e7fcc3775e0c5c9"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "aabbe7ebcd8d2d2267bf3dffdf4d2144"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "4a40b18c7bfaa4f7bcaa867df083d571"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "3ed7cfcb559ab191d4ec38a3d9c3b8f7"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "c9f61583f159d3613cd3dadc9c55d3d1"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "f5d9635c1555d9e7f64a710187a1eb7a"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "3de8c49ceb63379f948e37d1ba343821"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "b6095f28f9a1b607fcc5610e0a7754d2"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "603d114a2592ee1d1a63408f07338016"
  },
  {
    "url": "2.3.0/b2b-marketplace/buying-leads.html",
    "revision": "610af9c77d42355c045c33dbb483039f"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "90534f4dd2a7f298c36558eafc46fb33"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "21b400ad549480327571fc665498bab3"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier-microsite.html",
    "revision": "cab6547c7055f341418c5376281c9b02"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "a72a76bab5082f8eb8a5a52e67479775"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "1bfc169cd9091116e685d13930822685"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "acdced9239ee2e23a922c6ecca388134"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "6c5ebef822c4e998dfe437ad0d141593"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "ec81c82dd46fa7e367d303ef6b1cfd85"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "36c71ad0e30c3062cbda2c46b0621487"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "40b4a7679409b99b8352c5c2530c31c2"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "a54d81bff3f38a6f22b06348df2be29e"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "af2d9737a62f3a6bbdf0b173073df333"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "93db8c6171c1f8ac5d4f7fe2958fb78a"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "c10f688e7711d324af1c037b6131f7f1"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "7d54ae0af5fdfc4611daf0e2d11b8268"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "b479c8ca576237fe13e32001eea5ca17"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "81cbe5b770dc3aa9c40bb590a0978ec1"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "52c2eb6932cb08a73ca0f83003fc01c1"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "f8fc119788178cc7f0f39ff5371cab3b"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "4cf81c2ed024a3006700d0076e95d60d"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "2625a91ab9e95320af8d63f10cea9f4b"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "20e23806b937a83f503c41cc4d6cefa5"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "05f1e4069aa6e1d559b8c75142482876"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "ce24fa1184cf89bec686a9d58d37b66b"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "8f72c5253237ce7764c8c3811f61871c"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "0b89f0a4805d0ad1f03a15ee19ae777c"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "f1986ab96d9bef692809f4eabf6426e3"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "1d728a42dfa853648a6f03eba5704725"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "ce58e52e7ba0fe90cd11e9d6e884daad"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "dcc3b54cd0ee0f98a6228853bce9fa01"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "21a3abf5bd74e1314ce5bafc37abf9a0"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "e20e09f72898a257b655ecf51cb7c66d"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "01faa6f4d939ec6d00f895c0280c9aa3"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "70cff0fbcdf319d31bee7eb0ff9da9a0"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "a559a99ccd6d6569a9593c56ac0764f6"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "7840158d5f0d8f883c051d04e77eb2c9"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "52ba2c31170dbeb80c4f914342448f97"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "b7ad1b3dc46d99a99c58be2a8f532010"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "e4cb457cf79712723abc1e3485fdf02b"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "597dd84e5d0fa1a2c4710fb596762749"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "7279a1158f8d0d9f9de3ddaa0b2dc79b"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "502ee5a7af324dcb613696bc5dc0ac08"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "dc724304e13637c2d8968b631e9310a2"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "23d4d808c0aaa9b0c7cb2efc3dd105b1"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "6613ee686f3418e6d1d05e628ccde642"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "5bb3ca744fe672e5bdb2ab6668c2eea9"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "8224c065f605eb3333a6c64f32112330"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "c80bc5ccb8227cb61060e88505b7f8b2"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "7118cf9f6ef89a2c00d5d66350850642"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "d12c9f2a4f4b6815882c72b9d702bb70"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "f31cc78fde9ef9ef73bcc36a149aab4f"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "be5d9ce8298a528d6963e851da835e9e"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "1f7c3af311b21fa2cbf0d4c75d3a30b5"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "61c9ce941ba9d08b227f90741d99ab98"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "c7d2f1e4102d7fbf3ca566c38c09a305"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "cdd5559d8b9a7e2ca769796fa961d21b"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "c2beb2ea3372d2c80f1acd843fac415d"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "fd2dbc569bbc81e2e0f6ce785568eaeb"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "db36d5623abc0778e5926e663966a281"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "f50babb292aa7923c4a4a5e0bcb10231"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "855e4285b1ae5c9b517916e487b0cf9e"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "71c2151aae9f18a6b0bdc1c113220b50"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "c740c3491c0fdaafa2ee949bc875e11c"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "acf4b7b604186b7ab9cee38b1c6e8080"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "01280b2c2b207e2a5f096c21e695c7c3"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "ebbbe521323cdcef6416cd964c2cacf8"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "bebe3724ae97237d0d381d3620ff60aa"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "2978e5ee906c0d57134e1b23ea1db34e"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "aa3624bf537e743bc4054ae9ca9d3268"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "1002f1d052ea39b9a22db938bc6153f1"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "472e43f272183a603107f7c45af1468b"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "f8b4d2f856fb3ad92d2240f94b22f53b"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "66d16f8816f035dec54ceb8e725d7f7f"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "690e9fcf48dc966de405c6ca45f66482"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "486d25ca0d398098d690d465103d7e4a"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "cfbe283151d9a34414e5f81d19ee30ed"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "d78de8e1fec95a7213ededf581949f9d"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "6b7e0e89d89801337cbb8b40dd741751"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "5d29662d17821e8fc03a2a5e9880a30a"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "13f8c834d245bb0085453a28a000db2e"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "41ae89e6558d05e89ce364751c592c7b"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "012b5262a80934d8f66ef19d5f87acbc"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "0166627663e90fb63ebf7e4820b15eae"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "c95a21312a46d097e8a4359c7b0c189a"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "d8a46304255d69820b3359983162bb52"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "ec6950276dc3ae86d11128c1f991e588"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "bd479a80b3738a4fc6a97eeab8af67a9"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "c62a256bd0ca5061e8ee32581e9c05ed"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "0fab71a91982d4f174fef676901aa925"
  },
  {
    "url": "404.html",
    "revision": "d777254e22dfbb0ca6b0aca058368679"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
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
    "url": "assets/img/2-seller-transtion.e2c2379a.png",
    "revision": "e2c2379abfd3bf215c83d713ade1ff85"
  },
  {
    "url": "assets/img/2-super-dashboard.d91b3a81.png",
    "revision": "d91b3a81ae12582126709895b66a1057"
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
    "url": "assets/img/3-super-create-tenant.f662b40f.png",
    "revision": "f662b40f10c73b59d905b793d8041d23"
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
    "url": "assets/img/4-Super-tenant-Insights.bdd69873.png",
    "revision": "bdd698736b2573973d6e005b76b19a9d"
  },
  {
    "url": "assets/img/4-supplier-approved-by-admin.dd11d306.png",
    "revision": "dd11d306bad1810709f8c4d18c316bbe"
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
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
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
    "url": "assets/js/1.ece2f387.js",
    "revision": "ccc24e4429f2addee0d223adf825ca25"
  },
  {
    "url": "assets/js/10.6edf0bb5.js",
    "revision": "971788dbf34c0fe1e3e82b8fe9bce8bb"
  },
  {
    "url": "assets/js/100.2b6ffd8e.js",
    "revision": "8521dc25340814208682e70100ff392b"
  },
  {
    "url": "assets/js/101.21c29718.js",
    "revision": "919495b6d2d2e106f9716e4a4005fd9a"
  },
  {
    "url": "assets/js/102.4529f662.js",
    "revision": "a13bbf1532a85b0feebdda126c52cb28"
  },
  {
    "url": "assets/js/103.e905a578.js",
    "revision": "4239c89c76e2535ebc8d7f3be5f37433"
  },
  {
    "url": "assets/js/104.bdf6051b.js",
    "revision": "9d480a1d9a4c60ede66d635447b7dc79"
  },
  {
    "url": "assets/js/105.a9c73528.js",
    "revision": "d96908e17f46671b9df1f95fc13a7f0e"
  },
  {
    "url": "assets/js/106.3ef35a0a.js",
    "revision": "9d2a2ddf21eeaf165c973b9963be1adc"
  },
  {
    "url": "assets/js/107.a4a242ad.js",
    "revision": "8a67e5e05d27de4b4c80136c81cc6679"
  },
  {
    "url": "assets/js/108.91843ea0.js",
    "revision": "6fc49b3fc441a60f83d2c4d2955c7daa"
  },
  {
    "url": "assets/js/109.79cbfa20.js",
    "revision": "ba20d0c058df0edf54486b350f277719"
  },
  {
    "url": "assets/js/11.b9be4dfb.js",
    "revision": "ef4dfb87208075aa66873d43601a722f"
  },
  {
    "url": "assets/js/110.993d84ed.js",
    "revision": "01355bdef37b62c6df7df7a070d691e9"
  },
  {
    "url": "assets/js/111.2fed7b08.js",
    "revision": "304742bd1a4c3fed209abfc25c80e69d"
  },
  {
    "url": "assets/js/112.9a4b15f5.js",
    "revision": "af55e3d91f58508405d1430ec2a76bd4"
  },
  {
    "url": "assets/js/113.ff922749.js",
    "revision": "ee0083229c3847fd3cf79f8d29690524"
  },
  {
    "url": "assets/js/114.042d6aa1.js",
    "revision": "4396dbc62d415ad240760063abf9954f"
  },
  {
    "url": "assets/js/115.509f775b.js",
    "revision": "20c31a0f830f1e87dcba22cb26fda389"
  },
  {
    "url": "assets/js/116.279e41ab.js",
    "revision": "f0393724cd3ce246f8be510474878c2e"
  },
  {
    "url": "assets/js/117.f58a71e0.js",
    "revision": "eb61fa63da8cd099430057be4630c8ae"
  },
  {
    "url": "assets/js/118.db567ff8.js",
    "revision": "0942c9e4d94a31a8148ba3da71846189"
  },
  {
    "url": "assets/js/119.57d1aa84.js",
    "revision": "3bc3c7fd92abc330c4e252d3c2e36438"
  },
  {
    "url": "assets/js/12.2232fa6a.js",
    "revision": "fc91c2c7e42b36162da884de42276cf4"
  },
  {
    "url": "assets/js/120.debd575f.js",
    "revision": "03fe028d451feb3bff87db82526228a2"
  },
  {
    "url": "assets/js/121.8bc5df8b.js",
    "revision": "150cd671c7d4f716fc334e32ed453025"
  },
  {
    "url": "assets/js/122.56e30a8b.js",
    "revision": "59f3aeb28da5b6c3e45d594d11e81533"
  },
  {
    "url": "assets/js/123.53d26adc.js",
    "revision": "0f528a192919821e5abafc091d335d99"
  },
  {
    "url": "assets/js/124.1aab44de.js",
    "revision": "cd3d2eff4f271a2ec51b86f907e525a9"
  },
  {
    "url": "assets/js/125.58e8b10f.js",
    "revision": "d119f273d3b4c6550854785cc991839e"
  },
  {
    "url": "assets/js/126.fbed374f.js",
    "revision": "16f7c0d9aa159d4f54d5822f4373af40"
  },
  {
    "url": "assets/js/127.84dfc1a9.js",
    "revision": "8640bb06cec42e112c5e1d89687675d8"
  },
  {
    "url": "assets/js/128.9f5f9666.js",
    "revision": "2b381e52e2e47805ebeebeb32659a094"
  },
  {
    "url": "assets/js/129.05252d7d.js",
    "revision": "9b9a62def5d8f0da52c47bbeadd1ecaa"
  },
  {
    "url": "assets/js/13.63951082.js",
    "revision": "aa8a96716c7e2cb01d840223c44bcc2d"
  },
  {
    "url": "assets/js/130.f3c8c190.js",
    "revision": "70149142d905638f3a7b5b31668d0f0a"
  },
  {
    "url": "assets/js/131.b02b4898.js",
    "revision": "4622214220931d9a1145e3dbc70d6a31"
  },
  {
    "url": "assets/js/132.345cc59c.js",
    "revision": "7428c0883ca9a26f1c46b2264cc0b352"
  },
  {
    "url": "assets/js/133.d071d7ca.js",
    "revision": "ae30a15766a186621c294e11b6e8b25c"
  },
  {
    "url": "assets/js/134.426377d2.js",
    "revision": "e639319d3591ae9512216861ea5f2741"
  },
  {
    "url": "assets/js/135.5d8c88fc.js",
    "revision": "7456061ca4922a5375bb36d6239421b9"
  },
  {
    "url": "assets/js/136.cf6a7c58.js",
    "revision": "3bc9abcb5e5d48b8a95f97f7324da48d"
  },
  {
    "url": "assets/js/137.29d154aa.js",
    "revision": "340a7bc242264367733d58066b281609"
  },
  {
    "url": "assets/js/138.c3aad807.js",
    "revision": "62a00515700ba4838f60d6f531ce3395"
  },
  {
    "url": "assets/js/139.d1ac2225.js",
    "revision": "5f8bb2719b762c8d8ee94b801f2bf602"
  },
  {
    "url": "assets/js/14.ab0cd9b6.js",
    "revision": "08741b5a1bf58049d7e4da2368cc6d37"
  },
  {
    "url": "assets/js/140.57f970ce.js",
    "revision": "d13bf1c2d8bf021091de7735cad1ec77"
  },
  {
    "url": "assets/js/141.c82037d6.js",
    "revision": "0ed976b34a723d25fb0d3ca963a8c332"
  },
  {
    "url": "assets/js/142.1043b3f8.js",
    "revision": "2ba49e1a86c347361753f6f40249b7b4"
  },
  {
    "url": "assets/js/143.de719e58.js",
    "revision": "f232dbdac3eb578e9511a2e065fd0987"
  },
  {
    "url": "assets/js/144.bd5a94d6.js",
    "revision": "d1b2e2acd7a8ea577bc2bb6d586b5862"
  },
  {
    "url": "assets/js/145.ca3997ab.js",
    "revision": "3ac5017838c699c2c4cb8f08defb75f7"
  },
  {
    "url": "assets/js/146.c6ab0ec6.js",
    "revision": "a72eaeaeccea0a78585524e14ba4f9d2"
  },
  {
    "url": "assets/js/147.9199ad26.js",
    "revision": "2b681115e2e75c6917ee8c6cf426ca63"
  },
  {
    "url": "assets/js/148.857c98ad.js",
    "revision": "7a1223e046f89e9e7f6d65f00eb05e54"
  },
  {
    "url": "assets/js/149.f4b2c5ca.js",
    "revision": "40e3b69dc90fcac78846fd0dcaffe6d5"
  },
  {
    "url": "assets/js/15.0f69cf1a.js",
    "revision": "1e6a8ba822852f3396c5c5217c2ab118"
  },
  {
    "url": "assets/js/150.2b6d80e9.js",
    "revision": "dcaf57f7294a5ec8b7257e234336eb3a"
  },
  {
    "url": "assets/js/151.5e6b6fcb.js",
    "revision": "61218aa11277048091a868c92e799eb4"
  },
  {
    "url": "assets/js/152.d891068f.js",
    "revision": "ff5ebecd50cb4f01646ee7073badea23"
  },
  {
    "url": "assets/js/153.1eaf4e38.js",
    "revision": "1ef52d225df5bc1d2048d5fcd921b264"
  },
  {
    "url": "assets/js/154.1cbd32c6.js",
    "revision": "dbc9b154f657909b732c351b9d6db8b5"
  },
  {
    "url": "assets/js/155.4ba1dce6.js",
    "revision": "8d2745a489d663cf4259b51cbaa322d8"
  },
  {
    "url": "assets/js/156.b95ed211.js",
    "revision": "33fc0e96c165f5c7f3d47215b3144568"
  },
  {
    "url": "assets/js/157.d8d50e11.js",
    "revision": "dbe3fcf8469cde9cd87e0c0bd8ae879c"
  },
  {
    "url": "assets/js/158.6ba9f1fe.js",
    "revision": "18e2b2d9d135c3b77c92b931519bcdb3"
  },
  {
    "url": "assets/js/159.e79aaa34.js",
    "revision": "334ae7c598fdf96e8d41de1795b32690"
  },
  {
    "url": "assets/js/16.f7cdf332.js",
    "revision": "6eb4fbc759e7a2a15d5734b5578ef47d"
  },
  {
    "url": "assets/js/160.9ed3341d.js",
    "revision": "f15419629f2f1140ac81f35500810d76"
  },
  {
    "url": "assets/js/161.ecce2c50.js",
    "revision": "17b0273884451154b06aadcbefb1aaa6"
  },
  {
    "url": "assets/js/162.36f34e3d.js",
    "revision": "bca9eb3ec4e6a4ba2fd85f7d9022fa24"
  },
  {
    "url": "assets/js/163.ed569fa8.js",
    "revision": "a452cf78fe402c2938b9ecbbb77dec72"
  },
  {
    "url": "assets/js/164.37ec65fc.js",
    "revision": "651ea41c64fbe5d93dfb52cfbabe8d2f"
  },
  {
    "url": "assets/js/165.a82c4a4b.js",
    "revision": "85fca8d0fc7ca288e89a261f52763000"
  },
  {
    "url": "assets/js/166.b0cbe496.js",
    "revision": "76bd08688e0e1c73720f8274bc54768e"
  },
  {
    "url": "assets/js/167.6afc5e4c.js",
    "revision": "530b36aab37ddedd7b025b6666c23c4f"
  },
  {
    "url": "assets/js/168.eecd4279.js",
    "revision": "60145b853c855ba1574ba88bc4eec789"
  },
  {
    "url": "assets/js/169.74592678.js",
    "revision": "7c4aa64a840e4b04876b721ecce2fdc0"
  },
  {
    "url": "assets/js/17.1b66ced5.js",
    "revision": "be248a716ce7714dca82bf76deb34507"
  },
  {
    "url": "assets/js/170.86568920.js",
    "revision": "6261f6d976270c2c27453a98e7f50335"
  },
  {
    "url": "assets/js/171.c4dee810.js",
    "revision": "c7b484a7ea93ba9d2026648feff140e5"
  },
  {
    "url": "assets/js/172.e6e030f2.js",
    "revision": "a59d9022f0a0fe36391dd5dfbfc0bc99"
  },
  {
    "url": "assets/js/173.9d902cd3.js",
    "revision": "5ab4fe0917b58c42b47229c6ecc84623"
  },
  {
    "url": "assets/js/174.c08ec4a1.js",
    "revision": "4f1ae999da24f393692c5644367b2411"
  },
  {
    "url": "assets/js/175.23c22878.js",
    "revision": "4ad201c48ccc010754dda4405283367f"
  },
  {
    "url": "assets/js/176.fc707418.js",
    "revision": "d679df19e5ff7bf8508df4307739a02c"
  },
  {
    "url": "assets/js/177.6f2d9c3e.js",
    "revision": "03eddfae2135f7745d2014531f9cc57d"
  },
  {
    "url": "assets/js/178.d5c3e369.js",
    "revision": "21199a6f1f2c82eb813b449cc160dc70"
  },
  {
    "url": "assets/js/179.88079177.js",
    "revision": "b89780315a507f956e86a62e9eef5fbd"
  },
  {
    "url": "assets/js/18.d71b7a33.js",
    "revision": "26965723a7e79f5baf8ac073c944ccc2"
  },
  {
    "url": "assets/js/180.6fc9dfd6.js",
    "revision": "fd61fe322b83de48b375875cf63dc8cd"
  },
  {
    "url": "assets/js/181.895fa387.js",
    "revision": "cd2790c43451c389f02d6c69a1f8cb55"
  },
  {
    "url": "assets/js/182.1d67a10e.js",
    "revision": "7019147403ef55da779030129d83a8d2"
  },
  {
    "url": "assets/js/183.a11c9ad2.js",
    "revision": "576b79beb9a9724302c1f01db41fb96f"
  },
  {
    "url": "assets/js/184.6bd3f8dc.js",
    "revision": "f974d455caa095d27b3d40613d2c5709"
  },
  {
    "url": "assets/js/185.41467118.js",
    "revision": "7b4a212c45645ed311bca85f80365561"
  },
  {
    "url": "assets/js/186.6f83ebc3.js",
    "revision": "7396b80e1446bc59e1dbfb9b69c8e6ea"
  },
  {
    "url": "assets/js/187.1f40a0e9.js",
    "revision": "a7b62b535bc738365724b257132278e9"
  },
  {
    "url": "assets/js/188.bbd6e8e9.js",
    "revision": "4528f5b2caf584a96640254d903c84e0"
  },
  {
    "url": "assets/js/189.9ccb27af.js",
    "revision": "90a02d926978c045da44ee3fe781d235"
  },
  {
    "url": "assets/js/19.5ee2bc75.js",
    "revision": "02fa1f21512d4aabd28d7ec5132c053a"
  },
  {
    "url": "assets/js/190.134a6296.js",
    "revision": "1d44565ed49272ed896faa70c27ecf52"
  },
  {
    "url": "assets/js/191.3b6c97f2.js",
    "revision": "692512b0c78e1a97345b1d4cd4717d1e"
  },
  {
    "url": "assets/js/192.2b201188.js",
    "revision": "6a482437fdbfc75ba971aa4e0bf41c31"
  },
  {
    "url": "assets/js/193.1904753f.js",
    "revision": "c97a24353a646a8dc92dc81f3e0ada8f"
  },
  {
    "url": "assets/js/194.b37bcfed.js",
    "revision": "f04490e05ffe9644ff2f702e55e71e95"
  },
  {
    "url": "assets/js/195.038c6087.js",
    "revision": "f0b1baea91a5f5915570844798109059"
  },
  {
    "url": "assets/js/196.aea95b2c.js",
    "revision": "7413adc62ea8a49f401a74c161190921"
  },
  {
    "url": "assets/js/197.9586417b.js",
    "revision": "416fd04ec6dfddf91baeda8912824ed8"
  },
  {
    "url": "assets/js/198.96f6d69e.js",
    "revision": "9fc7dcc67eebee9391cbb9df1c52c066"
  },
  {
    "url": "assets/js/199.41624ce6.js",
    "revision": "0a886d719840cdeaac1eb8b3a1c9405b"
  },
  {
    "url": "assets/js/2.9bb1ea4f.js",
    "revision": "18407e2a6ba239d7be0377fe0c7bbf1e"
  },
  {
    "url": "assets/js/20.75faa101.js",
    "revision": "2be8aaaa50ed2c00f9aa6d9057c880e0"
  },
  {
    "url": "assets/js/200.9c93c43f.js",
    "revision": "ee2f387a150328b671f045ed09e0bef4"
  },
  {
    "url": "assets/js/201.c66e7cfe.js",
    "revision": "8b9fde1f33c1a7a7c819218c2c979ba3"
  },
  {
    "url": "assets/js/202.5798b230.js",
    "revision": "d0f2193139cffbabbbd34a3f8d2b84a5"
  },
  {
    "url": "assets/js/203.d4cef5f8.js",
    "revision": "781aa8ee718720e9c5b189ae486c20ab"
  },
  {
    "url": "assets/js/204.cf217abb.js",
    "revision": "2366517a117aaab2e35fa56c3d3dd201"
  },
  {
    "url": "assets/js/205.b8d25b80.js",
    "revision": "06e0df51a4fb75907a0a04473e7d8893"
  },
  {
    "url": "assets/js/206.d6af5e1e.js",
    "revision": "f7747de8a5bd1f261100d01b03e8da5f"
  },
  {
    "url": "assets/js/207.8d9571ee.js",
    "revision": "c9b5edea9a44debe8eeb93790edcf026"
  },
  {
    "url": "assets/js/208.1c7aa99d.js",
    "revision": "b8610c901a64da53086265c9313d3d14"
  },
  {
    "url": "assets/js/209.f77a2406.js",
    "revision": "6e0f2f4a0de79f6034fe8cfe2c87f483"
  },
  {
    "url": "assets/js/21.c2b79be1.js",
    "revision": "97baecad753af09fe5d1ead7f55a6cef"
  },
  {
    "url": "assets/js/210.bfda2eea.js",
    "revision": "e2a7ff2076a8f93372bfaf46c2fd745d"
  },
  {
    "url": "assets/js/211.4fbd16cd.js",
    "revision": "13858e9016c5cf69ccf9a2ea290371f2"
  },
  {
    "url": "assets/js/212.b072e251.js",
    "revision": "4112c59741d1517bb61324e3de489097"
  },
  {
    "url": "assets/js/213.d1a3d6f7.js",
    "revision": "8f903fc1047f19cb7b74506b1deef562"
  },
  {
    "url": "assets/js/214.771cd816.js",
    "revision": "9fec4b7bae3c29f14b6339f316a80e84"
  },
  {
    "url": "assets/js/215.1b593e86.js",
    "revision": "5ee7113c49e4de74ab2c42402e0f0e45"
  },
  {
    "url": "assets/js/216.04f53c77.js",
    "revision": "e85bc311f0f630da790461578770c2e1"
  },
  {
    "url": "assets/js/217.8f335d22.js",
    "revision": "e83de954079f437a4b0f8d874563d776"
  },
  {
    "url": "assets/js/218.d3254954.js",
    "revision": "4ecefb384c54df073532578f818f24a1"
  },
  {
    "url": "assets/js/219.5471c942.js",
    "revision": "bbb8bfc4c3ef6ead88f5d1c3fe4c183c"
  },
  {
    "url": "assets/js/22.b1197da9.js",
    "revision": "85d235e86f7e88f03226f9bc8abd8757"
  },
  {
    "url": "assets/js/220.d71208bf.js",
    "revision": "63c674b349f93336ea0661e827ff59ec"
  },
  {
    "url": "assets/js/221.e94bdc02.js",
    "revision": "83e72a4176fe3585b292689f77b58a15"
  },
  {
    "url": "assets/js/222.12e6caf1.js",
    "revision": "0e5eb35ee5e2379fbf43ac8494450864"
  },
  {
    "url": "assets/js/223.af073cfc.js",
    "revision": "d80f5f8c83a5edd2ea3141669dbeb240"
  },
  {
    "url": "assets/js/224.7175f0a5.js",
    "revision": "2936e7971f2d23e55e2c87a51c72bc31"
  },
  {
    "url": "assets/js/225.4e6ac5cd.js",
    "revision": "25cff05f5664d08c3e520914f4e22c2a"
  },
  {
    "url": "assets/js/226.02457adc.js",
    "revision": "44ea3ffda6493fa8d7c92543cc64dacb"
  },
  {
    "url": "assets/js/227.de25856a.js",
    "revision": "b2774b0b3bf31bf21aa260c67de735bb"
  },
  {
    "url": "assets/js/228.dd97a2fe.js",
    "revision": "0fc4a322cef6f957610fad9bf6cc8ea3"
  },
  {
    "url": "assets/js/229.e81218c8.js",
    "revision": "e7ac9881077fa79715d746b2effd8ad7"
  },
  {
    "url": "assets/js/23.2fd81e81.js",
    "revision": "35b0b01e5e4aa852cc93167a7a1c0470"
  },
  {
    "url": "assets/js/230.7e671d23.js",
    "revision": "91432876362a21855014609fdf17d014"
  },
  {
    "url": "assets/js/231.f5cb4ad6.js",
    "revision": "5162f9d8a5ec2bdad16a84478c72c97d"
  },
  {
    "url": "assets/js/232.3c0fd3c8.js",
    "revision": "ed23e72a012054f0641e0d282b173626"
  },
  {
    "url": "assets/js/233.8c43b318.js",
    "revision": "4216c294c7177ae1469baf906e336620"
  },
  {
    "url": "assets/js/234.b13d3d75.js",
    "revision": "0ab7d6e9afd68ab1c09098bba12edb85"
  },
  {
    "url": "assets/js/235.6aeb3cc9.js",
    "revision": "b64562745adbaf02e027dbcce8b8e976"
  },
  {
    "url": "assets/js/236.3c7b08f4.js",
    "revision": "46f6ac3b64c63adb2360c7cc1e6b78d7"
  },
  {
    "url": "assets/js/237.e232bc47.js",
    "revision": "3df774108798fd0c8c1674c96736f956"
  },
  {
    "url": "assets/js/238.9d850051.js",
    "revision": "62077d6e00edd6f83d40a5c8824340ab"
  },
  {
    "url": "assets/js/239.50165c25.js",
    "revision": "73f14eddfd67a946839169f8c3291bd6"
  },
  {
    "url": "assets/js/24.e592ddc6.js",
    "revision": "04899d52bc6b50f70521e280088eb255"
  },
  {
    "url": "assets/js/240.120157b3.js",
    "revision": "b4c2a373b035c583b8d3810201a16721"
  },
  {
    "url": "assets/js/241.88e35526.js",
    "revision": "2fb135d19a9552513ffa8f4e1bf3ad87"
  },
  {
    "url": "assets/js/242.815006f5.js",
    "revision": "6b8aba6ff7f6d851cfa96215fafcff45"
  },
  {
    "url": "assets/js/243.1bfb7db8.js",
    "revision": "462d95750907fc6df7db8cde70a1d840"
  },
  {
    "url": "assets/js/244.3c82097a.js",
    "revision": "bbb43607724b0b19247113e2cd522dd3"
  },
  {
    "url": "assets/js/245.00a9ee61.js",
    "revision": "319446e6212de0167793be4079b37b16"
  },
  {
    "url": "assets/js/246.59061d41.js",
    "revision": "db5b987ba0b56d585244f0ea5aba6e8a"
  },
  {
    "url": "assets/js/247.2908c833.js",
    "revision": "b68bcb1ba11563d0d69ca65278413292"
  },
  {
    "url": "assets/js/248.922c0b95.js",
    "revision": "b3b0cc03ea044a176673804924ea7c1e"
  },
  {
    "url": "assets/js/249.6acaaf22.js",
    "revision": "f46d3dddaf0d58579a267914a20f4e06"
  },
  {
    "url": "assets/js/25.7bf6b6b0.js",
    "revision": "26d74632c2fc09296b0cb0c11ecb40ab"
  },
  {
    "url": "assets/js/250.b0a3e9f0.js",
    "revision": "b84040defea50191c1e4ee483437ab51"
  },
  {
    "url": "assets/js/251.969a33bd.js",
    "revision": "e84eaa2ba94d6089d4bd68ba7d977ae5"
  },
  {
    "url": "assets/js/252.045f52cc.js",
    "revision": "0f41de7c3664002d82f267e7931d8a3a"
  },
  {
    "url": "assets/js/253.40ce68da.js",
    "revision": "f7a384488b6d11117c76a0782dfef8c7"
  },
  {
    "url": "assets/js/254.957c2292.js",
    "revision": "25a235bf44664895693c1374b4e8d9e6"
  },
  {
    "url": "assets/js/255.64fc676b.js",
    "revision": "33525e3b3f4d47a43c7805a1a1391ce5"
  },
  {
    "url": "assets/js/256.49264bc8.js",
    "revision": "610ecf6b1ec3ae6884d51223d1cc6a9e"
  },
  {
    "url": "assets/js/257.3896b21e.js",
    "revision": "d383d27844ad84da8e3c13c66256c535"
  },
  {
    "url": "assets/js/258.c97ec6f5.js",
    "revision": "c4e9a8ffd3ad7541b0d7981ef8bedb89"
  },
  {
    "url": "assets/js/259.e7b408c4.js",
    "revision": "de3eb657defd2516192efa98c3b176f7"
  },
  {
    "url": "assets/js/26.7c620046.js",
    "revision": "3ae0f2e1e556e7a3e3451478f068163a"
  },
  {
    "url": "assets/js/260.fc6100ee.js",
    "revision": "71b8ae43fc67c645697456de7f1469e3"
  },
  {
    "url": "assets/js/261.924c9053.js",
    "revision": "cda7096f848f4e4c7c5062da31a00b73"
  },
  {
    "url": "assets/js/262.de2f8b36.js",
    "revision": "2b6996ca9d0bb0cc45b524dd7e6b77c8"
  },
  {
    "url": "assets/js/263.fa77dfc0.js",
    "revision": "591ff9e9fc20cf751a833d4baf6e8088"
  },
  {
    "url": "assets/js/264.99df360d.js",
    "revision": "d8595df986f463a1bbe715726e08b133"
  },
  {
    "url": "assets/js/265.9f65fb81.js",
    "revision": "ff7404f6ba002f7691e301a0c2b8de51"
  },
  {
    "url": "assets/js/266.b928b752.js",
    "revision": "25d9de86196dbde64f955c1041638544"
  },
  {
    "url": "assets/js/267.ecab3037.js",
    "revision": "0ab084374da064d106249b35d5b8dabb"
  },
  {
    "url": "assets/js/268.24970da3.js",
    "revision": "6d24d2549746e17e190dd388d4b01599"
  },
  {
    "url": "assets/js/269.c20982d0.js",
    "revision": "4f23d0934124c88a2d022464090e9924"
  },
  {
    "url": "assets/js/27.590c55fc.js",
    "revision": "ecc99b2cb8852ccaaafddf7df4489f21"
  },
  {
    "url": "assets/js/270.b7e37cf7.js",
    "revision": "53a2b25eac8a4bcb05af7738f625c82d"
  },
  {
    "url": "assets/js/271.85ea11d9.js",
    "revision": "e96e0e6f2572bb036802de6ceb92eea8"
  },
  {
    "url": "assets/js/272.8aa5c8a4.js",
    "revision": "7a0d3543cef42443c8017fe00bf773c8"
  },
  {
    "url": "assets/js/273.3aaaf8f1.js",
    "revision": "ea14e316cba6a39ce54d05decc779794"
  },
  {
    "url": "assets/js/274.2379300f.js",
    "revision": "22b714db29555c2590b670f597922905"
  },
  {
    "url": "assets/js/275.2d2423ee.js",
    "revision": "88bd2e14e321d4b356644fa6cdee78c7"
  },
  {
    "url": "assets/js/276.fb568f49.js",
    "revision": "2d554465ca8734ef431c70da3a8c225d"
  },
  {
    "url": "assets/js/277.1d63de3f.js",
    "revision": "b6cd5ac3bb230d6a55b640b7f907f2a9"
  },
  {
    "url": "assets/js/278.0b38fc70.js",
    "revision": "9effd23425cc8a15d65e90d6c17655c7"
  },
  {
    "url": "assets/js/279.1757a285.js",
    "revision": "a543816a0236b9f202c6a12ddcc69bc3"
  },
  {
    "url": "assets/js/28.26d48e90.js",
    "revision": "166406c5bd57fdc2685ddff4179e4f02"
  },
  {
    "url": "assets/js/280.f76b5aa6.js",
    "revision": "7a23d1543ddef4b5fa9093cd1a22baf6"
  },
  {
    "url": "assets/js/281.82ac3b54.js",
    "revision": "0ffb449b9f41dcac0273ab992e0f0269"
  },
  {
    "url": "assets/js/282.5a228cc2.js",
    "revision": "07784cfcabac81dcb4fa10003df8158d"
  },
  {
    "url": "assets/js/283.606df436.js",
    "revision": "7c671bba7d4b790a825b79bdc6fa5a98"
  },
  {
    "url": "assets/js/284.03f46c53.js",
    "revision": "9b2b0a8bac500ce2ccd9c2daaa5537a6"
  },
  {
    "url": "assets/js/285.0ccc5667.js",
    "revision": "4fb054e9b38853929d497885c29bba1f"
  },
  {
    "url": "assets/js/286.48b85436.js",
    "revision": "feecd9f7c1ce2af1a08630cc1b04331b"
  },
  {
    "url": "assets/js/287.198c1fa5.js",
    "revision": "a17435abbf55b5b1ffaec395b2dc3b37"
  },
  {
    "url": "assets/js/288.760731ce.js",
    "revision": "16bb326affecbb42cceba328ec56e82c"
  },
  {
    "url": "assets/js/289.def43be2.js",
    "revision": "6c2db3212029cf0e74773d2ecf6ba125"
  },
  {
    "url": "assets/js/29.9443a670.js",
    "revision": "123856b4eef9fdbf5a1ce7a2a70b54d6"
  },
  {
    "url": "assets/js/290.ef3a6f5e.js",
    "revision": "9403d8b7147a6e52da62350b5e55369d"
  },
  {
    "url": "assets/js/291.a5b79ee6.js",
    "revision": "f6e89e0fbb354d40526ccd5a62667eec"
  },
  {
    "url": "assets/js/292.63705851.js",
    "revision": "1ae649c956723bc483a7f783068777a1"
  },
  {
    "url": "assets/js/293.1edd2bab.js",
    "revision": "84343d1c97f4b6ef2a6417edaeb0dd2a"
  },
  {
    "url": "assets/js/294.ca4b23b8.js",
    "revision": "05040b0b17b5a13566d587718c84b445"
  },
  {
    "url": "assets/js/295.243f4d4e.js",
    "revision": "462cd23355f188ffb95d23734448bfd9"
  },
  {
    "url": "assets/js/296.b28b1432.js",
    "revision": "875a36cb71e4070caaa9ffb220d595da"
  },
  {
    "url": "assets/js/297.86346f55.js",
    "revision": "6cfcf33f93ce570ccd4e4d5d0534114c"
  },
  {
    "url": "assets/js/298.8cc0bfc9.js",
    "revision": "a4de29d34bc978684ae33edddb008bc7"
  },
  {
    "url": "assets/js/299.678ff7ff.js",
    "revision": "f14c2d13d50ed813f29eccc5d1ee770d"
  },
  {
    "url": "assets/js/3.529df155.js",
    "revision": "8b9b6239977bcca2386e7a3b608c3f5f"
  },
  {
    "url": "assets/js/30.3daa9c03.js",
    "revision": "00774b434a902c5c890a8e5e84f07f2b"
  },
  {
    "url": "assets/js/300.dad09d4d.js",
    "revision": "2fde01038dd4f4663fd908df9e895ec0"
  },
  {
    "url": "assets/js/301.8fe3a734.js",
    "revision": "dbb90ba9b5dd51152dd362bfba92d79e"
  },
  {
    "url": "assets/js/302.07475ae1.js",
    "revision": "7a8c10f3622b3782a1f0ed4fec6fe9b7"
  },
  {
    "url": "assets/js/303.767860dc.js",
    "revision": "5467285d52b89b3c3b1226f3e175dfe4"
  },
  {
    "url": "assets/js/304.80dba7fb.js",
    "revision": "60c429f60b63e8f8c73970cd3914bfbb"
  },
  {
    "url": "assets/js/305.526adc99.js",
    "revision": "bc1c6fe3b877052b2765454221f5c83e"
  },
  {
    "url": "assets/js/306.1a1a1f61.js",
    "revision": "a9273448a00dc5b0c16ea6b9df1fe8d3"
  },
  {
    "url": "assets/js/307.e2974ad8.js",
    "revision": "99064f67ff807c53357d3b41ffb99ec0"
  },
  {
    "url": "assets/js/308.8062bd70.js",
    "revision": "0c5f7afc59284fcb1989ad5a06d13888"
  },
  {
    "url": "assets/js/309.b4f89823.js",
    "revision": "968e135caa46e85046f1de0f1de2b8f6"
  },
  {
    "url": "assets/js/31.380e420d.js",
    "revision": "f1b8b387be47e82643fcf0c9d10f726e"
  },
  {
    "url": "assets/js/310.8cf9a77a.js",
    "revision": "3de0c28c70852721fbbd53b5e7aa5ec4"
  },
  {
    "url": "assets/js/311.6eca756f.js",
    "revision": "ba01b17407356c5338079b35828f5a9a"
  },
  {
    "url": "assets/js/312.74c6d356.js",
    "revision": "74b1d9f82b6fe6185154f624ff43c9e1"
  },
  {
    "url": "assets/js/313.2f3f4166.js",
    "revision": "fc3dd82881ed33ec6bf9b85e60911f1f"
  },
  {
    "url": "assets/js/314.03c3accb.js",
    "revision": "39d688a1a5c4a9ce3303ec2ce930587f"
  },
  {
    "url": "assets/js/315.85e6220f.js",
    "revision": "ac646e52920cb9e8febe0d2dc38629ef"
  },
  {
    "url": "assets/js/316.61ea6c1d.js",
    "revision": "7fe97d2c11e819ffe9a7621b19a3de76"
  },
  {
    "url": "assets/js/317.e8b6ff68.js",
    "revision": "9cad2ddfaf763f1b38e6a76876fb6814"
  },
  {
    "url": "assets/js/318.18d79a3b.js",
    "revision": "d8b4119173faa83c785785c139100b93"
  },
  {
    "url": "assets/js/319.93aaf992.js",
    "revision": "96e367e08700b76d39a209bde323a154"
  },
  {
    "url": "assets/js/32.dd39f7c2.js",
    "revision": "88b3c6842879e98579fc4c4055221a05"
  },
  {
    "url": "assets/js/320.7085e397.js",
    "revision": "07c6d47e47da19877ebd1a15a785b824"
  },
  {
    "url": "assets/js/321.7013ab80.js",
    "revision": "12402b3e440cfa9dc31c7f3a8441694c"
  },
  {
    "url": "assets/js/322.29bea182.js",
    "revision": "55118c833af665fb87815abb52a823ae"
  },
  {
    "url": "assets/js/323.257fc4b2.js",
    "revision": "ad752622e62ff100ad1b25cef8f45dc1"
  },
  {
    "url": "assets/js/324.76bda95c.js",
    "revision": "46135de12f0f58303878cbf9aeab5645"
  },
  {
    "url": "assets/js/325.51261e59.js",
    "revision": "5c74b2f4bbc56af62f25401547d2ae27"
  },
  {
    "url": "assets/js/326.d34296f2.js",
    "revision": "78c38aa2a616dfecad8e7e006307bceb"
  },
  {
    "url": "assets/js/327.ed3e8188.js",
    "revision": "42d50258e0cf83af0ebde1a52c93ee03"
  },
  {
    "url": "assets/js/328.30f3950c.js",
    "revision": "038f3cc65e3cf86bcd52d5c71be65400"
  },
  {
    "url": "assets/js/329.37148a6e.js",
    "revision": "d19231bca4f1c2f125f3169151409784"
  },
  {
    "url": "assets/js/33.458f5653.js",
    "revision": "f53cb14b80ebacd76ae6dc6f62bfd61b"
  },
  {
    "url": "assets/js/330.819d674c.js",
    "revision": "9770ea65ce96909ccb51cb6988fef763"
  },
  {
    "url": "assets/js/331.cc7de559.js",
    "revision": "ddae4048571a05788ff916a05d340ffd"
  },
  {
    "url": "assets/js/332.40513de7.js",
    "revision": "aabedbdc70e072eda6a5722dd39643f3"
  },
  {
    "url": "assets/js/333.785417aa.js",
    "revision": "cd3d03acdc59a751db1ded03caf83898"
  },
  {
    "url": "assets/js/334.cbb5e169.js",
    "revision": "8a4b35f1649cd413fb34c88f78a4b3b6"
  },
  {
    "url": "assets/js/335.a2496966.js",
    "revision": "c2c2989c2490e2fb0c748b82410c08a1"
  },
  {
    "url": "assets/js/336.30466da6.js",
    "revision": "00617f3cfff45c03409812c119dc51ab"
  },
  {
    "url": "assets/js/337.a5c6c1b2.js",
    "revision": "695bd9af284b7ce2740ff125b169b930"
  },
  {
    "url": "assets/js/338.82fa81e3.js",
    "revision": "4bb62bb30fbe76a55b9b57ad142933f2"
  },
  {
    "url": "assets/js/339.bb908ce6.js",
    "revision": "dbff422a7f954256b209288c7d88d1bd"
  },
  {
    "url": "assets/js/34.c147271e.js",
    "revision": "a04e69d7b4dabf5eed720a020ac4bcd2"
  },
  {
    "url": "assets/js/340.c9cfafbc.js",
    "revision": "ee1eb68393c1f6e9103f0a5c740c51cc"
  },
  {
    "url": "assets/js/341.730fa8e6.js",
    "revision": "1d305c42a70c29b9a3ab0938204d9a82"
  },
  {
    "url": "assets/js/342.5fd3a149.js",
    "revision": "1eb3a46df0ea01428f73f1533159dfa3"
  },
  {
    "url": "assets/js/343.a1d81185.js",
    "revision": "1d0d2899ef2764dec11aab5a638bf62d"
  },
  {
    "url": "assets/js/344.3f3f1136.js",
    "revision": "ac347130eb1390530b0c281ac1338d60"
  },
  {
    "url": "assets/js/345.d3c9349e.js",
    "revision": "c868939c98c5e99a9df69cc4824c73dd"
  },
  {
    "url": "assets/js/346.df419950.js",
    "revision": "fca8482994379022402ba7c2377e3b67"
  },
  {
    "url": "assets/js/347.bb0e26e0.js",
    "revision": "37ae7a1754be986a4b203eca313143a0"
  },
  {
    "url": "assets/js/348.38f44c2e.js",
    "revision": "07a1651ab9ec95e384ffebfc0df9db70"
  },
  {
    "url": "assets/js/349.34f4a1d9.js",
    "revision": "a32e87bb59d46bf300b7afc364fd962e"
  },
  {
    "url": "assets/js/35.b9e08456.js",
    "revision": "8772c5ef54a7a989134e2f9f8fbe6c18"
  },
  {
    "url": "assets/js/350.d2d32094.js",
    "revision": "110acf55a998d6d99b676d30c2de8b5a"
  },
  {
    "url": "assets/js/351.453f8ec2.js",
    "revision": "f79bde2e23dc83e8973dddf6bbfb8f16"
  },
  {
    "url": "assets/js/352.8b772a64.js",
    "revision": "fe8fe8af4fecc73929e4f9767fc30adf"
  },
  {
    "url": "assets/js/353.b357b264.js",
    "revision": "c379acc280d278da1f4806da103d4c50"
  },
  {
    "url": "assets/js/354.18f769d3.js",
    "revision": "020e52c3c1becd4f06cdd01eae3b0819"
  },
  {
    "url": "assets/js/355.e7fae088.js",
    "revision": "e8b26eb5d07a1fea14c24dbe84f8e4bb"
  },
  {
    "url": "assets/js/356.b4f68790.js",
    "revision": "bf25d6ec91c63498e36b7f49f9a8c081"
  },
  {
    "url": "assets/js/357.15223cb2.js",
    "revision": "b83bc01ef8f285bb6c86a33fd18679a0"
  },
  {
    "url": "assets/js/358.dab8deb6.js",
    "revision": "2b47a5929b9bb1311c596896b544b089"
  },
  {
    "url": "assets/js/359.95f6f02a.js",
    "revision": "aee3a2f9b10adca02e81fac87ef37fe4"
  },
  {
    "url": "assets/js/36.095fac88.js",
    "revision": "831e468c29f3a1950547ad151633bc57"
  },
  {
    "url": "assets/js/360.bc87a12e.js",
    "revision": "10957667100825c1d5ce7c2bf946735e"
  },
  {
    "url": "assets/js/361.b186edda.js",
    "revision": "9eac1fd8ef3ba928f1b692941c9aa6fb"
  },
  {
    "url": "assets/js/362.bb584069.js",
    "revision": "0246315cf27bf3963f1d4d5dace5cb68"
  },
  {
    "url": "assets/js/363.52c1bba5.js",
    "revision": "c08c7c41354a90f2bf551ed90c66481a"
  },
  {
    "url": "assets/js/364.678404cd.js",
    "revision": "0debdec27cda08fa8832fd801692613d"
  },
  {
    "url": "assets/js/365.0ed5c1f2.js",
    "revision": "49fa9c9a89c42c3a9bba47ba0c89e42b"
  },
  {
    "url": "assets/js/366.9f43d7a2.js",
    "revision": "3a7ad8aaa28bd13f5271f9979a4cc346"
  },
  {
    "url": "assets/js/367.3215b24c.js",
    "revision": "1170dfab9895d6620143d4d542d41655"
  },
  {
    "url": "assets/js/368.cd37cff2.js",
    "revision": "1dd6b464d2539d021aabfecfb8922c74"
  },
  {
    "url": "assets/js/369.36de4b6d.js",
    "revision": "190c80478bb19dde8528692013217aee"
  },
  {
    "url": "assets/js/37.469c0a45.js",
    "revision": "aa0958051c7a47faa6276949067cba4c"
  },
  {
    "url": "assets/js/370.ef7cea1d.js",
    "revision": "7d65b0cd089b19f0a0624dd5d65ecf0b"
  },
  {
    "url": "assets/js/371.36cd5c3e.js",
    "revision": "0f9aab77f2755c03a86f532cbe10493b"
  },
  {
    "url": "assets/js/372.72c24bc8.js",
    "revision": "f5b42b8b00238e4a8e3b74ec055541d0"
  },
  {
    "url": "assets/js/373.b414eebd.js",
    "revision": "8b1bb0f0b5b14dcd0a0ca729ab1d6fb2"
  },
  {
    "url": "assets/js/374.76399919.js",
    "revision": "159092d2e13d30fa91553ec67149fc38"
  },
  {
    "url": "assets/js/375.fa8850d7.js",
    "revision": "b322f8555158466021287dcf1cd05968"
  },
  {
    "url": "assets/js/376.376b2148.js",
    "revision": "cc8e2778e197f3be2358bc4ff8b8f7e4"
  },
  {
    "url": "assets/js/377.6a2b6a33.js",
    "revision": "65a7a373b896b2b399fd6a33ca96f115"
  },
  {
    "url": "assets/js/378.2db5610b.js",
    "revision": "ec2db239e2b3d183a2436eef6103c84e"
  },
  {
    "url": "assets/js/379.4222208e.js",
    "revision": "0a559dd0af152305f9127a9d8b916165"
  },
  {
    "url": "assets/js/38.fee65ef3.js",
    "revision": "ffbd84d9baf7b5a76fef576856d9be60"
  },
  {
    "url": "assets/js/380.9f164b8c.js",
    "revision": "9983b3630e81c2a78b8e33e63c124022"
  },
  {
    "url": "assets/js/381.cb53f121.js",
    "revision": "f45805a2eeeb2814340a6a9d02eee738"
  },
  {
    "url": "assets/js/382.ef29cca7.js",
    "revision": "35bb1ded2c7c8db5ccf197b65275edc7"
  },
  {
    "url": "assets/js/383.00c44464.js",
    "revision": "9bc0334940a7776b3d7ae37343954302"
  },
  {
    "url": "assets/js/384.8fc86cc8.js",
    "revision": "310bbeed549946dea63770bd6c05c1e6"
  },
  {
    "url": "assets/js/385.eb34740b.js",
    "revision": "674243f29bc029671775dadb86d00722"
  },
  {
    "url": "assets/js/386.8669868a.js",
    "revision": "4afa41f1e696207094746302ef8cde1b"
  },
  {
    "url": "assets/js/387.847e7845.js",
    "revision": "82b8e75d6a3bbac071669e64386f2ba5"
  },
  {
    "url": "assets/js/388.9dbe5036.js",
    "revision": "2cb2fdaf88d1b36c961cb4c26c7388d3"
  },
  {
    "url": "assets/js/389.59e7735f.js",
    "revision": "c10c72c941a1d2b5390c583c25fb7e3b"
  },
  {
    "url": "assets/js/39.6cfd9391.js",
    "revision": "b0014be03b0fde2b538c2774e9c39b55"
  },
  {
    "url": "assets/js/390.ceb4bed8.js",
    "revision": "c4e146968e842734824a0651e6cf1dd8"
  },
  {
    "url": "assets/js/391.2426505e.js",
    "revision": "903387691887b7a75f3ea670ad2ee6a3"
  },
  {
    "url": "assets/js/392.9bbcdca8.js",
    "revision": "1059df32ee0d0345325d791ad0ea7e16"
  },
  {
    "url": "assets/js/4.53de8843.js",
    "revision": "541368332700c193340958f2de1b71d9"
  },
  {
    "url": "assets/js/40.201c138d.js",
    "revision": "666c826e184b7ee0fac7c2b62f725bb5"
  },
  {
    "url": "assets/js/41.9815c6d6.js",
    "revision": "c96287b3564d4abd8a7ffbeed82ddd8d"
  },
  {
    "url": "assets/js/42.59d4bc92.js",
    "revision": "be4c55d0847efa26f6f0365a15e3660c"
  },
  {
    "url": "assets/js/43.5cbb0598.js",
    "revision": "1b58bc64db57a5b45104e1a7ff3d9e49"
  },
  {
    "url": "assets/js/44.7f16a3e2.js",
    "revision": "490caa6860f41a6ebf4a6267c96cce78"
  },
  {
    "url": "assets/js/45.005b64bc.js",
    "revision": "e9e78f4559743d66d840b0c83cd22600"
  },
  {
    "url": "assets/js/46.465ea155.js",
    "revision": "f4d14deb196fbc02ae4a515f6e681e64"
  },
  {
    "url": "assets/js/47.6b85908f.js",
    "revision": "2bf0ea39fd66bd2864f2f9f2e7a550fd"
  },
  {
    "url": "assets/js/48.638d4581.js",
    "revision": "d6d16cb01c85be2c69a8fa9b84906958"
  },
  {
    "url": "assets/js/49.104adc74.js",
    "revision": "1d5969d3b82bfaed2904ca2309bb7b34"
  },
  {
    "url": "assets/js/5.82778475.js",
    "revision": "b08c41a07052cee9f884b7354d2e439b"
  },
  {
    "url": "assets/js/50.49278fe1.js",
    "revision": "fb56d38f23a82783f4beefe7389693a3"
  },
  {
    "url": "assets/js/51.ebaf0291.js",
    "revision": "212802bfe9379e2bf5df9beb8b11e5e4"
  },
  {
    "url": "assets/js/52.85f068d8.js",
    "revision": "7052e83e51ab2c32d630b17385d0ceab"
  },
  {
    "url": "assets/js/53.53d586e0.js",
    "revision": "1ea4b6aceaa6129fd6a9b0d77e2e4b43"
  },
  {
    "url": "assets/js/54.9f68dd3b.js",
    "revision": "a7decd0a433553035c8508e3721ce829"
  },
  {
    "url": "assets/js/55.bea29583.js",
    "revision": "742ad65ae7d55fe806676c00905757ff"
  },
  {
    "url": "assets/js/56.c75a385d.js",
    "revision": "ebc03e5d905df50768ad67aad172fdbf"
  },
  {
    "url": "assets/js/57.d4a1f50c.js",
    "revision": "642b1fd2d1d343538e68c9e2a5d05e19"
  },
  {
    "url": "assets/js/58.e2fd24a9.js",
    "revision": "a552fb3eb00e8f06ca3ef39fd0e05c30"
  },
  {
    "url": "assets/js/59.c5b60d3f.js",
    "revision": "e1b34912f289eca56ff56b398ee4745f"
  },
  {
    "url": "assets/js/60.b8d63e23.js",
    "revision": "cd3995cc9fcd89349dcaae868920fec5"
  },
  {
    "url": "assets/js/61.64527a2a.js",
    "revision": "8c0117b2ef9d20a04bd527cbb8b374a0"
  },
  {
    "url": "assets/js/62.0c1d9ae6.js",
    "revision": "1ea6fab5b16f29ccf9ac7846e63d0f57"
  },
  {
    "url": "assets/js/63.16a4f388.js",
    "revision": "32b91f7227e55da0ba45b4095212657e"
  },
  {
    "url": "assets/js/64.c4eae9cd.js",
    "revision": "dc00679b10896fe9474676fe06daa2cf"
  },
  {
    "url": "assets/js/65.ac95642c.js",
    "revision": "fa40bc29eaa68a35b31376483ba373f2"
  },
  {
    "url": "assets/js/66.5311a14b.js",
    "revision": "ad168baf0b22b98250f177b83db54136"
  },
  {
    "url": "assets/js/67.5c5d4bf1.js",
    "revision": "e8aa6f3cf9926d3e5d64069b377c3ab2"
  },
  {
    "url": "assets/js/68.62da9a3c.js",
    "revision": "dd00105dc2c76de402ed891e93b7bd18"
  },
  {
    "url": "assets/js/69.40c84052.js",
    "revision": "b5c435afd515a68037b6cfa3fda62463"
  },
  {
    "url": "assets/js/70.fcfcc649.js",
    "revision": "b0e716511202a686a6b5f9d3a1f75527"
  },
  {
    "url": "assets/js/71.f6b8b0ee.js",
    "revision": "37ca0903010744d3bd4a3c6150917904"
  },
  {
    "url": "assets/js/72.cad4e621.js",
    "revision": "58956cd46d0965147c13c72c7a645eea"
  },
  {
    "url": "assets/js/73.0f68c4c8.js",
    "revision": "cd12dce10dfb5ab857c8b685a5bd1580"
  },
  {
    "url": "assets/js/74.14cf77c2.js",
    "revision": "ad3880a8c636c9f64a674866a282d19d"
  },
  {
    "url": "assets/js/75.daf9e1fd.js",
    "revision": "78661d4e5560bf6b3aecbf377650655f"
  },
  {
    "url": "assets/js/76.2cc2c092.js",
    "revision": "195d05f361a5b7128ef34fb78881d33d"
  },
  {
    "url": "assets/js/77.0bb0b0a1.js",
    "revision": "64bc497b49f90ca6031366a7db121da2"
  },
  {
    "url": "assets/js/78.3a4cf894.js",
    "revision": "1ef61d6f132b6d8703e1098aa9227ce0"
  },
  {
    "url": "assets/js/79.381f8203.js",
    "revision": "7e17a82cded83094737c5f67b530d959"
  },
  {
    "url": "assets/js/8.e42b3572.js",
    "revision": "61f514aa5b41f6c3768f220d67f72552"
  },
  {
    "url": "assets/js/80.85e7d659.js",
    "revision": "69dcdb1d9f0b1f0b24f39d6a33c4d490"
  },
  {
    "url": "assets/js/81.b3599dc4.js",
    "revision": "86d47fa43107ebf87824e4e63edf1d7b"
  },
  {
    "url": "assets/js/82.c9f56464.js",
    "revision": "7651c2336306f8aaf179d048b17471b4"
  },
  {
    "url": "assets/js/83.0b73906b.js",
    "revision": "1e2c40b7f722576b7bd24fbd6011f931"
  },
  {
    "url": "assets/js/84.1fd8fbf8.js",
    "revision": "4834e0a8bfa4e247894e5b145aa65e9c"
  },
  {
    "url": "assets/js/85.381f2727.js",
    "revision": "b5bca7cfbd0eb1d7467cf7bb87a5c2cc"
  },
  {
    "url": "assets/js/86.bc74a494.js",
    "revision": "3d45bffb5169af2d91647a206e4c8de8"
  },
  {
    "url": "assets/js/87.d424deb2.js",
    "revision": "0d01be23c50cc560784acf9312c07a6a"
  },
  {
    "url": "assets/js/88.ae5f74e9.js",
    "revision": "c6581af9c4d82bce97d7e58d560a9d50"
  },
  {
    "url": "assets/js/89.d9615480.js",
    "revision": "5902a8be2e1fabffddcd1b413c86d77e"
  },
  {
    "url": "assets/js/9.ff73890a.js",
    "revision": "ac53510b969e1a1ac11fa04643b30731"
  },
  {
    "url": "assets/js/90.94178448.js",
    "revision": "c6b77d5baa45f0635b04758a825b63d2"
  },
  {
    "url": "assets/js/91.cfac727f.js",
    "revision": "180b2e491d6dcb0d1ed09a8f729d98ad"
  },
  {
    "url": "assets/js/92.b2187059.js",
    "revision": "db721ce0454709a186344c2d0ecb9af3"
  },
  {
    "url": "assets/js/93.2d6d47b1.js",
    "revision": "4c6693c926d2edfd27f0be49074952da"
  },
  {
    "url": "assets/js/94.f600a715.js",
    "revision": "c571171576248506108108db0a1ecd5c"
  },
  {
    "url": "assets/js/95.85e88967.js",
    "revision": "df346582a3a580601eea92704939c0a2"
  },
  {
    "url": "assets/js/96.43cbe2d1.js",
    "revision": "41c962f91e876f80db4f32b8d9a47d1b"
  },
  {
    "url": "assets/js/97.27d23c43.js",
    "revision": "3110a1ed9f446fd3d48b205c8cea3613"
  },
  {
    "url": "assets/js/98.a81350e9.js",
    "revision": "123b1a7e7ba7f8770aaf7ea80c351c75"
  },
  {
    "url": "assets/js/99.053600b5.js",
    "revision": "8b89bd25a5e15df570a75abfd3507def"
  },
  {
    "url": "assets/js/app.03ac42e2.js",
    "revision": "e724a448165c8cac16a39163979ab65a"
  },
  {
    "url": "assets/js/vendors~docsearch.070fde37.js",
    "revision": "93cdd48a473a3abb368a3a9d6cabf4fa"
  },
  {
    "url": "index.html",
    "revision": "b5553b2b81a34e4924171aa031b5d781"
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
