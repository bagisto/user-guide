# URL Rewrite

This feature allows the admin to manage errors related to product, category, and CMS URLs.

If an admin modifies their URL for any reason, this functionality ensures seamless redirection to the new path URL.

## Creating a URL rewrite

1. Go to **Marketing >> Search & SEO >> URL Rewrites**.

2. Click **Create URL Rewrite**, as shown below.

   <ImagePopup src="/images/marketing/url-rewrite.png" alt="Step 1: Navigate to URL Rewrite" />

3. Fill in the fields described below.

4. Click **Save URL Rewrite**.

   <ImagePopup src="/images/marketing/url-fields.png" alt="Step 2: Add URL Rewrite Details" />

## URL rewrite fields

- **For** – Select the entity for which you are applying the URL Rewrite (Product, Category, CMS Page).

- **Request Path** – Enter the URL key and suffix (if applicable) of the original product request. This is the old URL of the product, category or page that visitors are redirected from.

- **Target Path** – Enter the path that visitors are redirected to. This field is required.

- **Redirect Type** – Choose one of the following:

  - **Temporary (302):** Use for temporary changes while retaining SEO value on the old URL.

  - **Permanent (301):** Use for permanent changes with SEO value transferred to the new URL.

- **Locale** – Select the language in which you want the URL to be rewritten.

## URL redirection

The **Request Path** now redirects to the **Target Path**, using the redirect type you chose — temporary or permanent.

<ImagePopup src="/images/marketing/url-output.png" alt="Step 3: URL Redirection" />
