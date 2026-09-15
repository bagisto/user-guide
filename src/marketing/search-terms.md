# Search Terms

Search terms show what shoppers search for on your storefront, how often, and how many products each search finds. You can also send a search straight to a page, for example send "returns" to your return policy page.

## How search terms are recorded

Storefront searches add their term to the list, or update it:

- **Uses** counts how many times the term was searched.
- **Results** holds the number of products the latest search found.

<ImagePopup src="/images/marketing/search-terms.png" alt="The Search Terms list with storefront searches and their results and uses" />

Terms are recorded separately for each channel and language. Only the first page of a plain search is recorded, so a search combined with filters, such as a price range, isn't counted. When your store uses Elasticsearch, the recorded term can be the corrected spelling of what the shopper typed. Terms with many **Uses** and few **Results** show what shoppers want but can't find.

## Send a search to a page

1. Go to **Marketing >> Search & SEO >> Search Terms**.
2. Click **Create Search Term**. To use a term that's already in the list, click its edit icon instead.
3. Enter the **Search Query**, exactly as shoppers type it.
4. Enter the **Redirect Url**, the full address of the page to open, starting with `https://` or `http://`.
5. Choose the **Channel**.
6. Choose the **Locale**.

   <ImagePopup src="/images/marketing/search-term-create.png" alt="The Create Search Term dialog sending the search returns to the Return Policy page" />

7. Click **Save Search Term**.

When a shopper on that channel and in that language searches for exactly that query, the storefront opens the **Redirect Url** instead of the search results. **Redirect Url** is optional, so a term without one keeps showing the search results. When you edit a term, the dialog also shows its **Results** and **Uses**, which you can change.

## Manage search terms

The **Search Terms** list shows each term's **ID**, **Search Query**, **Results**, **Uses**, **Redirect Url**, **Channel** and **Locale**, with icons to edit and delete it. Select several terms to delete them together.
