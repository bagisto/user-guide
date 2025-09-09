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
    "url": "2.0/attribute-family/attribute-families.html",
    "revision": "39ee37140d7d776afa51605d9dd7556a"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "1cca18c84ff4cc65f41bc48a9daf118b"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "611028fb606cc19ed7076ed2ef94d36a"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "ff304d3ff8f858ac02b6648360a34257"
  },
  {
    "url": "2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "0bdb1fc841fe7babc0cf1c28dfab8093"
  },
  {
    "url": "2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "0f75d0472affb7e179547b5e3fe75880"
  },
  {
    "url": "2.0/b2b-marketplace/buying-leads.html",
    "revision": "1a06345bf920afd2eedbbe59a6c31afc"
  },
  {
    "url": "2.0/b2b-marketplace/index.html",
    "revision": "1d5d9054373a1e7a3eecd9ff40d48167"
  },
  {
    "url": "2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "1cebffbe0cb63d8d977e038d8008cea9"
  },
  {
    "url": "2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "30b9b991a03a9ad18a230c5749f80d75"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "8d3b585af2fa390db05e8b55538ddea8"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "0b60a7dda533cc035da2a19bc7bc46de"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "756a568a3cace9e515c7c35b9f69af24"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "48918789043d22bdb49e9e6a01f4aa48"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "de10db2d1e12337f29bd993ebf4f2dc0"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "6f039dccd71e8ffdef47198ca726f7e6"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "fade301770a5ac367b2d4bdb3d06d5d4"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "8b9cf1df90ba8ab37eed410526e7f703"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "7fa4588ca8edc9ac79fa6ac2bb771868"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "837949d994616980eb09098d6cb59c99"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "506515821f491757ce18bfdc25e8c398"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "f9a52cc6d279797f4e15a76a1d7a2408"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "7f84d499cc0d36966a6541e0d27b38c9"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "748c3ea6b02f4c4a89eca9f75b080abd"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "9e1659f6d9d27e74325100d258c97074"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "f69f32dd3b18e4f05b3cdf95c18827f3"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "c481d1a31d895a850f032c2ad2fb00eb"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "f3e43144abf41dc96d950a877aada4e1"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "a62bde64ab3332aca9c828de7bfbfb7c"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "248de65c121720f3651dea4f8e7130ef"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "21d1fe6c79aba6c204857a93d466b1e3"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "87394109591f7ccb5294272edf121ce4"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "a1a842e345fb7efd38d10d2dc1a5a9bd"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "90cf6c4cf7da131e2bf1fb202c842d88"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "6f21c0075a8c2c0922f04ee2ab64d190"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "4a6215820d7c45558b5049d2457e37d7"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "a4a61d65cf4547afd76bc82b1d8506bb"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "2d96bc68f5b8f253d7ed89496507ac9b"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "5d59c58e597da23a09782ea7490f3a6d"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "78f24721fb39cf3e88cc9d2d6b61f596"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "996c2354349a268401420221149d9ea2"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "5af0e82879cd73459924c51c399f8f4f"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "106b841b223e0f42c51dbf51cd39c3e6"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "b1de90c689581ebb5f32bef39ad119b1"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "2e40083fc414a72444245dd6f7fa9d15"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "4c3ff6c73cedf7967198ae26411c7e58"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "5b4b0ae27b535d606ca1063e690ee137"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "9e95395798f7e85f4e950fa0bd00b7c9"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "0b7407ee6c3c67b7079a0591eb869bfb"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "f9cc387809a448692b9f621b8af0552d"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "d5b46ac3456294567ee9501533d77bad"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "e66f815bf51638f8c3a25841179e7b93"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/index.html",
    "revision": "11a52927a6b43d95bd45fcc9e656a175"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "16b24936e995abda674238b6d6707be4"
  },
  {
    "url": "2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "2a5cf6d43f106690090bc4230fe85db6"
  },
  {
    "url": "2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "23957ea1a1a802ce15a03637cde4edf0"
  },
  {
    "url": "2.0/multi-vendor-marketplace/index.html",
    "revision": "160e223a185c358c7db3f964ead8fba3"
  },
  {
    "url": "2.0/multi-vendor-marketplace/order-management.html",
    "revision": "9819bd63d4b1c24e26ce7981c76f2e76"
  },
  {
    "url": "2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "5364c4fd1ab56814eb721ee12b267ade"
  },
  {
    "url": "2.0/multi-vendor-marketplace/product-management.html",
    "revision": "fe97d5a99291b713c20a228d3cddf969"
  },
  {
    "url": "2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "d48390e03fe1799c7be69adffacc07d9"
  },
  {
    "url": "2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "75c1f3b5f8cf22817110b7ad42406ca7"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "6635c9b34830c4c8ea30dbf55511116a"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "46616deed791da73352157ee6a274b61"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "db72d7c4911860b0249346057087008c"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "c0d3ac8199a63964b6e704ec5ac5e46b"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "98ee1db1fecfcf01d5cf065e33368c8c"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "9e31c5da1de0ef21d194ab85d0439eea"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "1de29aa23ba8d1284ab732028d75e6b0"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "afefd5d0c392e11571b8cc381078e34d"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "a37db4babdc3c74a25dc4c875b635d08"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "b059f3f5ee07d0cb1f9d1d332999d709"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "88a0960aa461b4e11823de63499fe298"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "50ccc5d316c3e599be81ae2dd940cc07"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "27dac19fbd3cf5f62abe7f85a0ba385c"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "105537aed23b0d94591a8853a878765b"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "099ec7ee7472afac8c5c6e82823eb1e5"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "d96698faac9c7fb398741882aa3b85f6"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "4ef2419e92f66a76ca7606b57899a6ac"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "a3e32b8b76a56139503b9257dee9a64a"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "b4baa178169fdcb455a3fcaf858765e3"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "56d4ae3f4ed9b74098098b5c65864389"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "329ab87467c04ba5b419171581dbedd7"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "f324c4ec98394d09b04f83125b9716dd"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "dfa2fe7e99e6d6c471a0ceb1f1d860be"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "f90616c286fa5b81ca67342db4a515b0"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "8cf9af6ee6ab89cdf61b99a98e4796ad"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "5b32b9ded9e86d6f00abeee06e6e8780"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "68b420b686274f17433e85242a457831"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "9ca1c1b3c8fd72148c6932a27f981def"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "d46fb406b96f094c9b7df0d7f5a50eff"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "6107873d7791ab81617f6cb46d580d4e"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "38ffaed6bd0c2c2be201ff271f586869"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "8c418c50ee0cff7e6527ce495d1aaa26"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "4485d56d08788c77ce7f4d9bf398474e"
  },
  {
    "url": "2.1.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "05002a38364e8f5cec5836be2dcb081a"
  },
  {
    "url": "2.1.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "efd145c25d5e3535a7348e956ef79a7c"
  },
  {
    "url": "2.1.0/b2b-marketplace/buying-leads.html",
    "revision": "45c03732dcb35de8d9cfa0ff32fb82ed"
  },
  {
    "url": "2.1.0/b2b-marketplace/index.html",
    "revision": "ec29522815edfe170cc4e7234deaf409"
  },
  {
    "url": "2.1.0/b2b-marketplace/request-for-quotes.html",
    "revision": "1e8c72e7da0688ca7e2b0901dc765566"
  },
  {
    "url": "2.1.0/b2b-marketplace/supplier-microsite.html",
    "revision": "71a7f9598ef6d92c516ccf7570309040"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "7e3c343a413258872da859adaaecaf47"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "e5f0e95cef8f9a97016f5de3e23bad0f"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "fac8e9a6c8a9492cddcfa869d5e7821c"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "4ac4c03fc7009560b0509887e333e9e5"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "a0759f572293c87148dcd9f40071e587"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "fc2be5653cc8213f3fa2f45048564c02"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "afc8fd63461c4b553738dc1f06ab9858"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "dc4d832d5ef0d44dd0da4ab97b742785"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "ecbfc04b5650878cf6ee0143dae67bb5"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "a7a247250ac39f0c791443f6cef5df27"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "e169be9f8c85990a582ec02ad3b9edce"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "7058afeb5db3c7fd6453e2f1b1fe6d87"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "9aa0dfff48c11bab55f875a831f7fe4d"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "84b1ee314c2eac22b6aa8f70e420b686"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "9035109ced6725f54202110ccd19d4dc"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "dc7be6e65255d69dcbc76b7a0e7be0dc"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "0fa489d2dd0022e16287d07186b634c7"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "244cf0dbb1e90ad8f8900453ed4cf38a"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "5a751ec73d4d3a22142e647b444acfc5"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "25eaf71d4534dfdef4096042b8aa4594"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "dae1cc6918a8e0fdc15320df428b2852"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "f22d1a970945cbd7e184cca72f1cdf33"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "96cc0eac92ae5a99ad5cad795d4f6e2c"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "9819f0fee2c835b26be027c403c78b69"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "44374c9a620ff7fcf0a76b7825cbe98c"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "4645f28854ed4b0b833daa03faae86da"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "c7286c1cc1c5e1d3a21c0c93b9d079c5"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "274d9f7655bfc80a310e58936a26adb3"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "062133ef8193f21a28350755571af846"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "198e3c904a3fde4d11c59177d09793c3"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "2bf3beb4680227a1752b6a235a7822ef"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "6ef8d4f3238358f0d050c3f9f31daec3"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "0e09f2eb543a73817f596ac2302a5bdc"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "e9b6922fdbae1b8a395ec80e854082b9"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "a5f1400e6a185f8b7dcbc127192f2479"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "6a10f0d84411979abdcf734638446708"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "df94deab94599c520205789d82524c4f"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "08fda1c7fadd8ab4283a7914ded34f08"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "79e90f0759d6a158092318c604ef49c4"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "95f84f45709244d2568f75cdcdc95331"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "1c64c8f7c34a25f9a4b800398117a1d9"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "d82f7c7589f003b36a9ff1c53f36e08d"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "2062402bce21bdbefee79d81dbaec1e4"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "d242272c38c621f068b9a6c802b5784d"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "6e574dccd34ec3a1b22eded513e39bb0"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/index.html",
    "revision": "ed418644f210d837f0ea2ebfe62189e6"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "13c55db90ccfc27a0249f1817a1d042f"
  },
  {
    "url": "2.1.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "822009d19c1306b68b7bf0e04e1b6b8d"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/commission-management.html",
    "revision": "3c6b4152d03ef21e17a6dffb9e6f5830"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/index.html",
    "revision": "a703c76351190e22e0e0afa0f3a855e8"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/order-management.html",
    "revision": "a15f2affab5bf610ea469afc56b5ced8"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/payment-management.html",
    "revision": "2c932c3ee49f95966a5250e54e83380b"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/product-management.html",
    "revision": "bf81a2d047e45f28900d5a6be3886898"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/rating-management.html",
    "revision": "98a16608f6dfe009297bfd9a0b13cd18"
  },
  {
    "url": "2.1.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "642a04a23b8b4ecc5c6d4092ddb8230c"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "9b5775a0b7ece94dd7c34176fc3df981"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "d2b2bba4d22449d3e4b52b2783d4f305"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "3818e00b81f70fdb24c66115489635ee"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "25bce1f6a2ee9b3ca2d8b1b6b0f480d8"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "4b474e904e3ce79bc32c3adc0abbde72"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "1cf58817509b07502be60fea4212d84f"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "da14f4e4d80431733d7989f4e8ca3d45"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "078f205d24f245d4476ecf741ce19fdc"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "36d7e0bd7ce734e04da24bef2043e183"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "2b3128590a3e8f29090fcb219adbc286"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "91044dacc16499cb33b6e3994b4d56b1"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "bd801bf40227e2935e7cb094946c65ec"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "6894b8efdf083b2a5ccd88af094293db"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "949052bd03f0e34f081486c388cfebd6"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "61b297f3aa49994e42ef42244e06516b"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "f2385cfa3e958ea2b4784c9631447410"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "d8da9b812e9e1530078544825a8c7557"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "6f2901d90252c0d523cc90eb4a93d2ea"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "cedfbe736aa4954718af52d1e5c106d4"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "4b9639ef2937cfb00b15d4d59a0b7175"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "cd8d7dfaf59fe36eafaaa9368b6207ce"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "7719c41d9d309d138f1aaf561e12022f"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "bfa9f192e7d8d78714eba62755eede05"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "81fd332a189bdc438194160c5132a0a0"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "1a4e34373961c9ba605f4687b6565b18"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "799bb50e8fe0e139a2c69cfb8520952a"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "b7f3aebd0ebbd7ed5f4fc3b398c93b5d"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "35fd5897d846061fb1aeacf130e01948"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "3e42a4101c34feb6d2bc2587e2c4086d"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "b0398fe1e525a870b624356ed04c6bf9"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "0e9242d4c66026df65defa95e9431d0d"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "36ac37fa46a7da2088fc9d6d09ac38bd"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "88ed887507c2ea6ae81648e4d346f2f7"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "5e7bff075d70b2f4daab461ff8590e90"
  },
  {
    "url": "2.2.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "694c3c6290414aa4037251310daebfda"
  },
  {
    "url": "2.2.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "7dc5fd3395f146325d9bff1339477d65"
  },
  {
    "url": "2.2.0/b2b-marketplace/buying-leads.html",
    "revision": "bcecfb72fc59222bd3da056378f0f88d"
  },
  {
    "url": "2.2.0/b2b-marketplace/index.html",
    "revision": "18096021759aa7b8d6fc48869c7b0301"
  },
  {
    "url": "2.2.0/b2b-marketplace/request-for-quotes.html",
    "revision": "092feb5a91f4298fc749e2626b00c0f6"
  },
  {
    "url": "2.2.0/b2b-marketplace/supplier-microsite.html",
    "revision": "c73cac78aaf2755e4703808c04efe815"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "734763b4f22ad2f685fbecf038e45476"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "88623e185e1468dd5b40c13512260f06"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "4ebad3d4115a7a20f999a09acbbf8b6c"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "d6321f76e13c24fd39807fecc4eb0762"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "5340d9185995cef0206732a6c7987759"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "eb7dd8b7f912787b1084e14c40e53a89"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "88943a093d448316e293b7048e0e1c34"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "ae3220abf0528c1ffa05ab461244b846"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "af2f8eb1172c13e7b841a6128167e7cd"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "4dbd05281819ae54465be842d028c0f3"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "85bdd1bc31600846b5a0266314546572"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "5a825fb0b3c0e3eae4f976c7ac860dd3"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "7bae3aa526318d7dce1f624d1eb66a2e"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "fc8104eade51048e041b74ab06bbb7b2"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "009025c4c83e050cfb795c7bdf051dc8"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "8389026170d13fbc1047ef8908913fbe"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "2b46558beea88faf058728096ad6277c"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "5aac7d152d0451adc9af726de53f75ef"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "278c3493d3cc242faa845350084abc7f"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "220e0f9bc2d31268fe9254ad7a6dd4ad"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "aea7910ded5a44a6676247cda35930fe"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "3e9effbaa28a95b15688230104640be2"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "050da3cea0e1276f572e2d98c8de8a8f"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "693260c4c74185b04e16b0672371e715"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "9ddbff1451c7205c4b4535fafc04706b"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "03cf02e92e99e1e0ec47843546dddcce"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "fd85927d2be5f59fac89991bc3160ec6"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "668c8672d484c194b972e32d88fd2cf2"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "3ed9c0a69c512209b901cd1d13c73ba0"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "996819570fdcbb56abec43a56ef3a7f0"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "fb21146a153d3fa589522dde97469142"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "9ba52b63e024c9683a0005fb3af61323"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "aacf819061bd0c34278f372957b78d17"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "c4327c3f131dc39ff0823f6ab0142045"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "3df8e73716716c0efab43709eb5e8efa"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "5e71986753a32913e993873bd5d83ca5"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "f7d932f36b9b0d23c402b35a6fc6b092"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "e29b21d7fbbdd51aa60a2a9ba021ddc5"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "3e13b2e89203c3439e1a092f0127e422"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "7ee3c759045cfc8dd5c6874e7eff8f26"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "9a815c1c2cb3523ff3e9f6a1727d271a"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "31edef11830f64f32f07f242c032b2dd"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "8f98db12fa009daf0c75284d36561691"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "bf90b9e02ecb3a9317fae42c11c0daf7"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "8ca8e199d18980cd78b7a68e222a6207"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "1a200efd2efb4f26a8708fed749b674b"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/index.html",
    "revision": "3290c63c700e84127aa3e7572495f941"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "4a6abe841671757b4c580561ed9c5554"
  },
  {
    "url": "2.2.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "f34d0039fba44d120862538aecb9684e"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/commission-management.html",
    "revision": "973f5aab5030d29190e76586ccb9ebd8"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/index.html",
    "revision": "1d23fb2baf846cf1c569360280712b68"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/order-management.html",
    "revision": "8d2762a85c59d4065b6f1abc7f17f5bb"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/payment-management.html",
    "revision": "c34672b83fb923f90311b63f35ec14cf"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/product-management.html",
    "revision": "ddc5f75b9316b070ccd847f41f64372e"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/rating-management.html",
    "revision": "0f83f8d396de45b3cc3a25707b4fd3d5"
  },
  {
    "url": "2.2.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "bcb6d840d6ec044f2d33c59b24fe922c"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "856a4b6e4838d05d7f1155291e09f7b9"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "e969aeb698d7340b48700e4f337c9b88"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "cddd545c0136a344783ab9f93dd8708f"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "059f2ec64f2469992c424440f33a631b"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "7f8e38c659a47ad54a33604031169081"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "62443d9d7211b63d79a5f34e43283ef6"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "01cc0bb6e66ab1ad2f6f3d9396931fe0"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "0a2cf7e2423595498d57b30d9f36f019"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "b133eede2ad8ee1d5309604ea95324ef"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "0375da32364d2ee7ea30b70066c8314a"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "8b89a40d8d786897d7d9b4c221c29dae"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "1873eca402b248c52690b0273d0cd671"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "46108d3a9cb460d777707c9678bdacc8"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "7b19f3bf74339c66a8e1480397131d1e"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "b537a95603c2b6b263ea9cd29cca8e0c"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "44e2f3c2b00a1e3422de31b846ed9d18"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "be82fb4135cdfec35272a6a0bf3f8974"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "59b96debbcb6adb061ded31c4bb34ec1"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "03b6970572229d4dce4d3769daa4442f"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "3755095961c668fdb0066edb40746b55"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "edc8fcc1681f542f41ed8ad2169cc901"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "2697a32a2dd202c9f949b69d233d61f4"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "639dc5565bc770b60a071dd1f5e69f83"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "5e42e5c48e4428afaaf79f1bed51b9fd"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "965196ae7db448588442d19fb4a95b69"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "a4c74bffb569ab8f827dba0e2c847c0a"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "7c17632ebb6c77bb2923048006af109e"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "05b182674791ab94c5042f5043058587"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "14608a09d79a606ee71f2f8ee81f3e66"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "71987950f2299580954af5afdb01a4e4"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "c7f44cc36d15dbd1ef4a7059a02d5560"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "b8035c16684d352ecb50b7c3d1dc93fc"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "a774ddb600b913e9499201dec224b28e"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "da494c6af8f99fbfac8435eec7940350"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "325470dce5df2c8376fdbd2c43d89c9c"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "2ebcb95ab1387a9c4abffc37b4b3444a"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "49d95fdfd8f0e2357504de48c549a8b4"
  },
  {
    "url": "2.3.0/b2b-marketplace/b2b-marketplace-review.html",
    "revision": "1edd609c7ff90f0cce89395fc66c344b"
  },
  {
    "url": "2.3.0/b2b-marketplace/buyer-seller-communication.html",
    "revision": "cd06a1a5f79a5397758b7005d7687646"
  },
  {
    "url": "2.3.0/b2b-marketplace/buying-leads.html",
    "revision": "966bc68ce7fbf84b067ee17824fc57bd"
  },
  {
    "url": "2.3.0/b2b-marketplace/index.html",
    "revision": "6430bade3f339ff7157f88c31b8acdc1"
  },
  {
    "url": "2.3.0/b2b-marketplace/request-for-quotes.html",
    "revision": "6ad9c9057f95b8430dc695aeee845ed6"
  },
  {
    "url": "2.3.0/b2b-marketplace/supplier-microsite.html",
    "revision": "cdd786d61e391ffa6fbd61669fff3087"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "6d132b5ab4b9fdff94053dbedd3e7390"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "131be5e1f967c3d1609cbf72fd900d43"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "3b8c28e0b7e095aa09c0af38c666a345"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "32c35fb368bd2fd520e7a44da2f924ba"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "0f33a6325bce6266e7393aebc9ac475c"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "249196dec2002a4aabf43915a249e8c7"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "65f490f2fc605913cf1d3d4f3d142f76"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "3b63fd4e4799575b43ae90e0aa07c09f"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "cf06526ac63fe25633c2a5b8e7d4216e"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "1bc102f0b997e0627a40af4db9129db3"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "93cff2a4349d2978e5974fe0a3a4e0f2"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "7febb75f4e6175c117c3ace4c65e3140"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "f6276c2903d4babc335e73ec395694df"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "5dcbbae22c82a247638639bdf8ee1fa1"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "49fa6a7cec3df61ed3f78e442033c1f6"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "5e5926d02ea83b23bd20b33b45834c7b"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "96144fed0ebcff43f9d775b68e931eca"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "16ae80984c64fb2d141e36438b3fb032"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "af4aa22a9516a6513db6c58252153fc4"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "0a19c0c608192efe81a2228b269635d7"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "fd1382488995a14745900090f22c2505"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "d20cb68d831cb77012d5405370f83b4c"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "1660b677c07f35638f1e836c7bf0e297"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "768b886ad667b16ae8570141fbe15ce1"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "88b887ad42e318e669416dd601ddcbe2"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "e2bec80f6ced4e72a6cb6052e1abd49a"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "fa4bc9ad91deb165401c86d687ebbebd"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "4eef250ad3a3577d9bc8d81437bdceb8"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "28f5399ab6b82dd76d81341db9e0de6e"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "09c0643de4d7aae21a9d2a6f7390eb36"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "0460a6fec6e084ba87e637dc89fda876"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "0d1ebc8b2e2648e69715abdc9835dddd"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "ab8f187865160124dc350659dc716219"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "d0ed9de2d7569c407ee9c1a7e85bb112"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "648623bef021b45570fbd72c49e2a37c"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "496c62bfa768f97be6aab675a3102607"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "f7a33b5cbadea4611708b6a8e72e4ee1"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "0b3e7bbc64e1d1cd356813b10785694e"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "ee9d32b35a833093458cb7726ddc5fb2"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "320b3a6b523bac30cc2cca204269b3da"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "fb510661e3d8a829467538b06ca56979"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "51fc4f0a8bf5c2bb05da86ee9b6b4a05"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "9cfe6a0dd977e950d75b1e463f86faab"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "026a00ae91761da869b6053e0c3745c0"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "34ba6d3e71c305e2e7ff9dda8ca23860"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "2437dc459e67f68c7ee99747d3e72648"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "648809107a5d2a364d1b40fefffc5165"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "26f586b62a337c3bed02de918be1eebb"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/cname-mapping.html",
    "revision": "5e0c7d7bf5da009f983884468c4886b6"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/index.html",
    "revision": "af60a55d19ef0973898130eaa85d89d6"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/super-admin-management.html",
    "revision": "8b841f65a8a7b48b81b0accc9d6b5107"
  },
  {
    "url": "2.3.0/multi-tenant-ecommerce/tenant-management.html",
    "revision": "ce6542a871211927ab95729751c0c1e2"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/commission-management.html",
    "revision": "c8eeebba5126e4a916714e2c7836d007"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/index.html",
    "revision": "f87366f384f00e8d37c2753c365054dd"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/order-management.html",
    "revision": "c897c679c0fb3afca56fa5574b262392"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/payment-management.html",
    "revision": "05ae3111b5e5681846071db0a0b3b573"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/product-management.html",
    "revision": "9358f07167ddf216f129927de2a4726f"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/rating-management.html",
    "revision": "f184b132b4ced07449578d4aac6b2314"
  },
  {
    "url": "2.3.0/multi-vendor-marketplace/vendor-management.html",
    "revision": "b71a690b927a12f7f4e634f48fe29246"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "8fa73e408abfa34ef374ed408b960725"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "4eaedcb20ff1b4c44e32747f5accaa2d"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "d44d30e0c753a0a8364c454818f889a6"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "a54500f85155765c555e36d5ca390885"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "d4babe680f01e57f4503883a8590eeae"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "af93e51a7f687218c755cc442c9e7a45"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "29f12f8ee8504eae6eee5e244daeb3db"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "97ad6353ad323b496bd3cb63d9746546"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "0c578726186eb3f4cf84c1e6dbda4714"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "41bde3e365c2f4e8fa97496664ca783d"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "5a535b23a7c9114f332de2c6c57c51b3"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "ed97c700bf5e95530408ade1d3295bca"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "788748c2544b38f467865dd96c9f9c00"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "d740d863f60de0dc0e595349e4bb71de"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "8a1e8d398043e56f212c878e3663f042"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "680c619f113e39ba8d228876a9eaf848"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "dcf0df83bd5b305295d2368e13ee4af3"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "ce0d0ac9b8abe8df1c9520109408f84e"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "031014280981fe712cf65942b40bbc30"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "eeb5050bae873c366c5cb4727120ce23"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "58f203efd9dbd710a7ea08adfc8f019a"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "1f08c9589299f5c2f7ffdd85258d0aca"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "e9b9ae86b6ac6e0518dd7ddbc38c006f"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "de615214c507457f9aabb4b489df2292"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "060211f9a8c17b1c532c32b57c99a334"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "76482ea34ee7dc54d3289c3c20db4670"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "b0c4c8b3f1660c031b4b286e5343dd5d"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "3179434ee539cdfb9c511ca433328856"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "69e6d3f5883eaae7d22813ab63a652a5"
  },
  {
    "url": "404.html",
    "revision": "9ed71ff7e5addf5f6f0940806518fa7f"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/1-godaddy.55b4e970.png",
    "revision": "55b4e970a9c3dc8ad0323287df5d0ad2"
  },
  {
    "url": "assets/img/1-guest-sign-in.52afa71b.png",
    "revision": "52afa71b42eff25a33aec8a4aedc9da0"
  },
  {
    "url": "assets/img/1-product-page-msg.204d4d0f.png",
    "revision": "204d4d0f589b09dfa14d43148e657f29"
  },
  {
    "url": "assets/img/1-registration-tenant.23ec4d8d.png",
    "revision": "23ec4d8d0f9cd5dc4c46e6cd608e1971"
  },
  {
    "url": "assets/img/1-seller-dashboard.153db513.png",
    "revision": "153db513847c3df74c38b76b5b2ad7ff"
  },
  {
    "url": "assets/img/1-seller-dashbord.2961c05e.png",
    "revision": "2961c05ead3295ebe68b3166312d8e9c"
  },
  {
    "url": "assets/img/1-seller-payment-request-to-admin.abfbdf27.png",
    "revision": "abfbdf27cff6d5a73fb4c2c96f6c6906"
  },
  {
    "url": "assets/img/1-seller-profile-page.eaa3cf69.png",
    "revision": "eaa3cf6921c95e4b83efa56bfe93f16f"
  },
  {
    "url": "assets/img/1-super-login.d3c8c157.png",
    "revision": "d3c8c15721e98d2ca817f89023a0593d"
  },
  {
    "url": "assets/img/1-supplier-login-button.ee9425e0.png",
    "revision": "ee9425e05062caf0d7349dadbe5766c8"
  },
  {
    "url": "assets/img/1.customer-login-signin-button.8f99e8e1.png",
    "revision": "8f99e8e12ea5020b672ffdfec298907b"
  },
  {
    "url": "assets/img/10-admin-product-review-pending-state.b945c508.png",
    "revision": "b945c508c6d759bd6b4b1533e0e9b710"
  },
  {
    "url": "assets/img/10-approved-last-quotes-button.5b3250ab.png",
    "revision": "5b3250ab1fff9f97bdbfa5c70d5a118e"
  },
  {
    "url": "assets/img/10-customization-item.f45d2721.png",
    "revision": "f45d27217c2d6050c01a35a2372bd691"
  },
  {
    "url": "assets/img/10-policies.431d06d7.png",
    "revision": "431d06d778b07c09a065514801f3934f"
  },
  {
    "url": "assets/img/10-tenant-profile.51c607d0.png",
    "revision": "51c607d0428a067abab9bd08d1119ccb"
  },
  {
    "url": "assets/img/11-admin-select-action.9299c048.png",
    "revision": "9299c04800f10a5c62a5ea781a3d7bfd"
  },
  {
    "url": "assets/img/11-price.91cf49f2.png",
    "revision": "91cf49f23764be0e43f8a38b8f609468"
  },
  {
    "url": "assets/img/11-quotes-confirm-by-customer.0530bb9f.png",
    "revision": "0530bb9faac00c36ab4fa8dbf748f49e"
  },
  {
    "url": "assets/img/11-social-links.371f78b4.png",
    "revision": "371f78b4d1906dc64e0e5dfe8271eddb"
  },
  {
    "url": "assets/img/12-admin-product-approved-state.14b41e6b.png",
    "revision": "14b41e6b05ca679de8c3451fd3ffb695"
  },
  {
    "url": "assets/img/12-buying-leads-seller.bfa02d8f.png",
    "revision": "bfa02d8f616b60799e40c108699efb8e"
  },
  {
    "url": "assets/img/12-seo.347ce8a2.png",
    "revision": "347ce8a2831b7e60cc092716d6224333"
  },
  {
    "url": "assets/img/12-shipping.4fff4598.png",
    "revision": "4fff45987be6de4946967b1c6caed327"
  },
  {
    "url": "assets/img/13-admin-customer-review.456e143c.png",
    "revision": "456e143cb70d5bedbeacd98165e27c88"
  },
  {
    "url": "assets/img/13-send-quote-request-to-customer.362fd7a5.png",
    "revision": "362fd7a5204944e85712b8fa47545d11"
  },
  {
    "url": "assets/img/13-setting.b03a2298.png",
    "revision": "b03a2298a09509b1a2e69cb3e178526e"
  },
  {
    "url": "assets/img/13-store-frontend.3db5f5a1.png",
    "revision": "3db5f5a1415ef515ac5a898a82a09c13"
  },
  {
    "url": "assets/img/14-inventory-and-category.d51fe2b6.png",
    "revision": "d51fe2b63acf9352033b0cc99b5cdfc9"
  },
  {
    "url": "assets/img/14-req-ans-by-seller.c1f208b2.png",
    "revision": "c1f208b2f07fbafb6061a54904a32251"
  },
  {
    "url": "assets/img/14-seller-profile-review.abee2844.png",
    "revision": "abee2844dbe574a0192ac3156963711d"
  },
  {
    "url": "assets/img/15-product-disapproved-state.5ff7ceba.png",
    "revision": "5ff7cebacec6692761bc008037920944"
  },
  {
    "url": "assets/img/15-seller-review-submit.3596b6cf.png",
    "revision": "3596b6cfb6b049bdb9afdb99c30a36bd"
  },
  {
    "url": "assets/img/16-admin-product-page.10e67f4c.png",
    "revision": "10e67f4cf8f5d1e17965756ac37b8624"
  },
  {
    "url": "assets/img/16-admin-seller-reviews-pending-page.45ce9c70.png",
    "revision": "45ce9c70afb533b10f8c8fcac4d69640"
  },
  {
    "url": "assets/img/17-admin-seller-select-action.903392f4.png",
    "revision": "903392f4a7f5572d14541bf965682f7d"
  },
  {
    "url": "assets/img/17-admin-update-status.c4bd6e1d.png",
    "revision": "c4bd6e1d8f797bba10547608ee926972"
  },
  {
    "url": "assets/img/18-admin-approved-seller-review.7c853842.png",
    "revision": "7c853842e7320af7d22013ef7a40dd2a"
  },
  {
    "url": "assets/img/19-Seller-profile-review-page.8cea9537.png",
    "revision": "8cea953762c14386dd34bf03aadbc8c7"
  },
  {
    "url": "assets/img/1frontend.60a9f83d.png",
    "revision": "60a9f83d3897ccfc85b19edaa45be0da"
  },
  {
    "url": "assets/img/1homepage.6bc15315.png",
    "revision": "6bc15315d10f260cb7434bb1132632c1"
  },
  {
    "url": "assets/img/1mycart.fea04e56.png",
    "revision": "fea04e5670e65fc427e521a15ff61b17"
  },
  {
    "url": "assets/img/2-buying-leads.8d9e21e5.png",
    "revision": "8d9e21e569011c3579cbaf5189067a7f"
  },
  {
    "url": "assets/img/2-create-supplier.4426308c.png",
    "revision": "4426308c4b6eeb545e040025f7654c8f"
  },
  {
    "url": "assets/img/2-customer-email-pwd.ee3a22fa.png",
    "revision": "ee3a22fa92be9d4b73d8190032376888"
  },
  {
    "url": "assets/img/2-customer-login.4e8a775f.png",
    "revision": "4e8a775fa4ed8035d1ad504259696d3e"
  },
  {
    "url": "assets/img/2-product-page.aea4908d.png",
    "revision": "aea4908db5c12f32b2b2f51f72e049ae"
  },
  {
    "url": "assets/img/2-registration-tenant.9e533e82.png",
    "revision": "9e533e8262e6ad59b0902f9eda82baa9"
  },
  {
    "url": "assets/img/2-seller-transtion.e2c2379a.png",
    "revision": "e2c2379abfd3bf215c83d713ade1ff85"
  },
  {
    "url": "assets/img/2-super-dashboard.d91b3a81.png",
    "revision": "d91b3a81ae12582126709895b66a1057"
  },
  {
    "url": "assets/img/2-write-a-review.0a62119d.png",
    "revision": "0a62119d8c5a2ee5d056e160759ff100"
  },
  {
    "url": "assets/img/2-write-msg.404c8306.png",
    "revision": "404c83064de1a07addf9d31dcf267ccc"
  },
  {
    "url": "assets/img/20-product-frontend-view.87dd32a5.png",
    "revision": "87dd32a5145c688f16d163d56e1bbd4b"
  },
  {
    "url": "assets/img/21-search-product.45f5ad86.png",
    "revision": "45f5ad86c466fe8f79487a2eb5eb4e45"
  },
  {
    "url": "assets/img/22-assign-produt-details.58f7b4d5.png",
    "revision": "58f7b4d584df6c9238abf77da8e39da0"
  },
  {
    "url": "assets/img/23-assign-product-disapproved.aa20cd92.png",
    "revision": "aa20cd926f42d9ab6154f2561b989527"
  },
  {
    "url": "assets/img/28-assign-product-store-frontend.8e8c9002.png",
    "revision": "8e8c900258dd5ae255c18e9715a72e31"
  },
  {
    "url": "assets/img/3-admin-payment-request-byseller.a1dab1fe.png",
    "revision": "a1dab1fe0596f55d581366d02e7dd2d5"
  },
  {
    "url": "assets/img/3-admin-suppliers-disapproved-state.8413280b.png",
    "revision": "8413280b9c04b1e82aaf67915b4f65f1"
  },
  {
    "url": "assets/img/3-customer-profile-page.87289c2f.png",
    "revision": "87289c2f9ab573340cffe2942c314cb9"
  },
  {
    "url": "assets/img/3-message-box.fe8f775c.png",
    "revision": "fe8f775ce1d1df9fdf139599eb3952ee"
  },
  {
    "url": "assets/img/3-product-creation.2ae8a534.png",
    "revision": "2ae8a5345fdfd60144d87ddbc9d298a7"
  },
  {
    "url": "assets/img/3-product-review.ca4e7643.png",
    "revision": "ca4e76438d32b5ebb20a7c28d3e3f67a"
  },
  {
    "url": "assets/img/3-registration-tenant.9607e800.png",
    "revision": "9607e8002bdaed83bfc906a0babc6a4f"
  },
  {
    "url": "assets/img/3-review-msg.93e4f25a.png",
    "revision": "93e4f25a007301f65db4d9c251ee539f"
  },
  {
    "url": "assets/img/3-super-create-tenant.f662b40f.png",
    "revision": "f662b40f10c73b59d905b793d8041d23"
  },
  {
    "url": "assets/img/3-super-tenants.ee5f2d80.png",
    "revision": "ee5f2d8062c2bc3c5c83d0f7cf52196c"
  },
  {
    "url": "assets/img/3-supplier-msg.524459c5.png",
    "revision": "524459c54e83f439b5c8e206408f0483"
  },
  {
    "url": "assets/img/4-create-new-product.cf9d0665.png",
    "revision": "cf9d0665acd501fe45e531fa6ccbe3b1"
  },
  {
    "url": "assets/img/4-customer-product-submit.53ce57dc.png",
    "revision": "53ce57dcedb1e97bfb8fc80db862b163"
  },
  {
    "url": "assets/img/4-edit-tenant.f02d2c72.png",
    "revision": "f02d2c72ef418610260a3f400d0f1453"
  },
  {
    "url": "assets/img/4-message-communication.2ad412f4.png",
    "revision": "2ad412f4a840e53e4f4a0a62adf46aef"
  },
  {
    "url": "assets/img/4-popup.e86f1cf0.png",
    "revision": "e86f1cf0ccdf8e1950f0fe9e25a647f1"
  },
  {
    "url": "assets/img/4-quote-info.7ab8fc9c.png",
    "revision": "7ab8fc9c64238e06cc43e9710cde6b7e"
  },
  {
    "url": "assets/img/4-reply-to-supplier.e13f7f95.png",
    "revision": "e13f7f95def4ce50c2dcf99f90e9883a"
  },
  {
    "url": "assets/img/4-review-unapproved-state.82a94362.png",
    "revision": "82a94362e60bca2fea2b3f4795421c32"
  },
  {
    "url": "assets/img/4-Super-tenant-Insights.bdd69873.png",
    "revision": "bdd698736b2573973d6e005b76b19a9d"
  },
  {
    "url": "assets/img/4-supplier-approved-by-admin.dd11d306.png",
    "revision": "dd11d306bad1810709f8c4d18c316bbe"
  },
  {
    "url": "assets/img/4-tenant-store.e62ae897.png",
    "revision": "e62ae89712b98e70d6397672d2680012"
  },
  {
    "url": "assets/img/5-admin-transaction.2640b420.png",
    "revision": "2640b420dd5a42f97680d9eb96a83917"
  },
  {
    "url": "assets/img/5-contact-info.9fb66d81.png",
    "revision": "9fb66d811c0de92f1da0340f798f6e84"
  },
  {
    "url": "assets/img/5-general-arrtibute.521ccee5.png",
    "revision": "521ccee561a438a47cdb7c786df77bc4"
  },
  {
    "url": "assets/img/5-reply-to-customer.98c858ae.png",
    "revision": "98c858ae63df8ca607fc2534a7f3be41"
  },
  {
    "url": "assets/img/5-select-action.487dcf74.png",
    "revision": "487dcf74bbbd2a69c79d926a6aa05733"
  },
  {
    "url": "assets/img/5-seller-dashboard-product-review.b1747eb4.png",
    "revision": "b1747eb4ce62f4d615279119ea9dc6d3"
  },
  {
    "url": "assets/img/5-send-quote.28b779a0.png",
    "revision": "28b779a06f42a3fa3037bcadcb252704"
  },
  {
    "url": "assets/img/5-super-edit-tenant.19413be0.png",
    "revision": "19413be07791e590f6f8b13827b65a4b"
  },
  {
    "url": "assets/img/5-supplier-sign-in.14727708.png",
    "revision": "14727708fdc18d6962becee72161cf43"
  },
  {
    "url": "assets/img/5-tenant-dashboard.588b75de.png",
    "revision": "588b75de84f51e76408769813d9ab3d0"
  },
  {
    "url": "assets/img/5-tenant-store.8c547917.png",
    "revision": "8c547917f4f02bea0a77945fa386b383"
  },
  {
    "url": "assets/img/6-approved.5bb664b3.png",
    "revision": "5bb664b353389c3130f84ef1e227f503"
  },
  {
    "url": "assets/img/6-order.26515697.png",
    "revision": "2651569775d86c8d7a24dbe2f85e53c9"
  },
  {
    "url": "assets/img/6-product-info.47242d57.png",
    "revision": "47242d57cd156a0edd1419e5c377da85"
  },
  {
    "url": "assets/img/6-rfq.56e168b8.png",
    "revision": "56e168b8e19977461ceb20d91e24bd95"
  },
  {
    "url": "assets/img/6-seller-product-review-pending-state.ae7f1d44.png",
    "revision": "ae7f1d44718f1831332442dcbc7ee6ab"
  },
  {
    "url": "assets/img/6-Short-description.c8ad9733.png",
    "revision": "c8ad97335d9e182c9c56753c599e7767"
  },
  {
    "url": "assets/img/6-super-delete-tenant.d91b3a81.png",
    "revision": "d91b3a81ae12582126709895b66a1057"
  },
  {
    "url": "assets/img/6-supplier-dashboard.0b60c8e9.png",
    "revision": "0b60c8e98509379d9b57d132299ffc56"
  },
  {
    "url": "assets/img/7-description.403ff5ef.png",
    "revision": "403ff5ef1b1df9465dc0e08eb4c24cea"
  },
  {
    "url": "assets/img/7-invoice.c4dcad07.png",
    "revision": "c4dcad0794a4f3882ee22b4c71d1a5c6"
  },
  {
    "url": "assets/img/7-popup-rfq.da0c26be.png",
    "revision": "da0c26be484f35513957e073d4a12573"
  },
  {
    "url": "assets/img/7-profile-banner-and-logo.5724602f.png",
    "revision": "5724602ff43a088b69b50448e4a60eaa"
  },
  {
    "url": "assets/img/7-seller-product-select-action.91cf5db7.png",
    "revision": "91cf5db777cedb79e6842c5f239600e6"
  },
  {
    "url": "assets/img/7-store-frontend.20b45665.png",
    "revision": "20b45665876ee4735da283d47837fc14"
  },
  {
    "url": "assets/img/7-super-customer-list.af1b595e.png",
    "revision": "af1b595e220dcd1f1eb059f5e966dc09"
  },
  {
    "url": "assets/img/7-supplier-review.7906bf68.png",
    "revision": "7906bf68a81bd0669dadb2bb081f4ff0"
  },
  {
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
  },
  {
    "url": "assets/img/8-create-shipment.11fe78e8.png",
    "revision": "11fe78e8928b16ea5030352c880c997e"
  },
  {
    "url": "assets/img/8-general-and-operational-address.86298b5a.png",
    "revision": "86298b5aa0e8eb22d5de809332eb259d"
  },
  {
    "url": "assets/img/8-meta-description.2a261e75.png",
    "revision": "2a261e75b401ee0ccd3ff6aae5eed3d5"
  },
  {
    "url": "assets/img/8-product-review-approved-state-seller.9837053c.png",
    "revision": "9837053c095f3bae3a0feb14c1b0dcdf"
  },
  {
    "url": "assets/img/8-redirect-page.c27b2a54.png",
    "revision": "c27b2a54ebea91be2b76efd366b9aee5"
  },
  {
    "url": "assets/img/8-review-at-frontend.a7af756e.png",
    "revision": "a7af756ef414cc5ab5d12f113fbc8bd0"
  },
  {
    "url": "assets/img/8-super-product-list.36db1aea.png",
    "revision": "36db1aea8f21708e408a1a3f476d570c"
  },
  {
    "url": "assets/img/9-corporate-address-and-about-shop.47497d53.png",
    "revision": "47497d536f6fcc11d074d04103a86de9"
  },
  {
    "url": "assets/img/9-customer-review-for-procuct-seller.c7c53655.png",
    "revision": "c7c53655f4d0276a1d3d062118827db1"
  },
  {
    "url": "assets/img/9-Img.ae77bbc5.png",
    "revision": "ae77bbc57ea2aab59e024a6911cfde56"
  },
  {
    "url": "assets/img/9-product.a7b812ec.png",
    "revision": "a7b812ecaa43a00c778fa3e319dce691"
  },
  {
    "url": "assets/img/9-super-order-list.8ae4947a.png",
    "revision": "8ae4947ab9f0124467a1d2f5bc2c435e"
  },
  {
    "url": "assets/img/9-supplier-responsenew.5cb86562.png",
    "revision": "5cb86562461613c1be5c2c9e73db85db"
  },
  {
    "url": "assets/img/abandoned-cart.40d28282.png",
    "revision": "40d282829a330c99a715eed34402753b"
  },
  {
    "url": "assets/img/aboutstore-sociallinkt.146b2de0.png",
    "revision": "146b2de06e6838caff8dd36ef2586718"
  },
  {
    "url": "assets/img/accessControl.76a3d346.png",
    "revision": "76a3d3469396fe88d18e5ee5aaa1a19a"
  },
  {
    "url": "assets/img/add-slot.f443a0e2.png",
    "revision": "f443a0e2e02e4ab8691ccb4f8e09d389"
  },
  {
    "url": "assets/img/address.54c54bb8.png",
    "revision": "54c54bb834084ac699488810bd27877b"
  },
  {
    "url": "assets/img/address.73f9d9c3.png",
    "revision": "73f9d9c3c0accc57e57c570a4e5e1bd6"
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
    "url": "assets/img/adminOrder.c87ffdf0.png",
    "revision": "c87ffdf09c7707c0396195d25f4a113d"
  },
  {
    "url": "assets/img/adminReorder.95b00c0d.png",
    "revision": "95b00c0d6f0e1e733882929a7fad3f9f"
  },
  {
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
  },
  {
    "url": "assets/img/allowReorder.bcf70145.png",
    "revision": "bcf701459c18156b50cbeb2789b7addf"
  },
  {
    "url": "assets/img/applyCoupon.1fd0032b.png",
    "revision": "1fd0032b9015a51ef289c19eb6a0a09e"
  },
  {
    "url": "assets/img/appointment-duration.86c30215.png",
    "revision": "86c302159028e4ccf728cfec91c6d9a7"
  },
  {
    "url": "assets/img/appointment.011047ff.png",
    "revision": "011047ff7a21be2a353ad09cfcaf05b6"
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
    "url": "assets/img/average-order-value.69fd907e.png",
    "revision": "69fd907e92e903d661ce74438d838c9d"
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
    "url": "assets/img/banner-logo.dbe4541b.png",
    "revision": "dbe4541b0d337a44377377460c241fb7"
  },
  {
    "url": "assets/img/bill.3dc36a38.png",
    "revision": "3dc36a3808a0e6c75efcceb8cc7c0836"
  },
  {
    "url": "assets/img/billAddress.3e38faa1.png",
    "revision": "3e38faa114ff98f1763a700e9b881960"
  },
  {
    "url": "assets/img/billingAddress.89151ce8.png",
    "revision": "89151ce8150f7098db13961aef747ca0"
  },
  {
    "url": "assets/img/booking-type.1471d100.png",
    "revision": "1471d100ce40213e1b19f5118b9c1aac"
  },
  {
    "url": "assets/img/both-basis.412f1c79.png",
    "revision": "412f1c79fb6cbc9d6d4c2c93a6ce762c"
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
    "url": "assets/img/buyNow.2683aa9c.png",
    "revision": "2683aa9c5033194aa12b7c5222915613"
  },
  {
    "url": "assets/img/calender-view.f7c3ffa9.png",
    "revision": "f7c3ffa9d46b8b4d0390d0cffe81595b"
  },
  {
    "url": "assets/img/calender.9f451667.png",
    "revision": "9f451667563e5247c3ea4b7430613796"
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
    "url": "assets/img/cancel-button.c541daec.png",
    "revision": "c541daec0df51c57125208994d380af7"
  },
  {
    "url": "assets/img/cancelled.63029149.png",
    "revision": "6302914901deeeb085dacf080ace87f2"
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
    "url": "assets/img/catAdmin.dabb8c35.png",
    "revision": "dabb8c35436d23f43f4a7ca5b405cc8f"
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
    "url": "assets/img/catSide.ffabd07f.png",
    "revision": "ffabd07f8c2548322f4dc8d7c17e84e9"
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
    "url": "assets/img/checkout.ab9b0f97.png",
    "revision": "ab9b0f976dfe52f807452715beb19d82"
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
    "url": "assets/img/command.9351feae.png",
    "revision": "9351feaecaec23c14bbc13be7942a439"
  },
  {
    "url": "assets/img/complete.076010b3.png",
    "revision": "076010b35c5a136dd4f8167a800dcb7e"
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
    "url": "assets/img/configure_commission.beeb6947.png",
    "revision": "beeb694765720a312cbf38d96e501957"
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
    "url": "assets/img/content.7e1b8e48.png",
    "revision": "7e1b8e486e6c73a245083b7239471f9d"
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
    "url": "assets/img/contentspec.67545044.png",
    "revision": "67545044fe5fc1c5d5dbce946f640f56"
  },
  {
    "url": "assets/img/cookies-position.bcba3078.png",
    "revision": "bcba30784d5b2c9e2c01881c11610bed"
  },
  {
    "url": "assets/img/cookies-Preferences.0a706068.png",
    "revision": "0a706068aaa824c26b3b949c44acd897"
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
    "url": "assets/img/create-invoice.74a5bc54.png",
    "revision": "74a5bc54c034fb31fa853432c2a18975"
  },
  {
    "url": "assets/img/create-product.de3763bd.png",
    "revision": "de3763bd35b420fae98e2bd46f259ddb"
  },
  {
    "url": "assets/img/create-ship.82246059.png",
    "revision": "82246059231c0b13b1f529c9a1367cd7"
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
    "url": "assets/img/createTransaction.71680d0a.png",
    "revision": "71680d0a0aebb6babfc0564d1b12ef1d"
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
    "url": "assets/img/custom-shoes.3855e8a7.png",
    "revision": "3855e8a774d155b4316a5c8cd91af44d"
  },
  {
    "url": "assets/img/custom.bad01684.png",
    "revision": "bad01684012cb08bd3bf4e36c39ec5e6"
  },
  {
    "url": "assets/img/customer-group.b2e8d240.png",
    "revision": "b2e8d24057db830319da6ab27135a77d"
  },
  {
    "url": "assets/img/customer-most-order.ab12bc7e.png",
    "revision": "ab12bc7ed09a30f4b9735fd7301d3d5a"
  },
  {
    "url": "assets/img/customer-most-review.2e3306dd.png",
    "revision": "2e3306dd0b905807240960ec38f5e4ad"
  },
  {
    "url": "assets/img/customer-traffic.cb4d6371.png",
    "revision": "cb4d6371213745f5544b2905247b7507"
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
    "url": "assets/img/customization.3b816a28.png",
    "revision": "3b816a283d78e65c0a6da9a6906323bc"
  },
  {
    "url": "assets/img/customization.ee6ffc23.png",
    "revision": "ee6ffc2366ed4d947c9c00ab7fe80f85"
  },
  {
    "url": "assets/img/dashboard-manage-profile.58168eb8.png",
    "revision": "58168eb87b38e41d0ff22ed79724d274"
  },
  {
    "url": "assets/img/dashboard-order.58168eb8.png",
    "revision": "58168eb87b38e41d0ff22ed79724d274"
  },
  {
    "url": "assets/img/default-booking.01849695.png",
    "revision": "018496952ec06f81d7b36837cb6df20c"
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
    "url": "assets/img/description.b1ef58bc.png",
    "revision": "b1ef58bcfccd11a44c92be2741854a59"
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
    "url": "assets/img/design.242fdac4.png",
    "revision": "242fdac496c51c86a3441fbfa1957133"
  },
  {
    "url": "assets/img/design.3a73ffcb.png",
    "revision": "3a73ffcb7572045dddabe71e47447436"
  },
  {
    "url": "assets/img/designOutput.9f21e89f.png",
    "revision": "9f21e89ff570e9fa4bafe0a6248d57ba"
  },
  {
    "url": "assets/img/designOutput.c4642cb8.png",
    "revision": "c4642cb8d8e8c75bb2096f11e22521e3"
  },
  {
    "url": "assets/img/designOutput2.f072f094.png",
    "revision": "f072f094c679f8c291199b166ded471a"
  },
  {
    "url": "assets/img/destination.6deed041.png",
    "revision": "6deed041fc5339ded21e4918591a455b"
  },
  {
    "url": "assets/img/disableminiCart.4a099c89.png",
    "revision": "4a099c89ed6b902f3af25fcba3a1b832"
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
    "url": "assets/img/duration.849dd4ce.png",
    "revision": "849dd4ceae32bc631055dca8fb8748f8"
  },
  {
    "url": "assets/img/edit-product.795e7782.png",
    "revision": "795e7782de26403aa2a2b3b9b1be9607"
  },
  {
    "url": "assets/img/edit-profile.21bff29b.png",
    "revision": "21bff29b1f516ffd9bb154dbb440f8ce"
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
    "url": "assets/img/emailSetting.861f2aa4.png",
    "revision": "861f2aa493357812b89efe051baaa4a5"
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
    "url": "assets/img/event-booking.33f16931.png",
    "revision": "33f169316c2470813bc66b473b605f5a"
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
    "url": "assets/img/excludeTax.ca9ac8ea.png",
    "revision": "ca9ac8ea55c2fe44feebf857f259cf52"
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
    "url": "assets/img/frontend2.148bb3d9.png",
    "revision": "148bb3d9154bb53d2431e757cae76554"
  },
  {
    "url": "assets/img/frontend2.864a8940.png",
    "revision": "864a894032e86df0e8cd907d60957280"
  },
  {
    "url": "assets/img/frontend3.8cf117d6.png",
    "revision": "8cf117d65c8bd306f0fd94347b06e7bc"
  },
  {
    "url": "assets/img/frontend3.eabff820.png",
    "revision": "eabff820731fe9ccc11cb51642570f78"
  },
  {
    "url": "assets/img/frontend4.2e6593e2.png",
    "revision": "2e6593e2b87e9d87d1991c250b0527c8"
  },
  {
    "url": "assets/img/frontend5.eed29077.png",
    "revision": "eed2907742fe5034f078de31c76f15e5"
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
    "url": "assets/img/frontreorder.22b948e2.png",
    "revision": "22b948e2b1b2378d14827dee2e387096"
  },
  {
    "url": "assets/img/gdpr-agreement.7ac81b74.png",
    "revision": "7ac81b74bd66792f67ef20f4f625418b"
  },
  {
    "url": "assets/img/gdpr-agreement2.47141f66.png",
    "revision": "47141f669aac6be789eeebaa121da930"
  },
  {
    "url": "assets/img/gdpr-message.0fa31f5d.png",
    "revision": "0fa31f5d75b428ae639522e07dc5ff3c"
  },
  {
    "url": "assets/img/gdpr-request.839731e3.png",
    "revision": "839731e3e3f72a1d48c97e520dacca98"
  },
  {
    "url": "assets/img/gdpr-status.d0a0ef87.png",
    "revision": "d0a0ef87ad696b4cb44037d65cc1a94e"
  },
  {
    "url": "assets/img/gdpr1.526b5a64.png",
    "revision": "526b5a646882a0367ffc008ac98e2588"
  },
  {
    "url": "assets/img/general.5849fe78.png",
    "revision": "5849fe78c23e9940aa3c4bab5eb717a8"
  },
  {
    "url": "assets/img/gridmode.74754395.png",
    "revision": "747543955a832346c7beaa7d39568ff8"
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
    "url": "assets/img/header.29950b1c.png",
    "revision": "29950b1c7b632f9f7922feb01f721825"
  },
  {
    "url": "assets/img/homepage.6bc15315.png",
    "revision": "6bc15315d10f260cb7434bb1132632c1"
  },
  {
    "url": "assets/img/hourly-basis.21c795c2.png",
    "revision": "21c795c2f086d40da1312cca586ff568"
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
    "url": "assets/img/images.f98aa4ee.png",
    "revision": "f98aa4ee292000aba41322d91160024a"
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
    "url": "assets/img/includeexcludeBoth.0cd8803b.png",
    "revision": "0cd8803b37bd819db03d7464e8a1e441"
  },
  {
    "url": "assets/img/includeTax.d3a03586.png",
    "revision": "d3a035865b78aa7dafd152de912d4631"
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
    "url": "assets/img/invoice.ed818124.png",
    "revision": "ed818124a62153f919036c140f7a3e35"
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
    "url": "assets/img/itemQuantity.c04ba958.png",
    "revision": "c04ba958e61a9aa20469869e477527b6"
  },
  {
    "url": "assets/img/items.33946b16.png",
    "revision": "33946b16a190e59f25ac0c4392f12443"
  },
  {
    "url": "assets/img/js.c347da35.png",
    "revision": "c347da35f27b670819805af58578695c"
  },
  {
    "url": "assets/img/last-searchTerm.9aea5eda.png",
    "revision": "9aea5edaab70881c5e2f17dd7dfa12a2"
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
    "url": "assets/img/listmode.c8699863.png",
    "revision": "c86998630824813567c96ac7d20a4ed5"
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
    "url": "assets/img/Meta-desc.09fbcbab.png",
    "revision": "09fbcbabadfdea2339a4aa296a6425f5"
  },
  {
    "url": "assets/img/meta-fields.8fd70f1b.png",
    "revision": "8fd70f1b7e5a02a64c3cf36590a5c7f2"
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
    "url": "assets/img/mini-cart.6439a672.png",
    "revision": "6439a6720799a5062489518f7dc83cfa"
  },
  {
    "url": "assets/img/mini-cart1.cc6fcbbf.png",
    "revision": "cc6fcbbf7b7c1d7acdb214369078169f"
  },
  {
    "url": "assets/img/moneyTransfer.d78c9eeb.png",
    "revision": "d78c9eebbc07cf1dbcc0e20c2ca0a2ef"
  },
  {
    "url": "assets/img/msg-popup.299dfbac.png",
    "revision": "299dfbac2f8718055c58412b7ad06d28"
  },
  {
    "url": "assets/img/new-slots.1863be66.png",
    "revision": "1863be665ddc8b63c18090a5c137495b"
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
    "url": "assets/img/news.da67ed03.png",
    "revision": "da67ed0331fdd3a5bfad7054438d3e01"
  },
  {
    "url": "assets/img/newsletter.c363c83a.png",
    "revision": "c363c83a145fe9742343bf1dab91bd34"
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
    "url": "assets/img/numberItems.a5fcac32.png",
    "revision": "a5fcac321184a03259d7db4bbc4c4f12"
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
    "url": "assets/img/order-page.682a70c4.png",
    "revision": "682a70c4eafc3ea5e19f204e4f9dbc86"
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
    "url": "assets/img/orderPlace.c0ba8da5.png",
    "revision": "c0ba8da5e4cde026b7ee7268b94b1717"
  },
  {
    "url": "assets/img/orderSettings.f4ab6c13.png",
    "revision": "f4ab6c13c25e37cd93dde2287785c7a8"
  },
  {
    "url": "assets/img/other.de9bb79b.png",
    "revision": "de9bb79b1f5e1bb89519f95b3a23523b"
  },
  {
    "url": "assets/img/outofstock.383c7271.png",
    "revision": "383c727177947943215434993682c870"
  },
  {
    "url": "assets/img/output.16c1b819.png",
    "revision": "16c1b819868428bcdd6f034f1d5d66a8"
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
    "url": "assets/img/paymentmethod.50f0f3d5.png",
    "revision": "50f0f3d52b4b753d936b49e9356dfe2a"
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
    "url": "assets/img/pending-status-invoice.f1cc4df3.png",
    "revision": "f1cc4df31e6d3348eccfb3a63e7f5c35"
  },
  {
    "url": "assets/img/personalizedCheckout.0a465abe.png",
    "revision": "0a465abefe3c21e37d6644363e8c21a0"
  },
  {
    "url": "assets/img/personalizedCheckout.a6f6b184.png",
    "revision": "a6f6b1842f555ec1b60c1ca29b7a65ed"
  },
  {
    "url": "assets/img/placeOrder.4b5ab597.png",
    "revision": "4b5ab5978315613992e24f88515d4db7"
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
    "url": "assets/img/privacy-policy.4b89ff16.png",
    "revision": "4b89ff165768a80451a61028b10004cb"
  },
  {
    "url": "assets/img/processing-state.9ce1844e.png",
    "revision": "9ce1844ef2e0a9f2c7c235d7fc6d0a41"
  },
  {
    "url": "assets/img/product-review.832df4ac.png",
    "revision": "832df4ac826b534b3d1bfb0821363fd2"
  },
  {
    "url": "assets/img/product-visits.c040062e.png",
    "revision": "c040062e393eb3349d29e5f25c512333"
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
    "url": "assets/img/products-quantity.a06852b1.png",
    "revision": "a06852b1b1f3820dda928e5afc3df529"
  },
  {
    "url": "assets/img/products-wishlist.269e3206.png",
    "revision": "269e3206e5340715882c5b0d01ab7dba"
  },
  {
    "url": "assets/img/products.3865c39b.png",
    "revision": "3865c39b4ef983793361bb01e55b8403"
  },
  {
    "url": "assets/img/purchase-funnel.97aef38c.png",
    "revision": "97aef38c811c7dc146ed8935c2051156"
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
    "url": "assets/img/refund.d66c6517.png",
    "revision": "d66c6517591e4fbbbb23f8b881f274c9"
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
    "url": "assets/img/reorder.20a44d56.png",
    "revision": "20a44d567c5c2ebc58ee88c05aad13ae"
  },
  {
    "url": "assets/img/reorderAddress.e6723f30.png",
    "revision": "e6723f303700199f3b8ad8ad9c7c2918"
  },
  {
    "url": "assets/img/reorderOutput.38c4eec0.png",
    "revision": "38c4eec04252cdb695e1f47d6810fde8"
  },
  {
    "url": "assets/img/return-policy.da7d6769.png",
    "revision": "da7d6769f6dfd446c9a8be6374639a7b"
  },
  {
    "url": "assets/img/revenue-products.a40f8679.png",
    "revision": "a40f86797d05794666e995347483083c"
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
    "url": "assets/img/reviewMagic.a6377095.png",
    "revision": "a6377095f839990b377eda2ca3b079c6"
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
    "url": "assets/img/Save.9cda1a3e.png",
    "revision": "9cda1a3ee7363132492849c1ae8edd44"
  },
  {
    "url": "assets/img/saveCategory.89f05b5c.png",
    "revision": "89f05b5cf82a626e6691689505f2fba0"
  },
  {
    "url": "assets/img/saveCurrency.d61ef1e7.png",
    "revision": "d61ef1e7e058aaf2df07595c9f15af22"
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
    "url": "assets/img/saveTheme.d74db5b4.png",
    "revision": "d74db5b4d4c3f8885223fcb19f6c6701"
  },
  {
    "url": "assets/img/saveTheme.fece12f0.png",
    "revision": "fece12f03744c824b2525579e71d93f6"
  },
  {
    "url": "assets/img/saveTransaction.33483e9f.png",
    "revision": "33483e9fe758a9e416ce7414e1c39635"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/searchCustomer.95d5654c.png",
    "revision": "95d5654c56267778606419349014da53"
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
    "url": "assets/img/searchProduct.6f685a4a.png",
    "revision": "6f685a4a8ec35e726ff2cffcfe26a21e"
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
    "url": "assets/img/seller_commission.7f1f6001.png",
    "revision": "7f1f6001cadff9b1a0b348f1351ee3ae"
  },
  {
    "url": "assets/img/Seller-login.ab4ee7fd.png",
    "revision": "ab4ee7fd70edc3eabab6d4af1bd12426"
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
    "url": "assets/img/Ship-button.c021281c.png",
    "revision": "c021281c66b1a6bcacf272b05f8cc4c8"
  },
  {
    "url": "assets/img/Shipment.6d5b9ae0.png",
    "revision": "6d5b9ae0721976d5ab38a07fc48713bb"
  },
  {
    "url": "assets/img/shipmentOutput.3e0d9740.png",
    "revision": "3e0d9740c504c803c7e8cea13595ed43"
  },
  {
    "url": "assets/img/shipping-collected.d2126828.png",
    "revision": "d21268289fb68775e60ac70cdf6cf6b6"
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
    "url": "assets/img/shippingOutput.028aea9a.png",
    "revision": "028aea9ac047f921d6d8925b81b6f64e"
  },
  {
    "url": "assets/img/shoppingCart.a89412b1.png",
    "revision": "a89412b1e66c5f066c6f162baccbd2a4"
  },
  {
    "url": "assets/img/simple-product.ddb1ac42.png",
    "revision": "ddb1ac42f19502140c2055e41cba8496"
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
    "url": "assets/img/slot-duration.97d528dc.png",
    "revision": "97d528dc99f4c126c6bcac25a239c60f"
  },
  {
    "url": "assets/img/slot2.f53bdadc.png",
    "revision": "f53bdadc215bb8b77c77ed50ea770c8e"
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
    "url": "assets/img/sold-products.af8d9c44.png",
    "revision": "af8d9c44e608f4af48d1c875b6a42974"
  },
  {
    "url": "assets/img/sourceAddress.ee2e69a5.png",
    "revision": "ee2e69a5700fec03accb2b06a106d51d"
  },
  {
    "url": "assets/img/store-address.5bf07654.png",
    "revision": "5bf0765472ce938bf7204082c7014d58"
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
    "url": "assets/img/table-booking.ed1d9c74.png",
    "revision": "ed1d9c746f27cf8483fae799845bf07c"
  },
  {
    "url": "assets/img/table-duration.25063880.png",
    "revision": "250638802b8bcdd539b599c7d98a6d81"
  },
  {
    "url": "assets/img/table.aa2f4277.png",
    "revision": "aa2f4277b7c83ce60c0aedd6e2321edb"
  },
  {
    "url": "assets/img/tax-collected.07bbefb7.png",
    "revision": "07bbefb72f03e792cd3042113103b328"
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
    "url": "assets/img/themeOutput.fb0c0721.png",
    "revision": "fb0c072183d8d0df429c56772e2dc1d8"
  },
  {
    "url": "assets/img/toggle-buttons.f44cfaa1.png",
    "revision": "f44cfaa142299d65bc4922b3c44dc583"
  },
  {
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
  },
  {
    "url": "assets/img/top-payment-method.d0b65af5.png",
    "revision": "d0b65af5724aeea668e7a0a967976c52"
  },
  {
    "url": "assets/img/top-searchTerm.1bcd799b.png",
    "revision": "1bcd799b2532a2a8770bbd23276b5426"
  },
  {
    "url": "assets/img/total_commission_paid_reporting.18d89214.png",
    "revision": "18d89214ad4849d7065e16fb2b936f3e"
  },
  {
    "url": "assets/img/total-customers.96945387.png",
    "revision": "969453873e32f3d7ca733bf92d1d5f32"
  },
  {
    "url": "assets/img/total-order.3c1ec690.png",
    "revision": "3c1ec690a194c87c4bc034a9e0cd6a5e"
  },
  {
    "url": "assets/img/total-sale-customers.fee25dfd.png",
    "revision": "fee25dfdce011f1883efa99361060018"
  },
  {
    "url": "assets/img/total-sale.b80c8593.png",
    "revision": "b80c859320a684149b530794ebe507f7"
  },
  {
    "url": "assets/img/transactionGrid.3028d914.png",
    "revision": "3028d9147e16a6477b4adedb13634d75"
  },
  {
    "url": "assets/img/transactionOutput.45613c77.png",
    "revision": "45613c77d231e3d01bf739d96e30c089"
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
    "url": "assets/img/virtual-customization.42885b7d.png",
    "revision": "42885b7d390f0c44b7cf838137ff1bf4"
  },
  {
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/visit-page.6f93888c.png",
    "revision": "6f93888c8416169687351d75536bd952"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.3119c19e.js",
    "revision": "45247ed00b798c663ade6c2311b385f1"
  },
  {
    "url": "assets/js/10.f4eb8081.js",
    "revision": "c7dd68804e49d281aae4956cd38bc3a7"
  },
  {
    "url": "assets/js/100.151ee0bd.js",
    "revision": "20716d136552530b88744ee24177cd13"
  },
  {
    "url": "assets/js/101.6414578a.js",
    "revision": "1d597dac6e516902bb1f02aed4429e3e"
  },
  {
    "url": "assets/js/102.01329515.js",
    "revision": "db8fec66dfea4f655dec244fc595c423"
  },
  {
    "url": "assets/js/103.f266b954.js",
    "revision": "b60b45434b2aa919f93a588c0ef360a0"
  },
  {
    "url": "assets/js/104.e2face2b.js",
    "revision": "3501cafefca1e91cd41432700e5fcb35"
  },
  {
    "url": "assets/js/105.b21830a6.js",
    "revision": "4d612c8b43fc87b830867815c17de95d"
  },
  {
    "url": "assets/js/106.3beb6436.js",
    "revision": "7486ea99358d2ba17ff1a03160438b5b"
  },
  {
    "url": "assets/js/107.20a64935.js",
    "revision": "f8c3bc383660cc4138e376babb09dc90"
  },
  {
    "url": "assets/js/108.2c7851a0.js",
    "revision": "fb10c5713708ed4bbe4ffc0ef78eb7da"
  },
  {
    "url": "assets/js/109.d9b22523.js",
    "revision": "53a73a7040a9b56a8085df182299b5cd"
  },
  {
    "url": "assets/js/11.6882d8fc.js",
    "revision": "b0b82ff4d6410b75b3f0e35198eb6aee"
  },
  {
    "url": "assets/js/110.cfeb91a7.js",
    "revision": "693489e90204aa36b2075bfa918794de"
  },
  {
    "url": "assets/js/111.59fd782b.js",
    "revision": "ef6fd75e5a1ce8274c161101d89e5a42"
  },
  {
    "url": "assets/js/112.ec2bbe15.js",
    "revision": "619ce8c619f9f618be37fb947f6fb34e"
  },
  {
    "url": "assets/js/113.06882581.js",
    "revision": "df5a36fe186f23d2cbc39bb95d466cc4"
  },
  {
    "url": "assets/js/114.9d2d2dca.js",
    "revision": "9195845c09f70f962910fb25cfbac83f"
  },
  {
    "url": "assets/js/115.8058ee45.js",
    "revision": "cd07adbdc93a1e7ebf64484c8e6916f0"
  },
  {
    "url": "assets/js/116.9a063e52.js",
    "revision": "d0cf8196d401ca8661ec999019dd4d93"
  },
  {
    "url": "assets/js/117.5b398259.js",
    "revision": "887a04fd044927f6c207aea4c8ab41c1"
  },
  {
    "url": "assets/js/118.d346f353.js",
    "revision": "6467952af1319a450cab6d5b9027db98"
  },
  {
    "url": "assets/js/119.3ff1a5de.js",
    "revision": "a24f7220878b5da69865a4600d0ebf1b"
  },
  {
    "url": "assets/js/12.c2fb6710.js",
    "revision": "87b883524c35d2789ec976f27cf0bcea"
  },
  {
    "url": "assets/js/120.85a818a6.js",
    "revision": "231024024bfbcf8dbe148c0ec31cc41e"
  },
  {
    "url": "assets/js/121.4b811e49.js",
    "revision": "9f3c79879ebe14d5055073639d4af138"
  },
  {
    "url": "assets/js/122.1003d6e8.js",
    "revision": "2d0424a0e4b2a5b75bbe0ea8505d1c40"
  },
  {
    "url": "assets/js/123.662ab5be.js",
    "revision": "7732ef4816124bbd1562511fdb373b93"
  },
  {
    "url": "assets/js/124.00dfe547.js",
    "revision": "332160fad5e674f64263cb55935033f7"
  },
  {
    "url": "assets/js/125.e2946845.js",
    "revision": "a4233af7d51bd6bd786d161c20ae258c"
  },
  {
    "url": "assets/js/126.5b1eab2d.js",
    "revision": "f4950ee06a6018e212f52c75e34173ea"
  },
  {
    "url": "assets/js/127.56e847e1.js",
    "revision": "686ab520575899f6dd12b0f889bd7611"
  },
  {
    "url": "assets/js/128.41102faa.js",
    "revision": "007dba566db8f481b29367fb78e03e81"
  },
  {
    "url": "assets/js/129.af968176.js",
    "revision": "dded4e8f9a4e34e9bf0140059d5847de"
  },
  {
    "url": "assets/js/13.291d295c.js",
    "revision": "7871ff76833dac6e36883ead4c09009b"
  },
  {
    "url": "assets/js/130.645f0dbb.js",
    "revision": "c4d827498e61bd498702e6c9dcf7a7dd"
  },
  {
    "url": "assets/js/131.40faa79c.js",
    "revision": "3de131d02c60ac0d2a70a41757d37f9f"
  },
  {
    "url": "assets/js/132.faf6ea26.js",
    "revision": "588554967b04ab01a5772ee5dd249758"
  },
  {
    "url": "assets/js/133.4de27bd8.js",
    "revision": "b12165f1646d35937c7ad1f0bfcfc05b"
  },
  {
    "url": "assets/js/134.cf362b1e.js",
    "revision": "7f3ddc55bbfd557acbfb522a97b797dd"
  },
  {
    "url": "assets/js/135.b20d97ee.js",
    "revision": "64d12703a5d49d6fa17f21060f0388b9"
  },
  {
    "url": "assets/js/136.9d8435a6.js",
    "revision": "a9052987ca7ac7cfc64169fe8ba35f74"
  },
  {
    "url": "assets/js/137.f4fbbe1e.js",
    "revision": "89570ad23a6d56e592c3f720d14c9480"
  },
  {
    "url": "assets/js/138.42328206.js",
    "revision": "86beaf3a78e63d43d5fde7fec4ba8e9d"
  },
  {
    "url": "assets/js/139.63626c9b.js",
    "revision": "0f8d4a7f2c8239088658d2069a11f0a4"
  },
  {
    "url": "assets/js/14.6d551f00.js",
    "revision": "548fdd13d51657b1f820b7182c25ff60"
  },
  {
    "url": "assets/js/140.08847368.js",
    "revision": "6ce53ca9d98e2b91d04292e1974c7f8d"
  },
  {
    "url": "assets/js/141.6f415c37.js",
    "revision": "989fb5074e3de2b479e5368809bdfe38"
  },
  {
    "url": "assets/js/142.10027429.js",
    "revision": "df063962931d2584d9b92205d459c094"
  },
  {
    "url": "assets/js/143.05ef02af.js",
    "revision": "b7db2c50aa3982f0c0a9890804fcd9cf"
  },
  {
    "url": "assets/js/144.4f25bf10.js",
    "revision": "d7b65628a7043ee1c2d7ae512a5919ec"
  },
  {
    "url": "assets/js/145.e343e963.js",
    "revision": "fe594ae4832e2bb1ade806007012cfa1"
  },
  {
    "url": "assets/js/146.36ca396c.js",
    "revision": "bdc22da088edefc935f50ca8ae0fdd7c"
  },
  {
    "url": "assets/js/147.18aa0c20.js",
    "revision": "91c34166d2b36415d99bed369a974646"
  },
  {
    "url": "assets/js/148.c1716959.js",
    "revision": "808eb8b3d4f08bd13c0285cbabd9d72b"
  },
  {
    "url": "assets/js/149.8f6bcaec.js",
    "revision": "fb57b34b03d50ad328acd52a940d5038"
  },
  {
    "url": "assets/js/15.aff0fc83.js",
    "revision": "00310af0bedc161e0e1ed1aa6986a9f3"
  },
  {
    "url": "assets/js/150.1480a238.js",
    "revision": "4805a82d02d1115214f5c4d917976d75"
  },
  {
    "url": "assets/js/151.20538a40.js",
    "revision": "82265423ad6d171fc1cce44ede4eaf08"
  },
  {
    "url": "assets/js/152.a65bbf32.js",
    "revision": "54039ad801024df6898c076496d15b0f"
  },
  {
    "url": "assets/js/153.21e5fb5b.js",
    "revision": "ceaa78e7e4fd0dabacd45e2e666aeba8"
  },
  {
    "url": "assets/js/154.8ff0e2a7.js",
    "revision": "e700db22bc2e06a0476adb79964c507a"
  },
  {
    "url": "assets/js/155.a23994e2.js",
    "revision": "4f00c677a314ea9a50ad3642e28e112d"
  },
  {
    "url": "assets/js/156.6acb6313.js",
    "revision": "4bd60d63ac21c7b3d30116280baf87ba"
  },
  {
    "url": "assets/js/157.a1cb1b73.js",
    "revision": "9fd6ad03dee711c768e8d557c5d997e5"
  },
  {
    "url": "assets/js/158.d68af6bb.js",
    "revision": "5ac28d4f440cdced1ddc93820c0ede7d"
  },
  {
    "url": "assets/js/159.c28bbcbd.js",
    "revision": "f6ec9e8c8b88d8d9ee274d83eba61d7a"
  },
  {
    "url": "assets/js/16.d447f563.js",
    "revision": "9dde2c1e422f0c0f07da2863ce54149f"
  },
  {
    "url": "assets/js/160.cacb0448.js",
    "revision": "4f67b74582543e66a268918fdc7bcc79"
  },
  {
    "url": "assets/js/161.f07d2b45.js",
    "revision": "53276e635831af08ef0fc093289733cb"
  },
  {
    "url": "assets/js/162.9e55b315.js",
    "revision": "6fd0431283b7ab277f8eae3d46ee97f7"
  },
  {
    "url": "assets/js/163.04e6463e.js",
    "revision": "be48f6079fe4bad46cdc095d87f8b7ae"
  },
  {
    "url": "assets/js/164.3e1daf84.js",
    "revision": "a43705449675fbcd606b1311a3289986"
  },
  {
    "url": "assets/js/165.9d34384b.js",
    "revision": "b0bcb1aa76c643cbe0c92577dbd2406a"
  },
  {
    "url": "assets/js/166.5c537fd5.js",
    "revision": "c8088b7e4ed9d0119b664400de5863ce"
  },
  {
    "url": "assets/js/167.2ffe4f68.js",
    "revision": "a94b200d3f78122251ad365ed3a2641c"
  },
  {
    "url": "assets/js/168.51437792.js",
    "revision": "939464de006e946bd1d703105c64a6f7"
  },
  {
    "url": "assets/js/169.a197e5ba.js",
    "revision": "a85741a1f2af12179a9e75357816256e"
  },
  {
    "url": "assets/js/17.6b4fa14a.js",
    "revision": "288ad75dfb91b8fe341599e1880a9779"
  },
  {
    "url": "assets/js/170.84a486f5.js",
    "revision": "f2abbf589ff31f13dea4ab99c130389b"
  },
  {
    "url": "assets/js/171.e1813a1a.js",
    "revision": "96ceacad97373d9a94317bc12fd2a2da"
  },
  {
    "url": "assets/js/172.00801805.js",
    "revision": "7ccda7e86952a556d69b028acbd5e60b"
  },
  {
    "url": "assets/js/173.3eae5b3a.js",
    "revision": "e30523a8c085e37b4b8247f88c5c698c"
  },
  {
    "url": "assets/js/174.2df08e93.js",
    "revision": "d0a58f02e80eb7c5fa2a449d2c9ca5f4"
  },
  {
    "url": "assets/js/175.12ce7706.js",
    "revision": "001d64d4962f0e91bcdcbf654b4e39d1"
  },
  {
    "url": "assets/js/176.481711b9.js",
    "revision": "083d56439d9e13dce8e9cfd06571600e"
  },
  {
    "url": "assets/js/177.54a96c02.js",
    "revision": "5a962856b63ca17e788f1f2801715f1f"
  },
  {
    "url": "assets/js/178.b0a3f7b7.js",
    "revision": "b47fb279c1c470c799847d28726f7e25"
  },
  {
    "url": "assets/js/179.d311ec81.js",
    "revision": "a526f4b710e434e5502637ea99439b1a"
  },
  {
    "url": "assets/js/18.1e727af3.js",
    "revision": "7bc263f1848997fc74fcace4fdb36c7a"
  },
  {
    "url": "assets/js/180.2a8c6ec3.js",
    "revision": "295b25fddccedb817a0501c244ba26ad"
  },
  {
    "url": "assets/js/181.de74d592.js",
    "revision": "e549adcf8055d6189a37236188c4fcc4"
  },
  {
    "url": "assets/js/182.61671e5c.js",
    "revision": "e9b264666826cd8562fbeb40571726a6"
  },
  {
    "url": "assets/js/183.675b6a03.js",
    "revision": "1af4262bcfb0f94973d4d72d61ce1e2b"
  },
  {
    "url": "assets/js/184.e16731d0.js",
    "revision": "13f4307f8cc35565e428b6916eacf2d5"
  },
  {
    "url": "assets/js/185.931a6c15.js",
    "revision": "6369b1c918412200aaf3c178c5aeac7d"
  },
  {
    "url": "assets/js/186.2eab5cff.js",
    "revision": "66a883ca206b533c490b52dfeee1d1a2"
  },
  {
    "url": "assets/js/187.6dd8ed05.js",
    "revision": "887e432021b1c20cdbecaabc122d7e44"
  },
  {
    "url": "assets/js/188.077ff2ef.js",
    "revision": "0aa3c2635a6b3872a4b6cdb2ce87fad9"
  },
  {
    "url": "assets/js/189.1936b599.js",
    "revision": "af6ae7ac2d63bb69ba0b168b0d8c11a9"
  },
  {
    "url": "assets/js/19.ce7a748b.js",
    "revision": "db80fcb21b5f09ab8b1558bb5d5050bc"
  },
  {
    "url": "assets/js/190.eb912e6f.js",
    "revision": "90c7460f50c55de84be8afc6a9cd416e"
  },
  {
    "url": "assets/js/191.7517b3f9.js",
    "revision": "60ff300423d001208ebf39be7299d470"
  },
  {
    "url": "assets/js/192.f0f19f67.js",
    "revision": "d217004c22fc892fe2788bcb15fa41e1"
  },
  {
    "url": "assets/js/193.e861df87.js",
    "revision": "a549f7cf2c239beb7873ff98bfa2d497"
  },
  {
    "url": "assets/js/194.8be2b1ad.js",
    "revision": "363f2f4b04186b1c100d2ca3f2ad1dde"
  },
  {
    "url": "assets/js/195.e3a6cc51.js",
    "revision": "6b4b0ae56e209ce7ae26a049a3853449"
  },
  {
    "url": "assets/js/196.22cf09af.js",
    "revision": "af0fd9ad8784462852b285edd65866c7"
  },
  {
    "url": "assets/js/197.0f5ec43e.js",
    "revision": "41d7bd710f79f11e27dc5ceeefc8ec4d"
  },
  {
    "url": "assets/js/198.ed3bed7b.js",
    "revision": "1c0d5f0e7b81f0eebfc569fe47c2b191"
  },
  {
    "url": "assets/js/199.dcae5f01.js",
    "revision": "e1948202ffa8ed96609888b284fb6dcd"
  },
  {
    "url": "assets/js/2.9ac3a358.js",
    "revision": "f3419f8a63e682b1e6fad43febfb6a77"
  },
  {
    "url": "assets/js/20.97744181.js",
    "revision": "4a76bc3c7f6e339fe0094fc2bf551b72"
  },
  {
    "url": "assets/js/200.c8fa42aa.js",
    "revision": "728acf3d64cf0c462cad6e111b7fd1c5"
  },
  {
    "url": "assets/js/201.153e92e1.js",
    "revision": "2092b2845feb0776a20c2c886aa45673"
  },
  {
    "url": "assets/js/202.7aa4d7d9.js",
    "revision": "37cc4b217c8ba5a606b9a55c88284b28"
  },
  {
    "url": "assets/js/203.01ea1547.js",
    "revision": "3ac97ac4582783a97fe0aa22c68bccc3"
  },
  {
    "url": "assets/js/204.2d98e0c2.js",
    "revision": "3f7d0c453632b34b83a65d38e634e1c6"
  },
  {
    "url": "assets/js/205.a4b0c4b6.js",
    "revision": "184942e20d3807d870f49838bd2d765a"
  },
  {
    "url": "assets/js/206.3fca7ccc.js",
    "revision": "bba8fc613bc02056959e63bcea91216f"
  },
  {
    "url": "assets/js/207.581c5af1.js",
    "revision": "4476110aa536a6e7512494f2755b4c83"
  },
  {
    "url": "assets/js/208.afdd4907.js",
    "revision": "e70f8b7102fdd033115ae9ddc1d723a5"
  },
  {
    "url": "assets/js/209.6458867e.js",
    "revision": "302387f9d6232932d78f5c4a40724a19"
  },
  {
    "url": "assets/js/21.5ce8200b.js",
    "revision": "9a291e0fcdb056f5bc64857810d63729"
  },
  {
    "url": "assets/js/210.4ee8f0a3.js",
    "revision": "fcc79ccf104d7c76829f1d5f96704443"
  },
  {
    "url": "assets/js/211.1f2bb65d.js",
    "revision": "856805a43a9350c20224be63eb899506"
  },
  {
    "url": "assets/js/212.f4a8b6e4.js",
    "revision": "7cc807bf8f9673ea6a500f0cc9f7b95d"
  },
  {
    "url": "assets/js/213.c0fe4b9c.js",
    "revision": "f00a72a84b71ad1ad26652d782dfc833"
  },
  {
    "url": "assets/js/214.e20d3fbb.js",
    "revision": "acfc3fa0fc235d379b62af311c3c1773"
  },
  {
    "url": "assets/js/215.bc82057e.js",
    "revision": "63281ddd1d3bdc5598bb9137d4d1a954"
  },
  {
    "url": "assets/js/216.e7666a2d.js",
    "revision": "3dc150c534835e655e204cf0feb9daef"
  },
  {
    "url": "assets/js/217.a26ab2dc.js",
    "revision": "6b051386e23c588480be648cf7cbef22"
  },
  {
    "url": "assets/js/218.d22a3592.js",
    "revision": "91d24d40a4c4900633039de24f8ce5ab"
  },
  {
    "url": "assets/js/219.1d930527.js",
    "revision": "f99ba2542bebfe38c5068f1091f69a90"
  },
  {
    "url": "assets/js/22.c434b11c.js",
    "revision": "eb93cd0841b485d9675bc6b7ed51a5da"
  },
  {
    "url": "assets/js/220.2aa54fa0.js",
    "revision": "27cfca27fabfcbd632219f669dfc6676"
  },
  {
    "url": "assets/js/221.bb8dfd47.js",
    "revision": "a36161a14f70099d7f85346577e22d12"
  },
  {
    "url": "assets/js/222.06076a39.js",
    "revision": "729bcbddef9840674b4531380b533d9c"
  },
  {
    "url": "assets/js/223.6b01780c.js",
    "revision": "efb93105f98fde5300f668cf992ce2cd"
  },
  {
    "url": "assets/js/224.ed7fa19e.js",
    "revision": "95067ee2849b880471ea9641c997fd51"
  },
  {
    "url": "assets/js/225.97ab72a1.js",
    "revision": "b5e355da9d137c4b15ff57ecdeb30e8b"
  },
  {
    "url": "assets/js/226.809275a4.js",
    "revision": "82b6d41412f9e120f15f0261cc4ba7ea"
  },
  {
    "url": "assets/js/227.a2bd8df6.js",
    "revision": "b5ce2ae232a463bf25011bfc01466c57"
  },
  {
    "url": "assets/js/228.47b44eb8.js",
    "revision": "24f7a43766be0603200865a9431604f1"
  },
  {
    "url": "assets/js/229.a18308ca.js",
    "revision": "4f25a803d512b82c1d8736e0ef440866"
  },
  {
    "url": "assets/js/23.1928e94e.js",
    "revision": "c6e744bc3970bc6aeb723374a24cfc09"
  },
  {
    "url": "assets/js/230.03d11527.js",
    "revision": "1803c978997378e2108d807e7d0ff97a"
  },
  {
    "url": "assets/js/231.80e08a26.js",
    "revision": "07391bb807ef81cd231d1cb368d8e89b"
  },
  {
    "url": "assets/js/232.0c32bbe8.js",
    "revision": "fa2cb00bef625d70431389e5287bd340"
  },
  {
    "url": "assets/js/233.3ca10924.js",
    "revision": "a758abe96791e31a42f5a50fba506e0e"
  },
  {
    "url": "assets/js/234.a60eece7.js",
    "revision": "10a4da4e6b36bcb78bd20205c3751264"
  },
  {
    "url": "assets/js/235.7bf62f29.js",
    "revision": "1bbdeff270073140c68e64ecaa4484c0"
  },
  {
    "url": "assets/js/236.9863db61.js",
    "revision": "05d698e503b1573adce23eb7dde0e04f"
  },
  {
    "url": "assets/js/237.ee1a2fbb.js",
    "revision": "0b74ce8f847507ccea44a09ab1193353"
  },
  {
    "url": "assets/js/238.e53dbbe1.js",
    "revision": "1fa6198032fd44a1375ac61dae6ac477"
  },
  {
    "url": "assets/js/239.455590c8.js",
    "revision": "f15dd84c84053a1cfecb91a363a4e60e"
  },
  {
    "url": "assets/js/24.7cef0be6.js",
    "revision": "3b179755da4f9ad9bcccc7178fc6dcf9"
  },
  {
    "url": "assets/js/240.31662239.js",
    "revision": "94b488aced46a9cbcdeb0fb248fc9558"
  },
  {
    "url": "assets/js/241.289f1318.js",
    "revision": "a30657b9101968e9bbbffd921027c5b6"
  },
  {
    "url": "assets/js/242.5ac0d678.js",
    "revision": "623a31f2517bedb8107e82b067401568"
  },
  {
    "url": "assets/js/243.5a8bcb48.js",
    "revision": "1503bc362217bb5826b6de2e32a86893"
  },
  {
    "url": "assets/js/244.69ef7281.js",
    "revision": "ea1013e05ab02f4dc5414b67ad914414"
  },
  {
    "url": "assets/js/245.b23101e8.js",
    "revision": "570846a76f01b1534b4f21bc0133bbc4"
  },
  {
    "url": "assets/js/246.633cfbf1.js",
    "revision": "4a38c66c9be922f8dcdec4587052672c"
  },
  {
    "url": "assets/js/247.0fda692d.js",
    "revision": "736c35a36d4300d86ecac13430e828f8"
  },
  {
    "url": "assets/js/248.662ced96.js",
    "revision": "1a3164ebed45e88cb1aa6fc44a5ca409"
  },
  {
    "url": "assets/js/249.8d2a11df.js",
    "revision": "97557beceff8cd09dfd809c0f9f8b868"
  },
  {
    "url": "assets/js/25.5cbeeb86.js",
    "revision": "ff9060aae12ab74ff84ea7ced53973dd"
  },
  {
    "url": "assets/js/250.64a1bc80.js",
    "revision": "95c5c54ba3899cc9490cc01324d9212b"
  },
  {
    "url": "assets/js/251.b50cb563.js",
    "revision": "a087a0fcca5ee5147fbe4a7132d18440"
  },
  {
    "url": "assets/js/252.f4ba8bf1.js",
    "revision": "c0910df2f8a66c7923908d44509a13ce"
  },
  {
    "url": "assets/js/253.60141dc6.js",
    "revision": "146fe958c6d0e51ad3c37aea4af70db4"
  },
  {
    "url": "assets/js/254.4af73043.js",
    "revision": "a29eeed26acc55d32bda8a399c9d3b44"
  },
  {
    "url": "assets/js/255.8f83604e.js",
    "revision": "dbcf58149579eb5d89ad0249a08fd0de"
  },
  {
    "url": "assets/js/256.b4c542bb.js",
    "revision": "b68423f63dfd962d3d99bfb913ed3d27"
  },
  {
    "url": "assets/js/257.62be5fd7.js",
    "revision": "bbca4b60a895d85b5f9868cac7365346"
  },
  {
    "url": "assets/js/258.6d20cdd5.js",
    "revision": "9c28bd63382ae9de487c5b9f5fc05817"
  },
  {
    "url": "assets/js/259.569ee2b7.js",
    "revision": "40b0ec19d90488eb90a5dbad1eba3a57"
  },
  {
    "url": "assets/js/26.373f2b87.js",
    "revision": "91b45846254f619188e20bcd76c2bde6"
  },
  {
    "url": "assets/js/260.101c9701.js",
    "revision": "97c6f59781037e78848dd4d72c4cd81c"
  },
  {
    "url": "assets/js/261.1efad379.js",
    "revision": "bca2405abd7fd9a41335abb2dc90131f"
  },
  {
    "url": "assets/js/262.a00bca9e.js",
    "revision": "68a531c02075b7aef918b5df886a5cc1"
  },
  {
    "url": "assets/js/263.868a559d.js",
    "revision": "799707b2701a09b05984644d2338d379"
  },
  {
    "url": "assets/js/264.120e3c55.js",
    "revision": "b529bb157387b8e4b89de1b5414a5c47"
  },
  {
    "url": "assets/js/265.aaaf44da.js",
    "revision": "0fb75fbb8ce2c94acff7f531de7aac01"
  },
  {
    "url": "assets/js/266.0f9e6ae4.js",
    "revision": "1b67a456fc8328999f279effc5d043fa"
  },
  {
    "url": "assets/js/267.8d511dc5.js",
    "revision": "a5ec30fcdc609497223246aac34f8b56"
  },
  {
    "url": "assets/js/268.19f60987.js",
    "revision": "cd56a180909a4479c51beb0a6d1324e6"
  },
  {
    "url": "assets/js/269.840c0bd0.js",
    "revision": "496d2977c70a58ba9ceb39b3a34a4d9a"
  },
  {
    "url": "assets/js/27.3c8fcc9d.js",
    "revision": "50c7c412dee7d336c9e4182ba5d2927a"
  },
  {
    "url": "assets/js/270.fc692a90.js",
    "revision": "b9926781aa30b7dee06104d88b7fb670"
  },
  {
    "url": "assets/js/271.84e5176a.js",
    "revision": "a262753258ecfb6265d565f60416105a"
  },
  {
    "url": "assets/js/272.0a7e9132.js",
    "revision": "46dbab2d11be89e158528b79a568e5c1"
  },
  {
    "url": "assets/js/273.ca14db6b.js",
    "revision": "ef4983cde02062493462413e932e448f"
  },
  {
    "url": "assets/js/274.55ee2f66.js",
    "revision": "ffe1ffac2ccddf92f10b0e430620a973"
  },
  {
    "url": "assets/js/275.51463c51.js",
    "revision": "a32ffc940930b6ca3d61f5f85c226bd2"
  },
  {
    "url": "assets/js/276.554eab1c.js",
    "revision": "4d925a689cbd92b24a37d60c08bad258"
  },
  {
    "url": "assets/js/277.bbf5d704.js",
    "revision": "3104bc2033eff60df75f1643ef70271b"
  },
  {
    "url": "assets/js/278.cfd6039c.js",
    "revision": "da29c1aa8ba3d15ef5f28311ba556a5a"
  },
  {
    "url": "assets/js/279.c8e966fe.js",
    "revision": "3cc1b79d32e4051e3acb90ce8fa11eaa"
  },
  {
    "url": "assets/js/28.1d5aab68.js",
    "revision": "247f1abf41192ffb7b55418089433a9f"
  },
  {
    "url": "assets/js/280.cad13afa.js",
    "revision": "18c28ed344c2d15c61d23114ce4283e8"
  },
  {
    "url": "assets/js/281.9c840e27.js",
    "revision": "bc73f36056fc980663fb2b66fe04a8fc"
  },
  {
    "url": "assets/js/282.08a9c452.js",
    "revision": "cadc72d636d19797cbf1ef2aee49a40e"
  },
  {
    "url": "assets/js/283.7ecaaa47.js",
    "revision": "b8a4c7c85aac0084d61c2ef9f1200102"
  },
  {
    "url": "assets/js/284.9053737f.js",
    "revision": "ebd892bdbdbba9de376ba857acc81796"
  },
  {
    "url": "assets/js/285.04293af3.js",
    "revision": "7bc40cf099af4b3183c82f3390d8e73c"
  },
  {
    "url": "assets/js/286.d8ea80c5.js",
    "revision": "bbf60900da1521022d1c2c05699c6d91"
  },
  {
    "url": "assets/js/287.08a81275.js",
    "revision": "b7d6e7bd152c0e4c6c8b7c3c4127cb4f"
  },
  {
    "url": "assets/js/288.d42019dd.js",
    "revision": "332c6eb0622ca3d8227377e85247bab6"
  },
  {
    "url": "assets/js/289.173f8dc4.js",
    "revision": "a062ed5214deb6a67709c70210e90bda"
  },
  {
    "url": "assets/js/29.424b589d.js",
    "revision": "5fb7bd62939f38bb3f4225a036fc5fde"
  },
  {
    "url": "assets/js/290.ee00274d.js",
    "revision": "c0e912d4a1609eed5493453efbcd2d42"
  },
  {
    "url": "assets/js/291.8e63d70a.js",
    "revision": "78658d4e748451971fa7d69fb41611a0"
  },
  {
    "url": "assets/js/292.62497c8e.js",
    "revision": "e0f5471106431225b324b28b2246f26e"
  },
  {
    "url": "assets/js/293.4ca66c65.js",
    "revision": "690d6f2c169e73dcca54a51704c5693a"
  },
  {
    "url": "assets/js/294.164ef2fd.js",
    "revision": "4b6fc0e18d37453f18b692b696363c13"
  },
  {
    "url": "assets/js/295.6b9f65de.js",
    "revision": "903a43c186a1294b556bf74ceba236f4"
  },
  {
    "url": "assets/js/296.f7e06592.js",
    "revision": "48575a5cac01487381f7566d344acf83"
  },
  {
    "url": "assets/js/297.67e56c55.js",
    "revision": "2beff30b3fc8fcb55ce35bd4669481e1"
  },
  {
    "url": "assets/js/298.f0a34951.js",
    "revision": "12a1fc19ad8bd7ac73bbe6f852dacc36"
  },
  {
    "url": "assets/js/299.5c734e46.js",
    "revision": "a6a4bbdfcc6a3ba45dee56b6d41b8dcd"
  },
  {
    "url": "assets/js/3.49c1def6.js",
    "revision": "49c581cf207c3e4dc3de8952c00ca0ff"
  },
  {
    "url": "assets/js/30.3370a70e.js",
    "revision": "715cb17eba55c4ef9e28e62f20b42eab"
  },
  {
    "url": "assets/js/300.6169d1c2.js",
    "revision": "c24a339e669ae84330c8c62239de64fe"
  },
  {
    "url": "assets/js/301.140037fd.js",
    "revision": "09d501285821cdc8fdaf7cde52b79aff"
  },
  {
    "url": "assets/js/302.5cbab71e.js",
    "revision": "d0060460cb3bfe789da0bed54d5b90f6"
  },
  {
    "url": "assets/js/303.32fe4474.js",
    "revision": "83d56b0553c94b325535c66fa8e71550"
  },
  {
    "url": "assets/js/304.2ae580dd.js",
    "revision": "b15ef8014bdfd6312f62cbe47fadf85e"
  },
  {
    "url": "assets/js/305.f55772e6.js",
    "revision": "82ac24d47fe56981108db9d8dc950b97"
  },
  {
    "url": "assets/js/306.8dc67525.js",
    "revision": "fa027ae950318e72c57bca7a6bfa0332"
  },
  {
    "url": "assets/js/307.14e7ca4f.js",
    "revision": "d4034dce23040166032a9255cb9ea1c0"
  },
  {
    "url": "assets/js/308.a54b7c51.js",
    "revision": "f178fc05474dad41dc29195be54a4555"
  },
  {
    "url": "assets/js/309.83009b25.js",
    "revision": "c4fba52fed6862175dbf960b71eea86b"
  },
  {
    "url": "assets/js/31.624a61b0.js",
    "revision": "594be9117ae0cd4bcc4487c9aeeb7ba7"
  },
  {
    "url": "assets/js/310.3dd193ba.js",
    "revision": "7a0930ae4cbf0e9901b3e1d420195c6c"
  },
  {
    "url": "assets/js/311.741d8d28.js",
    "revision": "e0165cb8dbb626cadcb20e5c98f391de"
  },
  {
    "url": "assets/js/312.3ba98cef.js",
    "revision": "4ccefa950db009de02eb9550024f9775"
  },
  {
    "url": "assets/js/313.e98707f1.js",
    "revision": "548c5b282a6f674de3c7fe3426503815"
  },
  {
    "url": "assets/js/314.3d0e53a2.js",
    "revision": "9726d3185780390d98b03e6e2a47842f"
  },
  {
    "url": "assets/js/315.617284cf.js",
    "revision": "78bde627ee0f76fc7ec32f00d0e6e6ab"
  },
  {
    "url": "assets/js/316.f6117e03.js",
    "revision": "7e443bacae986dd89add1d3b85979f3f"
  },
  {
    "url": "assets/js/317.6261f8f8.js",
    "revision": "43ce006e0084ae4feebeee5f6f73277d"
  },
  {
    "url": "assets/js/318.749d1c04.js",
    "revision": "187c2b1aeee3bf9056940681646ee70d"
  },
  {
    "url": "assets/js/319.0664251c.js",
    "revision": "6baeb5dec82a18b33b65cdd6880308ba"
  },
  {
    "url": "assets/js/32.dab16607.js",
    "revision": "6241a98fd564175f3b097532cbdf3a1d"
  },
  {
    "url": "assets/js/320.1254329a.js",
    "revision": "6c2c43b5d476e35e82c72d6dc70fbf1a"
  },
  {
    "url": "assets/js/321.cb1001d4.js",
    "revision": "ad26a1ff203b2e4a3f54afa69b3dead9"
  },
  {
    "url": "assets/js/322.5d06eca8.js",
    "revision": "da6e8b62722b3203ee8bd6f26a8aa0d1"
  },
  {
    "url": "assets/js/323.a064c0b2.js",
    "revision": "9530f0b4f39ec89a693591e828f2e5fc"
  },
  {
    "url": "assets/js/324.b80f24e3.js",
    "revision": "ee9f8bcc092ceb800e246fa9392f36e8"
  },
  {
    "url": "assets/js/325.73da1862.js",
    "revision": "72fddc88adb330b6a4b498cb6d292715"
  },
  {
    "url": "assets/js/326.9b8d938c.js",
    "revision": "2b15873578ea6bd7534eaa06b9edbd2a"
  },
  {
    "url": "assets/js/327.7dc3eaab.js",
    "revision": "c19e3fe11dc40b0d96611f16f49832a2"
  },
  {
    "url": "assets/js/328.c1f3e4a1.js",
    "revision": "621a7d9071126ff4f5277cfb6f0ec14e"
  },
  {
    "url": "assets/js/329.38a5f600.js",
    "revision": "8f88ccf31902f296f226e18f049ad868"
  },
  {
    "url": "assets/js/33.a7bb803c.js",
    "revision": "8458d73cf54e26880601efa8afec2be7"
  },
  {
    "url": "assets/js/330.0c6c9b6c.js",
    "revision": "bbc15067ac6784dbd8661dd5da631350"
  },
  {
    "url": "assets/js/331.9a451d83.js",
    "revision": "9ee64b02ff13a101a02fdec436d10e99"
  },
  {
    "url": "assets/js/332.212b3925.js",
    "revision": "26a7d75babf843eaeacd90ae278d71b6"
  },
  {
    "url": "assets/js/333.31d623de.js",
    "revision": "e003c81710669ca7272d87801966be45"
  },
  {
    "url": "assets/js/334.a7ef6a05.js",
    "revision": "fa68a000f47b2d4f5065d0a9b535aaae"
  },
  {
    "url": "assets/js/335.8b74b889.js",
    "revision": "c456d6c468e6e9e4140cdeb771feec64"
  },
  {
    "url": "assets/js/336.c402f3ca.js",
    "revision": "e254b19ae2264c817c639e458f6e7483"
  },
  {
    "url": "assets/js/337.d166b259.js",
    "revision": "5e095a3e79445618ed9847e7b1e66186"
  },
  {
    "url": "assets/js/338.1e0842dc.js",
    "revision": "799e2c9d6fb144d1044d2774dd1853bd"
  },
  {
    "url": "assets/js/339.c258c260.js",
    "revision": "64d27abf381e91f95ce2b3b0f83bb886"
  },
  {
    "url": "assets/js/34.e7844cf4.js",
    "revision": "077d0105e7b3a5d35abc50e9b202186e"
  },
  {
    "url": "assets/js/340.5c444640.js",
    "revision": "f1203501ee11505920dde55fa65fa7b5"
  },
  {
    "url": "assets/js/341.d559e6b2.js",
    "revision": "564172e5402063c8994f08a6b070ea0c"
  },
  {
    "url": "assets/js/342.5c982df0.js",
    "revision": "7a17a216ccc254127fe5f109bba25f86"
  },
  {
    "url": "assets/js/343.360ee2f2.js",
    "revision": "c87fdec41dba978d737ee5a96b229335"
  },
  {
    "url": "assets/js/344.e15f0f64.js",
    "revision": "3dfea33ab8be51105297323bce0c7974"
  },
  {
    "url": "assets/js/345.2afe13ac.js",
    "revision": "9ed2084efd16393d7213c32c0d184191"
  },
  {
    "url": "assets/js/346.f8b6eceb.js",
    "revision": "942b5e58bf7d058d477f3ce6fb15728c"
  },
  {
    "url": "assets/js/347.9ea83890.js",
    "revision": "60ed61fba3d405fc9b690440eca27f4e"
  },
  {
    "url": "assets/js/348.d5bbf3d4.js",
    "revision": "3d0c51bb0cd21645584af893f729d149"
  },
  {
    "url": "assets/js/349.f6c52577.js",
    "revision": "76a8c54314eedf43c65d92b5a2c88240"
  },
  {
    "url": "assets/js/35.22c8a0e2.js",
    "revision": "e7ec6002866e7fb4804dfdf132ce57c2"
  },
  {
    "url": "assets/js/350.1d63c621.js",
    "revision": "f9e304df2a29f791ca81c817c81530c3"
  },
  {
    "url": "assets/js/351.80ba1443.js",
    "revision": "6516c95361bac3697b1eee3fc65882d0"
  },
  {
    "url": "assets/js/352.2fc0abdd.js",
    "revision": "ff6e8229114fe8ac021d7c699cab38c4"
  },
  {
    "url": "assets/js/353.6f0c93c8.js",
    "revision": "78fadd56b1f728cd3867ab71250759d0"
  },
  {
    "url": "assets/js/354.ba05e9af.js",
    "revision": "157ffea163c1b7b51f71d607010c9153"
  },
  {
    "url": "assets/js/355.d2e5b8b0.js",
    "revision": "a2a45730141e3401f10ae781001c91f2"
  },
  {
    "url": "assets/js/356.08fcbfeb.js",
    "revision": "cad3371e920335c41935f542d7e51af0"
  },
  {
    "url": "assets/js/357.dced2da6.js",
    "revision": "b411558da24428e7f146d9c49b8ede70"
  },
  {
    "url": "assets/js/358.59ddef43.js",
    "revision": "961ba0e7061fcadb71f3f2ed4d60677a"
  },
  {
    "url": "assets/js/359.14706bf8.js",
    "revision": "cf4aede9affa1cccc9b78c3014c49558"
  },
  {
    "url": "assets/js/36.672a976a.js",
    "revision": "6e785f11edecea47f7dba1dbbd8d8514"
  },
  {
    "url": "assets/js/360.989cf6ee.js",
    "revision": "20a5a0d57c7d37c6d5f4c1f19a752b8a"
  },
  {
    "url": "assets/js/361.2c79f3d8.js",
    "revision": "a3860993c4ed9e85f5de39cb844cc4d1"
  },
  {
    "url": "assets/js/362.9b5cb445.js",
    "revision": "cf935472c8482805d54633f515bca964"
  },
  {
    "url": "assets/js/363.9958876d.js",
    "revision": "1fc6c3438d58c506df9cad4400050645"
  },
  {
    "url": "assets/js/364.4cb39b01.js",
    "revision": "855247c3b86a946d16dcdb4170d68da3"
  },
  {
    "url": "assets/js/365.3b932830.js",
    "revision": "7a35e8c9f93d97f99f701f518d04ae3d"
  },
  {
    "url": "assets/js/366.eea27cbf.js",
    "revision": "9ca79e0a07952370035a5c043c52111d"
  },
  {
    "url": "assets/js/367.d83046c7.js",
    "revision": "eb03f352bba1cc896c1643d336c0e370"
  },
  {
    "url": "assets/js/368.e6de170c.js",
    "revision": "7261ad1e5ace4dfe35613221dd6ecd04"
  },
  {
    "url": "assets/js/369.5c19f4b8.js",
    "revision": "80d2ec1e67f394cb7ad3c79921a70d67"
  },
  {
    "url": "assets/js/37.11af4b97.js",
    "revision": "730cb15064f565ac1e6e13227b39605c"
  },
  {
    "url": "assets/js/370.4183d01f.js",
    "revision": "26b1e3a87825d1f8f44bcedc87beb91e"
  },
  {
    "url": "assets/js/371.531477b0.js",
    "revision": "899abdd3309b279ec835d5d1f90fe69c"
  },
  {
    "url": "assets/js/372.0323dbaa.js",
    "revision": "a880bf1d8d3c4cd795b71860cc1c60e0"
  },
  {
    "url": "assets/js/373.3be460fc.js",
    "revision": "0d6baca716ada9e6ad96186118b01121"
  },
  {
    "url": "assets/js/374.7ae2d21f.js",
    "revision": "336c69a3a9baaf007e784d71da0548d3"
  },
  {
    "url": "assets/js/375.c714ee10.js",
    "revision": "825b9a2348832f04ac63f0e9d9785a4b"
  },
  {
    "url": "assets/js/376.8e5b62fe.js",
    "revision": "c7b4c64b9f3c864f0bc644559e24f703"
  },
  {
    "url": "assets/js/377.ef56b8e8.js",
    "revision": "8e3a7ba8e59fc45c03fbc6ab6604a010"
  },
  {
    "url": "assets/js/378.162a6ac4.js",
    "revision": "2fab509b3c4a9041ddb9a77b5fe8c48c"
  },
  {
    "url": "assets/js/379.fa3b8f9f.js",
    "revision": "5d650e4df823cfbf3b664c3cd2bc47ee"
  },
  {
    "url": "assets/js/38.2c482a15.js",
    "revision": "14a60778ec1997ba549aa526d8e16bbd"
  },
  {
    "url": "assets/js/380.4a5e32fa.js",
    "revision": "6577d8c2174fe02ca2d05f7c8e2cad3d"
  },
  {
    "url": "assets/js/381.1780ce13.js",
    "revision": "685b0c9356ecd24851be2af1adb8a5a5"
  },
  {
    "url": "assets/js/382.1e67016b.js",
    "revision": "524eafd6c906333d5620e4cea47d1d5a"
  },
  {
    "url": "assets/js/383.d140d2fa.js",
    "revision": "2f981ce9cceb24b89de16fceb5d5b1ad"
  },
  {
    "url": "assets/js/384.02fdbbec.js",
    "revision": "d303ab5919ca4340b7b5e1fe2df2f2e5"
  },
  {
    "url": "assets/js/385.90a22989.js",
    "revision": "574356889228a72daec9323179441f19"
  },
  {
    "url": "assets/js/386.07a02599.js",
    "revision": "3e10e172f99e0c9ffe29ef5efdc4b73c"
  },
  {
    "url": "assets/js/387.2b87c462.js",
    "revision": "4dc6569867065a006482d4298a669dd9"
  },
  {
    "url": "assets/js/388.9185fdee.js",
    "revision": "789faa17dcf823c9ff5d0cdc6a35513f"
  },
  {
    "url": "assets/js/389.c55667c0.js",
    "revision": "314be8f3c4a9e277f6160359a32b2ceb"
  },
  {
    "url": "assets/js/39.edc5a39b.js",
    "revision": "017ca42513f899e5ebdd3fd7fd0a7fe5"
  },
  {
    "url": "assets/js/390.48c8267d.js",
    "revision": "439f03e9bdcca2067c8a2a3a82abe04a"
  },
  {
    "url": "assets/js/391.7e04ed21.js",
    "revision": "57e291ced527bd6fb0d8499670a2131c"
  },
  {
    "url": "assets/js/392.cec33b41.js",
    "revision": "7aafbf25e84a08ea689471fbbee61f4b"
  },
  {
    "url": "assets/js/393.7f70a4fb.js",
    "revision": "10e51976173e5c0ba0df469a4bdff9e8"
  },
  {
    "url": "assets/js/394.decadc55.js",
    "revision": "9b1fd36caa1bb9e84d0cc414f3ff8147"
  },
  {
    "url": "assets/js/395.f0825bec.js",
    "revision": "84a10ee115acf22dc62202635c0176d7"
  },
  {
    "url": "assets/js/396.c28dd575.js",
    "revision": "6987fb953578cc30c10452db2db9b9b3"
  },
  {
    "url": "assets/js/397.4dc71f56.js",
    "revision": "3154c376c1783b25212c0dab300c7692"
  },
  {
    "url": "assets/js/398.bba9cfe8.js",
    "revision": "67cf685ab0ced5296b903bc02b7812b7"
  },
  {
    "url": "assets/js/399.be363a59.js",
    "revision": "8f218124bfa2d7c5773e9f89b03f72ab"
  },
  {
    "url": "assets/js/4.599b7111.js",
    "revision": "bee7345be4861fab8f7aa50e80c735f8"
  },
  {
    "url": "assets/js/40.445c58fa.js",
    "revision": "f21b97bf0b747c91fa32e389aff14a3a"
  },
  {
    "url": "assets/js/400.d331e54f.js",
    "revision": "b87d03f1c0efc2d9b7eb8b6ffead0419"
  },
  {
    "url": "assets/js/401.d217cad0.js",
    "revision": "30265e4d699c210591640608b107029b"
  },
  {
    "url": "assets/js/402.2d7f9f5b.js",
    "revision": "fad7c84ec97c2ad8180a54d1049628c3"
  },
  {
    "url": "assets/js/403.701f8c1b.js",
    "revision": "54ecf05bb8517c0f1f332029d63700bb"
  },
  {
    "url": "assets/js/404.6e9749fc.js",
    "revision": "a9308f865b52b822f8dba146e91e1a0c"
  },
  {
    "url": "assets/js/41.d2a190d7.js",
    "revision": "f42961cf62ef06b2d0b1ac4b299c6463"
  },
  {
    "url": "assets/js/42.cc3db3ff.js",
    "revision": "3288ebb6cf6703128d1028ef93ac7680"
  },
  {
    "url": "assets/js/43.5b48f0d9.js",
    "revision": "840b0d592b81e7405518c2be85d1d584"
  },
  {
    "url": "assets/js/44.4877a028.js",
    "revision": "d3dedff1cb00b4fb5e237b811be0871a"
  },
  {
    "url": "assets/js/45.004d6d73.js",
    "revision": "47e0990c5a8e56576a525fd67541c27f"
  },
  {
    "url": "assets/js/46.4c72edf1.js",
    "revision": "44bab76d1b4a783fcf5bec1a3c4dd2f2"
  },
  {
    "url": "assets/js/47.bd39a94f.js",
    "revision": "87931c82f5dc95e98131c4d27e477e7b"
  },
  {
    "url": "assets/js/48.6097e0a9.js",
    "revision": "d2e61aaecd1b77cdd5b666417e9cc38b"
  },
  {
    "url": "assets/js/49.9f450dd1.js",
    "revision": "5625fd268e894d4ee73a97360eed2352"
  },
  {
    "url": "assets/js/5.bacfcfc5.js",
    "revision": "c1418fcc33c3acd0144a0142d1582857"
  },
  {
    "url": "assets/js/50.68a000c6.js",
    "revision": "4a238018893d2d1bb35ffdcc73ffca32"
  },
  {
    "url": "assets/js/51.79e80ece.js",
    "revision": "6e87009cc9972c33f1f6e0feb964b25d"
  },
  {
    "url": "assets/js/52.86cfe87d.js",
    "revision": "18c5d457b4ad5cf64609a6b94e655c6f"
  },
  {
    "url": "assets/js/53.1f4ca81b.js",
    "revision": "4e7e6799926c7de408ce24a3daec0789"
  },
  {
    "url": "assets/js/54.feef769e.js",
    "revision": "446edef51746952d772cecc3c40c5b3b"
  },
  {
    "url": "assets/js/55.db669f22.js",
    "revision": "b8ce2533f05d49c266c58e56446d5b54"
  },
  {
    "url": "assets/js/56.6bbf48e1.js",
    "revision": "848dd9b385601587abfd3d288537646e"
  },
  {
    "url": "assets/js/57.a30c3f32.js",
    "revision": "4f47a72d433fddfa48b64d013c6669e0"
  },
  {
    "url": "assets/js/58.c942d9b8.js",
    "revision": "dfcdb64b0a3ca7141c3002a44e016768"
  },
  {
    "url": "assets/js/59.c486fed7.js",
    "revision": "a699a4f4c4807d6070f209661b0bf527"
  },
  {
    "url": "assets/js/60.8a7a11a0.js",
    "revision": "288b4f771fa6c88c46870cb98c2d0f1e"
  },
  {
    "url": "assets/js/61.737f6f6b.js",
    "revision": "ebca68960cd327b2ad11490dd75cb123"
  },
  {
    "url": "assets/js/62.7f9a2ecf.js",
    "revision": "4d567119fc471b822a9d05d9397eeb11"
  },
  {
    "url": "assets/js/63.94e69f21.js",
    "revision": "4ba08aafeec6af92041d0ab76c873e23"
  },
  {
    "url": "assets/js/64.d6e5d8e0.js",
    "revision": "3ee56b0ec6785a50467a6fecceb43a65"
  },
  {
    "url": "assets/js/65.a73036be.js",
    "revision": "400fc1d092a63db74017bd9f2ecd0c86"
  },
  {
    "url": "assets/js/66.4c35717d.js",
    "revision": "82881d49515e5e28c62035db15502794"
  },
  {
    "url": "assets/js/67.6e2f1b93.js",
    "revision": "f18f89a94d6657c66bdd8ffe2a80eb69"
  },
  {
    "url": "assets/js/68.460e0fb2.js",
    "revision": "ec888516f78f85912eab6519e270af23"
  },
  {
    "url": "assets/js/69.8b50d5d1.js",
    "revision": "a1d4b5bf47530485195ca3d7d7b48c69"
  },
  {
    "url": "assets/js/70.717f6996.js",
    "revision": "b189bd1f4cc666f48fc9e4dd63d2e562"
  },
  {
    "url": "assets/js/71.91708796.js",
    "revision": "1fcc2f1477ed40d1ff0d91a93e5695eb"
  },
  {
    "url": "assets/js/72.a4ba30b7.js",
    "revision": "45d5e47734aaa5c0288cf005e0fb7ddf"
  },
  {
    "url": "assets/js/73.05247f2f.js",
    "revision": "2e3b00b989624b94139842cfe02b1d69"
  },
  {
    "url": "assets/js/74.2334a789.js",
    "revision": "10b1dcddfbe1fce0b4098af895e49fd7"
  },
  {
    "url": "assets/js/75.1c0723dc.js",
    "revision": "422e251f641dd3c0cebd0bba372b4a39"
  },
  {
    "url": "assets/js/76.f6f316b7.js",
    "revision": "3bf2a2ee1282a98d5c35ac1a541bed77"
  },
  {
    "url": "assets/js/77.be92bc64.js",
    "revision": "c83ee8c1bfca83fb038c62e7147e802c"
  },
  {
    "url": "assets/js/78.f62aaa57.js",
    "revision": "8ee634ea413ef9f08f9b1266ecaf0e8c"
  },
  {
    "url": "assets/js/79.6aed303d.js",
    "revision": "c755cc3150dbe11ce3555ee6b69c589e"
  },
  {
    "url": "assets/js/8.7b076e2b.js",
    "revision": "3b5b3a7234c4132c169791d726c592ca"
  },
  {
    "url": "assets/js/80.ff1ce594.js",
    "revision": "a6113e0bc506e9cbc6eb66f41932b8f3"
  },
  {
    "url": "assets/js/81.b2b612ee.js",
    "revision": "3456d4e226088a59aca0e86cd01085bd"
  },
  {
    "url": "assets/js/82.0225ad9f.js",
    "revision": "3f8d4a22946048e6ce783c4ce73c9991"
  },
  {
    "url": "assets/js/83.2d28d23e.js",
    "revision": "6f270e80119093f17799b4bf333c5fa5"
  },
  {
    "url": "assets/js/84.bc7b1267.js",
    "revision": "446aa9c9577663d129744d984088e0ec"
  },
  {
    "url": "assets/js/85.bae9adb3.js",
    "revision": "569614b0e2f93c575842e2607dc2d45e"
  },
  {
    "url": "assets/js/86.feb632e7.js",
    "revision": "bb284081c29d0a895e53a7d507d17ecd"
  },
  {
    "url": "assets/js/87.17fa2ef7.js",
    "revision": "8c57fc2935231448f89704870c17bd9a"
  },
  {
    "url": "assets/js/88.88de4618.js",
    "revision": "fe5b743b5b37dc9ae72db867a5fa2a5f"
  },
  {
    "url": "assets/js/89.83976039.js",
    "revision": "50c5d5a87460fe21ebdf10a945a052c6"
  },
  {
    "url": "assets/js/9.456022a9.js",
    "revision": "c9340975b32d4838caf9c2316aa7a159"
  },
  {
    "url": "assets/js/90.d57a0ff0.js",
    "revision": "53d654c37135943e43e03c37a86ac53d"
  },
  {
    "url": "assets/js/91.962a5751.js",
    "revision": "89a5d9bb8800af5f253dd602484453b3"
  },
  {
    "url": "assets/js/92.8e4c116e.js",
    "revision": "3cd548ed5518c25a94ee7b103f5fbf7c"
  },
  {
    "url": "assets/js/93.fee27bbf.js",
    "revision": "1ec7233b15a295eb959e1165c16766c7"
  },
  {
    "url": "assets/js/94.6c8cc497.js",
    "revision": "eef89e199863f84ca345f382bbf2eb2f"
  },
  {
    "url": "assets/js/95.00541115.js",
    "revision": "c08ddc9cc12580f5c0f30378b7b43521"
  },
  {
    "url": "assets/js/96.ff303962.js",
    "revision": "ea5480283265f72fb8fc3cb29ad68029"
  },
  {
    "url": "assets/js/97.f9258a21.js",
    "revision": "68e578550adac5767d3c0c6435467563"
  },
  {
    "url": "assets/js/98.ce4e87f1.js",
    "revision": "f7c118eb212dccfb092f74ec99e8512e"
  },
  {
    "url": "assets/js/99.3d63f1ec.js",
    "revision": "1fa5a2cff6474f999eb040560d2638f7"
  },
  {
    "url": "assets/js/app.01d40521.js",
    "revision": "070b00451b747ce0dcf54b3271073efb"
  },
  {
    "url": "assets/js/vendors~docsearch.8bd08f1a.js",
    "revision": "03c088dc541bec2acedf24580ea8930b"
  },
  {
    "url": "index.html",
    "revision": "0b8368b0efeefc94dd0a169c7c4c84fd"
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
