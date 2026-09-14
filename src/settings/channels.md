# Channels

A channel is a storefront. Each channel has its own web address, theme, root category, languages, currencies, logo and home page SEO, and you manage every channel from the same admin panel. Use channels to run separate stores for different brands, regions or markets on one Bagisto installation.

Every store starts with one channel, **Default**. You can edit it and add more channels.

## Before you start

A channel uses records that you create elsewhere, so set these up first:

- The [locales](./locales.md) and [currencies](./currencies.md) the channel offers.
- The [inventory sources](./inventory-source.md) the channel sells stock from.
- The root category whose subcategories form the storefront menu. See [Categories](../category/create-category.md).

## Create a channel

1. Go to **Settings >> Channels**.
2. Click **Create Channel**.

   <ImagePopup src="/images/settings/channels.png" alt="Channels page under Settings with the Create Channel button" />

3. In **General**, enter the **Code**, **Name** and **Description**.
4. Select the **Inventory Sources**, choose the **Root Category** and enter the **Hostname**.

   <ImagePopup src="/images/settings/create-channel.png" alt="Create Channel page with the General section filled in for an Outlet Store channel" />

5. In **Currencies and Locales**, select the **Locales** and choose the **Default Locale**.
6. Select the **Currencies** and choose the **Default Currency**.
7. In **Design**, choose the **Theme**, and upload a **Logo** and a **Favicon**.

   <ImagePopup src="/images/settings/create-channel-design.png" alt="Design section with the Theme, Logo and Favicon fields" />

8. In **Home page SEO**, enter the **Meta title**, **Meta keywords** and **Meta description**.

   <ImagePopup src="/images/settings/create-channel-seo.png" alt="Home page SEO section with a search result preview" />

9. Optionally, set up [maintenance mode](#maintenance-mode) in the **Settings** section.
10. Click **Save Channel**.

You return to **Channels**, where the message *Channel created successfully.* appears and the new channel is listed.

<ImagePopup src="/images/settings/channel-grid.png" alt="Channels page listing the new Outlet Store channel" />

## After you save

- When a visitor opens the channel's **Hostname**, Bagisto shows that channel's storefront. If an address doesn't match any channel, the first channel is shown.
- A product appears on the channel's storefront only when the channel is selected in the product's **Channels** section.
- Many settings under **Configure** can differ per channel. When your store has more than one channel, choose the channel at the top of the configuration page.

## Channel fields

### General

| Field | What to enter |
|---|---|
| **Code** | A unique code for the channel, such as `outlet`. Start with a letter and use only letters, numbers and underscores. You can't change the code later. |
| **Name** | The channel name shown in the admin panel. |
| **Description** | Optional notes about the channel. |
| **Inventory Sources** | The inventory sources this channel sells stock from. Select at least one. |
| **Root Category** | The category whose subcategories form the storefront menu. |
| **Hostname** | The address of the storefront, such as `https://outlet.example.com`, with no slash at the end. Each channel needs its own hostname, and the domain must point to your Bagisto server. |

### Currencies and Locales

| Field | What to enter |
|---|---|
| **Locales** | The languages shoppers can choose. Select at least one. |
| **Default Locale** | The language the storefront opens in. Choose one of the selected locales. |
| **Currencies** | The currencies shoppers can choose. Select at least one. |
| **Default Currency** | The currency prices are shown in until the shopper chooses another. Choose one of the selected currencies. |

### Design

| Field | What to enter |
|---|---|
| **Theme** | The storefront theme. You choose it here only when you create the channel. After that, the edit page shows the current theme with a link to **Appearance >> Themes**, where you change it. See [Themes & Sections](../appearance/themes.md). |
| **Logo** | The logo shown in the storefront header. Recommended size: 192 × 50 px. |
| **Favicon** | The small icon shown in the browser tab. Recommended size: 16 × 16 px. |

### Home page SEO

The preview at the top of the section shows how the home page may appear in search results.

| Field | What to enter |
|---|---|
| **Meta title** | The title of the home page in search results. |
| **Meta keywords** | Keywords for the home page, separated by commas. |
| **Meta description** | The short summary shown under the title in search results. |

## Maintenance mode

Maintenance mode shows visitors a message instead of the channel's storefront while you work on it. The admin panel keeps working.

1. Go to **Settings >> Channels** and click the edit icon of the channel.
2. In **Maintenance Mode**, enter the **Message** visitors should see.
3. Optionally, in **Allowed IPs**, enter the IP addresses that can still browse the storefront, such as your office's, so you can check your changes. Separate several addresses with commas.
4. Turn on **Status**.
5. Click **Save Channel**.

   <ImagePopup src="/images/settings/channel-maintenance-mode.png" alt="Maintenance Mode section with a message, an allowed IP address and Status turned on" />

To bring the storefront back, turn **Status** off and save the channel. When you create a channel, the same fields are in the **Settings** section.

## Edit or delete a channel

On **Settings >> Channels**, click the edit icon of a channel to change it, or the delete icon to remove it. The store's default channel can't be deleted.
