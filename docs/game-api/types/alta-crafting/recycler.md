---
title: "Recycler"
description: "Pump its bellows (PumpingMechanism) and it burns fuel from its fuel dock and raises its HeatArea's target temperature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Recycler

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Pump its bellows (`PumpingMechanism`) and it burns fuel from its fuel dock and raises its `HeatArea`'s target temperature.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RecyclerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RecyclerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RecyclerSaveData`](/game-api/types/alta-crafting/recyclersavedata)
- **Nested types** [`MeltingModelReference`](/game-api/types/alta-crafting/recycler-meltingmodelreference)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#recycler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Recycler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-affecting" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> affecting"}</code> |  |
| <Link id="m-ambienttemperaturechecker" /><code>{"private "}<Link to="/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" ambientTemperatureChecker"}</code> |  |
| <Link id="m-bellows" /><code>{"private "}<Link to="/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{" bellows"}</code> |  |
| <Link id="m-bellowvaluetoconsumption" /><code>{"private AnimationCurve bellowValueToConsumption"}</code> |  |
| <Link id="m-bellowvaluetotemperature" /><code>{"private AnimationCurve bellowValueToTemperature"}</code> |  |
| <Link id="m-consumed" /><code>{"private float consumed"}</code> |  |
| <Link id="m-consumptionupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" consumptionUpdate"}</code> |  |
| <Link id="m-destroyed" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> destroyed"}</code> |  |
| <Link id="m-fuelddock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fueldDock"}</code> |  |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-meltingmodelsupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" meltingModelsUpdate"}</code> |  |
| <Link id="m-orderedslots" /><code>{"private "}<Link to="/game-api/types/alta-crafting/dynamicqueue-t">{"DynamicQueue"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{"> orderedSlots"}</code> |  |
| <Link id="m-readytomelt" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> readyToMelt"}</code> |  |
| <Link id="m-recycleefficiency" /><code>{"private float recycleEfficiency"}</code> |  |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{"[] slots"}</code> |  |
| <Link id="m-smeltingarea" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" smeltingArea"}</code> |  |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> |  |
| <Link id="m-syncoutputeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncOutputEffect"}</code> |  |
| <Link id="m-synctemperaturevalue" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncTemperatureValue"}</code> |  |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> |  |
| <Link id="m-temperaturevisuals" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturevisuals">{"TemperatureVisuals"}</Link>{" temperatureVisuals"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasfuel" /><code>{"bool HasFuel { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-addedheatpoint" /><code>{"private void AddedHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" newHeatPoint)"}</code> |  |
| <Link id="m-bellowsfilter" /><code>{"private void BellowsFilter(ref bool isValid)"}</code> |  |
| <Link id="m-consumefuel" /><code>{"private void ConsumeFuel()"}</code> |  |
| <Link id="m-getslot" /><code>{"private "}<Link to="/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{" GetSlot("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-removedheatpoint" /><code>{"private void RemovedHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" oldHeatPoint)"}</code> |  |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncoutputeffect-2" /><code>{"private void SyncOutputEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> |  |
| <Link id="m-synctemperaturevalue-2" /><code>{"private void SyncTemperatureValue("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatedbellows" /><code>{"private void UpdatedBellows("}<Link to="/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{" bellows, float steadyValue)"}</code> |  |
| <Link id="m-updatemeltingmodels" /><code>{"private void UpdateMeltingModels()"}</code> |  |
