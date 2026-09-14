# RMA

These settings control return requests (RMA, return merchandise authorization): how long customers have to request a return, which product types can be returned, the return policy customers read, the files that can be attached, and whether a closed return can be reopened. How returns are requested and handled is described in [Return Merchandise Authorization (RMA)](../orders/rma.md).

## Set up returns

1. Go to **Configure >> Sales >> RMA**.
2. Set the options described below.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/rma-settings.png" alt="RMA screen with the return window, return policy and allowed options" />

All settings are set per channel, and the return policy is also set per language.

| Setting | What it does |
|---|---|
| **Default allowed days** | The number of days after an order is placed within which the customer can request a return, used when no RMA rule sets a different window. The default is `7`. |
| **Return Policy** | The return policy customers read on the storefront before they submit a return request. |
| **Allowed File Extension** | The file types customers and admins can attach to a return request, such as product photos: **JPG / JPEG**, **PNG** and **WEBP**. |
| **Allow Reopening Cancelled Returns** | **Yes** lets a customer resubmit a return that was cancelled, and it moves back to **Pending Review**. **No** makes a cancelled return final. |
| **Allow Reopening Declined Returns** | **Yes** lets a customer resubmit a return that you declined, and it moves back to **Pending Review**. **No** makes a declined return final. |
| **Allow Product Type For RMA** | The product types that can be returned: **Simple**, **Configurable**, **Bundle** and **Grouped**. The return window is set when an order is placed, so a change here applies to new orders only. |
