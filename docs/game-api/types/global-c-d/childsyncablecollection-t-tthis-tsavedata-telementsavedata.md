---
title: "ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData>"
description: "Base for a component that holds a list of small child elements (heat points, forged points, woodcut points, ghost snap slots) and syncs and saves them as one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChildSyncableCollection&lt;T, TThis, TSaveData, TElementSaveData&gt;

An **abstract class** in `Root.Township`, no namespace.

Base for a component that holds a list of small child elements (heat points, forged points, woodcut points, ghost snap slots) and syncs and saves them as one. Sends only changed children, or one value when all are the same.

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
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync messages and gives each child its entity, index and collection. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: passes the spawn data on to every child. |
| <Link id="m-serializetostream" /><code>{"void SerializeToStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads all children to a stream, optionally as a full sync. |
| <Link id="m-syncchild" /><code>{"override void SyncChild(T child)"}</code> | Sends one child's state to the chunk's players, if the collection uses sync messages. |
| <Link id="m-syncallchildren" /><code>{"private void SyncAllChildren("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncdifferent" /><code>{"private void SyncDifferent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncindividual" /><code>{"private void SyncIndividual("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint index)"}</code> |  |
| <Link id="m-syncsame" /><code>{"private void SyncSame("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
