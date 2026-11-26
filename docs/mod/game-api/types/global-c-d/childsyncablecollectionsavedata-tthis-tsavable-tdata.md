---
title: "ChildSyncableCollectionSaveData<TThis, TSavable, TData>"
description: "Save data for a ChildSyncableCollection: one saved element per child, in child order."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildSyncableCollectionSaveData&lt;TThis, TSavable, TData&gt;

A **class** in `Root.Township`, the global namespace.

Save data for a `ChildSyncableCollection`: one saved element per child, in child order.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<TSavable, TThis>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RecyclerSaveData`](/mod/game-api/types/alta-crafting/recyclersavedata), [`ForgedPointCollectionSaveData`](/mod/game-api/types/global-e-h/forgedpointcollectionsavedata), [`GhostSnapSlotCollectionSaveData`](/mod/game-api/types/global-e-h/ghostsnapslotcollectionsavedata), [`HeatPointCollectionSaveData`](/mod/game-api/types/global-e-h/heatpointcollectionsavedata), [`WoodcutPointCollectionSaveData`](/mod/game-api/types/global-t-x/woodcutpointcollectionsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChildSyncableCollectionSaveData()"}</code> | <span className="api-desc">Creates a `ChildSyncableCollectionSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-elements" /><code>{"TData[] elements"}</code> | <span className="api-desc">Saved data for each child, by index.</span> |
