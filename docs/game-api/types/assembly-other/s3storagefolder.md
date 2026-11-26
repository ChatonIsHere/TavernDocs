---
title: "S3StorageFolder"
description: "A key prefix in an S3 bucket treated as a folder, for listing and deleting the objects under it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3StorageFolder

A **class** in `Alta.IO`, `Alta.Utilities`.

A key prefix in an S3 bucket treated as a folder, for listing and deleting the objects under it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`S3StorageObject`](/game-api/types/assembly-other/s3storageobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3StorageFolder(string bucketName, string fullName)"}</code> | Creates a `S3StorageFolder` from `bucketName` and `fullName`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"override void Delete()"}</code> | Deletes every object under the prefix, one at a time. |
| <Link id="m-deleteasync" /><code>{"override Task DeleteAsync()"}</code> | Deletes every object under the prefix in parallel. |
| <Link id="m-getfiles" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{"> GetFiles()"}</code> | Lists every object under the prefix, including in sub folders, following pagination. Empty on an HTTP error. |
| <Link id="m-getfolders" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{"> GetFolders()"}</code> | Lists the direct sub folders (common prefixes) under this one. Empty on an HTTP error. |

## Used in

Members of other types that take, return or hold a `S3StorageFolder`:

[`S3RemoteFolder.GetStorageSubFolder`](/game-api/types/assembly-other/s3remotefolder#m-getstoragesubfolder), [`S3RemoteFolder.GetSubfolder`](/game-api/types/assembly-other/s3remotefolder#m-getsubfolder), [`S3RemoteFolder.remoteInfo`](/game-api/types/assembly-other/s3remotefolder#m-remoteinfo), [`S3RemoteFolder.S3RemoteFolder`](/game-api/types/assembly-other/s3remotefolder#m-ctor).
