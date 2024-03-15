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
    "revision": "1f1850e7ab3729dfbf42b93a57abe6f1"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "3a7c2f35ef583ddf7efdbb04e3c4e50e"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "5b2c89e64f380ac31b35f0c6f08b074e"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "fd71a915593146c11c71b0764a4ee7da"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "a731eea4b0c0813455205ae9e8d12d4d"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "51eac22dc88771f371a74acd5ee56c94"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "f5c8812c92e99dc3ee526a43b958592d"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "b38fa8e0494fea23069ebd034bf4ea09"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "b9b9e234e06005beafdf71f6dc5205fb"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "95c6d339db9fd7dbd89305b8fa55e04e"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "d73f3d566ac5256b104c57fef8730537"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "0796dcb601db41acab2140d02b5f651e"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "53c29c987580c10cb54e916e40d833be"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "c4e58e9b161a77ae9137f96895655583"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "937d6ffa687e2de5f5a6c25e2514a32e"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "b90bc1375edae1b940471a19163a3cb3"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "db22b6eb625df3df1df4c1b267eae0f3"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "6343fd65c7ac0e917d948e6f6ef02b2d"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "1fcb20943bfb8e7e43c40a3fd7ff39f5"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "be61b4b587c1b38ef826744de4fddc20"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "a202885c26f2a223691e7c21ecd6f5ab"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "ca62cdb0a06eadbb2291ac2d55070009"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "af5bd862ea04cfca77c46a519b972fef"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "a975f80c267fa9db9e61872db7a06fff"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "83b8d6ecfc7dd2a18df332aca31f0c78"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "0f726a45efd443be982384ae7e14357f"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "26e1cd499406d7993fb1820f77335876"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "8b4a8576a1f27207483bb77f43d2686e"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "b0ff2a077b098021c3b818055527c6c7"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "ee952fa255cfe44b02734733d5174ae8"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "11f06cbb1439348da3a915ef3ad4d34f"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "bb00df9d10baa3848e53a8cfee721ddc"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "206e171fc17f55ba93522cbbdbdfc9da"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "c1bb742da677e19436c25318a4c1b5ed"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "d6a9616bc78d1e7f4c092c164a3eeb1c"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "d4cb27a82f749a545bea501708b62a48"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "04585536244a502dbb5a216cb97d562d"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "bb4fd3bdd96055d35311ba2db924b8bf"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "dad2fbe37b169db8f9e97d57c886e169"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "a25e407f939caee17d47c7ccc1771483"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "e9d9e656fc3add5f02d747e2b83a4547"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "f2d41ef493d52b5b6e691b999e91d17f"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "e7e8d59b0a57efb987c46161890f75c2"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "912ee367b7d01054ff911f464307ba19"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "25db420c2001ede09bded06c25880ade"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "b8e2cdd0306ff2ed45bf4e98eed7f4d6"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "c277d5f000aade7bc09d9ea13ef3e3a7"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "699adec7824fbdb7d98cf90bbfd18b7b"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "f596aedbd4d6f96a716cb9b1bcc7b068"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "59351cd288490e579fc61170f3f3dbe0"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "08c409ff12f69f275678dc0e2eb6c1e6"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "ad6bd0bd386a62d5eac72d3468c7cba5"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "1bd3ba4230c52adb9782402ebdb0127a"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "6eebc3e54c8b7ce6c4ae2315933a9d86"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "800024cedb7f71de48e8c66bb17d7de9"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "9403839d6bf200b741105fae1072b4d3"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "067cd1e8d0fbc55d7c7eb62cbb1bdc74"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "4031430dac25079cdea191d8302c34ea"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "55e56a07e198092c39ddb322fffe6804"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "9c2eedb3e21b724903e5c6b22c06f0d9"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "6390acaa0aa011801b3ab97666e75e38"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "1f4d0b621411a524ca373f6e51910866"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "7c69c040d13b8818641e7db87dbe88aa"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "56978b99a2ef43e8a2d2da0d164a6092"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "1a98476c8f177787ef4b6fcb4e4ad7ec"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "bdaaa3b07c320b5459c3018dba816ea1"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "a8584185703ffe69a6598a43a253be20"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "10ce402877f850bb8bc0a2751e5a699a"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "229e507c0489ee1894078541c8a3a740"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "bd4f83d3a8d46c45d369ae0a755bc735"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "e0b684dee3ddbbea0a77a6fc7a5d3f67"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "57b39935f7c8bd4c8737cdfd59cb0701"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "426e0535fbfc4152a6621ea19ca369ab"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "da800ad48615abb4656cd797866ecca5"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "dd23cba0a0f0ceaff37e6d398ca84fab"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "868232dd591edd0e6891d3ccf925286f"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "38c64f3a18166f8b0d79471ce3929fdd"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "18b81dc2faf7e784db500a5807e55212"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "a76e0371e51b259751abbb9f40e0e365"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "c429668926ccbf96ca7537eb35a88b44"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "7a2d139a5b9bab9911e50b937c7a7ab1"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "6c23c38ebce16ff367027885997620b8"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "3ad31863fd477569193e40bf4c019f23"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "233cabeeebc0e1c052855424ceee454b"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "c8c211d3f6228b691c27c6a66e88b9f8"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "f1df78806dca23354b6b4310c5348c48"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "3285be4e211f23b957b19f592f341a33"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "a0f204170ff5cf447ce1b6499d3d8869"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "89c7cbaf88ad51e8290564da09ff62be"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "1ef568104f9d0829034d860d200e0d35"
  },
  {
    "url": "404.html",
    "revision": "a264fbab01ec5780a1b326ee644c386f"
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
    "url": "assets/js/1.4c7c1840.js",
    "revision": "7eeace4bae80c795d3d14a1c628b8d05"
  },
  {
    "url": "assets/js/10.ef9a48af.js",
    "revision": "4fdb5e6d5f9f26d6e9c1370372fc8a85"
  },
  {
    "url": "assets/js/100.346fa859.js",
    "revision": "f4649428242e2583fd1fda7e6d55b110"
  },
  {
    "url": "assets/js/101.821a5c85.js",
    "revision": "0e3c693ed1dabbe9029b0aaafce2dfe3"
  },
  {
    "url": "assets/js/102.7dc30c44.js",
    "revision": "3afe2c4c22726267acfa936b84fbc94b"
  },
  {
    "url": "assets/js/103.a630638e.js",
    "revision": "00a6fd25c1988583336eaf83fc9134d1"
  },
  {
    "url": "assets/js/104.765b395e.js",
    "revision": "54f958eb048ab288b0789263ce3032a8"
  },
  {
    "url": "assets/js/105.a35535ce.js",
    "revision": "661bb4054859e9427556dc8d2f067627"
  },
  {
    "url": "assets/js/106.6c89b269.js",
    "revision": "b8b3f93ee94367fa28389f8c60b56b73"
  },
  {
    "url": "assets/js/107.9d194c40.js",
    "revision": "13b17d616e7862084625a6e7945140fc"
  },
  {
    "url": "assets/js/108.f4145e9f.js",
    "revision": "8996fda9a3fca8143ee3c5dd5038e7c6"
  },
  {
    "url": "assets/js/109.0bfee796.js",
    "revision": "2f18c5fac759ea4f88db6d51bce68769"
  },
  {
    "url": "assets/js/11.13918217.js",
    "revision": "5ad1acfae8b3c6655656e8c5a3a0e631"
  },
  {
    "url": "assets/js/110.96dd998f.js",
    "revision": "aba1bf271e39e4ddc569d33a1ab41858"
  },
  {
    "url": "assets/js/111.38d3bcaa.js",
    "revision": "335317961279b54256236596062ee01b"
  },
  {
    "url": "assets/js/12.3ee82e88.js",
    "revision": "8050983058f4fc6b89e8df0e0dc0fb23"
  },
  {
    "url": "assets/js/13.0cffbf0b.js",
    "revision": "00ec8d4a2eac9b317e6edded3bf065ff"
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
    "url": "assets/js/16.396fa641.js",
    "revision": "c93ce07536243b3f8762fbbdcd50e341"
  },
  {
    "url": "assets/js/17.429bcd9c.js",
    "revision": "6e62d77095812aac50463b223479bf1a"
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
    "url": "assets/js/21.b66889d1.js",
    "revision": "c5aa25bc5efa6c610d8ef48d901460dc"
  },
  {
    "url": "assets/js/22.fbb69e54.js",
    "revision": "6b579c8715cb25f903e7a5c39f876685"
  },
  {
    "url": "assets/js/23.36782587.js",
    "revision": "b63c31bec43177cfcdbe379a0e5b2605"
  },
  {
    "url": "assets/js/24.bd04bc2c.js",
    "revision": "e1f957a6ca631a1bac27f30c2e4dbae4"
  },
  {
    "url": "assets/js/25.13cb200b.js",
    "revision": "c8e16081123e88c2e2ab5b1bb22dfe78"
  },
  {
    "url": "assets/js/26.f27740bf.js",
    "revision": "475b59f20664eec0b5e6b5e953c43e38"
  },
  {
    "url": "assets/js/27.1c9b6175.js",
    "revision": "c4d5b08cd5cd5771b2d96f639997e848"
  },
  {
    "url": "assets/js/28.e822d9d1.js",
    "revision": "bdf24f0d95467b1dc368f91a818c8997"
  },
  {
    "url": "assets/js/29.b971b5ed.js",
    "revision": "a484834f86c9ba249dcdb7137a672dc9"
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
    "url": "assets/js/32.22249fd0.js",
    "revision": "5ae353d80850f73ca50b35661515b299"
  },
  {
    "url": "assets/js/33.c6e8800a.js",
    "revision": "98886cc11b6bfd8beb95fb0f5a270a7e"
  },
  {
    "url": "assets/js/34.bd7d8021.js",
    "revision": "7efc305bfb18a5a04175a6ae2efae86a"
  },
  {
    "url": "assets/js/35.aad75351.js",
    "revision": "aaec8d3db4e94a368fe7bdd50e28d352"
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
    "url": "assets/js/38.37426664.js",
    "revision": "e0ec12d16f6658644f38b78b27c2ef27"
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
    "url": "assets/js/41.391c4fff.js",
    "revision": "17d8f9ed0a33619fafcafe7c8424fbce"
  },
  {
    "url": "assets/js/42.04b54fda.js",
    "revision": "d914a9401ce05c29e5d428a27da32a94"
  },
  {
    "url": "assets/js/43.406b0498.js",
    "revision": "a4edf2bfc54ad7deeb551a3528440d17"
  },
  {
    "url": "assets/js/44.d0594a9f.js",
    "revision": "f40d63e351c9a6833d4ca6a9e32231d7"
  },
  {
    "url": "assets/js/45.c8e1f36f.js",
    "revision": "1239eea68f90c5e9c876de8ca5dcf99e"
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
    "url": "assets/js/50.91cd2469.js",
    "revision": "a29d39d52758227ccc867f5edaa6c7db"
  },
  {
    "url": "assets/js/51.1834946e.js",
    "revision": "2723d74f3bdaa1b05e0521216e0341cd"
  },
  {
    "url": "assets/js/52.58509478.js",
    "revision": "37c95c8dd78129f3e98f4f27cb472498"
  },
  {
    "url": "assets/js/53.ea67c185.js",
    "revision": "15ce14b1cf4c3f081d65220294eae4b6"
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
    "url": "assets/js/56.b36b5d4e.js",
    "revision": "919aa58557486d616e0ee11d087af7c3"
  },
  {
    "url": "assets/js/57.b6e9fd9c.js",
    "revision": "9406fbc617a1cac01b4f6e809b0bb300"
  },
  {
    "url": "assets/js/58.5106de06.js",
    "revision": "89ecf7d127e9c47afe82c8f3e63e743a"
  },
  {
    "url": "assets/js/59.e4a0ee1f.js",
    "revision": "f9fa00dfa9757b03782bf31a3cc804ec"
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
    "url": "assets/js/62.b0cdc1e2.js",
    "revision": "645a1eda396b8756fd3ad0df5c90bb5c"
  },
  {
    "url": "assets/js/63.1934758e.js",
    "revision": "45e44254012e0b213ecbcdd365853972"
  },
  {
    "url": "assets/js/64.8aa73888.js",
    "revision": "40c6c8ad42c33f6a9ca60103669d0672"
  },
  {
    "url": "assets/js/65.331f9754.js",
    "revision": "eda44186817605bdedc8596677d25bb9"
  },
  {
    "url": "assets/js/66.5b7e25ba.js",
    "revision": "82af97c47a0808a6d14076329a49c01b"
  },
  {
    "url": "assets/js/67.ffb56269.js",
    "revision": "abbf81db6751ccbf26faf85c34762958"
  },
  {
    "url": "assets/js/68.60c58a4b.js",
    "revision": "a55519c6118a954bee3190b58a9717fb"
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
    "url": "assets/js/72.4122e7f5.js",
    "revision": "a508b9acc04320252abf6cdaf7e926a7"
  },
  {
    "url": "assets/js/73.c496a45a.js",
    "revision": "69c2318622f0db9ac58b1daf6c4aa584"
  },
  {
    "url": "assets/js/74.a039811b.js",
    "revision": "6200bc041efabe1c270329436013f286"
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
    "url": "assets/js/77.09a7ec6b.js",
    "revision": "9a52517a77b823f986af87754915fcea"
  },
  {
    "url": "assets/js/78.6080a1e1.js",
    "revision": "a96bafd82609661ba712eb182d4178e8"
  },
  {
    "url": "assets/js/79.d8c80e74.js",
    "revision": "0887236af368d4edfd921007a1462147"
  },
  {
    "url": "assets/js/8.8fa014fe.js",
    "revision": "f665c3e9f8da92e920add320a18a7747"
  },
  {
    "url": "assets/js/80.b92c6cb2.js",
    "revision": "6eb70a23512dfc1e7711369a2dc51a1d"
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
    "url": "assets/js/83.a96db9fb.js",
    "revision": "e8f472f92b4bd2150321db133a6a5480"
  },
  {
    "url": "assets/js/84.7a7fe257.js",
    "revision": "bff741ac4ce326c8d6d5c2de0db53ac9"
  },
  {
    "url": "assets/js/85.6738e6c9.js",
    "revision": "056e6ff978e54af8353d388b170fea51"
  },
  {
    "url": "assets/js/86.7a75fd4e.js",
    "revision": "cf773c5b65548aa69649b3c67689f79b"
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
    "url": "assets/js/9.8e413561.js",
    "revision": "36937edbd684091e60102f63b7afaa4f"
  },
  {
    "url": "assets/js/90.c7e9a5fd.js",
    "revision": "3f48561aa69ac3484afc92b626070d9a"
  },
  {
    "url": "assets/js/91.ce5d34a0.js",
    "revision": "5807a8f3873a719eacfe18fcf4cb23c1"
  },
  {
    "url": "assets/js/92.899f2c9a.js",
    "revision": "3f6b91e634fb4ec5a1cc41e258451348"
  },
  {
    "url": "assets/js/93.04aeef2d.js",
    "revision": "99c9c159143ee0e86f87930a2f365244"
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
    "url": "assets/js/96.4c9c410e.js",
    "revision": "c0f68344ed5006871fed379d4b157784"
  },
  {
    "url": "assets/js/97.26961f19.js",
    "revision": "8eb5a86899a20be0308f584352cc167e"
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
    "url": "assets/js/app.27c481aa.js",
    "revision": "f1b418961dccd1ed1da9b6edab469a0a"
  },
  {
    "url": "assets/js/vendors~docsearch.c0924254.js",
    "revision": "ea476128682982a023d088ede4aee066"
  },
  {
    "url": "index.html",
    "revision": "9b9ccf3d37fe68206e45b2f986354c6a"
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
