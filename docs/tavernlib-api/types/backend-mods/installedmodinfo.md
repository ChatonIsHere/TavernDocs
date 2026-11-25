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

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [InstalledModInfo](/tavernlib-api/types/backend-mods/installedmodinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstalledModInfo()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"bool Enabled { get; set; }"}</code> | True when the record is `manifest.json`, not `manifest.disabled.json`. |
| <Link id="m-record" /><code><Link to="/tavernlib-api/types/backend-mods/modrecord">{"ModRecord"}</Link>{" Record { get; set; }"}</code> | The mod's parsed record. |

## Used in

Members of other types that take, return or hold a `InstalledModInfo`:

[`ModInstaller.ScanMods`](/tavernlib-api/types/backend-mods/modinstaller#m-scanmods), [`ModReconciler.Pass._installed`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-installed).
