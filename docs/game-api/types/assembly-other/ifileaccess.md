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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`FileInfoWrapper`](/game-api/types/assembly-other/fileinfowrapper), [`S3StorageFile`](/game-api/types/assembly-other/s3storagefile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> | Whether the file exists. |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | Full path of the file. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | File name with extension. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete()"}</code> | Deletes the file. |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync()"}</code> | Deletes the file without blocking. |
| <Link id="m-isexistingasync" /><code>{"Task<bool> IsExistingAsync()"}</code> | Whether the file exists, as a task. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Refreshes any cached file state. |
