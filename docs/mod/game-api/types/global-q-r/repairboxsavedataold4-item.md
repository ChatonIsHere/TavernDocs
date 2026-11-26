---
title: "RepairBoxSaveDataOld4.Item"
description: "One required item in version 4 of the RepairBox save format, which added the simple server material flag."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxSaveDataOld4.Item

A **class** in `Root.Township`, the global namespace.

One required item in version 4 of the `RepairBox` save format, which added the simple server material flag. Migrated to `RepairBoxSaveData.Item` on load.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RepairBoxSaveDataOld4`](/mod/game-api/types/global-q-r/repairboxsavedataold4)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Item()"}</code> | Creates a `RepairBoxSaveDataOld4.Item` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"uint cost"}</code> | How many of the item the repair box needs. |
| <Link id="m-isignoringmaterialonsimpleserver" /><code>{"bool isIgnoringMaterialOnSimpleServer"}</code> | When set, the material rule is dropped on simple servers. |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | The item needed. |
| <Link id="m-physmat" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physMat"}</code> | Material the item must be made of when `usePhysMat` is set. |
| <Link id="m-usephysmat" /><code>{"bool usePhysMat"}</code> | Whether the item must be of `physMat`. |

## Used in

Members of other types that take, return or hold a `Item`:

[`RepairBoxSaveDataOld4.items`](/mod/game-api/types/global-q-r/repairboxsavedataold4#m-items).
