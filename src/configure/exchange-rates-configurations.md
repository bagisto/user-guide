# Exchange Rates Configuration

Bagisto Exchange Rates lets you automatically refresh currency exchange rates by using outside API services.

In the admin panel, you can quickly input API credentials, choose your favorite service provider, and arrange a timetable for automatic updates.

This makes sure your store’s currency rates are correct without needing to do it by hand.

To set up exchange rates, navigate to **Configure >> General >> Exchange Rates**, as illustrated in the image below.

  <ImagePopup src="/images/configure/exchange-rates-configurations.png" alt="Exchange Rates Configuration" />

### Exchange Rates Configurations

Below are the detailed steps of the exchange rates configurations.

**1) General Settings**

In this part, you can pick the default exchange rate service that Bagisto will use.

You can choose between Exchange Rates API and Fixer API, based on what you like and what you need.

**2) Fixer API**

Here, you have to put in the API key you got from fixer.io.

Fixer gives you both real-time and past exchange rate information. It also has a free plan, but you can only make a limited number of API requests.

**3) Exchange Rates API**

In this section, you need to enter your API key from exchangerate-api.com. This service offers real-time exchange rates for over 160 currencies.

The free plan lets you make up to 1,500 requests each month, which is good for most small to medium-sized stores.

**4) Scheduled Import**

You can turn on scheduled updates to automatically refresh exchange rates at set times.

Once you turn it on, you can pick how often to update — daily, weekly (every Monday), or monthly (on the 1st day of the month).

You can easily add this from the settings as shown below.

<ImagePopup src="/images/configure/schedule.png" alt="Exchange Rates Configurations" />

You have to set the start time using the **24-hour format**, like this: 03:00.

Scheduled updates run on the server's task scheduler. If the rates do not refresh at the set time, ask whoever manages the server to check that the scheduler is running.

<ImagePopup src="/images/configure/terminial-cron.png" alt="Exchange Rates Configurations" />

### Keys kept on the server

If no key is entered in the admin panel, Bagisto uses the key whoever manages the server has placed in its environment settings, so a key can be kept out of the admin entirely.

### Manual Update

Besides automatic updates, you can also refresh exchange rates by hand.

To do this, go to the admin panel, then click on **Settings >> Exchange Rates** and hit the **Update Exchange Rate** button.

### Exchange Rates API (exchangerate-api.com):

- Endpoint Example: **v6.exchangerate-api.com/v6/{API_KEY}/latest/{BASE}**

- Fetches all currency rates in a single API call

- Free tier: 1,500 requests/month

- Sign up: [https://www.exchangerate-api.com](https://www.exchangerate-api.com)

### Supported Services

Bagisto Exchange Rates API (exchangerate-api.com)

This tool gets all the currency exchange rates with just one API call. You can make 1,500 free requests every month.

### Fixer API (fixer.io)

- Endpoint: http://data.fixer.io/api/{date}

- Fetches rates per currency pair

- Free tier: 100 requests/month

- Sign up: [https://fixer.io](https://fixer.io)