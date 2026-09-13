# Booking products

With the help of booking products, customers can purchase and book everything online, including Appointments, Events, Rentals, and table booking.

With this product type, the admin can manage all necessary details of the booking product, such as date available, slot period, stock value, price settings, and much more.

So let’s get started with how to create booking products in Bagisto.

## Creating a booking product

1. Go to **Catalog >> Products**.
2. Click **Create Product**.
3. Select **Booking** under **Type**.

   <ImagePopup src="/images/booking-product/1.png" alt="Create Booking Products" />

4. Select the **Family**.
5. Enter the **SKU**.
6. Click **Save Product**. You are redirected to the edit product page, where you find several new settings.

Fill in the following fields on the edit product page:

- **Name:** Enter the name of the product.

- **URL Key:** This will be the end of the URL, for example, "products/set-of-men-casual-wear" (set-of-men-casual-wear is a URL key)

- **Tax Category:** You can select the Tax Category from the drop-down list that you want to apply to the product.

- **Product Number:** Enter the product number

- **Price:** Insert the price, cost, and special price, and set the special price date for which the special price will be shown on the website.

<ImagePopup src="/images/booking-product/2.png" alt="Booking Product General Fields" />

### Toggle Button

**New**

Enable the toggle button if you want to feature the product as a new product. The resulting product will be shown under the New Products section.

**Featured**

Enable the toggle button to show the product under the Featured Products section.

**Visible Individually**

Enable the toggle button to make the product visible on the front end.

**Status**

Enable the toggle button to enable the product on your eCommerce store.

**Guest Checkout**

Enable the toggle button to allow the product to be ordered by guest customers.

<ImagePopup src="/images/booking-product/3.png" alt="Toggle Button" />

### Short Description

Enter a short description of the features of the product.

### Description

Mention your product in detail.

<ImagePopup src="/images/booking-product/4.png" alt="Description" />

### Meta Title

Provide the main title of the product by which your product will be known.

### Meta Keywords

The meta keywords for the product need to be provided to improve its searchability on the search engine for specific keywords.

### Meta Description

Enter the description so that products can appear in search engine listings.

<ImagePopup src="/images/booking-product/5.png" alt="Meta Description" />

### Images

To add the product images, click on **Add Image**. You can add multiple images for your product.

<ImagePopup src="/images/booking-product/6.png" alt="Images" />

## Booking information

The **Booking Type** box holds the settings specific to booking products. Select the booking **Type** as per choice. There are 5 types of booking products. Let’s discuss “How to create Booking Products in Bagisto” one by one.

- **Default Booking**
- **Appointment Booking**
- **Event Booking**
- **Rental Booking**
- **Table Booking**

**Allow Booking Cancellation:** Inside the **Booking Type** box, set this to **Yes** to allow the customer to cancel the booking from their account, or **No** to prevent it. The admin can still cancel the order either way.

### Default booking

The admin can create a Default booking product as shown below in the screenshot. In default booking products, the **Booking Information** select offers two types.

<ImagePopup src="/images/booking-product/7.png" alt="Default Booking Product" />

- **One Booking For Many Days**
- **Many Bookings For One Days**

#### Many bookings for one day

To create many bookings for one day, configure the below booking detail.

- **Location:** Enter the location for booking products.

- **Qty:** Enter the quantity of booking products. This is the global quantity for each slot.

- **Available From:** Select the start date for the booking.

- **Available To:** Select the end date for the booking.

- **Booking Information:** Select **Many Bookings For One Days**.

- **Slot Duration (Mins):** Set slot duration in a minute. By default, it is 45 min.

- **Break Time b/w Slots (Mins):** Set the break time between slots in min. By default, it is 15 min.

<ImagePopup src="/images/booking-product/8.png" alt="Many Bookings For One Day Fields" />

#### Adding slots for a day

The **Slots Time Duration** box lists the days of the week. Each day has its own **Add** link, which changes to **Edit** once the day has slots.

