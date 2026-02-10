# URL Rewrite

This feature allows the admin to manage errors related to product, category, and CMS URLs.

If an admin modifies their URL for any reason, this functionality ensures seamless redirection to the new path URL.

## Step 1: Navigate to URL Rewrite

On the Admin panel, go to **Marketing > Search & SEO > URL Rewrites** and click on **Create URL Rewrite** as shown below.

<ImagePopup src="/images/marketing/urlRewrite.png" alt="Search Field" />

## Step 2: Add URL Rewrite Details

Fill in the following fields:

1. **For** – Select the entity for which you are applying the URL Rewrite (Product, Category, CMS Page).  

2. **Request Path** – Enter the URL key and suffix (if applicable) of the original product request. This is the redirect from the product/category/page identified earlier.  

3. **Target Path** – Displays the system version of the path (cannot be changed). 

4. **Redirect Type** – Choose one of the following:  

   - **Temporary (302):** Use for temporary changes while retaining SEO value on the old URL.  
   
   - **Permanent (301):** Use for permanent changes with SEO value transferred to the new URL.  

5. **Locale** – Select the language in which you want the URL to be rewritten.  

Finally, click the **Save URL Rewrite** button.

<ImagePopup src="/images/marketing/urlFields.png" alt="Search Field" />

## Step 3: URL Redirection

The new URL will now redirect as per the **Target Path** permanently.  

<ImagePopup src="/images/marketing/urlOutput.png" alt="Search Field" />
