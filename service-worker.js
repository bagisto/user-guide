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
    "revision": "f6815e5cdfe53c4a6e22779f04f01fd7"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "6cd0bf9a0e824633c5633acd64ee6b94"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "8faca26532aec0196737ae54907fcc67"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "3d8796000722090cae7d98502b12b2e1"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "3c2b67b4ccc98bf0ae7ab43e7c9ff66a"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "336a767116832ed9ae30bd567467b5c7"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "a5911da7a46cf72d6cf14be6319198d6"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "47782b2c6d75759a52c8797b9193d2db"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "72cbf46dbd9e0df8b6a6652766565084"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "2b6f2ddf771c588ec5826784932d4bbc"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "4a8a12f81168a9ceac72aa917536ca64"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "4d5b9f3598b9f13fbdc3583c6583a1c5"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "37ad9715adad931e3224308761d7e0fb"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "a1e76e59ba1268984dc29b134e4d027d"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "d50ae8987f77342181b721a15ac94b8a"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "fa5e278eaeec92518644043c5e5cccd2"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "aaafce04d94bdffea5894a35ed95d247"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "53ef2ac2da77eababf8d9e3e98c4a20b"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "7f73041a5ecb822f70187285877a1fd2"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "657ac2178c19913bfc921ae20a246c51"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "a0584f03ba161fdbbf0eb9923294ec55"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "2a6b089c6ff128e59d1150b20e07b97a"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "e41c9d3e13b90d1ffb147c316a0c6917"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "55cefca29e158188cd726529630033f1"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "9470b8d4d7b149e9fe7388509781a447"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "dfd68ed587475a28fd4f3e6e34783b86"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "7c609d12d086004a987da4eb15099cbb"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "c8cf33cd29fd09890f67b51c98c9743f"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "810d6d3543d6b8303c874b74e139e8e8"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "059c8472eab3ec1028d491af4f14989d"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "b71f875a291185e0575bdf87a182d759"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "e645ba60361b600488fe7f76e244d788"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "6ee444e07e898f90a027fc412c693dfa"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "8ec1f6a237520ea0cddb6f3f77eaf0a1"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "840fc14c1eb0fb1df71e7afe0336f81d"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "d3d54b30f6ffb21b1fee9c63a1208281"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "e12e08ea0f5ddfe6e6c6e4b7d554175e"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "85618d709a1afb658c30fc6bf688d38e"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "1121d710bfbd00f56733bd69f2049309"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "aac4cc2ab1a8555011a3259add9724cd"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "29ca0f230bb11fd921647c0b8fe2446b"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "0a3fb7e57d70a935bd20da0677a8d548"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "e2c120abf8aa7c3b465e1624896d30d3"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "b4925748845fd400296172d8541c9d68"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "a15f45a4a1376487950c9ed2d166b69c"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "90e45de768b261ec23a02d096a7550c7"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "60113bdc324be50bcc0f7e245fb53875"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "c070797ca083d65d75323f8be949ac71"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "3985b2c5792a08087d4ee66b2ffaa1de"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "6036545adae0f9e23d96c619e89751ee"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "dfc8fd679aa8c2efe8182783398c7554"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "519c3d8bfee326bfa688752dc96e1db4"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "a9662e12a00f7b1c476ab874f9375b4a"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "72c149c2687ded4dff4db16a6462cbff"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "817cce19893aabb09388cd94b5eb2ce2"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "0eb82310f964d8954765999ea7c59900"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "69d017a77c2758e5d0d5a3b4182695c0"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "4660390adb38ea1ebdf4ebafae381d6e"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "d929c74cf38c8604fdd3e2dc0efe9538"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "187b0c46645b1e5076fd042efa4f17b4"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "035c63d825616d9cc41f816a891145d0"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "f6f7f070487b318f3713d793f7b7b2ba"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "c6d520cad8ea53f4c59020f501ee1749"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "3dd6e164ace615e8c0cd62b87a84395b"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "19874f2d1e77390eda3d7d2a77669401"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "188ed10be1d6190c87fdab4f03212176"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "6f0d32db0f130399d851646af75e4e73"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "c337966905d52231f48d55f60f8dda99"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "4da67813bf6538fb2fd26145e127b736"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "3e63bca4306bbe0608390ea9acc06e33"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "c844cfcefb123101046707ddc26167e0"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "e66d490f86fe3eca6d041ba74708dc63"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "21c3552303c683d8b4e2d8930c034b6f"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "2b5cbc22e0cc34865e7f90c9d6e6c684"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "e54315eaa51d49bee7eaeafbf9048c47"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "f85369fb4799d06400102bf0191f0999"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "a10cb07d7e217a9ca365522634ce0620"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "068c5a615c16b87198411b4d5c167465"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "cc85f1819f84cc4e4acca8b01e6be9fb"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "39633d79b6b4705a7a1c31eb69328ead"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "f72e702c5dc90b38f30e5744595150e0"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "fc0ce58d22e777b15e347870d7f23d36"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "b61bc2f70e42455b71378e690f9097d3"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "378a3471cefb8e749c6a17e6d6b438c1"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "0154dd1a3e53828d55dd70a9fbd0d3e6"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "7aa9c2bfd0fce5634f1785202fffb80e"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "e6977cb42f3a5944e7411a189243fe0d"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "3d0049ca164e262088f023ccf1d6574b"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "6d59557b195cfc9d73068781044631ce"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "14d335ae942f6bc9debed4ed706eb43f"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "b6ebfdc2d8e49c04059e96c8d4aa2d1d"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "8d519a9171570068a4ac01979dc97acd"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "51e6866f28a94eb4d3351caaa8d04228"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "5d8d915a1dd826fcf87173cf2600983c"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "de11f99969e6caa6d831b57c99f5bd6f"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "03a14857513c413650576b554266460f"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "e3c8c22b605497d5faf1339cba295100"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "a20363582a774dc7460a943a7645ee65"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "cc9c8a01bb78ead3a9dfb8bfddee541d"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "cafaa8ee97fed77188ff38e24749b845"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "3358f2f416c6f6aad412729df7104880"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "65f1ab123e953f69729b4b63a4b52455"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "fc0d91974a89227031cd2b2975fd141d"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "95b0b30e689deb5a8ea82c8a19bb0b1b"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "c671ed5fc8893786492cc57dbd6d52de"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "14c4e4ef3ed4c48fb8a6b31b75fe05b7"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "3be198c98a99d181a1609a3e033b7778"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "27a128db04597511843e3263f472ef4f"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "454a7599370112d345471e0440864785"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "6800e4d9a5d8566a83c5669b592dbaec"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "754b352cb44bb10b1e6743bf8e956fa8"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "68207f049c286f642dd79c281e5e4397"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "7194ff92c1ed157b84264e108a345939"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "aa5040abe1c727644898c62f5f94963c"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "d922c95920d64f811a5ec921644062a0"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "88df28f9df1f3cf0b0dfdc57f74e40b0"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "0f5516f52d2ae59a4dc4697821ad62a7"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "3c4e529685f1c5b13557c9501ab5d365"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "07f8b85785a4e3b97630a6bdb2feb968"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "698848438b20a39f441271e29bbd677b"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "3432b17c88ca55da45f6f4293af0e55e"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "4d169abe34f2a62c34c4f6de9ea26317"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "71dbc36ecc4796618b377d06d0cc0041"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "496b48205e97d73fe8bbba5ffde57a91"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "2f4c9902c2af70d44820fe47a0c830be"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "d93c2515e7a76ef98e4fbb0e8762a079"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "bc6c3d786c8e5a5b493138e0cbaf4847"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "2b9c7e6fe967dfebb3f45218c7b3f0c6"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "1b66b46dfd059b7c529ee8fd8b6dae3f"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "d2721104b6b74342de2bc811a5172298"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "5f17325eda4a80f3b624c84bec5ccbd9"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "2f2f4d746508d54e0582aca29fab5590"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "32ebcc4dd3ba43e09d6f6a28af51f5d7"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "aec75f8af3d867ec72e1e2fcceb4bbf0"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "d2eafd24edd5d10aebd57cb9bb7333fb"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "78aa73024e188611a30455ec3b2cc7c5"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "42200a65fdc0a357400420502458a684"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "deeffd1b2cdb03efe2ee63d9993afc4f"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "95a43cf071645b0e1dd98905998c033d"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "22f784b15813f9c2ddceb147f094abe1"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "95ce5a745d88e11643eab2bc7c53bd17"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "eeb8ede0bb9af37d3b012015b5506e94"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "82a9bb0aa0d0478bd4d08fc8b4284cab"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "dff78f1ca95fe1231b678d093965a411"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "914801ec6cc0ed3343e7ca931fd0c259"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "f977c6fe8792c1372dc4b0d575a91faa"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "40281e62c1738bdff868d9936d448e3a"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "8a7017a5dde53d9e96138bcba1c329df"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "428696e74e7d9da42e0af32383feeb58"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "af80e9a06dc59a6c4bc5c38b3f0913da"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "ae8b728ce9a3fc607f12f620be694d63"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "35e0e2749548f1fdd6605f065e493761"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "4cc5bebd5befa7a4be03eea4c4e7cfc2"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "3b5a476ce1f89e290eae2981e57fb7ad"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "e32a14939aa150cb4f919bd509addbb3"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "7625f119567da8150acc2ca6df8345f6"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "69d1f914d56b6ef88aa45724ba136939"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "33a15901bed2b0a1010a9e225a361d35"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "6d4fa12f04fd615888aa6dc9565bbc99"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "64f41acf603ec74f699416c224645f83"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "45e248e78dc7ac74c44d241cbcf7ede2"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "734043ed78144637be1ce3790644a62c"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "7253d602502ff22c8eaa357becc876a6"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "53a7c0d651ea77399478f20eb5574063"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "bc53b3a64980ba5e954f4e73d5ff6922"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "5f747d5ed7c3d8078331c6398294b200"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "03753f7068b75d6cdc682a280de66d64"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "0116d6edc670479ba11c795ac9b63570"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "28554822b6c3d8aa6a882e94e74ba04a"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "94e48d4b35808b9b36b75cfad42cfcc1"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "616cfba8616c9db47eeeb88d04bb4ee8"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "0b56201dc703e0d6b53b140c3c71c422"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "a61cad52ae1dfba63cbe68ae6a0f4810"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "366b13854534c6c54d706a69de78f2fb"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "399b96b3c818c5ec9d873abb84c849c3"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "cb183262fa4c58e344339da9fe1dc7ae"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "2f1ddcd77f0c3c95ffbbbef0350af333"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "babde9dee8bc4eab246529b8e27252e4"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "7f2bdaa082f25f00b0867f74b28324bb"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "060a02d08811b8ec1d68251321cc25fb"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "000d2cdb2ee63948136caa62e8971b3a"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "75064dab798faac85dcca64c739bba28"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "e280a0e5849cf23a9a2b1bbd0329ee88"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "9de7be842df72bddca5cae00e47a444d"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "d0362f2594fe848f1326fd26f1021938"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "4b5f629ae48ae1c7930c9758d5c8adc3"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "6ca9d03a2baf5f48a01500bae117bb5a"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "52bcd52d8db667a992a5670ec55d365b"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "b2296812b83ec0af87d7afcdcad563ef"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "2e69ad9aeab3c86ad91720ffb026efb7"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "413d557b9fc6f8abf990dd2aa63a9bc1"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "c73501c23dd1d202c68b4d436d96b08a"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "607ee1d4be8b7200fc0dd474fecfe0dc"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "3831a2db51854581e347a1af7f03c851"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "21ff9ffb1bb177aafd269fa3b9fbdd05"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "250419cd46646399b59c782926acfd3f"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "0f53caaedfb29c09883e7d66cf3b50d7"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "2510a08f7214bfad024611e2df9e89e3"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "9fadadc6e9e057ba79843490b65849c4"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "3ea93fa470b5e34285825497d0fcb769"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "c8e489df7121e7e7a36a003d1b003f04"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "bba688ac1d3ae0bea58f462871d72d75"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "fb2df0fb2902b3c57d59d597b7bb2ff6"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "5b9740c41340a3b932d72a1628b7c08f"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "f0cc3083f1b88b0dc5df7f2f1f49d91e"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "fb1bee7ca8fc7aee2b3e11702503d5c4"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "ef8a67febaca64fb9166860728eadf86"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "dee34828e5d55af7e6256e792df149c9"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "38a7b357b539d3dab14a74b519f6e7fd"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "6d92403c7a514646d464e034882c80be"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "439890a8d5e178c1517ca7eea137f0a5"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "cff42d03f1934e4d7b4aabedfe2d90da"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "66f234fc2b4e9bcb8bf976944d7aeb4d"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "51e430786ae3b287c0215a697c95a7c8"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "d8fa64f068b58b0cf607c38c61bc4173"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "d81f165d72f94df7df37724a2e7aec11"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "9cab74059ac10b264d1da29ddfff40ab"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "ee6f01e53abca74f0da1532dba1ac830"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "a8b00119c23a66d879f373deb758a741"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "dae730480b78ae1e8a5b65ec147fce3d"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "568095cf3444419c8ee889428fd5c534"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "0682faa475e56beb98099bdc3b7a6beb"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "000d6ed77a45e3cda218e780847c9a58"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "91f9fe95818b79281a21b0fe44a4c72d"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "0863de2bd1ef2c5c0b6cd047912dbaaf"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "1a34dff1ff4d01cc55852fe9d87d9374"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "5919ab59df293abd2bbc50f5b8dc482d"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "0ef907491fa211679f35d4bf9379f0d1"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "2fd21e6443213ec6eb2526ad373978c4"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "abb56bb91ec478d6c9e6a8d4e8c94ed6"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "3d5ed249d57d31720bbdb84b6ac5105d"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "b996b6af66da9ed55158944cf0fcbe39"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "2b8636fb3ba9de23b54468ccd2bf3ec0"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "ddf6817376b2b2811dabd766ed80d51b"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "d4224917f61dabc9dbf1fca0b5101323"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "0a461cbb04e56048d53374bd59bb34a8"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "80d7e346a37765c2a844a82e9f04f946"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "dd9e7598b99fd483cce87a0267181ac7"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "5ccd5422516d3d22c4274fd90d664c0d"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "dfe5e2a9d7cf30a717d491b86c01797e"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "6f2e641a931b14bb8025f37a03381e6c"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "e9c6cff7e3b05f689098335c80139261"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "b50057d3e6842c52fe5de2eaf46b5c84"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "b6b57d8c75c23df3bf63ae32b3c7e4df"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "ba666fa29cd7ee04bfc4ed4a1ccaa17e"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "2445851a8f6b52adfbdfb9800a7e3670"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "18ad04a46643e11bf909b324f54829ef"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "cc915d25b2996db407d1dff8cc407581"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "e6bea2f45ec1c1811a981df6d4f0f62f"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "e92781b93e819f61a3e3b19cb2ade7ef"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "86533e004a24be518d07bb6fc3cc377c"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "904c1be1886e1f544eb9959ad5a73f16"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "ef0e51e9e32d5e31f55fda2e5b5ab6a8"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "ace8cf02780ea20c56d2cda55f3e3370"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "5596a10e26778dfda2e630081f5f8518"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "8e43aa52cbe67d60b575ef397e7b46c2"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "fb8c007a004aeaff401fa89b79729f22"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "030a262485d9cddc9485eb971aa4cd95"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "0f74c5113e96cef7d335a6b0b4e6a4c6"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "87192170448bbca24cab256f2897549f"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "c57c3dead19e958e0881a58530aff884"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "cad205e6a987b525e17e78a9ab1afaf7"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "5b9d43375aa0bbd04d32aef38a1930a2"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "7276f7fe2d279f88e881385a6e52763c"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "c1005740c25784e5cf09dacaa99351d8"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "d4ad42baa4a3182d30991b041ee5370f"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "57501520628a5b9c73106dbbf93ff68e"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "328a4e06757ec9ffc721a6ace877f36b"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "225d3b84d36c26affb84cb130e1b8fb3"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "8030782f459a266241302f7349be8161"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "43386b7be1616a8a17434dc2b073d60f"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "8dfa4c0925b89c7141745454c38e03e1"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "5f62bb9a7e5f8ebea56f02c9eb1fab7b"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "bc0c067ce204edc9912606e602ed0113"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "c6f83b95d5dc89d426ece9fa25fb8adc"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "c1a09edb5981740be55a4a65019253c7"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "4f58f919e5ded6522150e9f3e3153a90"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "34c76810ed499b3fc9778ff12c8c8e96"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "74a0db5687bf2e31772780bd5a120287"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "a25b9cb2b615182ec95339e39def1157"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "177aecd5909d43e47231953d0807bdf7"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "34d51cd5510d3bd937914d884e1bf5d7"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "1c7a40ec4eb56bdd9bf972944af180ac"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "7cca8b50458660db43f9a59ccf454805"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "f968439eeefe6a9b569e7a81431dff04"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "73d23eb4700656e19ebc126673413937"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "26691f4b6693022c1ece6407c0db02e7"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "1558a34fb45a1d902cf27de3f8a5f7ec"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "2713fb28e7862a971e188b3e87588601"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "5a5b11fb63ea4ad5e2ecac719bcd8199"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "91a03bcfbe44b577e3445a2129502b23"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "e9400ea4c49566f5cde1eb2e22da3d69"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "75684c45169aae4176f08bed7fe0aa27"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "e11bd9c9f520688334de5cfbc4b88979"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "56a1b9598eedc3b6a9b66619dfcd3ff3"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "d1674125c517379b46ee64fca83f5414"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "7ac0a0722f307e58b914004e1b19c660"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "0c8864d324101fb8be7978e31a30f71e"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "7d74e2a1b4304332007fda4a8ed99d8b"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "1cfcaa0ce26bc4b88ecb059a7e5c9307"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "4c914cae0b2407e1aebca7bd205b2a4e"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "52ef7a5025a1a984e785528be3092c0d"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "f9654592a3e784073fe2d1f781c6395d"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "e54571a4f5a9ca34e4bfc8605bd3a624"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "e7292ddd63d70d80127d8785ba3316ff"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "4d8a449a1c12c32d8de72f4aa934de2c"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "52cbda384cdb28fd9d1f8c00706182af"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "97134617535c5370807872d354db636d"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "faf649947a8a6286aee44a208508d473"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "7799eaffaad99f50933ba2ea808c51f2"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "d2ccffe8757f3e51040a9750495944d7"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "d77fb1a1f417043514970125251cd7b3"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "bce1020cc465b7c92fd5f1ea9d3fae8c"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "bc640801b054382ecd669a9122817360"
  },
  {
    "url": "404.html",
    "revision": "fbd873e78db970e2755773acc11dae6f"
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
    "url": "assets/img/cookies.f0a37932.png",
    "revision": "f0a379328655d4f1725d55d91debdfe7"
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
    "url": "assets/img/customization.54fb7b0b.png",
    "revision": "54fb7b0b129ec88f1738222b929ac496"
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
    "url": "assets/img/is-required.6da50271.png",
    "revision": "6da5027184bde7fb184eb6d5be3777b5"
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
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.447b4133.js",
    "revision": "6eaa0c7cabc4712ab3e7badc8501d036"
  },
  {
    "url": "assets/js/10.255bc6ee.js",
    "revision": "ff183dc440c240e8ca88559f4fc8c356"
  },
  {
    "url": "assets/js/100.e52cbd97.js",
    "revision": "25fa85a95025eb28c13954160e866417"
  },
  {
    "url": "assets/js/101.c5da7472.js",
    "revision": "031605c1f8cb38b5ef9a55c4c237b0f4"
  },
  {
    "url": "assets/js/102.8ce6daed.js",
    "revision": "8f0fd1302ceee29183105813329d400d"
  },
  {
    "url": "assets/js/103.284535c6.js",
    "revision": "b243d1afd9c9e9348fedf7d889e5dac0"
  },
  {
    "url": "assets/js/104.1a127b13.js",
    "revision": "e465abb3e1c462f3d600a11b68321c6e"
  },
  {
    "url": "assets/js/105.cc49f6fa.js",
    "revision": "a9e46427464a53908f9f1f253ac2c118"
  },
  {
    "url": "assets/js/106.9f6031c9.js",
    "revision": "d3ba5330b7513dcd42b1121733091d61"
  },
  {
    "url": "assets/js/107.e23a6b3c.js",
    "revision": "b124271e8a0e2f2685248fa6e5533a48"
  },
  {
    "url": "assets/js/108.3260801d.js",
    "revision": "cfa48e66533675bb5784fa5c849d53d5"
  },
  {
    "url": "assets/js/109.a26b4e55.js",
    "revision": "cbd88837f7d928312b985b1e2a3212e4"
  },
  {
    "url": "assets/js/11.56d36d1e.js",
    "revision": "af912cc4da7e8bfee0060f3f7dc143ef"
  },
  {
    "url": "assets/js/110.73e3d563.js",
    "revision": "42a946fe3a12284d4e4584797d833489"
  },
  {
    "url": "assets/js/111.8d72f484.js",
    "revision": "6f261395df8453bf5fcd9fbb1e6d152b"
  },
  {
    "url": "assets/js/112.ccb4b50e.js",
    "revision": "4dcd4672d7ee619c486a81139426cb86"
  },
  {
    "url": "assets/js/113.b112e337.js",
    "revision": "00a4ee302b6c9d5c22b36c97e6a3eee5"
  },
  {
    "url": "assets/js/114.012ef1bd.js",
    "revision": "8f9b27a44419302d50917bc4743e348a"
  },
  {
    "url": "assets/js/115.7168be0b.js",
    "revision": "5f8bcec2259d760c4b8174ed4b4ab17b"
  },
  {
    "url": "assets/js/116.5ba2bc16.js",
    "revision": "66e366620f84ac70c6cea7d3a139cc05"
  },
  {
    "url": "assets/js/117.275feb78.js",
    "revision": "62c7f500e6b3b6d8bbc7fdc48fd07f4e"
  },
  {
    "url": "assets/js/118.e83ea91d.js",
    "revision": "181e3e625ad7853775f289073e80288b"
  },
  {
    "url": "assets/js/119.65c17bb0.js",
    "revision": "0e814253ab799c16cf8d9647e6638440"
  },
  {
    "url": "assets/js/12.49b49aa4.js",
    "revision": "58b6a358ec494926b96aa2a7a1268e5d"
  },
  {
    "url": "assets/js/120.d5ce8e7f.js",
    "revision": "fce11626d189ad377d161b65a50dc856"
  },
  {
    "url": "assets/js/121.849dedb8.js",
    "revision": "4c1cf987bfdfa6723c49a05debb48cb5"
  },
  {
    "url": "assets/js/122.53300d4c.js",
    "revision": "d7c34da4e9c1080bf04c4908f2c5e5e0"
  },
  {
    "url": "assets/js/123.3da3d715.js",
    "revision": "7a8c67cc9a62fbccde2c57b3d7d88966"
  },
  {
    "url": "assets/js/124.a3fd51df.js",
    "revision": "b94e3de0b183fd51959d283fd906e9ce"
  },
  {
    "url": "assets/js/125.7f14113b.js",
    "revision": "aa20520eb59bcd5a15163dd9a1119ee7"
  },
  {
    "url": "assets/js/126.cec3a3cd.js",
    "revision": "dca3bdedcfc8da68d9d2ac55b021fe08"
  },
  {
    "url": "assets/js/127.55ec6dc8.js",
    "revision": "54b82784209e5955c3a5e06398f0f10e"
  },
  {
    "url": "assets/js/128.0646f07a.js",
    "revision": "c50ba4dd12bf6f77c2934cd6618cf8d4"
  },
  {
    "url": "assets/js/129.da42defb.js",
    "revision": "52880f92105b65ab4735cab5972f4ad5"
  },
  {
    "url": "assets/js/13.ba75f11e.js",
    "revision": "2c1a20c76f7b3e06938694a022c108f4"
  },
  {
    "url": "assets/js/130.34da629b.js",
    "revision": "ffba60f8cffdbeda14e0c111b92ac1b7"
  },
  {
    "url": "assets/js/131.97f1505f.js",
    "revision": "172254e653d8ef4a58923ffd14c25ed5"
  },
  {
    "url": "assets/js/132.94a0816e.js",
    "revision": "67578030a4a012bc3d19711d965117f4"
  },
  {
    "url": "assets/js/133.16840957.js",
    "revision": "2319b9c098e4d3a0679573e96f286e5c"
  },
  {
    "url": "assets/js/134.6189f6bb.js",
    "revision": "df74d1601af3213e8efac4ea74d031d9"
  },
  {
    "url": "assets/js/135.19468884.js",
    "revision": "c051bc29c49744e0a4a930f2966bbce7"
  },
  {
    "url": "assets/js/136.3595e6fb.js",
    "revision": "e2d4dafc5909e84f35772f6446f352fa"
  },
  {
    "url": "assets/js/137.b730607d.js",
    "revision": "5077b0b0aa120a7af701657b3ad5e26c"
  },
  {
    "url": "assets/js/138.a7a91a2d.js",
    "revision": "7c60064b60e95d7e15109e04de109d6a"
  },
  {
    "url": "assets/js/139.ffad435c.js",
    "revision": "e7d85d84db3e96e6dde1832c9d54bfd5"
  },
  {
    "url": "assets/js/14.301baa0d.js",
    "revision": "a88aaffd710a62217e155e09dbdd6a5a"
  },
  {
    "url": "assets/js/140.399f18e4.js",
    "revision": "9478e7c3989a6b46a4ab401a7f843e02"
  },
  {
    "url": "assets/js/141.7508635a.js",
    "revision": "35fbd9fb564112e1a247a47601dca448"
  },
  {
    "url": "assets/js/142.175bcbda.js",
    "revision": "2bc6073c5debb021f01ad9f01fe5c4e1"
  },
  {
    "url": "assets/js/143.c0592da1.js",
    "revision": "15dfc4ad95888339524f6eb3425e40db"
  },
  {
    "url": "assets/js/144.d55cc380.js",
    "revision": "d85a5453af176b8effb2d99adb835ed3"
  },
  {
    "url": "assets/js/145.f3658c62.js",
    "revision": "57c2bf44c68a06ce9a99480134d99055"
  },
  {
    "url": "assets/js/146.a3708be5.js",
    "revision": "cea7af3fc85f0b24196758b5591f940c"
  },
  {
    "url": "assets/js/147.51468faa.js",
    "revision": "400ede46f1af35347a829be0e33aea2c"
  },
  {
    "url": "assets/js/148.7b786dee.js",
    "revision": "b4086fd6356b30fb7227b645ece44683"
  },
  {
    "url": "assets/js/149.9ea491be.js",
    "revision": "f9dce33ad4193f03d10d2e6cb5f69141"
  },
  {
    "url": "assets/js/15.184d43e4.js",
    "revision": "18b9ee05766da2d2b6a1a4d7f92d7de6"
  },
  {
    "url": "assets/js/150.463084fb.js",
    "revision": "514b35efde4e509afa16e76843db374b"
  },
  {
    "url": "assets/js/151.b383bf6d.js",
    "revision": "b20f46288ba1f6ab878ea1187e005740"
  },
  {
    "url": "assets/js/152.6b50ddc9.js",
    "revision": "bb8cfb798f5ab537bb93377b9664b288"
  },
  {
    "url": "assets/js/153.550d1571.js",
    "revision": "9bd49f6578a34f8a8dfce2f7d0501d99"
  },
  {
    "url": "assets/js/154.5fba8637.js",
    "revision": "0acecd34748eedc1585746dfd45297e5"
  },
  {
    "url": "assets/js/155.fb9dcca0.js",
    "revision": "81961408a003ce270be6787ff6360186"
  },
  {
    "url": "assets/js/156.54173bb9.js",
    "revision": "122b7c23be97995c1925d4e2536d7ff2"
  },
  {
    "url": "assets/js/157.e501eff5.js",
    "revision": "83618ce799cb3dadd767ed6fcf8ef841"
  },
  {
    "url": "assets/js/158.b71b6962.js",
    "revision": "929a8c15dd2c37f41cd1a5ba98dd1e46"
  },
  {
    "url": "assets/js/159.2e8176c5.js",
    "revision": "bf259d5926f447fa1d02c577754e6fac"
  },
  {
    "url": "assets/js/16.901bdfd5.js",
    "revision": "a771b87ee770388324d5d0468adfc123"
  },
  {
    "url": "assets/js/160.380e026c.js",
    "revision": "90e1bac5caba4d9df250ee52a25fc0dc"
  },
  {
    "url": "assets/js/161.93fe813f.js",
    "revision": "48c0c53ec36c5c1881de0acdb7513a3b"
  },
  {
    "url": "assets/js/162.4084b03d.js",
    "revision": "022d975511cd1589fd867f4f30ae9762"
  },
  {
    "url": "assets/js/163.97271a3e.js",
    "revision": "b767c1bb1c99038c997e66ae1dda98da"
  },
  {
    "url": "assets/js/164.bfe11ab2.js",
    "revision": "b4e1593b284af93088991bcc1778e3e1"
  },
  {
    "url": "assets/js/165.cb870a74.js",
    "revision": "00606e7427ca99bddf2719d53515e760"
  },
  {
    "url": "assets/js/166.c1bf6f3c.js",
    "revision": "98fb6105c3af9d11cc3571f5f0aed88c"
  },
  {
    "url": "assets/js/167.1147a278.js",
    "revision": "936311eb90f8ea610776214673fe1d3b"
  },
  {
    "url": "assets/js/168.97d3fddd.js",
    "revision": "749a165c4e3a58cf98eb1c9e2161b2ad"
  },
  {
    "url": "assets/js/169.fc692904.js",
    "revision": "7ff7203244bb25ce415473eef78ca083"
  },
  {
    "url": "assets/js/17.f215043e.js",
    "revision": "2d88442c27d77c026cad3434d56ba247"
  },
  {
    "url": "assets/js/170.a2d5d536.js",
    "revision": "e4d87fefbbd9bd9f7e211cd9a202337e"
  },
  {
    "url": "assets/js/171.9bc37b5b.js",
    "revision": "77320762ea8a26633407561d57e2ff89"
  },
  {
    "url": "assets/js/172.52e8e8c2.js",
    "revision": "b127b289c6798bc519a65e5521485047"
  },
  {
    "url": "assets/js/173.c7b5205a.js",
    "revision": "5e85d8717b571d04f12be099276bf3bf"
  },
  {
    "url": "assets/js/174.306e5fcf.js",
    "revision": "cc5fb3ce8d36f3dd35446e9d2c927675"
  },
  {
    "url": "assets/js/175.54c78d00.js",
    "revision": "ba02c3d97514c12bb5e0205bbe2cdb2d"
  },
  {
    "url": "assets/js/176.1b4805d3.js",
    "revision": "74e2b0846d0fb7fa1e2c30b1d090f2d2"
  },
  {
    "url": "assets/js/177.b92ba620.js",
    "revision": "4ea34a8189d07ac9d56cb9749e2d5a0b"
  },
  {
    "url": "assets/js/178.003a04f5.js",
    "revision": "fb50b9a130f59105c847fd6cce93ec08"
  },
  {
    "url": "assets/js/179.b4ac2e73.js",
    "revision": "4eebbecb87d2df0dc15aff0210fbd3c1"
  },
  {
    "url": "assets/js/18.18a3dd74.js",
    "revision": "003871f1ae6934430bbdb165a33f2117"
  },
  {
    "url": "assets/js/180.64ded391.js",
    "revision": "f2037c61e81fdd0bdb0e74fe8cc10c0d"
  },
  {
    "url": "assets/js/181.75485acf.js",
    "revision": "7c4836ae6b46c9c8fe649c7d1937c476"
  },
  {
    "url": "assets/js/182.39e721b4.js",
    "revision": "2a8b3226e7320f761228bbc8260f0da8"
  },
  {
    "url": "assets/js/183.1399c0ab.js",
    "revision": "23ae785ff840f22c9b4bd97b2fdb2308"
  },
  {
    "url": "assets/js/184.46e2acc3.js",
    "revision": "ca242a7203027b2cf1e6c0d5e8dace3d"
  },
  {
    "url": "assets/js/185.068f41bf.js",
    "revision": "f306fc459672a5627b6f172f317547d7"
  },
  {
    "url": "assets/js/186.5eea0f5e.js",
    "revision": "eac03a6e1a9f3c882794b04614a1c7ee"
  },
  {
    "url": "assets/js/187.561c3b79.js",
    "revision": "57077473a7a8e132fdcc1596186b2932"
  },
  {
    "url": "assets/js/188.46b5fe54.js",
    "revision": "3771854ee7fcbe2ea7c8265ebffd98be"
  },
  {
    "url": "assets/js/189.2347b2f4.js",
    "revision": "51769c3c98a49374a57f400c57b4daac"
  },
  {
    "url": "assets/js/19.0e0a4845.js",
    "revision": "25b98c6d8788535a976c39b1b5c0f159"
  },
  {
    "url": "assets/js/190.ff905c72.js",
    "revision": "d4b5aaa25cf73ef8715ae3cee97e7767"
  },
  {
    "url": "assets/js/191.61d26064.js",
    "revision": "bbd48cba606d692cc187a1c1c4584f01"
  },
  {
    "url": "assets/js/192.c2204462.js",
    "revision": "d3a0a168852749fdcbdf70855ac99608"
  },
  {
    "url": "assets/js/193.4ae9d051.js",
    "revision": "c5b17facf97c986fff567daf66c8b2b7"
  },
  {
    "url": "assets/js/194.1388593b.js",
    "revision": "bff5400685643f315ddabec12e8cc8f5"
  },
  {
    "url": "assets/js/195.aaa8ebec.js",
    "revision": "72b81d6f62c67ff316681a213d2bc972"
  },
  {
    "url": "assets/js/196.9eb473e1.js",
    "revision": "789588d3be972cfb09fc58141c3a5844"
  },
  {
    "url": "assets/js/197.c3ab3a57.js",
    "revision": "b7ef3f6aa4e2b35c82aff3b8a9729721"
  },
  {
    "url": "assets/js/198.47e349c7.js",
    "revision": "7573eff36d8495056cfbc608a46129d6"
  },
  {
    "url": "assets/js/199.5286fcad.js",
    "revision": "f9a4ff560b6afc64fc9c41165a5aeb93"
  },
  {
    "url": "assets/js/2.93cf7dff.js",
    "revision": "7f9beb9c95be3f27d0091609e95b6099"
  },
  {
    "url": "assets/js/20.cd3c0807.js",
    "revision": "92f7ed99edd44fc435fb5504b6a674ee"
  },
  {
    "url": "assets/js/200.ffc63bde.js",
    "revision": "69495235b01139429451bf9c0550faec"
  },
  {
    "url": "assets/js/201.57753440.js",
    "revision": "859bbeb964421e62ad3a79ae23391055"
  },
  {
    "url": "assets/js/202.872e65e4.js",
    "revision": "15350e33c592975cec852373a72a638e"
  },
  {
    "url": "assets/js/203.f1dfcda0.js",
    "revision": "147cedc5ba1625b0e71429f503328f81"
  },
  {
    "url": "assets/js/204.5056e72d.js",
    "revision": "86c2c587cd56686b1f55ecec25e965b8"
  },
  {
    "url": "assets/js/205.918cba44.js",
    "revision": "bfa5cecc2ef8e15dc7d83424b7396673"
  },
  {
    "url": "assets/js/206.4d2be0c7.js",
    "revision": "662f45f7676a34c64b8165ec28bbe24b"
  },
  {
    "url": "assets/js/207.992bba11.js",
    "revision": "b6a10d58a7f8bc0b32cafd6b79c1bc7d"
  },
  {
    "url": "assets/js/208.d8c6dbb3.js",
    "revision": "e08f11f26ea8fb07c67c4952c273079c"
  },
  {
    "url": "assets/js/209.3a37ceb0.js",
    "revision": "15762f729e2d398d1baf0d736f00fd3f"
  },
  {
    "url": "assets/js/21.62d65594.js",
    "revision": "243facd9cca2c90b005ab9e739bf7c69"
  },
  {
    "url": "assets/js/210.ef7e9aee.js",
    "revision": "88d252c89b084f00a142a6c8ee43bc47"
  },
  {
    "url": "assets/js/211.18ae5af8.js",
    "revision": "288a290923712536289d6a864540ba79"
  },
  {
    "url": "assets/js/212.3a7882a2.js",
    "revision": "bb3d27678afed34aee59e38499ff6059"
  },
  {
    "url": "assets/js/213.bbecbe4a.js",
    "revision": "a9965298d3c0eb63fe62af235579b7ea"
  },
  {
    "url": "assets/js/214.b630d3fd.js",
    "revision": "1e71418615ca32e8c37c9fae6084bd5a"
  },
  {
    "url": "assets/js/215.5c1d5233.js",
    "revision": "620b13264d588286a0799d447098c4d6"
  },
  {
    "url": "assets/js/216.7c8a49c9.js",
    "revision": "13bf0126f458548c30271518719b67b0"
  },
  {
    "url": "assets/js/217.e3b33264.js",
    "revision": "93d0a7ecd3f503004b73a2d49e0293eb"
  },
  {
    "url": "assets/js/218.a8bd7b5c.js",
    "revision": "8501e9c68fa4d1d69e07c02e96d828ae"
  },
  {
    "url": "assets/js/219.c37b10b0.js",
    "revision": "579e118ee351af4c42679d08e442feec"
  },
  {
    "url": "assets/js/22.5422ef92.js",
    "revision": "46ba4b530cfae775eda69d0a429912cc"
  },
  {
    "url": "assets/js/220.c0fc7a50.js",
    "revision": "1a3a4edb2c8ffb39b81622ef741f2687"
  },
  {
    "url": "assets/js/221.512c0ddf.js",
    "revision": "00f240786ceb2f2409f0b52e5396d052"
  },
  {
    "url": "assets/js/222.6ba60a55.js",
    "revision": "fbfe6076df03a8ce588ff57f95d1947d"
  },
  {
    "url": "assets/js/223.fa22c2b9.js",
    "revision": "adf75f887648e6098dc7d17efa91f2cd"
  },
  {
    "url": "assets/js/224.bed4d4b2.js",
    "revision": "dcb5cafde7fd9995a07f508d6c33fcaf"
  },
  {
    "url": "assets/js/225.c7459384.js",
    "revision": "6e15f49bd96c691decfef82cf7c9e49c"
  },
  {
    "url": "assets/js/226.7f10d999.js",
    "revision": "c8678591749ad38b01448c7dcb7ed12d"
  },
  {
    "url": "assets/js/227.53f37e60.js",
    "revision": "d456b7ab85dbc04d77b6825afa0a48e0"
  },
  {
    "url": "assets/js/228.ed45b472.js",
    "revision": "d18efd822e3af41723987bb29b1c12cd"
  },
  {
    "url": "assets/js/229.3fd78584.js",
    "revision": "97325af096f47d6abbc12b553d039c54"
  },
  {
    "url": "assets/js/23.405a51d9.js",
    "revision": "abb8074eb5f89c6ec418c225028b7aab"
  },
  {
    "url": "assets/js/230.e41867e5.js",
    "revision": "5adf5e00c699d057c4ee6fd36b410b58"
  },
  {
    "url": "assets/js/231.cdaab2f4.js",
    "revision": "98e9d53d6fd69e14fa1af34ef66bc5c2"
  },
  {
    "url": "assets/js/232.92ee7673.js",
    "revision": "1a5e439a9fc2dbe5dce7e0e5ebe1c78b"
  },
  {
    "url": "assets/js/233.6f057596.js",
    "revision": "83322bf038e3ef3a3026754e74099f95"
  },
  {
    "url": "assets/js/234.903c68f6.js",
    "revision": "9ff321fe5d1d236999a5915a4d8ceee1"
  },
  {
    "url": "assets/js/235.b21abcc3.js",
    "revision": "83b7aabf8cc6a11beeff76df159c52e8"
  },
  {
    "url": "assets/js/236.8e8614dd.js",
    "revision": "bf9de14f2ca3000dcb5fdc898d2222ff"
  },
  {
    "url": "assets/js/237.abf136ff.js",
    "revision": "aa45e2a0abe9bf300e62bf53623de3d9"
  },
  {
    "url": "assets/js/238.e1b43a45.js",
    "revision": "3de68c1486874adac088265b6240b73b"
  },
  {
    "url": "assets/js/239.d0b5d9b7.js",
    "revision": "14b6381f94962aac8fce301f0a4e85ce"
  },
  {
    "url": "assets/js/24.344c952e.js",
    "revision": "5a50fd0afc2d7447f49001734e3cdeb8"
  },
  {
    "url": "assets/js/240.386abf00.js",
    "revision": "66927a0c6bc92e52a38dae931287aaeb"
  },
  {
    "url": "assets/js/241.211179cb.js",
    "revision": "93572cb8eeb0a3d1bdc60314188ff65b"
  },
  {
    "url": "assets/js/242.e4046d23.js",
    "revision": "c22213f2c40be17bde5328400085ed6f"
  },
  {
    "url": "assets/js/243.871ff4d0.js",
    "revision": "12600e1f7265b6dcc5e751c2d27b94bc"
  },
  {
    "url": "assets/js/244.b8c372b7.js",
    "revision": "1c9105ce1bb969af4630f72eb614ea8e"
  },
  {
    "url": "assets/js/245.be69e327.js",
    "revision": "8394d9b4d8ed983dbe981cfe621b5b79"
  },
  {
    "url": "assets/js/246.0df7bb42.js",
    "revision": "349f8ce9b0aead34bd3e6f572f486db2"
  },
  {
    "url": "assets/js/247.21aa02c4.js",
    "revision": "5ae097b92f4eace56c802a5bb56d7d4d"
  },
  {
    "url": "assets/js/248.17927f03.js",
    "revision": "a11caa174b77f98f40ad89c8bf76ee0f"
  },
  {
    "url": "assets/js/249.8365ede5.js",
    "revision": "2010ec3f1b01d0c535301a110f226761"
  },
  {
    "url": "assets/js/25.685faa97.js",
    "revision": "d175389d89d0c8e93364dfd8e080ae52"
  },
  {
    "url": "assets/js/250.03fac8c0.js",
    "revision": "6040c6f01357089c77934c39a4ea9eb1"
  },
  {
    "url": "assets/js/251.df7668b3.js",
    "revision": "9bd087e2212906cfa6eac886abd942d1"
  },
  {
    "url": "assets/js/252.e8ed61d7.js",
    "revision": "f47d5768c5c5739efc77856481521994"
  },
  {
    "url": "assets/js/253.d6570d0d.js",
    "revision": "88dbb5fe8eebb007f54bf30958d60f80"
  },
  {
    "url": "assets/js/254.7be9346a.js",
    "revision": "68428d6479d0205c2b7dbdbbc6d26608"
  },
  {
    "url": "assets/js/255.b0e43a23.js",
    "revision": "974edc3279b2c6fd9ac66e71494001a3"
  },
  {
    "url": "assets/js/256.9b2d0514.js",
    "revision": "844779b13bbf2d12f2a782c57f9940dc"
  },
  {
    "url": "assets/js/257.174451db.js",
    "revision": "891a5fb0a13d3739e117a609f376cad0"
  },
  {
    "url": "assets/js/258.d266e85a.js",
    "revision": "ab58fb0de87df2d163edf6a37bf5972b"
  },
  {
    "url": "assets/js/259.e6f446eb.js",
    "revision": "c04a09dd3c64daa814aaedbfab59dfb4"
  },
  {
    "url": "assets/js/26.06be2195.js",
    "revision": "8ee90ea8f25b8bdfac08bc0b1a0f1d1b"
  },
  {
    "url": "assets/js/260.68b98386.js",
    "revision": "fb06aa86091a3bfbd098d950854f8f11"
  },
  {
    "url": "assets/js/261.10f185fa.js",
    "revision": "4a0fb4cdd07468b9490655fd2d23915b"
  },
  {
    "url": "assets/js/262.be7bef85.js",
    "revision": "66399ddda34ebd055e705b1c5448c34d"
  },
  {
    "url": "assets/js/263.5cbc3629.js",
    "revision": "23c33c3e9d5f6081a7ebed765303f899"
  },
  {
    "url": "assets/js/264.e9501837.js",
    "revision": "3dfcd500598ab5203bd71f99660f2bd9"
  },
  {
    "url": "assets/js/265.5026ab7a.js",
    "revision": "e298d40fcaaf5676c800c3d64e261694"
  },
  {
    "url": "assets/js/266.5ade6cfc.js",
    "revision": "df026f8414d81ccff49cc3568bd54c8b"
  },
  {
    "url": "assets/js/267.286b2889.js",
    "revision": "ab3a242c2294d7aa9638944f689a9750"
  },
  {
    "url": "assets/js/268.47fe0d4b.js",
    "revision": "ecffa2f6006886c64f3e2d6bc74ab0f8"
  },
  {
    "url": "assets/js/269.e8279346.js",
    "revision": "2721081cae5b07bead5e32ea633e83ae"
  },
  {
    "url": "assets/js/27.b78374d2.js",
    "revision": "05a36188f5a6e1ae3149ae721b3db7d8"
  },
  {
    "url": "assets/js/270.381414a1.js",
    "revision": "1b4cdd089e7d723ed79aedab3af6b42b"
  },
  {
    "url": "assets/js/271.f9077fe6.js",
    "revision": "ea4ad23213b6c3b3f8ab79a614ad3a78"
  },
  {
    "url": "assets/js/272.bf03787d.js",
    "revision": "ebd18257045a064a9f1ded0471606801"
  },
  {
    "url": "assets/js/273.29d55ff9.js",
    "revision": "ff79f2d8c263f17f6a2f2c2a865b1299"
  },
  {
    "url": "assets/js/274.7abef5b3.js",
    "revision": "fb5404c22d2b1f5021800f5f35c1530c"
  },
  {
    "url": "assets/js/275.d8553b1a.js",
    "revision": "ccb855bdec3055286fc354df331d21ce"
  },
  {
    "url": "assets/js/276.71f688f8.js",
    "revision": "9d074b6442e6fb63e918fe4030b46d1f"
  },
  {
    "url": "assets/js/277.17454314.js",
    "revision": "d235b5271968e723290b4b0f40bb4d3a"
  },
  {
    "url": "assets/js/278.1c87641a.js",
    "revision": "4ae8633e1849cdae70c19d6cca6cd24c"
  },
  {
    "url": "assets/js/279.6964abe9.js",
    "revision": "ce9e1c08a7f9860b9f5ef663c77c2bbe"
  },
  {
    "url": "assets/js/28.b73d1f98.js",
    "revision": "56a270b66dc1885e42ef831e59c0a2dc"
  },
  {
    "url": "assets/js/280.37ec4cd4.js",
    "revision": "1f8f2710afe5d7bfcec71138f180e595"
  },
  {
    "url": "assets/js/281.73241838.js",
    "revision": "b271f99cc075836fe7360cb71335006d"
  },
  {
    "url": "assets/js/282.efb9fce5.js",
    "revision": "f5a07bde021e932f4b2191d6273e17e0"
  },
  {
    "url": "assets/js/283.cbeec255.js",
    "revision": "c9de94920e5889f7e37e33d9dd5795bc"
  },
  {
    "url": "assets/js/284.96f5ae6e.js",
    "revision": "a028f28ffcac787383d0a584ff5e46eb"
  },
  {
    "url": "assets/js/285.8dae008a.js",
    "revision": "9b4ad47f7622b7d89a2c98fb05aa5056"
  },
  {
    "url": "assets/js/286.1f1643e6.js",
    "revision": "fd690a566f70835dd8a5caf8764023b1"
  },
  {
    "url": "assets/js/287.206f2152.js",
    "revision": "de4af4c2c0a9a2bb73014a3d7341e824"
  },
  {
    "url": "assets/js/288.5f2ede95.js",
    "revision": "df111129204c971b5aa2dde879176867"
  },
  {
    "url": "assets/js/289.cebb0ac7.js",
    "revision": "03d2271d7b8f4a313bde1d776db1a344"
  },
  {
    "url": "assets/js/29.8398f5ec.js",
    "revision": "5b1386624022a54527f2e388415658a0"
  },
  {
    "url": "assets/js/290.3a61770a.js",
    "revision": "57ccabc2854b76cbac05baf9cf7ce8e2"
  },
  {
    "url": "assets/js/291.d2f55303.js",
    "revision": "c7fe53bbe42ce6714680abafc6afaab7"
  },
  {
    "url": "assets/js/292.d8d51c0e.js",
    "revision": "b76b20780d5a68fc1e2f4713bdf28d3b"
  },
  {
    "url": "assets/js/293.ff58669d.js",
    "revision": "61985fc6d2deca33e481e54f8f6707f9"
  },
  {
    "url": "assets/js/294.64bf2fb9.js",
    "revision": "1d46804921c1942353c5c22dff7942f0"
  },
  {
    "url": "assets/js/295.974d06fa.js",
    "revision": "40c7391bbe66dd5869bbb4e2fbb44211"
  },
  {
    "url": "assets/js/296.459bf1e3.js",
    "revision": "87914dfaef2c43b675f81d65ed48681c"
  },
  {
    "url": "assets/js/297.d9b52ee7.js",
    "revision": "764d39a921cfa248262dccb0a1d95d08"
  },
  {
    "url": "assets/js/298.c8c5dbc4.js",
    "revision": "321fad9666e0566604806143e90a442c"
  },
  {
    "url": "assets/js/299.5e4f8d32.js",
    "revision": "4ce9c72e1998823559d39d42a4af6eb6"
  },
  {
    "url": "assets/js/3.7578182e.js",
    "revision": "b150dde3736f73a183e3c1cfc347fb3d"
  },
  {
    "url": "assets/js/30.3b111edb.js",
    "revision": "1604171dc616d4177a32e53611ce2ed9"
  },
  {
    "url": "assets/js/300.48815335.js",
    "revision": "e3e155debd05f47183c59ad5d5635596"
  },
  {
    "url": "assets/js/301.de13379d.js",
    "revision": "d6522a8f7324b9ccece6ac3d0cdd2e53"
  },
  {
    "url": "assets/js/302.078f95cc.js",
    "revision": "78d5d18fb6521afe1edf10b8b4d7c1d1"
  },
  {
    "url": "assets/js/303.4da68fe9.js",
    "revision": "7c975fdb3acf66ffb73504f1bbbd98fe"
  },
  {
    "url": "assets/js/304.73d2b48e.js",
    "revision": "63c80829135cde4d9cad70419e0ec000"
  },
  {
    "url": "assets/js/305.f8106cab.js",
    "revision": "58e1040deed70061f50607c10386ed7f"
  },
  {
    "url": "assets/js/306.4138a538.js",
    "revision": "34b85ff1f18a7c76dd77f0673e6be17d"
  },
  {
    "url": "assets/js/307.ae8393e7.js",
    "revision": "3cd79295542b318fcd0bb688a990966d"
  },
  {
    "url": "assets/js/308.d52c49ff.js",
    "revision": "3ca37aea40de82f452abd24aa6c3207d"
  },
  {
    "url": "assets/js/309.88b06bc8.js",
    "revision": "8270c3d07259dc05200d5231b076b27a"
  },
  {
    "url": "assets/js/31.c40a0a70.js",
    "revision": "c2b13cd2ef8d85ec757e80d1f95f0dba"
  },
  {
    "url": "assets/js/310.e6c8ff28.js",
    "revision": "1f62e1f14b03393a6bdafdc866d81cff"
  },
  {
    "url": "assets/js/311.b08f64fa.js",
    "revision": "057fe764cce5c8b40db6cec22b5281ab"
  },
  {
    "url": "assets/js/312.47d0e386.js",
    "revision": "04989cd0c2d4a9f4297a33d5de5e1d58"
  },
  {
    "url": "assets/js/313.ac14c6ea.js",
    "revision": "3312f4a84f00954936163d1b4c14538b"
  },
  {
    "url": "assets/js/314.4eaca526.js",
    "revision": "4abc60f10e1cfecdcb0185635467f411"
  },
  {
    "url": "assets/js/315.380ad533.js",
    "revision": "0402a0b12d03e6f915c81f0005c66eda"
  },
  {
    "url": "assets/js/316.2c382332.js",
    "revision": "405d9914d3768addf68f96b930534667"
  },
  {
    "url": "assets/js/317.bd16b1df.js",
    "revision": "19d00a438804c51cdc752c05fe9a0baf"
  },
  {
    "url": "assets/js/318.92c7c121.js",
    "revision": "fc19416a84c2c4573ca4d2263b728ef7"
  },
  {
    "url": "assets/js/319.0f89e838.js",
    "revision": "2a1883ab9c594fcd23e3d7140b0f084d"
  },
  {
    "url": "assets/js/32.5bec04a0.js",
    "revision": "56ca00c2416ec3a979d852a95bf6c3df"
  },
  {
    "url": "assets/js/320.bde85571.js",
    "revision": "32056d7dabae4c75827d6fe9001a9522"
  },
  {
    "url": "assets/js/321.6133b8ec.js",
    "revision": "5f8a4bdd4afa9734b3c2e1baba8a1ad9"
  },
  {
    "url": "assets/js/322.c5b34ba6.js",
    "revision": "64a14f2bc2ce701daf546bcc0f692b0f"
  },
  {
    "url": "assets/js/323.6da00258.js",
    "revision": "e8fdccd1dceaa3a797372817aaf4bb28"
  },
  {
    "url": "assets/js/324.35991e7b.js",
    "revision": "8c49b835e0b57209382311dd4566cc0d"
  },
  {
    "url": "assets/js/325.2df3b422.js",
    "revision": "6d4f7a24f2b0c4ceec32938d2b4a7793"
  },
  {
    "url": "assets/js/326.39fdddc6.js",
    "revision": "15b25f65e9939c46f9446d1c36b76093"
  },
  {
    "url": "assets/js/327.37bd795d.js",
    "revision": "bafb1fe7e7c9213c69a08ce8235e8a8a"
  },
  {
    "url": "assets/js/328.47e4a6bc.js",
    "revision": "06b6e833fadb7d1d920093b8b8d992d1"
  },
  {
    "url": "assets/js/329.c9ce7a07.js",
    "revision": "e19aebbce5bf69f674604528d267cd69"
  },
  {
    "url": "assets/js/33.8784b942.js",
    "revision": "cc7e3c6b42a0d6e4d2ab7308779fa0d9"
  },
  {
    "url": "assets/js/330.02610a38.js",
    "revision": "510ea068c1730a2545c40f3536d414bf"
  },
  {
    "url": "assets/js/331.19107771.js",
    "revision": "0a3467c77e66c5bdb0d00dd277cc8867"
  },
  {
    "url": "assets/js/332.0a5b3d3f.js",
    "revision": "b7b2efe2dabc8fee55b9f15864c716f7"
  },
  {
    "url": "assets/js/333.c354eedc.js",
    "revision": "b0028a35511e74b5111d94e0b2b917c3"
  },
  {
    "url": "assets/js/334.e8a8a949.js",
    "revision": "77bac6e0a281b3303fe453fb33480224"
  },
  {
    "url": "assets/js/335.40708b08.js",
    "revision": "dd9fdc8528a136c6b1aceaf891706ae7"
  },
  {
    "url": "assets/js/34.9233d7d6.js",
    "revision": "fa71b54a5ef6f19354e1011ab80a3649"
  },
  {
    "url": "assets/js/35.70d6c4ec.js",
    "revision": "8e6fd1aa0fb6b8939787d01b0243f0be"
  },
  {
    "url": "assets/js/36.4ff2ab97.js",
    "revision": "695b244c9c6217305b64f16ed43bbac8"
  },
  {
    "url": "assets/js/37.eec40c0e.js",
    "revision": "f07ff89a3ef23f9d1788181ce8d612c1"
  },
  {
    "url": "assets/js/38.572c9df1.js",
    "revision": "1fc9866ef52cff8d8aa2b4a4489c43ae"
  },
  {
    "url": "assets/js/39.7b72730a.js",
    "revision": "48823a12738d4a8ebb5996a69cd37184"
  },
  {
    "url": "assets/js/4.973daa38.js",
    "revision": "50b75bc8434e7ccfd1a1303ee50bb623"
  },
  {
    "url": "assets/js/40.c1dbe0b0.js",
    "revision": "56748b95f19bf8c02eeae288d0f27bb5"
  },
  {
    "url": "assets/js/41.327f0803.js",
    "revision": "0f954607eb30f37aa6e4b8881b27f4ac"
  },
  {
    "url": "assets/js/42.0bbdf64a.js",
    "revision": "84ef84bbcf429c74200761af7b9e4fb3"
  },
  {
    "url": "assets/js/43.651db79a.js",
    "revision": "27fa73101d86cb5d716fd05ef577da17"
  },
  {
    "url": "assets/js/44.870aab57.js",
    "revision": "c1fe659917ab11f79c98e65c2a8e8b28"
  },
  {
    "url": "assets/js/45.6de56dd4.js",
    "revision": "bed8bd9f9e89792bd299a04a4ec8d0d9"
  },
  {
    "url": "assets/js/46.14c6babe.js",
    "revision": "54a4113b30ffac6e5e0b76812eb8ceb0"
  },
  {
    "url": "assets/js/47.dd79ceb4.js",
    "revision": "81909f5823238cfe25bacef73b9bb815"
  },
  {
    "url": "assets/js/48.6c385207.js",
    "revision": "9fe6b824d8cd1e72262a1e6ac59a974f"
  },
  {
    "url": "assets/js/49.cf75bfd3.js",
    "revision": "a39a927122768e57c4119234c0518587"
  },
  {
    "url": "assets/js/5.9c6ddcf1.js",
    "revision": "80c73741f48fc997aee205040665f97c"
  },
  {
    "url": "assets/js/50.b5a76d1d.js",
    "revision": "8dd1fa458ec36eb1a9f7772565f796aa"
  },
  {
    "url": "assets/js/51.7b216b5b.js",
    "revision": "c0ef55f7b44fe96134116a2f931b5a08"
  },
  {
    "url": "assets/js/52.91a6c385.js",
    "revision": "f57ae85a68844991edec728ddc6b1f03"
  },
  {
    "url": "assets/js/53.9da42f11.js",
    "revision": "99b49160fff293f3fb65d3b6358f4af3"
  },
  {
    "url": "assets/js/54.ae494fdf.js",
    "revision": "f39f132bd29df769fb81738e487937a6"
  },
  {
    "url": "assets/js/55.f4bfadd7.js",
    "revision": "9e56bf290b4e5c2bbe6f67740fa648e2"
  },
  {
    "url": "assets/js/56.16a3c8cd.js",
    "revision": "22aa613f6dca82495c4c0ba6745f2922"
  },
  {
    "url": "assets/js/57.693dfa44.js",
    "revision": "57515bbea40ec3b08768fdaa800c0a90"
  },
  {
    "url": "assets/js/58.fcc7b1a5.js",
    "revision": "89ba5bf5ecb1dac68b00aff273afb635"
  },
  {
    "url": "assets/js/59.4cf2db04.js",
    "revision": "0fb7cda8d73c995221fb198749e107fa"
  },
  {
    "url": "assets/js/60.9c09dcfc.js",
    "revision": "cb3bfc906c8862b11580f4df2dbd81db"
  },
  {
    "url": "assets/js/61.8978711c.js",
    "revision": "489cbe934e3460b0b60a828ec79f6cb9"
  },
  {
    "url": "assets/js/62.13d6f685.js",
    "revision": "5fed1babce74359a27e27c9f4646a22e"
  },
  {
    "url": "assets/js/63.3a536e86.js",
    "revision": "12527f031053cb386e376f9854828ebb"
  },
  {
    "url": "assets/js/64.d0d42019.js",
    "revision": "05e6ff80aa264a2d9104d0e529baec87"
  },
  {
    "url": "assets/js/65.b11541f0.js",
    "revision": "ec84feaa4cd033c29dff6dc4d2c6b2e5"
  },
  {
    "url": "assets/js/66.5d3e9866.js",
    "revision": "6f9f7fe15419088c8dea2032da13cc4f"
  },
  {
    "url": "assets/js/67.a71ed0f4.js",
    "revision": "ccbd4293a5d5ad918cdc5ff9c1bda095"
  },
  {
    "url": "assets/js/68.6478584f.js",
    "revision": "fbd6e0a8dc79b453bb76b3954d4bc9e7"
  },
  {
    "url": "assets/js/69.8cb3f3f4.js",
    "revision": "329c1f96697d734e023d82ac37897bc1"
  },
  {
    "url": "assets/js/70.8cc65a53.js",
    "revision": "933c257c5b2f43d57ebda94bcdb0b6b0"
  },
  {
    "url": "assets/js/71.3579d6f2.js",
    "revision": "140797e6dd8ed259d4ce9dfd520349b0"
  },
  {
    "url": "assets/js/72.ee6dbcbe.js",
    "revision": "3b8135adb7a41c9c6b0e2770827f8ce2"
  },
  {
    "url": "assets/js/73.41a8e8c2.js",
    "revision": "01cb00f3f13ba5302fc136fff628e4f1"
  },
  {
    "url": "assets/js/74.28617997.js",
    "revision": "6fac056de69917e20e8a0de28c26b0c2"
  },
  {
    "url": "assets/js/75.0c1b3be2.js",
    "revision": "839f028a7abebdbb6f64f32d48c4ed81"
  },
  {
    "url": "assets/js/76.015b50a8.js",
    "revision": "2207e1821939ec291edf60db04b54dd7"
  },
  {
    "url": "assets/js/77.e22c9aae.js",
    "revision": "cc0688eac72201b58fc36d0e4b51b2f4"
  },
  {
    "url": "assets/js/78.2f56eadb.js",
    "revision": "426b16eb87bfd6ac650cd64bb71874b6"
  },
  {
    "url": "assets/js/79.3b7b1a6a.js",
    "revision": "8735751d4a5dca05b8834ca1cf64649b"
  },
  {
    "url": "assets/js/8.018ce2ed.js",
    "revision": "7d338b2bf013fdf67f27bda59a8e16fa"
  },
  {
    "url": "assets/js/80.d8c5d0f5.js",
    "revision": "4bccce82636f7c0e39aaedf37e7f2c3a"
  },
  {
    "url": "assets/js/81.3b47cf24.js",
    "revision": "dd50785dad093dd92d4c189d4ee8ad58"
  },
  {
    "url": "assets/js/82.5298589a.js",
    "revision": "4c409bb72d0afcf248e313bbf4b890e7"
  },
  {
    "url": "assets/js/83.271dca32.js",
    "revision": "acffef6c80abc8b632c733698ddb7113"
  },
  {
    "url": "assets/js/84.50df68a3.js",
    "revision": "1d17a7da7b76fc0d2b9dd871af7418f2"
  },
  {
    "url": "assets/js/85.cc5c2fd6.js",
    "revision": "8ad0f91fd3ef0824744dac2ca21d16f1"
  },
  {
    "url": "assets/js/86.e6ceb032.js",
    "revision": "250fa1b24894b7eff43099f5aacf313c"
  },
  {
    "url": "assets/js/87.66a450f5.js",
    "revision": "a02f7678aafea4bf631cbe86d6ee7ca2"
  },
  {
    "url": "assets/js/88.9f3bfdb0.js",
    "revision": "0c32fc06d7a3fb07a163799809febd23"
  },
  {
    "url": "assets/js/89.6bc1374c.js",
    "revision": "d7e462fd57ce1cfefc441bead84f088e"
  },
  {
    "url": "assets/js/9.4a3a1004.js",
    "revision": "6d5a2c5f37633c7dd3b785b8b9a7bdcf"
  },
  {
    "url": "assets/js/90.7b8e6cdd.js",
    "revision": "9abd34a368ada92b3e345ca867416cb9"
  },
  {
    "url": "assets/js/91.26508b53.js",
    "revision": "91aaf7c81823ba3a15f6512bd6a4e52e"
  },
  {
    "url": "assets/js/92.878d692a.js",
    "revision": "9d52b2309b7ee59d8eebc215c992f19e"
  },
  {
    "url": "assets/js/93.6bc1c02d.js",
    "revision": "77cd1aa4e0d122660558b5b5eda90871"
  },
  {
    "url": "assets/js/94.42278c0a.js",
    "revision": "7bf800cef66af51b3d32c1a2db557ffc"
  },
  {
    "url": "assets/js/95.e52ba231.js",
    "revision": "22621d10e3623aeb1dc32ce0f6a54b56"
  },
  {
    "url": "assets/js/96.c27334bb.js",
    "revision": "e27bd24b517d7a9ecebf36ad472f3ed7"
  },
  {
    "url": "assets/js/97.c6def377.js",
    "revision": "8bf12a2f95f5f553b00c63b78389e324"
  },
  {
    "url": "assets/js/98.a3c244bd.js",
    "revision": "49b4473c0047d38452b5f6aefc83c45c"
  },
  {
    "url": "assets/js/99.a689688c.js",
    "revision": "fbf1e325c4e98b30d5fe471b6752575a"
  },
  {
    "url": "assets/js/app.4c238a27.js",
    "revision": "15ab46a229e6fc21b94523c29ac808f1"
  },
  {
    "url": "assets/js/vendors~docsearch.cad29f70.js",
    "revision": "08bb4137e75122c6916d3f66765fa3cf"
  },
  {
    "url": "index.html",
    "revision": "f01609eb2473bce54040e85c06417d57"
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
