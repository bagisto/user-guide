# EU Withdrawal

The EU Withdrawal feature in Bagisto helps store owners comply with **Directive (EU) 2023/2673 (Article 11a CRD)**. It provides a simple and legally compliant way for customers and guests within the European Union to exercise their right to withdraw from a contract online.

## Key Features

- **Online Withdrawal Form:** A dedicated page for customers and guests to submit withdrawal declarations.
- **Admin Dashboard:** Centralized management of withdrawal requests.
- **Email Notifications:** Durable-medium confirmation emails for both customers and admins.
- **Rate Limiting:** Security measures to prevent abuse while maintaining accessibility.

## Admin Configuration

### Enable EU Withdrawal

**Step 1:** Navigate to **Configure > Sales > EU Withdrawal** in the Admin panel.

**Step 2:** Toggle the **Enabled** switch to enable the feature for the desired channel.

<ImagePopup src="/images/orders/eu-withdrawal.png" alt="EU Withdrawal Configure" />

### Managing Withdrawals (Admin)

Admins can track and manage all withdrawal declarations from the Admin panel.

**Step 1:** Go to **Sales > EU Withdrawals**.
**Step 2:** The dashboard provides a grid view of all submitted withdrawals, including:

- **Order ID**
- **Customer Email**
- **Received Date**
- **Status**
- **Channel**

<ImagePopup src="/images/orders/eu-grid.png" alt="EU Withdrawal Grid" />

**Step 3:** Click on a record to view the full declaration and the order details associated with it.

<ImagePopup src="/images/orders/eu-view.png" alt="EU Withdrawal Grid" />

## How Customers Withdraw from a Contract

Authenticated customers can withdraw directly from their order history.

**Step 1:** Log in to the customer account and navigate to **Orders**.

**Step 2:** Select the order from which you wish to withdraw.

**Step 3:** Click the **Withdraw from Contract** button.

**Step 4:** Fill out the withdrawal form (optional reason field) and click **Submit**.

**Step 5:** A confirmation email will be sent with the withdrawal details.

<ImagePopup src="/images/orders/eu-form.png" alt="EU Withdrawal form" />

## Guest Withdrawal (Public Lookup)

Guests can exercise their right of withdrawal without an account by using the public lookup form.

**Step 1:** Navigate to the **Withdraw from Contract** link (usually found in the footer or on the customer login page).

**Step 2:** Enter the **Order ID** and the **Email Address** used during checkout.

**Step 3:** Upon successful verification, the guest will be presented with the withdrawal form.

**Step 4:** Submit the declaration to receive a confirmation email.

<ImagePopup src="/images/orders/eu-guest.png" alt="EU withdrawal form guest" />
