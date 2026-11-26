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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`S3StorageObject`](/mod/game-api/types/assembly-other/s3storageobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3StorageFolder(string bucketName, string fullName)"}</code> | <span className="api-desc">Creates a `S3StorageFolder` from `bucketName` and `fullName`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"override void Delete()"}</code> | <span className="api-desc">Deletes every object under the prefix, one at a time.</span> |
| <Link id="m-deleteasync" /><code>{"override Task DeleteAsync()"}</code> | <span className="api-desc">Deletes every object under the prefix in parallel.</span> |
| <Link id="m-getfiles" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{"> GetFiles()"}</code> | <span className="api-desc">Lists every object under the prefix, including in sub folders, following pagination. Empty on an HTTP error.</span> |
| <Link id="m-getfolders" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{"> GetFolders()"}</code> | <span className="api-desc">Lists the direct sub folders (common prefixes) under this one. Empty on an HTTP error.</span> |

## Used in

Members of other types that take, return or hold a `S3StorageFolder`:

<div className="api-used-in">

[`S3RemoteFolder.GetStorageSubFolder`](/mod/game-api/types/assembly-other/s3remotefolder#m-getstoragesubfolder), [`S3RemoteFolder.GetSubfolder`](/mod/game-api/types/assembly-other/s3remotefolder#m-getsubfolder), [`S3RemoteFolder.remoteInfo`](/mod/game-api/types/assembly-other/s3remotefolder#m-remoteinfo), [`S3RemoteFolder.S3RemoteFolder`](/mod/game-api/types/assembly-other/s3remotefolder#m-ctor).

</div>
