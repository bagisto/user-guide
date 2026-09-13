# E-mail Settings

Set the addresses your store sends from, and choose how mail leaves the store.

Go to the Admin Panel and click **Configure >> Email >> Email Settings**.

<ImagePopup src="/images/configure/email-setting.png" alt="Email Settings" />

## Sender details

The **Email Settings** section holds the names and addresses on the mail Bagisto sends:

- **Sender Name** and **Sender Email Address** — what customers see as the sender.
- **Admin Name** and **Admin Email Address** — where admin notifications for the channel are sent.
- **Contact Name** and **Contact Email Address** — shown in the footer of your emails.

## How mail is sent

The **Driver** setting decides how mail leaves the store, and the fields below it
change to match:

**SMTP** — mail is handed to an SMTP server. Fill in:

- **Host** and **Port** of the mail server
- **Encryption** — **TLS**, **SSL** or **None**; usually TLS
- **Username** and **Password** for the account

**Brevo (API)** — mail is sent over Brevo's HTTP API rather than SMTP, which avoids
opening an SMTP port. Fill in:

- **Brevo API Key** — generated in your Brevo account

Only the fields for the driver you choose are shown, so an SMTP host and a Brevo
key are never asked for at the same time.

After making your changes, click **Save Configuration**.
