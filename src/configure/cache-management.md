# Cache Management

Cache Management allows the Admin to clear and rebuild various system caches to ensure that both the storefront and admin panel display the most up-to-date information while maintaining optimal performance.

To manage cache settings, go to the Admin Panel and navigate to **Configure >> Cache Management**.

## Full Page Cache

Full Page Cache keeps a rendered copy of your storefront pages and serves that
copy to the next visitor, instead of building the page again for every one of
them. It is the setting that decides how quickly your storefront responds under
load, and it is now controlled from the admin rather than by editing the server
configuration.

Go to **Configure >> Cache Management >> Full Page Cache**.

<ImagePopup src="/images/configure/full-page-cache.png" alt="Full Page Cache settings" />

- **Enable Full Page Cache** — when on, storefront pages are served from the
  cache. Turning it off makes every page render again on each visit, which is
  slower for shoppers but useful while you are diagnosing a page that looks
  stale.
- **Cache Lifetime (Minutes)** — how long a cached page is kept before it is
  built again. Leave it empty to use the store's default.

Click **Save Configuration** to apply your changes.

### You do not have to clear it after an edit

A cached page is refreshed automatically when the content behind it changes.
Editing a category or a product clears the pages that show it — your home page
and category listings included — across every channel, locale and currency they
were cached under. Publishing a section does the same for the storefront it
belongs to.

So a lifetime is a backstop rather than the main mechanism. Set it long, and
trust the automatic refresh for day-to-day edits.

**Note:** A short lifetime is not a fix for a page that looks out of date. It
only shortens how long the wrong page is shown. If a change is not appearing at
all, clear the cache with the actions below and check the change was published.

## Cache Actions

The Cache Management section provides options to clear and rebuild different types of caches.

### Clear Cache Options

Use these actions to remove cached data and force the application to regenerate it on the next request.

- **Clear All Cache** – Clears all available caches.
- **Clear Config Cache** – Removes cached configuration data.
- **Clear Application Cache** – Clears the application cache.
- **Clear Compiled Cache** – Removes compiled classes and files.
- **Clear Event Cache** – Clears cached event discovery data.
- **Clear Route Cache** – Removes cached route definitions.
- **Clear View Cache** – Clears compiled Blade view files.

### Build Cache Options

Use these actions to pre-build caches and improve application performance.

- **Rebuild All Cache** – Rebuilds all supported caches.
- **Cache Config** – Generates configuration cache.
- **Cache Routes** – Generates route cache.
- **Cache Views** – Compiles and caches view files.

## How to Execute Cache Actions

**Step 1:** Navigate to **Configure >> Cache Management**.

**Step 2:** Click the desired cache action button under either **Clear Cache** or **Build Cache**.

**Step 3:** Review the execution results in the **Output Console** section.

**Step 4:** A success message and console output will be displayed once the operation is completed successfully.

<ImagePopup src="/images/configure/cache-manage.png" alt="Cache Management" />

## Important Notes

- Route caching will fail if any route file uses closures instead of controller references.
- Configuration caching will fail if any configuration file returns closures.
- File permission issues may prevent cache generation or cache clearing operations.

⚠️ **Note:** After clearing cache, the first few page loads may take slightly longer because the application needs to regenerate cached data. Rebuilding caches after deployment is recommended for better performance.
