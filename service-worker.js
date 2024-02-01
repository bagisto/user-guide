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
    "revision": "ddec2f04161c9726b4af5a8fbfc85be0"
  },
  {
    "url": "2.x/attribute/attribute-input.html",
    "revision": "384723e00838fcb39e63629daa060c47"
  },
  {
    "url": "2.x/attribute/index.html",
    "revision": "c784034ebda7a72ec8506548a01427ca"
  },
  {
    "url": "2.x/attribute/overview.html",
    "revision": "32bd97ebf17e8195157596842ae0d945"
  },
  {
    "url": "2.x/attribute/product-attribute.html",
    "revision": "d3cf06731b7ae53044bb7707177aaf15"
  },
  {
    "url": "2.x/category/create-category.html",
    "revision": "2c7dedb9046ad49f4d27125682472613"
  },
  {
    "url": "2.x/category/index.html",
    "revision": "216c3310d8f0daea2cdc58186311630f"
  },
  {
    "url": "2.x/category/overview.html",
    "revision": "10c610371b27177b9ef4b78afaa8d29b"
  },
  {
    "url": "2.x/cms/cms-page.html",
    "revision": "2a00eb9d708241d3d6ffeea7aec0adb1"
  },
  {
    "url": "2.x/cms/index.html",
    "revision": "ef2fc89cbd265aaa26649b48011d18c9"
  },
  {
    "url": "2.x/customer/create-customer.html",
    "revision": "d379652c0346f7716a6675bcdfb7e968"
  },
  {
    "url": "2.x/customer/customer-groups.html",
    "revision": "f3dc93974b049d566d18cc76cf952509"
  },
  {
    "url": "2.x/customer/customer-reviews.html",
    "revision": "cd17dec68a22ecfdf32c75d170795b64"
  },
  {
    "url": "2.x/customer/index.html",
    "revision": "1b32a3ee68525520ce68bc0086949aa3"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "b593e654a8f0124899c4625d446bff1b"
  },
  {
    "url": "2.x/introduction/introductions.html",
    "revision": "12180e495e790e1abd7befd6a601aee3"
  },
  {
    "url": "2.x/marketing/communications.html",
    "revision": "91ca2d4b1ca481a84960270bd6475a1f"
  },
  {
    "url": "2.x/marketing/index.html",
    "revision": "d01fb5d79f431de60553077bddc17ea8"
  },
  {
    "url": "2.x/marketing/promotions.html",
    "revision": "a0108655bed33a40e73d46b6af93254c"
  },
  {
    "url": "2.x/marketing/sitemaps.html",
    "revision": "3f01b79931ffe56a802c9bffe8d601b1"
  },
  {
    "url": "2.x/orders/create-invoice.html",
    "revision": "51f7f41aa9eec83df814552817b05d9b"
  },
  {
    "url": "2.x/orders/create-order.html",
    "revision": "1227165286edb0b740913d9caa9de718"
  },
  {
    "url": "2.x/orders/create-shipment.html",
    "revision": "d2738fb376d2d00b0a9bb520c433d121"
  },
  {
    "url": "2.x/orders/index.html",
    "revision": "b24946d73300153feeb6f9789827ef23"
  },
  {
    "url": "2.x/orders/refunds.html",
    "revision": "f11ba31bcb99bbe7dac8ac8a190fe79b"
  },
  {
    "url": "2.x/products/bundle.html",
    "revision": "b345ef3100d2e63a706ef6b48bc79f10"
  },
  {
    "url": "2.x/products/configurable.html",
    "revision": "6bbe8ce1ebc5d5d50ff4ca4e0410e0b8"
  },
  {
    "url": "2.x/products/downloadable.html",
    "revision": "e05e2ba98d8fbc84a9cfc65b6a59c9f8"
  },
  {
    "url": "2.x/products/grouped.html",
    "revision": "8f2240dc3285ecce1547b0be494a22da"
  },
  {
    "url": "2.x/products/index.html",
    "revision": "1aa3ac49ece181488bb36f5993567623"
  },
  {
    "url": "2.x/products/simple.html",
    "revision": "d45089633783aa150e5a50e937d17e39"
  },
  {
    "url": "2.x/products/virtual.html",
    "revision": "9f077f61e4e325b9e2af7ec58e092bf4"
  },
  {
    "url": "404.html",
    "revision": "7713b52ecdf8e0d67a49584fa5b84930"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
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
    "url": "assets/img/createRefund.9e6235ca.png",
    "revision": "9e6235ca47b14d726e713d85e1d70f29"
  },
  {
    "url": "assets/img/createShipment.86e26b57.png",
    "revision": "86e26b570475164a81a2d552e1bb7771"
  },
  {
    "url": "assets/img/createSitemap.d3b98b83.png",
    "revision": "d3b98b83b7631a9f494f69c5cd0891f3"
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
    "url": "assets/img/link.68f3ea34.png",
    "revision": "68f3ea347f52221dab0cfb28f17f3a6e"
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
    "url": "assets/img/saveSitemap.c7785ab4.png",
    "revision": "c7785ab45983693dee9e0b2ee7aa1fb9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/seo.43c81d1e.png",
    "revision": "43c81d1e466f44350197e09d98ce17ca"
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
    "url": "assets/img/sitemapOutput.ceffe7ff.png",
    "revision": "ceffe7ffe838b6f514286cef4b25fb0d"
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
    "url": "assets/js/1.52a4301f.js",
    "revision": "1cdcd93d73ab8195f7df44609569e5d2"
  },
  {
    "url": "assets/js/10.dfa717bb.js",
    "revision": "8574cccfd535fc7219843324765f5ce8"
  },
  {
    "url": "assets/js/11.1186d133.js",
    "revision": "b39f44412707aaa328da8ab456d89263"
  },
  {
    "url": "assets/js/12.a6e9706a.js",
    "revision": "10d472feffd6c7b1ee98b10ae6884af5"
  },
  {
    "url": "assets/js/13.3e2ac158.js",
    "revision": "ff4081a729916eba964c0562ea770599"
  },
  {
    "url": "assets/js/14.4f7466c7.js",
    "revision": "fc34d732570c686395ec2c92642ddd41"
  },
  {
    "url": "assets/js/15.941e27cc.js",
    "revision": "bc7d330f4aee48be12dd68d69a697b41"
  },
  {
    "url": "assets/js/16.1245e39d.js",
    "revision": "acc88dece6c291db1df18168df4d8aff"
  },
  {
    "url": "assets/js/17.d4434098.js",
    "revision": "0f1c0022dfb53d15534d6a6c2151749a"
  },
  {
    "url": "assets/js/18.d427c98e.js",
    "revision": "0154a04a557edee000b29898f7723d91"
  },
  {
    "url": "assets/js/19.f5568eff.js",
    "revision": "0c2630688baee84cec3598ca1063ccb2"
  },
  {
    "url": "assets/js/2.20c34497.js",
    "revision": "44015850ff619fd03f737f77bd8dd448"
  },
  {
    "url": "assets/js/20.3f631bae.js",
    "revision": "e65c5d9a94b1b09f4038f9a4c29c0bce"
  },
  {
    "url": "assets/js/21.b5d0e6a2.js",
    "revision": "cacdfc4b938341f5a8102e72408ec73e"
  },
  {
    "url": "assets/js/22.fa889d84.js",
    "revision": "da007bd4231db5a323e74d63e4c9297b"
  },
  {
    "url": "assets/js/23.7cb1da17.js",
    "revision": "1fa840f7f6dcb87cb0fde2cf9e051944"
  },
  {
    "url": "assets/js/24.34b8f4f9.js",
    "revision": "cbbace90f7adafa3d50647b08e5e6983"
  },
  {
    "url": "assets/js/25.f223a9f2.js",
    "revision": "b4d105470fddd35f8401e59c05d4d766"
  },
  {
    "url": "assets/js/26.d7123ee1.js",
    "revision": "5183fd294c41129a847a6d9df6638753"
  },
  {
    "url": "assets/js/27.e6ffbe34.js",
    "revision": "7bfefe10f840aecaa9535e937bc91513"
  },
  {
    "url": "assets/js/28.3919dfb1.js",
    "revision": "a40b4ea0aaff50825e5c5bd1cea07749"
  },
  {
    "url": "assets/js/29.0fc6960a.js",
    "revision": "e43262dea223f9e207c22a7191b1cd2f"
  },
  {
    "url": "assets/js/3.5c53a674.js",
    "revision": "5933f9a58e330a5d99dfeeb92a4eae62"
  },
  {
    "url": "assets/js/30.effc40bd.js",
    "revision": "ef470a6695357bd851bf4da5d43bf29a"
  },
  {
    "url": "assets/js/31.819f1482.js",
    "revision": "e4cd3f08ffb31d3a43d6548d05271b8b"
  },
  {
    "url": "assets/js/32.1638f891.js",
    "revision": "9ecc0905010ce5a00fd2a72c7b0f387b"
  },
  {
    "url": "assets/js/33.dc7f0f20.js",
    "revision": "06911e9a64b9e7115da1eb8d7a2f55a6"
  },
  {
    "url": "assets/js/34.0a9af457.js",
    "revision": "d2af03dea79dcd2546128a6b11185707"
  },
  {
    "url": "assets/js/35.a873becb.js",
    "revision": "1060f961e0bf22c1c2831bfe88a5524c"
  },
  {
    "url": "assets/js/36.9723a8ba.js",
    "revision": "8c80e4a27607ea83a87a150e4bc2cb55"
  },
  {
    "url": "assets/js/37.45a3be0d.js",
    "revision": "4d2b5fff05008a9f3db0c2eae2b00c29"
  },
  {
    "url": "assets/js/38.f4e08b0b.js",
    "revision": "fd040ed8025885c25ea09476a34a8f5c"
  },
  {
    "url": "assets/js/39.6d39e711.js",
    "revision": "7c0747cd90e537b750b68aeafea22786"
  },
  {
    "url": "assets/js/4.0cc12b03.js",
    "revision": "7c0b14cd7ca766f58c6adb52753847c2"
  },
  {
    "url": "assets/js/40.8cf6d25c.js",
    "revision": "fb57e1798d28f6884a252a4d0ae46e3c"
  },
  {
    "url": "assets/js/41.e372db23.js",
    "revision": "2a0aa2c40a50cabba2f215e0d543cc08"
  },
  {
    "url": "assets/js/42.6fcab333.js",
    "revision": "ada2e3b2fe607f1edd87d464ad0198d8"
  },
  {
    "url": "assets/js/43.74dbc48f.js",
    "revision": "1a5172b8f4da503caa8d5947a0b1b74b"
  },
  {
    "url": "assets/js/44.6cfedb3e.js",
    "revision": "042c683fb5879b82ce89f8a28e0488d1"
  },
  {
    "url": "assets/js/45.dd13a107.js",
    "revision": "5beaa6cead62e4425a3c9db37ddebd84"
  },
  {
    "url": "assets/js/46.588822bc.js",
    "revision": "d3809e6c0e4c5fa4eb661d7fd3dca90e"
  },
  {
    "url": "assets/js/47.1f215b61.js",
    "revision": "dbd73087dfea90bc2570cdbf77f51800"
  },
  {
    "url": "assets/js/48.1aa2a70c.js",
    "revision": "e59dd4acc03ba6bdc6ac3ce708ae507a"
  },
  {
    "url": "assets/js/49.0b8f8667.js",
    "revision": "448943c548ea55418c6f230532d3f5d9"
  },
  {
    "url": "assets/js/5.7bad5605.js",
    "revision": "a9b1e09ee4ebc935203c66416892ae3e"
  },
  {
    "url": "assets/js/50.dcd59640.js",
    "revision": "17063066211a35f3cb6b1053645a9c80"
  },
  {
    "url": "assets/js/51.9f55237d.js",
    "revision": "941ca6eb2d28ff5d224d40731da52caa"
  },
  {
    "url": "assets/js/52.ab3c5e97.js",
    "revision": "273ff6b7ae211fe74ca3d29977da97df"
  },
  {
    "url": "assets/js/53.b42af981.js",
    "revision": "cc9956ced28121ba61999f0b4703ed07"
  },
  {
    "url": "assets/js/8.60a5b5ff.js",
    "revision": "32423e1b1fd586d4649a357f943a9f77"
  },
  {
    "url": "assets/js/9.bfc04d28.js",
    "revision": "61fbd99bccb29c2486147e8a2ee7afd8"
  },
  {
    "url": "assets/js/app.90766162.js",
    "revision": "99038ee1160bd9eafb576da794923d83"
  },
  {
    "url": "assets/js/vendors~docsearch.1a92054f.js",
    "revision": "c39039d76b69eeedf3c89d87a8af6154"
  },
  {
    "url": "index.html",
    "revision": "52b9752f2eec2e5cc933db138393ef42"
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
