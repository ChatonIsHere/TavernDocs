---
title: "HeatPointCollection"
description: "class HeatPointCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointCollection

A **class** in `Root.Township`, `Alta.Heat`.

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
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-isforcesending" /><code>{"private bool isForceSending"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |
| <Link id="m-isusingsyncmessage" /><code>{"protected override bool IsUsingSyncMessage { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertochildrenupdate" /><code>{"void DeRegisterToChildrenUpdate(Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> callBack)"}</code> |  |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-registertochildrenupdate" /><code>{"void RegisterToChildrenUpdate(Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> callBack, bool isCallingOnRegister = true)"}</code> |  |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-syncallchildren" /><code>{"override void SyncAllChildren()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HeatPointCollection`:

[`HeatModel<TG, TB, TA>.heatPointCollection`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-heatpointcollection), [`MeltingModel.heatPointCollection`](/game-api/types/alta-crafting/meltingmodel#m-heatpointcollection), [`HeatManager.collection`](/game-api/types/alta-stats-effects/heatmanager#m-collection), [`HeatPointCollectionAreaFilter.avoidingDefault`](/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-avoidingdefault), [`HeatPointCollectionAreaFilter.RegisterAvoiding`](/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-registeravoiding), [`EmberComposer.HeatPointCollectionHandler.collection`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-collection).
