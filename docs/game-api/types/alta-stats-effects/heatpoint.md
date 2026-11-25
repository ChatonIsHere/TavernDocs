---
title: "HeatPoint"
description: "Implements IHeatReceiver (and so IHeatSource). Usually several per item, held by a HeatPointCollection on the entity, which saves and syncs them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPoint

A **class** in `Root.Township`, `Alta.Heat`.

Implements `IHeatReceiver` (and so `IHeatSource`). Usually several per item, held by a `HeatPointCollection` on the entity, which saves and syncs them.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IChildSyncable<HeatPoint, HeatPointCollectionSaveData.Element>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<HeatPoint>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IHeatReceiver`](/game-api/types/alta-stats-effects/iheatreceiver), [`IHeatSource`](/game-api/types/alta-stats-effects/iheatsource), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`MeltingHeatPoint`](/game-api/types/alta-crafting/meltingheatpoint), [`MetalHeatPoint`](/game-api/types/alta-crafting/metalheatpoint), [`CookingPoint`](/game-api/types/alta-crafting/cookingpoint), [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`HeatPointCollection`](/game-api/types/alta-stats-effects/heatpointcollection), [`MovementHeatPoint`](/game-api/types/alta-stats-effects/movementheatpoint)
- **Nested types** [`Neighbour`](/game-api/types/alta-stats-effects/heatpoint-neighbour)
- **Documented in** [Heat](/game-api/game-systems/heat#heatpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPoint()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-armorconductivity" /><code>{"private float armorConductivity"}</code> |  |
| <Link id="m-basevolume" /><code>{"private float baseVolume"}</code> |  |
| <Link id="m-effectparent" /><code>{"private Transform effectParent"}</code> |  |
| <Link id="m-equipmentslot" /><code>{"private "}<Link to="/game-api/types/alta-items/equipmentreference">{"EquipmentReference"}</Link>{" equipmentSlot"}</code> |  |
| <Link id="m-haschangedsynclastsync" /><code>{"private bool hasChangedSyncLastSync"}</code> |  |
| <Link id="m-heatareapriorities" /><code>{"private List<int> heatAreaPriorities"}</code> |  |
| <Link id="m-internalconductivitymultiplier" /><code>{"protected float internalConductivityMultiplier"}</code> |  |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> |  |
| <Link id="m-neighbours" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint-neighbour">{"HeatPoint.Neighbour"}</Link>{"[] neighbours"}</code> |  |
| <Link id="m-positionhelper" /><code>{"private "}<Link to="/game-api/types/global-p/positionfromoriginhelper">{"PositionFromOriginHelper"}</Link>{" positionHelper"}</code> |  |
| <Link id="m-receiveconductivitymultiplier" /><code>{"protected float receiveConductivityMultiplier"}</code> |  |
| <Link id="m-sourceconductivitymultiplier" /><code>{"protected float sourceConductivityMultiplier"}</code> |  |
| <Link id="m-temperature" /><code>{"private float temperature"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambientchecker" /><code><Link to="/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" AmbientChecker { get; }"}</code> |  |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> |  |
| <Link id="m-globalconductivitymultiplier" /><code>{"static float GlobalConductivityMultiplier { get; set; }"}</code> |  |
| <Link id="m-highestpriorityheatarea" /><code>{"int HighestPriorityHeatArea { get; private set; }"}</code> |  |
| <Link id="m-internalenergy" /><code>{"float InternalEnergy { get; set; }"}</code> |  |
| <Link id="m-isambienttemperature" /><code>{"bool IsAmbientTemperature { get; private set; }"}</code> |  |
| <Link id="m-isconductionallowed" /><code>{"bool IsConductionAllowed { get; set; }"}</code> |  |
| <Link id="m-iscountedformelting" /><code>{"virtual bool IsCountedforMelting { get; }"}</code> |  |
| <Link id="m-isdisplayingtemperature" /><code>{"static bool IsDisplayingTemperature { get; set; }"}</code> |  |
| <Link id="m-isignoringambienceforced" /><code>{"bool IsIgnoringAmbienceForced { get; set; }"}</code> |  |
| <Link id="m-isignoringambient" /><code>{"bool IsIgnoringAmbient { get; set; }"}</code> |  |
| <Link id="m-positionhelper-2" /><code><Link to="/game-api/types/global-p/positionfromoriginhandler">{"PositionFromOriginHandler"}</Link>{" PositionHelper { get; private set; }"}</code> |  |
| <Link id="m-receiveconductivitymultiplier-2" /><code>{"virtual float ReceiveConductivityMultiplier { get; }"}</code> |  |
| <Link id="m-sourceconductivitymultiplier-2" /><code>{"virtual float SourceConductivityMultiplier { get; }"}</code> |  |
| <Link id="m-temperature-2" /><code>{"float Temperature { get; set; }"}</code> |  |
| <Link id="m-volume" /><code>{"float Volume { get; set; }"}</code> |  |
| <Link id="m-activeeffect" /><code>{"protected "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" ActiveEffect { get; private set; }"}</code> |  |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |
| <Link id="m-internalconductivitymultiplier-2" /><code>{"protected virtual float InternalConductivityMultiplier { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> Changed"}</code> |  |
| <Link id="m-temperaturemodifier" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/temperaturemodifier">{"TemperatureModifier"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/temperaturemodifier">{"TemperatureModifier"}</Link></code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conduct" /><code>{"void Conduct(float temperature, bool isIgnoringAmbient, float weight = 1)"}</code> |  |
| <Link id="m-conductto" /><code>{"void ConductTo("}<Link to="/game-api/types/alta-stats-effects/iheatreceiver">{"IHeatReceiver"}</Link>{" receiver, bool isSource, bool isIgnoringAmbient = false, float weight = 1)"}</code> |  |
| <Link id="m-conducttoambient" /><code>{"virtual void ConductToAmbient(float weight = 1)"}</code> |  |
| <Link id="m-copyfrom" /><code>{"void CopyFrom("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" other)"}</code> |  |
| <Link id="m-deregisterheatareapriority" /><code>{"void DeregisterHeatAreaPriority(int heatAreaPriority)"}</code> |  |
| <Link id="m-forcetemperature" /><code>{"void ForceTemperature(float temperature)"}</code> |  |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> collection)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-isequal" /><code>{"bool IsEqual("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" other)"}</code> |  |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> |  |
| <Link id="m-registerheatareapriority" /><code>{"void RegisterHeatAreaPriority(int heatAreaPriority)"}</code> |  |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-addeffect" /><code>{"protected void AddEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-checkambientchange" /><code>{"private void CheckAmbientChange()"}</code> |  |
| <Link id="m-checkenable" /><code>{"private void CheckEnable()"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-euipmentchanged" /><code>{"private void EuipmentChanged("}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" definition)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-neighbourchanged" /><code>{"private void NeighbourChanged("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" neighbour)"}</code> |  |
| <Link id="m-nonambientchanged" /><code>{"protected virtual void NonAmbientChanged()"}</code> |  |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-releaseeffect" /><code>{"private void ReleaseEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-removeeffect" /><code>{"protected void RemoveEffect()"}</code> |  |
| <Link id="m-resettoambient" /><code>{"protected virtual void ResetToAmbient()"}</code> |  |
| <Link id="m-showeffects" /><code>{"protected virtual void ShowEffects()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HeatPoint`:

