---
title: "HeatPointCollection"
description: "The heat points on an entity, synced together as one block whenever any of them changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointCollection

A **class** in `Root.Township`, `Alta.Heat`.

The heat points on an entity, synced together as one block whenever any of them changes. See the heat guide.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ChildSyncableCollection<HeatPoint, HeatPointCollection, HeatPointCollectionSaveData, HeatPointCollectionSaveData.Element>`](/mod/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)
- **Derived types** [`HeatPointCollection`](/mod/game-api/types/alta-stats-effects/heatpointcollection), [`HeatPointCollectionSaveData`](/mod/game-api/types/global-e-h/heatpointcollectionsavedata)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointCollection()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stats for preparing to send.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stats for serializing.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isforcesending" /><code>{"private bool isForceSending"}</code> | <span className="api-desc">Set by `SyncAllChildren` so the next delta write sends even if no point changed.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsyncmessage" /><code>{"protected override bool IsUsingSyncMessage { get; }"}</code> | <span className="api-desc">False: heat points sync through regular entity serialization, not their own message.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Upper bound on the sync size: 22 bits per heat point plus 2.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Shared profiling timer for `PrepareForWrite`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Shared profiling timer for `Serialize`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertochildrenupdate" /><code>{"void DeRegisterToChildrenUpdate(Action<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> callBack)"}</code> | <span className="api-desc">Removes that callback from every heat point.</span> |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">True if a forced send is pending or any heat point needs syncing.</span> |
| <Link id="m-registertochildrenupdate" /><code>{"void RegisterToChildrenUpdate(Action<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> callBack, bool isCallingOnRegister = true)"}</code> | <span className="api-desc">Subscribes a callback to every heat point's change event, optionally calling it once for each now.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Disables every heat point.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads all heat points.</span> |
| <Link id="m-syncallchildren" /><code>{"override void SyncAllChildren()"}</code> | <span className="api-desc">Marks every heat point to be sent on the next pass.</span> |

## Used in

Members of other types that take, return or hold a `HeatPointCollection`:

<div className="api-used-in">

[`HeatModel<TG, TB, TA>.heatPointCollection`](/mod/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-heatpointcollection), [`MeltingModel.heatPointCollection`](/mod/game-api/types/alta-crafting/meltingmodel#m-heatpointcollection), [`HeatManager.collection`](/mod/game-api/types/alta-stats-effects/heatmanager#m-collection), [`HeatPointCollectionAreaFilter.avoidingDefault`](/mod/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-avoidingdefault), [`HeatPointCollectionAreaFilter.RegisterAvoiding`](/mod/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-registeravoiding), [`EmberComposer.HeatPointCollectionHandler.collection`](/mod/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-collection).

</div>
