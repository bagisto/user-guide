# Search Engines

Product search on the storefront and in the admin panel runs on the database by default. For a large catalog, you can connect an Elasticsearch cluster and choose where it is used. The **Search Engines** group is available in Bagisto 2.5.

## Choose the search engine

1. Go to **Configure >> Search Engines >> General**.
2. In **Settings**, switch **Enable External Search Engine** on. **Default Search Engine** appears.
3. Choose the **Default Search Engine**: **Database** or **Elasticsearch**.
4. In **Products**, choose the **Admin Search Mode**.
5. Choose the **Storefront Search Mode**.
6. Click **Save Configuration**.

<ImagePopup src="/images/configure/search-engines-general.png" alt="General screen of the Search Engines group with the external search engine turned on" />

**Enable External Search Engine:** While it is off, every search runs on the database, whatever the other settings say. It is off by default.

**Default Search Engine:** The engine used wherever a search mode is left on **Use Default**.

**Admin Search Mode:** The engine behind the header search, the data grids and the other searches in the admin panel.

**Storefront Search Mode:** The engine behind category pages, the search page and the other searches on the storefront.

Each search mode can be **Use Default**, **Database** or **Elasticsearch**, so you can, for example, keep the admin panel on the database while the storefront uses Elasticsearch.

## Connect Elasticsearch

1. Go to **Configure >> Search Engines >> Elasticsearch**.
2. In **Settings**, choose the **Authentication**. Only the fields that method needs are shown.
3. Enter the connection details described below.
4. Click **Save Configuration**.
5. Click **Test Connection** to check that the store can reach the cluster.

<ImagePopup src="/images/configure/search-engines-elasticsearch.png" alt="Elasticsearch screen with username and password authentication" />

**Authentication:** How the store connects to the cluster, and the fields each method needs:

- **No authentication** – **Hosts**.
- **Username and password** – **Hosts**, **Username** and **Password**.
- **API key** – **Hosts** and **API Key**.
- **Elastic Cloud with API key** – **Cloud ID** and **API Key**.
- **Elastic Cloud with username and password** – **Cloud ID**, **Username** and **Password**.

**Hosts:** Where the cluster is reached, such as `http://localhost:9200`. Separate several hosts with a comma. Leave it empty to use the value from the server's environment file.

**Index Prefix:** Added to the front of every index name, so several stores can share one cluster.

**Minimum Query Length** and **Maximum Query Length:** The shortest and longest search term the storefront search box accepts.

The result of **Test Connection** tells you whether Elasticsearch **is available**, **did not answer**, **rejected the credentials**, answered but **is not a supported Elasticsearch server**, or **is not configured**.

### Build the index

A cluster only returns products that have been indexed. After connecting it for the first time, ask whoever manages the server to run the product indexer for the search engine. It also runs whenever a product is saved, so the index keeps itself up to date afterwards.

## Differences in Bagisto 2.4

Bagisto 2.4 has no **Search Engines** group. Its **Search Engine**, **Admin Search Mode** and **Storefront Search Mode** settings, and its **Minimum query length** and **Maximum query length**, are in the **Search** section under **Configure >> Catalog >> Products**. The engines to choose from there are **Database** and **Elastic Search**, and the Elasticsearch connection is set in the server's environment file.
