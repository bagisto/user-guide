# Google Captcha

Google reCAPTCHA protects your storefront's forms from bots and automated abuse by scoring each visitor and rejecting the ones that look automated. Bagisto uses **reCAPTCHA Enterprise**, which is why a Google Cloud project and an API key are needed alongside the site key.

Go to **Configure >> Customer >> Google Captcha**. The settings are per channel.

<ImagePopup src="/images/configure/configure-captcha.png" alt="Google Captcha configuration" />

## Get the keys from Google Cloud

### Project ID

1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project, or pick an existing one from the project dropdown.
3. Copy the **Project ID** from the project dashboard. It is not the same as the project name.

<ImagePopup src="/images/configure/project-id.png" alt="Project ID in Google Cloud Console" />

### API key

1. In the console, open **APIs & Services >> Credentials**.
2. Click **Create Credentials** and choose **API Key**.
3. Copy the generated key.

<ImagePopup src="/images/configure/api-1.png" alt="Creating an API key" />

### Site key

1. In the console, open **Security >> reCAPTCHA**.
2. Click **Create Key**.
3. Enter a display name.
4. Choose **Website** as the platform.
5. Choose **Score-based (reCAPTCHA v3)**.
6. Add your store's domain, for example `example.com`.
7. Click **Create** and copy the site key.

<ImagePopup src="/images/configure/site-key.png" alt="Creating a reCAPTCHA site key" />

## Enter the keys in Bagisto

1. Switch **Status** on. The remaining fields appear.
2. Paste the **Project ID**, **API Key** and **Site Key**.
3. Set the **Score Threshold**. reCAPTCHA scores each visitor from 0 to 1 and anything below the threshold is treated as a bot; `0.5` is a sensible start.
4. Click **Save Configuration**.

## Where the captcha appears

Once saved, reCAPTCHA runs on these storefront forms:

- Customer sign in
- Customer sign up
- Contact Us page, and the Contact Us form on product pages when the cart page is switched off
- Forgot password
- Checkout sign in

<ImagePopup src="/images/configure/customer-signin.png" alt="reCAPTCHA on customer sign in" />

<ImagePopup src="/images/configure/customer-signup.png" alt="reCAPTCHA on customer sign up" />

<ImagePopup src="/images/configure/contact-us.png" alt="reCAPTCHA on the Contact Us page" />

<ImagePopup src="/images/configure/forget-password.png" alt="reCAPTCHA on forgot password" />

<ImagePopup src="/images/configure/checkout-signin.png" alt="reCAPTCHA on checkout sign in" />