[`MetalHeatPoint.ForwardChanged`](/game-api/types/alta-crafting/metalheatpoint#m-forwardchanged), [`Recycler.AddedHeatPoint`](/game-api/types/alta-crafting/recycler#m-addedheatpoint), [`Recycler.RemovedHeatPoint`](/game-api/types/alta-crafting/recycler#m-removedheatpoint), [`Recycler.MeltingModelReference.AffectingHeatPoints`](/game-api/types/alta-crafting/recycler-meltingmodelreference#m-affectingheatpoints), [`Cookable.CheckEnable`](/game-api/types/alta-crafting/cookable#m-checkenable), [`CookingLiquid.HeatPoint`](/game-api/types/alta-crafting/cookingliquid#m-heatpoint), [`CookingLiquid.UpdateWaterBoilingEffects`](/game-api/types/alta-crafting/cookingliquid#m-updatewaterboilingeffects), [`LiquidChunkVisuals.heatPoint`](/game-api/types/alta-crafting/liquidchunkvisuals#m-heatpoint), [`LiquidChunkVisuals.UpdateTemperature`](/game-api/types/alta-crafting/liquidchunkvisuals#m-updatetemperature), [`StewComponent.CookingPoint`](/game-api/types/alta-crafting/stewcomponent#m-cookingpoint), [`CylinderHeatArea.GetTemperatureMultiplier`](/game-api/types/alta-stats-effects/cylinderheatarea#m-gettemperaturemultiplier), [`HeatArea.AddedHeatPoint`](/game-api/types/alta-stats-effects/heatarea#m-addedheatpoint), [`HeatArea.affectingPoints`](/game-api/types/alta-stats-effects/heatarea#m-affectingpoints), [`HeatArea.BaseHeatPointUpdate`](/game-api/types/alta-stats-effects/heatarea#m-baseheatpointupdate), [`HeatArea.ConductToHeatPoint`](/game-api/types/alta-stats-effects/heatarea#m-conducttoheatpoint), [`HeatArea.DeregisterHeatPoint`](/game-api/types/alta-stats-effects/heatarea#m-deregisterheatpoint), [`HeatArea.DeregisterHeatPointExternal`](/game-api/types/alta-stats-effects/heatarea#m-deregisterheatpointexternal), [`HeatArea.externallyRegisteredHeatPoints`](/game-api/types/alta-stats-effects/heatarea#m-externallyregisteredheatpoints), [`HeatArea.GetTemperatureMultiplier`](/game-api/types/alta-stats-effects/heatarea#m-gettemperaturemultiplier), [`HeatArea.RegisterHeatPoint`](/game-api/types/alta-stats-effects/heatarea#m-registerheatpoint), [`HeatArea.RegisterHeatPointExternal`](/game-api/types/alta-stats-effects/heatarea#m-registerheatpointexternal), [`HeatArea.RemovedHeatPoint`](/game-api/types/alta-stats-effects/heatarea#m-removedheatpoint), [`HeatArea.UpdateHeatPoint`](/game-api/types/alta-stats-effects/heatarea#m-updateheatpoint), [`HeatArea.UpdateHeatPointTemperature`](/game-api/types/alta-stats-effects/heatarea#m-updateheatpointtemperature), [`HeatArea.PointFilterDelegate.BeginInvoke`](/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate#m-begininvoke), [`HeatArea.PointFilterDelegate.Invoke`](/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate#m-invoke), [`HeatAreaModifier.GetTemperatureMultiplier`](/game-api/types/alta-stats-effects/heatareamodifier#m-gettemperaturemultiplier), [`HeatManager.HeatPointDamageLevel.HeatPointDamageLevel`](/game-api/types/alta-stats-effects/heatmanager-heatpointdamagelevel#m-ctor), [`HeatManager.HeatPointDamageLevel.UpdateTemperature`](/game-api/types/alta-stats-effects/heatmanager-heatpointdamagelevel#m-updatetemperature), [`HeatPoint.Neighbour.point`](/game-api/types/alta-stats-effects/heatpoint-neighbour#m-point), [`HeatPoint.Neighbour.Point`](/game-api/types/alta-stats-effects/heatpoint-neighbour#m-point-2), [`HeatPointCollection.DeRegisterToChildrenUpdate`](/game-api/types/alta-stats-effects/heatpointcollection#m-deregistertochildrenupdate), [`HeatPointCollection.RegisterToChildrenUpdate`](/game-api/types/alta-stats-effects/heatpointcollection#m-registertochildrenupdate), [`HeatPointCollectionAreaFilter.avoiding`](/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-avoiding), [`HeatPointCollectionAreaFilter.PointFilter`](/game-api/types/alta-stats-effects/heatpointcollectionareafilter#m-pointfilter), [`HeatPointToHeatAreaLink.pointToGetTemperatureFrom`](/game-api/types/alta-stats-effects/heatpointtoheatarealink#m-pointtogettemperaturefrom), [`HeatPointToHeatAreaLink.UpdateTargetTemperatureOfHeatArea`](/game-api/types/alta-stats-effects/heatpointtoheatarealink#m-updatetargettemperatureofheatarea), [`HeatSourceBase.attachedHeatPoint`](/game-api/types/alta-stats-effects/heatsourcebase#m-attachedheatpoint), [`HeatSourceBase.UpdateHeat`](/game-api/types/alta-stats-effects/heatsourcebase#m-updateheat), [`LinearHeatArea.GetTemperatureMultiplier`](/game-api/types/alta-stats-effects/linearheatarea#m-gettemperaturemultiplier), [`RadiusHeatArea.GetTemperatureMultiplier`](/game-api/types/alta-stats-effects/radiusheatarea#m-gettemperaturemultiplier), [`TemperatureToMaterial.heatPoint`](/game-api/types/alta-stats-effects/temperaturetomaterial#m-heatpoint), [`TemperatureToMaterial.UpdateValue`](/game-api/types/alta-stats-effects/temperaturetomaterial#m-updatevalue), [`LiquidHeatAreaController.heatPointToSetVolumeOff`](/game-api/types/alta-stats-effects/liquidheatareacontroller#m-heatpointtosetvolumeoff), [`EmberComposer.HeatPointCollectionHandler.closestHeatPoint`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-closestheatpoint), [`EmberComposer.HeatPointCollectionHandler.HeatPoints`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-heatpoints), [`PlayerEffectManager.heatPointStatus`](/game-api/types/global-p/playereffectmanager#m-heatpointstatus), [`PlayerEffectManager.EffectPointStatus.UpdateTemperature`](/game-api/types/global-p/playereffectmanager-effectpointstatus#m-updatetemperature), [`PlayerEffectManager.EffectPosition.targetPoint`](/game-api/types/global-p/playereffectmanager-effectposition#m-targetpoint), [`PlayerEffectManager.EffectPosition.TargetPoint`](/game-api/types/global-p/playereffectmanager-effectposition#m-targetpoint-2).
