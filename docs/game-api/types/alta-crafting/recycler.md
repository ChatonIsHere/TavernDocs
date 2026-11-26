---
title: "Recycler"
description: "Melts metal items back into material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Recycler

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Melts metal items back into material. Pumping the bellows with fuel heats its smelting area; items that reach melting point are destroyed and add 60% of their ingot value to an output slot. The server runs the melting.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RecyclerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RecyclerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RecyclerSaveData`](/game-api/types/alta-crafting/recyclersavedata)
- **Nested types** [`MeltingModelReference`](/game-api/types/alta-crafting/recycler-meltingmodelreference)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#recycler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Recycler()"}</code> |

## Fields

<details>
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affecting" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> affecting"}</code> | Items being heated in the smelting area, with the heat points they have inside it. |
| <Link id="m-ambienttemperaturechecker" /><code>{"private "}<Link to="/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" ambientTemperatureChecker"}</code> | Reads the ambient temperature at the recycler. Server. |
| <Link id="m-bellows" /><code>{"private "}<Link to="/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{" bellows"}</code> | The pumping mechanism that heats the recycler. |
| <Link id="m-bellowvaluetoconsumption" /><code>{"private AnimationCurve bellowValueToConsumption"}</code> | Curve from the bellows' steady value to fuel burned per second. |
| <Link id="m-bellowvaluetotemperature" /><code>{"private AnimationCurve bellowValueToTemperature"}</code> | Curve from the bellows' steady value to how far toward `targetTemperature` the area heats. |
| <Link id="m-consumed" /><code>{"private float consumed"}</code> | Fuel burned so far toward the next item taken from the fuel dock. |
| <Link id="m-consumptionupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" consumptionUpdate"}</code> | Handle for the registered `ConsumeFuel` method. |
| <Link id="m-destroyed" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> destroyed"}</code> | Scratch list of tracked items found destroyed during an update. |
| <Link id="m-fuelddock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fueldDock"}</code> | Dock holding the fuel. |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | True while fuel is burning. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-meltingmodelsupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" meltingModelsUpdate"}</code> | Handle for the registered `UpdateMeltingModels` method. |
| <Link id="m-orderedslots" /><code>{"private "}<Link to="/game-api/types/alta-crafting/dynamicqueue-t">{"DynamicQueue"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{"> orderedSlots"}</code> | Output slots ordered by last use. Saved in this order. |
| <Link id="m-readytomelt" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> readyToMelt"}</code> | Scratch list of tracked items ready to melt during an update. |
| <Link id="m-recycleefficiency" /><code>{"private float recycleEfficiency"}</code> | Share of an item's ingot value it gives back. Defaults to 0.6. |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{"[] slots"}</code> | The output slots that hold recycled material. |
| <Link id="m-smeltingarea" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" smeltingArea"}</code> | Heat area items are placed in to melt. |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | Method sync on `SyncA` for all slots and the temperature. |
| <Link id="m-syncoutputeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncOutputEffect"}</code> | Method sync on `EffectRequest` for one slot. |
| <Link id="m-synctemperaturevalue" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncTemperatureValue"}</code> | Method sync on `SyncB` for the temperature. |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> | Temperature the smelting area reaches at full bellows. |
| <Link id="m-temperaturevisuals" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturevisuals">{"TemperatureVisuals"}</Link>{" temperatureVisuals"}</code> | Visuals that show the current temperature on clients. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared late-update module for all recyclers. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasfuel" /><code>{"bool HasFuel { get; }"}</code> | True while the fuel dock holds anything. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the syncs, hooks the bellows' pump filter and sets up each output slot. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Hooks the smelting area and bellows events and fills the slot order on the server. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends all slot contents and the temperature to a joining player. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedheatpoint" /><code>{"private void AddedHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" newHeatPoint)"}</code> | Server: starts tracking an item when one of its heat points enters the smelting area, if it can melt. |
| <Link id="m-bellowsfilter" /><code>{"private void BellowsFilter(ref bool isValid)"}</code> | Blocks pumping the bellows while the fuel dock is empty. |
| <Link id="m-consumefuel" /><code>{"private void ConsumeFuel()"}</code> | Server update that burns fuel at a rate set by the bellows' steady value; stops when out of fuel or the bellows are idle. |
| <Link id="m-getslot" /><code>{"private "}<Link to="/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{" GetSlot("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Picks the output slot for a material: one already holding it, else an empty one, else reuses the least recently used slot. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the melting and fuel updates. |
| <Link id="m-removedheatpoint" /><code>{"private void RemovedHeatPoint("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" oldHeatPoint)"}</code> | Server: stops tracking an item once none of its heat points are in the smelting area. |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync for every output slot plus the temperature. |
| <Link id="m-syncoutputeffect-2" /><code>{"private void SyncOutputEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> | Method sync for one output slot's contents, by index. |
| <Link id="m-synctemperaturevalue-2" /><code>{"private void SyncTemperatureValue("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync for the bellows' value and steady value. Clients update the temperature visuals. |
| <Link id="m-updatedbellows" /><code>{"private void UpdatedBellows("}<Link to="/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{" bellows, float steadyValue)"}</code> | Server: sets the smelting area's target temperature from the bellows, lights the fuel burn and syncs the temperature. |
| <Link id="m-updatemeltingmodels" /><code>{"private void UpdateMeltingModels()"}</code> | Server update that melts tracked items at melting point (when the area is hot enough) into output slots. |

</details>
