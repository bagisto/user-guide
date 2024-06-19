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
    "revision": "f19ccca4ae95070f5411530a36e4addb"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "a139d8bd34cb1671b645ff7a1debf056"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "f28264e3936613fb6eb605efd01f0802"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "2658898e1e0cc17315ba187a3a445286"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "34eaf452d0d3963b5770045ccb4e698f"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "cd985f194e59500a24f4f02a63f9c83b"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "ed11aa1d855113b4d697060fe3b2a578"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "b83ca4470f34719e564c9eb24af3fa78"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "25ed1fb0bd76394e6fc5e7d5f8e6832c"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "53eb9187e479ad7ce8c6c94d785dca0a"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "b18b17ac91d9cde93163f8078f3e39bd"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "b817a97f3a7e54d76f42cc4275ea7dc6"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "5c669f9143e36593c54146931eb5f1ee"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "822387034975cb925e843f9b7617a9c4"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "8e9535e61275a6bc3c7e4201757ab425"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "c8a73c38105ef8d8d8cb040cc645db39"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "16970697146b580695a34b15072eebce"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "2d0eaeeea395a53a5e5e57bd5fdb36d0"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "2c85b46c5186e77be36ed1b625976fff"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "401bc13ccb23d1ebb0c1c175878c6282"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "470470a187fede0e7f68de7837b4e4d3"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "813d43f2e9b4e33b5729985654346505"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "97a6b64dc90140e70e7ff350bf5a9425"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "af87f143c847008d14229ab0d3db91f9"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "ee42e71d21467d6f6a7a27e2a0742b09"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "a3da925e6bc70c032f097a130f34f1a7"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "6d214ac152f33301fa17761063b5cafc"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "c506f6eb3d075e07b54bc9ed453b6b5f"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "dd592cec4bfdf19a44392fbd601951e6"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "a322757120eaa3206eed8848dd9a4f99"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "ff5c6de61c5edcc2975ce6659272211c"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "d756e29d6d5f90e042d809b37a07deee"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "333fe0d7d04e85046b51ae35317cb7ca"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "edbd29e632cbe37b8b5c2434b488055e"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "d08a663145a5141cec8d61995e0d63f5"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "b4bb714cd01e4af1e1d2936891118971"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "960c7402dcaa0094026e37e962044589"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "86f16d1f69148632553749e979ef9335"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "cf99c6d8ea91f6f20d71f3b0988ae8c9"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "a61a7ed444459d57c52c771f7e3dcd7e"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "c823d2be1555aeb9736520d156aed218"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "e2f42df066f50060ec60ff19e3646223"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "33751e5950036cb534ae71025b62352f"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "7c7de48adcafdd52ba503620fc0dbe05"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "a6cb2b8ffc5dfaa7497fd753e1e041ca"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "79a5ef6e26715111a5fbc6af99879041"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "427c52c71a3f85c4d8f9449daa457b6c"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "2163306d61aaa938e5e889dba3f7ce49"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "671e98d9e1c0107a6017b51d0aad8d75"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "f01d853291eeadde7b517b9f54cf7d45"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "8fa93d1657a26149cb3be920dc37e651"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "b7ecf301e8264fc697baae07b96caeae"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "53b709f74f3313a34fd07ffa9c847854"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "6322494ebb500aceae6009359b9f4f6a"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "0bb1999d23b18de6fcdb9b24f7bbfc14"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "6fce67c608192bea143462da1df1ee57"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "dff73a0291dff3ccf8f30326f733955b"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "40667664923ab3e95d5dc30df3f35034"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "50f230af447d8f6bf427e6857b965851"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "df787b634ea87e96353bb546ea6a5a9f"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "77d7c1fe6f6d2bd3d1cbefc7c92e119a"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "fc95615ce91190cfdd9b3e411dcc4096"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "2b21fa563a1720090afedce69474a574"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "74c736995b6d43a34010dbf9fb687f0a"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "6419fe6155be175f82e8a305fb93224d"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "a2346b291ed0713544c39a0b77c38837"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "bc4ef82d505c6897bb2de3c83ab3a0ad"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "a1a7ceb8dd5075018da36fefe1e74962"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "f187931c86e4a8ea6007264d84deeaf9"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "5731695db1abc0aef9aa306ba2df1766"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "46d297d2ba15dd6750c1fa320c49585b"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "4fc668d1ee37af73e635b7d8da1b3c0b"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "abe28122b30437d4eeece07d48d911d6"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "5bad80f88869e8e6e5a82afdbdf947b6"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "9743a82c829fe3bd4eca12809771f534"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "49bf7943e46a86259bca9bc34651661d"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "81c0cce17fa873a649a853a6c20f78b4"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "e0bbcb89e1dc1674915f51fa4839cec1"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "e42aeef3b2ab60b238a179f4a99465b1"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "163e9ffe7da905aafeb7054e962e4cea"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "43e3143a6a226aaf3d578bc20c01c6d5"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "0eedd67c6be309ad9b8208b160262d12"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "4b82e1e9bebd2a7f079dd0349905227d"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "c6e3a9d1cd1fd6e0a73685c688b52db4"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "4258dae3bad1eb71498340349b0ad31d"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "4b358d268b20a392f108e3fe1a454434"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "3f5325a56bbc23a21e708bc10f28b57f"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "3683944848b36d9541bf3bfaaa24884a"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "ab2661ad2c6e870e3bb36fe9271c0c35"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "5584bc8db30ae381fd7341e8aa7714e8"
  },
  {
    "url": "2.2.0/attribute/attribute-family.html",
    "revision": "2908dda7df93b511ed10c52a4dc51ef3"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "2f4ceb54692622f35a52d2fed1d07d04"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "710541647190e2b4e139c220935a1d05"
  },
  {
    "url": "2.2.0/attribute/overview.html",
    "revision": "a902199cb45355f646576e74ac120faa"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "dba628644b94daa50e24f54a9c3b96a1"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "cf9debad98e46f269b7a1cd7ab7286b8"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "ee65f4ca1e4c7269d66e03a50f25aa2f"
  },
  {
    "url": "2.2.0/category/overview.html",
    "revision": "5286f021458c04761aa9473658a2d04b"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "bed7c632c023915445a39c9bf76c1ce8"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "1cd3be07479f204c64ef2af670b3befc"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "8c3d88eedb74805972beea03e8e02088"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "e438c6e9f3a5aae9943bdc1b368a7956"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "7f6eb8448447c0936c5a9adaa09b6c2e"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "52a7e83005956f6bf3aec108d39f67f7"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "93004d08168f869d470b60acea9f72ef"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "17fced7f1f4d1cf9e3133c6cbf90b306"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "0ffed0635bee6e5b0f4de0ab30387074"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "c98365559fd6a758029d80c1bd7e869b"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "e7c86f6842e0df3e6f88142453bd3577"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "916d5a8c2e2958400ac951c59962bc1c"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "c6ade6b63de141d13399f6c30467eb6e"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "aff8e1ba2e68cbac166cbd0c1870a1e2"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "188a1dcb3e0b9d4199ae869505797203"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "5391dd5d3ac6275978c1673149e244b2"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "78b1554ba21030276df3435565487a35"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "3f928c0cd1ac69bec3dbcd4333925e97"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "9e81367dbcb2633b6505d40332cee809"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "6f145b61e927d6702c07efd69d43c1e4"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "7e29c53899d52ae5a256924c81f83e30"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "3b9436c093ea6c749b5096c554dac9fa"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "a9e0954ed9d33789b709ceda9bf040ea"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "f27ac4aef9c095af52ff7142d94e4a64"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "30a20c7d1567f8148705d252fd27134a"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "a608acdeb1a5f12676abafb913df5d0a"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "7e059b79e1ce3a4f70b3d395e38bf1a2"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "0685b5abc1f7cdfa0241626c0ed52249"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "d3ee100541fe326d5a4036de8c6e1bec"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "d83829e0d2ca67add48d98c32cd50e4e"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "51d418faf3d2b6c8d5841585952c54ac"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "9b246124504c1c19549db176147ae0e0"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "0bef060dbe093984be46df17c346a0d0"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "79f8a441e3b0808bd239b32fafd6424b"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "5d6226328a49abde0b02701e3027c655"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "86564261e4b03f0269ef51dbdecbaedf"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "9f02c9dbf9974216156ca2e43db95274"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "26962278b06b8f4c1c649fabf8d94381"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "93bdfd6879951549e6071201437cb031"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "f41cbe39e874d68c7701556006b779c9"
  },
  {
    "url": "404.html",
    "revision": "f7adde50506c580dc2eabc68a32c0c22"
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
    "url": "assets/js/1.fd28f7bc.js",
    "revision": "74da46c6a4b20f6a6388dd654f00d8f1"
  },
  {
    "url": "assets/js/10.5f3e725a.js",
    "revision": "482c24eedf629e1f00e813f0c6aabd87"
  },
  {
    "url": "assets/js/100.cec415ab.js",
    "revision": "7d56abbe8bdbe106fe20afebdfa2058f"
  },
  {
    "url": "assets/js/101.aabc4318.js",
    "revision": "cf1b8f80bdad58d96fbb4d8e5d6dd369"
  },
  {
    "url": "assets/js/102.ce669fa0.js",
    "revision": "051cb3eb9f40fe4d135cf8ad38d42f06"
  },
  {
    "url": "assets/js/103.c3e427c7.js",
    "revision": "880d4c7a1d9d15249c16c6318ad2e0e2"
  },
  {
    "url": "assets/js/104.efc4d58e.js",
    "revision": "ba2fa1e218674f6e4217c96cb8d13d9c"
  },
  {
    "url": "assets/js/105.629d80ec.js",
    "revision": "6a5a125e58b0485796da92c2c9191da4"
  },
  {
    "url": "assets/js/106.c73b15f2.js",
    "revision": "a8a19afbc68bb2336c3b645e968f8ebf"
  },
  {
    "url": "assets/js/107.138ef1cf.js",
    "revision": "c46a2d9b6e79b18f84f7b80d93bbd0f5"
  },
  {
    "url": "assets/js/108.33794a72.js",
    "revision": "addaf0c020e4113edb6512db58c3e047"
  },
  {
    "url": "assets/js/109.abf75757.js",
    "revision": "d7e540fe525475710281a0560bc9c1e0"
  },
  {
    "url": "assets/js/11.2e67b27e.js",
    "revision": "8f28e2f179b972258f95e7cc1bcdbc5c"
  },
  {
    "url": "assets/js/110.0bded99a.js",
    "revision": "a2aab788775ed73a9c3eb4b0f473063e"
  },
  {
    "url": "assets/js/111.aa89fa64.js",
    "revision": "7dfa3c2e82f9ba9ff34000d920ad9990"
  },
  {
    "url": "assets/js/112.ae34e93e.js",
    "revision": "82d11dac609d0e6d69ac1180a758eb0a"
  },
  {
    "url": "assets/js/113.166eefd6.js",
    "revision": "88dff27df48d6768747b12a1902d608b"
  },
  {
    "url": "assets/js/114.dd3e7c7f.js",
    "revision": "97605094df33d4ba82f14840516632d0"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.c992149e.js",
    "revision": "93de56c9c7ac354af4075bfb3ee0a058"
  },
  {
    "url": "assets/js/117.72bbe8da.js",
    "revision": "26f567d4e71820e6da5213df2de37a80"
  },
  {
    "url": "assets/js/118.e1c06049.js",
    "revision": "8a5d24c7bec8e19bce522e09db2471b2"
  },
  {
    "url": "assets/js/119.4540e8d6.js",
    "revision": "c059361c6ff5b8475c6ad4f8cfd9870a"
  },
  {
    "url": "assets/js/12.0063d0f5.js",
    "revision": "68151df6bf7fe8a4fc746ba699b73bae"
  },
  {
    "url": "assets/js/120.d0e7d9ca.js",
    "revision": "6ec5f155eefa41de930ae30caea49d6d"
  },
  {
    "url": "assets/js/121.0a6cc830.js",
    "revision": "0449290b5400d52bc4db5285d4bc0469"
  },
  {
    "url": "assets/js/122.2f4c6461.js",
    "revision": "db36f63031b800aedf338650af678452"
  },
  {
    "url": "assets/js/123.d01e8ba8.js",
    "revision": "1ce8d4fccae586f50569a4b560af44b6"
  },
  {
    "url": "assets/js/124.1206f341.js",
    "revision": "c5b1fbc45f40834a3447346ff2809a27"
  },
  {
    "url": "assets/js/125.829462db.js",
    "revision": "86a1dfd6c9e44bc963ace2b08aaeecd8"
  },
  {
    "url": "assets/js/126.fac3f576.js",
    "revision": "31a43cd3672e68258b9899c7bcd45cdb"
  },
  {
    "url": "assets/js/127.63a0fd9b.js",
    "revision": "905d1072a020537289b35c6dc93b96e1"
  },
  {
    "url": "assets/js/128.576ae31c.js",
    "revision": "a66c3ae56cffab953bcbcade72bcad91"
  },
  {
    "url": "assets/js/129.1151243b.js",
    "revision": "461990a8ab718e08986094e57e8f1956"
  },
  {
    "url": "assets/js/13.814d80fb.js",
    "revision": "1ae9c57fe629a75591c5f96fef457cbc"
  },
  {
    "url": "assets/js/130.d8d8f1be.js",
    "revision": "bc8863e07d85fa9e9d3c46caa1f0dae9"
  },
  {
    "url": "assets/js/131.c68140af.js",
    "revision": "7cc142a604e1adecb9cc509ced19f693"
  },
  {
    "url": "assets/js/132.5385dbf3.js",
    "revision": "a67208c44a9a33cdae10dab0437e572f"
  },
  {
    "url": "assets/js/133.cd83f4f2.js",
    "revision": "75bc95225fde0e5d3bff12b0bec6a63d"
  },
  {
    "url": "assets/js/134.9e87303d.js",
    "revision": "f37d430193ad9e00e91efd7b82845af5"
  },
  {
    "url": "assets/js/135.33cd6f5e.js",
    "revision": "13baefb8f47c80b7245e57a48d767793"
  },
  {
    "url": "assets/js/136.d114cf4e.js",
    "revision": "d3677acdd54cf4ed113218d66402041c"
  },
  {
    "url": "assets/js/137.d1dc8006.js",
    "revision": "f11abf35b47b354bd4d490555a605666"
  },
  {
    "url": "assets/js/138.928fc028.js",
    "revision": "6b8763b4f334d0c75a5d173c9bad58e5"
  },
  {
    "url": "assets/js/139.fd32669e.js",
    "revision": "058ebff25cff3ee6e90f3e4764b38168"
  },
  {
    "url": "assets/js/14.af77c3d4.js",
    "revision": "3b706ccd5ffecc5841d286e41d797633"
  },
  {
    "url": "assets/js/140.baabded0.js",
    "revision": "195fd90e383ddc0ff15d64d580e998e7"
  },
  {
    "url": "assets/js/141.1021896f.js",
    "revision": "fab709c958535b13507dd258e4b67eba"
  },
  {
    "url": "assets/js/142.0d03d8b5.js",
    "revision": "f69439e096f0db69614d61404872bfe7"
  },
  {
    "url": "assets/js/143.9b4b7bf1.js",
    "revision": "0b9afdb7421e3634bfe4f32f32ec7b2e"
  },
  {
    "url": "assets/js/144.df4b6ab2.js",
    "revision": "68bf5dd24345edc82bb1de09aa819c8f"
  },
  {
    "url": "assets/js/145.d0f25f87.js",
    "revision": "085ea7053d98b82d0047a6449d2d8e72"
  },
  {
    "url": "assets/js/146.f73baf4e.js",
    "revision": "1683bd6c8c26baa1c25a1bd438ac3a86"
  },
  {
    "url": "assets/js/147.11518348.js",
    "revision": "fd7970918f301260523751fcbd28684b"
  },
  {
    "url": "assets/js/148.57e96ff9.js",
    "revision": "6acefd169a759d3ac28f7018f67de0bc"
  },
  {
    "url": "assets/js/149.0c211d4d.js",
    "revision": "18e22284c1d5e0b540ece38e162fd915"
  },
  {
    "url": "assets/js/15.88658fa1.js",
    "revision": "92d414b93c7d1a8a0d5de66ae6244980"
  },
  {
    "url": "assets/js/150.4c0d8df2.js",
    "revision": "3f29212258f341d8e2ffeab21ee9f4d2"
  },
  {
    "url": "assets/js/151.ed1cc5a6.js",
    "revision": "329fe3a2ba43bcd3e92e7c41aedc4acb"
  },
  {
    "url": "assets/js/152.dbf26e1f.js",
    "revision": "b2c40c91a3c4fc9c4994cfafc7a0ccd5"
  },
  {
    "url": "assets/js/153.6209ec52.js",
    "revision": "97fd41b4f74d564851fac4b5c43f1472"
  },
  {
    "url": "assets/js/154.f782e6bf.js",
    "revision": "a6f84aedd21e41231b568f72b12e76ab"
  },
  {
    "url": "assets/js/155.4dac3c9b.js",
    "revision": "e3a828ae04178a3db5eda4709c887a2b"
  },
  {
    "url": "assets/js/156.61c2cc7c.js",
    "revision": "2d1ea22b582b450081542d7fe4c2e3dc"
  },
  {
    "url": "assets/js/157.de295258.js",
    "revision": "b07ae43f9c82336caaaf617415b8445a"
  },
  {
    "url": "assets/js/158.300cc3e9.js",
    "revision": "6f0f79dbeb29c4175dc4be8bb0098f97"
  },
  {
    "url": "assets/js/159.af81ebac.js",
    "revision": "7648cafbdee381a1d2f84c6c677eeaf7"
  },
  {
    "url": "assets/js/16.a9fa1e38.js",
    "revision": "aa3d3556b9485374bd946d3930b320d2"
  },
  {
    "url": "assets/js/17.935c681c.js",
    "revision": "087d9fce614b800fcdf295e3f845abce"
  },
  {
    "url": "assets/js/18.d41b39e9.js",
    "revision": "bb4f5b0c81e4b7d77172a286773e9eb1"
  },
  {
    "url": "assets/js/19.f9c31d95.js",
    "revision": "337c06f463ca8e5a9d8484cd3faad76e"
  },
  {
    "url": "assets/js/2.dbf2de2f.js",
    "revision": "aa3709b037736a84a8932fdab5826a92"
  },
  {
    "url": "assets/js/20.bd8b7971.js",
    "revision": "e0865037673d3747492b28f92bce7639"
  },
  {
    "url": "assets/js/21.3f94f150.js",
    "revision": "f720d5dcbf8a0d91a7035af2f3e10e48"
  },
  {
    "url": "assets/js/22.0f551be0.js",
    "revision": "0007c02f292e81a7ec7848ec9a8866b5"
  },
  {
    "url": "assets/js/23.8efe8f3f.js",
    "revision": "08619da5b8930903e803fe3a747f462a"
  },
  {
    "url": "assets/js/24.fa144947.js",
    "revision": "f07d5ca440acd4d74c85a7edd3cb919c"
  },
  {
    "url": "assets/js/25.5ab1a97b.js",
    "revision": "89d202a178b39ecbc2a04f1bf6086528"
  },
  {
    "url": "assets/js/26.5228e8a0.js",
    "revision": "4e06a0444ae6bec58c82b98aec5e9210"
  },
  {
    "url": "assets/js/27.5ac4ea23.js",
    "revision": "82ee8d59e67714ade85121df84166b48"
  },
  {
    "url": "assets/js/28.db3685ee.js",
    "revision": "b6e986579e0af104819713a0b609c807"
  },
  {
    "url": "assets/js/29.60a91c60.js",
    "revision": "10d0b2e653daa29bec1dda0b2e0967e1"
  },
  {
    "url": "assets/js/3.98b98fe8.js",
    "revision": "bd9975778bc8d5eb5cf2b939d8fd4055"
  },
  {
    "url": "assets/js/30.025668d2.js",
    "revision": "9264ebdaf39389f519f5b8cdfb13b92b"
  },
  {
    "url": "assets/js/31.cbc1a208.js",
    "revision": "88b766ae1194d67a7ac65d80e07112ae"
  },
  {
    "url": "assets/js/32.43847345.js",
    "revision": "8633534e62cbad53d176c2959d6e18c8"
  },
  {
    "url": "assets/js/33.2c0e28be.js",
    "revision": "6b6cf9c011d956c4fa6cc2da7babfe55"
  },
  {
    "url": "assets/js/34.897d1ea0.js",
    "revision": "8c3c67c89302ae824c26120aa9d9e7a4"
  },
  {
    "url": "assets/js/35.ad625425.js",
    "revision": "4635384a3bad1d9b72710b48f7e73316"
  },
  {
    "url": "assets/js/36.7007b989.js",
    "revision": "6117352aa0d2b838afed0bad1830f360"
  },
  {
    "url": "assets/js/37.47e4b90e.js",
    "revision": "a1bf1ec593e6f7d28164b82ceaaa4439"
  },
  {
    "url": "assets/js/38.3e2badf1.js",
    "revision": "7c36afe9cb4089eb25d5f9bb066bc0c1"
  },
  {
    "url": "assets/js/39.2f5b264a.js",
    "revision": "8cf95a6a464f0d3116b069d8188e15b5"
  },
  {
    "url": "assets/js/4.09113335.js",
    "revision": "fe36863acca2a3ed0a95fba7c90d31ec"
  },
  {
    "url": "assets/js/40.dc32621a.js",
    "revision": "36eeec71937236c84d6c02d446d45625"
  },
  {
    "url": "assets/js/41.6e453d43.js",
    "revision": "180412ecc8939eea53d5de5b07a2431f"
  },
  {
    "url": "assets/js/42.ab91486c.js",
    "revision": "37bc847134adfc2621e55dc0f01543d7"
  },
  {
    "url": "assets/js/43.8a9c2dba.js",
    "revision": "260bff78f88dac252be358b9348d0fb6"
  },
  {
    "url": "assets/js/44.be28241b.js",
    "revision": "0c5ec609d808aa43a5153c76e006683c"
  },
  {
    "url": "assets/js/45.7e2cff95.js",
    "revision": "2d831458b7617d725acc35a5ff7b93b4"
  },
  {
    "url": "assets/js/46.724ef2c6.js",
    "revision": "abefe9874538e7ebdf2329f617d173c9"
  },
  {
    "url": "assets/js/47.806592e7.js",
    "revision": "c82894eb46d5e6dfffde4f73615b9298"
  },
  {
    "url": "assets/js/48.5bc65fd8.js",
    "revision": "99748f4fe0715b6a1a6bd66ed62d4eb6"
  },
  {
    "url": "assets/js/49.ada18d00.js",
    "revision": "0c7ee2f0f6b22259a825d9567896c712"
  },
  {
    "url": "assets/js/5.1c7f0aa8.js",
    "revision": "12b3efed7fae51ce82adff89e8c41bc5"
  },
  {
    "url": "assets/js/50.e2a6e953.js",
    "revision": "cbc0da17d07d4dce9f660940eeb93101"
  },
  {
    "url": "assets/js/51.52e085ae.js",
    "revision": "f793a914da4c9b7c18fbe99a615420e2"
  },
  {
    "url": "assets/js/52.7381f0a3.js",
    "revision": "35ead59f87828251493ff0aff43c486f"
  },
  {
    "url": "assets/js/53.742b5f3f.js",
    "revision": "b4a30b3f810b26e7d0f18447bc473169"
  },
  {
    "url": "assets/js/54.b9df0454.js",
    "revision": "90068ffba731fb07439915d4711b4778"
  },
  {
    "url": "assets/js/55.b5f59070.js",
    "revision": "805fae9af5c068caa5860f0c96d84d2c"
  },
  {
    "url": "assets/js/56.fe52dee8.js",
    "revision": "535255e062637e5b931640e5a99b8504"
  },
  {
    "url": "assets/js/57.060b5069.js",
    "revision": "3f714d603f25278a7fe999ba89247497"
  },
  {
    "url": "assets/js/58.4dee6b21.js",
    "revision": "07b1d2bd401ed02882d580b29fef51f4"
  },
  {
    "url": "assets/js/59.b6a4a484.js",
    "revision": "83833be4c15573b62b6cc7dd68dccf08"
  },
  {
    "url": "assets/js/60.22e12096.js",
    "revision": "05622b85c0f4ce9c416c81095eb069a0"
  },
  {
    "url": "assets/js/61.5515ec44.js",
    "revision": "8af22f22910ffaf182ed30d6ee17ba85"
  },
  {
    "url": "assets/js/62.f6664c9d.js",
    "revision": "9e563abe1720e437f5ba278af16c7c9c"
  },
  {
    "url": "assets/js/63.4a401980.js",
    "revision": "46111fe7c1a2b9d54954287bb8b7754f"
  },
  {
    "url": "assets/js/64.bd9a3fc3.js",
    "revision": "14d60f2e4333e592fbb330b848faa97d"
  },
  {
    "url": "assets/js/65.c2f59e16.js",
    "revision": "8a65ff298fb173200dd088710212e279"
  },
  {
    "url": "assets/js/66.2b7b70f5.js",
    "revision": "f2261531f83bd0d8b09bfb3277f7e4bf"
  },
  {
    "url": "assets/js/67.27071ac9.js",
    "revision": "a262c54fd83be5936976ff87d7bd6f22"
  },
  {
    "url": "assets/js/68.2086070c.js",
    "revision": "89659d5133e885e94b385a76768b866c"
  },
  {
    "url": "assets/js/69.52d5867b.js",
    "revision": "502b6c1130c6a7f15cb60a363ce9cdab"
  },
  {
    "url": "assets/js/70.0bedb7f4.js",
    "revision": "e2e9aa674235414208d09af210715066"
  },
  {
    "url": "assets/js/71.45f2a57a.js",
    "revision": "af2b9e57326c4854e3e2e813e5e703cb"
  },
  {
    "url": "assets/js/72.d2b6c85c.js",
    "revision": "93344778f4d1dc985cf9a28b1fc73b03"
  },
  {
    "url": "assets/js/73.bdfe5fc1.js",
    "revision": "6e15108f40fe36ac5391fe318db92674"
  },
  {
    "url": "assets/js/74.16305930.js",
    "revision": "b52d97e5f0f26a22dee950a96b6f129c"
  },
  {
    "url": "assets/js/75.8a58c4c3.js",
    "revision": "2718b7957678cd49ff32bdd52fc53fdd"
  },
  {
    "url": "assets/js/76.752d21ec.js",
    "revision": "3fe6883c5992f153049fe86698fea1b3"
  },
  {
    "url": "assets/js/77.4893d2d5.js",
    "revision": "b506f57b2948ec2214c4cf305c2f589c"
  },
  {
    "url": "assets/js/78.57dcf784.js",
    "revision": "cefa2eca0de07b5a0b3da2cad23fc8ce"
  },
  {
    "url": "assets/js/79.951eb414.js",
    "revision": "004550001309deb392b0b7f6ecbf06cb"
  },
  {
    "url": "assets/js/8.024633ed.js",
    "revision": "08ab9b99d0a7ebf44ce6760959b13ea5"
  },
  {
    "url": "assets/js/80.e0434a7a.js",
    "revision": "8d686995e428da1eedc550a3f2fc58b1"
  },
  {
    "url": "assets/js/81.8107b343.js",
    "revision": "dcb512277787ab65894f2d0dae596a74"
  },
  {
    "url": "assets/js/82.eb25cc68.js",
    "revision": "3dc3021ed5b6ba1b6882a14acfb7d7e5"
  },
  {
    "url": "assets/js/83.661af773.js",
    "revision": "d12483944bc46ef74a314e85f8e16d48"
  },
  {
    "url": "assets/js/84.4d2c2fc9.js",
    "revision": "5b20e68f58c103e3a97789b99838ec68"
  },
  {
    "url": "assets/js/85.e6c8e234.js",
    "revision": "23919ea5e07e888ae3a93a8227a134fd"
  },
  {
    "url": "assets/js/86.4df779db.js",
    "revision": "4a95be0a29414bc250182c34e272cf86"
  },
  {
    "url": "assets/js/87.360c84ad.js",
    "revision": "c5fd150987408227e735e6a5b568775c"
  },
  {
    "url": "assets/js/88.4d79a322.js",
    "revision": "7be9d2b606197fb2d43cf190d1090f6a"
  },
  {
    "url": "assets/js/89.1070d63a.js",
    "revision": "a5a20fc79079ed8f31aa4f9eecc48752"
  },
  {
    "url": "assets/js/9.8511eb36.js",
    "revision": "5c81770a8afe2c0843df98631a77c477"
  },
  {
    "url": "assets/js/90.00518ad0.js",
    "revision": "32c74b8d234c4a95cfe05f6d38a5cacb"
  },
  {
    "url": "assets/js/91.e454d7a8.js",
    "revision": "2540cef9cbca44d4455bc4622151d441"
  },
  {
    "url": "assets/js/92.e04a1e6a.js",
    "revision": "05284b013a140017df43ac029b29ea87"
  },
  {
    "url": "assets/js/93.7025de82.js",
    "revision": "af7f4b20b7cec166bd704f84b05e37eb"
  },
  {
    "url": "assets/js/94.bcea7dcb.js",
    "revision": "6565756aaa85d0ba5000359fd80ac621"
  },
  {
    "url": "assets/js/95.88bef5f8.js",
    "revision": "47d922284cf1470ad4e360bdae631561"
  },
  {
    "url": "assets/js/96.d9e61904.js",
    "revision": "dcf4a892986347a34777bd4cad01e65b"
  },
  {
    "url": "assets/js/97.d638bd69.js",
    "revision": "ad032db2ba76ac710d533adb37103061"
  },
  {
    "url": "assets/js/98.c2ddc9f3.js",
    "revision": "cd9c5e7e04abe608a5c1b8f5e2e125f5"
  },
  {
    "url": "assets/js/99.914b5b86.js",
    "revision": "ed93345bd263a26d361769e24045f762"
  },
  {
    "url": "assets/js/app.62950b4e.js",
    "revision": "ef6eca600ab425d2a907d0a429b31d48"
  },
  {
    "url": "assets/js/vendors~docsearch.2e954425.js",
    "revision": "ea52c609cd35c84f1beeaf0fa50036fb"
  },
  {
    "url": "index.html",
    "revision": "3ae77812f8a18ed49f04ecd5017e42ac"
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
