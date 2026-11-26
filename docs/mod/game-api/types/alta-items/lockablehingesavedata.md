---
title: "LockableHingeSaveData"
description: "Save data for a LockableHinge: whether it has a lock and its state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LockableHingeSaveData

A **internal class** in `Root.Township`, `Alta.Inventory`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `LockableHinge`: whether it has a lock and its state.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LockableHinge, LockableHingeSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LockableHinge`](/mod/game-api/types/alta-items/lockablehinge), [`LockableHingeSaveData`](/mod/game-api/types/alta-items/lockablehingesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LockableHingeSaveData()"}</code> | Creates a `LockableHingeSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-haslock" /><code>{"bool hasLock"}</code> | Whether a lock is attached. |
| <Link id="m-isdetachable" /><code>{"bool isDetachable"}</code> | Whether the lock can be taken off. |
| <Link id="m-islocked" /><code>{"bool isLocked"}</code> | Whether the lock is locked. |
| <Link id="m-lockprefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" lockPrefab"}</code> | Prefab of the attached lock. |
