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
    "revision": "426437285fe6143395d7a84a37f00f3b"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "bf556d80b47370cdcb2ec1acbb9fc74f"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "40b5efdeb492f8074c6084205ecdd6f7"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "c3a3a4eaf1678020c5fb8cc55cbca9fb"
  },
  {
    "url": "2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "87d2d95296cbacb5b446196ea7463b94"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "23165306b870978cc9c64c274bcb9ae9"
  },
  {
    "url": "2.0/b2b-marketplace/buying-leads.html",
    "revision": "7cd2b7d10ef61a2e83ab69d4aa49360d"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "98d7aba232dc6a8a289a371ea2471129"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "bba8f10d166dbce5ee00d400d0b09606"
  },
  {
    "url": "2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "da9d648ec455ee184dbc793ff675dea7"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "cbcd9500ebd0383cdb2985be8ad40958"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "f03856afe108ab7f8da00a1012af6a6a"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "d2411502d036e39d606248284a2057a1"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "7578d2a84214e86dfd113712c4212483"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "bf8e0b537d1ad304bbf2bee5f36a8009"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "33df725628bcfc414d3910a0f0082dc3"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "73394e66e950d2a55b9d2a7043a11976"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "d0b4283c1e1d9499c4f9a9f4a950a6b9"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "07e6e1e8c14e2722fb6832c15d07d791"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "3f673a1be560e652f0cfa9173c67240a"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "fc5002ee71099e8f831e7fa07986b81b"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "02ea61488b60e99070a8f5b73c7fadea"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "f82e6bdfb28ee074fecdc27db2dfc839"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "ca46110404c1ff92da631193c99fe520"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "5af61c01eca0c425d8dce7c3a76a1dd0"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "9cac982bef4b85913d98715f4789796c"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "adec1bb17515e87a0a7f832db2f06338"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "0f4899e7fb494fa2da2d1fbcbd61363f"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "547c922febad740c7b6d35134cc5cab1"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "4987e05897294204d7a2b86d0810dbae"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "5d03e7bc356298f50a6e2be77f7465af"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "c3d7dcdb94363ad68dfaf1a85681f78e"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "f2014e53d696b4a8ba0c0288fc1872a3"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "12579dbf8dddbe880b4d33d216c5df62"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "e7450427f703613f900c9ba6a16c68f9"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "4c8676643021bdd85d7cb4b4c569d655"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "cb44f54be250dd1549b4d0fbff939cca"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "f571dfd722a3373cd22354a8ae77cb41"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "b5ae47fd7c15736d431090f5670f6a1f"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "ad96ed1dc2aaabd3014badd01b1c79be"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "f87f05a32f2e6f6b0d132184f324f8e6"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "916ff5672de865df318d068fc5a163d1"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "47cc93b49fb19dc1fb4eb3d2a0745177"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "dc5b78ffe3429a2bd6be76f64d6d26f1"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "af82f6a59ec70129b816a746f6baad72"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "8f9dbe838050c435feb77900ead637a0"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "eaa826011eaba957a1f451cc54bd9b0c"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "17e6c9e39868a71cf08ffc0f5b427413"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "02259b24ae48f41a679cabad8e6af291"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "269b44142bbd0a0c5e4893240378c1ae"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "2071653f4f8147ecc24c8010b9595546"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "4df1657e137cb40d170388b6ae700ce3"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "4cddfc1db62bf3f575a1168a9ff60a77"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "30b0c21cb848fdd3d48f0db4a43b7625"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "a2df75e4e17b1d6ac3310cc7bebedafe"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "3439a52e4101e5445887e96a919dd4c6"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "5562f4b5efbdfc72652876280bd265be"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "2ab74e8881c544f64376c003b1ae1202"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "907ab84bb59e61c182fbdf016cd073ab"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "473bf686e2e8cd6a880bf59e891102d6"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "8a15e2fdd183cb6373394eecb94d9be9"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "c28b95f27435cb5ddbb0cf7883adb37f"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "64e58e434498df246811506d9e800ea3"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "f9e5b26387c28d9d773c0d98735e31b8"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "816d2c712cb8a745863ae4d753da1d35"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "ab68557dbd8c0d3b62447f928d8ba0d0"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "ffec39dae38bec97cc5404e1622a7cb5"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "ed82607113e4b12b6798f03a0b93ea47"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "1cc30704b704fef4d632d5eab6d7b10d"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "367e907ad5af972e939c3ef684c5613d"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "81aa2733bc882be91875ade35c1df11b"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "cc632365974f80f75140cc1407fe2c38"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "9ed88ac8f13ec2753d69ed0c935779cb"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "b5e9b2c1a5812b9ae9e52e6e0556d4d7"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "51d20cb999077423a6ef36c6fef0b9db"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "8907989e9fce9e1ae259ccb19d5f7dd3"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "fe481546f807600d79864484c8e390f9"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "c620b9c9f3c92d3defaec564c866101f"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "6bbbad05a8a23888d4491d388d79f982"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "1b5b4f2cb03906589888f0ca5ec8d5bc"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "0c8a6b1f3fde5f85eae72de489fc7605"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "fdcf5fe91b30d84ffa610dba2b581a23"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "5c5f7c1566e1e23b306a1fbd627af5c2"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "03e94c2848686b3d205fb2f7813fa18a"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "2eb2da02a64a7ca6ab4c5c845d6487e9"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "30b6f0c66ba076e461ac9e27718cc7f3"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "5781854a4fa547b8201997dacbe70106"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "9a6b7ef0e2324e4af3dd483d9fd9f43b"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "2935ff080cafcb279c5fa438a10cf6d2"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "5e29ba3a8d6f1ef51eb3dcc65ebee8ee"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "24ca86e9a69999c61018abba865642e7"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "5bd912dee16a3ec4340f995e8eb485a6"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "6846aa75690600252b7ee5ff6fa6aa6c"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "eaef00623ba4c8e6fd5346d7d3727c61"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "4ee93d079086de75506a5ea8dcec26f6"
  },
  {
    "url": "2.1.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "a298577bac7b35b49f1b13bcf11b0794"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "ed60927cbcbe6652ebe3a87ce54e1dfd"
  },
  {
    "url": "2.1.0/b2b-marketplace/buying-leads.html",
    "revision": "c9f792f5fe6317efb99e2218a0aa1f88"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "cc3ed942617a76ad363d9aef59ffebe4"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "94466885f8f1aee753b9206137ba2180"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier-microsite.html",
    "revision": "0b782c5679c6828060efece2c38777a8"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "4dc65778a98dc549c2b6221829236163"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "80a827ce77de19a4e578f3d566831e97"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "ae7bc83d00047051e18af0696763af85"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "0888656dde4e97164940edd0a400e3f4"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "6008808ff463c9641bd3b56801f83cda"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "2a80d3b7e53c71c3b656830ec4aa6959"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "204044b2d27be6298caf7172534f9dc5"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "f5864ba7fe987f0126f4ab43e966ed72"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "0cd85a37a8c098c7b1724a5234b784c7"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "a77d030d1557b59356abae2757d39d32"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "8649a65dce5fda68d44d7d368806435b"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "66e3b8df6da02308466d6359503eb7a2"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "8de962eb77dd3cb3ef565db3ce0cb873"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "9eb29b85a01ff821861b61709e78a99c"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "d795bc1a22d29cdac60251c87a25357e"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "4da58027ef4b4d3b19e692f1920473dc"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "2903d1620aca7fa261d46a86beeb85cb"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "ca74f46c4c3223c189d1dddade406fb1"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "0e241d806ab152d6cb0cce0edd037bd7"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "fbbb667cf1c89255db8ff5108298d55d"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "606780d972a52628d77144e97dce6d79"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "c9429d4e07bd669f1d7384492951f1a0"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "849c987cb4e14f5d43f7105610f2b3d0"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "b546b8a542c67deb2618212038a90ade"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "01e9a780299ee6e63bce79a9f2105094"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "e86f60d0ebac5cb32f215b73f57a375b"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "e0b7620c0a4d3a2fede2a330ec7227a1"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "960ee06de084a8300dd9bbb17f9d99c5"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "3ab47d46ada57dd4dcb262dcb00fa458"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "a6381cfb7f02c3bb448b1ad9b5bea961"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "9f083b4ce8e20a20f7fa50bcf7fcc5ee"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "3e28b71f6fd8a0f4e46b1bbf73a52a56"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "7e19f72ddeb9a4ebdd51060e3ba9d8c3"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "ffb3aa101f2308351c46a0286f985447"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "8324399e9c3f6da649638f8f97bde964"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "b50beb06189a08e641c7c8089dc323a6"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "954508ef45b7903dc0d7cf106c64b3d0"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "c69299d59aefde07e7f11efc5ebe88fc"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "2a97e1c5dd98640390ec34b16ddcc932"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "ed331b8329d527d2af7cacc62586ece6"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "169147aacc47a0a1c1cae4bd3ac14d8f"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "94136cd15829867fcbc74eef1f32bcef"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "e7b1036f80d36fb3bf3382df01494830"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "99cf42f60a8836d9f439155f082d580d"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "b1c61c87e221fc0bb66876978f191e30"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "daedbafa87a3752c5c52e73f36320280"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "68276fb660fa20eeac86e8ba4b6b78b5"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "caa1f92f81691c577ccb47e3add3658c"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "efa123df38e3139f2e797d4f785354e0"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "ee834269cc013ba9c3085afee7909911"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "2b87dddd819cf8525b0bc78dcf07923b"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "d9745b741d14f4028a424f9bd0250749"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "61567f109b56ecc68274145052083efd"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "5031eb96af01858064f74e7ec675ee0f"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "a08b08aba6b379202b1eea3437017492"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "9457d45f26ba18f5480d29bae8730c79"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "dbe14ae4f76590c07131b650857310bf"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "63897adcf53d99493c30c33938420004"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "a45265b77843dff2ae0775b5c31d839d"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "8a27201efebe032f89a642becd82c8b9"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "a03b1de0ec498de43fc2b6d6e101bbcc"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "46871c609e9fe72f91bb369131c163f9"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "8eeb2c3d6e3dc5abff12530c7b89f5b1"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "240c2d046741a2054cca493cbff6ace2"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "96b191b7c270238e8f49bfd4feb3acf3"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "53b9a3bd26a1a8c383c903dc97401093"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "3178ccf2b6ff9c134bd1840c261574ad"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "05473ec238e4c86768fdca3931f9f9b6"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "1e31560d04493e0863fa9d65e3bd4110"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "b31ad9717f4242228750590485425ab5"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "856fa1d3425822ed2935e6814c4374d5"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "f07f7a3626cfaf034ab83264d4314740"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "0e9fc4cbce9ff6c789a440f236307851"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "a1127151feb319cda091b7e7e226a502"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "57eba7cdfffd386561ad52608a1cc1cf"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "52aca723c7ede774f3dc11b6b50909f1"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "49fdf9c9efe50732783667dc2ff92c1a"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "2d9ef97af30afc5b640e11707f11821d"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "de5c79d0c5af9c3ce827487ab67cc7de"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "9ca11db2073b2e245155afa5824a917d"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "e3eec6bbf22fd5b9767270898f2ec181"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "2b6f6efa5fca4344931f70ec2329aae0"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "c92225af0390ea249c471c416765eba9"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "0367217b935278565af5f7ab8388558d"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "ef4a3a0855d308e75e63fae28b6d305f"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "188295d0db155965ee62c326882a9be0"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "3973d0b933d6308d13d9993b8936e8f2"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "a6744f381727c037a50f625ba81271f4"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "94b2ff87a1c6c7b4a55af98d7b91f0c7"
  },
  {
    "url": "2.2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "d446e1d8f30ebcddaf21e13df2a42a5d"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "43df245943634c7c8703c3fe314f04dc"
  },
  {
    "url": "2.2.0/b2b-marketplace/buying-leads.html",
    "revision": "71d426c110033cf4e4a24066af4e100a"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "4b6a77b76f0f4a5b58347a40c14d6dc2"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "ecf0dba99c00e8650579f9ca21df8888"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "2604f2c921b801d8dd50535ae2805506"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "ed6168b23b062fb0b0daa5616a1d08c4"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "78d10fd0c225b022575fdb5c9bc78cb7"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "b57c44d70e7599fadbcd84d1560ce650"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "2cf5ad4dfb4940caad772800a879de88"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "cfc0de2e16e4f76cfdecb022d1eeffc5"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "fa4abd7d90187603bd89cd408292e2c1"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "5b75e775f591af439b4924c45268c97b"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "51615af47dd620e102c0ca5d4d6896a3"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "34946cd7bd8053077c92b14aa42f80f5"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "3b877d8a4af6f728b0d4ca6ae0cc25e1"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "27954c76ef4792c220e2b6dfd0a0e2fc"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "c58eb002391ce692c141de07df38036d"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "f478ac64a106a6444b9f972692fcc005"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "fac00a760150cfd34e82c2ef1cde7a7b"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "5720895c750ab86f25495b1fa82c6fcd"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "2b9ec7a9ae429f95aeff78ad9cd23974"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "f77d577dd56274cc3e50f7ef608265ad"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "af5385a58192ef7fa52b9ccc77f8a35e"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "57181e02b80bc70abcf31ef257e89414"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "4e7272b556b1b44e9be1c99e20270d57"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "5cd036ca58a19a0d2cfb70b76a574c1e"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "b96c0e667432fb0067014b94c7993a45"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "bfcae88457ec0e6e3899f04972e7d088"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "143ff2842e804603afad7bd356110fa8"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "91f17d38e448c395579645729ef16e43"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "06931795792302b930a04be848aab9b2"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "73a65ff045c18bf48638f0125d833d57"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "ab998064596c9170d4a0938559d602a2"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "9fd2755a0033ab2d7d485b2af8e63c62"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "d472975a22c8a1d18ca939e831b7295a"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "71972ca2378fdc2a801a453c264462b4"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "2d817f43ae0db4ce76d69d15a93789ec"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "117bb699d682d52ad09351942d7204f0"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "4bbe3133f792f37be35e62023ef5a428"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "a897948a0895597864f3e5d277de25bc"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "dea6f3a5ddfbc760eab88c92819c33e6"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "8d8041480ed32b7cff6db3ee37906571"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "10dbddd6248e5029f5fe5f8bdd56f7b7"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "ca03f895d6aa2f0abceabf7218079d6e"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "a6b71c0b21f0bd166ed2a37d87d5e6ab"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "0167583e3377bb024aba43fec999778b"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "5d26f1d0dfa1d2e05bb56993f2b3d29b"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "c238dd3a3ee8cc34dc90501238a2d2bb"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "b8cbbb764dbe800768a10c9ebaa27ca1"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "936cc0d7516b4a4050a1cd4e54162280"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "edad645c2346d953b48f1e63e92e343b"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "e484eeaff67d6cb31e9cba78989b2000"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "f815467e1752a836a512af83d9dde8cf"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "e87f553f543d922680916cc5e642a342"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "edbe917fd31c3846e60e242c6f8b89e9"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "0deeb2b46e0f8edfd8786fb3002e3f69"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "102fd0fb60380f8494c655f735ee2781"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "da6d4e6875a9a287e53a3117e81b215e"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "3b8d807afd6d3f11abcd0bee0530792f"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "22c85292db360cbfab519755e734188d"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "9b1ee3783fda600d156abfe4f018a5b7"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "c38bfba6e246aa19df173ebaf89fe79f"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "46ba7d9c2a38f400ce6499b4e62b4340"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "3513e296d907d163eac6068703c2c5d3"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "4fc0ea2deadf1418b18758517dcc1127"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "a2a90b607c0bb01535847cbcea130a23"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "e3bea1975ba4c87068875753d2107b0a"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "cf00af747fc83bf2cc03b8db857198a8"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "15afef90692f0e7f84d303fcac5228f3"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "c6fbc98645dba3cc5bf15a14b5035943"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "fe7d1c2fb5db151ce538bf154d103952"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "69e927631228e6e3af8686cd3945833c"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "70e155d9cde7f4b8953023558eb0871b"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "df727c141156970ab58023f9607a244c"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "5848779601a61186fff789325685fb76"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "d14453304435cd730adebe5bd343f5f8"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "6359b2569274d7b1a5d80585946ffca1"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "0a2334a78961a2324598c3d35a2693ee"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "1773ae0b77a790192d80d6a3a864a9d5"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "3fe76622b18005590323ed7ce9160999"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "2591a2a3373e67f52b6f390fdba32b4e"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "8c8f72bf7a37d2b4d01868086af32e13"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "fa8a35e2088e70615c902bb26ff6121b"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "4f37a3ab2f1f3224e01b402c7b6bc1c2"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "37d527323278280ca5f409884306881c"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "4bd521da4cc8755e65a27994923aa80b"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "cedf9c424d7d01100533a10d939ee467"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "3f81d1a7dadead89d985cfed465f0dd1"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "3e83c5e54e278604ffbe2ae603fd4a4f"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "f78186436851f34ae3551b32f74c32bf"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "40d22d03147e1d1419daed7474dcd11a"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "a1e7dc2e781b14a32f3ed98bec2a0b19"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "56d6f142d6523c827958093461a6fe52"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "ae21fbaa2d17299f0ecede3343399057"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "1ed68998020ca9a88f8c246aa010d2d4"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "c48a31c61bf72f1e5e2008870b2c0de3"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "c23b121dfc5676d876764486abbf007b"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "9c30ee2744c7f37ce332e23812fe1214"
  },
  {
    "url": "2.3.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "bd193c1099922ba77984d83171656a01"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "fcf735556127afc535f466a25d7197f8"
  },
  {
    "url": "2.3.0/b2b-marketplace/buying-leads.html",
    "revision": "e773aa50e928110da745775c741d47e2"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "762e23329fe6d3c5530adc0f03da868b"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "41d9fe94bd8f7d7cb4301713f05f4b83"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier-microsite.html",
    "revision": "b446b6ccbc2b1c050b87909a74e47046"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "1bae1578ca2cda4246514502d31d7a4d"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "3f379c972f9b62b2e4d8da6c69b5ff72"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "91764e34a016f541b10d244258deec82"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "a76c212f03829fa52388a555ddac1629"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "6b56d8477f29678f01696e25f2a56d97"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "fac39040b27c5139f558dc3259e5abbb"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "0a57279f5617ce1e2d5658547f8c191e"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "d5d3ad9c8ded97ff46c752896aec7a29"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "5ea744002f7c44eaeb0e407635605670"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "6c9f35de5fc9755ade4ef6228a9a32d5"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "896a4b18167718db92177b91c0f51dfb"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "14d9c64462baa35809f7bb02b9723948"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "c7648b568c082322146fc2eadd000bda"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "cd311e62783a59a51a43aa48ac9b2d37"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "fd6a6581fca15079f14760456ca64271"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "100e56cb9400efa7517c9fe7c7ec4aa7"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "cf6c6c32afe0cd2beb75b984ce4ac739"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "d3e292419b4203c99cb3e1025331331f"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "df907117da2c7f2d7b11263549792658"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "e29070ec26d880479af4ff28758afba9"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "7be1e51271353822090f6a0f4f837f47"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "baf256602abecafe9b9760a66a84ae4f"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "8b24fa70c7fbb3e2c7988d17c08f5bf7"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "82af5491c7b2dcfd41dc2e01fc5cee5d"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "4e17434f5983f68fa3c9ccfb4fe0950c"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "63d2e61d724beccb23f4bf6a94a1ead2"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "b4596bde268524ae5a7c8bea7f01aee9"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "d2718fa38b5bb454e6ec3205f3c78d6d"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "9ae1238bb2ced13cc4c4cd4b427b3314"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "8a9ea4fc9c42f1476d2558b306ff9270"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "5be94618bc72c1b5b43593a849c669e7"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "97d1d7fb62fc28e1ceed4efe2e91286c"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "ed4a07464ef906a8b4afdcb10a4a616d"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "55ec9e415dc5759cd9d1beac055d2d1c"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "ed9b4703984298e1ab9c68774b0f72ce"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "64b77b907cab1f4ad95249b58cba05f4"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "2695620c217ef385d98ab47ceb8bb29f"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "3c174fb05df68475155cadd4637d6924"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "c6519e7fa826722decc05da6253d4983"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "70e05979b1b13fba237f6105b0d069b7"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "45d30e9f3fe0fab2e7aea6174d0c8330"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "aa82c07507c69f2328f5e6dd000c84ff"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "cfe53a48eaefe3f179dc0a7af8145346"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "21c879e672d5f7e9c02177e855e3e7b8"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "d848a6c9d0a7595601ed5314ea5220c0"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "69b697ad735abd019a029843a1b9352a"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "440409a4d2bef45e80ae528ba61c1e0b"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "8d6ed855b4099b34d32e3ceaee0fd54a"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "0b48c21228c40f05136a5537edbb9769"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "baca8bbab5a7f06b2d0756113fe93c05"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "141a9c9a4212004621c02b973eb12eef"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "d44088a36b7dc1c69956e0a4afe22294"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "f581dc5bbb683de75235db98cecdbff0"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "ae660253ef7db1b72e21e88afd56cb43"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "12bd4c6a81be3d86acf70117f3859cfe"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "774189a0447ba12e951554452b4d0e00"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "159fdef085f274bcea7567866a2ca1b7"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "52e0ae1629fcffe273667f2926e6d79a"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "e08ebad3a9bb7ff28b314ec6e0c04bc2"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "8b43311c8b35d0d5f3401c960e89da9d"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "aacf9017079954318b94d4e9e5d0b3cf"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "4d1b27594e41b9bf0f85f2d9dc8f5346"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "2782640084b1438bbe902731bde4ef6c"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "7b61c1f88819de09e4cb2f5c058886a5"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "d16493fed6ed37b610c0011f6f8e00d9"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "113ab9b29e6638ba1479ce682545a7d9"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "c0de299499aa855ad2a91bf2c9db8859"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "d303db6572628a56110fff8936019827"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "e98ee7e136a813ac0add23ca9e4f6602"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "d1812bcad1d4e4e45f30434c49acf607"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "5c4992828c36358d78f0ba5044ea2ce8"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "63dc1ca7a14c6eb2d8b72052699b058d"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "b023979ea2f92ac240d450952a392b34"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "c93772866d25e36970a1b8c20389cf61"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "a9ccf138de13ee5f2cbcee9eb586502c"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "ae5218dd0ccd3407d3c8596f89040e4e"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "07c465aca561eebe16bf8680d89bef39"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "e6ffdcacfd8502b458239710a312eac6"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "61dbf2e2cc6219399752f212a44d57bc"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "c7534819d91b0814d649896ef5053980"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "df7b31c958e61c6e795f0213e112ecd8"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "b68f2365d3433da76c238281dfe9e174"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "be9fd584676598f03fed8857a4127b74"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "b5f97afae8c7a98e5d8e461584703c26"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "15269bff3ad2306836d68069dedff34d"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "533d569fa5dc61534d7e62d8583a1e9b"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "ec88ba196ebe545ddf187f3137e57807"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "870168feda9472f673065fbb04c1f5cc"
  },
  {
    "url": "404.html",
    "revision": "ae2e53ffcb1aa53cc7d7c5d96dd067f7"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/1-godaddy.55b4e970.png",
    "revision": "55b4e970a9c3dc8ad0323287df5d0ad2"
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
    "url": "assets/img/1-registration-tenant.23ec4d8d.png",
    "revision": "23ec4d8d0f9cd5dc4c46e6cd608e1971"
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
    "url": "assets/img/10-tenant-profile.51c607d0.png",
    "revision": "51c607d0428a067abab9bd08d1119ccb"
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
    "url": "assets/img/2-registration-tenant.9e533e82.png",
    "revision": "9e533e8262e6ad59b0902f9eda82baa9"
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
    "url": "assets/img/3-registration-tenant.9607e800.png",
    "revision": "9607e8002bdaed83bfc906a0babc6a4f"
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
    "url": "assets/img/3-super-tenants.ee5f2d80.png",
    "revision": "ee5f2d8062c2bc3c5c83d0f7cf52196c"
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
    "url": "assets/img/4-edit-tenant.f02d2c72.png",
    "revision": "f02d2c72ef418610260a3f400d0f1453"
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
    "url": "assets/img/4-tenant-store.e62ae897.png",
    "revision": "e62ae89712b98e70d6397672d2680012"
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
    "url": "assets/img/5-tenant-dashboard.588b75de.png",
    "revision": "588b75de84f51e76408769813d9ab3d0"
  },
  {
    "url": "assets/img/5-tenant-store.8c547917.png",
    "revision": "8c547917f4f02bea0a77945fa386b383"
  },
  {
    "url": "assets/img/6-approved.5bb664b3.png",
    "revision": "5bb664b353389c3130f84ef1e227f503"
  },
  {
    "url": "assets/img/6-order.26515697.png",
    "revision": "2651569775d86c8d7a24dbe2f85e53c9"
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
    "url": "assets/img/7-invoice.c4dcad07.png",
    "revision": "c4dcad0794a4f3882ee22b4c71d1a5c6"
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
    "url": "assets/img/8-create-shipment.11fe78e8.png",
    "revision": "11fe78e8928b16ea5030352c880c997e"
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
    "url": "assets/img/9-product.a7b812ec.png",
    "revision": "a7b812ecaa43a00c778fa3e319dce691"
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
    "url": "assets/js/1.5f1cfda7.js",
    "revision": "2d150da23e8e6db7eb11ecbc28028670"
  },
  {
    "url": "assets/js/10.30b7d666.js",
    "revision": "08c10d3aef7b8f33f20f50cff8f96208"
  },
  {
    "url": "assets/js/100.b8aaa563.js",
    "revision": "f541a7065ef09befbf6d96dfc32baede"
  },
  {
    "url": "assets/js/101.209d465d.js",
    "revision": "79dfdf6323f87b49b0cb6a554d7795af"
  },
  {
    "url": "assets/js/102.8b4659a2.js",
    "revision": "e80aba9e198fbdc81113dcbf9eee185c"
  },
  {
    "url": "assets/js/103.37cba284.js",
    "revision": "9cf105a278a3e70039b7eb85cd5d9479"
  },
  {
    "url": "assets/js/104.3ae30762.js",
    "revision": "58c5b2e2db734859da268cdf5133cb93"
  },
  {
    "url": "assets/js/105.647f56af.js",
    "revision": "58747ab895f30881e69416234c625ba3"
  },
  {
    "url": "assets/js/106.0baa5fc3.js",
    "revision": "0565bcb17e62d4097e57d23afcfdd02a"
  },
  {
    "url": "assets/js/107.79465a3d.js",
    "revision": "d8c127cbcdb5b642cc5294a508f38bba"
  },
  {
    "url": "assets/js/108.d8b7a00f.js",
    "revision": "b6ded5f041f0541428c2dd756e19044e"
  },
  {
    "url": "assets/js/109.9ad8ef6d.js",
    "revision": "26d4db2611dbcdc5c8d141556dcba8db"
  },
  {
    "url": "assets/js/11.4843dd5d.js",
    "revision": "71cf569c63f7be134068356a11b59292"
  },
  {
    "url": "assets/js/110.3ad1aacf.js",
    "revision": "70ab4b68374e0b9db92c05ba919b8762"
  },
  {
    "url": "assets/js/111.8fe840c2.js",
    "revision": "bc920779c090cb3e068875687d6d265c"
  },
  {
    "url": "assets/js/112.c441af3d.js",
    "revision": "6be753b56b883e6985fbfd10c3e51ed4"
  },
  {
    "url": "assets/js/113.0e8583be.js",
    "revision": "6f7d571e5d4ab9e92d4221c7481d7311"
  },
  {
    "url": "assets/js/114.072ac01f.js",
    "revision": "0a0ce0a8b52fbfcf39d8fb6ae745331c"
  },
  {
    "url": "assets/js/115.d8c637db.js",
    "revision": "f7ac2f28f179a5fb2a95e93f8f72f790"
  },
  {
    "url": "assets/js/116.6d730593.js",
    "revision": "0d0b5479d283b5b0353bcbd11674b2ac"
  },
  {
    "url": "assets/js/117.20bfb5e7.js",
    "revision": "91ceae5e735fbd1e4c13fcd5696c8cc5"
  },
  {
    "url": "assets/js/118.83079d12.js",
    "revision": "a00909211cc36b9898cab2aeba654b4e"
  },
  {
    "url": "assets/js/119.f82994f8.js",
    "revision": "c1d1f534a5e4863e21ca5f78b7123719"
  },
  {
    "url": "assets/js/12.d385fe5c.js",
    "revision": "f69fbf27d801adceef686dd89780cf2e"
  },
  {
    "url": "assets/js/120.6fba7891.js",
    "revision": "907a63061cd1a7c16b4f109a62cf43ca"
  },
  {
    "url": "assets/js/121.e1f18c92.js",
    "revision": "9d6936ae181bc0e6eb114475beee9e9b"
  },
  {
    "url": "assets/js/122.d6215400.js",
    "revision": "02bcd1c7b2f2c1e52190908085cc4702"
  },
  {
    "url": "assets/js/123.902636b5.js",
    "revision": "572e7ba6f1d52266537e2c3e99e5227c"
  },
  {
    "url": "assets/js/124.c4a96790.js",
    "revision": "149c98e05bc5529007590149d93a69bc"
  },
  {
    "url": "assets/js/125.a20ed36f.js",
    "revision": "69a07e365ce657b3d685e9fbe32471a3"
  },
  {
    "url": "assets/js/126.4571e882.js",
    "revision": "6882ecb9205fb9a7e7d24e9eec8502bf"
  },
  {
    "url": "assets/js/127.b463e469.js",
    "revision": "8d1e5164fbd1045e713166170dace909"
  },
  {
    "url": "assets/js/128.c6c7ed11.js",
    "revision": "a900cb4eab24eb5b6bb9d31be1181c5a"
  },
  {
    "url": "assets/js/129.89db787d.js",
    "revision": "393b2db2959f679a57cf6856dea95035"
  },
  {
    "url": "assets/js/13.b3b050e1.js",
    "revision": "50929576f85265822c1a04d6a6b3833a"
  },
  {
    "url": "assets/js/130.b3d0db05.js",
    "revision": "db3609e41dfb05eac90a03a2720db132"
  },
  {
    "url": "assets/js/131.f7a41997.js",
    "revision": "5fa090cbb471d20ff4f2866643dd7b65"
  },
  {
    "url": "assets/js/132.aea8fbc6.js",
    "revision": "a70812f2f7ca68d0538544bf4008db5c"
  },
  {
    "url": "assets/js/133.ec6bb876.js",
    "revision": "b12119a92ea18327ad3fb9431fd40be7"
  },
  {
    "url": "assets/js/134.b1ab37ce.js",
    "revision": "68dbc9c9ef7a947b4a2fcb189a297e78"
  },
  {
    "url": "assets/js/135.75a09121.js",
    "revision": "2cd03d5e1ddfb50c7aa8a3e2c5bd5ebf"
  },
  {
    "url": "assets/js/136.1cbfb1b4.js",
    "revision": "fefdb79cd293a454e758b236575f4d07"
  },
  {
    "url": "assets/js/137.d2d62dcc.js",
    "revision": "0ec30bbb876fc2682956fd2fbfe71dd9"
  },
  {
    "url": "assets/js/138.cc7a53ba.js",
    "revision": "281a77f970d21e4c43c658ffbd70fb88"
  },
  {
    "url": "assets/js/139.10c92f3e.js",
    "revision": "b4a494ef48069a860b7f9d130c9a0540"
  },
  {
    "url": "assets/js/14.cb69f5e0.js",
    "revision": "c6d53963d3b6dc8a26a5efe3830413e7"
  },
  {
    "url": "assets/js/140.8cecc7fb.js",
    "revision": "de863f2d7499a0d83c98dd22d05d938b"
  },
  {
    "url": "assets/js/141.22c8c80b.js",
    "revision": "04390e31ab750314dbf810ace638f281"
  },
  {
    "url": "assets/js/142.9bd223c9.js",
    "revision": "e97d8994bf73adbffa07984058581180"
  },
  {
    "url": "assets/js/143.318d76df.js",
    "revision": "a654ca631db87eecd969edddc0a7f60b"
  },
  {
    "url": "assets/js/144.826af3b1.js",
    "revision": "13c5c40bd3025b7c8a927b76d9f3acaa"
  },
  {
    "url": "assets/js/145.e8154a21.js",
    "revision": "4046152616649232c7ab13a1bebd38d1"
  },
  {
    "url": "assets/js/146.b8836891.js",
    "revision": "6f3f92278525d78d953492b8aee7db78"
  },
  {
    "url": "assets/js/147.2a4c319b.js",
    "revision": "c95e434c174c02fe93ea776e361eb16d"
  },
  {
    "url": "assets/js/148.96cae79c.js",
    "revision": "df472fbc0fe0aa5542b8bb02a47311ec"
  },
  {
    "url": "assets/js/149.4e8b5853.js",
    "revision": "10eec0de99d8f045e3bb4b5303c53587"
  },
  {
    "url": "assets/js/15.e7155d99.js",
    "revision": "1094afd924556e49faa76204ef60b1a7"
  },
  {
    "url": "assets/js/150.81a94cbd.js",
    "revision": "bdab048929ce421affeab9825f019f2b"
  },
  {
    "url": "assets/js/151.91da3f5a.js",
    "revision": "1b28207a20bf5f68447ba75ee997a42a"
  },
  {
    "url": "assets/js/152.9cdbf8d7.js",
    "revision": "4fa2bd4ce9eeb7a8a6e20aaefe017a6d"
  },
  {
    "url": "assets/js/153.c89c26d6.js",
    "revision": "cda6498860c70fc4410d9cc9fce7594e"
  },
  {
    "url": "assets/js/154.3cb14f66.js",
    "revision": "0811ef34188592e8340e81af4bf6f595"
  },
  {
    "url": "assets/js/155.601e8c0c.js",
    "revision": "3ba1a0dcde93e57902a67779ebb84344"
  },
  {
    "url": "assets/js/156.7f8c5562.js",
    "revision": "49ac18f5d5c257933b263e942a9c4ca4"
  },
  {
    "url": "assets/js/157.9981a9f2.js",
    "revision": "b41b2f03778617bc0b4abe8a9e97bcb2"
  },
  {
    "url": "assets/js/158.93207764.js",
    "revision": "f9f82441197d5663cd5f923f51852e81"
  },
  {
    "url": "assets/js/159.3c8d5169.js",
    "revision": "eb5c23937ba746b8b9b6d86d88ac717e"
  },
  {
    "url": "assets/js/16.bcbcf90f.js",
    "revision": "59dd207542a18f5cc09d47adb7767b0b"
  },
  {
    "url": "assets/js/160.e91a894e.js",
    "revision": "c36cca85a94dac63ebcced549a2769be"
  },
  {
    "url": "assets/js/161.4a79ebd3.js",
    "revision": "619db2462d8929c70d6af5e6daf4f951"
  },
  {
    "url": "assets/js/162.d05bb704.js",
    "revision": "9f0cd19497bcb4d4cd0354011b84416c"
  },
  {
    "url": "assets/js/163.3947c56c.js",
    "revision": "4c7eaff36e2891f9996a3dce7e805c42"
  },
  {
    "url": "assets/js/164.f15aaf43.js",
    "revision": "60da151d5630d81ce3439428c87064c8"
  },
  {
    "url": "assets/js/165.ad78524d.js",
    "revision": "956e7075d2822f8123ebe506322225b2"
  },
  {
    "url": "assets/js/166.2d40318f.js",
    "revision": "08ab56eae83e100a38811b6617b376fc"
  },
  {
    "url": "assets/js/167.145a69da.js",
    "revision": "5ab8c90066bb161835ee2a2663da4491"
  },
  {
    "url": "assets/js/168.d03199a0.js",
    "revision": "245b7bb352c39098e9006d5756ea6392"
  },
  {
    "url": "assets/js/169.0d147af8.js",
    "revision": "f80f13cde7d54a4d248f8045a3a1fcd2"
  },
  {
    "url": "assets/js/17.4a3d9209.js",
    "revision": "04995789032fc4214c88688d3991317b"
  },
  {
    "url": "assets/js/170.d3261ca6.js",
    "revision": "8b79dc7e7c8de5373f276448064aafec"
  },
  {
    "url": "assets/js/171.f6c7e728.js",
    "revision": "80e89523dea08ecb362d09d0521fc975"
  },
  {
    "url": "assets/js/172.05f34018.js",
    "revision": "686ce50f4903bbc4d2a32ab4b0c258fd"
  },
  {
    "url": "assets/js/173.3f560071.js",
    "revision": "75e524471d667225d2247b99e7251dab"
  },
  {
    "url": "assets/js/174.61874693.js",
    "revision": "c924b41c5e964260a415c8c160560788"
  },
  {
    "url": "assets/js/175.aa209f16.js",
    "revision": "bda72ff1f040e376782a0937636cc4f9"
  },
  {
    "url": "assets/js/176.869c3f17.js",
    "revision": "b6855d355e87b5556a53e43028ec53fb"
  },
  {
    "url": "assets/js/177.54df18ea.js",
    "revision": "edbe28402f6078e908f065769adeca03"
  },
  {
    "url": "assets/js/178.e7bd2c52.js",
    "revision": "d1d83e416626774555040e9803d3ae4d"
  },
  {
    "url": "assets/js/179.e564a721.js",
    "revision": "0038b421d3559f3f2b7eb6a61a77b200"
  },
  {
    "url": "assets/js/18.017782be.js",
    "revision": "ff905d333cd3913431742643c5728487"
  },
  {
    "url": "assets/js/180.ecbe37c5.js",
    "revision": "efd7c662027fd98518d2923f0672bd7c"
  },
  {
    "url": "assets/js/181.f3a2204e.js",
    "revision": "e08fb62debc2d160d76b4a8f5e440dd1"
  },
  {
    "url": "assets/js/182.c7f5555c.js",
    "revision": "dd055067cae7a6b02cc0543e9e38b7d7"
  },
  {
    "url": "assets/js/183.aa785cd7.js",
    "revision": "3aace17cf00fea0a6ce9905e56d51c5e"
  },
  {
    "url": "assets/js/184.1c558d76.js",
    "revision": "e332d8a5a08796751cce79ae41d8235c"
  },
  {
    "url": "assets/js/185.a0d3a1ef.js",
    "revision": "cd7d18a74ac8ab5a8b1c97a4041eaba6"
  },
  {
    "url": "assets/js/186.a79c3769.js",
    "revision": "575e60e177d7d5eab40542c8336675b2"
  },
  {
    "url": "assets/js/187.c1a49eb3.js",
    "revision": "78a7b9bd5ff337c284a993ebf0b65f66"
  },
  {
    "url": "assets/js/188.c7a83861.js",
    "revision": "ab570e3ad9f5f5c631190c3eafb200d0"
  },
  {
    "url": "assets/js/189.4ecde11f.js",
    "revision": "a1f7f0a54c8ece1b9b713539077729f2"
  },
  {
    "url": "assets/js/19.df6df698.js",
    "revision": "1c4f0a17bbac0e534955584868f5ff07"
  },
  {
    "url": "assets/js/190.d6f685a1.js",
    "revision": "9b93861740f192f7c322c81c90e8024c"
  },
  {
    "url": "assets/js/191.b661f184.js",
    "revision": "4626189eb1321e03e60dd656296cdbcd"
  },
  {
    "url": "assets/js/192.4a2ebd9d.js",
    "revision": "3b20dd7f2b898360c9700ce595a492ef"
  },
  {
    "url": "assets/js/193.af4a407a.js",
    "revision": "4883f8cf3c5d278f9f10decc8252bd08"
  },
  {
    "url": "assets/js/194.b0bd6aac.js",
    "revision": "a57b351a9bdd290aba51df88b92f35ea"
  },
  {
    "url": "assets/js/195.4600755a.js",
    "revision": "ac745d893edd4eafd357e5d2e0bd3446"
  },
  {
    "url": "assets/js/196.462026ac.js",
    "revision": "95c7ec0a59ebcc766e170b03de1cc61f"
  },
  {
    "url": "assets/js/197.d1436ccf.js",
    "revision": "61430201acbff225c36dc0ecadacd6cf"
  },
  {
    "url": "assets/js/198.697f6729.js",
    "revision": "7770b111a07bc8e94785193150df50f3"
  },
  {
    "url": "assets/js/199.4f63be05.js",
    "revision": "dea3e85e2e2c5eaa8b250a6e71a0e36c"
  },
  {
    "url": "assets/js/2.8ce3e609.js",
    "revision": "d2254af410291190222524e432b1e143"
  },
  {
    "url": "assets/js/20.9f038946.js",
    "revision": "73399c37227c044a0794cd5c1c468526"
  },
  {
    "url": "assets/js/200.0dcb6564.js",
    "revision": "33bed74b5a697ece5da8fb57e23472be"
  },
  {
    "url": "assets/js/201.448bab62.js",
    "revision": "c2fa911d789d55928246cdb1db43d2f5"
  },
  {
    "url": "assets/js/202.660fc741.js",
    "revision": "7189382a1f956002f1587b7191aa9622"
  },
  {
    "url": "assets/js/203.1f628bb8.js",
    "revision": "c14809aa2112d42d7f3b55c2269ac57a"
  },
  {
    "url": "assets/js/204.e665a356.js",
    "revision": "72615be5749ff564a44afe73a44ca49b"
  },
  {
    "url": "assets/js/205.b927cc49.js",
    "revision": "123e8f9e8e0cee437ae5089fe7c1c5f5"
  },
  {
    "url": "assets/js/206.3d536aaf.js",
    "revision": "550c475bd899937c9129a8638e24c37a"
  },
  {
    "url": "assets/js/207.7b581029.js",
    "revision": "f5981e4f1053f2120c84cb74ac9809be"
  },
  {
    "url": "assets/js/208.e1840304.js",
    "revision": "6ffe67ad7711a6ff12d8eb19ab029803"
  },
  {
    "url": "assets/js/209.5442c2c1.js",
    "revision": "5baf664477adb2cc1d3403d9e05d44f1"
  },
  {
    "url": "assets/js/21.c03fbfab.js",
    "revision": "69b6a11f7929ea78f8bfe6eab0f6445c"
  },
  {
    "url": "assets/js/210.3ac20730.js",
    "revision": "f9ef29f8dbe41e7c35f52ecf3da22d7e"
  },
  {
    "url": "assets/js/211.9289916b.js",
    "revision": "7cf797300889c5206d8962b30d8c57e3"
  },
  {
    "url": "assets/js/212.19b7bcb4.js",
    "revision": "a7e86cfcd3b7b72759a24eee9c4d21d5"
  },
  {
    "url": "assets/js/213.8fd13a6d.js",
    "revision": "9892f5488f3d1cc83618a6784d364d75"
  },
  {
    "url": "assets/js/214.21e2dfa2.js",
    "revision": "49cc3de96e96d43ee90d4740037e656c"
  },
  {
    "url": "assets/js/215.946c22ce.js",
    "revision": "5d7e2ac05f700bc1f6951b842f0da35f"
  },
  {
    "url": "assets/js/216.b001798d.js",
    "revision": "67171db86eb7d82481a47e4d4bc6c2cf"
  },
  {
    "url": "assets/js/217.5a4301cf.js",
    "revision": "cba4654d34e184e8d4c3bef423f28ce2"
  },
  {
    "url": "assets/js/218.d3935339.js",
    "revision": "c2298220a6ef5871874fc636df812ac8"
  },
  {
    "url": "assets/js/219.ad0c2bf4.js",
    "revision": "c8b740d36ca9c2c81241f3c59e7ee42d"
  },
  {
    "url": "assets/js/22.08d38d17.js",
    "revision": "0e09b91b620c8d6210eea4ca2ce40e13"
  },
  {
    "url": "assets/js/220.f34d15e5.js",
    "revision": "2c2669e274519679fcfa289f30cbcb77"
  },
  {
    "url": "assets/js/221.0bdd307a.js",
    "revision": "1413654dee4a0d0d93415520dc9a8436"
  },
  {
    "url": "assets/js/222.11c6d5ed.js",
    "revision": "ef2023da2c922d5c38f93e66ea7f9134"
  },
  {
    "url": "assets/js/223.98a0be57.js",
    "revision": "07bfb57f337fd9081483168174a8e645"
  },
  {
    "url": "assets/js/224.aa4506a1.js",
    "revision": "b187fab510d570ffb38c351f4c1d835b"
  },
  {
    "url": "assets/js/225.68907d81.js",
    "revision": "a411764c8cf262dda0bcdde802e41a70"
  },
  {
    "url": "assets/js/226.1b4a0265.js",
    "revision": "b0bdae8b33957e8d7dbcb9c6c4929c8a"
  },
  {
    "url": "assets/js/227.1c7b8f2e.js",
    "revision": "4de52c36dcf475d32e47bc949b70f5d1"
  },
  {
    "url": "assets/js/228.c512b10a.js",
    "revision": "af549c2b386f57e836e780947321c3cb"
  },
  {
    "url": "assets/js/229.03d09118.js",
    "revision": "454db51d995020b851975bf94413a88a"
  },
  {
    "url": "assets/js/23.9fe45373.js",
    "revision": "0ec935a0de9b108cda07647c9a9c8d95"
  },
  {
    "url": "assets/js/230.59711a25.js",
    "revision": "e7c04ad639b468373b4336c63852c146"
  },
  {
    "url": "assets/js/231.92b674b8.js",
    "revision": "218c1dd63e43068c84574f9f1f10d9b5"
  },
  {
    "url": "assets/js/232.a2a7423d.js",
    "revision": "2365c4d0d0da01d44caa6f5a0808e612"
  },
  {
    "url": "assets/js/233.e690eb88.js",
    "revision": "074aa4ec9b1acfbc0b64891161c9f150"
  },
  {
    "url": "assets/js/234.63c1693d.js",
    "revision": "b57e59fe4dd59b43f5995813c3c6e6f6"
  },
  {
    "url": "assets/js/235.ded42318.js",
    "revision": "655251293222ede60b7ea24211563d63"
  },
  {
    "url": "assets/js/236.5d95fadc.js",
    "revision": "95e105adc7056c491356b72e2b53700a"
  },
  {
    "url": "assets/js/237.c260f7b0.js",
    "revision": "a5a2a979724fb7c8eed697ad91f19484"
  },
  {
    "url": "assets/js/238.340b82cc.js",
    "revision": "3165d3f8a52ccf0776fc330e30f7a2e4"
  },
  {
    "url": "assets/js/239.47080709.js",
    "revision": "302eae272a7fefc9ac9bfb29222742a7"
  },
  {
    "url": "assets/js/24.bc726608.js",
    "revision": "313892ec4f8da88646ab73e1d3060ffe"
  },
  {
    "url": "assets/js/240.e41ca01e.js",
    "revision": "409b629d8bdab62063c53ed17e779297"
  },
  {
    "url": "assets/js/241.79892137.js",
    "revision": "d384de873e2e7b2e145a04eb41a30577"
  },
  {
    "url": "assets/js/242.668dfbfd.js",
    "revision": "a2821f91bddcf22f3dc7723c96499337"
  },
  {
    "url": "assets/js/243.eebd668f.js",
    "revision": "cebb946c03de5e1b92ede6300d36f6c5"
  },
  {
    "url": "assets/js/244.cfd4e79e.js",
    "revision": "2fd53e1ad95de3e828bb4595539c8956"
  },
  {
    "url": "assets/js/245.69cbc8d4.js",
    "revision": "fd938c53ca316c5ec041e758cf9b5576"
  },
  {
    "url": "assets/js/246.8b386af7.js",
    "revision": "ed22c8ffa5081bfe5a7b1a8e22a9c40e"
  },
  {
    "url": "assets/js/247.18b429cd.js",
    "revision": "2ce56c888ef36548e142a8b276691993"
  },
  {
    "url": "assets/js/248.fde72168.js",
    "revision": "1f50a21b0ffb95512dd9fcf48f11fa1f"
  },
  {
    "url": "assets/js/249.40adfac2.js",
    "revision": "c4ce516bc26835b3c109164ad25b26f0"
  },
  {
    "url": "assets/js/25.2095bde2.js",
    "revision": "ba00a8b38da0fd6476df52133206eead"
  },
  {
    "url": "assets/js/250.64a1bc80.js",
    "revision": "95c5c54ba3899cc9490cc01324d9212b"
  },
  {
    "url": "assets/js/251.63285546.js",
    "revision": "ee8af1cb1980f7e544624cf0dc811630"
  },
  {
    "url": "assets/js/252.a1a2f624.js",
    "revision": "d8fc5776f2f37b811cb421e700acc455"
  },
  {
    "url": "assets/js/253.39866ad4.js",
    "revision": "84366db7f585afd9f5bcd19820f9ca9b"
  },
  {
    "url": "assets/js/254.1d1d4db0.js",
    "revision": "adf574584cf7af7db459b4cbca3af134"
  },
  {
    "url": "assets/js/255.15dde094.js",
    "revision": "5ec35ea44d1250d536df34b40ddf6ab8"
  },
  {
    "url": "assets/js/256.01fa664b.js",
    "revision": "980e1121479906160947c209c6a1d97b"
  },
  {
    "url": "assets/js/257.101404c1.js",
    "revision": "4d2718bae94045bb74ab26e83334cbae"
  },
  {
    "url": "assets/js/258.98f1f4d5.js",
    "revision": "4def1a62544802dbbc2df5a8140fc2c5"
  },
  {
    "url": "assets/js/259.1497c082.js",
    "revision": "b729b88c100e647301519d22b5a07ae1"
  },
  {
    "url": "assets/js/26.56178fd2.js",
    "revision": "1239cb46c7234ec65bb3cff8cfec83b9"
  },
  {
    "url": "assets/js/260.d5740392.js",
    "revision": "d6cb3a01a90350368578e9a43fe1dbca"
  },
  {
    "url": "assets/js/261.1af12d65.js",
    "revision": "f943a1dad2b1a3c568ac4f07d776ffc4"
  },
  {
    "url": "assets/js/262.94446577.js",
    "revision": "e79d852debae9cb98af6d575ae39d4af"
  },
  {
    "url": "assets/js/263.f25d9193.js",
    "revision": "4bca582c0e4507c94b8be6d190e16af0"
  },
  {
    "url": "assets/js/264.e9873dc8.js",
    "revision": "446745c27bd574cb162d2b3744fd9ef3"
  },
  {
    "url": "assets/js/265.68438455.js",
    "revision": "08a52a64d5a9766b87ec99c78450db6e"
  },
  {
    "url": "assets/js/266.97c793bf.js",
    "revision": "dc5c208a67a4c0c373948d5c95192ef9"
  },
  {
    "url": "assets/js/267.7edf93e1.js",
    "revision": "655f1e0d5fe12a0230b4689c6918dbf2"
  },
  {
    "url": "assets/js/268.31d8345d.js",
    "revision": "2c8050facd5b9cc5c0588d690a4ae6ce"
  },
  {
    "url": "assets/js/269.171d2131.js",
    "revision": "9f640a3b7d7e8f42d55af5e7695a5cea"
  },
  {
    "url": "assets/js/27.a3a66b86.js",
    "revision": "93f7ff4dcb134056a59e949b52c81a11"
  },
  {
    "url": "assets/js/270.18229dd7.js",
    "revision": "af7f3290c276076d10677e6de962bed1"
  },
  {
    "url": "assets/js/271.420c8f86.js",
    "revision": "cba2af130761d12a78438afbd8f3e7a5"
  },
  {
    "url": "assets/js/272.534d191c.js",
    "revision": "61c75cc50a5e864973f4a8c1b1e437eb"
  },
  {
    "url": "assets/js/273.fe12d1f0.js",
    "revision": "c6c46a6db6586b4f0a7f64d6826974fc"
  },
  {
    "url": "assets/js/274.9c583936.js",
    "revision": "20c57fb420e306a62bed9653511e24cb"
  },
  {
    "url": "assets/js/275.9843421c.js",
    "revision": "71a07e5c454df4cdf5f1167f7c6b9e73"
  },
  {
    "url": "assets/js/276.75b167c1.js",
    "revision": "7a5467606ee1f8dbe87b5d4021fb9592"
  },
  {
    "url": "assets/js/277.28b26b6a.js",
    "revision": "6491253e9f57cbf4210da3354db99613"
  },
  {
    "url": "assets/js/278.8a110d28.js",
    "revision": "3f0d9526a64f313fc01e599d58e7262e"
  },
  {
    "url": "assets/js/279.c8e966fe.js",
    "revision": "3cc1b79d32e4051e3acb90ce8fa11eaa"
  },
  {
    "url": "assets/js/28.453a8a40.js",
    "revision": "4407b6bc29af90e4b1b899713e4fc218"
  },
  {
    "url": "assets/js/280.1b0a03dd.js",
    "revision": "091389174301eba50739b7293288dedc"
  },
  {
    "url": "assets/js/281.fee85d9d.js",
    "revision": "020e17de9e7e83b5d1b6f96faa160a5c"
  },
  {
    "url": "assets/js/282.84b0fb0b.js",
    "revision": "267f45a3aca4acc71a60ccf6c154bfec"
  },
  {
    "url": "assets/js/283.8b18b420.js",
    "revision": "197557a0256c0cc650007a843fca4f1f"
  },
  {
    "url": "assets/js/284.d690b23e.js",
    "revision": "02845f9e1523b50758291b47b4410237"
  },
  {
    "url": "assets/js/285.3f13a04b.js",
    "revision": "f4db0e871fb970b5e42b1472279f7d24"
  },
  {
    "url": "assets/js/286.2ccbb7e1.js",
    "revision": "0c793a88f3ab55726b0d606eb3087c02"
  },
  {
    "url": "assets/js/287.f1a05fd6.js",
    "revision": "05dc6f1470cdf8a521b2befd8266f8a0"
  },
  {
    "url": "assets/js/288.873aa6af.js",
    "revision": "125ada49ab6c8727615e331339ede2f0"
  },
  {
    "url": "assets/js/289.0999003e.js",
    "revision": "b975c376afaaf1d43c5e9b44b1ea506e"
  },
  {
    "url": "assets/js/29.7389dd71.js",
    "revision": "cbf41c9890f3ada4ff4916cae98c8357"
  },
  {
    "url": "assets/js/290.d2484527.js",
    "revision": "85fd44b99e28546e796b6bb71e5f7cb9"
  },
  {
    "url": "assets/js/291.abac165b.js",
    "revision": "41ae7d8d4a215dc8f1387d1386229829"
  },
  {
    "url": "assets/js/292.3dc80946.js",
    "revision": "05aab6588b8ab71a622ae0ffc48308d2"
  },
  {
    "url": "assets/js/293.caf5530f.js",
    "revision": "df7695c2c66b7f66fc8903901a738c76"
  },
  {
    "url": "assets/js/294.7ea060d9.js",
    "revision": "ebae1c05ba529674aed328901bc850f8"
  },
  {
    "url": "assets/js/295.6c405aad.js",
    "revision": "4030ae90cb1e1a777dcc7cb8c130ca20"
  },
  {
    "url": "assets/js/296.4b5eaf8b.js",
    "revision": "d192e831dfba3eabffaba6ed5a0f8ce7"
  },
  {
    "url": "assets/js/297.5ea85385.js",
    "revision": "0c36e390eb2c9653a8b88b2d64d46359"
  },
  {
    "url": "assets/js/298.61356c65.js",
    "revision": "a08b2e913f97e20ae26437f2e8697c85"
  },
  {
    "url": "assets/js/299.abedf9ba.js",
    "revision": "0909662f0f3e0eb1658d4623c8051363"
  },
  {
    "url": "assets/js/3.b8e1eea9.js",
    "revision": "1053328d272a0b82be13080ddef47fc6"
  },
  {
    "url": "assets/js/30.2b5fbd36.js",
    "revision": "c12e99668fd74f35297d0602991140c7"
  },
  {
    "url": "assets/js/300.d42b0e0a.js",
    "revision": "7e9034f4f2794a37f80393840178fac3"
  },
  {
    "url": "assets/js/301.2a2c383b.js",
    "revision": "415ed43edbc9af3398d4a730984f92be"
  },
  {
    "url": "assets/js/302.53247e37.js",
    "revision": "1233fffa80792318b4ed1f5522b71556"
  },
  {
    "url": "assets/js/303.82af884f.js",
    "revision": "894a3be699eaa88261940e4dbdba3a80"
  },
  {
    "url": "assets/js/304.afa2c6e6.js",
    "revision": "665f26ed8645c60045905d013e1ec9b5"
  },
  {
    "url": "assets/js/305.939cb92b.js",
    "revision": "9b6205cc51d463d52e45e470ab1680d0"
  },
  {
    "url": "assets/js/306.2d8fa10c.js",
    "revision": "a56e1719f01136a33ac8a3907d1ff006"
  },
  {
    "url": "assets/js/307.80d268ae.js",
    "revision": "898c05db2fa94de90e2f2fcdc0342d67"
  },
  {
    "url": "assets/js/308.d8d71333.js",
    "revision": "e15033abac07579cc02323f211cc3224"
  },
  {
    "url": "assets/js/309.245b2d65.js",
    "revision": "38c4442c31e83c06c32c6f9d6db326f5"
  },
  {
    "url": "assets/js/31.c63e2081.js",
    "revision": "3906c5bbd9f0f8149923373774020ce8"
  },
  {
    "url": "assets/js/310.3884f0bb.js",
    "revision": "03e87cc259cf2b5e72324cda8292e050"
  },
  {
    "url": "assets/js/311.6176e4da.js",
    "revision": "0ce31fd3cc5b0502be19af49e5d43eea"
  },
  {
    "url": "assets/js/312.e2f89329.js",
    "revision": "9ce7f0373c64668743f2ad68a7269975"
  },
  {
    "url": "assets/js/313.c13a6b1e.js",
    "revision": "19b1931d471b6313430fc785ec4e1742"
  },
  {
    "url": "assets/js/314.45a733f0.js",
    "revision": "87bb61e65c4dbc99e7ba19e09d0fb420"
  },
  {
    "url": "assets/js/315.1ab72499.js",
    "revision": "3f07f35053ebc3fa3bde18882a15ad0c"
  },
  {
    "url": "assets/js/316.b3b9e369.js",
    "revision": "b8aa22de3bbc2b2d67a6208efc0fba22"
  },
  {
    "url": "assets/js/317.43b673f4.js",
    "revision": "6f5eff7561e6a3d24be76b06a467f9dc"
  },
  {
    "url": "assets/js/318.c22ba231.js",
    "revision": "5ff6ecfdc8fdc3656fd7c6fd16172379"
  },
  {
    "url": "assets/js/319.c97839d1.js",
    "revision": "ead3450c7082e2cc1bfbabe6743bf044"
  },
  {
    "url": "assets/js/32.c800d323.js",
    "revision": "894eddb87ccba437124d265912a9e349"
  },
  {
    "url": "assets/js/320.2279547c.js",
    "revision": "d427d14db40df84c8c7a86a957432262"
  },
  {
    "url": "assets/js/321.9aa9b029.js",
    "revision": "0724924c47577a7cff6a7e337dddebe7"
  },
  {
    "url": "assets/js/322.7fa76de7.js",
    "revision": "1d46419a31eae18581596a4d3a71782b"
  },
  {
    "url": "assets/js/323.1b696b6b.js",
    "revision": "17e01b02046fce5716098db77a031ba2"
  },
  {
    "url": "assets/js/324.4bc0814f.js",
    "revision": "ecbcc4a4d4bd3936c8bbb6e11a757bd6"
  },
  {
    "url": "assets/js/325.4b6979c7.js",
    "revision": "4d0d54388d09111136353008e3113069"
  },
  {
    "url": "assets/js/326.b8e427a8.js",
    "revision": "5704259acbd657068ad7a5bbf20c3820"
  },
  {
    "url": "assets/js/327.2db01bfe.js",
    "revision": "bfe6a059ab3938d2079ad49a43c8e3fb"
  },
  {
    "url": "assets/js/328.f8cfaa2e.js",
    "revision": "fbf1015f41c8c71d59b3f202aa0cc267"
  },
  {
    "url": "assets/js/329.6c5a5b43.js",
    "revision": "9eda08b799959d5f9651ff8c4f54d7c2"
  },
  {
    "url": "assets/js/33.c457fa86.js",
    "revision": "697fc3d81f4e44dc2af648fc38a6a8ab"
  },
  {
    "url": "assets/js/330.7dbdd0d5.js",
    "revision": "a9c75ea964046f7c0ea19de977c0d1c0"
  },
  {
    "url": "assets/js/331.1406b6d7.js",
    "revision": "e293fa0b3e0c3671c149d69b5bd1788f"
  },
  {
    "url": "assets/js/332.2c2d73a4.js",
    "revision": "a6c95fc2c3dba316c7669788b10fce26"
  },
  {
    "url": "assets/js/333.01e32a73.js",
    "revision": "6d7c10009ee0e1ed60325321b0e352da"
  },
  {
    "url": "assets/js/334.bf55636f.js",
    "revision": "89adea80c67f12edabd49cec4ae3e9dc"
  },
  {
    "url": "assets/js/335.ccfda4bc.js",
    "revision": "b8d21a7225ce125eb23abcb0713aad3a"
  },
  {
    "url": "assets/js/336.d1985e6d.js",
    "revision": "c8a67d453866591f492122338c3509a2"
  },
  {
    "url": "assets/js/337.74382a6c.js",
    "revision": "a98f33d1a5cd964293f1ec14853d614e"
  },
  {
    "url": "assets/js/338.a052dfdd.js",
    "revision": "40a93c20a7db8eaf70205e838fb77046"
  },
  {
    "url": "assets/js/339.5a1fd704.js",
    "revision": "4e5a8aac7d0d37e6fe24c4fab3e67234"
  },
  {
    "url": "assets/js/34.7c542b75.js",
    "revision": "9617dc334ef8a5460e11a15a364ed935"
  },
  {
    "url": "assets/js/340.01ba1af2.js",
    "revision": "53f2be3558ee354663b68a528d9e45b5"
  },
  {
    "url": "assets/js/341.a7c517cd.js",
    "revision": "321b91ab68b90c2aeaabbaf137107910"
  },
  {
    "url": "assets/js/342.8c5ff847.js",
    "revision": "37f45cfd77d3a2937894ce42e4a21e3f"
  },
  {
    "url": "assets/js/343.2ab84fe6.js",
    "revision": "71bbb728bd7ccc9f88f97318bacb66b1"
  },
  {
    "url": "assets/js/344.da4d0354.js",
    "revision": "a6c57e5ed28a642564be597c108b4773"
  },
  {
    "url": "assets/js/345.d94010b2.js",
    "revision": "caf60578f667d085d4b5f7d044f20540"
  },
  {
    "url": "assets/js/346.65ac14cb.js",
    "revision": "c2788a1b358c004e848fa0fe18a352b7"
  },
  {
    "url": "assets/js/347.fdb83791.js",
    "revision": "6a886f8d6c2c93a66ded1238d980a752"
  },
  {
    "url": "assets/js/348.0abd19c7.js",
    "revision": "92c6829a08e15b82bfc7840b5fb2c553"
  },
  {
    "url": "assets/js/349.3bf68c2e.js",
    "revision": "2d42fd8a058e3901bc89ace660271336"
  },
  {
    "url": "assets/js/35.d13e9cee.js",
    "revision": "9e32edb04e58d2e7adc827037f0a5bd1"
  },
  {
    "url": "assets/js/350.4e601513.js",
    "revision": "bcfa6dcb6aaae87e61709b47f7e2cb8f"
  },
  {
    "url": "assets/js/351.3ac8865e.js",
    "revision": "2baf1ae99acb55aebbb62a5f783ef1f0"
  },
  {
    "url": "assets/js/352.430b20c9.js",
    "revision": "4bba386a3bdd068053307819e60868bd"
  },
  {
    "url": "assets/js/353.7a30a600.js",
    "revision": "56e6a9dcdf58ecb74ca024b658675f2e"
  },
  {
    "url": "assets/js/354.8a434ada.js",
    "revision": "276111f957539672393aabc938705a9b"
  },
  {
    "url": "assets/js/355.dd945934.js",
    "revision": "d43000a8870151b68885cc461c9733a3"
  },
  {
    "url": "assets/js/356.23867f49.js",
    "revision": "b44543bf1b50a91903f605e3de50e8e3"
  },
  {
    "url": "assets/js/357.f690306c.js",
    "revision": "5e865c58db44d4f58c6b651ac62a8d88"
  },
  {
    "url": "assets/js/358.c06bf955.js",
    "revision": "6719dbecea4b052bdc1d2a8f0ea0538b"
  },
  {
    "url": "assets/js/359.ce483317.js",
    "revision": "d80f27105ffe75f6c1b72839f9181644"
  },
  {
    "url": "assets/js/36.b31a0dc2.js",
    "revision": "051da3947b06c69c6f06b800225b4114"
  },
  {
    "url": "assets/js/360.1a052e10.js",
    "revision": "c00637da4b34c9b68da5588dd79336a0"
  },
  {
    "url": "assets/js/361.28f9f611.js",
    "revision": "e7a82889373d96d24e6a284f1da7b245"
  },
  {
    "url": "assets/js/362.44c1946c.js",
    "revision": "cbe8bff515750d192779b4a23b0750e3"
  },
  {
    "url": "assets/js/363.9b731e55.js",
    "revision": "858b892af911a8ea5a0432159f27e062"
  },
  {
    "url": "assets/js/364.9435c6c7.js",
    "revision": "8083ff049df32a8ccfebfb00958ebf5a"
  },
  {
    "url": "assets/js/365.1c8685c8.js",
    "revision": "10b90717c3d93d930240d7e0de950e70"
  },
  {
    "url": "assets/js/366.3f7f0dd9.js",
    "revision": "773181dfb237a35f1bab86f17c5e8dae"
  },
  {
    "url": "assets/js/367.9d8c452e.js",
    "revision": "602bcceacf7a2f5ef8e913e75e46ead0"
  },
  {
    "url": "assets/js/368.1a16abfd.js",
    "revision": "aed1ad88cbfec2d4ab91ab4e23abb3b1"
  },
  {
    "url": "assets/js/369.36737f5b.js",
    "revision": "48215d6809c86c57a4e0afd1c051ef59"
  },
  {
    "url": "assets/js/37.fb249c31.js",
    "revision": "4e8792b65458f60f62e484a49c828f8a"
  },
  {
    "url": "assets/js/370.dc02a754.js",
    "revision": "7c8dcbdcbc8afbfe9a2024fe8355b2ef"
  },
  {
    "url": "assets/js/371.6a997a66.js",
    "revision": "a6c4e8f563424aa8a3fe643119f0b761"
  },
  {
    "url": "assets/js/372.c9386a2a.js",
    "revision": "54a2742b924c3b0fcb59d3bca7fddd67"
  },
  {
    "url": "assets/js/373.904cd019.js",
    "revision": "ee886517b8b913b6592f46905b1b9ddc"
  },
  {
    "url": "assets/js/374.6017de0b.js",
    "revision": "60105d1dff450121557254b1a2f66946"
  },
  {
    "url": "assets/js/375.e998c5b3.js",
    "revision": "132df288cc92f433a4a2c83257f5e6e4"
  },
  {
    "url": "assets/js/376.9172d487.js",
    "revision": "52ad947b52d3f0544d1684df8febeb22"
  },
  {
    "url": "assets/js/377.39e35103.js",
    "revision": "9ffa6190796b16345570076658493673"
  },
  {
    "url": "assets/js/378.4249f676.js",
    "revision": "d21580cd89dab158f8b243adc9440db8"
  },
  {
    "url": "assets/js/379.ea9e55d1.js",
    "revision": "211130579cba64df030488bb7a98492a"
  },
  {
    "url": "assets/js/38.3d01bcb5.js",
    "revision": "4849f1b11afc66c44a74e02eba4135c9"
  },
  {
    "url": "assets/js/380.efab7fc3.js",
    "revision": "dfd01ee2c974cebe6bd308ca1d71f96b"
  },
  {
    "url": "assets/js/381.905dbfdb.js",
    "revision": "95b29c4993bfe7aaba3f9900a2abb84a"
  },
  {
    "url": "assets/js/382.ca9eb1a1.js",
    "revision": "5031985cebc0b707015bfb5270471553"
  },
  {
    "url": "assets/js/383.ca32c465.js",
    "revision": "03ba22009c79951a9cf552fc85d2d0eb"
  },
  {
    "url": "assets/js/384.ba84ab52.js",
    "revision": "78ba30f0d822bb4e42916394ce55c2fc"
  },
  {
    "url": "assets/js/385.bed1e797.js",
    "revision": "58e0be68e248481cc8531a71aaf7ebd2"
  },
  {
    "url": "assets/js/386.734b0315.js",
    "revision": "54d7e4f1451f4d9f357b2ad033f8f67c"
  },
  {
    "url": "assets/js/387.7315b73d.js",
    "revision": "bf0035514486e1f5ade8bba7d9733ee8"
  },
  {
    "url": "assets/js/388.771aefd4.js",
    "revision": "a73edd79240023fa2ad9a3a23ff8aa04"
  },
  {
    "url": "assets/js/389.ab28897c.js",
    "revision": "c2fe6e8c3d173b95258e401db1387572"
  },
  {
    "url": "assets/js/39.339845fa.js",
    "revision": "af5e18d550fda6269e787600447e492c"
  },
  {
    "url": "assets/js/390.8f42506c.js",
    "revision": "b4bb29f4bda476461af2056af66d9033"
  },
  {
    "url": "assets/js/391.f2b04dc7.js",
    "revision": "44986f4618769698789caa09f22582fc"
  },
  {
    "url": "assets/js/392.359aa695.js",
    "revision": "c34ad1a91b514d1638bb28d4bb5b797f"
  },
  {
    "url": "assets/js/393.2001e51d.js",
    "revision": "b87b03e46999b4c0331aad5f0124f46f"
  },
  {
    "url": "assets/js/394.03a8cf22.js",
    "revision": "bbf290af30453b1552b824ec8af60dbe"
  },
  {
    "url": "assets/js/395.821761f2.js",
    "revision": "b54618e994289d293d94caf2abada41c"
  },
  {
    "url": "assets/js/396.98fe803c.js",
    "revision": "1a03da289d4f7a8917d285041d8cbb6c"
  },
  {
    "url": "assets/js/397.4ddde85b.js",
    "revision": "e890cf35f418f8b5c0ed70b8a779ed3b"
  },
  {
    "url": "assets/js/398.f8207679.js",
    "revision": "50b1b7929ebb3db45ef0a5870a798093"
  },
  {
    "url": "assets/js/399.428b0080.js",
    "revision": "937f100c3eb4bb3ee5c66ecb98d43bfe"
  },
  {
    "url": "assets/js/4.140e6925.js",
    "revision": "ecb7ef6b07a785a7322decffc538b259"
  },
  {
    "url": "assets/js/40.7ebedafb.js",
    "revision": "44ed68f08de9b367bfa8ca9994f392aa"
  },
  {
    "url": "assets/js/400.67bfabcf.js",
    "revision": "a0d6f552ee52129714d754d95b3d8794"
  },
  {
    "url": "assets/js/401.0fdf8c5e.js",
    "revision": "8defd7c422b07e344526318fbe6a9b9b"
  },
  {
    "url": "assets/js/402.f89643ef.js",
    "revision": "399ee24130ce5e6fa47d4c3e196946ca"
  },
  {
    "url": "assets/js/403.b07692db.js",
    "revision": "3ee251cf4603baf87ec27e1807d358c6"
  },
  {
    "url": "assets/js/404.629cf5f6.js",
    "revision": "fe408b2340a99d04ab7bef1ca34cc57c"
  },
  {
    "url": "assets/js/41.587267ad.js",
    "revision": "8d04b06a64e83fbba6546a8e6751e57d"
  },
  {
    "url": "assets/js/42.6c7f389e.js",
    "revision": "795a454724faf7292c40badea8f4f47e"
  },
  {
    "url": "assets/js/43.305ecbeb.js",
    "revision": "a40369218ced6637dffd42294d6bfe18"
  },
  {
    "url": "assets/js/44.116ab931.js",
    "revision": "d891ea2b4347cdfb91cb3d5a0bdd6e4f"
  },
  {
    "url": "assets/js/45.7122d228.js",
    "revision": "50436de866b1c90d017fb893f01a71b1"
  },
  {
    "url": "assets/js/46.b729abf7.js",
    "revision": "50ef0727113b8bc49667d96680c1a238"
  },
  {
    "url": "assets/js/47.86b1f98b.js",
    "revision": "e30ac6c404b86c58c9c51042746caaa1"
  },
  {
    "url": "assets/js/48.26d15411.js",
    "revision": "f9958ef508e4018ccb922acd1bd9e9e8"
  },
  {
    "url": "assets/js/49.d99704ec.js",
    "revision": "11f915fee8f7c5171f1d7af69bddbfb2"
  },
  {
    "url": "assets/js/5.a79c4603.js",
    "revision": "4f1f35e8593d7f648abb8a530efd0672"
  },
  {
    "url": "assets/js/50.fff72706.js",
    "revision": "192f84125f11e8c000f670446be3ec82"
  },
  {
    "url": "assets/js/51.69173057.js",
    "revision": "0de323060562ea7c0ea5031ba049c9a9"
  },
  {
    "url": "assets/js/52.ff64ca30.js",
    "revision": "1192c2132bf24c1e8f8625a2aa017fa3"
  },
  {
    "url": "assets/js/53.5553f76c.js",
    "revision": "204f5cadd321fe7762b32c1ef4d39232"
  },
  {
    "url": "assets/js/54.a5fe1a62.js",
    "revision": "fa3a7727d4ea54f419e28cb070801511"
  },
  {
    "url": "assets/js/55.c7605118.js",
    "revision": "8b70ae51adfffe07167f0aa43c6979cb"
  },
  {
    "url": "assets/js/56.c2efe024.js",
    "revision": "c5ebc674c693b9db477552e8c7fa8bc1"
  },
  {
    "url": "assets/js/57.0ed33f3a.js",
    "revision": "687e05731e05efa8b74e4455156bcf5f"
  },
  {
    "url": "assets/js/58.2a5ac7b2.js",
    "revision": "97837d15caa4fb6879c9ef4c93a2d461"
  },
  {
    "url": "assets/js/59.c734161c.js",
    "revision": "a6b88f6c3327b1a29c0d96507d974daa"
  },
  {
    "url": "assets/js/60.1fde0d28.js",
    "revision": "f390d947d13bbed94fefbeb1d6219133"
  },
  {
    "url": "assets/js/61.8eb919a1.js",
    "revision": "90f67ff2d5de2a4daa2969fc1b7cd35c"
  },
  {
    "url": "assets/js/62.b0aff2b0.js",
    "revision": "d9a61469d658a78c253cc3f1430c0cd0"
  },
  {
    "url": "assets/js/63.0a55411b.js",
    "revision": "13b360dc5b48fb3a505e69ba7956e7f0"
  },
  {
    "url": "assets/js/64.361faef1.js",
    "revision": "e237cbef64077be590d426ff26cb40ff"
  },
  {
    "url": "assets/js/65.79fbbbe5.js",
    "revision": "ed9b4ae8aa5a1a7c166d7b4e6fec81de"
  },
  {
    "url": "assets/js/66.d15a7c1e.js",
    "revision": "978c02d08ba0da93226b6ed6513ce4ba"
  },
  {
    "url": "assets/js/67.5c3652a0.js",
    "revision": "30167fa39f399d4161fe6a8ce1dc86f5"
  },
  {
    "url": "assets/js/68.ff57b835.js",
    "revision": "a15aaf0f2450185d4ffe68a361600dd7"
  },
  {
    "url": "assets/js/69.a4c223b3.js",
    "revision": "c208a0f95aa450893925090648fc642c"
  },
  {
    "url": "assets/js/70.24509d3a.js",
    "revision": "c8c8b299d77afb066cbb33d4e63200f1"
  },
  {
    "url": "assets/js/71.87f87ea7.js",
    "revision": "0686460b023fb6b324135051cc5bedf6"
  },
  {
    "url": "assets/js/72.ec940ee3.js",
    "revision": "6498959d9bf57aa9abce3a9850909dac"
  },
  {
    "url": "assets/js/73.d34f18da.js",
    "revision": "e583ade6b42d5c85cd82987aef5d21cc"
  },
  {
    "url": "assets/js/74.c021e9ac.js",
    "revision": "8672fe47c88253a19c16cd9b062f34ec"
  },
  {
    "url": "assets/js/75.e996d4a8.js",
    "revision": "07421b770e4cab9f0b3da35a3acd401b"
  },
  {
    "url": "assets/js/76.0a079b63.js",
    "revision": "2fc2ce75ac11dd563d6c0a6a9133d4b7"
  },
  {
    "url": "assets/js/77.fb3fe160.js",
    "revision": "73c9c1fccf40deba4f9070d60113aa89"
  },
  {
    "url": "assets/js/78.002c0fe3.js",
    "revision": "e7fe388d1e3ec7ca0e17647c7dcba3a1"
  },
  {
    "url": "assets/js/79.b34ee770.js",
    "revision": "4a3eacbebe0f369f0f5b0aa82e0fc9ad"
  },
  {
    "url": "assets/js/8.2e5143c2.js",
    "revision": "e8d5c49665c1ccf0fa764cb4db063b8a"
  },
  {
    "url": "assets/js/80.304395e5.js",
    "revision": "f9d45423d400431bc99aaa7e9a7efbda"
  },
  {
    "url": "assets/js/81.cd1e0d2a.js",
    "revision": "56453bae0a4c3eaa9a7d610465e67fb8"
  },
  {
    "url": "assets/js/82.471fddb2.js",
    "revision": "b32acfe5c2c4ea795840c79141f270ae"
  },
  {
    "url": "assets/js/83.faeddd52.js",
    "revision": "74b4a62aacdb4326844291d9039fb6eb"
  },
  {
    "url": "assets/js/84.b0b14463.js",
    "revision": "0de96f2bd734aee2179622e52d7bf155"
  },
  {
    "url": "assets/js/85.a20dc0ca.js",
    "revision": "868b6a4ae41569fe057146cb5fcfec5d"
  },
  {
    "url": "assets/js/86.e8d6ac31.js",
    "revision": "4e112859bcac26b577808135caa57bc5"
  },
  {
    "url": "assets/js/87.b0e71e9f.js",
    "revision": "abce494ab245f79809ba5ab5c647d4d0"
  },
  {
    "url": "assets/js/88.e11b72db.js",
    "revision": "7cbc3a00b21b08481c3eea9e266bfdbc"
  },
  {
    "url": "assets/js/89.42282a3a.js",
    "revision": "3c33cb44280df061be4e78c74cb3a12a"
  },
  {
    "url": "assets/js/9.444c1f85.js",
    "revision": "0078bc4ecd0bddb4f7e186740f22bb8e"
  },
  {
    "url": "assets/js/90.626979ad.js",
    "revision": "89385b4d7fac5b5bf1e77bdd52150f2b"
  },
  {
    "url": "assets/js/91.689c59d1.js",
    "revision": "0e01c07c6b3ad3813d744a17a8e804d1"
  },
  {
    "url": "assets/js/92.f0bfb97d.js",
    "revision": "addd244da4aa49feda7c32a710fd5e43"
  },
  {
    "url": "assets/js/93.0c2c8bea.js",
    "revision": "fa010bfc9f4efdec0694f898aa7289c3"
  },
  {
    "url": "assets/js/94.10084da4.js",
    "revision": "3c93dda8d739426e45b060d2a8c9a6e6"
  },
  {
    "url": "assets/js/95.ade621cc.js",
    "revision": "ed731d8a58a2853b7bc8c3b50f3327c5"
  },
  {
    "url": "assets/js/96.72387739.js",
    "revision": "2c69061643049ad5380feabda30b0151"
  },
  {
    "url": "assets/js/97.eda9067a.js",
    "revision": "eeb5a44c4db46c0b2975566c1bd7cd14"
  },
  {
    "url": "assets/js/98.88cdaecd.js",
    "revision": "8d496533875b23cefff3f978dc563888"
  },
  {
    "url": "assets/js/99.79f61c20.js",
    "revision": "6090e2b362f11a71f0519e9dfb622db3"
  },
  {
    "url": "assets/js/app.d9dd0e55.js",
    "revision": "3f103cb1611100265e481901fa9e150d"
  },
  {
    "url": "assets/js/vendors~docsearch.891d01d7.js",
    "revision": "bc6f576b1a4c57032e8b3423be76fe81"
  },
  {
    "url": "index.html",
    "revision": "7e6649a911e6db7f0e363d92974102b7"
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
