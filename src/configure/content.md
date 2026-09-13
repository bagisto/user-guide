# Content Configuration

The **Content** section allows you to customize frontend behavior, promotional banners, and control advanced features like speculation rules and custom scripts. These settings help optimize user experience and tailor the storefront according to specific business needs.

**Steps to Configure Content Settings**

To update the **Content** configuration in Bagisto:

1. Log in to the **Admin Panel**.
2. Navigate to **Configure >> General >> Content**.
3. You will find the following options to configure:

### Header Offer Title

Display a promotional banner on the storefront header.

- **Offer Title**  
  Example: `Get UPTO 40% OFF on your 1st order`

- **Redirection Title**  
  Example: `SHOP NOW`

- **Redirection Link**  
  Enter a valid URL (e.g., `/products/sale`)

<ImagePopup src="/images/configure/header.png" alt="Header Offer Title" />

### Speculation Rules

These rules improve perceived performance by prefetching or prerendering pages intelligently.

From **Bagisto v2.4.9**, speculation rules are **turned off by default**. They have the browser fetch pages nobody has opened yet, which costs bandwidth and shows up as traffic on pages that were never visited, so a store now opts in instead of opting out.

<ImagePopup src="/images/configure/contentspec-default.png" alt="Speculation Rules Disabled By Default" />

- **Enable Speculation Rules**  
  Toggle to enable the overall speculation logic. Disabled by default.

- **Enable Prerender Speculation Rules**  
  Enables prerendering based on user behavior predictions. Disabled by default.

The three fields below appear only once **Enable Prerender Speculation Rules** is turned on.

- **Ignore Prerender URLs**  
  Exclude specific routes from prerendering using pipe `|` as a separator.  
  Default: `/customer/account/*|/checkout/*`

- **Ignore Prerender URL Parameters**  
  Exclude certain URL parameters from prerender logic.  
  Example: `ref|token`

- **Prerender Eagerness Level**  
  Choose the intensity of prerendering:
  - `eager`: Max prerendering (more resources)
  - `moderate`: Default balance
  - `conservative`: Minimal prerendering

- **Enable Prefetch Speculation Rules**  
  Enables link prefetching to accelerate navigation. Disabled by default.

The three fields below appear only once **Enable Prefetch Speculation Rules** is turned on.

- **Ignore Prefetch URLs**  
  Exclude specific routes from prefetching using pipe `|` as a separator.  
  Default: `/customer/account/*|/checkout/*`

- **Ignore Prefetch URL Parameters**  
  Exclude certain URL parameters from prefetch logic.

- **Prefetch Eagerness Level**  
  Choose the intensity of prefetching, using the same `eager`, `moderate` and `conservative` levels as prerendering.

The image below shows the section with the toggles enabled and their dependent fields revealed.

<ImagePopup src="/images/configure/contentspec.png" alt="Speculation Rules" />

### Copyright Content

The copyright line in the storefront footer tells visitors that the content, design and images on the site are yours, and puts your brand name on every page.

The **Copyright Content** field takes the text shown in the footer. It is set per locale, so switch locale at the top of the page to translate it.

<ImagePopup src="/images/configure/copyright-content.png" alt="Copyright Content Field" />

Click **Save Configuration**, then open the storefront footer to see the line.

 <ImagePopup src="/images/configure/copyright-footer.png" alt="Copyright Line in the Storefront Footer" />

### Custom Scripts

Add your own scripts to enhance or integrate custom features.

- **Custom CSS**  
  Add global CSS to style your storefront.

- **Custom Javascript**  
  Insert scripts for chat widgets, analytics, or any custom interaction.

<ImagePopup src="/images/configure/custom.png" alt="Custom Scripts" />
