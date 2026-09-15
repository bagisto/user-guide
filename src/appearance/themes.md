# Themes & Sections

<div class="feature-hero feature--theme">
  <span class="feature-hero__eyebrow">Storefront design</span>
  <p class="feature-hero__lead">Choose the theme each channel uses, then build its storefront from sections such as banners, product carousels, content blocks and footer links, with a live preview beside you. Most changes wait until you publish.</p>
  <div class="feature-hero__actions">
    <a class="feature-hero__btn feature-hero__btn--primary" href="#themes">Browse themes</a>
    <a class="feature-hero__btn feature-hero__btn--ghost" href="#the-section-editor">Customize sections</a>
  </div>
</div>

<div class="feature-cards feature--theme">
  <a class="feature-card" href="#themes">
    <span class="feature-card__icon feature-card__icon--layout" aria-hidden="true"></span>
    <span class="feature-card__title">Themes</span>
    <span class="feature-card__desc">See the themes installed on your store, activate one for each channel and find more in the theme store.</span>
    <span class="feature-card__tag">Appearance &gt;&gt; Themes</span>
  </a>
  <a class="feature-card" href="#the-section-editor">
    <span class="feature-card__icon feature-card__icon--eye" aria-hidden="true"></span>
    <span class="feature-card__title">Live section editor</span>
    <span class="feature-card__desc">Reorder, switch on or off, duplicate and edit sections while the preview shows the result on desktop, tablet or mobile.</span>
    <span class="feature-card__tag">Customize</span>
  </a>
  <a class="feature-card" href="/appearance/section-types.html">
    <span class="feature-card__icon feature-card__icon--blocks" aria-hidden="true"></span>
    <span class="feature-card__title">Section types</span>
    <span class="feature-card__desc">Image, product and category carousels, static content, service promises and footer links.</span>
    <span class="feature-card__tag">Built-in types</span>
  </a>
</div>

The appearance of your storefront defines its look and feel, and it shapes the first impression a visitor gets. It has its own area in the admin panel, **Appearance**. A theme decides how the whole storefront looks. Sections are the blocks a theme's pages are built from, and you manage them for each channel.

## Themes

Go to **Appearance >> Themes** to see the themes for your storefront, in two groups:

- **My Themes**: themes installed on your store.
- **Buy Themes**: themes from the Bagisto theme store that aren't installed yet. **View & Buy** appears when a theme has a store page, and **Preview** opens its demo. Both open in a new tab.

Each card shows a picture, the theme's name and a short description, plus the author and version when they're known. An installed theme also shows where it's used: **Active on every channel**, **Active on:** followed by the channel names, or **Not in use**. A theme in use carries an **Active** badge.

<ImagePopup src="/images/appearance/themes.png" alt="Appearance >> Themes with the active Default theme under My Themes and themes on offer under Buy Themes" />

An installed theme has these buttons:

- **Customize**: opens the section editor. Shown on a theme that's active on at least one channel.
- **Activate**: applies the theme to more channels. Shown until the theme is active on every channel.

A theme under **Buy Themes** has to be installed on your store before you can activate it. Your developer or hosting partner installs it. Buttons your role has no permission for are hidden. Each channel uses one theme at a time; to set up channels, see [Channels](../settings/channels.md).

### Activate a theme

1. Go to **Appearance >> Themes**.
2. On a theme under **My Themes**, click **Activate**. The **Activate Theme** dialog opens.
3. In **Channels**, choose the channels that should use the theme. Hold Ctrl (Cmd on Mac) to pick more than one.
4. Read the warning, if one appears.
5. Click **Activate**.

The **Channels** list shows only the channels that don't use the theme yet, and when only one is left, it's already selected. The theme goes live on the chosen channels straight away, and you see a message such as "Default is now active on Default."

### Sections stay with their theme

A channel's sections belong to the theme they were built for. When you switch a channel to another theme, the dialog warns that the channel has customizations built for its current theme: "They stay saved, but will not appear while the new theme is active." Switch the channel back to show them again.

## The section editor

1. Go to **Appearance >> Themes**.
2. On an active theme, click **Customize**. The **Sections** page opens.

<ImagePopup src="/images/appearance/section-editor.png" alt="The section editor with the Sections list on the left and a live storefront preview on the right" />

