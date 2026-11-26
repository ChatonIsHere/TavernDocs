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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [InstalledTarget](/mod/tavernlib-api/types/backend-mods/installedtarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstalledTarget()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-files" /><code>{"Dictionary<string, string> Files { get; set; }"}</code> | <span className="api-desc">Each installed file's path in the target folder, to its SHA-256.</span> |
| <Link id="m-libraries" /><code>{"List<string> Libraries { get; set; }"}</code> | <span className="api-desc">The `UserLibs` files this target uses. Counted across every record before a library is removed.</span> |

## Used in

Members of other types that take, return or hold a `InstalledTarget`:

<div className="api-used-in">

[`ModRecord.Installed`](/mod/tavernlib-api/types/backend-mods/modrecord#m-installed), [`ModRecord.InstalledFor`](/mod/tavernlib-api/types/backend-mods/modrecord#m-installedfor).

</div>
