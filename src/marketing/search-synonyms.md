# Search Synonyms

Search synonyms let different words find the same products. Put **hoodie**, **sweatshirt** and **pullover** in one group, and a shopper who searches for "sweatshirt" also sees products named "hoodie" or "pullover".

## Create a synonym group

1. Go to **Marketing >> Search & SEO >> Search Synonyms**.
2. Click **Create Search Synonym**.
3. Enter a **Name** for the group, for example **Hoodies**.
4. In **Terms**, enter the words as a comma-separated list, for example `hoodie,sweatshirt,pullover`.

   <ImagePopup src="/images/marketing/search-synonym-create.png" alt="The Create Search Synonym dialog with the name Hoodies and three terms" />

5. Click **Save Search Synonym**.

### How synonyms are matched

- **The whole search must match one of the terms.** A search for "sweatshirt" uses the group above, but a search for "blue sweatshirt" doesn't.
- **The Name is only a label.** Put every word that should use the group in **Terms**, including the main one.
- **Don't put a space after a comma.** A term can have more than one word, such as `running shoes`.
- **Synonyms work with both of Bagisto's search engines**, the database search and Elasticsearch. See [Search Engines](../configure/search-engines.md).

## Manage search synonyms

The **Search Synonyms** list shows each group's **ID**, **Name** and **Terms**, with icons to edit and delete it. Select several groups to delete them together.

<ImagePopup src="/images/marketing/search-synonyms.png" alt="The Search Synonyms list with a synonym group and its terms" />
