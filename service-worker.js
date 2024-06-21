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
    "revision": "6fe3aadd7b807c376155b1fd287d91b0"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "b4612cf51d50f227245540a6ac0ddf65"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "ee65b7f931cb032ef5f674e568f473c8"
  },
  {
    "url": "2.0/attribute/overview.html",
    "revision": "89967d71a22fe01853c4efa95886497f"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "c29794e1ab37278df861e1cbd835a4f4"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "498bb2f2cbf6e284cda0d81e4de7496f"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "f793acc383c8d506fbd3e096f37ea852"
  },
  {
    "url": "2.0/category/overview.html",
    "revision": "881bc533ca6820c1992e9fc8f93476af"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "00d78d36d2b6ddafd335ae217617f0a1"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "531f930c85debf77453f237bd55b9354"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "2564b171b6b9e861e51dd76e92a5ec0f"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "2c9372fb18cf7ab93865aae98a14e9b3"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "bfdeee691dcbd85cc5e456d25e8b5050"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "93b189242c0000f91f60a005bda1bdad"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "d4e4325ebacebc276b2cfd722c2419be"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "118fc55b576b590d31fec4e67b168102"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "458efaeab76be87f949ba8cbc9cbf090"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "7fb4c78507b82eab59d352fdf58988dc"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "da2c4cca1ce72095920966ac87f67ca4"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "b0ce31835c182a0cefee8ef1d4d3d0c3"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "268825df316fcbb433fb0a94b13ddf8f"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "cf6884953c127b22b76e695b7b1fee38"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "ef95a25015446438550b5af545c169da"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "8587a0d3229d86ef223b3028c6e7656c"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "b492b3568243e7cf3bcdb05d1a196561"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "328d1d4fd1dba3f2b0edfe5e8d0fa0c5"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "6c4a6a570fd9c5a86387d5e52aa9b59c"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "2fca8039828a2d5d79eaab29096c80df"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "880dbd787d2084a3617e85c99511407a"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "1206c19e391d8f9bb9c2ba40a2eccd46"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "5c76277b929852035a0cd1f695ccb2bb"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "46e7902b811d396a0183fb1e6320e776"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "58f3d3b6264888bb52a8b556bfa68677"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "8cd51036bf0f82bcec644c61f53e833c"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "5876fb64f70570f0d3b29da2c734193d"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "94023cb0f4d4b75adbd945a685d92a06"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "1b04c4260f24a210c75ebc485664cabd"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "e0f1a60314d8b252029bf24fea05da84"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "c25cfeebe01071c9db9abb6eef30034a"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "288e29786616567144d65cd63f5aa1ad"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "d80a272e5eb4954cf7c46bbca9a2a79b"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "6ac45151c444ce04708fa2d879bfd727"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "c08384166ce385f4e98bc63fc6acaf61"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "169abca5301a9e480df2ebefcd7190e6"
  },
  {
    "url": "2.1.0/attribute/attribute-family.html",
    "revision": "c40dbbcdd8c286dbdac3ee9e97aa476d"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "09307afe16d5e5b57058da3a7bebebf4"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "ccfabdcc47cc2f4bc73bd0599c03117f"
  },
  {
    "url": "2.1.0/attribute/overview.html",
    "revision": "c66a642312e93d26c54c59acba3aa078"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "894ab2c3e15870ad258fd0dfd47d4703"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "a48f24a53026bc870c475fbe7259ef8b"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "8dba402c2db95cd2733a9d767855da84"
  },
  {
    "url": "2.1.0/category/overview.html",
    "revision": "6acd09ade5cfff084b783752ea133d50"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "a45342d607aadae222de4fa4f2caac13"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "8f9ade00310e354759bec966f13ec805"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "80a7331f6c3f5921b05052e0e5915a06"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "dd2d8bd374fc72afab385c046b681b90"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "9cb1e8a0be93fce0b24d39771ba612b9"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "91649f5c431cacab4cfe88334441bfde"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "40aca634ca1f2abc475cae4224b496f1"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "dd0137b0a60dc12a1b1a3b21f40ba918"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "8196179ee5be45a4a75886d56a66684d"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "674017574e8c3d45794a63988d1a59d7"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "07564310b21f596fc2e8218885a5a267"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "20ff1cf58a57f5c09580071c054fd7ec"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "bb25df2c016e6bdba89fe0641c6c5029"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "2f904befd304e5bdadcb83788dc2b1fa"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "4dee8421b76efd877b0f1446772b82f6"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "516a9f23f7e6b89289271dc4ca2a42a0"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "c9dfe4faecea6ed5d98100d9d2cfd86d"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "1fde135daae32f0b331a28f3b147317f"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "2ff6e9313607efc59a921f34d688688b"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "e119979ed357597a2d083e2742071e74"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "5b4b9540a3497cc5957d2ab85b80e232"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "f953aaedde98038b91f17e35e1509ef6"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "55c62b84dd330562f4fd11e39b14000d"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "26340af1f4f134d8315106bd0f337c62"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "044df23fbdc846e7aa7021415daf6b14"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "0b735b6ec4106159072270c3f28801a8"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "5301ec2d1df132a596bfde7353222418"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "b98411a98996d58bf83761ff741998ad"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "fcd9164780345e4eac5d7d01da179858"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "9ac857457dca492dc4da0fe61adecf3b"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "3cc105f51b53d58bab4d6df72c6b6a56"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "bc3ef777c3c2ee856630c53c974ccfd6"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "6b088b2cfe447a7e700d798c26481e17"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "be8dd583bbd69de052c119e5ea9c8c13"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "79a932c447387c42e5307eee0e4521fb"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "3a2e7dc3299b1a0431a057b997677637"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "a3106232b96dfc2b1977ad3b816dc494"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "c84b795568aeb8808b73ef9e0657e911"
  },
  {
    "url": "2.2.0/attribute/attribute-family.html",
    "revision": "6966bf371d9322ddf67c9bb87fc9575d"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "5ecf937af8e1c4fb7ced1e8521314847"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "145659932dd15daecac192347070d02f"
  },
  {
    "url": "2.2.0/attribute/overview.html",
    "revision": "05bd88485d1952a76fd54e28fc488b7f"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "26f5e2a71f1d25f4193eef0fbfbaa4a3"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "5ece15f64767882eff33596ca7f09bcc"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "72fd28f3ef4f23321548bfc92f28e42b"
  },
  {
    "url": "2.2.0/category/overview.html",
    "revision": "9961b5d53e71b8523ecfbcf130c57b06"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "32198ee121d5268f4b968a3cdce202da"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "755e215bfb2428d2a1d62deab9fb148f"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "3aacdb282f2df36a8dae54d9996c390a"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "b08dcde95c54bf5309c43ee89e20490d"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "324b7af8e33d89e56f032107cc1be77a"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "8286befa3d7b972c9099a3eb7951d807"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "684da2122b06e7155c33bedfb8143491"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "b10be3707fbc360d3a9d0513a97aa54d"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "537fcb7b2e271712644c1935cd7b3694"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "4a9559d8ac5507c67b53cfa037ab4897"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "e1dba135d3ca9a20d00d1dbf15710298"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "9cf87a4fcd699322794b32595ab9fa24"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "4e4d1f125d00cae1827edbc641d77b1a"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "f0283766daf813b3e0b95408586a435f"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "37f759dbf2a79230f800438df3950d82"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "40379f8dbd2610cf439bbce12ee13821"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "055fb45879ffd319d5566776668aa2c7"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "c47e655f79917246699b22d55173b7e0"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "ac7d79661005fbe3c7e18e31a4d6b0b1"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "e0f87b200cc0d8e1893411a35ef96dbf"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "338ad8f719ad0f3474b20d4383d96bde"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "4accd515f9be672337126924b07f81ca"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "d5198c76772dd7e0d4e5f69755803ad7"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "f0df9eed0e7e8d37644d77b8b34b1474"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "b5685cd29ce4d972cb2efa54920917b3"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "42f8bd52542cabb2c69f0fd405cd2855"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "077fce0ff65ce7f2c74c8de3e005b5c8"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "3472332187eefc81b2f452a719c6e13b"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "04b7f0985c77b4e13b10bdc38e8625f6"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "41fed37b4d10fe3a85aee0d43c8543e8"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "78f7b8fea3b1c6d2120386d97d82cd39"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "3f2a98cbbcbbb4f534466405c3223b08"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "d7572018fb1c4e1f30379a0a0a5467a6"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "82b8d3e943e259050e586c7ed2195b0e"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "83e2abd2eb455edea3b682182351ef85"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "a27f20fe5820ec58854e5824ff7c56b7"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "b4f86245b4dc350f3d3b12c4f633a30b"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "d49a3c55bf5724ecd6e0ea663f3103ca"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "6553e325d954eeb104847813723bf670"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "16af7f2281b20029c956bed29eb24b5c"
  },
  {
    "url": "404.html",
    "revision": "d9f1e94a367ac44f50f38eff7ea9e2b0"
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
    "url": "assets/img/checkout.ab9b0f97.png",
    "revision": "ab9b0f976dfe52f807452715beb19d82"
  },
  {
    "url": "assets/img/checkoutMessage.7fec4305.png",
    "revision": "7fec4305b6e80c79137eda387ce363d1"
  },
  {
    "url": "assets/img/checkoutMycart.018d49e7.png",
    "revision": "018d49e7529834942d7c85c3287ccda2"
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
    "url": "assets/img/miniCart.c2175151.png",
    "revision": "c2175151f11fc3d41f7b1158ee3dc055"
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
    "url": "assets/img/orderPlace.c0ba8da5.png",
    "revision": "c0ba8da5e4cde026b7ee7268b94b1717"
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
    "url": "assets/img/taxes.b9e43e0b.png",
    "revision": "b9e43e0b01fad3c1ac734dc697eaa378"
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
    "url": "assets/js/1.334c9853.js",
    "revision": "891286b851c2646591447b1883b04cbb"
  },
  {
    "url": "assets/js/10.2c55f55f.js",
    "revision": "8f8dcfbc16e2c8fd2f421bc001f0d86f"
  },
  {
    "url": "assets/js/100.b8ae17ac.js",
    "revision": "a8e14a1ad202878bc7dd24176f234090"
  },
  {
    "url": "assets/js/101.f4538a7d.js",
    "revision": "8624f4bf3fcb8a258f56fb22d1019c10"
  },
  {
    "url": "assets/js/102.b1d28ffd.js",
    "revision": "64c399006a126b42b0348f634b103cf2"
  },
  {
    "url": "assets/js/103.6e1db3e1.js",
    "revision": "6ead0323a2f517fab72d27f4156dcab6"
  },
  {
    "url": "assets/js/104.f64b674b.js",
    "revision": "809bd8a0aa2743a7da54dc1b8e361761"
  },
  {
    "url": "assets/js/105.a6454a16.js",
    "revision": "288ad229998ec8c093131215dd097bb2"
  },
  {
    "url": "assets/js/106.fe5233d9.js",
    "revision": "bd8f4db1fb2f8554ca7f4600a00cf0b3"
  },
  {
    "url": "assets/js/107.138ef1cf.js",
    "revision": "c46a2d9b6e79b18f84f7b80d93bbd0f5"
  },
  {
    "url": "assets/js/108.62c41de8.js",
    "revision": "2045544043e070e875a39de8e1d11251"
  },
  {
    "url": "assets/js/109.9976fc06.js",
    "revision": "a320ffb5f4589064dad0e79f2f814f7d"
  },
  {
    "url": "assets/js/11.c97e0dcc.js",
    "revision": "ac35b12e53945ba93450e0704ee6143a"
  },
  {
    "url": "assets/js/110.4c179d40.js",
    "revision": "d3688e11ad952a4e06c75fed6f90cb00"
  },
  {
    "url": "assets/js/111.95b42e93.js",
    "revision": "d6b290973ad63b9c85ff172db0c4eec1"
  },
  {
    "url": "assets/js/112.69097d97.js",
    "revision": "75b3b5be137b3fc52885b78290062f55"
  },
  {
    "url": "assets/js/113.fddb2ac9.js",
    "revision": "1d5252d142d7ab2c411f08f7d419bb39"
  },
  {
    "url": "assets/js/114.44fde5c4.js",
    "revision": "e8b2d83351a9d2406a2d8eedc902d1f9"
  },
  {
    "url": "assets/js/115.a134dd51.js",
    "revision": "327d2e0c05567b4a736c762a6097f46b"
  },
  {
    "url": "assets/js/116.e951fbd7.js",
    "revision": "92cf0ed818a050a762c284ef0d738c62"
  },
  {
    "url": "assets/js/117.1531b8ab.js",
    "revision": "2cf60bf386effd6037783169d61a5d4f"
  },
  {
    "url": "assets/js/118.f6602910.js",
    "revision": "3a583c227fc1979059eb49c5c255caab"
  },
  {
    "url": "assets/js/119.7505cdb7.js",
    "revision": "de0487d2dde281ffed2795941cabc1ac"
  },
  {
    "url": "assets/js/12.b0eb46ca.js",
    "revision": "2c2f7f579b95a8ac00e66911e6170d26"
  },
  {
    "url": "assets/js/120.564c7bce.js",
    "revision": "c9f907dec10a72d3c65b8f2e36f8e089"
  },
  {
    "url": "assets/js/121.63717715.js",
    "revision": "5aa7e0a777c85eff7a3ee3401bab3f84"
  },
  {
    "url": "assets/js/122.65b4bf70.js",
    "revision": "8699226336af423d888032f4363262c7"
  },
  {
    "url": "assets/js/123.fd0bf35a.js",
    "revision": "8731ef820fc8e5ffa9edae23380aa519"
  },
  {
    "url": "assets/js/124.8bf667c6.js",
    "revision": "e90885ba5179caf177e97d303270c95e"
  },
  {
    "url": "assets/js/125.f5e6ebdb.js",
    "revision": "252bc1025d152d690020e44d66e2f917"
  },
  {
    "url": "assets/js/126.db20110c.js",
    "revision": "b68b188caf7efcc908577cc7e08ae1da"
  },
  {
    "url": "assets/js/127.2d182bc0.js",
    "revision": "a27c539d2be7f8fc5bd95ed2c45ed68a"
  },
  {
    "url": "assets/js/128.0d11cd0c.js",
    "revision": "2c8e6a22b31f729b13a5005e9d5a42c7"
  },
  {
    "url": "assets/js/129.b43b6027.js",
    "revision": "2b38750c0c05d077a66577d6cd6a5516"
  },
  {
    "url": "assets/js/13.edd96e24.js",
    "revision": "180b4fca2f2cd73d729d92863b508819"
  },
  {
    "url": "assets/js/130.334e71e5.js",
    "revision": "4dcf0a5dca96b4ef13dd4a69c4ff8c68"
  },
  {
    "url": "assets/js/131.4f5fce70.js",
    "revision": "d720c63ed5dd7972f4ad05ba3cddd3ec"
  },
  {
    "url": "assets/js/132.14fe59c8.js",
    "revision": "1180cb330d833116c723d4355789fdd5"
  },
  {
    "url": "assets/js/133.6b6343b2.js",
    "revision": "e80c7b22c681d61ac51300a37392d0c0"
  },
  {
    "url": "assets/js/134.502edbca.js",
    "revision": "c8866e2f1b923c3f9903fcc9a8796b70"
  },
  {
    "url": "assets/js/135.4065c73c.js",
    "revision": "6e6f6ad6db7b5cf40658b736ef7aed3e"
  },
  {
    "url": "assets/js/136.7116e18c.js",
    "revision": "40c2942386b581ff7fd9aeffa55f3e9a"
  },
  {
    "url": "assets/js/137.bf9c045d.js",
    "revision": "5807cf37d0dead318d657ffb008f52b3"
  },
  {
    "url": "assets/js/138.00118091.js",
    "revision": "b7a65464288430a069de1937e2743541"
  },
  {
    "url": "assets/js/139.c03c4064.js",
    "revision": "1bb8f1f7a9d38f4f79d003d45a9caf8c"
  },
  {
    "url": "assets/js/14.96dae9a9.js",
    "revision": "c4b2f840cb690096ad7e92dac61813a0"
  },
  {
    "url": "assets/js/140.175c1316.js",
    "revision": "6c8121cfabee5f85c31160d573acfe8a"
  },
  {
    "url": "assets/js/141.16e24c87.js",
    "revision": "f4d4d91e660c6f492b06b041534f24e6"
  },
  {
    "url": "assets/js/142.1e0ca170.js",
    "revision": "8a63d2f0e2d96a0a5519ec7177ef1b30"
  },
  {
    "url": "assets/js/143.54b16dd5.js",
    "revision": "51ab3686fb3c92f89c8d975019f374b7"
  },
  {
    "url": "assets/js/144.adaa9f90.js",
    "revision": "943fb426a46794c5dbc68a45f3086ee4"
  },
  {
    "url": "assets/js/145.070d9016.js",
    "revision": "27adb02dc9664c7b8340f2301d456ed1"
  },
  {
    "url": "assets/js/146.7bb7ab17.js",
    "revision": "deebbbd2a14f1e9be634700cf1d13866"
  },
  {
    "url": "assets/js/147.4c451ad6.js",
    "revision": "3d0b7c9b727cf906dc44ec484796ad1e"
  },
  {
    "url": "assets/js/148.31a448d9.js",
    "revision": "de444da459435737ee470399a9a5544c"
  },
  {
    "url": "assets/js/149.600a5769.js",
    "revision": "e5a6ec9d3006480494017c5921f854dd"
  },
  {
    "url": "assets/js/15.4d720686.js",
    "revision": "ffd18eb5fa5cd978d8550c2380f2b838"
  },
  {
    "url": "assets/js/150.594d47bf.js",
    "revision": "74f616e88067798489a689a1fc5706ac"
  },
  {
    "url": "assets/js/151.609d026f.js",
    "revision": "9d297aa1ad6bc9087363a58179df6990"
  },
  {
    "url": "assets/js/152.4f668b0d.js",
    "revision": "c7fb477df7d5f7836cf45c1bdcd2ec34"
  },
  {
    "url": "assets/js/153.d02e37d0.js",
    "revision": "4631f5a6fe355d65225ea754bf9c0328"
  },
  {
    "url": "assets/js/154.523ed23a.js",
    "revision": "18519eb4582a969a3dac11a032110340"
  },
  {
    "url": "assets/js/155.73148392.js",
    "revision": "bd01b8c3b8d664be9b007f37fb9a6373"
  },
  {
    "url": "assets/js/156.d969e3d8.js",
    "revision": "6b95ad57d9f3450a2d6c8f45dbdfbe0c"
  },
  {
    "url": "assets/js/157.468d72a2.js",
    "revision": "6cc93dc1c2f56ec19a8f80ef6885b331"
  },
  {
    "url": "assets/js/158.ba6756fc.js",
    "revision": "96e967c2045ff617168ffd2f8105eeca"
  },
  {
    "url": "assets/js/159.67f2bed3.js",
    "revision": "58ccbaf663c6f2e6e7cbd68c8c97cf31"
  },
  {
    "url": "assets/js/16.14931c21.js",
    "revision": "421ee544209d222f4d48a7b201d24dae"
  },
  {
    "url": "assets/js/17.f14bc477.js",
    "revision": "26640baeac065e802d54f9b9e0b2deb5"
  },
  {
    "url": "assets/js/18.0e6a2ab0.js",
    "revision": "acc8c9bb1f1f183d5d0efc1848ad32f3"
  },
  {
    "url": "assets/js/19.2556e6d5.js",
    "revision": "25fb3561fd4b2605336dcdbc7ac8fa30"
  },
  {
    "url": "assets/js/2.1ed43ac9.js",
    "revision": "4c47c06c35dc627db40d836795ad2d3c"
  },
  {
    "url": "assets/js/20.e4af1034.js",
    "revision": "2f6ae7515f3527043c5e15f1ad0ed188"
  },
  {
    "url": "assets/js/21.daac6b7c.js",
    "revision": "8144699253dfa359c431b8effda6d71b"
  },
  {
    "url": "assets/js/22.842dd3bd.js",
    "revision": "c7e99f9b2656095252a18f24c4a96b47"
  },
  {
    "url": "assets/js/23.e2fd7a83.js",
    "revision": "f371a832117ed7d344cf1651ee9727b7"
  },
  {
    "url": "assets/js/24.565ce04c.js",
    "revision": "081ca99011409b9d51fa84623e2977ee"
  },
  {
    "url": "assets/js/25.04b070b5.js",
    "revision": "eed5d6ad2c078d633f1c341f575807ca"
  },
  {
    "url": "assets/js/26.a24244fd.js",
    "revision": "050a9eb5ae793729f552cf633315f49b"
  },
  {
    "url": "assets/js/27.625aefab.js",
    "revision": "3e954269d6982b267db2450ad3e42128"
  },
  {
    "url": "assets/js/28.e6715003.js",
    "revision": "6585012920e135d794ef6ceb07496bb5"
  },
  {
    "url": "assets/js/29.f0c68ace.js",
    "revision": "ae55b487f131b521adcdfd6c3e0ad919"
  },
  {
    "url": "assets/js/3.bd3b16a4.js",
    "revision": "3caa258015023020a1043d73accdc017"
  },
  {
    "url": "assets/js/30.3e7ee84a.js",
    "revision": "0a905d5fbad7beb8d44589712f5643f3"
  },
  {
    "url": "assets/js/31.b4c8ef92.js",
    "revision": "6a7a75325cfeae9da043d24ac3c88e5b"
  },
  {
    "url": "assets/js/32.dbdfac57.js",
    "revision": "975f8114e0e3d62150250055b323b460"
  },
  {
    "url": "assets/js/33.c41a9537.js",
    "revision": "702d297f9521486ee7b5e18f7f522a5d"
  },
  {
    "url": "assets/js/34.8225c14b.js",
    "revision": "65037184388b5fbaeeb962dd7c1dffc8"
  },
  {
    "url": "assets/js/35.163f3549.js",
    "revision": "23063dfc50e9697022076e39f6b3f2a2"
  },
  {
    "url": "assets/js/36.963b8068.js",
    "revision": "0a2c191d231c4fb0d0b4d922c687a706"
  },
  {
    "url": "assets/js/37.5e583da2.js",
    "revision": "e8395fa2ab23983a93eea04b702a6920"
  },
  {
    "url": "assets/js/38.f6658381.js",
    "revision": "b523ff8d22680b1e4e4bffe61f673608"
  },
  {
    "url": "assets/js/39.42237082.js",
    "revision": "ac5bc9a2308e641ca39f2f92e41f7863"
  },
  {
    "url": "assets/js/4.9d6882b2.js",
    "revision": "1857ca9868680f6b1b9817d54ef6978f"
  },
  {
    "url": "assets/js/40.288fa095.js",
    "revision": "50500a88d0909dd4f825e9c67ab1473a"
  },
  {
    "url": "assets/js/41.f5fecd97.js",
    "revision": "1fdcfca0d81d99fed323c2ae9ea44c6d"
  },
  {
    "url": "assets/js/42.854ca4c7.js",
    "revision": "813a701f7bbd9369826ee527bc82befb"
  },
  {
    "url": "assets/js/43.42f7d5fb.js",
    "revision": "d6c4ef2c6e6d419dd0f2bb4d3963017d"
  },
  {
    "url": "assets/js/44.fbfe4332.js",
    "revision": "cef75b5e890df53ac1321cf08bee20c6"
  },
  {
    "url": "assets/js/45.e95cdc62.js",
    "revision": "62a640e7cf7d460e915fd0ba6387d8fe"
  },
  {
    "url": "assets/js/46.9d5aa966.js",
    "revision": "8a0bf5216af1b14b6adbcbf657f170b9"
  },
  {
    "url": "assets/js/47.694295f9.js",
    "revision": "b630a36846cb82c0ad4a109f90e6cc5f"
  },
  {
    "url": "assets/js/48.e46b7b53.js",
    "revision": "d1841d43a3da2592776a97db18cee1c6"
  },
  {
    "url": "assets/js/49.fc594e67.js",
    "revision": "582a5cc64ba77baf4b9c17233094d7cb"
  },
  {
    "url": "assets/js/5.c1486a7d.js",
    "revision": "afd4af478e5005a08a6a9e8ab12e028c"
  },
  {
    "url": "assets/js/50.f3047a84.js",
    "revision": "4d1e8cd185cfc8cecbb66ef834991499"
  },
  {
    "url": "assets/js/51.6f19f0f7.js",
    "revision": "456b0709bd6860c82575fcc621c380bc"
  },
  {
    "url": "assets/js/52.ab0bdeff.js",
    "revision": "0b8703187c4af4b464b595746a31bf0b"
  },
  {
    "url": "assets/js/53.f31002ed.js",
    "revision": "940298cb0e33fbf72ccd8ad518902016"
  },
  {
    "url": "assets/js/54.e0da4a9a.js",
    "revision": "a3cba3edd477d20bcd34c430a0838167"
  },
  {
    "url": "assets/js/55.84d4ec28.js",
    "revision": "3ab6a4dc9ed1ea7b8f6856123e4252fe"
  },
  {
    "url": "assets/js/56.6cb88342.js",
    "revision": "aa4b9f85d65b8a4ad795abfc3182b743"
  },
  {
    "url": "assets/js/57.d985bf5d.js",
    "revision": "78a3160ed4e5b2cbca56f16d16a55a66"
  },
  {
    "url": "assets/js/58.08788dc9.js",
    "revision": "7568f50fb6e68068238685fe40b1f596"
  },
  {
    "url": "assets/js/59.2b9f784a.js",
    "revision": "3acff000bc7c931a011cbc86cda237d1"
  },
  {
    "url": "assets/js/60.f59e316d.js",
    "revision": "71f0da9d880dc5d78186c62e544a5e23"
  },
  {
    "url": "assets/js/61.9afa996d.js",
    "revision": "aceeed4ad782064460a613f33d93a3a1"
  },
  {
    "url": "assets/js/62.2fb490f6.js",
    "revision": "50ce0d403d8b816f04d72ca3933fc955"
  },
  {
    "url": "assets/js/63.3281abd4.js",
    "revision": "4fef14707d222ef9e94402dbedf51fe5"
  },
  {
    "url": "assets/js/64.ae1ef52b.js",
    "revision": "e33a77e0da7533e95cce5b1ad2e753e3"
  },
  {
    "url": "assets/js/65.0fa05271.js",
    "revision": "98defcb8ccebf3c516f3d6a6490dd360"
  },
  {
    "url": "assets/js/66.abb9ff3c.js",
    "revision": "53d7d919d263aebbe5f5d14b65ae5f28"
  },
  {
    "url": "assets/js/67.035a1185.js",
    "revision": "cbcd221cb933a7a46ad97ad05e09aff7"
  },
  {
    "url": "assets/js/68.2bce281f.js",
    "revision": "1c014d2e831157296bc61d1b19aab88f"
  },
  {
    "url": "assets/js/69.6d59503b.js",
    "revision": "45ccb0969e954760dbb4d4d4d59d4253"
  },
  {
    "url": "assets/js/70.10682f65.js",
    "revision": "0dae77287eb7fddff7a5c7ce8e025376"
  },
  {
    "url": "assets/js/71.4dc96fa1.js",
    "revision": "9fc1c0b176c46b9377901d6d9a336c4d"
  },
  {
    "url": "assets/js/72.7d7b021c.js",
    "revision": "e42ead78df09ff4feaf73b7aff9bd65e"
  },
  {
    "url": "assets/js/73.269136ab.js",
    "revision": "d3844d81a73e3b09e36a3b0fe3614f4e"
  },
  {
    "url": "assets/js/74.57bb654d.js",
    "revision": "fc785be51bf8459625bfa559fe7ec8f2"
  },
  {
    "url": "assets/js/75.92023e7d.js",
    "revision": "149af806247a2fb2949eb218ff9ef6da"
  },
  {
    "url": "assets/js/76.e3697c71.js",
    "revision": "7295920a068bfc3d95cad71a9107da55"
  },
  {
    "url": "assets/js/77.915ee770.js",
    "revision": "f409d98d9e7bc0ceeeea1629e4e08d26"
  },
  {
    "url": "assets/js/78.f4f53a90.js",
    "revision": "6f17594d3012200fb0999bf2960c9338"
  },
  {
    "url": "assets/js/79.9c6a84d1.js",
    "revision": "1519d6870854b353a3dbfea456fc0008"
  },
  {
    "url": "assets/js/8.79c0064a.js",
    "revision": "ffb3c5ee56755e691f5b4e6ec35d6f08"
  },
  {
    "url": "assets/js/80.8ef6bde9.js",
    "revision": "72e146b5bc0044576135a4ceb3aaa2b7"
  },
  {
    "url": "assets/js/81.c718f38d.js",
    "revision": "12e5d8ca9c17885c5ec7eae2d7172341"
  },
  {
    "url": "assets/js/82.f57e92a1.js",
    "revision": "8695d3086ad3162ca8b0fb47d2c7f045"
  },
  {
    "url": "assets/js/83.20c88b1d.js",
    "revision": "03ba723c038674c1f073fec4de6fa162"
  },
  {
    "url": "assets/js/84.61d95f24.js",
    "revision": "c17c31521ae895288b0699fff7e87635"
  },
  {
    "url": "assets/js/85.9bd8b802.js",
    "revision": "36abc13a8bdb32c72dc9170e169b71b6"
  },
  {
    "url": "assets/js/86.1b738507.js",
    "revision": "7f9f79f62794bc1b1645ebb60cfa4a8b"
  },
  {
    "url": "assets/js/87.02430a21.js",
    "revision": "759ffac7cf9f61eecb850c547bd95968"
  },
  {
    "url": "assets/js/88.849dc156.js",
    "revision": "6b65391c91296606668f19bc39e9990f"
  },
  {
    "url": "assets/js/89.3e214872.js",
    "revision": "daa65f7e106a5273b24238edbc9e99ae"
  },
  {
    "url": "assets/js/9.436bf999.js",
    "revision": "d474cc72b402991c58f034617be61919"
  },
  {
    "url": "assets/js/90.43528dfe.js",
    "revision": "7ed1e578614710e005fff774e625749c"
  },
  {
    "url": "assets/js/91.d97448c0.js",
    "revision": "72d19fc04e22d1a25557bc5fd3af5c54"
  },
  {
    "url": "assets/js/92.a7033ae0.js",
    "revision": "6050b8c3987fd22eebf579b5c7e41537"
  },
  {
    "url": "assets/js/93.9e706fc4.js",
    "revision": "7e336737ca604f2dc54847b7a8d328e4"
  },
  {
    "url": "assets/js/94.4774939d.js",
    "revision": "5183267aad57c0a566a44a72786f27d2"
  },
  {
    "url": "assets/js/95.900dd6a3.js",
    "revision": "d3786988e923218f08a91ec3fb72fee9"
  },
  {
    "url": "assets/js/96.012c92d5.js",
    "revision": "2ff0bfa43c323371c8c39963cc1e0342"
  },
  {
    "url": "assets/js/97.8f5b8a8b.js",
    "revision": "69e2bbaf1c3d61085a0e38c71da931bb"
  },
  {
    "url": "assets/js/98.7e3e596b.js",
    "revision": "915511e5f0a8e354ab5e32553d0e3f25"
  },
  {
    "url": "assets/js/99.1655d227.js",
    "revision": "33b6abcf1ddc07405d4916400101b2bf"
  },
  {
    "url": "assets/js/app.88e7bf85.js",
    "revision": "bdd10cdd6a10752b2ac57a040a49e78d"
  },
  {
    "url": "assets/js/vendors~docsearch.2153fea4.js",
    "revision": "5c510fba15014f354aa2fff2c66ae1c0"
  },
  {
    "url": "index.html",
    "revision": "82163283e0fdd7eb26486f782a7bb138"
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
