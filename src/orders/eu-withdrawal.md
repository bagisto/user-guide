# EU Withdrawal

The **EU Withdrawal** feature in Bagisto helps store owners comply with **Directive (EU) 2023/2673 (Article 11a CRD)** — the EU Consumer Rights Directive. It provides a legally compliant online withdrawal mechanism for EU consumers exercising their statutory 14-day right to withdraw from distance or off-premises contracts.

## Key Features

- **Online Withdrawal Form** — A dedicated page for both authenticated customers and guests to submit withdrawal declarations.
- **Admin Dashboard** — Centralized management with DataGrid listing and detailed view with evidence timeline.
- **Durable Medium Confirmation** — Synchronous confirmation email serving as the legally required durable-medium artifact.
- **Guest Withdrawal via Magic Link** — Guests can withdraw using a temporary signed URL sent to their email.
- **Rate Limiting** — Security measures to prevent abuse (IP-based throttling on guest lookups and submissions).
- **Append-Only Evidence** — Withdrawal records are immutable after creation; evidence columns cannot be modified or deleted.
- **One Withdrawal Per Order** — Enforced at database, service, and UI levels.

## Admin Configuration

### Enable EU Withdrawal

**Step 1:** Navigate to **Configure > Sales > EU Withdrawal** in the Admin panel.

**Step 2:** Toggle **Enabled** to enable the feature for the desired channel. This is a **channel-based** setting — each store channel can independently enable or disable the feature.

> **Important:** Only enable on channels selling to EU consumers. When disabled for a channel, all withdrawal routes (including the public guest lookup) return 404, making the feature entirely invisible.

<ImagePopup src="/images/orders/eu-withdrawal.png" alt="EU Withdrawal configuration" />

## Admin — Managing Withdrawals

### Viewing All Withdrawals

Navigate to **Sales > EU Withdrawals**. The DataGrid displays:

| Column                   | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| **Received At**          | Date and time the withdrawal was submitted (sortable, filterable)      |
| **Order ID**             | The order increment ID (searchable, linked to the order)               |
| **Customer Email**       | Email used at checkout (searchable)                                    |
| **Status**               | Color-coded: `received` (yellow), `refunded` (green), `declined` (red) |
| **Channel**              | The store channel code (filterable)                                    |
| **Confirmation Sent At** | Timestamp of the durable-medium confirmation email                     |
| **Reference**            | The public-facing withdrawal reference number (searchable)             |

<ImagePopup src="/images/orders/eu-grid.png" alt="EU Withdrawal grid" />

### Viewing Withdrawal Details

Click **View** on any record to see the full detail page with a two-column layout:

<ImagePopup src="/images/orders/eu-view.png" alt="EU Withdrawal detail view" />

**Evidence Card:**

- **Received At** — The legally effective timestamp (UTC).
- **Reference UUID** — Public-facing unique identifier (with copy-to-clipboard button).
- **Order** — Linked to the order detail page.
- **Customer Email** — The email used at checkout.
- **Channel** — The store channel.
- **Locale** — The language used when submitting.
- **Reason** — The customer's reason text, if provided.

**Timeline Card:**
A step-by-step visual timeline showing:

1. **Declaration Received** — Always marked as done with the timestamp.
2. **Initial Confirmation Email** — Shows sent timestamp (green), pending (grey), or warning (red with error message).
3. **Resolution** — Shows **Declined** (with reason and admin who declined) **or** **Refunded** (with note and admin who processed it) **or** **Pending** (awaiting admin action).
4. **Final Confirmation Email** — Shown only when a terminal state (refunded/declined) is reached.

### Admin Actions

Three actions are available on the withdrawal detail page, each gated by ACL permissions:

<ImagePopup src="/images/orders/eu-actions.png" alt="EU Withdrawal Actions" />

#### 1. Resend Confirmation Email

Resends the durable-medium confirmation email to the customer. Useful if the initial send failed or the customer reports not receiving it.

- If the withdrawal is in a terminal state (refunded/declined), the email content adapts to reflect the final status.
- If sending fails, the error message is stored.

#### 2. Mark as Refunded

Records that a refund has been issued:

1. Sets status to `refunded`.
2. Records `refunded_at` timestamp and `refunded_by_user_id` (the admin).

> **Note:** The actual refund processing (e.g., payment gateway reversal) must be handled separately. This action only records the refund in the withdrawal system.

#### 3. Decline Withdrawal

Records that the merchant contests the customer's entitlement to withdraw:

1. Requires a **Decline Reason** (required, max 500 characters).
2. Sets status to `declined`.
3. Records `declined_at` timestamp and `declined_by_user_id`.
4. This action automatically **clears** any prior refund metadata (`refunded_at`, `refunded_by_user_id`, `refund_note` are set to null).

