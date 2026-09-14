# Cache Management

Cache Management lets you clear and rebuild the caches your store keeps, and switch the storefront's full page cache on or off. It has two screens, **General** and **Full Page Cache**.

## Clear or build caches

1. Go to **Configure >> Cache Management >> General**.
2. In **Cache Actions**, click the button for the action you want.
3. Read the result in the **Output Console** below the buttons.

<ImagePopup src="/images/configure/cache-management-actions.png" alt="Cache Actions section with the Clear Cache and Build Cache buttons and the Output Console" />

The buttons act straight away; there is nothing to save.

Under **Clear Cache**, each button removes one kind of cached data, so the store builds it again on the next request:

- **Clear All Cache** – every cache below at once.
- **Clear Config Cache** – the cached configuration.
- **Clear Application Cache** – the application cache.
- **Clear Compiled Cache** – compiled classes and files.
- **Clear Event Cache** – cached event data.
- **Clear Route Cache** – cached routes.
- **Clear View Cache** – compiled page templates.
- **Clear Page Cache** – the storefront's full page cache, the same as **Flush Page Cache** below.

Under **Build Cache**, each button builds a cache in advance, so the store starts fast after an update:

- **Rebuild All Cache** – every cache below at once.
- **Cache Config** – the configuration.
- **Cache Routes** – the routes.
- **Cache Views** – the page templates.

### Important notes

- Caching routes fails when a route is written as a closure rather than pointing to a controller. The output names the route.
- Caching the configuration fails when a configuration file contains a closure.
- A file permission problem on the server stops both clearing and building.
- After you clear a cache, the first few pages load a little more slowly while the store builds it again. Building the caches after an update avoids that.

## Full page cache

The full page cache keeps a rendered copy of your storefront pages and serves it to the next visitor, instead of building the page again for each one. It decides how quickly your storefront responds under load. The home page, category pages, product pages, search results and CMS pages are cached; the cart, checkout and account pages never are.

1. Go to **Configure >> Cache Management >> Full Page Cache**.
2. In **Settings**, switch **Enable Full Page Cache** on or off. It is on by default.
3. Enter the **Cache Lifetime (Minutes)**.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/full-page-cache.png" alt="Full Page Cache screen with the page cache turned on" />

**Enable Full Page Cache:** Serves storefront pages from the cache. Turning it off renders every page again on each visit, which is slower for shoppers but useful while you check a page that looks out of date.

**Cache Lifetime (Minutes):** How long a cached page is kept before it is rendered again. The default is `10080`, one week. Leave it empty to use the application default.

**Flush Page Cache:** Empties the page cache, so every storefront page is rendered again on its next visit. The button acts straight away. Use it after a change the store doesn't pick up on its own, such as a template edited on the server.

### You don't have to clear the cache after an edit

A cached page is refreshed automatically when the content behind it changes. Saving a product, category, review, CMS page, URL rewrite, channel, theme section or configuration clears the affected pages, and so do orders, refunds and price or catalog rule reindexing. Editing a product or a category also clears your home page and category listings, in every channel, language and currency. Each currency and language has its own copy of every page, so switching between them never shows an out-of-date page.

The lifetime is a backstop rather than the main mechanism, so set it long and let the automatic refresh handle day-to-day edits. A short lifetime doesn't fix a page that looks out of date, it only shortens how long the wrong page is shown. If a change doesn't appear at all, check that it was saved or published, then click **Flush Page Cache**.

## Differences in Bagisto 2.4

In Bagisto 2.4, **Cache Lifetime (Minutes)** has no preset value, so the application default is used until you enter one.
