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
    "revision": "75c92b19665a105b75e1165bac44532a"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "8772acd1e5429059f7e0c94184e8b4fb"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "6585237e3fdcd25be38d14526f2e3de2"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "f9a2ce4b283f2cc2cfa52c33ca5f2f60"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "0ea264ed823376b5749ba8cdcb431456"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "c3ae56c9c1eb8b7920d579869c2fd307"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "f340826b72212058ba46a6e824844026"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "cc5e0c676954d7ecddd7d4267eda0246"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "f1704fd105b3b586719639ff8933cacf"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "b9d1c39d4034ae96517ee91c185bf396"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "81466792e0381d38e5dbc27d3d59d96e"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "bee42d7a0903c41ff5fe618a86f7404f"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "c483b5e2a120c6471b18d07273511cbf"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "38072a05d4b5e6c5a44932226b47fd89"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "01dd0bedbc8542eb628f3cba4265bd78"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "5d1b2270ab2fd4c6f6233e94ca574e8c"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "eea611ebd814fac6f02e9ff497ad5667"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "0b829ad54dfa3fe35f3686628a7f4f45"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "15eca8482d3597f34801ceb742a25270"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "e1bc593fea1a4e1f522d4ed8eb679be2"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "d3160f867cb1c58d4e04215ce8740b1d"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "7b8cc76acdebb4df31b0dbfed00a85a2"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "08c5efbe9c4cf9aed5d1367981c62238"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "6f86991e7a133ad0a1b2dbc3b9af09ca"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "6917ac2bbaf86dceea85fc199fe16599"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "8662e15c19bd4e7d544bf1ad9285c60d"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "e7d840def92a27749e8ae3bf76ba9088"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "70c14bf3a6396a48b85856878711fbbb"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "9f931042cc3ab97f10c0e6d505eec14f"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "8f97bdaec3b8642d225622c71237ac3d"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "91908012a366bf99043caefa904be105"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "e1111a2d923c6ab1e59713110789ddd4"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "5266939bc0b952364c2046e41f7dd01e"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "f76a42277fbbd594b8e5eafe17217aca"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "6e7ab0cc2efbfc2cbe6c4d3348770b9f"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "cecf6855217da9e694ceb1b8bf28cf12"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "e0de66ff72213f849ccd88fbfd94fb4b"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "fcff7f671f3768c2ae6ae2c83fb970e6"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "e223bf3295e5c77543a7901baa937ac8"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "dca17001c7c456ffe8bb1b18b97ef84e"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "d6e4adfa3eaf43c4818971a3b0aba3e1"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "790db954cc1ca50e5b8b033adc7ea189"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "6885881c96d204e546c639ba25f71a0b"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "58c1c352474c4db9f6efc2b9e866bddb"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "cc0883be3f3359d0ad0d78bdcc3145b5"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "09d68996ef21f24e2c09c532031a47a0"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "8eb5135fc088bd3ac7aff4eb913dcddf"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "9cb0367a8688bd49144cf2085c3d15e3"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "4cfb3f2569de796e6e7986565db08bdd"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "2cc89249cf44dc89fb014163abb6474c"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "069d89f26e654368fe60b85357e50f4d"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "b80681b4fc1d7e1d4d8dcff380178977"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "f5947da1c52480a2513d363432089bbb"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "1661e23dbb79689469c0265d799eca4f"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "dd470b98e382752aea80ae0c0fcf1e06"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "dd1d802e068c11cdc2c6f7ef02ee17d3"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "c5a8b3a52022fb90c1dd61c690b9bb8f"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "aca5b5fb29f4b16a2102771f9ce1841b"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "be35b78ac7e93b71f81cb14a4ff9ebc4"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "e2b194f35e2a74f312f4f2787f110cd6"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "4b99d9631d46ea698957452316b58828"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "171ae75e24ef056794aa8f08aeca83d5"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "018398ddcf1dab7794c54dbad22938a4"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "ab476958526df22bf7b1aba6c3a1edbf"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "c002f004e96d903630e4dc15029056e2"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "90db6660de61b13846339a9359e6152d"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "177441c8d5b4bfad70a6dd6863d89fd0"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "a43b6e5ac5d4692690412590c04fa912"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "5d8d39f51ab2e60b2506c0b94234eb58"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "898dbb2d6979b85e37ab0393745adbdd"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "881863833e86eb8cd99775615ca7d2cd"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "3850b79af74be4c3eb65205ff685a16c"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "d6b48cdf524f74749c2a8877fb62eab8"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "72745ed4afc67ca339ea8786f0afe881"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "9a64afb5bb0027eb01c61f900aae7802"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "9ce0c5b15063e71e34b14a39f22ead58"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "da5267b485c81e3fd0111515f1108c20"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "17a7640652e245a3440da2a2d8e1118e"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "816d7b2be1a4330a61cb0298c6b745cc"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "d09806ee9a05360f012343af10b89830"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "1c3322dd77615b76d72f001f6ef412fe"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "2b288f749cbbb69d64ee8ccd1ea0bc48"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "eb8e46901ee5e4da5b77051116196934"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "5ec4c12126d9b25b548e41aac2672649"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "9712846de98ce08e31f4317ab56f7d59"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "4908e555282d489a79c7a8d48e8ab3f2"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "15001263ab54b350f17e8996b1f661f4"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "0aaf43c90499b0329572d629760e4c77"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "d3aba3da4607702e47aa95dd21eaf846"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "50f3a656b2d0bfb4dabb4820c40336e2"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "6b0dff0c7034d4a99d7cba9c4067b90b"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "325c8cd75b8a24a31afb7edc457bbea7"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "0e264b6116e78478a0946247e63d93b3"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "632aa45b2a15759932a7eb792e93d9a6"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "3aebaf809de796bff27943922d75f002"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "c76db1ca7f32eb9a471e83bf309fc0fb"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "6557d92f6ea2599ba7cc8812d9bf7321"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "b0ca3b3d9af15b31c3c96fc2b09565c3"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "d648a4fcadd5f81d506b6eee5ebe2611"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "a0ea052da0f9c00f946e25c72fb54970"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "049adcdbfb9718474ca2f3a4cd2e1f55"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "a2fcc7aa4da09664248f9ef5c462120b"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "d574c4af339ccc5e0161d3775cfddcff"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "969d64cf2538094e108cb067175559b2"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "1ede38885dfe83331cc27c6f16e1a9fe"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "e37e947d63a46aa24d7ba0f838705545"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "0d3c5d416d7361ae55163d4fc9c840d3"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "1ec4e571ee1741f9535e8aa4aee7c6da"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "fdaf04203965bc839867d50a8d9a2426"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "047468d53196a19917226ec5029ad80b"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "248d3ec5b0c0974303294c883cdb2c51"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "564eb5588b8cecb2b47c5621030ed841"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "0ecd24b6b6a2c6da145f831fd2cb1ba6"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "e38ea28dfa20bda65c1cbf837bf94d16"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "95f8f90571bb8e6368c14037b4e6cf82"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "aa392dbf4b37cf2b26f018afe421ccc6"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "bd258ecdeee5a012227d17ef70205ee2"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "47ce5f73c279e5c5e60f32aceb96f5ca"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "51c38a3912ffa9fb08ef120c650eec95"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "dcb39b4343032d27728d09808e76d1e7"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "c79812ab1ea45f3ff307763affaa5fff"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "661537101edc0067e01f81557bd81bf3"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "9ae878156ac0f1904392ae15bcbe45c7"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "9f0a6849120fc286169f84feea5163ea"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "4756719fac0dd09f892c923fde59bb4b"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "c1f24695eb4483ae09f6b932a472a1de"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "9c89c63d9b752a2e72162eb2317b99fa"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "54d9e0f8b59319f6a87a4e65c523e25a"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "c0329253bd21c27d589394bc81eb6b35"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "a969952c452e9838a7f5466f8d06caf0"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "bf37ba10dc075bdd4492fd8fa2d06143"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "e5d8b675a4bc662165e4f08323f5c6b7"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "5c5fbae605499157ade3b47c5adbc298"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "43b404940df7519c744aa4e74db6910e"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "bbcf0cfa171641bd82321c4d6d76ef4f"
  },
  {
    "url": "404.html",
    "revision": "f9453e659a58deefdfc6aaad3fc094b3"
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
    "url": "assets/js/1.28de5aff.js",
    "revision": "83072db1b16518e205bf7d6203878251"
  },
  {
    "url": "assets/js/10.c61c5809.js",
    "revision": "2188377b499c8771a4b9afd5acfa30cb"
  },
  {
    "url": "assets/js/100.0e994116.js",
    "revision": "9deeb1a7e680726f99799a6f0d8091ef"
  },
  {
    "url": "assets/js/101.e724d287.js",
    "revision": "aee041edbe70e6405d9a49f4a8221e19"
  },
  {
    "url": "assets/js/102.fa3eb99f.js",
    "revision": "b40167b6c20e20f410a282622b797f08"
  },
  {
    "url": "assets/js/103.f21e7da6.js",
    "revision": "37384d2c0083e24dcdd26e712d920685"
  },
  {
    "url": "assets/js/104.0d226e5b.js",
    "revision": "67ae0cd1a9b5ed64754e487b33ba1ba0"
  },
  {
    "url": "assets/js/105.c4dc4098.js",
    "revision": "a8b864197488d14f5a2c41e05c70dd4b"
  },
  {
    "url": "assets/js/106.4f5faa26.js",
    "revision": "5955d77b7722a3b03df2ea9505a4d2b0"
  },
  {
    "url": "assets/js/107.5ee0c9ad.js",
    "revision": "4e3ad2068abae6181e3806fa42fe9c3c"
  },
  {
    "url": "assets/js/108.12e6e0bc.js",
    "revision": "244877d57ed0e6f933d1d58b1c8b68d3"
  },
  {
    "url": "assets/js/109.286d616c.js",
    "revision": "125b6e99ba7b0f3d28edd51ca32d83c9"
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
    "url": "assets/js/112.816dd149.js",
    "revision": "797d4ae9d4815e5ecda490f432929045"
  },
  {
    "url": "assets/js/113.ed831c4d.js",
    "revision": "8e60e5ebc82003ab9adefeb403aca2db"
  },
  {
    "url": "assets/js/114.04f722ae.js",
    "revision": "b7bb550f2b854291a6ea01d3a0879c74"
  },
  {
    "url": "assets/js/115.73ab3a9e.js",
    "revision": "a4a7853bd2a4336de564c5301359a33b"
  },
  {
    "url": "assets/js/116.ce4136b7.js",
    "revision": "adb6f2db7c5e7b0afe5f36707c8017c2"
  },
  {
    "url": "assets/js/117.1fd9d503.js",
    "revision": "666847e439ac728ca59a4f38ad88ff2e"
  },
  {
    "url": "assets/js/118.eae49c7e.js",
    "revision": "1fccff1b4eef434c428babcf726cdcd1"
  },
  {
    "url": "assets/js/119.db7512dc.js",
    "revision": "880900d3e159eabe37be8c2f3049188f"
  },
  {
    "url": "assets/js/12.67729352.js",
    "revision": "f2b6ecbdbc8c1b743bed6809876bd3ff"
  },
  {
    "url": "assets/js/120.666cf148.js",
    "revision": "499ab89490b2ea7befe6224323a230a3"
  },
  {
    "url": "assets/js/121.b0615063.js",
    "revision": "fa1fd03371cfacfcc346a6e9f932a0c9"
  },
  {
    "url": "assets/js/122.bb1bdc90.js",
    "revision": "f47a75fb3de42960173c78bcb75eb237"
  },
  {
    "url": "assets/js/123.f7bedabf.js",
    "revision": "a9c0c3bc46c172b1d4ea40696c0a6262"
  },
  {
    "url": "assets/js/124.85d7cd9b.js",
    "revision": "45bcb40cb1e28435a90c6cb4de0d2c0f"
  },
  {
    "url": "assets/js/125.b98a053a.js",
    "revision": "c8f89372cb39722b98ce8c77b1befee4"
  },
  {
    "url": "assets/js/126.38669252.js",
    "revision": "6c7d5f36d602c102a93b336c34fbf799"
  },
  {
    "url": "assets/js/127.725c22b4.js",
    "revision": "b77405a71183991df5bcfcd5eee764b4"
  },
  {
    "url": "assets/js/128.f6e6ea62.js",
    "revision": "b0d0dbc859f19f1490bf4bac79872b57"
  },
  {
    "url": "assets/js/129.a853181f.js",
    "revision": "385912845cbaadf6eb29868ae65b1d00"
  },
  {
    "url": "assets/js/13.16a9a316.js",
    "revision": "4238497e5f8c9c9bae1a46b91846d4af"
  },
  {
    "url": "assets/js/130.9701f89a.js",
    "revision": "94f5d6cd332dd5ee85ac2d33c821fc1e"
  },
  {
    "url": "assets/js/131.65ddd209.js",
    "revision": "b8686f82f404e8e335eb8f06c9afa0fb"
  },
  {
    "url": "assets/js/132.bcd67e76.js",
    "revision": "57c6208607c6f68eed0fb511b3d00b56"
  },
  {
    "url": "assets/js/133.79547ba0.js",
    "revision": "7474af312851927d79b45f2a7ed5da66"
  },
  {
    "url": "assets/js/134.6e523c43.js",
    "revision": "7789bd5b5c70510cb2a3508de22fde01"
  },
  {
    "url": "assets/js/135.02b45d55.js",
    "revision": "4064a13ffbcdc1099b4635a52b4f36cd"
  },
  {
    "url": "assets/js/136.8c63110e.js",
    "revision": "22a7b4a8f0e11e5e4357db526f444d5b"
  },
  {
    "url": "assets/js/137.6c923bdb.js",
    "revision": "8d407a8f492529d681f248b8d6c758fd"
  },
  {
    "url": "assets/js/138.b7113d4b.js",
    "revision": "8e9d2f0af5492bf5c46e25f103b29c0c"
  },
  {
    "url": "assets/js/139.ec21506f.js",
    "revision": "89c2fbb3a4c7e4722152708b34f76fbb"
  },
  {
    "url": "assets/js/14.72eb074b.js",
    "revision": "02d67653719c7c47f3ad72a606d9e6b2"
  },
  {
    "url": "assets/js/140.239cfa40.js",
    "revision": "8712491ab0bdb648453cf14df1552551"
  },
  {
    "url": "assets/js/141.3dd7e6af.js",
    "revision": "59c9e2c47c7da2ab6edd98aa5eed5c46"
  },
  {
    "url": "assets/js/142.ef9f4cc4.js",
    "revision": "c674b117dc7b2ce8b75cb1176997354f"
  },
  {
    "url": "assets/js/143.1bbe3bfd.js",
    "revision": "46a7754f784a193853de6aa9c8510665"
  },
  {
    "url": "assets/js/144.434f46bf.js",
    "revision": "4920e5235064d3bcfc5af2c38b0d2f12"
  },
  {
    "url": "assets/js/145.3312433b.js",
    "revision": "52c5c7c4aaa91bcc9b19b37d92c7ea3c"
  },
  {
    "url": "assets/js/146.7ec352d4.js",
    "revision": "b1aff4812a137ccdff11c9dd6fcbb3f5"
  },
  {
    "url": "assets/js/147.8b8f97e6.js",
    "revision": "44c7f17b894650157edf135a563a6a1c"
  },
  {
    "url": "assets/js/148.6de374da.js",
    "revision": "2f2a966891e74310252f955541765004"
  },
  {
    "url": "assets/js/149.c9e3c6ce.js",
    "revision": "35e725847a76a8eca5d3735cb52d4605"
  },
  {
    "url": "assets/js/15.ca4d1668.js",
    "revision": "d0820065d0c28cf88aa5b84b68407d7a"
  },
  {
    "url": "assets/js/150.c0e9ebb6.js",
    "revision": "3e7f5d6861c40b317ba8dd00c05d7ab3"
  },
  {
    "url": "assets/js/151.ad2b302b.js",
    "revision": "7319cd712f0d702a28c5b3bd89ece256"
  },
  {
    "url": "assets/js/152.67e7ded9.js",
    "revision": "032356057ff84ba93f3dbd48178245b0"
  },
  {
    "url": "assets/js/153.565888bb.js",
    "revision": "755bbf92e033a5659fc123b02aca52a0"
  },
  {
    "url": "assets/js/154.ad95d35f.js",
    "revision": "ad49173e9f617b708ac51f5277d6118c"
  },
  {
    "url": "assets/js/155.73f3a071.js",
    "revision": "16c672ea71f9c799dee4b16d845763a5"
  },
  {
    "url": "assets/js/156.44cc932e.js",
    "revision": "2f1ce767a853d80744849a80f36c7f48"
  },
  {
    "url": "assets/js/16.c7abd54b.js",
    "revision": "84cb80574f6511fdc9f86bc833b57a6e"
  },
  {
    "url": "assets/js/17.9aefd346.js",
    "revision": "fd1075a76fb7e816fb767b20131817da"
  },
  {
    "url": "assets/js/18.18c24fa9.js",
    "revision": "ed7464384ceb9026d3e087cb1fed1aae"
  },
  {
    "url": "assets/js/19.22a73238.js",
    "revision": "d7abac89ed0621d67aca06a63d71357f"
  },
  {
    "url": "assets/js/2.897ee507.js",
    "revision": "226d0c0570100cfec210b5edcf99c79d"
  },
  {
    "url": "assets/js/20.b6e11af4.js",
    "revision": "5f08bd71ba7e32d271924c5db397e806"
  },
  {
    "url": "assets/js/21.7d988554.js",
    "revision": "e124bba2ba9f8bc3f7b116d3cee2ef99"
  },
  {
    "url": "assets/js/22.2ce13577.js",
    "revision": "2a23a4de36f444d663a9ee5bf5007660"
  },
  {
    "url": "assets/js/23.70427251.js",
    "revision": "04e90f4f39eced4f90ec349effdcfb48"
  },
  {
    "url": "assets/js/24.8579b216.js",
    "revision": "e45ee3fad48a51c6733365ed5fa06269"
  },
  {
    "url": "assets/js/25.f31bbc2d.js",
    "revision": "189c32286edf7eeefb8450ec1d15b380"
  },
  {
    "url": "assets/js/26.17f25ff0.js",
    "revision": "57033804e0801d797b4b1557b32c15a9"
  },
  {
    "url": "assets/js/27.104a6df3.js",
    "revision": "af44d97c175f49d52e95e07266de1e52"
  },
  {
    "url": "assets/js/28.b1119bec.js",
    "revision": "33084f9ea079b67b099a81e3ce1b678e"
  },
  {
    "url": "assets/js/29.82969fb9.js",
    "revision": "84796effa5a14b5257fc491e62d272f9"
  },
  {
    "url": "assets/js/3.9bc1bbdb.js",
    "revision": "6311c820a5772ab701c2e2b15678cbc6"
  },
  {
    "url": "assets/js/30.99259773.js",
    "revision": "594e91cde26411a2a638c9c25b4f0b46"
  },
  {
    "url": "assets/js/31.bef3fcfa.js",
    "revision": "38942c4e541d8a9b08bdc4264512de6f"
  },
  {
    "url": "assets/js/32.7496deb6.js",
    "revision": "5996b57e61d1f7e656908ea52fa62774"
  },
  {
    "url": "assets/js/33.8fa7d8a3.js",
    "revision": "7b6487eaa327b38e243c710552fc3593"
  },
  {
    "url": "assets/js/34.2d27414f.js",
    "revision": "934f40275c189af9ae96c2a22322eede"
  },
  {
    "url": "assets/js/35.8dfb0d27.js",
    "revision": "e4c05dd03ae831f6a78d6a209514e56e"
  },
  {
    "url": "assets/js/36.914ca297.js",
    "revision": "2fbdbe69a78cd8c396afe9e4fc732fcc"
  },
  {
    "url": "assets/js/37.9c0242c6.js",
    "revision": "b19eab78528e96b65b09182b1c1adad6"
  },
  {
    "url": "assets/js/38.a367a811.js",
    "revision": "d5d761f41dd9aec001c5df7e01574545"
  },
  {
    "url": "assets/js/39.3908ea21.js",
    "revision": "1ac16b5fb3647447eb90a3f072aa90d7"
  },
  {
    "url": "assets/js/4.43af1ef2.js",
    "revision": "580abd58dfb88e13a464ea128d2430cf"
  },
  {
    "url": "assets/js/40.6867fa31.js",
    "revision": "27d7369da88ef674caa20345811aabe0"
  },
  {
    "url": "assets/js/41.bcf1915a.js",
    "revision": "0a2332c667d46ab604da0aa588eddcf7"
  },
  {
    "url": "assets/js/42.aa86baee.js",
    "revision": "a0fa60e6adaf5a52a7d133cb1a4788a0"
  },
  {
    "url": "assets/js/43.509b450d.js",
    "revision": "fe7a3dcd48fff9b6e7a755ffcba410d6"
  },
  {
    "url": "assets/js/44.ac603f67.js",
    "revision": "5a5c5fb0d2ae663b87dfadc1ae46ddaa"
  },
  {
    "url": "assets/js/45.653696de.js",
    "revision": "0eaf725f33b14d4f74212a3a15fe1085"
  },
  {
    "url": "assets/js/46.8b35729a.js",
    "revision": "0ab2ffdb2d03ce0bff0917704578e266"
  },
  {
    "url": "assets/js/47.fdc5daa1.js",
    "revision": "e83ac6c78f8f20327a26ddc0deec09ec"
  },
  {
    "url": "assets/js/48.6b55976b.js",
    "revision": "b360db4b20e3bd358e91508ae1d546f6"
  },
  {
    "url": "assets/js/49.9bfea55d.js",
    "revision": "f6d4f3af25d0f5805aabd3d5ce3593f0"
  },
  {
    "url": "assets/js/5.9daafb6f.js",
    "revision": "3b63783ce22e48e88c34654f6aefd9d6"
  },
  {
    "url": "assets/js/50.88a627ab.js",
    "revision": "a6c7fa6473a807db12c957b7a32f9042"
  },
  {
    "url": "assets/js/51.ca4c4079.js",
    "revision": "f3fb2423d8992f076301dabb808a1261"
  },
  {
    "url": "assets/js/52.b96911b6.js",
    "revision": "c5810aeafd36ab27de64e4b4bb076d07"
  },
  {
    "url": "assets/js/53.3567889a.js",
    "revision": "dd570f93f84bae90b2f133566e84664a"
  },
  {
    "url": "assets/js/54.d8155404.js",
    "revision": "b08a58399f143f8c53bda5855afeb92e"
  },
  {
    "url": "assets/js/55.8305bb09.js",
    "revision": "4e2110c1b3dd3d53b612455839b31812"
  },
  {
    "url": "assets/js/56.588220cb.js",
    "revision": "8948f00e465197806ffd6aaefa32eedd"
  },
  {
    "url": "assets/js/57.5e8f58e2.js",
    "revision": "58037d9154146e810b959a1caaef8b46"
  },
  {
    "url": "assets/js/58.644b62d0.js",
    "revision": "db1b403104b7bc56f757cc728a1901bb"
  },
  {
    "url": "assets/js/59.4b7000d4.js",
    "revision": "401d81941baf05f725399c02da2e02c3"
  },
  {
    "url": "assets/js/60.16a002b1.js",
    "revision": "82a93991ee046fbc74ffc8995e3f0a81"
  },
  {
    "url": "assets/js/61.40b4c64a.js",
    "revision": "be986127ef353339394d7e5ba1e28289"
  },
  {
    "url": "assets/js/62.2dd5985b.js",
    "revision": "2243369d00eafa88d97631371d345667"
  },
  {
    "url": "assets/js/63.170de68c.js",
    "revision": "926a3c99a099106e98fea7b8d009cf33"
  },
  {
    "url": "assets/js/64.bf8f12db.js",
    "revision": "3bb6a2842b692705aa1c6d9779350af3"
  },
  {
    "url": "assets/js/65.611418e5.js",
    "revision": "0086e27bc1b0df8074442c4a68dbd3df"
  },
  {
    "url": "assets/js/66.eb92a373.js",
    "revision": "3f6a032a46acc8bf5a0c906df4b0cc64"
  },
  {
    "url": "assets/js/67.baa9487e.js",
    "revision": "fb1a3994ffc05294a43945aaff7c247b"
  },
  {
    "url": "assets/js/68.791058b1.js",
    "revision": "c500c163a2fa786b3774da6e1677f829"
  },
  {
    "url": "assets/js/69.7785c5ac.js",
    "revision": "6f5116c574b923735af5b817e9d78c80"
  },
  {
    "url": "assets/js/70.487b5811.js",
    "revision": "bced3f6686f738e6b112dd7f9b3e8ab1"
  },
  {
    "url": "assets/js/71.20ac50c2.js",
    "revision": "95c4bd960e98770bf21e6f31a1b5c86e"
  },
  {
    "url": "assets/js/72.c17bcc7c.js",
    "revision": "fd18d1b891f6dea825d7b2f26daa066a"
  },
  {
    "url": "assets/js/73.6ea6cc82.js",
    "revision": "1765067bc4baf6f68c181284d2e957f0"
  },
  {
    "url": "assets/js/74.d10772bc.js",
    "revision": "3e25eccfee0bdf008fe562083a174775"
  },
  {
    "url": "assets/js/75.9eeae8e7.js",
    "revision": "160f29f31f573f49dd2830403758e2cb"
  },
  {
    "url": "assets/js/76.13ce227f.js",
    "revision": "b4831980f3a4e20292cbc3d26891b66a"
  },
  {
    "url": "assets/js/77.9d4575bc.js",
    "revision": "d46b8892fb12a302e79af2077313c838"
  },
  {
    "url": "assets/js/78.0a1b2f8a.js",
    "revision": "faf8c4e71dd960ec47b7e9da836bf09a"
  },
  {
    "url": "assets/js/79.cc875644.js",
    "revision": "ebac71afc23e771c6440a0b6aaaab143"
  },
  {
    "url": "assets/js/8.89938e65.js",
    "revision": "56a3292486626cded1e595c11bb8c6c3"
  },
  {
    "url": "assets/js/80.24413c35.js",
    "revision": "23d7a45e2f31505f94af9aa9db929fff"
  },
  {
    "url": "assets/js/81.7a05f967.js",
    "revision": "200a82ea7ee2324fccc65247baa3a230"
  },
  {
    "url": "assets/js/82.e73639b7.js",
    "revision": "5eaa88a6121fa4d89f23245abc9e34d4"
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
    "url": "assets/js/85.d12c1bc9.js",
    "revision": "6440dd8816fd79f0e0383cce15ee5ca2"
  },
  {
    "url": "assets/js/86.62f2c8d4.js",
    "revision": "3b305a755a9a43a357a742dfe1f6880a"
  },
  {
    "url": "assets/js/87.3e52c629.js",
    "revision": "a32b5f68f03bacc3a8f653174956f775"
  },
  {
    "url": "assets/js/88.3789dbae.js",
    "revision": "b291c1b2ed33132499aa6ec1d268346d"
  },
  {
    "url": "assets/js/89.18168b8b.js",
    "revision": "441b24cf17737f07f74e9aa480e4e631"
  },
  {
    "url": "assets/js/9.2a315dff.js",
    "revision": "ea22365976b09405906d3006d4b265ee"
  },
  {
    "url": "assets/js/90.1133fda4.js",
    "revision": "9e75fb2d71602a89bc285dec705bac7f"
  },
  {
    "url": "assets/js/91.09151bd7.js",
    "revision": "ce48937749a4f7365d41d064bed2d035"
  },
  {
    "url": "assets/js/92.5099c312.js",
    "revision": "1a60620a0fb2a115b3a51543922336f7"
  },
  {
    "url": "assets/js/93.d41936cb.js",
    "revision": "c1aa975b7d7e4cd9587a271f7415bfff"
  },
  {
    "url": "assets/js/94.fe17cc77.js",
    "revision": "677cacf8f861d63f4139021d0d3592ee"
  },
  {
    "url": "assets/js/95.b35df187.js",
    "revision": "35164c132ce1fb7905b0b7f2107143f3"
  },
  {
    "url": "assets/js/96.9df3bc8b.js",
    "revision": "8df55e509dc6f0ac8553444dc0dc50da"
  },
  {
    "url": "assets/js/97.1cc58198.js",
    "revision": "492bd5106777c5ec522ab347faa26053"
  },
  {
    "url": "assets/js/98.8d3d0b74.js",
    "revision": "19710b9f40662d993cafc8341d2ec941"
  },
  {
    "url": "assets/js/99.5ba78af9.js",
    "revision": "b69f6f4564ed9eb22e720f7b17099e00"
  },
  {
    "url": "assets/js/app.2275effe.js",
    "revision": "a0b3a358a7ad3fac2204fd966f5137d4"
  },
  {
    "url": "assets/js/vendors~docsearch.390e501f.js",
    "revision": "7c1a83405f3cf8e8630bc517595bf2c0"
  },
  {
    "url": "index.html",
    "revision": "5a4a44ccc3d31fd70c8219002311b998"
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
