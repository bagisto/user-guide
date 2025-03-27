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
    "revision": "bcf454348ebb507b7b06456620010792"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "5f5bba4c97fa6f3d7364d37e0a89ba1b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "8e099787d36682f5990602aab0e00d87"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "f1ecc7fbe06e6f7155c7f328c4e0ea68"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "2649ac0fdd8b3e35f3f5eeff2ae04cc1"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "dbb9116c1e485e692be977e6d366df3a"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "5071295e12a791ee128662dacdb5932d"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "e31d693ed2fe9fded5d2c0b8838cd3fa"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "12a20dfd27e7a7e00acc9eef9ed5b508"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "894de052959d3bf8ee83761039c95803"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "02a68c307c276717a7c36b9321ed89ca"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "3f664c67a02419e76ba8789e98d6fd3d"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "73f807533c386bd5d3ed22fccd2bd4aa"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "a8a6f0475bd9ad02f2dc41f18c857a1b"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "9298958c771addebe94b8956c96132f2"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "f4cef73f69def567e8854ba5caa4da32"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "9be7d65eb04548e0a6c62591b04af8cd"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "c7ac65c78505342d7ccf4d4daa82bcf4"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "0261fc489aaa182d2c7931c971bcc4a1"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "0162ca5620cf7a8f947673ca2bc63ffa"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "0cd28408d02ce20010f0b5c7d8c38686"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "bea0a396ac130969533ff71afa4bf86b"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "0f049d9b8ac1389403a73640adb34a2e"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "b32885a301a5b6a255792353d8d2ca25"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "2a1b1b60c53363bc481add4fcfb62117"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "688e4ab3e24df63e1035bd83635498fb"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "62215282764a14d1bf48c43394828019"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "871e531491d06b4e6c93e4462df2a634"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "0b66feaa646781b74a084a395278bbc0"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "6c93a5f5985fc44836a30f1705df5a32"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "f304aa3a126dfd4f1377ea1f718a5b2d"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "46bf13285e83ad8d8ae5a14b56f6df12"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "5fde2349427a0fd011e65196e3879aa1"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "46187c8e2a04f12932efaa582fd78a7b"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "fc0d4bc9016d14ee86490c8b9def7e85"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "82ef759c2695a518d14130954a35d98e"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "873a28b9d208d72673541512b1cba8eb"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "784839131910b7cafaf044a205c040fa"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "7dc0934fb37f1478fb723673db40eeba"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "29694d5641257b8799ff49d05855b81a"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "eb68cda5debf8a2c8e1bcd8478d9537d"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "19a0198a89a31f8424d1c04c17fa8e31"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "eb88b92769d5d096f9b198bc55bccada"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "5e7cef8ad821b37ec5794bfc6d2f5eed"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "a86ef8ccd91e451846b9aaa9d72c0e96"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "754042e1fe8788bd085cd301feb8204a"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "a90e1f93711d62655645b1279a4854f0"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "9812b9092b853dc1d587d4621a70ad56"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "0bd43c8975b4c953cd7cf5f66b853751"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "9d6a50376256500b8c0de0dd22349d82"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "ea52c71114c98bc42ad17a95a1d9d61e"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "f8b82e662a7e093d0130754d8f950b17"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "e2ea1d177bb3d13682d325ecd691aeb0"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "b79b9bd20678f81ba5d5275672cf0a88"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "1b718ea550901c2015252ff60288ee1d"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "a4a4b2d3c1c80dff2ebb4bb6b54c72ee"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "7bf4f30efd0c3675e6cd28ba786f783f"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "65c58541a3d2d6e491b7b4931f046452"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "7c6d587fcb69e89b06c1f6908d8a1288"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "8e900ed8a3131f950389d9f30cb22aae"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "596e8e4efc40003cdc1fa5442b5e20a5"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "7958e1871ca9d91c231bd08045eaef17"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "a8ce17b448c37c754c47b1536b9c7c42"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "45678ffd25a0149da051caae73f3c39c"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "c5637f43f49430a717c3e6643668537b"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "e4f1c575fedc4dc803d02ff082e38c2d"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "1cf99e69d15d259bc845342bb780556b"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "2a6b6713a2487e9418fce4784ece566b"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "1d0f8542e564980768581119d2fccff5"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "9fa27e58a7f514857ad4b525ae887a88"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "6e170e1d41db795f8fada35c6346e344"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "e3cb8f86fe57a394282b7cb1e32d5b6b"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "f7e834f523d2fd016cdec0290304fe06"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "2ce6512fa9cb69e481cc7ae4fa0ad186"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "87e55db305f2ca2a27bf9607f04df3e7"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "8e5e52b1cccc3206d2648329e88a3e33"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "27d93dd0d3482acd1d6aeb51ba795f0a"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "821cc93ba2ecea11db7938964e3ada0e"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "b5b4ad4948a8d28d27e17ad611165274"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "1d0a88807683b7504a852efa3131b9bc"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "13cba36f571d8c26d500d1f9ba773836"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "236323cedfc8ac7457ac0d2ebae4366c"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "64c1e8d2bd63341b2feaac04a29610c0"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "c024fcbe42ddd99ea94f6ff0300e66da"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "78011dcf9c020b083d71542b0ca224c3"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "38a9af3018f3dae96aad5e256a85e33c"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "b63f8ce9d915e2f33160068515234e9d"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "b2c4d6d9f4e9619691107544fc41d18d"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "057a48e798b1aaaa0a9c0ee5cea0cf34"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "366e0ce76ac05bb02de353c8c3d0ad47"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "99692e5164081b64e31142cfb947ef2b"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "a041d624e2fd02fa10f50820c4ea309b"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "2b071e28aa770faa3538afda2bec37de"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "3ec5e5072712662440fa745ab28cf6bd"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "12e7e63ea61df09a76db544cba546ecc"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "e960daa9fab229a895bc8b43c5112dc5"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "7717451e46a41c4747106588313de403"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "7e14235ae7756efffb961740d0b5bff2"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "1ed62c7f027644d899cb6ae311962bdf"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "cd8a2e5de7ac60dbf1aa2562bb837c49"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "af2ba86e187b403d9d0f989951b15ea0"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "12eefb703ac71607cde2db016d4b7474"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "715b74c044149bc83d57f42aa6255bd3"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "62dad6adf213a0ba4e21484eacdf2ec1"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "2c148bf4fb7a115bbcc6138e31035b6a"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "4129cfeee8157de026cf147ba72577fb"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "68db39b358dfe2d239680068896efe2a"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "0d96a4bc677a1dd1b94ad1426c1667ea"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "24b41a50f7240aa0e3dc6e73c928c2ac"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "c788075763903f4bbfb5a549fd1df472"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "5a32f150ef32649eeea1d82a51ac9a9f"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "9002ee8ec45b6ad18d8e477ded250cb4"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "f460e057f9555ab53acb1f2f90ea07e5"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "3e17d9a8af0c558c8e4ee7fb39644611"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "477d6e4c29bd5326e1783e41eacc6458"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "bfb91d1b348fd7b391594a5f5ba03716"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "9f4a74743c87a9ee162370a13c714eca"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "2a288274959627f565cbdeb7c049d8af"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "32efb244db66d8983e7f24c6e21727ae"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "73cea40ac10bc5fe26c246177048e82f"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "208ae84c8514a6c8516611964d5d6241"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "2a398afb46bbf67b8a1a38775b5de6d7"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "fc432ec6306541f865e29a9f9fa7bea2"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "296d47c18750078d6a2d6522f1c6986b"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "ac62ce832beda7a06f14ae270eefa812"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "7c54686f68cf4bf20637bcb29e8c9307"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "26ba30db93ef07f12ff1675575abdbb9"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "82504bdd2806217b1551ab27b7c8c1fd"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "9ca24c7ae25d037a989cf9078ff28a26"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "2cd30a7fd3a6335a0947085b3081bd89"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "0467e07f6769b34f4f57880e38a0be01"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "d93c55c0d5a3f2c1dbe2f5f591088160"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "71b1bcaad3a61f17370ffa74c68e65ad"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "5c171f056a73b1bc75c5417010d1366c"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "c6fe6986a0d7b83ad2de57865c3ee5a9"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "029a6a7e8272d7f0be8735ce77f41232"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "e83a2f859bf5bd019b00b9494ff39bce"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "b0e9ceac7b4226270d5d5389fd7b4faa"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "fe941bdab747cee03eb52a3cb3241251"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "cbe975abd802f5bbde192c112e1df0c4"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "bb1388b44f8be6d9c4537e6d8049e979"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "c42b814c5c76c23bf8e1c5673bc06240"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "844572c9162ca4909b7abff744699b0c"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "2f7e8765f8bef982af3c400d0f9b414f"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "153177ace1d2465dfce946b4a820a9f6"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "9ac1d04f9e9f12cbdddb78cb7d9b887a"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "7a39ce7429d22d96d7d65b0a0ddb96d5"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "d1a5acd42f7315f14e2ebd9f6ce21412"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "097d95eb16b9f98891c85122f5b9f2ae"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "43fec2949238fd163c923d8b1a36a965"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "aafd29212d39a5f82a21b64fbcd9608b"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "48977d77bdcb06f83efe05726831e0cc"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "e5010b702aa496fcaf13183535e94527"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "5e8f5513daab426244f861eb1a2e50fe"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "6ef0028eaa5078d6c9da3bff6ec07d14"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "97640beb9ca9da0c38e222c0e3a27780"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "ad28d0c3ec2d63a0443ffb3c873d0f88"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "dafbd23eec8cbb3ffe733758acc216dd"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "9011ea927dcbef936188223d8510cedf"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "482b00d9ae7b938e0f5008b28dfd2fb3"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "2f39140c660e7f169e7c00b1651485f2"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "3570ac41b37fbcd69dacdcb6192d7d23"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "6406490ec04eaf76ae768c7181c8d739"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "6cbd7cdfdf2f7445e987fd4d31c41089"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "ba29bce3d9337c20bf6da28b7e68ebda"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "2a7b9a0fb4276f3d06d5f98ea8eaacb6"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "9874c8789b9670eeac1ef9ece56b7318"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "076c35e0f730fea51b3b12856df4741a"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "0be63a5f07b253cf5b934a60147b51f0"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "8cd985162db7820473648fad1f44d044"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "62dd78fe808d8e1dc6cee11279197ced"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "5e95728b23d0b44be3d5db3f0e2955a7"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "07d29e3b593942d52b30ceaffacbc918"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "dc60b82006b8202d69dd927ce3f77eda"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "4fa6aeb9852da894c24b0b6c6992c0cf"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "74fc694a864516689b61e69a0c5a2117"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "361e6f3662b4071be955dfd701692669"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "e775471889b0b9d7a2d27758d121697a"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "64cbd3387b7c7aa22f33450e5cf4a7a4"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "a0958104b72e56eaed65b957f3f049e2"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "0bc03dcb87c12fe11772d351dcaeb2a0"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "2864927647aca4de67f9eca75ecf156d"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "cdd9204da9ec455a737ab666e2f733c1"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "77ee9f328af25442e16cb11a59aade55"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "60cdaf2f730e485e3e853e994b1e4921"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "b6e008e05a5aa5c87571115ba20056d0"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "ebc11395f3a17621eb39e0ccb72a4496"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "17711c8bf00152c370c48c66e4b4082b"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "590c70bd095a75094794d5a664a9bb55"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "78fa532313ec6cabc40fc0ee441c07b0"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "b229b891e0cd5f299dce48923a80ec54"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "b4e059c2e1336cd54bf71948e223dfb2"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "6aa6e0cdb5410be56469cbdc7665ed06"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "8b2e4f40a1bf621b80515d6545953099"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "3a6d091cbb56f5a2cf633df3b7cf4248"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "ae979b2c6a8d04671db2a5df9322abdb"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "a67bb0e682ba5005b764c7a61cb07967"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "63773c0bd667b00ded4dfe858ec231ce"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "9fcbbb220b0c84d0274b8b9229365687"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "4ad1e4457db509b604b9b18e23245e30"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "359d12f270931745fcd0f8e0183b3ac5"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "ea7ad4e518d1370b27d69ef95ef2aca4"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "5cbcdd9a2f0f67bed94ee75f3d356467"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "a189ac3ced0fdd0c45adc05776262c4f"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "6a0180da912417863ff4691d50770b65"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "a537864c25c10dff7e36b7258271f90f"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "fb47306ea8eeda22987399b72e396119"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "1de44321d7e0eaf4059eefd186a0901b"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "5a40b82ec3df02b326d210d5dbd37f19"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "4dc14c219988591e997762955cc0a205"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "6ab789bc1a7e11c73c13913e5611ed17"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "774d207aea9b9a66032a1d313fe9078b"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "6ee51dc72dee49c94c0a2e7c73884303"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "b5061cd3e68e68a7289b0f4308089d37"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "e6cc10a1cb62acb3a153723815eb94ff"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "5bb15ffd9a7a0821fcb5b945c984ccdd"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "e523d2abeb8c2cfa38d4d305de0fc919"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "fce29ae9405fbae835c939b6199bde4c"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "76564f2de4954ca09f564952ceffb6de"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "d77b1bda4c57e910547d77ed185c99ef"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "7cb2046f1925328dbd75e9537a27a804"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "e22e4c2d4287a5fae69e04b6ff2c1719"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "cd46e611ed76c471f5b49bdad39df9db"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "d2aad0a16bed3d19f96b99ebb83a5aab"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "d9a078f1505bf411527f847be3ff07c5"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "d3c7862139b7e7c6c7bc5021c39f5335"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "908ecba5011b2a6dc316b6748287d234"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "f6c59a3d71ddc1c7644c8fc0ed648881"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "1f93b5d9c9a7b959f22decd34e35c818"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "3366e30732207c8ec337cb699bb88bed"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "4090529ef88ba569c7807d5ca5ffc999"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "12c370211c41e8850362004974a40349"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "dc29dedfb02e01e7e14a48a0ef0e2cbb"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "1a5ae2c0b4fdbb87f93a81ba24e26604"
  },
  {
    "url": "404.html",
    "revision": "14087c10149b09e0f6230bbe00dafd21"
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
    "url": "assets/img/content.9140afd6.png",
    "revision": "9140afd64a40ae73085809e92f97a2a6"
  },
  {
    "url": "assets/img/content.d90f471e.png",
    "revision": "d90f471eb0cb66d7c7da150e4ab7a89c"
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
    "url": "assets/js/1.9eca3533.js",
    "revision": "ebfce4ad15dee800278d02c280d3b0be"
  },
  {
    "url": "assets/js/10.cb766ab3.js",
    "revision": "3de7fcb142d946569dfe80958f20b5dd"
  },
  {
    "url": "assets/js/100.ce94fdb6.js",
    "revision": "19a0badded615f3287b33342b73d1961"
  },
  {
    "url": "assets/js/101.cc741709.js",
    "revision": "4818d440bab869c4aeb63a34d2f77b5a"
  },
  {
    "url": "assets/js/102.647aa8c1.js",
    "revision": "2cefc2dadca542936bc6a32a9f7f2ac6"
  },
  {
    "url": "assets/js/103.afadd777.js",
    "revision": "205f794fe8d506b89e7d7a8f1e2e802f"
  },
  {
    "url": "assets/js/104.e4724622.js",
    "revision": "7fb2278ef54b636dc0473d03b30f1c16"
  },
  {
    "url": "assets/js/105.345d02b3.js",
    "revision": "dc31b75cc0ecd2e50c59744c1ce34d32"
  },
  {
    "url": "assets/js/106.a0191481.js",
    "revision": "6e5dba86c8f7519d2ebed9e9c075daac"
  },
  {
    "url": "assets/js/107.292a6dad.js",
    "revision": "9ed86dc831ece2ea7e2b8093c4a82499"
  },
  {
    "url": "assets/js/108.dcf6730c.js",
    "revision": "cb7c1c5ed9616df7a5358ee6f9c92bb0"
  },
  {
    "url": "assets/js/109.73597e27.js",
    "revision": "8cf8e6701ef75a43fb630108fd74e7a3"
  },
  {
    "url": "assets/js/11.bfb41021.js",
    "revision": "d180a03ad863fb8ef95c0398490dddbf"
  },
  {
    "url": "assets/js/110.647e629d.js",
    "revision": "109c9b962f134367054eeb254f9a09ea"
  },
  {
    "url": "assets/js/111.b86cee8d.js",
    "revision": "a88ef7cc7ea9236b819401cd8e93b26d"
  },
  {
    "url": "assets/js/112.b7665881.js",
    "revision": "5ed5e53d96f6f928a34ee252e3d4a3b9"
  },
  {
    "url": "assets/js/113.b2f2837a.js",
    "revision": "014d7eb79ab45c1d21f0937a54d29f9c"
  },
  {
    "url": "assets/js/114.99c75363.js",
    "revision": "e7cbea8e6eae52816330ac57266544db"
  },
  {
    "url": "assets/js/115.977443e8.js",
    "revision": "e402bb7d6dbb549e26afd4a3d2065997"
  },
  {
    "url": "assets/js/116.098e2d6b.js",
    "revision": "fc161c061e3364cf1c3b43233c3c7e33"
  },
  {
    "url": "assets/js/117.5368ebe3.js",
    "revision": "bfe144e811cff5543b4898fa647d233b"
  },
  {
    "url": "assets/js/118.4f93963a.js",
    "revision": "9f50142c5f906e37b945bd42bcb4deae"
  },
  {
    "url": "assets/js/119.dea887ae.js",
    "revision": "e8f0b88a6d765d0dbcda12657ea34170"
  },
  {
    "url": "assets/js/12.e097bb05.js",
    "revision": "dcf38b73f042e5df439c6e348722161c"
  },
  {
    "url": "assets/js/120.4a523698.js",
    "revision": "bce4c37c64bb36036b6271b22301418d"
  },
  {
    "url": "assets/js/121.63f55d05.js",
    "revision": "1faef7b017caa3f857b31a0142db385c"
  },
  {
    "url": "assets/js/122.62663b45.js",
    "revision": "7467d7b3eff04480615c18d32d0eefb6"
  },
  {
    "url": "assets/js/123.cf73c048.js",
    "revision": "76301b74d964ba3ea3d1f5b7960adf5a"
  },
  {
    "url": "assets/js/124.be1a290d.js",
    "revision": "16b8fae5dc4513337012bd48e9e97f02"
  },
  {
    "url": "assets/js/125.b3d71f5c.js",
    "revision": "3ebb4401b9f7060c0921b52e6ce1c408"
  },
  {
    "url": "assets/js/126.6b4527c5.js",
    "revision": "e8496708ef7bc41e326a2d7eea5649c3"
  },
  {
    "url": "assets/js/127.97dfda11.js",
    "revision": "76af5539b72d6b36b840d839e33306da"
  },
  {
    "url": "assets/js/128.bdfc6649.js",
    "revision": "723a42d29c504c917445a1c7cd1954ed"
  },
  {
    "url": "assets/js/129.6bea5807.js",
    "revision": "619613174a4800281600be66b8870072"
  },
  {
    "url": "assets/js/13.a5cc6d6b.js",
    "revision": "c6aba458c43d5fd1c8dce5c24f843e82"
  },
  {
    "url": "assets/js/130.0e814bf0.js",
    "revision": "710d921d0b9c167ff33ddf3572ee5112"
  },
  {
    "url": "assets/js/131.16094063.js",
    "revision": "ac0ebaa2b2fc53355ddff2a8c95bdd9f"
  },
  {
    "url": "assets/js/132.e2cede0f.js",
    "revision": "29a3d3c667dfdf5f2a531bc1c4df0689"
  },
  {
    "url": "assets/js/133.a14152c0.js",
    "revision": "be95b0d610f10632b75469f183cc76d9"
  },
  {
    "url": "assets/js/134.1b5921a3.js",
    "revision": "e69cc113bdebb3a33525ffe7018c766a"
  },
  {
    "url": "assets/js/135.f4ba128b.js",
    "revision": "7556be1e16f62edf85b80c6678957208"
  },
  {
    "url": "assets/js/136.217d9e78.js",
    "revision": "89d9227e8ec20fd267cf9ad7ca93c897"
  },
  {
    "url": "assets/js/137.410b4604.js",
    "revision": "2831c114a1397e2ebf83d47baed0779f"
  },
  {
    "url": "assets/js/138.969dea6d.js",
    "revision": "5bb39ed0b6b3bdc890a1d01415bf5492"
  },
  {
    "url": "assets/js/139.0ae77a6e.js",
    "revision": "f2e81b6ff32eba04e49579c4da22a09c"
  },
  {
    "url": "assets/js/14.da09cd4e.js",
    "revision": "7fff8bfee74ab41e9e67a3a2946761b7"
  },
  {
    "url": "assets/js/140.75b00eba.js",
    "revision": "266b7e7886a4326cce74e96a69780077"
  },
  {
    "url": "assets/js/141.6071bb69.js",
    "revision": "9038f23658cc71c1bdfee1d308c7b622"
  },
  {
    "url": "assets/js/142.7b9f36ff.js",
    "revision": "f95d6a53b3259e11d0a4bfe3291058ec"
  },
  {
    "url": "assets/js/143.0fcef33b.js",
    "revision": "af063dd3b0193980e7c393ef146a9a6b"
  },
  {
    "url": "assets/js/144.c1a3d7ec.js",
    "revision": "51fff188f42195b8f594dc738fa86a47"
  },
  {
    "url": "assets/js/145.054c3e6c.js",
    "revision": "3d8cf12b41fd46ff38b96df16c503b64"
  },
  {
    "url": "assets/js/146.c00b1dee.js",
    "revision": "d9041e321c2dafb39fc4a9be8ea42f6c"
  },
  {
    "url": "assets/js/147.bf35f375.js",
    "revision": "e77250b7e67e46a469d4ad3eece7b781"
  },
  {
    "url": "assets/js/148.c368de0e.js",
    "revision": "875136033c657daa85cbc3c6d614b551"
  },
  {
    "url": "assets/js/149.850332a7.js",
    "revision": "1bc41b9205a7430778738e7d2cd2c1fa"
  },
  {
    "url": "assets/js/15.e9bbe3e8.js",
    "revision": "e74688a803b16ef7bf7f5d9a774b412a"
  },
  {
    "url": "assets/js/150.d0f95e03.js",
    "revision": "af2d4173a91ec36cceceacaa9395b751"
  },
  {
    "url": "assets/js/151.20307995.js",
    "revision": "385aa1cf9f876b2b34a5fcb4ecee2954"
  },
  {
    "url": "assets/js/152.6cedd62e.js",
    "revision": "d8d389cb64f442807ec2803b515220cb"
  },
  {
    "url": "assets/js/153.32da9144.js",
    "revision": "11091f6821b21a0118dd1d2f218ef480"
  },
  {
    "url": "assets/js/154.9a1b6d3e.js",
    "revision": "21cb788f94d32e344db781bef34158fa"
  },
  {
    "url": "assets/js/155.7838be76.js",
    "revision": "886426dfb6d850b1df7f827d3477c871"
  },
  {
    "url": "assets/js/156.615ff100.js",
    "revision": "20a23826cb75789314a63f86ebb0993b"
  },
  {
    "url": "assets/js/157.da0880a3.js",
    "revision": "14d1016cb975758ee335efa61c40f4c3"
  },
  {
    "url": "assets/js/158.4957c05b.js",
    "revision": "7f3ae6382e611b409996cf0df4ad142c"
  },
  {
    "url": "assets/js/159.b903c5d1.js",
    "revision": "3fef134a95659c3a6d5a8c35e5db9df0"
  },
  {
    "url": "assets/js/16.bf73d099.js",
    "revision": "29c6cf7b9251fcb2123204e0c2e0e246"
  },
  {
    "url": "assets/js/160.5613febd.js",
    "revision": "196df8458ad322ce3c07a83361ca94f4"
  },
  {
    "url": "assets/js/161.df47f114.js",
    "revision": "b432795aee36395990b37cb6454cbe0c"
  },
  {
    "url": "assets/js/162.7b17bc3c.js",
    "revision": "a9ef3e4b3da483fb14b7ad58db50f219"
  },
  {
    "url": "assets/js/163.4234519e.js",
    "revision": "366f9f4942c3df9ac277f8a7e0fe4f05"
  },
  {
    "url": "assets/js/164.a727d6ed.js",
    "revision": "9ea3d2a8a6e8657aa4d8adb344cbb267"
  },
  {
    "url": "assets/js/165.47074193.js",
    "revision": "ad7532ab4320d3dfc891120e9ecc52d4"
  },
  {
    "url": "assets/js/166.692da6d2.js",
    "revision": "bb8371dca9484945b195067a31a7a751"
  },
  {
    "url": "assets/js/167.39116b98.js",
    "revision": "d2ad8744237c055dc73f29d24973b5ab"
  },
  {
    "url": "assets/js/168.eaaed422.js",
    "revision": "708821ea7d62dfb748e27321802629b3"
  },
  {
    "url": "assets/js/169.854b9bdd.js",
    "revision": "26c6c6ce7b993c879ec0918448ca80a7"
  },
  {
    "url": "assets/js/17.16c54b14.js",
    "revision": "3afbdb3e7a565047cfb297daaab916c0"
  },
  {
    "url": "assets/js/170.e1149d0f.js",
    "revision": "35d4df907ab5c4e7d07c35d167bac7de"
  },
  {
    "url": "assets/js/171.af53eb3c.js",
    "revision": "50be5349238db9b6f7e59c139b39d786"
  },
  {
    "url": "assets/js/172.848ba077.js",
    "revision": "721163c593acfa64bacb857d029bd882"
  },
  {
    "url": "assets/js/173.eaf764f4.js",
    "revision": "0e74b81c8f65e30e32b9f19c48a51e0d"
  },
  {
    "url": "assets/js/174.2dfc974d.js",
    "revision": "ada5c5eecd5efd112c6333645a47e531"
  },
  {
    "url": "assets/js/175.2df40212.js",
    "revision": "0752e40f7ae1321855b993cc62510a08"
  },
  {
    "url": "assets/js/176.a885eadd.js",
    "revision": "0e186a0d4967c48f41043df3462abd4e"
  },
  {
    "url": "assets/js/177.0546205c.js",
    "revision": "c1700b9740a3eedc235eb5db7b3b4af6"
  },
  {
    "url": "assets/js/178.74d4358f.js",
    "revision": "b943e92b496430ccd4fb22c60ab93af1"
  },
  {
    "url": "assets/js/179.684244e5.js",
    "revision": "e14332eba27c50dc859431688539b534"
  },
  {
    "url": "assets/js/18.027f8343.js",
    "revision": "248a5423fab31f51b10f2bd8c0893755"
  },
  {
    "url": "assets/js/180.1d38b96a.js",
    "revision": "2b42988abcd9909d25f8c50bb7b5c179"
  },
  {
    "url": "assets/js/181.8be726b3.js",
    "revision": "cee63a48e9b75b9957f3652cdb61af14"
  },
  {
    "url": "assets/js/182.42255878.js",
    "revision": "9870394e5b50fd390d690ce0471995c3"
  },
  {
    "url": "assets/js/183.e77f005c.js",
    "revision": "af31813c300da33046c0f4ac4808c587"
  },
  {
    "url": "assets/js/184.ec542bc5.js",
    "revision": "c541017fba9787e895ea35a4b270793c"
  },
  {
    "url": "assets/js/185.3820a785.js",
    "revision": "480051103745ab32c2569c273fd76ce3"
  },
  {
    "url": "assets/js/186.ebad5c95.js",
    "revision": "d6d1b17874b7b3aa946d5c59f1a4ae29"
  },
  {
    "url": "assets/js/187.a97c618f.js",
    "revision": "88c706e7b7622167bbdd498479cdf847"
  },
  {
    "url": "assets/js/188.bd1c97e6.js",
    "revision": "b23315928e08385ff65579fbd12940a2"
  },
  {
    "url": "assets/js/189.5016dcbe.js",
    "revision": "2c2cf81a87d281fe271a5a1d7c0f6490"
  },
  {
    "url": "assets/js/19.f33425f7.js",
    "revision": "99b38772bb626db510bbf39c5d825769"
  },
  {
    "url": "assets/js/190.94ca513d.js",
    "revision": "360c78edd51b215b1c65a1e00a27c81f"
  },
  {
    "url": "assets/js/191.f690e2c1.js",
    "revision": "f203853068755650090a98ad31783329"
  },
  {
    "url": "assets/js/192.f07492b3.js",
    "revision": "c2d49ae2f2223d3ecbaa1fda71dae91b"
  },
  {
    "url": "assets/js/193.e75b24ba.js",
    "revision": "349e63e5760d46abe10487b5b3d49bb4"
  },
  {
    "url": "assets/js/194.9da8462a.js",
    "revision": "cdda6044c869ed8933a656e663c645ef"
  },
  {
    "url": "assets/js/195.cd907cb2.js",
    "revision": "8a3d673dabe0b13a399db96091e32063"
  },
  {
    "url": "assets/js/196.320bba4d.js",
    "revision": "035e366496bd3fc9a16ed8a86fbb7423"
  },
  {
    "url": "assets/js/197.7d4c35a0.js",
    "revision": "063a877e63d6b337b87b9121e0ae519c"
  },
  {
    "url": "assets/js/198.2f53c46a.js",
    "revision": "6689c608dab0b625bfe5aa288e8ad9d7"
  },
  {
    "url": "assets/js/199.253358f8.js",
    "revision": "b4874403c6b23511917ef974315f1989"
  },
  {
    "url": "assets/js/2.97ec8334.js",
    "revision": "600b60f101a0f69baa91a33a85c62e9b"
  },
  {
    "url": "assets/js/20.08bab0a9.js",
    "revision": "1ca7bed16fe8bd7e1725babff22847c9"
  },
  {
    "url": "assets/js/200.4181e0bd.js",
    "revision": "e7945fa388ed26270d85ee571155fc6a"
  },
  {
    "url": "assets/js/201.7894ce5c.js",
    "revision": "e4827b104d1d52ff5af7a618ef572193"
  },
  {
    "url": "assets/js/202.bb7d4e28.js",
    "revision": "fa3280a8b4542dbe4ea16c5506743de3"
  },
  {
    "url": "assets/js/203.07821f27.js",
    "revision": "e9f39979547b22cd4b61ad7f3797152a"
  },
  {
    "url": "assets/js/204.cf4ff02d.js",
    "revision": "77c2f68bd3652dcf89992522037c5e07"
  },
  {
    "url": "assets/js/205.4f7a2142.js",
    "revision": "6f6c9d211a04b2f1b2ec92eff73f55f2"
  },
  {
    "url": "assets/js/206.8602b1b8.js",
    "revision": "a818b7b2ec8af47639833a2a80e6b7e3"
  },
  {
    "url": "assets/js/207.b54332ae.js",
    "revision": "8e873875d51ac9c95034939625c6e571"
  },
  {
    "url": "assets/js/208.4be3b71c.js",
    "revision": "e942f13954abdf6d51c08ce9f7dd1a33"
  },
  {
    "url": "assets/js/209.02e6d4b5.js",
    "revision": "ae6603f0d84698b8ce9d0432f23de2c4"
  },
  {
    "url": "assets/js/21.ffb55ee9.js",
    "revision": "3bb2f92a18217e5bba55b1adcc5a1118"
  },
  {
    "url": "assets/js/210.e623a9bd.js",
    "revision": "3cb50276a03e4c91b03c411a8d60cf25"
  },
  {
    "url": "assets/js/211.7ebf311d.js",
    "revision": "8a66b111274cade35effcba6d9b8a4ea"
  },
  {
    "url": "assets/js/212.14b6b517.js",
    "revision": "9aa98f284c1c1b80c4f0f89c1d7e2538"
  },
  {
    "url": "assets/js/213.72e457e5.js",
    "revision": "a289d16cf29e03a79bd5930016dbf680"
  },
  {
    "url": "assets/js/214.549208aa.js",
    "revision": "5ce96d9f6cb3d6dd0e321fee94634e7e"
  },
  {
    "url": "assets/js/215.2ed94f56.js",
    "revision": "56f8aa83a7d4e66c9970d639e231327b"
  },
  {
    "url": "assets/js/216.33c88314.js",
    "revision": "6a1df117075edbc3600d5a4c21203933"
  },
  {
    "url": "assets/js/217.61e7fe82.js",
    "revision": "0fe11f99940dfe7d251bcb6aacef670c"
  },
  {
    "url": "assets/js/218.75ab1912.js",
    "revision": "5c0278882305de14cac9cb72ad068462"
  },
  {
    "url": "assets/js/219.f9ce801f.js",
    "revision": "14b64a57bf2a530a61f02be1e8771de6"
  },
  {
    "url": "assets/js/22.f6446348.js",
    "revision": "d2fb5afbcf390dbf36a5f01abe3b9129"
  },
  {
    "url": "assets/js/220.e3f74a96.js",
    "revision": "29685d0340a4d67b42e865383437e050"
  },
  {
    "url": "assets/js/221.d03b4000.js",
    "revision": "aab058e20bfb419f7e567c458d79e92d"
  },
  {
    "url": "assets/js/222.3d05e35a.js",
    "revision": "ca2f63d115c8a835c42978fa1aec1bc9"
  },
  {
    "url": "assets/js/223.1edb06d2.js",
    "revision": "2009bc2f4a39c924b9c9f55efdc1ddff"
  },
  {
    "url": "assets/js/224.3c0fe309.js",
    "revision": "36214076838d687327829976bdce77d6"
  },
  {
    "url": "assets/js/225.56ac7c25.js",
    "revision": "68784c33a513ab77c669692133ec7697"
  },
  {
    "url": "assets/js/226.83bcb5cf.js",
    "revision": "1f85074ab69ecda5fe4dc824bf6bbc34"
  },
  {
    "url": "assets/js/227.896095e5.js",
    "revision": "90261514a4e48b4d62f496996d9b1b50"
  },
  {
    "url": "assets/js/228.81f95118.js",
    "revision": "471ccbfe81e062c5ab9663098f3859af"
  },
  {
    "url": "assets/js/229.5ae92ddb.js",
    "revision": "f7e7cb382a83ad49f2fe5ed309eb0161"
  },
  {
    "url": "assets/js/23.6518270f.js",
    "revision": "2f7db766a8f36710fc63401d112dde7e"
  },
  {
    "url": "assets/js/230.d4a5fcb7.js",
    "revision": "8e3b697a598fdf4371d022295255950d"
  },
  {
    "url": "assets/js/231.02a84a9f.js",
    "revision": "9625ce4f4e96f5041cb31a391cb80135"
  },
  {
    "url": "assets/js/232.405f0ab7.js",
    "revision": "0e2e57671ac1f06e008a71c84bd150d5"
  },
  {
    "url": "assets/js/233.c880dff9.js",
    "revision": "1668a0c1490e5bf9cb6b291e0abc7862"
  },
  {
    "url": "assets/js/234.48d4ab6c.js",
    "revision": "3447106fddc0289d87ae0cd1aba9da05"
  },
  {
    "url": "assets/js/235.c7fb004e.js",
    "revision": "4d692a0fad42472fb9c8647594d648c2"
  },
  {
    "url": "assets/js/236.f093c8a2.js",
    "revision": "07a088f5c9bca8a794a4dc8aed112523"
  },
  {
    "url": "assets/js/237.0979a1f4.js",
    "revision": "5e3f6643d61fbb7c5d8f34242c847ec1"
  },
  {
    "url": "assets/js/238.59e54ae5.js",
    "revision": "07da150e17e2bd4594375741a68b5e57"
  },
  {
    "url": "assets/js/239.5dab1225.js",
    "revision": "f3426f9270fb7495bb6795dbbc96f376"
  },
  {
    "url": "assets/js/24.88da55b5.js",
    "revision": "7b4f0993843c5c5e0af78b144f45281d"
  },
  {
    "url": "assets/js/240.81890cc7.js",
    "revision": "e5d82dac5769fef6144337520bfd03c0"
  },
  {
    "url": "assets/js/241.dd91d219.js",
    "revision": "bf1d4a3bf5d0b50fbd5a0b006c640220"
  },
  {
    "url": "assets/js/242.b8939663.js",
    "revision": "a289bf80a107dcff5fb8dc3a3d33cc00"
  },
  {
    "url": "assets/js/243.45ad7453.js",
    "revision": "8918560e09cd3475531e36413e63c863"
  },
  {
    "url": "assets/js/244.2ca50a6a.js",
    "revision": "5c5f5f55baeb0c277ad24396bf526f1b"
  },
  {
    "url": "assets/js/245.400d8ee3.js",
    "revision": "ab332f36057b6b4643baf212e8a4df5f"
  },
  {
    "url": "assets/js/246.ef1d54b6.js",
    "revision": "9ef1312b011e46d49a92db930b25dd0b"
  },
  {
    "url": "assets/js/247.e412fa6e.js",
    "revision": "38bd7468649c1527b6b96a8ea91030d4"
  },
  {
    "url": "assets/js/248.a4a7761e.js",
    "revision": "d75e150a8bd18d49519cc8bef4824168"
  },
  {
    "url": "assets/js/249.ada5c1c4.js",
    "revision": "3b3742432f123451eaf139a9858e3de0"
  },
  {
    "url": "assets/js/25.32fb5ba9.js",
    "revision": "493392c7f218739cee9ee7a2393eecb3"
  },
  {
    "url": "assets/js/250.0bf3ed8a.js",
    "revision": "bd93c2e67938fb5efffd8dfd8428cdc3"
  },
  {
    "url": "assets/js/251.1ea0d426.js",
    "revision": "6aad0841298721377eaecd30acb8c66f"
  },
  {
    "url": "assets/js/252.d9ed2646.js",
    "revision": "b847c98b87202aa7183e830ac54edaee"
  },
  {
    "url": "assets/js/253.6e890352.js",
    "revision": "f1fe186ad838c1935c5c9dae746a018b"
  },
  {
    "url": "assets/js/254.a6303496.js",
    "revision": "6613f1584c3b8634a82671903c9e073b"
  },
  {
    "url": "assets/js/255.3a27c01a.js",
    "revision": "4a9926fb707e4f03fc7676004db05b1e"
  },
  {
    "url": "assets/js/26.846c901c.js",
    "revision": "6e74f2fbf92122b55750cfbf0ae30468"
  },
  {
    "url": "assets/js/27.c00c71b7.js",
    "revision": "24c25bd7f8d9010fb09b6117fea10615"
  },
  {
    "url": "assets/js/28.6009ea1d.js",
    "revision": "c80851f1d11f07479005b44f5058135b"
  },
  {
    "url": "assets/js/29.6517d746.js",
    "revision": "7af6ed1e8b47a246b996e74dbe8c5547"
  },
  {
    "url": "assets/js/3.3804d593.js",
    "revision": "6f0677a2e94480045bb6fdf17da50e35"
  },
  {
    "url": "assets/js/30.7869582a.js",
    "revision": "26f4730da141a70d133164eb6bc94bfc"
  },
  {
    "url": "assets/js/31.daafeec8.js",
    "revision": "1e525dbc122893c65b74d8dd30d56236"
  },
  {
    "url": "assets/js/32.eb44cc0a.js",
    "revision": "ff27523f46537c55b6536b73d762e85c"
  },
  {
    "url": "assets/js/33.9f0bd918.js",
    "revision": "6cb6d347b954b65439165a4a1f9264a5"
  },
  {
    "url": "assets/js/34.f570a68d.js",
    "revision": "aa547a7ac06e3456dbc60451242fc787"
  },
  {
    "url": "assets/js/35.88c7c97a.js",
    "revision": "038c56bb2dfb3971f8475b92eee9de4e"
  },
  {
    "url": "assets/js/36.3b6f9480.js",
    "revision": "75cdc3ad1fe0be3f8c1a980ca417e9a2"
  },
  {
    "url": "assets/js/37.abf254a9.js",
    "revision": "94058b295af88bea9e7f1b6d05f778c5"
  },
  {
    "url": "assets/js/38.84d6a7e0.js",
    "revision": "7554c10bbf32652502310a97e753175a"
  },
  {
    "url": "assets/js/39.cd18c327.js",
    "revision": "42b91fee144b96e2b9e37ebfb2080c92"
  },
  {
    "url": "assets/js/4.b16d6b6d.js",
    "revision": "7c735f5ff819d63d7cd4f1bab84e31d3"
  },
  {
    "url": "assets/js/40.2291152d.js",
    "revision": "0514c85016e978608f94162d9f7c047e"
  },
  {
    "url": "assets/js/41.fc683361.js",
    "revision": "705916bebfed51e0c2f6af9c855c779c"
  },
  {
    "url": "assets/js/42.54799d3a.js",
    "revision": "1a2f596fd73aa9bb496c36f63e5f862b"
  },
  {
    "url": "assets/js/43.7a591757.js",
    "revision": "f84a39ab74f589bad207594f4c7f5e97"
  },
  {
    "url": "assets/js/44.b2f727c3.js",
    "revision": "a13a3324a87e358885bd7035b0309856"
  },
  {
    "url": "assets/js/45.be7be9fe.js",
    "revision": "904eff8006d2173890225e365acb168a"
  },
  {
    "url": "assets/js/46.3dc51876.js",
    "revision": "68d46cfa4a586b2cf1b0278af3b8e168"
  },
  {
    "url": "assets/js/47.30572a83.js",
    "revision": "1fe85e9f63229d7e8fea5698da84841b"
  },
  {
    "url": "assets/js/48.c28e8bc1.js",
    "revision": "3b80d15bfcbc79de5d9757b2dda887fe"
  },
  {
    "url": "assets/js/49.74b3c388.js",
    "revision": "658609a1601b306331bffed547aab2da"
  },
  {
    "url": "assets/js/5.a229eb20.js",
    "revision": "20f44c669d26ee12fa840620855026bd"
  },
  {
    "url": "assets/js/50.dbf6d59c.js",
    "revision": "65a34b9beb28f324131e5229e8f9079e"
  },
  {
    "url": "assets/js/51.0ed0595c.js",
    "revision": "e580515245231a3f692a7b01eb5b3a6a"
  },
  {
    "url": "assets/js/52.624b182b.js",
    "revision": "ef53b828f4857b2278621d608dfb05d0"
  },
  {
    "url": "assets/js/53.1fb296d9.js",
    "revision": "a0da2bb5db2631ab04a0cbadd9ba0078"
  },
  {
    "url": "assets/js/54.fd2f0921.js",
    "revision": "d83d07dd19258d1d8604a3856385b068"
  },
  {
    "url": "assets/js/55.c3e4e5fa.js",
    "revision": "a5d93cf4e4f6317f5659044d277debcb"
  },
  {
    "url": "assets/js/56.4027fb56.js",
    "revision": "31be7691901c4109158ba6dde90c0506"
  },
  {
    "url": "assets/js/57.e356ca09.js",
    "revision": "1f043e22db565cac2fe37006dbde04e9"
  },
  {
    "url": "assets/js/58.65a170fb.js",
    "revision": "f0d2976655eb067f97c9c617e38d34e3"
  },
  {
    "url": "assets/js/59.2f4e9422.js",
    "revision": "ab9dee50d2c80b4eccbbf16e921ba258"
  },
  {
    "url": "assets/js/60.4476b01a.js",
    "revision": "472842b88bef19ab438dbc8ac276e1ac"
  },
  {
    "url": "assets/js/61.9ff7eb64.js",
    "revision": "c1636e52c611371f1c14acba5f9c488f"
  },
  {
    "url": "assets/js/62.e0913a3d.js",
    "revision": "8685194d7ede321dc9201fe33d5f2301"
  },
  {
    "url": "assets/js/63.6b88bd9a.js",
    "revision": "5b3e0caa11531e64ae804ffb4dc86531"
  },
  {
    "url": "assets/js/64.f3d20c45.js",
    "revision": "3d5763d3c8bf84fc55a4358f3578a5ff"
  },
  {
    "url": "assets/js/65.7f19ed7a.js",
    "revision": "4b7359c50975a8710ce08d3895d63fb9"
  },
  {
    "url": "assets/js/66.be5dd4c0.js",
    "revision": "21381fd040db1b2073263dae050c0e9e"
  },
  {
    "url": "assets/js/67.8b6c4e97.js",
    "revision": "4cf1817021b51f666066f54216d3d467"
  },
  {
    "url": "assets/js/68.fd549894.js",
    "revision": "7134a331c94f9b685d3fc60b32453bbb"
  },
  {
    "url": "assets/js/69.a6b2721a.js",
    "revision": "0dc25b61e70ea37d6a238e9a1a4697d2"
  },
  {
    "url": "assets/js/70.fb992024.js",
    "revision": "44dcb9b6ab4951600bd03f5743e4c4c6"
  },
  {
    "url": "assets/js/71.7af114c5.js",
    "revision": "bc4a9b672d543019702cc763bc41779a"
  },
  {
    "url": "assets/js/72.174168bc.js",
    "revision": "5f559d7b6dd81ef735122f6001b4ede5"
  },
  {
    "url": "assets/js/73.bb0fc8d0.js",
    "revision": "6208262a2a174a8a05639648fcb03f24"
  },
  {
    "url": "assets/js/74.6954edc4.js",
    "revision": "d2880bd086b03382daf53c4c2d0a2347"
  },
  {
    "url": "assets/js/75.15fd55a9.js",
    "revision": "a90db75134f169212d2eddf3a178a366"
  },
  {
    "url": "assets/js/76.623f329b.js",
    "revision": "3f054b12edb7903cbfbd17680e1e03a7"
  },
  {
    "url": "assets/js/77.148de421.js",
    "revision": "0a1c445bb8d8966396ac94d3fd2915ff"
  },
  {
    "url": "assets/js/78.48ac1f10.js",
    "revision": "b7a8efc0d51c971c37fe617cd1ab88f2"
  },
  {
    "url": "assets/js/79.9e27f1fa.js",
    "revision": "5ccfea7db9c50d1bb228a6c29babd7a5"
  },
  {
    "url": "assets/js/8.910ad87b.js",
    "revision": "5a5a236a92a5c1849ed1328266d9c5a9"
  },
  {
    "url": "assets/js/80.842e8c5a.js",
    "revision": "e1426c2d7a15766bd8cfe9475ff02c1f"
  },
  {
    "url": "assets/js/81.bafd42fe.js",
    "revision": "b923846f08be8fff18ef571a8b3d9fc6"
  },
  {
    "url": "assets/js/82.eccac8c5.js",
    "revision": "8dcf7426125c98aba241bd3968ed74f7"
  },
  {
    "url": "assets/js/83.5ad0cdb9.js",
    "revision": "94267890be67f63f8bcc25d1e0a8fcde"
  },
  {
    "url": "assets/js/84.3c01841c.js",
    "revision": "2cd46db9ae6dff8653ffe65c2aa46179"
  },
  {
    "url": "assets/js/85.f219f904.js",
    "revision": "c18a484533d02a754f2dd21db03b5193"
  },
  {
    "url": "assets/js/86.7244c7fc.js",
    "revision": "012925b520f0aac6293dd521df0088cf"
  },
  {
    "url": "assets/js/87.149376f9.js",
    "revision": "76f3a9f48800728cad657c3f09f8505f"
  },
  {
    "url": "assets/js/88.534525d1.js",
    "revision": "dc0c65e2bda6c3ad5fb1b0d50dbbb244"
  },
  {
    "url": "assets/js/89.5585b71e.js",
    "revision": "7d759e1cc89f8e64901be4b209102852"
  },
  {
    "url": "assets/js/9.da4f710a.js",
    "revision": "88c84ffa261a46e4b84f8a94750bea72"
  },
  {
    "url": "assets/js/90.a90864de.js",
    "revision": "6dc7c10201e3d55a297cb3a416bea80f"
  },
  {
    "url": "assets/js/91.d95be374.js",
    "revision": "d476a53ff2917291c7b149cb89066ed2"
  },
  {
    "url": "assets/js/92.86bc1928.js",
    "revision": "3c15664cb607c05fd20be0e5c0c0e1d5"
  },
  {
    "url": "assets/js/93.3064e429.js",
    "revision": "cf0ca050166100ab27ac46d4f734f380"
  },
  {
    "url": "assets/js/94.26fd7f25.js",
    "revision": "1eaae1b4b014f60a43d9e4293a577ed1"
  },
  {
    "url": "assets/js/95.0068dc10.js",
    "revision": "f0dfa724064f8dee1348558bd57e3705"
  },
  {
    "url": "assets/js/96.54e8cc24.js",
    "revision": "500ea0bb5499479bd56bfd606befc303"
  },
  {
    "url": "assets/js/97.5a6f1ddf.js",
    "revision": "5145802500ad5bec4e62f4ffc669a67c"
  },
  {
    "url": "assets/js/98.036ac356.js",
    "revision": "7c5e6c67f811fd7fe252f21d115bcd4f"
  },
  {
    "url": "assets/js/99.8e6b4aee.js",
    "revision": "31385b4c1a5e9c3bcc8343c881704619"
  },
  {
    "url": "assets/js/app.886b145b.js",
    "revision": "2a3276363fbeace9febe46b780649392"
  },
  {
    "url": "assets/js/vendors~docsearch.72c90366.js",
    "revision": "8de9e81a5ca121f3e468e881912b7c81"
  },
  {
    "url": "index.html",
    "revision": "b27f713aad8d789a306f98f297cde8e3"
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
