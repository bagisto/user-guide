# Google Captcha

Google reCAPTCHA protects your storefront's forms from bots. It gives every visitor a score, and rejects requests whose score is below the threshold you set. Bagisto uses **reCAPTCHA Enterprise**, which needs a Google Cloud project, an API key and a site key.

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

## Enter the keys in Bagisto

1. Go to **Configure >> Customer >> Google Captcha**.
2. In **Credentials**, switch **Status** on. The other fields appear.
3. Enter the **Project ID**, **API Key** and **Site Key**.
4. Enter the **Score Threshold**, from `0.0` to `1.0`. The default is `0.5`.
5. Click **Save Configuration**.

<ImagePopup src="/images/configure/google-captcha-settings.png" alt="Credentials section of the Google Captcha screen with Status turned on" />

All settings are set per channel. reCAPTCHA scores a visitor from 0.0, most likely a bot, to 1.0, most likely a person, so a higher threshold rejects more requests.

## Where the captcha is used

Once it is on, reCAPTCHA checks these storefront forms:

- Customer sign in and sign up
- Forgot password
- The **Contact Us** page, and the contact form on product pages while the cart page is turned off
- Sign in during checkout
