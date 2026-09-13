# About

The **About** screen shows what your store runs on and which services it uses. There is nothing to change here; it is the page to open when support asks which version you are on, or when you want to confirm that a setting made elsewhere has taken effect.

Go to **Configure >> About**. It is available on the current version of Bagisto.

<ImagePopup src="/images/configure/about.png" alt="About" />

The page is grouped into cards:

- **Bagisto** — the Bagisto version.
- **Environment** — the application name, the Laravel, PHP and Composer versions, the store URL, whether it is running as **Local**, **Staging**, **Testing** or **Production**, whether **Debug Mode** is on, the timezone and locale, and whether maintenance mode is active.
- **Database** — the engine in use, MySQL, MariaDB or PostgreSQL.
- **Drivers** — which services handle the cache, session, queue, log and broadcast.
- **Mail** — the transport mail leaves through, as set under **Configure >> Email**.
- **Search** — the search engine in use and its status, as set under **Configure >> Search Engines**.
- **Storage** — the default disk and its public link, as set under **Configure >> File Management**.
- **Cached** — whether the configuration, routes, events and views are currently cached. Rebuild or clear them from **Configure >> Cache Management**.

Debug mode on a production store exposes details to visitors when something goes wrong, so if this page shows **Debug Mode** on and the environment as **Production**, ask whoever manages the server to turn it off.
