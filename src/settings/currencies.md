# Currencies

Add each currency you want to show prices in, then turn it on for the channels that should offer it. A currency's settings control how its prices look, for example `$1,234.50` or `1.234,50 €`.

Product prices are entered in your store's base currency, which is chosen when Bagisto is installed. To show correct prices in another currency, also add an [exchange rate](./exchange-rates.md) for it.

## Create a currency

1. Go to **Settings >> Currencies**.
2. Click **Create Currency**. The **Create New Currency** form opens.
3. Enter the **Code** and **Name**, such as `KES` and **Kenyan Shilling**.
4. Enter the **Symbol**, such as `KSh`.
5. Enter the **Decimal**, **Group Separator** and **Decimal Separator**.
6. Choose the **Currency Position**.
7. Click **Save Currency**.

   <ImagePopup src="/images/settings/create-currency.png" alt="Create New Currency form for the Kenyan Shilling" />

The message *Currency created successfully.* appears and the currency is added to the list.

| Field | What to enter |
|---|---|
| **Code** | The three-letter currency code, such as `USD`, `EUR` or `KES`. Each code can be used only once, and you can't change it later. |
| **Name** | The name of the currency. |
| **Symbol** | The symbol shown with prices, such as `$` or `KSh`. |
| **Decimal** | How many digits to show after the decimal separator, such as `2`. |
| **Group Separator** | The character between groups of thousands, such as the comma in `1,000`. Use a comma, dot, apostrophe or space. |
| **Decimal Separator** | The character before the decimals, such as the dot in `10.50`. Use a comma or dot. |
| **Currency Position** | Where the symbol appears: **Left** (`$10`), **Left With Space** (`$ 10`), **Right** (`10$`) or **Right With Space** (`10 $`). |

## Offer the currency on a channel

1. Go to **Settings >> Channels** and click the edit icon of the channel.
2. In **Currencies and Locales**, select the currency under **Currencies**.
3. To show prices in it by default, choose it as the **Default Currency**.
4. Click **Save Channel**.

Shoppers can now choose the currency on that channel's storefront.

## Edit or delete a currency

On **Settings >> Currencies**, click the edit icon of a currency to change it, or the delete icon to remove it. A store must keep at least one currency.
