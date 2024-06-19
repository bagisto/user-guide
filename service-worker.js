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
    "url": "2.0/attribute/attribute-family.html",
    "revision": "997ad608dddc14bd13c94f10b99932eb"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "a12fa40adebe5c30e0fadbbabcac212b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "9a1e1e3b8769ec4b0a78abdb457df71e"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "85be95a582bcaed47c48dc9ca85c691b"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "146fc986e5414c3efb3aa0d2de49e526"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "07d4da6b9d4c748a032f5da3a2a59272"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "75eec6f5036d314c90d6d08be9a69e95"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "8d684aa4d229400c3fe69acb3270ea91"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "823251550f85ef896442fcfc01b227c1"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "4ddd87221c4370a12f3b32507a402083"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "18039f59bca11d5fe1f350695a685866"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "a4b983f0040bc880ce7c9ec97b77f278"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "86196703c5a6b5b3e18fe9a43a3e9202"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "2caf64b50c7c762bc2d9b79143aa22ff"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "1afbf731721a6f06865bec67ef821a98"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "0569445285e553cd6b733504efc996a3"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "e28a22d018d56350e9c036718c5efb9d"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "cd17a69abf0ba3a8d6f0eb01ae78fbec"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "2bd781831d8f36d3aa82d9c21dc812b1"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "bf741e3679921602c0ccaaaa09701cac"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "af78583f35d641fddfbb35942082660f"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "765dbf02e937e6d43698d9f1df833516"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "17db959392e32281016e66dcfb114b19"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "c737891062f678ca654abe8a23eb5503"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "d0c1480376b72f76c766554a208cea56"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "2e88ff37273af9d804ecd33f19316699"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "38c6bb1746fe48b8f412848baa4b8997"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "e3cedd027015496bd2b2bde77bb81db9"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "9d57e0e0de8c89f1b5c745b247fd1627"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "6cc7b26edfdc521f5b069240d8bf1026"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "0935477c9fe9f9c1c125f09ed113255b"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "76b8fb0a05bd1c9d454972a6fc33199b"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "ccdb798e49422c543ff0f6bd2a39ad48"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "d2ce8e76d3b1486902e439cc6af04eb4"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "ba088237e157321115476f56cd13ddd9"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "1a58d213795c0172becc043cc3138b60"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "35c3923539399728de5ea4f7e842db19"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "91192d7cc0b27b416aaada2ca2e98867"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "7f6c882ee713b92c5432945fa417ec9b"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "149999736fb68adbede20c33f6a0eb22"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "a8756d7a61d939c65731d9defa0421c0"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "1e87203ad6e6c07aabf33d53bf7e69ce"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "a175109383c19456096da7cecb117ab6"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "ba3c8dbf3c38db32a60fca1ea8f086b1"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "e38b50c2ac0abf0a2d72b023d77e5605"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "a3a49a0bd81acd093f743265899955f3"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "e96acb9b1078a44dc75f57c3b5927d9e"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "7188c5460de48c29a01b7a7eaf83bd40"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "78ec5a32e3c072538382ba82c7cb9658"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "9c577195a21ae0a1248c91236bb0e8ce"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "551529d3d8aa2a2a61550e5854a54954"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "1de20923ef2324b6b727f4c5a0ff515d"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "9a33f5b7fd3d877762c989156c29ba60"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "94383f7d20ce59eacb8f4f6ca2ce6d0f"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "42be938764d300a41702ad0d92c4b035"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "21a3e0bdc6c87db76f64e9e21c98f592"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "9bb109dac593fef8006fd258fdc6493c"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "f124ae60b6ae288665b34f27a0dca1c2"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "8811c97652093059fd8b88fb89e70bcf"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "8abece2b928893e7e348874b173d10bb"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "5bd78afeb350e742eb091fb2ec2c96ba"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "0a321367d30d3191fd2cc15cbe2ef132"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "19a9d2080cbc510586454d60bc025303"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "b23fbad7fee963743e7e6b1ef28c74c7"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "296b3bd38c7218cba38d46ce2ca36738"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "91024aa903f640bf85f9d3dd71867fa9"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "2105f051cb9a674fab8e4e8e49337416"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "b0e050fe52f229f79e24950d38138879"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "d3426b2a1da45f7ac25435ab172172e2"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "9520f2d026c710bdacbf818ba3ff0ea2"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "12f12bfc26b877093f02831ebd6966af"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "4f392ddbf35ba190194ba7f3bcafef08"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "4692847fd80af9981c6f4a5dcc87e0fb"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "6897625a8d5db1a9669eae4dd5f27bdc"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "9588a96709ae1ca69fa1251127780143"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "b497ec2b83617c540aa98427e78122b7"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "ce7083b38e04e280342db4dfc39fedde"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "85231f53b6cf91bc8ea472bd2aa0e843"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "51bbc0d3f2c0d8051ea3101039df18b9"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "ef01a5418f3dc0846e898584f6582bb0"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "c42d1de61794f6d226764622e69933b1"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "4e3f51efb0ee73db353490315f9fc642"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "052f433c65cacfc0d48cb58a513f3f74"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "1a3cdcaf71a0091bb64487dd614b408e"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "c12637b6e82819e90499eb15b7d5efca"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "20329028a39d19e64bd840db6d5289c4"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "091a4092f40057121ddf1e74017c0360"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "3c338fe3090439a0034bb4652971bc52"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "431bbaa6b5a0c05fe0f56cbf2f8f7a39"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "501e74eabcf3c5fce9f50784f26fe97e"
  },
  {
    "url": "2.2.0/attribute/attribute-family.html",
    "revision": "ffc20979cb4306a8681bcbf2fdfcdae6"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "208ca622fae014a299a3034f9fe5fcdd"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "32bdf3d93eaf749f3b76cdba9690b6cf"
  },
  {
    "url": "2.2.0/attribute/overview.html",
    "revision": "0d103413fb2bb8e25a94e073b59667da"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "0de55fd3fff503c04fdd9bfef64b9629"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "557b6deff0524ac55f5bf5165b6e50bb"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "e3d194fee7b979560d9e2d3faa520071"
  },
  {
    "url": "2.2.0/category/overview.html",
    "revision": "31513dc712c9b6a7d6d71013b9113291"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "4fbe409ee52eb6441a9ab993f5481f43"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "1f8efa29cc749ce034a9cd8257815ecd"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "d9e8eabe52050434d7b3a82c3b77573b"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "37efe4056d34f887e100e65ff95e4385"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "fe4c52ede7d7baed60000fe876a7992b"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "46ad2cb6fcad8922cd574a3329c2fb6a"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "6a790f11acb52cc2cb9c5c537906b006"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "a816f7df88fa8e38d76ead25d4a210f2"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "aee057839d10197ccc3abae83f52a253"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "fb98d9179b699ae8cfd8ea5830b5dbf1"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "9c602801448a1b255351515be8441169"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "a03ea132713c114718d93663f023b1eb"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "c450b985a2caebeaf4c5a2968a901f79"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "4329aee5dfff95b8a829d882fd0442dd"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "34f4d1e9341be84be0bc3d5113580b6e"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "efab327424b77c2db0a422c648380c5a"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "8ba69573bd47f7bbc0bdace0a9542df0"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "5439b142dd3568988870f4ac45a6f9e9"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "ab7a413c431bb6dadd63f1ed1a09fbd6"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "aa33c5b6599302895281024e96ffffd5"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "3d66283252f987a148cb1ff2890c4874"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "a42613197e410a3794f1defccb133b8f"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "6abde9f64aae23e41dc5d8fa047d1b30"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "7ec054d60422365423349cfc5293a772"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "d252ad78108c3b352f5dccd2d8ddbafb"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "6e6b99feb6a111f50dd16687f4f4a3ea"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "c525df671048209724e45e5fcfdb1dff"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "d73b033d7a1c974af862abdb23fe48fa"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "44db7a6f50ba01abe2f017766945e832"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "8dd7766a688b5126268349ca038f7384"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "f751074848c2086ae483fd97e8f0518c"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "27916b1d67cbbd72479cae589383eda2"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "2f9337ccb9c0ff4892ae094aa4bddc86"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "0795586aa6fa17a88f5323585c72b233"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "ad6f6bde7f3e95f9139c1d70364b9523"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "1fee144de914983a5025ec4457bb3889"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "07dd0aee61c9a40feb141d954963f83d"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "70b83a0101fbabe6264bd484350d439d"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "f6801477b01c61f9b64c03836de67d7f"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "043c6e1acc8c266ebd1be0c82e609026"
  },
  {
    "url": "404.html",
    "revision": "ddccf0fa78b286afade8b22fdc23d6b8"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/accessControl.76a3d346.png",
    "revision": "76a3d3469396fe88d18e5ee5aaa1a19a"
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
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
  },
  {
    "url": "assets/img/applyCoupon.1fd0032b.png",
    "revision": "1fd0032b9015a51ef289c19eb6a0a09e"
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
    "url": "assets/img/bundle.5302b129.png",
    "revision": "5302b129967146ebc686735ba8c55ff0"
  },
  {
    "url": "assets/img/bundleOptions.01cb8cdc.png",
    "revision": "01cb8cdc5eeee8f6684dd51da2050d5a"
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
    "url": "assets/img/downloadable.67051ddc.png",
    "revision": "67051ddc29b8b662b724eddb30ba604e"
  },
  {
    "url": "assets/img/downlodableInfo.b6d199cc.png",
    "revision": "b6d199cc406607e28eaa126d0e1b8b6e"
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
    "url": "assets/img/familyGrid.8370fbab.png",
    "revision": "8370fbabc01b668e7d0b83c858d9e089"
  },
  {
    "url": "assets/img/faviconOutput.0af4ffb5.png",
    "revision": "0af4ffb591592d1e7893fc1a040730ca"
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
    "url": "assets/img/general.5849fe78.png",
    "revision": "5849fe78c23e9940aa3c4bab5eb717a8"
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
    "url": "assets/img/moneyTransfer.d78c9eeb.png",
    "revision": "d78c9eebbc07cf1dbcc0e20c2ca0a2ef"
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
    "url": "assets/img/saveTheme.fece12f0.png",
    "revision": "fece12f03744c824b2525579e71d93f6"
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
    "url": "assets/img/taxes.b9e43e0b.png",
    "revision": "b9e43e0b01fad3c1ac734dc697eaa378"
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
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
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
    "url": "assets/js/1.10adc921.js",
    "revision": "d9c4a3e405ae43000a35dda03f7c0c5a"
  },
  {
    "url": "assets/js/10.5a08223a.js",
    "revision": "2f3aa75386e6b0c3669368b0ec452062"
  },
  {
    "url": "assets/js/100.e9f152ba.js",
    "revision": "ab11a3d65a68fc0a3cb700c5723ed226"
  },
  {
    "url": "assets/js/101.602dd7b8.js",
    "revision": "0bc68d1a051668a2072da821691e4830"
  },
  {
    "url": "assets/js/102.7f8c225c.js",
    "revision": "3e3dc082316888d34646d476ff20fd74"
  },
  {
    "url": "assets/js/103.04eaa61d.js",
    "revision": "c336216f9beacae891d69722193353cc"
  },
  {
    "url": "assets/js/104.54296d5d.js",
    "revision": "aa02e91136968e21d09c3e40547c96f0"
  },
  {
    "url": "assets/js/105.40bd950d.js",
    "revision": "152ccd17de23dcf36018c4146eb44103"
  },
  {
    "url": "assets/js/106.fc54786d.js",
    "revision": "3044c7055a3d9347e18f40507f84c37a"
  },
  {
    "url": "assets/js/107.138ef1cf.js",
    "revision": "c46a2d9b6e79b18f84f7b80d93bbd0f5"
  },
  {
    "url": "assets/js/108.33794a72.js",
    "revision": "addaf0c020e4113edb6512db58c3e047"
  },
  {
    "url": "assets/js/109.86ac8a3e.js",
    "revision": "a3cfd96bbc3028df177a4e502956465f"
  },
  {
    "url": "assets/js/11.a14dd6cf.js",
    "revision": "f9209e9090820c3c2a41f58f02733832"
  },
  {
    "url": "assets/js/110.383ea588.js",
    "revision": "c6e80b57b9a166e074eec904c271a9ee"
  },
  {
    "url": "assets/js/111.6c8cdd50.js",
    "revision": "d24db282588d7deee922c0cb7747c0a0"
  },
  {
    "url": "assets/js/112.8a9e9ad5.js",
    "revision": "4987e68e184ce6fe655d30c1ee3ebc6d"
  },
  {
    "url": "assets/js/113.36dae48a.js",
    "revision": "743f8fc11ed652c5cba3b6c4d6994320"
  },
  {
    "url": "assets/js/114.288f97e4.js",
    "revision": "7c7267b6ff18f28d0737d0381162e61d"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.e951fbd7.js",
    "revision": "92cf0ed818a050a762c284ef0d738c62"
  },
  {
    "url": "assets/js/117.e4049b00.js",
    "revision": "6aaf30f3a1093d022577339c9ca6013f"
  },
  {
    "url": "assets/js/118.00a5e43c.js",
    "revision": "c561b6938815e7eff3535094a4b9f66f"
  },
  {
    "url": "assets/js/119.4540e8d6.js",
    "revision": "c059361c6ff5b8475c6ad4f8cfd9870a"
  },
  {
    "url": "assets/js/12.b78b548a.js",
    "revision": "0ffa3ebe8651ed59b18ea262e743f8db"
  },
  {
    "url": "assets/js/120.d8c7a4ad.js",
    "revision": "4f23d26bd2fdb87beaf8ae7b29bbaf0d"
  },
  {
    "url": "assets/js/121.df050432.js",
    "revision": "5b8c9753f24ba19d5bcd482a438e9b12"
  },
  {
    "url": "assets/js/122.2f4c6461.js",
    "revision": "db36f63031b800aedf338650af678452"
  },
  {
    "url": "assets/js/123.d01e8ba8.js",
    "revision": "1ce8d4fccae586f50569a4b560af44b6"
  },
  {
    "url": "assets/js/124.4902dcb6.js",
    "revision": "1307de2136c5d2df55d28e99c7bef278"
  },
  {
    "url": "assets/js/125.ab3b44a8.js",
    "revision": "0b00d9cf415510b64154e02ac3cc9197"
  },
  {
    "url": "assets/js/126.0d617159.js",
    "revision": "8bb401fa919c2adefc2d5115481a242d"
  },
  {
    "url": "assets/js/127.63a0fd9b.js",
    "revision": "905d1072a020537289b35c6dc93b96e1"
  },
  {
    "url": "assets/js/128.92a03d3f.js",
    "revision": "e8710dff2f89554bc5fae87e9e2be6a0"
  },
  {
    "url": "assets/js/129.006213f1.js",
    "revision": "28daab22f895d5261f0cba92e55e4593"
  },
  {
    "url": "assets/js/13.d957704c.js",
    "revision": "beee808c86632e7bbaadb3a65784b0ae"
  },
  {
    "url": "assets/js/130.dc5e503a.js",
    "revision": "e19721eff994cc1535a7e4e068b68673"
  },
  {
    "url": "assets/js/131.0df00e1a.js",
    "revision": "13f8e6b22c4e9572f81af383bcd78dfb"
  },
  {
    "url": "assets/js/132.b0963ce6.js",
    "revision": "c84f20b857455b539018c653a057dda6"
  },
  {
    "url": "assets/js/133.cd83f4f2.js",
    "revision": "75bc95225fde0e5d3bff12b0bec6a63d"
  },
  {
    "url": "assets/js/134.9e87303d.js",
    "revision": "f37d430193ad9e00e91efd7b82845af5"
  },
  {
    "url": "assets/js/135.31ec12de.js",
    "revision": "ba0bf2476bd34be7f719fd3fb47d2afc"
  },
  {
    "url": "assets/js/136.ad16d53d.js",
    "revision": "8169ef8ed2c1196b14e1554fccfa4408"
  },
  {
    "url": "assets/js/137.65e16251.js",
    "revision": "1f3a983fd739e3a913ba290c6e0c87e3"
  },
  {
    "url": "assets/js/138.928fc028.js",
    "revision": "6b8763b4f334d0c75a5d173c9bad58e5"
  },
  {
    "url": "assets/js/139.fd32669e.js",
    "revision": "058ebff25cff3ee6e90f3e4764b38168"
  },
  {
    "url": "assets/js/14.3d719917.js",
    "revision": "8db0d9615b988a9b1d19fae122b7c93a"
  },
  {
    "url": "assets/js/140.baabded0.js",
    "revision": "195fd90e383ddc0ff15d64d580e998e7"
  },
  {
    "url": "assets/js/141.6909e023.js",
    "revision": "7195997a9092263eeee551e847951822"
  },
  {
    "url": "assets/js/142.02f70818.js",
    "revision": "c808bf54fd871de80c80437202dbad94"
  },
  {
    "url": "assets/js/143.9b4b7bf1.js",
    "revision": "0b9afdb7421e3634bfe4f32f32ec7b2e"
  },
  {
    "url": "assets/js/144.df4b6ab2.js",
    "revision": "68bf5dd24345edc82bb1de09aa819c8f"
  },
  {
    "url": "assets/js/145.d0f25f87.js",
    "revision": "085ea7053d98b82d0047a6449d2d8e72"
  },
  {
    "url": "assets/js/146.f73baf4e.js",
    "revision": "1683bd6c8c26baa1c25a1bd438ac3a86"
  },
  {
    "url": "assets/js/147.bcaf21de.js",
    "revision": "986016acf1556315e5dcdfa0e8a82d2e"
  },
  {
    "url": "assets/js/148.57e96ff9.js",
    "revision": "6acefd169a759d3ac28f7018f67de0bc"
  },
  {
    "url": "assets/js/149.f1513dd2.js",
    "revision": "1e958bfba47195187b8fce040e30292d"
  },
  {
    "url": "assets/js/15.71537217.js",
    "revision": "e69d967095af099903dcc43bee4562cd"
  },
  {
    "url": "assets/js/150.66c08eff.js",
    "revision": "bf80770ab76e9ce65d70838294655441"
  },
  {
    "url": "assets/js/151.ee3df205.js",
    "revision": "f2e702ce8e8167de4ffc94af9446f3a6"
  },
  {
    "url": "assets/js/152.dbf26e1f.js",
    "revision": "b2c40c91a3c4fc9c4994cfafc7a0ccd5"
  },
  {
    "url": "assets/js/153.6209ec52.js",
    "revision": "97fd41b4f74d564851fac4b5c43f1472"
  },
  {
    "url": "assets/js/154.f782e6bf.js",
    "revision": "a6f84aedd21e41231b568f72b12e76ab"
  },
  {
    "url": "assets/js/155.4dac3c9b.js",
    "revision": "e3a828ae04178a3db5eda4709c887a2b"
  },
  {
    "url": "assets/js/156.bf25bb3e.js",
    "revision": "223f5867d04b483ce79196a4f7b82c36"
  },
  {
    "url": "assets/js/157.de295258.js",
    "revision": "b07ae43f9c82336caaaf617415b8445a"
  },
  {
    "url": "assets/js/158.8da5b872.js",
    "revision": "c950e01c33cbdadb9562f008f5ec80a8"
  },
  {
    "url": "assets/js/159.af81ebac.js",
    "revision": "7648cafbdee381a1d2f84c6c677eeaf7"
  },
  {
    "url": "assets/js/16.27524c76.js",
    "revision": "f5d312759a890fb596284ca73c12fbc1"
  },
  {
    "url": "assets/js/17.218d9e5f.js",
    "revision": "6ebe5e0598c6ac1baffe30d29f7d1cc6"
  },
  {
    "url": "assets/js/18.66998d2f.js",
    "revision": "8dec71490ff6b919f23170ac0ea3a8d7"
  },
  {
    "url": "assets/js/19.27fb85c4.js",
    "revision": "abc21b10600313108413590e59b3b7df"
  },
  {
    "url": "assets/js/2.dbf2de2f.js",
    "revision": "aa3709b037736a84a8932fdab5826a92"
  },
  {
    "url": "assets/js/20.bd8b7971.js",
    "revision": "e0865037673d3747492b28f92bce7639"
  },
  {
    "url": "assets/js/21.eafe3eb4.js",
    "revision": "8e2342714b659465109c57968372e3ab"
  },
  {
    "url": "assets/js/22.f7f9ca1e.js",
    "revision": "bfba7deed413a7e64925d5c5c3c7cc70"
  },
  {
    "url": "assets/js/23.bd21a103.js",
    "revision": "66ec6f3e24c060c1c0e896ba660b9a0a"
  },
  {
    "url": "assets/js/24.b1ebbf2b.js",
    "revision": "e295491ff8e111612f5a7eecb61d5a90"
  },
  {
    "url": "assets/js/25.4b69a12e.js",
    "revision": "11d26844792136d7e5f29dbc9eb1e01f"
  },
  {
    "url": "assets/js/26.2313f508.js",
    "revision": "9d2f55f67eed674ab6c031fbfa03956d"
  },
  {
    "url": "assets/js/27.63137a6b.js",
    "revision": "d587f31a234019d0214c8a81adcb9da6"
  },
  {
    "url": "assets/js/28.92ad00b8.js",
    "revision": "409dec35461f9a2c78dfb47f1ccca6d1"
  },
  {
    "url": "assets/js/29.f34a0595.js",
    "revision": "695f93a4d3697d15d0dedaa3b6a05dc2"
  },
  {
    "url": "assets/js/3.98b98fe8.js",
    "revision": "bd9975778bc8d5eb5cf2b939d8fd4055"
  },
  {
    "url": "assets/js/30.465c90cf.js",
    "revision": "271379684052b68f7e66eb5f9d3cf6f3"
  },
  {
    "url": "assets/js/31.5974c3bd.js",
    "revision": "d43bb005b22cf9b56c4834eb80e68c92"
  },
  {
    "url": "assets/js/32.f35d5af1.js",
    "revision": "11637d4738f61ba47b85cd765fc987cf"
  },
  {
    "url": "assets/js/33.c89a4e96.js",
    "revision": "4b20d68307c32cbc8a2c4eeaa1c46aaf"
  },
  {
    "url": "assets/js/34.25df3477.js",
    "revision": "844acc481f91ac7a4205b1a0186551b2"
  },
  {
    "url": "assets/js/35.9daac402.js",
    "revision": "9d69aaa76d8eeea744c49cb4fe4dd831"
  },
  {
    "url": "assets/js/36.232ffdec.js",
    "revision": "f9e31cdfeb76791ae138591f819b7b88"
  },
  {
    "url": "assets/js/37.e989d306.js",
    "revision": "0d714fb98cee697c2899d3cc1a09530c"
  },
  {
    "url": "assets/js/38.b31a305d.js",
    "revision": "95d1acb21e9a1802c1693ef529f0d990"
  },
  {
    "url": "assets/js/39.a7804fd5.js",
    "revision": "994190dfa2cea8bd905f3359893ea0b1"
  },
  {
    "url": "assets/js/4.09113335.js",
    "revision": "fe36863acca2a3ed0a95fba7c90d31ec"
  },
  {
    "url": "assets/js/40.c897b3d5.js",
    "revision": "3de54070a3b20cc8536dcbcbf0084447"
  },
  {
    "url": "assets/js/41.a51a32a0.js",
    "revision": "39bd2ea4e1315bc5e9a89530cb6cc9c2"
  },
  {
    "url": "assets/js/42.523add39.js",
    "revision": "e9d8ef8cefd39c45eaf94c8673c19a00"
  },
  {
    "url": "assets/js/43.b8b1369b.js",
    "revision": "d025ff67d57d8d720613c1f5f4c684ad"
  },
  {
    "url": "assets/js/44.d1c49e57.js",
    "revision": "8a1d922ab06dc05394d38ce9efbe3234"
  },
  {
    "url": "assets/js/45.28c762c8.js",
    "revision": "0fdef19fddceb43e2aeb004f9b0733fc"
  },
  {
    "url": "assets/js/46.724ef2c6.js",
    "revision": "abefe9874538e7ebdf2329f617d173c9"
  },
  {
    "url": "assets/js/47.806592e7.js",
    "revision": "c82894eb46d5e6dfffde4f73615b9298"
  },
  {
    "url": "assets/js/48.722ea907.js",
    "revision": "797aa3963f481ba73b4c62ee908dfbbd"
  },
  {
    "url": "assets/js/49.52c58283.js",
    "revision": "34bcc03a1ef54c8ad8ee3a12fa6c5402"
  },
  {
    "url": "assets/js/5.1c7f0aa8.js",
    "revision": "12b3efed7fae51ce82adff89e8c41bc5"
  },
  {
    "url": "assets/js/50.53f3511e.js",
    "revision": "e08561dd2c76b175106a1f014d75bc3e"
  },
  {
    "url": "assets/js/51.09a666a8.js",
    "revision": "8f80c892d4eedfd15ce7092cac3c0c5d"
  },
  {
    "url": "assets/js/52.d7259e41.js",
    "revision": "4f213f0ebf594ffce8ad56acf69780ec"
  },
  {
    "url": "assets/js/53.bbc9a8e8.js",
    "revision": "3f2d2575beee6fcd6106170d51ff9f7e"
  },
  {
    "url": "assets/js/54.9ce4539e.js",
    "revision": "bd48d2926dfb927992b8e52582b7d414"
  },
  {
    "url": "assets/js/55.526c9651.js",
    "revision": "6ea3442267392ba188c6e91f36f70a7c"
  },
  {
    "url": "assets/js/56.34036e96.js",
    "revision": "32e19bd96e80d4d570c05528b4dd42d6"
  },
  {
    "url": "assets/js/57.060b5069.js",
    "revision": "3f714d603f25278a7fe999ba89247497"
  },
  {
    "url": "assets/js/58.ee099ee6.js",
    "revision": "7c42ee7bfd29217846ab2383936fde26"
  },
  {
    "url": "assets/js/59.bd6f85c5.js",
    "revision": "9a34c54b258d7abfc188d2a1c45325ef"
  },
  {
    "url": "assets/js/60.c7585667.js",
    "revision": "db5fd52a635350865e797eed132e1c6c"
  },
  {
    "url": "assets/js/61.5515ec44.js",
    "revision": "8af22f22910ffaf182ed30d6ee17ba85"
  },
  {
    "url": "assets/js/62.2971c57f.js",
    "revision": "9b1a99822aadf0ee8ee2dd1df5c501f7"
  },
  {
    "url": "assets/js/63.32e57b22.js",
    "revision": "61f90e8ef8911cf309cb0b47eb6b32d7"
  },
  {
    "url": "assets/js/64.1aaca320.js",
    "revision": "5bd4d7318af545165faaff793fc0e35b"
  },
  {
    "url": "assets/js/65.30e1cb7e.js",
    "revision": "4c206c2a4be7f421706ce05b7c570f2d"
  },
  {
    "url": "assets/js/66.80910a87.js",
    "revision": "816f24a9ba09643f2517b85e87e7e4c4"
  },
  {
    "url": "assets/js/67.8240775c.js",
    "revision": "086ae22fd810b14535410e3c4254d5b7"
  },
  {
    "url": "assets/js/68.29913c9c.js",
    "revision": "7e1e454354b7fbe69fb03328115c742d"
  },
  {
    "url": "assets/js/69.b3da1e99.js",
    "revision": "274611ba1085781b680f757c195ae1c4"
  },
  {
    "url": "assets/js/70.10143cfe.js",
    "revision": "617947be72787c1d469d043ae761786b"
  },
  {
    "url": "assets/js/71.01ba068e.js",
    "revision": "cd1912ffa38158c2413593bf284f2c34"
  },
  {
    "url": "assets/js/72.1851fe1c.js",
    "revision": "3f6e85f403df90303f0f18e8ebec8677"
  },
  {
    "url": "assets/js/73.57b7e1d2.js",
    "revision": "7f1132a677f4ffdc630d860b9933f3a7"
  },
  {
    "url": "assets/js/74.c8a592f3.js",
    "revision": "342abbea04c624651e9e7ee99b4090ae"
  },
  {
    "url": "assets/js/75.ac33ca18.js",
    "revision": "5e682034ab43914531492c3370132854"
  },
  {
    "url": "assets/js/76.b1d76877.js",
    "revision": "5fc5197af6270e4d8571c3132c661ddf"
  },
  {
    "url": "assets/js/77.c5657015.js",
    "revision": "eafad286449434ce7c49bd0566433e00"
  },
  {
    "url": "assets/js/78.6266c96d.js",
    "revision": "c62fd4ec763c0802d8da385f08895999"
  },
  {
    "url": "assets/js/79.9a50fe93.js",
    "revision": "9f83c047672b264ca13a3d98f0646d18"
  },
  {
    "url": "assets/js/8.cd64e94d.js",
    "revision": "f4a912e754e4671b55dfa53ccbe94249"
  },
  {
    "url": "assets/js/80.e0434a7a.js",
    "revision": "8d686995e428da1eedc550a3f2fc58b1"
  },
  {
    "url": "assets/js/81.8107b343.js",
    "revision": "dcb512277787ab65894f2d0dae596a74"
  },
  {
    "url": "assets/js/82.35267ca3.js",
    "revision": "08ca1e2a7b68f7084e43c37f4b8a62c2"
  },
  {
    "url": "assets/js/83.04630ce5.js",
    "revision": "9ae18b575426385596e27b929de5fb6e"
  },
  {
    "url": "assets/js/84.63a0a91b.js",
    "revision": "7511cca0d170ee92f58e66912f2ca977"
  },
  {
    "url": "assets/js/85.0eaa8722.js",
    "revision": "74a9747deb671125bdf4d21fea15f846"
  },
  {
    "url": "assets/js/86.9bfee4d6.js",
    "revision": "377679034303a98dc7ce65efaa7464ad"
  },
  {
    "url": "assets/js/87.21ead99e.js",
    "revision": "294b56608f6f2a4783fdb3590ccd3d13"
  },
  {
    "url": "assets/js/88.6c7b3e07.js",
    "revision": "a5261c2f549e16aec0a3c135c73b703a"
  },
  {
    "url": "assets/js/89.2185f32b.js",
    "revision": "df9630104ec89b818ab94a173a1e17e6"
  },
  {
    "url": "assets/js/9.99015e26.js",
    "revision": "6f8bfd973f14fe7b777d35c32688be0d"
  },
  {
    "url": "assets/js/90.61262c66.js",
    "revision": "301196ae2e9c70d4b691bbb6e4808f05"
  },
  {
    "url": "assets/js/91.cdf329c5.js",
    "revision": "c41592540adfd45abbd50a529f00dfe2"
  },
  {
    "url": "assets/js/92.291bd7c1.js",
    "revision": "9500cb22a56a4548d000d4f4aa115453"
  },
  {
    "url": "assets/js/93.f9461425.js",
    "revision": "b79932eb12bcafcfa565715ebc9bcae5"
  },
  {
    "url": "assets/js/94.cb544b7a.js",
    "revision": "000fb1329255c2eb2b505bd7a8ef3912"
  },
  {
    "url": "assets/js/95.76ef7e02.js",
    "revision": "8666867a9f43d300c68c645bb97e8a2a"
  },
  {
    "url": "assets/js/96.352aaab0.js",
    "revision": "8e07837adce04ab8ad4b93a4bd994371"
  },
  {
    "url": "assets/js/97.d638bd69.js",
    "revision": "ad032db2ba76ac710d533adb37103061"
  },
  {
    "url": "assets/js/98.c2ddc9f3.js",
    "revision": "cd9c5e7e04abe608a5c1b8f5e2e125f5"
  },
  {
    "url": "assets/js/99.914b5b86.js",
    "revision": "ed93345bd263a26d361769e24045f762"
  },
  {
    "url": "assets/js/app.ca87c000.js",
    "revision": "20a325b8eb8fa99f74f7bb02c328c486"
  },
  {
    "url": "assets/js/vendors~docsearch.2e954425.js",
    "revision": "ea52c609cd35c84f1beeaf0fa50036fb"
  },
  {
    "url": "index.html",
    "revision": "8e866048243888021fd6a0080e51a1f2"
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
