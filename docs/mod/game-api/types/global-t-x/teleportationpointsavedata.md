---
title: "TeleportationPointSaveData"
description: "Save data for TeleportationPoint (version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportationPointSaveData

A **class** in `Root.Township`, the global namespace.

Save data for `TeleportationPoint` (version 1).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<TeleportationPoint, TeleportationPointSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TeleportationPoint`](/mod/game-api/types/global-t-x/teleportationpoint), [`TeleportationPointSaveData`](/mod/game-api/types/global-t-x/teleportationpointsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportationPointSaveData()"}</code> | <span className="api-desc">Creates a `TeleportationPointSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mode" /><code><Link to="/mod/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode"}</code> | <span className="api-desc">Saved teleport mode.</span> |
| <Link id="m-targetposition" /><code>{"Vector3 targetPosition"}</code> | <span className="api-desc">Saved target position, local to the teleportation point.</span> |
