---
title: "ChildSyncableCollectionSaveData<TThis, TSavable, TData>"
description: "Save data for a ChildSyncableCollection: one saved element per child, in child order."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildSyncableCollectionSaveData&lt;TThis, TSavable, TData&gt;

A **class** in `Root.Township`, no namespace.

Save data for a `ChildSyncableCollection`: one saved element per child, in child order.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<TSavable, TThis>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RecyclerSaveData`](/game-api/types/alta-crafting/recyclersavedata), [`ForgedPointCollectionSaveData`](/game-api/types/global-e-h/forgedpointcollectionsavedata), [`GhostSnapSlotCollectionSaveData`](/game-api/types/global-e-h/ghostsnapslotcollectionsavedata), [`HeatPointCollectionSaveData`](/game-api/types/global-e-h/heatpointcollectionsavedata), [`WoodcutPointCollectionSaveData`](/game-api/types/global-t-x/woodcutpointcollectionsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChildSyncableCollectionSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-elements" /><code>{"TData[] elements"}</code> | Saved data for each child, by index. |
