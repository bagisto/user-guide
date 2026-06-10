# Return Merchandise Authorization (RMA)

The Return Merchandise Authorization (RMA) feature in Bagisto allows customers or guests to request returns, replacements, or cancellations for their orders within a defined time period. This structured process ensures efficient handling of after-sales support and improves customer satisfaction.

## Admin Configuration

Before using the RMA feature, it must be configured from the Admin panel.

### Configure RMA

**Step 1:** Navigate to **Configure > Sales > RMA** in the Admin panel.

**Step 2:** Configure other settings such as:

- **Default Allowed Days**
- **Return Policy**
- **Allowed File Extension**
- **Allow New RMA for Cancelled Request**
- **Allow New RMA for Declined Request**
- **Allow Product Types for RMA**

<ImagePopup src="/images/orders/rma-config.png" alt="RMA configuration" />

### RMA Reasons

The Admin can define predefined reasons that customers can select when submitting an RMA request.

**Step 1:** Go to **Sales > RMA > Reasons**.

**Step 2:** Click **Create Reason**.

**Step 3:** Enter the reason title and select the **Resolution Type** (Return, Cancel).

**Step 4:** Click **Save Reason**.

<ImagePopup src="/images/orders/rma-reason.png" alt="RMA reason" />

### RMA Rules

Rules define the policies for returns and exchanges, such as the maximum number of days allowed for a request.

**Step 1:** Go to **Sales > RMA > Rules**.

**Step 2:** Click **Create Rule**.

**Step 3:** Set the **Resolutions Period** for Exchange and Return.

**Step 4:** Define the rule's title, status, and description.

**Step 5:** Click **Save Rule**.

<ImagePopup src="/images/orders/rma-rules.png" alt="RMA rules" />

### RMA Statuses

Statuses represent the different stages of an RMA request (e.g., Pending, Approved, Solved).

**Step 1:** Go to **Sales > RMA > Statuses**.

**Step 2:** Click **Create Status**.

**Step 3:** Enter the status title and choose a color for easy identification.

**Step 4:** Click **Save Status**.

<ImagePopup src="/images/orders/rma-status.png" alt="RMA status" />

## RMA Management (Admin)

Admins can manage all RMA requests from a central dashboard.

### Handling Requests

**Step 1:** Navigate to **Sales > RMA > Requests**.

**Step 2:** Click on an RMA request to view its details.

**Step 3:** The Admin can:

- Update the **RMA Status**.
- Communcate with the customer via messages.
- Add internal notes or attachments.
- View the items requested for return/exchange.

## How Customers Create an RMA Request

Customers can initiate an RMA request from their account profile.

**Step 1:** Log in to the customer account and go to **Profile > RMA**.

**Step 2:** Click **Create Return Request**.

**Step 3:** Select the **Order ID** for which the return is requested.

**Step 4:** Select the items, specify the quantity, and choose a **Reason** and **Resolution Type**.

**Step 5:** Add any additional information or images if required.

**Step 6:** Click **Submit**.

<ImagePopup src="/images/orders/rma-request-customer.png" alt="RMA request customer" />
