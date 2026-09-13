# Roles

A role is a named set of permissions. Every admin user is assigned one role, so roles are how you decide which parts of the admin each member of your team can open.

## Creating a role

1. Go to **Settings >> Roles**.
2. Click **Create Role**.

<ImagePopup src="/images/settings/role.png" alt="Roles listing with the Create Role button" />

3. In **General**, enter the **Name** and **Description** of the role.

<ImagePopup src="/images/settings/new-role.png" alt="New role form" />

4. In **Access Control**, set **Permissions** to **All** to grant everything, or to **Custom** to pick individual permissions.
5. With **Custom**, tick the permissions the role should have. Use the arrow beside a group to expand or collapse it; ticking a group selects everything under it, and the **Search permissions** box jumps straight to a permission by name.

<ImagePopup src="/images/settings/access-control.png" alt="Access Control permission tree" />

6. Click **Save Role**.

The new role appears in the list and can be assigned to users under **Settings >> Users**.

<ImagePopup src="/images/settings/role-grid.png" alt="Roles listing with the new role" />

From Bagisto 2.4.9 the permission tree mirrors the admin menu, uses plain connector guides instead of folder icons, and lists **Bookings** under **Sales** as its own permission.
