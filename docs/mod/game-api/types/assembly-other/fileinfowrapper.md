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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFileAccess`](/mod/game-api/types/assembly-other/ifileaccess)
- **Derived types** [`RemoteAltaFile`](/mod/game-api/types/assembly-other/remotealtafile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FileInfoWrapper(FileInfo file)"}</code> | <span className="api-desc">Creates a `FileInfoWrapper` from `file`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-file" /><code>{"private FileInfo file"}</code> | <span className="api-desc">The wrapped `FileInfo`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> | <span className="api-desc">Whether the file exists, from the cached `FileInfo`.</span> |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | <span className="api-desc">Full path of the file.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">File name with extension.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete()"}</code> | <span className="api-desc">Deletes the file.</span> |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync()"}</code> | <span className="api-desc">Deletes the file on a background task.</span> |
| <Link id="m-isexistingasync" /><code>{"Task<bool> IsExistingAsync()"}</code> | <span className="api-desc">Returns `Exists` as a finished task.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Refreshes the cached file info from disk.</span> |
