# Scheduled Tasks

Some of your store's work happens on a timetable or in the background, not at the moment you click a button. Catalog rule prices are refreshed every night, campaigns go out once a day, and emails can wait in a queue before they're sent. For this to work, the server your store runs on needs two things set up.

You don't set these up in the admin panel. Ask your developer or hosting provider to check both when the store goes live.

## What your server needs

- **The scheduler.** The server runs Bagisto's scheduler every minute, and the scheduler starts each task below at its time.
- **A queue worker, if the store uses a queue.** A store can hand slow work, such as sending emails, to a background queue so pages stay fast. When it does, a queue worker must keep running to process that work. When the store doesn't use a queue, this work happens straight away and no worker is needed.

## Tasks that run on a timetable

| What happens | When | Page |
|---|---|---|
| Catalog rule prices are recalculated, so rules start and stop on the right days | Every night, just after midnight | [Catalog Rules](../marketing/catalog-rules.md) |
| Product prices used for sorting and filtering are refreshed | Every night, just after midnight | [Catalog Rules](../marketing/catalog-rules.md) |
| Campaigns whose event date has arrived are sent | Once a day, at midnight | [Campaigns](../marketing/campaigns.md) |
| Reminder emails go out for overdue invoices | Once a day, at 3:00 | [Invoice Settings](../configure/invoice-settings.md) |
| Product prices are recorded for the lowest-price disclosure, and old records are cleared | Every 15 minutes, and a clean-up once a day | [Omnibus Price Disclosure](../configure/omnibus.md) |
| Exchange rates are updated from your rates provider | Only when **Scheduled Import** is switched on, daily, weekly or monthly at the time you choose | [Exchange Rates](../configure/exchange-rates-configurations.md) |

Times follow your store's time zone.

## Work that goes through the queue

When your store uses a queue, these wait for the queue worker:

- every email the store sends, including order, invoice, customer and campaign emails;
- updating the prices and stock that catalog rules and the storefront use after you save a product or a rule;
- indexing products for an external search engine such as Elasticsearch. See [Search Engines](../configure/search-engines.md);
- recording what shoppers search for. See [Search Terms](../marketing/search-terms.md);
- running imports. See [Data Transfer](../settings/data-transfer.md);
- building sitemap files. See [Sitemaps](../marketing/sitemaps.md);
- sending guests the link to their EU withdrawal request. See [EU Withdrawal](../orders/eu-withdrawal.md).

## Signs that something isn't running

| What you notice | What's probably not running |
|---|---|
| Emails arrive late or not at all | The queue worker |
| A catalog rule's discount doesn't appear or doesn't end on time | The scheduler |
| A campaign never goes out | The scheduler, and the queue worker if the store uses a queue |
| A sitemap file isn't created after you save it | The queue worker |
| An import stays at the same step | The queue worker |
| Exchange rates stay the same after their scheduled time | The scheduler |

If you notice any of these, ask your developer or hosting provider to check that the scheduler runs every minute and that the queue worker is running.
