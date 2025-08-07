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
    "revision": "2b762e4a21583016d56cbfec6bddbcb2"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "241d54d00bad4f4b2640347b8a5997bb"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "951526c02d89f9075d9b553d0bc36ba6"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "59bad8d2a6b78aaf57d9f4f88334ac8c"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "942dcb1aa258895aa070f3b0c61ae069"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "311092dc165c7ef50e07f780c800b521"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "941113b3809b96d051b58d0dacf90564"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "2b3f13cfc04dc3ccb045878e43f03598"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "0bd8c4c4c4875cfdfebdc3c8f6237ef0"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "d11140825c77974a6b04491934155e2f"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "69728e0a7118ace311720464c5c0f553"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "f4489f21316c8cf591f6c0f7355402d6"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "849b8865038677df09f9460208e57f25"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "87b9a5eb63838b0400d964ff713f4bb2"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "9a902b2edaa91d71a914ab36348cc6da"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "0825129ed6135512818aa52059718c5c"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "16e63c2c467b48ba519de8c9f0402cad"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "26d82d6ae9153cc6d1afc4ecffbb6aeb"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "afe75ef00c8d414352bf0efbf1d07f5e"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "3d9b78fd89d51f95ec30c116f5876f38"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "b720ea00b2c87eea554fb4721db37e11"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "2c5176699ac5c9b29c61872ca05f0268"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "100b6c22eb301407eb9d1d4daac5f817"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "f69f6d3320fe41257437918aeacad12e"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "298da922fe69e8aab9928f13c3f1710f"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "86d4dce27c592958fb95fd15fba9f0ad"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "414fe057e8a351f478ba7e7a5cd8ea94"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "22918b41c452f6405cd0a5f1047fa597"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "a67133e778a918059baa77cdcebd3050"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "bf63d43a4ad28872b4f675ffa4e8fdd6"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "eb1b2d5475533aaa844936ab0dad8f88"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "c30ce20a5fb411f9d98726ea282890eb"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "567a7a2f8cdb830749c462d8133a02d9"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "1c6dcc1ff1b318ae85bbff489df92ed2"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "c4efa814eb7a9ebe155eabe963277bca"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "40b792bdeba1110716cda927221858c6"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "47f074e4cdc36bd77c20ecb7161ac28f"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "ae73f65b8fc03926d267924939d7143c"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "c251008e642c75f307b77d44091b3972"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "4950343c84eb64a89db05db7c3f2fdc1"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "e53650d7b87afbefbdb020de67b96c49"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "5cbe90c09da570f5cfd6aa436d8c2535"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "b30b26b3d09b192b9ed7713039ef4373"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "fb1409bf8ef8ec7ca6ee772d0fd80a4e"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "a5fb95e97f8eac154e2846dbd7775790"
  },
  {
    "url": "2.0/MultiVendorMarketplace/index.html",
    "revision": "52332915fa08dfe9a8f2cdcbb4cc9ea1"
  },
  {
    "url": "2.0/MultiVendorMarketplace/order-management.html",
    "revision": "5236dc35bdc546684668bace4303ada2"
  },
  {
    "url": "2.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "af03ee27a403dad5c2ff4eae08672a3f"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "7ad646ea7f120ad97294ae067ef9fd1d"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "1f25666915a6760c780e40a42a001ace"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "9108af9e9e8cba2cc7e401ffa0075dbc"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "52bd3424976d330be496528e186901cc"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "06c2fdc10c60d5dc9c2ba56e2906b3bd"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "bc6cd21cf2bb0d8cf093a4e9875b41f6"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "52f4f96579caa473c70baeb27207e6c1"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "3bc05c05524957e9b94705e3416a96f3"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "2b250bd1e37dadfc3e1e812f2ad69551"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "edaad7d2c60ede41a57f99e157366478"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "63fa4b8d1342c8b81e5131a15222ed58"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "db40f05d4939598f71fdb28c89a1a119"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "a1cc5aa2ece1536bf3093e9515a178e2"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "14c21c4c84dc4ed2dd3438205a49b9f2"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "a536ed61e243a5bbe90f99fe61469990"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "fda6a5a1b589bb1ff1ddac7141023182"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "13ec484407a182946528e66243b91572"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "36ac4a7c03d782e10ee91d401b8f8e51"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "999c8447ef510b361945bd05adc81552"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "4fa4769051305494181af07dcd516fdf"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "7ae21e99bbc062689a3fa8fe1f5bfeae"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "1399e190426bab2bb176f2d302223d99"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "0face8a547de4d77c62a379b6571b7f2"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "3ebb6b9ba577371c553e6640780adf05"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "d1b7e6ef59b107cc7f86b5135863016c"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "f24735743429d38c7a3604e03fa38593"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "f243af183a4936cd949370118337547c"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "81220bdac98a046c5383bcdb18053041"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "c46860f6242cdb6f9c55a8c2f611592a"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "8109816892e591b90630206afdf7ce74"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "ca280c3a2cffe90f989eb3991d3c0828"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "4b4502671533def2c85c766583d16f9f"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "0326585f7f88d44cb6fa7e8b595d82e5"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "d465f703d2d0958159fc600a2c99d70f"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "25b802b76a876bf6b450db7733bc8839"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "e721dcf6c705d97b87dc5bc7dc1faecb"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "d87ea8233de3cdd4a6c73db2be781f3e"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "8503238ad00f763e702fbaaa089b870c"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "35c57ab78463b23753371b8bcf82ae00"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "6af4c2409639d477ad12f3898a8c59a9"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "0bb63d93c6b6ac0b3bb58ac39aedc651"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "ea82abf1eff34aad6f6caeaa253c633f"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "296cd62b95be257ad90d601bfd7fe304"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "4c591c8ab5011fb57a2a759fbefb011f"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "88b4b922fabe80adde544792675ed99c"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "dc6d1661bddae11064ddefe25c82c00b"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "f07404a0156a84ab7b268de3734bdbde"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "3b843ff149d437dfd040e0548b1298bf"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "51a2ddece012809b64e63b8c295ac4f2"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "96dda4753dd3abbaa2d55b12e47c95fb"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "3dac03e1d036b8a14a9814a3db4bdab2"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "6664bdfc6c069586f71c1076b5525ec7"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "89a949e01be3eda0c1306fba37ca134a"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "9d653e9d7fe6a2ef4cbe23fd5db06865"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "22b70e68b203381622370aae6a9644cc"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "5c8d9a482e4d6fa4dc22e3cf61958507"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "bfdfcc0a4a706d19b632ce3d8af022a1"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "db3f2cc6773d7f850f646afc6849c8fa"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "1e0c00a86af533d3fefcda46d92f8ac3"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "21b3e5d68046a9632855d92bad917830"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "1f691b30f64a1767581640bb857627cf"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "d2ece61f9651fa73f84baf3375cc4e8e"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "3e76e255c2786d833db3e7009aecd33f"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "16f7c3a6975e78118f52f0ec9933b5f7"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "8b7b14a95f76c17e0663190ed69bc715"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "4c72a08a8d12f0603211fe39bb70ec21"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "d691912e294adf0702d567eca6d93bd6"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "621c4f60af96ef60e8c592df0dd6cd60"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "d53f098d5be62886416eb4f6f1d9cc8f"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "0dac65e2e85eb979b69571d971ab34be"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "571f6c0837496df3c5a7dac25d5459f3"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "d48b7a5cd3eed41aa306c44b6a6eb160"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "c3227b8f47078ca92317bf300f3d2d43"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "709c1693d97d92d554c1fc7786b84b41"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "c5bb827151ebd8f8e3c573f8841046b8"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "313587706828406ddec170138fff99c2"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "66708bd594080857d3e97f3b53a722a7"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/index.html",
    "revision": "e8a1a4948db8ab46d76b6c3d378ba008"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/order-management.html",
    "revision": "6e55a9fd50bfb326efa2aa6faa0aead1"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "1de76ab01eef00cc51573a66c93a324c"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "14b9b61ad10f846cc20d0c7253b36e71"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "b7ebaf114088309a89239ff1d4871ee1"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "d9ed051349c0d0126646bf989056b346"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "23b72481fa6f1555feb95972c4e60989"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "997aab218bb17a5b95023c544cd5b18a"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "e38c784b6c16142afcad1dafa3ebb56d"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "31874f338d2e8d2e034ab9334c7dfa03"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "b778d011c2ac91abb792f873e2056411"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "6a7a2ac22cc67512e63acbc22b92c45a"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "9032142b728aea01b63cbba558a2ae68"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "7dc78fc47285ed8472f7a84aeff9fe16"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "fc2760d6b997a6d5beec74e400de7558"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "819e4f9edc7224bd13701fd91fd125be"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "743a6bda1eb960638e048bb8a684f96a"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "612eeda974a71373b885ed54acc5e592"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "83c034b6c238e77139c8914993b62c6e"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "4333083181319e8697b66c3f2bedc76b"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "5694cf5674947dec8faeb71f660e8532"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "65fdac84099a27497c13e101a377d730"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "4842f605373e93f7595e975756839d04"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "0b2dd93de0896d5b8a6228f7d2fa7a1e"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "f89847f1fe6bc06405d95f3a10222932"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "e4916b3ca4b6ce47c162b0d0155309f8"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "2e896d5c963b240de05897baf2a9e1f1"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "0a72b450951a5f03dffd990220bf77bf"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "082de4958de604403898797e54d7f53e"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "da31c95fdf1065cd6048fe5df312a901"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "6463165b3747efeb8440ed04327b6750"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "9ead1b372aeb3984183c6e8c162fec80"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "34d7f370f1ee12c480c2785326c93f28"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "7032fd10a8b9846dd4f277c7bc54f51d"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "b3b8866d73b6310514fd0fe867a6a32d"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "52f97a5c013f5c54b0363e59fd91f19b"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "84aa102377da9aa09288fc3a074eed71"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "0f9d490f351ab8e5f3409e538cca0353"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "a3724f0056bc81a90019970870099c9d"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "1dedfbc8afda9d9ab4241830b77814c2"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "d8ff5da94117b979cb73693eaa4bff69"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "916102ae725220d3458afc81951833b3"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "55c1e5c22c1f467a39edb90100eb17f6"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "be70134043b2a7884f445b16cc5842cf"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "458bbab4f01ecc6769bca08f7c9d42bf"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "877e56537d6a60d3e4cd7d7e76d41033"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "1acc71391e57373112940d4ab92d6459"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "f556ce1ffce7756549f4ca5c07369668"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "e4b7eb1988f435a012b8ae8a46eba6ac"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "0032ffc1900a91068dda7b1bb00a9dee"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "a0c8f821934c4b3b3db2317036ace3b7"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "1d328994c12ecb5e6bc56a8bd1e6ae91"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "eb9a53f81e10b579c6e991e0617fa58d"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "0cb98da8daaf62977c58e813f74e8e43"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "7d891ce6250117df5a7d8645b577314a"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "db2c1e94d85e49b3e0bb578a5a2d6313"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "8bec2150ae9cf18ec9e0657758097b32"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "e4144d01536b70d67eb89a41027b80ed"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "c5cdd4702732a6edb9d1aec5b9318155"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "e71de19d83946459d516f45cef87c341"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "44c2c310e12de3f665559e7c14e6a26e"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "a2eb8bb2de64f64a4d359c9ad01624b6"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "539301faeab883b5c39bdcd7d794ca63"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "4a6be2df2cb8422dfcccbd4b50dfaff2"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "7bf17d8aee332a1cd698d66941805be9"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "aa31480c0351bd8873874096535680fc"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "90b2cf54b86e5e0b90b39392f6a8d87b"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "8675d7348f4ebf4eff1d595fb613b0a4"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "6b929139c3b325a637132d98bb873a84"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "444dcea45cb53880a239cc878ea9c683"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "48fd09423b03fd9ab42fb8b33a6bcea3"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "b2ad9d10d309dabeac39ce66db599c02"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "91ceee1b2c90d8de1e485d7c88401fcc"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "5a564d20e734300726530bc03a3adc79"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "0a7acbcd0fdbef3294dff0588f99ffe9"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "017fb3bd44cbcdb5102764d75ca30dd7"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "0401afac5eb1fd1ab6aa6152fa6de51b"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "097b4f16d0e6d3053212fee0507b2556"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "7279d20f5b6d267694b9edee418bee7a"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "4791321bbb1def544881d025e6664790"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "27ebb04a6ef76c1d89ab513f4a4ecd8b"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "652756d86ef8d2d0fb1b4ff1ff3a6406"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/index.html",
    "revision": "1310a351abd64ecf2f1d49f5236785f7"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/order-management.html",
    "revision": "844f7dbecfec812a34094b4a2d6ff0ac"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "2b3992533915cd038a3e9793facd60d2"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "cfeddd5849589fb04353acab697e1129"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "3faeb088b7f0dabec12e175a60315b89"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "5902d31c2c7020c28ee69b6ec520c76b"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "05fb580ec970610faad15680172b9ee5"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "0f05dcf6d2637b278439ad188b122eaf"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "3938cd0e9f27354107acda87bd928832"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "88558ca110cf31dc246cdad248ada3a4"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "93e29831523e0e627ccf9e71a989ccd2"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "cedef7460616aaded5dcae4f2b45ae45"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "b8a88244e83381941c16ae408312f47b"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "f9f53b2b2be2468d81126c35b32ac672"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "2c81ecbd9200ae16a8c614de45500498"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "2e736501f0c5af4effa3397f4757fa08"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "4586862073ca422a8369a70af177c602"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "493166e1ad7246b675d64e726a5277b1"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "44f45b2cbd2682eae39ed6ea23cfa153"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "03829c4a0c8e66b627e14b1b8f7d850d"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "25344c35d90f4b84496c841254edb8b5"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "e859bdfe5999e97e6fe1bb321351eb56"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "3053b8688485cc5957188977cca50e0e"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "b71ac5f52b79833d9023c8426d1b335d"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "398c92c2668983ad2880c06f2b84eea1"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "950580b8ae1db97467744e6f09383e7e"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "d955767082718cbacfbe2e6cc85db516"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "9981dfb6103e911237333787ead2213e"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "e8405dd78dc08c5118be012493c077a9"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "967afa0d28289a92121f1da02644a64f"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "e1c96d504f6b0871037d397b56683b94"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "f95da93964c3be10db35262cd59d4741"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "59aa384a6ccde6c0ce5d1ce20e99f558"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "04d78b9901554a4053ebda03bd293f2b"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "9686da48194c290f360612b0c59938d2"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "add3473488577c456fcb56a6665e673b"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "f9c9ee35ceddcccf83775ba66177e855"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "3b515ace5457b287420108f6292c407f"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "a4a1c31fb88179b04a1164a635b7dc52"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "268151d602a74c320de23c1dff15584a"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "590d1c46e89f036af4ecb935495aec03"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "08e39add8638d21b229395984c5e93f5"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "f21ed47836406424d784a69d1ed8123e"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "3230fb4913843278c26340e8b2f11ed2"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "58161dea4487083df18265214d066fde"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "a433f1f6ccc594a325ef0522571fd71f"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "127c1c4c814f4b7c70e384962c6555a8"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "520ebd5381c32b03362d92217f27478a"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "b4010b771d67be0cc357b284f3ddd67c"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "e9ed4b36cdc41487565c18d40b2af44f"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "1ccc5b38a77a831d0440f6ba8f96060c"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "937bba465f85031abb19d5ac6b752ff3"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "761a5c96e550474ba285421bbf9cf106"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "712da73f84d55a1c75344898310d8200"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "8f72f20f6d44632b55db64a585d2dac5"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "aabdf8493d9f0f60f9e62aea14dd335a"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "efc8d0c62620d5dc00b514467f56876d"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "c709b797ce97551d826e67076b228aa7"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "3d25f4622ce09d69309b9f283060e6ac"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "94b2e6821a6eb0564398f0b757539e25"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "9d35f3a618b9e133b2048f781a86c10e"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "d945ceec043a5ee079f4d39948617bb5"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "618e205fe6f54fafb3a18f9c2d24117b"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "051613aaeeb93f7bfd2fbbcc85dc0674"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "8a9a4c7b592cb0515380284aca20d56f"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "a8e3dc68541247bad0ae08fa8eafcacf"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "9602ed11e7e959c7694ca4357acb4881"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "73cd7ac28a057303f321436b9f0f74c5"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "e5a36e59063d68223304ed2c9ae346e6"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "27c808c71e55500f27749903e820d763"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "2cb30dd8175c4130176739b8d3730d43"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "bf8fde39e459c234fbeba2047222c3c2"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "d310eef837311a49e6cf297f7c88eb3c"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "dc37731d8fc39d702751b67b206aff59"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "5b1df23fc870d72a72530e958f8171cd"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "1f66dc8019dbd9b1bb9b8e7b94f53b3b"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "2ecb32507a8c27eb775ac1dd41351c8f"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "c28c5209bd62a57c1690ba761958b104"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "c6870dde13e0899720be12827c4a2b4f"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "f398b6864b87f7926260d67e07024983"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "3bd8f70c868077ce758d54c1764e6761"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "7a095d90aeb56e400d9854c8f13f74b3"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "e3db8c1490d791bc517b305d920784dc"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "508d5d099eb13e70c9fcd35c89b1be8e"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "193928f363193fbfe0aa1ca45e3f2520"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "67cf403714b5a060abb2764e44953af2"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "96f906fe2915492f2089e9057b95a353"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "0bf28a855c18b7fd32f8a4fdcc990480"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/index.html",
    "revision": "05bcd3d4865cb2a64ea0a3e1deaafb8a"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/order-management.html",
    "revision": "c60b9710c68ab0b4ea705f2f6dd78116"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "30c31913b7a45027349040a96832833f"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "eb1ce292319817ab8a5913565ab990ee"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "1afd74d3e0789f8af124ad29115620df"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "07c100eed4ea43db17ab451d9ad840d1"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "ca183fc71c67d2414fe2fb63594dff45"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "afbb8faf73412820c147ebede620eaa6"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "11265752a6114d747963e44a4e18e5e6"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "55c0119959d9519213b529da04110c7a"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "35db6816a81bd1ccbd92a151cc7eaff5"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "2e1d3b9bc689ea056ee2819fe169c5b7"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "e768371dc517c6f549f0c4b9f3401d50"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "521c0d151c6a99daf315e73720b0df62"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "157bdc741d4e4dae32070b9d2b78557f"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "854ff409e6e39b6ab5ee025870a402ae"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "ed38ce06cb7abe81f102d947747934a7"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "16298a4f83ebff0a8f2f0493bde20e7b"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "4c5617790cd287a43e4c1704e6675a71"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "bb02c2df5986f9f23731a65a212b6c3e"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "69659fc25dcffd87172d2825fe5cef19"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "963aa31a921bd44252602317b55100c1"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "747dfe66177bf7ffe5fc5ffadb516bea"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "a57bfeb3252949e94a71e06b08a26623"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "f8b15983b42bb9b04ddbb1e7c69ef44b"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "3da4dacf02f23f9c011d7a8f3e81d81a"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "7b21e6027c6313495739d0be5d8412be"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "89bc8b063ad59814443d4bcf880ebca0"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "9810ffe1dce33f3caa1efed05c1ec852"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "3e38b8e9650184bba3ac372429fc61c5"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "62a1e02b13c1ecf75e16d387de9064e3"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "88a58decc0b477a33bc098eb24b2a4b1"
  },
  {
    "url": "404.html",
    "revision": "7cbe4e026d0c79b0a0ba793d199d1671"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
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
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
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
    "url": "assets/js/1.73f5208b.js",
    "revision": "66575a70f11c861d8179170a48ddd497"
  },
  {
    "url": "assets/js/10.a020a514.js",
    "revision": "f253d84d332d0610d1dd7452a01c640b"
  },
  {
    "url": "assets/js/100.0b96ae85.js",
    "revision": "a2ca4fea515b68bd07e803ef3b4318fe"
  },
  {
    "url": "assets/js/101.6f8de891.js",
    "revision": "202b2fdc1fac11d11fbf1ff2e414c64f"
  },
  {
    "url": "assets/js/102.ffda2da8.js",
    "revision": "3c8650f71c52813cedc94687147fdf4d"
  },
  {
    "url": "assets/js/103.4b93f6a0.js",
    "revision": "16beb0526e69c41667728bf92f91fc67"
  },
  {
    "url": "assets/js/104.901ee8a4.js",
    "revision": "7a47de4c3c21f42511720be21066ba46"
  },
  {
    "url": "assets/js/105.fd324050.js",
    "revision": "ad270fcc42fef93a673b33ff002c60a5"
  },
  {
    "url": "assets/js/106.2d29193d.js",
    "revision": "46db0473e6a7b31e5b5b938e3f6be265"
  },
  {
    "url": "assets/js/107.37b3eadb.js",
    "revision": "3db6d7881f01910f5f5a7598e4f9c2c2"
  },
  {
    "url": "assets/js/108.bb81c6d2.js",
    "revision": "e166c2ccbfa6c1295b48eaf345b010ad"
  },
  {
    "url": "assets/js/109.72e6ebd9.js",
    "revision": "18157c12576c5faa91821e0657665f01"
  },
  {
    "url": "assets/js/11.36a316a0.js",
    "revision": "ef6827939700c1926c6d63b6dfde2b0e"
  },
  {
    "url": "assets/js/110.8a23c962.js",
    "revision": "116b4c775cec1595909f8c4bd8f10bec"
  },
  {
    "url": "assets/js/111.176b9513.js",
    "revision": "dd6565b4a760c66fc699b5746afbbd95"
  },
  {
    "url": "assets/js/112.121f7edb.js",
    "revision": "09d1921e248b1fa712b08652f0c82f5b"
  },
  {
    "url": "assets/js/113.fe5ece09.js",
    "revision": "95754e437bbda8f0fad0d38fbfb6edc5"
  },
  {
    "url": "assets/js/114.7dce8b5b.js",
    "revision": "508df340e9a0dc94f9b026cbd9a61e4b"
  },
  {
    "url": "assets/js/115.5c00084a.js",
    "revision": "ec9df417b411635d02796b9c4250484b"
  },
  {
    "url": "assets/js/116.5c1aabda.js",
    "revision": "d22c700a5bbe38d9b7c0379e06ea35e6"
  },
  {
    "url": "assets/js/117.b4ff2a94.js",
    "revision": "b31529fdf1b5908fbb6a6eafa36eea92"
  },
  {
    "url": "assets/js/118.7fa3e04c.js",
    "revision": "5c4f9acbc5c5c361616912702c9d1515"
  },
  {
    "url": "assets/js/119.b224491d.js",
    "revision": "b8963823e4c3605cb1dbe1bb804637ec"
  },
  {
    "url": "assets/js/12.0f5d8927.js",
    "revision": "7d7456f0771f42e5dd1fc1d32c7c7290"
  },
  {
    "url": "assets/js/120.20778ca7.js",
    "revision": "cb70918566eca29b6d9b4fdff357a344"
  },
  {
    "url": "assets/js/121.1f0fb5a4.js",
    "revision": "f33904b47ef4b9b7ea8629f26ab08189"
  },
  {
    "url": "assets/js/122.7d7a6c3f.js",
    "revision": "25e8bdd22df4f1bbd91b418864515407"
  },
  {
    "url": "assets/js/123.bd96bb07.js",
    "revision": "50cdc3f2246211aae98194ca481c64ea"
  },
  {
    "url": "assets/js/124.89d74705.js",
    "revision": "5fc814025576d2ed9ff23b05d1c3010d"
  },
  {
    "url": "assets/js/125.60e2abff.js",
    "revision": "80c3a39619daff5026bebc903db9241e"
  },
  {
    "url": "assets/js/126.56fc4f72.js",
    "revision": "199e0c09ccf4c1afc99c804af5e3d9f2"
  },
  {
    "url": "assets/js/127.21b3ec70.js",
    "revision": "0fb97c5d7e84246585ecc7c2e293b8d5"
  },
  {
    "url": "assets/js/128.5a6d233e.js",
    "revision": "d1fe63b2d2b6284dd4815ce60c42f25f"
  },
  {
    "url": "assets/js/129.c37247ef.js",
    "revision": "28247ee52226339739de35c8ef700faf"
  },
  {
    "url": "assets/js/13.df3b8506.js",
    "revision": "0588ba1dad37026fbf72a075155302a1"
  },
  {
    "url": "assets/js/130.64ee525d.js",
    "revision": "b4e023f2903686505a4d646d10cd711d"
  },
  {
    "url": "assets/js/131.54f78f1a.js",
    "revision": "5bbbe52273d4ab209c94014e355f7640"
  },
  {
    "url": "assets/js/132.a93069c1.js",
    "revision": "16e93e8f231f9138930df3e1a2dd84d5"
  },
  {
    "url": "assets/js/133.183a077f.js",
    "revision": "a5fa736bd6b88f1200d2a83bb0586675"
  },
  {
    "url": "assets/js/134.7cef12de.js",
    "revision": "2708cd9a21b5c80fb2d22c97e3e5f770"
  },
  {
    "url": "assets/js/135.eb30bc62.js",
    "revision": "d6ad86bd380df596a711ad2b52c06382"
  },
  {
    "url": "assets/js/136.c37a1d41.js",
    "revision": "57be6deb5091e3d8afed4b0741d8f0e7"
  },
  {
    "url": "assets/js/137.c8d4bb07.js",
    "revision": "2360091058ef687525541a8282a7270d"
  },
  {
    "url": "assets/js/138.c9cb334b.js",
    "revision": "5aafeba0b152f4601ce8400cb04b14a8"
  },
  {
    "url": "assets/js/139.5ec09edc.js",
    "revision": "02f8944602c70a88638abe91e1bcdeb6"
  },
  {
    "url": "assets/js/14.f5cdacca.js",
    "revision": "009e503eca2d9c6ce3d56f5051023798"
  },
  {
    "url": "assets/js/140.9dfd6bc2.js",
    "revision": "fcf8c82bc195f1d38731595dc790f2c0"
  },
  {
    "url": "assets/js/141.cd649460.js",
    "revision": "6aaf4f584596af5f3f2b530e83a10912"
  },
  {
    "url": "assets/js/142.a0d23dc9.js",
    "revision": "67b74af15ff887d1a24ab8cdc2e400bd"
  },
  {
    "url": "assets/js/143.68f09216.js",
    "revision": "3881c984574713b386af9126f8cb6257"
  },
  {
    "url": "assets/js/144.d0c8aa2b.js",
    "revision": "9de6831199ef4c577373ec21f15ad67e"
  },
  {
    "url": "assets/js/145.c68a28be.js",
    "revision": "9110edc8d8d2bda9e0c12c2a2a214058"
  },
  {
    "url": "assets/js/146.f78a4c60.js",
    "revision": "5112a4d0325b6fe6245833461a98ab6e"
  },
  {
    "url": "assets/js/147.b2914a54.js",
    "revision": "7c3b4676b03816b8626125a3fa25c951"
  },
  {
    "url": "assets/js/148.a4c0a2c0.js",
    "revision": "3ca75f4795ebe016143d196856567ee2"
  },
  {
    "url": "assets/js/149.486fc8e6.js",
    "revision": "544f79ab6c5bae1a5f121bc0d4be221b"
  },
  {
    "url": "assets/js/15.c9270b0b.js",
    "revision": "a2ff7ef7a07e007e86e026457d58ca16"
  },
  {
    "url": "assets/js/150.917d524f.js",
    "revision": "8b3871c8a52207a91740b7d93f72e775"
  },
  {
    "url": "assets/js/151.412bb734.js",
    "revision": "890f9412691cc50840d1d07ea3af1091"
  },
  {
    "url": "assets/js/152.2be39626.js",
    "revision": "95553325530a25b1346dc7578a88f80a"
  },
  {
    "url": "assets/js/153.12429bc0.js",
    "revision": "888a8bcfcc956633f93af7ce7b2fd489"
  },
  {
    "url": "assets/js/154.d9547328.js",
    "revision": "f3093df3ba9ceab2dd4ae6d618e03918"
  },
  {
    "url": "assets/js/155.134cdc98.js",
    "revision": "acd325796ca5ab345e14de067c346a39"
  },
  {
    "url": "assets/js/156.54959ae2.js",
    "revision": "976a1bb83e6397e9d613246c94dee379"
  },
  {
    "url": "assets/js/157.c6c31de3.js",
    "revision": "a68a6d55aafd2738ae8a7952b4cc838d"
  },
  {
    "url": "assets/js/158.a1b9ecc4.js",
    "revision": "4dadfb3c7e521e6ecf895403793d9d10"
  },
  {
    "url": "assets/js/159.2a03bfe6.js",
    "revision": "6e7698ec4e99f61a0c733dfdf49abf91"
  },
  {
    "url": "assets/js/16.d72b99fe.js",
    "revision": "55f2b7963873bec2008f4fc96b829336"
  },
  {
    "url": "assets/js/160.0b0286cd.js",
    "revision": "4202e39337ee71d0a64d88f83e652f80"
  },
  {
    "url": "assets/js/161.1db4922c.js",
    "revision": "1b4d4a1c15df3677af0597e0f8f60d0f"
  },
  {
    "url": "assets/js/162.e49aa006.js",
    "revision": "d173de6d96988c7e8ff76b1791b1f1bb"
  },
  {
    "url": "assets/js/163.3f93b15d.js",
    "revision": "ae602cb49e1d90845c747106d84d4f43"
  },
  {
    "url": "assets/js/164.23400eb1.js",
    "revision": "68a9f2832680abfba6752dda9967dece"
  },
  {
    "url": "assets/js/165.7069f0b4.js",
    "revision": "d177336225ea919a873cd49f3e6cad43"
  },
  {
    "url": "assets/js/166.4e0586da.js",
    "revision": "b1050896266da58b7d5ff10c15677617"
  },
  {
    "url": "assets/js/167.4df7e124.js",
    "revision": "b72adea34982e3dd00619ccafd327c08"
  },
  {
    "url": "assets/js/168.14f1a741.js",
    "revision": "7698eef5a31ff9538f942fc4bd815ee6"
  },
  {
    "url": "assets/js/169.564b117e.js",
    "revision": "1af9376b505f92be0496c6e705a75254"
  },
  {
    "url": "assets/js/17.3ba28912.js",
    "revision": "cb1efb279442407d26a15fdee5bdcd6d"
  },
  {
    "url": "assets/js/170.a80fdbbd.js",
    "revision": "bf5fa541623e34d1d46dcea1f61f856a"
  },
  {
    "url": "assets/js/171.9bd0e487.js",
    "revision": "009b1993831d00bd4b30b2f671ab13b0"
  },
  {
    "url": "assets/js/172.f88e996b.js",
    "revision": "cd1a8f10cc2e2600289b13d3881113ce"
  },
  {
    "url": "assets/js/173.fa6f3de7.js",
    "revision": "de5d0da50226682ef5c270a9f06aebd6"
  },
  {
    "url": "assets/js/174.0b3e3463.js",
    "revision": "3ac0d955eb7fba8d5211d09f24d20be4"
  },
  {
    "url": "assets/js/175.7dce21a4.js",
    "revision": "3755412fc015d5686c6ac0d70d1d0900"
  },
  {
    "url": "assets/js/176.c2ed3c51.js",
    "revision": "630ba07b2ebbf05d99a737b069a7b277"
  },
  {
    "url": "assets/js/177.a576a151.js",
    "revision": "0756cd6aeb6c1a4d05f0b6475a81df95"
  },
  {
    "url": "assets/js/178.d479561c.js",
    "revision": "38064d6509999c0bfffc93b98c3ce710"
  },
  {
    "url": "assets/js/179.76f590c0.js",
    "revision": "5955b68d1e8a8c06da0b9d3f8a99715a"
  },
  {
    "url": "assets/js/18.2b99454c.js",
    "revision": "49fe6f3605e35f9b1b8304b4564a105c"
  },
  {
    "url": "assets/js/180.69877300.js",
    "revision": "6b0095336b99d091fee07036ef23dea1"
  },
  {
    "url": "assets/js/181.b08254da.js",
    "revision": "44bb2656b4fef79229ba14263d1c084c"
  },
  {
    "url": "assets/js/182.8df9e731.js",
    "revision": "b7dd27292e6e8688d4cda94d5d71eac4"
  },
  {
    "url": "assets/js/183.0695491a.js",
    "revision": "f9b6b7e2a789c7f174dae76dcd0e0f40"
  },
  {
    "url": "assets/js/184.331084e6.js",
    "revision": "9740c3987d23de1c9350d2ae9c62e7c8"
  },
  {
    "url": "assets/js/185.2b802437.js",
    "revision": "6cf1555e187cc33335c8f29d238d2daa"
  },
  {
    "url": "assets/js/186.781719f7.js",
    "revision": "f03e78e1d699d4daa8fcbb6fe91395b1"
  },
  {
    "url": "assets/js/187.6b5cb24c.js",
    "revision": "23d9b11ec5e389ae352acb09cf16fbe4"
  },
  {
    "url": "assets/js/188.6b6144d2.js",
    "revision": "0b56bf6817df48ff25469d8767462dbc"
  },
  {
    "url": "assets/js/189.cc8db593.js",
    "revision": "660c1c4eccd47aa415e3d9bf88a2f12c"
  },
  {
    "url": "assets/js/19.06f9bd52.js",
    "revision": "a3b13642f59a48a757589f8900644dbe"
  },
  {
    "url": "assets/js/190.0ef6329f.js",
    "revision": "89360feb39588cfc8e7d39ee09e91661"
  },
  {
    "url": "assets/js/191.a487b3df.js",
    "revision": "0b6e3f009595add15c179a49631a8c9f"
  },
  {
    "url": "assets/js/192.66ac41f1.js",
    "revision": "66902335e0ee85f6500fc0b2daa5c4f9"
  },
  {
    "url": "assets/js/193.60ba822e.js",
    "revision": "c71a8de2718d4bfee35c225eec7392b3"
  },
  {
    "url": "assets/js/194.4c011069.js",
    "revision": "6878d6336ebcc3258a72a12596a4c24c"
  },
  {
    "url": "assets/js/195.48e00f91.js",
    "revision": "7144b77ba97aef4d88a3ac3d79cf1c63"
  },
  {
    "url": "assets/js/196.537d98cb.js",
    "revision": "7c1712642cc6bd8f9302de0e7a552a2f"
  },
  {
    "url": "assets/js/197.a5359819.js",
    "revision": "f02c8748a3abbd73ad68b8e1f22f792f"
  },
  {
    "url": "assets/js/198.405acaa0.js",
    "revision": "a1bc791715aa780c1c7420f2993d1577"
  },
  {
    "url": "assets/js/199.4f1433b3.js",
    "revision": "9f8b74a7c3a9ce96522b86923e8998a8"
  },
  {
    "url": "assets/js/2.911fed4a.js",
    "revision": "f04a3a426cfd206b317f1bbd16d0e377"
  },
  {
    "url": "assets/js/20.850ebe5b.js",
    "revision": "19b35bcb4c6dcb689faa00596c25d7ae"
  },
  {
    "url": "assets/js/200.6a336a27.js",
    "revision": "2eeb886fb020fe2f9af824db24004da8"
  },
  {
    "url": "assets/js/201.47e9cced.js",
    "revision": "7bb963595a1d4ac882c46d7abf70412b"
  },
  {
    "url": "assets/js/202.9624508f.js",
    "revision": "22e161aae8754c74ee39e1b1fb218ac4"
  },
  {
    "url": "assets/js/203.edc742f1.js",
    "revision": "686eca37d304e4c3b2b21fa38f78553e"
  },
  {
    "url": "assets/js/204.02d4f790.js",
    "revision": "903d032a5464f588acf87366933daa7d"
  },
  {
    "url": "assets/js/205.7fcb1752.js",
    "revision": "a56971f4b439cad1235efe05cda5bba8"
  },
  {
    "url": "assets/js/206.7687db4a.js",
    "revision": "aa26a2053bda074f6837cdc3a266f72a"
  },
  {
    "url": "assets/js/207.7d49d37c.js",
    "revision": "8a1d775f6e4067826b55512fefab4a33"
  },
  {
    "url": "assets/js/208.aab533ab.js",
    "revision": "300d278d1e2771e2b932324372dad77d"
  },
  {
    "url": "assets/js/209.1162d421.js",
    "revision": "6aa041ecaef2d98926e1ceac492ee855"
  },
  {
    "url": "assets/js/21.5cf5dc70.js",
    "revision": "dc7945a4c82c63bcf44278ae3f379990"
  },
  {
    "url": "assets/js/210.8fd6bb84.js",
    "revision": "4f01aa7aa61bf91b580c37c95e036bda"
  },
  {
    "url": "assets/js/211.1846ce6e.js",
    "revision": "94cdae1fdd8b2f2a455c2900d184e3f8"
  },
  {
    "url": "assets/js/212.7bbdd543.js",
    "revision": "ec92eb6b0a5cc98a118ff4b1df490d31"
  },
  {
    "url": "assets/js/213.9db39e1a.js",
    "revision": "a9965298d3c0eb63fe62af235579b7ea"
  },
  {
    "url": "assets/js/214.342c6a5e.js",
    "revision": "40a0f8d45ce53936da3bece4be5fdf83"
  },
  {
    "url": "assets/js/215.fa7b7f07.js",
    "revision": "366284d2f6d1130d28500987ed7dfa8c"
  },
  {
    "url": "assets/js/216.e8a0a914.js",
    "revision": "9e0f3e84c6524cc5d1a887542f8ea5a7"
  },
  {
    "url": "assets/js/217.8df4937e.js",
    "revision": "018f3f5b095f83e4e44785c4fc19ab66"
  },
  {
    "url": "assets/js/218.f562667e.js",
    "revision": "14abb3928e686d71c1136ea5ff887e49"
  },
  {
    "url": "assets/js/219.86aed1f7.js",
    "revision": "6ca5ec9e78a2658ad5f54ea3baefee8e"
  },
  {
    "url": "assets/js/22.3808d6f1.js",
    "revision": "0ed5f8155c95d9b48b8f67c2e21b359b"
  },
  {
    "url": "assets/js/220.63969098.js",
    "revision": "c6a64ca588b6d15df804eb8a486e2987"
  },
  {
    "url": "assets/js/221.9571db59.js",
    "revision": "ced9f75bac6a3707538c0b7920897620"
  },
  {
    "url": "assets/js/222.6de1120c.js",
    "revision": "83fdd5db87c1b63c3e474fc43127d24f"
  },
  {
    "url": "assets/js/223.86fb61bf.js",
    "revision": "dafc1dc50e2d2ce1818bf1f29bf4b42f"
  },
  {
    "url": "assets/js/224.e5540155.js",
    "revision": "6f463839b0c1c74cd3ca188eafe1acd4"
  },
  {
    "url": "assets/js/225.12562aed.js",
    "revision": "3575848eb48f72ca45ab543f1c43a26c"
  },
  {
    "url": "assets/js/226.7406ddb0.js",
    "revision": "fd853350e69981728f908e82b532a832"
  },
  {
    "url": "assets/js/227.46df4083.js",
    "revision": "bfafc727f2f5417e26a3e074c5687dc3"
  },
  {
    "url": "assets/js/228.a845e61c.js",
    "revision": "504d911c71e44a635a5b88f0ed394bab"
  },
  {
    "url": "assets/js/229.b880e5bb.js",
    "revision": "9d28ef2ec02c49735bbff6e9f55c3b8e"
  },
  {
    "url": "assets/js/23.fe9a36cf.js",
    "revision": "5c64e3eaa77409c025ce282f58378b5b"
  },
  {
    "url": "assets/js/230.a5e953c8.js",
    "revision": "431766a37cb0d15dbc80e49b0bca9d21"
  },
  {
    "url": "assets/js/231.07806483.js",
    "revision": "a456c071dba0b96fb82b4f442a58c223"
  },
  {
    "url": "assets/js/232.a41924b8.js",
    "revision": "6c5656a4d05debb01b4aa96483052091"
  },
  {
    "url": "assets/js/233.57d791d5.js",
    "revision": "d87a1ee45670e152b1fc99464f868e50"
  },
  {
    "url": "assets/js/234.3cb7f1d3.js",
    "revision": "b69f7e527f875c7acadd4ee224315f3d"
  },
  {
    "url": "assets/js/235.c8ed78eb.js",
    "revision": "93bfe74f5cb822dbc71089cc8a5adcb2"
  },
  {
    "url": "assets/js/236.eb70b8a0.js",
    "revision": "0f95c6eae580d31c8899d7a58790fa7f"
  },
  {
    "url": "assets/js/237.7f73b1d9.js",
    "revision": "f1078a4779202bd4cb0a67c08caee6a4"
  },
  {
    "url": "assets/js/238.098c718c.js",
    "revision": "a9ce96f656f8dd0b4802c402bfece315"
  },
  {
    "url": "assets/js/239.9da0def1.js",
    "revision": "89b85a974835324a98c44cbc761a3400"
  },
  {
    "url": "assets/js/24.d6991ab4.js",
    "revision": "1fecbbca94802ad7d7ba45a21e5c659c"
  },
  {
    "url": "assets/js/240.9da6d2ae.js",
    "revision": "91ca9dc3bd17b087bb63ee2f96d70b98"
  },
  {
    "url": "assets/js/241.46892ac8.js",
    "revision": "33a7ffa9fa1ab26295acfca82c8169b1"
  },
  {
    "url": "assets/js/242.a3c5eb92.js",
    "revision": "48bcec38d358505340141471e49ef412"
  },
  {
    "url": "assets/js/243.5b8a8aba.js",
    "revision": "076d739755c487f8d85d2fa36c61e5e4"
  },
  {
    "url": "assets/js/244.8dd38624.js",
    "revision": "fad4024251b5f5f46865b434db3f411c"
  },
  {
    "url": "assets/js/245.b958ca40.js",
    "revision": "6de48394a44d248d10d3586c8aafc886"
  },
  {
    "url": "assets/js/246.0a1585cf.js",
    "revision": "4646807e2e1575dcd2c538b482c14b5d"
  },
  {
    "url": "assets/js/247.b0ef95c1.js",
    "revision": "5106c7747bb005792a4f3d90f755f3c6"
  },
  {
    "url": "assets/js/248.b04c3f25.js",
    "revision": "069e4f1d5be0607d15b4f453a048f5a9"
  },
  {
    "url": "assets/js/249.2bab187c.js",
    "revision": "dc3e8c3b886224052a302eff3ea79dcb"
  },
  {
    "url": "assets/js/25.68e00cef.js",
    "revision": "a4582224ca7e70bbda9642f602cc5e13"
  },
  {
    "url": "assets/js/250.d3fc0760.js",
    "revision": "f911af143c6e8193cfafd4d6af0b7405"
  },
  {
    "url": "assets/js/251.1893b23e.js",
    "revision": "bf33bde148c02b8d9d84c6aff26e7dba"
  },
  {
    "url": "assets/js/252.fdb908b1.js",
    "revision": "a4c6447efa0e0d8da446057716a2a0cf"
  },
  {
    "url": "assets/js/253.89f8cf98.js",
    "revision": "ec33ceb906e53b4ca05fc30b1dafc09d"
  },
  {
    "url": "assets/js/254.56176aff.js",
    "revision": "d3b2f4464f8e7ae5d0789ab7b85f188f"
  },
  {
    "url": "assets/js/255.8ad09566.js",
    "revision": "9784c6106d863499ee7477060131bdaf"
  },
  {
    "url": "assets/js/256.2aad6eae.js",
    "revision": "5f136623926cbf2ca576d5256a144206"
  },
  {
    "url": "assets/js/257.1b32accd.js",
    "revision": "cd6bf31f546ad14d28f75251d9e46025"
  },
  {
    "url": "assets/js/258.c6dc7e79.js",
    "revision": "01537c027ad93a8d696c37c9601c19e1"
  },
  {
    "url": "assets/js/259.d9f9c1bb.js",
    "revision": "78bd40ff49ead57ce207d7fe43bea4b5"
  },
  {
    "url": "assets/js/26.6e8b989e.js",
    "revision": "f324379f509036ff36c344f563842f01"
  },
  {
    "url": "assets/js/260.f8f3dc52.js",
    "revision": "c5155a248549d1630a75557fbde84443"
  },
  {
    "url": "assets/js/261.71318375.js",
    "revision": "967c9fddf9dcbe8c55d997223851d57c"
  },
  {
    "url": "assets/js/262.30a3aefe.js",
    "revision": "e8b39582cf8b2ca0cc4eab6c96b8e5e5"
  },
  {
    "url": "assets/js/263.34b4e862.js",
    "revision": "549ee3ba7c19a6aa22e0361a1d90f927"
  },
  {
    "url": "assets/js/264.c377526b.js",
    "revision": "6562bc3f44bac3fbc58c566ba75f9c9c"
  },
  {
    "url": "assets/js/265.ae6fab71.js",
    "revision": "c09e757fd1e40a267890b1f93740f36f"
  },
  {
    "url": "assets/js/266.37d3ed3b.js",
    "revision": "f2843bf391e08ae6ba36f04f074ab091"
  },
  {
    "url": "assets/js/267.3ee6fe47.js",
    "revision": "0abd1917a714373322102392fe4a41b0"
  },
  {
    "url": "assets/js/268.3a4d2f6b.js",
    "revision": "2ce61751db9ee8ba5fb53ccda9e2fe9a"
  },
  {
    "url": "assets/js/269.b3e6ca5a.js",
    "revision": "cf00a9dbdc25c9c4d723b0c5500573f0"
  },
  {
    "url": "assets/js/27.109f2293.js",
    "revision": "0ef9e5bdd015d36e3a59c96caef214a5"
  },
  {
    "url": "assets/js/270.221a744b.js",
    "revision": "7c8db6aee24f460b328af3ffb69a4048"
  },
  {
    "url": "assets/js/271.3ecf5215.js",
    "revision": "d7972524e291b9dac5cf31495a9682e7"
  },
  {
    "url": "assets/js/272.87b09a8d.js",
    "revision": "3582ed9a96a3a9554bce159e84631f46"
  },
  {
    "url": "assets/js/273.e32dfad7.js",
    "revision": "d51828f02ee864d6d16d6be9073772f1"
  },
  {
    "url": "assets/js/274.1352d47a.js",
    "revision": "c1b0d2d4ab3d0a201f2fc226311a2120"
  },
  {
    "url": "assets/js/275.2883885b.js",
    "revision": "9aea9eaa0890e05a8e6e500b4841d125"
  },
  {
    "url": "assets/js/276.bd9ae79e.js",
    "revision": "48f67fcc8dee64633381ad493743331a"
  },
  {
    "url": "assets/js/277.af279588.js",
    "revision": "379175d0d0eb890b83f0e4ac5d3dee9f"
  },
  {
    "url": "assets/js/278.0c4fe7fa.js",
    "revision": "8f5261569bee19a81639b976ab8c7005"
  },
  {
    "url": "assets/js/279.304ed148.js",
    "revision": "1fec6aa21dd75a31d7a18cae215bd327"
  },
  {
    "url": "assets/js/28.a41756ec.js",
    "revision": "78b322d072304e14dfeecf176ce357b6"
  },
  {
    "url": "assets/js/280.653f97be.js",
    "revision": "c18058249109f808a4679adbe99c39de"
  },
  {
    "url": "assets/js/281.5b0badf3.js",
    "revision": "2852f65b32edc023763d086f9511bc0e"
  },
  {
    "url": "assets/js/282.566c4fdc.js",
    "revision": "5737aea20005cd8a835d701ff243581c"
  },
  {
    "url": "assets/js/283.484b10a3.js",
    "revision": "7647cd5de2224aa39a961d98f428b8b8"
  },
  {
    "url": "assets/js/284.5f13de78.js",
    "revision": "ced6207813bf687e8a653116d816fb65"
  },
  {
    "url": "assets/js/285.d447a6d9.js",
    "revision": "045b1f3323a453a3c089f22576dafa28"
  },
  {
    "url": "assets/js/286.5b9dbed1.js",
    "revision": "4bdc56bea7794024779cee2d7c630802"
  },
  {
    "url": "assets/js/287.39d392c0.js",
    "revision": "abe1445fe99d6206cc4b5fb758ca8d59"
  },
  {
    "url": "assets/js/288.20bc9b22.js",
    "revision": "a5f3a6e0f4d87d2d057ccb14be09931a"
  },
  {
    "url": "assets/js/289.b4e950f4.js",
    "revision": "7a77a03325ce519f2586238e757db529"
  },
  {
    "url": "assets/js/29.41cbf0e1.js",
    "revision": "f47a3c096c8c3c6e15913e8640fc714a"
  },
  {
    "url": "assets/js/290.17c8cfe4.js",
    "revision": "53ccde625ccdaa6eba7cd2f1a749c05e"
  },
  {
    "url": "assets/js/291.88c4c52e.js",
    "revision": "dc1f917f3740a197ce670a9a2503e49d"
  },
  {
    "url": "assets/js/292.19b9f332.js",
    "revision": "e6b3ebb1382a1481fc79658257007aa5"
  },
  {
    "url": "assets/js/293.ae16494f.js",
    "revision": "db557aa4b2176edbe36c818906dcf2a2"
  },
  {
    "url": "assets/js/294.24681dfb.js",
    "revision": "b5ee1b0448ad1a4d75e0ebdfff4d164c"
  },
  {
    "url": "assets/js/295.1ffcf0ef.js",
    "revision": "cf2db2a5444efc747547dbd90ec89f9e"
  },
  {
    "url": "assets/js/296.54762094.js",
    "revision": "941b24006aded3818c7254ea0cfa409d"
  },
  {
    "url": "assets/js/297.1e064385.js",
    "revision": "4794863d516ea8275d774e921ff2db6f"
  },
  {
    "url": "assets/js/298.c76ee926.js",
    "revision": "d15455c09745f3935d04555868f92c86"
  },
  {
    "url": "assets/js/299.3e705db4.js",
    "revision": "73a7a0ab9617e3f4191114a88ad2ff28"
  },
  {
    "url": "assets/js/3.756e7b0f.js",
    "revision": "53ee4da4a99fdebfe1ae4ef0363840de"
  },
  {
    "url": "assets/js/30.42b3951d.js",
    "revision": "39a3eeb3988d54664ba16fa33918209c"
  },
  {
    "url": "assets/js/300.16681a5f.js",
    "revision": "e60ee423750d516566c8a1259e68ff4e"
  },
  {
    "url": "assets/js/301.00ea0ee1.js",
    "revision": "bc0008711ca54be9c939c89509398216"
  },
  {
    "url": "assets/js/302.3966fa22.js",
    "revision": "f66cbb85f48f6be802b0cb401a61d674"
  },
  {
    "url": "assets/js/303.53be4863.js",
    "revision": "d1abe5480fc221139d0e367971fb14a2"
  },
  {
    "url": "assets/js/304.0912547c.js",
    "revision": "1c4f28b2bcabfae08f0d118547d2bf01"
  },
  {
    "url": "assets/js/305.9046e8b7.js",
    "revision": "3fef0d0a5b1147ab9e9f477ca50dcca0"
  },
  {
    "url": "assets/js/306.4bb62402.js",
    "revision": "08f346a1e88ab75f9085247b47e499a6"
  },
  {
    "url": "assets/js/307.dc09edf3.js",
    "revision": "3a3477993d4843a923e0621c2ca3edfc"
  },
  {
    "url": "assets/js/308.57d2b725.js",
    "revision": "7209b63858a0a6c27f3a25f236d00074"
  },
  {
    "url": "assets/js/309.7f672f76.js",
    "revision": "1fd3c62247ad63d86360839888140558"
  },
  {
    "url": "assets/js/31.e8bd870e.js",
    "revision": "b9f9c3b75b3ce64cf3f604669fbd11b8"
  },
  {
    "url": "assets/js/310.62c9ab57.js",
    "revision": "64c5da6dcc422786766a2e7af0d71f34"
  },
  {
    "url": "assets/js/311.0c2636e8.js",
    "revision": "6dcc8a5831fb90a854aed1aa9139331f"
  },
  {
    "url": "assets/js/312.0078e3e4.js",
    "revision": "158d90df03d6864c473b153bf6ae21ee"
  },
  {
    "url": "assets/js/313.eff3de59.js",
    "revision": "2195bd58462a7e29eb122ea5e39e3ed3"
  },
  {
    "url": "assets/js/314.a0237ed5.js",
    "revision": "e653d5fc9005645e9485484f5d8fca86"
  },
  {
    "url": "assets/js/315.b9ebab9b.js",
    "revision": "97bd336053ed010971803d1cd3906303"
  },
  {
    "url": "assets/js/316.779bb3e7.js",
    "revision": "bc0bf2d07f0499acd01f747ccca24003"
  },
  {
    "url": "assets/js/317.64b440f7.js",
    "revision": "1d402b82d3d900163d5366cdd923db9f"
  },
  {
    "url": "assets/js/318.ae6f8f58.js",
    "revision": "1924208e27abd9205ea17298ef53ff16"
  },
  {
    "url": "assets/js/319.eeddf83b.js",
    "revision": "f7439fa79ccf63581187623199b61a40"
  },
  {
    "url": "assets/js/32.f81beef4.js",
    "revision": "04d2b0656103c00ae06feeeb427d9b46"
  },
  {
    "url": "assets/js/320.dede4277.js",
    "revision": "40ba0d741c5e9c93ff8e768a80c79007"
  },
  {
    "url": "assets/js/321.922f33a0.js",
    "revision": "21bd5eef543b81641450c65a79146f84"
  },
  {
    "url": "assets/js/322.8a56e565.js",
    "revision": "e51e12185bba81c2254f03d50753ae16"
  },
  {
    "url": "assets/js/323.2b061036.js",
    "revision": "5a1494b0cdbbe603275d4c375c47e543"
  },
  {
    "url": "assets/js/324.e36f85cd.js",
    "revision": "73e7d9da51d6e5877605bc643b15875a"
  },
  {
    "url": "assets/js/325.2efbd9c9.js",
    "revision": "acb2b6c6a6dc849b81442c097c1751ef"
  },
  {
    "url": "assets/js/326.0a5a7de2.js",
    "revision": "31c30cc06be2fe543819aeb80ae27cc3"
  },
  {
    "url": "assets/js/327.c77bd849.js",
    "revision": "2ad833cd79f609ace7ec4c214c6f0251"
  },
  {
    "url": "assets/js/328.4d94afde.js",
    "revision": "b22a0c66700af8b34b9549c21257cb5d"
  },
  {
    "url": "assets/js/329.88c4828a.js",
    "revision": "32aa31e41c16f6fae464d234d6f2765e"
  },
  {
    "url": "assets/js/33.0ba0c325.js",
    "revision": "0801e78fadc7e1337379d87d84d0875b"
  },
  {
    "url": "assets/js/330.ab05bc6c.js",
    "revision": "893999808b3cb63e31b831230f32d02c"
  },
  {
    "url": "assets/js/331.ace8c154.js",
    "revision": "7d7c8bc338517ec5e2a525e724054e9a"
  },
  {
    "url": "assets/js/332.e2b918aa.js",
    "revision": "4001317710e46d3727f97d787bc416fd"
  },
  {
    "url": "assets/js/333.e100a98b.js",
    "revision": "80d8a958c3fda53e079dbd2db08fa10b"
  },
  {
    "url": "assets/js/334.1b35e846.js",
    "revision": "d174e0ac96d513fe327181ac039c5848"
  },
  {
    "url": "assets/js/335.2e336b04.js",
    "revision": "ba0f84340ebae43cd8d08b239df6ff62"
  },
  {
    "url": "assets/js/336.b183219f.js",
    "revision": "0845b5546e47d40487ff5ad20590a75c"
  },
  {
    "url": "assets/js/337.136e7b77.js",
    "revision": "01fb95b6c17f96ba70b25be1c33fb026"
  },
  {
    "url": "assets/js/338.9dc8df7e.js",
    "revision": "9aadadba9cca79716214a62b08c71b9e"
  },
  {
    "url": "assets/js/339.0e9a4ce3.js",
    "revision": "494e84e6864f2cf1cc631184c26448d5"
  },
  {
    "url": "assets/js/34.32396ca1.js",
    "revision": "9728fa36d869f97c8f0537918506d133"
  },
  {
    "url": "assets/js/340.9d6c0d59.js",
    "revision": "37e3612046096c14144f42f5c7862f6b"
  },
  {
    "url": "assets/js/341.5ea7068a.js",
    "revision": "9140dfc0efa718fca7e0746686ef2452"
  },
  {
    "url": "assets/js/342.41809efe.js",
    "revision": "facde363c857d0a413a36f365006a312"
  },
  {
    "url": "assets/js/343.d72d6669.js",
    "revision": "67a205c9b42875f2b46df073f237f03f"
  },
  {
    "url": "assets/js/344.cb88e999.js",
    "revision": "b4baa6f90cf07303302eaae53acb83e3"
  },
  {
    "url": "assets/js/345.cd5797ea.js",
    "revision": "eff436b6ed683012ce5ca45647089b72"
  },
  {
    "url": "assets/js/346.91302066.js",
    "revision": "fb018e17e8a954a203874f143af35dea"
  },
  {
    "url": "assets/js/347.195b12f8.js",
    "revision": "d7fa566b10644318c974c720ecd8161a"
  },
  {
    "url": "assets/js/348.3c1d5383.js",
    "revision": "6dc51868d182e41253c3295c5a7489a6"
  },
  {
    "url": "assets/js/35.0154d3b6.js",
    "revision": "2d10d65769add221f9ed9496cd72dd92"
  },
  {
    "url": "assets/js/36.75fadd03.js",
    "revision": "38074d6c70b7bc2de0f768e5f235e22b"
  },
  {
    "url": "assets/js/37.c0558f25.js",
    "revision": "3449c09f57782aedb50c6c8869c42075"
  },
  {
    "url": "assets/js/38.f04dbe51.js",
    "revision": "5b4c8f8caef2d40c181871ed97343277"
  },
  {
    "url": "assets/js/39.59449309.js",
    "revision": "8788e652fec3246e0d002c29c500c02a"
  },
  {
    "url": "assets/js/4.96ebe9a5.js",
    "revision": "09aadafb73721df018249b57d5a35931"
  },
  {
    "url": "assets/js/40.586c6bdd.js",
    "revision": "b024dd1c0e25d1a08550ad82c4784f6a"
  },
  {
    "url": "assets/js/41.1c0f8003.js",
    "revision": "799efea10ab6b4223714ca76a000eec9"
  },
  {
    "url": "assets/js/42.d5d5a4b2.js",
    "revision": "b1b86b2be328b1d6589316449a260f8e"
  },
  {
    "url": "assets/js/43.41948b69.js",
    "revision": "69ad5c80625668efb676c7c10a2e8e85"
  },
  {
    "url": "assets/js/44.13ed6544.js",
    "revision": "090f47ffa0791d03fea097613613bd42"
  },
  {
    "url": "assets/js/45.b10bc98c.js",
    "revision": "bc2e1d7ea8cc545c8cb6bf5b535c4536"
  },
  {
    "url": "assets/js/46.9dde677a.js",
    "revision": "6613ca2b1b4590eb85208d4caf52e36f"
  },
  {
    "url": "assets/js/47.4ab5b7d8.js",
    "revision": "61287814edd2ffb925174271073277ae"
  },
  {
    "url": "assets/js/48.00580988.js",
    "revision": "f0cc81f587c1fa5b67ea254a6ff713ba"
  },
  {
    "url": "assets/js/49.a3a031bb.js",
    "revision": "35abda8384cafcc831b85c3852415c26"
  },
  {
    "url": "assets/js/5.9aa903ee.js",
    "revision": "1feb9a68186de7f56608049a283d858e"
  },
  {
    "url": "assets/js/50.20a1ef1e.js",
    "revision": "24bfa933268b3ef9fecda2dadb79f25a"
  },
  {
    "url": "assets/js/51.8c8a46f2.js",
    "revision": "d9e29e211cbb9645459c9c5ef1b90b0c"
  },
  {
    "url": "assets/js/52.e11704a6.js",
    "revision": "6860ef4ecd239e35e98d51aced8d8ab0"
  },
  {
    "url": "assets/js/53.2c63491e.js",
    "revision": "9500cab12ec187d96b7d23e8dfdef4fb"
  },
  {
    "url": "assets/js/54.f9962b86.js",
    "revision": "1244ee5228c1a1bc060bd54cbcb6ae57"
  },
  {
    "url": "assets/js/55.28d6a886.js",
    "revision": "11a5be7f848f368a5333b973bd98e71c"
  },
  {
    "url": "assets/js/56.b291115b.js",
    "revision": "6f2439a810ed2362e05c7db627feafb6"
  },
  {
    "url": "assets/js/57.63f54f8c.js",
    "revision": "bb25467da294ad61f770ffdcd8f4c893"
  },
  {
    "url": "assets/js/58.c0a5f14a.js",
    "revision": "aca22440e1dc99a0ed6007d0c68beca1"
  },
  {
    "url": "assets/js/59.215950ce.js",
    "revision": "7045b08405f79b2de1fed24050077cdf"
  },
  {
    "url": "assets/js/60.a8ad80b0.js",
    "revision": "29015bb44a91c3cd2602525a68b980a4"
  },
  {
    "url": "assets/js/61.14bc0fd3.js",
    "revision": "8f0f5824f1c8767cc95dbc0b6b4ce98d"
  },
  {
    "url": "assets/js/62.48998424.js",
    "revision": "e09136a0b64220ab1259fea02a9a310c"
  },
  {
    "url": "assets/js/63.0b19ec8c.js",
    "revision": "59daf53cda6d4a9bdc8803f56c1e77e7"
  },
  {
    "url": "assets/js/64.0b43844a.js",
    "revision": "e9d99f2db01252a57113d7dbec30ed89"
  },
  {
    "url": "assets/js/65.f03b73a3.js",
    "revision": "794d4e02dcc655c6e15131673953476a"
  },
  {
    "url": "assets/js/66.10ffd3a5.js",
    "revision": "a33aeed55ae9bf4c84fb83d8d6ecb576"
  },
  {
    "url": "assets/js/67.ac1ece80.js",
    "revision": "ceeaaaf8acbb1f76ce08d0b66612ae8c"
  },
  {
    "url": "assets/js/68.62f6e5ce.js",
    "revision": "f3c57a11c72cd1585feea40a3540ebf2"
  },
  {
    "url": "assets/js/69.f35d7745.js",
    "revision": "3474c9e023cf72e27e7a964a685a6b18"
  },
  {
    "url": "assets/js/70.73b3b94b.js",
    "revision": "061cc0547fd54ae7acc06518fbf1b5aa"
  },
  {
    "url": "assets/js/71.73bc067f.js",
    "revision": "077abf14ff7f921c2799d486a5eae589"
  },
  {
    "url": "assets/js/72.9de43789.js",
    "revision": "186ea125ce720ed2ed05fd1082a682bb"
  },
  {
    "url": "assets/js/73.a07678b6.js",
    "revision": "ff7caf519418e53832be34cbbc7ef74b"
  },
  {
    "url": "assets/js/74.313732e7.js",
    "revision": "39b60a3e28173b275fc6ecefb7a50973"
  },
  {
    "url": "assets/js/75.b7b84011.js",
    "revision": "210543e777dd784fca5c48eb7b77a03b"
  },
  {
    "url": "assets/js/76.f4d1891d.js",
    "revision": "6336f08c20acca3805a51943918ad640"
  },
  {
    "url": "assets/js/77.3bb66d67.js",
    "revision": "9095ec59827566fc9614b57cfca25ce7"
  },
  {
    "url": "assets/js/78.8c790b18.js",
    "revision": "9648bcace50b5e123f0eab60a0d44e82"
  },
  {
    "url": "assets/js/79.57849343.js",
    "revision": "0223aeaa28e2b1730d8dbad5fbff537b"
  },
  {
    "url": "assets/js/8.9bd12f31.js",
    "revision": "299a947a41388c1736ebcbd4d32f7102"
  },
  {
    "url": "assets/js/80.cbface73.js",
    "revision": "27de45daa5e71ff657b84d17ee180e19"
  },
  {
    "url": "assets/js/81.ad3ed716.js",
    "revision": "beb76f5b980edeb4cca7b4b34aeeb694"
  },
  {
    "url": "assets/js/82.e54fc6e2.js",
    "revision": "15532254d35d531c7c87e54f267fc7d3"
  },
  {
    "url": "assets/js/83.a6817df0.js",
    "revision": "46d22aa09015b6b89472858c0b14c380"
  },
  {
    "url": "assets/js/84.83bb8235.js",
    "revision": "e1873d7667645931e8f709a39b62de4e"
  },
  {
    "url": "assets/js/85.bdb84123.js",
    "revision": "a407ce94d1b744dc6518b93e9f5c034a"
  },
  {
    "url": "assets/js/86.93d02aec.js",
    "revision": "a6aeb6d68af8181077aa16dec824629b"
  },
  {
    "url": "assets/js/87.0103ae9a.js",
    "revision": "484edafcdbb42a017ce8cfffaa3a32f2"
  },
  {
    "url": "assets/js/88.fdd3b1aa.js",
    "revision": "025345c8623a88162928612776607d5f"
  },
  {
    "url": "assets/js/89.55b1fab2.js",
    "revision": "a8f44a3db3b4621d8f10d660f45ae607"
  },
  {
    "url": "assets/js/9.dfaca468.js",
    "revision": "2fc84ad16cb324d4543ae2ec6e298cb2"
  },
  {
    "url": "assets/js/90.4fb26aea.js",
    "revision": "10eae3f2be67117352740b7a3757a8c1"
  },
  {
    "url": "assets/js/91.7a9639c0.js",
    "revision": "e62d6bd8e073680846c5e0a87475109e"
  },
  {
    "url": "assets/js/92.3b49955d.js",
    "revision": "65621040a9e0fbaf5648da49067e698e"
  },
  {
    "url": "assets/js/93.72fa1513.js",
    "revision": "ebcdecabdcef1bc0be98d8e04e3456c2"
  },
  {
    "url": "assets/js/94.d0e7712e.js",
    "revision": "3c27aed9146015bc5150bbdbdacb3597"
  },
  {
    "url": "assets/js/95.9a6c6c09.js",
    "revision": "723de83fc5162851c178472aafd4c246"
  },
  {
    "url": "assets/js/96.d633424e.js",
    "revision": "21ec9623556ed6218d4acb460fb9bd3c"
  },
  {
    "url": "assets/js/97.4c404b4b.js",
    "revision": "f2c04f56faa840ff17d558aeacb15846"
  },
  {
    "url": "assets/js/98.45902787.js",
    "revision": "401a87bdbeafa606e14aa7214506ee60"
  },
  {
    "url": "assets/js/99.f8cd2eea.js",
    "revision": "f288bf3bed2807a8ac0bdbef247258d1"
  },
  {
    "url": "assets/js/app.44649b9e.js",
    "revision": "16e1400ef572e901008a60ddfa0d632d"
  },
  {
    "url": "assets/js/vendors~docsearch.3ae9fad0.js",
    "revision": "e3f26cd556464fffa906a503c9cc2428"
  },
  {
    "url": "index.html",
    "revision": "e3f64ea4261e0f32a11a9a10fce3ad93"
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
