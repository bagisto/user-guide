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
    "revision": "70989dae7b4399f6edac912524a4eaf3"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "55d76d22961f8fb3fdcdff1b2725eafd"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "936efdb7c347c72a0c0f8642438be8f0"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "c7d75ec3483bdb91d1f6e44451a2f938"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "b5d2ded82f4e73f4cfa9b4965e75fdc5"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "aebfd4d4c10c55b2462b1f47c5cf6efd"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "f92b8d3c0563541721bad62308daf2b6"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "b8c2d1f47cabdbffa056ed811e10c4fd"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "5a9a557846cb084f4a8432b6a6ba8c10"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "723363f631f2b5c24cc2823839fad58c"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "22b266340e0d9e2314a4e6ec941aad5a"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "d0dfa751cc5307abcb9178bbfd1d18e5"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "3c63fe1bfda035f0375783504b0fd1a7"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "707489a75607a15676e7cf703e3f4b51"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "07ab6b7f2d4af9ad10083cc2be931530"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "14dd3ea44e6529c56fe3ae19576d2398"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "cf82c22c51ed5df3887620b4a1c24283"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "1fb16c40831431abdcd72101f26ebea2"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "6c4e7367329524b2877fae07df848173"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "f7c3d9245f20e778adb8a8f0dca63b04"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "7a6aaddf6921fc39f6c8ae8184979045"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "b351f16f219448f93ec736da0a3debf3"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "6fe73456e68f0395f1839edc27d175f9"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "e12f2898d0c4e6a4933463bd78ef91c1"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "08afcbde0d1ceeee9ecbebaf78d9a742"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "be457df0e34d2cbbc9452cae30595d45"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "4cf80194616aed17967845c11198d7f8"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "0381dc6590184332306a069b1aef7be3"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "3b52f34c7d760c9e4cff82919f5faf6f"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "d0323cddead734b767ce63567765721a"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "1c9154c0290ff2d4c3750ada37392b36"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "2eb020bb92a140f37a16700f698b1ecd"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "9db4dd6ef816854791aee793cabe7d5e"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "29f9d81f3b1315d122611a56e6a8d00e"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "dd8421716efcda7b0c236d57756d4623"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "d3cbc16a59758553335eae3cae984bc4"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "9d918deb47c5eaefe30e6a0c040e4d39"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "f25030835e5257b22089de2868723517"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "5ed9a34bdde02b3e2cad3c8d7c800a4f"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "6f936bab021226677bb1f85ca73f8cb2"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "3075b20a7ee1fe90081bae72d20f949e"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "c90da1b2640fc6f5aa255f907d459172"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "25d0108a4c58325d2415ce51fca05901"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "f6cc407b08ba6ae622606347fefcefbf"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "5a9e657c5488928c3643a7c7560529fa"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "27c8321ce1ee3def6c3f12580f7ec117"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "81715d5b3b0913f6054fe267ae118880"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "83b70e8d1ed175182a29ad480ca41b62"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "51d5bd17cf96ad84340e1746e3abfe4e"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "6851eb1d6fa7b2f81f515e2aa0b6bf66"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "a21c5a17dd818b2436626577299e396d"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "4385095da9983afa92b9316386e8270f"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "c2e1ef75ae41e77f4fbfc6c608f71315"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "a3b29c4cf545f061ae719e5eed13552d"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "1184703cbdf9ec6a504e9bd1396f7789"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "c3da5201da748bfe21dee5c3264ad39b"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "289f981f507a645e47efc8375e0985d6"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "4cc89041c5d75ca907d6ca2756f91746"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "f4df24ee21bf43a8cc9b5cdfd1be8432"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "56d89bb0f9f10ac475b5fb6161f14f6b"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "86c21880aff98354a755d35c4a503dd9"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "c83c9d718caaf31d91fd61dc5e690615"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "1ddff721c5febd7553e814fbf719251f"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "ee4f94d96e04a9f3246652549ea664e6"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "73bf33814b28ecfff2f5ec7ad493144f"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "5be9eb6b079cda94360e5a98a464c90d"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "c105308a2e2e2f3b8042d1080057f66d"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "fe6ea9b7f664b8693c8936925615c868"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "9f4f836fc234c70f246e026fd0b94022"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "514c582cb9ae8bdbefeb1e8179c731bb"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "42d3192441d683ecc475eec500c7a231"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "382f00c527c73fb3b8169f475cbc3d0d"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "9839d30d50b7cfb706025b06de5c0426"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "f8195ad2882ce162c6817b622de367cd"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "2a6cbac87a603f96465bda4dd590eedc"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "d916e88381901a3996c4b3464e14474c"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "e2cba8a21f56f272b09bfa6aade6c2a2"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "8796b006d08823e03e6425431359bdbf"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "0c0e0350497b4bfadc33e14495740968"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "4272896808e60203da1254e869060f6d"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "cd84ec29c88a6a5a7ef2391295fd7b22"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "0572e8157a37cb8c3ba75b715776da74"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "4545e7321da3f79ed7d1498e6d112250"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "e045702e9c9ac2ffad33507aa72a19b6"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "54dc6fdf168eee50b8fc345dbb90099f"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "cef149e49149b0d6c51320b5beff919b"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "f71cc18520cf02f29838712c6b135d97"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "9adf80a990d8f94e235985d8922c1118"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "c0995d5ce560bb419d4f90fc454ca631"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "5d61d97bb5072735821b92f67fa6d31e"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "d958f454347e36923f26397c23922efd"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "90bd3051a20c16c9c4c03f1b3353ea89"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "784f8fc66335869913c7090b4e7996e5"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "ced5a46bb464461932ccfc075e0592f2"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "c01f2163edddc0fc12c1da137aa2055d"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "5160f53c402314a53572aab76292e6dd"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "9c82f6874e4d22e2705c94f0dd9e3f09"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "1057555e414ec0f7b435c87ab64ec804"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "03187b5f1378f6980e3e58788a3f127d"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "76f231d3d1143a57fcbf67d41cc8ea68"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "c59dda304aec4c77d3d5f2edafa10e38"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "8c9893e4447f902d5a45851fe37ba9c8"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "7c0c3f5b246b6aaadfb47af8c579efdf"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "d843000cdbdad3922dded7376ac4ebac"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "3e80bb033fa11cac0aae70f9e97a7bb6"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "d29da45a1679ce2506cc8e35f1a3b9f2"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "0f49d3bceedcc55f0c7ca5019d58b3b6"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "475a5bd6628b0dc63bbdfcd10155d307"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "826fe099cc952cda8d9c0c07bc162fdf"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "847e95b37dc95883e8e020af8e06cef7"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "9b50e1b344daa27559c423ec9abb48c2"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "7de81acc7c3df8f93e175012b7e7f585"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "b2a561f12282222eedc6a570208e24d2"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "a65ffa83751d6ac697cab47c6cbd861d"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "b8ba34cec2abdec2a2ad15286862a209"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "1498c143bd5143ad119d4bcf9aa4b122"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "efff5c4a76fb344b86ae8ba2629cea4c"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "74abd1fb7913a4b468764ba662997c8d"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "5c8198778b8d2d3fbb0dac48eae7b26a"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "9fec5ce7e6bbb602956dbcb69e4b6959"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "c6afe180817a621144ce4e43db1ce71c"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "0e15e0d346d47f77711c59a5ebbc57fa"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "2a0371532eee21233a8a60370dc1f93b"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "8bc513c2a88495350fceaf26b2528329"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "c0180bb16b5020168e490aa37993acaa"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "917cf5a695501f13bf6faa7be6f13d7c"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "11e9e2b7bea9ec8e9bfa35a06caf4290"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "261218abf0cfc0b16f03dcfcf5590ec8"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "685402e9d4434e9ba3d14043a8c2aea1"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "45cc59a78ee804e3b422c69ba4aa6a17"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "f4e41ecb5f88694b79657349270dfe11"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "ba8e30a66cc792b2416e70ac42f35b98"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "fb0fdce85bb82e449d7f26356d1bd9e9"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "dcd2c36f50f8f25981d4022f3f139a09"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "2bea9eadb49fa7e91ae3c7261b9ff2b7"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "d8999b724045a1cdd2c58111f97f0f6a"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "1148efb22b51541490021a653dd30ee9"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "81b7c937c05b4e15300b24bc4cbf64af"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "8fae2cde8cba0db2edd0a3b5096d0b3d"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "ecb60609ae2ded109a3230ca4b7a6099"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "f14f94ac401c0d7c2ca6c3263f799ee1"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "165b27ead3013c4d83e54f4bea34179c"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "6ad52d278e469f1b56565eb0b2f93192"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "9ba8aa856cda0e65e8558408152e133c"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "a1aad2c031f67ffebdfa0c4f0a477814"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "01dc10199fc84a49577fa45fa49e3c2e"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "0c4744fef16eb6e6c8cd9a433c3f623b"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "fefc2aa9c1b5050592e86ee55acc7eda"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "1aae1d33470628dfbf4f707e47e90d19"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "1c2846af10f94f4b71995d7d86f3df8c"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "409d6b50411ab35bc7675bd844287e2b"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "273aad0ace7f6817b61560f6dff28e7e"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "b289379bc5ca8571865f3cb51ad837de"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "bb4551aa1fb4f86daa358cb6310d5798"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "f90fff096c83fe91073cde14fdce4670"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "b7493308b855e00989b475f3c30ea21d"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "b9aedf63aa9c1ba505e4e08e39e05a1d"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "a2564b77e8730fb7b5009b3806d14b5d"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "eba4c3609ab712fa4d9e0c3530c9a5ea"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "59195407d7768e26d3072ac57ccf27dc"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "24255ea8f7ddfb7f1f8fac97d67412fc"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "6c066712f697d2b76e90781f73449394"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "5fd5916ccc9f2f200ccd9446a0e0ada5"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "936aa287adf97d4bd9dcfdde08356eca"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "ffcc63b403551bfbef78b196900def41"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "659e72db0d178c9e377ece395b093f59"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "ecdd10540e4a5c153e986ad988afa13f"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "add668010babb8608b521b84ee4cbc29"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "832e1f80a36e186a25f135048d0ecdcb"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "55c851a08476558bbf77a6e1a4955b44"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "d4804a3d6b15a36fac716548b752020f"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "b7ae2040398e6315f8b5c9fe52040ae8"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "6f6ee2f4319b6ccf10f4fbf3076147cf"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "d9de218279b80beff26d4fc79aa1bef6"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "5a5b97287af4011aca30d558c1756001"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "e184e9b189ab0539d6783271caea007c"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "58264b0c4370fc3453a6d50abb2b7941"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "24889f21eae40432c1a1a230dd35f55a"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "359d5e6995f215446b7470d14c7d0373"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "b808a72c46f98a79cb621fae764a2fd1"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "8b4e86594c03d3d2bcd1e34212773ce9"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "bf4142308d487b1564eecd9877ffc705"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "25d12ecbf592e0ae97610b073a8a351a"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "64fbc0e13be7fadecddf27a0ea0b7df4"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "42ad23c13b17e7b43b6717779c7deed2"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "916323f6798b148693902c7509517e6b"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "70a155fe1b9660e7c140eadd73fddf75"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "6ad07247a27da074d4d3982f5c41434a"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "6b2f24886155bfec4be28b0ff7499d63"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "1dba6513e2e035a23a9264c525b2c3a6"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "87489511580f92d023247ed475ce267c"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "3dd5f2f8a8e5edca6d5f67acf2c9135d"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "f53179f2347952ce0ef5e655db1aeb4a"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "94f301c5eb6ed2c5522143926dab4bc8"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "658c90617e2f46a34a12d7ee80b55ed9"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "018a49d97b8ebee02e2733991609c80b"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "ea00b48348238fbc242d66fde93513e6"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "9f1c8afa87cc925cb1c3dfe2a8b1dcd5"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "7b60016423a22206fa7413c7c277dba9"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "89570262f4090441817cd51765af9831"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "8fcdb8b510a8c43f46a017a6b9075d36"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "c1522d4a9d36a275eef41cb8fa6f2a64"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "87bffc7aa45e7495ac9582f0bccbb717"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "a0ad4e1d87b30d2daa48d45f646048a3"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "cdbc33e0d87b6641dd8561ca3939f057"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "d0b316904fc96c15ca485e12a8d2f35f"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "7e83f6ba82548ea4a057dec5d7b57c6b"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "da79b79b829f054d124c116b75e9b008"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "2f89ad27c7609fc353fa4914a5c43f93"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "8de1361315b893cb931f2a6eed475ad1"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "e8abf849970ed25f01af397041434b1f"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "3703e7a9ee74261c801288c5ce682bcb"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "4b0b25a2978af326ca6776f5990dab21"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "add91ed20d31be292ea800d6137b1ada"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "e703b260386cebaf10064b384e618bdf"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "fed1e6fd85812ef1d2a451cdb26b8375"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "6c246e0318783c6484243d8664c1dc6c"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "921aa8b45a2ee5088a555bf62bf1da80"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "869cabd705a25f34af5c7af9be33d999"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "777a9c80d669579576bac05a42ffc6f7"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "56c3eaf35875d124cc3f091f19142bb7"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "203dfa1afc25db2460bb6c72faef8243"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "f77cad25a0df1c3bff936b64420042ad"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "c39356db0df9e96f51d2cd89e4eb2c00"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "d9341f68b76a237e5a6b5bb13fe0b70b"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "070b1afcd8879365e2d78c4790edede8"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "b88852f3f83e1ad48aa8caf558b8686b"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "9f1bc416aa785230c36a447c7242acc4"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "eb4b7f3dcc5ea2a6ee2dc92e812d4295"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "55c6f32767daf35d8aa80214581bf07a"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "4383d8340d580069ea636aa8ceac0eda"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "a3106c0c6e705944609c0a80547c1f56"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "cfb6840cf3ca13e03c010e00459214f6"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "655d5eb185532c1289a2a7995c3d960e"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "b3f24cb46e732f4465d124563a40e919"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "6e40e3a83e85ec7686d62fe9c16ce766"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "4bec478b2b31c8d93a84b903f474e5d9"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "0d4cdee0084b9d6922a93a0a282821f2"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "07e004e224de4b8c29dc3d19b0557662"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "afbb273839574105fcc9c446ee612378"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "5c1637765d65a3d8a7b36b8bdda74201"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "83347105c49aa1511e1a7f06931421ea"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "46dacfde99cbd0eba85dab8402aadf82"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "9d4c85b05842318c208861de8f65c2a9"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "4603980c5cbd1c5ea88cb148c32a905f"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "bae0fa4c003eacdd00b1286088c4c7fa"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "bf974a15114ec5d7e74e840581fd8e02"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "c5c8522b741eb9c0cc34b775a6e0ecd8"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "bc889525ef38e48857d09eeba44a44a7"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "ae380538194addf595727aac21f52ae9"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "b7e31cb7dbf8d1482f7533cd6b2b4367"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "38eec3ecf5b143b2dfa54a39e6f7f824"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "bfe20143401ce3bd5b9d146a55cf352e"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "e4a725cbaff6e8234b93403de746ccdf"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "8b025f1ffed21a16e42bffb603ac5e71"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "e1acbe2dc7ce68630c426b4f6283fe70"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "ee2ec6818a7acbc6c0c02be4bedd8736"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "c565dd83f41d2bdc163042b2d7dc4f55"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "d3503e88de22a205aaa20bf455a0e60c"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "cd1abc949128883f6b0dd2d41307bb1f"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "879daf45c82ddd34031884eb9e2eafc4"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "67a4b689fe1c3512ff4fcecb5ca4742c"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "f7a12d775920b8c53f43e384c20292e2"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "134892d9a84596a3497fb689b378cd88"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "b5cf286618f7b85955c408223031a17b"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "96921f6edc7153b420a78def66563823"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "35b9bd12f1112cc7d9eabb83a0037b3e"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "29795e3f09d70dd9b135b7e09e5b5b79"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "878f9c68593eb56532e57aa468186062"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "7ed8817c591201457d099fd0d693abbb"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "7b7812306781b09c4dbfd1c1e2faa220"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "7721a3c60d3a02ec8200550cde442a0c"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "0000457535ca6882f7339e393e5e9a9a"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "1cda005358289bd04179a2837fbc769f"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "71e03a55774649d671da1aaa816071cd"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "38e0825cc43cc325473f5ad8b5012c2b"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "377cb7c244f29dff8da9642fc6a68b70"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "5ba2adff72a4ad0c8243d2db95d76db7"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "a88294418fe4f8634076410ccd579719"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "14e32cb971e0bb630d38fb0336d1bc60"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "ef49575e1fe6efd6f06991386f363d9d"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "f5a8efa3623878245de4ceeced1f9636"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "1b1534c28c46451e67b29b2691168d89"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "f75de8ee83488f1487ae087a081ee81e"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "c882d01ee1a9812e2ce7934b751f7fc2"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "bf6d7c019e254f64b5e28db11e6fade9"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "adf92be27658429c9490f6dc80c535f1"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "2f8a0878c7cc83ae86dfcb6959034cc6"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "f92b1ad34458eaec605613e687b2d03e"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "ef192763c695eb6dbd9536ddf911ac22"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "04acf66c8541acdab9554751d91a9494"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "ed54577e642eb4d7ae293e6b7c80c533"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "bd0d1ad2ff1edde597eda111d615f611"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "908ce91ab69f95e8711d52232c7b8c56"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "f46f2f71021305b9675b1f9a9a70fd83"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "bc5fab38a02c08565e24148476b858ca"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "9bd83ce3830d13542c93ecef66f640a9"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "6ee16e0b6518a04cc1a3efc478b629b1"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "6e7b5e3c81b2bd628a451cb6eaa090da"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "7cdfef3119292ba2fa22f0758ccacb39"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "f208a3a55adb4809c7963d4aab9898f4"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "f70b111ed87fbe90dfcb865a7865cc08"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "ff86d7e5c0391efec3b5ea81e5d80f2d"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "5a30068cca7ac8375c8c920ff46160e2"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "e4e4c19357c5d124f8ebca177c0663df"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "df1109accf9a7e620a19f729a801771f"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "abb73f7ac83fc93112a0e1b8f1473adc"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "73dee90df6f6b14ab47ea5704d24e5f5"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "05db00867909973937d8027cea260f3b"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "07aecfaf059c04f35b9d3553a309e5e2"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "e3c63a89e3c4602e88789abd19d96b2b"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "79736f9ecc5d195b5d1e07bbc9ff460e"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "6e3ec2b9520c9a7caebb599142abdc42"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "15c1515f7ac2c7da80b213d20516abb0"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "e58da8c7b670709b19c79f6310949f86"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "de916d72c7937a4de365ae20876e57fd"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "39e56200ba13e5b45cb8c4982604491e"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "0b765411def246dec0dd8b970802eb87"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "c29caf6b6601e46df428405804a7adbd"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "d83bbcbabbcf3018a590870bd0bdbf81"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "722add7113df8a0c52c3af636744780d"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "5c11644856139f0a0d53a9a80786ecbc"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "15aa548e2b0dfbf29cd70b338ca1c6f7"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "4e09545bc472a0528641dc9a29ff0195"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "9c8bb5481dc9a857930aebc133110f5c"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "55f51285180c68193d5bb06edcb09fbd"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "7e3bf51e084bc02d4d872d4d59d6eb48"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "fb84b961ac7f44e1e9742ff486439391"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "e86c7889f4a7d3586ab46a1d2fcf5629"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "9e780b585712864c680203431dc2181a"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "af4a799f4712ba0275aea5c56114ef40"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "451d39bd34efb8bebc414b7416c24aa3"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "cbbf1610c4ec4719c4e5540b16f53777"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "67fc91a0145c11dfce30a9224bae6cba"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "74e9d1ccf4f449331e4b435f9085a708"
  },
  {
    "url": "404.html",
    "revision": "b9ba88de2af727050555ee0824d2590c"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/1-seller-dashboard.153db513.png",
    "revision": "153db513847c3df74c38b76b5b2ad7ff"
  },
  {
    "url": "assets/img/10-customization-item.f45d2721.png",
    "revision": "f45d27217c2d6050c01a35a2372bd691"
  },
  {
    "url": "assets/img/11-price.91cf49f2.png",
    "revision": "91cf49f23764be0e43f8a38b8f609468"
  },
  {
    "url": "assets/img/12-shipping.4fff4598.png",
    "revision": "4fff45987be6de4946967b1c6caed327"
  },
  {
    "url": "assets/img/13-setting.b03a2298.png",
    "revision": "b03a2298a09509b1a2e69cb3e178526e"
  },
  {
    "url": "assets/img/14-inventory-and-category.d51fe2b6.png",
    "revision": "d51fe2b63acf9352033b0cc99b5cdfc9"
  },
  {
    "url": "assets/img/15-product-disapproved-state.5ff7ceba.png",
    "revision": "5ff7cebacec6692761bc008037920944"
  },
  {
    "url": "assets/img/16-admin-product-page.10e67f4c.png",
    "revision": "10e67f4cf8f5d1e17965756ac37b8624"
  },
  {
    "url": "assets/img/17-admin-update-status.c4bd6e1d.png",
    "revision": "c4bd6e1d8f797bba10547608ee926972"
  },
  {
    "url": "assets/img/18-admin-assign-product-view-page.f032571a.png",
    "revision": "f032571a57885d5d5466fc7819955b68"
  },
  {
    "url": "assets/img/1frontend.60a9f83d.png",
    "revision": "60a9f83d3897ccfc85b19edaa45be0da"
  },
  {
    "url": "assets/img/1homepage.6bc15315.png",
    "revision": "6bc15315d10f260cb7434bb1132632c1"
  },
  {
    "url": "assets/img/1mycart.fea04e56.png",
    "revision": "fea04e5670e65fc427e521a15ff61b17"
  },
  {
    "url": "assets/img/2-product-page.aea4908d.png",
    "revision": "aea4908db5c12f32b2b2f51f72e049ae"
  },
  {
    "url": "assets/img/20-product-frontend-view.87dd32a5.png",
    "revision": "87dd32a5145c688f16d163d56e1bbd4b"
  },
  {
    "url": "assets/img/21-search-product.45f5ad86.png",
    "revision": "45f5ad86c466fe8f79487a2eb5eb4e45"
  },
  {
    "url": "assets/img/22-assign-produt-details.58f7b4d5.png",
    "revision": "58f7b4d584df6c9238abf77da8e39da0"
  },
  {
    "url": "assets/img/23-assign-product-disapproved.aa20cd92.png",
    "revision": "aa20cd926f42d9ab6154f2561b989527"
  },
  {
    "url": "assets/img/28-assign-product-store-frontend.8e8c9002.png",
    "revision": "8e8c900258dd5ae255c18e9715a72e31"
  },
  {
    "url": "assets/img/3-product-creation.2ae8a534.png",
    "revision": "2ae8a5345fdfd60144d87ddbc9d298a7"
  },
  {
    "url": "assets/img/4-create-new-product.cf9d0665.png",
    "revision": "cf9d0665acd501fe45e531fa6ccbe3b1"
  },
  {
    "url": "assets/img/5-general-arrtibute.521ccee5.png",
    "revision": "521ccee561a438a47cdb7c786df77bc4"
  },
  {
    "url": "assets/img/6-Short-description.c8ad9733.png",
    "revision": "c8ad97335d9e182c9c56753c599e7767"
  },
  {
    "url": "assets/img/7-description.403ff5ef.png",
    "revision": "403ff5ef1b1df9465dc0e08eb4c24cea"
  },
  {
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
  },
  {
    "url": "assets/img/8-meta-description.2a261e75.png",
    "revision": "2a261e75b401ee0ccd3ff6aae5eed3d5"
  },
  {
    "url": "assets/img/9-Img.ae77bbc5.png",
    "revision": "ae77bbc57ea2aab59e024a6911cfde56"
  },
  {
    "url": "assets/img/abandoned-cart.40d28282.png",
    "revision": "40d282829a330c99a715eed34402753b"
  },
  {
    "url": "assets/img/aboutstore-sociallinkt.146b2de0.png",
    "revision": "146b2de06e6838caff8dd36ef2586718"
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
    "url": "assets/img/average-order-value.69fd907e.png",
    "revision": "69fd907e92e903d661ce74438d838c9d"
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
    "url": "assets/img/banner-logo.dbe4541b.png",
    "revision": "dbe4541b0d337a44377377460c241fb7"
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
    "url": "assets/img/cancel-button.c541daec.png",
    "revision": "c541daec0df51c57125208994d380af7"
  },
  {
    "url": "assets/img/cancelled.63029149.png",
    "revision": "6302914901deeeb085dacf080ace87f2"
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
    "url": "assets/img/catAdmin.dabb8c35.png",
    "revision": "dabb8c35436d23f43f4a7ca5b405cc8f"
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
    "url": "assets/img/catSide.ffabd07f.png",
    "revision": "ffabd07f8c2548322f4dc8d7c17e84e9"
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
    "url": "assets/img/complete.076010b3.png",
    "revision": "076010b35c5a136dd4f8167a800dcb7e"
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
    "url": "assets/img/configure_commission.beeb6947.png",
    "revision": "beeb694765720a312cbf38d96e501957"
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
    "url": "assets/img/content.7e1b8e48.png",
    "revision": "7e1b8e486e6c73a245083b7239471f9d"
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
    "url": "assets/img/contentspec.67545044.png",
    "revision": "67545044fe5fc1c5d5dbce946f640f56"
  },
  {
    "url": "assets/img/cookies-position.bcba3078.png",
    "revision": "bcba30784d5b2c9e2c01881c11610bed"
  },
  {
    "url": "assets/img/cookies-Preferences.0a706068.png",
    "revision": "0a706068aaa824c26b3b949c44acd897"
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
    "url": "assets/img/create-invoice.74a5bc54.png",
    "revision": "74a5bc54c034fb31fa853432c2a18975"
  },
  {
    "url": "assets/img/create-product.de3763bd.png",
    "revision": "de3763bd35b420fae98e2bd46f259ddb"
  },
  {
    "url": "assets/img/create-ship.82246059.png",
    "revision": "82246059231c0b13b1f529c9a1367cd7"
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
    "url": "assets/img/custom-shoes.3855e8a7.png",
    "revision": "3855e8a774d155b4316a5c8cd91af44d"
  },
  {
    "url": "assets/img/custom.bad01684.png",
    "revision": "bad01684012cb08bd3bf4e36c39ec5e6"
  },
  {
    "url": "assets/img/customer-group.b2e8d240.png",
    "revision": "b2e8d24057db830319da6ab27135a77d"
  },
  {
    "url": "assets/img/customer-most-order.ab12bc7e.png",
    "revision": "ab12bc7ed09a30f4b9735fd7301d3d5a"
  },
  {
    "url": "assets/img/customer-most-review.2e3306dd.png",
    "revision": "2e3306dd0b905807240960ec38f5e4ad"
  },
  {
    "url": "assets/img/customer-traffic.cb4d6371.png",
    "revision": "cb4d6371213745f5544b2905247b7507"
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
    "url": "assets/img/customization.3b816a28.png",
    "revision": "3b816a283d78e65c0a6da9a6906323bc"
  },
  {
    "url": "assets/img/customization.ee6ffc23.png",
    "revision": "ee6ffc2366ed4d947c9c00ab7fe80f85"
  },
  {
    "url": "assets/img/dashboard-manage-profile.58168eb8.png",
    "revision": "58168eb87b38e41d0ff22ed79724d274"
  },
  {
    "url": "assets/img/dashboard-order.58168eb8.png",
    "revision": "58168eb87b38e41d0ff22ed79724d274"
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
    "url": "assets/img/design.242fdac4.png",
    "revision": "242fdac496c51c86a3441fbfa1957133"
  },
  {
    "url": "assets/img/design.3a73ffcb.png",
    "revision": "3a73ffcb7572045dddabe71e47447436"
  },
  {
    "url": "assets/img/designOutput.9f21e89f.png",
    "revision": "9f21e89ff570e9fa4bafe0a6248d57ba"
  },
  {
    "url": "assets/img/designOutput.c4642cb8.png",
    "revision": "c4642cb8d8e8c75bb2096f11e22521e3"
  },
  {
    "url": "assets/img/designOutput2.f072f094.png",
    "revision": "f072f094c679f8c291199b166ded471a"
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
    "url": "assets/img/edit-profile.21bff29b.png",
    "revision": "21bff29b1f516ffd9bb154dbb440f8ce"
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
    "url": "assets/img/frontend2.148bb3d9.png",
    "revision": "148bb3d9154bb53d2431e757cae76554"
  },
  {
    "url": "assets/img/frontend2.864a8940.png",
    "revision": "864a894032e86df0e8cd907d60957280"
  },
  {
    "url": "assets/img/frontend3.8cf117d6.png",
    "revision": "8cf117d65c8bd306f0fd94347b06e7bc"
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
    "url": "assets/img/gdpr-agreement.7ac81b74.png",
    "revision": "7ac81b74bd66792f67ef20f4f625418b"
  },
  {
    "url": "assets/img/gdpr-agreement2.47141f66.png",
    "revision": "47141f669aac6be789eeebaa121da930"
  },
  {
    "url": "assets/img/gdpr-message.0fa31f5d.png",
    "revision": "0fa31f5d75b428ae639522e07dc5ff3c"
  },
  {
    "url": "assets/img/gdpr-request.839731e3.png",
    "revision": "839731e3e3f72a1d48c97e520dacca98"
  },
  {
    "url": "assets/img/gdpr-status.d0a0ef87.png",
    "revision": "d0a0ef87ad696b4cb44037d65cc1a94e"
  },
  {
    "url": "assets/img/gdpr1.526b5a64.png",
    "revision": "526b5a646882a0367ffc008ac98e2588"
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
    "url": "assets/img/header.29950b1c.png",
    "revision": "29950b1c7b632f9f7922feb01f721825"
  },
  {
    "url": "assets/img/homepage.6bc15315.png",
    "revision": "6bc15315d10f260cb7434bb1132632c1"
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
    "url": "assets/img/invoice.ed818124.png",
    "revision": "ed818124a62153f919036c140f7a3e35"
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
    "url": "assets/img/last-searchTerm.9aea5eda.png",
    "revision": "9aea5edaab70881c5e2f17dd7dfa12a2"
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
    "url": "assets/img/Meta-desc.09fbcbab.png",
    "revision": "09fbcbabadfdea2339a4aa296a6425f5"
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
    "url": "assets/img/msg-popup.299dfbac.png",
    "revision": "299dfbac2f8718055c58412b7ad06d28"
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
    "url": "assets/img/order-page.682a70c4.png",
    "revision": "682a70c4eafc3ea5e19f204e4f9dbc86"
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
    "url": "assets/img/output.16c1b819.png",
    "revision": "16c1b819868428bcdd6f034f1d5d66a8"
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
    "url": "assets/img/pending-status-invoice.f1cc4df3.png",
    "revision": "f1cc4df31e6d3348eccfb3a63e7f5c35"
  },
  {
    "url": "assets/img/personalizedCheckout.0a465abe.png",
    "revision": "0a465abefe3c21e37d6644363e8c21a0"
  },
  {
    "url": "assets/img/personalizedCheckout.a6f6b184.png",
    "revision": "a6f6b1842f555ec1b60c1ca29b7a65ed"
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
    "url": "assets/img/privacy-policy.4b89ff16.png",
    "revision": "4b89ff165768a80451a61028b10004cb"
  },
  {
    "url": "assets/img/processing-state.9ce1844e.png",
    "revision": "9ce1844ef2e0a9f2c7c235d7fc6d0a41"
  },
  {
    "url": "assets/img/product-review.832df4ac.png",
    "revision": "832df4ac826b534b3d1bfb0821363fd2"
  },
  {
    "url": "assets/img/product-visits.c040062e.png",
    "revision": "c040062e393eb3349d29e5f25c512333"
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
    "url": "assets/img/products-quantity.a06852b1.png",
    "revision": "a06852b1b1f3820dda928e5afc3df529"
  },
  {
    "url": "assets/img/products-wishlist.269e3206.png",
    "revision": "269e3206e5340715882c5b0d01ab7dba"
  },
  {
    "url": "assets/img/products.3865c39b.png",
    "revision": "3865c39b4ef983793361bb01e55b8403"
  },
  {
    "url": "assets/img/purchase-funnel.97aef38c.png",
    "revision": "97aef38c811c7dc146ed8935c2051156"
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
    "url": "assets/img/refund.d66c6517.png",
    "revision": "d66c6517591e4fbbbb23f8b881f274c9"
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
    "url": "assets/img/return-policy.da7d6769.png",
    "revision": "da7d6769f6dfd446c9a8be6374639a7b"
  },
  {
    "url": "assets/img/revenue-products.a40f8679.png",
    "revision": "a40f86797d05794666e995347483083c"
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
    "url": "assets/img/reviewMagic.a6377095.png",
    "revision": "a6377095f839990b377eda2ca3b079c6"
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
    "url": "assets/img/Save.9cda1a3e.png",
    "revision": "9cda1a3ee7363132492849c1ae8edd44"
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
    "url": "assets/img/seller_commission.7f1f6001.png",
    "revision": "7f1f6001cadff9b1a0b348f1351ee3ae"
  },
  {
    "url": "assets/img/Seller-login.ab4ee7fd.png",
    "revision": "ab4ee7fd70edc3eabab6d4af1bd12426"
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
    "url": "assets/img/Ship-button.c021281c.png",
    "revision": "c021281c66b1a6bcacf272b05f8cc4c8"
  },
  {
    "url": "assets/img/Shipment.6d5b9ae0.png",
    "revision": "6d5b9ae0721976d5ab38a07fc48713bb"
  },
  {
    "url": "assets/img/shipmentOutput.3e0d9740.png",
    "revision": "3e0d9740c504c803c7e8cea13595ed43"
  },
  {
    "url": "assets/img/shipping-collected.d2126828.png",
    "revision": "d21268289fb68775e60ac70cdf6cf6b6"
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
    "url": "assets/img/simple-product.ddb1ac42.png",
    "revision": "ddb1ac42f19502140c2055e41cba8496"
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
    "url": "assets/img/sold-products.af8d9c44.png",
    "revision": "af8d9c44e608f4af48d1c875b6a42974"
  },
  {
    "url": "assets/img/sourceAddress.ee2e69a5.png",
    "revision": "ee2e69a5700fec03accb2b06a106d51d"
  },
  {
    "url": "assets/img/store-address.5bf07654.png",
    "revision": "5bf0765472ce938bf7204082c7014d58"
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
    "url": "assets/img/tax-collected.07bbefb7.png",
    "revision": "07bbefb72f03e792cd3042113103b328"
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
    "url": "assets/img/top-payment-method.d0b65af5.png",
    "revision": "d0b65af5724aeea668e7a0a967976c52"
  },
  {
    "url": "assets/img/top-searchTerm.1bcd799b.png",
    "revision": "1bcd799b2532a2a8770bbd23276b5426"
  },
  {
    "url": "assets/img/total_commission_paid_reporting.18d89214.png",
    "revision": "18d89214ad4849d7065e16fb2b936f3e"
  },
  {
    "url": "assets/img/total-customers.96945387.png",
    "revision": "969453873e32f3d7ca733bf92d1d5f32"
  },
  {
    "url": "assets/img/total-order.3c1ec690.png",
    "revision": "3c1ec690a194c87c4bc034a9e0cd6a5e"
  },
  {
    "url": "assets/img/total-sale-customers.fee25dfd.png",
    "revision": "fee25dfdce011f1883efa99361060018"
  },
  {
    "url": "assets/img/total-sale.b80c8593.png",
    "revision": "b80c859320a684149b530794ebe507f7"
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
    "url": "assets/img/virtual-customization.42885b7d.png",
    "revision": "42885b7d390f0c44b7cf838137ff1bf4"
  },
  {
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/visit-page.6f93888c.png",
    "revision": "6f93888c8416169687351d75536bd952"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.74044bd1.js",
    "revision": "a0bbedd29fd7135f6dbf7d4292d7288c"
  },
  {
    "url": "assets/js/10.5554dfe7.js",
    "revision": "00921b76ac87b1af1ea33c20871423d3"
  },
  {
    "url": "assets/js/100.745085d3.js",
    "revision": "6e3577bdd03c473c9b2a4d5b2d109483"
  },
  {
    "url": "assets/js/101.019e12c4.js",
    "revision": "0e698a28b8670a217373c33bc45f3abb"
  },
  {
    "url": "assets/js/102.327d8b70.js",
    "revision": "4303c121d80d891e4e28880f5732e7b8"
  },
  {
    "url": "assets/js/103.b077e730.js",
    "revision": "ebe9a35b0042727924a79a8f89ec9863"
  },
  {
    "url": "assets/js/104.db17fef5.js",
    "revision": "599b2fa3596a02d5dcde8e34ca0baeeb"
  },
  {
    "url": "assets/js/105.c6dc9456.js",
    "revision": "68f71e841e091dd8526c2748d47e83f9"
  },
  {
    "url": "assets/js/106.cac066b6.js",
    "revision": "0e00e2858fc73bcfb18e8b72d2a401f6"
  },
  {
    "url": "assets/js/107.6f2a65c1.js",
    "revision": "052fcfb01937f2e831536f072ff15f1f"
  },
  {
    "url": "assets/js/108.bd78b37c.js",
    "revision": "a78daa98ae6b74fcb6d49c98a98978dd"
  },
  {
    "url": "assets/js/109.a5d4ef10.js",
    "revision": "92d63827e9cf11cafef604b8656e8a06"
  },
  {
    "url": "assets/js/11.9659c941.js",
    "revision": "3c8d39c86b5ee3c0c287298276040401"
  },
  {
    "url": "assets/js/110.e3b006dd.js",
    "revision": "9f0031b6330bf772e46befea90779ead"
  },
  {
    "url": "assets/js/111.26d2a0b2.js",
    "revision": "07c8759b022428f52a42dc81c84b04ed"
  },
  {
    "url": "assets/js/112.5577e977.js",
    "revision": "e8f497e05fe029db13a4dddd9b3c326a"
  },
  {
    "url": "assets/js/113.4e0596da.js",
    "revision": "a9a82a648fa548a839a0a7d6ad824f3f"
  },
  {
    "url": "assets/js/114.9eb2d808.js",
    "revision": "c46b772a20dae99b8f50ed3bf647b885"
  },
  {
    "url": "assets/js/115.f632a851.js",
    "revision": "cc7cb38084ff53052658b6b2f6ab6bba"
  },
  {
    "url": "assets/js/116.9edb218f.js",
    "revision": "00bf63847ec6f2d1ac7d478ba5313a84"
  },
  {
    "url": "assets/js/117.c9a7bd4b.js",
    "revision": "3766a0f6c05b762cb36fb7d2d36cda00"
  },
  {
    "url": "assets/js/118.f6dc3a94.js",
    "revision": "abdfd99d92cb0509c8a36afe216efaf1"
  },
  {
    "url": "assets/js/119.5d80f0d9.js",
    "revision": "a15e63449600e6807636821faa8f89fe"
  },
  {
    "url": "assets/js/12.e9b68ad1.js",
    "revision": "ab5fc32d3b4bc274705030c4d95d6d22"
  },
  {
    "url": "assets/js/120.4350de78.js",
    "revision": "515a8bf417c3bd6dfd3d7a78f1c3205d"
  },
  {
    "url": "assets/js/121.6a66eb36.js",
    "revision": "472653e48d9ff46f99b276fcf4ecc356"
  },
  {
    "url": "assets/js/122.ba121766.js",
    "revision": "a92df0501187d1cf6ae8658e5c4f8821"
  },
  {
    "url": "assets/js/123.e00f93c7.js",
    "revision": "29b84d0b338f0647938c429c143ebc49"
  },
  {
    "url": "assets/js/124.bd9ada17.js",
    "revision": "ddd4411467fc83233f05ebee2a5b4133"
  },
  {
    "url": "assets/js/125.6f943b94.js",
    "revision": "0114c0ca8ebe217b87e967eadbb4303b"
  },
  {
    "url": "assets/js/126.e61aa3c3.js",
    "revision": "80367306684856d491c404e567e05e57"
  },
  {
    "url": "assets/js/127.a1dac574.js",
    "revision": "ebb2f1b2196911e49b74d7e8dbe6242c"
  },
  {
    "url": "assets/js/128.4dac3654.js",
    "revision": "01c2af1b1bc4593786c9d3f4660a92a6"
  },
  {
    "url": "assets/js/129.53eba743.js",
    "revision": "774de93b5b3367394edfe7d2d474392f"
  },
  {
    "url": "assets/js/13.1b5e1bc1.js",
    "revision": "315f240a43234cde03f1b4482663bfee"
  },
  {
    "url": "assets/js/130.e29e6cc9.js",
    "revision": "1a5d0695296762458e6cb39a91440fb5"
  },
  {
    "url": "assets/js/131.749353c2.js",
    "revision": "bac16ff90c6000952ad4cb18652764c1"
  },
  {
    "url": "assets/js/132.9458a018.js",
    "revision": "887fb557733d505cdeed2ff430266260"
  },
  {
    "url": "assets/js/133.097e58c4.js",
    "revision": "e6b2b17b286b6199ef02e8e86e9ff509"
  },
  {
    "url": "assets/js/134.ff52e045.js",
    "revision": "9cde22b956b0d9349f8b0b3c8864299a"
  },
  {
    "url": "assets/js/135.5a883ab3.js",
    "revision": "8e027317cb168992771830012e986035"
  },
  {
    "url": "assets/js/136.562e6701.js",
    "revision": "41a3ebdc49ac93cb235d48dd8ab20d8c"
  },
  {
    "url": "assets/js/137.590d0194.js",
    "revision": "8855f4efd4387d170ee56773e6f63152"
  },
  {
    "url": "assets/js/138.82fd2e34.js",
    "revision": "64bbe6172b34d40a92ab5036bc99f380"
  },
  {
    "url": "assets/js/139.544bffd2.js",
    "revision": "f488b10af089b3a8989ab4e15da68da5"
  },
  {
    "url": "assets/js/14.7113b70e.js",
    "revision": "b277f052fff310702908cf8e36358bbe"
  },
  {
    "url": "assets/js/140.98e2a1b1.js",
    "revision": "e83128bd1a7a2dc02287d35295c9db4e"
  },
  {
    "url": "assets/js/141.8ef39775.js",
    "revision": "c8915be508dfbf8ec637427e09547e5c"
  },
  {
    "url": "assets/js/142.4e27778b.js",
    "revision": "3bc470a51e886ec7f180bfd7e350add5"
  },
  {
    "url": "assets/js/143.aa7121f8.js",
    "revision": "5f786c1918ffe5d3506e7d2a38c3d9ac"
  },
  {
    "url": "assets/js/144.ad60e635.js",
    "revision": "8d1c3c7d4bb6ba8e75582a8128010544"
  },
  {
    "url": "assets/js/145.979b3288.js",
    "revision": "4c9ca73ff362bb78072042b6403b6a6e"
  },
  {
    "url": "assets/js/146.b3ef8173.js",
    "revision": "db2c164d099be333f02fb304f66d2ce0"
  },
  {
    "url": "assets/js/147.21c9cca3.js",
    "revision": "d6c06fb0e2280be4aed9a776766e56f2"
  },
  {
    "url": "assets/js/148.b1bb1287.js",
    "revision": "af14a80b5e196680e7d4dc8b280eaa55"
  },
  {
    "url": "assets/js/149.a64a3537.js",
    "revision": "80f4250ce14a7740fd32843fac516e74"
  },
  {
    "url": "assets/js/15.a527d198.js",
    "revision": "16306dda9f1cc157a1c53f144a5f07c8"
  },
  {
    "url": "assets/js/150.57c3922a.js",
    "revision": "bc3122326b6c7a57aa564ac47d1f6ac5"
  },
  {
    "url": "assets/js/151.6fbf7e79.js",
    "revision": "7430ac3d1c3fe073a58df200ff28f977"
  },
  {
    "url": "assets/js/152.55904eb4.js",
    "revision": "78828aec5d2b93f5960079d5e913fc07"
  },
  {
    "url": "assets/js/153.9b6557fc.js",
    "revision": "48bff7662705b9594f2f236fe33f0701"
  },
  {
    "url": "assets/js/154.2a4d3fa2.js",
    "revision": "1a4144f2365c9ff067a378e23bf24db1"
  },
  {
    "url": "assets/js/155.efd977ce.js",
    "revision": "2ae93962bf007131e0e60bfdce070d31"
  },
  {
    "url": "assets/js/156.7fb46f4a.js",
    "revision": "12fb0df184b34b3904f9209e1cf40847"
  },
  {
    "url": "assets/js/157.ec095340.js",
    "revision": "5f7bb59484f55b0a79723ead42efca65"
  },
  {
    "url": "assets/js/158.e1e75a5a.js",
    "revision": "69a23be6b1d75bb2bc34b6ea8614a41a"
  },
  {
    "url": "assets/js/159.1978f30d.js",
    "revision": "8e62c53095bcd53ce7ec82ad60cc9353"
  },
  {
    "url": "assets/js/16.8dd3b2fa.js",
    "revision": "537847b68a0c8256e82072fea678454b"
  },
  {
    "url": "assets/js/160.07c541ac.js",
    "revision": "27cd357362b85c6a0281ca25148cacb7"
  },
  {
    "url": "assets/js/161.de2d23f2.js",
    "revision": "876860f7784130f75c06dbf697f4f3c1"
  },
  {
    "url": "assets/js/162.eddbf9b5.js",
    "revision": "0c8a360e310ca6f9a893e56dcb607ca1"
  },
  {
    "url": "assets/js/163.f121891b.js",
    "revision": "62412b891bb2f889df7b85b73c79526a"
  },
  {
    "url": "assets/js/164.c4ca35c0.js",
    "revision": "46f4a0e9deb0e22bd6a964555ec20d11"
  },
  {
    "url": "assets/js/165.3ec9c879.js",
    "revision": "f1bacd07f7ce65f54424f307486bae26"
  },
  {
    "url": "assets/js/166.98e1daec.js",
    "revision": "5a6182c256150312f6183cacd3cb3eae"
  },
  {
    "url": "assets/js/167.54a16483.js",
    "revision": "daeec07b016c6186298056662fb18e7b"
  },
  {
    "url": "assets/js/168.d2db47aa.js",
    "revision": "17483b253ffc2f5db755fa746dbfd7b6"
  },
  {
    "url": "assets/js/169.714eeac9.js",
    "revision": "9357424c4eb429e0e79d1029f7aa0c7f"
  },
  {
    "url": "assets/js/17.dd193cdc.js",
    "revision": "e14cd6a058d6d8f296b2f5849af75a08"
  },
  {
    "url": "assets/js/170.1bef6445.js",
    "revision": "5b7ac173421486f9ccc7ec9b753ff61c"
  },
  {
    "url": "assets/js/171.131d0e9b.js",
    "revision": "bf998a29d1b5dbd9fc71251f54899cc3"
  },
  {
    "url": "assets/js/172.360ab466.js",
    "revision": "290774f99b1c976cc3e8e67f2d1ac2b6"
  },
  {
    "url": "assets/js/173.319e5723.js",
    "revision": "6671cd29575c3e7a8f3dc49c633b367e"
  },
  {
    "url": "assets/js/174.7a06233d.js",
    "revision": "f5cb3bddc03c096039958f22ea252b3a"
  },
  {
    "url": "assets/js/175.b3dde883.js",
    "revision": "2f0859e3e86e64db59e21d231748a392"
  },
  {
    "url": "assets/js/176.dcaae1df.js",
    "revision": "5fa06098685646a89300828b7fd7af1e"
  },
  {
    "url": "assets/js/177.d2203eb2.js",
    "revision": "6b1e4b73b45cb535abc4140efebe011a"
  },
  {
    "url": "assets/js/178.88aa65f7.js",
    "revision": "a1a6e89e53fa0e766f5fd3f9ac476904"
  },
  {
    "url": "assets/js/179.cfb6e40f.js",
    "revision": "367ca1f044fb04ad5083de61e1314a22"
  },
  {
    "url": "assets/js/18.344f4a86.js",
    "revision": "eface552f4f2cdf3807493340f48aced"
  },
  {
    "url": "assets/js/180.2f845042.js",
    "revision": "6bc13bbe97b32d42a79b56099b13babb"
  },
  {
    "url": "assets/js/181.7ae18306.js",
    "revision": "3cfcab5d4544dbd3500e0b763975fd5e"
  },
  {
    "url": "assets/js/182.22f6dc46.js",
    "revision": "b9c6f89d848b7cf3ad7fb99e17111c1e"
  },
  {
    "url": "assets/js/183.58173838.js",
    "revision": "007d053c82b3cd07e282063d50dc85f7"
  },
  {
    "url": "assets/js/184.d4e521ff.js",
    "revision": "269ac8898ef6acc047ad31e6469f19c1"
  },
  {
    "url": "assets/js/185.1dff54c0.js",
    "revision": "d7cd9f899331e4bbba7b240f8994a17a"
  },
  {
    "url": "assets/js/186.6c593d15.js",
    "revision": "41c713a889339b8d4167c57e9ab7c61f"
  },
  {
    "url": "assets/js/187.db113398.js",
    "revision": "2f110e9c1ad9da5bafdeaa92cd2b2cbe"
  },
  {
    "url": "assets/js/188.02737b8e.js",
    "revision": "efc08701f311458294ff8924354f9404"
  },
  {
    "url": "assets/js/189.19e4a604.js",
    "revision": "77b0b1c808194add7dbeef8c22d89d65"
  },
  {
    "url": "assets/js/19.588bc104.js",
    "revision": "bb3aced34f55cfe07f23b24fa55e73c9"
  },
  {
    "url": "assets/js/190.dc49e0ef.js",
    "revision": "e3375e73192e9afdaf8a0c896591c4cb"
  },
  {
    "url": "assets/js/191.238af9d6.js",
    "revision": "0c9bbd29d38ac58530779365be01dc92"
  },
  {
    "url": "assets/js/192.c416d1f2.js",
    "revision": "3eb3d9034be81fc7c969faeccb9011f1"
  },
  {
    "url": "assets/js/193.d4da9b67.js",
    "revision": "547c8fa9bc3443e406547b5ab996847b"
  },
  {
    "url": "assets/js/194.8f9763f7.js",
    "revision": "c0e14cd3c24c3dcc92f45b12aca635ac"
  },
  {
    "url": "assets/js/195.060df5ee.js",
    "revision": "764b8c51d6c994b29971171d9c6c0fb0"
  },
  {
    "url": "assets/js/196.ad95e500.js",
    "revision": "813271badd32829160449167723c7699"
  },
  {
    "url": "assets/js/197.eb98232e.js",
    "revision": "a4d45b5df601ec18e67d0431264d741c"
  },
  {
    "url": "assets/js/198.955f5c9c.js",
    "revision": "14fb1a8fd3c8310519334b5a05e3fb39"
  },
  {
    "url": "assets/js/199.d2f150c3.js",
    "revision": "c8ea11c73d362a6f5c76a982e3f55da6"
  },
  {
    "url": "assets/js/2.fff0d540.js",
    "revision": "a9b7319bb104025d63182f54484a5011"
  },
  {
    "url": "assets/js/20.c9621545.js",
    "revision": "acc9205cf17e3c2ed4c5ffac3d9fe79a"
  },
  {
    "url": "assets/js/200.436e5b8d.js",
    "revision": "efd670e23cdcdbc851f479e02e099a43"
  },
  {
    "url": "assets/js/201.91a2fb45.js",
    "revision": "5c11171c54f8cd4fbec67e474a1cc2ca"
  },
  {
    "url": "assets/js/202.6f4acb03.js",
    "revision": "34ea4f592a129dab2b0882c8b4d9d7d5"
  },
  {
    "url": "assets/js/203.6d72c81b.js",
    "revision": "91b1a760050dbafd8e4acfda2029fa1b"
  },
  {
    "url": "assets/js/204.53ddfea9.js",
    "revision": "ccbbeaf5560a5fd441b2f6a54defe64c"
  },
  {
    "url": "assets/js/205.421fb236.js",
    "revision": "6fb2d2861cc95671e7f5d400ba2aab93"
  },
  {
    "url": "assets/js/206.e37b78cf.js",
    "revision": "aa469cdd3d88dcddb8b780c01dbbece9"
  },
  {
    "url": "assets/js/207.e4524c71.js",
    "revision": "b2aa02cac9da5a1ae87458821914fd4b"
  },
  {
    "url": "assets/js/208.a5c0a568.js",
    "revision": "697469bb48152aac53ee7e57e43a1b34"
  },
  {
    "url": "assets/js/209.e7ea54dd.js",
    "revision": "4fdf81d9c0fbe84a5c1ea7735f8fd5d7"
  },
  {
    "url": "assets/js/21.38df2228.js",
    "revision": "91db05f7d6fb97dd37f89617dfee111d"
  },
  {
    "url": "assets/js/210.0c50deb9.js",
    "revision": "00c9031c55fbd9936a081e20d78da9ff"
  },
  {
    "url": "assets/js/211.450e56cf.js",
    "revision": "4f6d55c7246b4c3f82a99638c0194b44"
  },
  {
    "url": "assets/js/212.85f2f3a0.js",
    "revision": "1b562028962d91e09110aa5ed331847e"
  },
  {
    "url": "assets/js/213.15137205.js",
    "revision": "716d876cd8823fc9d3b77646150254a3"
  },
  {
    "url": "assets/js/214.9deed879.js",
    "revision": "2df570d5d72ea66abc5b778304d925d6"
  },
  {
    "url": "assets/js/215.f5643013.js",
    "revision": "d701ffd56223c994f1619b0acfa9220c"
  },
  {
    "url": "assets/js/216.cc85f50f.js",
    "revision": "c58394badadd129c007c0487f7627d55"
  },
  {
    "url": "assets/js/217.1c9eb056.js",
    "revision": "f4b55995ff6af1b8c681043b40129ac2"
  },
  {
    "url": "assets/js/218.8e7a70ab.js",
    "revision": "dc16ae929b4e6da9f864cf08b05a559a"
  },
  {
    "url": "assets/js/219.f0e39eb2.js",
    "revision": "c256a09125cedc765f18a781882a49c0"
  },
  {
    "url": "assets/js/22.477ff681.js",
    "revision": "318df4fed98d4a53a8d80db76d58b835"
  },
  {
    "url": "assets/js/220.df5663c1.js",
    "revision": "6c941d9a8bc46ed0739be9e1c21c9a9b"
  },
  {
    "url": "assets/js/221.4a8edd91.js",
    "revision": "2ee1a724a699386edef83df20665409b"
  },
  {
    "url": "assets/js/222.bfa47383.js",
    "revision": "897f469a0df419615ee2020fc51e51bb"
  },
  {
    "url": "assets/js/223.acceea02.js",
    "revision": "3fbfa0d78da8e725af911288470e114b"
  },
  {
    "url": "assets/js/224.c511f18c.js",
    "revision": "c91ae18a836d6df8c37ab92559b33c6c"
  },
  {
    "url": "assets/js/225.54be0dbe.js",
    "revision": "967f67b9cd64524dcf8f6316aab5cdea"
  },
  {
    "url": "assets/js/226.48cd8e34.js",
    "revision": "861d7fda907d76b386575479ca3419e4"
  },
  {
    "url": "assets/js/227.3b7bca27.js",
    "revision": "54eeb3b3997c3f28cc4d6b2c16ee1827"
  },
  {
    "url": "assets/js/228.d2c1a1b0.js",
    "revision": "5c36532424de9f32fe25828abddb4290"
  },
  {
    "url": "assets/js/229.ef6f962e.js",
    "revision": "e88247dfba00a8820741adeae3a406fd"
  },
  {
    "url": "assets/js/23.9c2c3740.js",
    "revision": "ff882696324566bc1a9b025cad40feef"
  },
  {
    "url": "assets/js/230.44c19e78.js",
    "revision": "bb5ba632e92ae59eb60e33c17f4f4f68"
  },
  {
    "url": "assets/js/231.cd6a34eb.js",
    "revision": "7fc0cd1ab8b3bec1a54ffa252959de50"
  },
  {
    "url": "assets/js/232.cbcbe339.js",
    "revision": "1b165c03c994a924461a8c603a6f5af1"
  },
  {
    "url": "assets/js/233.d3ba3759.js",
    "revision": "3299cc3157959bde17749417c2bd5d5b"
  },
  {
    "url": "assets/js/234.379a5991.js",
    "revision": "cd3bd4593eb4b2f608a334a2d6fe90a2"
  },
  {
    "url": "assets/js/235.1ce50201.js",
    "revision": "891c7bbdaf43ac592e06103e5df686c2"
  },
  {
    "url": "assets/js/236.31bb1dda.js",
    "revision": "0d6d971dbb2f6b21b7787f75b1584466"
  },
  {
    "url": "assets/js/237.1adf0e86.js",
    "revision": "666ac8fb5e8f18d22eab9510afb524a1"
  },
  {
    "url": "assets/js/238.f4b92e88.js",
    "revision": "770e1e5827224d31910df94ff185b760"
  },
  {
    "url": "assets/js/239.10002d68.js",
    "revision": "b7fddb4784eff526982b1dba7bad2d5e"
  },
  {
    "url": "assets/js/24.f67aa481.js",
    "revision": "1d1cd74aedcb0c8535fb9d83385a4f27"
  },
  {
    "url": "assets/js/240.d1c97b0b.js",
    "revision": "18685c1830335bb04435ce65433be6b5"
  },
  {
    "url": "assets/js/241.ad387b7d.js",
    "revision": "a4343d7d54448f3af9474b95bfb1d277"
  },
  {
    "url": "assets/js/242.647f8468.js",
    "revision": "77aeb4ade33aa1a8891088e69f88b00a"
  },
  {
    "url": "assets/js/243.ccfaf48c.js",
    "revision": "16191e01608d499a98c8e0bd2d745284"
  },
  {
    "url": "assets/js/244.9d49c53a.js",
    "revision": "38e847f88bfe475693a8dedcd753d520"
  },
  {
    "url": "assets/js/245.8ce1f10c.js",
    "revision": "075c38000dbacbce6c6db6026eaa78bc"
  },
  {
    "url": "assets/js/246.89552351.js",
    "revision": "41e90c1d49d4f951b7b8cc8ff98eba0d"
  },
  {
    "url": "assets/js/247.bc167ec1.js",
    "revision": "1017e889eb557e786b570df828e3f3a4"
  },
  {
    "url": "assets/js/248.4e9107ff.js",
    "revision": "88aff73b5124a4493643659bf62eae00"
  },
  {
    "url": "assets/js/249.072aaefb.js",
    "revision": "f28089e0c6d49ceba483eaddd109c81f"
  },
  {
    "url": "assets/js/25.747aa864.js",
    "revision": "92179d301218466541a625c0a8158166"
  },
  {
    "url": "assets/js/250.2d77cf1a.js",
    "revision": "69e2780ff62f800c46dd184720d53d4b"
  },
  {
    "url": "assets/js/251.6033cb8a.js",
    "revision": "0b74c764d404b540799b1edacf3c147e"
  },
  {
    "url": "assets/js/252.eed09638.js",
    "revision": "4db0efb89be7a02ddc1ad203c7bda80c"
  },
  {
    "url": "assets/js/253.c354f667.js",
    "revision": "121a1f373f1542f788ef9af12e025dd8"
  },
  {
    "url": "assets/js/254.5a38d6ba.js",
    "revision": "16675a477332036fafb2bde307d676b6"
  },
  {
    "url": "assets/js/255.f9f2c585.js",
    "revision": "10bf5954ea8d6532144c9d24783ea74f"
  },
  {
    "url": "assets/js/256.7e6de879.js",
    "revision": "0fd4144590b31e14f08f46e65c879753"
  },
  {
    "url": "assets/js/257.eaad95a6.js",
    "revision": "8ed37cc441fac10b2eb5228f4e56c573"
  },
  {
    "url": "assets/js/258.7e004952.js",
    "revision": "4a16e912b9332d52b189fe43f2683a49"
  },
  {
    "url": "assets/js/259.31f122cc.js",
    "revision": "16802643668402c6feca55401a4b8d4c"
  },
  {
    "url": "assets/js/26.d4b26c7e.js",
    "revision": "c440c65e88f220fa073aa61f6f9b6f2b"
  },
  {
    "url": "assets/js/260.7802f4df.js",
    "revision": "26c2bdf2c37cba8d2662027779b4bf5f"
  },
  {
    "url": "assets/js/261.3a052bb1.js",
    "revision": "852b9ea562538c109a1bcc575d0119dd"
  },
  {
    "url": "assets/js/262.df34772d.js",
    "revision": "cf07495e55bfc449c4cca0afdcf6a976"
  },
  {
    "url": "assets/js/263.42358903.js",
    "revision": "c163adf8af1ff3b963823ef8591c6d5e"
  },
  {
    "url": "assets/js/264.8c977f08.js",
    "revision": "d3c07b5af530c47f2e2695dbdfb998ae"
  },
  {
    "url": "assets/js/265.35ace144.js",
    "revision": "b66382a7d65b94260f95d42e05ff2c9d"
  },
  {
    "url": "assets/js/266.624d89fb.js",
    "revision": "4778b2c8b639392538c205a5c4a4ed9d"
  },
  {
    "url": "assets/js/267.90a09491.js",
    "revision": "5020e1dc46aa748a3a518d28a38a12ab"
  },
  {
    "url": "assets/js/268.44500fdc.js",
    "revision": "4fcca3987811d1259a660dc82393c4cd"
  },
  {
    "url": "assets/js/269.6b4f6471.js",
    "revision": "169a3069d9038b9d20a72e87b5dac454"
  },
  {
    "url": "assets/js/27.65b34c22.js",
    "revision": "56fd1366a457d3b041853d2a39d15c3b"
  },
  {
    "url": "assets/js/270.cd3417e9.js",
    "revision": "3a74d716f7a23a321123a4966b06f724"
  },
  {
    "url": "assets/js/271.33aaa354.js",
    "revision": "193627e5f3d2418e47eb9830990df26c"
  },
  {
    "url": "assets/js/272.d756d883.js",
    "revision": "1ec5468a335487d554b99ad0cd733dfd"
  },
  {
    "url": "assets/js/273.2052bca9.js",
    "revision": "3be52a08fe7ee7b6a009a6650d445b17"
  },
  {
    "url": "assets/js/274.c7b30bf4.js",
    "revision": "8c133fb943705dd35578cff95a827942"
  },
  {
    "url": "assets/js/275.dc329842.js",
    "revision": "48fec2d8e647923439c20c9640231723"
  },
  {
    "url": "assets/js/276.88ca6d2f.js",
    "revision": "67b1462f06af61ae0e7e3d6db8caebdf"
  },
  {
    "url": "assets/js/277.39d2b414.js",
    "revision": "deffe76f70b99db0fa463b9df90c5c35"
  },
  {
    "url": "assets/js/278.6acf215e.js",
    "revision": "8fdc80067094c7b3e66a15972174a53c"
  },
  {
    "url": "assets/js/279.72d3d2ff.js",
    "revision": "0209b917ed1445b2d42d05a7a2016f4c"
  },
  {
    "url": "assets/js/28.f3676726.js",
    "revision": "ca94f2509f9eee327f8e6cc87ccf5237"
  },
  {
    "url": "assets/js/280.23e27e92.js",
    "revision": "f2dcdebbc130d1270b6fbac882496e4a"
  },
  {
    "url": "assets/js/281.b768a5de.js",
    "revision": "a1693ee7233f4914920724898b220665"
  },
  {
    "url": "assets/js/282.9f02af63.js",
    "revision": "92bd99f058bd58100770da1f7fc137b9"
  },
  {
    "url": "assets/js/283.7acda4ef.js",
    "revision": "9fec9195909108fe6c59c09797b3eac8"
  },
  {
    "url": "assets/js/284.35cdf324.js",
    "revision": "ef228af36ac935e0ce296844fbe1bc26"
  },
  {
    "url": "assets/js/285.baae551b.js",
    "revision": "e64948f9129b23d37695844bb9e32b38"
  },
  {
    "url": "assets/js/286.2d7daf0b.js",
    "revision": "7de6d9b27c48744a67eca9013bad9f3b"
  },
  {
    "url": "assets/js/287.f2fd321a.js",
    "revision": "7f8a23f780d1740c5db36bd575a48814"
  },
  {
    "url": "assets/js/288.3e811529.js",
    "revision": "e784e0e59daceb76ae583da79119cbb1"
  },
  {
    "url": "assets/js/289.10c06187.js",
    "revision": "4de4161f66b31db64ba84d127529e113"
  },
  {
    "url": "assets/js/29.49409d3b.js",
    "revision": "be345d9337b2920f76e33bf7022bebb3"
  },
  {
    "url": "assets/js/290.21cdc7bd.js",
    "revision": "c22a707a0ea07d341a7e122391f88b34"
  },
  {
    "url": "assets/js/291.de0e103d.js",
    "revision": "8745ec898c7a7aec1bf752c21cbd606d"
  },
  {
    "url": "assets/js/292.4cf7a6ec.js",
    "revision": "eba81fdeabe4e7779135c6d2655fd053"
  },
  {
    "url": "assets/js/293.bb4da18b.js",
    "revision": "21a6531eac5853c9fdb36ffd12cc52e9"
  },
  {
    "url": "assets/js/294.696428e8.js",
    "revision": "a5d39b1230b64b2cf87c651b22cc6caf"
  },
  {
    "url": "assets/js/295.252da744.js",
    "revision": "2a53e253d686daaef1857475e45309d4"
  },
  {
    "url": "assets/js/296.8fe0d64d.js",
    "revision": "16527fb7533fe9ed193c4a7342a40114"
  },
  {
    "url": "assets/js/297.98f7ae4d.js",
    "revision": "e5b4e9e3dc72a81d8a38468953ea6a14"
  },
  {
    "url": "assets/js/298.1135ddf8.js",
    "revision": "aef911acd853d820a30444adc921cb58"
  },
  {
    "url": "assets/js/299.93fa6c40.js",
    "revision": "c16799485203b2028c19b0994ff30f6b"
  },
  {
    "url": "assets/js/3.c1955b48.js",
    "revision": "97efa7d7c251865ff0631b2444a0d937"
  },
  {
    "url": "assets/js/30.92f0fa01.js",
    "revision": "ab209ff8c3f5e6e93405caa6e5bcd4ab"
  },
  {
    "url": "assets/js/300.ef1f5344.js",
    "revision": "6f239f25b4092b51e95e62dacea19fab"
  },
  {
    "url": "assets/js/301.009be78e.js",
    "revision": "ecf353bee1cf86304a7d3e2370cba9c3"
  },
  {
    "url": "assets/js/302.beb40571.js",
    "revision": "86a64f61c1ce8bea1f43a4d688bbc497"
  },
  {
    "url": "assets/js/303.38f38c28.js",
    "revision": "985601569533f9ee8487a10307c0aae0"
  },
  {
    "url": "assets/js/304.37cd9ddf.js",
    "revision": "a4e003fce0feb7ac4026dce373479d92"
  },
  {
    "url": "assets/js/305.b3552280.js",
    "revision": "ad721bc2cbe6076f515045716ee35bcc"
  },
  {
    "url": "assets/js/306.aed82e7f.js",
    "revision": "86747e7daa1cc95c89769d8aa689e6a8"
  },
  {
    "url": "assets/js/307.c8229060.js",
    "revision": "6e61d4974a8c883567303b50596ab75e"
  },
  {
    "url": "assets/js/308.0761ccb3.js",
    "revision": "19a15162c87e5a002f9d88f6eee38663"
  },
  {
    "url": "assets/js/309.0d08e561.js",
    "revision": "40d7fb88376f2c90a905841d2366fb26"
  },
  {
    "url": "assets/js/31.ecc894fd.js",
    "revision": "e782cd5260818cdf02476ed0912e2a3f"
  },
  {
    "url": "assets/js/310.80359d9e.js",
    "revision": "1751d1e646d3a2942c429aec28e0694f"
  },
  {
    "url": "assets/js/311.1811424b.js",
    "revision": "d7ffdb528704f11f5366a26708770035"
  },
  {
    "url": "assets/js/312.e3b11c46.js",
    "revision": "63f84eb22845ec3d2c9611a7d76dfb41"
  },
  {
    "url": "assets/js/313.61c16524.js",
    "revision": "d8ee96be3882a5a1e1c9c8a7a052683e"
  },
  {
    "url": "assets/js/314.8671fa63.js",
    "revision": "a62a941db1affd259a2a496e05888241"
  },
  {
    "url": "assets/js/315.b0aa774d.js",
    "revision": "0f565545769675fae33d93e7354b079e"
  },
  {
    "url": "assets/js/316.cf1a3961.js",
    "revision": "ddfbabadc3195a39f2f8dfeb343d2d60"
  },
  {
    "url": "assets/js/317.751b88e4.js",
    "revision": "82742be778f40c2b08ee7bcc6df9819a"
  },
  {
    "url": "assets/js/318.5386b7e8.js",
    "revision": "c6d945d495c26614bc9c785ee2774e8d"
  },
  {
    "url": "assets/js/319.f0786766.js",
    "revision": "5b990f6837f23ddb5447df4a5bd524ad"
  },
  {
    "url": "assets/js/32.f1af5a73.js",
    "revision": "f4da338f4f63f244caf72af9400b0d20"
  },
  {
    "url": "assets/js/320.08ca32ca.js",
    "revision": "74504d8a4361cb80a06123485be07522"
  },
  {
    "url": "assets/js/321.2b37a373.js",
    "revision": "7d5ae5a9245b3655cb446eb264307571"
  },
  {
    "url": "assets/js/322.551c23c0.js",
    "revision": "7b85e1dc6080969723cf9deb67003288"
  },
  {
    "url": "assets/js/323.1cd5d91d.js",
    "revision": "cac72789d519aa1214cc06ea962e24bf"
  },
  {
    "url": "assets/js/324.c66b1cad.js",
    "revision": "9e7be67662cb7d77c1a6a91a42131611"
  },
  {
    "url": "assets/js/325.9561f106.js",
    "revision": "6a0307f22bf38538db5cb9a4f9af4ea9"
  },
  {
    "url": "assets/js/326.ad74fbfd.js",
    "revision": "14f0a54dcb2f4eb8d6bc87d0cd1896c6"
  },
  {
    "url": "assets/js/327.b2378680.js",
    "revision": "8314d6edae927922ba795c14871b2fdb"
  },
  {
    "url": "assets/js/328.6a71ee59.js",
    "revision": "48d4f1dc248d6eb8f33a28854eb5b0b0"
  },
  {
    "url": "assets/js/329.326596d1.js",
    "revision": "44a6520c787e2698a0b0b2e85cc8a48b"
  },
  {
    "url": "assets/js/33.f1af654c.js",
    "revision": "42a4c2a40608135e6758fe63e0c1d22d"
  },
  {
    "url": "assets/js/330.7ff984af.js",
    "revision": "db6e5da2abdaa39ba0f10ab98216af00"
  },
  {
    "url": "assets/js/331.d0b0dc6f.js",
    "revision": "068dc0edd3949ef03cefc6cc2a25cd96"
  },
  {
    "url": "assets/js/332.a0bf93a6.js",
    "revision": "676dc7416d41ab0f7821742d583d7e2b"
  },
  {
    "url": "assets/js/333.539e2acf.js",
    "revision": "e026309416ce379cccc832db42caaaee"
  },
  {
    "url": "assets/js/334.1ceb4865.js",
    "revision": "5b25b409af19b84835668be595bffacc"
  },
  {
    "url": "assets/js/335.071e311c.js",
    "revision": "f18d323643577374f490eacb90bbabd3"
  },
  {
    "url": "assets/js/336.a9c303c1.js",
    "revision": "98c0dba1ff30081c46a2437e3073864c"
  },
  {
    "url": "assets/js/337.7b323ca8.js",
    "revision": "d55556cea6355990c822ad89bf91bfa0"
  },
  {
    "url": "assets/js/338.cf26e227.js",
    "revision": "9efd9c276619facf8d0d49cb33e2ab4a"
  },
  {
    "url": "assets/js/339.24732a16.js",
    "revision": "a70f11b77ed986ba943b2bb273f269a7"
  },
  {
    "url": "assets/js/34.4d586176.js",
    "revision": "01ed50f821fae36e4020ce785010ca47"
  },
  {
    "url": "assets/js/340.2bbe9414.js",
    "revision": "2a7eda47acbafd7a25a889e6206a0232"
  },
  {
    "url": "assets/js/341.a91658e5.js",
    "revision": "573af9ce5c51b2ea3857caf7d532466e"
  },
  {
    "url": "assets/js/342.064821bf.js",
    "revision": "3b63647c184a99c4c3a8b37f95814d69"
  },
  {
    "url": "assets/js/343.560c689f.js",
    "revision": "1d6202d826c125e853729a8d8806618f"
  },
  {
    "url": "assets/js/344.43fc691e.js",
    "revision": "ace74b49516526ffac18ec765311888c"
  },
  {
    "url": "assets/js/345.24af1984.js",
    "revision": "68574b9ae271bbc50cc022227d2ca3cd"
  },
  {
    "url": "assets/js/346.3ef1da48.js",
    "revision": "97f00cbcf589a220d5465902ed433d2b"
  },
  {
    "url": "assets/js/347.284c2a34.js",
    "revision": "351872f4fcf68e68102eb9fbbc06e857"
  },
  {
    "url": "assets/js/348.a1a83b50.js",
    "revision": "55c1039c906eca4ec0bd71b1e0770d47"
  },
  {
    "url": "assets/js/349.a40c7849.js",
    "revision": "28748dd734a9aeaae81b7b833ea79184"
  },
  {
    "url": "assets/js/35.d08649e9.js",
    "revision": "298e484b4e9bfba0e5887eb30274ba73"
  },
  {
    "url": "assets/js/350.0e70e593.js",
    "revision": "1a093936a7536bb818ae19a52c9d716d"
  },
  {
    "url": "assets/js/351.fad0a60f.js",
    "revision": "fb4a88f2586fb7eb1c9718511f1cbf5e"
  },
  {
    "url": "assets/js/352.3d74cced.js",
    "revision": "d79022a41d904c51d6f04b4bad84f11e"
  },
  {
    "url": "assets/js/353.065f2754.js",
    "revision": "6f71cf4a7e5bd09c67a52a1077958fcc"
  },
  {
    "url": "assets/js/354.3d0b92ad.js",
    "revision": "565bcd1193709b1861ac18be91c2350a"
  },
  {
    "url": "assets/js/355.88c86905.js",
    "revision": "a7d44ec1520194fa690a415aaf5841c5"
  },
  {
    "url": "assets/js/356.807cbd24.js",
    "revision": "dd3cad9020cbfe8d53b2e53215cd9022"
  },
  {
    "url": "assets/js/36.c60bc1b1.js",
    "revision": "3edae67d60229237fccdad45b7c25c08"
  },
  {
    "url": "assets/js/37.b1e7b118.js",
    "revision": "2e4ff229fda23d5b4cba7fdfa890e8ad"
  },
  {
    "url": "assets/js/38.4d97b222.js",
    "revision": "c13d491dddf029395dd024ce5a6343c9"
  },
  {
    "url": "assets/js/39.90fe96cd.js",
    "revision": "bb4ea2c8aa07a042929ad9c4e613ffa2"
  },
  {
    "url": "assets/js/4.3ca1fa5b.js",
    "revision": "bb6d5be9ca3e47e642bccdd11ce313f2"
  },
  {
    "url": "assets/js/40.50154a12.js",
    "revision": "9bd8bdf4fedb5c7cbcf60df126e950b4"
  },
  {
    "url": "assets/js/41.d91722e9.js",
    "revision": "143562bc4f8a070d36dc2649ccf77217"
  },
  {
    "url": "assets/js/42.09acfac5.js",
    "revision": "ac1eb4082afba8d7b1c5976815e26786"
  },
  {
    "url": "assets/js/43.85f26cb1.js",
    "revision": "2280c86677a5bc5eb9a074f561a7269e"
  },
  {
    "url": "assets/js/44.d860bf44.js",
    "revision": "456750772b0bf42b5e5726cda4943b24"
  },
  {
    "url": "assets/js/45.da588565.js",
    "revision": "58b9acc8f5e4a0592ebfad06f5061e78"
  },
  {
    "url": "assets/js/46.edff059c.js",
    "revision": "bfb8b0a8d210523c36434542b8f6b15f"
  },
  {
    "url": "assets/js/47.cc572a18.js",
    "revision": "6c17f83dc45509038c0494f593fb838c"
  },
  {
    "url": "assets/js/48.2954cefd.js",
    "revision": "6516cfcdd8f9d3ebb634d4ba1b372e1d"
  },
  {
    "url": "assets/js/49.8ec54c78.js",
    "revision": "cd235adad39d59f7eb0bebf51e49d5e5"
  },
  {
    "url": "assets/js/5.9e3412ac.js",
    "revision": "aaae119d264b7fcc0ec38aab24f6e5b4"
  },
  {
    "url": "assets/js/50.d474c449.js",
    "revision": "5148bf7e10e7311868e69724adfb354f"
  },
  {
    "url": "assets/js/51.473f7d9b.js",
    "revision": "3831ebecfb36362f902bbc0524b927d2"
  },
  {
    "url": "assets/js/52.fa598d5d.js",
    "revision": "0f9f68df6f4e87532c12f7fc31f65770"
  },
  {
    "url": "assets/js/53.6144b050.js",
    "revision": "cb52387a0f7a8b45fb438d2f7e3d73a7"
  },
  {
    "url": "assets/js/54.2f99ecc1.js",
    "revision": "f3018da4057c151508518e019df03a08"
  },
  {
    "url": "assets/js/55.39d9be60.js",
    "revision": "5523764aa017641fc4d8551d130d11c1"
  },
  {
    "url": "assets/js/56.ded48f9f.js",
    "revision": "0f72015d57acca95eaf27f6ee943f1b6"
  },
  {
    "url": "assets/js/57.cd09f8a7.js",
    "revision": "b7f02bc5c8c9f2367a4350d2d8dd9daa"
  },
  {
    "url": "assets/js/58.218b9383.js",
    "revision": "5e914de8161082f5482e59e6da908ccf"
  },
  {
    "url": "assets/js/59.cb138dec.js",
    "revision": "cb80ba91a4b73a1b722d746ee45ab625"
  },
  {
    "url": "assets/js/60.161ddc19.js",
    "revision": "2a69b824132439837643eb8542ddb995"
  },
  {
    "url": "assets/js/61.f8a110b9.js",
    "revision": "4426fb50178d2d6f74a85078ede2fa2e"
  },
  {
    "url": "assets/js/62.9d6e939a.js",
    "revision": "64c44bdc5ef492a9ea287dfacb231056"
  },
  {
    "url": "assets/js/63.29fdc33a.js",
    "revision": "b2f887f0ee6d47539fa03d9eea580bd4"
  },
  {
    "url": "assets/js/64.56c90e99.js",
    "revision": "bfa40c73845b3af2ddefd68f9490b573"
  },
  {
    "url": "assets/js/65.0580c20b.js",
    "revision": "741f5f8419c481a7315631e5dd621c02"
  },
  {
    "url": "assets/js/66.7a3b8d1f.js",
    "revision": "f8fae3c8c48e20886596a5dc317f095e"
  },
  {
    "url": "assets/js/67.7925ce00.js",
    "revision": "bd78bfed4ca93e2858bff6638b0a8ac9"
  },
  {
    "url": "assets/js/68.6913eae8.js",
    "revision": "bf4a78c334477e5c3577344cdf0503cf"
  },
  {
    "url": "assets/js/69.262a8b62.js",
    "revision": "c08e2883fe0eec13543f4c573e07c828"
  },
  {
    "url": "assets/js/70.b37ff43f.js",
    "revision": "d94e6f5eecd2051a2d88312915577d26"
  },
  {
    "url": "assets/js/71.5c6455d1.js",
    "revision": "175678908a9a12d7790bdc5d85913853"
  },
  {
    "url": "assets/js/72.90316317.js",
    "revision": "665cbe7d924df057dd8d8f09329b31eb"
  },
  {
    "url": "assets/js/73.86600561.js",
    "revision": "0ea955c940a5a2e718d0ab201c479605"
  },
  {
    "url": "assets/js/74.47ecaa29.js",
    "revision": "045d741a75efc8068c2a932f40368e67"
  },
  {
    "url": "assets/js/75.b1212c30.js",
    "revision": "9f7c54405abec77c44c95ffb73a89747"
  },
  {
    "url": "assets/js/76.042f2cdc.js",
    "revision": "1506499201d2da1b05fe765d5d493727"
  },
  {
    "url": "assets/js/77.e41b1349.js",
    "revision": "247d1c5583bc1c96032017ad99260392"
  },
  {
    "url": "assets/js/78.48a0b47c.js",
    "revision": "115b8bdb677c7aecd86c87f7846d061e"
  },
  {
    "url": "assets/js/79.f8e60eb4.js",
    "revision": "3c60beb723f88c23ccd7d1f2e3a854db"
  },
  {
    "url": "assets/js/8.73361c99.js",
    "revision": "f0c74149a98244a94c19d8af42d42f01"
  },
  {
    "url": "assets/js/80.b3aa4de0.js",
    "revision": "64b286d2a43a525e60a6f08fa839ca59"
  },
  {
    "url": "assets/js/81.1481c7a9.js",
    "revision": "f5f05f03f69797f07c96497bb3af6070"
  },
  {
    "url": "assets/js/82.07e60b47.js",
    "revision": "5b3520cb6a12fbd8980a26177366076b"
  },
  {
    "url": "assets/js/83.ede4c489.js",
    "revision": "64e8f06edd5bc9cac1aac541b17c06c0"
  },
  {
    "url": "assets/js/84.0cf1a190.js",
    "revision": "14cf8625265308d6fa4147b785cebbd5"
  },
  {
    "url": "assets/js/85.134d8045.js",
    "revision": "a928664839ad4aeae4893a3b4093ed0e"
  },
  {
    "url": "assets/js/86.168608f4.js",
    "revision": "26eda3a8dd638be76a2e1c01c85144b0"
  },
  {
    "url": "assets/js/87.4542fe66.js",
    "revision": "5af2db5340f7616a57811bd8257955c3"
  },
  {
    "url": "assets/js/88.d371144a.js",
    "revision": "9a698acb36803166b1a06e0d320c836f"
  },
  {
    "url": "assets/js/89.c87f390c.js",
    "revision": "bd5cbca21f673d7066d25800e07d3d3a"
  },
  {
    "url": "assets/js/9.1bd3c6c8.js",
    "revision": "c7a7219ff64de36e2ce4578931ca5ac0"
  },
  {
    "url": "assets/js/90.1129c810.js",
    "revision": "a79b6ac89800c8f8fc2343cf90f3c7e8"
  },
  {
    "url": "assets/js/91.636033ef.js",
    "revision": "de90deb7f655c94c7c7c2596b9741131"
  },
  {
    "url": "assets/js/92.3cc1744f.js",
    "revision": "c74c137f5106a78f0a9fd10a26b38b87"
  },
  {
    "url": "assets/js/93.8d8d4ead.js",
    "revision": "5f4e61c8efa10f440141db825c1ed761"
  },
  {
    "url": "assets/js/94.d46abebe.js",
    "revision": "5df2e05a21c987617782e4e856e0b7c2"
  },
  {
    "url": "assets/js/95.389539f8.js",
    "revision": "e618b614125f94462ed0e12b65cb2b71"
  },
  {
    "url": "assets/js/96.778e095b.js",
    "revision": "ceb32c46b5018cba8319b8498c135751"
  },
  {
    "url": "assets/js/97.dd74c9fd.js",
    "revision": "a3b3e56f63da116e343dc125ebf4792a"
  },
  {
    "url": "assets/js/98.821dd81b.js",
    "revision": "701762854260fb90c6c9bfbfde97ea05"
  },
  {
    "url": "assets/js/99.02e32d15.js",
    "revision": "40d3d841a953a70fe37d30779e9f7730"
  },
  {
    "url": "assets/js/app.77e0ffa8.js",
    "revision": "1bc3ac368c8da2bb56d62bbb1cafe251"
  },
  {
    "url": "assets/js/vendors~docsearch.f906ac8f.js",
    "revision": "455cfb6ed1e3f9006f5372f2702ec7e1"
  },
  {
    "url": "index.html",
    "revision": "8432ab69bb814f42efe1aa00c9d4e0c6"
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
