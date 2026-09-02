# Super Admin Settings

The **Settings** menu holds the platform-wide controls: who can run the platform with you, the currencies tenants are billed in, the webhooks that notify your other systems, and the themes and emails that shape how the platform presents itself.

## Agents

Go to **Settings >> Agents** to manage the staff who help you run the platform. The list shows each agent's name, email, role, and status.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-agents.png" alt="Agents list" />

Click **Create Agent** to add a staff member with a name, email, password, and role. Use the **Edit** and **Delete** icons on a row to change or remove an agent.

## Roles

Go to **Settings >> Roles** to control what agents can do. A role is either given **All** access or a custom set of permissions across the platform's sections.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-roles.png" alt="Roles list" />

Click **Create Role**, give it a name and description, choose its access level, and save. Assign the role to an agent from the Agents screen.

## Currencies

Go to **Settings >> Currencies** to manage the currencies available on the platform. Each currency has a code, name, and symbol.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-currencies.png" alt="Currencies list" />

## Exchange Rates

Go to **Settings >> Exchange Rates** to set the rate of each currency against the base currency, so amounts convert correctly across the platform.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-exchange-rates.png" alt="Exchange rates" />

## Webhooks

Webhooks let the platform tell your other systems when something happens — a tenant signs up, a subscription changes, an invoice is paid. Go to **Settings >> Webhooks** to see every endpoint, its URL, the number of events it is subscribed to, its status, and when it was last delivered to.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-webhooks.png" alt="Webhook endpoints" />

### Create an endpoint

Click **Create Endpoint** and fill in the form.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-webhook-create.png" alt="Create webhook endpoint" />

**Name:** A label for the endpoint.
**Endpoint URL:** Where events are sent. HTTPS is required; redirects are not followed and internal addresses are blocked.
**Description:** An optional note.
**Status:** Whether the endpoint is **Active**.

Under **Subscribed Events**, choose which events this endpoint receives, grouped as **Tenant** (created, provisioned, updated, deleted), **Subscription** (activated, changed, cancelled, trial ending, expired), and **Billing** (invoice paid, payment failed). Only the selected events are delivered.

Click **Save Endpoint**. Events are delivered as signed JSON requests.

### Webhook Deliveries

Go to **Settings >> Webhook Deliveries** to see the log of every delivery attempt, its event, status, and timing. Open a delivery to inspect it, and retry one that failed.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-webhook-deliveries.png" alt="Webhook deliveries log" />

## Themes

Go to **Settings >> Themes** to manage the content blocks that make up the platform's registration and landing pages, such as the hero signboard, pricing, and footer links. Each block has a name, type, sort order, and status.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-themes.png" alt="Super Admin themes" />

Use **Create Theme** to add a block, the **Edit** icon to change one, and the sort order to control where it appears.

## Send email

Go to **Settings >> Send email** to send an email to your tenants. Enter a **Subject** and compose the **Body** in the rich-text editor, then click **Send Email**.

<ImagePopup src="/images/multi-tenant-ecommerce/settings-send-email.png" alt="Send email to tenants" />
