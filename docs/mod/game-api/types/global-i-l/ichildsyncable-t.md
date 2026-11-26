---
title: "IChildSyncable<T>"
description: "An element in a ChildSyncableCollectionBase that syncs as part of its parent entity rather than as its own entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChildSyncable&lt;T&gt;

An **interface** in `Root.Township`, the global namespace.

An element in a `ChildSyncableCollectionBase` that syncs as part of its parent entity rather than as its own entity. The two-type version also saves and loads.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`ForgedPoint`](/mod/game-api/types/alta-crafting/forgedpoint), [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint), [`GhostSnapSlot`](/mod/game-api/types/global-e-h/ghostsnapslot), [`IChildSyncable<T, TElementSaveData>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`WoodcutPointData`](/mod/game-api/types/global-t-x/woodcutpointdata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The entity the collection belongs to.</span> |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | <span className="api-desc">Position of the element in its collection, used to address it in messages.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom(T other)"}</code> | <span className="api-desc">Copies state from another element.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<T> collection)"}</code> | <span className="api-desc">Called with the owning collection when set up.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: set-up with the entity's spawn data.</span> |
| <Link id="m-isequal" /><code>{"bool IsEqual(T other)"}</code> | <span className="api-desc">True if this matches another element's state.</span> |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> | <span className="api-desc">True when the element has changes to send.</span> |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the element's state on a stream.</span> |
