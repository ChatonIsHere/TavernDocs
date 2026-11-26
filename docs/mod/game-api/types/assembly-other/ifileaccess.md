---
title: "IFileAccess"
description: "Minimal file handle: existence, names, delete and refresh."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFileAccess

An **interface** in `Alta.IO`, `Alta.Utilities`.

Minimal file handle: existence, names, delete and refresh. `FileInfoWrapper` is the plain disk version.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`FileInfoWrapper`](/mod/game-api/types/assembly-other/fileinfowrapper), [`S3StorageFile`](/mod/game-api/types/assembly-other/s3storagefile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> | <span className="api-desc">Whether the file exists.</span> |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | <span className="api-desc">Full path of the file.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">File name with extension.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete()"}</code> | <span className="api-desc">Deletes the file.</span> |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync()"}</code> | <span className="api-desc">Deletes the file without blocking.</span> |
| <Link id="m-isexistingasync" /><code>{"Task<bool> IsExistingAsync()"}</code> | <span className="api-desc">Whether the file exists, as a task.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Refreshes any cached file state.</span> |
