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
    "revision": "8a8464bef4ef13df67f7f04ad43c6922"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "eeaad58199b583c21f382d44918512e4"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "39432268a50a842f9a4ddf04e7dcc11f"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "9e0bfa522a29e2498bece6fd88cf50d9"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "42977c62fdce4237eaaa9dcd4fa9cfb8"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "28a4762eaf22928499b6b104efbbe365"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "4eb36a5fedecc9bd533f26074f5c6d0d"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "15969f087000c621f6e1c02ef91cf5e5"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "747f514f345547dd6b8a4def0aa88586"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "d7fb0f0b7f83ae279581178ea286b6cf"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "1f6d3add009b71c48e798affa6a67be2"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "16b3b7cc5b601cd5967b2c710e5e82a1"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "3bd7749687ecb1c1958870635c039587"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "09745f59a335d08fd8f9d5696260c19d"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "ca2c51922bf7b07b6a66e8eb8f00356a"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "6ce5b974e92340d376e839fd63c3a0c6"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "894c6407ce125fbd028f2dfc2352d9a2"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "5c6bd8342046810c261df254d60c291f"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "fcb4a8c8f0e51060b15fd9dd168bd1be"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "08442e14b73cabc1bed922d4333e8f99"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "0df6e3d8f1f93297893dd74049422e73"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "27f6bd529e4b40a659afa3f7a478229a"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "d818f3895ea2502b08c0755bb7df38a5"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "e273361e95fb47a3ebcfcb645624af86"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "229128e59ead601aa5304ae364718940"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "cae00b2ab2324452f96cd113ee574d71"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "711f5e58fd6830010ecf6b2c32442c02"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "09affa55654ab61048b0706fb9da926d"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "96b3552a48f3d6525e7bcd6990b41857"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "d7fe50c53287d91a57324b5fff0b0d7f"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "8dd7487b46ab18814687ac011129f3b8"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "e0c56f8a2add2dd14d5c1b4a251a0993"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "19ff86b2d77dd728ce4cb76069949c32"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "bd2c800de22523cdc6adbbe5e6a48568"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "45f0e2902211f1a38b0e0ac91da4df81"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "95631a00f17a02047b32837c50fa6e50"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "a011bd4efcf630d661e4f026f91836d4"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "3336c8b3e26a941a4a67b0e7bbcc714c"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "62af37e52ca01e429febe23c542b60df"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "0f9faed08140b6b6b232bda12dd3bfad"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "69bec6fa5772150ef089cffda3b04769"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "2c9994c68df0ddb623c6cbffdf51b7c6"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "60df5fb193c58aacac003a0d535171f8"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "8ce93c5f1342249998bc4e40b210c49a"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "ededd14c6c354aa9b3e36b3d3605ce55"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "35e28e1c5c873d572750b5e2d1f701bb"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "b00bf881443c40e2d661ce6b58a23cbe"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "dccdddd0485be7baee9b486746633acb"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "ef8e46574f1012084ce2e882fb4bc327"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "067e3dc66527e8fbb9c5b6e3554d63b8"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "c849a6ea9f176a6e2b934533f3f4e946"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "f8795663f75e91d8dcd4e220394f34d2"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "445d94902304d2a60f83800bdce19c38"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "6c5b1e248cd0b3c681adecd43a0a17fb"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "926c4bbdc545f0060d25a831f9a9929c"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "ff5a654d4eb0dac5f08a3f48dc719ad9"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "5564b99ab809812e1cb1c75b59647e24"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "110a69542310b697a241dff5935f6629"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "ff62789efbf2c2499cb6fcbf6f75e677"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "7d2418bde462952b2196bf717cb6fed2"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "1aaa41f99ed9d9b40460a9b0e7f9023c"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "a34f595dec08115063981f1cc17a4e2a"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "984d9c25212a972fcfc6a5a11cc6b33a"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "0723b29cfa0a81ce1cf24dabe965c7fe"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "791781fa5383a8e4592a3335e09fdfe3"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "e8af7add56ac4dfbaa2dc6e7f827c57e"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "8acde79d47634e37c150f5355851b5d5"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "42b2cb690baadd1b7595e338312f4115"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "b0b13c515b033cd23d0b1446dbcdc080"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "d63188c41281b568b5b7c508f67593e4"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "8ef12804a68eac0d05c40f09fd7bfc63"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "8116bf72b1e3ce1ad0463802f07427da"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "0f80a73b8e65f57bb556447102656796"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "894ae9170532f49ccecfba1c9872f944"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "dbf8cdc9b77ffa80325f985fc13a3635"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "09d825d4273907d78707e0fc18d987ee"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "68a193faf2b79b702832fb8cb20ae39c"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "0ed41e574fdecde2bae7a07e7a13eb26"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "bf4324e6be96b12d4dfd2fea58babea8"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "9b39cee7a4ab42c1f0e998ca7a5fb2b8"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "9c41bbd108e0bdb35fc1ae036661239d"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "c6b72c60973219914de2dcab2cad9f06"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "4679fc1a1de0854327c67a7246b6b6f6"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "77350a49c0ae34609551a33129bf27b6"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "146c13322c5d1a47c7908b7afc43b677"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "5cfcb213d7ee9e62d0611bc87771d92e"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "c3010c4ae99e39973069740457e11886"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "659b1df85b2430e995dc111b20c1f07d"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "62281a1ecfc35ebebce2ab47cf99c398"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "e6132b6237d82aa83b7eee8b589d7525"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "b465a6283c51653a340d3e021e122dda"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "a4eccc40f850f9638ffb0eded42d7f41"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "aa9b46b287bf9f11fcd6952c20e88cd1"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "df0aab10712c9270bd0b5f2bbcc80d95"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "ee5cc407f99f162de756611f0b2053ff"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "41864c25962bab2d3af0aeafc8f8b9dd"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "8e89547d0600656624a9aa8777ff72c7"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "eb2910e4b1c9659e7a34c5acd63a8965"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "ab098b01e72734a0c342cd1783b99860"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "fc089b86f0e65e10c84baca50fd01df7"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "bf39fe76d12e97b4e1f0d4cc70cf1012"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "21d2a04c1f4c27c8a11f4094330f4ed6"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "2a2b8ade826b9816e36c9e01f49baeef"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "d16ecb394d15656c6aa0c8e1f910c40d"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "74abd48fcd9922adf43be877b4bfede7"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "fee0aa95e66529231572f4f37d84c31b"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "ade2c02df9a342013e296651a5908b2d"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "c724c3f12e42e066198e49c6ee29658f"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "933984531fc78606697af4a9bb0b789d"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "d796d486115b68cd19fd9d66c8aff43e"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "ecb0400ca98d8ddcab583b0c602d7e67"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "12fee02300ff8c80e5e51ea0914282d2"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "9944d851e109b9ef90090522beb6ef75"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "d21530b1bc35062d8aa8a0644aa2ea19"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "02d9b2f113a94a631a7e2cc851075ce3"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "521878b99e412d28caee09869f989bc7"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "3de802cbc9a7a1665cd23064ee754e37"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "e9fa37c1806ca535f0cc93bd2164b68a"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "2a2392eddfc4de9033598d79d6dd5c5c"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "187e6e7bb4f7fdf077bb8d030c4f8653"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "9b9461475a1c47e6f4afa74aa9cedb12"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "15ab9aa734ca7e3ea82939a613d77775"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "e5f94c33e97910b60b4777f41880267a"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "96eab5037454430938d24d16fd48be08"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "a62fedde45d7a10109c401c349f05922"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "0f706e6c0139aa98d6c2502806a35e48"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "c9f8e2a506f01c07fbabcce1100cc8b1"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "f79df4e827232e910c08c67566860449"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "665ecafdbbfd419a8416f80721614cb5"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "74c7dd732e0e14fb1a7b7aa0389e6fef"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "02f8f5c9c42d85e799ba8fc1aceeb201"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "c38fbcc22948ce1117de5f7f664a5b78"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "04710ba82b60893e741337c6d6c982e9"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "4c379d87f7c5c8df9b2afdc0d6be53d3"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "e154cdc4f4ce16bc892ebbacdc1ff545"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "b929e9ab7fbe1f26b25093df1e9fdc60"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "1a4ab48d5d9ee9c613315f6887fd7c60"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "619485524c95cb9bd4b8d241d080dec1"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "b1fe6c3850876c3a3bc7e76e8556ec87"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "65228585cbf45885c31b464edfa7b45c"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "b882ec7225f28f0cca0fe01509c08b6b"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "d73604b3954654c7bba60f8f1ead4999"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "51078720a9e770a72c0fdfa709611d80"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "8627eefdc3b93f0a29ab50bc4fb2b9e0"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "453ddb0111e67715a49942fb9476ca7c"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "17c8715a26e626409e115d6d5df1b7bc"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "3c4baa7f337046977bda435de2b07390"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "922db9cfe5e3d2dbe309fb48a73000d8"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "13fdd87814b233dca2cbd3f85978f04e"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "3c3f3ebf93935728716e3fc9d6692a33"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "77c92ccd0c5708d68e475875dd6257df"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "eefb421fff036bb82c453142697913af"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "4fcfc7f66320361880128ff6b555f3e1"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "4c53063b1616436fe00f5d3e72494295"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "40c486d55c92f1949d783fcf30eacafb"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "0077c7a24f16014a9a48d96f07a47bef"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "45f6fbcd0d7f0da270f9e1e7a03568d6"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "0a823f82ea78992ef890a2485d2ec70c"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "eb838e7ff0eba29914802e27c87b8809"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "b5e50ba0da3672f457113413351f965e"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "b965171799a01e218bb2d2a8ea747aa8"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "a3f33e3e59b6176f770fe6123a31d3f0"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "219843ea3c674016a0326dbaf1d924a9"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "d146fdb36f6ec82cb8f326328f2d62db"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "97dbdf52d49bb1935e41713d73c9e4f0"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "4d2318e90710667b988a9251c01db30f"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "310a78199688a9d5a83471f045eafcd0"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "c75979509f70ce3f4463fbf5f75bfa05"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "f7e659cd51159e826380dc05f8a6568d"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "85589fd97ec319dab3a10eddb0b4922d"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "3509be7a54754580626d621a9f5e6973"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "711e7e3dbd3e0e0dbef4f634f4a5bc5e"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "8f6d7546cb8addcae340c0bdab3a2288"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "cba3a44ee2ee509e56731ee2cfcae12c"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "88549072806ff10c2fc86414794bf3c9"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "e3b314bc0a05c628c6593d420651bd01"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "4d53fb060e5d4c653f5bc2c12a2b13be"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "fb6ebe565df5b4f5fc1c2b50327c84a6"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "d4b003e52bfcb674b75da1127dbea1f5"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "e7b6f8d0f37a1ff3105647eef5a7fafc"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "cdaa3e9f2c2184e49cbf84aada25d040"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "e2b41e143397b96b868683517c7655b8"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "af3bf51b98e7d4ee6008cc95ff43c989"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "14d9f63f45b32076b540192edbfdb6ed"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "872e654990ccef50c3bbc59482a1f161"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "2260b7d6904800806126a3fbfad3630d"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "f4cf8762886ca052456b3e503147ec0a"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "b2c1bb74ea05703eaee706114c2d7713"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "195bd2485335f122b5008c0a59d6e635"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "a0df8aede2ce8b59dde11ae249ce6134"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "bd8376680be873da6bd9768958fe4efc"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "1f1e15005c0c670e448e0d3b5eb05c8f"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "cf06021310cd5b31749e832754d4a85a"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "230f226db01c996dff8fbc4a20f255d0"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "60c1335c17ef6e82a4664b141f35ccb7"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "079130704b56208958b8747aa99c4b8e"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "806eab0c0db00dc1da8537ac9da1265a"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "4c17d0616ebe019c45916b7989a4f991"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "b5bc1dd940bb157e4d04e31ca0db627d"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "b6c8af3653299775ca4b0f1f3985f0ba"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "ab0080b755972639dce30ebb34a4cc1c"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "fbf452978208b0f2edd8f07fcb18da69"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "993a1c930d4453e0edd52efd3cfe093e"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "f7b75bb81e1c30ed83361ea2e9e95ce6"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "0eb9a94199395e42aac98ab9fdce40a3"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "bb111b3ec0cd7dcaca19bab547932883"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "21f266febbb2bcd90072cf0ff8ad63fa"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "735dc4669799bca1b53df3836b9ae4ed"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "577ac08c104ba0c09c26aaa78596574d"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "29afc0882ccd761830455b1c7b494017"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "b9c071d5b55abc35d99dd619d13a8af3"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "cc9011c1a591e8d07d8e1672f35ff64f"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "33b29f95a4b71560a11e88f55ffdd4c5"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "5afb6e44bf05489bf32c01bf9b79f73f"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "bfd865dd033923da0d848c9c99ed1d95"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "af0f73ea56e0fd0513c43f91f3a89aeb"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "e929ff9c67677afd438a79295865a952"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "b39d8d9e416099d6eb7de0d3242b22f3"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "9685c5fc5020907e038bf350dfc994c8"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "ac7c486e77e2ddbef1e1e37d80f711b9"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "a6b4459a5f57cf68a9ad0ad0713ea8ed"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "ecd6dd55a2e98f6ee75084c2483c034b"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "8708b6d15f12873c794a3e72c0d11e0a"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "70c036b36c6c12299dd6e33ac6e11a66"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "e78dad756def100d41f950ea1641b4ea"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "3e3aec96af38389d969d81694705cd5e"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "a8e293cd8b7b7776ea34bc99eefb3639"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "838bf17b8ed021b304f2be78a5b4222c"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "6cb530bfa7bbe04607c75190fc09e113"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "19e9902e33bc8e2272f4bbd7de871f66"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "a8ba68503702f807185b1c5dede6a4ed"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "92d5b7d585bb910600fb8391d56e2860"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "9a78f568c28ff8a4f990e369e6ebc6fc"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "e4c41c5c778e6b341bca41337bc120cf"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "57cca39f41e3b805a7ef2e7f17697524"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "1de371effa8fb12713ffbe13bf629394"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "90928174cc7cdb90fdd6cb944c4ce713"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "cdf3ac4a09d06ef005e59f2e64c8e01d"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "86187c4e5ac1cdcb2581334e103fe96c"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "01519d539c6f330be99a65dc0b97d2db"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "38f6d39fa53b53adfffc43fd4e4232ea"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "af032c76adc633ac4f7f2cbe2269b80c"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "08960b201771e0801bd0f241f509076d"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "d6c88d1adb573e2d389315fc27469656"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "833ab5e1b63cb81d0e20d6aed89601c0"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "7925deb8a5f71420b3646111e3951c53"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "d6a31afcc5a61bfa89e625419f21a746"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "dc6a2f5b919ff85008e0094be6f18ffc"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "6f4916cb5e57f57404d93278b849317c"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "5856bc0bdf89ede53470bd24ed6739f9"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "0cbd58c3966d8fdda18bbd639b51d496"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "83f69526c3fdfe5834a0a244c03d19be"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "72622fab65598e99e6cd40b623a6505c"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "fbab6343f0110e9e90135e21552164b3"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "6c37f6dce715c227a80cca5261f6350c"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "5833e24076017e2aa148efebbfb7fc44"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "f99f9d721fb260897d8a8b8cf3b5054b"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "49b93157656ec7c3cd16adce6454de5c"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "c8d20346d2c908a551a696b42e8e72ac"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "bd0c979e8a755625ec6b9859f63fc065"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "902464efd190816f4fd91a55f57288d4"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "29fbddb6eb5dc5508900204ce7f9d397"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "8b66d68fd0e70b2d2e0d0d2ca9022c20"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "ca5215d7e7c8d656f2f76750e5c73d51"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "5efa33dd65375afc125ab7d5d4a2fe21"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "dc60c26c073a6ece17a2a73bb9771775"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "1a6a17def00f9637ac44ee871a0ff935"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "f64b82ea38ee0d3e11651dc4a03ae619"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "fa956c529888b20858c140c2750285a5"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "84e8d6d6dd44ff4870c2436eb0e37300"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "61f0bff5ec97027e635ea252c86a5b38"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "20aa075f9e3def6b4b2a14853778e044"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "881a6005634e6b38334fc5a1651e0b88"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "c5677d3d8e4e50363d2aae7d194c3356"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "a1fe896b16e6b8ea3ce1ce1b8f2a3b0f"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "b6430472cffb8abfdc0679669bdec225"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "cb9a268fc5472b401a349946e708a575"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "bf10886cf891264e245498963d6ca543"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "18c08265e408730f73440d6103b5f6e2"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "b67c91cc8a1cf0692052270f51f71320"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "289df00aa8f870393be085c31edab6fb"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "549b821e60a9d7ec04814e1c77395f61"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "35dbb61ad17a6da0c3baad7953530c2e"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "ff133a3c20db4aea55a4ea95981373c9"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "a0467cc36be8a73e2191303edb120c5a"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "3ec1018d668aadcdccf2a4612117595f"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "e59624176f95924b216eb6f3b5055be5"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "2a82539b24ac9a07e30cf384f784b463"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "cb78a7fc5e31a863f12d343ff3ef0d95"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "2f89e6c220b3270591b0c9b32f6718be"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "5d181e544dd77a980e43b5a1581ae2e7"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "df6439b23a9399906fd8cae560731356"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "1cf3b0103afd4330421e08052205cf84"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "5c9349e1c7ce35ce4853268eefff6da4"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "056d404a2c3486f7976c2b19d12a695a"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "e43b3cde91ca02a4ec5eaaf973fa8df6"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "9590189e2cca2f0f912b4694b556a275"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "19abe73f3ac5a47add4ca0bb253462b8"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "d10a0bea9f934e1c6354b85c8b65dcc8"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "87a8769f36ad06502f868a28aa7fdf0c"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "d673caee033d84a4b831b5e386fc8e27"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "3b360d7d21098bc41228d9a661961699"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "312922888bc9811efc6a48e5609cbc02"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "be7998f51e2f84c874ce5b085d139090"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "b49a0681dd587a589e836c297c3db74d"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "bc1a2b3bc0da0c37efea0e19ff893220"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "f43b156d0abc59c87aeb5988648f30ac"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "1a3396164f937cb3eae909f0cf9fcaa5"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "0fd0b5b50df560af57e7a983c91f4c72"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "9dfea79b54c3eb54af6c24df87b5c523"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "5582723b88411d9f9591b2c2bd8a9ca2"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "a541eb33fe980b590f1cd3420b05be6f"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "753fc2dbf45f401e330e43fd7bb02fbe"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "4087630c90f29d19fecc41c481d39e6d"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "6c5ac9292452f4180df85ad5d2faff70"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "3548b4ed947bdd88d816326e842a9526"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "f44dbf711963b0bb0cb0c41d795460d8"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "431a3c5825a6f8e938db3f3cf3128446"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "cb45c90201660457f4cefd9b381a059f"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "458873e88c7d428d3c30d17385e71d2e"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "1cead4cb85c34f7d39e39edf231db8c2"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "8a9463677db56875bfb2504c0ad7058b"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "f8e0a8f367f91e24f7e896f0d89dde5b"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "264c6a2f87965230f223b9ddf53cf634"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "04a1397b2a7588e3f46b41bd2f28b9a7"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "4e6edc100435ddd6e90e5f51dff31280"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "4b1c71acd8c5efede8a2b6dc7327faf0"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "e1fa25f3aa887ba15765ffcc3bca6e62"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "e7abffecd67f3d24163368740f6d9e68"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "d23360d60a41ac822692c44587539b11"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "356cf965b29bf7f6e99a366118439358"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "85e0cb54581a9b4e423cf69b660b6f4d"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "66ef647aec7b6a65eece09de656b7fcf"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "23e7cf4fd4814553a543843d6ee64e28"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "ed6442a2c1b8a488d1f8fca336442d56"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "d5522ca32775e06db2f7f8360b9fccf2"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "816ef2485dab654a50b932755f94ae9a"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "0a6ec8c2b69cb8571c5894c2faab2c3b"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "d400d0baffe545dd9ba5066c4fedd98d"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "8e44db87cdad325ed0436ca6f4eeae74"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "8c3fc1fde81cd83791919fa6b599df13"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "da8000bddad9b611581aa79a7602ea87"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "95e16fd8b5f14653312f9dc2b2f0db3e"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "62aa89883daf4736082a6e53f381863d"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "f949a365bf0bbc499ac15975ef5708bc"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "7c0f8c0b775eee8bfa294484dfb35957"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "f9f2986ce47692dbf6e701db6863044e"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "1ff403ef8273368de629feb7de01d8e9"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "950a50a0751b64dbd8473f9f5626bce5"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "9a9436ea89b9ba02e0dba33428fd4ade"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "50236a16974a0e3c2857e32ce6f4460b"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "360d5134968ca53ee8c69efe07d20783"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "f22224ac53f552e779b439eb6e691aed"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "b5e802f35f2b7dd57609b7ba1b7c8b1c"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "3f37371093d2728a7dae35edd032ddbe"
  },
  {
    "url": "404.html",
    "revision": "dd20f6631d14b4b523e05b2bda86eefd"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/1-guest-sign-in.52afa71b.png",
    "revision": "52afa71b42eff25a33aec8a4aedc9da0"
  },
  {
    "url": "assets/img/1-product-page-msg.204d4d0f.png",
    "revision": "204d4d0f589b09dfa14d43148e657f29"
  },
  {
    "url": "assets/img/1-seller-dashboard.153db513.png",
    "revision": "153db513847c3df74c38b76b5b2ad7ff"
  },
  {
    "url": "assets/img/1-seller-payment-request-to-admin.abfbdf27.png",
    "revision": "abfbdf27cff6d5a73fb4c2c96f6c6906"
  },
  {
    "url": "assets/img/1.customer-login-signin-button.8f99e8e1.png",
    "revision": "8f99e8e12ea5020b672ffdfec298907b"
  },
  {
    "url": "assets/img/10-admin-product-review-pending-state.b945c508.png",
    "revision": "b945c508c6d759bd6b4b1533e0e9b710"
  },
  {
    "url": "assets/img/10-approved-last-quotes-button.5b3250ab.png",
    "revision": "5b3250ab1fff9f97bdbfa5c70d5a118e"
  },
  {
    "url": "assets/img/10-customization-item.f45d2721.png",
    "revision": "f45d27217c2d6050c01a35a2372bd691"
  },
  {
    "url": "assets/img/11-admin-select-action.9299c048.png",
    "revision": "9299c04800f10a5c62a5ea781a3d7bfd"
  },
  {
    "url": "assets/img/11-price.91cf49f2.png",
    "revision": "91cf49f23764be0e43f8a38b8f609468"
  },
  {
    "url": "assets/img/11-quotes-confirm-by-customer.0530bb9f.png",
    "revision": "0530bb9faac00c36ab4fa8dbf748f49e"
  },
  {
    "url": "assets/img/12-admin-product-approved-state.14b41e6b.png",
    "revision": "14b41e6b05ca679de8c3451fd3ffb695"
  },
  {
    "url": "assets/img/12-buying-leads-seller.bfa02d8f.png",
    "revision": "bfa02d8f616b60799e40c108699efb8e"
  },
  {
    "url": "assets/img/12-shipping.4fff4598.png",
    "revision": "4fff45987be6de4946967b1c6caed327"
  },
  {
    "url": "assets/img/13-admin-customer-review.456e143c.png",
    "revision": "456e143cb70d5bedbeacd98165e27c88"
  },
  {
    "url": "assets/img/13-send-quote-request-to-customer.362fd7a5.png",
    "revision": "362fd7a5204944e85712b8fa47545d11"
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
    "url": "assets/img/14-req-ans-by-seller.c1f208b2.png",
    "revision": "c1f208b2f07fbafb6061a54904a32251"
  },
  {
    "url": "assets/img/14-seller-profile-review.abee2844.png",
    "revision": "abee2844dbe574a0192ac3156963711d"
  },
  {
    "url": "assets/img/15-product-disapproved-state.5ff7ceba.png",
    "revision": "5ff7cebacec6692761bc008037920944"
  },
  {
    "url": "assets/img/15-seller-review-submit.3596b6cf.png",
    "revision": "3596b6cfb6b049bdb9afdb99c30a36bd"
  },
  {
    "url": "assets/img/16-admin-product-page.10e67f4c.png",
    "revision": "10e67f4cf8f5d1e17965756ac37b8624"
  },
  {
    "url": "assets/img/16-admin-seller-reviews-pending-page.45ce9c70.png",
    "revision": "45ce9c70afb533b10f8c8fcac4d69640"
  },
  {
    "url": "assets/img/17-admin-seller-select-action.903392f4.png",
    "revision": "903392f4a7f5572d14541bf965682f7d"
  },
  {
    "url": "assets/img/17-admin-update-status.c4bd6e1d.png",
    "revision": "c4bd6e1d8f797bba10547608ee926972"
  },
  {
    "url": "assets/img/18-admin-approved-seller-review.7c853842.png",
    "revision": "7c853842e7320af7d22013ef7a40dd2a"
  },
  {
    "url": "assets/img/19-Seller-profile-review-page.8cea9537.png",
    "revision": "8cea953762c14386dd34bf03aadbc8c7"
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
    "url": "assets/img/2-customer-email-pwd.ee3a22fa.png",
    "revision": "ee3a22fa92be9d4b73d8190032376888"
  },
  {
    "url": "assets/img/2-customer-login.4e8a775f.png",
    "revision": "4e8a775fa4ed8035d1ad504259696d3e"
  },
  {
    "url": "assets/img/2-product-page.aea4908d.png",
    "revision": "aea4908db5c12f32b2b2f51f72e049ae"
  },
  {
    "url": "assets/img/2-seller-transtion.e2c2379a.png",
    "revision": "e2c2379abfd3bf215c83d713ade1ff85"
  },
  {
    "url": "assets/img/2-write-msg.404c8306.png",
    "revision": "404c83064de1a07addf9d31dcf267ccc"
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
    "url": "assets/img/3-admin-payment-request-byseller.a1dab1fe.png",
    "revision": "a1dab1fe0596f55d581366d02e7dd2d5"
  },
  {
    "url": "assets/img/3-customer-profile-page.87289c2f.png",
    "revision": "87289c2f9ab573340cffe2942c314cb9"
  },
  {
    "url": "assets/img/3-product-creation.2ae8a534.png",
    "revision": "2ae8a5345fdfd60144d87ddbc9d298a7"
  },
  {
    "url": "assets/img/3-product-review.ca4e7643.png",
    "revision": "ca4e76438d32b5ebb20a7c28d3e3f67a"
  },
  {
    "url": "assets/img/3-supplier-msg.524459c5.png",
    "revision": "524459c54e83f439b5c8e206408f0483"
  },
  {
    "url": "assets/img/4-create-new-product.cf9d0665.png",
    "revision": "cf9d0665acd501fe45e531fa6ccbe3b1"
  },
  {
    "url": "assets/img/4-customer-product-submit.53ce57dc.png",
    "revision": "53ce57dcedb1e97bfb8fc80db862b163"
  },
  {
    "url": "assets/img/4-popup.e86f1cf0.png",
    "revision": "e86f1cf0ccdf8e1950f0fe9e25a647f1"
  },
  {
    "url": "assets/img/4-quote-info.7ab8fc9c.png",
    "revision": "7ab8fc9c64238e06cc43e9710cde6b7e"
  },
  {
    "url": "assets/img/4-reply-to-supplier.e13f7f95.png",
    "revision": "e13f7f95def4ce50c2dcf99f90e9883a"
  },
  {
    "url": "assets/img/5-admin-transaction.2640b420.png",
    "revision": "2640b420dd5a42f97680d9eb96a83917"
  },
  {
    "url": "assets/img/5-contact-info.9fb66d81.png",
    "revision": "9fb66d811c0de92f1da0340f798f6e84"
  },
  {
    "url": "assets/img/5-general-arrtibute.521ccee5.png",
    "revision": "521ccee561a438a47cdb7c786df77bc4"
  },
  {
    "url": "assets/img/5-reply-to-customer.98c858ae.png",
    "revision": "98c858ae63df8ca607fc2534a7f3be41"
  },
  {
    "url": "assets/img/5-seller-dashboard-product-review.b1747eb4.png",
    "revision": "b1747eb4ce62f4d615279119ea9dc6d3"
  },
  {
    "url": "assets/img/6-product-info.47242d57.png",
    "revision": "47242d57cd156a0edd1419e5c377da85"
  },
  {
    "url": "assets/img/6-seller-product-review-pending-state.ae7f1d44.png",
    "revision": "ae7f1d44718f1831332442dcbc7ee6ab"
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
    "url": "assets/img/7-popup-rfq.da0c26be.png",
    "revision": "da0c26be484f35513957e073d4a12573"
  },
  {
    "url": "assets/img/7-seller-product-select-action.91cf5db7.png",
    "revision": "91cf5db777cedb79e6842c5f239600e6"
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
    "url": "assets/img/8-product-review-approved-state-seller.9837053c.png",
    "revision": "9837053c095f3bae3a0feb14c1b0dcdf"
  },
  {
    "url": "assets/img/8-redirect-page.c27b2a54.png",
    "revision": "c27b2a54ebea91be2b76efd366b9aee5"
  },
  {
    "url": "assets/img/9-customer-review-for-procuct-seller.c7c53655.png",
    "revision": "c7c53655f4d0276a1d3d062118827db1"
  },
  {
    "url": "assets/img/9-Img.ae77bbc5.png",
    "revision": "ae77bbc57ea2aab59e024a6911cfde56"
  },
  {
    "url": "assets/img/9-supplier-responsenew.5cb86562.png",
    "revision": "5cb86562461613c1be5c2c9e73db85db"
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
    "url": "assets/js/1.e014123b.js",
    "revision": "24cbd76c970d357ede2a5e9c3cd0296b"
  },
  {
    "url": "assets/js/10.8f8cf53d.js",
    "revision": "b2245ea7fe1b7a089bf9180f91f260bb"
  },
  {
    "url": "assets/js/100.0bbaf5b1.js",
    "revision": "b68193eb230e218345cd5c34c5d5f66c"
  },
  {
    "url": "assets/js/101.9b6d78e8.js",
    "revision": "387ab402f13bd2088f3c41ebbcfd8dda"
  },
  {
    "url": "assets/js/102.645e3e16.js",
    "revision": "be39c248af5b112f5468f4fe84f20529"
  },
  {
    "url": "assets/js/103.70ef0442.js",
    "revision": "83440fa8dd0187e90dbe03ffe417628a"
  },
  {
    "url": "assets/js/104.827f2c3f.js",
    "revision": "532fd067901acd9fd8c6d796bf32810e"
  },
  {
    "url": "assets/js/105.63759990.js",
    "revision": "3474649d5fea89674a141168a5bd960d"
  },
  {
    "url": "assets/js/106.9794103c.js",
    "revision": "caf564b6f795ba192b8c3305074cabe3"
  },
  {
    "url": "assets/js/107.759265bf.js",
    "revision": "0142cfd6d30a5544d4e4f496158ca7da"
  },
  {
    "url": "assets/js/108.8d22830b.js",
    "revision": "152a5311cdb7b59cc94cc9620a2bc8d9"
  },
  {
    "url": "assets/js/109.e43c14fe.js",
    "revision": "722e5dfd2d71f4351fe797e910b9d838"
  },
  {
    "url": "assets/js/11.e62531fd.js",
    "revision": "c8a00820a877802a8c9174dc94a7d2a9"
  },
  {
    "url": "assets/js/110.496ba3b2.js",
    "revision": "db637c7200d59e46b3128c47270d3da4"
  },
  {
    "url": "assets/js/111.60f55447.js",
    "revision": "414961e4acdef916613e4bed462156b1"
  },
  {
    "url": "assets/js/112.f2e01fd0.js",
    "revision": "964fd5b6c94b2d9888fdfa2d0584d3c4"
  },
  {
    "url": "assets/js/113.88e47c58.js",
    "revision": "e69329027dde02ab3b8893c1cfe34ade"
  },
  {
    "url": "assets/js/114.638e01ba.js",
    "revision": "15021781ed5e24d27391b9e7620ee4ad"
  },
  {
    "url": "assets/js/115.e3b02f17.js",
    "revision": "d1c8f87479299b61dee5f3988578eedb"
  },
  {
    "url": "assets/js/116.f25ea53e.js",
    "revision": "fdd2b653396b719a363aa748f7f1bf50"
  },
  {
    "url": "assets/js/117.aa560a42.js",
    "revision": "db954832b3dbf74321373067e53a20fe"
  },
  {
    "url": "assets/js/118.fb10770a.js",
    "revision": "378d326229b95e647b63b616fcd49a84"
  },
  {
    "url": "assets/js/119.f1bd501b.js",
    "revision": "75da16d2c2a27fabcad6f6616357cfa2"
  },
  {
    "url": "assets/js/12.a89a2830.js",
    "revision": "5a1d77feead36adf1b7487f2dddfd438"
  },
  {
    "url": "assets/js/120.f8315ad7.js",
    "revision": "bff2c0010294d63b5367ba8b0513cda2"
  },
  {
    "url": "assets/js/121.9820bfc7.js",
    "revision": "b44f88c1f2d1b42a30b7f8cd95d28587"
  },
  {
    "url": "assets/js/122.179a9c49.js",
    "revision": "340f87d12b5872263efbc0d9f37c4867"
  },
  {
    "url": "assets/js/123.e0dcd27b.js",
    "revision": "2180490bef9814d1db3de0c83b3ee487"
  },
  {
    "url": "assets/js/124.4fb77fb4.js",
    "revision": "b08971be45bc6c3493302a054fcf9f7c"
  },
  {
    "url": "assets/js/125.de2015c0.js",
    "revision": "0dd6b4634cf04c358ed3902b4f47f73e"
  },
  {
    "url": "assets/js/126.0075a496.js",
    "revision": "bc25f3860040deb43c9642da088c9ccb"
  },
  {
    "url": "assets/js/127.7a599a99.js",
    "revision": "e4c4734faab97ff9e11a60baf0a5b85d"
  },
  {
    "url": "assets/js/128.5484c59f.js",
    "revision": "82f05a71d7b718d79604401ed7bca76f"
  },
  {
    "url": "assets/js/129.0a9b6eda.js",
    "revision": "a3c323581f08e6e9e07bbac9aa37e637"
  },
  {
    "url": "assets/js/13.4c2ab637.js",
    "revision": "b7c3366ce3d270f7d536035b7abeb303"
  },
  {
    "url": "assets/js/130.a1d539ef.js",
    "revision": "7bb03e769ec90ab81e5607667a3d989b"
  },
  {
    "url": "assets/js/131.d90759a9.js",
    "revision": "41b7a4509eb4a6e16d322db9e80541c4"
  },
  {
    "url": "assets/js/132.c147646b.js",
    "revision": "67a2b85cfe5010750e8d6e11cf2a726d"
  },
  {
    "url": "assets/js/133.cada7477.js",
    "revision": "3cfc29f09b57839663e103fd74d34b57"
  },
  {
    "url": "assets/js/134.4a535bb1.js",
    "revision": "74014b5125d72dc7051ec840a8490d1e"
  },
  {
    "url": "assets/js/135.96703ad9.js",
    "revision": "0d25164e4f4842718bb89c91c35831c5"
  },
  {
    "url": "assets/js/136.36dc5f47.js",
    "revision": "a165a1b1902a6f1c6a1190702ddfecbe"
  },
  {
    "url": "assets/js/137.6b2c5ebd.js",
    "revision": "1017f6b15d95011bc534cdfeb2679115"
  },
  {
    "url": "assets/js/138.6a7f386d.js",
    "revision": "c8069007693c0d0e9cc8993d0b4e980b"
  },
  {
    "url": "assets/js/139.e0c48adc.js",
    "revision": "222fe9c05f5ca9fb6f0d221a9c67101b"
  },
  {
    "url": "assets/js/14.aff6c0cf.js",
    "revision": "33f0a52b5c7f8afe3747d439fc7b2ae1"
  },
  {
    "url": "assets/js/140.1130da48.js",
    "revision": "b653f80a5a88c2cdf981bc3645f1518b"
  },
  {
    "url": "assets/js/141.787b4f12.js",
    "revision": "67c905b62773dde95dca0984475fcc20"
  },
  {
    "url": "assets/js/142.2d030736.js",
    "revision": "be89db712dc8f32b5283ade76f11018d"
  },
  {
    "url": "assets/js/143.727b281d.js",
    "revision": "78148be6dc1e989c54c4e35e42e0c231"
  },
  {
    "url": "assets/js/144.5349a2de.js",
    "revision": "c499da1f56c424ded4942a5179ac9f21"
  },
  {
    "url": "assets/js/145.8f2ee038.js",
    "revision": "737b414d77b6914cae169e074ed76a09"
  },
  {
    "url": "assets/js/146.961852ef.js",
    "revision": "1bf316f8d473907947414c6dff575389"
  },
  {
    "url": "assets/js/147.09bee891.js",
    "revision": "600cdf46c2bef62bbcfda072f02c8684"
  },
  {
    "url": "assets/js/148.315497c9.js",
    "revision": "a180bc53d3c8e05569865fd3e7840565"
  },
  {
    "url": "assets/js/149.df503ce1.js",
    "revision": "4f32d80a546f889c845f508fc1a50080"
  },
  {
    "url": "assets/js/15.482046ea.js",
    "revision": "c2cde29fb01c37499ec187d68f83be18"
  },
  {
    "url": "assets/js/150.cf025966.js",
    "revision": "985f13c0a04422844e24328d5d26c9b4"
  },
  {
    "url": "assets/js/151.b22ad4c2.js",
    "revision": "b224cf44c9b899f33c13ab7157b72655"
  },
  {
    "url": "assets/js/152.fa2fa892.js",
    "revision": "2140bee218bad71929ddd4c0b3b89e83"
  },
  {
    "url": "assets/js/153.7188b8f7.js",
    "revision": "ffd96ad169a4f187a148461191b23692"
  },
  {
    "url": "assets/js/154.4e7778dc.js",
    "revision": "af17479ebb8e6b0500df3b5181466675"
  },
  {
    "url": "assets/js/155.ebda26a4.js",
    "revision": "20f1c61db41aec57a62bc43200211c54"
  },
  {
    "url": "assets/js/156.0a563cda.js",
    "revision": "c36febcb6daeca0ffde7bb27cc32e97d"
  },
  {
    "url": "assets/js/157.bb074a8a.js",
    "revision": "9aa86794905f91fff6f6e8f929a961e1"
  },
  {
    "url": "assets/js/158.c49d0e6f.js",
    "revision": "67cbaca9411bb752696229e83d94d6c4"
  },
  {
    "url": "assets/js/159.57167cb8.js",
    "revision": "28dc1b5c0a0cd4c7f2542db95b00517c"
  },
  {
    "url": "assets/js/16.b6e6bdec.js",
    "revision": "db4c5a3e16783d629f2281b835a2bf48"
  },
  {
    "url": "assets/js/160.5b0f6e92.js",
    "revision": "e3e43a8bc209c385f6b4f61b21ffbfca"
  },
  {
    "url": "assets/js/161.f4b9aa4d.js",
    "revision": "ed278bee3d4e38217fc3e0eb621ab3cd"
  },
  {
    "url": "assets/js/162.c8d03b4d.js",
    "revision": "26aafdb605ac20a4598f270e9e70169d"
  },
  {
    "url": "assets/js/163.92959f28.js",
    "revision": "9c00f0dc468e87f29c14d2b169b29548"
  },
  {
    "url": "assets/js/164.a7db6cdf.js",
    "revision": "d0fa0ed31da6073f16e653cc7b679bd9"
  },
  {
    "url": "assets/js/165.5813e93a.js",
    "revision": "347295e60370ea6d5c8ae3ce9b202d27"
  },
  {
    "url": "assets/js/166.c325ba89.js",
    "revision": "d712839946c1a7fed2313d000af3a1dd"
  },
  {
    "url": "assets/js/167.1567524e.js",
    "revision": "557d26bc5e0f7196075c17c3eb1cbc36"
  },
  {
    "url": "assets/js/168.08ddc66c.js",
    "revision": "8050110e49a2c2b5da388df297b98df5"
  },
  {
    "url": "assets/js/169.6ce1f155.js",
    "revision": "1356cf8def1294e81080f035439ac43f"
  },
  {
    "url": "assets/js/17.d89b44aa.js",
    "revision": "844d3c8280ac1349bb6c20f180776862"
  },
  {
    "url": "assets/js/170.aee05577.js",
    "revision": "9dd1dceb4437fc5797d352685881491b"
  },
  {
    "url": "assets/js/171.a90255dc.js",
    "revision": "7075191abea9f265fb1b3252d2432206"
  },
  {
    "url": "assets/js/172.40805482.js",
    "revision": "c62e81238c38a3d3a9b912459590868e"
  },
  {
    "url": "assets/js/173.995e5884.js",
    "revision": "43866c67e78af1cb699821c963e692e3"
  },
  {
    "url": "assets/js/174.d1f23594.js",
    "revision": "48276542dc05a7555c78b441d1377a7e"
  },
  {
    "url": "assets/js/175.8b85921e.js",
    "revision": "040e750bf994775249759e8642282ea2"
  },
  {
    "url": "assets/js/176.40352d8c.js",
    "revision": "90810ef07321bb1742f13d986a86c3fe"
  },
  {
    "url": "assets/js/177.760bdbf6.js",
    "revision": "bbfddec6a7dcf5e0b6c9e93c748b7b44"
  },
  {
    "url": "assets/js/178.7c533d21.js",
    "revision": "b0b5e20957181fb02785542e55417393"
  },
  {
    "url": "assets/js/179.39a81635.js",
    "revision": "c473d4b9e80f0d9d3a290d2a9244ba55"
  },
  {
    "url": "assets/js/18.779d834b.js",
    "revision": "d85da0b3decb6b7cd5fa0c6ef87740af"
  },
  {
    "url": "assets/js/180.2f99bdde.js",
    "revision": "c272463893d9a75148bf5241a5f8d15d"
  },
  {
    "url": "assets/js/181.00bd83e1.js",
    "revision": "5dda5291fabf0793435efddbe4aeea73"
  },
  {
    "url": "assets/js/182.57238461.js",
    "revision": "352634aff2b94cb3e51cf045d77c4cf3"
  },
  {
    "url": "assets/js/183.3dd2f294.js",
    "revision": "2346ec6c2c21bcfcb1514ea06b169f81"
  },
  {
    "url": "assets/js/184.e38b494e.js",
    "revision": "b18d0ec0b001045c89baa03f2e0d917f"
  },
  {
    "url": "assets/js/185.da4943c9.js",
    "revision": "5355b47bb537e3eb8471f657143e3e8c"
  },
  {
    "url": "assets/js/186.87259d68.js",
    "revision": "ba1ff191577f8c0bfea8aea332016509"
  },
  {
    "url": "assets/js/187.a18ac481.js",
    "revision": "34d53c6ea29a0058fa9b1ed8e1f4fe16"
  },
  {
    "url": "assets/js/188.bb7bd680.js",
    "revision": "42a490a41b43040081455921e3404961"
  },
  {
    "url": "assets/js/189.db963055.js",
    "revision": "81a79a82cd6280833d8d0527f5c3ac36"
  },
  {
    "url": "assets/js/19.7c88b824.js",
    "revision": "d2f1df31cd6fceb0ce911db3a5ae44c8"
  },
  {
    "url": "assets/js/190.1d8c58b5.js",
    "revision": "a693ef2e61909d9feb53db24804fdbad"
  },
  {
    "url": "assets/js/191.6067a296.js",
    "revision": "df1263a2f66d1e0b4935996dbe15fa00"
  },
  {
    "url": "assets/js/192.d4e1f224.js",
    "revision": "d99976f99ae6fa1ad696ca50e0aee412"
  },
  {
    "url": "assets/js/193.263e4bd9.js",
    "revision": "2bedca97502e0518eff57ea540031acd"
  },
  {
    "url": "assets/js/194.58bfc8d2.js",
    "revision": "c580336c50083975f9d4381da3b37713"
  },
  {
    "url": "assets/js/195.d6da4965.js",
    "revision": "9c33181d01b48dad32a4691359264a4b"
  },
  {
    "url": "assets/js/196.9b376d5e.js",
    "revision": "8a3ec251861b19839ed994d5a7e643f7"
  },
  {
    "url": "assets/js/197.3ef5d221.js",
    "revision": "7df89ba136cd059487e471f6214c4a2e"
  },
  {
    "url": "assets/js/198.955286b9.js",
    "revision": "83b57f2470e6f13285d7c75a3cd71d24"
  },
  {
    "url": "assets/js/199.a659ce11.js",
    "revision": "e2ee47303e2831bdf68ce747ae25c828"
  },
  {
    "url": "assets/js/2.35534a48.js",
    "revision": "8a869a70336666a1ebd901e32fcf57f5"
  },
  {
    "url": "assets/js/20.1100780e.js",
    "revision": "88034ed936338ac3035263ff4ed27fdb"
  },
  {
    "url": "assets/js/200.08d53da8.js",
    "revision": "c6722cc73cdafbc76f0d0364646a4ca5"
  },
  {
    "url": "assets/js/201.98faad47.js",
    "revision": "cdde7bea64c93aea9794e63d539dfd60"
  },
  {
    "url": "assets/js/202.d8ab480f.js",
    "revision": "5269a1b7c89e07757a5f95b4e7e4dea1"
  },
  {
    "url": "assets/js/203.dd9d79e9.js",
    "revision": "5cfe172d030db7e61d7c0c7150de021f"
  },
  {
    "url": "assets/js/204.d1fc6e76.js",
    "revision": "30b2064cf297c8424e8602ecc943f4ab"
  },
  {
    "url": "assets/js/205.91b740bb.js",
    "revision": "56e0ec05f50922d6e68f036767b67807"
  },
  {
    "url": "assets/js/206.f7cdaa18.js",
    "revision": "b35f505e1237e8aa6e00be5eb59edd1e"
  },
  {
    "url": "assets/js/207.b37dcfc7.js",
    "revision": "e86b5777b257a4304724abed02f95d48"
  },
  {
    "url": "assets/js/208.3b48172c.js",
    "revision": "4edb8477ea213fa366b98c3f3f9bf6c1"
  },
  {
    "url": "assets/js/209.0b32b650.js",
    "revision": "20614d1fd9135f4c1a0c542be29fc409"
  },
  {
    "url": "assets/js/21.733aab62.js",
    "revision": "21a2d2dfc428290c06b91a05e1bf257b"
  },
  {
    "url": "assets/js/210.efe78e07.js",
    "revision": "7387aaeb6fae8090d4b7093d56f865d6"
  },
  {
    "url": "assets/js/211.7156d03b.js",
    "revision": "8f9fbebf097782c7cec998507b67381b"
  },
  {
    "url": "assets/js/212.569d062b.js",
    "revision": "caaf798bced4a889a9b09c714f3471a7"
  },
  {
    "url": "assets/js/213.1d7234bb.js",
    "revision": "bae9cd11e1a4f863c2d31cad434f420c"
  },
  {
    "url": "assets/js/214.db93bb3d.js",
    "revision": "47989935cb3bab1e0c2e84915e0ae45a"
  },
  {
    "url": "assets/js/215.4964b334.js",
    "revision": "e9b43f25652d29ba8a03ee917335a57b"
  },
  {
    "url": "assets/js/216.7a17aad7.js",
    "revision": "9a726cf6abe3cf884495dfecf2b7e671"
  },
  {
    "url": "assets/js/217.732e8159.js",
    "revision": "19832c54c9476214858e701967bd6a29"
  },
  {
    "url": "assets/js/218.48dfb0f0.js",
    "revision": "9eb8b7bcb4f5fe219890338a8a1f1905"
  },
  {
    "url": "assets/js/219.41a33ae9.js",
    "revision": "8d312cdb3e67c157ce20cf8b539e6b28"
  },
  {
    "url": "assets/js/22.0a796a93.js",
    "revision": "236be641bec0157f10bc4479ea812c75"
  },
  {
    "url": "assets/js/220.346df139.js",
    "revision": "9f5855518f90cd004185f1051292dea6"
  },
  {
    "url": "assets/js/221.d14effb9.js",
    "revision": "789e0ca838388931bd9154f161ba5a5e"
  },
  {
    "url": "assets/js/222.b0d8b1d3.js",
    "revision": "b80914a38b829d91f7e3a560134a6ae5"
  },
  {
    "url": "assets/js/223.5bc2f56a.js",
    "revision": "22b0fbcc03d2a4948468428db5b928be"
  },
  {
    "url": "assets/js/224.aa1acce8.js",
    "revision": "330134e9939cab4e6928a3dc45e2408d"
  },
  {
    "url": "assets/js/225.599ddcdd.js",
    "revision": "30358a50fceb230cd2912b59ef8a3cb4"
  },
  {
    "url": "assets/js/226.1704821d.js",
    "revision": "3cb5c6ccf40132c321777d094f6e3941"
  },
  {
    "url": "assets/js/227.6c1a2870.js",
    "revision": "969e34e201f13abe8330693c73dbeea6"
  },
  {
    "url": "assets/js/228.c999d228.js",
    "revision": "5e9ae1cd66771dee252ba4bcc127bd2d"
  },
  {
    "url": "assets/js/229.93294ce8.js",
    "revision": "ba9f5f2a6f4c50fb3ab4e81cd10e5b5f"
  },
  {
    "url": "assets/js/23.40ab15ce.js",
    "revision": "9bdc7a6059de365fd2b864e7fb3a7bb7"
  },
  {
    "url": "assets/js/230.d3f5ec23.js",
    "revision": "2f3625d054f670b7c6a07a3a1bbc4f7b"
  },
  {
    "url": "assets/js/231.a62023f1.js",
    "revision": "afae806f4465477dcabad6f8a68005d7"
  },
  {
    "url": "assets/js/232.9fd2eb4c.js",
    "revision": "49d2c42c8445c6289d5ec430ad5a5bd0"
  },
  {
    "url": "assets/js/233.2b66bba0.js",
    "revision": "545d22ba31699fa7d8de66ba81f826a6"
  },
  {
    "url": "assets/js/234.98c53dd9.js",
    "revision": "d18b971932e095f325892fc354ea9183"
  },
  {
    "url": "assets/js/235.4e4064fb.js",
    "revision": "b881da57f841a23157e32d08499d7ec0"
  },
  {
    "url": "assets/js/236.dafc9343.js",
    "revision": "96573e0690934a19f5b454ce03666e77"
  },
  {
    "url": "assets/js/237.5ccdba1f.js",
    "revision": "827fe9b43234ecaad42ab87458ed1b8c"
  },
  {
    "url": "assets/js/238.42923d6d.js",
    "revision": "c65f9b85736586228176f84f17754379"
  },
  {
    "url": "assets/js/239.35c7b871.js",
    "revision": "e2f500049a07b861b067717d9113d603"
  },
  {
    "url": "assets/js/24.f03954cf.js",
    "revision": "3311eca286fb00704dc8fbce738c97bc"
  },
  {
    "url": "assets/js/240.683c6200.js",
    "revision": "5f5dc7c8180de4f7e9924bdececd0c65"
  },
  {
    "url": "assets/js/241.d586345f.js",
    "revision": "b3b4a9f90fdf2625c5bbfbce6714da41"
  },
  {
    "url": "assets/js/242.65efa871.js",
    "revision": "92ee8ee0ae48dfdcb1e8ab09279f11ed"
  },
  {
    "url": "assets/js/243.eccfb6ce.js",
    "revision": "1aab978159b0e7ff7fbf088b19b42bbe"
  },
  {
    "url": "assets/js/244.2cca378f.js",
    "revision": "05faefa0d24e3f00b59afda8c79f61b7"
  },
  {
    "url": "assets/js/245.11ccc0f8.js",
    "revision": "1ed2a5d87e6bf5bd7eede4d1082043ee"
  },
  {
    "url": "assets/js/246.5b6b525e.js",
    "revision": "9f3d1ce1583c795a106324516dfd99b1"
  },
  {
    "url": "assets/js/247.c177b4a9.js",
    "revision": "dfc004539e9689e4e0905092c9f4805b"
  },
  {
    "url": "assets/js/248.3296916d.js",
    "revision": "49d1c0c9bfd69fc916d18829e23505f7"
  },
  {
    "url": "assets/js/249.f6ee5d7f.js",
    "revision": "9a5744af85e745482123f17019500210"
  },
  {
    "url": "assets/js/25.d3859601.js",
    "revision": "8b62e1f244d9278a936c97e719dc70e7"
  },
  {
    "url": "assets/js/250.89d7bcea.js",
    "revision": "db5e9c3163662e2a82278e02e52410eb"
  },
  {
    "url": "assets/js/251.a1ebf874.js",
    "revision": "5c51c5b86db97a6426574348ccb754c0"
  },
  {
    "url": "assets/js/252.007efc5a.js",
    "revision": "798be7fc8f49a4d1239beb0fa8b94374"
  },
  {
    "url": "assets/js/253.396e85f3.js",
    "revision": "c30943b3e622de587843d3ad6fad4a57"
  },
  {
    "url": "assets/js/254.9a3bb1d2.js",
    "revision": "53346cd79a6955356996ba419d37bf81"
  },
  {
    "url": "assets/js/255.983cd695.js",
    "revision": "6948a47874f8b700d4aadbf49222aa6f"
  },
  {
    "url": "assets/js/256.cee62ad2.js",
    "revision": "8dbc17ace3ab2bbae3a7d9c93e6fb7b8"
  },
  {
    "url": "assets/js/257.40b574eb.js",
    "revision": "447fd47bb79def3f8a62cb876383fda2"
  },
  {
    "url": "assets/js/258.bd52b14e.js",
    "revision": "ac7dd181ebb4413a29b1cb46c5cef055"
  },
  {
    "url": "assets/js/259.090196fe.js",
    "revision": "002f2e457d54f75b102d257a427d4362"
  },
  {
    "url": "assets/js/26.af45ef4f.js",
    "revision": "b87b3b5a352e9476c2708fd23611e331"
  },
  {
    "url": "assets/js/260.042075fa.js",
    "revision": "79ebb79ff0190b918badb45536db1f33"
  },
  {
    "url": "assets/js/261.5c4bb353.js",
    "revision": "60542a03f277da24b43de9a76df41f7c"
  },
  {
    "url": "assets/js/262.64f54d07.js",
    "revision": "f1407e53dea9af97400ff04097e92191"
  },
  {
    "url": "assets/js/263.e5d0a2da.js",
    "revision": "942f982e36493bcd6e7bb6887c36dc03"
  },
  {
    "url": "assets/js/264.8668b134.js",
    "revision": "b5bf8774b778afddeb90d16b5382f998"
  },
  {
    "url": "assets/js/265.033284ff.js",
    "revision": "9b880a81225daa385a547761a2ed4cb2"
  },
  {
    "url": "assets/js/266.4b7183bc.js",
    "revision": "e0525ec663ead4c62a9ef2bf7c750c8e"
  },
  {
    "url": "assets/js/267.4a23791d.js",
    "revision": "d36afa8618407237af1654f57ac0cf08"
  },
  {
    "url": "assets/js/268.3c31be57.js",
    "revision": "713d3543da2ba1815fe368c6e84f9fa3"
  },
  {
    "url": "assets/js/269.5953ac4b.js",
    "revision": "412796aa25279f33c0849945d96123d9"
  },
  {
    "url": "assets/js/27.295e5906.js",
    "revision": "bdc389d215a90eec7eb5247aa88fbd4a"
  },
  {
    "url": "assets/js/270.83ece813.js",
    "revision": "4eb4a9abd1ace7dd885b594329999b8e"
  },
  {
    "url": "assets/js/271.fea705dd.js",
    "revision": "127296eb4bb8e891d70a807394aa869c"
  },
  {
    "url": "assets/js/272.38f051bc.js",
    "revision": "19ab0ae318ba25b7444bfcf6b800c780"
  },
  {
    "url": "assets/js/273.1b235424.js",
    "revision": "d457285e05236bb5644148ab8b9f0dc5"
  },
  {
    "url": "assets/js/274.9260a933.js",
    "revision": "1a9ad5b83dc40a934c49691c955f9314"
  },
  {
    "url": "assets/js/275.d35852b7.js",
    "revision": "24e8a00ffcab7e0980b5836803a4f5e7"
  },
  {
    "url": "assets/js/276.1d49d0c7.js",
    "revision": "cbbb73087c2883033b53752c26f43c73"
  },
  {
    "url": "assets/js/277.fc4d74d0.js",
    "revision": "bc656b7f6fc69d3e8fc00ca400f4a3e4"
  },
  {
    "url": "assets/js/278.e06be174.js",
    "revision": "0159ebb211ecbb998013a238cf0153e8"
  },
  {
    "url": "assets/js/279.62a1fa1b.js",
    "revision": "fa6148ea99f416edd082afcfb1bed749"
  },
  {
    "url": "assets/js/28.6fa47d39.js",
    "revision": "75820c56a7a227834da35bdc2cd40f66"
  },
  {
    "url": "assets/js/280.ec7ea7f4.js",
    "revision": "1a819fe525202a1ea5cf3d63dc9b79c3"
  },
  {
    "url": "assets/js/281.f17ac80f.js",
    "revision": "56145b257a15013f64eb628fbb699315"
  },
  {
    "url": "assets/js/282.1f17c071.js",
    "revision": "8e6ecea8f7615773793ad161aa520921"
  },
  {
    "url": "assets/js/283.7b6e4226.js",
    "revision": "33624f150e2fc96caf338aa5294d8e54"
  },
  {
    "url": "assets/js/284.f86b4b9d.js",
    "revision": "61b88e2f2c12e63cb297fb61679bfe11"
  },
  {
    "url": "assets/js/285.e479a289.js",
    "revision": "7f9735e48526d4798dafe7f75bac99c6"
  },
  {
    "url": "assets/js/286.176bb3ae.js",
    "revision": "8a98a0db6e80b4f8a1b91e4b0f1fe3bc"
  },
  {
    "url": "assets/js/287.9cdd11d9.js",
    "revision": "316b940898a8b6002a724fa2601800db"
  },
  {
    "url": "assets/js/288.7f8708a2.js",
    "revision": "e2b6ac8d7e67146d37c03fa66822b103"
  },
  {
    "url": "assets/js/289.55e8b066.js",
    "revision": "374879c3901abfaf0bdff72ef72f4ebb"
  },
  {
    "url": "assets/js/29.801bbfce.js",
    "revision": "4a2d9d58ac73f4219f1b2c30ffbbffa1"
  },
  {
    "url": "assets/js/290.25677523.js",
    "revision": "9a6b5c314c0030216a844ba81c2548e4"
  },
  {
    "url": "assets/js/291.c675684f.js",
    "revision": "49fc682c1f4873d3081adba6f01cd79e"
  },
  {
    "url": "assets/js/292.c99f46d2.js",
    "revision": "64f6584f5a4ba95b77b5c73851fe0676"
  },
  {
    "url": "assets/js/293.b4c8ebff.js",
    "revision": "e8b30a95a2e832d0a756b80f26543d13"
  },
  {
    "url": "assets/js/294.57d8edf9.js",
    "revision": "1eb216c1df0ef88e1e48bb82d7d848e8"
  },
  {
    "url": "assets/js/295.f1199ccd.js",
    "revision": "09531fa4d63c97a4d6cee92add362c1a"
  },
  {
    "url": "assets/js/296.2d725d1b.js",
    "revision": "976ddee3071e390c367666327f15b59f"
  },
  {
    "url": "assets/js/297.444358ad.js",
    "revision": "61f0cf83b3d64025249ca367390c337c"
  },
  {
    "url": "assets/js/298.d1b7bf6f.js",
    "revision": "e18a19eebce49d797d8dff5800b75ca3"
  },
  {
    "url": "assets/js/299.b2cbc541.js",
    "revision": "8ae1d1d842d5d83f42dc4268d303b312"
  },
  {
    "url": "assets/js/3.0b96810b.js",
    "revision": "87a0c66cb1501c28a8509146e050914c"
  },
  {
    "url": "assets/js/30.046c54cc.js",
    "revision": "5a88c0bd5de31e0c2311ee73c71cd837"
  },
  {
    "url": "assets/js/300.fe0f0cb0.js",
    "revision": "86d004ff7ae708f08ccaa59a6600d792"
  },
  {
    "url": "assets/js/301.8d6e36f1.js",
    "revision": "3278c704bbfa926cefb3d539b1e0cf43"
  },
  {
    "url": "assets/js/302.232753b0.js",
    "revision": "0d820db34be12a6ea8a434ce9fc39d3d"
  },
  {
    "url": "assets/js/303.99a14474.js",
    "revision": "c67edc78b0c8ad5b875738dd164224b4"
  },
  {
    "url": "assets/js/304.8c20fe61.js",
    "revision": "4a660fcd391c9b8caf6f5c6ccfa4f82b"
  },
  {
    "url": "assets/js/305.1b26a6b7.js",
    "revision": "d72adfa216ba5d6a1842c4bcf033a494"
  },
  {
    "url": "assets/js/306.03938b98.js",
    "revision": "c5168c6d809791a66349cce17d5e504a"
  },
  {
    "url": "assets/js/307.2a5dbb72.js",
    "revision": "4da28423bb5328eb5919e904769efa52"
  },
  {
    "url": "assets/js/308.0d08a8a3.js",
    "revision": "b2a664ee9f4ee8354c08273ebeb58728"
  },
  {
    "url": "assets/js/309.3fc9d4d1.js",
    "revision": "7f3cc989cacb1d2739ab0e6b46415ef5"
  },
  {
    "url": "assets/js/31.c7d2d5ad.js",
    "revision": "e8f5ed07b1dc7a1015072d0bc5817f6e"
  },
  {
    "url": "assets/js/310.5dee95af.js",
    "revision": "6f0b3edcc03fdf434b68c4aa5cfe3758"
  },
  {
    "url": "assets/js/311.5b99a8f4.js",
    "revision": "08f84851b8d6ab0f2957a4fcfaf82da6"
  },
  {
    "url": "assets/js/312.d0f47f49.js",
    "revision": "77e0d05ea0126e650c8348d2dd463e3f"
  },
  {
    "url": "assets/js/313.823adf38.js",
    "revision": "447ccb6608f073128937cc71eca34be0"
  },
  {
    "url": "assets/js/314.96f8bace.js",
    "revision": "a7164798bb00faf67f3feb71c9376f00"
  },
  {
    "url": "assets/js/315.315a8179.js",
    "revision": "e70fb89833cb146e47062bd3d8a3b15a"
  },
  {
    "url": "assets/js/316.a1811cf1.js",
    "revision": "95df792ffab9911084b1b92f7eed804c"
  },
  {
    "url": "assets/js/317.6317e2e9.js",
    "revision": "3ec3c4b534f87d264d8cf48490b29b10"
  },
  {
    "url": "assets/js/318.c8e680b9.js",
    "revision": "1a949b6f3ddd942fe477856b804852f9"
  },
  {
    "url": "assets/js/319.a50b80d8.js",
    "revision": "59a65860d7b3523deb9e8e755adb9856"
  },
  {
    "url": "assets/js/32.246847f8.js",
    "revision": "d2171d6446f05e8c9539f5a7a3b7c23d"
  },
  {
    "url": "assets/js/320.1df47eb2.js",
    "revision": "596dec253bdad0fc87f160eea31f3e13"
  },
  {
    "url": "assets/js/321.67f9c5ce.js",
    "revision": "4729afb688689f4ef1607897422615e0"
  },
  {
    "url": "assets/js/322.bbdcf4e4.js",
    "revision": "47a64715468872eb157bfbf883eea069"
  },
  {
    "url": "assets/js/323.56a80382.js",
    "revision": "76b4be394384591383cb9d292580d0a6"
  },
  {
    "url": "assets/js/324.45e78946.js",
    "revision": "9d958d97afe2b2ed0d10c96af153e0a7"
  },
  {
    "url": "assets/js/325.d125716e.js",
    "revision": "6cbc45b597e620bbdd44689d371ce172"
  },
  {
    "url": "assets/js/326.37b6c1a1.js",
    "revision": "8134abc741fd093019fa185d068d7260"
  },
  {
    "url": "assets/js/327.488e3005.js",
    "revision": "b3c3dcc0dd2ecc5c2396cc7a8ea4532e"
  },
  {
    "url": "assets/js/328.fec44088.js",
    "revision": "fcb964e6e0bb3dd1c493ab926df533c5"
  },
  {
    "url": "assets/js/329.04c070d0.js",
    "revision": "22b91cdcf7273cede255b935716d9974"
  },
  {
    "url": "assets/js/33.abb987cb.js",
    "revision": "6529239480becf08eac6fdaea9ea32d2"
  },
  {
    "url": "assets/js/330.e207c9bc.js",
    "revision": "c2f0a6d366c405a7e4c721095a819223"
  },
  {
    "url": "assets/js/331.c767522d.js",
    "revision": "bebc451c298f2a064d3e6539365296c6"
  },
  {
    "url": "assets/js/332.e378d14b.js",
    "revision": "8aa6734fbf45ecdc79b3af94ac6c4a56"
  },
  {
    "url": "assets/js/333.0b265f86.js",
    "revision": "8bbcf3e462dd28cfd54733881aaa8c6b"
  },
  {
    "url": "assets/js/334.bb7d65f3.js",
    "revision": "fb91454db1c71a35442130da3f37f1c6"
  },
  {
    "url": "assets/js/335.fa0569fb.js",
    "revision": "62d205c0066b350c02a981de0747406c"
  },
  {
    "url": "assets/js/336.8a68915b.js",
    "revision": "ffba8daee2aec2fef6dbfcb46345d1bd"
  },
  {
    "url": "assets/js/337.d4a7fb5f.js",
    "revision": "f36a16d0922b02b04f129e2f3a01301e"
  },
  {
    "url": "assets/js/338.c8597aea.js",
    "revision": "0497496cc6853bc244aa9d8b4c39025a"
  },
  {
    "url": "assets/js/339.105cfe2a.js",
    "revision": "9a6b0c78a85247188b9d533c2452c117"
  },
  {
    "url": "assets/js/34.d619e070.js",
    "revision": "04caeb977b8dec0c110a8a212e4f4d91"
  },
  {
    "url": "assets/js/340.ee12793b.js",
    "revision": "5bca74d5392348f71c7d963dc8abb193"
  },
  {
    "url": "assets/js/341.dcd87cff.js",
    "revision": "d689442b020c15a53ca0df9264324a66"
  },
  {
    "url": "assets/js/342.ee429d67.js",
    "revision": "703d79507080eb2929efb9d4721294f1"
  },
  {
    "url": "assets/js/343.b81c75a3.js",
    "revision": "a0ecb66efe3455a763829a2640bc556c"
  },
  {
    "url": "assets/js/344.a003dc9c.js",
    "revision": "8ca46787b1212aa12211b1f9176df70a"
  },
  {
    "url": "assets/js/345.2e60be9d.js",
    "revision": "96748fbcd7e95b8e13187c8940338be6"
  },
  {
    "url": "assets/js/346.9923d124.js",
    "revision": "fed68582d16f1b7cdf1eab740e0be14b"
  },
  {
    "url": "assets/js/347.9b67cc7d.js",
    "revision": "ec5fc6157491576fae4935111ac4bb25"
  },
  {
    "url": "assets/js/348.cf8f8df1.js",
    "revision": "bd5fd7d1ab277f86e77f8ccb47e040e7"
  },
  {
    "url": "assets/js/349.a42174b0.js",
    "revision": "61653a786ee244448836d20c2d4013a8"
  },
  {
    "url": "assets/js/35.906e0330.js",
    "revision": "9d97752b075bc8d1a94275cd6083bbbf"
  },
  {
    "url": "assets/js/350.3296958a.js",
    "revision": "557a35f983e110e72a6ba0a3328a9443"
  },
  {
    "url": "assets/js/351.00ce8a22.js",
    "revision": "034212da1afd4094d206fa579ce7520a"
  },
  {
    "url": "assets/js/352.6882da7b.js",
    "revision": "9049e8344b39af06690582fb88989a84"
  },
  {
    "url": "assets/js/353.16cf479f.js",
    "revision": "6b5b53f00dbdb5333586793b96fc5d04"
  },
  {
    "url": "assets/js/354.aab921e9.js",
    "revision": "5fb1ee92d170859dfce1330cf345d025"
  },
  {
    "url": "assets/js/355.4472e36c.js",
    "revision": "0f2c35f860f055a7d5b94801ca847cff"
  },
  {
    "url": "assets/js/356.e74fbb00.js",
    "revision": "3ae38da70b6f125944cccb8195c78688"
  },
  {
    "url": "assets/js/357.c3d8a4c2.js",
    "revision": "ac9942e6d943185242c6241c137eb7d6"
  },
  {
    "url": "assets/js/358.2b830338.js",
    "revision": "471d95b0c8d69b71f3ddbc3629e23cc4"
  },
  {
    "url": "assets/js/359.141cef17.js",
    "revision": "8d5262f322cd9088515b502b728977e5"
  },
  {
    "url": "assets/js/36.97e9418f.js",
    "revision": "f2c21a071895089289f9087e25745117"
  },
  {
    "url": "assets/js/360.7c87ba1b.js",
    "revision": "d0a677bed3b2f89fdc94aaca4a3e166f"
  },
  {
    "url": "assets/js/361.edc4b509.js",
    "revision": "1a6ebc111c20a34660b95166f1bbf220"
  },
  {
    "url": "assets/js/362.c140df52.js",
    "revision": "8d8fbee6f130363fba5a7b921ee7bf60"
  },
  {
    "url": "assets/js/363.60d5e8fe.js",
    "revision": "ee3804eb4a4dd7a050d9c9979c66adb1"
  },
  {
    "url": "assets/js/364.b504df34.js",
    "revision": "cae482c6af39fd5d8c3df8b44a128eae"
  },
  {
    "url": "assets/js/365.2f0dd7b8.js",
    "revision": "f6b2ec1e704f8482b1c73fe056abce40"
  },
  {
    "url": "assets/js/366.6e085aeb.js",
    "revision": "6c701d7c05034dbfab88ffffb2d2c3f3"
  },
  {
    "url": "assets/js/367.5517d259.js",
    "revision": "92571f1c7ddd87011a11afe8c62886d9"
  },
  {
    "url": "assets/js/368.327a22d1.js",
    "revision": "69894f31f16cef3f72a6cf291eb479a1"
  },
  {
    "url": "assets/js/369.1fdaa409.js",
    "revision": "6ffc661ab342b8b815a3c0f1109f9be5"
  },
  {
    "url": "assets/js/37.e754c610.js",
    "revision": "77295569166535967decd942c52e7f00"
  },
  {
    "url": "assets/js/370.444c2ac6.js",
    "revision": "b40f16db759a2a775dd0aa38f1f74400"
  },
  {
    "url": "assets/js/371.b74399b3.js",
    "revision": "d89de58c37c459668423f6b00f921f6f"
  },
  {
    "url": "assets/js/372.35e08426.js",
    "revision": "79534bc85fd06abbe003dcf69b2a7fc2"
  },
  {
    "url": "assets/js/373.04f3cf52.js",
    "revision": "2cd39f4101655213ae438dc0b461484d"
  },
  {
    "url": "assets/js/374.5f27a600.js",
    "revision": "d832f3238e5ef875fc61400184c2ce83"
  },
  {
    "url": "assets/js/375.0afa3b67.js",
    "revision": "2c1a1624b62702b94d577abb208067fa"
  },
  {
    "url": "assets/js/376.ab07529b.js",
    "revision": "da71c51baeb4205f57c1f8e6421db1da"
  },
  {
    "url": "assets/js/38.05054726.js",
    "revision": "e41aa8777a15f0d1d57fedc4c23b34ec"
  },
  {
    "url": "assets/js/39.87adfac3.js",
    "revision": "4c026a80cdb9b7596c8040915860ff2d"
  },
  {
    "url": "assets/js/4.ba5814b8.js",
    "revision": "863e11c650a319b28da369bedec8a1d9"
  },
  {
    "url": "assets/js/40.dc84d249.js",
    "revision": "7809ca74a6c9fde60b8549c54d6392f9"
  },
  {
    "url": "assets/js/41.303acb7c.js",
    "revision": "c5d220791eb893043a7988ae7e22cae5"
  },
  {
    "url": "assets/js/42.85890353.js",
    "revision": "d65d54a7aee790becec25cfef7f0a7bf"
  },
  {
    "url": "assets/js/43.8d900b6f.js",
    "revision": "66a0d98e67c8d27cb4c332e1c73105df"
  },
  {
    "url": "assets/js/44.1c3bb8fd.js",
    "revision": "5bece68007f70fc0a829e215374f99f0"
  },
  {
    "url": "assets/js/45.c3c00bc4.js",
    "revision": "f670b5698939acb1ad057bb88a7b3a49"
  },
  {
    "url": "assets/js/46.8c6c40f0.js",
    "revision": "6513cac37ba28e4ad8be9db09c7ce6bd"
  },
  {
    "url": "assets/js/47.ff09c72f.js",
    "revision": "6fba0407fc3f8779d322a3703688b977"
  },
  {
    "url": "assets/js/48.cefa77cb.js",
    "revision": "fe2c306299291af687e643f272fbe0c0"
  },
  {
    "url": "assets/js/49.e22afaa6.js",
    "revision": "0a1cf51c678228d78445975c185986a6"
  },
  {
    "url": "assets/js/5.56b7a797.js",
    "revision": "0a285ca98a01c452b75ea178ec9cc3f2"
  },
  {
    "url": "assets/js/50.1cc2b709.js",
    "revision": "02f486f7d676875c5a4769b03dcdafcc"
  },
  {
    "url": "assets/js/51.831a8bf4.js",
    "revision": "d172fce27c926786c1a1540b4eaeee66"
  },
  {
    "url": "assets/js/52.6eae02f0.js",
    "revision": "d8a5ad4e9bec10e333ee5e371a2cf069"
  },
  {
    "url": "assets/js/53.5146f830.js",
    "revision": "c24abb752ed42034cba41104d37cfbdf"
  },
  {
    "url": "assets/js/54.4a1e8d3e.js",
    "revision": "65b6c28eff8d3f9e8459e6bbf1c6b8dd"
  },
  {
    "url": "assets/js/55.5ec16711.js",
    "revision": "3b87147bdeaa385ed070038a7f819067"
  },
  {
    "url": "assets/js/56.c826317f.js",
    "revision": "d7f52b2ace7e6ef2ed5e4853a264450a"
  },
  {
    "url": "assets/js/57.a233f865.js",
    "revision": "83a0642a7b76a7c0b02ef417fc89e001"
  },
  {
    "url": "assets/js/58.118a96be.js",
    "revision": "03b91e2875324cbe9966f759af436621"
  },
  {
    "url": "assets/js/59.536adf6b.js",
    "revision": "e5f0f519d8babf33df9ff98abf4b75b0"
  },
  {
    "url": "assets/js/60.e20df168.js",
    "revision": "860f7b3fe313f4cda38e23232eaf4246"
  },
  {
    "url": "assets/js/61.7bbc25cb.js",
    "revision": "af3c3f00e1b1e9215508ab00be6f2074"
  },
  {
    "url": "assets/js/62.dbba1a6c.js",
    "revision": "6701daf5be6386e30ec23760a3b883d8"
  },
  {
    "url": "assets/js/63.2ced3706.js",
    "revision": "d3b73a77acf5afd2183cd3ba9cf3105e"
  },
  {
    "url": "assets/js/64.dc415b03.js",
    "revision": "d34bdcc22d5213f74b8f101da89464d0"
  },
  {
    "url": "assets/js/65.4f56f07f.js",
    "revision": "4d66113227c757657f0196dd7734978d"
  },
  {
    "url": "assets/js/66.19faf9c8.js",
    "revision": "044b71570aac68beffbb160264e4d397"
  },
  {
    "url": "assets/js/67.fa42d393.js",
    "revision": "a0dadc42c96531fff71b51b0ab7dcaac"
  },
  {
    "url": "assets/js/68.055d8b3b.js",
    "revision": "2d6a2cc3777f9b3b03288a35a12ba987"
  },
  {
    "url": "assets/js/69.30824f63.js",
    "revision": "42b22b9c01c4dc2f0cabd835fb9b5952"
  },
  {
    "url": "assets/js/70.3b56b303.js",
    "revision": "28cd8ff977c606d8cd6f3e5d64524632"
  },
  {
    "url": "assets/js/71.64a4a481.js",
    "revision": "a8fbd9c68cdd48d4e5ebff519b7378c5"
  },
  {
    "url": "assets/js/72.d1dab278.js",
    "revision": "2931493134610dd5a141de66b8540ea1"
  },
  {
    "url": "assets/js/73.c6598611.js",
    "revision": "39b3bbf2d96adecdc3533e7219d61f4b"
  },
  {
    "url": "assets/js/74.6eac5aef.js",
    "revision": "07a84b17739eeddc59f021c53640d72a"
  },
  {
    "url": "assets/js/75.b3fc2371.js",
    "revision": "1fbbf27a37ebdc07ab251fe905876397"
  },
  {
    "url": "assets/js/76.552f13c4.js",
    "revision": "eeb598298738c24b175c2f8f11dae003"
  },
  {
    "url": "assets/js/77.31679dbb.js",
    "revision": "7ba630aae88fe088e60afe293a993b3e"
  },
  {
    "url": "assets/js/78.c8417955.js",
    "revision": "f9270dc508b176e11e202f50bd4b3bfc"
  },
  {
    "url": "assets/js/79.3a90decd.js",
    "revision": "faa9ac370c8835b505f99f88d9ebc805"
  },
  {
    "url": "assets/js/8.913151f1.js",
    "revision": "003623117c1fa38d21f01e9d971bd7b0"
  },
  {
    "url": "assets/js/80.dae2f11f.js",
    "revision": "88149571655724f19a44cc9a11d7687f"
  },
  {
    "url": "assets/js/81.d8361b50.js",
    "revision": "ebcf1fbace7403d65aa70077ae821b89"
  },
  {
    "url": "assets/js/82.5cc01eed.js",
    "revision": "90b19037338c5756c5861760b17ceceb"
  },
  {
    "url": "assets/js/83.23ecf265.js",
    "revision": "04321a11f79d912e36cb87eea31a10eb"
  },
  {
    "url": "assets/js/84.63feca8e.js",
    "revision": "5959a2b36a73db568397243bfd327a86"
  },
  {
    "url": "assets/js/85.072a1ee4.js",
    "revision": "c1638c2f037ac74d08454aa991bb3e6a"
  },
  {
    "url": "assets/js/86.c83f1fc9.js",
    "revision": "b543c7f414ad3100b429624403865d07"
  },
  {
    "url": "assets/js/87.227bb42f.js",
    "revision": "3396400592a0e33d0dc049f2f083b267"
  },
  {
    "url": "assets/js/88.78dafeeb.js",
    "revision": "bdea24a0459c6bf1442564c6597361e7"
  },
  {
    "url": "assets/js/89.749eb706.js",
    "revision": "e80b6c7c20332c6ce27e32067d2e39a6"
  },
  {
    "url": "assets/js/9.748ebacd.js",
    "revision": "a5ffe884de7b18bf75e7cf3e2a8fcc76"
  },
  {
    "url": "assets/js/90.c1826725.js",
    "revision": "1a01e385a7d35abf2532db5783f165b7"
  },
  {
    "url": "assets/js/91.8ab12a59.js",
    "revision": "62bc6d78b1b60b02806f45853404727a"
  },
  {
    "url": "assets/js/92.10445b38.js",
    "revision": "30aedb4985f24805063618b94f1fc3cc"
  },
  {
    "url": "assets/js/93.d04ad1a2.js",
    "revision": "02028ab9850023a3e89efb80394abb2f"
  },
  {
    "url": "assets/js/94.761e184f.js",
    "revision": "47d5ed60f0b526a498bd56814e0ca961"
  },
  {
    "url": "assets/js/95.b102e90d.js",
    "revision": "71772fa4f915b6952cc7db341123a7f3"
  },
  {
    "url": "assets/js/96.4b1622c8.js",
    "revision": "2354ed50ed14073298c5a87214013ca7"
  },
  {
    "url": "assets/js/97.c3320d5b.js",
    "revision": "4758ee6ab664bf8bb436939b27eb33fc"
  },
  {
    "url": "assets/js/98.10f763d9.js",
    "revision": "c509aae80bfe93de70ae3fdde3baac15"
  },
  {
    "url": "assets/js/99.c9c4045b.js",
    "revision": "7c9ea393d8ce481142045f8f9d96ad1b"
  },
  {
    "url": "assets/js/app.6ea9efc1.js",
    "revision": "f5a2f10fca6cd05d0e913f1ebd351429"
  },
  {
    "url": "assets/js/vendors~docsearch.3c03fb7a.js",
    "revision": "7e4de340211183e72dbcf1e3e36202cc"
  },
  {
    "url": "index.html",
    "revision": "b9d55a40f7737538234f328dd37de7be"
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
