# Roles

A role is a set of permissions. Every admin user has one role, so roles control which parts of the admin panel each person can open and what they can do there.

Bagisto comes with the **Administrator** role, which has every permission. Create other roles for team members who need less access, such as someone who only handles orders.

## Create a role

1. Go to **Settings >> Roles**.
2. Click **Create Role**.
3. In **General**, enter the **Name** and **Description**.
4. In **Access Control**, choose the **Permissions**: **All** gives the role every permission, and **Custom** lets you choose them.
5. If you chose **Custom**, select each permission the role needs. Selecting a permission also selects the group it belongs to.
6. Click **Save Role**.

   <ImagePopup src="/images/settings/create-role.png" alt="Create Role page for an Order Manager role with order, invoice and shipment permissions selected" />

The message *Roles Created Successfully* appears and the role is listed. You can now choose it when you [create a user](./users.md).

## Find the right permissions

- The permission tree follows the admin menu. Each group matches a menu item, such as **Sales** or **Catalog**, and holds the actions inside it, such as **Create**, **View** or **Edit**.
- Click the arrow beside a group to expand or collapse it.
- Type in **Search permissions** to find a permission by name.

## Edit or delete a role

On **Settings >> Roles**, click the edit icon of a role to change it, or the delete icon to remove it.

- A role that is assigned to a user can't be deleted. Give those users another role first.
- The last role can't be deleted.
- If only one user has full access, a role can't be changed from **All** to **Custom**.
