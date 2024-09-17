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
    "revision": "4d881b9ff27014c8f3e6f705389c0ed0"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "7f8786f6d481c38660a34fa4d54d388f"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "9f212f9bbdac0cbb2648316ee29253ce"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "b40b431c415a8a53445f6d951f8b44d9"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "314cc340297395033b2f1ea680aedae2"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "3e9767b970f40b94d65ba63bbb9b052f"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "c40ef8325af1619f77e17db9bcfe7748"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "97f13be661ea276858485598a8a52ae0"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "82e6fecb997b1747eab66b9b93b27ba7"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "49d21086449d5e399c886b0b18a361b8"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "cffb9bf6bbdae0b8861b9131359576df"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "66abf06fd4b07550aaaf21fd551a7b16"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "d1033b2d3781f28ed932269a8ee01832"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "8ad4e9d927cdaefc9ee37287e2e96b99"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "2b23883c6f87a4636f675cb1f328c967"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "b5fd1078554905a360c77f96a7fee325"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "e8ecc6a474c80e50b6ac4b2707ec0fd4"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "d2c2da2d6cd8f225fbf705693af276bb"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "2c8b97c7959e331dd3ff95360ef2ed9d"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "824a60e99dc8dca10b6b0439a481d71f"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "127425c93a1bc687cd7e7dded03bb3d8"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "9aff28d37f646f7590d31aaade39da4b"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "f3cc7084bd7dffb919a757b40d544662"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "7278111ed91a6131e91e8755e29c6e2b"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "d9a01e742d4c613c41b2363d0a7118d5"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "2a851397cec86570570fb344b41f66f2"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "2d2c1a71b4437a2f961676e3811556ea"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "eaf9f25e82320237976dfe2bba23055c"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "9e0fd2b4bdb53fd2b010d2ba9fe21f76"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "f263117b5d65a84f3c15678637c527db"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "d3905b1c875563017d50f2f42c5ead1d"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "b1fc8cbf09ab557bd078570b4ae8a0f5"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "9e43a60003588e9c7d902901a6bfdf7d"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "a4ea9c583a1a663ff207287710c72032"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "3b5c36401d1ad5f6cd24e7b684820b70"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "4c8386a354db2690d118d98adb0ae107"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "c1c10b7734fb1d449b87acffe6767d7b"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "c11e12da4141d611530c25348894ba7c"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "5752d44dfbdece554ea358219dc55641"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "0a2002f20f14df49ea8feb937699ec5c"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "25d213a77e45dbc4b55ab346958107f1"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "7e145721e2652b2ba7606152d1c656ac"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "16f27927cc48a4ca8d09b54c03d7e086"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "292e17426cffc48a86924153b126dc83"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "4a05936e353f4b44401962db8f694de4"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "c261bb8520da0e6ea65106c17a73710e"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "286267d72781560c0ee16f8bca712530"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "75338f23222aa564e1fc5c6392ec00df"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "89059a13b6bcc219adf7b8e28bcf351a"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "f6801b1ff4478390ed697dfdee7dc78b"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "327174669922152bdd5e31e6b9d8dc60"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "60d5bd6a35296b98c9780e24df778f2e"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "ed71cef15b3c47565342efdd7c0154a9"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "9bb27f473955f50cdb16b4a685e6983d"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "9717a83600d9701657c4bfd1dcd9d486"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "38d992b267d2310a3af65bff73127a37"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "72dc5c7cee39de7c35869c0e59aeb9bd"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "300ea04e8171511eb4e805c926086699"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "b0faa63bf4d31646bca128ebd83a9b2b"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "cdfd55806ca054913414595965b4d143"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "aba73359d43d9b386ea3a506a32a91a4"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "a3f53861ea42476d1c5fdb4349560c45"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "6f77d455152b244d22a05e8ec4a45af2"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "f5e6cd8f31670fdc1bfbe632676b56ff"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "94b975fb5967e731ebc472ab64d9f280"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "103d1432a2bd56952811b1dd8b4da85e"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "bc86e092a1621d52a8d375c3a3985d25"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "0a2441139155de38c55576c1d68dfc67"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "a0e02d7eba23937ecd197a67670871a3"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "60a4094c09d4edc13fe650829cd8d9e0"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "da93a9bdd490cf94d672da47c539b892"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "79f02c847737f21b7384af2a0d61970f"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "415c7d9bfea00eac100918643d622fd7"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "b7a77ef03327d4909d72d97d0e2358d8"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "b3acbbbb0392582c183a141e511c0fff"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "da0b5b66cc544595c9aff4c3f27721ba"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "7dbc74682694e12e481947d73f95d94d"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "2de144a2bc9b39fe78255d183ebe68e8"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "fe79ca33c24acb73cdcfe3a32d87fc51"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "52d2caae6e285691cdfe10870093a82c"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "4b7f16c3271c073831426b50231b3c35"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "504d59aed3b8f92a98dd3ec67f414402"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "3c6fcdb811ad31fc3595d224aa37bb31"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "ee808d99f10706300a70dacd6b7132da"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "d059270103ad19a3f66e83d8aa65f49b"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "be07541a5fad979d933e6a4b0923742e"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "238faede9e3889bb2747082f6a238857"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "8f32f740ad8876cd49710b9887b55c27"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "490fb6068a2a739434c6432fd05f72b8"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "7e02839cfaa8114d656107661f90be1e"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "a17ca37326325a838720c2c4dc70af78"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "b9c6061283fa1b05a2e9b670b629cb60"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "97714975836d61ef34b16c3e92b69c04"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "bf4b1f0e35a746e55602f47ad77c8ccc"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "761f55b7f9888bc60cad0fc22d5f5b24"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "28e1228471a8237e1ef300967f20f1c4"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "c5181974f1dc9a92209de915831eb75f"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "44e6a7457d576b57a3750e48fafea76b"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "cfb7459d276433e3cc6c4455509d12df"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "1b46b6e5a55d424f69c26ec885ef3287"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "8d85bf1a18226de1efeb5e752171429e"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "083382380583194ea38abd960ec339e9"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "c8455976ee284cd920bd08795f8f022a"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "c6b8a01ea908b65a5c9b172211512b71"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "ae383696e216e61521a2d0986c1d65b9"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "a245f81f5ac4530c94f4b00a55816da5"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "afba50cd7cd9e5eec458b52a7931ae23"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "231415c9f322d31d824be6f1e4a492f0"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "4bee356072a690413f0ffb5a2d5449f6"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "b8b1002fb244277a0be2f56cbdd37d60"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "ff6d0aa0dd1d4aa988b1b62a78d0d6a8"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "1eb6492041316f505e2c9c8554c58eed"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "ae5b8a9ac8286f8b681b3f13b1529ef1"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "3df61a2eb4e85efe1e791bc7a565de24"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "14cfe27aec72ecd585af3b0dfe13a1e5"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "d37ec406d6bea73fed81094351934752"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "8d0f96e75fcf6991f5f0327e05f088c3"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "40238afb7bb9130e2faeca2aab72879c"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "b1bfe709613b910833fb01a6976cf3fc"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "ca782b85201f0fc903abf4df8310be62"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "cccb5abd60b7644b6f77fd20f358165f"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "561780d738cfd2e2e5ef4e77cfb78b1d"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "ca3f47247ec3f882b6bb1a9fee4b2354"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "461143fc015d435e067246a4e1d84f2c"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "6b2d5fbe169ab3578c2e78c5ccb9aa0d"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "07e167648db3f3ed76b4c3c5034d1965"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "a9d0b273ff3d9fb7c05e77678da72c62"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "a4f999a186a8e4791b8c75459cda738e"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "cb95cb9e3754b25f7f3671b0046d325e"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "680296251f859636c7557620eaf5e3d5"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "e9530ae8764722e79be942262d5bd2b6"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "d2530cbd2e46c8c3af6b56925f2eb100"
  },
  {
    "url": "404.html",
    "revision": "a841ff4952ce158ed0d2d33eeeb4415e"
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
    "url": "assets/js/1.918f7388.js",
    "revision": "a950721f3664cba50e3284367a1a0c63"
  },
  {
    "url": "assets/js/10.09a0b3de.js",
    "revision": "3e4b39b5305c299ec4a4f88849d110b0"
  },
  {
    "url": "assets/js/100.4f4112bf.js",
    "revision": "5462b08e10880c816ded7b6d0cd86fff"
  },
  {
    "url": "assets/js/101.75511775.js",
    "revision": "712b5d87cd791dd27ba43666e3dd4a70"
  },
  {
    "url": "assets/js/102.3520ab62.js",
    "revision": "20106085ed543695c45a3b04efe76748"
  },
  {
    "url": "assets/js/103.a4e1f616.js",
    "revision": "28b91371ac418163bebb9fe432bc19a4"
  },
  {
    "url": "assets/js/104.11e9d697.js",
    "revision": "a4195fb60950f80c9a879cd77e69d1ce"
  },
  {
    "url": "assets/js/105.5a0aad0c.js",
    "revision": "024cf6e15a206701b770fba8ee869736"
  },
  {
    "url": "assets/js/106.aa1f1350.js",
    "revision": "f25441a2b5acb6a959620ec7ce636d07"
  },
  {
    "url": "assets/js/107.138ef1cf.js",
    "revision": "c46a2d9b6e79b18f84f7b80d93bbd0f5"
  },
  {
    "url": "assets/js/108.3acf51a5.js",
    "revision": "b2183f7aff83477b17b2d8fd3234fa09"
  },
  {
    "url": "assets/js/109.4cbab919.js",
    "revision": "b9a9ef96651e45d2cc1dbf1b4951bda7"
  },
  {
    "url": "assets/js/11.b63d0136.js",
    "revision": "bc76f3d5e9a8ad1c4e79d72a42607cc1"
  },
  {
    "url": "assets/js/110.399447fb.js",
    "revision": "2187859e3b9f1fa3da42f37d78112781"
  },
  {
    "url": "assets/js/111.b2772732.js",
    "revision": "fc8d466a1609afceaa105cd8508df20a"
  },
  {
    "url": "assets/js/112.97e1cb0f.js",
    "revision": "97ce0a9302b78b6f160bbdf01509fa7e"
  },
  {
    "url": "assets/js/113.2f98717a.js",
    "revision": "fb5458cb0804aa56489b601ed31d7650"
  },
  {
    "url": "assets/js/114.275094ab.js",
    "revision": "82aa2b9bd58cc3c8b60b451a1eedf479"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.9b456169.js",
    "revision": "f8b175b94e9fbf64826e3a0802e7ac4a"
  },
  {
    "url": "assets/js/117.30bd8a5b.js",
    "revision": "69d68d08e7dfbb0079bda23a897369ad"
  },
  {
    "url": "assets/js/118.59c8465c.js",
    "revision": "4aeaa9a8fb11e001034b30044e783f7c"
  },
  {
    "url": "assets/js/119.5d852498.js",
    "revision": "8d7579054543450f7ed26201e36a6fab"
  },
  {
    "url": "assets/js/12.702e4201.js",
    "revision": "9196ed137b27005cb83d1b564198ee4e"
  },
  {
    "url": "assets/js/120.e81b919b.js",
    "revision": "c5beaac07942aeb986dd8b6151564dbb"
  },
  {
    "url": "assets/js/121.c96eb03f.js",
    "revision": "426f89a6260b5ffa6a3b1be06bde2a92"
  },
  {
    "url": "assets/js/122.d856b8b6.js",
    "revision": "9df5e91e8c7d6c49d731affc4b68cc2a"
  },
  {
    "url": "assets/js/123.cda561df.js",
    "revision": "1e86dcdd3f4649cf98b308214fccc4ab"
  },
  {
    "url": "assets/js/124.d267d5a5.js",
    "revision": "49a90a1e73677999e865634a24162fde"
  },
  {
    "url": "assets/js/125.74ecf30a.js",
    "revision": "c922c68ab799e747afec26fb38bfd135"
  },
  {
    "url": "assets/js/126.e1c12678.js",
    "revision": "2808e93d963e770be469eef95a2a52e3"
  },
  {
    "url": "assets/js/127.233ca8b0.js",
    "revision": "ebb15fadece6038cdd2aeaf0b9a6decd"
  },
  {
    "url": "assets/js/128.545e6036.js",
    "revision": "e91b0a9107eaa5e1f6149a9b858cf29e"
  },
  {
    "url": "assets/js/129.3d617886.js",
    "revision": "067176fbd85f9d17def6f08cdad19969"
  },
  {
    "url": "assets/js/13.341a390d.js",
    "revision": "5671b8cbd08f67629b3e9e96ced0848f"
  },
  {
    "url": "assets/js/130.80a7576b.js",
    "revision": "8c3f1ab51c9b1d98bbf68c1fc0adc35c"
  },
  {
    "url": "assets/js/131.92e48580.js",
    "revision": "69f87e960e792e517df534f00fc024fe"
  },
  {
    "url": "assets/js/132.4eb9c8df.js",
    "revision": "a3079d684c3f752ba609846ff3411c62"
  },
  {
    "url": "assets/js/133.4edb01c8.js",
    "revision": "96d03e2fc57e03d3ece19fe835bb220c"
  },
  {
    "url": "assets/js/134.760bf2d2.js",
    "revision": "9e4e94291e9e904bb1685e606e034f6b"
  },
  {
    "url": "assets/js/135.cd071ea8.js",
    "revision": "e8bb0774a5b0a290d307fff8bf1a4874"
  },
  {
    "url": "assets/js/136.45cca296.js",
    "revision": "84b1d69e051396593c6845686edc6461"
  },
  {
    "url": "assets/js/137.0085e34c.js",
    "revision": "72e36a6108204bf280a782027cccae63"
  },
  {
    "url": "assets/js/138.5d2213d6.js",
    "revision": "b32cdbfbaf99e81c2572bcf59b6ccf25"
  },
  {
    "url": "assets/js/139.70709f98.js",
    "revision": "663a89dbfe3e945044ed28e308cc52d5"
  },
  {
    "url": "assets/js/14.db066fcd.js",
    "revision": "9159d490b0890f5a0d682471d85f099d"
  },
  {
    "url": "assets/js/140.4cb2ed80.js",
    "revision": "992ffe6b5eed47ec1c4e3f452d1a8565"
  },
  {
    "url": "assets/js/141.56411bdb.js",
    "revision": "55571a8ccb66ab6faf55eaa21acf649c"
  },
  {
    "url": "assets/js/142.b31490fb.js",
    "revision": "d51152eca639bad578242358907d6ac3"
  },
  {
    "url": "assets/js/143.452227c6.js",
    "revision": "858e445e46f19cb0d58e79f9d3be2428"
  },
  {
    "url": "assets/js/144.e16f2898.js",
    "revision": "e193d349876b466c8845650098c737d1"
  },
  {
    "url": "assets/js/145.7c5f7b5a.js",
    "revision": "10ee587eb0644f19c6166a3c6e09dad8"
  },
  {
    "url": "assets/js/146.3de2bda3.js",
    "revision": "fb7e7e603ca156ef35aa78b4a91b9e75"
  },
  {
    "url": "assets/js/147.67b8526c.js",
    "revision": "b7ac1ac1af18e24859d2bba2b50c81e7"
  },
  {
    "url": "assets/js/148.2a57ed12.js",
    "revision": "45307d1590b430c9a3a8353199c58e92"
  },
  {
    "url": "assets/js/149.c9936cab.js",
    "revision": "569294c9154db8c7b277aeeed21cc5ec"
  },
  {
    "url": "assets/js/15.cab03324.js",
    "revision": "766260611ba11f275b4162a69efa87be"
  },
  {
    "url": "assets/js/150.9b8420bd.js",
    "revision": "cfe2fbd8b9507ffe57325ab8eb490079"
  },
  {
    "url": "assets/js/151.0816c96b.js",
    "revision": "b7aaeb22e3a5015939fd41f460b1dcb6"
  },
  {
    "url": "assets/js/152.f33bc18f.js",
    "revision": "6c70f69b64953d0f84537dfc15f743c2"
  },
  {
    "url": "assets/js/153.e171587c.js",
    "revision": "88c24a8ce6d276b4347e70d5d972e328"
  },
  {
    "url": "assets/js/16.7bc2a076.js",
    "revision": "a0a57a599b6ab3ff7a8320a46717a76e"
  },
  {
    "url": "assets/js/17.c0c19c96.js",
    "revision": "8396310a1fd65c12bb3a509e1f890636"
  },
  {
    "url": "assets/js/18.36193a98.js",
    "revision": "c27e9196cd4f32076d7ef0bae4f670d1"
  },
  {
    "url": "assets/js/19.e89ca290.js",
    "revision": "865a839524cb72222149a6ad6c689a99"
  },
  {
    "url": "assets/js/2.462848ae.js",
    "revision": "ac7052f99c2ca000718a0ff64f834467"
  },
  {
    "url": "assets/js/20.6d29762c.js",
    "revision": "7194912a94cf2154154912a30ada70ff"
  },
  {
    "url": "assets/js/21.c8b881ff.js",
    "revision": "c088564305eaae4a6ef93966df474124"
  },
  {
    "url": "assets/js/22.5327a577.js",
    "revision": "07e249941da10a51ea05bfcb17fcee43"
  },
  {
    "url": "assets/js/23.2b70d09d.js",
    "revision": "a0b985dfc2517ddcb7f76f1eb0bb4126"
  },
  {
    "url": "assets/js/24.00c53e58.js",
    "revision": "1eeac9b8c12423e7a111e909d3002e19"
  },
  {
    "url": "assets/js/25.dcec8ffc.js",
    "revision": "b3895f737b9a69256a3e1b2411d0f259"
  },
  {
    "url": "assets/js/26.a24244fd.js",
    "revision": "050a9eb5ae793729f552cf633315f49b"
  },
  {
    "url": "assets/js/27.ad76bd81.js",
    "revision": "77115919198f7baabedd13dd33e7d7e1"
  },
  {
    "url": "assets/js/28.cec9f4b4.js",
    "revision": "7e11aaa88fc9586f3c484e2e7c0aefe4"
  },
  {
    "url": "assets/js/29.2862a7aa.js",
    "revision": "94532707dcc690fdc55e5cb4e33bbffa"
  },
  {
    "url": "assets/js/3.bd3b16a4.js",
    "revision": "3caa258015023020a1043d73accdc017"
  },
  {
    "url": "assets/js/30.c6d7ac37.js",
    "revision": "49aebb7d3f19ae973456c480fd521c57"
  },
  {
    "url": "assets/js/31.dd8c25e2.js",
    "revision": "9397d8ac09e92a7d71d3ddc51795bde2"
  },
  {
    "url": "assets/js/32.791766c7.js",
    "revision": "b83d1175a00afd121e4b9504448e362c"
  },
  {
    "url": "assets/js/33.616c4c94.js",
    "revision": "d46ac29828a37b955c55c15b772658ec"
  },
  {
    "url": "assets/js/34.609df179.js",
    "revision": "a009d72a3c9276b0dd5c4ccf45d46f25"
  },
  {
    "url": "assets/js/35.be0d0df7.js",
    "revision": "433f3719326315da229a7aa9c8d57f80"
  },
  {
    "url": "assets/js/36.62753bdf.js",
    "revision": "91daba50870b9e94f76005873e9feb46"
  },
  {
    "url": "assets/js/37.f9b748b9.js",
    "revision": "f2e3ca073fc7d6bd534aab5cfe6edb32"
  },
  {
    "url": "assets/js/38.e6cbb8a4.js",
    "revision": "aaa05bf9598cd91a645754e74e065067"
  },
  {
    "url": "assets/js/39.7cab60bd.js",
    "revision": "b3207fea90ae30f0f8a56f714b20c90b"
  },
  {
    "url": "assets/js/4.baef5d87.js",
    "revision": "fe5cbcec3a3119a465c86b18a662d744"
  },
  {
    "url": "assets/js/40.610afb51.js",
    "revision": "8be7710cd2b387811e7b7069f5890969"
  },
  {
    "url": "assets/js/41.6f2e24c7.js",
    "revision": "5169010788e303409686cc6fdaf02dcd"
  },
  {
    "url": "assets/js/42.71f1093b.js",
    "revision": "aac46cc37aaf3fb61acc77c67cdf9687"
  },
  {
    "url": "assets/js/43.bd70de12.js",
    "revision": "c9b9d4d40761dfa65c9ff597b885d7e4"
  },
  {
    "url": "assets/js/44.f22483e1.js",
    "revision": "391fdf294daa5e25598a06752ababdcf"
  },
  {
    "url": "assets/js/45.c08b7358.js",
    "revision": "14e2bd1c04519a2d46f29ceb8789f553"
  },
  {
    "url": "assets/js/46.c37bba9c.js",
    "revision": "36f3680bf334cae7fcbdb6ef7d068f96"
  },
  {
    "url": "assets/js/47.694295f9.js",
    "revision": "b630a36846cb82c0ad4a109f90e6cc5f"
  },
  {
    "url": "assets/js/48.47f61499.js",
    "revision": "6d69718d35a6162a100fe104dfc8d9a5"
  },
  {
    "url": "assets/js/49.b5c15e5b.js",
    "revision": "12c514a9a532bbec379f59e40502474a"
  },
  {
    "url": "assets/js/5.a0a0061d.js",
    "revision": "a3ce516d921afee88784a6295c38c63e"
  },
  {
    "url": "assets/js/50.aaa7a459.js",
    "revision": "0ec52277ced9e62eb744b2e11e84efcf"
  },
  {
    "url": "assets/js/51.723c86bd.js",
    "revision": "e8ec53313b1104fc43d099c4af37d5cf"
  },
  {
    "url": "assets/js/52.2d00c64b.js",
    "revision": "d81f6dca864ed6e993975a561cda2c8f"
  },
  {
    "url": "assets/js/53.783555a6.js",
    "revision": "0dc977d0d441000a407b798d4e8794ec"
  },
  {
    "url": "assets/js/54.a754a416.js",
    "revision": "ee2f9a58aefd43f5fe9bb510ae5e7fac"
  },
  {
    "url": "assets/js/55.0eb25bf9.js",
    "revision": "a409e875ee03aca430a9b8e1822ca72f"
  },
  {
    "url": "assets/js/56.7db5bf05.js",
    "revision": "537424dbb817e7ffd5c1dd724897e799"
  },
  {
    "url": "assets/js/57.3155ca26.js",
    "revision": "3801f954e219b41f840947a3180a2ce9"
  },
  {
    "url": "assets/js/58.53786dd9.js",
    "revision": "4176dfcd30b3593cff76635ba0c5410f"
  },
  {
    "url": "assets/js/59.19fdd6b8.js",
    "revision": "151a41b854af894608e50faa269153eb"
  },
  {
    "url": "assets/js/60.c08e18ae.js",
    "revision": "957a05e59890f9ef1e8deef80fa0602f"
  },
  {
    "url": "assets/js/61.9afa996d.js",
    "revision": "aceeed4ad782064460a613f33d93a3a1"
  },
  {
    "url": "assets/js/62.f51cb055.js",
    "revision": "c454f9a6488488787ea1667f9cddf56f"
  },
  {
    "url": "assets/js/63.f5f91e61.js",
    "revision": "5aaf1552dfe11042d2bcee6666fb37e8"
  },
  {
    "url": "assets/js/64.055d4927.js",
    "revision": "5aaaa39128cb30a4d9a0f84329bfb267"
  },
  {
    "url": "assets/js/65.af9d6e59.js",
    "revision": "bf1c0eaab1f12797865fb079cb7ce950"
  },
  {
    "url": "assets/js/66.c78d453c.js",
    "revision": "d2dca6051ecea8d451d5de98000ab321"
  },
  {
    "url": "assets/js/67.cc169560.js",
    "revision": "c8bf5ee96e7b896867f13f128f65e796"
  },
  {
    "url": "assets/js/68.80d1ee04.js",
    "revision": "ec98cfb83e65376209c12a5cd82cc6cd"
  },
  {
    "url": "assets/js/69.94fc9260.js",
    "revision": "ccacf0ff47092fcf37ea079251811646"
  },
  {
    "url": "assets/js/70.fd0e4f54.js",
    "revision": "3cd5068abcc25c4b3d8f1768cf03dfab"
  },
  {
    "url": "assets/js/71.58596099.js",
    "revision": "848b5bd9a1d59f5813d10a4504328ab5"
  },
  {
    "url": "assets/js/72.c645c7b4.js",
    "revision": "bbd21abd8ff07c7587e4a05bb05eb188"
  },
  {
    "url": "assets/js/73.b2c946fd.js",
    "revision": "ca6fed569c17f5738e710b691a27850d"
  },
  {
    "url": "assets/js/74.28e02f17.js",
    "revision": "2fd35a133f1c7b2c0f9fa9f84db0f003"
  },
  {
    "url": "assets/js/75.a2083ad0.js",
    "revision": "beaa110e4af0c426cc8bc2cfcb034618"
  },
  {
    "url": "assets/js/76.e5324733.js",
    "revision": "d528af300be50eff14a67cb1e3740602"
  },
  {
    "url": "assets/js/77.7d166ffe.js",
    "revision": "a279804db1b08bb2831dbafb6d145951"
  },
  {
    "url": "assets/js/78.d6b16e82.js",
    "revision": "ac18f82bc6a833ff9105bcdc5df71028"
  },
  {
    "url": "assets/js/79.4b268644.js",
    "revision": "7c2cedbf18ede87f20a602564a08792b"
  },
  {
    "url": "assets/js/8.5c6f26e7.js",
    "revision": "d9508ed92e78fb299d29476a058ce342"
  },
  {
    "url": "assets/js/80.663f990c.js",
    "revision": "743d868a6f33c252d78ad086a5ed6383"
  },
  {
    "url": "assets/js/81.c718f38d.js",
    "revision": "12e5d8ca9c17885c5ec7eae2d7172341"
  },
  {
    "url": "assets/js/82.03c923b0.js",
    "revision": "830722ae201808680496e8aad0d6d3b3"
  },
  {
    "url": "assets/js/83.dfb5d2ce.js",
    "revision": "d62c19e5c9ce08ba544de032325adcbf"
  },
  {
    "url": "assets/js/84.35c2e67f.js",
    "revision": "5f3df38b71d39e3c7ef04d6ca87d8030"
  },
  {
    "url": "assets/js/85.5a6bc0b5.js",
    "revision": "7e9a07f4792d5b0f4bd7f30c4115aefc"
  },
  {
    "url": "assets/js/86.9b1ce6fe.js",
    "revision": "fa0cb4b0c675ededc842eeea42fd20b9"
  },
  {
    "url": "assets/js/87.145c8f30.js",
    "revision": "83a04e2f03f2e5c3a598507b977612dd"
  },
  {
    "url": "assets/js/88.7860f79c.js",
    "revision": "ab9bc18bdbdca351061f04ef0ba99e92"
  },
  {
    "url": "assets/js/89.5162b026.js",
    "revision": "d5f1c14551c34a024226156774c17e75"
  },
  {
    "url": "assets/js/9.3b8b212b.js",
    "revision": "740e29261d418056e20f5aab7a39d7e8"
  },
  {
    "url": "assets/js/90.326e6ec8.js",
    "revision": "03f7cd63d185d9ed9763296b28914fdc"
  },
  {
    "url": "assets/js/91.ffd2d470.js",
    "revision": "81637c474dd73eccb2468d8d2babeb8b"
  },
  {
    "url": "assets/js/92.0dd8bf41.js",
    "revision": "b53adbf94325414edc12b28e934ac5e0"
  },
  {
    "url": "assets/js/93.c2fa6500.js",
    "revision": "5178f0e4e385ad687ef0ea419197affa"
  },
  {
    "url": "assets/js/94.f8d436d8.js",
    "revision": "677f6500118000792ec052dc81372c96"
  },
  {
    "url": "assets/js/95.009e93d4.js",
    "revision": "489d74e76460a69b1aa1a8681ee5f80f"
  },
  {
    "url": "assets/js/96.e275df07.js",
    "revision": "4f7045d2bfe3e391485306d00615187d"
  },
  {
    "url": "assets/js/97.16a7c4ea.js",
    "revision": "e162f8aac3cc0bb8b21080f7d4c1cb4f"
  },
  {
    "url": "assets/js/98.43147531.js",
    "revision": "3d8b18b0e66d7b916ea940cb789bfd3d"
  },
  {
    "url": "assets/js/99.1655d227.js",
    "revision": "33b6abcf1ddc07405d4916400101b2bf"
  },
  {
    "url": "assets/js/app.9ebd86ed.js",
    "revision": "fc6856284458f612311429381bdc0e31"
  },
  {
    "url": "assets/js/vendors~docsearch.f118f5f5.js",
    "revision": "85ab284f8dfcb155cd95d2b8274c52a6"
  },
  {
    "url": "index.html",
    "revision": "153556b5899cf6f9982b441653379f66"
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
