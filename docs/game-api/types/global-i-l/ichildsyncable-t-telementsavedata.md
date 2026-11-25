---
title: "IChildSyncable<T, TElementSaveData>"
description: "A child element of a ChildSyncableCollection that also saves and loads its own element data (for example HeatPoint and ForgedPoint)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChildSyncable&lt;T, TElementSaveData&gt;

An **interface** in `Root.Township`, no namespace.

A child element of a `ChildSyncableCollection` that also saves and loads its own element data (for example `HeatPoint` and `ForgedPoint`).

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`IChildSyncable<T>`](/game-api/types/global-i-l/ichildsyncable-t)
- **Derived types** [`ForgedPoint`](/game-api/types/alta-crafting/forgedpoint), [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`GhostSnapSlot`](/game-api/types/global-e-h/ghostsnapslot), [`WoodcutPointData`](/game-api/types/global-t-x/woodcutpointdata)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load(TElementSaveData data)"}</code> | Applies saved element data. |
| <Link id="m-save" /><code>{"TElementSaveData Save()"}</code> | Returns this element's save data. |
