# Return Merchandise Authorization (RMA)

The **Return Merchandise Authorization (RMA)** feature in Bagisto allows customers and admins to manage post-purchase requests such as returns/refunds and item cancellations within a defined return period. It provides a structured workflow with status tracking, two-way messaging, file attachments, and built-in refund processing.

## Admin Configuration

Before using RMA, the admin must configure the feature from the Admin panel.

### Configure RMA Settings

**Step 1:** Navigate to **Configure > Sales > RMA** in the Admin panel.

**Step 2:** Configure the following settings:

<ImagePopup src="/images/orders/rma-config.png" alt="RMA configuration" />

- **Default allowed days** — The number of days within which a customer can request an RMA after placing an order. This acts as the fallback return window when no rule applies.
- **Return Policy** — The return policy shown to customers on the storefront before they submit a return request. This field is locale-based.
- **Allowed File Extension** — The file types that customers and admins may attach to a return request (for example, product photos or supporting documents). The available options are **JPG / JPEG**, **PNG**, and **WEBP**.
- **Allow Reopening Cancelled Returns** — When enabled, a customer can resubmit a return that was cancelled; it moves back to **Pending Review** for a fresh look. When disabled, a cancelled return is final and cannot be reopened.
- **Allow Reopening Declined Returns** — When enabled, a customer can resubmit a return that the admin declined; it moves back to **Pending Review** for a fresh look. When disabled, a declined return is final and cannot be reopened.
- **Allow Product Type For RMA** — Only the selected product types (**Simple**, **Configurable**, **Bundle**, **Grouped**) are eligible for RMA. The return window is locked in when the order is placed, so changes here apply to future orders only.

### RMA Reasons

Reasons are predefined options that customers select when submitting an RMA request. Each reason can be linked to one or more resolution types. Bagisto ships with a set of default reasons such as _Manufacturer Defect_, _Damaged During Shipping_, _Wrong Description Online_, _Dead On Arrival_, and _Product Not Received Yet_.

**Step 1:** Go to **Sales > RMA > Reasons**.

**Step 2:** Click **Create RMA Reason**. The reason form opens in a popup.

**Step 3:** Fill in the following fields:

<ImagePopup src="/images/orders/rma-reason.png" alt="RMA reason creation" />

- **Reason** — The display name for the reason (e.g., "Defective Product", "Wrong Item Shipped").
- **Status** — Enable or disable the reason using the toggle. Only active reasons are shown to customers.
- **Position** — The display order of the reason in the dropdown.
- **Resolution Type** — Select one or more resolution types that this reason supports:
  - **Return/Refund** — Customer wants to return the item for a refund.
  - **Cancel Items** — Customer wants to cancel specific items from the order (only for non-invoiced items).

**Step 4:** Click **Save Reason**.

### RMA Rules

Rules let admins define the return period applied to eligible products. Bagisto ships with a default **Basic** rule with a 10-day return period.

**Step 1:** Go to **Sales > RMA > Rules**.

**Step 2:** Click **Create RMA Rules**. The rule form opens in a popup.

**Step 3:** Configure the following:

<ImagePopup src="/images/orders/rma-rules.png" alt="RMA rules" />

- **Rules Title** — The rule name.
- **Status** — Enable or disable the rule using the toggle.
- **Rules Description** — A short description of the rule (up to 70 characters).
- **Return Period (Days)** — The number of days allowed for the return resolution type.

**Step 4:** Click **Save RMA Rules**.

### RMA Statuses

Statuses represent the stages an RMA request passes through. Bagisto ships with nine default statuses:

| Status                | Meaning                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Pending Review**    | A newly submitted request awaiting the admin's review.                                                               |
| **Approved**          | The admin has approved the request.                                                                                  |
| **Awaiting Return**   | The request is approved and the store is waiting for the customer to send the item back.                             |
| **Return In Transit** | The returned package is on its way back to the store.                                                                |
| **Refunded**          | The refund has been processed and the RMA is closed. This is applied automatically by the **Refund Item** action.    |
| **Solved**            | The customer has marked the request as resolved.                                                                     |
| **Request Declined**  | The admin has rejected the request.                                                                                  |
| **Item Canceled**     | The item has been cancelled and its inventory restored. This is applied automatically by the **Cancel Item** action. |
| **Request Canceled**  | The request was cancelled (for example, by the customer from the storefront).                                        |

**Step 1:** Go to **Sales > RMA > Statuses**.

**Step 2:** Click **Create RMA Status**. The status form opens in a popup.

**Step 3:** Configure the following:

<ImagePopup src="/images/orders/rma-status.png" alt="RMA statuses" />

- **Title** — The status name.
- **Status** — Enable or disable the status using the toggle.
- **Color** — A color used to identify the status visually in the RMA grids and on the request detail page.

**Step 4:** Click **Save RMA Status**.

**Note:** The nine default statuses cannot be renamed or disabled — their title and enabled state are locked so the built-in workflow keeps working. You can still change a default status **Color**. Any custom status you create yourself can be fully edited or deleted.

