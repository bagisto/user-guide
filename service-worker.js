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
    "revision": "7823ed9ff166be6aae08e5e4bf1699c0"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "e4d96001df4066976920dd9d056161ca"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "e707bde957173be8453c3843abceb3e0"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "0b1d2bcdc51067a87a32b036647a0574"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "a1a524a6203f15824ecc37cf9be68c29"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "ce26de57f22d0aeaf9a63995f282e19b"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "a01bfe8ff2362260beb3d944fc7d7c5c"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "034f060000cc8479b72fc50f041b2a55"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "e69e0873db1a3ae744dbca0111c67010"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "7a9cb7d13c78710bf0e7b12f7d7215d2"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "c02ab2b88265acaaf2231ec17d40c4ad"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "28a1d9265c680bf4333d684178ba8262"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "d6631e252dac776c401d5ad29915ecd2"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "cd700e76059520c6a25461af27ee3ab7"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "7c1c430578c316260bf3abf0dd4e46b7"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "0c8a300631371468511a0564d73be5db"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "a15ee4f9526070c568ae260a47bbcc34"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "8855045f9ea913042d8db805bd12f322"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "942d133f4bcbe42d47880bc7cde74892"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "0015b8ed835d0b794a58429c4bf9730a"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "1fdfac42846bdb675ba692cdce4d91a1"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "57103c21fe12d6f627bca5ade28988cd"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "c5e0461b35372babe637b72863a34582"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "05ba770f26401174a620c049ebb9a4be"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "b05372f48bf544917df3603d86b36800"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "3321aced56338a14b2cdade37bbdec3d"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "782b1bf011f37a6276edb3baeb3c88c4"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "63116d33a5e059ed5aa9753bbf87e2e0"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "5b9435e7a7f10c8a3b7e94b814266b7e"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "741884862d2408b0d7972755ba9ff95d"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "737aaa4be134ab3c786f9b170137768b"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "aceffc652e343f840377a8c176d078e9"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "38a74bd6fa1ca928511145cf89a24baf"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "9cd6069a1e620a3ad5671b9a7b60bab6"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "b0fc58ea18aa0332e846613687db1664"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "7fad901f115773caabc7cae5d90007c5"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "7df25d276ddbb6cbebc91b2eb9c4f26a"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "030746c18120b65a5b0526d33acce4e3"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "56b088d6b3209c520dee530115fc86a2"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "bba85b05f3aa1ad450a349ddb5ccb238"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "2eb740eadb4003022513a8e012e8b545"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "8a3731c4d8c33103f85cb28b6136c448"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "ea97af158de67e1f663ddabc73e603e6"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "faf9f89a58a15775bf689b39a4149be8"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "b55545a6119d1edb1233d32477de15eb"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "86f257c8f4af889f4a0da405ce5823d9"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "f4b079b919b22be4448275bc3b0ad1c5"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "ea56489e9e9a439b85f54448a31dfe5a"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "449dc63e1ee1bae00aeaec338b495645"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "c7029e10429a264bc0012b7160d66a90"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "44e9029dc2c6a5debb579bd01697143c"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "50d7c9c6f3ebbd586675df0911a6455f"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "abf4ab14840d4f9b53d057a0aa9dae78"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "9862d69679bfa2de0cf922ead01b5401"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "ee1b4eef2b2be49c20a76fc4364a84c7"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "0ba3db72770a887552ef6ecf7324411d"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "6580e67297a7edc0cfcbb2c5af7311fb"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "a970dcf70ac0c033c202d0d0fb1e4846"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "6cca9a6108875c3b3e0106a41356c0a0"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "7556ee704c51f5617e2d65c9913a2df2"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "7372579e72dee1665b5f4c6fa00b71ed"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "65d2eb38897aa6d3bd6f507a7846d37e"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "f8ab363c88e04487e4bc1c511bcf3ce1"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "f31e0070e7748b7fe05757d263c2253a"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "15c523f0296f5380d9ad492b2284c3a9"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "210af9d93abf5faebf8beb6bf748d156"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "39023217185ebf17af16ff2698038dee"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "d6af25a5a02a76f83d118078a2bf2887"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "0fd8b405d8ac72f4141a6083777ea966"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "0842635b173012773bbc61b5b8f6daea"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "9e18f123fce63bbb5fe55a6004f8214d"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "817422eafcfbbe3dba9b460f3f74e42d"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "590b582b568eb974b61c1f19854e2a03"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "b5a323c3daab99ba927699a330744dd1"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "d8971db0be5deed27eb5bc3740e92998"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "a4b591703e589f2598e4d9c212b777fe"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "25c88d69c78ef3f0a204f56631639199"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "15b37e3930e3a265b7ed13e68e4bb372"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "2b1808e3785c332c39af9ecb291d0f90"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "5852534524d3aa73e87e322fc798d0f3"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "79b1273d3bf0ba418c5da7b66c6e10f2"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "1afac403d518eaf6a6e8a8ae6528ba56"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "1f4094b1c50016380a1807b78624ccef"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "e1316193885d1e8c18d5cdd4a371d390"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "ee139bf0e86ecc1673dbdd5d149a737d"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "9b3d5b41aeaf215d0213e7adc6e0b21c"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "d4122dcc0d4edc53f46f1044c7c4b208"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "c92ddb8bff6264fa5117f0f16baa5313"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "f3cc525ab388eef25c69b73a7046d2aa"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "0b94e15ce7fad439fcb34d97fc2498ac"
  },
  {
    "url": "2.2.0/attribute/attribute-family.html",
    "revision": "e494ac7d87b7b898ea9c91369eebdc5f"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "530fd44c360b5f60571f3364685ab689"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "8a48b4f154b0644dc323c3fc0541ce6f"
  },
  {
    "url": "2.2.0/attribute/overview.html",
    "revision": "c6dc4065e036db235fedb6faebf88ab3"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "0baea2ddd997a35b28503cbcc17bf742"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "3e69b7f63b988c0faa3b2884408f9d07"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "f385a989f6d0a79167a0592abafe0e22"
  },
  {
    "url": "2.2.0/category/overview.html",
    "revision": "584580d210b62039aac213367cd70d4e"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "9552d0f3a388428731734fc0e1be25f3"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "378300d4134014d7c3b20fdd0b5ff19b"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "e7d04b04b6261fa1a5a90c3ef366d602"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "534ab7cc92d42d26851865823aa57c27"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "9072a188aa09ab2f54079e533280271b"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "35e15ae66adc9a3e3404f004a82d8fa0"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "45c366c6f6ad0b4f15ed81007b21b7db"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "d2f1e40d18d2a294f63e42cc7fc3a422"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "f52c10504809ede3f82b52eb0771128d"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "2403866a00d52c5a9d61b7906ce69fe7"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "f222f7ddbdc83ba0bf4bb2e007f4caf9"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "20bfe4fe8fbb1b6b4dda8cca5f2550e0"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "af95530a3c03e8e139be745589db1051"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "40fe66b8c6850fceff1e1a0928b7c796"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "74df3243d811cac85bbab2b3e5e36299"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "1ce569beafe51277a2dab12751cf4c06"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "dba3f9e7d1ae4e0a393b92593d9912f8"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "32a60d615d2cb846ab67eafaaa841490"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "2016ce5a3dc7c49ffe32b9f21e8b33e3"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "c5597f0b5042d0f596718067f9e0b488"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "8b67597c7dec809a162ca3e980e8e184"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "a772949cb3f67da9be14b52666876611"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "04f2e1a3e8d8c0a06579f99a716e3bf8"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "a1bfdaf4006d1d99beec64a93e634589"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "e2fbba605ded5c3dd0cb18ea1fc25c24"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "50cf42b06188992a460da4e7e5474fdf"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "69e0bcf7dcd3d221d798ad8163628a1b"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "0dc32c063053dc422650737e92055504"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "bc70c7f3e6ff204d348cf9fb4c5c16e7"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "0b664242b865154a3373c687a1e02bea"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "653268a54b2c8393621baec7c17d9165"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "92bd34227060bddd324d5f0692399a18"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "6667cbba5a94bb6224ecdbc905ac7e3d"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "7d8730bf5c68c9d2e4e7e25b25365731"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "84539eadfe5f7c418b8c3057403a2298"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "a3dd706830aa6a7a90033cbd4e84341a"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "cc90bdf1dd9a7e9ca5cd9eaa437c8f33"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "6b1e45be3c6647ba649d8cf7394c9cfe"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "95df6576448d3055a54ceb00796107d6"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "01b16a2707b36963b7fee76216bf3570"
  },
  {
    "url": "404.html",
    "revision": "1f6e1b6e72fe3f9c1d0c8cc55605532f"
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
    "url": "assets/img/checkout.ab9b0f97.png",
    "revision": "ab9b0f976dfe52f807452715beb19d82"
  },
  {
    "url": "assets/img/checkoutMessage.7fec4305.png",
    "revision": "7fec4305b6e80c79137eda387ce363d1"
  },
  {
    "url": "assets/img/checkoutMycart.018d49e7.png",
    "revision": "018d49e7529834942d7c85c3287ccda2"
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
    "url": "assets/img/miniCart.c2175151.png",
    "revision": "c2175151f11fc3d41f7b1158ee3dc055"
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
    "url": "assets/img/orderPlace.c0ba8da5.png",
    "revision": "c0ba8da5e4cde026b7ee7268b94b1717"
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
    "url": "assets/img/taxes.b9e43e0b.png",
    "revision": "b9e43e0b01fad3c1ac734dc697eaa378"
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
    "url": "assets/js/1.a05e9f67.js",
    "revision": "f3de109c82d18bad2f56b8e84cfcb21a"
  },
  {
    "url": "assets/js/10.531376a4.js",
    "revision": "31b40b6ef7f8f13b8d085b039cbd4ad5"
  },
  {
    "url": "assets/js/100.edb8b0c3.js",
    "revision": "93c7fd78058a4f82dd96abc72f24fbdf"
  },
  {
    "url": "assets/js/101.66be76b6.js",
    "revision": "16fc2336e36865699a8b9a8329bdba09"
  },
  {
    "url": "assets/js/102.7edfedd0.js",
    "revision": "4d8c383bbf00a4a26b268c78d0afd43c"
  },
  {
    "url": "assets/js/103.6164a09c.js",
    "revision": "c54006bc156530d67a392369bb756e39"
  },
  {
    "url": "assets/js/104.d790b68a.js",
    "revision": "547a0caeeeb0b3e5bb3895ac078a632d"
  },
  {
    "url": "assets/js/105.c2237b9c.js",
    "revision": "60c74ff74012652fd0c1ce96fc27d716"
  },
  {
    "url": "assets/js/106.8f83257b.js",
    "revision": "e367ed25fdaff1f8dcfcf63f77243270"
  },
  {
    "url": "assets/js/107.138ef1cf.js",
    "revision": "c46a2d9b6e79b18f84f7b80d93bbd0f5"
  },
  {
    "url": "assets/js/108.62c41de8.js",
    "revision": "2045544043e070e875a39de8e1d11251"
  },
  {
    "url": "assets/js/109.148fecc9.js",
    "revision": "0fb7f9942546a999ffb28de5bb3722b0"
  },
  {
    "url": "assets/js/11.96384640.js",
    "revision": "0d775f7cf873059bd2ef37325d741ad1"
  },
  {
    "url": "assets/js/110.8f54ea5c.js",
    "revision": "bea6f4c63aeb1b1476c9b4b11dcdf299"
  },
  {
    "url": "assets/js/111.130d30ec.js",
    "revision": "0c67b1719de85fcc56786aa7cef150d3"
  },
  {
    "url": "assets/js/112.14f08666.js",
    "revision": "044162ac7a9570a28c5275b44e596fdb"
  },
  {
    "url": "assets/js/113.5aa184de.js",
    "revision": "638ec8612825efc5b831f6b7dcdf44a3"
  },
  {
    "url": "assets/js/114.d1006309.js",
    "revision": "435c74ea45cbc5f8f42e7070f2d0a46b"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.856ac4cd.js",
    "revision": "05be21ccaf1fe9d88834c8849c0fd842"
  },
  {
    "url": "assets/js/117.3971ee53.js",
    "revision": "d50b67c5bc2cf27dacf8b3ac378a3728"
  },
  {
    "url": "assets/js/118.724908f2.js",
    "revision": "a28bfb11250d128d7a4c6ed9e244398c"
  },
  {
    "url": "assets/js/119.cf7d2cc2.js",
    "revision": "8a912bbd615c712bc490f8c76a48b596"
  },
  {
    "url": "assets/js/12.920cd792.js",
    "revision": "eaeaa0e9662e83e8b31ce20625f86dd9"
  },
  {
    "url": "assets/js/120.112ae6d7.js",
    "revision": "19e03ef52156af76fb55ce775f86fa2f"
  },
  {
    "url": "assets/js/121.57b3531c.js",
    "revision": "d850ed9922128e12b2adcfda0608aabb"
  },
  {
    "url": "assets/js/122.c765b1db.js",
    "revision": "052ed936189c903a24894a22de5fe1a6"
  },
  {
    "url": "assets/js/123.829f6f3e.js",
    "revision": "65fcb5b333ef73f2803b3dba6a8fc1f4"
  },
  {
    "url": "assets/js/124.4eee2624.js",
    "revision": "2ccb643aead93e0a80ee836876721cef"
  },
  {
    "url": "assets/js/125.2eb54816.js",
    "revision": "d7444da6582902bb4531c1ae72eba37a"
  },
  {
    "url": "assets/js/126.e1443446.js",
    "revision": "a7c165615c610ea855fd2fccfec725f7"
  },
  {
    "url": "assets/js/127.b1dc0a03.js",
    "revision": "591ec5539c030f2dceef97b2e2542f4f"
  },
  {
    "url": "assets/js/128.a9c3b977.js",
    "revision": "662ab0ed430a511cbdb396a1b35ec0ee"
  },
  {
    "url": "assets/js/129.8263238c.js",
    "revision": "79ea6a98e6d311651ce10bd32fe4d980"
  },
  {
    "url": "assets/js/13.b2462250.js",
    "revision": "9cfae1755265c8c983c4dcdd7b7f418f"
  },
  {
    "url": "assets/js/130.0209cd20.js",
    "revision": "6623cc817e9ba19eb54ec5a1e5616c2c"
  },
  {
    "url": "assets/js/131.1d20f96f.js",
    "revision": "ebb00474b0fbb4ae312940f19173c1e6"
  },
  {
    "url": "assets/js/132.26ba56cc.js",
    "revision": "820f8f4cd57bdcf987b6a2ad4ba810ff"
  },
  {
    "url": "assets/js/133.abd7dd12.js",
    "revision": "b294841445497234908b05ea3e860c57"
  },
  {
    "url": "assets/js/134.17290205.js",
    "revision": "70d4d8d2fb686bd964b8b1ca35e5ed7a"
  },
  {
    "url": "assets/js/135.b7d45b1a.js",
    "revision": "65d01c3e22ce4500eb7d37db62df7b36"
  },
  {
    "url": "assets/js/136.ee12f508.js",
    "revision": "4dc5071f3be11e83a092db1da3d087de"
  },
  {
    "url": "assets/js/137.762e5399.js",
    "revision": "7bb6dfbc9e63d90a1e30c595cc16e384"
  },
  {
    "url": "assets/js/138.b980a581.js",
    "revision": "4c69f3bd091b0795949db87a632a5d0b"
  },
  {
    "url": "assets/js/139.890965c2.js",
    "revision": "396892a79af50dbfcd6f88e1916424ea"
  },
  {
    "url": "assets/js/14.a59cb4a1.js",
    "revision": "1fd7914cca041312d8351b9129181e07"
  },
  {
    "url": "assets/js/140.ec6bce0e.js",
    "revision": "63dd7ef894ac3f813c01d096b20e5328"
  },
  {
    "url": "assets/js/141.4de4b83c.js",
    "revision": "1d712b8773a47d908d1a0e7f4dcd750e"
  },
  {
    "url": "assets/js/142.ba68182f.js",
    "revision": "8a40e5ae007453981b8aa9fd239a703a"
  },
  {
    "url": "assets/js/143.3677e85b.js",
    "revision": "be5912b2dfcdebbef5eac3b19c8fccde"
  },
  {
    "url": "assets/js/144.adab38ca.js",
    "revision": "97fad21fcde276e49045d763fe3b956e"
  },
  {
    "url": "assets/js/145.142ecc3a.js",
    "revision": "d101ba457d7c80869fdc51b1a13238c1"
  },
  {
    "url": "assets/js/146.5e2611fe.js",
    "revision": "be514628c18e13494983cdf25f3b9b20"
  },
  {
    "url": "assets/js/147.51b8508d.js",
    "revision": "c87bfe295ea2f8f81db330df1f0c2996"
  },
  {
    "url": "assets/js/148.3259b772.js",
    "revision": "009010d19ede779a229c87f16dfc71ff"
  },
  {
    "url": "assets/js/149.076ec6a7.js",
    "revision": "a5c7292fff0c29d2d94780ff5f5d5b23"
  },
  {
    "url": "assets/js/15.357ca799.js",
    "revision": "9ce90e05639b00c07fdb4a362012df49"
  },
  {
    "url": "assets/js/150.90d7ff20.js",
    "revision": "55ed035be6a44c5703269cc735eb8285"
  },
  {
    "url": "assets/js/151.97b93f25.js",
    "revision": "b836aa4fd7da2ba8e5ba1d6fa3fc11ec"
  },
  {
    "url": "assets/js/152.6b020871.js",
    "revision": "38648c4071a749387df0365f87115e13"
  },
  {
    "url": "assets/js/153.8974b053.js",
    "revision": "844f5b82628e7dd0cced8de788d8193c"
  },
  {
    "url": "assets/js/154.41f9311a.js",
    "revision": "d7fc90b11842bb53d906a1e11abe2b02"
  },
  {
    "url": "assets/js/155.d0db5274.js",
    "revision": "3ead1d828d8e46cbcdca61485803e668"
  },
  {
    "url": "assets/js/156.3aee0848.js",
    "revision": "afd056302b6acffa2101c45d41296a46"
  },
  {
    "url": "assets/js/157.55c88a84.js",
    "revision": "c7f87740c94d2e1ac0612111b40ac03c"
  },
  {
    "url": "assets/js/158.963d0a68.js",
    "revision": "d625c2dc59010612cd2019a3bf279e65"
  },
  {
    "url": "assets/js/159.7af118c3.js",
    "revision": "f8aa4fa327290cc44d0152b1654d0233"
  },
  {
    "url": "assets/js/16.73a82f13.js",
    "revision": "5d3238585b10cef6922e1acccf6641e7"
  },
  {
    "url": "assets/js/17.cb4031bc.js",
    "revision": "1d8658663757ca00573c94fe47c91b57"
  },
  {
    "url": "assets/js/18.0d330aef.js",
    "revision": "c687fe9e3cdfcc3f49a25e2b44eeb813"
  },
  {
    "url": "assets/js/19.228243cd.js",
    "revision": "81ba04173143d58fbd64f4a8f8e15b0a"
  },
  {
    "url": "assets/js/2.67fe39dd.js",
    "revision": "0e1c3a7f4e09acadf4bb382c6cb561cf"
  },
  {
    "url": "assets/js/20.e4af1034.js",
    "revision": "2f6ae7515f3527043c5e15f1ad0ed188"
  },
  {
    "url": "assets/js/21.9537a62f.js",
    "revision": "a8c149f1abf62553a0ce3f1aabe9b0ca"
  },
  {
    "url": "assets/js/22.a08f8d86.js",
    "revision": "46a8e0da6e8f70ad4908d3a8d287d554"
  },
  {
    "url": "assets/js/23.42502061.js",
    "revision": "fa59655ec405f7b0eece1bb77bcb497b"
  },
  {
    "url": "assets/js/24.4c43da7a.js",
    "revision": "39b6e31099a31cdb00e113d3680e0ee0"
  },
  {
    "url": "assets/js/25.43ea19a1.js",
    "revision": "0a129c68a4fa423ed2d00492b3659d94"
  },
  {
    "url": "assets/js/26.5763a1b9.js",
    "revision": "f5b81c104c6674b24ab0be0025a08b2f"
  },
  {
    "url": "assets/js/27.2b697858.js",
    "revision": "9f678a3d4a6652639fd702a117020e58"
  },
  {
    "url": "assets/js/28.51eea140.js",
    "revision": "9ddbf2a3add66f2f9bc2288283a6da4d"
  },
  {
    "url": "assets/js/29.54e5459a.js",
    "revision": "845327b3cb6ae6d1dba8265cea44e2a7"
  },
  {
    "url": "assets/js/3.bd3b16a4.js",
    "revision": "3caa258015023020a1043d73accdc017"
  },
  {
    "url": "assets/js/30.54b6a3a8.js",
    "revision": "639dbce1b4843b4aaf96dcc8d7ac3cc9"
  },
  {
    "url": "assets/js/31.cf9f2440.js",
    "revision": "b5fbf63259d2a8adaf4ec05ea2050ec3"
  },
  {
    "url": "assets/js/32.679ef1d8.js",
    "revision": "6881a556ef7b5b2392f529bc416212b6"
  },
  {
    "url": "assets/js/33.bbbf37dd.js",
    "revision": "09d4c294ec5dd6cbd01e3b065f689c4c"
  },
  {
    "url": "assets/js/34.89f71b57.js",
    "revision": "6bed4a08fa1eafc0a426592c64d8bf11"
  },
  {
    "url": "assets/js/35.276a9f0f.js",
    "revision": "5f5d797e6636a77c80000704b8c5a371"
  },
  {
    "url": "assets/js/36.0680bce4.js",
    "revision": "f3af41124cea78fc5d36db2261f999a6"
  },
  {
    "url": "assets/js/37.98f6cde8.js",
    "revision": "d5d5cbe3c813760ffc59f37c2440b677"
  },
  {
    "url": "assets/js/38.2ace0145.js",
    "revision": "85e7e8edab997b52a48abf35c9d4b1d1"
  },
  {
    "url": "assets/js/39.77aad465.js",
    "revision": "cd34ccbd0e463c4a988bee6e54320ffe"
  },
  {
    "url": "assets/js/4.49506811.js",
    "revision": "2070b9e3d6bbcec39b93cd6145eea89f"
  },
  {
    "url": "assets/js/40.e105ef2f.js",
    "revision": "8b99495f5a812954318d4c56b2a84931"
  },
  {
    "url": "assets/js/41.f8ee5483.js",
    "revision": "74ddb1faf3f747eb7b86b5a0a4239bd2"
  },
  {
    "url": "assets/js/42.b215b3ae.js",
    "revision": "f9b59cba6232a6ab0e993089ead0592f"
  },
  {
    "url": "assets/js/43.05a61d45.js",
    "revision": "a1ead86bac592a7343c2dfd4db6a7e30"
  },
  {
    "url": "assets/js/44.16106c0b.js",
    "revision": "c5e98dafc646a22dfa953f91ad11c94d"
  },
  {
    "url": "assets/js/45.584f8796.js",
    "revision": "0241aa718f8aede6b0d3e47647284139"
  },
  {
    "url": "assets/js/46.c04f8691.js",
    "revision": "604fe572cba00e55f2d08f0d6ef971b9"
  },
  {
    "url": "assets/js/47.694295f9.js",
    "revision": "b630a36846cb82c0ad4a109f90e6cc5f"
  },
  {
    "url": "assets/js/48.5b30f2b5.js",
    "revision": "6743d6e6395a4bf4ec5ad47cb4dd2657"
  },
  {
    "url": "assets/js/49.30a67b07.js",
    "revision": "30b64bed8e865eb24881d3c29a93dbc8"
  },
  {
    "url": "assets/js/5.12e0bd25.js",
    "revision": "ae3e365cebd2783fccb9ea4cfcd5bc8e"
  },
  {
    "url": "assets/js/50.ff8c0794.js",
    "revision": "a4a268856e9ca76fdd1b0caba3c1c297"
  },
  {
    "url": "assets/js/51.8027ae98.js",
    "revision": "a62490ad14c57e0564cbf18ec0815fb6"
  },
  {
    "url": "assets/js/52.f58d3385.js",
    "revision": "d2d2cacf03fb32b1f0509be9097175df"
  },
  {
    "url": "assets/js/53.3dbee65e.js",
    "revision": "75c0f6a0372c2519e8348903937bbc13"
  },
  {
    "url": "assets/js/54.97bd95c6.js",
    "revision": "2d02391be9b6f0369091ba4d6b5a341e"
  },
  {
    "url": "assets/js/55.d842fd46.js",
    "revision": "689b79325af229894fdd52b5a5db7ae3"
  },
  {
    "url": "assets/js/56.2381d688.js",
    "revision": "02fc85d3ac4647b9dde0b6e209bf1d2f"
  },
  {
    "url": "assets/js/57.8fe6a0ab.js",
    "revision": "3eb215b115ac10e6a92f282bbadee509"
  },
  {
    "url": "assets/js/58.e8d3bddf.js",
    "revision": "b08e542591066d08a4fac11193a59cb4"
  },
  {
    "url": "assets/js/59.44158fb5.js",
    "revision": "40cde8ee2017b1be7054a68c126f1295"
  },
  {
    "url": "assets/js/60.c54b9505.js",
    "revision": "08c6dd961a4edb6f0a7909eb9a1aa058"
  },
  {
    "url": "assets/js/61.9afa996d.js",
    "revision": "aceeed4ad782064460a613f33d93a3a1"
  },
  {
    "url": "assets/js/62.dd80bec6.js",
    "revision": "cd00d691496138027c85b4e421ecccc7"
  },
  {
    "url": "assets/js/63.a3984fc6.js",
    "revision": "7261403fd6ebd59c9cfdf4be7bedb28c"
  },
  {
    "url": "assets/js/64.2d18435a.js",
    "revision": "b6adb701dfb2319cd3c997b9583d2b35"
  },
  {
    "url": "assets/js/65.258aa60a.js",
    "revision": "ce8492f5293c1e9330e832b0f5a7a2e2"
  },
  {
    "url": "assets/js/66.3d4270a6.js",
    "revision": "baa1896ba7cd7fe6d7ede20901f5e3e7"
  },
  {
    "url": "assets/js/67.b287a163.js",
    "revision": "fba169ded84a23f0eab4889a5e015a7c"
  },
  {
    "url": "assets/js/68.aeb97e02.js",
    "revision": "76cc7be98ed4c341681f0e13f58da794"
  },
  {
    "url": "assets/js/69.9f4f6a6e.js",
    "revision": "584616595afa7283dbe577686377ba61"
  },
  {
    "url": "assets/js/70.4a37f981.js",
    "revision": "d4c171796784e23cf9a2a325b425f60f"
  },
  {
    "url": "assets/js/71.3fd24807.js",
    "revision": "6c843afd2b2b4ff0ff5ae609c4789f8a"
  },
  {
    "url": "assets/js/72.9b56a368.js",
    "revision": "56cfb9f170e15bb1f643d3bbb724a7a4"
  },
  {
    "url": "assets/js/73.84356e44.js",
    "revision": "fa340d3500b020c9c4c9fa2d0172f024"
  },
  {
    "url": "assets/js/74.4e606a08.js",
    "revision": "668fc22396c6260b238e8b906337859d"
  },
  {
    "url": "assets/js/75.ce15b569.js",
    "revision": "033dd4533201a0db7817015f76c01042"
  },
  {
    "url": "assets/js/76.85c8fcff.js",
    "revision": "0d4ed5a047d70c3b45c3a20ef11bb1c9"
  },
  {
    "url": "assets/js/77.f9ec3450.js",
    "revision": "6c6102207c2d77e481cbdccc2cfcf52f"
  },
  {
    "url": "assets/js/78.e26657eb.js",
    "revision": "de6931e684e886ef0408b33ac7ca0d9c"
  },
  {
    "url": "assets/js/79.37c613f7.js",
    "revision": "a3b8d13a81e6abaf292804a08d60391a"
  },
  {
    "url": "assets/js/8.00d47150.js",
    "revision": "3ce5318e6595f48b23200c5460bdd3cd"
  },
  {
    "url": "assets/js/80.8ef6bde9.js",
    "revision": "72e146b5bc0044576135a4ceb3aaa2b7"
  },
  {
    "url": "assets/js/81.c718f38d.js",
    "revision": "12e5d8ca9c17885c5ec7eae2d7172341"
  },
  {
    "url": "assets/js/82.42e16230.js",
    "revision": "3939e7241189d8174fc6b109e11dd2e2"
  },
  {
    "url": "assets/js/83.c210bf8f.js",
    "revision": "90e14ee85032fc82dc8d2e4a3c53b693"
  },
  {
    "url": "assets/js/84.cc2f23d8.js",
    "revision": "1e8042d923897a718b881e9a98f92d59"
  },
  {
    "url": "assets/js/85.bd97e1ea.js",
    "revision": "d06297d3449b46a278b1b7e00e3991c4"
  },
  {
    "url": "assets/js/86.19ce4fe3.js",
    "revision": "7834016c487717ac102746e5eb1e38f2"
  },
  {
    "url": "assets/js/87.16388749.js",
    "revision": "12d393cfbb406f8aa4106981771ecca6"
  },
  {
    "url": "assets/js/88.a04eac3b.js",
    "revision": "b3e84f778d65ed45d45408470b55ea68"
  },
  {
    "url": "assets/js/89.e1892f47.js",
    "revision": "85683636a5047a77fdaff823ccc3b513"
  },
  {
    "url": "assets/js/9.6e18646f.js",
    "revision": "015dc1de0b2c8d5d8ef468d315bdbe52"
  },
  {
    "url": "assets/js/90.7116bbbf.js",
    "revision": "a8a2e25a3b50825279e9215ff1713090"
  },
  {
    "url": "assets/js/91.5117cee7.js",
    "revision": "03d5cb3b4a1eaee6a2ceb3b526d870ae"
  },
  {
    "url": "assets/js/92.b988807f.js",
    "revision": "c3a4f9057077ef2152d5b15d7ba3519f"
  },
  {
    "url": "assets/js/93.bc02a7e7.js",
    "revision": "05236c3c8bdc3f94ec0132c99b988101"
  },
  {
    "url": "assets/js/94.2edddf54.js",
    "revision": "b77f026725a21392d2e3b469e371d724"
  },
  {
    "url": "assets/js/95.735682ad.js",
    "revision": "7ad256ede2995e333cf7e4371f2ca00f"
  },
  {
    "url": "assets/js/96.840125c2.js",
    "revision": "73054ddbcfcad7f137c2e91102a685c5"
  },
  {
    "url": "assets/js/97.89114019.js",
    "revision": "f445c3e50e5bd9865cab27047ddd331f"
  },
  {
    "url": "assets/js/98.697e4ff3.js",
    "revision": "053082003e28d21d6dff99b666cd2321"
  },
  {
    "url": "assets/js/99.1655d227.js",
    "revision": "33b6abcf1ddc07405d4916400101b2bf"
  },
  {
    "url": "assets/js/app.b381f2ee.js",
    "revision": "99075918487a6d9b99638bfcc3d071ff"
  },
  {
    "url": "assets/js/vendors~docsearch.20b3f658.js",
    "revision": "7412d30611385ee05cb918c7bea5d6e8"
  },
  {
    "url": "index.html",
    "revision": "bd81c86351e70a29726a2559c0ea4faa"
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
