# EU Withdrawal

The **EU Withdrawal** feature in Bagisto helps store owners comply with **Directive (EU) 2023/2673 (Article 11a CRD)**, the EU Consumer Rights Directive. It gives EU consumers an online way to exercise their statutory 14-day right to withdraw from a distance or off-premises contract.

## Key Features

- **Online Withdrawal Form** — A dedicated page for both logged-in customers and guests to submit a withdrawal declaration.
- **Admin Dashboard** — A list of all withdrawals and a detail page with an evidence timeline.
- **Durable Medium Confirmation** — A confirmation email sent immediately on submission, which serves as the legally required durable-medium record.
- **Guest Withdrawal via Email Link** — Guests withdraw through a temporary signed link sent to their email address.
- **Rate Limiting** — Guest lookups and submissions are throttled per IP address to prevent abuse.
- **Append-Only Evidence** — A withdrawal record cannot be edited or deleted after it is created.
- **One Withdrawal Per Order** — Each order can have at most one withdrawal.

## Admin Configuration

### Enable EU Withdrawal

1. Go to **Configure >> Sales >> EU Withdrawals**.

2. Switch **Enabled** on for the channel you are configuring. The setting is per channel, so switch channel at the top of the page to enable it on each store.

3. Click **Save Configuration**.

> **Important:** Only enable the feature on channels selling to EU consumers. When it is disabled for a channel, every withdrawal page, including the public guest lookup, returns a "not found" page, so the feature is invisible to shoppers.

<ImagePopup src="/images/orders/eu-withdrawal.png" alt="EU Withdrawal configuration" />

## Admin — Managing Withdrawals

### Viewing All Withdrawals

Go to **Sales >> EU Withdrawals**. The grid shows:

| Column                   | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| **Received At**          | Date and time the withdrawal was submitted (sortable, filterable)           |
| **Order ID**             | The order number (searchable, linked to the order)                          |
| **Customer Email**       | Email used at checkout (searchable)                                         |
| **Status**               | Colour-coded: **Received** (yellow), **Refunded** (green), **Declined** (red) |
| **Channel**              | The store channel (filterable)                                              |
| **Confirmation Sent At** | When the durable-medium confirmation email was sent                         |
| **Reference**            | The public reference number of the withdrawal (searchable)                  |

<ImagePopup src="/images/orders/eu-grid.png" alt="EU Withdrawal grid" />

### Viewing Withdrawal Details

Click **View** on any record to open the detail page. It has two columns.

<ImagePopup src="/images/orders/eu-view.png" alt="EU Withdrawal detail view" />

**Evidence card:**

- **Received At** — The legally effective timestamp (UTC).
- **Reference** — The public unique identifier, with a **Copy reference** button.
- **Order** — Linked to the order detail page.
- **Customer Email** — The email used at checkout.
- **Channel** — The store channel.
- **Locale** — The language used when submitting.
- **Customer's reason** — The customer's reason text, if provided.

**Timeline card:**

1. **Declaration Received** — Always marked as done, with the timestamp.
2. **Initial Confirmation Email** — Shows the sent timestamp (green), pending (grey), or a warning with the error message (red).
3. **Resolution** — Shows **Withdrawal Declined** (with the reason and the admin who declined it), **Refund Issued** (with the note and the admin who recorded it), or that the withdrawal is awaiting your decision.
4. **Final Confirmation Email** — Shown only once the withdrawal has been refunded or declined.

### Admin Actions

Three actions are available on the withdrawal detail page. Each one is controlled by an ACL permission, so a user only sees the actions their role allows.

<ImagePopup src="/images/orders/eu-actions.png" alt="EU Withdrawal Actions" />

> **Note:** The refund itself is processed through the usual order, refund or RMA tools. These actions only record the outcome on the withdrawal evidence.

#### Resending the confirmation email

Use this when the initial email failed to send, or the customer reports not receiving it.

1. On the withdrawal detail page, click **Resend Confirmation Email**.
2. Confirm the action.

If the withdrawal has already been refunded or declined, the email reflects that final status. If sending fails, the error is stored on the timeline.

#### Marking a withdrawal as refunded

1. Process the refund through the order as usual.
2. On the withdrawal detail page, click **Mark Refunded**.
3. Optionally enter a note for the evidence record.
4. Confirm the action. The status changes to **Refunded**, and the date and the admin user who recorded it are stored.

#### Declining a withdrawal

Decline a withdrawal when you contest the customer's entitlement to withdraw.

