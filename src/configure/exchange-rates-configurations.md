# Exchange Rates

Bagisto can fetch current exchange rates from an exchange rate service, so prices shown in your other currencies stay correct without entering rates by hand. You can update the rates on demand or on a schedule. Every setting on this screen applies to the whole store.

## General settings

1. Go to **Configure >> General >> Exchange Rates**.
2. In **General Settings**, choose the **Default Service**: **Exchange Rates API** (the default) or **Fixer API**.
3. Click **Save Configuration**.

The default service is the one used by scheduled updates and by the **Update Exchange Rate** button. Enter the API key of that service in its own section.

## Exchange Rates API

[ExchangeRate-API](https://www.exchangerate-api.com) returns the rates for all your currencies in one request. You need an API key from your ExchangeRate-API account.

1. Go to **Configure >> General >> Exchange Rates**.
2. In **Exchange Rates API**, enter the **API Key**.
3. Click **Save Configuration**.

## Fixer API

[Fixer](https://fixer.io) is asked for the rate of one currency at a time. You need an API key from your Fixer account.

1. Go to **Configure >> General >> Exchange Rates**.
2. In **Fixer API**, enter the **API Key**.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/exchange-rates-settings.png" alt="General Settings, Exchange Rates API and Fixer API sections with placeholder API keys" />

If an **API Key** is left empty, the store uses the key set for that service in the server's environment file, if there is one.

## Scheduled import

1. Go to **Configure >> General >> Exchange Rates**.
2. In **Scheduled Import**, switch **Enabled** on. **Frequency** and **Start Time (HH:MM)** appear.
3. Choose the **Frequency**: **Daily** (the default), **Weekly**, which runs on Mondays, or **Monthly**, which runs on the first day of the month.
4. Enter the **Start Time (HH:MM)** in 24-hour format, such as `03:00`. The default is `00:00`.
5. Click **Save Configuration**.

<ImagePopup src="/images/configure/exchange-rates-schedule.png" alt="Scheduled Import section switched on, updating the rates daily at 03:00" />

Scheduled updates run on the server's task scheduler. If the rates don't update at the set time, ask whoever manages your server to check that the scheduler is running. See [Scheduled Tasks](../getting-started/scheduled-tasks.md).

## Update the rates now

1. Go to **Settings >> Exchange Rates**.
2. Click **Update Exchange Rate**.

The rates are fetched from the default service straight away. You can also enter a rate by hand on the same page; see [Exchange Rates](../settings/exchange-rates.md).
