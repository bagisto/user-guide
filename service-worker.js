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
    "revision": "df9efcc3bbaf0d08be6bc6db9f5879b8"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "86d4cb8f31447bea6de54609acc2cfa0"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "76678fbcb114b6e49c15f12c4c3a40e5"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "5cfcb7913e12cbd9bb9a2b0c4400a4a9"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "2603c9f8b397e2d3e14d7f7386a17002"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "b06153dd0980acc357368a353eaf78e7"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "4dc41f63649d0738a1f338d1029d3bf9"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "ee74332a3df1af0bd28d089290763a10"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "3fa147587b83ae1e16629bf41a4aac10"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "8afacaafb702b1f5d21a77a1bb66fc8d"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "ac6044f63c2c5fde7ccc80c1ba653e55"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "bf0a98ccfd44f5239690ace672fda8ee"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "0955d4099a06f25c28273614781d4a99"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "c3e1be734023cf5ef8b6f93432f44bc9"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "7845209fb338a164992f229302852e06"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "f63aa464df40469d91cdaa9f7b453bef"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "2397aaadfd4b12071d02503efc869dfc"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "64ee4227515a2e7409f4cd987dcd25e3"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "1460690e784aed9de3b8f9ccba28b8ec"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "ad3c4ad2b8b4ccf1400d124af11cf3fc"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "96e4e79a841a86bff4806ee28d4ab63e"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "bd23cac7dd4da500305e39439ccdb422"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "9751f63d9d4bd1147c80fe68295de570"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "a742e87da2de27fdc060c2a2eb722a97"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "9d1eefb4517d81ec7b4037d30331e572"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "222f35ffb15f1582d9f7fa511946fc10"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "1587d82073b975d1546bac5c7a22f63a"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "46562f2927a16bb968f3fb32c97f277c"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "0831612b49043029fc22d6afaffeef4c"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "e3d2bb4e4415aa57de8bfe6dc608baa5"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "c38a7a38ba4f114686f94c177437b46a"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "25f3f89cc48ef6c0cf68e50b7ff13129"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "f574b6d442ab03e093d076feb6fffec4"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "97e723cc284d0041621dcc1397a8fa80"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "44e923b110a0cae104c09ff2f331d322"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "e84d21e00af4dbe30bc942621fe880e8"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "3c625379b64d9df38bceba32fc0a5606"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "cddb24b3f18d60ce16e072fb854df86c"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "890a465cb60853d7a53effc5fcdffb95"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "fa1a07f25348ccc35a3433a9ca5ba7a9"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "ac31aa14692ad828873da225202ffce3"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "f09170514076b76768f62f1fc91e192b"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "d111196544a4363a3f57468f6574f1d8"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "a71696e5884093d6c63bde9d1b0dc37a"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "edc6b789e060c9dacac071f51956812f"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "5c8ee8cd6ffb27b1200ca6c51c43be10"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "472eb4785386f2b3de3913cca6ea6c9c"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "caeba9fd0e1c21d0a1621341c9147f53"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "a198ea901379ea5fb6ff6998e4f098ec"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "ab3166e3ee79ddf176d152eab8955708"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "b812e07e42ea9b8c29683d6e4984e2f7"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "253634bb3a4134a666dcd4223f9bd6ea"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "08eca71ea8687b89dc168a35b5f7a465"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "89a3d1abe6f7d608a4be055bac1afe86"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "9f48247bb3faef603a12c1c07fe3620c"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "a5446612fabc66cd48fd17b687ec81b8"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "0303caf99b04aa8bce19ab3fb76d93de"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "2661de85fc9797261c07b272f46546f2"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "c0d05f5ea6a9ee88c97efdf773fb466a"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "3cb64b290c1adea3b4bac7c1d8dc045e"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "5f0ec06725602a74d1ee9c021097a67c"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "a440cdbe5670c6e871fb552c970291c9"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "a3180e8b5bf45a404c6956e91ad909c5"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "e0f1b39eeb1c52897015415823612f1a"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "52e34aff807e7e2a42a596dd2b5c6f21"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "12378319ded99e9a186ba239bdb44364"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "785b3a009c6f07cd2d83d41d4c6357ab"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "d0e3de37e8a00734b88f0f7a91e57ab1"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "dec6082b122cab8406edd425e707156b"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "5562e8aa596871cd749cb209959ca1a8"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "32f5d0cceb4c7d4e6eecb9fbe69489a6"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "f7d7984881f2f18dd2564ecea70d00b1"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "45a96bbef29643a8c5376844a99a49a5"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "de14e9aae1799a875179e968e652f049"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "040cc4f0ffb4d06b6335daf7a0465297"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "76e348eb912a97eee1b69e581b68d591"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "18589f269e2fe270f72e32847f93b226"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "d5852c698274547ef110ead92d2e3766"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "ae151db3f5b0c0fa2a2bed2cf6b798d7"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "a5739bdd512418904abb56f7f7bb70c5"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "9de38faa9354e6d48f81a1b553aa7844"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "937936933ce3479e98f1c43b2551251a"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "0e9b373909cd55f383e842a8e30cccb0"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "30679d6c95929d9df26e652a3672f441"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "f8d5e0cee75ee64afc5279c9eb9d38d1"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "3bd206b88a81ed7aae4793e05123032c"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "3035e3b6eef01fcd38188bd21329ed5a"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "aa3e6cbf2968a0f41f7b952af2b25c23"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "d2a759b8524965ffbe3a2ea4fdcb90ed"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "a9c04723735bcc7e5dd772cfa3642772"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "b586ed2fa204fc732cd5dcbe20c4f0f0"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "00d6678534144543ee542cb190c06de8"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "a0572b7c3cfb83f1c670640de0b2b91b"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "9afdc88faf5bcec03e782642a982812e"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "b72d84270ab7e294a66b97a693407f0e"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "a9d916bb5717a011497eaa46d8b4b453"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "95969d5786802d76e33dcf73ddaf76bb"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "e0bbbc8b58232cc3309f21ae708eaadd"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "79e33ed957f492af47963a67a68ee5ff"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "ee7cad0cde94571fab8a6af2d9217abd"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "f15f4df6f2bcd33a77febc16368a6a2c"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "876f1c6e2fd10fbeedcda4a18b3faf2d"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "ebc238d65803bc0f2980782782e4e2b4"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "4f2787046a1a710e90d1d490f2e3d5dd"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "6523c3845c948daa32f8877079185bb2"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "eb1434a8f14312cd4d6a707b62e8bc12"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "4cd67011224eca8ef87797df14a057e1"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "8e512d50ebf85578b35ab6473bd9f3d1"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "b888df8b82e14632433e73d23442041e"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "f68bd41a14c113768fe4d48063524b18"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "d421ab7277f0e12261ccc76981412a2c"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "43f0baac88490f4270328efc9d22df86"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "1369ea5dcba636566fca2e956e4d33e9"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "799a562c7eb60e5a06935b6de7699f8d"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "f5b450d625e50bcf5a6253f309f6c293"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "1b8542645ec0f0c7c6c82f2bed687427"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "668a5164e47f0698a7adc233db56d7dc"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "00d966268f16476c50cc509b26a45420"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "2b11b84d0c3051a367d7f5fb674fbc72"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "8c8f3a8be8f9de3461a5745debc77bb8"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "e6384341b48d841b074359d2e5b6a722"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "560653a65d2c2b5e1776bd9efd653bec"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "bdb028913c38b0254bd366e416b92666"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "5f40845290814bba403821d4964439cf"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "452129854f8409d8dc966b63b67cb018"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "f1b7e67c7058db94eb68c423c5051964"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "d6d1212023aa34dc484a65695fd89908"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "d15e70e59ef58eaab06e26ea14d8719c"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "2c4a9c69ff5a4162435d40182d2bf898"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "103105b8d73b3488e0d3a08b98c39e92"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "74c79104497a0afd295be4a2791de116"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "26dde155b7e75f4e2c746f019d32ef35"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "c25251fc54dbed2ea007a45d5ab80c29"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "41c9806286dfb26df69d134c56fbbee0"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "8cb74fee409f6247157db1d9ddf10557"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "bc04bea721bd412c5b6e9b994ff68e3c"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "fb8b383659bc7f47a6836a70139a91ee"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "19d8c5856383b1d4bb84d1793c8039fd"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "1131c13c14d13f7cfac2dc02744b707e"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "fb58ee6e9996b49c888f9e5b7528b05a"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "62df03afb8431ea2a01b6b1d051943fe"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "f335ac5772d2ba41d8c7eb0312323f3b"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "f73f8799cddff50c5f877a7fa22b08c6"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "04f80f042e3a50de9a4741493ba9d2f4"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "d30663d270840cd37b928e9dac9b466c"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "8b905bba7c2ec91e6d3cde07f2852784"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "8e6256a3553064d96203c4402bd30c3f"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "5f7ac21134b6d8607609fcb86ba3c43d"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "94d4f6e2b2bf1de4d8eede6bf4b0c486"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "c7a6952d60bf0931739c03f82ace8207"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "3486610172f9845c6f13936c0acad3a7"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "eb33497ef4ac2f82d71f28ef6eaaa7c9"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "0ab9dc7b2d05e4705a680b757adc9b72"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "41e2ddfb4d6f112cae618f1d4eef13f9"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "fc35e95968f3a00b76a6dbc0f6b683dc"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "eb7116953202c78d2160102f29cb9509"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "d4835c8647b9006427425a53e459a44f"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "f0bc7bef62a4ee3cf596aef160daf165"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "68964268e6f163aa6f882e3d7a539efb"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "9a32baa0b17aa4860459418aa01697ad"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "6bcf3a5f7f7196d25b170ba55a5f7089"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "3a280e841ccfee614537ce800ef62980"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "977b762bfeb66cbbc927c3024702e886"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "32daa6fefc5c107e7cc91a5cb8e00d8b"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "06b7686d362f7d7a646acb145496d75d"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "7bff3cc032e68eed93a18863b6284c09"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "84a8eb60ed1b732b6655b777b267ca0e"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "01a52bd70835310bd99b49976f7df83c"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "986a7e747203f3e70dd1f8cf5de206c7"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "1df72e6433e6f6825fae5c4ab41251d2"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "aae86df9223986bbba7effbb330188f5"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "6001204ac641e7d4160938da31337014"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "d79cacd97ddd94d1ebf272740796c65c"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "5a2adfd342ca95d05d3de26a0566a5c8"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "73ba7b41600fa88892bb5c0203c4da09"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "be3c6c8995f5bdf69453cda9329fd63a"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "27d033da39a2d592bd319b6d9dde4fc8"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "6f83c22686d6ee0af0bab02ad43b9f03"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "f507e5752c548ca34a6457b999bafe97"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "71d154c8166c64b5488267fe07eb3518"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "b7e35f6f40c21ac11a44aacc38335eb7"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "9bf46da6e8e9696f1cfa8bf0a4b5d1ce"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "80628fe59248b806b1a12761ecf957c6"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "dafa158ac675ff1760c00aa97d5362b9"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "b2a3e177682f0c16d932b77092787592"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "16a755a3f61e92464641b45fbfcdc41e"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "5688170fed8f3b4df96c06aa227e02c4"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "9e817e0a15265dba968cfd5018dfd2d0"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "184baeab1427a0fd0cd8f3ffdce2e994"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "777772cdd20ae857ff383f0f2ac2b461"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "c30b8d595178b33a0eaf2577e1686266"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "b977444afcbd4e29341a2fbdcb58a26a"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "3fb18a3a50828eb94f536ae7a333758e"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "82a7ab5ffafee08996f91d3eeceb4b47"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "e3cb750d30491779e588d9a32010ccef"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "d5a0ef06d04bc6dc8a35408adf8ff75a"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "fa984d2a5efd53ea45142edfc2ae2bce"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "a2f143978289d1896712977de9216512"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "7d1ad7d442eded8e191a19f6b4d9abc4"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "3f6a32fcf4d3a75c177c8618e04e5301"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "f61616110695448a7ecdd1d0bf3634a9"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "c416036298309d3a7af453eef226345d"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "40e55bdb09ce794d3c5638a0fc43209c"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "326b8cc77338328147533c3276f4cc4f"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "cd93b596f5df7d7804c84dcd685ffa2b"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "10f970f031d1f9f7f6be4eabf248beac"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "7fa13d138b8d5a2e2b5309c2169ea4b5"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "a315df2249c66656f8e8474822c5792d"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "6fadd0de1f238fb74e3d4cbd32b1e22a"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "8a7771856e001a8e2a2f513a35e78208"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "fcb7361ebdb36c682f29f90f375db267"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "a13043879a5cc7de4aa709712b309f80"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "bbf701f6bab9e2e1817f6f5d91f6b543"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "73afe034af8ccd8ce29da859a6af8198"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "4ec1fc6cabd242ff3fca38bb2cd25234"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "4db900cb68d40ff156d77d687bf6d9f3"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "dace846851550cfb31e47fe2dcb4e80b"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "3b3d9e98436e6e4145563887bbb1ed5f"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "36abc386026426a6da988a792e4d14dd"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "77ab4dc319fd3ad1d4dbf7b2a4d4bcf8"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "c8573686ac9b77f2428371a7ab104724"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "b7508b058869765f1c223116197b438b"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "ad95fe60332a32571fd6809437b4e8be"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "34ff85ecd8974813ef6d7d0eb1928a14"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "a73ca54273ac1ad71db7a51b8d4ec6b3"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "e589cf16c616d37e7d93528f0f8fbcbc"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "44cecc2d1c40bad4e05ffa16bd21452d"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "15577c3dafd1aba30ca34e3be9de8403"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "8cefccc7c6eee47628830984acfd013a"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "b1437d44f1773c97749d4ae6a156cc93"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "8851bce3eee680126dfbe7fda7e579fa"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "152de1f7d36bf49fb444ae982a379cc3"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "82b5c04df343a8856da21d98550e2209"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "ea4364f67a310b78eb144fd20e8a3bdb"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "bdd2bc95ea0f2fc68672deda9692dab0"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "da4cf7f29c97194778366bcd562197fe"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "ed47aa1e0227377596972c822e773244"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "cf5c7d2c2957f802623026f97b52e391"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "5139c2e668def5e82dba1c78f80d410f"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "92f719975d402ffc1da80b75497292dc"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "47258943281fc2aad7bbb9c92f2b832d"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "8fee73a942e9a180442059425178f26e"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "6d3bb70669c346a98f45c2070258629c"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "9a1bae8b57bec69d2839dfae04259bfa"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "c8d2e16e2cc4a2e20a30570963036a70"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "cf6e2bef7795d6d2a41af11545c4496a"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "88b8a822e7c77eb249619f4eaa549c85"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "d7d52757dffd111dfb326ff76525ebac"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "a5fa40a661f092f181a0a93dd3079e8e"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "7594dc4dcdb9fe38b78b9155bca012d1"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "00254e2268dd742af8564b775b0a7a5f"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "5310813e1fbb093255f0724d47167b5e"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "79619ac014896498bd89a8095c6733f7"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "f75123b1825625ba58aba2454c5a3eb4"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "36629644fddc822c8947337fd9a01d1a"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "abe86fbdd38760d9a6538d46cad2cc3a"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "4ea985962ae01d77654525ba7582004c"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "b086b80757ef829012718a68235ebfa6"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "44412e52d9ae5ae66a52c157611298a5"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "ec3aeabfea35e3364861b7a7970368f3"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "a605093654f320782e1a80adb8a94df3"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "fa557349533aab5a37f498f76ba119ad"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "de30e85e4379180990bb00c48aed2f54"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "b50812d2af784aff28efbef25df30c79"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "ca6555fb88e3e1226cdda4942c3e5b0a"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "49c7aa2a1e3b9f27c7ee704189f69ab8"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "4f6861fd132a7572f12254367e63d577"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "1adaaec8bfba768e1ddf3f379a94df03"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "95e849e7eeefd51ddfc0596b25181bcf"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "d184f2cc2711d8d6b9284d828a46effc"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "d1f0a7f47959bc7f8337e762ffa023b9"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "8528bd631777bd557d32d6ab9cdc7201"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "4746f1fb405677664b40b69fdaead6b1"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "dfc3344be876048ab5f7a798d6128f32"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "703a6450861b8112cd02a0e6955dc344"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "8c2a03b4cd37e3c1e80471c29d0b5b97"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "2cba6982d6ca8147822de157a5a5d331"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "a63b7c0b732f9113ae2b579808b4e38d"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "9acf639a73fa35c3b7082b183c5ae1c8"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "d35ebfe33a9a184ebf29520f3dbae4a8"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "fb7e9b1c84427e8f6795b232307607fe"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "7209ed446960419b6e170a358ae17229"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "ea79f48028da5629bddb9be1f57129ed"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "c6836ee961a7947dd8cf8043a2085c40"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "3a20e42a28f43197f3fbaa992d9f4c84"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "79142ef3aaf14a84343f3a9d3daaf048"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "064e216649f92b96ee5673c8de2dc512"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "56233a2a860f35b8907bf39c383cf9c6"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "6f5e08ba0602f52af64cfe871467741f"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "4f5e8d18f2e74833309b1a627c850000"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "c40994d824bad79e5174dfbe947bbd1e"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "7c64910367a00fd4b5739c556245223a"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "2cfbdc3dfa2c1ab7f994499c774ee486"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "e5785cb35a22019c43192d311b77db62"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "ca53a1f554a57272aacf67c9a8f287e9"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "285845e398a315635204e45c595f46b8"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "0084ef55d86d14cd3286aa4bdbce0c53"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "3d11b763884c0c63647a396a6bad9b5f"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "3637edd460bf875be1d098c572aa360a"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "03f4821e778c25b2bb1adc61ccb6b745"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "7d1351fa0cc0fbdf8128825f4e710499"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "eb4f8ef6eaafb2c957fd39fccad1393f"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "14d2e97642b0d604f467831d3a411a41"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "e086da4e9bbd52cec185bc38cc306522"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "00127349b2b3e3e47d2ddf748746904b"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "b72cb0e59d42939252789ca3fc41d72b"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "94d14599f3ff65404283356db9386e5e"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "0171377552bc124301fbb5793c6ef85e"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "ca0472328737eaf4a538dc10a61ba0e5"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "6a22b0436ffca0ff98eb14a7a06d7496"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "3debccdbf5c5786e57ff7a2263abe472"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "76f00d5fd234ded2a775da7f596e1a4c"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "bfd0f5be5197a94dd052ea0035fac573"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "dc234a3a0e30419df32dbee8d142615b"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "cb30be008e665cf24b9ba02705722707"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "9c1e0cb59409a74906d42ec879a96afa"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "fbdf57109040596177fb9f07112a3bbe"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "6ff825e3b1f8fcec6ccd9a0bebcef84d"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "ef785618f54020fa0198567cde8351bc"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "01679f17a756e266b0bf4acfa412c463"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "e65b3c8c9420d009a27594d2cdbe9cf2"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "bb6be2e01444e822b1b57226af67555f"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "9ba2c22755bab9ca70a3686b67800e5d"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "84455ac8aa3586b3e6444929577cdfa5"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "e5cdac5c5adcfa24e8b8441615328c06"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "792c24457179114b4fa511584b6c83c1"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "8144dfb684c23da990fa7a2fb4af2b11"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "d2a532f807f20256e97168c9407efd93"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "7f65e91e81d3a80d910ce479cf9bee65"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "01f099085de9ae1c75f508a12dceb93e"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "d8daea68653f95ab9f87e75ef67ef73b"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "0885ae5ba0e895ca26ec04fddaec3293"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "991d27e3f36e9a1614e31759f7400c68"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "3e463ab19d0a327a8e3f2a8beb2dc16d"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "6c15b74be155194957d83fa0e8a34621"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "776b5e2b3418eac05d358cee1fbb986a"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "e864e0fb76c60aec88c7d903501edafa"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "0da818bd447c4766aded4b2fb2a6dc78"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "45e904ede6cb05dbfcd70ef0380d91c2"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "29eae1a0d4a9702939ffca682938c184"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "5aa6cfc46f2ec68c39685a77041c8566"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "30bcb5bc838692d1abcb7414d55f10b9"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "ddc1300aaee48f5bb5790311611e337d"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "c87be59e1a5cc9e30b31afacda65a40f"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "73a66926b007985dfc8fae2b97f3e76e"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "a09f5dc9efa4a81ef4b36fae92c9f4a3"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "4e239299760fe62a3e8a74e0228275d2"
  },
  {
    "url": "404.html",
    "revision": "7e77ce278b83bc332bf84fddc921da83"
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
    "url": "assets/img/4-create-new-product.cf9d0665.png",
    "revision": "cf9d0665acd501fe45e531fa6ccbe3b1"
  },
  {
    "url": "assets/img/4-customer-product-submit.53ce57dc.png",
    "revision": "53ce57dcedb1e97bfb8fc80db862b163"
  },
  {
    "url": "assets/img/4-quote-info.7ab8fc9c.png",
    "revision": "7ab8fc9c64238e06cc43e9710cde6b7e"
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
    "url": "assets/js/1.06ee0887.js",
    "revision": "d208264c1f911f7bb3ca025bf54545d4"
  },
  {
    "url": "assets/js/10.80a8210a.js",
    "revision": "e3aa6964ff6dec846c04b73db746f3ef"
  },
  {
    "url": "assets/js/100.86659ac8.js",
    "revision": "909a45952d7d19dd35690206ff593010"
  },
  {
    "url": "assets/js/101.e380385c.js",
    "revision": "324102ee1e4909d730fc952e178df93f"
  },
  {
    "url": "assets/js/102.0a353dc4.js",
    "revision": "a2f23468ac8c4f059e3ac0e0bbc6acc8"
  },
  {
    "url": "assets/js/103.e1b19e6f.js",
    "revision": "d0d1a7b9a2557e19c23019d689f83dfc"
  },
  {
    "url": "assets/js/104.9b53e1ce.js",
    "revision": "0aef858123e551cdd6da0974822f9311"
  },
  {
    "url": "assets/js/105.21113586.js",
    "revision": "939546cefca99d1024375ae382a66f9e"
  },
  {
    "url": "assets/js/106.05e6f5a0.js",
    "revision": "220be44a382ba6b005f4b42bfefde30c"
  },
  {
    "url": "assets/js/107.89309da3.js",
    "revision": "55c58a4f4a00a2b5dfdcaf9f09e8a6e8"
  },
  {
    "url": "assets/js/108.c0cc2681.js",
    "revision": "647159218c20fc6fa1c3406d5ebcef14"
  },
  {
    "url": "assets/js/109.c6d190b3.js",
    "revision": "744e749f2e9247041526960a2082680d"
  },
  {
    "url": "assets/js/11.fac5226a.js",
    "revision": "fcb684a05bba716a275fb2f3f4e7dfc8"
  },
  {
    "url": "assets/js/110.aa89365e.js",
    "revision": "c80bf491bea7bd96c29b9e0d972d463c"
  },
  {
    "url": "assets/js/111.86f7cc3b.js",
    "revision": "e8349a335ddb9190547f2f76cd265f0a"
  },
  {
    "url": "assets/js/112.92b6b002.js",
    "revision": "233dbb8606245112e1ab6a63e0f7ac09"
  },
  {
    "url": "assets/js/113.7660b228.js",
    "revision": "568cef1117a0f6608980d169a05977cd"
  },
  {
    "url": "assets/js/114.a8247dac.js",
    "revision": "deb9f5202aba857ab6b5c668c30221b5"
  },
  {
    "url": "assets/js/115.9248a81e.js",
    "revision": "458e0cb8c3a62f5148936791c28bd9b6"
  },
  {
    "url": "assets/js/116.080bea7f.js",
    "revision": "e0a88710e04f80e28dab9d279a48289a"
  },
  {
    "url": "assets/js/117.f86967c0.js",
    "revision": "00cfc378e0556da4d0ef09a721c0168e"
  },
  {
    "url": "assets/js/118.6735fa20.js",
    "revision": "ef68c9ae3b16871d7dee13778d5f41dc"
  },
  {
    "url": "assets/js/119.5cfcf5a8.js",
    "revision": "0ecd58ae765445c498a118e5cf951f6f"
  },
  {
    "url": "assets/js/12.ee5ab4f3.js",
    "revision": "c6b9a1b80b4a4349baf2132877225002"
  },
  {
    "url": "assets/js/120.d04db2d6.js",
    "revision": "0900ddb2a6ed3a89e1f9f4e330c5cdbf"
  },
  {
    "url": "assets/js/121.feb15f33.js",
    "revision": "c5d08d88d4f9e02e9cdfe146aa55ef0c"
  },
  {
    "url": "assets/js/122.7ddc6736.js",
    "revision": "d5d8f89b323751cecdc5b2407aae5386"
  },
  {
    "url": "assets/js/123.cd9f1e40.js",
    "revision": "9caf8d6567e562b059f7783079c98c9f"
  },
  {
    "url": "assets/js/124.c04885d7.js",
    "revision": "2a79f3b8a53e91b5b12747d051641fd3"
  },
  {
    "url": "assets/js/125.4c791ab3.js",
    "revision": "4883af44fcbcf8a710593ffbff065cb7"
  },
  {
    "url": "assets/js/126.13fa5910.js",
    "revision": "68c4f0ac4c82ae6532ddebcf4bda8a30"
  },
  {
    "url": "assets/js/127.d8870eaf.js",
    "revision": "82490ef9dfdbf6c6c6346b580c253ac9"
  },
  {
    "url": "assets/js/128.9da64ca5.js",
    "revision": "3781fb432fdf668dac0f1ed4ceab8898"
  },
  {
    "url": "assets/js/129.fd148210.js",
    "revision": "f3c871798e6ab931584a69286f1be2f1"
  },
  {
    "url": "assets/js/13.e19db652.js",
    "revision": "971ea86af984e4d4e2346581ec9230b3"
  },
  {
    "url": "assets/js/130.71f36117.js",
    "revision": "d0df1c2216d8f6f276a4261bd5e5791c"
  },
  {
    "url": "assets/js/131.e6dfa47b.js",
    "revision": "365f7f9467d7cd5059eafc6f48fb7997"
  },
  {
    "url": "assets/js/132.dbf70f68.js",
    "revision": "e291c56f6635e623db80a2451c23d070"
  },
  {
    "url": "assets/js/133.405d35a7.js",
    "revision": "f2d3f459c772fe837abc1f7c54850ffa"
  },
  {
    "url": "assets/js/134.12deeca9.js",
    "revision": "3ad9d50b6a47a6febc721e51e44c4e15"
  },
  {
    "url": "assets/js/135.c53795cf.js",
    "revision": "f58a2fcf8092f391820179ec27f36fa2"
  },
  {
    "url": "assets/js/136.49443d1e.js",
    "revision": "f48bc7671556f461a30f70e5e368dea4"
  },
  {
    "url": "assets/js/137.7cd04cac.js",
    "revision": "ec20e031e4e8b0803528d711eaf77823"
  },
  {
    "url": "assets/js/138.6fc55496.js",
    "revision": "bf6b9d6353c10faa387878c717a139ce"
  },
  {
    "url": "assets/js/139.c81c552a.js",
    "revision": "e0c8c817c72f490508a178f05e976b35"
  },
  {
    "url": "assets/js/14.d8aee37f.js",
    "revision": "799ca03d2875018912293542f990df7e"
  },
  {
    "url": "assets/js/140.91238dc2.js",
    "revision": "8f4de15433edd6c46d358426455eaf86"
  },
  {
    "url": "assets/js/141.428e02d8.js",
    "revision": "01011eb01bbfe5cb5145a8a86f4cac3b"
  },
  {
    "url": "assets/js/142.d8318338.js",
    "revision": "2fd34f17cf5445159eaf0c7ae17ca114"
  },
  {
    "url": "assets/js/143.48b5812b.js",
    "revision": "369c461d088eaadf4f80a3496521efa5"
  },
  {
    "url": "assets/js/144.ad440820.js",
    "revision": "42902358c509a9ce318de6f7a337c37d"
  },
  {
    "url": "assets/js/145.d79eaf18.js",
    "revision": "8f9c1ad9be1289c8f5f16b2ec6718ffd"
  },
  {
    "url": "assets/js/146.1b1324df.js",
    "revision": "8661bc8bc03346364b59fdf6af2762f2"
  },
  {
    "url": "assets/js/147.c2a50923.js",
    "revision": "554aa6cd07fe2d413cb0833cda5f65a1"
  },
  {
    "url": "assets/js/148.2873b2fc.js",
    "revision": "592b56db97d421b5c338f3c456811223"
  },
  {
    "url": "assets/js/149.a29082a8.js",
    "revision": "6a58148524cc8ab74b4a71d76d2f51e9"
  },
  {
    "url": "assets/js/15.cdfa25e4.js",
    "revision": "73495abe0338eaf1e6eb539558fc50c1"
  },
  {
    "url": "assets/js/150.2f42a88c.js",
    "revision": "a351a0f7fd9784dc7e432e6d5bdb48f8"
  },
  {
    "url": "assets/js/151.bd8581d5.js",
    "revision": "fba37cdff1a653ab4a3572ace8bc8b80"
  },
  {
    "url": "assets/js/152.43be7a84.js",
    "revision": "5bdcfdb37bb19290f0b5777f1e9b9277"
  },
  {
    "url": "assets/js/153.8585eab2.js",
    "revision": "0675e10f86e17e0156a4fe41fb92f863"
  },
  {
    "url": "assets/js/154.de5cb683.js",
    "revision": "62783c21f435684e84f7ffd360e20dac"
  },
  {
    "url": "assets/js/155.2fa55c29.js",
    "revision": "191cb7ff9cf48689d59fd0e8bf3bf270"
  },
  {
    "url": "assets/js/156.36354a75.js",
    "revision": "7f7a3ead766de74467f7283b158885b5"
  },
  {
    "url": "assets/js/157.95abbc0f.js",
    "revision": "e95e82de396f5d6b2ea9018c2ed10ca8"
  },
  {
    "url": "assets/js/158.ac67aa04.js",
    "revision": "4043112bf30a8e48a9691a646781dda1"
  },
  {
    "url": "assets/js/159.ee5281c7.js",
    "revision": "d467c8bf45483c434515b8d34ecff116"
  },
  {
    "url": "assets/js/16.d4fc1cbb.js",
    "revision": "81ae46409a2040665749dd49c3775e1a"
  },
  {
    "url": "assets/js/160.5be24299.js",
    "revision": "69c196dcb60b57bd7e7fef5280d86a29"
  },
  {
    "url": "assets/js/161.bc11b1dc.js",
    "revision": "28ad0db104a031ca4f4f3f032a7300d0"
  },
  {
    "url": "assets/js/162.1d0de7e3.js",
    "revision": "ace4ea1bec8746fc0fda66b46a1de3b2"
  },
  {
    "url": "assets/js/163.2c2c05ee.js",
    "revision": "c5906cbe22c02e7a71eaf7c952651da4"
  },
  {
    "url": "assets/js/164.0807c8ac.js",
    "revision": "04a728a77fcb777e6506d5a43252e53a"
  },
  {
    "url": "assets/js/165.60206374.js",
    "revision": "610852a138aad50ba5c7e62af4a50f5c"
  },
  {
    "url": "assets/js/166.a7a67615.js",
    "revision": "a99b1d899a4fa402a6f9ae70ec3b809a"
  },
  {
    "url": "assets/js/167.0ef48575.js",
    "revision": "8c7f791e1125209b0a473a931c06b6dd"
  },
  {
    "url": "assets/js/168.6ef7127f.js",
    "revision": "1ba425d313450519a7349d6b370bb6e3"
  },
  {
    "url": "assets/js/169.95c8f783.js",
    "revision": "a80975a481d5a3886efd168fc48d915b"
  },
  {
    "url": "assets/js/17.198857f2.js",
    "revision": "c2c80943ccd3c3151efc7f3d3e487716"
  },
  {
    "url": "assets/js/170.f679f0f8.js",
    "revision": "3afc4b51ab2f2e58a97badbbdb5e7d09"
  },
  {
    "url": "assets/js/171.95438bb1.js",
    "revision": "bcf2bea7e9fc759459ff1ed9362defe9"
  },
  {
    "url": "assets/js/172.44b5dd2d.js",
    "revision": "d021954d6c9bb020764bb671d1e0d7e1"
  },
  {
    "url": "assets/js/173.3b5e80f6.js",
    "revision": "38ab89663698644dbe62503d1474bee3"
  },
  {
    "url": "assets/js/174.85ed5b69.js",
    "revision": "a1daf0e9e7f1e568ca1fb26acca78b60"
  },
  {
    "url": "assets/js/175.18410a6b.js",
    "revision": "5def5c0e4d54b4710f57119b20a3c2b9"
  },
  {
    "url": "assets/js/176.80f29aef.js",
    "revision": "e8119fd9fd4cbd88108cb95e830a73d3"
  },
  {
    "url": "assets/js/177.0c805ebe.js",
    "revision": "1c3384137820959ad8126b91c2c09c35"
  },
  {
    "url": "assets/js/178.460d0449.js",
    "revision": "114a49ad1093eadd96e626d6c4532e03"
  },
  {
    "url": "assets/js/179.e7a00796.js",
    "revision": "c8468e73f9cbebe3d86c231c73a9de8b"
  },
  {
    "url": "assets/js/18.e1b37cba.js",
    "revision": "32f1d46c709814bc20face0faa2f6b07"
  },
  {
    "url": "assets/js/180.ab08b2da.js",
    "revision": "27cf39daf517c1bc331c5b04014f574f"
  },
  {
    "url": "assets/js/181.be0975bd.js",
    "revision": "a0e9ecc71d80f773eb9bb43bcce46967"
  },
  {
    "url": "assets/js/182.14091615.js",
    "revision": "ba4854d335623a4645b082a3f5b07cb2"
  },
  {
    "url": "assets/js/183.447b855f.js",
    "revision": "d627719708d99710d035ce8001789508"
  },
  {
    "url": "assets/js/184.88696760.js",
    "revision": "29d7f84eea3b2e099243920c5f676437"
  },
  {
    "url": "assets/js/185.cb6c3ba4.js",
    "revision": "3fea2567b7743cc72a5df804b24ba532"
  },
  {
    "url": "assets/js/186.9b86ed54.js",
    "revision": "f75a8dc5b7e4a20cdf289b46cf155f04"
  },
  {
    "url": "assets/js/187.aa139251.js",
    "revision": "cefb5af1461f3fbd8d490e9f1d25aa17"
  },
  {
    "url": "assets/js/188.dc886a7a.js",
    "revision": "0065705577ac82bd208771a433e17de7"
  },
  {
    "url": "assets/js/189.2cab5659.js",
    "revision": "89b6ef80fa759d662f1852087bede589"
  },
  {
    "url": "assets/js/19.20090535.js",
    "revision": "958bacef2188d50a12f05a67fda2fcf5"
  },
  {
    "url": "assets/js/190.5f4c6665.js",
    "revision": "ef35a923ce70e7fc56002aa57f87b383"
  },
  {
    "url": "assets/js/191.a3fda5b3.js",
    "revision": "d12e94675a9affef1d83e0c85260eb44"
  },
  {
    "url": "assets/js/192.a8a7d81a.js",
    "revision": "47476b05e4f457ef5efc7e461b5ef007"
  },
  {
    "url": "assets/js/193.da33a287.js",
    "revision": "b50ce589f434207a58ce6695c94acaba"
  },
  {
    "url": "assets/js/194.2898d73a.js",
    "revision": "768f7d840c7d36e499daffc146b80ea8"
  },
  {
    "url": "assets/js/195.838fea54.js",
    "revision": "a6d5e5114f07d1bd1bb1891a4b8ca5b1"
  },
  {
    "url": "assets/js/196.cbb3db4b.js",
    "revision": "f40a1d2b4005739ba7d2a91fe884d8e5"
  },
  {
    "url": "assets/js/197.c556c64b.js",
    "revision": "d44535aaf139df44e76c93236fd323a9"
  },
  {
    "url": "assets/js/198.057e79e4.js",
    "revision": "250aa4783dac8de19e663fa129599c9f"
  },
  {
    "url": "assets/js/199.46a27f01.js",
    "revision": "6bced3629003045baa55dd23a513372a"
  },
  {
    "url": "assets/js/2.4c9c9b93.js",
    "revision": "60af9c66632d25eb082f256e1de80d53"
  },
  {
    "url": "assets/js/20.2956b379.js",
    "revision": "ff4d87e221a4b4110389d8c4feb8b499"
  },
  {
    "url": "assets/js/200.735f0b12.js",
    "revision": "4739351f792847f37043cf11c3f38893"
  },
  {
    "url": "assets/js/201.07b470b7.js",
    "revision": "76894b90eb92a174c791d3bfcdecf543"
  },
  {
    "url": "assets/js/202.6f3b1d3d.js",
    "revision": "d30de3f7c35f534f48ce790c5b6f45cb"
  },
  {
    "url": "assets/js/203.67bbabe7.js",
    "revision": "ec1136fd406ae23707548a5040488bb3"
  },
  {
    "url": "assets/js/204.bc12f68d.js",
    "revision": "9151ce6ac7ac71d396c3eda4c920e8ee"
  },
  {
    "url": "assets/js/205.9ede2401.js",
    "revision": "7d7a637cae021fb35ad91900b5e33c81"
  },
  {
    "url": "assets/js/206.ff41d0ec.js",
    "revision": "a601150fd191797d51a819505ce1856b"
  },
  {
    "url": "assets/js/207.031f867a.js",
    "revision": "b2ce3aa5d7e5312f476bba68b6c3bbf3"
  },
  {
    "url": "assets/js/208.78f1431c.js",
    "revision": "c8f5a6721530f62a0a9b3fe945e00588"
  },
  {
    "url": "assets/js/209.dd1d875d.js",
    "revision": "3bda325963df9082d61d2ca11468fd55"
  },
  {
    "url": "assets/js/21.43ff1cba.js",
    "revision": "cee008baef9a01e21acf600c5e64cf34"
  },
  {
    "url": "assets/js/210.13e64ebc.js",
    "revision": "8215f90f78dd5c39a6e148c30d95a123"
  },
  {
    "url": "assets/js/211.cf07796e.js",
    "revision": "48f3375d49e2ada776628d6910a74d02"
  },
  {
    "url": "assets/js/212.91a824c9.js",
    "revision": "f5f27878502ae747316f5fee5fd61b1c"
  },
  {
    "url": "assets/js/213.af8e1a3b.js",
    "revision": "8ae77c016309bc605debd9615011613e"
  },
  {
    "url": "assets/js/214.519cafb5.js",
    "revision": "0342c943146dc3369dd5984f1a3bf682"
  },
  {
    "url": "assets/js/215.b33fb8cf.js",
    "revision": "0d5c0dcf0b43c010f5bb4ea46b2d3bb8"
  },
  {
    "url": "assets/js/216.128976e3.js",
    "revision": "2e79318b4de0fd21c3cdbcfefec9b419"
  },
  {
    "url": "assets/js/217.32b8b6b7.js",
    "revision": "3b0fff2d5e65df95f2f15878bb213a55"
  },
  {
    "url": "assets/js/218.b497389c.js",
    "revision": "dd243f9558936f30bb558c4234069219"
  },
  {
    "url": "assets/js/219.110e87db.js",
    "revision": "1b23d3c3838802d805d9dfc2f58c2088"
  },
  {
    "url": "assets/js/22.0ec417a3.js",
    "revision": "bfe6f64c3c84162c0d09b351f9ef0389"
  },
  {
    "url": "assets/js/220.ca398b88.js",
    "revision": "f73a643cec1a098e206bd554b79ce2dd"
  },
  {
    "url": "assets/js/221.ec4b820b.js",
    "revision": "fa72b2d6d312607fcd607ce05c094f5b"
  },
  {
    "url": "assets/js/222.ee2c97b7.js",
    "revision": "4232df1093976917ae69eea46ea764c0"
  },
  {
    "url": "assets/js/223.d1fb4c4a.js",
    "revision": "78e01bc80d3dd644a892929b4d11c9eb"
  },
  {
    "url": "assets/js/224.d3c75534.js",
    "revision": "4681b1f2a9a67fbb2c4bc60750e0f3c9"
  },
  {
    "url": "assets/js/225.24bf0e8a.js",
    "revision": "d63380e6dd19d0f6329289ff816ff091"
  },
  {
    "url": "assets/js/226.d66e4212.js",
    "revision": "b74f7766f23b5c4c842b32a8b8b6bd94"
  },
  {
    "url": "assets/js/227.7e8d89d1.js",
    "revision": "48e0460617bfefc9b03eba77cd64aed1"
  },
  {
    "url": "assets/js/228.27b6bc5c.js",
    "revision": "9ae58c7179bac35ef9e2d632e88074af"
  },
  {
    "url": "assets/js/229.6a5ca680.js",
    "revision": "2f18405daac4cf28876d7f1c65f1f494"
  },
  {
    "url": "assets/js/23.6e3bf6c5.js",
    "revision": "069078b199a81388e9511d770c81f0a7"
  },
  {
    "url": "assets/js/230.720537c7.js",
    "revision": "7ae5eb72fa8aa440a9eb0a9c735236d0"
  },
  {
    "url": "assets/js/231.d315d231.js",
    "revision": "c54692d899f2c8d00f28e5bec638a2ba"
  },
  {
    "url": "assets/js/232.98b98827.js",
    "revision": "b6918b8426f78b9cebaa1255cc6d64ed"
  },
  {
    "url": "assets/js/233.491e90bb.js",
    "revision": "fb412c96d4ccc07db7769a087a770104"
  },
  {
    "url": "assets/js/234.82ac60bd.js",
    "revision": "778ac6c64f17395f2d2e0d4f2e51f616"
  },
  {
    "url": "assets/js/235.aa849f46.js",
    "revision": "26482461de68448556e63a438d57c279"
  },
  {
    "url": "assets/js/236.42092940.js",
    "revision": "c28a3a65f8cdc889f321c44557468eaf"
  },
  {
    "url": "assets/js/237.e8fe2ebc.js",
    "revision": "ad29f3c776428b9bee912016ebd23907"
  },
  {
    "url": "assets/js/238.c1c5e970.js",
    "revision": "2bd8465803eaea30c0d21a628d73147c"
  },
  {
    "url": "assets/js/239.2a92a3e3.js",
    "revision": "ccb5a5672191e430bc1077dbe8978dfd"
  },
  {
    "url": "assets/js/24.328873ce.js",
    "revision": "98a71969c9563d79d152ba1d0db9fb7b"
  },
  {
    "url": "assets/js/240.2c31e6e0.js",
    "revision": "be18eef5c997994c3b63dafa47f06e7d"
  },
  {
    "url": "assets/js/241.3ca45d6e.js",
    "revision": "e8ec9464666a5814e01899e5b59413bd"
  },
  {
    "url": "assets/js/242.b9debf58.js",
    "revision": "b01e2ebf989e98f4451b8813eef37944"
  },
  {
    "url": "assets/js/243.bba1259a.js",
    "revision": "a7520f5b3873f3e7c0d726c6d9b7f54c"
  },
  {
    "url": "assets/js/244.c75e6285.js",
    "revision": "9dd42a01af89c8fe75d657e3df918db4"
  },
  {
    "url": "assets/js/245.de8eed42.js",
    "revision": "1721cd7378e592b14601f64860a55a57"
  },
  {
    "url": "assets/js/246.406476b4.js",
    "revision": "c1295608ae487db2b2cbd01e13352680"
  },
  {
    "url": "assets/js/247.dda3a150.js",
    "revision": "93b18a587810175c69766a0b42b0fa69"
  },
  {
    "url": "assets/js/248.8dcb64e8.js",
    "revision": "056a982009f74cba85aa4bc9d6ccb280"
  },
  {
    "url": "assets/js/249.114d0f5e.js",
    "revision": "44d0491b5bde0b7c8d9bc48cc870fdab"
  },
  {
    "url": "assets/js/25.78a44221.js",
    "revision": "fc8a6b8c75e86c7ff007e15b55bb8f5b"
  },
  {
    "url": "assets/js/250.2776b455.js",
    "revision": "75d58d72fa521583670f17e267261375"
  },
  {
    "url": "assets/js/251.3ea06cca.js",
    "revision": "db741e85da30b39d0850f525afb28e00"
  },
  {
    "url": "assets/js/252.7e4f896d.js",
    "revision": "7e040b605c3cd7f2e3779cd959c0c1b1"
  },
  {
    "url": "assets/js/253.8c4f3a80.js",
    "revision": "8294924e4582737e3c795d7d01edced9"
  },
  {
    "url": "assets/js/254.525de51c.js",
    "revision": "3055bfc14ac43352b5f5b1b3a516c114"
  },
  {
    "url": "assets/js/255.85da3371.js",
    "revision": "423fb67311f90f0e4f2576028eb5b26a"
  },
  {
    "url": "assets/js/256.cad52b9d.js",
    "revision": "e43ae6139c472262243667f80760af05"
  },
  {
    "url": "assets/js/257.f7067b43.js",
    "revision": "d0ee7a85ed7d2fac3b6e7e0a2f131f53"
  },
  {
    "url": "assets/js/258.d9b2a138.js",
    "revision": "deb6ec0b9abc9c078a1c8508dca375d0"
  },
  {
    "url": "assets/js/259.23238592.js",
    "revision": "df278aa79501e24dbf13de7dba1b4217"
  },
  {
    "url": "assets/js/26.713f6c3e.js",
    "revision": "bfc1a5c67584ff06e6c9b0788581a375"
  },
  {
    "url": "assets/js/260.a9d57c21.js",
    "revision": "29d9ea93696da0c570942cffe65f8020"
  },
  {
    "url": "assets/js/261.128d7d10.js",
    "revision": "84ecf294ff00ab0eed910a3647880e71"
  },
  {
    "url": "assets/js/262.995d66c4.js",
    "revision": "5932a4c19035c54437fa0ee041ca84d7"
  },
  {
    "url": "assets/js/263.c07ae216.js",
    "revision": "89405d38999c2330b9873fb10e0c4ece"
  },
  {
    "url": "assets/js/264.413610e3.js",
    "revision": "a444938ec3f2d2646e2850fbbdb276d8"
  },
  {
    "url": "assets/js/265.aada6692.js",
    "revision": "e5a688e6faa36e0d8326069bd0776b66"
  },
  {
    "url": "assets/js/266.d6fae505.js",
    "revision": "b8d09e83e2cfcbe23289238caf4bf371"
  },
  {
    "url": "assets/js/267.965b498f.js",
    "revision": "987fbb76961d4517730f3b1470118ef6"
  },
  {
    "url": "assets/js/268.5626569d.js",
    "revision": "095fdd4327f147bacb3a51bf777caf8d"
  },
  {
    "url": "assets/js/269.a07ff894.js",
    "revision": "954dae0733b0c69d7997c92eba9404dd"
  },
  {
    "url": "assets/js/27.e908ee4b.js",
    "revision": "01fe6618e0bcac577b71fc5430ce9c82"
  },
  {
    "url": "assets/js/270.ee04bb8d.js",
    "revision": "a9e4a6c6a24752a997dab73b35e3b063"
  },
  {
    "url": "assets/js/271.f27c5b7c.js",
    "revision": "fdb8c9f3173eab152a18b4bd67748b9d"
  },
  {
    "url": "assets/js/272.c0eba808.js",
    "revision": "9a27c2b387debe9cd4812272f39fe800"
  },
  {
    "url": "assets/js/273.3fbbcdec.js",
    "revision": "c62188993ad8e85efea9f29981ee53bf"
  },
  {
    "url": "assets/js/274.6d5d7fab.js",
    "revision": "3bd26249a4d3f1751e1401d5cf77642b"
  },
  {
    "url": "assets/js/275.e064aa46.js",
    "revision": "c5f6d2eb8ed127cc92f426b1801be936"
  },
  {
    "url": "assets/js/276.af18b50f.js",
    "revision": "443ebd99ab5449a7c0c5c7a325538d21"
  },
  {
    "url": "assets/js/277.8f8cf139.js",
    "revision": "afdd9ed2d6c716bdd023f6fd4b3bbca7"
  },
  {
    "url": "assets/js/278.60833b54.js",
    "revision": "c062652dbb7f6707b3b5195d97e7a49f"
  },
  {
    "url": "assets/js/279.e0a2837b.js",
    "revision": "9e9a702a0684846eacbf6bf68d0981ad"
  },
  {
    "url": "assets/js/28.c8c4a2a1.js",
    "revision": "d1fd819059ee45160e4ae43513ca211b"
  },
  {
    "url": "assets/js/280.49e5eb67.js",
    "revision": "f6a77c602ca2ed90575ba30f8b12115b"
  },
  {
    "url": "assets/js/281.68c6f94d.js",
    "revision": "0dd853ec0c2d6976f360b566bf1e98f8"
  },
  {
    "url": "assets/js/282.3224a7ee.js",
    "revision": "d0cb64b8ea437966ed01b077b62b634f"
  },
  {
    "url": "assets/js/283.7f4018bf.js",
    "revision": "7fcdd63d71fa6e2cf359aac7306fb92a"
  },
  {
    "url": "assets/js/284.81777eef.js",
    "revision": "98cb2cc3d265e91b9098ef00a5bc94fe"
  },
  {
    "url": "assets/js/285.bfcf28be.js",
    "revision": "12e34f35b6f8ce15d5c7a1a6e6102db9"
  },
  {
    "url": "assets/js/286.16181ed3.js",
    "revision": "f7a11e671292b7b2540489516510c6de"
  },
  {
    "url": "assets/js/287.0b945e9c.js",
    "revision": "6cc1111448091bfe70fa221e45f44ad2"
  },
  {
    "url": "assets/js/288.0576725f.js",
    "revision": "f0b99c135b0b37038badfd46a60aea40"
  },
  {
    "url": "assets/js/289.69180c56.js",
    "revision": "f1bf3ed3a77c874b9807aec57c008137"
  },
  {
    "url": "assets/js/29.ffc96faf.js",
    "revision": "d6be068d04dde2bedc1665c105712442"
  },
  {
    "url": "assets/js/290.5741e552.js",
    "revision": "e6b225e3b3bc1dcee802d4bcda9eb55a"
  },
  {
    "url": "assets/js/291.e67b3294.js",
    "revision": "2068efc91d67bcc4fcfbf465ddf6940d"
  },
  {
    "url": "assets/js/292.b3d009aa.js",
    "revision": "82deb0df1167d1623b2d0e0b8b3b02a3"
  },
  {
    "url": "assets/js/293.cd5e44e8.js",
    "revision": "d306ca309fee1d8e65ed0cd8f19203f6"
  },
  {
    "url": "assets/js/294.acb7de64.js",
    "revision": "574ed367d4f5ab996e2771c7b7f3f25c"
  },
  {
    "url": "assets/js/295.979da769.js",
    "revision": "9a7225b098273bcf92dd006528c96f67"
  },
  {
    "url": "assets/js/296.73c8ec90.js",
    "revision": "58823a42913f58b944fe30e9b06e3671"
  },
  {
    "url": "assets/js/297.2f4df23d.js",
    "revision": "beef58ed936b64f24b9b41964b1cd794"
  },
  {
    "url": "assets/js/298.69b27bcb.js",
    "revision": "af672651f3e151dce0f1817db4cb8c78"
  },
  {
    "url": "assets/js/299.f9ba8391.js",
    "revision": "746e2862616678c3e5bc7e28d36e4173"
  },
  {
    "url": "assets/js/3.0b013ee4.js",
    "revision": "d0547f165799a88d351ec05d0ea98c9b"
  },
  {
    "url": "assets/js/30.95169116.js",
    "revision": "bf7d4ba1e1a8d5fdcbe73b47bd86af86"
  },
  {
    "url": "assets/js/300.b3a770de.js",
    "revision": "dff57438740e9344e9b49b442ba4cddf"
  },
  {
    "url": "assets/js/301.8713dcea.js",
    "revision": "3cec6dcc66cd7cfcad4d868bfa9dd030"
  },
  {
    "url": "assets/js/302.4fb65c14.js",
    "revision": "fc5fda4cbf5dd039f8a3ca30871ff502"
  },
  {
    "url": "assets/js/303.ec3f8351.js",
    "revision": "2cd26c139e53d84840899bc70e057705"
  },
  {
    "url": "assets/js/304.46724312.js",
    "revision": "3b3db61017cc782a48b562ec37dbc81a"
  },
  {
    "url": "assets/js/305.f3331cd9.js",
    "revision": "b320c4178330942d99cfbdb0e104b831"
  },
  {
    "url": "assets/js/306.f22d0ef8.js",
    "revision": "0917de64f5b5830607b82e393282b46b"
  },
  {
    "url": "assets/js/307.c4c96982.js",
    "revision": "647f07974dae70435d698727b05c6caa"
  },
  {
    "url": "assets/js/308.9e56173d.js",
    "revision": "73ab87d232a6b9e0e76f4de9d2a86f4b"
  },
  {
    "url": "assets/js/309.8210f72b.js",
    "revision": "8a694acfe680394d9692e1f50fe12e2b"
  },
  {
    "url": "assets/js/31.2d4f3b1e.js",
    "revision": "c28fbfb2bf5727d76b0e3cea9a95dbf0"
  },
  {
    "url": "assets/js/310.e249dd44.js",
    "revision": "291c8d9ee8b6ffe06ee7bc0d72732e2b"
  },
  {
    "url": "assets/js/311.8f51ce36.js",
    "revision": "65625d43fdd69e274c3a013af45431f1"
  },
  {
    "url": "assets/js/312.8ca131fd.js",
    "revision": "878f1763a3682ea54558ad18d48523da"
  },
  {
    "url": "assets/js/313.84757ce7.js",
    "revision": "b98ae456f1121d188df9bc1d0b2cc7f4"
  },
  {
    "url": "assets/js/314.1085c16b.js",
    "revision": "9eb6957959012426af671d90701ad519"
  },
  {
    "url": "assets/js/315.ba445efd.js",
    "revision": "8c1dcdbbf783259573f5a4da9b646051"
  },
  {
    "url": "assets/js/316.71d58f15.js",
    "revision": "70f8730bdec68149537a2125304df9cd"
  },
  {
    "url": "assets/js/317.87f02171.js",
    "revision": "992303cd40e5b55470d07fb08cd2d7f8"
  },
  {
    "url": "assets/js/318.531a72ae.js",
    "revision": "d1fb13d46a5236b1af686670278d8c1b"
  },
  {
    "url": "assets/js/319.d4d7c727.js",
    "revision": "86dbbdfe3926ac98e5478adf113a4010"
  },
  {
    "url": "assets/js/32.8c3a6a08.js",
    "revision": "e8a20ca8e1d867fba471f963e321514f"
  },
  {
    "url": "assets/js/320.0b9cc369.js",
    "revision": "9f46eb57bbbdd9da72dd31d17bfbdb69"
  },
  {
    "url": "assets/js/321.33d63cb4.js",
    "revision": "8eab4f77f508eaca478acb9bc0682807"
  },
  {
    "url": "assets/js/322.0e0075ca.js",
    "revision": "8039c530e2415410f53d5b0dc9800328"
  },
  {
    "url": "assets/js/323.5ed870f9.js",
    "revision": "67c05f2233368bad421332c236e23c4a"
  },
  {
    "url": "assets/js/324.c4d3f58e.js",
    "revision": "0e149aed448f36bf23cfe2f55602163f"
  },
  {
    "url": "assets/js/325.dc4a77dd.js",
    "revision": "c3cdd6e9e7625309a1fd2fa667cc88a9"
  },
  {
    "url": "assets/js/326.4f2b9eba.js",
    "revision": "3e4d65d46cfcfb2eec8b662e885f11f4"
  },
  {
    "url": "assets/js/327.6ada5f31.js",
    "revision": "074a86215449cce221c5c4f75da1fe19"
  },
  {
    "url": "assets/js/328.1223319a.js",
    "revision": "1a5b44bb5e889ff1aef5cd5bd327a7b0"
  },
  {
    "url": "assets/js/329.e93cf3e8.js",
    "revision": "803052c70e8d61174484427b5f456127"
  },
  {
    "url": "assets/js/33.1bd38a00.js",
    "revision": "11a8ac87d351701ffa377e4f72ae9ed8"
  },
  {
    "url": "assets/js/330.f000aa94.js",
    "revision": "b03fd7668b7a1b11dd137e2ab360a41a"
  },
  {
    "url": "assets/js/331.1fa08c58.js",
    "revision": "dbe33385480b488ea387564c0f39ae57"
  },
  {
    "url": "assets/js/332.bd6a48f5.js",
    "revision": "8c77b8928ff82da72f36f394f742da2d"
  },
  {
    "url": "assets/js/333.918cf116.js",
    "revision": "8417c75a58039b3c890c1bb10e833e3b"
  },
  {
    "url": "assets/js/334.804230ed.js",
    "revision": "a41826438e440162efbebb3ee750b9a0"
  },
  {
    "url": "assets/js/335.a9d66af9.js",
    "revision": "00b001131156adab2c807a16e13a0b49"
  },
  {
    "url": "assets/js/336.fdee563b.js",
    "revision": "cecbc83c1ba44913ccbd5e03d060a34d"
  },
  {
    "url": "assets/js/337.1ee961c9.js",
    "revision": "34797f1494bbad6a0da09cd44fa8fe2c"
  },
  {
    "url": "assets/js/338.27f6af26.js",
    "revision": "348743a86f41147b5b12f74a29f8695f"
  },
  {
    "url": "assets/js/339.0dba87f2.js",
    "revision": "b6cc463a6224936807ec1562c11dc1a3"
  },
  {
    "url": "assets/js/34.6ac51b6c.js",
    "revision": "b4b3940047816e53686eba4949e81329"
  },
  {
    "url": "assets/js/340.2d4b9a68.js",
    "revision": "c9e54c50839c6a9ab12b56685806a302"
  },
  {
    "url": "assets/js/341.7a47111b.js",
    "revision": "f231e676cc3a9b3f5f2b86ccf9710334"
  },
  {
    "url": "assets/js/342.0630a756.js",
    "revision": "17b701076929f5510f26a29137ee39ee"
  },
  {
    "url": "assets/js/343.cd6ac7fe.js",
    "revision": "ff703a46bfc2f75e68733497378fe3c8"
  },
  {
    "url": "assets/js/344.e87a890d.js",
    "revision": "478795997694438632e9b2e56cbc85f5"
  },
  {
    "url": "assets/js/345.7f28787b.js",
    "revision": "ef3a42ebac111d007ba09e4cbbe33d90"
  },
  {
    "url": "assets/js/346.21c9ba2c.js",
    "revision": "4cb74023c72f4f546e0242d9a06f09f4"
  },
  {
    "url": "assets/js/347.7d8bc0e6.js",
    "revision": "b5c74ddaf12460457535f34e40b5759c"
  },
  {
    "url": "assets/js/348.bb93f63b.js",
    "revision": "24bd6547e6f6f2ea1481cf156d4f16d8"
  },
  {
    "url": "assets/js/349.4a144384.js",
    "revision": "0488c4a29154a8353c7ab2bc23459d2a"
  },
  {
    "url": "assets/js/35.2c60b95e.js",
    "revision": "f1de07cbe3a7fe98e08e99d219bf5fda"
  },
  {
    "url": "assets/js/350.556bceb4.js",
    "revision": "972a6e7df731517f5d183b5a13ad6f0e"
  },
  {
    "url": "assets/js/351.852807e1.js",
    "revision": "5c7d7e243eb8f37d8f338ef6f2958172"
  },
  {
    "url": "assets/js/352.4b46eb32.js",
    "revision": "17f0d153608f9ea10a20e0d22f84487d"
  },
  {
    "url": "assets/js/353.8fed6385.js",
    "revision": "fed9dd1acd34ba354b3842018ec9d5a9"
  },
  {
    "url": "assets/js/354.efc637e7.js",
    "revision": "46707ab98d2342461d8ce8971d69e119"
  },
  {
    "url": "assets/js/355.8844c6f6.js",
    "revision": "92bf84b6a0aedd25aa9c6d7ba24d82e0"
  },
  {
    "url": "assets/js/356.f1250d33.js",
    "revision": "a6c18da6cd8e9d70193232272a97fef8"
  },
  {
    "url": "assets/js/357.632a73d0.js",
    "revision": "73c826703bcadfbb0b77734f72297983"
  },
  {
    "url": "assets/js/358.a6431178.js",
    "revision": "e949da6d319f36fa9ae39dace3968995"
  },
  {
    "url": "assets/js/359.8aa2027f.js",
    "revision": "fb613641d307b2934d310b763ec7ad10"
  },
  {
    "url": "assets/js/36.7a5272af.js",
    "revision": "9a81d20efb563fa8aea90d3a14c3fd82"
  },
  {
    "url": "assets/js/360.e59e7aa3.js",
    "revision": "096d3583ae339b319dc2dd1aeb33b61e"
  },
  {
    "url": "assets/js/361.215bf5f6.js",
    "revision": "2b941e77c38b2a8126da28ff1a565d2e"
  },
  {
    "url": "assets/js/362.7e177c78.js",
    "revision": "8c700b3334499a58713cc73701e5801a"
  },
  {
    "url": "assets/js/363.64ca7324.js",
    "revision": "2fe53c9efc0be000c71626a6743919ce"
  },
  {
    "url": "assets/js/364.5e4fa17e.js",
    "revision": "a413d41567b2dd493dd139014b86a321"
  },
  {
    "url": "assets/js/365.87bc731a.js",
    "revision": "0dddbc4a7345b8cc85b6a98518139049"
  },
  {
    "url": "assets/js/366.8fdaaecd.js",
    "revision": "0db77912932762693ae46756494c3979"
  },
  {
    "url": "assets/js/367.80a18667.js",
    "revision": "f1067f4f20c26f834f0d0dec522e1df2"
  },
  {
    "url": "assets/js/368.0261d2d0.js",
    "revision": "5dd9d3900e01d1916f31fca149071502"
  },
  {
    "url": "assets/js/37.a377d257.js",
    "revision": "9f91b8dc1eb2a9122ba5dfe0654e69d8"
  },
  {
    "url": "assets/js/38.73bbafbf.js",
    "revision": "64736783eb5e06ec4d8bb6f902490483"
  },
  {
    "url": "assets/js/39.939cce9c.js",
    "revision": "aab15adada9d6c41b38daac32ad48b88"
  },
  {
    "url": "assets/js/4.085649fb.js",
    "revision": "9b487a3c00c1dbd6243f8e3b0c635e3d"
  },
  {
    "url": "assets/js/40.3567a3aa.js",
    "revision": "9c96a6d67506526d05eaa6b72af35722"
  },
  {
    "url": "assets/js/41.a1729c8a.js",
    "revision": "78becec89562d94e24080654ebddf3b6"
  },
  {
    "url": "assets/js/42.82421300.js",
    "revision": "ccc7e430e9f82e8b700d324228f68d7f"
  },
  {
    "url": "assets/js/43.0d8ad889.js",
    "revision": "214775c332f15f0a1578b54015c52e71"
  },
  {
    "url": "assets/js/44.b892736e.js",
    "revision": "f927c38bdeb88de3ea8feb5c0b767c86"
  },
  {
    "url": "assets/js/45.5f48074d.js",
    "revision": "bca47a9b206734141a2d123f45fd99bf"
  },
  {
    "url": "assets/js/46.b2616195.js",
    "revision": "f3409f7b515d56435cafca406c0953c5"
  },
  {
    "url": "assets/js/47.3bc7e5fd.js",
    "revision": "164f5019cff1594449349fe7dbaeb00b"
  },
  {
    "url": "assets/js/48.3f491fdf.js",
    "revision": "3af2039233e242776f8f86dd268365fc"
  },
  {
    "url": "assets/js/49.f99ab4b4.js",
    "revision": "f7fa33b5f4e75167233838bfb41f2213"
  },
  {
    "url": "assets/js/5.99bc2db5.js",
    "revision": "d2907ac3a76762fd5cb56539bb7997d3"
  },
  {
    "url": "assets/js/50.2f0ac3ed.js",
    "revision": "28a68c12905dcae4d9dcb818c0d1ef12"
  },
  {
    "url": "assets/js/51.f9af665e.js",
    "revision": "3283e38f08c0623202427f397759e601"
  },
  {
    "url": "assets/js/52.0bc2ea1c.js",
    "revision": "2a6e668c5b7c436b6c3f133003080a31"
  },
  {
    "url": "assets/js/53.0e21e9b6.js",
    "revision": "4114fb6089e68ecbc64747b9537b7fa6"
  },
  {
    "url": "assets/js/54.90cd244b.js",
    "revision": "87d828508bc56874f414ace438450bad"
  },
  {
    "url": "assets/js/55.80f54f69.js",
    "revision": "b633a1187fe5dcb61b18d36215ea75e8"
  },
  {
    "url": "assets/js/56.6768cc5b.js",
    "revision": "2ce3724399464307b7943bf4abdab334"
  },
  {
    "url": "assets/js/57.cad9a469.js",
    "revision": "0807c4149be0dbb8497fd76f652bdd2e"
  },
  {
    "url": "assets/js/58.f4d10787.js",
    "revision": "f371c9ff8474c0b34cc3c1dc72cdb7e4"
  },
  {
    "url": "assets/js/59.5468f1f5.js",
    "revision": "628bcd4616d66a3eee6d783a02bbd97a"
  },
  {
    "url": "assets/js/60.b913802c.js",
    "revision": "3dd028f752cec5d03080846a414013fd"
  },
  {
    "url": "assets/js/61.3fc328ee.js",
    "revision": "cb7958fe44a1c845dbae65a228d93bcf"
  },
  {
    "url": "assets/js/62.7569e0f7.js",
    "revision": "b21bbcf946c944f7cf29731d9dd21733"
  },
  {
    "url": "assets/js/63.76074069.js",
    "revision": "e6e38b6241cce57178fdac101904aa46"
  },
  {
    "url": "assets/js/64.79dbc44a.js",
    "revision": "2f132708ea43d273ab247203bd1f51c3"
  },
  {
    "url": "assets/js/65.70ea0948.js",
    "revision": "fb9dfd245a612f28eeef61f6f022e2a4"
  },
  {
    "url": "assets/js/66.0127324d.js",
    "revision": "0ebb166348eef39da30923a2f68126df"
  },
  {
    "url": "assets/js/67.1132a0d8.js",
    "revision": "f4fd1607c01c4e0c0df7610e88aaa20d"
  },
  {
    "url": "assets/js/68.9b9f5de5.js",
    "revision": "2783269d70e3bf56bcbe9e000a6027b0"
  },
  {
    "url": "assets/js/69.47a43c85.js",
    "revision": "398bedb9e195a0533619d47d37461d0d"
  },
  {
    "url": "assets/js/70.d30139c9.js",
    "revision": "f5bb9689cba002a0be843bf31e5d8a1f"
  },
  {
    "url": "assets/js/71.782d899c.js",
    "revision": "33611d11aa4f42bb4c8149d0210f2cbf"
  },
  {
    "url": "assets/js/72.cd6ee7fe.js",
    "revision": "f743df125c65e0e4e6627bb89c2f6510"
  },
  {
    "url": "assets/js/73.c7c5e3cf.js",
    "revision": "e08e9a72ac0061f7dbdcfcf4e41b5589"
  },
  {
    "url": "assets/js/74.657bdacb.js",
    "revision": "fa081961d7352995d64166b73a68a3ee"
  },
  {
    "url": "assets/js/75.052f44c8.js",
    "revision": "7f2fe8c4f345eaf126b5be786f8adbaa"
  },
  {
    "url": "assets/js/76.4cce55fa.js",
    "revision": "fcedd20b8ba5ad2cdcee9ea53d018b7b"
  },
  {
    "url": "assets/js/77.8483510b.js",
    "revision": "b95ee34631d243bb3b8e2feee8e1abdb"
  },
  {
    "url": "assets/js/78.72b7d44e.js",
    "revision": "eb2cadda62ca3a352cda8260c91020ad"
  },
  {
    "url": "assets/js/79.4fbfb5f1.js",
    "revision": "c43c50cb381cfec6fb087561d94b63cc"
  },
  {
    "url": "assets/js/8.97245b99.js",
    "revision": "cb24e66f6d379b5305f967e8b6558a62"
  },
  {
    "url": "assets/js/80.82486012.js",
    "revision": "586a8ece5015bed023ef1bb09282990a"
  },
  {
    "url": "assets/js/81.2dca014e.js",
    "revision": "e5fbcaa6503403ad762ba9cfc450d3fd"
  },
  {
    "url": "assets/js/82.d8fab9e9.js",
    "revision": "30dbe5359b4c4c4e3e396873518e7219"
  },
  {
    "url": "assets/js/83.a876c8d7.js",
    "revision": "6d0bcecab9f5d437b5c2d0ec64d49fb3"
  },
  {
    "url": "assets/js/84.1e56b49b.js",
    "revision": "22a926065e21f8719102e9ce5e36e784"
  },
  {
    "url": "assets/js/85.d810f89c.js",
    "revision": "f9c91526d5a184d750bacb6b5b009dbf"
  },
  {
    "url": "assets/js/86.4f7a794d.js",
    "revision": "7d77181e46e05642102e759406fdbc59"
  },
  {
    "url": "assets/js/87.a35482c3.js",
    "revision": "96e3daa0a5f103fd2770f0e61fd897d4"
  },
  {
    "url": "assets/js/88.bbce0757.js",
    "revision": "dca5e6358f4deb52864344fef646f7c9"
  },
  {
    "url": "assets/js/89.dd426039.js",
    "revision": "fa243222c8a70a5e86cc9cddb4ec8e7e"
  },
  {
    "url": "assets/js/9.d501d742.js",
    "revision": "ff0b7a887269bc31b5bf4ccdbb9e0356"
  },
  {
    "url": "assets/js/90.996b295b.js",
    "revision": "444588beff47a8c0cef99207b6055591"
  },
  {
    "url": "assets/js/91.4e30ced2.js",
    "revision": "c61f31af164e148fe97cc06b0206813d"
  },
  {
    "url": "assets/js/92.05c1030b.js",
    "revision": "e29955155edc9c0c31f1dd30ea3e4f10"
  },
  {
    "url": "assets/js/93.d452bc31.js",
    "revision": "570c5cac5570d29d625202439297f05e"
  },
  {
    "url": "assets/js/94.4ad95b34.js",
    "revision": "bce5f23f3f04f890a279337d45663951"
  },
  {
    "url": "assets/js/95.f51db68b.js",
    "revision": "866cfac586bbf3c705c05906588c0d94"
  },
  {
    "url": "assets/js/96.2ef60777.js",
    "revision": "a8bad5b832b7b8fa8c059e1849530640"
  },
  {
    "url": "assets/js/97.00f59977.js",
    "revision": "e1e83d02d723132dd7462a3aefe63d74"
  },
  {
    "url": "assets/js/98.df63ace1.js",
    "revision": "71cc1667d2e47825d32ee3a857ef25e7"
  },
  {
    "url": "assets/js/99.27b791d7.js",
    "revision": "2df21a32c8b6a0867efff4e492d9ccb7"
  },
  {
    "url": "assets/js/app.dcf23d68.js",
    "revision": "3193a9ea8db537793d5f4be5a3467635"
  },
  {
    "url": "assets/js/vendors~docsearch.b558db90.js",
    "revision": "3c059f11fe8f2414300152ec2908cdda"
  },
  {
    "url": "index.html",
    "revision": "04f690f3af539633816e851cb04fc8a4"
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
