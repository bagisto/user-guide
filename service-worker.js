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
    "revision": "313b89cce317f77e6f121192d8979717"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "cf2218dffbd33d8aed47da52c7aa617f"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "a2470337fbbae9bd4af246f7820768d8"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "8059bb91153e2e6b5d289e06891bbf18"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "104ba5b80bb3ea8c7ad71f5ae41945c6"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "0bc7aca617c5911fcd4e833519b17abe"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "0620830a727e5161c5ca5a6196d2df84"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "47c2bec7fb693c7e7474f27a2984a7f5"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "405db8bf40382a0c415f06048497209b"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "efb1da2923cdd81183af7877ae617217"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "e766951f16676576c87fe1c435522e3a"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "ca836584fbacf04e1354a25757f16b77"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "4f912263ef097e03db429b4111383a99"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "501ac2def038c04f9a7a52bde899a6bf"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "7ba10aa6e7f6b2802670320e7617c657"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "24aeb296fc14079c32652808a76cb7ec"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "c8213a9c49f184989e0d3b5b18de0838"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "b9edfb1eb41ce36cf54221691e40b5cb"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "9955c76396ef93525732631a3e9d9261"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "d2af6c2d6e3f4e6586d3dcd1e7142ace"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "35ee3cc7e3a660e32adf9e0437762549"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "ecbac4fae6a08a90b73c40a778e72bda"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "57beac4ac204df1d311239654206bc0a"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "8fd62ab77e7bae6f1a0b4ef0b377462b"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "1b9ea9a0cae41abf43e4c8e452e8e09d"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "b2309d5ea763c08ddac8871f5e5be817"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "c835c2e22a4f7bdf3dd974166357fe09"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "015304481e4009ff6a9b047f93368f95"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "dff81e49909f0c9d5a57c085fee5649d"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "55c37a523a3629b4bfaa61fc1a145cab"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "5c826c121ae243a63ef3502b906e9f31"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "14c23705a90c7df239fb1250bfda3f8d"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "f34aeb164778acfd0ec3ac67f6197534"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "de8e330535262b1fade5373aece164df"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "7ecb81b93f555737978b520ea6990720"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "c7d821275b4b82c82ff0974d2b94c396"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "a7b7afe3ecae299a8e6737b8e7167e62"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "353485d2371645ddeb64fc99daf0114e"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "0ee8ba0c7c015fdc66fbdbb15fc32a15"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "2a1c87c1b5070ba81bd25fbc5438b04a"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "29ad89590b92af07516e797f97bb703c"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "5b10990ca1aa5e6b44bf76b43ea31fd7"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "e94c00edf19483e6ac036cf071cc3679"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "90d3809aaaf321d989f257dcff6fc360"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "28dd8fc3e428e5b9f61feea8607c32d1"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "9935a57d0d8659fa12f6f46af098da42"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "e2485c5cc5720f1eb268238f3c7ab1a2"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "1e9247865c686e1e2d7e3af678f1b90d"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "67cc937ef3e794bf2f82c64996091179"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "9a711fbc9ee5ef77e8a0f1cd5d09435d"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "f0caf7f6673f7b39ea0aa648ecc842b6"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "e8ef22ef7c2a5c4ea5d58ab917795840"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "edaf977bad5d0a0ecc4505416be2c53c"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "0a546c58b218311c061c0f0baefe94a5"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "c6f54c5b630f1ca83355dd20f16d137b"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "2d4faa66e33bcc488eca683f0c1d0e99"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "de1a6ea3ee4850d9036aa26fb1ab3edd"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "2e75a0d5d27209649c0d494fef3d48cf"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "cf8ec35b41a2bd9f070b78339fd08e9e"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "565c5a84c705d9bc0e380575be319b31"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "c7594c52f1c9422b16a3d1704782ee47"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "7e4dc5510c65bb0c50eeebf08084e50f"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "15e94d6f17d1852004822dc28e9646e0"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "a370a2a17b08d5063cf0bf6a679fb39a"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "21f04c6b6ce45860675d37b3c244107a"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "a0070154a13f2edabcb3c8a1ca11ea83"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "34973267172d02ad720f00f60eb7f64d"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "4d663a1f2d5fe0d2caf4579a080559c9"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "185ce6c80b9c3e05df2714daeaad61cf"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "f8e449fe629c75aee41e80b0a351417b"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "0723edce2c2a36737d6cd1aabd78b544"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "be04799b43ffbff3b1ae7a53f761f42e"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "78c243622e011f013846da5c460ad927"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "ff0e1dc17a7808e27457e49c468ce0fe"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "69fe78f1a06b8a491e988058298e4b73"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "76f90e5639ff0e4fd8e2c4600f6dc80c"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "89a0094e0e00bcf7f0cd127d3319485d"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "66d2dc1ab19d516640f6fdd924b77dc6"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "b8ae47b0d511e3bcb4e7dad820828534"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "156b8e50a34d9fb3aecd2521b94872f1"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "f0a74292ad602a6a607d7b412cecc8a7"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "796d42cb4efc1cca05529de19ad319ad"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "70df95c87174a417e992ba92808ce977"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "0215500f034ec300b9ad6ad38da8355c"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "d0d07c05ae410db68947a1bf3e73863d"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "537678504e99e6991eb730197843063d"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "b0f0166405058faebfb8cae20715920a"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "354f653417f1722188456c56d10ed26b"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "6d0c6b5e11309c2e46761aa89f70e7ee"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "8dd71db88b4d444c007cc6bc4024499b"
  },
  {
    "url": "404.html",
    "revision": "7e242b377494fa6dedeaf4d9628faca8"
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
    "url": "assets/img/configuration.f0876cf4.png",
    "revision": "f0876cf4c65cdefaed5dee6b4ccbcbbf"
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
    "url": "assets/img/createImport.8a18e6f7.png",
    "revision": "8a18e6f712cebe01f4966ba2cea89567"
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
    "url": "assets/img/frontendOutput.56b442a7.png",
    "revision": "56b442a76c3d3e1e3e01a7cfe8e78ea4"
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
    "url": "assets/img/imageGeneration.5905ae68.png",
    "revision": "5905ae68a5f7a5a88c71e821e86b8174"
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
    "url": "assets/img/review.91414169.png",
    "revision": "91414169bfcb300e4a48ab09ab60c09d"
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
    "url": "assets/img/searchField.08f9e264.png",
    "revision": "08f9e264d107ffa9dddc46966f30df97"
  },
  {
    "url": "assets/img/searchGrid.b19ac356.png",
    "revision": "b19ac3562dd281c21f93eab0ee009d44"
  },
  {
    "url": "assets/img/searchSynonym.3844db4a.png",
    "revision": "3844db4a8f0c024759d2b7b6b5fb504d"
  },
  {
    "url": "assets/img/searchTerm.2fe098f0.png",
    "revision": "2fe098f07e4d97cab41b67d57d43433a"
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
    "url": "assets/img/urlOutput.6cb28e2f.png",
    "revision": "6cb28e2f7566c59b496179190237ff01"
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
    "url": "assets/js/1.7f4b33e7.js",
    "revision": "02ba6448d0d0c98873869ac86d394f6a"
  },
  {
    "url": "assets/js/10.0f9f789c.js",
    "revision": "78f2f78326274bd8fb00fa3d01e4d21f"
  },
  {
    "url": "assets/js/100.346fa859.js",
    "revision": "f4649428242e2583fd1fda7e6d55b110"
  },
  {
    "url": "assets/js/101.57c84719.js",
    "revision": "4437f115fd2d77d5b6b33caa14d6a8c4"
  },
  {
    "url": "assets/js/102.1a1cc90d.js",
    "revision": "f384ce7f6ef4556c704ddee82e29d7d0"
  },
  {
    "url": "assets/js/103.49910037.js",
    "revision": "3c060283c4d71383c30981707ae80357"
  },
  {
    "url": "assets/js/104.82040fdc.js",
    "revision": "09bbf4d04c4473d7a643f5c571da36de"
  },
  {
    "url": "assets/js/105.8f9f5f2a.js",
    "revision": "f1d9040b9662d36ffebe0bdeeafa172b"
  },
  {
    "url": "assets/js/106.62596b95.js",
    "revision": "8ce560abf91f0140443899fe7d3750d0"
  },
  {
    "url": "assets/js/107.87556e7c.js",
    "revision": "be96ee8da0325d5fa3a4ebee084f8659"
  },
  {
    "url": "assets/js/108.4272cdfb.js",
    "revision": "0227756ec7e0a540a0bc11f9b3e4c10b"
  },
  {
    "url": "assets/js/109.f803fe9b.js",
    "revision": "acf4d8ff8cc21f81913bdf036264ab82"
  },
  {
    "url": "assets/js/11.279f32a8.js",
    "revision": "b209884bcc387fd1a3d80ab0d4fc8361"
  },
  {
    "url": "assets/js/110.126601f2.js",
    "revision": "47fc8a9c07ff9b04a4f50b920ab1b9bb"
  },
  {
    "url": "assets/js/111.62c4895f.js",
    "revision": "9cbf8a10481702980ac1c3ee5b680ef0"
  },
  {
    "url": "assets/js/12.15dbdc8e.js",
    "revision": "18729a4d897b8d991a4a8e1e27a89e3c"
  },
  {
    "url": "assets/js/13.f6d27f58.js",
    "revision": "6c51c64bfc1df87e65c2519e222c7b69"
  },
  {
    "url": "assets/js/14.b94a55eb.js",
    "revision": "b419dce26fd2e4e5c55c20f4975070a0"
  },
  {
    "url": "assets/js/15.2041950f.js",
    "revision": "6540d4ed5c5ba7530111d28caa3d2b04"
  },
  {
    "url": "assets/js/16.a1fb5f9c.js",
    "revision": "ffbd4eb6af697b4bdaecd49098295b22"
  },
  {
    "url": "assets/js/17.b3b8e4a4.js",
    "revision": "30a8c7998691d93011a0e23553d0921c"
  },
  {
    "url": "assets/js/18.0e8fee38.js",
    "revision": "96e44bd99f5342be3d8515b31c53dc1a"
  },
  {
    "url": "assets/js/19.f4bd5f6f.js",
    "revision": "82d483cc0acd6f88b0c540323a191bd4"
  },
  {
    "url": "assets/js/2.902ec40a.js",
    "revision": "501d1dbfa7a845572128146b1518465e"
  },
  {
    "url": "assets/js/20.c6c5cf61.js",
    "revision": "c573624efe52c6ee7f9aa51572dc3c19"
  },
  {
    "url": "assets/js/21.698c2879.js",
    "revision": "0ae49353b57fb2d4933fd9e6fa6be91e"
  },
  {
    "url": "assets/js/22.8d36b853.js",
    "revision": "25d7e950a6a02922da84813add20e275"
  },
  {
    "url": "assets/js/23.1c07af95.js",
    "revision": "01104472bf6320241af718966a943337"
  },
  {
    "url": "assets/js/24.b6797b67.js",
    "revision": "c5a267dc4bc187f4746419d47d42787a"
  },
  {
    "url": "assets/js/25.db15726d.js",
    "revision": "e8cac1cc3574dad4d28511ecef3a3e00"
  },
  {
    "url": "assets/js/26.b588a3bd.js",
    "revision": "1e014264d56fb746a420228736798512"
  },
  {
    "url": "assets/js/27.36d05471.js",
    "revision": "ed98153fe6f5b487346df6eaa89a343e"
  },
  {
    "url": "assets/js/28.71b667c9.js",
    "revision": "0a906db36021d27da6a7f62eebf71226"
  },
  {
    "url": "assets/js/29.d083f17a.js",
    "revision": "a49b7e6188c80d5a6e06d7cb0619315e"
  },
  {
    "url": "assets/js/3.d51b4d6d.js",
    "revision": "b1cdf87a49c2ab347886013baa98717b"
  },
  {
    "url": "assets/js/30.b0454c5d.js",
    "revision": "4a4d6f015a220caf515189f421758d17"
  },
  {
    "url": "assets/js/31.8a265de3.js",
    "revision": "16b4cc5cb8f68a1cfaa1fb9221c3d3a6"
  },
  {
    "url": "assets/js/32.8a11963f.js",
    "revision": "28b647fa9ecd97f7df474b03096eceed"
  },
  {
    "url": "assets/js/33.f0afe343.js",
    "revision": "d2fee6e6eecbc75e6a30ce1126c55134"
  },
  {
    "url": "assets/js/34.5f25d54c.js",
    "revision": "cc4aa1cf40c43380b4e89aef6f80fa64"
  },
  {
    "url": "assets/js/35.e145bcb9.js",
    "revision": "4ef660692013f69ad79324a2e09da58c"
  },
  {
    "url": "assets/js/36.51b2195b.js",
    "revision": "e39969b7b144c1f0bb9340351dd9f1eb"
  },
  {
    "url": "assets/js/37.01b1c181.js",
    "revision": "1852ef79ec27a55065d226e619fa5b7e"
  },
  {
    "url": "assets/js/38.3d1817ab.js",
    "revision": "c42bdf41c0db86880baca8d8ee87a492"
  },
  {
    "url": "assets/js/39.69604901.js",
    "revision": "2cf18ea30d08bf04ae5e4cad86326935"
  },
  {
    "url": "assets/js/4.17e3aa4c.js",
    "revision": "026c4982afe48991a47cbdc7aca85f46"
  },
  {
    "url": "assets/js/40.3417cac8.js",
    "revision": "1e69e3386987ed4406fc9c28d2542522"
  },
  {
    "url": "assets/js/41.c957f351.js",
    "revision": "6831d6e8ed526b84d1a304814970a3d2"
  },
  {
    "url": "assets/js/42.d855beb2.js",
    "revision": "12c03222dca2d47d4c86185403f34ff2"
  },
  {
    "url": "assets/js/43.757c252e.js",
    "revision": "ababadd8bd26516a44b4bfd9727108e8"
  },
  {
    "url": "assets/js/44.c4a61cfd.js",
    "revision": "8254dc8bfa94e9069a27ded860152f10"
  },
  {
    "url": "assets/js/45.30e22e0d.js",
    "revision": "7450c640de723d71a0b3537158f1efe1"
  },
  {
    "url": "assets/js/46.3811f8f1.js",
    "revision": "ecd5ef7f99a779b3878ca39d48f24798"
  },
  {
    "url": "assets/js/47.fe9b5d0e.js",
    "revision": "705abc5ffe84732dfb362c13f198cf1b"
  },
  {
    "url": "assets/js/48.95d6e963.js",
    "revision": "1b483916210416f10787068b9f6c71c0"
  },
  {
    "url": "assets/js/49.4b5b8e86.js",
    "revision": "02e74969236d7b60e0d7e4129e9fca68"
  },
  {
    "url": "assets/js/5.cd31ffb3.js",
    "revision": "6bbc50d53f8a0c85114a7a81fe5795c2"
  },
  {
    "url": "assets/js/50.1c47c246.js",
    "revision": "934e68d505f3de09d6478d084de39f42"
  },
  {
    "url": "assets/js/51.2f398769.js",
    "revision": "793e29c28f415b25637e50b1777f847c"
  },
  {
    "url": "assets/js/52.63d62b74.js",
    "revision": "ee96e8b8cb30615cc77d7660dc451713"
  },
  {
    "url": "assets/js/53.657b0b40.js",
    "revision": "167039d9ffbe03d588bba03b19173e79"
  },
  {
    "url": "assets/js/54.fa88833d.js",
    "revision": "d02cde452a7fa0b1c9be29c18b634e2a"
  },
  {
    "url": "assets/js/55.1bd8241b.js",
    "revision": "8ebb49d488aa5a1eb1c25600d54861b5"
  },
  {
    "url": "assets/js/56.81a51b4f.js",
    "revision": "96e6c7a0222ba3b14a2f0f957e61de06"
  },
  {
    "url": "assets/js/57.999552ec.js",
    "revision": "ccbea924b0394acb816e0d055c14c44e"
  },
  {
    "url": "assets/js/58.f54f2d07.js",
    "revision": "b833728a0cd89d802bb97ace1d6971eb"
  },
  {
    "url": "assets/js/59.1895d4ac.js",
    "revision": "b475594a4c96b5ee270d7de7b6d41411"
  },
  {
    "url": "assets/js/60.99e4934e.js",
    "revision": "e362f8d4553bf6b2e1dd9a761553427a"
  },
  {
    "url": "assets/js/61.c7e7518b.js",
    "revision": "1f2210232709895d371fcb535ea94c18"
  },
  {
    "url": "assets/js/62.54203796.js",
    "revision": "7060a533951ff35f263b21ab162f6cba"
  },
  {
    "url": "assets/js/63.83a7a830.js",
    "revision": "cbb977951839f02ac0bf0da71d3f386d"
  },
  {
    "url": "assets/js/64.ca3a6da1.js",
    "revision": "b3a7ad63a2c2cfadfceb3e72a70e5a2a"
  },
  {
    "url": "assets/js/65.4d553c47.js",
    "revision": "637cf398eaae8054a8f22fa7141fa428"
  },
  {
    "url": "assets/js/66.9e46afe1.js",
    "revision": "1292bc5ed28055f9e262acb9a0fb8e5e"
  },
  {
    "url": "assets/js/67.d71c21eb.js",
    "revision": "bec64f6a0fb3900341039475888614a5"
  },
  {
    "url": "assets/js/68.6f930467.js",
    "revision": "8d931cb4aacaab55a93fbc9ce3c169ff"
  },
  {
    "url": "assets/js/69.a28c4495.js",
    "revision": "fa77f8142f16e4712dc04ec072fedc27"
  },
  {
    "url": "assets/js/70.4a88cd51.js",
    "revision": "169366b7dd7b08c6b46ec9a6d51d98ff"
  },
  {
    "url": "assets/js/71.41401aa2.js",
    "revision": "e314227d63dc6e0df5458d8675e9c3ef"
  },
  {
    "url": "assets/js/72.f27e4f12.js",
    "revision": "9cecd068fef75a2ea4203c7dd14e5dfd"
  },
  {
    "url": "assets/js/73.32c07743.js",
    "revision": "01af2b62fbfdc62328ee92c201ba5807"
  },
  {
    "url": "assets/js/74.7cd4a64f.js",
    "revision": "1007908c383ac31233d6bdc3fb89e55e"
  },
  {
    "url": "assets/js/75.09b6da82.js",
    "revision": "0259d62bf23b49fe434401722303b3f4"
  },
  {
    "url": "assets/js/76.a9cba003.js",
    "revision": "2ac9d557fc9e16eda338256e06b3f81a"
  },
  {
    "url": "assets/js/77.31c74ecd.js",
    "revision": "9d68654d67a3af782de45860f12da480"
  },
  {
    "url": "assets/js/78.7e3f974d.js",
    "revision": "5f4578f7fcb8478e595d36f09ad89817"
  },
  {
    "url": "assets/js/79.9ba67146.js",
    "revision": "9839a03dd44d9cc82aaaaa86daece1ec"
  },
  {
    "url": "assets/js/8.fce8cc1d.js",
    "revision": "82a33b3d007487f8895d129056f1ba9c"
  },
  {
    "url": "assets/js/80.777eeb0f.js",
    "revision": "1084786c2c44b3a86b77f91e61562950"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.02d4e396.js",
    "revision": "ffcb86b320c99a46c6f0f7b6ef8d6710"
  },
  {
    "url": "assets/js/83.4d033484.js",
    "revision": "6af0e27d3a3934c2772066ef7682299a"
  },
  {
    "url": "assets/js/84.a200bf04.js",
    "revision": "69fce7dfec83d0d32ab76363125ac6a2"
  },
  {
    "url": "assets/js/85.96b7ed2d.js",
    "revision": "3fcded832526b00fd0b5348802b0bfc3"
  },
  {
    "url": "assets/js/86.5582fd96.js",
    "revision": "98bcad19b83ce671f141a7e4e9028d95"
  },
  {
    "url": "assets/js/87.c2d7d5fc.js",
    "revision": "9479ac6f671a47c54d2aaec77fec12b8"
  },
  {
    "url": "assets/js/88.39967742.js",
    "revision": "d582ba3c1c5d084cffde86cd28aa1c2f"
  },
  {
    "url": "assets/js/89.0c741685.js",
    "revision": "b3206d71fdc032099b1fa5093013256d"
  },
  {
    "url": "assets/js/9.1f2360c2.js",
    "revision": "2f631390ead189376eae41e9e62820fa"
  },
  {
    "url": "assets/js/90.769a83b4.js",
    "revision": "a2d9246efaa8adede935326ad708b4df"
  },
  {
    "url": "assets/js/91.32f878b2.js",
    "revision": "145e9efdac23e4d00ea663d5b7f6e9ab"
  },
  {
    "url": "assets/js/92.019c01ef.js",
    "revision": "96165415555708f394445d71b35378b3"
  },
  {
    "url": "assets/js/93.154b277c.js",
    "revision": "8aa1e5d2e200641d0efae1e0c3111056"
  },
  {
    "url": "assets/js/94.cc72b3c7.js",
    "revision": "0a2b9adc824120495880876b783a67de"
  },
  {
    "url": "assets/js/95.edc30dc7.js",
    "revision": "9afb3b9fa198543393df8f90db92e466"
  },
  {
    "url": "assets/js/96.f13168c4.js",
    "revision": "950cfa380bd5960949b1ec545af3043f"
  },
  {
    "url": "assets/js/97.84905bf2.js",
    "revision": "306b5ec483a18b3e7c2b4dcbce6780b7"
  },
  {
    "url": "assets/js/98.07a093af.js",
    "revision": "ba9834027b89ebfbf792bc082e9b76a3"
  },
  {
    "url": "assets/js/99.6860fce0.js",
    "revision": "f858aeed59ef137f637f4611e0c3ab6f"
  },
  {
    "url": "assets/js/app.33feee01.js",
    "revision": "40a61101aa85a5f4ec8c3cc31f19ae93"
  },
  {
    "url": "assets/js/vendors~docsearch.adfd890e.js",
    "revision": "a99c9606e6d52707e47ce1d69428ce7f"
  },
  {
    "url": "index.html",
    "revision": "c12249202c0fdd058a1ec46482051f36"
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
