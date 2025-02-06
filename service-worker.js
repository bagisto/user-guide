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
    "revision": "f6d2c2e705a73f888015e26b292a5a78"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "4ce2afcebb6dc2cda93255a9dd7fe8aa"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "f76ffd0a914e74ea279a1e68b7a1662a"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "9c4a0460bf355dcbc8a4d8f0e659f5b1"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "b1cdddc4a0e429c6601ffd989f9d9185"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "cee785fa96a4f737a7a98c6de28f13b5"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "b2c6a661c38327d01bd9a1a3df47a0f7"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "b93c9d6c11585e5e1da6502cedb094bc"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "4bcdcc2e698bb9e78850e1b2eebc6a3c"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "8b24ecc461c68e6c056fa17a4cb01ece"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "5439064c304c376c4314138a098f9b45"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "c4b01180b39f6e8736cba16fd2d5973e"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "7ec0e0113b9f63ab06d2eb91f7d4e11a"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "6f43690ed0b756d33be6ad1fb4ab0702"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "d18793cb21e86bcd7fb544ef40ce5d77"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "9b0df65d59dc11f630ef770b579d27eb"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "58b2a8269200ceb0499ddf77435ba066"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "da162605f7c736ba354139d7ccf8eaab"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "f06c6950080275028e12607832508346"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "b4fffaf5231585383970a40ac6c9ef00"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "796249a038fbd242fcf1335191027735"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "4522522fceaf7f2655016f4352807cf9"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "9eaf9db5a8e103b08005939c9b1495b5"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "f4d14c27f9dee7c36a8e067d01f317d5"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "de2a14e08d018a0c4a7da23dbce1f4fb"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "e2bbc1353f92eb66533a7cd13b3d8846"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "4a29eb5c388bee5604865cdca5f1f65f"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "ee8308a9791dcf7049175c659cbea23e"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "4b450d5c8ea3f9662941cb50dd554261"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "9ca9b53a8068d330459f970a38aa0171"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "a8ab41f7bd5d7733c68302a4d1145972"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "77402d793a150f03515ee4e5d33101b6"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "b739fb988d67ade2005f20ef8d520976"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "1eb1e02609ba6bd3cd8a19c17e3c8181"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "71db3a2de33f28397b7904c6199ae748"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "fd83d0b7092f11b8214fb0a1fed88b47"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "8c916c34db79437369836f53777c2313"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "80bc8b5084639e917f09dd9a483c356a"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "b3acc37038e1e0a4933dc8fc8b42c018"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "740f2cf59c599df0d05d45f3a51c62e2"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "cdda65ff26370cfe05da83e6932559ce"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "386c5b29601ccdf4468dd2825e5b04b8"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "795b564c255a01466ab58ecf65b0b0a5"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "4315723aa0d6f7e120c7a64f10f55406"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "2de7957c279add1e7217b95a0df5f39b"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "f8a49c21b125bfca1ca4170fb529768a"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "a8403715341cb4435d17828b04f43058"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "d2a6922de4d59a114cb8080d87c19ed0"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "5fce3f6cde134e54e2599dde2c4947b5"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "c7998f04874899820e0a89db6aa8e316"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "77e20cd86d29ef737d177f60f915ad6b"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "a81448a5c591e7534afb36ad282e3273"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "0cfb659529410264f2d45ec98a95b603"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "489511c1bac9400f9cbe2e4666f9056f"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "ee96b7c90b90ecbf27e7896c34102967"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "33ce4bcd9d247d85557380405db5023e"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "b0d46829c87f615f249d2a66ee4a4f82"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "a847680064536821db0cf29b93e847ca"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "906aa629d25073dd639eee9cf89d8c6a"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "48a93dda38b55fb28273b45de9c4842c"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "cf16f34c079aab4627be091edfa96fcf"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "1128186fa6e2912d0cc3681807e2641c"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "2d232dc6f05a9d2b512458a797c2b6c9"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "a553e9a58ffcb867d18c30e1275f0009"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "943b5f3934f37c9cf8cc946c05e5dcf6"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "fa4e14ee0cff8674a6d8827dbf04cc42"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "6ae5defa61779e22fa1a78cbe9ce06c1"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "32bc17fad6315c81897efad5cdbffe59"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "f2c75349b442cfa781abd3dc7cad460c"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "c55b3b4e05cbd77a81b51e2a7556dcbe"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "80b010b55e691ffaed5f5a6e537d5077"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "4e4fa665bc0618087ee8a38a714ac4e5"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "ae0911091d880c84319e4762dacdb259"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "27f112da42e614129484b78591aaae26"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "861f9193951678a236cb2fa26d9c41cd"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "2705382cfca45faea4046d5de350fc7a"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "8acd6aedc8ad787e0e13a341ad2a71a6"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "3b8f6a1b0e742cc956e4c6843e963fa0"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "58e07b2de24e18a508c57ef793899191"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "d1b16e2724fbd9efca5700ca7d4ac954"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "19d0ef21a81157cf80da763a105fccd3"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "4af2e4b7b981f06f4218ffd260106561"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "4bdb7ed6a41dd46e5304c0b16ed0e2aa"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "377ad9f2a345697c76031eb4f7f57867"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "5af8f63fb6ee68dc619f896c563788e7"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "b7f70a38ccde26f6b367cc6970206293"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "ea34214c834ab40e866728356ecb708b"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "8f932000df74b0832b62027e293e1386"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "077233b3f9387d4f0f85492f8ee34c45"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "1f6f2e5c04a6eaf1078484d04cc7c468"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "cc5200cabb8b5f388a87512c4fcbaae7"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "82b6b70c5c0248dc02a54a7e484b888b"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "b082a2850ff3f4482adc48e0a4d28125"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "de0e828f60182fd61bcf0c64ddfcdb34"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "ad9bef004cb15fc3d0856cc19d7593ac"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "6966d7f25baa08c47d4ec1167460b909"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "35a8ceab941cca6cff662ef5aabfdb69"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "7ee255d8875537a8586f6fb8825ae83b"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "e8bfab8921cd4f4c3e336756899604c8"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "a35be76689e7cc60514ed184b59b80fd"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "20e7fb33ea66689429562313a34d5ebc"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "d7f52701f1a43a3733eacd70bd2cc202"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "2f992f8547b00a96e17db10ffb8cf0d6"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "b949ce964cf7e85762c3211b7a53d305"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "cfffaa9023603ad5645db254eb84fc09"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "73ac5df43faf8df9761e171838052c68"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "deb2a4bd2c5b508c433c0a72f71bd96a"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "48757888452546ff93e56951a58da86a"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "0d59518434941be3369fb6e7d969e315"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "e6107ed606abf0f14bf84f11c077ea51"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "b2def593092be9fc37fe81c4024b68c6"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "95df06a0be71a6728c6e5e14b933c2ec"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "033db18ed640dde358f90696a6528091"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "f142bcf05da6e1f4f22bc111689b6ae5"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "950a3ad4bf258da776dc4be69a2ef14a"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "03972ea53934aa1ea9aabbe64bdd3b3d"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "4d8b1bfdb91d403707aa842b057a45f0"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "929b4cbc324f84fb6892fddbfc19bb0f"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "1eac710763a4229e988b2a766fb4e872"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "e29587b4a0ec46d22b3bafe60ae0c32b"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "3fc18477e1ca0ed5b6863351aafab3a0"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "45aa43d05c64b9b49cb5413be0dea330"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "700e7a9ee069fd1da39a0a0a44d616c6"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "3d2bc370771f8282c3eb0f8b145f5018"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "651b6ac6fd52a83c15cd62395d3eeacc"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "727553e7f1b2ad3fd2890c08f90fd44e"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "1d7cc92c039b806a82b35e83fa25eb3b"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "173c265af0d7c3eeaf038acae805756f"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "0b80a5eea455085b435789ece2bba4bc"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "bd484e66cbae02f6c198ef6d78e047b3"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "1f857ef3e0bc4f6f5bb01afe3e17f1af"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "f29aa724ace8125c3d9cef7f2fa0babc"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "3a5beb87c0968ad1b22c9a00da34aee4"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "e746d72ee4aed9078e54fc8d8fe23057"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "f58d0b28ae5c0882dab8817869cb5a5e"
  },
  {
    "url": "404.html",
    "revision": "705fb363396b705516ef0f5ba68f944f"
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
    "url": "assets/js/10.87f96130.js",
    "revision": "36079c051fa34b13948fce563389489a"
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
    "url": "assets/js/104.3f0984cf.js",
    "revision": "1f9a56f62100f5c682cde91b49d481fa"
  },
  {
    "url": "assets/js/105.9195b187.js",
    "revision": "b3dc1c2861a4285bfcb0fbcc967018e9"
  },
  {
    "url": "assets/js/106.2140eb53.js",
    "revision": "e1c0baa9fb7d04e3ebee68eb0089af6b"
  },
  {
    "url": "assets/js/107.3fc4d1b3.js",
    "revision": "f99b37f9e2901ea3071cd3afcda11af3"
  },
  {
    "url": "assets/js/108.f5247863.js",
    "revision": "bde1c2c4000f1fe636bb95a93ffc64a9"
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
    "url": "assets/js/113.0120f0e6.js",
    "revision": "b63b87f7699766378f001bd07d9bcc61"
  },
  {
    "url": "assets/js/114.ea66f21d.js",
    "revision": "bed3a80cb129ff854d84c1ebc46601e8"
  },
  {
    "url": "assets/js/115.512bc88b.js",
    "revision": "53c6c6e3456566c2b24eb384e4e4d182"
  },
  {
    "url": "assets/js/116.55eed969.js",
    "revision": "201c51a1bc12132efd28c0f41182adfd"
  },
  {
    "url": "assets/js/117.db16f4eb.js",
    "revision": "dd9222cba6889666c99a4a0adbca64a2"
  },
  {
    "url": "assets/js/118.eae49c7e.js",
    "revision": "1fccff1b4eef434c428babcf726cdcd1"
  },
  {
    "url": "assets/js/119.2cca1589.js",
    "revision": "90f2d96f9056306bee6824032d6c51c5"
  },
  {
    "url": "assets/js/12.5525c7df.js",
    "revision": "39093e8e850a41950422f6e6b2c1478f"
  },
  {
    "url": "assets/js/120.7e73cb59.js",
    "revision": "533b93c5fb2bab29b42c2b3359205e49"
  },
  {
    "url": "assets/js/121.49252f0e.js",
    "revision": "c946e39268aabf78cd6be8c589c1582b"
  },
  {
    "url": "assets/js/122.0e141493.js",
    "revision": "86410d22e084663f6bd1c09e00fde546"
  },
  {
    "url": "assets/js/123.8b27ee12.js",
    "revision": "901789a45cfab92c36330689bb637869"
  },
  {
    "url": "assets/js/124.62c518a7.js",
    "revision": "85400a1b508260b3d8e5d4853be4b621"
  },
  {
    "url": "assets/js/125.fe5745b9.js",
    "revision": "2a012395ab1bc39c115dd7a7e0782754"
  },
  {
    "url": "assets/js/126.f0a56d4a.js",
    "revision": "7859add0bb202c7b33e1c485843f20bb"
  },
  {
    "url": "assets/js/127.5d5f995f.js",
    "revision": "c67141426c0ed9ac7b891614da4ca42c"
  },
  {
    "url": "assets/js/128.f1519c70.js",
    "revision": "f66a752cbf2d1b0f67ff78c236b856c2"
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
    "url": "assets/js/132.b7bf665d.js",
    "revision": "5f090ff5629eb4af731833b4334c8548"
  },
  {
    "url": "assets/js/133.c13eaa46.js",
    "revision": "81c76349d694246817b0283a58713a30"
  },
  {
    "url": "assets/js/134.ee411c14.js",
    "revision": "5b4acbe39ddcb72b9f4434992dec1ec3"
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
    "url": "assets/js/138.3e28a59c.js",
    "revision": "a30d100461494dd4d9f8f75cff89842c"
  },
  {
    "url": "assets/js/139.1f73af84.js",
    "revision": "e2d56eb36665774659b71d46a8b9dbb3"
  },
  {
    "url": "assets/js/14.f15526bb.js",
    "revision": "3a20fcab8c9bf1f6a7ca00af7fa5ca64"
  },
  {
    "url": "assets/js/140.5e3154c0.js",
    "revision": "eb8d73cc05b599bbad116331f7770fef"
  },
  {
    "url": "assets/js/141.ff7a395d.js",
    "revision": "e0fde5e0f05435e64e7b1943608f3e60"
  },
  {
    "url": "assets/js/142.55add252.js",
    "revision": "341301eb06852a5044616ae5c85cb114"
  },
  {
    "url": "assets/js/143.cfd6fe91.js",
    "revision": "c9a426a80e716880968467bbd7e80c90"
  },
  {
    "url": "assets/js/144.d2698792.js",
    "revision": "1b68f0abbb34e51039aa1d2f70bed9fc"
  },
  {
    "url": "assets/js/145.91860068.js",
    "revision": "25e016b5d9b201e488fbd22e948c67c2"
  },
  {
    "url": "assets/js/146.ee8bb482.js",
    "revision": "15dfab4186e450b51728708fe5483abc"
  },
  {
    "url": "assets/js/147.5aac7053.js",
    "revision": "4a245c9c8521fed59086219d79f376ec"
  },
  {
    "url": "assets/js/148.ab1162f2.js",
    "revision": "34d354541f5faf8d8be0b5d05949aca2"
  },
  {
    "url": "assets/js/149.efa74c36.js",
    "revision": "e837a663cb0538562df6088266c06671"
  },
  {
    "url": "assets/js/15.7dd0df8c.js",
    "revision": "06c8ecd0f4be2dc2c822a13511ffc911"
  },
  {
    "url": "assets/js/150.c9d4896b.js",
    "revision": "4383d7da70f80c5a6fcb92ba539b7bdb"
  },
  {
    "url": "assets/js/151.c34690aa.js",
    "revision": "5141f82e541670194e2dd64f274a4652"
  },
  {
    "url": "assets/js/152.6d7e5b12.js",
    "revision": "a6f9d59bfb89541ee62eb3aecc0ad921"
  },
  {
    "url": "assets/js/153.6ccf972f.js",
    "revision": "a6dd33bcf2cd3758c3c5ded0adea701a"
  },
  {
    "url": "assets/js/154.3dbd2f12.js",
    "revision": "7b73f33aeae1da5a85e8d8f2178e9827"
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
    "url": "assets/js/16.14e0a3c9.js",
    "revision": "0b1fbd45bed4720bbf1469227d93acb7"
  },
  {
    "url": "assets/js/17.60f09287.js",
    "revision": "a86327f64f4fa9d089882fa0485d7437"
  },
  {
    "url": "assets/js/18.1f8bfb84.js",
    "revision": "c377051d0da7b6fcff4a817f99d37560"
  },
  {
    "url": "assets/js/19.c3e71a3b.js",
    "revision": "eebabddf04315960c3acb7318d14bba9"
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
    "url": "assets/js/21.62702f91.js",
    "revision": "a31318d0e9f44a2d33942864219ed914"
  },
  {
    "url": "assets/js/22.c7d25434.js",
    "revision": "99e10feae7e4e4476633fcdce7f27aa1"
  },
  {
    "url": "assets/js/23.1e58b540.js",
    "revision": "fdc51fed3a617d24c8e1f3cea7738971"
  },
  {
    "url": "assets/js/24.f81366e9.js",
    "revision": "24bc41543cb814cc3763aca133692a66"
  },
  {
    "url": "assets/js/25.fb70e764.js",
    "revision": "804a35d8b53ed2b2b09dd70a3f4a8210"
  },
  {
    "url": "assets/js/26.17f25ff0.js",
    "revision": "57033804e0801d797b4b1557b32c15a9"
  },
  {
    "url": "assets/js/27.fc3d1923.js",
    "revision": "ede1188730aaeb54054631bfedf178a8"
  },
  {
    "url": "assets/js/28.45817db7.js",
    "revision": "37d96d752448ebb66b663fa21ac7228f"
  },
  {
    "url": "assets/js/29.f8ece169.js",
    "revision": "8accb38c48e1b2033a04984682129bdd"
  },
  {
    "url": "assets/js/3.9bc1bbdb.js",
    "revision": "6311c820a5772ab701c2e2b15678cbc6"
  },
  {
    "url": "assets/js/30.c5dead75.js",
    "revision": "68590b8652c896b2d9a1161b712a8671"
  },
  {
    "url": "assets/js/31.50398a38.js",
    "revision": "b6554047c49e3e03f6f7acbf759178d5"
  },
  {
    "url": "assets/js/32.0c451734.js",
    "revision": "e019e8ff1d86e6f3a69e151e1a316401"
  },
  {
    "url": "assets/js/33.96ff8290.js",
    "revision": "ace92db092305570e1ed0e98cd44eaa8"
  },
  {
    "url": "assets/js/34.98a0d257.js",
    "revision": "7a783e5191bc60ed71d3cfb2414b1062"
  },
  {
    "url": "assets/js/35.69908a6c.js",
    "revision": "a4e155c6ab0c56a43f170c51509e36a4"
  },
  {
    "url": "assets/js/36.aa29c6dc.js",
    "revision": "7523114a8ce40d5007d25800923fe1a5"
  },
  {
    "url": "assets/js/37.d5748113.js",
    "revision": "328cf2f6cdf4e65ea2cdaaac40851bf8"
  },
  {
    "url": "assets/js/38.e6d8301d.js",
    "revision": "014b3a05db842d3cced876c8e5032475"
  },
  {
    "url": "assets/js/39.6db95091.js",
    "revision": "bf339ca6e6eb5f266abdfe049ee451ea"
  },
  {
    "url": "assets/js/4.c4ec618c.js",
    "revision": "a3003abf358394cdd01de66b5e76a17c"
  },
  {
    "url": "assets/js/40.2592bcdd.js",
    "revision": "d60903d230d5bcdd8b5400227595a1a3"
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
    "url": "assets/js/43.dc4ce9aa.js",
    "revision": "2bfbbeec4d404f17e611f2e18fd65ebe"
  },
  {
    "url": "assets/js/44.d0520470.js",
    "revision": "027bc28a28f6e2ad5ec1891d105eb822"
  },
  {
    "url": "assets/js/45.c22dc33c.js",
    "revision": "7edf5bd644e7ed8a459955019468f04f"
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
    "url": "assets/js/49.8b5682bd.js",
    "revision": "48f74508e0238692bdf7b659f24c153a"
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
    "url": "assets/js/52.63a90303.js",
    "revision": "ed9534dd9e7fd3dbde6c33cd29d8e197"
  },
  {
    "url": "assets/js/53.fe6fa9be.js",
    "revision": "a2146350ee67ee0707734a2d0dd03266"
  },
  {
    "url": "assets/js/54.188c8162.js",
    "revision": "4eb0fd792bb45d191395f2af55b147bf"
  },
  {
    "url": "assets/js/55.d5463943.js",
    "revision": "e0091c38cb08661398a735fb641e7492"
  },
  {
    "url": "assets/js/56.c6aa1231.js",
    "revision": "83dee4347a52c97eb865c245df7ee88b"
  },
  {
    "url": "assets/js/57.8c8235e3.js",
    "revision": "35bd61ebae811e0dfb6478cb5498d510"
  },
  {
    "url": "assets/js/58.dcef2406.js",
    "revision": "272676fd1d66433964e27449d25afcb0"
  },
  {
    "url": "assets/js/59.9e1188b8.js",
    "revision": "e717bb52cc9fc03a9396b5361d315102"
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
    "url": "assets/js/62.70efa947.js",
    "revision": "4ecf5b87a2d969e6ac74baa70c38b5c4"
  },
  {
    "url": "assets/js/63.dba7d7e7.js",
    "revision": "a87c10ad26427e23d32e9d9a594bd398"
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
    "url": "assets/js/68.c83095ef.js",
    "revision": "d3ee7b3979befd7562a34b58f4b00786"
  },
  {
    "url": "assets/js/69.ec803900.js",
    "revision": "50195a8f92a76f842d292d5089827145"
  },
  {
    "url": "assets/js/70.24479a1c.js",
    "revision": "4218e4d9f6bedcc3cc70bc687e1b4ffe"
  },
  {
    "url": "assets/js/71.e2222d09.js",
    "revision": "433617e9eb39fe3e43599c5d3f61703f"
  },
  {
    "url": "assets/js/72.e1e015c9.js",
    "revision": "a7cde8fab973d06e2eedb3956d270969"
  },
  {
    "url": "assets/js/73.8289c8c3.js",
    "revision": "e405e73e82d94ff438cea0b369cd3c81"
  },
  {
    "url": "assets/js/74.c37ec7aa.js",
    "revision": "00c86e17b2d3a5f98637965c8bcacd82"
  },
  {
    "url": "assets/js/75.c96ef638.js",
    "revision": "8497c49a297abd21f929a43199391ca1"
  },
  {
    "url": "assets/js/76.9a367ddb.js",
    "revision": "787168b66842673c52e40e82c46c9d1f"
  },
  {
    "url": "assets/js/77.3a630d44.js",
    "revision": "e9151b09598274f07401543b375070ef"
  },
  {
    "url": "assets/js/78.a61856dc.js",
    "revision": "8637726e81427591c84ccaeb33f68b10"
  },
  {
    "url": "assets/js/79.47b127d2.js",
    "revision": "9d48c2c9d6dda0ab30548e7cd57e502b"
  },
  {
    "url": "assets/js/8.6a171040.js",
    "revision": "89c17167df6891768b27a5e6e5816906"
  },
  {
    "url": "assets/js/80.7e0c910d.js",
    "revision": "af08640fcf3e7f4d0c3c45a9d71a7e9d"
  },
  {
    "url": "assets/js/81.903769a0.js",
    "revision": "e154c85cc25930bd13cd0819c6d896df"
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
    "url": "assets/js/85.e5bf413f.js",
    "revision": "bfa00269e8a5b47bc19b2f3d3e9e8052"
  },
  {
    "url": "assets/js/86.c9c14595.js",
    "revision": "5db4bf27e13fe809dc6b6bd2315a0f30"
  },
  {
    "url": "assets/js/87.f4045918.js",
    "revision": "71f1c76f93d89a5bf14173d2e13e2968"
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
    "url": "assets/js/91.65bce49a.js",
    "revision": "6b54368fc5ac12edf0b5092984c8b591"
  },
  {
    "url": "assets/js/92.a36b192d.js",
    "revision": "8e7bdef42443126d05a242b93df2aeec"
  },
  {
    "url": "assets/js/93.3e32ef07.js",
    "revision": "8ddbf5e76f275c2487033a5fe1548373"
  },
  {
    "url": "assets/js/94.6ebe8049.js",
    "revision": "48e497ec7b0436aef5c7f0be7868d9e0"
  },
  {
    "url": "assets/js/95.bd0a256e.js",
    "revision": "3b858b67b9ec17a4f75a7f418f60666e"
  },
  {
    "url": "assets/js/96.edbd4112.js",
    "revision": "b38fb4aa941dfe46c914d3742be2c9aa"
  },
  {
    "url": "assets/js/97.00b1dda1.js",
    "revision": "4593a52a3eb0eaabcfc386d16a8740b6"
  },
  {
    "url": "assets/js/98.96df756c.js",
    "revision": "f5b8275537dbfd23d3f6fd7d1df36cc2"
  },
  {
    "url": "assets/js/99.d0d27f73.js",
    "revision": "9ef2a338da66278c63085d2341585880"
  },
  {
    "url": "assets/js/app.cb6b9db0.js",
    "revision": "b84647ff7dac1f8f5e567381b1c1de9e"
  },
  {
    "url": "assets/js/vendors~docsearch.2ee21832.js",
    "revision": "8a8ea991a257edf4d1448a27c1dcdf0d"
  },
  {
    "url": "index.html",
    "revision": "92413c0449837db8804c04e0e24f8c23"
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
