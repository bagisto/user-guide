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
    "revision": "9b237d940bd8c5bfdb24f3019a32d584"
  },
  {
    "url": "2.x/attribute/attribute-input.html",
    "revision": "1dad7638b41466e5a0f5aaee66bb07d7"
  },
  {
    "url": "2.x/attribute/index.html",
    "revision": "be0730a7de6e1457d9b530f23628fa1a"
  },
  {
    "url": "2.x/attribute/overview.html",
    "revision": "8a60a1ab410065cbe702b47d40d29d0b"
  },
  {
    "url": "2.x/attribute/product-attribute.html",
    "revision": "ac4e6264f225ed39795c044db4799740"
  },
  {
    "url": "2.x/category/create-category.html",
    "revision": "230167ca0ee11625d77f79b89c45a71e"
  },
  {
    "url": "2.x/category/index.html",
    "revision": "b309877321243da391e971bae4caefa0"
  },
  {
    "url": "2.x/category/overview.html",
    "revision": "9cedd64a6867013cccf4f1c1f265a7c4"
  },
  {
    "url": "2.x/cms/cms-page.html",
    "revision": "16bcac49198c51de154278a5957e2929"
  },
  {
    "url": "2.x/cms/index.html",
    "revision": "31a304a58b3efcf192b240b293af3873"
  },
  {
    "url": "2.x/customer/create-customer.html",
    "revision": "57feb9a2fe1c44ef4227030a6a15f092"
  },
  {
    "url": "2.x/customer/customer-groups.html",
    "revision": "1d7c9e93b8516d4b97e90512554a59fa"
  },
  {
    "url": "2.x/customer/customer-reviews.html",
    "revision": "55932deb32d17a1475b6aacd88846e15"
  },
  {
    "url": "2.x/customer/index.html",
    "revision": "c5fcca790ce2d3ac6d85dbb62f529ca7"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "f6df0fc9571b6267687f150e76021021"
  },
  {
    "url": "2.x/introduction/introductions.html",
    "revision": "aec24a66a887ea0ff68957ae0bf859c0"
  },
  {
    "url": "2.x/marketing/communications.html",
    "revision": "1e29369e0f8b9a248dfc7aece4f19e16"
  },
  {
    "url": "2.x/marketing/index.html",
    "revision": "81977f203e886b2e6f76e3bb23769d62"
  },
  {
    "url": "2.x/marketing/promotions.html",
    "revision": "8d104a09a1d3ec255165f841a8344e4f"
  },
  {
    "url": "2.x/marketing/sitemaps.html",
    "revision": "e505008bf813f4d79b5addf41fbce2d2"
  },
  {
    "url": "2.x/orders/create-invoice.html",
    "revision": "e93bafcf0dc701f74b5ca3fdef93a327"
  },
  {
    "url": "2.x/orders/create-order.html",
    "revision": "80e7d68b4587225997a0dc8d7464cc99"
  },
  {
    "url": "2.x/orders/create-shipment.html",
    "revision": "4c360a34796a4c6358dd81f4b57c3b86"
  },
  {
    "url": "2.x/orders/index.html",
    "revision": "e022d8d7dee8744cf314bd719fd60091"
  },
  {
    "url": "2.x/orders/refunds.html",
    "revision": "9ef617fd0a48f43e3359c4ff3a23cb74"
  },
  {
    "url": "2.x/products/bundle.html",
    "revision": "fbc7ba1d0a98f8dcc3b3c5395a6fbd2a"
  },
  {
    "url": "2.x/products/configurable.html",
    "revision": "b24c3ec88cf05ab67a369d993e5291e7"
  },
  {
    "url": "2.x/products/downloadable.html",
    "revision": "5ad3f6bcc5adb77cdeb36b04f7482252"
  },
  {
    "url": "2.x/products/grouped.html",
    "revision": "3b436cd7bb9f42b793e291fef53c9ed6"
  },
  {
    "url": "2.x/products/index.html",
    "revision": "c2ccb9619405cdb691c16b0c2eed44e6"
  },
  {
    "url": "2.x/products/simple.html",
    "revision": "148f65cb3c351f1424db38544f869feb"
  },
  {
    "url": "2.x/products/virtual.html",
    "revision": "fe2905f925b37fc01518b9cc04f618ed"
  },
  {
    "url": "2.x/settings/channels.html",
    "revision": "db8f4900b9e0f5c3b87a3eedb9438c63"
  },
  {
    "url": "2.x/settings/currencies.html",
    "revision": "dfd1922b9ba26e08df87a3ec6ceb5ae9"
  },
  {
    "url": "2.x/settings/exchange-rates.html",
    "revision": "777943b2315efda040295acb0f86b2bc"
  },
  {
    "url": "2.x/settings/index.html",
    "revision": "ed8e007c5655dce9045eebc09b4b27d5"
  },
  {
    "url": "2.x/settings/inventory-source.html",
    "revision": "1c24cbd44b320c39d866fb57ef6b06c4"
  },
  {
    "url": "2.x/settings/locale.html",
    "revision": "a549612d42c3ae4f2f068a35744a053e"
  },
  {
    "url": "2.x/settings/roles.html",
    "revision": "44e9d520cb6bc77e55db6695fa487abe"
  },
  {
    "url": "2.x/settings/taxes.html",
    "revision": "7af00063e58932cf2badd6d3e93eb4c1"
  },
  {
    "url": "2.x/settings/themes.html",
    "revision": "70eb4cc807ce0852c88775cc2ab2b218"
  },
  {
    "url": "2.x/settings/users.html",
    "revision": "8b1c4ffead80baab9fe33f953dd7a179"
  },
  {
    "url": "404.html",
    "revision": "948e11396f6b1ee0ae220f42a19223f8"
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
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
  },
  {
    "url": "assets/img/applyCoupon.86d08f55.png",
    "revision": "86d08f55d595886149c079ae551839ba"
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
    "url": "assets/img/cart.0d42b772.png",
    "revision": "0d42b772a15096e9edc7056fa2fe2d97"
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
    "url": "assets/img/image.14ecf612.png",
    "revision": "14ecf612cd25f06d6b8e0697ba510c52"
  },
  {
    "url": "assets/img/image.4fb420d5.png",
    "revision": "4fb420d5f271c4c97f186eb11e1dff05"
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
    "url": "assets/img/invoiceSubmit.da097460.png",
    "revision": "da0974603b074d5dd4a66eba35945d63"
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
    "url": "assets/img/options.001937e2.png",
    "revision": "001937e250d31e5f629729cfe7151e50"
  },
  {
    "url": "assets/img/orderGrid.16861d51.png",
    "revision": "16861d51247c5dfc6d61b3105995def0"
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
    "url": "assets/img/shipmentOutput.3e0d9740.png",
    "revision": "3e0d9740c504c803c7e8cea13595ed43"
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
    "url": "assets/img/sourceAddress.ee2e69a5.png",
    "revision": "ee2e69a5700fec03accb2b06a106d51d"
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
    "url": "assets/js/1.d7274432.js",
    "revision": "ecc16274410af3259feb2f268205f6a8"
  },
  {
    "url": "assets/js/10.dd1d1ea3.js",
    "revision": "0ec81b728620609d92b19012aec89d0d"
  },
  {
    "url": "assets/js/11.9f32e949.js",
    "revision": "f465b0b9bc0f66bfd03e5ce9a390b171"
  },
  {
    "url": "assets/js/12.be094fdf.js",
    "revision": "a3990834e577d3ba058865d5137e54ab"
  },
  {
    "url": "assets/js/13.89bfa818.js",
    "revision": "94e73c3d6ef3c2f481b3efde9375ea4b"
  },
  {
    "url": "assets/js/14.9afd7193.js",
    "revision": "d9b0acebfc09985b3b3fdb7a5e578fe4"
  },
  {
    "url": "assets/js/15.155ea9c6.js",
    "revision": "d7fa503f0d09fd89d6ff0f116048f4e2"
  },
  {
    "url": "assets/js/16.ea6977ec.js",
    "revision": "0ec015645f6f2ca232b0ba587f667bed"
  },
  {
    "url": "assets/js/17.9599e6fb.js",
    "revision": "9691100dba1e80c2c335edacb359194e"
  },
  {
    "url": "assets/js/18.728e59fb.js",
    "revision": "18fb5287e60d40f562c402093a1bd61e"
  },
  {
    "url": "assets/js/19.a5706f35.js",
    "revision": "63c81b56cc4a77e5905046b249ec894f"
  },
  {
    "url": "assets/js/2.94ea0fcc.js",
    "revision": "922385b2c0c0f3c0a93888a43ac6a607"
  },
  {
    "url": "assets/js/20.76e7c752.js",
    "revision": "51dae02cafbd5b91c17885641d24c54f"
  },
  {
    "url": "assets/js/21.fa2b42c6.js",
    "revision": "78e6ccb313fc4dd1e64360562e620d4c"
  },
  {
    "url": "assets/js/22.13fb9a3d.js",
    "revision": "b1c1df93faea97c267a688881659fb5b"
  },
  {
    "url": "assets/js/23.edc58618.js",
    "revision": "8526ddfebfb047bbe1f92bd51329cb54"
  },
  {
    "url": "assets/js/24.7e95659a.js",
    "revision": "76f1501e777a6340ceb8a2f3932fa3f0"
  },
  {
    "url": "assets/js/25.ee798187.js",
    "revision": "93843be39a2134db102fda05f88dfa1f"
  },
  {
    "url": "assets/js/26.2593c9e4.js",
    "revision": "d49671ce621bed2bb336d374cdb303c0"
  },
  {
    "url": "assets/js/27.ade42a61.js",
    "revision": "90837dc40a6a7c448271730348e45019"
  },
  {
    "url": "assets/js/28.188f6a82.js",
    "revision": "1c627c45e4f3a554a2cd2bb0b22f298e"
  },
  {
    "url": "assets/js/29.373feb9b.js",
    "revision": "a1779ccd3789761eccd93cba2e6a7157"
  },
  {
    "url": "assets/js/3.7049726f.js",
    "revision": "63b87d4c9cca079aea8ba3f38cfeb2ab"
  },
  {
    "url": "assets/js/30.3ffb056f.js",
    "revision": "302e6c9aeca6d7e8add11807c487f47f"
  },
  {
    "url": "assets/js/31.9210afd7.js",
    "revision": "c7f196fd245d75106b6058a8a7b64e33"
  },
  {
    "url": "assets/js/32.a464590b.js",
    "revision": "7f9d9425e4d7b05d901ee37aac8f1d09"
  },
  {
    "url": "assets/js/33.ce793c75.js",
    "revision": "20227ec5bc012552dc08b4750bbe0007"
  },
  {
    "url": "assets/js/34.298910c1.js",
    "revision": "d54e95b2c73f4b22f308eca94ccc6a74"
  },
  {
    "url": "assets/js/35.d32078f4.js",
    "revision": "891bc17bc6e90617d2060803de42fc51"
  },
  {
    "url": "assets/js/36.75b0ae09.js",
    "revision": "189f22c76e333c04d0612427c8b994c2"
  },
  {
    "url": "assets/js/37.1b8c665f.js",
    "revision": "4fe17f03cf33888d9cd39185db5f7e2a"
  },
  {
    "url": "assets/js/38.83563386.js",
    "revision": "fe6d61509d7e07aab9de0efaf094f15e"
  },
  {
    "url": "assets/js/39.5e3b74c0.js",
    "revision": "13aec7d16594c55c57987c6d556829f1"
  },
  {
    "url": "assets/js/4.824e6db9.js",
    "revision": "098e1c4353c81a20b4d25fa33a43e318"
  },
  {
    "url": "assets/js/40.98c5ca54.js",
    "revision": "8770c0ef13f70250d96eba1f06033a8f"
  },
  {
    "url": "assets/js/41.6eefc585.js",
    "revision": "bb1413c2c30e81db3c211ba51eb5e7d0"
  },
  {
    "url": "assets/js/42.63504ff6.js",
    "revision": "caa3ccdf18d0cf3e6b2af3235fa67ab4"
  },
  {
    "url": "assets/js/43.affa0cf1.js",
    "revision": "79d00eb592b006fceab7ec69c8d1a0fd"
  },
  {
    "url": "assets/js/44.16159fca.js",
    "revision": "45b9426cf3a5fb910a346c81a75198d1"
  },
  {
    "url": "assets/js/45.bd6769e1.js",
    "revision": "0377a669ff9347f019ebb9c0fa8d8504"
  },
  {
    "url": "assets/js/46.913818ef.js",
    "revision": "9da6ea2688d22f6fe2d6865fe9698542"
  },
  {
    "url": "assets/js/47.4e670ea3.js",
    "revision": "117c301bfa7f401defe07abd6f41c52e"
  },
  {
    "url": "assets/js/48.649b384f.js",
    "revision": "aa1ebcf1b13fa6766aff61d2511819a3"
  },
  {
    "url": "assets/js/49.2238233f.js",
    "revision": "9c5f37faf255ebe1836ab3fcfb4fd0a4"
  },
  {
    "url": "assets/js/5.fbdf23ee.js",
    "revision": "1925f69f612513b46795d2e5d27da40c"
  },
  {
    "url": "assets/js/50.68e38294.js",
    "revision": "48ad94a65f0ec02e41a239ea39005dd4"
  },
  {
    "url": "assets/js/51.969b38ae.js",
    "revision": "cb6486796620ea957c8df47372abf704"
  },
  {
    "url": "assets/js/52.4d3f3b53.js",
    "revision": "3f4aedccd1d6bb3b5c940ec4d3ae44b1"
  },
  {
    "url": "assets/js/53.bedea925.js",
    "revision": "996b74381670cb578a58fda6eb728051"
  },
  {
    "url": "assets/js/54.3d39b1ff.js",
    "revision": "460972fd6a66944ffa59a1007afef62d"
  },
  {
    "url": "assets/js/55.7209d12b.js",
    "revision": "0e38ec43c9ebc51d0c75ba58b7740429"
  },
  {
    "url": "assets/js/56.a2568cbb.js",
    "revision": "973b6ce0ec0e2136541ba47ce4617450"
  },
  {
    "url": "assets/js/57.67e39bc5.js",
    "revision": "744e48aeca64f7467d825c400bba02a4"
  },
  {
    "url": "assets/js/58.5d0afe93.js",
    "revision": "0dc630ae7aebc1010d4728a9247324a0"
  },
  {
    "url": "assets/js/59.3519a674.js",
    "revision": "16be8df5d6e739eaa547f5aac03f5ddb"
  },
  {
    "url": "assets/js/60.294412cd.js",
    "revision": "8c16cde7c1bf5e27b8902f573b84456c"
  },
  {
    "url": "assets/js/61.2329a006.js",
    "revision": "cd493b012d0b6d26075f99764d633c9d"
  },
  {
    "url": "assets/js/62.015cbc12.js",
    "revision": "a496182ab8172c08eacb9681239d5356"
  },
  {
    "url": "assets/js/63.8b6b5435.js",
    "revision": "373fb0534b9c722425d299893ef37821"
  },
  {
    "url": "assets/js/8.6ef4939c.js",
    "revision": "67c1c6dac57161b3e0fa1a83fd5150a5"
  },
  {
    "url": "assets/js/9.919c14fc.js",
    "revision": "c9212123e265fb8f2646863899dd6e2f"
  },
  {
    "url": "assets/js/app.c43f9f35.js",
    "revision": "a8b58082976117586ecf3fce23203623"
  },
  {
    "url": "assets/js/vendors~docsearch.484f910d.js",
    "revision": "fe1bbcf42183a7978c7463028652a6af"
  },
  {
    "url": "index.html",
    "revision": "d2ae0e1d249183d00a1ba243873e6884"
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
