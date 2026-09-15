# Google Captcha

Google reCAPTCHA protects your storefront's forms from bots. It gives every request a score, and rejects requests whose score is below the threshold you set. Bagisto uses **reCAPTCHA Enterprise**, which needs a Google Cloud project, an API key and a site key.

## Get the keys from Google Cloud

### Project ID

1. Open the [Google Cloud console](https://console.cloud.google.com/).
2. Create a project, or choose an existing one.
3. Copy the project ID from the project dashboard. It is not the same as the project name.

### API key

1. In the Google Cloud console, open the **Credentials** page of the **APIs & Services** menu.
2. Create an API key.
3. Copy the new key.

### Site key

1. In the Google Cloud console, search for the **reCAPTCHA** service.
2. Create a key for a website, using score-based (reCAPTCHA v3) verification.
3. Add your store's domain, such as `example.com`.
4. Copy the site key.

## Credentials

All settings are saved per channel, so choose the channel at the top of the screen first when your store has more than one.

1. Go to **Configure >> Customer >> Google Captcha**.
2. In **Credentials**, switch **Status** on. **Project ID**, **API Key**, **Site Key** and **Score Threshold** appear.
3. Enter the **Project ID**.
4. Enter the **API Key**.
5. Enter the **Site Key**.
6. Enter the **Score Threshold**, a number from `0.0` to `1.0` with one decimal place. The default is `0.5`.
7. Click **Save Configuration**.

<ImagePopup src="/images/configure/google-captcha-settings.png" alt="Credentials section of the Google Captcha screen with Status turned on and placeholder keys" />

The **Project ID**, **API Key** and **Site Key** are required while **Status** is on. reCAPTCHA scores each request from 0.0, most likely a bot, to 1.0, most likely a person. A request is accepted when its score reaches the threshold, so a higher threshold rejects more requests.

::: warning
While **Status** is on, the protected forms reject every request if a key is missing or wrong, or Google can't be reached. After saving, sign in to the storefront once to check that the captcha accepts you.
:::

## Where the captcha is used

Once it is on, reCAPTCHA checks these storefront forms:

- Customer sign in and sign up
- Forgot password
- The **Contact Us** page
- The contact form on product pages, which replaces the cart buttons while the cart page is turned off under [Checkout](./checkout.md)
- Sign in during checkout

The sign-up and sign-in forms are described in [Customer Account](../customer/customer-account.md).
