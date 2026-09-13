# Search Engines

Product search on the storefront and in the admin runs on the database by default. For a large catalog you can connect an Elasticsearch cluster and choose where it is used.

Go to **Configure >> Search Engines**. It is available from Bagisto 2.5; on Bagisto 2.4 the same choices are the **Search Engine**, **Admin Search Mode** and **Storefront Search Mode** settings in the **Search** section under **Configure >> Catalog >> Products**.

## General

<ImagePopup src="/images/configure/search-engines-general.png" alt="Search Engines General Settings" />

### Settings

**Enable External Search Engine:** Turn this on to use the engine chosen below. While it is off, every search runs on the database whatever the other settings say.

**Default Search Engine:** **Database** or **Elasticsearch**. This is the engine used wherever a search mode below is left on **Use Default**.

### Products

**Admin Search Mode:** The engine behind the header search, the listing grids and the other searches in the admin panel.

**Storefront Search Mode:** The engine behind category pages, the search page and the other searches on the storefront.

Each can be **Use Default**, **Database** or **Elasticsearch**, so you can, for example, keep the admin on the database while the storefront searches Elasticsearch.

Click **Save Configuration**.

## Elasticsearch

<ImagePopup src="/images/configure/search-engines-elastic.png" alt="Elasticsearch Settings" />

These settings are used only when a search mode is set to Elasticsearch.

**Authentication:** How the cluster is reached and signed in to. Only the fields the chosen method needs are shown:

- **No authentication** — only the **Hosts**.
- **Username and password** — **Hosts**, **Username** and **Password**.
- **API key** — **Hosts** and **API Key**.
- **Elastic Cloud with API key** — **Cloud ID** and **API Key**.
- **Elastic Cloud with username and password** — **Cloud ID**, **Username** and **Password**.

**Hosts:** Where the cluster is reached, such as `http://localhost:9200`. Separate several hosts with a comma. Leave it empty to use the value from the server's environment file.

**Index Prefix:** Added to the front of every index name, so several stores can share one cluster.

**Minimum Query Length** and **Maximum Query Length:** The shortest and longest search term the storefront search box accepts.

### Testing the connection

The **Connection** row has a **Test Connection** button. Click it after saving to check the cluster from the server's side. The result tells you whether the engine **is available**, **did not answer**, **rejected the credentials**, answered but **is not a supported Elasticsearch server**, or **is not configured**.

### Building the index

A cluster only returns products that have been indexed. After connecting it for the first time, ask whoever manages the server to run the product indexer for the search engine; it also runs on the queue whenever a product is saved, so the index keeps itself current afterwards.
