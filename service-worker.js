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
    "revision": "81f82fb5d0439310242610de93994c14"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "9b65a1c2b931444eeb788910b90145f0"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "d368069264a4055a8cb1f12ed3426ba2"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "b554e4a5e30bca2af0e743b4a1db7976"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "703e28f7c7951dc49ff4c16c31093096"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "cd0ea1854de89d07b7c9182c62469311"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "0dd7b7deb88bfe2b3e0173112f1b5015"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "6a5bfa968c9b32a9508f1a45dbf0ccfe"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "a67b933d1ddafdd318283ff68b1fb02f"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "fdbe7206e74b25982f7301d90546db26"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "5fb18340adab3a9be09822161c7fd486"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "be4fb6e3ae394139c6c44da58f957a7d"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "d994397305c468577bdd17090b61e9f7"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "529be86bbf4107909d843311f9d27bfb"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "8a3fc64f93f88b0a2388cb54d612d08d"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "6c261abf993aac06a1ef5321f6687213"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "9e82842f7a98e31986d656d1150fe956"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "5ecedc76e218f923e5f412f474a96c0f"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "b10834b5209dceaebeb9d0219fe8b175"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "ed2e979b69fbaf3e2875e9fdccf56513"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "f7642ea4efc0c1507c898fc28701bd32"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "f9b1e4314c20eca495ac28a77a6743d8"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "89907c72826720d5a37987c8848d0018"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "91c6775a293c4cef078a0353f03a6649"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "ee18c4025705fb671807ed4a76cd2ff8"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "04130fa839d97e1ffe3496fc51c4c81d"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "2bfce0b64bdbddf7547c22da73b97f83"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "f6bae584672de444fe14511565011940"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "a666dfa2c3d7dc37586839dc423268d1"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "a3758223e216acb481f7aadab84ed67d"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "8b5a889aa2cc3bbba3cd46040d52a215"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "e3dfb68cf54224663b772a3d808687ca"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "3a66a0fb2bc122c434ca3f08dcfbc2ba"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "01a5828fa99bdf52bb0c370ce095d1f0"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "1b0be00a7d9f05fbea9690b59bd6aa7e"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "66c9ca7ec171d3391c743a0dcdd8c886"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "7d7928b0530b1094388c01b3c3be84d3"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "8269ea377a0222db214d7da536c9acfd"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "618d13e027b7c8aa304b75b77cfca2a6"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "a6834919faa62cad658947c9b1b37c43"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "ae547d7b66f2de0290a3c2689d39ac1a"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "e9ce6250bc15f31c78618892ffe85d88"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "1ece149cfa918fbd9c8536f7dedfa51e"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "261f76fcaca507bf303b04b508d2c6c6"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "e29056f7708fd78b82e28b3940b2365f"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "b592008fc3039e1d92125e5c1793dc2a"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "3cf6c25239fc3322f3eae9edd6b52fb9"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "95a7f8f0bd94c02c1121901885fabe55"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "67744320c8b37321409b666283495c81"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "df7355c50fa2734a255bac04e216d391"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "f26918b293bcc0ac6364879eb3c37f60"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "5981d5b98706a4ce0f303051355fdf15"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "08c5b97935ef19457e7fcec473610ddc"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "1c3b17b15888faf3513a59e7a7550437"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "b3558a8ac014c9b21122e8c6d99e8459"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "f10202513527292891b8bc513f3e2f47"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "3e1cc75b9e5e6d18637d449073a1e548"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "10aebe84e92414e353fec25e15b97f82"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "69f5069aa3f9bbedc4a20818301f8b9c"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "453f329c8825275c52a0103f39cc3f13"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "96a62dcf80cc7ee0a654eece5dc75083"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "95e615fc7172ad2a43558f80c1248e53"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "6be34498a6906ebd369f57e412de85b2"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "bc68c2b92344cc8da2062535702518e4"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "2e22b876361a046e9e4c5bd5b8e19b5f"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "0933eb4717a336dbc7217451276649d3"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "06b499a466c7ecedbc595513b19e012d"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "b9bcfe37fcdb4d8da6a567b001f74af6"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "04ba014a4b8d5ed4995cad361a8a089a"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "222d796f856fa2261876010ffeb0e3e3"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "4eed56897b3f44e4f8d5b41ac1d0c92f"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "bdebf11483d0e0abca6017c418660e9d"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "d3f8d71b249049bc400a86a67f20c507"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "c07e1f7bd98c453c172215f9cc5c0266"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "ef256b062a3646f369f452f16d8b4365"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "50f79a11d747ed289bd816c3bc83192c"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "cd85edafe85530c95081f3519de89f16"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "9ae81ca3c05642d716bf5c439899cfa5"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "f97a3d2dd5f72773f9f2124f53ce3da0"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "a9e6e0cfc46fbb82765ef7c07c05f10c"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "5c482ca760606234283192217d5b9fb4"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "9f2f2c4f5d61406f84ae7deb77967af1"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "a39dcca6d9dad40cdba1db9f4b3228fd"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "eb08a5a42cce35c231685d38bfb56bc6"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "c1be8083081ddcf3a03d58470d3c4d4f"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "250d8f34dbe8f750c5e7470ea22414ab"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "def738bcca08189ed4b06624c2dcb59f"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "45a85ac87678e7e152f82052c39937cc"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "61d4314db0efb33e4556334ea26086f3"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "665f78070094b6274ec85551bc6cd037"
  },
  {
    "url": "404.html",
    "revision": "a65e60b63dbf28109726132de35a800f"
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
    "url": "assets/js/1.8fb336de.js",
    "revision": "261c73b33a707e4f3ac2a18768443548"
  },
  {
    "url": "assets/js/10.0f9f789c.js",
    "revision": "78f2f78326274bd8fb00fa3d01e4d21f"
  },
  {
    "url": "assets/js/100.92df403b.js",
    "revision": "9e18e77d46aeb338b3e75870c4b7025c"
  },
  {
    "url": "assets/js/101.a8ce2c08.js",
    "revision": "bdabc31a7d1a62ea1bc369f6a061e625"
  },
  {
    "url": "assets/js/102.bdfa7d87.js",
    "revision": "f0c98f3e14efb4b1c3ba79874cd9dd49"
  },
  {
    "url": "assets/js/103.a630638e.js",
    "revision": "00a6fd25c1988583336eaf83fc9134d1"
  },
  {
    "url": "assets/js/104.d9d4baf5.js",
    "revision": "7d5a7f35784154212fb69d52b47e3c06"
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
    "url": "assets/js/108.f9c65963.js",
    "revision": "b8ff6b011b1ce26b5c8b330967694101"
  },
  {
    "url": "assets/js/109.2c3df471.js",
    "revision": "897c3d5fe51410c53bfe5c1f1d9c5168"
  },
  {
    "url": "assets/js/11.c69bae69.js",
    "revision": "f2d88c87b30337187ecbb4dd9bc57b86"
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
    "url": "assets/js/12.e46bbd09.js",
    "revision": "40c544351dcec4079df4d241a15e67fd"
  },
  {
    "url": "assets/js/13.17668272.js",
    "revision": "1bfe87ccaff0b9ef401810f6be690dfd"
  },
  {
    "url": "assets/js/14.b94a55eb.js",
    "revision": "b419dce26fd2e4e5c55c20f4975070a0"
  },
  {
    "url": "assets/js/15.2041950f.js",
    "revision": "6540d4ed5c5ba7530111d28caa3d2b04"
  },
  {
    "url": "assets/js/16.bf534431.js",
    "revision": "e1996f745c732e7505854ee48f8be30a"
  },
  {
    "url": "assets/js/17.08088587.js",
    "revision": "8d1e834c3e956cf8c69865d0bbfd8fea"
  },
  {
    "url": "assets/js/18.e00dc174.js",
    "revision": "a814e2127655cff99854b8a8db65bf28"
  },
  {
    "url": "assets/js/19.562506fe.js",
    "revision": "9ed51b9a4638eae55f8f77668fadb018"
  },
  {
    "url": "assets/js/2.5f6b2e5d.js",
    "revision": "d256eb96307a30c363fa1b11ab9fd31b"
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
    "url": "assets/js/22.d7f33b44.js",
    "revision": "c590e483c38055bbd573b26876613cfe"
  },
  {
    "url": "assets/js/23.bcc29c69.js",
    "revision": "f2c8a8fae49a5d085de1d67dea7345dc"
  },
  {
    "url": "assets/js/24.b03fbc33.js",
    "revision": "9cfb89584f41e39c3a5495aeb515f1b8"
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
    "url": "assets/js/27.1c9b6175.js",
    "revision": "c4d5b08cd5cd5771b2d96f639997e848"
  },
  {
    "url": "assets/js/28.ad80efec.js",
    "revision": "fb83e7361f105bf065914d9788f3e9d4"
  },
  {
    "url": "assets/js/29.ae1f83b5.js",
    "revision": "2b250c58a37e30fb0f24aa8b93af1310"
  },
  {
    "url": "assets/js/3.d51b4d6d.js",
    "revision": "b1cdf87a49c2ab347886013baa98717b"
  },
  {
    "url": "assets/js/30.9b0ce6dd.js",
    "revision": "000b953138ab29de2b9708a02b8012d1"
  },
  {
    "url": "assets/js/31.8a265de3.js",
    "revision": "16b4cc5cb8f68a1cfaa1fb9221c3d3a6"
  },
  {
    "url": "assets/js/32.5cfd0ee9.js",
    "revision": "3960d73519b6619576ec1a2c24c81157"
  },
  {
    "url": "assets/js/33.eefaa6b4.js",
    "revision": "784faf3b67750a51b6af5e543d556ab5"
  },
  {
    "url": "assets/js/34.6f47da7c.js",
    "revision": "786abd6bb79ad4b0b0891fa43a94297d"
  },
  {
    "url": "assets/js/35.61bfcde9.js",
    "revision": "89229fd8efcd4922d272d2902fd473af"
  },
  {
    "url": "assets/js/36.1481ace1.js",
    "revision": "fc0cb03bb792b7df833b13c30867796d"
  },
  {
    "url": "assets/js/37.900ee560.js",
    "revision": "32212f98111c1881c23564b28adf96f6"
  },
  {
    "url": "assets/js/38.1573708c.js",
    "revision": "61f51fbe16aeccaa6de8679feefaf464"
  },
  {
    "url": "assets/js/39.3bca8531.js",
    "revision": "0f9a6c27bb6e55acf4cf55e04a9ccf3a"
  },
  {
    "url": "assets/js/4.dc4eea0f.js",
    "revision": "99be656cfda758d66e705995652ca861"
  },
  {
    "url": "assets/js/40.3417cac8.js",
    "revision": "1e69e3386987ed4406fc9c28d2542522"
  },
  {
    "url": "assets/js/41.980b3c17.js",
    "revision": "2df106c22a9831dc941fb9d39a6f0e00"
  },
  {
    "url": "assets/js/42.6ea3a95a.js",
    "revision": "c4ba3847c68ea7c7f1fe954acdf03737"
  },
  {
    "url": "assets/js/43.007ef7b2.js",
    "revision": "5b78ef9faa90b6159c0c251794e3c1bf"
  },
  {
    "url": "assets/js/44.a856dd9c.js",
    "revision": "17d813ff758dfb9a516626658d5f666b"
  },
  {
    "url": "assets/js/45.47bf76cc.js",
    "revision": "e9f07da54d5067784aed6f2713610e9d"
  },
  {
    "url": "assets/js/46.69df0a28.js",
    "revision": "b6932a3f58b50df100cb15e250e5ff1e"
  },
  {
    "url": "assets/js/47.73e77227.js",
    "revision": "9d810a9a157a3d6710d92a2fd0b595f0"
  },
  {
    "url": "assets/js/48.33c50826.js",
    "revision": "c088b6cd5a967fcb48a39a5387e59ee7"
  },
  {
    "url": "assets/js/49.8d6aac46.js",
    "revision": "a7f35a4b674a107f0a453f1a1c8fc61a"
  },
  {
    "url": "assets/js/5.09d8e928.js",
    "revision": "eac8b91776f55ac71113fc8facecfa7a"
  },
  {
    "url": "assets/js/50.c77e75bd.js",
    "revision": "9065e7b36424594a607592821b3b0aad"
  },
  {
    "url": "assets/js/51.08d54498.js",
    "revision": "74938ac566b0cdb807e8be9303020c81"
  },
  {
    "url": "assets/js/52.63d62b74.js",
    "revision": "ee96e8b8cb30615cc77d7660dc451713"
  },
  {
    "url": "assets/js/53.657b0b40.js",
    "revision": "167039d9ffbe03d588bba03b19173e79"
  },
  {
    "url": "assets/js/54.59e0461a.js",
    "revision": "f8470b78be42b34179e6610b81908727"
  },
  {
    "url": "assets/js/55.ba006cd2.js",
    "revision": "eed92c83e19032e05827556315bd9377"
  },
  {
    "url": "assets/js/56.cc808e52.js",
    "revision": "1f436afe3334fa426eb5b6d011f3fbb4"
  },
  {
    "url": "assets/js/57.5bdf1066.js",
    "revision": "00026cd3d59ad982dedc7386c1fb3b1d"
  },
  {
    "url": "assets/js/58.abfe1ba5.js",
    "revision": "63dd949857ded7dde10fa06bb887f73d"
  },
  {
    "url": "assets/js/59.eb6d2c9f.js",
    "revision": "577d7b1737be07139a7fc3f18ec9ed2a"
  },
  {
    "url": "assets/js/60.9a96c93d.js",
    "revision": "f934448b75adb23d21b8f998a9327347"
  },
  {
    "url": "assets/js/61.dce52d0f.js",
    "revision": "ac5134dd6b88474a30ba2e13746686e2"
  },
  {
    "url": "assets/js/62.5a2ee5a0.js",
    "revision": "617f96605ed709e0827f783547f22fb5"
  },
  {
    "url": "assets/js/63.e95923f7.js",
    "revision": "11b8ab851f587b5fb0b70c58cfbd5c67"
  },
  {
    "url": "assets/js/64.9ea2037e.js",
    "revision": "e7dab54747ae119ac9894c1fe413e132"
  },
  {
    "url": "assets/js/65.505379c9.js",
    "revision": "2b8e460b54ed9c8ef0d2edad095837cc"
  },
  {
    "url": "assets/js/66.829f7deb.js",
    "revision": "b1c963529895ab11addc01b8bfd15bb0"
  },
  {
    "url": "assets/js/67.d71c21eb.js",
    "revision": "bec64f6a0fb3900341039475888614a5"
  },
  {
    "url": "assets/js/68.5b15c1d2.js",
    "revision": "bf16cbc1550a00289f400f6b2d1a2b6e"
  },
  {
    "url": "assets/js/69.ae2ffe6b.js",
    "revision": "e5b25b7764b4dc244bd742ebafa11947"
  },
  {
    "url": "assets/js/70.6be49d1d.js",
    "revision": "b63449f17e60dc7d0978bd4eca28e7df"
  },
  {
    "url": "assets/js/71.b792d8f8.js",
    "revision": "47e2aaea6ac8f29e5a93a09550cdc8f2"
  },
  {
    "url": "assets/js/72.7bfb25a3.js",
    "revision": "081d81152765bb1e4e48e885c6436f87"
  },
  {
    "url": "assets/js/73.6d7a6042.js",
    "revision": "60fee2f94826951630df007680ec21fe"
  },
  {
    "url": "assets/js/74.62440870.js",
    "revision": "7a118d63d3acaa7710416ae395285dab"
  },
  {
    "url": "assets/js/75.09b6da82.js",
    "revision": "0259d62bf23b49fe434401722303b3f4"
  },
  {
    "url": "assets/js/76.a9cba003.js",
    "revision": "2ac9d557fc9e16eda338256e06b3f81a"
  },
  {
    "url": "assets/js/77.286ffdf0.js",
    "revision": "457fc5efdc9453e2398bb341f3251b69"
  },
  {
    "url": "assets/js/78.e7cf8a13.js",
    "revision": "7990d00e358f927dd61e86099e72c50f"
  },
  {
    "url": "assets/js/79.d8c80e74.js",
    "revision": "0887236af368d4edfd921007a1462147"
  },
  {
    "url": "assets/js/8.b9ee725f.js",
    "revision": "2c293bdbb57e7ee1eaf629a70e0e3dcc"
  },
  {
    "url": "assets/js/80.68683815.js",
    "revision": "dcc1085b7e0b3244722cb58e229c00e1"
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
    "url": "assets/js/85.0af4aeb9.js",
    "revision": "514b0a884b33792e74ef76486e416265"
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
    "url": "assets/js/88.95fca2e8.js",
    "revision": "a969eb58df1a503ef98c7440ca1efffe"
  },
  {
    "url": "assets/js/89.fd28bfa0.js",
    "revision": "64bad18df7b6278c5653011e2a8d4852"
  },
  {
    "url": "assets/js/9.bc12ab8e.js",
    "revision": "4d56d7ed6835f706438eb981b9309ca4"
  },
  {
    "url": "assets/js/90.5eb3088f.js",
    "revision": "47301f0f8452203b96636eb2ed59b4ab"
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
    "url": "assets/js/93.a8a92492.js",
    "revision": "e0d72be1a460c93017b307f7ef30474f"
  },
  {
    "url": "assets/js/94.e4a6c8bb.js",
    "revision": "446f96cef50b29273467890208b8421f"
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
    "url": "assets/js/99.45eec9cf.js",
    "revision": "c71dd6bcc9dd9108b89b7c9393564112"
  },
  {
    "url": "assets/js/app.51e8837a.js",
    "revision": "3e08b5898d8bc0b7950493f2dd2805eb"
  },
  {
    "url": "assets/js/vendors~docsearch.c0924254.js",
    "revision": "ea476128682982a023d088ede4aee066"
  },
  {
    "url": "index.html",
    "revision": "591fe57ece8d6dfaa0425e5b1674874c"
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
