---
title: "RepairBoxSaveData.Item"
description: "Saved settings for one required item slot of a RepairBox."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxSaveData.Item

A **class** in `Root.Township`, the global namespace.

Saved settings for one required item slot of a `RepairBox`.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RepairBoxSaveData`](/mod/game-api/types/global-q-r/repairboxsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Item()"}</code> | Creates a `RepairBoxSaveData.Item` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"uint cost"}</code> | How many of the item the slot needs. |
| <Link id="m-isignoringmaterialonsimpleserver" /><code>{"bool isIgnoringMaterialOnSimpleServer"}</code> | If true, the slot doesn't enforce `physMat` even when `usePhysMat` is set. |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | The item type required. |
| <Link id="m-physmat" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physMat"}</code> | Physical material the item must be made of, when `usePhysMat` is set. |
| <Link id="m-usephysmat" /><code>{"bool usePhysMat"}</code> | Whether the slot also checks the item's physical material. |

## Used in

Members of other types that take, return or hold a `Item`:

[`RepairBoxSaveData.items`](/mod/game-api/types/global-q-r/repairboxsavedata#m-items), [`RepairBoxSaveDataOld.items`](/mod/game-api/types/global-q-r/repairboxsavedataold#m-items).
