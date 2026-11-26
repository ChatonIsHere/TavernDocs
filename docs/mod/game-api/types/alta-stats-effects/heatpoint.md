---
title: "HeatPoint"
description: "One point of temperature on an object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPoint

A **class** in `Root.Township`, `Alta.Heat`.

One point of temperature on an object. The server conducts heat between neighbouring points, heat areas and the ambient air every physics step and syncs the temperature to clients. A component on a prefab, usually under a heat point collection.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IChildSyncable<HeatPoint, HeatPointCollectionSaveData.Element>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<HeatPoint>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IHeatReceiver`](/mod/game-api/types/alta-stats-effects/iheatreceiver), [`IHeatSource`](/mod/game-api/types/alta-stats-effects/iheatsource), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`MeltingHeatPoint`](/mod/game-api/types/alta-crafting/meltingheatpoint), [`MetalHeatPoint`](/mod/game-api/types/alta-crafting/metalheatpoint), [`CookingPoint`](/mod/game-api/types/alta-crafting/cookingpoint), [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint), [`HeatPointCollection`](/mod/game-api/types/alta-stats-effects/heatpointcollection), [`MovementHeatPoint`](/mod/game-api/types/alta-stats-effects/movementheatpoint)
- **Nested types** [`Neighbour`](/mod/game-api/types/alta-stats-effects/heatpoint-neighbour)
- **Documented in** [Heat](/mod/game-api/game-systems/heat#heatpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPoint()"}</code> | Creates a `HeatPoint` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-internalconductivitymultiplier" /><code>{"protected float internalConductivityMultiplier"}</code> | Serialized base for internal conduction. `ConductTo` squares this raw field for same-entity points, skipping the global and armour multipliers. |
| <Link id="m-receiveconductivitymultiplier" /><code>{"protected float receiveConductivityMultiplier"}</code> | Serialized base for `ReceiveConductivityMultiplier`. |
| <Link id="m-sourceconductivitymultiplier" /><code>{"protected float sourceConductivityMultiplier"}</code> | Serialized base for `SourceConductivityMultiplier`. |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armorconductivity" /><code>{"private float armorConductivity"}</code> | Conductivity factor from equipped armour, multiplied into all three conductivity values (1 with no armour). |
| <Link id="m-basevolume" /><code>{"private float baseVolume"}</code> | Starting `Volume` set in `Awake`. More volume means more energy to heat or cool. |
| <Link id="m-effectparent" /><code>{"private Transform effectParent"}</code> | Transform that heat effects (like glowing) are spawned under. |
| <Link id="m-equipmentslot" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/equipmentreference">{"EquipmentReference"}</Link>{" equipmentSlot"}</code> | Optional equipment slot whose armour changes this point's conductivity. |
| <Link id="m-haschangedsynclastsync" /><code>{"private bool hasChangedSyncLastSync"}</code> | Server: true while the temperature has changed since the last `Sync`, read by `IsNeedingSync`. |
| <Link id="m-heatareapriorities" /><code>{"private List<int> heatAreaPriorities"}</code> | Priorities of the heat areas this point is inside, kept so `HighestPriorityHeatArea` can be recalculated on exit. |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> | Server: set when the temperature changes, so the next `FixedUpdate` runs `OnChanged`. |
| <Link id="m-neighbours" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint-neighbour">{"HeatPoint.Neighbour"}</Link>{"[] neighbours"}</code> | Other heat points this one conducts heat to every physics step, each with a distance multiplier. |
| <Link id="m-positionhelper" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionfromoriginhelper">{"PositionFromOriginHelper"}</Link>{" positionHelper"}</code> | Optional `PositionFromOriginHelper` used to build `PositionHelper`. |
| <Link id="m-temperature" /><code>{"private float temperature"}</code> | Backing field for `Temperature`. Saved and loaded directly; loaded values beyond 10000 or NaN reset to ambient. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambientchecker" /><code><Link to="/mod/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" AmbientChecker { get; }"}</code> | Works out the ambient temperature for the entity's position and whether a temperature counts as ambient. |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The network entity this point belongs to; set by its collection. |
| <Link id="m-globalconductivitymultiplier" /><code>{"static float GlobalConductivityMultiplier { get; set; }"}</code> | Static multiplier on all conduction, set by a settings console command. |
| <Link id="m-highestpriorityheatarea" /><code>{"int HighestPriorityHeatArea { get; private set; }"}</code> | Priority of the strongest heat area affecting this point, or -1 when none. Lower priority areas skip it. |
| <Link id="m-internalenergy" /><code>{"float InternalEnergy { get; set; }"}</code> | Temperature times volume. Conduction moves energy, so bigger points change temperature more slowly. |
| <Link id="m-isambienttemperature" /><code>{"bool IsAmbientTemperature { get; private set; }"}</code> | True when the temperature matches ambient. Ambient points with ambient neighbours disable themselves to save work. |
| <Link id="m-isconductionallowed" /><code>{"bool IsConductionAllowed { get; set; }"}</code> | When false this point's own energy is not changed by conduction. Heat sources turn it off while burning. |
| <Link id="m-iscountedformelting" /><code>{"virtual bool IsCountedforMelting { get; }"}</code> | Whether this point must reach `GlowingEnd` before a melting model counts as melted. |
| <Link id="m-isdisplayingtemperature" /><code>{"static bool IsDisplayingTemperature { get; set; }"}</code> | Static debug flag for showing temperatures. |
| <Link id="m-isignoringambienceforced" /><code>{"bool IsIgnoringAmbienceForced { get; set; }"}</code> | When true the point never conducts to ambient air. Set while embers or a burning heat source hold it. |
| <Link id="m-isignoringambient" /><code>{"bool IsIgnoringAmbient { get; set; }"}</code> | Skips ambient conduction for the next physics step; reset to `IsIgnoringAmbienceForced` after each step. |
| <Link id="m-positionhelper-2" /><code><Link to="/mod/game-api/types/global-p/positionfromoriginhandler">{"PositionFromOriginHandler"}</Link>{" PositionHelper { get; private set; }"}</code> | Gives the point's position relative to the world origin, used for ambient lookups. |
| <Link id="m-receiveconductivitymultiplier-2" /><code>{"virtual float ReceiveConductivityMultiplier { get; }"}</code> | Multiplier when this point takes heat, including the global multiplier and worn armour. |
| <Link id="m-sourceconductivitymultiplier-2" /><code>{"virtual float SourceConductivityMultiplier { get; }"}</code> | Multiplier when this point gives heat, including the global multiplier and worn armour. |
| <Link id="m-temperature-2" /><code>{"float Temperature { get; set; }"}</code> | Current temperature. Setting it runs `TemperatureModifier`, then on the server marks the entity for sync. |
| <Link id="m-volume" /><code>{"float Volume { get; set; }"}</code> | Heat capacity of the point. Starts at the serialized base volume. |
| <Link id="m-activeeffect" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" ActiveEffect { get; private set; }"}</code> | The pooled visual effect currently attached (glow, smoke and so on), or null. |
| <Link id="m-internalconductivitymultiplier-2" /><code>{"protected virtual float InternalConductivityMultiplier { get; }"}</code> | Conductivity between points on the same entity, including global and armour multipliers. Overridden by metal heat points. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Build bake order, always 0. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> Changed"}</code> | Raised when the temperature changes, including when it falls back to ambient. |
| <Link id="m-temperaturemodifier" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/temperaturemodifier">{"TemperatureModifier"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/temperaturemodifier">{"TemperatureModifier"}</Link></code> | Event that can change a temperature before it is stored (passed by ref). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conduct" /><code>{"void Conduct(float temperature, bool isIgnoringAmbient, float weight = 1)"}</code> | Server: moves this point toward a given temperature, scaled by weight, frame time and the receive or source multiplier. |
| <Link id="m-conductto" /><code>{"void ConductTo("}<Link to="/mod/game-api/types/alta-stats-effects/iheatreceiver">{"IHeatReceiver"}</Link>{" receiver, bool isSource, bool isIgnoringAmbient = false, float weight = 1)"}</code> | Exchanges heat energy with another receiver, limited so neither overshoots. Points on the same entity use the internal multiplier. |
| <Link id="m-conducttoambient" /><code>{"virtual void ConductToAmbient(float weight = 1)"}</code> | Conducts toward the ambient temperature and marks the point as ignoring ambient for this step. |
| <Link id="m-copyfrom" /><code>{"void CopyFrom("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" other)"}</code> | Sets this point's temperature to another point's. |
| <Link id="m-deregisterheatareapriority" /><code>{"void DeregisterHeatAreaPriority(int heatAreaPriority)"}</code> | Removes a heat area's priority when that area stops affecting this point. |
| <Link id="m-forcetemperature" /><code>{"void ForceTemperature(float temperature)"}</code> | Sets the temperature directly (through internal energy). |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/mod/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> collection)"}</code> | Hooks up neighbour and ambient change events on the server. On clients the component is disabled, so no conduction runs there. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: enables the point if it or a neighbour is away from ambient, and pushes the first change. |
| <Link id="m-isequal" /><code>{"bool IsEqual("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" other)"}</code> | True if another point's temperature is within 0.0001. |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> | True if the temperature changed since the last sync. |
| <Link id="m-registerheatareapriority" /><code>{"void RegisterHeatAreaPriority(int heatAreaPriority)"}</code> | Called by a heat area when it starts affecting this point; updates `HighestPriorityHeatArea`. |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the temperature (or just an is-ambient flag) for network sync. Clients apply the read value. |
| <Link id="m-addeffect" /><code>{"protected void AddEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect)"}</code> | Spawns a pooled effect under the effect parent if no effect is active yet. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Sets up the position helper, sets `Volume` to the base volume and listens for armour changes on the linked equipment slot. |
| <Link id="m-nonambientchanged" /><code>{"protected virtual void NonAmbientChanged()"}</code> | Called when the temperature changes while not ambient. Shows effects (not on headless servers) and raises `Changed`. |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Resets the temperature to ambient whenever the component is disabled. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Empty hook for subclasses. |
| <Link id="m-removeeffect" /><code>{"protected void RemoveEffect()"}</code> | Releases the active pooled effect, if any. |
| <Link id="m-resettoambient" /><code>{"protected virtual void ResetToAmbient()"}</code> | Called when the point returns to ambient: removes effects and raises `Changed`. |
| <Link id="m-showeffects" /><code>{"protected virtual void ShowEffects()"}</code> | Empty hook that subclasses use to show glow or particles for the current temperature. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build step that disables the component, so heat points start off until something enables them. |
| <Link id="m-checkambientchange" /><code>{"private void CheckAmbientChange()"}</code> | Server: rechecks whether the temperature counts as ambient and, if that changed, reruns `CheckEnable`. |
| <Link id="m-checkenable" /><code>{"private void CheckEnable()"}</code> | Enables the component while it or any neighbour is away from ambient temperature, otherwise disables it to save work. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Explicit `IBuildRendererBakeable` build step. Does nothing. |
| <Link id="m-euipmentchanged" /><code>{"private void EuipmentChanged("}<Link to="/mod/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" definition)"}</code> | Sets the armour conductivity factor from the armour put in the linked equipment slot (1 when it is emptied). |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Server: each physics step, conducts heat to every neighbour and to the ambient temperature, then raises change handling if needed. |
| <Link id="m-neighbourchanged" /><code>{"private void NeighbourChanged("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" neighbour)"}</code> | Server: wakes this point when a neighbour leaves ambient temperature, and sleeps it when both are ambient. |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> | Marks the entity's data as changed on the server, then shows heat effects or resets to ambient and raises `Changed`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws lines to each neighbour heat point. |
| <Link id="m-releaseeffect" /><code>{"private void ReleaseEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Removes the active heat effect when the entity is destroyed by the scene. |

</details>

## Used in

Members of other types that take, return or hold a `HeatPoint`:

[`MetalHeatPoint.ForwardChanged`](/mod/game-api/types/alta-crafting/metalheatpoint#m-forwardchanged), [`Recycler.AddedHeatPoint`](/mod/game-api/types/alta-crafting/recycler#m-addedheatpoint), [`Recycler.RemovedHeatPoint`](/mod/game-api/types/alta-crafting/recycler#m-removedheatpoint), [`Recycler.MeltingModelReference.AffectingHeatPoints`](/mod/game-api/types/alta-crafting/recycler-meltingmodelreference#m-affectingheatpoints), [`Cookable.CheckEnable`](/mod/game-api/types/alta-crafting/cookable#m-checkenable), [`CookingLiquid.HeatPoint`](/mod/game-api/types/alta-crafting/cookingliquid#m-heatpoint), [`CookingLiquid.UpdateWaterBoilingEffects`](/mod/game-api/types/alta-crafting/cookingliquid#m-updatewaterboilingeffects), [`LiquidChunkVisuals.heatPoint`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-heatpoint), [`LiquidChunkVisuals.UpdateTemperature`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-updatetemperature), [`StewComponent.CookingPoint`](/mod/game-api/types/alta-crafting/stewcomponent#m-cookingpoint), [`CylinderHeatArea.GetTemperatureMultiplier`](/mod/game-api/types/alta-stats-effects/cylinderheatarea#m-gettemperaturemultiplier), [`HeatArea.AddedHeatPoint`](/mod/game-api/types/alta-stats-effects/heatarea#m-addedheatpoint), [`HeatArea.affectingPoints`](/mod/game-api/types/alta-stats-effects/heatarea#m-affectingpoints), [`HeatArea.BaseHeatPointUpdate`](/mod/game-api/types/alta-stats-effects/heatarea#m-baseheatpointupdate), [`HeatArea.ConductToHeatPoint`](/mod/game-api/types/alta-stats-effects/heatarea#m-conducttoheatpoint), [`HeatArea.DeregisterHeatPoint`](/mod/game-api/types/alta-stats-effects/heatarea#m-deregisterheatpoint), [`HeatArea.DeregisterHeatPointExternal`](/mod/game-api/types/alta-stats-effects/heatarea#m-deregisterheatpointexternal), [`HeatArea.externallyRegisteredHeatPoints`](/mod/game-api/types/alta-stats-effects/heatarea#m-externallyregisteredheatpoints), [`HeatArea.GetTemperatureMultiplier`](/mod/game-api/types/alta-stats-effects/heatarea#m-gettemperaturemultiplier), [`HeatArea.RegisterHeatPoint`](/mod/game-api/types/alta-stats-effects/heatarea#m-registerheatpoint), [`HeatArea.RegisterHeatPointExternal`](/mod/game-api/types/alta-stats-effects/heatarea#m-registerheatpointexternal), [`HeatArea.RemovedHeatPoint`](/mod/game-api/types/alta-stats-effects/heatarea#m-removedheatpoint), [`HeatArea.UpdateHeatPoint`](/mod/game-api/types/alta-stats-effects/heatarea#m-updateheatpoint), [`HeatArea.UpdateHeatPointTemperature`](/mod/game-api/types/alta-stats-effects/heatarea#m-updateheatpointtemperature), [`HeatArea.PointFilterDelegate.BeginInvoke`](/mod/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate#m-begininvoke), [`HeatArea.PointFilterDelegate.Invoke`](/mod/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate#m-invoke), [`HeatAreaModifier.GetTemperatureMultiplier`](/mod/game-api/types/alta-stats-effects/heatareamodifier#m-gettemperaturemultiplier), [`HeatManager.HeatPointDamageLevel.HeatPointDamageLevel`](/mod/game-api/types/alta-stats-effects/heatmanager-heatpointdamagelevel#m-ctor), [`HeatManager.HeatPointDamageLevel.UpdateTemperature`](/mod/game-api/types/alta-stats-effects/heatmanager-heatpointdamagelevel#m-updatetemperature), [`HeatPoint.Neighbour.point`](/mod/game-api/types/alta-stats-effects/heatpoint-neighbour#m-point), [`HeatPoint.Neighbour.Point`](/mod/game-api/types/alta-stats-effects/heatpoint-neighbour#m-point-2), [`HeatPointCollection.DeRegisterToChildrenUpdate`](/mod/game-api/types/alta-stats-effects/heatpointcollection#m-deregistertochildrenupdate), [`HeatPointCollection.RegisterToChildrenUpdate`](/mod/game-api/types/alta-stats-effects/heatpointcollection#m-registertochildrenupdate), [`HeatPointCollectionAreaFilter.avoiding`](/mod/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-avoiding), [`HeatPointCollectionAreaFilter.PointFilter`](/mod/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-pointfilter), [`HeatPointToHeatAreaLink.pointToGetTemperatureFrom`](/mod/game-api/types/alta-stats-effects/heatpointtoheatarealink#m-pointtogettemperaturefrom), [`HeatPointToHeatAreaLink.UpdateTargetTemperatureOfHeatArea`](/mod/game-api/types/alta-stats-effects/heatpointtoheatarealink#m-updatetargettemperatureofheatarea), [`HeatSourceBase.attachedHeatPoint`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-attachedheatpoint), [`HeatSourceBase.UpdateHeat`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-updateheat), [`LinearHeatArea.GetTemperatureMultiplier`](/mod/game-api/types/alta-stats-effects/linearheatarea#m-gettemperaturemultiplier), [`RadiusHeatArea.GetTemperatureMultiplier`](/mod/game-api/types/alta-stats-effects/radiusheatarea#m-gettemperaturemultiplier), [`TemperatureToMaterial.heatPoint`](/mod/game-api/types/alta-stats-effects/temperaturetomaterial#m-heatpoint), [`TemperatureToMaterial.UpdateValue`](/mod/game-api/types/alta-stats-effects/temperaturetomaterial#m-updatevalue), [`LiquidHeatAreaController.heatPointToSetVolumeOff`](/mod/game-api/types/alta-stats-effects/liquidheatareacontroller#m-heatpointtosetvolumeoff), [`EmberComposer.HeatPointCollectionHandler.closestHeatPoint`](/mod/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-closestheatpoint), [`EmberComposer.HeatPointCollectionHandler.HeatPoints`](/mod/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-heatpoints), [`PlayerEffectManager.heatPointStatus`](/mod/game-api/types/global-p/playereffectmanager#m-heatpointstatus), [`PlayerEffectManager.EffectPointStatus.UpdateTemperature`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus#m-updatetemperature), [`PlayerEffectManager.EffectPosition.targetPoint`](/mod/game-api/types/global-p/playereffectmanager-effectposition#m-targetpoint), [`PlayerEffectManager.EffectPosition.TargetPoint`](/mod/game-api/types/global-p/playereffectmanager-effectposition#m-targetpoint-2).
