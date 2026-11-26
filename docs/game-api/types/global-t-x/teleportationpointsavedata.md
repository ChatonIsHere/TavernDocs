---
title: "TeleportationPointSaveData"
description: "Save data for TeleportationPoint (version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportationPointSaveData

A **class** in `Root.Township`, no namespace.

Save data for `TeleportationPoint` (version 1).

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<TeleportationPoint, TeleportationPointSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TeleportationPoint`](/game-api/types/global-t-x/teleportationpoint), [`TeleportationPointSaveData`](/game-api/types/global-t-x/teleportationpointsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportationPointSaveData()"}</code> | Creates a `TeleportationPointSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mode" /><code><Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode"}</code> | Saved teleport mode. |
| <Link id="m-targetposition" /><code>{"Vector3 targetPosition"}</code> | Saved target position, local to the teleportation point. |
