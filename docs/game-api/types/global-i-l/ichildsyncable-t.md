---
title: "IChildSyncable<T>"
description: "interface IChildSyncable<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChildSyncable&lt;T&gt;

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`ForgedPoint`](/game-api/types/alta-crafting/forgedpoint), [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`GhostSnapSlot`](/game-api/types/global-e-h/ghostsnapslot), [`IChildSyncable<T, TElementSaveData>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`WoodcutPointData`](/game-api/types/global-t-x/woodcutpointdata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> |  |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom(T other)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<T> collection)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-isequal" /><code>{"bool IsEqual(T other)"}</code> |  |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> |  |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
