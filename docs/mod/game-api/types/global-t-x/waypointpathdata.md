---
title: "WayPointPathData"
description: "Save data for WayPointPath: its point positions and rotations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WayPointPathData

A **class** in `Root.Township`, the global namespace.

Save data for `WayPointPath`: its point positions and rotations.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<WayPointPath, WayPointPathData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`WayPointPath`](/mod/game-api/types/global-t-x/waypointpath), [`WayPointPathData`](/mod/game-api/types/global-t-x/waypointpathdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WayPointPathData()"}</code> | Creates a `WayPointPathData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"Vector3[] positions"}</code> | Saved point positions. On load they're moved by the active chunk matrix if there is one. |
| <Link id="m-rotations" /><code>{"Quaternion[] rotations"}</code> | Saved point rotations. |
