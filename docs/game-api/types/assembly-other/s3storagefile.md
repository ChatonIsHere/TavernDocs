---
title: "S3StorageFile"
description: "A file object in an S3 bucket, used through the IFileAccess storage interface."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3StorageFile

A **class** in `Alta.IO`, `Alta.Utilities`.

A file object in an S3 bucket, used through the `IFileAccess` storage interface. Probably server or tooling only, as it needs S3 credentials.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`S3StorageObject`](/game-api/types/assembly-other/s3storageobject), [`IFileAccess`](/game-api/types/assembly-other/ifileaccess)
- **Derived types** [`S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"S3StorageFile(string bucketName, string fullName)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> | Whether the object exists, by fetching it. Any error counts as not existing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-downloadasync" /><code>{"async Task DownloadAsync(Stream localStream)"}</code> | Streams the object's contents into the given local stream. |
| <Link id="m-isexistingasync" /><code>{"async Task<bool> IsExistingAsync()"}</code> | Async version of `Exists`. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Does nothing for S3 files. |
| <Link id="m-upload" /><code>{"void Upload(Stream fileStream)"}</code> | Uploads the stream to this key, blocking. |
| <Link id="m-uploadasync" /><code>{"async Task UploadAsync(Stream fileStream)"}</code> | Uploads the stream to this key. |

## Used in

Members of other types that take, return or hold a `S3StorageFile`:

[`S3CloudStorageRemoteFile.S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile#m-ctor), [`S3RemoteFolder.GetFile`](/game-api/types/assembly-other/s3remotefolder#m-getfile), [`S3RemoteFolder.GetStorageFileSubInfo`](/game-api/types/assembly-other/s3remotefolder#m-getstoragefilesubinfo), [`S3StorageFolder.GetFiles`](/game-api/types/assembly-other/s3storagefolder#m-getfiles).
