# Email Settings

The **Email Settings** screen decides how your store sends email, and the names and addresses emails are sent from.

Go to **Configure >> Email >> Email Settings**.

## Choose how email is sent

1. In **Mail Driver**, choose the **Driver**: **SMTP** or **Brevo (API)**. Only the fields of that driver are shown.
2. For **SMTP**, enter the **Host**, **Port**, **Encryption**, **Username** and **Password** of your mail server.
3. For **Brevo (API)**, enter your **Brevo API Key**.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/email-mail-driver.png" alt="Mail Driver section of the Email Settings screen with the SMTP fields" />

**SMTP** sends email through a mail server, such as the one your email provider gives you. **Encryption** can be **TLS** (the default), **SSL** or **None**; use the one your provider tells you to.

**Brevo (API)** sends email through Brevo's web service instead of a mail server. Create a v3 API key in your Brevo account under **SMTP & API**.

If the section shows *These settings are currently inactive.*, your server is set to send email another way and changes here have no effect. Ask whoever manages your server to set the store's mailer to `bagisto-dynamic-smtp` in its environment file.

## Set the sender details

1. In **Email Settings**, enter the **Sender Name** and **Sender Email Address** that customers see emails come from.
2. Enter the **Admin Name** and **Admin Email Address** that admin notifications for the channel are sent to.
3. Enter the **Contact Name** and **Contact Email Address** shown in the footer of your emails.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/email-sender-details.png" alt="Email Settings section with the sender, admin and contact details" />

All six fields are required and set per channel, and each name can be up to 50 characters. Which emails are sent is set under [Notifications](./notifications.md).
