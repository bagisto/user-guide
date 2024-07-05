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
    "revision": "ff0b990656d4995e8f1a172a30beedbe"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "28b581211da0ff49264dec2a3c13b142"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "a8e3c331ab6e5755c2226f48ac22d03c"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "8e45b0a4578598536ffc7387a81ad49b"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "ccc8f65552d6e6ffe930c66576298f33"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "ffa182bd5ea613118cb43f3d03a65a31"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "6db2cc42c5473a405962841dfa01a92b"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "e7dd6a3bc2ee01a94d71047c473a67d1"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "61f77e13dd6a2c1d6cec992337313f94"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "389fc85e410cfb829935fba10f159540"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "79e18cd286afc4b36db3f4eb715da722"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "96a70d21622a5bc9e045a79744bbd913"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "d79904e1ce69543eef3ad11d2b308800"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "a19c8b28f4fb570bd3e396337092489b"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "8abb6c32a661b49231341c0d833425da"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "65581305c8c7842356793afa64937a4e"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "027fc51837c2d7e4ae55cb0e890b6652"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "4ccdf387a41c7a2ab06be1aa4a98ae35"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "f122f8497ef1bff9704b6e8e7ec94cc0"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "3d83ef91384b8cb3d983bb42ec084a95"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "ae931d3fd5b02835cbb0d29d1a1a21c2"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "5032b79f860114f4c6315d6b268b7f50"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "26bb20703512d23994e52ab362e8684b"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "4d84dbb0002fb52252868a5d652de969"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "9225c0c47e574ff388f83033443a69ce"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "73fb0f410af6dba012087523eb91dfb9"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "dfb4e202b9282fecc6c1f166b4b82a7f"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "4c98bda4dbcfa39fcfd573118c167be3"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "8d1b1f404d7d39215bce49049c150d11"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "f9ac5fadab349cb6d84e9e5113a0549f"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "a45bcf7669da7aa6012620621f6e1921"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "a693aab34b190a62183e10ec51ec6be2"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "36d54f3657a3cd324463627cc514d046"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "8baf40b772efe1c1de6690a8f2ba2086"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "2befae7e3a394cb7664991b0c4de255f"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "991de817eb143fa532d4704bacc23a72"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "0462bf7222dc3bff3fa1573ea87ee592"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "dd7a3e51247404ce15ed8dcde8283ab0"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "ae800559f792c5d085c70ecf5286f3ce"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "2abfbebe3e1e877db9fdf22bc07bb0bf"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "aae371d9ae378b857ce3e841a94b0cc2"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "f8b51ba9e83c377d941d3e81f18b4967"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "dc2039ea701b8922e9c088cbf747ce51"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "fbaa43f3b8f37adbc07b56e870c2125d"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "0e5b9b3d67003314614abf7cfe2a10d2"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "2ad41121f34dc87705331e45f593954a"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "4db1a1b42c36dd000a1c9e118ea127b4"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "b2632535399bec26adc410c38cc7a3c5"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "bc9a942319919aa3dd32e9ca1aa2f4d2"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "bfcd50f19dbbeb470753bb176514103e"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "c203f80366784843ae63ee9b670f3c40"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "4f64cc4f84f7271436160e6ecdd51428"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "9f8ef3d45300141cbde502d90d2fb335"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "4b09d62fe423a03ca6eeae0abd6efd10"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "88ace304761a52dcd4d4f1e09515d783"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "9af7b4169d943386e73ab297e612b3ac"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "b85e776c9729c0a7561acf9f4a833d2e"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "ffe03b07d8a26178954bdf9ddcfd240a"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "ad949abb6f05296e949c7bcd7d98165b"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "d2a5d4a1cb56f261397294d9dc94120e"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "599dc2f31b04143a67188452f2bf0ccf"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "041db7e09b2bfd246ed9c7c4253e4f4e"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "4968bcd3bb237db15e009f96fbbdce22"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "f87cb29e4a4424562f80067217e95faa"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "9da487c6bb37b21c93f6146fb2c90092"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "d72a85786a1f87f0d2ab143c97b1bd46"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "7c5f377d473a7e2f1c0f119c3bea0a0c"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "eb6e78f7049cab69f363524ffc488833"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "1dd6ef867505aa429cc6282caf2073f5"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "3cec0a8b95f92acc104d4bff9db8df5a"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "774dfa6f5a1f4bf18be34c1e33618245"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "ff19e89a89937d3c3dee999326e26667"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "4206a5e1b9b98b227f9b6f4fb92e0f9d"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "7560f0538141a010d7381917e179e951"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "d01a4b81de917201ab1767e1823e27b0"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "53bee0fe12e68bbf99ab247e4c3f3351"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "11eba459eb42748e219fc5afb8eda20c"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "4a6faf03b9c36063bb7badbad6a5ea1b"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "d337be1783cf3746c8a6ad61e722d86f"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "4f877f6f95408902f85261f50441ee80"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "e9b4326129583312919d6f6979e88003"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "59994ce5f267ef2c58d413bd625a1806"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "e34da93ffdb88378d172940fda58ee82"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "4d2c1a6dd2cf5cf0fcdd05853c7193d7"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "428e0e37c4f3b127d7c0a7c1f27c03ef"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "4055ea87410ee6c6d72ae854ba29160a"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "09cd18663fe7e20a56dc53455de1d31e"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "d8a369501d34270d076b7a9fabbabcff"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "7d5a36f4ef1eff4083c20f4a2fb48a6f"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "2c6eddaa80ef45bdbbd19d0bb88a8054"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "42420213cb0d4b58e9c98473124ac8a3"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "06cced15237131676ab8b7bb66949a48"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "e3b379f8b74077ae7382909b57597288"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "b1c61827b0dc091cb09cac6f8f080262"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "15f452ee874928f19f80e25e8f36266d"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "f66d8dbf0d39e9a30d23eadc228dd006"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "da47102d1b2ac38a60f95c6b3069461f"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "6b6d5b434fab3ab61e436d235c006f5a"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "7604e88e9124ef4e53c710253f6ec37e"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "faf7925e3c4227c2cddaa32ec309d3dd"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "0852617e06cf2b192464b66b57eeda2c"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "044b95d544437a4f24cea0646eeb33c1"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "cf218bc935f5ba5cd9c684b8afafe484"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "4230f15f41bda1d8ed61a7a2195628fc"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "8abe6d6beb9c63b144d3cd7efbcaea23"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "46facd9c26af688b4578724cc33fb528"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "1ff585fe402ce33efdfa647b64a06cd4"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "eea6710a4cafeb9ab7437531e372c5ab"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "cc0a7194f581d944e9980e1d0191d702"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "923f24fc66a1b57c69d544689a025be9"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "e8cd17652e7eb670d31341f05541fd3d"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "e63aba906f7e978eed7da6083045301a"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "4fbae18eb5b5a01780f011e8caade52b"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "bf2fab3aa75286fd70d7b488fed5a506"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "3398bc246c3212918216cf79b9c6c004"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "c773c14cf3ded0359f5e7735d20755bf"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "4da9436329f09bcba9a364ba3b6583fd"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "ffed5c262517281b353d5f72c45fbdfa"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "eec38065b8d262abbce4f19d76efaac5"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "a73efe9197c922fda09f86b18dfd2117"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "f8dbbc02034b3ea87033a6f90850d75b"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "cdf63d1029213fd6296bc3beed885d41"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "6d5bedd83b78cea690517c870f3cdbfc"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "47f0c0a962d112bea04661a3573e8ade"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "d6581e6515e9a365598db97607e4f37f"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "d38d2729b8ee5732843e4f7bb80ee606"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "227b7d434aa413556eef3a7bb57dafcd"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "f0d7d37b51f69045679c913364633740"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "8431e3bc5e82f6e5265566c2bff6411d"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "8deb1aee0aedb41cac0e13e3dbf3d0fc"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "59d8e340baf84cd7ade33927e160d81c"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "c6e576c20d7a0d43f2b1bcdb7794681b"
  },
  {
    "url": "404.html",
    "revision": "e93840220e6063bedf96d383e6e21e51"
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
    "url": "assets/js/10.1f4591b1.js",
    "revision": "712c62f77a233d7d5ee288c87c7d9140"
  },
  {
    "url": "assets/js/100.30658899.js",
    "revision": "f9c08dd382b9d9aa97fa775271c42b7c"
  },
  {
    "url": "assets/js/101.5c550b6a.js",
    "revision": "bbc19c321dc3f7cdbfc5475a0ec14b93"
  },
  {
    "url": "assets/js/102.a52cdd7d.js",
    "revision": "fe9690417d78af814ff04ce8128e6b1c"
  },
  {
    "url": "assets/js/103.dc302274.js",
    "revision": "4fad2a560c628393b8cc1c0d2e94d679"
  },
  {
    "url": "assets/js/104.dc0e8a02.js",
    "revision": "cce837bfe0cbe0cd4631b00fb2974f2a"
  },
  {
    "url": "assets/js/105.091ee6c0.js",
    "revision": "cffa6808eecb41b84204c049a5872694"
  },
  {
    "url": "assets/js/106.043fcefa.js",
    "revision": "625e7043d6745d47f5fe50255379d9ab"
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
    "url": "assets/js/109.557851c7.js",
    "revision": "cc4cee7f0a82f9bfd7a7f72738e36e9f"
  },
  {
    "url": "assets/js/11.c97e0dcc.js",
    "revision": "ac35b12e53945ba93450e0704ee6143a"
  },
  {
    "url": "assets/js/110.672f4335.js",
    "revision": "b74f5e514949395faed73c043f8bcdc2"
  },
  {
    "url": "assets/js/111.6663006e.js",
    "revision": "9fbce7430bc12094e70b34525b9028cb"
  },
  {
    "url": "assets/js/112.a2457162.js",
    "revision": "33e1b7946786d0b88fae49736d32bee7"
  },
  {
    "url": "assets/js/113.779ae7ab.js",
    "revision": "b70031154e3ba23cc979ae895f2ffdb8"
  },
  {
    "url": "assets/js/114.25259b7c.js",
    "revision": "78cb89ca55b8f26c51e7cbc042c49760"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.28dfa576.js",
    "revision": "d614158e4bd25e66897a285d33b1c840"
  },
  {
    "url": "assets/js/117.e5d8b3be.js",
    "revision": "a9c28e85b8fdb372b049a8468db6918e"
  },
  {
    "url": "assets/js/118.4b8a4e0d.js",
    "revision": "15359af9857acd0394a97876a89fa54b"
  },
  {
    "url": "assets/js/119.930cd50a.js",
    "revision": "14162c4603d122da8c1ef5cd22d528d0"
  },
  {
    "url": "assets/js/12.c28a3f56.js",
    "revision": "36386b8cf36c066efe52af5eb6dc7534"
  },
  {
    "url": "assets/js/120.31b9cbd3.js",
    "revision": "1a8b048561e6bc4d5d8c6e3ae1ec9f0f"
  },
  {
    "url": "assets/js/121.760edc9a.js",
    "revision": "6e9dbc1fa0b1e5e1e960161c052f1b63"
  },
  {
    "url": "assets/js/122.ba95b1b4.js",
    "revision": "6b4ef2488607f9aff1b883f9711d25ee"
  },
  {
    "url": "assets/js/123.c40839e8.js",
    "revision": "6e053f621ca975963ddae061266fd9ad"
  },
  {
    "url": "assets/js/124.4b01c9dc.js",
    "revision": "f4f57d065f6828e7b471be48ec744587"
  },
  {
    "url": "assets/js/125.608830ef.js",
    "revision": "4558727a4303a3fe5d0e95c7162e1bbb"
  },
  {
    "url": "assets/js/126.5ef0b959.js",
    "revision": "45f7d6c299eb285e3ac06b1fcb876c38"
  },
  {
    "url": "assets/js/127.af538c3d.js",
    "revision": "511b7bcf01341eabbb27a62db3125f37"
  },
  {
    "url": "assets/js/128.c09aa4bd.js",
    "revision": "cf3784a7100aabbaf2156e0b251393e3"
  },
  {
    "url": "assets/js/129.6dcd2157.js",
    "revision": "9c40a8629e69a6b52ed98de8357fd0b2"
  },
  {
    "url": "assets/js/13.753d2a7f.js",
    "revision": "61319d845f6247a99515a0f6bf2bed91"
  },
  {
    "url": "assets/js/130.a7a98815.js",
    "revision": "aff0a6ee4c640a9f234e87411cd8f62a"
  },
  {
    "url": "assets/js/131.4d76cba7.js",
    "revision": "95201667f16bfca359ef9d38ff810de2"
  },
  {
    "url": "assets/js/132.b0af6da3.js",
    "revision": "f1c9bc1476a1cbb83534a3968585728f"
  },
  {
    "url": "assets/js/133.75ca6e80.js",
    "revision": "e84832087aff2d5de3f86cf852ae3bcd"
  },
  {
    "url": "assets/js/134.f23e7f3b.js",
    "revision": "5cfdd36e03a067e82cb512796ade7c4e"
  },
  {
    "url": "assets/js/135.d8ea5942.js",
    "revision": "ee6764b1c3033a64677f6af3331716a4"
  },
  {
    "url": "assets/js/136.0e54484d.js",
    "revision": "bee8b275849ca093a438df5d02df6832"
  },
  {
    "url": "assets/js/137.292b3194.js",
    "revision": "994c4953d6dcc598fc534ac7c427bc39"
  },
  {
    "url": "assets/js/138.890f8def.js",
    "revision": "7a62fdfab6fd288f3984b8701249947d"
  },
  {
    "url": "assets/js/139.89d2156d.js",
    "revision": "0f39469154c9fbcd99c7bb46d963e6a4"
  },
  {
    "url": "assets/js/14.ce588a5b.js",
    "revision": "df02ffa07725d26c3aff450d5125d0cd"
  },
  {
    "url": "assets/js/140.1daa90fb.js",
    "revision": "2910c5a7fce6d9bd6a408f7006beca42"
  },
  {
    "url": "assets/js/141.12156ff8.js",
    "revision": "8637298da15e2c2a1162ec6e35fbaa38"
  },
  {
    "url": "assets/js/142.08699f8d.js",
    "revision": "5344156eb668e7ac88d3984498c98f3b"
  },
  {
    "url": "assets/js/143.4b543a4c.js",
    "revision": "3d4450d5e3bfc0ac160482288eef45b3"
  },
  {
    "url": "assets/js/144.ae97649a.js",
    "revision": "3c4fa3d77e75562c66fbcabff4f96c9a"
  },
  {
    "url": "assets/js/145.1a951c36.js",
    "revision": "56f6d689629de97d55350b30e1e76c85"
  },
  {
    "url": "assets/js/146.a1fe5b1f.js",
    "revision": "6059b3e8ddf00d93d689991039cf0034"
  },
  {
    "url": "assets/js/147.949b72b3.js",
    "revision": "1d3007a6ae32ed04a54cd187d4906f0b"
  },
  {
    "url": "assets/js/148.2b7adc0e.js",
    "revision": "ab07479e6d83ce284d920efed68c0182"
  },
  {
    "url": "assets/js/149.56346488.js",
    "revision": "0fcd045d357c88a0e745b351c541b6d7"
  },
  {
    "url": "assets/js/15.7f0ece7f.js",
    "revision": "98e45cbe4b3f1137dbc1dbfaa2fb2976"
  },
  {
    "url": "assets/js/150.cf687467.js",
    "revision": "0172a3cd6b0543d2f47c1be984cb3cb2"
  },
  {
    "url": "assets/js/151.c036e5b8.js",
    "revision": "612b79730be5cd1bda35350d511bb4e8"
  },
  {
    "url": "assets/js/152.a2d55ad8.js",
    "revision": "fb49ee06b21f1a612a6204ccd9158bd9"
  },
  {
    "url": "assets/js/153.c0cb63aa.js",
    "revision": "5b9270aab0801aa748ff81f6b6a5b9fd"
  },
  {
    "url": "assets/js/16.1ce75bbf.js",
    "revision": "8e72b140c01e21656d8d931ce89ce2ae"
  },
  {
    "url": "assets/js/17.53aa5a0b.js",
    "revision": "4c9ca8940eb5df44791ca36057f7b739"
  },
  {
    "url": "assets/js/18.01c6ac09.js",
    "revision": "45ae06a77f199888e0ecbaecede95ceb"
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
    "url": "assets/js/21.b47049b6.js",
    "revision": "68ea10a8d8e9282a5653debe077f4598"
  },
  {
    "url": "assets/js/22.1b28a932.js",
    "revision": "0f868a472b99489bd1ff6347e16452da"
  },
  {
    "url": "assets/js/23.b8c76ad8.js",
    "revision": "7c8f2fc7ba9b742381ef72bb915b92f3"
  },
  {
    "url": "assets/js/24.ea0d86ac.js",
    "revision": "3447fedabc238136c72e38a31bc05e05"
  },
  {
    "url": "assets/js/25.0ec45475.js",
    "revision": "8b3b204e2576ac76cf6f6a8088697fa7"
  },
  {
    "url": "assets/js/26.a24244fd.js",
    "revision": "050a9eb5ae793729f552cf633315f49b"
  },
  {
    "url": "assets/js/27.1eb1e0c4.js",
    "revision": "cb094f3dccce9f412a17cdb2ac5a5c9d"
  },
  {
    "url": "assets/js/28.88c00b45.js",
    "revision": "7f1fa24ecbed08a46f47ad0be8f49d89"
  },
  {
    "url": "assets/js/29.64b9833b.js",
    "revision": "9dd49ba6dad778f74b493fd555221491"
  },
  {
    "url": "assets/js/3.bd3b16a4.js",
    "revision": "3caa258015023020a1043d73accdc017"
  },
  {
    "url": "assets/js/30.69163a3e.js",
    "revision": "ce67c9fdb4ecc92a32152714c6e535c4"
  },
  {
    "url": "assets/js/31.c59f2686.js",
    "revision": "6802219398bc3687ff50b344b0e705a5"
  },
  {
    "url": "assets/js/32.4893d035.js",
    "revision": "abf187fc4e177fc06fe314d055a2c1cf"
  },
  {
    "url": "assets/js/33.70c6ed12.js",
    "revision": "47d2dc512a2ca2d9364ff0be07603e6e"
  },
  {
    "url": "assets/js/34.0d42766d.js",
    "revision": "f10e98daf5d392353db55a5d24b58903"
  },
  {
    "url": "assets/js/35.ee06adaf.js",
    "revision": "d69d95b2c5a9cb9d20f9d9f0090077aa"
  },
  {
    "url": "assets/js/36.d114a604.js",
    "revision": "751a4478736a112b6421465102ef1a5a"
  },
  {
    "url": "assets/js/37.2b84e72b.js",
    "revision": "dd26898fa7c6f403d5a6c8477ef66962"
  },
  {
    "url": "assets/js/38.b99e2262.js",
    "revision": "c94ed953f6ed8e780d2be186dd7b8a4f"
  },
  {
    "url": "assets/js/39.96f3d7db.js",
    "revision": "91dc67f1a6462b0d90633f2766f9067a"
  },
  {
    "url": "assets/js/4.4368ce1e.js",
    "revision": "f7f7c6d6d0808d22192ff40b95fc872f"
  },
  {
    "url": "assets/js/40.fd0a6e94.js",
    "revision": "7980c9eec22d32ba6ee1ff10e336080f"
  },
  {
    "url": "assets/js/41.20dd6297.js",
    "revision": "62e86f814f23dcb0d90c4afbe7a1d7dd"
  },
  {
    "url": "assets/js/42.355dcb04.js",
    "revision": "0a44ca6107b72d89cb00958157a71d23"
  },
  {
    "url": "assets/js/43.a66ede0e.js",
    "revision": "a112ff968748cc44367a1eb35c35082f"
  },
  {
    "url": "assets/js/44.ecf3890c.js",
    "revision": "eab90e56d039e9b8461f9776c332bee6"
  },
  {
    "url": "assets/js/45.d3b9bb76.js",
    "revision": "0c43eb94c99e04b59562d9cbfba114ba"
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
    "url": "assets/js/48.821208a3.js",
    "revision": "c7e3454ee9b9e3287dbbb3257388972f"
  },
  {
    "url": "assets/js/49.dbc34669.js",
    "revision": "339b321946e337cd341e53b1ed6f4fd4"
  },
  {
    "url": "assets/js/5.1daf9d12.js",
    "revision": "ea7c9ddb5604f7cb4cd6333a88ce5f26"
  },
  {
    "url": "assets/js/50.29909537.js",
    "revision": "c8a8ef558c59c9212728b52cfa855a84"
  },
  {
    "url": "assets/js/51.6f19f0f7.js",
    "revision": "456b0709bd6860c82575fcc621c380bc"
  },
  {
    "url": "assets/js/52.fa698372.js",
    "revision": "a2ebf56224979fc06ba1bc26ceed9275"
  },
  {
    "url": "assets/js/53.b1cf79ba.js",
    "revision": "3fc795044e4acf50127d46c5a349f032"
  },
  {
    "url": "assets/js/54.e0da4a9a.js",
    "revision": "a3cba3edd477d20bcd34c430a0838167"
  },
  {
    "url": "assets/js/55.54f7fe78.js",
    "revision": "752b5ad1964557ab49467e8cebc1e399"
  },
  {
    "url": "assets/js/56.a97798df.js",
    "revision": "474b532aff72fc64be75b8598ef1d6b9"
  },
  {
    "url": "assets/js/57.8fe6a0ab.js",
    "revision": "3eb215b115ac10e6a92f282bbadee509"
  },
  {
    "url": "assets/js/58.7ada1b37.js",
    "revision": "0ecfb4c02f00580cc9543845935d900b"
  },
  {
    "url": "assets/js/59.47b3ba30.js",
    "revision": "1c4c17a71ca872923b5a870cbf0155df"
  },
  {
    "url": "assets/js/60.b7fe0356.js",
    "revision": "a6fe6cecedbf79195f48e2658c075ed0"
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
    "url": "assets/js/63.2be7141a.js",
    "revision": "0cf00e522a67e3832fe23e33f4ad8a97"
  },
  {
    "url": "assets/js/64.99a29f2d.js",
    "revision": "5fd03f2be2b7612d7e639bc4abe5cd27"
  },
  {
    "url": "assets/js/65.403d14c4.js",
    "revision": "a7c58852a7cc971a4c99edabba3e23fe"
  },
  {
    "url": "assets/js/66.47c02aba.js",
    "revision": "a74c7e8b51afce7145d08e0e6bdd1bac"
  },
  {
    "url": "assets/js/67.9da43ecc.js",
    "revision": "ba48713d09f2f0f0dadfdbebd1009191"
  },
  {
    "url": "assets/js/68.c6891a68.js",
    "revision": "655a3ab9bc2aa91467518198d4ec6c60"
  },
  {
    "url": "assets/js/69.96b44dff.js",
    "revision": "b25c2cab75e9d91cddadf5727534e5f1"
  },
  {
    "url": "assets/js/70.0e932464.js",
    "revision": "fd6d91dc50b9a687027dd8e9ec78d3a9"
  },
  {
    "url": "assets/js/71.7d523139.js",
    "revision": "0c9903c096e34d8dc505ae205c65c714"
  },
  {
    "url": "assets/js/72.f16d2b60.js",
    "revision": "2477ff1c74aa864483a00e62ab4c2084"
  },
  {
    "url": "assets/js/73.a32b2d42.js",
    "revision": "8b61c1435642f689f185cb74336eba2f"
  },
  {
    "url": "assets/js/74.14f2b632.js",
    "revision": "d1638ff26a7f660ba6bf7a450dcb64af"
  },
  {
    "url": "assets/js/75.d24f944d.js",
    "revision": "7915364a4e7c6e3d1d29305b0b40b0bf"
  },
  {
    "url": "assets/js/76.4037c594.js",
    "revision": "81cecdcc491d952c5cc7ffde01621173"
  },
  {
    "url": "assets/js/77.ac272a30.js",
    "revision": "b7e6873f2e2b5e8cc3b8ab4282048624"
  },
  {
    "url": "assets/js/78.929b05c1.js",
    "revision": "947227c6fc78049e5e768b289ab5cc6a"
  },
  {
    "url": "assets/js/79.34f1e164.js",
    "revision": "3a3051ce5799f43511a68f19ed24f4bd"
  },
  {
    "url": "assets/js/8.aa14ca48.js",
    "revision": "2de2f3176a0ca7ce4ac11c0a0f42ae52"
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
    "url": "assets/js/82.f61f1281.js",
    "revision": "f0d5344a70d9ef0afd493a5d5cfac736"
  },
  {
    "url": "assets/js/83.0619dd4f.js",
    "revision": "cc11ab3c386dadaf42f95d24cc0df799"
  },
  {
    "url": "assets/js/84.9c7005fb.js",
    "revision": "6662c94cb3889e89db6b9209f844ea21"
  },
  {
    "url": "assets/js/85.3da5f41f.js",
    "revision": "13af2b65a1fba30a82cb2e2ae688ccb1"
  },
  {
    "url": "assets/js/86.4a7a7b05.js",
    "revision": "6916dd3d1313205018d6cdf113e47010"
  },
  {
    "url": "assets/js/87.2995f6b6.js",
    "revision": "cc8c27fa87e80b32ee7c90c86bb2d310"
  },
  {
    "url": "assets/js/88.9fcfd588.js",
    "revision": "86efa932d50a191ec63ef2ed1f499aca"
  },
  {
    "url": "assets/js/89.eb15c939.js",
    "revision": "86da8fd69cc0a9fdbfc34f87807050fa"
  },
  {
    "url": "assets/js/9.e9c4cf54.js",
    "revision": "3373514b4eecf131b3c928f363fbb069"
  },
  {
    "url": "assets/js/90.95b764d6.js",
    "revision": "bf2be26a8a32bdd26244eca122a88b3d"
  },
  {
    "url": "assets/js/91.8461c386.js",
    "revision": "6f2efa78602f9b8359651d4844e431dd"
  },
  {
    "url": "assets/js/92.825f2247.js",
    "revision": "082a19823566651259a34ee01d357f40"
  },
  {
    "url": "assets/js/93.88fcf161.js",
    "revision": "8bf018fa5ae4e99402c6be049c9b8fb7"
  },
  {
    "url": "assets/js/94.96be9dcc.js",
    "revision": "edf5379f390b8aaf05cb72589701c711"
  },
  {
    "url": "assets/js/95.ab7a63b8.js",
    "revision": "6645bae26170de0e7dc8e8ce381cbbe9"
  },
  {
    "url": "assets/js/96.56aa9a6f.js",
    "revision": "18e19b8d748b63c36351e6a970a9aacc"
  },
  {
    "url": "assets/js/97.f79bb6a1.js",
    "revision": "8ec782d545551e91c933e7aa21416e59"
  },
  {
    "url": "assets/js/98.62023097.js",
    "revision": "b44e7e98c37c0415dea11dda69d907c4"
  },
  {
    "url": "assets/js/99.1655d227.js",
    "revision": "33b6abcf1ddc07405d4916400101b2bf"
  },
  {
    "url": "assets/js/app.7548d343.js",
    "revision": "ff389e261300b2ec6d45ca51593527f4"
  },
  {
    "url": "assets/js/vendors~docsearch.0b0f1502.js",
    "revision": "eca09ec90e6fd31eb06d1d18447f20aa"
  },
  {
    "url": "index.html",
    "revision": "7d888c2d464587b1b34626805fdec948"
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
