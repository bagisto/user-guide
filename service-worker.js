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
    "url": "2.x/attribute/attribute-family.html",
    "revision": "dc81a399bbc0e75ee5cfed503c6261a3"
  },
  {
    "url": "2.x/attribute/attribute-input.html",
    "revision": "82e800544d05dd0ad7b7b16195139494"
  },
  {
    "url": "2.x/attribute/index.html",
    "revision": "84e6e4fcb875da2ffcfa260d0a6bb522"
  },
  {
    "url": "2.x/attribute/overview.html",
    "revision": "ca21865cc1438bf65ad8a2a7e2112f26"
  },
  {
    "url": "2.x/attribute/product-attribute.html",
    "revision": "7c8695ba27d5771b7b2edf3ee572fff5"
  },
  {
    "url": "2.x/category/create-category.html",
    "revision": "fdf28346274981b2e03a3b703bb2c494"
  },
  {
    "url": "2.x/category/index.html",
    "revision": "247836cac484badf39e9206141ee7f57"
  },
  {
    "url": "2.x/category/overview.html",
    "revision": "61def6e24fba01fb5fa91c12a2c42c26"
  },
  {
    "url": "2.x/cms/cms-page.html",
    "revision": "0d36a409888cd1a2c10f29a66529e97d"
  },
  {
    "url": "2.x/cms/index.html",
    "revision": "9a3c98abd02f4a507e9fab2f77f3d528"
  },
  {
    "url": "2.x/configure/configurations.html",
    "revision": "08abb554636b237a518375602a5226c6"
  },
  {
    "url": "2.x/configure/index.html",
    "revision": "dc501fd59945ecb9ae74cd3d57a47d10"
  },
  {
    "url": "2.x/customer/create-customer.html",
    "revision": "98e801c016dea577e14fd0cd09d2b9c6"
  },
  {
    "url": "2.x/customer/customer-groups.html",
    "revision": "72af3b61399a63785ed107a6c2eb96dd"
  },
  {
    "url": "2.x/customer/customer-reviews.html",
    "revision": "9a2c474ced23298538e0eac150a90c03"
  },
  {
    "url": "2.x/customer/index.html",
    "revision": "dbcba23387e7a450d9e713407e35f25f"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "3458b109489374e3fbe7c75fa9ea42f5"
  },
  {
    "url": "2.x/introduction/introductions.html",
    "revision": "9276af0258548f392ca580165896ffb2"
  },
  {
    "url": "2.x/marketing/communications.html",
    "revision": "c6eafab1180bf906915ff0fc2b6715ee"
  },
  {
    "url": "2.x/marketing/index.html",
    "revision": "bb65b9e142e874e18113a191c8f0f517"
  },
  {
    "url": "2.x/marketing/promotions.html",
    "revision": "c0809c84d531ac41c8fb41f8d961f831"
  },
  {
    "url": "2.x/marketing/sitemaps.html",
    "revision": "35b2fed12549536b290dcc7cfc060ee0"
  },
  {
    "url": "2.x/orders/create-invoice.html",
    "revision": "21c763ede85035db5a029ab13f4e4acb"
  },
  {
    "url": "2.x/orders/create-order.html",
    "revision": "be41abd931936db346a69fd13b98f078"
  },
  {
    "url": "2.x/orders/create-shipment.html",
    "revision": "25c14c5ee54f31979edb5649963b5b58"
  },
  {
    "url": "2.x/orders/index.html",
    "revision": "6ad4cbe6ff65c606f928e761b36d585c"
  },
  {
    "url": "2.x/orders/refunds.html",
    "revision": "0de2f8be0f3d61f46ed8d66f19b01cd9"
  },
  {
    "url": "2.x/products/bundle.html",
    "revision": "b359eacb59f84f4a1db1c5a8c4ae6ad8"
  },
  {
    "url": "2.x/products/configurable.html",
    "revision": "f21f7ea4da5c7803a481736c55960d30"
  },
  {
    "url": "2.x/products/downloadable.html",
    "revision": "b727bd5293030cea7bc6657c94bfb1b1"
  },
  {
    "url": "2.x/products/grouped.html",
    "revision": "8cf951c20d6ae1b54e89a7619c2d43a9"
  },
  {
    "url": "2.x/products/index.html",
    "revision": "db32f49e59a965813116ad51b46d83eb"
  },
  {
    "url": "2.x/products/simple.html",
    "revision": "c0892ca372a849aa8ad7ad8d313ca706"
  },
  {
    "url": "2.x/products/virtual.html",
    "revision": "a139ba768bf8840a8d5ed2906e79c6fa"
  },
  {
    "url": "2.x/settings/channels.html",
    "revision": "eef64fa99f93f030fbd4e3fb5768ca69"
  },
  {
    "url": "2.x/settings/currencies.html",
    "revision": "b7d48c54e4581cbd9301e118c8ee4c1e"
  },
  {
    "url": "2.x/settings/exchange-rates.html",
    "revision": "5e7f420cb91c9e215f28496736784074"
  },
  {
    "url": "2.x/settings/index.html",
    "revision": "0cca8a7ac8bb87ff769839fc81df2728"
  },
  {
    "url": "2.x/settings/inventory-source.html",
    "revision": "d8e57de778e33838057354ad858357ee"
  },
  {
    "url": "2.x/settings/locale.html",
    "revision": "0120cf85b2a1111aabaf1f1786b44ffe"
  },
  {
    "url": "2.x/settings/roles.html",
    "revision": "c85488c06544cda4490cf697d45e77d6"
  },
  {
    "url": "2.x/settings/taxes.html",
    "revision": "f1105afa6e23531598177fda39585cd3"
  },
  {
    "url": "2.x/settings/themes.html",
    "revision": "080619f5bd7bbbe6f63def7349229554"
  },
  {
    "url": "2.x/settings/users.html",
    "revision": "24b104e463440595a0ccf4009044e55f"
  },
  {
    "url": "404.html",
    "revision": "325d39228c4386603d3baca0c74c5d6f"
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
    "url": "assets/img/actions.b7cabf8d.png",
    "revision": "b7cabf8d63c2d57d1c471d6877d8a756"
  },
  {
    "url": "assets/img/address.54c54bb8.png",
    "revision": "54c54bb834084ac699488810bd27877b"
  },
  {
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
  },
  {
    "url": "assets/img/applyCoupon.86d08f55.png",
    "revision": "86d08f55d595886149c079ae551839ba"
  },
  {
    "url": "assets/img/attribute.096f9150.png",
    "revision": "096f9150a23344cbae1bd9105771034c"
  },
  {
    "url": "assets/img/attributeCondition.c62c263c.png",
    "revision": "c62c263c8ae78119c7d8edaf03e9de10"
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
    "url": "assets/img/checkoutPage.93a3d169.png",
    "revision": "93a3d1695a960a678b423e5521ca8ad4"
  },
  {
    "url": "assets/img/cod.a12ca48a.png",
    "revision": "a12ca48af4446c77d697d6a91c4859a0"
  },
  {
    "url": "assets/img/condition.551d25e2.png",
    "revision": "551d25e2f4c058c56cb04815e2018bb8"
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
    "url": "assets/img/configurations.58f83ad9.png",
    "revision": "58f83ad945a339d894fff644a5323e10"
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
    "url": "assets/img/couponApplied.4bc462a2.png",
    "revision": "4bc462a258076a2ae389e5b0ad67ec47"
  },
  {
    "url": "assets/img/couponCode.dd555392.png",
    "revision": "dd555392dd4bfa97f0ae4984f8c99d28"
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
    "url": "assets/img/createPage.8392fa25.png",
    "revision": "8392fa251d47307c792bbd8ab88cb9c5"
  },
  {
    "url": "assets/img/createRefund.506a06d7.png",
    "revision": "506a06d7389292b0a56e9fabd42f6d24"
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
    "url": "assets/img/groupProducts.67a99166.png",
    "revision": "67a99166d6e7b65e0fa7777cfabace42"
  },
  {
    "url": "assets/img/guestCheckout.4e097830.png",
    "revision": "4e097830b799d41574e207014b0d6bad"
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
    "url": "assets/img/imageSize.8e066795.png",
    "revision": "8e066795f9129b4fd7da35ec8f8288d1"
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
    "url": "assets/img/orderGrid.16861d51.png",
    "revision": "16861d51247c5dfc6d61b3105995def0"
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
    "url": "assets/img/refundGrid.5c0c2bd8.png",
    "revision": "5c0c2bd82623672872582a65d62e2aa2"
  },
  {
    "url": "assets/img/review.97d17f45.png",
    "revision": "97d17f45342502ee075640a128762069"
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
    "url": "assets/js/1.a69742c6.js",
    "revision": "ea6e076ca6f7a724c94f4b31660ae4a9"
  },
  {
    "url": "assets/js/10.14eef830.js",
    "revision": "3b23ad6e624438480135a93bd0b093a2"
  },
  {
    "url": "assets/js/11.37204585.js",
    "revision": "4415b438bef16c8f2019f7def84d6ce0"
  },
  {
    "url": "assets/js/12.fe2d9637.js",
    "revision": "ed7a8f1aa1ef6d4e3d90da09d044b859"
  },
  {
    "url": "assets/js/13.2448d7b9.js",
    "revision": "6aae5b885d58fa7d15797b684f1b8343"
  },
  {
    "url": "assets/js/14.24e8b056.js",
    "revision": "d4943231b743bc85ed964072d6e4bb8d"
  },
  {
    "url": "assets/js/15.7c2ff39b.js",
    "revision": "a8bd751901ee2e8690cc3fd46d586bf9"
  },
  {
    "url": "assets/js/16.dbe09064.js",
    "revision": "1549fbdb010565f2323e5d8f74829012"
  },
  {
    "url": "assets/js/17.b7f98365.js",
    "revision": "850b9bcaf61dc1f395636f517e930fe0"
  },
  {
    "url": "assets/js/18.a7ac6cce.js",
    "revision": "bddb1b7c7be4842a9cd2e37082993f63"
  },
  {
    "url": "assets/js/19.a27f11ac.js",
    "revision": "14d32908e403161fca9e044565b5a942"
  },
  {
    "url": "assets/js/2.8a9cb257.js",
    "revision": "0ca5a23b0742ffb9eb8a9e2e7f51006a"
  },
  {
    "url": "assets/js/20.14bf3174.js",
    "revision": "0ef1cf035d2b66ab860aa0f9ead6d82a"
  },
  {
    "url": "assets/js/21.845394e9.js",
    "revision": "857d5d5347c4a5e345ca239a1f1fdaa7"
  },
  {
    "url": "assets/js/22.ecad8877.js",
    "revision": "6c448aa005e2214183796d9ec927f2c3"
  },
  {
    "url": "assets/js/23.d0166992.js",
    "revision": "2aaee5425fd0b8774261f8fafd5f26ff"
  },
  {
    "url": "assets/js/24.d56a5191.js",
    "revision": "ce3cf39b67f6980e04c69b19c6e51ca8"
  },
  {
    "url": "assets/js/25.3b03f959.js",
    "revision": "082dbb3690d9d9a4a0f91c1721e54365"
  },
  {
    "url": "assets/js/26.9fbd2e75.js",
    "revision": "66211c913886b1727714f3c2b35696b3"
  },
  {
    "url": "assets/js/27.6f31603b.js",
    "revision": "d2e75752edd35c32533f487f23552a9c"
  },
  {
    "url": "assets/js/28.7707f952.js",
    "revision": "919c60bc6c27079fe6bf4ed5829c0561"
  },
  {
    "url": "assets/js/29.59c48492.js",
    "revision": "fd06101709bcc1aaa9ea32ef73bb5476"
  },
  {
    "url": "assets/js/3.d6d039ba.js",
    "revision": "843209ebb3bb8fb4dd9e2262bbd24adb"
  },
  {
    "url": "assets/js/30.c85f0656.js",
    "revision": "b78b62d75ce91898c5ed9a762412d454"
  },
  {
    "url": "assets/js/31.f59bd019.js",
    "revision": "7f1cff349b5695ab0a3e71f1a1f47b03"
  },
  {
    "url": "assets/js/32.e4e1b213.js",
    "revision": "71201d63ba7813512cb4e16253e6369d"
  },
  {
    "url": "assets/js/33.a1f462ab.js",
    "revision": "2e988daa69d06a3a31f2e86ae2c161f4"
  },
  {
    "url": "assets/js/34.9f52977d.js",
    "revision": "d2b85821237af42f9a84a26bc8805a60"
  },
  {
    "url": "assets/js/35.cffb8f25.js",
    "revision": "cf8ce9b3691500757ac67fa9424cd692"
  },
  {
    "url": "assets/js/36.8adfe56c.js",
    "revision": "a7cae9666cc9406f22744e76e2adaf23"
  },
  {
    "url": "assets/js/37.575c86aa.js",
    "revision": "bfa4df9a130ef9f22d3134250846f6b5"
  },
  {
    "url": "assets/js/38.4db993a9.js",
    "revision": "e18440e88d0692f18facd7bab421b289"
  },
  {
    "url": "assets/js/39.57816c1e.js",
    "revision": "f4c4931d098f1be7ad50c6d57a6df19f"
  },
  {
    "url": "assets/js/4.4bc8d7ab.js",
    "revision": "0b3d6c5403bfa5f1d1be2f281663191c"
  },
  {
    "url": "assets/js/40.6efbec6f.js",
    "revision": "5766a8e10ce4adcb853baa0b92b5b951"
  },
  {
    "url": "assets/js/41.3ecde69e.js",
    "revision": "9b131a0d21c39099425469ace70183a9"
  },
  {
    "url": "assets/js/42.b966c5b2.js",
    "revision": "b83ec1943d8b87d3f16e6e4a162e13c0"
  },
  {
    "url": "assets/js/43.397b7cf8.js",
    "revision": "db613d41c172f955309f9481790afe4f"
  },
  {
    "url": "assets/js/44.f0cd9427.js",
    "revision": "1205671b23b068d1a6b09679709a2e57"
  },
  {
    "url": "assets/js/45.06db8423.js",
    "revision": "5a529f8ded2d7ae7db1fc2e36744eee3"
  },
  {
    "url": "assets/js/46.f8fad0b9.js",
    "revision": "1c8cb097145a9178fc5fe175f1c11236"
  },
  {
    "url": "assets/js/47.aa00953f.js",
    "revision": "239c669bb33a10ea0d64f24c68e36813"
  },
  {
    "url": "assets/js/48.6d877635.js",
    "revision": "edca3f7843941cc55313d37b966bb9f6"
  },
  {
    "url": "assets/js/49.a59625e1.js",
    "revision": "f1ad8f8b06c7306c85783c7c188b2a22"
  },
  {
    "url": "assets/js/5.4b9829ef.js",
    "revision": "0d497878c51e848436b16fa329808cb6"
  },
  {
    "url": "assets/js/50.d46088f9.js",
    "revision": "f57eb30640495d7c7dab54be6eaa43ce"
  },
  {
    "url": "assets/js/51.035fb9d7.js",
    "revision": "73b910b188d974d2a97ee51ba9db47c8"
  },
  {
    "url": "assets/js/52.3546ad51.js",
    "revision": "c1ad1f53e0ca6e615a2c3e50dfff0f2b"
  },
  {
    "url": "assets/js/53.b24cb9c6.js",
    "revision": "db9b302fde3c764d6cd58c2aa0566f2a"
  },
  {
    "url": "assets/js/54.3686c3a6.js",
    "revision": "465a4b6a39d2ac8ad1f236851e4b4dbe"
  },
  {
    "url": "assets/js/55.d2201a76.js",
    "revision": "ed393c000984e79a16da5ed91aa11049"
  },
  {
    "url": "assets/js/56.61b8a0c1.js",
    "revision": "d7ab500681fe7fb2fd9d759e00afa920"
  },
  {
    "url": "assets/js/57.0f401fab.js",
    "revision": "3c806ca788f2f65583e971c23b75571a"
  },
  {
    "url": "assets/js/58.a552a2f5.js",
    "revision": "45c0182ae99d3df7313999285c6d478f"
  },
  {
    "url": "assets/js/59.c47198df.js",
    "revision": "4260c4dfc07f3f70ca1b6eb83f7b6f03"
  },
  {
    "url": "assets/js/60.4e13fddb.js",
    "revision": "1dd4e8c340f9519dd9f8de0fe1488ec4"
  },
  {
    "url": "assets/js/61.72e805b8.js",
    "revision": "a44585324b60496810c589eb76f3bdb1"
  },
  {
    "url": "assets/js/62.4cccf8d7.js",
    "revision": "9304b72ab2fc5dba93772177af08da8f"
  },
  {
    "url": "assets/js/63.6b513fda.js",
    "revision": "bfd43bf951f0e5fb247bcf2280c3d158"
  },
  {
    "url": "assets/js/64.f05cc115.js",
    "revision": "b9f15cdb18a090e744f883221e30553c"
  },
  {
    "url": "assets/js/65.16d65423.js",
    "revision": "6e65f69183cf68ca7eee7f8cfa338e3c"
  },
  {
    "url": "assets/js/8.57198244.js",
    "revision": "76d99f8ed07be6344050aba8e02a2660"
  },
  {
    "url": "assets/js/9.16f35571.js",
    "revision": "9ff6aea22c4efd4f9548e152122b89f6"
  },
  {
    "url": "assets/js/app.335787cc.js",
    "revision": "bbd283b90bb310479d1bf6e255771902"
  },
  {
    "url": "assets/js/vendors~docsearch.9f034801.js",
    "revision": "a729ecd0955b1dd81a9ea7b77e904065"
  },
  {
    "url": "index.html",
    "revision": "f45b4886b09326c8c42500a5dbce8739"
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
