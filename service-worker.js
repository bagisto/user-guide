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
    "revision": "d861c0b6358815d83bff250f31f3a1c6"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "fbecf23297639beea906fbdfe1421705"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "3061b2ccf9dbdba264a681b24f67686c"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "16ac0bf2ec580fe9e3f59e1a734203ca"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "5d1e99938398590d7dee6ac5166748df"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "395ab17ec6631290d08fe20b91aa6d1e"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "05587ad822b5e830328b5e787460ef74"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "f2b6d9fc1089508c6df91fc184e2949b"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "927b74e18596d6dc90b0b81be14dd6dd"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "cb50be636b278f2875b45db9d556db40"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "352c9ce74ac2d7f781696ee788afd651"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "5c21884d85195c02f45c84abba69cb3f"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "abf130e052042aa10edaabe9eedb2795"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "9bcea1015c52458312e5bd4f7b7784a0"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "e8a98129814512c1530a51a54f45b638"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "c238ae10a68971df902004bdfa87a2fa"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "ecb0f0dd50b1236e9c3d2545f72a1383"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "255b5e18340b717457a1ac433214b625"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "19bd3289b7f274df0cb9d597594a6be2"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "af8ef7e0665295ea8cb90fef04f7c7bc"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "91d95749f7a2b3b5a8c2f6ab94e76885"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "4d8eb29c950c4dede27a0d8246428b84"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "611513a1eee29c6bb18e4b1f7ccdf8c7"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "b4cf503b90bd33c6ca951707cef5bef5"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "1e1949c1f9249bef27d286f0425bbf2d"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "baddd7fe3c692b1b45484d7b4bbbd913"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "be35bf34a84dd2d42989518567451c8c"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "39f7efbbab3e9f658cdb9b1d760b98ab"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "a5a9cd0285d86bbfe7764334ef14cc4f"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "350a881d499b90b3cbcce86bac1f4e37"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "f0f6292c38fa4e8c10e81b569f2a0285"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "6a4f28cf5dd0bff61d705f683aff9db2"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "aff6c110faeb0b04515e6bcf1ca12632"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "00b7f35995936b5cb0ea265c20d78f0b"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "98fc2ecaf17e5944482bc24097dca6a2"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "ac8782e59f5050db5ad24ac6932cf370"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "4ee6355b9ae6549bf69a1649da57a032"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "7b9a50ecf58d0f22373c10d6bcb3f2ed"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "1a1d4abb8dbb829d0074a0c083c67d90"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "1827f8ca472c033d038871eaac26cca3"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "bd7307d7bd18deb5f61948c0221059db"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "8c60cfbed3d73f56222ac0482c607d64"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "3a3d91b38d82f2b8a355fa9b1c66d0f9"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "4419c89a1af89aecd39b75ce593a4405"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "05c3a9047c88651991361880575de028"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "5a11ee58dd75c2efbeb362b933d55cbd"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "d5fbad4b03fc78475eea68b719efe2d8"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "b3c93dda8d348c0e6380a5b66117064d"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "059bcc460bf351ddc12ccaf0485c7150"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "cbb76112ce779a0d3c2daf9afefcd545"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "e58ffa3588a5b026609043dab90d0afb"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "3fd790acf8ab7abef9f72e0110094d84"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "6228262b4753e192333b0d0d14b2a3da"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "d6215a1b15b263d075ef3cb19fe4811b"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "58181e61e893a86437ca2bf3fb8085ad"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "a428713afc591f3346a87665c616a888"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "7939a2f289dadcd553706aafda5acca1"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "733508329e2fa9f70470e17d94b3b97b"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "0bafd3311c1932ebae4c9ccf79cd8e16"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "1e98866d1b4acc6f7ee1fe71267808db"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "f3e4b8db875e2d9826516ecb721d6ff1"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "3cd6c75f28dc09ccd6c4bbc110477ee7"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "887e895e96791b9224e76a2021a2cc01"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "fe493b3cc78076dadade7fd665027184"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "bf5bf287fcb30e465f5d1a49b599d578"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "cbcb3cc1d2b2c54f655e8782eb074eed"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "8795407de5abcdbee42f044fe7658f4d"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "77852e062e8d49170e851172c0b23009"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "38d0e5e41ed2232c1d13121a6aee9521"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "cdfc581061a829be0e2d87ceee577d43"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "9e4e7c77e06c2e1b478885e647e95b0f"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "0dba5934e0aac0475e1b83768be5ba66"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "00982ff27cef9bc61348ef91ad775c20"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "1ee4f0b0ff9ab6d56364502bc4880dff"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "33e9137ec76b8f5abd05b6b81025e779"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "6b454cdfaca21f3d4607b38bcff091ce"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "e7250d72c5f1b8d8d17d831e80396aea"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "c4d39fd3de3b1f06c0c261d11f5ff479"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "b5d48caae8d501be8140a5347ce7034c"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "01c92262c870f9fd803785e01a6befa1"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "b8b6f59c620d499760ee8c9f296c9d29"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "2689e38a01a8b8883291c7c4d1c13e55"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "77e5185c979d4824e04052903bc609ce"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "82851b4111bd4a7f3494634207c8137b"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "a899d1047e2f0edd611a22dd6f1c63eb"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "223420b11001e77cc09269dc67a44522"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "78ea62e39fe60d5dc84f01849d103260"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "e53058db750f6b7ff0e004c3c9a96757"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "d1ea451d149251987eda7615f1c89db0"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "e00940b5a455d2acac0f2efb30ddd5c2"
  },
  {
    "url": "404.html",
    "revision": "fdaa59043cedbd89d55a83be7c934a57"
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
    "url": "assets/img/createRefund.506a06d7.png",
    "revision": "506a06d7389292b0a56e9fabd42f6d24"
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
    "url": "assets/img/frontendOutput.56b442a7.png",
    "revision": "56b442a76c3d3e1e3e01a7cfe8e78ea4"
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
    "url": "assets/img/refundGrid.5c0c2bd8.png",
    "revision": "5c0c2bd82623672872582a65d62e2aa2"
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
    "url": "assets/img/searchField.08f9e264.png",
    "revision": "08f9e264d107ffa9dddc46966f30df97"
  },
  {
    "url": "assets/img/searchGrid.b19ac356.png",
    "revision": "b19ac3562dd281c21f93eab0ee009d44"
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
    "url": "assets/js/1.4c7c1840.js",
    "revision": "7eeace4bae80c795d3d14a1c628b8d05"
  },
  {
    "url": "assets/js/10.ef9a48af.js",
    "revision": "4fdb5e6d5f9f26d6e9c1370372fc8a85"
  },
  {
    "url": "assets/js/100.92df403b.js",
    "revision": "9e18e77d46aeb338b3e75870c4b7025c"
  },
  {
    "url": "assets/js/101.0c5df709.js",
    "revision": "c705da684b6feb2a512ab31746c51ac1"
  },
  {
    "url": "assets/js/102.b4eda8a9.js",
    "revision": "418f291988beb380a2e2cdba852d1d83"
  },
  {
    "url": "assets/js/103.77b18c85.js",
    "revision": "93f6f9ae4f0a7eee090fccab7caa4820"
  },
  {
    "url": "assets/js/104.765b395e.js",
    "revision": "54f958eb048ab288b0789263ce3032a8"
  },
  {
    "url": "assets/js/105.a47c5006.js",
    "revision": "56c4e09ff3d489ee001b561a21aa235a"
  },
  {
    "url": "assets/js/106.6c89b269.js",
    "revision": "b8b3f93ee94367fa28389f8c60b56b73"
  },
  {
    "url": "assets/js/107.11e31444.js",
    "revision": "02ee6e9068a15ba0788d2eae3bde0984"
  },
  {
    "url": "assets/js/108.f9c65963.js",
    "revision": "b8ff6b011b1ce26b5c8b330967694101"
  },
  {
    "url": "assets/js/109.ef93a734.js",
    "revision": "21241a960a96b34aaee53ec3b36cf48f"
  },
  {
    "url": "assets/js/11.18f4dabd.js",
    "revision": "593278bf421837a84d71962d08ddfd9e"
  },
  {
    "url": "assets/js/110.ebd7b4bf.js",
    "revision": "89d3538177bfc57f5ae200559b39da64"
  },
  {
    "url": "assets/js/111.38d3bcaa.js",
    "revision": "335317961279b54256236596062ee01b"
  },
  {
    "url": "assets/js/12.7a61cb16.js",
    "revision": "c685a024f2537ec1513f2d3a36ebc292"
  },
  {
    "url": "assets/js/13.17668272.js",
    "revision": "1bfe87ccaff0b9ef401810f6be690dfd"
  },
  {
    "url": "assets/js/14.c59d2aff.js",
    "revision": "d71629f9de63ca967d87b8803a63ab2f"
  },
  {
    "url": "assets/js/15.2041950f.js",
    "revision": "6540d4ed5c5ba7530111d28caa3d2b04"
  },
  {
    "url": "assets/js/16.487b0733.js",
    "revision": "1989606121d5e536667706dac8b38b37"
  },
  {
    "url": "assets/js/17.b1d45956.js",
    "revision": "22de63f3287fce1a331b5c45f0566ed4"
  },
  {
    "url": "assets/js/18.f6236af9.js",
    "revision": "1c1334da43c837ee30643cc2a8db3e4c"
  },
  {
    "url": "assets/js/19.562506fe.js",
    "revision": "9ed51b9a4638eae55f8f77668fadb018"
  },
  {
    "url": "assets/js/2.14086824.js",
    "revision": "e2a01f19cb278fec2379062ee0954ea0"
  },
  {
    "url": "assets/js/20.ce533259.js",
    "revision": "85b0f73ee3ca5f629b75ba486f0bb927"
  },
  {
    "url": "assets/js/21.113ec1a8.js",
    "revision": "074670c636c61c0316ab6cf0d60563d4"
  },
  {
    "url": "assets/js/22.fbb69e54.js",
    "revision": "6b579c8715cb25f903e7a5c39f876685"
  },
  {
    "url": "assets/js/23.b8b977ef.js",
    "revision": "c879a8ba2318c6e17c67f5af79a937da"
  },
  {
    "url": "assets/js/24.bd04bc2c.js",
    "revision": "e1f957a6ca631a1bac27f30c2e4dbae4"
  },
  {
    "url": "assets/js/25.aa10fc33.js",
    "revision": "f5676581631dcea258548eaedfa242eb"
  },
  {
    "url": "assets/js/26.f27740bf.js",
    "revision": "475b59f20664eec0b5e6b5e953c43e38"
  },
  {
    "url": "assets/js/27.f81c5573.js",
    "revision": "9fa9b5356a82ee79ef9d597fbfe71b92"
  },
  {
    "url": "assets/js/28.e822d9d1.js",
    "revision": "bdf24f0d95467b1dc368f91a818c8997"
  },
  {
    "url": "assets/js/29.6ef2ecaa.js",
    "revision": "54b789af4ea0fa864e75a31f0ad4a0b7"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.dabb95bb.js",
    "revision": "0c0d821b7246e5fbe7dd8ea5b3d77f82"
  },
  {
    "url": "assets/js/31.8a265de3.js",
    "revision": "16b4cc5cb8f68a1cfaa1fb9221c3d3a6"
  },
  {
    "url": "assets/js/32.8b3889ce.js",
    "revision": "2d390c355f2ba45064ba82a6eff607ce"
  },
  {
    "url": "assets/js/33.c6e8800a.js",
    "revision": "98886cc11b6bfd8beb95fb0f5a270a7e"
  },
  {
    "url": "assets/js/34.9199bd67.js",
    "revision": "78164dbdeaf62c91093194334e15b32e"
  },
  {
    "url": "assets/js/35.33e9927f.js",
    "revision": "d00dc2f6a77b709e84d3831e702498dc"
  },
  {
    "url": "assets/js/36.c38d4180.js",
    "revision": "f88b8487b75c081abdfce45c83cc48eb"
  },
  {
    "url": "assets/js/37.6a9c9c52.js",
    "revision": "301f6750d1b0fee9c6ec4542d5eea973"
  },
  {
    "url": "assets/js/38.31224ca5.js",
    "revision": "ab7d1be7b14723ce03e99e5fce2b78dc"
  },
  {
    "url": "assets/js/39.d8636df4.js",
    "revision": "bfc85fe8d159bc9ce0e55f440c39270d"
  },
  {
    "url": "assets/js/4.5aab80da.js",
    "revision": "b58f8681bd3152fc52aa3e78cb16fb00"
  },
  {
    "url": "assets/js/40.d64b5843.js",
    "revision": "8d435d0b99d75a13fe059529e69c39b9"
  },
  {
    "url": "assets/js/41.b651332c.js",
    "revision": "29381f335d5c7b743656b6243a818ab6"
  },
  {
    "url": "assets/js/42.04b54fda.js",
    "revision": "d914a9401ce05c29e5d428a27da32a94"
  },
  {
    "url": "assets/js/43.b2f137f4.js",
    "revision": "6a192765fbabf81ab107009910a27978"
  },
  {
    "url": "assets/js/44.bbee2e5a.js",
    "revision": "497ec062b7d156be572756d0b267bc96"
  },
  {
    "url": "assets/js/45.0865a5a9.js",
    "revision": "6b50bd33d77189fafe7a02a86725cc72"
  },
  {
    "url": "assets/js/46.03d089aa.js",
    "revision": "a43f252a63ed93549338c2e59c999be0"
  },
  {
    "url": "assets/js/47.fc75abd6.js",
    "revision": "d578959b6b3d1d48aae3ef21834ecbff"
  },
  {
    "url": "assets/js/48.03f3d061.js",
    "revision": "b01601dfe14564726863c2462dfc11ab"
  },
  {
    "url": "assets/js/49.1850f70f.js",
    "revision": "7c89b48b95e6e825eb3833439de12d25"
  },
  {
    "url": "assets/js/5.09d8e928.js",
    "revision": "eac8b91776f55ac71113fc8facecfa7a"
  },
  {
    "url": "assets/js/50.3a6bfcde.js",
    "revision": "1825bd52ba61cb821ca2444f97b69236"
  },
  {
    "url": "assets/js/51.a8797829.js",
    "revision": "d7c9393926dd444cb0d2dfd14d08a126"
  },
  {
    "url": "assets/js/52.58509478.js",
    "revision": "37c95c8dd78129f3e98f4f27cb472498"
  },
  {
    "url": "assets/js/53.32d04a29.js",
    "revision": "1108f74fcc9dbd8fc445df06db077643"
  },
  {
    "url": "assets/js/54.5eab5c68.js",
    "revision": "d0b2ed8583b024a7fbaffdc177f44b6a"
  },
  {
    "url": "assets/js/55.4bed6a4e.js",
    "revision": "2fb9d47851f8acc3caf3361433486066"
  },
  {
    "url": "assets/js/56.dcfb6cdd.js",
    "revision": "6af4a56e5555cb10acff75c62cff746a"
  },
  {
    "url": "assets/js/57.023463a0.js",
    "revision": "3bfb09576ca0161306196087a05239ed"
  },
  {
    "url": "assets/js/58.5106de06.js",
    "revision": "89ecf7d127e9c47afe82c8f3e63e743a"
  },
  {
    "url": "assets/js/59.d22f56f2.js",
    "revision": "0fbf11b34928105aec5663c77ba3ab3e"
  },
  {
    "url": "assets/js/60.41f85ab2.js",
    "revision": "ef72f2119305a84d9d383fcddbb61fea"
  },
  {
    "url": "assets/js/61.0ce3ae90.js",
    "revision": "0309e3760ea5bd5406ad4db77a68ccf0"
  },
  {
    "url": "assets/js/62.599f58fa.js",
    "revision": "adbd86c95b3beff93778c59f8917111e"
  },
  {
    "url": "assets/js/63.96139cfd.js",
    "revision": "5ebee6f3eb286bc939a1e182201b498e"
  },
  {
    "url": "assets/js/64.9af4c88e.js",
    "revision": "0e4b988a59334e09f1452e6eee81410f"
  },
  {
    "url": "assets/js/65.a7f20b1f.js",
    "revision": "1714b3e29618b8b6f21fe25eb1fbef34"
  },
  {
    "url": "assets/js/66.5b7e25ba.js",
    "revision": "82af97c47a0808a6d14076329a49c01b"
  },
  {
    "url": "assets/js/67.0428525a.js",
    "revision": "2bb56bd1dbfd459a54818495db4ef545"
  },
  {
    "url": "assets/js/68.bf8e7311.js",
    "revision": "6d066d347fe4a93428a6513f498db931"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.86dc48e3.js",
    "revision": "96f21fee63c80323d4c82c847d2c919d"
  },
  {
    "url": "assets/js/71.1aaf44ef.js",
    "revision": "de67e74b715cd52cc6f077427c068581"
  },
  {
    "url": "assets/js/72.ea119b87.js",
    "revision": "bc8e7997b55c4e54a65f1c9168037bbe"
  },
  {
    "url": "assets/js/73.c496a45a.js",
    "revision": "69c2318622f0db9ac58b1daf6c4aa584"
  },
  {
    "url": "assets/js/74.6c40347c.js",
    "revision": "a197266d1659801abcebb8b3ff401ec8"
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
    "url": "assets/js/77.a003d38c.js",
    "revision": "7a526c7e4ea7f98a861b4c9accf082e2"
  },
  {
    "url": "assets/js/78.2f1f1b5d.js",
    "revision": "c98c93f25bf54d29eaa4d0d3fabfd595"
  },
  {
    "url": "assets/js/79.67fdadca.js",
    "revision": "f7cda264e8d3aac87f239f44dea57532"
  },
  {
    "url": "assets/js/8.91891cbd.js",
    "revision": "c8f2cc5d9b1af161af9ef6b9919eb4d7"
  },
  {
    "url": "assets/js/80.13e683c0.js",
    "revision": "919a02a31f44a8d88ecf3ca6452c191e"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.fec49952.js",
    "revision": "0d6cef20967b98ca5eabace7c61e58ac"
  },
  {
    "url": "assets/js/83.bddc5286.js",
    "revision": "63af534f9285ef50317d61c88cfca4bf"
  },
  {
    "url": "assets/js/84.7a7fe257.js",
    "revision": "bff741ac4ce326c8d6d5c2de0db53ac9"
  },
  {
    "url": "assets/js/85.0af4aeb9.js",
    "revision": "514b0a884b33792e74ef76486e416265"
  },
  {
    "url": "assets/js/86.04227b0e.js",
    "revision": "56eb624c274661c4cd31fb375b16d7c1"
  },
  {
    "url": "assets/js/87.99912aa5.js",
    "revision": "c12666022d365b9ba6404a38583af661"
  },
  {
    "url": "assets/js/88.37ab16f9.js",
    "revision": "8f3c480a7ba967ed25f0994208dbb4e1"
  },
  {
    "url": "assets/js/89.fd28bfa0.js",
    "revision": "64bad18df7b6278c5653011e2a8d4852"
  },
  {
    "url": "assets/js/9.57fbfa25.js",
    "revision": "5dc3d2be3998038864914a1f92e2b5e4"
  },
  {
    "url": "assets/js/90.fe4877bb.js",
    "revision": "0fe5d4020351186f565fe5668a6a41ae"
  },
  {
    "url": "assets/js/91.bfdd615a.js",
    "revision": "fa7c083e656a6f9a18146ab4d39aa785"
  },
  {
    "url": "assets/js/92.899f2c9a.js",
    "revision": "3f6b91e634fb4ec5a1cc41e258451348"
  },
  {
    "url": "assets/js/93.a8a92492.js",
    "revision": "e0d72be1a460c93017b307f7ef30474f"
  },
  {
    "url": "assets/js/94.e837ad89.js",
    "revision": "5d63b6fd03cdc82e696078a9d6aedc20"
  },
  {
    "url": "assets/js/95.f643f1e8.js",
    "revision": "159a627c3eea301685bc3054aa8d21ab"
  },
  {
    "url": "assets/js/96.6156b098.js",
    "revision": "c8d08c8e63fab5070626fba06f514798"
  },
  {
    "url": "assets/js/97.ec5ac3ed.js",
    "revision": "752c66a4fe9b6aff195a2edc3910722c"
  },
  {
    "url": "assets/js/98.3cc640a2.js",
    "revision": "c64f267a1ae441748c3cc16c2bf0597c"
  },
  {
    "url": "assets/js/99.4c1d866a.js",
    "revision": "113870b8a05aaf7e10e59342a61942d8"
  },
  {
    "url": "assets/js/app.c0a95642.js",
    "revision": "2b3de0d5670ef918145eebf767e532a6"
  },
  {
    "url": "assets/js/vendors~docsearch.c0924254.js",
    "revision": "ea476128682982a023d088ede4aee066"
  },
  {
    "url": "index.html",
    "revision": "ea37336aacb5d5032812f1f806ef362c"
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
