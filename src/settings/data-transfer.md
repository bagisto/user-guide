# Data Transfer

Data transfer imports products, customers and tax rates in bulk from a spreadsheet, so a large catalog does not have to be typed in one record at a time.

From Bagisto 2.4.9, saving an import runs it through to the end on its own. Validation, image fetching, record creation, linking and indexing follow one another automatically, and a stepper at the top of the page shows the live progress of each phase.

## Creating an import

1. Go to **Settings >> Data Transfer >> Imports**.
2. Click **Create Import**.

<ImagePopup src="/images/settings/import.png" alt="Imports listing with the Create Import button" />

3. Choose the **Type** of records to import: products, customers or tax rates.
4. Click **Download Sample** to get a file in the expected layout, and prepare your own file to match it.
5. Choose the **File** (CSV, XLS, XLSX or XML).
6. For products, choose where the **Product Images** named in the file are found; the options are described below.
7. Choose the **Action**: create or update the records, or delete them.
8. Set the remaining fields described below.
9. Click **Import** and confirm the message *The import will start as soon as this is saved. Do you want to continue?*

<ImagePopup src="/images/settings/create-import.png" alt="Create Import form" />

Simple, configurable, virtual, bundle and grouped products can be imported; downloadable products cannot.

### The remaining fields

**Validation Strategy:** **Skip Errors** imports the valid rows and leaves the faulty ones out; **Stop on Errors** halts the import after validation if any row is invalid.

**Allowed Errors:** With **Skip Errors**, the number of faulty rows the import tolerates before it stops anyway.

**Field Separator:** The character that separates columns in a CSV file, usually a comma.

**Process In Queue:** Runs the import in the background. Validation and image downloading are spread across the store's queue workers, so a large file is not processed in one request. Your store needs a queue worker for this; if it is not set up to run jobs in the background, Bagisto asks you to change that before the import can start. With the switch off, the import runs in short browser-driven windows instead, so no single request runs long enough to time out; closing the page pauses the run at the phase it had reached, and reopening the import picks it up from there.

### Product images

The images named in a product file can come from three places. Pick the one that matches your file; the choice is checked during validation, and a mismatch is reported as an error rather than importing every product without its images.

- **Image links in the file** (recommended): put the full `https://` address of each image in the **images** column. Every link is fetched once, in a phase of its own, before any row is written, so nothing has to be placed on the server first.
- **Upload a ZIP of images**: upload a single archive containing every image, and name the files inside it in the **images** column. **Download sample images** gives you an archive that matches the sample sheet. When you reopen an import that already has an archive, the page shows its name and how many images are ready; choosing a new archive replaces them.
- **Images already on the server**: if someone can place files on the server, put the images in a folder under the store's import directory and enter that folder's name in **Images Directory Path**. The field's hint shows the exact location.

The method you pick is saved on the import, so reopening it restores the choice along with the value that went with it.

<ImagePopup src="/images/settings/import-image-source.png" alt="Product Images source options" />

## Following the import

Once saved, the import runs on its own and the stepper shows which phase it is in:

- **Validate** – the file is read and checked row by row, with a progress bar.
- **Images** – every image link is fetched before any record is written. This phase appears only for **Image links in the file**; an archive or a server folder is read while the rows are written.
- **Create / Delete** – the records are written, or removed when the action is **Delete**.
- **Link** – relationships between the imported rows are resolved: configurable variants, grouped product associations, bundle options, booking data, and the related, cross-sell and up-sell links.
- **Index** – price, inventory and search data are rebuilt.

A delete run has no images to fetch and nothing to link, so those phases are not shown for it.

<ImagePopup src="/images/settings/import-stepper.png" alt="Import stepper showing the phases" />

If the file has errors, the run stops after validation and shows the total rows processed, the invalid rows and the error count, with a **Download Full Report** button for the complete list. With **Skip Errors**, the import can still proceed and the faulty rows are left out.

When every phase is complete, the summary confirms the result. If any batch does not complete, the import finishes the batches it can and reports how many did not, so you can check the error report and run the import again for those rows.

<ImagePopup src="/images/settings/import-done.png" alt="Import summary after completion" />

The imported records are listed under the matching menu, for example **Catalog >> Products**.

<ImagePopup src="/images/settings/import-output.png" alt="Imported products in the catalog" />

### Coming back to a running import

You do not have to watch an import finish. Leave the page, and the row under **Settings >> Data Transfer >> Imports** carries a **View Progress** action for as long as the run is going; it opens the same stepper at the phase the import has reached. Once the run is finished, the action reads **Import** again, so the listing tells you at a glance whether anything is still in flight.
