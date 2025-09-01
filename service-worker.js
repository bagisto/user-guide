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
    "revision": "7dabc97534cd43d2dcf6c62e0b43e76d"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "d100b10226d2e0187f6de6615662be74"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "7bdb9f504fb8834fdc4429f60dd0819c"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "a0d0e77fad273f9443e601209166d795"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "072a5d564c272a70f3f26f8eff0f45e7"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "eab71940e919631001414d78767a45cb"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "44dc4f425bf29d229cf7b7043bf20a34"
  },
  {
    "url": "2.0/b2b-marketplace/supplier microsite.html",
    "revision": "e5a3bd284c01da943de57228ac4247ec"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "67b03b134b910154f988f0224b2aeabb"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "c714a5ef3fdb0b806a6467c5d845b26d"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "18805eef99d43de4e37167b4a85fb2d0"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "4c66f25a7af459578147bea94b8524c4"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "847894e12fff03cac1028b7684bb9f82"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "4ab21df690bbf46ba0cb5b49d373f9cf"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "467f3a109ba64c7e1e7fad6eb8959ceb"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "2b8c0a4fc056533a31831e7851119937"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "192a73432881f7c9ca78001ac4a0c77f"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "56cc065e427ec1c44a338cafdb8302ea"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "41491a157ffcc29e4dd317037cf18325"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "8c0a48441458fc6d88f2e2eeaf36f052"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "08e8b266781bceea07410d8eff05f8d2"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "2dde1c059786fc7bf0abd09f1699bced"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "1ceb429001fd89228b75b385b1d14910"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "9b14fe4ca6cdc2372c4fe204be21dbd8"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "8783bb19c8d75186404ba1e53fa88115"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "f7e0dc9c37af69ac691582c4efc20d8e"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "84e2997aebe6ae7f6a85c396b2350232"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "126f843bbbaec2564e8e5e27a224b024"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "8c18dfbae8998d4ce45d5a3e625f6144"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "89ae58edeb1e56b9c496d12cb67e73c4"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "43771755a1de5b55fe61e01d07d3be3e"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "bc527f966a89ab7cac1a870bb0ecb658"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "b7de60c532641d2cda48b9a55fb2450a"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "53d5432c9c20997a53e8f47edde04242"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "798311fc182ddb9c2e5af98a98a3fc75"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "d78c84b5deb1557d546314fd5633b03d"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "bce43def39bff487e0f59cb825d43fb1"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "837dc0e799ff350c591a6a88fa101fdd"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "70f6d5d474294019ada6437c252016f8"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "efaf651dfcccba4aed76ad5a37e5d4e6"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "7b5f200f7485beeb721f65014d42c4bf"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "398697a52318ad00dd3464859f0d4ccb"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "596c1932635e5196bb34d90c814ea465"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "39ccd73d5e6ab71e18cca04bdb6903e1"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "d25b5199432cd8106126aed6d9f56a4e"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "76272dd3e863e4a73cc33091f9921ff2"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "972c1e0195457397b355f3e345f9f4b9"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "b56106bb5062222db84199f787cf2b50"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "1a6ba7127b387880ab795b35ea3b5697"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "7b06c744ed59824988b28ea4bf5f604a"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "d2e0a6fe5f5b99a3403286da6f06502d"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "ef35ade6d65179c2b6fb9aa60c831a97"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "bafa45caf5d3daad10889e247d27ad64"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "d966545b04cce0a8c52d0aead406cdb0"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "59cd0343a6f726601b183bd7a29662a8"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "e3731265761f71820cded8cbddbc4591"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "9fd7f3a9b8940f844b0d982d6cb2fe52"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "ad4bc441873fcdb09588f9906d64d430"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "edf4480735175cb41794ebc4b7303bdc"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "b056bbbe6b3a37c00b33e4a0d1f9e1c9"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "aacbbccd56033db794caba7c9488a3e7"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "aeaef43312d057db81156256951ee2ba"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "85a62174a16f9f997cb6d21177f747d7"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "17e326d3942589d4fbc44b0b3b733e3f"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "59fed410bb031e62da4d0e17806e1f2b"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "51371e791e179768aeed09035186cb24"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "a957802b89198d0ec9dfd98f52ab3a87"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "17f6e5dd8e280c43de1e0f327306e16e"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "4acf3db82ab7a165b995a0969bfc57ad"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "66d80d60f8d6130ef9de383bfe0b4bdf"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "ce84080863e68d692e106181d051534b"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "c878da49c5e6af2025c418835f661d89"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "2114579e1aec21810a8ecd573a79312a"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "d7f91c630483d8cc7dc3d239ecf9a306"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "54849a49b885a9f399a440b508c1dfea"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "9d64549864fac891a05efb4c226a716e"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "ce78dfc4857ead94b20396cbc43c5c77"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "340a24cefe8ea52591d17541c5e4e0b3"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "360d9e593c10783b671968f9af0d52fc"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "5121f023cf8288892090b1d376069aac"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "1a48c9287b90ec6d0916020f5995c6bc"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "034606f54f28f809761afc8ccdb0fb18"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "f6c5316c255868508429e0e8a3dcc061"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "dc4ca460f7f408710e9f094627c796b3"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "098c693966a5aba192399fbfe1938d91"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "046e211eab6ba0d186e8951bb8f8abcc"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "3a1ca6bda8f8d1d24368d2fa13d39b77"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "f456d64902c5b983092491ef1d0e2dae"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "aef01882cc10cf2229906faf424d20fb"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "cd738d105002a04d3c447b9db4ed6a44"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "bd72a5b953c6495e00e0fd6d089aa9ec"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "cb31b32069b9670da7386491e40548ee"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier microsite.html",
    "revision": "a7178de4ea0c8c28f4dae6244e8a0dee"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "23d096a774af91b144e8d4066963c32d"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "f188c7e69bd98fe6beaf0f2bb8b813a3"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "564193314f0adc038490e16d7eb885bf"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "35832bd581865f14bd0f3b20cce6d015"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "250b295ae11ae9e6455b55a4bd102a3e"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "268b339f8a7d49be7d553f1fd3cb58a9"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "520fa08b3cae3e38f017ab3bdea09aae"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "05e6996d4c9c90a561dad4b736aa2474"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "30c819bb82614b88d08f325672496e26"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "1ce2671829fb83c008e7ef6dad517b0b"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "3056a201b015725d5f0e524815cb14a3"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "cf6b1fca14d90def194b7933c36da163"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "d266eb6767e5537bc4beb4b1f5c18b6c"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "e0ccf78237ca15b3cdb9d3c2bb3968e6"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "c63c1a90b3ec9f46d25d4cf4f4479465"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "c09ac43914e1ea0afa186247abba9e29"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "b664627add88caecd8abab7a56613730"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "b7fbb13b4cb36de42df8b249f3a8de02"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "f295cb69371f07f0efb78327b2b63987"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "a9051c9dc8fa84bf52e2c615ce182135"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "b1398c4335a0a64843b4e136e613f245"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "acb23d012fee582a74cc42e6166fd1ac"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "639efd2e21d3651b8776e0306229bf7f"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "356c8f7a3dd6d8130b9e28af9d9e356a"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "472d147bb8965252f2f498c035fd50b5"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "08f1ab50fa4d07ba9b153cc95bffdecf"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "713f6299d143e57746c534d3e2542a2c"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "52089094ccf3490da03bd77c3070d0e2"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "8ef0c23d5d056b6609ce2d70d1d04b2d"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "ad0e53dc5c80ecd1b6b60ae5a03bcfa3"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "4f581d304e80b955966d2cf82f2d5fca"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "c190c1e6b9cef2faa1796c997caebd4b"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "fffae634f4802b84b8371f994de4d983"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "87aad9fda8d33bdde719a17e6abaa054"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "113df5ce58953ae3912005b055078c78"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "726a38bab695380a6c580449aa65092f"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "fabe3b75bc6b2ed0a6a9d853e3c93988"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "77e8de014eca089ba720fa97ff5e40c8"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "ae19f080ee0db5b609ed1059fc265c96"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "daa83c2f7c5594b1841f5da98cad9b0f"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "df7b837cbab8cde48027bfe74d24f591"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "f02ca308803418b297a597d3c1193d5c"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "663b5cbf70ed0cdccc489599e7ee7cca"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "54e4aad1658296d04d1c8f9c5edd1f62"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "0243457a3ba2b65c4f7e6fa2b18367a9"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "c7ea9accbe14fcba1bec0e9a45697a8a"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "3b9411d5f8f917d489e46d25fb698321"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "1e5f1a2cd1fdc8aaaf18a5d1587b0e6e"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "9180fc15e3f7b77e8005a2cac7fc9d6d"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "83d1659c8638c76ef68e8994f50237ab"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "cae5b5bc88dc1319d3b4a26cb06562b2"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "e1ac5115bb35d7e4ba1d6c90e9e402d9"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "20c7649c992d37cc128cc52c8e633b90"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "84018c6de49432484b1199fd5878119b"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "4cea9784f5171ae522d0fb3de87b8cd1"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "81fb568c36de463b63800545fd34fc92"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "8423a59ea03a5829bcfb9c18c285cf96"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "748ecc570104028b323e8f3e4555c1c6"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "dded31b40194d8ff16b16cf1b309dd98"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "e7fc69e506d7e9fc508b8db5b9a7e984"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "4c81577d6f3f99b3228ed76170c49752"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "9dc89454eb693a92de0c951cb9e1ff26"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "a83049e2c32c8556cc9dfce59f452429"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "a41716111d5bfa0345270fb609732de2"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "724237db8ae23a23c94d9c3d7826d6fb"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "7a077088a07e47e87968a51d0cedc0f0"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "82b098e4fab06e8b0deb6fc25b0aebef"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "c1f3f97f6900caf78b29810cc39fd5cb"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "a8f8f7a02106e8f648d43f77fb9d87aa"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "6b4e5bb4186847394af26f58c5dd2ddd"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "098de99d408558b666f62611d1e79caa"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "ea6978b15278418ea2df05d6dcd3665d"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "d820e023f546da8f975a12aff9a29084"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "69961e04e362fa0d2d252599d61a67fb"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "40a663e40f893e3444d221ec511a6593"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "553059da5a205fc0146e5f2fd58eee22"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "6eb53ad62ca88b4b8016e3581c32a670"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "41afdfb9cf146ab13c92988fefdcda4b"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "966f2f94dc7b4d4aa1a343fb8809f346"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "397832f04b39af62bb8578fd583f0da1"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "b2f8dfed5105c8b4ef8eb0d5aa8b12a5"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "5e017d7b89fa45c68468d3405ad27e34"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "9dd3d48a87725f5fe3a2c346ad19e1d0"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "7dddb35fd8746a4c0a6e61f651d0356a"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "7e5efd024ec39b08351ba20ca62307f6"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "124a541864001310e679c4f6fc81acd2"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "a4a559a6b5cd4dbec331ff041d5dc8ef"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "472c4356afd5f426d9ad92a03bf37b82"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier microsite.html",
    "revision": "fa1578777e55bbc2553ebd6bacc4c07b"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "2e2a1406838d050742dc2ae785135524"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "de35ca542fe7d0a8434e1eb724d29e44"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "6a4d78c66e11f14c63091af87f3ba45a"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "5f66d42593d1ba5e4f9c1f848cb2fe3f"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "0c929e65469487dde592bb03368495e0"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "1e85a0789e669d9ac776e49908348131"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "bd9882516583489f11e5816867da5787"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "52b4d8fb218a8c2ec1bd6b2cc1326c4d"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "55ac847091679a284b026260ea4689ab"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "539805aa13277ddf57ef327e99ca63cb"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "6dd43bf317b589b6ca3066ed314fb055"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "bf9dd54d574e26bbb75547c720b64901"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "00e52ed4df92e4523cebb061cc0b1e6c"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "c68a9969efc3f2aa613bcb40e5a5f9f8"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "0fb68a9557b4d383144782e4289b91fd"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "5c578c78d32a6a080d791c6974887c22"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "d0ba96818cfc0e575f379b1328b52b46"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "f5aef0ed6254a4daf01525c0e88d68f5"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "f4d5080aa20c067aa60768a89b29b38c"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "d26d36e15203742d2c7e9f08dd3fd745"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "f6cd0b6f426d50784490d9fc2c8261eb"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "1fb7725c6533979d88a6cf58b3f96da1"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "28d76d3e8bd4e83113d41a6eddafefe3"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "901b2e8391ce41deaabfb4850995a901"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "1aa02050a02a7ede879bd44804183050"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "a39c413619f4e507edfaeeb38f5246c0"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "a97b3e391ec12efe5876c4a49d515b95"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "abdf0f116c8fb14dc5a5bb56169308c8"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "49e2dc13e46a279dee5a9221f619830b"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "600b77be0f5d50e953b84df53c805440"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "66348cada35dfdea9e49fd94251b0468"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "ee8564b70b9f0206ddefcc3083700515"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "b653896d0bcc08c57cfac93303474fb2"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "062019b006e855ed3f938e28979f7974"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "cb80fed433f72a8cae3644d0db6b9979"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "f6a66563f742689360775ce2de2928db"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "06d24638c1abe2237a5f5b1517ce85b2"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "620c6157bd499c40a6184c9eabda58bf"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "01fe4b1be1014c5d14da575979c7faf2"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "30db452dbdfc1cfe198a486189102cd7"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "3d92f8c88166988f004aa68638c746a5"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "7048a11e42b937a7645265b46545cafe"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "525937439d789bd9e4fc4cdd2e961207"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "098bb945df3957b5d013b60d84030aed"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "1d7e1ae9b82635ac049b0eeb5676e08a"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "011db93c0487bc46d4c374e80a61af34"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "eb75f6f7a04b9b60b76a650e8984c9df"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "8bbc3cfc20799091a414df4326f74fbb"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "a5517e62f9a47d0ebc97dcf7f71ed84d"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "81a20c131254fbed882ba5b51337987b"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "784a939d4b6314658b97d54b300eada0"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "4757a4910633b7b2e2e1ff3febb86625"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "ef6d13aecdf89725cab103d21c01be7a"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "4404cf93d76c84548e54c0b350e9b633"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "ae9b7e610c7a71dfeaa380ffd0f564c3"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "99e45e0697007f6d16e19b62d8923477"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "aa92b9d9ab8e9d9a856344544532a4c4"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "b949427056dad6e8dd8b8f9964f07c2b"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "5c6156ca85dd31a50829cbf78ec591e1"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "7f96d1d9746101a18381b5aa0d7b3f84"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "1ef7a54744996170d8e5d2e5b3079ecf"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "bccd632c8a4f7d784eb4dc8e4778f242"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "26b000c0d748b3684d245472f146c6fd"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "19bcc0296517e98488dc505323cc310b"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "47dbc5d174827c846daa7ad8b130db9a"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "9f609e29dc05b433baf83e19dfc7a0b7"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "b893dbd3dc591f3803a9438d6dcde892"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "830b7a41e22968c28e657a18f20e569d"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "18980b17eaaa9b8605e346f9b269974d"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "9b5649f0a14e8a035e75d6140a3f1370"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "c3b8d918ea6ccea1197166b3975d42a2"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "6d7474927335f827563e4cce99841297"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "c8352cf7f7c5555cab5f7e09674dddce"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "ffdf4885d06a3681cdfab99f8d02c1bb"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "360568ab31fba04021ef6e4a0cfdc35d"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "778e181f19e05156d6df5cd3efe9fac2"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "2353bcf6db0ecf865f7aabd2133a9933"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "6d7e94cc299834501063517c5c0acbe4"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "658fdf60555818c50a0204f3895ac923"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "d293ed9cb242900e0798535e8fc633f2"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "4d05930f9c68cea9952a8497f97d4820"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "f72f6a8ec7379e172d2a7fdffe79396b"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "2605a4ec95162d3151f99437354e6532"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "df07ae9ea1a5180602f16cb5f0ac647a"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "2363f48829f0cdf120903aa2421ce57d"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "8a240e39a77fdff5b7315c2afa1821d0"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "aa719ac604e7ed7be413a246ed606669"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "7a4e962aeadab108130863e231a49897"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "7d956ca5f4ba9558fe90d45d5bf4cd67"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "2c4122109e17da9aa1c0b1b0f5e3d385"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "7d674fa6fe2bc7ed77318029f32b469b"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "e9fcecb771d22dc365bc2b3529d47001"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier microsite.html",
    "revision": "1b5e1849779f9905f5b85ef1ceaccc3f"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "d65d5e3743e3429829aae7cdd501276b"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "c2ed7543d1a476a740c799d586dca182"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "3a39d11652bf21c1684b6e246eb2948e"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "18659e6bfad0fda0498ff3e6602c2d65"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "20e2f6842357eda52216558ad1b191a9"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "d63be56125c5b03f0734b78f0da0190f"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "bae27c3d131546a6f21a9ec1eb2d2ce9"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "6f523fdf499fe29e90ede69220e6142f"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "8b66a5ce2748b2f36f0f5e173b352b9f"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "5e14c73cfc6df1894d548eb82d8992d6"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "713805df64e0a6f93910fb2db06bb2fc"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "7e04f4e0c93d6a699ce7be967cf02457"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "22ba23711af6298f516ee6df4a4bf717"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "123ba50d2d2ff931ce8db84be0df9f3f"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "313c92a3b469bce40f5f9155bd233e13"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "51433bed4f38e337d2742d6a172272e9"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "cec7da74d0f579df8903054fc2f759ef"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "cbc65cd1b5354d92d14bd5a9453114be"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "731ce081c2e8b080b5235ad462853ab7"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "4ce3ec4048fc778a1a217ec1e7ca010c"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "97dc305e04090bb581867adca68d6d42"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "3a368ec508b2e17eb263138e8b511a03"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "d953207a0fe302b3ad1cd7e398411dbf"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "a6de18319111260759fb25db72c64a5a"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "1a75b1b9726db4f908870467209070e6"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "61a5ad22afd6232e128e603e876dbe60"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "f0cefae41e10ffa02f17e658e025a6db"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "3263ca83f7c3836b9721afcd2205f60f"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "166bd8ae0e0b05f4566a8e0dc151b120"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "7e3b80084fdc0c696df0043db57c4d84"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "46d73d901fae191d5a77a58c7a1f263f"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "adbed67408b44466f9d26ba301cf7f69"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "6393138394d85642e6c4797e83bcdf59"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "7163a63400424a18d8820e131064e8ad"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "994f3a8ed6aa39985e1d6e601e6489ca"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "725982a1230458176f6f1a3591c9c2fe"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "931178391d99f7d1f57be0a127a962b8"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "e4c2fb707a00c3c708a01651cf40875b"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "983927fe5b6d4552264f571fc2bca548"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "d9ab1e73074ec7f6ba90ec8acb270c28"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "624d4fc3399d9f9f34aa95fa16877c94"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "0bb502a37ce17fb507959ab912bc3a09"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "15951926c4f4e2fccaac242369efa5fb"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "4b6c4d0b4870fda4ecf863a0ea65e342"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "5421b640811b08fd2dac380fb0443ecd"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "c24d7a1dc962e3abed141ed741fac54c"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "a4f18eebf0d95c2c37f30955e26f24a3"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "cbdeaa0f4992bf0af8f7d5db51153573"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "c51492e3fc43813c93617415911036a8"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "5bc04bd77b3ae0597c29fe73443774e1"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "bd159535d29c32edf8b240ea049b8f45"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "ad3add6f20b98c5ca3f1dfd1b72c7d11"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "ac540597517b8abf2ecfef9ad49ec7a4"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "fe6d7a953c2384371ffa078b3d2dcc33"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "c5e2ea314e534812d7c9f0b31ec2c38b"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "85fb6fbcc8b919993bfd5bbe39c9fe40"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "d9ae6f2fc78707ab606dc7627d3fb760"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "05e952e271a13041d22b2d356d2b5d15"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "7e0694e69f8b99c394b11317fbd37d72"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "6e17f37fb263aefea313aaffe614d27e"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "857875c2c89780d54b1816fac2efa75b"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "3558f5263eac883de37c8f58248b3386"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "c3cd18639b96cc690f6a8cfec0e1978d"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "eb339fbb436e84fe651784dcc188bd5c"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "b963276af043e55f8433d41c02fa7f3b"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "51a7911d2e4cf038d020ba12a4f3354f"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "55442c9ff89ecb41a7f177f7b537cd7e"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "962ab8ca78f464addc13ced000d14fd6"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "dc2b6057e55f720214f4a6ad850c21a0"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "e0dd2aae5204cb0f83ae6cc563c63846"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "6690fc12e51b2722e0985059df36c7ef"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "0ccf7c4cd0395669c3cec2abe01f3c54"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "e5178a355f8ab644b50ce22bfaff3d2d"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "295c443e112568906a0ee628cedc940b"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "c7c04f8c21a650f0a6fdb695742a9ea6"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "98fbbf9459dd2417fb721c2e74948ddc"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "9aa111b57ecb43d1aeaed9e5e8e55a77"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "4ce4b28b292360187f0de49c3c9d5a96"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "39dd733ee9c8e8997d857564421b33af"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "8291a77a14044606afc251be765d018d"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "048631bab6c1867d4df11f3af91d0a27"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "4194e139c6bca9c1d9f383adaf30a92f"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "907dd133f9a554e97c897ad5e16c63fa"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "5ba1c1ab43ced41c51d1e13c0058596e"
  },
  {
    "url": "404.html",
    "revision": "b2766b2c9e62d764e598eb86d072d4e7"
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
    "url": "assets/img/1-supplier-login-button.ee9425e0.png",
    "revision": "ee9425e05062caf0d7349dadbe5766c8"
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
    "url": "assets/img/10-policies.431d06d7.png",
    "revision": "431d06d778b07c09a065514801f3934f"
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
    "url": "assets/img/11-social-links.371f78b4.png",
    "revision": "371f78b4d1906dc64e0e5dfe8271eddb"
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
    "url": "assets/img/12-seo.347ce8a2.png",
    "revision": "347ce8a2831b7e60cc092716d6224333"
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
    "url": "assets/img/13-store-frontend.3db5f5a1.png",
    "revision": "3db5f5a1415ef515ac5a898a82a09c13"
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
    "url": "assets/img/2-create-supplier.4426308c.png",
    "revision": "4426308c4b6eeb545e040025f7654c8f"
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
    "url": "assets/img/3-admin-suppliers-disapproved-state.8413280b.png",
    "revision": "8413280b9c04b1e82aaf67915b4f65f1"
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
    "url": "assets/img/4-supplier-approved-by-admin.dd11d306.png",
    "revision": "dd11d306bad1810709f8c4d18c316bbe"
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
    "url": "assets/img/5-supplier-sign-in.14727708.png",
    "revision": "14727708fdc18d6962becee72161cf43"
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
    "url": "assets/img/6-supplier-dashboard.0b60c8e9.png",
    "revision": "0b60c8e98509379d9b57d132299ffc56"
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
    "url": "assets/img/7-profile-banner-and-logo.5724602f.png",
    "revision": "5724602ff43a088b69b50448e4a60eaa"
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
    "url": "assets/img/8-general-and-operational-address.86298b5a.png",
    "revision": "86298b5aa0e8eb22d5de809332eb259d"
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
    "url": "assets/img/9-corporate-address-and-about-shop.47497d53.png",
    "revision": "47497d536f6fcc11d074d04103a86de9"
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
    "url": "assets/js/1.102bfb5b.js",
    "revision": "216c79bb877dca646aa70e773cf05532"
  },
  {
    "url": "assets/js/10.1e695dc1.js",
    "revision": "c7483aed739a651bb836d14422b3c6fa"
  },
  {
    "url": "assets/js/100.1a066ec1.js",
    "revision": "5a8068a7955ff2296e72b9f1ef01e54c"
  },
  {
    "url": "assets/js/101.1ac4e791.js",
    "revision": "47661ffb48b1a489b166211b0b67bb7d"
  },
  {
    "url": "assets/js/102.e3378eb7.js",
    "revision": "cac7e8237f2a2e3c429f1c6ab89abb43"
  },
  {
    "url": "assets/js/103.8e2ea83a.js",
    "revision": "be71bbf8852898c416d30059e8d91940"
  },
  {
    "url": "assets/js/104.d76443a3.js",
    "revision": "8e8e65edad50afe3c54cdb58f4003399"
  },
  {
    "url": "assets/js/105.a6f81998.js",
    "revision": "5eb65049dd1455cfe15de06f228c784d"
  },
  {
    "url": "assets/js/106.88422dec.js",
    "revision": "e5ea262ede172915ae22358469d7ebaa"
  },
  {
    "url": "assets/js/107.0169745f.js",
    "revision": "33bbf2dd0ff7b6f5e8a7adbcc9b784a2"
  },
  {
    "url": "assets/js/108.d98630b0.js",
    "revision": "332549261f644e50319a23398ed25109"
  },
  {
    "url": "assets/js/109.382f508b.js",
    "revision": "ecab081f3f426d58d06b8339aafcd5c8"
  },
  {
    "url": "assets/js/11.59e1fcde.js",
    "revision": "715744b2084b94394ea749009379b39f"
  },
  {
    "url": "assets/js/110.0422bc05.js",
    "revision": "a9ddef1f5624f7bdf0b57cc30fca387e"
  },
  {
    "url": "assets/js/111.e72ba2f4.js",
    "revision": "ef31c3a9005870c214b348340b676e87"
  },
  {
    "url": "assets/js/112.b3464e7e.js",
    "revision": "1f3deb2a3c1e0ab7e98552776c6bf3b7"
  },
  {
    "url": "assets/js/113.8beee338.js",
    "revision": "56e22626a818853c9be1a56877c7a2f3"
  },
  {
    "url": "assets/js/114.f3183dca.js",
    "revision": "3c42d4f9ff2cf56caf65e68e0468154f"
  },
  {
    "url": "assets/js/115.b6844e0e.js",
    "revision": "653b078eacc98ef28e523a8dc894ce70"
  },
  {
    "url": "assets/js/116.95b4fbc4.js",
    "revision": "0d4bf6079ae3f09e9bf11def01a4965d"
  },
  {
    "url": "assets/js/117.c8ef1073.js",
    "revision": "c7d13095072f6eb18a6cd1293738c383"
  },
  {
    "url": "assets/js/118.98bc64a5.js",
    "revision": "c77309256fae65b06710a42565c3c385"
  },
  {
    "url": "assets/js/119.586a750d.js",
    "revision": "f636ec03174372c686175659cf41b2fa"
  },
  {
    "url": "assets/js/12.e3a06004.js",
    "revision": "033970b48cd92e60fc30c618192f3ec2"
  },
  {
    "url": "assets/js/120.f887a62f.js",
    "revision": "8a56827007e6f82b290e13f1ebf92e54"
  },
  {
    "url": "assets/js/121.b70025e6.js",
    "revision": "faccb70cf2ba8d38888306aa0cbffcea"
  },
  {
    "url": "assets/js/122.94ced9f6.js",
    "revision": "42687a9efa267c6870016810a1ceea8e"
  },
  {
    "url": "assets/js/123.45ce7ae8.js",
    "revision": "aadc2bf9236a261afcf064bfcfed1695"
  },
  {
    "url": "assets/js/124.8503cca5.js",
    "revision": "d15409c57088623d87cd01419147f891"
  },
  {
    "url": "assets/js/125.ce5a8471.js",
    "revision": "b535320080ba7d120d8a376d6580c909"
  },
  {
    "url": "assets/js/126.763f22b3.js",
    "revision": "725248e0f44c4845367392a21e6d729a"
  },
  {
    "url": "assets/js/127.63c0d863.js",
    "revision": "bfb14a5f5b087b969f78679d85fa3189"
  },
  {
    "url": "assets/js/128.f4affb3e.js",
    "revision": "c925505ffc4d3921fd038cd833ba0a91"
  },
  {
    "url": "assets/js/129.2eccee2e.js",
    "revision": "9822958eb74aa21fa4d270d4d8391966"
  },
  {
    "url": "assets/js/13.34bd3fe3.js",
    "revision": "489c43bd6b6067e128898f6fef9d9c4b"
  },
  {
    "url": "assets/js/130.db6cd5d5.js",
    "revision": "63320e726d52c4b447b53dadabe74525"
  },
  {
    "url": "assets/js/131.63f0de9d.js",
    "revision": "d35e2b4317df6bff98f4c312f1cf0fdf"
  },
  {
    "url": "assets/js/132.45c0ef31.js",
    "revision": "ee468e37dc1d93243595fe2990b0778b"
  },
  {
    "url": "assets/js/133.5da222a5.js",
    "revision": "7e54ee61fdf56a406b1d37adfda0c38b"
  },
  {
    "url": "assets/js/134.b29fa740.js",
    "revision": "211fb06b51eb9aea5a195a4845d99d10"
  },
  {
    "url": "assets/js/135.5f301338.js",
    "revision": "a9581289c1a539c01c70116f6b3c0b6e"
  },
  {
    "url": "assets/js/136.d14f9282.js",
    "revision": "21f3cc35d49e178ad3b46e8ca10bda27"
  },
  {
    "url": "assets/js/137.2110ba4a.js",
    "revision": "98f2cd082a3fec86dd1a3b7839ec4d40"
  },
  {
    "url": "assets/js/138.864bc40e.js",
    "revision": "66e2a2b1ca514cdcb027b952c4d3fbff"
  },
  {
    "url": "assets/js/139.5d373c1d.js",
    "revision": "bd47c546643c8d8d7a45091ebf6dd085"
  },
  {
    "url": "assets/js/14.301e613c.js",
    "revision": "fdc4776ddc9e9729e954959177c5ce15"
  },
  {
    "url": "assets/js/140.64ba61a1.js",
    "revision": "c0b8d36787ea9ba4db1945be84e83e07"
  },
  {
    "url": "assets/js/141.9358e126.js",
    "revision": "2b8e540fad1b48c9a7241e4edbafb035"
  },
  {
    "url": "assets/js/142.ae88d5af.js",
    "revision": "d04197a2f8c7fa5c391a8dc46c6dadfc"
  },
  {
    "url": "assets/js/143.a5a07b8e.js",
    "revision": "b34a41981d1e932752fca6c93cc933f4"
  },
  {
    "url": "assets/js/144.d1489bb2.js",
    "revision": "e2e973ef7cd018d7efb1e42ef14f58e3"
  },
  {
    "url": "assets/js/145.2af47794.js",
    "revision": "4309dc27450f70867c25dfcd3ac31e10"
  },
  {
    "url": "assets/js/146.ccb3ce78.js",
    "revision": "746fe30e693f100492bece40c7fcd690"
  },
  {
    "url": "assets/js/147.6e2b0e73.js",
    "revision": "27f4b4d8e94bc94b433dec70a899af96"
  },
  {
    "url": "assets/js/148.292e9dab.js",
    "revision": "f5cba23865ae4fbaa364485f1341390d"
  },
  {
    "url": "assets/js/149.604fb188.js",
    "revision": "5ed35c9d7e09eedd6f427bc5d6e2e7b0"
  },
  {
    "url": "assets/js/15.7bfd5992.js",
    "revision": "0960c0f57f8015da08c3f8d95f684d55"
  },
  {
    "url": "assets/js/150.c7b5029b.js",
    "revision": "fccbf3e7e3777250890236498a4e2785"
  },
  {
    "url": "assets/js/151.a502ed36.js",
    "revision": "899761476beae4bce56133c12c1ee814"
  },
  {
    "url": "assets/js/152.d2689842.js",
    "revision": "d850e6b11b2bbbc1f3505ec41b1f9e74"
  },
  {
    "url": "assets/js/153.97bec7df.js",
    "revision": "7e688138b8ff4f3c3e9ea1cb14c11a32"
  },
  {
    "url": "assets/js/154.39c2a537.js",
    "revision": "3a5defc0dcde880f21859c0aa90e3b92"
  },
  {
    "url": "assets/js/155.ca7aa38b.js",
    "revision": "37888b293ffb6c8fa0e5747a12806ec7"
  },
  {
    "url": "assets/js/156.2f7ef279.js",
    "revision": "8b803eb3302fb6e27596e315e1a8b685"
  },
  {
    "url": "assets/js/157.66938980.js",
    "revision": "4bb571189558394fc96deae29475cd54"
  },
  {
    "url": "assets/js/158.dc443866.js",
    "revision": "96d55210b99f93d23827f79fabe950f0"
  },
  {
    "url": "assets/js/159.fa1e9271.js",
    "revision": "10dbaef37e519c4e7ddb259cb1a03dad"
  },
  {
    "url": "assets/js/16.27c8659d.js",
    "revision": "8bb3aabd54d7ad6a7e6a35c84d01858e"
  },
  {
    "url": "assets/js/160.ecbb5113.js",
    "revision": "911cd4ef7b2a2bf15f35937b477e428d"
  },
  {
    "url": "assets/js/161.852c088d.js",
    "revision": "77381c418aeef3578ad951c9434632cf"
  },
  {
    "url": "assets/js/162.a4d38043.js",
    "revision": "a3d60c23f5290116363dfdddbb14b16c"
  },
  {
    "url": "assets/js/163.01adad6c.js",
    "revision": "231f625db444523fa40bc14820dce5d5"
  },
  {
    "url": "assets/js/164.c3c74d09.js",
    "revision": "58eb496cfaee3ad6dab8f0c59d4e4363"
  },
  {
    "url": "assets/js/165.34d18a9b.js",
    "revision": "d7bab0309f89de32f9e4b3a14f0bd1b6"
  },
  {
    "url": "assets/js/166.991f0745.js",
    "revision": "014b7c54448279018649cf4619961dd6"
  },
  {
    "url": "assets/js/167.af09753b.js",
    "revision": "4595c5303d73abd41e8514e64df25941"
  },
  {
    "url": "assets/js/168.1b3370a1.js",
    "revision": "e4d15cf2c07a4852a2a2b90b94a8ddf9"
  },
  {
    "url": "assets/js/169.408f3b09.js",
    "revision": "948698f19976e369f5c4dcc680c17f65"
  },
  {
    "url": "assets/js/17.38324ed0.js",
    "revision": "005bd1cdb2491ddd31987d0652c7be02"
  },
  {
    "url": "assets/js/170.03b57285.js",
    "revision": "e55d993a95f05cd5806792a0976d2aad"
  },
  {
    "url": "assets/js/171.0ef1dfca.js",
    "revision": "94d2687dbac39564c5dcd596b62e4d4b"
  },
  {
    "url": "assets/js/172.0520a8ad.js",
    "revision": "2381e84f904af33fb53159e3bcf87766"
  },
  {
    "url": "assets/js/173.27dbe83a.js",
    "revision": "4ab087a1091c925a13dadccac5121f47"
  },
  {
    "url": "assets/js/174.d858509f.js",
    "revision": "526886deab035bf9ba54496c1d1adc13"
  },
  {
    "url": "assets/js/175.401668df.js",
    "revision": "f9427785ff7e70efaf5db1cbf5dff12f"
  },
  {
    "url": "assets/js/176.64a8e2fb.js",
    "revision": "6301ae038dd5dcf7095ad2fffcec0a10"
  },
  {
    "url": "assets/js/177.24302b3f.js",
    "revision": "68f8996d98d84751e28eb3c807b523bf"
  },
  {
    "url": "assets/js/178.0bfe2593.js",
    "revision": "71f295e3d26abaeab79c4fc45116344d"
  },
  {
    "url": "assets/js/179.9a4913a2.js",
    "revision": "ade1d9d8e2b35705d312ee30bbb9ebb2"
  },
  {
    "url": "assets/js/18.e585175e.js",
    "revision": "67c6588a905d1425cc860b400dd2584e"
  },
  {
    "url": "assets/js/180.359ed73e.js",
    "revision": "72cdb81d9fb0e682d8bde8618ad76baa"
  },
  {
    "url": "assets/js/181.0ddd6519.js",
    "revision": "906188e192448fdd70045d445f7c5aad"
  },
  {
    "url": "assets/js/182.77df1fa4.js",
    "revision": "5ed7a7c5da0b17ca70883471b959ca20"
  },
  {
    "url": "assets/js/183.0297bcfe.js",
    "revision": "666fe88a071848912abac931840aa9a4"
  },
  {
    "url": "assets/js/184.0b26e9af.js",
    "revision": "93b23bb5a5173836723f17a173660db4"
  },
  {
    "url": "assets/js/185.52b460c1.js",
    "revision": "80bb085bac52b4e1966f864bb1ca4bf8"
  },
  {
    "url": "assets/js/186.1231a21b.js",
    "revision": "0d04f56ebcb5d91600ebf80a12840988"
  },
  {
    "url": "assets/js/187.34d87f99.js",
    "revision": "26dbfb804712bf9e9ad0d33b38827e53"
  },
  {
    "url": "assets/js/188.fb50b698.js",
    "revision": "c6ba5fc3688f4033fda9aa2f16bc87b7"
  },
  {
    "url": "assets/js/189.d91be1c0.js",
    "revision": "5eb8bb8a39e703660df060bf61d2fa15"
  },
  {
    "url": "assets/js/19.f16be7af.js",
    "revision": "add86d2d3b6999901e7f579ed7bc0f8d"
  },
  {
    "url": "assets/js/190.875103e0.js",
    "revision": "6b5b0f50031f6b5304ac951f649fcbfc"
  },
  {
    "url": "assets/js/191.86034da0.js",
    "revision": "b6e15a39d48b2ccff51fdce7196342e9"
  },
  {
    "url": "assets/js/192.3e0dc327.js",
    "revision": "006b23a5bd8e5ad770bf8c764e1691ac"
  },
  {
    "url": "assets/js/193.55fb853a.js",
    "revision": "e8565aeff6ded995ae60281c967234b7"
  },
  {
    "url": "assets/js/194.afb20bfa.js",
    "revision": "7763de50af12debbb3c575ba4053a4d1"
  },
  {
    "url": "assets/js/195.d0687857.js",
    "revision": "43da3bcfaa6be26d1e60659251b01afc"
  },
  {
    "url": "assets/js/196.1de11642.js",
    "revision": "0124a78542d1b61a5ab998f8788df650"
  },
  {
    "url": "assets/js/197.e3fbc581.js",
    "revision": "71f1c20d6a83c1e38c2b953b3085c54c"
  },
  {
    "url": "assets/js/198.0399450d.js",
    "revision": "e92dbb412f2d06fbec0201948c522d1c"
  },
  {
    "url": "assets/js/199.1e29c5f0.js",
    "revision": "5baf14a243f6d0c6f9296f3e30e25eca"
  },
  {
    "url": "assets/js/2.cd664ac7.js",
    "revision": "1d3f83b752452cd3966c784421841d23"
  },
  {
    "url": "assets/js/20.fe4b6311.js",
    "revision": "2c750d2fb8f4a8e3eda79103f4f29799"
  },
  {
    "url": "assets/js/200.e6a5583b.js",
    "revision": "5c265b0698feb27b0aa2473ca66d7163"
  },
  {
    "url": "assets/js/201.9bd1c7ce.js",
    "revision": "006a2c3a1afc1582898246023485d2ca"
  },
  {
    "url": "assets/js/202.da297425.js",
    "revision": "f0065301a83240fbba572ac7ba8e45ab"
  },
  {
    "url": "assets/js/203.c4db88d9.js",
    "revision": "128745fc71ea2fc6c67cca12c7c1acf8"
  },
  {
    "url": "assets/js/204.c7c8dbc5.js",
    "revision": "51e69c1d7a9771245ed0aca262c0afca"
  },
  {
    "url": "assets/js/205.136f11dc.js",
    "revision": "f132ddd832da1b57cf5bb5bb9c626a4e"
  },
  {
    "url": "assets/js/206.8d22500c.js",
    "revision": "062d1127f7be933d500e8987acd58eb6"
  },
  {
    "url": "assets/js/207.0345e26f.js",
    "revision": "2dfbb8b8baa9f87682fe80cf605e27ee"
  },
  {
    "url": "assets/js/208.aa955203.js",
    "revision": "4f1f5d0d346f6a8bed2aa779da126a0b"
  },
  {
    "url": "assets/js/209.94d6aa47.js",
    "revision": "6d7400da51a4dca4cb150cee2859db83"
  },
  {
    "url": "assets/js/21.4e8a2d3d.js",
    "revision": "c6d79ac34e73b384d4dc5e65206b8ff7"
  },
  {
    "url": "assets/js/210.8552c3b0.js",
    "revision": "814fce9be5c30702eb904f7853bb4fd7"
  },
  {
    "url": "assets/js/211.b584e088.js",
    "revision": "e764f7eb9b8d6827590594fae5c39a3e"
  },
  {
    "url": "assets/js/212.75c458c9.js",
    "revision": "3ac506d477340f039b21ac755b6ee466"
  },
  {
    "url": "assets/js/213.1511f6c2.js",
    "revision": "cf48a4b92a4540620916183511352742"
  },
  {
    "url": "assets/js/214.0afcfe5a.js",
    "revision": "45dfda611da59e94580fe07369356343"
  },
  {
    "url": "assets/js/215.31bb11f1.js",
    "revision": "dd390d4331c6bfe5d34ad0060832106a"
  },
  {
    "url": "assets/js/216.c07f0c83.js",
    "revision": "ce014f0a14dcc2976827b7a1b8d7d7bb"
  },
  {
    "url": "assets/js/217.a754a4ab.js",
    "revision": "8294bece625cd193ac961d992d0e3fe1"
  },
  {
    "url": "assets/js/218.ad744d27.js",
    "revision": "9272bf31b0ff6dc445af0b72e0af481b"
  },
  {
    "url": "assets/js/219.64d34bb8.js",
    "revision": "d895b88085239adf1f1599c2c7bfc762"
  },
  {
    "url": "assets/js/22.499aea61.js",
    "revision": "b03d67c140e4eedf0a326940a32ec0cb"
  },
  {
    "url": "assets/js/220.749e5a35.js",
    "revision": "a43ce62db4aa106c92a654af596af964"
  },
  {
    "url": "assets/js/221.7ca57beb.js",
    "revision": "a344b02b2ec34d0ea5789e7d2e7d040a"
  },
  {
    "url": "assets/js/222.c4882012.js",
    "revision": "a7be9bb83814926ed3a6ac43fe45f904"
  },
  {
    "url": "assets/js/223.388f84ba.js",
    "revision": "a363f0162ad62032fcc1ef6d03ac55c5"
  },
  {
    "url": "assets/js/224.0ce1f4ac.js",
    "revision": "ab56df522099e07cd47ef75c3f476c42"
  },
  {
    "url": "assets/js/225.b197cdb0.js",
    "revision": "61dc20ee728516f457c38bbc9b4c5473"
  },
  {
    "url": "assets/js/226.0ccce1b5.js",
    "revision": "e1a4213e2b3e4d9b82a3b127e779f193"
  },
  {
    "url": "assets/js/227.b91182fd.js",
    "revision": "692e1b953462f225020ac42e73a72335"
  },
  {
    "url": "assets/js/228.652e0b6a.js",
    "revision": "ebd3782094e8dab6de11aab86f47c777"
  },
  {
    "url": "assets/js/229.6a62153e.js",
    "revision": "6ec8e3ac3393ce538f0940221a0ed540"
  },
  {
    "url": "assets/js/23.89bf6eb0.js",
    "revision": "ff337305002884e561e6879c18dededc"
  },
  {
    "url": "assets/js/230.01a72a0e.js",
    "revision": "bb82a65b95e3222cb7cf3a898f1f0a8e"
  },
  {
    "url": "assets/js/231.6108ec9e.js",
    "revision": "dda488506ca561586f5ceea52dd75a81"
  },
  {
    "url": "assets/js/232.c6c565a2.js",
    "revision": "e0f702be70c97f589c367ce4e1ec292c"
  },
  {
    "url": "assets/js/233.8171a0c8.js",
    "revision": "5f0e7eacc627981cb74d1ef62099448c"
  },
  {
    "url": "assets/js/234.4afad631.js",
    "revision": "7b3a93d4b9aad136f58bb2583ca261fa"
  },
  {
    "url": "assets/js/235.fbdeefaf.js",
    "revision": "75d8cdddb6b1b52754bf17831c5d9f54"
  },
  {
    "url": "assets/js/236.dc68301f.js",
    "revision": "167b929ad94ef1f5db1673ec8e5d8f56"
  },
  {
    "url": "assets/js/237.196c5048.js",
    "revision": "f5b5e0ec990f55666dce604c1d39fb3d"
  },
  {
    "url": "assets/js/238.15004732.js",
    "revision": "a9bbf48425a0c4b68ac48ef1ba1b1314"
  },
  {
    "url": "assets/js/239.d73d47f5.js",
    "revision": "fbe48ccff21c0f214f53a4b4110bd286"
  },
  {
    "url": "assets/js/24.478114ff.js",
    "revision": "a2841dc84fa91b0c48f2fcebf9cefcae"
  },
  {
    "url": "assets/js/240.e4d17a42.js",
    "revision": "e8a770e78c52fd197bca5811b6556d15"
  },
  {
    "url": "assets/js/241.373962b7.js",
    "revision": "b3b4a9f90fdf2625c5bbfbce6714da41"
  },
  {
    "url": "assets/js/242.170c8dfa.js",
    "revision": "c1ed0ceeede480d5a505a44d530b2ae5"
  },
  {
    "url": "assets/js/243.d75d8dd8.js",
    "revision": "7283e3f8ddc42bbe0a8c297dbfba6691"
  },
  {
    "url": "assets/js/244.8b12d700.js",
    "revision": "dab18afdcb881bb681747a76ccf79cd1"
  },
  {
    "url": "assets/js/245.5684f030.js",
    "revision": "e7284b61d100af0c753d4794d673473b"
  },
  {
    "url": "assets/js/246.a3559ccd.js",
    "revision": "7e0c0bdeedc012a05f78599607ee4f72"
  },
  {
    "url": "assets/js/247.1de5d85b.js",
    "revision": "1ad47dacfec335aeb4b725ccf0f58578"
  },
  {
    "url": "assets/js/248.c9649a42.js",
    "revision": "214aecf6eded1188b82a0c25c82be443"
  },
  {
    "url": "assets/js/249.231c9e0f.js",
    "revision": "32a123ebd38ca1f8b25bcd44e515e277"
  },
  {
    "url": "assets/js/25.ef1cdc91.js",
    "revision": "66b4fad5d2af07c794ecbd4956dec4ea"
  },
  {
    "url": "assets/js/250.5bdd6d2e.js",
    "revision": "fa1eb162856ef35a6de874f7b01136b6"
  },
  {
    "url": "assets/js/251.d8e5f66d.js",
    "revision": "0350559cafb5cec797d2322f31c1d50f"
  },
  {
    "url": "assets/js/252.bd3e79b0.js",
    "revision": "412d5258552c6c25030b4934f9dc2f03"
  },
  {
    "url": "assets/js/253.0bc4e82f.js",
    "revision": "371f35d18552b33f492bfb60b5a2f09b"
  },
  {
    "url": "assets/js/254.0263d746.js",
    "revision": "e0ccb1ad3b4c3037254a9260f5f4b90f"
  },
  {
    "url": "assets/js/255.e5921e41.js",
    "revision": "65c0ce0b512b388fdfb2d32c4f045462"
  },
  {
    "url": "assets/js/256.d957ca29.js",
    "revision": "716f13bd528a73fc52a936cfba742489"
  },
  {
    "url": "assets/js/257.52729428.js",
    "revision": "620d3f7266ceb7e83799f02140257a0a"
  },
  {
    "url": "assets/js/258.e8b0fb39.js",
    "revision": "0e48cde34480ede7fcfbf3f1f3c81adb"
  },
  {
    "url": "assets/js/259.c79016c3.js",
    "revision": "fa37e3bb8e6201f7494251986ac0d631"
  },
  {
    "url": "assets/js/26.474b971b.js",
    "revision": "408e77c4c71614d2888cfe6b273eb577"
  },
  {
    "url": "assets/js/260.f0d09e6a.js",
    "revision": "1ff382196455a7269a3b33757eb526df"
  },
  {
    "url": "assets/js/261.48731bd9.js",
    "revision": "3e33a24ef440ed172d9c1921d18fcd21"
  },
  {
    "url": "assets/js/262.7aed3298.js",
    "revision": "9d9e0a06146e6ecfa0a29571d1cb73e2"
  },
  {
    "url": "assets/js/263.5faed7b8.js",
    "revision": "eec8691f8e3e9d6caf2c8d1a5c9556b0"
  },
  {
    "url": "assets/js/264.a7ae7df7.js",
    "revision": "e8fea651222e319b18e785e16bcf9f24"
  },
  {
    "url": "assets/js/265.098b0e9b.js",
    "revision": "f0036efce3a6f4a0213e25d10c0d4db1"
  },
  {
    "url": "assets/js/266.a6194bde.js",
    "revision": "d89988a0f7c6914f6a14ff266b4d6ac9"
  },
  {
    "url": "assets/js/267.19a76222.js",
    "revision": "4e4b9c8e5ab486546d345cae41e55ce0"
  },
  {
    "url": "assets/js/268.36b4c879.js",
    "revision": "746c12fcd6ed920504f6b9e8e31fe849"
  },
  {
    "url": "assets/js/269.d7f09d31.js",
    "revision": "ce3c9a25c4b170f7ade5650d6d5a3395"
  },
  {
    "url": "assets/js/27.fa2b6528.js",
    "revision": "4a850e0828f1c52cd70a9dcdbc2d2ce5"
  },
  {
    "url": "assets/js/270.3e2d4fa0.js",
    "revision": "08ec41473a6cec21aa85cbb909343cf8"
  },
  {
    "url": "assets/js/271.17772d22.js",
    "revision": "9b24f633e4b9e977e604f2ccc10f7c8f"
  },
  {
    "url": "assets/js/272.0708ca26.js",
    "revision": "c0f63552c11961eebd3c783469620f08"
  },
  {
    "url": "assets/js/273.2095f9f8.js",
    "revision": "89ff6c940f12acff529fea7771fb34b4"
  },
  {
    "url": "assets/js/274.74be4c6e.js",
    "revision": "a3aae5ce2c41ed0202f029193984db2b"
  },
  {
    "url": "assets/js/275.17cacfe4.js",
    "revision": "eb3a6c2f496a894b273328d5555ae6f7"
  },
  {
    "url": "assets/js/276.846aeda2.js",
    "revision": "0dc3d03228027ca0c32fbbb0a9956e11"
  },
  {
    "url": "assets/js/277.b51272ff.js",
    "revision": "8b7f71e65ff024cb7848ae2dfe15c1d5"
  },
  {
    "url": "assets/js/278.2c0614a3.js",
    "revision": "66ed820f4ee3f20acfe423e1cb7a8c59"
  },
  {
    "url": "assets/js/279.a9dc26a9.js",
    "revision": "c0e95a48bf00540b1723ce31ff126850"
  },
  {
    "url": "assets/js/28.3d5d1d70.js",
    "revision": "c7a840547f77f71453b3495877753bcd"
  },
  {
    "url": "assets/js/280.849c30ed.js",
    "revision": "a019d73653af7ffa71c65e51eae34a9f"
  },
  {
    "url": "assets/js/281.c6ef664b.js",
    "revision": "1cf92427c1819f1c9afbe3e6dc41c507"
  },
  {
    "url": "assets/js/282.82e2d4c8.js",
    "revision": "033df65269c781c5253a25c1c53ae953"
  },
  {
    "url": "assets/js/283.d6afc690.js",
    "revision": "9e00b0587249247e2e0211a99003deff"
  },
  {
    "url": "assets/js/284.8db59971.js",
    "revision": "d2f6092939d837bdf820ba35857077a8"
  },
  {
    "url": "assets/js/285.ca3c8e58.js",
    "revision": "7ec3a01456dd83ce84af63cdc77f2476"
  },
  {
    "url": "assets/js/286.b250c8e3.js",
    "revision": "5dd2378b7f35ff9fd93804b6a9c50817"
  },
  {
    "url": "assets/js/287.3e04c1ec.js",
    "revision": "ed7d905281bd8df32534d1b49094fd11"
  },
  {
    "url": "assets/js/288.d513001a.js",
    "revision": "21d70aa7050ee70b66fb8431d2fd91ac"
  },
  {
    "url": "assets/js/289.af4d3887.js",
    "revision": "60cff085644604df48a969e87e6fee8c"
  },
  {
    "url": "assets/js/29.6fce7f05.js",
    "revision": "8b6705a74b35b934fe1cbbf307dd90e2"
  },
  {
    "url": "assets/js/290.b7eeedc1.js",
    "revision": "14708d55ee3f2de84fa8a24d3e8b40c8"
  },
  {
    "url": "assets/js/291.f87368f8.js",
    "revision": "e940e12ddec09c0bf6e099ebd2d1db04"
  },
  {
    "url": "assets/js/292.19d2ee27.js",
    "revision": "6ea7aedcad4a04a1b97308e0538ed1ec"
  },
  {
    "url": "assets/js/293.254717a4.js",
    "revision": "7c426635dbc8037260bc294fb4aec44e"
  },
  {
    "url": "assets/js/294.b5e15ae6.js",
    "revision": "a4a5e1a6e787be88d92aa2240b2b168a"
  },
  {
    "url": "assets/js/295.6481a33c.js",
    "revision": "bbabe925e5f54eddf9f8cf46704d49e8"
  },
  {
    "url": "assets/js/296.8f6306f8.js",
    "revision": "8da94c4085a15c8bf98e29d7eaef5c93"
  },
  {
    "url": "assets/js/297.1180c23b.js",
    "revision": "6f9848be37c462679dfdda2a4eb8d7d3"
  },
  {
    "url": "assets/js/298.cf9d897c.js",
    "revision": "be27b64cef5f2a7fb9513dad99987ce0"
  },
  {
    "url": "assets/js/299.0b1e9fe7.js",
    "revision": "b3bc09469696752605bfbb45339d4611"
  },
  {
    "url": "assets/js/3.5d8e7b46.js",
    "revision": "58f21d174881bcdb9f28cc6263224e4e"
  },
  {
    "url": "assets/js/30.2bce2490.js",
    "revision": "eb3d3744b3c38e79df167e4530c717cd"
  },
  {
    "url": "assets/js/300.b087ac50.js",
    "revision": "537eebfd0a5633cd085074dfc24afec9"
  },
  {
    "url": "assets/js/301.532bb577.js",
    "revision": "be8d3d080ac96d363d4fe93b0b1bd13f"
  },
  {
    "url": "assets/js/302.ba1c0322.js",
    "revision": "e4bcb6f1fe00c086c92f9e4a5a7ab08c"
  },
  {
    "url": "assets/js/303.853d43a1.js",
    "revision": "a86966deaf81f5eab4b447dcdbc17ed7"
  },
  {
    "url": "assets/js/304.63bbc56d.js",
    "revision": "34e7d28766ee0350bf8ab1c9b6462444"
  },
  {
    "url": "assets/js/305.d623ba89.js",
    "revision": "7881f45e792e0b220a438920b8cee36d"
  },
  {
    "url": "assets/js/306.62ce9c3d.js",
    "revision": "3b8627368379a4233accfadce482c409"
  },
  {
    "url": "assets/js/307.2a0631df.js",
    "revision": "b0ee8d585f8f5b9a1dcb008a1ea3642f"
  },
  {
    "url": "assets/js/308.70035fe2.js",
    "revision": "7761a0893523bf8417e05ceb52f4bb34"
  },
  {
    "url": "assets/js/309.3106ae5a.js",
    "revision": "531cc685891b7a20e3ff75bb6bcb945c"
  },
  {
    "url": "assets/js/31.39ff7664.js",
    "revision": "60413afa4900702305719bda1fd46057"
  },
  {
    "url": "assets/js/310.8655c0e4.js",
    "revision": "9d6f78e39e02b7287646f9bb21b3e747"
  },
  {
    "url": "assets/js/311.1dfc89cb.js",
    "revision": "3289f63e20bc7915bb56f2c840e8b98a"
  },
  {
    "url": "assets/js/312.07072049.js",
    "revision": "313331619300d60e8f1282b902a5c9dc"
  },
  {
    "url": "assets/js/313.b83f0e31.js",
    "revision": "009225f4ad9aa28b60fb94f6e39dcb4f"
  },
  {
    "url": "assets/js/314.9216f4b7.js",
    "revision": "d293e7f13b97b5569b280afa91ad92b8"
  },
  {
    "url": "assets/js/315.7ce481be.js",
    "revision": "958ed8aaa74382398c6312fad43ff5bf"
  },
  {
    "url": "assets/js/316.2c419407.js",
    "revision": "ec7b95a98847632357a31bd28e8c13f7"
  },
  {
    "url": "assets/js/317.7e6c8912.js",
    "revision": "d92e8e7d3ab4f9e7ff69003ad5d1c467"
  },
  {
    "url": "assets/js/318.a58acb58.js",
    "revision": "d96ce455c89caa036cc9e1b84fce56a5"
  },
  {
    "url": "assets/js/319.e92697c7.js",
    "revision": "37569e6894bc172cfc3df530afe39cf6"
  },
  {
    "url": "assets/js/32.7349f380.js",
    "revision": "605adf62acbb50ae319bb93449378e57"
  },
  {
    "url": "assets/js/320.ccb24e75.js",
    "revision": "b1dfc789a48c5e094558710b79e516a2"
  },
  {
    "url": "assets/js/321.04741191.js",
    "revision": "f54cccbce1105ebbe5d98e4e459ad128"
  },
  {
    "url": "assets/js/322.fe360de8.js",
    "revision": "e4b08fd56ad27e9183930946d68c98d5"
  },
  {
    "url": "assets/js/323.8de307b6.js",
    "revision": "4b32d7e164ea54f8986db059865ad083"
  },
  {
    "url": "assets/js/324.a1a23292.js",
    "revision": "06410529d9a608e6085149def6d95f16"
  },
  {
    "url": "assets/js/325.d8c1b0b6.js",
    "revision": "7d2f19be9bf578e4f10eee8747d923b2"
  },
  {
    "url": "assets/js/326.e89d2f14.js",
    "revision": "3663e6d0ad3fe02855e0a8ef838b98be"
  },
  {
    "url": "assets/js/327.843999f1.js",
    "revision": "b6287a76805475ed443cf85e78c0d8fc"
  },
  {
    "url": "assets/js/328.4d798210.js",
    "revision": "cf95ba50f35ad32e62eb434ae9933384"
  },
  {
    "url": "assets/js/329.d2c07c22.js",
    "revision": "50b2a26777f9272a6928cdef83f0e400"
  },
  {
    "url": "assets/js/33.54d354b6.js",
    "revision": "007ad91089b1864140dbb05f36917008"
  },
  {
    "url": "assets/js/330.efde3b61.js",
    "revision": "f6dd3fb797a96f6c56f0b98fe9bff885"
  },
  {
    "url": "assets/js/331.4a86645a.js",
    "revision": "9c76c066f857662ec274d72a026de3a7"
  },
  {
    "url": "assets/js/332.bacbfc58.js",
    "revision": "2e86e51bab394da0a90276bc865afd15"
  },
  {
    "url": "assets/js/333.c85852fe.js",
    "revision": "b500ed798ab63ed313dd1939343fba11"
  },
  {
    "url": "assets/js/334.928bc784.js",
    "revision": "6ac875b8a594a8eabd0e8eec893fc1ec"
  },
  {
    "url": "assets/js/335.79b57bd5.js",
    "revision": "dae8b9367effc97ee645dba9bebe3eba"
  },
  {
    "url": "assets/js/336.90e4f97f.js",
    "revision": "92c8e7c7a1167b43bf27bec78e62e36f"
  },
  {
    "url": "assets/js/337.762046a1.js",
    "revision": "3eabc067b0d60886373b2aa3df39084a"
  },
  {
    "url": "assets/js/338.8c3f357a.js",
    "revision": "1f2d3d3465a7e00b885f20174fa31492"
  },
  {
    "url": "assets/js/339.80551813.js",
    "revision": "5fc44de925580e16279d82fe5bbe8af4"
  },
  {
    "url": "assets/js/34.26da5186.js",
    "revision": "19cdfc557ffb0b56df1c04fa4dde28b3"
  },
  {
    "url": "assets/js/340.574955a4.js",
    "revision": "47778d716df651f0972bd61c754c7c4e"
  },
  {
    "url": "assets/js/341.1ca92142.js",
    "revision": "85424861090ebdbec238d01d8fecb1e9"
  },
  {
    "url": "assets/js/342.4299ba1a.js",
    "revision": "0bea44229fedc9e44aad5b0979f48d3d"
  },
  {
    "url": "assets/js/343.9c717c85.js",
    "revision": "614eeafffb14759e19fdac03cae6f9d3"
  },
  {
    "url": "assets/js/344.229329b8.js",
    "revision": "f1c5ecf519ff3209338336b8ba31f7ae"
  },
  {
    "url": "assets/js/345.e5e9b65e.js",
    "revision": "f11b8a40209acf7212282e0070e0e54f"
  },
  {
    "url": "assets/js/346.e140d446.js",
    "revision": "ae1233e010a66e9e5aaf8e145136b77b"
  },
  {
    "url": "assets/js/347.9b9281ec.js",
    "revision": "8d6d668ae146ee546fb9a32fa75fb6d0"
  },
  {
    "url": "assets/js/348.ac2d74c1.js",
    "revision": "0b37f604d3b42266c5502b115069d3cd"
  },
  {
    "url": "assets/js/349.3853f00f.js",
    "revision": "5a5d2ad4d3fb2fd92f8a9191ffa2f15a"
  },
  {
    "url": "assets/js/35.9e614638.js",
    "revision": "e31d06c7c21db03ab884ee3bfa01b433"
  },
  {
    "url": "assets/js/350.d101119c.js",
    "revision": "9fb2c954aff0da6470fbde9638bedbf5"
  },
  {
    "url": "assets/js/351.81ebd1ac.js",
    "revision": "b872047ad633746913a09c641cbbf918"
  },
  {
    "url": "assets/js/352.c4969a3a.js",
    "revision": "8c0f2ed0665bae7fe068704bf0fbf96e"
  },
  {
    "url": "assets/js/353.e013fac1.js",
    "revision": "aced59d739d78b5b3f2037ea9655af6a"
  },
  {
    "url": "assets/js/354.c6730d07.js",
    "revision": "a75dd81f85423e5721357afa2ecf9f5b"
  },
  {
    "url": "assets/js/355.2d623b4f.js",
    "revision": "8816eb280765627e521d96907a3f7440"
  },
  {
    "url": "assets/js/356.4180a537.js",
    "revision": "a6a1ccd24d7a03217d596f80f80dadb5"
  },
  {
    "url": "assets/js/357.782ca6c7.js",
    "revision": "c5528039a6e26645752f1b64e383f2f5"
  },
  {
    "url": "assets/js/358.1336a4c3.js",
    "revision": "46a877fd71b95f07f02829e24a6ba703"
  },
  {
    "url": "assets/js/359.b5eca857.js",
    "revision": "71f5f3c19224a21a025f72b0b37f6d7b"
  },
  {
    "url": "assets/js/36.e29ffa1e.js",
    "revision": "c5886c610a8f88c691e9410aa712061c"
  },
  {
    "url": "assets/js/360.864e1e6b.js",
    "revision": "93d3e215583021a1a925270f73cd5cb0"
  },
  {
    "url": "assets/js/361.24ade785.js",
    "revision": "d7eed07e77e73e04d99bf2685ea76896"
  },
  {
    "url": "assets/js/362.0f5c7804.js",
    "revision": "8e6a2d7953b8c872653e40878dedac42"
  },
  {
    "url": "assets/js/363.72de3282.js",
    "revision": "31c571db7509f7ebb469056274053b42"
  },
  {
    "url": "assets/js/364.55f8b57c.js",
    "revision": "560a670527de6e329a5b86f6aa770530"
  },
  {
    "url": "assets/js/365.8e296490.js",
    "revision": "107883f6f4b7e78eb8bd42f85d132c7d"
  },
  {
    "url": "assets/js/366.60d4a750.js",
    "revision": "28efb6f9e7a400c907e34aee6e4b92f0"
  },
  {
    "url": "assets/js/367.afb9141e.js",
    "revision": "39976c08acbcd8a041223c6f60082ad0"
  },
  {
    "url": "assets/js/368.b57d03b2.js",
    "revision": "54f6ef0402c1321e7cfc78ad7d9e7c64"
  },
  {
    "url": "assets/js/369.ffc7de18.js",
    "revision": "edebd159642ea3d502a79e89b43cfabc"
  },
  {
    "url": "assets/js/37.d4c63072.js",
    "revision": "6e96975b5016f1622547ebdd0276ec8b"
  },
  {
    "url": "assets/js/370.1042ac46.js",
    "revision": "ab1ac0128fee6cf2d2d036f35226f21c"
  },
  {
    "url": "assets/js/371.a78485c4.js",
    "revision": "ab6ea49b17601c40d6e53f124e2f6fb7"
  },
  {
    "url": "assets/js/372.08ac07e6.js",
    "revision": "6c912f98b28684721d0b40da4a57e0bf"
  },
  {
    "url": "assets/js/373.b41a517b.js",
    "revision": "842098508cd8eaecb7fed121477ded9a"
  },
  {
    "url": "assets/js/374.d8217f94.js",
    "revision": "864096889dd90595bb18113d8ab03226"
  },
  {
    "url": "assets/js/375.3c3053fa.js",
    "revision": "29882698788bb07bb682a5185dcea08d"
  },
  {
    "url": "assets/js/376.03975413.js",
    "revision": "fae250a74e84e8f15013907e5b299e02"
  },
  {
    "url": "assets/js/377.82bdbb9f.js",
    "revision": "ae081836bfcefe3094b9fe842478a9a1"
  },
  {
    "url": "assets/js/378.d0aaf5a2.js",
    "revision": "4b98fd7486bc094c8c132395bf6866bb"
  },
  {
    "url": "assets/js/379.c00b919e.js",
    "revision": "f14ee92eddcad311a7e76aa455140504"
  },
  {
    "url": "assets/js/38.5b810245.js",
    "revision": "e547c8b6a860587293c70c57c5e265c6"
  },
  {
    "url": "assets/js/380.841c36ea.js",
    "revision": "b1b2a5061a6bc17381b68c213761557a"
  },
  {
    "url": "assets/js/39.3c88fe6d.js",
    "revision": "ebeeae47158c54027f28b020c392b5e6"
  },
  {
    "url": "assets/js/4.9710fdfb.js",
    "revision": "c2ff73405a24f1dd452b8fff5c770eb8"
  },
  {
    "url": "assets/js/40.a88f2a48.js",
    "revision": "9b46a79618347288f0514e733dd0e6f0"
  },
  {
    "url": "assets/js/41.60b2b29c.js",
    "revision": "9274d8f8eb845ed5c789877a9dd24f1e"
  },
  {
    "url": "assets/js/42.9311eee8.js",
    "revision": "9ae8f58f4878b7653eb02820836f34eb"
  },
  {
    "url": "assets/js/43.dbe1112e.js",
    "revision": "4a067fff6cba7783f991b78f423fe432"
  },
  {
    "url": "assets/js/44.80a1d77a.js",
    "revision": "2db5310873089f37d2f507e858cc0cf3"
  },
  {
    "url": "assets/js/45.228731d2.js",
    "revision": "f9da327874190f02b307a1de2bf53f44"
  },
  {
    "url": "assets/js/46.488bf176.js",
    "revision": "3e1ff03fb63e28bb8a3e54b3a45dfcf2"
  },
  {
    "url": "assets/js/47.7d9f864e.js",
    "revision": "b3cacd84a7f99fac1074018b1485b84c"
  },
  {
    "url": "assets/js/48.fb2dba64.js",
    "revision": "3e2d0894cbcc82c6960d5401ec35a943"
  },
  {
    "url": "assets/js/49.edcd4641.js",
    "revision": "872f56941b69b71c5fc0b527fdf9ef48"
  },
  {
    "url": "assets/js/5.4da90d6a.js",
    "revision": "3f548760bf0b8057678074e385f5e600"
  },
  {
    "url": "assets/js/50.6b2e90c0.js",
    "revision": "a91ecb62b03e703538229830074407df"
  },
  {
    "url": "assets/js/51.c1622625.js",
    "revision": "4d3629ceaba137cc5099d7be7572973e"
  },
  {
    "url": "assets/js/52.f0d8e545.js",
    "revision": "1adb713aa9ae6c214ce4c067ea7f2972"
  },
  {
    "url": "assets/js/53.0baea493.js",
    "revision": "9d94eacd653172c4193e24a852b2efec"
  },
  {
    "url": "assets/js/54.bc5eefda.js",
    "revision": "72cbd51193caacbc068e9a37cbe21009"
  },
  {
    "url": "assets/js/55.4a734341.js",
    "revision": "751372d74248381eb6fb1c486573ee18"
  },
  {
    "url": "assets/js/56.a7629dd5.js",
    "revision": "6715cfe7985a5ec39c31a3d847e1718d"
  },
  {
    "url": "assets/js/57.058cca56.js",
    "revision": "eac009601f33906b0be83022e75b268d"
  },
  {
    "url": "assets/js/58.f60e32da.js",
    "revision": "da4148171a59c8b6154fd4b09cc7551d"
  },
  {
    "url": "assets/js/59.d9fc61c6.js",
    "revision": "75af13bd437958d1b932a27d12f9091c"
  },
  {
    "url": "assets/js/60.15225a0e.js",
    "revision": "e05fe4568cacee167a1e1281e80f3272"
  },
  {
    "url": "assets/js/61.f2b050b5.js",
    "revision": "600bd19b819df8df2c46b0bf47885fea"
  },
  {
    "url": "assets/js/62.b8b2b4cc.js",
    "revision": "84d809ac5a4452c19edbf06ffe50d6ce"
  },
  {
    "url": "assets/js/63.9d1c9312.js",
    "revision": "9e4f182fec2fdbfa422af16581210134"
  },
  {
    "url": "assets/js/64.c9ae231b.js",
    "revision": "c24f9609157ee3461e2c772d304c5b70"
  },
  {
    "url": "assets/js/65.5b01bcdc.js",
    "revision": "e44e37801439d9348365d38bb66ca299"
  },
  {
    "url": "assets/js/66.1b06ffea.js",
    "revision": "6611d719c2049dec58f03377c48afc49"
  },
  {
    "url": "assets/js/67.425f10de.js",
    "revision": "8cb973c1e96ae8fc98f5c75e48dce4ce"
  },
  {
    "url": "assets/js/68.73c53ca4.js",
    "revision": "e40b1fd55a02d54be6e21f4d9ba1cd33"
  },
  {
    "url": "assets/js/69.4432ce5a.js",
    "revision": "af33d3dff34e6396ef7b72390f2a6ae3"
  },
  {
    "url": "assets/js/70.0caa129b.js",
    "revision": "37adbe084a45eb9852de963a7dfabd55"
  },
  {
    "url": "assets/js/71.fdbfa314.js",
    "revision": "4be38c82701b76fd4345783e4de219af"
  },
  {
    "url": "assets/js/72.af2e921c.js",
    "revision": "9c35215dbbd300bd1cee547910745fdb"
  },
  {
    "url": "assets/js/73.ac1043a8.js",
    "revision": "d8dbae17409f756f2796fb1938cb505a"
  },
  {
    "url": "assets/js/74.1b6b3843.js",
    "revision": "17188b0b6993753c91e37c002e2845f4"
  },
  {
    "url": "assets/js/75.d9d319cb.js",
    "revision": "f6e7619251934054b35ea9e7c25dc4ae"
  },
  {
    "url": "assets/js/76.b0b97444.js",
    "revision": "706d510b48b61b6becce205c597ea418"
  },
  {
    "url": "assets/js/77.e52a45db.js",
    "revision": "76374cde267ff7190c24602ce25aa18e"
  },
  {
    "url": "assets/js/78.9b1073aa.js",
    "revision": "a00633b5ad90829376127b9ca1e62ffc"
  },
  {
    "url": "assets/js/79.294bb7d0.js",
    "revision": "fcb16babf537c03da9c0f619fdfc1a6c"
  },
  {
    "url": "assets/js/8.b41aa927.js",
    "revision": "714ff7cb2af18eead24e2d88152f481e"
  },
  {
    "url": "assets/js/80.3a2a8627.js",
    "revision": "3216fe70d84a715cd10498ea0c925783"
  },
  {
    "url": "assets/js/81.0b41a84a.js",
    "revision": "d6f6f0ea1e5855bfbc6817129ff7cd44"
  },
  {
    "url": "assets/js/82.3b664667.js",
    "revision": "28325deffd71e7ebd07b0a937ba24555"
  },
  {
    "url": "assets/js/83.53d4a852.js",
    "revision": "2dfd6f53289923755cc28214ac44e2b9"
  },
  {
    "url": "assets/js/84.04a7c7e2.js",
    "revision": "f7d7f8edc64eac53cf6c3855d24021a0"
  },
  {
    "url": "assets/js/85.34968ddb.js",
    "revision": "d5e18a753e41370f5a840f599f4069e3"
  },
  {
    "url": "assets/js/86.87b8d255.js",
    "revision": "87ef4dc79305338a471b56e240fda260"
  },
  {
    "url": "assets/js/87.5c2dc1ee.js",
    "revision": "31b266e8e6ec1194f3ec9886e792a3d8"
  },
  {
    "url": "assets/js/88.405643f2.js",
    "revision": "47f0e2cba79babda27d1bfa882a65024"
  },
  {
    "url": "assets/js/89.485e605c.js",
    "revision": "bea7f131b43ba596522e6bc5e964bd37"
  },
  {
    "url": "assets/js/9.e26aebf6.js",
    "revision": "26673aee3cc68bc0bdbea3148a735720"
  },
  {
    "url": "assets/js/90.6c758e03.js",
    "revision": "cb9abe44c75e730c426a3aa646c5886b"
  },
  {
    "url": "assets/js/91.3a79f01a.js",
    "revision": "36d4a62d3b127d91b66845312fe0d92b"
  },
  {
    "url": "assets/js/92.02fe9c48.js",
    "revision": "bd71fc953dad24a06f99614273a273b7"
  },
  {
    "url": "assets/js/93.e8fe8fa2.js",
    "revision": "bd9ca288d52d717e988e734eb5093ba1"
  },
  {
    "url": "assets/js/94.48254d59.js",
    "revision": "af7799381d697f34922505762f0061c9"
  },
  {
    "url": "assets/js/95.cb134c02.js",
    "revision": "55b1705d53e7ff028f0bd3359e0e0084"
  },
  {
    "url": "assets/js/96.73400144.js",
    "revision": "4e46532425ff166f24ee165fba7132db"
  },
  {
    "url": "assets/js/97.0de2e5af.js",
    "revision": "a6baf37b9b6f6d0d0c0e79258a765951"
  },
  {
    "url": "assets/js/98.5712df9d.js",
    "revision": "ea05727bf6e9d0226305cc2021f96348"
  },
  {
    "url": "assets/js/99.bf2130bc.js",
    "revision": "d79bdbe45ba7b5d03f2b97d1f68c84f1"
  },
  {
    "url": "assets/js/app.815479b6.js",
    "revision": "167f64d23861194452783ecf04b9a078"
  },
  {
    "url": "assets/js/vendors~docsearch.c334591d.js",
    "revision": "ac82865e4087e15946761d51f43197ed"
  },
  {
    "url": "index.html",
    "revision": "0954e4d2c5c8cd7f7dd6ee10627dc49d"
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
