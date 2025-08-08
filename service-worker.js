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
    "revision": "a80de94fef113034acbd34b0721bb102"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "8088e478362f9eccd85030ba2a24773b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "6f086ba81ba6396cab579900ab6e8d25"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "7496f0d5fb7bf4b75d5f3d05d6f9d958"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "6403e7e541011215e093d5a23dcb415c"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "7e73ec887e2d3e5aa8a7effe0a99c6c4"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "f904a80e099968d3c074fc634b7c378f"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "54d2017b94fb7088ae7bef7d8f56962d"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "2cab657beb0a1527d7786a0d0da26235"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "87d575715080923d33d6c944022c6eb8"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "768dbbe44f88089d36a9f5a2ccd99110"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "b88ec83a6f51a4f6c59907c1f27d8d7c"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "a88f7e008fa35fec21591d391b53fb55"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "a62cc26bdbc88a05ae9a9dc9868e9a6e"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "b3d3a730a93f7f2b9608a35e795b987f"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "38b1fa808da7543d572961f2d90183bc"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "44c5a4c966a7f86f0cd9179611df9466"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "740518907b5fea753f398fcaa16a2f3c"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "2ea7a4ca8309c2d146c7f2b762170fde"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "81e7790f970634b3889bfdc16b47d956"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "1be5b636c441fc48109276f05b191174"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "4a9751629e2fc24b0d748da31be5b404"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "59acdae78b605169bde19db6e352229e"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "e9eb975c307fcacdec0d9200b36b9976"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "e7050f3b2c6f076d66ce1a964ee2e9df"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "bf65fca683eea7c9129b5ee4c8f4bda5"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "c8cbf41fb68fb199269f96f92833d379"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "295b3dfd47e9848edd9f13334fcdfd55"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "c9e8fdafa58971d94da39cb9d0936529"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "a6b6ad0db05840bf4e8bf10d23ff3d06"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "0d0783efb8604b5d4a7e0736460b81a6"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "7deab4946cf273deb49189c56aec32ef"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "5714899e224559fc26a4b5a14de83cb8"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "41a947d31ac2c3481bfaea58b0313a12"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "e21acc6580b1558744d500914de4e56c"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "84a27baeff0cf043cdf90c8b97ecd937"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "ae4b96b9bcf23d4376bda89d17d89fc0"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "b671e00e3220cf07bbff566033bd6693"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "e6df120dd5fa233f51436a9826d3a3ce"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "6a223b7a2422fa968157a7b07c0e582e"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "845c7604a13af9312097f3b726a2c027"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "1bbe12ab5e6d6f0f4f4148e24a8f89c5"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "6745a07f2d83947bf2af51c66e9dc406"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "1d53815ac86527691b7862ef8099ba65"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "46a04450198611ef5e48ce80d9283d01"
  },
  {
    "url": "2.0/MultiVendorMarketplace/index.html",
    "revision": "38472004c5b4252ee1073647598616a8"
  },
  {
    "url": "2.0/MultiVendorMarketplace/order-management.html",
    "revision": "9501011f3bfef5778c8051bf50b62bb0"
  },
  {
    "url": "2.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "70383f6fb427a9af4ee0cbb0f5c592f4"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "eccb5fd77ab01103089fefe3ec6e09fa"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "b3672dbc50bd8a37dbd000bf8b95d1e4"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "df9994f3eabf06d0fe87d319db96d3e0"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "c7aef8436d85831f57cdeebeb2ccfa63"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "c77c603bffae1933d09f17f216e8ce69"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "25d714861e6efb8e9e8a830d3b1c8d37"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "badeed9c6585b9c5983529a9c1743269"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "cbd0c9f4d18682a6068e3e5d46d54f8d"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "d6cb67b643c6006beac6c135168b0004"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "dbbf1668c0c6032b5cc6dcd9a49cab6f"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "836ff191f17cc3e456513091e267113f"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "947bbba28bbd4cdb7daef492fb53949a"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "0951707066d81dfca34ab27b7ff2641f"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "a4986c64e7282eec93b496f3982dbdcd"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "2e83d150e324e3d232e1648a07d9e540"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "57c349f7aa765d597d4a6cf8eea7e514"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "5761f2aa9ee6bbf604101a9b5f1d5489"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "089e0f751d6146b14e436147e7d297e6"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "c725671fda47e3adebdd280001f0f05b"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "e7b542a72dba94fe39149ec51e3c1292"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "9fb9060c5dc282c2fddfe958e18ed73d"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "a21f91120d2286d53c058ca6dd593143"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "3b02c98753ee781c2701f6c03c89b988"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "8029a4e8dc717754ecda571ed816ed4e"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "4adcac92c01a3b70e192df8860de48d4"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "2e5eb794d9d75a55d1eceb7a99a0b796"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "ec087104de24618f75b768c7ab94aa92"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "8e7a8baf18a34d9774096dd8e386fc6b"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "d21a84aa4ceb1fdbe06298ec8a364017"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "bd70235b569253ff959518f8c4464f62"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "8bcb9c28c53b1bfc55a8941b00ff87b9"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "18a0a0b6fe290f7fa05d92b113e1dc01"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "a0bcb4b7c265b8e4ec25bc1ae1eae87b"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "fa1af5f9e7c93f8b31931e11074da2e4"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "7a10c95cdcf035fd8f0c5b937605c28e"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "7ce054b67c8a932c8adf1b2684314e11"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "34b5eeff357653fa6e42a1ec79228fca"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "985d67e36fdc7c7397922bbefff609bb"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "963cf9a7811f8ff9c251fd6e9e114c0d"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "b3fab7d7967daad360b845caeb7642c8"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "4459960035b039fdcc399658603d2d3d"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "123a20035f03472a64721c20883737bd"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "f9c48dc57552836fcd45caf7ff4a95c3"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "be98135d4a633a32c8d4ea442daecae9"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "9c68a0bd0f3f26e549ec6a47d22570a9"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "226b1b49f158b0c1c945dfae47f6cb20"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "53e9c08a35aab9dc636e4d575956f6f3"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "db2a5d37bb3f235c76c14e6574d66e20"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "68028316ab52c590738b76b986954967"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "36f7a80021f8460f63f5cbb50622301e"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "3755cbaa9a35c66894349afce8f612b2"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "a47ec805a6b569b9777fcf20c482de96"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "d08ff6284dd325f642f363ea73efd91c"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "9d5e9cc816304eb3d2985d18f965b303"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "6dfb94fa73a55a0f223cb164eccb2deb"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "90cc853313e79badd2a1aad9c507655a"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "269f0ef1d2228a2424543f2dec25c3ca"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "b7c2e8efe73fca4c172c7c7457a09d68"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "bb47769f4c6150b6e21f5a75504849c2"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "1635a501d329c1e2882baa0485b122c7"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "2d7ab1e0ff755d30bd5aaacd0bb917b4"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "4d0b5771b035df9c65bf44110cb1c100"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "8884a80b1cfed2bb510ac2607e87af10"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "ef9721ac4300d8054375be8e6aefccb6"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "aa6e88a004dea8c66b89a847b67f35cf"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "41ce5120ac6a1c636ed8e0d117984b38"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "8e173d6b88c52a5b1482a50008155928"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "4e19ec3449b186b5a307b7174b876251"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "789a9b88d157e520382795add388928b"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "83b3836e8c76e4ff35ad6fd3cdc91aea"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "3b16125c284bc01c8a19258a0afd9e1d"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "9aaabb7c496547d5c20cce7a28cc4204"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "89562083af7a7da501ff5bb74ebe611d"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "3e7a85d8751baa06d0fabcfb84ae1699"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "dbe154c1571a6c19741bc21daafd3223"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "ed0dcf13018583f3cb65efe7981ccb82"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "8adbf1facc74403b07e32693f0172bfa"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/index.html",
    "revision": "c9415556e259ca740f83c1834d6dc728"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/order-management.html",
    "revision": "04757708de003e4191272c32466d5e1e"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "41e00a26911e3547d14d6a2d48d4ff52"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "af5d2f852f5640255a79a1c01aa32bb1"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "3a5047c9a88a2d8b9a3eda4bb9937216"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "9a2a0033bbb822ecc0d79a67d19c79fd"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "19bad45eabe6b2cd3db255bff3a029f5"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "135aaf4de492b7822eff0f0add640007"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "15a9600d0d89f30c3ed006d0e260f685"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "146d08efcf8388bab745c87b07d0ff05"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "c455a9c4b3b985ba717506f67033b047"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "86722f19cd4bc25bde0a3fbf0e3a8310"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "80a8815593d46389ac6d64dd4bc2a4e4"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "b735f1072fd3e041948a984279bfc4fb"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "1f5448a713d40c8ccfc8b042c679fae2"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "bedee8df2afac6fab98026bde661492d"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "73dd85cb82506a532ce99353fcfc4d7b"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "973ed0e8fa07b0b1c02f67c84fb28c47"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "6c940b7d46289962a5c7a3b1fe0a5dbc"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "213fb9d2d7b51197db2a8bb46cc4384d"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "8c132f99afa05d7b13d80f0223da102e"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "259ae33b750ff4d23315f1b018121657"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "055150d27160a26d9e3c5a8113d88609"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "5d792e72b3471a00cf8bdc1eeefdd986"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "fe2f6045114b74e2ba9b46dd4d386613"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "6b67ee079618e4d44062a70f9a626346"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "a5b0560c65c7c7288f3defad0a17cd03"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "4da021660f4557281adea623cc1a3e18"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "917db2920bcfc1475ce211482e325e9b"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "866e3464d440caa4e760432f925c3c5b"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "6e54e52238b148cb938966f07d732516"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "ce2e949b679620b78f77f0f3526ffbd3"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "dcbc96bde01967d01319204ba5266018"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "9e24f4a6ca04322ac74e88085cb9809e"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "730bf73827266f11ec5a2adb03c23993"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "b0cffba43c9e4cd7ede6beaf411db694"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "a4cc28145f66a113027643d0272f3bd1"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "c187db47c1be5d4ce69330797098e3e7"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "9141beeb360fbbc394b81c4060b012cd"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "5451fc67a95f633456f65facc8095ee5"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "81faf5a652337d61ea58799d9d6a24e1"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "a9416d9d92585d32346d72509c15fd9a"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "d98ad6a5a2b355b7d7f2a2c8609fcd73"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "79c3f2895541177d9d55d0a42fabe321"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "e70b19116e2cf6171f923b825cad1f25"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "8ddb3df198e763771b9ed5af63ce6adb"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "302066ed6858a342f0b04728b390eaad"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "dd6cfb2a933a0b278ad11fc4c2266e07"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "d8159b059779980d8cf55cc45b30729e"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "047b9bbd686c0da865787167dc206f0c"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "9a04d1950d7cbf3a593b2a0a1b79df85"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "81fa066339837b9971d07a1534e38f00"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "28783546ad50e62b1b33b0fe1add66fd"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "40f51fae1e1740f55474c6ed3a0dd8dd"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "72e94b84fda0616764098d586968e106"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "3caf5cfe3abc49c41e399120317a2fe0"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "62fe8fcdab2238428577011533c4b700"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "690288af9181d29305ac740624cedf0b"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "86f7c08a91dcba084c88c0aa3d300c57"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "4d29ddbeed77a142637693c76fa116c4"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "0ef6f16b234a29560e5e221b06ecbd62"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "8caf70d04b10481ad0e5dfd9e6ae90fd"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "174850bd10d898a148de79ee98d32255"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "0c886cae6dd21dea09ede13cc6bf5453"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "67801c64959479fc6ecfc4f0e4ab2324"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "42f0874f2fbe9741b378fa7fd5733916"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "43709e7d51f84053f287440d3dfeb2a7"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "ed70fec555a3fcea9b60c95c574fb3ef"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "95dd2c5ab68b7b2fe5c47c09f9289b6a"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "9746f01fb18cc5bad1b519cdf2968afc"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "3a40742718bbde7838ac917c9e91e5b6"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "fd644f7ccd937f39547d3b1130cdeb1b"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "3791f197cc62a7e6ac3c57d3b8f760d0"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "6f0b0d220f3992d98ca150f015f1bbd8"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "dc47cdce49a3d6a83cb1a866c3771d77"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "4519cff782defd853e6fa898027db828"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "5966cbe2a73e71135b059b6f59e031dd"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "512d228e6d40498f806f2cb5da13abf2"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "c8cde48cbe5c7bfce894a0dbac95d9e8"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "6089790fdc6ed1e4786f448d4adec02f"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "9c62d970f3855fa61bf6d5acdbb0faa7"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "3e9094df828ad6c0116a5773fb3c2dac"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/index.html",
    "revision": "61c7d97b91fb6fe64be3689763b43435"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/order-management.html",
    "revision": "880ab6b25ba9f33b30c70f219ffb12b0"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "b278f0cef56ba23580da848dad802b43"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "2e19b90b7084131aed34be6adb176c7c"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "9dd4f3f4debccc00928a1dc27bfb781a"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "c58f8fe926d812108e49f88322abe043"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "c0c9899912e0d6a56274af18812552ec"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "dfcf37227d91df312d2c12aeeb396503"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "7249bfa8b930608d5994ed4600ce6a8f"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "49a0ab8dfd9bc267983aee3a61691194"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "174c3db971ca9bb75dbdc78e401ec1e0"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "4a3e580303ddbbc5af4c2aef1f807359"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "ade7c914772ec6471272995dbeda6f47"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "e04641075fddb4256028ed155989117e"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "6d5495fc6417cc570d5020ebaaa1071b"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "9a9056b04ca4c250f7c837d57127ac1d"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "5a1844fbcd9a702490188847618ba9c8"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "0f5dbc37e8566275bcc423da3ca2c541"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "bb7fbcfbe1049bc59bbe087dca404f92"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "c5ef09ad2a7c6a6561fa4efed8f3cf9b"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "95a6dff58d8adcae52a87f610d7b33e4"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "78fe0722b350b17dc081aa916292ae9d"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "763598a0fa79d4bd9903b0202ba0080d"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "ab8b482c961ba4aa64b633706ff62172"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "aaf0b09219e131c20f553075efa380bf"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "880e2f15d03aefa9dcf750cea2451944"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "3e883a8fa13085ac6b6cb340d380c4a0"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "c67e54810984a6af7a07df789d9b7698"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "ccee8badf3327e27a3be1c5d42289cad"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "97204ed3f2b7c88e5bb474f91a31ad5d"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "b6d9189a1dcf24199e75def27e567066"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "95391808bf02936fc87d6c3a4a1af67b"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "e894014717d6a6761c0f392fcb04b0be"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "18315dd47af044b869e60775adafa5ed"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "514c865a22c179f745795edc8a9ee640"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "801e115cbae0771d9864b44538d64c89"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "aaa86f03b33a3c67fc933f312f5fad67"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "c1ed855952e22810cf2627e7164dfa98"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "55ea7e07a847dfeaeeb64f7aa7f996d7"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "0458f54f5a7892dc756a62a7f3409488"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "ac76d435f004116eb0185a0fceaa6132"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "34d885c76a0a1897b668babfe01ac908"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "0a46b55f226ed39411e4f1fce138b05e"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "4a3c53924e8e5912b704d02b2f667110"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "27d3eda7921fa3a9eadea646c131b2c7"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "3b554919b9de7a9972296bfb5afe9cb6"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "31f19fd32744a128bf1266dc53063fde"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "d876a2c41403eae678ea9c4c8097e8d4"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "f0a7480fed3dbedf4313a3403739847b"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "052fc0a15f28d4785c8483539a9d1b9e"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "46cea87ccee8efa877ae6a5663b29578"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "0278cdf84b8f17e5094080e308caa4bf"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "bb611f54f7b3cbda4a5a9041b6aa2080"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "15e2acf668b002ab5bb3880726aa187d"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "93f71fd3c2e1ea0d18daca78c6e91e32"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "d2644b744781e84419ecf68a2597a59c"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "2440090ba03d915aa9c0c4af9162326c"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "20a2ac6c8a2ab6b7236f6b2b68ae8b63"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "7f2b3ae6bc2d9a227b05a933bf923d74"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "9417c3704dfbde61862227180b943a93"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "2c09b37e219049ef8bae54a30e762ea9"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "9df7d8f00b0c0363c70925686875f7bc"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "40015005f7660b6eb56b930c13ce2a2b"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "4b18b025d5df6049a8990029a1f87328"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "d4193a197b1300594a0d1b66d59bba3a"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "77465c2de048221fe235719fc365c007"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "8fc5e847200321a6ba12a934d7d93e05"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "cd9cb5da5f184324969f481598f0706f"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "4a688f99b02599b1123cced90d6f59b8"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "b7677aed58d71d2e0de482e5f6bde3fa"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "f7a0ba3f59af693e1194b3c84b5d22d8"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "bec18e19721f7eea84dc975a6de5a918"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "0a4a94ffe24a4d9ec9709acf0d92da41"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "65ea793e4e12c51e4da3100dab2c2124"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "99fc9e599afcb4ffa04464f8caa7720b"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "c6ac0171003c580fa47c2565b466819b"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "c1fa16cac1040cc194b0d65da64652fe"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "de34be4dac319289a63bb60b09a3f7b8"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "b8cc7e4ddda89b1186f6ff7bdc9a818f"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "548d37d3c8ff712ac275edc1020782b1"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "e96a9a5147e765bf361a06edac926f37"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "1352505e6a13629193af26013d7e6c2a"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "08b4e66e55999622a392c271b25cc33d"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "7cd19784c85b3b2b9593ff2cd1887075"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "19d1b36b152ceb420e94d0a2e64d397f"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "cc3bcc08c6347d3fe59f896d3c4158f0"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "886ac6098ba5608c3f49447b201025a2"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "ddbab0ae688d127e395604f01fe9b064"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/index.html",
    "revision": "b6c18d83b84b9ee25a813fd21ff2a4e6"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/order-management.html",
    "revision": "b8800aed87df14d841a3134a61ba926e"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "cd4f6a14c73ab6dfd8028de6e7ba9147"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "11f618eaaf7727616229c9c037fe175d"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "ab81e26603c6964977f03cf5a00c88a6"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "e7af909c4bed3790fff8884d3a31ad55"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "6d31c9028729b90ef35002d72f6f9eb6"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "ead39ec086f0b155ff3032d856a11d7f"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "9f1671afc0dac2ff59a8078551462da9"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "4a82e564eca05249d1e2d599a8adc460"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "6849c5627b2aad8e021d5f2aa9d80e30"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "a3c55120e284cd9b46e78e77444c9076"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "30cca5618a6a39b1908c960ef2003f91"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "d394cbf72dd9271212bd4f0f1d192ce7"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "d1c270aa0946e00a1fe3b895fe1e5ce3"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "ec0179dab84a828629e72b42fa193b22"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "3b6b97e601cc672d370a6af8f353efbc"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "30a5f3e4e73c758c3d847ca23b619aca"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "142a0253b5b4d71f6cfbab7b1e83928d"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "c910266017a3034e304dd31f6557cec5"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "83aaab7abaa9836c358ab775a8391c1c"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "7b7c39904c3bf900266736e951d9dd65"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "05a86ec15e72758dc600bf2589543b0f"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "9a4fada6c5d30006391513ac673e342d"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "c7c0fae781d9d61ec10f0633362890e1"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "271756945014949b4967ce34fa487e60"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "b302b67d8775de1f81f0366e0297b631"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "23e2e00e27b65592294cc957f89bc732"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "0786eb60654a292f65e2bdee347cf52b"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "3b2c8092ffcd7ce48531a065f65f9a2f"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "67eaea78a8d9487b121e23e7d17c8b3d"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "4c7182d058b82a94353d9760586b4360"
  },
  {
    "url": "404.html",
    "revision": "fe54aca766f7198b304bfda0b4a9b268"
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
    "url": "assets/js/10.0d5e3f9a.js",
    "revision": "56183dea04a148111bbada6e76530a59"
  },
  {
    "url": "assets/js/100.0b96ae85.js",
    "revision": "a2ca4fea515b68bd07e803ef3b4318fe"
  },
  {
    "url": "assets/js/101.151cb1b3.js",
    "revision": "d7658a30fefd82533ff75b159d940d28"
  },
  {
    "url": "assets/js/102.d2ca2caa.js",
    "revision": "a4e170f95dc41a34af6d6bc368e4c54a"
  },
  {
    "url": "assets/js/103.4b93f6a0.js",
    "revision": "16beb0526e69c41667728bf92f91fc67"
  },
  {
    "url": "assets/js/104.f7c06022.js",
    "revision": "a38834f5fe557a0eaf1f1cba126173d2"
  },
  {
    "url": "assets/js/105.2e77cd4c.js",
    "revision": "d6565a551f9e7b5ad30575ba1aabf456"
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
    "url": "assets/js/109.f9be4874.js",
    "revision": "b7990b5326a5788ae557a46d92b51369"
  },
  {
    "url": "assets/js/11.36a316a0.js",
    "revision": "ef6827939700c1926c6d63b6dfde2b0e"
  },
  {
    "url": "assets/js/110.6c110709.js",
    "revision": "3e372e851b3876e831b95f84c5c866ee"
  },
  {
    "url": "assets/js/111.766dcfb7.js",
    "revision": "dbd33192c4049644e0dc46a4d014eb44"
  },
  {
    "url": "assets/js/112.121f7edb.js",
    "revision": "09d1921e248b1fa712b08652f0c82f5b"
  },
  {
    "url": "assets/js/113.2014aa5c.js",
    "revision": "826540c3bcafb0412b02c8e2f192f799"
  },
  {
    "url": "assets/js/114.99eb0752.js",
    "revision": "c4034c64aa1363ab2fcb1d6a85c339f4"
  },
  {
    "url": "assets/js/115.bf1c89ad.js",
    "revision": "afee2767e55628cdf5f3554bccd88034"
  },
  {
    "url": "assets/js/116.9f4937e5.js",
    "revision": "eb2cbd6c4dd5cb184d1aa7e718aa0777"
  },
  {
    "url": "assets/js/117.2c93d7d6.js",
    "revision": "724b50235435c9ade27b7a86b684ba78"
  },
  {
    "url": "assets/js/118.9355e0be.js",
    "revision": "a967a21aec8938c62b5b2069cd0aa33a"
  },
  {
    "url": "assets/js/119.15d522fe.js",
    "revision": "7a8eab2ce7745e4d9befd55c55b1a12b"
  },
  {
    "url": "assets/js/12.7bed9e1e.js",
    "revision": "ef14f510c70d1e8630901a8abd3afa46"
  },
  {
    "url": "assets/js/120.caf8bbb8.js",
    "revision": "678085d9969cecc454312f016b0b5170"
  },
  {
    "url": "assets/js/121.9b43000d.js",
    "revision": "2a2e599c067238705f7c833b23711143"
  },
  {
    "url": "assets/js/122.1c8de047.js",
    "revision": "d3e1fd59a3d958fd07d4e7f2ec5c016f"
  },
  {
    "url": "assets/js/123.e7fef6aa.js",
    "revision": "b07cf2320f5c61abe599044082151e80"
  },
  {
    "url": "assets/js/124.a0064b7a.js",
    "revision": "6d065adff21c41fcb49c8c0d206d5545"
  },
  {
    "url": "assets/js/125.cba651ee.js",
    "revision": "4c1000d92299a88aa4761b9872625607"
  },
  {
    "url": "assets/js/126.8958f813.js",
    "revision": "319b9eb5f1135d83fffc05a52b58f724"
  },
  {
    "url": "assets/js/127.8da01ff8.js",
    "revision": "229a0915b613664722d974806532e167"
  },
  {
    "url": "assets/js/128.541439be.js",
    "revision": "93793d12920df92c03171e1c70ba63d5"
  },
  {
    "url": "assets/js/129.308ffdca.js",
    "revision": "421a7c12569959cb339602ac3887cf34"
  },
  {
    "url": "assets/js/13.ecf31b97.js",
    "revision": "842cdd96b520f3d6425a81b0a3a62b9e"
  },
  {
    "url": "assets/js/130.affafe1c.js",
    "revision": "7bf8bc275104d192493fa3b21c986f6e"
  },
  {
    "url": "assets/js/131.e50255a1.js",
    "revision": "61b5b7f38ed7ff67792ce2c6779a03b1"
  },
  {
    "url": "assets/js/132.c4c06208.js",
    "revision": "cafd585c1db8dd8f20365cc610e3fbd0"
  },
  {
    "url": "assets/js/133.325649ce.js",
    "revision": "b83dc6716b22487eca9f1cc6c795b254"
  },
  {
    "url": "assets/js/134.f8657fe4.js",
    "revision": "965bc9462b338ed554125ce8221fb9ee"
  },
  {
    "url": "assets/js/135.eb30bc62.js",
    "revision": "d6ad86bd380df596a711ad2b52c06382"
  },
  {
    "url": "assets/js/136.e3434cd7.js",
    "revision": "ab59eb4bdb0377579fb0394ff535af65"
  },
  {
    "url": "assets/js/137.1ff143db.js",
    "revision": "f14753ca6f4d298f174d9e1dc31845ac"
  },
  {
    "url": "assets/js/138.a116b9b1.js",
    "revision": "4924000de85cd86013d793f701f54924"
  },
  {
    "url": "assets/js/139.c1ac8240.js",
    "revision": "fa4f2526efd9fc3d2e277b4fe4a3c55b"
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
    "url": "assets/js/142.8aeec2a4.js",
    "revision": "5cf54a6ea15bbfb392b8ed8c63083781"
  },
  {
    "url": "assets/js/143.44b10597.js",
    "revision": "d5f497a4325ad822f4f916623b9d0b5b"
  },
  {
    "url": "assets/js/144.c3e6a4f9.js",
    "revision": "129b8a5cfb4d117938aea8667ddc814f"
  },
  {
    "url": "assets/js/145.484377eb.js",
    "revision": "a68b48972866e92806fff000c2f255c3"
  },
  {
    "url": "assets/js/146.6937ffe8.js",
    "revision": "f5abee447f17a5660dcf31213f09328c"
  },
  {
    "url": "assets/js/147.9f131604.js",
    "revision": "1087eb4ba6585385cacb48de6de6c0f9"
  },
  {
    "url": "assets/js/148.483247ea.js",
    "revision": "ec108acb145c0725e3074cbb83551d2e"
  },
  {
    "url": "assets/js/149.f7345bf9.js",
    "revision": "2784e5b76def43c3ddc2eda41fb0d71f"
  },
  {
    "url": "assets/js/15.0d8105ca.js",
    "revision": "b1511c91c757f02d6db2e363fb41cbd2"
  },
  {
    "url": "assets/js/150.58a42213.js",
    "revision": "f32e5026356cc8891333fde545442c61"
  },
  {
    "url": "assets/js/151.412bb734.js",
    "revision": "890f9412691cc50840d1d07ea3af1091"
  },
  {
    "url": "assets/js/152.d2aac526.js",
    "revision": "3265e0c6463e71fbfbf64d3a124e8660"
  },
  {
    "url": "assets/js/153.146781d4.js",
    "revision": "a9b757ed7ae213e815159de5a4b951d1"
  },
  {
    "url": "assets/js/154.fed13bc3.js",
    "revision": "4e9fa6705d1aaf34ff050a96a38789d0"
  },
  {
    "url": "assets/js/155.1179fa7d.js",
    "revision": "b5ab6e2f97cd6d2784cad865cbd677a8"
  },
  {
    "url": "assets/js/156.54959ae2.js",
    "revision": "976a1bb83e6397e9d613246c94dee379"
  },
  {
    "url": "assets/js/157.01ae74c7.js",
    "revision": "9b032589f8ab3112a058416fb78cd1b4"
  },
  {
    "url": "assets/js/158.061ebf64.js",
    "revision": "3a0e55f09f8a1d21301003f0bd7f7a00"
  },
  {
    "url": "assets/js/159.8eabda1f.js",
    "revision": "a5d0fb3866fcc60f2d8ea826259e6c2e"
  },
  {
    "url": "assets/js/16.9bbba7ef.js",
    "revision": "fce11c53d0c0e67f15ada5d17654f904"
  },
  {
    "url": "assets/js/160.431d7319.js",
    "revision": "a53df163be360f241893b9457e91c9af"
  },
  {
    "url": "assets/js/161.bff604bf.js",
    "revision": "b9751a604109ce0b15c4b24990ac893d"
  },
  {
    "url": "assets/js/162.2b7b6a82.js",
    "revision": "466b4538b9e32b8c9c1415ef4888b478"
  },
  {
    "url": "assets/js/163.ab82592e.js",
    "revision": "073ed60cf9c948a580fd54520af27bca"
  },
  {
    "url": "assets/js/164.20191631.js",
    "revision": "9528c310baddc0afe23161ffbc5779b4"
  },
  {
    "url": "assets/js/165.99aff25e.js",
    "revision": "60f3478adc9ffb9c569b615060d421d9"
  },
  {
    "url": "assets/js/166.6520a1a4.js",
    "revision": "e0e3bade1bf0546ff04543c8eb416891"
  },
  {
    "url": "assets/js/167.4df7e124.js",
    "revision": "b72adea34982e3dd00619ccafd327c08"
  },
  {
    "url": "assets/js/168.a3ce3df7.js",
    "revision": "08d4303992b19dd1c3a0b89daa65ffcb"
  },
  {
    "url": "assets/js/169.7e72b570.js",
    "revision": "c080f10f2067b9a1fdf7a0ece06a7dfd"
  },
  {
    "url": "assets/js/17.017d0cfe.js",
    "revision": "f52e2f1357896b7ebfcc0cf89b40aff7"
  },
  {
    "url": "assets/js/170.6ad215ec.js",
    "revision": "b69bff291bbe119c593e74361f0f1fe3"
  },
  {
    "url": "assets/js/171.43ee7edc.js",
    "revision": "252620b181bccd1eb4304fbb25bc76ec"
  },
  {
    "url": "assets/js/172.59fb901e.js",
    "revision": "9e620b45b9881541cbfdb66981715c19"
  },
  {
    "url": "assets/js/173.348d4745.js",
    "revision": "7ca4969ac3723fdfb3a5d4bedfa43942"
  },
  {
    "url": "assets/js/174.990c3e74.js",
    "revision": "3a7aed885d1bd3597d9b860f63bb9c8d"
  },
  {
    "url": "assets/js/175.afea655c.js",
    "revision": "3ddcaa474f86130a46cdd18d1c25f708"
  },
  {
    "url": "assets/js/176.eb1ef438.js",
    "revision": "fc5140e465a42a9d9794d699f86b63d9"
  },
  {
    "url": "assets/js/177.7b6e168f.js",
    "revision": "c0552dfdaea5432df4a4dbe1dbe8cd3d"
  },
  {
    "url": "assets/js/178.cd84936c.js",
    "revision": "986eed9074caa7d47ad8aac0ea28cfb4"
  },
  {
    "url": "assets/js/179.76f590c0.js",
    "revision": "5955b68d1e8a8c06da0b9d3f8a99715a"
  },
  {
    "url": "assets/js/18.db6f1e04.js",
    "revision": "bc0b2039601ebcd6df37b3a92399f22a"
  },
  {
    "url": "assets/js/180.1cd0f018.js",
    "revision": "57ce39cfe30250fcff9d171f670d77bf"
  },
  {
    "url": "assets/js/181.b1889faa.js",
    "revision": "721e1cf09c77037cb49f1282a358364f"
  },
  {
    "url": "assets/js/182.ff8fe8d2.js",
    "revision": "cd4b4fce36991bb79c091862d340af93"
  },
  {
    "url": "assets/js/183.4808bdd1.js",
    "revision": "a1bba23f33c065cc6cb122ebda57a546"
  },
  {
    "url": "assets/js/184.477eb563.js",
    "revision": "e22bd3d6d54b3337d79766ebfca208ac"
  },
  {
    "url": "assets/js/185.fe0a8820.js",
    "revision": "31a057744926e09773fdeb124dea9537"
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
    "url": "assets/js/189.30b7d067.js",
    "revision": "203dcd52646f76d3745e0a565f100205"
  },
  {
    "url": "assets/js/19.6711ef53.js",
    "revision": "0e4c30c5aaa43c3ead8115613d34bc3c"
  },
  {
    "url": "assets/js/190.73372eed.js",
    "revision": "6fe7e50fd974ea87dc4eb15b318bfe3c"
  },
  {
    "url": "assets/js/191.3930d99f.js",
    "revision": "3832c16cafc8a4c84a111c510a8c59e2"
  },
  {
    "url": "assets/js/192.66ac41f1.js",
    "revision": "66902335e0ee85f6500fc0b2daa5c4f9"
  },
  {
    "url": "assets/js/193.21567102.js",
    "revision": "2cbe98580ad58e6b59e7cd9eef890193"
  },
  {
    "url": "assets/js/194.209e0409.js",
    "revision": "34e52c0d19b44cf25f405e74cf23199a"
  },
  {
    "url": "assets/js/195.e5313abb.js",
    "revision": "30774d1a4b0ac292502368bc2348b974"
  },
  {
    "url": "assets/js/196.82cccd94.js",
    "revision": "b36019243baecb8bf897d12a1b6e76d8"
  },
  {
    "url": "assets/js/197.b8248322.js",
    "revision": "9e017facd7c8b3a58acb6fabb9d2715f"
  },
  {
    "url": "assets/js/198.c3b89e95.js",
    "revision": "e435cd7d91d1bcd88cb2e934cb50e3e4"
  },
  {
    "url": "assets/js/199.2326f1ea.js",
    "revision": "ba3533bcdbf8f5c09619f7ea2c93393c"
  },
  {
    "url": "assets/js/2.911fed4a.js",
    "revision": "f04a3a426cfd206b317f1bbd16d0e377"
  },
  {
    "url": "assets/js/20.4fc9be71.js",
    "revision": "657f74f6022051e62e74e5a04f50f7c8"
  },
  {
    "url": "assets/js/200.6a336a27.js",
    "revision": "2eeb886fb020fe2f9af824db24004da8"
  },
  {
    "url": "assets/js/201.5aaca951.js",
    "revision": "88a8dc7304fe9585cfea6a9dc094b569"
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
    "url": "assets/js/204.d1748a77.js",
    "revision": "ca705f310d7e29ce5cc5563df14dc6f7"
  },
  {
    "url": "assets/js/205.a9e76252.js",
    "revision": "4c1edb1ef8feabfa46f1c60df5243c66"
  },
  {
    "url": "assets/js/206.e34243fc.js",
    "revision": "e08a494674446e7b7de940926b7eec2a"
  },
  {
    "url": "assets/js/207.7d49d37c.js",
    "revision": "8a1d775f6e4067826b55512fefab4a33"
  },
  {
    "url": "assets/js/208.ce590668.js",
    "revision": "bc7755fab26deb419bd47b24ba6fd8fd"
  },
  {
    "url": "assets/js/209.7f45c675.js",
    "revision": "f31683927169083c533dae2d2b5987ba"
  },
  {
    "url": "assets/js/21.855446d9.js",
    "revision": "8671ec9a25d5ec3e145249b617dccea5"
  },
  {
    "url": "assets/js/210.b5d47304.js",
    "revision": "17e15ca6ed824d58dfa5409cdf656113"
  },
  {
    "url": "assets/js/211.527adf36.js",
    "revision": "692e4fa3bd8c5084e0f65a265b87e6f1"
  },
  {
    "url": "assets/js/212.7c5cae9e.js",
    "revision": "094f1ce29ff0634308b500a4a3072d71"
  },
  {
    "url": "assets/js/213.ac192e26.js",
    "revision": "5a8f8d2e451e8dcce893c83e7996c5ae"
  },
  {
    "url": "assets/js/214.86773bbc.js",
    "revision": "c6b19ec37ab8b9672b5622b678248785"
  },
  {
    "url": "assets/js/215.64209e87.js",
    "revision": "c57a0f2b9dad71d51c373a091ba3e9c8"
  },
  {
    "url": "assets/js/216.53592fed.js",
    "revision": "2caece9a4d61719ecebf84618a753365"
  },
  {
    "url": "assets/js/217.3973a4d9.js",
    "revision": "2e7f242bf8f5f5ddbbf92789f295240a"
  },
  {
    "url": "assets/js/218.de42b7a1.js",
    "revision": "c4616cb31c3cd493553770dcc325a503"
  },
  {
    "url": "assets/js/219.dc742d19.js",
    "revision": "b1d154c05b1138fd59d687964b7f1735"
  },
  {
    "url": "assets/js/22.38dcfad0.js",
    "revision": "dc0afd6a946ab8fe45475e9820be9e6e"
  },
  {
    "url": "assets/js/220.63969098.js",
    "revision": "c6a64ca588b6d15df804eb8a486e2987"
  },
  {
    "url": "assets/js/221.79c504d9.js",
    "revision": "717c0bf9e2fe01a84836cf3486f2730d"
  },
  {
    "url": "assets/js/222.705e2e51.js",
    "revision": "e90159739ea7d74eb63296cf9127b4bf"
  },
  {
    "url": "assets/js/223.00e69e51.js",
    "revision": "26d76bc31cdb0a56861142885921b9f2"
  },
  {
    "url": "assets/js/224.c78d4336.js",
    "revision": "9f447bee18a67b6196de11238fba5398"
  },
  {
    "url": "assets/js/225.12562aed.js",
    "revision": "3575848eb48f72ca45ab543f1c43a26c"
  },
  {
    "url": "assets/js/226.7c25df0a.js",
    "revision": "ec0774efa25258ab648679a782ef7ae5"
  },
  {
    "url": "assets/js/227.024c1d56.js",
    "revision": "4c4014f85dc0da7471588a2c3def792d"
  },
  {
    "url": "assets/js/228.3274c00d.js",
    "revision": "f944819b4fb98031e4764ed8a3483122"
  },
  {
    "url": "assets/js/229.2f29394c.js",
    "revision": "bf516f09db3af329533757dbb2531934"
  },
  {
    "url": "assets/js/23.ae58fc41.js",
    "revision": "f6f4e17620aa0fa43bf9515bb8113baf"
  },
  {
    "url": "assets/js/230.9b29113b.js",
    "revision": "a34e346c90ba75ed4df528ed76de87e7"
  },
  {
    "url": "assets/js/231.07806483.js",
    "revision": "a456c071dba0b96fb82b4f442a58c223"
  },
  {
    "url": "assets/js/232.bbb2e720.js",
    "revision": "392b7f8de9741620558ffa04dc3162b4"
  },
  {
    "url": "assets/js/233.73f26620.js",
    "revision": "cd250998d80c47e07d6a509bfdc2628d"
  },
  {
    "url": "assets/js/234.7ea257b0.js",
    "revision": "6cc858d834467cbd3a4dcc002cc0f3ed"
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
    "url": "assets/js/239.0b142c6e.js",
    "revision": "0ee3e44dc96dd5e3139ba876b36cd9c3"
  },
  {
    "url": "assets/js/24.a625da53.js",
    "revision": "a2c3b1d19a174fc40d1c5ad92df23e89"
  },
  {
    "url": "assets/js/240.7237233b.js",
    "revision": "ded9de5cecd32a80a44ebf936dbc26c0"
  },
  {
    "url": "assets/js/241.497e64a0.js",
    "revision": "541d21a3222183d9d3c2fc11ac8440b2"
  },
  {
    "url": "assets/js/242.a3c5eb92.js",
    "revision": "48bcec38d358505340141471e49ef412"
  },
  {
    "url": "assets/js/243.93f525e7.js",
    "revision": "3604ae0ed1293dbfb19489200b17564f"
  },
  {
    "url": "assets/js/244.0ce3bf90.js",
    "revision": "087afdcba3062ff4b0cbdc2ca480a755"
  },
  {
    "url": "assets/js/245.b958ca40.js",
    "revision": "6de48394a44d248d10d3586c8aafc886"
  },
  {
    "url": "assets/js/246.6b52ed0b.js",
    "revision": "9d5676092fdaf84bec10de3d84e50164"
  },
  {
    "url": "assets/js/247.75de535e.js",
    "revision": "0358b71646cbe2ec879e3923999fa60b"
  },
  {
    "url": "assets/js/248.a6e7b5a4.js",
    "revision": "9349686c18d0f75d7b9d4b4999514018"
  },
  {
    "url": "assets/js/249.07b9ec6e.js",
    "revision": "f50244dec5eb3058c33f4ec189b2422c"
  },
  {
    "url": "assets/js/25.44f0edb1.js",
    "revision": "d4845064c6576d575dcedadf0f95c73f"
  },
  {
    "url": "assets/js/250.c2322629.js",
    "revision": "4c4e86b6587ee80bd28b5d876678e249"
  },
  {
    "url": "assets/js/251.1893b23e.js",
    "revision": "bf33bde148c02b8d9d84c6aff26e7dba"
  },
  {
    "url": "assets/js/252.3eb6b058.js",
    "revision": "60be87b5ee47abccc84aa9c42f6a8d5b"
  },
  {
    "url": "assets/js/253.4c62dc7f.js",
    "revision": "68be930e4554fef9802d05ebe31beb1d"
  },
  {
    "url": "assets/js/254.e6cbe2f2.js",
    "revision": "ab06521999ea43bee632f3ab20b61e4f"
  },
  {
    "url": "assets/js/255.fdfa75f1.js",
    "revision": "c456d1df53e271e793b5f9bcdee87dad"
  },
  {
    "url": "assets/js/256.cecf42da.js",
    "revision": "61ab20d9ad3498fd9bb74e45ab95ecf7"
  },
  {
    "url": "assets/js/257.691a8c21.js",
    "revision": "3dfc48f7efeaa05a6d3d5537145f571a"
  },
  {
    "url": "assets/js/258.1ba999d2.js",
    "revision": "b5dfc5324f5d8654cf90936f826f9ea9"
  },
  {
    "url": "assets/js/259.4756c59a.js",
    "revision": "1942d952c190227dd04751bcb4c85316"
  },
  {
    "url": "assets/js/26.46e15054.js",
    "revision": "77e4a1cebaf16b4c2883ab2fcb58a6fc"
  },
  {
    "url": "assets/js/260.09ba7bef.js",
    "revision": "fb91479672141912d7c200dd5c08cff2"
  },
  {
    "url": "assets/js/261.b53632fa.js",
    "revision": "97adc336ae9c4285f3aaea279cc3db0e"
  },
  {
    "url": "assets/js/262.0aa45c40.js",
    "revision": "d68dc92c925b2631270d5c9ff2540c9d"
  },
  {
    "url": "assets/js/263.ac2f123c.js",
    "revision": "985d1679aaf1835568e913ed2d9c8be4"
  },
  {
    "url": "assets/js/264.b5e15c4e.js",
    "revision": "da3dd16b129103afd110c2586e8baaa8"
  },
  {
    "url": "assets/js/265.47b0db2a.js",
    "revision": "d1940b18c240de7cb3c70dfe0a5f8da5"
  },
  {
    "url": "assets/js/266.3b5348bc.js",
    "revision": "5fa16dafcca8d89eb6c32777fdce9ec0"
  },
  {
    "url": "assets/js/267.0573b4c0.js",
    "revision": "dea370523c8663ade5ab177b5e05b8b3"
  },
  {
    "url": "assets/js/268.d2f622a0.js",
    "revision": "7588582a56cc383302ae39696925f6bc"
  },
  {
    "url": "assets/js/269.62325f96.js",
    "revision": "25028f8029921c7b412dae25335473b3"
  },
  {
    "url": "assets/js/27.03044b27.js",
    "revision": "be27d4555202f40c84cf5c3a4e3234c1"
  },
  {
    "url": "assets/js/270.4e7c741c.js",
    "revision": "c0c67a7d38f3cc5477952c2d652d2ea7"
  },
  {
    "url": "assets/js/271.5a4cd6ff.js",
    "revision": "4c71d4960661548349aadf87a5d65caf"
  },
  {
    "url": "assets/js/272.02e2b753.js",
    "revision": "cdd4547bfab415541f25f883e4c161a2"
  },
  {
    "url": "assets/js/273.10ae459c.js",
    "revision": "2e6fbfe19bd59a2c39f2b757bba40286"
  },
  {
    "url": "assets/js/274.8f1dfe91.js",
    "revision": "77c3d21a2c260558e5e1d7b7a11a88f6"
  },
  {
    "url": "assets/js/275.8aa9382a.js",
    "revision": "9479022daeac2abe3ddb5f32f209183f"
  },
  {
    "url": "assets/js/276.a25fda90.js",
    "revision": "4678111fb3ef38c1b5e8ad2c05084533"
  },
  {
    "url": "assets/js/277.7a07c37f.js",
    "revision": "95d5fe350307d34fc5b2c3ae876caadf"
  },
  {
    "url": "assets/js/278.21e400bb.js",
    "revision": "836e172998e566edf47f493970bec9d8"
  },
  {
    "url": "assets/js/279.602be890.js",
    "revision": "7c1b7d0346a74cb16b809056394bc92f"
  },
  {
    "url": "assets/js/28.ca9e51b9.js",
    "revision": "0df923fc0d6cb4bcbc47a426972f16e9"
  },
  {
    "url": "assets/js/280.52330f31.js",
    "revision": "c730422f81da6936ca63985ae2b4a12a"
  },
  {
    "url": "assets/js/281.e664a535.js",
    "revision": "2099b3407cfffabc7d076c9fc43594e8"
  },
  {
    "url": "assets/js/282.566c4fdc.js",
    "revision": "5737aea20005cd8a835d701ff243581c"
  },
  {
    "url": "assets/js/283.b422ca50.js",
    "revision": "fd699a54df6e7d2ebb3e5106759855c8"
  },
  {
    "url": "assets/js/284.cf3d7ed0.js",
    "revision": "14ad0018da9ee1e6ae2a52422c69cc0d"
  },
  {
    "url": "assets/js/285.44caeb75.js",
    "revision": "8d2775e026b28d9904075eb20992c168"
  },
  {
    "url": "assets/js/286.ed0e3107.js",
    "revision": "db09c6eea3c3834da62b9ef2424188b6"
  },
  {
    "url": "assets/js/287.41428c6f.js",
    "revision": "baba76ef19696353842d71e834d8c952"
  },
  {
    "url": "assets/js/288.bddffeba.js",
    "revision": "d18ed5450ac0e49452954a304ca02a08"
  },
  {
    "url": "assets/js/289.09186210.js",
    "revision": "9c0664c8c67d19cf550462d7500d5158"
  },
  {
    "url": "assets/js/29.1205bb63.js",
    "revision": "b9d79356db05b3edbc8b54ddbb5858a9"
  },
  {
    "url": "assets/js/290.a639c569.js",
    "revision": "c4100ad5f80bce711dacdc6fbeea3f2b"
  },
  {
    "url": "assets/js/291.1ccbe14b.js",
    "revision": "af423679752cdf4def85b3fd8a49f526"
  },
  {
    "url": "assets/js/292.19b9f332.js",
    "revision": "e6b3ebb1382a1481fc79658257007aa5"
  },
  {
    "url": "assets/js/293.e0bc1e64.js",
    "revision": "5c61179f880134d6abac48abd92f5348"
  },
  {
    "url": "assets/js/294.13185b1f.js",
    "revision": "d6c0cdc0d331bd2da98f9da68fcc433e"
  },
  {
    "url": "assets/js/295.b28df6d5.js",
    "revision": "c3aaf849d50efdc20f4f29e54e04da9b"
  },
  {
    "url": "assets/js/296.b160a2cc.js",
    "revision": "5abd654bb94df29c3ec5903a314ffe36"
  },
  {
    "url": "assets/js/297.16552527.js",
    "revision": "e7f8ba87ce76f2db60696f7c30a2b0a6"
  },
  {
    "url": "assets/js/298.8d920c4b.js",
    "revision": "a1ea068a8ae3cf78b1fc91d594a364f6"
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
    "url": "assets/js/30.e781cd5b.js",
    "revision": "15631782a069b9b96e9e5c7a0f8f83f6"
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
    "url": "assets/js/302.b2d0ada5.js",
    "revision": "476a8ee6c984289b576dbb5d21c0a827"
  },
  {
    "url": "assets/js/303.b9f57b3b.js",
    "revision": "57d6790c667590f8b4f05a40ae5490e0"
  },
  {
    "url": "assets/js/304.5c6128a1.js",
    "revision": "48bab47438a2a1fa1932712152449163"
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
    "url": "assets/js/307.29f66d53.js",
    "revision": "5020da939cb1bb035921efd7fc7e10da"
  },
  {
    "url": "assets/js/308.1f218d16.js",
    "revision": "da6301967e48848b758a09e0d582cf43"
  },
  {
    "url": "assets/js/309.7f672f76.js",
    "revision": "1fd3c62247ad63d86360839888140558"
  },
  {
    "url": "assets/js/31.038eb2b7.js",
    "revision": "ac6f018cc10c412662cfb8a635cc6415"
  },
  {
    "url": "assets/js/310.dddc6d58.js",
    "revision": "2fd605e053c6c39294a0499c32890333"
  },
  {
    "url": "assets/js/311.0c2636e8.js",
    "revision": "6dcc8a5831fb90a854aed1aa9139331f"
  },
  {
    "url": "assets/js/312.80e140ac.js",
    "revision": "4633c21619cb4764e3cf18a4502b2bed"
  },
  {
    "url": "assets/js/313.6c2c4146.js",
    "revision": "15c1a7eb9e979d6d89880df9029cd657"
  },
  {
    "url": "assets/js/314.251aa771.js",
    "revision": "2400cd47a030f5492faaea901499897f"
  },
  {
    "url": "assets/js/315.579348b2.js",
    "revision": "69853f8fe06a39ff45921ccd1fdfea09"
  },
  {
    "url": "assets/js/316.891d9d16.js",
    "revision": "6a9a4367d5fe7121acffa3e41b810748"
  },
  {
    "url": "assets/js/317.274060d6.js",
    "revision": "a6a53c8e08517c3e8a85ec9ac6b92c91"
  },
  {
    "url": "assets/js/318.0b1428be.js",
    "revision": "5c4e2b1bb897b0754ccc166a7c4e52f2"
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
    "url": "assets/js/320.dac1e39b.js",
    "revision": "cbc68a0f53e37c319c41ee03aefbbb60"
  },
  {
    "url": "assets/js/321.66c5f1ab.js",
    "revision": "001ee9475ba700e53bfdc2925510083e"
  },
  {
    "url": "assets/js/322.8a56e565.js",
    "revision": "e51e12185bba81c2254f03d50753ae16"
  },
  {
    "url": "assets/js/323.4c98d25d.js",
    "revision": "2060778ddffc008c39dbe802800eabb0"
  },
  {
    "url": "assets/js/324.8221dca6.js",
    "revision": "f73c7073657a2fd84d0ec01bb287e8d5"
  },
  {
    "url": "assets/js/325.e039807f.js",
    "revision": "4509b613b6599cfc7b08e9ff87775a18"
  },
  {
    "url": "assets/js/326.3b291ebc.js",
    "revision": "63e7b51413d359bc53c5c6ad74387934"
  },
  {
    "url": "assets/js/327.bff38e95.js",
    "revision": "ec90f71bd8bfd26fa2b39522a9bffc80"
  },
  {
    "url": "assets/js/328.9b445535.js",
    "revision": "91245edfc0ff027b379bd8e12ba2d43e"
  },
  {
    "url": "assets/js/329.88c4828a.js",
    "revision": "32aa31e41c16f6fae464d234d6f2765e"
  },
  {
    "url": "assets/js/33.074d0db4.js",
    "revision": "6b7386525e30312be8d409e06f641486"
  },
  {
    "url": "assets/js/330.31cf1f41.js",
    "revision": "ddcdd9b83260d515f89221bf3e377596"
  },
  {
    "url": "assets/js/331.27e2908c.js",
    "revision": "976704f5acf6f14c366ead1250977c2c"
  },
  {
    "url": "assets/js/332.58f5e981.js",
    "revision": "654be9491309583b0dbc1066e5df7433"
  },
  {
    "url": "assets/js/333.e311b27d.js",
    "revision": "92eac82af5e6a82a0bb6a67de52b1d03"
  },
  {
    "url": "assets/js/334.bd28e867.js",
    "revision": "f2538955689e401064da23e171eb0f13"
  },
  {
    "url": "assets/js/335.127a3b14.js",
    "revision": "10dcd9ef71ee4183fb8302839d7423cb"
  },
  {
    "url": "assets/js/336.85fda637.js",
    "revision": "3216d4a7f3a08a1d1c8e684e87cbe0a8"
  },
  {
    "url": "assets/js/337.4b7e221b.js",
    "revision": "339e380e3277ea8446d788c32248169c"
  },
  {
    "url": "assets/js/338.18c81872.js",
    "revision": "7dd6af5adaa442b70d893f1a58bdf320"
  },
  {
    "url": "assets/js/339.279225b0.js",
    "revision": "a6858fc5c9fbaceb6739989a354fadf1"
  },
  {
    "url": "assets/js/34.718c5f40.js",
    "revision": "d220e12b8a2594cdc8228121f0bc97ca"
  },
  {
    "url": "assets/js/340.4542dd77.js",
    "revision": "6efd13274fbe448fbe54ff544076f01c"
  },
  {
    "url": "assets/js/341.02b83ff7.js",
    "revision": "269a65a1db6f94dbb0feac03baa6a59e"
  },
  {
    "url": "assets/js/342.41809efe.js",
    "revision": "facde363c857d0a413a36f365006a312"
  },
  {
    "url": "assets/js/343.6c5d8281.js",
    "revision": "3a794fc30225168b5d063b848f6411f2"
  },
  {
    "url": "assets/js/344.72e77962.js",
    "revision": "0f5336d79e4d9b8c0fab8dc92378168f"
  },
  {
    "url": "assets/js/345.ad4490a6.js",
    "revision": "f4e79cbe98bbfc3393606de909740485"
  },
  {
    "url": "assets/js/346.702f7c87.js",
    "revision": "86a6a4355787ee8b990cd5b228ceeb13"
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
    "url": "assets/js/35.a05359b2.js",
    "revision": "1a642edb0aa8acf2dfd599ba0e8942b9"
  },
  {
    "url": "assets/js/36.654c1ba9.js",
    "revision": "6f8859b2c2c23a7c3ec26c56f6a4e749"
  },
  {
    "url": "assets/js/37.7f153c15.js",
    "revision": "e657f26e80ff15c63b481e9e0e409bb5"
  },
  {
    "url": "assets/js/38.d2df3d8a.js",
    "revision": "913674cf4dc46923ae80b6f4027ae234"
  },
  {
    "url": "assets/js/39.82e83748.js",
    "revision": "1dd544abb08c98b49760fbd29025434f"
  },
  {
    "url": "assets/js/4.96ebe9a5.js",
    "revision": "09aadafb73721df018249b57d5a35931"
  },
  {
    "url": "assets/js/40.9c05e233.js",
    "revision": "80bd58e02a7300d167ad83f9f6ee6042"
  },
  {
    "url": "assets/js/41.eeac0331.js",
    "revision": "dcd4f73c830fe1fa2eebf4c06357410c"
  },
  {
    "url": "assets/js/42.3cf42d1c.js",
    "revision": "b267e8d0ade387aaeb6904675e1e060b"
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
    "url": "assets/js/45.311bb369.js",
    "revision": "00463acacc590e003ee7b59f0efb8e96"
  },
  {
    "url": "assets/js/46.c657f908.js",
    "revision": "698917148a40830f359ba6409b5d5a0d"
  },
  {
    "url": "assets/js/47.5a1a5de7.js",
    "revision": "924779a4ad9a5187a38c3995915782a2"
  },
  {
    "url": "assets/js/48.793b56cf.js",
    "revision": "abe40880b09e3109a5d65b050aaebcab"
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
    "url": "assets/js/50.c212b774.js",
    "revision": "dc36e90f22db880da29f271f6f7b0497"
  },
  {
    "url": "assets/js/51.a2afdce6.js",
    "revision": "1708e96ec65d94571045d526afc48666"
  },
  {
    "url": "assets/js/52.2ce7e6cc.js",
    "revision": "08e323d54478762c7eb30dc210b15239"
  },
  {
    "url": "assets/js/53.8074202a.js",
    "revision": "32b8916634fe7200153989d05c7f2586"
  },
  {
    "url": "assets/js/54.b1a23569.js",
    "revision": "956cd3f9997b1876dccbd8259ca16855"
  },
  {
    "url": "assets/js/55.d9966a92.js",
    "revision": "d67ea52aaa058316fcf3dc9c7b99c911"
  },
  {
    "url": "assets/js/56.17405085.js",
    "revision": "5ee37052fc93122b0d68ec62d7e2437a"
  },
  {
    "url": "assets/js/57.f239c6c9.js",
    "revision": "fca260d34f40bb9daac8869c5ea036ec"
  },
  {
    "url": "assets/js/58.c0a5f14a.js",
    "revision": "aca22440e1dc99a0ed6007d0c68beca1"
  },
  {
    "url": "assets/js/59.1c27708f.js",
    "revision": "31fe57498503e53403f6cace9728f2e4"
  },
  {
    "url": "assets/js/60.7eb82f77.js",
    "revision": "aa3be09f528a37dacc42baa987ead21e"
  },
  {
    "url": "assets/js/61.fde185de.js",
    "revision": "daa69b54eac870a0e9f0b52ade26a699"
  },
  {
    "url": "assets/js/62.48998424.js",
    "revision": "e09136a0b64220ab1259fea02a9a310c"
  },
  {
    "url": "assets/js/63.fba99dee.js",
    "revision": "7e330585fa9ec44b963e6bb0d35cc047"
  },
  {
    "url": "assets/js/64.35c2d6e3.js",
    "revision": "c8ede5b4a44422bfc67570b110eeaa9c"
  },
  {
    "url": "assets/js/65.f03b73a3.js",
    "revision": "794d4e02dcc655c6e15131673953476a"
  },
  {
    "url": "assets/js/66.3e9fb478.js",
    "revision": "ac0a76878ce15e82f2a3da60c998ba2e"
  },
  {
    "url": "assets/js/67.607235de.js",
    "revision": "f4c6edd70fa3504b61491baaf0e7ce11"
  },
  {
    "url": "assets/js/68.27f5a248.js",
    "revision": "2f1e217cf214b8d1e52702d3e3d50448"
  },
  {
    "url": "assets/js/69.d2b73be1.js",
    "revision": "4c6cc5f46a9672e522845bd4dcd23658"
  },
  {
    "url": "assets/js/70.618145b5.js",
    "revision": "6f9172f0eba868f9261dddc22ec46b5f"
  },
  {
    "url": "assets/js/71.900eb2a5.js",
    "revision": "af6a6045cc7a38b3a7d8365141e09d62"
  },
  {
    "url": "assets/js/72.4620883f.js",
    "revision": "a4abcb3450e70eb2fd0660e8bc46f361"
  },
  {
    "url": "assets/js/73.98762f4b.js",
    "revision": "19e4131fd4c342e277daa183f6dd4949"
  },
  {
    "url": "assets/js/74.b0b54bd0.js",
    "revision": "f013584437c47cd01bf68e169118fa9f"
  },
  {
    "url": "assets/js/75.b6f69ad2.js",
    "revision": "246f9858e4725058319a23e75b073cd3"
  },
  {
    "url": "assets/js/76.f4d1891d.js",
    "revision": "6336f08c20acca3805a51943918ad640"
  },
  {
    "url": "assets/js/77.f6790b32.js",
    "revision": "c2e25b0f5960162a642c9e4a40e417de"
  },
  {
    "url": "assets/js/78.41ebdbba.js",
    "revision": "35f4d6de90a8c7b65973b443226c5d71"
  },
  {
    "url": "assets/js/79.b1e23255.js",
    "revision": "b870949f1ef06e79dade82b5fd5e7cfc"
  },
  {
    "url": "assets/js/8.9b5e0b16.js",
    "revision": "35427c33f4194de27a770d0e7275b2dc"
  },
  {
    "url": "assets/js/80.992e00ad.js",
    "revision": "d0b5cb2f0e1ae8edbd227ddc34dd6278"
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
    "url": "assets/js/83.788cca47.js",
    "revision": "eba30c57e504bd64b5735efc14266a46"
  },
  {
    "url": "assets/js/84.30459511.js",
    "revision": "3620def35ea303f6778cd9162f80ce05"
  },
  {
    "url": "assets/js/85.2b0db08f.js",
    "revision": "68d869289ef92fba04511dc50a363452"
  },
  {
    "url": "assets/js/86.99b67c32.js",
    "revision": "6201d03808db1bfdf6383fb2979639ac"
  },
  {
    "url": "assets/js/87.ebcb51f7.js",
    "revision": "440ee7906b2c784f3dd5e1cedd389b87"
  },
  {
    "url": "assets/js/88.9fef4100.js",
    "revision": "40cd81a90b65d84dea9297e76ee1132f"
  },
  {
    "url": "assets/js/89.962fba8c.js",
    "revision": "f383313b5ff69f3ecbfcdc7323bd7ee5"
  },
  {
    "url": "assets/js/9.ca21ebf0.js",
    "revision": "06b02db61568b132733f849533aa2ab7"
  },
  {
    "url": "assets/js/90.4fb26aea.js",
    "revision": "10eae3f2be67117352740b7a3757a8c1"
  },
  {
    "url": "assets/js/91.7554b36f.js",
    "revision": "c9315903b40b1a476b4c405f1d623b78"
  },
  {
    "url": "assets/js/92.c152977d.js",
    "revision": "6926d9247921d386d8d2893f0927fd0c"
  },
  {
    "url": "assets/js/93.d77958f3.js",
    "revision": "f673d34d17812cf94f05c0eaa149e4a5"
  },
  {
    "url": "assets/js/94.3be98deb.js",
    "revision": "bfb38066eb8bf1e1238e1a95307c450e"
  },
  {
    "url": "assets/js/95.f6c03a6d.js",
    "revision": "a5371a769ad4161dd69045c73223902e"
  },
  {
    "url": "assets/js/96.d633424e.js",
    "revision": "21ec9623556ed6218d4acb460fb9bd3c"
  },
  {
    "url": "assets/js/97.eecc58b9.js",
    "revision": "0ac5a6843b5ab3ad8a2540fb898304ce"
  },
  {
    "url": "assets/js/98.0343e619.js",
    "revision": "4c20fa3d2ef4ada536169176031ab880"
  },
  {
    "url": "assets/js/99.f8cd2eea.js",
    "revision": "f288bf3bed2807a8ac0bdbef247258d1"
  },
  {
    "url": "assets/js/app.a9f2947f.js",
    "revision": "332a1a79c7f7832bd17b0215f14eb6f5"
  },
  {
    "url": "assets/js/vendors~docsearch.3ae9fad0.js",
    "revision": "e3f26cd556464fffa906a503c9cc2428"
  },
  {
    "url": "index.html",
    "revision": "a1b2196bc5911b3c29b68e624c5d4c7e"
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
