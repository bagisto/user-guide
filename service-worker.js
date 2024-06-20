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
    "revision": "b0c2bbff28ae3a44bead0cbf2b1531e1"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "3c0ffa385bdfa989286124ac7aa79aab"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "ca22aafbb390fc01e39aa43d6c13a667"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "174a7b7556e7482d00700b1a73902a9c"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "8af5881686320227afeec4b5cc6a253c"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "e823b9ae344d12ba88e8da738a51bf7d"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "c7c6f17f640160bb6ffee43934b19ae5"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "c17cf52932d4d897a47bc43e42e23576"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "b537a1b78ed808bcbcd9c9c5b3dec02e"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "43b0a397534a2b62f68be2905cdbd612"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "11bb3b82d0776b0063105b97a786fb0e"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "cb412aa755087f02daca1d1c59bb0abe"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "c6bbee48b4224cbaac46e1b0a9b5757c"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "7e97603a892d11b534399a2ed3d5979d"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "83bd9953d8a5729b5f3b172cc1527a37"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "a2eda8e8166e76db4f909c068120258a"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "4eb348207ce23208394e06a72a7aec86"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "6d20ba3521cdb945a3be142faf78697c"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "56322d0bb0ada411ccecb12f09d825ac"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "4f02c215cfe49cb5e8d84e57271a1a7b"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "57e3a25bf5169a6f4951b8b3a0b4709b"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "d038fae08b145651ff9ce379cb254085"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "d9fee0aa6df3851e3533d3e2377d7534"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "75f18c2d766a0bc726464ae92fa3fd08"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "08856154d6e985272f3bd4383069399e"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "4894db800b7c0597fc654dcb19d364cc"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "42989d7d7adca4380702ca12a3447791"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "ca65125c76498bfc2ed3af1f5f27a099"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "5b343770d76d0302e095dcf11e7a4576"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "98bcb575b3986bb2f75e3cd4fb660cef"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "dd79929e04e90cac47e05bbb2eeb8bfe"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "4355d9775fc056753dc90eadf3c87c39"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "ecf33e6a4a5f67e8cec9d30ce7de4042"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "bd92d2bc2eeda5b5329630e95e3308e3"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "9db8144cc508befe1e65768e82d17b61"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "96aa12d29d66ea1b6b735aec82d5598a"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "b55e8291de6b74491470915ec8c613f1"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "a7a498e24701bd0149ad94fb9e24e742"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "a84358e08807c515ac55bf291f68c3f9"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "17876a7ad51f09408e524ab3292d8207"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "1f16a4470640b3dadb60951e9c154304"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "ea338dacfab50e5e2a8e8e3a858287af"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "45fedb62e3f2db9711af7a666f564b99"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "f72127ff5f44077fb2a64b906f51f809"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "1ca014e3974e8766d48013d87b9f761b"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "5218a0ada8b6487f2529c8630c2be4e7"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "6f2d5a0cd8d2922ae3244420a799bbd2"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "9ea0e148263970189b512d9f92758ce9"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "11a503620a7d284de2c3c71d6a7e7e8c"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "e55bbbdd7a2bc2530023cfc94dd50245"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "0695cdaef72950465d4f6bb0f535be06"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "150fcc3cf691c7c3489289ed2c47e84a"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "2133f3b28791d30660d75ba6fea7748a"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "2bdc7337e545fe33cecc7bdf88730249"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "16b9ee62aef6b0a72f5631cb94846870"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "f41532a8a5c7dc03b16b11abce6f9ca9"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "14484eb2bf8485f1b1c20bc862125ffa"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "4eec67120fd5eedb4c0f9d6f429745cd"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "fe0bfb10817973997d464d8eb1b05701"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "5e642b5e134a4bc36f0b534a885349a5"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "17f08028952869002bc2e4160710d8da"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "9acdad3d0fb2f4d1fadddc9510c36cf5"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "805e05691a23f09472cdeb9b1c4ef7fc"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "9d38f871c815b4e05a8eb555d97c35b2"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "cee7d35652af704f47c2585e40205f4c"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "02c827d9d975bef62753aad1de98b78a"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "fd97fb689edda329f8c000861ca95cc8"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "2a9966cfee57bef95af3d1c04ca45be2"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "0ac3adfbd5765f6cbad93f1a2eabba0e"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "9ce04b5dde1415f8d3c98285381d6938"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "a67da274d340462e780f2fcf6a9cf28e"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "25134ac4a4ebd6fd0184bbf79345f253"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "75a1f764e968d4cf584896add1bb628d"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "5ee5d4b5d053d7d504089a0af614d87e"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "fc5eb6896f79c06d6d3e089a133f00f3"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "50401cb24f6f4a046e0e5bf3597f7ddb"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "539a0460f0cf02d5cdd682e8d49debeb"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "0736bba7f58d88b7a0b6683191aa208e"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "02b6da615d2b520c00f3d27d2e6e18e8"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "0353b81f0b0e6888bdf5219ff12fe5e2"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "537ba1bcd1852e5d15c5346b7f13e875"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "18e24c83f7e73f938ed1190e17dce473"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "b3b254d34307d097558dc57a033b6de5"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "26567475e2d3643078ef8d828c23cf3b"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "bb5e61bc6c3cb6818af2f14fb784dd37"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "5b3364d12fa5b6369f752e2bb95fcd6c"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "4b000d4d702395af2cf2e12e6eb39000"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "e23274c38da65b601637c6780a33a579"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "792d392da4c475379a9780817f7474e4"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "42d03a4896560a6390fce038bddcab6b"
  },
  {
    "url": "2.2.0/attribute/attribute-family.html",
    "revision": "9b18c2c0af17ea2bd654a53de5cc503c"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "0344850873549570e733c072bee3b19c"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "d8b7350e4b886bcff8e96004d8bb86ad"
  },
  {
    "url": "2.2.0/attribute/overview.html",
    "revision": "08031718fa3ec04b75cdeb61ea7a0661"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "c2dc3089ffebbe8d6928ad6c74913095"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "a432289ec3c8b27266c1b3da218cad1f"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "adee999e8d2403ec029448f19f0f9527"
  },
  {
    "url": "2.2.0/category/overview.html",
    "revision": "97387fb70485e82e1496a488d9382f4b"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "253985d0214a3d4f8e30beb64f92fff4"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "06a60295b78e1dcc0e9d463abc9b5482"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "8c9a503e383163beeced6bdd18ac5558"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "080c46ebd50f1c8fa4004d824ebccd19"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "873487cd7b1f6b264cd58c7baff761e1"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "dbade6a0ba7d6dac757b64ee2aaff363"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "8b8643b219510225a6a4324dcf56e437"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "cd686523fdc5aa6927df21ec3599ba48"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "b3de75fc9bfbc2df3af44f73d820aec9"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "83c95b5d9f3e77500ed0604df0056a2b"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "03d918f08b6fd8a9e26d9b29d1a379b3"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "fbc037949305dc74488d88280e881d65"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "bf96f98411343429bec1e92eeae95e99"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "fe7a882a0737007f2715ebb60e3437df"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "741fd0a8f2f3bc3cdf60405c86322e23"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "7e35a47c78eaa5346f02c42135ced90d"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "48d9037a2f3a94bcf38177804705649c"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "95d0bdd7f2a98312a84b185eab7ef9e7"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "75354ad8a8e88da690fdaa3a6e8baa4e"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "5440ecc88f18555885a285c55f2c311f"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "799d0990f29a974147dfba92ff7fd9fc"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "2bca39aa9ee0865ee5573b1c2d78db9c"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "f72197c8d47a514a43b13bf6bfb69561"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "6e7db47788b715bfd591d6264b0891f1"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "a0822cf6ffe815f556779b4f2e9b6f3c"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "0698a3a449b6f67fec14a1f1ba6d56af"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "39f574328aa4ef8a4d0387a884fc5990"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "c090e44f3bc28b3a117368c363edcabf"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "abd2f805739f0f0a953c4374cfa2f846"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "6882b742ced1bdd408c7ecdb23833228"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "b38de0616e0a375144bc9c2dafb2a695"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "4a35f2fb4977971dafbf3353f71218e1"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "ccf1fb0cf14eb4b325fa2ce5c9ffdf78"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "0b7a540057fa3dbc2242c43ff7d782ca"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "8212c69873dfd6c9156682525dcdb513"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "4c246ee876333acba0830bd84177df1a"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "36cd8a63e89fe0fe0409fbd61c000e1f"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "e2671a75339efa7be6c9a3f51aa6db16"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "26e57b73edbd3b161136dcf05ec25dea"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "7b27c02577e140524e1fb5139dda1d4a"
  },
  {
    "url": "404.html",
    "revision": "ce44066dd67e7a8ca0877e763c23535a"
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
    "url": "assets/js/102.4dc3e3e2.js",
    "revision": "4ed3195616b0a3bcb2603f496f09da94"
  },
  {
    "url": "assets/js/103.8a6d3c41.js",
    "revision": "56bed6504c46032681c605bc9f5255c3"
  },
  {
    "url": "assets/js/104.aa211116.js",
    "revision": "e7924ea68503ee8984bf5d8ab8189485"
  },
  {
    "url": "assets/js/105.c2237b9c.js",
    "revision": "60c74ff74012652fd0c1ce96fc27d716"
  },
  {
    "url": "assets/js/106.55cd3d0b.js",
    "revision": "def14220c88dd1cc7a46a2ad009cddfb"
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
    "url": "assets/js/109.5bac44a3.js",
    "revision": "f14a0102f1872504fec84ceaecd79837"
  },
  {
    "url": "assets/js/11.96384640.js",
    "revision": "0d775f7cf873059bd2ef37325d741ad1"
  },
  {
    "url": "assets/js/110.02a8170b.js",
    "revision": "6e00b15e07c6c1cb05227015bba8ac1c"
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
    "url": "assets/js/113.7bb8e369.js",
    "revision": "b2d51a580b82a0a99d073654f9e0fd91"
  },
  {
    "url": "assets/js/114.64fe87b3.js",
    "revision": "ecec8337309d6cee938af18b47a14046"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.8a6d8092.js",
    "revision": "e02e241bd46bbaa49ff29654529f2262"
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
    "url": "assets/js/119.c01983a7.js",
    "revision": "b3c7a7c345cafec81eae86cfa6aa02b4"
  },
  {
    "url": "assets/js/12.920cd792.js",
    "revision": "eaeaa0e9662e83e8b31ce20625f86dd9"
  },
  {
    "url": "assets/js/120.d7d54ab1.js",
    "revision": "bc32590bf339e5d6c414fe02e71345a0"
  },
  {
    "url": "assets/js/121.1a1d7582.js",
    "revision": "a499966e6cdb7299dc444a7ac8d8b48f"
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
    "url": "assets/js/126.a4113f6d.js",
    "revision": "571fa82cc4124f8ab7b055225e19a2f3"
  },
  {
    "url": "assets/js/127.b1dc0a03.js",
    "revision": "591ec5539c030f2dceef97b2e2542f4f"
  },
  {
    "url": "assets/js/128.73c81d7c.js",
    "revision": "20541ccf23319a581deafd5386e1220b"
  },
  {
    "url": "assets/js/129.8263238c.js",
    "revision": "79ea6a98e6d311651ce10bd32fe4d980"
  },
  {
    "url": "assets/js/13.e851737e.js",
    "revision": "17b537ef76325ccb7f35cf9fe49c7e1f"
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
    "url": "assets/js/134.15306f84.js",
    "revision": "36236f1e042cac07f4054e5c82992d17"
  },
  {
    "url": "assets/js/135.eb62ec57.js",
    "revision": "738193c839f274d309b6450e77ce5b58"
  },
  {
    "url": "assets/js/136.ee12f508.js",
    "revision": "4dc5071f3be11e83a092db1da3d087de"
  },
  {
    "url": "assets/js/137.7cc65e51.js",
    "revision": "e0dc2d2ced937674e15c561c8080d80b"
  },
  {
    "url": "assets/js/138.b980a581.js",
    "revision": "4c69f3bd091b0795949db87a632a5d0b"
  },
  {
    "url": "assets/js/139.5af83ca4.js",
    "revision": "a1fb5a77664031d77390e36eaadbbb7a"
  },
  {
    "url": "assets/js/14.5933f9aa.js",
    "revision": "ca3a2ffbfff40f10db40d9e76599ee96"
  },
  {
    "url": "assets/js/140.d78df98a.js",
    "revision": "cb723558629d34f50ef8c7c384694dff"
  },
  {
    "url": "assets/js/141.7719396c.js",
    "revision": "ef4f8ebcad6ee8f79cdc8fd16130350e"
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
    "url": "assets/js/144.ba029e28.js",
    "revision": "ee1bd121a0442d7a51cb8d7b9eecc2e5"
  },
  {
    "url": "assets/js/145.1762ca97.js",
    "revision": "a1e91c8f9751b89b2c5ff935802a0e75"
  },
  {
    "url": "assets/js/146.ed79dcc2.js",
    "revision": "13a6100186ec548cfafa4471732edbb0"
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
    "url": "assets/js/149.85e3f74b.js",
    "revision": "6339bb850abd797f1fb9c9fef248989e"
  },
  {
    "url": "assets/js/15.d2bddbe8.js",
    "revision": "e016a1a3f29c2b904ea0f08196d9da9c"
  },
  {
    "url": "assets/js/150.ce447c51.js",
    "revision": "084d9e5b640f416615b8c3490cbd4e03"
  },
  {
    "url": "assets/js/151.ffd9aaa8.js",
    "revision": "52487d5d34ffda8a28601a8e2af371ec"
  },
  {
    "url": "assets/js/152.592a8f95.js",
    "revision": "6871aef510beaf34fe1713139a4b5262"
  },
  {
    "url": "assets/js/153.6f24f3a2.js",
    "revision": "9bf918c64bd12258802d7971a62dbdaa"
  },
  {
    "url": "assets/js/154.1ba13c4b.js",
    "revision": "0acac10a0ddc8e28ddba989f01bafad8"
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
    "url": "assets/js/157.fa59806b.js",
    "revision": "0811b4f972f569d0d9a23eefe28da13d"
  },
  {
    "url": "assets/js/158.ed512adb.js",
    "revision": "e294a2ce5f5d322cbb6f23478e298d16"
  },
  {
    "url": "assets/js/159.7af118c3.js",
    "revision": "f8aa4fa327290cc44d0152b1654d0233"
  },
  {
    "url": "assets/js/16.45ee1e77.js",
    "revision": "7f4eab8d275695d259072682dd4e290d"
  },
  {
    "url": "assets/js/17.b9a4ebd3.js",
    "revision": "ca0a0b1ae1dfdbbe055ed19e7e8e0ed4"
  },
  {
    "url": "assets/js/18.ea4eb7c6.js",
    "revision": "a784b407f3a762148ac290942bb1664c"
  },
  {
    "url": "assets/js/19.88ac0a0f.js",
    "revision": "df05e796ac519168f280b725cd2c9316"
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
    "url": "assets/js/21.6fc7d9de.js",
    "revision": "d94023233ffebb9266d257e17abbf438"
  },
  {
    "url": "assets/js/22.63aac576.js",
    "revision": "9bcc5bf056560c6353627007243e04c1"
  },
  {
    "url": "assets/js/23.42502061.js",
    "revision": "fa59655ec405f7b0eece1bb77bcb497b"
  },
  {
    "url": "assets/js/24.1e616c17.js",
    "revision": "115fefbfe048a4b3be4325b1ae4fcc85"
  },
  {
    "url": "assets/js/25.43ea19a1.js",
    "revision": "0a129c68a4fa423ed2d00492b3659d94"
  },
  {
    "url": "assets/js/26.ecbb89c1.js",
    "revision": "c8198474e8bc08a3e28f32cca6a8904c"
  },
  {
    "url": "assets/js/27.39ba9f9c.js",
    "revision": "a70a890ec9ffda6bf6684885a295b659"
  },
  {
    "url": "assets/js/28.8cb47c64.js",
    "revision": "8155d87edb2282cf88289ed70f14a7bf"
  },
  {
    "url": "assets/js/29.453e6751.js",
    "revision": "9ec65442ab41df3c4c07e3766eb916e3"
  },
  {
    "url": "assets/js/3.bd3b16a4.js",
    "revision": "3caa258015023020a1043d73accdc017"
  },
  {
    "url": "assets/js/30.807280cb.js",
    "revision": "ca123f29a0c8e0f552538873f888d5e2"
  },
  {
    "url": "assets/js/31.e2e71c32.js",
    "revision": "381f2f2b332cd991f6e5408ac99e6bac"
  },
  {
    "url": "assets/js/32.9d129b31.js",
    "revision": "80039a7281c86bbb47945869d1121118"
  },
  {
    "url": "assets/js/33.e3cbbfe9.js",
    "revision": "2a7114fa95df9953b231ab7f7e47d1e4"
  },
  {
    "url": "assets/js/34.0306f5f5.js",
    "revision": "68906bbff9d2134dfea0fa15b71dcc8e"
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
    "url": "assets/js/38.648fd9c5.js",
    "revision": "69a42b1f9d64e9219cb260b82a4618d9"
  },
  {
    "url": "assets/js/39.a0811a2f.js",
    "revision": "96259237f0976d130950fd9eba8e65e8"
  },
  {
    "url": "assets/js/4.49506811.js",
    "revision": "2070b9e3d6bbcec39b93cd6145eea89f"
  },
  {
    "url": "assets/js/40.8633339a.js",
    "revision": "b9ac609d0460cd46ee8301ac617da2c6"
  },
  {
    "url": "assets/js/41.f8ee5483.js",
    "revision": "74ddb1faf3f747eb7b86b5a0a4239bd2"
  },
  {
    "url": "assets/js/42.595ad3b6.js",
    "revision": "283951c5604febb4e070974bcd2cd654"
  },
  {
    "url": "assets/js/43.05a61d45.js",
    "revision": "a1ead86bac592a7343c2dfd4db6a7e30"
  },
  {
    "url": "assets/js/44.b8a6a96e.js",
    "revision": "bf8b37a78581e68186cc42801c32d03f"
  },
  {
    "url": "assets/js/45.33d9ea9f.js",
    "revision": "940c0d2386be15831fb6aa7d22a48bec"
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
    "url": "assets/js/49.20794926.js",
    "revision": "eb036dd125ad2e14b9397e6bea376c85"
  },
  {
    "url": "assets/js/5.12e0bd25.js",
    "revision": "ae3e365cebd2783fccb9ea4cfcd5bc8e"
  },
  {
    "url": "assets/js/50.f670b608.js",
    "revision": "2f748cb73915c32be518d2d9daaec1d5"
  },
  {
    "url": "assets/js/51.8027ae98.js",
    "revision": "a62490ad14c57e0564cbf18ec0815fb6"
  },
  {
    "url": "assets/js/52.087e1b54.js",
    "revision": "203cdbede7cf2fe48c1ff2149088be07"
  },
  {
    "url": "assets/js/53.0787e338.js",
    "revision": "d7f1429f8b86644da5dd33eed1b3888a"
  },
  {
    "url": "assets/js/54.0ea0b0cb.js",
    "revision": "e67cdf1f9657cedefb6d24eafe87c16b"
  },
  {
    "url": "assets/js/55.d842fd46.js",
    "revision": "689b79325af229894fdd52b5a5db7ae3"
  },
  {
    "url": "assets/js/56.3165d7c2.js",
    "revision": "acc140d1a6ff998ec7cff63ff7c1ab49"
  },
  {
    "url": "assets/js/57.8fe6a0ab.js",
    "revision": "3eb215b115ac10e6a92f282bbadee509"
  },
  {
    "url": "assets/js/58.873f05d1.js",
    "revision": "3f9cb6fe651ae88303f21c9ac6106474"
  },
  {
    "url": "assets/js/59.1af7929d.js",
    "revision": "2f7d36d5cba7a93b6ae03a0ff98e5e81"
  },
  {
    "url": "assets/js/60.f53dee91.js",
    "revision": "0299cb80d7117ad828d358b50a34ed3f"
  },
  {
    "url": "assets/js/61.9afa996d.js",
    "revision": "aceeed4ad782064460a613f33d93a3a1"
  },
  {
    "url": "assets/js/62.dbc635eb.js",
    "revision": "a8b491efbc8d604872f153444edbce99"
  },
  {
    "url": "assets/js/63.cc90f612.js",
    "revision": "2a7e4fd74d88025f0260315477eb421a"
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
    "url": "assets/js/69.9d327c7e.js",
    "revision": "bfddf282f0b73317c43fc0c2f479bd1f"
  },
  {
    "url": "assets/js/70.bcabcaee.js",
    "revision": "598c585eacf50c722457e0052cd16ca3"
  },
  {
    "url": "assets/js/71.3270ed2e.js",
    "revision": "42d2b505310d425107b289205101ed3d"
  },
  {
    "url": "assets/js/72.64325c09.js",
    "revision": "3ca60690b9549c2e7a06b7350280577c"
  },
  {
    "url": "assets/js/73.7f63ba2e.js",
    "revision": "6aff691e88042a1d3dc1a841b906e88e"
  },
  {
    "url": "assets/js/74.4e606a08.js",
    "revision": "668fc22396c6260b238e8b906337859d"
  },
  {
    "url": "assets/js/75.72268536.js",
    "revision": "d381f9cc8459fb4e5f81b111d2b33415"
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
    "url": "assets/js/78.e9eb173e.js",
    "revision": "b86c4c8a2501608808bad7f3ed26f785"
  },
  {
    "url": "assets/js/79.5301e6b4.js",
    "revision": "285c281df974b70e5ef3406e5cb16df5"
  },
  {
    "url": "assets/js/8.9c0d1834.js",
    "revision": "88ebe1d5dc2611818e756f5edc05fa66"
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
    "url": "assets/js/82.0d296dd1.js",
    "revision": "9a796d3a6f8184db9e9fa877ec3d791a"
  },
  {
    "url": "assets/js/83.c17685da.js",
    "revision": "5c12c9fa28b54940b2b63f358d6552a1"
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
    "url": "assets/js/88.66ce60b1.js",
    "revision": "60412d69c8da68b5eb7638b07656f192"
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
    "url": "assets/js/91.603b8296.js",
    "revision": "1043c57ae889c0e8fa3a11872f043c9a"
  },
  {
    "url": "assets/js/92.9e368586.js",
    "revision": "fca33d4ae1c78e8ad49c288e70c2eef1"
  },
  {
    "url": "assets/js/93.47f9d2c4.js",
    "revision": "645047a600e122b5e19ed5ea5dc85fbc"
  },
  {
    "url": "assets/js/94.6de0782e.js",
    "revision": "cce3a3a0ee8e1c10012731746bbedc1e"
  },
  {
    "url": "assets/js/95.89368b56.js",
    "revision": "0b8e37820ebf42fa8496dab3649de81d"
  },
  {
    "url": "assets/js/96.34122658.js",
    "revision": "e930b93a0e1af0897bd424eefe8029f9"
  },
  {
    "url": "assets/js/97.05811b63.js",
    "revision": "f674b7c3d163622b93061b5ec3aea6d6"
  },
  {
    "url": "assets/js/98.934bf9b6.js",
    "revision": "ced5796c4f151d6d135706077d44af99"
  },
  {
    "url": "assets/js/99.1655d227.js",
    "revision": "33b6abcf1ddc07405d4916400101b2bf"
  },
  {
    "url": "assets/js/app.8a356867.js",
    "revision": "071622be654c54b2821ae0417a9266ac"
  },
  {
    "url": "assets/js/vendors~docsearch.20b3f658.js",
    "revision": "7412d30611385ee05cb918c7bea5d6e8"
  },
  {
    "url": "index.html",
    "revision": "3851c08eeb08cd6fb5151bde9fe63d70"
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
