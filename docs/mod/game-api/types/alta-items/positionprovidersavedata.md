---
title: "PositionProviderSaveData"
description: "Save data for PositionProvider, which sends its transform's position as a logic value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionProviderSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `PositionProvider`, which sends its transform's position as a logic value.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<PositionProvider, PositionProviderSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PositionProvider`](/mod/game-api/types/alta-items/positionprovider), [`PositionProviderSaveData`](/mod/game-api/types/alta-items/positionprovidersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionProviderSaveData()"}</code> | <span className="api-desc">Creates a `PositionProviderSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islocalposition" /><code>{"bool isLocalPosition"}</code> | <span className="api-desc">If true it sends the local position, otherwise the world position.</span> |
| <Link id="m-ismoving" /><code>{"bool isMoving"}</code> | <span className="api-desc">If true it keeps sending the position each update when the transform changes, not just once at start.</span> |
