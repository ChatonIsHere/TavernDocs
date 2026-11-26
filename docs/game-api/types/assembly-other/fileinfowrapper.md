---
title: "FileInfoWrapper"
description: "IFileAccess over a plain FileInfo on disk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FileInfoWrapper

A **class** in `Alta.IO`, `Alta.Utilities`.

`IFileAccess` over a plain `FileInfo` on disk.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFileAccess`](/game-api/types/assembly-other/ifileaccess)
- **Derived types** [`RemoteAltaFile`](/game-api/types/assembly-other/remotealtafile)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FileInfoWrapper(FileInfo file)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-file" /><code>{"private FileInfo file"}</code> | The wrapped `FileInfo`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> | Whether the file exists, from the cached `FileInfo`. |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | Full path of the file. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | File name with extension. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete()"}</code> | Deletes the file. |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync()"}</code> | Deletes the file on a background task. |
| <Link id="m-isexistingasync" /><code>{"Task<bool> IsExistingAsync()"}</code> | Returns `Exists` as a finished task. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Refreshes the cached file info from disk. |
