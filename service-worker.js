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
    "revision": "83a5795cb1d9d570f082fcb9f52be95d"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "73f3f049647fabceee7dec2ba158394f"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "98538984e398d2e7bd8bc86cbd1a6c8c"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "b0e42c6a1e3ca7d62f219944fec79f1e"
  },
  {
    "url": "2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "7538cdd5d93ef8af53133dc6a101aacc"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "ff882103a1b978fed6710c116502a6bc"
  },
  {
    "url": "2.0/b2b-marketplace/buying-leads.html",
    "revision": "e97ff81428ab34b738f366c6a7b55c75"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "9321c463a59621ad338bcc0520639773"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "9325f734674dfb24f266c7f4df5607fe"
  },
  {
    "url": "2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "3bcf5d5a7aba934a8b9790ec696f0aae"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "01a0eed8a2bf3c886555ac97776a8ae5"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "84e46c1462087ea30599132f1cd52dc1"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "226f140c2431a581b158e99ef6f58a0d"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "9e89c5e068f9ea7cc7e94a804f5297a0"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "91c2065ba8a1fba960ad2b74c67b64b4"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "aed877b2e0b12a5fb4d8bd22277c62ef"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "d893e87c25ad0b5b3010d14ead580fb1"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "25427f9e43bac335a584a2ef514dc365"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "d3dccc13a037a3dbc5cca45f77d25a55"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "fed4859f78f9cd66f79d3161323e516d"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "561ba6a9c6c721646d8d489b0df07f09"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "8210ff4e3efea1e927410a2efc3a3c30"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "f3560973330caddea356f8a3be46db98"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "a563c65a324252fe8d6e5e513cc13767"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "87a3991d1308463e35e9528419fc5947"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "9094b094f6110fb8e2fb74c75ade49bd"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "aecb964fa82d03a93a0167d3e2301f1e"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "6e275636c38d1dcbacbe8193a213f049"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "9f25a86fe6600980d7efc3c970bcf439"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "0ff728a1f96778365496fc59822f966d"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "679d72e01eda11e04dcb0373193cd5ce"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "2a134464cd0123d86fdc73edca9c6fcc"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "01d4c223fa086124344943b9368d9779"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "65ceaa0fa83a24cfda09a9b063b55632"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "e87baae2eec652bf010723897ab9f724"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "ba7876571231c6ab5a6bc5815f3a11c0"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "638a8a29288d94df751893df4e17a5b1"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "e45359021c5e8742d1268811249d4b6e"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "22fb844ea0491cdd947489fbc7b94bb5"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "00e24dd939529897eb33767508a015d0"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "629d964fe236b702c6382ec6f6681d6c"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "6dd748ef6ff6b3619c9162a1737cb74f"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "aeb509b013aaf5e3f86ecfd3299daa5e"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "b72638f33d4a781d2a7ee3a6f362db02"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "b9918fbc398e02b54b00860c5eecc44a"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "50bce7f3ea3630c0da76f3269c22d195"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "0eb2bf25606f52db46d1a3cf2971ffaf"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "b0dc3d1c02e5ac8e6f15e58f26fb4476"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "53e3eab2c6c2f7665e04e3c6cc2f05c6"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "709c4c1dadadcc5136e7e494b6d22855"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "5e0f7e221451db242330087afc81ce3c"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "ed5c01c521d59d77e6b106e68ad505c2"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "432cb2c908a6b72ddfca4eb4e0105283"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "c6f35a4e3d37db236294b3fb54420707"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "8568c5a3b856bef2b1cba6aef402db59"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "74ad67c7051f7b42fca9c7cd09f09a88"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "b696161b2ac1f316ddaae3f4ad1ead82"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "a7cc21e2140c1d9a11cdf669a8c13679"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "77202c7beb04bc39bec8fabe3b487bbc"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "182d4c3057fd4d48d7014b18cfa89541"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "06aac981fba3c995dab6e4a7e5072d7a"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "5e9069420a012ab1928474d9afbd1270"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "1e4cfa05198b05acddfc531fd51a32ce"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "074fa84b62d21cc6e44eb898a1132902"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "0ca74e479044c1ac209c720eb5282822"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "bf7fae82c8ef318f233cf70e4b9401c3"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "f14ac87c754dcf06f95de28d8a0bab64"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "ac89f750d70d876d07cc0d69c15faee3"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "5dfeb9066b6d85ec4a2cfcab55471c13"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "50eb7fbde089b6d588f35cbc8e53f83b"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "797ac8b6cd290e392174a0aad8282c0a"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "6df177e927005e981f2c861c17d841b2"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "579ff19d941a5706331c81850c5d96eb"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "9f7dba4edffce566999de1adb95346be"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "455f6082c7486fb723ed145cfedebc06"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "f8efc7f6fdfadb15c893df1c729a35ff"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "7073c4d895a18c7b4150dd2f6625f7da"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "f9e2fb7ba0d8366da2d893edf3ba059f"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "a71758febad227065c574415fd70a5cb"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "3cc877dfec9279f1c9e558033ff52229"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "0ed9587d44436f34766f46cce2d58d6d"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "191e9f8b3e2293ff48a4ca63e11a502b"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "7df6b820c7d9b1a25bb73ce048aad771"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "c95428d241416a37a2eb1b29c050aee8"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "91f89d78e6ec829099e84bca89dc7c86"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "846a3efb790cb510e5ecd4363217742e"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "a1b6de40f1521187085d154a441a488e"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "0fe2d9ccd62c7fdec626f1eca5757dfd"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "2a4437ffa735ad7a20f2d3a941f8864d"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "c8f3664093bd96102b70553a8f714171"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "aa860bcf73219caeda2123f5b29e5c3d"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "718e3d4749ccc47b292c2552bd5386a5"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "a0c5cdc7634298b98f51a85ea88e2c45"
  },
  {
    "url": "2.1.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "de4f80d16f30bc2fe6c56fec3806a49a"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "35933e88613f433df1440f4fbc5c7376"
  },
  {
    "url": "2.1.0/b2b-marketplace/buying-leads.html",
    "revision": "566c2abb790b19b4bebe1981d153c305"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "ac2c837b2cdea6ca689bf04544953d33"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "da670c81077d18196ab2970588991cd0"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier-microsite.html",
    "revision": "09c1430e403571646799cd3d3bb35ba9"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "1134ad8f7dd740d0c71c2e3ede9a36f2"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "30052b3f9b31e3cd1e333738cb9b2879"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "7773990b07fc1deb10ea043cbe108265"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "e975db39a5ddd190f577ce101798f2b4"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "391c79aae224e03813e64b9b7901178d"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "fca3324f67bf69b7d56fce97f8098b79"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "fc668781e3a34f34c7847b3a38f08145"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "b17f8782e6a25166dc60e81d671e0e1c"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "6a92c245f72833cef6ea5f9047587910"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "0470af29c2456ab61280f46392c1d195"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "bbfff7ef582b0b838f4ade400691efa3"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "c458be8809ffce949d24fab39000176f"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "56309c90295f0fec847507ce4ef9ccad"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "72e460c00941c34b1af3e6b74e381c81"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "acbdcaaa1e6dd11c455b653a906c0eb4"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "7c21bc0602553ccd0d92566d621cb0cb"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "12dc1ab771ee71745d6bce140e8ed053"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "976c3efacaf710c27abd3330818c7eb7"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "6e2390f30f7b63db2c71c3cbb8c2f646"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "849d4f7db2037880a86753991210b4ea"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "c5dd7ff0713e2564b5860e3512cd2965"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "06ae1c15cd3d8cb847ad1afa3493ff84"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "7e20f4cc09a4c63b5ee54087b9582d7c"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "405389fc81b4f6404fd78376602ee3dc"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "9e98aba97d335fff3e46de132ebdc69a"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "7d342b0d01200b2f2fbba375797edd5d"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "adb29407baf840a1c137a7f94fb0c37f"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "88b89e60a5c0305353667a8439e7095a"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "27df2865ab7333857cc11b3f34b4d912"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "53e4b66fe9ef501f5ed7a5e0eb2921a9"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "b9a25fb7a2d749643dc40bea7f548fc4"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "2de803ee11e7578dad5f063be11cb140"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "d767950f23a833814a9f3015d77b1d67"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "461dc996c7d25e98c648d8dc505d741b"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "f24e48326eb9c6e66bc18f15253bbb9f"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "94a60708a878c8fee3380a4b8f220f90"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "5656e06ee8664689ad33960d625638c6"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "737b30936a1a2cd518c5800bb6e1fc45"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "79a88c086e9c19f1849e29b0ad6b31c8"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "cbda291be0afa424b8959a07403d6f99"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "afa19d13967369954d087169bff708c7"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "ec124b42f7053663067dae3bd0f098c0"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "1d9ee5b65685a509994425d915767675"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "594145a330c1b4147af829366e22fc6e"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "88f7bafd455f94e14cac23098a9ceefb"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "0112c3392ef8178c67356ed44e993caa"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "ffe74ab2a0a487d6fc4a3be35c8e28df"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "9fbeef74d9a84e67eccce0df371e08e9"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "0863e6cb12cb6ab3ad89cd564e87d12c"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "045292884c09cd8534bf0bfcc4092f1f"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "4d14c262c61e5b3ed1462a8ec402bae5"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "8ae158c6accfab22b4436a9eb6925d84"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "7aa4fff43f999eda828511b8a5c207ed"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "ca93713c5ab014069d10eddc892a57ce"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "73bde8ffe58f52062b31537d1364d9ee"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "32d42f697af0b69816a653a2186cdab0"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "56356f2ac37b34f1bed6788d765cfcc3"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "0a653aba0eeb4565dc784f1317fb4cbc"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "3c1e0e665e42dc95a49842d7f0855dc8"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "0bdee36213fd9fa2ccfec0848487dbf1"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "84f3846644ad8fef8279f35409ceee8e"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "dd8757e034cdb014cd9c4914dac05448"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "96cbd02cceeea3ed137967a2da9b1e04"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "0b785797206985777fe4169aa9684535"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "8aa64129289287ecc563ddde6770e857"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "be666efdcd2737c805ea6fae485cd677"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "3a56a64ad94d5a0f24342b2be7a7228f"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "f50445a369b610d7759c8dd471bb2750"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "550d05c04d2b09b0cf78bac8bf1b4e86"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "965bb2121e3c4ce05621384563c7ba66"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "0b02db09703f4bf737c4aa21f026c171"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "4eded07270f78cfb59f0ab707d082497"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "e00f45d8e4f72b77dfdd95bdbf339d9b"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "43ced86a347d5647c863cc3c360a74d9"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "8af98a68f6c1595ba7a359765d29704e"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "0b713c98e52e53578d0b7194982393d2"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "eb909c1caae4f174a353ea03966a3fd5"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "3c2c8bc1667e093de9f8a47191f3d1d0"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "5e15a301b6e53cce49588251034602fa"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "dc90d64d3498b576e175fd5adc6fe215"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "594d615c81dccff0c016feade1943167"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "2c74fc0d79c9381d393a8c03fbc5711a"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "1ce85757959def1ad87dd8b29a1e6bf7"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "ac92b79a80e39a904b7d451ee5244d21"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "189090df7174c6d96c30d59721bf8169"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "8cb98fff6be5124511eb15f8d96b40a0"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "d5ba28b8feb3168602fd585d794346f8"
  },
  {
    "url": "2.2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "c285f86d9fd18dfa0bdc51ca5a00b9b8"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "2678a310cf5378670a7b35659227d2a0"
  },
  {
    "url": "2.2.0/b2b-marketplace/buying-leads.html",
    "revision": "4e22b18e74f418bb3d9a8f81fe040236"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "9b732f006ec1bca2466a2baa2396078b"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "c7e1f79c97b4bcb1f6ee6ab77750d347"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "d63ae53c04ba8bc60ae7446cbe9bfbb3"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "3e63acddefa6c17d077330e19f2c782f"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "6d5eaa117a5b6d969cb5f194690e24b3"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "89eb7f2b6b1829f9de19edea978a6ddf"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "44d4b4eaa45be8e8fdbb14b7edbcb473"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "82788fff89d86d509e49b9e9db8cd361"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "e792f13a5bd644d95cca5dfc98483396"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "45f084f798ae5d718423d5c5aab34311"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "4aab6529a5302a2754ffaac2e135af77"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "75ff89731c8a8621832fca28b6d7da36"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "6e6f3a9f449a1fad9bb13ac4768b6223"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "baf3b9add73e5d823903f1f56e661464"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "e29829011c853e241dbc044ece905d35"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "fc4b76ee1867ac1551e2413c3366bb30"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "154685e1f9ac65a852b52a8957b480e4"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "d2d0ed610775b7df78efa7a2f10cc151"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "ae81beecee1817884de18233e085e834"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "3dd9085fb9d84999965fc64262e63524"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "96c42701f528f6cd23b68e1133058db1"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "766f263cc4cb950f537ff1290981b315"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "9977d085aca7a2fce50e4a5b1a6b030f"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "05d08fecb5bfae908edc17f4ce5ef9bb"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "0080c2c51f703c5443ab62abb6dc1d7c"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "09631f798f463bd02172ed4e0ecd5525"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "4ba667b645c32b0feb1b90be545c7a74"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "7a7fb09c8515380f7ae3e57d34083152"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "033e7704f8a07259bc51754fe0460b13"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "3af4cd715b5509fdf70ca5d4724fdaf5"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "f6611b8c26ef5044b0cfb2b2b4477c77"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "f482943e9ae64a61fa283e86e84ad3d4"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "2960cdec9100e4fd8a757675090af4b2"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "30fe9495815d9b79e56754c706d06a51"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "8facac1afc728adf90ac5d985a049d38"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "441f0e697d23a6a06dbf72283b00b683"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "4fd716c799975df4afd59a88f2e23ede"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "dcd01b9c49fa5639bf30309008d8277a"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "34460f84e9694926fb1b73f1e96f7200"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "5d878e291cde134ca19ee13a9695ad83"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "2e831fd1fc8123fc4906cc1378a28cce"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "0a75334536ba70a8fd84c175aa9a43a2"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "fecd88896568dac3f7c41ca5024773f0"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "809ec8d15063346ebd799fcb57b37011"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "898700a9a9f15ec7c71bdc2ac2e8fff2"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "7a1c8fa7bf6d226b15b06fcb9d62033d"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "13869e89ec0f6114053cdef04aecf694"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "03a5a39cbe476a0668ac3cef1037e2f0"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "1aedd74b5d16a2eee354d7690d130c46"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "a44a1012128d93dfe9aac4e60ca3f2c5"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "9abc683cbd008782b663f19ebac5f690"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "7e73f47dc2ac4a0618fa95d5b3d2a02e"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "e9b43099fe3f0df109614f731f1ec00d"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "b864219b1075f8ff434a2aaaa4d8e25c"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "0a0fd7f160700b04a17d823ad7bf2c84"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "7085ea20de884b03161b60e6431e0ebf"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "906d0d5310518735e586aeaa3b1d4654"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "e1042211cc40e823d552a239f1d1bb3b"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "a731ac340318d0fa4a61f0d0a15df33d"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "6f8e3304dc459a2be9f8ddb006fe3134"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "fd9212eb7a2982706aea193b68a7571b"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "e80d5da6ff9694aca7bb4aa4719a753d"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "d87a4a0f2f5d72f69687b5f2db755ab8"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "c5cb7b0bdae35f2b22af876874cea539"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "82b95e874806c96a66eb2c36291925da"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "8191ca0f5c509ad43aba6292eba472a5"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "b3fee42241d865ed3f8110e591a72d89"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "5a87486dae91bc4c08cc8e2d9fb2c13b"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "0f54b15385d2d016c7cfbe54823c6217"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "44464710ca42d33f8142055823a858fa"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "ddd76525b33a93477f3f47d69f64b62f"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "271e90b103d5e5ea9489cd111d878888"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "8b0e355cac24317576dc0119c1a76db8"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "d4eb99c94ab38de37b72ddf5633cd133"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "d8cc46e08c322cc4adade20f6b3aa4e3"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "804aeb2026a425033db0b62f2deff029"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "504b311f630ee5aed6ded9210f14d106"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "d03ee5d967e4071e6fcae0b0001c8b0a"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "cb00c1569fdd023cfbab8473802127d1"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "ab17369f9ea02702f1da9231718ed535"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "b4502810e62597e515dcd9ca377c733e"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "2e855c39c27c751242cd97a2598e2350"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "90219e0a5c89b60e29791350e147702f"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "a8e002a191acb8624e9b504ebf9d9250"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "fb91d2c3b979e840c14bcbd13a1ac950"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "b2d44ab4f32f4ebe802ae4187a21b4f6"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "4390169b514232f12622e55e6e669a11"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "0b033daabb42fd2d4506b18ade65e996"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "f9cf2068618f6da731d100c3e9ea01f0"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "d07b0b6203bfc743b839f8b859fc484c"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "7f7c9130b1c20350a72a815e29962f3f"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "6d9c3824c35af0507c040ab87a6f6d6d"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "ef16cadf4266c9eb6c636ab002e4bf58"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "da52a9e1bb2001d2c8f982dbf7be28fa"
  },
  {
    "url": "2.3.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "888f7f64f70f14d4de549faff1b96e67"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "99c1812ae26da54c5a29db52aae293cb"
  },
  {
    "url": "2.3.0/b2b-marketplace/buying-leads.html",
    "revision": "d0785b2e5f3d43dd9ad9f8a81e95a2e5"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "48ee6e700752eaa88811fd04c269a1ad"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "2cfbcbf874c16c4a9d4cd1c2006c19c6"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier-microsite.html",
    "revision": "7cbac280404ee18d7aa02960d77b5c05"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "d6c1c14a476a68c73f6090da4caf81b5"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "8e17ca12aff620fe2304c7dd8ebf9fd0"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "ebcc400c0f4b76c52aa88abe509a327d"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "9af843b4d180dd28b08facd64532c018"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "59f17092597a3d13308a31168cdd74d8"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "a7b46a03a11620c19279307f7d31cd08"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "83193569acb484488eaab25dd28bf784"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "0c8bf5e0f83d7118c35909510741a327"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "4d3c0b1286deff446a3ca35605aadfaa"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "b5bdad86b7c62ee2247bbb64b2e14d82"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "b8732f607abc7b2de2e19d67fb3d31fc"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "290722d71e3baaa7059d8167de49a166"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "f966a5da984d03bb9957fef44d7a8b16"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "537af4ece6609f8e6d0e01eb77e4d4f6"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "e8af567307f9c2ae8edcca39097cb78d"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "cd6052e4c7d878fec1edefaee0285175"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "b64e3b577d073fbcd34f58db053eac87"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "7f6dee7ff625d704b1494b2b86dce10c"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "4083ccc4c960b7614811441af3e0ac58"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "79bd974d36c5ce9e78e3fce0b1c416a7"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "747c016f2a9dcf95bb504cc7414538a9"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "a923c116276d10ff45a4eae0a9eecc7b"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "1faa69c5765f75e71832b2027a931575"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "8bb37989d3aa13dd2576fa81c0ee6940"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "ab1d0c54f9dfef7a34e054fb40a13d7b"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "3a22a50fe11307b4f4b7422125955312"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "0f87e81cb27c9f3589d4e8d232137c75"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "1813c80f67c9b054a47c6425cfdbd33c"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "09be623c068c0462f317b4bb00de2c04"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "1355b0f045b58bedbbc8871ab9161a28"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "a12f991d4a5da624b1f322af3a72fd80"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "7051fcdef5aee339c1d2054b11b7032f"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "1049b2cbd2b5f788d2c8661eac03c4af"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "6271c0b66f2cec34bb276bf2cf1cfde6"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "10fb66c79508e8ab859ab27490e71a77"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "1435170cade3bd330a1eea96ff2969c4"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "fde66502dcb07a72baa88a9c05978273"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "53614bdc70dfad9a6ff3aafc48e6fa73"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "8f522ffb2e0f86dadc14f2b887083fd1"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "b80c83108bc2287ee55c6d8a664a25a7"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "45e58d8b1981d3777408fe0287dba5fb"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "2493df076c55a1aa816bc3f577a51d14"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "9847bcb3c0d2fdeac10cf4281fcc2b07"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "508ec6bf49f145fcf62d4e52fc032126"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "54430c4b3345d27c357734b968e9291a"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "c9cd1fbe222a0508693945f1fe104a82"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "3b1fd27f621de366396171ae6bca3388"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "5cc3416259d52f291c9207da30f5570f"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "eee115752a7a83876f0fa3e0c93c3d74"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "88fd56b0845a69a07dc397b230cdfabd"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "394b1ff0a720ae6b93abc87c2f9835a9"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "233e85b2a1f0ac085743b9a6f11e411e"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "3b192e01d17a09f342eb46d10d329d35"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "e931bec5542ccdf74241bb1742c9ad2d"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "2e3d7454524831cc0bd497ce86fe7513"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "d81371870fc279c21619f77d6c737e67"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "6dac62d10f61dfb247aa2a64b18ef7ea"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "a30a826f1350c98b2c57f1ad4b5246d2"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "783890c2e0b5c57dad934548f69a62da"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "9548acebccd47dda43714dba8558a351"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "ffef4f965b46793537b6a52c605c2839"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "ee0ad1650d143d9dcee765cf46e751fa"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "2b23d6524b367c6a28d77717c34071f1"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "0de1b315cc6c84cf653faecb65a3e984"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "decc43719c4615356d9b43a4e9929828"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "f2b0ec8c4bb350f4f84fefc9bdbda7c7"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "89de0a4495f625a75c4eae9dabcd5e37"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "e79b86625db01a5970341990aed96976"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "33142b2f2028697378b1f5ae6fe52e03"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "23a0889ccb8eee828c3a5333528033d1"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "bcf2c337f0d360723cd83afdb22defa8"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "e8c68771a817ef81c9e4a20743e87c16"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "a94eaeb7bbf0554e1dabf408a17db2ea"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "f7f968808670f1f28fca07edf441a9bf"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "94f4477ff21ff91ab627a2dc75cf208f"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "5a41579a79929f883c7218e8e2eb3dc6"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "5f6ba57c5a254331dd284f162d6f9945"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "620e3bc74bafb5ebbce19b8502a704b4"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "12fcb7496faaa4e6ac85df5b2843bec3"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "bbdabce081a55abee3da638a5e38774e"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "64d8a6f39da014de31bbf0882a474787"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "4e70a361615285cda2059aaaa0912436"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "dbd614d9a08bef5ee36993a10fa3ced8"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "f8d13b521912ac0181e26b491a10a20d"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "b7eaa7e74b90395b741ace6ba19a5d21"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "b49107cc757cfd5c52e93e1756114d62"
  },
  {
    "url": "404.html",
    "revision": "1597610dc01c7c8371219fc835e760b1"
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
    "url": "assets/img/1-seller-dashbord.2961c05e.png",
    "revision": "2961c05ead3295ebe68b3166312d8e9c"
  },
  {
    "url": "assets/img/1-seller-payment-request-to-admin.abfbdf27.png",
    "revision": "abfbdf27cff6d5a73fb4c2c96f6c6906"
  },
  {
    "url": "assets/img/1-seller-profile-page.eaa3cf69.png",
    "revision": "eaa3cf6921c95e4b83efa56bfe93f16f"
  },
  {
    "url": "assets/img/1-super-login.d3c8c157.png",
    "revision": "d3c8c15721e98d2ca817f89023a0593d"
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
    "url": "assets/img/2-buying-leads.8d9e21e5.png",
    "revision": "8d9e21e569011c3579cbaf5189067a7f"
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
    "url": "assets/img/2-super-dashboard.d91b3a81.png",
    "revision": "d91b3a81ae12582126709895b66a1057"
  },
  {
    "url": "assets/img/2-write-a-review.0a62119d.png",
    "revision": "0a62119d8c5a2ee5d056e160759ff100"
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
    "url": "assets/img/3-message-box.fe8f775c.png",
    "revision": "fe8f775ce1d1df9fdf139599eb3952ee"
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
    "url": "assets/img/3-review-msg.93e4f25a.png",
    "revision": "93e4f25a007301f65db4d9c251ee539f"
  },
  {
    "url": "assets/img/3-super-create-tenant.f662b40f.png",
    "revision": "f662b40f10c73b59d905b793d8041d23"
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
    "url": "assets/img/4-message-communication.2ad412f4.png",
    "revision": "2ad412f4a840e53e4f4a0a62adf46aef"
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
    "url": "assets/img/4-review-unapproved-state.82a94362.png",
    "revision": "82a94362e60bca2fea2b3f4795421c32"
  },
  {
    "url": "assets/img/4-Super-tenant-Insights.bdd69873.png",
    "revision": "bdd698736b2573973d6e005b76b19a9d"
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
    "url": "assets/img/5-select-action.487dcf74.png",
    "revision": "487dcf74bbbd2a69c79d926a6aa05733"
  },
  {
    "url": "assets/img/5-seller-dashboard-product-review.b1747eb4.png",
    "revision": "b1747eb4ce62f4d615279119ea9dc6d3"
  },
  {
    "url": "assets/img/5-send-quote.28b779a0.png",
    "revision": "28b779a06f42a3fa3037bcadcb252704"
  },
  {
    "url": "assets/img/5-super-edit-tenant.19413be0.png",
    "revision": "19413be07791e590f6f8b13827b65a4b"
  },
  {
    "url": "assets/img/5-supplier-sign-in.14727708.png",
    "revision": "14727708fdc18d6962becee72161cf43"
  },
  {
    "url": "assets/img/6-approved.5bb664b3.png",
    "revision": "5bb664b353389c3130f84ef1e227f503"
  },
  {
    "url": "assets/img/6-product-info.47242d57.png",
    "revision": "47242d57cd156a0edd1419e5c377da85"
  },
  {
    "url": "assets/img/6-rfq.56e168b8.png",
    "revision": "56e168b8e19977461ceb20d91e24bd95"
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
    "url": "assets/img/6-super-delete-tenant.d91b3a81.png",
    "revision": "d91b3a81ae12582126709895b66a1057"
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
    "url": "assets/img/7-store-frontend.20b45665.png",
    "revision": "20b45665876ee4735da283d47837fc14"
  },
  {
    "url": "assets/img/7-super-customer-list.af1b595e.png",
    "revision": "af1b595e220dcd1f1eb059f5e966dc09"
  },
  {
    "url": "assets/img/7-supplier-review.7906bf68.png",
    "revision": "7906bf68a81bd0669dadb2bb081f4ff0"
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
    "url": "assets/img/8-review-at-frontend.a7af756e.png",
    "revision": "a7af756ef414cc5ab5d12f113fbc8bd0"
  },
  {
    "url": "assets/img/8-super-product-list.36db1aea.png",
    "revision": "36db1aea8f21708e408a1a3f476d570c"
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
    "url": "assets/img/9-super-order-list.8ae4947a.png",
    "revision": "8ae4947ab9f0124467a1d2f5bc2c435e"
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
    "url": "assets/js/1.d5b87a6f.js",
    "revision": "45aec1e0021d3991c08f0a621469cc24"
  },
  {
    "url": "assets/js/10.d8abdeb9.js",
    "revision": "52697fcc6eedc5bd8c1ab57f8a0775f7"
  },
  {
    "url": "assets/js/100.f17dd3b6.js",
    "revision": "d8b6b8b8c47729bf94a1f0e337b1bd3f"
  },
  {
    "url": "assets/js/101.8c7a0691.js",
    "revision": "47898640f0759cc4a3da4677dab2464e"
  },
  {
    "url": "assets/js/102.b7a1ec1d.js",
    "revision": "4e92bbb283b3bfb6e232cefdb3486985"
  },
  {
    "url": "assets/js/103.7071287c.js",
    "revision": "d1b332177e77259f5141345a188a27ba"
  },
  {
    "url": "assets/js/104.13a9e68e.js",
    "revision": "468d1d242d3c5626cc2eba75e3721a15"
  },
  {
    "url": "assets/js/105.c7e245ef.js",
    "revision": "e3835ba342073d5585d60eb5c06d8d1f"
  },
  {
    "url": "assets/js/106.f924f9e4.js",
    "revision": "5cc0880b3c79918a65ee2f1cbf8bcdce"
  },
  {
    "url": "assets/js/107.6b8d52af.js",
    "revision": "1a1cc6d4225879395b5c256fe3296165"
  },
  {
    "url": "assets/js/108.6c0a35e2.js",
    "revision": "a1e130d39261054655d19c003283c0c3"
  },
  {
    "url": "assets/js/109.95dedf94.js",
    "revision": "6974444e888ebda223628f9aabb7fc29"
  },
  {
    "url": "assets/js/11.0519f89f.js",
    "revision": "fad0fb56f8d0cf85a67058b36041af97"
  },
  {
    "url": "assets/js/110.dd6db59e.js",
    "revision": "8f15d710cedde2623eaa9bdc853659bf"
  },
  {
    "url": "assets/js/111.6e8b9f5b.js",
    "revision": "6a99f4db6a9ec22e26e5f398156a5dca"
  },
  {
    "url": "assets/js/112.b7f85cb5.js",
    "revision": "106289e67b5cece6f8261f6a0c817bd0"
  },
  {
    "url": "assets/js/113.730d6b33.js",
    "revision": "0a803e9dd700723ebe0260a96f9c090f"
  },
  {
    "url": "assets/js/114.742e7799.js",
    "revision": "29a421c2eed071f29fad616d62fd9eaa"
  },
  {
    "url": "assets/js/115.e1dfcf2c.js",
    "revision": "421220128fba94fe98dd1eaa39ad7ec5"
  },
  {
    "url": "assets/js/116.725ffc54.js",
    "revision": "4ebf0c369ec0c8edc5014dc49d72409e"
  },
  {
    "url": "assets/js/117.9a17ee33.js",
    "revision": "fe2e1cb670388142dbdf831995020345"
  },
  {
    "url": "assets/js/118.5f424c67.js",
    "revision": "0df21f2b8a9d997383a158ff9e13ee60"
  },
  {
    "url": "assets/js/119.b9864e02.js",
    "revision": "5c9af356013640c13ccf6c5f805973f4"
  },
  {
    "url": "assets/js/12.c641deb2.js",
    "revision": "0bc0fd13e9fc858139fd9a2a26e1aebe"
  },
  {
    "url": "assets/js/120.38a0d327.js",
    "revision": "50c2978157dc2dc5f3119281467bd37c"
  },
  {
    "url": "assets/js/121.20006bdc.js",
    "revision": "c63fc01824ab66eb04abc157ca4fa0c0"
  },
  {
    "url": "assets/js/122.ea5b8c24.js",
    "revision": "f8243919afdd7eb89170b2bfe5835b90"
  },
  {
    "url": "assets/js/123.b3c74e43.js",
    "revision": "440c29eff1b3b3d34d29e368cb4c1a0b"
  },
  {
    "url": "assets/js/124.fa4f7618.js",
    "revision": "b03bd6ac1fe9d1db7657365f308ad078"
  },
  {
    "url": "assets/js/125.69b0eef7.js",
    "revision": "fd8fb99c267b9e8f5e47f6fe6bf9f1c3"
  },
  {
    "url": "assets/js/126.e25070ed.js",
    "revision": "d9f243aca676824ec3abb32e078c5c13"
  },
  {
    "url": "assets/js/127.3d8cecbe.js",
    "revision": "d47b973fe66cc10b43c6e4f5f9fee3e4"
  },
  {
    "url": "assets/js/128.1f14bb41.js",
    "revision": "fa2d21ea88468c78468d2fe52a45a1ce"
  },
  {
    "url": "assets/js/129.f95a59c2.js",
    "revision": "805537ac01d7bb38cdeca36651e990e3"
  },
  {
    "url": "assets/js/13.894c40d0.js",
    "revision": "50ec6b19ba7b82263272a6256da901c6"
  },
  {
    "url": "assets/js/130.0253bc59.js",
    "revision": "7c3971bd9e54ab949ebd0cffca3370a6"
  },
  {
    "url": "assets/js/131.1c357e98.js",
    "revision": "20bb318588651db1b83e9a57807c5ba1"
  },
  {
    "url": "assets/js/132.d9db9ca3.js",
    "revision": "4339d08403c8abc160ec264a0ac7d9a5"
  },
  {
    "url": "assets/js/133.90f93303.js",
    "revision": "83bbacf6672d2949564a3cabb17144cb"
  },
  {
    "url": "assets/js/134.c25e824a.js",
    "revision": "875f66dac52f1d72030399806763dc8a"
  },
  {
    "url": "assets/js/135.50037917.js",
    "revision": "f02973d5bbbcac65e80cfeb56355f01e"
  },
  {
    "url": "assets/js/136.116ab2b7.js",
    "revision": "14bd76815ca8fe8b6559984182c459b1"
  },
  {
    "url": "assets/js/137.dbfa95f6.js",
    "revision": "2897c020de29f86ac2e0a1c78692fab8"
  },
  {
    "url": "assets/js/138.d0e17189.js",
    "revision": "d75a25a6a5d8f1e923bcea4be7e4646e"
  },
  {
    "url": "assets/js/139.fb86dbe3.js",
    "revision": "881530eee1c36ed9b7979e5e6edbd542"
  },
  {
    "url": "assets/js/14.b1cd243a.js",
    "revision": "70c20c6ee8e1c1004f8c02c534917662"
  },
  {
    "url": "assets/js/140.2a2849e7.js",
    "revision": "a16ce8d57d16b5a7b73c676e4f845db3"
  },
  {
    "url": "assets/js/141.801e6a36.js",
    "revision": "344833cd8f7d1f07ff145bf98f8456c3"
  },
  {
    "url": "assets/js/142.505144ac.js",
    "revision": "825a54c396bbc21bc16acacc804f99d9"
  },
  {
    "url": "assets/js/143.a23a2d88.js",
    "revision": "3561103c4858b09f5066f8687783f1c5"
  },
  {
    "url": "assets/js/144.6eba2ad7.js",
    "revision": "403bde3efcd786b5d5e5bf5996e08305"
  },
  {
    "url": "assets/js/145.85ad195d.js",
    "revision": "39272365261ad9976285b7ba4b928dc4"
  },
  {
    "url": "assets/js/146.a601ba2d.js",
    "revision": "96084dc3ef7bf516e76bea32cc4f714c"
  },
  {
    "url": "assets/js/147.f1bd13d2.js",
    "revision": "0325db6a3d9ab6e24d5f0da80625f502"
  },
  {
    "url": "assets/js/148.b1906663.js",
    "revision": "c44836bbf925b79a4b0a323b31d1f303"
  },
  {
    "url": "assets/js/149.72004bee.js",
    "revision": "aad123ef0e5b531b80edef118b8d572f"
  },
  {
    "url": "assets/js/15.a445713d.js",
    "revision": "d0af6822f0fcdf81045fb6980b912dd1"
  },
  {
    "url": "assets/js/150.62b5c070.js",
    "revision": "c46d85bd15b392a1adc9da77d9d2e09a"
  },
  {
    "url": "assets/js/151.e720ec07.js",
    "revision": "8c769add87f1e91dda57c30e819da7ce"
  },
  {
    "url": "assets/js/152.8e02dc49.js",
    "revision": "5c407c11ce94e10f9a01e83bcca94d6d"
  },
  {
    "url": "assets/js/153.b2101c81.js",
    "revision": "b94a4b632a1fc519c4a8793723da88a3"
  },
  {
    "url": "assets/js/154.cfa8dc5b.js",
    "revision": "80bdbceadd3e7af0f06c38814489606b"
  },
  {
    "url": "assets/js/155.9fa7fa0b.js",
    "revision": "e4f97d03905bf7755bebf1d032315c15"
  },
  {
    "url": "assets/js/156.98f8b6f4.js",
    "revision": "2d6551796a00df6326cac6f28c807fea"
  },
  {
    "url": "assets/js/157.1540f493.js",
    "revision": "8a5fa93c2f07004e0fd07d23cb87afc5"
  },
  {
    "url": "assets/js/158.7c7f7b80.js",
    "revision": "99ed14b1c8944729a1933a67c31b2e27"
  },
  {
    "url": "assets/js/159.10b344a4.js",
    "revision": "9db35133379669d0a3a1c08d2c0af8b9"
  },
  {
    "url": "assets/js/16.133fa5d0.js",
    "revision": "4fbbe19a6fb09b5206dab3c8f466a0f5"
  },
  {
    "url": "assets/js/160.65ee445b.js",
    "revision": "eb10cad82cc3b06c370c0bed78610250"
  },
  {
    "url": "assets/js/161.fa0f348b.js",
    "revision": "6a161e3d8f05f3eb435c3fc904d25323"
  },
  {
    "url": "assets/js/162.9a22ff7d.js",
    "revision": "72f37fde7602acbf07f04d65fb3b2e6e"
  },
  {
    "url": "assets/js/163.2d740a5d.js",
    "revision": "c0a02294c9f001181eb32f2865161a4b"
  },
  {
    "url": "assets/js/164.3e83dc30.js",
    "revision": "331d60f11381f41042f3b6c45e993ccf"
  },
  {
    "url": "assets/js/165.d4827190.js",
    "revision": "ab7416a493c575d197b1786da54302a5"
  },
  {
    "url": "assets/js/166.667ef0fb.js",
    "revision": "40ab3a2e5fdde5a854383319e9d3c880"
  },
  {
    "url": "assets/js/167.1beeb6d6.js",
    "revision": "5388c6deb508b2b43fa4ccd0ea840654"
  },
  {
    "url": "assets/js/168.0a993c35.js",
    "revision": "e500e6c8218ba617ab2f1b0eded84eb1"
  },
  {
    "url": "assets/js/169.0f43a87c.js",
    "revision": "19f96716b8152b45e8b0588108e375d1"
  },
  {
    "url": "assets/js/17.7cc4b6e1.js",
    "revision": "ba619e628368d65ba0df472507bbea00"
  },
  {
    "url": "assets/js/170.6aa7e818.js",
    "revision": "a5c1656fc70e7e30a01da6c690ab1a7f"
  },
  {
    "url": "assets/js/171.bca3858d.js",
    "revision": "3f99222f319d80147d875751ef9f3399"
  },
  {
    "url": "assets/js/172.e6f38985.js",
    "revision": "2b2a70201bb134ae4b50bb5cf57c0330"
  },
  {
    "url": "assets/js/173.064f23bd.js",
    "revision": "707c67868ae3498bc758ac20b48cdb1b"
  },
  {
    "url": "assets/js/174.3f94ac72.js",
    "revision": "ac402722a79ab1561eecaf3d19f8047d"
  },
  {
    "url": "assets/js/175.8098e063.js",
    "revision": "77828811a990cef049490ac9bc0b3fd5"
  },
  {
    "url": "assets/js/176.a9e1e466.js",
    "revision": "ea073e515eb16415b9d8bedad11fcf64"
  },
  {
    "url": "assets/js/177.a8ddac4f.js",
    "revision": "85eed3fda9288649713dc23883062f6b"
  },
  {
    "url": "assets/js/178.8677a460.js",
    "revision": "8ffa62e598e54fb53fc4c5fc20bcc1ad"
  },
  {
    "url": "assets/js/179.e1b9e61c.js",
    "revision": "fb5082e9f31311919996c26e0691bec5"
  },
  {
    "url": "assets/js/18.09d730b1.js",
    "revision": "a02fcb39b856103fa344bb20bfb1e51e"
  },
  {
    "url": "assets/js/180.31c06638.js",
    "revision": "f5745509e3508d3171e138f2452bc29f"
  },
  {
    "url": "assets/js/181.19417ef0.js",
    "revision": "956326db380ba5a73936675ca82d9553"
  },
  {
    "url": "assets/js/182.2a3dceaf.js",
    "revision": "dafbcb25fd4636ff2cffb6f1f1aa618e"
  },
  {
    "url": "assets/js/183.2a4721da.js",
    "revision": "338f4f22969ffa126bc45cb9444bf0f7"
  },
  {
    "url": "assets/js/184.d966b0fd.js",
    "revision": "38bf616b625522f0010dfb8e8577545b"
  },
  {
    "url": "assets/js/185.a1f3f511.js",
    "revision": "2f9b78c441a5b177f1a19ff1942312a2"
  },
  {
    "url": "assets/js/186.3f55f19c.js",
    "revision": "1a884826856ca2abbbdf1de5d0e57998"
  },
  {
    "url": "assets/js/187.9544b9f6.js",
    "revision": "2b86636430f61c4f75b0d46cc87e6495"
  },
  {
    "url": "assets/js/188.6005f1ae.js",
    "revision": "a0f72fecfea816e4b8cc34179b156f82"
  },
  {
    "url": "assets/js/189.d47a67cf.js",
    "revision": "b086f17b5029316c327ac659f8a30c2f"
  },
  {
    "url": "assets/js/19.643ef2af.js",
    "revision": "c5c834ae6552d9f1fa7d05c01d1adbe7"
  },
  {
    "url": "assets/js/190.91e32997.js",
    "revision": "9afb6e52feaea3112dcfaf2f620900a4"
  },
  {
    "url": "assets/js/191.ffa9d797.js",
    "revision": "60fd9c0e7583f7043a4fcddec5967b2f"
  },
  {
    "url": "assets/js/192.20a1d6e9.js",
    "revision": "b8fd0b6ce15d83d7e2b0582cde8b23e0"
  },
  {
    "url": "assets/js/193.6b36a4aa.js",
    "revision": "fd8430167d2d656356afb03f82c862e4"
  },
  {
    "url": "assets/js/194.1e065103.js",
    "revision": "d54e1596d7df0ffbcf36dfb3da9bd29e"
  },
  {
    "url": "assets/js/195.cef7de88.js",
    "revision": "d6fc7d8f66598032bd9dca317716b53a"
  },
  {
    "url": "assets/js/196.ffdb74eb.js",
    "revision": "04c274d30c305003bd59c2abe9b2e8f1"
  },
  {
    "url": "assets/js/197.0ea3f0b0.js",
    "revision": "1d1477c1196b7dad8d18c6a5632bb1c3"
  },
  {
    "url": "assets/js/198.5686488e.js",
    "revision": "cd296dc6a19e933a08143ba21589150f"
  },
  {
    "url": "assets/js/199.470b8834.js",
    "revision": "f44dd4db84039466e7fc6c9c5adab8ae"
  },
  {
    "url": "assets/js/2.3f012e23.js",
    "revision": "30a1a585e6424ec353fa09b1b9a02cc9"
  },
  {
    "url": "assets/js/20.1c5153c2.js",
    "revision": "9b8b330408f9346602362d61e9ea8042"
  },
  {
    "url": "assets/js/200.865959c7.js",
    "revision": "3ae6f6cead57c259bf213829dfc6a8e9"
  },
  {
    "url": "assets/js/201.3f7a9075.js",
    "revision": "f26ae903ef64a18d9617a339de61ac9c"
  },
  {
    "url": "assets/js/202.10520631.js",
    "revision": "63144aa3d0f3d5b24863228576b3762b"
  },
  {
    "url": "assets/js/203.3c2aa88f.js",
    "revision": "3ca347e757d5f4cffdd0c61e93d5b2e6"
  },
  {
    "url": "assets/js/204.f8df13ed.js",
    "revision": "5dfd7effcf4572674f1f66a0bb7d4a51"
  },
  {
    "url": "assets/js/205.1144607a.js",
    "revision": "3458e572af24aa607e78b22eca7c6ead"
  },
  {
    "url": "assets/js/206.291c31ac.js",
    "revision": "b8c970bd4a0698ed99530aefad9fc42f"
  },
  {
    "url": "assets/js/207.b8441235.js",
    "revision": "6485610031baaacc8630e7dc42c3156b"
  },
  {
    "url": "assets/js/208.e5b2d180.js",
    "revision": "2577ad5a5dfd96d82019c022ec0faa1a"
  },
  {
    "url": "assets/js/209.7bbe4cc0.js",
    "revision": "aa64b098c8be328177c272373275f41b"
  },
  {
    "url": "assets/js/21.d8e39cca.js",
    "revision": "acd8ce273ab89ab062e820600a692ccb"
  },
  {
    "url": "assets/js/210.0d4e142a.js",
    "revision": "dde5bbe5887939423b94abe19e617ec1"
  },
  {
    "url": "assets/js/211.11df0fe3.js",
    "revision": "8c7ab76934669bcd33eeac674e3c9b7a"
  },
  {
    "url": "assets/js/212.a28f43e2.js",
    "revision": "040b0e1a93c6737390860ffb29c6b6db"
  },
  {
    "url": "assets/js/213.701f8316.js",
    "revision": "b819974561a46c7664626d8e2100f938"
  },
  {
    "url": "assets/js/214.3484e5da.js",
    "revision": "3b061558f06b3d314215b32a5ed0a828"
  },
  {
    "url": "assets/js/215.8e942618.js",
    "revision": "f5630a5c49395d1a59041bea000edf86"
  },
  {
    "url": "assets/js/216.32de5926.js",
    "revision": "a9078217cf15f14dc80c4dc7ba4a2885"
  },
  {
    "url": "assets/js/217.bc8b5a4f.js",
    "revision": "cd737547a17b623cedb1047f913dd653"
  },
  {
    "url": "assets/js/218.2896a318.js",
    "revision": "b15fe53c31fe8d7abb46cab0508ed367"
  },
  {
    "url": "assets/js/219.98fb5991.js",
    "revision": "048a86b583a4cd8869f2692952ab248f"
  },
  {
    "url": "assets/js/22.785c46a2.js",
    "revision": "768cb8affbc2557b255845fc43fd056e"
  },
  {
    "url": "assets/js/220.d6c2c9b5.js",
    "revision": "0ced04bc08d04792f0574202656cc81f"
  },
  {
    "url": "assets/js/221.d5b9cff8.js",
    "revision": "2a1a400afca3ae6adcf33f6859fc946d"
  },
  {
    "url": "assets/js/222.588600b2.js",
    "revision": "d203b9ffb02abce3b0f6db9174f71fe8"
  },
  {
    "url": "assets/js/223.925abaef.js",
    "revision": "c745df10ba877f9b4001b1077e48f7e1"
  },
  {
    "url": "assets/js/224.630b5974.js",
    "revision": "eba8d09bfccb01ce752340b9822f08c7"
  },
  {
    "url": "assets/js/225.09225699.js",
    "revision": "59968f9e21079e3f7c132ef41f8922ec"
  },
  {
    "url": "assets/js/226.82c5a4c1.js",
    "revision": "6aa2614fab503643688b805041895c83"
  },
  {
    "url": "assets/js/227.67af5427.js",
    "revision": "909e198161c5d84dfcd13fb78a44f09e"
  },
  {
    "url": "assets/js/228.e747cb1a.js",
    "revision": "a46c3731c30c8340e4f90890cc093c5f"
  },
  {
    "url": "assets/js/229.9fc1e629.js",
    "revision": "73e9369ce8ee4dff8198bf8538b3dce3"
  },
  {
    "url": "assets/js/23.ca63159b.js",
    "revision": "330546dbf0a177b438307be231f69e35"
  },
  {
    "url": "assets/js/230.f929b920.js",
    "revision": "3c5de1c39944e8f4bfb04bced48ca80f"
  },
  {
    "url": "assets/js/231.c2c3d91a.js",
    "revision": "c55869b44076d61d0fb96e93465aa5e7"
  },
  {
    "url": "assets/js/232.76ba6941.js",
    "revision": "86509dc1c7bea996712c505efef2bde6"
  },
  {
    "url": "assets/js/233.e2e49595.js",
    "revision": "a90ace977ebb98a16f70d9962ed070ba"
  },
  {
    "url": "assets/js/234.33844991.js",
    "revision": "2ddf08b4347bdc2e089582d71eba02c3"
  },
  {
    "url": "assets/js/235.8b2066dc.js",
    "revision": "1672bb2a0e08323fe5840e34b90b541d"
  },
  {
    "url": "assets/js/236.b4bd00fb.js",
    "revision": "1a8d3e949d0e6aac837db776ae794a25"
  },
  {
    "url": "assets/js/237.616a6700.js",
    "revision": "7a16db572c312d6248cce9f6ec03c0c8"
  },
  {
    "url": "assets/js/238.1c530340.js",
    "revision": "494ac91588ec86fd7d5391772a821ce7"
  },
  {
    "url": "assets/js/239.128de584.js",
    "revision": "20e64987adcdc80dc092786850c4f88b"
  },
  {
    "url": "assets/js/24.9ef9a319.js",
    "revision": "2d878cedcc95e4a9c17beadb5fdbb201"
  },
  {
    "url": "assets/js/240.4c647f1e.js",
    "revision": "56a4257a56eae38677fe59b993faeb3a"
  },
  {
    "url": "assets/js/241.4cfa2776.js",
    "revision": "f7b582a3cfc5307dcecb81c863d60893"
  },
  {
    "url": "assets/js/242.baa1d60f.js",
    "revision": "44ad2056372b7b792ea81a84a77189a9"
  },
  {
    "url": "assets/js/243.9025834b.js",
    "revision": "107bd56af7d37a77211302cdc0d3f92f"
  },
  {
    "url": "assets/js/244.94a8f4bf.js",
    "revision": "612eaa520793fc160f89237b3ea1f5f7"
  },
  {
    "url": "assets/js/245.f552f5e8.js",
    "revision": "dc5d7a35ecc8a447ab026aacd7a0cce9"
  },
  {
    "url": "assets/js/246.9ba1a1dd.js",
    "revision": "83fc09bf8ed49c615563c5eeabe5d1cb"
  },
  {
    "url": "assets/js/247.81185ac2.js",
    "revision": "21377a8520008776a583f0bc95758172"
  },
  {
    "url": "assets/js/248.13e8d606.js",
    "revision": "8c551fa53c1d6df3a6ab046517c87901"
  },
  {
    "url": "assets/js/249.358d6ef0.js",
    "revision": "82034a04dd8d212ce34a67360d8c615b"
  },
  {
    "url": "assets/js/25.9857da40.js",
    "revision": "294c681d54599accaed768266da699ad"
  },
  {
    "url": "assets/js/250.2a51e4cb.js",
    "revision": "a1666c2722c2a3fd341001fe97d1a60d"
  },
  {
    "url": "assets/js/251.91d50acc.js",
    "revision": "d3fe1c55316d7a2b1ab5920a100a82a8"
  },
  {
    "url": "assets/js/252.1c3f0b47.js",
    "revision": "b37277c52ed8ca755a103c58c7589169"
  },
  {
    "url": "assets/js/253.179cf2c7.js",
    "revision": "5ba5acad6dcb7d2428c1f8d1f69a9b8d"
  },
  {
    "url": "assets/js/254.457065a9.js",
    "revision": "dac418d3c8a39d3cae620741f5558f0e"
  },
  {
    "url": "assets/js/255.cf3da0c2.js",
    "revision": "df86246d4cca206abaa9fa9ad564a209"
  },
  {
    "url": "assets/js/256.d80a0f69.js",
    "revision": "83bfed79a58364eec2a20a99b83b6f0d"
  },
  {
    "url": "assets/js/257.55c931a0.js",
    "revision": "c925e1e24526307a9404d5ef9d0c6d5d"
  },
  {
    "url": "assets/js/258.2b484a25.js",
    "revision": "21c9e75de39c746d3f47c48167bfbfdf"
  },
  {
    "url": "assets/js/259.d96f1525.js",
    "revision": "93f430f4b821fd2c3ac5250e5239c3b6"
  },
  {
    "url": "assets/js/26.ff6b2864.js",
    "revision": "4ffcac69d9b5f98faacdf1b8fba646f0"
  },
  {
    "url": "assets/js/260.51bd5c55.js",
    "revision": "d32325cea1e1fd3141c505240f9de39b"
  },
  {
    "url": "assets/js/261.6e7e95ae.js",
    "revision": "287e4085851faab73e6f16fd02e6c2e8"
  },
  {
    "url": "assets/js/262.5ba918ee.js",
    "revision": "6c7c0ac74c76b25ddef026e3780d505f"
  },
  {
    "url": "assets/js/263.f2d60086.js",
    "revision": "4508c29396406339e3ddcd7b8cb5fd40"
  },
  {
    "url": "assets/js/264.08e48424.js",
    "revision": "e9d8bdd6dbf02120a8bfc607d03fd589"
  },
  {
    "url": "assets/js/265.fb89ca19.js",
    "revision": "eb419492c3f220eacbb629e67d91291f"
  },
  {
    "url": "assets/js/266.d1e89177.js",
    "revision": "682928941baf518535e76e93794919b4"
  },
  {
    "url": "assets/js/267.5550c891.js",
    "revision": "8707447fba7f229ac6daa1e5088a9f9a"
  },
  {
    "url": "assets/js/268.193487c1.js",
    "revision": "2faa9d43b2f5d45f18d3c4092626ac1e"
  },
  {
    "url": "assets/js/269.477282df.js",
    "revision": "14f6ccf2a48dcd42a8d104d33c8df4b0"
  },
  {
    "url": "assets/js/27.04d1fe02.js",
    "revision": "9daaddd4166463f649b0a5355d3bfc18"
  },
  {
    "url": "assets/js/270.7e0ff00a.js",
    "revision": "d26cd1c4302571146bdfedb5967ef10f"
  },
  {
    "url": "assets/js/271.a0d5b231.js",
    "revision": "bb8de9dbbbcc1b430dcb40fd91cb1e41"
  },
  {
    "url": "assets/js/272.cd6662d5.js",
    "revision": "a89f674f7a6278e23f59a75f547d9a3f"
  },
  {
    "url": "assets/js/273.66acd996.js",
    "revision": "09484500898b8e0452d81e97f48ff911"
  },
  {
    "url": "assets/js/274.fa6db74f.js",
    "revision": "f7d4221e89d74d9160a3cc7d5d6ae999"
  },
  {
    "url": "assets/js/275.e6867c14.js",
    "revision": "e4455d8d5a72ff66e14eeeb6a169adae"
  },
  {
    "url": "assets/js/276.580583b5.js",
    "revision": "1f2ba200d03df41266b6a09079facfb8"
  },
  {
    "url": "assets/js/277.c91a227a.js",
    "revision": "bf8b29e4015808b08337f23cefcd8525"
  },
  {
    "url": "assets/js/278.e6c40048.js",
    "revision": "af51043a8d6c50b5957415aa3cc52c4f"
  },
  {
    "url": "assets/js/279.427433a0.js",
    "revision": "22ca4e5edd76a8438d11bef40c7c327c"
  },
  {
    "url": "assets/js/28.d3ff326f.js",
    "revision": "ab7fdadedcfd9f2f050ea538467ceb9a"
  },
  {
    "url": "assets/js/280.cbeab45f.js",
    "revision": "415e2a0dbbd080c406d17d95124208b5"
  },
  {
    "url": "assets/js/281.baf177ad.js",
    "revision": "7e1ac129f889674bee394c72cf1914db"
  },
  {
    "url": "assets/js/282.85d3824c.js",
    "revision": "1cdc30c93b27099df512dda9fdc08f12"
  },
  {
    "url": "assets/js/283.f4b7961e.js",
    "revision": "9c1ca113cb61f972b04bf1b2577023b8"
  },
  {
    "url": "assets/js/284.57efe632.js",
    "revision": "dd23d4c458301d410c028583afd730d0"
  },
  {
    "url": "assets/js/285.33401e1f.js",
    "revision": "2549b38c8c0f411b0672dc91c8886ac7"
  },
  {
    "url": "assets/js/286.eea01ece.js",
    "revision": "3b8ab05085644da9d118a78817fa7d99"
  },
  {
    "url": "assets/js/287.b4d01bce.js",
    "revision": "c3f0ce3db0add3a91e0c0b7cd00c0c6a"
  },
  {
    "url": "assets/js/288.6fd7da5d.js",
    "revision": "c44e5168e7e8775e290c660b6722381d"
  },
  {
    "url": "assets/js/289.fb6d01c7.js",
    "revision": "c630cdc14e9cb27860e079b9db2fa496"
  },
  {
    "url": "assets/js/29.470e935a.js",
    "revision": "48e1a3c8e76e97bbfa0b35508d1c6418"
  },
  {
    "url": "assets/js/290.1f964ffb.js",
    "revision": "abc064271b4d7098e1d1443c0d5642b5"
  },
  {
    "url": "assets/js/291.2794ee8c.js",
    "revision": "574144e5094069f5cd58e3e048e41b23"
  },
  {
    "url": "assets/js/292.70c4c31f.js",
    "revision": "f69023dd1ede3185e3019c8cde6cd8e3"
  },
  {
    "url": "assets/js/293.c5164451.js",
    "revision": "f1b5de9a6aa98f2a728a6acfdd7c3f57"
  },
  {
    "url": "assets/js/294.7d37addf.js",
    "revision": "3ac383efb0e8c86e5a3a0c989500f47f"
  },
  {
    "url": "assets/js/295.a39a4ce0.js",
    "revision": "aed99039f2858ddfafa9c8302c805378"
  },
  {
    "url": "assets/js/296.abffc8af.js",
    "revision": "b32ab65c5dcec03b42a528d5033ab1de"
  },
  {
    "url": "assets/js/297.01b93b3c.js",
    "revision": "6e9f5fa819b0a1bafa189b25531af1cd"
  },
  {
    "url": "assets/js/298.58a0444c.js",
    "revision": "8505233fe38e44d81e08d3a6e3d75525"
  },
  {
    "url": "assets/js/299.447ed34c.js",
    "revision": "9cbb02597f45d3b460873f4218feca4f"
  },
  {
    "url": "assets/js/3.0dd7ed9f.js",
    "revision": "35541a49b5040bc49573a50e175e3e10"
  },
  {
    "url": "assets/js/30.c40bf747.js",
    "revision": "5f2c6685320c642fb69218e7a9022b77"
  },
  {
    "url": "assets/js/300.3a365532.js",
    "revision": "03ecbc5723dc7b4640a40489e98b4648"
  },
  {
    "url": "assets/js/301.0961b4ee.js",
    "revision": "7ee94ff49b16f038a017935fd39f2a1c"
  },
  {
    "url": "assets/js/302.4c189616.js",
    "revision": "436aaf369c23dc7441f8dfee39bae1a3"
  },
  {
    "url": "assets/js/303.d0b6b3c0.js",
    "revision": "21221023b10cdfbc27fff19ed81be5d1"
  },
  {
    "url": "assets/js/304.63b95072.js",
    "revision": "a02498f3b7d76d2b9efb2230901fc496"
  },
  {
    "url": "assets/js/305.54ea6b14.js",
    "revision": "841a65e0ec31f34373d08045787fe663"
  },
  {
    "url": "assets/js/306.60a95e0a.js",
    "revision": "73ab75e5d1543d1797f345fea1de1f7c"
  },
  {
    "url": "assets/js/307.75789c74.js",
    "revision": "11daa1d78514ab5c6a2bff7bf6acc876"
  },
  {
    "url": "assets/js/308.41b743a6.js",
    "revision": "95659c1f387c9d7e67c9a377f35b4f38"
  },
  {
    "url": "assets/js/309.04ee9606.js",
    "revision": "fa21637c3872fec0252877eedcb721af"
  },
  {
    "url": "assets/js/31.aeacf547.js",
    "revision": "fb862f89d4616104ab3532203b320628"
  },
  {
    "url": "assets/js/310.d2f9df46.js",
    "revision": "b6c2cc661f6f6297c4b95ae0fc533dc8"
  },
  {
    "url": "assets/js/311.51e06ac3.js",
    "revision": "ee1926f9f555ed9437a036e08a089f89"
  },
  {
    "url": "assets/js/312.88ecb474.js",
    "revision": "674aa8cc159e588851a6fc601db13199"
  },
  {
    "url": "assets/js/313.eefd89af.js",
    "revision": "53360db0d779db788dc25b760ea5a9a9"
  },
  {
    "url": "assets/js/314.0052107b.js",
    "revision": "2d186e05c458e68061c4fc5f97351605"
  },
  {
    "url": "assets/js/315.67c6282c.js",
    "revision": "390d77d8fe7cc115f2bca88dd90f6811"
  },
  {
    "url": "assets/js/316.c354c699.js",
    "revision": "e691933f1922245fd342ae300dc854de"
  },
  {
    "url": "assets/js/317.541811f5.js",
    "revision": "45762326d6ace2feee1e6c1de526a432"
  },
  {
    "url": "assets/js/318.24059904.js",
    "revision": "c868e30eb1e4d58cfb0ec316bb2829c0"
  },
  {
    "url": "assets/js/319.158a8a8e.js",
    "revision": "2baf38ca66dffeb56bf35e0aab055190"
  },
  {
    "url": "assets/js/32.e8c8fa09.js",
    "revision": "2afe5db950249b945bf9f36c89beaced"
  },
  {
    "url": "assets/js/320.a520fd07.js",
    "revision": "5357180a40ee6a3f9e049fcb9f576b4c"
  },
  {
    "url": "assets/js/321.237870bb.js",
    "revision": "883fd0036d102c55b61c2a6f145bb47d"
  },
  {
    "url": "assets/js/322.aaefdc79.js",
    "revision": "bfac325ff25d48cb70109e7a2472da8b"
  },
  {
    "url": "assets/js/323.54ebd44a.js",
    "revision": "e0f0347d83e8ab494780fcd77170fd6d"
  },
  {
    "url": "assets/js/324.884ea1b8.js",
    "revision": "c9a1b56030169e77a3088757a0b3c6e4"
  },
  {
    "url": "assets/js/325.f7304ed1.js",
    "revision": "8ce08694b56e87d97110751193328606"
  },
  {
    "url": "assets/js/326.1274ae01.js",
    "revision": "5f6752b07dd2bdaa87e23a1dbeb77fec"
  },
  {
    "url": "assets/js/327.499d00ce.js",
    "revision": "fddf45c9f42ca71faefd599267f86590"
  },
  {
    "url": "assets/js/328.622f9edc.js",
    "revision": "e5241e2efc9a94f69481a008319093ea"
  },
  {
    "url": "assets/js/329.66e7cee7.js",
    "revision": "71167dd400be8d21dcc73a771758db8a"
  },
  {
    "url": "assets/js/33.cf6a08b2.js",
    "revision": "bd20e9828e67fb291dde0cb227a822c9"
  },
  {
    "url": "assets/js/330.5cbf16a9.js",
    "revision": "439632dd472537c5ed86a8c1347a2dc2"
  },
  {
    "url": "assets/js/331.a001f658.js",
    "revision": "d9a2d54f4058599f4a86c49da65abdea"
  },
  {
    "url": "assets/js/332.cec3652c.js",
    "revision": "cd391ce15ba5ce681d55272e5048d2ec"
  },
  {
    "url": "assets/js/333.ca4a45aa.js",
    "revision": "f8ff4d122b7b9734c5378351ca331490"
  },
  {
    "url": "assets/js/334.5088f2a2.js",
    "revision": "c26dd518774d7c2304b46e7ed77b00f1"
  },
  {
    "url": "assets/js/335.4b0971ca.js",
    "revision": "3eb930e8b42514ef33fb47be29f90f68"
  },
  {
    "url": "assets/js/336.d1a72735.js",
    "revision": "941c8c4b7521d3824c8d54cfdf4911d7"
  },
  {
    "url": "assets/js/337.0f209274.js",
    "revision": "2878d94bf901d5719e71ea20efbecdee"
  },
  {
    "url": "assets/js/338.5f8bfe4f.js",
    "revision": "192b9a5ff8a587eeedbcbf0a5e235050"
  },
  {
    "url": "assets/js/339.add732a3.js",
    "revision": "808307a4debae9627156a63f85b2c587"
  },
  {
    "url": "assets/js/34.202db28a.js",
    "revision": "51cdc2c0a9c194317c1aa65140334df8"
  },
  {
    "url": "assets/js/340.463b0d52.js",
    "revision": "1ba95bd9335db905dac392ab3ed36798"
  },
  {
    "url": "assets/js/341.25d6ec26.js",
    "revision": "1953448450ab084bd409db2685e6d064"
  },
  {
    "url": "assets/js/342.5d78bc25.js",
    "revision": "fe211f48dd7a4b30cc0bd30e80724939"
  },
  {
    "url": "assets/js/343.f945a85c.js",
    "revision": "a90c9f35a46afa68147ab7d4f8dff9ad"
  },
  {
    "url": "assets/js/344.82eeec6a.js",
    "revision": "645a6085d49f87e0e6838cda55133966"
  },
  {
    "url": "assets/js/345.969d3082.js",
    "revision": "8b917f60ddf6db72674c10a2fe3531f4"
  },
  {
    "url": "assets/js/346.82827627.js",
    "revision": "9db52e0e7899fec7338830154477c81b"
  },
  {
    "url": "assets/js/347.1a1249a7.js",
    "revision": "2ab5c36c77d0d9f0701edd84ae2c2027"
  },
  {
    "url": "assets/js/348.695f94ee.js",
    "revision": "e6d391db0fb23b2db0803e94713cc783"
  },
  {
    "url": "assets/js/349.e5e89111.js",
    "revision": "f0214a1bedffe78f48cfc6d11867ffc4"
  },
  {
    "url": "assets/js/35.3b050ad3.js",
    "revision": "e11b6ddc78621b7178e5ad8d5a3bb596"
  },
  {
    "url": "assets/js/350.111b7b13.js",
    "revision": "04976fbad47097b9f6dd5110ead01ae7"
  },
  {
    "url": "assets/js/351.b6ec85b7.js",
    "revision": "0756aa6688896d134a9779d7aa619001"
  },
  {
    "url": "assets/js/352.8781d659.js",
    "revision": "6aed8977210bd7485f1e8c2999168925"
  },
  {
    "url": "assets/js/353.525bb5f2.js",
    "revision": "b1479dfaadaf5326b5ee52256dd41b38"
  },
  {
    "url": "assets/js/354.f1afeeef.js",
    "revision": "e788a89407d608b49ad3f8a79e7ec514"
  },
  {
    "url": "assets/js/355.203d7697.js",
    "revision": "e8a9551737e8020808ca082f5843687c"
  },
  {
    "url": "assets/js/356.a3e7de08.js",
    "revision": "f62531b13becb7218289215d4ea293d9"
  },
  {
    "url": "assets/js/357.074608ff.js",
    "revision": "09f1985a3871a5031a8ee69a254fac66"
  },
  {
    "url": "assets/js/358.250a8924.js",
    "revision": "117d9825a0c3db78ecd1cedd1f9616cd"
  },
  {
    "url": "assets/js/359.660a5d43.js",
    "revision": "acff28cd2b3eb28ccb2ff0cb75dbb9cf"
  },
  {
    "url": "assets/js/36.e1fc8a43.js",
    "revision": "a5d2ec9f7a9486e953bc9e1150a8a499"
  },
  {
    "url": "assets/js/360.e57eb31f.js",
    "revision": "958dff75b82b3bc0792f648b723c3796"
  },
  {
    "url": "assets/js/361.3c55ad71.js",
    "revision": "12e273b5737cbfae2725d9c849e04717"
  },
  {
    "url": "assets/js/362.d669b914.js",
    "revision": "13088a0c63b726bbe70b656efe272120"
  },
  {
    "url": "assets/js/363.b489af8c.js",
    "revision": "8288593d890ab12cf80635f1f810c1fe"
  },
  {
    "url": "assets/js/364.6eaba8f8.js",
    "revision": "4db8bf9738abed23d7c557ec7efc1376"
  },
  {
    "url": "assets/js/365.a8751507.js",
    "revision": "c3fbc40a0a3abadfbe732283c27334f2"
  },
  {
    "url": "assets/js/366.ce8b1ac4.js",
    "revision": "8a6e62001a980ce6fc9fec300be33c2d"
  },
  {
    "url": "assets/js/367.1b26cff3.js",
    "revision": "a721b3e38fecb0a9d630e69620bf0e96"
  },
  {
    "url": "assets/js/368.e382e0af.js",
    "revision": "8667cf3f9a1c33f18e82336e05bc3e61"
  },
  {
    "url": "assets/js/369.40170239.js",
    "revision": "b217a428dfb26b186c5e3ff1cc4f9805"
  },
  {
    "url": "assets/js/37.a654ecae.js",
    "revision": "e0b410d632aa3a43a108c7d5ee97a3ed"
  },
  {
    "url": "assets/js/370.73d861cf.js",
    "revision": "c654b6ea6cdcc1d307c2badb297c8972"
  },
  {
    "url": "assets/js/371.62088442.js",
    "revision": "473060e30db6c80a123e17c06db6fc08"
  },
  {
    "url": "assets/js/372.2d72d660.js",
    "revision": "ad943fd6bbeaf597b4d11a0fe7c3d328"
  },
  {
    "url": "assets/js/373.799088b0.js",
    "revision": "f0a09c144c73038e9a893e808ca4076a"
  },
  {
    "url": "assets/js/374.9358459e.js",
    "revision": "d9b245e74d5195d8617df822113030cc"
  },
  {
    "url": "assets/js/375.0932a2dc.js",
    "revision": "4f846cd226567b6f6c252ad85be7fc49"
  },
  {
    "url": "assets/js/376.6ba1ebd9.js",
    "revision": "fe0049ff8612992599222447690d25bd"
  },
  {
    "url": "assets/js/377.f3ccb87d.js",
    "revision": "423f48f34023d1e211ae2bf108d84e80"
  },
  {
    "url": "assets/js/378.1c819699.js",
    "revision": "9fee411c1784617ca47bcc3a9c7922f7"
  },
  {
    "url": "assets/js/379.99f91765.js",
    "revision": "33bbdb1f0e7953f2abd46ad31ad04178"
  },
  {
    "url": "assets/js/38.89faee0f.js",
    "revision": "b58dfdbed538ee0ecd4c607f9a4dab3e"
  },
  {
    "url": "assets/js/380.51662e63.js",
    "revision": "8ee4e40a7bb0a77278576021aa3aefb6"
  },
  {
    "url": "assets/js/381.c8cce5d5.js",
    "revision": "d57570da01453034ada74a2f412db098"
  },
  {
    "url": "assets/js/382.56ce802e.js",
    "revision": "e437a7e48cfd199826b3f9302264c56b"
  },
  {
    "url": "assets/js/383.bbeae4ba.js",
    "revision": "4708bdc86a1c9659785ac80a1435f2f9"
  },
  {
    "url": "assets/js/384.9f943d88.js",
    "revision": "4b7323c2986b119271cb1265126aac7a"
  },
  {
    "url": "assets/js/385.ca190c93.js",
    "revision": "f3655400ab73422cb0856ee9bb573231"
  },
  {
    "url": "assets/js/386.85a75952.js",
    "revision": "3e1e2f072822b08d088c27734f787b23"
  },
  {
    "url": "assets/js/387.ca596f2a.js",
    "revision": "de94e847554d4455b6a525672c021749"
  },
  {
    "url": "assets/js/388.0b929b79.js",
    "revision": "b5094b4490fe5dad016047204c096470"
  },
  {
    "url": "assets/js/389.18f9f419.js",
    "revision": "860dfbdab3cf93f207c01ced10a0e7a7"
  },
  {
    "url": "assets/js/39.e91d1148.js",
    "revision": "a25d7c7a1753cbcc37fbc29278e44003"
  },
  {
    "url": "assets/js/390.11edcc22.js",
    "revision": "bf3fbbce6bba188c50bdb74dc101bab2"
  },
  {
    "url": "assets/js/391.8cf1881d.js",
    "revision": "1b9fe0ea4898a05e167b948ad44eff4d"
  },
  {
    "url": "assets/js/392.e3e08577.js",
    "revision": "d121890402be14106913c0f6747c8b70"
  },
  {
    "url": "assets/js/393.01535e57.js",
    "revision": "3682294d7f522a42d5c58084cef9f010"
  },
  {
    "url": "assets/js/394.bffbdeb8.js",
    "revision": "c88568bef3932d4c4eee091e4c6867f6"
  },
  {
    "url": "assets/js/395.5e0e5151.js",
    "revision": "f2c4a62c82f994d55216f215b02ae782"
  },
  {
    "url": "assets/js/396.f6e9fe6c.js",
    "revision": "6c59dcdf528e20b597114686ac5ec2ce"
  },
  {
    "url": "assets/js/4.aea04498.js",
    "revision": "a2631c1465ae463dd32f51823e337542"
  },
  {
    "url": "assets/js/40.c4a4eae2.js",
    "revision": "b41dd68605f91262f0d8e5829de5137a"
  },
  {
    "url": "assets/js/41.83a75460.js",
    "revision": "b44f7bbf5fd7cb021b31f1cd977b0d6f"
  },
  {
    "url": "assets/js/42.550fbec4.js",
    "revision": "36ffaef1ad779913f5e09e3b051a1e03"
  },
  {
    "url": "assets/js/43.d3b05d6b.js",
    "revision": "bf5e1df6bf0889938447f7e3a99e1f7b"
  },
  {
    "url": "assets/js/44.db2fb97a.js",
    "revision": "196ed31a9ccecd30e0e7c16c2fc5a5ea"
  },
  {
    "url": "assets/js/45.7bcb744e.js",
    "revision": "ef59b3d4a1f024bba983c186c0c946c9"
  },
  {
    "url": "assets/js/46.7e3ff5d2.js",
    "revision": "04ecfbd5ba62da962d4de3605aac4430"
  },
  {
    "url": "assets/js/47.3c4c8935.js",
    "revision": "efd740a0afe4680df9becbb02d84067e"
  },
  {
    "url": "assets/js/48.5c327407.js",
    "revision": "e5027493b299456f23c1311affb7b00f"
  },
  {
    "url": "assets/js/49.a98e5d9f.js",
    "revision": "f5373b8856317149ce3fdc579737f809"
  },
  {
    "url": "assets/js/5.ef84f637.js",
    "revision": "8f8aee9c65799e3cfa4cf3b7291d0a73"
  },
  {
    "url": "assets/js/50.533cfea3.js",
    "revision": "907a7759ce070c77f792478321a7940e"
  },
  {
    "url": "assets/js/51.6a4bafd4.js",
    "revision": "42f3e0ae606e269ee364ed0bf80d85aa"
  },
  {
    "url": "assets/js/52.b29b3f94.js",
    "revision": "6fc0ec78f8a08d87a4c18b736ac23d6b"
  },
  {
    "url": "assets/js/53.ef7781a1.js",
    "revision": "15b2a4674df9e15d46149c2bb9f1bfa1"
  },
  {
    "url": "assets/js/54.125cfd8b.js",
    "revision": "aa18f97164ff13d9e16840e32703717c"
  },
  {
    "url": "assets/js/55.1e29729a.js",
    "revision": "c995497d06dad2d63f29c8673edeffbe"
  },
  {
    "url": "assets/js/56.64d0733a.js",
    "revision": "9c207a4e4fc57fae83bcfb87284e4a1a"
  },
  {
    "url": "assets/js/57.d142f91c.js",
    "revision": "63edf9fca50a0adcfbfb850171ddbbf6"
  },
  {
    "url": "assets/js/58.4bf110b5.js",
    "revision": "b86011553a534127eaf8d1ab9587e33e"
  },
  {
    "url": "assets/js/59.52d4fe85.js",
    "revision": "03dc2e0e9bb6482cc76245b13003b493"
  },
  {
    "url": "assets/js/60.f1c72a93.js",
    "revision": "0464d4800c604383a235ff4f22d8997c"
  },
  {
    "url": "assets/js/61.b1c7a8d4.js",
    "revision": "38aaf2acf5b3bcd612087c89053c95aa"
  },
  {
    "url": "assets/js/62.403372a6.js",
    "revision": "d3ae687b1520f9f12c1914c836b4681b"
  },
  {
    "url": "assets/js/63.23221aa8.js",
    "revision": "b81b551deeaa209ce271376125ec674f"
  },
  {
    "url": "assets/js/64.e768be82.js",
    "revision": "dd2369a6c769a831f26a39880337ebe4"
  },
  {
    "url": "assets/js/65.9a315bed.js",
    "revision": "ca26e46d6c89f079deb0594c6a4a31b7"
  },
  {
    "url": "assets/js/66.e9d77e5c.js",
    "revision": "d968d61cf7e87b3fdb8fc4f5d2d3e192"
  },
  {
    "url": "assets/js/67.a70ebccb.js",
    "revision": "d5b56657916c3ae690b07bbdc72cbcf4"
  },
  {
    "url": "assets/js/68.471391b9.js",
    "revision": "7aca637250fa8f85e52cc9fce55e9aee"
  },
  {
    "url": "assets/js/69.8c9b99eb.js",
    "revision": "1935b7da083b6c9855e22e8650e06409"
  },
  {
    "url": "assets/js/70.603e87c6.js",
    "revision": "a0eaf83a5a8c70aa8aa3d9ca268d78ca"
  },
  {
    "url": "assets/js/71.0e0a37cc.js",
    "revision": "954a370afb89cb17173203125e6400ee"
  },
  {
    "url": "assets/js/72.85301ff4.js",
    "revision": "4a51e6ed429c54a77903e412f108d80f"
  },
  {
    "url": "assets/js/73.0f473b91.js",
    "revision": "cf3627b69d300ca7b803432fb399c175"
  },
  {
    "url": "assets/js/74.6352f747.js",
    "revision": "c0a36b9a4097e3ad0d512b23519a2dec"
  },
  {
    "url": "assets/js/75.2b195ebc.js",
    "revision": "f83ea10a63f7a4f6469adf5c573d49ef"
  },
  {
    "url": "assets/js/76.4af9578a.js",
    "revision": "af129c47fbb7417d461325018d3290bf"
  },
  {
    "url": "assets/js/77.71e191cf.js",
    "revision": "9c8368a807531a618317fa74bf44407e"
  },
  {
    "url": "assets/js/78.edd890e5.js",
    "revision": "9e0706741dead6fb3d775fae1b40c8da"
  },
  {
    "url": "assets/js/79.ab8d96c6.js",
    "revision": "91fd2433c8268b40ffef84ed4ec59ad7"
  },
  {
    "url": "assets/js/8.64774548.js",
    "revision": "29e578d46158a5c091905d7816f076bf"
  },
  {
    "url": "assets/js/80.cd98d8a6.js",
    "revision": "1df7918703d3fae262a27bf60c0c9f81"
  },
  {
    "url": "assets/js/81.f6e92069.js",
    "revision": "80fc2960ad4499128ca32e918e5c6648"
  },
  {
    "url": "assets/js/82.b5488ee0.js",
    "revision": "96f8949dd6ee05c069960510be3abe9a"
  },
  {
    "url": "assets/js/83.68f5a4d2.js",
    "revision": "ee3ae25b19a45dcff4549c20d09e98c2"
  },
  {
    "url": "assets/js/84.f5a40839.js",
    "revision": "c071b85520b9424ccf4866e17706a470"
  },
  {
    "url": "assets/js/85.4a3ee314.js",
    "revision": "5c10f6e2e63a364537f9f33e096c3a41"
  },
  {
    "url": "assets/js/86.2f19cf3d.js",
    "revision": "1c313cc643f71ef4ffab6c6925110b99"
  },
  {
    "url": "assets/js/87.c39c3689.js",
    "revision": "e21e5c5c89af9a622f4e2f67631376f3"
  },
  {
    "url": "assets/js/88.7f8fea43.js",
    "revision": "5a14447db1c24470cb6568d0ea12de9b"
  },
  {
    "url": "assets/js/89.e04ae41e.js",
    "revision": "4d715e261544169db17dadac994537c9"
  },
  {
    "url": "assets/js/9.3568643a.js",
    "revision": "f1f5411036bf5e723762c1197d940dc4"
  },
  {
    "url": "assets/js/90.b5027de3.js",
    "revision": "e11e7fab3c6707b48aee8916a2d16a1c"
  },
  {
    "url": "assets/js/91.3d81d98e.js",
    "revision": "46ba1f8677895a71eef574dbf4e257db"
  },
  {
    "url": "assets/js/92.a0e7c020.js",
    "revision": "07b1535ebab6853adc4d5fad7ac42f3a"
  },
  {
    "url": "assets/js/93.da09488f.js",
    "revision": "02f6522e7277924d4203c344c0547aaf"
  },
  {
    "url": "assets/js/94.5203ee3c.js",
    "revision": "92f19f6bf946d4e3efb4df81c99b78f7"
  },
  {
    "url": "assets/js/95.51e5a4a8.js",
    "revision": "8b57fa092d2a4ecfaf593a6a03d7e244"
  },
  {
    "url": "assets/js/96.87abc0fc.js",
    "revision": "4b20e3cb4980ba659955bd15acdbda45"
  },
  {
    "url": "assets/js/97.25e4f069.js",
    "revision": "cd2bab923b1dfbca1d9f9b80af6813c8"
  },
  {
    "url": "assets/js/98.8901a01c.js",
    "revision": "817ab4b047ac0a4fefc58b7e54d638b7"
  },
  {
    "url": "assets/js/99.d6f0d5af.js",
    "revision": "fc2b3a220cea9462f0e68635f8d9c957"
  },
  {
    "url": "assets/js/app.2b28343c.js",
    "revision": "4679ec50dfde3f6a772bdfd54d8ffef7"
  },
  {
    "url": "assets/js/vendors~docsearch.5cdb9bf7.js",
    "revision": "e182362b7c5c834e1d0abc1b8262abc9"
  },
  {
    "url": "index.html",
    "revision": "11dbdc445af00691945555cbb033f945"
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
