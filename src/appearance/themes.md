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
- **Duplicate** or **Delete** — from the row's menu.
- **Change locale or channel** — from the selectors at the top. Each combination
  is edited separately.
- **Change device** — preview the storefront at desktop, tablet or mobile width.

<ImagePopup src="/images/appearance/section-editor.png" alt="Section Editor" />

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

Shows products in a responsive carousel.

**Title:** The heading shown above the carousel.
**Filters:** Choose which products appear and in what order — for example by
sort order, limit, category, or whether a product is new or featured.

### Category Carousel

Shows categories in a responsive carousel.

**Filters:** Choose which categories appear and in what order — for example by
parent, status, or limit.

### Image Carousel

A slider or banner area. Add a slide at a time, each with:

**Title:** The slide title.
**Link:** Where the slide points.
**Image:** The slide image. A resolution of **1920 × 700** is recommended.

### Static Content

A free-form block of your own markup.

**HTML:** The content itself.
**CSS:** Styles for the block.

Both are cleaned before they are saved, so scripts and unsafe markup are
stripped. Images used inside the HTML can be uploaded from the editor.

### Footer Links

The storefront footer's link columns. Each column takes a set of links with a
title and a URL.

A channel shows **one footer links section**, so once a channel has one, the type
is no longer offered.

### Services Content

The service promises shown across the storefront — free delivery, returns, and
similar. Each entry takes a title, a description, and an icon.

Because this section and the footer are drawn on every page rather than just the
home page, publishing a change to either refreshes the whole storefront cache.

### Types added by a theme

The six types above are the ones every theme offers. A theme you install from
the marketplace or have built for you can add types of its own, such as a
testimonial slider or a brand strip. They appear in the same **+** list when
that theme is being customised, with their own fields, and are edited and
published exactly like the built-in types. If a type you expect is missing from
the list, check that the theme it belongs to is the one you are customising.

## Upgrading from an earlier version

If you used **Settings >> Themes** before, that screen has moved. Theme
customizations are now sections, and they live under **Appearance**. Existing
customizations are carried over automatically — you do not need to recreate them.
