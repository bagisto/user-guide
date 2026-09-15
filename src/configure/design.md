# Design

The **Design** screen holds the logo and favicon of the admin panel, and how the storefront header shows your categories. Both sections apply to the whole store.

## Admin logo

The **Logo Image** replaces the Bagisto logo in the admin panel header, on the admin sign-in and password pages, and in the emails sent to the admin and to inventory sources. The **Favicon** is the small icon browsers show in the admin panel's tab.

1. Go to **Configure >> General >> Design**.
2. In **Admin Logo**, under **Logo Image**, click **Add Image**.
3. Choose your logo file.
4. Under **Favicon**, click **Add Image**.
5. Choose the icon file.
6. Click **Save Configuration**.

<ImagePopup src="/images/configure/design-settings.png" alt="Design screen with the Admin Logo and Menu Category View sections" />

The file types each field accepts are listed under its **Add Image** button: BMP, JPEG, JPG, PNG, WEBP or SVG for the logo, and ICO as well for the favicon. To change or remove an image later, point to it and use its **Replace** or **Delete** icon; the change applies when you save. The storefront's own logo and favicon are set per channel under [Channels](../settings/channels.md).

## Menu category view

**Menu Category View** decides how the storefront header shows your categories on desktop screens:

- **Default Menu** lists every top-level category across the header. Pointing at a category opens a panel with its subcategories.
- **Sidebar Menu** adds an **All** button that opens a **Categories** side panel with every category and its subcategories, and lists only the first four top-level categories across the header. It suits a store with many categories.

If the setting has never been saved, **Default Menu** is used, but a new installation is set to **Sidebar Menu**. The mobile header keeps its own menu whichever you choose.

1. Go to **Configure >> General >> Design**.
2. In **Menu Category View**, choose **Default Menu** or **Sidebar Menu**.
3. To see what a style looks like, click **Preview Default Menu** or **Preview Sidebar Menu** below the field.
4. Click **Save Configuration**.

<ImagePopup src="/images/configure/design-menu-preview.png" alt="Sidebar Menu preview with the Categories side panel open over the storefront" />

Which categories the menu lists, and in what order, is set by each channel's root category and the categories' positions. See [Categories](../category/create-category.md#root-categories-and-the-storefront-menu).
