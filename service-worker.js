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
    "revision": "be23708eb13b2687c8a39c0fe27770e4"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "5f6c4c14c280621e1dee2dfd93c183a3"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "2e362ebddf0c0e3f57a85532a1e662d0"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "c1bfc3b00e256ca5501baba18ed595ce"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "3a5f5dfef7921559a80a5301449de961"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "a0a22ce0d0f2fb91d31465a6a88b9bb2"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "158ceb22603027b86ca66b1abdfe505f"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "b270d53670d53d93cee3ed226c618950"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "e9ac4cdff10b3639d4c3383d7471471a"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "acde4a43a7f2a05dde56e3149f53b175"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "e1d7b9154a19ab5755c7db91bb536c53"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "c4a1328b2223dc8c6be0fce8de237416"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "f1e9b5502b344952c262199470df1571"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "e80dc694c4ca3b68b2eb160925594620"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "c215dfb0e1e2ffc1350c8420d65a2564"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "3dc45cb834660f9a291e0c9ff8d5ffc4"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "089b0afbe204b40111975342236cd19d"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "f473be47d136286daadd439cc986702a"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "c5ae2e7948ce867591cc1fef2328a60b"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "4443ffb174854ddfd727848b0668a9b0"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "c39e585000ea32bba97338dae8fd27dc"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "1a94e5df9d1fec2a644dc438546d3359"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "7b1418d10028d9e2586884c1f15d1edf"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "8912c2c4ec8bb59995088a43feabcdf1"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "3616d9b683dfc7879ce644d2f62d88f4"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "075998df0b168a81d70ab2ff6a7f7545"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "9a52cf7c7402d4df74a69533162aa650"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "6305783a13bd882b208bf7c2e2e5c3db"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "f183db6a257e64b5e7c9ec2674afc566"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "115f446a17f019380a9da9b314be60fb"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "02622656007b47042d94394030fa8b9a"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "b013cb709e0418ba10dcde25b31d45d7"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "ea58d19eba3b278ced05f5b6e0bdd5e6"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "bd4e5ed7436618a7dd40044483a593aa"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "dee21bfe45a1db1f2bbfc3aa0efcc0e3"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "2384ee4163e6f9bae6fce40559ea73f3"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "7482e0b3e77e184478764d2a0f1b76a8"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "5ab977ba55c7cfedafdf986ecc9e0cef"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "f447a00b387ab487d3199dce3c66f8cf"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "59304dca29da7dc21004f2f69a374683"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "ae7d1d636b05d8bdbad11f4d07e68414"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "8850ba01c0705d34febc90cdaa04ae18"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "fe4bb72e74b3d0ed371690cba01c1209"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "86855dc15263117bcb0a777be5b95360"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "680568addef9a56d1f469aa6bd0d4866"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "8c05e374b0fcaad89049f345dd6634c0"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "5cd48ff2a5ac9c6bd13b06848756c4dc"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "254d5206b554f35b59d49a9812ac6919"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "d6c7ddf9eda1a59a4e3eb6eddd482aa9"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "7af790efa663604b2f91dca7076ea442"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "285445fdfabcc08d7d0be2e349fe6854"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "c9e3dee5287d9cc4b248340449cf7e39"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "4012cc28a35bc394eb38f64ba2b681cb"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "46e077cbe21f5b6864ca322f4a48e012"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "c5edba17469263a37083c5af9bf04b13"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "d3b53ac6de7f8f6e56635b2255ffce59"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "fe66298e66bd7af97dbc8cc30ed43de3"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "b7c24caf3403d8319ecc913c8a366274"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "988c0d0deb3cfd60510408776da9ac06"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "c912e216f16d58663e8c08a9a5267ce5"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "e964f905dee6bf6c7beda67e60fa8dab"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "47774d62c647a19f46f1970455abf3da"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "e62d491052cd62c4cd6df235111d0339"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "a770231484f0822163f2da61c00738f6"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "7acb303f79fc35aee37cde7183efe43b"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "811c09b35dc8fab32c35cd37ef832b8c"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "2d74ffd6df0a62df8dec03dbd2177616"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "cd56937f0e3ed80581d8fb151665388d"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "115ffc3535c0bec837e2c0a38b3e1b15"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "3fc4c78492dc97588db96f6f8aa38940"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "22d9240181f56f4e6266bd5ece9bcaf2"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "1b0535b8cf1cf8abf94015374ad38642"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "a8382e9c1ed776459825aafef82db148"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "a4f4af5aa983e25e6118428501ad908b"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "9f8535ebffea96605771a995be14dd21"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "07e6ac2ff84bc49670cbc7ad325bdfa7"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "83b140506ab6b6ca488d9ea744a00b71"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "b916cb1a962fcaaca6337857b183f074"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "700a46c40d2d0a607de4839d031b9f2f"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "7620bba96a1cadcc80846d126a5cd5b9"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "ef24157eb9383ffabce0126d28381b53"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "78229344b08281e343f8d06a81e4861c"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "3ea0716049d594472a7ed157db799fb2"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "7ac6fb81189e29b53b85734f6c5ea2f0"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "328f9ae3be2a6ff79ed9b2f27ac8aa6d"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "00da323a83b8510b642d750dd6fff4b4"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "787793ed108852c1ee29d7f053749c47"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "cd108d0ebea44f58b994e7ecb9b5d8f2"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "f9c9b0a4c3ac71c6f092135858c30112"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "2e99cd497b2c7ac6b37e0cc5fe9a8f35"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "4a88200004bea0264fbe6f773a0c99b4"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "87a76e90c75cf3bd3ee75e5dd22805d5"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "25842ed20fc7dce3d88eaf3f328f8d82"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "90dfb4ec349d01aa93ef702db3ecd134"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "4b112178e924b46cd22f4dcf635a3a93"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "0ed3be612e272938c64e33c2efedc854"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "f821b5143604e8532edfb047f0ee5d00"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "f39f5f5722c9ccd606e2e156d6d3de6e"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "17b2f765fc0caa61ea04d1fe609a1df3"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "a0502ab9b79bd8f37b781d18b9220d5d"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "6b1b3575ea42678ca610a71d0d912eab"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "6d361296731bc667e34c4c0aec80230b"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "08debfbe2f20789ccafc4bffb5a66ca9"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "d733f4e5ae3198a9b5af4fbff2fc8071"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "e49864349b5764500c9a3d476434d5fe"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "9c829531eb184e7011492a9ad2690d8f"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "2ad511944f21a7ac6fb634f6d524ba9a"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "286cff3049e3296ea8255835736dd4d5"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "9fef3d2f832cfe71ae5069e99bc06d98"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "d3199bc2f2a243ba26f672833c65198f"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "82525367444921113d7ad18760efef8a"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "d681ea54494c4dd5ee4e113de9cf53c3"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "45b7eec10e62a8e3322f3a816a87560a"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "d724ca15fd12ae7110e59b22c939ef14"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "4de4df7aa7fdf412cf28bfeb5a90a319"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "e101fc38410f42555639b30cd65212fe"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "9e8a28ca2686a86cab3eddcae018991a"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "8e6809c9983fee0c5e46fffe3e819024"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "405df79f398ddf9bf86785e980c9ff5b"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "7c92c8dde7f6c42739da601d7fc85969"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "9c8f84c817dbbdb630bfef5e7ce8dbf9"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "a814e7b975e6970e37d69660e1a064f6"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "4699f3c8d6eaafbc3492476331cc9a26"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "628c76da61c85aa538147c63a7e9af7e"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "aba347820e1c672633e4274683d11a1b"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "058ae452b1f117f8a227e370c5f23fb5"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "02ae9fd28b8c99dfbe35d2d645032ac2"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "51e9359e1535202dd6bab60e45f20c23"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "58ae37fa7a84809a4a479574cf0d909c"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "a162f5ff6e4c0964395c9363f681a6c7"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "c91562ba31e31465592921a072715373"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "2ae677b899885c9f43ced4739844e498"
  },
  {
    "url": "404.html",
    "revision": "17205ad5c71edb053e9c3ea41a9d233f"
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
    "url": "assets/js/1.4056efff.js",
    "revision": "33722299b304e902e55d3dcac724e8df"
  },
  {
    "url": "assets/js/10.eb2f6961.js",
    "revision": "eba6d9d8a445ef36606ba1bb322f5a67"
  },
  {
    "url": "assets/js/100.0f7fde15.js",
    "revision": "5b793683a57dd34d3ed48655cc11de0f"
  },
  {
    "url": "assets/js/101.a03bfabe.js",
    "revision": "900113ab22bf2a5f3f79da23d973efd3"
  },
  {
    "url": "assets/js/102.963fc180.js",
    "revision": "8eddd2046cc8aff06c2e7249977f2843"
  },
  {
    "url": "assets/js/103.d214bba7.js",
    "revision": "67d3aba37537c3e323558377fa7a557c"
  },
  {
    "url": "assets/js/104.4d0abd44.js",
    "revision": "3a274259d655ec34b32b8e626a418c2e"
  },
  {
    "url": "assets/js/105.b854e861.js",
    "revision": "7e2d522a8d32f5b91adf1ef05c482543"
  },
  {
    "url": "assets/js/106.fc724df9.js",
    "revision": "1e86f97baf8b043c5204ac3ce0582f03"
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
    "url": "assets/js/109.2ea56440.js",
    "revision": "ed7ad9bb7a59591a41f8db6afa947701"
  },
  {
    "url": "assets/js/11.c97e0dcc.js",
    "revision": "ac35b12e53945ba93450e0704ee6143a"
  },
  {
    "url": "assets/js/110.48fbf2db.js",
    "revision": "6a6c2e431b13cfd1b82f1ee136a36dbb"
  },
  {
    "url": "assets/js/111.ea7eec90.js",
    "revision": "6cb8a89b7e49f8a86a44c33a2f77e639"
  },
  {
    "url": "assets/js/112.109f3478.js",
    "revision": "b54deb500397543fb2324cfd1d697dce"
  },
  {
    "url": "assets/js/113.8a6f5932.js",
    "revision": "6a9c106b1312bd1a067478c7e591a84f"
  },
  {
    "url": "assets/js/114.385ac2b7.js",
    "revision": "bb12dca7626f03744eff0e26f085f259"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.9bbb3b28.js",
    "revision": "42c2676e6f39abdd3bf87239670ac455"
  },
  {
    "url": "assets/js/117.627d754c.js",
    "revision": "63bb92fe7404909d8429bd96090cc0b7"
  },
  {
    "url": "assets/js/118.cf660569.js",
    "revision": "80bf1828886bdf29338baff45908edea"
  },
  {
    "url": "assets/js/119.56a1f255.js",
    "revision": "1308d52a837cac4d530502ccea43adcf"
  },
  {
    "url": "assets/js/12.fe53fdf2.js",
    "revision": "1a9d76d6f22659db769bdbb086794645"
  },
  {
    "url": "assets/js/120.8b892ec7.js",
    "revision": "6f81eb577e09f41b86fc372a734f4621"
  },
  {
    "url": "assets/js/121.cee7a446.js",
    "revision": "6a86cb4a91f8e20ee0542fabf4682b43"
  },
  {
    "url": "assets/js/122.1e4fb411.js",
    "revision": "9c63765ae625146ac6c4f0634f0e1d7b"
  },
  {
    "url": "assets/js/123.826d7212.js",
    "revision": "11308ea8f790a56ffc8e0ea5ac9e6041"
  },
  {
    "url": "assets/js/124.fd693dd0.js",
    "revision": "7409f74f094b1af860eb33cb6a87a52a"
  },
  {
    "url": "assets/js/125.5dc6c3bf.js",
    "revision": "1e248190d294f738c778c1b57985ba4d"
  },
  {
    "url": "assets/js/126.68c90ebf.js",
    "revision": "36d6eb1eece335462c404d6d7ecde28a"
  },
  {
    "url": "assets/js/127.5693129a.js",
    "revision": "b4be585ecd381f9fe592a6c4f979c924"
  },
  {
    "url": "assets/js/128.f1f5ef0e.js",
    "revision": "b6e82f8874f666080b1d828c3caa335e"
  },
  {
    "url": "assets/js/129.c58ef737.js",
    "revision": "ff3d446a811f7d665b5549a33e8f371b"
  },
  {
    "url": "assets/js/13.38d50f5e.js",
    "revision": "f91a2781d974afddb2fb004d1a672c52"
  },
  {
    "url": "assets/js/130.9cbf1aed.js",
    "revision": "b3fe9b904bd34761eb634633106d191c"
  },
  {
    "url": "assets/js/131.ac06e2fd.js",
    "revision": "75ce65c44c660d1027ed1059e974b41a"
  },
  {
    "url": "assets/js/132.00c0757c.js",
    "revision": "60afc6893c43a209be4363a1bcbc3824"
  },
  {
    "url": "assets/js/133.51aaba83.js",
    "revision": "aba3b4e3ceb59c315b9b7bda0007c915"
  },
  {
    "url": "assets/js/134.0eb849fb.js",
    "revision": "6523f1bfd2c303417f5df41d93bdb08d"
  },
  {
    "url": "assets/js/135.04fe5108.js",
    "revision": "8d443ef3cfd62172ee547de0a35e5fb0"
  },
  {
    "url": "assets/js/136.4199cc8e.js",
    "revision": "a30d9241378ac136a283df26e3cba2f2"
  },
  {
    "url": "assets/js/137.42872ceb.js",
    "revision": "6472a411b20fd9c352817cf7bc4afe8e"
  },
  {
    "url": "assets/js/138.9ea045d6.js",
    "revision": "77424e9231214a644821919163d94df4"
  },
  {
    "url": "assets/js/139.7390a368.js",
    "revision": "180cf038f6bf9f95c54b01d175d55ca6"
  },
  {
    "url": "assets/js/14.4440a463.js",
    "revision": "5e8c65d266b5e8592352ef465549248b"
  },
  {
    "url": "assets/js/140.215fdea3.js",
    "revision": "9aa376a42dac27c6aa48dd5be1987e52"
  },
  {
    "url": "assets/js/141.37449e56.js",
    "revision": "dc27cd1f73e9e47178d6690e817eb161"
  },
  {
    "url": "assets/js/142.34331c36.js",
    "revision": "ca0d8ed1be83562dc636addde1ec7718"
  },
  {
    "url": "assets/js/143.5fdff5ba.js",
    "revision": "df3f2d8123b877f6aba7e06739d3cea6"
  },
  {
    "url": "assets/js/144.0a329437.js",
    "revision": "a0f71ad559c121305969159f2228d704"
  },
  {
    "url": "assets/js/145.875838ae.js",
    "revision": "d70090a28d57fe3e24cd79cfcf13970f"
  },
  {
    "url": "assets/js/146.13b466cd.js",
    "revision": "2daddccf94591ba9e554774c038fb5dd"
  },
  {
    "url": "assets/js/147.ba6fa961.js",
    "revision": "5d70ce03ffcf697855381385bfe43585"
  },
  {
    "url": "assets/js/148.8b7efddf.js",
    "revision": "86853ce61be86395c1449b46c0c29b1c"
  },
  {
    "url": "assets/js/149.8576ff72.js",
    "revision": "64b965bbec87761b02468c0b8929ea98"
  },
  {
    "url": "assets/js/15.27a87aff.js",
    "revision": "09671c9b8df815d3c96f02f9eef86a2c"
  },
  {
    "url": "assets/js/150.d2848a85.js",
    "revision": "7af0a62464eebbb10343e720373613c3"
  },
  {
    "url": "assets/js/151.edc3ac15.js",
    "revision": "16f0e774042df6e52ec322d65c7d6dd2"
  },
  {
    "url": "assets/js/152.a6ae2bae.js",
    "revision": "9e45e1f271218f7d2f9cc6388b82c3fd"
  },
  {
    "url": "assets/js/153.df5b0554.js",
    "revision": "d816804647b99cbd39fc89d8f815d0af"
  },
  {
    "url": "assets/js/16.61a78ede.js",
    "revision": "45950ecf6dc476062f1b35d386623bef"
  },
  {
    "url": "assets/js/17.da33f480.js",
    "revision": "ebb74e1346cd5335dc7db92c4f4e37cd"
  },
  {
    "url": "assets/js/18.a196db93.js",
    "revision": "dd84ac330dadcdea694ac4b4d78cdea8"
  },
  {
    "url": "assets/js/19.ed168246.js",
    "revision": "876908e1ff2d9321b0e8490e14bceac8"
  },
  {
    "url": "assets/js/2.8098384e.js",
    "revision": "ba885000c49e6802d79a75b960980647"
  },
  {
    "url": "assets/js/20.e4af1034.js",
    "revision": "2f6ae7515f3527043c5e15f1ad0ed188"
  },
  {
    "url": "assets/js/21.50d04e75.js",
    "revision": "16c45d405e8dcab88236f0bc972e4a33"
  },
  {
    "url": "assets/js/22.509bb7c6.js",
    "revision": "2562063e0dea466576a53edf67fd172f"
  },
  {
    "url": "assets/js/23.6801ae92.js",
    "revision": "1c806219b652a0d72805407a98e9e43b"
  },
  {
    "url": "assets/js/24.c9724391.js",
    "revision": "29b8a035638fa17bf915c0fbf78adbd4"
  },
  {
    "url": "assets/js/25.525cbfdc.js",
    "revision": "a923296ed8b4e666c8e868b033540405"
  },
  {
    "url": "assets/js/26.a24244fd.js",
    "revision": "050a9eb5ae793729f552cf633315f49b"
  },
  {
    "url": "assets/js/27.d5987b68.js",
    "revision": "e8cac811469a070201168c7d42169b38"
  },
  {
    "url": "assets/js/28.fc8f1924.js",
    "revision": "57ad5d28362dc5e9f694331f90060495"
  },
  {
    "url": "assets/js/29.5e5d7ea2.js",
    "revision": "1e2e17ebd5ae690ba4e48376854cf436"
  },
  {
    "url": "assets/js/3.bd3b16a4.js",
    "revision": "3caa258015023020a1043d73accdc017"
  },
  {
    "url": "assets/js/30.27782adf.js",
    "revision": "d667bf231ec8197e009e6e8f09881916"
  },
  {
    "url": "assets/js/31.9cae3a13.js",
    "revision": "04cbf72ff274e9d1bfa8fc767f5b3aff"
  },
  {
    "url": "assets/js/32.ffe60ecb.js",
    "revision": "467bdd9017d2eb8fda398aaa96dd17ff"
  },
  {
    "url": "assets/js/33.21addbe0.js",
    "revision": "75bdd15d6994415be1cb428a03024137"
  },
  {
    "url": "assets/js/34.04ddb758.js",
    "revision": "b7416cb1ce44d6b32da48768966bc647"
  },
  {
    "url": "assets/js/35.586450c5.js",
    "revision": "2e09c8c8f2c9dfae25e4542b2b32dedd"
  },
  {
    "url": "assets/js/36.dc7480e1.js",
    "revision": "d40852407d13c6a15d457b2a9c36a6da"
  },
  {
    "url": "assets/js/37.8226eda4.js",
    "revision": "1ae3f1a6fa74c12caeebf50e54d1cc28"
  },
  {
    "url": "assets/js/38.68e5b40a.js",
    "revision": "0633aeaa81077b1dda98642d9656e933"
  },
  {
    "url": "assets/js/39.36dbfb95.js",
    "revision": "e39920981151713558cb47f9f63e3dd2"
  },
  {
    "url": "assets/js/4.e8ce6ab2.js",
    "revision": "8fa7a0c607e45d98e8058f09b0232273"
  },
  {
    "url": "assets/js/40.79df899a.js",
    "revision": "5b369344d674b873ccc63fe9f6962523"
  },
  {
    "url": "assets/js/41.532e59cd.js",
    "revision": "1676d08a76027be30c8674c1853e476d"
  },
  {
    "url": "assets/js/42.05bee952.js",
    "revision": "b40b525c9f71b50d96056a81fd37edeb"
  },
  {
    "url": "assets/js/43.a519875d.js",
    "revision": "5455520b4d6ff8314de4e81902a5bdf8"
  },
  {
    "url": "assets/js/44.73b54b24.js",
    "revision": "07399480e4d84be92cb437a853c82f4b"
  },
  {
    "url": "assets/js/45.508c87f6.js",
    "revision": "fb47072804fc39eeefd38061cfdb0644"
  },
  {
    "url": "assets/js/46.7ecfab93.js",
    "revision": "94e870f3fe84d8a1a83162790dc43504"
  },
  {
    "url": "assets/js/47.694295f9.js",
    "revision": "b630a36846cb82c0ad4a109f90e6cc5f"
  },
  {
    "url": "assets/js/48.7f7e101c.js",
    "revision": "c7ebcf84dbac395be4b23939e9777c8e"
  },
  {
    "url": "assets/js/49.b1e77a2d.js",
    "revision": "766c36c53353c19b3960bfb649ffea32"
  },
  {
    "url": "assets/js/5.ca72b97f.js",
    "revision": "6ffa07606cdeedea4a2e25724c20dcee"
  },
  {
    "url": "assets/js/50.5acb5ae4.js",
    "revision": "4cc623e260566b0dd76a9cb499d080fa"
  },
  {
    "url": "assets/js/51.aa37f2ad.js",
    "revision": "6c7a77c9ecdc62db201d134c102e4117"
  },
  {
    "url": "assets/js/52.24852ddc.js",
    "revision": "127b832b52aa1df085269b7c432e7321"
  },
  {
    "url": "assets/js/53.6e5ed1fe.js",
    "revision": "afd521f7473c8542a8587ac6dade27fe"
  },
  {
    "url": "assets/js/54.b45c87d9.js",
    "revision": "469d6ac5bd5be0003c416a0312313b95"
  },
  {
    "url": "assets/js/55.8f35393c.js",
    "revision": "4f90fddfae070539ca4b4bf02b58f6bd"
  },
  {
    "url": "assets/js/56.618d3565.js",
    "revision": "c923564c4f73461344921d2763ede2e6"
  },
  {
    "url": "assets/js/57.41184f9f.js",
    "revision": "27fcd61353857792635c67ce8b8cba97"
  },
  {
    "url": "assets/js/58.8da8c48c.js",
    "revision": "acc40eb2fb63f0b8fbfe956c8746ab26"
  },
  {
    "url": "assets/js/59.7bce3053.js",
    "revision": "b746f89d2d184d4b166580f34b073ead"
  },
  {
    "url": "assets/js/60.1483bc6f.js",
    "revision": "6d365b0fa5055b8aa5bf5c8f102dc26a"
  },
  {
    "url": "assets/js/61.9afa996d.js",
    "revision": "aceeed4ad782064460a613f33d93a3a1"
  },
  {
    "url": "assets/js/62.0c94c7a2.js",
    "revision": "a2fc2856611ab299df7c9a891dbe68f7"
  },
  {
    "url": "assets/js/63.0bbbd7f8.js",
    "revision": "ad21a963f30bbd69519c8b9abc705888"
  },
  {
    "url": "assets/js/64.3ef34e8b.js",
    "revision": "dae316893374087d029ff914c606dc8c"
  },
  {
    "url": "assets/js/65.5497d322.js",
    "revision": "8f88d4f85634f54806ad7d55ae91a20d"
  },
  {
    "url": "assets/js/66.fe30d506.js",
    "revision": "d5ea1a468daf841a7caa48f8a3cbcc85"
  },
  {
    "url": "assets/js/67.7136597a.js",
    "revision": "7b2551839229fea8555b7e7f84d25062"
  },
  {
    "url": "assets/js/68.e4ac16ca.js",
    "revision": "afad96c54877010f0c79f9451c2be2e3"
  },
  {
    "url": "assets/js/69.810c429a.js",
    "revision": "2fa82f044962877e1c55743d5a67b8da"
  },
  {
    "url": "assets/js/70.f60e5121.js",
    "revision": "eb14021454499cd9dfcecc973f32b422"
  },
  {
    "url": "assets/js/71.d56f5503.js",
    "revision": "43d252ac5f12b047240414c275b6f772"
  },
  {
    "url": "assets/js/72.4071bdff.js",
    "revision": "6fc66f8102e1078d7cea8499efc7b1ac"
  },
  {
    "url": "assets/js/73.75e57e10.js",
    "revision": "541687c34666fa3cf30bac0de517a101"
  },
  {
    "url": "assets/js/74.337586e4.js",
    "revision": "0c59ab144eca9a09d21008bf6cc450f6"
  },
  {
    "url": "assets/js/75.a71545b4.js",
    "revision": "32982e4e55651a1d303eca26d6305c56"
  },
  {
    "url": "assets/js/76.b29b890d.js",
    "revision": "ce50aa881af357db5fa73600db129f09"
  },
  {
    "url": "assets/js/77.78923793.js",
    "revision": "a43cb36fad49dc1384681acfb419e30b"
  },
  {
    "url": "assets/js/78.cd1b1b2e.js",
    "revision": "4057679bf89d711f581f58ecc7a79e5b"
  },
  {
    "url": "assets/js/79.bde1153f.js",
    "revision": "132a4be38c9d3293508f8c798bc824fe"
  },
  {
    "url": "assets/js/8.c9c1bfef.js",
    "revision": "b69e1d8ed9acec292e68bcaef96643b8"
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
    "url": "assets/js/82.fb0bb8e6.js",
    "revision": "21e7346ac9de7e63d2116cc6d1eb4101"
  },
  {
    "url": "assets/js/83.d6474035.js",
    "revision": "1e781340445217fe670520b179f5a759"
  },
  {
    "url": "assets/js/84.768fa0e4.js",
    "revision": "7ace6675da0a5b85b09af3cdc727902c"
  },
  {
    "url": "assets/js/85.31dfff11.js",
    "revision": "d9aa228edbea5f0898978d2917a8cbfe"
  },
  {
    "url": "assets/js/86.2d95c3df.js",
    "revision": "66ed826986de8b4b933065e3386def3b"
  },
  {
    "url": "assets/js/87.77c9cb4b.js",
    "revision": "1b3fecddbf93a4eb253bab074494a7d0"
  },
  {
    "url": "assets/js/88.95f0e698.js",
    "revision": "dea94a29bbbc5fc7860312b5ba07d579"
  },
  {
    "url": "assets/js/89.a1669496.js",
    "revision": "4f422455273c8b68ecb5b870d585dd01"
  },
  {
    "url": "assets/js/9.65f7d6a9.js",
    "revision": "5ff3fffe0dd1e407fba6c0bcc369a601"
  },
  {
    "url": "assets/js/90.5595eb71.js",
    "revision": "3184f3c1f629e519023fb636d4678cd8"
  },
  {
    "url": "assets/js/91.05c255f0.js",
    "revision": "c43d6390c79a4806b8ea35a45a90b417"
  },
  {
    "url": "assets/js/92.b2cac3c8.js",
    "revision": "350791257f0e983a5fbddc7d46ca0fb9"
  },
  {
    "url": "assets/js/93.89610b81.js",
    "revision": "ad90c1d228872619134442c89b2160bc"
  },
  {
    "url": "assets/js/94.ff02e0f0.js",
    "revision": "2c7b825d4a86951f39b3188ff9f78a7f"
  },
  {
    "url": "assets/js/95.c66da3ea.js",
    "revision": "1598891a42d006d195482688f8862b0b"
  },
  {
    "url": "assets/js/96.a5eec066.js",
    "revision": "56b866f837db1dd4fa5ab026b7b97569"
  },
  {
    "url": "assets/js/97.643601db.js",
    "revision": "e80d6edd9390e0bc3db67342994646d1"
  },
  {
    "url": "assets/js/98.77bb2fee.js",
    "revision": "51c1a185dfeb352c42b1d8aa2da8d908"
  },
  {
    "url": "assets/js/99.1655d227.js",
    "revision": "33b6abcf1ddc07405d4916400101b2bf"
  },
  {
    "url": "assets/js/app.eab2456e.js",
    "revision": "508b9152fe3c4a32602fc6f9febe62ea"
  },
  {
    "url": "assets/js/vendors~docsearch.397216cb.js",
    "revision": "495e00008f99b657d3066b5f1a992f31"
  },
  {
    "url": "index.html",
    "revision": "09294bb6f42123f5742bd0583c84b746"
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
