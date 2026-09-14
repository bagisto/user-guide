# Content

The **Content** screen holds the promotional line at the top of the storefront, the copyright line in its footer, the speculation rules that make pages open faster, and your own CSS and JavaScript.

Go to **Configure >> General >> Content**.

## Header offer title

The header offer is a short promotional line with a link, shown in the bar at the top of every storefront page.

1. In **Header Offer Title**, enter the **Offer Title**, such as `Get UPTO 40% OFF on your 1st order`. It can be up to 100 characters.
2. Enter the **Redirection Title**, the link text shown after the offer, such as `SHOP NOW`. It can be up to 25 characters.
3. Enter the **Redirection Link**, the page the link opens, such as `/womens`. If you leave it empty, the link opens the home page.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/content-header-offer.png" alt="Header Offer Title and Copyright Content sections of the Content screen" />

<ImagePopup src="/images/configure/content-header-offer-storefront.png" alt="Header offer line in the top bar of the storefront" />

## Copyright content

The copyright line is shown at the bottom of the storefront footer.

1. In **Copyright Content**, enter the text, such as `© 2026 Example Store. All rights reserved.`
2. Click **Save Configuration**.

The copyright line is set per language, so choose the language at the top of the screen to translate it. If you leave it empty, the storefront shows its default copyright line.

<ImagePopup src="/images/configure/content-copyright-storefront.png" alt="Copyright line at the bottom of the storefront footer" />

## Speculation rules

Speculation rules let a shopper's browser load a page before the shopper opens it, such as a link they are about to click, so the page appears almost instantly. They are off by default, because loading pages in advance uses bandwidth and shows up as visits to pages that were never opened.

1. In **Speculation Rules**, switch **Enable Speculation Rules** on.
2. Switch on **Enable Prerender Speculation Rules**, **Enable Prefetch Speculation Rules**, or both. The settings for each appear below its switch.
3. Adjust the settings described below.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/content-speculation-rules.png" alt="Speculation Rules section with prerender and prefetch turned on" />

**Enable Prerender Speculation Rules:** Prerendering loads and displays the whole page in the background, so it appears instantly. It uses the most resources.

**Enable Prefetch Speculation Rules:** Prefetching downloads the page in advance without displaying it. It uses fewer resources than prerendering.

**Ignore Prerender URLs** and **Ignore Prefetch URLs:** Pages that are never loaded in advance, separated by a pipe (`|`). The default, `/customer/account/*|/checkout/*`, leaves out the customer account and checkout pages.

**Ignore Prerender URL Parameters** and **Ignore Prefetch URL Parameters:** URL parameters to ignore, separated by a pipe (`|`), such as `ref|utm_source`.

**Prerender Eagerness Level** and **Prefetch Eagerness Level:** How eagerly pages are loaded in advance. **Eager** loads the most, **Moderate** is the default, and **Conservative** loads the least.

## Custom scripts

Custom scripts add your own CSS and JavaScript to every storefront page of a channel without changing the theme, for example a color change, a chat widget or an analytics snippet.

1. In **Custom Scripts**, enter your styles in **Custom CSS**. Don't include `<style>` tags; the store adds them.
2. Enter your script in **Custom Javascript**. Don't include `<script>` tags; the store adds them.
3. Click **Save Configuration**.
4. Reload the storefront to check the result.

<ImagePopup src="/images/configure/content-custom-scripts.png" alt="Custom Scripts section with sample CSS and JavaScript" />

Both fields are set per channel. A script with an error can break every storefront page, so test it on a staging store first if you have one.
