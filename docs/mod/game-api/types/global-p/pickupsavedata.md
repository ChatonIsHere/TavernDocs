---
title: "PickupSaveData"
description: "Save format (version 2) for Pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupSaveData

A **class** in `Root.Township`, the global namespace.

Save format (version 2) for `Pickup`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<Pickup, PickupSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Pickup`](/mod/game-api/types/global-p/pickup), [`PickupSaveData`](/mod/game-api/types/global-p/pickupsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupSaveData()"}</code> | Creates a `PickupSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dockedmemory" /><code><Link to="/mod/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{"[] dockedMemory"}</code> | Grab point parameters remembered for the pickup's docking. Two entries after migrating from version 1. |
| <Link id="m-lastinteractorplayerid" /><code>{"int lastInteractorPlayerId"}</code> | User ID of the last player who held the pickup. |