1. On the withdrawal detail page, click **Decline**.
2. Enter the **Reason for declining**. This is required and may be up to 500 characters.
3. Confirm the action. The status changes to **Declined**, and the date and the admin user who declined it are stored. Any earlier refund record on the withdrawal is cleared.

> **Important:** Because an order can only have one withdrawal and a declined withdrawal cannot be resubmitted, use this action with care.

## Customer — Withdrawing from a Contract (Logged In)

### Submitting the declaration from the account

1. Log in to the customer account and open **Orders**.

2. Click **View** on the order you wish to withdraw from.

3. On the order detail page, click **Withdraw from Contract**. If a withdrawal already exists for this order, the button reads **View your withdrawal** and opens the receipt instead.

4. Review the withdrawal form.

   <ImagePopup src="/images/orders/eu-form.png" alt="EU Withdrawal Form" />

   - **This is a legally binding declaration** — An amber notice explaining that the declaration takes effect the moment the form is submitted.
   - **Order** — The order number, date, total and item count.
   - **Reason (optional)** — A text box in which the customer may explain the reason for withdrawing.

5. Click **Submit withdrawal**.

### The receipt page

After submitting, the customer is redirected to the **Withdrawal Receipt** page, which shows:

<ImagePopup src="/images/orders/eu-receipt.png" alt="EU Withdrawal Receipt" />

- **Status** — **Received** in yellow, or **Refunded** or **Declined** once the merchant has acted.
- **Received at** — The legally effective timestamp.
- **Reference** — With a **Copy reference** button.
- **Order** — With a link back to the order.
- **Email** — The email on file.
- **Reason** — The reason text, if provided.
- **What happens next** — A timeline: declaration received, confirmation email sent, refund issued within 14 days.
- A notice that the page and the confirmation email both serve as confirmation on a durable medium.
- **Print** — Opens a print-friendly view.

## Guest Withdrawal

Guests can exercise their right of withdrawal without an account, through a public lookup.

### Requesting the withdrawal link

1. On the storefront, open the profile menu in the header and click **Withdraw from a Contract**.

2. Enter the **Order number** and the **Email address** used at checkout.

   <ImagePopup src="/images/orders/eu-guest.png" alt="EU Withdrawal guest lookup form" />

3. Click **Send me the withdrawal link**.

The same notice is shown whether or not a matching order exists, so nobody can use the form to discover order numbers. If a matching guest order is found, an email with a temporary signed link, valid for **24 hours**, is queued for sending. If no order matches, no email is sent.

### Completing the withdrawal

1. Open the email and click the withdrawal link.

2. Review the withdrawal form and optionally enter a **Reason**.

3. Click **Submit withdrawal**.

The confirmation email is sent immediately, and the guest is redirected to the receipt page described above.

## Legal Compliance

### Durable Medium Requirement (Article 11a)

The confirmation email sent on submission is the **durable medium** required by Article 11a(3) of Directive 2011/83/EU.

- **Immediate sending** — The email is sent within the same request, not queued, so a queue failure cannot leave a withdrawal without its legally required confirmation.
- **Confirmation timestamp** — The time the confirmation was sent is stored on the withdrawal and shown as **Confirmation Sent At**.
- **Final confirmation** — When an admin refunds or declines the withdrawal, the time of that final confirmation email is stored separately, so the original delivery evidence is preserved.
- **Email footer** — Each confirmation carries the notice that it is the confirmation on a durable medium required by Article 11a of Directive 2011/83/EU.

## Statuses

| Status       | Description                                                       | Final |
| ------------ | ----------------------------------------------------------------- | ----- |
| **Received** | The withdrawal has been submitted and is awaiting the admin's decision | No    |
| **Refunded** | The admin has recorded that the refund was issued                 | Yes   |
| **Declined** | The merchant has contested the entitlement to withdraw            | Yes   |

## Email Notifications

| Email                        | Sent when                                        | Delivery                | Content                                                                |
| ---------------------------- | ------------------------------------------------ | ----------------------- | ---------------------------------------------------------------------- |
| **Guest withdrawal link**    | A guest lookup matches an order                  | Queued                  | A temporary signed link valid for 24 hours                             |
| **Withdrawal confirmation**  | A withdrawal is submitted                        | Immediate, not queued   | Reference, received time, order, email, status and durable-medium notice |
| **Final confirmation**       | The admin refunds or declines, or resends the email | Immediate            | The same details, updated for the final status                         |

The **Withdrawal confirmation** email is the legal durable-medium record. Its subject names the order, for example "Confirmation of your withdrawal -- Order 123", and changes wording once the withdrawal has been refunded or declined.
