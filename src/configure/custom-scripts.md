# Custom Scripts

Custom scripts let you add your own CSS and JavaScript to every storefront page of a channel without touching the theme. Use them for a colour tweak, a chat widget or an analytics snippet.

Go to **Configure >> General >> Content** and find the **Custom Scripts** section. Both fields are per channel, so switch channel at the top of the page to target another store.

## Add custom CSS

1. Enter your styles in **Custom CSS**.
2. Click **Save Configuration**.
3. Reload the storefront to see the change.

In the example below the background colour has been set to light blue:

<ImagePopup src="/images/configure/css.png" alt="Custom CSS field" />

<ImagePopup src="/images/configure/css-output.png" alt="Storefront with the custom background colour" />

## Add custom JavaScript

1. Enter your script in **Custom Javascript**. Do not include `<script>` tags; the store adds them.
2. Click **Save Configuration**.

<ImagePopup src="/images/configure/js.png" alt="Custom Javascript field" />

A script that breaks will break every storefront page, so test it on a staging channel first if you have one.
