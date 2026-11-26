---
title: "PoweredRespawnShrineSaveData"
description: "Save data for a PoweredRespawnShrine: which shrine settings it uses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PoweredRespawnShrineSaveData

A **class** in `Root.Township`, `ATT.Respawn`.

Save data for a `PoweredRespawnShrine`: which shrine settings it uses.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<PoweredRespawnShrine, PoweredRespawnShrineSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PoweredRespawnShrine`](/game-api/types/game-other-namespaces/poweredrespawnshrine), [`PoweredRespawnShrineSaveData`](/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PoweredRespawnShrineSaveData()"}</code> | Creates a `PoweredRespawnShrineSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"string ShrineId"}</code> | Shrine GUID as a string. On load the shrine looks up its settings by this id. |

## Used in

Members of other types that take, return or hold a `PoweredRespawnShrineSaveData`:

[`PoweredRespawnShrine.Load`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-load), [`PoweredRespawnShrine.Save`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-save).
