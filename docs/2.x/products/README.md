# Product types

**TOPICS:** Inventory, Products

**CREATED FOR:**
- Beginner
- Intermediate
- Admin
- Leader
- User

Inventory Management supports inventory and order management for all product types in [Bagisto](https://bagisto.com/en/): simple, configurable, virtual, downloadable, bundle, and grouped. Options and requirements may differ per product type for sources, stocks, and shipping.

Single-source merchants create and update product settings and quantities without requiring additional updates. All created and newly imported products automatically assign to the Default Source and Default Stock, immediately available to customers if enabled and In-Stock.

Multi-source merchants assign sources, quantities per source, and settings during or after product creation. Commerce assigns all newly imported products to the Default Source, requiring additional edits to assign sources and quantities.

| Product Type   | Shipping and Source Selection Algorithm                                                                                          |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------|
| Simple          | Supports SSA recommendations and overrides at shipping.                                                                            |
| Configurable    | Supports SSA recommendations and overrides at shipping.                                                                            |
| Virtual         | Always uses the SSA recommendation. The system runs the algorithm implicitly when it creates invoices, and always uses the suggested results. You cannot adjust these results.                                                                 |
| Downloadable    | Always uses the SSA recommendation. The system runs the algorithm implicitly when it creates invoices, and always uses the suggested results. You cannot adjust these results.                                                                 |
| Bundle          | Supports SSA recommendations and overrides at shipping.                                                                            |
| Grouped         | Supports SSA recommendations and overrides at shipping.                                                                            |
