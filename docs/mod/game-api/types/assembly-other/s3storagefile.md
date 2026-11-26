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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`S3StorageObject`](/mod/game-api/types/assembly-other/s3storageobject), [`IFileAccess`](/mod/game-api/types/assembly-other/ifileaccess)
- **Derived types** [`S3CloudStorageRemoteFile`](/mod/game-api/types/assembly-other/s3cloudstorageremotefile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3StorageFile(string bucketName, string fullName)"}</code> | <span className="api-desc">Creates a `S3StorageFile` from `bucketName` and `fullName`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> | <span className="api-desc">Whether the object exists, by fetching it. Any error counts as not existing.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-downloadasync" /><code>{"async Task DownloadAsync(Stream localStream)"}</code> | <span className="api-desc">Streams the object's contents into the given local stream.</span> |
| <Link id="m-isexistingasync" /><code>{"async Task<bool> IsExistingAsync()"}</code> | <span className="api-desc">Async version of `Exists`.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Does nothing for S3 files.</span> |
| <Link id="m-upload" /><code>{"void Upload(Stream fileStream)"}</code> | <span className="api-desc">Uploads the stream to this key, blocking.</span> |
| <Link id="m-uploadasync" /><code>{"async Task UploadAsync(Stream fileStream)"}</code> | <span className="api-desc">Uploads the stream to this key.</span> |

## Used in

Members of other types that take, return or hold a `S3StorageFile`:

<div className="api-used-in">

[`S3CloudStorageRemoteFile.S3CloudStorageRemoteFile`](/mod/game-api/types/assembly-other/s3cloudstorageremotefile#m-ctor), [`S3RemoteFolder.GetFile`](/mod/game-api/types/assembly-other/s3remotefolder#m-getfile), [`S3RemoteFolder.GetStorageFileSubInfo`](/mod/game-api/types/assembly-other/s3remotefolder#m-getstoragefilesubinfo), [`S3StorageFolder.GetFiles`](/mod/game-api/types/assembly-other/s3storagefolder#m-getfiles).

</div>
