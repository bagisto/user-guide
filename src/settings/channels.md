# Channels

A channel is one storefront: its own domain, theme, root category, locales and currencies. One Bagisto installation can run several channels from the same admin, so you can sell the same catalog under different brands or in different markets.

## Creating a channel

1. Go to **Settings >> Channels**.
2. Click **Create Channel**.

<ImagePopup src="/images/settings/channels.png" alt="Channels listing with the Create Channel button" />

3. Fill in the sections described below.
4. Click **Save Channel**.

The new channel appears in the list, and its storefront answers on the hostname you entered.

<ImagePopup src="/images/settings/channel-grid.png" alt="Channels listing with the new channel" />

## General

**Code:** A short identifier for the channel, used internally; it cannot be changed later.

**Name:** The channel's name, shown in the admin's channel switcher.

**Description:** Notes about the channel for your own team.

**Inventory Sources:** The warehouses whose stock this channel sells.

**Root Category:** The category whose children form the storefront's menu.

**Hostname:** The domain the storefront answers on, such as `https://shop.example.com`.

<ImagePopup src="/images/settings/general.png" alt="General section of the channel form" />

## Currencies and locales

**Locales:** The languages the storefront offers.

**Default Locale:** The language shown until the shopper picks another.

**Currencies:** The currencies the storefront offers; the store's base currency is set under [Currencies](./currencies.md).

<ImagePopup src="/images/settings/currency-local.png" alt="Currencies and Locales section of the channel form" />

## Design

**Theme:** The storefront theme this channel uses. Themes are activated per channel under **Appearance >> Themes**; see [Themes & Sections](../appearance/themes.md).

<ImagePopup src="/images/settings/theme.png" alt="Design section of the channel form" />

**Logo:** The logo shown in the storefront header.

<ImagePopup src="/images/settings/frontend-logos.png" alt="Logo upload" />

<ImagePopup src="/images/settings/logo-outputs.png" alt="Logo shown on the storefront" />

**Favicon:** The icon shown in the browser tab.

<ImagePopup src="/images/settings/frontend-favicon.png" alt="Favicon upload" />

<ImagePopup src="/images/settings/favicon-output.png" alt="Favicon shown in the browser tab" />

## Home page SEO

**Meta Title**, **Meta Keywords** and **Meta Description** describe the home page to search engines.

<ImagePopup src="/images/settings/seo.png" alt="Home page SEO section of the channel form" />

## Maintenance mode

Maintenance mode takes the storefront offline while you make changes, without affecting the admin.

**Message:** The text shown to visitors while the store is down.

**Allowed IPs:** Addresses that can still reach the storefront, so you can check your changes.

**Status:** Switch maintenance mode on or off.

<ImagePopup src="/images/settings/maintenance-mode.png" alt="Maintenance Mode section of the channel form" />
