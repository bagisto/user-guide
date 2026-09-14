# Data Transfer

Data transfer imports products, customers and tax rates in bulk from a file, so you don't have to enter a large catalog one record at a time. Once you start an import, Bagisto runs every step on its own, and a progress bar at the top of the page shows the step it has reached.

Every product type can be imported except downloadable products.

## Create an import

1. Go to **Settings >> Data Transfer >> Imports**.
2. Click **Create Import**.
3. Choose the **Type** of records to import: **Products**, **Customers** or **Tax Rates**.
4. Click **Download Sample** and choose a format to get a file with the expected columns. Prepare your file in the same layout.
5. Choose the **File**. CSV, XLS, XLSX and XML files are accepted.
6. For products, choose where the **Product Images** named in your file are found. See [Product images](#product-images).
7. In **Settings**, choose the **Action**, **Validation Strategy**, **Allowed Errors**, **Field Separator** and **Process In Queue**. See [Import settings](#import-settings).

   <ImagePopup src="/images/settings/create-import.png" alt="Create Import page for a product import" />

8. Click **Import**.
9. In the message *The import will start as soon as this is saved. Do you want to continue?*, click **Agree**.

The import page opens and the import starts.

## Import settings

| Field | What it does |
|---|---|
| **Action** | **Create/Update** adds new records and updates the ones that already exist. **Delete** removes the records listed in the file. |
| **Validation Strategy** | **Stop on Errors** stops the import after validation if any row is invalid. **Skip Errors** imports the valid rows and leaves out the invalid ones. |
| **Allowed Errors** | With **Skip Errors**, the number of invalid rows allowed before the import stops anyway. |
| **Field Separator** | The character between columns in a CSV file, usually a comma. |
| **Process In Queue** | Runs the import in the background with your store's queue workers, which suits large files. Your store must use the `database` or `redis` queue driver; otherwise, Bagisto asks you to change it. With this switch off, your browser runs the import in short steps. If you close the page, the import pauses, and it continues from the same step when you open the import again. |

## Product images

A product file names each product's images in its **images** column. Choose where Bagisto finds them. Your choice is checked during validation, and a mismatch is reported as an error, so products aren't imported without their images.

- **Image links in the file** (recommended): put the full `https://` address of each image in the **images** column. The images are downloaded before any record is written, so nothing has to be placed on the server first.
- **Upload a ZIP of images**: upload one archive that contains every image, and put the file names in the **images** column. **Download sample images** gives you an archive that matches the sample file. If the import already has an archive, the page shows its name and how many images are ready; choosing a new archive replaces them.
- **Images already on the server**: if you can place files on the server, put the images in a folder under the store's import directory and enter the folder name in **Images Directory Path**. The hint below the field shows the exact location.

Your choice is saved with the import, so it's restored when you edit the import.

<ImagePopup src="/images/settings/import-image-source.png" alt="Product Images options on the Create Import page" />

## Follow the import

The progress bar on the import page shows these steps:

- **Validate** – the file is read and each row is checked.
- **Images** – the image links in the file are downloaded before any record is written. This step appears only when **Image links in the file** is selected.
- **Create** or **Delete** – the records are written, or removed when the action is **Delete**.
- **Link** – imported records are connected, such as configurable variants, grouped and bundle products, booking details, and related, cross-sell and up-sell products.
- **Index** – price, inventory and search data are rebuilt.

Steps that don't apply are left out. For example, a delete import has no **Images** step.

When every step is done, the message *Congratulations! Your import was successful.* appears with the number of records created, updated and deleted.

<ImagePopup src="/images/settings/import-done.png" alt="Import page after a successful product import, with every step complete" />

The imported records appear under the matching menu, such as **Catalog >> Products**.

### If the file has errors

If validation finds errors, the page shows the **Total Rows Processed**, **Total Invalid Rows** and **Total Errors**. Click **Download Full Report** to see every error, then fix your file and import it again. With **Skip Errors**, the import can continue without the invalid rows.

If some batches don't finish, the import completes the others and tells you how many didn't, so you can check the error report and import those rows again.

### Come back to a running import

You don't have to wait on the page. While an import is running, its row under **Settings >> Data Transfer >> Imports** has a **View Progress** action that opens the progress page. When the import is finished, the action changes back to **Import**.
