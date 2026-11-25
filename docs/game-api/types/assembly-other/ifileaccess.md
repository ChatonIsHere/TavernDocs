---
title: "IFileAccess"
description: "interface IFileAccess in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFileAccess

An **interface** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`FileInfoWrapper`](/game-api/types/assembly-other/fileinfowrapper), [`S3StorageFile`](/game-api/types/assembly-other/s3storagefile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists { get; }"}</code> |  |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete()"}</code> |  |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync()"}</code> |  |
| <Link id="m-isexistingasync" /><code>{"Task<bool> IsExistingAsync()"}</code> |  |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |  |
