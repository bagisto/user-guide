# Exchange Rates

Bagisto can fetch current exchange rates from an exchange rate service, so prices shown in your other currencies stay correct without entering rates by hand. You can update the rates on demand or on a schedule.

Go to **Configure >> General >> Exchange Rates**.

## Connect an exchange rate service

Two services are supported. Sign up with one of them and copy your API key:

- **Exchange Rates API** ([exchangerate-api.com](https://www.exchangerate-api.com)) returns the rates for every currency in one request.
- **Fixer API** ([fixer.io](https://fixer.io)) is asked for one currency at a time.

1. In **General Settings**, choose the **Default Service**.
2. In the **Exchange Rates API** or **Fixer API** section, enter the **API Key** of that service.
3. Click **Save Configuration**.

<ImagePopup src="/images/configure/exchange-rates-settings.png" alt="Exchange Rates screen with the General Settings, Exchange Rates API and Fixer API sections" />

If the API key is left empty, the store uses the key set in the server's environment file, if there is one.

## Update the rates on a schedule

1. In **Scheduled Import**, switch **Enabled** on.
2. Choose the **Frequency**: **Daily**, **Weekly** (every Monday) or **Monthly** (on the first day of the month).
3. Enter the **Start Time (HH:MM)** in 24-hour format, such as `03:00`.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/exchange-rates-schedule.png" alt="Scheduled Import section set to update the rates daily at 03:00" />

Scheduled updates run on the server's task scheduler. If the rates don't update at the set time, ask whoever manages your server to check that the scheduler is running.

## Update the rates now

1. Go to **Settings >> Exchange Rates**.
2. Click **Update Exchange Rate**.

The rates are fetched from the default service straight away. You can also enter a rate by hand on the same page; see [Exchange Rates](../settings/exchange-rates.md).
