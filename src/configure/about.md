# About

The **About** screen shows what your store runs on and which services it uses. There is nothing to change here. Open it when support asks which version you are on, or to confirm that a setting made elsewhere has taken effect. The **About** group is available in Bagisto 2.5.

Go to **Configure >> About >> General**. The screen is grouped into cards:

- **Bagisto** – the Bagisto version.
- **Environment** – the application name, the Laravel, PHP and Composer versions, the store URL, the environment (**Local**, **Staging**, **Testing** or **Production**), whether **Debug Mode** is on, the timezone, the locale, and whether maintenance mode is on.
- **Database** – the database engine and its version.
- **Drivers** – the services that handle the cache, sessions, the queue and logging.
- **Mail** – the transport email is sent through, as set under [Email Settings](./email-settings.md).
- **Search** – the search engine in use, as set under [Search Engines](./search-engines.md).
- **Storage** – the storage in use and whether its public link exists, as set under [File Management](./file-management.md).
- **Cached** – whether the configuration, routes, events and views are cached. Clear or build them under [Cache Management](./cache-management.md).

If this screen shows **Debug Mode** on while the environment is **Production**, ask whoever manages the server to turn debug mode off, because it can show technical details to visitors when something goes wrong.
