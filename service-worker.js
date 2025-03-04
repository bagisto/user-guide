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
    "revision": "5267b69fff2e76fe9ef140fcd1486094"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "f5915a3c13d3b5a2279a9a0913f39dc6"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "c5295c7aaedde1515f2d15b0c1688bbd"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "3e51f5a20ba20470b2efb9e079e09664"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "2d9d5949d1e6f7216f0cfe708fde7da5"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "251897700ff86e499afc8dd679d0f260"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "913e9d10ce90e40e4b0d8c1bc73c5af8"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "2685a4ebd91cc958e078e2793b1a9b3d"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "408305020921f5f4707ff528a5b2d463"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "21bebb8dc92ba6dd58f6adb06c701b03"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "a9fc16b187b8365dfccc7164e3f6846a"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "85de804b009d6773569e54632d0f02a5"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "b1c01e521314a34ce7d22e37bd3bf4ec"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "152c66ef3d17aff2bc0fb23436bb830d"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "0e67db1e51dc757689d0163269e7d7b7"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "f966e5f0a503de7ce2e150be5fab6114"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "77f7541ad953b6b1e27aa5722446103a"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "c220efddb46de7ec33991d41f585751e"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "3e207c9f24ddb41d869f3eceee281a8d"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "9aff8c9b0e7b6f535ddb4bd58e06ff26"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "7944ee7b0037ea548a257cb521bf702d"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "d11ac71f3c8ea363e6c87e1fdebd9364"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "89b19128eac782a0e39d07476657f62b"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "502d8a1b0455fa3cf23ce9d060f8d98f"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "47f09474dfd349b9feaf3c4b85c61014"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "46202b486950e75ad8a2f92b8b4cb074"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "c1e10ed011c774bad0b66c789762f5da"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "11e365a7b9b3a35bae4137717a56b731"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "4ce0a9baa71b1976466a95ad13b93903"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "048b3e50e20f88c992a655a235ea887d"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "790918353bcf84995b2fd17fb08e6e13"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "b8cc439a6710b8ddf565e41ec752d987"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "ac7d367411cddbeda6374719b8b67c4f"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "ee68099115d696873d1fb0c8d86b8484"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "f27d323990a49da4052b66b55c394738"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "113a5bef3549ab8e93a64d5f8de8e617"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "56004a2909024caf9ae6081a40d39307"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "72925efa12844e1591190fd9bb7e6c34"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "b207b7dd2f995ec328d5cf104514a06b"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "81d714fbc9225341f2d03a6d8057c748"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "a8d511b57e09ccaddeea706e2562f8df"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "7b57530d7c2302b6cd4f3cce303cccfb"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "1349d067c7211750982d1d9016c7a864"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "df94e202b44617de517f1746a747b6d0"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "0c68b6b966f33a46e3cbd0a1393fda0d"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "b615a5fe8914c4a0c4444844b7ac77a6"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "99024ee8506b3d76ac4b1ed391d6fd3e"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "2fcd486116ed3307c6ce244f61eb698e"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "8e465b81c42a728d92a1a802aa570c9c"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "32e60d49abe873921f9e1e9f7d1508c5"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "db7b79c272e3cade4e9c7ac88372ff3d"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "4d3733bf6b24c899e11c44504d9c7119"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "b3738be7af9cd6ca6be799b47484699c"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "b09dedf47d2f1d99cbafcd3a180160b9"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "452bde8589506785f1b4820061e6edb2"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "5d820ebebc4d7ddde405ff49af2f925d"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "44e62cdc4a6c730c1f77c10120ca0e16"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "02f4aa0947ed6b92a48ad8cbfe68f56d"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "946d59d49437e93dd2df5b44e29e1293"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "7523e3b021034e01314c0ed287882f97"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "28b71bb70c95df81efdddec0d948e84d"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "30345974418dcac346ce37755b2026d2"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "b531426a8631a61612b79ada22daf6ba"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "9fc69be6dfd7490fcdedff38235d4c3c"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "a6a99740916abe4da7d207562b9fa103"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "f70f736a29c7d9276af474948b7708ac"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "fca1e2619332f2c8c5c09fab0f55bbb0"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "9fbd66eb76fff3764bb0f630f653a8f9"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "e595bb878115e3dafdc8b6e90304579f"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "5a8c8516bf77d11af7711c28b071750f"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "34b6cef70be8edaaa45c320483d2de5f"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "44e841098c3db08020db061f9ba57fc3"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "e30a45ab581ddf406e18fa86b1f13399"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "d17a84cad02cc5bb03a4b2981a6a49ea"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "0f04be9e50b05fcf589126523f90e417"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "24b8a8df1990e26fb560787beb6b64d7"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "c2c80caee83cbbbcd51faa4aeee8de49"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "6cfc5d22c1629b8f55b16453c9dadbb5"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "4d2f865da71ec42fbf55ee0823ea193d"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "35d565e393778a6fb38cae2c338326d4"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "48096a71cb8795551961687431b5270e"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "34ee851afd91348edaf7056a672fd93f"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "96d4f350d026ab2264c0fa063d654692"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "5bdcdf5d8b722eb94b48b0787303fad4"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "2e5a11085f63700d75cabe872337f623"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "f883f2783d361f322ec019bd289ba5be"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "f60729dc91582b0a5c91084d38860fe6"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "e0e87e5ea79a7a1c19b2572b311307db"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "1fb247e236baa6f5b0b0eb40a6de23f0"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "f28ded7982b117f031eb5046ef716eba"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "e3a77ffe8101b41db126386dd53befc6"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "c5f27b2f457c06ef1cfd2bd09a3fc6e3"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "cf3aa849c27af564f94d907d30a25800"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "ef6f1b5f881f5c558320454df8ea5522"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "c05127faf1a8e7845ed708d8426fa47a"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "131ce7984499fefc095ebf2dd433f8d2"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "85c0adc0d941b446138d690edf0b9e6d"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "b8df9dc78fc734f4cb6b1ade160040de"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "f64433e9b6ba8b117c50ba6c0a70e43c"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "0f60d3b3e8a9f7c1c92f8636629a2dce"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "a9d51756ec8e4adffa9ef811c1347c5c"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "32f65374a2f8bbcb77ce4549b1dbffd4"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "5284d76d3d8e6e347790fdda13591954"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "87700f84011bd8d5be69905a0f837f2e"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "ba51e12cd7081f2d7219e24dcb6f1361"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "0b553af1f4f94a7c6ecc463832cb11a0"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "265ec5fcbe35acc0c363fd138fe840b3"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "54ae965af0040e052f7262b5c530a460"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "88169ace05334baa9196e665e1f42725"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "39674874a5f24a2989f1c40aa60949a4"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "81e291a1e85b1519ae4e53f1a211ab7d"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "05195c090c6f9217a9b7a9692fa2da33"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "dd6e6e3aebe5bed7185689ed70be1bcc"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "0ca671e258d2b62fc10b056ed04af3af"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "e47f3216b59947bb9fb1573bc5eace6b"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "204f207da08fee0929c9d648d34379a4"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "07f964978d3be2868b1da27d350a9bd7"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "0ce8656c89fb6832314faad07535c551"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "6eadcb9c0a0c3a6fc10cbff782d241a6"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "58bb9d8ebb83c18e2deb4923c07125f5"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "f003bda114c8782ae71b38681f999f50"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "f341fc0d8c5c828db4dfe793cac04bae"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "d37cb5fc15fe3b80d1c00b064bd0242a"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "6ddf66b39f9722bef3df72764710a9b4"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "b6157df123b09498f666e4c93d70fa85"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "e8e8c9291ef965bd99ce60f2bea6fb93"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "1b50dcc761f68f3b90a4e0ccccba8834"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "6479d86d8b49465f7e26ef438a95d5b3"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "ad9054fc841a1c24d9cec4e7f15ffe01"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "d7e2d64718872de81f51e6a9467debd0"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "5d88b5198b9191fb6b3c98fa52f992c1"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "a77f3f7992053836cc3390d6ece759f7"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "2508ef72cedc99f9de451930d942b42b"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "1f49e532d9ecf8c802992fe0e3c973fe"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "de22e515707fffc0d1f2884b27f0e9b5"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "3930f0ab17dcd84770fdab1cccc0ec65"
  },
  {
    "url": "404.html",
    "revision": "fbaea0283c65b9bb999d1542d6bb713c"
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
    "url": "assets/img/1mycart.fea04e56.png",
    "revision": "fea04e5670e65fc427e521a15ff61b17"
  },
  {
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
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
    "url": "assets/img/backorder.ce2cbb76.png",
    "revision": "ce2cbb765a1ab49f0e7e6e1bfab71561"
  },
  {
    "url": "assets/img/backorderOutput.a79776d7.png",
    "revision": "a79776d71b3aa529893f99db22817b03"
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
    "url": "assets/img/content.9140afd6.png",
    "revision": "9140afd64a40ae73085809e92f97a2a6"
  },
  {
    "url": "assets/img/content.d90f471e.png",
    "revision": "d90f471eb0cb66d7c7da150e4ab7a89c"
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
    "url": "assets/img/create-product.de3763bd.png",
    "revision": "de3763bd35b420fae98e2bd46f259ddb"
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
    "url": "assets/img/design.3a73ffcb.png",
    "revision": "3a73ffcb7572045dddabe71e47447436"
  },
  {
    "url": "assets/img/designOutput.c4642cb8.png",
    "revision": "c4642cb8d8e8c75bb2096f11e22521e3"
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
    "url": "assets/img/frontend2.864a8940.png",
    "revision": "864a894032e86df0e8cd907d60957280"
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
    "url": "assets/img/personalizedCheckout.0a465abe.png",
    "revision": "0a465abefe3c21e37d6644363e8c21a0"
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
    "url": "assets/img/products.3865c39b.png",
    "revision": "3865c39b4ef983793361bb01e55b8403"
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
    "url": "assets/img/review.91414169.png",
    "revision": "91414169bfcb300e4a48ab09ab60c09d"
  },
  {
    "url": "assets/img/review.97d17f45.png",
    "revision": "97d17f45342502ee075640a128762069"
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
    "url": "assets/img/shipmentOutput.3e0d9740.png",
    "revision": "3e0d9740c504c803c7e8cea13595ed43"
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
    "url": "assets/img/sourceAddress.ee2e69a5.png",
    "revision": "ee2e69a5700fec03accb2b06a106d51d"
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
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.571e0374.js",
    "revision": "b0df11e94948f6349bd8ab18c3677fc4"
  },
  {
    "url": "assets/js/10.ea22519a.js",
    "revision": "8eb0ce5bed7679092be0bc57bdc25f47"
  },
  {
    "url": "assets/js/100.20da2020.js",
    "revision": "a757d27b0dc5000f423bb7c33fd66bc7"
  },
  {
    "url": "assets/js/101.3b265f3c.js",
    "revision": "360ccbd9a1a82261d699a5fccd0fed3d"
  },
  {
    "url": "assets/js/102.a5ad0583.js",
    "revision": "444554c297813f4be56ed784eeed40f7"
  },
  {
    "url": "assets/js/103.67ec744d.js",
    "revision": "5c092a8ca610dfcd6cbfa2a9cf34a387"
  },
  {
    "url": "assets/js/104.6a3c1465.js",
    "revision": "039b6d2634ed4de640c567f2b8e05439"
  },
  {
    "url": "assets/js/105.6ff3647f.js",
    "revision": "c0f328d3e15f083c8cdb49d678b9404d"
  },
  {
    "url": "assets/js/106.6812279f.js",
    "revision": "19f8455ab5b94543661bc3c00e46ba6d"
  },
  {
    "url": "assets/js/107.1de58e83.js",
    "revision": "5bda0b8fbd1a12ffbf4f6a07cc61dc40"
  },
  {
    "url": "assets/js/108.cf3dd703.js",
    "revision": "ab584e7ad67d7325cc7aa5e6cc2ce7b5"
  },
  {
    "url": "assets/js/109.ec92b717.js",
    "revision": "251bd7ee7b3d4cda1b824676f70edae1"
  },
  {
    "url": "assets/js/11.6ee88c3a.js",
    "revision": "b7a1606afd48f0d453f1e76ca73971c7"
  },
  {
    "url": "assets/js/110.3606d365.js",
    "revision": "f8633c5e9bf45db3880f35fe2fe91cce"
  },
  {
    "url": "assets/js/111.a39ef93d.js",
    "revision": "a2a079a47ccc53e5772a097b124edcfc"
  },
  {
    "url": "assets/js/112.94d60d3c.js",
    "revision": "67be54567607118cda1696c85ca5c45d"
  },
  {
    "url": "assets/js/113.ae07cf8a.js",
    "revision": "a6b796e33623a46d5e30f43c9e8e5e89"
  },
  {
    "url": "assets/js/114.ed251613.js",
    "revision": "3ab426f443b1b2f6bd935a069d84cbef"
  },
  {
    "url": "assets/js/115.fafc5cc4.js",
    "revision": "62eff9de1f2ca4366e4821a95299b154"
  },
  {
    "url": "assets/js/116.9979fc0a.js",
    "revision": "dffa01d4e6069e3d1e01bd837e4864d8"
  },
  {
    "url": "assets/js/117.c47f0194.js",
    "revision": "87c7eca78ec67d5ef07dee3e4e3aca67"
  },
  {
    "url": "assets/js/118.f431679b.js",
    "revision": "da2b1d8e55c9a56b25a335484dbc93b7"
  },
  {
    "url": "assets/js/119.1a71f816.js",
    "revision": "3182fae3a594faca1def6b9ad03e5bfb"
  },
  {
    "url": "assets/js/12.e2851844.js",
    "revision": "895fc3952b8cbb37838b17f09bd88987"
  },
  {
    "url": "assets/js/120.e3fd1541.js",
    "revision": "0c6523a7ffbfda85de18847db84aacea"
  },
  {
    "url": "assets/js/121.4e8f9ca7.js",
    "revision": "2f6f71f777cae9d4ddf32fc52a64e346"
  },
  {
    "url": "assets/js/122.50118ca6.js",
    "revision": "ff78f5adc13d00dbb2cd3c2583444290"
  },
  {
    "url": "assets/js/123.46ec6920.js",
    "revision": "4123b56d7c16e72adf7b256b4e5f493b"
  },
  {
    "url": "assets/js/124.87af463c.js",
    "revision": "a2156b1b0527eb4b4611a99f7bcbf108"
  },
  {
    "url": "assets/js/125.a739476d.js",
    "revision": "1db589b8f11a6241a475bdcec2f23985"
  },
  {
    "url": "assets/js/126.9f3793f6.js",
    "revision": "977284140c70547894f98f9ff2c4b81c"
  },
  {
    "url": "assets/js/127.df67a485.js",
    "revision": "ae84edf25e969e80e1df7b171fe459ef"
  },
  {
    "url": "assets/js/128.dc240d21.js",
    "revision": "53bb866d92141092080f4b9afa3e94d9"
  },
  {
    "url": "assets/js/129.0ebfed0b.js",
    "revision": "1ac571046b58e7f0e64e4e36fed97a18"
  },
  {
    "url": "assets/js/13.0ce74f2e.js",
    "revision": "06ec32f91fc1415b978840d9cddc5d10"
  },
  {
    "url": "assets/js/130.ac6d84bb.js",
    "revision": "a1a762d1b96b8d2600aa01129d5accea"
  },
  {
    "url": "assets/js/131.67b51295.js",
    "revision": "6c3305a5d49ff73445de265b9dfceff2"
  },
  {
    "url": "assets/js/132.e9c80615.js",
    "revision": "10fb9161a7978a9e3457762a74c97351"
  },
  {
    "url": "assets/js/133.47204c08.js",
    "revision": "e0c194c6c68121e5685fb90f4c1d64bf"
  },
  {
    "url": "assets/js/134.d1ca2cd9.js",
    "revision": "235c9f11a555ea162380614756d33464"
  },
  {
    "url": "assets/js/135.503d7ccd.js",
    "revision": "4cce100813759aad5509a43c07f64e03"
  },
  {
    "url": "assets/js/136.bc4b256c.js",
    "revision": "83420a5e74d8f27aff16051557bbceae"
  },
  {
    "url": "assets/js/137.b72c9a04.js",
    "revision": "c503872c38e5c930733e017c0d5462c9"
  },
  {
    "url": "assets/js/138.5102421c.js",
    "revision": "fb8605bf5b5ac817a2eb466d7cf85518"
  },
  {
    "url": "assets/js/139.15f462fe.js",
    "revision": "f872bb7387ec358d9c0a095f0a4edecb"
  },
  {
    "url": "assets/js/14.a0e97c33.js",
    "revision": "543db5954739b342b7ae1b1044e4cbb2"
  },
  {
    "url": "assets/js/140.61159f67.js",
    "revision": "5d2a96ee19710bbfabe291523098de71"
  },
  {
    "url": "assets/js/141.3c0d5399.js",
    "revision": "149cdce47dd92ee68d777f218c0a2a48"
  },
  {
    "url": "assets/js/142.820d0d4f.js",
    "revision": "5e8d95e855347660bceedc21892e4db0"
  },
  {
    "url": "assets/js/143.bfe61fd8.js",
    "revision": "b82e644455a654c7ea463f0049df0101"
  },
  {
    "url": "assets/js/144.3ad8ecac.js",
    "revision": "552806836f2de4f503402e3b046978de"
  },
  {
    "url": "assets/js/145.0370ba2f.js",
    "revision": "4d98360f755ac057dd6884196f2bde68"
  },
  {
    "url": "assets/js/146.18e6f31e.js",
    "revision": "690a683d3c6557a6aec0197aba04efb9"
  },
  {
    "url": "assets/js/147.ac92be47.js",
    "revision": "2046911190a38c157efa3542227d4c8e"
  },
  {
    "url": "assets/js/148.3968650c.js",
    "revision": "4b35846f6a09e1cd63fe50cb0558ba70"
  },
  {
    "url": "assets/js/149.e7b6a95a.js",
    "revision": "bf80b332d6b4e15e718425a57b2ed78b"
  },
  {
    "url": "assets/js/15.7f687afe.js",
    "revision": "06433dbe52d15202afcbebd7bae633b9"
  },
  {
    "url": "assets/js/150.85a7510f.js",
    "revision": "93017a616a925e03b99fcf6752ac6300"
  },
  {
    "url": "assets/js/151.148b41a2.js",
    "revision": "7e3aacc8075f419f1d49c5130e95abf6"
  },
  {
    "url": "assets/js/152.b846faf1.js",
    "revision": "d065a55a7cf4390165df8d8fd33e4983"
  },
  {
    "url": "assets/js/153.0b4e5183.js",
    "revision": "6baea305678dfab2b3f886e90482e90d"
  },
  {
    "url": "assets/js/154.d906c1c9.js",
    "revision": "f5137457d0d10e540cc02c0aed56935f"
  },
  {
    "url": "assets/js/155.1bec532c.js",
    "revision": "838739de0c8785d43a6e8b5a89af5fb5"
  },
  {
    "url": "assets/js/156.4f5c1c10.js",
    "revision": "16d67eabe5627e9448ccfa9b9080c7c0"
  },
  {
    "url": "assets/js/157.aa3e4484.js",
    "revision": "ec4312d656bdc96d0d9f62d3099e4b86"
  },
  {
    "url": "assets/js/16.41ad26e6.js",
    "revision": "d9b11aead2c71642575778c97cf4c567"
  },
  {
    "url": "assets/js/17.0498d5bc.js",
    "revision": "ff231d2844607718c007aa478b276eeb"
  },
  {
    "url": "assets/js/18.f7ac965e.js",
    "revision": "14be65771c38af98139ec04b1958b456"
  },
  {
    "url": "assets/js/19.8cb35c88.js",
    "revision": "f1787fc36a68ad896755837319db17c9"
  },
  {
    "url": "assets/js/2.7fe2bb7d.js",
    "revision": "3bb05629ca9d3e2423cca059742e8a79"
  },
  {
    "url": "assets/js/20.3452e586.js",
    "revision": "f36637ca0303fdf1020afa703e6f95f6"
  },
  {
    "url": "assets/js/21.dea876e6.js",
    "revision": "108ca664b004737f19768c980986e18f"
  },
  {
    "url": "assets/js/22.9e176a13.js",
    "revision": "ea8fd3e29b1f517a7f5327a0146b6aee"
  },
  {
    "url": "assets/js/23.dae11039.js",
    "revision": "e124721dd9a07bab8d3fbe5443e3d44f"
  },
  {
    "url": "assets/js/24.94808ca8.js",
    "revision": "14575cf5a89ba0d80c39ebba30145028"
  },
  {
    "url": "assets/js/25.086b1991.js",
    "revision": "8bc3e607993f2d8566a56b62efb34cb6"
  },
  {
    "url": "assets/js/26.16cc3a0e.js",
    "revision": "467238daff5e8ee4edd3420354700181"
  },
  {
    "url": "assets/js/27.3155aaad.js",
    "revision": "a9755ec29fd0e773214388a1af472437"
  },
  {
    "url": "assets/js/28.7bf7acb3.js",
    "revision": "8ebee216af5cb248bc3ec911076bc33e"
  },
  {
    "url": "assets/js/29.044746ac.js",
    "revision": "87eb5c32f10cad06c836663e478dbe19"
  },
  {
    "url": "assets/js/3.587bbe83.js",
    "revision": "5ac5cf752db15f57c5f55d43fb581496"
  },
  {
    "url": "assets/js/30.756c5604.js",
    "revision": "60a64750671f7c47f6e9a99b0ed648bc"
  },
  {
    "url": "assets/js/31.9dd3dccb.js",
    "revision": "be7b26621e528db48addf047c6485549"
  },
  {
    "url": "assets/js/32.a0627270.js",
    "revision": "d4257f057211ea6a6bbe025b64c99432"
  },
  {
    "url": "assets/js/33.350050ea.js",
    "revision": "e46e28e0c843958bab2f09115f5610d0"
  },
  {
    "url": "assets/js/34.3b986bf8.js",
    "revision": "d423c5dd040435b1604578b24b32b0e7"
  },
  {
    "url": "assets/js/35.580789d8.js",
    "revision": "b224cd7863bdb7077aa3f7b702852c29"
  },
  {
    "url": "assets/js/36.13f568d6.js",
    "revision": "1237be84be026b48bad2b24ae53e0903"
  },
  {
    "url": "assets/js/37.f15f4101.js",
    "revision": "2884de72c8bafc1f7e58edc776b1b466"
  },
  {
    "url": "assets/js/38.2acba48d.js",
    "revision": "62fecf3b58c1269f5d3d4894026e2ebc"
  },
  {
    "url": "assets/js/39.9d64f1eb.js",
    "revision": "351ea723f3e74bbd03718d37bd997a0b"
  },
  {
    "url": "assets/js/4.75070499.js",
    "revision": "e0d708bd1f585bd45db62682fcd4628d"
  },
  {
    "url": "assets/js/40.86fb5027.js",
    "revision": "70c8471b633144687dc29a1dc73948dd"
  },
  {
    "url": "assets/js/41.113feaab.js",
    "revision": "b606d3fab7078f5dd2c0bfa1536ebb27"
  },
  {
    "url": "assets/js/42.6093b92d.js",
    "revision": "923702f137438d2f4c1d0bca31e02c4f"
  },
  {
    "url": "assets/js/43.7f8aa371.js",
    "revision": "44b39c7ec30817f9068a5f6288d97d4d"
  },
  {
    "url": "assets/js/44.2feaa90b.js",
    "revision": "63973a48a391fc4078fbf2d04c6ba0c2"
  },
  {
    "url": "assets/js/45.fea42f34.js",
    "revision": "a7bbcc5a99cb8e00132a830d348fe0ae"
  },
  {
    "url": "assets/js/46.9827aa4a.js",
    "revision": "1bd967680c89ae620071f35f9e2a66bf"
  },
  {
    "url": "assets/js/47.08d0d320.js",
    "revision": "8b00dba46248f694f7270736ada2f94f"
  },
  {
    "url": "assets/js/48.283400ad.js",
    "revision": "a77f383f6352df7317cd6d8f796f15af"
  },
  {
    "url": "assets/js/49.841b3768.js",
    "revision": "4a34c1d4f8177c89afcd3fd5114716b7"
  },
  {
    "url": "assets/js/5.9bd1fd1e.js",
    "revision": "dae3908cab0c18c65a5e7f5b7d93fca0"
  },
  {
    "url": "assets/js/50.8e02d8d2.js",
    "revision": "38d379f4a6b729f0e926dc8c07e69035"
  },
  {
    "url": "assets/js/51.29d0add9.js",
    "revision": "91f5fe0a7a17d72e2d44b61635c2fcc3"
  },
  {
    "url": "assets/js/52.6f1d5363.js",
    "revision": "007a6b5cf4d7b49234598eed776e3132"
  },
  {
    "url": "assets/js/53.84a961a4.js",
    "revision": "d8e261818c17f7321f758f8005ed5e4f"
  },
  {
    "url": "assets/js/54.aa739f02.js",
    "revision": "493595004ffc6514066ed43e4eb4411c"
  },
  {
    "url": "assets/js/55.b4f53c66.js",
    "revision": "b69d2b8ffd9fbf858a6e505e019ea2bd"
  },
  {
    "url": "assets/js/56.1689d263.js",
    "revision": "8bf4b957becd5f1a666d78a334351d09"
  },
  {
    "url": "assets/js/57.efcb581e.js",
    "revision": "db1f100a3853c13c777f1c2b657cba74"
  },
  {
    "url": "assets/js/58.1877aacf.js",
    "revision": "4cc7e4bb765941a63630215a4479ccb5"
  },
  {
    "url": "assets/js/59.81980e27.js",
    "revision": "db6489f3a9ae4093fd7e9a4ed4bdb891"
  },
  {
    "url": "assets/js/60.32f3a94e.js",
    "revision": "f4335cb533e02e13b8becdc2b765d63c"
  },
  {
    "url": "assets/js/61.c0e89637.js",
    "revision": "f29442c2180b590df3d0fa0b379b028f"
  },
  {
    "url": "assets/js/62.86aa90ac.js",
    "revision": "f0daaeb7f7614e4d7bba827fe5015e31"
  },
  {
    "url": "assets/js/63.cfda9ea7.js",
    "revision": "067849306d335048d95093cecea07156"
  },
  {
    "url": "assets/js/64.b90e9c74.js",
    "revision": "6322b7bb67944b0fe5a8648f392e95df"
  },
  {
    "url": "assets/js/65.2768200e.js",
    "revision": "5b79e4f58954006ee2871382fda00a71"
  },
  {
    "url": "assets/js/66.2c850e8b.js",
    "revision": "618a9fb8af5616385a0684356d5d2f1a"
  },
  {
    "url": "assets/js/67.56b07653.js",
    "revision": "b25ee9afef4bf5def1c42a7ae6d7c3a2"
  },
  {
    "url": "assets/js/68.1f03d135.js",
    "revision": "1459db9cacdd61ee9fb47cc3e0583478"
  },
  {
    "url": "assets/js/69.1a8093fd.js",
    "revision": "5c450f0443a33326736bb5f5c6f4a3dc"
  },
  {
    "url": "assets/js/70.eb17ac01.js",
    "revision": "dd9e1652dbec0b92a4820e27affe9670"
  },
  {
    "url": "assets/js/71.b5fe805d.js",
    "revision": "f38607f55e447d56c6650ec43a788c7f"
  },
  {
    "url": "assets/js/72.5794daf2.js",
    "revision": "50773a699abc6b86f472a609928ead02"
  },
  {
    "url": "assets/js/73.4c5418d0.js",
    "revision": "bb2227245b954a3d41c20bd98cd51fa5"
  },
  {
    "url": "assets/js/74.2db02e7b.js",
    "revision": "1a048a1a65fadd241858719bf8620219"
  },
  {
    "url": "assets/js/75.fe432081.js",
    "revision": "317297c577f4dfb3b834cf219d36353c"
  },
  {
    "url": "assets/js/76.7623d66f.js",
    "revision": "04a41dcb2230e60f3bf113fe835ed501"
  },
  {
    "url": "assets/js/77.ed1febb1.js",
    "revision": "8089c5aac04337ac6f2e93f3d3f95016"
  },
  {
    "url": "assets/js/78.6ac5c626.js",
    "revision": "5b87f04f263f4e2809c46ace0f4eead4"
  },
  {
    "url": "assets/js/79.f1c99441.js",
    "revision": "5b986de368658fa86f4993b31e9d769d"
  },
  {
    "url": "assets/js/8.36224539.js",
    "revision": "f434626f8a0fd145cd279d8f4a87a641"
  },
  {
    "url": "assets/js/80.fbbb55ac.js",
    "revision": "e513487df3ed7dadb5087f170029ad93"
  },
  {
    "url": "assets/js/81.bb5f74a6.js",
    "revision": "6c55f073bef608a5ba1f2baea55114c4"
  },
  {
    "url": "assets/js/82.cf1475b0.js",
    "revision": "d000dd8ee8cba8bf6c43869838847dfd"
  },
  {
    "url": "assets/js/83.c62f4b2f.js",
    "revision": "0d9f39272ed329e1188631a49208875a"
  },
  {
    "url": "assets/js/84.dc7d389f.js",
    "revision": "463558dbc71fd81259bcf0b4e212f0d9"
  },
  {
    "url": "assets/js/85.598abe40.js",
    "revision": "bda53a4aa0f2e470673a1ad41df78ed8"
  },
  {
    "url": "assets/js/86.f8b48b79.js",
    "revision": "6ed9f44c463b36b2568e7100f2a3d961"
  },
  {
    "url": "assets/js/87.40601f15.js",
    "revision": "abd613104c5345ac1c2792f6fb711d9a"
  },
  {
    "url": "assets/js/88.e607ddb7.js",
    "revision": "aa305ee2357f87048063c2593ae1fcb6"
  },
  {
    "url": "assets/js/89.1c67df8d.js",
    "revision": "99f197e9c3d678bc332edcacf7997872"
  },
  {
    "url": "assets/js/9.91cc1c95.js",
    "revision": "5a84fe817a6f172fa8d2a65a67ae78d9"
  },
  {
    "url": "assets/js/90.a94c0316.js",
    "revision": "e9759241ef016c59b5a4f6ca3fc7d3ef"
  },
  {
    "url": "assets/js/91.fd392abe.js",
    "revision": "b61a4ad8603ad844f28f9ad44bc8d437"
  },
  {
    "url": "assets/js/92.b21bad5d.js",
    "revision": "b91886ff36898342198079770bd58179"
  },
  {
    "url": "assets/js/93.43928092.js",
    "revision": "760b2b63006d2f5134797c97fc5ea2bf"
  },
  {
    "url": "assets/js/94.34e8f17c.js",
    "revision": "22e96bc8c14015318ee9461b98656441"
  },
  {
    "url": "assets/js/95.5197b086.js",
    "revision": "3d9c45fb409667f5b3b749678287a39b"
  },
  {
    "url": "assets/js/96.4256191f.js",
    "revision": "f44e24a6cc1cffc900b3502b3320ec6a"
  },
  {
    "url": "assets/js/97.b37fc8dd.js",
    "revision": "b11a7283acda59feec3eb4e4f99dea99"
  },
  {
    "url": "assets/js/98.66ff5b97.js",
    "revision": "7d8099f3a718b77286a95e1ce322bcd9"
  },
  {
    "url": "assets/js/99.7b260533.js",
    "revision": "a8283329533cc549f87cc6b34ed2ebcf"
  },
  {
    "url": "assets/js/app.ab207944.js",
    "revision": "6657a728d87b326c9df1d7b952f697ce"
  },
  {
    "url": "assets/js/vendors~docsearch.1c98f071.js",
    "revision": "72b0beb3b5558507793502749597c9f8"
  },
  {
    "url": "index.html",
    "revision": "cd060f1f2191ce5a64e381f582caaafd"
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
