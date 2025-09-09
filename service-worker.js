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
    "revision": "27e1649f0d47c12e010535524621e09b"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "ab80560cae4f56560ff2922940cacbfa"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "4ed6e4ffabe2fcc33dbf6ab61340005f"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "8855400eb9ff338a438176b1d7fc9444"
  },
  {
    "url": "2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "73ed11842d21660d141991d15c63beea"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "b10d937c873bf8d7a2de5fb087a510e7"
  },
  {
    "url": "2.0/b2b-marketplace/buying-leads.html",
    "revision": "a7c69109a7225c50fc67429b5c00671c"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "20104be7132a6fc54ec6a0a531fd7bbc"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "78e105f65683206674fa45aa1526ad7c"
  },
  {
    "url": "2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "7b6f44a10510b4f9791ef2f6f63cb17f"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "373aff671a5637904c54fee968244496"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "4d0eea3caaef5f1f8f1606839a3128e5"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "f5784b7640c48783c3fb6acc4885508f"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "02b2c690c3dc6e53018d196ce91b3728"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "77078ec9f009a9f7b366d86741d45cd1"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "24eb32041660ed4764267483448f2e4d"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "dd90e6f7a69770c5764f4fb295d9b74b"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "d66d912df4fa855cef33ee9fe10fe9a0"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "5695350d360678fc9b2d649489296ad7"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "048bf752afdd207123b5079ddbc6b56f"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "7d1e3391662dcf05633b5de943c3c95b"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "1a90aa18f3bdd425aed78d1cec328cd6"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "acac08109beb08a6beb83186dbe5e171"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "3c06e9273a0238887519397f5e6aa6e9"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "3859b51f186787aa9cc5d5c3c598ff99"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "8cf7eea27630b72cf0b6299dd08e3d6a"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "4d4357bb68cfdf9e1c1424f80a3bd01a"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "c5c9e4509e3b10750e2f9c6878d243ca"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "ddb87a2b87d51bd3269f165bcda266a3"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "ece2c913d66dec48304abad74e441e78"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "0014db8cca7bb8a1176f3c36e13b904a"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "d81277689eb7d862003a480808a4ec67"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "7f5d5f3d15986b5e4bcf822c14c6ac09"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "4b709e4c65048416e9cfc7b6fbc0c73f"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "4190558cdbfe78b130cfb778d5b634ec"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "8bdd88c03cda5a78d9aa4ee8f25520c5"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "353977bf61d0afd42898f3240d76af6e"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "a9c673c980195ac5b196d369fd5b598b"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "04fe9d13b2825feb7029c08708343ea3"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "85402ef62db70672d0b6ceefe22f72d3"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "07ad572eccd98fcfa18f513670367927"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "5c1c8656fe8b827848f19a05ddd93eea"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "a61da77be8de355bb98002dd6ca10413"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "3fae0a07ed79d709d42ce7203fa02a5f"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "766e1e0d010e8a7bcc36c347886612b1"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "44b539cf1dfde86402ac7216c59360ec"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "40daf8fc736205e3798ff04e08e7945f"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "e1ec2ea06b6a9a0ff679eaad7cc4ec54"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "9d5d4b7e787dd9e493e2a93f0dc6e27f"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "9107d38849ff40a7ee499e226fcce5b7"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "e698a242b14698bb302c33d085831b23"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "0f6f4ca0c03c5a83b1684cb5850376d4"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "043c7908603503d6a71f166ea009fef1"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "57b6a0156c5c86b3111765fd0ff7b605"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "78de80bbb6050fce4fc3d57f1f8855c8"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "bda0875a02ec36fb26754d31c4e1a1c1"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "69e7945ede51dc3b7c6d0d06b73c4eee"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "217810e7a729e147c9d0f7173e3c1f1e"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "75706f76005bb7385bed928afa42e9bb"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "836f5ad8dc62ae5cc2196084b57ba0f4"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "93c6872e5f6551c4bdb605c4a7000d03"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "5ea4e627191fe3256605d49c0afa9448"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "eb47a2235411cbd9868acbcbe69dd375"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "e8acb841548c1946ee156a7d0f790a2a"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "7668b7ae3fba56830bc4ffb109464252"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "fcdf7756996d17d8d13771546cb66f57"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "d70ec70338b61cbcbeedaf27643ebe22"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "7088b9802dd5e0795eb026e41bf0fe22"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "1ed96a74d823fff891def7151a667a87"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "8992a1b02914c5b905ce2d38125ff0ea"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "cb5f95c189107bbb2917e997fb31b391"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "c6e22389b7a4c02769cdc8c2651486bf"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "ebc23a80ac27e6229c7a9eab0baeb488"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "10e30b070afcc68a7f339f3208f79365"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "c228d6f1249c4a3201f80a4bd4a3de8f"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "4a4611bf673c8c7ea6f41c8c9d49a80d"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "59704175bf80b663d00f57a2aeefdc14"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "24d774c8f781446775cbcfb138932e07"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "33241f09cc89fbf7a6072bd2a5e28332"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "d8c027817326b7b0c2276f50dc01e570"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "67e7c4757356dbe0590a9a6932fb17dc"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "6a601afd5b2d9a2d5b5db81e71e58029"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "45f519b7c21ce2e6da5550108914bf81"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "1656c0a1e37993f9a930f5c2975d0419"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "552b1472b69577f3668088b94de362ed"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "7d568103e699d9b9d59a35df126e9f40"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "90b004c0e87dff66768a710caaf01dc2"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "47a2e910f727147031c913d9e042dac5"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "a6326599bed27464f4bc0690125802f0"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "6f9b9740e5b2e0ffa4af7258b31abd0d"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "352f4a4b206987a81b43b0ac5ba03a28"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "87ea1cec4ab54a408f4e82498d3abf06"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "f1c609c65366875a4839302299a97158"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "e2df1fbe1a7590cf5e0088a36e192164"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "827fbd70c73650ce0fcc258ace02e8fa"
  },
  {
    "url": "2.1.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "6346af7cfcb3f1e4e1771c51012ca758"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "af91ac9c8f74afc0a1e9386d611f2f86"
  },
  {
    "url": "2.1.0/b2b-marketplace/buying-leads.html",
    "revision": "bcd4a0a2bf41b605e945a5a90f4c02dc"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "34a661da148d6b4030009647974489e1"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "a9a4b4a78ce5127d173ee46cbebd61c9"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier-microsite.html",
    "revision": "918bfc8ff1746090ed10313714ffc1cb"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "02a5cb9414fc60a9e7108dd702b8257e"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "680f5caabc1d893d66a820c6f06fa53f"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "c7c70307c9c5cfa9b7252db99a4c8262"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "3917448f1cd8cec3bf1d6f1cfde67ff7"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "a54ae4785be37bf2f53fe2204fd4f062"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "8b191a2eceb36f2f8249084887f9f766"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "3985d3829f96fafd2d980aecba7f34ec"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "f502144a537f303880adeba6640eed43"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "29b694390c1248c1f5d904272e90f2fd"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "cdde5eeecf76a69205ab655ba3de1c6d"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "a77f947b80c7cab4f6dbdea93802b03b"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "ea91fa2674ebba4eeca5dd070a182c6b"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "de83e056a4b0bd7f634b429d0dad650d"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "2af7efa5ce41a9fdb572e543f5f70209"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "725a26b73530bfeef753bfb49d16a28c"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "497ba78b7a5e7acbb5d9e3ef762861ef"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "a75d0f644d2113fd332dccd5054e42d6"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "b5d1bbe456abed6cf742f92ea4c277eb"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "0cb3ad80e93ef40f90c020a49d387a07"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "fb5c1d79b981cf57368211e3d66e363a"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "e8622c32a4542cf1e39c5aaf940a8e48"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "b0eb1feb29d71ec661c04ee70805b0a0"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "5253b1b23d10f6f3a23c460583015304"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "9e3bf9fcfd50e8fcb7ab4616dc987bc7"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "89605e37ecd428a467aacc01f50d9f29"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "148274f246904bfdfd2fa0fd09a60e73"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "70506d575b42c51ff12d99d9c1325e9d"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "3a72a294cce5957bd2fcb7e299f66730"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "de09ef0ec849e6caa7fb7233f6e79161"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "b446d362306f0fa168b8ad0ecd359d4e"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "e5612b59a5562ab672f5a5fed9f1c61d"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "7e12df1d29bf43ab8c1ba79901b977d4"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "e6da22a5bbf4fe9670021520d62a012e"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "6fd3a31781fea45b0787e0d0f6eb9b95"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "a4d44350d781ff1ab5fefa0153df8c64"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "cdb010e9ee3fa45aac1e9b44806f9563"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "fa873c4f14227c215a5072ccaa5d49af"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "3e48ea5f534903d0f6aa558dd5dba60e"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "9064f08fd37ea76c2f89423a638990fb"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "dbad2e0e47630a3c8f59e198f9d6233f"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "c89ed2254f7d47024d3b261c0ac25752"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "4ce61b612a8284c34779cc0719a40693"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "bb169d4921b57d0a3480d4f7184c7388"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "ef9d90c94001c5b108169e225ed60efb"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "475c5380523e845ae346a82eab529a0d"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "28952e0fcf15e1ab46afa102f7d0cfb6"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "0e46907684cc6c9d3dab15c3be9e5038"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "a34bf1e4ba70ce66d34f28a8b1518503"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "c8f211b370922011c7926e6f502733e0"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "c92563aac5b7d9177422213b3fc93e22"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "3f6e59479ded65c453a4cc77943101c3"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "3c044dc076d635375f78a1f9cb3e6838"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "06d29fd1f3ba44e610a8d28f3e3c310d"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "d27dc69556e831fdff17a4589d1e431b"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "8c866f4cbd5e5fbda8af9adaef1d499d"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "62c29dcd2bc6c5226ed0a96957e7f31f"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "a0d3a947204658fc53031ddbc1ec4572"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "c986992c51947deb2de5330263c87c68"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "2502badf7ef0f43fae693c7837ec3c55"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "60dbbcbe9cd18ca22b03601da79b20c3"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "9d0279264c44219660936e869afc790b"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "bb6d3c9e7e749861bccaec3ad8fa5b95"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "7818961d3a11d9d77a27c9de02988ded"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "d9fab0d90379e68d58b1348187ecbd63"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "257f0ec8938850e0926187cc626ea5c5"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "751e2dc25f166a75a5eddbf79172cb8d"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "7ffdb446611ce19d4a49ef0bbcfe2cf4"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "46557dec0caac40ae6a0237d6dc54190"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "22e3c653ad800a56f5dcc7d217f9ca8c"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "dc1d717c3155258a41736abffe44a2e2"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "2360d6da38ab49d2850f21d30688d784"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "1b433b12edda0fc4c8c9ad1dad767ee1"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "410b4f433b93051fc8fe406d56b18bcc"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "ffd065bf0f4c1c36dbc936ba553c6815"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "2fa4b7e03bfa7cfe096e35b14d15ee4b"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "c70f1a5f732d08fc55a8b41a3be6193a"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "3b21501f789fe09744bf9fe650cb3f00"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "217187360869bcf247c45210bbd596c4"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "f2147f643c8b4b5afae9b6fa0ad05145"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "ef409002348b95ea18015faaae27150a"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "f5c4b56c0744fa62487442b595302764"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "4131c66c92fb0333f1ba938bd24f7be7"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "5b84f1dc755280f7f70c6b5e3132b5b9"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "5615450f9037ac04af4bdb5c430d5140"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "90fc9b910f3ba2c97967d01bca0b9d37"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "ed738d7b364f47486f96ea1c3255599a"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "8e106b520ddfc1a9b08d3922153b1b38"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "de0b67f468888272c4d8af5e1fdf2667"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "78a240703ebe343e85c571c48a63de0d"
  },
  {
    "url": "2.2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "0ec8b02ce35192748e7294855cec43f9"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "fdf7b65ff1e648f8b21c8f3458afc16d"
  },
  {
    "url": "2.2.0/b2b-marketplace/buying-leads.html",
    "revision": "027b2cd096f5f5b047505f880538b4ed"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "19245e8eeab22cf56f893c2836e2aff4"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "0c21c4ae0228a4d77fc95a17f1c5a827"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "17646d93a2d422b4c4804bba70eb831f"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "020f4bbf8a5c250c250ca69a7299ea2b"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "d7a4847c8520ccb843241423989ac110"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "236a8cdbb5587e7088fedb251608b445"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "f4df6ee38ef7f949f9b1af7479deec42"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "a56ad16e37e6a1efe275f3c304afffb3"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "aead00a0230b86e2e34befe7de04a514"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "9439e4d924ebffb5eb9c3432225bf5f6"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "a2b2b5d92cfcea2f0e3f9ac8b9ca7e33"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "6981859fe5b7a6ee668703ef0e074690"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "e7d2eee768ffd07fbbb89c98068d7f44"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "92327a85886d567aea5430bf154a282f"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "1e6abeefab0143c5baa5f26632cc2a24"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "549e2399edc48197279aa22968b3ef1f"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "34b641749013cd0a039f10214ff637b5"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "a9d53a1aa6c48295926f3fdd62fbea10"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "1510df1a5deefe65a8aef143a9ecf518"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "9b2379a62f6cf6fc19cc36ec42d659c0"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "5cefce3320ee39c287b7880daa190dee"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "1e21b745e431a0b2647bbde7351bfb9b"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "9cb92ad7dfa5be0f026f0f33ede1ef1d"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "c236a16eb267d45d3751d43d257ed7dc"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "c606dc6e07d54847b2d41e73dedac861"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "e7a151710dcee778acdb1862431bb2b2"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "7230feeb721031c575b5bd6cd5d13090"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "cac65873648a58b6ead4e3407c1e8eb6"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "28e70150689543a735afc2868e7e11fb"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "11855b55426b182a5e120bd64a52175e"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "acc7faf5d4d73c2ceb168736d32fe715"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "4fc0d722d3891490be65206ef8b77e8e"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "6efd5c314c67f0efbfa2a67c0784ea49"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "bd8059c55fcbeb4ab642dd950bf5fc7f"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "19915e4bbfd2d83f10f51058014aaf3c"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "cb80865c15c7228ff8b109fc955d8787"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "f0032abd3d2457df718b520dad7e9127"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "3b6ce3e0b4cddc41a26c43a6b46a4f05"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "aca3eb21e559763af09fc4e2d0e191d9"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "98893159f29fab50865e6e4fa8b08830"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "f426f035437f9a636e3c9920dac6d845"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "1108ca7ef40eef46c0a771906e19084e"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "09356197656de0d1478e67cb5a456286"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "997d2132a9218bbe5d1bbdbb868f70c0"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "366f805eb5cba026175dd8c86b6cd165"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "7e44c738c79aa6a2998b0150b164901d"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "72d402187b03a8ce40e883dd64c52f9c"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "35ace9b40087f77373c44ae2ec1d250e"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "07cb88095908d26f1cf90632686c336c"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "826eac9eb90008f6d3196c0c2dbb1126"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "29b0046e10ecbc5e98f08d119b41064d"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "bb870606f0ed712d41e9508fb04c815f"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "54dc7efa8e255eba29a157026a9fc350"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "948604428be365cf17b3061b19e894fe"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "7468e437320cecb6ece8c8ae4abc6c25"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "e35edd57e0de55f089f49ee23d1e51e4"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "98a30923f4345e1cae6e9795c1e0f471"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "39bb870d7e053aa64069d6047701dd36"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "bb6cbd9a2d6eacd56b74e35ee93e68c1"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "0e327a62ef7b9c6f926187cc386dc5e0"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "636737f13ff24110eb18805d0e12e705"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "2ab61ee06d55249a71822e5587d35a53"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "5bd2c0f836a60b5f9a472fc8a0669546"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "70f2054048dafcd196f800d61f4a9850"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "dce9d28b56cfd3236286b346a7bdd2f7"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "93ab76f410951bb65d808de14d4425e2"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "e9c225e3372666668420029df7192c81"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "f8a23e0fc299c225243ff99b9d7067cf"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "89ab6e79581327e9ae9e4577055d0fa4"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "19eae703169f5e7eb57c38b13af6279d"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "6c71511052f292a85a049e6c9f6a309d"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "3ebde6a37beebf27255a22ff67eadd5f"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "966368e20473a96cd766b5f088a750de"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "984e04ec780e1f2f80a48f0d422f49ac"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "7b31936073b9da8d3ce27a8fd1b5d8e3"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "cfa51288551dbd757e01038b6b15cbbe"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "3b2dc033f8d695ba93a5110e8c4b995d"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "ea84dbc404aca1f0bb806f1a6c0f93b1"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "9669bb4349e59ac2d4f526702801de61"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "069d6345357a438c0b8638454ac04187"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "da0147047f237eb99ab9c9d634994224"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "c32c97a33d7c80564b0e273782680d49"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "b4458949bcff73358e92207cf83b406f"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "e1d75e309d6f0d78c0414e07e9f0369f"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "f89bdf0df1bb44c69c4998c790808f0c"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "44c8f4da497fd7f55cac586b33f987f9"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "f5a06b8597af79d145546afdf9ab48b1"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "76b3c0d7831f36475dba68a3d940d01d"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "19f08692c7448b9be8bf59a5a8fd2ecc"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "b1ce18aff4929681f306c1db5a6de916"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "ffa3b573307ca71634403cebd00aa985"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "13930b0774f73fbb39767333b6d4f42d"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "663436ba6a841cd0d1bb6b81ea33bfeb"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "430662c8e46aa0a35c60e1a05238ef0b"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "a1379f64bef3a545f70c5ed8df0ce93b"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "5a92a16d897c79302120f899120a6ded"
  },
  {
    "url": "2.3.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "1ee0da2bc9ac876d4ee95bfb47b539b5"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "278a54e61ea55d29114fc51c99e04a49"
  },
  {
    "url": "2.3.0/b2b-marketplace/buying-leads.html",
    "revision": "4a582e76691f6ff06ac2c60925978cc5"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "a905bb4eb1fd02da1116a5b6ce299e88"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "1c07aae0878d7743d2a3b3fa05a2529e"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier-microsite.html",
    "revision": "af63637e374b5039cba6ee14fe12c1cf"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "66558ee39248659bf74df945da051f87"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "a84fbf5072eb5ad2bd1be62baaf02770"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "6e435dab51ee9f7f1f0d827fb7c94f57"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "d886a4d49bbe34c7e9e1dd754ff396b9"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "9b1eae952b770a6b9354f3845861a1e6"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "152d2ed955921d6a598bde633df13db2"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "d6bf1f0f21faf1506ec85a9eb339a9a7"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "6524cd2fd25d10995070dd6f91db78f0"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "4ded609411d755619f5908d39c91e974"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "560b71da1207c26cf01a3addc9447a57"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "7325e39e35bc69dd07a2506d1fa32fe8"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "abe167d64cc6a170e72ec908c3c5feae"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "0f57772a215364db3de92f22cde331e9"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "af1dc9e546b8a07e4b9ab3ca49ca78f2"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "c075d5040d9f49748c907abf0cbb071c"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "90b6f56c81d19d7bdfbf383625e94e15"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "014af1b08951fd91867f5e32188f68f2"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "7c6cb6eb204db4f3176fdef0f10c39d2"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "09f5fdc6eb18e61ed1b0e60e3bf8765a"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "a50d1847ef887737bdbcf5b835d806c1"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "1333652d0c59071b70be0a0f6af53457"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "5ba72c5ea5bbf50bf0c388d37108e3ee"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "ba46123638e5a7e611eba30b6213dd75"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "a1c54c204df47c0d2589c474f53fd31f"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "db5886474a40ac1d5548af22741bdb10"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "31430e55dd84a0f5da85762db79364a8"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "23d22a6f489371f4b053378ad4a3a389"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "1ab9cbd1d6cebef121d220a92cb100bc"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "10027698b3df61acc57305ec1f3b48c3"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "9787e800440bb129fd3e4f71be5b8ed8"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "59b7300a47a9d8d0e4dbbd2eecf06778"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "115843c513092f932b375db3303c7a79"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "febbb32f60d04890c2b6b3c19bf9fef2"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "eb06a3cf996e2168d7f71b0e9825fe69"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "9dbd26542f52b47dde6b0674c2c3b37c"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "4b2ff310dac612f880e5f4b0fc608190"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "db38d6aec2a34126f2984c23d959a46a"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "c26a01a34697bde1966dee3d77b86623"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "ae08ffe9c28b83f7f23b5e70490390d5"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "1f5d8979ba7e7737f84ffeeaaf248e4e"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "ffbd67b613dfbb378f1cbc0c8fbbd238"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "4623207ad5ae4571a51a165047e5b107"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "b6d121130d9621f9121aa29261e35ade"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "d2a84b2156272eb8f165ea459c95705b"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "c8e4fb0dc99c18c92a76d790c411450d"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "e7498f931ef866228c2e28b28b61f2bd"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "f732b70584c2f277af6814bd9b3e09a8"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "1151c90ad86d88483c4ffb0515b8d815"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "8824827539d11ef7d25a8819412b50c6"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "a115efc55dd3f131b7ec6b08fed85fe5"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "848ca4bb72473ec09022b63810cf96be"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "a79d2719434b07561ca6273761673783"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "39c6f5019edc4e09e32925ecdc76fa14"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "d5edfc1a8a4e933c76b5b3600361cd18"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "2d425bfdac3b3c7608e3de43494b1517"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "0b22f97dd932803a459bf22be03cf9be"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "9426df39d5c9d0e22918218053c6f6d6"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "195272be907c8eb2c8d74aced04ec186"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "d3cb5dcee00db72eaa4a3aa20d1a7e48"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "b204e79fdaf1c74d35a0e617862576d6"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "ce0ae8fb5e0c4a21d2a582c60132d980"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "359148ad2af1aeab64437d8b06679935"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "79e9a7386ff6ccfde2a1bb04e80e462c"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "6535cbe4db9b325dc277f9478b59fc40"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "c037f8a3bc9be2d1ceda636c2647e459"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "a6d8c73bc440b2b98001557776a1bbc9"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "49f31ff92799b203451c74ca106c57a8"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "4a415583bd1c171cc35ffb5925c38475"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "eee95a9bb34d165a7f702158fe028326"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "974bbc993defeecdfbbb4aded3bf6b37"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "d1a99d1b2a844618ef778acb37683dd6"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "c4bee994895edff4cc71647886a76b65"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "3fca623b8985f2eff9f8a2f91e2ce3be"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "ef95eed282acac9db1f99f3b55ac331d"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "182078652957f5b7f5c1f9e769e60752"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "cce050855ce68fce680206e0641e4bd4"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "f469ced56a618209019b13381e41b574"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "fbffbd392b914397c1a8d401a4547b28"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "0eb0fe605a05c3e2861162e706a71718"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "4e918f5e275da53032169b9da4af59b9"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "e1444d38579d3e4f70f1c3ce7902353e"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "3fa03bc42f2bb76cb137d5e9e7f17bbc"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "236fca9d5651540bc6f312f7ac3793ca"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "79cd3bf7ae75191a47d6daddfed9fc11"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "fdf7fc473c265830248de3009f964da3"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "74553125deb43784e22da50058b517c4"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "d74c0aa8924accc7be9edca6fb41b694"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "c64f335a37cb3474a99f73f36312ac7c"
  },
  {
    "url": "404.html",
    "revision": "b65be41969a7ec3df1be21718f8d78d4"
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
    "url": "assets/js/1.32af25f9.js",
    "revision": "c3fd8723bc206798287e3dfd24b51ca9"
  },
  {
    "url": "assets/js/10.039d01c0.js",
    "revision": "20436d2037a4eb0f196c9b3fa2a24c45"
  },
  {
    "url": "assets/js/100.1286ed04.js",
    "revision": "468538a403416b1517f5c7c5b18f4989"
  },
  {
    "url": "assets/js/101.f48653b0.js",
    "revision": "e39c85fe402d4bcdeef41a49ab197a91"
  },
  {
    "url": "assets/js/102.ebcbafcc.js",
    "revision": "3756e131c041a3e959988c7724ce2277"
  },
  {
    "url": "assets/js/103.28d81efb.js",
    "revision": "e2941f458ea73e062dc7d34aaf5bd558"
  },
  {
    "url": "assets/js/104.7a9612ba.js",
    "revision": "de4d538a8c827e48e9192dc39ded1179"
  },
  {
    "url": "assets/js/105.313c1110.js",
    "revision": "2ee884dbc9710ac883a799aaadff0ef1"
  },
  {
    "url": "assets/js/106.6fde4d64.js",
    "revision": "dd4cde130121d7b7d04427ddc4055d1a"
  },
  {
    "url": "assets/js/107.68b95c0e.js",
    "revision": "ea21966bdf9d43bb5eb3f462855849e6"
  },
  {
    "url": "assets/js/108.12e62e6b.js",
    "revision": "853eae1aa7b267578a9ba44e86553ea4"
  },
  {
    "url": "assets/js/109.e060ef39.js",
    "revision": "20fd40708940862564ef614d38ed9ce4"
  },
  {
    "url": "assets/js/11.284feaa4.js",
    "revision": "435b60e280748510e4510d101e112db1"
  },
  {
    "url": "assets/js/110.247d5d6c.js",
    "revision": "3b0d9349f3e68911bf5d39ca6de937ad"
  },
  {
    "url": "assets/js/111.8a8f8ae6.js",
    "revision": "9c605fc5c2024be9a8df979c5b03d412"
  },
  {
    "url": "assets/js/112.a64f5580.js",
    "revision": "cdda1c01fcde6b6e83e63deb904b56ce"
  },
  {
    "url": "assets/js/113.6acc8877.js",
    "revision": "bfa487bd78febda5f7e1bab1894f2ffb"
  },
  {
    "url": "assets/js/114.cc1ab189.js",
    "revision": "b3bf5378f7df7a0d1b01fcbe1409dd95"
  },
  {
    "url": "assets/js/115.39838003.js",
    "revision": "664a10292df8930bcb8ed8b0f73965bd"
  },
  {
    "url": "assets/js/116.47426378.js",
    "revision": "6db655888611446a9a1c0537ff67823e"
  },
  {
    "url": "assets/js/117.3e4b1b07.js",
    "revision": "34c5e2e4fb5632fb4b4f65a835014729"
  },
  {
    "url": "assets/js/118.49911f63.js",
    "revision": "f8ecddca4cf385b15016a83b80a3b4b8"
  },
  {
    "url": "assets/js/119.a385000f.js",
    "revision": "59955d0870a5b53ef22f608696820b85"
  },
  {
    "url": "assets/js/12.a43e5b51.js",
    "revision": "2ed6f31d4130a7c2577443e8a2e29e7c"
  },
  {
    "url": "assets/js/120.53aac108.js",
    "revision": "44ce3a8c615fdba3834f66aa29a95440"
  },
  {
    "url": "assets/js/121.0d0d4f7c.js",
    "revision": "89276f00718b98359b74e0dccf317d3f"
  },
  {
    "url": "assets/js/122.acd0f202.js",
    "revision": "6525aad9be392631b5fcd5202ee8c991"
  },
  {
    "url": "assets/js/123.99970c75.js",
    "revision": "d376e6bad74deb50895e7f9d86108f2b"
  },
  {
    "url": "assets/js/124.bdcf50bb.js",
    "revision": "7324cb7ef3186fea2c6e32155b597bc2"
  },
  {
    "url": "assets/js/125.ccf08813.js",
    "revision": "562726cbfedea95933c43995ca87f581"
  },
  {
    "url": "assets/js/126.bc91c9af.js",
    "revision": "9349182155443160f134f0efbe790559"
  },
  {
    "url": "assets/js/127.5a7ebcd0.js",
    "revision": "7b4ba0c914b2e129e24421ebc0e3529b"
  },
  {
    "url": "assets/js/128.a08db2df.js",
    "revision": "3815e08a3eddf29537a54bc67ab2cc0c"
  },
  {
    "url": "assets/js/129.53620df2.js",
    "revision": "2f75e16445b3f7fb6ecc83075ed1ea54"
  },
  {
    "url": "assets/js/13.2d93bace.js",
    "revision": "a0298c774b1c05aafd48f7703b1772e1"
  },
  {
    "url": "assets/js/130.b6f0baf5.js",
    "revision": "2c339b69894f5db58aec9593b6928507"
  },
  {
    "url": "assets/js/131.a9be56b3.js",
    "revision": "71077b40da7c88e80c817d766ad71396"
  },
  {
    "url": "assets/js/132.9a3a2ca7.js",
    "revision": "27823fd266088e4634642932f0b4aa53"
  },
  {
    "url": "assets/js/133.a668f6cf.js",
    "revision": "f7a7df2f6406dd0a989949675c2fa019"
  },
  {
    "url": "assets/js/134.52eb4c20.js",
    "revision": "6db9d27c2959a116757e1a06fd63006f"
  },
  {
    "url": "assets/js/135.ec85e8b2.js",
    "revision": "8a21a7c74eefd6cff805e55dd105af74"
  },
  {
    "url": "assets/js/136.83ebbdec.js",
    "revision": "b12fd3315a4b4b9fa99a7950993eb148"
  },
  {
    "url": "assets/js/137.e21a58c0.js",
    "revision": "192fe52c6450d690d573b4dd1c4bdf2b"
  },
  {
    "url": "assets/js/138.c43a5135.js",
    "revision": "5bd426927ef59674a1c3a4fe27b7dd18"
  },
  {
    "url": "assets/js/139.fa6e3f16.js",
    "revision": "3b82e3fcfd0be02c429134e855e2f261"
  },
  {
    "url": "assets/js/14.1eaf2256.js",
    "revision": "ee953b209c46cc7f17ac1cbc206f9561"
  },
  {
    "url": "assets/js/140.21eb5c04.js",
    "revision": "cbfc24b80695e96e5837db61629e41e2"
  },
  {
    "url": "assets/js/141.7c053898.js",
    "revision": "af9ad8cbc2f4be6a5d956c6ba6b6b75e"
  },
  {
    "url": "assets/js/142.db2cb755.js",
    "revision": "935fdc8bec7429734a00417f9868829e"
  },
  {
    "url": "assets/js/143.1fe04a5f.js",
    "revision": "423d4c1d7b350d30a74f31b9d0399dba"
  },
  {
    "url": "assets/js/144.0bf29cc5.js",
    "revision": "40c7e4a99b92c9fa54b93d4c55b01118"
  },
  {
    "url": "assets/js/145.f8cb77fc.js",
    "revision": "5bfb412b3cfcb3416040685ca19b2854"
  },
  {
    "url": "assets/js/146.78550153.js",
    "revision": "5c70fb55ae4c7c26b5839c2ee3562814"
  },
  {
    "url": "assets/js/147.af51e898.js",
    "revision": "af2f72d3387c31aadccc474c8ad0502c"
  },
  {
    "url": "assets/js/148.5fbc8727.js",
    "revision": "5fc36bcb8b6931f56e2a92125b93ecf1"
  },
  {
    "url": "assets/js/149.b4c7906c.js",
    "revision": "0e66f1c1e8a19677be3882464bcac318"
  },
  {
    "url": "assets/js/15.436af40d.js",
    "revision": "4b79cd0403a627b8264589b784f77f8e"
  },
  {
    "url": "assets/js/150.18bacb8f.js",
    "revision": "a36fb3387eb9c0a6e39beec725e0bf73"
  },
  {
    "url": "assets/js/151.1abe372b.js",
    "revision": "05b731f05d8358a56d19e4bc062e3078"
  },
  {
    "url": "assets/js/152.b5138da6.js",
    "revision": "b02f4f2306d48d0e92f22a229b0b866e"
  },
  {
    "url": "assets/js/153.e3e1e871.js",
    "revision": "29fdc9ceba485514ad80d7bf991018b6"
  },
  {
    "url": "assets/js/154.856b4187.js",
    "revision": "f39e8da5ad8a106c7507d54bd77bc806"
  },
  {
    "url": "assets/js/155.cf6268dc.js",
    "revision": "e144b4370c470cd74e1aabfc4e7f3363"
  },
  {
    "url": "assets/js/156.6c396034.js",
    "revision": "91fcabbcb39d7eee674794d1d846748d"
  },
  {
    "url": "assets/js/157.7b5556e5.js",
    "revision": "10899b92d86b53907486ceaee075bb3e"
  },
  {
    "url": "assets/js/158.8694b634.js",
    "revision": "f9ae1d440420e7d3d6ff61c65573779a"
  },
  {
    "url": "assets/js/159.bcdac204.js",
    "revision": "7fd3e96a5d49b178037d97293e4e22bf"
  },
  {
    "url": "assets/js/16.1be932f0.js",
    "revision": "291bde7b80442d09de7ea19e2f179f41"
  },
  {
    "url": "assets/js/160.619a1fe1.js",
    "revision": "748bd54fea50b50ed708d65a2dc2b1d3"
  },
  {
    "url": "assets/js/161.2d2433ad.js",
    "revision": "8557b6ac94f9f32a8f69623d22bd8dc2"
  },
  {
    "url": "assets/js/162.a87a58de.js",
    "revision": "231d2a68f6d91b9c4449cf818e4d2d58"
  },
  {
    "url": "assets/js/163.3f2940da.js",
    "revision": "41baad1fafcc9b80d09890db96d09476"
  },
  {
    "url": "assets/js/164.3e21dd95.js",
    "revision": "cefaf00396667c6ecaa7bc8ba8bbaa5d"
  },
  {
    "url": "assets/js/165.2dcecb91.js",
    "revision": "bb885f32c0f4e7d41f275647d8bb2917"
  },
  {
    "url": "assets/js/166.2fbaa2a4.js",
    "revision": "2bda4212204abc3d9e5a9ab014585c9c"
  },
  {
    "url": "assets/js/167.e129fea5.js",
    "revision": "829c506420125043a6b75f3521369b81"
  },
  {
    "url": "assets/js/168.f066fecb.js",
    "revision": "d7aeea7f6c4453b70ab3e50fe2f24b24"
  },
  {
    "url": "assets/js/169.135ac166.js",
    "revision": "ab95465bc4f0319961e9775423c73806"
  },
  {
    "url": "assets/js/17.5535c41e.js",
    "revision": "159e7c9aa029247da9b9574e63ad5756"
  },
  {
    "url": "assets/js/170.7f98e1a8.js",
    "revision": "959cd569ee9731009e8526a2fb550b9e"
  },
  {
    "url": "assets/js/171.8a0d9ee1.js",
    "revision": "65a1a39f314ce556114e4cf0f1c4ea4f"
  },
  {
    "url": "assets/js/172.a54e280c.js",
    "revision": "bcd0b2407d7aa6845287243522ae31d1"
  },
  {
    "url": "assets/js/173.7bc20c99.js",
    "revision": "ec0ab08e196091e9516fc1a85382132e"
  },
  {
    "url": "assets/js/174.cf525e07.js",
    "revision": "94b70556b7a1b7ef82e71599ed5a80f0"
  },
  {
    "url": "assets/js/175.bca2d276.js",
    "revision": "e1edc689b17898f80be4aa82deb13586"
  },
  {
    "url": "assets/js/176.95ea0c32.js",
    "revision": "580a2fd12d392e81c74eff04c0f81cba"
  },
  {
    "url": "assets/js/177.173cfbe8.js",
    "revision": "c90e72006e647b089bc2aac5fb43a728"
  },
  {
    "url": "assets/js/178.dbbd31ec.js",
    "revision": "ddc7bd9de7485738d33b8954bf3c3308"
  },
  {
    "url": "assets/js/179.3700ed85.js",
    "revision": "4f2e13141de4d6b47b1d3846add288f1"
  },
  {
    "url": "assets/js/18.a5524dc4.js",
    "revision": "6e23f23a79fa1aa97548d5b188b3e6da"
  },
  {
    "url": "assets/js/180.2ee1fd65.js",
    "revision": "bcdcce374be91013c2ea565ed866085b"
  },
  {
    "url": "assets/js/181.b141d460.js",
    "revision": "dd21466e9040cb2c9563bc7b95936f46"
  },
  {
    "url": "assets/js/182.5c0e0ca3.js",
    "revision": "e412a449e6dcec0c7592f705368e4d2e"
  },
  {
    "url": "assets/js/183.bf8ee381.js",
    "revision": "de16cdab4ec18df9054516989c61000e"
  },
  {
    "url": "assets/js/184.9151bde2.js",
    "revision": "f1c23f14e6200ff7c03fd8b9ab0b0431"
  },
  {
    "url": "assets/js/185.c0601964.js",
    "revision": "1291bb5533644e6620096a44e377fa0d"
  },
  {
    "url": "assets/js/186.93ed6209.js",
    "revision": "7c4aaed5508c5a9f48cf0c85f756c38e"
  },
  {
    "url": "assets/js/187.43be8852.js",
    "revision": "d344853b953c79714ac9a2df26268f47"
  },
  {
    "url": "assets/js/188.49f9f8e1.js",
    "revision": "445b4fa351a057afaec52fb68ad0be97"
  },
  {
    "url": "assets/js/189.f057b9bc.js",
    "revision": "986d51a3c578560913aaaab80d3928b3"
  },
  {
    "url": "assets/js/19.f2091bc2.js",
    "revision": "fe213ea92be06742e1499580ffb142f6"
  },
  {
    "url": "assets/js/190.4591213b.js",
    "revision": "275b13feadb1aa87b5d09e0a9f0d7b28"
  },
  {
    "url": "assets/js/191.2bb55967.js",
    "revision": "edda4fa8af4f453bb14110f1ba9e2759"
  },
  {
    "url": "assets/js/192.fcc9ec67.js",
    "revision": "a3e24f93eda2b884ba20b0f9f4f7f6e0"
  },
  {
    "url": "assets/js/193.650dbbc3.js",
    "revision": "1b3116aeff5a70cb61748792532a7f9d"
  },
  {
    "url": "assets/js/194.e60abd8b.js",
    "revision": "9f4dbc3cfb00ab191ebb24e226a1f46a"
  },
  {
    "url": "assets/js/195.58adeacd.js",
    "revision": "968c6fec40255a75474285cbe506b080"
  },
  {
    "url": "assets/js/196.9058ac1f.js",
    "revision": "714b79d2c83e257b5e3b9d7569898a5c"
  },
  {
    "url": "assets/js/197.52990c2e.js",
    "revision": "b18f3ec2d13636d1bb83c368be172f97"
  },
  {
    "url": "assets/js/198.86e91a69.js",
    "revision": "9878950d028788582978755f4ef705a6"
  },
  {
    "url": "assets/js/199.54d41d5e.js",
    "revision": "19410e48c0f8c1ff821837aa9dd4658e"
  },
  {
    "url": "assets/js/2.339134bf.js",
    "revision": "a331560b9153324a3944500605a32cc0"
  },
  {
    "url": "assets/js/20.7e8f3db0.js",
    "revision": "f909be4eb20dc7cf6ceb375640475cce"
  },
  {
    "url": "assets/js/200.91fd0f60.js",
    "revision": "81c0bdcf2a3f0b96a8a93b402355baf0"
  },
  {
    "url": "assets/js/201.9d34de27.js",
    "revision": "bd06933e4de8f5557d6d2c7a376a8393"
  },
  {
    "url": "assets/js/202.91fcbb06.js",
    "revision": "f007abdfd5ee09f110d767892dd3df80"
  },
  {
    "url": "assets/js/203.db9de684.js",
    "revision": "ea2663cc3728cde04d2e599cdf811026"
  },
  {
    "url": "assets/js/204.10035968.js",
    "revision": "08c138198c1544225a0ecc8ad7c389c4"
  },
  {
    "url": "assets/js/205.a848b471.js",
    "revision": "b7690a64334da31f55d520f158b64f43"
  },
  {
    "url": "assets/js/206.45734f11.js",
    "revision": "a3d8a5859cb4ac93378b2eff69da8f73"
  },
  {
    "url": "assets/js/207.4ca78ede.js",
    "revision": "02514ae84beaaafb03ec4b3e9b496ee7"
  },
  {
    "url": "assets/js/208.e665a4c3.js",
    "revision": "657a59524e0a4208c556f78c57e01468"
  },
  {
    "url": "assets/js/209.43270124.js",
    "revision": "041312adcf89d4e7352f1c6c966f76f6"
  },
  {
    "url": "assets/js/21.f98e5dec.js",
    "revision": "08651b1ae0571e9956a56f756b567fe4"
  },
  {
    "url": "assets/js/210.182caee3.js",
    "revision": "b47c4b8979eaf3e93e2155a91e9570ba"
  },
  {
    "url": "assets/js/211.9e013ce1.js",
    "revision": "7d2064fbd6440ff9506c07eefe728b6c"
  },
  {
    "url": "assets/js/212.264db6f6.js",
    "revision": "d7f76efdd0de45f1b6221432cbe7a6ed"
  },
  {
    "url": "assets/js/213.c3058055.js",
    "revision": "fc37d9d7554474640f8a45a201705823"
  },
  {
    "url": "assets/js/214.400e4c2b.js",
    "revision": "220153011c3cfab2e2a01b2f1bcdccea"
  },
  {
    "url": "assets/js/215.cf950d16.js",
    "revision": "ede8d87ae93add65cb1b6cdf598fdf34"
  },
  {
    "url": "assets/js/216.0a28b332.js",
    "revision": "26fc90611e3483a205cb0dfc3e216735"
  },
  {
    "url": "assets/js/217.771058b8.js",
    "revision": "813d3532ffa4aa8fe27b11c2e597c07b"
  },
  {
    "url": "assets/js/218.a8be7dbe.js",
    "revision": "4c5b824326d8853b78dc1505bf8f5e10"
  },
  {
    "url": "assets/js/219.450222f4.js",
    "revision": "c79c2a4ed930eab2eda7df6f53203c87"
  },
  {
    "url": "assets/js/22.eee96d19.js",
    "revision": "7779226c6d3c5e7c96410a9405487519"
  },
  {
    "url": "assets/js/220.4f0adad7.js",
    "revision": "b5f3c2fc0bf3f263a0e472ca810ca231"
  },
  {
    "url": "assets/js/221.18eebb12.js",
    "revision": "f03527d39eff7d377ebb7fd8ea2a3632"
  },
  {
    "url": "assets/js/222.30ef375c.js",
    "revision": "87844072846a9648f38a2d496b12d068"
  },
  {
    "url": "assets/js/223.c8a8bdc0.js",
    "revision": "f4554884b8b404b32e17b1994520c163"
  },
  {
    "url": "assets/js/224.bbc39fe7.js",
    "revision": "691bdd33f040ef2763b58518c0ddb133"
  },
  {
    "url": "assets/js/225.f328c3af.js",
    "revision": "e6ff88e611ebb9e61252644e2addd4a9"
  },
  {
    "url": "assets/js/226.04972dc4.js",
    "revision": "7ad7bb388478e779d3375d794d34d8a4"
  },
  {
    "url": "assets/js/227.0002f406.js",
    "revision": "a8688bb71dc40f98d5efc1ebb616bf4c"
  },
  {
    "url": "assets/js/228.193397fa.js",
    "revision": "574827079ae5f01fa74c9adb9a35a9e7"
  },
  {
    "url": "assets/js/229.3ee7a330.js",
    "revision": "167a7ded86bac92e0340653bf096fcf7"
  },
  {
    "url": "assets/js/23.13123b65.js",
    "revision": "4832538cf942d9716f05d3428ec69f9d"
  },
  {
    "url": "assets/js/230.344b8600.js",
    "revision": "7544e666da285e68477cac7c6a8e66c1"
  },
  {
    "url": "assets/js/231.46f32fbf.js",
    "revision": "01133433c006c29171345b3913996a34"
  },
  {
    "url": "assets/js/232.7e0535dd.js",
    "revision": "04f0883f196d75d3e72f8dea59507ec7"
  },
  {
    "url": "assets/js/233.a64c6d8e.js",
    "revision": "87450d797b4855673fb328614d791350"
  },
  {
    "url": "assets/js/234.5dcbb564.js",
    "revision": "15b4208b599a1385c8126ab4fcbd32c1"
  },
  {
    "url": "assets/js/235.1953ff71.js",
    "revision": "26e092665a5e8e9c388291099cec6139"
  },
  {
    "url": "assets/js/236.418e899b.js",
    "revision": "b86c6a6410eb84a937f87b0c09d0bd70"
  },
  {
    "url": "assets/js/237.d830b705.js",
    "revision": "33c001ae2068d913a104c8535e728d3b"
  },
  {
    "url": "assets/js/238.391cd18c.js",
    "revision": "6b4523f1166a72793c4dada752aa4de2"
  },
  {
    "url": "assets/js/239.589f7b1d.js",
    "revision": "33d0da98c2eccddb6127a3ecf0b9d360"
  },
  {
    "url": "assets/js/24.482b86e6.js",
    "revision": "0a8df2e3926817633a4dfc2a8d5bb60d"
  },
  {
    "url": "assets/js/240.9c5dcd69.js",
    "revision": "c650805106aa923dcd4942b9dc6ef31a"
  },
  {
    "url": "assets/js/241.a85b432f.js",
    "revision": "15229bce9eb18d1fb943c2b3646b18ea"
  },
  {
    "url": "assets/js/242.a8cebf4e.js",
    "revision": "bb1e047d3825849932b30ba9ee25b19e"
  },
  {
    "url": "assets/js/243.90f82cd5.js",
    "revision": "4df5ed22be68b425e55c8111070deaed"
  },
  {
    "url": "assets/js/244.9a5b3ac6.js",
    "revision": "0cfe89572159bd92486d28458f19128c"
  },
  {
    "url": "assets/js/245.643fd9fc.js",
    "revision": "73aef300136152bd1b8c3746ed00765b"
  },
  {
    "url": "assets/js/246.a82ceb4b.js",
    "revision": "79bb767820b9e2c54322379b6f08a3fb"
  },
  {
    "url": "assets/js/247.28c8943d.js",
    "revision": "cf2fab810ba2adb23d61be5dc32c8a5a"
  },
  {
    "url": "assets/js/248.069ee3f5.js",
    "revision": "437b474a33ebab83855c2f87a44112ca"
  },
  {
    "url": "assets/js/249.fe402b6c.js",
    "revision": "d08ff614d02ca6fc0e3502a39f5e5ed1"
  },
  {
    "url": "assets/js/25.abd267b0.js",
    "revision": "44519cbe31932b305352b58b88e91465"
  },
  {
    "url": "assets/js/250.64a1bc80.js",
    "revision": "95c5c54ba3899cc9490cc01324d9212b"
  },
  {
    "url": "assets/js/251.ac4f0ed7.js",
    "revision": "dd61cebf993825a41b641041c31c2aef"
  },
  {
    "url": "assets/js/252.268e2a8d.js",
    "revision": "3e30e96943f30ae77d3b38513cd95321"
  },
  {
    "url": "assets/js/253.85218ad2.js",
    "revision": "d840348d9fedbb56156f9e3f0801d43f"
  },
  {
    "url": "assets/js/254.ef7a2759.js",
    "revision": "5374a76f38d90b191f05fdfeeec587ca"
  },
  {
    "url": "assets/js/255.707f58d7.js",
    "revision": "c192e16f6fc3a5db028335c615f42d3d"
  },
  {
    "url": "assets/js/256.963d8ad3.js",
    "revision": "16f04c8947b68cad07b69eb9cd36a148"
  },
  {
    "url": "assets/js/257.e315ff9a.js",
    "revision": "bfb0342168f0b1051cfc63a142756420"
  },
  {
    "url": "assets/js/258.f7446149.js",
    "revision": "9f9a0227bae66c23db54356dc2bdc95a"
  },
  {
    "url": "assets/js/259.530d23b4.js",
    "revision": "c92e1c3353faea2c32089253bfc9aa70"
  },
  {
    "url": "assets/js/26.7c13671a.js",
    "revision": "d8c06874bda9be6f28fa5c3245096d34"
  },
  {
    "url": "assets/js/260.a4677e44.js",
    "revision": "55a0491b28da0e054ff3a02e46175d70"
  },
  {
    "url": "assets/js/261.4c5857ae.js",
    "revision": "7fb7a7003f01ff1bcf00f78bf6010678"
  },
  {
    "url": "assets/js/262.d595054e.js",
    "revision": "0aa85473a8f0e527d54b8cd50d9668af"
  },
  {
    "url": "assets/js/263.bf639c32.js",
    "revision": "d72c1d61310895b29f20cf30c49f0e5b"
  },
  {
    "url": "assets/js/264.108cda9c.js",
    "revision": "201f2931f2eabdacfda2467959b802ad"
  },
  {
    "url": "assets/js/265.c9874761.js",
    "revision": "e5080e98aa2eed2541bd979bbf9c3a59"
  },
  {
    "url": "assets/js/266.0f23cd23.js",
    "revision": "713121cac0a24c840b256fadde4a8dfb"
  },
  {
    "url": "assets/js/267.609dbf2b.js",
    "revision": "792b4d6ac59afe835715b85659576fdb"
  },
  {
    "url": "assets/js/268.342fb64c.js",
    "revision": "5b24d63fa9134283bf07dd5e6d76be15"
  },
  {
    "url": "assets/js/269.8e233189.js",
    "revision": "111db427a76afad523f01f9cc1e427b2"
  },
  {
    "url": "assets/js/27.70cc5832.js",
    "revision": "ed2babd81782774c4e165f34e913300d"
  },
  {
    "url": "assets/js/270.88151f6b.js",
    "revision": "6f02103bb2f816010d92ac3539b9fc49"
  },
  {
    "url": "assets/js/271.9797a49a.js",
    "revision": "382e677036c54d336ec27d35916b9db0"
  },
  {
    "url": "assets/js/272.e9e74f31.js",
    "revision": "3092d3d0babe4f3c6382d7d1b205dbfe"
  },
  {
    "url": "assets/js/273.d911c6ed.js",
    "revision": "473f02726ebe015623ec837262582d6b"
  },
  {
    "url": "assets/js/274.b2d0c8cb.js",
    "revision": "0a8b9bc9060830d166dddc8a5d56b396"
  },
  {
    "url": "assets/js/275.1f94efed.js",
    "revision": "c0a13df8f77a9cb85434020322bb3e0b"
  },
  {
    "url": "assets/js/276.8a077b13.js",
    "revision": "65e96a066eac611801fd5c350864c6cd"
  },
  {
    "url": "assets/js/277.4b247290.js",
    "revision": "426d56d0dd1331f7ce34ebd61b336607"
  },
  {
    "url": "assets/js/278.008971ad.js",
    "revision": "6468151097a1fa4ad5e7e89b798ccd69"
  },
  {
    "url": "assets/js/279.c8e966fe.js",
    "revision": "3cc1b79d32e4051e3acb90ce8fa11eaa"
  },
  {
    "url": "assets/js/28.ab960f6b.js",
    "revision": "3bb260be6ae92009f69d6f311bfea3a8"
  },
  {
    "url": "assets/js/280.ddcbfb68.js",
    "revision": "c3c883cfe35416a7eff1d09b2ad4b90d"
  },
  {
    "url": "assets/js/281.0d06d0a3.js",
    "revision": "e7d3af1d1194b16ebb9a09a219c54e82"
  },
  {
    "url": "assets/js/282.c9d12b95.js",
    "revision": "f353f4ae329292378310eed57ca82e5a"
  },
  {
    "url": "assets/js/283.d745ece0.js",
    "revision": "796abef8016d4db7e99e2f7ffa80fc23"
  },
  {
    "url": "assets/js/284.f11fa809.js",
    "revision": "de0bf4600ad0e07fa5648dfcf4112cf8"
  },
  {
    "url": "assets/js/285.541e8f04.js",
    "revision": "d7af272dda2b994761c7461b588ff0b3"
  },
  {
    "url": "assets/js/286.d39b5817.js",
    "revision": "e61d82ac4f6896dafc892cefc8c3e8a8"
  },
  {
    "url": "assets/js/287.2c32fe3a.js",
    "revision": "9691d9792aab3c70329d5e56d7e3e4da"
  },
  {
    "url": "assets/js/288.5c8619a9.js",
    "revision": "6d19ba04c2b7074041ae4817ec60555c"
  },
  {
    "url": "assets/js/289.4440d72a.js",
    "revision": "eed24d31be3e3f802726bc51f07c2823"
  },
  {
    "url": "assets/js/29.dee8db66.js",
    "revision": "529af242c21ec9cdf84cc522f15e0e5d"
  },
  {
    "url": "assets/js/290.ec4d0456.js",
    "revision": "87fa9bde246b92d6698f8f65a5da7c8f"
  },
  {
    "url": "assets/js/291.6b640dca.js",
    "revision": "c84fd860bcae51188d2528af8fb8ed20"
  },
  {
    "url": "assets/js/292.bb0a2142.js",
    "revision": "c2f6b6533102829ff8c3ac2817815d8d"
  },
  {
    "url": "assets/js/293.147116a7.js",
    "revision": "12b56cae2325ce11392d1a2087876a4e"
  },
  {
    "url": "assets/js/294.77e9339b.js",
    "revision": "74c6fcccc17ab20d3a6f23f26f4732ec"
  },
  {
    "url": "assets/js/295.2aeadc41.js",
    "revision": "633ba75fc5a03373d8c136e426f2c640"
  },
  {
    "url": "assets/js/296.cd257a87.js",
    "revision": "7dee070e4747bd7a46e6df8b27a1f8a4"
  },
  {
    "url": "assets/js/297.09d5a016.js",
    "revision": "0d67e28b21bba308aa230cf39d495663"
  },
  {
    "url": "assets/js/298.cbe38d6b.js",
    "revision": "7160d384d1a15ea6ce8ae2f78729673c"
  },
  {
    "url": "assets/js/299.2d8118e9.js",
    "revision": "cc6d47d3bfca69ed3709f2477d04d336"
  },
  {
    "url": "assets/js/3.96d14b3b.js",
    "revision": "e14325ea53cae0079f3809e2d3284184"
  },
  {
    "url": "assets/js/30.2740b309.js",
    "revision": "ab3c5f2f590dadc877990c1dff72938e"
  },
  {
    "url": "assets/js/300.d12fd042.js",
    "revision": "cb6929c5ca37b87bec85e09a2c7e298e"
  },
  {
    "url": "assets/js/301.1ad9fc86.js",
    "revision": "ca4f40ba61fd61395cacf563a55032ea"
  },
  {
    "url": "assets/js/302.78ac6d6c.js",
    "revision": "d0d0ff3df7afef69f48278759c5c5f3b"
  },
  {
    "url": "assets/js/303.2e29e70b.js",
    "revision": "78d653f745dd74734378b90e7b4164ac"
  },
  {
    "url": "assets/js/304.9643372c.js",
    "revision": "1a007bc44db5ae3593f9d724c7f3bb9b"
  },
  {
    "url": "assets/js/305.7395ff26.js",
    "revision": "14256c03fd41391281a5e36808e79d76"
  },
  {
    "url": "assets/js/306.d8117f25.js",
    "revision": "80a0bb0961c3457da43051787caae7cf"
  },
  {
    "url": "assets/js/307.4856206b.js",
    "revision": "2c2f818d4574f62e5f09feff2055ae7b"
  },
  {
    "url": "assets/js/308.1a431ee8.js",
    "revision": "8d3c0e6cd1e30ff4234e13a31de65166"
  },
  {
    "url": "assets/js/309.c2f621b5.js",
    "revision": "98ace5622172b6dba80eebdd1157deed"
  },
  {
    "url": "assets/js/31.1c118888.js",
    "revision": "41c34cb7c960bd5b33e91af21502875c"
  },
  {
    "url": "assets/js/310.ad388840.js",
    "revision": "b66045741d234b3217c9e0e1f28947e8"
  },
  {
    "url": "assets/js/311.005503fa.js",
    "revision": "ad200cf78336f949d5c377a449c50faa"
  },
  {
    "url": "assets/js/312.ef06c2e4.js",
    "revision": "3f2183647e775d8b02c081fe07212f99"
  },
  {
    "url": "assets/js/313.007f4cd4.js",
    "revision": "7363591fac0bb1d962623f8ecd64efe4"
  },
  {
    "url": "assets/js/314.5cff2eb1.js",
    "revision": "863da5928cb47a63223ae525f592c925"
  },
  {
    "url": "assets/js/315.eb0fae73.js",
    "revision": "592363aef540231fde21c578504ebdc9"
  },
  {
    "url": "assets/js/316.0cda0943.js",
    "revision": "1d6fcbf6532f29becb48f2c3380d3071"
  },
  {
    "url": "assets/js/317.c838c284.js",
    "revision": "12fe7f695e6de2d5899eec9ad5f36a21"
  },
  {
    "url": "assets/js/318.826c735b.js",
    "revision": "b5af6b60426f2039d60f24b6dc1029a9"
  },
  {
    "url": "assets/js/319.8080c008.js",
    "revision": "444bec3d83d182b87f897689b172b8ef"
  },
  {
    "url": "assets/js/32.7b6a6ff6.js",
    "revision": "c29a7f2dd8e23e86d2264c3170f0960d"
  },
  {
    "url": "assets/js/320.00c82ea6.js",
    "revision": "6d4d729ba3a74acb30ed52089c9b2695"
  },
  {
    "url": "assets/js/321.9c56dd67.js",
    "revision": "489cdc07354c90cdac66d490a5f47cb2"
  },
  {
    "url": "assets/js/322.d08ed9fb.js",
    "revision": "f6da3862375ed79f1c083f44314b424e"
  },
  {
    "url": "assets/js/323.a08d3c39.js",
    "revision": "52ae0548dfccf7bd1c4b8ea682113ab4"
  },
  {
    "url": "assets/js/324.53fdc10c.js",
    "revision": "bccfeb87dff5ea84f81c7f996e103250"
  },
  {
    "url": "assets/js/325.5176db0a.js",
    "revision": "ec170c46405c213ae2fc738b3f610ec3"
  },
  {
    "url": "assets/js/326.899d3584.js",
    "revision": "179667db86bce7d83a16a4adc80d0545"
  },
  {
    "url": "assets/js/327.4196e0fb.js",
    "revision": "6a8bec43d9beed72623eed5829da2fbf"
  },
  {
    "url": "assets/js/328.ef067983.js",
    "revision": "33815fc7d03d10ac5355ab16058da228"
  },
  {
    "url": "assets/js/329.1ca432ce.js",
    "revision": "8f08e1d45286fd85eaff9d75521ff854"
  },
  {
    "url": "assets/js/33.e6248445.js",
    "revision": "b46ba432c54d50634739bbf09457621a"
  },
  {
    "url": "assets/js/330.ae8a4e55.js",
    "revision": "224209dc7bfbae00be2d6476d21468b2"
  },
  {
    "url": "assets/js/331.9786e10a.js",
    "revision": "4985ab2dd6c9c1030aa39221e2413ed8"
  },
  {
    "url": "assets/js/332.9b0fb59a.js",
    "revision": "389e1b6b631ced2b1a710a7d8566ed98"
  },
  {
    "url": "assets/js/333.9321d6c7.js",
    "revision": "af944c2332e4ef087d4308308ac66ca0"
  },
  {
    "url": "assets/js/334.b9452297.js",
    "revision": "8ad3daa11998e5cd9393248a1d1ebc4e"
  },
  {
    "url": "assets/js/335.4aa29999.js",
    "revision": "f2a801c3fba912773fe28a3771aa790c"
  },
  {
    "url": "assets/js/336.46b76644.js",
    "revision": "b6221738b8749577d83454de0400a039"
  },
  {
    "url": "assets/js/337.ff357e9a.js",
    "revision": "c14ac2b6a38557f465d3c5522433b60f"
  },
  {
    "url": "assets/js/338.85aa2924.js",
    "revision": "5a9c0f9052abda5fe6577d3c2eb22b6c"
  },
  {
    "url": "assets/js/339.a318d528.js",
    "revision": "7514f2c333871ae739fc5b2a04185941"
  },
  {
    "url": "assets/js/34.bb853fde.js",
    "revision": "816a3fcf9cc0f5c7510a050861cb6223"
  },
  {
    "url": "assets/js/340.37c07b75.js",
    "revision": "8f5f27973ea82da6767181b086f40bc9"
  },
  {
    "url": "assets/js/341.95e638ae.js",
    "revision": "74d621b1058438cf1a04eff63c6d33fe"
  },
  {
    "url": "assets/js/342.8b07ab38.js",
    "revision": "7ad3c7c3582045ab551d42fecfbd90a4"
  },
  {
    "url": "assets/js/343.68ea1334.js",
    "revision": "6e5dae021e2a3fd70fe1c8247928f621"
  },
  {
    "url": "assets/js/344.41334f60.js",
    "revision": "2f1fbbd531f78d0b67c2d62f8d63c1f2"
  },
  {
    "url": "assets/js/345.acf390f7.js",
    "revision": "7975f56fc064e015b818d9e291e5bb67"
  },
  {
    "url": "assets/js/346.c3f08134.js",
    "revision": "c6cd8779a24d7a4e6493bdf11b1b0a5e"
  },
  {
    "url": "assets/js/347.791ea93f.js",
    "revision": "9c62fd789bd751b95d2cb1b0b20274c1"
  },
  {
    "url": "assets/js/348.9bfec089.js",
    "revision": "f209aa687bd5db0261502c95eeff5ede"
  },
  {
    "url": "assets/js/349.f3ff7f2f.js",
    "revision": "7e0966cffe0f657696caeac3f249d4ec"
  },
  {
    "url": "assets/js/35.9c84f9d1.js",
    "revision": "2fde4383d71ab4da776647a844d41be4"
  },
  {
    "url": "assets/js/350.7a007674.js",
    "revision": "200e94ec5b770a5af853c30db525714e"
  },
  {
    "url": "assets/js/351.cdca30f3.js",
    "revision": "4719ff0f55926e2161f81017adb21c68"
  },
  {
    "url": "assets/js/352.43198694.js",
    "revision": "91d143294c3886d07e606ab3e4282233"
  },
  {
    "url": "assets/js/353.c75e34c4.js",
    "revision": "a264e95ad55e4982f263fec6c94b98f0"
  },
  {
    "url": "assets/js/354.8acedf0c.js",
    "revision": "f3886b0253e4baf7298016633a1ba600"
  },
  {
    "url": "assets/js/355.9f4cbd95.js",
    "revision": "422db416f87cc458b9adeea156fb2ea0"
  },
  {
    "url": "assets/js/356.925a71a9.js",
    "revision": "adfa723f0580b5c1dcf710448c5912a4"
  },
  {
    "url": "assets/js/357.d6aa514a.js",
    "revision": "751c9f8a3f1fbf2ba4eb53f04b764836"
  },
  {
    "url": "assets/js/358.f01e64c1.js",
    "revision": "7fc58f53eb1c62d83c3bb56294f007fc"
  },
  {
    "url": "assets/js/359.aa2d7c5e.js",
    "revision": "6152d7ecd6e0fb9becfeb9d83032ac50"
  },
  {
    "url": "assets/js/36.4ad8a017.js",
    "revision": "c1cea65371c4ef61f7130032fa02553e"
  },
  {
    "url": "assets/js/360.21ccb562.js",
    "revision": "ef0f9576c30a32de1df3b18076d20269"
  },
  {
    "url": "assets/js/361.09f0a01b.js",
    "revision": "f0a662845e3fd5471ebe28f7fd6663d9"
  },
  {
    "url": "assets/js/362.4ed75b9e.js",
    "revision": "deb95bbde8a498ecc779b481a805a5ae"
  },
  {
    "url": "assets/js/363.719fc50b.js",
    "revision": "e051af3ab3ab0f53d42affb902cd59dc"
  },
  {
    "url": "assets/js/364.cafda65c.js",
    "revision": "0a44b23ceccc420e01944f8e98a1387b"
  },
  {
    "url": "assets/js/365.fcf32052.js",
    "revision": "6ceda1c312c6579a3cf21e1a67b1b13c"
  },
  {
    "url": "assets/js/366.26d1aa6f.js",
    "revision": "5152fa9ecc014e81012a152637f5652c"
  },
  {
    "url": "assets/js/367.1607ba47.js",
    "revision": "2b4f7d0ec1dfc3c2e94d6cf19dae7530"
  },
  {
    "url": "assets/js/368.86ac3acb.js",
    "revision": "c998781ab0589e7bd36aeba51b8023ab"
  },
  {
    "url": "assets/js/369.8b8c30e4.js",
    "revision": "5097fe98e31a8816df4d42f755590bbb"
  },
  {
    "url": "assets/js/37.156a08ba.js",
    "revision": "3c07c68d0bdd4406b2abc78beb962c48"
  },
  {
    "url": "assets/js/370.5ba8a194.js",
    "revision": "968fa43239b86ed23c9c2555b5b9dab7"
  },
  {
    "url": "assets/js/371.e5395df1.js",
    "revision": "efad549a7a1341b3764e5aa24489626a"
  },
  {
    "url": "assets/js/372.0355b3e2.js",
    "revision": "6e44e3b7e10de629382eafb6acfc9a70"
  },
  {
    "url": "assets/js/373.84287b62.js",
    "revision": "3d6b6c955391488dbaafbb7a47ab5877"
  },
  {
    "url": "assets/js/374.551db097.js",
    "revision": "3885d52ef2330b1bb7228b4685d17d47"
  },
  {
    "url": "assets/js/375.58225a0b.js",
    "revision": "4fb10645ba33ac93ce6140a5b8f307c1"
  },
  {
    "url": "assets/js/376.30cca800.js",
    "revision": "1eebff37c645844e308d35652511de6b"
  },
  {
    "url": "assets/js/377.69e69d4a.js",
    "revision": "3c0caf53b5b15c576ce8d0d720a36ca6"
  },
  {
    "url": "assets/js/378.11ef161d.js",
    "revision": "61e3154a1e22929cce4d5f1e9d400f9c"
  },
  {
    "url": "assets/js/379.61479243.js",
    "revision": "e6a62a18452d47def8fc24e0f170a8be"
  },
  {
    "url": "assets/js/38.ac097441.js",
    "revision": "fc51f8f5c1ea0f7a2e32d1662f7eda71"
  },
  {
    "url": "assets/js/380.4dd49f5c.js",
    "revision": "5a5524f2d5306830a9754637d81a9f0a"
  },
  {
    "url": "assets/js/381.0cda6ccb.js",
    "revision": "32e290564e0369ae7dfd741895319ab9"
  },
  {
    "url": "assets/js/382.e752596e.js",
    "revision": "7080ef16287191eea5cd50c5543e525c"
  },
  {
    "url": "assets/js/383.88dcc07f.js",
    "revision": "ca09900b1ae28d1e1611ee2eb52ced98"
  },
  {
    "url": "assets/js/384.a821ecd2.js",
    "revision": "234b8e7a3a26b81fbce22956ef9b3d9a"
  },
  {
    "url": "assets/js/385.073f878e.js",
    "revision": "8de8aed69fee622ebd2352b23871f02e"
  },
  {
    "url": "assets/js/386.5bc106a9.js",
    "revision": "c142414ccb3692ab0004f40f6af7db6a"
  },
  {
    "url": "assets/js/387.7b26275b.js",
    "revision": "747f10b5c85ba4543c754563988f6ef0"
  },
  {
    "url": "assets/js/388.d0a3642d.js",
    "revision": "a1907bf629f8887501e4e56bab3adef8"
  },
  {
    "url": "assets/js/389.493c5a7a.js",
    "revision": "bc016d08cad870982f9cb2f6dd624aa9"
  },
  {
    "url": "assets/js/39.f26dde8f.js",
    "revision": "2bac77b41b35fc4a193ea4ee987361c3"
  },
  {
    "url": "assets/js/390.974e5a9c.js",
    "revision": "c23fb974450954b081dfa9f94aba6575"
  },
  {
    "url": "assets/js/391.ae1e00a4.js",
    "revision": "c2ffd300edc8c68696b96b1834e5e3a5"
  },
  {
    "url": "assets/js/392.40407408.js",
    "revision": "ca91742eac3bbf617091f2488d5c4c57"
  },
  {
    "url": "assets/js/393.d72fa774.js",
    "revision": "555ddb1ea85a93b27e5c276f9d47c9e2"
  },
  {
    "url": "assets/js/394.8c4a442e.js",
    "revision": "50064264b71f799636647a9bff0dbc07"
  },
  {
    "url": "assets/js/395.cb47e5bc.js",
    "revision": "69c1359616b062de7a6af6f21c96ac15"
  },
  {
    "url": "assets/js/396.7116877c.js",
    "revision": "cb7540e603dda5c72f2042cef4def1ad"
  },
  {
    "url": "assets/js/397.17de5f5b.js",
    "revision": "65dbd55400d38456dce62158c8bd37a2"
  },
  {
    "url": "assets/js/398.4d64c1cc.js",
    "revision": "93974fadcae3d47b038ee303d33be2e8"
  },
  {
    "url": "assets/js/399.69e1bcb3.js",
    "revision": "1644e8e9c1c7ab6e2b076227536224e3"
  },
  {
    "url": "assets/js/4.8c1f780c.js",
    "revision": "7acb5e358b88a91fc586ef767fe9a637"
  },
  {
    "url": "assets/js/40.a7a662a8.js",
    "revision": "0c23316c4c325e2e3c20e1ed76a4eaa1"
  },
  {
    "url": "assets/js/400.523f6213.js",
    "revision": "dfd2ebc5ea775f91e40d56293b4450d3"
  },
  {
    "url": "assets/js/401.ae0cb346.js",
    "revision": "f69db902e1095657a10ec14e0520c7e5"
  },
  {
    "url": "assets/js/402.686c2660.js",
    "revision": "5ccabca5f15b13bf2d051b6bfe88f87f"
  },
  {
    "url": "assets/js/403.bdb8b2d2.js",
    "revision": "eaac9ede55ad15d9d170653e759d717d"
  },
  {
    "url": "assets/js/404.10235592.js",
    "revision": "aede1d84b383a882977501630cfdb2db"
  },
  {
    "url": "assets/js/41.96082202.js",
    "revision": "68af08e0138a19b2364579e71be4dfbc"
  },
  {
    "url": "assets/js/42.4cc66c8f.js",
    "revision": "5753ba7e186d4f724749704c1ff9687f"
  },
  {
    "url": "assets/js/43.6fec236e.js",
    "revision": "a099b1ece2055cb9c31a3bd472db9678"
  },
  {
    "url": "assets/js/44.69d0dbd1.js",
    "revision": "96bf64f7fa3129743052d0ccafa2af40"
  },
  {
    "url": "assets/js/45.e7c934e7.js",
    "revision": "e0fbe72cf3636964fbd055d45d35e01e"
  },
  {
    "url": "assets/js/46.1c673fb7.js",
    "revision": "fedb483bebbaf19dc9f6c05fbf69fd0c"
  },
  {
    "url": "assets/js/47.fc79eec2.js",
    "revision": "7cab0a91e59bf6369903563af5ca86f7"
  },
  {
    "url": "assets/js/48.95e1fb8b.js",
    "revision": "655fcc5084c9c9db13e009d446c48e6c"
  },
  {
    "url": "assets/js/49.a08c958a.js",
    "revision": "f85700636613d629c9428f3f67c82b50"
  },
  {
    "url": "assets/js/5.d8d10b81.js",
    "revision": "e915b68e7dc82977e612da039a39c006"
  },
  {
    "url": "assets/js/50.517ae7bb.js",
    "revision": "8abdb192b102d986c17aff625104fef8"
  },
  {
    "url": "assets/js/51.5251c8fa.js",
    "revision": "0bfe8b578340dc43ff2f4c5c0113e325"
  },
  {
    "url": "assets/js/52.8b34ba76.js",
    "revision": "d4b0b59a8c9869e8d3d2204defae42d3"
  },
  {
    "url": "assets/js/53.ddd8937c.js",
    "revision": "0f831adf0402510774b86acf0f79427c"
  },
  {
    "url": "assets/js/54.b76a45b3.js",
    "revision": "1b24fd874b7ce5210972473d4beb1ed3"
  },
  {
    "url": "assets/js/55.3054ac1e.js",
    "revision": "fdad63267b6b6b4dee0a1b0cb13a7171"
  },
  {
    "url": "assets/js/56.634bf047.js",
    "revision": "cc9ae4c6bd98981ab21f43fad2e80d0b"
  },
  {
    "url": "assets/js/57.45b37e4a.js",
    "revision": "212678b21fe52fba4c063428af241aa1"
  },
  {
    "url": "assets/js/58.1c459d58.js",
    "revision": "bc8a72fc4299bc1abfb5700b996f9e97"
  },
  {
    "url": "assets/js/59.4039ab40.js",
    "revision": "4894f8398d33c5aaa3171c86876160a7"
  },
  {
    "url": "assets/js/60.4993deee.js",
    "revision": "07025317b6f5092b23fdb1c09609ff00"
  },
  {
    "url": "assets/js/61.2370fc10.js",
    "revision": "05c1981f3b0d2ba033f13e35c199f4cd"
  },
  {
    "url": "assets/js/62.86c5600d.js",
    "revision": "724db5c7e668f5fe4f42071969a5be9f"
  },
  {
    "url": "assets/js/63.ff03d333.js",
    "revision": "89dfdab93c1f7f15f0b1e5b6cabdd31a"
  },
  {
    "url": "assets/js/64.81559b70.js",
    "revision": "82064e036accf9daf9dbdb8fb2df1094"
  },
  {
    "url": "assets/js/65.707c16e4.js",
    "revision": "9b2000f4c752a7b2b66dbca8b4a86052"
  },
  {
    "url": "assets/js/66.26d3e1f8.js",
    "revision": "79d9f1c111f6dbadb776c66ef9b502ac"
  },
  {
    "url": "assets/js/67.e6377d8b.js",
    "revision": "983a167d81a1517df4ec88e072b87ab7"
  },
  {
    "url": "assets/js/68.611b9439.js",
    "revision": "9c860b80188c6fc50e7cdecf5c97e9e6"
  },
  {
    "url": "assets/js/69.4294b2d4.js",
    "revision": "7b63d67057d3d6bed0a2381b778872d5"
  },
  {
    "url": "assets/js/70.4e225678.js",
    "revision": "f6232bab7d3c7ea3ff5b95f160769f2e"
  },
  {
    "url": "assets/js/71.992c8700.js",
    "revision": "5c4fb5a6b0ac26a58017136508e2bf36"
  },
  {
    "url": "assets/js/72.c51fa1f5.js",
    "revision": "c738da27701c4355273fb8438e854258"
  },
  {
    "url": "assets/js/73.3b97730a.js",
    "revision": "f1a2fc9d1b32f57d041a005e9c10df95"
  },
  {
    "url": "assets/js/74.a43257a4.js",
    "revision": "883c82b145d8c47b757c3f7eb7457be8"
  },
  {
    "url": "assets/js/75.72d747e0.js",
    "revision": "4a77c75ede9921db58f0420694540c21"
  },
  {
    "url": "assets/js/76.44fc1763.js",
    "revision": "47a21406a30284f8a0195165285f8368"
  },
  {
    "url": "assets/js/77.4a94df13.js",
    "revision": "2a62a62306dc543f4fbcfc2def6c0913"
  },
  {
    "url": "assets/js/78.253e312c.js",
    "revision": "68e96b1ed47e550acc259d7d9bcaed53"
  },
  {
    "url": "assets/js/79.e9e1a2d3.js",
    "revision": "4bd6b3a33e967c7fdccf0af70cd5d0f1"
  },
  {
    "url": "assets/js/8.4af2935d.js",
    "revision": "0622073e20128e9654aae2ee1d4d74cb"
  },
  {
    "url": "assets/js/80.c413a2c8.js",
    "revision": "49050b7dc8efe908e8a2fcb6fc60a6b8"
  },
  {
    "url": "assets/js/81.d1bb5d55.js",
    "revision": "3e1d46172e82e7ce56321714243e506b"
  },
  {
    "url": "assets/js/82.8e46cd42.js",
    "revision": "d1eb43962dc223590e1cae34a326b254"
  },
  {
    "url": "assets/js/83.4b2a8d19.js",
    "revision": "cd36f751ddfd76cbfe7777121fa84871"
  },
  {
    "url": "assets/js/84.b0a52ea1.js",
    "revision": "f7477cfe0150a72fa557b02afb5ac450"
  },
  {
    "url": "assets/js/85.78d5eafd.js",
    "revision": "2e6f123ed19ae12335a886e42a928cb7"
  },
  {
    "url": "assets/js/86.b4ae0103.js",
    "revision": "04520e23e3315df89da7c2371d5da27a"
  },
  {
    "url": "assets/js/87.8e4560a9.js",
    "revision": "4e613ca9d5e9f3f1326afb69b2149a0a"
  },
  {
    "url": "assets/js/88.a14c973c.js",
    "revision": "77a2d461ef07835765358636b4c06a9c"
  },
  {
    "url": "assets/js/89.3465dca0.js",
    "revision": "61f4ce7b2d07fb2b9838abebf95a26c1"
  },
  {
    "url": "assets/js/9.0748cdbd.js",
    "revision": "8bcde6e644cf374e9c8a1cc1d1d3e5ed"
  },
  {
    "url": "assets/js/90.04279c9f.js",
    "revision": "4938c38cfdb81599a7db7f9478b9de70"
  },
  {
    "url": "assets/js/91.a4e826d2.js",
    "revision": "4841b186b66d1e274fc14c8f0e8e89ba"
  },
  {
    "url": "assets/js/92.0a01d0a5.js",
    "revision": "005cc594956cf0cdf48afa0fa2217793"
  },
  {
    "url": "assets/js/93.d96d8cbe.js",
    "revision": "252a3bbc33c6bc793b874620c6fa2390"
  },
  {
    "url": "assets/js/94.e88fedf1.js",
    "revision": "76b786c6a718da44b65befa07b1cf032"
  },
  {
    "url": "assets/js/95.7a6b2509.js",
    "revision": "9f79058e0cdb5704bf9367db5c1e82db"
  },
  {
    "url": "assets/js/96.2a467c08.js",
    "revision": "c0d598a2609ba1b9bcdce5d6316091ac"
  },
  {
    "url": "assets/js/97.307ab7df.js",
    "revision": "27313d6efcdb63989ba90750892519f3"
  },
  {
    "url": "assets/js/98.a21f6fb6.js",
    "revision": "d499f95a3e57144d57e6fd56e3646af2"
  },
  {
    "url": "assets/js/99.c3e1b8c7.js",
    "revision": "bbce4b7cf391f67a31ed554df3e8bfa4"
  },
  {
    "url": "assets/js/app.694d3734.js",
    "revision": "7a6665e6d16ed6fc29286217853c408e"
  },
  {
    "url": "assets/js/vendors~docsearch.c12cd9fc.js",
    "revision": "5efd9ed37c2c873cc598266b993f058b"
  },
  {
    "url": "index.html",
    "revision": "b68d418d50ed368ffd81c541a5c87e9f"
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
