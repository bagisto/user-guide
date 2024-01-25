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
    "url": "2.x/category/create-category.html",
    "revision": "472f7c418769b9d27cd697b45319c59a"
  },
  {
    "url": "2.x/category/index.html",
    "revision": "5b3e4db52b09d6c233f521db7ce30f87"
  },
  {
    "url": "2.x/category/overview.html",
    "revision": "b8788f1f4b26d71de958ce603b88e323"
  },
  {
    "url": "2.x/introduction/getting-started.html",
    "revision": "78e2c19dccc5bde763d93410b705d4cb"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "04ffdce3e0c7c5734958a83fce5fd434"
  },
  {
    "url": "2.x/products/bundle.html",
    "revision": "a5fb6bcbf130343db868cbada3656e5e"
  },
  {
    "url": "2.x/products/configurable.html",
    "revision": "31917ad9177793cbd181d7929dc099af"
  },
  {
    "url": "2.x/products/downloadable.html",
    "revision": "2e1155585e55a4fb4a4ddf73a2974a28"
  },
  {
    "url": "2.x/products/grouped.html",
    "revision": "acd153d2fae2482e6707efa8c294ac17"
  },
  {
    "url": "2.x/products/index.html",
    "revision": "b442f3987a879000b2a11c2398ff0b4f"
  },
  {
    "url": "2.x/products/simple.html",
    "revision": "f982b544b9b9a0a1ac192cc1050682dc"
  },
  {
    "url": "2.x/products/virtual.html",
    "revision": "d5a77cb0571a5492964888273b1a9c1a"
  },
  {
    "url": "404.html",
    "revision": "8527ace8e8e1eae5fe24a057c73fa960"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
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
    "url": "assets/img/variations.9be19c16.png",
    "revision": "9be19c168dd7dc86d64dd341abb15832"
  },
  {
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/js/1.e4000d58.js",
    "revision": "a860f4340b3a53f4af5c6c465ab91ed5"
  },
  {
    "url": "assets/js/10.a1da7c90.js",
    "revision": "c0dcad757462ce1be8408c7ee6d8c894"
  },
  {
    "url": "assets/js/11.b851b68e.js",
    "revision": "2ef58a9824f7700085dc612f74d7a1cc"
  },
  {
    "url": "assets/js/12.6bf4c571.js",
    "revision": "dd9259420ffc45a8d8f4d8e8e140e296"
  },
  {
    "url": "assets/js/13.5e2adb0f.js",
    "revision": "b79815ccd8f9432fdbce2641b849d63b"
  },
  {
    "url": "assets/js/14.99940bb2.js",
    "revision": "541ac084dec13f6329dbff9191348888"
  },
  {
    "url": "assets/js/15.232c7bd0.js",
    "revision": "13159e42e6bb0f61a41804191b8d3ea3"
  },
  {
    "url": "assets/js/16.ef5f9a48.js",
    "revision": "33698de64fd0d37200d7b73ad21ec503"
  },
  {
    "url": "assets/js/17.1d629b23.js",
    "revision": "cf4bd335dbdc918b295d477f42eeeeea"
  },
  {
    "url": "assets/js/18.2abdfcd3.js",
    "revision": "b6b376971bf004f32fb48c3ae9e06b90"
  },
  {
    "url": "assets/js/19.c434ca6f.js",
    "revision": "67b356f94015fc99ea54af892a7e6ab2"
  },
  {
    "url": "assets/js/2.a78426f3.js",
    "revision": "dae436317855caff4220e8e85489de4e"
  },
  {
    "url": "assets/js/20.5162a384.js",
    "revision": "fa36c5fbebd23739c5238525c7452777"
  },
  {
    "url": "assets/js/21.9ebcc5cd.js",
    "revision": "28ddb879fcaf4d25d17a11ff92c846ca"
  },
  {
    "url": "assets/js/22.ada48655.js",
    "revision": "673a24d7e264c8f3a635f3569808dcb5"
  },
  {
    "url": "assets/js/23.b34fb236.js",
    "revision": "5d1921e6bbd5c33b33907e52331de66d"
  },
  {
    "url": "assets/js/24.e0d267df.js",
    "revision": "f8ff425c376abd86049bf8219e6473c0"
  },
  {
    "url": "assets/js/25.9558e4df.js",
    "revision": "6bee1222060af52854ecc51e184d778e"
  },
  {
    "url": "assets/js/26.524b3ab0.js",
    "revision": "e8077ee024c79218e30dc43b8479f632"
  },
  {
    "url": "assets/js/27.ff713127.js",
    "revision": "38f5a4d49e5aa1cab6abe207465efc9a"
  },
  {
    "url": "assets/js/28.5f83ed4c.js",
    "revision": "c9bafcf4e4ebd8c8df8270f9282f51a2"
  },
  {
    "url": "assets/js/29.9f333179.js",
    "revision": "a015b32b9a8645e21e1de0da1f2ea5fa"
  },
  {
    "url": "assets/js/3.0b7608c7.js",
    "revision": "95626b35a028fff2e1e08b17cae58d40"
  },
  {
    "url": "assets/js/30.797df01c.js",
    "revision": "cae67bd220bc17ee7cbdbb60d87d3d10"
  },
  {
    "url": "assets/js/31.17088837.js",
    "revision": "5d859e4828b74d82cb3b1d7f7c616dd9"
  },
  {
    "url": "assets/js/32.16030e48.js",
    "revision": "6e968d5dc15a6c71decb981fe296a64b"
  },
  {
    "url": "assets/js/33.e7cbf15f.js",
    "revision": "1e037a43b2c0d7f117819c268de12ba3"
  },
  {
    "url": "assets/js/4.af6b9263.js",
    "revision": "912e1d0f95122d4b751e3ae8e458a6d8"
  },
  {
    "url": "assets/js/5.d29b4f03.js",
    "revision": "2b454081f3a0ab4fc2705bfdb2c692c3"
  },
  {
    "url": "assets/js/8.95b70750.js",
    "revision": "907ba7799f29dadd0c4b1786c78eba19"
  },
  {
    "url": "assets/js/9.a7fcff62.js",
    "revision": "2a7cde2aab77958315fb39f269245308"
  },
  {
    "url": "assets/js/app.a0cc8eb3.js",
    "revision": "dc10103aa66ac03c313f1548948b32c8"
  },
  {
    "url": "assets/js/vendors~docsearch.1a97eeab.js",
    "revision": "dc7a6a2d402231559fb87d0c711c3eab"
  },
  {
    "url": "index.html",
    "revision": "6180cd42cad6f90f1633f46f77981565"
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
