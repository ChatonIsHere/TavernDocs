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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<PositionRestrictor, PositionRestrictorSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PositionRestrictor`](/mod/game-api/types/alta-items/positionrestrictor), [`PositionRestrictorSaveData`](/mod/game-api/types/alta-items/positionrestrictorsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRestrictorSaveData()"}</code> | <span className="api-desc">Creates a `PositionRestrictorSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-autojumpbackboundsize" /><code>{"Vector3 autoJumpBackBoundSize"}</code> | <span className="api-desc">Box size used for the automatic jump back when using bounds.</span> |
| <Link id="m-autojumpbackradius" /><code>{"float autoJumpBackRadius"}</code> | <span className="api-desc">Radius used for the automatic jump back when not using bounds.</span> |
| <Link id="m-boundssize" /><code>{"Vector3 boundsSize"}</code> | <span className="api-desc">Size of the allowed box when `isUsingBounds` is true.</span> |
| <Link id="m-isusingbounds" /><code>{"bool isUsingBounds"}</code> | <span className="api-desc">True to restrict to a box instead of a radius.</span> |
| <Link id="m-radius" /><code>{"float radius"}</code> | <span className="api-desc">Radius of the allowed area when not using bounds.</span> |
| <Link id="m-spawnlocationposition" /><code>{"Vector3 spawnLocationPosition"}</code> | <span className="api-desc">Position of the spawn location.</span> |
| <Link id="m-spawnlocationrotation" /><code>{"Quaternion spawnLocationRotation"}</code> | <span className="api-desc">Rotation of the spawn location.</span> |
