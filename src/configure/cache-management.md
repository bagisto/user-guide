# Cache Management

Cache Management lets you clear and rebuild the caches the store keeps, so the storefront and the admin show up-to-date information without losing performance, and lets you switch the storefront's full page cache on or off.

Go to **Configure >> Cache Management**. It has two sections, **General** and **Full Page Cache**.

## General

### Cache Actions

<ImagePopup src="/images/configure/cache-manage.png" alt="Cache Management" />

Under **Clear Cache**, each button removes one kind of cached data so the store regenerates it on the next request:

- **Clear All Cache** – every cache below at once.
- **Clear Config Cache** – the cached configuration.
- **Clear Application Cache** – the application cache.
- **Clear Compiled Cache** – compiled classes and files.
- **Clear Event Cache** – cached event discovery data.
- **Clear Route Cache** – cached route definitions.
- **Clear View Cache** – compiled page templates.

Under **Build Cache**, each button pre-builds a cache so the store starts fast after a deployment:

- **Rebuild All Cache** – every cache below at once.
- **Cache Config** – the configuration.
- **Cache Routes** – the routes.
- **Cache Views** – the page templates.

**Step 1:** Click the button for the action you want.

**Step 2:** Read the result in the **Output Console** below the buttons. A success message and the command's output appear once it has finished.

### Important notes

- Route caching fails when a route is defined as a closure rather than a controller; the console output names the offending route.
- Configuration caching fails when a configuration file contains a closure.
- A file permission problem on the server stops both clearing and building.
- After clearing a cache, the first few page loads take slightly longer while the store rebuilds it. Rebuilding the caches after a deployment avoids that.

## Full Page Cache

The full page cache serves rendered storefront pages from a cache instead of building them for every visitor. The home page, category pages, product pages, search results and CMS pages are cached; the cart, checkout and account pages never are.

<ImagePopup src="/images/configure/full-page-cache.png" alt="Full Page Cache Settings" />

**Enable Full Page Cache:** Storefront pages are served from the cache. Turning this off makes every page render again on each visit.

**Cache Lifetime (Minutes):** How long a cached page is kept before it is rendered again. Leave it empty to use the application default.

**Flush Page Cache:** Empty the page cache so every storefront page is rendered again on its next visit. Use it after a change that the store does not refresh on its own, such as editing a template on the server.

Click **Save Configuration** after changing the switch or the lifetime; the flush button acts immediately.

### Pages refresh themselves

You do not normally need to flush by hand. Saving a product, category, review, CMS page, URL rewrite, channel, theme section or configuration clears the affected pages automatically, and so does an order, a refund or a price or catalog-rule reindex. Each currency and locale has its own copy of every page, so switching between them never shows a stale page.
