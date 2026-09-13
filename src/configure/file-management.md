# File Management

Uploaded files, such as product images, category banners and the logos in your settings, are stored on the server by default. If your store runs on more than one server, or you would rather keep files in object storage, you can point Bagisto at Amazon S3 or Cloudflare R2 from the admin.

Go to **Configure >> File Management**. It is available from Bagisto 2.5.

## General

<ImagePopup src="/images/configure/file-management-general.png" alt="File Management General Settings" />

**Default Storage Driver:** Where files uploaded from now on are saved and served from:

- **File (Local Storage)** — the server's own disk.
- **Amazon S3** — an S3 bucket, or any service that speaks the S3 API.
- **Cloudflare R2** — an R2 bucket.

Click **Save Configuration**.

### Files already uploaded do not move

Switching the driver changes where **new** uploads go. Files already uploaded stay on the storage they were saved to, and the store looks for them on the new one, so copy them across before switching or they will not be found on the storefront.

## Amazon S3

<ImagePopup src="/images/configure/file-management-s3.png" alt="Amazon S3 Settings" />

Used when the default storage driver is Amazon S3.

**Access Key ID** and **Secret Access Key:** The credentials of the account the bucket belongs to.

**Region:** The region the bucket was created in, such as `us-east-1`.

**Bucket:** The name of the bucket files are stored in.

**URL:** The address files are served from. Leave it empty to use the address the service provides.

**Endpoint:** Only needed for a service other than Amazon S3, such as a self-hosted one. Leave it empty for Amazon S3.

**Use Path Style Endpoint:** Turn on for a self-hosted service that addresses buckets as a path rather than a subdomain.

## Cloudflare R2

<ImagePopup src="/images/configure/file-management-r2.png" alt="Cloudflare R2 Settings" />

Used when the default storage driver is Cloudflare R2.

**Account ID:** The Cloudflare account the bucket belongs to. The address R2 is reached at is built from it, so no endpoint is needed.

**Access Key ID** and **Secret Access Key:** The credentials of an R2 API token.

**Bucket:** The name of the R2 bucket files are stored in.

**Public URL:** The address files are served from, either the bucket's public address or a custom domain. An R2 bucket is private until one is set, so files will not be reachable without it.
