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
    "revision": "e5f5723f168e94c793c3d5ff5ca62ed0"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "1772ea0ce8830d40f603cb54db40aff8"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "006aa85479a28c890dd70868f7b483b9"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "f75975bce18c6e1036f8fc1ceac8b407"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "9f65f2b1d746ce68002171a2376ada1e"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "5d9b18597963c415ceb78126d613d8d5"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "cdf89db250711e8a48ca686ac55af544"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "514e1a69dfa7f1786de4f64a92d4f27c"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "50b080190a7e78168475196286741843"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "560713e9dad34abac822fe1181bf0979"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "ea526d2e94c819d8d3d4263de7cdabc8"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "c244f3a06581f73a98edaa4c3765121c"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "bc54a36cad8d2584adfd966f77c65918"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "7af037cb4d4d83a5a52b948d22b194fa"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "5c5353ef258525b40202fcf409d6e370"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "be6f4788f891f646e97b504d910844b4"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "2acf0b2f240f27d4ee50bf7317b644ff"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "b03c67ad1d6cdaf12d5437a02e40af70"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "fb0f8b7265575e8f65aafb9abe10a084"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "22dd2765ffbf32a3ec71fe3584aea505"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "3d93033d27ffa52fa58839eb0431a865"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "a1d7b7359d6e3f85611505a8f9a092db"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "c4a4a13e2f9a48e03f6a51eb8b3a959b"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "de2e40a6198d543438978b6344ac9421"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "01145d627eacf4e56d72459841ec105a"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "cc04d7b81d579d5bda38ccb2a3314b19"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "6488c8acb8723e01cbbe4a40c0af5aae"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "005d1a2c59e143c1dd88c17c7d6310ca"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "5638446f528981190a5e95b14af39f0a"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "f4a91ec0e425faa678893decab74c529"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "3794aabb276b0fa38c320307fb7f66f1"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "aa226a342eeca329fc747b5294fd51bf"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "38fcfa3bc1d14dc4a08d2c95d8d57b6b"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "aef4a4c80a368bbf2419cbc66ef5347d"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "cf488b05776454cf1162592cb56ed258"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "3d1ca8fc3ec6f26f4d6bcf6147cea405"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "771db68ff782a4161ff860edf2299b4c"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "8b9a4d07dbb1798a7c718d6888d7d0eb"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "979a092a0b03260f609244803f0292d5"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "e66cc16f63dbf79202adacb5cacbf137"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "aca1149372d8ce1310781f02cce6d2cd"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "0b6aebb1e26fa9aa8e4f4593d5857a59"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "5728eecf64ed5fe879c82218af9a8536"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "9cf0ee3796029f11af7832d9d68ad734"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "e02979571174504a5575b88ce351e0c2"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "f8e7e07d3f57a1f7747815e2a2757be6"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "d6814079c750be94980b04c297bbe66e"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "162a1a5c4868db6d99892e465c2b6a03"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "2d8bba6483f18da5a7f924844951404c"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "63237cb084ce93a99cc7e908db72e299"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "144784a9b1f3016536b1d5a91c019fe5"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "cc81bb1363fc41cdc980f513027dfdb7"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "0123d23bab68749953ad334c0de4fd61"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "960253fc997d7888ff210a81555c470b"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "32fdf5e09249ec771f5a5d5f713d0d7e"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "ee783543b688b1a1147eb2e6caa38209"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "e78bf90cbd1c4f3f3bdc13e36210f505"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "abeefc0990ec744bee2d41f04480e629"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "0bf2a2cc59af03a5f5e47f693692f4f6"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "c6ed2c33d44e8e824dadca0f0d264148"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "5a1464583ca1451692df9d6a1fc02a73"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "0ddd71052553262ce1f89ff1a419460e"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "100e9b09185e9383be5524151618f7e0"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "e75e3d35b44006feda91197f2d265285"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "67cba3935014a62c94d3ea9328feda29"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "72500160901a04a3b2886740860657c1"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "304d54920925de0ff55b5c09ef22637d"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "f96e590e75e4b65042f2f3fb7a275286"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "c87f3f8798d550ccad105caaeba47b73"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "805cae3b1a6bf8b7d1c44fc9499a8986"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "9451f91fe081e92402f12f9e2205b9ee"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "1f2c7c34351fd993dde89830b06dbf66"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "31acaa2d642c73651c2c469bfc6d192c"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "c48b49d7d21423d1440bdbd517121768"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "648a23c629e592c72d975fdb625c3a91"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "16e7f78d14bfe5de29e81745d529349d"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "5b466971a85c974a4dc434e315d3aae2"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "990a3c289ca6ba10205cdd0c7ca11a0f"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "ec5b7ea7f00cfdcd10c1f8b7c0b39df4"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "b1ac7068a42c1389c693a4688c9060db"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "2f90711c5a9bc05f4bb0552656127166"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "3803c36cef81ec2c96222017bc07fb25"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "d6e538a89a6ecdad02c739f1abf2d632"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "c58e6fff3c6f459b4fa52ee66014bd66"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "ca30c932a9fdc7ddfbe2951f091cdfdc"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "8b757c2064f0627fec7c827e753f4e8f"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "07466c49609c9a93adae0832dca33a26"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "7fed6f35c9b9c7392a6b119ce40c1854"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "820b29f0625cb6bbd0a4d2a82064f3b4"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "ec6ae0483b76c061a19b1faa0d5f4ccc"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "afad5fb27fa1d42986b5db2b4735e55a"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "13f1863bc5053cb56467d012a4a5a359"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "a1c57dd505c2622f67dee80d986b26aa"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "3e69dc78c2b1457dc2eb51433d3ba886"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "2c349b8a1073abe0fbf153656b745175"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "5ca1c7ab6dd831007a8d82758b8eaceb"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "97ebf87b940321983d074ff648943b3d"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "b6b432f65b27c05259b7fbe5ded312b7"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "7bdc0c81fcb741bbeb302696496eb95c"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "3172b89861dff699638317003812842d"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "e6b26c774fb72d1a671d7fd1b6588ecb"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "2aa1969da02b8a70dfcea0c738726508"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "26bce18388e9924e5f21e8f0c18e9a14"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "b82a596ddd807132605b2e20964a7f08"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "bed358da7aafd7db31046b4c4dedd217"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "dc57573d8699e1f41cd8bc5165e8239f"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "fef94c8abc1afc105d7db1c3018e806f"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "722edf9a189efee8f59f50edb913608b"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "47496f4d2adc52afdf0dc8b550ae5941"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "91fddd26963627e0b68eadd25e6e9724"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "2e18cc1bddc33c66a413407638a57eb1"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "c9be779a133d47d37555082bf81b9bd4"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "cffe02857353cfe3778e4657cd790b81"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "f081cb16df41af81892274056eeba28f"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "614aea2b8637d6612bfdb12b818bdaba"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "d2ba20b8d03ed2c4cb8141607dcd82ed"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "b78ed43af9a34fdf0456cbc0cac1a194"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "da7bc2d40b02e20c5962f71398eb53a6"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "c1831b7270988015a179377cf2d6bb4d"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "9252d82645fe84fd00c53717e6514286"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "c56b29dde2a4af649c0b60316b9866b5"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "67002aac460383195b9c00b521e69c56"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "305f7472c360cdad0e92e5389f732ce7"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "91836bf0ef417fe07137441b37163933"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "df7e54dead086b2e30a6122447ee5a60"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "6470ee623c895edbd61cc8c1d006a1b5"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "e9553f0520398c2e873ede34a3eb8bec"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "24c32f1dcbccccb077a3fa48806bd81a"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "1be27820a8c1814cd3d51e97ff17cb51"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "796d038eb341c129bfafd9928a97b1ad"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "df5ba6a1a9d4c40a27a9e5216584eec2"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "502c94d43e1dd4e5f3fa37404f6989bc"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "7fcf1b0a39366a6a0e6c38c2481be7f4"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "1d8021f5d46c081d728b36d2b5cb7d77"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "fb0d189e5336478697bc87f218c5dc32"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "33d8129619064048ef3e73f6383d23af"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "4ac64c1be66bee200fb1f8b0fb490b71"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "d41b765888b4ca4bd3bf75e0d17e4c42"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "bb2046ed34300d54514ad0245c1cac32"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "ee2526717479cb77a0a1e32c632efc2b"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "00bea4ff04d52f4057e502a4b09012b6"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "aad9e1ca85de216ed6d7392f17df0663"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "de3ac35168eb0ea5cf2b8ca3b0a51352"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "14c1d5b3b9297583801f2cf013365a85"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "db199a0f8fbd0f5181d8de5df6e09d2a"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "83e113e0043178c7ccffb364ae1f69e3"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "19106bb3ea1d37fd88f8bf53d329166f"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "a6a599472f59cf1bb26b323addedac75"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "345591840af90fb611995d54699f4ae8"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "e957a4b5e99f7cf88ec733ad0da335d8"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "23c80f5a61b1006534a34a904abc114a"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "e23857adc5d879d175fd986cde3710fe"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "17fc8b64040483ec0571aa667ac177e6"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "1d740c9da80aef0e76ee899b58eaf2d8"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "a789b8b4a474d197fc16581dbbc73c81"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "80546d0ce85cfe9a9d59a98f3616614e"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "ee5dc14ad7d082ecfca82784db6e4603"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "f9914dac5ae2f812da9f01da79182d7e"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "db9da8185e7cf5a147480bc6c89ab1af"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "fe1e9f570c8b2e0de347426493245462"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "8e29f8bd6fbdb9b42e1fe36d14d68c78"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "a62418ae1a8b558bc00b59f0ca24038a"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "eea529b5c404e0d68962d387f119ba98"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "bd923a7cf753e7276c5fec97d617b8a4"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "568ac6cf49288f6fb26690738e0fc7fd"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "f23b451ef745cd3d5c0e94f63a80bff7"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "297255cfe826127b9acc945a06e6ed7f"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "f6ff9bdae8abbf80b01c58329733e870"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "0f7e20427b59a403481762a26870bfbe"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "aadfae6bda822cb7db022ed926f44abc"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "c4be1831f378897b181ddd70b4fbd007"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "19537c6f2ba65302f96cb48e3fa37fe1"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "453476831b8c41ba1a4d874808766c93"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "d61440632ab28ade37f5d531c4ff1496"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "3d10cd90bfcd338d3b3c5fd88d9d40b0"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "4c8cf46db9f67c4ac8de93d4ccb0616e"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "09246e3dee5237c430dd2373153ef6fc"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "4941b05b8e5eca6e5f80e8fc12727cc4"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "e1ad19d9bbae1863ace3e7b32b475a08"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "9fc50c01572e16c6a7489dccf5c1ccb4"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "97fde1de30958d1d430d3a5f5aa7487d"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "35f147d6e4d7c34415404e371e987c1d"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "f993b7784a430efce43baff5d7adece6"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "a9c80f573fb2c7d453793320ef77c223"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "526f80c278ed348cf3efb5b12a360227"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "34ccbfe54fcfca5b3b5ba8c2b76885dd"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "9993aa23fb50fe753efecaf6a2c0eec1"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "17100eaa09997df4ef55fbb9429afe7b"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "b66fd539e8fd4f9eb9aca55b06dd6e8c"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "87deb2c2db70473a30d0fe1036c24e73"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "7ad3673a33986bc48932835ff6fbf3c0"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "50140ff43c5ccc3d4840c119291da601"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "573982e2b23846bead5342dae1394576"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "30f1f5945d832d3e8bcd7e3000c0237f"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "37a6858d819c9e4b3afa5571ae4f10c4"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "add95db9afa636becb9c92396c94fec4"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "d2fa3c922e9466406a2a9ea16d872d54"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "d0fe2ff8a2545af679e2c855016613a1"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "61ef1e6573f08e2e5c3cfd2fc441b082"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "4760a6f2b27dd449617fe5815c404fae"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "a958fbee8febf9847f4fa9026c4d878c"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "3ae1fc8f8d01e837fafa1a7fc8ba4645"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "681414fc7174ab807047a425e85f6886"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "ebf4c5d27f548ef978f8a72bb5340a1c"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "1541c96baf7f866a3ebb11e49f290980"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "b755b74a1fefbb2f0320d8cdb046451e"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "1d4671127c0a64a5845373e9a3136ef0"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "1283b8b28a2d2c87ae33a01df59c98dc"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "d1f46ffed3f48dc016617b41fb3fb3ab"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "431617a3b24d26f8675abdc22d376806"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "57005a60467a612d3d8b31403c2fb8ac"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "5d4041e1dc98a2b5fd9a3413a20597e1"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "bb75d69b031fd64e9495942853932d40"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "5eb6b593c4e155298e8057f7a4811ab4"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "8f4b299ba10d29370aa59aa56abb6845"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "f5b00e8b6159d29c15228f45ad1c6e34"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "4f25af3b61085cc1517ed36c69a33aab"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "0fd5fc148b3bbf88c755aeb696daae4c"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "83534ce66c803ac53a713bb59b11f43d"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "2f83615fe3af1e5a16b11c334ef16b6e"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "3ca84ba57d44138ae198bbe909eecca1"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "586b51b473e9fd2311c7d1da5a19b46b"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "38d216dcd884d4eee10d284c86bbf5c5"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "5aeb96e6af9adacb79f3ebffc51f7b69"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "4487c6b36101ae0063e5789785b5fd4b"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "2e49544443af6f1d4808faeeefd950e9"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "8076b7732c9e5a163454668002efa8eb"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "e868ec34facad5fc866cc8347e01089b"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "f2f4a69f15b48765206b95b22c14873b"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "e81c7f379a0494b98f9f58156e9b8b94"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "579daa2b39fd00ff1b42f626e3c41d7c"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "70e917ed53a9189f2b51593333e275f0"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "b34d85efa93d5245cb27c256b7bb3658"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "f1557d3210af2b3e5da427bea45a2108"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "ac7c1ce1fde7593034757f5b1ed9391c"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "435749d2f16e91ed24b5f8c16a68d561"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "8c1f81efd4d05d827963986ee4c51784"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "1360ff7b053711ba91bcac7700929ef3"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "9900248c796a2a7aaf980739695798c8"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "91973a1218a98062973943c091623333"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "e213b67f1725cb58361cb12274604391"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "005aad116969d0020dcc2ea600fc9adb"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "2bc803a4d86449cd501e86b47167df70"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "416d4bf3d7eebee40bfafe35d0f4c55e"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "ee2047716a20c78d18f24fd6111e53c6"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "4dfdb1fbe126363126ac3bab676570bc"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "ca87f1b98dd82c46bbb2f961e2080f8b"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "0430de6c3d6843de2809f7798e6f8ed1"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "39039e8134fc202dc6e460f930e309fd"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "e4aa1faa225815dd2910780a26c73d2f"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "f7f2136a4406f58ee4b49d42a3812b15"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "2c5809c2dcaa3a2da44970d55ff2ba77"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "d2943cc9190f0a92c839dc36bfea0901"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "113ce1253dd9b5b3e496fc24940ea83f"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "423477d9972c00c6a2911459cbb2762c"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "cb3f11b8563babee35592daf64884f2c"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "fd64722e6bdb4d293613e8e3e8a539da"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "f7a11970aa281094ec96ae2b31f4bfbf"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "b4edebb8d7a572f255a2fe4a5ff378d2"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "8abeb2652126555aa14b682bbb2a10e4"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "037b7b5ff57926f7469be8c7f766dec7"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "114942dd83c74dc03534f28608192eda"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "da4b36a2b74a701e2e111a24bb9e542f"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "0c4fdd8a59d55186217f4c4828229b60"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "37280d4be46ef1e614c852336f9d7b78"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "b5264ccce83b4abb63f7385ec70dba61"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "84566fa65af39c2ff6bad4e40a57d94a"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "db4c400ba0b04efb6549ea7d7d0dea1d"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "2dcba59545defca2195fca9bcda1c972"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "67824800fdcddbbbc694d360ecd95c58"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "a666ed3b9ca7c7994a6a5f2831336102"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "3217a8fc1286069af7aad11f0ca1ac7f"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "08768092f81fa768a6decb836222cadd"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "b29b55fa4b0281d36276b0038c3e7694"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "5536a1a3965e0705eaf45e99f2178aff"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "8feff6dcfba246f232a877008a14e915"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "dd9c8ebb69abb5438d017eaf7b73dc1f"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "3e53380186ac9a1f0372881851831af5"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "5a89fe1b7741499ee3aa7fb39ae26c74"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "86fdcb123a423a9d8648a7ab19dd846e"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "360c83ddf7d86adb7f1826a66a3ce484"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "f814d0cc23227a1b6dd271cc60e01ece"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "79f29667812a505cf76074e924ba16c8"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "7e566849a543f77f4fce98652018f52c"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "4e7e2dfef2a9055008ca948cb5018035"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "98a2cc739e830b98a06004a25449966c"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "83a8d595fe7330a78fa2d225d8904fcf"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "10620bf0fc51d245649a79842e93940a"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "ef19d124bc3792f334e476a3a1575663"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "337cb5f29b50f75b01a8a0604a81e983"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "28af4c5aa87e63604c7281c574a3239f"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "7aa1e97c2344e0d7e2bb282da74fa01e"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "e1087f385b2400a52e2a323120cb59a0"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "9db51a1fd52be260416e6a67c2587f93"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "f2c9ed73c9f4c5b64663e1fdaa48ffc8"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "49cb5daf9e8aee1a707d4d069295d8f2"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "689ee37d966eebf4316ca64f89f73043"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "9e04719aa58e6c3c586e7f51d4a17f90"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "8fbd3ae4a61ea12aece8a21f4556e913"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "afa706f53f8c59e1258e7ce5adda8468"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "914b4514a8cbea3b675d71ee14011be1"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "e25087236b8cf4788393952e9e11e5d8"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "1a80da6864c10f246db852631524bd43"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "ce84a0513cacc5b9665958a9807e667e"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "a8c2a15822e90af2095097f4efeaa192"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "c425ca41b5b00ab4551865ac86171433"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "c69adacebe8f22ae536a2fde7fb7d59c"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "5cd943b7c2be9bba5afbfac0900d8e92"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "6d459c76209e7e81352f2ede023e0fce"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "f705094486dce9961db18bfa9c1ffdc2"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "d547f9f033ce8f54a7afacdc28a920c5"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "fd6a0157f657ecdc6fc1461d5e1f68f6"
  },
  {
    "url": "404.html",
    "revision": "ff5e9fc36eeeff19fd721ab3bd99e857"
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
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.3b86b4d1.js",
    "revision": "34d8869f2294c5a381d89bd7f8c451c6"
  },
  {
    "url": "assets/js/10.a43c66f5.js",
    "revision": "852a9ba1abc3c185390985e454f88dc8"
  },
  {
    "url": "assets/js/100.d986a4ac.js",
    "revision": "1557debcf9f1f82fa04d4e1580187ab3"
  },
  {
    "url": "assets/js/101.aad9f195.js",
    "revision": "49fe6445c27c57b7e98ba91157b4c53c"
  },
  {
    "url": "assets/js/102.ee07443a.js",
    "revision": "5d4eb6a7ccc334b47c5f7e12e5b14888"
  },
  {
    "url": "assets/js/103.ba3a2c7b.js",
    "revision": "05f71fe236042eaf3af440abf3f706b7"
  },
  {
    "url": "assets/js/104.92624108.js",
    "revision": "7825acbbe315aaa30baadc1ffe6dfe6c"
  },
  {
    "url": "assets/js/105.510fd4ee.js",
    "revision": "2f88389f37db78bc749c474e1d8bfc8b"
  },
  {
    "url": "assets/js/106.e3c31565.js",
    "revision": "16981e38b41496dbf9ab9344f9c1c169"
  },
  {
    "url": "assets/js/107.11b1c885.js",
    "revision": "822002b843eaef222aad121571dad168"
  },
  {
    "url": "assets/js/108.9bf1b10c.js",
    "revision": "aa5088a203cacfd6cd67bec0046b0e8f"
  },
  {
    "url": "assets/js/109.4a8b0b1c.js",
    "revision": "90498903704522bfce2e0ce82bad3825"
  },
  {
    "url": "assets/js/11.02667407.js",
    "revision": "704658b9469eaf17225513a020d4d3c9"
  },
  {
    "url": "assets/js/110.574e9acf.js",
    "revision": "0d41f6691e4999a905fc30d9d941e770"
  },
  {
    "url": "assets/js/111.0bde5fef.js",
    "revision": "5244cd4dd11b2a1a7413df305601f744"
  },
  {
    "url": "assets/js/112.98759f70.js",
    "revision": "250d91ca1b18fec095b936593740198e"
  },
  {
    "url": "assets/js/113.45becca3.js",
    "revision": "0053d44048e76652729cda2b01a2a77e"
  },
  {
    "url": "assets/js/114.9e958d01.js",
    "revision": "61803a122c8d87154296fa9fd0b431d1"
  },
  {
    "url": "assets/js/115.d29ab1ea.js",
    "revision": "39bb7eba38cfb2a22a85051c1efcf7fc"
  },
  {
    "url": "assets/js/116.03b1e7ec.js",
    "revision": "a75272d12e0625f0d73e741d663fbe5f"
  },
  {
    "url": "assets/js/117.0b9db915.js",
    "revision": "8aeef191f57ea88a3cf4b43add06bc78"
  },
  {
    "url": "assets/js/118.6be763a1.js",
    "revision": "a80194a0d7738f3ea4d5da94ab818bff"
  },
  {
    "url": "assets/js/119.c480bf5b.js",
    "revision": "0cfc03703ca397983eff21edc2e03590"
  },
  {
    "url": "assets/js/12.e6c11dbf.js",
    "revision": "37fb7091dbf5178d5f43480ae289101c"
  },
  {
    "url": "assets/js/120.df83d1b0.js",
    "revision": "d26f8885a841e2a3c25681a3f5e14158"
  },
  {
    "url": "assets/js/121.6ac34e98.js",
    "revision": "9eb52443184b7bf94b98ef4912def170"
  },
  {
    "url": "assets/js/122.5d4c126c.js",
    "revision": "ae1f4336953db94e5a6ef2fb1ca5d921"
  },
  {
    "url": "assets/js/123.553664bd.js",
    "revision": "c1f7945c103afaaa737b483d13153e9a"
  },
  {
    "url": "assets/js/124.c14a4482.js",
    "revision": "6613a0777d5dca00e3da57c599294bf9"
  },
  {
    "url": "assets/js/125.570691e0.js",
    "revision": "fff1ea0f8f76d9b7d7381de8cdb43551"
  },
  {
    "url": "assets/js/126.d5b93f90.js",
    "revision": "77b1d5dfaaa9160edc8569d391a15fca"
  },
  {
    "url": "assets/js/127.fdd6a69a.js",
    "revision": "0fc326e5a98fe8f73236bc6397446380"
  },
  {
    "url": "assets/js/128.35fc2bd4.js",
    "revision": "5ba9491682cf62c1c44837e59347c83f"
  },
  {
    "url": "assets/js/129.ab3e6fe3.js",
    "revision": "1af183b1c6e3034aed42c5dbad53c10f"
  },
  {
    "url": "assets/js/13.38f01556.js",
    "revision": "8d44e5bc472754fcbacbe36aa7e57351"
  },
  {
    "url": "assets/js/130.2649be95.js",
    "revision": "be9c7bbbe9292c77014f9544cdf34403"
  },
  {
    "url": "assets/js/131.24088683.js",
    "revision": "9158ecda028d4e21406f953f934fd332"
  },
  {
    "url": "assets/js/132.94a0816e.js",
    "revision": "67578030a4a012bc3d19711d965117f4"
  },
  {
    "url": "assets/js/133.a8317422.js",
    "revision": "6abd61240c955e685a9e6eb5e95978fe"
  },
  {
    "url": "assets/js/134.498b69f2.js",
    "revision": "99974afed4d4a308e7bf80c40294c282"
  },
  {
    "url": "assets/js/135.c39f9b94.js",
    "revision": "d13ada105c1dfcdd809837f9239e5256"
  },
  {
    "url": "assets/js/136.ab0b0457.js",
    "revision": "62c79874a61c946b3e5974eb461f5d6d"
  },
  {
    "url": "assets/js/137.fa64f2e3.js",
    "revision": "417cf4092e6f039d10a331662cb53763"
  },
  {
    "url": "assets/js/138.bff4ee4f.js",
    "revision": "a64811f458a767212bb1edd86ab6a6b1"
  },
  {
    "url": "assets/js/139.651ba59e.js",
    "revision": "6b5aa02b3b22e6498d992e363c300ad6"
  },
  {
    "url": "assets/js/14.72b000a7.js",
    "revision": "145036909760c61907b7a00b8e0c0085"
  },
  {
    "url": "assets/js/140.02c16df3.js",
    "revision": "206aa45b1b441b9587350d8947512083"
  },
  {
    "url": "assets/js/141.15431706.js",
    "revision": "3dd1c0fcedb6684246b0d1ddbd241e3b"
  },
  {
    "url": "assets/js/142.afd82add.js",
    "revision": "1425b73e29dea5b79e447bc894de4cce"
  },
  {
    "url": "assets/js/143.56444eb5.js",
    "revision": "4319254d937e3525782cd029870cbb45"
  },
  {
    "url": "assets/js/144.ded99f30.js",
    "revision": "e1d486a8ab5621851fb25fecda526739"
  },
  {
    "url": "assets/js/145.84c3335f.js",
    "revision": "8e69e1f45f2c6d4480cf14addffd7443"
  },
  {
    "url": "assets/js/146.76c1193a.js",
    "revision": "4cdbdbdab8da626f2db0a34f32b16240"
  },
  {
    "url": "assets/js/147.ea6d295e.js",
    "revision": "8b35de314d336f0c1770b2e044580036"
  },
  {
    "url": "assets/js/148.882b1231.js",
    "revision": "021ad3af901c678879152dc2fd295e56"
  },
  {
    "url": "assets/js/149.357d8a58.js",
    "revision": "c2940332b1570717957d720a31502920"
  },
  {
    "url": "assets/js/15.c81a4525.js",
    "revision": "07aab18351cd7530871a036de4d82b96"
  },
  {
    "url": "assets/js/150.b9a60705.js",
    "revision": "1acd72bcccc22a91fdc1308be2e969b6"
  },
  {
    "url": "assets/js/151.90ced28f.js",
    "revision": "1f92a60912e7597dfd8fab8776af2ce6"
  },
  {
    "url": "assets/js/152.03cb9526.js",
    "revision": "3e4907e28ae585c39001335aa21dd98b"
  },
  {
    "url": "assets/js/153.1c04d843.js",
    "revision": "082175b27dbf8810757ee439f24bad14"
  },
  {
    "url": "assets/js/154.88ae5f65.js",
    "revision": "210bd0b0d85b7d9a81928bbfc5710970"
  },
  {
    "url": "assets/js/155.bbd94f15.js",
    "revision": "7321f7456d1431dbfafae71dbaa64827"
  },
  {
    "url": "assets/js/156.b0cf105b.js",
    "revision": "9c3c4016a7fe89d5b2eec986f21875e6"
  },
  {
    "url": "assets/js/157.2a8ab551.js",
    "revision": "07b1cc658ab3bd2c4594f0a5173c9391"
  },
  {
    "url": "assets/js/158.b58f9493.js",
    "revision": "b8ae978c90d1ab1f6fdf1896409d8b89"
  },
  {
    "url": "assets/js/159.14f79136.js",
    "revision": "5ee5bcc109848d158ce4fef4f3b9dcfd"
  },
  {
    "url": "assets/js/16.407130ca.js",
    "revision": "eb33e9260a082a65138b88b77b89a51d"
  },
  {
    "url": "assets/js/160.7f00f2a4.js",
    "revision": "b1bb000ca3ec3bdf389eb160cbfaa18f"
  },
  {
    "url": "assets/js/161.f924e2a9.js",
    "revision": "e5029bbbfdfe2e36ba334dc227a8f0f4"
  },
  {
    "url": "assets/js/162.e278eff1.js",
    "revision": "dbccb3e4e9eafd9324048d672b7dcd3a"
  },
  {
    "url": "assets/js/163.c64aa042.js",
    "revision": "6f5d877d5a6ac78db5994861c53377c4"
  },
  {
    "url": "assets/js/164.7cb507a2.js",
    "revision": "2c04596b0993413f9cb0f15066d5342e"
  },
  {
    "url": "assets/js/165.b807a046.js",
    "revision": "fbf58ac5f54467c01a5442c03340342d"
  },
  {
    "url": "assets/js/166.8e1ad25a.js",
    "revision": "769172df6f4b297c4c2d398185c3e209"
  },
  {
    "url": "assets/js/167.a685f075.js",
    "revision": "dfa5ea34badb9f96ca434616032d5565"
  },
  {
    "url": "assets/js/168.05b74de5.js",
    "revision": "e90e71d5b676ecc156fd190c78c2f0f6"
  },
  {
    "url": "assets/js/169.b8b857b5.js",
    "revision": "6504f5db5549c805d34c4b0834bd8565"
  },
  {
    "url": "assets/js/17.d06e94eb.js",
    "revision": "7f7c4fffec2224cc23c89f5b858f65c8"
  },
  {
    "url": "assets/js/170.906ce861.js",
    "revision": "f45fc6644e6fb9b021d63b1be337bf75"
  },
  {
    "url": "assets/js/171.55b8af68.js",
    "revision": "51b959ab0961a771e93e33cd20e44618"
  },
  {
    "url": "assets/js/172.3e4d28aa.js",
    "revision": "7af36cf57475c725c4c0c0d845d09f4c"
  },
  {
    "url": "assets/js/173.e8d4e418.js",
    "revision": "af294a5177117d46c1843c98ce23b981"
  },
  {
    "url": "assets/js/174.8c653a08.js",
    "revision": "a3d30d746da3521e08dc456b9a85529b"
  },
  {
    "url": "assets/js/175.abb5bfd4.js",
    "revision": "f6f53612071d20d66f4c638eb8adde62"
  },
  {
    "url": "assets/js/176.245dd340.js",
    "revision": "f0cdf753a4ed9777350ccbdc66fe0f02"
  },
  {
    "url": "assets/js/177.c3204e4b.js",
    "revision": "d14a469bbd93a434daa8a1005dfed7f6"
  },
  {
    "url": "assets/js/178.f150791b.js",
    "revision": "b441b0c734d1dea42a033f6f2d0137b6"
  },
  {
    "url": "assets/js/179.14c47d95.js",
    "revision": "785dc68d9842494147fd2c57c2518ebb"
  },
  {
    "url": "assets/js/18.ca9e0ae5.js",
    "revision": "09eaec3a7d4d4c9a87210681dacefa4e"
  },
  {
    "url": "assets/js/180.f823f531.js",
    "revision": "8f0d89b0be3c7c8d8c5904e5422b81dd"
  },
  {
    "url": "assets/js/181.aa84ff5d.js",
    "revision": "1d21dc9c742297cdd9c21d8ea1e73119"
  },
  {
    "url": "assets/js/182.8d69f03d.js",
    "revision": "8984f1a5f44a65a61fb9dfaafc52659b"
  },
  {
    "url": "assets/js/183.4710c9c5.js",
    "revision": "b16b7171e2bab84cb239b5efce860a26"
  },
  {
    "url": "assets/js/184.f215296b.js",
    "revision": "56d6de06918a0b27110d64e921093492"
  },
  {
    "url": "assets/js/185.2a9b1f42.js",
    "revision": "dfc67f581ee39055338e5902aec3d818"
  },
  {
    "url": "assets/js/186.dba31ba5.js",
    "revision": "a7babc1208c97638cfb46dedbefa9ae2"
  },
  {
    "url": "assets/js/187.99982b75.js",
    "revision": "0cc260ef856aaf30ddeb56d43f5b6711"
  },
  {
    "url": "assets/js/188.51643660.js",
    "revision": "ccc06b2c5ca1329aacc296b79fe85eb2"
  },
  {
    "url": "assets/js/189.53a9bdda.js",
    "revision": "fa3a2e109e0d70430039d53b6936cd54"
  },
  {
    "url": "assets/js/19.7280273d.js",
    "revision": "eb930774df824209ae1355e5cda7c562"
  },
  {
    "url": "assets/js/190.e8d3b3cf.js",
    "revision": "fa820cd18f90f672d4a0acfe65d4b7ac"
  },
  {
    "url": "assets/js/191.9d1e9aee.js",
    "revision": "c66c7256a20f0dbabc73060cc4b00c25"
  },
  {
    "url": "assets/js/192.ac7630b3.js",
    "revision": "b5247df62e78d85cd3c31282bce85cbc"
  },
  {
    "url": "assets/js/193.9c4b2b9e.js",
    "revision": "f4b79c930e533c03e8b4f231127bb2c5"
  },
  {
    "url": "assets/js/194.4fb10660.js",
    "revision": "651d111dda052bf0eba8a86b48a7d216"
  },
  {
    "url": "assets/js/195.86f1a7be.js",
    "revision": "fc2859b2e75e78559115d08b09ffae0f"
  },
  {
    "url": "assets/js/196.26ca2b92.js",
    "revision": "093dc801c0867b64d7535a3c68b3bfe6"
  },
  {
    "url": "assets/js/197.447dfe67.js",
    "revision": "144487b50fb00422b45b5cf8e12ee856"
  },
  {
    "url": "assets/js/198.95250758.js",
    "revision": "e3600800ca18aad320efc091f3ed4ff1"
  },
  {
    "url": "assets/js/199.7ba2903f.js",
    "revision": "c67a07a0f474afdfe01264ab7ac88f7e"
  },
  {
    "url": "assets/js/2.6d1ae93e.js",
    "revision": "02d02ffd811e3a3a3d581dea66e484ae"
  },
  {
    "url": "assets/js/20.54a1fa28.js",
    "revision": "c2048d77ae5a25ad0553e3cac2ca5b94"
  },
  {
    "url": "assets/js/200.6845ef5d.js",
    "revision": "57e7ac3f2f9d669ed74dd3437393b922"
  },
  {
    "url": "assets/js/201.71284870.js",
    "revision": "a29be7e025899cfe70cf760348a0807d"
  },
  {
    "url": "assets/js/202.9fef2d10.js",
    "revision": "f8226f8bad38a1994442bdc7c1734843"
  },
  {
    "url": "assets/js/203.99b32fd7.js",
    "revision": "8fb572e6c6bc329e537d91c886b67621"
  },
  {
    "url": "assets/js/204.14787b49.js",
    "revision": "8e873998a33705ee64400ed049c57da7"
  },
  {
    "url": "assets/js/205.c7d99617.js",
    "revision": "128e311c382fa3da92d9bd1024a836dc"
  },
  {
    "url": "assets/js/206.d3648d84.js",
    "revision": "b1c086ba0612e32ea203fb90c6b544e7"
  },
  {
    "url": "assets/js/207.4ef0fdf6.js",
    "revision": "5fae78281821ee1ce4dc19439f30b882"
  },
  {
    "url": "assets/js/208.4887f5e2.js",
    "revision": "09ac2220588ea84a808437cd5a80e81a"
  },
  {
    "url": "assets/js/209.def64662.js",
    "revision": "30606ee1de2fca383454f798e329e2c1"
  },
  {
    "url": "assets/js/21.d48366e4.js",
    "revision": "bae1cf5e649505a19a299756bda64122"
  },
  {
    "url": "assets/js/210.a00ef4f1.js",
    "revision": "6a92c0279ba04368160b366ee0805d5b"
  },
  {
    "url": "assets/js/211.2ec433d8.js",
    "revision": "e7fb50be9af5628dd0a93afdcbefcd00"
  },
  {
    "url": "assets/js/212.5e7a3f05.js",
    "revision": "6c59577786fad16c07e23cad33033c81"
  },
  {
    "url": "assets/js/213.b1592c4e.js",
    "revision": "758849ea81c32d5f63505ea58ad00f48"
  },
  {
    "url": "assets/js/214.88cfac85.js",
    "revision": "8a524d42a80db11df9a1d22c0d706a7a"
  },
  {
    "url": "assets/js/215.0146f41d.js",
    "revision": "91f44444a0d3f12265876bc3510b7b27"
  },
  {
    "url": "assets/js/216.9d42143d.js",
    "revision": "831041022ca8fa97a81645e8fe1ac90c"
  },
  {
    "url": "assets/js/217.6ebd85fd.js",
    "revision": "580cc2f82ce996c0830a643e026a6ad0"
  },
  {
    "url": "assets/js/218.37924702.js",
    "revision": "bfee5f5aea20111a3e93ff1cab156ee0"
  },
  {
    "url": "assets/js/219.0d122188.js",
    "revision": "8e7796cf3619a26ba61c8717bc0a4e74"
  },
  {
    "url": "assets/js/22.cc7d9e0e.js",
    "revision": "d00919bbc7690b97ee23ce31b565ba6c"
  },
  {
    "url": "assets/js/220.523b6298.js",
    "revision": "da49262744bd2a3af48b07cdfe4045d5"
  },
  {
    "url": "assets/js/221.80da5881.js",
    "revision": "c468b5495d663138ac2def149079fd48"
  },
  {
    "url": "assets/js/222.d2da5ee7.js",
    "revision": "758996bee2a2463fe73f2ac1d25609b6"
  },
  {
    "url": "assets/js/223.b074b77f.js",
    "revision": "39a433fd63694a92d2c26b7f6b1cbe45"
  },
  {
    "url": "assets/js/224.fbe859da.js",
    "revision": "b23d831e5065a0aaec1ff0ea07dec689"
  },
  {
    "url": "assets/js/225.be98cdec.js",
    "revision": "d97e5b80662df89f242a23abff2ccf0c"
  },
  {
    "url": "assets/js/226.b2f3a2ad.js",
    "revision": "01ed2366e408e81c82ffd2501c1da668"
  },
  {
    "url": "assets/js/227.a604f6e7.js",
    "revision": "dcc6d16254d7ec29b454317cee18c1f2"
  },
  {
    "url": "assets/js/228.f36802ee.js",
    "revision": "f7ddf9942d4aea05abb951b5e30a2824"
  },
  {
    "url": "assets/js/229.3536c4d9.js",
    "revision": "37eab9a9e48ed563c49c27af972b07b4"
  },
  {
    "url": "assets/js/23.c4c7f667.js",
    "revision": "89190639ef508e6df5bf8734ecc48fef"
  },
  {
    "url": "assets/js/230.e5d20909.js",
    "revision": "b019ef98a29b6f576eb2bfe27a0904d3"
  },
  {
    "url": "assets/js/231.2b331d16.js",
    "revision": "58791e29e680a4f0a752cf58dbfcef14"
  },
  {
    "url": "assets/js/232.ba29824b.js",
    "revision": "c176b5e51ba130ab94fdcaef671883d1"
  },
  {
    "url": "assets/js/233.14f6aefb.js",
    "revision": "06a2e7c98132cf907e73a13bc0309a19"
  },
  {
    "url": "assets/js/234.2d6a3e40.js",
    "revision": "897bf409c1ba0229651e351ed7cd86a0"
  },
  {
    "url": "assets/js/235.2640e363.js",
    "revision": "3c6ae0af65d571b64f503a67da7b3109"
  },
  {
    "url": "assets/js/236.8952ca87.js",
    "revision": "56c68c0c62e40645366af225f9838203"
  },
  {
    "url": "assets/js/237.88db9bca.js",
    "revision": "305e1f1f752c774b864560ae564e3fb5"
  },
  {
    "url": "assets/js/238.e79eeb8c.js",
    "revision": "87de8140393416a78ca637b2b7c9ea29"
  },
  {
    "url": "assets/js/239.d5f881d1.js",
    "revision": "27bbfa96e645ba91b1bcbfd45bb36986"
  },
  {
    "url": "assets/js/24.b6dcf188.js",
    "revision": "b0721ab336435afa58c90b565a7b90a0"
  },
  {
    "url": "assets/js/240.ace60ff9.js",
    "revision": "839ed8ded3e788ce9c33024550004bd1"
  },
  {
    "url": "assets/js/241.41603f30.js",
    "revision": "d9914f69aa19bab771a293898e05cfeb"
  },
  {
    "url": "assets/js/242.d7f7d131.js",
    "revision": "b242e5c9b49d1a1a2c8bac00e6c83c2d"
  },
  {
    "url": "assets/js/243.79f08331.js",
    "revision": "80d712bd3dc6f2d11e74f7e3d33bb8ec"
  },
  {
    "url": "assets/js/244.610cc819.js",
    "revision": "ab49914047165c0ca96fd2111be1f01a"
  },
  {
    "url": "assets/js/245.3fc3ce22.js",
    "revision": "0e8ab77a7698539fc2b0ae90e90f4b88"
  },
  {
    "url": "assets/js/246.bba0b1b0.js",
    "revision": "f33b1fc2aed25c1313a6c021e4b240e9"
  },
  {
    "url": "assets/js/247.f229faa9.js",
    "revision": "15e407211baddc0a6742cd5c1234e255"
  },
  {
    "url": "assets/js/248.2d1d8a2e.js",
    "revision": "4ff280e14be11fe05d8d4decaae5cea7"
  },
  {
    "url": "assets/js/249.73c68bdb.js",
    "revision": "c112b470e5fb2ed91ec7d5343b51d075"
  },
  {
    "url": "assets/js/25.2e93bb2f.js",
    "revision": "c91852c9b4aa60a01ea8a4993350f737"
  },
  {
    "url": "assets/js/250.2b4d74c4.js",
    "revision": "9afaed5052abc79ebec04e448c1fabd7"
  },
  {
    "url": "assets/js/251.47f4ad9c.js",
    "revision": "e5b8b209581f62799fb9b783c7430766"
  },
  {
    "url": "assets/js/252.c20712e8.js",
    "revision": "ba4296503df5d9b7e185383d57e2903c"
  },
  {
    "url": "assets/js/253.b5101b1a.js",
    "revision": "67ace31b59dd0b7386aa8a6442ee0a36"
  },
  {
    "url": "assets/js/254.a0e95d53.js",
    "revision": "9c64d0a73fa873abb2d36e8de2f23484"
  },
  {
    "url": "assets/js/255.27db78e8.js",
    "revision": "78e9753f1a56ce1661f2ff13c1716366"
  },
  {
    "url": "assets/js/256.56509bb5.js",
    "revision": "d1ef535b9ede2b7ad77d3b5a699b7f5e"
  },
  {
    "url": "assets/js/257.43a1c45e.js",
    "revision": "ed4b8de67bc333eb6c9a322178df2669"
  },
  {
    "url": "assets/js/258.6901e13c.js",
    "revision": "c62e13a468b4a66ee44bf03c3da323c6"
  },
  {
    "url": "assets/js/259.68e7c827.js",
    "revision": "0d3a074dfe9491b194723cfa7ddf5d4b"
  },
  {
    "url": "assets/js/26.e2c7c641.js",
    "revision": "d1770244ae8912e8a783d4d8b7d872e6"
  },
  {
    "url": "assets/js/260.f73b735a.js",
    "revision": "2e57d607e8cec7eef17d488bc6e5db8e"
  },
  {
    "url": "assets/js/261.37343b0d.js",
    "revision": "c8e1b99aa569b788be8d52c38ebaba35"
  },
  {
    "url": "assets/js/262.6112186f.js",
    "revision": "42e336a503853d7c91af5bfe51d3b348"
  },
  {
    "url": "assets/js/263.b0ce3b93.js",
    "revision": "2aaeecd5a01fb54a04613c1680cdb489"
  },
  {
    "url": "assets/js/264.a8d7ad1a.js",
    "revision": "46def5b9acc5e59b04b4626ece5b68a8"
  },
  {
    "url": "assets/js/265.07886f2f.js",
    "revision": "d07d36f11789cdf00123085129df5e5d"
  },
  {
    "url": "assets/js/266.8b961bf9.js",
    "revision": "8893879651ccf80090b20ee900a0815f"
  },
  {
    "url": "assets/js/267.6109a6d6.js",
    "revision": "3e2307f47a0a427ed33da97dfc172d7a"
  },
  {
    "url": "assets/js/268.4502ba2f.js",
    "revision": "f8fd13d08002b5db005401086d2016b1"
  },
  {
    "url": "assets/js/269.2cd8d140.js",
    "revision": "14fa33a7dfb713da29d6b1a24d1458f7"
  },
  {
    "url": "assets/js/27.60c52634.js",
    "revision": "4cde91eb6dc7ba5b6977b235b9298447"
  },
  {
    "url": "assets/js/270.29b84876.js",
    "revision": "00c012d5a3de6b837e8c0c9f9085ad07"
  },
  {
    "url": "assets/js/271.5f83f7a3.js",
    "revision": "d01cd278e149db1b81cf3d2ea5a5838c"
  },
  {
    "url": "assets/js/272.c0c4aa0d.js",
    "revision": "fa944b349753169cb5e37ecbd871a95c"
  },
  {
    "url": "assets/js/273.0c1324bf.js",
    "revision": "b22aec3de9aaa707884ac1e1db5bc774"
  },
  {
    "url": "assets/js/274.f1f821f1.js",
    "revision": "4a7a8351e34033270933a25cfc48084c"
  },
  {
    "url": "assets/js/275.b8712ce4.js",
    "revision": "5036dc13b4141f23f14d45aba2eef8ac"
  },
  {
    "url": "assets/js/276.b1f05be7.js",
    "revision": "3b54594db1e0f39b19d52689c6d3ae69"
  },
  {
    "url": "assets/js/277.09f8866e.js",
    "revision": "f3f11d593ab85548a72cc8fc135cb192"
  },
  {
    "url": "assets/js/278.f7da62fa.js",
    "revision": "61cef943dbf7a7cf0ff62dee6bc82660"
  },
  {
    "url": "assets/js/279.48bdf1e2.js",
    "revision": "b7abe7c9a8c0abca17764dc1871f9969"
  },
  {
    "url": "assets/js/28.7373a18b.js",
    "revision": "7cbacbfc0980f83832499f15d68456b5"
  },
  {
    "url": "assets/js/280.a12fcb4d.js",
    "revision": "78a31daa1f3a5e5c688061b8f090ec8e"
  },
  {
    "url": "assets/js/281.57499e52.js",
    "revision": "ef3dcf6cc605583ffe5b9398f6102a66"
  },
  {
    "url": "assets/js/282.044fa202.js",
    "revision": "f1e77bd52033a9c1c0e5274f2e2f0f03"
  },
  {
    "url": "assets/js/283.0a683e3b.js",
    "revision": "97fdb986ae5cee5fc318f11e8b7c5ea4"
  },
  {
    "url": "assets/js/284.4d80352d.js",
    "revision": "7b45d0787da5bd5f0775150b32236c29"
  },
  {
    "url": "assets/js/285.b05c1abb.js",
    "revision": "f83bce078c27c4b1966c6f4116a318f9"
  },
  {
    "url": "assets/js/286.500a246e.js",
    "revision": "c88087c9a0b487409b14fbd497952a2e"
  },
  {
    "url": "assets/js/287.2efa304c.js",
    "revision": "3a3e97e3b9f958a17d7cbe5f250044de"
  },
  {
    "url": "assets/js/288.c079b6c6.js",
    "revision": "4b5b08722c8dc4abe83ee06ddfedb087"
  },
  {
    "url": "assets/js/289.e2d7fc42.js",
    "revision": "c92d5c1d2587606c3a1606a6bfab59a3"
  },
  {
    "url": "assets/js/29.48d63187.js",
    "revision": "74e9de39c22605febf6e8db00d486c49"
  },
  {
    "url": "assets/js/290.d9f4c7f2.js",
    "revision": "1b28e815fc004edb307538cef1b4de42"
  },
  {
    "url": "assets/js/291.2cc79aad.js",
    "revision": "6eb857e9b3a093ec825d5298d97eb040"
  },
  {
    "url": "assets/js/292.7c724309.js",
    "revision": "27f077d55bfa9efafc0939055140a76e"
  },
  {
    "url": "assets/js/293.27635da5.js",
    "revision": "1370901872767578d6bba1ef7b99869e"
  },
  {
    "url": "assets/js/294.50b09113.js",
    "revision": "5adeb7664fb50d1fd1b35f9e651fe511"
  },
  {
    "url": "assets/js/295.cf512c62.js",
    "revision": "c366d69b653f3408c984aaed5d88d550"
  },
  {
    "url": "assets/js/296.528d7700.js",
    "revision": "de6904c2d347debfe5f394f3c7c11d0b"
  },
  {
    "url": "assets/js/297.3b0036a1.js",
    "revision": "9b52da95b826b6f01d82e0e3ff583504"
  },
  {
    "url": "assets/js/298.c21d62c7.js",
    "revision": "80cc53dc10d4b3bb3554bd7a5af76eaa"
  },
  {
    "url": "assets/js/299.4bb8fd28.js",
    "revision": "1ffe1441a35f154e1b7335c6684186db"
  },
  {
    "url": "assets/js/3.636ba4a0.js",
    "revision": "f81f1ac94d9ad4bbcebfa9f705cefd2e"
  },
  {
    "url": "assets/js/30.ea0049d5.js",
    "revision": "9edd2e858903e4dd0529bbc30b477ade"
  },
  {
    "url": "assets/js/300.84fdd35a.js",
    "revision": "41f9b0e4618a2ef8aa67953744b16c96"
  },
  {
    "url": "assets/js/301.ff424c8c.js",
    "revision": "ce6603d74fd76647b6671db1915b0843"
  },
  {
    "url": "assets/js/302.b8977132.js",
    "revision": "8a9c32a9000fdd99a931d4aa8084f50f"
  },
  {
    "url": "assets/js/303.7f308716.js",
    "revision": "050c61e601f1b7c98cfd4f49f008f804"
  },
  {
    "url": "assets/js/304.31a5db4e.js",
    "revision": "806928adbaa81af03a93761c27158dba"
  },
  {
    "url": "assets/js/305.053a2de1.js",
    "revision": "599e5185b0ff44f320b18711574abe66"
  },
  {
    "url": "assets/js/306.a4700a25.js",
    "revision": "736b2c764f2d50fd900556a6b67f30e8"
  },
  {
    "url": "assets/js/307.8e036ffc.js",
    "revision": "4c84237270f4d8008ac19c115c595404"
  },
  {
    "url": "assets/js/308.c328faaf.js",
    "revision": "8272afa85694f40c50598e9536c09bd6"
  },
  {
    "url": "assets/js/309.8c19836d.js",
    "revision": "fd33a1af848377583b49c76f8b31d568"
  },
  {
    "url": "assets/js/31.33e17d38.js",
    "revision": "bc90726e5be6ed9ef3262d3c014a3896"
  },
  {
    "url": "assets/js/310.ab87dca6.js",
    "revision": "2bbaf649a37ef520e817e9a8f6c601f6"
  },
  {
    "url": "assets/js/311.3b580761.js",
    "revision": "11346900fbd29a3a7c8c8b3c47f09c71"
  },
  {
    "url": "assets/js/312.ab38a384.js",
    "revision": "d098e1d727413bd2dd5fb03f5cfe7ba1"
  },
  {
    "url": "assets/js/313.96103ef3.js",
    "revision": "1fed7270c18d139c08c29b0ac64e7b71"
  },
  {
    "url": "assets/js/314.fb558ea2.js",
    "revision": "592a364f707985dcecfc0c40f7a31940"
  },
  {
    "url": "assets/js/315.e7bb42cd.js",
    "revision": "af54a27e4135f0d4cd896d1fd638e0e6"
  },
  {
    "url": "assets/js/316.140820d0.js",
    "revision": "54e78ae0bf53c3a8503f488825378e94"
  },
  {
    "url": "assets/js/317.e312c301.js",
    "revision": "734539855c380e42e2a08bdcec31f920"
  },
  {
    "url": "assets/js/318.44b24877.js",
    "revision": "b6e57059bfe20ac5ff44d6a365d71574"
  },
  {
    "url": "assets/js/319.100ab5d2.js",
    "revision": "3ce75f4fc592f68b9e4fe3fe9dbb9348"
  },
  {
    "url": "assets/js/32.0cae86b3.js",
    "revision": "e8505207b5d15c2f242c2ce92ca23f2b"
  },
  {
    "url": "assets/js/320.4ce4e218.js",
    "revision": "c79dc8e8c9bbe44dbcea9eb385202e12"
  },
  {
    "url": "assets/js/321.6f02f196.js",
    "revision": "78068a09f2b72911f2154cd034f6efc1"
  },
  {
    "url": "assets/js/322.82548613.js",
    "revision": "45574c107a41f3ce252dac5a313ff89c"
  },
  {
    "url": "assets/js/323.a4eef227.js",
    "revision": "5ce9c1cafeedf17e75bce50006c45247"
  },
  {
    "url": "assets/js/324.ea22fe23.js",
    "revision": "e77d9b1067e8e78444c6eb71cd2e8e16"
  },
  {
    "url": "assets/js/325.affdba60.js",
    "revision": "862d213607024a1503665e2e51d78a42"
  },
  {
    "url": "assets/js/326.704faa3c.js",
    "revision": "d188e8787c84654d2a74f5dac901485e"
  },
  {
    "url": "assets/js/327.fcb22ba1.js",
    "revision": "dd4e586c73e77dd695e273afc449e89e"
  },
  {
    "url": "assets/js/328.118c2291.js",
    "revision": "2a6a93fad04f117300eb39b37320b26f"
  },
  {
    "url": "assets/js/329.0d62a501.js",
    "revision": "e548eda83a20092a88d3110f1635375c"
  },
  {
    "url": "assets/js/33.e23e1a59.js",
    "revision": "b412a236c18a84e1a1231c1f13dbfec6"
  },
  {
    "url": "assets/js/330.12f7eb77.js",
    "revision": "36cdb769682ed96eae65e45123b72268"
  },
  {
    "url": "assets/js/331.12ede4a7.js",
    "revision": "8b572406374183b1b0703ae9e24f6b50"
  },
  {
    "url": "assets/js/332.bdb2382f.js",
    "revision": "d5c11f54a61ee0d806517d79930b96ad"
  },
  {
    "url": "assets/js/333.453c71f2.js",
    "revision": "2dd454f226152dffbb0011ad468e2476"
  },
  {
    "url": "assets/js/34.3a0fc5e6.js",
    "revision": "cf1ce4b8cf2311653704ed4ed5987f23"
  },
  {
    "url": "assets/js/35.93834f5d.js",
    "revision": "8e2cfb22fe311a6acf2578fd2fc14aa6"
  },
  {
    "url": "assets/js/36.d4060bcc.js",
    "revision": "c276f5fecb712e340014734416a2791f"
  },
  {
    "url": "assets/js/37.3dd9ae6f.js",
    "revision": "2003dc80c9ebd2fb8320ba342a356087"
  },
  {
    "url": "assets/js/38.87547333.js",
    "revision": "b7ac4f94b024fc703dd0cb0288a1d5d4"
  },
  {
    "url": "assets/js/39.2ecbecb5.js",
    "revision": "6a76c7413bf76e45c2a959990e2e0489"
  },
  {
    "url": "assets/js/4.2b9d21e7.js",
    "revision": "9bab50730862aa516f66e8e4cf89a8e3"
  },
  {
    "url": "assets/js/40.d0ca5d27.js",
    "revision": "97182b8cc53a3a8e91168cef7c87a223"
  },
  {
    "url": "assets/js/41.8090ef41.js",
    "revision": "290d23f368e24ac51b1014bb1365f092"
  },
  {
    "url": "assets/js/42.9303b1d1.js",
    "revision": "bbb44a8514fbca96387be724d2eb0afe"
  },
  {
    "url": "assets/js/43.f25dc4c3.js",
    "revision": "2f1d3985d12ebcd531cb67faf7ba4679"
  },
  {
    "url": "assets/js/44.f878ed6b.js",
    "revision": "6c9e6557e4e9b798ee7715453e01e6a1"
  },
  {
    "url": "assets/js/45.f55564fe.js",
    "revision": "3616fcc46eb1ed0c42d3723fbf45bc39"
  },
  {
    "url": "assets/js/46.732a39bb.js",
    "revision": "a0e6e020d2a8bb7f5e6dfd7a3d1a2f60"
  },
  {
    "url": "assets/js/47.207c1f00.js",
    "revision": "94c75cc89e1486bb067af4f59abb27ec"
  },
  {
    "url": "assets/js/48.8b3c74ca.js",
    "revision": "c761bfd052298476d2bf2c99f8fc93f7"
  },
  {
    "url": "assets/js/49.dcbfd2da.js",
    "revision": "fa997e00fe15e9e3f52dd81ea2149469"
  },
  {
    "url": "assets/js/5.00bbadda.js",
    "revision": "4dbd9668c3c2ed5ba217d0833824f3b1"
  },
  {
    "url": "assets/js/50.d30d4edc.js",
    "revision": "b63a931211d6c946a28b3ea675dad2fd"
  },
  {
    "url": "assets/js/51.e72f9df5.js",
    "revision": "f2e78179ad7029e7a462bf13d8c06822"
  },
  {
    "url": "assets/js/52.d4620251.js",
    "revision": "391c745da6099142b8ad4c92e0e27d0a"
  },
  {
    "url": "assets/js/53.e8be924e.js",
    "revision": "180f751c592946714a6a64757cd4bfdd"
  },
  {
    "url": "assets/js/54.53ff58fd.js",
    "revision": "15551e64195e50a7d5fdf66e6e5ba54f"
  },
  {
    "url": "assets/js/55.c7609d53.js",
    "revision": "288ed4ed6b1d81706fdd52816cf903e7"
  },
  {
    "url": "assets/js/56.e92856a6.js",
    "revision": "95972548b0634c69af5bce687e419ea8"
  },
  {
    "url": "assets/js/57.35197efa.js",
    "revision": "9051d5f0a0238077839a0f69c15d7ec8"
  },
  {
    "url": "assets/js/58.a63e8eb8.js",
    "revision": "38f56a4c30f2ba27118869422a92ad21"
  },
  {
    "url": "assets/js/59.250d8e40.js",
    "revision": "a3c52176648ede648f01705f65de6181"
  },
  {
    "url": "assets/js/60.5cfbb313.js",
    "revision": "bbacedd0ce9e302501c40da0374d989d"
  },
  {
    "url": "assets/js/61.c48a596f.js",
    "revision": "cf4767952b2987fd0d357d0873c7ba09"
  },
  {
    "url": "assets/js/62.b726c154.js",
    "revision": "589ea52740ec215556f23c0a1d60551e"
  },
  {
    "url": "assets/js/63.268106a1.js",
    "revision": "0c54322a613b58d9d01a0f0eed86f810"
  },
  {
    "url": "assets/js/64.6500933a.js",
    "revision": "ad79351590f1a147b2f9c08c8431e82c"
  },
  {
    "url": "assets/js/65.392db1b1.js",
    "revision": "7610b29a373954c2d9504ef17be33e28"
  },
  {
    "url": "assets/js/66.ca1eb5ad.js",
    "revision": "457627540dc2af3dcd2997d2fb3ba91f"
  },
  {
    "url": "assets/js/67.2b4011d6.js",
    "revision": "96a643735dd7cef2017c7ce69bdbfb32"
  },
  {
    "url": "assets/js/68.e195908c.js",
    "revision": "5e1741190f909618af7e704023324ad8"
  },
  {
    "url": "assets/js/69.37fdc06f.js",
    "revision": "8077c9d3ef4f9e14e820857c523d6cc3"
  },
  {
    "url": "assets/js/70.3dbbe935.js",
    "revision": "67a5dcf99e9a8924ab7dfcf8b6afad05"
  },
  {
    "url": "assets/js/71.8ef1bfaf.js",
    "revision": "343d705213f42935cd9a533589da343b"
  },
  {
    "url": "assets/js/72.40b752a9.js",
    "revision": "b22b6d42b39152b078ea36945adc9e7c"
  },
  {
    "url": "assets/js/73.88691956.js",
    "revision": "c70c8c017aa7623da8892c50ad1bbb2c"
  },
  {
    "url": "assets/js/74.10b4d527.js",
    "revision": "bc686e9377354df151c5d00eef83b4fe"
  },
  {
    "url": "assets/js/75.3dbc43cd.js",
    "revision": "4b6173fba04fa85d1d2724c3e52bec78"
  },
  {
    "url": "assets/js/76.6702ed0f.js",
    "revision": "0b9ea3125e469a67d6a5637190e0ca6b"
  },
  {
    "url": "assets/js/77.ae338de3.js",
    "revision": "ba78534341fcb743d9c4a9f3391b4789"
  },
  {
    "url": "assets/js/78.71be6526.js",
    "revision": "986b2b245ac3eec19543d5afe26ca1d3"
  },
  {
    "url": "assets/js/79.2f970b1c.js",
    "revision": "4002304d39926880b5adb2b71e41574c"
  },
  {
    "url": "assets/js/8.9fa3e281.js",
    "revision": "7954caa919e832274513b52a15b50c73"
  },
  {
    "url": "assets/js/80.3aaf761e.js",
    "revision": "93ce6f4243de307a3e1e814c589b8cb1"
  },
  {
    "url": "assets/js/81.bd50eb47.js",
    "revision": "8f88eaf0fc3d1ee340cc0d8abcd6c55a"
  },
  {
    "url": "assets/js/82.8e762cd0.js",
    "revision": "9325befca0d4feae21df6cef9e36c0be"
  },
  {
    "url": "assets/js/83.8d5dc333.js",
    "revision": "5aec5883f10619f98b17ef768df2b4bd"
  },
  {
    "url": "assets/js/84.e18ebe59.js",
    "revision": "65f647ef59a759a22dfdd6fab5b18c77"
  },
  {
    "url": "assets/js/85.7272be20.js",
    "revision": "a662fffcb21c6c3ac3c14225c50d6fa5"
  },
  {
    "url": "assets/js/86.8f87cfa9.js",
    "revision": "9bf609acd2f937d6a53780d22e8f9839"
  },
  {
    "url": "assets/js/87.9c0ae492.js",
    "revision": "a2a29b5733befcdd5099d4b575c383b1"
  },
  {
    "url": "assets/js/88.685d490f.js",
    "revision": "1b92d1361eebea8efc71122e04ecc67a"
  },
  {
    "url": "assets/js/89.5e7d177b.js",
    "revision": "e202ad14cde9d5c197ae8fb6e16b8592"
  },
  {
    "url": "assets/js/9.2050b8ff.js",
    "revision": "46671ae1bc6ecaa31cef5f9708bc170c"
  },
  {
    "url": "assets/js/90.6bbbcbe0.js",
    "revision": "8a5488a3ca7a5d3358dfab71a332d543"
  },
  {
    "url": "assets/js/91.1226d62c.js",
    "revision": "1414e203f76d8c7616a8c907b87e0dc7"
  },
  {
    "url": "assets/js/92.7f257518.js",
    "revision": "67f2241165ab94813993067bf9cbd147"
  },
  {
    "url": "assets/js/93.3d334499.js",
    "revision": "6176b2d2074f5842138334e1bd45a4b8"
  },
  {
    "url": "assets/js/94.09301379.js",
    "revision": "038632ff24d0480d7bcf6d7c39592f25"
  },
  {
    "url": "assets/js/95.940d0979.js",
    "revision": "de7443a02e6b0dded5c421d463dd5e58"
  },
  {
    "url": "assets/js/96.1f05dcce.js",
    "revision": "e00aac23e83d4477ae7ee55b300ca0cf"
  },
  {
    "url": "assets/js/97.2c39b728.js",
    "revision": "8c00ee1c19a3a80bce0781349d02b456"
  },
  {
    "url": "assets/js/98.d0ce8efe.js",
    "revision": "a61cd34d6c182bd94ab6bf492059d4d6"
  },
  {
    "url": "assets/js/99.dc7ae249.js",
    "revision": "df204351a4617bceae782ed525af6856"
  },
  {
    "url": "assets/js/app.c1d89e3e.js",
    "revision": "a8522115be32142ffb8102c683c04be5"
  },
  {
    "url": "assets/js/vendors~docsearch.1705bba3.js",
    "revision": "8a0113dd7301985294ea8abd965541ae"
  },
  {
    "url": "index.html",
    "revision": "5bd9f0cef7a2ac9a6f218dc3ba846bf0"
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
