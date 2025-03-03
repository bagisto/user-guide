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
    "revision": "b17c2f5972fd485933721cea5e416ad0"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "d249242c432e0619c3b0494a16024c0b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "1b26d053e1e46283eba1332c886bb7ce"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "4adb38b2f731fb64e611e6b18e066d8d"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "6106df8314f1afcf7866f4e7b703e0db"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "736f19024a1b2451203ae4d38a5f0091"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "741d51f6c096b51bc5f650ec63a57330"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "bbd4985a4df25dce4dd3571e49dbab19"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "65df166f4362405decf0da40a57efeb4"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "86f85e0df4d8cca190dad82d2dbd6dc8"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "92fe75905ea3fa82cd92cda66b2f6c30"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "3c9486c4d3c6d76f7e03662be944fe2f"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "57684eecc46526841959779ca7e0a971"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "b46e4ca3b0f7cedf2ad47575164a0474"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "b017b2d28d9be80a112d113dcf1d07b3"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "87babdad8e07d9b585cfb0f40973a893"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "92dad279010db4004ad9e43c357e795c"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "75a17d59f931dccae34e745087696f73"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "90010540e2e49533c0855cf435176a3e"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "0212b8f15665e9de947a108efac9318b"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "859ea5c1aff637846e3437abec85acb5"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "3fdb6f177f5dc5beed068e5e54cfc9f4"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "d2156573b6e9565d15810175347df62e"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "41d960b600be6c1b5ee0b458bc6b8c94"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "d0a047081e5e084fcd67f6214d6b75c9"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "0bb86548566fbcceab5f10f563317b5e"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "4567db0e56d5f634add83b8eb6f5926d"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "b2432ce59acd684336b7648d4cc94bb6"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "1f0df784d1f069f94926c7a6a0a6bee8"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "7b70365f288ecabccfeb198283344fd2"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "86c2677e336f97b04e1686e1c27e6fa1"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "f93674a5d4cdc6737a9c91d5a40e94d8"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "ed83421bba9e299e8b103ef05defc5de"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "3e14114364f2001a234e706b4c927709"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "08e6629d71a50a9ae0a86ce42940c4f8"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "d44157a31506964874378e78d20d524e"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "05de0c910b72774f6d8999408b079c06"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "96fc1ad64e96746d71a494d0539fb1c7"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "cc73439abf74e86ffd32175a9ceb35a4"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "66c1d6e7b2e3d49c5fe346db428dc521"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "9a32a20626a2bc8d05e2e6fd95c9e36f"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "c7bd01cd100a7933a6002a7eed9c9c31"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "d343d99754334284f8fb8ce4c677fc82"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "6d6eb28d97be00aedff7fc172945c710"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "9d578466f3f3c6935b6b2307bcbba2e2"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "ee37a00668d908b417cd8f2fc96e5ddc"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "e44243929352f65be021e6f7c781af5b"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "7669a8b2ca6534da3a0a37d3970c3d17"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "2b5229964f6488b9d160866b952993fc"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "4dc1d5dd67bc0fbec48e9a51fa146014"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "e1b67cba5bca6410dcbefc113072d30e"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "1b79210f81bd753069fc0516651acaaa"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "ee078768f56912e95429ebce2ee77e73"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "5bd5781e98c34a7bad9abacdeb053a51"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "c2ad182394aeff8138934fd8594aea0e"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "7cab6f03e5747510d73e210ed0ec194b"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "d9601e596d8db8b20095c3592a2fa996"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "1771c402b4af6f1dca8dd55dbb0318b4"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "08b6ea8baaed9a0b6996ede8893dbc47"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "051638a8dabe0c7f274562e147d9394d"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "6551b2df047c7a3ec3a95b377d086ae5"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "929eac7d46ef391fefa56b2a8228945d"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "064c23507d8f5e8276ed71ad94377d65"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "f8ddd316a7021f4d289c53491b9c3c80"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "55775c7418a28521abcb7ac829019c8f"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "80ef4e43c361e99c6c495823fdb939f6"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "e41b8ce199edc922da3e855ce0953cf2"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "ea5c253c9f9742d42baf605e1cf34cf3"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "975b7c4f706da1c638ad66917d3afef8"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "3b227364c32b5bcdbd89e683289cab8a"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "ebc69e25dfd4b71320707c7840ee7aeb"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "d0aede3f09df8c445c984c2f49ccdb6b"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "d4a9140cbea4364cb178addca2c51f40"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "417d0050b84d48eaae36fed1477e9dc6"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "70e7946e1762350c2f49cc9af8ec14f0"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "b8b02b90f2641dc470978a7ec693bda7"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "802b98bb3a115437f2476476c16eed00"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "cb8aad014b67736f7578143d1630fd51"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "e3afc7c73ad36a3845fbb7719c447216"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "6c9b2b2236bc55faf7058a9585b0b82e"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "890fb19d45c4697cd64c927ed6a36e61"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "0227228a99f1082a3da6a2262e371633"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "3783989f090eddbf222ecd1dca640865"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "94fc9f5e424492ed81486eab679e2591"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "338b69f1c38bfad565a0b8ee73a19e1c"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "7c988a1e243cb6b70a1cd530d258ddf8"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "7314944cd2c977cedb079eb763e17328"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "8fa1c43ad78d538c7125118c4f9f7b5b"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "abf8f78d29610793497f65c65037e884"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "7dbb3e7321e2c1a117c448947686375d"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "c0da7b5b66b7a5a98ef09749503e69d8"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "a33056d531729d22509ecea615c25384"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "888849ba0a70f6cc2393801d255b355f"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "370b5e472fd43fd160b2fb3d9145094c"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "70af1d8fc490d6e9d1d81b852604b246"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "c480bd1ba64f546623d98b8c3c492638"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "83cebdedfffee09334c7050b0b09f1b5"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "3c812a93aa002beb07b8a77659f05994"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "56023c550ced8d2d567047d988c7ebdc"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "178e98e1f49976dac92ba493489443ad"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "ea28bb3d29a382fc193e1bebdbd25bab"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "2a14034efa6ad43682171c29b1882885"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "f484d81c7ff46cebd6e803de7a930304"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "718e84cc9582b64fd79e92cae88ed0ef"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "8dadb78e3d423790161618d6457ae2d8"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "43f7b450e760dbe5b1bc2eb2da158fb6"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "8d60e60f39082ccff2885150f6594bd1"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "3453cee81dba100c49b20734fbce4f54"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "9b50587f4bb67c87106d25b25307605b"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "4a2cabc88cab47ec1681a8c129bcd73f"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "043f57a2c25a22d46c74f0c3dabb24bd"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "2f2f645bbb6795ded27d911b3d99c886"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "835fb93a0e800c4980d7e7865d2ba9df"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "9a6db7a3d846b4a65ec48e8e64b6edca"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "3056dedf55608b481d49a2663c00786d"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "fa94e5d7fa411484243103a0aea0602f"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "0e4f17b3ca65cebc8aec17f8a09b3b99"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "1c686ad3bf082b2ced60819e056b18ff"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "80d48f454cf58d024c9a8205566d5f0b"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "936c3f3a534df7e158856496d2a0f6bc"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "2e2ae25d7fc01638f019cfe51fdcfeb8"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "68062c222bcc0182d55ba964df2c4c8f"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "6d47a9309c00a59d3431a70f87b0592a"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "bdd456ca47a92b89d99968cfa2f4f80f"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "77d891e0ae971c7cb000f5721640bdf6"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "5a2b16b55b6cc03e493a135692aa4b2f"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "dc71a3c4c351a2b7225dfdf9ca7e684a"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "029823733140cf4410f563bd4ad3ac4b"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "bd252e1c7519083480ae4dc33fa94b87"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "5fd1f9b598d032f518e39f5b045648cd"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "615761e6b663a0640083bd75c5f1d839"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "3b9c269d6ab217c2d12875821621b3e3"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "a040d064bbf48faf0236d78fd8f92b5b"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "52495b95c2848cb342a077dd538ef954"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "e55f9b14ddb2be39e301f78c4224b101"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "75f9290dc3de977b08b774322c1ea051"
  },
  {
    "url": "404.html",
    "revision": "65d3cda9de7aa831a3b9c2b261a54dd7"
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
    "url": "assets/js/1.49ce1390.js",
    "revision": "85ad14faad2e6eceaf54cc28765bddb7"
  },
  {
    "url": "assets/js/10.58a05921.js",
    "revision": "bdf02f01ea24c4aaa23402ad07e8d6b0"
  },
  {
    "url": "assets/js/100.7723ce80.js",
    "revision": "b1af34f0837edf25fb322d4f56333a93"
  },
  {
    "url": "assets/js/101.757af9b1.js",
    "revision": "e336b24b03fa32a22abe9aeecae9fc11"
  },
  {
    "url": "assets/js/102.0d935616.js",
    "revision": "ed0a6bc03f69a9678872105c62485ed6"
  },
  {
    "url": "assets/js/103.c165802b.js",
    "revision": "a1f4e62320b01a9c3101d3c1bb0dcafc"
  },
  {
    "url": "assets/js/104.6d4598f9.js",
    "revision": "7f638494d29a094c21b0c581677dfc1a"
  },
  {
    "url": "assets/js/105.ad1bcf26.js",
    "revision": "8733151d5dc5da2af1ec830d4c36f269"
  },
  {
    "url": "assets/js/106.f840c733.js",
    "revision": "2fd0bee15642b207fcfa5a33e84c1ecc"
  },
  {
    "url": "assets/js/107.59e316a6.js",
    "revision": "a95d0ffa0bb1c8f7a2281fdb96e01eca"
  },
  {
    "url": "assets/js/108.966a3b9a.js",
    "revision": "0be61ad2c7f0254a7ce7be1b18c9a001"
  },
  {
    "url": "assets/js/109.69689ac7.js",
    "revision": "c2717d4b353c44481fe2382232897547"
  },
  {
    "url": "assets/js/11.492a5b9f.js",
    "revision": "a3f89081540ca2dd3285653d7d58d1eb"
  },
  {
    "url": "assets/js/110.b693d275.js",
    "revision": "d8b44e7babf6cded7cb3042ceae15d98"
  },
  {
    "url": "assets/js/111.a39ef93d.js",
    "revision": "a2a079a47ccc53e5772a097b124edcfc"
  },
  {
    "url": "assets/js/112.a89a8eec.js",
    "revision": "40d411a3927dfd963b7e99917bd7f6bd"
  },
  {
    "url": "assets/js/113.db21ff74.js",
    "revision": "f112b9f57ee8beb51af9c9569d102e3a"
  },
  {
    "url": "assets/js/114.11fb152a.js",
    "revision": "c54fe66083bc97ccb224b6cf9eec3831"
  },
  {
    "url": "assets/js/115.3e084e7f.js",
    "revision": "1a2720e5bb91aab1f86c06c60a752a6a"
  },
  {
    "url": "assets/js/116.61f7578d.js",
    "revision": "acbee118a8a89ec8a729a0f6dca0334d"
  },
  {
    "url": "assets/js/117.50483c8a.js",
    "revision": "fa61e12e18e25d95c387280415e4192f"
  },
  {
    "url": "assets/js/118.ecf537d1.js",
    "revision": "f34f46f7d1518eb9de18e58aa5959d97"
  },
  {
    "url": "assets/js/119.1a71f816.js",
    "revision": "3182fae3a594faca1def6b9ad03e5bfb"
  },
  {
    "url": "assets/js/12.482fb9ff.js",
    "revision": "cbcca0e732d26c9ffe0a1ea28507c13b"
  },
  {
    "url": "assets/js/120.eec11f39.js",
    "revision": "c873624c3237ce7c744efe35b4afc245"
  },
  {
    "url": "assets/js/121.e450fec9.js",
    "revision": "0320cb9a47d92744718d264b3c6f2a6d"
  },
  {
    "url": "assets/js/122.45bf525e.js",
    "revision": "f7773e79f0f9acdd7f1d338d2d7d001e"
  },
  {
    "url": "assets/js/123.6b29dda0.js",
    "revision": "405b3b420b8606ba80e9a0f1a000c4d0"
  },
  {
    "url": "assets/js/124.226ad2c6.js",
    "revision": "c4414c83fb7e3cd525b8f0eac03cfe4e"
  },
  {
    "url": "assets/js/125.e1edc5c3.js",
    "revision": "4426a94594dcd64e7b618fcb77680726"
  },
  {
    "url": "assets/js/126.6ab3cee2.js",
    "revision": "c177217ecbb6f5f11b59500b794d2c9e"
  },
  {
    "url": "assets/js/127.9ad55dd1.js",
    "revision": "df26fe94eb0a2b775b47efee8ffbde32"
  },
  {
    "url": "assets/js/128.1da8a0ff.js",
    "revision": "7209f51401133fde8a36d5fa3170a049"
  },
  {
    "url": "assets/js/129.0980f556.js",
    "revision": "116d52fa602f47e4f8a149196c26ad85"
  },
  {
    "url": "assets/js/13.8bb776a5.js",
    "revision": "533ec27b5938ef385284a0c70459b2d5"
  },
  {
    "url": "assets/js/130.ac6d84bb.js",
    "revision": "a1a762d1b96b8d2600aa01129d5accea"
  },
  {
    "url": "assets/js/131.37fdb082.js",
    "revision": "321c66e6ca64b849b074ce892ae11bf1"
  },
  {
    "url": "assets/js/132.17f5cd01.js",
    "revision": "0bd128edaf9328842f2f399ba37e86f6"
  },
  {
    "url": "assets/js/133.47204c08.js",
    "revision": "e0c194c6c68121e5685fb90f4c1d64bf"
  },
  {
    "url": "assets/js/134.7a379c0e.js",
    "revision": "9efa00a2d7d00a69954ae52d5be552c0"
  },
  {
    "url": "assets/js/135.68c21d09.js",
    "revision": "68b88c6d4ba73f079fccfad4641f66ab"
  },
  {
    "url": "assets/js/136.bc4b256c.js",
    "revision": "83420a5e74d8f27aff16051557bbceae"
  },
  {
    "url": "assets/js/137.2244b12d.js",
    "revision": "056b7fde2a8d2b89635ad0ebd1a85c8a"
  },
  {
    "url": "assets/js/138.cb7d3436.js",
    "revision": "dcacf6397f9a2343ec8a5580dfc1829e"
  },
  {
    "url": "assets/js/139.db6d4c08.js",
    "revision": "4c7a348e4694062e8bccea1ef0443b9b"
  },
  {
    "url": "assets/js/14.c6f33c30.js",
    "revision": "aa675f457e111e5e9fd76cd360d26963"
  },
  {
    "url": "assets/js/140.c64b6c8b.js",
    "revision": "a808e032c5225e6818a54b29a703e026"
  },
  {
    "url": "assets/js/141.f23ece8c.js",
    "revision": "836cb989d584ba989e41967488ceb39a"
  },
  {
    "url": "assets/js/142.9de8e629.js",
    "revision": "092ab797cbea4214d175b9954d1cc916"
  },
  {
    "url": "assets/js/143.6076d6ba.js",
    "revision": "647c4e6cb977ea49f1473e4da1a6e5c0"
  },
  {
    "url": "assets/js/144.468f1f42.js",
    "revision": "a04567a022e01bd729633694edf8cd02"
  },
  {
    "url": "assets/js/145.c64f5735.js",
    "revision": "9348af3b8a9bbfd8f9f75408e5365025"
  },
  {
    "url": "assets/js/146.88edeb14.js",
    "revision": "855b57053867691526b12eed0facb5bb"
  },
  {
    "url": "assets/js/147.a82eb351.js",
    "revision": "231e3166eee778774acc1b14a3ec9d4e"
  },
  {
    "url": "assets/js/148.2b378f8c.js",
    "revision": "7e5e9772a506d8816ca36a355bd2a474"
  },
  {
    "url": "assets/js/149.e7b6a95a.js",
    "revision": "bf80b332d6b4e15e718425a57b2ed78b"
  },
  {
    "url": "assets/js/15.8903c54c.js",
    "revision": "82c17a43a58dc857aedd029fcd49f011"
  },
  {
    "url": "assets/js/150.06d76a1a.js",
    "revision": "f179f5c7b04897718cec7b8a42f83d13"
  },
  {
    "url": "assets/js/151.7e731751.js",
    "revision": "4b97faa3b2bff7f41b041b2fdb8c2b35"
  },
  {
    "url": "assets/js/152.b846faf1.js",
    "revision": "d065a55a7cf4390165df8d8fd33e4983"
  },
  {
    "url": "assets/js/153.902839b3.js",
    "revision": "54ea8dff3a135811ef25e302a07e2318"
  },
  {
    "url": "assets/js/154.085cd96a.js",
    "revision": "7c3535cf1547fc7e74490b3e26eb233e"
  },
  {
    "url": "assets/js/155.4f48fa84.js",
    "revision": "1b96dd46b3bd0ab2135cb8c0770d6cea"
  },
  {
    "url": "assets/js/156.07597409.js",
    "revision": "5cb43899621968c2b52059bdd6bca802"
  },
  {
    "url": "assets/js/157.dbcb27cf.js",
    "revision": "8a05b7cc509184b4e768205d511cbb27"
  },
  {
    "url": "assets/js/16.8b914dfe.js",
    "revision": "e47a0d0efeaad5c9a8ac2dfe66f3b640"
  },
  {
    "url": "assets/js/17.94a84c47.js",
    "revision": "2d9641d1dfff58e251cc541dbf0e26da"
  },
  {
    "url": "assets/js/18.a5d8f925.js",
    "revision": "fc0babd29140a90b442c862c7cf55707"
  },
  {
    "url": "assets/js/19.31816508.js",
    "revision": "839d77e5770eb7e4840d4d58c878ffbd"
  },
  {
    "url": "assets/js/2.a46f23ec.js",
    "revision": "4f94801c4ec6d26ee08074eb3e27d7bf"
  },
  {
    "url": "assets/js/20.547457bb.js",
    "revision": "3a6f64db63a072eea9bb43454ee2f2bc"
  },
  {
    "url": "assets/js/21.0c15806c.js",
    "revision": "977fae86248f3996cd99b4f162b7240d"
  },
  {
    "url": "assets/js/22.5f7846f8.js",
    "revision": "1d81cabc511807d237be9c55b39fa5fa"
  },
  {
    "url": "assets/js/23.9a542769.js",
    "revision": "f4ff2f6da2c76554b38e0127e24ee285"
  },
  {
    "url": "assets/js/24.97dbc869.js",
    "revision": "1821d57fc265152f753772b113692e69"
  },
  {
    "url": "assets/js/25.bbef1bb5.js",
    "revision": "65f88200b163a1f092d0e23009abb25b"
  },
  {
    "url": "assets/js/26.ce3c8561.js",
    "revision": "08b749eabe139349cf498e2e5e9a6ee2"
  },
  {
    "url": "assets/js/27.97f51600.js",
    "revision": "550972ec2e8e4e98fb5e388199a80462"
  },
  {
    "url": "assets/js/28.7abc5adf.js",
    "revision": "da7998f5837a4a8dd89c4a7f535363e4"
  },
  {
    "url": "assets/js/29.fcb2e330.js",
    "revision": "56cf08d44e00f1a66040899e1230e763"
  },
  {
    "url": "assets/js/3.6feaf724.js",
    "revision": "714a22a7b7ea087bdb2dc34534af5535"
  },
  {
    "url": "assets/js/30.aeeeba60.js",
    "revision": "b95187203d92e24237b33450a31ee901"
  },
  {
    "url": "assets/js/31.f795f837.js",
    "revision": "24a23df90bba8a627f3a2ba982e4ab54"
  },
  {
    "url": "assets/js/32.a116d3cd.js",
    "revision": "23a673d407416cdb22f44d002f1696d7"
  },
  {
    "url": "assets/js/33.dbe29843.js",
    "revision": "d351cf99cb98048f4df903950e7d8e41"
  },
  {
    "url": "assets/js/34.9f29ce83.js",
    "revision": "cd9c747f584e9899b7da4de384f5edaa"
  },
  {
    "url": "assets/js/35.1e6469f2.js",
    "revision": "cd394ebfd53cc080b9941121b0910946"
  },
  {
    "url": "assets/js/36.44feba91.js",
    "revision": "c619d4c1c02b35af06866ff91fed2c48"
  },
  {
    "url": "assets/js/37.8870abb2.js",
    "revision": "cd6629ba11265ae2c1628d55fe82df91"
  },
  {
    "url": "assets/js/38.ccba3754.js",
    "revision": "3d577bc1773a6c53348ea571b529b662"
  },
  {
    "url": "assets/js/39.39852184.js",
    "revision": "0588505180cfa3f3f5794d4050d7e58d"
  },
  {
    "url": "assets/js/4.8a5818b7.js",
    "revision": "ab94a71da090c8cdc45cb7439bfc670e"
  },
  {
    "url": "assets/js/40.b035ccc3.js",
    "revision": "150108f9f31e35da6f51a2d0cd745ad6"
  },
  {
    "url": "assets/js/41.653f0ee0.js",
    "revision": "f0f2fe1c1470635f2968d3e3e8140262"
  },
  {
    "url": "assets/js/42.44ef9d39.js",
    "revision": "3ccd7c8d8df3688b2c1af51b10b0f206"
  },
  {
    "url": "assets/js/43.f4c84aaf.js",
    "revision": "93b153f380e1628886bddbb6dbe9e6e3"
  },
  {
    "url": "assets/js/44.3afa8861.js",
    "revision": "87c187bffc79c4b764b26874de4bb48e"
  },
  {
    "url": "assets/js/45.751d15a7.js",
    "revision": "9043eba2269bb9dc12aaf57575c2702b"
  },
  {
    "url": "assets/js/46.9d15b33f.js",
    "revision": "4cc6292d845d05cd238f5a4e68631ee1"
  },
  {
    "url": "assets/js/47.239a1659.js",
    "revision": "7571a8bcc2cccec9ad12cfe463797a15"
  },
  {
    "url": "assets/js/48.5d90a2dc.js",
    "revision": "422fad01ac5d4ed38c32b7b2ae16bad4"
  },
  {
    "url": "assets/js/49.915a1c4c.js",
    "revision": "8056d8444e83fd658741455440dce74a"
  },
  {
    "url": "assets/js/5.90210bed.js",
    "revision": "796ebb0949a32ea0dbc1b3ec2d1d240b"
  },
  {
    "url": "assets/js/50.c1a57561.js",
    "revision": "aaa45fbb40139dda5b0bba67c08ed3ac"
  },
  {
    "url": "assets/js/51.87d86377.js",
    "revision": "ac0ac81d0dab71054ecb20b72215a5fc"
  },
  {
    "url": "assets/js/52.b19e79e9.js",
    "revision": "6dbe2bc2f8d237df0a3027241eb1adc7"
  },
  {
    "url": "assets/js/53.f8b217d5.js",
    "revision": "9c1d0f57f8838bacf72e11a0e3d55d43"
  },
  {
    "url": "assets/js/54.5de5d1cd.js",
    "revision": "4b537ade35dd8e27d9d672b532223db8"
  },
  {
    "url": "assets/js/55.8f34a6dc.js",
    "revision": "f9ca1571e37605d2636626e541cc53af"
  },
  {
    "url": "assets/js/56.1e749ac0.js",
    "revision": "6e31c9d3915c80c4c14769251152ac55"
  },
  {
    "url": "assets/js/57.2f459b8f.js",
    "revision": "471add28e595494118917a86445f35e1"
  },
  {
    "url": "assets/js/58.ce003e49.js",
    "revision": "2dd69389c530c66c6cb54f385fc70ead"
  },
  {
    "url": "assets/js/59.fcc230ed.js",
    "revision": "2a815706f9ead2bbac361ce1da595529"
  },
  {
    "url": "assets/js/60.81244743.js",
    "revision": "c19d4667284eae11caa8af76990d2804"
  },
  {
    "url": "assets/js/61.22ed6747.js",
    "revision": "2ac4cdc9a16cc31b69a4a7f55349df4e"
  },
  {
    "url": "assets/js/62.94e6f702.js",
    "revision": "a3e24f15c38b4a2556168a2d55e4272c"
  },
  {
    "url": "assets/js/63.4cda6468.js",
    "revision": "f0fd4669ebd5b490207473ac19c52a22"
  },
  {
    "url": "assets/js/64.806fd3f1.js",
    "revision": "2b58b11a58946f02756e18185bd4d8d2"
  },
  {
    "url": "assets/js/65.aa5b2d2d.js",
    "revision": "dc090ba8eb1272b0a81bdd63ad5e99fe"
  },
  {
    "url": "assets/js/66.4edd0ce9.js",
    "revision": "9eefdcfe8ca66186ccf23bf80f3f6157"
  },
  {
    "url": "assets/js/67.0e68b0f6.js",
    "revision": "758b1677e6ff13b7c0592b72de3915e5"
  },
  {
    "url": "assets/js/68.950499f0.js",
    "revision": "1da146698a5a03821b21ac521ea188d4"
  },
  {
    "url": "assets/js/69.c7b3fc90.js",
    "revision": "d8d48b3be509cf5d58dde1552980f23a"
  },
  {
    "url": "assets/js/70.b8524200.js",
    "revision": "a6bef6a9e1c9c47e209b0fd889b9fa0d"
  },
  {
    "url": "assets/js/71.63414e1f.js",
    "revision": "eb58761a6fa2b8020ebcb356c282072e"
  },
  {
    "url": "assets/js/72.bdcd7c2e.js",
    "revision": "28840c4365e53f3acbb8b06ab552467a"
  },
  {
    "url": "assets/js/73.d5e7bd34.js",
    "revision": "a89d72073752902dd015622e04a72f7b"
  },
  {
    "url": "assets/js/74.984725d7.js",
    "revision": "ca6f2032766ea573f53c4fa0aa7eb567"
  },
  {
    "url": "assets/js/75.4c7ea5de.js",
    "revision": "f207c03b41ff046cf356faf80795651b"
  },
  {
    "url": "assets/js/76.80e6c89b.js",
    "revision": "93e4366707fe6f66d5e9f90342a82c02"
  },
  {
    "url": "assets/js/77.243167e0.js",
    "revision": "fcffc0faa9695da24eb773cc270f32a7"
  },
  {
    "url": "assets/js/78.b528e186.js",
    "revision": "d6c6d0bb44d26c6804951839c772adfa"
  },
  {
    "url": "assets/js/79.2ccc3a15.js",
    "revision": "ceecbda33b243d0bc09268a956ce9d8c"
  },
  {
    "url": "assets/js/8.e73cf851.js",
    "revision": "1b66fe4b043adcc55df06139a3a9410a"
  },
  {
    "url": "assets/js/80.b1f045e2.js",
    "revision": "a332cff04219c75d4308f90a68bdc991"
  },
  {
    "url": "assets/js/81.106aebf7.js",
    "revision": "ca413b17648a96e56d5e8f3131257206"
  },
  {
    "url": "assets/js/82.d825301b.js",
    "revision": "544daf870591391ea2056f3366846af8"
  },
  {
    "url": "assets/js/83.39f531de.js",
    "revision": "4d963c0eea14c05769ce2089381eb764"
  },
  {
    "url": "assets/js/84.be267dae.js",
    "revision": "e2e45a4cd7e64a803d9d8f000615ebd6"
  },
  {
    "url": "assets/js/85.b9122495.js",
    "revision": "d75ea74a22d538444155356e37bee0c7"
  },
  {
    "url": "assets/js/86.b6f129e9.js",
    "revision": "fa12b0fa1195d60105622d00de28e2be"
  },
  {
    "url": "assets/js/87.b6b57e36.js",
    "revision": "cbda1484cd2dcbf99465b2abdf00b4bb"
  },
  {
    "url": "assets/js/88.b110021e.js",
    "revision": "95c8132e4c28a90274e88b786e081c15"
  },
  {
    "url": "assets/js/89.951fbc54.js",
    "revision": "b1605dfd407d6a987650ccd5dbe54b95"
  },
  {
    "url": "assets/js/9.873a0662.js",
    "revision": "626c37b9e695879c1f8d24c91cdac3b3"
  },
  {
    "url": "assets/js/90.baaf2b50.js",
    "revision": "783d7fce1993b368528fb1e7fec8f4d5"
  },
  {
    "url": "assets/js/91.f5dc1392.js",
    "revision": "358aec3ca9973b2a01313d21d32346bf"
  },
  {
    "url": "assets/js/92.639c9097.js",
    "revision": "30cc296ed2325f520ef4e14ec6060ec0"
  },
  {
    "url": "assets/js/93.17c737ae.js",
    "revision": "419078bdccd53a1bb6f5057f3cb27479"
  },
  {
    "url": "assets/js/94.673b6019.js",
    "revision": "3a9586f9d25e0bf247b11502f6de4035"
  },
  {
    "url": "assets/js/95.b285f9e6.js",
    "revision": "0c01406aa2354474994a6ea42e643a97"
  },
  {
    "url": "assets/js/96.22466c3f.js",
    "revision": "250a35d483e8c2ba98015fc58a267cfe"
  },
  {
    "url": "assets/js/97.a5f5de5b.js",
    "revision": "7979ea3a78dd15122cdd265f2ffcf22d"
  },
  {
    "url": "assets/js/98.82806d80.js",
    "revision": "b0defba3f457661bc52cf3229522f83f"
  },
  {
    "url": "assets/js/99.54705137.js",
    "revision": "ffaa28e95d8a83280bdc6e9641d60f7d"
  },
  {
    "url": "assets/js/app.91eb0fca.js",
    "revision": "88f11c1dd604d5c79c07b81dffdac3f6"
  },
  {
    "url": "assets/js/vendors~docsearch.1a7147ff.js",
    "revision": "1b317aba2b8d82996ffa5d41b50f8dc4"
  },
  {
    "url": "index.html",
    "revision": "5411ad4a8d74cef5556725d35c735bfe"
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
