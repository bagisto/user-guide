# Google Captcha

Google reCAPTCHA is a security feature provided by Google that helps protect websites from spam, bots, and automated abuse. 

It works by verifying whether an interaction is performed by a real human user or an automated script. By adding reCAPTCHA to forms such as login, registration, contact, and checkout, store owners can prevent fake submissions, brute-force attacks, and malicious activities.

Bagisto uses **reCAPTCHA Enterprise**, which is why a Google Cloud project and an API key are needed alongside the site key.

To add it, go to the Admin Panel and click on **Configure >> Customer >> Google Captcha** as shown below. The settings are per channel.

 <ImagePopup src="/images/configure/configure-captcha.png" alt="Google Captcha" />

As soon as you click on it, a Status toggle button will appear. Once you enable it, you will see options to add **Project ID, API Key, Site Key** and **Score Threshold**.

### To Obtain Google Cloud Project ID:

- Visit [Google Cloud Console](https://console.cloud.google.com/) 
- Create a new project or select an existing one from the project dropdown.
- Note your Project ID from the project dashboard (not the project name).

 <ImagePopup src="/images/configure/project-id.png" alt="To Obtain Google Cloud Project ID" />

### Generate API Key:

- In Google Cloud Console, navigate to APIs & Services → Credentials.

- Click Create Credentials → API Key.

- Now copy the generated API key.

<ImagePopup src="/images/configure/api-1.png" alt="Generate API Key" />

### Create reCAPTCHA Site Key:

- Navigate to Security → reCAPTCHA in Google Cloud Console.
- Click Create Key.
- Enter a display name for your key.
- Select Website as the platform type.
- Choose Score-based (reCAPTCHA v3) as the reCAPTCHA type.
- Add your domain(s) in the Domains section (e.g., example.com).
- Click Create and copy the generated site key.

Now enter the three values in the configuration, set the **Score Threshold** (reCAPTCHA scores each visitor from 0 to 1, and anything below the threshold is treated as a bot; **0.5** is a sensible start), and finally click on the **Save Configuration** button.

 <ImagePopup src="/images/configure/site-key.png" alt="Create reCAPTCHA Site Key" />

As soon as the configuration is saved, Google reCAPTCHA will be displayed on these forms on the website:

- Customer Sign In
- Customer Sign Up
- Contact Us Page, and the Contact Us form on product pages when the cart page is switched off
- Forgot Password
- Checkout Sign In

### Customer Sign In

  <ImagePopup src="/images/configure/customer-signin.png" alt="Customer Sign In" />

### Customer Sign Up

 <ImagePopup src="/images/configure/customer-signup.png" alt="Customer Sign Up" />

### Contact Us Page

 <ImagePopup src="/images/configure/contact-us.png" alt="Contact Us Page" />

### Recover Password 

 <ImagePopup src="/images/configure/forget-password.png" alt="Recover Password" />

### Checkout Sign In 

 <ImagePopup src="/images/configure/checkout-signin.png" alt="Checkout Sign In" />