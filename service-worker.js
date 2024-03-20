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
    "revision": "098549cef3a00ec1127b0110608a45b1"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "ca80a7c3e2bd362a0e0573c7e1476c50"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "d1bb89ed416cf00e233b1caf603f6963"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "8c6af1fe719efe1d3dd7c9907fa7cf37"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "ec7387ce3cf5c3ac4094f988d2b604ab"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "ceda03b7d8dcf91537f802b5660ccac4"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "05febe785cee9027cba1d492071ba37f"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "64202e82d26b9273a67ceb528b840342"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "7ed64fe7a2adcaac387d280b84d1dd0f"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "dc4056ea60e7a14966c255931ad925c5"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "601015552ae6b2420427f0dec5b7a271"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "c91e4f7d0d2ce6f9517b8cbe2e7ec298"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "8e7fa3c36ac9af151639efb62bd3ffd6"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "2d66d5ac4e0fc2b787da155201566dce"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "23280ac24fb9ea7d6408ee9773c72101"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "73c17c959209424051db693998347b9f"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "5e485b4d1c09021c8ad8213a414b89b5"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "657e2d938157a02c11aef532a6c93364"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "3616725bc996f98d815114c4afaf1ca6"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "5cee9893d11a7fae943304d1d9bd7d1e"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "ea093fe4b74d5e9d5f21d6b1dd170d36"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "9145a82831fd3e264a9dab484e902ab6"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "2cd44a419f9e90f2c95f9eb447f15266"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "6752f57ef7de5a0bda033c3bc07c1a62"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "a0f1b13c43bc2720eb7c427c2f968f4a"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "e8d9b2af458c78f9bbfbe453aea27c18"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "b7c7e886a0f954fb903c6b4841650180"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "c3af3e70a70fdf7348aad671fd1d74e6"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "4b607d73c2e41dc709ee6fd9ba200e2e"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "ec9e267d91183da12311cfb94858a91e"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "1c67a98ef4c53b5cd9b34c23bbf7f749"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "394db53dbd40ab2c6e509560af1d7246"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "ee69b2e2a1734546781b575d2a22b7bb"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "c836cda181673e599fb8aa62e8af907e"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "e2a9037477ef125296a094681b3bfb09"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "0621a6d4f9ab03bafe3c2c2ba4e3d5e5"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "37843401b2185c6b8e8971d3db6c158d"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "427b0ff4bf1e49657c20d1e5d85c50e4"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "04015df81efa9b9f026beb204b8aad5a"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "1d163fa847c2a13cd04ac7445360a163"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "474c92068b778d7035271cbc15385af3"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "842ac366b67c93e037ddb5661355bf30"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "9529e49a5d167a7e2f63b2456d79f830"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "e6d797422f285ae12f7f8b97daf64094"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "96bb480ccb1ea24263a05bd2c0ccbe1b"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "fe11cd83b276b19ac0c6694dbec7abac"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "67f54ebda0c34f8cd0e7db1292a8783f"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "b12b7144562fa496cb69eb7affe137c6"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "14798f1a247b136aaa1b3f4ab209e886"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "bfd0c981d51ef9355e4c849ab9562480"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "06b87fd2ef91c6a512d02455eadc16ad"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "8bd7508dc62f089dd7940b4a5d276b34"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "481554aae38acb02ba5f2ca22ffce2e8"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "c82255e7ccfe015540a665b60f7fd223"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "3bc2f461ba37cbeafcad56adfe34f421"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "e64ab5751e34466b2a8b749a40564d87"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "eb2416fa9d2011585adbb4d7b640c668"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "47809025d75420c9395bae4ee7d95a3c"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "51f4747937a93ed260a71d2890c1cbb5"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "3a1b9eff55c76478fc22cf47ab416b29"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "ba90d0f5fec4f8681a68596cc117f219"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "41759f4fd724c3f70f806431926d6c87"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "11bf5b1b4ee6e0f60ad5e2995aca76b7"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "bb3425a13cb196e68927cbb10ee58242"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "b487b4498557b085c40264c23a480bc5"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "8d4a795f5423d9cd9f6105ea3df83585"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "045e50935db00c267c65fd10a665aac1"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "f39883ff037f30576f9073984e6acbf9"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "227b804462647b078c5cc47b7e542bf3"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "dc765d4b47e49f83b07d95ad0ec28b61"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "de0186e2504f543576e9ac4c19845f44"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "b911f85eab81f1cc9523fa0ed28bcadc"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "6ed562e0e81a95ff4bfa7f3393b154e8"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "927bbba6a01f3ab7277facc08186b169"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "745978f2bb1e6ece007be5c287ed4721"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "6b6c973f21d463651a8d4c7a6a41eaad"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "ac025971d1b59b685fd3ff7e7134cf7a"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "1ed0039acdf15639eb68503c39b59d39"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "aadd11c32cf1cad1cc8ec983eae4f992"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "b2ccd2269233a57a2a01169ccefe2dc4"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "dc419378491ead3328dc9830052b0a09"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "b8f8178ce57a7d188e6708b45f663278"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "073424fd8429533a7abb6138f8559402"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "e63e015d75ba30d2829fca029cc9c1bd"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "65cabc3423a96778ef31553726b93fab"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "965c63d976fe2e2221993a466fd1c24a"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "839a27a3ac874da3ee35d860fe12321c"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "da798df1eb509ab574d549e365f88507"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "e6396e25730b0d761229420c8153a5e5"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "ce5aee341f73f6c0892203318d829da5"
  },
  {
    "url": "404.html",
    "revision": "c5e6e69b14bfbd9c3a9a9c81e6dafc35"
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
    "url": "assets/img/orderGrid.16861d51.png",
    "revision": "16861d51247c5dfc6d61b3105995def0"
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
    "url": "assets/img/searchTerm.2fe098f0.png",
    "revision": "2fe098f07e4d97cab41b67d57d43433a"
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
    "url": "assets/img/urlOutput.6cb28e2f.png",
    "revision": "6cb28e2f7566c59b496179190237ff01"
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
    "url": "assets/js/1.8c52e958.js",
    "revision": "f7b358db8fc5bfe995654a0741749361"
  },
  {
    "url": "assets/js/10.a3ab9c65.js",
    "revision": "6e4a6ddeb5ef236b1765667039eab8ee"
  },
  {
    "url": "assets/js/100.f610de9c.js",
    "revision": "0ad7e31bf5e9cf4b85f6ee3aa98a4b10"
  },
  {
    "url": "assets/js/101.8ee38aa9.js",
    "revision": "c8dfa1b14a0fa0d605a96f5dea55a6af"
  },
  {
    "url": "assets/js/102.18f2c96e.js",
    "revision": "dcc0f2af433adc73ce1ef69b17ba6d59"
  },
  {
    "url": "assets/js/103.05ce4c8f.js",
    "revision": "36746e0e6b3845d372f24f0faf1c606d"
  },
  {
    "url": "assets/js/104.db6d8e38.js",
    "revision": "6bfe8c2e8e6c6ca0f02144975daa1a1b"
  },
  {
    "url": "assets/js/105.90e33f47.js",
    "revision": "7038726861084b1ecc5cd34a77c9cc9c"
  },
  {
    "url": "assets/js/106.60cd3ce6.js",
    "revision": "7b92cae5c3f07ae8e1c361558fddc525"
  },
  {
    "url": "assets/js/107.f537a354.js",
    "revision": "d170dc4bb0505d0f6105d3766665d88b"
  },
  {
    "url": "assets/js/108.003b33b3.js",
    "revision": "d780976e7e51ad7782b30b5b28d79b4c"
  },
  {
    "url": "assets/js/109.8f9c58b9.js",
    "revision": "58a78543f08d8207c7f403a53a821675"
  },
  {
    "url": "assets/js/11.37b20ff7.js",
    "revision": "b74620b1741c5c5101699ae0f2e75b01"
  },
  {
    "url": "assets/js/110.c7b690ae.js",
    "revision": "b741f4b12374051042add9029c359455"
  },
  {
    "url": "assets/js/111.4bb7a677.js",
    "revision": "aa804c77c9b4975d4c7fe22b2aaa0081"
  },
  {
    "url": "assets/js/12.f16aeb69.js",
    "revision": "53f7778d63fc6badcf059cb90d783300"
  },
  {
    "url": "assets/js/13.91f61691.js",
    "revision": "39450a79f2aa817fd4c9464a6dfe591e"
  },
  {
    "url": "assets/js/14.ea29d770.js",
    "revision": "b1d98ed88210d30820775c11e1de22d6"
  },
  {
    "url": "assets/js/15.d7449485.js",
    "revision": "434e3a24a2dd02062d0701863b873a17"
  },
  {
    "url": "assets/js/16.d48061e3.js",
    "revision": "784979ae7e059e8c93acf9b3ea068a80"
  },
  {
    "url": "assets/js/17.81c3427b.js",
    "revision": "7a1b9f6881078b7a1cef2464a2cfee57"
  },
  {
    "url": "assets/js/18.5d403fa8.js",
    "revision": "6864b74cf5f51ef96be1b2a82725753e"
  },
  {
    "url": "assets/js/19.b59a7f99.js",
    "revision": "acfdab45763289efbb9050b0dcb7e64d"
  },
  {
    "url": "assets/js/2.bf9162cc.js",
    "revision": "6def0ca566118498eadd4e1814cf2584"
  },
  {
    "url": "assets/js/20.11b73266.js",
    "revision": "952ba899036d9860795ebf3a04947a6d"
  },
  {
    "url": "assets/js/21.77073ea7.js",
    "revision": "d734ff8073010aa4f83c51168f1cfe79"
  },
  {
    "url": "assets/js/22.30ef9b06.js",
    "revision": "3fa2d637aa8e89380a985347ef836c20"
  },
  {
    "url": "assets/js/23.de1e9d2a.js",
    "revision": "024b6791550a56c80f4dc075166f9ab3"
  },
  {
    "url": "assets/js/24.34ee975c.js",
    "revision": "b922fc4d1eb34905b9575843b975ebec"
  },
  {
    "url": "assets/js/25.118eb579.js",
    "revision": "94011d1be3a0fdb15a9a04adc8c937f7"
  },
  {
    "url": "assets/js/26.2dfb902d.js",
    "revision": "da80e5e71171be152283a4ac56717d1b"
  },
  {
    "url": "assets/js/27.ef6cee38.js",
    "revision": "e1fc917c8845b6d3e4fa1f1041e58c90"
  },
  {
    "url": "assets/js/28.c42e8fed.js",
    "revision": "64954b57acf54ad0dd10c3f2251d168f"
  },
  {
    "url": "assets/js/29.1b9d4dfe.js",
    "revision": "eb7b5bd3254ccf98f8aa90bd7525508e"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.b7dd8f59.js",
    "revision": "092ee4fa7a8faf6c1102617710002347"
  },
  {
    "url": "assets/js/31.37fc7500.js",
    "revision": "3f758dd24f73e931ad866c6b2a12c395"
  },
  {
    "url": "assets/js/32.4dd5bca0.js",
    "revision": "bb97f9d5caccf673b159809cbaa03225"
  },
  {
    "url": "assets/js/33.bf8394dd.js",
    "revision": "5e66539bd894c085b1dafcfdd527e546"
  },
  {
    "url": "assets/js/34.1267943f.js",
    "revision": "f3ae91b6a43f694a1691683b663e82db"
  },
  {
    "url": "assets/js/35.2b51c715.js",
    "revision": "e333987fbe89cb0c041792e2d29dcf6b"
  },
  {
    "url": "assets/js/36.fc4ae939.js",
    "revision": "23a3fa983f7ffcbbf4df31918dd9fbf9"
  },
  {
    "url": "assets/js/37.da6ec910.js",
    "revision": "e2d6b7811f6e87ccc252a1aade073073"
  },
  {
    "url": "assets/js/38.43697470.js",
    "revision": "8db2abde1ddc41c83268300b813b95ec"
  },
  {
    "url": "assets/js/39.8d147639.js",
    "revision": "8a5a9db2c35d2597bc844340af18d41a"
  },
  {
    "url": "assets/js/4.91b08774.js",
    "revision": "c8119a125caecf9b0693f3cadf068fa1"
  },
  {
    "url": "assets/js/40.3374e55c.js",
    "revision": "839a59d95612326c076e2291f0ee97e6"
  },
  {
    "url": "assets/js/41.d99731a8.js",
    "revision": "bbba4845e3419fbc14803638df8ef9cd"
  },
  {
    "url": "assets/js/42.4ca5a3b6.js",
    "revision": "873a8eed104c3277012928a0fe6a86b0"
  },
  {
    "url": "assets/js/43.2ad39ba3.js",
    "revision": "19aa2957634079a615a36a86762c3c7f"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.8ce0faae.js",
    "revision": "48a6171e9de68a1b8a6fb720b157aa9f"
  },
  {
    "url": "assets/js/46.1e2b5ce0.js",
    "revision": "a461eb232be86a481d8c454a3d0cb1aa"
  },
  {
    "url": "assets/js/47.a6a09a13.js",
    "revision": "402fbed4ce404825a93f4205f4a3366d"
  },
  {
    "url": "assets/js/48.8c51c20e.js",
    "revision": "4e4b6bd050cb5646460ff6abb1ff6cbd"
  },
  {
    "url": "assets/js/49.48359872.js",
    "revision": "38603c2ffb946bf700e8c12292fc5456"
  },
  {
    "url": "assets/js/5.48f5f39d.js",
    "revision": "10e539f0464f8646cf3faabda21c6c1d"
  },
  {
    "url": "assets/js/50.5e812d51.js",
    "revision": "4fb61b75af39dbcc30dc85f03500601e"
  },
  {
    "url": "assets/js/51.2fa3ab8a.js",
    "revision": "2219482157ee5cde1c5d5cc327f8f107"
  },
  {
    "url": "assets/js/52.1e8cabe5.js",
    "revision": "d69b8cb56503ede84993b4b3b3185584"
  },
  {
    "url": "assets/js/53.155e331e.js",
    "revision": "3acf465c835a38ddb2c34f6025a5a702"
  },
  {
    "url": "assets/js/54.173cde91.js",
    "revision": "e815c715fcced24d8c864da6e10d673a"
  },
  {
    "url": "assets/js/55.28be4412.js",
    "revision": "e0a65f75de11c07e5098c9af62ded767"
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
    "url": "assets/js/58.59252f40.js",
    "revision": "ec894fd3d919ea8c5bfaa3c508f4d7fc"
  },
  {
    "url": "assets/js/59.4e14ef46.js",
    "revision": "5da5a1ccf6d33d5409bd4e6e133bbf99"
  },
  {
    "url": "assets/js/60.c46290a7.js",
    "revision": "db017e3a2be130ecbdf337cc5bb69017"
  },
  {
    "url": "assets/js/61.2aa4ecfc.js",
    "revision": "0af6e0035e76c4267eb16e4c8afcc92a"
  },
  {
    "url": "assets/js/62.b9f263d8.js",
    "revision": "c73b5b52f45886a96ad7fda8c968680b"
  },
  {
    "url": "assets/js/63.fdf3c631.js",
    "revision": "ed62c8558d771dee7e1ffd8a352bc6b0"
  },
  {
    "url": "assets/js/64.10e0a9a8.js",
    "revision": "a90a603c46b47e0a82bdbf5dce9fc088"
  },
  {
    "url": "assets/js/65.a10356fa.js",
    "revision": "84f4fa44234d92351aa7234988e547ae"
  },
  {
    "url": "assets/js/66.a200e3a3.js",
    "revision": "91dc7dfaeb7c91795d10869a73d07b0a"
  },
  {
    "url": "assets/js/67.bc9f41ba.js",
    "revision": "9710f50a202e3f5dcecf931ddf12549a"
  },
  {
    "url": "assets/js/68.f136c089.js",
    "revision": "927c87a601128ff60de1f4730bd4236d"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.79aa0864.js",
    "revision": "243a0aae44efd5fa30599048e37e9024"
  },
  {
    "url": "assets/js/71.d6d2f1f7.js",
    "revision": "3b636156bf2d6d20388985750b63a575"
  },
  {
    "url": "assets/js/72.5bbb18f4.js",
    "revision": "84521cadc44e13c5419f7d5b708574ea"
  },
  {
    "url": "assets/js/73.6f128e17.js",
    "revision": "d7a7ae7bdde122a111ff52515d9d79af"
  },
  {
    "url": "assets/js/74.a6d240c5.js",
    "revision": "561d16a37653937a2913643c645250b1"
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
    "url": "assets/js/77.f2961087.js",
    "revision": "b3d434e11b0bc3c98b5170f7f7555037"
  },
  {
    "url": "assets/js/78.f0cef106.js",
    "revision": "26883f0cec75e251d061d8610b08c1f2"
  },
  {
    "url": "assets/js/79.f2d08fa3.js",
    "revision": "1227139c56db1e4508039da952f75786"
  },
  {
    "url": "assets/js/8.6310bbb0.js",
    "revision": "ca4b6c6030b9282b5bb505a93b99c99b"
  },
  {
    "url": "assets/js/80.5bb6722f.js",
    "revision": "ac41cb63135d167268fd07182d2f4a3c"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.dc6805a8.js",
    "revision": "60298223c8d5af8e5770bb99a0e8d755"
  },
  {
    "url": "assets/js/83.f34edaee.js",
    "revision": "24b78490e6ee78b7204f763d8e9a68c5"
  },
  {
    "url": "assets/js/84.b7329f5d.js",
    "revision": "b7bb871aca08f0240298a0e629176e7b"
  },
  {
    "url": "assets/js/85.deb360cd.js",
    "revision": "4248ce3d5906d23b74a70b907df2a5ec"
  },
  {
    "url": "assets/js/86.cd7e25fa.js",
    "revision": "785c1d38e7927c9b170d381181a8e8a7"
  },
  {
    "url": "assets/js/87.21f8e257.js",
    "revision": "0f4774d5efd46bea0db4039cdf98e0e8"
  },
  {
    "url": "assets/js/88.63584615.js",
    "revision": "f496d5e584d982246b159a0cbbf29ea5"
  },
  {
    "url": "assets/js/89.4ebda9ff.js",
    "revision": "d7cd8757778b7fdaac45e8c3511bb5ea"
  },
  {
    "url": "assets/js/9.f744b03a.js",
    "revision": "aa00ead7a77aa33f848e5c66e3f63f23"
  },
  {
    "url": "assets/js/90.b42e597a.js",
    "revision": "b461ae07b60d83e1df395e51d7f261ba"
  },
  {
    "url": "assets/js/91.3242752c.js",
    "revision": "7c6e4e6323d52eb33148dbef1311b9c9"
  },
  {
    "url": "assets/js/92.6d3c7028.js",
    "revision": "25b6df8f4b3474317ec12c09fc8ba123"
  },
  {
    "url": "assets/js/93.19bd0d2e.js",
    "revision": "9c9529fc035fdfe0514417b65729355c"
  },
  {
    "url": "assets/js/94.79731c42.js",
    "revision": "f07dfd60c2d5b23133ececa3b1f13347"
  },
  {
    "url": "assets/js/95.48677683.js",
    "revision": "9ee925d73af1874b740acfc23a648a66"
  },
  {
    "url": "assets/js/96.c4011985.js",
    "revision": "e49ac8e0c8abc40022fbedfcd9ae47ea"
  },
  {
    "url": "assets/js/97.96010ded.js",
    "revision": "c97f6c83c2a294e19ca424291ed4c6df"
  },
  {
    "url": "assets/js/98.a27559f2.js",
    "revision": "d1cc2e041e198ba2f112ceab8537d658"
  },
  {
    "url": "assets/js/99.19e6eea1.js",
    "revision": "128e755fb89cbab556c6e12e861d5b0a"
  },
  {
    "url": "assets/js/app.887ec372.js",
    "revision": "ee48fbe12babb418e0d548883e2e827f"
  },
  {
    "url": "assets/js/vendors~docsearch.d1abde7b.js",
    "revision": "d0514ed9b8dcc7b50d552034f5e4a577"
  },
  {
    "url": "index.html",
    "revision": "2c4c8589b63741e82bd7cd0a0207a9fc"
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
