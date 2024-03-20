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
    "revision": "bc5b3e6beb064cd6a0ecd75d77b0573d"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "207be0a6e02c47eed945521207049c47"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "3033d3628fa83219fb60053934b8d87a"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "c764c8fe37446fa980e9cfab78c55932"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "f98f227c111d1e8b29a790ef7ae50119"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "9f2c2944efabe5d49d28b4a8ef5a3d2b"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "aae21b45f0b54c32cc8f54eee82c4c1f"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "532e2bbf81c3b58f5f327447a5ac8202"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "55e2261e6ef7139bb06fc1ca14903280"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "059bad3655b30fa8c2ca16a164a25cf3"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "3d58ebbf02ecd72b6c5da5d0c2d2dcf0"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "d24106c1838681055e38f218dca3168b"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "8da4792cf99954070bad4f02c4d95528"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "0ab6921a1740a8378df55a6eeccb37c2"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "7574251cc9f4eed4a1274036f40532e3"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "22206cfc102c18e16b20d81dd77bf637"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "27a2be75db4b4973d6b33ac1c2386f41"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "9c333480e508c83197a20b1b0dc429d9"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "fea0d3fd3fc45790b9065ed9c1c2930d"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "d64bea7d1fe81e3497b67de85d1616b4"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "48436997789e5c4491c6f22c30c86c35"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "ad3c6a1066ffa199b4311709fafaced1"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "dc008465d6c419a5db761f235b0134e5"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "631df4d84a6ae5ce9376a730fcc2fa5a"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "9334fecc8c083561a4787686fcd9f01a"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "16690abafc0a28031f7875181b923605"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "df6906ef633ff61807272c75c4dedc40"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "40350942c9ae0ed6f1e08168ae3dbb27"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "a330a2698621657dd7cbf07c9e31dace"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "c164c71f56202216e2fbd8e285e73d3b"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "3ed1deeab6d25e8c24de7781dfdd7a1b"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "13be279afa77ffd1f50e51d7987d422b"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "6871f127ccd14b3e8762b6523657eb28"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "d8176e90aea49bb41a2e68fa4189c2b6"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "cef1e0c943462889d1778d254d74cf8f"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "a47d9714fab3bc615c913a0f0b637a52"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "294869964d60bb1b78875bb2abb8b766"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "00814c7e2ad3b00229d61173d9c36b55"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "fa6bb2aa6e51d6f197ec3dcd8e6c4113"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "d390a790f87f3c00c03eda0ac3183bec"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "e0643247dd9e7e94e4120dc219ee3303"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "95e4c9f610b6b26fc9aa3315e6e3fcff"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "9f92f132769d3cb524221d36d738822b"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "9b628c48bd68f349d6d0dd491b79b8fd"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "f34feb89b3b2637478ac99dbb6dfb406"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "125c502cd18049462f08c2535f11fe9f"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "4e14c6df29819f80d17d09a5e249047f"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "c2611481803899af662c45732fe1aaf8"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "76e9f558ddbbfeeefcb86cbc2bf84b7a"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "961cb9682028038a516572411b9ac4bb"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "a0dd4f9e3af77d92cbe910ec82ae3a48"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "83f2dc1c3446df3eef375472084ae92b"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "eb88d6d923f6b02160745d2fd9a43b02"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "a37233a14faf62d2c28192ca60c0d7ee"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "0000a507ee4203c9da36744378d3557f"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "490172b76c5613055405d0d71fab783a"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "2bad80e50442bdd0e71b823a9760bfe0"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "fcbd8e422f2b815e04b3a2e7ad6ef089"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "607d5402810bcbd03f57a5e34d8fd749"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "1cb70af0188e36591c68642a57e3c79c"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "2ec87353c702d65d7bb0afeb9ab2367b"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "4e46f15e0f96ec71175caa488cc98614"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "22602777492ae70f9f14ac7d9cc83404"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "461bc1a9132e80e3d0148d2f35613ea0"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "82cf2184374284004e870b4da0e64690"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "681577983120a486ac3395eb7f202288"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "705cd399fda73cda3522c6c99c24c1ee"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "49b9283d70ccf03f58353df36b0fd151"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "89c4fa82f62c838af263faa42e51d783"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "da2ba0eccb435a89059a63adf4c2094e"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "e5af5da702b699fb3e67963bf3201df6"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "7a4a7cd451cfe34934008bbff1c12721"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "890e7c6a2c64ae8d382099e0292d2751"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "ee8150a676680840927d3750d309b5a6"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "564e749bec37dfec7b83ee559fdbd5d8"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "40a4f84086d94a1a44410fb0b8345f60"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "741fd62df1e9096c76adaf475c68fb81"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "14cc140440f7ff7ad847bab17bca98ff"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "1cc5215cc1f983f630da1f7d463566e6"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "ebfe6bae925884df8c03470198ee10af"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "008d97712b876f13822c3138daf8262e"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "6f271507634d2216866dac13c7f06dbb"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "edda4420224c1bd938f254b4513bcd2e"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "929ec7d39e918dc1797a77aa26c36405"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "712146998cce4ca20bc17a140772b1db"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "81b9f67fda377b96a2de4783e76c1472"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "08ee16d1f87aeea7944a1ebd70d0f47e"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "4ccdc9ce4ccf18340bbc3ea4f77d50c9"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "c74a0c79b58f870147eb0279f86b72b3"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "aa9116b8020e5c0c59cdac66baae2d44"
  },
  {
    "url": "404.html",
    "revision": "dacc3b2c1363a42f5e2357ce425f1f82"
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
    "url": "assets/img/checkoutMessage.7fec4305.png",
    "revision": "7fec4305b6e80c79137eda387ce363d1"
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
    "url": "assets/img/content.9140afd6.png",
    "revision": "9140afd64a40ae73085809e92f97a2a6"
  },
  {
    "url": "assets/img/content.d90f471e.png",
    "revision": "d90f471eb0cb66d7c7da150e4ab7a89c"
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
    "url": "assets/js/1.828f74c2.js",
    "revision": "fa26fda5c8b9188633aadc4fa5ae801b"
  },
  {
    "url": "assets/js/10.fe9997e7.js",
    "revision": "d969f68dcc62cc5ac941a9938a89fce9"
  },
  {
    "url": "assets/js/100.9f609cfb.js",
    "revision": "317cc966d84bd824bec4a42af121c05e"
  },
  {
    "url": "assets/js/101.c0f99e62.js",
    "revision": "b59f6a71f403108013c3458c26833d1f"
  },
  {
    "url": "assets/js/102.4f23410a.js",
    "revision": "52fb66c4eb10734ce813ffb5149567e6"
  },
  {
    "url": "assets/js/103.34102fc4.js",
    "revision": "6e1c97066af26f672b4818f5f5c8dbdb"
  },
  {
    "url": "assets/js/104.757624b3.js",
    "revision": "2034e50cf5bac4d41de7877fa68ce5e1"
  },
  {
    "url": "assets/js/105.0cafa6c3.js",
    "revision": "a58982aae1e7f6bec8d6a075ffd2058d"
  },
  {
    "url": "assets/js/106.e0ba97d5.js",
    "revision": "637f111686d72468495cb645c2e6da14"
  },
  {
    "url": "assets/js/107.faf49e62.js",
    "revision": "b31f671fa157ca7118310267642bf68e"
  },
  {
    "url": "assets/js/108.68d52c67.js",
    "revision": "2fc6a64315b9e88383ffadbd84489e00"
  },
  {
    "url": "assets/js/109.8d100485.js",
    "revision": "97d5ee048adfc27dc7232c4649973485"
  },
  {
    "url": "assets/js/11.16fca140.js",
    "revision": "262e1a78e9879b24abca6a71597a8749"
  },
  {
    "url": "assets/js/110.acaa1ac2.js",
    "revision": "66c67fedd6d00da16359ab6e76a36374"
  },
  {
    "url": "assets/js/111.36c6d5f0.js",
    "revision": "f033b97bd8d52481420587ec061f5173"
  },
  {
    "url": "assets/js/12.d984fc69.js",
    "revision": "0945c473b14bbf2aa4f2e8de1b1c6be5"
  },
  {
    "url": "assets/js/13.09a3a7fc.js",
    "revision": "d4190b2ef7a5a952003f015dee1c9fa1"
  },
  {
    "url": "assets/js/14.e2e3e201.js",
    "revision": "beaad951293c4b6fd52beabc275f7398"
  },
  {
    "url": "assets/js/15.630b6398.js",
    "revision": "77b6123b12685d2ebb257c17e653c420"
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
    "url": "assets/js/18.3c58edb7.js",
    "revision": "d545b79971ae43c58666984ff4561604"
  },
  {
    "url": "assets/js/19.18ce3b64.js",
    "revision": "81fabbea7aceb951855066ef6dea7bee"
  },
  {
    "url": "assets/js/2.666bbf97.js",
    "revision": "0bb8c3e94140e75a04e18dcc33a22d0a"
  },
  {
    "url": "assets/js/20.7d21985f.js",
    "revision": "5b4be86c4a6cd51e60f3f5cda1ce7863"
  },
  {
    "url": "assets/js/21.0d2d4dda.js",
    "revision": "6734d48675d29051172297b36c109809"
  },
  {
    "url": "assets/js/22.b4917c97.js",
    "revision": "fba9ac84318801f829057a77a2f8456a"
  },
  {
    "url": "assets/js/23.732f7e32.js",
    "revision": "dedb068a0c4e69128f432b9518c92cf2"
  },
  {
    "url": "assets/js/24.99d67c59.js",
    "revision": "31a5241729ea1d87937d600b2c52bff3"
  },
  {
    "url": "assets/js/25.8e020299.js",
    "revision": "10b3ab50b93b1308ba1deba20128f654"
  },
  {
    "url": "assets/js/26.b900547f.js",
    "revision": "00da78b65e55be2481d3bf2412f3555d"
  },
  {
    "url": "assets/js/27.39866dff.js",
    "revision": "4273bd73b205cf84265cb10b7d7a5d29"
  },
  {
    "url": "assets/js/28.06c7e045.js",
    "revision": "ce451e661c76dff3abd7d9939cff81a4"
  },
  {
    "url": "assets/js/29.ef961766.js",
    "revision": "dc37c898a708f56215540cdea941dfbb"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.08d7dfa7.js",
    "revision": "ebc451c99032646a5f632c13e2066be5"
  },
  {
    "url": "assets/js/31.d8cdf2d7.js",
    "revision": "5fde269ac52e97f7040f394115a3e04b"
  },
  {
    "url": "assets/js/32.f4587b6f.js",
    "revision": "b14625280383ea68963f4c01f96ae2e0"
  },
  {
    "url": "assets/js/33.bf8394dd.js",
    "revision": "5e66539bd894c085b1dafcfdd527e546"
  },
  {
    "url": "assets/js/34.0bb69045.js",
    "revision": "ba7212b38ef4d604ca3a5353288a03a6"
  },
  {
    "url": "assets/js/35.5cbf06e2.js",
    "revision": "8b938bd90eb89a6b911b2cb3bd7d59c6"
  },
  {
    "url": "assets/js/36.a4a18cf5.js",
    "revision": "88df107b4a70315ce3af5d398da37c71"
  },
  {
    "url": "assets/js/37.0ffdde22.js",
    "revision": "48cfcbb219221caf72eac7f470fcd2d0"
  },
  {
    "url": "assets/js/38.9251cfa2.js",
    "revision": "15e5b85c567ed76274a3b163e7b07bdb"
  },
  {
    "url": "assets/js/39.c5a62c11.js",
    "revision": "2ff7303afc50eb17f1766c4f8947e741"
  },
  {
    "url": "assets/js/4.8f77e26c.js",
    "revision": "5bdc0a617b84d6ed00955447b93a6ef9"
  },
  {
    "url": "assets/js/40.ad14f09b.js",
    "revision": "c0ed878909b8d0d40cee4b7d374e1ff0"
  },
  {
    "url": "assets/js/41.ddf2cd6b.js",
    "revision": "175827490aa4a0f3ee8aef4f45b10ca8"
  },
  {
    "url": "assets/js/42.89011b1d.js",
    "revision": "3fe9d879b004d7827c00fa8b6f452e2e"
  },
  {
    "url": "assets/js/43.2abfdc63.js",
    "revision": "cb2c3b882432321a4418240d2f4cbd4f"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.e899c961.js",
    "revision": "45e0a1d80eaa06e0d13f7e62779865cd"
  },
  {
    "url": "assets/js/46.93de353a.js",
    "revision": "7ab958a936ed1057105bfa271dc21067"
  },
  {
    "url": "assets/js/47.9e457ff9.js",
    "revision": "64c9d8d7e3b86839d3ed040a9bf4179c"
  },
  {
    "url": "assets/js/48.130095bc.js",
    "revision": "6632e7423db84b19795d0749a62b98a8"
  },
  {
    "url": "assets/js/49.9ccd819d.js",
    "revision": "94c934c2aaeecd6c7f16bb2565ffb3f5"
  },
  {
    "url": "assets/js/5.700f6b00.js",
    "revision": "3d08ca19c8889b7667be8873acfa059a"
  },
  {
    "url": "assets/js/50.3634e994.js",
    "revision": "b39de59140c9b11eb3164ac3a5607978"
  },
  {
    "url": "assets/js/51.1f9362d7.js",
    "revision": "83cb7d72c50450298e7a0d903507acf8"
  },
  {
    "url": "assets/js/52.22fa79d9.js",
    "revision": "569ac88490dcba847e161fe3c4adaebd"
  },
  {
    "url": "assets/js/53.9c4c936a.js",
    "revision": "d726061d1c3f808be85abb4cade1e575"
  },
  {
    "url": "assets/js/54.0eaabcc9.js",
    "revision": "15b5ed66da02a22e9a0b06a247515f39"
  },
  {
    "url": "assets/js/55.313a465d.js",
    "revision": "c110eb619e59e0a0e51f36b19e2e6201"
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
    "url": "assets/js/58.0e6b8171.js",
    "revision": "dbf90c85c5b889d15a1b93f8c447f6db"
  },
  {
    "url": "assets/js/59.b4920fb1.js",
    "revision": "20c3c7d6539e632560bcbc2d38ef6724"
  },
  {
    "url": "assets/js/60.480eff43.js",
    "revision": "61658375dcc10c33eff327ebad694aca"
  },
  {
    "url": "assets/js/61.232dc388.js",
    "revision": "bae88c6f8921d5c6fc24352375d2aae8"
  },
  {
    "url": "assets/js/62.5dbfa97a.js",
    "revision": "2579f20e605c5daca501d9583b0e4f1a"
  },
  {
    "url": "assets/js/63.cdef08f8.js",
    "revision": "5319aa30b2fb0a4eed6a1efd7a50a813"
  },
  {
    "url": "assets/js/64.f98d8cbf.js",
    "revision": "3abf6ee50977583a9b3728ae03b1363d"
  },
  {
    "url": "assets/js/65.5f6bd9d7.js",
    "revision": "b66352f2220a3313d5dccda9b25e4040"
  },
  {
    "url": "assets/js/66.d24ad642.js",
    "revision": "312bab983218f729c478e3b119d75454"
  },
  {
    "url": "assets/js/67.b27928f3.js",
    "revision": "0aa8ae2cf79727ea27458eace1eeb581"
  },
  {
    "url": "assets/js/68.a13fe4a5.js",
    "revision": "80ac9ebf7f919a1de6cba93fa4d31ae7"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.c2269e43.js",
    "revision": "ef336e43a6349ebb7880b583b2d16d3f"
  },
  {
    "url": "assets/js/71.d8b2315e.js",
    "revision": "c7e7e996a3932abdea5f431311104e1f"
  },
  {
    "url": "assets/js/72.23f992a3.js",
    "revision": "f91a7647de3277b5625aec61908c1b82"
  },
  {
    "url": "assets/js/73.c9f5a4ae.js",
    "revision": "f8d3fbd60ce13e52c9c61649f743d784"
  },
  {
    "url": "assets/js/74.3bcf122c.js",
    "revision": "1d4662ec5dd715d2b228f89cdaa991a2"
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
    "url": "assets/js/77.9786d9ee.js",
    "revision": "42d57d7b5c038fca33c281ac1858c804"
  },
  {
    "url": "assets/js/78.38bfb6d5.js",
    "revision": "087f51ec55725bda359ad3b36821995c"
  },
  {
    "url": "assets/js/79.ceab876f.js",
    "revision": "63bd9a989c49a0bfa60b0c2e11597371"
  },
  {
    "url": "assets/js/8.e0bdac0c.js",
    "revision": "8ced423ddebcb5f2e151a2d79ba7d191"
  },
  {
    "url": "assets/js/80.418a07f0.js",
    "revision": "42a7811fcec2368b85a7b6a34c16cae0"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.efe76cf1.js",
    "revision": "a1ac0372a59380e74da323ed409dcf96"
  },
  {
    "url": "assets/js/83.9471ca18.js",
    "revision": "dfb56a7f7329db6693676691e0a511d5"
  },
  {
    "url": "assets/js/84.e32b038f.js",
    "revision": "a5577eab03d37e825e289a73e154472c"
  },
  {
    "url": "assets/js/85.00322c81.js",
    "revision": "2a652208d4114862fef31b7ae9431ca1"
  },
  {
    "url": "assets/js/86.2f30c19f.js",
    "revision": "263f5472990bb5f763c2294597fd404c"
  },
  {
    "url": "assets/js/87.b3fdf46c.js",
    "revision": "1aa90381074e838f76e3e9560410d994"
  },
  {
    "url": "assets/js/88.59dba6c3.js",
    "revision": "ea8caae070fbeeaac2c8492ededeab40"
  },
  {
    "url": "assets/js/89.367e5174.js",
    "revision": "84f0914bb443e9d4d949bbee21dd2263"
  },
  {
    "url": "assets/js/9.0b74333c.js",
    "revision": "b0f1ce5e2b13d16367e06423bcdf70c2"
  },
  {
    "url": "assets/js/90.0427f6e2.js",
    "revision": "a302e9372883f4f8e2d9bc8227d4bdb2"
  },
  {
    "url": "assets/js/91.334f3374.js",
    "revision": "5db0516047bc9fbd149a942024d7908a"
  },
  {
    "url": "assets/js/92.cedc3f9d.js",
    "revision": "3d7bbcbee93e9885eed654da114abdca"
  },
  {
    "url": "assets/js/93.cfbc018c.js",
    "revision": "96bbb67d33cd8822b6a346297b1e2d1b"
  },
  {
    "url": "assets/js/94.8a7be60c.js",
    "revision": "f0a721e610f87814f93eb8783b68de46"
  },
  {
    "url": "assets/js/95.a1731c5e.js",
    "revision": "871587244fc2f3066b3e6e9ccaddd3b2"
  },
  {
    "url": "assets/js/96.dc8f843b.js",
    "revision": "8b407ff6354600aeaa8bc565255f5de3"
  },
  {
    "url": "assets/js/97.045ff678.js",
    "revision": "2adbbe40a834632a9f72debb678c016b"
  },
  {
    "url": "assets/js/98.ae61c556.js",
    "revision": "1472c0e53390bee702bd5960ac5cb4db"
  },
  {
    "url": "assets/js/99.fc0fc0e6.js",
    "revision": "0a3d97e2fb7e45c40d2dbbce0a4c60d1"
  },
  {
    "url": "assets/js/app.3242290c.js",
    "revision": "238c4d46bfef48835534172140872eb1"
  },
  {
    "url": "assets/js/vendors~docsearch.bf60dc39.js",
    "revision": "191bfc0e4e194eb9b20722fa5c513a59"
  },
  {
    "url": "index.html",
    "revision": "d0918a5a539ce71dfaa49fd7d324a5d2"
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
