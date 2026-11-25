---
title: "ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData>"
description: "abstract class ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildSyncableCollection&lt;T, TThis, TSaveData, TElementSaveData&gt;

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`ChildSyncableCollectionBase<T>`](/game-api/types/global-c-d/childsyncablecollectionbase-t), [`ISavable<TSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ForgedPointCollection`](/game-api/types/alta-crafting/forgedpointcollection), [`HeatPointCollection`](/game-api/types/alta-stats-effects/heatpointcollection), [`GhostSnapSlotCollection`](/game-api/types/global-e-h/ghostsnapslotcollection), [`WoodcutPointCollection`](/game-api/types/global-t-x/woodcutpointcollection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ChildSyncableCollection()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-serializetostream" /><code>{"void SerializeToStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-syncchild" /><code>{"override void SyncChild(T child)"}</code> |  |
| <Link id="m-syncallchildren" /><code>{"private void SyncAllChildren("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncdifferent" /><code>{"private void SyncDifferent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncindividual" /><code>{"private void SyncIndividual("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint index)"}</code> |  |
| <Link id="m-syncsame" /><code>{"private void SyncSame("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
