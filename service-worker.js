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
    "revision": "3fcaa6dbcb38d3e0b3c7f9f6289ad404"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "43dda91aee52c1255f6bedd5d8e3f5b8"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "754f2fe3546763fdf9a81b7c5f3b1505"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "fe1d3471ae31d6de25273eb7e99135f2"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "7edfd86e0b52c70b18ca7a6020521b74"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "0311da3f5f9766b06103f7d49c689def"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "35c8023465cb59989d0cab968c5f2f5f"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "610ba2d2028706f87307b35d528b0262"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "833cacfafd8da2a18fb345ca750bbfa1"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "df4697635e93e219e210908439d046a9"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "8ae1b983a89de6a8abfbdda533759ecd"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "144747a6b41f1ad7adf7e4d34c9d7a45"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "52fb534c0462119070dbe324263aff5d"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "1a00d449e7201111a2d29bf62c53054e"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "5645fe69b71d5e2b2204bae22d4d38d7"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "ffb95ab52cb87ae70ff62a7bb70a7074"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "845c0eaab0a4a548cb9f9cf1c48dcc47"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "b7ebe3d9ca4c17abefb28343bbd560f7"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "4126c4d0d523cf7fb56b37a50fc023ff"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "afee8ee7031d6499f45fc9aa051d32c5"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "1d208761caf16a0ba5148d89d94f1774"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "38bf1a7353cb5ca823ff81b7a746ecc6"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "9e060ae348403c0394e0f41b37d25c7b"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "3bbf6afd31fd12a77c1690ec3f462a8d"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "7cec9693bcaa5c9c42bb724d5e48638a"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "3c7a0dfb6a3daeeaf0d8d5e6f5ecbf31"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "9a8d149a3f34380f40f811a23ff5887e"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "688cf32a42236accf24675875902c3da"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "27a78df5b3042c9c02c85cd6acba71c7"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "5e94062c2eb19609877b6c2bf4fede9b"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "4eed1f08bfa13123545fcf6648e33299"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "c68cbcd442e922698276cbaa36677b02"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "6d7d3fa4e359098880c5ff1f8eede2db"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "090d945bfc17bd879591d38a047ed95a"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "cbd4ce0db134dc14435750c02f54d321"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "027fe9e0603de5e76bf5b871e7d02285"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "27fb6ac731fdfb675c0ac0ffbe278945"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "21f4f84914c52cc0f0d38f41da9994b9"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "678a3c50f268c48a8508172823fb0020"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "c991ac508a4ba3ddf2292ef77b5a0edf"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "f7c496755c1f8eefe3bc083f1fb36360"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "15e2b1f3dc03256c76628869a1c85d92"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "dc6e52f2b3dac7da9dc92107ddaf8621"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "4e3e58c8250cef16fb6312a5d7f6e083"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "eda13e40105f8939012fa7fe29f7523f"
  },
  {
    "url": "2.0/MultiVendorMarketplace/commission-management.html",
    "revision": "cf96c6403b0632529910acf0f40bba57"
  },
  {
    "url": "2.0/MultiVendorMarketplace/index.html",
    "revision": "a3993fe9689ac163452a5d171fe91592"
  },
  {
    "url": "2.0/MultiVendorMarketplace/order-management.html",
    "revision": "bb3d90989a6661168760607c72704a60"
  },
  {
    "url": "2.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "219e8460164bf5d30b576aec6224a4cc"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "5062a7b2de16b5c42d402f0842881861"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "a2b1637b0d841861ce11cf9ad8eaab43"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "876edc05ea775e80422c8daa26dc39d7"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "2c92366855fb31f376785b85e0432094"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "8d26db027eee09014558626846672f33"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "94b289af8899b7ceab99ae13e54c1201"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "98e1fc16c825cbe91d02574f3abf9042"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "79201044f04b91f72ba31c30f939b535"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "9ea01b17bd6fce076d6381d227d452dc"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "24c5d2b37fa208e7d822919709250796"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "3def4077a097fa81b9d29ff8a73c9312"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "33759125ad3af78017b9bef77428033b"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "e097d8cf254ef7c4aec2a67277fb6c35"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "e3ea48af7a94c012f08dfe9a4dec3a61"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "8aab02807dca04885019aa582f4c7309"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "27f475cba356fae85aed5b7cd8f5f7b1"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "ad2fee8e74753c4a63f44c4a93b7b721"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "0729c2f5d0f8044952cefe10375259fe"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "a8b08dfbb405014b202c842d3e5e9e05"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "8c16c8187e5804f52fb0b69bcbfd2ca3"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "ae6583b8859d97de5828a1e582cac28e"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "792b86e16bb75ee6b40071a0ebf17e10"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "f97c775e4de43b77e897661bbe01fe77"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "cf12f8b5505b4502d35047e3f2a203b0"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "3ae5cba245051b1fbec1eb55bb6b4c8d"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "bc9c409c9b49df614c1c149cbba8affe"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "d8763d0dfffaf0040bcba94c94acad2b"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "3bb95b44a4e0d24c31be271acda02c8b"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "228faaf8936eafe128eddab937e671dd"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "7aca448f08d0fa3807780d10cafeb708"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "aad046bd03be478e84f8b19a0548a86f"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "f9f648c3d964fd69012adb2f17dd996c"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "321051313a3108c483a983bf4cfea99c"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "79d37633013ccce71d10d1133fcc8d8c"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "a5ad2cf6cd41cd810e8f34d374e4e40d"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "0e635e8f2bde437a2115c012cf8037ff"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "ba6334add337b5044c7cc1cd61a9e8cb"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "15b3f7060401bdaf8c429e836d45424d"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "1bfc1a8325b320fa5204e2a7252660a1"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "cd68a45126ed4e41751bafd8fbcd65b3"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "ef7f02901211937ddebb263b64e610d3"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "cd2fc4d8049c1b8a32c079f324fcbf28"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "0714509f120063165bd0c3d9e51f3ea4"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "46424f943286cf696fd7a9500d4a323d"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "f082581c1a4dfab50238d510309c0407"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "8abaea8f650f919c81a1a054f548b3d9"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "a2272ae073b6fd6ebf718bebae15353a"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "5fffad9b33ad8edf3f41f520e6d1548c"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "c46e274e0ffe2517c709f038212c8e27"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "5b4874825dcfda0959fc2fd051eaf427"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "5b7584864cee4c824fff46c14f824e77"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "031940f365a9fbdd38bb5360ac6bc43b"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "170f6e042cd32b5d2625dc5a12236895"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "cd91cab3e6360c782886ffcce94e8f6b"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "8635e5d3fff91b4eb52aebff32a176d3"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "2579a7ad06a98a3f384cbc05b61edf89"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "3dcbbbd198faeb15eceaa6945ba3aa42"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "9d1e23d4613cc303c6e064b6920ed122"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "2e7809b768e0ec8e56ad9efb8cdce21b"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "8e3eadd579e73a11cff9009411a5f5a4"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "24891afe0a3ea8d2a1be7429f91f8de3"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "328355493fd2aa8b6006c5f410bc8241"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "313142f01526216c02dc91f2fcfb5ff6"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "42809fe78de9062612e98c9b9c9182e0"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "15f8467d6278749e5c11e20890a2b8ed"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "6917f7a7f0af989fe5abfef47e09894b"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "fd9b2e316401f5bcd50f269c08484464"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "af2a2515eec16afa85c4e1de11c5aa52"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "ed68dd3ee521a6c9980935a4fd30d30b"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "ce68bfb57f68b31d6f376c8c48939885"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "5e1085755ceb1d77daa4277aa7950336"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "01687e401c81dc201e6c76064fd8f676"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "fde100dc6a0135f4ac29d647744aee25"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "d0eebea086c13daaf5394743999c9778"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "35672a3d9248000b032ce512dfc1777d"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "73e6b1ba46b9f96513764506868cef96"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "3638690901b6c4328b2b26d89906dd72"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/commission-management.html",
    "revision": "154ecb59d7dd01da41fdf27a1768444f"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/index.html",
    "revision": "9e4efd6ca6c4362f1a83d7c6fb95726b"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/order-management.html",
    "revision": "f0deda8eefae77d42c0160ca88be3548"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "9f822a3ad914cc805d3c5487b9333094"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "286fca9bab02edd7f7d519e8951c3c50"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "6bddb94e07023c36899c4b98de10af6f"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "ffed96a01c9048077f1e34e62dbab49e"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "479e29233af79ebc41d8880b5cfea06a"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "59ff894596d2eeebe31ba3d46e74f5f0"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "d6c72604f4de9ab6d80921bf9b6c8b1b"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "5f2c71f7f30049c9fe768f5dbea7061a"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "32d065375ba14fe51acc207ee2833996"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "778b2c0312e8827cdab82b32a1a3857e"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "7e445ffbee39c17e0e2f1548b05983ad"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "af55d3841e3722b223aa1181d9d5ebe7"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "369dadbea5a102c0af9d273ab8c9b5e7"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "164265690228ca6d53ae65aba025c64a"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "355908bb399a02d239a2577525c4fca1"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "a5909fa386b4008ac5414ca18d2414b9"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "4e53fc2f97dbeeee3bf43d88ab6fdcd8"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "9a7972517839fc1ce110d01eaa4339c5"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "10bbf1899f120cbdb2c844359a3dbf24"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "2c2fdf8c7ff37088678b8c9dc7ec3be9"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "91a2ffe5504e13d3e53c530273bf66f9"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "acbf257e9de0005b8d827c3b8c74c6f3"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "ba578fe87aaecb7d00a37bf818c853f8"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "ba0b95ce636a36c3724b17f877c38678"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "d503cb4e4124ac3f87f50cb615dd1e92"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "84b6b96874cf30b422df96a719c085a8"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "d884e37f50510d2f47f137c04828bf9a"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "edc08f55e9b6b6bca7118c30f1a4669c"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "8e7d0e2895d749e891b78d061b9ffcec"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "60eb696f8bddfb64f56fbd308351c107"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "227a136be28365f0ded233cefa76dabb"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "ac85cfaf923d0fa4c01d82f2f8cf3280"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "ba633b3d74614d0e33713743b03f7bef"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "ff24b8af8eb42b80cf97de5c313b94f2"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "1c955d09db09bc1548b937d1790f68f1"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "5e872974a94b9834de9da5d0171d59b3"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "e24e0892cf7900431a6fdd5f4cb398a6"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "0122a7a0243f3a83ac34043cf9c14f5a"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "1ee8a9777175b3c5c85937ab36992228"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "ebe48eb85853f0534661a13cd9744d93"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "0460942bd9b26703133fa7b4f39fbec9"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "68db4ee304f5698f98d92063aa472c6f"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "5772c671e0d189b36237d1074d3e78f2"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "d98af2c7f080e6855f5152d196a5f1f2"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "fddb5c6d7e787e1cef362c922012e082"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "29fcb3d6b30082318e20318beff45e1b"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "d47bcfc9f0910233409d01436acd7d88"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "28649716b7b7a6e907086ad0c4ca0e81"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "2c9a261576a096863ac5f4fe3cca67d1"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "47b3330a5aa22eeedad84ba0635266f4"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "3db28d70dd6cc6d6f14ee1ec8fda7909"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "e9ace444e934f7e380263897e90bf09c"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "f0766e56557088ac4c5f690fb487edc5"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "7d80e654703375421c3e6547c5e71a2e"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "58fa7130981425464a2cd9c5fcdf6231"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "140230db3b121af87c3b1525b14cc1ca"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "3037220cc6ebbd51d58fd316fd2b19fc"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "84f7d839b2f8944379b0b2fb286ae360"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "52e730c4c2d256ea5be4e273f416cab7"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "226fd5b1c80adfbf87aaa8d0ede51b46"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "489ee3d7fd82bfdab1d660fece57608c"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "c3105f456546f343e37d5d622faa6977"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "748ef1fff89d5ab5d8be6cb41f369816"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "a623313d5c078928f351fa9389ec2bb9"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "31664920e2f05fa3902a67bfdd5133fb"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "000f58b59d1f5b01e3326cf87e9fdc8d"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "6b7a017b38fd2cc9dfb9efdae6cda9e8"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "bd12dedf3c9a14ec1214b4439e92c9dd"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "a477fdd8c214fbbfb68208717219e0a6"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "e0c2c496035abf9e7ba134060b58037c"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "3d7733bc11527ace8d05e8d865ea6a1e"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "12efb0c48cab0658d4bd07d42519707b"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "8251e7d09880190da12ea27328ea3dcf"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "e05bcba6e684d102339454ad5ea7ec73"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "43773d088dedb38397d7f1cabfbeb79c"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "a25869896682717fb3fbdca4ad496d33"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "8ada3caeaca6ea79db17d852edc1c5b3"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "fb132c7f37471ad6b40fa6f9c4df49c9"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "0a379c7462fdf85fd164ab5e094f33a8"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "f332158a01c2f4079227a440f7e28b94"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/commission-management.html",
    "revision": "227afb334b70db268f0525176289f1ad"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/index.html",
    "revision": "81b719fc3277a4a64f09411dafcb8919"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/order-management.html",
    "revision": "11d32c51819f7b6c84c34896126c4ea9"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "b6a4b0f8e45add43604f365fed611b0d"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "c3504a249a416a8b41881b3a6809907e"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "23ffd8404315b7397247f13ac82305ec"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "61c92e696c1fb7d1e6fb68f6de3efc7d"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "635044344aaa4a8c9a7fac3a80645288"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "01f27ba5c722de36fa9e1b60efd3adcc"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "a9407013c06ee1f5d65ada1cc1f5f0a5"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "b20ae8bd965f82965fb14f8a3a247e22"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "839bbb423976b7687183c66c4d6aa49c"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "96ef357cb5d8fadbcaa81107bfc06c3a"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "2ace936f0fefb7f205e422c02fb08151"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "f20e10adf9cee24046aff700478d6c93"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "da63473f68775696669fa99c9ecf67f8"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "1a964cf2c5e26de31c6952358cd265d4"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "d38a042501bd598b9283bc91beaf7bbc"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "94243ec6ca54a64e96a1c7726c903b24"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "d68366968e84af6de6f25859c15a81d8"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "76498a3cec0f28d20344286d006ed41b"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "bbeaac02cb78d84074d2ae5f955830b5"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "a274befdbd1b38261f8eda4af3097d41"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "096651439ea03439c80e991f706a0e53"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "0ab0f655b13d094e141cdc3b9a87a07d"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "e554e72327a063ccfb619c550533e1e6"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "91f4194857783b427f42a2c5f499b9e4"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "70c4ab974b0c7f45db57fe112d90b0e6"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "7596028b7e178827bff70f1fb3565668"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "7bef7dac46ce3d678a2b11a2afaefcc5"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "a2fe83f8fb995e6c8ec6cd906b39bceb"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "276458d2bfa7f75bed35d447470afaa3"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "a6c620425fc001fbd5f26032d386798f"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "ea9109af66574b73483496e4e4e10390"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "2546cdd91d6aee0ee3a4059a7639be03"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "4b4c830ce32d21e52e4cdf5b6653cc80"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "93ddc7b77e957f3e4e0cbf87fa9e3724"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "0329a203402638354b8fc1b31c6d037d"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "83293e9723448da71c60a631ce05f5b6"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "95261152e1b9929f80f954b78fd68103"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "25053186da62930f5e33da16f5c51e13"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "acca5db466e4948356e2e0dc1991de08"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "73e04791e25d879cfa72c55c5e4b23ae"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "21d3179c1ad5d031e755c599aedbd344"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "ecfad7637533024570ca1ea6a9136b97"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "89c021497a1db2dbcf76e8a41e3acbb8"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "31fd78bae271ee96ebd514251e62decf"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "d2f7fc9870367f924818eda6a14c05f8"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "130dd1d51142849585977d0e219a4132"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "8be4122fb5d8b9e8e3c2c756681a71f1"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "62ec2c12938e58e94d9bd3ea242cc66a"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "7b90f3ebf454630d4f53c75c5077ce6f"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "b69b72d303658f0ea2c8b391923d5b0c"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "6b7540ac35a124254a015558dd59afe4"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "bd3f297d42980f29ffd120b220d9ede5"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "a04c985185655f95b077ac64d7d7dc2d"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "8a3cbf848aba8ab00d60057e120cdb5b"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "8a5ca713494b2921d151369ce50bfca1"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "8b6c44400624cd437e0b5cc6c3e71191"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "b494b03f465c08356d2b1771825e504f"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "e57224e2fb01b1ca665d54d3ba52a19c"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "d779c1508c08d24f0726cc19029c8fe2"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "3e84deb95d08da2c1d99637cb271e292"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "cb5f496e8ce5d78728d1dd7d30800ed4"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "8a953c6d0695075db17184ef50226d3c"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "fda50aad112731739e5aee422ca8c1c5"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "cf78db9ae19e17f6555974dd5086e817"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "a420c47755cf7716fb690ac2ec577495"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "770664e8edf036293a557b0cf1d1ad70"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "e4fc56dc81f6724cb64fce88ba4336db"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "f73705d13a437ad776ec57d2182ed6c4"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "15cd36416c21ccaa9699de04272bb87d"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "4a2a76ac24791641acea18b75bfeb320"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "92de0d3f1deb5a0c16dadb828b60d7bf"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "6dc19199c7e6737a9702abc395af1551"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "8bd6d22d3961c1f6e23a043fccafb1fc"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "666e913b45cc60084e4170e602bde2fd"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "faf6bf7ab176ddb077566f7bbab73d19"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "049d24fb634e94cc4e903a22ba04c10c"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "1d883d083479ca2cc9a36f4fd37ccb98"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "c8d6f18172c2e3088aad7ab9227a80f6"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "1eb1309f8e9c1a6024a473a6d27ed6ce"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "78340257d8e3ef7e6bf695e2c67229fa"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "68df00c95d821eade9f785b4eda87bef"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "85f68416908ffde28a03a6e461db4b27"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "dea60d8044b25baada2a0be17a152525"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "f4d9c18a4ae447f084a2f2d7018f8a50"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "aa0cc9be6dc63405784611cd68479a68"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "a6554ec2d6073220df9cc5ef73ed0b2f"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/commission-management.html",
    "revision": "a2b5031dd7c569204f3046afd504bc45"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/index.html",
    "revision": "a639b4f055be7ab7ad73b55e0c2d2dda"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/order-management.html",
    "revision": "29dbd77fe8cbd081dd5f8977270a113e"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "2fb83d93c33813f274ff1bacf8c619ae"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "04aed7f99f9a6bf962a265cf228e2cbc"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "6bc0dbaf2a61c8b3dde8fd5f5d6d4cbd"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "1ef48d8c6f5228ac49818b2075025fed"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "f92b310b6c23fdbd024df7cd0001df1c"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "b8fcee3a41f1104ee1d7dc7924f3fff5"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "bb5a954e07d2e5c8764ac19a2ca2baad"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "5ecc6564a24125105a6fbfdec4dc2401"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "22ce61031a77d7261878adac5725c1e5"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "10f9b6a9fd96e130be1b24e592b621f1"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "68eafdf96e847e5c1c54fa2d8988ddc0"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "0f0e6c4b5a545e63812cb55f350d002c"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "edb694e3b1c9855903401ff4855fc805"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "c5cd35c7d35ba1980e31881f9807c501"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "0e38cb4bd25945bf2d1bafb090a48258"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "76238a10a600ddeab2496ddc7081eaf5"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "f07bd59a201075582e2fc8fe9181b888"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "4b435dd6d008ea1a7535627377de1438"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "921b289efeab4328479b40fb050de9dc"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "f7f4b374b5d756fe43870e04b125c459"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "6283c314f29ace6d1482324a0fbe7361"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "010be76610e037e4f073f8962231959f"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "d4c1d663f06ae7b006f47eca6f246acb"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "ffae5266837570a9babd6f46bab1db00"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "92930a406a25b461c8bcaa3e59211121"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "6bfd8c1e46122bf5fd3929f9b9da7028"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "887b819d5816a57265e547767cea5759"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "020b19ca7efd34ac22e961ab840b3b17"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "dff02193c79376966d5a9c6d59572b67"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "105445f083d42fbbaffab47c7a14290c"
  },
  {
    "url": "404.html",
    "revision": "c41dea9a9f7c54c46079926135b57632"
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
    "url": "assets/img/1homepage.6bc15315.png",
    "revision": "6bc15315d10f260cb7434bb1132632c1"
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
    "url": "assets/js/1.0ac224ff.js",
    "revision": "c36e69103dece57e6ce5a3b0fe4370cd"
  },
  {
    "url": "assets/js/10.28c8fe05.js",
    "revision": "7859c6240bedc3cf32e052f728f2028a"
  },
  {
    "url": "assets/js/100.c89e2d6a.js",
    "revision": "fa70155373f94a40ccce0fbf8670af28"
  },
  {
    "url": "assets/js/101.42d5b5df.js",
    "revision": "ba48662835184fa092c8f544a205cea1"
  },
  {
    "url": "assets/js/102.a47c230b.js",
    "revision": "fd0a361a9c354f1cd9526bb7994ab0c5"
  },
  {
    "url": "assets/js/103.6ec9da81.js",
    "revision": "b3dab1b165adfbb01b1806392fbd90ff"
  },
  {
    "url": "assets/js/104.011bf904.js",
    "revision": "370f075fba52c554eed33d10f0bfdab9"
  },
  {
    "url": "assets/js/105.427a71cd.js",
    "revision": "1fd6ff4f094fe5c1f1bbf764f6c7042b"
  },
  {
    "url": "assets/js/106.14a08d0a.js",
    "revision": "7d7fb1368f5abc2df1fff8abfb971f34"
  },
  {
    "url": "assets/js/107.87470f43.js",
    "revision": "993ba5e364f7fbaf7fdc0bcd8a56e19c"
  },
  {
    "url": "assets/js/108.79febf22.js",
    "revision": "96f5717356f9dee4e05d59f460c3545c"
  },
  {
    "url": "assets/js/109.86ba0bb5.js",
    "revision": "eb2bb70581557eafb516b1afa5218dae"
  },
  {
    "url": "assets/js/11.7480920d.js",
    "revision": "b5898a993985c193d50fdea84d0838b4"
  },
  {
    "url": "assets/js/110.d5acfc74.js",
    "revision": "525aaa39a4a5d115384660aa7147aa14"
  },
  {
    "url": "assets/js/111.79e5a296.js",
    "revision": "86eef226e9b31447f6b1f56c6615dda2"
  },
  {
    "url": "assets/js/112.c87b3388.js",
    "revision": "c992a61685f4dc2f8563b412b9cb89d3"
  },
  {
    "url": "assets/js/113.41fddf5d.js",
    "revision": "67efb698506a5ed447e5d1d4765c7845"
  },
  {
    "url": "assets/js/114.607d3bf8.js",
    "revision": "48fcf30a8bd62293b3e866e1039d9d23"
  },
  {
    "url": "assets/js/115.cf9afd60.js",
    "revision": "2e7aff1e27b9e0982306a4c2307c006b"
  },
  {
    "url": "assets/js/116.25115659.js",
    "revision": "7cfc3b5844191fe00c61264d9accc791"
  },
  {
    "url": "assets/js/117.8bba3aeb.js",
    "revision": "1854626f60dee24b1c97b0853ab1347b"
  },
  {
    "url": "assets/js/118.fdef7430.js",
    "revision": "66cb529f0fed17e933adca6e7f38c66d"
  },
  {
    "url": "assets/js/119.bed4193b.js",
    "revision": "b368f0a3225c74448eb4d9cc02b57857"
  },
  {
    "url": "assets/js/12.756e7cd0.js",
    "revision": "ea28c0300acf84843eaee20aac81909b"
  },
  {
    "url": "assets/js/120.9fb36c55.js",
    "revision": "8c0608532f2552d601059a2c6fa0f01e"
  },
  {
    "url": "assets/js/121.5a8b68f5.js",
    "revision": "b7cbdb1a3180b467091cf6ebac6cf1ca"
  },
  {
    "url": "assets/js/122.05f1b4fd.js",
    "revision": "59a564307078245ae5bef0568fa42d45"
  },
  {
    "url": "assets/js/123.45ce0ad9.js",
    "revision": "f552e689012773161f2a2cc22f0be5b4"
  },
  {
    "url": "assets/js/124.197d1d19.js",
    "revision": "0d5f0f1bd988edc0eb18baf87cd003a3"
  },
  {
    "url": "assets/js/125.c79dfea4.js",
    "revision": "c72ea0c220741aeabeafc280ce099a8e"
  },
  {
    "url": "assets/js/126.e4980d63.js",
    "revision": "3f608bdd0ad4475b8fba4bdab591fe86"
  },
  {
    "url": "assets/js/127.84c8389b.js",
    "revision": "e21d5f10468aa5f53ba23d7fefc421db"
  },
  {
    "url": "assets/js/128.ae1eb3c0.js",
    "revision": "498dba79fc483d2d1b60a89780499f36"
  },
  {
    "url": "assets/js/129.da171ed3.js",
    "revision": "86c308b9efd43b5a1cc9f94296596b60"
  },
  {
    "url": "assets/js/13.618987a5.js",
    "revision": "f0f608e0140e12a856090ca7f816f730"
  },
  {
    "url": "assets/js/130.6fd5a643.js",
    "revision": "38c5c50ddb3be32b100a671d33ad3a1c"
  },
  {
    "url": "assets/js/131.2e7c1eed.js",
    "revision": "f6bd3765097ba6395b6b5af7998d5232"
  },
  {
    "url": "assets/js/132.fb1022f3.js",
    "revision": "5d8e20a59e7f6c5879097c073183fab5"
  },
  {
    "url": "assets/js/133.66c94541.js",
    "revision": "7f82791ac932ce07ada05b54648d52dc"
  },
  {
    "url": "assets/js/134.fb4b84c5.js",
    "revision": "79d034fb1380dd16eb62edd8a18e109e"
  },
  {
    "url": "assets/js/135.6b9d23e9.js",
    "revision": "b7e39319cdd5cf0c15f5529f8591be89"
  },
  {
    "url": "assets/js/136.43bfcbb5.js",
    "revision": "ce286530f0ae492715fa791ff941fb04"
  },
  {
    "url": "assets/js/137.d9d03ec7.js",
    "revision": "f5ea8c77afaf12e3e6f3cc43368421ba"
  },
  {
    "url": "assets/js/138.30549895.js",
    "revision": "3bdb148782930f9f42154fd92ee38121"
  },
  {
    "url": "assets/js/139.f17f1746.js",
    "revision": "9dc134d7a0dd3e309e8e40cc0e131d8e"
  },
  {
    "url": "assets/js/14.0b9f17ae.js",
    "revision": "02c19b492ba6f4290c506baa127cb02d"
  },
  {
    "url": "assets/js/140.6b21a5e2.js",
    "revision": "792924f64daf071b3ccf017ae4d56654"
  },
  {
    "url": "assets/js/141.cd649460.js",
    "revision": "6aaf4f584596af5f3f2b530e83a10912"
  },
  {
    "url": "assets/js/142.b4a0b34d.js",
    "revision": "756965b16d767ed11cb509a7fbd64333"
  },
  {
    "url": "assets/js/143.9262321e.js",
    "revision": "3b97180c040fece98b0990cf8031a31f"
  },
  {
    "url": "assets/js/144.edf118d5.js",
    "revision": "d7c5d1956512aba42c93030ce6764cfa"
  },
  {
    "url": "assets/js/145.8d08965a.js",
    "revision": "a3dff3ebb5add95f084e8ed547c6f286"
  },
  {
    "url": "assets/js/146.9b358f39.js",
    "revision": "2fa6f1fdf52dc9f3ebf5bd9806b15a03"
  },
  {
    "url": "assets/js/147.506353bd.js",
    "revision": "f5cba13f9e442a46b9b80a5a168c10ed"
  },
  {
    "url": "assets/js/148.bf559217.js",
    "revision": "5a1c6f3f4386d2b4f1a876ead8a42d2b"
  },
  {
    "url": "assets/js/149.bafb76ac.js",
    "revision": "b921f92b284c70e015860883f989bfc8"
  },
  {
    "url": "assets/js/15.9ab9a3e3.js",
    "revision": "60a65a94045e778d116c2cde924d0ea1"
  },
  {
    "url": "assets/js/150.ab4fbde8.js",
    "revision": "93f28be5e2280f7715ad50ffadd27a13"
  },
  {
    "url": "assets/js/151.65f46591.js",
    "revision": "faa37d97f8e63913342f0a601e6c5f89"
  },
  {
    "url": "assets/js/152.55ac9c36.js",
    "revision": "6e2b7419cf36c8cc081aa0a627201778"
  },
  {
    "url": "assets/js/153.db050974.js",
    "revision": "8f274b5d6c786797e674d43857b61f57"
  },
  {
    "url": "assets/js/154.8f046152.js",
    "revision": "8fef1a8c25c5a0b7e3747aeb2ec9c701"
  },
  {
    "url": "assets/js/155.f4ba4d7f.js",
    "revision": "d1c52b7f096e607b8020e8eb1df1512c"
  },
  {
    "url": "assets/js/156.58413399.js",
    "revision": "579388eecc31f0393571ede55164ca4a"
  },
  {
    "url": "assets/js/157.028a0191.js",
    "revision": "b5afabc44ad80aab6c5d176fa64ee624"
  },
  {
    "url": "assets/js/158.75b3ab9d.js",
    "revision": "ef1f258caa835e92f5a529dd99ab0214"
  },
  {
    "url": "assets/js/159.e9466029.js",
    "revision": "960db2ea634d57d1653cb83a914fdf0c"
  },
  {
    "url": "assets/js/16.459b7250.js",
    "revision": "02fa85324a7d59f0fdcb2f04ea8bb164"
  },
  {
    "url": "assets/js/160.6f9d02a0.js",
    "revision": "263eda920b6863ea32bce24dcdd9d939"
  },
  {
    "url": "assets/js/161.55f534d3.js",
    "revision": "9cee155e6c1de8d5aa9295b4ec0b3d47"
  },
  {
    "url": "assets/js/162.62279fab.js",
    "revision": "c5cb1f0c752cdef1da37fc8363c6db26"
  },
  {
    "url": "assets/js/163.5460bba9.js",
    "revision": "e3620da9a82f206fc41d5d9d73cd05e5"
  },
  {
    "url": "assets/js/164.c7f3b9ca.js",
    "revision": "91601988affc093e12d3775e64cc329f"
  },
  {
    "url": "assets/js/165.163cd7e6.js",
    "revision": "428726812bb9df5dfe5607499f7b86f1"
  },
  {
    "url": "assets/js/166.ca949547.js",
    "revision": "e924d7497219c293cd85141f51c2b82b"
  },
  {
    "url": "assets/js/167.22233a55.js",
    "revision": "06ccfa0de950fe683fc7276707eb5d20"
  },
  {
    "url": "assets/js/168.33536c6b.js",
    "revision": "3f10cefccd95dcff9e72e26b0abc5b9c"
  },
  {
    "url": "assets/js/169.51d0fa3a.js",
    "revision": "1b2003bedc21a4a75b645b4f3f09d340"
  },
  {
    "url": "assets/js/17.24ff66ea.js",
    "revision": "23d3f7c5eac63c5acd900347ccd9c9f4"
  },
  {
    "url": "assets/js/170.756a6053.js",
    "revision": "e128b32f0a30c634d1d74bcb4ff42124"
  },
  {
    "url": "assets/js/171.b507f8c5.js",
    "revision": "d5ad6c86c1dfd15550c35fdcddf9ba5b"
  },
  {
    "url": "assets/js/172.90b4e3d0.js",
    "revision": "020efb2d1bae8be5fe31e6bda52f6c44"
  },
  {
    "url": "assets/js/173.fc0f656b.js",
    "revision": "f722a72b60a1c8270e1c415a74da2677"
  },
  {
    "url": "assets/js/174.303bbfb5.js",
    "revision": "889c402fc5706502b67726b8f673f8e1"
  },
  {
    "url": "assets/js/175.c86ba1d4.js",
    "revision": "2d3086744b0321d890a5e87f5c131633"
  },
  {
    "url": "assets/js/176.7e0d0db6.js",
    "revision": "f81386513d791cd59f7b31828dfe2a2e"
  },
  {
    "url": "assets/js/177.49154d1d.js",
    "revision": "f3b54cd08aaa66a754f188fe66e79021"
  },
  {
    "url": "assets/js/178.2b732579.js",
    "revision": "e7820a6f3fb6c54b0e34b6c7bd07763f"
  },
  {
    "url": "assets/js/179.03750bad.js",
    "revision": "6c0a2c082b06234adfad89033b4388dc"
  },
  {
    "url": "assets/js/18.bb0f151d.js",
    "revision": "9c4295ed071b8cad67b9fa5a7c8ed52d"
  },
  {
    "url": "assets/js/180.896b5e71.js",
    "revision": "d03fc70dd07c6afdce6834b4b52f4e66"
  },
  {
    "url": "assets/js/181.33f85621.js",
    "revision": "cba367ad10b7b36eee7dab03e5a3af47"
  },
  {
    "url": "assets/js/182.19c70dee.js",
    "revision": "07d01c1853611416188588112a7a79db"
  },
  {
    "url": "assets/js/183.a67ae759.js",
    "revision": "ba09958c6d76b07f93b5512f88637d66"
  },
  {
    "url": "assets/js/184.e4359fc7.js",
    "revision": "e1d4dbc5270755605a311771c76a1dba"
  },
  {
    "url": "assets/js/185.391df7dd.js",
    "revision": "43f527e1f3da9572c254ebeed3b78a05"
  },
  {
    "url": "assets/js/186.781719f7.js",
    "revision": "f03e78e1d699d4daa8fcbb6fe91395b1"
  },
  {
    "url": "assets/js/187.6b5cb24c.js",
    "revision": "23d9b11ec5e389ae352acb09cf16fbe4"
  },
  {
    "url": "assets/js/188.f7862f96.js",
    "revision": "cca2afd8c7d0e09b64214a1e945e891b"
  },
  {
    "url": "assets/js/189.547afd9e.js",
    "revision": "e5105c4c62d61d525fee0d6bd9155a03"
  },
  {
    "url": "assets/js/19.2f02f126.js",
    "revision": "1d0ccda9e15f743fc8e6da4c19b4160f"
  },
  {
    "url": "assets/js/190.87791ecc.js",
    "revision": "ca4c02d7bf1baa6dbc9bdf678f800aaf"
  },
  {
    "url": "assets/js/191.4f52f2e0.js",
    "revision": "07257e007410f7c0de7d05b13d456b17"
  },
  {
    "url": "assets/js/192.e79a0b1c.js",
    "revision": "3baa1a8353566ccb606b95f174c6b1bc"
  },
  {
    "url": "assets/js/193.93229958.js",
    "revision": "3f7f47d561d7b3750eb7773ddaa59fa4"
  },
  {
    "url": "assets/js/194.08dfdf31.js",
    "revision": "e38343c064f1daa5188398fbe112e21f"
  },
  {
    "url": "assets/js/195.7c6b3109.js",
    "revision": "e0d8f00b51650f9a3b61e40977f55174"
  },
  {
    "url": "assets/js/196.d34c8b58.js",
    "revision": "f06a1d27b322ef0fa0dc6bc3c6ce86eb"
  },
  {
    "url": "assets/js/197.664d69a9.js",
    "revision": "ec1613297a1a6b3dea1e492c2d98ebd6"
  },
  {
    "url": "assets/js/198.be7f4e2e.js",
    "revision": "56bccea1df53210c73a0736854e6a75a"
  },
  {
    "url": "assets/js/199.3d6c1409.js",
    "revision": "39d4d3c0fdd05cd271e3de65182217a3"
  },
  {
    "url": "assets/js/2.8de23c2f.js",
    "revision": "b282a4546a83ffa5866c239320d2fb4f"
  },
  {
    "url": "assets/js/20.124138fd.js",
    "revision": "24553fdc3791454a69b0d27dcb02980f"
  },
  {
    "url": "assets/js/200.807d6e5b.js",
    "revision": "4de766a45904f3c16e7e6982897e8a16"
  },
  {
    "url": "assets/js/201.1afacb9e.js",
    "revision": "42d72eacf8386f70252e53b1ee5daba4"
  },
  {
    "url": "assets/js/202.e72e3a4d.js",
    "revision": "1ac6fd0ce0d6b966dcdfd62d77c9c61f"
  },
  {
    "url": "assets/js/203.c1b930c8.js",
    "revision": "963e77fce6703f6f0ce0b5f67cc5f77a"
  },
  {
    "url": "assets/js/204.6db8f75f.js",
    "revision": "d4bcdbc9ebc23b0cd301abf2307ec53c"
  },
  {
    "url": "assets/js/205.80183c55.js",
    "revision": "bec2baa1a542ef05baedc94c804dd523"
  },
  {
    "url": "assets/js/206.1cef8b9b.js",
    "revision": "7be75e0dd8f77e78e0d758ebbd599945"
  },
  {
    "url": "assets/js/207.795718e1.js",
    "revision": "526c3b7f115f5c2275152212ae04af28"
  },
  {
    "url": "assets/js/208.827e55b2.js",
    "revision": "18c0fd501f53e8aea96b80976eedef36"
  },
  {
    "url": "assets/js/209.9ef3373c.js",
    "revision": "c3507b4f5b28679ed182e5f36170a24f"
  },
  {
    "url": "assets/js/21.2cd6250b.js",
    "revision": "929d246caba3354cf05ef5091fd9daaa"
  },
  {
    "url": "assets/js/210.11ccd677.js",
    "revision": "5d9dbc059a9b7b768dff6ed12c758fe9"
  },
  {
    "url": "assets/js/211.741db03c.js",
    "revision": "24bba162762e28c9bd24b1351feebad8"
  },
  {
    "url": "assets/js/212.94b00822.js",
    "revision": "86887f1f201ce6871a8969319068d5d0"
  },
  {
    "url": "assets/js/213.5aecce0d.js",
    "revision": "702ac65c4a0655522d16081d50cba655"
  },
  {
    "url": "assets/js/214.a3952ca5.js",
    "revision": "beb6992f1e3137ded907d635e3a6f69a"
  },
  {
    "url": "assets/js/215.8ce1a057.js",
    "revision": "31f91ee01fdc83ab926bbd5edb9a064c"
  },
  {
    "url": "assets/js/216.360251ae.js",
    "revision": "fd23f328aa94564fca4e9c655098bc98"
  },
  {
    "url": "assets/js/217.832aa12f.js",
    "revision": "2e1561d5c18302460bcc336e51f84982"
  },
  {
    "url": "assets/js/218.93742321.js",
    "revision": "279570f5a45798395b86e5dbb2415d5e"
  },
  {
    "url": "assets/js/219.6e85ee86.js",
    "revision": "92faedce93a5c484d9b03241e6c95f7b"
  },
  {
    "url": "assets/js/22.f171cb27.js",
    "revision": "4b61c830d89ebbc2f7997d2a5c28fc77"
  },
  {
    "url": "assets/js/220.7b6b0f44.js",
    "revision": "58dc1a3c08e6f3db64747b1738ab2387"
  },
  {
    "url": "assets/js/221.159971ad.js",
    "revision": "3fa8857e23c79b0cb9c37a84042f5bc4"
  },
  {
    "url": "assets/js/222.c72e8629.js",
    "revision": "9917828092a3b6bee78816875b010656"
  },
  {
    "url": "assets/js/223.45969046.js",
    "revision": "5b51fac729a4896fe985c2fd56cb047b"
  },
  {
    "url": "assets/js/224.a82fa895.js",
    "revision": "3989a070e831faf7f7136a5ca3626bbe"
  },
  {
    "url": "assets/js/225.e5d17691.js",
    "revision": "e2c5c58d4662b1305c2ceaa5fa192193"
  },
  {
    "url": "assets/js/226.281b1ecb.js",
    "revision": "09a49613471377c20b5bf31e087f9848"
  },
  {
    "url": "assets/js/227.40f7e906.js",
    "revision": "a52a0a0e9e3d6ddd98357821f4207ceb"
  },
  {
    "url": "assets/js/228.53ef389e.js",
    "revision": "0d7212c3db6dc77c26ec38da2bd0eeed"
  },
  {
    "url": "assets/js/229.6704915b.js",
    "revision": "31e6697f9a3a2973d10872e3a4a0d791"
  },
  {
    "url": "assets/js/23.9299e8e6.js",
    "revision": "b588a673c9255fb6d118f04949d37f68"
  },
  {
    "url": "assets/js/230.d483ade9.js",
    "revision": "909e5c928a4abee719945d25e90cbda0"
  },
  {
    "url": "assets/js/231.7bfed80b.js",
    "revision": "fb19698c8c51a5ffe44adf0d807b4e98"
  },
  {
    "url": "assets/js/232.09fc0862.js",
    "revision": "f5d5d17a7c23d3d63fd01d0b9e49ce3c"
  },
  {
    "url": "assets/js/233.98809259.js",
    "revision": "8d7b1ea51db12ccf905a4623d2e1396f"
  },
  {
    "url": "assets/js/234.7f5373b0.js",
    "revision": "1ef007a9bd82297f7dae410ff3a18f21"
  },
  {
    "url": "assets/js/235.ea01f433.js",
    "revision": "9e3f186c4715d50dd28e6ad3a5c5eea1"
  },
  {
    "url": "assets/js/236.05bd0b4a.js",
    "revision": "a24c0948a38cad210e514c57386cec74"
  },
  {
    "url": "assets/js/237.8d40e35a.js",
    "revision": "23cd23bdbfa952eb7eb3bf27f0a9768c"
  },
  {
    "url": "assets/js/238.c980b038.js",
    "revision": "44de3d602f00aa77fb20934d8490ec74"
  },
  {
    "url": "assets/js/239.3b483a22.js",
    "revision": "a3b2c7be55306d448c9a1d8f5df622e0"
  },
  {
    "url": "assets/js/24.ef6ad8a1.js",
    "revision": "f33caddc9626bea2a2b5c6564d4681c3"
  },
  {
    "url": "assets/js/240.389943d9.js",
    "revision": "c7979ff3419c7d461f50c44ab40513a3"
  },
  {
    "url": "assets/js/241.ee87c900.js",
    "revision": "aa9a3d530a0fedb5d3c7fa4920fde88c"
  },
  {
    "url": "assets/js/242.686e7a65.js",
    "revision": "4288a6e314d650afdbac1adcfc0d0d14"
  },
  {
    "url": "assets/js/243.992a982e.js",
    "revision": "c744de141f6c4db58fd5effd30ac6003"
  },
  {
    "url": "assets/js/244.c0f46fa3.js",
    "revision": "b9eb130a8b03b79f7d6c79da4e411429"
  },
  {
    "url": "assets/js/245.272dcced.js",
    "revision": "7e69dedfd30d66f28e51e30374349712"
  },
  {
    "url": "assets/js/246.e222a775.js",
    "revision": "06255400a3514d944b7dbd1a403f1ef2"
  },
  {
    "url": "assets/js/247.a1d6b38b.js",
    "revision": "8557aab224e333547f01c40c34957f65"
  },
  {
    "url": "assets/js/248.2533702e.js",
    "revision": "5ac67c6af9255015359c08ff4e3f31f6"
  },
  {
    "url": "assets/js/249.b6fa23cc.js",
    "revision": "e3c2a79b1fbb288547db2811b0b11a70"
  },
  {
    "url": "assets/js/25.01a582bd.js",
    "revision": "d4b0ce1685c91e98851f284fb4b6aa50"
  },
  {
    "url": "assets/js/250.c400147e.js",
    "revision": "c400fc5b491500c91b938bea7cded8d6"
  },
  {
    "url": "assets/js/251.28a6c9a7.js",
    "revision": "02e916c16fa3aa7d9b508acd42d1af06"
  },
  {
    "url": "assets/js/252.7709df01.js",
    "revision": "67d3bfabe8adfe5de280a95dc520471e"
  },
  {
    "url": "assets/js/253.89a8cb23.js",
    "revision": "03ed782c63bc9001d732f1085cc7a4f3"
  },
  {
    "url": "assets/js/254.13fd7baf.js",
    "revision": "a0a2ae60aaadb7ff0f842092f19459db"
  },
  {
    "url": "assets/js/255.9260567c.js",
    "revision": "c6007750fd80b692c8320f769ddbf522"
  },
  {
    "url": "assets/js/256.908ae3b8.js",
    "revision": "df9a8e4067d55e63ea258c1e675e816e"
  },
  {
    "url": "assets/js/257.20660c1c.js",
    "revision": "fb579dd2db74afc58fbd6df709f9c74f"
  },
  {
    "url": "assets/js/258.99e21f60.js",
    "revision": "045545acbc157f2298214f114ac5260b"
  },
  {
    "url": "assets/js/259.c51d23d1.js",
    "revision": "9596d1031fa16849de789d9cb111353d"
  },
  {
    "url": "assets/js/26.c64b32d4.js",
    "revision": "7bcfe34e874bf19ac6c17f1d9160a740"
  },
  {
    "url": "assets/js/260.71a4d410.js",
    "revision": "6fa601d777d346dade7824c3e264dbf0"
  },
  {
    "url": "assets/js/261.50778277.js",
    "revision": "ad40109d402a8b471ec5dd067e8e96e1"
  },
  {
    "url": "assets/js/262.4e114c94.js",
    "revision": "4e22240b20140e56c597e2fa680ac1db"
  },
  {
    "url": "assets/js/263.b11d34ac.js",
    "revision": "fd2a102ac446208184aba174861ea65e"
  },
  {
    "url": "assets/js/264.7d4c25a9.js",
    "revision": "b32322e6c2861cd5e4b4c5e5d8cf6cfc"
  },
  {
    "url": "assets/js/265.22cd3a3a.js",
    "revision": "6c87f9419e83ae411615c1f2612845a0"
  },
  {
    "url": "assets/js/266.6a9009de.js",
    "revision": "3530cd971fd4a2352767de36a72adaaa"
  },
  {
    "url": "assets/js/267.4fbf9328.js",
    "revision": "19640351709df5aa58080bcf57b7d3c7"
  },
  {
    "url": "assets/js/268.2e18e7b3.js",
    "revision": "77a3ec66d8bfcf69da5c072d4edb99dd"
  },
  {
    "url": "assets/js/269.78b3f3b5.js",
    "revision": "8c4010df951fdd54c6506356ae1cdc38"
  },
  {
    "url": "assets/js/27.b5535086.js",
    "revision": "8b9e81336626c5af9535b8a22a7c1eff"
  },
  {
    "url": "assets/js/270.b00314ca.js",
    "revision": "d19633ee07a4babd8e2fa878c16871b9"
  },
  {
    "url": "assets/js/271.a34886a8.js",
    "revision": "d2f2d88af77541f15789d6dec894c1d8"
  },
  {
    "url": "assets/js/272.3184f0ea.js",
    "revision": "dbd83d56a88e865bdc6ab9b213b3bbdf"
  },
  {
    "url": "assets/js/273.4aecc567.js",
    "revision": "f9a2f8667cfda0020b933ef0c8ad1e4b"
  },
  {
    "url": "assets/js/274.64404c84.js",
    "revision": "31189df5de3cf08fd503b37169d68d5a"
  },
  {
    "url": "assets/js/275.e91425f3.js",
    "revision": "8fd175497c6f9d47cbe970363581cbdc"
  },
  {
    "url": "assets/js/276.d5d2609a.js",
    "revision": "cfe07134d7be9570265db4e5c204d291"
  },
  {
    "url": "assets/js/277.a5598c1c.js",
    "revision": "4fa9608871d404e485ef24a05b5af97f"
  },
  {
    "url": "assets/js/278.81234b73.js",
    "revision": "4fd3466a2ebf9b85345ce20948326b6d"
  },
  {
    "url": "assets/js/279.4efd358b.js",
    "revision": "b59599241085dce2732a27216ee5d1f1"
  },
  {
    "url": "assets/js/28.ccc88973.js",
    "revision": "37ef46d1c2bb90c46f6cab5897010d04"
  },
  {
    "url": "assets/js/280.64fba054.js",
    "revision": "aa117abdff6bd83b034f551eca85768a"
  },
  {
    "url": "assets/js/281.82a2d3c6.js",
    "revision": "df908f3afc2d56691a40682dff1690d6"
  },
  {
    "url": "assets/js/282.14a03e86.js",
    "revision": "38b5907cc122037652067730d881cc64"
  },
  {
    "url": "assets/js/283.3f11f4be.js",
    "revision": "247511db543588428415968a9cca3550"
  },
  {
    "url": "assets/js/284.3bc3970f.js",
    "revision": "79a65cc0db7706f44b739ad25e9b974c"
  },
  {
    "url": "assets/js/285.e250b2d5.js",
    "revision": "04ee5b8c2efb6fd17d3448f6d1a7054f"
  },
  {
    "url": "assets/js/286.8e6110e6.js",
    "revision": "0529e5b304d738d16747a93197a044e0"
  },
  {
    "url": "assets/js/287.02376edc.js",
    "revision": "f052d973c8fa9fda96b71db78fb7c1a8"
  },
  {
    "url": "assets/js/288.8b74b957.js",
    "revision": "054b3d4ceec59b4a679fb6f2b610bdb6"
  },
  {
    "url": "assets/js/289.7c5b87eb.js",
    "revision": "5b443cf013bd4f912e4ad01ba9d6e09f"
  },
  {
    "url": "assets/js/29.d8aa1055.js",
    "revision": "39ac6d3b9d2f530bf65c06cd92d1c9fd"
  },
  {
    "url": "assets/js/290.1be833c9.js",
    "revision": "6a3a23631cdd0a255576801aa3887c75"
  },
  {
    "url": "assets/js/291.516343e9.js",
    "revision": "e27dd44faebfebd0fdab02406f7fef08"
  },
  {
    "url": "assets/js/292.1fc5699d.js",
    "revision": "883986d3f9893095f4aba03dc36e41c9"
  },
  {
    "url": "assets/js/293.c0159bff.js",
    "revision": "a6b0f9167bf2cbab9c49a68ce7b53ec9"
  },
  {
    "url": "assets/js/294.5b800847.js",
    "revision": "c94ea216e04546109b38fc1b84edd778"
  },
  {
    "url": "assets/js/295.7c9d3dee.js",
    "revision": "075830d6501ec8fb93ab909c667b7f46"
  },
  {
    "url": "assets/js/296.a1703787.js",
    "revision": "4c914957bb51cd83c2e8ba3e277f4d2f"
  },
  {
    "url": "assets/js/297.bba15b39.js",
    "revision": "0e68bf9273f8d8d0d6d68061bd94e156"
  },
  {
    "url": "assets/js/298.779897e0.js",
    "revision": "bb757975355784b68495d32c37642dbf"
  },
  {
    "url": "assets/js/299.591b85db.js",
    "revision": "1b91e7296aee290b752630f92b32059c"
  },
  {
    "url": "assets/js/3.571a8b01.js",
    "revision": "31ba4298acd9aa0cb90328988869ae89"
  },
  {
    "url": "assets/js/30.bb509875.js",
    "revision": "ea67db845f347c18a7eb3b08c111e4d9"
  },
  {
    "url": "assets/js/300.fe920e32.js",
    "revision": "1b59c87dde792e24b45972d9499e6767"
  },
  {
    "url": "assets/js/301.68243072.js",
    "revision": "dd2c18bb326498dc5d266dd2f98cd7b2"
  },
  {
    "url": "assets/js/302.f444329f.js",
    "revision": "82d96c7f3ffeb5329ad4308cadb75e1c"
  },
  {
    "url": "assets/js/303.3430f6a6.js",
    "revision": "282b74b99b29e7cf4a3fa6efd122a5f5"
  },
  {
    "url": "assets/js/304.1d91dce3.js",
    "revision": "e1db7475b17def50c9ba692fa04ccb08"
  },
  {
    "url": "assets/js/305.d58bb9b7.js",
    "revision": "b2940eb64054c79718cea7833208ae3f"
  },
  {
    "url": "assets/js/306.e8c4615a.js",
    "revision": "7192321e22f1157c19e5c675055990d9"
  },
  {
    "url": "assets/js/307.a81d9c04.js",
    "revision": "7183c5f98084634b6831de6760999247"
  },
  {
    "url": "assets/js/308.0272ea58.js",
    "revision": "87b189cf2fa31ffa2ffe9e392c0d0d5a"
  },
  {
    "url": "assets/js/309.52f77654.js",
    "revision": "2e52ff8a60685c419081416fabc53bd2"
  },
  {
    "url": "assets/js/31.c61dbc70.js",
    "revision": "8a1a0649c544a1c00fbd74775d5f6b79"
  },
  {
    "url": "assets/js/310.c23af324.js",
    "revision": "dcf376e07eb2c037d3612fbb9c2bbaf5"
  },
  {
    "url": "assets/js/311.ae6edec7.js",
    "revision": "ba2eff90143b92b38e2f076ee2db0cda"
  },
  {
    "url": "assets/js/312.09a52ab5.js",
    "revision": "ac33bac924f146b8fa59030f8b633fec"
  },
  {
    "url": "assets/js/313.215b9b0c.js",
    "revision": "f9b2e1c9d3c55bc259ad1bcd9be176c2"
  },
  {
    "url": "assets/js/314.b6cbb85a.js",
    "revision": "6e91dfe7728a04b74d2fc242563b851c"
  },
  {
    "url": "assets/js/315.6e8467d3.js",
    "revision": "d5b5bdd4bb5b1fad3012aac8e5759370"
  },
  {
    "url": "assets/js/316.150ad823.js",
    "revision": "e28d9e9409afb43d3c61e4ca71458329"
  },
  {
    "url": "assets/js/317.ddabeafc.js",
    "revision": "e809a0f9db40596e1c4978de22f540bf"
  },
  {
    "url": "assets/js/318.1d5ceac9.js",
    "revision": "ba6498aa4a0898e90a39241d094a24c4"
  },
  {
    "url": "assets/js/319.23f4ac39.js",
    "revision": "981663c66db5ac53f00bfed0608ef7e1"
  },
  {
    "url": "assets/js/32.6cc0c16f.js",
    "revision": "2cda593e6b040ac6568dd79f806012a4"
  },
  {
    "url": "assets/js/320.d8a11397.js",
    "revision": "11434febfae797282202eb9780b5e1d2"
  },
  {
    "url": "assets/js/321.1ecfc5c5.js",
    "revision": "89cfb4ecd3f6ecbb94bd39f74c14efdb"
  },
  {
    "url": "assets/js/322.0ac10dd2.js",
    "revision": "35f2f198224d75e5598207b33c7069d3"
  },
  {
    "url": "assets/js/323.6ea6ac15.js",
    "revision": "2ed5e2a7950053140196eaf794b7bd7b"
  },
  {
    "url": "assets/js/324.f8438ab6.js",
    "revision": "167e826fd19cfff5bf27ad8eda541d37"
  },
  {
    "url": "assets/js/325.fa6f9e33.js",
    "revision": "181abb945198ba161d4b15a758678547"
  },
  {
    "url": "assets/js/326.40dc9c51.js",
    "revision": "0d266465e7103d2dfd6dc90ba547a2c6"
  },
  {
    "url": "assets/js/327.610ea7b5.js",
    "revision": "5ff611ea9778cb8d7add65776fbdba33"
  },
  {
    "url": "assets/js/328.d13bef10.js",
    "revision": "6d97dbf0b237337d887701b6863de876"
  },
  {
    "url": "assets/js/329.1fb20b9e.js",
    "revision": "29d89e5cc110821b6784d6ca7c382030"
  },
  {
    "url": "assets/js/33.bd69ceb8.js",
    "revision": "c3a732376819b842ca83f18ac47bf1c3"
  },
  {
    "url": "assets/js/330.290fa282.js",
    "revision": "80e43b0fd5020cde958c35f981d357b3"
  },
  {
    "url": "assets/js/331.af2f3151.js",
    "revision": "6d234eb08f5424b34ca411578a662eaa"
  },
  {
    "url": "assets/js/332.0ce267e1.js",
    "revision": "67de9c9fe553c0d7aab6f5bec3112847"
  },
  {
    "url": "assets/js/333.646ac64a.js",
    "revision": "91b94782420ed483caf054d922ac9e2a"
  },
  {
    "url": "assets/js/334.7cad6fc7.js",
    "revision": "e2ceeb6cb479ba7a5ab6d1df04ad6b28"
  },
  {
    "url": "assets/js/335.17049fd5.js",
    "revision": "619a415e7c2964c21cee1a69bed0c770"
  },
  {
    "url": "assets/js/336.c934ee72.js",
    "revision": "e1720cda259ae5b63cfffabc36deedba"
  },
  {
    "url": "assets/js/337.8b3fc430.js",
    "revision": "d3c4fbfcad2376efa4073790c0fc051f"
  },
  {
    "url": "assets/js/338.8bf1428e.js",
    "revision": "ebec2e0dc192d06878e56a1fd8a7e7de"
  },
  {
    "url": "assets/js/339.1d18a66c.js",
    "revision": "93c7455ce235c58fec2b3a1169bb884d"
  },
  {
    "url": "assets/js/34.9806e1e9.js",
    "revision": "b8a79d458c2cc024693cf6a1493247c8"
  },
  {
    "url": "assets/js/340.2b7837f3.js",
    "revision": "d0549c22492b013103109649d33f164b"
  },
  {
    "url": "assets/js/341.2224b490.js",
    "revision": "77f36ce09a63b7c8686357ebe479f0ea"
  },
  {
    "url": "assets/js/342.813e3c60.js",
    "revision": "730c8c528e1445199981f6b1756aca02"
  },
  {
    "url": "assets/js/343.050d5da5.js",
    "revision": "2294284c224b47d1b0c83b777f0cd8ac"
  },
  {
    "url": "assets/js/344.564f40e2.js",
    "revision": "602985a2b65f5f91d1293c1f0f2d46a8"
  },
  {
    "url": "assets/js/345.5c1b1906.js",
    "revision": "f1069205832d863b6889cc738fac7e3d"
  },
  {
    "url": "assets/js/346.ec35d884.js",
    "revision": "e918902f8e9a377dde678a41ba00e6ee"
  },
  {
    "url": "assets/js/347.6ec6c014.js",
    "revision": "81f5b2e4e1bbf3b328e2c54459da3c4c"
  },
  {
    "url": "assets/js/348.956f828e.js",
    "revision": "86f3d683fd5082dfcff235d970b8953d"
  },
  {
    "url": "assets/js/349.9ab23d8e.js",
    "revision": "7218a110ac0bc6943303f180c12f380d"
  },
  {
    "url": "assets/js/35.dde5d7e8.js",
    "revision": "d62cad6ce80b922783c9586a2c64f28c"
  },
  {
    "url": "assets/js/350.477edfaa.js",
    "revision": "cac455d3c0df3d9d0a4a347fbbf98144"
  },
  {
    "url": "assets/js/351.a57ca9b7.js",
    "revision": "c6caff800ac52f6461400cf43bfb3b79"
  },
  {
    "url": "assets/js/352.a5e80538.js",
    "revision": "fabd63ce4e0c262d0af91e73d9f99621"
  },
  {
    "url": "assets/js/36.d44bd115.js",
    "revision": "58f0878eb37ff0a850dc126cff923ee1"
  },
  {
    "url": "assets/js/37.62ba9f61.js",
    "revision": "4a1c54a977521824760341ae39d43384"
  },
  {
    "url": "assets/js/38.5360ec7c.js",
    "revision": "6f20ad66c95bfcd54a2c81667ba29301"
  },
  {
    "url": "assets/js/39.eb75afa2.js",
    "revision": "0176f289806b5c3cd5b2150c6a15cc9f"
  },
  {
    "url": "assets/js/4.be0705a6.js",
    "revision": "70868fabc906ecd6099336a4041a96af"
  },
  {
    "url": "assets/js/40.02d3aafe.js",
    "revision": "2ccc55a8b7c87e7d76326b718f08969e"
  },
  {
    "url": "assets/js/41.5f5958fb.js",
    "revision": "8fd22ccc14bd6ea37d39d40f912d3714"
  },
  {
    "url": "assets/js/42.799c0e83.js",
    "revision": "2952cb7eb7b057d4aa6986bc573fb40a"
  },
  {
    "url": "assets/js/43.40b54670.js",
    "revision": "7832e44a6374a3508c379262a6198cc9"
  },
  {
    "url": "assets/js/44.13ed6544.js",
    "revision": "090f47ffa0791d03fea097613613bd42"
  },
  {
    "url": "assets/js/45.1c1828e7.js",
    "revision": "b164ac227d79fd0c8b11a557472ea5f7"
  },
  {
    "url": "assets/js/46.fc2e84a1.js",
    "revision": "d2fde6eda3922ff87f108b0926e5bd49"
  },
  {
    "url": "assets/js/47.df8b894e.js",
    "revision": "f300a6b0cee24a3c84f7cc422b1ccb60"
  },
  {
    "url": "assets/js/48.891cc960.js",
    "revision": "d071b8fc1d15bf9aebaf2e889ab333f5"
  },
  {
    "url": "assets/js/49.f8454623.js",
    "revision": "c1c7d464bb8f31aa7ead942368ab272a"
  },
  {
    "url": "assets/js/5.3df6f6fb.js",
    "revision": "84f6f2dbf8f7eef59851e8b72673a064"
  },
  {
    "url": "assets/js/50.05c28806.js",
    "revision": "d3a4beb5f94291a7213e4e11556b60b4"
  },
  {
    "url": "assets/js/51.31b66735.js",
    "revision": "7745a6355ddcb17550b1fb51968b1bb3"
  },
  {
    "url": "assets/js/52.2b9865bd.js",
    "revision": "f84c5f960cc53b0556d0dc3d473ee6fe"
  },
  {
    "url": "assets/js/53.18f28e3e.js",
    "revision": "7036fc54cf6ad81225e551ff7ef634e0"
  },
  {
    "url": "assets/js/54.b0c843fa.js",
    "revision": "492a0728845451d7f6cb3f0a4d6b0d81"
  },
  {
    "url": "assets/js/55.577f1ec4.js",
    "revision": "f97dbab7720b1f44b5d2ea3ecbc85df1"
  },
  {
    "url": "assets/js/56.f560e23e.js",
    "revision": "5ff7da03c9a905b5eac81e33463066ba"
  },
  {
    "url": "assets/js/57.9ea432e3.js",
    "revision": "ad63ac0112cc315f3df65c466faffa31"
  },
  {
    "url": "assets/js/58.4b1d095c.js",
    "revision": "9bf5702fe66a4eff8bab6a2eefd7e7b5"
  },
  {
    "url": "assets/js/59.24ff696d.js",
    "revision": "385d66a1efbdd3e7e84f13ab005d1469"
  },
  {
    "url": "assets/js/60.76862799.js",
    "revision": "900387ca7a3adc5e7c852c07b48ced19"
  },
  {
    "url": "assets/js/61.8a320aad.js",
    "revision": "855649959464c70a8f00e3f38242ccc4"
  },
  {
    "url": "assets/js/62.c8471295.js",
    "revision": "dddbb1ab3c0fcc14a3fe15ce79acccbb"
  },
  {
    "url": "assets/js/63.818c6b93.js",
    "revision": "a1121a30fe2fb5cdb1e700a6470b2df2"
  },
  {
    "url": "assets/js/64.31d8aaba.js",
    "revision": "41223bb5a5bbee19cab292d883c7cbc1"
  },
  {
    "url": "assets/js/65.6c681302.js",
    "revision": "f407a66ddb53075efbb8b580b851e57b"
  },
  {
    "url": "assets/js/66.c124433c.js",
    "revision": "91d8864bb564b1ada8170fd3d7f7895e"
  },
  {
    "url": "assets/js/67.a2ea4044.js",
    "revision": "058a90171495395030fedb6e02767b68"
  },
  {
    "url": "assets/js/68.645e995b.js",
    "revision": "64ff5f7f2e3ab6fd3cfaced35be9d0ec"
  },
  {
    "url": "assets/js/69.d62b9d67.js",
    "revision": "72530514026ee57a089ed8280bff467f"
  },
  {
    "url": "assets/js/70.c3da740d.js",
    "revision": "bd7b1da6ad8d74156fcdc42b69ce59a6"
  },
  {
    "url": "assets/js/71.7990f82d.js",
    "revision": "fcc64f5b4cf1eafd0b05a1440b9c5297"
  },
  {
    "url": "assets/js/72.e31fa3be.js",
    "revision": "b08f8f461985efc56d5629e08f53435f"
  },
  {
    "url": "assets/js/73.c0f11e58.js",
    "revision": "8949a120d3c1c8a8b97096c61f05ddd5"
  },
  {
    "url": "assets/js/74.e4039154.js",
    "revision": "ec77acfa182d2acac54f9b2159f8e7fc"
  },
  {
    "url": "assets/js/75.87cafff2.js",
    "revision": "d6efcc4d9ef113eb76481594092e8bf9"
  },
  {
    "url": "assets/js/76.05f14ba1.js",
    "revision": "f9352e4c897a24feb303c687b6e99d1a"
  },
  {
    "url": "assets/js/77.ebd3d945.js",
    "revision": "2e7a6d35000cd88e8153cd5a154eb03c"
  },
  {
    "url": "assets/js/78.eb219163.js",
    "revision": "d747db15e9374b9c24ce3a8f51a1884a"
  },
  {
    "url": "assets/js/79.c69c0fd4.js",
    "revision": "56bbc1c76f0fd5a3fd6d75fb9784b0b4"
  },
  {
    "url": "assets/js/8.f975bde3.js",
    "revision": "f0d17b6a6d7b05af35aed6a0ada0e47d"
  },
  {
    "url": "assets/js/80.2b8172b4.js",
    "revision": "6f25450431b91925226cd0e9b67fe781"
  },
  {
    "url": "assets/js/81.5d385d72.js",
    "revision": "81ed052fd594fe3479b3a1dacc9085d2"
  },
  {
    "url": "assets/js/82.b2796752.js",
    "revision": "5abc21705038277c9747edcdeee72dd7"
  },
  {
    "url": "assets/js/83.df07bd09.js",
    "revision": "af2ae8c83d1b257b8867f306d053bf1e"
  },
  {
    "url": "assets/js/84.fad8d8ae.js",
    "revision": "f010f6a2e7b468099325fed9b1d73401"
  },
  {
    "url": "assets/js/85.a40b2056.js",
    "revision": "e0eeec6b08bfedc87ba604628016a68e"
  },
  {
    "url": "assets/js/86.2c4c721f.js",
    "revision": "db58808d1679b0b592f8dde90ccf1b37"
  },
  {
    "url": "assets/js/87.ece6f95c.js",
    "revision": "042fdfa99da70277ba50c8852330ac2d"
  },
  {
    "url": "assets/js/88.6996733b.js",
    "revision": "74b4257ab130e3dffee6e2f2df26acc0"
  },
  {
    "url": "assets/js/89.2bd4bb92.js",
    "revision": "c53423e6e5a210fb1e472078510223c6"
  },
  {
    "url": "assets/js/9.7f228260.js",
    "revision": "1651df1ffbb6b87438bd14ebd3ad70c6"
  },
  {
    "url": "assets/js/90.1193350b.js",
    "revision": "dd0953fdf975222a45f15fe36c4662af"
  },
  {
    "url": "assets/js/91.2ed08323.js",
    "revision": "d8a665ff5fb263443989096ea80181aa"
  },
  {
    "url": "assets/js/92.e6bf1825.js",
    "revision": "31920a09021c1ff54c56ff90a59d7f86"
  },
  {
    "url": "assets/js/93.3ab3c51b.js",
    "revision": "74cf01a59caa940080d11096e6ec0bc7"
  },
  {
    "url": "assets/js/94.674e2746.js",
    "revision": "fb5a6241f8098e5c015eabf88b9c5b14"
  },
  {
    "url": "assets/js/95.d580df68.js",
    "revision": "636243cd50761101f2f290de9e58d591"
  },
  {
    "url": "assets/js/96.bac57d64.js",
    "revision": "125d24709137f6dc3ca30d315c7ba0af"
  },
  {
    "url": "assets/js/97.278c79d7.js",
    "revision": "f07c5a713c345ec4ec6edb9c1da425da"
  },
  {
    "url": "assets/js/98.110ac67f.js",
    "revision": "ae1b4829e02930478f51f7a7941fb61c"
  },
  {
    "url": "assets/js/99.5f81bbed.js",
    "revision": "b84a0819e7ecece97524e027c16f0d7a"
  },
  {
    "url": "assets/js/app.c99025d5.js",
    "revision": "5777d423cdcd263fa29314399201f2fe"
  },
  {
    "url": "assets/js/vendors~docsearch.a5088e4f.js",
    "revision": "4649d90bea6794d7155259f6fa3d986a"
  },
  {
    "url": "index.html",
    "revision": "117e242771e33d10107872c4c7b7a73e"
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
