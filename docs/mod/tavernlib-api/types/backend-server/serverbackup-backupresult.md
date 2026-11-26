---
title: "ServerBackup.BackupResult"
description: "Internal: what one CreateBackup made."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBackup.BackupResult

A **internal class** in `TavernLib`, `TavernLib.Backend.Server`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: what one `CreateBackup` made.

- **Listed in** [TavernLib.Backend.Server](/mod/tavernlib-api/types/backend-server)
- **Nested in** [`ServerBackup`](/mod/tavernlib-api/types/backend-server/serverbackup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BackupResult()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filesadded" /><code>{"int FilesAdded"}</code> | <span className="api-desc">How many files went into the zip.</span> |
| <Link id="m-filesskipped" /><code>{"int FilesSkipped"}</code> | <span className="api-desc">How many files were in use or gone and were left out.</span> |
| <Link id="m-sizebytes" /><code>{"long SizeBytes"}</code> | <span className="api-desc">The finished zip's size.</span> |
| <Link id="m-zippath" /><code>{"string ZipPath"}</code> | <span className="api-desc">The finished zip's full path.</span> |

## Used in

Members of other types that take, return or hold a `BackupResult`:

<div className="api-used-in">

[`ServerBackup.CreateBackup`](/mod/tavernlib-api/types/backend-server/serverbackup#m-createbackup).

</div>
