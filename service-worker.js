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
    "revision": "3217db53a4fa2604359f3af0b6ce67e1"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "c7718a3f505e0d22f309195099568edd"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "9eec071d13e25903803fc27be268276e"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "a57c8a3a7207fcd09a7acb0291ff791d"
  },
  {
    "url": "2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "21a106316bec70cee6410d39ba56089e"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "72313d5fd5e73735e1db572c5d265be8"
  },
  {
    "url": "2.0/b2b-marketplace/buying-leads.html",
    "revision": "e63b277f769a6c5afba1e547d58f9f45"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "e49ed32d2c214bf801a2dda1e83942fa"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "b9dfdc29e85a85a71628e139ef8329d2"
  },
  {
    "url": "2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "d7b29ac96f524fbce47263ec66755d03"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "4bae48c0f7a092355f4ddfdcddc9a340"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "a9207b388e3f6b466fa0edbb6aebddd8"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "32860948b7147e691586270b459d54e7"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "13248707334d91d4327b873452ee3d0e"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "7a4ea969d8fe082769650348fe70a23b"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "22be5902be66c28e6a0c961cac5045a9"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "2d9c04f1df767ab2673ed8f980f916da"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "ed70fd5161511245a5518d2a3f2ebab8"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "22be2c0bf55d46b59039582a55d829aa"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "119670027b2b7e0b51b46a23cabb568b"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "14d7986870491e53622eb783dccaf63e"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "753efe8bcebffc48ec0aeae46ced5d54"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "81cff03e0668fb278fec8f712ab0c99b"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "cf2cc2ffc22ec28c816371ad0ce4b03c"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "40e0c07339dfa66b0748802c8e6b24d5"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "d1cccea4b98a0b975e6e406d6ec67cb4"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "90186551958ba1034e9b7d2079b0c34a"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "fabf0afa493655128ceb000e00fd7631"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "5e4650a54c54aef69213f2deb6d4b802"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "3e6000a9668979d74925e3fb84d1d98c"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "bb644aa7b73c145d4cc7e71f44f2ab7a"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "58a2be2f7a4885b57ec8aa3d6eaf55d9"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "673ea8b16655d6180f5ada27d2dece8e"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "6d54b089896114f90d71ce1d45a4148a"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "78967d829ff2798e1059d0503ddc1fb5"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "29ae8fe6af85b791495a04495149cde3"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "855fe32422ef50e6361d6d24bc9d64ad"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "73990f2f614f0915a481961f31a450dc"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "cbeb1046d429237ac1a5227e112a4e0f"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "e23b707719fb3966f2c52da51db4a32c"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "d9bba5d8f02e9a74d657d3c56312b484"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "cd29dfc0b38da8ca0ccee8e4e675bc55"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "df78a6e884a3734ad9bea95c5e7b28d9"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "898207c0896197c2cd60fcd67642c3e6"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "7ffc5e266032616ede66906626c2516c"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "b4de98429af88dc316a98173c42bcf8c"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "5985a1db0cb5809ce6feeeff2a01a402"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "b3f7250cf5e55f1eda4a1a77133b8da4"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "38588980f504d7066f343a05f17b4ac8"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "cec9ecbd76cf9a2bb0749b1a83593048"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "7758c553bae85f2cdf46a05900d9c1d0"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "a9b0ff3f23c320a0a0c0e6d05aa11e6b"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "aa3ef73594390878851378dff23a0a47"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "8cbcdf4b218032056dd2a05941a093a4"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "47b1a1f78f610427f84440232c355290"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "67f670657a31ccf8cea63fb16893c9b5"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "293b537e13089e81af9c432a81ef1e7a"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "5b0ceaf6aa5ef2745d5410f1b2f856cd"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "adc4eda18e4f6a3a7a63edff125bf3ff"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "b61da7aecf3a5b8b9ae72d58ef311eca"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "f3fec0e435ed20b3958e9f2212ba5b5b"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "102b3f0e9eff05d7543f55395fe5e797"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "f3caa54d61ab34481967be8bf2d33181"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "1dbd2e84bba8fd5faf18f989895d5aaa"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "79e226e954b462133b45b249e4244849"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "6fa88802bbd04c30e727bb8bb34fa28c"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "121ea73f2a928e5f595af34e2153ec93"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "2c94b53b1db4f726381b02adef892141"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "884e0fd78ed988ff6076cb4c75969853"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "e92029a135f01e7b89001d7c26224235"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "cb21cf6c89e49c8893b2f14bfccc488c"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "21629f0abe412e1ffdfe313c5f38aacb"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "4661a46815dbeadc165c19d1d8876f4c"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "9bdcc0da1375e8e4ea01ae7c88c0e5c1"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "df4f51ee87f69533472908c5a4702095"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "628970b4574415dbf707489afaeb7ac8"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "108e7716891de2f41888c2a77717e511"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "ab848fba3feaef6de3c0f9e4d717d950"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "7e89010b704e9c37f399029042f3a37a"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "b03e91329cdeaabbb830aa186620db46"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "9a6b3096d5e177af3a25ca4c1b5fd2f0"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "f258c5711cc75e51d4792fff76ddd59f"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "bf353fea1bc467b9033fd59d8fd8c74f"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "167ee5252de72ab7794a8e128ce02f58"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "649501f3295f73e531905dd166d53f78"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "154df889ec9b23344221620c1ee61705"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "2aebb61acaf2a0a79dd0d23f34486cdb"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "6cd34dbe9c5e0d7262bd15a1f44e73a5"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "e92db8a5ba17cdcf97eed73e1030ec58"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "4565518872672e9e7cd8468b1fbe5a69"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "6910ee4afaed24d5f8cf03297261b720"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "1e8e5345131547763f164b5e95420327"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "706a1fa4c3a3c7296c03cc1f9d8623d8"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "d5cabb8cec2e1df8375aab3045bd3df0"
  },
  {
    "url": "2.1.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "114c94caabd762974e7cd547ef442808"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "b7437f520c7287cad75153757d1cd184"
  },
  {
    "url": "2.1.0/b2b-marketplace/buying-leads.html",
    "revision": "42ccd6a8ababc089b5e7b1c09e1a156d"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "9843c0ba3cf5a721652416141f81bb07"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "d4a3d1560d7a95513c557d74b7a8f96b"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier-microsite.html",
    "revision": "3b424c054a1243325bae63915db666f9"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "7c2175b7fcde86d63fc3cf58dcb48666"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "4689f4c69ff1b93585fe1305c61d6840"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "2ce43f8f5641aa2a88553b815759e235"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "b20eecfabc1d11e80f07688892a0a8b4"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "368772d2ae073983753520fd8ef7bb3a"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "2ba665b73ad6d184030eab8849730ab6"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "e71fbd627a30dfd901ebdfd3420f8925"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "c5bef4eff603c1a6ea59fdbe2a88eecc"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "b446cf580586f4647ec2c1d34cc3f8e5"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "7b705c677e13fa1a0fddf18f54887b6c"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "942cae94d505e8a5574a60077f441b9a"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "06dcd174f82fe193ce28f701d681ad81"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "66f7a124500506dfaa6976955005582e"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "9a04fa531d99d645998d9c7d9fbaab1b"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "9cb12b7a83a4f890e540687d4f8aa554"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "cf3f2747d0e9dd4043a173644890e970"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "6041b7ccd00c12d5e431d7774c353936"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "a3517509fe6e8b6cfd9bd61d4c4cdab9"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "0c5c6c857e41113943d2712ed427688a"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "510a60cbc45fc4d0da0dd85e2c717b0f"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "b9500ae360d46b2f223acbb21ea47a7e"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "b32e359759cacf36e2fea0661f947d81"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "64f99b7694cad5f5c4b1fe2b15e63d48"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "58f5c58b6adc42fe520c19a60bae08a4"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "15b7fde3f357e6f43e6b5662b8da28d2"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "58dfa5677ec1eddd48edf57685e0f632"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "be568416bcfd53bf6622eaec2c04dda8"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "1c140cb364f5da70cc727a0a8cb4b998"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "0f90055100c2f54644d00c23fc492eaa"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "6abc84b70d0202280b6332c4cf55198f"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "2a632263fa01d7bf07414bfa827951d0"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "51e4cf134c7a84504bef4d999580d2b1"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "1bb6d0a9cfb45dd22f048c17c475c37c"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "be800063fab5da18c143d5e5ca50be34"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "c323ac95330f1beb1042ce21bf799941"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "6235afcadb6f999e399f6e601375763f"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "e916ed55af75628f1f20d78d1f3ded63"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "e6f2b198a65be8d3d4c63327065b2c55"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "1e2caa7946cd7d33874d678a0baf4e93"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "44ed51fd68a8c7dc0259eb15bfefb78b"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "512f0d67afc079f632ee7382d1b981c0"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "183112cee4bb8ff09fb6752b6768d8b4"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "616c5520025fa9e002ad9bbaac5b21f6"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "a31f9f2764404bfcb77698368abe178f"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "dc3bbeaae493043157d11c813ea4fc48"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "dd68652c58a3280ec4d0802ce975466d"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "8fa0ad8ec8cc86b27d673df4959cb703"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "545c4738fa293f0d27f4f966b2ba2281"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "aa2c314811d065861d7772f977ae5a73"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "ebcfdc72044bf8e5ba530837df90ffa9"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "97a6b522421190bbf7f2fd919e579fcc"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "b6bf6c7f448c374767252660be5cfec8"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "bdae778ec2556c1b55b54793be703acc"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "9e394f7cfb6e321167a98979d920ed82"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "0e695d3e1722123d279e805d8a880f2c"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "5e44deb5ce2f9c63c7d35aefcabe02ea"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "528c509eb6687c6eea0697b44c327bcd"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "3001a38046b9595b7cbb8aae0f7517a2"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "0612319784a70fbb3737afcaa18165ff"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "c228676f75ec3e262e0088a64a431dc0"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "a0cdf741bd7df9bb4aa9e7a9c755a862"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "8dd1a0116a4e8715e1ce09953dc94d8c"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "f86421e298840c8f377de968db2fc1bc"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "bb90633b30a9749201ad7361e003faac"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "3cf44b1feadb56e2fa0d33a323ae0074"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "926cbb6c54b7805d74db673ef0dabec8"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "0091b2e9134915147d00ca4fc56fa46c"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "a68a8195b0bcb251ea95719967bb285e"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "1697bafd3675f1828aa4bb76b95fb8f9"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "bd59e90c2b4a1d6d1d60af182f711c4a"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "8a7b95d87a80bf695b24327d207f0c43"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "5a880093d999bb13b247b7635a0adb93"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "4d4fe893ed469fa380ad479aa986d9fc"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "7d65a492da7de1cee7b60c5614d7d8ae"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "0d833e3346e9960e91fe13d07e74de12"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "d9b520c04f49be0689ab9501c809f506"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "01222d786fa73c2cc1ca1cc6880c94f4"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "76382c76ab59f47a45708906e6136272"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "6b4abc9b2cbfbe5c8222563ac0fbca85"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "10e152173ff9dd473e35241d5440b28c"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "756ab0f6bcd52e40c3123a8fdccc48d4"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "9ea5892fb8bb401fc494821233556478"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "bd5d14078f19cf0b1cbae196a65a50b8"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "1369b57c088400d0f6fc9ec59cddaa68"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "f4324a3251a30dcaeb9a323b86dd5aa6"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "6a27744108fef3a4d8f5bbab2821332a"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "e5dd6f146244a6ce96fd9be68d6110ab"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "308f86d5bb031fc718cefcba2235a003"
  },
  {
    "url": "2.2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "788df757f34f9094729685ac259fa363"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "4432e1b93cb51ca1d8a8d5bcc8e8c4d3"
  },
  {
    "url": "2.2.0/b2b-marketplace/buying-leads.html",
    "revision": "0a0c50b8f7d846bb01f6ae823075bc56"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "425df5f7c39652311deb3b175026188a"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "3eef5a705cb16fe8c8ac7698140ef5dc"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "7bc5aa119fdfbc7d9ab0fe213aedb25f"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "64fdbf973777c15ecaeb1198d0198dd9"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "0fec87a4c2e48f46027941014935dd69"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "42766a6c40f2cecc8e6a6397c3b5a65e"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "2333ec0607e433933b7e70ec4385f3b0"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "6c64b2811d26978badaf62cb8e7efa71"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "21775335021fc7dc3691082006eedffa"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "34a3cfaf3e15b120ed0fd8ae218c0f88"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "d1c7ff67e1d193c6812fddc6fac683a1"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "7e4da804b977fa236d2f6d58b417632e"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "85e85334316b16527686a600334920ec"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "283c28a6a9e197990e6e61f2c0edbeb3"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "c04a0847c65178c515d692afe88a6da9"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "5fc267744fbf8be15681ecbf42008a9e"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "4c3549bacecc690d57fa953a3324e921"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "5d83f1bebc99fe37b2a20313e7e72bc8"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "1346c9b31d5f8c49e4a1b04e1d44630e"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "09f3b9ca351a580f9cdeb0d06e27a283"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "fe5ec8a2727420599165f4b7d4287150"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "950dd2dd4e4ad5dd53c444f3b19ea14f"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "fef6831e92482e6fc8abe01c4d604d8f"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "f34d1579b94cefef541b409999e1065b"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "2d2dc6e2c70f4e3aa7c490daca2e4efa"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "fb87b0180e5979eb1fe44b154e64fdce"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "2105fc3204b84e10963996f42bfadff4"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "a581f3615b78c3a8efbba42eeaa2380a"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "786417161dd0d4313a1b58ebcda4ab1b"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "dee9221d70cac1bee719e3d165bbf39a"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "8b84e06f3c91adad75a026bb9dfab785"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "5701c404c5388701ffe0bc610c3e5cdc"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "1863e01a1a6784a49fb54fbe4d0c4bf5"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "9547c594d5d94a4577e471aed0597ad3"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "33389e19372ac6a7538af4d1562dbf8f"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "0038247fc948daa55c9bc579a8e5c137"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "2b2cbc9e7084d6bbbaf74f76d600d274"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "5cb967b90028d7a74d532770a0da5393"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "8e6260b9a2ad987fea019544283cdcc8"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "ef9de801a0e78d24de839b186bd4b2eb"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "aaa7e010669db7fd640a700f5798fb3f"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "6f3531bd442ba6454df48d6865a21952"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "41a1ecb21dff1e54dc14c5a3bd1c91a7"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "c15cc78cd81e2ce98e7e811b9c4ad5b9"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "62bbddf07cdd836a1606c7e85f2ac565"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "253df49d05d54e8af02393ff905677d5"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "151bc241ec65f737e6c355b34fa4db27"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "16d66f7b70c95ccda627231c814ff8fd"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "70c666f74e4e94dbfe21ae0c666e7bbf"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "ed511e393b7fb84746619d1fc4c04f75"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "93c776af33b480abe4179fa3532f6178"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "23ac88c1f92d10aec3805d2b6ef03282"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "74339526e3bc926746726dc7491aaa74"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "9a4740fb77ad98fd75f74de4f899a8e1"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "e7912092cb33003617cd8a1b063ba495"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "e551404f878c610afc9f5d86e44e821c"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "a4e942f707240f06acb020754b64373e"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "bdd1dde42d41ecec835f48b36e42f14a"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "32b5d8bea06e1c5826a0164fcd46a556"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "4adaf54d5b368188fb8b1fba0b70d56c"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "eec5528532911eb25e05f6f5a01f5a6c"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "cafaae3d91a2e21c5ac2a85254d5eb52"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "7c427e6038f2d6804efc4e320c21e207"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "619d6f063d6919438a7d7a84336006b9"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "5f09c622101ab5a9e174083f7ab80fb7"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "0d3aeda81154c566417b3ff82cf1971d"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "81e7bd0d6b56ca9e13daaa7f6adaadf8"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "80303e0149cfee3c801bb829416c92d8"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "94feb04074dd4627243f4af9f86e04c9"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "6aa41f1d3ac491730c7c505e68b1110d"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "7925754f77cc676c20889b345b559c80"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "1b6527fd50cdc1d54d75611a9a6d3fe0"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "f6ab1b5fe922c7983e7c3c51c3ef4803"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "331dc2c308771411fb6fce03e0ddb28f"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "279e76cce170c53f299e85c9ca763060"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "e9863c04286589202f3b5058ae33e3d8"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "ef66221664e20a50c7e5bf8932c01d92"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "d99e0d37809e838527f792c89112ef72"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "91d5e9906af13de0ce234f8e45ef2ca0"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "cf66bafc29410eff91519bf92dd12960"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "fd0f69c1098d42f019d410d16c4d5ad2"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "e03eb191ee8e195c749e4cabfcb67adf"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "64ac0f7874c981c6ed8c66032dcadb36"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "2f9645e01c37a4c979139f43cf8a8360"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "dafe680c43dd7aba2a8b1d2f2291cea8"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "b7f5c8b49c91747fe38d1e6278f6de92"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "acf0aab95d7259c05dcfc081d95fcf88"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "3b5bf557914b35ae9d368f54e580d06b"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "2a8c32ed608b92b48b671ef469ec948b"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "b4fc323219e6616fc0a077d8bad974dd"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "ffe7e901e3343fe46abb1092bf387b75"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "263d9c6ff47bc4b65bc40d0dc34a17a4"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "b18dd820098304b2e1a8e8157a6bcf04"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "bc2fa482fe077ee95809bc131d98a9c3"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "f668bdfb45a079844883d37dec60290f"
  },
  {
    "url": "2.3.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "bf41082eb6bd5af3124022381a702906"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "f0d0b653028abf373a88c7ad2840d9ec"
  },
  {
    "url": "2.3.0/b2b-marketplace/buying-leads.html",
    "revision": "878d9763ae0656b4eea24322641c6724"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "e030b9523770be163e7c3b28ae49ba15"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "9a73df6cc6de1c1d7fc09957105740eb"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier-microsite.html",
    "revision": "cb205b9cc646472a3906e03328b88b43"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "1dc4835e5c20b1c545a102168a997280"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "04c57d68dbbe7f7e989687431a16ff4a"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "791aa351269ec95536e6aefe9e9ff75b"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "fd463c12bb7207b37ee1d62915a99d32"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "1c3b3851e794a29e26360d12ef9b6ce2"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "1bff4335c3426c5ea8640360ccd6eea6"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "0959e1abce1c735b964f4f4b636cb5a8"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "b1c4e9f1a6e4e8eed7e4b5e2551d5fd2"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "0d4dea1a1d971c2e4e5f511bd4d7cf0a"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "ae8d20f1c945042c23e3526d4a9aed8c"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "cd274a3e746135a62f0bed9ba88ec054"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "18be2658df8c6c5f18ddf379bfa28ddb"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "79a2fb47452b265ca731ed446442c1fe"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "03407e308deeafbc0bf98e8090b29d3d"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "852ac5f70a1e9f2780940eaabe67af8f"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "87a447865fc7c3d18c86c902b87e3a98"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "6f0657f271964e904d8ca1cbfa72bb9d"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "5ef007b354eb7b74f6a23dc4d20ed070"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "3fb353ccd452de4c60ff2f58b1aaca31"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "fdbb9f6e37b0b9d75be1e8a44fc7a952"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "dc4d37fbfe1fbb898bd6171a46d5ecbb"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "ccc9685788e6272fe310504fe06bb5d9"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "a52dc07a8769e09d82e11bd1f7bda458"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "680ffd22f45b52c8f75d9660e048a429"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "0625570dccd39d9de647c214d876a7dd"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "fa8692bb5dcf74cda2395e1706141477"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "ebd3d0da0be3965a57bcba79e4771738"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "85d2b19a672c0c4848679446e52decfc"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "179a3ed27374f0e785a4ff021d73046e"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "b2840034ada6ff1f79f916cfa0f45f35"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "18e34a993f60f795eadf87cd3c603ec1"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "d4e3e66b0f9ce487372de7f14204ff99"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "eda7f2dc91d9f93939a37025bdac1cc4"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "bf0e5fa9dbd2a515e8a1455ca053b030"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "ff5f2b6a042becf1b57528daa1b5fb9b"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "4250ee2bb931474c594ccd8061ce3468"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "8f4580a714ccc6295205730612e80ffd"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "94736afdc6602b630ae813f92f0f405d"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "5c1bbbbe57782b121410d49613505331"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "36581e24162e2c4befae77f67fac0ad4"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "5dc56543f0f96083887697581d53f482"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "041164768b688d3b4a38bdedb7ef9398"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "e341810b38f57bdc4cb7aa3c252d1c94"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "e62a9c2bfffddb5968dc69cec95b0ea1"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "90352af01d921698e70e6ffda9eddf0c"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "ffdc90a010963e04462bb859e5a0e542"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "81c1302469f3089c2a1c773b7e5f9000"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "bf7c2fa06ed595fb653591441b069179"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "ec1758676f727959bd51036ea9e36ca7"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "2655ebc22e1c209d6741db42e5f794f7"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "20646907927da70e2d9faeed87257032"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "86967da8e7048935410eeadca4fa4fa5"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "bcf7c34d0c0525f707dc2afa6a05a7b2"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "0d2d0870f7af6c61027e5599db20860e"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "5448cf22538114f9571b660b854e0835"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "efcd1494fe843e68e4307ecb7865b9f8"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "83cb31aee5f7e5ed83bcac3e1363e562"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "3e8022dd842dc000a17a3c57cb00e791"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "92f24787645ccb7a98b24c41f0ce6d17"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "b65af629acb1aa5649c1c9fd369a0a96"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "dcf0a4e53f4a1059ddec9659a8bfc408"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "f2605aabf7029677f3ff47a777627f64"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "81bd65b903aa5cb26f040e5ca4c7f271"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "0e4e8ab7e1fd5f63ede04539bf9bd816"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "0f89af21d68dd48b4b7023183823e0a5"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "358cd378eb437145f3c8f7a10f7da316"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "b3a31b784ae5bc472b552740ec404c25"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "c525699a2fa77ceb5874941bb5c2553f"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "1222622c263d5712f5775a6fa52350c7"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "3486e1f1cd7741edb5fafcea50245c7d"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "f15839c5db7a0a47074efd735689f001"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "8c616f4e3691e1778ac9ad78b934091d"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "2ad6fbdf73b082f378ba776558030fc3"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "a4fc753cc3252e7a14207400d697f023"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "225a70a75e62d66ffcc03118a86ccf89"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "842b43660608037ee4a2c200586a8a26"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "4622e789927cb095fbdb14d63622a24c"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "d1446fc95b1175cb18a387296b6922bd"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "43694b65d7a7f853db098e1acb88f034"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "735ba227292a24e01df6392051ce4d79"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "f0d2fed3011c577d89d3c49022d722ea"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "5c992dd6a3bf47c966646a215cca96e1"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "71f386abf95a0a6521330bf67d2cc2e3"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "9deb8a28036507d352605277756662ed"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "da27fd22efaa367311af2c41a8aae63b"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "e016a1d10c61d6503b574b1d8ed8f392"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "56911d70a3fa6ed27ebd25b314ae85a9"
  },
  {
    "url": "404.html",
    "revision": "2aadf5615f4c735ef7969556a4ad0f71"
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
    "url": "assets/js/1.2c66788a.js",
    "revision": "5cf722792e511f60a7305f52e214d5df"
  },
  {
    "url": "assets/js/10.932124aa.js",
    "revision": "3bf698b75a241fd8b049241a4d928bd2"
  },
  {
    "url": "assets/js/100.38e71f11.js",
    "revision": "7548c0de41ede0fda1ef276321408db5"
  },
  {
    "url": "assets/js/101.dc4fb967.js",
    "revision": "5a20b204c475c5bc43433791c7aa1d49"
  },
  {
    "url": "assets/js/102.bb733c71.js",
    "revision": "68a37c5d8982a3934865c27bed58887a"
  },
  {
    "url": "assets/js/103.57d077c7.js",
    "revision": "6350a5c1e0d7ba146b8711ef55b02627"
  },
  {
    "url": "assets/js/104.301d4c5c.js",
    "revision": "40551b552d467fa68ddc93d9323024c6"
  },
  {
    "url": "assets/js/105.5cae7330.js",
    "revision": "32110d4ccf9c77ca15f97683f8ff27d5"
  },
  {
    "url": "assets/js/106.f0f3272e.js",
    "revision": "848c27cf7e505ae29f7938736fe54553"
  },
  {
    "url": "assets/js/107.c22a25ca.js",
    "revision": "9dbdd683306d38185eeb5e45b035911c"
  },
  {
    "url": "assets/js/108.72eb7d4f.js",
    "revision": "c99c9cf2ae966afc49ad2043dc6547f6"
  },
  {
    "url": "assets/js/109.7aa9c7c0.js",
    "revision": "abd076a3102e4f569618ba2d2f7c9502"
  },
  {
    "url": "assets/js/11.f83020aa.js",
    "revision": "4b693692460ccea7949a3182785c771e"
  },
  {
    "url": "assets/js/110.82d8b8bf.js",
    "revision": "49de40048cfd86c23d5e006401e5b553"
  },
  {
    "url": "assets/js/111.69dd564e.js",
    "revision": "27309a1dc8750364ea1faaa4fb3fa100"
  },
  {
    "url": "assets/js/112.bf8a0433.js",
    "revision": "0017f8137728a3e6d10a85e2950a23c8"
  },
  {
    "url": "assets/js/113.74bae430.js",
    "revision": "f63734887a8797da8940ddf9338fc764"
  },
  {
    "url": "assets/js/114.90b7f3d3.js",
    "revision": "227872990b60dcc3135409eb47610a44"
  },
  {
    "url": "assets/js/115.7f5b75e7.js",
    "revision": "893d048193bcbd35c85c0c7ac026415d"
  },
  {
    "url": "assets/js/116.330125a1.js",
    "revision": "16afa279b3ec52859ed2ba4f0460d8a5"
  },
  {
    "url": "assets/js/117.3d3534ee.js",
    "revision": "2285485c4a293e888ca0bc78e3c63d22"
  },
  {
    "url": "assets/js/118.0aec487f.js",
    "revision": "2027b75eda57fd257c2ba0912bc3d755"
  },
  {
    "url": "assets/js/119.aa3444b2.js",
    "revision": "4a496170c39652e6f5dd77d668ded774"
  },
  {
    "url": "assets/js/12.f17e0e79.js",
    "revision": "a0208945b849d6fc0398a654ec65da0a"
  },
  {
    "url": "assets/js/120.bce8e523.js",
    "revision": "47107baa10f862f35374a3887e26e340"
  },
  {
    "url": "assets/js/121.453f6afc.js",
    "revision": "342293beebedeb2c55006179a00f8c29"
  },
  {
    "url": "assets/js/122.add1e3e8.js",
    "revision": "0fb810b77fc4f28ba9f0b4b938ed2206"
  },
  {
    "url": "assets/js/123.35b80549.js",
    "revision": "2e3022bea4937026e0beba9940e0bd7c"
  },
  {
    "url": "assets/js/124.9c3ab624.js",
    "revision": "cdc979f577180483d19c32b9225feb9c"
  },
  {
    "url": "assets/js/125.06713f41.js",
    "revision": "d7db271a1a93f384b2e63e4f17ab2962"
  },
  {
    "url": "assets/js/126.fb318aea.js",
    "revision": "9b89214785d1706eeb76394da9e2d747"
  },
  {
    "url": "assets/js/127.684c67c8.js",
    "revision": "957ea119a96b72fabae6bc53ba9cfda6"
  },
  {
    "url": "assets/js/128.0c3cd0a9.js",
    "revision": "fbd8b5777f7d738b36bad78f7351bf96"
  },
  {
    "url": "assets/js/129.71bf9acf.js",
    "revision": "56e243a0af4ab23a6091ae14f23e5744"
  },
  {
    "url": "assets/js/13.e4d61647.js",
    "revision": "96380cc496a49fc76012d6a528c97b4d"
  },
  {
    "url": "assets/js/130.33128025.js",
    "revision": "2036159aee2148051a99cfcb589c3d88"
  },
  {
    "url": "assets/js/131.20166a83.js",
    "revision": "b3a2cbc14bacaaad36721f1cec749557"
  },
  {
    "url": "assets/js/132.7690916d.js",
    "revision": "48e7e0b1abe11faf47d0cef97aa71424"
  },
  {
    "url": "assets/js/133.2018800d.js",
    "revision": "cec95e11c193d45f38a27b0b38bbbdca"
  },
  {
    "url": "assets/js/134.a70827da.js",
    "revision": "99f835caed5df4a1f0330ced50b2471d"
  },
  {
    "url": "assets/js/135.c7f52e41.js",
    "revision": "c6f980431657b04fd8a442df6acf9d4b"
  },
  {
    "url": "assets/js/136.b09de7d3.js",
    "revision": "2f1bb82ac363000dbbfddc1dbacd1b47"
  },
  {
    "url": "assets/js/137.cb46496c.js",
    "revision": "dc6046982131497f6a468cafc99d17ce"
  },
  {
    "url": "assets/js/138.68b5e03d.js",
    "revision": "0905dda03401efdc35ba438f0b661e9d"
  },
  {
    "url": "assets/js/139.fff898f6.js",
    "revision": "3f0af80129c8a050462b7ce10ce6699a"
  },
  {
    "url": "assets/js/14.bda22eea.js",
    "revision": "530498936f3ae9b1e7942b81b1b0b5ae"
  },
  {
    "url": "assets/js/140.7654fd6b.js",
    "revision": "ccfd12682c617dd56e44819cb29f56f1"
  },
  {
    "url": "assets/js/141.b3bd04a7.js",
    "revision": "d127fb0ce4e8440dd88e28803be0016b"
  },
  {
    "url": "assets/js/142.853fa057.js",
    "revision": "01b9ef9a71a27c101bf83383fab26374"
  },
  {
    "url": "assets/js/143.323fcedf.js",
    "revision": "30ac26039f487265af33fe7add0d1463"
  },
  {
    "url": "assets/js/144.3e9da9bd.js",
    "revision": "59d05cfa2d0a014c0373f3527138d06b"
  },
  {
    "url": "assets/js/145.43f3714b.js",
    "revision": "c273259a7f761789080cc373241238df"
  },
  {
    "url": "assets/js/146.c6f162be.js",
    "revision": "11b24adb677e047e40b56f74493a5f82"
  },
  {
    "url": "assets/js/147.e4926e7c.js",
    "revision": "9e3910f4368e6e3f68e85b8f8cea2610"
  },
  {
    "url": "assets/js/148.03ae3686.js",
    "revision": "f3171cf5832e23996f0c8c7e537d423d"
  },
  {
    "url": "assets/js/149.03622988.js",
    "revision": "6d67bfb3961fd23518427394831ff7c6"
  },
  {
    "url": "assets/js/15.1f8b586d.js",
    "revision": "b3c4c8abf70382d9a2a89fa35fe8cd7e"
  },
  {
    "url": "assets/js/150.2cb77d2b.js",
    "revision": "feb9f78de7cd7b6727508457c185d19f"
  },
  {
    "url": "assets/js/151.d2646e81.js",
    "revision": "302405c487a23c7ba1e9ca5e33154375"
  },
  {
    "url": "assets/js/152.6c07c0f0.js",
    "revision": "37d631c1b69d3da1ee38c6db96472c3c"
  },
  {
    "url": "assets/js/153.6a643211.js",
    "revision": "7fde814814189a38225ce7e7350dd017"
  },
  {
    "url": "assets/js/154.286dfcec.js",
    "revision": "cf53994af1a0733df084f829ce6a8bf6"
  },
  {
    "url": "assets/js/155.6b413def.js",
    "revision": "6f66d6a351d94dd522098a4812bf3260"
  },
  {
    "url": "assets/js/156.46671af0.js",
    "revision": "e9d90b41a2d011706cd5130e873120fb"
  },
  {
    "url": "assets/js/157.bf6afcef.js",
    "revision": "2255931976a9ee8a27b333c5590b89f6"
  },
  {
    "url": "assets/js/158.af5dbe54.js",
    "revision": "ccc007aa17658fbd11f2fa105fc97c29"
  },
  {
    "url": "assets/js/159.09d16ae6.js",
    "revision": "5bf4afa038378ee361e3a93e6a58338b"
  },
  {
    "url": "assets/js/16.4a1cd91b.js",
    "revision": "4df0fd6317581729d330a7bfd5f52464"
  },
  {
    "url": "assets/js/160.ee1f4fcc.js",
    "revision": "acae7f82d3ad2b433660a26b1b522b27"
  },
  {
    "url": "assets/js/161.9428b9f3.js",
    "revision": "6950077b84e86ec65c557040bd1cc030"
  },
  {
    "url": "assets/js/162.30d8fed7.js",
    "revision": "c41953c897036f2c4402d27f3e3ba0dc"
  },
  {
    "url": "assets/js/163.198b05e3.js",
    "revision": "0069b54bb827cfaf67f50ef178739898"
  },
  {
    "url": "assets/js/164.16d31b62.js",
    "revision": "b9d94e84d702c83ee8affc935f40153f"
  },
  {
    "url": "assets/js/165.705cec31.js",
    "revision": "e39d8b1d02da927a338d166cbca2dffa"
  },
  {
    "url": "assets/js/166.c37fdd24.js",
    "revision": "e1162ccdc535d200492da04bc79c3a78"
  },
  {
    "url": "assets/js/167.024512e7.js",
    "revision": "457a06dadd96a299876e25b5fa4b8217"
  },
  {
    "url": "assets/js/168.5fd8e86e.js",
    "revision": "8690b672c793a14ce53df06359437127"
  },
  {
    "url": "assets/js/169.c2cbcc70.js",
    "revision": "19f96c8d0c2468a84090301e2ae456a5"
  },
  {
    "url": "assets/js/17.ddff50c0.js",
    "revision": "28887507c85e580045b1473c44ec618c"
  },
  {
    "url": "assets/js/170.33ba75f7.js",
    "revision": "b6281d1c419097e5f676e6837a3493ee"
  },
  {
    "url": "assets/js/171.ab066c57.js",
    "revision": "b91484301aeab38f13de3924481f7550"
  },
  {
    "url": "assets/js/172.767f8f1a.js",
    "revision": "476e2f0e399f42d0c89e52c77bc4815a"
  },
  {
    "url": "assets/js/173.f15989ac.js",
    "revision": "1864f74a66c08cc2a066ebe67d4bedc6"
  },
  {
    "url": "assets/js/174.2f5080df.js",
    "revision": "d0bebfa988a5191e4f3bd2a40469a997"
  },
  {
    "url": "assets/js/175.6d919c99.js",
    "revision": "477d15673c7a2a7adfd538cfd6c7ceca"
  },
  {
    "url": "assets/js/176.d5272f57.js",
    "revision": "2536ae4e103a28920f5583e21ce0bc6c"
  },
  {
    "url": "assets/js/177.3720bb27.js",
    "revision": "7860c72b6f71ad95552cd40f3652d177"
  },
  {
    "url": "assets/js/178.c8630c80.js",
    "revision": "d22c609bfc08d454fcaa64eb5e0aed2b"
  },
  {
    "url": "assets/js/179.5551adc8.js",
    "revision": "83ba1371344e6af39a0013efe3dfeb64"
  },
  {
    "url": "assets/js/18.458b22e1.js",
    "revision": "04c186f28f057d7fa1c0686842e9bbf5"
  },
  {
    "url": "assets/js/180.df2610ba.js",
    "revision": "afd801143f0149dddd2c96c49ca6399d"
  },
  {
    "url": "assets/js/181.f6645de4.js",
    "revision": "e8937a3269a9858129ba62be4ddbf05e"
  },
  {
    "url": "assets/js/182.500df76e.js",
    "revision": "7e524807b5940fd0e10cba6b3fab8e5b"
  },
  {
    "url": "assets/js/183.fb358fd5.js",
    "revision": "15886443a95b14e91d66d94d42f87ad1"
  },
  {
    "url": "assets/js/184.e33c10f0.js",
    "revision": "b6c0d6659efa87182e08cf9bbfae1f1c"
  },
  {
    "url": "assets/js/185.60ab8eaf.js",
    "revision": "c7381b8d9235b4948980fb74ca245100"
  },
  {
    "url": "assets/js/186.3d935f89.js",
    "revision": "341b19e20fe904ea9cea596f4d747e86"
  },
  {
    "url": "assets/js/187.4fca0cd6.js",
    "revision": "8290233809317a5c4c7aea5c3059c382"
  },
  {
    "url": "assets/js/188.a13441d0.js",
    "revision": "bfa26e0e63e9464fe80a3589f4598e62"
  },
  {
    "url": "assets/js/189.fa76f9dc.js",
    "revision": "3d3bcaf5d4e0ce4a32bf20fe4e76460e"
  },
  {
    "url": "assets/js/19.893b8db2.js",
    "revision": "aa304d97670383678541b71071a476e4"
  },
  {
    "url": "assets/js/190.f5d51d43.js",
    "revision": "7e1bc29e3e235390d302887d6dbf5806"
  },
  {
    "url": "assets/js/191.46034fe1.js",
    "revision": "a23d5df8b540fd0384f5edcd624a906c"
  },
  {
    "url": "assets/js/192.780c18a8.js",
    "revision": "dd9df7c72a1b25cba9c83aec127bd167"
  },
  {
    "url": "assets/js/193.5b35bec7.js",
    "revision": "3d9e4399041a0885b87bb6e1481fad5a"
  },
  {
    "url": "assets/js/194.296b4578.js",
    "revision": "d0d4ade55421abb7189922f92cf48023"
  },
  {
    "url": "assets/js/195.ed4400bc.js",
    "revision": "d46160a976a7a36f8e35d3d26bfc5f47"
  },
  {
    "url": "assets/js/196.1313ceab.js",
    "revision": "22e5de5b3951a86244d7b5a7536d6d1a"
  },
  {
    "url": "assets/js/197.cacd0c6b.js",
    "revision": "81d9ee800777bdfe8a19373ec2cff142"
  },
  {
    "url": "assets/js/198.b82bf6b3.js",
    "revision": "c21d0fc621c4c606da0e66df076db1bd"
  },
  {
    "url": "assets/js/199.30356def.js",
    "revision": "e328948e9c7616f55ddfcbcfebd81f30"
  },
  {
    "url": "assets/js/2.62df6279.js",
    "revision": "646b5965fbab317b63b5ed0abae47b26"
  },
  {
    "url": "assets/js/20.cb3fb305.js",
    "revision": "2574a2cb9e122a1b677c31536a333014"
  },
  {
    "url": "assets/js/200.e523ec43.js",
    "revision": "62506f0bf3e71b841a9e4b340f2cba43"
  },
  {
    "url": "assets/js/201.84bbd40a.js",
    "revision": "10a896a8f39abc29678b10e83481e10b"
  },
  {
    "url": "assets/js/202.ad1b3b07.js",
    "revision": "43ac15a55c87b6388e46bb85dcb08f8c"
  },
  {
    "url": "assets/js/203.94762ee6.js",
    "revision": "0c74cc45ff51e0fb666e86d25f02d45e"
  },
  {
    "url": "assets/js/204.f6e3d080.js",
    "revision": "79a7d03bf2bb9ed490c7a8fc91b91b2f"
  },
  {
    "url": "assets/js/205.d6ba20d8.js",
    "revision": "660d7227e49bc0ab4a31901782e4bb86"
  },
  {
    "url": "assets/js/206.7819169f.js",
    "revision": "65546905a1324260017e87f7735d032a"
  },
  {
    "url": "assets/js/207.bbc1a426.js",
    "revision": "7a1057ea3c4f418e6ff6e1ecbd6d5110"
  },
  {
    "url": "assets/js/208.12a2efc5.js",
    "revision": "8dfeb19afa8f6138dfdd81d9352cd4b6"
  },
  {
    "url": "assets/js/209.5e415d4d.js",
    "revision": "3309e23f87c91820575ff5717d382ca6"
  },
  {
    "url": "assets/js/21.f9bf68c1.js",
    "revision": "b50445822b86751cf9bcc2ed4e1e8519"
  },
  {
    "url": "assets/js/210.d27df1f2.js",
    "revision": "8d23f45d492094503849e55b493b0ac1"
  },
  {
    "url": "assets/js/211.cdf2d270.js",
    "revision": "e3635ba07a9ccba1e6950f9f4f9f981b"
  },
  {
    "url": "assets/js/212.c1ce0ba4.js",
    "revision": "c6ab9d1cebaf064966d651b5bec437c5"
  },
  {
    "url": "assets/js/213.e345333a.js",
    "revision": "c305c16af0eab0aaa39582208a70ef57"
  },
  {
    "url": "assets/js/214.c556dace.js",
    "revision": "33b89d9bb3d11e895d78ad2922f8fd57"
  },
  {
    "url": "assets/js/215.574d398f.js",
    "revision": "6e038700e889c1b67a3cc80455dceab2"
  },
  {
    "url": "assets/js/216.cd7b5d83.js",
    "revision": "4bd0329225a4c87a877d4fe1d1e45730"
  },
  {
    "url": "assets/js/217.3fdd19d4.js",
    "revision": "5039a4a4e129b4b3710e9d349e424e3e"
  },
  {
    "url": "assets/js/218.28d32ab7.js",
    "revision": "56041d64a1256c8cfb312ae11fee2d83"
  },
  {
    "url": "assets/js/219.87036f77.js",
    "revision": "37657c353c5473178d1bb7c38c0e5eab"
  },
  {
    "url": "assets/js/22.40fb204d.js",
    "revision": "6c628daa39f5affcbee2703581ab1140"
  },
  {
    "url": "assets/js/220.f1cf0345.js",
    "revision": "0d81a598431ef239d1d02db9cfda0031"
  },
  {
    "url": "assets/js/221.35372f61.js",
    "revision": "ca3648feb48e2337b36e4fb591407caa"
  },
  {
    "url": "assets/js/222.67ac6ace.js",
    "revision": "2efe8490b10b92f2783779b30bf4fc47"
  },
  {
    "url": "assets/js/223.4d254d82.js",
    "revision": "43b00f7ada11e131c97fc833e801aac0"
  },
  {
    "url": "assets/js/224.6e574f4d.js",
    "revision": "822ce2cf7c9a31b9370c9ad204532c2b"
  },
  {
    "url": "assets/js/225.bbc6925b.js",
    "revision": "8c8851b0f0298085a54248f14a6075db"
  },
  {
    "url": "assets/js/226.26a4ae7e.js",
    "revision": "93f3a7cf979ba5268769c7a1bd6dc026"
  },
  {
    "url": "assets/js/227.4077eaf6.js",
    "revision": "5b7e6cd974a14fc934cffa35805e7ee2"
  },
  {
    "url": "assets/js/228.46ba1af2.js",
    "revision": "0acdb41854b1b8c73b753492995e0e11"
  },
  {
    "url": "assets/js/229.f7e45c9f.js",
    "revision": "83840646e8204ba8695116618d2b5ed3"
  },
  {
    "url": "assets/js/23.2d173eb6.js",
    "revision": "17a6b54b664e4dcfc14461da070794de"
  },
  {
    "url": "assets/js/230.ba471d7c.js",
    "revision": "225450df99c2a9183fbd4fe222464caf"
  },
  {
    "url": "assets/js/231.cd0b1080.js",
    "revision": "2c0722f52df3301828e3a12a34bec1f6"
  },
  {
    "url": "assets/js/232.bfa24f24.js",
    "revision": "361fcbc66781064a2ac88f680f4e0c95"
  },
  {
    "url": "assets/js/233.73047ef0.js",
    "revision": "0263256f09d22784095a63818925fa7b"
  },
  {
    "url": "assets/js/234.44334b7f.js",
    "revision": "3a205c5f6dc4091f9e007dbad0ad9786"
  },
  {
    "url": "assets/js/235.9152ebf6.js",
    "revision": "594f8d3a95e71c77882e542a7a806a5d"
  },
  {
    "url": "assets/js/236.11f93c4c.js",
    "revision": "f35ff144e237321431e56bab41b12c18"
  },
  {
    "url": "assets/js/237.20492329.js",
    "revision": "7927b1ee86b7d262c1e6ba774ce13b3f"
  },
  {
    "url": "assets/js/238.7e8009ce.js",
    "revision": "52ec0e95378c6451daf9b56c47d91f11"
  },
  {
    "url": "assets/js/239.263be013.js",
    "revision": "9235b9739dc945d0798de5ad3a15ac83"
  },
  {
    "url": "assets/js/24.9ab865d5.js",
    "revision": "062b1b9b1daff674f65baefad5aaa666"
  },
  {
    "url": "assets/js/240.b9155060.js",
    "revision": "e8a1e9bb54bbec95184174af119a584f"
  },
  {
    "url": "assets/js/241.9a5bff5f.js",
    "revision": "351a6340d213d770591a6c5c884adfef"
  },
  {
    "url": "assets/js/242.8e7880f8.js",
    "revision": "8b1e3f7aac39febd1631ea7645a7396d"
  },
  {
    "url": "assets/js/243.00589e2b.js",
    "revision": "05551597afe5242ec7148d29ea4dfe73"
  },
  {
    "url": "assets/js/244.59c58686.js",
    "revision": "b14bed8bbe917311dc3bba0827cce993"
  },
  {
    "url": "assets/js/245.1873f516.js",
    "revision": "7eb9417a54fc949a3708db66320cb7e8"
  },
  {
    "url": "assets/js/246.d7a0af15.js",
    "revision": "59190db4667883f3e906ab98409a1431"
  },
  {
    "url": "assets/js/247.1cef0050.js",
    "revision": "5cc262f2a4735e1f6255eaad2c9a3c0a"
  },
  {
    "url": "assets/js/248.8c55210b.js",
    "revision": "e88df13b0c44cddfa29467814b9cd7bf"
  },
  {
    "url": "assets/js/249.99a05bd7.js",
    "revision": "573f01f5e3e63d6d1b5e28df98ea2785"
  },
  {
    "url": "assets/js/25.18906280.js",
    "revision": "a06513ce4b3ea1bc99a70c1b3b0d427e"
  },
  {
    "url": "assets/js/250.dd06f838.js",
    "revision": "54da3a900b874dc7831165716053fe1b"
  },
  {
    "url": "assets/js/251.58205a48.js",
    "revision": "5efc8e9cdf4b95fe3473e23b402b4903"
  },
  {
    "url": "assets/js/252.5cab34b6.js",
    "revision": "6c94744a0ebde70b31cae01bc1229c70"
  },
  {
    "url": "assets/js/253.2099b356.js",
    "revision": "57fa31d2e7c7a9132c64d5557348baf4"
  },
  {
    "url": "assets/js/254.04af179e.js",
    "revision": "2d160fdc5329cdf4e13daa0a670d0fac"
  },
  {
    "url": "assets/js/255.5324bbf0.js",
    "revision": "bfb899d8a52ea2f5b7e69bd7217ec296"
  },
  {
    "url": "assets/js/256.d98d863a.js",
    "revision": "5e9eb344899b3fcf50c1d57a9b7dd1c3"
  },
  {
    "url": "assets/js/257.3953d0ca.js",
    "revision": "1a220d4d3ac18083e1ed48797b1679df"
  },
  {
    "url": "assets/js/258.a80cb53e.js",
    "revision": "4f819279cdf8e02fff207cfb26050202"
  },
  {
    "url": "assets/js/259.7139add5.js",
    "revision": "616390d200fe43e28ffd2d44325ff874"
  },
  {
    "url": "assets/js/26.df06627e.js",
    "revision": "a627820a5c1aa3229737d9dcd9cbee0b"
  },
  {
    "url": "assets/js/260.e6030a2e.js",
    "revision": "bce1aa5acd886680ecae3f8ad6387210"
  },
  {
    "url": "assets/js/261.954d3d6d.js",
    "revision": "2e98a8d4946430a728bae90e98e0518c"
  },
  {
    "url": "assets/js/262.cb0d6777.js",
    "revision": "97183050d6fb2cd5a7d8c9dfd43da4c5"
  },
  {
    "url": "assets/js/263.14827097.js",
    "revision": "e30a299299de39e0fff2f17cc0aaaf9f"
  },
  {
    "url": "assets/js/264.8e7ce445.js",
    "revision": "19950228c68ce474dddd93f43a4802a1"
  },
  {
    "url": "assets/js/265.24fd1ed7.js",
    "revision": "2916ac34335c598a8096b342efde4e59"
  },
  {
    "url": "assets/js/266.0478031d.js",
    "revision": "ed90c8ab4cb31c7527f155ca6bba67c3"
  },
  {
    "url": "assets/js/267.b3d63f80.js",
    "revision": "37ff410a8201897fe27c753823bc2486"
  },
  {
    "url": "assets/js/268.5111e38d.js",
    "revision": "1f0792583c389b317194be24b2ecabb5"
  },
  {
    "url": "assets/js/269.22cb9450.js",
    "revision": "822a85c11ca15d09573c63ddb3968403"
  },
  {
    "url": "assets/js/27.b5c02269.js",
    "revision": "f29f35f9f2362fddaf62048ef1307e12"
  },
  {
    "url": "assets/js/270.0a766d47.js",
    "revision": "a6aba09416bd5b7065b39bce1f910655"
  },
  {
    "url": "assets/js/271.1d02f10d.js",
    "revision": "9746f49d9522bd0fedcf8d0932d27f4c"
  },
  {
    "url": "assets/js/272.7190e41e.js",
    "revision": "9374a99d044bcd9ee94815dc5ccd5f83"
  },
  {
    "url": "assets/js/273.f7c2494c.js",
    "revision": "92121449b9bc893e71240eb31d1ba807"
  },
  {
    "url": "assets/js/274.ebd69a5e.js",
    "revision": "8d1d667a860742bf389ccf84e52d2e11"
  },
  {
    "url": "assets/js/275.d49f5ae3.js",
    "revision": "d034e710df20887a0b0187940da04457"
  },
  {
    "url": "assets/js/276.766fac98.js",
    "revision": "e20895b0b81f8b1db361fe69ae0a16fb"
  },
  {
    "url": "assets/js/277.229a50ae.js",
    "revision": "d11a4c3dfa0f8a6c8ae52099fc70b83a"
  },
  {
    "url": "assets/js/278.b4de2176.js",
    "revision": "8caaa7637bdf0b54648c7df273f3740f"
  },
  {
    "url": "assets/js/279.763e00f6.js",
    "revision": "11a6d4434a244b6d8a73f031037e3ba8"
  },
  {
    "url": "assets/js/28.98f0f42e.js",
    "revision": "4f1e3414e996dfff970b64658694b077"
  },
  {
    "url": "assets/js/280.5406e14f.js",
    "revision": "819bf5ac7944de25ae652dcac8a0bb8b"
  },
  {
    "url": "assets/js/281.4f83421f.js",
    "revision": "2d91949e282dd13cfea9ae3290bdb51e"
  },
  {
    "url": "assets/js/282.133d4de3.js",
    "revision": "f2e0438fabc89283ed64f8dd9f5c5fa0"
  },
  {
    "url": "assets/js/283.e267d91d.js",
    "revision": "a2c397aa71ef0c4f28ff28265ac1e40c"
  },
  {
    "url": "assets/js/284.2f7989e6.js",
    "revision": "5ef0e0f25167b2fa842190cae193e3ab"
  },
  {
    "url": "assets/js/285.78862d57.js",
    "revision": "a2e34e53d442b79e83b2b83cf90aadb4"
  },
  {
    "url": "assets/js/286.6bb34cca.js",
    "revision": "73f1624744523a5828bcae8a5915ee75"
  },
  {
    "url": "assets/js/287.06dcf696.js",
    "revision": "92ac2bf54d7085f00e9c28d95d56d8c2"
  },
  {
    "url": "assets/js/288.43dba5d0.js",
    "revision": "97a76c419b2fdd18f93f694d2422e520"
  },
  {
    "url": "assets/js/289.b8da29e4.js",
    "revision": "b7e4829119289e43b9074b9dfaca10ed"
  },
  {
    "url": "assets/js/29.9f0cd914.js",
    "revision": "b1bc4e4eb3e934f49604bd3ba8bdd4cc"
  },
  {
    "url": "assets/js/290.ba6e4eea.js",
    "revision": "db39897d880924b5bf0303067f5cb271"
  },
  {
    "url": "assets/js/291.94113ccc.js",
    "revision": "247e3270982dce413d97f983c65136a4"
  },
  {
    "url": "assets/js/292.eff23623.js",
    "revision": "f623324510689e51eb9bf0e6970aa5b1"
  },
  {
    "url": "assets/js/293.b79599f1.js",
    "revision": "37e158b4db78e80675a45e79e3c48575"
  },
  {
    "url": "assets/js/294.944b5e4b.js",
    "revision": "e882b6f8fee6f1a6a549a03cf0666777"
  },
  {
    "url": "assets/js/295.a24d295c.js",
    "revision": "bc2db3f8dfd79d1f55317e3d013a73b9"
  },
  {
    "url": "assets/js/296.1a15c9e6.js",
    "revision": "8268bb40b788d3a41dccf04144309a87"
  },
  {
    "url": "assets/js/297.419ed031.js",
    "revision": "35a79e87e816cb09080515678fa1352d"
  },
  {
    "url": "assets/js/298.fab090ab.js",
    "revision": "d53b2cf8a2c6a4de45d0ce73af9259e8"
  },
  {
    "url": "assets/js/299.b698fe31.js",
    "revision": "6813fc859c4285a02507143ab649c1fb"
  },
  {
    "url": "assets/js/3.f6edf966.js",
    "revision": "dd3e6218463f0e761826d72243a238dc"
  },
  {
    "url": "assets/js/30.816879fd.js",
    "revision": "2a50e8ebb626a2911072e5355e2bc56b"
  },
  {
    "url": "assets/js/300.a5ffdf6d.js",
    "revision": "ea0a0cda46cce4785874a3c271d3da4e"
  },
  {
    "url": "assets/js/301.4e329883.js",
    "revision": "3a88e79c188e6ee1c95175b571557d39"
  },
  {
    "url": "assets/js/302.2888d86a.js",
    "revision": "a1ceb401348a0de648edeeb591025e43"
  },
  {
    "url": "assets/js/303.69d436a7.js",
    "revision": "ab20dff0bb8ef00922780120341fe7fa"
  },
  {
    "url": "assets/js/304.dfcd8d05.js",
    "revision": "0c318096f0edc0e8bf9068391503bf2a"
  },
  {
    "url": "assets/js/305.edef6be0.js",
    "revision": "005141e3399275ac0340a300d2aa4ce8"
  },
  {
    "url": "assets/js/306.d43bddaa.js",
    "revision": "53cb76ab48eb51abcbb5e722b59e2976"
  },
  {
    "url": "assets/js/307.eefc01f5.js",
    "revision": "f0d832167db44df13f7af5ba9bd94479"
  },
  {
    "url": "assets/js/308.00f3c139.js",
    "revision": "48adf1cf978fcfc515eaa36bb2f4c759"
  },
  {
    "url": "assets/js/309.7f133fa5.js",
    "revision": "c88eda3c14aa5bf0909098f40b8274f8"
  },
  {
    "url": "assets/js/31.cbf677ae.js",
    "revision": "74371db422e90c0e0bbfabfdd908bab4"
  },
  {
    "url": "assets/js/310.fe8c4a49.js",
    "revision": "193ef96514e599032ef1b01a215fceb8"
  },
  {
    "url": "assets/js/311.0c57a86a.js",
    "revision": "a29ef1c9066250fa980ae9a37dc04369"
  },
  {
    "url": "assets/js/312.266c36d8.js",
    "revision": "f265e44511e8b5915c743bbe63cb51e8"
  },
  {
    "url": "assets/js/313.3565a59b.js",
    "revision": "a784435db1819b4db2f6a5b77eb019f2"
  },
  {
    "url": "assets/js/314.494423e9.js",
    "revision": "8bea593b82b8c8669b18889403d8a701"
  },
  {
    "url": "assets/js/315.f7cbaac2.js",
    "revision": "ac254d5ea50c0f745a4a9f9419533a6a"
  },
  {
    "url": "assets/js/316.4729219e.js",
    "revision": "b63e8009bbc3e95d3528e864b019c044"
  },
  {
    "url": "assets/js/317.31674b3e.js",
    "revision": "500c7815a9661c4993440992da3ab165"
  },
  {
    "url": "assets/js/318.f836ea62.js",
    "revision": "074f28c782ce66abb9814e69945d3399"
  },
  {
    "url": "assets/js/319.68032e9e.js",
    "revision": "a79ecee1f9b4054dc81022dcf2c057f7"
  },
  {
    "url": "assets/js/32.61d2d475.js",
    "revision": "fa02d8e3f2d7e4d62570f74b3ff3ea7e"
  },
  {
    "url": "assets/js/320.de861222.js",
    "revision": "4e9f454abc048bdd645ed9b05fbeb62d"
  },
  {
    "url": "assets/js/321.8dde2851.js",
    "revision": "37ad33db08eb70ed691634ee341b4e67"
  },
  {
    "url": "assets/js/322.917ef077.js",
    "revision": "1f148d1d3cd7f261a7f1e9e0e0185d12"
  },
  {
    "url": "assets/js/323.6c118304.js",
    "revision": "37d8347486e7a10ee23039c7fdca81c8"
  },
  {
    "url": "assets/js/324.086acce9.js",
    "revision": "c15abee9594ac405cd128fd6339f9f02"
  },
  {
    "url": "assets/js/325.d22f6339.js",
    "revision": "3e65bf12e76ddf35c5bb6593b995ed51"
  },
  {
    "url": "assets/js/326.f32f8d3d.js",
    "revision": "ff0f39d06d98a1c6a2a3a563b4b64818"
  },
  {
    "url": "assets/js/327.986d8992.js",
    "revision": "bae1b964051eddf69a51964ae3101796"
  },
  {
    "url": "assets/js/328.25289204.js",
    "revision": "340b6b1973ef7026ae748a80fdccb13c"
  },
  {
    "url": "assets/js/329.fb8b262c.js",
    "revision": "da3c03d33ca1493c3bf5fd473c766e12"
  },
  {
    "url": "assets/js/33.d6cb2581.js",
    "revision": "11befe84d454d2aad854c4e15745fe36"
  },
  {
    "url": "assets/js/330.31ca560a.js",
    "revision": "011703e4e7fd5149542c8e2e37fd1f50"
  },
  {
    "url": "assets/js/331.27938dea.js",
    "revision": "4b7ca2100daab4bbfb0011810b15b89d"
  },
  {
    "url": "assets/js/332.40ea553b.js",
    "revision": "805b8aed8c6996d8f8c2351b718fdfef"
  },
  {
    "url": "assets/js/333.8837dbaf.js",
    "revision": "773cb5b3be3e97f64bcbb89939c790fb"
  },
  {
    "url": "assets/js/334.8b2c5894.js",
    "revision": "e032a854941ea18db8d50e230048fbf9"
  },
  {
    "url": "assets/js/335.f9786101.js",
    "revision": "e1e6e4c9b87a4ee73da45319cdc9d680"
  },
  {
    "url": "assets/js/336.aa04ce7c.js",
    "revision": "dc0eed071ae9079d2f848e7137415dfc"
  },
  {
    "url": "assets/js/337.15ba1e6e.js",
    "revision": "efbda7715fcbecb02bb008666001aedb"
  },
  {
    "url": "assets/js/338.11dd081a.js",
    "revision": "0301015a9007c15c49f55d27e9088517"
  },
  {
    "url": "assets/js/339.08920df2.js",
    "revision": "543d043439e3fbc2417fe4fac7979393"
  },
  {
    "url": "assets/js/34.8054d8a2.js",
    "revision": "3e97a080b7b57fce6a78913e413c4dea"
  },
  {
    "url": "assets/js/340.a92a0d56.js",
    "revision": "6a118abf724ed9f1209a8f8610127489"
  },
  {
    "url": "assets/js/341.9d49f665.js",
    "revision": "96587ae7ed3993e0f1d0b3d0d1000b72"
  },
  {
    "url": "assets/js/342.2eddcc58.js",
    "revision": "8a71ef087af17b1776480f5b53110408"
  },
  {
    "url": "assets/js/343.ecae0066.js",
    "revision": "d316158107212a52f1b00599c5947623"
  },
  {
    "url": "assets/js/344.13c5d9f7.js",
    "revision": "6185ea01de22677a2a048621969039ab"
  },
  {
    "url": "assets/js/345.3de5ef57.js",
    "revision": "6f5874276103a78f5eef03912904a52a"
  },
  {
    "url": "assets/js/346.f4d92b7d.js",
    "revision": "31d08e74da7e6540c494f35d8f232e84"
  },
  {
    "url": "assets/js/347.25e51e4a.js",
    "revision": "9add58205f6ecb069408910ef92c6f7a"
  },
  {
    "url": "assets/js/348.84ffa816.js",
    "revision": "1e800cf4977e3c137e137973577a614f"
  },
  {
    "url": "assets/js/349.e3d2d2aa.js",
    "revision": "b5f00cc0519166ddaf6195529f2e9e8b"
  },
  {
    "url": "assets/js/35.b88031c3.js",
    "revision": "4f5c8a6104c5bbde4efffdcd9d906a57"
  },
  {
    "url": "assets/js/350.455737b8.js",
    "revision": "f6e3dc14c7278b7a3cb2b2278b8dad1f"
  },
  {
    "url": "assets/js/351.2e7cb10e.js",
    "revision": "78df7e039f8a1ec663a9fb78345c308f"
  },
  {
    "url": "assets/js/352.e3b2206b.js",
    "revision": "bdfa59926923f5a35e6787232f62acc2"
  },
  {
    "url": "assets/js/353.c3e655c8.js",
    "revision": "4442c19b72ef13092f26828b922bf530"
  },
  {
    "url": "assets/js/354.238d0f69.js",
    "revision": "65e0f35b9f593352ca3118612fd3357e"
  },
  {
    "url": "assets/js/355.a12cd3fa.js",
    "revision": "f65c85ed5e9fad623846112893766a4b"
  },
  {
    "url": "assets/js/356.76f5816d.js",
    "revision": "909fff474bec0e5c3f05d613e6797e18"
  },
  {
    "url": "assets/js/357.11c05485.js",
    "revision": "f760550eaaefe7e7564c2f4991a3065f"
  },
  {
    "url": "assets/js/358.5208ed59.js",
    "revision": "eed1c56034cd3573b186ae39becb22ae"
  },
  {
    "url": "assets/js/359.9012cfbd.js",
    "revision": "54c817c9656496b7d60d647cfa9de89e"
  },
  {
    "url": "assets/js/36.ea406c2b.js",
    "revision": "8c7665444c54866ee9213ce714f2f3ff"
  },
  {
    "url": "assets/js/360.50b78301.js",
    "revision": "e8dae056f01334ed03149264593eff78"
  },
  {
    "url": "assets/js/361.d62d9a5e.js",
    "revision": "b3db63e99757bd7ac8ca9a95c2256c9f"
  },
  {
    "url": "assets/js/362.12e840c8.js",
    "revision": "2d7cd754d452d59f44db98a1e6e63830"
  },
  {
    "url": "assets/js/363.61f27ae4.js",
    "revision": "5cbd2912f2275006c71a1da2046f87a4"
  },
  {
    "url": "assets/js/364.e0b6b0f1.js",
    "revision": "196d5644856d7bcb0de60455816099a8"
  },
  {
    "url": "assets/js/365.9112fa4a.js",
    "revision": "3fd1322df51ff5724cf07cde3d98baa4"
  },
  {
    "url": "assets/js/366.fbcfb7d8.js",
    "revision": "eaab409d3ec844e018de7fd3c1a6b3e1"
  },
  {
    "url": "assets/js/367.6cd47f93.js",
    "revision": "1f40e1a19f6de542fdd238afed2f30a3"
  },
  {
    "url": "assets/js/368.2b2a30f8.js",
    "revision": "b453db84f1658b906c7dafe0302c245f"
  },
  {
    "url": "assets/js/369.e8f04a4d.js",
    "revision": "e4fb7672906a0a9a52396031ff9c6a0a"
  },
  {
    "url": "assets/js/37.dc99c852.js",
    "revision": "01a5ca87110a7ddf291a5227ccf3bf42"
  },
  {
    "url": "assets/js/370.ab70fda2.js",
    "revision": "633a23832cca8a3c34576e6a0290dccd"
  },
  {
    "url": "assets/js/371.c44eae0e.js",
    "revision": "301197ea0a8862a0f7081a5427889784"
  },
  {
    "url": "assets/js/372.0b6f15d8.js",
    "revision": "e4030e8662f0602fa5ef51b3a0f942d1"
  },
  {
    "url": "assets/js/373.53e492b3.js",
    "revision": "465bcb87df5a0eb00f6accca9789faf2"
  },
  {
    "url": "assets/js/374.c1ae5e6e.js",
    "revision": "5d48e8f9b2ec6a97e946235062584d3e"
  },
  {
    "url": "assets/js/375.f67adaf3.js",
    "revision": "e099d8ef3065728368838e30ea164aaa"
  },
  {
    "url": "assets/js/376.2e30064b.js",
    "revision": "e1683efc0a24ca5d0bfa6322673e89a0"
  },
  {
    "url": "assets/js/377.49cab353.js",
    "revision": "041968e71fa062aaa11c5b4e3c6535ca"
  },
  {
    "url": "assets/js/378.f01b71f5.js",
    "revision": "3e0b6f86dcdd20ce50f64bbcd318790f"
  },
  {
    "url": "assets/js/379.b6de9279.js",
    "revision": "b976e87f97f415362667fdbf5a3ac6b4"
  },
  {
    "url": "assets/js/38.21935f0b.js",
    "revision": "9fc213dfd16cef7b4d1aeba08bef91b0"
  },
  {
    "url": "assets/js/380.574197f7.js",
    "revision": "92eea945546161dd6d443d5845b51ddb"
  },
  {
    "url": "assets/js/381.261b5dda.js",
    "revision": "421fe1476424215aa958e7d36493c198"
  },
  {
    "url": "assets/js/382.9465c6b7.js",
    "revision": "1de191b61ac820491ab9eed1dea1dd3b"
  },
  {
    "url": "assets/js/383.8f105152.js",
    "revision": "cf5696a10015e829b71a6fae79cca705"
  },
  {
    "url": "assets/js/384.332e5b74.js",
    "revision": "5fec1cec1f22c0853b70fe658330f2fb"
  },
  {
    "url": "assets/js/385.f28e4b6b.js",
    "revision": "739e85db44553ae12f08e7de502cea82"
  },
  {
    "url": "assets/js/386.9c35936e.js",
    "revision": "4d614b2068de1c5b1ffe52e9c033ad9a"
  },
  {
    "url": "assets/js/387.239b0ab8.js",
    "revision": "4fc01e36e21e09d9469c71e02fdd81b1"
  },
  {
    "url": "assets/js/388.753ef66c.js",
    "revision": "13019c6978044803bfa25bd06a57bdb5"
  },
  {
    "url": "assets/js/389.6070f776.js",
    "revision": "91f66d31112725bafb43b188a09d4fc5"
  },
  {
    "url": "assets/js/39.00ae1763.js",
    "revision": "5d035f2b231401ebcbacbf2b40bb543c"
  },
  {
    "url": "assets/js/390.0966c7ec.js",
    "revision": "3f7b89e3857355f65315ca3c367cdf9a"
  },
  {
    "url": "assets/js/391.f9ff22f4.js",
    "revision": "cb56dd74ded8b2f4d0bd925425491366"
  },
  {
    "url": "assets/js/392.2bb4ee6a.js",
    "revision": "9a605b73ff16b2011dabdefe93ac57ce"
  },
  {
    "url": "assets/js/393.f8f3f74d.js",
    "revision": "e8c529ecdb4bdc84ad4b7084ae72d736"
  },
  {
    "url": "assets/js/394.7b3182a1.js",
    "revision": "9bb19d68a68d6fc46bd34487e3599a0f"
  },
  {
    "url": "assets/js/395.426438dd.js",
    "revision": "6df801219d9aa978adb3a6d1d1d6be74"
  },
  {
    "url": "assets/js/396.e982f305.js",
    "revision": "d8f55ef5098a3c04cb17170ec6578d28"
  },
  {
    "url": "assets/js/397.c05c3a7a.js",
    "revision": "77ab77e6c8dbe7cffdbcc39a8d1e0f71"
  },
  {
    "url": "assets/js/398.a40cd8df.js",
    "revision": "4121d2e2ac3d2d49d0eeb3de568bebd7"
  },
  {
    "url": "assets/js/399.4723d392.js",
    "revision": "1813d88740d881d425df23e8bda2fd9d"
  },
  {
    "url": "assets/js/4.700f854f.js",
    "revision": "d11b0501cfdf35e72c480edb6537e2ea"
  },
  {
    "url": "assets/js/40.84944bf7.js",
    "revision": "a09a00d4b33f6dac0d642721a11afb8f"
  },
  {
    "url": "assets/js/400.dde12881.js",
    "revision": "96b89a2806ddd02200692d3058987653"
  },
  {
    "url": "assets/js/41.89d3b9c1.js",
    "revision": "c9e131d1925fb877e2b6f0315a481fb0"
  },
  {
    "url": "assets/js/42.ae2b896f.js",
    "revision": "7ec7cb63b51ec6c02d61243fe2eba478"
  },
  {
    "url": "assets/js/43.b55158dd.js",
    "revision": "84355997f61e97051182e022b8662359"
  },
  {
    "url": "assets/js/44.8d374f83.js",
    "revision": "a903c0f8470e3cc2c224bcb7f6d223a6"
  },
  {
    "url": "assets/js/45.9bc82b33.js",
    "revision": "db59fbe663fef6d2b01db9e4b07226c0"
  },
  {
    "url": "assets/js/46.2ba3088e.js",
    "revision": "56a03c7ee3a7c1182385d1c3708358db"
  },
  {
    "url": "assets/js/47.be3a3f68.js",
    "revision": "93957abbbaac1c533b48446375d6dfa0"
  },
  {
    "url": "assets/js/48.9e5e3464.js",
    "revision": "5dc735b814bd0cb9d6fa2cae9e3370b1"
  },
  {
    "url": "assets/js/49.0f0721a6.js",
    "revision": "9702b7b5e2460a18344af7e40c202371"
  },
  {
    "url": "assets/js/5.bc7659ed.js",
    "revision": "c4b91aa1e0e0854caf99b2d6de640a7f"
  },
  {
    "url": "assets/js/50.20e76743.js",
    "revision": "fe2be205e3104ed7d67f27c1f1e41ff8"
  },
  {
    "url": "assets/js/51.28131e9c.js",
    "revision": "e5e519d5a2a201469f04e3d24935e3c3"
  },
  {
    "url": "assets/js/52.4b685dac.js",
    "revision": "dfc94f4cdabe3f51a55f6e1f1afc6991"
  },
  {
    "url": "assets/js/53.2e7cc890.js",
    "revision": "0bcf01d4be3beb25fbfa800cef425e5f"
  },
  {
    "url": "assets/js/54.ff1a7462.js",
    "revision": "34f02bafc5f963aed486ab9232a3b75d"
  },
  {
    "url": "assets/js/55.89632864.js",
    "revision": "8906b55d32a57d146353063bdadaac08"
  },
  {
    "url": "assets/js/56.16b1cfd1.js",
    "revision": "6e2e03c7fba0482fd9070a1300ba0d28"
  },
  {
    "url": "assets/js/57.ce871865.js",
    "revision": "d7697b5044cf1eb145a418ffc77b30d6"
  },
  {
    "url": "assets/js/58.05263c4b.js",
    "revision": "a3eda7f9938440da7ae8fde9b66a111b"
  },
  {
    "url": "assets/js/59.0a05ce29.js",
    "revision": "1ac263abdeb4472c6678a2b1344e7833"
  },
  {
    "url": "assets/js/60.553b8e56.js",
    "revision": "2a2a910e550fd0598bdfeb5b2266db5b"
  },
  {
    "url": "assets/js/61.5892944e.js",
    "revision": "26bc640c58d3ff87eb03f3a89299cc61"
  },
  {
    "url": "assets/js/62.c0ad9773.js",
    "revision": "11cd364939349378068606df3fb5ebcc"
  },
  {
    "url": "assets/js/63.210588ef.js",
    "revision": "ac717dea52698d83ca816330b6bc3141"
  },
  {
    "url": "assets/js/64.3e814fa7.js",
    "revision": "44f221b7f2abf490ce71ced3c8d735e2"
  },
  {
    "url": "assets/js/65.fb5b7951.js",
    "revision": "398787fa76a5bbedda78f9c8ed917312"
  },
  {
    "url": "assets/js/66.9153e624.js",
    "revision": "9750f8e045fa325a18a208d1cf248fa2"
  },
  {
    "url": "assets/js/67.b7394f5c.js",
    "revision": "a16990f0916fc9f6ac3facf490f19d7a"
  },
  {
    "url": "assets/js/68.a19a5ec8.js",
    "revision": "dd6f643012e4827bfb51eb1ca1967210"
  },
  {
    "url": "assets/js/69.417cd219.js",
    "revision": "e05ae2a159e14c4c4fb65037021af211"
  },
  {
    "url": "assets/js/70.70eb7242.js",
    "revision": "b79b18971b26b96e961ec4925c7a2fa5"
  },
  {
    "url": "assets/js/71.cca0a84a.js",
    "revision": "2b525e01d41de38acbb752a8b8c370e4"
  },
  {
    "url": "assets/js/72.aa8482cb.js",
    "revision": "3dd32262138185939b93358e5ccb8c3e"
  },
  {
    "url": "assets/js/73.342f7fbb.js",
    "revision": "3b4b1775c2ddb44c34d3cc851acc5384"
  },
  {
    "url": "assets/js/74.da24bbd1.js",
    "revision": "4f87d8a52110ead1e827ca5c8f9c373a"
  },
  {
    "url": "assets/js/75.dab9f251.js",
    "revision": "f04739eace6d9ba1a017b3b2f3a174f8"
  },
  {
    "url": "assets/js/76.be097733.js",
    "revision": "84fefb50dcfa648e0976ff2ea4db1051"
  },
  {
    "url": "assets/js/77.d5293d12.js",
    "revision": "970d7ca0292a95cae2926ab1119285e6"
  },
  {
    "url": "assets/js/78.f86518bf.js",
    "revision": "b0eadd605c9ee4807bcef624fd88a796"
  },
  {
    "url": "assets/js/79.67af4bd2.js",
    "revision": "69cc1c55653d17a82299457b7c2ec50f"
  },
  {
    "url": "assets/js/8.27b64764.js",
    "revision": "3153ad75390ba3e2526d89306fae0227"
  },
  {
    "url": "assets/js/80.f464b0d1.js",
    "revision": "61dc4538439068cf037fd9d1ceef7394"
  },
  {
    "url": "assets/js/81.39d0ff3b.js",
    "revision": "f183aad894a5e2d515757bb1c9e35644"
  },
  {
    "url": "assets/js/82.76b03cd5.js",
    "revision": "ecbec91e99a2a9524f2473836d4dda53"
  },
  {
    "url": "assets/js/83.21f3971c.js",
    "revision": "d2b789d0bc4fefa8136c7bb01a9157f2"
  },
  {
    "url": "assets/js/84.7a6dedac.js",
    "revision": "030267e5bf8819a4d62a93461d85df3d"
  },
  {
    "url": "assets/js/85.dba7ff09.js",
    "revision": "fd91dcb0a4e75afbb4f9500ac850f7d5"
  },
  {
    "url": "assets/js/86.fe9e5af5.js",
    "revision": "d52804304a2263e0523ca0459bf79f63"
  },
  {
    "url": "assets/js/87.bd2e0708.js",
    "revision": "c18932aaa5167f8cb04f1b69c1a31983"
  },
  {
    "url": "assets/js/88.a19a9a94.js",
    "revision": "ca517891cb8843096981290edb4e416a"
  },
  {
    "url": "assets/js/89.2cb9ad2b.js",
    "revision": "880fbfdd0f4e6dc494fbc5af349d7326"
  },
  {
    "url": "assets/js/9.553cccf3.js",
    "revision": "1ccbf8f89b7e0c6080217e46ad5de487"
  },
  {
    "url": "assets/js/90.a63ab81a.js",
    "revision": "e93c34a4dd65638d979b52b5fa597da8"
  },
  {
    "url": "assets/js/91.9caf40a5.js",
    "revision": "35d813aefafe7e0ddf63d5041463890d"
  },
  {
    "url": "assets/js/92.9fe48ddd.js",
    "revision": "b1fcd1e4426a23cb72cc909a0109cba3"
  },
  {
    "url": "assets/js/93.77eddc22.js",
    "revision": "3e45b68ac0a394808c3d0386e8ef72ac"
  },
  {
    "url": "assets/js/94.333b0eec.js",
    "revision": "3cb239af899a84f6bc9b9554ae6e9193"
  },
  {
    "url": "assets/js/95.85d7e76a.js",
    "revision": "a572906fe3686a2eb3b1bf7af51e5021"
  },
  {
    "url": "assets/js/96.2c8bbe18.js",
    "revision": "a422469a6564e857d2a4685ba5cb6402"
  },
  {
    "url": "assets/js/97.f0dffbcd.js",
    "revision": "ee4c7b66120cfc6e1080c6b56f2eef1d"
  },
  {
    "url": "assets/js/98.58627c62.js",
    "revision": "90ee85f8930dd6971024459471914dbc"
  },
  {
    "url": "assets/js/99.cc93dc97.js",
    "revision": "6994236aeef0277cd71536f49c03f1f2"
  },
  {
    "url": "assets/js/app.8dc3a674.js",
    "revision": "121aede63f96581f9b40f8f8f0f71590"
  },
  {
    "url": "assets/js/vendors~docsearch.363a6218.js",
    "revision": "06bdfa786bd2c3a1b88aabb61b56d094"
  },
  {
    "url": "index.html",
    "revision": "8a5b4de6d60bc15639c830e8a76dc3a6"
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
