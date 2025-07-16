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
    "revision": "049088e8dde851606e6b2d1e5a56d981"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "9f57c5327535b2eaededddac181448ed"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "acd9e2f96d8863ff4cdf747e3df20c88"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "b78451d5c8e85c53905c094aa124f9a4"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "67c387d95abf6a32a6d7b3cbbc87118d"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "c8d1d96602174021c8b454938866d185"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "1b1cdaf08da63b06ad2a976a355978b9"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "f17676773081e56cd353deb2ed434c28"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "1e796b8a4773894f7a18503c64dedb5c"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "4374776ac6f333615da49af0630c8283"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "abb9c7f1e611755efa73c3e03797eb3e"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "2b26467b433426270bb5effe8da8cfa8"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "0cb3942946417d5a4458a5b94c5adc32"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "9c61cf969b369dd712c9f996408bbdad"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "4ea465802c5b41244c3d1101f201f9a3"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "dc7772636fbd83af81bfe78b983162be"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "4b88417931a33aa0f27890af0721d1f8"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "5770dc94063cc0b5759b699a4b8f81a4"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "2203ae11dae24d11203889b76ac63aeb"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "8850180113e004b9b18f69b13b794dad"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "0f0e0002e76325248fffd1ac75647454"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "64555e6bef7a61ed5897715d2d7035b4"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "b736919b2acaef7fc6dc12e0c955ef4f"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "beb41bbb903639f2232c000712dfe683"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "deb2e0b7ec21dfe1dd2a00d011c2bea9"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "32c5cfa93bf6fad81f3b7d53504382ed"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "7851cc85f04d20fa21275c06d744f18e"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "eb4646e379e4a9d87cb1f9fc90e1feb1"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "96ee7c9a37fd8db1537778623a0f8efb"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "ea9eb3d775476ee079d5403f6fc39411"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "b1496b0bdc7bb17138bf9e76877e9062"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "c3b5d466eb33822cd34c998886790c39"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "e4bda2d17f194b47e9d11537b1ac6eac"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "a687054279393a086a3726454690375b"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "2be97c25bab07b90991ea958f6062304"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "ee9e6466588235283103fa17756886d4"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "f53eb12398bba57034777a2c3e5491b5"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "0a97f6d799f09a88f81f22d475f24670"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "1e97128005d1b4537ba13b34568fd9ea"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "3ba962f0a2a6fdb37b11a88bf8c5cf73"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "ab47a1c3df92a6216894d5d8bb079a8c"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "de8a41ba66ca66d1350f45edca2454c3"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "cbd0fde2b5fc0d3820ba2079665d819a"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "5783f5e33d5dcb301e1abe05cfe00921"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "69db7dfc7bce8c01cc18421750c10a96"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "621c36a21b62a902d56d648fc2e379b0"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "c706c43d14afffb1ba50524ad7fff4f6"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "b21a06b6af86bd5120c0d1c9ba11dd37"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "2ededbd00e7fe6bb5c8b8cde06ecc7a7"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "35b913f67c6155af05bad273dc74ed54"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "24f1f60b8a08586a3146c7112fdb9fd3"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "dce34f0e36d717b197947c0b586266cd"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "018a8de51e9861960ba08918f59fa55b"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "0d065e154ae354e5e7356f0b911b84df"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "61b6f8b29d37178c29f72bd1b23e4c7a"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "1701596840132032c24207b0823a12c8"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "f81644633bebc180bf2e4000d3f1f1c8"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "971e2c3cd7f21e2cdfc17831e43b7d3a"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "0bdec6ce58d1066809efe1f88b1d16e5"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "9ea1425d4b7a7f55b3f2633890df6ac8"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "d9b59bbe983247b100acc1f6273a28d3"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "52469caeab8f2d7b7e9082b93d0519c2"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "c77c82157c5a09da6c5d1c1046f75b4e"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "8d2304deeae7e8dab328e42ede1f981c"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "a0067e3104106607b012ff022b1e3e9e"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "e11d98c86b320506be18b098e545e868"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "9ce593dd84ea7bf53c79642e91ea6f7e"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "01633030449f5711e3d9b076006b70d5"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "751539dfe1b7737eb3272a5524552988"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "fae9d65d577d2597349bb879cb68619a"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "3f8bfe146106ad441c475764deae082a"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "ed4797538c5a8569f89b4e9b0ea76dab"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "cf8713208989fcd0040d5fe9b112ccce"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "5e205da41abef445f94b077de8bcf9f8"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "e22483e3a52ad831b7b3039475fac381"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "4e6804e4abea5d6864ca32a867578556"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "f70ad4b87f8374df9e4085522bad6f63"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "470ff76887df7724fe70700c937a0b93"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "b04495e3d3eaf456ed43da613958f7b9"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "9478a47da2e39ebe0921fdcd06cedbee"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "1d86a0563132879970e7c91d46597cf4"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "8e6fc4f7a73b9c99f9640958b56bc390"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "64aa7cd28c5fd49a6b57daf2cb262c63"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "520bbb18fabdbc3b9116605169471819"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "48dcf9c2fddeac35103cb3d9e933ae4d"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "0e24d697513f54121397da9ae439843e"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "eea3445e03a92e8dacdba4abe9e2d850"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "45be22bb972d8da3ea1e09a001103d9a"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "7e00bbccdb0ff6f0c1d3b2d1905e81a6"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "3a3c3ca05f171f9389b5d511f7e19554"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "9723b8a506777e28da3073be1f3799f2"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "628f587d993886a90ca202f2640d7c58"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "a9879e2dd539de915545dd061e5be616"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "3a48fbeed59dee03d50d4f09a66fc9f5"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "3f80e0ddfd4db7b996066f85ac2a9b72"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "5801d76ca24d2f8aa316acfbbc6351be"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "197a093d9cb799fb9cf7b79806b19b37"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "5a6d6d9e96529d1bc925651395f5f506"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "8322cfe83f61a81dde631ea12390b19e"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "97fd10fc594be6a8f57178c3b299a910"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "be5cf711e124eaff66b4985df5109bdd"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "13c6c5576518b4589d50edf962938d8a"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "ff3bcd46bbc6d700081b7791217da45b"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "2e49edbad4780a994500172ea49552d5"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "80edbe4de06b10a0989773d12632f3e8"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "e59318b10c6600f0c51420b81b12fa7e"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "66b808087251557e1cd5f73cc0e39877"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "d39bdd824b6472a36b82061d4bed5b81"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "329d2fd4b2b6b706c87de28a1b124147"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "6685926bb2efc34ecb22b9c6f572fe80"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "8aaa4f351368fbe83e5bfe2be57f00e3"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "d14555713ad91415a94b5526ab392a99"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "0fb84dad02f3a94b89958a3dee6a39e8"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "02398a19280a8e5118510d75603ecb3c"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "2137dbbe23c5049620ef41bb0483fec4"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "d6c82776a712601a43882e4c1c825b45"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "a0dce5152d8251e707bb649b53e2ecfe"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "6a10f256ee5e7a5a96acc6a2c97e01aa"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "9dc23847b2c5a0c974675a615d5865dc"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "f9866c6f92ee5ee8dec88ee567397662"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "ade1e24e6155c15511d4fe6bc79083b6"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "85175b6983932cc4e43c5738d2340664"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "28c11e88b89d21fc5e37df7bc379b179"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "02f76a0487d819be3b486648c064fb3b"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "230580e8710ddfbaaa182abaec1e0ae5"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "3fead5b47a2c5366885ebdc4933ba869"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "3067625fe61d23d0cd66da16a14f3a81"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "9162f5aab977ffb92b7267f5d7a36f6f"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "bca9168ca6d5a47d9ec83dc978c492a6"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "d131b1fc4ddd7d45b68e52749afd74e1"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "75bc5853420e8fdf05724b0181fa6f93"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "a1c7f3ccbb1d5b43ab158f1e5d6cccdb"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "fa5d90209b76fb6d240afe9f5b5d9afd"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "7f3b3abb1de17deecaa887fc3efed249"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "f98f104027b9f44a6d6576c32a6cd15d"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "bcdc1023a51566e4f00d45f9be3565f4"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "abf1db5222196ebe7e232ae6740258bc"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "086271d003111f13bb2cd4baa71b3f2d"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "f3128d29275b2bed46fce04212c51c4c"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "10e4d85a8e46586c2c4de757b1cf8070"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "ac36973a449102715e76bc49bc419aa8"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "1af71b60dc34befc44753ee49ff99028"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "24074051ce838dcd3e44f2fa02ff8d52"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "d8cd3433396d36fbd12453dd2d2715f3"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "e62c128844a41b4e7d87dc12a0564831"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "9a8102e39f9d39fc453b4aeea6e70f29"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "fad528cad11389760fc19ca0698d1f95"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "61807b8785aa65d08563e0d7a33e94af"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "fab1f08ecc2bb36c5c1c1a591085c1ac"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "7de12a67971066d5991ab7e53e1c9b37"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "b18685a2f11d3139aa08aeadc341bf17"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "d37e9d518a90222f4c45aa8809599f95"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "3f11a885fcb6374371d3828c3e710925"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "bee83c334814a7e17882e6efb830d55e"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "bee680a4953332bdc725c1f03c95ddaa"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "26e2137f04d2b0468776962c7081e4bb"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "ad5bdc1266e3d7284bd0ab3280507dbd"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "e9e2990a4ab910ceb953e3061b4c3d8f"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "c0b8b4b59a70a62d9c6b6185669adcfa"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "6239717252dca69b2457224a7a1a753a"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "9ebd1cb800e9856e5e852b65f9716224"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "9b9f20cd58fb45bb0722e2d873bcac5b"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "6fc749d4394b6883a9cd9e57c37d9340"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "97d05395a96cf9c70aedbd60aef11acb"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "3731cb960f214deadd63b20eb9256d52"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "28ceb68ee6743374826282842db101ad"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "cbe13239420d293370b7b2da2031266a"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "933c934c8af1459c79bc538eb1cd4bcc"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "e65055fdf1d3e824efb97b630e70edeb"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "d4fe245b6ca58897d795ffd895a0d5b0"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "ae94b7ca680b4835896678465b18c761"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "c433babcb14ea5b90b846a1eee816417"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "1619b931c09539cbdf22144b7da0661b"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "9eb19ad62f6534c44f318e7dbcb7541e"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "90fc7369c902a8aae67ec70402c706d9"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "be9e4c8e10f7306548fcc2d3f5889d09"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "e0e07678dcfa0f1b82f9bf99afdc1a02"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "22a46b87e094a4dc545538cfb134e2ad"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "9d0ddf91f359870e847a161aef157a77"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "12d6cebd8fe03cb40a0530f4a5c6af9b"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "fc7a3d514e6d19b4751ecc7a307075f5"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "729ca926213f35fb508211ff0faf9feb"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "85a2ecf205998cc7f2b64ea17ef06192"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "efd21d5ab675784ffe4cc5c5675aba9d"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "d7d4585fd71e789bbd6c6230011d2114"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "c742fede4fc3cd406b282f0e4b334859"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "628f9c1369fa85131c879300f1eb2716"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "047574911a4b73101a866e90cd433d64"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "122427f89b71394173d3b1d6abcadce5"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "71dd2a21878695c401fa669e6a426595"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "ab35fb0a35d95c04d13cfae66dbc6e0b"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "2c224ab2b1781f8d17f9c4de2cd56663"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "148aaa4300222f3df534dbbdaaae65c9"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "4df265962700694299fc580660894a48"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "f33b16a26f63c1aa3cf19995cb7f1882"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "020b126dc697fcc55fb46cb41f72b253"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "6bccd094681e3d74c7afc89e4d872b5e"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "bc7aa7f61fff46a306817dfb9be1e717"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "90760c36f133004b2ebe658c64bb3f8f"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "02bc1de80ebe6b1202deb353ee4d843d"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "6bd43b3bfa7cdc7eed7d6a5a97be8062"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "35b1c3cd59ad029c31a32432b61be16c"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "33f465994ac4ed86bb71aed01905d9bb"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "29ad7a42fe8e107a71ce1e6219a3a0c2"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "9966edefc9276865a024dc0a06340e6a"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "ece8a57cc7b372020bbe1eb6619275ec"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "c0513702c49b38f792ba34340bf841dd"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "63cd9649ce2c85f69cdd5c2c28506c0c"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "e99d7aebd179b124d3211c1afdca2867"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "29d5eb4b2cde712f470870533954823a"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "9964f1772ce79cda463fe26909d35a1d"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "932ea2f32df5eb15805db621897320a0"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "c81ad9b18ade3183cef4c0a85e2e4920"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "8cef64cd01d5ea21c285a5e24cb51830"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "32feaacbf0a5cc17639f529b2266f1ea"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "2e4f48f865c1ab9d633be4994d0f0faa"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "d2d7db31f619c83d9dc00a9df529c469"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "fc4fbbb1c7752342f399003e04a2c3bd"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "8f9cc655b237746d8ca896a44a6e619d"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "a5ed7ba5f108c7b942f0c329ce3ec06b"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "1d9a3faad8947956b604dea43b7e657d"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "2f4a151906085cd7d198781ae968c0f1"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "2b4caa59cd9f9af0aeb3205a5c4995a2"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "cc552caa989ac43c879fbf25522465ba"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "1a517b7368cb0460d4d47af29d93779f"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "fe478dc5a02b3006fa9e172021fdd113"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "453c2617b797671e17eb5b6c151e0fba"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "992018eb0f8e56b60b6d4a38f76bcbd8"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "8032bb7302dd5b8a8c65cc2b27a63af7"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "f8bc5160345b1f584a4df69230d1c9bb"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "1d87e4639de4e63f50d8bd05fe4aad04"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "d0f5b4d879a782164b4066b7b941327f"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "7ada1fe89b4f02148bf982f047b6ee33"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "ed6cbec51013bdb466e34ec1d9f55a98"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "1b0bff05c9cfde8350c0f3eed69289f3"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "855cb7d86b3ad894377e0ac34fb48a7d"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "448d24df5f0cfa127d1d56f25ee3114c"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "d744a9d5beeef4a1f43ce139350a3ae0"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "d066f0537ab68e7739a7fa0c7e8a2f04"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "e05c8eb1b91ff7d910d9c7f7a96c791a"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "0961834281c40ff87c4d29a69032a4d6"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "753ecbe258726be4b4bbb15d807ebe28"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "b0db1eafb4eee85b38562b59f719d5ba"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "72acb2edbeb2321764f75892da7482e0"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "bf4c9abb0d2e7dfe737ce5046be08da6"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "b977370d4ce620e03b1c5c3d8b29f3a1"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "e363ea7ca03636fa97574a31f12da8e9"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "0e26d1e51c8440448fc0b53b9669a832"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "6c91ae9e383315c08b682f63c078348d"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "25e2b8deefbe8f2ac7be4b0a71fff0d3"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "930d9cdfab4ea5ddfcba3495fdd153f3"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "ffccc40f8e3957d248eba391550afbfd"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "c1555302345b3838dd315e2c8050f825"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "82fb055b2358c6d9bbc848cb2c7a07aa"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "87d5fcff4cb3214ba8e3e796d2763ddf"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "704226e531c8a1b0a4658c4d3beea6d1"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "24f3203606fd004b81022b13496df89a"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "ce5b8790c8349633abe6e2405ec6ddc3"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "c3d7754796ff1677196af88d7ac430f3"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "255511224e9d152e0f9e6e7212ea2fd5"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "6161f87425f23f15990210c96adc6ef0"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "cc341d1e1c3e2d34df1029f6835ae241"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "6968c6523709cf913c7806b6a8462d29"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "f1be0fde1f0d471d5b7459490010051d"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "4a305f9415b1b23846929bb47f8c800d"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "31f73ae706a10ef41028c80d0afc0b84"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "c9e194ad24fd0a73081736812207db2e"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "5fbb4583340513ad248cd3fa94c82fed"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "2727037703e69c308fa0304c15d4690a"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "3bb4130d2fb53552626f10efd69cdd7b"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "fa52810fda7a7304bd30693918fd133a"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "f5525594e4791e9868d80893662a0efd"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "05a8c9c6c160ca5a6db923506cdc46c5"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "d42c302a0ef4395f67ddd2394af9caf9"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "1dda559fed1a861ecc378f52242794b1"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "106b7733e531666aa674904479909168"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "62b07de8cf05d05020a727527b34821e"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "50dfd9e484b88caa4b31b161d10d7dfd"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "b7687fa7bd55aa3e53a4687a5b00016f"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "ea3dedbb330c319e94bed12df6981468"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "dd4daaf12529b0e209b288318f49ef2d"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "10a70329605e0de52158144cfc9f8613"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "a6d161601ac5102168b2ba609b29eafd"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "6697768e78e600cfb675fe0aa8bc4bc0"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "8b7d98bc9378d2a25ec111c35014003d"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "8275726f5b6f81deaf16b3e941e63197"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "488685e9682d24c02ef4a7c7111c16d9"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "cd662c557f724fa2bf00b0d7fff7228f"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "3ab75b3e3778b6dfac204461e0c2ccb3"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "a826fc80fb96d58c26616d334893cd3c"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "1a8a6e1912f7d45fde7dc09140013521"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "486028e84fa26f335acdfd136c50eee7"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "a1c455d64880b0448a6d21a6f5e6a195"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "7d776475d2b1a18ff69fb827afaa9212"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "6781a5902dba072f20cf4655360c12ac"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "2d08129fd6e9c130c07be6dcfde80564"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "c5db5df0bc6f8ada4de84a1ba8ad8e2e"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "4fae0885e432638bec8a4194cf5c39e8"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "418be76f6b4d0714a4f9aa86254dc0c2"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "b129b8c7274cbcfd3b9f90d28c20121a"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "94a0e53caa10f6a1a0345c545db811ff"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "9f523ec816db7dbd1f7ec7012995b90b"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "8692d89fdaa94c06aaae115897324518"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "426a4b3e1e4b03a0635afc2a02006e5d"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "af2f6af86e8a85f55d7dea198268482d"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "2fa786440ca6afc78d129d77d974a51c"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "8889a98afd7c1f31e5b0051584640aa0"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "8b6b977a11af0d4d6d3633ec29d4ac02"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "3367137820288ce4d225cd2a882f2a05"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "763408914eb14d8ab003832a1e59d156"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "7447cb0645498a3efbc56b49ed355765"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "ccafb94fb585c20840cca272bda671a1"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "7b38783fc805a3c0321979339ff65ffd"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "fab242447267f42b1a390293bf123f23"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "d0a69a78c1e682f75924459e2f86d9ed"
  },
  {
    "url": "404.html",
    "revision": "f015be7585935f60e5dc76dda9098b21"
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
    "url": "assets/js/100.4a34ca45.js",
    "revision": "24de67166f8425e7822932b3fea7c7f3"
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
    "url": "assets/js/103.d261c109.js",
    "revision": "67c57cafe67e25351a0ffba08bcdb8c6"
  },
  {
    "url": "assets/js/104.a32fa7b6.js",
    "revision": "4698b3d55244fa860a904e56566791e1"
  },
  {
    "url": "assets/js/105.e08be4b6.js",
    "revision": "c3b872343844d5078a2db2d43729759d"
  },
  {
    "url": "assets/js/106.e4969772.js",
    "revision": "7bde74125349f14c7e54df017f2fda16"
  },
  {
    "url": "assets/js/107.eb2700c6.js",
    "revision": "0fafc652287c64d36c49e37b0f046bcc"
  },
  {
    "url": "assets/js/108.ad83daee.js",
    "revision": "bac9dcee89196d4075a21d156411f036"
  },
  {
    "url": "assets/js/109.7b035483.js",
    "revision": "ff245d1556ac72c7efd71868fc38069b"
  },
  {
    "url": "assets/js/11.9d7dbf76.js",
    "revision": "4c2d84aaa210b1b6e2d8ddfb9f8c1e0d"
  },
  {
    "url": "assets/js/110.2bf54fe7.js",
    "revision": "341b0ceb3f95e3b9e57e5579c73a75dc"
  },
  {
    "url": "assets/js/111.64b8daa9.js",
    "revision": "3c35410f0f7b4cdd71bb37f6c6aa7b0b"
  },
  {
    "url": "assets/js/112.98d3d703.js",
    "revision": "69ec90f7e623de65ec20c1c9b527c1c2"
  },
  {
    "url": "assets/js/113.d43434b8.js",
    "revision": "d61b9b702e390d60ebba0ae0740ba597"
  },
  {
    "url": "assets/js/114.9c97c6e8.js",
    "revision": "d33a4d9435b01675154ad105c0f82389"
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
    "url": "assets/js/117.af0193c9.js",
    "revision": "5f0a9b29184b77c525ac11640c957d5c"
  },
  {
    "url": "assets/js/118.7ecc39b5.js",
    "revision": "0de0e62cbe871febaebc32193f6d009f"
  },
  {
    "url": "assets/js/119.a6f4bcf1.js",
    "revision": "73d2ab736620afef743deec474d36952"
  },
  {
    "url": "assets/js/12.68401d26.js",
    "revision": "49467b6210626a4090f09d31c500854c"
  },
  {
    "url": "assets/js/120.d846e1d6.js",
    "revision": "30980a36a78174c653b1154c22cc6039"
  },
  {
    "url": "assets/js/121.941fe837.js",
    "revision": "42252e026540e4380c99cfc6f6560b6d"
  },
  {
    "url": "assets/js/122.aede466c.js",
    "revision": "149c239f4f8600e4d0d994980a95fa1d"
  },
  {
    "url": "assets/js/123.d3c74966.js",
    "revision": "2035ee25c4149c4c35efd513b66e6562"
  },
  {
    "url": "assets/js/124.99e7881e.js",
    "revision": "091a633733e34fb4697954a42c56f90f"
  },
  {
    "url": "assets/js/125.bbc36efe.js",
    "revision": "14f94efc7c421607fd14a9ed9ef81a65"
  },
  {
    "url": "assets/js/126.9336a126.js",
    "revision": "96d17b36c917c57b157f07719d85808c"
  },
  {
    "url": "assets/js/127.97e59640.js",
    "revision": "a0e0a498738132230d2b1d1e126b295b"
  },
  {
    "url": "assets/js/128.b10c81b6.js",
    "revision": "daf9cc7d098f6e46f2ec14bc77c30c6d"
  },
  {
    "url": "assets/js/129.74d1bd50.js",
    "revision": "ec88785fb670586ac7f296c8bbac5676"
  },
  {
    "url": "assets/js/13.1bac8d59.js",
    "revision": "be36cfdf57d938839190229c18814fb7"
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
    "url": "assets/js/135.c8365b1b.js",
    "revision": "58f543f0f6a40ed54dc767340cedda36"
  },
  {
    "url": "assets/js/136.b1ae1c92.js",
    "revision": "4d6ab6ef5b147a015f8fdda1086c42fd"
  },
  {
    "url": "assets/js/137.ce47b3b8.js",
    "revision": "d30d6dae0783980894416a6b7f0f3ccf"
  },
  {
    "url": "assets/js/138.72ded80f.js",
    "revision": "f38c365a4fb4ec4eefe8f839ef3de0a7"
  },
  {
    "url": "assets/js/139.f342307e.js",
    "revision": "52735260b98b50b6a990c9cad6259366"
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
    "url": "assets/js/141.ac9b1420.js",
    "revision": "9b8fe25c199b38999cec1817e2ed9bc5"
  },
  {
    "url": "assets/js/142.cc70f90d.js",
    "revision": "b994ee1ae24032bc3cf882bba7d1363f"
  },
  {
    "url": "assets/js/143.9b0b67a2.js",
    "revision": "9fa81390184df599ac0c9a86137117a1"
  },
  {
    "url": "assets/js/144.18642496.js",
    "revision": "fb7991f31ae970e41399eb79e6bf748a"
  },
  {
    "url": "assets/js/145.fda8e0b8.js",
    "revision": "b273826437fef2683371afb5ec496725"
  },
  {
    "url": "assets/js/146.7b9a5d1a.js",
    "revision": "4e6479629b504173f92d02c321ebbe56"
  },
  {
    "url": "assets/js/147.cce62008.js",
    "revision": "22ebd21a22f9d7cf8c7ad2c872a9b6f8"
  },
  {
    "url": "assets/js/148.687889ad.js",
    "revision": "469643eaee272d3dfd0b39115e2acf70"
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
    "url": "assets/js/150.489dad75.js",
    "revision": "cac1b87d9820e960fc35686c81ccfac9"
  },
  {
    "url": "assets/js/151.9cdb33c2.js",
    "revision": "33835b14204b7f418eaebfc195c85d7b"
  },
  {
    "url": "assets/js/152.ff490e82.js",
    "revision": "d03f57539fdbfc14d19635f409b0de44"
  },
  {
    "url": "assets/js/153.f693a359.js",
    "revision": "7e2a146d603a0f11731f24c5232465cf"
  },
  {
    "url": "assets/js/154.ea228a77.js",
    "revision": "c67675d2e33cb84f65b4947d63721371"
  },
  {
    "url": "assets/js/155.d6bff7f2.js",
    "revision": "c1bef45c3c45e707a78a2dd483798a4f"
  },
  {
    "url": "assets/js/156.1cda481b.js",
    "revision": "5347a843e56f023f087ecae54b25c0b8"
  },
  {
    "url": "assets/js/157.d076109f.js",
    "revision": "fbef30fc164ac951e69883f55a67de05"
  },
  {
    "url": "assets/js/158.ff7ec405.js",
    "revision": "bd1a3b3d7279e362017003b0d7ae0038"
  },
  {
    "url": "assets/js/159.6a3fec77.js",
    "revision": "a57d73e762a9aaf4870d3965fdf59c39"
  },
  {
    "url": "assets/js/16.8f5dddbe.js",
    "revision": "287a3def428dc93db732761bc8deefac"
  },
  {
    "url": "assets/js/160.0bcfc94d.js",
    "revision": "0a9b07bde4c9c4cf75829c89bd59c9cf"
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
    "url": "assets/js/163.63b5fc0f.js",
    "revision": "944fa5755587adfcb7f8f5dde48c60c7"
  },
  {
    "url": "assets/js/164.ad3f0d42.js",
    "revision": "5969bfc4248dbd036d33a21ef20d8740"
  },
  {
    "url": "assets/js/165.ad0d5ccb.js",
    "revision": "b90d097329e2b911db6fa86626a0a5cc"
  },
  {
    "url": "assets/js/166.5b64dc62.js",
    "revision": "100651c22b8a3130c2fa433a397bd055"
  },
  {
    "url": "assets/js/167.caf3ad44.js",
    "revision": "65eb6d9910db7f3e1db909200c3c5050"
  },
  {
    "url": "assets/js/168.b4212637.js",
    "revision": "e36f18d9732d8867b00f82d00f13580b"
  },
  {
    "url": "assets/js/169.084a4128.js",
    "revision": "1d59b3f221ccff03756826b11b582097"
  },
  {
    "url": "assets/js/17.79de0a86.js",
    "revision": "72d563ea70454d02d15077134b3d2175"
  },
  {
    "url": "assets/js/170.e598176f.js",
    "revision": "55aff8e8a3ea87dc1ce65edab1dcc3e3"
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
    "url": "assets/js/173.b3bb4f68.js",
    "revision": "275ca22ee888ab0f1b3e703a30b95676"
  },
  {
    "url": "assets/js/174.6181b13f.js",
    "revision": "51fffed6543c5de24093bca5549ffeaa"
  },
  {
    "url": "assets/js/175.60532324.js",
    "revision": "3c3c82c50c44fd5255e8ded500943cf7"
  },
  {
    "url": "assets/js/176.ace0ac02.js",
    "revision": "fdaf75b335a01e77ceb2e7b9697d6e23"
  },
  {
    "url": "assets/js/177.1f1ff457.js",
    "revision": "59c85809997e7329c11afaed597b3400"
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
    "url": "assets/js/18.66145ee2.js",
    "revision": "b96c6daba50a9bd0a1a7e2b7e6cfe035"
  },
  {
    "url": "assets/js/180.d7b614a7.js",
    "revision": "1bcc48a72982da00c73573c1c0611b93"
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
    "url": "assets/js/183.fe08d95b.js",
    "revision": "8090d47b6758f596ac5776e0624c82ad"
  },
  {
    "url": "assets/js/184.ce3fd3a3.js",
    "revision": "73e5bced6ec09838821859f0a7fd66de"
  },
  {
    "url": "assets/js/185.222acf40.js",
    "revision": "f31b5c6eb339428cbb4546a91cc9c89b"
  },
  {
    "url": "assets/js/186.bd488af3.js",
    "revision": "8f36798500abd7744fb4d60709cf1ba2"
  },
  {
    "url": "assets/js/187.907403b4.js",
    "revision": "ca144d40344e6d06b5f82060fee4fb01"
  },
  {
    "url": "assets/js/188.202f9ff5.js",
    "revision": "325947c03d47eee748c1353e3d8732be"
  },
  {
    "url": "assets/js/189.0b2de0f3.js",
    "revision": "27092b2c510143d1d852f8fac00f48e5"
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
    "url": "assets/js/191.eb57e2cd.js",
    "revision": "0c500dfecf4bd4420e02e1a847be3423"
  },
  {
    "url": "assets/js/192.575b37e5.js",
    "revision": "87760add1697ba01d2b334e47f5936cd"
  },
  {
    "url": "assets/js/193.4c75ee9f.js",
    "revision": "ed3315c76b631a345b9c32c4ece9c9dd"
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
    "url": "assets/js/197.d2d47bbb.js",
    "revision": "666fff5e5517e1e0bd037942ad41cf37"
  },
  {
    "url": "assets/js/198.16b40e7a.js",
    "revision": "ffb0499712aa51275aa43208c4cb6ea6"
  },
  {
    "url": "assets/js/199.d3456d31.js",
    "revision": "1417dbb6a3d7c73cb6d52b59a83d04b1"
  },
  {
    "url": "assets/js/2.385ad265.js",
    "revision": "a9dd2e337aa427fa68ee1d3fccef04e9"
  },
  {
    "url": "assets/js/20.5c8ec069.js",
    "revision": "bf1c61e02c7f4d3f47cbf32e8a9924e5"
  },
  {
    "url": "assets/js/200.3506df0c.js",
    "revision": "234f0032ab554d44e9f9ef83abd1e975"
  },
  {
    "url": "assets/js/201.b9bc2522.js",
    "revision": "537201d1e18422b05bb030ca8015087f"
  },
  {
    "url": "assets/js/202.4bd5b315.js",
    "revision": "ec5a789fdfba8cfc37766be903f5b050"
  },
  {
    "url": "assets/js/203.73a64190.js",
    "revision": "4e13bab088632c671fd388bdb3c046ef"
  },
  {
    "url": "assets/js/204.afdf8386.js",
    "revision": "88a9e9be8debf7de6a42ac3b300fceb6"
  },
  {
    "url": "assets/js/205.8a09b986.js",
    "revision": "a31cfa9aa3a0e373372efdb4043d5f5a"
  },
  {
    "url": "assets/js/206.5935a4e5.js",
    "revision": "36ba4e9e46422617d4e11ec1ad173532"
  },
  {
    "url": "assets/js/207.bd7f5a15.js",
    "revision": "b50997d1aacc90592d22d185583429a2"
  },
  {
    "url": "assets/js/208.7d9f737c.js",
    "revision": "7e399067a1dd4b025a50517fa5ba690b"
  },
  {
    "url": "assets/js/209.97f12f58.js",
    "revision": "92e0b67e1328a6d4a537eec9cd86cad2"
  },
  {
    "url": "assets/js/21.4458fbbf.js",
    "revision": "0a424ae1e2dbedbf1256e4d7e0d5b37d"
  },
  {
    "url": "assets/js/210.ba7e1dee.js",
    "revision": "2cbf2aac2e01a25ebaf043b70804f519"
  },
  {
    "url": "assets/js/211.292519ab.js",
    "revision": "48f0ee00d09bbfed22f73bf9c4ab6c0d"
  },
  {
    "url": "assets/js/212.a7d76622.js",
    "revision": "74dbf94863e8174af6009eae663dd523"
  },
  {
    "url": "assets/js/213.020e3ccd.js",
    "revision": "8ac35938d1672e9673676738358b0e6b"
  },
  {
    "url": "assets/js/214.0964e2ad.js",
    "revision": "2e82202de265a8938d01d9a98048ee06"
  },
  {
    "url": "assets/js/215.f29d742d.js",
    "revision": "8f8f6ba4b75bfade4843e2dd70ea78a6"
  },
  {
    "url": "assets/js/216.caf4224f.js",
    "revision": "bc0ecfcc5faa074b7770d2bd39cbc888"
  },
  {
    "url": "assets/js/217.0666236a.js",
    "revision": "065260add292280c32fca0923025dc37"
  },
  {
    "url": "assets/js/218.4dd1ef4f.js",
    "revision": "650922848cdd9d1e1ae5dedc318e1084"
  },
  {
    "url": "assets/js/219.3f8f1d5f.js",
    "revision": "c03f7d4bea79ee597ef7048d48daf9b9"
  },
  {
    "url": "assets/js/22.579a229a.js",
    "revision": "ac64d52da556a0d359111ea82aecf835"
  },
  {
    "url": "assets/js/220.59e27109.js",
    "revision": "a64900573e8cd490c931c6e05126dd52"
  },
  {
    "url": "assets/js/221.afe7bf21.js",
    "revision": "cac3de088692a1b4054c739be90069ed"
  },
  {
    "url": "assets/js/222.0eaf28d9.js",
    "revision": "3a28d02a3b9e64fa387fcb213139d28d"
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
    "url": "assets/js/225.296e9cdb.js",
    "revision": "82ead028983326a884714e4b662701ed"
  },
  {
    "url": "assets/js/226.9e66bfa9.js",
    "revision": "be574ced7b543db88c5aa86c13b38623"
  },
  {
    "url": "assets/js/227.03bcdde0.js",
    "revision": "1d26fdb79c31e3831b719d6c67aaf4d0"
  },
  {
    "url": "assets/js/228.1874cee7.js",
    "revision": "015fc8c337833f430ea8d36954e2fdc0"
  },
  {
    "url": "assets/js/229.044455bf.js",
    "revision": "5e8a20fe6b59f9f13ed2b5b971928ea2"
  },
  {
    "url": "assets/js/23.c46235ea.js",
    "revision": "3acaa3af2dae556068d0d968ad074522"
  },
  {
    "url": "assets/js/230.d23041dd.js",
    "revision": "88073a481a35cb20d8de257f6adafcb7"
  },
  {
    "url": "assets/js/231.d14096cb.js",
    "revision": "6933cd09d14c5f4d24762d500fa3dbc5"
  },
  {
    "url": "assets/js/232.a7c9d56b.js",
    "revision": "572dcfd79fdd68b4c0fb4162b064a512"
  },
  {
    "url": "assets/js/233.418ae7fc.js",
    "revision": "61c0105efbb1b1169d4d78fc9a28dbe3"
  },
  {
    "url": "assets/js/234.c75bc051.js",
    "revision": "0b200d1303a41575b9fa3617da6c8781"
  },
  {
    "url": "assets/js/235.ac39284c.js",
    "revision": "f0cc6e2ce41a73892a75730693d14729"
  },
  {
    "url": "assets/js/236.8f6a5eea.js",
    "revision": "63bbfe3a72efc9f6766297af6381f03a"
  },
  {
    "url": "assets/js/237.4a57e65d.js",
    "revision": "f4868779869a7b59f62dc03f7dba3ee0"
  },
  {
    "url": "assets/js/238.68868c64.js",
    "revision": "f15dae84d59e64bd524eda5086c73873"
  },
  {
    "url": "assets/js/239.7260e7b5.js",
    "revision": "0f004d8da3a9efaeec6ce8bdb0fef667"
  },
  {
    "url": "assets/js/24.ed01333f.js",
    "revision": "f9987bfe66d9fa7a86b29849c2c77a8c"
  },
  {
    "url": "assets/js/240.ebb08295.js",
    "revision": "6c9e27724dbf71d62f86c9d304bf0efc"
  },
  {
    "url": "assets/js/241.be760033.js",
    "revision": "95437e1973bb5c94f5dab7099262c239"
  },
  {
    "url": "assets/js/242.0fd056b4.js",
    "revision": "24dd9b969bc43e7dd026ee61dc5e5dc8"
  },
  {
    "url": "assets/js/243.0d8407da.js",
    "revision": "d64a81d88a5b961a6f8a47a32ef4760d"
  },
  {
    "url": "assets/js/244.a3826320.js",
    "revision": "626c119c8c526e50c60e96d23fc436c6"
  },
  {
    "url": "assets/js/245.5b7e6f97.js",
    "revision": "b0f2a0313b826a639702cb9e187529ec"
  },
  {
    "url": "assets/js/246.8721e992.js",
    "revision": "7210f5e12c7d89a20036e20740d22849"
  },
  {
    "url": "assets/js/247.8cb10bb9.js",
    "revision": "c3902ec64bf0ea3317ade52f45a7a7f9"
  },
  {
    "url": "assets/js/248.bedbdcd2.js",
    "revision": "42da065e8073fe797281f84d4614a738"
  },
  {
    "url": "assets/js/249.dfdab6ca.js",
    "revision": "7f4b114e9087c87bc73ca894b2a7bb51"
  },
  {
    "url": "assets/js/25.34cc6a14.js",
    "revision": "c39628e7320172ea801360733c184aab"
  },
  {
    "url": "assets/js/250.c6b652f7.js",
    "revision": "5ddcd2864cd09df5ccb48b76c5dfc7fe"
  },
  {
    "url": "assets/js/251.f3e0a86e.js",
    "revision": "84dc963d1d26ef4b77872dafb305257e"
  },
  {
    "url": "assets/js/252.4ed78893.js",
    "revision": "990836f6efe26183e65274f07e322224"
  },
  {
    "url": "assets/js/253.88cb3215.js",
    "revision": "9cd6c37c93f20115a2fc0c99df403199"
  },
  {
    "url": "assets/js/254.d1eee66d.js",
    "revision": "d7f04ca2563fb6e0fc235402db230975"
  },
  {
    "url": "assets/js/255.57ff7d57.js",
    "revision": "26a29b7157f3751aa420d5a123b34a92"
  },
  {
    "url": "assets/js/256.a17adf20.js",
    "revision": "93ac70633160b0e047e0357f6d3403bb"
  },
  {
    "url": "assets/js/257.3f697651.js",
    "revision": "4d3fecf1eaf7c9777d5ecfb2da0cb7d4"
  },
  {
    "url": "assets/js/258.afdee361.js",
    "revision": "1a405f0fed75910df1d8fd12de8b6d16"
  },
  {
    "url": "assets/js/259.43461db7.js",
    "revision": "0b7df72ea702bb95f1777c0b5d696172"
  },
  {
    "url": "assets/js/26.15c82e0d.js",
    "revision": "f1220163ad349fe27a2413ff58f062cd"
  },
  {
    "url": "assets/js/260.5dd8449b.js",
    "revision": "fb4d1ade8db5142707d96b236e9487ca"
  },
  {
    "url": "assets/js/261.d21ed87e.js",
    "revision": "cb2236aaedd6ca6210a0797e5f860a96"
  },
  {
    "url": "assets/js/262.824f8f4d.js",
    "revision": "b89ca2c7d33bcc35cfefc351c2529166"
  },
  {
    "url": "assets/js/263.5830dac7.js",
    "revision": "044332bc5f30ff2cbb1dc6a9ab8abd2c"
  },
  {
    "url": "assets/js/264.46ff8ac2.js",
    "revision": "5787e682239596f8ad4906db40a8e457"
  },
  {
    "url": "assets/js/265.b6a4e86d.js",
    "revision": "43609938c6e4fbbfee8102deebe5c6b4"
  },
  {
    "url": "assets/js/266.abf10a53.js",
    "revision": "3ce2262c687a59cfe737f6ac794d00bf"
  },
  {
    "url": "assets/js/267.7258af4d.js",
    "revision": "71be8fd9337b270fd0075709f43bd7a2"
  },
  {
    "url": "assets/js/268.58250cb4.js",
    "revision": "104dc2ae43e8488dafa26043f32aca9a"
  },
  {
    "url": "assets/js/269.52d1567f.js",
    "revision": "b2e2321d7b59108b155c0129f957c960"
  },
  {
    "url": "assets/js/27.46c26def.js",
    "revision": "be34dc03f30def2ccb4ebaddc431c4a0"
  },
  {
    "url": "assets/js/270.7c64d43f.js",
    "revision": "db896cb5c06b6ea5f8c6575ad1f4e1c3"
  },
  {
    "url": "assets/js/271.676cfac3.js",
    "revision": "b32f8827f60d3a07a977d778b6fa2476"
  },
  {
    "url": "assets/js/272.97c2fd7a.js",
    "revision": "aa82feebd435e7fa66dd20ce4f27dcb4"
  },
  {
    "url": "assets/js/273.13e32710.js",
    "revision": "ed25fd0833e9d34c9289eaddcc178116"
  },
  {
    "url": "assets/js/274.fd7091c9.js",
    "revision": "2c2a9b82789a5fae17092b2fb3c41468"
  },
  {
    "url": "assets/js/275.e91ca6fb.js",
    "revision": "d5bc853dfd83dd577f2123afc3cdf249"
  },
  {
    "url": "assets/js/276.8091d45f.js",
    "revision": "f22dd3067979d0b6db99b61b71ac912a"
  },
  {
    "url": "assets/js/277.8392f212.js",
    "revision": "acb55d88cd9e445283377db54e54453c"
  },
  {
    "url": "assets/js/278.c87b2bff.js",
    "revision": "63b7c974261a1c3f65992da2dcb6beb1"
  },
  {
    "url": "assets/js/279.8142a5d3.js",
    "revision": "354cbd4fee750eca1216989cf0f422a2"
  },
  {
    "url": "assets/js/28.30341786.js",
    "revision": "430654620d5ff9b91a9ca64d139ab61f"
  },
  {
    "url": "assets/js/280.cc2032e8.js",
    "revision": "5fb5c84c5f1302cbaf52c4bde6954de7"
  },
  {
    "url": "assets/js/281.626020ae.js",
    "revision": "d8557ae369b8eef5e2ccb8904e50ca24"
  },
  {
    "url": "assets/js/282.bdced836.js",
    "revision": "f21ff9171d8d91c8417aaac381f4f471"
  },
  {
    "url": "assets/js/283.6b9acaaf.js",
    "revision": "8d672e31420d6fd68fb330eeb93de224"
  },
  {
    "url": "assets/js/284.0c09d340.js",
    "revision": "60c64f5cf463656fd2f866b885a14e2b"
  },
  {
    "url": "assets/js/285.b2d500e6.js",
    "revision": "9cf0ae4fb6b14c4a093c3787c1576523"
  },
  {
    "url": "assets/js/286.3095f21c.js",
    "revision": "c16f4d9db977644361de057f43cc6be3"
  },
  {
    "url": "assets/js/287.9202cabf.js",
    "revision": "809924c4ec72c625f73b626fefa6771d"
  },
  {
    "url": "assets/js/288.c53044c0.js",
    "revision": "eb23e619ce365816a67906de34d2a1fc"
  },
  {
    "url": "assets/js/289.30c87355.js",
    "revision": "ef4f1ea69bd7f4493a84935248493004"
  },
  {
    "url": "assets/js/29.fe5c881c.js",
    "revision": "6636af7ea8ddde75435f0993c6b1d7b9"
  },
  {
    "url": "assets/js/290.846a3ab9.js",
    "revision": "2b0714f08ed06a7d3a8133c1b26cdfd9"
  },
  {
    "url": "assets/js/291.1f942e7f.js",
    "revision": "ddd3e531b674118f7b0cca2d47c52bf4"
  },
  {
    "url": "assets/js/292.e6f290c7.js",
    "revision": "72331bc6a01defb7c42fd1eeb6ecb7da"
  },
  {
    "url": "assets/js/293.9de80ddc.js",
    "revision": "193b60175bb3409dcd5c8101d40224b0"
  },
  {
    "url": "assets/js/294.e9fdaffd.js",
    "revision": "fe3cf999bda1870e29865268ce0b5800"
  },
  {
    "url": "assets/js/295.e4c97a95.js",
    "revision": "f75da20103b8e9657cea1f6c637e8d89"
  },
  {
    "url": "assets/js/296.6d160f8d.js",
    "revision": "59883ef809981e056d35a47108161e7f"
  },
  {
    "url": "assets/js/297.d86ced74.js",
    "revision": "de97b311322b1992e7a7b1eff2f99f77"
  },
  {
    "url": "assets/js/298.e5fcbd26.js",
    "revision": "e31e2ae9597d46689449b3de4be3a2c1"
  },
  {
    "url": "assets/js/299.59871ec1.js",
    "revision": "8f8cc262558b71500c006fa616b51828"
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
    "url": "assets/js/301.71cf585a.js",
    "revision": "d97c2d1ee543657f52ccb575b3c7f2ff"
  },
  {
    "url": "assets/js/302.fb578664.js",
    "revision": "d89eb183201818566d4643584b216bbb"
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
    "url": "assets/js/305.f529b77f.js",
    "revision": "6bf8d44c92d0ea45059ae7a6839b9239"
  },
  {
    "url": "assets/js/306.6d6e982a.js",
    "revision": "b8b85f7b15e9040a75745b2f1fb726b9"
  },
  {
    "url": "assets/js/307.2e622344.js",
    "revision": "e13323bafaa36822100d024fd8522f3f"
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
    "url": "assets/js/31.a3e1f61d.js",
    "revision": "ec1fcfd0c3fce622e0b7deaa085f1a11"
  },
  {
    "url": "assets/js/310.a6130d1f.js",
    "revision": "e54c8eaf0a11e4c27246e5f3ffe70bdc"
  },
  {
    "url": "assets/js/311.d7f3b571.js",
    "revision": "970e1172cbfeda420fb700a3d067072c"
  },
  {
    "url": "assets/js/312.e863e4da.js",
    "revision": "384325122b56278536b53f4abb577684"
  },
  {
    "url": "assets/js/313.accb8e0b.js",
    "revision": "f6474e962b527dc79349985b946378a1"
  },
  {
    "url": "assets/js/314.ddf196ea.js",
    "revision": "a09e6118d25e11452da00dd37c9dc7f2"
  },
  {
    "url": "assets/js/315.83e40bcd.js",
    "revision": "4d967a51a0a6497a3691229d167eb97b"
  },
  {
    "url": "assets/js/316.28007d95.js",
    "revision": "1d0133a4a3ea0dce0e429e900883986c"
  },
  {
    "url": "assets/js/317.3fbcd02e.js",
    "revision": "17541ba16202b953f8d13fd89edc93ad"
  },
  {
    "url": "assets/js/318.e7aacc56.js",
    "revision": "571c5c84cc05d9e2f8a94b09c99f1b82"
  },
  {
    "url": "assets/js/319.7cb0abf2.js",
    "revision": "27b9f61f695d83e36a25c4706d4fe8da"
  },
  {
    "url": "assets/js/32.09f92597.js",
    "revision": "91c5a4695f210c28624cc3d3cb80f73b"
  },
  {
    "url": "assets/js/320.f96fd7c1.js",
    "revision": "337409c740ed5b54a3a3ba4bbc92dc5f"
  },
  {
    "url": "assets/js/321.cafebc27.js",
    "revision": "0f43d41c43375217490825f7167ebafa"
  },
  {
    "url": "assets/js/322.79440afc.js",
    "revision": "a8314a28bbecbc99fea55168d3817167"
  },
  {
    "url": "assets/js/323.7f8a453c.js",
    "revision": "c1467c158466157404bfe5240764e874"
  },
  {
    "url": "assets/js/324.fd396dac.js",
    "revision": "bf580aae0e10e6664d6349aa6328e828"
  },
  {
    "url": "assets/js/325.08977488.js",
    "revision": "0508b2cb1f4cb999586258072d65bba9"
  },
  {
    "url": "assets/js/326.3ad2da9b.js",
    "revision": "8272ada3c62e6505845759ad50f7321b"
  },
  {
    "url": "assets/js/327.df004ed9.js",
    "revision": "55a192e3374fe6b566183c9c3a196d22"
  },
  {
    "url": "assets/js/328.b4c48343.js",
    "revision": "d0173f553eadd077d3f9f8c9da71e17a"
  },
  {
    "url": "assets/js/329.5aabd90b.js",
    "revision": "0d053e7f2bbb811429877274b9eeea9d"
  },
  {
    "url": "assets/js/33.6d0534fb.js",
    "revision": "4c79d2474922c517ebb7f7ddbcd567ff"
  },
  {
    "url": "assets/js/330.396b2501.js",
    "revision": "f617618dbe1db7cb23d646361f8a2d64"
  },
  {
    "url": "assets/js/331.43f1e1a3.js",
    "revision": "6c3bb817b72b748ed644d6f7ecdfa959"
  },
  {
    "url": "assets/js/332.b01afcc5.js",
    "revision": "892dcea65cda01c67a72a36266c94d64"
  },
  {
    "url": "assets/js/333.e3e735a8.js",
    "revision": "18cfed5b25a4651adade34c5cd9ed506"
  },
  {
    "url": "assets/js/334.15572a70.js",
    "revision": "adf4c6c0619dfc9d7025f98c215cad52"
  },
  {
    "url": "assets/js/335.1450d07a.js",
    "revision": "b97aa426652b78710845ddc81e83fe68"
  },
  {
    "url": "assets/js/336.eebb7c21.js",
    "revision": "3f986d639ef41792749c31f7cb4be450"
  },
  {
    "url": "assets/js/34.d8fe8be0.js",
    "revision": "324af9a4415c6e12c8af499152ea61eb"
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
    "url": "assets/js/39.30609654.js",
    "revision": "e2462648e480e15497ffb9ad0121a975"
  },
  {
    "url": "assets/js/4.d61341f0.js",
    "revision": "969711189f986f61c5bf139e9b2ad266"
  },
  {
    "url": "assets/js/40.1a608d8c.js",
    "revision": "722f0fe809f0fd44e48137b5c474c3c4"
  },
  {
    "url": "assets/js/41.4571e923.js",
    "revision": "5d1f5cfd22e3ebceaf93fbd254da2af5"
  },
  {
    "url": "assets/js/42.af4c546c.js",
    "revision": "e80d4cfb1a3ef2fb69f4e9831b5cdb57"
  },
  {
    "url": "assets/js/43.9b8ffc80.js",
    "revision": "dc67868701dca375ec79af72ec39c013"
  },
  {
    "url": "assets/js/44.91c911c7.js",
    "revision": "11334061914ce0a80449b98efa35c012"
  },
  {
    "url": "assets/js/45.f3e2c196.js",
    "revision": "00e5c003478d61d0e09e40f6430f36df"
  },
  {
    "url": "assets/js/46.50e5b0e3.js",
    "revision": "823c610e3e7f059aadbc4cebb585338b"
  },
  {
    "url": "assets/js/47.ea6bcd90.js",
    "revision": "fb9df4ea1ec876dafbff796bddeaca5a"
  },
  {
    "url": "assets/js/48.e0f99c94.js",
    "revision": "08405ba959d185721a205d2e0e465999"
  },
  {
    "url": "assets/js/49.314e78ea.js",
    "revision": "d36ac56055155489dbe0a829d98b7f61"
  },
  {
    "url": "assets/js/5.fe50b3d3.js",
    "revision": "d2333ad1d73aa6066c9a51ca82067bd5"
  },
  {
    "url": "assets/js/50.649fad13.js",
    "revision": "9d6137cdd5cdf6c1b1dc2ab125d58c3b"
  },
  {
    "url": "assets/js/51.6918e9c5.js",
    "revision": "077dc92071fdd011b3a21c1f0d7d9f51"
  },
  {
    "url": "assets/js/52.f6c899f9.js",
    "revision": "72b7e4c16408b7d3f979c10d7b119c92"
  },
  {
    "url": "assets/js/53.69929fd2.js",
    "revision": "fe4acd0ae94177612566de9efae01174"
  },
  {
    "url": "assets/js/54.04b2f8d3.js",
    "revision": "9a6f2e368f3c2bd0f6c2078d38c29e61"
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
    "url": "assets/js/57.f6b50e8e.js",
    "revision": "96b1b7391e02872cc63ea36001fb01fa"
  },
  {
    "url": "assets/js/58.bbb82caf.js",
    "revision": "de563187afac5773f09f2348475d384a"
  },
  {
    "url": "assets/js/59.d2c4f6c0.js",
    "revision": "c6dd3b9c44a2cb250ad85d1316712c98"
  },
  {
    "url": "assets/js/60.cd41f619.js",
    "revision": "e41a0d9b93647c236ca4e9af7e91c4f5"
  },
  {
    "url": "assets/js/61.da7a43c3.js",
    "revision": "09fcbd346365054f34fb8243a41df7bc"
  },
  {
    "url": "assets/js/62.8cb345ab.js",
    "revision": "913919aa77070fb5bc421968b2c33cf4"
  },
  {
    "url": "assets/js/63.4b2e75db.js",
    "revision": "0682141b8fca989f3ea901fb6672fe0b"
  },
  {
    "url": "assets/js/64.01cf8711.js",
    "revision": "9b5013f13b0af34a61bdcd7e9e7fecc3"
  },
  {
    "url": "assets/js/65.b1374146.js",
    "revision": "1a01cd36eee94ff1dfdb57061529dc00"
  },
  {
    "url": "assets/js/66.2ed9ef06.js",
    "revision": "953e3ea558631198f8a297e255697a31"
  },
  {
    "url": "assets/js/67.b8139f50.js",
    "revision": "c93353d28e940c7ae297559555062e7f"
  },
  {
    "url": "assets/js/68.aa60ed72.js",
    "revision": "74a455ac6ef6356a03a7579e435ef413"
  },
  {
    "url": "assets/js/69.f44b7505.js",
    "revision": "45750729d5f7e1f3aec07d9990243601"
  },
  {
    "url": "assets/js/70.47c7bacd.js",
    "revision": "22090b659c449cbfaa09d536f3fdd864"
  },
  {
    "url": "assets/js/71.e04eb806.js",
    "revision": "9437a1a5c353b0cbe228a547ae3f7bf2"
  },
  {
    "url": "assets/js/72.0970b856.js",
    "revision": "95da5b386d6cc74c109ec917c6d09bb3"
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
    "url": "assets/js/75.49633016.js",
    "revision": "c1a297c25dd18ffac267087a19ade690"
  },
  {
    "url": "assets/js/76.682c43ba.js",
    "revision": "a2d50db64025e29dc541de55253efce3"
  },
  {
    "url": "assets/js/77.c970cffe.js",
    "revision": "171132a32a98257b5a8da4d80620124b"
  },
  {
    "url": "assets/js/78.8713e6a3.js",
    "revision": "9c2794f17c19ebb2ea0e3f5d937c637d"
  },
  {
    "url": "assets/js/79.199e5d32.js",
    "revision": "2f6fc625b8fdea92b0d7c94c02664b4e"
  },
  {
    "url": "assets/js/8.f3c5eb39.js",
    "revision": "4cebe1df1358e841706def46ca390ece"
  },
  {
    "url": "assets/js/80.c2cd7089.js",
    "revision": "95831208d837a081fef257e81bdf7f0b"
  },
  {
    "url": "assets/js/81.3449701c.js",
    "revision": "c1811b96636279a942f850a688d62f84"
  },
  {
    "url": "assets/js/82.ce7990bc.js",
    "revision": "e8d85743a0c3926f5569bc6927232638"
  },
  {
    "url": "assets/js/83.cee16f17.js",
    "revision": "7ce404bf12a5988472fec11a415b968c"
  },
  {
    "url": "assets/js/84.80ad0e9b.js",
    "revision": "061cf06d2c7b8a7d2394ab580960fc1d"
  },
  {
    "url": "assets/js/85.53a86e50.js",
    "revision": "9f63a6cf1fc3d76257cc500e34820536"
  },
  {
    "url": "assets/js/86.03dd9d8b.js",
    "revision": "42e9d82fc14a279451ff62ccbd0c92da"
  },
  {
    "url": "assets/js/87.8e12d5a9.js",
    "revision": "4b3db019d6ee6d3fc0f6e6082df4eec5"
  },
  {
    "url": "assets/js/88.1fa6cc65.js",
    "revision": "b14f317731e9f1facfa6b09058702ccc"
  },
  {
    "url": "assets/js/89.0c10de4a.js",
    "revision": "ca69118d3b5713b5b6260063fc7d8238"
  },
  {
    "url": "assets/js/9.c078d8f2.js",
    "revision": "859a8f0579ac1506b5aa8978ca1bae50"
  },
  {
    "url": "assets/js/90.52145684.js",
    "revision": "bd3dfb9156df4c98a33a259e6b889a6d"
  },
  {
    "url": "assets/js/91.a8464fec.js",
    "revision": "3981227f0ed26e25b3e79ea72573c5ef"
  },
  {
    "url": "assets/js/92.4f7a2dbf.js",
    "revision": "fb8afe2a12ac640f6fa8d411b3088035"
  },
  {
    "url": "assets/js/93.51b31634.js",
    "revision": "a4b661b7b0983068986d1ea842a968fa"
  },
  {
    "url": "assets/js/94.909f556c.js",
    "revision": "9635ca4eef1a19c69b1087c6ff5692fa"
  },
  {
    "url": "assets/js/95.a8ea4cc2.js",
    "revision": "292ab3a1f8c516daf8a334c75acf7807"
  },
  {
    "url": "assets/js/96.9fbf98c3.js",
    "revision": "bc0b1efe3a6b79a3469e5af595071872"
  },
  {
    "url": "assets/js/97.c1927817.js",
    "revision": "211a1fdd7e5540b2a082c71d359badca"
  },
  {
    "url": "assets/js/98.aaeea937.js",
    "revision": "a06a9905ab1bfd9a421c428fb72971a0"
  },
  {
    "url": "assets/js/99.0e6032d9.js",
    "revision": "b4959d473d45820d39af68e1c96a8898"
  },
  {
    "url": "assets/js/app.460fa354.js",
    "revision": "90de1da64253feea8beb38ca2613686e"
  },
  {
    "url": "assets/js/vendors~docsearch.ead308ff.js",
    "revision": "5ac31e5a9e2ba05445960cf708c44ce6"
  },
  {
    "url": "index.html",
    "revision": "9afd410a1f51c211db1240931499a101"
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
