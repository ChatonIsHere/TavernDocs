---
title: "RepairBoxSaveDataOld3.Item"
description: "One required item in version 3 of the RepairBox save format, which added the material filter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxSaveDataOld3.Item

A **class** in `Root.Township`, no namespace.

One required item in version 3 of the `RepairBox` save format, which added the material filter. Migrated to `RepairBoxSaveData.Item` on load.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RepairBoxSaveDataOld3`](/game-api/types/global-q-r/repairboxsavedataold3)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Item()"}</code> | Creates a `RepairBoxSaveDataOld3.Item` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"uint cost"}</code> | How many of the item the repair box needs. |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | The item needed. |
| <Link id="m-physmat" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physMat"}</code> | Material the item must be made of when `usePhysMat` is set. |
| <Link id="m-usephysmat" /><code>{"bool usePhysMat"}</code> | Whether the item must be of `physMat`. |

## Used in

Members of other types that take, return or hold a `Item`:

[`RepairBoxSaveDataOld3.items`](/game-api/types/global-q-r/repairboxsavedataold3#m-items).
