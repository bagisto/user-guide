# Appearance

The appearance of your storefront defines its look and feel, and is a key factor
in the first impression it makes on a visitor.

Appearance has its own area in the admin, separate from Settings. It holds two
things: the **themes** available to your store, and the **sections** a theme's
storefront is built from.

## Themes

Go to **Appearance >> Themes** to see every theme, grouped so you can tell at a
glance which are ready to use:

- **My Themes** — themes installed on your store. Each shows whether it is
  active, and on which channels.
- **Buy Themes** — themes available from the marketplace, with links to preview
  or purchase them.

<ImagePopup src="/images/appearance/themes.png" alt="Themes" />

From an installed theme you can:

- **Customize** — open the section editor for that theme.
- **Activate** — apply the theme to one or more channels. Before it is applied,
  you are shown what the change affects.

## Sections

A section is one block of the storefront — a product carousel, a banner slider, a
footer, and so on. Sections belong to a **theme** and a **channel**, so the same
theme customised on two channels keeps two independent sets.

Open **Appearance >> Themes**, then **Customize** on the theme you want to edit.

### The editor

The editor shows the list of sections on the left and a live storefront preview
on the right. Selecting a section opens its fields; the preview updates as you
edit, so you can see the result before anyone else does.

- **Reorder** — drag a section by its handle to change where it appears.
- **Switch on or off** — use the toggle on the row.
- **Duplicate** or **Delete** — from the row's menu. Duplicating copies the
  section with everything configured in it, which is the quickest way to build a
  second carousel that differs in one filter. Deleting asks you to confirm and
  cannot be undone — to take a section off the storefront and keep it, switch it
  off instead.
- **Change locale or channel** — from the selectors at the top, when your store
  has more than one. Each combination is edited separately.
- **Change device** — preview the storefront at desktop, tablet or mobile width.

<ImagePopup src="/images/appearance/section-editor.png" alt="Section Editor" />

The footer links section is pinned to the bottom of the page, so it has no drag
handle and cannot be duplicated. Everything else can be moved freely.

<ImagePopup src="/images/appearance/section-actions.png" alt="Duplicate and Delete on a section row" />

### Nothing goes live until you publish

Every change is held as an **unsaved change** until you publish it. This applies
to everything: editing content, switching a section on or off, and reordering.

The header shows how many sections are holding unsaved changes, and each affected
row is marked. From there you can:

- **Publish** — send the changes to the storefront.
- **Discard** — throw them away and return to what is currently live.

A newly created section is switched off and counts as unsaved, so an empty
section is never shown to shoppers before it has been built.

### Creating a section

**Step 1:** In the editor, click the **+** button beside the section list.

**Step 2:** Choose the section type, give it a name, and save.

<ImagePopup src="/images/appearance/create-section.png" alt="Create Section" />

**Step 3:** The section is added, switched off, and opened for editing. Fill in
its fields, then **Publish** when you are ready for it to appear.

## Section types

### Product Carousel

A scrollable strip of products, used for the collections on your home page.

**Title:** The heading shown above the carousel.

**Filters:** Which products appear, and in what order. Click **Add Filter**, then
choose the filter and its value:

- **Sort** — the order products are shown in, using the same sort options your
  storefront listing offers.
- **Limit** — how many products the strip holds.
- **Category ID** — restrict the strip to one category. Categories are listed by
  their full path, so two categories sharing a name can be told apart.
- **Featured** — set to **Yes** to show only featured products.
- **New** — set to **Yes** to show only products marked as new.

Once every available filter has been added, the editor says so rather than
offering an empty row. To drop a filter, use the bin beside it.

<ImagePopup src="/images/appearance/product-carousel.png" alt="Product Carousel section fields" />

### Category Carousel

A scrollable strip of categories, so shoppers can jump straight into a
department.

**Filters:** Which categories appear, and in what order:

- **Sort** — **Asc** or **Desc**.
- **Limit** — how many categories the strip holds.
- **Parent ID** — show the children of one or more chosen categories. Pick
  **Root** to show your top-level departments.

<ImagePopup src="/images/appearance/category-carousel.png" alt="Category Carousel section fields" />

### Image Carousel

The banner slideshow at the top of your storefront. Click **Add Slider** to add a
slide at a time, each with:

**Slider Image:** The image itself. A resolution of **1920 × 700** is
recommended, and JPEG, JPG, PNG and WEBP files are accepted.

**Image Title:** The heading shown over the slide.

**Link:** Where a shopper who clicks the slide is taken.

Slides play in the order they are listed, and you can drag them to change it.

<ImagePopup src="/images/appearance/image-carousel.png" alt="Image Carousel section fields" />

### Static Content

A free-form block of your own markup, for an announcement strip or a promotional
band between two carousels.

**HTML:** The content itself. Use **Add Media** to upload an image and drop it
into the markup.

**CSS:** Styles that apply to this block only.

Both are cleaned before they are saved, so scripts and unsafe markup are
stripped — a block that relies on them will not behave as written.

<ImagePopup src="/images/appearance/static-content.png" alt="Static Content section fields" />

### Footer Links

The link columns in your storefront footer. The footer holds two columns,
**Column 1** and **Column 2**. Use **Add Link** on either, and give each link a
**Title** — the wording a shopper reads — and a **URL**. Links can be dragged
into a different order within their column.

A channel shows **one footer links section**, so once a channel has one, the type
is no longer offered when you create a section.

### Services Content

The service promises shown across the storefront — free delivery, easy returns,
and similar. Click **Add Services** to add an entry, each with:

**Service Icon:** The icon shown beside the promise.

**Title:** The promise itself, kept to a few words.

**Description:** A single line of supporting detail.

<ImagePopup src="/images/appearance/services-content.png" alt="Services Content section fields" />

Because this section and the footer are drawn on every page rather than just the
home page, publishing a change to either refreshes the whole storefront cache.

## Upgrading from an earlier version

If you used **Settings >> Themes** before, that screen has moved. Theme
customizations are now sections, and they live under **Appearance**. Existing
customizations are carried over automatically — you do not need to recreate them.
