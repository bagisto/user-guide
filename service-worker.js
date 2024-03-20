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
    "revision": "594cb9139cf574332814cd6a28f47a74"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "86c7a2336c683bf648f7678acb683d4e"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "ebe212e121e5bb7f00748e5702705ebc"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "67346102ab2b5533df70ad1efdc9be64"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "fb92a336c76aa23eca220ec0d85b9307"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "f448646a2fb37d22bb3c0b9f4f7e192d"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "5a1e1cfe68648a242790c3ba2fba7aeb"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "c056d294dd0cb9e4809623f25a4c4bf4"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "d032666907f53d9cb2c9d70ca7bab65c"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "427b107be92895777fc51111f837f2c5"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "63306597dc40fc5e99bb9e9068ad172e"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "e6f5e20b1a8c6a58ff3c9bd139d1a8af"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "c2a0ae9630379aa0f0739655e9d5a620"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "f2f1d2b47a3aa16b9e879dc107a8bf9d"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "a087be8e83822887b8c257fda01e02ca"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "f3c31cba5fabcc62f823424f2d1bdc61"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "694f98e2b7924befdbf78f966a307aff"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "20617cf05ad53e1d36892cdbdc16b292"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "bb1afaf4018d2abc18cff52de821f8df"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "4a31050080420585356af47f21f18ffb"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "cd3d7c880da18d8eddd0d6b122aad676"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "98fc79c63bc917edfd27305e7f76ab61"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "62ce1eca4c082a40c098f99e18b986d9"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "e4f25fddb1640cf89b66d009451a0e25"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "059c7812f065d98986d3e8681d584b41"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "f77095642c66d9774301b7acb2381916"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "7bfcd565e152c6606fb3f507a2d69dc3"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "514089a41d45648656e41ea24d4fe401"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "280cf0b3baf6d1e735a50d76910e2875"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "2788529a91005ba983d98f1d9dd8a4f9"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "0c7fc6368ae2df547d43b43d31116741"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "4aedc269f5deeec1854a5a1a63ce58ee"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "2dcaddb34b2c6187f87fdbe840aa0652"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "2f7cd47aa671b50cef97010cdc901d49"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "7a14cbb6e92a754045186fd4dc2b0813"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "d0d5380a23f4ba9c2b47c3e3baa2ac48"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "aaf60f36d5ca5eb474c2f941e426be24"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "68d9137ee6a84fe14a3ffe18ce9baebd"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "f955e14d379530f641f8d3e9f03cbd42"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "4f99c3528088ffb20f7008c899f1dadb"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "32625fa99a4f9f345284f7d6d8841edf"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "a24d7be87cafca5351ddf82236dd6100"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "f68f74778071b0940e479b3ede13a1bf"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "f4267d91618321d5200b7b2c8c7ab645"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "ab8237747768d2fda356fea88372e6e6"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "b34e564d6e44b4c722a7bbd018a217aa"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "fe6eeb20ed33e67a90ea51aa08ee9238"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "ecc24f7aa82e8bf5f70f46b3838ead47"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "053ca80e407329adc47d9dd1a2a04079"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "d1737a40fdc16ea8cfba7a56231c1e95"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "33aea5df4377aeb2c4c8dc52c3a22126"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "c925c9c6b70955e34d88883dbaa4a134"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "72a6e59c6568fa74634d033dce086300"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "f6efc30f52ae2cc4c6a81b141a4aab7e"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "5ec3f48f4123233cb1e54b4f71e028fe"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "1755406f7f66dc4d02902893db429444"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "01b0fa9a64f7da9f13b5fad8f090c302"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "bcc0e84e87edffe46a3bca2cff8c0210"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "d35075cd62cb53d5c6a6801f8baadfee"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "8bb73df0dafd6e0b80842bc8401c3709"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "974283004c5da30077b82d57ae255a1a"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "fe1ee64c02d80412a9cc3d26eb0cca12"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "28354fc2da401cc9f29798455b076532"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "06cf15e987bd979af18a3aac7866cda7"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "76b50c90309e1875c73d63033d2c32cd"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "6d5ceef555629a34ca9258844f7b9104"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "823f83b55095a277c8a854d1b872e019"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "36629fea60072df6d1658bd51438e4b2"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "7b59f9c7ba6097bcdb596fde3c4b0df4"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "3e5530ab8ceb15a89db7e16fe701bd16"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "ddf0615bae617688715fdfa5ca6347b0"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "f4cd1c24f0ce0239b0f6b72ebdf4d8b8"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "6bab949cdcad3a437db86e917a31c1e8"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "a9820297ada59c4fbeee07ce13e04f6f"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "6a6d7492cf717628ab23d7af2d799bd3"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "a306c91dfa154cf11a76ae4c6317bef7"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "8f64915cc2932ef189eeb2cd3614dc2e"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "fe32d66839ad4b84c596d67b56ce87c9"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "e635a15e8a206701a53e27af6b1afe49"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "dd59ce603d6fa966f4252c206dc829b8"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "64e6e84aa8ea9b762bb6f69718d056eb"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "12ef177c7b667efbb8016aeb9a3c5d32"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "e337d429bf5be9c6ed906069f35ab827"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "36302d531b9fc92b45fd591a7229d093"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "fbb38f9bac87767ba20cbd338acf0002"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "aabd152479391d0d25b6936841d64bdb"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "bf13b88a4d5962188ca3ca02dd7381f1"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "aa15c2bc259760b97cab3c3d981ff281"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "3816fdd7d484dc76320d2a135bede283"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "36fd88b5ad5f0930a177944c9ff23a71"
  },
  {
    "url": "404.html",
    "revision": "ecd82fd6b7741b405b72efe72b351001"
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
    "url": "assets/js/100.fa3c41ee.js",
    "revision": "c6f1f700c515b2105a68fc5884fdd450"
  },
  {
    "url": "assets/js/101.965f0205.js",
    "revision": "ff0da636190bdd59702c11f0f9757c96"
  },
  {
    "url": "assets/js/102.aa9eae49.js",
    "revision": "2a63545f973ed981697d93e351fe007c"
  },
  {
    "url": "assets/js/103.2a0ceadf.js",
    "revision": "8997172e6e2781277398ae0079b89338"
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
    "url": "assets/js/106.8c6850a4.js",
    "revision": "a52b41b9aa34f39fd4912b1cfc395148"
  },
  {
    "url": "assets/js/107.616d0baa.js",
    "revision": "106655a19488fce593a01f5fe547868f"
  },
  {
    "url": "assets/js/108.b72bc08d.js",
    "revision": "03b5e13ff89197ca4cd0e0322ecb6078"
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
    "url": "assets/js/110.337d07b8.js",
    "revision": "cb7f81865789b404135076e962ba12f1"
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
    "url": "assets/js/17.fdca0192.js",
    "revision": "51638a4a644b0d9c33a27c661a0086bf"
  },
  {
    "url": "assets/js/18.5d403fa8.js",
    "revision": "6864b74cf5f51ef96be1b2a82725753e"
  },
  {
    "url": "assets/js/19.63e6417e.js",
    "revision": "7bbd92cb4314eefa53635edaae8a2002"
  },
  {
    "url": "assets/js/2.bf9162cc.js",
    "revision": "6def0ca566118498eadd4e1814cf2584"
  },
  {
    "url": "assets/js/20.5c2e2cb7.js",
    "revision": "b4d28737ec4a84dedd22cb69cff26994"
  },
  {
    "url": "assets/js/21.77073ea7.js",
    "revision": "d734ff8073010aa4f83c51168f1cfe79"
  },
  {
    "url": "assets/js/22.aa7fa724.js",
    "revision": "4850b7d31c9aa7c964a04d4138987ad0"
  },
  {
    "url": "assets/js/23.04c9680c.js",
    "revision": "7f9fa7ab5694004040ea90c668897d42"
  },
  {
    "url": "assets/js/24.34ee975c.js",
    "revision": "b922fc4d1eb34905b9575843b975ebec"
  },
  {
    "url": "assets/js/25.27bd6730.js",
    "revision": "407447c6a7383b3aa36234650df74b17"
  },
  {
    "url": "assets/js/26.04d581a1.js",
    "revision": "588685853a4497614c8d353882330cc4"
  },
  {
    "url": "assets/js/27.d1f3b0fd.js",
    "revision": "1d04cd1bec743007335a17e965c348fd"
  },
  {
    "url": "assets/js/28.4f5e9b4a.js",
    "revision": "286f1814536190340f6faf178899339f"
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
    "url": "assets/js/30.64a0127d.js",
    "revision": "be7bded9987f6db8631f051799bbcdc4"
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
    "url": "assets/js/36.72cbd177.js",
    "revision": "731b9aca19ceaa499d62ee1b507d646e"
  },
  {
    "url": "assets/js/37.ffa094af.js",
    "revision": "121051c40b3efa18d2945f68ce39840b"
  },
  {
    "url": "assets/js/38.2ab39b2a.js",
    "revision": "314ed10f693605916bd31c8332d77b69"
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
    "url": "assets/js/40.cd13f8aa.js",
    "revision": "78956b9a2046804024b491bd7a756caf"
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
    "url": "assets/js/43.61afd980.js",
    "revision": "0ed15e60873fc18f0b8f4d08c6b21f9e"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.9e96332a.js",
    "revision": "8857f479097ebfe6d695b16b26e55b23"
  },
  {
    "url": "assets/js/46.9f3bdc03.js",
    "revision": "a7a42c51c17c5b836ca362a00b89a0ca"
  },
  {
    "url": "assets/js/47.a6a09a13.js",
    "revision": "402fbed4ce404825a93f4205f4a3366d"
  },
  {
    "url": "assets/js/48.9d82675a.js",
    "revision": "b2a4b20480ec5d292541f68d850d48da"
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
    "url": "assets/js/51.b5ed6b16.js",
    "revision": "dd37f737050c3bd3a3bdbc10647654be"
  },
  {
    "url": "assets/js/52.c21eaf23.js",
    "revision": "c71e27c32e2cc054cbd5e1d0235ed359"
  },
  {
    "url": "assets/js/53.25ca15c3.js",
    "revision": "8319057b45408b80b9d7f8bb0cbde13c"
  },
  {
    "url": "assets/js/54.173cde91.js",
    "revision": "e815c715fcced24d8c864da6e10d673a"
  },
  {
    "url": "assets/js/55.309aaee1.js",
    "revision": "7744f86eee463ede3cca1c42b6219ef4"
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
    "url": "assets/js/61.dc38fbd4.js",
    "revision": "d8e9eac6aabd1ac6c81e7409ab6e6b6c"
  },
  {
    "url": "assets/js/62.f27c3a43.js",
    "revision": "2ae24b3220b5fbcf05cd0e804774d7fb"
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
    "url": "assets/js/70.a2cf083f.js",
    "revision": "8a7e51973569f4cfa6a41b931c97627a"
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
    "url": "assets/js/74.96d148ec.js",
    "revision": "e0633139c53f81f439097f184333499d"
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
    "url": "assets/js/78.f6dd8f5f.js",
    "revision": "5ddd0d3972d19dd40d6b85b6e3cbad1d"
  },
  {
    "url": "assets/js/79.6efec5cb.js",
    "revision": "b6d37f3dc7c3c5ba208efe6a51a5c79f"
  },
  {
    "url": "assets/js/8.2a533a7e.js",
    "revision": "c60cbf13eae292082393aea3fd3470d2"
  },
  {
    "url": "assets/js/80.5968dd78.js",
    "revision": "40e2639c4d58c34131f21eb9e4e83bf0"
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
    "url": "assets/js/83.7b945f0c.js",
    "revision": "0db7e8a4afb2d692c20cbbbb2891ea8e"
  },
  {
    "url": "assets/js/84.72624283.js",
    "revision": "8c5f1341025c4534ca568b737b813134"
  },
  {
    "url": "assets/js/85.af888555.js",
    "revision": "0577c8847431d8d4c04ddfc449c5fb7f"
  },
  {
    "url": "assets/js/86.90f91daa.js",
    "revision": "297fb474ca4b55a9e20e5193c396737d"
  },
  {
    "url": "assets/js/87.426e3921.js",
    "revision": "f402a544cfe1a2c9f3f29e1fac444a10"
  },
  {
    "url": "assets/js/88.63584615.js",
    "revision": "f496d5e584d982246b159a0cbbf29ea5"
  },
  {
    "url": "assets/js/89.0720e1f3.js",
    "revision": "85171c77a98c260edeb5cda39287666a"
  },
  {
    "url": "assets/js/9.5e4d9d86.js",
    "revision": "bdd0588d8acddc489010d10a07ac7ff4"
  },
  {
    "url": "assets/js/90.f2c0513f.js",
    "revision": "fcd475f21145f372bbd6fcf60144d737"
  },
  {
    "url": "assets/js/91.d8fc93bc.js",
    "revision": "dd5c32437ce73757c048f40cbfca1a4c"
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
    "url": "assets/js/94.9741f4df.js",
    "revision": "25dcd94ccc033a07fb9a61572dd33e49"
  },
  {
    "url": "assets/js/95.1865b541.js",
    "revision": "4d002857fae286be73d47c4d3276392c"
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
    "url": "assets/js/app.0677150b.js",
    "revision": "09e2f485cfe0dc8688a802712a13b10b"
  },
  {
    "url": "assets/js/vendors~docsearch.d1abde7b.js",
    "revision": "d0514ed9b8dcc7b50d552034f5e4a577"
  },
  {
    "url": "index.html",
    "revision": "9121ba6ff0cf677221ddd6f76da04d91"
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