### RMA Custom Fields

Custom fields allow admins to collect additional information from customers during RMA submission (e.g., "Bank Account Details for Refund", "Preferred Replacement Size").

**Step 1:** Go to **Sales > RMA > Custom Fields**.

**Step 2:** Click **Add New Field**.

**Step 3:** Configure the following:

<ImagePopup src="/images/orders/rma-custom.png" alt="RMA Custom Field" />

- **Status** — Enable or disable the field using the toggle.
- **Label** — The display label shown to customers.
- **Code** — A unique system identifier for the field.
- **Position** — Sort order for display.
- **Type** — The input type: Text, Textarea, Date, Select, Multiselect, Checkbox, or Radio. For the Select, Multiselect, Checkbox, and Radio types, you can add one or more **Options** (each with an option label and value).
- **Input Validation** — For the Text type, an optional validation rule (Numeric, Email, Decimal, or URL).
- **Is Required** — Whether this field must be filled before submission.

**Step 4:** Click **Save**.

## Admin — Managing RMA Requests

### Viewing All RMA Requests

Navigate to **Sales > RMA > Requests**. The DataGrid displays:

<ImagePopup src="/images/orders/rma-all-request.png" alt="RMA Requests" />

- **RMA ID**
- **Order Ref** (linked to the order)
- **Customer Name** (with a guest indicator for guest checkouts)
- **Request Status** (color-coded)
- **Created At**

### RMA Request Detail Page

Click **View** on any request to see its full details.
The detail page shows information such as:

<ImagePopup src="/images/orders/rma-request-view.png" alt="RMA Request View" />

- **Request Details** — The request date, the package condition (if the customer provided one), any custom field values, the additional information, and any attached images.
- **Item Requested for RMA** — The item in the request with its image, price, quantity, resolution type, and reason.
- **Order Actions** — Context-sensitive buttons to refund or cancel the item (see **Processing Order Actions** below).
- **Conversations** — A message history between the admin and the customer, with file attachments.
- **Status** — The current RMA status shown as a color badge.
- **Order Information** — Order ID, Order Total, Order Date, and Payment Method.
- **Customer Details** — Customer name (linked to the customer profile, or marked as a guest) and email.

### Updating RMA Status

The admin moves the RMA through its lifecycle from the **Change Request Status** panel on the right of the detail page. The list of available next statuses depends on the current state and resolution type:

1. Open the **Change Request Status** panel.
2. Select the next status from the available options.
3. Click **Save**.

The system enforces a logical flow:

- **Pending Review → Approved** or **Request Declined**.
- After a request is **Approved**, the available neutral statuses depend on the resolution type:
  - **Return/Refund** requests can move to **Awaiting Return**, **Return In Transit**, or **Request Canceled**.
  - **Cancel Items** requests can move to **Awaiting Return** or **Request Canceled**.

Once an RMA reaches a terminal state (**Refunded**, **Solved**, **Request Declined**, **Item Canceled**, or **Request Canceled**), the Change Request Status panel is hidden and no further status changes are possible.

**Note:** The order-affecting outcomes — **Refunded** and **Item Canceled** — are not selectable from the status dropdown. They are triggered by the dedicated **Order Actions** buttons described below, so the refund or cancellation is processed against the order safely.

<ImagePopup src="/images/orders/rma-cancle-item.png" alt="RMA Product Cancle" />

### Processing Order Actions (Refund / Cancel)

While an RMA is in the **Approved**, **Awaiting Return**, or **Return In Transit** state, an **Order Actions** section appears on the requested item. The available action depends on the resolution type. These actions affect the order and cannot be undone.

<ImagePopup src="/images/orders/rma-order-refund.png" alt="RMA Order Refund" />

- For a **Return/Refund** item, click **Refund Item**. A popup asks for the **Refund Shipping** amount. After you confirm, the system processes the refund. See the **Refund Processing** section for details.
- For a **Cancel Items** item, click **Cancel Item**. After you confirm, the system cancels the non-invoiced item, restores its inventory, and sets the RMA status to **Item Canceled**.

### Communicating with the Customer

The admin and customer can exchange messages within the RMA request:

**Step 1:** On the RMA detail page, scroll to the **Conversations** section.

<ImagePopup src="/images/orders/rma-admin-com.png" alt="RMA Communication" />

**Step 2:** Type your message and optionally use **+ Add Attachments** to attach a file.

**Step 3:** Click **Send Message**.

### Creating an RMA on Behalf of a Customer

Admins can create an RMA request for any eligible order:

**Step 1:** On the RMA Requests page, click **Create**.

**Step 2:** Select an order from the order DataGrid. The grid only shows eligible orders.

<ImagePopup src="/images/orders/rma-create-admin.png" alt="RMA Create Admin Side" />

**Step 3:** Select an item, specify the quantity, and choose a resolution type and reason. For a Return/Refund item, you can also set the **Package Condition** (Open or Packed).

