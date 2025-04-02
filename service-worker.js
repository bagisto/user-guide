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
    "revision": "360ee682d026daa62919f4a389b8682d"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "e61ab40eba6ff37e34316182731fca6d"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "a6fdba8a209a20579812812a3067385a"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "af122adaaffa074ee5be19a3d26e3a8d"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "0014286c786a11d69a398b0166fbc3d5"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "493fc26490a0bba8035b14a4c5e1519c"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "45e6b9ae8b6fc132b8fd942c4017a0b6"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "40f67b96408d21039088a66cb201f089"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "d25621601279e4255333f585c90f638d"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "27d5a68b2049291c1af580ca838691c0"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "e6b8e113b29e09dadb6615c9dcc6b073"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "6d83a8063e1d5df202d3f9d41515dd5f"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "9a06f621e7de9542bd5dc81ce4b9e4bc"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "791e51c6812340889673f9d5307c2219"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "55fed50c052dcc0b3d1caabbedde38ca"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "11424cdfa0362e7c23cb3ad9c98d311a"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "0c4bddffb74dc79a08776ba530ed7120"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "0ef193cbc9d714a1e84dc499cc505740"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "602512948c637b712c6bbfbfac31ccec"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "65856a87cc1f412a397be2f35759ef07"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "5361eb47a5eb10aa61fc80decd975cb7"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "82a748da79263fc15ebd3c6745acd474"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "76ae65717db3fa217310b84e0d04e012"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "e6782e34084223098d26221f02cc1910"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "b279eba18e376f088840cda03603a3ae"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "a33fc6392e39deba0652123ab6d4e21c"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "a154a0be5db6ebed0e45f168136fe8d1"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "5c4702d697d78151bf38f3576e805afb"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "ca9ca480400665cd90ad58e922cc8032"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "2ce8123c50b294e847c290190e50f0ea"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "81bdefbfc993d4d3919a90378dba89d6"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "7713f335e01143ec6e09006463c4ec57"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "d75282cc80d82829c40d8f63aa114184"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "47e5cc575d21d5d6ebb50f841e791e75"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "26ea98f372042b0ec46a7843bcec9850"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "0d6499308299b60e96fe4c0a5c994bee"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "c9839bbc8b50fc998708c7dbf70a0726"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "0f08521db3275eb38c58bee872526e0f"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "682ab0d093aaaf4c7e0a16cfa7dce597"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "080e9988f9ff94fd378e4979da885d84"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "12a80a8fce789884bd46a8b0d6034409"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "0e1cbc7e38cc13c63a024459060ed90c"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "1a505b6d5b4f808425ed3c72cc56d195"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "a4ec82c5c3d7bdabc019ab838e3910b1"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "a996b1053f53c9f5d56926108e719374"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "0ea69e0536813b5848be38962b3cf326"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "4c3fcad997716c12f9e667335481c161"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "e3f8f4f835e9f82543b89dc74b18193c"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "99343798a3ebf5f32159f4b76549d554"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "a9c54dc87721b6db2fd1117ae9661148"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "023c364c03e5e695ed7d92881ec14737"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "0b1bf934b50265a9e8b3aaa7994c2719"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "4c5ab85b1e80fd3c541f333ae17511af"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "198d44c35fd323b2a0a72f06b5be8b2b"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "ad1ec4d7508191cc8f8b882105c1845b"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "a263f3ea28d980db04ba4fc478c931f5"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "ff2fcbc8ca74206acc804df965b3273a"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "77f4a85d866da89105d25e969daf5e4f"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "ec7317aa0f4ed190a9ac67e5dd3e6e51"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "e04e510c68cae501a3baeacba94605e7"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "b151509b6bd1da8a8ba944fff906355f"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "f48e2bded802907ec666497dc1bfdb57"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "67b499c472f51bf65559c84b18b1a702"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "a05081fda7206b4425abdb5abf5c3d44"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "8e2b973873543ee7ccc4bb03a6ca0d20"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "26d33af861d480d7bf83fe4c48453d01"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "c1b646c0b07d06b0a975543b85098c26"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "e3abb1b95375aab346890387c14431eb"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "0299a965f723fdf97751589ea4fab430"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "a4c0d4b707440cf4fbd47b8bbcb63148"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "aea12c6fb17a4d96cd70b15da299a752"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "1af687da5db67a4e39a0ffb05c7348bb"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "6a165e19d1e6845d3163bbbc49af8b7b"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "8ab4b5cec02019669ab23f3aff81232f"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "e6a4781e9837546df4714fa4fb5ad737"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "edc86439da5dc1bed598dc6bc84193ca"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "5c510c857fa84ebffd3f0cf6ea8c9a38"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "3eee7f036d7407880d273c5dac1c4c6d"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "3f2db8f96418a8e34b43898809e93cdf"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "6b56686641955a58afe2aad4a1001c7c"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "f1522fdf8e4f2d7f68a14b6a31f29deb"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "67b160c622c73a121e5ec74718d955cc"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "5a04cc8d1748d756920edec62067996a"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "ff4a69b71c7022438bdbb49268946292"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "e72d7202a1d204a38b77a01e65c0e1d1"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "ffa5b8cca90469261bf3798d1884c55e"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "7fef208df3937d129a9bf140e6db4499"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "e558193caf8dc9a2acee80db436a5883"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "05da9b016457e370e2ec68635590b10f"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "759d56ad9489507e76fc8ebcdeafa0c8"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "6c7438c62d3d0a6f022ceaaee88c81b0"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "96de35a4cfcd308bda07d44da6146986"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "370afa9478023b901cb16a5ea916251a"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "2f52d655fa8275901f10cb71077e790c"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "fc1f3229657f84fc1306894178b865cd"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "85a1a0d2b146be27c7381f6fad418433"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "080585cdae2885141cea16d60cd80c6a"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "47823ba2674b659fe6f68c277fcf6dfc"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "5eff371395d9db892ecbf8be88b2685c"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "f7ec622589ffb59b83d8442d1aa686ff"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "a40caa366eaec114d7a864bdd921b320"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "2191ffa8f5405599326a24ffcae40ca6"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "54e124a1911d456b780ef6dc4304d9b0"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "07980347abe575bd3553b34c644817cd"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "093a611f8dbce2f97980b3a98197c2d2"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "8b750a2d257f8a93894fcdddbc640d98"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "364a9ec4bb1aa7f6433306466abf3fd0"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "bb8ed9aed13bf69bab67f68310df4ac8"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "44fcb45d924e6ce81e9c92b0847bfcdf"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "61958c68a2d2c27c0860ffb62d61c01e"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "a355e1d42273ac3286dd3ebad19ac81a"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "726c42b1e45cf05a19a58817bc7f31ee"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "68eb587a81cab8175bd0f0cd79ab3cce"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "3cabd7243d83230a6beb5ff8a4f3ba01"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "96bf9784a6d08575039e95409aa6d0cf"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "a33bf9ed02d1d16621a5283ff4686312"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "1ef8d393301a26472a6785869ddfb8ac"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "b1ce80ca78e937c6acbb2dd770452c84"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "e8a8f0e8db566f0ad07aaa531f88fb42"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "43f501baef315dead87883d429348001"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "efeeeffe1e4ec64d1fcca91e8a915181"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "90753fcad5f33ce526e02e30342fc8b2"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "eb053462c514b649b452f87ccbccc7b5"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "ed62d483f13bde6c45147229bba83b5f"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "44f52b53df9079bae6585f7489d32bdc"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "1e26dddcbb83402329bd461fea9aacbc"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "4d977e8ec7f38f9aeb653cf744932651"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "70b0fdf1b77f51d3a691f414715012c6"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "a95305b1580de483c17a9ee394b53129"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "c673521f4ce9248149c231b3cc5cdb62"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "02283ab0800c31582d95a3e722e5e3b7"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "e5ab678db329733cd1e7f3bb573a9075"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "e7020f60e2dc5e15af901b4be98dc276"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "ba4edf8cce576ff147d962ad6ceac27b"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "7b08439144e1729b5c9987524f896846"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "e2612d407ab11f81bb472ee8adf03f00"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "e2b349e8f0ed68511d3cd086a2f19584"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "495239c538201c29784414bdf7b924f5"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "be3fff53f0214049b31d690774947646"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "e3c4e0df538dc1e617347e544c7cd8b4"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "e1bf1164d253d4c17a60441be971a8ad"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "0a17586c368c62a02f24aa20cd48affb"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "322b260b2ebd50b19773e96663a2d5f4"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "b92cea4e405e8c2eb77fe99e19be4c4b"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "f1eaac6be3aa4e231a9d10eda3763c19"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "a81c5be56f031e1140c48c3dbff94e5b"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "7bd25d9213d012852f1cd01f7247f17c"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "b1d384863ef3ad99e450648e50be40ac"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "04edaa2d89088ce7a8d2f48700cbb764"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "3b81b3b5b3804e5ddae11b5258c64852"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "7fbf7d8fbbdb76691dba3a05e993b8bc"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "747382bb442c2fcd78acd5036e70d04b"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "422eec0ad3add3aa6a579ac6fa09a52e"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "7a1be049d2cb5c5f1c169c06b81b8e8e"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "658b7310ed13526673ba4ffd781a93b4"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "e4738e1f1e870993a2394b1dc5fe5fe6"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "ed1da6a1ced1369780482cb3609ba30e"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "e0e95fc8bac80a8ad52b62e140a6159d"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "230dc004e7b0239bd1a032c38268748a"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "8412b976076e6ce5422517728fb2cce1"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "77ac7d26fa371ca8de8f90bdce049c9d"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "ca9b47caddfbf2570cfdc4a216d1b392"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "28f9167833c1287058f3054ad791b2df"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "2d7abf2154fca783b156d95e653b2966"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "8a09e93a363209071a670bbdfe40115f"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "c76fc877f6ab64acc670743b30c8001d"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "5624961ba24b33b9b11107408989a551"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "d786eebb488499394ce7b62307a26c12"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "0cf9c2bad59819b57156a1ebac387f00"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "6d4487b11fa6ee7c4e455e4fcc3136bf"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "e114297e16f4846421e017fec818fe61"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "53e4ffe4a06f2566fc3cfbe5522a76f6"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "47091badf525af4209313e8e0690ea86"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "0f9b44938720136ca0fb8341df347002"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "4a96a62ed330c2b9f25c9199c39db0ba"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "68a96daba6e8f67cc2380cdd0536f0e2"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "c2d3d533a218fafca4763018f4024ce7"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "9b80415ea25e8a99c2c628e0114d758b"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "3f178a3427d235dd9eddfa07fafd95dc"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "5f9a916106112518b542e0db279cab58"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "7398df8bf99e5750c6e556d7f169ef9f"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "1b214fcc992bc088ac14f1fcefa5597a"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "6a3c0347a8b11f20d213fc2f24d887cc"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "85796bb9be969bc65930b317c928269e"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "086fc2cb220cdfd384a02868cb68e32c"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "0472129a27ead63e4d41b98b5f13fe31"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "5fc0bbe2def41fdd133f9992fc5bfbee"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "f325ab738fdfcf1c5d981e299637dd10"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "3cb263e6c26a076de5051f428dd9bbb1"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "4ba363ac7d39bd18b42c14ecf7a336eb"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "c02e50d420dfdfca20dd65a627a87099"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "b03cb3cdf30e4ffce7d386018539bd83"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "a07bbb346e661a52e356fa2dbe27c34b"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "c7865d324e3064a5982af7f36e5844b3"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "24752fe0258c3c2c3980778dbfce974a"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "56ccbf9ea7df0636fc03be6967cedf93"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "9cf1ad35d13c7f048eee19c495e20342"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "6be0674e19540ec8f9e3552f7849f547"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "bccd27d674d235de83a238f04523fa0e"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "3b0196e8fc553430ddda1ae5bcf429aa"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "b97bbccda28062123213510e4c78f02c"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "13f46c0f12bcd04766914cb0546dfc2a"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "02575953f5152798edce4b8a75437519"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "bf0bb6f2815de631931d0a13987c628e"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "3b40d0f4e0566a297e336a6ca436e980"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "b089a1e63d0f654bb1896c8d7ee8415d"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "2c8c816d3093979831e278eee172ed02"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "d710999946e1222b3eec52c7df9827a7"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "78bb17a5e77a3cdfb93f849c9558b46a"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "729a9a41192fcac517287b6974426903"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "4eebc96ecd43ab0f82fcd3e284eaf491"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "d71411ae19544d53c58600d8b4f1be20"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "3560cceea2a5fad9f2e3a94e4c430943"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "24c08eccfcfa31f1674c23e5d5b4fa0e"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "0010ae5b6f513c410a52dcdfa6ee1c5e"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "e3d6dcd452cb6c7376a50809b3b2147f"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "c4ea65500d8437d82e4589b1d98cf443"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "96688c86ef719ef60f0e41b520a8cda7"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "63a72f0d6fe997fa156c369e7062328f"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "202f0a28d1a7b16270a566e51459a407"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "e68aa9616f109cb48280b0909aa60a48"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "16146b35a93e4486838c4ab5f88a43cc"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "a72aece74a0d3efe0ddaddb244edd20d"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "893dffa2c065ee6d6c2563f654723779"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "0ab82831273c12b56fa2809e195eb917"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "96e8b593e6ec215ed431504b60597641"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "7e430d68f7f29d2b2344f84366909af0"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "740130555a2602978ee6b71a00e0da0b"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "37a5fe31581ffc7d82daced6b2ae8ca6"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "fb37f9688174b78b75538775015e4c5d"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "b6625386e3568049f3ffbf4165f3eb1c"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "95df69e6988bb0aa6faa2782642e8b78"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "52baf701fccf6a27ba90b11666112b45"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "9c1e95b54c610a88ea910f4f1669b207"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "74663d156cb4b8c176989496005c93e8"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "041166e9b350d8b239c3568e23dfbd34"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "183d704696614ca760c5c83cb31a5b72"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "ec3da29fc9674ff2bdfec05bf125402c"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "982c091e875960ce9c6a8bd5f783f179"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "f012949def26b52f63a8170648aeec57"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "532fa5c6a205291477fa3262f598c7b8"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "38810caf819029bf3079406f76324f86"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "3b04736cae0b0b478747a75925b01569"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "ab9519fb84640d4fee5f977ebff11a28"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "82ef555ef1056d42e8e76d6495f7a7a8"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "1c735f08b65b39c0bac36b97219f681d"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "dacf24e5370604b91883917f95c3d8e1"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "6984bd2eae8d2c1048d74bdba765e831"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "23f7a7e2144c305221bbf141995690f6"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "2168e782326b6acc964b8bf9dfc4b8d4"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "cb9ffeda85a2ba85d5d04965db6dad98"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "85d42f322820c92dc2f523ba2407e29b"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "0c8613a4360dc253c794ddc85acda924"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "64cf82dcaaca88058702c800453d00a4"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "5feb74b951b9d378eac911f07883f361"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "2e6b458ef1272e0e6f9e3ebc710a4aab"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "8d9b2bff57516cc6d2464788b6bc3d76"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "b64f257227cbc168acadecfe6d4d2b66"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "b4837f6eb943ac9702773691bed8b0c8"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "b6d4737e329f24dc36042bab3f2c4200"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "46679717df12f7e575ff0eac7aab54df"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "c56023aefc6a6892848f0dcdc9c44071"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "1244798554b2e429198ee99a999952e7"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "fe6c266a23eb57b12413f1569006453b"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "419f5f460c4776bdba422eff750dffbb"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "be36fd74a31e325841e937d4df5f1678"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "7885df645901b0b0d2993d2a7b3f0f8c"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "b0fff5474eb10b347978ba59fc51000a"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "5bfcf76ce04bda2a908940323434fe1f"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "f1b49f7c4a4f7398376e95595b3b8e7a"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "786e05d895d0f424eea70dc48004d22a"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "09f304c1109c564719c950e0b7b6245b"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "eaf74e9a4faf5dbf9019aefeffb06403"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "9311aa4cf7b6a98a34b976c2f11e42f8"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "e80dfdfefdd078adb138baaa38a1e0c8"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "0b65a95b122e1f820c274d6e4c6e79f3"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "73b6c052945d87c32ba495da3a30ca75"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "7c8333da2bb90c82e196cb73e0ce1887"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "4395b599981b07eda74c1b8a22b5ee79"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "5e872b44b1471397d5a93a9441f69a7a"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "4d48981d29d3cd9b2dc2240bf26189ba"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "9085e37860faa71b4140fb6c7692aa4f"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "b33c04c283b05deb696af27e0676e8b9"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "b5423f6b761ac0594cc8496d6f834a16"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "84b050456161939a5e8559fff546c1fb"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "cc51a719a9822b451daf15c284255ef3"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "d899ff312c3c00118792b25a9482833d"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "a8cd71a82e9dd258a9665a72c5b66b1e"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "de41c4b107ea7614400c4b33390e287b"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "57fd10f8718d27c7164e86135eb55e6c"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "5b7b80b16a2aa0a7168a7b03e804966a"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "509faa18e82c9f3542b21cde2c89c3db"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "24fc3aa2a3bf0163534e4c51e001428f"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "22bb6510a86bd087428580bbf8d91e11"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "83480657feeed16d543825cf6ba8c092"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "7ddb97b3f011065c1a0d3d834a715aa2"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "a75cf4aeb9d5f528ac42c4df886e10a4"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "2310d6eec0608496388976977cb5cf80"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "58d85147df298071c94cdb0b80ea1dda"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "d65d8c5ea8e2c67b6f0c2f6c9b0a6a38"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "5efaf7ed7c9e89e188fd55ea4ad6f2f5"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "eb8087a6d8210790f28a83b1e89730f0"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "96ee367f0fd4f6138eb9a0d2e024c86e"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "c21416928a57a1bbfcb0cbffc6b269e2"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "7217363ad8e7f57f1823f0e624979cf3"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "c7e3bdd8176f254a8f69ed95aa7b81b0"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "ed515d0c9124119a8cc52dce59b446f3"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "f701d5ef909407f688d5fab51f21542d"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "c9f6603417c7f254fd6f23b376dbfcda"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "743b59b5ae48de0de4e3031411b762c5"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "3963220daa8b4a28c38daeb9707f0261"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "896b3fb972fc4f728e377d57d1fa6bf7"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "3ddf17e362e23b4ebe88601d973054d4"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "06f1937d3b5a435f7134499432ea4adf"
  },
  {
    "url": "404.html",
    "revision": "0e8d883122a6857add57ab229be7f950"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/1frontend.60a9f83d.png",
    "revision": "60a9f83d3897ccfc85b19edaa45be0da"
  },
  {
    "url": "assets/img/1mycart.fea04e56.png",
    "revision": "fea04e5670e65fc427e521a15ff61b17"
  },
  {
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
  },
  {
    "url": "assets/img/abandoned-cart.40d28282.png",
    "revision": "40d282829a330c99a715eed34402753b"
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
    "url": "assets/img/create-product.de3763bd.png",
    "revision": "de3763bd35b420fae98e2bd46f259ddb"
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
    "url": "assets/img/custom-item.f547ea53.png",
    "revision": "f547ea53626d351601204f2250c821d4"
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
    "url": "assets/img/customization.54fb7b0b.png",
    "revision": "54fb7b0b129ec88f1738222b929ac496"
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
    "url": "assets/img/design.3a73ffcb.png",
    "revision": "3a73ffcb7572045dddabe71e47447436"
  },
  {
    "url": "assets/img/designOutput.c4642cb8.png",
    "revision": "c4642cb8d8e8c75bb2096f11e22521e3"
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
    "url": "assets/img/frontend2.864a8940.png",
    "revision": "864a894032e86df0e8cd907d60957280"
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
    "url": "assets/img/is-required.6da50271.png",
    "revision": "6da5027184bde7fb184eb6d5be3777b5"
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
    "url": "assets/img/virtual-custom.9628bb5c.png",
    "revision": "9628bb5c415bd571a744c2d610fbc5c7"
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
    "url": "assets/js/1.587ecd61.js",
    "revision": "e3b32a4132a5b6078205caba64b9355e"
  },
  {
    "url": "assets/js/10.8891bad9.js",
    "revision": "5561bd2feb7b7afe1005f0fe366e6b1f"
  },
  {
    "url": "assets/js/100.3432405b.js",
    "revision": "630cae0e6f88197bb9af69034191d6ed"
  },
  {
    "url": "assets/js/101.13798a97.js",
    "revision": "2727eff0ace083986f0361476a929940"
  },
  {
    "url": "assets/js/102.54088360.js",
    "revision": "c9e1170f1ab11169fc9cdb647de78db3"
  },
  {
    "url": "assets/js/103.a7cfc77f.js",
    "revision": "3d1100dd59cd30829b92a21fa6d96692"
  },
  {
    "url": "assets/js/104.27c064b8.js",
    "revision": "c9d75ef5cdd5e4134c588f4091fac3b6"
  },
  {
    "url": "assets/js/105.77a85c47.js",
    "revision": "815bcccaf63bc968903537ddaa80c0fd"
  },
  {
    "url": "assets/js/106.c9828f9d.js",
    "revision": "64623064584f4843cd424665ae3230ff"
  },
  {
    "url": "assets/js/107.eeab4fb2.js",
    "revision": "dc5d0d30f2959b79b4a5da503cab6bc3"
  },
  {
    "url": "assets/js/108.abc566d6.js",
    "revision": "a2296772d4bf0e253edd68a57b307488"
  },
  {
    "url": "assets/js/109.3147de63.js",
    "revision": "aa4976404380b49dbbe8a637c74aa7ba"
  },
  {
    "url": "assets/js/11.2c564bd9.js",
    "revision": "3de66daa294504060b984934b8e0922f"
  },
  {
    "url": "assets/js/110.e5e28524.js",
    "revision": "21fc4a14fc580bf254ce46fa47b3172e"
  },
  {
    "url": "assets/js/111.377fa497.js",
    "revision": "7ed88f32122bc2bb1a9449289a964e65"
  },
  {
    "url": "assets/js/112.0a6c9003.js",
    "revision": "667fb67e1624f4725d3fed048ff375aa"
  },
  {
    "url": "assets/js/113.b001c45f.js",
    "revision": "f666764b38ea7bca0bc8332ab96258a7"
  },
  {
    "url": "assets/js/114.5f237fc0.js",
    "revision": "9dd5d05a684a156d0fdf13e23a6aac39"
  },
  {
    "url": "assets/js/115.c97dfc3c.js",
    "revision": "aab28061de2238ddeaf4fb16c151ea65"
  },
  {
    "url": "assets/js/116.c788f197.js",
    "revision": "d8fbde92e1d4ee4c3c50cb2eaf5034d3"
  },
  {
    "url": "assets/js/117.5c235a3f.js",
    "revision": "309803bf8d88494c6ec17ce85a2339e0"
  },
  {
    "url": "assets/js/118.2fc5f597.js",
    "revision": "646d17c99463e349d8ef8408ed321f74"
  },
  {
    "url": "assets/js/119.3656dd7f.js",
    "revision": "e8d0c1aa23680ef314e4f6f17d67c4c4"
  },
  {
    "url": "assets/js/12.19773084.js",
    "revision": "68d8eae364fb119a8b8e75f13dd88a6e"
  },
  {
    "url": "assets/js/120.950b6601.js",
    "revision": "c67b2cc7e440cc6b58a5343646696d19"
  },
  {
    "url": "assets/js/121.018cc85e.js",
    "revision": "5d0360f9cdd527d05b681ea092eba533"
  },
  {
    "url": "assets/js/122.9f9f70a3.js",
    "revision": "38ef32d05847aa5b2764053dc7666c1b"
  },
  {
    "url": "assets/js/123.3eebf152.js",
    "revision": "40663f0330841bee44356135f3968115"
  },
  {
    "url": "assets/js/124.7d07677a.js",
    "revision": "b4391d994325de43092ca8600f8063d5"
  },
  {
    "url": "assets/js/125.eedd6c97.js",
    "revision": "b6ce29b4c0a9b349531248a41e02ffc9"
  },
  {
    "url": "assets/js/126.57649dc6.js",
    "revision": "3dd2d4fe34898478e59f3e60783cf9ed"
  },
  {
    "url": "assets/js/127.0491b615.js",
    "revision": "c80fef1ec62257fb4004a0701a2158dd"
  },
  {
    "url": "assets/js/128.fcc44fe0.js",
    "revision": "e84d6a11da6bf937520719db75b7c441"
  },
  {
    "url": "assets/js/129.67a2d99b.js",
    "revision": "bf22ba1ba3ed59ffb856d41e8dde9789"
  },
  {
    "url": "assets/js/13.e84b1a0c.js",
    "revision": "7af79ed72849bc0becffe2d98208d926"
  },
  {
    "url": "assets/js/130.8c97d351.js",
    "revision": "69790151305b001214d69c010ff16af4"
  },
  {
    "url": "assets/js/131.97f1505f.js",
    "revision": "172254e653d8ef4a58923ffd14c25ed5"
  },
  {
    "url": "assets/js/132.94a0816e.js",
    "revision": "67578030a4a012bc3d19711d965117f4"
  },
  {
    "url": "assets/js/133.f3644f2c.js",
    "revision": "db56dd764e268dd984792bc583145f2d"
  },
  {
    "url": "assets/js/134.3e4ee683.js",
    "revision": "a79de94c799a5b5ad039799ccc9be75c"
  },
  {
    "url": "assets/js/135.9988ac9d.js",
    "revision": "1470a5314f34386bc419e07b0220ad5a"
  },
  {
    "url": "assets/js/136.85fdfdf9.js",
    "revision": "7555423f4d95fcedc9ef94ac29778c3e"
  },
  {
    "url": "assets/js/137.9c713a24.js",
    "revision": "156efa2b3a0482cb2c94051683acd626"
  },
  {
    "url": "assets/js/138.7a93416e.js",
    "revision": "b34aab76692b7e834edb3268f7dd6a62"
  },
  {
    "url": "assets/js/139.40603e32.js",
    "revision": "6eef3da19322057af670e38086a69382"
  },
  {
    "url": "assets/js/14.23cf6bad.js",
    "revision": "4e03253768cc48a044eb99057a25c821"
  },
  {
    "url": "assets/js/140.db45badf.js",
    "revision": "9c3e2d54c456dec18a915dbdc02be839"
  },
  {
    "url": "assets/js/141.8ea338fa.js",
    "revision": "294a7595005d4f149b7994d2b235d7b0"
  },
  {
    "url": "assets/js/142.9b75c581.js",
    "revision": "1dc5688ccac0188efe409f3a3ab793d6"
  },
  {
    "url": "assets/js/143.fc893205.js",
    "revision": "d5efbfbf86a3433dafa8a03cb70206bf"
  },
  {
    "url": "assets/js/144.e9917931.js",
    "revision": "3250ca8e081a4a341629bcb8bfbc3c4c"
  },
  {
    "url": "assets/js/145.9df9f313.js",
    "revision": "aeac8589b749baad0f942cb66df6d652"
  },
  {
    "url": "assets/js/146.b8779dce.js",
    "revision": "9c0ede78e4230bdedcde8810ec1715e3"
  },
  {
    "url": "assets/js/147.fd1b12cc.js",
    "revision": "8d82255daff5f16200bd77b51cc6c100"
  },
  {
    "url": "assets/js/148.a08aca8b.js",
    "revision": "9c461eecaf7db735f87f4867f30e6e03"
  },
  {
    "url": "assets/js/149.1caf98e7.js",
    "revision": "df1b0093209152d6a4855b656834e35c"
  },
  {
    "url": "assets/js/15.e3acfa79.js",
    "revision": "5f7beeff267ed9e94210226c5cf7b4fa"
  },
  {
    "url": "assets/js/150.003977ff.js",
    "revision": "06005ab49981294022a930b5284ae466"
  },
  {
    "url": "assets/js/151.d2e7db6d.js",
    "revision": "72f79c17a31cbe0c9bd9550636ae8598"
  },
  {
    "url": "assets/js/152.1521945b.js",
    "revision": "281dba8f0ee605f843acbac9c7a442f3"
  },
  {
    "url": "assets/js/153.c935a60b.js",
    "revision": "8c867a82369e85ac762080498d10e41a"
  },
  {
    "url": "assets/js/154.73ccc9ca.js",
    "revision": "d8a2f3864712bc4aa04de3fd567fd5fc"
  },
  {
    "url": "assets/js/155.dc3cf568.js",
    "revision": "16223eead9253565fb118d93e4e1dfd2"
  },
  {
    "url": "assets/js/156.0d2a41cd.js",
    "revision": "53572ad28977d00bb38fb21b6ad7cbbc"
  },
  {
    "url": "assets/js/157.414f66cc.js",
    "revision": "ddad0a47b8c18733911e1806d435f7fa"
  },
  {
    "url": "assets/js/158.b6bfe8da.js",
    "revision": "cb4ad5481986c8d073544ed98748c5b7"
  },
  {
    "url": "assets/js/159.ee09b342.js",
    "revision": "c46b3ea213ddbe3e6a92fa6e69227e63"
  },
  {
    "url": "assets/js/16.84d1a8e7.js",
    "revision": "079d60d50a7e1e176de119336eaaba22"
  },
  {
    "url": "assets/js/160.3926eefc.js",
    "revision": "8e47bfc004eeaeea47d4150f72ff479c"
  },
  {
    "url": "assets/js/161.9c3c6402.js",
    "revision": "355737691495b0df40e5bce5bd363aa8"
  },
  {
    "url": "assets/js/162.d87f7afd.js",
    "revision": "7fb0fa78fe80bc74f7f3b332d1acc370"
  },
  {
    "url": "assets/js/163.c305e47e.js",
    "revision": "448d03c5f2bdb66e44f17552094cb2b4"
  },
  {
    "url": "assets/js/164.cf9dfc85.js",
    "revision": "b964b6ecf3b4b3d2a78d2ca8dc27103e"
  },
  {
    "url": "assets/js/165.51e8ca0c.js",
    "revision": "a22c17e3fee44cace27bb1d11595135a"
  },
  {
    "url": "assets/js/166.8c828aef.js",
    "revision": "a6971d9635cae0dccf33f03304dc2266"
  },
  {
    "url": "assets/js/167.6a6fcb55.js",
    "revision": "aedbf6e3c46cbc3493ad502e3a4537b1"
  },
  {
    "url": "assets/js/168.7ed8b2f1.js",
    "revision": "c13399ef62479902cc329f3e56f7ccc6"
  },
  {
    "url": "assets/js/169.41c80ba4.js",
    "revision": "806fc346359dd460327051e5a41dff7a"
  },
  {
    "url": "assets/js/17.f73bebb1.js",
    "revision": "bef42bb93d07eb5cc1581bf80fa1e042"
  },
  {
    "url": "assets/js/170.90bae81a.js",
    "revision": "80c7f5da405fccc97de4a6937eed939e"
  },
  {
    "url": "assets/js/171.8236924c.js",
    "revision": "e1ee69e059271617a47c79a9b47e045a"
  },
  {
    "url": "assets/js/172.62e2ccec.js",
    "revision": "cd59e230aa0f919a1cb6fb38da2b8bda"
  },
  {
    "url": "assets/js/173.4d35e469.js",
    "revision": "7f9fc6d9c69f2400566baf7a31158503"
  },
  {
    "url": "assets/js/174.f64a5a1f.js",
    "revision": "7f74d964fc01e8a20bfd6b5d37803593"
  },
  {
    "url": "assets/js/175.518fc812.js",
    "revision": "60c86ee3d0f99f984105b341743ff427"
  },
  {
    "url": "assets/js/176.67c87d42.js",
    "revision": "ab0c5105ea281194b0b69de1b6c5cf8c"
  },
  {
    "url": "assets/js/177.f57661fc.js",
    "revision": "b7ece247651fe86c5b0b946164d86f9e"
  },
  {
    "url": "assets/js/178.4907bbe5.js",
    "revision": "9f035da287ecab0e4d6fde6a1352ae46"
  },
  {
    "url": "assets/js/179.cb3ecac1.js",
    "revision": "82dab60fadbf1b1b773c583f44a4c82a"
  },
  {
    "url": "assets/js/18.6062c7cd.js",
    "revision": "8d0fc9865b7d3bc8fabf41f92ccd8a12"
  },
  {
    "url": "assets/js/180.a74969ae.js",
    "revision": "9e822f1f5a4ced5fa94fa7d9a64ba079"
  },
  {
    "url": "assets/js/181.fea0f595.js",
    "revision": "6c4b3be96578959c50c99a7e3eb3641c"
  },
  {
    "url": "assets/js/182.2d3bb4e4.js",
    "revision": "f0a478397999d34ff8b3accf3c471deb"
  },
  {
    "url": "assets/js/183.38bb781f.js",
    "revision": "dd06dd390536cbd0286609a026efa09e"
  },
  {
    "url": "assets/js/184.0cb4f7e6.js",
    "revision": "2bcde1f37868bb9dd30baa831bd70595"
  },
  {
    "url": "assets/js/185.624f1413.js",
    "revision": "9452823452871870207771e640183b53"
  },
  {
    "url": "assets/js/186.9ed612ec.js",
    "revision": "e47bce878eb2fdcb65fbab5d8a6e47df"
  },
  {
    "url": "assets/js/187.24b402c0.js",
    "revision": "72f8a596d41d4be156b7aa044ece7366"
  },
  {
    "url": "assets/js/188.953ba114.js",
    "revision": "78bb8bd671bf2a8c29eea09a51528e27"
  },
  {
    "url": "assets/js/189.f10f7ba5.js",
    "revision": "f99418be8c935a558ba970e3ce24705f"
  },
  {
    "url": "assets/js/19.b02a6ecf.js",
    "revision": "e6da7895ca6b5f77ff423aecccf676f6"
  },
  {
    "url": "assets/js/190.99ec433d.js",
    "revision": "10706c36d5b6cccf5edb3d9fe6000379"
  },
  {
    "url": "assets/js/191.16498821.js",
    "revision": "33221664da04929cd424fcc7a0242c62"
  },
  {
    "url": "assets/js/192.51c9a731.js",
    "revision": "ae9bccec28dc6465bb15ca57fa343c6a"
  },
  {
    "url": "assets/js/193.f77e7605.js",
    "revision": "2d23c9371f0dbc86651c4c5e8cfa13e7"
  },
  {
    "url": "assets/js/194.9c5b02c8.js",
    "revision": "154e48b971de8e446cbd25f78bb2489d"
  },
  {
    "url": "assets/js/195.71681f25.js",
    "revision": "3854b0094c0fafd3c836eeddcf5489e1"
  },
  {
    "url": "assets/js/196.4576dea8.js",
    "revision": "d82fcb8375017377cc5170f9bb3e2d11"
  },
  {
    "url": "assets/js/197.02f1af7d.js",
    "revision": "73e2271c592210426b6e6bc656e3ad2c"
  },
  {
    "url": "assets/js/198.64d02049.js",
    "revision": "29b45dcaeaee0f55228a8ab6c36f95fd"
  },
  {
    "url": "assets/js/199.bcfe7fcb.js",
    "revision": "bdeb0d3148210cd2f725dbca7597ddfc"
  },
  {
    "url": "assets/js/2.9c02dff8.js",
    "revision": "938a4ce262336f4c3f36e4b2297f5651"
  },
  {
    "url": "assets/js/20.21620801.js",
    "revision": "ee80c9ee2296708a06af414c3e2ec88a"
  },
  {
    "url": "assets/js/200.cd90de54.js",
    "revision": "76a7e0b42406dd7369ed3591b1e0065e"
  },
  {
    "url": "assets/js/201.1f66d64c.js",
    "revision": "8d49808cf4e2b6791220d3d4f4b0d948"
  },
  {
    "url": "assets/js/202.988a34d8.js",
    "revision": "fea56f8a95e7c44ba1632c48f56e4d73"
  },
  {
    "url": "assets/js/203.5600d11d.js",
    "revision": "4184243614942208c95db6f937d1ba5e"
  },
  {
    "url": "assets/js/204.df13b2f3.js",
    "revision": "e41d3f1d06557ad8178f5a73073e4c75"
  },
  {
    "url": "assets/js/205.c77f3286.js",
    "revision": "2797f2d83446daf678cfc4a1d8fec9c2"
  },
  {
    "url": "assets/js/206.7c469d6a.js",
    "revision": "dfd28174dc8c362523a0371c500bf408"
  },
  {
    "url": "assets/js/207.d79da663.js",
    "revision": "57a179a5dba192b284e75ac41688bf25"
  },
  {
    "url": "assets/js/208.0c118451.js",
    "revision": "58d2d62f1b61ee26b6ec6f92e1c74e47"
  },
  {
    "url": "assets/js/209.509a048c.js",
    "revision": "231efa397bda42c54fe064d9c8edd6c4"
  },
  {
    "url": "assets/js/21.d87e7aa1.js",
    "revision": "dcef061dad7d47b9a724f0d56a936811"
  },
  {
    "url": "assets/js/210.00081c05.js",
    "revision": "fc0aa458fdd16d027f787e36330f2070"
  },
  {
    "url": "assets/js/211.c3b014db.js",
    "revision": "4f9672d121d3c77984b5e79e52e211ed"
  },
  {
    "url": "assets/js/212.9fa72783.js",
    "revision": "3134efb278400177b3266b3d0de333f2"
  },
  {
    "url": "assets/js/213.7587855e.js",
    "revision": "393fae5dbddf19ef61d2e42b00bd3f86"
  },
  {
    "url": "assets/js/214.8b6eb805.js",
    "revision": "1da0033a947f4375145cf2c4abee01d2"
  },
  {
    "url": "assets/js/215.5fb3a198.js",
    "revision": "d4eefcada55306bb1de21268b6d665dc"
  },
  {
    "url": "assets/js/216.fef12077.js",
    "revision": "55c3f9bf04a75dffd9deebbe5445247f"
  },
  {
    "url": "assets/js/217.48851b97.js",
    "revision": "be07bf014392303e4cde5dd2ba34ba4a"
  },
  {
    "url": "assets/js/218.6a026b56.js",
    "revision": "629dd373f0aa74bafc6bbda282484c70"
  },
  {
    "url": "assets/js/219.f35d7a7c.js",
    "revision": "83359b4bc5d4f014d564d6b938f7f288"
  },
  {
    "url": "assets/js/22.f5373453.js",
    "revision": "ec2228ea63c196f058e874728139588e"
  },
  {
    "url": "assets/js/220.db8eb72e.js",
    "revision": "024beef6ff20cc9ddb16f53dbf8a0295"
  },
  {
    "url": "assets/js/221.66bf4d90.js",
    "revision": "2ac78db2c47cafdab8c1b0b1ba7aab34"
  },
  {
    "url": "assets/js/222.6ba60a55.js",
    "revision": "fbfe6076df03a8ce588ff57f95d1947d"
  },
  {
    "url": "assets/js/223.d65599d9.js",
    "revision": "8efc8d9ffbd3c748a58a19e8735b74a7"
  },
  {
    "url": "assets/js/224.f6578ae1.js",
    "revision": "00327058ee398e3cd0f21f29bf875f76"
  },
  {
    "url": "assets/js/225.c8044644.js",
    "revision": "632e730e09d5c4de9ec75930e4cd64e9"
  },
  {
    "url": "assets/js/226.b64b4d46.js",
    "revision": "74f07e6f42121a0f1dc4ad4c09fe30ec"
  },
  {
    "url": "assets/js/227.982c8428.js",
    "revision": "fc7280a53721ddee3eb1d78af5c0943c"
  },
  {
    "url": "assets/js/228.712231f2.js",
    "revision": "7e98fef2c372ec0d88ec5f6b6a03b620"
  },
  {
    "url": "assets/js/229.859b63dd.js",
    "revision": "69731c02fb6829ea69d971406b69c93e"
  },
  {
    "url": "assets/js/23.65742d48.js",
    "revision": "aa252f8e36f9fc1a7cbf049db8c14046"
  },
  {
    "url": "assets/js/230.dddf46d3.js",
    "revision": "0115ba553b60a117559b4c87d1fa2ae8"
  },
  {
    "url": "assets/js/231.5ffefd87.js",
    "revision": "bcfbba584bb0bf777ce3fb3ceeabb113"
  },
  {
    "url": "assets/js/232.7e65a52b.js",
    "revision": "edc2da5c40d22864aba2a666b37c5c47"
  },
  {
    "url": "assets/js/233.9d9a0510.js",
    "revision": "4c2a77b23bfdb0b4b107723986d9fc82"
  },
  {
    "url": "assets/js/234.cdd6c11d.js",
    "revision": "2e8ddca08f8069fb6510ba3a4aedd47d"
  },
  {
    "url": "assets/js/235.0c0d3ee5.js",
    "revision": "acfa46a2df6cf6678315e301fa415bac"
  },
  {
    "url": "assets/js/236.5d533d85.js",
    "revision": "1f7b89080a4702574c6d44a0788e0bbd"
  },
  {
    "url": "assets/js/237.86be169f.js",
    "revision": "78a9d72d3cff5e4b3e568024f3cac086"
  },
  {
    "url": "assets/js/238.ca3b7912.js",
    "revision": "d2e4c023458d49bbb703877916c42d64"
  },
  {
    "url": "assets/js/239.89e77723.js",
    "revision": "6ccd2cd3cdfeacb57006fc91ea51882c"
  },
  {
    "url": "assets/js/24.fbb509ba.js",
    "revision": "e6e34e3924ec87828847fa9e5e999fc7"
  },
  {
    "url": "assets/js/240.7f618edc.js",
    "revision": "45ccba408e5c647aaeb2fda07964f575"
  },
  {
    "url": "assets/js/241.ddd42980.js",
    "revision": "9900ac34b3fbdde580b14f7782c533a4"
  },
  {
    "url": "assets/js/242.c7a3812b.js",
    "revision": "a6a517035fbaf317d7ff998a9da68e69"
  },
  {
    "url": "assets/js/243.1a022b82.js",
    "revision": "5e52b87c52d286955498c29936fbc3b3"
  },
  {
    "url": "assets/js/244.06e7e5fc.js",
    "revision": "f5bf22f21bf797298c71786f9350396a"
  },
  {
    "url": "assets/js/245.f69f80ae.js",
    "revision": "3528a2b20601666cfa90620223db86cd"
  },
  {
    "url": "assets/js/246.aad6f34c.js",
    "revision": "d10490a97cd61e8ea3f2849a0475f9f5"
  },
  {
    "url": "assets/js/247.eaaa0777.js",
    "revision": "36f303bc577b75ec6407139fcbf3b7be"
  },
  {
    "url": "assets/js/248.5b4146e5.js",
    "revision": "0702d54d694eb3a9ff345566fd7682d1"
  },
  {
    "url": "assets/js/249.7716cead.js",
    "revision": "c55f84f8ac6415a68036f5416823b81f"
  },
  {
    "url": "assets/js/25.fdac5d11.js",
    "revision": "d441e01b23c83be94f67f1afa1f5d47b"
  },
  {
    "url": "assets/js/250.90f28e2e.js",
    "revision": "132e70effcbba0eb4c6f48f38b323fd7"
  },
  {
    "url": "assets/js/251.eabcc26b.js",
    "revision": "cb8ab2990b9875b12539087712cae95d"
  },
  {
    "url": "assets/js/252.c4d44960.js",
    "revision": "5fc8448715b50fe879c31b5f1abfcf5a"
  },
  {
    "url": "assets/js/253.5d27b3b4.js",
    "revision": "c33255adad56d60eb655a76fc0424644"
  },
  {
    "url": "assets/js/254.65cc135f.js",
    "revision": "3edc78a152962d496ee7aca46b14126f"
  },
  {
    "url": "assets/js/255.83031c45.js",
    "revision": "3833981b5d316ae9452af3ec7ec3d85a"
  },
  {
    "url": "assets/js/256.8683d43c.js",
    "revision": "8df9a4c21dae6bf26b56e02f245c48f1"
  },
  {
    "url": "assets/js/257.a6d4a947.js",
    "revision": "55667ea2d80541e77011e1c3ae34f951"
  },
  {
    "url": "assets/js/258.5ff12dd0.js",
    "revision": "fc8e4d058a0a3779607e1d67d8b5365f"
  },
  {
    "url": "assets/js/259.ce56ebe8.js",
    "revision": "2e54276737d926508522b6db35c1f449"
  },
  {
    "url": "assets/js/26.291e34a3.js",
    "revision": "2d6c0282c09c20fac2dbf22ab880a2b4"
  },
  {
    "url": "assets/js/260.dc6bb6d1.js",
    "revision": "2e00c6a4e0d71c89cfad72ba4c01f554"
  },
  {
    "url": "assets/js/261.1b4a1627.js",
    "revision": "ae07a7bd63e6d5d3d5a1efca6b86fbd8"
  },
  {
    "url": "assets/js/262.86e7654a.js",
    "revision": "f7b4f3d473e75a34d60b15ff6b2cafea"
  },
  {
    "url": "assets/js/263.2f0d7fd9.js",
    "revision": "4373e561bebcb723ba87397886b3a979"
  },
  {
    "url": "assets/js/264.8f01ad05.js",
    "revision": "2ab27157ab47a237c12f919841ca0e0e"
  },
  {
    "url": "assets/js/265.02d4ee1f.js",
    "revision": "96856871a629831add6fc8d17c528253"
  },
  {
    "url": "assets/js/266.a352f7b9.js",
    "revision": "6cfe60cf4cd10a829b783cc1f3a96a6f"
  },
  {
    "url": "assets/js/267.a2804c92.js",
    "revision": "1b0306465d1679de101814af646d2d43"
  },
  {
    "url": "assets/js/268.0754e86f.js",
    "revision": "b5fbb3bb33c60c66905fa0cd07e720eb"
  },
  {
    "url": "assets/js/269.ab094ad8.js",
    "revision": "8bd433c2c9e91992e3a6475d4da82133"
  },
  {
    "url": "assets/js/27.5df42a6a.js",
    "revision": "3046adf4bffcf67ef39c2a0559ff52e1"
  },
  {
    "url": "assets/js/270.3b62d68a.js",
    "revision": "eaa6fb5dca3e384bf03589380463b22d"
  },
  {
    "url": "assets/js/271.ba627290.js",
    "revision": "717b4e35e8abcf6b2eac2b8692609078"
  },
  {
    "url": "assets/js/272.921a3840.js",
    "revision": "55919a7263bccce4c7f515977ebe4e62"
  },
  {
    "url": "assets/js/273.c3ffb5d9.js",
    "revision": "fe86d66dcfb0e8e757353cfc749be7e3"
  },
  {
    "url": "assets/js/274.7c2fcfae.js",
    "revision": "a8f80926ae60ffd96daef08e9409d230"
  },
  {
    "url": "assets/js/275.f92b7e4b.js",
    "revision": "35386f021eda8260dae899d41b92b839"
  },
  {
    "url": "assets/js/276.2fb7829f.js",
    "revision": "5d74aa38464fee4b560bd6f0c4362596"
  },
  {
    "url": "assets/js/277.d70ddad6.js",
    "revision": "a6e346cd2c27cc4d8ab4e4d7b32991c9"
  },
  {
    "url": "assets/js/278.1ab253f4.js",
    "revision": "5e3f601d7cb02c7981eed72e8d9e0489"
  },
  {
    "url": "assets/js/279.26829999.js",
    "revision": "327c796ae5491ec98f3991406757609f"
  },
  {
    "url": "assets/js/28.84d63179.js",
    "revision": "15e3e291bfee107f0687f70afb75f6ec"
  },
  {
    "url": "assets/js/280.c7652ff8.js",
    "revision": "e6b1140c0356d79883590a73747308b7"
  },
  {
    "url": "assets/js/281.f08fc274.js",
    "revision": "344830df6e4a7af8d09eb8a6defe1dda"
  },
  {
    "url": "assets/js/282.125ee38d.js",
    "revision": "f5e0bdb999f9cbb1d2859f190f2cf7cf"
  },
  {
    "url": "assets/js/283.ae155a6f.js",
    "revision": "c96ddf28f2775b1ed9562039c8cfe83e"
  },
  {
    "url": "assets/js/284.813371c6.js",
    "revision": "c3aee7a6874f4457052265c73c5fc5a6"
  },
  {
    "url": "assets/js/285.d8bb469b.js",
    "revision": "257c89d820083068b75c8952a7a41ed4"
  },
  {
    "url": "assets/js/286.c473598c.js",
    "revision": "711c6bca3ea96236028e9e30300f8f73"
  },
  {
    "url": "assets/js/287.c174e84b.js",
    "revision": "4235c3eb7dd234c4aa0238e92540037f"
  },
  {
    "url": "assets/js/288.1fa93ec6.js",
    "revision": "4967b21cccf2f7c1614366dfdba8ebf8"
  },
  {
    "url": "assets/js/289.0f937b38.js",
    "revision": "d7978bdc58696fbf36fbae77aebe3fa9"
  },
  {
    "url": "assets/js/29.f9b37d38.js",
    "revision": "72e618d7845c97068d8a75eefeacdd19"
  },
  {
    "url": "assets/js/290.3b2bc36d.js",
    "revision": "f178e75565bf46820b320dd661243b61"
  },
  {
    "url": "assets/js/291.fa728bd6.js",
    "revision": "58b563ee015777dbdfc85b8724a7c01c"
  },
  {
    "url": "assets/js/292.c0aa9e1a.js",
    "revision": "ba1586f534a7b752b7a1c3021fd147a2"
  },
  {
    "url": "assets/js/293.6209cb1e.js",
    "revision": "e130353e9542ffab2acc73fabb73863c"
  },
  {
    "url": "assets/js/294.e329337a.js",
    "revision": "279531d985e96b2e2b3cedad76d92332"
  },
  {
    "url": "assets/js/295.ea6480c2.js",
    "revision": "66cdf1fcbeef9a70729859a3f6955012"
  },
  {
    "url": "assets/js/296.b60dd812.js",
    "revision": "af65d03460f745423437321ff845130d"
  },
  {
    "url": "assets/js/297.3768914d.js",
    "revision": "e8520567590b765491d8af8a10b5e6f0"
  },
  {
    "url": "assets/js/298.68d112d2.js",
    "revision": "fbd01da697eaf67001838e558bb76f4c"
  },
  {
    "url": "assets/js/299.588539a1.js",
    "revision": "a58ff620c7ad005942c2230e0de21328"
  },
  {
    "url": "assets/js/3.856abb99.js",
    "revision": "885cfe56943adc2d4dd06ab547a8ac2a"
  },
  {
    "url": "assets/js/30.6609a8ea.js",
    "revision": "5fcbd0d04c2a53bca075640fb687adad"
  },
  {
    "url": "assets/js/300.dcd7979a.js",
    "revision": "4c9719561026df7634468ef602597853"
  },
  {
    "url": "assets/js/301.698ad500.js",
    "revision": "c59ee8b78e0d51dc4fc67489a9a38a0f"
  },
  {
    "url": "assets/js/302.fb34c209.js",
    "revision": "85a5f44c8bfe3639107b01f15cb9f530"
  },
  {
    "url": "assets/js/303.1ed50ad0.js",
    "revision": "5c6087b2c8252fe1106d60aff124a64a"
  },
  {
    "url": "assets/js/304.27c8a258.js",
    "revision": "f08a4ce4bb46e30a8e393db771511eaa"
  },
  {
    "url": "assets/js/305.c91e1c04.js",
    "revision": "5a8284239d5329dcf779cfda209c631b"
  },
  {
    "url": "assets/js/306.55e335e2.js",
    "revision": "405938565a0429670450fc1e38ab20a9"
  },
  {
    "url": "assets/js/307.a57b0dc7.js",
    "revision": "70847646cb93be73d8bc7b15946de108"
  },
  {
    "url": "assets/js/308.d9eecacc.js",
    "revision": "1d69e93aa19bdde56780d0f206002fe4"
  },
  {
    "url": "assets/js/309.07fe7aac.js",
    "revision": "fec8ed71efd08e5285cf48055b23a36b"
  },
  {
    "url": "assets/js/31.d935bb5e.js",
    "revision": "273cbeb4da75a6944c829a1f254b9298"
  },
  {
    "url": "assets/js/310.5e5e31bb.js",
    "revision": "184254da7bb5d0b594e3fe54c20dd6b7"
  },
  {
    "url": "assets/js/311.9729f08d.js",
    "revision": "d9a44a8ecab475b29777a549672ef25b"
  },
  {
    "url": "assets/js/312.60985d8e.js",
    "revision": "56ea5c4db06ccdbb2a46c1854465c0a1"
  },
  {
    "url": "assets/js/313.16526c6d.js",
    "revision": "053ff1c7ce7876e30437761335db5ff1"
  },
  {
    "url": "assets/js/314.84dde4c7.js",
    "revision": "3b7ae592dd79757fb04e25b119374422"
  },
  {
    "url": "assets/js/315.3ab2ed32.js",
    "revision": "fffcdd120ba44c17c40fcac7fc9f728d"
  },
  {
    "url": "assets/js/316.d7691be1.js",
    "revision": "d1af92862211df4e2b8dc62161fab6d1"
  },
  {
    "url": "assets/js/317.0d1f8db8.js",
    "revision": "8e199ad49fed5e7abcfa63f18d6b9044"
  },
  {
    "url": "assets/js/318.5d91aa11.js",
    "revision": "ff44cb5db4320f1270198a673abd35c6"
  },
  {
    "url": "assets/js/319.c822caf5.js",
    "revision": "351ddae3d77d2864f36965c7f3326795"
  },
  {
    "url": "assets/js/32.4debd8b7.js",
    "revision": "a48ce1fc5a26d573d29f684a075e8709"
  },
  {
    "url": "assets/js/320.45107dec.js",
    "revision": "8c36df4a7e0ffc442d8f5e71e05ffdc2"
  },
  {
    "url": "assets/js/321.8c8fdc6b.js",
    "revision": "540db98f82855219e1a3864f1db01e33"
  },
  {
    "url": "assets/js/322.251569da.js",
    "revision": "ddd19060657c8f6862ee88c8a9c1d968"
  },
  {
    "url": "assets/js/323.113e4e72.js",
    "revision": "24675a0dc4afa49e00671d9b4d1999b6"
  },
  {
    "url": "assets/js/324.287e88bb.js",
    "revision": "44d46f984a750467a5d912a92df5fddc"
  },
  {
    "url": "assets/js/325.5a78b05f.js",
    "revision": "d1509632a842faf9bf96cf5214da04c9"
  },
  {
    "url": "assets/js/326.4442b8ce.js",
    "revision": "d4fc2be4eb65326de128c4b32713d89c"
  },
  {
    "url": "assets/js/327.07bdff95.js",
    "revision": "cfdfa6222a9529e140c86b90341af7b9"
  },
  {
    "url": "assets/js/328.ab4dc333.js",
    "revision": "192c5c8f585f5f5e6461864e65e45e4a"
  },
  {
    "url": "assets/js/329.82a179d2.js",
    "revision": "183bcefd1951176aa91cc779028965c8"
  },
  {
    "url": "assets/js/33.24a6601f.js",
    "revision": "0188974bfb85bfd8fe38f303a44069e1"
  },
  {
    "url": "assets/js/330.f311a991.js",
    "revision": "b89c8c0957cf9a1156e06033eec2e912"
  },
  {
    "url": "assets/js/331.967740ef.js",
    "revision": "30c9c325fbf20445666f2cb40a0fe62d"
  },
  {
    "url": "assets/js/332.7a4aaeef.js",
    "revision": "40b5cb9e59b6213d46d56005260dbda0"
  },
  {
    "url": "assets/js/333.e5bde5be.js",
    "revision": "013d63ce7b8798229a1aef87e8f29f61"
  },
  {
    "url": "assets/js/334.947a44f4.js",
    "revision": "d18561a821a1f841acf51e40379a75bf"
  },
  {
    "url": "assets/js/335.301dc66c.js",
    "revision": "a992b523ca0cd778b26551c86f055d3e"
  },
  {
    "url": "assets/js/34.88b70295.js",
    "revision": "81117394711ff761441f6f4c6268024b"
  },
  {
    "url": "assets/js/35.a9d4419f.js",
    "revision": "4f8a4289b093e8f900d62ec4a111a676"
  },
  {
    "url": "assets/js/36.e550d395.js",
    "revision": "0859b18d9d030199a2d17b9cc7c4ccf2"
  },
  {
    "url": "assets/js/37.2c50f107.js",
    "revision": "2ca19b17a0d728379eab48b32120b31d"
  },
  {
    "url": "assets/js/38.0aa0de27.js",
    "revision": "c3c82fb7dc16cab8e7dbe8bde99d3725"
  },
  {
    "url": "assets/js/39.93ca8004.js",
    "revision": "4c4193d9c1f69ce7e137779f78fa7280"
  },
  {
    "url": "assets/js/4.445d341a.js",
    "revision": "7bab52d58124474fae6be4ab93d99901"
  },
  {
    "url": "assets/js/40.807060d0.js",
    "revision": "b7f9323e152a781079f7e1f051b6594d"
  },
  {
    "url": "assets/js/41.a6b4c7e1.js",
    "revision": "b870bed8acfbfeb7e8e20b6ebec8560f"
  },
  {
    "url": "assets/js/42.37b24b5d.js",
    "revision": "39fbf4cb7b48e138d81e2cd087e6a216"
  },
  {
    "url": "assets/js/43.db9e01a7.js",
    "revision": "a4221672a248518ba8344f38bdb022cd"
  },
  {
    "url": "assets/js/44.98c67686.js",
    "revision": "7de6f78930557899127d30b6bb366014"
  },
  {
    "url": "assets/js/45.8eb80356.js",
    "revision": "3f3dcb30f9d3871172716bb386606f0d"
  },
  {
    "url": "assets/js/46.8a9aeae3.js",
    "revision": "5cca0ce88dd429c330af9033c760cf35"
  },
  {
    "url": "assets/js/47.3bf819bf.js",
    "revision": "c85878181216fd6f9a75670d270a1ad7"
  },
  {
    "url": "assets/js/48.2f19f475.js",
    "revision": "d2b9cf02a693bb73c25d8d6d856ed8c8"
  },
  {
    "url": "assets/js/49.7fb19be7.js",
    "revision": "ce17d03ab6ff8c9ad6ad584316a0601a"
  },
  {
    "url": "assets/js/5.c23e9523.js",
    "revision": "462c8881d5380f52a1706f32615ac28a"
  },
  {
    "url": "assets/js/50.d24074f2.js",
    "revision": "48df0252e5c5e9fe0a855c749646ee25"
  },
  {
    "url": "assets/js/51.fa09593d.js",
    "revision": "d34bab0ca22650f211aaab6b1f827672"
  },
  {
    "url": "assets/js/52.d92fa29d.js",
    "revision": "9e3866a3a870829223f7495adfd9d2d8"
  },
  {
    "url": "assets/js/53.abb519c7.js",
    "revision": "380b6c2a495bd8ff627252ae31cbd99a"
  },
  {
    "url": "assets/js/54.4cf5c772.js",
    "revision": "e2767f0d802f4af5265389911927b35b"
  },
  {
    "url": "assets/js/55.c2cb286a.js",
    "revision": "9211565a197b822b667cb7ec59be5edf"
  },
  {
    "url": "assets/js/56.3233cf3a.js",
    "revision": "25ddb730afc7ab0e63c532bb50bd617a"
  },
  {
    "url": "assets/js/57.d84e62d6.js",
    "revision": "90b2ac2edf526c64973f7eba72823721"
  },
  {
    "url": "assets/js/58.77baf12c.js",
    "revision": "9e450b48e84b9523d86aff23d11be9b0"
  },
  {
    "url": "assets/js/59.41cf10bf.js",
    "revision": "aaa362122420a8630dee8639a843bdd4"
  },
  {
    "url": "assets/js/60.544beb62.js",
    "revision": "3496d824096e552dde151c211aa07d98"
  },
  {
    "url": "assets/js/61.0daf14e5.js",
    "revision": "a3a32797ace674d471500042911621dc"
  },
  {
    "url": "assets/js/62.b26348d5.js",
    "revision": "107dff7f1ef069734891af8888f66ecd"
  },
  {
    "url": "assets/js/63.b4c91b30.js",
    "revision": "cf13551c566d9a8902fcf42efbdd2183"
  },
  {
    "url": "assets/js/64.b96b78b7.js",
    "revision": "889866353a1cac7044f7b8fe08a0a783"
  },
  {
    "url": "assets/js/65.6b66e0db.js",
    "revision": "635c72f2cd6a24a0875f9fbe6dd6d17e"
  },
  {
    "url": "assets/js/66.95319b17.js",
    "revision": "9c1f2fdfa585c1d4aa868771ef598469"
  },
  {
    "url": "assets/js/67.993918be.js",
    "revision": "4977b58f81fef4aa162c2146d521b4ba"
  },
  {
    "url": "assets/js/68.d35c4898.js",
    "revision": "c7be955b90b5a0bf85f89d69c9fcc11b"
  },
  {
    "url": "assets/js/69.82e1031c.js",
    "revision": "f3d8d79b0c1fa7c7b3c418b36978d22b"
  },
  {
    "url": "assets/js/70.13b6fa95.js",
    "revision": "496adb3d0fdc74234118d166d83f9c66"
  },
  {
    "url": "assets/js/71.7455d1d1.js",
    "revision": "78b336a1fa7c9bdbbf3410d6aeb670bd"
  },
  {
    "url": "assets/js/72.ef4d0fe9.js",
    "revision": "59ec3f46c522ae7dc36923478d23c279"
  },
  {
    "url": "assets/js/73.e3b11595.js",
    "revision": "8b5baae40d58dae768af9404c0bd2637"
  },
  {
    "url": "assets/js/74.020c5803.js",
    "revision": "d5503be350807e733cbc0471dcd86211"
  },
  {
    "url": "assets/js/75.0c8916e2.js",
    "revision": "9629a1097a37e3f417a57ed8f3fa2f6f"
  },
  {
    "url": "assets/js/76.6debf310.js",
    "revision": "afbb1ab86fd3e5c43abec45aa3bd6fbd"
  },
  {
    "url": "assets/js/77.415e310b.js",
    "revision": "851ffae9851e6ff2304a09b411238e3d"
  },
  {
    "url": "assets/js/78.2f69bce1.js",
    "revision": "5c33a4f6d0d49a75f59ae66f8c276ad4"
  },
  {
    "url": "assets/js/79.2c027729.js",
    "revision": "9b2dbf09ac1a563f4d8d3aaaef5a3637"
  },
  {
    "url": "assets/js/8.bd2699fc.js",
    "revision": "0bc69f70692e7fc4e3ffadb3bc6e209b"
  },
  {
    "url": "assets/js/80.86abe36f.js",
    "revision": "2c24067cd81a66a23f4f01533ac1df64"
  },
  {
    "url": "assets/js/81.129b289a.js",
    "revision": "ce8b9d267c73ecd3fb4c633463058dd5"
  },
  {
    "url": "assets/js/82.8833f35f.js",
    "revision": "bb4d516626637741c9b88198b49a656e"
  },
  {
    "url": "assets/js/83.a1bc3cec.js",
    "revision": "eb8f1d0476af63b4fa70d92a63ad00c8"
  },
  {
    "url": "assets/js/84.731793f2.js",
    "revision": "31689f5445cc7177f232f7581101f931"
  },
  {
    "url": "assets/js/85.954a573c.js",
    "revision": "88655177607c320d24a17fabbc2df80a"
  },
  {
    "url": "assets/js/86.e2dc2f27.js",
    "revision": "c97d7fba9a1405797a242d43461ff80f"
  },
  {
    "url": "assets/js/87.36757bc7.js",
    "revision": "c753a86615bfbe95a7589d35b4c43994"
  },
  {
    "url": "assets/js/88.d8dd2d95.js",
    "revision": "c660b56eb616be0b41a8be79e0fd23b1"
  },
  {
    "url": "assets/js/89.f6614f2d.js",
    "revision": "21ea592be8973a4f75a68aba9c44d472"
  },
  {
    "url": "assets/js/9.476ad453.js",
    "revision": "627d3d7ac0d1442fe0e87534e2333cb9"
  },
  {
    "url": "assets/js/90.a652601f.js",
    "revision": "9ff024779876e00566bcb6cb8668cc7a"
  },
  {
    "url": "assets/js/91.03fbbfbe.js",
    "revision": "9af2f8a85bae4b6e4457aa947e32ceab"
  },
  {
    "url": "assets/js/92.dfcadf74.js",
    "revision": "c636860649d42a3f9b29048aa10e242b"
  },
  {
    "url": "assets/js/93.c25ce246.js",
    "revision": "85dc53881f0303f4f8c6d01b6975f56a"
  },
  {
    "url": "assets/js/94.4cba387d.js",
    "revision": "2f3b13df244437ba2d4816ebcde82652"
  },
  {
    "url": "assets/js/95.d357efdc.js",
    "revision": "4b8fe56d2015e5a6987877b536deef4e"
  },
  {
    "url": "assets/js/96.cc21796f.js",
    "revision": "27815991fed52c87430d088cfcee2ba0"
  },
  {
    "url": "assets/js/97.37712556.js",
    "revision": "c4533ba973f3ccdba6cf10a6a538a2f4"
  },
  {
    "url": "assets/js/98.4ac86d39.js",
    "revision": "1375da1fc27e9d57f9cf38c12d0b6eb4"
  },
  {
    "url": "assets/js/99.5d3440f9.js",
    "revision": "f8a14a85f08035e25c5d12e8929bffb4"
  },
  {
    "url": "assets/js/app.56ecf2cb.js",
    "revision": "b8b3848e898186cb693d3d035b075bba"
  },
  {
    "url": "assets/js/vendors~docsearch.81480ac1.js",
    "revision": "1aadff6319be84a980db62a273947e75"
  },
  {
    "url": "index.html",
    "revision": "642c243a7605faa0688e3dbf3f279e08"
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
