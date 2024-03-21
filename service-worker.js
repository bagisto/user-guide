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
    "url": "2.0/attribute/attribute-family.html",
    "revision": "98fabc5b88d40cd82d3fc7654fc578f9"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "d6d8835e31ac88b2c84040daabfc0e45"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "e49f667828a25a65512fec5a8088d90f"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "b9b8902e3e36e0c9c75d369345c4bd7a"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "498dfbad306359ac6a694845412c8804"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "602559c6dafe0d00cc87cc68581a8572"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "0525b5357eb28d18e8fbe5622bbc7284"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "ef282a9396ae16d132bf272fe1edb85d"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "91224c742dbb70764c75673c291689c3"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "e416c1523f54e979723e7ed106efd5d0"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "9a1649fc6a0dc9cc5b592e5f46024fad"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "bd57551fa81f83d15fe281c727bdc6c1"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "03cbbfc44a510348a866286ffc8ac6ac"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "ac89f4a90e00189f717cd16cf14b9afe"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "8b3626044ec9dc0c3b0e67441438e69d"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "c518512b8484366a5532d8930ab195cd"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "63081108d98d4476873220aca9cbd11b"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "4e4c1301ae9d5e579f2e99cb30addade"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "afabe28c94256a1a53cd57af930dac8a"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "1de018ae325b52855d127eba73aaf4a0"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "1834c730eda689270abde5bbe28250e6"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "6b6b087a559c1ea9942713e99c554b7f"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "82408544d3ea4d2363e191c065ee19f2"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "741f509fdf2bc14cc7c02826db17fc28"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "97706fa7f7350d265683fe8c2a83e399"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "841210a3d01e3617659dc8d6c22ddf1c"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "675a10f8b33d1b06f17a50fd6e80d016"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "cf6dec75465da03a7f39382a8b3b1c64"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "16be5fb4f3cd4ca6e62f870baa11e407"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "c2c73a5cf732b2a336916f6840ec95b3"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "36911d5dac5e6a1b99d436cd85f32a31"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "61dc7a8e86f100e1c2a1c289587735e1"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "76b47337218044523fc8d461d15ba418"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "5efe0799819289466942c274adce788e"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "4e3e3d2005af4006fa45b4e4b069db1b"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "3ebede7001082845bd418098d8bf1e11"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "06399abe04d829d69db6c20e0f493fa4"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "6e2c2a032f8cd05203d89c7b6e1319f4"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "1f7688b180f7839e37232cad0edfb450"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "b398f64947afbef7335940b14764c62f"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "bbc9908f69b6ac9d1f1f5acc6c34d87a"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "23c4973b0f694641595b2c7f4d170f6b"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "a6e4ab48e42173b84d314c93dcb488ce"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "9f9004fc2d6e94cbb79cce5f61c6ec89"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "c287b92a6ff5d193bee95dd74bdccc8f"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "ffaf2775921e95cd46c99bd400c85871"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "aa39adb719acccc80da6a4852b99222f"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "eefb3aa5d48649d92ddcbf0fcc1700b1"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "696c36e6d85c739423be716f58f02508"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "c37565f4fcf7d0728ebc5f411b046683"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "879ce7c638ae19a695b36d883197ee0b"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "927d40b4e176b603b9490c8651b4ca81"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "5418fbd47aecfe379758f96039755de4"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "c1bbcd9753559f878aa016bbf32f92cb"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "4b7fa85e9c0fe3c9ec459382748cf191"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "dcef3775111a457492a2dc29eabb9948"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "edfd9bf2ce926ec25a5d4544c42ebba5"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "2ee8c8e661a8eae060195657854303ac"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "c69050ee483f99be0f8f73648c7927cb"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "b888b2df4e7f283329a53c78ccd1a0cb"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "f09d6dc48da6a749633b0a4c1857f3d0"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "1526a73345a47026b8e0bb3d41c237af"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "29ea5bbc4d72bf1c938021dbea45f259"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "e9db057965f5c03c61aa7e6704ad4a1b"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "63901089afd6a6d7ce322c9a6002eba6"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "647e88befa0f2c4f654ece762df0e777"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "cf1548628526b93fa1f609b666667ab7"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "5cdba7f3c0089a7f69bba9a6c7caf7bd"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "d973e18d5a2f944e603193182235c3b3"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "9a226759d46f335b5ee2654c60bb28dc"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "ffc70efb3607cf6a842862f93d3bfbcf"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "063006ab93ca060280ed6293f573a443"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "615c760571e726eb6f8f0e52c8e4f3c4"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "04ef60f200ed78a36ae7e7a9b1d5b093"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "e917ac23aad211084b92da2b0ac1aab3"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "f54ded7a755f1be213163cdb6ea03695"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "4c30778419e404042f982a37f9e6bcd3"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "1b4e6f6070cd2215e15d0d193369f5b6"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "09e75acdb154781d0be1a57bab495e39"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "a8e869111633b12e2a19a18a1f880b42"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "c36f658600805d0fbd97ea4cfea21e40"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "f3fa62ec7824a40185f00559afc20764"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "71ec0aeafb0abf95e48d14c3b6d0653c"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "2790e55a0bdbdbd14e28a897d89c8479"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "3a6db82f996ae8a20631f8bc021d371d"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "59f8fe49b8e051b7d67fb78dd50f4f99"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "408976ab990b0ba3c9c08e562dd35970"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "145c55499ac06091895a33727228ef4c"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "05418310fdd1fee2a1baab53e819763a"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "971aeef5f97712a54c03f2261f5ccaf2"
  },
  {
    "url": "404.html",
    "revision": "b58e1a6531ecb1439ecc1fa50bf2ec1c"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/accessControl.76a3d346.png",
    "revision": "76a3d3469396fe88d18e5ee5aaa1a19a"
  },
  {
    "url": "assets/img/actions.b7cabf8d.png",
    "revision": "b7cabf8d63c2d57d1c471d6877d8a756"
  },
  {
    "url": "assets/img/address.54c54bb8.png",
    "revision": "54c54bb834084ac699488810bd27877b"
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
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
  },
  {
    "url": "assets/img/applyCoupon.86d08f55.png",
    "revision": "86d08f55d595886149c079ae551839ba"
  },
  {
    "url": "assets/img/attribute.096f9150.png",
    "revision": "096f9150a23344cbae1bd9105771034c"
  },
  {
    "url": "assets/img/attributeCondition.c62c263c.png",
    "revision": "c62c263c8ae78119c7d8edaf03e9de10"
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
    "url": "assets/img/billingAddress.89151ce8.png",
    "revision": "89151ce8150f7098db13961aef747ca0"
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
    "url": "assets/img/checkoutMessage.7fec4305.png",
    "revision": "7fec4305b6e80c79137eda387ce363d1"
  },
  {
    "url": "assets/img/checkoutPage.93a3d169.png",
    "revision": "93a3d1695a960a678b423e5521ca8ad4"
  },
  {
    "url": "assets/img/cod.a12ca48a.png",
    "revision": "a12ca48af4446c77d697d6a91c4859a0"
  },
  {
    "url": "assets/img/condition.551d25e2.png",
    "revision": "551d25e2f4c058c56cb04815e2018bb8"
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
    "url": "assets/img/configurations.58f83ad9.png",
    "revision": "58f83ad945a339d894fff644a5323e10"
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
    "url": "assets/img/couponApplied.4bc462a2.png",
    "revision": "4bc462a258076a2ae389e5b0ad67ec47"
  },
  {
    "url": "assets/img/couponCode.dd555392.png",
    "revision": "dd555392dd4bfa97f0ae4984f8c99d28"
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
    "url": "assets/img/downloadable.67051ddc.png",
    "revision": "67051ddc29b8b662b724eddb30ba604e"
  },
  {
    "url": "assets/img/downlodableInfo.b6d199cc.png",
    "revision": "b6d199cc406607e28eaa126d0e1b8b6e"
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
    "url": "assets/img/emailSettings.39150cea.png",
    "revision": "39150cea1ae9747a18b55493c028cb17"
  },
  {
    "url": "assets/img/enableNewsletter.d0472579.png",
    "revision": "d04725797a67f04091339da2de467b92"
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
    "url": "assets/img/familyGrid.8370fbab.png",
    "revision": "8370fbabc01b668e7d0b83c858d9e089"
  },
  {
    "url": "assets/img/frontendOutput.380a6cd1.png",
    "revision": "380a6cd10fc15e240b0ca3e629a661e5"
  },
  {
    "url": "assets/img/general.5849fe78.png",
    "revision": "5849fe78c23e9940aa3c4bab5eb717a8"
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
    "url": "assets/img/magic.c9b20146.png",
    "revision": "c9b20146402bfb72c7b2b32f67b104f1"
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
    "url": "assets/img/moneyTransfer.d78c9eeb.png",
    "revision": "d78c9eebbc07cf1dbcc0e20c2ca0a2ef"
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
    "url": "assets/img/orderSettings.f4ab6c13.png",
    "revision": "f4ab6c13c25e37cd93dde2287785c7a8"
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
    "url": "assets/img/saveTheme.fece12f0.png",
    "revision": "fece12f03744c824b2525579e71d93f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
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
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
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
    "url": "assets/js/1.828f74c2.js",
    "revision": "fa26fda5c8b9188633aadc4fa5ae801b"
  },
  {
    "url": "assets/js/10.fe9997e7.js",
    "revision": "d969f68dcc62cc5ac941a9938a89fce9"
  },
  {
    "url": "assets/js/100.539e9485.js",
    "revision": "7ca54145c4b1dc56d2a6657b0590d421"
  },
  {
    "url": "assets/js/101.cae850b3.js",
    "revision": "fb776f316f197a47b06cb9e871092ef9"
  },
  {
    "url": "assets/js/102.536917b2.js",
    "revision": "c25df6cc0404fcfb4142fb0399207212"
  },
  {
    "url": "assets/js/103.34102fc4.js",
    "revision": "6e1c97066af26f672b4818f5f5c8dbdb"
  },
  {
    "url": "assets/js/104.757624b3.js",
    "revision": "2034e50cf5bac4d41de7877fa68ce5e1"
  },
  {
    "url": "assets/js/105.0cafa6c3.js",
    "revision": "a58982aae1e7f6bec8d6a075ffd2058d"
  },
  {
    "url": "assets/js/106.1f8275ae.js",
    "revision": "6d09ce4652e42e6160102d6d50a8951a"
  },
  {
    "url": "assets/js/107.df51ed9d.js",
    "revision": "89df6bfc3afa93c2d85965d7fc125791"
  },
  {
    "url": "assets/js/108.68d52c67.js",
    "revision": "2fc6a64315b9e88383ffadbd84489e00"
  },
  {
    "url": "assets/js/109.8d100485.js",
    "revision": "97d5ee048adfc27dc7232c4649973485"
  },
  {
    "url": "assets/js/11.eb481a6e.js",
    "revision": "289d8cfc27d35a00069ab7009de4993c"
  },
  {
    "url": "assets/js/110.97ff5762.js",
    "revision": "6da36bbe422be841ffdc2864b47a2b91"
  },
  {
    "url": "assets/js/111.36c6d5f0.js",
    "revision": "f033b97bd8d52481420587ec061f5173"
  },
  {
    "url": "assets/js/12.ac673df5.js",
    "revision": "f4cf46bba67112b2f72e1ccf4d3f9114"
  },
  {
    "url": "assets/js/13.34cd6d6c.js",
    "revision": "fdbe27807243f6764b4eb26306646073"
  },
  {
    "url": "assets/js/14.e2e3e201.js",
    "revision": "beaad951293c4b6fd52beabc275f7398"
  },
  {
    "url": "assets/js/15.2cc72299.js",
    "revision": "3214377f5779c00764bc1296a93e3bc4"
  },
  {
    "url": "assets/js/16.91873e49.js",
    "revision": "cb70d9e7572993aab3ad9ada86735f5e"
  },
  {
    "url": "assets/js/17.9ef73304.js",
    "revision": "2a2297155afdf38f4b2b98c4bb9c2e67"
  },
  {
    "url": "assets/js/18.3c58edb7.js",
    "revision": "d545b79971ae43c58666984ff4561604"
  },
  {
    "url": "assets/js/19.2011e6d2.js",
    "revision": "4e9aad59e0da3f001fbcbd05e4c708a6"
  },
  {
    "url": "assets/js/2.666bbf97.js",
    "revision": "0bb8c3e94140e75a04e18dcc33a22d0a"
  },
  {
    "url": "assets/js/20.7d21985f.js",
    "revision": "5b4be86c4a6cd51e60f3f5cda1ce7863"
  },
  {
    "url": "assets/js/21.ec0e66d8.js",
    "revision": "d5f4386b3aa0a85961a25c10cdf219f9"
  },
  {
    "url": "assets/js/22.b4917c97.js",
    "revision": "fba9ac84318801f829057a77a2f8456a"
  },
  {
    "url": "assets/js/23.732f7e32.js",
    "revision": "dedb068a0c4e69128f432b9518c92cf2"
  },
  {
    "url": "assets/js/24.85d02fda.js",
    "revision": "67ca6e1f539ef66ffd50282fe9a25d07"
  },
  {
    "url": "assets/js/25.8e020299.js",
    "revision": "10b3ab50b93b1308ba1deba20128f654"
  },
  {
    "url": "assets/js/26.b900547f.js",
    "revision": "00da78b65e55be2481d3bf2412f3555d"
  },
  {
    "url": "assets/js/27.dad97fb4.js",
    "revision": "56885aac8cdb2c708d76814059735eae"
  },
  {
    "url": "assets/js/28.3c8bf6db.js",
    "revision": "9ddc2bedbf38fe8cd2605a7e64dd345b"
  },
  {
    "url": "assets/js/29.1fa5ef20.js",
    "revision": "c6fc43a0bd7dcfaa25167ef9a3d62d41"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.08d7dfa7.js",
    "revision": "ebc451c99032646a5f632c13e2066be5"
  },
  {
    "url": "assets/js/31.c2f82c71.js",
    "revision": "709283d35573ac189dfaf7b84e9aa4b2"
  },
  {
    "url": "assets/js/32.f4587b6f.js",
    "revision": "b14625280383ea68963f4c01f96ae2e0"
  },
  {
    "url": "assets/js/33.bf8394dd.js",
    "revision": "5e66539bd894c085b1dafcfdd527e546"
  },
  {
    "url": "assets/js/34.0bb69045.js",
    "revision": "ba7212b38ef4d604ca3a5353288a03a6"
  },
  {
    "url": "assets/js/35.de8a3b36.js",
    "revision": "4f960fd0c39c46b5ce12c6480b8c6e12"
  },
  {
    "url": "assets/js/36.a4a18cf5.js",
    "revision": "88df107b4a70315ce3af5d398da37c71"
  },
  {
    "url": "assets/js/37.0902fb53.js",
    "revision": "a4bcee80c27ff6ce50907b8bf0f7abbb"
  },
  {
    "url": "assets/js/38.53d4ef68.js",
    "revision": "456d5efbacf724f3b7c43f32c2e5564a"
  },
  {
    "url": "assets/js/39.8540bf63.js",
    "revision": "2dac192ecdeb9d5ab3b805aa322fa683"
  },
  {
    "url": "assets/js/4.8f77e26c.js",
    "revision": "5bdc0a617b84d6ed00955447b93a6ef9"
  },
  {
    "url": "assets/js/40.f6245dbe.js",
    "revision": "a312eed3e0531bc876d7c521e7fbc3aa"
  },
  {
    "url": "assets/js/41.da13586f.js",
    "revision": "4452f4cacbdad254ed0c9f20a22f40e7"
  },
  {
    "url": "assets/js/42.64d6f74c.js",
    "revision": "5fad4c6b66c0bee034b7ac8bdb769e17"
  },
  {
    "url": "assets/js/43.2abfdc63.js",
    "revision": "cb2c3b882432321a4418240d2f4cbd4f"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.a2e7186b.js",
    "revision": "8250f2c8ccb0d2ac2f6b023d5e5c9f41"
  },
  {
    "url": "assets/js/46.899c622f.js",
    "revision": "0b111ec1a76083e1b3c0bf562b1d42a0"
  },
  {
    "url": "assets/js/47.95b6f175.js",
    "revision": "14adef05179246caa946497f764ce8d9"
  },
  {
    "url": "assets/js/48.130095bc.js",
    "revision": "6632e7423db84b19795d0749a62b98a8"
  },
  {
    "url": "assets/js/49.140c10ec.js",
    "revision": "b4f45f32b19ce8684ab2e23bab106b42"
  },
  {
    "url": "assets/js/5.700f6b00.js",
    "revision": "3d08ca19c8889b7667be8873acfa059a"
  },
  {
    "url": "assets/js/50.2f5ba971.js",
    "revision": "68ccc791db85251e30fb941b1e49d912"
  },
  {
    "url": "assets/js/51.8e8eebb6.js",
    "revision": "40ce21b7999d81317aed1c50ded80286"
  },
  {
    "url": "assets/js/52.22fa79d9.js",
    "revision": "569ac88490dcba847e161fe3c4adaebd"
  },
  {
    "url": "assets/js/53.c9581dc7.js",
    "revision": "1d6fec55756aab83be857aea9cbe8a94"
  },
  {
    "url": "assets/js/54.0eaabcc9.js",
    "revision": "15b5ed66da02a22e9a0b06a247515f39"
  },
  {
    "url": "assets/js/55.313a465d.js",
    "revision": "c110eb619e59e0a0e51f36b19e2e6201"
  },
  {
    "url": "assets/js/56.b0eec741.js",
    "revision": "84a2ba59bfa50dec5a8279a04787460a"
  },
  {
    "url": "assets/js/57.3aca3548.js",
    "revision": "2cef1d749521bb3bfdfc31e3c37500c7"
  },
  {
    "url": "assets/js/58.0e6b8171.js",
    "revision": "dbf90c85c5b889d15a1b93f8c447f6db"
  },
  {
    "url": "assets/js/59.b4920fb1.js",
    "revision": "20c3c7d6539e632560bcbc2d38ef6724"
  },
  {
    "url": "assets/js/60.480eff43.js",
    "revision": "61658375dcc10c33eff327ebad694aca"
  },
  {
    "url": "assets/js/61.232dc388.js",
    "revision": "bae88c6f8921d5c6fc24352375d2aae8"
  },
  {
    "url": "assets/js/62.5dbfa97a.js",
    "revision": "2579f20e605c5daca501d9583b0e4f1a"
  },
  {
    "url": "assets/js/63.88e9288d.js",
    "revision": "b850e50a78617cb6843a506cc2289b75"
  },
  {
    "url": "assets/js/64.0dbdc1e2.js",
    "revision": "cd2354cfbde2a8f4e01935a62af2c5df"
  },
  {
    "url": "assets/js/65.85d721e7.js",
    "revision": "1c968ab922f97f8537ab5013d6352ce9"
  },
  {
    "url": "assets/js/66.328cbef8.js",
    "revision": "131164b2ae62eb0ee4b961cacda71578"
  },
  {
    "url": "assets/js/67.b27928f3.js",
    "revision": "0aa8ae2cf79727ea27458eace1eeb581"
  },
  {
    "url": "assets/js/68.a13fe4a5.js",
    "revision": "80ac9ebf7f919a1de6cba93fa4d31ae7"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.96dfe9db.js",
    "revision": "b6654701fc3f74eb1e4dfb702eb4dfbf"
  },
  {
    "url": "assets/js/71.0b8528d2.js",
    "revision": "b231a37106e5527c0d22848852d49103"
  },
  {
    "url": "assets/js/72.2ae5f1c9.js",
    "revision": "90feee70a39c5895f6ccc703099e94dd"
  },
  {
    "url": "assets/js/73.c9f5a4ae.js",
    "revision": "f8d3fbd60ce13e52c9c61649f743d784"
  },
  {
    "url": "assets/js/74.dd77ede8.js",
    "revision": "9b26ac542f3850420c88c9ff2eb218b9"
  },
  {
    "url": "assets/js/75.09b6da82.js",
    "revision": "0259d62bf23b49fe434401722303b3f4"
  },
  {
    "url": "assets/js/76.7a620f82.js",
    "revision": "19313cce1d08ace33299cbff4c61e341"
  },
  {
    "url": "assets/js/77.2e4d4d90.js",
    "revision": "7f8dd3f1419e631570c84db9950f425e"
  },
  {
    "url": "assets/js/78.38bfb6d5.js",
    "revision": "087f51ec55725bda359ad3b36821995c"
  },
  {
    "url": "assets/js/79.b704c7c5.js",
    "revision": "8cacc2aab5ec3481f257e311c08c9573"
  },
  {
    "url": "assets/js/8.b2cba7f7.js",
    "revision": "ce6ac3a624d247d16641d03fcb8bf315"
  },
  {
    "url": "assets/js/80.5e43ff5f.js",
    "revision": "033fb3e544eb54b5ab52396f66599743"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.efe76cf1.js",
    "revision": "a1ac0372a59380e74da323ed409dcf96"
  },
  {
    "url": "assets/js/83.9471ca18.js",
    "revision": "dfb56a7f7329db6693676691e0a511d5"
  },
  {
    "url": "assets/js/84.e32b038f.js",
    "revision": "a5577eab03d37e825e289a73e154472c"
  },
  {
    "url": "assets/js/85.af888555.js",
    "revision": "0577c8847431d8d4c04ddfc449c5fb7f"
  },
  {
    "url": "assets/js/86.cd482d19.js",
    "revision": "71ebe26d5079108cd9fafb4bcca066ce"
  },
  {
    "url": "assets/js/87.268b8ffc.js",
    "revision": "1383ecaa4b5f851f9c5f0a353c9363bd"
  },
  {
    "url": "assets/js/88.59dba6c3.js",
    "revision": "ea8caae070fbeeaac2c8492ededeab40"
  },
  {
    "url": "assets/js/89.fd02ded4.js",
    "revision": "348dc857d1331d892f1ffdc83a85bf69"
  },
  {
    "url": "assets/js/9.0b74333c.js",
    "revision": "b0f1ce5e2b13d16367e06423bcdf70c2"
  },
  {
    "url": "assets/js/90.0427f6e2.js",
    "revision": "a302e9372883f4f8e2d9bc8227d4bdb2"
  },
  {
    "url": "assets/js/91.334f3374.js",
    "revision": "5db0516047bc9fbd149a942024d7908a"
  },
  {
    "url": "assets/js/92.cedc3f9d.js",
    "revision": "3d7bbcbee93e9885eed654da114abdca"
  },
  {
    "url": "assets/js/93.cfbc018c.js",
    "revision": "96bbb67d33cd8822b6a346297b1e2d1b"
  },
  {
    "url": "assets/js/94.371391e4.js",
    "revision": "0a8f9abddfa83cb4dd972b9c41f6b594"
  },
  {
    "url": "assets/js/95.24f786ed.js",
    "revision": "fbbf2a50f38af43b0fdf5a495a9715ba"
  },
  {
    "url": "assets/js/96.dc8f843b.js",
    "revision": "8b407ff6354600aeaa8bc565255f5de3"
  },
  {
    "url": "assets/js/97.045ff678.js",
    "revision": "2adbbe40a834632a9f72debb678c016b"
  },
  {
    "url": "assets/js/98.e0b8dc5d.js",
    "revision": "d9b21406cb0df86140616c583300533d"
  },
  {
    "url": "assets/js/99.d67418d2.js",
    "revision": "da7c0b6ae89b818c351a58eca01d06df"
  },
  {
    "url": "assets/js/app.f685b191.js",
    "revision": "c6dc7f96025673a6602a66edea9e5882"
  },
  {
    "url": "assets/js/vendors~docsearch.bf60dc39.js",
    "revision": "191bfc0e4e194eb9b20722fa5c513a59"
  },
  {
    "url": "index.html",
    "revision": "7a7c15530a130e877d091907b7655cb0"
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
