---
title: "RepairBoxSaveDataOld2.ItemOld"
description: "One required item in version 2 of the RepairBox save format."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxSaveDataOld2.ItemOld

A **class** in `Root.Township`, no namespace.

One required item in version 2 of the `RepairBox` save format. Migrated to `RepairBoxSaveData.Item` on load.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RepairBoxSaveDataOld2`](/game-api/types/global-q-r/repairboxsavedataold2)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ItemOld()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"uint cost"}</code> | How many of the item the repair box needs. |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | The item needed. |

## Used in

Members of other types that take, return or hold a `ItemOld`:

[`RepairBoxSaveDataOld2.items`](/game-api/types/global-q-r/repairboxsavedataold2#m-items).
