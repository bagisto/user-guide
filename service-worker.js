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
    "revision": "09e09164dcab5eaa50e690f5df8098fb"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "b97c55ff345a435f912d5440ea18d5dc"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "6527a5260f7a85f71a0a1a9f93e71171"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "8d21d9c318534c1edd951547396f96d0"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "c9f68cf1ee822681a28fcfb065d5e145"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "6ea3c5ff6368a601d5192439de2d062b"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "411a1c467ce28517db68f805372d070e"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "178d1da574a1126c7e97bf0ebf70296b"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "680a3caa5aa6f017b73c55957f876377"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "b8ed8a65d74deddf08c7c62e1e575262"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "78c0e139b62761adb095a6f951feb205"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "3ff29d5a668d85bf512373a2b379e8ec"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "5d619d94048944f8ab77e839007ab029"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "a547b7b676d4620ff77e2a101b903915"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "616f762e0318cf4946c3555465ccdd63"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "9c959081c717ea77b6a6cc5d591a52e9"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "2f67cc271e0fd9fda386c2983559f2e5"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "e90c7f547145793c83568437d3d09fb9"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "d79f82d7da1e4ae37e2b218a0c31b832"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "91e778ba317e2d9b5712a0ff3d43a11f"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "3592c4b9cdb72d098e3e89f11a82f39f"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "ba20112aa73be6d9f2c4e7bf7b8e909f"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "dc9e057e23ebb718d6a7d56426cf562b"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "09835c9561a6cb2e18713ec36ca03c72"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "0fe24af0517b7b9287a6fc245faaefbe"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "58751d0a6d77c29a0757409711d05d63"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "8698e9c92e59a7aa2d4cf94c2795606b"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "7279f6e795158f23c27e7521483fbba2"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "ed35f57f7b7aee665bc1b988bdef2267"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "884d1b7178bb4e83a9824ab7e4f9498e"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "f39018742d49c083a68c63b77cbe70b9"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "12ee2ea55d93c165aab8d05993dd50af"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "2b8094b5c32032d772be95e7c152db95"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "4865d57b60ffdba8c2867b5b8908dd24"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "ba971b9da9d393c412867e615137458e"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "585573190a76af559385db1ce2ee64f5"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "d724c8e20690fd76d567ba8b3c5c542c"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "cc3277b17d38bc9e21850878a0dea948"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "89738cc758d31c773be28cb247f10be2"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "c7a969dd86ddaa2de4158b40f50c6a92"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "a95066365f2ea39555063282c4acf3ea"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "ea99941d303e2c87d93c9f77051f38b5"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "f8975fbc1d56a78a47ee1f3405d91a4e"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "e5a6c19293476a1828539a8d5e90b139"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "d6c9b5388e1264753e601c6ac6cbea5a"
  },
  {
    "url": "2.0/MultiVendorMarketplace/index.html",
    "revision": "872921ca6374bba9e883d4b4975a6027"
  },
  {
    "url": "2.0/MultiVendorMarketplace/order-management.html",
    "revision": "5109d16629fa8fc45e9e4c9d34d0447e"
  },
  {
    "url": "2.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "e20224effd7e928e634f3d9d0b782cd5"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "1d0cf8859770803b8a21fec7168b0bcf"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "b1cbd3e34e5e18705ec7c43d934f90d6"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "21324ab1207f8bb5d3ae57f0d1e94c5e"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "e6ab9fec637fa75581316fa39c255ff5"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "88411e8e828ccb9b93ed6f2a02a88123"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "57690f7947c70bc57d57a5dbe0828d2b"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "416a7cad3c216826a92656960f1a074a"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "e769c4cb215ff0bfc49f05a4e8ade562"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "45ff0dff894f1cb1f823960e4de6632b"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "6d49578ca054b6efe6e03995c64042f3"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "9ec9cb6f7115c92d0df778c0dcf0150c"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "3343f7122222eec380ee6546763160e9"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "ab8912c82b0d28b614f6179c380f0556"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "a8dbf4cc812def8e5e8fc07fad0fcd9e"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "7857345d30b28d73dd80fc986e8c9a53"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "b80de2612614c00bd90a5cfca4acb957"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "e3dae7364d0ec7ce79b1e257b1f21b13"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "4d4b8aa259d7c3815e664967ce4840c3"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "ea051d647e7eb21888ae5d25c5456c29"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "23fe738387f1da0261481f46d7dc7d71"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "ec921a01b759cb7524576a7dc772c08b"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "7130430e487c2f27ab20180e87b56f48"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "f788ade3e832c6285265d51c14cfe6e8"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "8db9fe5edbd427c7f46251b76d228511"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "1d33b1a046bba8728832820ca7da9057"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "172b4ef1894fbce446d0afbc9bc421ee"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "96df298a938351c8a5da818dc48738cd"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "c616652234c11338abba2e7c6b9ed492"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "b13f59264f4a90e7e273b65c467f805e"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "8629794b13f25856c31505224e468f97"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "e2e736f12ef9d5574c1cdf04fb2756bb"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "67c4712b02295050fd2f08b18227f9b7"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "c3bebb1703c4d4c950d8cea8749064d7"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "c95f814dff386abc99cd0bd852104ac4"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "8803789393abb633e5b279f5037e8739"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "acbb95cb716ad1692e64777918585aef"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "9f367eedaaeeebe318d4dff2c2025834"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "b93a5cd8c1d8afef968ea4738db2c18c"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "c64124e401856b028bf22630775c7b36"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "bebdd10168529e9c7cb4f1c5791ebe86"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "ef854b97e06fe6f216ac394792f66621"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "6a86083d7d3d5eb863f514779d129351"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "e9618f5996a78446b325470903d3b10a"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "e75c66895437cd06880e9b6f12f36106"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "44da5b6b862eb4714728ab35fb02e1e4"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "bd1ed3d28bc8269aa488a4b5b350ffd2"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "e809db7d844b177daf19c821e8e98310"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "888c5524cb8128eac571d9b852469289"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "a03a19baba56ddab148588cdee2e862b"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "8dca24f0ede22491a70cdc8d20b4a858"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "782e36613546935b5ee882f677ff1184"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "057e8b5c9d7e0a36e7c2e4e28fa5b756"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "fa43b550f8b238331264e7cb19aa1f9e"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "9167da9f768f7f747ae7f2d4b2d444a8"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "8a632f9977c5e87c735025570cc0116c"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "306f158d4ab3bdaab903b9002dee4c11"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "4b36d972048c38360ab70ded02beafb2"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "2454b40e7982a798a810ca89b61f2221"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "1a654e286690aa0d112961a281742e76"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "f38dae337785d1179ce111655551169f"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "f93774b0e9d978ba0b747a4a0abb0654"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "46b632234182f08c2dd968d00d858dc8"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "5325e987c9100b287fc3273b7447a50c"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "a7f69685275f3175c223fc53775006ee"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "343b32296bfa18cec2568e8bce49ecb2"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "fb437473527323319c93901eb657484e"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "2c88213c8fc4dd3bd767a12f7ebc0bf9"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "b7eeb03208e1128fc17c8af07a049e99"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "a2c5f5af81cec9ade5f7aac7a23bdb9e"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "e8a5d4e295d8f667916c150fa8d81671"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "c62899c12815389ef7c1bc7dd5b9954b"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "5fd5fedb9c2f821652c9d1f1311cda5b"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "1457cdecc3593d090acfc2ec1f1d5be7"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "f9cf80dcb86e356dbde55fc9cea2d79c"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "23686d27369bb3d7380f20f445fdd59b"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "2234b8febe447fe74347f5190059bffe"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "0c6fe10cd26e2c11a0f2658a8609acf7"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/index.html",
    "revision": "a9a4a8e844a100ab0b7c3fa9d1679fc3"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/order-management.html",
    "revision": "d7a1cbb84827fa1b89c319290335686f"
  },
  {
    "url": "2.1.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "ea5c076bf0df868d48ed3b080744be74"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "c54f52d8c332af42c45faabc457967bd"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "a826a4c0cb283feb90b4f76d5392c91f"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "4613e0d57a852c27091c7fa8dfc025ba"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "408bf45685ffe5ec02a69f8f201f483a"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "fea9782ac1b1201ff56182f562aa7dde"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "0f59cd127fb04e343356539efb681c15"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "792d398932a5f1f1e7fa3ebe4cacbb87"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "8ecbac8c23105665214c8c3916dd0acf"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "ba033e849c6d25f2d0b9d6a39c1bfea6"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "f25b649e279e7af04a243af35b8aa1cc"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "785c25b9318f26d49b0ff2bc3c79b8f1"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "cb667b513fc672d2631aa24b2b8bfc43"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "19e89a39f7b75881900ef56a828c5138"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "d83bbf50ae024bd07bf40698ec0709df"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "dba107d1387b6ea885f7fcc44864e3e6"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "49098c854f6349b17fa16827a1bba5d5"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "79da1870dda696a70fbd4d5c1de30e93"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "cb959505527d635bfb1635dfb2ba5f06"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "7fb38105d3ad8e12b481af69ee7df1a2"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "97090a95f6513ebd9aec79744117a1bd"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "9da53751e04d373196cf9fb83b18db4b"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "8a7a76bcb27268e12308c85b4bf04fd6"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "3fe4cb00f86b68fbb621b095b3d13854"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "0549af70b2d487c8b57a3a3136342da6"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "0383b3ecf666c3479ec3788dbf70fa53"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "1ad618451c497ccd98ec406aad0674b3"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "6936a6f354389a4b61239f2a070efdbd"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "64a7891a5b6956821d8cfb8a5dfe186d"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "64cbbe2caf414db4dd03f902d48a4a5a"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "d153340ae23a8abea6fa521be3571b2e"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "eb41944cf7f3fccc19e10f0ceebfd088"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "32fcca3ee8768b99e4cda458fe050d5c"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "e9b0ec5b8b200ddffc33d6cb29dad4a2"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "3545a945d7dd56e84f79ccbe81844982"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "142dc5908bc994c66f4ff4e380b1cbb3"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "bcadec796e9eae457d834121fa397e8f"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "5356fa1baa75505ad04943ad8e7f30af"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "95ec55ee542e53bd172995ef8e0c56a6"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "cd7ee2c9a174452521d0ca17baa3da05"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "513e364a5e96dee4a2a08384f44a22f0"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "3ae6e44d65f015b10fc62264f2c300a0"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "ac3b46cbfaad4fe7bb07fe562964d448"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "c9ae85fde3b257154bcae801be031f19"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "f36b88ce4f23c9c60ad324b53347d7e7"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "6448f5026bb390ef8f6f1369983a99b9"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "61a3b5df1539dc2c1c3bf3dc0c8e6a73"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "c92b602fa3c8cc3193216c1d0157d1cf"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "108804c84a4315cef573e11e94de8ed4"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "72b82606ffa3b276aa5249c787c0a401"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "790c01e1521509a965f9c7a17ba8db31"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "8b7d0c4c36d012de8c7a9008e0cb65f4"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "75d84a327d519194d94284f2a0da37ab"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "22bab512a5895f90abeb64cff92f49fe"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "1feeacfd8b54cd7422c156303dbdf18c"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "7dac75f357517f6abce8207ebb787ab1"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "b3ac75694aa31254f3d1b8aa3b6ba917"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "9abcfb6c7a619a855c6f691ff82beda7"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "1c76e32993e04dd325d31320ebca98c0"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "536c9c77183df2381da4850dbcd16964"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "8cb3fc53fb333f86e0eef7caec6f9afe"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "4810e931e864ed877c6d8209ff99e57b"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "59b7b2524053a20bf9f4c1195e658884"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "7c99c37885992a5f38ce04b63c591a0a"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "483b803704c0caf7165c17f0f05231d6"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "1e9695f2b9c576768d16fbc54b6e74e3"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "6e7687e877c4db9ce0c349318f1ace79"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "7adf3dce99c05397e1df72b5f80da3aa"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "5fd411f49e8400859c0bce40cfd23c28"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "8b938b1b43657f51bd3a71743a0cd50f"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "5fcf8829846954a76288b7e831bd9901"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "9fc1833c87b5ea77a200a6a26cb539c7"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "307b9948ae908d80582229315f78fe3d"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "97b84aec147c9ffcfee935cf767580e2"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "d83ba5300ce3712c8a31d82edd3e5e82"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "2490722ce920c9866f72dd5ae8bbd476"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "efcf37c1429ed77ee41948837a460c50"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "6bca1b9013628f3c0eae1cb570e329f0"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "12d06fb1ae39091a34be1fb0d1e3ca7a"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "4c9cf3be7ad0243dddbc0a2d9c7359bf"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/index.html",
    "revision": "1c03c75f678b71d1bd1912327b599738"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/order-management.html",
    "revision": "106896a543c236091bf3c6a6a5c444d2"
  },
  {
    "url": "2.2.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "6242acde6d4887e4f956c7cf6db7ca16"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "1bb60c4980f581237f417f8caf12046d"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "ff27f51c9dbe22f0ebc4bba3b82dba39"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "8c79bb7ab8d6a3f038e68577dfbac9a7"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "67d46101bcdd8b2288909f19a457fb93"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "fd222841d236efd60fff4ea104049cef"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "e4215e2f4d8e3f623092885aa580b5ca"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "0bc3d9573ffbdb122189b889574438e8"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "fc0ae99f23bc54ecf06f6ee5e89198d1"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "0880ee22ba04367a2b5d3f27f13c8841"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "b7e53b00aa65a0c5f642b0dbe3ddcc19"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "3c717e9ade526b94c9a499bae271ec02"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "d443bfaaa33b57fcbcac1269575d8345"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "44e14a627bdeb52d083d25a39220bd54"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "411e0280e493a73b78800407037b9a29"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "841c7a9aab8792fecd8ce8a5100fee28"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "de7f677254b654839aafb12fd4e3deb7"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "d2ad5184026c5470b4be2805cf063787"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "3a3e681abe3244bce8beed0a2cae03a6"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "8d65a19adc9c96db6bbca1ad63f5ccaf"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "46dde9cdf812d5fb0d2d86e40ea11c21"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "9a252e6ebe28f47ab89da1043b54a57b"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "8c7d66d63933de60bb44164da75cf3d1"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "9c5e961d5ac101988f4ac4e662ab6113"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "d485e5ee6988dff384558070c01842cf"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "2cb66f58b4bd293b8bd9d925129f8a57"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "f69d636172e6bd60006cf3c35c071c54"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "0b84b406f3b6d1de5c4e4971acbc6bbd"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "fb6f021cd59828649ab0de711d0f90d7"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "94408bfdf28cf91ad208f951587d1f6e"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "dfb477c3f8daaba610ec3924db9609f9"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "e56500dd5f3fdb9a65143c24708f6e0c"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "90e61373f6574243cb8897ffbf8206e6"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "4454376f2a52bf8155250a3988d4d5d1"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "aa19cd93592531c0d17e7c331247ff44"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "1adf277f27409053af0b6972a314155f"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "3cd3f12eb16cdcd7e246afbc64fd8aaf"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "87e8a7031ff14a3b9569ba9f520251ff"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "e5150f77857b1d86b7f5c76d12ac8a2c"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "ec8f002d0e37b0f65ec101abeaf697e5"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "35625a8333530a3e125df9a6cc0f1ab5"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "f771bde38e7c3f61f64bbe2b369b0202"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "07f4fb914b863f7beaa6f5d4dfabdefd"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "bb243b5ecc2e603fd5755d2fa0a67882"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "eef6fc50d7fab33de31f188dd195a94f"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "5453cc558c21005ce68bb07b21a7a80b"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "c7780e269c82089761c9e59c876bb595"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "78e9325ddec92b56dc438e9d0efe9b25"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "be2758128a2ffcc193837f93d22d34b0"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "1d04e0177479ea936e0b808443cad17b"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "a24092a06ae457538d9fa05ad8ff512d"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "9a7d6d912e0039f7b2876d2c5d1344da"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "b148099236663a1576913c1bec137f32"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "b685239178ae492c894d8f28fb563618"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "9721c2b3b8c07dbf1059f519bd380e0b"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "72e9c612ce8126697ca64b36961706c5"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "61e24bee6f3ee38a1aab2b2cddac99fc"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "1063a6a658ffc7a4f7f1b697cc83c9b6"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "2a8889de229d738e4d408c31fd34d721"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "b09797aa373c14c6b01454ec3587105d"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "1616e59443d72c363d8739facff39ffc"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "fb51085763a0c2c82c2a98b810a0f722"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "bf7868f14187e477401e4fe1444b51c0"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "e4924083d1cb77236d9d41fd47201854"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "a1ba781a9962bc22c73bb87a6d67386b"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "7b9f30a75d56a3f997c8078acf46e185"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "52fee03cc81b57038cb34ce180b3eb84"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "a7f41c187187ebe5c9dd84761b9da11d"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "1c31c6c7adfa9580871590451a31f41c"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "0fb58fbd53538d00fc6103854eef7bdb"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "0ea41efd5adbe97773f7182e9f6a7ac1"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "eb141246510cc79f65a7d641bb116fc9"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "614510e4907c2e1182b6e640b29984f3"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "eec0ed41db6dac8e7919eac5dabb8b19"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "d06ca3eaad99e7889089305afbf1ceb5"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "5ebb13e033693fa34cd762988e0535d3"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "013416e1dafd7278931f7c29909d53c4"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "fc23412e9677f0e7f874b422571d950c"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "7c5463177ac118ea30d61be6532c7c6d"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "b11a9a820332d68bb0e01c5881103269"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "7c86b351a76812a9947335f9abc198ee"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "a77a73161f88f41ca3e29b158eb065f9"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "c52591053889793e13713bbe0172b788"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "e97fe2b54d3f6b11fb9d701f24ae3677"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "32e275271f9ce3d96e79b5779ef316b4"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "a27efb2ed875cb0aa1b16425a5ab0971"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/index.html",
    "revision": "1cab5a4804deacace320a1bff994cb58"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/order-management.html",
    "revision": "f3ef06e72f944faa2cc9e4df7ca5a227"
  },
  {
    "url": "2.3.0/MultiVendorMarketplace/vendor-management.html",
    "revision": "ed20f00c7f9c1e171094e26c0f9c232f"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "a63eb099dc732c19364eb11de919f5b3"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "11725ef042b1bff67cae1b59ab30d600"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "fbd559d906fb6c0d0a2fcd95e222801b"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "1164bc4c8de4651a184ac9af0a43a2ad"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "c3e6eda85db5578b47266a2986f5a058"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "8b3e0b1f4cbb43d2ab06445df5c147cc"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "bbfe4fa6edb0890fb363983e5aafcae7"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "2102ca77c5901a7553ddffbb393f6a89"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "6fcde9f5bf63ae49b6cb21bba5165e2b"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "6058a646f0ae682fe809c481ff8eed87"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "0615d48b9729af7eac71c5d16e365335"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "23b6f99ab048fd49b6d78cbb7a407096"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "5861662cc195359fcd9de7f1798f2781"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "41d691a3bf9eb220e42daf7027d6745e"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "019a90e9be423fc136dd201ca039e347"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "e03e148c680b80fb26f695ae9c175c5e"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "02cc9cf8ebce22ce7bb556146147c2c2"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "255561254b6d512255daed590f7bd7c3"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "02796a04ae615bd074272fe4b74d3ee1"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "31e2f5a41bd5ae7d6ef20eec2dc47da6"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "e4acac9b9c74a1013ffd21037eb1e550"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "3665274e88f30fc3bb9986cd0e3c9fa7"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "169bc2586d6f4f4691fef52f3aa09ab3"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "401a4810b378b71453da31a0c9635484"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "83b18cac85f80c144e85a78114483196"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "79c4e94699b868862d518c8ab6590b26"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "c7aa655ab30e2fb12a6d05333bdca458"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "564e39bbd963754cedb8db3063384026"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "5244d330987699ba004cc86102f4ba75"
  },
  {
    "url": "404.html",
    "revision": "ee8781636449fba6f977e4e0aed1230f"
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
    "url": "assets/js/1.73f5208b.js",
    "revision": "66575a70f11c861d8179170a48ddd497"
  },
  {
    "url": "assets/js/10.d897b661.js",
    "revision": "3a70d77ec5bd66582f22ed0665baef0d"
  },
  {
    "url": "assets/js/100.bc92f286.js",
    "revision": "112600a2db8dcfb0e4a9b5374ac59df6"
  },
  {
    "url": "assets/js/101.6f8de891.js",
    "revision": "202b2fdc1fac11d11fbf1ff2e414c64f"
  },
  {
    "url": "assets/js/102.6f27eec8.js",
    "revision": "0eaec9112c9aa04f45ace24ccdd0a9b2"
  },
  {
    "url": "assets/js/103.2733f25d.js",
    "revision": "13aa7ef3f182293eeca927ef5c4703f4"
  },
  {
    "url": "assets/js/104.f7c06022.js",
    "revision": "a38834f5fe557a0eaf1f1cba126173d2"
  },
  {
    "url": "assets/js/105.2e77cd4c.js",
    "revision": "d6565a551f9e7b5ad30575ba1aabf456"
  },
  {
    "url": "assets/js/106.2d29193d.js",
    "revision": "46db0473e6a7b31e5b5b938e3f6be265"
  },
  {
    "url": "assets/js/107.fa695993.js",
    "revision": "6563e583f8b2d50882c95d54d4acaa37"
  },
  {
    "url": "assets/js/108.7b39d244.js",
    "revision": "bacbe579b4a624dbd6c2e4f9bf6d43c6"
  },
  {
    "url": "assets/js/109.3ddeb257.js",
    "revision": "21298ddc2ded7dc8721e032a16c19c02"
  },
  {
    "url": "assets/js/11.36a316a0.js",
    "revision": "ef6827939700c1926c6d63b6dfde2b0e"
  },
  {
    "url": "assets/js/110.a68dfe33.js",
    "revision": "8c0d8f539fdd853be6354c3c66b5ffe1"
  },
  {
    "url": "assets/js/111.766dcfb7.js",
    "revision": "dbd33192c4049644e0dc46a4d014eb44"
  },
  {
    "url": "assets/js/112.7f669bc3.js",
    "revision": "5332ab159a03c36ead7b6365107010fe"
  },
  {
    "url": "assets/js/113.2014aa5c.js",
    "revision": "826540c3bcafb0412b02c8e2f192f799"
  },
  {
    "url": "assets/js/114.0e303a11.js",
    "revision": "d8b9bf72839cd93b0a871cfa3bc10d64"
  },
  {
    "url": "assets/js/115.bcb5b594.js",
    "revision": "156d94734459cb696ade7f0f490e196b"
  },
  {
    "url": "assets/js/116.29aa1260.js",
    "revision": "f587a8222f0bf26b9a3754a468dd5c6f"
  },
  {
    "url": "assets/js/117.dd123ba5.js",
    "revision": "c419127a83cdea1595ccdd511cfa16ba"
  },
  {
    "url": "assets/js/118.adc00f41.js",
    "revision": "6de5b079af66d225577bebb34ecc6e81"
  },
  {
    "url": "assets/js/119.b4d1d6ac.js",
    "revision": "7c1f5c1a145167516aa010450ce27f2a"
  },
  {
    "url": "assets/js/12.10af6760.js",
    "revision": "758e041e40e81de6fc27718a713a924c"
  },
  {
    "url": "assets/js/120.caf8bbb8.js",
    "revision": "678085d9969cecc454312f016b0b5170"
  },
  {
    "url": "assets/js/121.9b43000d.js",
    "revision": "2a2e599c067238705f7c833b23711143"
  },
  {
    "url": "assets/js/122.7d7a6c3f.js",
    "revision": "25e8bdd22df4f1bbd91b418864515407"
  },
  {
    "url": "assets/js/123.e7fef6aa.js",
    "revision": "b07cf2320f5c61abe599044082151e80"
  },
  {
    "url": "assets/js/124.1c37ab8f.js",
    "revision": "588743916f0fa442c988269903639187"
  },
  {
    "url": "assets/js/125.cba651ee.js",
    "revision": "4c1000d92299a88aa4761b9872625607"
  },
  {
    "url": "assets/js/126.8958f813.js",
    "revision": "319b9eb5f1135d83fffc05a52b58f724"
  },
  {
    "url": "assets/js/127.6d73fda2.js",
    "revision": "0609ff5d5438695c8eb3172b3ba93fd6"
  },
  {
    "url": "assets/js/128.dfb6c94b.js",
    "revision": "059d69def84a70b5fe1a20e5c2883235"
  },
  {
    "url": "assets/js/129.8d9663fc.js",
    "revision": "1be9bbde668c2421dfa1a03727783350"
  },
  {
    "url": "assets/js/13.39d56be8.js",
    "revision": "f72c4a86b1347d6a257846f2186cc181"
  },
  {
    "url": "assets/js/130.a189c8f8.js",
    "revision": "bb8b4daf4a5f195a0549eb21750554e6"
  },
  {
    "url": "assets/js/131.8731deb1.js",
    "revision": "2492561839547c2b21f72b1cb1766391"
  },
  {
    "url": "assets/js/132.a32e5b69.js",
    "revision": "892c96d5081e34dd4cc60f95ba654e71"
  },
  {
    "url": "assets/js/133.325649ce.js",
    "revision": "b83dc6716b22487eca9f1cc6c795b254"
  },
  {
    "url": "assets/js/134.d27f6882.js",
    "revision": "6574d16c707e1528f2a902cca5f00945"
  },
  {
    "url": "assets/js/135.210cdf6d.js",
    "revision": "3ff5fcdfbc8c310509814bbedde32b83"
  },
  {
    "url": "assets/js/136.316904f2.js",
    "revision": "56bdd0bbb4b34ee053d282f133cc4e9d"
  },
  {
    "url": "assets/js/137.81fa4439.js",
    "revision": "09142959f38fd4d48fd1a5c82307cac3"
  },
  {
    "url": "assets/js/138.c9cb334b.js",
    "revision": "5aafeba0b152f4601ce8400cb04b14a8"
  },
  {
    "url": "assets/js/139.dfd7b786.js",
    "revision": "51738ebb8b92e311787f273a685792e6"
  },
  {
    "url": "assets/js/14.f5cdacca.js",
    "revision": "009e503eca2d9c6ce3d56f5051023798"
  },
  {
    "url": "assets/js/140.9dfd6bc2.js",
    "revision": "fcf8c82bc195f1d38731595dc790f2c0"
  },
  {
    "url": "assets/js/141.cd649460.js",
    "revision": "6aaf4f584596af5f3f2b530e83a10912"
  },
  {
    "url": "assets/js/142.8aeec2a4.js",
    "revision": "5cf54a6ea15bbfb392b8ed8c63083781"
  },
  {
    "url": "assets/js/143.68f09216.js",
    "revision": "3881c984574713b386af9126f8cb6257"
  },
  {
    "url": "assets/js/144.d0c8aa2b.js",
    "revision": "9de6831199ef4c577373ec21f15ad67e"
  },
  {
    "url": "assets/js/145.484377eb.js",
    "revision": "a68b48972866e92806fff000c2f255c3"
  },
  {
    "url": "assets/js/146.53a0232f.js",
    "revision": "f5cf295929ac270cad4a93bfb1c80541"
  },
  {
    "url": "assets/js/147.a55c6384.js",
    "revision": "f8a90a2b2583ebda8311ebf2ee7b8a04"
  },
  {
    "url": "assets/js/148.cf3a1ecf.js",
    "revision": "1bb53c63dbe5b599297512239187b803"
  },
  {
    "url": "assets/js/149.d3a1f865.js",
    "revision": "76705ee40508376590e2444f0e05eda6"
  },
  {
    "url": "assets/js/15.c5358da0.js",
    "revision": "b591de1f6c6ed65928b3a8adbb7c3614"
  },
  {
    "url": "assets/js/150.42ff26a2.js",
    "revision": "a823f43a0b96ca8009153e734ad77d90"
  },
  {
    "url": "assets/js/151.87547404.js",
    "revision": "4e79866960b3fb88603d00b52fd3d0a5"
  },
  {
    "url": "assets/js/152.bb54cec8.js",
    "revision": "8f7a913162318a2e9a461d098e384cd3"
  },
  {
    "url": "assets/js/153.8fa568de.js",
    "revision": "2e081c77d4a52647bcefcbde0102b32a"
  },
  {
    "url": "assets/js/154.7819c69f.js",
    "revision": "db1e4e308a7b1abe04921be62df7a183"
  },
  {
    "url": "assets/js/155.134cdc98.js",
    "revision": "acd325796ca5ab345e14de067c346a39"
  },
  {
    "url": "assets/js/156.6b9d6e8c.js",
    "revision": "4c541bdc99f76fb0827db67bbf4ff18d"
  },
  {
    "url": "assets/js/157.2ec72933.js",
    "revision": "9471c846e8ac280b1f5b5c88c1892488"
  },
  {
    "url": "assets/js/158.1582063a.js",
    "revision": "3bc5bf7c18ddb25a7a12b509b4a7451d"
  },
  {
    "url": "assets/js/159.8eabda1f.js",
    "revision": "a5d0fb3866fcc60f2d8ea826259e6c2e"
  },
  {
    "url": "assets/js/16.d72b99fe.js",
    "revision": "55f2b7963873bec2008f4fc96b829336"
  },
  {
    "url": "assets/js/160.fd0cc9f3.js",
    "revision": "38cd36113d81bc493077999db7955756"
  },
  {
    "url": "assets/js/161.bff604bf.js",
    "revision": "b9751a604109ce0b15c4b24990ac893d"
  },
  {
    "url": "assets/js/162.7a022abb.js",
    "revision": "822dd4e8320ec16d431f3c22aa2325fe"
  },
  {
    "url": "assets/js/163.cc12ea38.js",
    "revision": "482996cb6ee78f7e7423953a9b1415db"
  },
  {
    "url": "assets/js/164.23400eb1.js",
    "revision": "68a9f2832680abfba6752dda9967dece"
  },
  {
    "url": "assets/js/165.61ce0ba1.js",
    "revision": "027e153291a273d08d0bc17e81d23cfd"
  },
  {
    "url": "assets/js/166.fc357c07.js",
    "revision": "afcefe2ab222e8066e9a7ff1be1f55c9"
  },
  {
    "url": "assets/js/167.9fce1335.js",
    "revision": "1cb679feb85161fa0f7dc52c547bf953"
  },
  {
    "url": "assets/js/168.a3ce3df7.js",
    "revision": "08d4303992b19dd1c3a0b89daa65ffcb"
  },
  {
    "url": "assets/js/169.b838fd76.js",
    "revision": "f4061036fa682019afb194125bb590c2"
  },
  {
    "url": "assets/js/17.3ba28912.js",
    "revision": "cb1efb279442407d26a15fdee5bdcd6d"
  },
  {
    "url": "assets/js/170.e328c6bc.js",
    "revision": "0899d4f747ca18d990da4b5bfff74e59"
  },
  {
    "url": "assets/js/171.d31f4d2e.js",
    "revision": "e1105a23b9634ed6704cd01fd825668d"
  },
  {
    "url": "assets/js/172.5b3b9efc.js",
    "revision": "73d5c8b4c2bcc21e2273a8fa4ab7d9f8"
  },
  {
    "url": "assets/js/173.4531e33e.js",
    "revision": "87017aa40b281b7d4a45849f0d043b75"
  },
  {
    "url": "assets/js/174.154ab9a5.js",
    "revision": "66ecc9076f55efb153f4dac87e5121ef"
  },
  {
    "url": "assets/js/175.0e754f7d.js",
    "revision": "ee6133f876e04ea8e1fac9399de94480"
  },
  {
    "url": "assets/js/176.f3b55739.js",
    "revision": "faf0654dd580d38a59064daf1dfffc37"
  },
  {
    "url": "assets/js/177.a576a151.js",
    "revision": "0756cd6aeb6c1a4d05f0b6475a81df95"
  },
  {
    "url": "assets/js/178.7857b359.js",
    "revision": "c25354c4a3653041007f893de93177f3"
  },
  {
    "url": "assets/js/179.94562056.js",
    "revision": "1acfbdea37874773c333df4be2ed9af4"
  },
  {
    "url": "assets/js/18.6777c6c2.js",
    "revision": "7e03eb7a85a5fdde0c800a5ff7a27bc6"
  },
  {
    "url": "assets/js/180.d6b0b6c6.js",
    "revision": "937347e015889c68082832d2a61c0d9a"
  },
  {
    "url": "assets/js/181.929b4df8.js",
    "revision": "d0b2c257f7962d7e6ca999ee6b6ee475"
  },
  {
    "url": "assets/js/182.e133d748.js",
    "revision": "450403901fa38734a8a64a2104ab43b5"
  },
  {
    "url": "assets/js/183.6df71874.js",
    "revision": "33351db2757c0585286ae05d7412463f"
  },
  {
    "url": "assets/js/184.24ca98c4.js",
    "revision": "6cee7bf2c917481ad049dcb04d5de981"
  },
  {
    "url": "assets/js/185.8061d613.js",
    "revision": "ce837f6ca8bee98bed9c591b548bc9f8"
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
    "url": "assets/js/188.6b6144d2.js",
    "revision": "0b56bf6817df48ff25469d8767462dbc"
  },
  {
    "url": "assets/js/189.3a2cb985.js",
    "revision": "bed2e44220855e61e57698fbf667587d"
  },
  {
    "url": "assets/js/19.be7b1260.js",
    "revision": "2c919343feb2af0149d59ee5f6d99ed4"
  },
  {
    "url": "assets/js/190.9e2c5874.js",
    "revision": "3bfa72f19e8005b825693fad683d6768"
  },
  {
    "url": "assets/js/191.b83a09f1.js",
    "revision": "d803f9965e34a46a0a5263995bcce20a"
  },
  {
    "url": "assets/js/192.b2d867bf.js",
    "revision": "7657b1c6e1a3fdeebc8aaf1e27439fa6"
  },
  {
    "url": "assets/js/193.27d41d4d.js",
    "revision": "6ea49fe98c0ddc60348a24bea990b840"
  },
  {
    "url": "assets/js/194.51f8de59.js",
    "revision": "0e0953535b3d01f6f25888fb13bfc125"
  },
  {
    "url": "assets/js/195.48e00f91.js",
    "revision": "7144b77ba97aef4d88a3ac3d79cf1c63"
  },
  {
    "url": "assets/js/196.a76e7253.js",
    "revision": "990850d952da721640e5ae7ae9ff1366"
  },
  {
    "url": "assets/js/197.722c2d1b.js",
    "revision": "d0b37cfa1286678fdc794de830d38a95"
  },
  {
    "url": "assets/js/198.036b8dd4.js",
    "revision": "c10dedb09570f7f212de7dc99db4996f"
  },
  {
    "url": "assets/js/199.51387af3.js",
    "revision": "06a2c5caf839d44eef26c5af37e4e59b"
  },
  {
    "url": "assets/js/2.911fed4a.js",
    "revision": "f04a3a426cfd206b317f1bbd16d0e377"
  },
  {
    "url": "assets/js/20.fd8fbdd7.js",
    "revision": "bec4a73ff691f14ffeb63b9d5714f070"
  },
  {
    "url": "assets/js/200.1a014d74.js",
    "revision": "a1248bc3be11af959ccd79500e371f89"
  },
  {
    "url": "assets/js/201.c801cd09.js",
    "revision": "6f7956786fb003d769a7e7cc0aee062d"
  },
  {
    "url": "assets/js/202.9624508f.js",
    "revision": "22e161aae8754c74ee39e1b1fb218ac4"
  },
  {
    "url": "assets/js/203.edc742f1.js",
    "revision": "686eca37d304e4c3b2b21fa38f78553e"
  },
  {
    "url": "assets/js/204.eafde527.js",
    "revision": "9e7e816b0dd8ab0826d2104e0af40146"
  },
  {
    "url": "assets/js/205.a9e76252.js",
    "revision": "4c1edb1ef8feabfa46f1c60df5243c66"
  },
  {
    "url": "assets/js/206.7687db4a.js",
    "revision": "aa26a2053bda074f6837cdc3a266f72a"
  },
  {
    "url": "assets/js/207.6cd6c674.js",
    "revision": "283d9c72a2250dcbec48393b0be6bdf9"
  },
  {
    "url": "assets/js/208.6d48bd5d.js",
    "revision": "afd3f478b43d684d2302ae7324899e66"
  },
  {
    "url": "assets/js/209.fc1fda2a.js",
    "revision": "f6593bab79f97faa3d0aad44ba78079f"
  },
  {
    "url": "assets/js/21.8f75982c.js",
    "revision": "4aba53555cbef321deefc69a53279fd1"
  },
  {
    "url": "assets/js/210.94d09d64.js",
    "revision": "d9ed0f6e0b587245094089dc7b35c232"
  },
  {
    "url": "assets/js/211.fd52ae6d.js",
    "revision": "4982479e1d889c0a485e74fc473a73b5"
  },
  {
    "url": "assets/js/212.ec97e16f.js",
    "revision": "867ef699d68d1d3297bcc3bc8be6e03b"
  },
  {
    "url": "assets/js/213.9db39e1a.js",
    "revision": "a9965298d3c0eb63fe62af235579b7ea"
  },
  {
    "url": "assets/js/214.3d8c9600.js",
    "revision": "4cccaf0dbdaae08ae0039a22f3eec9f2"
  },
  {
    "url": "assets/js/215.af411ee2.js",
    "revision": "83f5c22f819431cd88f9a4005c2ca9f8"
  },
  {
    "url": "assets/js/216.72812a36.js",
    "revision": "a09844b03de74024a6c2aa97ff532b0f"
  },
  {
    "url": "assets/js/217.43121042.js",
    "revision": "627187184fbf8ede68161bfecda30b4f"
  },
  {
    "url": "assets/js/218.824de139.js",
    "revision": "d52bceb34357dac86d82dacb87d0f3ba"
  },
  {
    "url": "assets/js/219.dc742d19.js",
    "revision": "b1d154c05b1138fd59d687964b7f1735"
  },
  {
    "url": "assets/js/22.802c99e4.js",
    "revision": "5deb4af8afeebaf4c61935feaf136031"
  },
  {
    "url": "assets/js/220.e0f99985.js",
    "revision": "465461dc8610f67505f3b5b870b9c8e0"
  },
  {
    "url": "assets/js/221.55cf565a.js",
    "revision": "82c502e5665abdbc255554a8211a8a0a"
  },
  {
    "url": "assets/js/222.705e2e51.js",
    "revision": "e90159739ea7d74eb63296cf9127b4bf"
  },
  {
    "url": "assets/js/223.ae6c2355.js",
    "revision": "81a730b610f35a99183bf0347c7fa7e9"
  },
  {
    "url": "assets/js/224.e5540155.js",
    "revision": "6f463839b0c1c74cd3ca188eafe1acd4"
  },
  {
    "url": "assets/js/225.12562aed.js",
    "revision": "3575848eb48f72ca45ab543f1c43a26c"
  },
  {
    "url": "assets/js/226.c33d4379.js",
    "revision": "28483efcb12fc1e04888eb964cd6695c"
  },
  {
    "url": "assets/js/227.380aece8.js",
    "revision": "a953168897534533a22bce42c19488d8"
  },
  {
    "url": "assets/js/228.eba17a43.js",
    "revision": "7f914def7cb6cfca877cb05ead379d59"
  },
  {
    "url": "assets/js/229.45b4bfaf.js",
    "revision": "95e105906e53db6b97ba6b32f6b904f8"
  },
  {
    "url": "assets/js/23.b52163ee.js",
    "revision": "48b5fb9784f644926bd7942a917b0256"
  },
  {
    "url": "assets/js/230.9b29113b.js",
    "revision": "a34e346c90ba75ed4df528ed76de87e7"
  },
  {
    "url": "assets/js/231.07806483.js",
    "revision": "a456c071dba0b96fb82b4f442a58c223"
  },
  {
    "url": "assets/js/232.bbb2e720.js",
    "revision": "392b7f8de9741620558ffa04dc3162b4"
  },
  {
    "url": "assets/js/233.73f26620.js",
    "revision": "cd250998d80c47e07d6a509bfdc2628d"
  },
  {
    "url": "assets/js/234.3cb7f1d3.js",
    "revision": "b69f7e527f875c7acadd4ee224315f3d"
  },
  {
    "url": "assets/js/235.4ff8e996.js",
    "revision": "331b68666fccd34f09131a1ad67ad5f1"
  },
  {
    "url": "assets/js/236.72cf719c.js",
    "revision": "811a4f178bea634ab9b56ca1a7199af4"
  },
  {
    "url": "assets/js/237.55bd49f0.js",
    "revision": "848931cd7597f2c92d66b80e26b7326e"
  },
  {
    "url": "assets/js/238.6157a216.js",
    "revision": "a7b3e50532cda247a00fb48c4168e772"
  },
  {
    "url": "assets/js/239.e08de546.js",
    "revision": "2d59e1782ca744b500ef316eeee3d132"
  },
  {
    "url": "assets/js/24.015f5e6c.js",
    "revision": "83e3694f7b629e61429178eb236afb40"
  },
  {
    "url": "assets/js/240.7237233b.js",
    "revision": "ded9de5cecd32a80a44ebf936dbc26c0"
  },
  {
    "url": "assets/js/241.de06c8a3.js",
    "revision": "e92ee4e500f234f9d177f584c9bfe892"
  },
  {
    "url": "assets/js/242.a3c5eb92.js",
    "revision": "48bcec38d358505340141471e49ef412"
  },
  {
    "url": "assets/js/243.93f525e7.js",
    "revision": "3604ae0ed1293dbfb19489200b17564f"
  },
  {
    "url": "assets/js/244.ba3f0ea9.js",
    "revision": "25ca4a3c53ddf297b3d2eba7d91bb665"
  },
  {
    "url": "assets/js/245.e31bcf3b.js",
    "revision": "764ca418e060d16f275141e4951e8264"
  },
  {
    "url": "assets/js/246.0a1585cf.js",
    "revision": "4646807e2e1575dcd2c538b482c14b5d"
  },
  {
    "url": "assets/js/247.de6c44ab.js",
    "revision": "83e88837b70b6f9454d1f2520cc48e10"
  },
  {
    "url": "assets/js/248.a6e7b5a4.js",
    "revision": "9349686c18d0f75d7b9d4b4999514018"
  },
  {
    "url": "assets/js/249.9180aefe.js",
    "revision": "d1855d4d264733a105e43dff5433be0e"
  },
  {
    "url": "assets/js/25.0b835f2a.js",
    "revision": "f0e3713e4917a30416a5cd9b43332970"
  },
  {
    "url": "assets/js/250.7fa80f3c.js",
    "revision": "545fa02c35324c18092f578a8a1f4026"
  },
  {
    "url": "assets/js/251.5acf5076.js",
    "revision": "4e06522d3c8c896aede99b412671e0d2"
  },
  {
    "url": "assets/js/252.5a78bb11.js",
    "revision": "4b30a13118b6c9c06b5d95a5d0438f09"
  },
  {
    "url": "assets/js/253.b24c1577.js",
    "revision": "e37158af51b610cfc37d7e2c5800ce80"
  },
  {
    "url": "assets/js/254.1987df2e.js",
    "revision": "23a42ea14a6a96ec19b8c907f2ee12e4"
  },
  {
    "url": "assets/js/255.052aa793.js",
    "revision": "29a534fc8fa21816e981ab73fae50a2c"
  },
  {
    "url": "assets/js/256.710a7093.js",
    "revision": "eb7354705e5b11361d6ee5fd42e3bf0e"
  },
  {
    "url": "assets/js/257.1b32accd.js",
    "revision": "cd6bf31f546ad14d28f75251d9e46025"
  },
  {
    "url": "assets/js/258.1ba999d2.js",
    "revision": "b5dfc5324f5d8654cf90936f826f9ea9"
  },
  {
    "url": "assets/js/259.c7b73f5d.js",
    "revision": "4ce5c72a428f8ef01303e22cd979ec0e"
  },
  {
    "url": "assets/js/26.46e15054.js",
    "revision": "77e4a1cebaf16b4c2883ab2fcb58a6fc"
  },
  {
    "url": "assets/js/260.d2ccbea2.js",
    "revision": "267ef429a2cc5859c4b5a39900edc290"
  },
  {
    "url": "assets/js/261.99d36918.js",
    "revision": "0d663ded3d7aabdef20227b62642a9a5"
  },
  {
    "url": "assets/js/262.0aa45c40.js",
    "revision": "d68dc92c925b2631270d5c9ff2540c9d"
  },
  {
    "url": "assets/js/263.ac2f123c.js",
    "revision": "985d1679aaf1835568e913ed2d9c8be4"
  },
  {
    "url": "assets/js/264.c377526b.js",
    "revision": "6562bc3f44bac3fbc58c566ba75f9c9c"
  },
  {
    "url": "assets/js/265.eb22dbb5.js",
    "revision": "508cc9fc74e0d35670c2775b2f5beb79"
  },
  {
    "url": "assets/js/266.d27460dc.js",
    "revision": "2e9ab993b22c70c297edcb5a494bd422"
  },
  {
    "url": "assets/js/267.d1f94ff8.js",
    "revision": "dc3dc64e04630ea631e619ce60472514"
  },
  {
    "url": "assets/js/268.6976b7cf.js",
    "revision": "910887139c3f132104dfab567e7b321e"
  },
  {
    "url": "assets/js/269.4db92f90.js",
    "revision": "920cff43c9eea2ac1ae3ae20e5e34305"
  },
  {
    "url": "assets/js/27.03044b27.js",
    "revision": "be27d4555202f40c84cf5c3a4e3234c1"
  },
  {
    "url": "assets/js/270.1f651528.js",
    "revision": "bc3676209b3f54af010fe1c0513a1f6e"
  },
  {
    "url": "assets/js/271.cc226384.js",
    "revision": "a95eaf120e1c0e9b068b901e4d1f5a80"
  },
  {
    "url": "assets/js/272.8083ae3f.js",
    "revision": "46260951b9099fbcfffde8b14b9c5768"
  },
  {
    "url": "assets/js/273.34250c63.js",
    "revision": "1a94860eb466d6f6d2ea660a9a9157b5"
  },
  {
    "url": "assets/js/274.8f1dfe91.js",
    "revision": "77c3d21a2c260558e5e1d7b7a11a88f6"
  },
  {
    "url": "assets/js/275.dcd4681b.js",
    "revision": "09910e12daa2d0bd5a26696c91f50040"
  },
  {
    "url": "assets/js/276.a25fda90.js",
    "revision": "4678111fb3ef38c1b5e8ad2c05084533"
  },
  {
    "url": "assets/js/277.af279588.js",
    "revision": "379175d0d0eb890b83f0e4ac5d3dee9f"
  },
  {
    "url": "assets/js/278.e578cb78.js",
    "revision": "caae555c70c4e8bcf5643e980e3c4c05"
  },
  {
    "url": "assets/js/279.32ea11d4.js",
    "revision": "64e16542f06ef375265aa614455e4304"
  },
  {
    "url": "assets/js/28.5ec358b6.js",
    "revision": "f5fac3b00a720469aa92e53a2daf85b2"
  },
  {
    "url": "assets/js/280.afd0d681.js",
    "revision": "dd35de599596267f8ea91ec64abf98e9"
  },
  {
    "url": "assets/js/281.5f92174a.js",
    "revision": "f2ddac23213db6fd16832080533abe27"
  },
  {
    "url": "assets/js/282.6f7499e8.js",
    "revision": "0daf9164ab8dfded4329dbacfffc6646"
  },
  {
    "url": "assets/js/283.f26657cb.js",
    "revision": "1e39766f877d68c061ed4d48d080499c"
  },
  {
    "url": "assets/js/284.0d88be38.js",
    "revision": "14c62e9c36d597a15c4d674269d56ce7"
  },
  {
    "url": "assets/js/285.29e94e73.js",
    "revision": "10599bb12eeeb84a13770583589f4309"
  },
  {
    "url": "assets/js/286.ed0e3107.js",
    "revision": "db09c6eea3c3834da62b9ef2424188b6"
  },
  {
    "url": "assets/js/287.d19be9db.js",
    "revision": "ee00a41222528ba6a5c40e9c60b3ce9a"
  },
  {
    "url": "assets/js/288.98686e6c.js",
    "revision": "27d33b8b7639f556017b96f06b6fa425"
  },
  {
    "url": "assets/js/289.657eb203.js",
    "revision": "9a1743b2f9bc3350fba77216b6693518"
  },
  {
    "url": "assets/js/29.43aed736.js",
    "revision": "7893646b1ec7ba97609bc7b20d54aa4e"
  },
  {
    "url": "assets/js/290.a29ccc2c.js",
    "revision": "3f891a2d0945f2c60b2a3630d430b66c"
  },
  {
    "url": "assets/js/291.c849e85f.js",
    "revision": "2807ec3538278b49e9276901ae90ca78"
  },
  {
    "url": "assets/js/292.64921e5e.js",
    "revision": "61c7150dadd512640e9b449b28d83e2f"
  },
  {
    "url": "assets/js/293.ae16494f.js",
    "revision": "db557aa4b2176edbe36c818906dcf2a2"
  },
  {
    "url": "assets/js/294.24681dfb.js",
    "revision": "b5ee1b0448ad1a4d75e0ebdfff4d164c"
  },
  {
    "url": "assets/js/295.65cbffdb.js",
    "revision": "5f5f79b2634312bd076bf25b34f25be3"
  },
  {
    "url": "assets/js/296.54762094.js",
    "revision": "941b24006aded3818c7254ea0cfa409d"
  },
  {
    "url": "assets/js/297.16552527.js",
    "revision": "e7f8ba87ce76f2db60696f7c30a2b0a6"
  },
  {
    "url": "assets/js/298.05569aab.js",
    "revision": "8ebe907bd9840b5b71c3a90f18870055"
  },
  {
    "url": "assets/js/299.3e705db4.js",
    "revision": "73a7a0ab9617e3f4191114a88ad2ff28"
  },
  {
    "url": "assets/js/3.756e7b0f.js",
    "revision": "53ee4da4a99fdebfe1ae4ef0363840de"
  },
  {
    "url": "assets/js/30.1d610d2c.js",
    "revision": "53f67c94feb7b601a837c8dd5bdae7a4"
  },
  {
    "url": "assets/js/300.1ee05664.js",
    "revision": "512ba848ed5d9d1e5eb2b9826ed88138"
  },
  {
    "url": "assets/js/301.cab15499.js",
    "revision": "62325d12f0ad50f039fbe1f8a8ba4ac0"
  },
  {
    "url": "assets/js/302.f2b9c713.js",
    "revision": "78fe8de8697615c1a8cc26e078f294ec"
  },
  {
    "url": "assets/js/303.b9f57b3b.js",
    "revision": "57d6790c667590f8b4f05a40ae5490e0"
  },
  {
    "url": "assets/js/304.5c6128a1.js",
    "revision": "48bab47438a2a1fa1932712152449163"
  },
  {
    "url": "assets/js/305.65d10f23.js",
    "revision": "3fc9df7972b69851b244ce41ee6bbcf1"
  },
  {
    "url": "assets/js/306.ae1f6386.js",
    "revision": "1a550573b47fd6556b0628ec3a52ba9f"
  },
  {
    "url": "assets/js/307.6f8c975f.js",
    "revision": "a718962f3ea2050c45119ab263a59710"
  },
  {
    "url": "assets/js/308.1f218d16.js",
    "revision": "da6301967e48848b758a09e0d582cf43"
  },
  {
    "url": "assets/js/309.dc9282e2.js",
    "revision": "ce98fa026568a4e7f7f2369d31fc8021"
  },
  {
    "url": "assets/js/31.5514e2a4.js",
    "revision": "9460371393d411db1bb78f4b096008d9"
  },
  {
    "url": "assets/js/310.64877328.js",
    "revision": "990df755334d7d9658788e3e4888aa96"
  },
  {
    "url": "assets/js/311.09b9c7c6.js",
    "revision": "9b226f5a17d87a0c78de0790b32e6152"
  },
  {
    "url": "assets/js/312.0078e3e4.js",
    "revision": "158d90df03d6864c473b153bf6ae21ee"
  },
  {
    "url": "assets/js/313.06a70aeb.js",
    "revision": "8bb185381563a7984d3d3035e1b37587"
  },
  {
    "url": "assets/js/314.251aa771.js",
    "revision": "2400cd47a030f5492faaea901499897f"
  },
  {
    "url": "assets/js/315.579348b2.js",
    "revision": "69853f8fe06a39ff45921ccd1fdfea09"
  },
  {
    "url": "assets/js/316.779bb3e7.js",
    "revision": "bc0bf2d07f0499acd01f747ccca24003"
  },
  {
    "url": "assets/js/317.f12fbaa4.js",
    "revision": "72b03cd1bfb33d4f5d06d4b717a924ae"
  },
  {
    "url": "assets/js/318.0b1428be.js",
    "revision": "5c4e2b1bb897b0754ccc166a7c4e52f2"
  },
  {
    "url": "assets/js/319.4f3a4990.js",
    "revision": "ca3dd97f87d77aad87d1e883bfd62ba4"
  },
  {
    "url": "assets/js/32.f81beef4.js",
    "revision": "04d2b0656103c00ae06feeeb427d9b46"
  },
  {
    "url": "assets/js/320.e007c956.js",
    "revision": "ee4c8869456aa4878947eef2126dd01c"
  },
  {
    "url": "assets/js/321.922f33a0.js",
    "revision": "21bd5eef543b81641450c65a79146f84"
  },
  {
    "url": "assets/js/322.8a56e565.js",
    "revision": "e51e12185bba81c2254f03d50753ae16"
  },
  {
    "url": "assets/js/323.92348360.js",
    "revision": "c3e5989aad971e8ea97c99d7b7958ec0"
  },
  {
    "url": "assets/js/324.3a8c39e1.js",
    "revision": "5afafa68906b813a80561b97aed15bfe"
  },
  {
    "url": "assets/js/325.2efbd9c9.js",
    "revision": "acb2b6c6a6dc849b81442c097c1751ef"
  },
  {
    "url": "assets/js/326.a63293c5.js",
    "revision": "793b559e845e0fb9a5520ff80420ba26"
  },
  {
    "url": "assets/js/327.bff38e95.js",
    "revision": "ec90f71bd8bfd26fa2b39522a9bffc80"
  },
  {
    "url": "assets/js/328.9b445535.js",
    "revision": "91245edfc0ff027b379bd8e12ba2d43e"
  },
  {
    "url": "assets/js/329.88c4828a.js",
    "revision": "32aa31e41c16f6fae464d234d6f2765e"
  },
  {
    "url": "assets/js/33.2002c1fe.js",
    "revision": "0f7f135e8b2170fcd871d7ea0d25f2aa"
  },
  {
    "url": "assets/js/330.a51bc168.js",
    "revision": "12dba357569a50b754d193df9a45e4a2"
  },
  {
    "url": "assets/js/331.be6af209.js",
    "revision": "c4aff2f07e1439667592caa210098586"
  },
  {
    "url": "assets/js/332.f0743508.js",
    "revision": "b779dc451fc2c10f38f3af2b99fb0eab"
  },
  {
    "url": "assets/js/333.e311b27d.js",
    "revision": "92eac82af5e6a82a0bb6a67de52b1d03"
  },
  {
    "url": "assets/js/334.d9d5c9aa.js",
    "revision": "31ed85642fe0b50090e4bc44fdb1c6b0"
  },
  {
    "url": "assets/js/335.cdf9b386.js",
    "revision": "a1f01fb5ab5d3944a913ae1fe6dc16f1"
  },
  {
    "url": "assets/js/336.85fda637.js",
    "revision": "3216d4a7f3a08a1d1c8e684e87cbe0a8"
  },
  {
    "url": "assets/js/337.ef8f2fbd.js",
    "revision": "3dbdbf08dcb116bb71fd5f3d44c68830"
  },
  {
    "url": "assets/js/338.ed4937ba.js",
    "revision": "7751416e822a958945669dfbf34e5eaa"
  },
  {
    "url": "assets/js/339.b28ca42e.js",
    "revision": "5e52a5e16491d145e1715449e027db59"
  },
  {
    "url": "assets/js/34.718c5f40.js",
    "revision": "d220e12b8a2594cdc8228121f0bc97ca"
  },
  {
    "url": "assets/js/340.9d6c0d59.js",
    "revision": "37e3612046096c14144f42f5c7862f6b"
  },
  {
    "url": "assets/js/341.ddf01fe3.js",
    "revision": "be06d53cefc62c9a2cb1de1e91f73309"
  },
  {
    "url": "assets/js/342.bd4f0155.js",
    "revision": "9d232d39e786405066013e1c464b5313"
  },
  {
    "url": "assets/js/343.3667c52a.js",
    "revision": "e3be4a45e208adddb8512c5f7f108213"
  },
  {
    "url": "assets/js/344.5f64c055.js",
    "revision": "98a02fff859db57c6c92b082ec0dd15e"
  },
  {
    "url": "assets/js/345.cd5797ea.js",
    "revision": "eff436b6ed683012ce5ca45647089b72"
  },
  {
    "url": "assets/js/346.ee1e4ce6.js",
    "revision": "919ecf917745167a026e173e22b972d1"
  },
  {
    "url": "assets/js/347.195b12f8.js",
    "revision": "d7fa566b10644318c974c720ecd8161a"
  },
  {
    "url": "assets/js/348.3c1d5383.js",
    "revision": "6dc51868d182e41253c3295c5a7489a6"
  },
  {
    "url": "assets/js/35.a05359b2.js",
    "revision": "1a642edb0aa8acf2dfd599ba0e8942b9"
  },
  {
    "url": "assets/js/36.e531f94e.js",
    "revision": "370a7b2f5cb2995cd368f56d201c75f2"
  },
  {
    "url": "assets/js/37.7f153c15.js",
    "revision": "e657f26e80ff15c63b481e9e0e409bb5"
  },
  {
    "url": "assets/js/38.7a12afeb.js",
    "revision": "147b21d09700c525e494c4233df5c1ed"
  },
  {
    "url": "assets/js/39.82e83748.js",
    "revision": "1dd544abb08c98b49760fbd29025434f"
  },
  {
    "url": "assets/js/4.96ebe9a5.js",
    "revision": "09aadafb73721df018249b57d5a35931"
  },
  {
    "url": "assets/js/40.9c05e233.js",
    "revision": "80bd58e02a7300d167ad83f9f6ee6042"
  },
  {
    "url": "assets/js/41.eeac0331.js",
    "revision": "dcd4f73c830fe1fa2eebf4c06357410c"
  },
  {
    "url": "assets/js/42.2390665f.js",
    "revision": "2e52978fbc870d3b08a9a42561bc0947"
  },
  {
    "url": "assets/js/43.41948b69.js",
    "revision": "69ad5c80625668efb676c7c10a2e8e85"
  },
  {
    "url": "assets/js/44.13ed6544.js",
    "revision": "090f47ffa0791d03fea097613613bd42"
  },
  {
    "url": "assets/js/45.82ef5e52.js",
    "revision": "97de6dcc7161a1620c628f1506c1e9e1"
  },
  {
    "url": "assets/js/46.ca0658d5.js",
    "revision": "57f1722187bae579506628b22788f6e6"
  },
  {
    "url": "assets/js/47.896bcbe2.js",
    "revision": "7337f1956ecc88859c8407b702eb6f70"
  },
  {
    "url": "assets/js/48.793b56cf.js",
    "revision": "abe40880b09e3109a5d65b050aaebcab"
  },
  {
    "url": "assets/js/49.a6650bd0.js",
    "revision": "a05ced659444c1d7decf3fbe4d38d892"
  },
  {
    "url": "assets/js/5.9aa903ee.js",
    "revision": "1feb9a68186de7f56608049a283d858e"
  },
  {
    "url": "assets/js/50.c212b774.js",
    "revision": "dc36e90f22db880da29f271f6f7b0497"
  },
  {
    "url": "assets/js/51.cfd7d5ac.js",
    "revision": "fb435bcde942c17336167a68637abfda"
  },
  {
    "url": "assets/js/52.2ce7e6cc.js",
    "revision": "08e323d54478762c7eb30dc210b15239"
  },
  {
    "url": "assets/js/53.8fd735c7.js",
    "revision": "e4b19ec81b3b3ba333213f2665bccd9a"
  },
  {
    "url": "assets/js/54.1ce633c3.js",
    "revision": "e95432d4eeb6f5766fcba7ea03193c57"
  },
  {
    "url": "assets/js/55.e044a0d5.js",
    "revision": "6956fba9506466a01b36513ef349d8cd"
  },
  {
    "url": "assets/js/56.bc1e0b11.js",
    "revision": "db1ab3d1173f711bbb26fe5e64b4deb2"
  },
  {
    "url": "assets/js/57.01055bfc.js",
    "revision": "373e53516edd839688953fa86e9e5010"
  },
  {
    "url": "assets/js/58.c0a5f14a.js",
    "revision": "aca22440e1dc99a0ed6007d0c68beca1"
  },
  {
    "url": "assets/js/59.0fec26f2.js",
    "revision": "44d66e7658de041586baf51084de1182"
  },
  {
    "url": "assets/js/60.8387a7ad.js",
    "revision": "86388cf4e815e099cb935256260445f1"
  },
  {
    "url": "assets/js/61.efb869ec.js",
    "revision": "89dd21d05b285e29f163ded7c8650de3"
  },
  {
    "url": "assets/js/62.f2b17f2e.js",
    "revision": "16899a28f8abd3901b7267de7ab5aec0"
  },
  {
    "url": "assets/js/63.28687f55.js",
    "revision": "6129a26b9adabbfc191202426545fbe3"
  },
  {
    "url": "assets/js/64.ffd2986c.js",
    "revision": "f47a9218fc9f449a29712d53b8b63a1d"
  },
  {
    "url": "assets/js/65.13f176ec.js",
    "revision": "b30d01d052e88938a6a326a56b1cf686"
  },
  {
    "url": "assets/js/66.3e9fb478.js",
    "revision": "ac0a76878ce15e82f2a3da60c998ba2e"
  },
  {
    "url": "assets/js/67.607235de.js",
    "revision": "f4c6edd70fa3504b61491baaf0e7ce11"
  },
  {
    "url": "assets/js/68.48b9747f.js",
    "revision": "4714b74966fc68babeb76db7d82561fb"
  },
  {
    "url": "assets/js/69.92f0bf68.js",
    "revision": "c838fcdfdc6bfd72dcf210e7ae2855b4"
  },
  {
    "url": "assets/js/70.ed056183.js",
    "revision": "1adfc2d3fb3fd70d1b762ab08a9b8a3a"
  },
  {
    "url": "assets/js/71.900eb2a5.js",
    "revision": "af6a6045cc7a38b3a7d8365141e09d62"
  },
  {
    "url": "assets/js/72.becc3e9c.js",
    "revision": "aba0e46d0813348338dd88432008a49c"
  },
  {
    "url": "assets/js/73.955cdc96.js",
    "revision": "2229fbd6599c74b8d9628ddd30deb596"
  },
  {
    "url": "assets/js/74.10a874f9.js",
    "revision": "8d54ea9abd6146229a399df6aa7a3289"
  },
  {
    "url": "assets/js/75.34e24895.js",
    "revision": "5fec95a28c2a413c9ab68ed79f7056f2"
  },
  {
    "url": "assets/js/76.f4d1891d.js",
    "revision": "6336f08c20acca3805a51943918ad640"
  },
  {
    "url": "assets/js/77.2ea7926a.js",
    "revision": "4a78d468320018b353541801fdcedbe2"
  },
  {
    "url": "assets/js/78.5578666e.js",
    "revision": "bf23209cd6f20d7d321d8ef2a82ee584"
  },
  {
    "url": "assets/js/79.570d430d.js",
    "revision": "b0f5239baa488286b0d6461e1c2bbd22"
  },
  {
    "url": "assets/js/8.d7c0fdf5.js",
    "revision": "56114fd4273ad04910c9c781147f1917"
  },
  {
    "url": "assets/js/80.63545ed6.js",
    "revision": "9ac00083cd849817dbe21372b066fa06"
  },
  {
    "url": "assets/js/81.ad3ed716.js",
    "revision": "beb76f5b980edeb4cca7b4b34aeeb694"
  },
  {
    "url": "assets/js/82.e54fc6e2.js",
    "revision": "15532254d35d531c7c87e54f267fc7d3"
  },
  {
    "url": "assets/js/83.ee19e1b7.js",
    "revision": "709c7b1555362dc47069d205edb3c84d"
  },
  {
    "url": "assets/js/84.e45c7b38.js",
    "revision": "a9ede69c10af9e9c8a224d9cf1dcce55"
  },
  {
    "url": "assets/js/85.bdb84123.js",
    "revision": "a407ce94d1b744dc6518b93e9f5c034a"
  },
  {
    "url": "assets/js/86.99b67c32.js",
    "revision": "6201d03808db1bfdf6383fb2979639ac"
  },
  {
    "url": "assets/js/87.811cffa9.js",
    "revision": "de5ef680e0d909e261dfdd6984748908"
  },
  {
    "url": "assets/js/88.5c6aa341.js",
    "revision": "9c94501217ccf942b8203c06c7ca9000"
  },
  {
    "url": "assets/js/89.4829d031.js",
    "revision": "5a499b7613d0a8b984be67202646fb4d"
  },
  {
    "url": "assets/js/9.bb98f31b.js",
    "revision": "5a5121c4da80209699876a10e2771717"
  },
  {
    "url": "assets/js/90.0f5b6957.js",
    "revision": "e3600b2261df34ae8b5933517ff043e9"
  },
  {
    "url": "assets/js/91.7554b36f.js",
    "revision": "c9315903b40b1a476b4c405f1d623b78"
  },
  {
    "url": "assets/js/92.81714ea6.js",
    "revision": "a3cf350c1635982f3459e77617cd60d0"
  },
  {
    "url": "assets/js/93.f77c19b1.js",
    "revision": "8918ea92b6a5f2a3e82c3a66fb4c3776"
  },
  {
    "url": "assets/js/94.2dbf06ef.js",
    "revision": "07693e48ec1ccb32ef6b621d6e50e9c4"
  },
  {
    "url": "assets/js/95.9a6c6c09.js",
    "revision": "723de83fc5162851c178472aafd4c246"
  },
  {
    "url": "assets/js/96.c427a32e.js",
    "revision": "50c78504fc797f04a3bd34280bd16e18"
  },
  {
    "url": "assets/js/97.eecc58b9.js",
    "revision": "0ac5a6843b5ab3ad8a2540fb898304ce"
  },
  {
    "url": "assets/js/98.74fce52a.js",
    "revision": "ff39727ffb939961efad71aabacbc3ca"
  },
  {
    "url": "assets/js/99.f8cd2eea.js",
    "revision": "f288bf3bed2807a8ac0bdbef247258d1"
  },
  {
    "url": "assets/js/app.60db5925.js",
    "revision": "ebaa75a92506ce2722de1c89282206e1"
  },
  {
    "url": "assets/js/vendors~docsearch.3ae9fad0.js",
    "revision": "e3f26cd556464fffa906a503c9cc2428"
  },
  {
    "url": "index.html",
    "revision": "cafe7922339aed3546d7629344c19509"
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
