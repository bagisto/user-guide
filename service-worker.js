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
    "revision": "5f6e599767bc28a714e5ecabe4d1ecd8"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "af5c30fc87df325899573c5c8add7e61"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "95e1a32400a8b8b8fae79a4bc0eeca66"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "49bd19b00b0a7a016a19cc4f1e8bae33"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "58f6620f47fef1171b3cc4d8e6da8617"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "01e7a47f03bce4253421463e22f33cb5"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "9422bdc65e2ff1e75a7bd6be9ba35de2"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "0e9938ff10493f0e27d70f7d266b5c80"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "d03533a6c72be327152b30a4366c666d"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "bf67d0a61c0dcc329f08f9276ab4ce97"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "b31c95911ac1b8262e33236164e0f2b8"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "5e482197f45701abe55d091b3e9773d1"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "1f44be00cc4053294f77cf4eec2492b0"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "37fe2599787fcc3673f7ca924fdd7b90"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "b3fbbe7997d05d92cc3b238b506f0995"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "df193b335d8b70a398b6cd07a9c5ab57"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "618d5dbd10e0b0300b9052a58727f526"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "241c8127d64755399231ce7f8d382217"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "b2fa289dabf0bea0dd094b0d9e0bef4f"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "c457a484c9500578e006c668a1f8fefb"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "200b7e5544e492f734d36162da33bfd8"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "e26058cbec0a938f65f9d44557349d98"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "66bb815f66393be606aa3a9cadc6a33d"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "cfcad8a5232d45c24a72c7f351397f9c"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "f9d4863a545133dca17e4ed866073ede"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "78e719c3ee89679be3efe8e0ae9344bc"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "5a42246793913256275f4d2b5d797622"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "3b92c26cbab42ecc22f10af495c158b2"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "35f6c1a5f058ad82ca9425d01e914ead"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "51a3ee6daf28c014659c0b775faffdaa"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "54164b54a84cf915df28e3bf616c540f"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "bc0780d85648d5573a5354a2a1842c04"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "2815590d19f88bfee3ac285af6276ae4"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "5a957bdd83b660d750f08fd92d6df6c5"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "eca105a92fbfdee3980812fa82c4ea32"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "804f22a28ce4b4002bb87e244ef0275b"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "a3208c3fe469e1a163f163961d86afae"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "ed10d9f8a568f83eaaa6ad04d9bebbc6"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "c0fd63ee61fc0e0b7f02151157f62e92"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "573d853f20288cb3f3b2e528a0bc57bd"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "f5a96ebaea5a8fc9673fe9e3c8fac36d"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "14fa0a7157a452ca8072119c402cbf05"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "fccb0b8c32901f55e72198f86ab85855"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "afddaa9bd10ef726916a83c282f98543"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "4d0973c3fa5b19b1659d3f1465c048ee"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "e7c8e630cd21a02e23f241ec3fec0a8a"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "bac29ebad711a15d610860a1e2e664c0"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "bd37c7052722ea57ef9ba3def5ab26f3"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "590b3e06ecdce04f027dc6cab34b3e3c"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "a7bcb7c08433dd7a911c38f401e1051f"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "9e5cedb85d460c7370a6334c77e1bc4f"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "495a0c343233b5a15de86bf702ac2c5d"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "da7b4e1929dc578bab4b2882ea253915"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "db42ddf25f0dec67ec3a943c08a9b591"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "51e90d99e2d618c4c2a5aab9e7f4cbe9"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "ce77af96e26da6062e47deae842e02d6"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "9f33f07e0ae32358aef77c331e55da50"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "546bf0c6aa7f68594aba6dfb5fa5dc60"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "8e5842faf649f1f635c6f68d322077a7"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "ac5af60eeba7ac1b95b9cb063776ee5e"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "b802b7ccb576cb47de1e7ad936894bbd"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "719c0abd9aad5e8b0c761519d6c4db59"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "a11786c5a644dc5932594928d28c2c43"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "9965c71e4ca39c209643484e58b940ee"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "c970ab98ae3abf5c7ed6c5b967c9d2ed"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "7315446e170728bfe3fd83606bddad50"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "0356fc54b8ad9cee87c901d620563de1"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "6e7aa00cee597346cd514b4bb3684aaa"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "938932323e63582ddd0e2018f404f7ae"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "4749c85df19981f4716abb02d8e39f71"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "86215027f1744552f6a61012886fbdc6"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "4ff721225ff988a52445d72e51d6b525"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "27c7597ff2ee1fe4630ea93efdae8f37"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "6794d55c667cca749a4e93a0ae0e433d"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "36ca40e4ab2cbcc0ccd0d7c5800ae811"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "d3a84a9eaac18d52bb4f2ed01c6211f6"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "3e6bcfe2ea68d046d082772b59977446"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "20730fe7ae7f8d825095ca8290d0a04e"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "278bb031a5e8b3ef45ca195829b55896"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "df57a6cbb75186bf0abef9552ce371ef"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "ace405a3708865449de65b0fec476c76"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "59dc9bb2eeb5307fe229a27af95377a1"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "b23da67c1a2e5705d12c5d5e4f5be866"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "f0d3d88de4710be5e9f224f0ff059235"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "7035e6a0df19221f1043f4f2fc85ceed"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "1c1342a07787cd8f73738fa9b3791da2"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "9b3808ea472e65cf3ea765efc73ce5e9"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "eba1663b0823abe175e5e844077f87a1"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "90e421fbba4eb0a7a49f80269c87d573"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "55dcf88927b5c917f71a2d4de64359d1"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "303e9f6da68eda34b39327c76f61dddc"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "08f7e2739c99e7c8762a24e0f69432ba"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "87af819195f072f88122ca3328a5cb4c"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "2fb4e84b809388fa5f81190bc810e2d5"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "2e34a4d38adead4914beb28ccc8e3853"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "ae26f0a82e8167668c6af46e434aa85a"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "a660dad6b54c13da1c765a9dbe5175c4"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "50ce4e5c8708d987177b7690157aa4ed"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "55a36735f85c0516723ed993541ac787"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "6caa8ca1e70872562a18c2545c8a86d6"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "268fc9f5e1cd0778de9ceb4ecebd0eb9"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "23a477461fefe2a9235cccdb27ed9675"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "560b1bf3541019fea099a35ca99e407d"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "b5c99276791aa30df1eb1ded49938052"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "b43feed6cf7b78b4559005c7e38c72e5"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "42c3ebcc5b4904ce77f365fc2d17092d"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "4c038260c3ba2a10da2ca79b73c0de92"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "728cd32456062660e86778270347c204"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "2e279dc8fddfc249f0de3a77636cb654"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "5c27cb7b1c2d5d82217a4fb452f042d5"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "ca0eaea0b3fab8475eb1696e0e11ad55"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "f0cbf2bf3b92f57e9e5fff8c3e9db26e"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "96e947d5088395ad396b140838299288"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "d3b2c99cb47ad559c1e0bf501de15954"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "700c140e218634ffbfbe4bba4a397e97"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "a343916e649cb335dc8312a403bc585e"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "4345173854d3896f588ba29393e090fc"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "c3a392fd40e73a90ab8f5b4d8273eadd"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "d139d1291b0300405ef1efe622f7d634"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "e2111e72d6b193b12e537ed5c5870cf0"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "27f55e500a6c32931ac243683fad6d82"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "541acd99952fe7752fff0d6c35923e62"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "1bf570aa484a1848b94e8b1cb6894b3d"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "76d7a1a7b4e3b17bbd1f65f1e949d3ee"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "37660ff03c5fb356afc6299e7512471a"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "f39654f04f231a1877770fb2b2842d6c"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "e10b6cf6881c5274d09358697763779e"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "7a056451a61a64465519f1c6fae118f0"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "6e047659ce63fb5247c0c83736c7c194"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "23cfb8b6076d5be39632f15313f3fc6b"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "d651f816cfa75f568e4a19f89d397118"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "e5f5dbb6691a256c64c78cd6192b91af"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "82cfeb2a791ec7d78532d6f10800a123"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "4d21b052c2194212fd40e31def5fb7f6"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "252394b35089bbafd8c795b9ada9eb97"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "e7cc773cf4ae98d085b52f4b02d76efb"
  },
  {
    "url": "404.html",
    "revision": "185eac78eebcb93f4b12145703931e0c"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/1frontend.60a9f83d.png",
    "revision": "60a9f83d3897ccfc85b19edaa45be0da"
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
    "url": "assets/img/add-slot.f443a0e2.png",
    "revision": "f443a0e2e02e4ab8691ccb4f8e09d389"
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
    "url": "assets/img/appointment-duration.86c30215.png",
    "revision": "86c302159028e4ccf728cfec91c6d9a7"
  },
  {
    "url": "assets/img/appointment.011047ff.png",
    "revision": "011047ff7a21be2a353ad09cfcaf05b6"
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
    "url": "assets/img/booking-type.1471d100.png",
    "revision": "1471d100ce40213e1b19f5118b9c1aac"
  },
  {
    "url": "assets/img/both-basis.412f1c79.png",
    "revision": "412f1c79fb6cbc9d6d4c2c93a6ce762c"
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
    "url": "assets/img/calender-view.f7c3ffa9.png",
    "revision": "f7c3ffa9d46b8b4d0390d0cffe81595b"
  },
  {
    "url": "assets/img/calender.9f451667.png",
    "revision": "9f451667563e5247c3ea4b7430613796"
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
    "url": "assets/img/create-product.de3763bd.png",
    "revision": "de3763bd35b420fae98e2bd46f259ddb"
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
    "url": "assets/img/default-booking.01849695.png",
    "revision": "018496952ec06f81d7b36837cb6df20c"
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
    "url": "assets/img/description.b1ef58bc.png",
    "revision": "b1ef58bcfccd11a44c92be2741854a59"
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
    "url": "assets/img/duration.849dd4ce.png",
    "revision": "849dd4ceae32bc631055dca8fb8748f8"
  },
  {
    "url": "assets/img/edit-product.795e7782.png",
    "revision": "795e7782de26403aa2a2b3b9b1be9607"
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
    "url": "assets/img/event-booking.33f16931.png",
    "revision": "33f169316c2470813bc66b473b605f5a"
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
    "url": "assets/img/frontend2.864a8940.png",
    "revision": "864a894032e86df0e8cd907d60957280"
  },
  {
    "url": "assets/img/frontend3.eabff820.png",
    "revision": "eabff820731fe9ccc11cb51642570f78"
  },
  {
    "url": "assets/img/frontend4.2e6593e2.png",
    "revision": "2e6593e2b87e9d87d1991c250b0527c8"
  },
  {
    "url": "assets/img/frontend5.eed29077.png",
    "revision": "eed2907742fe5034f078de31c76f15e5"
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
    "url": "assets/img/hourly-basis.21c795c2.png",
    "revision": "21c795c2f086d40da1312cca586ff568"
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
    "url": "assets/img/images.f98aa4ee.png",
    "revision": "f98aa4ee292000aba41322d91160024a"
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
    "url": "assets/img/meta-fields.8fd70f1b.png",
    "revision": "8fd70f1b7e5a02a64c3cf36590a5c7f2"
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
    "url": "assets/img/new-slots.1863be66.png",
    "revision": "1863be665ddc8b63c18090a5c137495b"
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
    "url": "assets/img/slot-duration.97d528dc.png",
    "revision": "97d528dc99f4c126c6bcac25a239c60f"
  },
  {
    "url": "assets/img/slot2.f53bdadc.png",
    "revision": "f53bdadc215bb8b77c77ed50ea770c8e"
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
    "url": "assets/img/table-booking.ed1d9c74.png",
    "revision": "ed1d9c746f27cf8483fae799845bf07c"
  },
  {
    "url": "assets/img/table-duration.25063880.png",
    "revision": "250638802b8bcdd539b599c7d98a6d81"
  },
  {
    "url": "assets/img/table.aa2f4277.png",
    "revision": "aa2f4277b7c83ce60c0aedd6e2321edb"
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
    "url": "assets/img/toggle-buttons.f44cfaa1.png",
    "revision": "f44cfaa142299d65bc4922b3c44dc583"
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
    "url": "assets/js/1.49ce1390.js",
    "revision": "85ad14faad2e6eceaf54cc28765bddb7"
  },
  {
    "url": "assets/js/10.5fa80535.js",
    "revision": "e6f7f3a3f49028ae7a23623a8f3ea0f7"
  },
  {
    "url": "assets/js/100.98581f0a.js",
    "revision": "a64cc0f546cb191db83239b9f3088c6b"
  },
  {
    "url": "assets/js/101.d75de9ca.js",
    "revision": "d1fe839572987bb2fe4045996c11b4b8"
  },
  {
    "url": "assets/js/102.fd5d3e8d.js",
    "revision": "53d51943355f773cf4e26c02659c1bcc"
  },
  {
    "url": "assets/js/103.c165802b.js",
    "revision": "a1f4e62320b01a9c3101d3c1bb0dcafc"
  },
  {
    "url": "assets/js/104.0ac42710.js",
    "revision": "f7c85e00c8ed6dbce9ad59cfb0f909f4"
  },
  {
    "url": "assets/js/105.1cf2655d.js",
    "revision": "eca436c938f5d56631e67bbb5b5013ae"
  },
  {
    "url": "assets/js/106.366b8ae1.js",
    "revision": "98838f6b8ee3043227ef1bf427b1cc3f"
  },
  {
    "url": "assets/js/107.90668528.js",
    "revision": "6241f51c25a2b817c0efc53d15a1b492"
  },
  {
    "url": "assets/js/108.61dd5f5f.js",
    "revision": "e033cfcc4d24a817d83319fa361552d1"
  },
  {
    "url": "assets/js/109.b3cf2bd0.js",
    "revision": "253b0ec3e3880565836fea36a31fa46d"
  },
  {
    "url": "assets/js/11.e9f45beb.js",
    "revision": "4707e9b413c527b363cc3a90fc56b7c9"
  },
  {
    "url": "assets/js/110.d7d24d32.js",
    "revision": "38fe6d222ff7acb5c6f84cc467633869"
  },
  {
    "url": "assets/js/111.a39ef93d.js",
    "revision": "a2a079a47ccc53e5772a097b124edcfc"
  },
  {
    "url": "assets/js/112.a89a8eec.js",
    "revision": "40d411a3927dfd963b7e99917bd7f6bd"
  },
  {
    "url": "assets/js/113.8cf1f4d6.js",
    "revision": "8e5ae043de3cd9a1a1f9de36642d03cc"
  },
  {
    "url": "assets/js/114.7c8b3bbf.js",
    "revision": "b28ae9b80863dd17f7cfcf8d32b1394b"
  },
  {
    "url": "assets/js/115.3f4977b1.js",
    "revision": "08f536bbef31f47523c4a2cc94d2b842"
  },
  {
    "url": "assets/js/116.68d05570.js",
    "revision": "84278c0bc7d2d9c04105f7ea6a4abd3f"
  },
  {
    "url": "assets/js/117.0ea349f8.js",
    "revision": "da62b7fcbbc7d6f81f532723addeaf12"
  },
  {
    "url": "assets/js/118.ecf537d1.js",
    "revision": "f34f46f7d1518eb9de18e58aa5959d97"
  },
  {
    "url": "assets/js/119.1a71f816.js",
    "revision": "3182fae3a594faca1def6b9ad03e5bfb"
  },
  {
    "url": "assets/js/12.03827599.js",
    "revision": "8a233822f27fcd5f8aadc373e186c88e"
  },
  {
    "url": "assets/js/120.4459ad09.js",
    "revision": "861836a1a21b12d12a38c05b0e27cc84"
  },
  {
    "url": "assets/js/121.4e8f9ca7.js",
    "revision": "2f6f71f777cae9d4ddf32fc52a64e346"
  },
  {
    "url": "assets/js/122.d0a8dfa7.js",
    "revision": "18af60bf6a721adee0015c965c7b0938"
  },
  {
    "url": "assets/js/123.ee042fda.js",
    "revision": "efe4c711c326a34c5be7408e9cd34972"
  },
  {
    "url": "assets/js/124.a5b946f2.js",
    "revision": "96059ddea61264cca3f8640663a4da97"
  },
  {
    "url": "assets/js/125.e1edc5c3.js",
    "revision": "4426a94594dcd64e7b618fcb77680726"
  },
  {
    "url": "assets/js/126.9f3793f6.js",
    "revision": "977284140c70547894f98f9ff2c4b81c"
  },
  {
    "url": "assets/js/127.df67a485.js",
    "revision": "ae84edf25e969e80e1df7b171fe459ef"
  },
  {
    "url": "assets/js/128.dc240d21.js",
    "revision": "53bb866d92141092080f4b9afa3e94d9"
  },
  {
    "url": "assets/js/129.0ebfed0b.js",
    "revision": "1ac571046b58e7f0e64e4e36fed97a18"
  },
  {
    "url": "assets/js/13.94f9b6dd.js",
    "revision": "f10210beadbd7f6db620a509fad10c42"
  },
  {
    "url": "assets/js/130.768d6ec9.js",
    "revision": "35ef3134ea5edde53fc6b9c2126737d1"
  },
  {
    "url": "assets/js/131.67b51295.js",
    "revision": "6c3305a5d49ff73445de265b9dfceff2"
  },
  {
    "url": "assets/js/132.17f5cd01.js",
    "revision": "0bd128edaf9328842f2f399ba37e86f6"
  },
  {
    "url": "assets/js/133.9bded75a.js",
    "revision": "d87459e10d49128008717cacacecb5bd"
  },
  {
    "url": "assets/js/134.d1ca2cd9.js",
    "revision": "235c9f11a555ea162380614756d33464"
  },
  {
    "url": "assets/js/135.503d7ccd.js",
    "revision": "4cce100813759aad5509a43c07f64e03"
  },
  {
    "url": "assets/js/136.b1c3c18f.js",
    "revision": "18e5bf41087a16b286d51478a34e697b"
  },
  {
    "url": "assets/js/137.18c34793.js",
    "revision": "0c7bbabfed8efe463cd54d4959ac4e7f"
  },
  {
    "url": "assets/js/138.748bb4a1.js",
    "revision": "e7ae460ecaa77121eb117482d538c693"
  },
  {
    "url": "assets/js/139.15f462fe.js",
    "revision": "f872bb7387ec358d9c0a095f0a4edecb"
  },
  {
    "url": "assets/js/14.1bd0439f.js",
    "revision": "384100d303004657b7131d62a45cac71"
  },
  {
    "url": "assets/js/140.d7812cc7.js",
    "revision": "02691e8198fdf94599e190436340c6a1"
  },
  {
    "url": "assets/js/141.bedb3e73.js",
    "revision": "9fdb20fd1a78a94abd9fe2e7733119a4"
  },
  {
    "url": "assets/js/142.2208717e.js",
    "revision": "e0b67abfb12680ca20540931779fb028"
  },
  {
    "url": "assets/js/143.bfe61fd8.js",
    "revision": "b82e644455a654c7ea463f0049df0101"
  },
  {
    "url": "assets/js/144.c5b1e903.js",
    "revision": "d343d0af651994007aadc0df08e571f5"
  },
  {
    "url": "assets/js/145.c64f5735.js",
    "revision": "9348af3b8a9bbfd8f9f75408e5365025"
  },
  {
    "url": "assets/js/146.bf311c88.js",
    "revision": "8313cf319444deb8bfd73af291897db4"
  },
  {
    "url": "assets/js/147.59dad9b6.js",
    "revision": "79fdb32f547a9442f897188223b283e6"
  },
  {
    "url": "assets/js/148.3968650c.js",
    "revision": "4b35846f6a09e1cd63fe50cb0558ba70"
  },
  {
    "url": "assets/js/149.14a790c8.js",
    "revision": "1b5441718ec16d0df149c8234c12b33c"
  },
  {
    "url": "assets/js/15.6b213a0f.js",
    "revision": "f4c19cde1872f8cf7607e16313266622"
  },
  {
    "url": "assets/js/150.06d76a1a.js",
    "revision": "f179f5c7b04897718cec7b8a42f83d13"
  },
  {
    "url": "assets/js/151.f80f67dc.js",
    "revision": "c19b12df7240138667063452d01a74ff"
  },
  {
    "url": "assets/js/152.6945552b.js",
    "revision": "f83c39be109a340a9f0d8fc175e4a046"
  },
  {
    "url": "assets/js/153.902839b3.js",
    "revision": "54ea8dff3a135811ef25e302a07e2318"
  },
  {
    "url": "assets/js/154.4b23d508.js",
    "revision": "0c2ae6f6e47c47841ef74a29436e0839"
  },
  {
    "url": "assets/js/155.a644dcae.js",
    "revision": "3da3186a58d87d4c320a6bf8140cf697"
  },
  {
    "url": "assets/js/156.07597409.js",
    "revision": "5cb43899621968c2b52059bdd6bca802"
  },
  {
    "url": "assets/js/157.dbcb27cf.js",
    "revision": "8a05b7cc509184b4e768205d511cbb27"
  },
  {
    "url": "assets/js/16.653fb331.js",
    "revision": "6336c2e06ff04bfe7822edcc583130aa"
  },
  {
    "url": "assets/js/17.af9bcdc0.js",
    "revision": "6158c5e93245b8d7053ea98c85ade8b2"
  },
  {
    "url": "assets/js/18.c649dc98.js",
    "revision": "dbfaac7f8286d4ee7d5f7053ee837606"
  },
  {
    "url": "assets/js/19.ff741a57.js",
    "revision": "37735a8c0dbf7936294710b7e713a225"
  },
  {
    "url": "assets/js/2.8621410d.js",
    "revision": "55bd7833e2902f01225d487604b016a4"
  },
  {
    "url": "assets/js/20.2471a4ff.js",
    "revision": "a49d9a8eb45fe7784bb9980c2ca357e1"
  },
  {
    "url": "assets/js/21.0c15806c.js",
    "revision": "977fae86248f3996cd99b4f162b7240d"
  },
  {
    "url": "assets/js/22.3aa63703.js",
    "revision": "59a94fc8eb759000fdf76933f1b09a08"
  },
  {
    "url": "assets/js/23.8cb981a0.js",
    "revision": "ee4e1bcf7eb25346fe708f502c1f219a"
  },
  {
    "url": "assets/js/24.bb7211f8.js",
    "revision": "d5da4dff8cbbfe97cd7954efbb5a64bb"
  },
  {
    "url": "assets/js/25.dd3f9c89.js",
    "revision": "c73ac2e4530847944ac0a0281b32e3c4"
  },
  {
    "url": "assets/js/26.0a63472c.js",
    "revision": "4305b92bf9df19a9b88b774fbe29bd17"
  },
  {
    "url": "assets/js/27.97f51600.js",
    "revision": "550972ec2e8e4e98fb5e388199a80462"
  },
  {
    "url": "assets/js/28.c7cfe4c9.js",
    "revision": "75cf45b7ee943725fbbc3b244a6bf5e9"
  },
  {
    "url": "assets/js/29.30650f4a.js",
    "revision": "78695204a5a40b16ebd56d62cf8eb8d2"
  },
  {
    "url": "assets/js/3.4e5e34a2.js",
    "revision": "6e456cd3328da067ebb484d8dfa91c5c"
  },
  {
    "url": "assets/js/30.14ff92dd.js",
    "revision": "9bd4a4704d9b28be28c89cd80bcf3d99"
  },
  {
    "url": "assets/js/31.3580a487.js",
    "revision": "de0d787f8b42f201d509763b9730d22d"
  },
  {
    "url": "assets/js/32.5a7bcb35.js",
    "revision": "f3100b5378908fb5b4de8a0184c62ac3"
  },
  {
    "url": "assets/js/33.86943dea.js",
    "revision": "11ef354a59a3bac8c62cd578176cd240"
  },
  {
    "url": "assets/js/34.d81b8ab7.js",
    "revision": "aa01ac54c3aea3363d724b512321beda"
  },
  {
    "url": "assets/js/35.6dcc81c9.js",
    "revision": "de2c7752973e63efef38400229543de6"
  },
  {
    "url": "assets/js/36.12e971c7.js",
    "revision": "60e7ffc75c61ec8b6d96d4b32e8a32cc"
  },
  {
    "url": "assets/js/37.718c8709.js",
    "revision": "e93cf7d45b954c1fa6e99bd480320181"
  },
  {
    "url": "assets/js/38.6a84dce2.js",
    "revision": "2ba6a1f9c3caa5f26882fa29a9499dd5"
  },
  {
    "url": "assets/js/39.710e748e.js",
    "revision": "189b79a27d9a4cee050d877085b4b8e3"
  },
  {
    "url": "assets/js/4.8a5818b7.js",
    "revision": "ab94a71da090c8cdc45cb7439bfc670e"
  },
  {
    "url": "assets/js/40.835997a2.js",
    "revision": "8c764dcf3af9d0d3712811bc9acb7453"
  },
  {
    "url": "assets/js/41.f92c6789.js",
    "revision": "311fc5c667e9b22d293c4ac8e0b334f8"
  },
  {
    "url": "assets/js/42.6d6a53a2.js",
    "revision": "8f54a63e42c1845c82c340235dc7a9b2"
  },
  {
    "url": "assets/js/43.b26e82ee.js",
    "revision": "b9877d9967989e3b12714cf7a25d6c73"
  },
  {
    "url": "assets/js/44.75947b75.js",
    "revision": "72b2faf3f214e5f3f28e0255c2fe15c3"
  },
  {
    "url": "assets/js/45.2c3c9114.js",
    "revision": "caaf247d734cbaa3cf2af549d13c8744"
  },
  {
    "url": "assets/js/46.9d15b33f.js",
    "revision": "4cc6292d845d05cd238f5a4e68631ee1"
  },
  {
    "url": "assets/js/47.239a1659.js",
    "revision": "7571a8bcc2cccec9ad12cfe463797a15"
  },
  {
    "url": "assets/js/48.5d90a2dc.js",
    "revision": "422fad01ac5d4ed38c32b7b2ae16bad4"
  },
  {
    "url": "assets/js/49.f10313d0.js",
    "revision": "bceefb7200fe0d39c8e6dadd67f9090f"
  },
  {
    "url": "assets/js/5.90210bed.js",
    "revision": "796ebb0949a32ea0dbc1b3ec2d1d240b"
  },
  {
    "url": "assets/js/50.7eeb7f31.js",
    "revision": "6159d8c9a52a3df2a2c65396584d54b9"
  },
  {
    "url": "assets/js/51.9860c0dc.js",
    "revision": "4d960130374c612ab0f46abfb4df24f0"
  },
  {
    "url": "assets/js/52.43638246.js",
    "revision": "3453e61814894d45f3bb56efa367f513"
  },
  {
    "url": "assets/js/53.4f099cc4.js",
    "revision": "446236810a9b9b6da9b105e822a03952"
  },
  {
    "url": "assets/js/54.65ef5e5a.js",
    "revision": "74411d043b40e729371bd78887dbc2b7"
  },
  {
    "url": "assets/js/55.a79edd9b.js",
    "revision": "c7c70cd1b9ba8524883452f5feab9839"
  },
  {
    "url": "assets/js/56.e3dbee86.js",
    "revision": "55e32e13d650a7cfd5b74a1374b31b99"
  },
  {
    "url": "assets/js/57.91e604f2.js",
    "revision": "10551c48852c73309c9e8ee99af77921"
  },
  {
    "url": "assets/js/58.6f76ee84.js",
    "revision": "06c169b43cb8d7e3a36000cad468cd09"
  },
  {
    "url": "assets/js/59.94280ed8.js",
    "revision": "516b042a85d1b7db3681cb154d36e85d"
  },
  {
    "url": "assets/js/60.81244743.js",
    "revision": "c19d4667284eae11caa8af76990d2804"
  },
  {
    "url": "assets/js/61.44e4bce7.js",
    "revision": "038680256b232fc2084c8f7e2ec353ab"
  },
  {
    "url": "assets/js/62.94e6f702.js",
    "revision": "a3e24f15c38b4a2556168a2d55e4272c"
  },
  {
    "url": "assets/js/63.27f7df39.js",
    "revision": "16a41732f9d6d95f08b2137d3f35e1d5"
  },
  {
    "url": "assets/js/64.ab126f73.js",
    "revision": "a3ef4ab0f649775040fe3d9420c8f26c"
  },
  {
    "url": "assets/js/65.aa5b2d2d.js",
    "revision": "dc090ba8eb1272b0a81bdd63ad5e99fe"
  },
  {
    "url": "assets/js/66.4465eb65.js",
    "revision": "14deaddb99646bc47e0f11d55fd9ff49"
  },
  {
    "url": "assets/js/67.690095f2.js",
    "revision": "0e348ff6cd60aba132b6ac8d0af8e24f"
  },
  {
    "url": "assets/js/68.94bdce48.js",
    "revision": "f77bf6475d855d2d0ba251dfa665d8f5"
  },
  {
    "url": "assets/js/69.36a87c83.js",
    "revision": "7893280924a26ac74f32cd68eb35c48b"
  },
  {
    "url": "assets/js/70.66f18c49.js",
    "revision": "ac50bb15aba6eb2c442b96c467b88737"
  },
  {
    "url": "assets/js/71.0144c995.js",
    "revision": "3932f00d64ef0abe809f36c35d21597d"
  },
  {
    "url": "assets/js/72.bdcd7c2e.js",
    "revision": "28840c4365e53f3acbb8b06ab552467a"
  },
  {
    "url": "assets/js/73.ac1fc5ac.js",
    "revision": "ba3b3922b711ba00ce557bf95dc40f98"
  },
  {
    "url": "assets/js/74.984725d7.js",
    "revision": "ca6f2032766ea573f53c4fa0aa7eb567"
  },
  {
    "url": "assets/js/75.16433a69.js",
    "revision": "568d4937fe8a5d9897055f71b228efe8"
  },
  {
    "url": "assets/js/76.77434455.js",
    "revision": "ce01858911dcfc65f1f162464b4709ca"
  },
  {
    "url": "assets/js/77.b7a96b96.js",
    "revision": "0e6ebf454761e05a660b9fe42dba1f6f"
  },
  {
    "url": "assets/js/78.5f061137.js",
    "revision": "4e770724b050cd45df04e4a1e5f0e20e"
  },
  {
    "url": "assets/js/79.2ccc3a15.js",
    "revision": "ceecbda33b243d0bc09268a956ce9d8c"
  },
  {
    "url": "assets/js/8.073be456.js",
    "revision": "a56601f3a62003cae575211ae3075406"
  },
  {
    "url": "assets/js/80.34e636b6.js",
    "revision": "25a0f7bc65c8df6997de309c3f999153"
  },
  {
    "url": "assets/js/81.6513f94f.js",
    "revision": "9875e46b466e82f6c02bd49645098dfd"
  },
  {
    "url": "assets/js/82.71b0bd9f.js",
    "revision": "dfab7e91630a2e69781ef8698041342e"
  },
  {
    "url": "assets/js/83.2c4586c2.js",
    "revision": "b3a4d3a2c598fe1ab6e1ae4421bc1474"
  },
  {
    "url": "assets/js/84.be267dae.js",
    "revision": "e2e45a4cd7e64a803d9d8f000615ebd6"
  },
  {
    "url": "assets/js/85.b9122495.js",
    "revision": "d75ea74a22d538444155356e37bee0c7"
  },
  {
    "url": "assets/js/86.b6f129e9.js",
    "revision": "fa12b0fa1195d60105622d00de28e2be"
  },
  {
    "url": "assets/js/87.2a81d9a6.js",
    "revision": "d5783c60b5eeaeab4c6d607fd6125372"
  },
  {
    "url": "assets/js/88.50c4b1bc.js",
    "revision": "5ed4bcba027a2d18e4c69652baa74f10"
  },
  {
    "url": "assets/js/89.00064813.js",
    "revision": "d484ff8c8c53ff27280e99a2fa350398"
  },
  {
    "url": "assets/js/9.e5166b2d.js",
    "revision": "f04244884c2088551c857c006ce82b30"
  },
  {
    "url": "assets/js/90.b0fa888f.js",
    "revision": "369b465bb849b2ca7b4e34401fd21155"
  },
  {
    "url": "assets/js/91.7e79c75c.js",
    "revision": "78f126a0a6ad4da146df1dff4b7a285e"
  },
  {
    "url": "assets/js/92.612aeb54.js",
    "revision": "84d10f51dc8a53b00d2c6f4ffa61c8ec"
  },
  {
    "url": "assets/js/93.02506a23.js",
    "revision": "84e54fdd336f6ade2b2a6e95f7564119"
  },
  {
    "url": "assets/js/94.93595d11.js",
    "revision": "c314690ab9ae00256457098930fc42ca"
  },
  {
    "url": "assets/js/95.1774fef2.js",
    "revision": "7bae3c0607916d546df435b04aaaa8cc"
  },
  {
    "url": "assets/js/96.b0ef7475.js",
    "revision": "54f3637d5b1bd45590057b01a55fe84c"
  },
  {
    "url": "assets/js/97.9df9f62f.js",
    "revision": "a8cf2c61fd81c8dd87bb6df84a09d872"
  },
  {
    "url": "assets/js/98.b6f28f9d.js",
    "revision": "e03978e3474911dfb0d32db60a21b7ed"
  },
  {
    "url": "assets/js/99.62128b7e.js",
    "revision": "e580471dd5d4b94f83162bb491a10586"
  },
  {
    "url": "assets/js/app.767be961.js",
    "revision": "a89e6aa1827eae7b4b5eeae4a8941530"
  },
  {
    "url": "assets/js/vendors~docsearch.1a7147ff.js",
    "revision": "1b317aba2b8d82996ffa5d41b50f8dc4"
  },
  {
    "url": "index.html",
    "revision": "9f0bf44f7787b7d3074be896a8d57ab8"
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