1. Click **Add** on the day you want to open.
2. Enter the **From** and **To** time of the slot.
3. Set the slot **Status**.
4. Click **Save**.

   <ImagePopup src="/images/booking-product/9.png" alt="Add Slots" />

Slots have been added for Sunday in the below image.

<ImagePopup src="/images/booking-product/10.png" alt="Slots Added For Sunday" />

Once the slots are in place, click **Save Product**.

#### What the shopper sees for many bookings for one day

On the storefront the shopper picks the **date** of the booking, then the **slot** they want. The venue's location is shown as text beneath the calendar, with a **View on Map** link that opens the location in a map.

<ImagePopup src="/images/booking-product/11.png" alt="Front End" />

#### One booking for many days

To create one booking for many days, set **Booking Information** to **One Booking For Many Days**. This type also shows the **Allow Overlapping Time Slots** select: set it to **Yes** to allow overlapping time slots, or **No** to prevent them.

Click **Add Slots** and configure the below booking detail.

- **From Day:** Select the From day for the booking.

- **To Day:** Select the To day for the booking.

- **From Time:** Select the From time of the booking.

- **To Time:** Select the To time of the booking.

<ImagePopup src="/images/booking-product/12.png" alt="One Booking For Many Days" />

Slot Duration is booked for One booking for many days as shown in the below image.

<ImagePopup src="/images/booking-product/13.png" alt="One Booking For Many Days Slot Duration" />

#### What the shopper sees for one booking for many days

On the storefront the shopper picks the **date** of the booking, then the **slot** they want. The venue's location is shown as text beneath the calendar, with a **View on Map** link that opens the location in a map.

<ImagePopup src="/images/booking-product/14.png" alt="Front End" />

### Appointment booking

The admin can create an **Appointment** booking product as shown below in the screenshot. Here Admin has to select the **Appointment Booking** type.

<ImagePopup src="/images/booking-product/15.png" alt="Appointment Booking" />

- **Location:** Enter the location for Appointment booking products.

- **Qty:** Enter the quantity of booking products. This is the global quantity for each slot.

- **Available Every Week:** Set “Yes” to configure time slots for all days of the week. If you don’t want to configure the time slots for all the days of the week set “No“. And configure the start date and end date.

- **Slot Duration (Mins):** Set slot duration in a minute. By default, it is 45 min.

- **Break Time b/w Slots (Mins):** Set the break time between slots in min. By default, it is 15 min.

- **Allow Overlapping Time Slots:** Set "Yes" to allow overlapping time slots. Set "No" to prevent overlapping slots.

- **Same Slot For All days:** Set “Yes” for the same slot for all the days add from and to timings check the below image for reference.

<ImagePopup src="/images/booking-product/16.png" alt="Appointment Booking Same Slot All Days" />

Else set **“No”** for the different slots for each day add from and to timings according to the days check the below image for reference.

<ImagePopup src="/images/booking-product/17.png" alt="Appointment Booking Different Slots Per Day" />

#### What the shopper sees for an appointment

<ImagePopup src="/images/booking-product/18.png" alt="Front End" />

### Event booking

The Admin can create an Event booking product as shown below in the screenshot. Here Admin has to select the **Event Booking** type.

- **Location:** Enter the location for Event booking products.

- **Available From:** Select the start date of the booking.

- **Available To:** Select the end date for the booking.

<ImagePopup src="/images/booking-product/19.png" alt="Event Booking" />

**Tickets**

Add ticket details by clicking the **Add Tickets** button. Each ticket has the following fields:

- **Name:** Enter the name of the ticket (e.g., General, VIP).

- **Quantity:** Enter the number of tickets available.

- **Price:** Set the base price for the ticket type.

- **Special Price:** Set a discounted price for the ticket (optional).

- **Valid From** and **Valid Until:** Define the date range during which the special price is valid (optional).

- **Description:** Provide a description of the ticket type.

<ImagePopup src="/images/booking-product/20.png" alt="Event Booking Tickets" />

