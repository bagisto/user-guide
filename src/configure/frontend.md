# Storefront

The storefront serves as the customer-facing component of an online store, featuring product displays, category listings, and intuitive navigation to ensure a smooth and enjoyable shopping experience.

Go to **Configure >> Catalog >> Products** and find the **Storefront** section.

<ImagePopup src="/images/configure/storefront-settings.png" alt="Storefront Settings" />

**Default List Mode:** How products are shown on category and search pages, **Grid** or **List**. Shoppers can switch between the two on the page; this is the view they see first.

### List Mode

<ImagePopup src="/images/configure/listmode.png" alt="List Mode" />

### Grid Mode

<ImagePopup src="/images/configure/gridmode.png" alt="Grid Mode" />

**Products Per Page:** The page sizes the shopper can pick from on a listing, as a comma-separated list such as `12,24,36`. The first value is used until the shopper chooses another.

**Sort By:** The order products are listed in until the shopper picks another.

All three are set per channel. After making changes, click **Save Configuration**.

## Settings that moved

Two settings that used to sit in this section are elsewhere on the current version of Bagisto:

- The **Search Engine** choice (Database or Elasticsearch) is now the **Default Search Engine** setting under **Configure >> Search Engines**; see [Search Engines](./search-engines.md).
- **Allow customers to directly buy products** (the **Buy Now** button) is now in the [Product View Page](./product-view-page.md) section, further down the same **Products** page.

On Bagisto 2.4 the **Buy Now** switch is still in the **Storefront** section, and the **Search Engine** field is in the **Search** section above it.
