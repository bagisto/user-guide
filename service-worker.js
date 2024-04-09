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
    "revision": "76912f9416d62dd104e15c3832f62898"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "fbea7b019a15b4d659f0bbcf29ab58ad"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "3602704c7df2b3d4296424e0f724e2e9"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "9a00599eb9d93750dd5d27e3d7ebaf69"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "00c1007f4e09d17c3050107ab13d1c68"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "671f7d2850a81716439dfad0df8ef9c4"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "c9c3eaec94296f19c466b9f5b8f467fe"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "ab7d8bb82c98a45e32de8a3550171599"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "aa4825ab8dee7330409353f4ecfb946c"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "4f38de3cb8792221bc103e47eafb7852"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "23d3370d4a23032cc32a81f224a4b9e6"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "5c41de8a480e1e12cf0c6dffda521e26"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "ad8b508e2cde9c15f887a3c82fc3d124"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "ec38055da2735ed69c30039b3b3c4df6"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "bd25d488e49354bdc8a13d47a5aa9172"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "3b757cfc64f2c606a6b0710159f8c58f"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "843f0ca6dd04cedcf956c95ae03f977e"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "e6b58f56c19cf568ded3fe921407a8dd"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "624a5e5e7795d675886d20e6b49e4160"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "d1340504dadea71a9f48fdc0961a9614"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "8cf63d07b964bd13c51d980fb2212be3"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "60d04873c96f13f52e6f95358f80a90e"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "23c6a593cb88edb1c6213c9a156e115a"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "7cd604db43bffc139bae46354e6307b8"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "a81f9a0bbd6458ee35f60dda8cf8de93"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "fe1d501f36974c05889f9719f95f21fe"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "0422a8f21fd24173e087c3ce8e46e947"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "97243f50b7c1b96a74f65c0ed2120c7b"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "5f620191e90d8443136538ac2b2a4386"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "e179334e78a2ea13f4a58f68371666ef"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "3d168c7e20ee4d127176f43c786bfddc"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "5f8169af25245f7f5c5b0ab910296f7e"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "6bbcfe1f8cfd29bddb8a078386f65600"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "f84b21dd9c6ade8e99b998337928c8a7"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "706bb36ba235fab684b46c799c867340"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "3e0d1d04128c63cc117b9daf4e5e2917"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "942d694669dc19b05cd8d69b366d77f3"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "d5a2b859e2d2d0d7ae71a4f049e641c6"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "012be43295a4eae17456945e05600bbd"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "0518040815d9aed5c9799999947f1207"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "f6c43a92c10c510dc9b63c693e8ab89a"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "d581a5a419e895cb3afee302a0731670"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "0ed3ee77d460dd22263a0fb5ab4f2b10"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "1042a9f66158d9999c237ecd47db8930"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "0c394111ee950c517c0b93093b16e6b2"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "f9eaa1eef604e29fcb093853d6174639"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "2fd269749966e640e92cda4029a8bb1d"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "b803e319d0c137f3e580518a222c032e"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "0064d5bce7d65ae4e8003fe8848384e2"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "bf43c0cf9b9c5a7487d058ddf61eb2d3"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "f305500ef0807308b1ae14a00d986805"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "4ae470b8b76223b2ad2c9ece294c0ff5"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "e94bed38f29b21744eb6e7dc199ae3af"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "44fa1ed199281a8185fdb6495555b8a7"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "39a4fa1aeffac8e3125c61077b611b94"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "2cec72079078241d15796e123e352a6d"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "7405f30245478b73ca03ffb0a31ef57c"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "8319f5898de657986e54d672abc7bca7"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "98c91ac46301110fffd02cb47cb8d3ed"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "57d8b1e1cc1f03c4a29c9893eb0e9366"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "7374f6183175683dd7d8cf92ff778eeb"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "c703675e9261690620d9797653d648b6"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "48cd9f29d409acbec5b56aeddf7f8af0"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "11e0f0b746a6bcb6adddd0b728d3ee85"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "4c98fbc04b4337d96d7406f83933e84f"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "78a38ec37a0fe8db34e371898eab2be3"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "04dd04ccebf19644c7b7895d0a55fc86"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "e566bd2d1bbc8fcb7fe787d486acedc5"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "9a6f2d99af534648034f27c0208ebf3a"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "6e689dbacb370919396f769ed78a69ae"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "a68f5b5ab9bcf8eb5280f73765e2f4d3"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "a8e78604d72c8d9793b8df2c4a7110dc"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "868fc3f6d888e5daf3da54b0ed3e9362"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "c677c13756309c13d504313240538d6e"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "8c6f9c6258d0b74bcf4c7a8334672290"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "bb9779ad95b8c3a40cbf28ea07528721"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "5d9966ffc6569656414cf33bfac71c19"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "100a2e423d02b9d0a4eec828ae7f90e3"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "45c0099d5161e25a295dee555a6137d5"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "090bc575795d4ed9be2e09e19d035214"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "2982b13eaf26da60f66ad1a1de03d273"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "d0974c62e5a529d39fe706119819e919"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "05bb39781eb3170bd03c0d0545d413e0"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "70a4c863dfad819dd8cce0f6867d9984"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "fd501c3dc796844ae34aa08987efaad6"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "b55c30f0384e76099c510db9037f16b5"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "e06339639a4d912631cbcb4fa21cb4a5"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "f43de54f27b27569d00a6b6fcad58602"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "1eb6d871a18d6262259c4310fd3c44cf"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "d33b8c06d00fe6107a02640e5231be65"
  },
  {
    "url": "404.html",
    "revision": "447ed3845b785a400101749931a5ef8c"
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
    "url": "assets/js/103.d44ccc11.js",
    "revision": "072a1b7cfabd4581a80f680a77c0eb38"
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
    "url": "assets/js/106.24c50f0e.js",
    "revision": "7986e288e61b68ba41e646087cd7c4af"
  },
  {
    "url": "assets/js/107.9bfb597b.js",
    "revision": "552cda90782e21b765af7fd575731122"
  },
  {
    "url": "assets/js/108.148bff3a.js",
    "revision": "e983c013867f5e0e1d814ee0e2c09557"
  },
  {
    "url": "assets/js/109.8f9c58b9.js",
    "revision": "58a78543f08d8207c7f403a53a821675"
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
    "url": "assets/js/12.33020d96.js",
    "revision": "635a9a3ad69f3ad659edb970fbe9e8a1"
  },
  {
    "url": "assets/js/13.de1bf05c.js",
    "revision": "9e1350fb4bb567b348da0665c4f58704"
  },
  {
    "url": "assets/js/14.0fed4515.js",
    "revision": "97bf039699a2db911e58857ae2c6c708"
  },
  {
    "url": "assets/js/15.a2a59162.js",
    "revision": "058cf50cc7dae6920bda475c953e5104"
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
    "url": "assets/js/18.c2a363e1.js",
    "revision": "f986a1a631c3e0d5e9d0b0668f085b76"
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
    "url": "assets/js/21.6c7f23f2.js",
    "revision": "c1fd93fe95993914cd03b12719f94efd"
  },
  {
    "url": "assets/js/22.54acc961.js",
    "revision": "d8f1ea6583d3e312815ba801a78b827b"
  },
  {
    "url": "assets/js/23.cd01f37c.js",
    "revision": "a460514d7b8829b8c70fa8d933138bfb"
  },
  {
    "url": "assets/js/24.bfea9a07.js",
    "revision": "d08624ce96bff9895c05f0c7dfc87082"
  },
  {
    "url": "assets/js/25.b6a0eeab.js",
    "revision": "da97e540db117170063f5631c3b7ecf9"
  },
  {
    "url": "assets/js/26.0c442ba3.js",
    "revision": "6416fea49ebc93ad669658edfa073b4a"
  },
  {
    "url": "assets/js/27.41e9260e.js",
    "revision": "2a6fea2c994d9ac2946af2d2bae06ad3"
  },
  {
    "url": "assets/js/28.71d23dc5.js",
    "revision": "251ed4681dbdd921e851b16b38055cb8"
  },
  {
    "url": "assets/js/29.35a5acd9.js",
    "revision": "2f4f7f3d546c1e915d9014549faf79f7"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.362dd64c.js",
    "revision": "78023d0c272054b94f675d0171f0ef78"
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
    "url": "assets/js/34.39ee23e1.js",
    "revision": "452b6c1c03cfe2a0bd24bc2d62dbe7fc"
  },
  {
    "url": "assets/js/35.5b1e882c.js",
    "revision": "2466ae488030532857b41c5d677edc14"
  },
  {
    "url": "assets/js/36.532854a7.js",
    "revision": "b56a2bdd7145e3248fdbb2c3b8c3255b"
  },
  {
    "url": "assets/js/37.6c8f22d7.js",
    "revision": "c5c9b52abc6452b688e50f9c1353fc22"
  },
  {
    "url": "assets/js/38.ea8cc85b.js",
    "revision": "89d39f6a85705f1987c01d0b05cbb3c0"
  },
  {
    "url": "assets/js/39.885a4bfd.js",
    "revision": "8b946ee1e300a14f7e467d2c67e90312"
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
    "url": "assets/js/42.023b0959.js",
    "revision": "aceedcbdd346c668d2831bf537af775d"
  },
  {
    "url": "assets/js/43.1bce0864.js",
    "revision": "90a99c92e152ad32712532430842191c"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.95eba353.js",
    "revision": "5a8fb54f4866e0935a2418175927288f"
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
    "url": "assets/js/48.c6137740.js",
    "revision": "8dd31d1a293f23ac9eba10da877d483f"
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
    "url": "assets/js/51.939681e6.js",
    "revision": "38e595058e1144f813974afc533ae8cb"
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
    "url": "assets/js/59.fdeb5731.js",
    "revision": "7d2e9ec4ec30520b695bfc3e63ddd6de"
  },
  {
    "url": "assets/js/60.3d3ffc2d.js",
    "revision": "9c5a0c6561b11f839d12aa5d1d3bb56a"
  },
  {
    "url": "assets/js/61.34835e23.js",
    "revision": "c2e86c4262817a0306b3eecfc9fcf640"
  },
  {
    "url": "assets/js/62.e128bc30.js",
    "revision": "344570250f78d28f3e0306539b2836c9"
  },
  {
    "url": "assets/js/63.0f2f38d8.js",
    "revision": "cf0486e447790a1f5a479384aac8c533"
  },
  {
    "url": "assets/js/64.b7eeb542.js",
    "revision": "0fc814fa4ebd16b3cf35e49856d78806"
  },
  {
    "url": "assets/js/65.79a1bfc3.js",
    "revision": "950938bec831ccabcd00c3b4cb327945"
  },
  {
    "url": "assets/js/66.1e9cb461.js",
    "revision": "b5bb22c9eb7686cd46c4e6806bb63ec1"
  },
  {
    "url": "assets/js/67.f5608952.js",
    "revision": "c76c25aefe2c480d82d851125311adc6"
  },
  {
    "url": "assets/js/68.2631eb00.js",
    "revision": "ce5f510df5b10e15482717eb6ddb7000"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.6ea7a04f.js",
    "revision": "8a6442f19453aea9997fed35a3efe3f3"
  },
  {
    "url": "assets/js/71.b6bf91c2.js",
    "revision": "af988f1caa1e62c2f228670c8ed58c07"
  },
  {
    "url": "assets/js/72.319d91ee.js",
    "revision": "88369cfa898f482bd8ddf6998d76afba"
  },
  {
    "url": "assets/js/73.da5946be.js",
    "revision": "88bb489f6bdb80d5529c71bc92a96764"
  },
  {
    "url": "assets/js/74.b576d39f.js",
    "revision": "fa6c9aca3da9d0af70c833a9d94bcd33"
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
    "url": "assets/js/77.077d9341.js",
    "revision": "5f60c798165eab61b06a2fbdbdf1a6fc"
  },
  {
    "url": "assets/js/78.fe1b99cf.js",
    "revision": "a15be257eff08f4ab0a10e6a47054376"
  },
  {
    "url": "assets/js/79.9b29fd2d.js",
    "revision": "ad20b2712c677b82a7bd8f6e0381571a"
  },
  {
    "url": "assets/js/8.9e96ee9f.js",
    "revision": "6e74af7d113fd24ba2dfaa341b168109"
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
    "url": "assets/js/83.031424d1.js",
    "revision": "b14cac140d89d4d9abae1a24fe10b703"
  },
  {
    "url": "assets/js/84.4eec98d4.js",
    "revision": "a6c011e529c88cae6c4835507550ce88"
  },
  {
    "url": "assets/js/85.26230bc4.js",
    "revision": "dc9b11dd5411818ef053afbb892e5547"
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
    "url": "assets/js/90.5ac5197a.js",
    "revision": "9caf03f42a01364ca8652f5011989b45"
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
    "url": "assets/js/94.8a7be60c.js",
    "revision": "f0a721e610f87814f93eb8783b68de46"
  },
  {
    "url": "assets/js/95.e6aee8a1.js",
    "revision": "655e9c9c73620f5d7792e29f60370fdf"
  },
  {
    "url": "assets/js/96.91b2c534.js",
    "revision": "b04475628e56eddf46cd1f64b0e801a6"
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
    "url": "assets/js/99.f697b1d7.js",
    "revision": "e42a596d17b087b216e0c60995bf5acd"
  },
  {
    "url": "assets/js/app.c17d5832.js",
    "revision": "638b2f000463c85720dcd502dba8e647"
  },
  {
    "url": "assets/js/vendors~docsearch.63b78b64.js",
    "revision": "0b840dbf3ce05b3243b59584c3ef91c8"
  },
  {
    "url": "index.html",
    "revision": "9b2dc08436837316b17e43b985e6a460"
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
