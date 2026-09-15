# Currencies

Add each currency you want to show prices in, then turn it on for the channels that should offer it. A currency's settings control how its prices look, for example `$1,234.50` or `1.234,50 €`.

Product prices are entered in your store's base currency, which is chosen when Bagisto is installed and can't be changed in the admin panel. To show correct prices in another currency, also add an [exchange rate](./exchange-rates.md) for it.

## Your currencies

Go to **Settings >> Currencies** to see every currency with its **ID**, **Name** and **Code**. Search by name or code, or use **Filter** to narrow the list.

<ImagePopup src="/images/settings/currencies.png" alt="Currencies grid listing the store's currencies with the Create Currency button" />

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
| **Symbol** | The symbol shown with prices, such as `$` or `KSh`. If you leave it empty, the usual symbol for the code is used, or the code itself when a **Currency Position** is chosen. |
| **Decimal** | How many digits to show after the decimal separator, from 0 to 9, such as `2`. |
| **Group Separator** | The character between groups of thousands, such as the comma in `1,000`. Use a comma, dot, apostrophe or space. |
| **Decimal Separator** | The character before the decimals, such as the dot in `10.50`. Use a comma or dot. |
| **Currency Position** | Where the symbol appears: **Left** (`$10`), **Left With Space** (`$ 10`), **Right** (`10$`) or **Right With Space** (`10 $`). |

### The format needs a position

**Decimal**, **Group Separator** and **Decimal Separator** are used only when you choose a **Currency Position**. If you leave the position unselected, prices follow the usual format of the language the shopper is browsing in, with your symbol.

## Offer the currency on a channel

1. Go to **Settings >> Channels**.
2. Click the edit icon of the channel.
3. In **Currencies and Locales**, select the currency under **Currencies**.
4. To show prices in it by default, choose it as the **Default Currency**.
5. Click **Save Channel**.

Shoppers can now choose the currency on that channel's storefront.

## Edit or delete a currency

To edit a currency:

1. Go to **Settings >> Currencies**.
2. Click the edit icon of the currency. The **Edit Currency** form opens.
3. Change the currency's details. The code can't be changed.
4. Click **Save Currency**.

The message *Currency updated successfully.* appears.

To remove a currency:

1. Go to **Settings >> Currencies**.
2. Click the delete icon of the currency.
3. Click **Agree** to confirm.

- A store must keep at least one currency.
- A currency that a channel uses as its **Default Currency** can't be deleted. Choose another default currency for the channel first.
- Deleting a currency also removes it from every channel that offers it, and deletes its exchange rate.
- Don't delete your store's base currency, because product prices are entered in it.
