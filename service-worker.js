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
    "revision": "0a3f2e9650e87b84cb46170ac9fd32c7"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "bcc7417398144367558c1ce5227770ee"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "343ea45e02599f6de64319d37ad776ce"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "4b291f40752c0c2bd63a79550977a1e3"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "bc0d9b04b82027651c158713d4a9b902"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "4bd70c3b8dfa11109f8942cf53f5035c"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "8a814a40cfdc6db3003e16fd7f9c953b"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "9f7ec8c30304c7dd2f65a5c1295f0177"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "9ff1962754b5b788122dfc83d22e3267"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "09a6920fabfe65718167a88102a59c02"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "392a2e58b387f1ad36a90f718b81b7ad"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "96ed17f32b54256fbdc2ffc86c54f2f6"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "24498685941121d7390248e212d77d03"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "f66ae899190be7c22409d9e0b3a66dfd"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "c1c30e9f6308f0338d83fd19c46a808c"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "4cad92a58273914e81ae712f9a439335"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "937d7943a57cb28815eec4f042677485"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "0b9761bcaa99a4d98f89ac00f402089c"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "4da2fc4959a19d03fa14fc164411164c"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "4e3cda01a410074ffeae2fa78c2d8cec"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "0a6563460f09257f945b90ace22e682b"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "378cc55f6fe0181b16109c3565f20655"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "788a2a556663b3e1f1fcf5aafc852b35"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "3792ed45afab8cd70e90255f05ae19f6"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "98de677ce38e392b57c808de03047f66"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "ac09609d9b571a3b20536613a5000ef8"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "f09b5c94e558f69409c80d8df87bf5e0"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "81566e97217ce24476e74c7a81d320b9"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "09fe27a3a01033605feeb22da9e38c4e"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "67a91d788b83d88b30e8035f1816c51a"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "71cfe114497aa7da64e6d5959594c3db"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "3f9b6a947d850b74fc90c73449f1558e"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "cb3b4833d94880b174dba9fcf0de51d0"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "0a32a2281c6c99597b6336597da87f7f"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "cc1af6c276d77d78d02521b000590b9f"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "b8dc5c76e99d642e116b928d110f3963"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "e086703a9ed6927180b413ef4ccac9e0"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "dfac19e02295f69720df1ea1f40aded4"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "b7f6991e1d31df55b3161e2c5414f995"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "68dada6b5968604908b94290f82f6cf3"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "5e09d93d471e97d471884036feefb34d"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "be2c64fbbc70348810de6a11446f348e"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "e374e7608552935c6ce2dad2ea4f0696"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "c6ddb10820242df6182f54af96db13c3"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "c117dab94341931890f73638993bff9b"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "69b20b2e43bca51acac7df1c200f430c"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "6643ad6c59bd69eff9533d689ca0c6e9"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "536bc877b0f866847d6a9b22c0382694"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "cc6f1d2669572969bd2a8067a0fed8fd"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "f142f90b60b1296ac1a1bf670e4b3b1e"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "616a6532aa512c0b208eec0eb1f0272e"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "52e5f4abbc4b3b1751d030f0663ba585"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "c8ece1af87fe6328598c2e5aa1697763"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "8c3855b21d45a1809e523e45baa8374f"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "bc1a834fa802eed75456fe8ada025191"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "0cbea9515023620bc74a5929dbb6435b"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "e1b27875623231572a14201f79044042"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "237b2f195dd65ba90429b0f51ffe9b4e"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "d7db1de13cd9d56c08da0204e78098a6"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "f02e5584d2911e7ee03270ffdff4797b"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "b26294728589348ec3e3a70de695750a"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "03063c800719d8d2d87d76d906204ef6"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "7169c1eb50ccc2d4e8f41577c77b72d1"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "539947a5d74039b721780871f2885045"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "9fc2ff11ad3d3ed2c28600ce60fe2cb4"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "be2c1adb12d8bd85194f53adf6a5262c"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "6ed788214435c1ae3b93781232fb8bf2"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "940f64d76626d66de5127e1a5ec28bac"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "a349b8b518fc63bad36e0752eb5f509c"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "7c7040ba08a952cef635f1d864c9c44c"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "d4a1af8c076474c06d4cde220798e803"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "b47c8d466698529a2f2528acf87d861e"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "1e0c3b6c18324c5992015840b884e8d7"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "9968109da39a153eac99ff245e1b9cb6"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "6f87ea1e7b2e51def10aef8d65b3e550"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "6e2b58cc5ae2d0347f21d6c3f4fd8342"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "9915b75b5ee05afe29ee9f65c8370694"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "2925d1ab9da4aa9065d17d7afbc52cee"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "ec2ff158a7df618d59e5c784ee11ad9b"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "80c19ada4dc6e30418160c63688b25fa"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "5aade26e2b76cd525a53a355d431c1b3"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "44c4bec1663c00435aeb18a0613ccc58"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "fc2d639fabd05aab05c961ae6711c6a7"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "363b6ded05f7445bb2302a098fa169c2"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "2f0eb30aaec960711d6da1f3eb8e236f"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "012de87fbc0d17189099a7a4afa1efcf"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "fb6ca9b12f18f174e3ea8fd20acfcd28"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "d03b0a7fa639d11c3510f877b9ad93f6"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "e7c88406603ae0c1b54bad7fc98fff16"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "935481dc29df128f6cc1bbffe6c06ba3"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "992078fc6eead4eff6ab0981f924534c"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "8acd72d17f2152faabf94604e2ed732d"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "bbdd6350fa183d3af990f107c926c39a"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "d9cc3b669b35d713af58edf0153042c9"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "fe440730d2fa478a21983629fbdbd335"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "2ee2fd94fc1d1ae934768a6d6e3271f6"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "b754c5fd36366d1452279401c2002459"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "a35d780657a8d284f0343de740b817ad"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "f8a27c4f3b82e49f56165f7a08e54310"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "6fa6abd4a8facf1f19ef98a9420ce2d9"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "a581c9f8b57a47e241f98dd5fa68afff"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "f8dbcb586734004ca23b922f493a7b6f"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "77376b33104ba96c0c912c9c08f4ddf9"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "5972aa59af0683c6291031a15abac369"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "922a276ef7c67e9c4d62f861418b8ed0"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "9ee53644dd5e508f0d8c973853ccb7fc"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "3bdac7ed454798104460af8fe2f68366"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "4261cebfa10c2597c6f34a0becbdef38"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "5cdc131f48388eee01db5992edc08a83"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "91fcee86d588a9c3fe635763430852a8"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "38c74272310f5706a3a8526545168fb9"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "795b3e2da9a4d5ea2637c303d8f671e3"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "9b0d23fab117f5c889456b39303fbf7c"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "bd97d17095f0dc618b76c2a31ad2df7a"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "6dedbb6a632f9772d94d8381ea03ee8a"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "20158f741cae5bb4861db25cfe387114"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "8c20c4b8c1189f72c1ba477d46aba07d"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "f76122490f16d86a90f0d78f157993b2"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "85654eb69af044660ecd0417d920f9ef"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "d3b2f99467c4eabf29eeef335c0c4321"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "0b442d25ea53e64403e02177d429a7d2"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "c0fa94a2d9bc3be7fe5a38f6bf949b9f"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "1338257d3b9d588597a2646976855b0e"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "369112544de95c1f5b297b197d372bb9"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "f434595088bc2c5e1aa72a0059094cf8"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "d4f45844bf2172eb22ac72d1efd04b0a"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "c88d59b5a1a3207bda6c7ba366b59a4e"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "3d6ea01c45d15f975bea5ef67114b3eb"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "2e7ad772f8b5ccd6a1cb1811cfc0995f"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "678509c779aec0e48eb03fcb92da20c9"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "2a6ea97230ef8140a450c409b1a00a1e"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "c6f97fc77566f6628e448acb1d96fca3"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "f6d02d08afb0f63733652fd738625843"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "58d5e6604aa62b912e7e3ebf500320c6"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "097f62bc92d63f1e898f43c2b71eb861"
  },
  {
    "url": "404.html",
    "revision": "cb1cce965c7c7d134f989935b5e31e2f"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
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
    "url": "assets/img/buyNow.2683aa9c.png",
    "revision": "2683aa9c5033194aa12b7c5222915613"
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
    "url": "assets/img/themeOutput.fb0c0721.png",
    "revision": "fb0c072183d8d0df429c56772e2dc1d8"
  },
  {
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
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
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.01fd9534.js",
    "revision": "f958c5cc5cd10517760da16111ee2157"
  },
  {
    "url": "assets/js/10.d7f40f84.js",
    "revision": "0f35a21d894c47a73d772d7a2065c3e6"
  },
  {
    "url": "assets/js/100.aec562d7.js",
    "revision": "a9835ac04a6378f36708b29aa840963e"
  },
  {
    "url": "assets/js/101.fde25cc9.js",
    "revision": "ef609b778f3143dc669a6756d2eba411"
  },
  {
    "url": "assets/js/102.fa3eb99f.js",
    "revision": "b40167b6c20e20f410a282622b797f08"
  },
  {
    "url": "assets/js/103.c0e1130a.js",
    "revision": "4015acfa1977be7838aeccdb46cc23d8"
  },
  {
    "url": "assets/js/104.ea1559f4.js",
    "revision": "62d49492a23a5198aa5af274f697dc83"
  },
  {
    "url": "assets/js/105.9195b187.js",
    "revision": "b3dc1c2861a4285bfcb0fbcc967018e9"
  },
  {
    "url": "assets/js/106.3308b333.js",
    "revision": "3d69caee0a957e2c5632772eea78a6e1"
  },
  {
    "url": "assets/js/107.3fc4d1b3.js",
    "revision": "f99b37f9e2901ea3071cd3afcda11af3"
  },
  {
    "url": "assets/js/108.7fc57a41.js",
    "revision": "fcb22f390895f54337f8d466b6ab92fe"
  },
  {
    "url": "assets/js/109.4bdd7abc.js",
    "revision": "f3771ce4243d7a746b6cfc5365daf404"
  },
  {
    "url": "assets/js/11.84c50eb3.js",
    "revision": "3621f3cf717d86b6882a5404ef67f107"
  },
  {
    "url": "assets/js/110.a2f50760.js",
    "revision": "af5a4e1a2346aa4c978ff852f6a8a41a"
  },
  {
    "url": "assets/js/111.fb3d0aa2.js",
    "revision": "19d29937ef9a0f1f75d864ceb6da0016"
  },
  {
    "url": "assets/js/112.ad03d6c4.js",
    "revision": "38b79adebf8f4184758843ea1096f834"
  },
  {
    "url": "assets/js/113.0023930c.js",
    "revision": "b05f792ca17583713d3803046d17b79f"
  },
  {
    "url": "assets/js/114.249893ff.js",
    "revision": "05755bab6986d52a5049a04b54b7b804"
  },
  {
    "url": "assets/js/115.005f3859.js",
    "revision": "e4a83909eeb368b7d8066d59d672d496"
  },
  {
    "url": "assets/js/116.3b15e756.js",
    "revision": "9c2656c1cbd0caa6b5ce8f80da43ca6f"
  },
  {
    "url": "assets/js/117.0bfba8ae.js",
    "revision": "b0180bdf7e7469c6e7b53d741f7a4b5b"
  },
  {
    "url": "assets/js/118.eae49c7e.js",
    "revision": "1fccff1b4eef434c428babcf726cdcd1"
  },
  {
    "url": "assets/js/119.8b3bd2f9.js",
    "revision": "277bba1eddf896f72b9bcf002346c61d"
  },
  {
    "url": "assets/js/12.460b8fe0.js",
    "revision": "d51cd61b6c184338fd743f1f27cb23e8"
  },
  {
    "url": "assets/js/120.b6f7c0f0.js",
    "revision": "397c385d51cb6ccea216b9837302053c"
  },
  {
    "url": "assets/js/121.ab84bf47.js",
    "revision": "77ff5be23b345e253917848a11d72ed5"
  },
  {
    "url": "assets/js/122.7e55bfce.js",
    "revision": "f74295eeeddbdb5863cb7cdb0eb97ea1"
  },
  {
    "url": "assets/js/123.5173b4a9.js",
    "revision": "e115a7c9adcd9354910f6107575556b0"
  },
  {
    "url": "assets/js/124.7ab274b5.js",
    "revision": "0072f5fb9f83b0248ccdf2879a5ea692"
  },
  {
    "url": "assets/js/125.fe5745b9.js",
    "revision": "2a012395ab1bc39c115dd7a7e0782754"
  },
  {
    "url": "assets/js/126.97cee80c.js",
    "revision": "ee20fc716324e995ce4ee2d795e77604"
  },
  {
    "url": "assets/js/127.12fdb198.js",
    "revision": "f81cc581afffe2a7ed13d4f2d3e4594c"
  },
  {
    "url": "assets/js/128.d3fbcb75.js",
    "revision": "3811a183be1aa1b63b032b8584c6b18e"
  },
  {
    "url": "assets/js/129.a8675cdb.js",
    "revision": "81ff5b1b2a7858d50b12afa1b3d5fbbf"
  },
  {
    "url": "assets/js/13.0afe3946.js",
    "revision": "cc270e01d5f16b906b79cf8712c66867"
  },
  {
    "url": "assets/js/130.31156469.js",
    "revision": "7619b99a6bbb452bfb9d2b7f6cabd433"
  },
  {
    "url": "assets/js/131.181296fe.js",
    "revision": "50b94b5282671099203f3a0df5594643"
  },
  {
    "url": "assets/js/132.45f977fa.js",
    "revision": "5175e11eb1f81765c56c6a04e266fa21"
  },
  {
    "url": "assets/js/133.c13eaa46.js",
    "revision": "81c76349d694246817b0283a58713a30"
  },
  {
    "url": "assets/js/134.0c3c4d11.js",
    "revision": "92ace89c070a153c6bc8ba345156c237"
  },
  {
    "url": "assets/js/135.2ec875e6.js",
    "revision": "377fa9701a06995618add963d5fa368f"
  },
  {
    "url": "assets/js/136.5db37398.js",
    "revision": "80872a1391d40e0f33b0c6dbfe8ce89a"
  },
  {
    "url": "assets/js/137.d85c736c.js",
    "revision": "1e32e91979bd8cacc35dfbd445d63210"
  },
  {
    "url": "assets/js/138.f09bf377.js",
    "revision": "17bf36ae72dfde2a4ad4a5a5544ad3d5"
  },
  {
    "url": "assets/js/139.77340032.js",
    "revision": "0f302c2264118542c0d2798073675401"
  },
  {
    "url": "assets/js/14.ce35807a.js",
    "revision": "d6a5e30e3b5e7bb5bf25f3878321c25c"
  },
  {
    "url": "assets/js/140.eefeed91.js",
    "revision": "a80d28c782f89514c3e3fcca2a81bb4c"
  },
  {
    "url": "assets/js/141.df8cacfe.js",
    "revision": "00344b4d84a4424d68ba1906049b3be0"
  },
  {
    "url": "assets/js/142.a859c1ca.js",
    "revision": "6db4ee4741ed982a62fe6ff360f6f23e"
  },
  {
    "url": "assets/js/143.cb6f7ae5.js",
    "revision": "42398e97aba39b9adc99dbb54f3e067f"
  },
  {
    "url": "assets/js/144.59e1f292.js",
    "revision": "d814ed45221c9b594b774dce8c8d9b78"
  },
  {
    "url": "assets/js/145.4f5f0c40.js",
    "revision": "e66969dc27dd59298ee98d7803e7617c"
  },
  {
    "url": "assets/js/146.59f66efa.js",
    "revision": "d96ceb41eb7c8de28b1058c956307f1c"
  },
  {
    "url": "assets/js/147.e2d46bc3.js",
    "revision": "b3c58c04321edf6b6ad49e38c1b3f022"
  },
  {
    "url": "assets/js/148.ab1162f2.js",
    "revision": "34d354541f5faf8d8be0b5d05949aca2"
  },
  {
    "url": "assets/js/149.6ca5cd38.js",
    "revision": "acf1f447f851ab77c72db3ac38cd6091"
  },
  {
    "url": "assets/js/15.133787de.js",
    "revision": "51fe50d5bb46c4edb45bf0838e085d2d"
  },
  {
    "url": "assets/js/150.8aed1e98.js",
    "revision": "d52f6200b2faa246b45bb99a69affef5"
  },
  {
    "url": "assets/js/151.d8ab3c30.js",
    "revision": "62200b495f254076826bbf6c5eeaa274"
  },
  {
    "url": "assets/js/152.629d9e0b.js",
    "revision": "e92c49de43c1938e690b23206f8986d3"
  },
  {
    "url": "assets/js/153.e63bcf62.js",
    "revision": "1faa1715eeff58df32cbc411b8e38385"
  },
  {
    "url": "assets/js/154.6d65cf57.js",
    "revision": "bdb0f6d5dbeda955a01c6ea2b013425f"
  },
  {
    "url": "assets/js/155.f838f6f4.js",
    "revision": "5a513802ab9a9b4ec06adc703c1a62b4"
  },
  {
    "url": "assets/js/156.a5343d34.js",
    "revision": "decdef9d24a8a82f149f4631bf221c43"
  },
  {
    "url": "assets/js/16.1063b103.js",
    "revision": "cbeef20a50f657676b75b0649a9233ea"
  },
  {
    "url": "assets/js/17.c1c36bc1.js",
    "revision": "080e4f38fbec333b8c3b1f93b2991295"
  },
  {
    "url": "assets/js/18.1f8bfb84.js",
    "revision": "c377051d0da7b6fcff4a817f99d37560"
  },
  {
    "url": "assets/js/19.9b1efe31.js",
    "revision": "7173470fd61e3403a595a9dc9054da00"
  },
  {
    "url": "assets/js/2.88f9e1b2.js",
    "revision": "770922a6224d83e989229caed7f59035"
  },
  {
    "url": "assets/js/20.b6e11af4.js",
    "revision": "5f08bd71ba7e32d271924c5db397e806"
  },
  {
    "url": "assets/js/21.58c585aa.js",
    "revision": "361f397114c46d56facdfce11ea5bb9f"
  },
  {
    "url": "assets/js/22.d1b804df.js",
    "revision": "4a754a8b00758ba0cee64a82b1256632"
  },
  {
    "url": "assets/js/23.ef9c2b00.js",
    "revision": "2896a110ef1584c8583ee5e70266d5ac"
  },
  {
    "url": "assets/js/24.55abb0a4.js",
    "revision": "d0bbfd180915f67217c973a14b9a9049"
  },
  {
    "url": "assets/js/25.84aa812f.js",
    "revision": "4ec4c38547b2703d549d077461f1d4cc"
  },
  {
    "url": "assets/js/26.17f25ff0.js",
    "revision": "57033804e0801d797b4b1557b32c15a9"
  },
  {
    "url": "assets/js/27.f13384eb.js",
    "revision": "d34d7079cfc07e941c520ae70f775902"
  },
  {
    "url": "assets/js/28.ce685cd3.js",
    "revision": "81dc96ee84ebc231746b7492e584acf4"
  },
  {
    "url": "assets/js/29.e355a96d.js",
    "revision": "db1575422f23002d3c23b0c06815d6cc"
  },
  {
    "url": "assets/js/3.9bc1bbdb.js",
    "revision": "6311c820a5772ab701c2e2b15678cbc6"
  },
  {
    "url": "assets/js/30.6f0729b5.js",
    "revision": "a39833182b8922d0762f0de739e5928d"
  },
  {
    "url": "assets/js/31.a503b258.js",
    "revision": "b952f76bee9415a5a75a10b948da8e4a"
  },
  {
    "url": "assets/js/32.adbb3381.js",
    "revision": "06a0d73a913ebd7818d0e7d32b03d2eb"
  },
  {
    "url": "assets/js/33.3f552f5c.js",
    "revision": "fb8bd8e18faf23d807ea047734c4f59e"
  },
  {
    "url": "assets/js/34.27a93636.js",
    "revision": "e72dfda442e62dbf7b4bb962071d3568"
  },
  {
    "url": "assets/js/35.047a17f4.js",
    "revision": "19da98cf01386506bbfd43fd11594a0d"
  },
  {
    "url": "assets/js/36.3659dcbf.js",
    "revision": "878bb3ef27d97a1024fdb1b11198df6e"
  },
  {
    "url": "assets/js/37.5b180cff.js",
    "revision": "06c41885e0b87d25f7823db5da9350b7"
  },
  {
    "url": "assets/js/38.5c3dae3f.js",
    "revision": "7bec1d5585ffb014b15a30605e6126a3"
  },
  {
    "url": "assets/js/39.7d2e3ee9.js",
    "revision": "a8689610078687b2ec919b98606f2e04"
  },
  {
    "url": "assets/js/4.c4ec618c.js",
    "revision": "a3003abf358394cdd01de66b5e76a17c"
  },
  {
    "url": "assets/js/40.ea235b8f.js",
    "revision": "254f98ada4b5e99094723b3f55b860a5"
  },
  {
    "url": "assets/js/41.7514b7ef.js",
    "revision": "7347560c1dcb0a66c4a1099bbcc06d0d"
  },
  {
    "url": "assets/js/42.9ca308c4.js",
    "revision": "74fb5dbc018e5706d4eac1deec454f25"
  },
  {
    "url": "assets/js/43.8ef548eb.js",
    "revision": "8dc76e48de3228b60f0e96e24ba59f37"
  },
  {
    "url": "assets/js/44.0aa8935e.js",
    "revision": "16dc92b384af476d2381dd1a5877f8f7"
  },
  {
    "url": "assets/js/45.bd1cbd0f.js",
    "revision": "83ea865ff596280781a5a75198452c18"
  },
  {
    "url": "assets/js/46.a5e59a17.js",
    "revision": "80ee2b44e1d579ca8d55a72e4e38b2fa"
  },
  {
    "url": "assets/js/47.fdc5daa1.js",
    "revision": "e83ac6c78f8f20327a26ddc0deec09ec"
  },
  {
    "url": "assets/js/48.eee4f164.js",
    "revision": "daa1fa9d47beb07c9c9c4031caffb6ec"
  },
  {
    "url": "assets/js/49.af53e8c4.js",
    "revision": "ad035603978b9493e0504d5f430831d2"
  },
  {
    "url": "assets/js/5.283c41c7.js",
    "revision": "5e9aabef3b976e4fc565acf2af41582a"
  },
  {
    "url": "assets/js/50.d7baaa49.js",
    "revision": "808066adca6f4af2ec2ad3a2116b49d1"
  },
  {
    "url": "assets/js/51.9c2ecc3e.js",
    "revision": "86586c63a5dc87effcabd343ece67626"
  },
  {
    "url": "assets/js/52.7fbf2459.js",
    "revision": "8079ead8055d8182a5f1196c8e55b100"
  },
  {
    "url": "assets/js/53.fe6fa9be.js",
    "revision": "a2146350ee67ee0707734a2d0dd03266"
  },
  {
    "url": "assets/js/54.9291528a.js",
    "revision": "94f7c3730ea80e082971a18ee9ac48e1"
  },
  {
    "url": "assets/js/55.71e88a40.js",
    "revision": "ba3db1d08f48ec995c1182ef9dd33643"
  },
  {
    "url": "assets/js/56.2bab1ed0.js",
    "revision": "4dba30082661011ee4fd949b9ab7fc91"
  },
  {
    "url": "assets/js/57.8c8235e3.js",
    "revision": "35bd61ebae811e0dfb6478cb5498d510"
  },
  {
    "url": "assets/js/58.a17eb7bd.js",
    "revision": "407b6491875682da92ed4437191d2233"
  },
  {
    "url": "assets/js/59.53f9897d.js",
    "revision": "369a7b6f2afa309761447529039f80bd"
  },
  {
    "url": "assets/js/60.f7d646ca.js",
    "revision": "5fe76a750e15c2370018d50fee44bf4f"
  },
  {
    "url": "assets/js/61.40b4c64a.js",
    "revision": "be986127ef353339394d7e5ba1e28289"
  },
  {
    "url": "assets/js/62.28dd8dd4.js",
    "revision": "3cd734079f44cb7cebb14dfd6c9cd84c"
  },
  {
    "url": "assets/js/63.bb69ab58.js",
    "revision": "5c369aec095bb89431bff7c8b4555470"
  },
  {
    "url": "assets/js/64.0c2af891.js",
    "revision": "4534e32c55e859825acd54d7d6373a7e"
  },
  {
    "url": "assets/js/65.eb6bba86.js",
    "revision": "3a8370d29e90057916ad63f8b97efe5b"
  },
  {
    "url": "assets/js/66.2027042c.js",
    "revision": "4eae1cdff1d01a595bd3dc71e906b36c"
  },
  {
    "url": "assets/js/67.cd70d9c4.js",
    "revision": "f775320a9a1ab126cb673349856e36c0"
  },
  {
    "url": "assets/js/68.119da536.js",
    "revision": "82be4d9e807a1a1188637f9ee196a8df"
  },
  {
    "url": "assets/js/69.809e50a4.js",
    "revision": "18476b3c4a91a3d706c926eedf041788"
  },
  {
    "url": "assets/js/70.db8e1cc0.js",
    "revision": "c1e2f213478eaeaa4f5be946bfd0f74d"
  },
  {
    "url": "assets/js/71.e870c7f7.js",
    "revision": "8dffcf2ac597496608fe2550b37b33b0"
  },
  {
    "url": "assets/js/72.89afb9eb.js",
    "revision": "a99ebc64b9910b1e884043147aa7375e"
  },
  {
    "url": "assets/js/73.afd10e8a.js",
    "revision": "8d285c527aadeb2be6f33150014ea824"
  },
  {
    "url": "assets/js/74.aeffad4f.js",
    "revision": "8fd9ee08d4d00b88f8413d11a5413724"
  },
  {
    "url": "assets/js/75.c96ef638.js",
    "revision": "8497c49a297abd21f929a43199391ca1"
  },
  {
    "url": "assets/js/76.c6ee9e34.js",
    "revision": "4c0ae229fcea2fd3bdf3c56a6c2b40de"
  },
  {
    "url": "assets/js/77.f9acf532.js",
    "revision": "cd594f02401bb66d210e4812cdc1925e"
  },
  {
    "url": "assets/js/78.c6070728.js",
    "revision": "374da29abde46c1d24c0cf701926efca"
  },
  {
    "url": "assets/js/79.8e317d2f.js",
    "revision": "230401f6afd9a3ed9774c77777a37825"
  },
  {
    "url": "assets/js/8.da198ea9.js",
    "revision": "9b5807fed88afad8d8d0278d91cf1f67"
  },
  {
    "url": "assets/js/80.647e0832.js",
    "revision": "0e0aeac45ef777d7f891602e1a5666cd"
  },
  {
    "url": "assets/js/81.3f2b4bb3.js",
    "revision": "ebce07111f6ce84682265ab634bafa5e"
  },
  {
    "url": "assets/js/82.0210db4d.js",
    "revision": "18d3801f1b2b808b854e6a92292f83c0"
  },
  {
    "url": "assets/js/83.aafde5c3.js",
    "revision": "22d305d4152c094f68b79373c5bd3cda"
  },
  {
    "url": "assets/js/84.a3af3758.js",
    "revision": "bf0c853456cd5dcc3727b31f6c917e16"
  },
  {
    "url": "assets/js/85.350dd0e0.js",
    "revision": "f7490aa30b85829d2b803ca7c2f351da"
  },
  {
    "url": "assets/js/86.b9435011.js",
    "revision": "059deaf2b1031f354189eb6124311a43"
  },
  {
    "url": "assets/js/87.ea45f34a.js",
    "revision": "f894e7ac73f5d8eb0dd28be0592d4117"
  },
  {
    "url": "assets/js/88.89404f81.js",
    "revision": "cfee1232e156bbb5437cfd41e26d3362"
  },
  {
    "url": "assets/js/89.eb0d32dd.js",
    "revision": "1213de1fa1c846538dbb1af9eb750d48"
  },
  {
    "url": "assets/js/9.3f964462.js",
    "revision": "ec5c89e9922704e720cd2701bfdd2729"
  },
  {
    "url": "assets/js/90.c01d855e.js",
    "revision": "6637741f70205ad1ed827d8d64830306"
  },
  {
    "url": "assets/js/91.423ef75c.js",
    "revision": "0c8f9679883ba845d49b166e1ce7ede6"
  },
  {
    "url": "assets/js/92.27c90529.js",
    "revision": "2d17cf92cf9458852845dca5b390709d"
  },
  {
    "url": "assets/js/93.728e8a68.js",
    "revision": "bfbfd134b1712379204d457515a05520"
  },
  {
    "url": "assets/js/94.6ebe8049.js",
    "revision": "48e497ec7b0436aef5c7f0be7868d9e0"
  },
  {
    "url": "assets/js/95.375ed480.js",
    "revision": "169762009234f0025d698c388c603541"
  },
  {
    "url": "assets/js/96.5f6c0f2c.js",
    "revision": "b168feb8e416ae4529af7a43c2f8edd2"
  },
  {
    "url": "assets/js/97.6abf8fda.js",
    "revision": "61c74e6d6c23344c3d245affb1817cee"
  },
  {
    "url": "assets/js/98.c5b54c10.js",
    "revision": "1e5f2fc23b8aed7099866b7fd21ee22a"
  },
  {
    "url": "assets/js/99.50b64908.js",
    "revision": "690aaa6297c50011623562abe3c96636"
  },
  {
    "url": "assets/js/app.0aeaf6d8.js",
    "revision": "7d7025f4845e534a43c0deeadc975be9"
  },
  {
    "url": "assets/js/vendors~docsearch.2ee21832.js",
    "revision": "8a8ea991a257edf4d1448a27c1dcdf0d"
  },
  {
    "url": "index.html",
    "revision": "88a93d6dcba07efc19b5fcb5a493e6ef"
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
