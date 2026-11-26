---
title: "IChildSyncable<T, TElementSaveData>"
description: "A child element of a ChildSyncableCollection that also saves and loads its own element data (for example HeatPoint and ForgedPoint)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChildSyncable&lt;T, TElementSaveData&gt;

An **interface** in `Root.Township`, the global namespace.

A child element of a `ChildSyncableCollection` that also saves and loads its own element data (for example `HeatPoint` and `ForgedPoint`).

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`IChildSyncable<T>`](/mod/game-api/types/global-i-l/ichildsyncable-t)
- **Derived types** [`ForgedPoint`](/mod/game-api/types/alta-crafting/forgedpoint), [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint), [`GhostSnapSlot`](/mod/game-api/types/global-e-h/ghostsnapslot), [`WoodcutPointData`](/mod/game-api/types/global-t-x/woodcutpointdata)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load(TElementSaveData data)"}</code> | Applies saved element data. |
| <Link id="m-save" /><code>{"TElementSaveData Save()"}</code> | Returns this element's save data. |
