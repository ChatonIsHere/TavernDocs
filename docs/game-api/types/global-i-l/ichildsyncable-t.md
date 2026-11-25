---
title: "IChildSyncable<T>"
description: "An element in a ChildSyncableCollectionBase that syncs as part of its parent entity rather than as its own entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChildSyncable&lt;T&gt;

An **interface** in `Root.Township`, no namespace.

An element in a `ChildSyncableCollectionBase` that syncs as part of its parent entity rather than as its own entity. The two-type version also saves and loads.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`ForgedPoint`](/game-api/types/alta-crafting/forgedpoint), [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`GhostSnapSlot`](/game-api/types/global-e-h/ghostsnapslot), [`IChildSyncable<T, TElementSaveData>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`WoodcutPointData`](/game-api/types/global-t-x/woodcutpointdata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The entity the collection belongs to. |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | Position of the element in its collection, used to address it in messages. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom(T other)"}</code> | Copies state from another element. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<T> collection)"}</code> | Called with the owning collection when set up. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: set-up with the entity's spawn data. |
| <Link id="m-isequal" /><code>{"bool IsEqual(T other)"}</code> | True if this matches another element's state. |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> | True when the element has changes to send. |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the element's state on a stream. |
