# Omnibus Price Disclosure

The EU Omnibus Directive requires a store that announces a price reduction to show the lowest price it charged for that product in the 30 days before the reduction. Bagisto can record product prices over time and show that lowest price with a discounted price on the product page.

## Turn on price disclosure

1. Go to **Configure >> Catalog >> Products**.
2. If your store has more than one channel, choose the channel at the top of the screen.
3. In **Omnibus Price Disclosure**, switch **Enable Omnibus Disclosure** on.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/products-omnibus.png" alt="Omnibus Price Disclosure section of the Products screen with Enable Omnibus Disclosure switched on" />

The setting is per channel, so turn it on for each channel that sells to consumers in the EU.

## What shoppers see

When a product is sold below its regular price, for example through a special price, a catalog rule or a customer group price, the product page shows a line under the price:

**Lowest price 30 days prior to the discount:** followed by that price.

The line appears only when the product has a discount and prices have been recorded for it. The lowest price is taken from the prices recorded in the last 30 days. When a special price has a start date, prices recorded on or after the start date are left out.

## Where the prices come from

While the setting is on for a channel, the store records each product's price in every currency of that channel whenever the price changes. It checks every fifteen minutes, and also when a product is saved. Prices are kept for 35 days, so the 30-day comparison is always complete.

The recording and the daily clean-up run on the server's scheduler. If the line never appears on a channel that has been enabled for more than a day, ask whoever manages your server to check that the scheduler is running. A newly enabled channel has no history yet, and its first prices are recorded on the next scheduled run. See [Scheduled Tasks](../getting-started/scheduled-tasks.md).

## Differences in Bagisto 2.4

Bagisto 2.4 doesn't have Omnibus price disclosure.
