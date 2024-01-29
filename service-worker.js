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
    "revision": "56b9448a0502a48c83617a1e03b7e007"
  },
  {
    "url": "2.x/attribute/attribute-input.html",
    "revision": "958260431975c52e19f1cc88046695d7"
  },
  {
    "url": "2.x/attribute/index.html",
    "revision": "04e895b6df00820b903a13c86a81e7bb"
  },
  {
    "url": "2.x/attribute/overview.html",
    "revision": "a510ec991a1e4774402840620df31b20"
  },
  {
    "url": "2.x/attribute/product-attribute.html",
    "revision": "a3653260aa76adcc1b349127ff998001"
  },
  {
    "url": "2.x/category/create-category.html",
    "revision": "439b2ab512d24333c9c39784f4606d97"
  },
  {
    "url": "2.x/category/index.html",
    "revision": "d98fdd8f0110883a29d966e347d78d47"
  },
  {
    "url": "2.x/category/overview.html",
    "revision": "ba12f83a3739cd015da8a9cffbae4f0e"
  },
  {
    "url": "2.x/introduction/getting-started.html",
    "revision": "8df5b67886364f03d2133d8dbf8eb684"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "3f9d82f0859b4f8ca61f6c1900135f99"
  },
  {
    "url": "2.x/orders/create-invoice.html",
    "revision": "7886e3ba01b0016e4a33135f7a3e5609"
  },
  {
    "url": "2.x/orders/create-order.html",
    "revision": "e4a780c698e93bb2f3e3895327bfb3c4"
  },
  {
    "url": "2.x/orders/create-shipment.html",
    "revision": "bcd9e264aac141cd22ac747a439d893b"
  },
  {
    "url": "2.x/orders/index.html",
    "revision": "d9b33392a92a14fae054c793ce803ce9"
  },
  {
    "url": "2.x/orders/refunds.html",
    "revision": "056172f29abe14ece44db140c8c3a42e"
  },
  {
    "url": "2.x/products/bundle.html",
    "revision": "d0b3bb61e425e2cafddfea0bdbccf4ef"
  },
  {
    "url": "2.x/products/configurable.html",
    "revision": "744ab3311ed1e5528ad5b4026b6d066b"
  },
  {
    "url": "2.x/products/downloadable.html",
    "revision": "06b254e7e9e0d7cc1c4590c95f3430e7"
  },
  {
    "url": "2.x/products/grouped.html",
    "revision": "33f7b5736c207a0ae42e4dead1f4707a"
  },
  {
    "url": "2.x/products/index.html",
    "revision": "b26a416eb7ffcc56e9c0ef24c98deb04"
  },
  {
    "url": "2.x/products/simple.html",
    "revision": "2a544cb8de017c77658625e7251955cb"
  },
  {
    "url": "2.x/products/virtual.html",
    "revision": "c6528ecea385d7255a2b4333468af876"
  },
  {
    "url": "404.html",
    "revision": "d6a052fb0bf2e8ea6e776dd48554ec60"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
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
    "url": "assets/img/bundle.5302b129.png",
    "revision": "5302b129967146ebc686735ba8c55ff0"
  },
  {
    "url": "assets/img/bundleOptions.01cb8cdc.png",
    "revision": "01cb8cdc5eeee8f6684dd51da2050d5a"
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
    "url": "assets/img/createFamily.ba7fc9a9.png",
    "revision": "ba7fc9a9c8e73f8962cad699c47e340d"
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
    "url": "assets/img/options.001937e2.png",
    "revision": "001937e250d31e5f629729cfe7151e50"
  },
  {
    "url": "assets/img/order.4fbbcdd6.png",
    "revision": "4fbbcdd6c5a058a94f243128a61d7eff"
  },
  {
    "url": "assets/img/orderGrid.eb13e619.png",
    "revision": "eb13e6194aa7593ab567c912654f3730"
  },
  {
    "url": "assets/img/orderGrids.c243e146.png",
    "revision": "c243e1467741d17532cfc1510ca2efee"
  },
  {
    "url": "assets/img/orderId.425944fa.png",
    "revision": "425944fac887b52ce5bc6da5c5ab8fd8"
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
    "url": "assets/img/refund.ebbf5b8d.png",
    "revision": "ebbf5b8dc261dc088e4a45275a8b07d5"
  },
  {
    "url": "assets/img/refundGrid.24808700.png",
    "revision": "248087009de5c6776929e6bf6f9f97aa"
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
    "url": "assets/js/1.219ca0fe.js",
    "revision": "790c07bfb078e0e506a95047e95be90f"
  },
  {
    "url": "assets/js/10.7501f03a.js",
    "revision": "71208b22245463ed6b1da8f245700401"
  },
  {
    "url": "assets/js/11.4227f9f1.js",
    "revision": "246c56337adf56908227d25f82c196a0"
  },
  {
    "url": "assets/js/12.a26b96d7.js",
    "revision": "a15df87a2bfaa9483ae786a478d9a014"
  },
  {
    "url": "assets/js/13.c80bd353.js",
    "revision": "aa78f5cd4d27f801fd9f9380563c309b"
  },
  {
    "url": "assets/js/14.1a794c97.js",
    "revision": "17fbebd9a0e912d8f5226cff3da0e488"
  },
  {
    "url": "assets/js/15.2db8ca49.js",
    "revision": "055745ce432d9068749600bd6bf9cb79"
  },
  {
    "url": "assets/js/16.125f958d.js",
    "revision": "09968dfcf52931bac637d64d2f4c9d2d"
  },
  {
    "url": "assets/js/17.ab275955.js",
    "revision": "c25fbcbc3a27670c29421b7b4fee4240"
  },
  {
    "url": "assets/js/18.70ed4d54.js",
    "revision": "ad67ad14c91f8e13efd088f48bfdef96"
  },
  {
    "url": "assets/js/19.c434ca6f.js",
    "revision": "67b356f94015fc99ea54af892a7e6ab2"
  },
  {
    "url": "assets/js/2.45a56f97.js",
    "revision": "89c3854e4d563567495dbbf0a8425c1e"
  },
  {
    "url": "assets/js/20.92f26667.js",
    "revision": "784b4379abf1612e9bf13ee38abec5f1"
  },
  {
    "url": "assets/js/21.6d9adfe0.js",
    "revision": "5728e97cdd9fcec8de3248db978c1154"
  },
  {
    "url": "assets/js/22.3a8975f9.js",
    "revision": "d68a9879150f18fb2a19039b707c712e"
  },
  {
    "url": "assets/js/23.162b30bb.js",
    "revision": "b303659847d1e01086b423cd65d4aebf"
  },
  {
    "url": "assets/js/24.b2387507.js",
    "revision": "ce9e24aa98a2ca2df39a840bfceb94a2"
  },
  {
    "url": "assets/js/25.700a8b5e.js",
    "revision": "4187cfbdf599e297337814424d2a879b"
  },
  {
    "url": "assets/js/26.91326e7f.js",
    "revision": "4764e19662ba18b5a8b6c672a30453ed"
  },
  {
    "url": "assets/js/27.d6e0e1ec.js",
    "revision": "53d893c7a08efd9d2ca3066d0a7b9b43"
  },
  {
    "url": "assets/js/28.c8e24636.js",
    "revision": "658a39be1d399a33b2a7e51151eb211c"
  },
  {
    "url": "assets/js/29.f82551bd.js",
    "revision": "9c4b30dc97b77d2140d756b578ea15b6"
  },
  {
    "url": "assets/js/3.a2d1eb2a.js",
    "revision": "5f3c2c0d2357c58ff5a581e41dad32ab"
  },
  {
    "url": "assets/js/30.b321c213.js",
    "revision": "a90add11b52de06019b73e23b536db7e"
  },
  {
    "url": "assets/js/31.d9a33d1d.js",
    "revision": "b5967d0799e06eaa15ce6050d33de9fc"
  },
  {
    "url": "assets/js/32.f957fd38.js",
    "revision": "0e3db4cf17c28c6a0008dd5617f653ca"
  },
  {
    "url": "assets/js/33.12bba11e.js",
    "revision": "b6c1a6e20456337ba02237e5a47921a5"
  },
  {
    "url": "assets/js/34.73296224.js",
    "revision": "24bc40fcc6291fca4bb4493f3cea8176"
  },
  {
    "url": "assets/js/35.a0e71414.js",
    "revision": "62a43568947946351288914ad69f2bd3"
  },
  {
    "url": "assets/js/36.efcb6380.js",
    "revision": "c9258a81e2bb29a1520016b05a78b49b"
  },
  {
    "url": "assets/js/37.1a36a915.js",
    "revision": "b0f81fc88cd27d14a0a77ca706a2b0df"
  },
  {
    "url": "assets/js/38.f36d0118.js",
    "revision": "e097a13bb1d97b8e65d8c05ea884f732"
  },
  {
    "url": "assets/js/39.7e80bf86.js",
    "revision": "cff1a461313747ba0f0bcd63eae97538"
  },
  {
    "url": "assets/js/4.6a4b46bd.js",
    "revision": "22aa1f5e13b4126d604476d84e123437"
  },
  {
    "url": "assets/js/40.45a3eaab.js",
    "revision": "8c38cd0459584596c70c9a010d4c34d9"
  },
  {
    "url": "assets/js/41.3c303d04.js",
    "revision": "ff833d3d4fbd61d8326e71c95623e213"
  },
  {
    "url": "assets/js/42.3e536ab0.js",
    "revision": "9a53e6514ff87b62be387623be88a46f"
  },
  {
    "url": "assets/js/43.eac62561.js",
    "revision": "71cd209a532990e35217a77ac25c0114"
  },
  {
    "url": "assets/js/5.52bf69eb.js",
    "revision": "132366385fb0fd50ace01daf62faa9bc"
  },
  {
    "url": "assets/js/8.c2fdd977.js",
    "revision": "75c1cffefa1dec3901ef8409f2b59484"
  },
  {
    "url": "assets/js/9.af211a1f.js",
    "revision": "cdbff01891690c897b8d7bd0062dc21b"
  },
  {
    "url": "assets/js/app.5d2cdf4f.js",
    "revision": "25c52f3692ab45d8c29ee6dc66b9daa7"
  },
  {
    "url": "assets/js/vendors~docsearch.a9a9d7c3.js",
    "revision": "6fc5f0d2fdb6d6f87f0ad3fea601fd1f"
  },
  {
    "url": "index.html",
    "revision": "3f3726473f4a4d3bdf8508ac667cfb5b"
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
