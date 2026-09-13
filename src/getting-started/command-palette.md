# Command Palette

The command palette is a search box that opens over any admin page. Type a few letters of what you are looking for and it lists the matching menu items, configuration screens, actions and records, so you can reach any part of the admin without clicking through the sidebar.

It is available from Bagisto 2.5. On Bagisto 2.4 the same searches are done through the admin's **Mega Search** box in the header.

## Opening and closing

Press **Ctrl + K** (**⌘ K** on a Mac) anywhere in the admin. The palette opens with the cursor in its search field.

<ImagePopup src="/images/getting-started/command-palette.png" alt="Command Palette" />

- **↑** and **↓** move the highlight, **Enter** opens the highlighted row.
- **←** or **Backspace** in an empty search field steps back out of a group you drilled into.
- **Esc**, or a click outside the box, closes it.

## What it finds

Before you type, the palette shows **Quick Access**: the main areas of the admin, such as Catalog, Sales and Customers.

As you type, the results are grouped:

- **Pages** — every screen in the admin menu, such as **Sales >> Orders** or **Settings >> Roles**. Common synonyms are understood, so "vat" finds the tax settings and "staff" finds the admin users.
- **Configuration** — every screen under **Configure**, down to its sub-group, such as **Configure >> Sales >> Payment Methods**.
- **Actions** — things you start rather than places you go: **Create Product**, **Create Category**, **Create Attribute**, **Create Order**, **Create Customer**, **Create CMS Page**, **Create User** and **Import Products**.
- **Products**, **Orders**, **Categories** and **Customers** — live records, once you have typed at least two characters. A product is found by name or SKU, an order by its number, a customer by name or email. Each group shows a few matches; open the group's **All …** row to search that list on its own, or pick a record to jump to it.

<ImagePopup src="/images/getting-started/command-palette-search.png" alt="Command Palette Results" />

You only see what your role is allowed to open. An admin without permission to manage customers, for example, sees no customer pages, actions or records in the palette.

## Drilling into a group

A row with an arrow at its end is a group. Opening it, with **Enter** or a click, shows the items underneath it and changes the search field to search that group only; the path you took is shown above the results, and **Back** returns one level. This is the quickest way to browse a large list, such as every configuration screen under **Sales**, without knowing the exact name.
