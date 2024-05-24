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
    "revision": "c413f5ddddb8f4d5ca2fe9f6cf1f0e55"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "dbc0d4d01042b85352890f24c3cd4259"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "0baa87d7498392a415817be526518d94"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "c1e38ecdbb61994f34b89b7b48ae35be"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "b07289847c7a57a711528c414434bf55"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "808c8c2f9a6b7e739385acdecd80faa1"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "3e51a037bf888d2c2fa4fa9bc0f6e821"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "2cca19f3fd1ed391266c8e38d96ade55"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "6ec0d28fd0c8dae43418781119026948"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "60a3bf9826cd9f2feae48c1380489dae"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "9319e67a09748c34c5099dea96548d44"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "3d81d1e7c06b314a92e65a2cb061ad40"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "437f5efac4d0f30c9f55333bf3d91066"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "fb5a148674385ab6ba74f16be9c1f832"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "0b7342b2c2c6eba7c6151e80f7f3b88f"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "2a6b674cdff1013507196c5e328036f4"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "0677a8d63ffb15ad9995af49e8cf6c91"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "a1ebffa7edb930776b395d07cbf35be6"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "9c2fc23aaba81804dd239eb3d7053bda"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "13e6f07e1560615c2b8fc88856c1b409"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "cb575d0cb1008dd11dcbe16e819991b9"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "db60f5da1e824368524ff4a25affe7a1"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "898352f77996b27b8ce9644b6937c88b"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "823a21f7a8cbfbb012acd80fd5cc3feb"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "c819daed7aa04ced16d38d0c0872ef95"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "07e88199f782d3c142bfb3f3196e57db"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "977f5cb117f09ae550105de6c92db61d"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "64e2ff6e02dc9cd4fe613165484d2c81"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "671ca4d57e7b22f28d90c407c4528dd2"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "9ae7d99a49abe1bb5588b7dcd3a1a3fb"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "6a90677978b7d3486234516b5e626c27"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "7ad20e793da5605ce011109d2d9ac927"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "0a998e008e7411fb8724b44a75c5da2d"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "26d469354b54d600c932322cd28bf101"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "baa50745f0b69739b252b59e55698e4c"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "d13624d3f82e5023cf02f4e4ed139f20"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "9b89200abe94e637ea795235ca7cf96f"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "4ca481f5245926efd15a836cd3ebc1fe"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "4b585f076b5463e3785f8da93b041ce3"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "84de35140a7e7fe6f26cea9e89487df2"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "0c7d15536bb582fd7a236aeeb62a880c"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "8bd741915147d53f05fb71dd4e9ed184"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "ec1679ee29307a589663134f8c159042"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "9f11a1f2d12aa69ba3a0aeffa0b4abc4"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "ac8de19a9ccd031b12b3bab17340e1f2"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "1a4506e7c6a2f94db80eaa8ef74a2d69"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "146eda08273c2a4c1490de0c893b6027"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "60027e8d9197c083d69c6d5fb99f0c99"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "e2af088214c676a276a6adcc0c2084ba"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "c4e69c484431d1c86613226853521dd4"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "f2b64477b74d51c937e028582b60bb97"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "770a6235ed3ed22ccd680b8829538985"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "67033f6e07a6f8139b580d09d0100901"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "5ec62883fb25afac390819f924e7c413"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "56771f7d4d9c22ef21c065e10d2e84ce"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "3ace18b12b757d6319cab833e4afa8f5"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "0d8e48c736ee2de3ade17e47eb45d269"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "37d81a2e8198b781d807cef969458579"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "a8f02e6d6dbd1d734b55946874d5ccfe"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "daded18eeda2a49db26a3683781a7366"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "530532c4a4a39743e6ed14176876e41b"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "ef47c1863eeb9da24a01c44c6bdeb659"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "0914f075439d2b320ab92dd5809cc09e"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "637d624b81be273fce2d6734c211a976"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "7f4a8244264815899b8f3dfccadf9142"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "f4009cbd2479617480a651a4ed3dac05"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "6e850d6faf66ea1576e905f4084b8f84"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "ceed48bb92b48e07c6e612a749c26878"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "cfe8babe79cc142c08e7d5f547251719"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "ae7a995bdad4cfad4d9a7a564e876680"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "bf8c93ef9e21f1e54d79319045d681f2"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "c4b6464a4f6944c594a045b9dbae4b8b"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "b4dd4de2d8bbbdf716d3dd6b7a393c12"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "9f0668bbc7cf06ec4b7501a16dafcc1b"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "43410081bc5a6ddc452a3b695f6f08ba"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "4fcafd7054aec134b27f073ed50dc6fb"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "a661a948a3bdbaf01e60ab3d46017cb7"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "04b35582bc49c435088fd163714e48ad"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "c3ddf19c55e62d792492314547ab94ca"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "01f888528fdeff7ab8b0dfaba3e21b6b"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "da50ebef62847a5c78bea98fa0b9fd59"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "6cd85a4151bb83f4a77908128e3ff567"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "679d59859acbcc558b4b4684b10485d2"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "b1ea639e2faff8c882adb081a2e02279"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "1a238c2e0430ded8ff8577101f7c44d4"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "0aac075eccd6ca97e10d4f819119d6b7"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "1e3aa796b99d4d96846e9d1be41522f8"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "ef970eb1cc3c15fab2b6ebff31fd480e"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "7cb9a61ede3fb137c1a87544d5e4952b"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "8f508e254a0cc0937524226638f76f60"
  },
  {
    "url": "404.html",
    "revision": "f7311e2e701162fa60072f9b16493a73"
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
    "url": "assets/js/1.7d5ce89d.js",
    "revision": "a61cb976b4dbbe7430d7d7699775850e"
  },
  {
    "url": "assets/js/10.39d63202.js",
    "revision": "b2e95e02c7c1ebb43007d746c0b14476"
  },
  {
    "url": "assets/js/100.adaf7e93.js",
    "revision": "dc9ea83b303527d7e6575b836b961e63"
  },
  {
    "url": "assets/js/101.802a282b.js",
    "revision": "2179c4fd9827f4c59aa74140e2d5c878"
  },
  {
    "url": "assets/js/102.bfa3d1c2.js",
    "revision": "02fc8417aee2dceccbb50ba27ae0c919"
  },
  {
    "url": "assets/js/103.51803b8f.js",
    "revision": "f2cc68ecd29dd5d3cc557f8862aea633"
  },
  {
    "url": "assets/js/104.78b42df5.js",
    "revision": "424e6d0a3bec4ca0f6a8d75d647f4ff8"
  },
  {
    "url": "assets/js/105.c7902998.js",
    "revision": "d14b14390fded86d029734f6fddd89e4"
  },
  {
    "url": "assets/js/106.aff6fde0.js",
    "revision": "65854613789a89d7bfbddebd9ae6f7e3"
  },
  {
    "url": "assets/js/107.900b8da2.js",
    "revision": "04f62e73bedb977f369250db7050d14c"
  },
  {
    "url": "assets/js/108.d4e7a89e.js",
    "revision": "62234dc63c1af8a6a049b29d6ea01452"
  },
  {
    "url": "assets/js/109.cdfdd4df.js",
    "revision": "0acfc0968ad1c932393f9eb76c5fbc70"
  },
  {
    "url": "assets/js/11.6c652d51.js",
    "revision": "815f54b105aa748ecad6a1b8964dadd8"
  },
  {
    "url": "assets/js/110.fc60578d.js",
    "revision": "340e2b61fd6ed37606f3eb9d4c4b8e3d"
  },
  {
    "url": "assets/js/111.583880a1.js",
    "revision": "30888512a6336a66917cf8241e4feb99"
  },
  {
    "url": "assets/js/12.f324eb70.js",
    "revision": "5555a392ac17fbff9163cb83b41b481f"
  },
  {
    "url": "assets/js/13.710614a4.js",
    "revision": "1743e979934d59630403e1c11a55990b"
  },
  {
    "url": "assets/js/14.d5df8e3e.js",
    "revision": "12fb56b4f97038ef8f8a2e374b5a6d91"
  },
  {
    "url": "assets/js/15.3c5f99b9.js",
    "revision": "fe4210389734354a72f703bdc8c1cc48"
  },
  {
    "url": "assets/js/16.91873e49.js",
    "revision": "cb70d9e7572993aab3ad9ada86735f5e"
  },
  {
    "url": "assets/js/17.26b6d3e1.js",
    "revision": "99fad20a7048d2d502a24ca56bec4f6c"
  },
  {
    "url": "assets/js/18.5af46787.js",
    "revision": "d4745e07e920d56588b4ce3fc8d2165a"
  },
  {
    "url": "assets/js/19.ed443b28.js",
    "revision": "38f9fe4d68b938756e7f03eaa91af08b"
  },
  {
    "url": "assets/js/2.87048936.js",
    "revision": "407e8236f9b211eae7173f6df93fa953"
  },
  {
    "url": "assets/js/20.4db0b1ee.js",
    "revision": "47d692685cdd1b24f36fa0c58f6f40c4"
  },
  {
    "url": "assets/js/21.c2e0fbba.js",
    "revision": "e53ccaf9b3d397a44e86e12055d6af52"
  },
  {
    "url": "assets/js/22.4e909708.js",
    "revision": "48e4990bd3c83bf13d299d69535267a2"
  },
  {
    "url": "assets/js/23.a7111789.js",
    "revision": "4339e02afeb2244d6e8d4022b31fc133"
  },
  {
    "url": "assets/js/24.f9a25f5b.js",
    "revision": "217bf294afdb63a6be6516db829f2e4a"
  },
  {
    "url": "assets/js/25.d50b4fef.js",
    "revision": "e161e8c6d4adaa4ae9deb81ea5b3dce3"
  },
  {
    "url": "assets/js/26.255867f0.js",
    "revision": "5b94532ec2ca410c3404fcc123346f94"
  },
  {
    "url": "assets/js/27.6f5c7e38.js",
    "revision": "3b6cf1bbcb87a806c9bac409118f3d72"
  },
  {
    "url": "assets/js/28.a628f6f1.js",
    "revision": "0264abf7e2d10dd332e5cea696eb3be2"
  },
  {
    "url": "assets/js/29.50fade8b.js",
    "revision": "9993b1de3220ba1f9933ee5e9e02a2b6"
  },
  {
    "url": "assets/js/3.e1b9989c.js",
    "revision": "5ec50fe0823304b7f22e60c65712fcfd"
  },
  {
    "url": "assets/js/30.22111682.js",
    "revision": "74767b0e01bf2dfc7a54f0e4a66e36ed"
  },
  {
    "url": "assets/js/31.1334375f.js",
    "revision": "f1fab1ef35f8f256a62e8d17c88b8225"
  },
  {
    "url": "assets/js/32.1b06655f.js",
    "revision": "e4f7426f4c6d67f01cef88cbcfdb322b"
  },
  {
    "url": "assets/js/33.a3c74969.js",
    "revision": "b480b984695fae370606c05d5d0d34f0"
  },
  {
    "url": "assets/js/34.a5540e96.js",
    "revision": "91a82db014765bea684d017626eaf31e"
  },
  {
    "url": "assets/js/35.a3f444aa.js",
    "revision": "1101ffc29c0213c50a625c945da4bbde"
  },
  {
    "url": "assets/js/36.23db2fc4.js",
    "revision": "862c528646b07a1c1d0b26cbdc203b6d"
  },
  {
    "url": "assets/js/37.0e677408.js",
    "revision": "e44f0523fb0a0cacc83069653fcc3576"
  },
  {
    "url": "assets/js/38.3dac6649.js",
    "revision": "439617b9b517269c205b644f17221abf"
  },
  {
    "url": "assets/js/39.8e96b7dc.js",
    "revision": "584509f8fb5830c04e54f49635dfebf4"
  },
  {
    "url": "assets/js/4.d1023ecd.js",
    "revision": "826c850ad6592ce10f57335d81965ac6"
  },
  {
    "url": "assets/js/40.e6e19696.js",
    "revision": "c55345649c3f4433924ada80908bad11"
  },
  {
    "url": "assets/js/41.e9970f9c.js",
    "revision": "46169183cc31505adea4166f24efb01c"
  },
  {
    "url": "assets/js/42.8048c2b5.js",
    "revision": "88cd2ff01f7859db8d33fb195f5b2add"
  },
  {
    "url": "assets/js/43.e8e79b87.js",
    "revision": "b0a3302b91c16419c8d4643d0ac00c0d"
  },
  {
    "url": "assets/js/44.e7bd852a.js",
    "revision": "e17882b8f6a89c1b322dff47c1aa3efe"
  },
  {
    "url": "assets/js/45.634253f1.js",
    "revision": "6423d7152f6a04882f5aae5d200a2065"
  },
  {
    "url": "assets/js/46.40b1260e.js",
    "revision": "c68fa30d5a453a4a4e256000ed8df2a7"
  },
  {
    "url": "assets/js/47.2f4ee5ae.js",
    "revision": "dd35a7350cca375be0c41e3a1bdf4df7"
  },
  {
    "url": "assets/js/48.05b3f6e2.js",
    "revision": "55f210a20925a0eef582475ef1028a5d"
  },
  {
    "url": "assets/js/49.0b218349.js",
    "revision": "74d2a0e8a0b0f883f3dba69b260f7b0c"
  },
  {
    "url": "assets/js/5.1968a9ea.js",
    "revision": "b6357aadf9a940eaa470c07d86bf4757"
  },
  {
    "url": "assets/js/50.c0e44e7c.js",
    "revision": "56425e727fd1998c28c2dfb08a7b49a5"
  },
  {
    "url": "assets/js/51.19b8efdc.js",
    "revision": "e60ef2bca0dc86b1c7b51cf6cd17693c"
  },
  {
    "url": "assets/js/52.de62ac8a.js",
    "revision": "0b1ce5d3537d984953bb6ba3dee17254"
  },
  {
    "url": "assets/js/53.be01838d.js",
    "revision": "241aae850a3823d6ea2716dabfa031bb"
  },
  {
    "url": "assets/js/54.1a732a92.js",
    "revision": "d2768064ea2fd415f73c64e310071ff7"
  },
  {
    "url": "assets/js/55.e0fca547.js",
    "revision": "e1dc4ec3d8d8386bcadd42ad46d68805"
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
    "url": "assets/js/58.a6d8e04a.js",
    "revision": "6c29b09d18136c7476a5486ad4511722"
  },
  {
    "url": "assets/js/59.3b0c5abb.js",
    "revision": "cb0cb41cd68c6b5a6d6599611b1ea417"
  },
  {
    "url": "assets/js/60.d265df84.js",
    "revision": "01abeb56752812a22f02869d27f6bb02"
  },
  {
    "url": "assets/js/61.4d6dea92.js",
    "revision": "ae92d251a0abb05f3e62ff4a3fc33ff7"
  },
  {
    "url": "assets/js/62.ab3ea1b1.js",
    "revision": "60f4bfe065c7e3972869bc37f27e2c3c"
  },
  {
    "url": "assets/js/63.93af2649.js",
    "revision": "aa60bc4ab66adc0ba0405aea006177ef"
  },
  {
    "url": "assets/js/64.bb9b35d6.js",
    "revision": "88aeccce9081880401395a8ece6b481a"
  },
  {
    "url": "assets/js/65.1e602cd8.js",
    "revision": "be6fe2fb309e30ba8a062eb9e5249872"
  },
  {
    "url": "assets/js/66.daa193fb.js",
    "revision": "88c20861006d8c45af49087b9067dfc2"
  },
  {
    "url": "assets/js/67.d7b5151b.js",
    "revision": "9fffdc3a4283fc50318f947974ca2d5e"
  },
  {
    "url": "assets/js/68.e2264d4b.js",
    "revision": "245930ef9e56116c5ded67c9d030d331"
  },
  {
    "url": "assets/js/69.a662bc17.js",
    "revision": "68ae0e9e909e45569fef19dfb6392338"
  },
  {
    "url": "assets/js/70.75f797a2.js",
    "revision": "718c4add5d0ab3ed9fb5bbb3039744af"
  },
  {
    "url": "assets/js/71.5083b17e.js",
    "revision": "e22d4d5a38d1d413b14239be9ab958e2"
  },
  {
    "url": "assets/js/72.6fe8c281.js",
    "revision": "ffd7d7a4d584f5be642d3cc47529ef4c"
  },
  {
    "url": "assets/js/73.3b3bb14d.js",
    "revision": "66d150cf6c3ea9291237d19a2560e233"
  },
  {
    "url": "assets/js/74.ec5245c2.js",
    "revision": "5f34c4291593994f6eb0b3f1bc39fdae"
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
    "url": "assets/js/77.80a50f97.js",
    "revision": "dd1910e8e051c55a5330c2e99ca33cb4"
  },
  {
    "url": "assets/js/78.3b84056a.js",
    "revision": "f08e13ade16e6ff1dbda5d586d9582f3"
  },
  {
    "url": "assets/js/79.d1627512.js",
    "revision": "9894125e3fb4b59e46fe452d8dd53381"
  },
  {
    "url": "assets/js/8.b6b27fec.js",
    "revision": "ee28f42b694e2b785efa90e55951028c"
  },
  {
    "url": "assets/js/80.874327ab.js",
    "revision": "bc098a8a48e4602eca87fb9a04d253a6"
  },
  {
    "url": "assets/js/81.194d1094.js",
    "revision": "fd742ba65f2f3e10454222fd60a87e73"
  },
  {
    "url": "assets/js/82.6531c3b9.js",
    "revision": "2b46e48bcf173e98f35d29a9bdbd904d"
  },
  {
    "url": "assets/js/83.e1728c3c.js",
    "revision": "aeadd970157a4327652024de35b3a1bf"
  },
  {
    "url": "assets/js/84.5c3ed53c.js",
    "revision": "415a9a5d33f2e7302dea2de624194fdb"
  },
  {
    "url": "assets/js/85.c82f5234.js",
    "revision": "2c0a0eec1db366929e04a01ee3633d9c"
  },
  {
    "url": "assets/js/86.bdf04796.js",
    "revision": "a0a11e5623431d12476a23d5915485f8"
  },
  {
    "url": "assets/js/87.a447befb.js",
    "revision": "acb7290d2c3db5d65db6327fa30da4d3"
  },
  {
    "url": "assets/js/88.3dcfc299.js",
    "revision": "f65fb853ef2d8742b84224f83b1f281b"
  },
  {
    "url": "assets/js/89.2184a9fc.js",
    "revision": "553d0b81fbf984b55eac7d01f5d29524"
  },
  {
    "url": "assets/js/9.808c261c.js",
    "revision": "c5eca1853c4e20d126c6bffb6d88c478"
  },
  {
    "url": "assets/js/90.0a3ff0b1.js",
    "revision": "fa8080366dbf7e7a64fd801ae865dca7"
  },
  {
    "url": "assets/js/91.968e0693.js",
    "revision": "fea5cd9c4f396cd545b4e42ad2ef4dc9"
  },
  {
    "url": "assets/js/92.48bfba78.js",
    "revision": "a7942edacb93a179c6fef9dac627c2be"
  },
  {
    "url": "assets/js/93.9bfd86a2.js",
    "revision": "3d582b551a7a51519ef9db17919355ec"
  },
  {
    "url": "assets/js/94.d8fc88cd.js",
    "revision": "f872dc0c80d46fdda8cf2f531aa1fb57"
  },
  {
    "url": "assets/js/95.b4e0be71.js",
    "revision": "7fc147a2c92ae95b02a8a7f990ca4e87"
  },
  {
    "url": "assets/js/96.dbca40a7.js",
    "revision": "8994f8baf9a8250584c60397d0b40c91"
  },
  {
    "url": "assets/js/97.7c2ee87d.js",
    "revision": "a633580b6e6873c9f310520bcd8bf338"
  },
  {
    "url": "assets/js/98.607cb103.js",
    "revision": "7659b2ae1376f750e1e2fda70388a240"
  },
  {
    "url": "assets/js/99.1fe6c7bf.js",
    "revision": "6c6613d5ef61f6a5d391c49d6d626f0d"
  },
  {
    "url": "assets/js/app.01f6ba84.js",
    "revision": "fd0d3208e425d75b47e4bb1349e19dc9"
  },
  {
    "url": "assets/js/vendors~docsearch.c6779702.js",
    "revision": "2bec7c80e707e398f20bbe7dc25da4e8"
  },
  {
    "url": "index.html",
    "revision": "00acb8a949d92324de6654fba23219f4"
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
