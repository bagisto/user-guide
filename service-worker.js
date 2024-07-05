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
    "revision": "457153a3d121f2ae2a2249ae26552832"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "ff96484bc1763ff0a172e49a21b4710c"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "742d987a03035e4f29ad1e9ec331f7d0"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "a110980b986330edfea6822017cde5bf"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "684fc025f6916d6f4e98bc7a45eed99c"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "25db299b18e7024e1b9a2fa030665e20"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "3bb9ac3604cfd832d28b883081aea433"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "2489f4907b1d4bc74b415d4ad756de94"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "705688826caca917a9b1f1732836b353"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "bdcc667e658fcb63d410dbb9a4a91ea8"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "c86aae3f0d440fe9d82ae73877f500e5"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "f7741ba4fac4309bebd380a65aec185e"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "8f808c10d6785a86c6ccc37f5e2e728e"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "14511b059b58793a10088131a7c437db"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "f1f71ab2cf5e0a9fff65687b63e9591c"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "4b3abfe0ad00d26f19fb1c72c35692e7"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "04280818e3864a119727ef1e04ec5c23"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "c502199bfc5b93bd6f581854a81b873b"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "76c3d154adb9a519236b9044c8fedc9c"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "aec78875206a457086b6a156d2e9145b"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "c7e0804ec5cb6a84979e4cb5f37604f4"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "ca16dc78d3733483497f248b941431c6"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "3c27def3d1a6cd2f20984f62f229e10a"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "7fe701d8c47308dbb837b31ef398d6ab"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "09e6ea17b7f82f7c2e811e3258985d4f"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "34b126d8e7165135482b3838d679a4bb"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "d0303f7e90de535c55a3f41bdadd8363"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "f51ff58008b5943b0ecd467c989eeb65"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "c00337db96d41c8dff8bb0b3caf1b4a3"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "a33bcd8fca2805f00ffa2370d3ca51ef"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "c09786356b06de6488122e3efc79bf62"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "970cb70b598c37832ccdb38a8cf713a2"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "36147e0f1eda4b820c8a2369a4a1c0e1"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "122394a3b0b416a6fd9f23464a36df69"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "b3190676c6d8446a65a0c99110c124a6"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "b88ce1828a486c1dd43f65071e3ab5a1"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "6ba92688bf749decd547423456654666"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "a509b5578b917e0a37f41e29636a492c"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "767e5faa6c2fc8267a73b89c926f0929"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "04057f20e3419b98749f6a8e3d9cbc97"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "182b5746047bd5f0418d66b84bbb93fb"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "5543bc0f836a0a9f7a4e29d877520f52"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "e111c127687ddfcc712b173e529949ab"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "188889b2ed54665556bddf6f7978ac13"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "de5048ccf1a7215f378f1c3baaed40f6"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "928c3686315b55f669061658a1b2882c"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "bf09933ca5a212bd4a9f48fb10d2e4fd"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "20213b11d54244d71d3ac128944af873"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "879958093968619ce647a5a9cbddc3fc"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "e5afc55d096210f29c2fd2a7aae660ec"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "6eef5e14d75b1f2944e40db0575e307a"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "458889f68ee9d854a83bfcf4784f8f99"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "e9916670a5afa3e9f570ed13420ce40d"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "b82b732096a448dcc07f820908b57a8f"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "67ca34d2b4be79f24b4b031a49d1153e"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "fa82be44f194161064dcee784ecbac42"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "ad527491aeecf4820edf281593be334c"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "ea1eab707249cbbb0530b991091a3f6b"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "3ca74be512e51feec5bf987c5ff76eeb"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "65dedca0de2a4fbfaefe3edb75a05789"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "606de834fd3ed60368583e37439583dc"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "6b59ac53f0f14a0af7c16efdf12feae8"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "6dab264b49cdd6e147409d047d36b75c"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "d61fdcc615bbfa5a11d951361ce8460c"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "5ff4c415068e334dc3ceea0017d1a2b4"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "66975ba427214473d8e03ef9af73119c"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "e513d3304957e87c9d6360c3597b881e"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "e230d136e57fdce6157e54b713b0243e"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "25427c19bdc6a1a0d9a6c97a8eef977d"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "93f58526218e333ba80698d4a9b75925"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "8de9838fb8f2f9c48ed2b08ab5c388ce"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "2a277b989da7f74e16e178b09717267f"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "a097536d0492ab6d95a09a6d96f37891"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "f7f143d26fb341e505942d795e84853d"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "596e96b09f74ecde9c880c1317ad18ad"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "0a0dfe7b934efa019bf2367d1ae4dd13"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "f985b51ba33e872203599fd5d0beea49"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "20c0fec14f53d7a25b7c03dcd7c86ae5"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "19d82d915a37f5df69a2b092a1a67e94"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "b6f1d55e14e856f042215983e3229f02"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "a83f709aa2fca300eb42c034ef03653c"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "5d072efa857323f65a282f6cebd9a84e"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "04fc4d747667865ff6f47dd631caa586"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "8a516e35481da299a62266c23f1195f8"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "14ed486391d46e37f07b9b684d67e94a"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "273232cba12497897b715353ec933d9e"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "bbcc31934901b40cbf749f21653a6419"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "12312a4710e356daee95897c2617cd3e"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "1a1206f5acaeb6e5ad9058bf1a7c520f"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "f61121a21b6093144a1ed92b3cab9ed5"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "35a6ea26bde6fdfcfd5607e72010432e"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "f5ac44535f9703bca5a4d63349320f96"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "bb89d603c87a1572962b7fcd8bd9d15c"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "42a67f2b858f21c99788e500efd399ef"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "bd551bd71ee1fe54a5f49f765b705f69"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "36f75ca1a98548fa34f2efee226eb628"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "d04e38afc1fcb5b2069d388168ccbd13"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "5cbe6d22f2311466bc916e18ea64f895"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "e9214f331d366b448dbf574e4068d221"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "96cc6793df2d197d9cd67d8cc24d2ae8"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "f0b7bc3196a4415427d15f7a8280faad"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "e3c5acf6023fe67b1a31b87ce2ecbd60"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "91830327d1fae99973261b2cdb2c4b49"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "ee4bb21d0f63f5db983dee4b79d63cc3"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "0f161c1fe266d15b85e1cd3259703dbd"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "d6a27ba31962c5fce2dbfbd3625a7403"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "1c2ba20b4a2f930f9616cf646df24a65"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "6de85901963e891d7b5acf6c3833c1ce"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "f43e2a649be7fc029789ba39b1edc723"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "d6afca617034fb775f3d68d1afe2e118"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "993d19f0a70381ce4de6383daf3d0cd2"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "723b624aae6a303fc77363e1424d1c0a"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "073b04bbd72cfbffaa40d2a031e4a257"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "066abc9bfa081f691f0e1785264693b3"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "b57ff601128783ec6e9b86b8c53530d4"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "3e8d15b6a5e5cdf5507a10d9259ae8e4"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "de363c729a324814a687710d18836adc"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "14bb25ed14708f470ad4ebcd9c27498b"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "492fac75a7df763bca09e6be866949d5"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "46eaa760eda6df70429277b8544a564e"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "558250e95b83aa8840c5f1f0a083ceb6"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "919955a82b371de4b03f9b466a4fe075"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "07227b52df3e192402fbf994c6e9139c"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "777abbd0dd36e715a180555ef75f4a5e"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "3ea39c178c22c592f3596a6786bedee6"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "188e5a931478f9bb5812ad63adae1fd4"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "cffeae837ffc2aa0dd0e9ad424141b92"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "ef26d9e53e13d09cdb46faa3719b3039"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "5f35390c11b92904a96c7e8454b64385"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "799f4f7d6b29a998942e38515089c871"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "894b628eaf0a9b6e8463b785667a5444"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "ddf86c9f8fba85f8d5eb299b730748da"
  },
  {
    "url": "404.html",
    "revision": "63c448252736a941c82686344d1d67a4"
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
    "url": "assets/img/allowReorder.bcf70145.png",
    "revision": "bcf701459c18156b50cbeb2789b7addf"
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
    "url": "assets/img/buyNow.2683aa9c.png",
    "revision": "2683aa9c5033194aa12b7c5222915613"
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
    "url": "assets/img/checkoutMycart.018d49e7.png",
    "revision": "018d49e7529834942d7c85c3287ccda2"
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
    "url": "assets/img/miniCart.c2175151.png",
    "revision": "c2175151f11fc3d41f7b1158ee3dc055"
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
    "url": "assets/img/saveTheme.d74db5b4.png",
    "revision": "d74db5b4d4c3f8885223fcb19f6c6701"
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
    "url": "assets/img/themeOutput.fb0c0721.png",
    "revision": "fb0c072183d8d0df429c56772e2dc1d8"
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
    "url": "assets/js/1.f448d7dd.js",
    "revision": "ff4b5ee02241bf67990b2a77d882e0b0"
  },
  {
    "url": "assets/js/10.76b6ffed.js",
    "revision": "a5fd226acd35e2c627ba4a1629265d36"
  },
  {
    "url": "assets/js/100.dac0daca.js",
    "revision": "2bbc2b02f3a7b97f6ee142ba578ee53b"
  },
  {
    "url": "assets/js/101.554ab28b.js",
    "revision": "1d360e33d02d8a142d3fc8b409257f4f"
  },
  {
    "url": "assets/js/102.a52cdd7d.js",
    "revision": "fe9690417d78af814ff04ce8128e6b1c"
  },
  {
    "url": "assets/js/103.880b3088.js",
    "revision": "9d530acf46fc99f96625fd81f45fa2eb"
  },
  {
    "url": "assets/js/104.92ad6b5b.js",
    "revision": "adb54005c19fe9e94785c4d4e581da86"
  },
  {
    "url": "assets/js/105.091ee6c0.js",
    "revision": "cffa6808eecb41b84204c049a5872694"
  },
  {
    "url": "assets/js/106.39d139d6.js",
    "revision": "259b5640bb2a21dcd09f9f178762c9f0"
  },
  {
    "url": "assets/js/107.138ef1cf.js",
    "revision": "c46a2d9b6e79b18f84f7b80d93bbd0f5"
  },
  {
    "url": "assets/js/108.62c41de8.js",
    "revision": "2045544043e070e875a39de8e1d11251"
  },
  {
    "url": "assets/js/109.4b87cfdf.js",
    "revision": "a3700d3954887b6ab17492fa7c4c2c14"
  },
  {
    "url": "assets/js/11.c97e0dcc.js",
    "revision": "ac35b12e53945ba93450e0704ee6143a"
  },
  {
    "url": "assets/js/110.7a8c8575.js",
    "revision": "1fb9fe53d48149bf00dfe5b28dbbb3c4"
  },
  {
    "url": "assets/js/111.1bf1c366.js",
    "revision": "bfc6c7bc6a2d5ee3d9f02cb2ddb76c1a"
  },
  {
    "url": "assets/js/112.aa752989.js",
    "revision": "55ece62daa9a431a5410742d73ae55cd"
  },
  {
    "url": "assets/js/113.3f00675d.js",
    "revision": "421eb4eb2aa437215651b0e9be77aa29"
  },
  {
    "url": "assets/js/114.43e60151.js",
    "revision": "ab22a2bc5f46f5b39e6c08bc22e8f55d"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.e7d97869.js",
    "revision": "22b1f047ece0f1951b40badb4c35dbb5"
  },
  {
    "url": "assets/js/117.e5d8b3be.js",
    "revision": "a9c28e85b8fdb372b049a8468db6918e"
  },
  {
    "url": "assets/js/118.4b8a4e0d.js",
    "revision": "15359af9857acd0394a97876a89fa54b"
  },
  {
    "url": "assets/js/119.afea3319.js",
    "revision": "9e414d62a81ee1f6f91441496b842062"
  },
  {
    "url": "assets/js/12.f8901d8b.js",
    "revision": "146c29e75e93df3f585969cb6e19b76f"
  },
  {
    "url": "assets/js/120.72f230ca.js",
    "revision": "fd2b7e30248959ab421e140cd97ba82a"
  },
  {
    "url": "assets/js/121.684a6a7a.js",
    "revision": "0378c776535ca8c6c65c9bf8d7f5bb1f"
  },
  {
    "url": "assets/js/122.ef8e5273.js",
    "revision": "72c65dc43427518d0df166858353255c"
  },
  {
    "url": "assets/js/123.c40839e8.js",
    "revision": "6e053f621ca975963ddae061266fd9ad"
  },
  {
    "url": "assets/js/124.4b01c9dc.js",
    "revision": "f4f57d065f6828e7b471be48ec744587"
  },
  {
    "url": "assets/js/125.8828c9f9.js",
    "revision": "022845a5e8a7af99930cf6b3f4944b7e"
  },
  {
    "url": "assets/js/126.42f3b102.js",
    "revision": "7d31f24c78b6c537fa2ea7b36d0a31b8"
  },
  {
    "url": "assets/js/127.492bbf03.js",
    "revision": "fb67394b4b1b56930717930ec549e42e"
  },
  {
    "url": "assets/js/128.c09aa4bd.js",
    "revision": "cf3784a7100aabbaf2156e0b251393e3"
  },
  {
    "url": "assets/js/129.0e1c84f7.js",
    "revision": "2184172aeed3baa55a3cf9b0374f9d7c"
  },
  {
    "url": "assets/js/13.9f5bc02c.js",
    "revision": "71a95fa11c4e85d2f894d2602b6adaaf"
  },
  {
    "url": "assets/js/130.a7a98815.js",
    "revision": "aff0a6ee4c640a9f234e87411cd8f62a"
  },
  {
    "url": "assets/js/131.a638fa5a.js",
    "revision": "37b9a9208c6b5ee1835c8cc835daebf3"
  },
  {
    "url": "assets/js/132.711892b5.js",
    "revision": "0c4933075694b5429082a2a622b6cd14"
  },
  {
    "url": "assets/js/133.9b70f555.js",
    "revision": "7d653349e75af89ceb28f0c29697f16c"
  },
  {
    "url": "assets/js/134.f23e7f3b.js",
    "revision": "5cfdd36e03a067e82cb512796ade7c4e"
  },
  {
    "url": "assets/js/135.d8ea5942.js",
    "revision": "ee6764b1c3033a64677f6af3331716a4"
  },
  {
    "url": "assets/js/136.ec45ce19.js",
    "revision": "601405e8a406b71b155906a992e8c6f7"
  },
  {
    "url": "assets/js/137.0703ca2a.js",
    "revision": "9938ee252ce441fdcad92f11bce6576b"
  },
  {
    "url": "assets/js/138.890f8def.js",
    "revision": "7a62fdfab6fd288f3984b8701249947d"
  },
  {
    "url": "assets/js/139.80349eac.js",
    "revision": "7c6005cee89859f124aa54204692b53c"
  },
  {
    "url": "assets/js/14.ce588a5b.js",
    "revision": "df02ffa07725d26c3aff450d5125d0cd"
  },
  {
    "url": "assets/js/140.005c580d.js",
    "revision": "f13098632e9266e3589743a1f16b8e80"
  },
  {
    "url": "assets/js/141.9adcff45.js",
    "revision": "dd6cf961f9f2f909382f3f1e0e0aad1f"
  },
  {
    "url": "assets/js/142.49aa0026.js",
    "revision": "f61acf2b8d685cc76e871843a87b222a"
  },
  {
    "url": "assets/js/143.83505401.js",
    "revision": "778ae4a8bf86323decddd260495c1df8"
  },
  {
    "url": "assets/js/144.e34e0ded.js",
    "revision": "916fe277cc18fb16201c1c947db4ef3e"
  },
  {
    "url": "assets/js/145.1a951c36.js",
    "revision": "56f6d689629de97d55350b30e1e76c85"
  },
  {
    "url": "assets/js/146.ef6608c8.js",
    "revision": "28b9ddba8c7fd71d52ffb693256655ab"
  },
  {
    "url": "assets/js/147.25a289f5.js",
    "revision": "86696063961cf436f20faac9afa1c247"
  },
  {
    "url": "assets/js/148.9bcc2916.js",
    "revision": "b72b84e0f4823ff1b54cf78f67a630b2"
  },
  {
    "url": "assets/js/149.56346488.js",
    "revision": "0fcd045d357c88a0e745b351c541b6d7"
  },
  {
    "url": "assets/js/15.e66528c8.js",
    "revision": "cc54adaae5e7fed0f1774b40a25ec0a3"
  },
  {
    "url": "assets/js/150.ac3d0ec2.js",
    "revision": "5b42888fa1bd11bd5051f9b04e4c57a4"
  },
  {
    "url": "assets/js/151.c036e5b8.js",
    "revision": "612b79730be5cd1bda35350d511bb4e8"
  },
  {
    "url": "assets/js/152.9f510f90.js",
    "revision": "9093209a4f2e63865a2ec39bf16b7267"
  },
  {
    "url": "assets/js/153.c0cb63aa.js",
    "revision": "5b9270aab0801aa748ff81f6b6a5b9fd"
  },
  {
    "url": "assets/js/16.1ce75bbf.js",
    "revision": "8e72b140c01e21656d8d931ce89ce2ae"
  },
  {
    "url": "assets/js/17.53aa5a0b.js",
    "revision": "4c9ca8940eb5df44791ca36057f7b739"
  },
  {
    "url": "assets/js/18.89d20ef9.js",
    "revision": "5929220c000410cb5a252d21b0e85faf"
  },
  {
    "url": "assets/js/19.e695ff3b.js",
    "revision": "3f67014483d54b6f71bdbf99976f67e3"
  },
  {
    "url": "assets/js/2.a10ed117.js",
    "revision": "69620ba0f8ef1c845f1ba72f3e69e58e"
  },
  {
    "url": "assets/js/20.e4af1034.js",
    "revision": "2f6ae7515f3527043c5e15f1ad0ed188"
  },
  {
    "url": "assets/js/21.8236d8f2.js",
    "revision": "fe940779c0b489fc0a675ea197f6841b"
  },
  {
    "url": "assets/js/22.1b28a932.js",
    "revision": "0f868a472b99489bd1ff6347e16452da"
  },
  {
    "url": "assets/js/23.35b35156.js",
    "revision": "5f661e6fa4aa5578fe026ee549cb4ee7"
  },
  {
    "url": "assets/js/24.b5db2db7.js",
    "revision": "58be0de17e791674dd23a42913b703af"
  },
  {
    "url": "assets/js/25.21ec186b.js",
    "revision": "c86d357281030458c2153f06861bc6ed"
  },
  {
    "url": "assets/js/26.a24244fd.js",
    "revision": "050a9eb5ae793729f552cf633315f49b"
  },
  {
    "url": "assets/js/27.b645af19.js",
    "revision": "b0ccefebdb221d2db08a395276f6d47f"
  },
  {
    "url": "assets/js/28.4f79893c.js",
    "revision": "59a9598cd532fa5cc70fcc50567b5462"
  },
  {
    "url": "assets/js/29.ac75d077.js",
    "revision": "ad5be50e5c275f1ed44eeeb0bfbd034f"
  },
  {
    "url": "assets/js/3.bd3b16a4.js",
    "revision": "3caa258015023020a1043d73accdc017"
  },
  {
    "url": "assets/js/30.69163a3e.js",
    "revision": "ce67c9fdb4ecc92a32152714c6e535c4"
  },
  {
    "url": "assets/js/31.d96718ad.js",
    "revision": "9582cea10961129c02cf3e91e887b444"
  },
  {
    "url": "assets/js/32.aa2988b3.js",
    "revision": "116a1806e6c68669e5faa9fed29b0f1a"
  },
  {
    "url": "assets/js/33.38051f30.js",
    "revision": "95ff88433a4dcffca5fbf8b38e91e999"
  },
  {
    "url": "assets/js/34.0d42766d.js",
    "revision": "f10e98daf5d392353db55a5d24b58903"
  },
  {
    "url": "assets/js/35.3f5a74b4.js",
    "revision": "4df06aa51be448f9f2a7cff103c4ab49"
  },
  {
    "url": "assets/js/36.17d85065.js",
    "revision": "de4ab000622ce03dca7626e0138db832"
  },
  {
    "url": "assets/js/37.2b84e72b.js",
    "revision": "dd26898fa7c6f403d5a6c8477ef66962"
  },
  {
    "url": "assets/js/38.b99e2262.js",
    "revision": "c94ed953f6ed8e780d2be186dd7b8a4f"
  },
  {
    "url": "assets/js/39.9358fba1.js",
    "revision": "783f5f87b5a12a294c6975257892a985"
  },
  {
    "url": "assets/js/4.4368ce1e.js",
    "revision": "f7f7c6d6d0808d22192ff40b95fc872f"
  },
  {
    "url": "assets/js/40.afd8862d.js",
    "revision": "84f8671d5d3ff5c784288b27a5daec0d"
  },
  {
    "url": "assets/js/41.140f1f85.js",
    "revision": "5bf5b8284304a983c47ded7721d25b73"
  },
  {
    "url": "assets/js/42.4d612493.js",
    "revision": "f532a109ce0383efea30aefc23e26021"
  },
  {
    "url": "assets/js/43.a66ede0e.js",
    "revision": "a112ff968748cc44367a1eb35c35082f"
  },
  {
    "url": "assets/js/44.0563fb91.js",
    "revision": "50d6457a6cdf104f5dc61ff0d5adebac"
  },
  {
    "url": "assets/js/45.c85c6fb1.js",
    "revision": "d84e1b6c0e6386f33b9e356ab156a57d"
  },
  {
    "url": "assets/js/46.e997383c.js",
    "revision": "4fceef5b03fb2b502e229225c5eb765e"
  },
  {
    "url": "assets/js/47.694295f9.js",
    "revision": "b630a36846cb82c0ad4a109f90e6cc5f"
  },
  {
    "url": "assets/js/48.821208a3.js",
    "revision": "c7e3454ee9b9e3287dbbb3257388972f"
  },
  {
    "url": "assets/js/49.94cd7005.js",
    "revision": "9962fc4248ee2ad102e4e81eb9c63fde"
  },
  {
    "url": "assets/js/5.1daf9d12.js",
    "revision": "ea7c9ddb5604f7cb4cd6333a88ce5f26"
  },
  {
    "url": "assets/js/50.949ffc5e.js",
    "revision": "2ac6277be3cd2f1cb98d2f6df360aa00"
  },
  {
    "url": "assets/js/51.3373ff0a.js",
    "revision": "c85c5cd26b83966b5355287fd90bb34b"
  },
  {
    "url": "assets/js/52.e57d7e89.js",
    "revision": "b4c7d4a417d901d4c18a153b33c46605"
  },
  {
    "url": "assets/js/53.b1cf79ba.js",
    "revision": "3fc795044e4acf50127d46c5a349f032"
  },
  {
    "url": "assets/js/54.21de9908.js",
    "revision": "6003266ed5d0561ee42a4ac51f14faad"
  },
  {
    "url": "assets/js/55.36239ab4.js",
    "revision": "0797a13ae220a623ab91d980c4cbd519"
  },
  {
    "url": "assets/js/56.632dacff.js",
    "revision": "474fda2204388b5c76dca91cf8175a1f"
  },
  {
    "url": "assets/js/57.8fe6a0ab.js",
    "revision": "3eb215b115ac10e6a92f282bbadee509"
  },
  {
    "url": "assets/js/58.73635902.js",
    "revision": "ccd0a460e49b0189704bf7d6bf452ef7"
  },
  {
    "url": "assets/js/59.34fe78d3.js",
    "revision": "2f65d56f63c4df332a8695084bd50626"
  },
  {
    "url": "assets/js/60.c79c7991.js",
    "revision": "0f457e7245c1012e5bba70bef48170b3"
  },
  {
    "url": "assets/js/61.9afa996d.js",
    "revision": "aceeed4ad782064460a613f33d93a3a1"
  },
  {
    "url": "assets/js/62.db771354.js",
    "revision": "660791dcda21d6204fa8f6ebb8d172e5"
  },
  {
    "url": "assets/js/63.d879f500.js",
    "revision": "9526535b2d6b4be0585add8d7860ee2d"
  },
  {
    "url": "assets/js/64.e3a7ab1c.js",
    "revision": "b550994bfac43bfe539cc401630a886c"
  },
  {
    "url": "assets/js/65.55e1e94f.js",
    "revision": "db7b14271da4a28f9df23fb795c927e2"
  },
  {
    "url": "assets/js/66.47c02aba.js",
    "revision": "a74c7e8b51afce7145d08e0e6bdd1bac"
  },
  {
    "url": "assets/js/67.3e412c29.js",
    "revision": "e7b7c1d29cb3101e69c2b69e90d15d54"
  },
  {
    "url": "assets/js/68.7341f11e.js",
    "revision": "dbe8e4a20c4089b589b85a89ff6eac07"
  },
  {
    "url": "assets/js/69.7e463b56.js",
    "revision": "66e134c62591e555f92955045958cabb"
  },
  {
    "url": "assets/js/70.8cd1a904.js",
    "revision": "30355a52f3d62cebcc51ce5752de1f5e"
  },
  {
    "url": "assets/js/71.7d523139.js",
    "revision": "0c9903c096e34d8dc505ae205c65c714"
  },
  {
    "url": "assets/js/72.f16d2b60.js",
    "revision": "2477ff1c74aa864483a00e62ab4c2084"
  },
  {
    "url": "assets/js/73.41d029c2.js",
    "revision": "624737b06167facd8920847ec9ec8998"
  },
  {
    "url": "assets/js/74.e5cd4417.js",
    "revision": "102e711c0212f5c1d069bfb921b954a3"
  },
  {
    "url": "assets/js/75.23b633d3.js",
    "revision": "d6921c666fd742970ce69c97317a1ca4"
  },
  {
    "url": "assets/js/76.b63f6371.js",
    "revision": "3183b4daa66ae31454ef1650176b3776"
  },
  {
    "url": "assets/js/77.ac272a30.js",
    "revision": "b7e6873f2e2b5e8cc3b8ab4282048624"
  },
  {
    "url": "assets/js/78.cc3ec4d9.js",
    "revision": "442f186942aa32b407a97e95ab48e55c"
  },
  {
    "url": "assets/js/79.98cacab7.js",
    "revision": "1aa252dd467a1f4a1756b41dd6de4806"
  },
  {
    "url": "assets/js/8.34aebffe.js",
    "revision": "4320596cf72e9f01e1247fd57281bf16"
  },
  {
    "url": "assets/js/80.8ef6bde9.js",
    "revision": "72e146b5bc0044576135a4ceb3aaa2b7"
  },
  {
    "url": "assets/js/81.c718f38d.js",
    "revision": "12e5d8ca9c17885c5ec7eae2d7172341"
  },
  {
    "url": "assets/js/82.f61f1281.js",
    "revision": "f0d5344a70d9ef0afd493a5d5cfac736"
  },
  {
    "url": "assets/js/83.7a339885.js",
    "revision": "11036129db1ef65bdb1255fd708a448c"
  },
  {
    "url": "assets/js/84.72d92781.js",
    "revision": "86e43e388a82fb669db62715c164e2db"
  },
  {
    "url": "assets/js/85.ac9e033a.js",
    "revision": "d06ab9a307bac3598439a778fcb7e9f6"
  },
  {
    "url": "assets/js/86.112f0632.js",
    "revision": "fb4d46877e11966342be98fce9b04300"
  },
  {
    "url": "assets/js/87.2995f6b6.js",
    "revision": "cc8c27fa87e80b32ee7c90c86bb2d310"
  },
  {
    "url": "assets/js/88.9fcfd588.js",
    "revision": "86efa932d50a191ec63ef2ed1f499aca"
  },
  {
    "url": "assets/js/89.4a2ee663.js",
    "revision": "b5b7ca901830a2c4c6cce683bc2f272c"
  },
  {
    "url": "assets/js/9.841375cf.js",
    "revision": "90b4d91cb54ed86b83537912ea3aa477"
  },
  {
    "url": "assets/js/90.f9a209c6.js",
    "revision": "8f78942dfac4a16408489dc01be86572"
  },
  {
    "url": "assets/js/91.1b9f440d.js",
    "revision": "24997be30810b66246762ea052e6fe93"
  },
  {
    "url": "assets/js/92.825f2247.js",
    "revision": "082a19823566651259a34ee01d357f40"
  },
  {
    "url": "assets/js/93.142315bc.js",
    "revision": "454ffcf80f07cf7f2f64f95aaca349ac"
  },
  {
    "url": "assets/js/94.155bd343.js",
    "revision": "d5cb06e5bf0fd0f7c13cf6a09b3f191a"
  },
  {
    "url": "assets/js/95.fa663dd5.js",
    "revision": "f6b61466ea87b6c1bf0ee9c715afbf4c"
  },
  {
    "url": "assets/js/96.96b96691.js",
    "revision": "2e62cfd808b738b65be9395ad708928b"
  },
  {
    "url": "assets/js/97.5940b9b4.js",
    "revision": "667d54826eff41b601164edeb3f52245"
  },
  {
    "url": "assets/js/98.c579d828.js",
    "revision": "1e5528db20192b59a19a37e44d22bd97"
  },
  {
    "url": "assets/js/99.1655d227.js",
    "revision": "33b6abcf1ddc07405d4916400101b2bf"
  },
  {
    "url": "assets/js/app.502ae08a.js",
    "revision": "0cd87ed6615177c21ea90692d4af8623"
  },
  {
    "url": "assets/js/vendors~docsearch.0b0f1502.js",
    "revision": "eca09ec90e6fd31eb06d1d18447f20aa"
  },
  {
    "url": "index.html",
    "revision": "5f0f943e6f2d38a51fe9675f276a8bbb"
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
