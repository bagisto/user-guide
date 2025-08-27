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
    "revision": "e3a7e19398be4c08170ca066f24f8bc7"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "303ef614e6b969604854fe1fe07a3605"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "6dc4b26352ea4882d29b848f11bac629"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "29d65c01e587494097358a4c118ba9a6"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "e3aef8f90373003bc48349d50946189b"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "f78e61d7bdd6855bdcf45462c20f5ec6"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "32f854a634baba36b1045988e4ff02cf"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "9f41f55d22fc60777076ef5ef6b02572"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "74b1732a7bd41f9f1d440d0ebc5fb4b1"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "fbcddf36c3e70c244e6a9d03c46554f9"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "29b41b72005400b69e8f00e75589efed"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "b1563e36694e74c6c59dcf1663d6016d"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "2b9c7e6aae4734fafc729a0697bd5805"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "45b71c5ece4f1239ff7dae643f417b1e"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "1887123f7efae80754c6e534c6ee7e6a"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "e4d75908bf54b16adfbd1ecc2deade5a"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "b1aa48f73432dc40e5dc9743f0b91922"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "c4d27782dac1957350aafd13f7129617"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "6ccf87e8fdf0937d094742a9cfdc59c4"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "73d27bbb9f9bb65867ec4f91403ccd55"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "d9856d6679eedbb3cda5b3ba2529cd67"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "96c27bc623903d0390d58ebc4a933e65"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "76f3f76833de992eabd4998bacbba3bf"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "7946592f6ab5954006f3ac01135c8fbe"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "3c7200654cb1ee9962e4d986bcbe8c78"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "7c4b16d1c51ff1a9b4d98ec94bca4699"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "1492a8ab75b8d5f5cf4148a44811f0a3"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "8611aa5e49a143e6e5391b75aa201aac"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "ad48c136ff08d688cfc78441d9c47380"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "78b44a7d9a2789b6464b5a7299a78fae"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "38f95c368bcfb7b0625a6f82d209a910"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "1c92dcedba432fc8be3b820eeb3332fa"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "795366c419e936962a77812999ee7345"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "c2e8165d0d085be0a97a5d75e9ce10a3"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "2f23ce661af33d5d8915fad4cae0d738"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "cd6c15c8eca7b8f355a56ccd3d5b4970"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "3a62ad90484a6887b7bb3464ed7e9ba7"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "e7f8abb3703b04f41f70474e4751b273"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "4532251b17498aa24ab19b494bdb94e1"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "d34bffb6d8ef845fb66eb6b2671326cd"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "0fdc86ca025cd31666148e0a94aa6298"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "a2fc8ba12392ac0b685b6f18a335809a"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "93a09eb47c835e1e6959f5ef1c9fba5d"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "18105f01ed061890b80c5801f6a721b0"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "097ee11a55c4e4dc2d9a09d6976d4d51"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "2a86355348633081d33d1f0fe33aecf9"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "f5ab566f8d2d5a9921221865bfbff728"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "af1d31d423cfe3cc36e6458ed42ebf72"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "0bff11731062ed0ee5616304f4e01e81"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "fd2f667895282b3b4218b707a2907b11"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "645f697ba61cbac96c0b88448e2ec7a3"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "fe2f42e869b4ea68c6bfd4169f9c1b9c"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "cd1c84a8eb13cb2f7381da63240d974d"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "e308d1dbb34128514c55556f134aac98"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "45ae6e221c3e95cbd13f682c93b623c8"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "ccf62c443c4e0154534a12aeff0e7feb"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "f5c84ee7b484275d9b395a4a7903431e"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "f86a7708bfd2a2ba721088386c981b81"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "c48aa9fea161f31bda4d779ad11721b2"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "f15d1f3b8106b4f462b11aca676dda2f"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "d4128cf7c42c709a1b6b429d595df596"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "9f0e9632c4c146010e74eb6f50b952de"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "3cba9b1c62b8f065667e4f1bd9e0b990"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "5a43fcfcbbb6218109735c6ca82c0425"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "034cb2f77f8091bc15fbddc8b0e7bf25"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "20bd24a9008d298151dde025f837c497"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "1260fbaebef525a3f063ab1ff9dffb49"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "daf4cbb1a48664d721d80a99fd50ab25"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "5e40fc88b6612736b58a0bd199bdc0ab"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "569efa0ae30d986e0ad9b0b204e92d70"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "bd16b44af36e2d16d16f6ad7b332c2c0"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "621dc8249f755c3da1a2de037baf6434"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "abeffb51f0449a7868c9f26da8fb1639"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "8793a9161089636d6a3c0552684258c5"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "bdf846798c798d5688c7f076a2de07ef"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "5c1b85dc18ecf35d7b3e5da6608bc6d2"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "1686c9def9ea031f81d8d5a2d99c0b72"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "cdae5345b647e0b037bc20f9a8d4ed80"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "1f2f9e5566bd39c8cd67f94d5777e6d4"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "29022011098a47829be0fb00d099ed84"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "71bcdaa59fe5b582247b0693ce951665"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "3e970c83981f9faec9ca1b1b7ccf15be"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "bc6b72c784a0aaa45d56cae06475b905"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "fa75ba920b6debc22f6e8189e4b588f0"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "0b69a9b8537cf359594bea908fc14627"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "8e0be7f28eb22bd9ee0b6b4ab64f5f78"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "687264e624bd0564842bfe62ddce10b3"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "cce2640c471c2969c5ac0588c3b4d27c"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "74a72b04b732e9cb6d1571db20f09c06"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "91c6322bfbfdc8f4ddf4896f8b8b275d"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "4547d2c67e43d2ece29c00346c11b808"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "f993b7b5d0c1d745926fa4b9571ea702"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "f605682a462bf9760bd94993ebb196ee"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "7979e5d5021075f4b6c61ffe41c225a2"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "efb9220687395680938f33591e9020de"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "40d6a703dc85700f562d2b6d72abc9b3"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "79924038490d5a47689b0349fcc2bf9f"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "472d6a6a489907bcf9e1e73ce5f0a9aa"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "9d357ea7106413071c3903d41c5addc6"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "8c528781c8b20a06de10baf38ba1c50b"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "148a41ed7a03d8e35db79c930440b5b8"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "5741bac9b5140f3771753a6f8d727f8f"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "71adbf3a82dfc04b028e6d9acba6dd03"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "d812f94d1b883338795c2fc0b7668a8d"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "c0b7d8acf0dfd025f425eadbb6877adb"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "bf3d3e2ee2331aab0ddad034e99cabcd"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "b1b9581a33c5b24a0aa6fbe2deee2c14"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "819c9656d8be82dae74b70ff33e00802"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "e52f6e3610ef29f029f92def695514ba"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "a92a225846ab93ba3e42322065b72fe2"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "5ecd983d0201b555730c5dc152a9b39a"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "3d7a1d8bcf7550c66e1e00949d419146"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "0ad8ab413718f3df9d56489f138c7c5d"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "2dab7b396f52c25c72cb835d0da4c346"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "01de812948dbb48eeaeedf5cca38f8f2"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "53586cb35ffe806486a6593bc007ccb0"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "f619de6a4b6dd1f277780acf93290cfa"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "e450debaef7d835337776dc313180d6b"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "993b52113fd96d78f5a8022b547aaab8"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "4eaeac86aba17bbd182c92749810b844"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "6dea170b2992e660e262f3eb24cb238a"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "c285364f8e33d23142028e7c04712165"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "54388f440a4bf3d360430724e6423c9f"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "3331f2182cbcf4dc0b3d177b0080ccee"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "2bc54ab81d77e07be532bbe11155e35a"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "bcad8bd55ef3de2a1afabaf5f5f7dab7"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "c304a3ebdbcc1a48bc79aa54f6173c28"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "7b3b809c7f62eca424544a459f97ab04"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "28a641f5453421cf93ea09f1af7cf05f"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "33629f749e01f1a271ad223921667b59"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "61a408293d13b5cf307aed04ff4210fe"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "1dcd3727c941194ba5b90303cdba0041"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "c4c45798abfad236c4f55d511433679f"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "3bbfebd9c74ff34ddd9db77d0003868b"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "f08b4ac4dc2120d55d0fc4c3cc9434e0"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "b4a941903a766fe45eb06fefe19a53af"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "ce026080dbb6531c325786251753ee47"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "91c4104f8e2f6cd4738671e4a9ee07fa"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "05eb0ae22b9b5f10e9a4631de8bbca36"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "dbdf1d329e8b89265f3b71d528c71d8f"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "e8b24ed5dc7a802719b3424d25efa73b"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "80e657c0c3cef5dd55315fc23186e88a"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "527a1b866dc714297ef90b52c216a3fe"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "f21d7b9d63bce26d7f81b039c448d1df"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "f2e0e9db23ecc9750496c3ceb0c6b987"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "5e8c4f9c29af3926075e0faa60c8a648"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "b56b3eb6f432508f0b0ed003c40a2fe5"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "baa78dacb62c8868c245873e39b92056"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "1ecbb07c8a9746ad488566a4fa63acb1"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "cafbf502b03e11c996136359b39e5373"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "0ac10a8cdb6322c2588a35cbd62444e6"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "5e776ec68c37af368f7022cc8f8bf087"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "a5273ba2513564be7ae1f6604308e232"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "af12ae3d4b5d1b84386c209aaf81f5d6"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "67764ae424768b0835cc081b93ce951b"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "210616df542940c23163d807956e5527"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "7f078d022e7fae5f8261a8af13f945f3"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "b393a1b05481ca66e3694483b8cdaeb2"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "ad6a1ada21d984a757f1f69c43839c17"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "795052af22012c51207af86a012ae17a"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "93fc52e50086e527d29d5658b4a4bb8f"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "d937e7e6d575e55af1e6b3b45778f2f1"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "fb8202d1496cdce4e8302a4e7915391f"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "4200ca1828c2569b67086eff8fd426e1"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "1bc4a7c0159ed7794f2e8a86644f0562"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "b504bd3f73d59ef5320e08a1ed754bd2"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "e57e06fad2da68dcb1e6367eaeab99eb"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "0596c01ba4491091034fd5920d759d93"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "65e9696e15a2e31472108b1e5c70a47b"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "16073a8c3be20abfd864eb6ef7902b40"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "6e0006f496ad65f5130082cffbb44364"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "ccdafa5dc0bbb7a81798ec083c3731e4"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "ae0f5afb6789bcbc04c0e2c54d29569e"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "c7164be2c3a3ff07d4c1ed18c2e64e5e"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "e36d3ee403bdee19331f4d85e04394fd"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "c5aeef846f7a9841ac58dc58bf3792c0"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "7c0b8db281940b696ab279f9a2bb2366"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "38fdd5474a972c599c3b59f70a9d8a8d"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "a53ede97a3cfe4d8aef0c306b9d8de6e"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "55ebe6367a39462b8958b556cd94d66d"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "39e489cfc4f223e7825704eb34741b89"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "c1987fc540c39f3204fc7f69492cfde4"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "019ec045db982fd872e356a0532403e9"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "e9c413bdb0f9ffa9ee5c7c6bf741b55d"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "cf3aec83cefa34bdac9b99177dd56c12"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "29b0b453e9af75a43f501c552af2e418"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "c4ecc3f6c46a8994a7c3b5cc96299108"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "82a5798970a948c43f98a357382566bd"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "bd65240904096c3745ddf4d6614cb2e4"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "b5b47c4f370a3aba866739b9135af744"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "92b382bd5a87f038163a7e6c534c8926"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "9f1706e22eb8a5819b81ff770c6abd1c"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "e534f7915bb6a50487be059cc53b5b59"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "49ac35a3986245e91c0b5ba72ba77fb9"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "ceea07dfeda5f6d0b7d373540797058e"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "52bf6fcc9a9d77baf1bfd0c0a49eb447"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "390981ea94f8ffe3ec61b72d22f23368"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "fcc31c19f93a579f32b4fa7262fa36db"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "69bdc1104d3c38b6340c25239b6f0ad9"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "13f578befad48e7fe92629825fba61c8"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "d4f6b48f9223b6df33c9e8785bbf8c7f"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "c18082a783d5cc77ebe6d16170ddbbae"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "666c295f1e3c91d8bddd71e7be7de7a4"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "51db660d61f4a717921a31d319ddff86"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "55d3929dfdab3ecd76205a73dba80e05"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "a2f5ad49273b16e9fff96fc6ee6b71bc"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "27774bb867762709c95bc13d70dd1161"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "6a7d61feddd4a84a29055e7dfc8edf8a"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "7c0b24e503178eec7126cfb6d9471a28"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "38256723441822cdea67e836be916073"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "bcea370fdd5c7713f875ddb15de6a30c"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "a833975c0611bdc137e974795130a869"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "d4c22b2f42ce35df66ace6e1847557b8"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "9ea8a687b9979777dc14cf28861be526"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "0aa979af8745aa92f28e3f9079afd52b"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "f7b77a64a50e179fc52d67d9cc53eda1"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "a344e71368cfdd0384108bbaccc17612"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "62f80d5d0454fa13bb5f7e99b8e8e217"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "5a39be73306d462b14e86265cf50f3a5"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "9536ad2fbb239b4954c52cb1c0ff06d0"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "7f177d451bca2e85d5995f7f38cf3fc0"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "7b72f4c460f5846fd267b9c0a94ac2f4"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "040d8c3b2a9712f7e091c311fcfaa071"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "6ccc95686fb7d5291d965d3f3a8c379c"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "f7ec619afd29756c60536534696ebfb4"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "2ef0119d013a9c5e7b4a20208e29cf5e"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "695bd051f90ec39dbcbcc02745deb8f4"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "6079ccb13a355caa9cab1d43a8a32873"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "e9161fbc242a3a6f495f3a6ea16bde45"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "d780729e003eb595435f4e5de26608a8"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "d463c33bf05aa1d7aec2c819d9dce9b7"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "0f6529068962026a4069e4b5e737543f"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "5ac3d1682ef2ec5810dc5d0c629f28b8"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "5525927552726d976aa7ad61b4c7b956"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "95e64107a8149a32230564f160ffc873"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "ae3da5d4b6ed2cd415983e1b9e344c0b"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "e28d05348d2ee7feef03d6fc305ce26d"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "ecca67e3ffd72950ee285f1b6e7a6847"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "3272ce8b7e8469f0c6d5e4143802fe53"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "6c76ceed8b0f1f22ee96e4a391edfd07"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "4557fbb57580591c96d26eca4e7200f3"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "bf7c327fd33f2a016dcee1c2830bc75f"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "ee77336d4702769e350365663022b95d"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "697ee89c710b72ec75879068a36813a7"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "05bb51ade9f3d01c24f3311d909d287c"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "309ad4797040cd5a8fda1a086231eba1"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "da16ca582f8b3c586d7775d7776cd6b0"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "f1128c6acf5b84eb418867074bd16427"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "60342234d464e50eb034abeeb993783d"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "13dcc1ab230ff327534282e6216ef29f"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "e190713f9fb54223641b9f722061ef77"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "24e1b0199eff349b602dd86234573900"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "39c98de0482f277d5e2963882da46c42"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "52d0cb84b09741d5eed748a542780a43"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "90e2063bf93426b30df56ef75e80deb1"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "46aa0586c631f44b9500f79c47ab8a8a"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "b8fbe13a89012905cc68169a4557fd45"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "777b1bc815cf836377cfe511a90d7108"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "de3fa83b1df3bc16fb28c7e76d0898ae"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "8dffe83ffd2464afc86223d1455d9998"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "6b46a30b1f7fbf6a89043665a2e1d95f"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "ef718ba7db8c593dcaaa01a1eb0478aa"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "2229a2de25ed9e958655e384ad8e5975"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "13cc660093c1f1d378ff09afa149341e"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "efa7e0dd2646bb12b220a634da89f599"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "46fe9eedc97303c220dec21fee97ae8d"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "3b9335ab5150b4f435eef7f98d5f4026"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "ab1a0a3a2192317b7a990903457ab6cf"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "ef3a507cdfbcbf9852e12fc4cf13ef0e"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "0a6a59c8e3f7c84160c2265f1af8c479"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "f2f0eb6222657755cdf55ac3455541cc"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "9fbe9960bf338af35305571cd5a744a0"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "b11dbd6d441fb2839425085ffc294e2a"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "932a22723914752eebb36ae285c6eb7b"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "56c14f3ae7cd648b51059d6176eb457d"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "f2423b27f339f0f738a99a7b6e1cfea1"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "1a897e5318bf8f7e1d1166936df60a16"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "5d0c3625d64bce9994c9d0ccf6e186e8"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "6981a81a54895489b2d103ae4a53d760"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "ed7ae187a42756c7a0c4aa3be4676e34"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "bad3bc70feb5d1afce269a23d2a2aa4d"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "df603db198a87682d0e31fee61c6e626"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "d6e8ffebd100b4d65871e4c3178a419a"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "47ee9c608239479cd4d34326a65a70b4"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "159b8c3270facfa9b912a571329fee02"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "0319e73532ddedf6358204d7682d1844"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "f680120f144a9342f441c8b1bf789c89"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "bfdb3d6ee0c05e1c58b9a5b7c1b4bb2c"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "1890f13a2d5744e94d9dbfd69a0c2ad8"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "16c436a361f8d3be7d4f5183a9417a55"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "27dcd6e6a0fc0f8e83e409ca06f3d82b"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "12a09c789b82f4fcbabda559ba10d014"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "cd40a4bb678ed27d9a9e5d754767ff60"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "137641fb7b86a1d88f2183d82c8d44f3"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "2e9f2409908463ce79fa4a46ef7496ec"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "4c07bc4f1f32bc63ba7ddbbbac695860"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "4ec8466980811f5e26758b06fd5eeeed"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "c1ff97363ed793577f0ede064651c2f8"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "cacc6ff6e59e3bc3cd0473244ad2a2cc"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "a092bce4e3733d68b726328f7879bf33"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "47a4018999a731d7b36f85eecb0f4482"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "04f74020f000e92ad9c545c0d5e20c48"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "0eb9541454f846413db06362f5e71917"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "9aee2609121325539ec9b0189efb657f"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "eda15c6cc911c1dfa2e7ad789264bac4"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "ebe39bd96598b19d2f9b6ca8b2167856"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "4f04447ec49549995e18db08b6cdd4ad"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "4e4f359efb5a3a3e4f092cc86590052d"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "e59e0d4884f0d0115fe1880a3dbb1236"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "d2bf372cb2dc3a1175bdee1c17896057"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "639b4c774b4299dab7a56a75f828483f"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "ce1113bbf1a0844d8645870c2312d2cc"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "ba9d3657c144f5063866924b226040e1"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "0db12236f03648a0cba9d24bd64178e7"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "a4e0b4eabf1d81beaee6305cb8cea48c"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "d95c3a07d2d115bf51e623d67bde5142"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "51fc65196b51a568535b55b1a8d70d65"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "e7c7571148c529641557555ed2bffba8"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "d06023513e1c03b2082a1eabf84d3b51"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "e829c6b4caf497e2820b33927249feda"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "213dc2de8ca0c99cf2d8255ff277a0c3"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "abc0ef638eeb51e54fb7df8fb15209e8"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "1891a89e002b3ff6c67aa1aa77ce7492"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "dad878ea018939dd0f914d93664aadce"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "42e70d54e500216231a0c01ec70f86f4"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "e185f21ac7e47fa9e5a304fb95099cb4"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "5d7d338528a6667f4209295f2e4407d2"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "fe9d048c1d1c3136b7e7d9502107b5c6"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "0c21c87b9afdeb95cfe8df1664e6a8ba"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "3e1083eb11266da4b00a6dde0e2e25f0"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "869d42e026290208fc44b2456e46013d"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "9f275f4929f488daf6081333fd738e49"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "515c5934e2ec4de91fb8c93463b8061b"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "b92cce93d508972edd0672cb899e8204"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "402d5b498e5337d43d2c2e125c653575"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "7acc567f5df413b2f8c4c719f2f3082b"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "f71ae894ec21e7ef8a3cd2dae11e966d"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "b40394184e40854cde7c26561fd3baaf"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "e86a918c9bb91c8ae01f105b59be9ea3"
  },
  {
    "url": "404.html",
    "revision": "59a08c7b43fcf6d581935360958c5a5e"
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
    "url": "assets/img/1.customer-login-signin-button.8f99e8e1.png",
    "revision": "8f99e8e12ea5020b672ffdfec298907b"
  },
  {
    "url": "assets/img/10-admin-product-review-pending-state.b945c508.png",
    "revision": "b945c508c6d759bd6b4b1533e0e9b710"
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
    "url": "assets/img/12-admin-product-approved-state.14b41e6b.png",
    "revision": "14b41e6b05ca679de8c3451fd3ffb695"
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
    "url": "assets/img/13-setting.b03a2298.png",
    "revision": "b03a2298a09509b1a2e69cb3e178526e"
  },
  {
    "url": "assets/img/14-inventory-and-category.d51fe2b6.png",
    "revision": "d51fe2b63acf9352033b0cc99b5cdfc9"
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
    "url": "assets/img/3-product-review.ca4e7643.png",
    "revision": "ca4e76438d32b5ebb20a7c28d3e3f67a"
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
    "url": "assets/img/5-general-arrtibute.521ccee5.png",
    "revision": "521ccee561a438a47cdb7c786df77bc4"
  },
  {
    "url": "assets/img/5-seller-dashboard-product-review.b1747eb4.png",
    "revision": "b1747eb4ce62f4d615279119ea9dc6d3"
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
    "url": "assets/img/9-customer-review-for-procuct-seller.c7c53655.png",
    "revision": "c7c53655f4d0276a1d3d062118827db1"
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
    "url": "assets/js/1.00a07522.js",
    "revision": "1313cead39ab7e89a94fb6c46144a5e7"
  },
  {
    "url": "assets/js/10.bd990a9d.js",
    "revision": "517336375921cfe631892c5ffc89b222"
  },
  {
    "url": "assets/js/100.3340d05f.js",
    "revision": "489f99a63238f515b08ec4c9ab3361bb"
  },
  {
    "url": "assets/js/101.db8a5539.js",
    "revision": "0f2c93c84b959f8097c23a5dfb65824f"
  },
  {
    "url": "assets/js/102.0cc8a2b3.js",
    "revision": "0ba0b26a5f365a8a7c1d2ddeb54584b3"
  },
  {
    "url": "assets/js/103.754c4585.js",
    "revision": "bc182228672383243747db69f3cedcd8"
  },
  {
    "url": "assets/js/104.04e85ea1.js",
    "revision": "bda5650796aa064adc936e0d5c9379ab"
  },
  {
    "url": "assets/js/105.db6073ff.js",
    "revision": "1599b5b5401730e0452a7a7cd2a0b118"
  },
  {
    "url": "assets/js/106.e6b6f630.js",
    "revision": "3dd33356a62d611e0ea640886144eda6"
  },
  {
    "url": "assets/js/107.2f34580b.js",
    "revision": "ed46c1a810e9e2f91736e604667dd0ea"
  },
  {
    "url": "assets/js/108.11d84795.js",
    "revision": "bcea35525f86912d024ca11963bee6f6"
  },
  {
    "url": "assets/js/109.b0724681.js",
    "revision": "1ee9631021dc8cfa8da1e1f12e62126a"
  },
  {
    "url": "assets/js/11.bd71c491.js",
    "revision": "4ae2a47244de7de2bdf2a442cbcb5628"
  },
  {
    "url": "assets/js/110.5d163ee4.js",
    "revision": "2069575d80c6e1b0047c8c92e731b66f"
  },
  {
    "url": "assets/js/111.7dc24c4e.js",
    "revision": "4c7863a7bb8c6c9d32c0ee445631344f"
  },
  {
    "url": "assets/js/112.1019c790.js",
    "revision": "4d34bef2b5255a9d5d11a0cd5f4efa19"
  },
  {
    "url": "assets/js/113.631dbd59.js",
    "revision": "7479707e65f796c0ed2f1de591212ded"
  },
  {
    "url": "assets/js/114.b9d7fb2a.js",
    "revision": "d56ac8afad9953ec5db33fa1e3865319"
  },
  {
    "url": "assets/js/115.430185be.js",
    "revision": "6ee82109612d68c6c2f453255570b79d"
  },
  {
    "url": "assets/js/116.89bb24a5.js",
    "revision": "b8aca1cbf45ea7ccbb7c9d08f3b8c81e"
  },
  {
    "url": "assets/js/117.58a7ae95.js",
    "revision": "9baed6ff968b3c2ddcdb56b108b70929"
  },
  {
    "url": "assets/js/118.421ab0ed.js",
    "revision": "a886e0bb17bc8aa08e7d482efd3cd714"
  },
  {
    "url": "assets/js/119.1dca23e9.js",
    "revision": "a86bcd231c8da0862d6885dcc3e7b7ca"
  },
  {
    "url": "assets/js/12.0574a7e9.js",
    "revision": "ce48a7137a8b35ac83d4f2b885f93043"
  },
  {
    "url": "assets/js/120.84289765.js",
    "revision": "a73acc7fdd1940530565ff53e08dd9d1"
  },
  {
    "url": "assets/js/121.58ebfde6.js",
    "revision": "ea948aad3c4369b1a12ed00198aacd26"
  },
  {
    "url": "assets/js/122.7fe6d8d3.js",
    "revision": "3b53e3343910b450d72c86a2b69dde3e"
  },
  {
    "url": "assets/js/123.5506a428.js",
    "revision": "008c6d5e6c2301c184159db0fdd76865"
  },
  {
    "url": "assets/js/124.cf8b566f.js",
    "revision": "32cf5138e5ddc3169013f59ac3de9126"
  },
  {
    "url": "assets/js/125.d4d02501.js",
    "revision": "32b666bed849d1591dde92a100da7820"
  },
  {
    "url": "assets/js/126.a33a6b5a.js",
    "revision": "6c0ec215a36971789ec0658d858f39da"
  },
  {
    "url": "assets/js/127.e65a2e98.js",
    "revision": "28699c200f44d6812ba77881a5687301"
  },
  {
    "url": "assets/js/128.cb84ec92.js",
    "revision": "637fae11890d3aad1224be390b22d9d5"
  },
  {
    "url": "assets/js/129.b9f3edd8.js",
    "revision": "7f68eb6bffbaf5fbb63ade96261194aa"
  },
  {
    "url": "assets/js/13.382882bb.js",
    "revision": "8d50f51edd33997d2e7c3e488c0401fa"
  },
  {
    "url": "assets/js/130.a0e26ef2.js",
    "revision": "5cfd6c5927f39cb1fbfda469302c6566"
  },
  {
    "url": "assets/js/131.98e4f72b.js",
    "revision": "fd73072242dbaebccafb6d862c87a861"
  },
  {
    "url": "assets/js/132.e9b5d1d3.js",
    "revision": "6c9d77467b1164387f6f21052b49c2c2"
  },
  {
    "url": "assets/js/133.5c8eadf8.js",
    "revision": "21dbc6a22462b48f131402c445400d7d"
  },
  {
    "url": "assets/js/134.06730033.js",
    "revision": "0a968aca99b2dcd9c015d200a4c4ae7e"
  },
  {
    "url": "assets/js/135.aebe46ff.js",
    "revision": "f52e414b765fd556f527f6c5e2193237"
  },
  {
    "url": "assets/js/136.09f0e889.js",
    "revision": "243d7a10632da945e9edcd6851b24fd8"
  },
  {
    "url": "assets/js/137.86693c70.js",
    "revision": "a7bf06498be2316ea4efe7bf1a5a85ed"
  },
  {
    "url": "assets/js/138.8240a367.js",
    "revision": "96e312abea212fc63944e29f7ca028c6"
  },
  {
    "url": "assets/js/139.40fc6590.js",
    "revision": "2085eb13a83de04784480cd816410408"
  },
  {
    "url": "assets/js/14.38b7ac68.js",
    "revision": "f6d8f21339fe433b61156bbb4c0c04fd"
  },
  {
    "url": "assets/js/140.af0fd19c.js",
    "revision": "d2ce098bad974aabb7f1e040e7f30df7"
  },
  {
    "url": "assets/js/141.34729193.js",
    "revision": "1f41f5e7bb32600541e2ecd691ee7eb8"
  },
  {
    "url": "assets/js/142.68832088.js",
    "revision": "8bb3e3d00eeecae1a79c2f9fa1caea16"
  },
  {
    "url": "assets/js/143.3d22a2b6.js",
    "revision": "5b85907043974529a14c8e2d37148514"
  },
  {
    "url": "assets/js/144.31399529.js",
    "revision": "066680452a0ce7bb16793ccab2f474b6"
  },
  {
    "url": "assets/js/145.0f67fc3a.js",
    "revision": "9f93bf8549f4d5548a7f973ec8705116"
  },
  {
    "url": "assets/js/146.55650df8.js",
    "revision": "aa8c67ed35ade7f360fdc645948139f6"
  },
  {
    "url": "assets/js/147.c1f4ac79.js",
    "revision": "6af78cfed7cd63ba24c4b959b88d5074"
  },
  {
    "url": "assets/js/148.e511d0a0.js",
    "revision": "af28e5bb9e9cf3f2b1880d6965bcafb5"
  },
  {
    "url": "assets/js/149.d3d7f871.js",
    "revision": "08896008934c8eb780cb4ae57d769df7"
  },
  {
    "url": "assets/js/15.10fc4edb.js",
    "revision": "14d139a2bb488ade6dd12c22949cb4bc"
  },
  {
    "url": "assets/js/150.f8b420fb.js",
    "revision": "6fdce8c706b585a9b334b739794d5630"
  },
  {
    "url": "assets/js/151.32b74e08.js",
    "revision": "3a4d1408aaf86a55ed41ef39ed05ee35"
  },
  {
    "url": "assets/js/152.9f008484.js",
    "revision": "58efa6d9a27879b7f762ba3c5fb6b40e"
  },
  {
    "url": "assets/js/153.3dc59f21.js",
    "revision": "4d5d72c7004b1b1260756294dc59b3fe"
  },
  {
    "url": "assets/js/154.0310c531.js",
    "revision": "cad016384e564c0c730690e8f5b5d6fd"
  },
  {
    "url": "assets/js/155.3adc1d83.js",
    "revision": "c05ac2f46edca497d60a57b8a82ad407"
  },
  {
    "url": "assets/js/156.f8f94839.js",
    "revision": "35c6499992c71e549f261089f8bf579c"
  },
  {
    "url": "assets/js/157.3c9f96f4.js",
    "revision": "bd7944fe94432a224055045269b2491f"
  },
  {
    "url": "assets/js/158.183d9a05.js",
    "revision": "fa69430134ce69040db3e56fc98c25a8"
  },
  {
    "url": "assets/js/159.a0bbfcd3.js",
    "revision": "9e4e2111605d37443d792a17de17397a"
  },
  {
    "url": "assets/js/16.95c36814.js",
    "revision": "610646dbcc509fedd9bab41b12df18e8"
  },
  {
    "url": "assets/js/160.68eadfe8.js",
    "revision": "dd5862526a9004f501427cdb6bc5a374"
  },
  {
    "url": "assets/js/161.97877699.js",
    "revision": "b24b0e2946da0521778a3ee8baf0f595"
  },
  {
    "url": "assets/js/162.c3d5615d.js",
    "revision": "f3503a0a07cd4de5ed1d368a812af74d"
  },
  {
    "url": "assets/js/163.8e540e39.js",
    "revision": "be67701552bf22cb64ce8cf7eff4fcd5"
  },
  {
    "url": "assets/js/164.af5b4ec0.js",
    "revision": "0e19bbe2719268508aef475530b320d2"
  },
  {
    "url": "assets/js/165.97397c37.js",
    "revision": "1f00b7ecc97cce712f4e47b52cc4e2e8"
  },
  {
    "url": "assets/js/166.398f5733.js",
    "revision": "a38dcc27580dbb7e34e5fdb38c18044e"
  },
  {
    "url": "assets/js/167.7c98af61.js",
    "revision": "a7bfbc74f15796e50271dad57d75feed"
  },
  {
    "url": "assets/js/168.edce5428.js",
    "revision": "c73717981d342656940f32474c8f2558"
  },
  {
    "url": "assets/js/169.e318d28e.js",
    "revision": "2446e11929832e7fef48646561a3c586"
  },
  {
    "url": "assets/js/17.d84fa1a6.js",
    "revision": "eab6df9791691a4a615e4eb24f937a49"
  },
  {
    "url": "assets/js/170.30164aea.js",
    "revision": "f54622d490b68ef358b09ac0d5007173"
  },
  {
    "url": "assets/js/171.a635a40e.js",
    "revision": "7d02e3d23c64c5ef420758bcc19ba78c"
  },
  {
    "url": "assets/js/172.ebceb8f5.js",
    "revision": "31e587b8cc2f18524a376f87c017a30d"
  },
  {
    "url": "assets/js/173.791da077.js",
    "revision": "d4ff6ac29ba2af6bbeb283e85db57b87"
  },
  {
    "url": "assets/js/174.1a1463cd.js",
    "revision": "620227cdda5ba58a28cb43622223efdb"
  },
  {
    "url": "assets/js/175.34859d99.js",
    "revision": "06c5ddc2fba88efe65fc4086a4a2c8a5"
  },
  {
    "url": "assets/js/176.0b3938b2.js",
    "revision": "e277e062c1c27870c80039095baf5fe8"
  },
  {
    "url": "assets/js/177.173100a5.js",
    "revision": "34cf3a62923141d49f5ec55fd139c3ec"
  },
  {
    "url": "assets/js/178.455b238c.js",
    "revision": "67cd2fe8516998b599e5c671fa8d4313"
  },
  {
    "url": "assets/js/179.079f11c6.js",
    "revision": "129f610af0858886154fad61308e9701"
  },
  {
    "url": "assets/js/18.109a81b2.js",
    "revision": "042f68f526e82d2df155e0430b9e24b4"
  },
  {
    "url": "assets/js/180.123e5583.js",
    "revision": "d49d3b7201388b50be9f2af20dcfcab6"
  },
  {
    "url": "assets/js/181.84b86aee.js",
    "revision": "45000e14b4cdcc01d85fee82b952787d"
  },
  {
    "url": "assets/js/182.094b1d42.js",
    "revision": "3958dd231f457828c74d1933cd59d1e5"
  },
  {
    "url": "assets/js/183.f693d932.js",
    "revision": "2f257117cb3f8f371a5c6b239abc64aa"
  },
  {
    "url": "assets/js/184.6330ae7a.js",
    "revision": "6df5c40094e49837db54e115da0bb106"
  },
  {
    "url": "assets/js/185.a7a7b07c.js",
    "revision": "23fc3ef33e546e169fb08c54abdb88ba"
  },
  {
    "url": "assets/js/186.07e0a42c.js",
    "revision": "13b414c703e483648235ba7d94742ec3"
  },
  {
    "url": "assets/js/187.c354d8cd.js",
    "revision": "e7409df611d151ca2cb4dc719d27314a"
  },
  {
    "url": "assets/js/188.966a9360.js",
    "revision": "bb3d076939ebbe90b1857833273f1e44"
  },
  {
    "url": "assets/js/189.31bd4460.js",
    "revision": "eff1818cdc4f8d8318d733138024a3a4"
  },
  {
    "url": "assets/js/19.91b512dc.js",
    "revision": "7d8a47dce962b4d0702967a844bba59e"
  },
  {
    "url": "assets/js/190.c5b2a99c.js",
    "revision": "45f8495ad9920ab46caad7acb8356fb7"
  },
  {
    "url": "assets/js/191.34ab9f1b.js",
    "revision": "a7381743cf8aa12d7840382f88cb7364"
  },
  {
    "url": "assets/js/192.53ab5a0d.js",
    "revision": "52f446486888bc214ee7825aad5bd804"
  },
  {
    "url": "assets/js/193.5fe2eec9.js",
    "revision": "4c682114d14c73176c106a64fb9f43fc"
  },
  {
    "url": "assets/js/194.81bdbf3a.js",
    "revision": "063eb2685f258ae281ec7c715d248058"
  },
  {
    "url": "assets/js/195.f51a9f62.js",
    "revision": "1d8e1705fe9e2edb2ec2e738a7a75ebe"
  },
  {
    "url": "assets/js/196.c6b396f3.js",
    "revision": "2d7799ce457fc55e3b608581c6c4dcde"
  },
  {
    "url": "assets/js/197.b7b1e2cd.js",
    "revision": "36266ae9a072401101958162c3e941bb"
  },
  {
    "url": "assets/js/198.d2bdeb9e.js",
    "revision": "d3972aa3d82f6837b7f0bb975f6f99b7"
  },
  {
    "url": "assets/js/199.ef41536c.js",
    "revision": "d9c503719a1c2db1c4190340d0df537f"
  },
  {
    "url": "assets/js/2.bf8390db.js",
    "revision": "aa31f48050a733b4637d2fbcd96476a6"
  },
  {
    "url": "assets/js/20.80a628eb.js",
    "revision": "20932ad965bdcd6a5615ba4748a06b89"
  },
  {
    "url": "assets/js/200.be8b5e47.js",
    "revision": "df73408625f03de6069ee8786e2ad138"
  },
  {
    "url": "assets/js/201.1aff0c4f.js",
    "revision": "d4b46e967bb04f6a62d632b9b6e342ae"
  },
  {
    "url": "assets/js/202.04f6d935.js",
    "revision": "cdb15b80ad44e811852e09069712fa9a"
  },
  {
    "url": "assets/js/203.b62f2869.js",
    "revision": "83bd055a4abf5245fb4440c32dcf08be"
  },
  {
    "url": "assets/js/204.7b101a9c.js",
    "revision": "8aea7721ceff1f846c45c3bac5f472a4"
  },
  {
    "url": "assets/js/205.ad35aff3.js",
    "revision": "b34ce24749f2ecb1285acc3e9665cf60"
  },
  {
    "url": "assets/js/206.fe0bc7c7.js",
    "revision": "37080640ca0c554db3d7d88bd11f9dd8"
  },
  {
    "url": "assets/js/207.8feb9c66.js",
    "revision": "a57b33cd15cd29e3f77bdf43e7800abc"
  },
  {
    "url": "assets/js/208.3d7a18a2.js",
    "revision": "f7288097cd98dc547befa927206c0ae7"
  },
  {
    "url": "assets/js/209.048894cd.js",
    "revision": "1c084892a5673e59e04fa4f4fb65466f"
  },
  {
    "url": "assets/js/21.92d7c186.js",
    "revision": "f0c2ef2bf29d50bd6479f5047e2a619a"
  },
  {
    "url": "assets/js/210.d52e3b61.js",
    "revision": "fe29cde16119a3cb38dfebf1e338ab72"
  },
  {
    "url": "assets/js/211.5027fc18.js",
    "revision": "dcede533099b24b1779a5871da73c313"
  },
  {
    "url": "assets/js/212.b08618c0.js",
    "revision": "b3f8c7d23e104a2c2f77ec67d6d5939f"
  },
  {
    "url": "assets/js/213.9e619437.js",
    "revision": "8c9b352caab9a68206beff539bcaeb78"
  },
  {
    "url": "assets/js/214.fee540eb.js",
    "revision": "6205923eed445f53b83a693192f93451"
  },
  {
    "url": "assets/js/215.47f03448.js",
    "revision": "895139320cb639a7501e45dd517d4ecb"
  },
  {
    "url": "assets/js/216.bb755866.js",
    "revision": "20b0749a24098224a8c95f2d8cc0f8d1"
  },
  {
    "url": "assets/js/217.9c715260.js",
    "revision": "c4a3b25b24e0c46b4c5432321219f755"
  },
  {
    "url": "assets/js/218.afe54f6d.js",
    "revision": "25d0e5c789f20a693231c5057c1e6a5d"
  },
  {
    "url": "assets/js/219.d4f9e61b.js",
    "revision": "3d84758b9a10c99c21fbafc6c9e049e5"
  },
  {
    "url": "assets/js/22.ee76a180.js",
    "revision": "ea573865805e08fe0539b1391849f696"
  },
  {
    "url": "assets/js/220.caf5410f.js",
    "revision": "9d54921684ecfe6a31339b421fb2fe57"
  },
  {
    "url": "assets/js/221.9b688aeb.js",
    "revision": "8c0e74bf3021964e7159006ecbf75271"
  },
  {
    "url": "assets/js/222.994dd3dc.js",
    "revision": "7fdde795010613dbc17d29587379cfea"
  },
  {
    "url": "assets/js/223.7f19e8ef.js",
    "revision": "3ec138e9bc67117e70eecd400053755d"
  },
  {
    "url": "assets/js/224.a18d9964.js",
    "revision": "abc2f392a0d6baff6dc8eff242de389b"
  },
  {
    "url": "assets/js/225.7f5d43a3.js",
    "revision": "02cee244ae918efe6c53226aca716dc2"
  },
  {
    "url": "assets/js/226.507b9e64.js",
    "revision": "87f9dc499eb475f147c0bbe492d4df0e"
  },
  {
    "url": "assets/js/227.3e67ca16.js",
    "revision": "12619afd0513f102b1c684914e36e1b2"
  },
  {
    "url": "assets/js/228.774a57c2.js",
    "revision": "b6fc8cb8bf56cdc00d095aaaad653dfe"
  },
  {
    "url": "assets/js/229.a3ffe5fe.js",
    "revision": "fa27641ada62713eab0a409355303ed5"
  },
  {
    "url": "assets/js/23.8cf296d0.js",
    "revision": "fe68ee2cc14e255e459da35ca2d9c2e4"
  },
  {
    "url": "assets/js/230.5a4bd0d5.js",
    "revision": "c707b230020611d52651f81ea776fb1c"
  },
  {
    "url": "assets/js/231.ce39ab58.js",
    "revision": "ec58a08bdec917075ea4360d48d6562e"
  },
  {
    "url": "assets/js/232.c822da87.js",
    "revision": "a5840d5d78d714bcccf85f7aa8274ede"
  },
  {
    "url": "assets/js/233.8f332173.js",
    "revision": "ca6c63723a686292ff8bcdf56de525b6"
  },
  {
    "url": "assets/js/234.06372b36.js",
    "revision": "dce1e93165cf4c7eecb7e468f5099882"
  },
  {
    "url": "assets/js/235.bfdebef4.js",
    "revision": "1240410ada05be505cdf491ea80bfe15"
  },
  {
    "url": "assets/js/236.2050e903.js",
    "revision": "28a95e4eb6a1e16464254ceab6e0ff4d"
  },
  {
    "url": "assets/js/237.22f19147.js",
    "revision": "74c6a64b3b75d90f937b247a04daab6f"
  },
  {
    "url": "assets/js/238.3e71fda5.js",
    "revision": "80f29b73f0d9e132a7896a4ebfe92483"
  },
  {
    "url": "assets/js/239.d93dca4d.js",
    "revision": "85c4016703559f2e5d345e861f1d84af"
  },
  {
    "url": "assets/js/24.05411f6f.js",
    "revision": "ea842a9946300cd655ac358a87bfed9c"
  },
  {
    "url": "assets/js/240.1d879c7c.js",
    "revision": "01ec3e779e023f29f9606e3dca9b873b"
  },
  {
    "url": "assets/js/241.04c1cf66.js",
    "revision": "ff457fa7fa04f4ec2bfd4757f93d2aa8"
  },
  {
    "url": "assets/js/242.048d261c.js",
    "revision": "eb696401923cb142ef209ea9e02f9124"
  },
  {
    "url": "assets/js/243.bdd38453.js",
    "revision": "81d43feb0a1cc634bc90c94715714aeb"
  },
  {
    "url": "assets/js/244.22e6d82a.js",
    "revision": "85c4982c11ace05ee6d722f447171603"
  },
  {
    "url": "assets/js/245.e883c3a5.js",
    "revision": "1465cf7b92897cd98aceb5150d85d88b"
  },
  {
    "url": "assets/js/246.332c1d60.js",
    "revision": "e9a4a7eb6884d1acfc5bb968e7fc5583"
  },
  {
    "url": "assets/js/247.c2137c70.js",
    "revision": "d78476818f6842a26358833a12af06eb"
  },
  {
    "url": "assets/js/248.03b9f5b9.js",
    "revision": "06eb6d9f2d1b3f714a08c2a9673005e2"
  },
  {
    "url": "assets/js/249.926af827.js",
    "revision": "c904415aa5d3ce96f5c94cc4ea6678e7"
  },
  {
    "url": "assets/js/25.9b257534.js",
    "revision": "fb603193650216fe534bb85fd13f1ad9"
  },
  {
    "url": "assets/js/250.b37be933.js",
    "revision": "7d02a63322f10015aacbcd451fca0dee"
  },
  {
    "url": "assets/js/251.be2931c5.js",
    "revision": "5b3ce94523d2c871a52f1f6a63e5ac92"
  },
  {
    "url": "assets/js/252.b38484db.js",
    "revision": "e6b57f6096410e882a1bcc25bb02c65e"
  },
  {
    "url": "assets/js/253.133555c8.js",
    "revision": "6f117739ab2dbc65e8fc6ee0b056e082"
  },
  {
    "url": "assets/js/254.eb792a77.js",
    "revision": "a861208b2a4433ceeec93be742d60721"
  },
  {
    "url": "assets/js/255.585cb7c7.js",
    "revision": "54b08fd83617c623238c7b327ddb924f"
  },
  {
    "url": "assets/js/256.310bd213.js",
    "revision": "0fdc402dbdcf1e96289bf0ed2a09d4c0"
  },
  {
    "url": "assets/js/257.1858ae9a.js",
    "revision": "250236f7389afa294021f2797b8748c4"
  },
  {
    "url": "assets/js/258.a3b8b606.js",
    "revision": "f1a0854c96ead4f46158db43429f7ab5"
  },
  {
    "url": "assets/js/259.7f2ff571.js",
    "revision": "f480a60cf618fa11f8163ee8568a2b71"
  },
  {
    "url": "assets/js/26.29d895ba.js",
    "revision": "2bbffd7d92bf2daa18fd35d375dff426"
  },
  {
    "url": "assets/js/260.142754e8.js",
    "revision": "f9b54e98461a4e89874948be4c51556b"
  },
  {
    "url": "assets/js/261.5b2485f5.js",
    "revision": "044ec8b0ad072d49632d2e0c7149a2b6"
  },
  {
    "url": "assets/js/262.fd0532fa.js",
    "revision": "049b1bc12c2e80eb27b3d0794ed4522b"
  },
  {
    "url": "assets/js/263.cb25c9fe.js",
    "revision": "cfb9ea12f26623f914c56eb96456a400"
  },
  {
    "url": "assets/js/264.ecaab35b.js",
    "revision": "2a6a8c9b9f6ea036e9181c615e11f521"
  },
  {
    "url": "assets/js/265.cd5b6407.js",
    "revision": "7225399a8c1a64ddfaa1456829a7452a"
  },
  {
    "url": "assets/js/266.cc4ffc74.js",
    "revision": "cd7ec03f2de4a661eea3e6332698824f"
  },
  {
    "url": "assets/js/267.1f808838.js",
    "revision": "4a3d531b93ee19e1ea86c98807ff35ad"
  },
  {
    "url": "assets/js/268.c9be7d14.js",
    "revision": "7bff22ddf5a262898dd63d979b50170a"
  },
  {
    "url": "assets/js/269.f7f35f75.js",
    "revision": "5b052c56c745f0b8f453491c0998d699"
  },
  {
    "url": "assets/js/27.2e06ca21.js",
    "revision": "0cd30b0e6f8c24a24cacb9f7695facbe"
  },
  {
    "url": "assets/js/270.697d24f5.js",
    "revision": "9e8e8746461118ed4ddb736ad7bd01c3"
  },
  {
    "url": "assets/js/271.453f7d32.js",
    "revision": "d13ed830fde59cf8ba175a216fc301d7"
  },
  {
    "url": "assets/js/272.054cff7c.js",
    "revision": "d0a2af0a5f58bd124c9667bca3f44d04"
  },
  {
    "url": "assets/js/273.faea63e5.js",
    "revision": "fa65c3a3f578bec480f2873c71ddad8c"
  },
  {
    "url": "assets/js/274.c1e5f0ca.js",
    "revision": "d53c145abed3453c2d216ac91b1cc7b4"
  },
  {
    "url": "assets/js/275.3831b507.js",
    "revision": "104216ff58fbf58c92bac8974aaa1499"
  },
  {
    "url": "assets/js/276.c9d20789.js",
    "revision": "440abe1bbd8276e00d8e6abf5dad3d74"
  },
  {
    "url": "assets/js/277.f90424ce.js",
    "revision": "c6261ec52fb234bdffa4512eef499509"
  },
  {
    "url": "assets/js/278.f147bf0c.js",
    "revision": "e87c3e92d65880b53ddc1d7705f70e5a"
  },
  {
    "url": "assets/js/279.beaedf61.js",
    "revision": "2ec8d689aa03d2420fa26d1b6f9db20b"
  },
  {
    "url": "assets/js/28.7f8eeb3a.js",
    "revision": "7e224ad033340754b15d6aa11bfb8de8"
  },
  {
    "url": "assets/js/280.371c1c26.js",
    "revision": "2b20d4269413d23693eac73e412cea28"
  },
  {
    "url": "assets/js/281.dc34e8af.js",
    "revision": "cf24804460c2a464068cccdccd70b0d8"
  },
  {
    "url": "assets/js/282.4fe9e2c6.js",
    "revision": "5ec9f2a9c8e4eef25a5c03a625931c45"
  },
  {
    "url": "assets/js/283.30cfdf41.js",
    "revision": "7cd9b3425bef0852fe258a01f283b2cd"
  },
  {
    "url": "assets/js/284.25c9bc33.js",
    "revision": "81c4b6bd353dd1888481398e660e95f0"
  },
  {
    "url": "assets/js/285.d71f79d8.js",
    "revision": "587d336dd5207916c0f8454539cc1606"
  },
  {
    "url": "assets/js/286.ee1d96be.js",
    "revision": "713268c2c9819bde5f5f97f7f1626bef"
  },
  {
    "url": "assets/js/287.8a089033.js",
    "revision": "bb2097914417205411ffcb9133a7438c"
  },
  {
    "url": "assets/js/288.0ffe77d2.js",
    "revision": "b54ff5d75efc7b23b2c2f477477f7e03"
  },
  {
    "url": "assets/js/289.3caad98e.js",
    "revision": "66a35e6a04f3c155872fad59fc1e8b48"
  },
  {
    "url": "assets/js/29.edf78f44.js",
    "revision": "ba00bca8ab57e88eba20fb5c13fdce7f"
  },
  {
    "url": "assets/js/290.17cbd43c.js",
    "revision": "603ccfa43371c818fa9ef4348cfb117a"
  },
  {
    "url": "assets/js/291.c62dd68a.js",
    "revision": "36b9ea5df7d4fe41b669dcd173723860"
  },
  {
    "url": "assets/js/292.a6144061.js",
    "revision": "ebf5cb8ad7a7bd4b227fc40a22ad00a1"
  },
  {
    "url": "assets/js/293.30d891c6.js",
    "revision": "d239c9f25883b1aef8bbcce888a8e798"
  },
  {
    "url": "assets/js/294.80d9f911.js",
    "revision": "359443d48409e3fc6a5d3d7434bb40ba"
  },
  {
    "url": "assets/js/295.cf02891f.js",
    "revision": "a614f271ac6987675a6ec0f4183068fe"
  },
  {
    "url": "assets/js/296.d8fd8d81.js",
    "revision": "81fcb01fec24bda78bc23d8e9c12d612"
  },
  {
    "url": "assets/js/297.3ecbfc2a.js",
    "revision": "0c53345767f918a8beb11494a6b1cb66"
  },
  {
    "url": "assets/js/298.25dc1430.js",
    "revision": "0ebab07022dbd16dba35d36f91aa3532"
  },
  {
    "url": "assets/js/299.e4861c5f.js",
    "revision": "2b1089769badb80247959d7cc6d14252"
  },
  {
    "url": "assets/js/3.8bec6a08.js",
    "revision": "d1c7e602684af0f6026e6332d9fea5f3"
  },
  {
    "url": "assets/js/30.f25d315f.js",
    "revision": "96e8e28aa5e058ebe4010830ac63c81e"
  },
  {
    "url": "assets/js/300.cad60019.js",
    "revision": "0596f93a7a1cb7992f53fa42c9d7135f"
  },
  {
    "url": "assets/js/301.95bfe987.js",
    "revision": "c56f4d95a6c024e916d8abb95f861104"
  },
  {
    "url": "assets/js/302.e0e94c49.js",
    "revision": "7157752d3e49cbc9484ebdf25ca699f9"
  },
  {
    "url": "assets/js/303.e3001737.js",
    "revision": "02177fafabc7c131d66fb9606721c3eb"
  },
  {
    "url": "assets/js/304.6c88a487.js",
    "revision": "9aa69685ff7cc0f5958e7ffa52029bed"
  },
  {
    "url": "assets/js/305.9df66429.js",
    "revision": "157924f540ccf39315ee1a108586f020"
  },
  {
    "url": "assets/js/306.ce5d7cb0.js",
    "revision": "79fe5df51b02d11c6f5fc4452e36d051"
  },
  {
    "url": "assets/js/307.e81a6a28.js",
    "revision": "4ba34fe65366680b2beb4f19d76b89cf"
  },
  {
    "url": "assets/js/308.2281b9af.js",
    "revision": "9c359b720161fdd8408c402c642f31bc"
  },
  {
    "url": "assets/js/309.3fb1ef83.js",
    "revision": "28881a99899905bd38c8c76376fcd3ea"
  },
  {
    "url": "assets/js/31.553719d0.js",
    "revision": "bcd449ff284e4663eab211b96b7267f7"
  },
  {
    "url": "assets/js/310.8a9e1405.js",
    "revision": "103de7b6a70e432a93da992f1a196f8f"
  },
  {
    "url": "assets/js/311.072e23e4.js",
    "revision": "08521e79c5f8e0dec45c5d9a6e286b4e"
  },
  {
    "url": "assets/js/312.158f9276.js",
    "revision": "79490072c1a1f33021ed5693cc1dbc87"
  },
  {
    "url": "assets/js/313.8166a39a.js",
    "revision": "710da97eb894da06391fef3b3ae4f62e"
  },
  {
    "url": "assets/js/314.15a98f36.js",
    "revision": "24ea28cdc321eb1abba91fb61a8547c7"
  },
  {
    "url": "assets/js/315.89e33cf4.js",
    "revision": "3c60a6dcf51fbead3140e681ef299a9a"
  },
  {
    "url": "assets/js/316.6e16a7fa.js",
    "revision": "25a5b15b063ab8a41b55b3b9a67c6e2e"
  },
  {
    "url": "assets/js/317.406a4097.js",
    "revision": "a30cc7319dfb50c89a5e3de2defbd60f"
  },
  {
    "url": "assets/js/318.1bc7f360.js",
    "revision": "be49fbc84a4fc4e5a0a9930f761aeba2"
  },
  {
    "url": "assets/js/319.5f9c0dc2.js",
    "revision": "d87237b7e324989841ea3c2b3657e8f1"
  },
  {
    "url": "assets/js/32.c8fb8877.js",
    "revision": "58ac55713556a50c79fc9682b08996aa"
  },
  {
    "url": "assets/js/320.7ee0a4e5.js",
    "revision": "82f2cff471722e187fa8f7931f51092e"
  },
  {
    "url": "assets/js/321.05e0ad28.js",
    "revision": "1e945042934367b0d3456798dc4090a1"
  },
  {
    "url": "assets/js/322.ce00eb6b.js",
    "revision": "7304327a391a4bcf62a31609c0ed1ef6"
  },
  {
    "url": "assets/js/323.ee3b8e5d.js",
    "revision": "63828839c1c0d9e01c3430b6e08a9462"
  },
  {
    "url": "assets/js/324.00443f59.js",
    "revision": "10a4e96a0131670e1ae6959e10c278aa"
  },
  {
    "url": "assets/js/325.009df893.js",
    "revision": "6771ed1ce85358e76dcce08c47bde3f2"
  },
  {
    "url": "assets/js/326.3bd69172.js",
    "revision": "23b08cbc6d9c0a21850e16d70672a585"
  },
  {
    "url": "assets/js/327.966c3172.js",
    "revision": "c428b6347d023c5864e8d9548dab9f95"
  },
  {
    "url": "assets/js/328.4200057f.js",
    "revision": "dcea0efa320cabd2493c4d3bcb7669ac"
  },
  {
    "url": "assets/js/329.5f7f31f9.js",
    "revision": "72cf1cf81dd615c93fea31b8333a2379"
  },
  {
    "url": "assets/js/33.0bfbd383.js",
    "revision": "9dbfacc331f6f08235f4dd4a32c3c971"
  },
  {
    "url": "assets/js/330.4cecbcf1.js",
    "revision": "26f146c4b4c6c2dab7a39ebdb56852d5"
  },
  {
    "url": "assets/js/331.ae8d86b7.js",
    "revision": "3d36345f726c020b6e9bcb7117b35fc6"
  },
  {
    "url": "assets/js/332.ad28d76d.js",
    "revision": "2fb645492a8bcc7d15f65ab49becf5b6"
  },
  {
    "url": "assets/js/333.88b8681a.js",
    "revision": "c2e4c277d71ba0bb8fdbb6c4a2786bc0"
  },
  {
    "url": "assets/js/334.b2e64ce4.js",
    "revision": "5a4ccb48fb6910e72190ac119e471d65"
  },
  {
    "url": "assets/js/335.b54640a9.js",
    "revision": "1a3f461970653d46ffb552666fb40fb8"
  },
  {
    "url": "assets/js/336.12655bfe.js",
    "revision": "ac4e3a5ec831dab96e58697782986c95"
  },
  {
    "url": "assets/js/337.270b9b90.js",
    "revision": "30779b32bd006f462df3bed6115f33e3"
  },
  {
    "url": "assets/js/338.dbe75a1a.js",
    "revision": "181d9b82d8abe15517dae16fe6cf79fd"
  },
  {
    "url": "assets/js/339.9b785902.js",
    "revision": "1277f3a892515f05052aaa3e547e296f"
  },
  {
    "url": "assets/js/34.b5d7448b.js",
    "revision": "d3ea60390af7118027a0f45cfe7b3560"
  },
  {
    "url": "assets/js/340.34486fa3.js",
    "revision": "f742e41fdd6d1165ca9e03c2bfaa19ba"
  },
  {
    "url": "assets/js/341.7de8f75d.js",
    "revision": "818a69c1673c4ba9e7e1cc1bc0e8eae7"
  },
  {
    "url": "assets/js/342.7ad929d1.js",
    "revision": "442a8ba8837fe5df3bffdccb047816b0"
  },
  {
    "url": "assets/js/343.55b417fb.js",
    "revision": "47db2e0b2383d7077e0a15a60abfd95a"
  },
  {
    "url": "assets/js/344.a9fc9785.js",
    "revision": "8d1868a173bdcd0879767b6e76061716"
  },
  {
    "url": "assets/js/345.f75b3cd6.js",
    "revision": "7ed469ecc311e46031355bab266c47f7"
  },
  {
    "url": "assets/js/346.d048df5f.js",
    "revision": "9b4bb0ec55406d7002e23623be377e60"
  },
  {
    "url": "assets/js/347.416502ae.js",
    "revision": "b44931ec40c7286d8646eb92119f129b"
  },
  {
    "url": "assets/js/348.7057a08d.js",
    "revision": "85cea6dcc10d82335d7ef10c4a125b4b"
  },
  {
    "url": "assets/js/349.48cb0869.js",
    "revision": "4b8bcf1dfad573d8fe611f352e65576c"
  },
  {
    "url": "assets/js/35.7a04ab0f.js",
    "revision": "af8a3cb131a139fd5cab8b70010a5f9e"
  },
  {
    "url": "assets/js/350.37295665.js",
    "revision": "f977bcf6a86f49e1c995791ab4135121"
  },
  {
    "url": "assets/js/351.b7fda9ad.js",
    "revision": "c635d2537ffa6bc333420e6fd747d75b"
  },
  {
    "url": "assets/js/352.bfcb1a2a.js",
    "revision": "bcb87f6ddeda8d182472322143381eb0"
  },
  {
    "url": "assets/js/353.a8a757e6.js",
    "revision": "78b65dd93b497e64592cb400f81e63a8"
  },
  {
    "url": "assets/js/354.cc6f5775.js",
    "revision": "1f8dd4d788271823edf9204d036623a3"
  },
  {
    "url": "assets/js/355.2d57c9aa.js",
    "revision": "103b9c85be4670fcc1d47132a6779fd4"
  },
  {
    "url": "assets/js/356.150675d3.js",
    "revision": "b108b6e30bf343085b2f3171b56926ad"
  },
  {
    "url": "assets/js/357.55aff025.js",
    "revision": "617a11e59a41f0e776983510e5ffe046"
  },
  {
    "url": "assets/js/358.95a473bc.js",
    "revision": "9588ea07767e8e03769474b211634fb6"
  },
  {
    "url": "assets/js/359.e67674c9.js",
    "revision": "48455de8f863d75cb8eb086fc9d32285"
  },
  {
    "url": "assets/js/36.564d89ac.js",
    "revision": "83911a1a7a01fe41705173a2efdd3b34"
  },
  {
    "url": "assets/js/360.f590abae.js",
    "revision": "3b05a595dd12901f896ad93ff0f13393"
  },
  {
    "url": "assets/js/37.db10a3b6.js",
    "revision": "539e00ac0c57416f14f61565e6361482"
  },
  {
    "url": "assets/js/38.64172d89.js",
    "revision": "3b9f4c17e36e47c12407144cc30c9cbf"
  },
  {
    "url": "assets/js/39.0de7539c.js",
    "revision": "6d983ba7bb0c91dc22ff10806e6cad7f"
  },
  {
    "url": "assets/js/4.203557c5.js",
    "revision": "ed187b232bb2956c98a6046d695cbee4"
  },
  {
    "url": "assets/js/40.9812fb31.js",
    "revision": "8f69630673a1d1ca67a1e199776bf801"
  },
  {
    "url": "assets/js/41.60e5a0bf.js",
    "revision": "038649687fde043917aa1876bbbebaf2"
  },
  {
    "url": "assets/js/42.e23d7488.js",
    "revision": "07f4ee90bf886c1260b3b3c67097bda2"
  },
  {
    "url": "assets/js/43.067dba3e.js",
    "revision": "d8ed0e15c672900f7d2b6ba111bea6c0"
  },
  {
    "url": "assets/js/44.6738f652.js",
    "revision": "e079bfa50ad319fed705045b2ee3efa8"
  },
  {
    "url": "assets/js/45.9a0e97d4.js",
    "revision": "1178e838cb4a32c463d497c5eb0d8552"
  },
  {
    "url": "assets/js/46.4c5e9000.js",
    "revision": "898d4258b8f0e5189c14fd0d6e3af8b0"
  },
  {
    "url": "assets/js/47.91ac7bce.js",
    "revision": "832945d0c96d280c848e9b1cdf57354b"
  },
  {
    "url": "assets/js/48.85756f3e.js",
    "revision": "d815b4fdae13cfdcc4643e899cfd3654"
  },
  {
    "url": "assets/js/49.1b037a43.js",
    "revision": "adc3d508f0213e733cecbd1fc400f6e8"
  },
  {
    "url": "assets/js/5.af6a8fb4.js",
    "revision": "ca5543174522a5b38f07f559a1057ef7"
  },
  {
    "url": "assets/js/50.b8290e67.js",
    "revision": "4cbe5994204880a956b64ea3b5407eb7"
  },
  {
    "url": "assets/js/51.820d7727.js",
    "revision": "e402ebe79e8b2749de7bc49432877664"
  },
  {
    "url": "assets/js/52.bc15305f.js",
    "revision": "901b9459dbe0c2dd1cbc65f1e7489801"
  },
  {
    "url": "assets/js/53.6c8f4525.js",
    "revision": "9ed2d27e742bf06760da634641405c57"
  },
  {
    "url": "assets/js/54.c69cdfd1.js",
    "revision": "5b5f4147f2e92b2cdd851e1ddcbfcadf"
  },
  {
    "url": "assets/js/55.b74fce3e.js",
    "revision": "790c1e3ba0aee1993312c8a789ab1989"
  },
  {
    "url": "assets/js/56.1a0da1f7.js",
    "revision": "902a361bb7761312bde925a364006803"
  },
  {
    "url": "assets/js/57.afd326ad.js",
    "revision": "09e86d1ab5aa9fdccc05db9d478d431c"
  },
  {
    "url": "assets/js/58.6d784812.js",
    "revision": "84149be0cc426490885e28b17759f5d2"
  },
  {
    "url": "assets/js/59.b64fa3cd.js",
    "revision": "2bf3d8f466d55840c453cc02e5875e21"
  },
  {
    "url": "assets/js/60.f17cd37f.js",
    "revision": "3d342bc4778d650049ab74d80c9c6211"
  },
  {
    "url": "assets/js/61.b995f0f9.js",
    "revision": "a88da203c0364601ffa879d02be5f659"
  },
  {
    "url": "assets/js/62.dfe5c469.js",
    "revision": "a44a5c2b2c16859389fb18ce45e67789"
  },
  {
    "url": "assets/js/63.03fa8502.js",
    "revision": "3f6809f2a69bc58218abdf6774feef1f"
  },
  {
    "url": "assets/js/64.8443a62b.js",
    "revision": "2d12cc8bc731cf8848861afa4d1bdd48"
  },
  {
    "url": "assets/js/65.f32d56fc.js",
    "revision": "523a321c6178de8d62821ef97fdc11eb"
  },
  {
    "url": "assets/js/66.e1084319.js",
    "revision": "3773c5c498fac7f5ce4ae09c6b1dfe8b"
  },
  {
    "url": "assets/js/67.4df95c2d.js",
    "revision": "d1e1b61a9902a4875f0b9a70b98d94be"
  },
  {
    "url": "assets/js/68.8cc217e9.js",
    "revision": "5b91f528d56c5c731c3a10d041633d1a"
  },
  {
    "url": "assets/js/69.f3c9c86e.js",
    "revision": "873f8cfc7f0efc486342e9a93231202b"
  },
  {
    "url": "assets/js/70.84817184.js",
    "revision": "60aef78c566892b119b7374c4bc9d270"
  },
  {
    "url": "assets/js/71.59584a49.js",
    "revision": "1152249fcecb84543907dc3e5e9c6757"
  },
  {
    "url": "assets/js/72.7995c877.js",
    "revision": "6e9860b013729024eaf484e284cf91b6"
  },
  {
    "url": "assets/js/73.362c3669.js",
    "revision": "ac472122ee03425aeda648a08df9e606"
  },
  {
    "url": "assets/js/74.a33b971a.js",
    "revision": "519acb0b3ae89acb5374862a36a947ed"
  },
  {
    "url": "assets/js/75.60a45873.js",
    "revision": "9224abfd5207b4df7a7dd53e288c54ce"
  },
  {
    "url": "assets/js/76.ec43499a.js",
    "revision": "e31a38c8bafca2991bad7b21960aa1b7"
  },
  {
    "url": "assets/js/77.09c4b100.js",
    "revision": "35b1bf7fe2feee554d7ebe973840d476"
  },
  {
    "url": "assets/js/78.e990f4d1.js",
    "revision": "ca0e216f0182af933cd0be8c1d8e1aaa"
  },
  {
    "url": "assets/js/79.53e480a4.js",
    "revision": "307f252a60113a55d55df9e14092a2f2"
  },
  {
    "url": "assets/js/8.89a45ad9.js",
    "revision": "87e8c07d8bb228f059a4df2aeb42f08a"
  },
  {
    "url": "assets/js/80.85c12e45.js",
    "revision": "f5bfc91753c055b1a8d85875dba8d403"
  },
  {
    "url": "assets/js/81.244e73e5.js",
    "revision": "15fc706da5d133cfffefe44d69a0dab0"
  },
  {
    "url": "assets/js/82.ef9a8c27.js",
    "revision": "aedd9a6847f464571d5246fcdc709f5b"
  },
  {
    "url": "assets/js/83.d37b9d20.js",
    "revision": "e149dd9a60af86f2375d59e854d1cbb5"
  },
  {
    "url": "assets/js/84.d5bb915d.js",
    "revision": "f01858bd6e5bfcaf3105dcd4c6f23cc5"
  },
  {
    "url": "assets/js/85.34763ea9.js",
    "revision": "6bf244b978b570851e1c3fca7441342e"
  },
  {
    "url": "assets/js/86.e470da90.js",
    "revision": "10527e958cd3f2ea0c68929dc7be8fdc"
  },
  {
    "url": "assets/js/87.6a6e4eb0.js",
    "revision": "c49b4ad348822dcb5dfc1c66dfddba3b"
  },
  {
    "url": "assets/js/88.742224ea.js",
    "revision": "6c59f13b46783d90deef650992f35d6b"
  },
  {
    "url": "assets/js/89.e853fe49.js",
    "revision": "1aa8c48e15c71599ab4c4f97696ca2bd"
  },
  {
    "url": "assets/js/9.2ac3c504.js",
    "revision": "95e6e0745f64cfaa3b9f01c166cb4d25"
  },
  {
    "url": "assets/js/90.77cf63bf.js",
    "revision": "b9cdfba1a2dd2028143a535fed4c3102"
  },
  {
    "url": "assets/js/91.7ac35c5a.js",
    "revision": "614002367d9cdb8de49d1b8d42c12311"
  },
  {
    "url": "assets/js/92.94d36bdf.js",
    "revision": "959be99f37b0f863cf9b974f48b087f4"
  },
  {
    "url": "assets/js/93.b98bbcd5.js",
    "revision": "0ec0a6e50ebf44983da4cb3f4ca97fc9"
  },
  {
    "url": "assets/js/94.78573a9a.js",
    "revision": "f403e85dff6fe834ee680b62ce8bd06f"
  },
  {
    "url": "assets/js/95.92958b96.js",
    "revision": "16c19ee80d17c9922ee4cf324b98b833"
  },
  {
    "url": "assets/js/96.1a6dea7f.js",
    "revision": "a209b1877b95605c9713d95f1960d4fa"
  },
  {
    "url": "assets/js/97.fa4f0828.js",
    "revision": "228332ed6bb9bf7c2ed2b3a242f635d9"
  },
  {
    "url": "assets/js/98.7808ed2b.js",
    "revision": "0045c6326987075592b9b9b2014eadfc"
  },
  {
    "url": "assets/js/99.c4f73c44.js",
    "revision": "892292eb83478a50f931b91c7431d010"
  },
  {
    "url": "assets/js/app.b5911a23.js",
    "revision": "475f52a93b8b695507c59efd1ee43823"
  },
  {
    "url": "assets/js/vendors~docsearch.be2a5ebe.js",
    "revision": "2e2106d6ddf26598d3f34d7cf6755ec2"
  },
  {
    "url": "index.html",
    "revision": "fb4e474f9eb342931062ed7eb23a85c4"
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
