---
title: "WayPointPathData"
description: "Save data for WayPointPath: its point positions and rotations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WayPointPathData

A **class** in `Root.Township`, no namespace.

Save data for `WayPointPath`: its point positions and rotations.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<WayPointPath, WayPointPathData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`WayPointPath`](/game-api/types/global-t-x/waypointpath), [`WayPointPathData`](/game-api/types/global-t-x/waypointpathdata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WayPointPathData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"Vector3[] positions"}</code> | Saved point positions. On load they're moved by the active chunk matrix if there is one. |
| <Link id="m-rotations" /><code>{"Quaternion[] rotations"}</code> | Saved point rotations. |