**Step 4:** Add any additional information, upload images if needed, and fill in custom fields.

**Step 5:** Click **Save**. The customer receives an RMA confirmation email.

### Re-opening a Cancelled or Declined RMA

If the configuration allows reopening cancelled/declined requests, the admin can re-open a previously closed RMA:

**Step 1:** On the RMA detail page, open the **Reopen Request** panel and select the checkbox.

<ImagePopup src="/images/orders/rma-reopen.png" alt="RMA Reopen" />

**Step 2:** Click **Save**. The RMA status resets to **Pending Review** and the customer is notified.

<ImagePopup src="/images/orders/rma-reopen-decline.png" alt="RMA Declined Status reset to Pending Review" />

## Customer — Managing RMA Requests

### Viewing RMA Requests

**Step 1:** Log in to the customer account.

**Step 2:** Navigate to **Profile > RMA**.

**Step 3:** The RMA list shows all requests with their RMA ID, Order Reference, Request Status, Quantity, and Created At. Each row provides **View** and **Cancel** actions.

<ImagePopup src="/images/orders/customer-rma.png" alt="RMA Customer View" />

**Step 4:** Click **View** on any request to see its full details.

### Creating an RMA Request

**Step 1:** From the RMA page, click **Create**.

**Step 2:** Select an **Order** from the list of eligible orders. Only orders within the return window and with applicable product types are shown.

**Step 3:** In the popup, select the item to return. Each RMA request covers a single item, so only one item can be selected at a time. For the selected item, specify:

<ImagePopup src="/images/orders/rma-create-customer.png" alt="Customer creating an RMA request" />

- **Resolution Type** — Choose **Return/Refund** (for a refund) or **Cancel Items** (to cancel non-invoiced items).
- **Reason** — Select from the predefined reasons for the chosen resolution type.
- **RMA Qty** — The number of units to return or cancel.
- **Package Condition** — For a Return/Refund request, optionally indicate whether the package is **Open** or **Packed**.

**Step 4:** Fill in any **Custom Fields** configured by the admin.

**Step 5:** Add **Additional Information** in the text field.

**Step 6:** Upload **Images** as supporting evidence.

**Step 7:** Agree to the return policy by checking the agreement checkbox.

**Step 8:** Click **Submit request**. The RMA is created with **Pending Review** status, and the admin is notified via email.

<ImagePopup src="/images/orders/rma-list.png" alt="Customer RMA Request List" />

### Communicating with the Admin

Customers can send messages regarding their RMA request:

**Step 1:** On the RMA detail page, scroll to the **Conversations** area.

<ImagePopup src="/images/orders/rma-conversation.png" alt="Customer RMA Conversation" />

**Step 2:** Type a message and optionally use **+ Add Attachments** to attach a file.

**Step 3:** Click **Send Message**.

### Cancelling an RMA Request

If the request is no longer needed, the customer can cancel it from the RMA list:

**Step 1:** On the RMA page, click the **Cancel** action on the request.

<ImagePopup src="/images/orders/rma-customer-cancel.png" alt="Customer RMA Cancel" />

**Step 2:** The status changes to **Request Canceled**.

### Closing an RMA Request

Once the customer is satisfied with the resolution, they can close the request:

**Step 1:** On the RMA detail page, select **Please agree to mark it as solved**.

<ImagePopup src="/images/orders/rma-close.png" alt="Customer RMA Close" />

**Step 2:** Click **Save**. The status changes to **Solved**.

<ImagePopup src="/images/orders/rma-solved.png" alt="Customer RMA Solved" />

### Re-opening a Cancelled or Declined RMA

If the admin has enabled **Allow Reopening Cancelled Returns** or **Allow Reopening Declined Returns** in the configuration, customers can re-open a cancelled or declined RMA:

**Step 1:** On the RMA detail page, select the **Reopen Request** checkbox.

<ImagePopup src="/images/orders/rma-reopen-customer.png" alt="Customer RMA Reopen" />

**Step 2:** Click **Save**. The status resets to **Pending Review**.

## Refund Processing

A refund is triggered from the **Refund Item** action on the RMA detail page for an item with the **Return/Refund** resolution type. After the admin enters the return shipping amount and confirms, the system:

1. Prepares the refund data from the RMA item.
2. Creates a refund entry in the sales refund system.
3. Returns the items to their respective order item records.
4. Sets the RMA status to **Refunded**.
5. Sends a notification email to the customer.

<ImagePopup src="/images/orders/rma-refund.png" alt="Customer RMA Refund" />

## Email Notifications

The RMA system sends email notifications for the following events:

| Event                    | Recipient | Content                                    |
| ------------------------ | --------- | ------------------------------------------ |
| New RMA Request Created  | Customer  | Confirmation of submission                 |
| Admin sends a message    | Customer  | The message content                        |
| Customer sends a message | Admin     | The message content                        |
| Status Update            | Customer  | New status and any relevant notes          |
| RMA Re-opened            | Customer  | Notification that the request was reopened |
