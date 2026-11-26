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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RecyclerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RecyclerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RecyclerSaveData`](/mod/game-api/types/alta-crafting/recyclersavedata)
- **Nested types** [`MeltingModelReference`](/mod/game-api/types/alta-crafting/recycler-meltingmodelreference)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging#recycler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Recycler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affecting" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> affecting"}</code> | <span className="api-desc">Items being heated in the smelting area, with the heat points they have inside it.</span> |
| <Link id="m-ambienttemperaturechecker" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" ambientTemperatureChecker"}</code> | <span className="api-desc">Reads the ambient temperature at the recycler. Server.</span> |
| <Link id="m-bellows" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{" bellows"}</code> | <span className="api-desc">The pumping mechanism that heats the recycler.</span> |
| <Link id="m-bellowvaluetoconsumption" /><code>{"private AnimationCurve bellowValueToConsumption"}</code> | <span className="api-desc">Curve from the bellows' steady value to fuel burned per second.</span> |
| <Link id="m-bellowvaluetotemperature" /><code>{"private AnimationCurve bellowValueToTemperature"}</code> | <span className="api-desc">Curve from the bellows' steady value to how far toward `targetTemperature` the area heats.</span> |
| <Link id="m-consumed" /><code>{"private float consumed"}</code> | <span className="api-desc">Fuel burned so far toward the next item taken from the fuel dock.</span> |
| <Link id="m-consumptionupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" consumptionUpdate"}</code> | <span className="api-desc">Handle for the registered `ConsumeFuel` method.</span> |
| <Link id="m-destroyed" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> destroyed"}</code> | <span className="api-desc">Scratch list of tracked items found destroyed during an update.</span> |
| <Link id="m-fuelddock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fueldDock"}</code> | <span className="api-desc">Dock holding the fuel.</span> |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | <span className="api-desc">True while fuel is burning.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-meltingmodelsupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" meltingModelsUpdate"}</code> | <span className="api-desc">Handle for the registered `UpdateMeltingModels` method.</span> |
| <Link id="m-orderedslots" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/dynamicqueue-t">{"DynamicQueue"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{"> orderedSlots"}</code> | <span className="api-desc">Output slots ordered by last use. Saved in this order.</span> |
| <Link id="m-readytomelt" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/recycler-meltingmodelreference">{"Recycler.MeltingModelReference"}</Link>{"> readyToMelt"}</code> | <span className="api-desc">Scratch list of tracked items ready to melt during an update.</span> |
| <Link id="m-recycleefficiency" /><code>{"private float recycleEfficiency"}</code> | <span className="api-desc">Share of an item's ingot value it gives back. Defaults to 0.6.</span> |
| <Link id="m-slots" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{"[] slots"}</code> | <span className="api-desc">The output slots that hold recycled material.</span> |
| <Link id="m-smeltingarea" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" smeltingArea"}</code> | <span className="api-desc">Heat area items are placed in to melt.</span> |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | <span className="api-desc">Method sync on `SyncA` for all slots and the temperature.</span> |
| <Link id="m-syncoutputeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncOutputEffect"}</code> | <span className="api-desc">Method sync on `EffectRequest` for one slot.</span> |
| <Link id="m-synctemperaturevalue" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncTemperatureValue"}</code> | <span className="api-desc">Method sync on `SyncB` for the temperature.</span> |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> | <span className="api-desc">Temperature the smelting area reaches at full bellows.</span> |
| <Link id="m-temperaturevisuals" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/temperaturevisuals">{"TemperatureVisuals"}</Link>{" temperatureVisuals"}</code> | <span className="api-desc">Visuals that show the current temperature on clients.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared late-update module for all recyclers.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasfuel" /><code>{"bool HasFuel { get; }"}</code> | <span className="api-desc">True while the fuel dock holds anything.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the syncs, hooks the bellows' pump filter and sets up each output slot.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Hooks the smelting area and bellows events and fills the slot order on the server.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends all slot contents and the temperature to a joining player.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedheatpoint" /><code>{"private void AddedHeatPoint("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" newHeatPoint)"}</code> | <span className="api-desc">Server: starts tracking an item when one of its heat points enters the smelting area, if it can melt.</span> |
| <Link id="m-bellowsfilter" /><code>{"private void BellowsFilter(ref bool isValid)"}</code> | <span className="api-desc">Blocks pumping the bellows while the fuel dock is empty.</span> |
| <Link id="m-consumefuel" /><code>{"private void ConsumeFuel()"}</code> | <span className="api-desc">Server update that burns fuel at a rate set by the bellows' steady value; stops when out of fuel or the bellows are idle.</span> |
| <Link id="m-getslot" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/recycleroutputslot">{"RecyclerOutputSlot"}</Link>{" GetSlot("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Picks the output slot for a material: one already holding it, else an empty one, else reuses the least recently used slot.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the melting and fuel updates.</span> |
| <Link id="m-removedheatpoint" /><code>{"private void RemovedHeatPoint("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" oldHeatPoint)"}</code> | <span className="api-desc">Server: stops tracking an item once none of its heat points are in the smelting area.</span> |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync for every output slot plus the temperature.</span> |
| <Link id="m-syncoutputeffect-2" /><code>{"private void SyncOutputEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> | <span className="api-desc">Method sync for one output slot's contents, by index.</span> |
| <Link id="m-synctemperaturevalue-2" /><code>{"private void SyncTemperatureValue("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync for the bellows' value and steady value. Clients update the temperature visuals.</span> |
| <Link id="m-updatedbellows" /><code>{"private void UpdatedBellows("}<Link to="/mod/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{" bellows, float steadyValue)"}</code> | <span className="api-desc">Server: sets the smelting area's target temperature from the bellows, lights the fuel burn and syncs the temperature.</span> |
| <Link id="m-updatemeltingmodels" /><code>{"private void UpdateMeltingModels()"}</code> | <span className="api-desc">Server update that melts tracked items at melting point (when the area is hot enough) into output slots.</span> |

</details>
