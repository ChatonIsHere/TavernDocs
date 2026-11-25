---
title: "S3StorageFolder"
description: "class S3StorageFolder in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3StorageFolder

A **class** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`S3StorageObject`](/game-api/types/assembly-other/s3storageobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3StorageFolder(string bucketName, string fullName)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"override void Delete()"}</code> |  |
| <Link id="m-deleteasync" /><code>{"override Task DeleteAsync()"}</code> |  |
| <Link id="m-getfiles" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{"> GetFiles()"}</code> |  |
| <Link id="m-getfolders" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{"> GetFolders()"}</code> |  |

## Used in

Members of other types that take, return or hold a `S3StorageFolder`:

[`S3RemoteFolder.GetStorageSubFolder`](/game-api/types/assembly-other/s3remotefolder#m-getstoragesubfolder), [`S3RemoteFolder.GetSubfolder`](/game-api/types/assembly-other/s3remotefolder#m-getsubfolder), [`S3RemoteFolder.remoteInfo`](/game-api/types/assembly-other/s3remotefolder#m-remoteinfo), [`S3RemoteFolder.S3RemoteFolder`](/game-api/types/assembly-other/s3remotefolder#m-ctor).
