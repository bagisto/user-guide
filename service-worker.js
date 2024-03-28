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
    "revision": "94f3eab3fcdfbb9f467d050a9cad081c"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "03ec2c9e8026dc5acd827541d99889ff"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "92dc16604a26cf3dea6ef84368e6b8c2"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "2e5dd1da89b1792e6d317181b0d9dc2b"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "88e7de2bf66899f3b1388646040f6cf5"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "0d98cb82e73e06d8630c224172336df4"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "b12c3f6e43d3796179626fb803a2c478"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "fb1b640d50803a9d515b4637b26813c9"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "823640eac396cd357666b0bad959b2be"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "351f22ad47b8b95f4cda1634855ed8b4"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "7c8fcfcadd46f425fd92f81955659f32"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "294594f6c89c30760919062730dcfda6"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "36525c80351c79cbe72ed7a508c21b83"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "d5efe0f644917274864514a8c7b50ef6"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "76492f3dedf4eaf741c79d5ea7c4a9c2"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "73b42383c584ad047e74d0d59e4778fa"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "d91aff6aae81096399a0fcdf63d6ac45"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "cceef74be7ba541a5d4f99d1509d43db"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "fe04402fd3d8880ec3259bc1cd54a72d"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "e0bbc87bf62030341e34da84aa405f49"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "b547b123bb46ceb679a511d79a071e17"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "a45d6e519096febf70fc2084640f13db"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "6d3d28e039bbeb9427636eb69c205c2f"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "e6b359c2754cb2f643d706e421065af7"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "1c6666f200c647e6b885dfa281fc8276"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "aae44e727bf0479ee92b4e532dbfab79"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "792a2c23bcecdace6f25be2786c36ee7"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "5d39a3dbb48928311b1887fe9e2e484b"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "c41edf70488d8cbee8ec7c84ddfba49c"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "2a170844662fc58edcc2260911863245"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "b0e663da2c3b4c47a7dd018fbfe87e7a"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "2431f9d3cbe50c4a9d658ed49807c43f"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "74744e39585a508b9e70f6d0a11555f4"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "64bed66d5927cbfbd6251f7b23c61bb3"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "c8fe8c234fba0c8e7404d1aa6f7cbdb9"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "ab8bf7f8784d95a2ca2d9c740101f9d7"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "299bfb4ff15f3c0dc6e791bf703c8186"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "63cf5e7d914dac04d52a2360bd17df74"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "1badf73197081f1461eb82b3906ec502"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "a69b077ee3c93d153b61ef744c20e2cf"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "2881d0806ffacc7f0d0f86264a7a076a"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "da7fe9b5bf7214779ca3548f299f18a0"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "2fa239cd7ce6cffac73dceab7267e247"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "f458a27a7863e3056a2bcef5fd283325"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "fe3b90fdf927cb033352dab299d60fea"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "90a4794b774c5aab8a819103bacbede3"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "baffbb6a32d950182b674a76c311be41"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "dfc4c1d18f287659fb4045f523fb0e82"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "a7bd43ef7a351c17926c3fbea0b41e02"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "fb3d9c4c7f1348e28c78f2913e6adc0d"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "b543bb34608934645d628a29f9c7668c"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "93aace4397dd83882b5c63700012eb72"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "f4d84125c3049939ef15ba6d2c90af6c"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "7cfcd4bf224fbbdc351526dc45292eab"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "a617ad30a6e9f69a4d54e55f86bf853e"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "b596974948a8b7f6df3815f87b6e9e63"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "e01b6e0ebc025d0336878c668ad3cd07"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "62209058b53f99143c4e9ae3be42ccf2"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "6e11a87fed291a07e6127d83f274e8a9"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "18a18505b3b8ae9f1e4068a495bc3cd9"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "430e894890db12c31f7204ad098969c0"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "c77f8e6d9daa366e9bf13ef733db3db0"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "28d5b72cc74728dd7c14656e49713807"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "9ba7a31112c5fbc4b653315b4001cf2b"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "776529f96c13a2b7647b4c2cd4eb7cbd"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "459d0b42f3fc20e4156f91e46f8e2801"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "faf725907ccf9c1e88a87d70e713824b"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "8366f9011fb7a53906a2496149370aec"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "cbaabf693b03ee2e8795ee902ee6c8da"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "9c1a34bb1080a586ad745bb77e7cf2e6"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "1643053eee35201d475e6017ede40a03"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "1b989085d226cf643aabf8e3dc0a8990"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "bf7a59f3ba38a5eec7b5bafa1d1adf81"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "db110f97cd93026c75ee95476039fb48"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "21aa335a559cbf8750401c798ef20285"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "f707f2e1142db0b23eb49ac693bb415f"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "4630f4ff87a5ee7e9cf94d1ff81577c9"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "57fd6610a3c6c6c20f825436e44493e5"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "8deeb5cd3590bd1c865947227792b065"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "8df2b9f7635dd0c3ee82babe077c8c43"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "2c58054ac4dbabe2beb1e5f2aefc5ef1"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "6b1cf09d890e23e343cd182244e785ed"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "7c428df8753f6836e5cbb1752c21e187"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "ee1bab14d535622835494d9741b2720c"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "d0854a8044f67546b17fa27651433c72"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "7f5490c1a2e1d797b8ee1092b9b6eadd"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "a01ff37c21e0e96e85a226c6105666da"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "6f814a122ec2fdc24a2377d7369bf99c"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "498a9abf621cc949600d53addfe2bf43"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "02d16a870e5adf096f4ce923bfaf722b"
  },
  {
    "url": "404.html",
    "revision": "69e9fce40d31db43ced70b7861625e68"
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
    "url": "assets/img/searchField.de2dd0e2.png",
    "revision": "de2dd0e25b64eb5052c6c59cfbbfa266"
  },
  {
    "url": "assets/img/searchGrids.05edc08e.png",
    "revision": "05edc08ecf31f7a0344df346d681ec15"
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
    "url": "assets/js/1.fb871e78.js",
    "revision": "2a7d3db0dc558679323b3b69f2cd24de"
  },
  {
    "url": "assets/js/10.fe9997e7.js",
    "revision": "d969f68dcc62cc5ac941a9938a89fce9"
  },
  {
    "url": "assets/js/100.9e9e4e0d.js",
    "revision": "d2ff0046f27458b78b4e698cd58cb8e3"
  },
  {
    "url": "assets/js/101.fc7de999.js",
    "revision": "a4feece7b102f74e3ede5529e56f40a7"
  },
  {
    "url": "assets/js/102.18f2c96e.js",
    "revision": "dcc0f2af433adc73ce1ef69b17ba6d59"
  },
  {
    "url": "assets/js/103.f732b4d4.js",
    "revision": "89c97a1189fe83bc91e5a26998ada007"
  },
  {
    "url": "assets/js/104.757624b3.js",
    "revision": "2034e50cf5bac4d41de7877fa68ce5e1"
  },
  {
    "url": "assets/js/105.210efdd9.js",
    "revision": "89518db626e17df92a21669d4229dd34"
  },
  {
    "url": "assets/js/106.75289576.js",
    "revision": "221ea30fba5dd5d8c2cddf6dcde13574"
  },
  {
    "url": "assets/js/107.f537a354.js",
    "revision": "d170dc4bb0505d0f6105d3766665d88b"
  },
  {
    "url": "assets/js/108.de3fbf6a.js",
    "revision": "fe0916742ea6a5619dae1dce64068459"
  },
  {
    "url": "assets/js/109.e4af41ca.js",
    "revision": "1e0b4815e6e98cbd8375a71962c04997"
  },
  {
    "url": "assets/js/11.0f2b1850.js",
    "revision": "f48060326ff1d6d7078da1caca0c0313"
  },
  {
    "url": "assets/js/110.9702f416.js",
    "revision": "66d8adca5856ea361364887cf30ff528"
  },
  {
    "url": "assets/js/111.55823335.js",
    "revision": "2ba8a453bda1af5fbaa369194de18a4c"
  },
  {
    "url": "assets/js/12.4e0fc875.js",
    "revision": "52ca116dd3e0658bc5aa7d26c65dd3ff"
  },
  {
    "url": "assets/js/13.c623d032.js",
    "revision": "31c56b2352adebc28d5d4ebb10ddb75e"
  },
  {
    "url": "assets/js/14.0fed4515.js",
    "revision": "97bf039699a2db911e58857ae2c6c708"
  },
  {
    "url": "assets/js/15.0098ae87.js",
    "revision": "27c9844e51e2bbd294285001aca3fff3"
  },
  {
    "url": "assets/js/16.91873e49.js",
    "revision": "cb70d9e7572993aab3ad9ada86735f5e"
  },
  {
    "url": "assets/js/17.9ef73304.js",
    "revision": "2a2297155afdf38f4b2b98c4bb9c2e67"
  },
  {
    "url": "assets/js/18.ed72071c.js",
    "revision": "18ac94bf8dcd82be1af574d31651f0ce"
  },
  {
    "url": "assets/js/19.1fdc7227.js",
    "revision": "d38c39aefc3a458d4d537432c28b17b7"
  },
  {
    "url": "assets/js/2.abd417a4.js",
    "revision": "4ef825281e768afd8338e217bd2be43f"
  },
  {
    "url": "assets/js/20.4d233c10.js",
    "revision": "8fba690830e2b97c358b31666de9d31f"
  },
  {
    "url": "assets/js/21.25acd08c.js",
    "revision": "ffa5edad5f411c131b4da9e6e0ae2854"
  },
  {
    "url": "assets/js/22.059b890d.js",
    "revision": "f1cf07543713fef9bbd9dea656c36abf"
  },
  {
    "url": "assets/js/23.abcee0bd.js",
    "revision": "ae0e2608d1be50f036446e8e5c1e0cbf"
  },
  {
    "url": "assets/js/24.f6a593cf.js",
    "revision": "e8bfe2f6c97c1215888a1d71f48a0a9f"
  },
  {
    "url": "assets/js/25.87e4a7b1.js",
    "revision": "bdf0ad0b65992440f48ad5d8d18996ef"
  },
  {
    "url": "assets/js/26.547d711e.js",
    "revision": "b3d5f917935f09ff5f1b36de88bc3793"
  },
  {
    "url": "assets/js/27.c722b4b7.js",
    "revision": "13d86a2828691ed3cb79d971fb9bb6b6"
  },
  {
    "url": "assets/js/28.20808895.js",
    "revision": "971b20947b7e8442e625bfd48011c7c4"
  },
  {
    "url": "assets/js/29.026d15db.js",
    "revision": "c6d64ff394482b778f50ec4d9a298cfe"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.03f92579.js",
    "revision": "d4ba068fe9253058c37fa45b3adb738b"
  },
  {
    "url": "assets/js/31.7e6830e6.js",
    "revision": "b3d3a79fd1a3f9154d4a1b8ba572f1ee"
  },
  {
    "url": "assets/js/32.9fe5b9d8.js",
    "revision": "63033b26162c800efbeb7bbd45700ae3"
  },
  {
    "url": "assets/js/33.bf8394dd.js",
    "revision": "5e66539bd894c085b1dafcfdd527e546"
  },
  {
    "url": "assets/js/34.44292d64.js",
    "revision": "3c272f9b9c3f71e0c6b77b0786b0ac9a"
  },
  {
    "url": "assets/js/35.fccec7e8.js",
    "revision": "89f0bfd52f598224e6cbc8438c3b6556"
  },
  {
    "url": "assets/js/36.24513909.js",
    "revision": "205381faa258311205fa77b7cd209126"
  },
  {
    "url": "assets/js/37.800eb940.js",
    "revision": "a824b39905386640fefe4894a5b07793"
  },
  {
    "url": "assets/js/38.731eda30.js",
    "revision": "fe09260e68c6aaa43fd887a6eecc4024"
  },
  {
    "url": "assets/js/39.7f538428.js",
    "revision": "669e727059f87333eb303370f51ac5c3"
  },
  {
    "url": "assets/js/4.f21e8b61.js",
    "revision": "0732ac5a5fed869aae6a1e85472d66ac"
  },
  {
    "url": "assets/js/40.fa52bf97.js",
    "revision": "fa2f1104452f84cda4b0f59832ded122"
  },
  {
    "url": "assets/js/41.291b0fcc.js",
    "revision": "febe8ee0b595511090c3c5b794cb0911"
  },
  {
    "url": "assets/js/42.23bd06cd.js",
    "revision": "8492127356c2c40644351a4ced4b198b"
  },
  {
    "url": "assets/js/43.a81d1278.js",
    "revision": "d06d31e842545fc018588dd125925abb"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.8ce0faae.js",
    "revision": "48a6171e9de68a1b8a6fb720b157aa9f"
  },
  {
    "url": "assets/js/46.4d15cb7b.js",
    "revision": "400077b04640b1f1479ce1ca22258f73"
  },
  {
    "url": "assets/js/47.6f442ea7.js",
    "revision": "60f7ed67834fbb8ac1a8f61996471df3"
  },
  {
    "url": "assets/js/48.ebd1d0d5.js",
    "revision": "7cddd8d37a1dd03880964bad354a4649"
  },
  {
    "url": "assets/js/49.fc9a59e8.js",
    "revision": "780982992af92340cf1e60977e056831"
  },
  {
    "url": "assets/js/5.8c4573af.js",
    "revision": "189826b609a4812f330057bcec18e84f"
  },
  {
    "url": "assets/js/50.cdfebf4e.js",
    "revision": "69044a59e3b611b7dfa0a8f24792a1be"
  },
  {
    "url": "assets/js/51.a8b12da6.js",
    "revision": "4be04a59b1fa07be98e85ab2993974da"
  },
  {
    "url": "assets/js/52.d397e851.js",
    "revision": "4ad1c7e8d3e47bc694f76228c48c15ed"
  },
  {
    "url": "assets/js/53.6ddfdb8a.js",
    "revision": "3f9457f9b87429a908ddab88e28ea721"
  },
  {
    "url": "assets/js/54.c8787279.js",
    "revision": "0fb8dce685cf3d23fc448b1f8fbc7fb1"
  },
  {
    "url": "assets/js/55.30fe4371.js",
    "revision": "44d6c78e18a2f78064bd996d5cc79f6d"
  },
  {
    "url": "assets/js/56.b0eec741.js",
    "revision": "84a2ba59bfa50dec5a8279a04787460a"
  },
  {
    "url": "assets/js/57.3aca3548.js",
    "revision": "2cef1d749521bb3bfdfc31e3c37500c7"
  },
  {
    "url": "assets/js/58.cf98296d.js",
    "revision": "d6487bcc586eafdc2e89b7e34471316f"
  },
  {
    "url": "assets/js/59.a5a53c07.js",
    "revision": "66b013874ed5f2bc8ba3114fd4a2a9a0"
  },
  {
    "url": "assets/js/60.20308620.js",
    "revision": "c838903a9f45afb05e559f3093ec07d4"
  },
  {
    "url": "assets/js/61.5b6453c2.js",
    "revision": "97301b800471be769de043278b17afb8"
  },
  {
    "url": "assets/js/62.6f880085.js",
    "revision": "731d783e51ee572a44f150d042c22ec7"
  },
  {
    "url": "assets/js/63.487cd595.js",
    "revision": "f7c326f120b24430f5c97b3353b20082"
  },
  {
    "url": "assets/js/64.85b38f85.js",
    "revision": "21b58226dbba2b32002850371989d9e7"
  },
  {
    "url": "assets/js/65.3810f370.js",
    "revision": "fe904e40884358505dcd9370b5dc3e71"
  },
  {
    "url": "assets/js/66.17285978.js",
    "revision": "9712fe3fc8b90d4dbda6d75e5b29186f"
  },
  {
    "url": "assets/js/67.f65a5e9c.js",
    "revision": "01b546e58cbb67767061125ec7b149da"
  },
  {
    "url": "assets/js/68.45b22285.js",
    "revision": "b97c165bb74735a4cf0a85ac723d74f2"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.79aa0864.js",
    "revision": "243a0aae44efd5fa30599048e37e9024"
  },
  {
    "url": "assets/js/71.b6bf91c2.js",
    "revision": "af988f1caa1e62c2f228670c8ed58c07"
  },
  {
    "url": "assets/js/72.1d2b5c8b.js",
    "revision": "2f2cb92509842386191e02178e5127f9"
  },
  {
    "url": "assets/js/73.8b674ee7.js",
    "revision": "5d6db5c6c8983db171e21523a3458b55"
  },
  {
    "url": "assets/js/74.7295dba1.js",
    "revision": "a2bc7906d3bda7b9d66c5af48714330a"
  },
  {
    "url": "assets/js/75.09b6da82.js",
    "revision": "0259d62bf23b49fe434401722303b3f4"
  },
  {
    "url": "assets/js/76.7a620f82.js",
    "revision": "19313cce1d08ace33299cbff4c61e341"
  },
  {
    "url": "assets/js/77.b560355e.js",
    "revision": "04c395dc8cea49abd33e7e0681024a7d"
  },
  {
    "url": "assets/js/78.943848eb.js",
    "revision": "6381f865e985a04636f5276d03e98146"
  },
  {
    "url": "assets/js/79.9b29fd2d.js",
    "revision": "ad20b2712c677b82a7bd8f6e0381571a"
  },
  {
    "url": "assets/js/8.594d51bb.js",
    "revision": "49a600bdaa46ec45fefbbcba456aa05e"
  },
  {
    "url": "assets/js/80.c96bcf88.js",
    "revision": "2d119ce0505c8edc23653933ebbec2c2"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.b0bee1f1.js",
    "revision": "ffed6a0b8a45d8b4658c3a5bcd7e09a6"
  },
  {
    "url": "assets/js/83.e64a4e3d.js",
    "revision": "aa89f9b730416bb20cd41e6eefad69a5"
  },
  {
    "url": "assets/js/84.439d6e08.js",
    "revision": "5852741401fd816b46e4de0bb9b6755d"
  },
  {
    "url": "assets/js/85.e68672da.js",
    "revision": "af0bb6a91ea881bab91ecdc6123b0731"
  },
  {
    "url": "assets/js/86.3d6aebb3.js",
    "revision": "b6d6f3b44a708e035cdd00ad018f6561"
  },
  {
    "url": "assets/js/87.dcd1e3d2.js",
    "revision": "854395055368b4523577b8e16e836f6b"
  },
  {
    "url": "assets/js/88.f0254190.js",
    "revision": "88a45c07781d76b066e0c5e71633b0e0"
  },
  {
    "url": "assets/js/89.0720e1f3.js",
    "revision": "85171c77a98c260edeb5cda39287666a"
  },
  {
    "url": "assets/js/9.22d4d8b3.js",
    "revision": "11ddf84756c011df83186dad316a8573"
  },
  {
    "url": "assets/js/90.da0319f4.js",
    "revision": "049aa684baaccb5ec2b91a9880e618e5"
  },
  {
    "url": "assets/js/91.3242752c.js",
    "revision": "7c6e4e6323d52eb33148dbef1311b9c9"
  },
  {
    "url": "assets/js/92.a864774c.js",
    "revision": "cf2d625fab69e33cf48d4b39bd9065cc"
  },
  {
    "url": "assets/js/93.5eb03614.js",
    "revision": "32f506c807881cdd37c01eaef30a1bc0"
  },
  {
    "url": "assets/js/94.5d814e36.js",
    "revision": "28386d0ff65750444021217fdc25d290"
  },
  {
    "url": "assets/js/95.8631f9e9.js",
    "revision": "ec3025ab51775234890c553644227a5f"
  },
  {
    "url": "assets/js/96.be7e09e7.js",
    "revision": "4618743823dbfef6985f2484be989c44"
  },
  {
    "url": "assets/js/97.7f458d8c.js",
    "revision": "b46e6e9d4596e8e27a2f190312741340"
  },
  {
    "url": "assets/js/98.7dc7c8a6.js",
    "revision": "a9d42cfc67ea3aeeb56d4fcfa21beaca"
  },
  {
    "url": "assets/js/99.19e6eea1.js",
    "revision": "128e755fb89cbab556c6e12e861d5b0a"
  },
  {
    "url": "assets/js/app.b62cb765.js",
    "revision": "b8693c2544b7224197f75f2d939b42e3"
  },
  {
    "url": "assets/js/vendors~docsearch.63b78b64.js",
    "revision": "0b840dbf3ce05b3243b59584c3ef91c8"
  },
  {
    "url": "index.html",
    "revision": "e786cd65d346626e30034a9dac71e820"
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