The line under the title says what you're editing, for example "Showing sections for the Default theme on the Default channel." The page has two parts:

- **The Sections list** on the left shows the theme's sections in the order the storefront shows them, each with its name and type.
- **The Preview** on the right shows the channel's home page with your unpublished changes. Switch between **Desktop**, **Tablet** and **Mobile**, or click the reload icon to refresh it.

When the channel has more than one language, choose the language at the top right. When your store has more than one channel, a channel selector appears beside it.

### What you can do in the list

- **Edit**: click a section's name. See [Edit a section](#edit-a-section).
- **Reorder**: drag a section by its handle.
- **Switch on or off**: use the switch on the row. The name of a section that's off is struck through.
- **Duplicate**: open the **⋯** menu and click **Duplicate**. The copy is placed below the original, with **Copy** added to its name. It shows switched on with an unsaved change, so it goes live when you publish.
- **Delete**: open the **⋯** menu, click **Delete** and confirm.

<ImagePopup src="/images/appearance/section-actions.png" alt="The ⋯ menu of a section row open, with Duplicate and Delete" />

**Footer Links** is pinned to the bottom of the page, so it has no drag handle and can't be duplicated.

::: warning Deleting can't be undone
A deleted section disappears from the storefront straight away. Deleting isn't held for publishing. To take a section off the storefront and keep it, switch it off instead.
:::

### Edit a section

1. In the **Sections** list, click the section's name. A panel opens with the section's fields, and the preview moves beside it and highlights the section.
2. Change the fields. Each type's fields are described in [Section types](section-types.md).
3. Check the preview. Your changes are saved as a draft while you type, and the preview reloads to show them.

   <ImagePopup src="/images/appearance/section-edit.png" alt="A Product Carousel section open for editing, with the section highlighted in the preview" />

4. Close the panel.
5. Click **Publish** when you're ready for shoppers to see the changes.

### Most changes wait until you publish

These changes are held as unsaved changes until you publish them:

- Changes to a section's fields, in any language.
- Switching a section on or off.
- A new order of sections.

While changes are waiting, the **Sections** list shows how many there are, such as "2 Unsaved changes", and each changed row is marked with a dot. **Discard** and **Publish** appear at the top of the page, with the count on **Publish**:

- **Publish**: sends every unsaved change for this theme and channel, in every language, to the storefront.
- **Discard**: throws away every unsaved change, without asking you to confirm. The list and the preview go back to what's live.

::: info With more than one channel
After you publish or discard, check the storefront of the channel you edited.
:::

Published changes show on the storefront straight away: on most pages for **Footer Links** and **Services Content**, and on the home page for the other types.

### New and duplicated sections

Creating or duplicating a section saves it straight away, still hidden from shoppers. In the list it shows switched on with an unsaved change, so **Publish** puts it live. To keep it hidden, switch it off before you publish. **Discard** doesn't delete a new section; it leaves it switched off.

### Languages and channels

- **Each language has its own content.** Choose the language at the top before you edit a section's fields. Switching a section on or off, and the order of sections, apply to every language.
- **Each channel has its own sections.** Choose another channel at the top to edit its sections, which belong to the theme that channel uses.

### Create a section

1. In the section editor, click **+** beside **Sections**. The **Create Section** panel opens.
2. Under **Type**, click the type of section.
3. Enter a **Name**. It's shown in the **Sections** list, not to shoppers.

   <ImagePopup src="/images/appearance/create-section.png" alt="The Create Section panel with Product Carousel chosen and the name Summer Picks" />

4. Click **Save Section**. The section is added at the bottom of the list, above **Footer Links**, shown switched on with an unsaved change, and its fields open.
5. Fill in the fields.
6. Click **Publish**.

A channel can have only one **Footer Links** section, so that type isn't offered once the channel has one.

## Section types

The default theme offers six built-in types: **Image Carousel**, **Product Carousel**, **Category Carousel**, **Static Content**, **Services Content** and **Footer Links**. A theme you install can add types of its own, or offer only some of them. The fields of each type are described in [Section types](section-types.md).

## Upgrading from an earlier version

If you used **Settings >> Themes** before, that screen has moved. Theme customizations are now sections, and they live under **Appearance**. Existing customizations are carried over, so you don't need to recreate them.
