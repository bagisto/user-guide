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
    "revision": "6c485b018ddd213737af5e2fa746ed27"
  },
  {
    "url": "2.x/attribute/attribute-input.html",
    "revision": "39f7e3de570a8e3f0dab67f9a63fd96f"
  },
  {
    "url": "2.x/attribute/index.html",
    "revision": "69649bd6f0171fe0f2755767c659764e"
  },
  {
    "url": "2.x/attribute/overview.html",
    "revision": "d368554ebd6a2040837c5b67b00c4cef"
  },
  {
    "url": "2.x/attribute/product-attribute.html",
    "revision": "f5bee6b0244448cb8f073e85d800cacd"
  },
  {
    "url": "2.x/category/create-category.html",
    "revision": "7532289435a0f6a1fd147a5e46e9954f"
  },
  {
    "url": "2.x/category/index.html",
    "revision": "5a3c5c8faab24fc9ca9594aed3757459"
  },
  {
    "url": "2.x/category/overview.html",
    "revision": "5fd24313295fab25b27bf0f205e87e4a"
  },
  {
    "url": "2.x/introduction/getting-started.html",
    "revision": "b59bbde4cfbc799cd0195f582e4be25b"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "86bcd0e42796b1c7df38b710b97a4126"
  },
  {
    "url": "2.x/products/bundle.html",
    "revision": "639b2c9c18a384446b6b12f0ac903fb4"
  },
  {
    "url": "2.x/products/configurable.html",
    "revision": "a17a624c6a070245321d721c499c8f14"
  },
  {
    "url": "2.x/products/downloadable.html",
    "revision": "fc4b87af7c072094c9cf8477ced2d1a9"
  },
  {
    "url": "2.x/products/grouped.html",
    "revision": "5f6ba91894638426f018d861d585ffa4"
  },
  {
    "url": "2.x/products/index.html",
    "revision": "3d6ccb9f7c77b93089c01073b2db652a"
  },
  {
    "url": "2.x/products/simple.html",
    "revision": "447a6a640c0317b81ea049f06e95bdbe"
  },
  {
    "url": "2.x/products/virtual.html",
    "revision": "170d7c0a6282c52098b01664abeaf3d1"
  },
  {
    "url": "404.html",
    "revision": "d8eb4b91add6869d510cfbcb46beb48d"
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
    "url": "assets/img/saveFamily.30a732be.png",
    "revision": "30a732be79f350059a629ce8c9fcc461"
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
    "url": "assets/js/1.879ca372.js",
    "revision": "1b27254b27134deb81bd35530557be48"
  },
  {
    "url": "assets/js/10.0f679a89.js",
    "revision": "6027ec3248875b4f4821d109f2d8392c"
  },
  {
    "url": "assets/js/11.64cd436e.js",
    "revision": "2ccb15f060c480997ae9b5dd7b8ca7d9"
  },
  {
    "url": "assets/js/12.b6e09d49.js",
    "revision": "40ee6e0a80b48dbc23b5b9a8c060ff9d"
  },
  {
    "url": "assets/js/13.3e6c7637.js",
    "revision": "36cd152c84ea0bfa2510135b1ae846fd"
  },
  {
    "url": "assets/js/14.4da35f51.js",
    "revision": "1677f5eff5179983b052d784f0b7ccec"
  },
  {
    "url": "assets/js/15.b40c1485.js",
    "revision": "37437e8ee02aae4c09fb1d658ab1632a"
  },
  {
    "url": "assets/js/16.c12addc3.js",
    "revision": "2577f292486eea2f6d244e5c17c7b9ff"
  },
  {
    "url": "assets/js/17.6a7eeed3.js",
    "revision": "e56d8ffbf9eb5265b76ab7413f9c4348"
  },
  {
    "url": "assets/js/18.e4ccb4bb.js",
    "revision": "706d5ee55a65201af398cac5b313d238"
  },
  {
    "url": "assets/js/19.c434ca6f.js",
    "revision": "67b356f94015fc99ea54af892a7e6ab2"
  },
  {
    "url": "assets/js/2.da273dc0.js",
    "revision": "d12260242c52e4e12ee7aeea965a2709"
  },
  {
    "url": "assets/js/20.53e74ff4.js",
    "revision": "d7ee5bd2c9e91f54db58682ae42a33f8"
  },
  {
    "url": "assets/js/21.e2670fc9.js",
    "revision": "2014968941c2e015156b9f6ca8645834"
  },
  {
    "url": "assets/js/22.7fdf5bdb.js",
    "revision": "8e354379936330c1bc0b70e970f8d991"
  },
  {
    "url": "assets/js/23.162b30bb.js",
    "revision": "b303659847d1e01086b423cd65d4aebf"
  },
  {
    "url": "assets/js/24.615cc73c.js",
    "revision": "262ccd99f17e8b1e1744722524f3db84"
  },
  {
    "url": "assets/js/25.7b32777c.js",
    "revision": "464cc98ed59e195541c10fd1359226df"
  },
  {
    "url": "assets/js/26.5d37fdf6.js",
    "revision": "09ebb1321926d5713d27699be861260c"
  },
  {
    "url": "assets/js/27.244b4a6d.js",
    "revision": "a3af82bc3c7fef2ce45093cd216a16cf"
  },
  {
    "url": "assets/js/28.6a5d1bb4.js",
    "revision": "06783ecf6bb870717903403cbac3b5a8"
  },
  {
    "url": "assets/js/29.46a98193.js",
    "revision": "476682383cfc617bd7f5b54054a61c8d"
  },
  {
    "url": "assets/js/3.2268c682.js",
    "revision": "384c9bf530ac5b6fa7a857b13a3c9719"
  },
  {
    "url": "assets/js/30.1c8b328a.js",
    "revision": "9352fe2865495dcabe22eccaf4a2ead1"
  },
  {
    "url": "assets/js/31.54ff0927.js",
    "revision": "17803355b4414920c5aedc8f8242f969"
  },
  {
    "url": "assets/js/32.cc3173ba.js",
    "revision": "cc1b7b74bdfc7fb689b9c311a9ac237c"
  },
  {
    "url": "assets/js/33.3335d402.js",
    "revision": "af65ab5b7fc8a09bb49a348091916b23"
  },
  {
    "url": "assets/js/34.3eb2c520.js",
    "revision": "db429e4c09f20365bf385309956495c1"
  },
  {
    "url": "assets/js/35.f8a056c9.js",
    "revision": "31f0fde5397dcd975c3cc7f84a81085b"
  },
  {
    "url": "assets/js/36.99f19505.js",
    "revision": "f0392ca2a1411c4ded3b03d4daccf2e4"
  },
  {
    "url": "assets/js/37.524be213.js",
    "revision": "226c67feceb4d699b2d072d6eda1f290"
  },
  {
    "url": "assets/js/38.d9b3b500.js",
    "revision": "a64a13a9dd36514e34f84b3f025b8e79"
  },
  {
    "url": "assets/js/4.7a8243af.js",
    "revision": "03253fcf68975f6048e84b61cfd82341"
  },
  {
    "url": "assets/js/5.57ab633b.js",
    "revision": "6f500051e522f63b8b4709bc7064577f"
  },
  {
    "url": "assets/js/8.691c5be2.js",
    "revision": "2aa75260afdf3ccc344d04ba90496cd2"
  },
  {
    "url": "assets/js/9.af211a1f.js",
    "revision": "cdbff01891690c897b8d7bd0062dc21b"
  },
  {
    "url": "assets/js/app.7d1987cd.js",
    "revision": "87a8eabd16a000a0ba5bb66695a6f072"
  },
  {
    "url": "assets/js/vendors~docsearch.5c22ca79.js",
    "revision": "a77459d717520b546a3a85f21fb06c6b"
  },
  {
    "url": "index.html",
    "revision": "93e4de9e8d1f808edda5c03bb7648bea"
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
