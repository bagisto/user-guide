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
    "revision": "be9f25c2f3df6805b5ea021cc3af9c78"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "4596ca811ffac382a3027461c08c6b26"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "4ad6f50153b603177bb00a63c09c4460"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "ddeb9cc092daba370be8320c04e9899e"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "add61c6942afe5b177ebd8fc265467b7"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "ffcbf3575c03339f3ee6165faf967af5"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "0f7d9478ec32cbf8543108b44f893792"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "91104b477185e0597de1824473e2e216"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "4239c3c7c350fb9a39c56e319aeb8f62"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "5e78ea0ca547a4685ccc4cd212d5ea56"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "584ceeeb27876dd6962cd29b88cf6591"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "2801749cf7080263f2d3be180fce1dcf"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "cc44dc31f009351de5be1661168be4da"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "e8ea539c80df21d7ed4d2df04e7a203a"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "129f2270237ad0b33459c702120730d9"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "685dc4c26ed6e4e5c395bc870d5e780f"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "c70f621185cbce46d49f05eb80a26b37"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "9eb0b02be402070835e60d16e039f5e9"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "9983ce6dceb66ac8d8c983a8bc88fe4d"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "03c8516fdfff86f5bf1dcfa1e5b997a1"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "5bbbb4b1af9dfab5483900bf9bd7e42e"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "4855d450191e99e4c4f8ee0bf5af2bb3"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "c3f9039df6e9b08941c7d5da7f88476a"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "29c8d0a3e28562f0980c17051088af7d"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "f3974eb40f1609f815d49207524f4c69"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "4eb7a802eab343bd39b981ec5f2b6622"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "d1e0384cdda399bf1271bd61cbdc3908"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "7bdc8d2f8d3468561731f46cd65366c6"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "b1a03265a5d454b1c3ea722901fc141d"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "09d948763618a6338a4ea3a470da629e"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "8e1f839f39e3bca4fdeb29247856355b"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "7f21ae1c88229cabdcd684ed95565d72"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "f9f8c015ffe754fc44154a46701178e8"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "7986cad52cc8fa32519da729ffa9c1cc"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "bcc25793951906618927c31cce54620c"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "9ce944052281b9543969c568ef4b8e7d"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "37dcc2cdd1d9a1662ca028b373ae945f"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "871e5a2e5b0433f7af17bf7dee45f268"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "0a0c9dacf8c651eefdbf067f70085f09"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "eb0635d647573e154bbebed9ba3d607a"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "410d2fce5f5236f44c45fe9026ef3d1d"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "0278a995d42722c1ed645b5226e4617b"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "d3cd6ec9ae2a3996a0b4924507ff85e1"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "d4d0733e10af468189bc4111416173b1"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "50a5ff67ec5416bc0671fcfb8ca6eee6"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "72418e6079fb002b25978f59188ce648"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "63bf4600160b638b13e662ae357846a8"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "a63370c558a2a2bb06a15230c79d2cd8"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "24a222cbd5f7ab927e0ed12e640c9e79"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "ec9dc2f51cc210ec4945eb1fcad9938e"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "fa0cc17c02b708232f41e2b9088c1533"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "d380e3a34fdd363a9a497678f9500340"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "293c68d068f42e4fdf4ec8aa1e9580b0"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "c8bf076bda075024622b389988ab76d6"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "0ff3629d24dd71ec9d4eb6e89eacc36b"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "f21c3f3c1069f8f7ea182ae8ee8ac124"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "090a60a3521af251fe1179ce7412b5e1"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "b2fa58d8ec424cce9b2fb07470a2ddfb"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "a7b01d44b905a71f509b0efdfaae68a9"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "a603efde2fba9631629ba189c76f7e73"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "de6fb2616e56b86639bd544fccfc791d"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "03e1939f1efed6c0d559fdeb1d08dffa"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "9fb828662c3780c31dc3e3a3177973f3"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "f09bd248383580da0f90d1ba53757fdd"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "b2b0d583a2f5c14a5db5a719648eff3b"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "347d383d4d7d14ea58418c3990c2788c"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "d3840dbe3027fd6a90619695b7062302"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "c8bb7ebaeced262dec2bf5279c85a0d5"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "cbd1faaa342034033e94f35a8f522f7e"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "bb8d1c09fab1d161614f2475bd8201f7"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "9cb62b8f0393f081fc3d8f923cca5b8d"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "087de4978c9e2f36ba25650e3aecc5fb"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "35217381b217afce488127878c685eed"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "635725e6792f9e36c31b0d9c562eb87b"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "c4da917ac87f0ae3e3cdd1fa7ad0eb6b"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "89527b4c63357307d96fe14aab9ea4fd"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "3fbbd427bc9b7d684a7766bba3c5f126"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "57f95923e6b50a34315bcab9233cfd7b"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "b010b4951868474f2c16d17e4f705a71"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "29408758328d93109141025d0e3a213e"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "d08ddfbb014befb46c73d72a4b0c1bc4"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "df2c1b32f27795a7c61ff1f5f3af6b6d"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "21447e355e92081ec17e0efbfbcdc6f0"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "8227849d8009310c29f229f9e727ca5b"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "7dda2739ac94fe45ee622d8df0f1bdb3"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "9b2ec8bb88f9e2dc5f84749edba9e84d"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "9ec35d8f68d52699a66e7866abe7a68e"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "2e232613490925f9b2a8abf98f873811"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "37ef63cd7555b3eff93c52ff838ffe33"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "d227d1da2aad36628738986ac2e59ba0"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "6eebc6dd6459473927daf95921acc6bc"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "361b75875738f03b9813bb9aa70075a7"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "588caa1dd55678d50aa1dd6375326e9e"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "4ede42ff04d71773446f6be0fce72fd5"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "15efbb32d37a9b948dbf4c4d68dca118"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "1bb90fbfd2f51d0ecfaa8795a565bbcf"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "8b532e60908f7de8518e8d2946fca277"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "1e46bb7c01e2abecf274281bf7569b94"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "111906dc4754957da21c85c373c4d7b5"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "c31bc2fd5c974068e20d09b8816e97cb"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "c204cd75c01acd223c1cea24ec7bbeef"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "30dfbce062980ccf3ed17cead94a65be"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "269443ddafcfa81f1575c9c0ce935f47"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "c98833a3968a47b384f11cf9654264b3"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "19a1d8a49c9e6df5c40d3adc0b4e9917"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "8ffd31b6d9588fbdb75e9c449520ffb6"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "723375a68932685afbd67234f56a7261"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "3e7cc39e7128ffd80a926775c50f8f22"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "12425685e308d68d75672df5ca4a4c33"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "ef20c3ba37e112c0115ac8c123e7dfef"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "1f7cace2a2b7a2aeaf0d629229c72836"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "e2109bd7db447f1c109ad4e013815e03"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "ce4e4c788b8845d806a3fa1c3898987b"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "5345eec94ed1f25a367dfdcbfcd4c92b"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "908a93eca4a4b00f89296f9cf7ba8ea5"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "a90b0d2f7b326efbb810f584db90262d"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "9db648e51597cca0e9cc98dd4b0de38f"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "5cce4188d054efa73c068faa71a8a309"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "9ebfbdb8066f2aeea3ea0b9e2c2bc071"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "eed2ab59775d40af89613accc82d6921"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "6d5fafdd1054c8b3290eb3e26e7cff27"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "0df76cb59e3312cfbc1444f6c3a1ad47"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "db17062784c4f060302845fc671ca8f0"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "47a5ac2edf1f4bf6117490c75325e383"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "e422171a3f73b39f8880c52878e1ef83"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "e55164de808f66697b3df95c31f7055c"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "ecfc03cca6479c4f4ffa0dcb30adeabe"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "fc650d5b6d40ac0233ba763f2f1866fc"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "45249bdab347951ae866eb868d826b11"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "b03b553d9430e359fdaed01d629a46f7"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "e104d31e23aca9e61acf71ca5fb50cdc"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "6eed9c55c92dd05a2e6865c7de9dd6c3"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "0654e93dae779a3ccf522911891e9c47"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "ce99d3314ecbece61ede42594502fedf"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "e792b331167b90e1bbda4c76839db796"
  },
  {
    "url": "404.html",
    "revision": "18ff9bcd5e11f0d762a7334059e78298"
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
    "url": "assets/js/100.8ac1e88e.js",
    "revision": "fc1dfbd0635c2bcae2f9578f87ac7334"
  },
  {
    "url": "assets/js/101.0ac40adc.js",
    "revision": "ff176cee32ca6294a59f4a50d1494b4b"
  },
  {
    "url": "assets/js/102.fa3eb99f.js",
    "revision": "b40167b6c20e20f410a282622b797f08"
  },
  {
    "url": "assets/js/103.8fbcb39d.js",
    "revision": "a6c6e40fdeee3d6846df1ccd37d20593"
  },
  {
    "url": "assets/js/104.872f12e8.js",
    "revision": "65f7435b46477501d5109a6e4c69418a"
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
    "url": "assets/js/109.7db27cad.js",
    "revision": "464e36e50670729b6e7b13d523f6989c"
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
    "url": "assets/js/113.8ce8a0e8.js",
    "revision": "f4d0e19deb1cb827581a66086d50cd5b"
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
    "url": "assets/js/116.28db4677.js",
    "revision": "3264c3a72f753232a26e3d6fe7d8c925"
  },
  {
    "url": "assets/js/117.d544ac99.js",
    "revision": "d31d5878552ee63d66c1b8e1235344fd"
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
    "url": "assets/js/12.1fa59bbf.js",
    "revision": "d047445778c43a0aaea6a2a248baca40"
  },
  {
    "url": "assets/js/120.362db6c0.js",
    "revision": "916fe37a31f16391b6d1f2d24d05c82d"
  },
  {
    "url": "assets/js/121.ab84bf47.js",
    "revision": "77ff5be23b345e253917848a11d72ed5"
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
    "url": "assets/js/126.898a0f3c.js",
    "revision": "dc9698413e8272678537d1fca8dd2951"
  },
  {
    "url": "assets/js/127.b57b4cd4.js",
    "revision": "398f5a0ebcca87d47965ab18c200635f"
  },
  {
    "url": "assets/js/128.f6e6ea62.js",
    "revision": "b0d0dbc859f19f1490bf4bac79872b57"
  },
  {
    "url": "assets/js/129.78d3c9b2.js",
    "revision": "8f8db069ff8f2c609651cbc32df5ae5b"
  },
  {
    "url": "assets/js/13.eb4f1f99.js",
    "revision": "3acdd722211be00554e36ddaae59862c"
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
    "url": "assets/js/133.b7fa8b98.js",
    "revision": "46b4067d4a53fdf8c3ebe2fd45bc27d9"
  },
  {
    "url": "assets/js/134.6e523c43.js",
    "revision": "7789bd5b5c70510cb2a3508de22fde01"
  },
  {
    "url": "assets/js/135.8aa28e04.js",
    "revision": "b536fb4c9844a1fb0477804581ffecdd"
  },
  {
    "url": "assets/js/136.410d3514.js",
    "revision": "69e3bbf5600a0e70f36a5a3b2e27180e"
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
    "url": "assets/js/140.a346945e.js",
    "revision": "c244ba3709d6f76bf3988eba655e47e2"
  },
  {
    "url": "assets/js/141.3dd7e6af.js",
    "revision": "59c9e2c47c7da2ab6edd98aa5eed5c46"
  },
  {
    "url": "assets/js/142.d1073579.js",
    "revision": "5cee83d477fcb7f9441a6527a6d80420"
  },
  {
    "url": "assets/js/143.89e00d3f.js",
    "revision": "cd827c42e2cef294b1f9f2e4f6b355b5"
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
    "url": "assets/js/146.445beb68.js",
    "revision": "9dafbfe6cc9c0d58150205f3ed268e0e"
  },
  {
    "url": "assets/js/147.21ed3cc0.js",
    "revision": "6389f9eddf2601f7c764e64ea9ec68db"
  },
  {
    "url": "assets/js/148.8ef31725.js",
    "revision": "632a1c4888bf96fb2dfa6eaeb8de0dcf"
  },
  {
    "url": "assets/js/149.c9e3c6ce.js",
    "revision": "35e725847a76a8eca5d3735cb52d4605"
  },
  {
    "url": "assets/js/15.3c4b362a.js",
    "revision": "237c3778834d6bedced1ea202a8523a1"
  },
  {
    "url": "assets/js/150.f02541c4.js",
    "revision": "7e869d95f3125daef27eaf2ef86457d7"
  },
  {
    "url": "assets/js/151.72ea98ff.js",
    "revision": "fd226ac02c0e45088962521fdce43405"
  },
  {
    "url": "assets/js/152.045c34d1.js",
    "revision": "d20d6e6e828bfcf042c7ba9d16754690"
  },
  {
    "url": "assets/js/153.565888bb.js",
    "revision": "755bbf92e033a5659fc123b02aca52a0"
  },
  {
    "url": "assets/js/154.a98923ba.js",
    "revision": "6192a4316660583126f46eff43f4731f"
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
    "url": "assets/js/16.a0b9d834.js",
    "revision": "d94b4455b38c21dd7758613e4e8687ab"
  },
  {
    "url": "assets/js/17.9aefd346.js",
    "revision": "fd1075a76fb7e816fb767b20131817da"
  },
  {
    "url": "assets/js/18.307c4238.js",
    "revision": "4c29482e93ce48906fdd4010577e1747"
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
    "url": "assets/js/22.771c0166.js",
    "revision": "573b878797a5f2ae5d11572aebee6515"
  },
  {
    "url": "assets/js/23.e56b6ce6.js",
    "revision": "c8c4c718d9f726a8ad21286eba7f6c07"
  },
  {
    "url": "assets/js/24.2b0a9f8b.js",
    "revision": "e1827a8bfabe318bbd3df0d7a998e269"
  },
  {
    "url": "assets/js/25.b8fd4255.js",
    "revision": "f3cf9d9fb4474412e7a90fa81a318623"
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
    "url": "assets/js/28.3eaea6a6.js",
    "revision": "23221ecf1b9c45c3aa2eef644ac4f0ed"
  },
  {
    "url": "assets/js/29.85ba08eb.js",
    "revision": "e05caa1c4b9b169a28b94e0c523d4088"
  },
  {
    "url": "assets/js/3.9bc1bbdb.js",
    "revision": "6311c820a5772ab701c2e2b15678cbc6"
  },
  {
    "url": "assets/js/30.dad5522f.js",
    "revision": "5ed042353563b86699febe2f34d59153"
  },
  {
    "url": "assets/js/31.bcbdfdcd.js",
    "revision": "ae840c5b2c69c2c40897e3749f0de52e"
  },
  {
    "url": "assets/js/32.97d23735.js",
    "revision": "8863de8c8fe4cafb157938559984706b"
  },
  {
    "url": "assets/js/33.2c0d7a91.js",
    "revision": "5ef5701923180e61498edd994803f5b6"
  },
  {
    "url": "assets/js/34.b2a9ccc2.js",
    "revision": "ad6b0886ff0c5f79e160099e67979fab"
  },
  {
    "url": "assets/js/35.db9ed3f6.js",
    "revision": "774104752c66bd900ee8d4a372f94de7"
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
    "url": "assets/js/38.d7ca28ad.js",
    "revision": "360c4eae18025b81666be67f2501bd3a"
  },
  {
    "url": "assets/js/39.55b5cb99.js",
    "revision": "4e6d1aa598b1582b60e350922aaa54d4"
  },
  {
    "url": "assets/js/4.43af1ef2.js",
    "revision": "580abd58dfb88e13a464ea128d2430cf"
  },
  {
    "url": "assets/js/40.c3cfc249.js",
    "revision": "3743c630243e6a5fd061911045e108e9"
  },
  {
    "url": "assets/js/41.9b12bd05.js",
    "revision": "bc18449e7bd44f557b96e2c8957fcfdc"
  },
  {
    "url": "assets/js/42.cee82bfe.js",
    "revision": "8baf30fa59cd8383750d29aeb622e6d0"
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
    "url": "assets/js/45.276dd9c1.js",
    "revision": "048c268a3497c90572a5d895ef027130"
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
    "url": "assets/js/48.cba18e80.js",
    "revision": "32fc0453ebc00d741a8f99e9adf057b8"
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
    "url": "assets/js/50.1edb3daa.js",
    "revision": "289d94698dc077ff896cbf580efc080a"
  },
  {
    "url": "assets/js/51.81c93523.js",
    "revision": "7b6fb6cea8c7fb0d789424a0a98a5bf3"
  },
  {
    "url": "assets/js/52.c5c444fc.js",
    "revision": "ced43873704225cf746106aa274658b3"
  },
  {
    "url": "assets/js/53.3567889a.js",
    "revision": "dd570f93f84bae90b2f133566e84664a"
  },
  {
    "url": "assets/js/54.66957dac.js",
    "revision": "d4ddb57252b95e6a25b3201bec1c9a26"
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
    "url": "assets/js/57.bd7c8c9d.js",
    "revision": "7a59003879863c6d64246fe02e7a5c88"
  },
  {
    "url": "assets/js/58.e92099f4.js",
    "revision": "9ce231a85f94f91f6a409be85417676a"
  },
  {
    "url": "assets/js/59.90fbd3d5.js",
    "revision": "ebdb24160b9c09079efe50509a9b0b11"
  },
  {
    "url": "assets/js/60.76b03dff.js",
    "revision": "35589a8b3d23e0649f74d5fbdb00a795"
  },
  {
    "url": "assets/js/61.40b4c64a.js",
    "revision": "be986127ef353339394d7e5ba1e28289"
  },
  {
    "url": "assets/js/62.8d0cb9b8.js",
    "revision": "ba142e1a532d4a6ea03f053878e4af24"
  },
  {
    "url": "assets/js/63.9f3d7106.js",
    "revision": "1069ed97e5660bb711946724dbb26549"
  },
  {
    "url": "assets/js/64.bf8f12db.js",
    "revision": "3bb6a2842b692705aa1c6d9779350af3"
  },
  {
    "url": "assets/js/65.e0ba6cc9.js",
    "revision": "9a028ea974be272f24d7a74b5311d776"
  },
  {
    "url": "assets/js/66.007492c6.js",
    "revision": "cf7066ecfa8639bc9e6671a6c93548ca"
  },
  {
    "url": "assets/js/67.baa9487e.js",
    "revision": "fb1a3994ffc05294a43945aaff7c247b"
  },
  {
    "url": "assets/js/68.0de8689b.js",
    "revision": "6d3936ce0e67305cb3ca37062eef1870"
  },
  {
    "url": "assets/js/69.ef4f9d9a.js",
    "revision": "a5b77ee2465bd9d453a1711dfbe24505"
  },
  {
    "url": "assets/js/70.05bd248f.js",
    "revision": "4dd23b1a9fa8cf42fe77cdbd32c97dae"
  },
  {
    "url": "assets/js/71.645bb48b.js",
    "revision": "2bec71ed9edeaa70d9832e69b17fa17f"
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
    "url": "assets/js/74.b6b5bc6f.js",
    "revision": "c0522dbf26788983cfd5fe81fd92a825"
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
    "url": "assets/js/77.3351ba02.js",
    "revision": "e6897dcf3395c17c1a948b65527cf3ae"
  },
  {
    "url": "assets/js/78.a9f41683.js",
    "revision": "31734aa7635119d911655d7e42f45a69"
  },
  {
    "url": "assets/js/79.b1e54c09.js",
    "revision": "45249a08cb09bbe083a12f65fe6c0cc2"
  },
  {
    "url": "assets/js/8.6a171040.js",
    "revision": "89c17167df6891768b27a5e6e5816906"
  },
  {
    "url": "assets/js/80.a3fb2ffd.js",
    "revision": "8cfbf4a496ed876b652b4f6d0fe4553c"
  },
  {
    "url": "assets/js/81.7a05f967.js",
    "revision": "200a82ea7ee2324fccc65247baa3a230"
  },
  {
    "url": "assets/js/82.a2277c2c.js",
    "revision": "17b56e62eedb297c17d6bb79e634b3de"
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
    "url": "assets/js/88.8921f4a3.js",
    "revision": "7880364ff3ef04353ba7a69f877b4c75"
  },
  {
    "url": "assets/js/89.63c9bc5b.js",
    "revision": "d207849521a0c99df68a8b19f19aec8a"
  },
  {
    "url": "assets/js/9.a1258eee.js",
    "revision": "f8b2e4e65cd7110592dbfc3d3a90c99d"
  },
  {
    "url": "assets/js/90.1133fda4.js",
    "revision": "9e75fb2d71602a89bc285dec705bac7f"
  },
  {
    "url": "assets/js/91.4551846b.js",
    "revision": "a1395a3e5ac709decb977dbd5c29fe58"
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
    "url": "assets/js/94.f07c37f3.js",
    "revision": "894d4044e4579782eeb1b31be814f972"
  },
  {
    "url": "assets/js/95.f74e834f.js",
    "revision": "bc91e73d4567d187b2eaebb15cefd9f7"
  },
  {
    "url": "assets/js/96.93753600.js",
    "revision": "a8d4342355c9103744872a12175d9b0d"
  },
  {
    "url": "assets/js/97.afbab4ab.js",
    "revision": "5f0b09187ae587d698455f1701cd47c4"
  },
  {
    "url": "assets/js/98.fc0cd275.js",
    "revision": "d1bf3dd7f6e52ae0a17075664f3116d0"
  },
  {
    "url": "assets/js/99.c3c53255.js",
    "revision": "db542332b1716b727dbe65b229ea5ff3"
  },
  {
    "url": "assets/js/app.204fde01.js",
    "revision": "6841beb04aa706d7dba9cbc6df30dbb0"
  },
  {
    "url": "assets/js/vendors~docsearch.390e501f.js",
    "revision": "7c1a83405f3cf8e8630bc517595bf2c0"
  },
  {
    "url": "index.html",
    "revision": "dd26355fc86199dc0f3b7cd0522bc5ca"
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
