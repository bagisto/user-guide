# Checkout

The **Checkout** screen decides whether shoppers can buy at all, whether guests can check out, what the cart page offers, and how the mini cart behaves.

Go to **Configure >> Sales >> Checkout**.

## Shopping cart

1. In **Shopping Cart**, switch the options described below on or off.
2. Click **Save Configuration**.

<ImagePopup src="/images/configure/checkout-settings.png" alt="Shopping Cart and Mini Cart sections of the Checkout screen" />

All four options are on by default.

| Setting | What it does |
|---|---|
| **Cart Page** | Turns buying on or off for the whole storefront. When it is off, the store works as a catalog: the **Add To Cart** and **Buy Now** buttons and the mini cart are hidden, product pages show a **Contact Us** button that opens a contact form, and the cart and checkout pages can't be opened. |
| **Allow guest checkout** | Lets shoppers place an order without signing in. When it is off, shoppers are asked to sign in before checkout. |
| **Cross sell Products** | Shows cross-sell products on the cart page. How many are shown is set under [Cart View Page](./cart-view-page.md). |
| **Estimated Shipping** | Shows a box on the cart page where shoppers enter their destination to get a shipping and tax estimate before checkout. |

## Guest checkout

While **Allow guest checkout** is on, you can still require an account for particular products:

1. Go to **Catalog >> Products** and open the product.
2. Switch **Guest Checkout** off.
3. Click **Save Product**.

When the cart holds such a product, shoppers must sign in before they can check out.

## Mini cart

The mini cart is the drawer that opens from the cart icon in the storefront header.

1. In **Mini Cart**, set the options described below.
2. Click **Save Configuration**.

| Setting | What it does |
|---|---|
| **Display Mini Cart** | Opens the mini cart when shoppers click the cart icon. When it is off, the cart icon takes shoppers straight to the checkout. It is on by default. |
| **Summary** | What the number on the cart icon counts. **Display number of items in cart** (the default) counts the different products in the cart. **Display item quantities** counts the total quantity. |
| **Mini Cart Offer Information** | A line of text at the top of the mini cart, such as a promotion, in up to 200 characters. |

<ImagePopup src="/images/configure/checkout-mini-cart-storefront.png" alt="Mini cart on the storefront with the offer text at the top" />

In Bagisto 2.4, **Summary** has its own **My Cart** section on this screen.
