# Exchange Rates

Bagisto can refresh your currency exchange rates automatically from an external rate service, so the prices shown in each currency stay correct without anyone typing rates in by hand.

Go to **Configure >> General >> Exchange Rates**.

<ImagePopup src="/images/configure/exchange-rates-configurations.png" alt="Exchange Rates configuration" />

## Choose a rate service

Two services are supported. Sign up with the one you prefer and copy its API key:

- **Exchange Rates API** ([exchangerate-api.com](https://www.exchangerate-api.com)) fetches every currency in one call; the free plan allows 1,500 requests a month.
- **Fixer API** ([fixer.io](https://fixer.io)) fetches rates per currency pair; the free plan allows 100 requests a month.

## Enter the credentials

1. In **General Settings**, choose the **Default Service** the store uses.
2. In the **Exchange Rates API** or **Fixer API** section, paste the **API Key** for that service.
3. Click **Save Configuration**.

If no key is entered here, the store uses the key whoever manages the server has placed in its environment settings, so a key can be kept out of the admin entirely.

## Schedule automatic updates

1. In the **Scheduled Import** section, switch **Enabled** on.
2. Choose the **Frequency**: daily, weekly (every Monday) or monthly (on the first day of the month).
3. Enter the **Start Time (HH:MM)** the update runs at, in 24-hour format, for example `03:00`.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/schedule.png" alt="Scheduled Import settings" />

Scheduled updates run on the server's task scheduler. If the rates do not refresh at the set time, ask whoever manages the server to check that the scheduler is running.

<ImagePopup src="/images/configure/terminial-cron.png" alt="Scheduler output on the server" />

## Update the rates by hand

1. Go to **Settings >> Exchange Rates**.
2. Click **Update Exchange Rate**.

The rates are fetched from the default service at once. Rates can also be edited one by one on the same page; see [Exchange Rates](../settings/exchange-rates.md).
