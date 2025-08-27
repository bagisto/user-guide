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
    "revision": "c3f4fdff171230774e7499898aeb27bc"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "dea2bf745cb416c8d7c8464e315dc2b5"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "385250b7c9ea7cf0473d401f52a6fea6"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "07a060b9820c19c9510bf674472da572"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "0704fbab14e68d180fc62f6af69a4e36"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "99602073f2aa8b471de4e47746ea5ccc"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "f86ce1938ff430df77ce2c24ef2ac508"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "2e0a906e9f88a1a81db6907221b634f5"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "c1d581d7d64bd70e8cc58ce0240057ea"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "c62c9de7fdfca1cc36d9f49bd4549b85"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "c60735134c2aaa0a145e7650ed12cfd9"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "f10c871905a1271a40afb23bff7ddff8"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "cff68b14128b3f3ce482081cb327139c"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "1d4464dcd09247c246defa3d3f9c0b7c"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "fb082634a33d6e971d2628dbc13e70d6"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "3bea1e8e8901790e5350532d271f2052"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "b4f57ee5a66ecba665c724cd4256b022"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "feccf02e5e9dadcff4ff5c19ca53d997"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "9f9a518137339e13453fb346f6855813"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "196752d36f3b8af42f8c8c20badd6a9d"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "0cd7d4cc3081d17af8112ee2cdda6710"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "6425394030937f09651de950b4630d98"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "f40d3e3ed98fe399ec9c04bfca09e696"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "f20a0455d0ca4c79b6f4137f82479f46"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "a32e794ea1ebc56819cc3ba0d809ebfa"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "02edf38602e3dc76988a623b4070f8ab"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "be69cb11800aeeefca30c5a6215f41e8"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "eee36a684d8487f47a1354521080f471"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "b98ca6bb60cbb56ef5e128b04f3496bf"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "6cb90cc15053eae27dbcee84c569d16e"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "c063a6303401e03f5469881dde47a612"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "337088aecd28cec75778300f05c212f7"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "940ddf22db4fddf8617232bc9732392d"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "d4ee8e93dc2b11c4555f081c91a29705"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "9b635162ba2ad0cfd7776dce05907baa"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "7bbf88eccac30f01a0b0840dfd2be308"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "c68bd64e9e67e92799d1b2b2c1fe6847"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "b62e881a81f6e926c699a0f6fe2dd10e"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "b25af35fcdc08a19cad33b511f04a0e8"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "63054dfa3c8bc3d01680c8f6ea0aee2a"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "3c90628e195e4c19d6cb134e1a0ed19d"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "a322588bbd4ef67a0f6cc210631d1bac"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "56e92b077220895eefcf2c5b8ba573b2"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "9d9ae5e50987bdcd728e2970a724320c"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "d26e5006c2a2461b7252df246ea9373e"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "08bfa1a178d4f0d67951cabca8888e91"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "91d39de8763351b4a043d4849bbea9d0"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "af1e03634cfa100344ed34ff1f680cb5"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "3915197d28e6456596ed95c5c21b7632"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "a084950edb84946fb8e11c1ce1bb2550"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "6fc7b470567765dacffee71e7aed1b57"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "9d55b7208886927f2a66691a34fb2a2e"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "ea808f9b56e6c8731e8625cabfa5a1cd"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "24581165b4bab58b6b4471f9435e7c89"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "44cea0efe8c75b007b4deba332a94f1e"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "944d8c4b07341b16333317389e907c5e"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "7044c5e44acb820706ad6eab6bed9208"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "0a9f8d5f6dc324fbf8fa422fd332ea82"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "e5035f628834f0c849a001c0c8cfaa0e"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "0bc85df27c28509e1def924ca3cd48e1"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "c653ac158037928405f17369b3b5cff8"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "cc1c8237447c8c1cada12ae238794e89"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "60716a71db997aba6d9808d490dffee5"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "b28f3f95a99b78e3b7b0cc01c1b36b9c"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "4e5231951655bd44779c27ce9d6f19b5"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "e2fdfec9887ab1e29b5cf012eb709e5e"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "6ca5da4d7816c08528ce17b8fe0111ad"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "ff519cf27d8dbabf3945ba1b58fcaf18"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "b02c1c578bca7c5384947542e78649cd"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "c5beb7c16a0ace81e7308798eb3cc288"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "c86f712e394b6f9242a76004a11aaac5"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "17ae9f5042cb63b50fc297cbcf9ac578"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "3aa8a5879f800ad5ff019af0daf7326d"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "7e6f3ff66cf098588bae82b1b01d0bad"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "db1ac13d6d24a79635b3a8ca46d59ddc"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "346e5cd0cd22e7e233db16f892c0ec23"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "04556355b67e03d635e5cedcd5d6a61a"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "a4c03502a94b5d05553af564215414bc"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "63703c691f85bbedd61a892e35202ee5"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "366dd43ed202e701df025dcf9bf09a20"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "61fad6df80b913be4503c50e3c727f12"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "da18769fe1dc53c6faee12ca5ce85aef"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "23bdaa5317cf8eaf0b69fc4ee23dc2f8"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "1fa82f74501edea69a42d2a1a8f7706e"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "15c3ff34be55e75b1563f7ac91bdb88b"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "2b6c045fb3972754ddb8c858eed25b2a"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "0c3450813dc6a90c73b31e61418153fb"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "123a032f58621f7cc1d1d08491053f37"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "050f26c80a21f9281c14ba268df5b334"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "f61064e5e5d27b433376d6f11d45bd56"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "3366c887d924480ffe3d194005ac4ae0"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "94ac2f4f87c717507e8ac75e027979ea"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "88647011ba27f58540b433bde18fbde1"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "300672dbfa4a08de93cf23353f8284ef"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "557dee70a3b7cc3f17250063356e68f7"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "0ea0c124d6ba027e94d81b13989b7eed"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "d27f8573e37b98882c6b11c1c4756486"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "ff256ac2c77fb5174e549821137f8909"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "fd573f7eb9cc8ec7c5763f8daf7615da"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "372ed7aab6ca60d0b3ce548587d38e75"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "4039faddad2da82f39ffc96c2d76b004"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "20287dfa60665c61091a64522ffd888f"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "2f50f6ed7ac50e9bf553a0ce7211fabb"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "6abe3a9034ae9b3ce62405ed18684b15"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "b64093093733a6caad40325c29d6e316"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "f68ea9375f1b223f8e08a628216e48e1"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "d8f04c81b6cf5daae49955a1044f6c5a"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "40eccdccb5c0a384c4085c332f93f424"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "7843b10f0733c2baebde45bf6844d039"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "93eacac1812ac120d86307cef36aae08"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "5e45de946d115d469d34a0c680f930c4"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "8a23b214f69858bbc7478fc15f32a537"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "cb7987f6f4e9e0851259cd67d3109872"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "8c6399344ce0328df63ed11877908196"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "82508675160053202ead8157e23688f8"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "b46bd3cf9687b92836a3c1f33ce7d17d"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "3bd89c2c74ac146d99e96241a99c35f4"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "7f5018ea190b5d0e15f1863b942a6468"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "57f44caca27c671d6f98ae07cbd23c3a"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "e25548cd02ea50f8e29b4bafbe8a28a2"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "305f0e7b744bfdbe79f4522a9bc83fec"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "9990fb28cd3974b79caaf5c8d38a125a"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "ea85254d39e83eb56be7c60175f31dc0"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "3f4e991807d1da64c929f8574020ded3"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "ef523652f81c75dc3fbdc99721c6b0de"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "22b5cd4e3b2a4677cf8c17200ea4ceb9"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "af65601a06799b410736745208af42fc"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "86f5c84f2639a0814d8e3474b8ded225"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "b2664c7797543ade9a34eb08e0ccd368"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "45780c6e4220265a45ecee5ab0aa541c"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "d284c103bd4ec0ef7e7c580d4ebdae48"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "260e96c51bbd08bfe8356634f4bea6fb"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "9f9c752b03de3147dc66218eb5325157"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "8f6f9490c6c0be0c769ffe9d76499c7c"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "70e5e783cc76cf960ac970baccde096a"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "2f6bd5f8d88329979dc31d436b405e48"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "9ffb813b2191102b2280cd3d45b6d068"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "908032a8ec06cded8471e2af53d5ac1f"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "d5fca4e5c6309f8034c97b1bba714090"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "169e04214bec868be44f4cc7f5f10419"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "0bc45cfbb94b5817c72be1b0e01fe53b"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "bfeaa17e9abe5130c8b3dc7acfb445cb"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "48252234b18a01484ed6856a60a7ef0d"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "afa69a72b442ce86da46e6af04bf45d6"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "f1ea8c30580556f2ff56c17862902e57"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "893114b773d64c5cb8e2303770e4314d"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "7e54b45d68eb34fee117c77876dee56d"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "faddc8be2a960d3435acfc88152527ca"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "2db7da240260c3e6272c6535fd1ac8ab"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "289b5a8e02467d25a7eb989388bc83d5"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "5828b727dc94eb38b2535cf68b212c0a"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "9fee95f0074000246924af83bfe14dc7"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "07d8e9bb782b998fdd501c503791b801"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "5ab975cfda6351ee0280572df1f0f02f"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "d2c9b5da289601ce6c9c058989321469"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "ffa1f79ca47ee1dd271913c00c199427"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "53ce44d9c4070765435f0e7640923060"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "21e9c984840251bbf76f1c00e3bb9c47"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "9e6e8a54547ff9430ca8a2099ad69ebd"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "1c9add2751c7aa91fb7671571ebf4064"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "620f3ca8ba3e02df5e2ae4a76006cea1"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "e0c8383ea3dd2562fdc892158d0822a7"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "bf8de69039bd83f2875ca9c32c5883e3"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "25e18fc9d965da3ef6529ce3d96c2fce"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "7ad581ef337038a8fe8f9687e2415c01"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "33f9eb589ea957c08090a194d3b69399"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "c0313634a71386095e628798a895b59d"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "794e9a4d1a1761e341d97e995c7d0df7"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "1653fee36aadd6cdc3095d04866ddd94"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "b37205830969e1c075da6a9d144d232a"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "825e9651154b06935981111f1b6a6137"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "ca45b4c9035f5978157f79c9e8d63306"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "3d5daa3b1f563cbce26c32096afa7bb6"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "74875f1b9e19278127322c8021c4cdb3"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "7103fb28aba4fd5fd6adf895295d16d1"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "683e5f6b160879a5638a24519bc0116b"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "7237df97401f38793edbd0218d56b4ed"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "f2d758dd4d88c75a8941858d2d503df4"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "9f00c76cc5f1e41f5b3290b036759ec2"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "ab8dc5915afaaef380eb12795e91822b"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "72ecc5d019925e325a64b4e920e25a89"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "a9b0391262d358a975c01b2f291e1547"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "6045fa888384ba0fe09aa8425f955c48"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "7e81ac6a9d966cdbf9eff68507adba68"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "cc20b6f402d6b89e2d49efbc5ecab652"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "96482032c22fa37839f16a60a83b9b0e"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "cec66da8741807df9081faa4eb86ded9"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "09c65f1ceee3a21916d9cf1631bd1cd8"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "9a595fe0529311b03bf1e80bec4080b9"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "c0dad62f0c01b00a0f80d3fb305459ef"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "c89c071203d0a3bf8c9abbc0d64d3f40"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "ed4b91b3e06041a430b058121c1ab861"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "41e41662a10b6dca1dfd9a70514562c7"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "0829c0aedc1f56b5e79d0f7342e36a2f"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "b16b7c94330f64aafa3c6978b4c7aae6"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "69f340852d38c8d260b3cfc7fbfbf05d"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "de5f5d22639db6f7827bb8acf20d6196"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "6b3a181eb6396dd6df4d749a3e974308"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "5ef113f60f1e6204fdb44c4e656de7ba"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "85883953a307a46ead153c5771ec124c"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "4bf0c8ea67b5f6d64703165ad0b7c179"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "a3c8749a0066c70d30cf478ee39cb5a6"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "3e09690575a79804c38af09a1ef60e41"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "dd16358ba874d0e4116e28eacd8a2230"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "2e5235fc891f353086a61e69a960384a"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "c62186ac6311bf37b5c3d8dda8c821f5"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "a1c419726598ac87bd86a0d791865157"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "3a82487e14a0a593ad701bee8cd54b58"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "0325101712d8f6348a56b16a9480a3a6"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "52ed45b7123d970932b043f40b729777"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "3711d569ec39e4d4e2d5cb7caa441ef4"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "7e76025ce168509c3569b052ce077d5c"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "f706019e391dde1b3313cbd7ea171ac4"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "3de1fc8ee9897b8b662f19bb9ec346b5"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "4bd4feb19005065415684f41b84d4d96"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "73a69951f834067a7441f18ab6008c20"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "b9b724b0e89e16e59841e201db4c5b64"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "deacdc6bfc6e797dd1806965f0fe9573"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "163ba81e93c0a01be2f61d39c9f30165"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "a038d82db03159cd7ae4e7cd9e31e5cb"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "c670a7cacc5bb7acbcae67d35e7aa408"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "0fee96cf026146a09e7708a03786e8c7"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "246f24fb612c652b230108fc7556344e"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "acac0e8d8ddcb97b11fb667a67c2290e"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "69b1efe036bde49d91c1cfab18a505d3"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "5ec3380fea059668c7f9968a0a4ba563"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "7eef5a4a89c061814746863ab5c58182"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "9ce685c1686f34382607b4cc4a3ebd4b"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "8a3d2967e97c1440fd62b4c72b1dd12d"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "ee992b72b045e6c662dd1d8c978947d9"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "7fa2a2a567f9ba59afb9a6ef77d9198b"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "15cb31c65418234819dbf6fe862afad0"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "286cfbf3cfda7389a2d21a6cdb06a720"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "0725d0011bc81f55d79b9a5cafb3fb1f"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "239e75eb9067eebbc3e74a74cb71a1b8"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "392e4a3e7728666bf1c182a905e1982d"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "3552237ad92c4d8b124b6acff995d289"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "c349a5234654199094a8ca8a1bb6c113"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "b2c35980f2e12ae029ce185b84950013"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "fd409e8ab97d29aaf59b754594da58cc"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "ac2e65d4411b62d40b95d544034e9c45"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "350901471aef5acbe5348a8c8c095c58"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "0904b98cb72fd44394f44cccd94c331f"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "f9ec0f7a94fceb2475366c062f32f629"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "55c53fa4f79e07a9a17a46334e5a5d8f"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "fa0d88a5a62d6289a312b01699ce849c"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "26db3f289407de3ba007cab3d9035750"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "af0d96c4928842e8286099505483b674"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "2b69f3cd2d30afce411a3059217ce896"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "bf68359650a5456d0dfc09069f62b5f2"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "c9f08c7f10ce6c8880e8cdd26f0d7e33"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "0e0196271ef82d8c5656211c69a25bd2"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "90a37cf013cf9f72016cd253f9b5724b"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "b33592a7dd9cb898537cf18a761a11b9"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "6a9e634d86990b082194ba5e9f4d4ae7"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "53fef47824022376ccece4882947c9f2"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "8288dbf8724485aeb30ce6fa9d0aa22f"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "227ab2fdf7e1fc160beb937486be743c"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "0563e70198cedb5585e93548aee848e0"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "9701dcfd9d628bc19ebf70effd71b186"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "3a08d724354a562122855c30deab20ae"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "e571d59623e07b2290177fa7a1b7e704"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "c046ebc83ff8baf7d305556a9fa3ec44"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "8af935a0422f9a0db2a39699664419f2"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "a646d26a1d9e017277b22649ef8baaeb"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "e86bfbd196aa1407115a50fce42c92f1"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "46d3cc6a613a6b3b252ce190448df68c"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "b8203fe6e949c7848b3a5b28e846ec3e"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "ba765ce02f6dad0acea19c3f72e03d74"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "82706e71f00e0328c3a707a023648c86"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "5f0a35c1cd3cf05e63c746494b450ed0"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "193e10e1675cb1eb95a7870dae968221"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "0b89526c5e31827627ea5fdc92a1b6f6"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "8b763bfbe4369ddc7959b52299298106"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "052b00b340b5b6208053c59a7e67d4df"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "a43aa06bd6611650c215bb370ad77a03"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "5cd831c59530b7747c6c06c57c4e1017"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "fad1dd44f9f077694fd5ef6ef2f4a517"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "627e136baa6e75d0441327630fde7a1d"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "850382f036b52bf1837909d0b1c01695"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "e8e1f076217a563ad37156782e672065"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "72c0c873286c81a7e5e3304fefcb504d"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "287f7f64cb4ab48e9ed32b14d12b3b3a"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "9b2b844514bff4b5112686875475c001"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "27fd6b6915fe2034d75f73d5b5490f9a"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "c407494a840836e4d945ec280508de23"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "b3c786f044131a49f1c23dfd17429471"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "f0be259207073b4b5232c5432d24a69f"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "7559de757d52e393cc9929f2cd45b387"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "95698f459aec292862896b543c882c66"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "c676b3683e36964a75960b310ce650ca"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "bd3e28101fe2a512379f8883ff5bd0c8"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "e910172db8a4219b5d1feb9f53f9097b"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "3a1840b4a52c6330a53411a533a51bfb"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "60897f2a4bc2ce915c7544255370b1d7"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "2b87a1f7b004c95040549d5a6a73a884"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "40b6addd3301e456184361baf27e207e"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "eb6a735009bf03f27b597cf87401deaa"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "aa30d10db6028da1b3ef539865adffc3"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "0f290035f40ebb03de1afab2de9953b1"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "c15675329cbda9f513fea0af05059c43"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "5e67e6f077039d54bd1cd4f555da1e2a"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "0c465fba437f182439d4402e06e50935"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "8d32f106163c7e0ed52740053ae89c92"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "aab1e174f013b667c7a14275f4b0ebcf"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "deede48af59e9bc1a644f78f734423e2"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "20c80452cc048dc9d254d6f147e19cda"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "8b1eb8394327f018b607da84fd587faa"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "287b2db3fac94fbdafa1135c68b80164"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "a6b7978b8df89786d12574db2313537c"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "428ce3f61458e976016998ff6d18527d"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "3dfe0ebaf9817cfb044448895c7b2b6c"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "a9b26f87da327b8635b56adab329eaf5"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "04bca73a3eb4f23bd24c0b34bf505abc"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "00ebb9b4728d72bd34a838ccad52b2ad"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "8c0381f26af6defc5a44a103b6f2f862"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "f924027e6522162b2f310a2daba39b1c"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "08d77a8fcdc15206e9f40f682bc0a328"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "8a5df6e58ee667c9f142d555c5dabb60"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "696a2288420f3451c845c7ca81cf867b"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "ff0b83712b06be52e05f944b43f6baa6"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "b20f87a1ef21359ce9bb5ba092c03fdc"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "58e8698c8d54b7cc69ae097ee56e1c1e"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "431d8b6893cf3c77e9e35e2873035abc"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "ad7365daf95b52d273e86ab15c216f12"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "794d70fa2b33027a405c3129a1be947f"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "24b67fcc5f0647fe709eedf8c3bc8223"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "8950fa2b4a9c508bf5190a38b9531829"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "6617e7f5b2404818a6e2475c8f983ab6"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "a67329f6dded4beac085670fab883201"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "53e1ace46adcd7d5cf18f772bc4830ba"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "6a341c0c9d268365231e0bd0e82a886a"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "4c6ab7966c5a5b8c41d97cfc830f6fd8"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "e673e5e12b3784da579ddba92a8070c0"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "9f9d1571d5af798855bca790078cebda"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "c335f805879e82e70622ed9574e03089"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "4d79407037647819a8117ad29c0eb69a"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "af384276a02d29e4cd2447a4c80b894a"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "30316d3f3cb99fa188de14f7edaab847"
  },
  {
    "url": "404.html",
    "revision": "8f0e19449454655612cdd3c9f99c77e2"
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
    "url": "assets/js/10.ca41eb74.js",
    "revision": "a8871c771faa2a856668ef4988317454"
  },
  {
    "url": "assets/js/100.f94c2b1a.js",
    "revision": "2fb444043392a5b33cefbbdfc1434008"
  },
  {
    "url": "assets/js/101.cd47ec47.js",
    "revision": "821d43678a8e1a054fdb46701509d5cd"
  },
  {
    "url": "assets/js/102.3118fb35.js",
    "revision": "24e6e20823773a608d1239a4c680586f"
  },
  {
    "url": "assets/js/103.62cdbc42.js",
    "revision": "f97e755fe6663689777397577ee36301"
  },
  {
    "url": "assets/js/104.cd4d16a1.js",
    "revision": "57f71085350c4c0d161c5bd6e08b03e9"
  },
  {
    "url": "assets/js/105.e7285e20.js",
    "revision": "a5cb1f3d301d803af79aa45e5e79cefe"
  },
  {
    "url": "assets/js/106.7a048ab2.js",
    "revision": "4f596d53e1ad7f4a1e721f2ad4a3294c"
  },
  {
    "url": "assets/js/107.a65b1eb1.js",
    "revision": "2ffadd0059d4e6f2ed174ed8e6e4ccf8"
  },
  {
    "url": "assets/js/108.0fa10d85.js",
    "revision": "23089e46c18ef5b4ceb86ccc6ee08301"
  },
  {
    "url": "assets/js/109.c768d711.js",
    "revision": "5ea7193247c098a355df30b356cf3a27"
  },
  {
    "url": "assets/js/11.7fbbad60.js",
    "revision": "b2ffb4874fdaf8b4da826438679c1837"
  },
  {
    "url": "assets/js/110.ded04ec6.js",
    "revision": "728a2ad8185bee2b7060c41429686a53"
  },
  {
    "url": "assets/js/111.888c5cb2.js",
    "revision": "98a86308e51170502a1c170df4f2ab8e"
  },
  {
    "url": "assets/js/112.1019c790.js",
    "revision": "4d34bef2b5255a9d5d11a0cd5f4efa19"
  },
  {
    "url": "assets/js/113.da7552e4.js",
    "revision": "05a2c4f94a956cfbc96f2379e30cac29"
  },
  {
    "url": "assets/js/114.fe70fcbf.js",
    "revision": "b4be84ceceeb3b41e3e2bc2565cbb068"
  },
  {
    "url": "assets/js/115.6ba6d1b6.js",
    "revision": "7f8ac8876ded6a84da63de02b677b93e"
  },
  {
    "url": "assets/js/116.ccc06aad.js",
    "revision": "7fb706db467c2a3cd5f5f7e8cdf031ff"
  },
  {
    "url": "assets/js/117.792d6343.js",
    "revision": "01a4a180c0113c9fe6e5e6c63bab1680"
  },
  {
    "url": "assets/js/118.70bbc589.js",
    "revision": "273df2d86bfc0e15a279b40e6f4ea209"
  },
  {
    "url": "assets/js/119.9805b807.js",
    "revision": "ee313209a2a298919a0d595ec9faaa2e"
  },
  {
    "url": "assets/js/12.53c89b51.js",
    "revision": "ecba0239943f50dc6176e9f473beedd1"
  },
  {
    "url": "assets/js/120.7fe0000d.js",
    "revision": "3ee4f464a5d2ff1695c686eaf7ef0493"
  },
  {
    "url": "assets/js/121.8e8a678d.js",
    "revision": "117de795592503d508b072b9ebbf5306"
  },
  {
    "url": "assets/js/122.aeede675.js",
    "revision": "118a084c012ac7a6aa1d8e90085fcf1c"
  },
  {
    "url": "assets/js/123.f9e89af6.js",
    "revision": "0d91902b07a6a311ea888e1b787834b1"
  },
  {
    "url": "assets/js/124.a4b9d09e.js",
    "revision": "c91a3f415e6f3a79da5b95bea1d6ee88"
  },
  {
    "url": "assets/js/125.d4d02501.js",
    "revision": "32b666bed849d1591dde92a100da7820"
  },
  {
    "url": "assets/js/126.06cc03a5.js",
    "revision": "f80237ad74fb1d3b290597e21ec69a65"
  },
  {
    "url": "assets/js/127.e65a2e98.js",
    "revision": "28699c200f44d6812ba77881a5687301"
  },
  {
    "url": "assets/js/128.c8d7d91d.js",
    "revision": "41c0a471214b27a0b5481f48167812d1"
  },
  {
    "url": "assets/js/129.5e961fb5.js",
    "revision": "671942da4ffd2d0d81327fcd6d583153"
  },
  {
    "url": "assets/js/13.1aaef614.js",
    "revision": "913013f6d2028307c916cbcafd759b7d"
  },
  {
    "url": "assets/js/130.ef4ee014.js",
    "revision": "5d3a8ee4c78c8b756cdbc2b69b000fe5"
  },
  {
    "url": "assets/js/131.346c9667.js",
    "revision": "143414708bdafa3ab0a05bd4e66a25d3"
  },
  {
    "url": "assets/js/132.1a7a1751.js",
    "revision": "12c417735c2e3ebbfeb7d64736e9f65a"
  },
  {
    "url": "assets/js/133.5c8eadf8.js",
    "revision": "21dbc6a22462b48f131402c445400d7d"
  },
  {
    "url": "assets/js/134.eecd59ab.js",
    "revision": "34dd32fb9d8f3dcb834776e7c2874111"
  },
  {
    "url": "assets/js/135.8c59cb38.js",
    "revision": "d63934b7c6869242f1027cf33c797264"
  },
  {
    "url": "assets/js/136.7857ff2f.js",
    "revision": "6d2f4a0c250993e896a19573e164549c"
  },
  {
    "url": "assets/js/137.aeaa9730.js",
    "revision": "645295596a628cb8379848d7c621e987"
  },
  {
    "url": "assets/js/138.b9a9f782.js",
    "revision": "51a991f0089e529d740d70883ac2e724"
  },
  {
    "url": "assets/js/139.ed5e2dc7.js",
    "revision": "36bd736d58123b5a2de1643168f11d7a"
  },
  {
    "url": "assets/js/14.38b7ac68.js",
    "revision": "f6d8f21339fe433b61156bbb4c0c04fd"
  },
  {
    "url": "assets/js/140.0e65ff2b.js",
    "revision": "22d789fbc0b72c52afbaacbcfaa0a576"
  },
  {
    "url": "assets/js/141.5bcd8248.js",
    "revision": "a9fb8eb94e9d2b117149749caa5c9a18"
  },
  {
    "url": "assets/js/142.a211004e.js",
    "revision": "e5f48824f21ef802250e3ea9941f59a1"
  },
  {
    "url": "assets/js/143.09d8f69a.js",
    "revision": "bcea87680858d06914613f07d89c9196"
  },
  {
    "url": "assets/js/144.1b4abe7f.js",
    "revision": "4b667a2f82dc61a3c1a51220b6653878"
  },
  {
    "url": "assets/js/145.dbe0d6c6.js",
    "revision": "2e4f21b5d961c67b2ea9bb22f732f4a6"
  },
  {
    "url": "assets/js/146.55650df8.js",
    "revision": "aa8c67ed35ade7f360fdc645948139f6"
  },
  {
    "url": "assets/js/147.62c24b0b.js",
    "revision": "266ade3d5698873f634b56b9c4ef9f7a"
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
    "url": "assets/js/15.ac15eeef.js",
    "revision": "d5a1ed12b76b500e1d932f8a5df755cb"
  },
  {
    "url": "assets/js/150.522651b7.js",
    "revision": "ebfdc8aa94797cf1c04656a5cb3a2055"
  },
  {
    "url": "assets/js/151.2f76d0d3.js",
    "revision": "3570c8279ebc6e84478316332d13fd7e"
  },
  {
    "url": "assets/js/152.9f008484.js",
    "revision": "58efa6d9a27879b7f762ba3c5fb6b40e"
  },
  {
    "url": "assets/js/153.5988c64a.js",
    "revision": "e25863bf0b0f7405b9bd4e77858a5dd4"
  },
  {
    "url": "assets/js/154.6a25b061.js",
    "revision": "158721af7fad61a975ad6664473c3339"
  },
  {
    "url": "assets/js/155.b9bc63d6.js",
    "revision": "c5e840f6e4c3838b39bedc485fa299f5"
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
    "url": "assets/js/158.ea47e83b.js",
    "revision": "ca7064ca601fc3438c879e93bd894a6e"
  },
  {
    "url": "assets/js/159.413f965e.js",
    "revision": "00420e2d9f378bc4e3b326a6c4aacbbe"
  },
  {
    "url": "assets/js/16.2638dfbe.js",
    "revision": "da3dfd3e58ce712d929867782ef8170a"
  },
  {
    "url": "assets/js/160.b20f5457.js",
    "revision": "0f29141cf36b0af15d98df14f376a6c1"
  },
  {
    "url": "assets/js/161.97877699.js",
    "revision": "b24b0e2946da0521778a3ee8baf0f595"
  },
  {
    "url": "assets/js/162.2d694381.js",
    "revision": "65792c3542421decf679b70df73191d5"
  },
  {
    "url": "assets/js/163.c469d1f1.js",
    "revision": "065d811354bfd8d4cb87ae2e23057229"
  },
  {
    "url": "assets/js/164.2e5def6c.js",
    "revision": "3f1a78322746b9ce7cf6138e9ff1538a"
  },
  {
    "url": "assets/js/165.236201a6.js",
    "revision": "f08eaf9ba96e01063b8eab6b5e72d6e6"
  },
  {
    "url": "assets/js/166.8c4eeec1.js",
    "revision": "776a42b4987bc60e92d2edb911836a88"
  },
  {
    "url": "assets/js/167.07cc211f.js",
    "revision": "eeb454dab383cf9d2b64870cc746e31e"
  },
  {
    "url": "assets/js/168.b57a73c8.js",
    "revision": "86e7ce0ba1b39122d88bc077eceaac66"
  },
  {
    "url": "assets/js/169.7fbf0993.js",
    "revision": "29d37831b04c8a99e08879e8a7ac73de"
  },
  {
    "url": "assets/js/17.30f0f3c0.js",
    "revision": "4f5f1f4cb209264c38a94ae9d9015dff"
  },
  {
    "url": "assets/js/170.30164aea.js",
    "revision": "f54622d490b68ef358b09ac0d5007173"
  },
  {
    "url": "assets/js/171.f1efac72.js",
    "revision": "c9fc0d2d995db49c363b4018cd4b47da"
  },
  {
    "url": "assets/js/172.ebceb8f5.js",
    "revision": "31e587b8cc2f18524a376f87c017a30d"
  },
  {
    "url": "assets/js/173.255cb1c8.js",
    "revision": "f5f53d62779adb24884664477fdc635d"
  },
  {
    "url": "assets/js/174.64435baf.js",
    "revision": "cb3bd3cadfffb2f7fece2b1ae5c3fc4f"
  },
  {
    "url": "assets/js/175.34859d99.js",
    "revision": "06c5ddc2fba88efe65fc4086a4a2c8a5"
  },
  {
    "url": "assets/js/176.efedc032.js",
    "revision": "71c127d6526224b4416256d9503e6d57"
  },
  {
    "url": "assets/js/177.99783a99.js",
    "revision": "878a0811c7113a51c6082b03cf14d589"
  },
  {
    "url": "assets/js/178.604c9ee5.js",
    "revision": "d68b3f8974dca4da90b323aa4e07b506"
  },
  {
    "url": "assets/js/179.9bfa493d.js",
    "revision": "85c347103b4d9c52efe8536f7c0dc42b"
  },
  {
    "url": "assets/js/18.109a81b2.js",
    "revision": "042f68f526e82d2df155e0430b9e24b4"
  },
  {
    "url": "assets/js/180.dd557bc9.js",
    "revision": "a5906d538023b2b486b86fd0cf85bd3c"
  },
  {
    "url": "assets/js/181.7478fd73.js",
    "revision": "7e192497834ab5baf7be34892a392190"
  },
  {
    "url": "assets/js/182.918b787a.js",
    "revision": "41ebbcc85afe6d5a946739cdf55def88"
  },
  {
    "url": "assets/js/183.9b5dbf86.js",
    "revision": "b46aae59eb80066601b37ed32eab2eac"
  },
  {
    "url": "assets/js/184.d4c3abd3.js",
    "revision": "9721d6d81657eb15cd6abcede945f5f5"
  },
  {
    "url": "assets/js/185.ae237cc6.js",
    "revision": "55eeb0c414e2dbf6b6ad46009f7d1064"
  },
  {
    "url": "assets/js/186.8ed94497.js",
    "revision": "690ea9cfb948ac0476ea3ccded76448c"
  },
  {
    "url": "assets/js/187.a8467dfe.js",
    "revision": "832296681838cd60aa09b150c29bb1c9"
  },
  {
    "url": "assets/js/188.73f27b35.js",
    "revision": "c1e83a2b4d27e8fd81ea375919d83653"
  },
  {
    "url": "assets/js/189.6002cc90.js",
    "revision": "38ad57a64cc62352469e0e838639133f"
  },
  {
    "url": "assets/js/19.dcf5b697.js",
    "revision": "55ec35c10b38a4d9a9b5a3083f557b57"
  },
  {
    "url": "assets/js/190.3af01aeb.js",
    "revision": "40ebfebb517e818433841d35b7652cab"
  },
  {
    "url": "assets/js/191.4ff1206f.js",
    "revision": "81873faec9a1efd5405a7c8479f5eaf1"
  },
  {
    "url": "assets/js/192.340a0f47.js",
    "revision": "da17b56e61b76963713b009d70d7a763"
  },
  {
    "url": "assets/js/193.60993af7.js",
    "revision": "aa6b540c1e076adfbcc5c00df876e6f7"
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
    "url": "assets/js/196.46ef609a.js",
    "revision": "a6e1c7ee6bbc0132f9b2c3456ddad4c1"
  },
  {
    "url": "assets/js/197.627478f8.js",
    "revision": "eb30d8678eaf16a3afd916ac48cd761e"
  },
  {
    "url": "assets/js/198.d2bdeb9e.js",
    "revision": "d3972aa3d82f6837b7f0bb975f6f99b7"
  },
  {
    "url": "assets/js/199.857e083a.js",
    "revision": "22c4347a8ef8dd4276e2cc279662c0e3"
  },
  {
    "url": "assets/js/2.bf8390db.js",
    "revision": "aa31f48050a733b4637d2fbcd96476a6"
  },
  {
    "url": "assets/js/20.a09071cd.js",
    "revision": "280a872cba74a9b5192d8f186f2a5909"
  },
  {
    "url": "assets/js/200.4e0ce56d.js",
    "revision": "74f4a971a0ce96aae08269d5a3c20dd3"
  },
  {
    "url": "assets/js/201.ec55c8d2.js",
    "revision": "c182635174a2392e8f842da3081298f2"
  },
  {
    "url": "assets/js/202.5310f58d.js",
    "revision": "c0b0fda4eabfacf939a91530544741a3"
  },
  {
    "url": "assets/js/203.0ca094df.js",
    "revision": "46b13daa1d9fc14c38b10c42bf717c73"
  },
  {
    "url": "assets/js/204.44e337ae.js",
    "revision": "69c3c68fef9a9474b981bc652c1c590a"
  },
  {
    "url": "assets/js/205.a2e572cb.js",
    "revision": "6ace5e00d45b7a480419dfd4ee579d3d"
  },
  {
    "url": "assets/js/206.fe0bc7c7.js",
    "revision": "37080640ca0c554db3d7d88bd11f9dd8"
  },
  {
    "url": "assets/js/207.59a46763.js",
    "revision": "3850ec1d0e6c9e4ffc5a7a83945de846"
  },
  {
    "url": "assets/js/208.98cc3c3f.js",
    "revision": "56fe28ce9cb21396c3f1f2542c75854a"
  },
  {
    "url": "assets/js/209.f02f52ae.js",
    "revision": "705e365d2d814726aa8fc0fbdb14a43a"
  },
  {
    "url": "assets/js/21.de6a84a8.js",
    "revision": "38ace1fd75cda40ab5ea997ff548283b"
  },
  {
    "url": "assets/js/210.5eff84f1.js",
    "revision": "d15e84645fb7f1da628620afba77bb79"
  },
  {
    "url": "assets/js/211.eeab1452.js",
    "revision": "7957da56d432b58d7375264813b439f2"
  },
  {
    "url": "assets/js/212.97168f34.js",
    "revision": "2d20e9af11974a1098d8e1fa7355f17a"
  },
  {
    "url": "assets/js/213.56c2dfec.js",
    "revision": "576958c938b2f70b3fa91f4127e2119c"
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
    "url": "assets/js/216.14bd80d0.js",
    "revision": "d46621ff3fef2bf3886afdc94dcd3651"
  },
  {
    "url": "assets/js/217.e87e9a58.js",
    "revision": "1e96fe3a16ee02336c306bb936c5ee71"
  },
  {
    "url": "assets/js/218.e1d68c77.js",
    "revision": "e72d95586d0ebbb84604ef25f01ef722"
  },
  {
    "url": "assets/js/219.d4f9e61b.js",
    "revision": "3d84758b9a10c99c21fbafc6c9e049e5"
  },
  {
    "url": "assets/js/22.2e8311a2.js",
    "revision": "f5088919ae26b455dc4d86754df37ef7"
  },
  {
    "url": "assets/js/220.caf5410f.js",
    "revision": "9d54921684ecfe6a31339b421fb2fe57"
  },
  {
    "url": "assets/js/221.620629d3.js",
    "revision": "11100bdea10abff7c8df9f86378b84b6"
  },
  {
    "url": "assets/js/222.994dd3dc.js",
    "revision": "7fdde795010613dbc17d29587379cfea"
  },
  {
    "url": "assets/js/223.4bf20721.js",
    "revision": "e16390b50165ae61d3f29424f1f4403e"
  },
  {
    "url": "assets/js/224.36de5e08.js",
    "revision": "ac439b3f3da6073f94c929ae8d4297b0"
  },
  {
    "url": "assets/js/225.466015f3.js",
    "revision": "3fe9a9101bd6a43c31d71bb4e0f67eb4"
  },
  {
    "url": "assets/js/226.b5922b72.js",
    "revision": "ba3c397f0c6ced5941e34257ed6fd535"
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
    "url": "assets/js/229.e2bc84b1.js",
    "revision": "69652ab3f041f8c3e4db1a523eecc6f9"
  },
  {
    "url": "assets/js/23.b2672880.js",
    "revision": "025c14feb75be2a011eb18f6cf19d3ef"
  },
  {
    "url": "assets/js/230.5a4bd0d5.js",
    "revision": "c707b230020611d52651f81ea776fb1c"
  },
  {
    "url": "assets/js/231.1c77e63e.js",
    "revision": "1e0984f46b649a70f1a10afb5f247b5a"
  },
  {
    "url": "assets/js/232.96b8add4.js",
    "revision": "6833041d5a1a01badae7695cd29041b0"
  },
  {
    "url": "assets/js/233.ad834bfa.js",
    "revision": "470d59e93609c04182b0a8e8ca2e35ea"
  },
  {
    "url": "assets/js/234.8a87007b.js",
    "revision": "554ef80f9e7e05e73c1eb610665eac96"
  },
  {
    "url": "assets/js/235.5280ed45.js",
    "revision": "bbdbf0db8325f3fc019dfbf2884a5cde"
  },
  {
    "url": "assets/js/236.2050e903.js",
    "revision": "28a95e4eb6a1e16464254ceab6e0ff4d"
  },
  {
    "url": "assets/js/237.7ea54b9a.js",
    "revision": "95c2d231f4130a7a1f42602cbc14e0fd"
  },
  {
    "url": "assets/js/238.53ea2e41.js",
    "revision": "22baae1ae137f4adfdc48358836d54a7"
  },
  {
    "url": "assets/js/239.75f31a58.js",
    "revision": "5a05d46b84031bd031fd30097d96ba73"
  },
  {
    "url": "assets/js/24.e963c63b.js",
    "revision": "3466edd41d68c9b0a597d344384f69a6"
  },
  {
    "url": "assets/js/240.5f83cf73.js",
    "revision": "6a61a1615c3da305904249697831ed5d"
  },
  {
    "url": "assets/js/241.4971f2e0.js",
    "revision": "d77f5489db36227bac89e155af026fe7"
  },
  {
    "url": "assets/js/242.d67dd1df.js",
    "revision": "e1391cff0aa3209a29dbc83210e36f71"
  },
  {
    "url": "assets/js/243.bdd38453.js",
    "revision": "81d43feb0a1cc634bc90c94715714aeb"
  },
  {
    "url": "assets/js/244.8a396176.js",
    "revision": "33d5addf4e274d0b63697232a9242cf6"
  },
  {
    "url": "assets/js/245.d9dc0096.js",
    "revision": "76f2e944f2381a6cdd97ad85021cbdb5"
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
    "url": "assets/js/249.c0424773.js",
    "revision": "6bfc9740e6b61f8af6f13d5676b58ff6"
  },
  {
    "url": "assets/js/25.9b257534.js",
    "revision": "fb603193650216fe534bb85fd13f1ad9"
  },
  {
    "url": "assets/js/250.e592a187.js",
    "revision": "83e846b4f983fd93d4a0d38d103efd33"
  },
  {
    "url": "assets/js/251.163cd5b2.js",
    "revision": "181897f15038a0eabd709ecd438cc3e2"
  },
  {
    "url": "assets/js/252.3a2d0760.js",
    "revision": "e9676f6e6b1f8814c03f1a2b797218f0"
  },
  {
    "url": "assets/js/253.1e77cb31.js",
    "revision": "0457e351b7c183dd541360294739762e"
  },
  {
    "url": "assets/js/254.b8dee98a.js",
    "revision": "4572a85b49a26abc009f8065ea356789"
  },
  {
    "url": "assets/js/255.5363f47f.js",
    "revision": "bcb58b72837f88a089398a22b7fadfdb"
  },
  {
    "url": "assets/js/256.c4d73d17.js",
    "revision": "cd9a2f473f7bc577aba0223a98293646"
  },
  {
    "url": "assets/js/257.9e8a3511.js",
    "revision": "6fe59a7265164c3fbc0c0018a88bc856"
  },
  {
    "url": "assets/js/258.36ebff38.js",
    "revision": "41167ac245b142eb6c149f6e30496b1f"
  },
  {
    "url": "assets/js/259.24825808.js",
    "revision": "2370b45318d52e4ee542cb73b377654e"
  },
  {
    "url": "assets/js/26.f661fcbd.js",
    "revision": "ed104b596bc32bb45253dc739ea749fa"
  },
  {
    "url": "assets/js/260.71644a7e.js",
    "revision": "6d2da7b7253280c875b7945ee337a68b"
  },
  {
    "url": "assets/js/261.63d80aa7.js",
    "revision": "f2b92246a67bf23ae2e0659b535a2e46"
  },
  {
    "url": "assets/js/262.a1b8352c.js",
    "revision": "76203d07533631fcd4d4372226e0ccd2"
  },
  {
    "url": "assets/js/263.c745a5b0.js",
    "revision": "44f4a292241f786cfb54bf935845569c"
  },
  {
    "url": "assets/js/264.5641c0c7.js",
    "revision": "a635d169f498601df5a21c65f1ad8b8e"
  },
  {
    "url": "assets/js/265.0c0bd486.js",
    "revision": "42a26d5619fd0292297022235a2a1d43"
  },
  {
    "url": "assets/js/266.30f6e7e0.js",
    "revision": "645475061304d7b7ffff9e87ae61289c"
  },
  {
    "url": "assets/js/267.1ba89904.js",
    "revision": "c3f7d0dfdce0bc45e3f4b63fef8abe75"
  },
  {
    "url": "assets/js/268.d0199c48.js",
    "revision": "5d47acf117449750dce4ea211cfcbae7"
  },
  {
    "url": "assets/js/269.9a958a65.js",
    "revision": "97de4a198139f2eb9a0be267ccb738e7"
  },
  {
    "url": "assets/js/27.a83ff635.js",
    "revision": "8f5fad66855b63746eeac332c6270611"
  },
  {
    "url": "assets/js/270.63fceb90.js",
    "revision": "075c44359c06da200008ab9613a157dd"
  },
  {
    "url": "assets/js/271.09f954c0.js",
    "revision": "372ed6332d89348e15909c3f01c0cc0c"
  },
  {
    "url": "assets/js/272.c4dc6287.js",
    "revision": "1d53a59456732448fb2025c3446492ff"
  },
  {
    "url": "assets/js/273.faea63e5.js",
    "revision": "fa65c3a3f578bec480f2873c71ddad8c"
  },
  {
    "url": "assets/js/274.8a5b65b9.js",
    "revision": "14fd29037f12d053bb4ed182158a4e60"
  },
  {
    "url": "assets/js/275.79c6f4e3.js",
    "revision": "5da8264809f6c6a39c45815f52300a49"
  },
  {
    "url": "assets/js/276.486305da.js",
    "revision": "c280acfcc5a0f83e73dc3e0062adc12b"
  },
  {
    "url": "assets/js/277.e04d994e.js",
    "revision": "14bfadfc625b846c4b3643cae9874992"
  },
  {
    "url": "assets/js/278.9e477a9c.js",
    "revision": "efde52a7dc6b6c2ab31235dc5c465e20"
  },
  {
    "url": "assets/js/279.8527903e.js",
    "revision": "8f0bb3377f2106a5735d0b869c26d460"
  },
  {
    "url": "assets/js/28.a38289b6.js",
    "revision": "39c0a367fd0a8f8d80642adacfca9c48"
  },
  {
    "url": "assets/js/280.b89cb912.js",
    "revision": "98f5e4775a74ffc2477d55889eb733b8"
  },
  {
    "url": "assets/js/281.2ccdc36d.js",
    "revision": "a17e1240eb8a34615e934a8870e17e85"
  },
  {
    "url": "assets/js/282.a8bd53f5.js",
    "revision": "7562bd606925071b581a4eac04cfec3c"
  },
  {
    "url": "assets/js/283.7b93c091.js",
    "revision": "2b4a296025a2f3789dc3318850434193"
  },
  {
    "url": "assets/js/284.3eaea9c0.js",
    "revision": "32ecd86388bbf4c69e0e9fd29fd3cbd8"
  },
  {
    "url": "assets/js/285.66d99451.js",
    "revision": "93fb3e675ba3358af435561cc1b73db1"
  },
  {
    "url": "assets/js/286.20ceca9f.js",
    "revision": "6e27aa24a5b28a441a35952c878dd1ad"
  },
  {
    "url": "assets/js/287.daa2c42a.js",
    "revision": "ed8783aba86e23b84331f96d58192cba"
  },
  {
    "url": "assets/js/288.4ac66f43.js",
    "revision": "1dafe872d5b0b9c2f4aca058652986f0"
  },
  {
    "url": "assets/js/289.9cd2bcf9.js",
    "revision": "5b14f3b42a137089a739c2e0203573bf"
  },
  {
    "url": "assets/js/29.c17b9341.js",
    "revision": "e8be6ed627d0c9ee29170a5614b3d477"
  },
  {
    "url": "assets/js/290.81c8dd7f.js",
    "revision": "882bba5814c6d4c0238a9d24d8ff6fba"
  },
  {
    "url": "assets/js/291.0eae255b.js",
    "revision": "63be78d4eca3caab5964061dca1afafc"
  },
  {
    "url": "assets/js/292.5602a1cf.js",
    "revision": "27af18fe74f40b9be74ce66d2e233ff6"
  },
  {
    "url": "assets/js/293.c8348e22.js",
    "revision": "f667f21269cc2ba81283a88f25f6fe30"
  },
  {
    "url": "assets/js/294.d4036979.js",
    "revision": "5259212d3b2a1acdccecb9a34d31327a"
  },
  {
    "url": "assets/js/295.cf02891f.js",
    "revision": "a614f271ac6987675a6ec0f4183068fe"
  },
  {
    "url": "assets/js/296.da19521a.js",
    "revision": "6927f07a82d32f8af99fc0e83ba0f721"
  },
  {
    "url": "assets/js/297.600f3a9e.js",
    "revision": "533317b5a78271bedf2bad82e4d1742d"
  },
  {
    "url": "assets/js/298.958f61a6.js",
    "revision": "64fcca2d51852cf99ba9479d17d7ec03"
  },
  {
    "url": "assets/js/299.47d4ed0b.js",
    "revision": "fba6cc92857dac22d3812f5b15080517"
  },
  {
    "url": "assets/js/3.8bec6a08.js",
    "revision": "d1c7e602684af0f6026e6332d9fea5f3"
  },
  {
    "url": "assets/js/30.8fea446a.js",
    "revision": "71ba2c7f1fdf585a1014c6b9aadfe745"
  },
  {
    "url": "assets/js/300.2e3c854a.js",
    "revision": "f17d6d43ea2f1d438b8fe63c016c3f32"
  },
  {
    "url": "assets/js/301.626c65e4.js",
    "revision": "4f6ed1202796dc664567dba5d1de181e"
  },
  {
    "url": "assets/js/302.285300c1.js",
    "revision": "75ac9c9ac35baabf80e75a478c091b5a"
  },
  {
    "url": "assets/js/303.1db44871.js",
    "revision": "b1524586dd38006094b4820eab877de1"
  },
  {
    "url": "assets/js/304.bddd3b0e.js",
    "revision": "9c2ab574f431cf8704ceed0c04eed509"
  },
  {
    "url": "assets/js/305.d8f42887.js",
    "revision": "d7d2946a5ead6966baba7f27c38addaa"
  },
  {
    "url": "assets/js/306.88e46ce2.js",
    "revision": "d81fb71f44487c272f9563335f00581b"
  },
  {
    "url": "assets/js/307.e81a6a28.js",
    "revision": "4ba34fe65366680b2beb4f19d76b89cf"
  },
  {
    "url": "assets/js/308.88d98062.js",
    "revision": "b507845be06c26bd4b44c30e06c48456"
  },
  {
    "url": "assets/js/309.c5dbb2af.js",
    "revision": "a43cda214b304ddac993814ebad18c32"
  },
  {
    "url": "assets/js/31.db9f8087.js",
    "revision": "05f0e5a9847eaab18c1b717f4eda38fc"
  },
  {
    "url": "assets/js/310.caa9d335.js",
    "revision": "cd0a2095f6d961b0e2ddf97d471d3be0"
  },
  {
    "url": "assets/js/311.56d78847.js",
    "revision": "ed047940e6918e82bce04b5f5ff9aac2"
  },
  {
    "url": "assets/js/312.158f9276.js",
    "revision": "79490072c1a1f33021ed5693cc1dbc87"
  },
  {
    "url": "assets/js/313.87af98bb.js",
    "revision": "41d6ff8a682480cea592626bfdb5732c"
  },
  {
    "url": "assets/js/314.455d3aab.js",
    "revision": "3ee26f890e28a8af3b52f5f10b237853"
  },
  {
    "url": "assets/js/315.05ca0514.js",
    "revision": "36d843735954733de7b80d1e0be4dd58"
  },
  {
    "url": "assets/js/316.4b6a2332.js",
    "revision": "29388a7e80077dee3a2a5c94d92f3cf3"
  },
  {
    "url": "assets/js/317.5b4c6b00.js",
    "revision": "045e7b4d6c0d679623285f108d5dd462"
  },
  {
    "url": "assets/js/318.671aea37.js",
    "revision": "06fa6ad66718e8f5aa2036e932259f03"
  },
  {
    "url": "assets/js/319.5f9c0dc2.js",
    "revision": "d87237b7e324989841ea3c2b3657e8f1"
  },
  {
    "url": "assets/js/32.92af5fea.js",
    "revision": "c4c44f3c2c46970469d0bf1990078059"
  },
  {
    "url": "assets/js/320.c79969af.js",
    "revision": "f1ee835e0d9e0f2c2706aaf6a9c3fd4c"
  },
  {
    "url": "assets/js/321.eff0d5f5.js",
    "revision": "e46d0d179499ddbe9c92157ab6b292e2"
  },
  {
    "url": "assets/js/322.e560558d.js",
    "revision": "dd46e4b0b1f9bacc578df5564ff30f99"
  },
  {
    "url": "assets/js/323.dc381c86.js",
    "revision": "4cd8ad5bef7d99b5a3c07de7283969bd"
  },
  {
    "url": "assets/js/324.04361b52.js",
    "revision": "7fd9c3f2fc3a91d7db66d589e88c4681"
  },
  {
    "url": "assets/js/325.dec7a1b5.js",
    "revision": "1c2ae5d051d2ec5e8cbaf5fe7e03642d"
  },
  {
    "url": "assets/js/326.6548fa68.js",
    "revision": "2f2827a31cb7aacbfef2c8c916e1d178"
  },
  {
    "url": "assets/js/327.f27e8819.js",
    "revision": "5e1a09d1b420a8a63c17b90de5ce4767"
  },
  {
    "url": "assets/js/328.4200057f.js",
    "revision": "dcea0efa320cabd2493c4d3bcb7669ac"
  },
  {
    "url": "assets/js/329.d5f9615a.js",
    "revision": "b926e7439748869d21cdeb7b9803fd1b"
  },
  {
    "url": "assets/js/33.ac00ad7a.js",
    "revision": "1d80fba158fb40cea425241b9f576952"
  },
  {
    "url": "assets/js/330.071c68a0.js",
    "revision": "7df10d7caafeced08a01e12e6ab25a03"
  },
  {
    "url": "assets/js/331.f4e3df69.js",
    "revision": "43160369f3e43c4e3150535e52798d30"
  },
  {
    "url": "assets/js/332.88db0cc2.js",
    "revision": "36a62da8743a821877d02cd723111a9d"
  },
  {
    "url": "assets/js/333.88b8681a.js",
    "revision": "c2e4c277d71ba0bb8fdbb6c4a2786bc0"
  },
  {
    "url": "assets/js/334.51ff3489.js",
    "revision": "0b5bf4e725889b4c7fed88943a7b1fae"
  },
  {
    "url": "assets/js/335.8ed511a8.js",
    "revision": "b2dbeb92475ae30ce5147670dad30d72"
  },
  {
    "url": "assets/js/336.12655bfe.js",
    "revision": "ac4e3a5ec831dab96e58697782986c95"
  },
  {
    "url": "assets/js/337.52772919.js",
    "revision": "4a7199a8a1357350f0a2f3c5aa9101b2"
  },
  {
    "url": "assets/js/338.2f1e4ca9.js",
    "revision": "9f92900ce3eb80f9a6d98b4e3a819497"
  },
  {
    "url": "assets/js/339.2d6d97ec.js",
    "revision": "ec39897955c96bd3668191d2e70e65dd"
  },
  {
    "url": "assets/js/34.aca25ea4.js",
    "revision": "0416ea4c6807ee3a005d3cc5b609aac5"
  },
  {
    "url": "assets/js/340.4c94e4e6.js",
    "revision": "2ea25c5100f9a0a84c6399b53dcc9822"
  },
  {
    "url": "assets/js/341.8ae7e8d4.js",
    "revision": "7721ec9acc1b83c88b99d27d2c44ebad"
  },
  {
    "url": "assets/js/342.b0d11389.js",
    "revision": "426969c5ebbdbcd3bb0c43c0b9aa764e"
  },
  {
    "url": "assets/js/343.d1026598.js",
    "revision": "55db80afe354bcb04f1f8914a0a51691"
  },
  {
    "url": "assets/js/344.9659a896.js",
    "revision": "c6e42b563293a1c2a23ac4c408360550"
  },
  {
    "url": "assets/js/345.b61f3717.js",
    "revision": "640745dc0274bb48fd5ecb788039d6db"
  },
  {
    "url": "assets/js/346.2031701a.js",
    "revision": "ef58c13b18a7f1fd60d8da77e70cf923"
  },
  {
    "url": "assets/js/347.8634ce8f.js",
    "revision": "6696e068b8d4e08ff555fbee069856fc"
  },
  {
    "url": "assets/js/348.aa82ed72.js",
    "revision": "bdc0e7fd4a92d4d03a416ccd68304ac7"
  },
  {
    "url": "assets/js/349.d543edc0.js",
    "revision": "0e16aceafc7875276a8fc78ec76c134b"
  },
  {
    "url": "assets/js/35.6b24ccc6.js",
    "revision": "0ae171f5e699b07c3f091f1c8ad8970e"
  },
  {
    "url": "assets/js/350.d0e68293.js",
    "revision": "b148d1a37389eb7f042d96da519db00c"
  },
  {
    "url": "assets/js/351.6c98e921.js",
    "revision": "3b445e001d9effe3635ba342476c2f97"
  },
  {
    "url": "assets/js/352.0301f0a0.js",
    "revision": "6cd7655095fabb1e515e041b9b432d53"
  },
  {
    "url": "assets/js/353.4f6dcedc.js",
    "revision": "6b5b53f00dbdb5333586793b96fc5d04"
  },
  {
    "url": "assets/js/354.9121120f.js",
    "revision": "e65ff289074f83e7740758734638b396"
  },
  {
    "url": "assets/js/355.d36d2987.js",
    "revision": "47a79e21d8189de44a50ea27fd0e73c1"
  },
  {
    "url": "assets/js/356.2ba81ee0.js",
    "revision": "01fd6744049e47ab482e594a8dac9230"
  },
  {
    "url": "assets/js/357.46bd0c74.js",
    "revision": "86afda0363e15422f901a153e504364b"
  },
  {
    "url": "assets/js/358.4c2c698c.js",
    "revision": "b3e361a07de2388c9f324b2256357e12"
  },
  {
    "url": "assets/js/359.02a7bdb9.js",
    "revision": "a89600b1be133404ab240a42b72c7c8a"
  },
  {
    "url": "assets/js/36.a47104c4.js",
    "revision": "0133d382872ee6878cd59d8208a4d9ee"
  },
  {
    "url": "assets/js/360.f590abae.js",
    "revision": "3b05a595dd12901f896ad93ff0f13393"
  },
  {
    "url": "assets/js/37.1dccdf72.js",
    "revision": "e6633d15a73a837d76cf560b3c593a94"
  },
  {
    "url": "assets/js/38.a65aeb82.js",
    "revision": "7b41855c6ab9a8d7c027bfc3b0558157"
  },
  {
    "url": "assets/js/39.4b5ae75a.js",
    "revision": "8b84bf8bc17bfc089010c680825f105c"
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
    "url": "assets/js/42.d3bdd66c.js",
    "revision": "b684737fb072028531fb9592caa24c48"
  },
  {
    "url": "assets/js/43.68cadaf8.js",
    "revision": "5ecc2a17e36dabe219d3ee7bf3b4cb59"
  },
  {
    "url": "assets/js/44.c60753cc.js",
    "revision": "b4007fc00e76a3385bcb29217fef9e1f"
  },
  {
    "url": "assets/js/45.631fccb8.js",
    "revision": "fbe671f67e9d850da34fb3bf450c7682"
  },
  {
    "url": "assets/js/46.9aefb04d.js",
    "revision": "319b3683e895bb6bf6b22142a36484ab"
  },
  {
    "url": "assets/js/47.4cad970b.js",
    "revision": "2f2ca51620f8a533b72d5d5ccb94795b"
  },
  {
    "url": "assets/js/48.6166abdf.js",
    "revision": "b0ca372ffb1f378cfe91ad4fe712b30e"
  },
  {
    "url": "assets/js/49.46ee8df5.js",
    "revision": "9a90a1a1feafd653fc4be9ea64fc38cc"
  },
  {
    "url": "assets/js/5.af6a8fb4.js",
    "revision": "ca5543174522a5b38f07f559a1057ef7"
  },
  {
    "url": "assets/js/50.27bab4d7.js",
    "revision": "35bc28a00c33cbd8aa36cad7c53b0437"
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
    "url": "assets/js/53.8f113b44.js",
    "revision": "24601070b0d4e09dbcb99a1fd98c9530"
  },
  {
    "url": "assets/js/54.888524eb.js",
    "revision": "b00ba4ea7b5611ede7ff1742055c06ea"
  },
  {
    "url": "assets/js/55.d77b2b19.js",
    "revision": "22898e7c3344b609488ddda0342a2ad0"
  },
  {
    "url": "assets/js/56.660c2e15.js",
    "revision": "2486af1ebe671f82d27adfd92cae9a94"
  },
  {
    "url": "assets/js/57.30e296bb.js",
    "revision": "1bc206d88a72e74174fed90936be135f"
  },
  {
    "url": "assets/js/58.72769f98.js",
    "revision": "3af21f770c362c7caa7bcba110513112"
  },
  {
    "url": "assets/js/59.b64fa3cd.js",
    "revision": "2bf3d8f466d55840c453cc02e5875e21"
  },
  {
    "url": "assets/js/60.349025aa.js",
    "revision": "5d4c4dd30024edb2e7d67affb48ffbbe"
  },
  {
    "url": "assets/js/61.f9856cb8.js",
    "revision": "ca957c8d3380b49b00f67ae3a4110fdd"
  },
  {
    "url": "assets/js/62.22bf8e1a.js",
    "revision": "9205664a43fa6fc07de90169c1773bb7"
  },
  {
    "url": "assets/js/63.bcafd7f7.js",
    "revision": "6f45886d771955ab24c334ba18445a48"
  },
  {
    "url": "assets/js/64.8ffdab2d.js",
    "revision": "a725545225c28d2e1342277db60733ba"
  },
  {
    "url": "assets/js/65.ace9c948.js",
    "revision": "6c8dc22214e934861928e15b92cb95b0"
  },
  {
    "url": "assets/js/66.30b8e98d.js",
    "revision": "2ed7ae43277497cfd14cee9f60a00dad"
  },
  {
    "url": "assets/js/67.2f4da72b.js",
    "revision": "095fca324dfdf10ee06d646d661e6d8c"
  },
  {
    "url": "assets/js/68.67cea9a0.js",
    "revision": "75b2028180b533f3df0a2f5bfde04ae8"
  },
  {
    "url": "assets/js/69.e72c1df8.js",
    "revision": "36c1fd3f3796868c99ac09cfeb2e56ba"
  },
  {
    "url": "assets/js/70.c157e96d.js",
    "revision": "e5a0e0e9894c7fb6e8c43c95c848d966"
  },
  {
    "url": "assets/js/71.2a647cb7.js",
    "revision": "1931a3f770dafcd22260a7529cd08eaf"
  },
  {
    "url": "assets/js/72.fc067922.js",
    "revision": "57ae8c247e4cb42f2c0a711e7d3321c9"
  },
  {
    "url": "assets/js/73.8f03959b.js",
    "revision": "aade72d079395b41ad93b92d2f07e822"
  },
  {
    "url": "assets/js/74.a126ab44.js",
    "revision": "f6e885b204f69989e2451f9cdb294f32"
  },
  {
    "url": "assets/js/75.2744d828.js",
    "revision": "0660101ebfd7be2dd1ef8132f266b14b"
  },
  {
    "url": "assets/js/76.07cd51ea.js",
    "revision": "7cb2542db29d5b617ad11e3569ab6eeb"
  },
  {
    "url": "assets/js/77.c8cfc22f.js",
    "revision": "ce8cb80d11f7db2c116c06449788ef8d"
  },
  {
    "url": "assets/js/78.e990f4d1.js",
    "revision": "ca0e216f0182af933cd0be8c1d8e1aaa"
  },
  {
    "url": "assets/js/79.5e754a54.js",
    "revision": "91854f1f70bb2193af92d7759c3ee808"
  },
  {
    "url": "assets/js/8.95f95b72.js",
    "revision": "3f630e462997f9608e74bcecf97514c8"
  },
  {
    "url": "assets/js/80.3d77dd8e.js",
    "revision": "5cd154dca7e089621464d79006a89de4"
  },
  {
    "url": "assets/js/81.1ba52afd.js",
    "revision": "380eba721f4604894e1a9aa1ca0b67a4"
  },
  {
    "url": "assets/js/82.96b15400.js",
    "revision": "5b3fccff36d0e1a87c847b93b8f171a0"
  },
  {
    "url": "assets/js/83.06812255.js",
    "revision": "3bd3413496ac1d6c230b0713dd9b9045"
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
    "url": "assets/js/86.896a4593.js",
    "revision": "e55bf7a464d8657b5ca3e0b2684951f2"
  },
  {
    "url": "assets/js/87.a5c9ec59.js",
    "revision": "1258b3ce54074e272c62c0465f4f63c3"
  },
  {
    "url": "assets/js/88.8fe7e35f.js",
    "revision": "375af2b9235379868c6ce07e95ef0400"
  },
  {
    "url": "assets/js/89.e853fe49.js",
    "revision": "1aa8c48e15c71599ab4c4f97696ca2bd"
  },
  {
    "url": "assets/js/9.1d9531c8.js",
    "revision": "3bbdb058da1ae480aa63573347cb236b"
  },
  {
    "url": "assets/js/90.77cf63bf.js",
    "revision": "b9cdfba1a2dd2028143a535fed4c3102"
  },
  {
    "url": "assets/js/91.06dd43d8.js",
    "revision": "dd5014551566b08724e9353e9f9b7b00"
  },
  {
    "url": "assets/js/92.6cb1171d.js",
    "revision": "b1d4e839f643a97f5aa35adbb56f5bdb"
  },
  {
    "url": "assets/js/93.9d70d34c.js",
    "revision": "af025df9dda0bebe4a01f16fcc307408"
  },
  {
    "url": "assets/js/94.5f164ac8.js",
    "revision": "a70387d83c8f7a621f177accdd565019"
  },
  {
    "url": "assets/js/95.92958b96.js",
    "revision": "16c19ee80d17c9922ee4cf324b98b833"
  },
  {
    "url": "assets/js/96.64f59b2f.js",
    "revision": "cb4118dffb3fd34bcbd49ff70379e910"
  },
  {
    "url": "assets/js/97.b4b3a03f.js",
    "revision": "9ffea540dad0ac6960f1cf7ef11388d7"
  },
  {
    "url": "assets/js/98.f46fdbd5.js",
    "revision": "188029c7067e357ca232d934cbd634d4"
  },
  {
    "url": "assets/js/99.248a2443.js",
    "revision": "df8e73fad058e4a0653a44e43a4c944d"
  },
  {
    "url": "assets/js/app.06fd536b.js",
    "revision": "b6930e8d7f5e3794edf61dc12161a131"
  },
  {
    "url": "assets/js/vendors~docsearch.be2a5ebe.js",
    "revision": "2e2106d6ddf26598d3f34d7cf6755ec2"
  },
  {
    "url": "index.html",
    "revision": "02528b2e3b2bc39e5500f3c2da9038e8"
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
