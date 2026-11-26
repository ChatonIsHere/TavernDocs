---
title: "FileInfoWrapper"
description: "class FileInfoWrapper in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FileInfoWrapper

A **class** in `Alta.IO`, `Alta.Utilities`.

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

| Member |
| --- |
| <Link id="m-file" /><code>{"private FileInfo file"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-delete" /><code>{"void Delete()"}</code> |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync()"}</code> |
| <Link id="m-isexistingasync" /><code>{"Task<bool> IsExistingAsync()"}</code> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |
