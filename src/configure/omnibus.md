# Omnibus Price Disclosure

The EU Omnibus Directive requires a store that announces a discount to show the lowest price it charged for that product in the 30 days before the discount. Bagisto can record product prices as they change and show that lowest price next to a discounted price on the storefront. This section is available in Bagisto 2.5.

## Turn on price disclosure

1. Go to **Configure >> Catalog >> Products**.
2. If your store has more than one channel, choose the channel at the top of the screen.
3. In **Omnibus Price Disclosure**, switch **Enable Omnibus Disclosure** on.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/products-omnibus.png" alt="Omnibus Price Disclosure section of the Products screen" />

The setting is per channel, so turn it on for each channel that sells to consumers in the EU.

## What the customer sees

When a product is sold below its regular price, through a special price, a catalog rule or a customer group price, the product page and listings show a line under the price:

**Lowest price 30 days prior to the discount:** followed by that price.

The line only appears when there is a discount and when there are recorded prices to compare against.

## Where the prices come from

Once the setting is on, the store records every product's price whenever it changes, checking every fifteen minutes, and keeps 35 days of history, so the 30-day comparison is always complete. Both the recording and the daily clean-up run on the server's scheduler, so if the line never appears on a store that has been enabled for more than a day, ask whoever manages the server to check that the scheduler is running.

A newly enabled store has no history yet. The first prices are recorded on the next scheduled run, and the lowest price shown grows more meaningful as the days accumulate.
