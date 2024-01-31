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
    "revision": "d0298691650ccb798edc00ce35c28651"
  },
  {
    "url": "2.x/attribute/attribute-input.html",
    "revision": "8228f0efaa86e26007c16e4213b14fe7"
  },
  {
    "url": "2.x/attribute/index.html",
    "revision": "7f5362b6279e6f38481f9a87b2642688"
  },
  {
    "url": "2.x/attribute/overview.html",
    "revision": "d1b2fcffe5dc024b627e3d3ef117235f"
  },
  {
    "url": "2.x/attribute/product-attribute.html",
    "revision": "e6a0072f8e6447db64feb9f8fe7fa72d"
  },
  {
    "url": "2.x/category/create-category.html",
    "revision": "c6e4133670ba7f50fe9f4ae3f8edff8a"
  },
  {
    "url": "2.x/category/index.html",
    "revision": "f35d9dd7a87ec6b64705dccd057ba359"
  },
  {
    "url": "2.x/category/overview.html",
    "revision": "45a9e4bc119ccc3cec9d0874d633ed3f"
  },
  {
    "url": "2.x/customer/create-customer.html",
    "revision": "270f7289043f2e3b70a7889eb3b7c5b5"
  },
  {
    "url": "2.x/customer/customer-groups.html",
    "revision": "2e5fd22a318d89fd5307a134193bef73"
  },
  {
    "url": "2.x/customer/customer-reviews.html",
    "revision": "29d6100341feeaabeaff1ee022b6bafb"
  },
  {
    "url": "2.x/customer/index.html",
    "revision": "9b39dddc1be2459b2b57e4ae9d8777a0"
  },
  {
    "url": "2.x/introduction/getting-started.html",
    "revision": "6337d01c512341a5539e9a4f9b125103"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "37309698ecc21756cf7d9e88df9daaa2"
  },
  {
    "url": "2.x/orders/create-invoice.html",
    "revision": "900543bd4263190e22a1f60a4bdde55b"
  },
  {
    "url": "2.x/orders/create-order.html",
    "revision": "cd8362204b64f91d60d87953b2402388"
  },
  {
    "url": "2.x/orders/create-shipment.html",
    "revision": "76c1f2e3f8dcbe48cf991f8c82322924"
  },
  {
    "url": "2.x/orders/index.html",
    "revision": "7744e79f94f512f7cf9893914ba664c6"
  },
  {
    "url": "2.x/orders/refunds.html",
    "revision": "377cc4c80adf2d9b26a5c295f8ad99cd"
  },
  {
    "url": "2.x/products/bundle.html",
    "revision": "4dd86b0c7f5f15b04380dc8cd27a35c9"
  },
  {
    "url": "2.x/products/configurable.html",
    "revision": "808b84b29ffdd8b4d4ada7e1ee6a99c5"
  },
  {
    "url": "2.x/products/downloadable.html",
    "revision": "c6be72e118258479f476c97d5e9cbe47"
  },
  {
    "url": "2.x/products/grouped.html",
    "revision": "abc57e90ab703f64e3d3e4161676c4dd"
  },
  {
    "url": "2.x/products/index.html",
    "revision": "ca14f7fbdfd87c5ea14c939955e57df5"
  },
  {
    "url": "2.x/products/simple.html",
    "revision": "e7ef91efeac20923cb0b1d8bb64f05db"
  },
  {
    "url": "2.x/products/virtual.html",
    "revision": "c4ca2c0e859f666b2ef44ae0229df7ab"
  },
  {
    "url": "404.html",
    "revision": "a3ad0f39268fd4754216c945283fe02f"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
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
    "url": "assets/img/cart.0d42b772.png",
    "revision": "0d42b772a15096e9edc7056fa2fe2d97"
  },
  {
    "url": "assets/img/cartSummary.ddb14953.png",
    "revision": "ddb14953d3dd65cf481f2c74cda92a64"
  },
  {
    "url": "assets/img/categoryGrid.30d2b5c1.png",
    "revision": "30d2b5c1f28ee421ad2949fbe956fbc4"
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
    "url": "assets/img/create.757552e8.png",
    "revision": "757552e8c1a3f7f3623eafd87da6e3db"
  },
  {
    "url": "assets/img/createAttribute.bf9dd39a.png",
    "revision": "bf9dd39ae6079ef5613992d6e4812d50"
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
    "url": "assets/img/createRefund.9e6235ca.png",
    "revision": "9e6235ca47b14d726e713d85e1d70f29"
  },
  {
    "url": "assets/img/createShipment.86e26b57.png",
    "revision": "86e26b570475164a81a2d552e1bb7771"
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
    "url": "assets/img/familyGrid.8370fbab.png",
    "revision": "8370fbabc01b668e7d0b83c858d9e089"
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
    "url": "assets/img/invoice.ebc27d19.png",
    "revision": "ebc27d19376023a7e68fec26b1178fd2"
  },
  {
    "url": "assets/img/invoiceSubmit.eca01d07.png",
    "revision": "eca01d07dc9450ab2ebab8ffe98786d0"
  },
  {
    "url": "assets/img/link.ef489c2e.png",
    "revision": "ef489c2ecd25145c1ea738c82eaf4edc"
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
    "url": "assets/img/newGroup.0ffae93a.png",
    "revision": "0ffae93ad5842d7e77209c73c2ee8f10"
  },
  {
    "url": "assets/img/options.001937e2.png",
    "revision": "001937e250d31e5f629729cfe7151e50"
  },
  {
    "url": "assets/img/orderGrid.eb13e619.png",
    "revision": "eb13e6194aa7593ab567c912654f3730"
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
    "url": "assets/img/output.4778ea36.png",
    "revision": "4778ea36ffc3c72e1c69e17d3b36d50f"
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
    "url": "assets/img/productPage.0913d8b4.png",
    "revision": "0913d8b48fc4906e17f430524af08086"
  },
  {
    "url": "assets/img/rating.3679908c.png",
    "revision": "3679908cff55dcc0c0fb4f7a99b500cd"
  },
  {
    "url": "assets/img/refund.ebbf5b8d.png",
    "revision": "ebbf5b8dc261dc088e4a45275a8b07d5"
  },
  {
    "url": "assets/img/refundGrid.24808700.png",
    "revision": "248087009de5c6776929e6bf6f9f97aa"
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
    "url": "assets/img/saveFamily.30a732be.png",
    "revision": "30a732be79f350059a629ce8c9fcc461"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/shipmentOutput.e3c87708.png",
    "revision": "e3c87708f3d4e9c9ad01c14a284c1870"
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
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
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
    "url": "assets/js/1.14e715c1.js",
    "revision": "98b2f4a36c0678d40c5019b2cfc8931c"
  },
  {
    "url": "assets/js/10.d9c7747a.js",
    "revision": "bc66a8d184f0f9c43eb37ed04cd36430"
  },
  {
    "url": "assets/js/11.4b4f829f.js",
    "revision": "0168e0055fbba1bf857fcf94cec3cbf0"
  },
  {
    "url": "assets/js/12.19f1b643.js",
    "revision": "bf34b75473dfd637dad339be55909f51"
  },
  {
    "url": "assets/js/13.fedee79f.js",
    "revision": "4795fda2f74c43b2254ca05156bc7590"
  },
  {
    "url": "assets/js/14.d45a16d3.js",
    "revision": "0c5643e37d015582c6e77d60802be5f6"
  },
  {
    "url": "assets/js/15.f31336be.js",
    "revision": "2abc56753373a7247a7a0cb3b2d5befd"
  },
  {
    "url": "assets/js/16.b1877b5a.js",
    "revision": "c798e22e23958dad1b9decaeac5dc305"
  },
  {
    "url": "assets/js/17.27b3f3cc.js",
    "revision": "6476a427455802cd89624d43cf4b8af8"
  },
  {
    "url": "assets/js/18.db6cc95d.js",
    "revision": "b28345738b72bb497202b9565a11e354"
  },
  {
    "url": "assets/js/19.16a21d69.js",
    "revision": "cfe64ff0b3366707109d7c263a58aec6"
  },
  {
    "url": "assets/js/2.51272c66.js",
    "revision": "da721dd1978a679bb742249613ccbb86"
  },
  {
    "url": "assets/js/20.5a88ed01.js",
    "revision": "7970506dc035178a5121cd34d7173f03"
  },
  {
    "url": "assets/js/21.6198f995.js",
    "revision": "cc1c1fd5f45d28861a5002621d26fcb5"
  },
  {
    "url": "assets/js/22.6065042a.js",
    "revision": "b4d4f2b8a7d8b1929756b27175b47788"
  },
  {
    "url": "assets/js/23.4718b105.js",
    "revision": "844605ec73320e97f43119dc514b8fdf"
  },
  {
    "url": "assets/js/24.4b62e319.js",
    "revision": "55e9cc512ede74ea545a65614cb6257b"
  },
  {
    "url": "assets/js/25.35dfffd3.js",
    "revision": "4209bff3b729f78e9eb7f2209a1ce03c"
  },
  {
    "url": "assets/js/26.1a3e0a90.js",
    "revision": "7e3fd5407bb479e09a2a2e477c1808ab"
  },
  {
    "url": "assets/js/27.781ba504.js",
    "revision": "e419ba7a1f056c7c2c42848329bef45b"
  },
  {
    "url": "assets/js/28.ce6df14d.js",
    "revision": "e902fe9e0ed00a7ecc48d5520fb1fd37"
  },
  {
    "url": "assets/js/29.65170836.js",
    "revision": "f2ec20d2240aa960680d5884ad2aa855"
  },
  {
    "url": "assets/js/3.e0788984.js",
    "revision": "bed5b5a8b22cdf742c69bd0be011b6aa"
  },
  {
    "url": "assets/js/30.363aacd1.js",
    "revision": "d814500729f815aa009bbcd8ef1fc1bf"
  },
  {
    "url": "assets/js/31.1bcfc97e.js",
    "revision": "840dddd9ec11de386826b0f40b2a9d88"
  },
  {
    "url": "assets/js/32.23f36a6c.js",
    "revision": "c4fb80a7cd7db31bc40e5a9dc959591c"
  },
  {
    "url": "assets/js/33.c4db4b12.js",
    "revision": "fac9729129eeb265711e0f3214910298"
  },
  {
    "url": "assets/js/34.b24f8f8e.js",
    "revision": "4e3c8cdc0a25be48077947ab4ac614ef"
  },
  {
    "url": "assets/js/35.968edfd3.js",
    "revision": "b264b3d338b405f7e66ed936b4a895fc"
  },
  {
    "url": "assets/js/36.f6c0f8be.js",
    "revision": "64286358d8ab0e4bb578c69b66afb2e2"
  },
  {
    "url": "assets/js/37.fec060a4.js",
    "revision": "fa93dc154f08dae84be02a98a761e037"
  },
  {
    "url": "assets/js/38.89baa200.js",
    "revision": "a5b83de82f8dee9d4691032aaa423854"
  },
  {
    "url": "assets/js/39.0387ccba.js",
    "revision": "2fe78d9ceea4d4aa1b973ab95a265325"
  },
  {
    "url": "assets/js/4.650f6d7a.js",
    "revision": "5ef68c6c32b02e6aaeec64ef4d551a30"
  },
  {
    "url": "assets/js/40.1bfab715.js",
    "revision": "2f4848608d071420ff341f971a140d13"
  },
  {
    "url": "assets/js/41.bc18e75b.js",
    "revision": "d98b7e858c8f839143983c6b95b7779f"
  },
  {
    "url": "assets/js/42.7c8e41a8.js",
    "revision": "8a060598d8b034697f96039924e4cda0"
  },
  {
    "url": "assets/js/43.80d56d71.js",
    "revision": "d89104fefce40ee61e826e2e06e7bd0f"
  },
  {
    "url": "assets/js/44.d1984050.js",
    "revision": "67b862a663cadab2aa21ac9b08e2e585"
  },
  {
    "url": "assets/js/45.68bb4880.js",
    "revision": "30d32c11ec2a06631b6098d7a4502567"
  },
  {
    "url": "assets/js/46.30b089c1.js",
    "revision": "97b9a5951bf5623db09cb4be57534e60"
  },
  {
    "url": "assets/js/47.d3f3a273.js",
    "revision": "96670bdccb537862716ba6be8512308b"
  },
  {
    "url": "assets/js/5.49508210.js",
    "revision": "f6802bb3b704466a825f573149a3620f"
  },
  {
    "url": "assets/js/8.b8e7662e.js",
    "revision": "9d5d7630de5d14ee1e38e3e1e345599e"
  },
  {
    "url": "assets/js/9.3f3b6f56.js",
    "revision": "618eb7193ff6b0d17d954a3d3240405e"
  },
  {
    "url": "assets/js/app.fd1d03b0.js",
    "revision": "bc1e0f8c74c84eee5faacb1855436a28"
  },
  {
    "url": "assets/js/vendors~docsearch.ccaccf87.js",
    "revision": "f339321af1d8ffc7aa334bd24ffa8864"
  },
  {
    "url": "index.html",
    "revision": "992b354f11139c7f9a2560dad8e5cc79"
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