> **Important:** Since the database enforces one withdrawal per order and declined withdrawals cannot be re-submitted, use this action judiciously.

## Customer — Withdrawing from a Contract (Authenticated)

### Step-by-Step Process

**Step 1:** Log in to the customer account and navigate to **Orders**.

**Step 2:** Click **View** on the order you wish to withdraw from.

**Step 3:** On the order detail page, click **Withdraw from Contract**.

- If a withdrawal already exists for this order, the button changes to **View Your Withdrawal** and redirects to the receipt page.

**Step 4:** Review the **Withdrawal Form** which includes:

<ImagePopup src="/images/orders/eu-form.png" alt="EU Withdrawal Form" />

- **Statutory Effect Notice** — An amber warning: "This is a legally binding declaration. By submitting this form......"
- **Order Summary** — Order number, date, total, and item count.
- **Reason (Optional)** — A textarea field to optionally explain the reason for withdrawal.

**Step 5:** Click **Submit**.

**Step 6:** You are redirected to the **Receipt Page** which displays:

<ImagePopup src="/images/orders/eu-receipt.png" alt="EU Withdrawal Receipt" />

- **Status Badge** — "Received" in yellow, or "Refunded"/"Declined" if already processed.
- **Received At** — The legally effective timestamp.
- **Reference** — With a copy-to-clipboard button.
- **Order** — With a link back to the order.
- **Customer Email** — The email on file.
- **Reason** — The reason text (if provided).
- **Next-Steps Timeline** — Declaration Received → Confirmation Email → Resolution (Pending).
- **Durable Medium Notice** — "We have recorded your declaration. This page and the email we just sent you both serve as confirmation on a durable medium."
- **Print Button** — Opens a print-friendly view.

## Guest Withdrawal

Guests can exercise their right of withdrawal without needing an account, using a secure public lookup flow.

### Step-by-Step Process

**Step 1:** Navigate to the **Withdraw from a Contract** link (found in the website header profile section).

**Step 2:** The **Public Lookup Form** appears with two fields:

<ImagePopup src="/images/orders/eu-guest.png" alt="EU Withdrawal guest lookup form" />     

- **Order Number** (required) — The order ID.
- **Email Address** (required) — The email used during checkout.

**Step 3:** Click **Send me the withdrawal link**.

**Important — Security:** The system returns the **same success message** regardless of whether the order exists or matches. This prevents order-number enumeration attacks. If a matching guest order is found:

- A **email link** is queued (sent asynchronously to prevent timing leaks) with a temporary signed URL valid for **24 hours**.
- If no match is found, no email is sent.

**Step 4:** Check your email inbox for the email link. Click the link to access the withdrawal form. The link is a **signed URL** with 24-hour validity.

**Step 5:** Complete and submit the withdrawal form.

**Step 6:** A **durable-medium confirmation email** is sent synchronously to your email address, and you are redirected to a signed receipt page.

## Legal Compliance

### Durable Medium Requirement (Article 11a)

The confirmation email sent synchronously upon withdrawal submission serves as the **durable medium** required by Article 11a(3) of Directive 2011/83/EU. Key design decisions:

- **Synchronous sending** — The email is sent within the same request lifecycle (not queued), so a queue failure cannot leave a withdrawal without its legally required confirmation.
- **Confirmation timestamp** — `confirmation_sent_at` on the withdrawal record is the legally significant delivery record.
- **Final confirmation** — When an admin processes a withdrawal to a terminal state, `final_confirmation_sent_at` is recorded separately, preserving the original delivery evidence.
- **Email footer** — "This message is the confirmation on a durable medium required by Article 11a of Directive 2011/83/EU on consumer rights..."

## Statuses

| Status     | Description                                                          | Terminal |
| ---------- | -------------------------------------------------------------------- | -------- |
| `received` | Initial state — withdrawal has been submitted, awaiting admin action | No       |
| `refunded` | Refund has been issued (recorded by admin)                           | Yes      |
| `declined` | Merchant has contested the entitlement to withdraw                   | Yes      |

## Email Notifications

| Email Type                      | Sent When                                   | Delivery Method              | Content                                                                  |
| ------------------------------- | ------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------ |
| **Guest withdrawal email Link** | Guest lookup match found                    | **Queued** (async)           | Temporary signed URL valid for 24 hours                                  |
| **Withdrawal Confirmation**     | Withdrawal successfully submitted           | **Synchronous** (not queued) | Reference UUID, received_at, order, email, status, durable medium notice |
| **Final Confirmation**          | Admin processes to terminal state + resends | **Synchronous**              | Same as above but adapted for refunded/declined status                   |

The **Withdrawal Confirmation** email is the legal durable-medium artifact. Its subject adapts based on status:

- `received`: "Confirmation of your withdrawal -- Order :order_id"
- `refunded`/`declined`: Same pattern but with updated status context.
