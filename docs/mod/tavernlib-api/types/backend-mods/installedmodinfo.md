---
title: "InstalledModInfo"
description: "A tracked mod from ModInstaller.ScanMods: its record and whether it's enabled."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstalledModInfo

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

A tracked mod from `ModInstaller.ScanMods`: its record and whether it's enabled.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstalledModInfo()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"bool Enabled { get; set; }"}</code> | <span className="api-desc">True when the record is `manifest.json`, not `manifest.disabled.json`.</span> |
| <Link id="m-record" /><code><Link to="/mod/tavernlib-api/types/backend-mods/modrecord">{"ModRecord"}</Link>{" Record { get; set; }"}</code> | <span className="api-desc">The mod's parsed record.</span> |

## Used in

Members of other types that take, return or hold a `InstalledModInfo`:

<div className="api-used-in">

[`ModInstaller.ScanMods`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-scanmods), [`ModReconciler.Pass._installed`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-installed).

</div>
