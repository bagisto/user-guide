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
    "revision": "e0e4c565aaa7fafaaebbf8cefdc66c79"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "3b331f1f4956cd7ac04c89f0df9e69a8"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "1177d5efef3f9e0d163670e9dec19e31"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "26171afa46b6b7e01204102ab704bc9a"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "557eb00735bfb55ad9be94603c50bacb"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "b7f167afb02cab1879199da67b551b20"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "610d5a7ec815eff54e66bb62456a012d"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "c03feee83f463575b5f6a22f15205884"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "7b687604ef56b6703c9d9a4819b75b9f"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "a68b91766dfbccfcd1b775f2f57cd0bf"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "0661375dae3208436c47e5e4493a74cd"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "d26e23a706e6747a517c630bd525ec07"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "770c4568421b133cb50ee1ffbc2bd3f2"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "d2c80400fcd660aa099203437d2a7ffe"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "6d88fa5661c15cb2ec50754473fba8e5"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "84e8f33ec07c36095c377d2c30477223"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "a7e69c4b2b183ca68741277e486df508"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "486474686017c095d10eb61876be6540"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "92a1b58699fa844a6c083f5fc911f355"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "1792f39c1469658c84bf2755df65449e"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "7653674027080acaeba44a209ae3ff51"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "8bddb24c1e56415a624477dbe608e6d9"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "70a14dfec9dfc4982c1614c30b076a14"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "4c8909bc4b0273e489f7189487674de0"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "640f8717d468aefdb433123fea5e0280"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "b511427fdee2cb0c9403c1eb4969c743"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "762612c2f4f43139c329b8abc195bbbb"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "7c3df8c93e017c6ace060c444a3c8e9b"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "69731f7483558b63a3221a24211a8286"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "bc8fbc794064abf110524a25f4bb62bd"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "8dc195334963e9752ecf80b026b88202"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "1a4647dd01e556b441094127ce4ad27b"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "2bf124f000bacc423c82d1fea0b40d62"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "f44040112186adc3457ca9bc981969db"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "32639dca41cde1bdd5faa02cdaae8e15"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "7ee16eb2a10aa13e615ed71dcd7ad3ef"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "a5e0b20f3f29c31400fd755af509fc44"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "0e18f28837af9fc5032a3b91e7af4a00"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "dc16775eb98d92de83b65f4cf66db4f3"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "6807e8db5f3a3cde69c06c5a64366a51"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "f39dd8417f2d6939dcd1591db03f471b"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "df5058b2fda3634c6a3b7843485e3d67"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "6a578a2f805bc93a1f91287a42ee1495"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "b95fce6e2191026b4f0141ea9dcb0c33"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "3427629436181e008625eeaed4dc2ea6"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "67f7a1bf3870e7ff53c904061183cb70"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "219a291532f686f1e16e51d992cc3364"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "a6ff3816a7e01c229eed66122c055d11"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "2fe4008065d4287803209b48e4532efa"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "defae7bedef74dc0232acfb34faf8d9b"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "37ab523b8f125d511fedf1609ded6f31"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "4e3ba41a2ee167d1bdd7616bc542ddbf"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "71d791da3266c8d551aef8072c00bc29"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "bdd360525c38d5a638666321103b41f7"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "025bf5c951c39fa3e0533c03f425253c"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "cedacdfaf85429c4ead192f3eba50e80"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "32f89b98890dbe794899efa69cff1893"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "43bfe82d243b5014c75ef0d7e084ae16"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "0bcfb517e6e5f06ded6b727603a2c7cf"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "fad09912b861c6030a77a93f34e12c07"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "b48ee74fbdd3d51fe6953c6599d371ab"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "7fd4a2434c66d7c383090ad90f931a97"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "107c4892d7218323b930bd4c45047076"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "50a4d6e754cbee43316c472cfa51319e"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "03dbc14809d78ac34ba28c92810d5f55"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "f73bec3c0498d348a51469bfa2de5a7a"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "f02bfe11c26c518b1a943878f039b109"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "07e008e027ce840aff30d6debe85eeb2"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "a203396addc41a28ad537a6ae0ce869b"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "f3e116ab20c4a72a35cb6c06afdd8df5"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "dbb0fa902fecafb6002eee4b70c3a095"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "eca47aee8aee0b4621277c7a31680cd7"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "4af9e3710e22897599bcb76eb2d39cad"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "f62b29d2d83b58792803633fcf3bbdb4"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "6adc4b44f8a4f88a0121180f9e9069c8"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "1f7bd76f8ed80d124a3b3fc92a6f48d5"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "fa041f0094dbf6cafe1c8eee4081e8e4"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "746135472fec8478ce5afca06bfdb7ab"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "982d82ae72eb0a68cd7efb3c08cfdd2e"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "8767da8420d00b552d4c32085891c22f"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "a58325c5bcca7481bc4928c3a024cb6b"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "5577cbe4d2cd25c4e2039f4a601817b2"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "286e395a309c248a14041b5a1ac48c97"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "738152c5cb63266f3cd82a9e9baee3b5"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "2578216f7f9899c711df7e3459ea1ad1"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "2acc7d38d848bf0c864ef51cfaebdb93"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "55e05300b28dcd4ddca9b0a2fb774850"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "1874e5e25ade627594d0ff6e6b81e8da"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "add42485518386340f781ca5d7fc0432"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "4e2542c368eda1977ed75636805783a4"
  },
  {
    "url": "404.html",
    "revision": "c6cff72d975f1e3366c22d10c57046df"
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
    "url": "assets/js/100.2eb4e7c7.js",
    "revision": "8ff0cead978f1553769553b3ce086130"
  },
  {
    "url": "assets/js/101.3fd57cf7.js",
    "revision": "462c7060c6aabcc8c41f2c6d184d1cba"
  },
  {
    "url": "assets/js/102.a5a45089.js",
    "revision": "226b7093bb634dd55d3400aaa88fde5c"
  },
  {
    "url": "assets/js/103.f732b4d4.js",
    "revision": "89c97a1189fe83bc91e5a26998ada007"
  },
  {
    "url": "assets/js/104.2cfe7940.js",
    "revision": "5280248a0206c2a6eed4ebc377c2111e"
  },
  {
    "url": "assets/js/105.b437b61a.js",
    "revision": "08d042a96596a6863b4c0b4d676fc772"
  },
  {
    "url": "assets/js/106.75289576.js",
    "revision": "221ea30fba5dd5d8c2cddf6dcde13574"
  },
  {
    "url": "assets/js/107.9bfb597b.js",
    "revision": "552cda90782e21b765af7fd575731122"
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
    "url": "assets/js/11.e9c98d0f.js",
    "revision": "1c6a2318ad2feed611ddedb66d085bec"
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
    "url": "assets/js/12.6fc7462b.js",
    "revision": "ee7f0d659227617f54e4c09c9ebf4f9d"
  },
  {
    "url": "assets/js/13.e37c8fab.js",
    "revision": "6f89779a5690975a6aa3bd718eced199"
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
    "url": "assets/js/20.bd5aa491.js",
    "revision": "8a49fedac19ffed4cf54c67481a6f146"
  },
  {
    "url": "assets/js/21.51e970f0.js",
    "revision": "73ffadcb05faed4fcfa135a24d445501"
  },
  {
    "url": "assets/js/22.048b0b92.js",
    "revision": "b2450541e4ad125433e0f88210883d80"
  },
  {
    "url": "assets/js/23.292167c5.js",
    "revision": "d84c5fe9448000c7ea73a6cc207eb904"
  },
  {
    "url": "assets/js/24.bfea9a07.js",
    "revision": "d08624ce96bff9895c05f0c7dfc87082"
  },
  {
    "url": "assets/js/25.871eb982.js",
    "revision": "02a6c1721e5b85a2d07904cdaa79ea14"
  },
  {
    "url": "assets/js/26.547d711e.js",
    "revision": "b3d5f917935f09ff5f1b36de88bc3793"
  },
  {
    "url": "assets/js/27.0cd5d883.js",
    "revision": "1eb8f8816af5ea69b61d8c2b4a55c872"
  },
  {
    "url": "assets/js/28.71d23dc5.js",
    "revision": "251ed4681dbdd921e851b16b38055cb8"
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
    "url": "assets/js/31.c8cb7a5b.js",
    "revision": "c7e2c7b8aca78966de55ffbb40c71206"
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
    "url": "assets/js/34.39ee23e1.js",
    "revision": "452b6c1c03cfe2a0bd24bc2d62dbe7fc"
  },
  {
    "url": "assets/js/35.5b1e882c.js",
    "revision": "2466ae488030532857b41c5d677edc14"
  },
  {
    "url": "assets/js/36.eded44d5.js",
    "revision": "6a75d12c9c61b55b128bfe06c9203878"
  },
  {
    "url": "assets/js/37.c83a0af1.js",
    "revision": "dba1a63c709a25d4189e5217c2385de6"
  },
  {
    "url": "assets/js/38.5b039a35.js",
    "revision": "62f8c1df1dcd5f11135ea21959ef5708"
  },
  {
    "url": "assets/js/39.f770ee66.js",
    "revision": "aadbee0de1934e9e0527924566163fd9"
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
    "url": "assets/js/43.6042d6ff.js",
    "revision": "d99f68e94b405879ec2c57d6db836f4d"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.e9a63677.js",
    "revision": "08894884bf233f9794a13e1be68f5924"
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
    "url": "assets/js/50.5197fcaa.js",
    "revision": "737d9f730f5f409b96b49ee91f08bcf8"
  },
  {
    "url": "assets/js/51.a8b12da6.js",
    "revision": "4be04a59b1fa07be98e85ab2993974da"
  },
  {
    "url": "assets/js/52.012a9dbf.js",
    "revision": "6e0e305c74a889096a0e777988cbd640"
  },
  {
    "url": "assets/js/53.6ddfdb8a.js",
    "revision": "3f9457f9b87429a908ddab88e28ea721"
  },
  {
    "url": "assets/js/54.79c00383.js",
    "revision": "cc1c4f8579c3cb462c9758149bb7c984"
  },
  {
    "url": "assets/js/55.2f726c00.js",
    "revision": "369424956ca2ab3577bbe2d1a3a67f5b"
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
    "url": "assets/js/59.b42b1596.js",
    "revision": "da7c27450c26b75c8626b1511936e9ad"
  },
  {
    "url": "assets/js/60.1af3c636.js",
    "revision": "ea46898a0c1691771ad921b5190ed197"
  },
  {
    "url": "assets/js/61.8745b95e.js",
    "revision": "8dfea07eabbebc4aa1e3d4b2fa26a230"
  },
  {
    "url": "assets/js/62.4811a346.js",
    "revision": "f4e3f3baf11689d123ebfe9901e56307"
  },
  {
    "url": "assets/js/63.0f2f38d8.js",
    "revision": "cf0486e447790a1f5a479384aac8c533"
  },
  {
    "url": "assets/js/64.d3fe99eb.js",
    "revision": "01df0ab9f0f0153a8e927677ee351ed8"
  },
  {
    "url": "assets/js/65.bd695562.js",
    "revision": "83e0975b587f7e8ddd73a7e7ff4246df"
  },
  {
    "url": "assets/js/66.1e9cb461.js",
    "revision": "b5bb22c9eb7686cd46c4e6806bb63ec1"
  },
  {
    "url": "assets/js/67.a9dc50f3.js",
    "revision": "2313b83a40596388cc4adb490762e638"
  },
  {
    "url": "assets/js/68.cbce82f7.js",
    "revision": "a3d5236f52aa96c82650434f3486fb9d"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.565a576d.js",
    "revision": "470103cca0a6472f7b17c9c5d047a5f2"
  },
  {
    "url": "assets/js/71.2b087731.js",
    "revision": "5949947a65f9cff878fa6cca9f40e5ea"
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
    "url": "assets/js/77.55ff8bcc.js",
    "revision": "232b879403ddd64750375cb54fe28279"
  },
  {
    "url": "assets/js/78.f6000079.js",
    "revision": "c09b5615576ec1a6c7a4871421a4807d"
  },
  {
    "url": "assets/js/79.52c5ba11.js",
    "revision": "30158d1faefe2ed08883ae1414e4b82b"
  },
  {
    "url": "assets/js/8.594d51bb.js",
    "revision": "49a600bdaa46ec45fefbbcba456aa05e"
  },
  {
    "url": "assets/js/80.2b064844.js",
    "revision": "dab0c686a18f3bfb07ed25eee974a739"
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
    "url": "assets/js/84.09b55ecf.js",
    "revision": "418b0d0c0d7f76fce63a854ab4652883"
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
    "url": "assets/js/88.04a97d10.js",
    "revision": "b2b99c5b94fc0a52f6fd9e41c5d1004a"
  },
  {
    "url": "assets/js/89.914fe64e.js",
    "revision": "3d1f62bbabb64b111869c46f84098b6e"
  },
  {
    "url": "assets/js/9.22d4d8b3.js",
    "revision": "11ddf84756c011df83186dad316a8573"
  },
  {
    "url": "assets/js/90.f2c0513f.js",
    "revision": "fcd475f21145f372bbd6fcf60144d737"
  },
  {
    "url": "assets/js/91.c012762b.js",
    "revision": "3085f64d9051586e5547f51722a2af5b"
  },
  {
    "url": "assets/js/92.a864774c.js",
    "revision": "cf2d625fab69e33cf48d4b39bd9065cc"
  },
  {
    "url": "assets/js/93.e4cb3813.js",
    "revision": "d501c8ddc0a80a9213a802a5109b194e"
  },
  {
    "url": "assets/js/94.5d814e36.js",
    "revision": "28386d0ff65750444021217fdc25d290"
  },
  {
    "url": "assets/js/95.e6aee8a1.js",
    "revision": "655e9c9c73620f5d7792e29f60370fdf"
  },
  {
    "url": "assets/js/96.be7e09e7.js",
    "revision": "4618743823dbfef6985f2484be989c44"
  },
  {
    "url": "assets/js/97.c57e608c.js",
    "revision": "37dde7993f216384f4f185a46054b5bd"
  },
  {
    "url": "assets/js/98.e2936b10.js",
    "revision": "50dc010359ef5b4d8203427f4a02f5ca"
  },
  {
    "url": "assets/js/99.d67418d2.js",
    "revision": "da7c0b6ae89b818c351a58eca01d06df"
  },
  {
    "url": "assets/js/app.ad3fdd75.js",
    "revision": "771efaebad214f92e766ace42c6add54"
  },
  {
    "url": "assets/js/vendors~docsearch.63b78b64.js",
    "revision": "0b840dbf3ce05b3243b59584c3ef91c8"
  },
  {
    "url": "index.html",
    "revision": "f058efc6f423b9c28aca4897d2d6ff3b"
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
