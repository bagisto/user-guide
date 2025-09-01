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
    "revision": "969b97e5868a12b087e98b1de0e22295"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "2fff4755682bf4fb114e6b3d43ffa59b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "c6866a565409ce097656b8c00ca38c31"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "de0c4696328f88bad216b7d49091c13a"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "61b1d108844f95790c1703265eca439a"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "499dc3099117a43e423b3344dfc0dc58"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "d4aa04563939900e2ae1f1458deb8edd"
  },
  {
    "url": "2.0/b2b-marketplace/supplier microsite.html",
    "revision": "dc397b20f1418fa3b9b54f8e72ace8a9"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "f93f9525268d7c1825c7c9a4f176f543"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "c57a33829a747e6d598f29a2e8e19f95"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "8acfb1ea2295193c4c303e6e77b1e441"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "b434a57d6b8c992b12d9b233a9b7f308"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "e197d7e48572d4c187481eb7abded898"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "47f36331894d0794750859f93eca7916"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "867342cbcddfd6b2f8638f3caf43b499"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "2e249f693e3df1fa5553883f3fa0ef33"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "5d734d9e720ae3e1928b60596fa4b7d5"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "a66221b7e00c65314040978dcf418bb6"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "4789d1c2fd32d269529f812135a8bc39"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "85360f75f615574f7e97f339680ea8da"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "380e0e7e9be2516026f2d9fd7472f4ad"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "357fc5fb84fc4c593cefb7b10d48e063"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "d4316bf372cafb75f9daede5631ebc69"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "0f4eefc03855ca73c049fe2b9009883b"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "723e015f48843d1e24aa539cfeec54c4"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "32d6cfe309eb7028ec628d8d8e28c5a5"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "62490eda2ffc5cccd6ca28876091af1d"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "0f292b8d33ad64551ad19d7ccb382db7"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "eff6e7a9877f54626a36b9c7fc3b425c"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "4bb07116edd1df87a4f043e7793a52e2"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "ab7b6a31d919b371d158e8731c798bd2"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "18b31832ab72ba5bbfc696748fb40ded"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "abf79262dbfd3850f3fb4296eeef4379"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "051d149853c50427ebe1eebe96f39c13"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "67a6eb60d828ad871dc345c17a59799c"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "edb74d095e7d605a0a976bb26cbfc3c9"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "0a0562cfb4bc8dec7912a25e98be2a1d"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "acd82e01bdd205e923c60d1bcdcf7aa9"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "5a8d8d938902ed71e9cdfb1774c43988"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "9274df4308ff76a38763bd7f98aca06d"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "e7cef1a37305b4e3bf5e1667b5bdc4d9"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "38f0ba500338a697de84ce39644d619f"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "3fd2d529d4b5131b07cab56c403b7f86"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "a4565fc2c325431a5c0662df290f9e3c"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "1825224c5a1b21da3b0113f72f060ca7"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "adf87c4acf02b4878a065dae197c85ab"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "1d6f65538e93c5d839c8234eb4946045"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "bf8c9b710652be3961ed4cc0d9ede8d8"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "a3c7808cf2fc4ced679721699da8ace0"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "742ad6dbc658d2f8626c2767d2c388da"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "b2c8fe22b80605b5a83f07ed29228620"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "82a0b9775a56596ea25fb070bf3b73c2"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "2c76b6a6cb2a08a90ed2d6d4fb73df07"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "af4589da5c912411f71a469320f7387c"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "1b72dc80f216f27a44d7eb139c4b38e4"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "443d4c076ceac3356bc63176d972d859"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "6e4addbca9cfe6a104137b333eedaa12"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "c7123a89991d66161c59e488ecdb2066"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "b73746611ab4a53b1385e7ba41414878"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "ef20a106a08c598fbb023f63b87a8cc4"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "6e792fae1a9dc4bb3f5efdd371a56622"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "45bcc58eea2112141b024b9d472c60ee"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "c3a874e0387dfdfda6a2be741db1c260"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "d769fc788f4dc97699e1e891ed84db7f"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "5b00bdc5b29766e8c2b3dd6d85c98ff2"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "23a04302867e5fbf385f526b4b8eedc0"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "21d3532e396a103f92488f49da158e3c"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "22dcd34be96b7975522fe3b88ac53c84"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "38c268497a9600cc065b2c15228cca91"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "c9af24fe2c0c963735a8203b8ad02961"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "29e001b8b08d84292585ce46d74ab8f8"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "021d1eaf59b44651035d36a3f9e31c38"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "a123ef70dd8818648a03388930a8d81f"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "8984161831cc842afe87c2ac4728e9a1"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "b4856a4ad920bc21a0546229f8429676"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "155c4f141703e40bf8f846b220103599"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "8749ce355c667baa9ab6cde46e98352e"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "f7648ec88674d99d796f7caee7d8d49c"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "589220342b16f43520d8f73e22d29564"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "dc6f0a4c9814d45e94b8219770993db7"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "1a1fdaf3dc824affad9ed29e6ef100dd"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "43865654f1611e4b390cb913c87b567f"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "766f84e2d60d0c3acbf2c7135f6e14dc"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "5243a871a94e975682bf1b3d4dd9da91"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "c51f29c5a821add2b130eec558d63d29"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "4bb6e37b25681f528d48db4b2dfb440b"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "276951a25c768f6d0a2f64fee562ad1e"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "c48fc3c4156ecd40437eed97fa9754a7"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "b4146966e684e752f81ce0be02eda5fd"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "66aa1441b7035ed7183e5c9682958a8c"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "97b21390aea949565c11c14077f91805"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "dd0aa7ec960559914cd4988d2c146624"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "9110ae0ec7ef8f895c9d47d54363d4cb"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "ce2419f8bb4944e9802bc539d5cdc98c"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier microsite.html",
    "revision": "05a7daa440d6c7f8d57f67df90357c05"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "5e74adfce8aaea657afdce6a3bdf69d3"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "afa0f8ba757b8ffbe60d1b3e17604eb5"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "e6c09624d834d00c26f9ed7eceeefe28"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "25285e7521484190b01f4d41e704b07b"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "f029f2468de7bffdbb6f59d78664b2c6"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "956682c73aa0a502b84d6888fc771924"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "40c71f609f1ba8893eacf205ffeb7979"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "3ee3e0e7d22c1e51c885f979c2569b39"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "2fc05fd5064cc7be6beeb6882bb8adbc"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "64388fa526d82afd9b832919cd031f57"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "8ad48f5882812d54a37c68b6fb90612b"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "2d60caec8a53fec1730a366059edf5fd"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "e6ad932b0f43600cb427cd25dedcdc13"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "d3a1a17e29273c175d6e9ffd492eb97c"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "e858c04376bab1df4c40f977cbd6f35f"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "3843edf0d23eef3d35cdb7c8c577e5a1"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "94ab02eaca2cdede90fc5023c8635a45"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "30161f48f6f90f9e27502b268674f3c9"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "5d5bf0bfacccb54e39aeec527980a5d0"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "cfcb4b08e8f1dad3b7007e801c88a6a1"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "31cdc75fe2c89db3141340159b67c00f"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "a510f9db02c0fa9947f630d4580b7475"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "901573772fbddf7ddc14da5125772043"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "b85e494f458cde3e191d8293fcefaff4"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "59e7a657447fb50ab58dd0bb170bd8ee"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "ed8976e13c172c05173c24f07f8668a6"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "56c8d52b6e203f3a906fdc729fe78288"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "717039a64390540ea96b613ac8492a14"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "2029eeac78a25da73ee5bb23ae161949"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "7f915850a3c75eb3dfbf2eb684788a07"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "b926e84b0d20b778f95da2a927bb66fd"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "4b00eabe3696976d8f44d30502633df6"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "e1c983c6b55ddffe895fc8afa26bcea2"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "09607ce56c6fed581dbe178b85ab0373"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "f3c1d3dbc763c9223a285e7b5db8b75d"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "7f0d742bcdc6e1391ffe0ff93d153a02"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "96663745cb204e126beb07227ccebf40"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "2b22f3d6a6657675ab7b714ddb9dafa9"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "5651c37b5c06b17e8e78f03faa110d58"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "c50e0e04add51e496027dc848b682d6c"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "d425639b731378eb6c157f38e554413e"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "33a5bc8801df49eccbb01d7a53c5b289"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "e96563c99952b77578d2625261615583"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "ebf0704653ee1512b774ad80ef760e58"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "0658e60e2aabb433cdaf5cd362acdc0c"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "3d51da27776e1586ff29db4024b5c30a"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "cdfe9560a876ebcaaef8c5888f81d5f1"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "63fc379fd2f7e35413ae55ffe2d39ff8"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "a372c7f9167ee25930b9d0746615e1a4"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "d9aeb90fbb6b62a8b10cd55bb2a3e3c7"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "ff18e1796f2c9cc15f9ca3e3f6c85a69"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "f14f1e450096300e3809eb1989339b00"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "f57eca4775ccf3fe804baaf02692b52a"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "6af821f7c51ef47bc9b31fe53f927898"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "29b3867087991cf76f07ca7b1e874e4d"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "d6d56a7706aeda00be3a45cd037a95fc"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "e7b82478ef99934cf3be5fa597e59d5e"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "403654f82366e8306f6a1094769fbc16"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "c97510447e1f9fb4c15aa7731a00ea9b"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "a636de586e0694b16aae5dbeb98458bb"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "d53e9bd3eb5f420a61089b34a0d5396d"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "2c00354c26bf698fc2350c8bf0b831ff"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "ff7ccc974c4af54e0d4e4c569dec4907"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "c26e5b6856d2b84d12a4c1b9480c4258"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "a7a076d63523b88ab2ae64f1f5436418"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "2493acc4bb08df079bc1962747a74ed9"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "ce67a7b97f3921919262e28e37454a96"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "28e6242adf3660df0def5bc08b856893"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "d436dc74963ffb84c6206e211dc4adc3"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "ce91346391f81fcd0f7ddac3ff0322e9"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "6a01ca4693a706f3948dd103e24270fe"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "931f5b44c24cc3f3fc1bec08eba5a93b"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "dec746003b56a058bcf3731ddc4f12d3"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "6aad894a30078fe01a841776f2072373"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "ce712e0a1fdf4e34716d66c3f49b53a7"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "b888757d5e5e5a114bb9b58144fcee3e"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "4c2c4034421ec465805bf54415c6621d"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "6ea563e45a0bd3b55d08a4e8a799ed44"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "e8150c33e8cd6b009c7322e8ca854bbe"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "ebd961c6557de53587038b142a03c536"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "3b04ae8742403a12a7872129629f243b"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "eb0a8f1bb85c20a2142568a77aa786f1"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "ef7f97e5e35e6ee18894761d3edef0b1"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "17f36011f636423aa19d3832b59d95c5"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "4968b738c0128389b980087de4d75b0f"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "8c13ed782e29c7f3655fa11df044b906"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "b6d7d1612bf31a060ee94b9028140faa"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "1aff6c911bc4b528685207872c331a13"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "1fad48030ab4c13e4392cd5b8b651b0b"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "80b0dc232e96977bad967623ac2dc3f0"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier microsite.html",
    "revision": "4fdaf8f11a1e08d10bd6536f0f0a6867"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "31db28b388e6219551fcee245eca14c3"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "2e00099f912b5ba6a35acb650c6c05b6"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "73575e023cdf429b1c1871c322a9ef66"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "7bc703ed2f18c1ae2266513fbf4bf478"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "98b3f0001ac51529c88ea6cf011e5144"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "2843c9bfce88c3be65a9c605e40e5be6"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "aeae95f5b0dfb49a9a916e6873497615"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "4eb46bb2f17aa458fef31de408f6fffc"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "77434f7589e1559755271ae674615f17"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "265544186fca03b8f3aabc2802d7e624"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "16ec8ee30076f7474301e70bf10d3dfe"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "b89454a26a27806a4b3fea55ff262752"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "d8167edf9015e22cbba5acfacdb08792"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "ac86bfc1a3cb04db76df0a2b44f15a78"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "62ef68c5fffc84021033ce704246b096"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "6f7d18fbd82290d5d36859d4b3ddf1a5"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "29aa49feeae37b98bd931f2150ed2ece"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "009c72087d4fe9e38a1d797dca8ed8f4"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "89b0cd8bee696bb0a6a72b2193659d9e"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "81b19786851461e6786740fdf33d1b35"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "5705be893dd1107b1f17d3d2e5ffc42e"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "4cae68ba07a4537a666091f4701f9265"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "993d983fe2d7a03d58742d8fcd1d30f1"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "d25e7e0f046f198c9deb114d24667585"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "522c89900a11c2b44c8f54f3273e0aac"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "1e4392eba505a4d42c001fee8bdbd4c8"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "0fe99b84dbf461e41dc029d637df71f6"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "d3cc24bb5a397bc56398ee9dfe76f06c"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "766e574798bd533737b1e28425cd979a"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "1deb6b1bb33ea4bead3602c161e3fdc8"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "604f3447be3c3e102fc07a330ccb540b"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "00d9309ec840307142b27305da2c6f5c"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "b50c94a5b0917cf56ec827850290125c"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "2de1576e59f1320a16101d2c864a1245"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "e2a46998fa93d0af5b36d569f24f6b9f"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "a09d870d8a6069bb575a20bb2b7e35fb"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "02cb1895b3fbbd1ad6c47992fd46ffc2"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "b5bbf4fce75923d037fed50a48dd7244"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "f4cb36df240529100e423a26e3876100"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "d0c26183f941ea7c7a3c967ea2b37f19"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "0d6e585fd81ba6025fa3c08af628aa76"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "d3fbc7a7faa6dd6a4c273a1003d5fc03"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "7dd1dc4124e527c7bee1840635b2a15f"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "330b3c0dd9d9f86bbc6e97f106453fb4"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "035023404beac3e06bd1b98e895ceb19"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "3932a1fac9f497e6c163ad5f6dc3c3b4"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "7f32a2addf557161c1fbb84901fa59a7"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "7d4544e75ead350543e0c315ded14341"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "017f1002bbc1cb1f1c4dcd5148b01254"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "29778c0db37255a71901f200380c21f5"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "a176ec33fc29f5c915e2874f3ecedd60"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "65a3db7a5ab180ecac845a192c025375"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "b4d6a60844d399827349749549674710"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "101b08d8c45f3dce824719b26e106579"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "bf0402e71d0dc1974fbfa821fe683016"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "88854728fa1281bfc338ea41853f3e39"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "d597b4a2bb9ef71e32835e7ebb6a06ae"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "6c2400b38599b6896c62e432a5ac6fb9"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "fc0d533fd5af7c5bdc62c0f5956f3fe0"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "fe4705a8f170f900b615498a3072bcfe"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "70319363de57ffe1d09d55a771341480"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "01f66fca3ac852586037c22fe89dad1c"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "8848f62f6ce4437ade88b7bae66e442d"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "0f57f34a3bb3af3a74187a600cbc35da"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "e2a2d2acb867d66ed5a0093d141ebeb0"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "733207753fc2d765687ffd3adcb01425"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "6c903b005abe3a05ef9a20d5e392e814"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "01ea78346bd54df1c168fee35c87f86a"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "5f759994d2cd92cc13b0f323bb408ef6"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "5eb274ada0cf98a9298495a90aaafbd6"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "176813a480ec7ba90dc23b411a7c8f5c"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "250a1deb2cd9d3d5cd8214a027cada40"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "b4f5e18347bd2b2f7903aa9d45528f32"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "e172494c6e5b2d5721b00559ea0f35fd"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "c634f57d6213c1764086e79234616035"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "2ebabcf3f41a694275b0b623668c5c35"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "377a48726b0d94887e9c5f42b4d589db"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "0c06a818c0d3535622f0092d5b69e5c2"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "6c575fcc64f3b8069bc1af234f210443"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "20e65048d07ee804a5a652f7544853ba"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "0feb8c82feb44942e18c3b14dba8dff1"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "9cbd6ed4946fe60b9932dcd184255e82"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "8ed0d3dbc658470a41539e02e9199f1f"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "7b0e89a9ea34347a16cef3d45b280dc5"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "0de3a0243e9dd2bbdc48854abb2cfd65"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "801f2f12351bb30c32ad30dc529e4249"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "7cc179f2e7560cce24e92a8a32e0aa04"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "81712a1725611b17002173cd2ded943c"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "9192e294183716a561ae5783331a18ce"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "77be4c23339338707b05ab3ff0a80b03"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "eb2a8b1d18f4edb6712e826f82e46363"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "e283100f94129364fb9e688f9ce0a955"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "68e4e656eb06d72d8d61ae46283d4bf6"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "f4ed5e7265bd8e70f2797a060c585348"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier microsite.html",
    "revision": "e7ccb7b8f046b7256716a5de94653cac"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "e0b7b0e0c6ef75caf12e4cf4dc8678d8"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "e1ed2e9c5cf3383777af19d1e12d8fb2"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "7ec9239afa23870aa22f9840a24db73c"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "5cb842533d2c444401a25c68eef2fa42"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "b9150be50c8972d4ccf73cc1def515b2"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "3579cfffd8c86845cc25abf7d7e6c069"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "0cd7a4bc8f17a9bf4b527ae3e0a3b51f"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "4aa69c509c7084a2b9498e265f25e477"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "b58f9d0eec98302b3869ccbf8ebb6b32"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "689e001b5fc59cd17bd23aa15880d6bd"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "7cbbb19655c4af5d076796d58eb20ac0"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "c1cdc90e0110b1bca9ce8de8b0311de4"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "5b76ac9a0315e643d88b6b119c86f9e6"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "7851501069b57cf97f503b7895634f51"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "eb3afd875fc8b08a06f28d2188d87767"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "29da59461e4c32e4a368574a577ce2b9"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "b849a875fabd6120baa0073a4ef17e84"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "643a85d1d648c3c12244e05ce5e5b53e"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "b74bee432f2cdd7a0e81cce78330a3cd"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "e021bf03b06fe606e8067988dec172a9"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "e32e0141082c94d94a0d0b0520bc9285"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "4958f331d97e1bcebdc9d3b720b666ae"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "d711af9fe1428086ce3309dc6f6ae4da"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "7b25a1ba57d5a3e02c0d51a76268086c"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "eafa494fe988290d9e93c78393d0ad04"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "f2a9b4f26cbe4da20402528bf2f7c8c0"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "f065886d6b3c481c8d24c7ea59d4a231"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "3d9c0dfb0e0277a690968ee133a58dc2"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "1079cb589ea5bf4d34079a035d255765"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "f8ec513ffc961a230f989e8cb51f0cee"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "188aed94b3e9f3ec2572187016a49994"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "ba17b6de06098551e3866adb70124b81"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "19e1e032fcefbb76cc5bdc73b6462b3e"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "e464d526129cbc76f697e829d9f41eec"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "5ed10c49fee12b740ae037d7f721ec92"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "36523934b50ae1dc4f34dadd90338b71"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "ec132f4b8178f4faa3f92599decfb59f"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "bf9cdf655b75753d19b5b1bb0863980b"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "49b369a93c205f119bb61c7194806b95"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "fb7121def9b731bf75c1d6c6493aa956"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "93bf04331f4e884dc410251dcc33d199"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "8c9a56054551f248832e019439d927c1"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "4d14a599ea971178001b043a487881a1"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "40ae8217359f36328dcfc8d300334322"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "2f4120ca2f0b086d5ca049b4e8ca4c83"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "17d77224fdd5fa2a1cb1d961e41339e1"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "5e618896f851ef32675af03104704832"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "326bb64056cb7478ddd46a2b60b2ddee"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "ffa6a7bd650d77d9ad1330b2f5019f6c"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "8afe0de27954611a10a564c799394991"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "f93212d4d414fe754b37510aea06a2ff"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "8464786321cf0f6125e76360d2844bfd"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "90f9d507db0ef6d38b2a6229ac862c56"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "01775ce5abb77e24137a0c6b2fa0e408"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "cb40d679258e762030abee174d21eb93"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "248dc081085620f54cf9adb477d0b28e"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "e845dea6fd5381923f23be022c65e1d7"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "736a03e6d31ca5e11e693ce98033e18b"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "815773b6dde7f26311f7fb9fdcb6687f"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "a5ceff21d1f78909def285d255231d23"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "6c7f7b225363100bd5b3027376016db8"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "0fbd768de5a9f7e0a749526b8f1a04cd"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "b9b1e752fbfc92455478fea69fbe116b"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "1e1128136ed904e60d8be4bff60a1fd3"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "12af2aa01ea197fe4f15f450f5c9b778"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "802203e23730d1b9718c6ea636f711a0"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "060f0fb2e2e874bf9f58068efd8e97fc"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "3407764dce7f175fddcb3caed0ae8bc7"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "ab7a5343a915597145d9ac869dde9b7b"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "fc6c6f5bc9c206fa10ae04f43c4aa80f"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "a6c19760444761d696aec6341ef6528a"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "f417279e1c09b6ca34cfac698b5d5de4"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "859791fc8e4c3ad9ffa6ea304fb1b10d"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "a581ce181352596b46e00899ed2262de"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "66329ab2d69531f386f08b808f712c9a"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "6a7b61d41915b580742480e5efaf74a5"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "9d510ef5d0a08fb69ec80dc19cb36dee"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "ce68ef88db3fc34e2c95844712d7ebc8"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "bb19911c7addcd50f948f90104ae3be2"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "b66c3ae2030eb304cb0fc5146593b2e6"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "ffa914566a7d96e2119420b347dc1adc"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "2d4fcfead23b9d4842bb892d41c0429b"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "51e145b2df9181bfa3821f38ceb4425c"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "97f318132b848b0c45eb1aadce6cd236"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "20d6b310f3b6768078f248ee650de006"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "8da6d7d92f3fc8d688fe353936af9936"
  },
  {
    "url": "404.html",
    "revision": "75c41f80649bcd04ba142b19f51bf968"
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
    "url": "assets/js/1.4e852106.js",
    "revision": "a0b9abc1f7f06fe1210329d3e88df4be"
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
    "url": "assets/js/103.eb44c855.js",
    "revision": "94db8d8ae2d6a612bd2670a777ede2cf"
  },
  {
    "url": "assets/js/104.70a97578.js",
    "revision": "46ac0658518383f194e6f4545e07c039"
  },
  {
    "url": "assets/js/105.925c2072.js",
    "revision": "f097568659e3763191a3fc8c1e5d0249"
  },
  {
    "url": "assets/js/106.2241ab38.js",
    "revision": "184f6e495cdb1ed5aab178b73deb633f"
  },
  {
    "url": "assets/js/107.10a987a6.js",
    "revision": "650d5239e86a7d22ad74ba38cfe8346d"
  },
  {
    "url": "assets/js/108.5c139eaa.js",
    "revision": "56b4a687a7c86ad0c0185d78284fc5d3"
  },
  {
    "url": "assets/js/109.3fb51887.js",
    "revision": "02e630505cf821f9e68bf9d6b7288a5b"
  },
  {
    "url": "assets/js/11.c3343cfc.js",
    "revision": "e8fc6cec17b6bc009477ee8ed5550668"
  },
  {
    "url": "assets/js/110.f2cbd118.js",
    "revision": "4a04116260908f4356c5a8c4b8bca1cc"
  },
  {
    "url": "assets/js/111.4d3bf56f.js",
    "revision": "89d9db8dad30891f5785ea8676e550c5"
  },
  {
    "url": "assets/js/112.00db092a.js",
    "revision": "663849751f4c89c24ee3967d71594efe"
  },
  {
    "url": "assets/js/113.5d7e1c2e.js",
    "revision": "cd359924389158dbffea493b081e4b43"
  },
  {
    "url": "assets/js/114.447675a9.js",
    "revision": "f3262c3f1d614d740843b9e469a78539"
  },
  {
    "url": "assets/js/115.583abdfd.js",
    "revision": "c52766c0e55b384f0fc944b84e67e228"
  },
  {
    "url": "assets/js/116.dddd746e.js",
    "revision": "a66e5fc3da6ae599deecd3d5248e18a8"
  },
  {
    "url": "assets/js/117.566638cc.js",
    "revision": "7461de54de8b294b635b2ef0e4033750"
  },
  {
    "url": "assets/js/118.91516341.js",
    "revision": "ce0ad729941eced15cc29e5935e4a761"
  },
  {
    "url": "assets/js/119.f23fc5b2.js",
    "revision": "571e2050c5cc10bbe96ccdf8490ca7ef"
  },
  {
    "url": "assets/js/12.74964f99.js",
    "revision": "6696d9809f1532a5ee42acb1c338d56e"
  },
  {
    "url": "assets/js/120.8602eb13.js",
    "revision": "007bd6385a9dda762561630d8ac46bc7"
  },
  {
    "url": "assets/js/121.b29b67b1.js",
    "revision": "2dd4bb368aa9b53aaf9a97f5310370b0"
  },
  {
    "url": "assets/js/122.b48ac749.js",
    "revision": "8466f4174c9258f10d68dcaeefb2675e"
  },
  {
    "url": "assets/js/123.0f24d80d.js",
    "revision": "8459a1b19f236a3278c77313d61fd3a2"
  },
  {
    "url": "assets/js/124.912dbd57.js",
    "revision": "534b84c1c3ceb816659c0c30c582ebda"
  },
  {
    "url": "assets/js/125.d25bcfb4.js",
    "revision": "a4a4712b90e70c8af86a43cc19fb0d17"
  },
  {
    "url": "assets/js/126.69d2a648.js",
    "revision": "b8d5e014f2390e43ec938ad4e1c77b34"
  },
  {
    "url": "assets/js/127.22048e0e.js",
    "revision": "c21d18dcec6c4dd92d301ed9a5b15b49"
  },
  {
    "url": "assets/js/128.01419989.js",
    "revision": "1a9c6f3d35b3e16733e1101a4f730c83"
  },
  {
    "url": "assets/js/129.13a5eb4a.js",
    "revision": "966873a8e5c7e6ad5c8dc13df833777b"
  },
  {
    "url": "assets/js/13.f2f75c91.js",
    "revision": "afc24ad47be4fd3cd3a71eaf2ace94bb"
  },
  {
    "url": "assets/js/130.c6d6cc37.js",
    "revision": "a39dbc18885a444e0922f308fb42dcf5"
  },
  {
    "url": "assets/js/131.cd534ba4.js",
    "revision": "0e2c9e065db84d9527f5b31eecb1ce68"
  },
  {
    "url": "assets/js/132.5e9b0466.js",
    "revision": "9492dcfcce94c01a596ad2e4f4c6f350"
  },
  {
    "url": "assets/js/133.3b0c04de.js",
    "revision": "06bfa98b56338b487f918d24ddfab6a0"
  },
  {
    "url": "assets/js/134.92e68e62.js",
    "revision": "db11f371caa6026991e9f3040a944698"
  },
  {
    "url": "assets/js/135.6e4594e5.js",
    "revision": "33b9891395c71cffbc184cea685bf702"
  },
  {
    "url": "assets/js/136.190911df.js",
    "revision": "2a65512b3f19b78d177602bcd8806bd7"
  },
  {
    "url": "assets/js/137.c8af6e3e.js",
    "revision": "415e75d284cbe23dd132bffe67fd4bf4"
  },
  {
    "url": "assets/js/138.6b55b3c4.js",
    "revision": "7a0e757460b1657acbab817d3483b222"
  },
  {
    "url": "assets/js/139.9b090249.js",
    "revision": "f4a42c890537e922eb9bb0eedb65e6af"
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
    "url": "assets/js/141.1e1c09f6.js",
    "revision": "e9687dc55e62d4b83139a0ff6d4482d0"
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
    "url": "assets/js/147.abfca868.js",
    "revision": "6761221447bef6dcfae42ea917f20259"
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
    "url": "assets/js/150.7bee74e4.js",
    "revision": "f86971be9f64894201e2a854c0e1d841"
  },
  {
    "url": "assets/js/151.3e21a59f.js",
    "revision": "275fedc09741e775d1acec86c450d72d"
  },
  {
    "url": "assets/js/152.a31794c5.js",
    "revision": "9b29416b143fa633907fa70af468c62a"
  },
  {
    "url": "assets/js/153.4ac84c80.js",
    "revision": "b3622889badaaaa8e3abd7ca371f4acd"
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
    "url": "assets/js/157.a4e7802d.js",
    "revision": "8fd6b4beef9f529415eb54d75a89b739"
  },
  {
    "url": "assets/js/158.572d11fc.js",
    "revision": "09efe5466e824ace80fde3ef1fb79714"
  },
  {
    "url": "assets/js/159.ae547fb7.js",
    "revision": "baf9213b20aad04596f1452cd1e6326b"
  },
  {
    "url": "assets/js/16.c0208655.js",
    "revision": "d8a7cf041db7c771016476eeeb3d44d7"
  },
  {
    "url": "assets/js/160.3fb19f86.js",
    "revision": "468d6cb4e083b64e0aa4c92ba18d1d31"
  },
  {
    "url": "assets/js/161.7b56c38b.js",
    "revision": "0d1d61f91effa2b5b3457cac162b6b0b"
  },
  {
    "url": "assets/js/162.19533533.js",
    "revision": "db215d65370c8e00e79f5f2eeb3dc985"
  },
  {
    "url": "assets/js/163.cac2a18f.js",
    "revision": "a6f53590fe8d32c930fb0e77327a2aca"
  },
  {
    "url": "assets/js/164.5827145a.js",
    "revision": "53d15cda9d0143798dfed74a52c1f1df"
  },
  {
    "url": "assets/js/165.0368b0cb.js",
    "revision": "a77889577dbd5c4456a8c0f0a56c605d"
  },
  {
    "url": "assets/js/166.08b90386.js",
    "revision": "cdbc6edbcc1c5b208780ed35ec2625d9"
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
    "url": "assets/js/17.d1f7948f.js",
    "revision": "7a85b7a898bbeea817de949416c13f59"
  },
  {
    "url": "assets/js/170.294629b8.js",
    "revision": "b2920d9678641be305a96c8f9f2823c5"
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
    "url": "assets/js/174.6b9f35f8.js",
    "revision": "baea3ea6f5a5d01b451cb9b242accc25"
  },
  {
    "url": "assets/js/175.f8eb105f.js",
    "revision": "0c0eaedf5c752356ec28b750fd670c79"
  },
  {
    "url": "assets/js/176.cbcd41f9.js",
    "revision": "3fb91ac655413177ce02cdc1553ff61a"
  },
  {
    "url": "assets/js/177.edac005e.js",
    "revision": "1b62dc78d3e04f6ec0f4259c4f51ca10"
  },
  {
    "url": "assets/js/178.2222c471.js",
    "revision": "caeb49f08550586e509ca016b8d74d41"
  },
  {
    "url": "assets/js/179.b2f72e37.js",
    "revision": "a681501b3ebc0ec0ee7c5892f7e53498"
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
    "url": "assets/js/181.0c408028.js",
    "revision": "a39ee2ae878c6aa7b8ab6e2c5e504d4c"
  },
  {
    "url": "assets/js/182.9a6730c5.js",
    "revision": "640a34ca826cee432a367701e34b4e09"
  },
  {
    "url": "assets/js/183.ffafad7a.js",
    "revision": "6bb12cf45ac99b9fc9ce2301a5c5595e"
  },
  {
    "url": "assets/js/184.35247902.js",
    "revision": "168912357b46c62afc6e7359c6c10ab0"
  },
  {
    "url": "assets/js/185.323c8124.js",
    "revision": "66a5f1ee5b49b0fca665c65ff886c994"
  },
  {
    "url": "assets/js/186.0a78b144.js",
    "revision": "8fc1a9f98af9f2d05881dad4fc154724"
  },
  {
    "url": "assets/js/187.1d905ee3.js",
    "revision": "ab714f833861332b3448c1ea5fbab788"
  },
  {
    "url": "assets/js/188.7199b2aa.js",
    "revision": "3e870708382aa38e731a9b236bfa6f71"
  },
  {
    "url": "assets/js/189.fb1d4050.js",
    "revision": "915906f55a500941ab478cff16b205f4"
  },
  {
    "url": "assets/js/19.07cfa5c9.js",
    "revision": "b38308f1dc692d72d98c2f6ea1f35282"
  },
  {
    "url": "assets/js/190.a24a2e51.js",
    "revision": "43929cedbe1d9f811fe23994eb320d57"
  },
  {
    "url": "assets/js/191.fa1e1772.js",
    "revision": "a04cf16b1606eeb98ea172069e922755"
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
    "url": "assets/js/194.5d94e852.js",
    "revision": "0e4fb2379c6a57d32afcba3550f5afb2"
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
    "url": "assets/js/199.c48003d0.js",
    "revision": "c36c1744a426685d3bb246d0fda9ab27"
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
    "url": "assets/js/200.59441382.js",
    "revision": "1f9094e156e8b6da40e86f6a9b9dd6e6"
  },
  {
    "url": "assets/js/201.42484bb2.js",
    "revision": "87241b1a51393394372b23cd215a889b"
  },
  {
    "url": "assets/js/202.d0047765.js",
    "revision": "a84dc4a5d0783a8e5d759aefdcab9d11"
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
    "url": "assets/js/205.11305f33.js",
    "revision": "27e2509dc6b08f116e4ae35477dfdb26"
  },
  {
    "url": "assets/js/206.71353d3d.js",
    "revision": "02ceb40e223d539005ae1eec5298cbd6"
  },
  {
    "url": "assets/js/207.df7bad81.js",
    "revision": "6abaaa78b688d2f675af75cca47e6648"
  },
  {
    "url": "assets/js/208.acf7eb43.js",
    "revision": "8300ceac342300a675bc51fa878ad484"
  },
  {
    "url": "assets/js/209.79c127e9.js",
    "revision": "db34003fd0f9ff8f4ce2af66e5cc16d4"
  },
  {
    "url": "assets/js/21.b4aa7e99.js",
    "revision": "bd3433d2bb4252b85a9dc2181a32771a"
  },
  {
    "url": "assets/js/210.f4000afa.js",
    "revision": "1f93c5161b7df4b96655d9dcd63e9611"
  },
  {
    "url": "assets/js/211.1307f813.js",
    "revision": "713601deae93d6df8f290fc397d27454"
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
    "url": "assets/js/22.ee7f1084.js",
    "revision": "fac615c225b6755c24bcbd34657343f6"
  },
  {
    "url": "assets/js/220.b0852c74.js",
    "revision": "4c803f176602641c470be2ac21520a5e"
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
    "url": "assets/js/223.5599146e.js",
    "revision": "22218ab2ac9c877db1f7e738b0534ee6"
  },
  {
    "url": "assets/js/224.ba065f23.js",
    "revision": "c97a5d10329c34158b4d48d723ebefc6"
  },
  {
    "url": "assets/js/225.685a7835.js",
    "revision": "0178d7799df03b8ac67a409ec857535d"
  },
  {
    "url": "assets/js/226.683c835b.js",
    "revision": "daec16830b6228303bb59e290626aca4"
  },
  {
    "url": "assets/js/227.dbe07625.js",
    "revision": "29bba17b4e4eea7ff369c7de11ee1f99"
  },
  {
    "url": "assets/js/228.3cf3c459.js",
    "revision": "18f8394e2e2f53f846dc16062f39fc4f"
  },
  {
    "url": "assets/js/229.4af88f62.js",
    "revision": "1f7fa2dd4b0f3f27c8341f339b44771c"
  },
  {
    "url": "assets/js/23.1090d515.js",
    "revision": "a553862617f08b128fcf3745c98a15d8"
  },
  {
    "url": "assets/js/230.c14ca397.js",
    "revision": "9df8593faa391c29a954ba7fe9ac271e"
  },
  {
    "url": "assets/js/231.7249067e.js",
    "revision": "a39119fa8edad9e2d86a639e10696480"
  },
  {
    "url": "assets/js/232.3fc08037.js",
    "revision": "deb8601e6fbb30f73d2142da6fbd050d"
  },
  {
    "url": "assets/js/233.c57b7549.js",
    "revision": "c81755654328329d8c1f9b7d2fec4dfc"
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
    "url": "assets/js/236.e019b9a7.js",
    "revision": "428ad5cc7a3b00570bea4d3bfe5c2999"
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
    "url": "assets/js/239.45485dbe.js",
    "revision": "6b7548d17f0c5fab9f54e26f8dab315d"
  },
  {
    "url": "assets/js/24.736bef7e.js",
    "revision": "10b60a52595ce4ebf63d0f68d38e1b66"
  },
  {
    "url": "assets/js/240.4ab3db9a.js",
    "revision": "59edaaf0d15d5a6cc6f0741b19aa8a17"
  },
  {
    "url": "assets/js/241.3f67d1eb.js",
    "revision": "58a79e45faa1d19c0c22dac45b231808"
  },
  {
    "url": "assets/js/242.927ebfd5.js",
    "revision": "ec0016ed97a1efd83bf645e67431920a"
  },
  {
    "url": "assets/js/243.9731dc07.js",
    "revision": "78cb884906693e38846f9068a04bd690"
  },
  {
    "url": "assets/js/244.6dfd6da6.js",
    "revision": "c72720559613ddc449ae26408e3779d4"
  },
  {
    "url": "assets/js/245.526c75d6.js",
    "revision": "d9ab30563c3aae52622c8c53bd37cc69"
  },
  {
    "url": "assets/js/246.0f0015b0.js",
    "revision": "ee404fd963ddcc74c7de839145f52f74"
  },
  {
    "url": "assets/js/247.fd4e6723.js",
    "revision": "ac2a3947c3018b6515757e9d4bd5b59e"
  },
  {
    "url": "assets/js/248.8d999ec0.js",
    "revision": "5c28f8de519e25810fa66637daa29a79"
  },
  {
    "url": "assets/js/249.af7f523e.js",
    "revision": "a43a4ae2d2d073d6bb735698390f50bd"
  },
  {
    "url": "assets/js/25.c889c414.js",
    "revision": "db5f46cbe494ce845a0382320411de8b"
  },
  {
    "url": "assets/js/250.8c285cd7.js",
    "revision": "a1cd95d1439ceec7d9778920d4497e51"
  },
  {
    "url": "assets/js/251.061846ab.js",
    "revision": "b2cae86b06973a36774c5dee68c2c4e6"
  },
  {
    "url": "assets/js/252.1ecb627c.js",
    "revision": "e9c0ca5fadc3a74c688ec01d022bab3c"
  },
  {
    "url": "assets/js/253.1f0b5200.js",
    "revision": "21a5852c33af5d69007d3bdb288bece0"
  },
  {
    "url": "assets/js/254.ee687d0f.js",
    "revision": "16e4887ee05b8b82b27f0080e9ec0e56"
  },
  {
    "url": "assets/js/255.a3bc24da.js",
    "revision": "84c226faa0654c8b5bba10449a32f267"
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
    "url": "assets/js/259.c10ee5ff.js",
    "revision": "e17b2f50080d42709e04143da0aa3a88"
  },
  {
    "url": "assets/js/26.78e49314.js",
    "revision": "ee2e06a10dd62ee5889031308d9e89ce"
  },
  {
    "url": "assets/js/260.1c868d2f.js",
    "revision": "5114f7b458c5f3bd4b0627e1a35cce41"
  },
  {
    "url": "assets/js/261.2d0f1825.js",
    "revision": "56ed183856900551065c2e121deffd95"
  },
  {
    "url": "assets/js/262.cee2fb1a.js",
    "revision": "8ad3db41acc3f2e571d387cd676b43a8"
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
    "url": "assets/js/267.1cb5193c.js",
    "revision": "70a1cee3e360fb82e899c8ec47027e3a"
  },
  {
    "url": "assets/js/268.de5ffa3f.js",
    "revision": "68d6a2a50f1a15c1c5135b2d2e49b246"
  },
  {
    "url": "assets/js/269.dd4d854f.js",
    "revision": "ff6d9c84d1b7e279186b03beb096b736"
  },
  {
    "url": "assets/js/27.02df2e79.js",
    "revision": "8b5f38f6765fb5e966e68c0ba0bd2c13"
  },
  {
    "url": "assets/js/270.2c63c312.js",
    "revision": "6a7a2f8ce27e512c1be7f536784a8a00"
  },
  {
    "url": "assets/js/271.b1555aec.js",
    "revision": "86c7b4739a989d60da4549c4a9fd9db9"
  },
  {
    "url": "assets/js/272.109f1dea.js",
    "revision": "2f2047003c8b2607a61d59aae29bedc3"
  },
  {
    "url": "assets/js/273.b17ecda7.js",
    "revision": "254eb19d0cdc2567014e731e6f2ade50"
  },
  {
    "url": "assets/js/274.67c9aa98.js",
    "revision": "54c8ee7f550fafa103d422772f3f99de"
  },
  {
    "url": "assets/js/275.09448f85.js",
    "revision": "1d682785cf5b0eb4dbe8d2db859bde90"
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
    "url": "assets/js/278.ca69491b.js",
    "revision": "147733f2f0d400dbd0ec151c698a5f7c"
  },
  {
    "url": "assets/js/279.a30d4cce.js",
    "revision": "09b96847d91c04b8d2c2a3b36d71e043"
  },
  {
    "url": "assets/js/28.9a517eda.js",
    "revision": "fb0ddf899d6a579e13beb862f069a19f"
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
    "url": "assets/js/282.a34f0b48.js",
    "revision": "71c78d535b09358007d7aa2905a5e048"
  },
  {
    "url": "assets/js/283.08ceb287.js",
    "revision": "2f6b8515c5e0af8af7b5e727cccdf2ba"
  },
  {
    "url": "assets/js/284.505a7766.js",
    "revision": "f3c10778a457b6add39a091a817b9114"
  },
  {
    "url": "assets/js/285.5df8adef.js",
    "revision": "5defe984cf19924492b7e7dc96f53c63"
  },
  {
    "url": "assets/js/286.e7641298.js",
    "revision": "b2b903893a7bfb542546bad1707950ae"
  },
  {
    "url": "assets/js/287.53b5fb43.js",
    "revision": "e4eb29369b59ed2bae503f415afbc8ad"
  },
  {
    "url": "assets/js/288.ac383231.js",
    "revision": "f46cd57990337da94efa3196c481bcd6"
  },
  {
    "url": "assets/js/289.93d6f6ad.js",
    "revision": "34ab2948436573b4a496fc6879b8b7dd"
  },
  {
    "url": "assets/js/29.a5cbdc46.js",
    "revision": "1c5ff31cbf7ae638b327d31933cdc917"
  },
  {
    "url": "assets/js/290.bf301bb9.js",
    "revision": "b6b4259f1b5617d5efbd7f0f53b839e1"
  },
  {
    "url": "assets/js/291.fd75f438.js",
    "revision": "4ea1844888d2c180ad9143e7f1b9e47d"
  },
  {
    "url": "assets/js/292.d06b8ffc.js",
    "revision": "1f5ed0f7cd20c6b02b170e6770f728b5"
  },
  {
    "url": "assets/js/293.fc79910b.js",
    "revision": "858f3b3d025a40d67886552180ea9e2b"
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
    "url": "assets/js/296.037296fb.js",
    "revision": "0876f893cb3068876adf9bd16398556b"
  },
  {
    "url": "assets/js/297.507e0b5e.js",
    "revision": "a5ffaa790873c6dd2b5fb88981f01187"
  },
  {
    "url": "assets/js/298.f13cbc4b.js",
    "revision": "70bb66a486a37cdd41db8c9213e7c92c"
  },
  {
    "url": "assets/js/299.a5f92316.js",
    "revision": "65b93ae5af1bd4958548c517d8cd245f"
  },
  {
    "url": "assets/js/3.aa6d00b1.js",
    "revision": "02666b912ca760739ad025b9b3424259"
  },
  {
    "url": "assets/js/30.ef4981de.js",
    "revision": "c3bb294279656b5c72547239bbc50daf"
  },
  {
    "url": "assets/js/300.72387a3e.js",
    "revision": "37c662d9bc22a92886e74b211938317e"
  },
  {
    "url": "assets/js/301.ed04bd8e.js",
    "revision": "87372397c23163586f34418bab41fbd5"
  },
  {
    "url": "assets/js/302.f492c3b7.js",
    "revision": "ab62aa8260394c3ca04d98183ee31d7f"
  },
  {
    "url": "assets/js/303.b55af281.js",
    "revision": "1fdbd58b92dc8ea18c0cb443eba1addd"
  },
  {
    "url": "assets/js/304.c688c4ca.js",
    "revision": "7596931e1784dd8f35acbc15d28136ef"
  },
  {
    "url": "assets/js/305.4357128e.js",
    "revision": "385bd5948e6a61761ae5734579b2d21f"
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
    "url": "assets/js/308.1bea2fe8.js",
    "revision": "7f7025fdb6fe4e0e62c8f68780718f7d"
  },
  {
    "url": "assets/js/309.6413b6f6.js",
    "revision": "76a5e4192dfb04558272c00e958a11ca"
  },
  {
    "url": "assets/js/31.00901f69.js",
    "revision": "195b7297948b95c057f344ffec8826c3"
  },
  {
    "url": "assets/js/310.54ebe340.js",
    "revision": "379724b2817bbeeddc06dbd4024e40eb"
  },
  {
    "url": "assets/js/311.9c9cf278.js",
    "revision": "502c00e5ea9514cb37f30c7024a874f7"
  },
  {
    "url": "assets/js/312.ca4398cf.js",
    "revision": "6cef4cd97002f6d2a6ae7aecce6a01e1"
  },
  {
    "url": "assets/js/313.bf99a564.js",
    "revision": "0384d91cad1f9cc5280e1278e1b17574"
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
    "url": "assets/js/316.c811e32a.js",
    "revision": "fada3569d14d76dc2a612faef91ef77a"
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
    "url": "assets/js/319.6fd2bcfe.js",
    "revision": "9eaacacc39b13903e0caf8e6deb8e608"
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
    "url": "assets/js/322.a5f2e56d.js",
    "revision": "aac4ff83617ee02ce0f1112658b13fe5"
  },
  {
    "url": "assets/js/323.84ccd22f.js",
    "revision": "a9c59b82ee114bc5e0040f523d2827ae"
  },
  {
    "url": "assets/js/324.1e7405c6.js",
    "revision": "be00a4aa4f46009bca49acb43195cc77"
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
    "url": "assets/js/328.0347c9cb.js",
    "revision": "aed8e72b8916518e0b09f42befa7fed4"
  },
  {
    "url": "assets/js/329.5953d3f0.js",
    "revision": "7613cdc6f08091d373478989bda014ac"
  },
  {
    "url": "assets/js/33.6889cdb8.js",
    "revision": "6cd0e5cc9830db7b51c71dc06a335958"
  },
  {
    "url": "assets/js/330.6ad0b8b5.js",
    "revision": "f694e375a3e8c1f4f49c49d0e738b886"
  },
  {
    "url": "assets/js/331.73b15061.js",
    "revision": "081429fde36b4649615171f5132e780a"
  },
  {
    "url": "assets/js/332.bea54607.js",
    "revision": "b284599839cc904f3ca21668a0505765"
  },
  {
    "url": "assets/js/333.99aabf7d.js",
    "revision": "1289e5a682da795bc14b3d307801c96a"
  },
  {
    "url": "assets/js/334.4fe21185.js",
    "revision": "a27cc900fd817e3da0122a9559a633cf"
  },
  {
    "url": "assets/js/335.3e4ccb7e.js",
    "revision": "40936f648cc4bad92fa73b8bc28c5a4a"
  },
  {
    "url": "assets/js/336.4b427358.js",
    "revision": "247275df2c6d5e329f628af057f51d39"
  },
  {
    "url": "assets/js/337.59505da3.js",
    "revision": "e6ed597e1b7afd9b06e16adc2a77fa51"
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
    "url": "assets/js/340.b68e105a.js",
    "revision": "849f79ddf2452b5d0fb34afe29e46077"
  },
  {
    "url": "assets/js/341.4e512181.js",
    "revision": "ff2dc24b1a44e52eef0570448e2cea39"
  },
  {
    "url": "assets/js/342.7fa6d12a.js",
    "revision": "30fe1221ff77d1e8896310e7612d9454"
  },
  {
    "url": "assets/js/343.0c87b964.js",
    "revision": "417355ec62ed36f5787d1414a7223a53"
  },
  {
    "url": "assets/js/344.d0cf82df.js",
    "revision": "850ec0423a470a7fb0922bc5947746f3"
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
    "url": "assets/js/347.858ad64a.js",
    "revision": "b697c2946c92a3f69598a394de60d679"
  },
  {
    "url": "assets/js/348.d8a81e84.js",
    "revision": "3b706086b9af370c1a5b7b8a3a915689"
  },
  {
    "url": "assets/js/349.ff11ee91.js",
    "revision": "15c388aad0a8c1ef272f383786cc167e"
  },
  {
    "url": "assets/js/35.8cc0f497.js",
    "revision": "f7d7d7a3ebaaa169c59465ca4b59a799"
  },
  {
    "url": "assets/js/350.8add06bc.js",
    "revision": "3f1bb25350f7ca2004677601a4adb542"
  },
  {
    "url": "assets/js/351.ba60ab3e.js",
    "revision": "9cf09f15b1b4767b81bc47e39e2ef3e5"
  },
  {
    "url": "assets/js/352.a1870415.js",
    "revision": "1fa8637660fe77814b34c6becb24ee31"
  },
  {
    "url": "assets/js/353.a89821f9.js",
    "revision": "2b0b746e7707f4b01200968ba182f7c5"
  },
  {
    "url": "assets/js/354.18337612.js",
    "revision": "62725463fad1ea451210fbebc5056c58"
  },
  {
    "url": "assets/js/355.6eb73dc2.js",
    "revision": "ccd60ea7d5696cf2de23760869ca2598"
  },
  {
    "url": "assets/js/356.4b4247ff.js",
    "revision": "e58b8c81c370e8ec85166c1e85ac9f2d"
  },
  {
    "url": "assets/js/357.c6ac71a1.js",
    "revision": "15c3f6e6604d290d5e2301382f0bf1cf"
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
    "url": "assets/js/362.5bf305e1.js",
    "revision": "f6beb1f77156a0cefdbdb7f4425c0ae7"
  },
  {
    "url": "assets/js/363.d32a0278.js",
    "revision": "91ea3031740dab809828386e141ba53a"
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
    "url": "assets/js/366.9723d8ea.js",
    "revision": "8694c2d39e09651e5f043de7c616501b"
  },
  {
    "url": "assets/js/367.5d6c6077.js",
    "revision": "c00b87dfa077be59dbbf3f2ca7ca0dee"
  },
  {
    "url": "assets/js/368.cdba5646.js",
    "revision": "8405be2f71ff42bb3b1a7882603cf690"
  },
  {
    "url": "assets/js/369.96015118.js",
    "revision": "062fde494ac68858dce2c4b83c1247ca"
  },
  {
    "url": "assets/js/37.f90fe620.js",
    "revision": "7b91c233dbe16a5bc102d9443fbfff2a"
  },
  {
    "url": "assets/js/370.e15c2e1f.js",
    "revision": "2e26a36a23e383317c23977f7a2c8adf"
  },
  {
    "url": "assets/js/371.8463de73.js",
    "revision": "d5216cc68700332290fd43f21b70fcbc"
  },
  {
    "url": "assets/js/372.dcad7eb3.js",
    "revision": "b0cd90c18b1a9201e70df2e311ba153e"
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
    "url": "assets/js/377.258cbc71.js",
    "revision": "bcdb4156b91bebae5cbf27a4538b7016"
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
    "url": "assets/js/380.ec47a5ac.js",
    "revision": "dfd01ee2c974cebe6bd308ca1d71f96b"
  },
  {
    "url": "assets/js/381.beacd920.js",
    "revision": "e2562ab7b54bf88a10cde4165c1cfd6d"
  },
  {
    "url": "assets/js/382.453334ff.js",
    "revision": "2a82dd5b35a08e22caada81e891bd1ad"
  },
  {
    "url": "assets/js/383.721e554f.js",
    "revision": "060dda8fc664fe58eea21cb0174bb8bf"
  },
  {
    "url": "assets/js/384.d1e4f168.js",
    "revision": "37031aec19ea9d17b0cd978fabff7d14"
  },
  {
    "url": "assets/js/385.13fb5ad5.js",
    "revision": "4a5beee17a5d1ba5770cadefe62b3603"
  },
  {
    "url": "assets/js/386.90973b0b.js",
    "revision": "db45820726b7b20a2d770ff3eb93bf6a"
  },
  {
    "url": "assets/js/387.40c75b73.js",
    "revision": "cfcbb604b87126795846112558051ecb"
  },
  {
    "url": "assets/js/388.382f7b7f.js",
    "revision": "4b8752bc76e29f60771acd11fb7967c5"
  },
  {
    "url": "assets/js/39.7e056819.js",
    "revision": "f69adfc3ef9d6958afb29934d03c849e"
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
    "url": "assets/js/41.007effac.js",
    "revision": "95fb65e77a96d00cced0737bdec204e2"
  },
  {
    "url": "assets/js/42.f5d11c3a.js",
    "revision": "eb482d1ea078eb643828835e80cc8def"
  },
  {
    "url": "assets/js/43.fea67327.js",
    "revision": "1f2cf2407cdb5b43559fae4b9e302125"
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
    "url": "assets/js/47.5541b9aa.js",
    "revision": "237262817b5946f25c089b376327316b"
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
    "url": "assets/js/50.3c3bad2d.js",
    "revision": "69c5a272dd646bfcd7062c5d4a235236"
  },
  {
    "url": "assets/js/51.9869fdc5.js",
    "revision": "504e1293a333135845e9b1430b7707c7"
  },
  {
    "url": "assets/js/52.324b9fcb.js",
    "revision": "a724b2b3e07276585628265797da7855"
  },
  {
    "url": "assets/js/53.83103d58.js",
    "revision": "e6fe77ed4671ae9f9b9ef95a4ce593b0"
  },
  {
    "url": "assets/js/54.ff3e8430.js",
    "revision": "df97d9deb0a07eb42468ab27528a8463"
  },
  {
    "url": "assets/js/55.e035a756.js",
    "revision": "d206bdb8753423314015fdf075849b66"
  },
  {
    "url": "assets/js/56.abb87224.js",
    "revision": "65d904924fecd79b82e03928bd1df102"
  },
  {
    "url": "assets/js/57.cdc4dd77.js",
    "revision": "ec2ade6ec0f395a01387feb0c2a208c0"
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
    "url": "assets/js/61.d2a1acb3.js",
    "revision": "178ec95b834accb3c73aad0c49b316c9"
  },
  {
    "url": "assets/js/62.75258e30.js",
    "revision": "0cbab56d8fa4d5aedd6062d24186250e"
  },
  {
    "url": "assets/js/63.2e7cafc2.js",
    "revision": "304388631545866eb35100b37de0d632"
  },
  {
    "url": "assets/js/64.692a6c4c.js",
    "revision": "232e90c2c2961c3c4191c157a08334e7"
  },
  {
    "url": "assets/js/65.7a4f3e7f.js",
    "revision": "39b04a9e49afae0229fd07a75ea7c065"
  },
  {
    "url": "assets/js/66.7f867fc2.js",
    "revision": "4cf771f9117f2520d7b0faecaeb0f398"
  },
  {
    "url": "assets/js/67.0b7c31ed.js",
    "revision": "f0acbc460150314dbf3280a511c85282"
  },
  {
    "url": "assets/js/68.275a752c.js",
    "revision": "23a1d897aaf66cd7f83bab3b3bfe1d3d"
  },
  {
    "url": "assets/js/69.dc867911.js",
    "revision": "73f782267ae5126183274c7e27b87354"
  },
  {
    "url": "assets/js/70.9fa2e48f.js",
    "revision": "79cba1afbe2b1332dfd2957cd080a5b8"
  },
  {
    "url": "assets/js/71.9658c391.js",
    "revision": "d1eaa95b6a8a99d64c1968b67c9730b8"
  },
  {
    "url": "assets/js/72.a9905380.js",
    "revision": "4f9696d7c2836494ea090d4f0a0c69a5"
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
    "url": "assets/js/75.d2f6ed87.js",
    "revision": "3586f843d252161955059fddb046fc12"
  },
  {
    "url": "assets/js/76.ff5c425a.js",
    "revision": "430783a9279f6b1e626f9c8711901ed8"
  },
  {
    "url": "assets/js/77.4e0839fe.js",
    "revision": "7660f040e6866bffe51d169720a01ea6"
  },
  {
    "url": "assets/js/78.bb5fd47b.js",
    "revision": "d5b9d3affdb2f35b12899d884565a654"
  },
  {
    "url": "assets/js/79.e887b314.js",
    "revision": "9ef53ef885b0702a76828161e4ce98de"
  },
  {
    "url": "assets/js/8.00095d4e.js",
    "revision": "303f17efe5507f183ffec86ec552f4e4"
  },
  {
    "url": "assets/js/80.145e4841.js",
    "revision": "f15615161f4fe39396620025b2e4b940"
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
    "url": "assets/js/83.87bc484a.js",
    "revision": "222fe51cb61b6fa8222a1a0060643dd3"
  },
  {
    "url": "assets/js/84.bd77511e.js",
    "revision": "9b1d9d7257d04b93f1b336107b2a4a3f"
  },
  {
    "url": "assets/js/85.3261ae06.js",
    "revision": "92557916369f5e62941e185a5e4a69a7"
  },
  {
    "url": "assets/js/86.7a7f106e.js",
    "revision": "d2c47c71bc96a3a1e72ce2ddae91f40b"
  },
  {
    "url": "assets/js/87.ac373146.js",
    "revision": "40f6d90c9a007c5da30041f3e3fadad2"
  },
  {
    "url": "assets/js/88.e1bacb4c.js",
    "revision": "905695ace819a97f961a342c306854f8"
  },
  {
    "url": "assets/js/89.fcdd6d98.js",
    "revision": "109c76e99fe88affbbafa183b3dfbfb6"
  },
  {
    "url": "assets/js/9.b9338c9a.js",
    "revision": "c18157159bc5d54ce1cdae08b0c6c429"
  },
  {
    "url": "assets/js/90.d772d20d.js",
    "revision": "418f952b497feb1906658e9391606389"
  },
  {
    "url": "assets/js/91.82cc23a7.js",
    "revision": "5878dc841bdf082e95ddf9eea48fd68a"
  },
  {
    "url": "assets/js/92.f41aa295.js",
    "revision": "8cb6ffbadae78b533f5395e836e40191"
  },
  {
    "url": "assets/js/93.6d0fb1d5.js",
    "revision": "e895d7539ad342673967109d915eb45b"
  },
  {
    "url": "assets/js/94.3bf78ac7.js",
    "revision": "1e1057f3b6f721917cd415e3df40dfbb"
  },
  {
    "url": "assets/js/95.a5173622.js",
    "revision": "0beba4126794bca5e6b1bbcc85369fd7"
  },
  {
    "url": "assets/js/96.3fe24657.js",
    "revision": "fb9efad83dd89311988e596b67ed386f"
  },
  {
    "url": "assets/js/97.31d0a950.js",
    "revision": "561d2d3857957d64351eb3712f7299e0"
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
    "url": "assets/js/app.f8d0a3c0.js",
    "revision": "9217541ee072c2d57c25cb7ebc8b30c7"
  },
  {
    "url": "assets/js/vendors~docsearch.4c353f60.js",
    "revision": "fba5def1e4c9b6f604ef264a66100a23"
  },
  {
    "url": "index.html",
    "revision": "489bba4943b8e1032bb8dd2b43cb455e"
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
