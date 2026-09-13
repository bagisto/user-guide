# Payment Methods

Payment methods refer to the various options available for customers to make payments when purchasing a product or service. Common methods include cash, credit/debit cards, gift cards, and mobile payments.

To configure the default payment methods, go to the Admin Panel and navigate to **Configure >> Sales >> Payment Methods**.

### Stripe

**Stripe:** It is a safe and popular online payment system that helps businesses take payments using credit cards, debit cards, digital wallets, and other ways to pay.

It offers a smooth checkout process for customers and works with many currencies and international transactions.

With Stripe, you handle online payments, refunds, transactions and financial reports from one dashboard.

<ImagePopup src="/images/configure/stripe-admin.png" alt="Stripe" />

### Razorpay

Razorpay is a digital payment service through which businesses accept, process and manage online payments. It started in India in 2014.

Razorpay has grown to be one of the most reliable payment gateways for startups, small and medium enterprises, and big companies all over India.

The platform allows merchants to take payments in various ways like UPI, credit cards, debit cards, net banking, wallets, and EMI options, giving customers a quick and safe checkout experience.

<ImagePopup src="/images/configure/razorpay-admin.png" alt="Razorpay" />

### PayU

PayU allows businesses to handle transactions using various payment options like credit cards, debit cards, UPI, net banking, digital wallets, and EMI choices, making sure customers have a smooth and trustworthy checkout experience.

With simple integration, real-time tracking of transactions, strong fraud protection, and adaptable settlement cycles, PayU assists companies in effectively managing their online payments. 

Merchants can set up the gateway with their Merchant Key and Salt, check payment statuses from the admin panel, and start refunds when necessary.

<ImagePopup src="/images/configure/payu-admin.png" alt="PayU" />

### Paypal

**PayPal Smart Button:** Simplifies online payments with customizable buttons for secure, multi-method transactions on websites and apps.

<ImagePopup src="/images/configure/paypal.png" alt="Paypal" />

### PhonePe

PhonePe is an Indian digital payments platform supporting UPI, cards, wallets and
net banking. Customers are taken to PhonePe to pay and returned to the store once
the payment is confirmed.

Configure the following:

**1. Client ID** and **Client Secret:** Issued by PhonePe for your merchant account.
**2. Merchant ID:** Your PhonePe merchant identifier.
**3. Sandbox:** Enable while testing, disable to take live payments.

PhonePe settles only in **Indian Rupees**, so it is offered at checkout only when
the cart is in INR.

<ImagePopup src="/images/configure/phonepe-admin.png" alt="PhonePe" />

### PayGlocal

PayGlocal is a cross-border payment gateway. Customers pay on PayGlocal's hosted
checkout and return through a signed token; the outcome is confirmed with
PayGlocal before the order is placed, and a webhook settles the payment if the
customer never comes back.

Configure the following:

**1. Merchant ID:** Your PayGlocal merchant identifier.
**2. Public Key ID** and **Private Key ID:** The key identifiers issued to you.
**3. PayGlocal Public Key** and **Merchant Private Key:** The key pair used to sign
and verify requests.
**4. Accepted currencies:** The currencies this gateway may be used for. A cart in
any other currency will not be offered PayGlocal at checkout.
**5. Sandbox:** Enable while testing, disable to take live payments.

<ImagePopup src="/images/configure/payglocal-admin.png" alt="PayGlocal" />

### Cash On Delivery

A payment method where customers pay in cash upon receiving goods or services at their doorstep.

<ImagePopup src="/images/configure/cod.png" alt="Cash On Delivery" />

### Money Transfer

Transfer of funds from one person or account to another, often electronically, for transactions or remittances.

<ImagePopup src="/images/configure/money-transfer.png" alt="Money Transfer" />

### PayPal Standard

A basic PayPal payment option for online businesses, allowing customers to pay using PayPal accounts or credit/debit cards.

<ImagePopup src="/images/configure/paypal-standard.png" alt="Paypal Standard" />

After configuring, click the **Save Configuration** button.

### Payment Methods Frontend

This is how the payment methods will appear on the storefront during checkout.

<ImagePopup src="/images/configure/payment-method.png" alt="Payment Methods Frontend" />
