# GDPR

Bagisto's GDPR (General Data Protection Regulation) features let customers ask you to update or delete the personal data you hold about them, ask customers to accept your terms before they create an account, and show a cookie notice on the storefront. Every setting on this screen is saved per channel and per language, so choose both at the top of the screen before you change anything, and repeat for each language your storefront offers.

## GDPR compliance settings

**Enable GDPR** is the main switch. The customer agreement and the cookie notice below only appear on the storefront while it is on. It is off by default.

1. Go to **Configure >> General >> GDPR**.
2. In **GDPR Compliance Settings**, switch **Enable GDPR** on.
3. Click **Save Configuration**.

When GDPR is on, customers find **GDPR Requests** in their account on the storefront, where they click **Create Request** to ask for their data to be updated or deleted. You handle the requests under **Customers >> GDPR Data Requests**; see [GDPR Data Requests](../customer/gdpr-data-requests.md).

## GDPR agreement

The customer agreement adds a checkbox that customers must tick on the sign-up form to create an account.

1. Go to **Configure >> General >> GDPR**.
2. In **GDPR Agreement**, switch **Enable Customer Agreement** on. **Agreement Checkbox Label** and **Agreement Content** appear.
3. Enter the **Agreement Checkbox Label**, the sentence shown beside the checkbox, up to 255 characters. The default is *I agree with the terms and conditions.*
4. Enter the **Agreement Content**, the full text of the agreement.
5. Click **Save Configuration**.

<ImagePopup src="/images/configure/gdpr-settings.png" alt="GDPR Compliance Settings and GDPR Agreement sections with both switches turned on" />

When **Agreement Content** has text, a **Click Here** link after the checkbox opens it. What shoppers see on the sign-up form is described in [Customer Account](../customer/customer-account.md#sign-up).

## Cookie notice settings

The cookie notice tells shoppers about the cookies your storefront uses. It shows **Accept**, **Reject** and **Learn More and Customize** buttons, and a **Privacy Policy** link to your `privacy-policy` CMS page. The notice keeps appearing until the shopper clicks **Accept** or saves their choices on the cookie preferences page.

1. Go to **Configure >> General >> GDPR**.
2. In **Cookie Notice Settings**, switch **Enable Cookie Notice** on. The other settings appear.
3. Change the settings described in the table.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/gdpr-cookie-notice.png" alt="Cookie Notice Settings section with the cookie notice turned on" />

| Setting | What it does |
|---|---|
| **Enable Cookie Notice** | Shows the notice on the storefront. It needs **Enable GDPR** on. Off by default. |
| **Cookie Block Display Position** | Where the notice appears: **Bottom Left** (the default), **Bottom Right**, **Top Left**, **Top Right** or **Center**. |
| **Static Block Identifier** | The heading at the top of the notice. The default is **Cookie Block**. |
| **Description** | The message shoppers read in the notice, up to 500 characters. The **Privacy Policy** link follows it. |

## Manage your cookie preferences

**Learn More and Customize** in the cookie notice opens the **Your Cookie Consent Preferences** page. There, shoppers tick the kinds of cookies they agree to and click **Save and Continue**. Shoppers have to be signed in to open this page, so a guest is asked to sign in first. **Manage Your Cookie Preferences** holds the description shown beside each checkbox.

1. Go to **Configure >> General >> GDPR**.
2. In **Manage Your Cookie Preferences**, edit the descriptions described in the table.
3. Click **Save Configuration**.

| Setting | What it does |
|---|---|
| **Strictly Necessary** | Describes the cookies the storefront needs in order to work. Its default text is the agreement sentence *I agree with the terms and conditions.*, so replace it with a description of these cookies. |
| **Basic Interactions & Functionalities** | Describes the trackers behind basic interactions and features. |
| **Experience Enhancements** | Describes the trackers that personalize the shopper's experience. |
| **Measurements** | Describes the trackers that measure traffic and behavior. |
| **Targeting & Advertising** | Describes the trackers used for personalized marketing and ads. |
