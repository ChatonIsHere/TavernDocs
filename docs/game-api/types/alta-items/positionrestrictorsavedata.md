---
title: "PositionRestrictorSaveData"
description: "Save data for a PositionRestrictor (save version 3): the allowed area and the spawn point players are sent back to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRestrictorSaveData

A **class** in `Root.Township`, `Alta.Pages`.

Save data for a `PositionRestrictor` (save version 3): the allowed area and the spawn point players are sent back to.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<PositionRestrictor, PositionRestrictorSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PositionRestrictor`](/game-api/types/alta-items/positionrestrictor), [`PositionRestrictorSaveData`](/game-api/types/alta-items/positionrestrictorsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PositionRestrictorSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-autojumpbackboundsize" /><code>{"Vector3 autoJumpBackBoundSize"}</code> | Box size used for the automatic jump back when using bounds. |
| <Link id="m-autojumpbackradius" /><code>{"float autoJumpBackRadius"}</code> | Radius used for the automatic jump back when not using bounds. |
| <Link id="m-boundssize" /><code>{"Vector3 boundsSize"}</code> | Size of the allowed box when `isUsingBounds` is true. |
| <Link id="m-isusingbounds" /><code>{"bool isUsingBounds"}</code> | True to restrict to a box instead of a radius. |
| <Link id="m-radius" /><code>{"float radius"}</code> | Radius of the allowed area when not using bounds. |
| <Link id="m-spawnlocationposition" /><code>{"Vector3 spawnLocationPosition"}</code> | Position of the spawn location. |
| <Link id="m-spawnlocationrotation" /><code>{"Quaternion spawnLocationRotation"}</code> | Rotation of the spawn location. |
