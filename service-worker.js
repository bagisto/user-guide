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
    "revision": "db1d7611b11ea9e264c43914af005b8a"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "e3486ae8393b7208649fafeb056166f1"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "1e534a6b5ab45e02cd86fdc32ac13488"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "e4421481408ed4684c1bbb2ace81e68f"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "1504979b887959e22e8d5f5cf32873ae"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "0afaff545743e020aaeb2712e8da277c"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "75c9b2b3b52501dbcb60e9965704c29f"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "a91a6c7a0fd591f7ba18c50951915b5d"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "3a5ce054b6b1692e25c3687089ed65eb"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "292a8e9197715d7d9f8e9ba4944b5d1d"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "bd96b03b24c8d9644fb6d8031942516c"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "9e8c8a79661f7ccb6c47ac906f31d3ee"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "8940b69a8c06310d76457ea5b8d3d344"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "ce796ffe8596b42eb187a8146d6ce577"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "c8c654d977d46eb5c43fc6c76dcdac3c"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "0857d2b6cb231d61ebbefc6bdef98bc4"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "623ea9a6c0cf6aee7c738cf675ea3da7"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "e33f4f90ebd081838dc094a71c769359"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "77f2eeb3957e96540f4b17b1a1a3d840"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "b32ad2ba88bb0adb745a3acf93aed6b8"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "e123d7e5a5534640e62be306b2e01ea1"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "ad1d2e8aed5ddd6bb364d8f5ee3b1a2c"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "bbe0e37b996941013cce9769dd3e4324"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "c1f23107385f39f5dc7db95814fdabfb"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "e3a2bdda74ea8a1d6cff80c54ef1e6d1"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "181f4ad8c019b6015c0063bc09687a03"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "4521810fa0cf1eb20528c0b7f3827a4d"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "a6a49c5c72ab7ab4da6048048500ff14"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "c2bc536b97e2f2b3bdb017413d870955"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "6d96ce3aea3022522a93db714c24201e"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "03e94bc9919475d7d8cf646d74bc256a"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "d50dd8eb26ba2a46c725f91f5d501dc2"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "bd20a43c9482ea7f8b7515928f32b037"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "d4295ee6ad7a5cb43b06b06398d5641a"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "e0bd8d1dc7ee4ac72d1cadb90c62b593"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "c977f4c78406945f9c6debab457455f4"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "d0995e0a9ddaf6f5fd9651c89910cea3"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "44ccb5ee3a999911e7ed750832854a8f"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "ddcfd80a4a3af92d2373e6b8c9d80359"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "7d5e8217fbc913a056be415903dadd9c"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "898f7ef98246239f2337b5b30f6facf5"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "c9ce30397b40addd3f7f088273dba479"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "e2546d1738aab6b3ba3ea21006894caf"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "c91e14846589137fa9d100cd0db704b4"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "dd5132b900025f001b92c5eb968054fd"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "faeaa4ff1ac0c7c2ad1a460edb5fc23b"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "deb971a9e454d698da00fca57b7aecd9"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "db3cc4b50d0fbf052b5db9a415063d87"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "cf1d57f6564686aea574edb1608ddb8c"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "46b5e1f21e6e778370acaa55308b9d63"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "32642339cf1518d2c3d3f16a7ea8bf91"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "b7c6623e353afb4d2d4ae816e2e495de"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "25ed6a6351032df51c3640a378316673"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "896615a4556acb5a9646899e05dfa347"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "beddb25c9127d0ded448a0bb53e667a1"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "10e3d85d81fc6a3817a020d5a63fec02"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "91e8a1fee410fd2c5a4f3f8f1257bb8e"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "836e58b0c8c1ac786968c15cae94e7c0"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "6308d4cb92ace6d39dee19d474097ddf"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "3bfc94f425a27e1a842c2e72c00539c8"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "cd502861df4657fdfe6f064b739d5b8a"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "e5ec7a5850e3f8d116febc58b14d2adc"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "2bc65d98e9714732d717ff3ed4abd769"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "48ec10eca29f7b47d447a24e6ab9385d"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "2a4d91dfd6452c2c91437c689f4811d0"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "160ffbafd56bb6540a166ccefe6c5b9c"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "737fa9b2b17f73203a1cc5112f44603b"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "2c1d2855be1aa9817399f169fa2c9810"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "4b09a963103ea2b97000cd89c452f06d"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "5e1e9168ada04b5765f35995635dcacb"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "81b73944f09d0f43bd79c5ffd10e4b7e"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "ae3ff653c1f7f8e69dfbc9b7a9c0c82a"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "b3b32bef2379056e925f87b8d4377140"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "051c8d0d78b8a09646bd42a0c2fa4fc7"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "2fef61138b7365ede159a6504175c840"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "fff04c8fe2f5353d62f392cccdac7dd9"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "149015fc0d87ccb88c9e5db7b6526585"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "04cdfa3272d65c0c0f7b15245ee20c61"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "e91bf6776340cced1d73710b7a01529a"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "a26ad9f1fa832f40ad3e795f87048cc7"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "86ced48bc4f9f0a1383c1ad0f3dcea35"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "b21bf7faf80962e7264dd69f5bc897b2"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "9fdd41ab46a4ac668ac96def3abb142f"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "87c7f14b2d634dd859cb9484a896b159"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "6c43a23fcbb292f8110462d217ce44f2"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "470440dfcb34eb2037423b3794f9ebf9"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "f3c0aadcf75c3fba77a3488cfb773f74"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "8cb06c7e29b2b112871c8244a6f0df7b"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "e1e582c8fa21c2604861651290959829"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "6d206a9b4e5d67dc2f14c2f8647f3325"
  },
  {
    "url": "404.html",
    "revision": "1576f20807364e6d88e22f713c6d474d"
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
    "url": "assets/img/applyCoupon.1fd0032b.png",
    "revision": "1fd0032b9015a51ef289c19eb6a0a09e"
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
    "url": "assets/img/checkoutPage.d39fa003.png",
    "revision": "d39fa003a222d6dddd99ae40363bd2ca"
  },
  {
    "url": "assets/img/cod.a12ca48a.png",
    "revision": "a12ca48af4446c77d697d6a91c4859a0"
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
    "url": "assets/img/faviconOutput.0af4ffb5.png",
    "revision": "0af4ffb591592d1e7893fc1a040730ca"
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
    "url": "assets/img/logoOutputs.3be56cf8.png",
    "revision": "3be56cf8cce9f1405a499e2c5cf7ed82"
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
    "url": "assets/js/1.768f47ba.js",
    "revision": "44a0cbc04245b59ef2df016f29f9b8f5"
  },
  {
    "url": "assets/js/10.25c792be.js",
    "revision": "57325d5c69a7eb6a31e573757550119b"
  },
  {
    "url": "assets/js/100.bba3ea5d.js",
    "revision": "0b48923cfbf9d9407a33884597583fb5"
  },
  {
    "url": "assets/js/101.85a3e1fb.js",
    "revision": "4a9fa442c824fbc57971e38f468705d2"
  },
  {
    "url": "assets/js/102.c7894a18.js",
    "revision": "fd2c3676a4f5913dd51d4d10f084c88a"
  },
  {
    "url": "assets/js/103.a3f1bc14.js",
    "revision": "d0aaa35f535c0eceeeeb6f7705409003"
  },
  {
    "url": "assets/js/104.15c44b0c.js",
    "revision": "4aa00e7e190e759c1220951b0a88f6c6"
  },
  {
    "url": "assets/js/105.6101c9db.js",
    "revision": "e5569b6a2c22fcb3509addbfb9660477"
  },
  {
    "url": "assets/js/106.aff6fde0.js",
    "revision": "65854613789a89d7bfbddebd9ae6f7e3"
  },
  {
    "url": "assets/js/107.900b8da2.js",
    "revision": "04f62e73bedb977f369250db7050d14c"
  },
  {
    "url": "assets/js/108.d4e7a89e.js",
    "revision": "62234dc63c1af8a6a049b29d6ea01452"
  },
  {
    "url": "assets/js/109.001e4243.js",
    "revision": "ce0d4a4030e28f2d8601a2303bb630c2"
  },
  {
    "url": "assets/js/11.6c652d51.js",
    "revision": "815f54b105aa748ecad6a1b8964dadd8"
  },
  {
    "url": "assets/js/110.fc60578d.js",
    "revision": "340e2b61fd6ed37606f3eb9d4c4b8e3d"
  },
  {
    "url": "assets/js/111.583880a1.js",
    "revision": "30888512a6336a66917cf8241e4feb99"
  },
  {
    "url": "assets/js/12.f324eb70.js",
    "revision": "5555a392ac17fbff9163cb83b41b481f"
  },
  {
    "url": "assets/js/13.710614a4.js",
    "revision": "1743e979934d59630403e1c11a55990b"
  },
  {
    "url": "assets/js/14.60c28ca6.js",
    "revision": "922e22dc6bcf407b450c3e223b1a04b8"
  },
  {
    "url": "assets/js/15.f8abd71f.js",
    "revision": "0994281491514e1fa7f6cd7dbb8c1ad4"
  },
  {
    "url": "assets/js/16.91873e49.js",
    "revision": "cb70d9e7572993aab3ad9ada86735f5e"
  },
  {
    "url": "assets/js/17.104c554b.js",
    "revision": "3d94719fd35e339b4c0cc4bf15ad090c"
  },
  {
    "url": "assets/js/18.390a9d54.js",
    "revision": "7284a5a9347c5f7bc891d41c30e24794"
  },
  {
    "url": "assets/js/19.c0c69b44.js",
    "revision": "1b5f7b9d559b7fc75d6d7c1a5ad6e97c"
  },
  {
    "url": "assets/js/2.3bd7ea9d.js",
    "revision": "109c9ef5ec3f0664e1bba162de58d8dd"
  },
  {
    "url": "assets/js/20.36033e61.js",
    "revision": "55d04daad5704865484f8e040ec0a6d4"
  },
  {
    "url": "assets/js/21.c2e0fbba.js",
    "revision": "e53ccaf9b3d397a44e86e12055d6af52"
  },
  {
    "url": "assets/js/22.d16c3aba.js",
    "revision": "f8d8bf0bd5c8e2f44441ea98de2a92fb"
  },
  {
    "url": "assets/js/23.a7111789.js",
    "revision": "4339e02afeb2244d6e8d4022b31fc133"
  },
  {
    "url": "assets/js/24.6ea4d7f4.js",
    "revision": "19a999df55e271183872109a150daed5"
  },
  {
    "url": "assets/js/25.b1d53968.js",
    "revision": "66fd133424dadf9e0f5391a86fcb0c63"
  },
  {
    "url": "assets/js/26.13eedd93.js",
    "revision": "09fbb1970e79d1499fb98d5fa4cac249"
  },
  {
    "url": "assets/js/27.a2a8773c.js",
    "revision": "88a315acdcefa73c85e935d0e37e6c96"
  },
  {
    "url": "assets/js/28.a628f6f1.js",
    "revision": "0264abf7e2d10dd332e5cea696eb3be2"
  },
  {
    "url": "assets/js/29.114230e2.js",
    "revision": "63733378a89a50b7362be3ffde64d18e"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.f97dfc94.js",
    "revision": "a21bbff820d223f971b343b58c94dc66"
  },
  {
    "url": "assets/js/31.58e6105a.js",
    "revision": "0b9c2972aa4dddb849db799967f5bd5c"
  },
  {
    "url": "assets/js/32.5e72d960.js",
    "revision": "91514db101b150a75263395c253da106"
  },
  {
    "url": "assets/js/33.09c6d25b.js",
    "revision": "e81c8b32166d301889c250e8688a79ef"
  },
  {
    "url": "assets/js/34.a5540e96.js",
    "revision": "91a82db014765bea684d017626eaf31e"
  },
  {
    "url": "assets/js/35.a3f444aa.js",
    "revision": "1101ffc29c0213c50a625c945da4bbde"
  },
  {
    "url": "assets/js/36.f1ae030b.js",
    "revision": "392873c36f0eaa012a4f49f6a83473de"
  },
  {
    "url": "assets/js/37.225f9ddb.js",
    "revision": "70c3ace0b05208626049dfcab259f3b9"
  },
  {
    "url": "assets/js/38.b0e07fb4.js",
    "revision": "92ae1ad230720fb68abd484af50b9783"
  },
  {
    "url": "assets/js/39.6023f13d.js",
    "revision": "16dba4b9a81b82a818219cddd688a90c"
  },
  {
    "url": "assets/js/4.d1023ecd.js",
    "revision": "826c850ad6592ce10f57335d81965ac6"
  },
  {
    "url": "assets/js/40.9cb3cde6.js",
    "revision": "d4d9f80513cc3a343878d5d258bb8d17"
  },
  {
    "url": "assets/js/41.5a020911.js",
    "revision": "436da10cb19377df88d445f07ff175b9"
  },
  {
    "url": "assets/js/42.8048c2b5.js",
    "revision": "88cd2ff01f7859db8d33fb195f5b2add"
  },
  {
    "url": "assets/js/43.e8e79b87.js",
    "revision": "b0a3302b91c16419c8d4643d0ac00c0d"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.e11fc1aa.js",
    "revision": "a092844984145e04358add161de8fc37"
  },
  {
    "url": "assets/js/46.467c6a68.js",
    "revision": "f64417c82e42462bae936f8a702b63b7"
  },
  {
    "url": "assets/js/47.c69736bf.js",
    "revision": "0471db5cba08ab6d2b861d1d7f47ba67"
  },
  {
    "url": "assets/js/48.05b3f6e2.js",
    "revision": "55f210a20925a0eef582475ef1028a5d"
  },
  {
    "url": "assets/js/49.1b656e58.js",
    "revision": "8e922aa2d60a1ff32f87205b3ba14872"
  },
  {
    "url": "assets/js/5.1968a9ea.js",
    "revision": "b6357aadf9a940eaa470c07d86bf4757"
  },
  {
    "url": "assets/js/50.50f88ea8.js",
    "revision": "af09688bec586f96d0731461d3fce4a3"
  },
  {
    "url": "assets/js/51.ca48e9b1.js",
    "revision": "2ba8a913377e16d47acc673ee8ce076c"
  },
  {
    "url": "assets/js/52.af557bd1.js",
    "revision": "b44a3010c752eef8c721f096ed74b402"
  },
  {
    "url": "assets/js/53.1a26df4c.js",
    "revision": "7ce876fa5cc1795c257859aa428275e6"
  },
  {
    "url": "assets/js/54.1a732a92.js",
    "revision": "d2768064ea2fd415f73c64e310071ff7"
  },
  {
    "url": "assets/js/55.e0fca547.js",
    "revision": "e1dc4ec3d8d8386bcadd42ad46d68805"
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
    "url": "assets/js/58.76cc7c3a.js",
    "revision": "64b74d06e42936d67f8cf39f665445b2"
  },
  {
    "url": "assets/js/59.f9cb0b8d.js",
    "revision": "43defaa5b8c525087c67f32cb23ab9f5"
  },
  {
    "url": "assets/js/60.fc65a21b.js",
    "revision": "090dc4a02649ddda445c04d782a05659"
  },
  {
    "url": "assets/js/61.ec550b33.js",
    "revision": "902a9d58bd1daf46f7001c2683d3ffa8"
  },
  {
    "url": "assets/js/62.d24052e0.js",
    "revision": "d8bd3a0f0d2ccc72728b2bf81b92abda"
  },
  {
    "url": "assets/js/63.38b6bef8.js",
    "revision": "ff3faaa9b8ccb46dc6a7908fb6999238"
  },
  {
    "url": "assets/js/64.bb9b35d6.js",
    "revision": "88aeccce9081880401395a8ece6b481a"
  },
  {
    "url": "assets/js/65.1e602cd8.js",
    "revision": "be6fe2fb309e30ba8a062eb9e5249872"
  },
  {
    "url": "assets/js/66.b6562255.js",
    "revision": "9a8153617ace1c389b7da9598619a949"
  },
  {
    "url": "assets/js/67.4df511d1.js",
    "revision": "e9c762f49a208450b95f450a65e85608"
  },
  {
    "url": "assets/js/68.e2264d4b.js",
    "revision": "245930ef9e56116c5ded67c9d030d331"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.9f741285.js",
    "revision": "d05ef720def6c674614dbab59649704b"
  },
  {
    "url": "assets/js/71.3f0e0b66.js",
    "revision": "c2307f8097ace58f1b1fb312a8cce568"
  },
  {
    "url": "assets/js/72.4ab30303.js",
    "revision": "f7d2c3d1c7d48e96df83e15a84533b2c"
  },
  {
    "url": "assets/js/73.3b3bb14d.js",
    "revision": "66d150cf6c3ea9291237d19a2560e233"
  },
  {
    "url": "assets/js/74.ec5245c2.js",
    "revision": "5f34c4291593994f6eb0b3f1bc39fdae"
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
    "url": "assets/js/77.80a50f97.js",
    "revision": "dd1910e8e051c55a5330c2e99ca33cb4"
  },
  {
    "url": "assets/js/78.56bbb9b0.js",
    "revision": "ce6a565fce41775dc0a0a59ee59aafe2"
  },
  {
    "url": "assets/js/79.499b3012.js",
    "revision": "c50877d6ef8b6013fd4d540bcb575cc7"
  },
  {
    "url": "assets/js/8.f86466d0.js",
    "revision": "71a49df20d94d72d5ffb7da101a5d10c"
  },
  {
    "url": "assets/js/80.9424c0e4.js",
    "revision": "37f6547c8d475421df52ad521d439ca7"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.6531c3b9.js",
    "revision": "2b46e48bcf173e98f35d29a9bdbd904d"
  },
  {
    "url": "assets/js/83.49ff449b.js",
    "revision": "29856bb5614cd9038ef2fd988cf1b87a"
  },
  {
    "url": "assets/js/84.5c3ed53c.js",
    "revision": "415a9a5d33f2e7302dea2de624194fdb"
  },
  {
    "url": "assets/js/85.bc6765d1.js",
    "revision": "1fa2244b805d55f898f1fd38e9c04e24"
  },
  {
    "url": "assets/js/86.bdf04796.js",
    "revision": "a0a11e5623431d12476a23d5915485f8"
  },
  {
    "url": "assets/js/87.74ca3625.js",
    "revision": "785736709f0ed2acc086fa83616c88a1"
  },
  {
    "url": "assets/js/88.969ad35b.js",
    "revision": "c21967167762e653bf6d10d4ce4fe5bf"
  },
  {
    "url": "assets/js/89.2184a9fc.js",
    "revision": "553d0b81fbf984b55eac7d01f5d29524"
  },
  {
    "url": "assets/js/9.65fccb55.js",
    "revision": "4f24f0c488375c2d5800a8ffc2395931"
  },
  {
    "url": "assets/js/90.07f5a9e1.js",
    "revision": "b7ef3427f430943da85537febbdeef23"
  },
  {
    "url": "assets/js/91.c53c1502.js",
    "revision": "02ab9d674116258cd56d0c99b4a1ccb2"
  },
  {
    "url": "assets/js/92.48bfba78.js",
    "revision": "a7942edacb93a179c6fef9dac627c2be"
  },
  {
    "url": "assets/js/93.ca97b85c.js",
    "revision": "251db0b37d51ba0816bacbf5e33d5152"
  },
  {
    "url": "assets/js/94.4318cfe9.js",
    "revision": "d178a9b6ed7d6601cb11e96a2f9efe12"
  },
  {
    "url": "assets/js/95.60ff70de.js",
    "revision": "e5a703dfb866d59fe508fe912a56d887"
  },
  {
    "url": "assets/js/96.6345bb94.js",
    "revision": "77c15789cfb5ec9f479b3a1329e06494"
  },
  {
    "url": "assets/js/97.7c2ee87d.js",
    "revision": "a633580b6e6873c9f310520bcd8bf338"
  },
  {
    "url": "assets/js/98.187ee1c8.js",
    "revision": "0cb9fe7f441bcd6880040a934319d48e"
  },
  {
    "url": "assets/js/99.f9d1e862.js",
    "revision": "9288da02de24c9ba98da6c1cadfe195f"
  },
  {
    "url": "assets/js/app.bbddae0b.js",
    "revision": "3a21eb40a9c6e1407365da2827185519"
  },
  {
    "url": "assets/js/vendors~docsearch.c6779702.js",
    "revision": "2bec7c80e707e398f20bbe7dc25da4e8"
  },
  {
    "url": "index.html",
    "revision": "47eac1c6b54a06d4908e0c4ba01ddd20"
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
