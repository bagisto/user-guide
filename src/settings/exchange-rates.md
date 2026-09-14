# Exchange Rates

Product prices are entered in your store's base currency. An exchange rate converts those prices into another [currency](./currencies.md), so shoppers who switch currency see correct prices.

For example, if your base currency is the US Dollar and the exchange rate for the Euro is `0.92`, a $100.00 product is shown as €92.00. Without an exchange rate, the price isn't converted, so the same product would be shown as €100.00.

## Create an exchange rate

1. Go to **Settings >> Exchange Rates**.
2. Click **Create Exchange Rate**.

   <ImagePopup src="/images/settings/exchange-rates.png" alt="Exchange Rates page with the Update Exchange Rate and Create Exchange Rate buttons" />

3. Check the **Source Currency**. It shows your base currency and can't be changed.
4. Choose the **Target Currency**.
5. Enter the **Rate**: what one unit of the base currency is worth in the target currency.
6. Click **Save Exchange Rate**.

   <ImagePopup src="/images/settings/create-exchange-rate.png" alt="Create Exchange Rate form converting US Dollars to Euros at a rate of 0.92" />

The message *Exchange Rate Created Successfully* appears and the rate is listed. Each currency can have one exchange rate, and the base currency doesn't need one.

## Update rates automatically

Instead of entering rates by hand, you can fetch the latest rates from an exchange rate service.

1. Choose the service and enter its API key under [Configure >> General >> Exchange Rates](../configure/exchange-rates-configurations.md).
2. Go to **Settings >> Exchange Rates**.
3. Click **Update Exchange Rate**.

Bagisto fetches the latest rate for each of your currencies and creates or updates its exchange rate. If the service can't be reached or the API key is wrong, an error message explains the problem.

To update the rates on a schedule instead, see [Schedule automatic updates](../configure/exchange-rates-configurations.md#schedule-automatic-updates).
