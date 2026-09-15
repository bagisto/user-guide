# About

The **About** screen shows what your store runs on and which services it uses. There is nothing to change here, so the screen has no **Save Configuration** button. Open it when support asks which version you are on, or to confirm that a setting made elsewhere has taken effect.

Go to **Configure >> About >> General**. The information is grouped into cards in two columns.

The first column holds these cards:

- **Bagisto** – the **Version** of Bagisto your store runs.
- **Database** – the database **Engine** and its **Version**.
- **Search** – the search **Engine** in use, as set under [Search Engines](./search-engines.md). For Elasticsearch it also shows the **Version** and a **Status** with a green or red dot, as found by a **Test Connection** in the last five minutes. Otherwise **Version** shows **Not Available** and **Status** shows **Not Checked**.
- **Mail** – the **Transport** email is sent through, such as **SMTP** or **Brevo API**, as set under [Email Settings](./email-settings.md).
- **Storage** – whether the **Public Link** to uploaded files exists, and the storage **Driver**, as set under [File Management](./file-management.md). For Amazon S3 or Cloudflare R2 it also shows a **Status** with a green or red dot.
- **Cached** – whether the **Configuration**, **Events**, **Routes** and **Views** are cached. Clear or build them under [Cache Management](./cache-management.md).

The second column holds these cards:

- **Environment** – the **Application Name**, the **Laravel Version**, **PHP Version** and **Composer Version**, the **Environment** (**Local**, **Staging**, **Testing** or **Production**), whether **Debug Mode** is on, the store **URL**, whether **Maintenance Mode** is on, the **Timezone** and the **Locale**.
- **Drivers** – the services that handle the **Cache**, the **Log**, the **Queue** and the **Session**.

A value that isn't set up shows **Not Configured**.

If this screen shows **Debug Mode** on while the environment is **Production**, ask whoever manages the server to turn debug mode off, because it can show technical details to visitors when something goes wrong.

## Differences in Bagisto 2.4

Bagisto 2.4 has no **About** screen.
