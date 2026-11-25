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

- **Listed in** [TavernLib.Backend.Server](/tavernlib-api/types/backend-server)
- **Nested in** [`ServerBackup`](/tavernlib-api/types/backend-server/serverbackup)
- **Documented in** [ServerBackup.BackupResult](/tavernlib-api/types/backend-server/serverbackup-backupresult)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BackupResult()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filesadded" /><code>{"int FilesAdded"}</code> | How many files went into the zip. |
| <Link id="m-filesskipped" /><code>{"int FilesSkipped"}</code> | How many files were in use or gone and were left out. |
| <Link id="m-sizebytes" /><code>{"long SizeBytes"}</code> | The finished zip's size. |
| <Link id="m-zippath" /><code>{"string ZipPath"}</code> | The finished zip's full path. |

## Used in

Members of other types that take, return or hold a `BackupResult`:

[`ServerBackup.CreateBackup`](/tavernlib-api/types/backend-server/serverbackup#m-createbackup).
