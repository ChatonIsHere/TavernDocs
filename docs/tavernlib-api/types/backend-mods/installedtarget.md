---
title: "InstalledTarget"
description: "What a mod record says is installed for one target."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstalledTarget

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

What a mod record says is installed for one target.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [InstalledTarget](/tavernlib-api/types/backend-mods/installedtarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstalledTarget()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-files" /><code>{"Dictionary<string, string> Files { get; set; }"}</code> | Each installed file's path in the target folder, to its SHA-256. |
| <Link id="m-libraries" /><code>{"List<string> Libraries { get; set; }"}</code> | The `UserLibs` files this target uses. Counted across every record before a library is removed. |

## Used in

Members of other types that take, return or hold a `InstalledTarget`:

[`ModRecord.Installed`](/tavernlib-api/types/backend-mods/modrecord#m-installed), [`ModRecord.InstalledFor`](/tavernlib-api/types/backend-mods/modrecord#m-installedfor).
