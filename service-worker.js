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
    "revision": "48c2db178f020bddf350e761893aac7e"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "a84b9d04323338ec91f66a30c2cc1464"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "bc8aec30afb384f61edec2dfb6d7561e"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "ef8457c4999dd2f262f6c68588284496"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "f646641e7c433cc8b010bd651c7d2694"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "adbf98fb6a0f9635bf470bcbac969c25"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "c4cde5c611d2725cb0c2dd5e2d9899d8"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "1f4ea9a83d800bef67fa96dae88f4ee3"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "5d76aa8159e669ba79136fb0c7d397dc"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "21d1e1ba8a36298a359f1efbde453ad1"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "60bc3f9a8a4aeab222f86dea63cca916"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "de97a9a2f41f1553ea76b77b430c7c1c"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "08cfc3ec61a39432f38b307dd5f4a573"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "4e5bde05c0ff3ce54db42a1544fb968c"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "9d2ba6687467f130a01566f404f49957"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "73ba677bb8589039c13f8b5cf5af1f13"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "3db977c7b8375fdab80eb0c5f07133fe"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "9734d52534d2025a0d228d1374d84e02"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "f5dcbca46173182f7531bdbf1aae3e40"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "8b6b96671d8ab9e3b12f7cb6ce4b0e46"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "ee7d3553c99426d5e5873e5959a1a931"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "a7f2505766a6d71df1b20f1e71263b90"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "5ad9d08a7f9f3a1e0e590e8873598933"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "158b0ca6d6ce16822ab3044f0887a50e"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "c8228c85884632ddc28431695a5d5f48"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "b2889e1759112bd2439c88f43c839ae6"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "b48c9ae2320172117f6ea3400a7c9840"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "f6d8ae363acf2b0355a57e922f163367"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "01abc359de947fd656f5187866a44767"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "c7f566c38f9fb46d61e9d5fcc6d448af"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "f60e19ac0debe57ae2aca5b3c84a28d8"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "09d2ff59e13c240a59cca6de7d1791b1"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "28408684a7f2da2b2ecf75ceeaaf5baf"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "4a2a9c98db3bbc6340ba484797ae329e"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "796e156bfc21ee95ce6188dfaa33eb7c"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "293f1be7b5c7892d0970178d6573359b"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "9089103c74e658c7db1db6462ea4f49b"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "c767632afe505e51e34131d0e02b0ac8"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "6f02409fb1aff7c0f483d37d98c51af3"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "eee75b3abce67f421fe4813fc0a93c33"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "d9762035fa8d26fe23a28dc7dcd0aeea"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "3beff236526fafcd20f068e9e516c4c1"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "464fbc26433389872a2d534f4d64cbd0"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "86c494f981c969d1b2d0061840bd0887"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "3828a61fdb30250e4f1a9a67632e3b91"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "4a4c3a553f19148414712c7e0a628227"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "708110e396edfeead1c07440447436e5"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "08662dabb594e4d0c5a56e377cd8e71d"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "3a9901fe349d7cc7930e34dc76e271d8"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "610671036300a95929ee1441b7d16309"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "4d4c009c2ffcc17f135720f96ff02e7b"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "2e0d2a7443a16b588c4971f36d38a72c"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "140993d6243ad773459a3add674f2592"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "f4804e0a0f8f7eeb630af29b72ef2e98"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "54d88c5536611699f85d175a05af85a4"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "e0a4372ecd6c8a25a10e3be4287b2900"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "714a2a6b701341d2b85b478d320e7175"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "79bebf23ebcd2e27cdf83099c3404d99"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "8c183fd5d59bb08ab1cc838169f084cb"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "2dce91896f73e5740af8e366b9abc244"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "6357e567a397997d1177c0ce72fda1cf"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "4cb1a2f9b1447b0bafbb8f1571d3e664"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "027488bfb76db090f7cd02383673f0e3"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "b4ee0bf040e0b3a1061fc57e2f2ae3f2"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "94e7690094dc7b5ae732e606fa6a6f22"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "3b4b4f6c83b327d37e73d6ac764119d2"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "bd241d6ed8516c8636494ce3ee8b0059"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "eeff013bd5c11e8e52828711ed9e28d2"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "d02fd488e1dceeeb1fed39c8c42644eb"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "4764e3450cfe7948ea3b0ee7082f1788"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "172ea020a681e254a21cd9aabec6a5e3"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "f0801ffc3a1477a1654cadd00705f65a"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "471e61c1f571b4972343001d00d2002d"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "03987a0ae9729fbc33df6e20ac379aa0"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "5ed5c73a81ec7ab3a5d196366b39f103"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "67250a244c33a80cc9f1971b0e0846bf"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "0d4f0b2652b0f14f78fa80f89a29f37c"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "7424f94cefad792fa107a745ef5575e2"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "b871e2b0a2847b3a1a3d32708edcafbb"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "88dd0dd6a214631b2434f293c9f42cff"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "228beebd4750da18b298f06f95cfa897"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "3ca9ac8fc0a72b84dca1534f64e2ff5f"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "7b4d56fd248fc2b90ad3e2bfe99cf645"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "ab2aefd08ffa158b3aa9381f3879dded"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "12772e86b8e36b4b663a8dd9eb015e87"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "b872748d28d01e109d0080af2e3bce2d"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "577bb2fbadaeaf83288fcd8e95700008"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "4cfb8e694887130fa7dcd05684fdd170"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "bc92bb13036a0077fd66d71db8b44c89"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "f4d0353cbbbc89c4c2037d182ea85b70"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "e6c8e8a49d45eb4aaa6fb66447eb8950"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "5804355c7d76385a67ac7b91bf706a61"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "096b6a3baa7791c53edeadfd7d7b3052"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "54a19283b5ebeff24bc5a02a6a49aae5"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "555e800ef747d402c44793b92ffc3d3c"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "b289df722568f15a2fb82845244cf55a"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "3b5bf9ffd519d7e1267d8776bad4a3f4"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "580d7047bc9b9c2e9beaab4e9862136b"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "37733cbae57370c4925637be285ee96a"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "b0fd0423e0c21a24dc88598a562f3991"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "afa8e066c9c81eae5fc9514ddce0c045"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "566725dc308fed4dcbe48583d8dd5569"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "e7ef5c88f7a74b2be9f614b0f853a293"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "c29047f52b7bc0cdfa051fca5e83c536"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "cb652ac9f0cdf7c4192b8a9c970b3aad"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "d22677a35d912cef7bda365343ed10ee"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "398914f1e6d044510977ce34fc989d52"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "879bc3c2b986699c3e3f48279c9737a7"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "8429861ba5278c4a61e4068cfd708af2"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "9148aa07ed346887415b2b36f8481b6c"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "f3f7c06b816feb10f06cd471f6056e97"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "8bf9a2e618616d68661696437a2e7816"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "70ef47171df54de2d5f7af6095022e93"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "4e3005b768bc8c1755d3c603ef63db2e"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "53ab084d1edff38a6f5a46b4cac2dbe4"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "6c5bf29e86f23350c716c74651672983"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "00f3c8292f431f6d60431bcfb5d164f5"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "a4031e51c07af9740a119d06f6b771f9"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "ed8b49da0165e4e6b44306db9578234b"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "a01eeb2c1d0e47421986d89820e8f55b"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "1e87616d94b5232b4011699a957ae82a"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "f86009f1773e91813544f4750e890f8f"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "d82090917284c6ef8738a08e4d026afc"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "4639c49f98f8c1f83fbf9b4ec8560ef9"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "63eedc61e2787e504c0f6ae489d9a25e"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "76d4dca2570d6f083fe67f30a5cc0d03"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "4357fa0f6dd03f262f3ea94c99e74853"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "e5b3c2ebf133cd870b536aa7eb2d22ef"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "4a659097f6ffd696708f9df5222abdc7"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "72a0a5c6b466472632d3e494d949ec80"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "3f9e31df88e38995b770abb64d3edc4a"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "994b97932c6df4f043cbff1cf14f2acb"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "a5f744a14d2cf90eef2c3167dd6753a0"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "4c504a6dbba08e8c423d97e46544275a"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "031667d5a6d841e4aba66e3022b168ae"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "d3b96fd17afa0a0d48361da89f571335"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "f299d86a4557b51d3ba47898ac73a0f8"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "aa2acbd6e7e51ad68188833e97959f1f"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "dd8d763de4c569f5ce631475d815f185"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "9401f5061b5a9634b0391c9bc27d3a7b"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "85aafc1441bb7f56089ba36ca046d769"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "1ea6390c641821410f3fa442c5ed3200"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "fff219104315abe5a4828529d167c11a"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "3b1fd6e78c2157f71b86cefc061292d0"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "6925bb00f912fe7f65a41453da452aae"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "477fbb91a8938ac456453717eeb60c11"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "5213730146cd75a3209748cbbfc09d5f"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "f19178c3b3f593747d77172593af9d09"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "9fcd8c8d10eaab86de458767e20ef593"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "e6a73b86b6628d20c9163147ea31aed8"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "1d98588c393ec933b7897110c7a30f18"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "7366f42884e3a86541e28760d9f78b06"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "8dbcf737dafcf6c450b0f3b4ea612092"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "eb22bc16c84e98350e9f98cec34ed868"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "d45e4834ade3b4602618b4a67cab85a3"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "96003871aa38d879d38446a0526300da"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "e39c47668e00a7f4bb0d35b6695269e5"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "98c47d709d2355bdbf48eed385a61dd2"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "cbb7c1a70976a7095f72db7046f92bed"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "4479b21c8c63dc070988730111a3103d"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "f1b33b006bebe0a5c0d581e82402e55c"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "c8bc8568a73f7ed998ebd3764c7badec"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "795b1266a41f0181cd6e623f3317caa6"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "2e0a5bd1c927509caa0e3053c915db24"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "1be73c693a12c5bc17e702a574995689"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "a806b9949c58dc6b2432d86e856c535c"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "e6a81a63e13ca5cb90e09e1d4ea93b06"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "06da6bc83934f6722ec96e22289aec58"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "07efd817eb6d7779dd90db3555ef2382"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "b97f7b80323ef784405596b7f494e9e0"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "2b5ffef1afe07187f61df200805f73c9"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "4423eb8424380a769da3fdaf51f9741f"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "ee4751731e6e5053a070a6c912d3fdab"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "c2bb96e7104df20129ceb0bf5a5ad18c"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "fcc4171d175a9c5811f8e4fa4d7479f1"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "d03694d59f7799fc03138311410be0d2"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "fab64af593e967787eacdaf28ae6f695"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "b4caaae8536a703b07b5144c7ffe3a5b"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "8e36e8ea757236fd26d21608820da9ea"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "97ff47679d88823334e7eff68ac823af"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "66bbe53f32fd2ef36c4535acc8dd1b51"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "a946f0c03470bf4d5c6da21062f20250"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "1969aed3512306dd8c58632f90298fb7"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "e641ca62180a34d011bef982f4fa2619"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "96ccb29b8ec7098b8f7ece8532ab3ca0"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "16b846abebefcb869a019bfa6c30c83d"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "db38186f9d9f4d5157ba9f32824f882d"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "0033f8cbf498299698fafe454025f3b0"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "f0420fea933f0cff2c12f340848c7b23"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "41f24a04cb46a45b27a443f31073af31"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "dd2537ea37e9cd86e1215ed735ea10ed"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "632b62b0354c3ec66a5c2235cb868e79"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "011cbb94ead448b53a638e17215c5319"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "271ff859c9d4ec8d3a70ca75f3bc8621"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "dcde46a3943607eada3aa46b5b1911b4"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "d57cad19aee16b488be04c8f8ca5a2ca"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "d7e7e478c147d56a795836d41a59f9f5"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "528c46ffd13f26beb53d01ca4f049ad8"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "068790292302bb7da2b9973d500cff0d"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "f5b9d592b8fbe1dc9bfd893faf9a24b9"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "7ddf0af5f38b320af0423f2174c45a3d"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "ee3970976d293a6661d74775b26562f4"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "6662d0d2cee40dd3bdb15d7e071b5e1c"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "27e799f89b566f4b29841fe1360f4cd4"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "61f1b3241c9b4f5f7dc72dc210821dea"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "5fd6dc6e3705afbf82baff13aaf860ff"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "8bee8230bf2921a7c7e0c532558140cd"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "5c5127304e822cfa251273d2dd499331"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "e66d2dba3be4017868e86252473499b6"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "8505463d2529b40e7ccc1843ee3394a6"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "a50e26da91893ffe8fa866837a5dd8ee"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "38ca216db6c2adb302172f77f7535291"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "d20fd51177a70aeb94db69b0a745690a"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "cd3d53f3745dad2f9fde62dbd9d7e0fc"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "91c34fe16570cf7fc92b26bdf12ce2d3"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "f949747edbf2d63850c39bbe5f62b83e"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "e7d263afe4529ab749b69deb67a6afaf"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "2c58faf03ffde4a26db5743fb4fd18f9"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "9ff4de093ff3441552474f3fcaf4510c"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "6fa6d77d4fdb5c19960379ab5c1fb4e9"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "62e9d99b5df848c05a5ec4e1fc908064"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "4f24815d48471765abb8583cabd86ea6"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "a3172ce3bf042a8028c9773a1ca4797a"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "f81068c06d5f59a60194db3d98c4c88c"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "74d51fcac7b188fd33fe2a897d1697e1"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "a494e65b78f0312f77669b3b005e8334"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "ea5a6ff1a6a23f271b13da70d02ab79d"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "18b709f151dbdfe21ceb3bb1d0cf127d"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "8f4941b88e441626f4358bd373e8a3d1"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "910ee224a672190286016c4d6b793b2f"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "3e4a47a68a06e4f9ffd938361db406cc"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "6e1fa4777e5b308cbe4c48f9a4cfb574"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "559591cf5df66d22de3b9878d7a87950"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "29f7018b097923a41c2248cac99caf3b"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "eb1197af5c55586792f91de2435dab84"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "75eddc066a0426b42fcbe9bc00c48437"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "f92a198a32aa1d1bfd39f60521bcde73"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "49936f666e732f680db017ca6cdcd73d"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "f4ebf40962626327aa16ff21d7cee68c"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "42de732380582d10981d8ed1cd25effd"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "f89c0d2fee48bedac9a94603b71b830f"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "3ad1c8ad6f3d4de231713c82f77eac88"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "9b783d4a4aef819935fc6c4b546fed05"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "b18f53163c2902e69614123f47d27de0"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "11701f0c72df25746b9b6c2c70e8fa49"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "7f6cbab4924ab20ce108fc07cc500cf2"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "308eed4c7fd161cc62635d7528bfd753"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "948340f11947f81e18748ec7896a68ea"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "59b4509bafe5fdc5c82c3f1943a332b7"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "8fe40581ce1a102ee86907c433fce459"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "9b50f339adca039e8334cb77d63c61af"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "e59aeccd0bbce80041454973eb073e10"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "8e3a6a4996b937c33117d96d8e114f9c"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "cd881923f5b543f48db5a1c84a4865b0"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "206c4fe53fc8e7151fb5465aea958d53"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "c3552da947049ebc90e18960f49c95d6"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "825738793a9996fe044d36792a8dfd63"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "199e4c7c105bae80a584d700f2b4abec"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "dfeec7287cb6199fd730b1943ded526e"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "8959bcebe2e77ae439883ae1244e5207"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "01521aff98b74089ecb3fbe2140d1321"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "075204a1fc83a97c8d76c860dd6c1eda"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "3daf6325dfde97908283c6aa091f6dbc"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "d1714981956923bd1855e9bc9ec4617a"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "84dfc227357ea5e744eea0265ce3c188"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "a5e78fb1efdfb111e1bcf7b9c0e5d66e"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "0668fb3a6bcae74a39f2a517b9fc9001"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "c33c4d697e72e89abbd3d6493dcaa28a"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "4777f34c220c304d0ed99206eaa6018c"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "d2bdcad29b50b7c83902524e2e1e12ab"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "dd313068ba46271ab923d444df03f979"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "4f2862a63f9f2bba6658dbe2ca335bf1"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "446dcb59c5e3001607ac67a0777587d9"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "2b680124f9a9a7c7ff7f26a0ac9a4d1c"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "1f43849f33c1038b9f0b82303989a8bd"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "3171de07021df084d2986c491d818168"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "59467b42cf5cee5d5af660b4fb7f764f"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "8897459d8d13162cba6fdbdd66013fe4"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "374e90f02ea52636ff932ab82bcaf63e"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "73c80276855baca48a1b1b57ab473ec7"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "52284e8f0f54f70f64c1fd06df3844a1"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "39d6ba16ba2cbd9ca3d7c0072da6c831"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "87533c8c87666f7b64789d746cac10b0"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "b7d8069b2820ade2e5a021bf044491b0"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "3c6e3e5c269cb56acac8086b4f313d4a"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "67177073382a8551bd3415d36048ba28"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "cc857ba74071a7f3d4d8241636f9771b"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "526b0c8f1e4d355db606da79c6849412"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "48d29fd33e03b596b25aa912e3c62d1d"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "03ee5f389c9fd1fddde64092edad8b6f"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "fcfe7c865990fccdb7254a436ee3549a"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "a1ad390fe834da88f9290855ce38ffa4"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "efde20f3a524ae4d1fac7578a4624db3"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "ec4e2bb552f352406edc2c11d11592c8"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "43d6f99995b851eb1a485f78b5a5a32b"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "0efa951439527899175131eac7538752"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "e788d2f92ff486fec06cb3d1b12a030f"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "322e5003d7c8c40c33788a35076f0dac"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "d72d7fd0f345a849d6a32ab502874dc1"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "a8e6b56418b7e4d1deaf72654286b887"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "e23acb2be6e7178a6b81de8a549bbf99"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "2011ec08d25fcf0fbfce5f71abc46abb"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "7fa70a61cc6f7f02859c3ab3647f0ec0"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "581387bf369f4cc3d54e8e7eea0c233a"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "09237aae61a6ed07996654184a645f38"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "b316123bd3f9165869e64bfb2d95975e"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "d0ff8f23901740f8aea792f806cb4241"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "533452e2547ea0f488bd0879e7c56016"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "239779ba2ec82fe9ac2f209b42aab63d"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "9ba4c9e5f8519c0bcc9054dd6adcb570"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "5bbd06e59e7d36398c147209bed317fd"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "0b86c35ac8fffd5730400a5e2c837236"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "e1ed011a34eaad1d31d3bb70ced48954"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "c12f933005e170d3f6c203c67e348fdc"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "8458c6a689ea7ec372f4ad4d63c37003"
  },
  {
    "url": "404.html",
    "revision": "1407345033a40fd8a2635512975ed44f"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/1frontend.60a9f83d.png",
    "revision": "60a9f83d3897ccfc85b19edaa45be0da"
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
    "url": "assets/img/abandoned-cart.40d28282.png",
    "revision": "40d282829a330c99a715eed34402753b"
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
    "url": "assets/img/create-product.de3763bd.png",
    "revision": "de3763bd35b420fae98e2bd46f259ddb"
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
    "url": "assets/img/frontend2.864a8940.png",
    "revision": "864a894032e86df0e8cd907d60957280"
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
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.ec4705dd.js",
    "revision": "587f5cf7ebf7b0c4875586a396f2670a"
  },
  {
    "url": "assets/js/10.29aac16e.js",
    "revision": "360ad34f4d3e4711d563a3ee4a296386"
  },
  {
    "url": "assets/js/100.38cf2634.js",
    "revision": "d3dde2bb376ac1912e534a4fd6e8f7a5"
  },
  {
    "url": "assets/js/101.60b72cc7.js",
    "revision": "b15fae403ba12f902d2696767e334fef"
  },
  {
    "url": "assets/js/102.6e6c20bd.js",
    "revision": "52ce558e1c7249bdb84547d388b513ec"
  },
  {
    "url": "assets/js/103.2c59dd54.js",
    "revision": "bbcff1c6c3c485cab03f01a1bb241b87"
  },
  {
    "url": "assets/js/104.35c7a02a.js",
    "revision": "b6d42116c0bef848027beff01dc2585a"
  },
  {
    "url": "assets/js/105.e08be4b6.js",
    "revision": "c3b872343844d5078a2db2d43729759d"
  },
  {
    "url": "assets/js/106.d2802ecd.js",
    "revision": "6cbcd19f8b115c74ef7a4c176b474c3d"
  },
  {
    "url": "assets/js/107.80f715af.js",
    "revision": "317812ebf8c73e7d0b19127fde658995"
  },
  {
    "url": "assets/js/108.3bf58694.js",
    "revision": "ca2cd8ab60cfe2a7c84585b419254085"
  },
  {
    "url": "assets/js/109.7b035483.js",
    "revision": "ff245d1556ac72c7efd71868fc38069b"
  },
  {
    "url": "assets/js/11.ace9d67a.js",
    "revision": "60aef26736fbb06c40668ab7a57684f8"
  },
  {
    "url": "assets/js/110.1ac327fb.js",
    "revision": "d07b697691377ad65d589d8d7f73e1f2"
  },
  {
    "url": "assets/js/111.64b8daa9.js",
    "revision": "3c35410f0f7b4cdd71bb37f6c6aa7b0b"
  },
  {
    "url": "assets/js/112.6aceef2a.js",
    "revision": "e683ad874b4baa5ea17a20e0e7682fce"
  },
  {
    "url": "assets/js/113.d43434b8.js",
    "revision": "d61b9b702e390d60ebba0ae0740ba597"
  },
  {
    "url": "assets/js/114.62d16d56.js",
    "revision": "f0075508ffeab16678993417e4c743aa"
  },
  {
    "url": "assets/js/115.8c91c64c.js",
    "revision": "1783d36b751efe9398ff07034157d220"
  },
  {
    "url": "assets/js/116.c11c6d98.js",
    "revision": "04616d6d38baa5b591983f35c263d5a8"
  },
  {
    "url": "assets/js/117.a7cd04e1.js",
    "revision": "5541083d6ecbed178f454d6f040b151f"
  },
  {
    "url": "assets/js/118.bca4b09d.js",
    "revision": "49793d8cfc29801fb6b5421f7124bc59"
  },
  {
    "url": "assets/js/119.a6f4bcf1.js",
    "revision": "73d2ab736620afef743deec474d36952"
  },
  {
    "url": "assets/js/12.ed549e3b.js",
    "revision": "bdf9e778bac36be4550f591b7744e974"
  },
  {
    "url": "assets/js/120.70450b1d.js",
    "revision": "c39d56d84eb5156d69aa27037b02357a"
  },
  {
    "url": "assets/js/121.bcb900c8.js",
    "revision": "f1a8ead53e9ca3d173878ad91e66c840"
  },
  {
    "url": "assets/js/122.80cc9007.js",
    "revision": "f118f8a6886af21d9f24480a69631df5"
  },
  {
    "url": "assets/js/123.b23234bc.js",
    "revision": "ed8e66ca359e1bf9da3667bfeaa5eeb7"
  },
  {
    "url": "assets/js/124.ec4a260f.js",
    "revision": "0704d94d9acd58c10e59576f733bab71"
  },
  {
    "url": "assets/js/125.c9499464.js",
    "revision": "4b89ef1c40c9a716a902422954adf355"
  },
  {
    "url": "assets/js/126.07a5e292.js",
    "revision": "779bb03c102320ef9f6fbbdabb937779"
  },
  {
    "url": "assets/js/127.3c66d75d.js",
    "revision": "cf0b11b6bf93d8cafb9aefd02ff5d75e"
  },
  {
    "url": "assets/js/128.4a4c4732.js",
    "revision": "4348dfdfd293da3cec6c6ce75609e061"
  },
  {
    "url": "assets/js/129.ce73b4f4.js",
    "revision": "181b8388c19934a2f01816bc3fa02339"
  },
  {
    "url": "assets/js/13.d5585c70.js",
    "revision": "60d3fa5052556012120c1154f4936fa8"
  },
  {
    "url": "assets/js/130.9da42616.js",
    "revision": "270f3373196586303fa74e50dfa05251"
  },
  {
    "url": "assets/js/131.671446c4.js",
    "revision": "789376ca18f3d234b926000196dd6c65"
  },
  {
    "url": "assets/js/132.0fa184ba.js",
    "revision": "db8e08f24d7bd27996723ccb9dc8adb4"
  },
  {
    "url": "assets/js/133.bd42519e.js",
    "revision": "d2a6fcfb8f2eccfe738743c1efec8107"
  },
  {
    "url": "assets/js/134.5ec2e260.js",
    "revision": "c69d99a29b674be3bca07c3ff65919ac"
  },
  {
    "url": "assets/js/135.de73f2c1.js",
    "revision": "7598d64ce8b1b24956f3761871273792"
  },
  {
    "url": "assets/js/136.ec9f287e.js",
    "revision": "1c71b44a93715eb2b44381b6dc141f41"
  },
  {
    "url": "assets/js/137.ce47b3b8.js",
    "revision": "d30d6dae0783980894416a6b7f0f3ccf"
  },
  {
    "url": "assets/js/138.efbf1b2a.js",
    "revision": "014ee6f52219ab0c9bd37727b19059a8"
  },
  {
    "url": "assets/js/139.720f7ab3.js",
    "revision": "f3327f91370eec22d05c7ebdfd18f488"
  },
  {
    "url": "assets/js/14.dd9982c7.js",
    "revision": "c64accf8f90ca2d7b5bdfb8a3ea791ca"
  },
  {
    "url": "assets/js/140.8465e8fb.js",
    "revision": "d9a4b5c766c2fe11aa288d479eccf834"
  },
  {
    "url": "assets/js/141.0af17952.js",
    "revision": "84a3e92d5d6b848cfd67f81c02776cce"
  },
  {
    "url": "assets/js/142.8a2ec8a4.js",
    "revision": "bfd07c18a8d89ad2f2b7fa8f8ccdb144"
  },
  {
    "url": "assets/js/143.65d8a6fe.js",
    "revision": "a5d7f82bbf12a7621c9dc11976f7205a"
  },
  {
    "url": "assets/js/144.fa7d7f8d.js",
    "revision": "fb63a9e7f9dbe95f066625868fecea30"
  },
  {
    "url": "assets/js/145.b0b35b2e.js",
    "revision": "36398f27dfa25270dc274daca3e50faa"
  },
  {
    "url": "assets/js/146.c1525bd6.js",
    "revision": "e7b98fb1808d09b6cc95cf3d31079c87"
  },
  {
    "url": "assets/js/147.4af328b1.js",
    "revision": "d524607d89629e72e3af706e82007e79"
  },
  {
    "url": "assets/js/148.80097c24.js",
    "revision": "2c4cd2d4808e9038bc3d2d682fc01601"
  },
  {
    "url": "assets/js/149.202d5c3e.js",
    "revision": "1c7236ad17c25af2c0194e748b4c0573"
  },
  {
    "url": "assets/js/15.9e916c1d.js",
    "revision": "91837d3a2978048d99c4611533f1245a"
  },
  {
    "url": "assets/js/150.eeae6476.js",
    "revision": "dc6eb0f7a8f84599c7bbd7a5f43dd5f2"
  },
  {
    "url": "assets/js/151.e5837405.js",
    "revision": "ea9dcd093802cd3af3450b1db8801469"
  },
  {
    "url": "assets/js/152.e6b59acf.js",
    "revision": "d4a4889707ee408c3da3dfacc521f687"
  },
  {
    "url": "assets/js/153.34822e41.js",
    "revision": "296a8d3e0a761c0e4d334c5df63343c8"
  },
  {
    "url": "assets/js/154.5dcf27a8.js",
    "revision": "d9c64930ddf936694489a902ab70ba03"
  },
  {
    "url": "assets/js/155.2e995e26.js",
    "revision": "34ce8e409f5ee607ff933e3be0f44914"
  },
  {
    "url": "assets/js/156.02561db1.js",
    "revision": "cce6bd18da83df1babdef892e49ded21"
  },
  {
    "url": "assets/js/157.3e9d148a.js",
    "revision": "fa1cd0daee836ef0c14bec115e7973d9"
  },
  {
    "url": "assets/js/158.e6cd2982.js",
    "revision": "3e33b38b6dae93b34fae87d73d99c552"
  },
  {
    "url": "assets/js/159.6a3fec77.js",
    "revision": "a57d73e762a9aaf4870d3965fdf59c39"
  },
  {
    "url": "assets/js/16.e91d2ef2.js",
    "revision": "76f3bca48bb0f3f666524b15c05e3428"
  },
  {
    "url": "assets/js/160.249ffd3b.js",
    "revision": "48554d2ad860eee4e89e813c9997f32a"
  },
  {
    "url": "assets/js/161.2c87546f.js",
    "revision": "ada3d97c91017f3a7cbb879f325742f5"
  },
  {
    "url": "assets/js/162.e715f59c.js",
    "revision": "c3b4757479ef59aa182e1b66087519d3"
  },
  {
    "url": "assets/js/163.8ee13f07.js",
    "revision": "cba0a345aa7eaf49d5d84d25f227bcdf"
  },
  {
    "url": "assets/js/164.ad3f0d42.js",
    "revision": "5969bfc4248dbd036d33a21ef20d8740"
  },
  {
    "url": "assets/js/165.04f5fe3d.js",
    "revision": "ae967321f640cae6041e389e6870984c"
  },
  {
    "url": "assets/js/166.5b64dc62.js",
    "revision": "100651c22b8a3130c2fa433a397bd055"
  },
  {
    "url": "assets/js/167.26a2a6e6.js",
    "revision": "0351071636aa985abe8367cbf5dfeb50"
  },
  {
    "url": "assets/js/168.55a3d77f.js",
    "revision": "302a395b8df57b06e308eab658562a30"
  },
  {
    "url": "assets/js/169.2dcd85ef.js",
    "revision": "bea244e905e55889fbd901bf0d8215e4"
  },
  {
    "url": "assets/js/17.79de0a86.js",
    "revision": "72d563ea70454d02d15077134b3d2175"
  },
  {
    "url": "assets/js/170.a9f68861.js",
    "revision": "1f7f73c9355a0bc83ee4efac2ddbadbd"
  },
  {
    "url": "assets/js/171.eb675293.js",
    "revision": "3736cd6c09231b6146dce8fdda879d60"
  },
  {
    "url": "assets/js/172.c7e76b50.js",
    "revision": "2454f7758fd12f786d2f564c15800cb3"
  },
  {
    "url": "assets/js/173.2aeb354e.js",
    "revision": "731e50e4cc5ab2fbd8bfa644aecdf60f"
  },
  {
    "url": "assets/js/174.b89c001e.js",
    "revision": "e2304c705c461763e91c6ce0f954bf2b"
  },
  {
    "url": "assets/js/175.bcb6f035.js",
    "revision": "6299502c603e384c38ec9e72aa487b06"
  },
  {
    "url": "assets/js/176.a6701ad3.js",
    "revision": "0c4e285ecd707e3c69c56d7593a18f91"
  },
  {
    "url": "assets/js/177.3369e984.js",
    "revision": "3a322aa04d5159f58d2e82c7a845a242"
  },
  {
    "url": "assets/js/178.f98e3842.js",
    "revision": "55a7cda2978a12b541d7f23a153789a7"
  },
  {
    "url": "assets/js/179.595116c4.js",
    "revision": "58c6814c7c751db13d11374db101c29e"
  },
  {
    "url": "assets/js/18.60907e00.js",
    "revision": "d989f676450eb9ac074f5ba70ca24f7d"
  },
  {
    "url": "assets/js/180.64029908.js",
    "revision": "d4dc768a900758d09657677147639e94"
  },
  {
    "url": "assets/js/181.7f285a30.js",
    "revision": "98be900189206d9e1bd5ff8551cf5402"
  },
  {
    "url": "assets/js/182.b552f21d.js",
    "revision": "9a7f605b04aa340360dcccd78079f1b4"
  },
  {
    "url": "assets/js/183.8bd11868.js",
    "revision": "f78998526a1d4c49be9a859f84dadabd"
  },
  {
    "url": "assets/js/184.ce3fd3a3.js",
    "revision": "73e5bced6ec09838821859f0a7fd66de"
  },
  {
    "url": "assets/js/185.c2d90192.js",
    "revision": "d575a05b1a8ad9acb1a3bbdef55ec0bb"
  },
  {
    "url": "assets/js/186.ca98ecb1.js",
    "revision": "44fd2a8ea29f66bc3c658db5445376e0"
  },
  {
    "url": "assets/js/187.9db38439.js",
    "revision": "c5f59bea3dd857ac4a5419f6880d41f7"
  },
  {
    "url": "assets/js/188.202f9ff5.js",
    "revision": "325947c03d47eee748c1353e3d8732be"
  },
  {
    "url": "assets/js/189.1498155f.js",
    "revision": "751c4457eb2094da9cf916c24fa53d65"
  },
  {
    "url": "assets/js/19.aefbc04e.js",
    "revision": "451e88e00332b74d21290fda5454a051"
  },
  {
    "url": "assets/js/190.286bbd5c.js",
    "revision": "adb694313e8a3d67fcf40c5e2f730d0a"
  },
  {
    "url": "assets/js/191.56711b07.js",
    "revision": "38169a75e322a5b76646d8d8f45d43a7"
  },
  {
    "url": "assets/js/192.177ecd73.js",
    "revision": "7c978fa152446d30100818a9965180f3"
  },
  {
    "url": "assets/js/193.bebe93ed.js",
    "revision": "2ffd5c5d4340353620920b4e54d32c31"
  },
  {
    "url": "assets/js/194.5adb9529.js",
    "revision": "6c3349ce98ff032280b0f4a01caefd97"
  },
  {
    "url": "assets/js/195.dddd6f33.js",
    "revision": "85bba1f70fc8aaa8e985077ce65f60fa"
  },
  {
    "url": "assets/js/196.1261792f.js",
    "revision": "50edbb6ba368d5e73c09a201adf4bde1"
  },
  {
    "url": "assets/js/197.852d3ff0.js",
    "revision": "0a5cdf624f10a12c6262bf152f089fbb"
  },
  {
    "url": "assets/js/198.16b40e7a.js",
    "revision": "ffb0499712aa51275aa43208c4cb6ea6"
  },
  {
    "url": "assets/js/199.569c4c5d.js",
    "revision": "c39dfdf7aa632b80f0bd262321c372c6"
  },
  {
    "url": "assets/js/2.385ad265.js",
    "revision": "a9dd2e337aa427fa68ee1d3fccef04e9"
  },
  {
    "url": "assets/js/20.c9f06555.js",
    "revision": "b79b6252177a3d1288944de8d2a2f45f"
  },
  {
    "url": "assets/js/200.432067c2.js",
    "revision": "d3318a2029e22610a8bc86f34ee10d4f"
  },
  {
    "url": "assets/js/201.2819ef1c.js",
    "revision": "8581cdc7774c2cf2fefcb605afd90c08"
  },
  {
    "url": "assets/js/202.9ca599a5.js",
    "revision": "7fbe5b4d529a6aa257d036c0865e11eb"
  },
  {
    "url": "assets/js/203.9e123dcc.js",
    "revision": "9737e86d561d3877cda3c46c664c3211"
  },
  {
    "url": "assets/js/204.1ec67fa6.js",
    "revision": "12acac0694b53fc4e8287e998c718f0e"
  },
  {
    "url": "assets/js/205.2dc28a6f.js",
    "revision": "a40ca98a0c608039afb24c6849512486"
  },
  {
    "url": "assets/js/206.9c2f1756.js",
    "revision": "dda1581e5e9dc5046584d3650f5c8ac3"
  },
  {
    "url": "assets/js/207.29e2447f.js",
    "revision": "f47db7c0a095106351e6d358f92d8d50"
  },
  {
    "url": "assets/js/208.f7852000.js",
    "revision": "46213949054180afdb4b01cccac0b526"
  },
  {
    "url": "assets/js/209.97f12f58.js",
    "revision": "92e0b67e1328a6d4a537eec9cd86cad2"
  },
  {
    "url": "assets/js/21.24be6f25.js",
    "revision": "70c0eb01649edf4d6198cd6892d97d56"
  },
  {
    "url": "assets/js/210.b93c5d2a.js",
    "revision": "c2e729af0bbf97c64d0222398a0f1fd3"
  },
  {
    "url": "assets/js/211.523318bd.js",
    "revision": "5e3ac1cc8fb66a2998d8e3b1fa6fa164"
  },
  {
    "url": "assets/js/212.77bd35fe.js",
    "revision": "c9682f34f22f621c437cefe043808527"
  },
  {
    "url": "assets/js/213.c3e667ab.js",
    "revision": "04f2d6593442814a7a2e37fd19c389ae"
  },
  {
    "url": "assets/js/214.6a74fac0.js",
    "revision": "6b0025b5e6fffb51aa0a2b2a802942ca"
  },
  {
    "url": "assets/js/215.cf7f0b35.js",
    "revision": "0fdced5e10ddd5313d112480bd35da7e"
  },
  {
    "url": "assets/js/216.014eeff9.js",
    "revision": "4203a89224b09c5a50af614a7740aaf9"
  },
  {
    "url": "assets/js/217.33e76048.js",
    "revision": "eb7821bb2b7c8ae749ab019cfd060663"
  },
  {
    "url": "assets/js/218.d4870e56.js",
    "revision": "50f598728ed69d1a716060e3b6e696dd"
  },
  {
    "url": "assets/js/219.57fa711a.js",
    "revision": "0c4c7c48bb8b5b1690b8b81b117aaa78"
  },
  {
    "url": "assets/js/22.8c256707.js",
    "revision": "4cbe576120a7c099c32b67c0bed98263"
  },
  {
    "url": "assets/js/220.ea583fa2.js",
    "revision": "de253915b2800097a3c4874c78bf8edd"
  },
  {
    "url": "assets/js/221.a00b257a.js",
    "revision": "f0a0b81eea1d189dddbdeaab410b12e5"
  },
  {
    "url": "assets/js/222.6f377005.js",
    "revision": "405c363a18dca6b27fe74ccf4cdb5c1f"
  },
  {
    "url": "assets/js/223.baa51af5.js",
    "revision": "b4a248d59c521cd5dd867b6909684582"
  },
  {
    "url": "assets/js/224.1aeb025e.js",
    "revision": "b0c26f3b13e3ec4b0e72e4d5dff9375c"
  },
  {
    "url": "assets/js/225.19f3b571.js",
    "revision": "ac77073c18dd4b3098532d592a6a78d7"
  },
  {
    "url": "assets/js/226.1bfe8fa0.js",
    "revision": "5751d4aa0f81d12fd6f79c5ba4fda95b"
  },
  {
    "url": "assets/js/227.8da7b808.js",
    "revision": "43d851eb9049deeebed788d10740204f"
  },
  {
    "url": "assets/js/228.c5ceafe9.js",
    "revision": "bf16569c0d9b1e86dce8b9997cc8790a"
  },
  {
    "url": "assets/js/229.044455bf.js",
    "revision": "5e8a20fe6b59f9f13ed2b5b971928ea2"
  },
  {
    "url": "assets/js/23.3a36524a.js",
    "revision": "d2b8a1fcaf7191ff6255a7921f87e637"
  },
  {
    "url": "assets/js/230.14779fa1.js",
    "revision": "dfaa9533c4f1a3be3a6cc7379ddbc1a7"
  },
  {
    "url": "assets/js/231.06778606.js",
    "revision": "c584617c28a8e97fc5605ffdbccd7140"
  },
  {
    "url": "assets/js/232.a7c9d56b.js",
    "revision": "572dcfd79fdd68b4c0fb4162b064a512"
  },
  {
    "url": "assets/js/233.385489f1.js",
    "revision": "34c2d376dcef7f9686b05e7e18218bed"
  },
  {
    "url": "assets/js/234.9e1efdb1.js",
    "revision": "2b83bb2deaab492b0813a75586a91410"
  },
  {
    "url": "assets/js/235.3bb8705f.js",
    "revision": "06237ede4de38d51366f8a03cd73b224"
  },
  {
    "url": "assets/js/236.6ca3defe.js",
    "revision": "416efb52751e269d0ad35cf3682f5fbf"
  },
  {
    "url": "assets/js/237.ffd2a43e.js",
    "revision": "9b3576954e037dd9d3418e50be9d6801"
  },
  {
    "url": "assets/js/238.a91120ef.js",
    "revision": "b1affbf0a324557064c938ae67fe1e7f"
  },
  {
    "url": "assets/js/239.6366f646.js",
    "revision": "6a7bd1f4694d2963172446be82826ced"
  },
  {
    "url": "assets/js/24.ed01333f.js",
    "revision": "f9987bfe66d9fa7a86b29849c2c77a8c"
  },
  {
    "url": "assets/js/240.67735f59.js",
    "revision": "1299353a547bb2a68335ba8ffbba2397"
  },
  {
    "url": "assets/js/241.5e9a519d.js",
    "revision": "7ffbc672d568a5e8a3a57f731956a3ff"
  },
  {
    "url": "assets/js/242.c8c6be19.js",
    "revision": "85570f72ba4e74f663e30f89c5b60cf5"
  },
  {
    "url": "assets/js/243.7a0f3b41.js",
    "revision": "c4d25bd04cd1d08a908af0550a2f8b64"
  },
  {
    "url": "assets/js/244.c064a9ce.js",
    "revision": "5b47bd97f31467109079adb1c875e94d"
  },
  {
    "url": "assets/js/245.b0c70ea8.js",
    "revision": "745062c4f6e09251ef7f27e73ef034cf"
  },
  {
    "url": "assets/js/246.9b517471.js",
    "revision": "fbfe5f8903649db142cdae227d409b69"
  },
  {
    "url": "assets/js/247.8cb10bb9.js",
    "revision": "c3902ec64bf0ea3317ade52f45a7a7f9"
  },
  {
    "url": "assets/js/248.e2aef083.js",
    "revision": "f978806376c371a87fba44e9113b6c47"
  },
  {
    "url": "assets/js/249.da29ada9.js",
    "revision": "3e648e412750b03dc80e27b5fd4efdec"
  },
  {
    "url": "assets/js/25.afd3b631.js",
    "revision": "830a4cc3eb8e83a167ada133c40eb5b0"
  },
  {
    "url": "assets/js/250.7d64b2e4.js",
    "revision": "52ccacd16f9b08274918ec2486d1dc74"
  },
  {
    "url": "assets/js/251.bb8ce0f6.js",
    "revision": "2b73deee594ba1c6cc9e6b5fe592a22e"
  },
  {
    "url": "assets/js/252.4730573d.js",
    "revision": "f1f15c2217a9212ff3fc7260cf8016ab"
  },
  {
    "url": "assets/js/253.ec74933e.js",
    "revision": "0d7219fd411d681347828532d59106ed"
  },
  {
    "url": "assets/js/254.a571a4d0.js",
    "revision": "c23c3e923b50db877938c2bfce13a91e"
  },
  {
    "url": "assets/js/255.5b7075b3.js",
    "revision": "4a8167626bd898e5495ae6d4236d2e90"
  },
  {
    "url": "assets/js/256.68175fbf.js",
    "revision": "31e57d7dd02288f59b1e919c886a9eae"
  },
  {
    "url": "assets/js/257.1e07224b.js",
    "revision": "219a595d6b5f98c6d3bfb7165e5fc898"
  },
  {
    "url": "assets/js/258.d13eec5e.js",
    "revision": "b9b1848fbf655b3fb543f8239a82ed6f"
  },
  {
    "url": "assets/js/259.43461db7.js",
    "revision": "0b7df72ea702bb95f1777c0b5d696172"
  },
  {
    "url": "assets/js/26.b4350d9b.js",
    "revision": "01c0924f4695d0880e24190400a54bd5"
  },
  {
    "url": "assets/js/260.afc0360d.js",
    "revision": "3d39d128e0d75be3f6fb53b7cd3d01f8"
  },
  {
    "url": "assets/js/261.d1d2b00d.js",
    "revision": "ed110562fe84ddcb5f0f0838dbddac8c"
  },
  {
    "url": "assets/js/262.18b14b6c.js",
    "revision": "9d4697fceefe88bfee48aa8d62d6a725"
  },
  {
    "url": "assets/js/263.98718e4d.js",
    "revision": "35319818e8262cbada800fc33f60625b"
  },
  {
    "url": "assets/js/264.173f7c49.js",
    "revision": "2b048a84695d5adeefe9c5111eeaf875"
  },
  {
    "url": "assets/js/265.ef4451c9.js",
    "revision": "4b945d6e7325b3c52c24724cb1a6d4cb"
  },
  {
    "url": "assets/js/266.c6a2be6b.js",
    "revision": "617c1e930006faea8c84500c86f4be09"
  },
  {
    "url": "assets/js/267.df7a26c7.js",
    "revision": "1f1134ec76027725452513b9d4db75e6"
  },
  {
    "url": "assets/js/268.c8139509.js",
    "revision": "8464ea8c26475f2f9a10423bfb69d622"
  },
  {
    "url": "assets/js/269.a9ace75c.js",
    "revision": "619730d057a92b7a25d6d27e4b787fe5"
  },
  {
    "url": "assets/js/27.b894998f.js",
    "revision": "a048b7fa05ebb6ae63dfba002f2a0578"
  },
  {
    "url": "assets/js/270.316b679c.js",
    "revision": "4a8ced23ff6296e72ac7551e60c9778e"
  },
  {
    "url": "assets/js/271.0a6d421e.js",
    "revision": "0e659aaeab0000b465f9cbdbb0d09f17"
  },
  {
    "url": "assets/js/272.97c2fd7a.js",
    "revision": "aa82feebd435e7fa66dd20ce4f27dcb4"
  },
  {
    "url": "assets/js/273.52d0d542.js",
    "revision": "dde4947acb59d1d79cea0e3147f38f40"
  },
  {
    "url": "assets/js/274.fd7091c9.js",
    "revision": "2c2a9b82789a5fae17092b2fb3c41468"
  },
  {
    "url": "assets/js/275.271f1a36.js",
    "revision": "9e46255535d5cbc0bdfa7a213a271d32"
  },
  {
    "url": "assets/js/276.070ee0e4.js",
    "revision": "3887f1e688e6bcc7fe79aeb4bda9b36e"
  },
  {
    "url": "assets/js/277.0cac5844.js",
    "revision": "1e1b40611a0e68acffb5c5beebf689d6"
  },
  {
    "url": "assets/js/278.631becb8.js",
    "revision": "bb1ee9c401dbd8604a6c6b52dbf18a5e"
  },
  {
    "url": "assets/js/279.507dd6c5.js",
    "revision": "7f2bdd22a70460eb4b335c5ccdb576d1"
  },
  {
    "url": "assets/js/28.ec5c9431.js",
    "revision": "7700ae698722c535244384f89c08ff46"
  },
  {
    "url": "assets/js/280.6dbc7da0.js",
    "revision": "efcae69195a637ed1e534bbf9e61b351"
  },
  {
    "url": "assets/js/281.97042bf2.js",
    "revision": "0a892a02bfc92ebd33f6cb6c63ed9f66"
  },
  {
    "url": "assets/js/282.772cc084.js",
    "revision": "e33470b436669f97722c32882b585e59"
  },
  {
    "url": "assets/js/283.854f51f5.js",
    "revision": "1dc5e108ae24f6cafbd67b13324e2690"
  },
  {
    "url": "assets/js/284.8f053071.js",
    "revision": "d361ecfb5323da6a6f950279cd5ddfb6"
  },
  {
    "url": "assets/js/285.1c3a65d5.js",
    "revision": "12a7e118fbde1ffa6ebfa675ad1c0443"
  },
  {
    "url": "assets/js/286.3095f21c.js",
    "revision": "c16f4d9db977644361de057f43cc6be3"
  },
  {
    "url": "assets/js/287.b2d46323.js",
    "revision": "5eba041ea7c1d6aae0d8443fc1de0714"
  },
  {
    "url": "assets/js/288.b6fd0840.js",
    "revision": "db97fde447db1e2af198573236eb84d2"
  },
  {
    "url": "assets/js/289.f5eee93e.js",
    "revision": "0c7408f4dea0b22d8581369e99ba1376"
  },
  {
    "url": "assets/js/29.fe5c881c.js",
    "revision": "6636af7ea8ddde75435f0993c6b1d7b9"
  },
  {
    "url": "assets/js/290.428d905f.js",
    "revision": "bfb40e0ada52a5fa794529f7c5104816"
  },
  {
    "url": "assets/js/291.1f942e7f.js",
    "revision": "ddd3e531b674118f7b0cca2d47c52bf4"
  },
  {
    "url": "assets/js/292.95611712.js",
    "revision": "2a7e7aac0411717aaa72f5362c9e0c16"
  },
  {
    "url": "assets/js/293.42991f77.js",
    "revision": "8f5c504a48af7fad318cbc45b6994e90"
  },
  {
    "url": "assets/js/294.7dab94c6.js",
    "revision": "f0e6f43e1538f4f0b3e2386056cacc74"
  },
  {
    "url": "assets/js/295.04c3d6a3.js",
    "revision": "50f56e3699ada2ebe7ff041d36a821bd"
  },
  {
    "url": "assets/js/296.b2015da7.js",
    "revision": "b2292242c942dfac84fd967c3f090978"
  },
  {
    "url": "assets/js/297.1ae877b8.js",
    "revision": "6df8df22cfad44db993cbbc42cc56bb7"
  },
  {
    "url": "assets/js/298.e5fcbd26.js",
    "revision": "e31e2ae9597d46689449b3de4be3a2c1"
  },
  {
    "url": "assets/js/299.7f54422c.js",
    "revision": "352d286fc3355ccfbc662716cf3a0994"
  },
  {
    "url": "assets/js/3.5d585ad5.js",
    "revision": "a8edc2f2b0415886d99f7479567d598e"
  },
  {
    "url": "assets/js/30.2cdb9fc7.js",
    "revision": "8272cf3b61d0636bded9b334f970ffe5"
  },
  {
    "url": "assets/js/300.d082d7ae.js",
    "revision": "5b475db55df21d2240de28566b0672f8"
  },
  {
    "url": "assets/js/301.05db3fa8.js",
    "revision": "06381e9aefa1453a42e6cbf812cdb106"
  },
  {
    "url": "assets/js/302.2aa1868d.js",
    "revision": "1cb7746b8c8bf55b212db61fb435bd58"
  },
  {
    "url": "assets/js/303.373a71b6.js",
    "revision": "eda0d46c2c2a53c33115021c455ab65e"
  },
  {
    "url": "assets/js/304.33aa4653.js",
    "revision": "458757a150bf2e2b1ea18fadcb4ce6e8"
  },
  {
    "url": "assets/js/305.886fb5a9.js",
    "revision": "bf33bc5a0b0d0b0d955891e5e5d085c6"
  },
  {
    "url": "assets/js/306.52a14494.js",
    "revision": "a3323fc5b97186f1048d33f90fceb884"
  },
  {
    "url": "assets/js/307.4247e1fd.js",
    "revision": "6d8c2609cb9396339664aa6434e4e384"
  },
  {
    "url": "assets/js/308.7844b5c9.js",
    "revision": "ef9ca688cf227f8783c43abfe6c44dff"
  },
  {
    "url": "assets/js/309.7724b48d.js",
    "revision": "5976a9712c7697fe5225288a8f2524d6"
  },
  {
    "url": "assets/js/31.5b594972.js",
    "revision": "0e3e7989f3ec9ca8ba02c14c91a91cdf"
  },
  {
    "url": "assets/js/310.a6130d1f.js",
    "revision": "e54c8eaf0a11e4c27246e5f3ffe70bdc"
  },
  {
    "url": "assets/js/311.d874b915.js",
    "revision": "13ac1c1912642fcc9e0c44ff4e75b809"
  },
  {
    "url": "assets/js/312.c36cb625.js",
    "revision": "19d2be0cbfb2ea4abc91c17958f3cea0"
  },
  {
    "url": "assets/js/313.e9a31dd8.js",
    "revision": "a7082618578e149ab35d8f8413d1c4ef"
  },
  {
    "url": "assets/js/314.b486ff51.js",
    "revision": "703a6eb449879177d9de273fbbbe5af1"
  },
  {
    "url": "assets/js/315.41dd9c9d.js",
    "revision": "2b50cd988ed9fb4be04eb9663d608108"
  },
  {
    "url": "assets/js/316.311520c5.js",
    "revision": "3bfb3ffb2626d0d55a8813a4cb34309c"
  },
  {
    "url": "assets/js/317.1e2d730c.js",
    "revision": "d1dc9df8287b9ea0ebb0e29991a231d8"
  },
  {
    "url": "assets/js/318.997d41ff.js",
    "revision": "aaaf31442cbcdb05a7efc37ae3633267"
  },
  {
    "url": "assets/js/319.1acaade8.js",
    "revision": "831f090d11da3354e1ada2ccada83286"
  },
  {
    "url": "assets/js/32.2f7de185.js",
    "revision": "8fc280cba82a33a92509e35c3ba55add"
  },
  {
    "url": "assets/js/320.e2b99888.js",
    "revision": "4337dc337eb4979f91f7d1d4c275c3d6"
  },
  {
    "url": "assets/js/321.cafebc27.js",
    "revision": "0f43d41c43375217490825f7167ebafa"
  },
  {
    "url": "assets/js/322.7dbb8a00.js",
    "revision": "cae893c24920c69ed133a8dd9d6538e7"
  },
  {
    "url": "assets/js/323.47f63a23.js",
    "revision": "712110268141cfa612498b2a128aa8b9"
  },
  {
    "url": "assets/js/324.e6c4e6b0.js",
    "revision": "caf669e5b52faee6863a0fe8be1f797e"
  },
  {
    "url": "assets/js/325.08977488.js",
    "revision": "0508b2cb1f4cb999586258072d65bba9"
  },
  {
    "url": "assets/js/326.54aea76b.js",
    "revision": "085b746e2d8a8d0e2d8b1663de0a7003"
  },
  {
    "url": "assets/js/327.d6e3c4bd.js",
    "revision": "5f75c7ae7f184391fef097195e3f2a66"
  },
  {
    "url": "assets/js/328.be1b6cde.js",
    "revision": "e63178888e5ee6cf389dd15abef990c0"
  },
  {
    "url": "assets/js/329.68795dba.js",
    "revision": "fb5576dc311bfe0546ce1e58a80b89a6"
  },
  {
    "url": "assets/js/33.ad6ea6b9.js",
    "revision": "77593f55bfede25e0267bbf2ee1644cf"
  },
  {
    "url": "assets/js/330.5f56e7bd.js",
    "revision": "20b47a3b02bce0b1b6cea470e16da6fd"
  },
  {
    "url": "assets/js/331.4075aa8c.js",
    "revision": "92a6b81d3a417b0f63c5a6f5df8fd59b"
  },
  {
    "url": "assets/js/332.e5055dcc.js",
    "revision": "9b56353b639aaf742a96e6049d8928f8"
  },
  {
    "url": "assets/js/333.d8a7b3e0.js",
    "revision": "27f7fcb629219624c26c5789715a5a55"
  },
  {
    "url": "assets/js/334.f6c54273.js",
    "revision": "f7a62302d493c396d36fc7a832ee9275"
  },
  {
    "url": "assets/js/335.53e0bb46.js",
    "revision": "d8e2d5b0b85f45797a44128310a4c6c3"
  },
  {
    "url": "assets/js/336.eebb7c21.js",
    "revision": "3f986d639ef41792749c31f7cb4be450"
  },
  {
    "url": "assets/js/34.4227cdba.js",
    "revision": "fb66f20c8c1123041e17abdeab279430"
  },
  {
    "url": "assets/js/35.ced5ad30.js",
    "revision": "565f4784c62f2fb22de7eed3174e0ebb"
  },
  {
    "url": "assets/js/36.1dfc59e0.js",
    "revision": "4d324730e988f1f6913e11e0e549e8cc"
  },
  {
    "url": "assets/js/37.0e48024c.js",
    "revision": "42aa8a0fb893125f4bd127a1b35ad20b"
  },
  {
    "url": "assets/js/38.316b3024.js",
    "revision": "b075789ce22bbfeb438a037a3ebdb1d5"
  },
  {
    "url": "assets/js/39.3e6972e6.js",
    "revision": "8c0c6779df7dab3f92d6490f4444cdfb"
  },
  {
    "url": "assets/js/4.d61341f0.js",
    "revision": "969711189f986f61c5bf139e9b2ad266"
  },
  {
    "url": "assets/js/40.7b569a7a.js",
    "revision": "9a84f75ffee1a2544830a5410fb71e86"
  },
  {
    "url": "assets/js/41.62b5f373.js",
    "revision": "ca62c940c3c746d17f1263af23749647"
  },
  {
    "url": "assets/js/42.fd185533.js",
    "revision": "6f0fe84af845e3e0b889b0ffc7b1e8cc"
  },
  {
    "url": "assets/js/43.df2c7108.js",
    "revision": "82fd7807c8473abefef225c8a1795d95"
  },
  {
    "url": "assets/js/44.ca22c33a.js",
    "revision": "fa1b9755fed6e4988fef8c27a3bc85f1"
  },
  {
    "url": "assets/js/45.83cb9232.js",
    "revision": "68dc7e2ceb93d127d38d56357e22b783"
  },
  {
    "url": "assets/js/46.cd060ff1.js",
    "revision": "f59f5a085e9425c7874566d7a94b2453"
  },
  {
    "url": "assets/js/47.ea6bcd90.js",
    "revision": "fb9df4ea1ec876dafbff796bddeaca5a"
  },
  {
    "url": "assets/js/48.190b76ce.js",
    "revision": "85d6ef6f0f62f1fd6b3515bd0633813d"
  },
  {
    "url": "assets/js/49.1fdd7b62.js",
    "revision": "97b9c0ba58122337072590d106c26f6d"
  },
  {
    "url": "assets/js/5.fe50b3d3.js",
    "revision": "d2333ad1d73aa6066c9a51ca82067bd5"
  },
  {
    "url": "assets/js/50.f9cbb082.js",
    "revision": "318ef0d5be825bb912e5cd930d3b2e50"
  },
  {
    "url": "assets/js/51.ccefdb90.js",
    "revision": "bdcd6861037ddabc1802166225313775"
  },
  {
    "url": "assets/js/52.1fc91867.js",
    "revision": "fd11f990fc4d81a54c9e07136fe8147d"
  },
  {
    "url": "assets/js/53.cf6f72a0.js",
    "revision": "6eec6fab3a67498c2725a720e23f4169"
  },
  {
    "url": "assets/js/54.50e732c3.js",
    "revision": "b782b0a8032fa788f0b91d0ff144b535"
  },
  {
    "url": "assets/js/55.6bba60e3.js",
    "revision": "79c0b1edace29c8fb35074357f561aa4"
  },
  {
    "url": "assets/js/56.5cb792f7.js",
    "revision": "48c4885b76e5be3e589ed3384dd4a45a"
  },
  {
    "url": "assets/js/57.7273ce9f.js",
    "revision": "3c81d44aa2e9a719ac6680a4c890b389"
  },
  {
    "url": "assets/js/58.e4a8f8ed.js",
    "revision": "7e4b95e16a19bbc6c88cbd84ad2b0dc7"
  },
  {
    "url": "assets/js/59.5ebceecd.js",
    "revision": "32f5f6609ff5169534f5b4a608c61d57"
  },
  {
    "url": "assets/js/60.7d85688c.js",
    "revision": "031444d7351219dbdc6f0d3c9322c04e"
  },
  {
    "url": "assets/js/61.b782e577.js",
    "revision": "c3a9de557f0e405bbcb30ab97fefe775"
  },
  {
    "url": "assets/js/62.5cbfef44.js",
    "revision": "dffebbd9febf568e9b43ad3464e3a333"
  },
  {
    "url": "assets/js/63.4b2e75db.js",
    "revision": "0682141b8fca989f3ea901fb6672fe0b"
  },
  {
    "url": "assets/js/64.fbe5484d.js",
    "revision": "c919efbe1aa892009805eff31b43019a"
  },
  {
    "url": "assets/js/65.17e65995.js",
    "revision": "6123480e56daf1328d8f71a2f134c2fd"
  },
  {
    "url": "assets/js/66.2ed9ef06.js",
    "revision": "953e3ea558631198f8a297e255697a31"
  },
  {
    "url": "assets/js/67.c4b53474.js",
    "revision": "e573befd443297ea0360def72f242df4"
  },
  {
    "url": "assets/js/68.aa60ed72.js",
    "revision": "74a455ac6ef6356a03a7579e435ef413"
  },
  {
    "url": "assets/js/69.6d692942.js",
    "revision": "f49fbb004bae4dcc01ca33d256d18e1a"
  },
  {
    "url": "assets/js/70.47c7bacd.js",
    "revision": "22090b659c449cbfaa09d536f3fdd864"
  },
  {
    "url": "assets/js/71.48cf09c6.js",
    "revision": "883e7f670fc76239cbf0e43a0c4c5c62"
  },
  {
    "url": "assets/js/72.e1a94f5e.js",
    "revision": "c804a8182c01bd0c5ef7f526dd71583d"
  },
  {
    "url": "assets/js/73.55505802.js",
    "revision": "c3e9a990bb480afa2c4b6a4cb4589590"
  },
  {
    "url": "assets/js/74.b108f99f.js",
    "revision": "c5ef7f3489233d1f0bd4101089fb419d"
  },
  {
    "url": "assets/js/75.fb20c6b6.js",
    "revision": "76ea7e87fff606e4a3b5d4d4f600013d"
  },
  {
    "url": "assets/js/76.ecbde2a6.js",
    "revision": "9f3d1ea8292be956897afbbe623cec65"
  },
  {
    "url": "assets/js/77.84b2f38a.js",
    "revision": "1d5e7a204258f574d21cf8ccdba131f2"
  },
  {
    "url": "assets/js/78.d3542de1.js",
    "revision": "8aa461f3a86050d1f923e9015f6ca8eb"
  },
  {
    "url": "assets/js/79.14d7b2f7.js",
    "revision": "fa07a402a00ffcde6f39ebe0915cce41"
  },
  {
    "url": "assets/js/8.d2682aa7.js",
    "revision": "840e3caa43f29f36c48702a112745351"
  },
  {
    "url": "assets/js/80.f2bb668a.js",
    "revision": "b95cdf80fd125e24801823e03efd8c9f"
  },
  {
    "url": "assets/js/81.b294987d.js",
    "revision": "63f222ff6a45659ae60309556eb15a07"
  },
  {
    "url": "assets/js/82.25849d6d.js",
    "revision": "f4d112a35d4b23a37a23b6158ec6f953"
  },
  {
    "url": "assets/js/83.9d8180d5.js",
    "revision": "00e5033d7fe9e100e44ab7b772f282b0"
  },
  {
    "url": "assets/js/84.f6f51574.js",
    "revision": "24d63a9158c2ff6d67a031690160e641"
  },
  {
    "url": "assets/js/85.64711044.js",
    "revision": "0192501aecb6e047fa775578c6d90fcb"
  },
  {
    "url": "assets/js/86.03dd9d8b.js",
    "revision": "42e9d82fc14a279451ff62ccbd0c92da"
  },
  {
    "url": "assets/js/87.add48e1e.js",
    "revision": "b017e0cbd2e48ffee6bdc1a45bd5e6d7"
  },
  {
    "url": "assets/js/88.dd51106b.js",
    "revision": "7e7e05aad64b5d5394f685a97701bbec"
  },
  {
    "url": "assets/js/89.77b89a5c.js",
    "revision": "fa6276f57e8fcfbc4960afcf53a027e9"
  },
  {
    "url": "assets/js/9.288c3ae7.js",
    "revision": "55dad3dbcb2dd460a23d7bd9375d91de"
  },
  {
    "url": "assets/js/90.992b9d16.js",
    "revision": "d82ed174e3c11a3f23ac845dbe992c28"
  },
  {
    "url": "assets/js/91.01bfbf6b.js",
    "revision": "b966d0b107df97c852357fa3414fd146"
  },
  {
    "url": "assets/js/92.218a17e4.js",
    "revision": "e7aa947fbafa585644507a0eceed7e70"
  },
  {
    "url": "assets/js/93.b44f852b.js",
    "revision": "d4946a011d446f5c02066c1fc483071c"
  },
  {
    "url": "assets/js/94.731790f1.js",
    "revision": "5e4daa63b8e8f30928b3a3bcf0f13936"
  },
  {
    "url": "assets/js/95.99abd4c2.js",
    "revision": "450725dc4205e0b6bffce5368fcb3ebb"
  },
  {
    "url": "assets/js/96.56a1650a.js",
    "revision": "cf61c831f4739f15953457ed7778157a"
  },
  {
    "url": "assets/js/97.4b6e285d.js",
    "revision": "a70887f729b005666ba1fedd14103aef"
  },
  {
    "url": "assets/js/98.307a9989.js",
    "revision": "1aa75c44b78dff797d2bc292f63b56c3"
  },
  {
    "url": "assets/js/99.85abf0b4.js",
    "revision": "e464d5b5476c387a66c329794fe4f7f5"
  },
  {
    "url": "assets/js/app.e91556c5.js",
    "revision": "3508fe4529ab1f19ca0b22e90aaa5623"
  },
  {
    "url": "assets/js/vendors~docsearch.ead308ff.js",
    "revision": "5ac31e5a9e2ba05445960cf708c44ce6"
  },
  {
    "url": "index.html",
    "revision": "436d6ba8094595dc271be228d3d6ba0c"
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
