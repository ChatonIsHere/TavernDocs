---
title: "GhostSnapSlotCollection"
description: "Synced, saved collection of GhostSnapSlot children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostSnapSlotCollection

A **class** in `Root.Township`, no namespace.

Synced, saved collection of `GhostSnapSlot` children. On server spawn it snaps child ghost snap objects into their slots.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`ChildSyncableCollection<GhostSnapSlot, GhostSnapSlotCollection, GhostSnapSlotCollectionSaveData, GhostSnapSlotCollectionSaveData.Element>`](/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata)
- **Derived types** [`GhostSnapSlotCollection`](/game-api/types/global-e-h/ghostsnapslotcollection), [`GhostSnapSlotCollectionSaveData`](/game-api/types/global-e-h/ghostsnapslotcollectionsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostSnapSlotCollection()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsyncmessage" /><code>{"protected override bool IsUsingSyncMessage { get; }"}</code> | Same as the base value. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: snaps each child `GhostSnapObject` into its parent slot; any that fail are detached and saved on their own. |
