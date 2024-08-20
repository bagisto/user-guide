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
    "revision": "581ba181af645129f42f3a228cbee6fa"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "6334856c73ced893c1c829a4e094e78a"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "b7148bb5c808fd788d2484acf775411b"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "7b51c6d860c0464ebf344a5df96c44ea"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "bb8f3069350f01d39e90341eb23f42c9"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "6a6efefa48742717dd3769852e36c233"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "968c62c122ed7f5a4907c7c7207bc06b"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "b1abf1a98b36a650303f514531da1ed3"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "a7a814f9342e655f69e129b1156db332"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "1a19b71255e0ba603d89c0ed2c2073c6"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "257418c84088ff1e8ffe4a02e17476ef"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "90d10d8cb8556d34ba9af9fa6ee33ac9"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "ae06b6d42806dac275e9edeb7f33294f"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "ee956c5028e8ffec419414606f1a3c9e"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "64a637c160b889559effbcbb0af99254"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "3eaf04d4bf69911acf7de1ec5db893b9"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "981179240cbe9064f82016cde68b329d"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "1a2f7f6e9a35cdd7c056dfd3c84dc5b8"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "b9e5d66aafcd534f9819f36d67b10e00"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "3556e2f66f29698d48ada9d7a20ff90e"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "26925b1c13293d6e2ccf4189b5e39766"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "8041d72a42d513018d1c1bdf97cea11f"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "36d6d63923de1d7be2941aa890cb4362"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "b3e2928321c3649bf58021fb91904ac0"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "df189dbfb2eaeb5693ae6512532fa447"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "67d4bd575290345aa35f376f4ca11e59"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "12a765554d5f93649b3137ba5c7ed501"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "8b9e7fd52dda1b71761bd39d05c3c761"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "0148ca7bfb8e8781447cb615f7dea8a4"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "6ce3efdc51ad3157c35356e86918bfaf"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "598eb907199faa60b2e69487090186b1"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "170b37ec383fd42014a627fdd7092c97"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "235bb0460ce0b9c06b3129f6cd953b5a"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "91c62b62209f35ea1cb2225f1fdc60a9"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "d93ba6be2b093dc50d52a60cd444b3d7"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "afb2c178ab2c542a93cef61526dca983"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "215cb1c05c517567b9e4767410486fa0"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "6882f281b1678ce03bc4f3341ea75e28"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "59cd24a1d28f7da82ccdaf8ac4c263e1"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "388908b3884e231705e21ec19c29571b"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "7b5a592baec8a51ab782fc082b385a3e"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "318ecadfcfcd308825d9a753e65e5149"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "3c6dfd61b3d4c5e9e49e11ee538a5868"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "b38fba8d00e17e505eba951a1b1ebdc4"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "84fce71f0d8f8cf39a217ffffbe17a5b"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "ec03c2fc7b43ca2bdb404a4b26500d07"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "04481493c22a5e69f7d484baa7e053da"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "c1881b0b00d26ef05ede36949d558ab6"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "729c96b1d6bf06655809a7ece77c93c2"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "18d2e978d9a2c694062edb5d7d33935d"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "e8e6e4956f4c0b55f404d697bca34852"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "74c931f6a860eee6281776d66b0815a3"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "223511748d99a89d3b3b5c32224134eb"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "c66f9cc0f123279a24ba84a184feea43"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "6e442665453ec78013a2467ab8895e9a"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "40ab562d0343b0e62643ccd4824a07fc"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "216a8ff7a9fcda11cfb0838038bdf2f5"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "ff66d2783e51efdb901179d43b27cbc1"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "66a36621bcf27ab3250ee8a2eec7dfcf"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "ad6af4b1a4b0180d3ece51af1890208d"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "475f44efde89047bf241c93ab0d60383"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "5c594736775458b6d7175c0fb2daafdf"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "a9b32aae9c8a56efeb98ec03ec3a2d52"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "12de10f61c11658c4df1160640b82be8"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "1d8b781a142c9c023cdf642573a0a2ed"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "b1b6cbc15840c36476cb0a1492fa9f5f"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "bad85a505c728cf75e67aeb4d22c9e10"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "e9a82291223a55860f89f77a3b2bd809"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "9eb89391355a9de8454a4772c76f9a2f"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "5bb17779be418143ee760e02cc723534"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "44f03eec1e6d6517e3c545b1989e6932"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "93a15f7897b72ed30de1bd249f05fa2e"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "bf1689b6a9922fb43cd06b21b7bd02c7"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "3f002a4b045c749c1a35c0dd873368a0"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "a56f778b6f33c874bb8a7022fc3318bf"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "2465e824e358b162004ebb9731af2362"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "41413317f8cbcb697f9ed7af7104008d"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "57fb74644624a66d49b439f716582fe1"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "9631161725566624b72d7d600b70938d"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "24dbac7d66dde66c4cf77c949cf08cf2"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "409ef13a518d2d04aee3fbad337e012c"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "b53130daa74830574d9f7d26617b2693"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "5354ebab36af6bfd7a9aa47358f3b0be"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "8f189cad151063ee64e7fb2565d1dda6"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "30f578a28156f72084b991f2e30152bf"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "124b551e7ff8e09f6d0534586f86ecc6"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "382051abd20f5231d86b04b431f0cd5e"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "fae5ad01a692a9ca701d9e77d74c2d68"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "854d57261d57975118f37858cdb699a2"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "b60d686ab3fef57a97a72cedca8f21d1"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "74a749b05468b44b9a6ce37c30f5ce68"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "ce268a98566f51ee2b2966e9562e0e06"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "8757f4ba9af057f7241f4d2d166cfcc6"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "b1e9f61dc8db576a5671cfe7d2044fbb"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "a31816f4fb60584115866c3e2accd6f7"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "49eb8cef97e0e0f25508b268e298a267"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "fee5934b927beebf2d328f8471da45e3"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "fb259a13704f085990ca10a32ad67bf9"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "43decb6252a2c30784396a2aee444528"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "45b6cde3a7449c47f1377721053dd1b7"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "b12263b7f38378765ab28fc2680f85e7"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "ff493fede31d935836bbe57af7fc16f7"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "09309bff4e583f75509f0620d1fe604f"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "82c78af01b771171c794b69e38af44b6"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "9df2e17126c4bc160a71da8592f1b3c4"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "67d29934519e980e1b48907b6cecc8ad"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "b31d5d14790ce36e11780cc1282dd581"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "b8f3b6e48e0300a11b1414e06dbd7fc0"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "d20d8058fe2ebc4ab634ebc3941d73e2"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "e4ea8bc41513b444c8e00ce6e5fdce4e"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "ab7f5ce5a26fb59bb311a16003c15ce9"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "9e984e9288565db8b7651883ebf29400"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "4bec35278fad7dec53ab6fd12bac4d68"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "63ac7837fb334cdb0ecb1d8f12b4dc95"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "36292720933b52686e4bde73027f4657"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "97a9b5fc793cbf2530bd7e44d4b5cfe5"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "e5e82661576960bcd5988717d3770870"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "eab2fef73919ac39f9ca48274fb2e1fd"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "8b54e073bd03a727fe343a0933937c25"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "6ac23c7f95a3976e748ddfc51c69cb60"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "2b1f60f10cf2759c511bca85c7b8f233"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "e47f10d671fa8bf4df235c9928428880"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "3be6691d5e93902e7102f88384b462b4"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "6b829c53188b4f13ce2435963355b2b1"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "66dc9e70fc2345884d870d557ef4d127"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "054ace0cc1950b0acc5e75595506b178"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "cfcd7f24caae8d7fbfb74269c7c28301"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "44e7c8daefb78becf7e0e9aa61ce4f0b"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "6cd90a0b1a3d9616522c12f95a31603f"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "7b02b9a3cdce9a88228020da62d3298c"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "1f188aea625e038c630c9701dc7285d2"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "600d8c5e05215ab569713beb2b4c6ab3"
  },
  {
    "url": "404.html",
    "revision": "ef60358bacb9d1fc4aae96434956c191"
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
    "url": "assets/js/1.f448d7dd.js",
    "revision": "ff4b5ee02241bf67990b2a77d882e0b0"
  },
  {
    "url": "assets/js/10.04cc681a.js",
    "revision": "1f77ff64099ebc651538b2f97fc1e231"
  },
  {
    "url": "assets/js/100.70af01d3.js",
    "revision": "3739fdfe1f525860063d554da1f105ec"
  },
  {
    "url": "assets/js/101.71402b51.js",
    "revision": "5d044e38e5a489b9f1dbea7e20d98722"
  },
  {
    "url": "assets/js/102.5dc4679f.js",
    "revision": "89d5f52add80fa9c14aae99725c5d6cb"
  },
  {
    "url": "assets/js/103.880b3088.js",
    "revision": "9d530acf46fc99f96625fd81f45fa2eb"
  },
  {
    "url": "assets/js/104.dc592d31.js",
    "revision": "6218e6fac6dfae32c01ef97948f1173c"
  },
  {
    "url": "assets/js/105.10fcaa24.js",
    "revision": "dc2f4cf8f853d09e998809bf51241239"
  },
  {
    "url": "assets/js/106.537ba299.js",
    "revision": "f65c2803e8b054319538d163cdffee8b"
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
    "url": "assets/js/109.fe3cc5ce.js",
    "revision": "942abd2b2a4a53178a715c81ba6eff72"
  },
  {
    "url": "assets/js/11.c97e0dcc.js",
    "revision": "ac35b12e53945ba93450e0704ee6143a"
  },
  {
    "url": "assets/js/110.779ccb25.js",
    "revision": "eb454910c3ed6c3a9e82634a901c9ffd"
  },
  {
    "url": "assets/js/111.beba07f3.js",
    "revision": "78462a1b47505bf8efc29e88f34aae6e"
  },
  {
    "url": "assets/js/112.0c8c112a.js",
    "revision": "759f4b0a1909ba82f90a0c4e6202879a"
  },
  {
    "url": "assets/js/113.adddd0c5.js",
    "revision": "64ef47d396bb203f64e7f595a6e8c718"
  },
  {
    "url": "assets/js/114.0cb59c62.js",
    "revision": "4a50733ccb134cf5d051a3fc1620696d"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.6123487c.js",
    "revision": "f87d5e3cc7be6f8cd74d351755c31473"
  },
  {
    "url": "assets/js/117.e5d8b3be.js",
    "revision": "a9c28e85b8fdb372b049a8468db6918e"
  },
  {
    "url": "assets/js/118.ace63a10.js",
    "revision": "93baca3f14dbb9e76911e01741cc5dc3"
  },
  {
    "url": "assets/js/119.ea272fdb.js",
    "revision": "71cc2725a15cf9faa377ef88fb50f6da"
  },
  {
    "url": "assets/js/12.59971a5a.js",
    "revision": "9d188c86fa35ba157c790022fddfa9c7"
  },
  {
    "url": "assets/js/120.31b9cbd3.js",
    "revision": "1a8b048561e6bc4d5d8c6e3ae1ec9f0f"
  },
  {
    "url": "assets/js/121.684a6a7a.js",
    "revision": "0378c776535ca8c6c65c9bf8d7f5bb1f"
  },
  {
    "url": "assets/js/122.ba95b1b4.js",
    "revision": "6b4ef2488607f9aff1b883f9711d25ee"
  },
  {
    "url": "assets/js/123.7cc83b21.js",
    "revision": "198b6201c792c578ae9e07bdd632d923"
  },
  {
    "url": "assets/js/124.757d9ccc.js",
    "revision": "116046adfa89c33b3b3c17a91be623af"
  },
  {
    "url": "assets/js/125.b4401c8b.js",
    "revision": "b79c1563bed76ec0dd240fc714f5db1f"
  },
  {
    "url": "assets/js/126.1e0a0aeb.js",
    "revision": "6fb759f8d99ec3180cac9f4ded42ab3a"
  },
  {
    "url": "assets/js/127.492bbf03.js",
    "revision": "fb67394b4b1b56930717930ec549e42e"
  },
  {
    "url": "assets/js/128.f9e72776.js",
    "revision": "dfb789261d2ffd61ccb4c19a8862fe74"
  },
  {
    "url": "assets/js/129.15c857c4.js",
    "revision": "a7a3776be06ffd53d4e85e9c3f41064c"
  },
  {
    "url": "assets/js/13.9f5bc02c.js",
    "revision": "71a95fa11c4e85d2f894d2602b6adaaf"
  },
  {
    "url": "assets/js/130.953c6254.js",
    "revision": "ac9d53333eef058c7aee1627fb49fc0c"
  },
  {
    "url": "assets/js/131.4d76cba7.js",
    "revision": "95201667f16bfca359ef9d38ff810de2"
  },
  {
    "url": "assets/js/132.3b3409ef.js",
    "revision": "7b6a4ac92b131a445391ab9ae629f4a5"
  },
  {
    "url": "assets/js/133.3b6206bc.js",
    "revision": "f328c241376e5e2df7e329fc3d4ff7fd"
  },
  {
    "url": "assets/js/134.7d9a6cb6.js",
    "revision": "4dfe48ca0d2c6ebfc2cb5a67e7e2c56d"
  },
  {
    "url": "assets/js/135.a5f34712.js",
    "revision": "7d631b5aa90140b50ecf1e3e414f431d"
  },
  {
    "url": "assets/js/136.a29c1dae.js",
    "revision": "4cf7125b65e954e2a4359df090fc8269"
  },
  {
    "url": "assets/js/137.0703ca2a.js",
    "revision": "9938ee252ce441fdcad92f11bce6576b"
  },
  {
    "url": "assets/js/138.3a17da0c.js",
    "revision": "3522bbde59243cce4e09434429411724"
  },
  {
    "url": "assets/js/139.89d2156d.js",
    "revision": "0f39469154c9fbcd99c7bb46d963e6a4"
  },
  {
    "url": "assets/js/14.510cf4c0.js",
    "revision": "4317122e33c6a1436c97e903aaac66e1"
  },
  {
    "url": "assets/js/140.445a7c6e.js",
    "revision": "2f2ec1ecdd9974a816d342b1317c221f"
  },
  {
    "url": "assets/js/141.5fa80cc2.js",
    "revision": "4a3a614198343a3d2b72c69f11fc41ec"
  },
  {
    "url": "assets/js/142.d22db864.js",
    "revision": "226c5af6689cb9c8847e4cc57a196be9"
  },
  {
    "url": "assets/js/143.d0d1f052.js",
    "revision": "01f1bfd290ea3b0af88c843df8073928"
  },
  {
    "url": "assets/js/144.b8e0b129.js",
    "revision": "a820115909d48aec403fcf1e06bd9149"
  },
  {
    "url": "assets/js/145.2acc724a.js",
    "revision": "4232eda701a3052114d5f80aca284e24"
  },
  {
    "url": "assets/js/146.ef6608c8.js",
    "revision": "28b9ddba8c7fd71d52ffb693256655ab"
  },
  {
    "url": "assets/js/147.852fc519.js",
    "revision": "a9c2f7d7d40b5b8acabc28648e055b05"
  },
  {
    "url": "assets/js/148.689d49f4.js",
    "revision": "34272c0c7f2c2305428f979816b42d89"
  },
  {
    "url": "assets/js/149.56346488.js",
    "revision": "0fcd045d357c88a0e745b351c541b6d7"
  },
  {
    "url": "assets/js/15.7a9ad0d8.js",
    "revision": "b6e9bcac6a18178bfc84c759f5a297be"
  },
  {
    "url": "assets/js/150.ac3d0ec2.js",
    "revision": "5b42888fa1bd11bd5051f9b04e4c57a4"
  },
  {
    "url": "assets/js/151.1df601e7.js",
    "revision": "465b0c3421e40e8f38d7f2fa97e02188"
  },
  {
    "url": "assets/js/152.9f510f90.js",
    "revision": "9093209a4f2e63865a2ec39bf16b7267"
  },
  {
    "url": "assets/js/153.c0cb63aa.js",
    "revision": "5b9270aab0801aa748ff81f6b6a5b9fd"
  },
  {
    "url": "assets/js/16.690f081b.js",
    "revision": "09ec7900bba60ef25b74fd47471be8f9"
  },
  {
    "url": "assets/js/17.dc8f9d8e.js",
    "revision": "fa5d4372a1e13c49dec996f097e83f1b"
  },
  {
    "url": "assets/js/18.89d20ef9.js",
    "revision": "5929220c000410cb5a252d21b0e85faf"
  },
  {
    "url": "assets/js/19.e695ff3b.js",
    "revision": "3f67014483d54b6f71bdbf99976f67e3"
  },
  {
    "url": "assets/js/2.a10ed117.js",
    "revision": "69620ba0f8ef1c845f1ba72f3e69e58e"
  },
  {
    "url": "assets/js/20.e4af1034.js",
    "revision": "2f6ae7515f3527043c5e15f1ad0ed188"
  },
  {
    "url": "assets/js/21.0fb56741.js",
    "revision": "a9508574d0420fa1ca08b694d565fa29"
  },
  {
    "url": "assets/js/22.dc5b8aef.js",
    "revision": "8623abd1ec36786188105f5ecf36c445"
  },
  {
    "url": "assets/js/23.07efde7a.js",
    "revision": "30fe77cc07ec58456241bac30b97f2ce"
  },
  {
    "url": "assets/js/24.83de03f8.js",
    "revision": "19f92c675a93ca9111ab3f3793ec5dec"
  },
  {
    "url": "assets/js/25.90a74638.js",
    "revision": "96e63e9d43cadcb16d2f1fe1e4dd5d5b"
  },
  {
    "url": "assets/js/26.a24244fd.js",
    "revision": "050a9eb5ae793729f552cf633315f49b"
  },
  {
    "url": "assets/js/27.4cebda45.js",
    "revision": "0cb2b662b3cd4a5815b021fe94b498eb"
  },
  {
    "url": "assets/js/28.063b76f7.js",
    "revision": "a4eab42379435d31496c83798278c91b"
  },
  {
    "url": "assets/js/29.379e9fef.js",
    "revision": "fb8837b1ffc97f69f96047890e6c657a"
  },
  {
    "url": "assets/js/3.bd3b16a4.js",
    "revision": "3caa258015023020a1043d73accdc017"
  },
  {
    "url": "assets/js/30.e537b1d7.js",
    "revision": "d6b7cfa193d82b3492cb88c5ee6aad03"
  },
  {
    "url": "assets/js/31.9670aba8.js",
    "revision": "ef0d9a727a5c382fcefad8fe4ee7efe1"
  },
  {
    "url": "assets/js/32.7b84c8cd.js",
    "revision": "6ba13b45193b3af56c0339f295b27426"
  },
  {
    "url": "assets/js/33.f7c81612.js",
    "revision": "d6d60357e050bb19995264c1df0585c4"
  },
  {
    "url": "assets/js/34.9bf890f2.js",
    "revision": "0d6cb3f93636a298dc81021e9ee55226"
  },
  {
    "url": "assets/js/35.7f02be98.js",
    "revision": "2c975fb6ea1f84cd5dcd4a9f5b5710c9"
  },
  {
    "url": "assets/js/36.6ef445f5.js",
    "revision": "995c3569827941c89b4958d73e8c9e9a"
  },
  {
    "url": "assets/js/37.8974cfe2.js",
    "revision": "c05cc394035f23799fdaa1f5dacbb3a2"
  },
  {
    "url": "assets/js/38.17eaca2f.js",
    "revision": "bb97c3a485f111214474a51a05c0cc46"
  },
  {
    "url": "assets/js/39.266b0305.js",
    "revision": "00d5e27bb9bfba8f90b14fd5643303c2"
  },
  {
    "url": "assets/js/4.4368ce1e.js",
    "revision": "f7f7c6d6d0808d22192ff40b95fc872f"
  },
  {
    "url": "assets/js/40.576a67a6.js",
    "revision": "beb0fc3a51d41bc2144596c7d3117f4c"
  },
  {
    "url": "assets/js/41.140f1f85.js",
    "revision": "5bf5b8284304a983c47ded7721d25b73"
  },
  {
    "url": "assets/js/42.c8790d4b.js",
    "revision": "4ac12d78738738528a25375d6feccb83"
  },
  {
    "url": "assets/js/43.c9b72cf0.js",
    "revision": "1de41cff73c7f52ee74bef976404b56d"
  },
  {
    "url": "assets/js/44.89ae203c.js",
    "revision": "7b0626585591e662d2ae674003a45ecd"
  },
  {
    "url": "assets/js/45.2c587a3c.js",
    "revision": "d73f653eb50b59d464c00b38f1964266"
  },
  {
    "url": "assets/js/46.e997383c.js",
    "revision": "4fceef5b03fb2b502e229225c5eb765e"
  },
  {
    "url": "assets/js/47.694295f9.js",
    "revision": "b630a36846cb82c0ad4a109f90e6cc5f"
  },
  {
    "url": "assets/js/48.b7b700f7.js",
    "revision": "095ea2549f074f8fa54610b81000f7de"
  },
  {
    "url": "assets/js/49.30a67b07.js",
    "revision": "30b64bed8e865eb24881d3c29a93dbc8"
  },
  {
    "url": "assets/js/5.1daf9d12.js",
    "revision": "ea7c9ddb5604f7cb4cd6333a88ce5f26"
  },
  {
    "url": "assets/js/50.2ac71090.js",
    "revision": "114a34d6298c3702f2c9c9369989e998"
  },
  {
    "url": "assets/js/51.6f19f0f7.js",
    "revision": "456b0709bd6860c82575fcc621c380bc"
  },
  {
    "url": "assets/js/52.847b0b7b.js",
    "revision": "10455e0066c5c4f922f097d19518e2fc"
  },
  {
    "url": "assets/js/53.d98a591a.js",
    "revision": "9926dd48b9fdbc20b52387e293dadcbc"
  },
  {
    "url": "assets/js/54.97bd95c6.js",
    "revision": "2d02391be9b6f0369091ba4d6b5a341e"
  },
  {
    "url": "assets/js/55.33f027d6.js",
    "revision": "02283d45de5ea4a1438d8a32d6584e81"
  },
  {
    "url": "assets/js/56.d3697fa2.js",
    "revision": "74ad3b7ec7847309e01c46b1f63d8286"
  },
  {
    "url": "assets/js/57.6957d1fb.js",
    "revision": "91e7683595c048384c850a8aacfb5ea5"
  },
  {
    "url": "assets/js/58.a5f35660.js",
    "revision": "48dfc7a11233d8a2f5497730e2d39a41"
  },
  {
    "url": "assets/js/59.51e0049e.js",
    "revision": "5dc1c09a21ead8d9deee584ded314b6b"
  },
  {
    "url": "assets/js/60.c7dd3878.js",
    "revision": "e1da29443289af9835f5742a76f731b5"
  },
  {
    "url": "assets/js/61.9afa996d.js",
    "revision": "aceeed4ad782064460a613f33d93a3a1"
  },
  {
    "url": "assets/js/62.ba61aad3.js",
    "revision": "517fcfb8d22f070a8025430f3ffde41e"
  },
  {
    "url": "assets/js/63.1d92ad9c.js",
    "revision": "31e105189b45b8195af6f1cf1a5e8ecc"
  },
  {
    "url": "assets/js/64.e34cbdb6.js",
    "revision": "dc66e28e295d75886c29161aed79b24b"
  },
  {
    "url": "assets/js/65.63a320a4.js",
    "revision": "21e064058e93f4d2503dc2a7e379f641"
  },
  {
    "url": "assets/js/66.e10e29ed.js",
    "revision": "31f750010a3754d183a9008d6deec523"
  },
  {
    "url": "assets/js/67.9da43ecc.js",
    "revision": "ba48713d09f2f0f0dadfdbebd1009191"
  },
  {
    "url": "assets/js/68.8c21d3d5.js",
    "revision": "a41f75609ebf272aa264865d149c91c8"
  },
  {
    "url": "assets/js/69.0c984417.js",
    "revision": "3fc258040329c2bf3abcbb6f5f421f75"
  },
  {
    "url": "assets/js/70.0e932464.js",
    "revision": "fd6d91dc50b9a687027dd8e9ec78d3a9"
  },
  {
    "url": "assets/js/71.226b2dc1.js",
    "revision": "835dd8066017fe4e67350afb499a5d90"
  },
  {
    "url": "assets/js/72.d1aea4bd.js",
    "revision": "8c52f178d34eb73a141f47936cb81cd2"
  },
  {
    "url": "assets/js/73.9acfe888.js",
    "revision": "684a4a0231e388f3034f73ffc0a12121"
  },
  {
    "url": "assets/js/74.e5cd4417.js",
    "revision": "102e711c0212f5c1d069bfb921b954a3"
  },
  {
    "url": "assets/js/75.b071a23f.js",
    "revision": "4dfa1bbe96aec40e2ddcf64e62bcd36e"
  },
  {
    "url": "assets/js/76.d44c0ff3.js",
    "revision": "8850d5e6ad4f628843c35c713aa0692f"
  },
  {
    "url": "assets/js/77.82241cb1.js",
    "revision": "a8d1cc604d0eb390d1dbd50e389b4c2b"
  },
  {
    "url": "assets/js/78.430329ba.js",
    "revision": "49123e2573229508de3baa7322c4405f"
  },
  {
    "url": "assets/js/79.ef1200ba.js",
    "revision": "68f79e11fbfb1b36515d69213bd945d4"
  },
  {
    "url": "assets/js/8.a7a79272.js",
    "revision": "51b8e09d64a2149360d9be2feb544216"
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
    "url": "assets/js/82.cecc4c96.js",
    "revision": "caa991c521c2736afa4ecb91cdcc6a40"
  },
  {
    "url": "assets/js/83.d1161f12.js",
    "revision": "dd72f930d35d325e50719a15dda0bee5"
  },
  {
    "url": "assets/js/84.67d23b56.js",
    "revision": "851f95eebfeb886b992d9db799098571"
  },
  {
    "url": "assets/js/85.4edd0987.js",
    "revision": "b53670920f93a7ea6a6e37e7a1654eae"
  },
  {
    "url": "assets/js/86.ad17389d.js",
    "revision": "aaba7ce88dd705006ebea8cf316275bc"
  },
  {
    "url": "assets/js/87.e4297bd2.js",
    "revision": "24d0ab4f854c8fa385732a02c1e8f162"
  },
  {
    "url": "assets/js/88.a9b14ef8.js",
    "revision": "092a249199483de8cbc2fe558ce6d538"
  },
  {
    "url": "assets/js/89.13ff111e.js",
    "revision": "d790911bb99287c212ac5672165bbbcd"
  },
  {
    "url": "assets/js/9.841375cf.js",
    "revision": "90b4d91cb54ed86b83537912ea3aa477"
  },
  {
    "url": "assets/js/90.eea5a14a.js",
    "revision": "213c12133128b3ab16af330b2bb91ef0"
  },
  {
    "url": "assets/js/91.68c53912.js",
    "revision": "a4587bc3ab9a413ee6a806db89749785"
  },
  {
    "url": "assets/js/92.56bced8f.js",
    "revision": "04c51b0f481bf54b8d8a5bfa49b4c89e"
  },
  {
    "url": "assets/js/93.4a24ff24.js",
    "revision": "74fb91729d08edfeb13980123843a88a"
  },
  {
    "url": "assets/js/94.c3e8c128.js",
    "revision": "68d6997123f68a7d4e627a71f1ed9dfc"
  },
  {
    "url": "assets/js/95.e69bda80.js",
    "revision": "27dc2d1f09cc2f771b03e87dcc727b60"
  },
  {
    "url": "assets/js/96.ae9bd6fc.js",
    "revision": "cfdf9855948c0294217feb1bf00b1eb6"
  },
  {
    "url": "assets/js/97.8da03733.js",
    "revision": "ac129c3ef9db7114ea8f60daa18432b2"
  },
  {
    "url": "assets/js/98.a86d1a0a.js",
    "revision": "d33b4a9e72d1e208cf5e56d3a6df6729"
  },
  {
    "url": "assets/js/99.1655d227.js",
    "revision": "33b6abcf1ddc07405d4916400101b2bf"
  },
  {
    "url": "assets/js/app.aff14596.js",
    "revision": "75898823d54d7bb21a66aa95af8f24b7"
  },
  {
    "url": "assets/js/vendors~docsearch.0b0f1502.js",
    "revision": "eca09ec90e6fd31eb06d1d18447f20aa"
  },
  {
    "url": "index.html",
    "revision": "8018a6639756021c72d0cda090455dda"
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
