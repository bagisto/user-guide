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
    "revision": "041a3d9a2de6e17cb1b0d3ff79aa9cf0"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "aec7297eedc9b2287bf80d390bff2b30"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "9ee7cae8f2db1ea44b5ea589ef8b6399"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "e87873bf509d8912ce6e8b0a7c59bbeb"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "ac86eb2510d7bd8c5f1a95a154c98eff"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "693a46aff60f9833c5be6d907b4ae2f7"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "b0167672f14d9be7d854e2c5aab7eda4"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "dab741ec17b7f86856b87dd59886c211"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "e260f320cdfe21e172b21b30bd5f7e92"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "3b2c85aaa3e0498b676c761e62474723"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "d0dcb4c10ac725b91c06f44e4ce66731"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "64fa3e02f05988f8e0480c0f6a4a615c"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "ee90d489574017295fe01fe60d50392b"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "5921edb848fe6c7a6514b343cb476bd5"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "31b6507586ca1346a463caa65b567a13"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "03338c55b39cf0160b243a987c6b266e"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "16fc3716222d6184f9e5ab12f5b80815"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "76a8f8cc46244ed06f0f63113a8fd29c"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "4a0ca25eba0ef449a59e0f7264597f9b"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "c1692a5c0a029dc540fa08d59fb19b34"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "64f9f818cc719b51ad9ecf2304750544"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "269f55b0d77c56fc4311eaf245bc1a30"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "a9baaa31cc142a26d175567f8ca60ad4"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "5f4d9ce6526bade2f82d5e8e24c0c457"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "6eec853c0b00ec19901ceb30ec868d43"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "b553b2a80edc7e57586a54fe1c506560"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "a08baa1db508f22ef89c04eac9f65cfa"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "76ac2f9e13a0045db547e956a61de737"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "2ca995d34a5ed73ed182fd15abe573b2"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "e47207ff7e118ad09d4ca982f0c2041a"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "2512f24fd2232a3348ed7cf2a0337825"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "f992b595ea0de65c101295fc5f944be9"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "1d9b98789cb0a1683bcb27c6d108ab5e"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "db454b134c3a03a8af64a90f1df47e93"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "332f16c4f1ac36f802d843b6b4688a78"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "e0e32e2fc28b9cc37809e1c0871d2291"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "9901cec94711b8b6f88f982ea79061f5"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "c03e7e494238983f0268cf0edab093bf"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "75d4e7bbcb659e8f4a31a2c399d14f43"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "f26ba0915dd31f7fe3d2b614cfe5e874"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "4a2d8a138b0ed82fc2795479f69a86f7"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "908942d54ba05023a762562ec52a6e77"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "ffc9289ef15c6d3d46c0683bfa2699bb"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "ed14e1c80b4f7977910a363ef3f7a061"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "8051925a1d303c348bf8b0fdd6755595"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "bd60d8a7d214fada4fb1b947893e1aa1"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "0144eb70773d5bfe2068af25bc9fcf1c"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "38c5cd1eacccb504194da5cde1e445d4"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "af3eca8e2db75a4c1a32ad243cd9754e"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "b0a836385c8692a5867b68c0b1c4ad01"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "12816f3c5fe4717e0de8070030ca3fe5"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "1d541cafa4aebb4f1c6d21166bc8dfd5"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "c8dc60b291676614ffdfd193fbcaefec"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "77fbd848604980182b088a7ca18627b6"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "05d1dfe2bcc2ae3d1504002ca1293008"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "acaf109b44251ffdecad9bc8452e685a"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "02440b727032dc963e5381f061bca494"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "ac3ffa6f20e6ea4887b93ff6e32bc4f2"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "ccf540416a32290c4d53ad21d070a99a"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "26e4a5b245dfaa0184e376de9345fd2a"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "b3e278119af5fb7467f09faf4a5fdcef"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "401e68200a9237504763d326f78fd8bf"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "9c72393601e4fed06eb316515532b633"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "e61e3c13879f1ec8dda6f7f2b68d5191"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "09051347d127b7965d1d2eeadce36593"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "6dc0712a050fd677344a9a06447e81a0"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "8a1c314ccd4049393de1d123aff8f513"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "88bbcfd89c3c82d76aeaacff9c479bf3"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "65d769f991c99bce90613e42af572def"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "f330ac367fe1cca209e8071b856537c3"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "8c8278576a4675ae509fb68e20bb738e"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "7967e98175dd6c0f3adce81d5086e9ec"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "030b39170fa909c73d489730c5e4cdd3"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "0feb5ac5cc3874a45270169b008147cf"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "881fab62606023efcc88ff58b3acf00f"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "0a3887ff29028bacee960f588298eec2"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "f21c58729744786d8cb062915550b5d0"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "a5e301ed713d19f4116719a0c5ad9100"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "304b6285a3e65f9164436a7e65ded3e2"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "ea8129d7bbdfa45adb16fff114180b5b"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "bbdbc0545670c2bf9c658be14551ac7c"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "69ea351305686f5ecefcb1d35b5b517e"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "e6ea4f77fa12f678ae3a58fe9820d921"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "9c24942d1a4a3f2f409fd8d729e0a233"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "246d91a0c9451151294a4e0df3c13969"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "02488eb02c45fcd9725a3271aef18b53"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "5ac2deaf02f8dd0915541b2b8b78857d"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "798b34ab0b4e22b2e7270e9af93867c7"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "c337b01e49b98f5a8a2003c1594fc355"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "e689a016bf773aea3c0393e4e9bb7009"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "f7e66d32e067e81fccb2e532cf4baad0"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "c0d105fcb63d6bde8202e3e7f0414731"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "43e59f89f7124e386128e5b01a4d0745"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "3c4dbec434afb0475b65b6403d0ef734"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "f810d2328477e470a6797300b5111dac"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "13ea654557af0c407b1dd815fcd9431d"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "139d14d134a1d1bb4ee9196a2e1c342e"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "58e3666c9da5192c4a580583240b1478"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "2fb6ee70fe28b38d723a6f36d84eea72"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "460cd9e9c0294029b9c27e76309c7841"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "f6a4776c01545442e96e94ffdfef85f2"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "6bae5cae3e6157391444bd0b6739d663"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "3dad4b1fb8f927303d811e7f97665187"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "ac57da4eb1d6db1b6cb5a1c1d2a5f45d"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "cc5935944d425f49eded32b1b6a2228f"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "3424c06feba3a5d1232142e4f551f08a"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "539b575d36b4ef6984df1c5ca7c97494"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "af3dc300a6b91bbf15f9a7bdc7232b0e"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "8c2e61371d3ad2330787a7648b5ffd39"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "c5e9c18ce2ce8a097654dddaf799994a"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "2cc098f3314dbb065522bfdc76fe83ab"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "8e5958695710d138b9f9517c5a28d622"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "562300961dc2f494e68ecf9b1220b9ac"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "4dc4a2f6ef670877f4e55120343f09c0"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "7a4e17524ea11b611a8c9b91acdcd9ad"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "aa05a5aa28429d7fda59944264d4ab3d"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "a194a3e525fe232627a0b65ee31f5949"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "814a850d18fba4996c473d0770d41777"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "4bb063dbeaf2f89f00e9020affc2cfaf"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "b4096a45a0fb4bbaccfb7e33ccba74f0"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "4be19ac88ae961e2a6cc1b15cfce8be5"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "1f752c9d7e0371f6efbf39837091db82"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "cefff9a335aff553fc3124cadb78363a"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "cfae63fa7910a1b657ff89dea86e5cf9"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "179d1c4f7b1c77a7e63c3636da3a1c30"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "5c943d1e77a811a376239fb96b306cd0"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "c3a306d9d220d2b5449c8c68090903a9"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "7bfd7bf3fa1e084c1e0abbef894a1031"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "19a26f437bd77d4ff94a7512f5f28956"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "2ede84877b0e953978530b7a06da11bd"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "45bed07a001c37725d3bfd723352953b"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "ca82e473906c3cb42ae81fc5506567fa"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "1340af8bf6ce6e4d7f283243cbdc0f48"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "f8dba171c5839c8ba26cf342f0c8292e"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "f07c582bd471d64849255be8cbd5d216"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "4b8b9b5032b98ca8011714cc713dfbb2"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "b3dff4eee6373ef282358138ce69fb44"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "4be7ffb9a23d6b3c7d5de081252d8e7d"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "774ec19775c510e8aa79513fbfcac080"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "84fcedde3087293b10a6068a671a5d0f"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "02ebf0b2f8e9d89e75332417e4b0fbee"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "2fe2e1b58b35fa86b8e67b7a2de3aa8c"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "3b0267bf64af39f72bd739d59f2a673c"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "e4894c58498037f43f2cc2076d00257f"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "4d43759914c9749a239bf4fc41273da9"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "ba4cc467951b2332c3d7f5eaec82785f"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "8f599c62d08f6bd4ad718a91e1d8cbb0"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "650f6481e3442e16984d75c47452f97e"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "7240a13e9a054c9985b0aa38022e4118"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "40d055fe034355abd0e78c11939858f0"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "ab57f232ff73d1fc5b90f061bbe1f9ca"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "5f0738c7bd6685d72ecd5863b146b513"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "f7928043048ec3f3835ad84ccbd32aaf"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "810d1bc436d6b5e681dbf1a4507cc6b4"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "bd4621ee0f17e902a0c5c66535e13702"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "293eb87c4d4407059521a956fffe217e"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "f98a71f5f3ccf2059b43358862be81ed"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "5773bfcb6f0fc26b785395a6ef3733bb"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "2d880ec762454f82cc77a1eaf11bf523"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "47c7ca466e63ade1e4b77e975893e423"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "7ddd2514683ad9c07076aa1f1b0733b4"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "89cd4202be237da25a15a7c3ba05627e"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "23933c3c2257a41fa7acb3c49a08e755"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "90be0b05a819cb31ce0dd95ba32b8846"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "bbb4f871f8eaf4d07e5a7c74766218f9"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "594d794bf61da21e08f2f6f99ddfc0e9"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "5638d7ad34ddc55338eebc3b6eb8d4b5"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "329d14493b832c6d4b7e238621bc0e5e"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "15bfa9ec1cf3f8822fc1379318f55f39"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "43e904a2638723c6d8eab9c667eb2a9a"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "d340be3a1504f4df7f69fa54ed709e95"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "81e65f1cfa8e651ffc4a150f2a25c784"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "666f51ac04ecb0f15bcb8655a13375cb"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "48b86f2d655252d0955ce0c630307582"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "6d0800f52af596d53b0a7a9f36ea865d"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "cb31846c07131a23741fe6affd6aa7c3"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "2a55095793baa166317f0864f0ab1ff0"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "fa0305143aaa2d0afaa8e30d54cd96c4"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "715fe22aa79a35394c485839e7bb0012"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "3c9d2278283a58ebf54c5a2e1b046385"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "ec11288281e834547244006c017caca8"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "829bde7ca863653fabaf2ed72c61fef2"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "e2640fd15c7221939d579cac90af5614"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "57c91bd3901d74381b0125936193eb1d"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "3d3b1e1ccb4a842720d8389add0d342f"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "67eb681df5211694b26564c2709393ed"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "999cd278d354c40c5762e52b3b8911d2"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "120a2c3b686b790435bf10ac30053d98"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "185923e66969241af89a2870de052781"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "ad8e71e431ba92e2c0a2bf313ac4992c"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "7ca4e765d7bb307572e47251b8a4f3ae"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "d73c28ad111ab4acbd0c99cdb6d3606b"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "f5a5f945ad2e3140479ec894835930c0"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "22643ad85afacf4270519612d9b48026"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "b6a19c541d48e3ada55aa8c8b7760f9d"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "43279c4ba5801df0e37d6922686f8ff4"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "dd784b96b5dd7894888fb20b4b3d3f8e"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "9ddd66f417a4196763fbeb255f1816c3"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "28b809fe2c086f3a6084af2971c634bd"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "eb4378c97cb4395cbf4b06f617676cde"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "988f5a36b1efb7be67e2ab8dc30574c7"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "749d287153cc25adcaffc7e3d787a920"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "b70e5f3894a82089e02b861fc08ebe0c"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "85ceb1b32e5a6bf1cbf3f243af6b6dc5"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "f9dce656c539a351dc8ca279dd258b8f"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "bdc808aa413349d00ab078cf0d3643fc"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "d2ab1a8e5eedbbb5dd0816f9c5f6d3db"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "8cf05105bf39514e0753e63943b4785e"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "11acdc7b21d3fc70c01124e2e2733e9c"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "0c043ffec006d0e28caa87e004c61819"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "de877bb3c57d335c8dcfee0001a8196f"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "6e9b907e83c0a0efeb37dd89331aee0e"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "755652252f31474fd098e486e8bd0e12"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "218fb143e525c85eac0cf44219ecee8a"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "4a7fe307418ff931c4c627880f31a03e"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "de70c809ef4b827d82af91d4e74c1163"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "af57181b6905d6e6747bc5bee506dd5f"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "c811d08611593ebc8594c1ea06fee449"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "ecf4c10ccbea8129df463f4a9a16a4b8"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "930c709ed5f19630ec4a3300705eae35"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "50848d62f1c19a6bb38cd68233eeb1e9"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "3f57d9e079b50b9c374a8cfa25a7c7ee"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "a702db11a9abe58ae8109285fc676827"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "77a3ac6a385a0adba82cb66c2a30b78e"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "bb17e9e81ad1ad06ba0a00c8488df41c"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "61387e10b47a10db04b6cd04c4923ec4"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "7c157d8f13787621aabf6e57bdac982f"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "e0923441b1ab0c56c0c88a891428c2bc"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "bb69af4670b87b5db32c77f7c66560d6"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "51d5042f60d7ea7830f703439bb26208"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "d703ecace83b8a87403fdb06a5589972"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "727218d2192799a64bebb316baa96196"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "046960651d994fd3f67343ccbd041fb0"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "a37211e4a13564bda5f6c240d0998663"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "d6e035186c20bb645c7bf21e5d45e357"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "743e371ea908ada2dec522e531d7c551"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "57522b704e55754a3dfa1d6cd8b2035b"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "0e427c7c2dda265c0bc6059741b801ab"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "d575de9565836a978197e5dcd97b3b77"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "d2b0252f3428c2093fe576dfa2c7382f"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "88080bc6d5e4529f99ee7ea8e5fdc4ef"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "144f0249f57c69669545e2fa796fc168"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "5d53a5a0429103825d2c8aa0262da4bc"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "5ffb2d11d54b171c25bda3780988dbaf"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "ad40885078f0e3d71560d25473a6307a"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "5a1ca8471ebd26a6196664b16a8db501"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "4f10e5421606ddb1c5c7b8882c0389a1"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "496ea6a892e7d123db4ce855bda54e24"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "42a5d0e2c684ab9ea8b4877ef79e0059"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "98da1e778d4dabf4fe20bf55d4a0a63b"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "c3a73c8cde0623bd0168a341c6919639"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "40febce12587103e103e55a8eaaf59d2"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "34303353a9d4ae2033a0ebea7a6a7555"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "6faf2866445c7edff168d8cef401d5a9"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "e1124d4de7ac3db16a917b975971a113"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "4fd1cbbf5ae111648c4939e8b5242ba0"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "613e80ae1da84c7fdb3f32fd9475d92a"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "7e2fda6c25b5ea4be6bf8ceb14beae4e"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "8add9adf0f7f8aa4163f4b49296617c1"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "215b327706b8e32244521ebad02b971a"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "2f8c4f6a01138c419bb9cb025e1eb70b"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "b72bf39cac7bddfee9eeddc55dd92cfe"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "b6bb28530f346f1fe60fae5e0dd4223c"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "b8b66db0844207aa6e0e06724eff8703"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "15f008342ea431142ed7d1fbaa7b2dfe"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "d14993e3b5b41de970323f3f407422df"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "00bbdacdc7b1691ea12500b9690e596c"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "22ca86d6e71457b39db96d75c933c760"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "917a48948bcf094c7c8c4daa6751630e"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "0f52ad15ac2e75b96dd8db74fa69e1d6"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "ea161e0886afd0071e0761fc98e6569d"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "23febc953a33b94b007a700284f0774b"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "ca25d95b3a2fad81a3f02523644f7dac"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "38cb26c231b7b1e3bbbbc4eaeaab1b94"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "606336a7f96acff43c0e698c099cf920"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "cefcd4aaa7ec9f6344535926788400a5"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "7a8936ab10677bcdbc29ec902da04841"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "957a47a5d3e2bdb3e508b99ca988dcda"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "3bfacec31fcaaf0ddc5ea184ab686b16"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "ee921a818476b9eb02f4c0da893b90c7"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "d64cb4e1bf8f04b01d2d92afb56bd39a"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "21216802d048a62a797d947bb140f8d5"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "ad23395f2b10e98dcdcbc10962ad17ef"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "95bcfe6c50f6b2c30e933f4ac2564efe"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "1ab247f15e3c23de8dd10835251f8330"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "d238ec597685b79ef83c8cb328d118e0"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "97d46eaee57139841c99d8454754f184"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "d60ff80b55e2907253581cdc907c8483"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "30a5f2053c753744deca9020e3a30d95"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "af7f512aba1ab23568ac3364d5c9b742"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "db3e52ad4f39e9a1cf5c433af3fc764b"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "2f5fad09b59d7f6ede3b7a7a00bab6f1"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "37b2ec2f784fc55c4c2d3d56b66f8872"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "ee4c55b67080a2f943e97f2e17a187fd"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "9198e1ebc2f314e4cfd5f076694a655c"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "89816c54dfcfc61105777cfa941b5c24"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "b0d28ce35a9573847267df24a8f3bd89"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "d1c3236a177338567cb553d109f95802"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "938997c60fca276e0737c5453c7f8d87"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "a17cfcad1fc5315877016e0f05dd20d8"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "fd04322565debe0143769a23fa629843"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "efd50413026f2fd87c60bc714344e429"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "f04c25ec5680b7d684bc22e8016655b8"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "27bfcfd7fd3990517de1c8d4b92879ce"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "81624301b1a5c3ad66abef3c66417b35"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "fdc624dafdb0f77c0f5d11c7224815cd"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "5c9bd7f26ce5ff402bf391f3320d211f"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "33928c991308c68b7a7b10a73e9f63f5"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "3375318afc3ba4a3ac31c7240a1fa884"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "57de40ffc3d99ed29590e5f1bf773985"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "194cae8c469832549785523531ec5fee"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "b93fa5d4ded723b40875c9d1e4db88cc"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "9ab9b30f090a48ffbb135876bb8657ba"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "e9a3c04bbd11cc769ff17fcb0324ea59"
  },
  {
    "url": "404.html",
    "revision": "12625a1aecc7799077a353b37e17176e"
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
    "url": "assets/img/custom-shoes.3855e8a7.png",
    "revision": "3855e8a774d155b4316a5c8cd91af44d"
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
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.a3515124.js",
    "revision": "a1581ed39ebe627c964c071d253c3bbe"
  },
  {
    "url": "assets/js/10.fe4368c1.js",
    "revision": "6346b4aced26529aac4cadd59898a3cc"
  },
  {
    "url": "assets/js/100.ce4a5e2b.js",
    "revision": "a49b47d2bd007ee86cb2b51fae6b7f35"
  },
  {
    "url": "assets/js/101.e911d61d.js",
    "revision": "1e86c262a988d884f7fd5cfc69bbfe8f"
  },
  {
    "url": "assets/js/102.de28ec72.js",
    "revision": "3135dde18fe5a8f45551c5c4da0e8e75"
  },
  {
    "url": "assets/js/103.051990f7.js",
    "revision": "89365721f11810fd2b12e6cea9192b5e"
  },
  {
    "url": "assets/js/104.56a18cf6.js",
    "revision": "b1f5563abde3f37ccb2c6610decc677c"
  },
  {
    "url": "assets/js/105.1843ad55.js",
    "revision": "c7abfa91239e39ff435e51c3b9a127c0"
  },
  {
    "url": "assets/js/106.8213fac9.js",
    "revision": "13a33e01e4ab2af68848938b57ba3765"
  },
  {
    "url": "assets/js/107.5c3f89dd.js",
    "revision": "282446867e3177961f929c24d20e2b35"
  },
  {
    "url": "assets/js/108.8795dca0.js",
    "revision": "115b0f1cb7cd08838abcaaae6e1eb1bc"
  },
  {
    "url": "assets/js/109.9e986bf2.js",
    "revision": "583cdbbfa8de2fdec3443a766b0930ab"
  },
  {
    "url": "assets/js/11.f1760974.js",
    "revision": "b4916b1d25efa6d54f476f1ffed63c11"
  },
  {
    "url": "assets/js/110.a4c591f0.js",
    "revision": "b4a7ea0ff524378a3c4472b3e434f73a"
  },
  {
    "url": "assets/js/111.3584a78b.js",
    "revision": "ea8ad61523e4613d5d9b3cd18db57005"
  },
  {
    "url": "assets/js/112.56b212ed.js",
    "revision": "68a59c8e06a50c19cb1b25f676a81ea5"
  },
  {
    "url": "assets/js/113.88439e26.js",
    "revision": "01b01355c6317338bda2967105ff01ea"
  },
  {
    "url": "assets/js/114.3eaf10f8.js",
    "revision": "b714eb453251e4a08417aee5ca20e0ed"
  },
  {
    "url": "assets/js/115.0da5fabb.js",
    "revision": "e1ef2b18ffe9506da940cf53f1b29249"
  },
  {
    "url": "assets/js/116.92a3ef99.js",
    "revision": "270cad744eff085f0de6e51a28a20cb7"
  },
  {
    "url": "assets/js/117.05318cac.js",
    "revision": "c1310e6ab0319b3f2b11ba9fd7343818"
  },
  {
    "url": "assets/js/118.5942e88f.js",
    "revision": "d0b2a127afee07f108920be97f138c53"
  },
  {
    "url": "assets/js/119.f8b2fb3f.js",
    "revision": "428cd7fba82c24d3aaba2ca9754e5ffd"
  },
  {
    "url": "assets/js/12.3714cc7d.js",
    "revision": "a18d1f5a37b7d2774977754e01b40247"
  },
  {
    "url": "assets/js/120.a6e6d1a8.js",
    "revision": "26f767e920a573219d279139f9f16a44"
  },
  {
    "url": "assets/js/121.de713258.js",
    "revision": "60e4172c7621e086cf4fbb45d2771b42"
  },
  {
    "url": "assets/js/122.78e165cb.js",
    "revision": "935c66263ebf2a8c831705c12aa7f704"
  },
  {
    "url": "assets/js/123.3eebf152.js",
    "revision": "40663f0330841bee44356135f3968115"
  },
  {
    "url": "assets/js/124.beb2ff6b.js",
    "revision": "518d8a283ad0ca117200f8b6907c7adc"
  },
  {
    "url": "assets/js/125.03e87543.js",
    "revision": "3058a2f45cc06bf50820bde2dd906dca"
  },
  {
    "url": "assets/js/126.6056aeb2.js",
    "revision": "dd87bc6095f1b1144a8400f2aad97398"
  },
  {
    "url": "assets/js/127.b8a980f4.js",
    "revision": "8fb67afc2783ed3d19c87a87d2cbe876"
  },
  {
    "url": "assets/js/128.1b241916.js",
    "revision": "f27736ef960396d3c76c94e5800fe3cb"
  },
  {
    "url": "assets/js/129.da42defb.js",
    "revision": "52880f92105b65ab4735cab5972f4ad5"
  },
  {
    "url": "assets/js/13.e8784199.js",
    "revision": "805547c3e184552b3f8462ab756da143"
  },
  {
    "url": "assets/js/130.a12f94c8.js",
    "revision": "26164206c99ead8dc54102cbb99a2ffc"
  },
  {
    "url": "assets/js/131.e5ab3187.js",
    "revision": "003fb46a693d586a9a86cdc89fbeac30"
  },
  {
    "url": "assets/js/132.94a0816e.js",
    "revision": "67578030a4a012bc3d19711d965117f4"
  },
  {
    "url": "assets/js/133.b0cdaf84.js",
    "revision": "2efa273f206af2c95ead153d8271e55e"
  },
  {
    "url": "assets/js/134.f241fa2c.js",
    "revision": "f8a3966447e475c555ae27722abbfcde"
  },
  {
    "url": "assets/js/135.db42866d.js",
    "revision": "4d3e519c426f6b5a46aaf0f0e554bd38"
  },
  {
    "url": "assets/js/136.1df5fd30.js",
    "revision": "8941405246375ec489b6e41d3dca079b"
  },
  {
    "url": "assets/js/137.80b5c90a.js",
    "revision": "2bd0a000eb5a78e1ed0e05145be2f2e5"
  },
  {
    "url": "assets/js/138.ec8d0dec.js",
    "revision": "ebb2e751dacda707c760f6f589ae101d"
  },
  {
    "url": "assets/js/139.d393d641.js",
    "revision": "2cee0fd6bfea002d9cba119a09422fe8"
  },
  {
    "url": "assets/js/14.ebfd7259.js",
    "revision": "114d97c0511a86fa2aa3f4663e929ff1"
  },
  {
    "url": "assets/js/140.da65abd9.js",
    "revision": "00c7fee0dfce623570f3f67cb10950d8"
  },
  {
    "url": "assets/js/141.167ca09d.js",
    "revision": "0b6386a1330d2ee9ea6770e01378e8a6"
  },
  {
    "url": "assets/js/142.d67200aa.js",
    "revision": "b631d9ab3ac7307acf69232a4707d2b5"
  },
  {
    "url": "assets/js/143.7930e988.js",
    "revision": "9e2f6ca16b8fc264024600b53949ca4c"
  },
  {
    "url": "assets/js/144.3627e7b4.js",
    "revision": "7953c9173ce21927047f60db30a724d3"
  },
  {
    "url": "assets/js/145.2b760725.js",
    "revision": "56be0fdb47ef258e872c1b67f13a9e81"
  },
  {
    "url": "assets/js/146.1a1fe556.js",
    "revision": "2138e454a34da78bf3378d307f897fac"
  },
  {
    "url": "assets/js/147.51468faa.js",
    "revision": "400ede46f1af35347a829be0e33aea2c"
  },
  {
    "url": "assets/js/148.64324402.js",
    "revision": "77ee76475cac39f3725c0e63c23345b2"
  },
  {
    "url": "assets/js/149.d618a728.js",
    "revision": "cc2938cbddfd9900649525979de5f39e"
  },
  {
    "url": "assets/js/15.4717a990.js",
    "revision": "8a96439582151e661e3b411bafc15d2f"
  },
  {
    "url": "assets/js/150.22e21d62.js",
    "revision": "41b6b22db469aeaf8005d8097eba84c6"
  },
  {
    "url": "assets/js/151.91ff1b73.js",
    "revision": "45a5ae6120fa8a90dc1586ad08d3b88d"
  },
  {
    "url": "assets/js/152.cf626956.js",
    "revision": "425e9d4b753bb8c0c2abe7a554279227"
  },
  {
    "url": "assets/js/153.c8f9b2eb.js",
    "revision": "e97634356d0bf44f52fd0f979701ef60"
  },
  {
    "url": "assets/js/154.95953c48.js",
    "revision": "ed7004ac642275847dda88cf71dad6e0"
  },
  {
    "url": "assets/js/155.77cbb2b4.js",
    "revision": "92c66b1fb145e4f585db9e042103a6b4"
  },
  {
    "url": "assets/js/156.f3909f51.js",
    "revision": "afe561f190b2706371466973a351a0cc"
  },
  {
    "url": "assets/js/157.414f66cc.js",
    "revision": "ddad0a47b8c18733911e1806d435f7fa"
  },
  {
    "url": "assets/js/158.daf995e2.js",
    "revision": "3f99dc68ab75627643e971039bb864d0"
  },
  {
    "url": "assets/js/159.8055034c.js",
    "revision": "04ff283ee7e1bede9034f62855dbb47d"
  },
  {
    "url": "assets/js/16.cf94c97d.js",
    "revision": "02fe934b26825f3fd3950ff28009ba69"
  },
  {
    "url": "assets/js/160.02f55eef.js",
    "revision": "1386f8fb975587e9f6291c6bfd2acf1e"
  },
  {
    "url": "assets/js/161.13f23327.js",
    "revision": "37099113a9cec58544bc5c11dc0e049d"
  },
  {
    "url": "assets/js/162.f36a20df.js",
    "revision": "05e940ce1ae4678f20745bae787a55a8"
  },
  {
    "url": "assets/js/163.f79c6261.js",
    "revision": "999ff0ecbe92ccd69707a080f294631b"
  },
  {
    "url": "assets/js/164.18a4ef96.js",
    "revision": "68735a20a08d67e61ee7903f7dd104ef"
  },
  {
    "url": "assets/js/165.82c5a894.js",
    "revision": "b6c289341ffa2354913ee5285922ed44"
  },
  {
    "url": "assets/js/166.c1bf6f3c.js",
    "revision": "98fb6105c3af9d11cc3571f5f0aed88c"
  },
  {
    "url": "assets/js/167.3bbb3b44.js",
    "revision": "56a7e2bc20a65af94b28049275a1501e"
  },
  {
    "url": "assets/js/168.bba9c8cc.js",
    "revision": "3e55295fe5a85161c7f607eb2b698b67"
  },
  {
    "url": "assets/js/169.b23bc028.js",
    "revision": "8cd499385daab8187164a2ed31d0ae80"
  },
  {
    "url": "assets/js/17.717b47b0.js",
    "revision": "0297334c24038a8f8d39309decdd3e15"
  },
  {
    "url": "assets/js/170.5448ca75.js",
    "revision": "8cca1b13d7bb486be0c00062c7a63f61"
  },
  {
    "url": "assets/js/171.978ad439.js",
    "revision": "5bbf8afe3d5d8c47f41b3e0cb18e3ad0"
  },
  {
    "url": "assets/js/172.ea5f795f.js",
    "revision": "c3df7fbaa1f80fdf4e9f5fe62a6bdde4"
  },
  {
    "url": "assets/js/173.a2fb09bb.js",
    "revision": "06e8989c181dd8cdd0c31809f7546d28"
  },
  {
    "url": "assets/js/174.0fcd4366.js",
    "revision": "f3666680c509fe2f4f1ec0f86270bafe"
  },
  {
    "url": "assets/js/175.c29067a3.js",
    "revision": "b1bf88bbbd81c3162fc519e86ad7ba1b"
  },
  {
    "url": "assets/js/176.c0e89e8e.js",
    "revision": "e929924a303e15f262eb9f0ffbe59ef5"
  },
  {
    "url": "assets/js/177.f57661fc.js",
    "revision": "b7ece247651fe86c5b0b946164d86f9e"
  },
  {
    "url": "assets/js/178.4907bbe5.js",
    "revision": "9f035da287ecab0e4d6fde6a1352ae46"
  },
  {
    "url": "assets/js/179.fd602f74.js",
    "revision": "703293cbf745fb0a4a671eee5e8f3d8e"
  },
  {
    "url": "assets/js/18.f41ddaf5.js",
    "revision": "9ad1c14d11f5bdc4ff6d60a8a705bc45"
  },
  {
    "url": "assets/js/180.ea52d64b.js",
    "revision": "206628730bab575c9808288d441d1860"
  },
  {
    "url": "assets/js/181.0d317e4c.js",
    "revision": "fe097c0dedbb441bdf2b3a015ac4c9c5"
  },
  {
    "url": "assets/js/182.f0876d76.js",
    "revision": "e2970c27be7fead5e23d3047b67328b0"
  },
  {
    "url": "assets/js/183.64dca019.js",
    "revision": "ad5e506083f70081b267bd6fd584b518"
  },
  {
    "url": "assets/js/184.7ddf81be.js",
    "revision": "be29006a63e78a09361dd9e7ecb931b3"
  },
  {
    "url": "assets/js/185.f21a8764.js",
    "revision": "b6db4c43b9bf3013e5205a4a9d8294f4"
  },
  {
    "url": "assets/js/186.31bdacd1.js",
    "revision": "f0f469caedbd5a2a1f3de8c456648807"
  },
  {
    "url": "assets/js/187.900fe366.js",
    "revision": "e9f7f3e4b9851e62b6b9d84d579b24f8"
  },
  {
    "url": "assets/js/188.de05696b.js",
    "revision": "1fce0b027cf9d3f6c20fb3370c035e4a"
  },
  {
    "url": "assets/js/189.3bb43c9a.js",
    "revision": "07e21800e140a2cde8ba1547fa7eff28"
  },
  {
    "url": "assets/js/19.307890a2.js",
    "revision": "ace5ecaf89254ebac00f2cd74b6dca5c"
  },
  {
    "url": "assets/js/190.dbc1fe5c.js",
    "revision": "4fe0b1dc30810471e4e028f65f8bcfa5"
  },
  {
    "url": "assets/js/191.c4f72245.js",
    "revision": "119c5156feeb3cfe998668d3ca7b1258"
  },
  {
    "url": "assets/js/192.51c9a731.js",
    "revision": "ae9bccec28dc6465bb15ca57fa343c6a"
  },
  {
    "url": "assets/js/193.83e56412.js",
    "revision": "67591d0e3319efbc6123ea78bb99f7d1"
  },
  {
    "url": "assets/js/194.8c1cd32c.js",
    "revision": "9be752e7cce0e572464c6ba25d233fc5"
  },
  {
    "url": "assets/js/195.b8add058.js",
    "revision": "a249d57f16ed05a95d2a35550cee0537"
  },
  {
    "url": "assets/js/196.4576dea8.js",
    "revision": "d82fcb8375017377cc5170f9bb3e2d11"
  },
  {
    "url": "assets/js/197.cb7e65f8.js",
    "revision": "6a31e130bb0fdb0896f2b8fa098ab561"
  },
  {
    "url": "assets/js/198.ea5b86c8.js",
    "revision": "16c97fe9e421d23b253e9a0d50b10fb6"
  },
  {
    "url": "assets/js/199.b8a5a17a.js",
    "revision": "3a4850b9bb4b5f61f3c66b09ca83fccb"
  },
  {
    "url": "assets/js/2.26ab0ac5.js",
    "revision": "61fb346c427589eca8a6aa0ee95db2b9"
  },
  {
    "url": "assets/js/20.3ea7b80b.js",
    "revision": "d94bba368dcf3b6ec11a4125f062998a"
  },
  {
    "url": "assets/js/200.7d10d5fc.js",
    "revision": "2ea395a7ae9f7c56755ae8a169a05fb4"
  },
  {
    "url": "assets/js/201.cc83ed54.js",
    "revision": "8a30718140703be51d99c7abf3042a6d"
  },
  {
    "url": "assets/js/202.4a02260b.js",
    "revision": "862e225da67f79d0812f0953bc392e19"
  },
  {
    "url": "assets/js/203.5013b1c0.js",
    "revision": "0127d88abea3a55af32c2ce25156aeb8"
  },
  {
    "url": "assets/js/204.df13b2f3.js",
    "revision": "e41d3f1d06557ad8178f5a73073e4c75"
  },
  {
    "url": "assets/js/205.033baf77.js",
    "revision": "4f595cea2ee16b5c959029f4efdaf89c"
  },
  {
    "url": "assets/js/206.30557670.js",
    "revision": "576fe8945504252a26360ccdaf34a144"
  },
  {
    "url": "assets/js/207.b6f80cb4.js",
    "revision": "a08e94a8140adf7ea14117ffeaac2dd2"
  },
  {
    "url": "assets/js/208.bbd45030.js",
    "revision": "913f6070251a5290bb42ad1987c7c600"
  },
  {
    "url": "assets/js/209.7c76d577.js",
    "revision": "2f95d90577d745b31210181789581120"
  },
  {
    "url": "assets/js/21.89ddb6de.js",
    "revision": "2d06c36fa0d62874b94486561eb68858"
  },
  {
    "url": "assets/js/210.37c86ad9.js",
    "revision": "c815483e56af6230c7921f642b8615af"
  },
  {
    "url": "assets/js/211.12fc3e90.js",
    "revision": "7076b829cded8cfe80feca277cf2e5a1"
  },
  {
    "url": "assets/js/212.96bffedc.js",
    "revision": "8b0a0e292cb13b4c48d6c64bbcaf1921"
  },
  {
    "url": "assets/js/213.b58f5854.js",
    "revision": "6a20bdca0119f4542f0170d40eef6bd2"
  },
  {
    "url": "assets/js/214.8b6eb805.js",
    "revision": "1da0033a947f4375145cf2c4abee01d2"
  },
  {
    "url": "assets/js/215.34bf9c3d.js",
    "revision": "f5e05ac32b6c1f853530552151554133"
  },
  {
    "url": "assets/js/216.f20508e8.js",
    "revision": "e3a0f58b2273d4fca5ba89884ef000d3"
  },
  {
    "url": "assets/js/217.78b92487.js",
    "revision": "003bf4cdbfae7aa1bae0f4bfff098b5a"
  },
  {
    "url": "assets/js/218.a8bd7b5c.js",
    "revision": "8501e9c68fa4d1d69e07c02e96d828ae"
  },
  {
    "url": "assets/js/219.dd5c0e19.js",
    "revision": "f426b97a7ce7fd732b76b3756967c279"
  },
  {
    "url": "assets/js/22.4beed04f.js",
    "revision": "1e9583bf6f14e469b5a15bdbafa5e01a"
  },
  {
    "url": "assets/js/220.3314c9eb.js",
    "revision": "0e81c5ad9cdef48a64e9cea3cf1ae50e"
  },
  {
    "url": "assets/js/221.e29df8a1.js",
    "revision": "2e010f3d92889412c4407c5c932616bf"
  },
  {
    "url": "assets/js/222.6ba60a55.js",
    "revision": "fbfe6076df03a8ce588ff57f95d1947d"
  },
  {
    "url": "assets/js/223.d65599d9.js",
    "revision": "8efc8d9ffbd3c748a58a19e8735b74a7"
  },
  {
    "url": "assets/js/224.67477942.js",
    "revision": "90538d3b886d7bebea2550c708a477fa"
  },
  {
    "url": "assets/js/225.6d51dd84.js",
    "revision": "b635e294deb8a6656e4d2a967ae30a30"
  },
  {
    "url": "assets/js/226.2ac91895.js",
    "revision": "aa09bbda570da347b75a57dbb8966dce"
  },
  {
    "url": "assets/js/227.b6867c85.js",
    "revision": "a431fdaa30acff34115c84b944e5a284"
  },
  {
    "url": "assets/js/228.d0d08bc2.js",
    "revision": "cdef3116fb40cc9ae83efab3f2c328ec"
  },
  {
    "url": "assets/js/229.5666f5d6.js",
    "revision": "fbad0ab6581e25559e5273f0f2d18311"
  },
  {
    "url": "assets/js/23.578e9d85.js",
    "revision": "ed24ebcc867f01fde5c09872315d8c1b"
  },
  {
    "url": "assets/js/230.d9ee3c0d.js",
    "revision": "5640417731f526c377761a186f5ea4e8"
  },
  {
    "url": "assets/js/231.e7934eb2.js",
    "revision": "4a54260632aba192743b0adaf55475de"
  },
  {
    "url": "assets/js/232.a1200dd8.js",
    "revision": "74496b5f16202a9e9b7867569311cc09"
  },
  {
    "url": "assets/js/233.80b1e5b3.js",
    "revision": "c60a66d67af48986e59c8726781f36fb"
  },
  {
    "url": "assets/js/234.df8d5ae1.js",
    "revision": "4fa61263b529c40f42dc3a64b237c9a4"
  },
  {
    "url": "assets/js/235.29b5abbf.js",
    "revision": "08defff83edd86b072bc1790cf2cfd0d"
  },
  {
    "url": "assets/js/236.f2418528.js",
    "revision": "7040180f07f39b3bc8b438b5f1af7275"
  },
  {
    "url": "assets/js/237.a75fabf7.js",
    "revision": "d375b037538052927c26a64cb23434f4"
  },
  {
    "url": "assets/js/238.0204a446.js",
    "revision": "5d1f1f2a32116b0a375bb9324f2b7af3"
  },
  {
    "url": "assets/js/239.ef06740c.js",
    "revision": "deb54425a9e629295cc050ee92599345"
  },
  {
    "url": "assets/js/24.51dae725.js",
    "revision": "111bf2062c2f25aa6f4ffbd1e35b100f"
  },
  {
    "url": "assets/js/240.71741868.js",
    "revision": "ac31a6b96bf8640143ee54cc702c503a"
  },
  {
    "url": "assets/js/241.c97ec0da.js",
    "revision": "3c3a83e8b35c72b5d0212260cf8442b2"
  },
  {
    "url": "assets/js/242.c7a3812b.js",
    "revision": "a6a517035fbaf317d7ff998a9da68e69"
  },
  {
    "url": "assets/js/243.c1225b4f.js",
    "revision": "e00f8f6bd91dc47630a24ebd5dab4645"
  },
  {
    "url": "assets/js/244.ae2c5a95.js",
    "revision": "cccf7e3293df53180398b263935c44ee"
  },
  {
    "url": "assets/js/245.29bd34b5.js",
    "revision": "fe18f010b3c1f576848ad1554d1e84af"
  },
  {
    "url": "assets/js/246.b8d28525.js",
    "revision": "36cace40f62514cacb30374e8be4a235"
  },
  {
    "url": "assets/js/247.ef60f5f2.js",
    "revision": "78cbd42366cfa445876eba36debc83c3"
  },
  {
    "url": "assets/js/248.0aeef4e9.js",
    "revision": "c2d2ddb0ab260a9d138644c23f56e4ab"
  },
  {
    "url": "assets/js/249.dbbd6179.js",
    "revision": "3d77980e43af82026e47cad0aa5b099d"
  },
  {
    "url": "assets/js/25.d7354b6f.js",
    "revision": "ee2f9609152ae237a298671e91942adf"
  },
  {
    "url": "assets/js/250.7d95982f.js",
    "revision": "ac40fce17f035ae3c776a028a1e65949"
  },
  {
    "url": "assets/js/251.e1f3824c.js",
    "revision": "3cf4b35b96cb44afb9aeabd46023e1b4"
  },
  {
    "url": "assets/js/252.c4d44960.js",
    "revision": "5fc8448715b50fe879c31b5f1abfcf5a"
  },
  {
    "url": "assets/js/253.5d930090.js",
    "revision": "cd68a4124a7971dd60202dadda2503f5"
  },
  {
    "url": "assets/js/254.8c89e590.js",
    "revision": "78c069a2a8e72cb3c97df6047af2c9f9"
  },
  {
    "url": "assets/js/255.5334e2a8.js",
    "revision": "6a794ffea55a65a64fa346d9c17db84b"
  },
  {
    "url": "assets/js/256.fd6d59ab.js",
    "revision": "ea2fe56f0d8bcb4e81adc7783b479242"
  },
  {
    "url": "assets/js/257.c5bbacd5.js",
    "revision": "5537f57b6884b2971ac4b88f5655513f"
  },
  {
    "url": "assets/js/258.63e4c866.js",
    "revision": "e2c713afcce19c90e0c599379f0ecc2c"
  },
  {
    "url": "assets/js/259.a1f516d6.js",
    "revision": "360e19b8325db78b3410ebc4fcfb10d0"
  },
  {
    "url": "assets/js/26.ce24c2cf.js",
    "revision": "38163b9d2f7c441227f05a23680ff593"
  },
  {
    "url": "assets/js/260.20dafa39.js",
    "revision": "72b16b0096c512e5292226739b9ad75c"
  },
  {
    "url": "assets/js/261.10f185fa.js",
    "revision": "4a0fb4cdd07468b9490655fd2d23915b"
  },
  {
    "url": "assets/js/262.c7778ed3.js",
    "revision": "d65edf242ec2c093881c4511a375fdb9"
  },
  {
    "url": "assets/js/263.cc1017ff.js",
    "revision": "ab05cb74a5a9047d9f17f8b7e9d7c570"
  },
  {
    "url": "assets/js/264.7c02f638.js",
    "revision": "db3b454072477287777bff325101174b"
  },
  {
    "url": "assets/js/265.f4cb2b25.js",
    "revision": "2a30a6e56618c47a034dbc0931c59dd7"
  },
  {
    "url": "assets/js/266.e869ff1d.js",
    "revision": "8602972948723a80f1b818333417ebe1"
  },
  {
    "url": "assets/js/267.39b03a47.js",
    "revision": "e1ea3b65088840bc35e3b3392910b9cc"
  },
  {
    "url": "assets/js/268.01c19dce.js",
    "revision": "2f296e37d73fb0af56bdecddda11ca9f"
  },
  {
    "url": "assets/js/269.450f1a4c.js",
    "revision": "73286d3e99036c91d75f7bfadcf5cd4d"
  },
  {
    "url": "assets/js/27.6ba66ce9.js",
    "revision": "6c13c251fcbb40c276f889310740cf2d"
  },
  {
    "url": "assets/js/270.f15cdbed.js",
    "revision": "75a836aa0fa523404471d654fcae75af"
  },
  {
    "url": "assets/js/271.01e41f08.js",
    "revision": "ebd958c6fde8f1a0681e2e2fafbb46c8"
  },
  {
    "url": "assets/js/272.4aba722b.js",
    "revision": "2128c732a0885b6fef3237aafc762139"
  },
  {
    "url": "assets/js/273.09a625df.js",
    "revision": "d2d0665e0408a3ebe376f5ec2536218c"
  },
  {
    "url": "assets/js/274.8edb1ab0.js",
    "revision": "b5cca5cb110db6ab4c42662f06813f43"
  },
  {
    "url": "assets/js/275.f84c7515.js",
    "revision": "fda27041eb2827efa5db9a8f1b017b3f"
  },
  {
    "url": "assets/js/276.d8d89f2b.js",
    "revision": "aebe4281b814c5aa903b260c40955fe8"
  },
  {
    "url": "assets/js/277.81572df5.js",
    "revision": "3d919566f98961b8e573504dc242edb6"
  },
  {
    "url": "assets/js/278.708b2cd1.js",
    "revision": "9f5cc88d889d6630ace701b2cc5574e5"
  },
  {
    "url": "assets/js/279.7bae34b4.js",
    "revision": "c00ae90ef95400c0be12855921529b2c"
  },
  {
    "url": "assets/js/28.a0d9be27.js",
    "revision": "7f534703d636fe1533681f5704ad5d50"
  },
  {
    "url": "assets/js/280.24b78351.js",
    "revision": "de4678348a7fdb0ef0b7112fc89d5a22"
  },
  {
    "url": "assets/js/281.909da8cb.js",
    "revision": "161a3a8f089ab2e3cc46b0e034807693"
  },
  {
    "url": "assets/js/282.6a97ee47.js",
    "revision": "111071934c7a6d472e2cc21218ea8622"
  },
  {
    "url": "assets/js/283.fa22d101.js",
    "revision": "5cafd9f338ff8f868b1f2f245afc9045"
  },
  {
    "url": "assets/js/284.b8952acf.js",
    "revision": "0658cd79696e8287e7dafda0782b6a5a"
  },
  {
    "url": "assets/js/285.6151f5bc.js",
    "revision": "fb00a9ee87a1885a4c28dec7c31e1ef8"
  },
  {
    "url": "assets/js/286.61fcc210.js",
    "revision": "fd5ff3219c213a438adf9ad44b935b43"
  },
  {
    "url": "assets/js/287.84c45dcf.js",
    "revision": "0c0d41955a6e387443e9debc83a853b5"
  },
  {
    "url": "assets/js/288.6fd5e4fc.js",
    "revision": "b65f3eabb7bae0bfb00c42abb3759c62"
  },
  {
    "url": "assets/js/289.e84969e2.js",
    "revision": "d8ee5745e9f69d46262ffe77a73e5093"
  },
  {
    "url": "assets/js/29.15653bab.js",
    "revision": "933fd3fb7db7a76beb6ad8451f3e8142"
  },
  {
    "url": "assets/js/290.6dedf408.js",
    "revision": "66f6886115cf6555f408c7e0faaaf050"
  },
  {
    "url": "assets/js/291.2c09314f.js",
    "revision": "ba94c3572e44d057b12f8e7ba119559b"
  },
  {
    "url": "assets/js/292.c0aa9e1a.js",
    "revision": "ba1586f534a7b752b7a1c3021fd147a2"
  },
  {
    "url": "assets/js/293.522cb02a.js",
    "revision": "e55e475e43e9bbb424b3c8e2a84faba4"
  },
  {
    "url": "assets/js/294.76483e4d.js",
    "revision": "3dfdf6f101d8d1e80b67d9d3f6c12fd0"
  },
  {
    "url": "assets/js/295.0fca52c0.js",
    "revision": "3398fe0ec578c09290825f5a089b3961"
  },
  {
    "url": "assets/js/296.b078bcdd.js",
    "revision": "b8a741ca7cd9a1dfd57601518035ae74"
  },
  {
    "url": "assets/js/297.3768914d.js",
    "revision": "e8520567590b765491d8af8a10b5e6f0"
  },
  {
    "url": "assets/js/298.68d112d2.js",
    "revision": "fbd01da697eaf67001838e558bb76f4c"
  },
  {
    "url": "assets/js/299.588539a1.js",
    "revision": "a58ff620c7ad005942c2230e0de21328"
  },
  {
    "url": "assets/js/3.856abb99.js",
    "revision": "885cfe56943adc2d4dd06ab547a8ac2a"
  },
  {
    "url": "assets/js/30.9b125777.js",
    "revision": "464858f167577dcf1c9295c37a0cd354"
  },
  {
    "url": "assets/js/300.a7621c71.js",
    "revision": "135403ee131c0ef3215d227554f5c89d"
  },
  {
    "url": "assets/js/301.27a1a403.js",
    "revision": "d850bb1dd31d7d4d374bfdf9ed1c54d6"
  },
  {
    "url": "assets/js/302.a740a0eb.js",
    "revision": "dff804b783da50548f2ff484661ae57a"
  },
  {
    "url": "assets/js/303.fbd012be.js",
    "revision": "b57d023b5ac2ce6e17630ea2d947312c"
  },
  {
    "url": "assets/js/304.61adb7e6.js",
    "revision": "b8bf40613a34367ba18236391f872b3d"
  },
  {
    "url": "assets/js/305.cfa70f91.js",
    "revision": "52cfb619c92c1ab958f9782600d2a226"
  },
  {
    "url": "assets/js/306.c7c660e5.js",
    "revision": "deffcca66b187519d5b8ee04c00ffa3f"
  },
  {
    "url": "assets/js/307.2320f856.js",
    "revision": "128543b173d727acb8f01a0af6ac58b3"
  },
  {
    "url": "assets/js/308.2133bc0b.js",
    "revision": "db5dec2dbaddc8dc78fb7850d903608f"
  },
  {
    "url": "assets/js/309.3518aa87.js",
    "revision": "9b28aed961a26cd2c34332126c8ea21c"
  },
  {
    "url": "assets/js/31.e1ef93d0.js",
    "revision": "47fa045b00cf8afd8c86272355729fe3"
  },
  {
    "url": "assets/js/310.24214f0b.js",
    "revision": "2c6d7f61b495dd35474842f10e52691b"
  },
  {
    "url": "assets/js/311.5e2c552d.js",
    "revision": "f870dbcdca4d64552b8ff76fbbb4902d"
  },
  {
    "url": "assets/js/312.d6ec834d.js",
    "revision": "6d1ef461a3fdcbe254d00c373680ebaa"
  },
  {
    "url": "assets/js/313.1c7afc8b.js",
    "revision": "7f64897da0382f10f9ba2a979bee0af0"
  },
  {
    "url": "assets/js/314.474d182f.js",
    "revision": "f4f714b19f57860573b265657a3b91cf"
  },
  {
    "url": "assets/js/315.62dd7eb1.js",
    "revision": "ffd0ab1efcd6b6165e8b75188cedbee4"
  },
  {
    "url": "assets/js/316.7d8ddf7c.js",
    "revision": "b2b43e58a5d69515c3049d6ab69261ee"
  },
  {
    "url": "assets/js/317.1f8934c1.js",
    "revision": "00ef721f747e5398f13cdaf8a4976f24"
  },
  {
    "url": "assets/js/318.0a75799f.js",
    "revision": "d47dc41ebbfba55ff7b91188c33c4362"
  },
  {
    "url": "assets/js/319.c822caf5.js",
    "revision": "351ddae3d77d2864f36965c7f3326795"
  },
  {
    "url": "assets/js/32.e3d8178f.js",
    "revision": "55c52b04487a937a5bf37341d71aacda"
  },
  {
    "url": "assets/js/320.a821919b.js",
    "revision": "53bc1243c0aeac2d981d749c5342bee8"
  },
  {
    "url": "assets/js/321.6baeda4d.js",
    "revision": "a9f06cdb03f75d799550af23805f5b99"
  },
  {
    "url": "assets/js/322.1a659a04.js",
    "revision": "78bd5920d505fb25b2c6c9290f97a312"
  },
  {
    "url": "assets/js/323.f50a16c3.js",
    "revision": "71d8f6aacb947b75a8c6f6ab60dee455"
  },
  {
    "url": "assets/js/324.53eb22a4.js",
    "revision": "723f0018bbaac6d75e3a7eb9ba2779fb"
  },
  {
    "url": "assets/js/325.28d7da61.js",
    "revision": "d7441112b38e38cb1914f18d35e74ac1"
  },
  {
    "url": "assets/js/326.5d2b25f4.js",
    "revision": "e65ec4d0c6628d10dde51ba100bcc39c"
  },
  {
    "url": "assets/js/327.e58206b9.js",
    "revision": "947f1a873df835a8cf02e7bf3c652ade"
  },
  {
    "url": "assets/js/328.d5eb3685.js",
    "revision": "d8480e07f45a5b190afc1a8646715dd1"
  },
  {
    "url": "assets/js/329.4b7e9c4c.js",
    "revision": "be3644e7eb34b53c2a1050ef559cf113"
  },
  {
    "url": "assets/js/33.3f84ae42.js",
    "revision": "15c154913aba25944d36f863cad3a6f7"
  },
  {
    "url": "assets/js/330.02610a38.js",
    "revision": "510ea068c1730a2545c40f3536d414bf"
  },
  {
    "url": "assets/js/331.461734af.js",
    "revision": "9f157e52c8152c56bab986ace98a8fc0"
  },
  {
    "url": "assets/js/332.e85d111f.js",
    "revision": "b42f97d9bf3b4ee255f25277e874d1ac"
  },
  {
    "url": "assets/js/333.98f9e16e.js",
    "revision": "70bd85b0a5a4ca15d6fa1702ef037f65"
  },
  {
    "url": "assets/js/334.e8a8a949.js",
    "revision": "77bac6e0a281b3303fe453fb33480224"
  },
  {
    "url": "assets/js/335.301dc66c.js",
    "revision": "a992b523ca0cd778b26551c86f055d3e"
  },
  {
    "url": "assets/js/34.a31ff284.js",
    "revision": "23457e2ba0f838417821476b26850b75"
  },
  {
    "url": "assets/js/35.a9d4419f.js",
    "revision": "4f8a4289b093e8f900d62ec4a111a676"
  },
  {
    "url": "assets/js/36.9199c711.js",
    "revision": "919b92a5104469d55febf28f248d97a6"
  },
  {
    "url": "assets/js/37.765bd08c.js",
    "revision": "a2b16211f7d3a99ebf514099a2bbe4cf"
  },
  {
    "url": "assets/js/38.c44288ae.js",
    "revision": "31b460dea3828d6febdbe40dbb115da3"
  },
  {
    "url": "assets/js/39.bea87208.js",
    "revision": "d6639ae3360c34c0a5800eb9a2fd9e15"
  },
  {
    "url": "assets/js/4.79a07d11.js",
    "revision": "3cd1ea90ab90ecaa914113c0b2a06e8c"
  },
  {
    "url": "assets/js/40.f417586a.js",
    "revision": "ba172edc2d0f134329c2aa71057e7a63"
  },
  {
    "url": "assets/js/41.d943af51.js",
    "revision": "232b0aebeefabe6bfa661968d0900c4c"
  },
  {
    "url": "assets/js/42.7e067545.js",
    "revision": "d0f89a24ae2eb4bf305f731e9466e6aa"
  },
  {
    "url": "assets/js/43.172d4c18.js",
    "revision": "0d8ebde44a38f869a8de742ed7b95c3f"
  },
  {
    "url": "assets/js/44.8213f018.js",
    "revision": "745b84602433e9000f695b82b2d2155a"
  },
  {
    "url": "assets/js/45.89c7732d.js",
    "revision": "921bd8129132b6e74453a4ced685b6a1"
  },
  {
    "url": "assets/js/46.edf7cea6.js",
    "revision": "f443b757a7589f414b60fe97bd6db097"
  },
  {
    "url": "assets/js/47.23619a64.js",
    "revision": "bd2aa0cf5faf00c44a4c232975d2088c"
  },
  {
    "url": "assets/js/48.ce76b4bd.js",
    "revision": "bdb8c361d946fb7661944ec8032af41d"
  },
  {
    "url": "assets/js/49.4725500f.js",
    "revision": "6e85cd642fa614dedc7a17f142fa8670"
  },
  {
    "url": "assets/js/5.c23e9523.js",
    "revision": "462c8881d5380f52a1706f32615ac28a"
  },
  {
    "url": "assets/js/50.81b7dffb.js",
    "revision": "acd709645626acda22a85716c92ef619"
  },
  {
    "url": "assets/js/51.bfe6c5bc.js",
    "revision": "19a02c56659ef1370d5c8ac2564c388a"
  },
  {
    "url": "assets/js/52.b56e9591.js",
    "revision": "39c4a357313a3da1afc9da25820e9e95"
  },
  {
    "url": "assets/js/53.852579c2.js",
    "revision": "093e4c51d223b4ad359f130f4754cb20"
  },
  {
    "url": "assets/js/54.7ccc412f.js",
    "revision": "2e12453af50abcecbef0b193b1c34038"
  },
  {
    "url": "assets/js/55.e6ccef0e.js",
    "revision": "dd57caca72c5ac9464afe22d1697fbbc"
  },
  {
    "url": "assets/js/56.4b61a26c.js",
    "revision": "3805ed14468bf7e19dac195a8e1902b7"
  },
  {
    "url": "assets/js/57.6781562f.js",
    "revision": "b23f7fedfe2ef091cb8c8130c0f6b4b6"
  },
  {
    "url": "assets/js/58.81e28c88.js",
    "revision": "d802c040ac1f3b2f18d215cc36107587"
  },
  {
    "url": "assets/js/59.d756a31e.js",
    "revision": "791e6957ed0bc82d327c201baac32a58"
  },
  {
    "url": "assets/js/60.86915e7d.js",
    "revision": "cbb7cddd073c520ac3fcba740e237a85"
  },
  {
    "url": "assets/js/61.7962198c.js",
    "revision": "f5ee12049f4e2f93188f737fbca24348"
  },
  {
    "url": "assets/js/62.444f951f.js",
    "revision": "2c12dc61b1553d69e2bfb8561038d1df"
  },
  {
    "url": "assets/js/63.c429df59.js",
    "revision": "f0b2cb13bf50c5792ccc71dc05451072"
  },
  {
    "url": "assets/js/64.d06ce932.js",
    "revision": "75a91458da1608c8a7a5d0157eb137c8"
  },
  {
    "url": "assets/js/65.fbf1d100.js",
    "revision": "012a40c88b52df3f9850b6c23531a4f9"
  },
  {
    "url": "assets/js/66.64b5277d.js",
    "revision": "e282ef1013bfa5f7cfa6749c48f65dab"
  },
  {
    "url": "assets/js/67.3e53dc26.js",
    "revision": "794b7801e59e3aaf5e88f835a80c0f77"
  },
  {
    "url": "assets/js/68.d35c4898.js",
    "revision": "c7be955b90b5a0bf85f89d69c9fcc11b"
  },
  {
    "url": "assets/js/69.371746f0.js",
    "revision": "fe185583486487e216a0c6d3f19a4084"
  },
  {
    "url": "assets/js/70.69dcf696.js",
    "revision": "f8f3be1d906d594b4a0786c4e7352fa9"
  },
  {
    "url": "assets/js/71.f22a05f8.js",
    "revision": "f162d19dc11495fe5ce46757ad0a5d2c"
  },
  {
    "url": "assets/js/72.bf212f04.js",
    "revision": "edee5668dc58d266db0e8ef74c726d8b"
  },
  {
    "url": "assets/js/73.fca8164a.js",
    "revision": "10816bcc98b90913b75cfd2c4f67a8f7"
  },
  {
    "url": "assets/js/74.9cf29330.js",
    "revision": "3397c1f016271fc9b7ad0fa970e2afef"
  },
  {
    "url": "assets/js/75.6ed62e1c.js",
    "revision": "9d2d4a1a60f16ae42103722f77d95e66"
  },
  {
    "url": "assets/js/76.c0dbeb65.js",
    "revision": "679858d4eea4a4b8da6f9b89267f1a4f"
  },
  {
    "url": "assets/js/77.0f472d3d.js",
    "revision": "3518a34d8539f38cc16740d2f238e999"
  },
  {
    "url": "assets/js/78.2f69bce1.js",
    "revision": "5c33a4f6d0d49a75f59ae66f8c276ad4"
  },
  {
    "url": "assets/js/79.f22b5833.js",
    "revision": "b5726f9f5a05b25af12c1aacc1519711"
  },
  {
    "url": "assets/js/8.929d3b72.js",
    "revision": "31a6db00aa38bfa709cc9572e1703f0c"
  },
  {
    "url": "assets/js/80.a3fd0dbd.js",
    "revision": "b2a652de55839fb692b82c4a3f0cfec4"
  },
  {
    "url": "assets/js/81.bcc46f95.js",
    "revision": "5d6bfbda6dec491b472d06852a66b3b0"
  },
  {
    "url": "assets/js/82.91003780.js",
    "revision": "8ab5a1c51f6f7603d1dcc3acc2d02658"
  },
  {
    "url": "assets/js/83.d6e6514e.js",
    "revision": "3245fac2edef3444c6a175f05ef4b635"
  },
  {
    "url": "assets/js/84.9d60213e.js",
    "revision": "02a6ff3ab5d6068c7d71c7c8c5cc317f"
  },
  {
    "url": "assets/js/85.4dae7fc8.js",
    "revision": "703d13aa6ca9065d0cf9d90749b5f32e"
  },
  {
    "url": "assets/js/86.8c18d2f9.js",
    "revision": "52f8bf47e295845fa2451a4bf6f05048"
  },
  {
    "url": "assets/js/87.dbf8fefc.js",
    "revision": "b817a16c50b566148b8e62936f069ded"
  },
  {
    "url": "assets/js/88.2f22be4c.js",
    "revision": "07d7cab49113470f0acb250b9a91a4b4"
  },
  {
    "url": "assets/js/89.101b862c.js",
    "revision": "c990c3ece15f9f39ab4f75d82f9accd3"
  },
  {
    "url": "assets/js/9.4b4cb9bd.js",
    "revision": "bf9126c589569d29844025f947eba58f"
  },
  {
    "url": "assets/js/90.610904ec.js",
    "revision": "e04203dae7f163145288a0a33af3fe0a"
  },
  {
    "url": "assets/js/91.8054a60c.js",
    "revision": "e8bceb2f999db6d158b09f26565d6f6f"
  },
  {
    "url": "assets/js/92.abbe34c4.js",
    "revision": "f0b687c311063b9b9ed7a19da2f35517"
  },
  {
    "url": "assets/js/93.fd5d28c8.js",
    "revision": "f7e171e00347a059288d17d34b043278"
  },
  {
    "url": "assets/js/94.a259ebc3.js",
    "revision": "ed2eeaf843757d7813f2ecee8be5ed56"
  },
  {
    "url": "assets/js/95.2910f4f2.js",
    "revision": "ed423b3a2018d486bfd1d76c8515dbd0"
  },
  {
    "url": "assets/js/96.cc21796f.js",
    "revision": "27815991fed52c87430d088cfcee2ba0"
  },
  {
    "url": "assets/js/97.e5122423.js",
    "revision": "eacdb4414772fbfa390fed565fd1bf78"
  },
  {
    "url": "assets/js/98.5e4ec09f.js",
    "revision": "7a8259532bd5cfbe928e82fe0066f85d"
  },
  {
    "url": "assets/js/99.cd2eecfd.js",
    "revision": "afecd45ff3c0ecfac1e099a53e3fe30c"
  },
  {
    "url": "assets/js/app.77dff152.js",
    "revision": "6d0be2fb813a79181b811bfde56d1507"
  },
  {
    "url": "assets/js/vendors~docsearch.81480ac1.js",
    "revision": "1aadff6319be84a980db62a273947e75"
  },
  {
    "url": "index.html",
    "revision": "79d875e495eeac83d369d73538980ad4"
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
