# Invoice Settings

These settings decide how invoice numbers are built, when invoices are due, what the invoice PDF shows, and whether reminders are sent for unpaid invoices.

Go to **Configure >> Sales >> Invoice Settings**.

## Invoice numbers

1. In **Invoice Number Settings**, enter the **Invoice Number Prefix**, such as `INV-`.
2. Enter the **Invoice Number Length**, a number from `0` to `10`.
3. Optionally, enter an **Invoice Number Suffix**.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/invoice-settings-numbers.png" alt="Invoice Number Settings and Payment Terms sections of the Invoice Settings screen" />

The number is padded with zeros to the length you set, so a prefix of `INV-` and a length of `6` give invoice numbers such as `INV-000042`. Leave **Invoice Number Generator** empty unless a developer has built a custom number generator for your store. The invoice number settings are set per channel and per language, so set them before the channel issues its first invoice.

## Payment terms

1. In **Payment Terms**, enter the **Due Duration**, the number of days after the invoice date within which the invoice must be paid.
2. Click **Save Configuration**.

The due duration is set per channel.

## PDF print outs

1. In **PDF Print Outs**, switch **Display Invoice ID in Header** on or off.
2. Switch **Display Order ID in Header** on or off. Both are on by default.
3. Under **Logo**, click **Add Image** and choose the logo to print on the invoice. A size of 131 × 30 px is recommended.
4. Enter the **Footer text** printed at the bottom of the PDF.
5. Click **Save Configuration**.

<ImagePopup src="/images/configure/invoice-settings-pdf.png" alt="PDF Print Outs and Invoice Reminders sections of the Invoice Settings screen" />

The logo is set per channel, and the footer text per channel and language.

## Invoice reminders

Invoice reminders are emails sent to customers about invoices that are past their due date.

1. In **Invoice Reminders**, enter the **Maximum limit of reminders** sent for one invoice.
2. Choose the **Interval between reminders**, from **1 day** to **4 weeks**.
3. Click **Save Configuration**.

Reminders are sent once a day by the server's task scheduler. If they aren't sent, ask whoever manages your server to check that the scheduler is running.
