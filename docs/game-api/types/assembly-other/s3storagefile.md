---
title: "S3StorageFile"
description: "class S3StorageFile in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3StorageFile

A **class** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`S3StorageObject`](/game-api/types/assembly-other/s3storageobject), [`IFileAccess`](/game-api/types/assembly-other/ifileaccess)
- **Derived types** [`S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3StorageFile(string bucketName, string fullName)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-downloadasync" /><code>{"async Task DownloadAsync(Stream localStream)"}</code> |  |
| <Link id="m-isexistingasync" /><code>{"async Task<bool> IsExistingAsync()"}</code> |  |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |  |
| <Link id="m-upload" /><code>{"void Upload(Stream fileStream)"}</code> |  |
| <Link id="m-uploadasync" /><code>{"async Task UploadAsync(Stream fileStream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `S3StorageFile`:

[`S3CloudStorageRemoteFile.S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile#m-ctor), [`S3RemoteFolder.GetFile`](/game-api/types/assembly-other/s3remotefolder#m-getfile), [`S3RemoteFolder.GetStorageFileSubInfo`](/game-api/types/assembly-other/s3remotefolder#m-getstoragefilesubinfo), [`S3StorageFolder.GetFiles`](/game-api/types/assembly-other/s3storagefolder#m-getfiles).
