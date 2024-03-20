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
    "revision": "a2cadf6e9fc55fbb182f92dd3e6ac07a"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "2322b65b0b49e697697eeacdb16e942b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "ded8475703a979af69252a8f7d476581"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "7fa986dd596752f4e7cbe190dfbe3f6e"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "01b6e34dd31a1f3ee7747ff8515f9f44"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "e4143b35900c3d1df230d9d11a0264c0"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "cdac234b32668d3c9138c092e70603bc"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "acc79fde24ea15b38c8241257ff16534"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "0ab62460ac4c5a92877a108c85cd81ac"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "5a7279ebd89f10cdbef947520ddf6342"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "f67c991e1b5f1cf75d213c23c32da33e"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "591e7279e0485419d4ff7ff03b696aae"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "f0017ce1504495004d927caff5c7694a"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "b246d5a9e7ed858c27f5c8302fd43a0d"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "8dbde292574b0427fb78c3959bd901a3"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "40968ec91d31e0351dfdd1779537d8e7"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "1233139fa9e118dba6389243f9888262"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "9d64fefeb0c5f8fe2726980a4cc0bb37"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "d2b86a117e6f137d03217609f2aa02b0"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "8f5d01faf3f240ddad8820bbc071c6f9"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "4cb73cb280516b8f5ca9549d0ed7b2b8"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "16b45b3a6685e05ba2c4c9b2c006a2f4"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "87e5518f15ff26a998b093e7fb8c4f67"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "13429f125369754359bb5e6694d20b63"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "19c80d454de614ec48bfe537b19259eb"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "6f83a24da7ec7f1cf2bc468eba9be4b7"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "602c58be7bf8d99d0289278508ce8f75"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "4f4ebbdd40b48ac2903ae2009e71ed4b"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "0428e18661d2e0c1178396a5259f0040"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "ccdcefef02bddc1dc92794b72adf0c89"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "6327eb6bdc74dede2f19deb1f3b02f6f"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "1d61c786c20303ab37aee817b867e728"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "9823946c4043aec6047d6848b6f72cbb"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "a1bb3609716597a40bb5b7cd442e41eb"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "57c18fca53cc834aa086b18cc6701ef9"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "3a18f2a57f7b3ad3e5297170973ee9bc"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "309e01f2d0357d3714dccb76d192aed2"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "ee5f85c07e16522db16a9d207e3760a5"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "ea130f87e06190ae51779f5ae2250fae"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "a8d44c956e88baa91aec5a19b2f6fbc9"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "cd4606cf82cd293f7a027fe6006ed075"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "52cb6acf0434acb22a51e255fba035b3"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "28b378333648986805a12a3f5d57f42d"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "872425667ebb087c6ac93548ee00621f"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "4b09552ecf2571f7cea13e6d16b921a0"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "29532befc0b27909dc87b0b22f4de1f3"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "de9fc76499d60ffc6f2dd599d8fb3124"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "1e30ec3107704bc9a8846ed15ff97d92"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "98f9799ea4a5db3e26eb4c0ef90a5d44"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "aaba2c3c29d641df2ebd6451787b36a2"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "f812d7d27776d86039b01f5d6ce735f7"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "d87671e4b9cd52c2d93d52f0831ba335"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "a6cfb65c8ccaf32bb2251f22e6f5a0d2"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "6f28ab462d31192711a51cb71432c157"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "d4af8bb1189e7b23ec10488a0a99129a"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "688a95c284cf5dcd8b731b2f523940db"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "3265a2e7b5496037489c0cf26f45e251"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "86f98dbb535f6db61f2db51d897a9448"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "608411ccad2e40fdae9d3c71563c8fde"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "45a6f5a9658e3b1ffdfd4f3b8b7fb09d"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "9e899ae1b95542efe69c264318939267"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "19d8930656e86eb4fd5dabc5c916738f"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "dd4d2579c5dbb0d4febdc7c0dca361b5"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "fd2746145611928ae5322b7331046347"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "c44040ddeddf48dc9b76030ddc28cdf8"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "aff85ce8bb9727a6e7b2bb3fe5b92804"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "f18ae14fa17770c85c59c4f970c39ca8"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "ac33b637744e21676fe8ac126104be1a"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "f68e47602a01a97db14b540cb7cb9228"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "3fce3f4d74af065dbde032e40dd22dc8"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "67ae586172e2f4611f0c898587ae3bb0"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "2771a75fdf79ea996522abcc8658f711"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "aba5c5d55adb72f8b0e9f2bc3faaaa89"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "f2004124223b690bb8b72037d1338555"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "4228c1dc38e70afbcd64f7b7c20f419b"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "c53c6af903d123cb1511a6fbc4b15cfb"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "ab31d6c5da25dee8adbf3537315b2071"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "82ab0097e0af159ae8d98163796f63f0"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "d038fefb6993793079a233131737f42f"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "ccfe70084ca3d60f7557a6e50352e517"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "c2bd3b789bbe48ea69c9a1e0e6541c39"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "300879f60761dc6c8a1bfe5cd22f1a53"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "010cb16abe3e33798d4ec517535cdb11"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "6d747a8ead0309ee29c4f266652293c9"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "a5458c87cfdbf1d43e547fb8ec3e81e9"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "706c0c99ffcf5fda6ef85a0a0095c6df"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "22f154485d32a8d33b0f558780d94a6a"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "3bc54e593ac3924de3482bbcbf5993d1"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "bfd4a03a64ad33cc0c43682957f5f70c"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "9b5ccd3277211038e4c39897a20d9904"
  },
  {
    "url": "404.html",
    "revision": "25adb3e4508f8228fa3ee999d3ca0aa5"
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
    "url": "assets/js/1.4a149f75.js",
    "revision": "2623270a44a0187abaec1ccff5235ac8"
  },
  {
    "url": "assets/js/10.a3ab9c65.js",
    "revision": "6e4a6ddeb5ef236b1765667039eab8ee"
  },
  {
    "url": "assets/js/100.65ab2937.js",
    "revision": "d05ef8cf8b9afac973048097b6a294dc"
  },
  {
    "url": "assets/js/101.4d7a4abb.js",
    "revision": "339ac5596ee83e5d0e70fdad5c3e7cc1"
  },
  {
    "url": "assets/js/102.5f9c4e76.js",
    "revision": "2dadd671064fb555d003b60db943e79a"
  },
  {
    "url": "assets/js/103.02530907.js",
    "revision": "e9257d756a45811c1140adbc436b28fc"
  },
  {
    "url": "assets/js/104.a0741922.js",
    "revision": "be8479e4af4c3aa1e6fc114047ec284a"
  },
  {
    "url": "assets/js/105.ec97a230.js",
    "revision": "55c0980e50f3abe208fbea00281305aa"
  },
  {
    "url": "assets/js/106.2d06691b.js",
    "revision": "b21e74b89d14105a2524f6445a8acb21"
  },
  {
    "url": "assets/js/107.34d79d6d.js",
    "revision": "71222a2db55211c77d898db464981d8c"
  },
  {
    "url": "assets/js/108.b72bc08d.js",
    "revision": "03b5e13ff89197ca4cd0e0322ecb6078"
  },
  {
    "url": "assets/js/109.32d0bdda.js",
    "revision": "32a5a3e47ccda6a770448ac08d3713c9"
  },
  {
    "url": "assets/js/11.dfb116b0.js",
    "revision": "8286a455a7a71306fff990742d393e18"
  },
  {
    "url": "assets/js/110.3e3efb5e.js",
    "revision": "73f150541f2da780b1ffa4af2c8d952f"
  },
  {
    "url": "assets/js/111.2475f3b9.js",
    "revision": "1f176930138134138f25f8ccd2b60a08"
  },
  {
    "url": "assets/js/12.792d62a2.js",
    "revision": "4b6576fad162dcca317a8098ddb10eff"
  },
  {
    "url": "assets/js/13.8473e114.js",
    "revision": "c5273a94298cd60f439c3bafc1bb0219"
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
    "url": "assets/js/16.ddd3fbd8.js",
    "revision": "7f8eae5668f66d3e12dc038eabb1cc54"
  },
  {
    "url": "assets/js/17.44943660.js",
    "revision": "2c00cd1bb75f7513e91c9bf356341893"
  },
  {
    "url": "assets/js/18.2bd40684.js",
    "revision": "6addcc7be06989163432294c92d6976b"
  },
  {
    "url": "assets/js/19.31a56192.js",
    "revision": "543767ea173fcd992f182d4e49532ea1"
  },
  {
    "url": "assets/js/2.72f10d07.js",
    "revision": "d11be4ab25ed2bdf1e2e6b9cd7f2b7e7"
  },
  {
    "url": "assets/js/20.748b3105.js",
    "revision": "16c001eff36c234bdd186f069bb7b563"
  },
  {
    "url": "assets/js/21.e8efc5f6.js",
    "revision": "d002552b200ec86925a2643501eee9d0"
  },
  {
    "url": "assets/js/22.a8a7798f.js",
    "revision": "7efabe27c1d32f558479479c1b3503a9"
  },
  {
    "url": "assets/js/23.bbf6972b.js",
    "revision": "e1b93080b8ce7ca060d5c2b75b1a113d"
  },
  {
    "url": "assets/js/24.1ba82b0c.js",
    "revision": "ddfe772b481fd04acdc1bd0fb004769f"
  },
  {
    "url": "assets/js/25.87d4709f.js",
    "revision": "048be944e1b05a7bb426be1ed5fa36fa"
  },
  {
    "url": "assets/js/26.12fde600.js",
    "revision": "0ba5910339d51096b043d34f07067c6f"
  },
  {
    "url": "assets/js/27.ee291faa.js",
    "revision": "16e2c731fd6fb082bcc4105d2baf32a6"
  },
  {
    "url": "assets/js/28.1af379cd.js",
    "revision": "96b934e4a52f72de426a5fd41391f5c3"
  },
  {
    "url": "assets/js/29.7919293a.js",
    "revision": "6ccba1b99763a54a4baf78a7bc8d22aa"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.8cdbbe92.js",
    "revision": "3d3d2a4c51d7cf4596ffd01054888a7c"
  },
  {
    "url": "assets/js/31.cad0811d.js",
    "revision": "4db8199bcfc5134076ce95e6e1be4bf7"
  },
  {
    "url": "assets/js/32.e50b2ca2.js",
    "revision": "5ccf3a5ed7553dd1ef43911eaeabc813"
  },
  {
    "url": "assets/js/33.bf8394dd.js",
    "revision": "5e66539bd894c085b1dafcfdd527e546"
  },
  {
    "url": "assets/js/34.a3d06e61.js",
    "revision": "d34f3881c45b4f4e4f8d5332a0e87f2d"
  },
  {
    "url": "assets/js/35.885ead57.js",
    "revision": "843663f0f54fa5740babc7a274061eed"
  },
  {
    "url": "assets/js/36.7d8e7fb8.js",
    "revision": "2ee31d0d7c3bba106bbaec4bc2d3eed9"
  },
  {
    "url": "assets/js/37.fc8f3440.js",
    "revision": "1f60fed9c958fcda97ee50ea9373c8e1"
  },
  {
    "url": "assets/js/38.3eda419f.js",
    "revision": "9dcc13648cef704d7c8f1b1f6a502832"
  },
  {
    "url": "assets/js/39.18afcaea.js",
    "revision": "b52686499d7669d36bc332096017fd60"
  },
  {
    "url": "assets/js/4.573c146d.js",
    "revision": "9fc6447ad15ac78b3315e46666285bdf"
  },
  {
    "url": "assets/js/40.21bee30e.js",
    "revision": "1b000b2685fe9f15a6af7f474fed6279"
  },
  {
    "url": "assets/js/41.6b1f874d.js",
    "revision": "77ff8844412f2d98426c57b238cfcd80"
  },
  {
    "url": "assets/js/42.2dfdfc64.js",
    "revision": "1bebc6c6fea743c0407605771cccb58e"
  },
  {
    "url": "assets/js/43.b361eaf1.js",
    "revision": "6dc6f489f034cddfe651e16cff98374b"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.8bab06a3.js",
    "revision": "9b562bf4bd09bcea99b135475af045df"
  },
  {
    "url": "assets/js/46.0b619f56.js",
    "revision": "b1338174992a705c4d79ffb73369f182"
  },
  {
    "url": "assets/js/47.4ed119a9.js",
    "revision": "eab3eee2c81f62c68205e6fab81b208b"
  },
  {
    "url": "assets/js/48.b5b8f3f7.js",
    "revision": "244b59d457292b2ff38f52f07e93e9ec"
  },
  {
    "url": "assets/js/49.a7935d22.js",
    "revision": "02918b474a3107a43f89c2379eaefaae"
  },
  {
    "url": "assets/js/5.3cd7d416.js",
    "revision": "aeebbbc7a19a7395cee07e1f977b2b4c"
  },
  {
    "url": "assets/js/50.8eb9b939.js",
    "revision": "f56bc6b6908a16560ac6d22e380fbe11"
  },
  {
    "url": "assets/js/51.314f1ccd.js",
    "revision": "d0fabdc1274d77a8c4335cc50192beb6"
  },
  {
    "url": "assets/js/52.9b571702.js",
    "revision": "b4a9e400595cdf0d54d8dbe17d7754d7"
  },
  {
    "url": "assets/js/53.6cebf6c2.js",
    "revision": "a914ff23b5db06908813dd90a86524d9"
  },
  {
    "url": "assets/js/54.abf08e5f.js",
    "revision": "291baddcdcb82cb558a5d70493ba1ef8"
  },
  {
    "url": "assets/js/55.fcb89d4e.js",
    "revision": "18dafee29dc3b24a70946c87ad5e611b"
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
    "url": "assets/js/58.0b466a8b.js",
    "revision": "0e873ccb5886c9c108fa0e651374f304"
  },
  {
    "url": "assets/js/59.9bfc9e84.js",
    "revision": "9d591c1d67c3d2d816653986777defbb"
  },
  {
    "url": "assets/js/60.4d8dd5ce.js",
    "revision": "3ba990ee0f8b1a968f6c02cbf319f842"
  },
  {
    "url": "assets/js/61.02238477.js",
    "revision": "8f9e514067e4979f71d449e6cdb43855"
  },
  {
    "url": "assets/js/62.d6e9a752.js",
    "revision": "05b9185f1d08a481e4d704f15769f2ce"
  },
  {
    "url": "assets/js/63.6ff26cde.js",
    "revision": "a89d5ac140a133a1ebcc21fb18d23566"
  },
  {
    "url": "assets/js/64.ac97bd05.js",
    "revision": "695b65abc66fbe05039d10c9b18a205d"
  },
  {
    "url": "assets/js/65.59291af0.js",
    "revision": "b54d58d5ca0f3bb78ea38d0b760a0fd2"
  },
  {
    "url": "assets/js/66.97bd3124.js",
    "revision": "3b47a29932bccaea0bd52201de4b4cfa"
  },
  {
    "url": "assets/js/67.ba26e7d9.js",
    "revision": "33f27e3db00fe653cc8891a5a5066718"
  },
  {
    "url": "assets/js/68.76b6dda4.js",
    "revision": "c6c8ab14e28d4e140f45a820d3f4820f"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.5f75f506.js",
    "revision": "5f2113525645ccd8ffb10814c04bee12"
  },
  {
    "url": "assets/js/71.3d3f938f.js",
    "revision": "05e73ca1ac98595e91ab8ab4a1c19a56"
  },
  {
    "url": "assets/js/72.e5516801.js",
    "revision": "94ed2e06825561a85d1696b0391aa840"
  },
  {
    "url": "assets/js/73.727ed720.js",
    "revision": "c571b0911486aac4db839285297d1b24"
  },
  {
    "url": "assets/js/74.aa15556c.js",
    "revision": "6dc3dd51b0c01d7711e2a98dfa8750a3"
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
    "url": "assets/js/77.4273c112.js",
    "revision": "0f380833f2fce79de46dc438262867c2"
  },
  {
    "url": "assets/js/78.e0a84978.js",
    "revision": "785fd8313d404c5ec7218e61bcf577ed"
  },
  {
    "url": "assets/js/79.0681bafc.js",
    "revision": "6d9150b7e5dcf73f00656c9f2a2b4c05"
  },
  {
    "url": "assets/js/8.3e1bc03d.js",
    "revision": "96228a007df07c69e259454cdbc91172"
  },
  {
    "url": "assets/js/80.f0c60f93.js",
    "revision": "e429edad1eb2dd506dd04e52e2ca18c7"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.5d9aee4c.js",
    "revision": "e94c308dca0890079ddec82e05613892"
  },
  {
    "url": "assets/js/83.f34edaee.js",
    "revision": "24b78490e6ee78b7204f763d8e9a68c5"
  },
  {
    "url": "assets/js/84.6704a605.js",
    "revision": "6233e48b61a849ce3ccf5588bd0ad83b"
  },
  {
    "url": "assets/js/85.deb360cd.js",
    "revision": "4248ce3d5906d23b74a70b907df2a5ec"
  },
  {
    "url": "assets/js/86.55817c48.js",
    "revision": "0ab838773d15c1023382e66a56e8e780"
  },
  {
    "url": "assets/js/87.d358db3e.js",
    "revision": "c3aff099161227934746d1d953495185"
  },
  {
    "url": "assets/js/88.983f7295.js",
    "revision": "39cf9cb4715afe85691e6fca46969d5c"
  },
  {
    "url": "assets/js/89.4ebda9ff.js",
    "revision": "d7cd8757778b7fdaac45e8c3511bb5ea"
  },
  {
    "url": "assets/js/9.8e40cf38.js",
    "revision": "e3459eb5a222e56ff2587e9de2bf7dfd"
  },
  {
    "url": "assets/js/90.1361de2a.js",
    "revision": "7ab67cddc183658461bf7299407ce85c"
  },
  {
    "url": "assets/js/91.7acdfb15.js",
    "revision": "7ec999586aaf7a0b0d811deee905ca06"
  },
  {
    "url": "assets/js/92.6d3c7028.js",
    "revision": "25b6df8f4b3474317ec12c09fc8ba123"
  },
  {
    "url": "assets/js/93.27d20134.js",
    "revision": "318599f5a15dd1dedf1d5e370c5d2018"
  },
  {
    "url": "assets/js/94.b857a3b4.js",
    "revision": "0b99f0551bc531cb638f26d29c11c8ab"
  },
  {
    "url": "assets/js/95.78d0100e.js",
    "revision": "e9dc36727c6856c959443e9e5d6809fd"
  },
  {
    "url": "assets/js/96.c6f5b715.js",
    "revision": "b1da8551c264499d4f8e888719818fcc"
  },
  {
    "url": "assets/js/97.ae5f652b.js",
    "revision": "79774c492ce1367b1a54b14edc4d2a3e"
  },
  {
    "url": "assets/js/98.97737ee1.js",
    "revision": "29bc55f51f5248c50d191562a59ea6d8"
  },
  {
    "url": "assets/js/99.d38a22c0.js",
    "revision": "cade4177a458ad662b2a61df3f1950eb"
  },
  {
    "url": "assets/js/app.f122ba5d.js",
    "revision": "42486e994b0d6594ab9b2d8cdfaa0e24"
  },
  {
    "url": "assets/js/vendors~docsearch.30132158.js",
    "revision": "18191eec1f71a42b309687221e2a0bc9"
  },
  {
    "url": "index.html",
    "revision": "69ce5d6f37ae0d387eb4db5f688c62ee"
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
