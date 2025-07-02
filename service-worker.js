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
    "revision": "7f5dfe7f30b605f7850f3286834b4fca"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "a3698a2342a9f6a44f4fcb04f27c5157"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "5c496081fc0fc1d67f467975d8bef69b"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "8fdb7a63d18a94f2af5d8b9bb49e3c52"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "ecc2bb3b4055562ac8d75bf68fa4ed57"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "e85632a2bd92f7cb2451d252427f1a3c"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "a58093ac94f048ee87858bf557f6a949"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "3a7dbaf84b4cc1d170175ecddb964bf5"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "da963cfe2e94d1ad9042913cd878a5b1"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "c9df6953d0f4594918437ef5c2b2cf5d"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "16890a1b21b92ed6c85ca4753b6a5b65"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "990809a3ae17ad7bdcb454ecac806d8e"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "6032890ecb94a173e6fea37dcb04dc9c"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "bf8c02b6462d94888b024d15e1243df1"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "4586d4d1c751773c76e9c0b0dffc15e7"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "52c3adf43987656d064abe2d38cc322f"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "2373f0a51ec95ccb0b683baf3b6b1ed1"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "23f62526b51fd3356016bd642c5a20c1"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "6e776395c20aedb4576b39cf5345f253"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "242cde7218f5c2ed4a14c6cd76ef4cd2"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "d0d645ce088de99312ab0fa09b106a4c"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "cc5ea8ca10834cd2e961a17e1b2fa1f2"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "739e36891f5eda0af77db0bf4f79b535"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "3e3d29dc85db434281439c82f52c5d96"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "1c70ec65a10b84244607a56cec641bcd"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "1df9541be37573ef8319dca46520a7ea"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "36f9df676c6dfa85eea07bfa9fc86829"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "770219bd4c2b7fbdfc11585f7edce04f"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "2a53029001961c291ca5fd23b2c8169e"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "466f68f610d5315dd88a885260ccedd0"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "2e150abca715b8c9e31b30f17377a2cc"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "4fa5de0702e5f2d158c9e2b8f3e84e43"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "b22c55e85edd13274b779bd66b63cdec"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "fcabd27e3f664d5e051127cd94cbb62a"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "431bfd9ee2aed8306f921c0c8f75c1b4"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "5a43268eadb33588e5d33cec01de5775"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "7f3c475ba6c26c1bf2cf98e34b2025a7"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "9a0a864a956c60a7c1c84dade502fdce"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "250c8fa83fea81374417fc4e3be08f8f"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "76ac678b5c422610bd57842c86361c28"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "109829cf73b5df01edb67d04fe496866"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "6c61b46d6c1bed030113be2ee118306a"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "5687748a3124c7fb928e7b459fc91043"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "4b1fbe7f9d85603f9007a80ce2d71e1b"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "c172b943620bd74ad13de2f558c82ddb"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "2351c08049bb999f5c8d1afe60c88294"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "af9484223dd8c9fa56ba469e74b57ec6"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "bcfa73761b81064ce4eddb4086068ab5"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "fd049c02dc21818a7a0c1fb2a84cf1e6"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "5d938624e1ac9e49801c01d103ddb124"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "2c85c2218f02a33111090d7ee4e5771c"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "f9661915b37fb89e5cea516ae525515d"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "9d0c373c2047fc90d5a25b5208d8fe03"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "284096f4e119c5188e8cf971f6ccadfb"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "5d9cb01f56acb7e5835e0b956b64ee22"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "604ff984d23795e521c92f4ffbd5e017"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "eee20c88d8f4590c5497c7556d6d126f"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "bcad1720213186f22f22cb399bf46a10"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "72031d45797fc08e78cd6d44fcebf3b6"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "2e08f7fcf5fa71e89bf4c9fc9550c0a1"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "92ea134dafc410faf7ea74aa29b76c93"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "691714ac4b587300d787492694eeee57"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "a15062c4c1fe5173a59cd69eb85c5c64"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "0a42923fd14fd262200d806014f8f28a"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "9299ed5523bb49135992468418de7e50"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "af5e9b84462b01d5403213a4814ef4bc"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "f9f55c75aefccbe0f305e37d7cbac13c"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "0e4a8277b27566b37dba71dac4d9d777"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "cf3e538a17082ed3ad4900c99a3ed202"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "fc7e204da1da9d13484bdfa16dc94d34"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "ef442a1aeb9d5896f185aa28e0d146d5"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "74d5b2ccf6e10ffb36b46d0168e4a901"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "1c5e56c3f83b432b6553acd9be8e197c"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "c2dd245c8b9cca4a09e2eb0f480544c5"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "963b43273f6cc54fc67ff54da237c4e5"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "0da4dcbae0ec449ff5bc2ca2ea87f46c"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "b4102008cf8452e8a0fdeafb9fd7e253"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "1c917161f3895b0be095b4f14472ae84"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "5e2a9aeac0d20a80be17032f988b6fa6"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "c77c7ae2857bc882ccba8d34af28e94a"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "94f5af92e9906ab8e3f32b1e14e440f8"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "e513b9b8f2f6487ed7e09ec1cd950978"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "d85bc9312602fcf58957029a910dc69a"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "96cd5c48395a44550b54d7ab93e146bd"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "c1d48396eb012833a5d9efae69454c33"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "3f384da7363b544ad92bdbf41a98f87d"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "60bf2aab4a97aaaefc493a59fee97920"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "6ce8ef1ffe27cc82ddec7778dc328c4f"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "5ccd40616fd43cfb90c5bfef0a55e68b"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "503af637a699ee086d106e54f4b2be2b"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "ce8e5b7544d86a319ce3922c9e7afae7"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "7b7bd24e6959a242a58f87651fd83781"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "b05ba72294344b41a3e7c21541b4b9ca"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "4699a082662f6284371298846c4c76cc"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "1048a140824d219d47e14f8108679b1e"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "2af33f48a001aa986a1a67fec562f412"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "c583a48c7c17e69512e3a842ce814a36"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "e03d23c492652aef7e3b77c94b6d5475"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "9941fee9aeeed1baca63f1c5f6274892"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "dc96d41bf4c6653bd52447d7d41198ac"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "10cdb470e39b92eeedd44c8424e3c4cf"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "589d06ccb4252b5353edf047a747cca1"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "73f60b20e15a7afe7381a7a51668ce06"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "d5a6f8539bb02391f1da5268a7ad419d"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "23d13e3a98aa0b3e77c22ad2ff874046"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "e249365d2bfddd3ad6d763c6f402d0f9"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "002515ef76eb2047703defebcf455bbe"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "f7f4ce5b94d85d63b420934db4dabd6d"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "94aa5cdee6df47901d02cc407a1d6b93"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "b205e39fbc40822af75dc26b2840af75"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "628f6d6787adc94d70a41193ce4a8ea3"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "0c1100923b2aeed38b02b83d6f2c569c"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "f55e14b684268f862fc7b6cbbb560b39"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "9c6350093922cc76782f42993d6e088a"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "72bd721c99a66a00cfb98b767976510d"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "0945d83af266f40f932c7131960eb8f0"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "e5553c27f9479e4d6843860bc86201bc"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "d132b076a4865ad8f2379cd3d1660ab3"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "b9730a37ef33aaa3b296c0a3cb1cf45d"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "4f21d4e104772d0b150ef59d47c9d3ed"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "edac8c763366b9b98beb5dc535d1aa3c"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "7903a05e4f27de24ec98e9ae203e83e2"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "41f9a7e8373c9aaed627f5edfae5610d"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "877d5bfb26a6cfc5696c3e0f1f4562c1"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "5f0dd483e5577ef8166bba5142580213"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "ff69c7c41edeb59d63d06b131b0102ed"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "a9eb7fda5658488cab82b5b672e993ff"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "9e2455e430dcb7dfc75fc1fb4823d815"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "efdfd55243b65abd78201dc8cab9dcee"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "507d0c80888c24e918b3b47225b86444"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "4e11d0f3085d646e2f161d96f7b32b99"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "4f85f7a2e55e2e966a66e1bcd2bfd0d5"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "5d82535ab1c9d11be8546ee5ec2d5580"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "0edad335a95a3a8204f2cf566c3d2d97"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "7eb287ccbfd81f39dcae7b58046e855d"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "32b633dd216e439e6f898d07069a8233"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "c75ced0a172310c9a4baa1d4e01d83e0"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "748d83c1d2bff3328afd791803ec33cb"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "1b45f538d5267036d5d2446d177c4e79"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "a21830cc30698325215ee8021a7a6d7c"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "74460492cd568a29c4dc0ea7a55783fe"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "758f1ff5bca9c458652992e0b45ecddc"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "27e6cc42a5d6e423f9bbd8dbae28f179"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "280f584045a6ed647874dbcf89b3d5c6"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "9db7272203163030578bdde49a137b57"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "6dffd26406f95b2cf3a8700fce407231"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "a3c86ab17279d3f24ef3c30cd0498a2a"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "0773900a705b5c320b0cd43f09059119"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "92feb3ec2e0da61994adf4fdf6acad33"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "b06a1d841f3ec9dbd6ee6eb58af83848"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "77cf93a2088cf7ce3926ba82be912f9d"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "3a527d000f07079fdf57a7c95c450a47"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "00101843a55c31ee290ba10b65da3848"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "dc2b35b556651487398af5ff9dbb14dc"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "2e1ea5281ff0f9846fa139c8e4fed183"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "43a2c63b911b861da79772926b2a023c"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "840cda2029f6412c837bb23f0cea0229"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "e40bba6407f442c4a4f2dee6557eda25"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "9addcae0c6bf1f18544323284f852108"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "a712726c4fc25890fb06befee49b1ce6"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "553e0de65909b2db03f95239f1e6366e"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "71ddb9bbf60da8aa9a41f48f988a76c7"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "14f4cb2d3a2b8c3af97dab4786f3320f"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "9d20065a6a25291a19ff739be01f5099"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "b7805b773617a177af39c497d99eec85"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "0268376da011716ae1cddac0e32fdb52"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "c432f4c6006832a589dc34139161d54e"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "5b1762698c66ac7068a781f84e5f94be"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "94dce22f6c70ea25c29517aa6f355025"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "3a1a1476550fc280a55c0198507ebe62"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "de31109d56cf8de95f7a9f8ef7a2ac42"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "fa5bf7675fe7eb54933d8eb3285dbe4f"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "92676540e4192cef5d89f0ce6f6efae6"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "d3407ae14f95e90b8b14edc8c76774b6"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "3de6fef01db8a69d3dedf03aaceb2410"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "c02ade65ee19c3f14b95cce5fda9b962"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "b8a6e2d299a5d7590ec98311197846d9"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "790304600e47631ed1a3d467da48f870"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "c0a4fff7e1d95497a18f0868feed7616"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "e880abe40ef577d982401b3feb8d7d31"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "3254bb306127b9e657753872e099e3f7"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "f1287104158859d5c2c1a7ade9614a6d"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "b1ec5cad05284aecaf39a8ade87b9a3b"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "ee4d4e1f85adb0f5ff36475ff48e34c3"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "660e152d22d007f55e40bf3a4bf7c48c"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "15177b60660af8a184d9939f54c44e94"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "2b6b0f4dd9497683b7edd8a3436e10df"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "cab177c97f53b2f3675dec51a111f249"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "1d6668d1bc51ac0185d79f7bd218dcdf"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "602e2960aceeffefde70986c6e9101a6"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "b0b2bea854d54c5a432051694deb60b4"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "f2161c7199aca4a5d17b0885eed029e2"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "cfa09ff239c5f1cadd95380a669d65b0"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "07d3d84d99e17fb0955efeb46d744dce"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "0364def1fbb7db971a050eefaf4aeeb0"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "08aefdeb10ab357e7ea120bd3c5cf64c"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "7e6321768fe18136f235b634d072fcb6"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "fe05c78d8497f00d3055c20de31746b6"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "9df088ea27604d6097bda1acab23b2f8"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "ad0a441b59abd446323c0bd534772e23"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "0b75c067e14896557fe2c9b58a486604"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "535b9fef85ae07f04055418484d7ad3e"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "7f9dbadf7b962a8b66464f150592e050"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "e855870983e9e8f89bf4b80c11be4639"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "66bb22b502d16c8379ba41fae71bfa68"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "cadf9998652da2867124c1f2a38a73ea"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "1fc251cad305c5ebde808b19a0dc63fa"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "ea88b9f9ed0105fb08674a9d402d1730"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "48277acacbfba6e254bc324c00f7b4fa"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "a533962703fe0cb9832db23e5cc8336e"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "e581c750dadf62aeca156bf3522f6950"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "78347a6d75b7980d26748947ce9537a0"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "d9bbcd037bb4f30bf9a64434280bc5bf"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "5dbbef3a374ac722f087639ef16c777f"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "790c988d5eacf4689f26f53670c056c1"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "cf9889c4acd786c6c7bdc4e8fd7795ca"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "b8c2b61b4619c2b6d38a8fdb561487a5"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "7a575062b0131b970b95a299c256db60"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "52885834f56b4f98100ebe63c8eb3544"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "1adf8f65133fa9667aee4732b9e2631e"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "2fcf8a17d07293965127c15899bc0779"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "a6316720078833c3aaff4626b4e9e9af"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "3e285991023668a2f9890298820f1a7d"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "6667e5c0445013908dbf98bb2bd23b7a"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "c11ecdff683f4e690699fc473d1ec114"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "5fd9c724e108f7ea2be10b87cb248906"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "1a5ff5ebd757236b33f9ceba7845f1ee"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "5d34dba5cc7cffb235db26ca971fd57c"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "45d3bfd913e50a535f2a995fad65877e"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "0c0438ed83642114975888b666473101"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "ecce2e7c2c310147ab4223ab5e4979c0"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "d4107ec6cfa6ff2a44269231e38606b1"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "8db297f0e787b5821ccd236e8a21fb0f"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "ed5bdeb42c3743bdfa35989ea83f924a"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "ee2d896c0e6e3c2a3e6812cb265b47e1"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "fe18efe04d264f6f5389bdd2f5493b6d"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "717079db51b28f2a4437a0c52ac28af7"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "36840be0d69b4222e89c58d6e36f89ed"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "875bdbffc840b81d9764621c6fddc747"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "577337ca2bf808fc6463f3ebd69cca2c"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "70ab0913565676cc72497418b0c9acf2"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "d2cae29d62acdee88d46918c3e0f0bd9"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "76a792287f758e959d03634e30d3fb18"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "84ff4f92e694c86bf614f0f0ab78dcfe"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "7cc117154bbfe7c567c01b488cf7022c"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "bfe2ef4a350c1cf5113ecaf38d6e351a"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "46a463db0a4a925af40b97d4c462d997"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "3028593ec7ed62f0b84d923602e5836b"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "263e15fcae51bb29a60db1850f84a7fd"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "88ef4a929c9e9440ad858e86b9850ba2"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "8323b6a1fba55a25ab81fb17a2e50d03"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "b1e5be78ee55509891d776fa0d3b9cf1"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "3f0cc4ce74a79520a1ca9a7e28b6e54b"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "0f5e39020af9c79c87f765a922a85d5a"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "9b0645d010f12e9fa1512fa5105b9c60"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "3c9123626690edb8c019995cf138a117"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "98fe63e7749c88d97f87e89c547db1f1"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "3d1862e0ce4957b357b7788bb04c4336"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "77aabf2475706f09e81ced7aba21d73c"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "d026e5df85e57aa5e3cff23c309e9b8c"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "00cc0649e29660abe4eb4e0b79e7ca51"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "959598e7c6727ce9bf73f20ffa9de97a"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "39c153ac4f321917b0ca327a91397e78"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "31591e147054d91e6ea15217d32642dd"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "356b8495256fe8646077481c711c771d"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "12e2db52df651334452b7f4a1433885e"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "83bdb6d0beacce75398b75b566755eb5"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "95b075711e04c6b6e2b1f48e40a74e8d"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "8450eef473724ce74e044d43933ee600"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "36991b62cc85469d9df21ecb43625aa4"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "eabd26eadb4e0f0ecb134b30435fa56d"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "b36cd895734f9ce86a1f57ab4a1bafc8"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "4d0b3b72e1570f9f0ffa9bcd1a8ba732"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "3198c955d9b4fb8f3df5d79eb4c09cf4"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "2632950b662ead62b691b87e83baf857"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "6388201418dcb922b90e3871b354828d"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "a2943ee1aa53e721075df87cb9e4adf8"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "a008d98b3579d42cd938fb9d3f4ea11b"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "793736b1a2b06fff3449f5da54ccb066"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "1ce6403ec22f509b4ab38feffa3b7163"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "40218e8458406e64df8f2bf962cb10a8"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "a79b52f646845c30d7638932085554f3"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "5da941d61f42a43734ef0d7df9144ef8"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "6570cb4c09899a6fb6b3fc2c56b9f56a"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "1d505f71821617115c6e34d6e671609e"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "e55605ce23cecfa0ae972fd85f8fbbe6"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "ff4fa556faedae07bae120386ecde1ca"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "9a0d773f99fa80aa6a13b01f53f54d83"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "0a7c419591bca7f04a24ec8ce8890f04"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "091ce7999211130428fad0e959cab0a6"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "7c0ad617167391ec91ea8e0418419af9"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "b52dd97759f39df06121515389a2d067"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "edbb5b49a75f5d5e9890f6d8a5f5eb7c"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "d343a8e3f28c21de67fac55329d4af5f"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "b45dd3e7f4903f571a7f1d0a56be9e83"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "8a5279ce2af5b29a33da7192bb9b3dbe"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "d09612fdf5c2251d0e6218f4a841e812"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "7e9c4105275c92ac4f8f7ee1356e5103"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "a19819e975d05fb30f5cbb0508141b90"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "dc40f0bfeb761d66d52d7ba38da1b0db"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "4dba26f4acd63d8f778427f9d41a847f"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "023013efb8638e4bbe927c8def7172af"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "a40d90d0ee22656d1c013586269672fa"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "5f888a03617727951cec9f5564f107a1"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "65d31711ba96779f9a2cfe155bb7dba6"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "0c72da509507fc4dc67ced1ce2e95e35"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "74e5343bd515a35886f07eab932a68ab"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "58b7eea941a5ad36ca01e450bf3bed0e"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "5b1688fcb9d35d6f711ad5c36b4ec0e3"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "33430d5822f7f53e1462be69de1bff20"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "20c35e9378e94252783b64ff54eb1d2f"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "d9b7395b8c8522d98c7a335c90332126"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "65d282fc9096328081cea8f1acfe5664"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "f479752f636a0d807478341bb6f39627"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "39441fd1eb3115099c1e1ed409bb8994"
  },
  {
    "url": "404.html",
    "revision": "d05f13c71bd9899aba8cf7a4abcaeb5a"
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
    "url": "assets/img/abandoned-cart.40d28282.png",
    "revision": "40d282829a330c99a715eed34402753b"
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
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.ec4705dd.js",
    "revision": "587f5cf7ebf7b0c4875586a396f2670a"
  },
  {
    "url": "assets/js/10.769e2378.js",
    "revision": "192cd6c3d284c0dd6512673562540929"
  },
  {
    "url": "assets/js/100.38cf2634.js",
    "revision": "d3dde2bb376ac1912e534a4fd6e8f7a5"
  },
  {
    "url": "assets/js/101.60b72cc7.js",
    "revision": "b15fae403ba12f902d2696767e334fef"
  },
  {
    "url": "assets/js/102.84212eb1.js",
    "revision": "bdbc8b3c9b30d82d063c95a10ae924fe"
  },
  {
    "url": "assets/js/103.2c59dd54.js",
    "revision": "bbcff1c6c3c485cab03f01a1bb241b87"
  },
  {
    "url": "assets/js/104.35c7a02a.js",
    "revision": "b6d42116c0bef848027beff01dc2585a"
  },
  {
    "url": "assets/js/105.e08be4b6.js",
    "revision": "c3b872343844d5078a2db2d43729759d"
  },
  {
    "url": "assets/js/106.d2802ecd.js",
    "revision": "6cbcd19f8b115c74ef7a4c176b474c3d"
  },
  {
    "url": "assets/js/107.80f715af.js",
    "revision": "317812ebf8c73e7d0b19127fde658995"
  },
  {
    "url": "assets/js/108.ad83daee.js",
    "revision": "bac9dcee89196d4075a21d156411f036"
  },
  {
    "url": "assets/js/109.3c7b26bf.js",
    "revision": "335f3a18524165b2d7207fcd6c9a56c9"
  },
  {
    "url": "assets/js/11.c26db029.js",
    "revision": "175e70617e6bb9ca59eff6ecf2c3659f"
  },
  {
    "url": "assets/js/110.524699e2.js",
    "revision": "48d0fee690daed7a690c896277908c1e"
  },
  {
    "url": "assets/js/111.23641e3f.js",
    "revision": "fb302b37e20f8554a5772e1fcec531d8"
  },
  {
    "url": "assets/js/112.98d3d703.js",
    "revision": "69ec90f7e623de65ec20c1c9b527c1c2"
  },
  {
    "url": "assets/js/113.d43434b8.js",
    "revision": "d61b9b702e390d60ebba0ae0740ba597"
  },
  {
    "url": "assets/js/114.c2eb223e.js",
    "revision": "d249f9b4192a72524879123958262fa2"
  },
  {
    "url": "assets/js/115.1e18f258.js",
    "revision": "a70004f625885da42b4c4adfdaa66a4a"
  },
  {
    "url": "assets/js/116.a037811e.js",
    "revision": "f078834ace179bdc4c05a282ce7a8fe2"
  },
  {
    "url": "assets/js/117.2fe3498b.js",
    "revision": "c2cc81f96d75e031e464d87a9afa9c9b"
  },
  {
    "url": "assets/js/118.bca4b09d.js",
    "revision": "49793d8cfc29801fb6b5421f7124bc59"
  },
  {
    "url": "assets/js/119.131f9b9a.js",
    "revision": "2d488caecb4d19f92a6f33288c47f80c"
  },
  {
    "url": "assets/js/12.ed549e3b.js",
    "revision": "bdf9e778bac36be4550f591b7744e974"
  },
  {
    "url": "assets/js/120.19cbae81.js",
    "revision": "6ceffad9f4a5a7754b0296ce931ce94d"
  },
  {
    "url": "assets/js/121.d6882e2d.js",
    "revision": "15189997258eb4f46b539fed9bc768dd"
  },
  {
    "url": "assets/js/122.4cddb4dc.js",
    "revision": "fcc1af6e0a6b6239bd9a3b64f9e1b045"
  },
  {
    "url": "assets/js/123.65ad4348.js",
    "revision": "75c37ec6b9f4ac65bfd85e6cdd647640"
  },
  {
    "url": "assets/js/124.c9d29d26.js",
    "revision": "5ccbcde592788a343ec27a31d95e7210"
  },
  {
    "url": "assets/js/125.99132908.js",
    "revision": "380e533f5e93e89699fc951a8f52c096"
  },
  {
    "url": "assets/js/126.5b0d97cf.js",
    "revision": "353e4d165ab852d43afbb902ae00dae2"
  },
  {
    "url": "assets/js/127.c09b7fc4.js",
    "revision": "92b940f0a4fbaa7f2c094047febd5959"
  },
  {
    "url": "assets/js/128.0bb8b7f4.js",
    "revision": "feb4da00b72b7a627188b118dc8a5841"
  },
  {
    "url": "assets/js/129.4a00ce88.js",
    "revision": "5df214de6f712994d4599239a0bd46e3"
  },
  {
    "url": "assets/js/13.5bd2978c.js",
    "revision": "262b51c1584c3a3877ef087cdf44f10e"
  },
  {
    "url": "assets/js/130.9da42616.js",
    "revision": "270f3373196586303fa74e50dfa05251"
  },
  {
    "url": "assets/js/131.bbeb7e42.js",
    "revision": "90aef70e3501efb84ed9b6b3a2b6ddaa"
  },
  {
    "url": "assets/js/132.0fa184ba.js",
    "revision": "db8e08f24d7bd27996723ccb9dc8adb4"
  },
  {
    "url": "assets/js/133.bd42519e.js",
    "revision": "d2a6fcfb8f2eccfe738743c1efec8107"
  },
  {
    "url": "assets/js/134.5ec2e260.js",
    "revision": "c69d99a29b674be3bca07c3ff65919ac"
  },
  {
    "url": "assets/js/135.de73f2c1.js",
    "revision": "7598d64ce8b1b24956f3761871273792"
  },
  {
    "url": "assets/js/136.ec9f287e.js",
    "revision": "1c71b44a93715eb2b44381b6dc141f41"
  },
  {
    "url": "assets/js/137.ce47b3b8.js",
    "revision": "d30d6dae0783980894416a6b7f0f3ccf"
  },
  {
    "url": "assets/js/138.efbf1b2a.js",
    "revision": "014ee6f52219ab0c9bd37727b19059a8"
  },
  {
    "url": "assets/js/139.55d5bd14.js",
    "revision": "bd44601e481f2c1a73bda16f22e34f54"
  },
  {
    "url": "assets/js/14.dd9982c7.js",
    "revision": "c64accf8f90ca2d7b5bdfb8a3ea791ca"
  },
  {
    "url": "assets/js/140.d74c7184.js",
    "revision": "b002cae771627ea9480057e7a234d45f"
  },
  {
    "url": "assets/js/141.3307e269.js",
    "revision": "c4270efd9ff2b4cf1876452d92193cbe"
  },
  {
    "url": "assets/js/142.e86e0314.js",
    "revision": "d9695cba9bfea2b788e07e4c5e4ff63a"
  },
  {
    "url": "assets/js/143.c61a71cd.js",
    "revision": "0657513f9d7e6083c1ca6a0a74b17431"
  },
  {
    "url": "assets/js/144.78a61881.js",
    "revision": "05caebad29a3c5830b2f3a682768565d"
  },
  {
    "url": "assets/js/145.b0b35b2e.js",
    "revision": "36398f27dfa25270dc274daca3e50faa"
  },
  {
    "url": "assets/js/146.c1525bd6.js",
    "revision": "e7b98fb1808d09b6cc95cf3d31079c87"
  },
  {
    "url": "assets/js/147.4af328b1.js",
    "revision": "d524607d89629e72e3af706e82007e79"
  },
  {
    "url": "assets/js/148.80097c24.js",
    "revision": "2c4cd2d4808e9038bc3d2d682fc01601"
  },
  {
    "url": "assets/js/149.c91a5155.js",
    "revision": "a7a0e3607cd7dbeba4389f7d206c8223"
  },
  {
    "url": "assets/js/15.9e916c1d.js",
    "revision": "91837d3a2978048d99c4611533f1245a"
  },
  {
    "url": "assets/js/150.489dad75.js",
    "revision": "cac1b87d9820e960fc35686c81ccfac9"
  },
  {
    "url": "assets/js/151.9cdb33c2.js",
    "revision": "33835b14204b7f418eaebfc195c85d7b"
  },
  {
    "url": "assets/js/152.2cf73118.js",
    "revision": "36a66c2dd428066eba1b450845fff236"
  },
  {
    "url": "assets/js/153.b6c0530a.js",
    "revision": "8dcddc946167da8558ca3e8cbfcdba89"
  },
  {
    "url": "assets/js/154.5e3e37c7.js",
    "revision": "9ddf8a118610e361bfabfecdc3407523"
  },
  {
    "url": "assets/js/155.07d4c5c7.js",
    "revision": "0145f83b780999a3ba68dbb0b7470e15"
  },
  {
    "url": "assets/js/156.02561db1.js",
    "revision": "cce6bd18da83df1babdef892e49ded21"
  },
  {
    "url": "assets/js/157.d076109f.js",
    "revision": "fbef30fc164ac951e69883f55a67de05"
  },
  {
    "url": "assets/js/158.e6cd2982.js",
    "revision": "3e33b38b6dae93b34fae87d73d99c552"
  },
  {
    "url": "assets/js/159.b67b9cf5.js",
    "revision": "0b38055fc0319dba23d225ed1d40eafd"
  },
  {
    "url": "assets/js/16.190a5dd1.js",
    "revision": "ae6f8001c8a90a6a155d4be47b0a3986"
  },
  {
    "url": "assets/js/160.0bcfc94d.js",
    "revision": "0a9b07bde4c9c4cf75829c89bd59c9cf"
  },
  {
    "url": "assets/js/161.2c87546f.js",
    "revision": "ada3d97c91017f3a7cbb879f325742f5"
  },
  {
    "url": "assets/js/162.e715f59c.js",
    "revision": "c3b4757479ef59aa182e1b66087519d3"
  },
  {
    "url": "assets/js/163.74511b59.js",
    "revision": "ce3f2f1abf6602478e412b82e211776d"
  },
  {
    "url": "assets/js/164.a4aa5d8c.js",
    "revision": "fec82bce99467ff080566dacf6455801"
  },
  {
    "url": "assets/js/165.04f5fe3d.js",
    "revision": "ae967321f640cae6041e389e6870984c"
  },
  {
    "url": "assets/js/166.892cb70d.js",
    "revision": "87ff314506c113dcaf79d6ef1d6ee022"
  },
  {
    "url": "assets/js/167.03de6a28.js",
    "revision": "fcea4ab8834513e127306e112912a95a"
  },
  {
    "url": "assets/js/168.49541ab3.js",
    "revision": "05c5a9bd9b6391a5fb6459f8f03b8262"
  },
  {
    "url": "assets/js/169.05eb0671.js",
    "revision": "96e17f4fc71ea75bf2e0150147b8e68b"
  },
  {
    "url": "assets/js/17.79de0a86.js",
    "revision": "72d563ea70454d02d15077134b3d2175"
  },
  {
    "url": "assets/js/170.5805a193.js",
    "revision": "ea309ea486c70f7bf26c5dc56fd00b2b"
  },
  {
    "url": "assets/js/171.a0ce0477.js",
    "revision": "f5872b4ef9ea518ebd8bab0412d593a2"
  },
  {
    "url": "assets/js/172.c6b7d202.js",
    "revision": "aff3a64743852a52956dd035a6718071"
  },
  {
    "url": "assets/js/173.b7ece34f.js",
    "revision": "a76396082e9182c40214096bd0dec753"
  },
  {
    "url": "assets/js/174.ffdc5db8.js",
    "revision": "2d6fdfa92b9c272ee569d486bfd56539"
  },
  {
    "url": "assets/js/175.f2732b79.js",
    "revision": "406d3ea66f2e6da49d75995204e3bc29"
  },
  {
    "url": "assets/js/176.8fb52dfd.js",
    "revision": "979a0e082990f8ff5e961f34790b4936"
  },
  {
    "url": "assets/js/177.ebdba2a4.js",
    "revision": "2524b02437d380aa5a22629e16d1af70"
  },
  {
    "url": "assets/js/178.f98e3842.js",
    "revision": "55a7cda2978a12b541d7f23a153789a7"
  },
  {
    "url": "assets/js/179.595116c4.js",
    "revision": "58c6814c7c751db13d11374db101c29e"
  },
  {
    "url": "assets/js/18.7f839a3c.js",
    "revision": "c637f3eaf39f6994984dd94805b2a684"
  },
  {
    "url": "assets/js/180.e59496cf.js",
    "revision": "ef1223fdc14c9e7e039ebb556d4d6d67"
  },
  {
    "url": "assets/js/181.7f285a30.js",
    "revision": "98be900189206d9e1bd5ff8551cf5402"
  },
  {
    "url": "assets/js/182.b552f21d.js",
    "revision": "9a7f605b04aa340360dcccd78079f1b4"
  },
  {
    "url": "assets/js/183.8bd11868.js",
    "revision": "f78998526a1d4c49be9a859f84dadabd"
  },
  {
    "url": "assets/js/184.a67c93fc.js",
    "revision": "e6809965842aa18ec1600f6a40c12e37"
  },
  {
    "url": "assets/js/185.222acf40.js",
    "revision": "f31b5c6eb339428cbb4546a91cc9c89b"
  },
  {
    "url": "assets/js/186.aa876f8b.js",
    "revision": "5dde30ffb7e330c806d069a68ee3f49f"
  },
  {
    "url": "assets/js/187.6d35dc2c.js",
    "revision": "3d1d1591361efd6ca6e577721d4f836b"
  },
  {
    "url": "assets/js/188.202f9ff5.js",
    "revision": "325947c03d47eee748c1353e3d8732be"
  },
  {
    "url": "assets/js/189.77587fa2.js",
    "revision": "b54ee29e3c85f68f9d52ff2d4da91843"
  },
  {
    "url": "assets/js/19.aefbc04e.js",
    "revision": "451e88e00332b74d21290fda5454a051"
  },
  {
    "url": "assets/js/190.9e98b30d.js",
    "revision": "e29db5f4f62f1fafeaa0b2a0a3615bdd"
  },
  {
    "url": "assets/js/191.02feedfb.js",
    "revision": "ab4bfed478586ecbe58820f0625dcffe"
  },
  {
    "url": "assets/js/192.ffbfddbf.js",
    "revision": "063afe56eb38e37c55b1803ab1ab34ff"
  },
  {
    "url": "assets/js/193.b60a18c5.js",
    "revision": "f5ab853c7d04e0576a46dd2a1362dcae"
  },
  {
    "url": "assets/js/194.5adb9529.js",
    "revision": "6c3349ce98ff032280b0f4a01caefd97"
  },
  {
    "url": "assets/js/195.dddd6f33.js",
    "revision": "85bba1f70fc8aaa8e985077ce65f60fa"
  },
  {
    "url": "assets/js/196.8e031ab7.js",
    "revision": "ae9d2c151dbbaf66528f054eefd08ef2"
  },
  {
    "url": "assets/js/197.d2d47bbb.js",
    "revision": "666fff5e5517e1e0bd037942ad41cf37"
  },
  {
    "url": "assets/js/198.16b40e7a.js",
    "revision": "ffb0499712aa51275aa43208c4cb6ea6"
  },
  {
    "url": "assets/js/199.ebf28735.js",
    "revision": "a6df15dc225ae0972cb24b3aa2cdfd45"
  },
  {
    "url": "assets/js/2.385ad265.js",
    "revision": "a9dd2e337aa427fa68ee1d3fccef04e9"
  },
  {
    "url": "assets/js/20.78ff456a.js",
    "revision": "25b6414b8d6262a56d38144791bf8459"
  },
  {
    "url": "assets/js/200.eb3ece4a.js",
    "revision": "e41c345f59fcd96cf85397ad56b6654c"
  },
  {
    "url": "assets/js/201.86990585.js",
    "revision": "0118a658d8afa600dbe395a060178d53"
  },
  {
    "url": "assets/js/202.70c9bf26.js",
    "revision": "128c79ce7c44b1713a3a69541dad9fff"
  },
  {
    "url": "assets/js/203.a83f08ca.js",
    "revision": "603a01f4d12a8065420b710b9cd9e6dd"
  },
  {
    "url": "assets/js/204.7ce415e7.js",
    "revision": "735a3fa4c594e799fd788ed5b0d1a0dc"
  },
  {
    "url": "assets/js/205.8a09b986.js",
    "revision": "a31cfa9aa3a0e373372efdb4043d5f5a"
  },
  {
    "url": "assets/js/206.34bbc9d6.js",
    "revision": "b6d217a90e7f3867282e19e26b50170c"
  },
  {
    "url": "assets/js/207.a0e0ab48.js",
    "revision": "4392ffc8123c047a463d450e233986c3"
  },
  {
    "url": "assets/js/208.296950e6.js",
    "revision": "c15bd9c5242659f6baddb2517d30199e"
  },
  {
    "url": "assets/js/209.d8e41ba8.js",
    "revision": "50fbe6e0e5431656e365f5c15accfc5b"
  },
  {
    "url": "assets/js/21.486146a6.js",
    "revision": "98f1ac1ff5abe247c2211b3bbe0bddb7"
  },
  {
    "url": "assets/js/210.b46120af.js",
    "revision": "1cdfce76e063e87465bcbb94c8c77bd8"
  },
  {
    "url": "assets/js/211.a09e988a.js",
    "revision": "fc9c729065e7e452c37d2b4033626337"
  },
  {
    "url": "assets/js/212.ebff1366.js",
    "revision": "66f328644db7c917b4e3d3e682314a46"
  },
  {
    "url": "assets/js/213.bf20048c.js",
    "revision": "6cb536953eb73a4b026aa0cf33effc8d"
  },
  {
    "url": "assets/js/214.6a74fac0.js",
    "revision": "6b0025b5e6fffb51aa0a2b2a802942ca"
  },
  {
    "url": "assets/js/215.e8dfc64b.js",
    "revision": "9018da622c93c994e1bd22b82f29672b"
  },
  {
    "url": "assets/js/216.014eeff9.js",
    "revision": "4203a89224b09c5a50af614a7740aaf9"
  },
  {
    "url": "assets/js/217.810be9c7.js",
    "revision": "4c688178015986487b6952da918c35b5"
  },
  {
    "url": "assets/js/218.b73dded3.js",
    "revision": "f884d3e9a485807a6790c55e68380f39"
  },
  {
    "url": "assets/js/219.5ca69db3.js",
    "revision": "0daaccfb82b3b102e6eabdcb5c533e0b"
  },
  {
    "url": "assets/js/22.c679bda9.js",
    "revision": "87ab4ecb19cd5a6ae1d043f194f311d7"
  },
  {
    "url": "assets/js/220.8020a65e.js",
    "revision": "f5b8720eaaaa21c7adca08fa09d471f6"
  },
  {
    "url": "assets/js/221.6a21ea16.js",
    "revision": "afdd9bf1f87bd462ff9cb2d8eb498e2b"
  },
  {
    "url": "assets/js/222.062b9d98.js",
    "revision": "2d1aac0464818af905af9f7e9b58d71c"
  },
  {
    "url": "assets/js/223.baa51af5.js",
    "revision": "b4a248d59c521cd5dd867b6909684582"
  },
  {
    "url": "assets/js/224.1aeb025e.js",
    "revision": "b0c26f3b13e3ec4b0e72e4d5dff9375c"
  },
  {
    "url": "assets/js/225.19f3b571.js",
    "revision": "ac77073c18dd4b3098532d592a6a78d7"
  },
  {
    "url": "assets/js/226.1bfe8fa0.js",
    "revision": "5751d4aa0f81d12fd6f79c5ba4fda95b"
  },
  {
    "url": "assets/js/227.d0ced2c0.js",
    "revision": "9651c03df5ceb419ebe3f31e9e675dfe"
  },
  {
    "url": "assets/js/228.c5ceafe9.js",
    "revision": "bf16569c0d9b1e86dce8b9997cc8790a"
  },
  {
    "url": "assets/js/229.044455bf.js",
    "revision": "5e8a20fe6b59f9f13ed2b5b971928ea2"
  },
  {
    "url": "assets/js/23.c36d9116.js",
    "revision": "47d04553730fb68110f4aeef494b9565"
  },
  {
    "url": "assets/js/230.14779fa1.js",
    "revision": "dfaa9533c4f1a3be3a6cc7379ddbc1a7"
  },
  {
    "url": "assets/js/231.06778606.js",
    "revision": "c584617c28a8e97fc5605ffdbccd7140"
  },
  {
    "url": "assets/js/232.a7c9d56b.js",
    "revision": "572dcfd79fdd68b4c0fb4162b064a512"
  },
  {
    "url": "assets/js/233.5c0bc026.js",
    "revision": "7d8581cf131fc2e14b3f3f12c20b13a7"
  },
  {
    "url": "assets/js/234.9e1efdb1.js",
    "revision": "2b83bb2deaab492b0813a75586a91410"
  },
  {
    "url": "assets/js/235.3bb8705f.js",
    "revision": "06237ede4de38d51366f8a03cd73b224"
  },
  {
    "url": "assets/js/236.8f6a5eea.js",
    "revision": "63bbfe3a72efc9f6766297af6381f03a"
  },
  {
    "url": "assets/js/237.4a57e65d.js",
    "revision": "f4868779869a7b59f62dc03f7dba3ee0"
  },
  {
    "url": "assets/js/238.fd9bccfe.js",
    "revision": "2274d9a6b3c6316608f6491bd717c505"
  },
  {
    "url": "assets/js/239.6366f646.js",
    "revision": "6a7bd1f4694d2963172446be82826ced"
  },
  {
    "url": "assets/js/24.2323048b.js",
    "revision": "206a47352b05568327b607e7631985ed"
  },
  {
    "url": "assets/js/240.7f31f21e.js",
    "revision": "57c49b76aed661226b7e2dd70a202215"
  },
  {
    "url": "assets/js/241.8e9c3917.js",
    "revision": "7b45fc797c40517c8bb0be1f1c160597"
  },
  {
    "url": "assets/js/242.793f8c55.js",
    "revision": "9ea59b4b66000568d3d4eaaa29e608f3"
  },
  {
    "url": "assets/js/243.4f10f771.js",
    "revision": "f503dfb68cf41cd6399d56c97c40b22f"
  },
  {
    "url": "assets/js/244.a3826320.js",
    "revision": "626c119c8c526e50c60e96d23fc436c6"
  },
  {
    "url": "assets/js/245.c64e1a61.js",
    "revision": "98576518c5b545fd2ccf5206e380d1fa"
  },
  {
    "url": "assets/js/246.bb6fa7b9.js",
    "revision": "7cc7b1ca6d0cf05a2729c9a9c5162313"
  },
  {
    "url": "assets/js/247.8cb10bb9.js",
    "revision": "c3902ec64bf0ea3317ade52f45a7a7f9"
  },
  {
    "url": "assets/js/248.d9936d3a.js",
    "revision": "0deae215e1c19d380dccbb918f083efd"
  },
  {
    "url": "assets/js/249.667b4cbb.js",
    "revision": "4405331fdabbcb042644669fb44cfb81"
  },
  {
    "url": "assets/js/25.9c13d740.js",
    "revision": "de495e3f7424086421f7dde81e6fe099"
  },
  {
    "url": "assets/js/250.7d64b2e4.js",
    "revision": "52ccacd16f9b08274918ec2486d1dc74"
  },
  {
    "url": "assets/js/251.4904fc54.js",
    "revision": "fce4dfe70674aa96c1261b5c9f623020"
  },
  {
    "url": "assets/js/252.4ed78893.js",
    "revision": "990836f6efe26183e65274f07e322224"
  },
  {
    "url": "assets/js/253.06c4fda8.js",
    "revision": "f073c10f6a9a0ef7b5a29df72bc586bf"
  },
  {
    "url": "assets/js/254.a571a4d0.js",
    "revision": "c23c3e923b50db877938c2bfce13a91e"
  },
  {
    "url": "assets/js/255.5b7075b3.js",
    "revision": "4a8167626bd898e5495ae6d4236d2e90"
  },
  {
    "url": "assets/js/256.68175fbf.js",
    "revision": "31e57d7dd02288f59b1e919c886a9eae"
  },
  {
    "url": "assets/js/257.5fbe7cf7.js",
    "revision": "e9ae94838ae8f420ae69b2fc2fe634e0"
  },
  {
    "url": "assets/js/258.d13eec5e.js",
    "revision": "b9b1848fbf655b3fb543f8239a82ed6f"
  },
  {
    "url": "assets/js/259.43461db7.js",
    "revision": "0b7df72ea702bb95f1777c0b5d696172"
  },
  {
    "url": "assets/js/26.df0848ab.js",
    "revision": "0a0a246c4ed90e6102b43cac8003e68f"
  },
  {
    "url": "assets/js/260.afc0360d.js",
    "revision": "3d39d128e0d75be3f6fb53b7cd3d01f8"
  },
  {
    "url": "assets/js/261.d1d2b00d.js",
    "revision": "ed110562fe84ddcb5f0f0838dbddac8c"
  },
  {
    "url": "assets/js/262.824f8f4d.js",
    "revision": "b89ca2c7d33bcc35cfefc351c2529166"
  },
  {
    "url": "assets/js/263.98718e4d.js",
    "revision": "35319818e8262cbada800fc33f60625b"
  },
  {
    "url": "assets/js/264.173f7c49.js",
    "revision": "2b048a84695d5adeefe9c5111eeaf875"
  },
  {
    "url": "assets/js/265.168576a2.js",
    "revision": "068a67e96cb73dcb12c87028dcddac14"
  },
  {
    "url": "assets/js/266.abf10a53.js",
    "revision": "3ce2262c687a59cfe737f6ac794d00bf"
  },
  {
    "url": "assets/js/267.0edbf592.js",
    "revision": "6ec26107629cc3b4a0f07e6eb4d61be9"
  },
  {
    "url": "assets/js/268.182537f8.js",
    "revision": "ba751547746053d14b22430e27d73ee9"
  },
  {
    "url": "assets/js/269.12d6d4a0.js",
    "revision": "2fbbea83c94c7ecee19a8569ab83a1e5"
  },
  {
    "url": "assets/js/27.29661fd8.js",
    "revision": "aee32b585b2efae47a7670e6f54d4e43"
  },
  {
    "url": "assets/js/270.6ce843d9.js",
    "revision": "700fe3f3e1218525b5710bcdc565b79d"
  },
  {
    "url": "assets/js/271.efc4056e.js",
    "revision": "e186ffd879b8c43cf3730fb281261ddf"
  },
  {
    "url": "assets/js/272.7293603e.js",
    "revision": "09f1881eff4683a2aa22ce4a31eef60d"
  },
  {
    "url": "assets/js/273.a191f165.js",
    "revision": "b1c90ba74cddfa35c38947558e34970e"
  },
  {
    "url": "assets/js/274.a21a40b9.js",
    "revision": "3e61469a86eae5008128afb3375fed40"
  },
  {
    "url": "assets/js/275.437d2632.js",
    "revision": "d6cdd65ac2056046a195a8243f3659c5"
  },
  {
    "url": "assets/js/276.9bb3f6ce.js",
    "revision": "59dbd9e851799a63773302335e54e6f4"
  },
  {
    "url": "assets/js/277.8d4bbdcc.js",
    "revision": "5a7ec75a786c86ddfe4ded08151606a2"
  },
  {
    "url": "assets/js/278.60f667fe.js",
    "revision": "b0769e7d5a3137992cc5f4832d479f43"
  },
  {
    "url": "assets/js/279.16b0bb50.js",
    "revision": "6ab4074a8425397a12a24140bc74bd77"
  },
  {
    "url": "assets/js/28.80f3d3e0.js",
    "revision": "b86cba6d7861d4b69cf14607e08242e6"
  },
  {
    "url": "assets/js/280.6dbc7da0.js",
    "revision": "efcae69195a637ed1e534bbf9e61b351"
  },
  {
    "url": "assets/js/281.5d9ebfff.js",
    "revision": "8d69745435ac3c7ef1d0c110237e7dd1"
  },
  {
    "url": "assets/js/282.cf89fc43.js",
    "revision": "f8fa7d20ec7afe152e988265849124d1"
  },
  {
    "url": "assets/js/283.b2ece94f.js",
    "revision": "50b142055c72029347bc9eb68dc88d2d"
  },
  {
    "url": "assets/js/284.8f053071.js",
    "revision": "d361ecfb5323da6a6f950279cd5ddfb6"
  },
  {
    "url": "assets/js/285.71c6af77.js",
    "revision": "50c800b712c5ed9db1b7127449d6238c"
  },
  {
    "url": "assets/js/286.3095f21c.js",
    "revision": "c16f4d9db977644361de057f43cc6be3"
  },
  {
    "url": "assets/js/287.ed72a306.js",
    "revision": "0eaba600d2db4d2c18bfcd1072b82bf5"
  },
  {
    "url": "assets/js/288.b6fd0840.js",
    "revision": "db97fde447db1e2af198573236eb84d2"
  },
  {
    "url": "assets/js/289.30c87355.js",
    "revision": "ef4f1ea69bd7f4493a84935248493004"
  },
  {
    "url": "assets/js/29.7508e2e4.js",
    "revision": "2806c088c7477a813f23f9227618aba5"
  },
  {
    "url": "assets/js/290.6e14b5a0.js",
    "revision": "b757e415ae156813d18e85224bf59182"
  },
  {
    "url": "assets/js/291.48193751.js",
    "revision": "de81d07b1192375c0b669b7fb151a412"
  },
  {
    "url": "assets/js/292.73d55997.js",
    "revision": "3a1e55fd757bcddd76d03b37d42f1ad8"
  },
  {
    "url": "assets/js/293.42991f77.js",
    "revision": "8f5c504a48af7fad318cbc45b6994e90"
  },
  {
    "url": "assets/js/294.7dab94c6.js",
    "revision": "f0e6f43e1538f4f0b3e2386056cacc74"
  },
  {
    "url": "assets/js/295.04c3d6a3.js",
    "revision": "50f56e3699ada2ebe7ff041d36a821bd"
  },
  {
    "url": "assets/js/296.b2015da7.js",
    "revision": "b2292242c942dfac84fd967c3f090978"
  },
  {
    "url": "assets/js/297.d86ced74.js",
    "revision": "de97b311322b1992e7a7b1eff2f99f77"
  },
  {
    "url": "assets/js/298.ac40d3f9.js",
    "revision": "3cbba82e377a94ddee09837b5a452871"
  },
  {
    "url": "assets/js/299.7f54422c.js",
    "revision": "352d286fc3355ccfbc662716cf3a0994"
  },
  {
    "url": "assets/js/3.5d585ad5.js",
    "revision": "a8edc2f2b0415886d99f7479567d598e"
  },
  {
    "url": "assets/js/30.2cdb9fc7.js",
    "revision": "8272cf3b61d0636bded9b334f970ffe5"
  },
  {
    "url": "assets/js/300.d082d7ae.js",
    "revision": "5b475db55df21d2240de28566b0672f8"
  },
  {
    "url": "assets/js/301.de67cc69.js",
    "revision": "8a28c8696969cf347bed8f9ebffeb160"
  },
  {
    "url": "assets/js/302.7e7e3ab1.js",
    "revision": "3d237bc875e6ed19272a1ed2ff0e993a"
  },
  {
    "url": "assets/js/303.373a71b6.js",
    "revision": "eda0d46c2c2a53c33115021c455ab65e"
  },
  {
    "url": "assets/js/304.33aa4653.js",
    "revision": "458757a150bf2e2b1ea18fadcb4ce6e8"
  },
  {
    "url": "assets/js/305.a7c4da12.js",
    "revision": "ea7a0f335fcd5005b16f0a8649ceea0d"
  },
  {
    "url": "assets/js/306.cb4922c5.js",
    "revision": "132b8a32f98ad45551c4a1678d8fd8e2"
  },
  {
    "url": "assets/js/307.2e622344.js",
    "revision": "e13323bafaa36822100d024fd8522f3f"
  },
  {
    "url": "assets/js/308.7844b5c9.js",
    "revision": "ef9ca688cf227f8783c43abfe6c44dff"
  },
  {
    "url": "assets/js/309.5410bcd1.js",
    "revision": "70305d776adbc2544fa54039d7d01c0a"
  },
  {
    "url": "assets/js/31.a3e1f61d.js",
    "revision": "ec1fcfd0c3fce622e0b7deaa085f1a11"
  },
  {
    "url": "assets/js/310.a6130d1f.js",
    "revision": "e54c8eaf0a11e4c27246e5f3ffe70bdc"
  },
  {
    "url": "assets/js/311.f66d6d06.js",
    "revision": "cca1387c40e033b4ca5cdf072253f0a0"
  },
  {
    "url": "assets/js/312.dbec40e1.js",
    "revision": "013c27702b052ab8397e63852481d91c"
  },
  {
    "url": "assets/js/313.f12abb0e.js",
    "revision": "e965608f6509202a8d0a50ab4b866e2d"
  },
  {
    "url": "assets/js/314.2c45e062.js",
    "revision": "8748d5af56b6f1ab251708a76c079c9e"
  },
  {
    "url": "assets/js/315.83e40bcd.js",
    "revision": "4d967a51a0a6497a3691229d167eb97b"
  },
  {
    "url": "assets/js/316.28007d95.js",
    "revision": "1d0133a4a3ea0dce0e429e900883986c"
  },
  {
    "url": "assets/js/317.1e031382.js",
    "revision": "28df55072df5eee8566c6087f72b919d"
  },
  {
    "url": "assets/js/318.e7aacc56.js",
    "revision": "571c5c84cc05d9e2f8a94b09c99f1b82"
  },
  {
    "url": "assets/js/319.1acaade8.js",
    "revision": "831f090d11da3354e1ada2ccada83286"
  },
  {
    "url": "assets/js/32.09f92597.js",
    "revision": "91c5a4695f210c28624cc3d3cb80f73b"
  },
  {
    "url": "assets/js/320.e2b99888.js",
    "revision": "4337dc337eb4979f91f7d1d4c275c3d6"
  },
  {
    "url": "assets/js/321.a1ab82fa.js",
    "revision": "df706f8e69a46c0481f2eec784d0d597"
  },
  {
    "url": "assets/js/322.79440afc.js",
    "revision": "a8314a28bbecbc99fea55168d3817167"
  },
  {
    "url": "assets/js/323.366ca8eb.js",
    "revision": "24edd0d82522361291a936cb14b90fc4"
  },
  {
    "url": "assets/js/324.461e7bf7.js",
    "revision": "de18fe9e5f14fac49e6f7183e42ba256"
  },
  {
    "url": "assets/js/325.ed005e5e.js",
    "revision": "80793901547d17d7ace03c996dc8f475"
  },
  {
    "url": "assets/js/326.085da3e5.js",
    "revision": "da4a2f97660cc87858b12d766459c2af"
  },
  {
    "url": "assets/js/327.f5fe2898.js",
    "revision": "e03ba90edbdae0aae92ce3c1fe8c917c"
  },
  {
    "url": "assets/js/328.2b8801c7.js",
    "revision": "da631d79124214842372902553c67050"
  },
  {
    "url": "assets/js/329.9fae54bc.js",
    "revision": "53ab9dde56706e57a84bd6ed2aaeaa45"
  },
  {
    "url": "assets/js/33.6eb25618.js",
    "revision": "efcb5ae4c7ab48844d4ce3b41b090b64"
  },
  {
    "url": "assets/js/330.ad0245fc.js",
    "revision": "3eeb523146b05c2f3460dde231361dd1"
  },
  {
    "url": "assets/js/331.57006224.js",
    "revision": "0cb8b1e118ced61df1788033d31c27ca"
  },
  {
    "url": "assets/js/332.e38d1ab6.js",
    "revision": "2ec2263f4d6bcb8fb7a68e1efd953ae5"
  },
  {
    "url": "assets/js/333.ec6a62cf.js",
    "revision": "3cac9169d3bb5740c5f33abd87f56bb6"
  },
  {
    "url": "assets/js/334.039ebce4.js",
    "revision": "631dd29444ed58e77ae044a33bba5f9a"
  },
  {
    "url": "assets/js/335.d26be9fa.js",
    "revision": "0b61f1575b7ebd16e435819f1ff9e7e3"
  },
  {
    "url": "assets/js/336.eebb7c21.js",
    "revision": "3f986d639ef41792749c31f7cb4be450"
  },
  {
    "url": "assets/js/34.b7fa4bac.js",
    "revision": "52ebffc6af11d95757e50d6952b2e0cb"
  },
  {
    "url": "assets/js/35.ced5ad30.js",
    "revision": "565f4784c62f2fb22de7eed3174e0ebb"
  },
  {
    "url": "assets/js/36.1dfc59e0.js",
    "revision": "4d324730e988f1f6913e11e0e549e8cc"
  },
  {
    "url": "assets/js/37.0e48024c.js",
    "revision": "42aa8a0fb893125f4bd127a1b35ad20b"
  },
  {
    "url": "assets/js/38.806ef063.js",
    "revision": "7074714493a9bc5c3468f42d50b72f18"
  },
  {
    "url": "assets/js/39.3e6972e6.js",
    "revision": "8c0c6779df7dab3f92d6490f4444cdfb"
  },
  {
    "url": "assets/js/4.d61341f0.js",
    "revision": "969711189f986f61c5bf139e9b2ad266"
  },
  {
    "url": "assets/js/40.7b569a7a.js",
    "revision": "9a84f75ffee1a2544830a5410fb71e86"
  },
  {
    "url": "assets/js/41.9bbcf879.js",
    "revision": "85c5af8d720e16a6bee37fca1b1cc103"
  },
  {
    "url": "assets/js/42.af4c546c.js",
    "revision": "e80d4cfb1a3ef2fb69f4e9831b5cdb57"
  },
  {
    "url": "assets/js/43.3e42cca5.js",
    "revision": "d08664bee60747a2e491839a1e65892a"
  },
  {
    "url": "assets/js/44.859e4e5a.js",
    "revision": "3a1cd08d195e28cd418ef730b0492d3f"
  },
  {
    "url": "assets/js/45.b06111d1.js",
    "revision": "aec6094c36f7452b1be6c22c53882f91"
  },
  {
    "url": "assets/js/46.cd060ff1.js",
    "revision": "f59f5a085e9425c7874566d7a94b2453"
  },
  {
    "url": "assets/js/47.ea6bcd90.js",
    "revision": "fb9df4ea1ec876dafbff796bddeaca5a"
  },
  {
    "url": "assets/js/48.e0f99c94.js",
    "revision": "08405ba959d185721a205d2e0e465999"
  },
  {
    "url": "assets/js/49.314e78ea.js",
    "revision": "d36ac56055155489dbe0a829d98b7f61"
  },
  {
    "url": "assets/js/5.fe50b3d3.js",
    "revision": "d2333ad1d73aa6066c9a51ca82067bd5"
  },
  {
    "url": "assets/js/50.649fad13.js",
    "revision": "9d6137cdd5cdf6c1b1dc2ab125d58c3b"
  },
  {
    "url": "assets/js/51.ccefdb90.js",
    "revision": "bdcd6861037ddabc1802166225313775"
  },
  {
    "url": "assets/js/52.1fc91867.js",
    "revision": "fd11f990fc4d81a54c9e07136fe8147d"
  },
  {
    "url": "assets/js/53.8844b52b.js",
    "revision": "4905b21d4e6c15ae749ae9b8b5e25a9f"
  },
  {
    "url": "assets/js/54.50e732c3.js",
    "revision": "b782b0a8032fa788f0b91d0ff144b535"
  },
  {
    "url": "assets/js/55.6bba60e3.js",
    "revision": "79c0b1edace29c8fb35074357f561aa4"
  },
  {
    "url": "assets/js/56.5cb792f7.js",
    "revision": "48c4885b76e5be3e589ed3384dd4a45a"
  },
  {
    "url": "assets/js/57.03a96671.js",
    "revision": "3b02754da6d97af96c7d7d778ebcc73a"
  },
  {
    "url": "assets/js/58.d0ae39ec.js",
    "revision": "9a438d4a596cac74bc3e6f65bd53a763"
  },
  {
    "url": "assets/js/59.493ae89c.js",
    "revision": "fb4f370d08a504ed73ffb3c246a5afc7"
  },
  {
    "url": "assets/js/60.e3119fb5.js",
    "revision": "6ea085cd03b31feb27dd531f082e8618"
  },
  {
    "url": "assets/js/61.24b64db0.js",
    "revision": "d3f0dd77ddc4af284444750336f3255d"
  },
  {
    "url": "assets/js/62.5cbfef44.js",
    "revision": "dffebbd9febf568e9b43ad3464e3a333"
  },
  {
    "url": "assets/js/63.4b2e75db.js",
    "revision": "0682141b8fca989f3ea901fb6672fe0b"
  },
  {
    "url": "assets/js/64.fbe5484d.js",
    "revision": "c919efbe1aa892009805eff31b43019a"
  },
  {
    "url": "assets/js/65.b1374146.js",
    "revision": "1a01cd36eee94ff1dfdb57061529dc00"
  },
  {
    "url": "assets/js/66.2ed9ef06.js",
    "revision": "953e3ea558631198f8a297e255697a31"
  },
  {
    "url": "assets/js/67.36c87745.js",
    "revision": "4cfe5e86902ffcfdf8df84d3cf8f160c"
  },
  {
    "url": "assets/js/68.aa60ed72.js",
    "revision": "74a455ac6ef6356a03a7579e435ef413"
  },
  {
    "url": "assets/js/69.2be2abf9.js",
    "revision": "5719227b484243b4654021a3c82a428a"
  },
  {
    "url": "assets/js/70.47c7bacd.js",
    "revision": "22090b659c449cbfaa09d536f3fdd864"
  },
  {
    "url": "assets/js/71.48cf09c6.js",
    "revision": "883e7f670fc76239cbf0e43a0c4c5c62"
  },
  {
    "url": "assets/js/72.d7a654c6.js",
    "revision": "d9eb5d0fc2852ccd9b129c1a175012ba"
  },
  {
    "url": "assets/js/73.55505802.js",
    "revision": "c3e9a990bb480afa2c4b6a4cb4589590"
  },
  {
    "url": "assets/js/74.b108f99f.js",
    "revision": "c5ef7f3489233d1f0bd4101089fb419d"
  },
  {
    "url": "assets/js/75.2da35898.js",
    "revision": "dac8d3152e6528a445a22c44e61f1999"
  },
  {
    "url": "assets/js/76.ecbde2a6.js",
    "revision": "9f3d1ea8292be956897afbbe623cec65"
  },
  {
    "url": "assets/js/77.84b2f38a.js",
    "revision": "1d5e7a204258f574d21cf8ccdba131f2"
  },
  {
    "url": "assets/js/78.d3542de1.js",
    "revision": "8aa461f3a86050d1f923e9015f6ca8eb"
  },
  {
    "url": "assets/js/79.ff075c38.js",
    "revision": "083ce012e5f7b64b2d81c1c75531c3dd"
  },
  {
    "url": "assets/js/8.779e3c4a.js",
    "revision": "a8816670495677b5750c366fbbe997ff"
  },
  {
    "url": "assets/js/80.c2cd7089.js",
    "revision": "95831208d837a081fef257e81bdf7f0b"
  },
  {
    "url": "assets/js/81.3449701c.js",
    "revision": "c1811b96636279a942f850a688d62f84"
  },
  {
    "url": "assets/js/82.25849d6d.js",
    "revision": "f4d112a35d4b23a37a23b6158ec6f953"
  },
  {
    "url": "assets/js/83.61ad93a4.js",
    "revision": "c7b983f7f0aa3525d4867f4067aeeb05"
  },
  {
    "url": "assets/js/84.571dc7f4.js",
    "revision": "f550ad51c55ee84a9e2380bc30f616de"
  },
  {
    "url": "assets/js/85.02a6b626.js",
    "revision": "30c22cdd2129a6b9eba300a80481a483"
  },
  {
    "url": "assets/js/86.03dd9d8b.js",
    "revision": "42e9d82fc14a279451ff62ccbd0c92da"
  },
  {
    "url": "assets/js/87.ff045b0c.js",
    "revision": "4d21b7e6047b8ff0b82315bc78c7a750"
  },
  {
    "url": "assets/js/88.65392c9f.js",
    "revision": "7293ca6af4bd626444e7198a4728fb71"
  },
  {
    "url": "assets/js/89.96cc93ba.js",
    "revision": "58d8951b91dcb80cfc40ad59ee73147a"
  },
  {
    "url": "assets/js/9.41683093.js",
    "revision": "51393c974e336860c7f2fe19369c70ba"
  },
  {
    "url": "assets/js/90.f6966361.js",
    "revision": "c6adcfe62f0385ddbcf4a71793f83c73"
  },
  {
    "url": "assets/js/91.a8464fec.js",
    "revision": "3981227f0ed26e25b3e79ea72573c5ef"
  },
  {
    "url": "assets/js/92.218a17e4.js",
    "revision": "e7aa947fbafa585644507a0eceed7e70"
  },
  {
    "url": "assets/js/93.51b31634.js",
    "revision": "a4b661b7b0983068986d1ea842a968fa"
  },
  {
    "url": "assets/js/94.8de4315c.js",
    "revision": "eb5d757954527aab04c14dd2e73925f2"
  },
  {
    "url": "assets/js/95.99abd4c2.js",
    "revision": "450725dc4205e0b6bffce5368fcb3ebb"
  },
  {
    "url": "assets/js/96.56a1650a.js",
    "revision": "cf61c831f4739f15953457ed7778157a"
  },
  {
    "url": "assets/js/97.4b6e285d.js",
    "revision": "a70887f729b005666ba1fedd14103aef"
  },
  {
    "url": "assets/js/98.aaeea937.js",
    "revision": "a06a9905ab1bfd9a421c428fb72971a0"
  },
  {
    "url": "assets/js/99.f4b3433a.js",
    "revision": "611ad68800f10c9b334cd027e7154c04"
  },
  {
    "url": "assets/js/app.4d5ac293.js",
    "revision": "4ecd6b1bd36cc8cf73e19800934b88ed"
  },
  {
    "url": "assets/js/vendors~docsearch.ead308ff.js",
    "revision": "5ac31e5a9e2ba05445960cf708c44ce6"
  },
  {
    "url": "index.html",
    "revision": "dec0d65d83199cbf2c57c9c93f8738b8"
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
