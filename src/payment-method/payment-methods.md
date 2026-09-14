# Payment Methods

Payment methods are the ways shoppers can pay at checkout. Bagisto comes with nine, listed here in the order they appear on the configuration screen: **Stripe**, **Razorpay**, **PayU**, **PhonePe**, **PayPal**, **PayPal Standard**, **PayGlocal**, **Cash On Delivery** and **Money Transfer**.

## Offer a payment method

1. Go to **Configure >> Sales >> Payment Methods**.
2. In the section of the method you want to offer, switch **Status** on. The method's other settings appear.
3. Enter the **Title** shoppers see at checkout.
4. Optionally, enter a **Description** and add a **Logo**.
5. Enter the settings of that method, described below.
6. Enter the **Sort Order**.
7. Click **Save Configuration**.

To stop offering a method, switch its **Status** off and save. All settings are set per channel, and the title and description are also set per language.

## Settings every method has

| Setting | What it does |
|---|---|
| **Status** | Offers the method at checkout. The method's other settings appear only while it is on. |
| **Title** | The name of the method at checkout. Required while **Status** is on. |
| **Description** | A short line shown with the method at checkout. |
| **Logo** | The image shown with the method at checkout. A size of 55 × 45 px is recommended. |
| **Sort Order** | The position of the method at checkout. Methods with a lower number come first. Required while **Status** is on. |

The online payment gateways also have a **Sandbox** switch. While it is on, payments go to the gateway's test environment and no real money is taken. Switch it off when you are ready to take real payments.

## Stripe

Stripe takes card payments.

<ImagePopup src="/images/configure/payment-stripe.png" alt="Stripe section with Status turned on" />

| Setting | What it does |
|---|---|
| **API Key** and **API Publishable Key** | The live secret key and publishable key from your Stripe account, used while **Sandbox** is off. |
| **Sandbox** | Uses your test keys, so no real payments are taken. |
| **API Test Secret Key** and **API Test Publishable Key** | The test keys from your Stripe account, used while **Sandbox** is on. |

## Razorpay

Razorpay is an Indian payment gateway that takes payments in Indian rupees (INR).

<ImagePopup src="/images/configure/payment-razorpay.png" alt="Razorpay section with Status turned on" />

| Setting | What it does |
|---|---|
| **Merchant Name** and **Merchant Description** | Your business name and a short description, in up to 200 characters each. |
| **Client ID** and **Client Secret** | Your live API keys from Razorpay, used while **Sandbox** is off. |
| **Sandbox** | Uses your test keys, so no real payments are taken. |
| **Test Mode Client ID** and **Test Mode Client Secret** | Your test API keys from Razorpay, used while **Sandbox** is on. |

## PayU

PayU is a payment gateway that takes payments in Indian rupees (INR).

<ImagePopup src="/images/configure/payment-payu.png" alt="PayU section with Status turned on" />

| Setting | What it does |
|---|---|
| **Merchant Key** and **Merchant Salt** | The merchant key and salt from your PayU dashboard. |
| **Sandbox** | Sends payments to PayU's test environment. |

## PhonePe

PhonePe is an Indian payments platform that takes payments in Indian rupees (INR). Customers are taken to PhonePe to pay, and return to the store once the payment is confirmed.

<ImagePopup src="/images/configure/payment-phonepe.png" alt="PhonePe section with Status turned on" />

| Setting | What it does |
|---|---|
| **Client ID**, **Client Secret** and **Merchant ID** | The credentials from your PhonePe dashboard. All three are required while **Status** is on. |
| **Sandbox** | Sends payments to PhonePe's test environment. |

## PayPal

PayPal shows PayPal's own buttons at checkout, so customers can pay with their PayPal account or a card without leaving the store.

<ImagePopup src="/images/configure/payment-paypal.png" alt="PayPal section with Status turned on" />

| Setting | What it does |
|---|---|
| **Client ID** and **Client Secret** | The client ID and secret of your PayPal app. While **Sandbox** is on, use the client ID of your sandbox app. |
| **Accepted currencies** | The currency codes your PayPal account accepts, separated by commas, such as `USD,EUR`. If the shopper's currency isn't in the list, the payment is made in the first currency listed. |
| **Sandbox** | Sends payments to PayPal's sandbox, so no real payments are taken. |

## PayPal Standard

PayPal Standard sends customers to PayPal to pay with their PayPal account or a card, and returns them to the store afterwards.

<ImagePopup src="/images/configure/payment-paypal-standard.png" alt="PayPal Standard section with Status turned on" />

| Setting | What it does |
|---|---|
| **Business Account** | The email address of your PayPal business account. Required while **Status** is on. |
| **Sandbox** | Sends payments to PayPal's sandbox, so no real payments are taken. |

## PayGlocal

PayGlocal takes cross-border payments. Customers pay on PayGlocal's checkout page and return to the store once the payment is confirmed. The link in the section's description takes you to PayGlocal to sign up and get your credentials.

<ImagePopup src="/images/configure/payment-payglocal.png" alt="PayGlocal section with Status turned on" />

| Setting | What it does |
|---|---|
| **Merchant ID** | Your merchant ID, found under **My Account** in the PayGlocal dashboard. |
| **Public Key ID** and **Private Key ID** | The IDs of the PayGlocal public key and of your private key, shown in the PayGlocal dashboard. |
| **PayGlocal Public Key** | The contents of the PayGlocal public key file. |
| **Merchant Private Key** | The contents of the private key file you generated in the PayGlocal dashboard. |
| **Accepted currencies** | The currency codes your PayGlocal account accepts, separated by commas, such as `USD,INR`. PayGlocal is used only for these currencies. Required while **Status** is on. |
| **Sandbox** | Sends payments to PayGlocal's test environment. |

## Cash On Delivery

Cash On Delivery lets customers pay in cash when the order is delivered.

<ImagePopup src="/images/configure/payment-cash-on-delivery.png" alt="Cash On Delivery section with Status turned on" />

| Setting | What it does |
|---|---|
| **Instructions** | Instructions for the customer, such as having the exact amount ready. They are included in the order emails and on the invoice PDF. |
| **Automatically generate the invoice after placing an order** | Creates the invoice as soon as the order is placed. |
| **Set the invoice status after creating the invoice to** | **Pending** or **Paid**. Used only when the invoice is generated automatically. |
| **Set the order status after creating the invoice to** | **Pending**, **Pending Payment** or **Processing**. Used only when the invoice is generated automatically. |

## Money Transfer

Money Transfer lets customers pay by bank transfer or cheque.

<ImagePopup src="/images/configure/payment-money-transfer.png" alt="Money Transfer section with Status turned on" />

| Setting | What it does |
|---|---|
| **Automatically generate the invoice after placing an order** | Creates the invoice as soon as the order is placed. |
| **Set the invoice status after creating the invoice to** | **Pending** or **Paid**. Used only when the invoice is generated automatically. |
| **Set the order status after creating the invoice to** | **Pending**, **Pending Payment** or **Processing**. Used only when the invoice is generated automatically. |
| **Send Check to** | The name and address customers send their payment to. It is included in the order emails and on the invoice PDF. |
