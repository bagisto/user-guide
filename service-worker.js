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
    "revision": "2db9fbd4111fc361efcf406904d7b33b"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "83ed720ad8170766da40db68645b9f17"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "149e001b4e6b8dc5f9ce837dc141e746"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "70644e9a2cb17a76b97bd0bb5f094d6d"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "89ee9f55e0dc1b67515dbe547f1e0176"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "f515e9a90e60480c3476f9c37f84b6b5"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "9eb5617f51cff603786e8f180ff1af8c"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "1866c3a087c54e6bfafc0ac000ba66e7"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "2c18335646af41d58f512934bf43d65b"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "fb43ca7b371e66323e0c0fb1d00a42bd"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "f56551a5e4db6e5cfd5924ce3a63bfbc"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "b9b887412a9989e850b04a64805f98dd"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "414d13b9133bf21314cdef7edebf540f"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "95c11c7a611d69a090c905838433f6d0"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "26c224fb6624644e230ce10fbadb137c"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "dbc5625480e1ce85963c82955337c7e4"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "ebdd12161648287ddd58a4f5a9d85171"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "5a09526d6dcdb2b426200697d55c87e1"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "8eca59257add0c3de1bbf98a8c9edb3d"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "fa6852fe1df8b1c928a3abc69970bcf2"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "952c7ba484ffdaa7eb8b3ca616ac5737"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "b9213200b85862559b22747f454a6681"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "d5c4b682e52f3d1256e3c3b67bac27f6"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "9e0c3a2060b9c4f3222efd18ad8f501a"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "68d792645647d1d2537eba13226a1281"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "7912c2d981f9b8b2db327cecf0a947cb"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "0926c54222ddb27432b002d886e827ef"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "524a195e72f117782710586b37177439"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "6bbcfad9e3e9c09482be7be2de9fd01a"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "f8363dc5f695991eb9a2fb549ebec6b1"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "213ba73627bc0ac262b5b5b149b02fc6"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "26b7976708889ecc4134389a6b652f8c"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "52dfc215622baf1944e430417cfbf1e9"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "572f480283dcada6f06ef652a539a839"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "f183fc6f6b7f3879e1b5d749a828fa28"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "cfe945953143d0e0c0ba4c76843d54dc"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "139968c001fe1d765e7eeaaca84315b1"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "b2f1984e4c92fd0c204b5b27b2b3a034"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "494ad9d92a6b327e7a9b6370975af710"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "e9ee68f27c5092bf0cedae7b185d6b72"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "a7adf674724531cc270478aed826661d"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "3edb4314b332b99095cc9fcd2bff5454"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "8c17d4a0ff3cf38dd12c029234b0d0ab"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "f13507319732588ebc37fc15714f81fb"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "ce89bce4622ac81602ff59e621c0423f"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "371e2bbecb5e075244be02d9645bc06c"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "33e7f82f1cdf7098edd0e3107ab28383"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "12ee21b6404257d04fb0cc1018cfa1b8"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "5a0d5fe7f96c1908ad545fa0dac91303"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "48177269706552e525121dad5296c6e1"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "e30758a53e2f7f584e8f18fe70d3aa40"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "410fa262ec69c5a9d978ce34edb69a44"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "e99effc6ef0107ea4ad487ae41ee7c63"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "8fc83e4aab712519af82217d636c2dcc"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "de273268aab8a2f69ed3a7dc468941f0"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "830e612aa9f949df148aedeef0bf6e4b"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "5ffb37e0fa0be6a80517926c74188e0a"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "b2a7c9b183acc097f83def810f7110f7"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "9455ffecf6a20bee903af52cad8420b8"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "39db2d92fc2dd271959148be308d14b2"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "cc332b2167a8d5f988920484d7d9b934"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "ae3830a91bdd63bfc87b22acc81bbc23"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "5588d58322a7fa14fbecbf3920b7dc49"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "2a3b367af7f4c4d1a9b6b8a82263437c"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "bc515ddabdd440904201c157a01d02bc"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "c7e56f2e0470793fb489d5130fec59dc"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "f858440ea17cac056518b32fb97936c6"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "2e7ecc85347de2d3f41f066f175b538e"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "fc42a46bac83349665682ba2c937ec7e"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "106c985f4205097a868b5a821e1c7f76"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "15865bd1cdf42ca95889f9fb794e84d5"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "ab889368a5cd70dc41c0ce4b132654be"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "233faf12f24b0bbc21c1aa167ce74588"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "e42a960f70f25542a2dddd2e23423deb"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "05ef099c3bf7e7489dcd293de5262972"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "ade13ac8153c0f7068a9096c4e0438c5"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "34f7c9f265bc30fbfb9514efd68db98b"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "83304e9e49f4355ad9b567c0da880482"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "c355f8dbd8c9551b05735700032e9c6f"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "4585cade5df580bb35c0039704227ed3"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "7f0289ef211f1a8c5854aa4d9da82444"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "9abcedef6bc3fbfb7efc513a29251f48"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "87b456bd33eac3f40e24813d6ca26101"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "64eb6e7d8c42eb8b29e4e734e5e481fa"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "899849b4e9e544664f3075668fbebb7f"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "44ddba3a3ebcfbc0629296ba67582b62"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "50543870ecf75dcf87cb14a2545b7a4b"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "e6c6c24fa8022238655012b3cd14425b"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "dbc166967cbdbd92101a0bd7d6ce54c7"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "95046db0f518832cf59eb8c5360d7644"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "eebd3008ffbf6884710e5c33a809b1fb"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "5d325de280355c7756903796f1891d52"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "8ac13545be533ffc9711c6010154d66d"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "52553c89b6633b14de24f03dc3dfa89a"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "ce39dbada2046ea7ad6ff9b7a88be5ee"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "9d07f8cd5495d3be619d698daf7193ec"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "4f8b604f0d1cb61c09e622254d88a534"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "bc4b5f211dc24024c72cd92abf1030ed"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "607cd777ece433d4c47f17b890f9d6fa"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "6d775bbf518df55cfc1183678cb9682e"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "17c48695817e2b17fd40057c935998bf"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "2a8e83e14883f171d70b776f047ea78d"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "4e3adafa282972f244138c379b4219a6"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "3b42c8b88f41d3a12836e67ae8ff15ed"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "984d9a2584ca952ae481ff6d5840ee85"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "508bf999ad3b1cebc192dfe81c706894"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "a004324b93f3f488c68c05c508c0a035"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "9fd5cd4266e3c82f46743ba2e9103988"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "33cf2fc6526f0dbb248d9667a9864f4e"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "00e9b8c7f363481d0ac4d6db87ad9801"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "561424abbb606870bb2689b1b93cfdaa"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "8ae7984ae5898e7c94d55f625eae6f17"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "bdfe48bbb943df4b268f99f23a1b8c6a"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "9a7bb8883959cbf642a5d32f2319257a"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "87a898b4ac00832ac607a57a3da83395"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "202b21a8b1c3b274bbffd0788679f882"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "88bd52348cb6ee1aab1f6abff1bfcd09"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "66eed32245c04aec12166be6dc927c19"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "8e5653798a7f2d65d844153be7ec5ec6"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "4ab9f0b397595c549b5cb2ee6d293dd1"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "b685efc714fd51a0c4135f80c272f756"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "25118099c7f20c55799504c692e3b20d"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "973ad601f394c95e69b1862b8b3e8331"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "886af0419de7adaaf98aaf45703d7056"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "e114479e445a9933bd0c84f7df3a0dff"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "09a2a8f8070ea14f89d1e09f0b98c05d"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "1d5abca33dbddcd72e7326b81395bd30"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "5a28e98c07c7c3211821a9cdbc1156d3"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "8255cb1c8286944d0c4d4da1853b0000"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "21f4c944e249dc7b51629e1fa5235198"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "8ccbdc46cf1beaa7a394a01bcd6bcea2"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "2c1ec9aa77306ff1ea7b0c1c1e37bcf7"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "bce7a3790c50a31e4ae3362404337589"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "6b44a661977e96a0d7f7e7b97b31344d"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "55f0c7765914646772da38fb399d3c83"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "0f4e9002c2429493b82d97de1d98a53b"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "b2402be1ee9d6d7b879e56a7658ccb5d"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "01ba19814af0a11b37b4617deb5ce43e"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "0fe9ff5f996c02619c9892a779add5fe"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "5fe059d25085667b29a8275d35886bfb"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "2cfbd99b2a332e250a25ec7e7e1f7ab7"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "898895b08f1a8fd546c5e111e511e9a4"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "90f6a79cd0dbdcc8f1fdde313b7a6119"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "9dc0cff722337f91d679b0b295f15b4e"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "d9b07778d43f97a2c494565b46553213"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "5a3e2f23b359ef4aeae95548468bf537"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "dc96b602d7f138cc1eda8560d5815d67"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "ce8ebc4a004eadc3c8f5b80e4d4bb27d"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "5016c103939835721d4c91979ef1e9f4"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "b577bac03c01f6d3941dc9728867165e"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "c5b58fcf721296ef1bdab54cf6f7035d"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "0cac1039e83f216d767951dd3ef5dd37"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "dde6e2b9df635c9fe6c9f42390fa3460"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "bc77d020c22bb66e03efa9decc8d6d66"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "d1cded29748694fb06d2a08ba4eed10e"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "25a62d278b72b3bd0fed428ed905d1e4"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "2231bc16e0a66a24567af43d56e2c4b9"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "6ff6830cf657c80f4afd92a077e24cc1"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "843411bc9858d7bc8df6d2354f2d1fe7"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "f1632f397d77f0bd214a6ad0c29106cc"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "4942392b0bf6eee91b6033cb5c876920"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "1aaaa09c55f0ae0274152e9bf3a215dc"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "0d25a9ea24a40fb91d672339f1a5aa37"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "f91dbd198ac5b2fbfa2b9b0c3f8f77cc"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "503ceabe1f46cfa9bd76a3155ee1ecfd"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "dc9807f1f89e8bdb22f08d4b45289ffa"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "9eaae01d2b2721906fea59f58b455111"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "1520545a423d072407cf7282accd810d"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "b594ef52234f7c00305fbb36b87af889"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "92e413bd8bd7764cc1a281c25f8276ab"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "b45ec74ad39ade00e236f2b24a7e17d0"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "8f59be8c107eb8504d88d8a6c8fc8180"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "44c0ba8fcbc0ab6d025ac35f29b5734a"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "4ccf183d5b4e899ac660ac03a180aff3"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "c400324b9353c266048b43cadc16bc87"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "c8c38b8f621620bff897a8449f890c10"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "b3b7d0f3d112fa4ee8252b90f0ce6a57"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "4c8fc46bfaa5c73c577e46923a5ae40b"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "f5f9d28b6f0dfbddf1fa023fc1420f2f"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "878bebe5bd837f153703078eeb82eac1"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "a2108bb57e1833fd32417641e4a1f1dd"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "ea1b738f423f4c237e52031687eec250"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "e3efd733077cd4ba4e8ad29c3bbadaf4"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "5f34970d252ffa1016e45b73950ec8b7"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "579000bf88f7d98183092e8a5823603c"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "d9b42dc0373e326501acf069f97c1bca"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "9229484ba128c95f335d1a9bde380207"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "21a09cdb9b6146f60876b0a2f4513741"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "7491358fe256d3b1fa01c2e4032ecac2"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "9cee55c477e73f08d7e6339cba3510f7"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "564a954984403c5af2e34448a96e50d3"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "a8d73b7361c2b09cbac54c544eab4d1d"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "467d5aadc9242795a826a4ffc5a05930"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "2ed4a910157ff03874390082ed251781"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "9af590fa6638e43c25b03e058737cc4a"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "4c309dbb92caf670fa6171f61c645d28"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "59445f0dbd790d921fb87dbf9a60325d"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "78ed53c17a65ac4ace06bcc55e0464c8"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "f4bd9710f0aff93b4ec0c9ae4e16bb7a"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "f31085d48348919d938959822d5e2b56"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "70d1b24ab261323663503bb6ec23ddef"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "49ab9b53a7e8fc29db20bf7545fc3cce"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "fa58449348b26d0d18fa41d3ab46d192"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "9453cca9c1acd4333538f635d19f1ced"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "db69944789640a14cbe2988129b5e872"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "70cd3c657589b8a21fc8349d4dba40ed"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "d6c67827e04d77efa98d5642530de1e7"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "232a860111005a73ca0f2b6c8b81f8ed"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "99da6b9418b41b58d863a3dffbfc1c3a"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "9923d4a71c1532a804d448b102450a45"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "83b957c0a30e00e9f516d0f17759fd3d"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "d3f5516f20e0bd8269cc2333649d5e6e"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "ad1c2e90e3720a09d45d0c092e3b90a6"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "528f9993e524661e899ea098927df692"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "8884f574959904862690da35ef5dd364"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "57a0f44e05bea1286cec5930322af46e"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "032139eb35a38b816302cdb53013194c"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "deb8c91194c371c6a88a56f1b6549bee"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "5e398be5bc10361a6992884c96c39c31"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "4b8b2f291baf3c2c5dc668eeb5bc97ee"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "540e3ff33e60eb09a909586b4886c0ca"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "2c0cb5650dbaf0f8fe4e828ae4fedcdc"
  },
  {
    "url": "404.html",
    "revision": "8a2017ffc9faa907e5882037198efe63"
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
    "url": "assets/img/products.3865c39b.png",
    "revision": "3865c39b4ef983793361bb01e55b8403"
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
    "url": "assets/js/1.52a81595.js",
    "revision": "a616621b5798ed233e32fff67a927ed0"
  },
  {
    "url": "assets/js/10.531cdbac.js",
    "revision": "e06a5a04890971f113e41c27a64c5f53"
  },
  {
    "url": "assets/js/100.f609edbd.js",
    "revision": "325d30260be07d23f3898655dbc58d56"
  },
  {
    "url": "assets/js/101.5c3ae9ff.js",
    "revision": "0346210445a26d8aaffef16970ad33d7"
  },
  {
    "url": "assets/js/102.cdafa122.js",
    "revision": "845654bb36d5c60c4eaccc4b45e69232"
  },
  {
    "url": "assets/js/103.58143643.js",
    "revision": "d4f12a2e5ae3f9e3b22529de8220fe9b"
  },
  {
    "url": "assets/js/104.aba7af24.js",
    "revision": "bf8ab822d3b68d43e401adbd59cd40c7"
  },
  {
    "url": "assets/js/105.4dc93c64.js",
    "revision": "6a78cbddea97cce8e7ca86d1f3e96b66"
  },
  {
    "url": "assets/js/106.8b911636.js",
    "revision": "2a9d01af0e096ce3614c74a43e9c6ee6"
  },
  {
    "url": "assets/js/107.4d128df4.js",
    "revision": "67ea1860844e90dc31765b5906876911"
  },
  {
    "url": "assets/js/108.3b4944cf.js",
    "revision": "0859358fa4e23281f7a1d3e991e991a3"
  },
  {
    "url": "assets/js/109.0003ea84.js",
    "revision": "fa3b20b6a3c849233b06d65d009b50b4"
  },
  {
    "url": "assets/js/11.3e5db40d.js",
    "revision": "b1b02fe9f07f754a0a58ac026c0616f1"
  },
  {
    "url": "assets/js/110.c742f5f3.js",
    "revision": "774eb95f20770718fc647f0cd85f8d20"
  },
  {
    "url": "assets/js/111.46fc8873.js",
    "revision": "b19de179cf9fe9b0292657bff7e52e2e"
  },
  {
    "url": "assets/js/112.747656a4.js",
    "revision": "fa7e59e91d2c97e132dc9cfb00200a10"
  },
  {
    "url": "assets/js/113.3245f15c.js",
    "revision": "15431abdfd3f1a08d44c5c8608f81a50"
  },
  {
    "url": "assets/js/114.15a4cb15.js",
    "revision": "b46017dfd4dd3399a56f11c03dd54e17"
  },
  {
    "url": "assets/js/115.d4085a29.js",
    "revision": "d679062fab9ed0006a31a44ac63c0a5c"
  },
  {
    "url": "assets/js/116.7f3f637b.js",
    "revision": "d08bc72c0de162f1092b8be012d17553"
  },
  {
    "url": "assets/js/117.3acbe4ab.js",
    "revision": "e81856c6e05e3e5ba2c67bf7ac11c756"
  },
  {
    "url": "assets/js/118.abf261f4.js",
    "revision": "bd535d357f551a0adb104a066d848eea"
  },
  {
    "url": "assets/js/119.6fb3faa0.js",
    "revision": "ade2182a1d7f808e3f28357e5af4e14b"
  },
  {
    "url": "assets/js/12.8e42bfa7.js",
    "revision": "2b556c7adeadbb48d55c476a23c99250"
  },
  {
    "url": "assets/js/120.274ddda3.js",
    "revision": "0c5fc7cc4540e490b50cd0fb72809bb7"
  },
  {
    "url": "assets/js/121.0612881b.js",
    "revision": "89eb14e755a5f51976852f536b938a7c"
  },
  {
    "url": "assets/js/122.7c079f18.js",
    "revision": "912a16ba3c735204a0b7f897495ac4ff"
  },
  {
    "url": "assets/js/123.cb1718aa.js",
    "revision": "5020dc27d92077ee106743f99e68a5c7"
  },
  {
    "url": "assets/js/124.9aa77f92.js",
    "revision": "49f0dc1c5ad330512126df9a6d7a8b21"
  },
  {
    "url": "assets/js/125.e2f4c33c.js",
    "revision": "e779df808f565a997d785d2be745e93f"
  },
  {
    "url": "assets/js/126.c8f104d1.js",
    "revision": "1935e2b8d801a428bb2d1b20bb25c082"
  },
  {
    "url": "assets/js/127.58bee625.js",
    "revision": "13b7763f37c089ce63a650a3224d4b2f"
  },
  {
    "url": "assets/js/128.7ecac9c2.js",
    "revision": "10cf94d767f11e71d2926a5bd0b704c5"
  },
  {
    "url": "assets/js/129.60e58b0e.js",
    "revision": "5a37ebbee819464fb76ab6e6c46ea7d3"
  },
  {
    "url": "assets/js/13.b3d4685f.js",
    "revision": "8eb4767c05f9e18c93a6ff748fe81589"
  },
  {
    "url": "assets/js/130.e9dea28b.js",
    "revision": "ecd9ec075027b323f0915348a000210e"
  },
  {
    "url": "assets/js/131.da5a2cb4.js",
    "revision": "7744e4484d7ef0ed0b6a6f98f01a811d"
  },
  {
    "url": "assets/js/132.63f7a726.js",
    "revision": "4134e446b291a3e31d46568d826af40f"
  },
  {
    "url": "assets/js/133.1fc258cf.js",
    "revision": "ec37e681fdbf48ba6ea25d25d7213d28"
  },
  {
    "url": "assets/js/134.d82ac9d0.js",
    "revision": "9afc4e4f9b6e4ee385bfdb4280479aaf"
  },
  {
    "url": "assets/js/135.b414b213.js",
    "revision": "5f432c53f1ad2e03591b7cc4df5b5cfb"
  },
  {
    "url": "assets/js/136.8e2e5956.js",
    "revision": "107e8fe048ef7dc11437110411349aed"
  },
  {
    "url": "assets/js/137.0d472302.js",
    "revision": "0b3a79065795735e8dba539a9689515c"
  },
  {
    "url": "assets/js/138.44f8988b.js",
    "revision": "ba62191d9383864eec8b52627374c29a"
  },
  {
    "url": "assets/js/139.82229cff.js",
    "revision": "909b05d304ba2d75ce8dae33a989efa1"
  },
  {
    "url": "assets/js/14.1700b5a3.js",
    "revision": "c0e59dc5683bb67abfae3c5bc436a7b1"
  },
  {
    "url": "assets/js/140.5cbb71be.js",
    "revision": "31136299eff505324c460f462229d358"
  },
  {
    "url": "assets/js/141.3632db8b.js",
    "revision": "b4ae608db576c8f1db2badc163822d0c"
  },
  {
    "url": "assets/js/142.de9b7c45.js",
    "revision": "69cb8501831f89f40b9ad47e23a8ba7e"
  },
  {
    "url": "assets/js/143.afde3041.js",
    "revision": "e33f64afd4cfa193e348eaaa85d9a466"
  },
  {
    "url": "assets/js/144.16c933ca.js",
    "revision": "a518f01f0ae6003dd3ef1ff2aff6fb01"
  },
  {
    "url": "assets/js/145.e424ab93.js",
    "revision": "4e3fbc7d2115bdd322e650711c84d1bc"
  },
  {
    "url": "assets/js/146.573b571e.js",
    "revision": "892c5c982fbe2fb940065d87fee2e31a"
  },
  {
    "url": "assets/js/147.eb218681.js",
    "revision": "887c98ec861097bb8a13278f627b0087"
  },
  {
    "url": "assets/js/148.509c06c0.js",
    "revision": "4ce58c6a4897348d4fe1eb3af358d35c"
  },
  {
    "url": "assets/js/149.78084916.js",
    "revision": "4862d2d503d27076996e6a1607fb0e7e"
  },
  {
    "url": "assets/js/15.b85d0471.js",
    "revision": "0f4d4b344dfb53c7f43d95f86a7c130a"
  },
  {
    "url": "assets/js/150.cb63c035.js",
    "revision": "72ce5fd2c5d9136f4c78d2dce2e90c67"
  },
  {
    "url": "assets/js/151.dd447477.js",
    "revision": "3990c361b71a24510c74eef90f9db680"
  },
  {
    "url": "assets/js/152.d56ab9d4.js",
    "revision": "5ea5f1b86d8fab215a2501a331de22a2"
  },
  {
    "url": "assets/js/153.95aa9349.js",
    "revision": "59a8de3a0fa54025e8c153f1f9ceb4db"
  },
  {
    "url": "assets/js/154.38690483.js",
    "revision": "53cf9c0ce0ba5d777c06cad4ec5bee37"
  },
  {
    "url": "assets/js/155.89e00244.js",
    "revision": "cdbacc7823ce218d6698c7c65e5f3f0c"
  },
  {
    "url": "assets/js/156.2ec8e121.js",
    "revision": "a35331b7d9278049a8c7d17eae9bb584"
  },
  {
    "url": "assets/js/157.c0804984.js",
    "revision": "05cd394c3d16ab50a48ec1390c235ed3"
  },
  {
    "url": "assets/js/158.82a3f154.js",
    "revision": "6e85164bee458802d723207a9561c284"
  },
  {
    "url": "assets/js/159.7bb0dc6f.js",
    "revision": "002b117f6fb4f02f8a1232e7f4b9d587"
  },
  {
    "url": "assets/js/16.6fa87621.js",
    "revision": "19d09f9f1a2bb863e6238b9083b8bcb3"
  },
  {
    "url": "assets/js/160.1eb839ab.js",
    "revision": "a7e46358150a2b14b4ba6900dc798e90"
  },
  {
    "url": "assets/js/161.eff75fe4.js",
    "revision": "e4ad8f0c74986b7eb991ffbb0ea15d0c"
  },
  {
    "url": "assets/js/162.b539adb5.js",
    "revision": "03b7d8816a7f6583c5e2410b58e57ea2"
  },
  {
    "url": "assets/js/163.dad6bfca.js",
    "revision": "8d4f6a4977539a262a74256e02fa543f"
  },
  {
    "url": "assets/js/164.90398820.js",
    "revision": "43e2f5ac012d96d8bb2d556a181b0632"
  },
  {
    "url": "assets/js/165.e75bf5f3.js",
    "revision": "afe87a350dcb23c59c564636abe86242"
  },
  {
    "url": "assets/js/166.d6f75159.js",
    "revision": "a2a399796f354575cdb3b68817d80555"
  },
  {
    "url": "assets/js/167.990f1aa5.js",
    "revision": "287e6f12a96b8108a7476b612f7663fe"
  },
  {
    "url": "assets/js/168.d3c7f64d.js",
    "revision": "39842e9d96e21bc402151bcac68470fe"
  },
  {
    "url": "assets/js/169.36d89491.js",
    "revision": "84b1c3c39379039fda0a1c6d82e38efe"
  },
  {
    "url": "assets/js/17.0bb21e9b.js",
    "revision": "de9e21479a91924f55bbc9ddd57683ac"
  },
  {
    "url": "assets/js/170.40a0626a.js",
    "revision": "be8781071d3f801b8498c28c27387075"
  },
  {
    "url": "assets/js/171.56c17895.js",
    "revision": "15efd051da03bc0c0108c65c2500c7bb"
  },
  {
    "url": "assets/js/172.448e94c0.js",
    "revision": "755cafb3bf6ac19182fe3971f2253631"
  },
  {
    "url": "assets/js/173.0768d897.js",
    "revision": "ed8d870765bd5d561c711fd9c05c8f1f"
  },
  {
    "url": "assets/js/174.a973c23a.js",
    "revision": "8ccde73bdaf0fc64427464b9e13c1f25"
  },
  {
    "url": "assets/js/175.eb96f5b4.js",
    "revision": "97a238c87b3e53141b55339bedd9bc59"
  },
  {
    "url": "assets/js/176.7629b507.js",
    "revision": "8f2b608b4b44680437af9538db115da9"
  },
  {
    "url": "assets/js/177.3ee6c199.js",
    "revision": "4d4c53e29211b760df8bedfbaa7726ba"
  },
  {
    "url": "assets/js/178.15807fbc.js",
    "revision": "bbf4859e629c1c232eb96dd5b902054e"
  },
  {
    "url": "assets/js/179.f5cf272d.js",
    "revision": "084d06ae08a652b8e597c627259a6301"
  },
  {
    "url": "assets/js/18.1798b1ea.js",
    "revision": "623e39e479e725859263d7e50a47aaad"
  },
  {
    "url": "assets/js/180.66481d4f.js",
    "revision": "4e2f7c7feee1b3e1343166d37c5d0052"
  },
  {
    "url": "assets/js/181.8d3e7598.js",
    "revision": "35b9e0ea6726198238026806d3986b81"
  },
  {
    "url": "assets/js/182.c2b1f604.js",
    "revision": "90c096753741aeac6309586253609d2b"
  },
  {
    "url": "assets/js/183.c8f25248.js",
    "revision": "46cc12fa2c5d1c6f501dca397f7f662f"
  },
  {
    "url": "assets/js/184.62648b84.js",
    "revision": "b3ee5f06045cf91486d4e3e00fffc6a8"
  },
  {
    "url": "assets/js/185.8c63c010.js",
    "revision": "f30e6c3506617028e1c365e24ff74230"
  },
  {
    "url": "assets/js/186.ac9f3a84.js",
    "revision": "ef1017131293d659002702bccac3f4d3"
  },
  {
    "url": "assets/js/187.ccb73a6d.js",
    "revision": "fff892d75bf1729a54e91af8ba5db05f"
  },
  {
    "url": "assets/js/188.22e0967c.js",
    "revision": "273d5538ba4e3290649273b9a2e61c9b"
  },
  {
    "url": "assets/js/189.9d92240a.js",
    "revision": "c40fdda53b6e9afc56a989e05383548a"
  },
  {
    "url": "assets/js/19.7a7bae7a.js",
    "revision": "aae5e02d2adb17cf3a5ffc2e67ed3199"
  },
  {
    "url": "assets/js/190.eec23473.js",
    "revision": "7adec38492eda2de49eacbe282ffac5e"
  },
  {
    "url": "assets/js/191.4f9a8d60.js",
    "revision": "d2d5a9ebac10e99432233c2ee609c738"
  },
  {
    "url": "assets/js/192.69ee71c8.js",
    "revision": "eee3fcf0381242ab831b2d55717f9e5c"
  },
  {
    "url": "assets/js/193.a852567b.js",
    "revision": "b1d29a75df829671668a049a757fd341"
  },
  {
    "url": "assets/js/194.3aa42edd.js",
    "revision": "c5ee73c42262c97f4e8264424a27517e"
  },
  {
    "url": "assets/js/195.94657dce.js",
    "revision": "34880f99946a17115ce045796699e71f"
  },
  {
    "url": "assets/js/196.4d04255e.js",
    "revision": "4d8251c85b6764c88010973ec9a0583b"
  },
  {
    "url": "assets/js/197.17e56311.js",
    "revision": "2ffb716e20d6baefffc52750d194d142"
  },
  {
    "url": "assets/js/198.3d59aff1.js",
    "revision": "998f0259f3d773f5e2eff67a003ab946"
  },
  {
    "url": "assets/js/199.80f73ae7.js",
    "revision": "b02174dad329b3ba81c106e9a681d6aa"
  },
  {
    "url": "assets/js/2.ca7dca2b.js",
    "revision": "27adb73e26aad05994180fee4204e477"
  },
  {
    "url": "assets/js/20.885b1956.js",
    "revision": "e56229447b219d5bb829443b6f5294b1"
  },
  {
    "url": "assets/js/200.ff2fc5cb.js",
    "revision": "c666fa09ca7a3f90ffa04be0b25627ab"
  },
  {
    "url": "assets/js/201.cc6cc868.js",
    "revision": "06c253110538532766010bd339554ef9"
  },
  {
    "url": "assets/js/202.62c2f6bb.js",
    "revision": "ae1758ba67f1b63116885e91bdb74b5c"
  },
  {
    "url": "assets/js/203.60748894.js",
    "revision": "7e9b00c4654bc246cd19d6ccdc39a974"
  },
  {
    "url": "assets/js/204.3165dc00.js",
    "revision": "72f4ae326d8523c59593404375b75af7"
  },
  {
    "url": "assets/js/205.b9f663a8.js",
    "revision": "f7127433422ad40adba75dbe68f7da04"
  },
  {
    "url": "assets/js/206.cb3f60fd.js",
    "revision": "5ab3ed984ae004cf7dcd2845cfc6d7fd"
  },
  {
    "url": "assets/js/207.65298fbc.js",
    "revision": "30b0dd1111f216acf58f9d88d1d23013"
  },
  {
    "url": "assets/js/208.33f1f4b5.js",
    "revision": "fd28f08a01b8a0c1b5590d8f0b542217"
  },
  {
    "url": "assets/js/209.267eff38.js",
    "revision": "e541bb40ae5a28a86c0288a61e5dfb84"
  },
  {
    "url": "assets/js/21.a3916800.js",
    "revision": "f18df3750f7300d712a13ec56857f866"
  },
  {
    "url": "assets/js/210.9dcb3312.js",
    "revision": "9bf7cc714b9763d3dd1393fc1791460a"
  },
  {
    "url": "assets/js/211.1ade8f07.js",
    "revision": "85c079c05ae83880a1bc386ecb869739"
  },
  {
    "url": "assets/js/212.7c2ab4c1.js",
    "revision": "f30cac6c8712b8eb6b9bc602851e8933"
  },
  {
    "url": "assets/js/213.2e4b6f2e.js",
    "revision": "20d715cb7346bc1af552fcc0d578419b"
  },
  {
    "url": "assets/js/214.0254b6c9.js",
    "revision": "a9cfafff4f2206433d77273b4ed1b3a0"
  },
  {
    "url": "assets/js/215.89be2e92.js",
    "revision": "5950c90f6283a4a3209366f254ea1251"
  },
  {
    "url": "assets/js/216.cf4c0a25.js",
    "revision": "2a254dc06599a7d70c33013a5be4263b"
  },
  {
    "url": "assets/js/217.7f962742.js",
    "revision": "dfe18aed53d8c2366ae16fefd4bd3a4c"
  },
  {
    "url": "assets/js/218.6c9b32da.js",
    "revision": "c31e7125eddeaa12cb8f90f9aa3b9921"
  },
  {
    "url": "assets/js/219.91969c55.js",
    "revision": "d9824cac07dff23e12cbd62014d99ad3"
  },
  {
    "url": "assets/js/22.66ff182c.js",
    "revision": "f558a9ec785f3fe7ab3fc94736cf4c03"
  },
  {
    "url": "assets/js/220.b0621feb.js",
    "revision": "8c38dbaeb6313451288f2d2815b3c95b"
  },
  {
    "url": "assets/js/221.169bdc5c.js",
    "revision": "b160ee23f74b4cfb5a13e2bc8ecc1a68"
  },
  {
    "url": "assets/js/222.842e8dc6.js",
    "revision": "abb15ee3499dcf40a0e96408f1b53761"
  },
  {
    "url": "assets/js/223.177223e1.js",
    "revision": "45ff73b6de38d3de8b254806b050e98d"
  },
  {
    "url": "assets/js/224.eaf06753.js",
    "revision": "9312266ded7651fdbeef93c7a65560e7"
  },
  {
    "url": "assets/js/225.215a095c.js",
    "revision": "a0d7caa757b1a7690e5342230d30df5c"
  },
  {
    "url": "assets/js/226.d70e281c.js",
    "revision": "92a2489a708963c09822621690d87fab"
  },
  {
    "url": "assets/js/227.968119d8.js",
    "revision": "e76b40feff93cf80eed1fe3c0048cb2d"
  },
  {
    "url": "assets/js/228.cfdd25e2.js",
    "revision": "c73728b0942875f84ec83fc04f6a3eef"
  },
  {
    "url": "assets/js/229.602d6645.js",
    "revision": "7d45ce9df19d0deba9a7a0cb3eaf6880"
  },
  {
    "url": "assets/js/23.6af21c91.js",
    "revision": "34b95b65f647b2923859e9883c630223"
  },
  {
    "url": "assets/js/230.c1b4bfbd.js",
    "revision": "41149546782a90054f564089eb951ff4"
  },
  {
    "url": "assets/js/231.3763200b.js",
    "revision": "26b9ce5f137eb33caf0f6932a0828b9a"
  },
  {
    "url": "assets/js/232.aeb63245.js",
    "revision": "196619ac2a6ed8a5e08d5eab14365961"
  },
  {
    "url": "assets/js/233.6eabb733.js",
    "revision": "c8f67c02d3c7d102d77888907d147342"
  },
  {
    "url": "assets/js/234.92b8dc46.js",
    "revision": "615d6afe6752bd79a01ab292ac3b1c50"
  },
  {
    "url": "assets/js/235.25744c1b.js",
    "revision": "96158f87637b80b83029f727bb81d302"
  },
  {
    "url": "assets/js/236.2f25193a.js",
    "revision": "399fdc7bcfc275ea706030d5dcefd599"
  },
  {
    "url": "assets/js/237.af2fe756.js",
    "revision": "c949c1689ddf5df315074e5b4b7d428e"
  },
  {
    "url": "assets/js/238.a38bcde6.js",
    "revision": "7fb7efd0b45b5f74662a55713330848d"
  },
  {
    "url": "assets/js/239.989165bf.js",
    "revision": "855110a637931b9fc2c42174b2b46583"
  },
  {
    "url": "assets/js/24.c4e58166.js",
    "revision": "a1cf5ab5013d03f347b4007fec0b98e7"
  },
  {
    "url": "assets/js/240.61e02ed8.js",
    "revision": "bbf2c5b96893aad62729b623adb0a1a6"
  },
  {
    "url": "assets/js/241.ded7a346.js",
    "revision": "0898a4b613c63025fcb14267288e3b55"
  },
  {
    "url": "assets/js/242.f364f2a4.js",
    "revision": "1906680bb50e45f1cd5eddf441868449"
  },
  {
    "url": "assets/js/243.e3916a16.js",
    "revision": "3450ce6478d13e3501198c2761b7919a"
  },
  {
    "url": "assets/js/25.621c2506.js",
    "revision": "d05e407a714f4a934477c6f12cec3a1b"
  },
  {
    "url": "assets/js/26.181f98ae.js",
    "revision": "e2d60a7c8a4503135dd9249fc5666b43"
  },
  {
    "url": "assets/js/27.25db717a.js",
    "revision": "9f62ccbb13af0cd327efc5680541d1dc"
  },
  {
    "url": "assets/js/28.d003d714.js",
    "revision": "735414150ac5e97a0eb6b8ca7c16aa38"
  },
  {
    "url": "assets/js/29.30fc54fd.js",
    "revision": "99395ec74abb1e9d8cb7bfc993bddacc"
  },
  {
    "url": "assets/js/3.4d3711a4.js",
    "revision": "1c3dd800c55468586864b0e3a74b0ee4"
  },
  {
    "url": "assets/js/30.8ee0a20c.js",
    "revision": "3f4f3c84944a70a36249ef78c74e155c"
  },
  {
    "url": "assets/js/31.a86b1b9a.js",
    "revision": "7ae0ad832e841b5e267a1318f8aa75d3"
  },
  {
    "url": "assets/js/32.dcd67633.js",
    "revision": "014ac5f3c633eba01b73720dc5582ff5"
  },
  {
    "url": "assets/js/33.a36148c8.js",
    "revision": "bf1db96f7bb73e09b7c344e62f045b4e"
  },
  {
    "url": "assets/js/34.d9853241.js",
    "revision": "ca3bdd9ba461405cb40d43f76c007348"
  },
  {
    "url": "assets/js/35.929a28a1.js",
    "revision": "a0d8d4f79ebff61ce5680a2bace79f02"
  },
  {
    "url": "assets/js/36.921b6c07.js",
    "revision": "a8f82ce1d8d1db7e3d9c5584c962c3e3"
  },
  {
    "url": "assets/js/37.9fb0ea78.js",
    "revision": "e57958f662bb4992cf66f7f2f35ced36"
  },
  {
    "url": "assets/js/38.c7137d0a.js",
    "revision": "ffd29646181680b981b8c6e1d37cabad"
  },
  {
    "url": "assets/js/39.caa86234.js",
    "revision": "aa0b3746f352a97f0be6ba2fb592f3ba"
  },
  {
    "url": "assets/js/4.0ee78ef4.js",
    "revision": "1f0af9ef846dbfb5a14911b4f214d390"
  },
  {
    "url": "assets/js/40.99c5b246.js",
    "revision": "75bfb2d0a591dc6b8c3e036109b58f54"
  },
  {
    "url": "assets/js/41.847cd091.js",
    "revision": "97b6e7f77213acef8b9f377a156e9670"
  },
  {
    "url": "assets/js/42.503e0f6e.js",
    "revision": "5a29a4ed25012d196ca3c54717f13545"
  },
  {
    "url": "assets/js/43.d96264ea.js",
    "revision": "5f054239495d16e24c0bebf1a62e735f"
  },
  {
    "url": "assets/js/44.a16cc935.js",
    "revision": "a7b2efb5665575625e34e20c8d9c91ad"
  },
  {
    "url": "assets/js/45.df2721df.js",
    "revision": "fbf12da73e3d70710e25919b44efcce4"
  },
  {
    "url": "assets/js/46.da0bb057.js",
    "revision": "2fb715b13805cacccd5f84f76eca7aa2"
  },
  {
    "url": "assets/js/47.f08c93fb.js",
    "revision": "291c8a8e56867cce77ae03c9630ca319"
  },
  {
    "url": "assets/js/48.5a4122c0.js",
    "revision": "924edc57cdf9dc6f33e5978746a99a04"
  },
  {
    "url": "assets/js/49.4389662a.js",
    "revision": "3ef76f3c1d44e2ff7f008ccbc52a2429"
  },
  {
    "url": "assets/js/5.9bd1fd1e.js",
    "revision": "dae3908cab0c18c65a5e7f5b7d93fca0"
  },
  {
    "url": "assets/js/50.f98afa45.js",
    "revision": "9d87d1780fc30f497072403aa001060a"
  },
  {
    "url": "assets/js/51.c9b6cab7.js",
    "revision": "e5606fdfc9aa5580da8abc82e34f235e"
  },
  {
    "url": "assets/js/52.3b2b0253.js",
    "revision": "69d4be25fc0cf4f66495232214486f90"
  },
  {
    "url": "assets/js/53.5f93f9f0.js",
    "revision": "32d083f01893fb4e1bc1afc3106ae193"
  },
  {
    "url": "assets/js/54.a5d7e89b.js",
    "revision": "fd4e692c960bcf6b7efba12073a4528b"
  },
  {
    "url": "assets/js/55.307af1a6.js",
    "revision": "18b798fa5c6888f21b5a0cb62a67cb1b"
  },
  {
    "url": "assets/js/56.e4013586.js",
    "revision": "6b1035c35cead5de2a5a1441626639a3"
  },
  {
    "url": "assets/js/57.e42be5b6.js",
    "revision": "1cdde9e67f4aa83e148e6c389ece5389"
  },
  {
    "url": "assets/js/58.ff0c06af.js",
    "revision": "ed094726881ee69d479b9d1a278c723b"
  },
  {
    "url": "assets/js/59.fbb04dea.js",
    "revision": "df42a7a06fcc0ceb4e278188e21f4796"
  },
  {
    "url": "assets/js/60.6da30fb9.js",
    "revision": "0ee63d3bbb1d4feff4f68aaf6731824a"
  },
  {
    "url": "assets/js/61.c2c1f92e.js",
    "revision": "ba6b3e86d4ba35911acfd7d43c508c75"
  },
  {
    "url": "assets/js/62.15e98b59.js",
    "revision": "664740df16f1dd9f7e430265ac052806"
  },
  {
    "url": "assets/js/63.9254b6bc.js",
    "revision": "0ded38495b19306d1d0fed3c4baeb8d4"
  },
  {
    "url": "assets/js/64.ebaf2db0.js",
    "revision": "f1479d4b5f6ae7202a9170feba15cf1f"
  },
  {
    "url": "assets/js/65.cd311b23.js",
    "revision": "ea2d85a1f5923fdb17f8184dd7f91f1f"
  },
  {
    "url": "assets/js/66.04c981e4.js",
    "revision": "e7ba24a6f116926e4b8d62bba23abd1f"
  },
  {
    "url": "assets/js/67.c39ce793.js",
    "revision": "7482cd324df5cffb78d795106e5eb261"
  },
  {
    "url": "assets/js/68.d0e01b1e.js",
    "revision": "5cf2aed96deaedee080ce3cd654cdead"
  },
  {
    "url": "assets/js/69.4f9b7408.js",
    "revision": "4f583a281247a73b0f5fe12e09d25d47"
  },
  {
    "url": "assets/js/70.4c97888c.js",
    "revision": "09507434a0b14f49b650f028dec81ffd"
  },
  {
    "url": "assets/js/71.739b75cf.js",
    "revision": "7ceb6f74805278441d362c87922765ce"
  },
  {
    "url": "assets/js/72.1090c111.js",
    "revision": "874817d2e99e4c5db34e47e11d59e12a"
  },
  {
    "url": "assets/js/73.42861a4e.js",
    "revision": "0ab8189573230710bdbb6b6381afac5c"
  },
  {
    "url": "assets/js/74.1965facf.js",
    "revision": "8ebfc0c9918ad109f43f557ffa23b606"
  },
  {
    "url": "assets/js/75.b132987d.js",
    "revision": "66a94f771b91bd941ba12f76820164c5"
  },
  {
    "url": "assets/js/76.96d20229.js",
    "revision": "c6f49059bb363bd60d2a41c5dbd3006e"
  },
  {
    "url": "assets/js/77.2f883283.js",
    "revision": "c98774875f3c946fa7d54e04c7c2f825"
  },
  {
    "url": "assets/js/78.d8ff6d8d.js",
    "revision": "6055ecac16d5f66c7657716ead988e4d"
  },
  {
    "url": "assets/js/79.6a505526.js",
    "revision": "c79fc6b58e31015a8268ccfc63f67782"
  },
  {
    "url": "assets/js/8.4234ec26.js",
    "revision": "034693db9d41e7f736a9084134ca0f47"
  },
  {
    "url": "assets/js/80.49e4f758.js",
    "revision": "a4ba5c69a5c105cf25cdb05dce790aa7"
  },
  {
    "url": "assets/js/81.cc4b4317.js",
    "revision": "d0eefbea797d278ed921feb7dde5f798"
  },
  {
    "url": "assets/js/82.0bdf57d6.js",
    "revision": "bb4dc59a4856580960c89104dac63f08"
  },
  {
    "url": "assets/js/83.1071a245.js",
    "revision": "9d84b7056b40cb893864d848528fbe5f"
  },
  {
    "url": "assets/js/84.76951d62.js",
    "revision": "39bf5afb81b6281e0e2f2bd1a2d322c2"
  },
  {
    "url": "assets/js/85.64de47f4.js",
    "revision": "dd7ecb35a704f46d8068bef5ab176c79"
  },
  {
    "url": "assets/js/86.503b8103.js",
    "revision": "cadb488c9b013e5000b7ce6a2d113450"
  },
  {
    "url": "assets/js/87.18aa568e.js",
    "revision": "1aa5439fac7d17b48aeb21448203a9d1"
  },
  {
    "url": "assets/js/88.9475df2a.js",
    "revision": "a78d34a8a5cac685803d2dc1bb28ef32"
  },
  {
    "url": "assets/js/89.e2101d8d.js",
    "revision": "e3c9a42f8628ab33aef76d4b148c17a8"
  },
  {
    "url": "assets/js/9.afc53e82.js",
    "revision": "29fc5f89c99495bb3aaad5ee6565fdf7"
  },
  {
    "url": "assets/js/90.53778064.js",
    "revision": "d22b105b55ee7ee90ec9c05b6067b447"
  },
  {
    "url": "assets/js/91.49990687.js",
    "revision": "1ef552c80050474e69972dbd7631eebc"
  },
  {
    "url": "assets/js/92.8f57ac2a.js",
    "revision": "600b31f80f8f718d463dea664ee05ba8"
  },
  {
    "url": "assets/js/93.cef74ffb.js",
    "revision": "b531dcece73a0915e0808754e9dc0985"
  },
  {
    "url": "assets/js/94.4546d763.js",
    "revision": "52567454b76245974664f3e5525be9df"
  },
  {
    "url": "assets/js/95.2d88c55b.js",
    "revision": "2886970678ad8aab5f059f007e07d253"
  },
  {
    "url": "assets/js/96.194012b3.js",
    "revision": "b654c895690d77de6b763c49e412d435"
  },
  {
    "url": "assets/js/97.3d536cca.js",
    "revision": "b465d5886827752f6a44d4526546ddad"
  },
  {
    "url": "assets/js/98.f01cd0cc.js",
    "revision": "343db34b6d25e9f4e1882c17b20c16cf"
  },
  {
    "url": "assets/js/99.bba80f41.js",
    "revision": "2a33c6aee8426cdc4d89cfcea62120c6"
  },
  {
    "url": "assets/js/app.b5b034e8.js",
    "revision": "21a376f3f98c69303d190b09afb8981f"
  },
  {
    "url": "assets/js/vendors~docsearch.1c98f071.js",
    "revision": "72b0beb3b5558507793502749597c9f8"
  },
  {
    "url": "index.html",
    "revision": "8027b5b6d45c6f1dd646e1a5c5d051f2"
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
