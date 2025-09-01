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
    "revision": "32ff84e4f528d0254044286444a79bec"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "ce0e806249167ec39647fc29232b0f97"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "18f860748acc570d755f41659e2503a2"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "4340ae2d1268330b988889ba1430e6ae"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "06588b51888074b05dc9ddd2bd708971"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "5a24a2717aeb022dd376e0f822248cee"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "c6df4dfdf8b2c45d1a92f0e5d557e377"
  },
  {
    "url": "2.0/b2b-marketplace/supplier microsite.html",
    "revision": "94773a2b29cea2ffc1066cee324873b4"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "ba4eb972a529b5675cb66b7e2966b13a"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "cf8c4788a48d6b1fe428acd166ac9ee9"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "396316003c004f6a0ee258e699c383cd"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "4e8c408f01b8e307baff1ef978381adc"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "5c950230168ce651af31fd662089532e"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "49b85a8f2679412d7e72fc22a19acde3"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "246e13ca7f147f6090bf767caabc1701"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "3322d487b8461fcf2d7e69d9a5e923ad"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "3ba458210e5ae80083e591301badcecc"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "9d248c27b6c6d3506ecd7569fc855e77"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "57a08438896dadc2fc70f185f947d73b"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "c8c1deabe732c3ab2dcedccf8f014066"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "7e2576fbb6f642dcc580297cacd37e3c"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "64bebeffc5114ea158cc719cf32b45b6"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "b100b0d42ad3c993b0df20a9c5845327"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "6a95f2c73aad6bfb6f99c9e81cce6b0e"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "88d2f77c6c7552596e62bb6b23a9d3ca"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "0e84c0925c15ba1b774991bb397011fc"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "9fbc787b53e9c6057aa8e61856294f17"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "8ae9d8a1c50e15785db0070bfe757e31"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "e765bad243e25753f2bdefff1b7f697c"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "d298071dce037c3c2a11dc6736bb8edc"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "1013c7b9e2cc36cf36137f29b2d3b53a"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "a4ff664f4fb90aab2cedbbb1a8a605e2"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "1e1006cdae3a7ea8b83e9d19c930c993"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "cd94db0108527db4328a0fd2cac18d6e"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "1d78498756ff0824361218f910702a1e"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "731e90656ef2f4f7a2daf69b7f7273c6"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "2c382c704ed0efeb63cebfb31dbdaa80"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "ce9edb4a731b6e312741233b0a395f67"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "3d6d2329df93eb422f1e2d2cb68da3ca"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "a03bbf499843f30d35ffa6e6ba2a8390"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "fc24683d212a881702e69a0005fc04aa"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "bcd72b88b895d9ad68ab0437fdab68ef"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "0fa14ab48342f68a09fcb290a2595501"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "5613a7eb2b914ba1b640897fded58f6c"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "472bd5e39f42efb9bed5b7449d9d7401"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "82631be02ac84acb2ae008ea7b90cd3b"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "63b9155bbe65bdd61e408259cc626b43"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "055838415864fc302f2e07fabbb5d143"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "618af2df555e043292085087d24e02ea"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "0fa67fff533e598502c02c11e062e8ab"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "1aa36399474dcfd5f8d1c68dc7c1e805"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "a4cdd3b97eced5a3fb7464a666e2e8b3"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "bd1fee96b8366f22c9de6e71e1443627"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "8e71dd4dd4dca0c2b7c98697f26dd9a2"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "22510613c7adaa44936ad1fc4ed5883c"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "8fb7639e75d721011a1d48575cf62e41"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "2f68fdfe4eb6862c3ebda3c827743ecc"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "e0ac428843a207fc655630aacfae9ed6"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "79cabe4fbe75d94ce8ceb109e60c4606"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "6645c44862cb4103799dbfb2ce1673df"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "4d3043d0b7b105456078a78d5330438a"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "84b14a8f308e4fc1ddf343405c47b423"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "9d3c807c786ac18e364a4e6ba2ae8150"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "c85a9eb9b5de55254e789e3f01b52701"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "48c5f839163d83c3b30dac00d39a9090"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "c79174e7c37bdf3c0dc9a6bc845b28f3"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "79fecd762425e2217e544d47393031eb"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "56957816f5328ea7eab35b2809fb5a5b"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "c69d11fa67b4375b530fb614bbb89023"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "c5a6bf681a06686ba386b0b8f7d79b44"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "21ec148286740e4c2fb58ede7268a74c"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "59d25a5bc0b61de59b4746c4bde9f838"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "54ed2a1debee6a415c52cfd3fefdd0b2"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "b3c6c60b39b0b1eb486498b8ab02e9e1"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "0b0b4d9449ee415b61da6a611b0ab4ce"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "2fdb3bd4ef539bf8524e60a292c30b4f"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "933c568a7ef204845302a8d2e9cba741"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "a729a0c2d38917b730768883758b8c08"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "51b92389ee49ca876a0b62cadfea0e53"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "d8bc8d653c7bdfda0fea910fd76ab039"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "7e2dbab11c378a4836a57c1a0c9d52fd"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "1f34b47df5a700555c664af56334fce3"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "9c9e6c06f895a3e3efb76165452b1bcc"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "d9a6e6b73412ee7ae0d7a4095a85c926"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "c976c7c39e61b113f5e86fecd32a3a44"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "75aca0e20e252b0f546103207da3d16a"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "6015b4c576786f739ce00340ca443927"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "ceb6ee0310346c47db48ecefe159e976"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "ce6bf8386431430d49e27c08e242a4fc"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "6a44e425ea96004a0084a053f9e25e2a"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "78179c88378c3b66c4a9ccb6f6606e50"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "f5763d56138df7e66da9977ff0cca1bd"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "9891009a40ad67e3af372adc85e62a1c"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "b3445ba0c6ba3f1c9368cd546cbd5ad9"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier microsite.html",
    "revision": "fbb488fe1c26123181431f91e07c5b00"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "f43e540307f20d7b12adcfb300e43872"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "25142ad6c12fa59c4d90864cc9eb3aec"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "c73b05d350f3633114305384e87977a2"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "c7553779cdfceab5c941f7abe5227e32"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "68788ff02a39ce92d4accb4e0ca916ef"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "e933c718e7899f29a333b390b6924610"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "baaf36b9090a2d64b865b6dfc580b52b"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "5c5125ec88dd21ea5dacc0f8a0244e9c"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "57f6a034187cb7e1c3e646f390396bed"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "ee3c38ac271e9f5a4202b4fb6b45bf80"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "aa42cfe1d7d588b9baffd69fa854c95b"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "03ef1d7066f7b990c2e9df968040c4ac"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "785492e50969e42e01abd58cadf52ecc"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "42ce896c8f15d38209d5bb7eb677041e"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "f80a4af060fc564546fb982c105bf7fc"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "ae7423b5b3dc45da7b8dfe50924031ae"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "59fd925f33afbb1c4cbc6034eedd7b5a"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "2a25d25e52be62ee8cbaaaaf5b95aac3"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "8ee0d8e635e002abfd6cd5868daa6388"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "9aa0311752e94d8d5a52643d4c793ad8"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "0bf6cc7dfa85a30bdf7680558898dd0e"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "88eed10b76902f778b57e371f453f330"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "d918fb3689190ed710c27d31d80a2643"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "51a609ef676bc679daf01e4ba2fd12ab"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "c3b6a1be2566078dd186ab236a68e175"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "67a4588b05326b59ce4202da83339c3a"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "6550a98fdb67d1737f82b6dd5da5c42a"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "d93527987c3b7274f604df5d839b7131"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "c23b49ec069dff97fc4dadb924c14602"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "27844cb79aa2bbd199acbc3915b7fd11"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "b67ff18a650be05b22a74a02c15eef17"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "0e0f2fc6f357bf252ceee0e75f2c5de2"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "063fb79c737b9fadc6685beec69c035f"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "de65db114b47b6a752079d91c9fec7e8"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "4c2ac93aa56975f21e92d9de336ec438"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "e92cb7d8dd42ebfe513f9d003e1ac6c2"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "46dc863880d89693213bc45ada9dd70a"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "09054a176ec698f3da23ef40687e668f"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "0bb38b03acce25c6418b92226e3a30a1"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "727279834a625766d60c831dd3496529"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "98252b0765bec0c5afa8d053fa20cce1"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "e6f3b4ae10b9b8da88181ed994961f38"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "f0660fdf882cb1883a2c781b6f78ae70"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "41a8a0afa30091e5179a2eb39f48f4ed"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "508b9fc2545c2fd395bd74d03e076885"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "1ca7d0ac591eda9f4aa8afcd256830fb"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "3c3fcc6fff653654f27f1f3d5c68532d"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "e65505ec689b8e91298073e02c3e4895"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "d2457b8145eab324f601861ac7e3e99e"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "72c8f0e83a3992cf86e439e901239fb5"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "4331eccb7782a2085e770ce9cf88a00d"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "abb0cfb5c056731d17b745f811be23cd"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "a209f20ca659b985a15e0e58a9619b4d"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "3864b57895fd057498522fdb0f280de4"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "1f6ef01d9d7e1be65fd672365b08bbc9"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "e46175efd0c96da67d3fa368b48c5937"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "77e5277dc6e0d8ddec998d1179d81dd0"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "92d3db433dec5d83225b5a6d96d09818"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "23b11b888af1b15ce7c96b2029fdf16e"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "c9f33847616900f956ffe0bbb26a1be9"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "5d2ae151da4c6fa624558a633eb91ba8"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "e1f773e65a5d920ecea896e013894135"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "cc86e8b903c6704a431127dcb9b32f4f"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "d312547967e52f616cdf6dfad52c597e"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "97a9d96f150658544ad91f70aea05b6f"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "846a7fd100330d4bf9fac8dba17e0ab4"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "d54888a784326f61bb3cdb9a75d3363e"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "b96b2e3b53fdc5eaa0defc28f38a8cac"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "369d99128f47c9fd5bc179c9f5f9cff6"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "402d7d32757c2ed1b3fb73294ce4aba4"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "929a635f2b18b1404ba223015c4ef212"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "5bb69ce663bb0d29a8451ac49aeabed6"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "9b62529a55ca5086c460a0a27831e199"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "c74e573174287af5751fa46dda5b3e78"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "3f6e81591e5c44db48fe3742b5f7163c"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "b4812d945b4120db5227b36704c3c98d"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "5c1bf29008de29ac4a6edab01e65091f"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "a8ec6df0053ec154f6233a79c48767dd"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "94f501d651a629709b98cfa3177621fa"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "0fb39698c1ac294751afa194ab93dae1"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "e135b817df7e7b63c8195fc329419ebe"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "b96982982e0ee08abb6b13163fd893b1"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "fbd7975d9c33525a2b4c39843a43f20b"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "8b4acf6c3bd96f068e846e6794e2c2bc"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "d79a01b5555624706afa2bf0dc0549f2"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "ab43e43a3494cc196ed5ff09387894f2"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "49d9fa31edffba0f563c3604ad98ac4e"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "8ebd55a7f7a2cedeab0fe2b7a5ecac92"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "a08fcf096e4e1dad0a95577f4d1d401a"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "4ba91fb5b839bb636e04f6d0956c2800"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier microsite.html",
    "revision": "57a7d114c97a8c9c071e4214f816b49d"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "3d8062701b9e5367ab67b7a8c63f94f6"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "0c488811ae526a53d79bc20d0598630d"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "73bd349925b851ff45c00bc932e98911"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "ef7d5c9c646b2e3fd6dea197e16c3b32"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "12ace161c0fae02b7bc3143f8c45f68a"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "569b242a7087dd28c7b1a8a9841dc349"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "3307365842ba3e1727f8316fb789cc4c"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "24417618982e3fbe77779d391c948a17"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "fdfeb971799d956917972c022bc82447"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "13b699a0949d92a96b88c3c0af38d20e"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "9d4ae88136bf0f970a45b7483e433e15"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "5b381f7ff9cf5122061f05dd433a503d"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "6d013d0b1f28eb42e672de2c04ef8003"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "f09daa280ef98c8bd51945f5b13f1470"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "879919c54fe2730776a3230ba96a9d62"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "1f7dda30eb615985b7db207ff12a7591"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "417bad84224fc0aae8e45d00e88cd237"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "9e2bccff7fd551bde3013d772112e260"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "7ed35c4f579e4fb0be1a0d638c72bb30"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "2d31e5c1f998d0cdbc7f491faba2ada2"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "c3d75638128373e287e983657612a38f"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "a663d585eaa7d427db082b1a993c3027"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "86cd928faaeae37571e5d44f6296c0af"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "b031cb568e6c0657d77e4ed1e1ac0147"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "7558be0d16bd521d498c5822e5709607"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "bed97bdc48a481058e256fe9687fd81d"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "18f598f544089d5d00910b220b5b32a0"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "b55b49e886a882a747af552e5eae3288"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "2629761ed25754b56bfae72ec4dba2dc"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "81e4e073bc6bb6543d424ee2930b402e"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "874bdc17a597ea1821d642759be5e8db"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "299741f580c300c74dcf548a5b1717b7"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "5d9e24bee8cfd95d301425c5bb812544"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "a826315eb34de11ecffa0a016c595418"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "d8c245382ef816b6f420344dda29f3cd"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "744f869ea10703e95236cc6bcb11c06d"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "0d39b39c5b2cae4fd40fa3d5e8125fa6"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "5202259d5381536d6e0b5e6fec79cd70"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "da96a581a9b0969544c268b8131d5ae6"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "703231935208ca01b916d04e64e0cffd"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "9025b9edd07c20710bcf9fc52f0f1959"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "7a810f43a9593c70bae02f15c75ec519"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "3ac813b3aa7255e21e6e6fe9fb7d0b22"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "45160c4ec72808652cd2b169de4f4101"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "5d1fc50a2ed398f66770e959a2d56ffc"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "e75f59a4748e3496b16420738539851d"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "3efb6a6abb71f9daab8d89fa9c5d2f00"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "0c2faf533376391dc0a274bc8ef3b811"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "ec8c4eca38de0e1a1cd8546fec96d8d2"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "442e307f15f7c8d3ddc1c702e292746c"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "ee0a256d17a8fd9b531d27590c2a8b22"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "45c2854997c071bf1e94c3248a793512"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "8d315acd0fb2d32f0235b5a1b47fc58c"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "e00abfb3ae2c6968f40bc8b4e06a5330"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "dc369f9867be1e152ceeae93f10fd2f8"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "7b8f3f40000a8c4e23ba721737aa7e22"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "3cf606c799496748fe2a5bb53fd6a163"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "c84b0988514af916fe17cff12bbfef40"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "3695e7de8449e861b0a6d42c5742cca7"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "84c5ebda0bcaf40793caba2591b683d3"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "1473c6df5248d13fbd7463402542b5d8"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "5828fb547fa087eaf57264d4043a5398"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "7e43ca852455c3e5d1fc9a7967d94a0c"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "12f39660fb3d8b309614174c3b14e8d4"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "0c0bf78ca9440975eb53416f072748d2"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "b22c4e5d21e7203f8ed4fe83a82f146e"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "347ad422a9626df48e0fbcfca0d5419e"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "89fd3e9fa221dd0ec783c96e57c84f7d"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "63871a13878f5d4fba6922d750992e58"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "b0322acd1ad019c8f9aa7c9e7237aec5"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "a08189bdd87b8fab4e383d87b02ad02e"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "7761f9b39a441e0c15b3e550842d12e1"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "3f1ad1650203481be429049fff6b300a"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "6bc62b2e405086216198aede164d0248"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "dce888b2bdfcd52a34584d09fa1874ba"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "aa056870ea3bf69b140d9217e9c621dd"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "c820eec68cf744510e3632367a8cbada"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "0947599b8866476fbb6f26e310d4ba84"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "ce965321bc36e839e74ad6817640f3d9"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "9e8fb16b7032966ef444ad7f845c791c"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "cc6651c36429ba7df1cf9865fc62ec6f"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "b7fa8e62566b4cf767e913d55316b716"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "9eea9f076bdfcb3f842378374754fcac"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "8d5952eed462bea41e7cd5246d30fb36"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "6b9dc4af13bda4882041ca1419701979"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "6a081032b09316aeb169ea270955cdfe"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "5356a10b2ad34d97c597981a10ee18e7"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "6d2353a192042f59b2d7d3b3625a5297"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "26196c87af09f12f1b69ea75f0e0153d"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "65cb3061faf91cb56e901470742d8aaf"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "21299e24570f701c626f5fa5c93e9b03"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "166e134c039a8626faa3216861b4032b"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "f712fe6b5bd6258393efc3c1f3a2d59f"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "19caac265591b1cefcd3a0c7a43ed214"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier microsite.html",
    "revision": "524273184b7d7a90ea34621152f3acf1"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "8f61592453bf97f43a96a90cc08bba69"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "2e4a4d81b44898f5deecd2a68daee8ce"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "02912fc5636f77a1621b8c4b79385689"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "2402181fc6f2a5b52d23565cf2263989"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "a69ac868944cdbf5e9aa695addbf2001"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "e63ecfe18be2e0f8600dfab96c7ad6f4"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "a9b3a51369e58ecf98b80cc34706e491"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "3031360db621aaed6d81a32b435ec97a"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "7e1fcc6dc2f1c25a862cee0034f0644a"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "98dfdd14c0c8bb49c45950db41c9acae"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "f12bd1a2ed5a86452402d9fe25142b67"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "233856978665d3c8cdd232dca5d64526"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "d32a62ff6d13615763566aac118984f3"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "f2c5818c74f8f1657da6356ad889de07"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "e9d68a576383a2402d731a19cec08aac"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "e3a10dea1443fd95dcc93b0729979e05"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "2079a64d842ef8ddd0291e58bc10872c"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "0d49efd1fd0833b9989c7c4239c1071a"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "79dc1a4f04275fb18007eb7c3ac4e13c"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "13a84771211e3e3dbb70ead3fc7abd5c"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "9c8706d7a6e0140f02c57dc44af33562"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "060328932b9a072a0ce7dd6ade24a20e"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "359f66f49f1c9ab2a3e75e7a76fdcd30"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "71ac0141d3fd2deac8c4080f98cb52c8"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "868b79a99d22c2ed58061bc4317193d1"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "654323e9d67ee2f37e2deb876d19cd05"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "4c0e76269705bfae67b318e0d04401c4"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "9a8daa4ea99c7c3c122121d01eb9cc78"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "32a8ee59355a0b8a4d9000d5a37ec16e"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "7d143ccdba6e2aa0482ff01f49a2444b"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "02c0e0cd3dab6ba83433fa2d6375b563"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "f4dffa9e86483e87d92b50db0370b988"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "a32c6a3fc68d8e1a456a718baf888c69"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "e97b0af84da5af74f187e35ca8d12fe4"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "e7cf1933b8e6913e157ea896d02d2a80"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "e1b69659f840cc0529f041c35769eeab"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "349706e0b7c2eb42d84c26abf7288dfa"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "c05123a919129e5cfe2831a5f7047e08"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "23c3c8cf88222719865002bb9e058648"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "3effe1676b5227a4e66c0abb0bae6a59"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "6ebd8e303f9f624f3da6087f2cfed32f"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "614a866f28639331ab4e50362f9a8533"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "9e60306b9c095c58b1480144b1882a3c"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "0e4cb79f25d4fa0f4693b97570d811a6"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "ee53fb11d52c48272f364288f2e3c3d6"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "04736bdcf98bd9a481b553d860fba753"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "a93617f9df98c828f99241ec5d941a4c"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "97a2c8b6291f4cba6e5c33ddb7e76159"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "9f1075b5a650b4058240f80f7d124733"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "8b227e05da74627670610fe35fd25e50"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "4b66f0c726f4fa0a5158eff3f76eaf48"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "f1b903b419c1ab47fd4f955c6847aefc"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "abc81396e7bb4f5654fa87a38bd4a843"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "096d3ab30751e1efe27d4fdfa4a45781"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "bc547cfafb3817e0b6c12f2330427580"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "eef1663e9da58b808216ab695614b996"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "8394f15805fe8c242940d586ebcbbcfb"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "b6235e233b8c7827e4d366601217c5b1"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "192f6cd1e6171d78bf283a99691dcd50"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "1672200045ce78dc0efceca512086d29"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "eac904b853dfa56f099df74f976c5686"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "f6c6a28e78f222ef26df16704bd4c989"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "a35757fa3a38728d17099fb3ac402eb5"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "efff3eeeb62b6cf04e9bf05df14de222"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "83cb41b9ebedd0b22aeff58d8596a353"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "392583a7e90aa4a4ec20113c1dd89422"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "7406a8f10ccd27a408c688fd6f036dc0"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "c71ca61d3831f64b9b6d5e11e3c63278"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "110adbd8604652223be13f8619365a71"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "be44a610ef060246a4bd34a0500b8225"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "44e94e4b769775d2b46400e4ee4f0026"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "f6089459a79d662e904392c1889ffef4"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "9850c47620fce285ea9015c00cf75479"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "5f5ae122502922a0df1ebf90d10b197c"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "d07c6c0332b52492bae444bf681a0ac1"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "5b3a523b545de9138fff9c6c98614164"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "19faae6d5dce1db32ffeb800d2f4cd60"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "76ca7eb6b0c3056fb1689d378bd5c1cc"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "eda237c66bc2cdff73a7934a4d12cd6b"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "344f7c44fa13536832df62e4e7af1444"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "58363fbca787dc72fb31227919aabeca"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "f1a6b2902f681c0b2782a652dc6492a0"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "ee098cd31271bbe583ccf08df27cee08"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "e19cecabe203d5f46896137616f4f62f"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "7c422829a8e7b231e63d47f244618b3a"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "ddd0aec881fea3a6b51a57ae5d463454"
  },
  {
    "url": "404.html",
    "revision": "8e3cae0ff1221add15ecab611b5503b1"
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
    "url": "assets/img/1-seller-dashboard.153db513.png",
    "revision": "153db513847c3df74c38b76b5b2ad7ff"
  },
  {
    "url": "assets/img/1-seller-payment-request-to-admin.abfbdf27.png",
    "revision": "abfbdf27cff6d5a73fb4c2c96f6c6906"
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
    "url": "assets/img/2-seller-transtion.e2c2379a.png",
    "revision": "e2c2379abfd3bf215c83d713ade1ff85"
  },
  {
    "url": "assets/img/2-super-dashboard.d91b3a81.png",
    "revision": "d91b3a81ae12582126709895b66a1057"
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
    "url": "assets/img/3-product-creation.2ae8a534.png",
    "revision": "2ae8a5345fdfd60144d87ddbc9d298a7"
  },
  {
    "url": "assets/img/3-product-review.ca4e7643.png",
    "revision": "ca4e76438d32b5ebb20a7c28d3e3f67a"
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
    "url": "assets/img/4-Super-tenant-Insights.bdd69873.png",
    "revision": "bdd698736b2573973d6e005b76b19a9d"
  },
  {
    "url": "assets/img/4-supplier-approved-by-admin.dd11d306.png",
    "revision": "dd11d306bad1810709f8c4d18c316bbe"
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
    "url": "assets/img/5-seller-dashboard-product-review.b1747eb4.png",
    "revision": "b1747eb4ce62f4d615279119ea9dc6d3"
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
    "url": "assets/img/7-super-customer-list.af1b595e.png",
    "revision": "af1b595e220dcd1f1eb059f5e966dc09"
  },
  {
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
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
    "url": "assets/js/1.56095fc8.js",
    "revision": "26c0cf05f4fb77240f78f6aab033891a"
  },
  {
    "url": "assets/js/10.15762beb.js",
    "revision": "1d8c436d3c799dd417424df434d2d66b"
  },
  {
    "url": "assets/js/100.ca06015d.js",
    "revision": "c68e8f572ea10037a7f4b0afa1e8fc5d"
  },
  {
    "url": "assets/js/101.85478c60.js",
    "revision": "7514cfeb65258ba155b8a6432abe2bd5"
  },
  {
    "url": "assets/js/102.7d63c667.js",
    "revision": "4c0fc4c7c35d6dd9e75927ddfac374e7"
  },
  {
    "url": "assets/js/103.9f526f7e.js",
    "revision": "c9a863dacf89a50225fbdd2647cb0cb0"
  },
  {
    "url": "assets/js/104.70a97578.js",
    "revision": "46ac0658518383f194e6f4545e07c039"
  },
  {
    "url": "assets/js/105.deb4eda6.js",
    "revision": "401f916579b6a5cd9d92679ffad802e7"
  },
  {
    "url": "assets/js/106.df053a89.js",
    "revision": "bb681fd000398fe7aa9c6efdaa5c2c45"
  },
  {
    "url": "assets/js/107.10a987a6.js",
    "revision": "650d5239e86a7d22ad74ba38cfe8346d"
  },
  {
    "url": "assets/js/108.e453f372.js",
    "revision": "1912d03a1652f4794b510cbe35253c3e"
  },
  {
    "url": "assets/js/109.02a4494b.js",
    "revision": "817ea2c5b959badf67896db16ded6d35"
  },
  {
    "url": "assets/js/11.c3343cfc.js",
    "revision": "e8fc6cec17b6bc009477ee8ed5550668"
  },
  {
    "url": "assets/js/110.0b163ae5.js",
    "revision": "820b7498ab08cd370ecd296b0e425527"
  },
  {
    "url": "assets/js/111.43fd3f2f.js",
    "revision": "3621052e01296f01fe50e7bcf23aef7b"
  },
  {
    "url": "assets/js/112.c7452ad0.js",
    "revision": "75f07a0203196c3135f3a0b6cb1bd039"
  },
  {
    "url": "assets/js/113.3dcdde42.js",
    "revision": "00792fdf60a02121cee29c95fda8c4d8"
  },
  {
    "url": "assets/js/114.c1e97651.js",
    "revision": "3056017b517ea71287fe177ce27d449a"
  },
  {
    "url": "assets/js/115.fcb26d96.js",
    "revision": "7b7d1de92c9f41c829a8d07735ca8b76"
  },
  {
    "url": "assets/js/116.5c096250.js",
    "revision": "cb9b8ede4bc099966d34f6a555f16ccf"
  },
  {
    "url": "assets/js/117.566638cc.js",
    "revision": "7461de54de8b294b635b2ef0e4033750"
  },
  {
    "url": "assets/js/118.f1f8b46c.js",
    "revision": "899022aa577d385bf2b8877a87ee5dce"
  },
  {
    "url": "assets/js/119.f23fc5b2.js",
    "revision": "571e2050c5cc10bbe96ccdf8490ca7ef"
  },
  {
    "url": "assets/js/12.3395d79f.js",
    "revision": "52c4932b656d1857b76c7ce1ec9d6bd8"
  },
  {
    "url": "assets/js/120.8602eb13.js",
    "revision": "007bd6385a9dda762561630d8ac46bc7"
  },
  {
    "url": "assets/js/121.0a15cea4.js",
    "revision": "f2016c89ab28e9db0f7f53378b5358ae"
  },
  {
    "url": "assets/js/122.b2e24329.js",
    "revision": "fd2fd0e296a4006682cb17296b807201"
  },
  {
    "url": "assets/js/123.0f24d80d.js",
    "revision": "8459a1b19f236a3278c77313d61fd3a2"
  },
  {
    "url": "assets/js/124.599b3b0d.js",
    "revision": "ca9b41282bb7bac5e56e7f376456ba1e"
  },
  {
    "url": "assets/js/125.dac0e3ae.js",
    "revision": "d3c0f12c81b8fb0ed7fbf3075dd2b562"
  },
  {
    "url": "assets/js/126.deff7be4.js",
    "revision": "ae83946a3e3a98388e82e890643340a3"
  },
  {
    "url": "assets/js/127.22048e0e.js",
    "revision": "c21d18dcec6c4dd92d301ed9a5b15b49"
  },
  {
    "url": "assets/js/128.fb0c07fd.js",
    "revision": "b8408ffa8f7eb480916532e38857e429"
  },
  {
    "url": "assets/js/129.5b96eb03.js",
    "revision": "ac8c954a8c397621404ba34d8a23cf73"
  },
  {
    "url": "assets/js/13.d0bf5f55.js",
    "revision": "0f38dc4006596137a610bb08db9ae46f"
  },
  {
    "url": "assets/js/130.1110e1e0.js",
    "revision": "4c0309d465b8bec70d4e03e6bdaa1dca"
  },
  {
    "url": "assets/js/131.35e8d291.js",
    "revision": "d18a4a0322e3f22ec94d349155f7fff6"
  },
  {
    "url": "assets/js/132.7451bf36.js",
    "revision": "86b70f07f46772b4f622f56c77c72b58"
  },
  {
    "url": "assets/js/133.ee07a0d5.js",
    "revision": "37f060db43dd1d14b4960fb2f3e176e4"
  },
  {
    "url": "assets/js/134.039f6960.js",
    "revision": "38d29f80d0e085acad099cdbf44d877d"
  },
  {
    "url": "assets/js/135.605ea024.js",
    "revision": "fe5fa34bace9c1dae86599866d461b8a"
  },
  {
    "url": "assets/js/136.1cbc52ef.js",
    "revision": "29a6c89079f3e3d0219534225142794b"
  },
  {
    "url": "assets/js/137.c8af6e3e.js",
    "revision": "415e75d284cbe23dd132bffe67fd4bf4"
  },
  {
    "url": "assets/js/138.0531d049.js",
    "revision": "1d875ef8632e69811b0eac50893b0dfe"
  },
  {
    "url": "assets/js/139.39b44d39.js",
    "revision": "9b873c91b288f8cc2e6605ef6925ace0"
  },
  {
    "url": "assets/js/14.9e012a91.js",
    "revision": "1f9433bc2ceaaa960c4d7bb82c27d75d"
  },
  {
    "url": "assets/js/140.4b20423f.js",
    "revision": "1fdb69c9eb0e72b1c72e2650b13feed0"
  },
  {
    "url": "assets/js/141.7508656d.js",
    "revision": "cc51098bd9fc0a4b0fec01be99a29b08"
  },
  {
    "url": "assets/js/142.a53e7692.js",
    "revision": "537fd3af6677f507da1812a7fe323bf9"
  },
  {
    "url": "assets/js/143.6030b292.js",
    "revision": "b3dcdd814b5cc0958f100bf81d0b3511"
  },
  {
    "url": "assets/js/144.ab208527.js",
    "revision": "ff28539b9342830266e47f9bb69dab27"
  },
  {
    "url": "assets/js/145.8e90c659.js",
    "revision": "6fe17b93715139eb99e9dc662ff9d3d3"
  },
  {
    "url": "assets/js/146.010f3dd2.js",
    "revision": "560db8098a45dc614d498b159af0e3b9"
  },
  {
    "url": "assets/js/147.87e3f9af.js",
    "revision": "7fa26c338a83db85569b07b4063fea0d"
  },
  {
    "url": "assets/js/148.ee07a976.js",
    "revision": "875ce15ca3ae25cd6aa46ec0d391638e"
  },
  {
    "url": "assets/js/149.6faf42e5.js",
    "revision": "cbc3f4f911a617aede4dc7814fd52a60"
  },
  {
    "url": "assets/js/15.8d6f1eec.js",
    "revision": "b2821603e3bb3c8677e89af1d2fcdfbb"
  },
  {
    "url": "assets/js/150.15dfcbbc.js",
    "revision": "cc514a1692099b555dd1243227e8a7de"
  },
  {
    "url": "assets/js/151.4c877381.js",
    "revision": "1cad9d2d70591c92d27659f4f9cdb2dc"
  },
  {
    "url": "assets/js/152.e76243d7.js",
    "revision": "787111563a5e3458e502860b5a8f40ba"
  },
  {
    "url": "assets/js/153.9cdedc7c.js",
    "revision": "75ab2d618dd0f8e2c77ee82fe413ccf3"
  },
  {
    "url": "assets/js/154.11654514.js",
    "revision": "6c26ef33a6d4f9f1d6dc98ff53ef53b0"
  },
  {
    "url": "assets/js/155.6342cb20.js",
    "revision": "cfe5180f5f59d7e843cbec1ec2f0fbf8"
  },
  {
    "url": "assets/js/156.34f3eb6b.js",
    "revision": "012ca5c624004341f923fde0475e7c02"
  },
  {
    "url": "assets/js/157.b81289ba.js",
    "revision": "bd9a27b9b5e973e8a4b7d6ab63fadf66"
  },
  {
    "url": "assets/js/158.ae8b86c4.js",
    "revision": "d8659dab54421a096f7eeb5449d57b04"
  },
  {
    "url": "assets/js/159.96cc64a6.js",
    "revision": "88c152bd4164e5d774fe9b8c14a43b55"
  },
  {
    "url": "assets/js/16.7c37da29.js",
    "revision": "f0c33b8be0256b29e7d6372da64fa008"
  },
  {
    "url": "assets/js/160.6e52f434.js",
    "revision": "f6f47ec016018abfd918ceb602badfb2"
  },
  {
    "url": "assets/js/161.2ea88f2d.js",
    "revision": "d53bed6ed85df7f40c957af9be94b2b2"
  },
  {
    "url": "assets/js/162.520b4245.js",
    "revision": "74618cfa39e97004a81b5c8ed62792ba"
  },
  {
    "url": "assets/js/163.cac2a18f.js",
    "revision": "a6f53590fe8d32c930fb0e77327a2aca"
  },
  {
    "url": "assets/js/164.ebaa402c.js",
    "revision": "d475ae09cbfea7e95be79bd9c362f3ae"
  },
  {
    "url": "assets/js/165.987519ad.js",
    "revision": "308532871313e9d5abfbabf590d2202e"
  },
  {
    "url": "assets/js/166.5c8ff4a0.js",
    "revision": "25a19ebe60e03f58202a204c1a553a1e"
  },
  {
    "url": "assets/js/167.9e434c70.js",
    "revision": "252c16ba614f911bcefe2622cb19237a"
  },
  {
    "url": "assets/js/168.f8285142.js",
    "revision": "149a246433a0a0b34af2843bd38e81eb"
  },
  {
    "url": "assets/js/169.d6588c54.js",
    "revision": "0843431f99c0ee44962a71e9a0881423"
  },
  {
    "url": "assets/js/17.08aacf5a.js",
    "revision": "926d4a03d07c90071c06a730461b80f4"
  },
  {
    "url": "assets/js/170.419b3787.js",
    "revision": "03c115e7f65bcec396b1c2a90149f649"
  },
  {
    "url": "assets/js/171.3432f527.js",
    "revision": "fc437b5584a70ff6dba641aff1d73632"
  },
  {
    "url": "assets/js/172.4caa6d2c.js",
    "revision": "7ca0d0dd85452b4360557255ed38800d"
  },
  {
    "url": "assets/js/173.cc3a0a6f.js",
    "revision": "27355d222bf51d71cec80571230cedc4"
  },
  {
    "url": "assets/js/174.338c6f4e.js",
    "revision": "accf0a9ef1f19a8ac2e823493db1d91d"
  },
  {
    "url": "assets/js/175.6303f24f.js",
    "revision": "61da45258ea56e05bbbba82347eca201"
  },
  {
    "url": "assets/js/176.ebe215fb.js",
    "revision": "fe7b8cbedbba231830c02ac85cff1271"
  },
  {
    "url": "assets/js/177.f00894c0.js",
    "revision": "9a8776943a2d4c21787bf98dc6fbe8fd"
  },
  {
    "url": "assets/js/178.3585df9c.js",
    "revision": "b5d2ccadeacede3f7928bdb95328d3ff"
  },
  {
    "url": "assets/js/179.a7fcaa52.js",
    "revision": "baaf778d42ebfeb138e5499c2bd078ec"
  },
  {
    "url": "assets/js/18.a5ebf88a.js",
    "revision": "ee83158998f3a9157358cbefe1649158"
  },
  {
    "url": "assets/js/180.895e38aa.js",
    "revision": "d1a07e9d521505fe6ec26cf79fdc4237"
  },
  {
    "url": "assets/js/181.a239873a.js",
    "revision": "0e0ad3631fd490a87fb0f80ae8cbbf74"
  },
  {
    "url": "assets/js/182.bd2f5b2c.js",
    "revision": "736715ec37243cc3430ce9df69d25612"
  },
  {
    "url": "assets/js/183.074202c2.js",
    "revision": "69464e42b26ae2d9cca7fd935ac7210e"
  },
  {
    "url": "assets/js/184.35247902.js",
    "revision": "168912357b46c62afc6e7359c6c10ab0"
  },
  {
    "url": "assets/js/185.39ea6ba7.js",
    "revision": "a4252dde2e98f511491211c4895978c0"
  },
  {
    "url": "assets/js/186.41abed7b.js",
    "revision": "679c95b9d44312a97c3d6735c107f957"
  },
  {
    "url": "assets/js/187.1d905ee3.js",
    "revision": "ab714f833861332b3448c1ea5fbab788"
  },
  {
    "url": "assets/js/188.5980e7df.js",
    "revision": "6257ae95f26e881dd9940c477e8780c7"
  },
  {
    "url": "assets/js/189.da265968.js",
    "revision": "b34878c9d1b1603a1c60b3f4b0f8a42a"
  },
  {
    "url": "assets/js/19.07cfa5c9.js",
    "revision": "b38308f1dc692d72d98c2f6ea1f35282"
  },
  {
    "url": "assets/js/190.0808378c.js",
    "revision": "86ecf0855ecf90ed234911473cfa491a"
  },
  {
    "url": "assets/js/191.7c8d2ec4.js",
    "revision": "9c2e3ce315f3350ffc440bab379ea893"
  },
  {
    "url": "assets/js/192.16b0b488.js",
    "revision": "f03bae83b3c980ee35a167c3e90cebb9"
  },
  {
    "url": "assets/js/193.a8b0244b.js",
    "revision": "61d44ece198a7492c4e2a7b7465b3f9a"
  },
  {
    "url": "assets/js/194.e96d9aa3.js",
    "revision": "b9cbadb675719485d85987c4afad51c8"
  },
  {
    "url": "assets/js/195.43500da4.js",
    "revision": "3b38059a1218211a5d2c91063c9bccb0"
  },
  {
    "url": "assets/js/196.f44c4d1e.js",
    "revision": "a904824eaa973caa6918de10f8485e96"
  },
  {
    "url": "assets/js/197.68102159.js",
    "revision": "d81ea4a6cafbbe6d40efdcfd4c95dca1"
  },
  {
    "url": "assets/js/198.3a31fbdc.js",
    "revision": "36e9cece9a2568709c456e772f4d0f05"
  },
  {
    "url": "assets/js/199.0befdc42.js",
    "revision": "75520cc9ae3faef513b153c6c5ce5974"
  },
  {
    "url": "assets/js/2.15ee7926.js",
    "revision": "7343c360c5bff845f3dcdd4dbe57cb8a"
  },
  {
    "url": "assets/js/20.589eef8d.js",
    "revision": "6b1d817de6dff877ecb796379ab11ba3"
  },
  {
    "url": "assets/js/200.a3d7678f.js",
    "revision": "275bc849e051346bcb101fdb84dbad87"
  },
  {
    "url": "assets/js/201.f84a8fec.js",
    "revision": "9d169816c4910dc818b2895c706daf31"
  },
  {
    "url": "assets/js/202.8afc8a8e.js",
    "revision": "61d28a7b4836601f6bfd2dc7ecac738d"
  },
  {
    "url": "assets/js/203.8a8fb496.js",
    "revision": "572dd6ae07f8abb7a677c54d9dfaa333"
  },
  {
    "url": "assets/js/204.7d9d46ae.js",
    "revision": "51197d5a0794100632c52b2580514780"
  },
  {
    "url": "assets/js/205.c1317b3f.js",
    "revision": "bcc0f5d6adb50105957d9f2c68bc1953"
  },
  {
    "url": "assets/js/206.cd679ac1.js",
    "revision": "47e53a524fab3512b55761ba7244c16d"
  },
  {
    "url": "assets/js/207.326933c1.js",
    "revision": "cdfe12ebf6b1a094fcf9d1dbfb197a8c"
  },
  {
    "url": "assets/js/208.8dd6d590.js",
    "revision": "58c3f2537b7103d504ce3078b2ba1941"
  },
  {
    "url": "assets/js/209.79c127e9.js",
    "revision": "db34003fd0f9ff8f4ce2af66e5cc16d4"
  },
  {
    "url": "assets/js/21.5ff20d62.js",
    "revision": "81382366f7e2acc6c94f86ce3365d760"
  },
  {
    "url": "assets/js/210.211133eb.js",
    "revision": "3aeab3df6a87915b8d87821f7ea97ad7"
  },
  {
    "url": "assets/js/211.f21a8beb.js",
    "revision": "22ec0437caa082d1b025ed97dd352c46"
  },
  {
    "url": "assets/js/212.f808f868.js",
    "revision": "7d09e53be83a2e14c98c3c85978864bc"
  },
  {
    "url": "assets/js/213.57984dce.js",
    "revision": "3fbc2fcf6d87d2f4ed8e35f27aba80db"
  },
  {
    "url": "assets/js/214.7af85058.js",
    "revision": "e2ca5c8b2de817642e33e9bf3d48476b"
  },
  {
    "url": "assets/js/215.ebbb9101.js",
    "revision": "e1682b417d2aaf1d39f405e9c03788e8"
  },
  {
    "url": "assets/js/216.79a559ed.js",
    "revision": "84c112c73313d69dc40001cfcc40a640"
  },
  {
    "url": "assets/js/217.1dda4de3.js",
    "revision": "38a560571b26d892d41f3b2c9c61cb24"
  },
  {
    "url": "assets/js/218.f55b7181.js",
    "revision": "e2064eb91ee74a9d0206d77d15adf522"
  },
  {
    "url": "assets/js/219.9a0e2941.js",
    "revision": "dcc2c4c4a71493412cc848515c6ec2be"
  },
  {
    "url": "assets/js/22.cf4144c8.js",
    "revision": "6ba9c858b0146c55c9a4403255d27d04"
  },
  {
    "url": "assets/js/220.2c12c51f.js",
    "revision": "eaa910faa5ea79d49c9d4c324cdbb538"
  },
  {
    "url": "assets/js/221.7720f4ee.js",
    "revision": "2ef2ddf7c248dcdfa402ef7cce4b4a11"
  },
  {
    "url": "assets/js/222.0fdfc3e4.js",
    "revision": "3aed4a81569c44774eae48dfd27342a0"
  },
  {
    "url": "assets/js/223.53cbdf0c.js",
    "revision": "2b1d0cf2bf1be75322c329bb63020dbd"
  },
  {
    "url": "assets/js/224.44737ee9.js",
    "revision": "b0b7a1f2b692a58b372df51823732169"
  },
  {
    "url": "assets/js/225.ae05feee.js",
    "revision": "30f79b9ecdbf0ad29118b51f5e168d09"
  },
  {
    "url": "assets/js/226.269316b1.js",
    "revision": "1f9e51e8314b00d4fa62037247ceba26"
  },
  {
    "url": "assets/js/227.70059699.js",
    "revision": "6e7bf5fc78cac97772f45f64b4a4159c"
  },
  {
    "url": "assets/js/228.709f6991.js",
    "revision": "e704204dbb18a618afe20b37b8ae6f4b"
  },
  {
    "url": "assets/js/229.fce041c1.js",
    "revision": "1c275aebf3fc4af7ce39dd53c2050b31"
  },
  {
    "url": "assets/js/23.40032909.js",
    "revision": "953a072d9be5695505c3d3364c2a56f1"
  },
  {
    "url": "assets/js/230.bb952011.js",
    "revision": "ae18643aa66804b32f77cc70ad9da93a"
  },
  {
    "url": "assets/js/231.35f9b0a5.js",
    "revision": "a38e301ba55816e53468cb4736adae8c"
  },
  {
    "url": "assets/js/232.3fc08037.js",
    "revision": "deb8601e6fbb30f73d2142da6fbd050d"
  },
  {
    "url": "assets/js/233.d4d31ebf.js",
    "revision": "7dfd61d0d62410f46855fc652bb89c6f"
  },
  {
    "url": "assets/js/234.fbffa3b8.js",
    "revision": "83a3ff0f5772c7985e54732bc7d46ffa"
  },
  {
    "url": "assets/js/235.dbf8cdf0.js",
    "revision": "da84cdab1280648b4c52157c34fb5d08"
  },
  {
    "url": "assets/js/236.90f68a52.js",
    "revision": "755d2c464857959cab9c57f841ad4efe"
  },
  {
    "url": "assets/js/237.92947658.js",
    "revision": "491f17c80dd4484fd42f518d41260d88"
  },
  {
    "url": "assets/js/238.187c925b.js",
    "revision": "e370904632969b13f7550d4886948ecf"
  },
  {
    "url": "assets/js/239.6bc9b0ce.js",
    "revision": "9e6aff1adc2106b0629565fd1f1f65d1"
  },
  {
    "url": "assets/js/24.4b70fe1c.js",
    "revision": "34f312b9e56d0893d3bd0ad967142f11"
  },
  {
    "url": "assets/js/240.ec21444f.js",
    "revision": "1875e7af7230d57ae234427af89fcf1f"
  },
  {
    "url": "assets/js/241.8b2b8662.js",
    "revision": "092cb810be16e02ab635e1cd893562df"
  },
  {
    "url": "assets/js/242.1e0925c3.js",
    "revision": "15a2aa2311e7dc614b353b9156e9c3d0"
  },
  {
    "url": "assets/js/243.b172dade.js",
    "revision": "309a89e426ce745158c1cce5a8158c57"
  },
  {
    "url": "assets/js/244.f04fcc15.js",
    "revision": "df0a21e978459316a55f8af9535f551a"
  },
  {
    "url": "assets/js/245.526c75d6.js",
    "revision": "d9ab30563c3aae52622c8c53bd37cc69"
  },
  {
    "url": "assets/js/246.c3979e9e.js",
    "revision": "ddbf30d888a277a933c7d068e4cd0415"
  },
  {
    "url": "assets/js/247.fd4e6723.js",
    "revision": "ac2a3947c3018b6515757e9d4bd5b59e"
  },
  {
    "url": "assets/js/248.6cca4d34.js",
    "revision": "e71efbb5ab92009aa85efbb46675a019"
  },
  {
    "url": "assets/js/249.fa317ddb.js",
    "revision": "b612a75d05068552bd1d0c6a697013d8"
  },
  {
    "url": "assets/js/25.c889c414.js",
    "revision": "db5f46cbe494ce845a0382320411de8b"
  },
  {
    "url": "assets/js/250.4e501f78.js",
    "revision": "2d6eea0043eaecccd74e75a18c64d5c6"
  },
  {
    "url": "assets/js/251.d81e6470.js",
    "revision": "46485e287af48ed763257feb8f34e9ac"
  },
  {
    "url": "assets/js/252.1ecb627c.js",
    "revision": "e9c0ca5fadc3a74c688ec01d022bab3c"
  },
  {
    "url": "assets/js/253.3c61273b.js",
    "revision": "d54b07e7adc9ef2294da9767a9fd6cb0"
  },
  {
    "url": "assets/js/254.acda4882.js",
    "revision": "ece3f1428cd8037a09426cdc8f7d1eb9"
  },
  {
    "url": "assets/js/255.313a3439.js",
    "revision": "73f6a9674133812cc05fa7a4cdd9c722"
  },
  {
    "url": "assets/js/256.f9ae2a0a.js",
    "revision": "52d2e4dc17f060d7d7369bb913857be5"
  },
  {
    "url": "assets/js/257.74fc2ef7.js",
    "revision": "ab25ef2e1b3396543f39067e5c83b63f"
  },
  {
    "url": "assets/js/258.6cd72d37.js",
    "revision": "456b30ee33910d945d1da9ec7146a4cd"
  },
  {
    "url": "assets/js/259.f2a1ceed.js",
    "revision": "e26e5b0237f94cad6cc1690efec9de4e"
  },
  {
    "url": "assets/js/26.504439d5.js",
    "revision": "272f5b010849fc63e8354419b31636ae"
  },
  {
    "url": "assets/js/260.f4eea7fa.js",
    "revision": "a10489a8dccb5d6c99c40a3cf70f34a6"
  },
  {
    "url": "assets/js/261.df58b9d7.js",
    "revision": "218ac8adbc94fef32670966274307c75"
  },
  {
    "url": "assets/js/262.3ca15ba7.js",
    "revision": "bd5d8017c00a5c43be4d10b5764a32d5"
  },
  {
    "url": "assets/js/263.951167ef.js",
    "revision": "ee0e27ae15d9eae39fc7625698ba0f4b"
  },
  {
    "url": "assets/js/264.7db2689a.js",
    "revision": "8e8236bc1c084d16c4b436bb9982a71d"
  },
  {
    "url": "assets/js/265.b5c50a07.js",
    "revision": "580d6aeb3289600986290db2e700ea8d"
  },
  {
    "url": "assets/js/266.1690de19.js",
    "revision": "1a24cadfbadb5a1c928e525c14ce243d"
  },
  {
    "url": "assets/js/267.31a5b2e9.js",
    "revision": "5934b6eeb53c1d4d135e3fceaf97e8cb"
  },
  {
    "url": "assets/js/268.504097fa.js",
    "revision": "acdf430a0fc9b393d5b0121c638fb4df"
  },
  {
    "url": "assets/js/269.aa16b338.js",
    "revision": "5249e11c7f4d21a5f0fbb5ce5e97b57f"
  },
  {
    "url": "assets/js/27.355e3a2e.js",
    "revision": "6b00cb81f62289f37df0bc329d8b07cb"
  },
  {
    "url": "assets/js/270.2c63c312.js",
    "revision": "6a7a2f8ce27e512c1be7f536784a8a00"
  },
  {
    "url": "assets/js/271.b4989b4c.js",
    "revision": "58af60ba24a9ce4f228d7b3a8b2dc969"
  },
  {
    "url": "assets/js/272.65466a24.js",
    "revision": "cd9917ed19d2cb5ac945d339d41cd0aa"
  },
  {
    "url": "assets/js/273.f21a290c.js",
    "revision": "de3822aac2b85c4e62996e686c739b07"
  },
  {
    "url": "assets/js/274.67c9aa98.js",
    "revision": "54c8ee7f550fafa103d422772f3f99de"
  },
  {
    "url": "assets/js/275.284d227b.js",
    "revision": "95a4e34ada5f62ecfbcc36d696e8c1e6"
  },
  {
    "url": "assets/js/276.48c7b448.js",
    "revision": "7e933ab143bd6922a52fe9fcedd15bd8"
  },
  {
    "url": "assets/js/277.02d2ec00.js",
    "revision": "09c4512f4811dccd84ece555037bda8c"
  },
  {
    "url": "assets/js/278.3940b0a5.js",
    "revision": "29ce88d59481a23eb7a50d61f1f9ebc4"
  },
  {
    "url": "assets/js/279.a30d4cce.js",
    "revision": "09b96847d91c04b8d2c2a3b36d71e043"
  },
  {
    "url": "assets/js/28.5877eb47.js",
    "revision": "18b5c00474c43f5b56c81f867b578ebe"
  },
  {
    "url": "assets/js/280.63224dd5.js",
    "revision": "d5a47bc8314863aaafa5145e5520891f"
  },
  {
    "url": "assets/js/281.13d6b55e.js",
    "revision": "5d2690665153cced5fb27f5478b64538"
  },
  {
    "url": "assets/js/282.d9c1ab0d.js",
    "revision": "0a7f3c12efb67c98660b68bc6eee3275"
  },
  {
    "url": "assets/js/283.97c137bd.js",
    "revision": "db053ef0b61181a3c4a433e2c5deb75c"
  },
  {
    "url": "assets/js/284.330aafc6.js",
    "revision": "986000bb4657768b1606b7e7dda6e968"
  },
  {
    "url": "assets/js/285.5df8adef.js",
    "revision": "5defe984cf19924492b7e7dc96f53c63"
  },
  {
    "url": "assets/js/286.fb5a6917.js",
    "revision": "865c6636a47315b027008e11ec708413"
  },
  {
    "url": "assets/js/287.b3708387.js",
    "revision": "250a9967c5aafebda1e26fdb78b7e2d8"
  },
  {
    "url": "assets/js/288.6786c035.js",
    "revision": "409ce11879a71eac1302554ee1cd5189"
  },
  {
    "url": "assets/js/289.ccd5e3f2.js",
    "revision": "9b1d4aea4f6b18bbfdf7040c6fa1dce8"
  },
  {
    "url": "assets/js/29.a5cbdc46.js",
    "revision": "1c5ff31cbf7ae638b327d31933cdc917"
  },
  {
    "url": "assets/js/290.2bb1e2f9.js",
    "revision": "7003baa3cfdeb045782e2c8c2ebbd78d"
  },
  {
    "url": "assets/js/291.28eb53ed.js",
    "revision": "99b8e1c3dc500fcd8e2112ab5195c90f"
  },
  {
    "url": "assets/js/292.0ebae982.js",
    "revision": "4d02191f87a545a59d15492d77e70314"
  },
  {
    "url": "assets/js/293.ca831dab.js",
    "revision": "87194102d65cdbd28ece7fc3b62dbba8"
  },
  {
    "url": "assets/js/294.b3fae120.js",
    "revision": "ab8cfe8ee4575b555761f87080fc7354"
  },
  {
    "url": "assets/js/295.1cc3a34d.js",
    "revision": "ebcfa147f9592db43fcd8fd910c1ebc4"
  },
  {
    "url": "assets/js/296.63069c90.js",
    "revision": "3ac5c371000d0b168c920597a46bdc7e"
  },
  {
    "url": "assets/js/297.2f7a0d5b.js",
    "revision": "75f08e44d514a0dbfc38bffdcb45949a"
  },
  {
    "url": "assets/js/298.d190ad10.js",
    "revision": "a3c9bf193c7e345a992f1221834d44e2"
  },
  {
    "url": "assets/js/299.a19c6e53.js",
    "revision": "9e50f77f264708e36696f10090dcda27"
  },
  {
    "url": "assets/js/3.aa6d00b1.js",
    "revision": "02666b912ca760739ad025b9b3424259"
  },
  {
    "url": "assets/js/30.ddd560e8.js",
    "revision": "6ce3c86005e67f24020dd4ba801ff009"
  },
  {
    "url": "assets/js/300.1c67bf6c.js",
    "revision": "9e20a632bf26269cf0445a63dd456014"
  },
  {
    "url": "assets/js/301.96071b74.js",
    "revision": "777d657c8125d7bf7032b70b2b67b31f"
  },
  {
    "url": "assets/js/302.d7854cb5.js",
    "revision": "764e1a2fd6209640c7e1d027f95de596"
  },
  {
    "url": "assets/js/303.784e326c.js",
    "revision": "6030b4408595bc86fa85b92057081a9f"
  },
  {
    "url": "assets/js/304.c688c4ca.js",
    "revision": "7596931e1784dd8f35acbc15d28136ef"
  },
  {
    "url": "assets/js/305.7b6e062f.js",
    "revision": "5b7749180a28504e01730c8e307e73a9"
  },
  {
    "url": "assets/js/306.49c58883.js",
    "revision": "3bd46133c053e6464eb68a6ec2484d79"
  },
  {
    "url": "assets/js/307.54091350.js",
    "revision": "c2f7024431c38dea9c88a87fa042a0c3"
  },
  {
    "url": "assets/js/308.25a65975.js",
    "revision": "3494ed6eec793f227f4a73e1487e9f41"
  },
  {
    "url": "assets/js/309.58a824cd.js",
    "revision": "d743a1840c6921a7ef32ff4bb63865bb"
  },
  {
    "url": "assets/js/31.cedec1b1.js",
    "revision": "38c5318981e7efb5b3e1128a2c9583b9"
  },
  {
    "url": "assets/js/310.3397fc52.js",
    "revision": "51140cca0a5235ed361ddac42404ddcd"
  },
  {
    "url": "assets/js/311.03a26257.js",
    "revision": "29aa58d291c5c10da770102585470149"
  },
  {
    "url": "assets/js/312.f9f5b204.js",
    "revision": "efae3fb6c43ba24e5871cbc5056480d0"
  },
  {
    "url": "assets/js/313.75f12f22.js",
    "revision": "3103a76128aaca8df2afc84273c84166"
  },
  {
    "url": "assets/js/314.e0289335.js",
    "revision": "8a6b5bdba9ffe18220389e7f0e8f2c26"
  },
  {
    "url": "assets/js/315.d5bc5c06.js",
    "revision": "6bcbc47fecaa65cb43f80e7f086ab741"
  },
  {
    "url": "assets/js/316.d0406989.js",
    "revision": "f734d61ac8987e0a814b840afaac56f9"
  },
  {
    "url": "assets/js/317.04526f71.js",
    "revision": "8d2907a338f39ced17198c4f9483e0de"
  },
  {
    "url": "assets/js/318.343ac50e.js",
    "revision": "0130594b25926a1dfefc7febc93d5f44"
  },
  {
    "url": "assets/js/319.ed7b1c9a.js",
    "revision": "468ddbeb58d1d8a9a4a0126e9eb19ca3"
  },
  {
    "url": "assets/js/32.e91b778a.js",
    "revision": "9edbf3d34d998cd29f1e20eb63a81c27"
  },
  {
    "url": "assets/js/320.86803af9.js",
    "revision": "327fb596a4f4578b57321a8093a89c6f"
  },
  {
    "url": "assets/js/321.1a6ab6b6.js",
    "revision": "2bc2e988cabd054b51fcd727a4c1f948"
  },
  {
    "url": "assets/js/322.fcee660f.js",
    "revision": "028b32fd5c95c7bfeb15f0500e570e45"
  },
  {
    "url": "assets/js/323.cf36b90c.js",
    "revision": "cc81544725e565d43a8fafb823e7bf95"
  },
  {
    "url": "assets/js/324.3e3c3b76.js",
    "revision": "c0e7d7c73cd1329a2cc95d59efe404f7"
  },
  {
    "url": "assets/js/325.9772354d.js",
    "revision": "8c04b2a10a90709166ae4f7f93f7ffaa"
  },
  {
    "url": "assets/js/326.1a3780b5.js",
    "revision": "e9a03d006b68cefae441d21b549e14fd"
  },
  {
    "url": "assets/js/327.393fff3b.js",
    "revision": "9ebcc1149c967156d4470ad9e7e3f4de"
  },
  {
    "url": "assets/js/328.292f9bc2.js",
    "revision": "cc42d016d1c2685eebadc9adb3e3192e"
  },
  {
    "url": "assets/js/329.5953d3f0.js",
    "revision": "7613cdc6f08091d373478989bda014ac"
  },
  {
    "url": "assets/js/33.8b369180.js",
    "revision": "7584ae2d93b781e9f84c3a8b864d1591"
  },
  {
    "url": "assets/js/330.6ad0b8b5.js",
    "revision": "f694e375a3e8c1f4f49c49d0e738b886"
  },
  {
    "url": "assets/js/331.ddceb218.js",
    "revision": "25f0bc77b31aea9fe769beff67bb3e6d"
  },
  {
    "url": "assets/js/332.4438a264.js",
    "revision": "51e47d129dc71114738a6aee35092051"
  },
  {
    "url": "assets/js/333.05015998.js",
    "revision": "f88f9491e71d283f342bdcd0203cc607"
  },
  {
    "url": "assets/js/334.f338bde5.js",
    "revision": "a3171c3f11d046f58d12a11ae6ebb990"
  },
  {
    "url": "assets/js/335.3e4ccb7e.js",
    "revision": "40936f648cc4bad92fa73b8bc28c5a4a"
  },
  {
    "url": "assets/js/336.b7a5f06c.js",
    "revision": "2e5b70691b9127ee9834736ebd9227b2"
  },
  {
    "url": "assets/js/337.e6a4a80e.js",
    "revision": "39d3cc28f2e6deeddb92f2e3f6f6864a"
  },
  {
    "url": "assets/js/338.1d11f030.js",
    "revision": "819ccc85b5ef279b1da90edbed45566f"
  },
  {
    "url": "assets/js/339.876e65d6.js",
    "revision": "079c104a7bdbc05e49ca63f1ab45dfeb"
  },
  {
    "url": "assets/js/34.378c9966.js",
    "revision": "98fe3aea53d7ec0bf1905d6cfa4c1ba8"
  },
  {
    "url": "assets/js/340.485b263d.js",
    "revision": "c047442444ab726be67149b1868d3bf0"
  },
  {
    "url": "assets/js/341.a72baf6a.js",
    "revision": "2b92e8aba9add77137fd25952568913a"
  },
  {
    "url": "assets/js/342.abcbd945.js",
    "revision": "af7c53adc73bafda334474e3494e27b9"
  },
  {
    "url": "assets/js/343.0c87b964.js",
    "revision": "417355ec62ed36f5787d1414a7223a53"
  },
  {
    "url": "assets/js/344.a59c7559.js",
    "revision": "cbc2c699bfccf4a49034d44df096395e"
  },
  {
    "url": "assets/js/345.4afb49f8.js",
    "revision": "c6e45fa1aaf14e782f7c25f063502aa2"
  },
  {
    "url": "assets/js/346.ec0169a3.js",
    "revision": "fcf3471ac5c42525a2b5a4c62565e440"
  },
  {
    "url": "assets/js/347.525d6dc5.js",
    "revision": "b30ace6a1d08fd1cd86e00ef94e492fb"
  },
  {
    "url": "assets/js/348.24d82a82.js",
    "revision": "a35f9e9934d8371aeb5a04d9c4eed0d3"
  },
  {
    "url": "assets/js/349.b1414c9a.js",
    "revision": "1fe63d04ef240dc1357b9ead61282355"
  },
  {
    "url": "assets/js/35.8cc0f497.js",
    "revision": "f7d7d7a3ebaaa169c59465ca4b59a799"
  },
  {
    "url": "assets/js/350.8661c591.js",
    "revision": "c6139a72bdc3111b4d5ed4d3e6e2c7e4"
  },
  {
    "url": "assets/js/351.2d922383.js",
    "revision": "5ef8c5997ff0df045587a4f482ef1e5e"
  },
  {
    "url": "assets/js/352.a1870415.js",
    "revision": "1fa8637660fe77814b34c6becb24ee31"
  },
  {
    "url": "assets/js/353.a974ddca.js",
    "revision": "665841363b08df0e0d089328352fbcb1"
  },
  {
    "url": "assets/js/354.0f064de8.js",
    "revision": "54e7b8759179cb419b312901548f864f"
  },
  {
    "url": "assets/js/355.3f4c1031.js",
    "revision": "c1eaacc79d64d80572f276e060444ba7"
  },
  {
    "url": "assets/js/356.30f94f69.js",
    "revision": "c9afc36ce7c0b08393b7c50f1d3b7a48"
  },
  {
    "url": "assets/js/357.8402e93b.js",
    "revision": "3812ab90a225d5c607787b7a548ba16c"
  },
  {
    "url": "assets/js/358.9ecf398a.js",
    "revision": "0986b6223d511fb57555dd4809ff9027"
  },
  {
    "url": "assets/js/359.9a376ece.js",
    "revision": "54ab1ded7bba16125dc1f96ee955ea5a"
  },
  {
    "url": "assets/js/36.9d5a3926.js",
    "revision": "5146bd5aadfd729431218af4313d843c"
  },
  {
    "url": "assets/js/360.9380cf2d.js",
    "revision": "add0555eaf5bf36567ef966141db104c"
  },
  {
    "url": "assets/js/361.752e2357.js",
    "revision": "10b5c3a533c0879778215f39f03789fd"
  },
  {
    "url": "assets/js/362.ed4aee43.js",
    "revision": "4237b2b83979b88ca0a7219b4859998f"
  },
  {
    "url": "assets/js/363.e905ec67.js",
    "revision": "9d383e4397d4d29350243881863d2689"
  },
  {
    "url": "assets/js/364.cd6ee957.js",
    "revision": "7723563a3d36313befeae6bdfedc4fd9"
  },
  {
    "url": "assets/js/365.d44fc6f0.js",
    "revision": "954bb2bd3b2a583455497a8188aeb80f"
  },
  {
    "url": "assets/js/366.ce0a6a89.js",
    "revision": "776c2a13db57a3134a140723608e4cc0"
  },
  {
    "url": "assets/js/367.a67233b1.js",
    "revision": "20e8291b5b6470849347efe92d2d0199"
  },
  {
    "url": "assets/js/368.287eb854.js",
    "revision": "019c78813de112bea9fc9a1bfca2db7b"
  },
  {
    "url": "assets/js/369.5b5f1736.js",
    "revision": "daf9d76c19d1628d0ce2338c32842012"
  },
  {
    "url": "assets/js/37.d76848f4.js",
    "revision": "98283fa31c346cfdb31e5baa5d11b847"
  },
  {
    "url": "assets/js/370.5588ef69.js",
    "revision": "602cf831619eab78d372c63ba7b08554"
  },
  {
    "url": "assets/js/371.4df81df1.js",
    "revision": "fa4b1d802ad932997544a001589e5380"
  },
  {
    "url": "assets/js/372.a3b54515.js",
    "revision": "805ecae777f0ed0eb04933f6eedbd747"
  },
  {
    "url": "assets/js/373.014a3fd3.js",
    "revision": "2f05b99c4818efa092f71f6dec97ada1"
  },
  {
    "url": "assets/js/374.d0478ab2.js",
    "revision": "52258684f118b60b53f53b193c36b728"
  },
  {
    "url": "assets/js/375.929b2430.js",
    "revision": "3f4ff029adc1b1dc526bd614e9cfb6ab"
  },
  {
    "url": "assets/js/376.1daee633.js",
    "revision": "f00c985e7e1da3628ea50d58e8e77115"
  },
  {
    "url": "assets/js/377.6c1c3371.js",
    "revision": "08b67eafca17e90235c4773364f80887"
  },
  {
    "url": "assets/js/378.362ea678.js",
    "revision": "ad2086c750f2ec7a4b3bef167bdbdf70"
  },
  {
    "url": "assets/js/379.f6a6c447.js",
    "revision": "5e40a8c2f3d3aafec29059b46a64d8be"
  },
  {
    "url": "assets/js/38.b442a680.js",
    "revision": "0b43297c0ea7877807b57823a7b50fdc"
  },
  {
    "url": "assets/js/380.6b5a0017.js",
    "revision": "e622a36c164e06e5f2953549cca485b4"
  },
  {
    "url": "assets/js/381.36ecca13.js",
    "revision": "4207b32ebf7a25b5ef26f82242324fd3"
  },
  {
    "url": "assets/js/382.3e2a13cc.js",
    "revision": "1d400d10cd6cd44e6ba7a65b4166b8ed"
  },
  {
    "url": "assets/js/383.57130887.js",
    "revision": "f6a78d0e853a8ced1e766207c8af4895"
  },
  {
    "url": "assets/js/384.88c8b121.js",
    "revision": "6e4bc85157154dce7f749ad37b933c22"
  },
  {
    "url": "assets/js/385.fdce5d73.js",
    "revision": "bd8561243ae0f062af913910813ec946"
  },
  {
    "url": "assets/js/386.6c819e36.js",
    "revision": "1cb938b3222539fa36d9a796a5953164"
  },
  {
    "url": "assets/js/387.bf8dd77a.js",
    "revision": "3ba43865fd391998805656975345d52d"
  },
  {
    "url": "assets/js/388.382f7b7f.js",
    "revision": "4b8752bc76e29f60771acd11fb7967c5"
  },
  {
    "url": "assets/js/39.1edb83fa.js",
    "revision": "8b3048c08a46256673a2264b6ed0832e"
  },
  {
    "url": "assets/js/4.a785a0fa.js",
    "revision": "594ac3187f457a50c8133d66d4c63237"
  },
  {
    "url": "assets/js/40.8246a199.js",
    "revision": "70c1496c358abdf7cea3d22bda5d7b5c"
  },
  {
    "url": "assets/js/41.afabdda8.js",
    "revision": "57a88ea24851c48885c37a497acf4dcd"
  },
  {
    "url": "assets/js/42.4794edf1.js",
    "revision": "d9005aa43e1c58855911d8346835bb33"
  },
  {
    "url": "assets/js/43.65637cd6.js",
    "revision": "4e8af7ec343e04a1f4df01b50aee61a9"
  },
  {
    "url": "assets/js/44.1e06f6ba.js",
    "revision": "315ac75c0cee16e7e83b545427c26767"
  },
  {
    "url": "assets/js/45.7694ae18.js",
    "revision": "1a121921a99ef29923d87f03978800ab"
  },
  {
    "url": "assets/js/46.5a7f8b94.js",
    "revision": "0dd61b80ce59b985b71997dca227b330"
  },
  {
    "url": "assets/js/47.0b553e49.js",
    "revision": "a790aa3b896bb65f38066867abf97d4b"
  },
  {
    "url": "assets/js/48.4a97be1c.js",
    "revision": "ea47a923a6960bd577467fb3d0be275c"
  },
  {
    "url": "assets/js/49.36c3418e.js",
    "revision": "2c157ca4158e09e5b276a6c1b906d9e6"
  },
  {
    "url": "assets/js/5.f2e1f10c.js",
    "revision": "8b78a06b2e72a1656321d41cbb4db84b"
  },
  {
    "url": "assets/js/50.23a05ca4.js",
    "revision": "82057b5f363c033952ac06e885022867"
  },
  {
    "url": "assets/js/51.dc6d4b9b.js",
    "revision": "7ac24a29b8c20617500dfb5d2b49fbb6"
  },
  {
    "url": "assets/js/52.b5386852.js",
    "revision": "f390a91f08e7e412768682b31c486baa"
  },
  {
    "url": "assets/js/53.01a3194b.js",
    "revision": "1bbbb4e090d90dd55802cc8be8b474ac"
  },
  {
    "url": "assets/js/54.9a0d2acc.js",
    "revision": "5da69a11f4d48eb52f92adda6c6af967"
  },
  {
    "url": "assets/js/55.958c92a3.js",
    "revision": "d365db61edcb310a0d1d611bfc2fc231"
  },
  {
    "url": "assets/js/56.bd7d71e7.js",
    "revision": "e0b96652c90e1b28714844534072fb3b"
  },
  {
    "url": "assets/js/57.7b7d5b69.js",
    "revision": "d7d352a50d8ddac6cc74ea42ef6f8028"
  },
  {
    "url": "assets/js/58.0a588b16.js",
    "revision": "7e9cc7c29c6444035b19984dfe15a5b9"
  },
  {
    "url": "assets/js/59.ef9dc2cc.js",
    "revision": "92e89ca3da918e5a74785913fdafb90e"
  },
  {
    "url": "assets/js/60.5a1e1370.js",
    "revision": "5f1bace82652b9110b583a2dbeb9f359"
  },
  {
    "url": "assets/js/61.680adcec.js",
    "revision": "2c58e80463ab81b8a0d672cc4871dfd1"
  },
  {
    "url": "assets/js/62.394583bf.js",
    "revision": "9a17c8906f52c395f2a63e245c626757"
  },
  {
    "url": "assets/js/63.7a9be764.js",
    "revision": "b48c751d2eb03697ba80cb854ae22f46"
  },
  {
    "url": "assets/js/64.aa785bf4.js",
    "revision": "ef52ec4674c7b25a9d0625dff7d3d59e"
  },
  {
    "url": "assets/js/65.b1e1243a.js",
    "revision": "2a6babb7b11505eb172add3b5d7c0a70"
  },
  {
    "url": "assets/js/66.02f8f690.js",
    "revision": "ce7e6d4e8e28a06f0fc8560089ca0d5c"
  },
  {
    "url": "assets/js/67.d3f4a1c7.js",
    "revision": "b2d1652717e1873596a60ca559e28f7a"
  },
  {
    "url": "assets/js/68.888cad37.js",
    "revision": "1c641defeec22de3b6c0e3efa5e52d71"
  },
  {
    "url": "assets/js/69.47fe2225.js",
    "revision": "87520c94e98ec99ab0ebf5fad8b5cae9"
  },
  {
    "url": "assets/js/70.9fa2e48f.js",
    "revision": "79cba1afbe2b1332dfd2957cd080a5b8"
  },
  {
    "url": "assets/js/71.d13434bd.js",
    "revision": "326ffd7f79756c65b346ec2e0d847123"
  },
  {
    "url": "assets/js/72.9b28aeab.js",
    "revision": "b264d76daf4ebff3c333c2bdaa03afa7"
  },
  {
    "url": "assets/js/73.df63d6ae.js",
    "revision": "21e24e31d49ec2bf34d3b0ff4c5002e1"
  },
  {
    "url": "assets/js/74.5c9d9bff.js",
    "revision": "71e38fe759b5bcaccf210f0f52e666f2"
  },
  {
    "url": "assets/js/75.e05162e2.js",
    "revision": "c9772350331e8525d6b76b4bb4e10a5d"
  },
  {
    "url": "assets/js/76.1d3bd1c8.js",
    "revision": "2cdc28d5d28972f4b00735792a49a9ff"
  },
  {
    "url": "assets/js/77.db929833.js",
    "revision": "ecd5dcae1ed9b022a237e3f4c73b873c"
  },
  {
    "url": "assets/js/78.95b12bcc.js",
    "revision": "78d135a46975134a04b06970febf6b42"
  },
  {
    "url": "assets/js/79.a2be0ef9.js",
    "revision": "55d4e560f55ac3e392ddfb15976b9a54"
  },
  {
    "url": "assets/js/8.b4309bd5.js",
    "revision": "a2355c2e21a2e27f2df6b468ab1c4a17"
  },
  {
    "url": "assets/js/80.4e4bcdac.js",
    "revision": "9b005ee68a7d9009bfad7495f310c804"
  },
  {
    "url": "assets/js/81.6917055c.js",
    "revision": "20581beed4c73bbb605fa1c6cfedfe18"
  },
  {
    "url": "assets/js/82.ee50c6bb.js",
    "revision": "ae97447f80e9250a8dfa233d7f7a2c3f"
  },
  {
    "url": "assets/js/83.8945817e.js",
    "revision": "2b1957e8ca68ce14f70cc6fbad557ac5"
  },
  {
    "url": "assets/js/84.13083025.js",
    "revision": "8266523bb9054be97cb2cebbb524f341"
  },
  {
    "url": "assets/js/85.a6b3288c.js",
    "revision": "816ca44ec795b8acf03989f7920d5cfe"
  },
  {
    "url": "assets/js/86.5fb06e0c.js",
    "revision": "65ff5bd547f906ec85349cbcaabe9b1c"
  },
  {
    "url": "assets/js/87.fa540d4a.js",
    "revision": "c98280163644770e78f55f15bac593d9"
  },
  {
    "url": "assets/js/88.a45508f2.js",
    "revision": "0e45e47c9eef994f6c2a286f8c0dccfc"
  },
  {
    "url": "assets/js/89.fcdd6d98.js",
    "revision": "109c76e99fe88affbbafa183b3dfbfb6"
  },
  {
    "url": "assets/js/9.e9be1aa6.js",
    "revision": "d165cb925aca333e6ec10908872d0a47"
  },
  {
    "url": "assets/js/90.4ad52457.js",
    "revision": "f09ad1b844678ff9b56e11abf5ea1e05"
  },
  {
    "url": "assets/js/91.a8911fb5.js",
    "revision": "a73d7996ee409f673f78fe7c869f6a72"
  },
  {
    "url": "assets/js/92.f41aa295.js",
    "revision": "8cb6ffbadae78b533f5395e836e40191"
  },
  {
    "url": "assets/js/93.fcedade9.js",
    "revision": "c296afe23f70ac3b5cedc576c90940ed"
  },
  {
    "url": "assets/js/94.c590dcf9.js",
    "revision": "9024472d927bdcc07dc649138fa1c5ba"
  },
  {
    "url": "assets/js/95.c32a11fc.js",
    "revision": "72670cf4d0146b642b4345b9c47ea48f"
  },
  {
    "url": "assets/js/96.3fe24657.js",
    "revision": "fb9efad83dd89311988e596b67ed386f"
  },
  {
    "url": "assets/js/97.fc2e4871.js",
    "revision": "db1de3c1fdba73a8d91d6d82adee98a8"
  },
  {
    "url": "assets/js/98.63c113e9.js",
    "revision": "ecd0f4d51442ecac52605e161b331c40"
  },
  {
    "url": "assets/js/99.8e1e2ad2.js",
    "revision": "1dd8037f628b1721c587c952798eac30"
  },
  {
    "url": "assets/js/app.3d2f0364.js",
    "revision": "408ad64f529ef400eef8f60b4aabd179"
  },
  {
    "url": "assets/js/vendors~docsearch.4c353f60.js",
    "revision": "fba5def1e4c9b6f604ef264a66100a23"
  },
  {
    "url": "index.html",
    "revision": "1852cd8c8349e24b95f8761e1b4e2234"
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
