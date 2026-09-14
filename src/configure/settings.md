# Customer Settings

The **Settings** screen of the **Customer** group decides how customer accounts are created and signed in to, and whether the wishlist and the newsletter are offered.

Go to **Configure >> Customer >> Settings**.

## New accounts

1. In **Create New Account Options**, choose the **Default Group** new customers are placed in. The default is **General**.
2. Switch **Allow NewsLetter** on to show a newsletter subscription checkbox on the sign-up form. It is on by default.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/customer-settings.png" alt="Create New Account Options, Email Verification and Login Options sections of the Customer Settings screen" />

Customer groups are described in [Customer Groups](../customer/customer-group.md).

## Email verification

While **Allow Email Verification** is on, new customers receive an email with a verification link, and they can sign in only after they have opened it. It is off by default.

1. In **Email Verification**, switch **Allow Email Verification** on or off.
2. Click **Save Configuration**.

## Sign-in redirect

1. In **Login Options**, set **Redirect Customer to the selected page** to where customers land after signing in: **Home** (the default) or **Account**, their account profile.
2. Click **Save Configuration**.

## Social login

Social login lets customers sign in with their Facebook, X (Twitter), Google, LinkedIn or GitHub account. The buttons of the providers you turn on appear on the storefront sign-in page. Before you start, create an app in the developer console of each provider to get its client ID and client secret.

1. In **Social Login**, switch on the provider: **Enable Facebook**, **Enable X (Twitter)**, **Enable Google**, **Enable LinkedIn** or **Enable GitHub**. Its fields appear.
2. Enter the **Client ID** and **Client Secret** of your app.
3. Check the **Redirect URL**. Keep the path shown and change only the domain to your store's, such as `https://www.example.com/customer/social-login/google/callback`.
4. Add the same **Redirect URL** to your app's settings in the provider's developer console.
5. Click **Save Configuration**.

<ImagePopup src="/images/configure/customer-social-login.png" alt="Social Login section with Google turned on and its client ID, client secret and redirect URL fields" />

Each provider's switch is set per channel, while its client ID, client secret and redirect URL apply to the whole store.

## Wishlist and newsletter

1. In **Wishlist**, switch **Allow Wishlist option** on or off.
2. In **Newsletter Subscription**, switch **Allow Newsletter Subscription** on or off.
3. Click **Save Configuration**.

**Allow Wishlist option** lets shoppers save products to a wishlist. **Allow Newsletter Subscription** shows the subscription form in the storefront footer. Both are on by default.