#### What the shopper sees for an event

On the front end, you have to select the ticket quantity. This base price will be applied to each type of ticket for each quantity.

<ImagePopup src="/images/booking-product/21.png" alt="Front End" />

### Rental booking

The Admin can create a **Rental booking** product as shown below in the screenshot. Here Admin has to select the **Rental Booking** type.

- **Location:** Enter the location for Rental booking products.

- **Qty:** Enter the quantity of booking products. This is the global quantity for each slot.

- **Available Every Week:** Set **“Yes”** to configure time slots for all days of the week.

If you don’t want to configure the time slots for all the days of the week set **“No“**

<ImagePopup src="/images/booking-product/22.png" alt="Rental Booking" />

**Renting Type:** There are three Renting Types

**a) Daily Basis:** If you have selected the “Renting Type” as a Daily Basis, set the per day rent and then click **Save Product**.

<ImagePopup src="/images/booking-product/23.png" alt="Rental Booking Daily Basis" />

**b) Hourly Basis:** If you have selected the “Renting Type” as Hourly Basis, configure the below booking detail.

<ImagePopup src="/images/booking-product/24.png" alt="Rental Booking Hourly Basis" />

**c) Both (Daily and Hourly Basis):** If you have selected the “Renting Type” as **Both (Daily and Hourly Basis)**, configure the details as above, such as the daily price, the hourly price and the same slot on all days, and then click **Save Product**.

<ImagePopup src="/images/booking-product/25.png" alt="Rental Booking Daily and Hourly Basis" />

#### What the shopper sees for a rental

Here customer has to select the option to choose the Rent option either Daily Basis or Hourly Basis (if this is already configured in the backend).

<ImagePopup src="/images/booking-product/26.png" alt="Front End" />

### Table booking

The admin can create a Table booking product as shown below in the screenshot. Here Admin has to select the **Table Booking** type.

<ImagePopup src="/images/booking-product/27.png" alt="Table Booking" />

**Now configure the below Table booking detail.**

- **Location:** Enter the location for Table booking products.

- **Available Every Week:** Set “Yes” for configure time slots for all days of the week. If you don’t want to configure the time slots for all the days of the week set “No“. And configure the start date and end date.

- **Charged Per:** You can charge a basis like per table or per guest. When you select per table then you have to enter Guest Limit Per Table. So that you can charge per table(2 guests) below screenshot.

- **Guest Capacity:** Set the maximum number of guests the table can be booked for.

- **Slot Duration (Mins):** Set slot duration in minutes. By default, it is 45 min.

- **Break Time b/w Slots (Mins):** Set the break time between slots in min. By default, it is 15 min.

- **Prevent Scheduling Before:** the minutes to advance booking means that before the start time of the slot.

- **Allow Overlapping Time Slots:** Set "Yes" to allow overlapping time slots. Set "No" to prevent overlapping slots.

- **Same Slot For All days:** Set “Yes” for the same slot for all the days.

<ImagePopup src="/images/booking-product/28.png" alt="Table Booking Same Slot All Days" />

Else set **“No”** for the different slots for each day.

<ImagePopup src="/images/booking-product/29.png" alt="Table Booking Different Slots Per Day" />

#### What the shopper sees for a table booking

Here customer has to select the date and time and add a note for admin.

<ImagePopup src="/images/booking-product/30.png" alt="Front End" />

## Managing bookings in the admin

After an order is placed, you can review the booking from the admin panel.

1. Log in to the admin panel.
2. Go to **Sales >> Bookings**. The page opens in the calendar view, with the ordered slot marked on the calendar.
3. To switch to the list view, click the list icon at the top right of the page, as shown in the image below.

   <ImagePopup src="/images/booking-product/31.png" alt="Admin Panel" />

### Calendar view

The ordered slot is booked in the calendar view as shown in the below image. Click the calendar icon to return to it from the list view.

<ImagePopup src="/images/booking-product/32.png" alt="Calendar View" />

That’s all about Booking Products in bagisto.
