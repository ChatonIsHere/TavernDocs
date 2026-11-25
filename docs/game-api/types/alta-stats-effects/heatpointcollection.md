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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ChildSyncableCollection<HeatPoint, HeatPointCollection, HeatPointCollectionSaveData, HeatPointCollectionSaveData.Element>`](/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)
- **Derived types** [`HeatPointCollection`](/game-api/types/alta-stats-effects/heatpointcollection), [`HeatPointCollectionSaveData`](/game-api/types/global-e-h/heatpointcollectionsavedata)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointCollection()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stats for preparing to send. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stats for serializing. |
| <Link id="m-isforcesending" /><code>{"private bool isForceSending"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |
| <Link id="m-isusingsyncmessage" /><code>{"protected override bool IsUsingSyncMessage { get; }"}</code> | False: heat points sync through regular entity serialization, not their own message. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertochildrenupdate" /><code>{"void DeRegisterToChildrenUpdate(Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> callBack)"}</code> | Removes that callback from every heat point. |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | True if a forced send is pending or any heat point needs syncing. |
| <Link id="m-registertochildrenupdate" /><code>{"void RegisterToChildrenUpdate(Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> callBack, bool isCallingOnRegister = true)"}</code> | Subscribes a callback to every heat point's change event, optionally calling it once for each now. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Disables every heat point. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads all heat points. |
| <Link id="m-syncallchildren" /><code>{"override void SyncAllChildren()"}</code> | Marks every heat point to be sent on the next pass. |

## Used in

Members of other types that take, return or hold a `HeatPointCollection`:

[`HeatModel<TG, TB, TA>.heatPointCollection`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-heatpointcollection), [`MeltingModel.heatPointCollection`](/game-api/types/alta-crafting/meltingmodel#m-heatpointcollection), [`HeatManager.collection`](/game-api/types/alta-stats-effects/heatmanager#m-collection), [`HeatPointCollectionAreaFilter.avoidingDefault`](/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-avoidingdefault), [`HeatPointCollectionAreaFilter.RegisterAvoiding`](/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-registeravoiding), [`EmberComposer.HeatPointCollectionHandler.collection`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-collection).
