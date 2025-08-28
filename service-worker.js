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
    "revision": "9ab7cc4e07f1f276df20977c68af1408"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "f99c3aa9de12f4641749aadf1a409f13"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "0d12ba7921b3cd70610433477f0844b3"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "32d561bf6505ecbf0027f1a25127a18f"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "599596480c7162a79b0c396b1612e9c7"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "6536bf57684968e97731fc085f5f5767"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "3f3a29818be46f8abfa1709f8b5ddad0"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "8b04ce2cf833cb87b0ed3694b2df8e36"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "12de7f28ff571edc8450b4d5e82c2280"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "f83dc5ffc3a747fc5715c8b58bbdeb07"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "43513e5f75519eeda47dea73a4aad8de"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "655d7f91f5e2594f7b77d1818998270e"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "b8dbe75eb0ca6d727dbca8b5286d9ab8"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "0c8a0f12024126588e4e759bf0b5fb47"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "a6e71669ab512a23ea4509b1db5d6957"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "5797ab784bfe110e43e91bb6694877b7"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "54d8eb65323e7256b0845b9ed0ce713a"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "c1d6965f179201ef7458dffccb80d4e3"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "c35ba64a49495af33876ea19d4441dce"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "852d80569f6959f77cd52384eb6f5a51"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "e31c3413948e31a5df73d8a93d05db05"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "742691a427030b97504e49a754f65bde"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "8d653fac119ff5a5dc893d85bc57d0b5"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "865459ebf05663cc5a63dd7c78dc616d"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "ef0d2145e1d2a9331236a919653ec177"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "7e6105544bdb31a22f5782d1f8c0b143"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "11f87d1f7b713a1b0c0e0e687caf20d6"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "7628db0455e1d5a0012f7d7a9d705b57"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "bf9f7677ff4d1e9bb405a314d85c8a24"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "ad45f5cfacbf4700a252e12cfcdfc772"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "f5ea4c48bc287c37dd0d5ae98cc57f87"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "07fcab45d9432da7eb5792938811a97b"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "630845c3ff121374625e7a3cf85e9728"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "88ab3b64df15f82a98a2ac9885d66e57"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "ee81c78d1dc67bf6c6b5d802ad07a623"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "71f29d016b3458211dac7aa966b6c3cb"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "2cff021658c95e454a7b48b97e932fb3"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "5645aff5f885cb5c8bb3512fb9524107"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "923164dc47ff881ed2aa225782eb83f1"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "67d335d85224303d9ea1e621660ac758"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "6feb94affcaf08bb9ba263328fcf54ba"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "f945bb0f7ee728a0ccec08d8dbf64993"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "286890be71c1f9e5408a6e0be57e407a"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "b589d381d1002025729e1dfdaa9d0d59"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "2977d30a7ce2651117e3364b41b4f0fa"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "2fa5d125688eaf844072f1586b7924ae"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "2228a0e01f888bb3cea7f070bd4ce031"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "ffefaa74ada8a9d8ea55d342d1f6d9fb"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "3cf2d45de66c3c57be1b8ad9f496cd43"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "1c0991e2f3bd46335c2cf92262539556"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "331d24a206cf753b75f71ecebdd23c2a"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "4f9125d76dae9378e89b9568de037c70"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "2986885ac4d90275353930c4b08b66e3"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "ed078e96bd34edde952d93a0ac8a7570"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "1827a784fcfbda3acbcaf92d2c417559"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "1d36d94ffa77e3a698141ac402180696"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "539a7988b037c4426e7822087ca200e6"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "705b9fbb2a9cee6bfac04b697dd6a168"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "8a5d8f1ba4c80bb0937b69217eedc1ff"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "7d59bcf2ec0af7af15c212023913d4b5"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "11bb6c645237939f0f17abc8a655c3a1"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "ed94422a761ead383ff8ebd38ca7c8de"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "7972f0130b3772ca5996a1e896be12e9"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "104c8f720511314d0fa2a4feb400a630"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "4c4cffdb454b56958e297c96d0464c2a"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "3993b4dd627fa81024f646c87b87b139"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "43a7cd7da2a9eb83834bb6f869e3f817"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "1547403db2912f9a04e2c20afb91bb6f"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "822e53facb63672b150d649a6c0a2528"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "7738aeb1a76d16cb6d83edc592640d61"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "6aa0ff860fc61513535150b6594d40ce"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "6a83e36a11812bf57119c9eb1ece0d6e"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "161021527cc955384dbbe530028c3807"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "2047d0aa05124ef47423cc37ba85229d"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "e45491c47a9c8efaf4dcc80ef09efbb4"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "1f5c0805d5c7e8af4f8186ccefeaa3c1"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "9506139ef9e5433a258f313d91c038a2"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "4c44d623ced369d304898203274966d1"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "197ad2d6486c0bf312a1bdec70f74d7b"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "808cba3df6af26f6efe595b5b9950fcd"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "80a3644d154f62664c45cc055282835b"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "57a486e85cce95899a25f46347d87f73"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "c1428123d3f38b536ec87a41a06b09e2"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "61cfe99d2da132d66874ef8660c60206"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "db57f645e2bcb0d4ece6c6f8606c50e7"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "fd8b862141ef84428df6b8aba86ee24f"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "47ac5e523aa4b15ea1522da2cf37936b"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "44d6a2fb19c10366bf2ad51f65ff5531"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "b35314c66ab0098c245ba3fefe890e43"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "21e756a7ad05fd310b4c3377f54cd47d"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "a232a631ecd89df9e62a33d68545d6c7"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "a11c255274f835558228cee76d04b249"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "db34233d39ce6caa2071f2450787001b"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "69e76b0778127cb3c5f7c49b5c5efa92"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "ee199903cab18f32c06b836661d0e5f2"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "2dde46eff0c9ba3daaefacd96fc98463"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "c7ec26f9565b100efb2dc95be2ee32cc"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "eec164f8f0ad6c7296a6786829eb6e32"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "1e7ae1112e858e25eb2a26e3b1e69103"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "439ef4a4ad5ca3deab6ee2baa34b36ab"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "bdf89f10cb26aaac043be5967afcb855"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "d14ef2c2e289482d81d3f015b3b9d79b"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "c5d9fb67f914e3b63189352838f5e31f"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "157193ee4a3a7e6cdaaf09c16aac90aa"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "299f0331d07024892f9df11f1fe11ba7"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "4910f650fafb04ab8587f99d9ce015bb"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "2544702c75747fb3c2626cf95e756663"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "aa9acec3640d7b6f222e18e566f0faa6"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "1013f8b0ed6d6ed53a0e95fea8b153ca"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "4cefa0ec7450173be67c7844dc5f4315"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "f390cde79ffa58068a4dd66f11adf2c3"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "7869f58943fcb1415e4302e079ed665f"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "7083735f1a88b9beb37bd0f5c5a0a112"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "ad1a530d1961b6480ec83a4510b01f5f"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "562e212b2cd2b7819b674f69a83562e6"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "27bcdae1b79c87573d9697993c2bed50"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "3193b6c73523e937fc7c1ac7d2bf4c19"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "47b9359c0c199c308ba40b03c85ee6b1"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "7e32b910d677f4a0210b0880a852499e"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "0eacd98ebcfcab0cc47275d62b39c9f2"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "990a1533ad6dd4e17b57a0c0a0fb4c4e"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "9ac869b7ae4a4babd51902bb1c9e7098"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "a0b1c2139971d458f9659b994a741fc0"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "f90cc71c19aafc37b1bdfc177386e1f9"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "f833c8eab514ca67cd3bba1a69a790dc"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "a7191edd8b7554a3bee33a931538588f"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "915fe382a153a485475a037fac952c9e"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "e362a88dc055e6526f69ed54e41cbb5d"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "46753a957154e5e831dd28d0bdf101e1"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "7407e4b32a5d286d900777ea376db23d"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "e01d5ae0ca6b413742d1e634e0ed9fb3"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "89a9566bffab1d7e55e6a5b982657369"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "ceac043daff50923339783e75537735e"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "6fff3279d585ea5b980cdec584b93086"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "f0a8a33a061f0448c392526d52a02242"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "8c6989368104b51160b6141355145636"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "2952f44d79e9049a50600212cab248e5"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "346140486b20ac382677db4b1153d30c"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "4744b7877ca5ca7ba0e147b81abdbd18"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "0a2a5d8671444f55f60250d2803aff15"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "8c005f8c46887fd54bb3c786f661f924"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "a3f2dc8cdb722d03740b72f0a2b9a356"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "f34d432392a6ebb4891ecf94949cd55b"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "9d01ce38bd5c226c88f20aed4e7525f6"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "2cb9aecdf1124c48cf1a456b56f21a11"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "079ea730acbc9cb755c93f488af05b6f"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "6fd92082c542ec0f6f76bb88a8edd153"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "f67528771375c04837a9cbf1c3594dea"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "375ec5a8c02499afe464667c429519c3"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "54c93133a7c95e1e93c7a03dc4b3ac12"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "850c72e4cd4a9e6ec42a6556c3f3f860"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "e7d090d1b5bbe503055eb1b4f050e35f"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "9f2d02e0d0aa7b50b591abcf15708ba9"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "86ea7c6a9868563af7197921b6612fca"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "ca487bffc127f0d2ae5643ba223b7426"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "304397c60e350ee16001b8e4e867b5c1"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "27036237f89d56d4c6bc3731d83b1c9e"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "28af2cc349bad613fa7a3225abf3decf"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "1250e6eec7d25b05d7666065d6a2e03d"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "b1ebb0c6dc6c40470ee207fa1615168e"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "80cd63c6f90a2f4e63351abcf9c07ea3"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "35267887594250ba2b32acc4643039ba"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "36dae2544c726f73b36bab09746f7100"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "bf066baf04a6b4ab59ccbf9d458f7998"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "06fa2fcbdfd4cad40bd9a45716bac939"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "8e23c216b77b0985fc3476c8a810f214"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "a9a3e6211c8c0f624a4c807d6efd835f"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "daae2aa47b522de7441dceca2e757f23"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "e592dc0a159677a540022bb92a749606"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "08222a8b07d4c0c1dd358150a5ba5de7"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "e554c99d717833128efc60a028d9d8a7"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "f8339dc300fb2e922ecb72735aacbf81"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "a27e0e52e0804be054d959036b33123d"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "3410369739ff26115b515ab955d3b6a6"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "c72b59e223b1a236b8bfae6e3a6010a0"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "317d1efbbf26a7d738d47e39002d2b38"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "4d696d29e6ded7915599365578ac5bdc"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "7dec4f3eafe45f33622ccbefc8fb949f"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "7ec8c05a59ae4e2ca1abe3c2ac3e4c17"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "d4c83f793e96ada36e0a990ee109dfc6"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "d35c985eccc06754ae8dc2cd67ca1ea9"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "c89ee265dd36f6e7372ca6a2cc55fb6d"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "900cba6e9b33a3d5d36bcc8817c427c2"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "7cdfd507d804290140d6d60319458f72"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "4c8fd3449285c062eda439d3d210d0fa"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "a4160e88d56654ca9337285806fef54f"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "3eb8e64fc1884284a395c58772e1f00c"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "63a181e30d61a4361de83417a6392bd5"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "7ee53ded4efe53370efc89b9f76f737b"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "bd275461a3efd6a4afa5adf2d1271f1c"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "462e2abc28caf76d3de92549625611b3"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "b374e5ff3b2d5050614eee32d5d35d6f"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "a868b7a62568f2a5443e1e806f15e10c"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "e7879e909d9ff91b1d426b35e28f2c9c"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "6160393cf5ad1f7abc62ea0b40ed6bed"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "50e55de7803aba95b656994f429ea938"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "5484bc44a46d59c277acf24ff73057c3"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "2248889cd6c38aee8c0c64562cf2fe11"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "ac851bcd1e9d53969b2964d4d4b2659f"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "0d4b9f960239d8fba73e3fea3a254cab"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "e3edb2f36cc821df8923cc2af2c969a2"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "c650625b0b15f4b7516069c2ec68c7d9"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "1d89d39675b9fa33d94fd5d6623dfbde"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "2f27b7f2b07e03b510e38a373b44f8f4"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "7b5f48dcc69e484228afa6aa91fb9357"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "704ef09568fe38217e34693a4b1591a2"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "2297c72726f915b27e8d8c958907fdfc"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "765dfd5dd2ef7cb5f2bf5c532e4d41ef"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "72be19e22d4d6f6ee8046cd43e6e2f26"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "e82fea28f2909e437dede1c0d798b2b3"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "ff1554bb4a86dd80861b2b94a9bbccb7"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "855e2365c4b767966e9d81e0af9305f2"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "146c9425c5229f202565f80a535d443d"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "ac2e42b9d9e7feab6684b31aae733e40"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "bf570848745a250aea6e5ac0111880aa"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "e29a6cd21354296b8f1c1a348eec228d"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "ba813bce746a8aa5812b98a9cae979eb"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "300cdf431134e22e4f6597394af61d0c"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "64cf7641e33e4bc029fede1c6fe52dfc"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "3ad12f47f1324cb026e5c528e923d948"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "45954a532aacc608748646408ef0ef0a"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "d235b45b6b46c7880b2e8b88439fe5c2"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "7b9a404634b4405d2cf43ec52b813744"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "6b4793e0400d860cfb9c37ce36eb967a"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "70508d2cc4dba75a2ffe55efd21e7ddf"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "f31cb0d134932d7b31a11e37d8de0f62"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "17af4e0c9115497f8992d275223fc68c"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "2cbe880056abf54257cb6111acd9857c"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "0932f6f4f2f1847334fb3c5a7f8ec0f4"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "28ab2d1294a6ef26ee6db2cce169a305"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "247b4a00e34d218f338e8b0621f49bf9"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "143bc83f045ada6e4cb046671ed92b8f"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "b9243a3c113955d20f78f30156f5a118"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "77f114039d7fa4633b3570e74520786d"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "afccf01d93daf1c693a13195d214bc32"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "822f001b4ecaacc48017fc73db521775"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "6196978b63213daface4d8b4a9010ec9"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "f4ab9a04690eef2e68fcd7116431c1be"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "fcfc9f0df1a7d950f3a234b5d6400d8a"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "2974e60c7f00a945e24d606eeaa228a1"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "e17724ce3291d473fe219b34374c7deb"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "239a89ced2eb095d9d9c638bd3df4425"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "b31cc9b62b0f32152478e796ced45514"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "f3ecb3ffac94624ff124af7116c7a544"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "ca3b21948473786359e245ccb433cc05"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "e6bc43a3cadb664951f6f9b2b7138921"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "80bbb783bf9beed59303dda0473c612d"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "80448f70eb7c6fc6688c40fcc6eb4613"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "0459352330933f95672198485c648eb2"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "d5d8c8034a75b5b82567fb75f53a69a0"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "636b707ffdf59462c27b6b4331bc76e7"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "ea6a6b263011cc8c86e4cbb803c745db"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "146ff82828414bbc64163dcd1dd8f6d0"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "8d17c3292d51133e47be1b979f093a3a"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "7586a4cb576ac0d5e6f7668d5e03f251"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "a2f8ddc74ff6f453f2597df6773c6b07"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "e581563f4eba520938026c9d14511bc6"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "ef87766b2a0a5cad55cae0ac66f881e0"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "a6f32792a7c4b6cda3e7e58e6b09c962"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "96e6c39d24e0c302764f5c2db0f329a1"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "1511a3d7e6caf2288f337a292825754d"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "72e6a5dfd6a30790bc5cb6e222da77c5"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "b757b77dd3bbb8fe7bf74749a78edf19"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "dbd9aa4c8146788ecb5f49c03dd9918c"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "7558d3b71b7c1f949915fd3994a6b2c3"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "4b5a24e65f254827768d3f6cb16e2d76"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "b3b3cac8d4a38e3eab4b0bb48d3f1996"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "a41d410c07c90ec61e78f90383f0f9d4"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "2a27112b4edf4e3dbf255bf644ef3178"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "fc82863812815a8a412c7f1c1c340440"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "d1d8e2d718e2ba3988265fccd9fbd14b"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "9cc3ffaa97ae43a8bf2ff86ebd106c56"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "f0536bf28cb2ea7aed31bd0eb20e0247"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "c91b32d16181722d31b8d6936f800938"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "3bfd69dbf56b5be016df13216c2527d0"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "9170eb648becd3c4cf108c2ca02b2eab"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "6556fc73568000059ecc0fbb8b84b764"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "7f64182e128ca06e7cb163a2afe7b073"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "69229cee62c1d1ee73fb3d7e58374948"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "fab7257d30c76cd4ddbbd4657759296b"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "7df57f4767771dabb1213950d74e9836"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "1ba1599b75da910f1dbbe7d393d09465"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "5a05e8d05e7fb5f321bc6b8aa63df663"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "0ce6049df2429e2b454f821eff1fd133"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "066e35ccd314d310953dd5ad7d10c3bb"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "2e85435d4244f368592d5bb1c226608a"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "1cb40cbc66ff495813ec3d563191200a"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "d143a57357a8858973d2ea7d21088dce"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "137dc84437fd359868862a0534c850fb"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "c29214545bf27cdf688c16c180484fbe"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "ad861d97cf255febdec09e93aed186cd"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "e955e8d6d1eb2fa96a2a8145b79578b1"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "7ef8bbf1b5969edf34114a29ffd59ba7"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "6168bfde860f317e6f14a81d4b8ab85d"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "5f7656351b446f1825637169972851d5"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "4d6dd39420967e0095b5d5114f33cce6"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "ae63e0cc65ace5ae440cf29f54d63e8d"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "4336d580b07f490a6bc990dab91ad13d"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "dfc73dd7d4a1f1acb87c9327dcce511f"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "b4332a546007a563115615176748de0a"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "de5c31a38ba2574b3da7986ab6760900"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "e2546cb8f0849cbf552f2edb5e8c48ec"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "b461ecc70f47bf24c6c801f8e17df2f3"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "e6ad28f2831b45dd468da8292c70b95f"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "8a0a12a066e1f4b81ee40e690fba8378"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "2b138690135b1866d338153a1cb36eb0"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "897476088d9f1b01fb9e2d794504128e"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "10565c472e7c87526f7aa3df1c35c83c"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "060e432d0ec5bb0f317299edcc37e88d"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "b6cc38fbbcfebaf0a35b3a4c2a141e9b"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "f562277d6189d936ff51be4e20e6289b"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "3046931b22940a0aadca1d2471cd45ee"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "d4fbf3ca13f3f377dc926cbcde83b688"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "25391623e45febfa201b41eebfb181bb"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "6655f9c9cd09a0dcd5ae7db59b14b6f1"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "dcf467f35a73bd7c0fab22b90c7bdb06"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "5d6b596d1d1c599b306de4fc6e2b0b43"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "f10a12cdc6c280bd820782d1bc146896"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "caf467e46d826bb8a5bb10313cd8ca5d"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "f1ae8d559bcef624abd4116ac029876f"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "129fe5d49b563c4e36e7916f5baf50d9"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "5b79883d72eb371e3c7970f153806208"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "c1bbf7a0ec47ac47792ca08404147308"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "edec7fd829b091a280406f0b0df5fef2"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "f73de397579b3c8049f0ed75d7cbd8bf"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "4fd8727479f048cc96c76876d1e1bd4c"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "6e536e901bdcb58d2b5f4f62ce5e6b2e"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "571d977179f50c1e0e4cf337103e144f"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "e2b3b2e643bfebf4e4b4a252b607b006"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "d8b6c80983c0f55734b5b1f2bca8650e"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "4447b204ac619d378226292255f00402"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "98fc03a8d96d639611ec1b0192906138"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "a4964103fb54f528c49cc28915c74761"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "3413b76d4ab73dd7f4d1bc976aa0b657"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "6cea4c06133a0222d8a885c0d9612844"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "175bd8d852a9c81ea44a2ce23f6b1ff5"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "9f0e6a7e63a1639e281199c6541955d4"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "2cf1f53692a1f5be6dc34972ab75e9c0"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "472afbf349bda3ecb4f2bc9c50bafee1"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "f7a6bfe06662029df555bb2e6accfeb8"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "e1ea59db81fff3c52194db094aa943d3"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "fcf523b5bc84d6f0465ae4484ce9831b"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "1d3592c4d4c2bfd32ed1a8eb5085d0de"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "0b70f95420b88f1a84177ce28dabcd7b"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "1fb756c259d5f030950bb9318e049847"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "35ad8fe24c804c0a7fe22aad443c03ca"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "c2f187e22d28d04c6e0684378f780e04"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "6391e7f1cb3f8a9392e37942ec5975bf"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "b9f096a07c0adac8121ce66b51eda25b"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "48d5ac5b109d870cce10eeb6eade5ef7"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "a8ef5f4454f151ff27f07a31c0b1f3a4"
  },
  {
    "url": "404.html",
    "revision": "13b496cda92c73592c4670e9559c907d"
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
    "url": "assets/img/1-seller-payment-request-to-admin.abfbdf27.png",
    "revision": "abfbdf27cff6d5a73fb4c2c96f6c6906"
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
    "url": "assets/img/2-seller-transtion.e2c2379a.png",
    "revision": "e2c2379abfd3bf215c83d713ade1ff85"
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
    "url": "assets/img/4-popup.e86f1cf0.png",
    "revision": "e86f1cf0ccdf8e1950f0fe9e25a647f1"
  },
  {
    "url": "assets/img/4-quote-info.7ab8fc9c.png",
    "revision": "7ab8fc9c64238e06cc43e9710cde6b7e"
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
    "url": "assets/js/1.87a3b509.js",
    "revision": "949c00d2671964476d2eda29699669fd"
  },
  {
    "url": "assets/js/10.7db6371b.js",
    "revision": "3cf0c219c926abb424ad77f6ed80c460"
  },
  {
    "url": "assets/js/100.74379540.js",
    "revision": "21d599cde73dacd32567080d2bdb80fa"
  },
  {
    "url": "assets/js/101.f3a44d43.js",
    "revision": "39d21e771756d91c6b426080768c9f46"
  },
  {
    "url": "assets/js/102.a89e48b4.js",
    "revision": "50e02585a923496e1b7ab1811d0f406c"
  },
  {
    "url": "assets/js/103.61d472d1.js",
    "revision": "14cce298231039a08eac4f3821bd964e"
  },
  {
    "url": "assets/js/104.4a68df8c.js",
    "revision": "bb0812a81cf8bdfe4fa9dc2b9659cd9b"
  },
  {
    "url": "assets/js/105.d9c8f4a8.js",
    "revision": "cd834cce56f6c46a2f18a340072786ad"
  },
  {
    "url": "assets/js/106.826da756.js",
    "revision": "5dbfb325ac2d94f2f75f9b029fac7e6f"
  },
  {
    "url": "assets/js/107.adb63bc1.js",
    "revision": "61e5eab155d3773c55487a8a146b4d17"
  },
  {
    "url": "assets/js/108.27fbb61e.js",
    "revision": "b57409c33b038ed9e681a3d4cb0b64ff"
  },
  {
    "url": "assets/js/109.a833c17c.js",
    "revision": "9688284efc82f7971f60ab8c8228222b"
  },
  {
    "url": "assets/js/11.5b7ca53b.js",
    "revision": "c5ccf415dd4295c811edce7af5a7f9c0"
  },
  {
    "url": "assets/js/110.943a667d.js",
    "revision": "5ecac084345edaeea7d9b9c774edc5d6"
  },
  {
    "url": "assets/js/111.fc5244ef.js",
    "revision": "0dc604bec13d4ec905660b863d3f0215"
  },
  {
    "url": "assets/js/112.d268c243.js",
    "revision": "96619859999d2ab3746d9c21777f40d7"
  },
  {
    "url": "assets/js/113.27233aa2.js",
    "revision": "8f9690afd55f96330147e1804266a2d7"
  },
  {
    "url": "assets/js/114.b6f2ce28.js",
    "revision": "4414ad696627e7fc0bea8c996a05af0c"
  },
  {
    "url": "assets/js/115.20a396d3.js",
    "revision": "d6d8221e8110da55aa67883e80f62ac7"
  },
  {
    "url": "assets/js/116.db074536.js",
    "revision": "5230eb4c821ce9d3d0c6bd70a0b3306b"
  },
  {
    "url": "assets/js/117.fb8a811a.js",
    "revision": "e29cabcbba330338cd398e253896c9a0"
  },
  {
    "url": "assets/js/118.765a755f.js",
    "revision": "c3e5cb97228f56f9b184f49aaa1afc9d"
  },
  {
    "url": "assets/js/119.bbf3547d.js",
    "revision": "9cca64dcc8334181dfc40a26c9cac15e"
  },
  {
    "url": "assets/js/12.c1f51d1e.js",
    "revision": "cd4b0c4b1e77021fd6294a45c72bda36"
  },
  {
    "url": "assets/js/120.3bd72050.js",
    "revision": "15f2efced1c925115f778083cef62fc3"
  },
  {
    "url": "assets/js/121.5236f408.js",
    "revision": "cce0ac54450a84e847921f36ad614137"
  },
  {
    "url": "assets/js/122.de382efd.js",
    "revision": "e7477e3cb793aeca43d0d56004446c74"
  },
  {
    "url": "assets/js/123.986547d1.js",
    "revision": "fcfc608dc2013e57bad75d4ab5cfcd0e"
  },
  {
    "url": "assets/js/124.a75e6cfb.js",
    "revision": "63ebfa39193d7d6b29f1d25293487ef2"
  },
  {
    "url": "assets/js/125.e983f514.js",
    "revision": "cf08fe6f9c3ee499a16a22a474dba897"
  },
  {
    "url": "assets/js/126.45d2e827.js",
    "revision": "c052c1deec5a2be07186ee858d275dca"
  },
  {
    "url": "assets/js/127.25997a92.js",
    "revision": "f94c3c7582e3d1c5805e1cc27d1b7b82"
  },
  {
    "url": "assets/js/128.1dba7172.js",
    "revision": "19d1bebead9eed0543e3d4313bcbef35"
  },
  {
    "url": "assets/js/129.b8b08af2.js",
    "revision": "1aa02f4a2bcc401e2f984941307d2aae"
  },
  {
    "url": "assets/js/13.8bdb0474.js",
    "revision": "82896fea863c952e93753a0220d88941"
  },
  {
    "url": "assets/js/130.1e40861a.js",
    "revision": "ccfadfe709844e3d966aebe66e8b30a0"
  },
  {
    "url": "assets/js/131.bf68833e.js",
    "revision": "984478c6fbd5c1e299d7305c6f51a23d"
  },
  {
    "url": "assets/js/132.c7773be4.js",
    "revision": "0c2c301903f4542362ffba0e7d230f15"
  },
  {
    "url": "assets/js/133.26194fb5.js",
    "revision": "b5f28af89ebe98aed30add63166bcd7e"
  },
  {
    "url": "assets/js/134.2a89a216.js",
    "revision": "24f431f1bfa6c5742ab98b312e76f746"
  },
  {
    "url": "assets/js/135.c574137e.js",
    "revision": "5ee2083e00315461b9ede338bb31e49c"
  },
  {
    "url": "assets/js/136.0f6acdce.js",
    "revision": "451037fbfc0c1d3ac9f61a07ec386a28"
  },
  {
    "url": "assets/js/137.6df63647.js",
    "revision": "37b1011eb33f6d00e36a8b5fac638819"
  },
  {
    "url": "assets/js/138.ada58044.js",
    "revision": "c7f9051be1ea65a546cd6cc968ce1f1c"
  },
  {
    "url": "assets/js/139.7c2f4579.js",
    "revision": "d1a41cbb58825cb606a0a5e9c58bc34c"
  },
  {
    "url": "assets/js/14.60c876bc.js",
    "revision": "88113c1ededd3a12a82042bca31b0d06"
  },
  {
    "url": "assets/js/140.416ea785.js",
    "revision": "ce41a0bf4f0945b541776a716b9267fe"
  },
  {
    "url": "assets/js/141.a161ab39.js",
    "revision": "a10a4aab2c84df8ae92d19d2f6c228f7"
  },
  {
    "url": "assets/js/142.9ec2ea9e.js",
    "revision": "c50585acf7beeb90c6d206814bb9e4d7"
  },
  {
    "url": "assets/js/143.b950df85.js",
    "revision": "1c896963f50bfc3bb1ec6351417c1713"
  },
  {
    "url": "assets/js/144.8bb7b2b6.js",
    "revision": "33347960b83bed6cdc88655315bad91a"
  },
  {
    "url": "assets/js/145.6a6e4a2b.js",
    "revision": "39f0cb10e1551f815bc311d61ac416f1"
  },
  {
    "url": "assets/js/146.855c2f59.js",
    "revision": "5ae2222c6a5e263a974b5e755e344e1d"
  },
  {
    "url": "assets/js/147.f9762e34.js",
    "revision": "ec7519be45bcd5a77779f5e208c47714"
  },
  {
    "url": "assets/js/148.a02c29d1.js",
    "revision": "9db7e9a97d643a0e21aaa4fcd679e816"
  },
  {
    "url": "assets/js/149.0691e7d3.js",
    "revision": "f86dd44ddd8293ead73c493791ece59a"
  },
  {
    "url": "assets/js/15.f2c2553a.js",
    "revision": "063e8f6c040e5b307efed279e204663d"
  },
  {
    "url": "assets/js/150.f6143eb3.js",
    "revision": "b03b6eb390703e037b43d16c5fba9ade"
  },
  {
    "url": "assets/js/151.7bcaac7b.js",
    "revision": "78a6d18f7f7924bfe4877f11d60b7afa"
  },
  {
    "url": "assets/js/152.86567e63.js",
    "revision": "8ace86be7a09975ee3003ca7af339d0a"
  },
  {
    "url": "assets/js/153.b3a34f11.js",
    "revision": "531845ebecd215424a57ac3e83ac52ba"
  },
  {
    "url": "assets/js/154.a7782787.js",
    "revision": "61a3bd6aa997719342970f12af52ca55"
  },
  {
    "url": "assets/js/155.3c3faa7c.js",
    "revision": "602cbd83621bd881559523f1e7d2c163"
  },
  {
    "url": "assets/js/156.eec1f9e8.js",
    "revision": "de9ac7275cb97f6a79c50de38c139e61"
  },
  {
    "url": "assets/js/157.d96e64a8.js",
    "revision": "ec99a4f937d06df0997314d805c3f38c"
  },
  {
    "url": "assets/js/158.ddceaaa8.js",
    "revision": "c7e92557aab16246e74a35a6dcb7624d"
  },
  {
    "url": "assets/js/159.635eebe5.js",
    "revision": "df8e5d9fa60d747781ae39f0e890dd18"
  },
  {
    "url": "assets/js/16.32d09e1b.js",
    "revision": "ae84865f661bbb1799cccb5adfd91b1d"
  },
  {
    "url": "assets/js/160.3f8a57cc.js",
    "revision": "dc9e86a1df8ca2f2b9196e3d302083ac"
  },
  {
    "url": "assets/js/161.e927926c.js",
    "revision": "482d89432b166dd53258c411e85f4de6"
  },
  {
    "url": "assets/js/162.9afe039b.js",
    "revision": "4b4e4cf89bcd28977e3f191c72c5dc3d"
  },
  {
    "url": "assets/js/163.f074a801.js",
    "revision": "0fd562338ef04a148b660caadbe67fee"
  },
  {
    "url": "assets/js/164.a8b6ca4f.js",
    "revision": "a245cb849d27ce66f20e2388083e3dea"
  },
  {
    "url": "assets/js/165.b544386a.js",
    "revision": "91dfbf3a4966c884d636f7c8d6a37e6f"
  },
  {
    "url": "assets/js/166.faa6d7bc.js",
    "revision": "45100c9652bd76fd3497a2c454840793"
  },
  {
    "url": "assets/js/167.36502cca.js",
    "revision": "4a992e9f6303a35573cf2566418b3ac7"
  },
  {
    "url": "assets/js/168.df97724b.js",
    "revision": "00b55e36fe7a7f4b592d6c50ad503838"
  },
  {
    "url": "assets/js/169.964cb666.js",
    "revision": "4f62ead67843102108eba7527bb9e635"
  },
  {
    "url": "assets/js/17.68a6d8c5.js",
    "revision": "f8447c73a2c3329b3f15e9cf77ed3c13"
  },
  {
    "url": "assets/js/170.efb32561.js",
    "revision": "fd71311f4fbebac25fcc9bd0572fcc49"
  },
  {
    "url": "assets/js/171.c48cfcf3.js",
    "revision": "d97e3a1a4ada4064b2c9a020f291074e"
  },
  {
    "url": "assets/js/172.1c644b55.js",
    "revision": "7d982221a1bcdd3ea926fd1a2473ddef"
  },
  {
    "url": "assets/js/173.6cfd4ba2.js",
    "revision": "f97bfa01a1e4f43530b7d271a65234e8"
  },
  {
    "url": "assets/js/174.bd25edce.js",
    "revision": "507e0b459251586d4c884dbfa0e82f3a"
  },
  {
    "url": "assets/js/175.057589cd.js",
    "revision": "6298df88e2180c6a3ffdf59f0f359d9b"
  },
  {
    "url": "assets/js/176.815c60f3.js",
    "revision": "c8a25c90b04452aaf5744eb6a1b6f14c"
  },
  {
    "url": "assets/js/177.d571fc35.js",
    "revision": "ad492d81623676fe97fa80cf71f679a3"
  },
  {
    "url": "assets/js/178.5fe43dfe.js",
    "revision": "e51f336c4fe5627a96867f5a4c36041c"
  },
  {
    "url": "assets/js/179.fa57deed.js",
    "revision": "418e08078743c92bbf8aa29ef6ee5fad"
  },
  {
    "url": "assets/js/18.21b1086a.js",
    "revision": "dc3ea85e52beb13b03f652af1b4a21d1"
  },
  {
    "url": "assets/js/180.4157f49e.js",
    "revision": "4c889b84ab245e80e5e48a0688d27b83"
  },
  {
    "url": "assets/js/181.ba8aad2e.js",
    "revision": "1b86deb3d77b8f5f9a96207976522654"
  },
  {
    "url": "assets/js/182.33f7fd1d.js",
    "revision": "0e2be7d3d67848ee06d430005cda972b"
  },
  {
    "url": "assets/js/183.8a7b4b5a.js",
    "revision": "8f50b8ed7dafa1b02e02e816327f1d02"
  },
  {
    "url": "assets/js/184.ed457386.js",
    "revision": "b88313481e6ef90dc5f80b7e1e495669"
  },
  {
    "url": "assets/js/185.f55e2777.js",
    "revision": "b4cd0d257abccfc461274f49d4c7eb92"
  },
  {
    "url": "assets/js/186.7d906393.js",
    "revision": "4291b9eff58daa24a50ef1ce1c194888"
  },
  {
    "url": "assets/js/187.2cfc04fc.js",
    "revision": "5452387ff561542aaedbd7af5464d99f"
  },
  {
    "url": "assets/js/188.07dca55f.js",
    "revision": "c930784d2ac31315fd9884865a43f697"
  },
  {
    "url": "assets/js/189.88da7c98.js",
    "revision": "b7ab3c001de885684e24071ed94672dc"
  },
  {
    "url": "assets/js/19.33fdf724.js",
    "revision": "23437a4831718989e76fd7bb5892b2ff"
  },
  {
    "url": "assets/js/190.fd46781d.js",
    "revision": "2529c4cfa980105ab9d62fea5b02951e"
  },
  {
    "url": "assets/js/191.e50692a1.js",
    "revision": "6a13e624fa92e2c5cec271ca2f305487"
  },
  {
    "url": "assets/js/192.85b1ac47.js",
    "revision": "a2c4b9678a0b5ec247d40b9c9b3252bb"
  },
  {
    "url": "assets/js/193.1c60f03f.js",
    "revision": "c06da2109f4dc26f1faa13c823d85148"
  },
  {
    "url": "assets/js/194.a62b3fdf.js",
    "revision": "09dc6927a0c3a00307e0cafd31b58b86"
  },
  {
    "url": "assets/js/195.d2e4c998.js",
    "revision": "5860f26732a6c46aa144e388358f85d4"
  },
  {
    "url": "assets/js/196.3499723a.js",
    "revision": "3df9e8ad416aa2e9867059e0c804633a"
  },
  {
    "url": "assets/js/197.d755122d.js",
    "revision": "77c6cb32b46f2378878f4cb7eba92188"
  },
  {
    "url": "assets/js/198.379b5749.js",
    "revision": "0f6bf45e31c9d3603c0f2ded198f3f00"
  },
  {
    "url": "assets/js/199.47c86c7f.js",
    "revision": "f0d79eaa67a6e2cfac1be70b31f6a462"
  },
  {
    "url": "assets/js/2.701eb299.js",
    "revision": "3ae1d79534b4d334da66a3fe5b48ec2e"
  },
  {
    "url": "assets/js/20.a64125d4.js",
    "revision": "553e32fa1e832b999d431c30a1fba4ce"
  },
  {
    "url": "assets/js/200.8093e977.js",
    "revision": "25e3b4221a67f1bc68167c2f0c1588a3"
  },
  {
    "url": "assets/js/201.5c888067.js",
    "revision": "88b30c3fc36badc6f75ba92df6d35099"
  },
  {
    "url": "assets/js/202.42e69ca4.js",
    "revision": "08f62d9fc47ca3e7ce6c938957ce03ff"
  },
  {
    "url": "assets/js/203.ebe10466.js",
    "revision": "3ce1b5e5cd3f5a4c805994ed00cdb960"
  },
  {
    "url": "assets/js/204.1dcd255f.js",
    "revision": "b122e7a7e0294d160e4d1a020b35463c"
  },
  {
    "url": "assets/js/205.0d8269a6.js",
    "revision": "c824c2495b73a60ca5f89c3a8261314f"
  },
  {
    "url": "assets/js/206.b9aeeb84.js",
    "revision": "a075e8767833644470bfeed97355a92b"
  },
  {
    "url": "assets/js/207.2ba3ebd0.js",
    "revision": "3b467fcb8e0e9f76b7d52cc1e3037332"
  },
  {
    "url": "assets/js/208.a3993982.js",
    "revision": "0891161d479150cd68bb5f5ad1b94dbe"
  },
  {
    "url": "assets/js/209.7caaf404.js",
    "revision": "0cb45643c4bd46f51f5b2e214b71a974"
  },
  {
    "url": "assets/js/21.336f9e82.js",
    "revision": "8e2700a2dc2fd88938be31cb7c7e50ed"
  },
  {
    "url": "assets/js/210.079ecdcd.js",
    "revision": "2e0531ad0ded4475a29d68ff2e5b879d"
  },
  {
    "url": "assets/js/211.18819a08.js",
    "revision": "369a883bed8f0615f6aec896c50379e7"
  },
  {
    "url": "assets/js/212.7c8ab85b.js",
    "revision": "bc396ccf3ce37db8924be29c718f45bf"
  },
  {
    "url": "assets/js/213.3235b24f.js",
    "revision": "79c4744f6ccca79f62541826c7257756"
  },
  {
    "url": "assets/js/214.141ef1e5.js",
    "revision": "91f5eb2947347953199adee4522cb531"
  },
  {
    "url": "assets/js/215.34ea1421.js",
    "revision": "65a1347274f2462391b643368c5b99d3"
  },
  {
    "url": "assets/js/216.6479572f.js",
    "revision": "56de21b72224ab033ff03567a4beb3a5"
  },
  {
    "url": "assets/js/217.2b063740.js",
    "revision": "e780b2fd97ba26096b0038ac3cf20525"
  },
  {
    "url": "assets/js/218.19e97788.js",
    "revision": "6fcb08dc4a57089b2fc9f03a7d748957"
  },
  {
    "url": "assets/js/219.bdae8cc1.js",
    "revision": "95cb4b2c6a4b80edd6e04c5ce9c6e202"
  },
  {
    "url": "assets/js/22.8775dfe2.js",
    "revision": "58b50b7fb4030cafec6c3693355b8a29"
  },
  {
    "url": "assets/js/220.d0f500bd.js",
    "revision": "cf9be54ca9e2b8d2dc21657fb4ed460c"
  },
  {
    "url": "assets/js/221.242c6c3b.js",
    "revision": "ea8115ee39017d907a559be7d99fa19e"
  },
  {
    "url": "assets/js/222.8e188228.js",
    "revision": "67c73c86f1ef50c7401e475697bc111d"
  },
  {
    "url": "assets/js/223.054b4d21.js",
    "revision": "468795102e0a30e5a266a6a6ce227651"
  },
  {
    "url": "assets/js/224.b0d469cc.js",
    "revision": "52bf169164b9899a00849b43dcd9b731"
  },
  {
    "url": "assets/js/225.6993067d.js",
    "revision": "a9b64632533063e56da50cb82042034c"
  },
  {
    "url": "assets/js/226.755068a0.js",
    "revision": "537a427551adcaf669136f33021fdf15"
  },
  {
    "url": "assets/js/227.d78b2de4.js",
    "revision": "338ddf894433b79eeb95b5b151d304ad"
  },
  {
    "url": "assets/js/228.7956f6ef.js",
    "revision": "c548c0235d5092b76aab96ca9e25eb09"
  },
  {
    "url": "assets/js/229.2ef67096.js",
    "revision": "6663cdae8d22dd835148be73c19711cb"
  },
  {
    "url": "assets/js/23.6d17152c.js",
    "revision": "779b4986e4fe634f4391757d399395e5"
  },
  {
    "url": "assets/js/230.2285d6e9.js",
    "revision": "be89aae09600e3783d3c5a3c5159ad6c"
  },
  {
    "url": "assets/js/231.dbd717a6.js",
    "revision": "f55f3e6d3f20d040941272c071e1fe3d"
  },
  {
    "url": "assets/js/232.7e6f9733.js",
    "revision": "4910bb18d04afc3d5bcc220822759107"
  },
  {
    "url": "assets/js/233.a5287d5b.js",
    "revision": "c85887faa9d8dabbd4a7edef27745790"
  },
  {
    "url": "assets/js/234.3c6aa94e.js",
    "revision": "6cfc84a5fa1a05b269927b1b498fd34a"
  },
  {
    "url": "assets/js/235.ef42790e.js",
    "revision": "f5f5a54d6a90290e16a8769535ef6345"
  },
  {
    "url": "assets/js/236.34e45ede.js",
    "revision": "e14c92d5b64b4ce6b06b60b40c998fbd"
  },
  {
    "url": "assets/js/237.b001ceb7.js",
    "revision": "9c6ee820bde999c243cb9d8c2a2d8a50"
  },
  {
    "url": "assets/js/238.fc954e7c.js",
    "revision": "091fdcbb93156f48e639760ad1aa65a0"
  },
  {
    "url": "assets/js/239.13df07da.js",
    "revision": "c9706b7db7adfef83f62478f12437aad"
  },
  {
    "url": "assets/js/24.aae58298.js",
    "revision": "990b0e9148e637e6b885c3a30037e0a5"
  },
  {
    "url": "assets/js/240.63bdbe2d.js",
    "revision": "12636813e34d3b3668710a35a44bef93"
  },
  {
    "url": "assets/js/241.07efe4d1.js",
    "revision": "16f9647335432ce99508812151ae102b"
  },
  {
    "url": "assets/js/242.3a805d59.js",
    "revision": "72404acab8a82d07e73cc4378f6df815"
  },
  {
    "url": "assets/js/243.a184efa4.js",
    "revision": "324dba4456fd3f30daf6b02ea7326ff2"
  },
  {
    "url": "assets/js/244.2b7456a3.js",
    "revision": "81fb4b5da25c70ffade013086a738f76"
  },
  {
    "url": "assets/js/245.0c610c69.js",
    "revision": "720a463f7bacac22a0e51584df6e1301"
  },
  {
    "url": "assets/js/246.55732942.js",
    "revision": "a0f0092772045d497f2b3375f48aeeed"
  },
  {
    "url": "assets/js/247.9103e95b.js",
    "revision": "781f1cf6abbfd202b466d2ffc00af2b4"
  },
  {
    "url": "assets/js/248.1a18f298.js",
    "revision": "705c89bce0d3c7cfbb55abec74f14b68"
  },
  {
    "url": "assets/js/249.26e3bbe2.js",
    "revision": "fe6ee87a3234e3a2c1cf539f80e0c676"
  },
  {
    "url": "assets/js/25.7ba83c76.js",
    "revision": "d732e7af6c35162d83339a867df5b71a"
  },
  {
    "url": "assets/js/250.ba95458a.js",
    "revision": "4c42f902e917e14532a24bc75518ce1f"
  },
  {
    "url": "assets/js/251.de137290.js",
    "revision": "a5909e05fd3102958ca59a82e106dc64"
  },
  {
    "url": "assets/js/252.adfb2568.js",
    "revision": "095697bf21e309a046d246a8c1285115"
  },
  {
    "url": "assets/js/253.3e59fc32.js",
    "revision": "eb607000c4cdbaa5c1a45c6664805f17"
  },
  {
    "url": "assets/js/254.89c3c4e6.js",
    "revision": "3fe5c76993ad8a4226ade77a7f397714"
  },
  {
    "url": "assets/js/255.c44bf99e.js",
    "revision": "4a8f4af94380de053b5fb54951cca044"
  },
  {
    "url": "assets/js/256.d151d05b.js",
    "revision": "9fdf160e74265bc732002ee0ade15a56"
  },
  {
    "url": "assets/js/257.b6f5eddc.js",
    "revision": "4b399f19aa3d5cb5caaeb6605414f03d"
  },
  {
    "url": "assets/js/258.5e2b1a63.js",
    "revision": "5185089984ccd6e647387714019794fa"
  },
  {
    "url": "assets/js/259.32297bf8.js",
    "revision": "c071ee81421643e63a86fb8995206fef"
  },
  {
    "url": "assets/js/26.c8379948.js",
    "revision": "2a1a2419549392b07a1048903e95d626"
  },
  {
    "url": "assets/js/260.af282e6c.js",
    "revision": "db9790b89b51916e4f536e68610c4389"
  },
  {
    "url": "assets/js/261.1aabb23b.js",
    "revision": "bf852a789e9b5b8baf25b46b41c8b997"
  },
  {
    "url": "assets/js/262.ea1811c1.js",
    "revision": "5ca58cfd30033001356ff8b02899cb30"
  },
  {
    "url": "assets/js/263.b6791c84.js",
    "revision": "294d04750887cd84e00c1993339bc0d5"
  },
  {
    "url": "assets/js/264.ecbeb09d.js",
    "revision": "453d97e55d7b71f902c12ae9233c16a8"
  },
  {
    "url": "assets/js/265.3d6ab635.js",
    "revision": "f8d180a489a16dfc7d2a90770513aba9"
  },
  {
    "url": "assets/js/266.43237eb5.js",
    "revision": "2aa4163502ba1ae5584e54e9047b8e73"
  },
  {
    "url": "assets/js/267.239ff583.js",
    "revision": "3cf99ccae31db6079910ed0661a09604"
  },
  {
    "url": "assets/js/268.517a51b2.js",
    "revision": "ddf376c2ff84c233977f39ae1397eca1"
  },
  {
    "url": "assets/js/269.fd7f3e1d.js",
    "revision": "be06ae317c25f3d34c614e703a75faa2"
  },
  {
    "url": "assets/js/27.14662b4c.js",
    "revision": "53cb98825b221fe7b6b59a6d32cf246f"
  },
  {
    "url": "assets/js/270.08515f96.js",
    "revision": "5c424f5a59a53a91ec517bba04a9d0ba"
  },
  {
    "url": "assets/js/271.cf06fbd1.js",
    "revision": "186866abbd8a2b97ce89a42aa36060fd"
  },
  {
    "url": "assets/js/272.d5209846.js",
    "revision": "2b8d305f76938121d4c6b61dc65d9f50"
  },
  {
    "url": "assets/js/273.c0495f03.js",
    "revision": "67ef8f14bed3b7e384f0375176f9af48"
  },
  {
    "url": "assets/js/274.922501d7.js",
    "revision": "d194261f4db7f2a03d544d49c0f587cd"
  },
  {
    "url": "assets/js/275.b50a1c1d.js",
    "revision": "47c09680771e59df0a98a9b8e21523ee"
  },
  {
    "url": "assets/js/276.a18e9b12.js",
    "revision": "3302ed8a11bc4b7efb1a62d2f993c731"
  },
  {
    "url": "assets/js/277.3ae0fce9.js",
    "revision": "ad3e5593d87761894a2ff039553f1a16"
  },
  {
    "url": "assets/js/278.cbafb1a6.js",
    "revision": "50983759d5253352c1f065fb7e5810bc"
  },
  {
    "url": "assets/js/279.6ab638ee.js",
    "revision": "5b9a0549f490b8daecdce66e3a2fb74d"
  },
  {
    "url": "assets/js/28.94a2e86f.js",
    "revision": "bbc942177bdbbb4ed68aeae60e257327"
  },
  {
    "url": "assets/js/280.79532aeb.js",
    "revision": "f623ebabecf1a30e941676a77881f853"
  },
  {
    "url": "assets/js/281.b8470890.js",
    "revision": "8b014ae7b81551eb3bee24b43f30b0e7"
  },
  {
    "url": "assets/js/282.6b2795ed.js",
    "revision": "d252b35a94c68da984548c49d81f298c"
  },
  {
    "url": "assets/js/283.d81f77ec.js",
    "revision": "6f1d6fe09a741f0bf8c35f711dd6c1b5"
  },
  {
    "url": "assets/js/284.34b05ae8.js",
    "revision": "4bbcc48bee1bcb3bf87ef75ebb1f0e32"
  },
  {
    "url": "assets/js/285.97fc09d1.js",
    "revision": "673f7728061f7f38b1dac30c4786cb34"
  },
  {
    "url": "assets/js/286.2f82c6be.js",
    "revision": "1cd2f6e70570e21562bef3cbff23ab3e"
  },
  {
    "url": "assets/js/287.f54a38f1.js",
    "revision": "be443b870159cf9c5e06f35249816ef9"
  },
  {
    "url": "assets/js/288.ab359aaa.js",
    "revision": "3001eb59f1acb2fac0036a604e1c74e0"
  },
  {
    "url": "assets/js/289.baebaf92.js",
    "revision": "1a6d344def6db8e029e24ebe98802254"
  },
  {
    "url": "assets/js/29.65b7b566.js",
    "revision": "7d123517c76a66444a77575afc957f02"
  },
  {
    "url": "assets/js/290.1859022f.js",
    "revision": "11ac84a57784bc5e7f4f46fb2fc8a7f2"
  },
  {
    "url": "assets/js/291.e8c84f81.js",
    "revision": "c15f1ebb0f016981c44ea0485eafdaef"
  },
  {
    "url": "assets/js/292.5453b526.js",
    "revision": "d6169df3ec512ba4b8191e9fd79e27fe"
  },
  {
    "url": "assets/js/293.c10c3abb.js",
    "revision": "5ab4d44bec6cafc739a77c16bc860725"
  },
  {
    "url": "assets/js/294.02f0b926.js",
    "revision": "5c33bb8b78dfaed0c4bc516a0302f7bf"
  },
  {
    "url": "assets/js/295.19a5ac18.js",
    "revision": "3be86e9e973208d20fa1a593c2117d92"
  },
  {
    "url": "assets/js/296.705090d4.js",
    "revision": "b9a08037b543eddbcd27070402d9cfba"
  },
  {
    "url": "assets/js/297.72e6e3a5.js",
    "revision": "5731dc35caa7b9d10fcf2573d695f962"
  },
  {
    "url": "assets/js/298.26fb0f9a.js",
    "revision": "09f16f3f3b5c4490d044133bfebcbefd"
  },
  {
    "url": "assets/js/299.c5c32a82.js",
    "revision": "e63715609e19c80b8535dcf34ddf1f3e"
  },
  {
    "url": "assets/js/3.27ac0c6a.js",
    "revision": "163f9e67b1ab33f4e90d9775f4e8d397"
  },
  {
    "url": "assets/js/30.e3ff88ed.js",
    "revision": "0521c1eb45c71db9d5241ac1271aff45"
  },
  {
    "url": "assets/js/300.4292d2d2.js",
    "revision": "0ba3868b2762b417ba5e16f727172a9e"
  },
  {
    "url": "assets/js/301.4f1609f1.js",
    "revision": "b62b151be713411b4272c22c7fb64c22"
  },
  {
    "url": "assets/js/302.42041635.js",
    "revision": "ffd850ca6392ac6925b2babf5eb350fd"
  },
  {
    "url": "assets/js/303.6a6bbb32.js",
    "revision": "eb7a6f398db1bf2b4020cf3a821de8a4"
  },
  {
    "url": "assets/js/304.1dd25e41.js",
    "revision": "b7e4679fa233af00d3183b072b08c0a0"
  },
  {
    "url": "assets/js/305.f65f2229.js",
    "revision": "c87d286be023f7f15917d10f33622123"
  },
  {
    "url": "assets/js/306.58ef6143.js",
    "revision": "7425ba4d3f84fe70772398fbab5085ae"
  },
  {
    "url": "assets/js/307.c7919e1c.js",
    "revision": "4ba49ca2757b0deb6b105a427c2c1b40"
  },
  {
    "url": "assets/js/308.f1b5e787.js",
    "revision": "3f2d07f194e0eb8833e1db452c233d30"
  },
  {
    "url": "assets/js/309.2a79ca32.js",
    "revision": "281d0d39677cc5da9bd48fe43a6b6515"
  },
  {
    "url": "assets/js/31.ce96ee97.js",
    "revision": "801e2bece3736dbf386a34fa4cecafb1"
  },
  {
    "url": "assets/js/310.a2a9427c.js",
    "revision": "75a965e8d01bb9609ca266134c6c80c6"
  },
  {
    "url": "assets/js/311.40bcad61.js",
    "revision": "e2a032c11e83099ce3c7e693cb44c678"
  },
  {
    "url": "assets/js/312.2fa2d006.js",
    "revision": "16a78b0a93bfe076a0a1b573fb56eb37"
  },
  {
    "url": "assets/js/313.bf6a5399.js",
    "revision": "859cda9abafdbd7e4085e6a67a3b9944"
  },
  {
    "url": "assets/js/314.1ddf6bb7.js",
    "revision": "fd6212748ec4cd0ed89be73267575607"
  },
  {
    "url": "assets/js/315.8362a553.js",
    "revision": "14bdfc9d97e4b1e05bc9c414196bf377"
  },
  {
    "url": "assets/js/316.bd701d5a.js",
    "revision": "677739721f0397a3df98622cc8265480"
  },
  {
    "url": "assets/js/317.e993e169.js",
    "revision": "195a317467b509ccd55874cb46d7fe70"
  },
  {
    "url": "assets/js/318.a35066ff.js",
    "revision": "3b7b259c08ccc2ecf167a794ec7738a8"
  },
  {
    "url": "assets/js/319.d39a3e9c.js",
    "revision": "b3774a19d7e704230fd275c3f415a0fb"
  },
  {
    "url": "assets/js/32.da96d9a4.js",
    "revision": "3a7e47b90e5a72a56fda87d7b1308fe8"
  },
  {
    "url": "assets/js/320.87f8e273.js",
    "revision": "a97e99d31876f31881859cab7ef27d5d"
  },
  {
    "url": "assets/js/321.f8e1eac3.js",
    "revision": "60a568d91a763e7c98106ed54b167ba3"
  },
  {
    "url": "assets/js/322.0c1086e9.js",
    "revision": "3faa532a3a5eb7993a3a80d85e01d313"
  },
  {
    "url": "assets/js/323.d48d43e3.js",
    "revision": "1d01436313c8e1cea6d649c6e63ec5c4"
  },
  {
    "url": "assets/js/324.d35f07f5.js",
    "revision": "6fd3b9d70ab075be539e14aa639bce79"
  },
  {
    "url": "assets/js/325.134e409f.js",
    "revision": "77ea3eff3d948d968e959d60d8b2bc97"
  },
  {
    "url": "assets/js/326.db30c5ad.js",
    "revision": "ec5e377de98eefec75a1cb0d7f43737a"
  },
  {
    "url": "assets/js/327.137302e8.js",
    "revision": "398305a17a493583ce0ad90a021a6475"
  },
  {
    "url": "assets/js/328.80589f7e.js",
    "revision": "db9ef862c22c8e50625a218f11b3cfb9"
  },
  {
    "url": "assets/js/329.e9a45468.js",
    "revision": "61d27e51e6af5673cab6e2de6246ebdd"
  },
  {
    "url": "assets/js/33.c9f4a46b.js",
    "revision": "fc32500d83dc1c4b7f9083e2faaf82a8"
  },
  {
    "url": "assets/js/330.53160359.js",
    "revision": "dcfc7170929f508aa7c146d668380fbb"
  },
  {
    "url": "assets/js/331.5e497560.js",
    "revision": "48b99009b1784fcadfe918888d3df932"
  },
  {
    "url": "assets/js/332.7a079421.js",
    "revision": "9cc6ba2817bbf3656e264a2a25e87ca1"
  },
  {
    "url": "assets/js/333.0e5f1b46.js",
    "revision": "b7cfdf3cedde90c1980bdd6a5ccc96bb"
  },
  {
    "url": "assets/js/334.530d596d.js",
    "revision": "c7aa76ac3a62cde63bbcc2335ab358cd"
  },
  {
    "url": "assets/js/335.486afc65.js",
    "revision": "b8ea29c47405a9d2e7b22f3d8234b563"
  },
  {
    "url": "assets/js/336.d2bf1ef6.js",
    "revision": "c4c1112ac8761302074639018055de0f"
  },
  {
    "url": "assets/js/337.f74df61c.js",
    "revision": "aedacc9bee3535fb2b46bfb78069f767"
  },
  {
    "url": "assets/js/338.36f136c1.js",
    "revision": "a7475d08a2e3a6d3b9023dda5d954c9a"
  },
  {
    "url": "assets/js/339.c2f4cf94.js",
    "revision": "2037740bf0dea4a2eabeaf2a9ddab77a"
  },
  {
    "url": "assets/js/34.789216a0.js",
    "revision": "8961ba3523793205e6d75d5874fddfe5"
  },
  {
    "url": "assets/js/340.3c303195.js",
    "revision": "fb5b9d2f08bb0f95de221aadb0b4488b"
  },
  {
    "url": "assets/js/341.5de5a8c8.js",
    "revision": "69c4e1f7b2bd87935decbe5299e379e1"
  },
  {
    "url": "assets/js/342.dadc95f6.js",
    "revision": "1dd3999c3abf49f3baf07a22bfcf90fa"
  },
  {
    "url": "assets/js/343.a9ee88cc.js",
    "revision": "ed6d3d6713743615a1e89a37e8041f40"
  },
  {
    "url": "assets/js/344.588d33aa.js",
    "revision": "5ab63568408369ca16a6a72db7612378"
  },
  {
    "url": "assets/js/345.1c87cc08.js",
    "revision": "57cdf13e83b190ddd6834558e5b48504"
  },
  {
    "url": "assets/js/346.93c82137.js",
    "revision": "0966e7076cef475fc2f611aee549fbe5"
  },
  {
    "url": "assets/js/347.b432622e.js",
    "revision": "0e7fabd5cc31f5f82b5b8bcd8136fb98"
  },
  {
    "url": "assets/js/348.f98a22d7.js",
    "revision": "868713258c064553629925250204e07e"
  },
  {
    "url": "assets/js/349.fdf286a4.js",
    "revision": "4f9e6b9ed4a6224d7811fcd8693d9f63"
  },
  {
    "url": "assets/js/35.8bba5bf6.js",
    "revision": "7561891a513719417897d5bac449683d"
  },
  {
    "url": "assets/js/350.134e4935.js",
    "revision": "270ec7e6d2c33af73f3ab993cfb22978"
  },
  {
    "url": "assets/js/351.6b723120.js",
    "revision": "1263e10c396305073d6e953dbd9f0fac"
  },
  {
    "url": "assets/js/352.bd1e3b5d.js",
    "revision": "d2774495c5b3f1adf4f5f59191e0f450"
  },
  {
    "url": "assets/js/353.324960b8.js",
    "revision": "8267fccdc3f2c74208b0ef423fdb6b5c"
  },
  {
    "url": "assets/js/354.aa3e81ee.js",
    "revision": "b63a2d4d8a8c69f13f4069a0e58a836b"
  },
  {
    "url": "assets/js/355.221b7317.js",
    "revision": "6d945fcb7e803fd2321ad25e9eb3d308"
  },
  {
    "url": "assets/js/356.3639c20a.js",
    "revision": "9b659dfeddfcd319d1a4ace32c2fdcc2"
  },
  {
    "url": "assets/js/357.19777888.js",
    "revision": "e1d0c84faeb79bc74b636dfbb4627973"
  },
  {
    "url": "assets/js/358.0195875d.js",
    "revision": "42d4ab05b5d2ac5d5fda529af6b42ab5"
  },
  {
    "url": "assets/js/359.48bae805.js",
    "revision": "974c887a266be7721fd7c0404c7f804c"
  },
  {
    "url": "assets/js/36.b0d578ea.js",
    "revision": "b03e64bc7ad2ba613567bbdbf5c22e80"
  },
  {
    "url": "assets/js/360.c2859b5f.js",
    "revision": "1decac54fece0244f5024b0b9a87a448"
  },
  {
    "url": "assets/js/361.3700a494.js",
    "revision": "8e979939be9b3272f60739dbada29889"
  },
  {
    "url": "assets/js/362.a9849406.js",
    "revision": "ee5812f1f729552079e263eed811befe"
  },
  {
    "url": "assets/js/363.6a7a4f21.js",
    "revision": "596d686fc9332ed23ba52a6afe484d05"
  },
  {
    "url": "assets/js/364.1e77164f.js",
    "revision": "022207e10fd99840024a67842c8985da"
  },
  {
    "url": "assets/js/365.360d314d.js",
    "revision": "8e3c5c6f6968655bf4ad924a981d7c52"
  },
  {
    "url": "assets/js/366.84996696.js",
    "revision": "acf24d10916cfc216fd9133d8b1d1264"
  },
  {
    "url": "assets/js/367.7d816c6b.js",
    "revision": "351161bee5f2c738bcbf1dc4631c0fff"
  },
  {
    "url": "assets/js/368.a85961df.js",
    "revision": "416f993e545342ddcba94dd3f82318b3"
  },
  {
    "url": "assets/js/369.f5071c8e.js",
    "revision": "2837e1b52b0cc1e4b58232c94076561e"
  },
  {
    "url": "assets/js/37.9747b485.js",
    "revision": "4f09ebd6e2ffa11e3423ebf719808b6c"
  },
  {
    "url": "assets/js/370.a2202243.js",
    "revision": "6dff8d1e6ebb97e08d5e9d8a1780adb4"
  },
  {
    "url": "assets/js/371.e6d4b191.js",
    "revision": "1689f632809b613e29f9065ac6ea0203"
  },
  {
    "url": "assets/js/372.396fa202.js",
    "revision": "cfc447ed2942732cda243f1d5522dc68"
  },
  {
    "url": "assets/js/38.4f254812.js",
    "revision": "2aeac9ecc7c8d555b3e6d3ee5a4e9b00"
  },
  {
    "url": "assets/js/39.87d016fb.js",
    "revision": "5ad521f2999ae453c778436dcd2cc35a"
  },
  {
    "url": "assets/js/4.f812ec8e.js",
    "revision": "36eaab5a502e489b2bb8fbb93d5e5564"
  },
  {
    "url": "assets/js/40.f015bb82.js",
    "revision": "d6e2c4cef45b8bab54971bd09585b5eb"
  },
  {
    "url": "assets/js/41.ade8659e.js",
    "revision": "6298df1ed132da8cb99c26e990da99bb"
  },
  {
    "url": "assets/js/42.ed0bc123.js",
    "revision": "ec47f57ce3a9da255e209b058adc9979"
  },
  {
    "url": "assets/js/43.84b7e877.js",
    "revision": "87eb7a85d60fc6923e58b34ae8ca6b96"
  },
  {
    "url": "assets/js/44.6a6a383a.js",
    "revision": "9314239e5296d1928bd717fb5a4dff0c"
  },
  {
    "url": "assets/js/45.908eb9b4.js",
    "revision": "9fcff5460179b0f91b3ad7695875492c"
  },
  {
    "url": "assets/js/46.493e1046.js",
    "revision": "5d031ed4dee4e1552a287586ce59169a"
  },
  {
    "url": "assets/js/47.fe0e649a.js",
    "revision": "2a1a322ef156207c5a76ee48e372180a"
  },
  {
    "url": "assets/js/48.d8961f83.js",
    "revision": "461e86185ec3d263b1c25d730c64d18a"
  },
  {
    "url": "assets/js/49.8776d56e.js",
    "revision": "e2f0c5e9dbb5ba35094dc18282f9172d"
  },
  {
    "url": "assets/js/5.b4d05650.js",
    "revision": "f59c73b285b4e9679835d34a3580f075"
  },
  {
    "url": "assets/js/50.9a2265fa.js",
    "revision": "9882a0d88545cb8d562fdfb0baf86496"
  },
  {
    "url": "assets/js/51.522bae37.js",
    "revision": "282085bbe9cf38b7017606b425da2172"
  },
  {
    "url": "assets/js/52.d1ac9845.js",
    "revision": "88c794085f1f9752b810c2f458dcfd75"
  },
  {
    "url": "assets/js/53.6af52f00.js",
    "revision": "1bfa34f282025454805fd395f5c4e9b4"
  },
  {
    "url": "assets/js/54.4205629e.js",
    "revision": "d609b04a8ffa9721f250b039286830b7"
  },
  {
    "url": "assets/js/55.c570ee30.js",
    "revision": "53cc00072210c7b3ddb61b132a7c5422"
  },
  {
    "url": "assets/js/56.a0f64238.js",
    "revision": "9325af7d563ca45cd18af1b9e4fcec6d"
  },
  {
    "url": "assets/js/57.67145fba.js",
    "revision": "f2793aebe2f5892e9a0864bc6fd16b72"
  },
  {
    "url": "assets/js/58.7fd4fdb9.js",
    "revision": "92b45cfb2ac562e324459460662de724"
  },
  {
    "url": "assets/js/59.e480738b.js",
    "revision": "cbc60c2c64ec30b28be0e7e84ae519a6"
  },
  {
    "url": "assets/js/60.6c91f8f9.js",
    "revision": "35828caaa8a382781fc81c487c0e17dc"
  },
  {
    "url": "assets/js/61.0068d5c0.js",
    "revision": "ab891cb5e2f73ec30dc1e49aabbba0d0"
  },
  {
    "url": "assets/js/62.cdeacfa4.js",
    "revision": "9beb96edc457960c3354e8a5f5852520"
  },
  {
    "url": "assets/js/63.e85db377.js",
    "revision": "8b3bfc7ebe50f216554fa52e6fd101c5"
  },
  {
    "url": "assets/js/64.7a9ddc31.js",
    "revision": "17bdc50a14e0c41d063b409c004020b0"
  },
  {
    "url": "assets/js/65.b84f4f2e.js",
    "revision": "7d3738789ff75cb1b25f9cee97fa8a93"
  },
  {
    "url": "assets/js/66.41a4a5e5.js",
    "revision": "4c2c26f1e3b56880ba41226414653212"
  },
  {
    "url": "assets/js/67.fb00cecc.js",
    "revision": "a5df8be71183c32bce58e2d1a1a2388e"
  },
  {
    "url": "assets/js/68.d229bb6a.js",
    "revision": "a85f03ea347a727b0724cac00f758963"
  },
  {
    "url": "assets/js/69.df1d0280.js",
    "revision": "7f4d41afc74335211f3b46c3de242884"
  },
  {
    "url": "assets/js/70.58561c77.js",
    "revision": "1c9c07a79ab6705615e1ca4e21d0f7d3"
  },
  {
    "url": "assets/js/71.87dfd38e.js",
    "revision": "7c0f2d09052b6d494f1984128fb98bc7"
  },
  {
    "url": "assets/js/72.6b477aed.js",
    "revision": "071db7c65b9252e205d9b76655d7a0ce"
  },
  {
    "url": "assets/js/73.9d41d464.js",
    "revision": "1c33a7a0792c59b08689632a641f67a1"
  },
  {
    "url": "assets/js/74.bf2cf99b.js",
    "revision": "511058e3ea194be4ad66635e04408e60"
  },
  {
    "url": "assets/js/75.50b53710.js",
    "revision": "0d537dd0d2d2709d89bc6c9955f1ddff"
  },
  {
    "url": "assets/js/76.5c4f0f0d.js",
    "revision": "262c1f2d11ff9d6cd0a041f382445350"
  },
  {
    "url": "assets/js/77.38269780.js",
    "revision": "46f407cad4a1aecda9508b70c0632bdc"
  },
  {
    "url": "assets/js/78.c1314ef4.js",
    "revision": "8fafb02ab9a94cbe7ff746f99688edf7"
  },
  {
    "url": "assets/js/79.87d6b312.js",
    "revision": "c786507f2b666c7d2058c2df0327887b"
  },
  {
    "url": "assets/js/8.a7f1f131.js",
    "revision": "1fcd700bc171cc749ecf269ece7e7c88"
  },
  {
    "url": "assets/js/80.9a7db4ef.js",
    "revision": "7010c3a475e4eb77098cd3afc04d550e"
  },
  {
    "url": "assets/js/81.68270293.js",
    "revision": "481d7138070e96d6a4e26a5f230f0cb0"
  },
  {
    "url": "assets/js/82.09185d60.js",
    "revision": "1371191bf477adc2af16e5cafc92cf50"
  },
  {
    "url": "assets/js/83.904dee4e.js",
    "revision": "20f3a4952fa3237fb7effb19969803d0"
  },
  {
    "url": "assets/js/84.6e6882f2.js",
    "revision": "1e3661cec1fcda95f21cc7d5c68ac566"
  },
  {
    "url": "assets/js/85.94e50dde.js",
    "revision": "be0fe7b130d3488a7249b90fdf961363"
  },
  {
    "url": "assets/js/86.c58e1c20.js",
    "revision": "7583f80223f92dcd462d9e423a1fbbe2"
  },
  {
    "url": "assets/js/87.badb5f8c.js",
    "revision": "d675014c95ddcedb9803e336cbac2da7"
  },
  {
    "url": "assets/js/88.4127652e.js",
    "revision": "e1f34c5b6ddeb328b7623f703aee1c52"
  },
  {
    "url": "assets/js/89.c56e803d.js",
    "revision": "3f8b54bdd5c11cf5c3a8a3359133df48"
  },
  {
    "url": "assets/js/9.1289362e.js",
    "revision": "310e6ac73eb1cc27ec73c3e7ae6f2ec2"
  },
  {
    "url": "assets/js/90.50118b29.js",
    "revision": "9cdd8a3bfd15b12f8397c833cdb476de"
  },
  {
    "url": "assets/js/91.3079a499.js",
    "revision": "59099788fe257b309c1f10a2a42b8931"
  },
  {
    "url": "assets/js/92.785d2071.js",
    "revision": "71956645d5e59fae6ad17a8a9263f14b"
  },
  {
    "url": "assets/js/93.8c3de433.js",
    "revision": "01d7937ed2aa79396a9cba2a73e57648"
  },
  {
    "url": "assets/js/94.04df3112.js",
    "revision": "7a693b9ccb1d6317a468b1073cb2d5aa"
  },
  {
    "url": "assets/js/95.fa725831.js",
    "revision": "10116777ce421c9637d27913d0d63db3"
  },
  {
    "url": "assets/js/96.aef367c0.js",
    "revision": "386a82aeefa34eb8f19f3797ba819d32"
  },
  {
    "url": "assets/js/97.8140703c.js",
    "revision": "ab77d9a044285bb7494dc757738ed263"
  },
  {
    "url": "assets/js/98.962dd575.js",
    "revision": "37598f58a09a181ac04fd664213ea3fb"
  },
  {
    "url": "assets/js/99.c6a916b4.js",
    "revision": "2625639a5bfaef546f8caffd93606988"
  },
  {
    "url": "assets/js/app.d80801d5.js",
    "revision": "0eb90ec4f41de8a5b084accfb2a853d9"
  },
  {
    "url": "assets/js/vendors~docsearch.9a9c9fc1.js",
    "revision": "761395c9ed2a1a22f71c58faefe14e4d"
  },
  {
    "url": "index.html",
    "revision": "de4568182b1ad38ee745b159298b90bf"
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
