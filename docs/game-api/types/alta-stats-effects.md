---
title: "Stats, effects, heat and liquid"
description: "Types in Alta.StatSystem, Alta.Alchemy, Alta.Heat and Alta.Liquid."
sidebar_position: 8
---

# Stats, effects, heat and liquid

Types in Alta.StatSystem, Alta.Alchemy, Alta.Heat and Alta.Liquid. 185 types, 73 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Alchemy

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BreathableArea`](/game-api/types/alta-stats-effects/breathablearea) | class | `EffectArea` | 0 |  |
| [`BuildUpconcoctionEffect`](/game-api/types/alta-stats-effects/buildupconcoctioneffect) | abstract class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md) |
| [`BuildupTeleportEffect`](/game-api/types/alta-stats-effects/buildupteleporteffect) | class | `BuildUpconcoctionEffect` | 0 | [Effects](../game-systems/effects.md) |
| [`BurnEffect`](/game-api/types/alta-stats-effects/burneffect) | class | `EffectDefinition` | 0 | [Effects](../game-systems/effects.md): Positive strength starts adding to the `"burn"` stat every tick, negative stops it. |
| [`ChanceBasedEffectDefinition`](/game-api/types/alta-stats-effects/chancebasedeffectdefinition) | abstract class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md) |
| [`DamageOverTime`](/game-api/types/alta-stats-effects/damageovertime) | class | `DurationEffect<DamageOverTime>` | 3 |  |
| [`DurationEffect<T>`](/game-api/types/alta-stats-effects/durationeffect-t) | abstract class | `Effect` | 5 |  |
| [`Effect`](/game-api/types/alta-stats-effects/effect) | abstract class |  | 4 |  |
| [`EffectArea`](/game-api/types/alta-stats-effects/effectarea) | class | `MonoBehaviour` | 0 |  |
| [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition) | abstract class | `HashedGeneralValue<EffectDefinition>`, `IEffectDefinition` | 2 | [Effects](../game-systems/effects.md#effectdefinition): `Alta.Alchemy.EffectDefinition : HashedGeneralValue<EffectDefinition>`, abstract. Assets live under `Cooking/Effects`. |
| [`EffectDefinitionApplication`](/game-api/types/alta-stats-effects/effectdefinitionapplication) | class | `IEffectDefinition` | 9 | [Effects](../game-systems/effects.md#effectdefinitionapplication): An effect with a strength and an optional duration. |
| [`EffectEventHandler`](/game-api/types/alta-stats-effects/effecteventhandler) | delegate |  | 0 |  |
| [`EffectEventHandler<T>`](/game-api/types/alta-stats-effects/effecteventhandler-t) | delegate |  | 0 |  |
| [`EffectHandler`](/game-api/types/alta-stats-effects/effecthandler) | class | `MonoBehaviour` | 8 | [Effects](../game-systems/effects.md#effecthandler): On anything effects can reach. |
| [`EffectHandler.EffectOverTimeData`](/game-api/types/alta-stats-effects/effecthandler-effectovertimedata) | class |  | 3 |  |
| [`EffectHandler.TeleportType`](/game-api/types/alta-stats-effects/effecthandler-teleporttype) | enum |  | 3 |  |
| [`EffectVolumeTrigger`](/game-api/types/alta-stats-effects/effectvolumetrigger) | class | `VolumeTrigger` | 2 |  |
| [`EnvironmentalEffect<T>`](/game-api/types/alta-stats-effects/environmentaleffect-t) | abstract class | `DurationEffect<T>` | 4 |  |
| [`FireExtinguishingFluid`](/game-api/types/alta-stats-effects/fireextinguishingfluid) | class | `MonoBehaviour` | 0 | [Heat](../game-systems/heat.md) |
| [`IEffectDefinition`](/game-api/types/alta-stats-effects/ieffectdefinition) | interface |  | 1 |  |
| [`InateEffect`](/game-api/types/alta-stats-effects/inateeffect) | class | `EffectDefinition` | 0 | [Effects](../game-systems/effects.md) |
| [`PlayerEffectController`](/game-api/types/alta-stats-effects/playereffectcontroller) | class | `EffectHandler` | 3 |  |
| [`PoisonEffect`](/game-api/types/alta-stats-effects/poisoneffect) | class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md): Positive strength adds a poison stack, negative removes one. Needs `target.Health`. |
| [`RevealEffect`](/game-api/types/alta-stats-effects/revealeffect) | class | `EffectDefinition` | 0 | [Effects](../game-systems/effects.md): Raises the handler's `OnReveal`. |
| [`StatChangeEffect`](/game-api/types/alta-stats-effects/statchangeeffect) | class | `StatEffect` | 0 | [Effects](../game-systems/effects.md): Adds `strength` to the stat's `Base`. This is how food fills hunger and fullness. |
| [`StatEffect`](/game-api/types/alta-stats-effects/stateffect) | abstract class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md): Finds `StatToAffect` on the target's `StatManager` and calls `ModifyStat`. |
| [`StatMultiplierEffect`](/game-api/types/alta-stats-effects/statmultipliereffect) | class | `EffectDefinition` | 0 | [Effects](../game-systems/effects.md): Applies a timed `StatModifier` of its own `modifierValue`, lasting `strength` seconds. |
| [`StatMultiplierEffect.Create`](/game-api/types/alta-stats-effects/statmultipliereffect-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<StatMultiplierEffect>` | 0 |  |
| [`StatSetEffect`](/game-api/types/alta-stats-effects/statseteffect) | class | `StatEffect` | 0 | [Effects](../game-systems/effects.md): Sets the stat's `Base` to `strength`. |
| [`TeleportEffect`](/game-api/types/alta-stats-effects/teleporteffect) | class | `ChanceBasedEffectDefinition` | 0 | [Effects](../game-systems/effects.md): A `ChanceBasedEffectDefinition`: with chance `strength * chanceMultiplier`, teleports the target home or to a spawn area. |

## Alta.Heat

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`CylinderHeatArea`](/game-api/types/alta-stats-effects/cylinderheatarea) | class | `HeatAreaModifier` | 0 |  |
| [`EnergyBasedHeatSource`](/game-api/types/alta-stats-effects/energybasedheatsource) | class | `HeatSourceBase` | 0 | [Heat](../game-systems/heat.md): A `HeatSourceBase` whose `ConductToHeatPoint` adds nothing. Looks unfinished. |
| [`Fire`](/game-api/types/alta-stats-effects/fire) | class | `HeatSourceBase`, `IFlammable`, `IEntityReplaceHandler`, +3 more | 6 | [Heat](../game-systems/heat.md#fire), [Health and damage](../items/health-and-damage.md): Fires that use fuel (campfires, and the smelter's `innerFire`). |
| [`FireDissolve`](/game-api/types/alta-stats-effects/firedissolve) | class | `Fire`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| [`FireExtinguisher`](/game-api/types/alta-stats-effects/fireextinguisher) | class | `MonoBehaviour` | 0 | [Heat](../game-systems/heat.md) |
| [`FireLighter`](/game-api/types/alta-stats-effects/firelighter) | class | `MonoBehaviour` | 1 | [Heat](../game-systems/heat.md) |
| [`FireSaveData`](/game-api/types/alta-stats-effects/firesavedata) | internal class | `NewSaveData<Fire, FireSaveData>` | 1 |  |
| [`FireSaveData1`](/game-api/types/alta-stats-effects/firesavedata1) | internal class | `OldSaveData` | 2 |  |
| [`FireSettings`](/game-api/types/alta-stats-effects/firesettings) | class | `ScriptableObject` | 11 | [Heat](../game-systems/heat.md): Effects and timings for fire. |
| [`FireSettings.Create`](/game-api/types/alta-stats-effects/firesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<FireSettings>` | 0 |  |
| [`FireStatusRaycastCrafter`](/game-api/types/alta-stats-effects/firestatusraycastcrafter) | class | `RaycastCrafter` | 0 |  |
| [`FuelComparer`](/game-api/types/alta-stats-effects/fuelcomparer) | class | `IComparer<Fuel>` | 1 |  |
| [`HandShakeOffDetector`](/game-api/types/alta-stats-effects/handshakeoffdetector) | class | `NetworkEntityBehaviour` | 4 | [Heat](../game-systems/heat.md): A shake score for a hand, read by `MovementHeatPoint` (heat from moving). |
| [`HeatArea`](/game-api/types/alta-stats-effects/heatarea) | class | `NetworkEntityBehaviour` | 12 | [Heat](../game-systems/heat.md#heatarea): A trigger volume around a heat source (above a fire, inside a smelter or a pot's base). |
| [`HeatArea.PointFilterDelegate`](/game-api/types/alta-stats-effects/heatarea-pointfilterdelegate) | delegate |  | 0 |  |
| [`HeatAreaModifier`](/game-api/types/alta-stats-effects/heatareamodifier) | abstract class | `MonoBehaviour` | 0 |  |
| [`HeatManager`](/game-api/types/alta-stats-effects/heatmanager) | class | `MonoBehaviour` | 0 | [Heat](../game-systems/heat.md#heatmanager): Burns a body: it watches a `HeatPointCollection`'s points and, on the server, damages its `HealthObject` when they pass `burnDamageThreshold`, and lights it above `ignitionThreshold`. |
| [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint) | class | `MonoBehaviour`, `IChildSyncable<HeatPoint, HeatPointCollectionSaveData.Element>`, `IChildSyncable<HeatPoint>`, +4 more | 30 | [Heat](../game-systems/heat.md#heatpoint): Implements `IHeatReceiver` (and so `IHeatSource`). Usually several per item, held by a `HeatPointCollection` on the entity, which saves and syncs them. |
| [`HeatPoint.Neighbour`](/game-api/types/alta-stats-effects/heatpoint-neighbour) | class |  | 3 |  |
| [`HeatPointCollection`](/game-api/types/alta-stats-effects/heatpointcollection) | class | `ChildSyncableCollection<HeatPoint, HeatPointCollection, HeatPointCollectionSaveData, HeatPointCollectionSaveData.Element>`, `INetworkSerialized` | 8 |  |
| [`HeatPointCollectionAreaFilter`](/game-api/types/alta-stats-effects/heatpointcollectionareafilter) | class | `MonoBehaviour` | 1 |  |
| [`HeatPointTemperatureController`](/game-api/types/alta-stats-effects/heatpointtemperaturecontroller) | class | `MonoBehaviour` | 0 | [Heat](../game-systems/heat.md): Clamps a point between `minTemperature` and `maxTemperature` through its `TemperatureModifier`, on the server. |
| [`HeatPointToHeatAreaLink`](/game-api/types/alta-stats-effects/heatpointtoheatarealink) | class | `MonoBehaviour` | 0 |  |
| [`HeatSourceBase`](/game-api/types/alta-stats-effects/heatsourcebase) | class | `NetworkEntityBehaviour`, `ISavableFull<HeatSourceBaseSaveData>`, `ISavable<HeatSourceBaseSaveData>`, +3 more | 13 | [Heat](../game-systems/heat.md#heatsourcebase), [Update modules](../console-and-utilities/update-modules.md): Something that burns: it lights when its attached heat point passes `ignitionTemperature` (100 by default in code) and goes out when it drops below `putOutTemperature` (80). |
| [`HeatSourceBaseEventTriggers`](/game-api/types/alta-stats-effects/heatsourcebaseeventtriggers) | class | `MonoBehaviour` | 1 |  |
| [`HeatSourceBaseSaveData`](/game-api/types/alta-stats-effects/heatsourcebasesavedata) | internal class | `NewSaveData<HeatSourceBase, HeatSourceBaseSaveData>` | 3 |  |
| [`HeatSourceBaseSaveData1`](/game-api/types/alta-stats-effects/heatsourcebasesavedata1) | internal class | `OldSaveData` | 4 |  |
| [`IFlammable`](/game-api/types/alta-stats-effects/iflammable) | interface |  | 2 |  |
| [`IHeatReceiver`](/game-api/types/alta-stats-effects/iheatreceiver) | interface | `IHeatSource` | 5 |  |
| [`IHeatSource`](/game-api/types/alta-stats-effects/iheatsource) | interface |  | 5 |  |
| [`LinearHeatArea`](/game-api/types/alta-stats-effects/linearheatarea) | class | `HeatAreaModifier` | 0 |  |
| [`MovementHeatPoint`](/game-api/types/alta-stats-effects/movementheatpoint) | class | `HeatPoint` | 1 |  |
| [`RadiusHeatArea`](/game-api/types/alta-stats-effects/radiusheatarea) | class | `HeatAreaModifier` | 0 |  |
| [`TemperatureModifier`](/game-api/types/alta-stats-effects/temperaturemodifier) | delegate |  | 0 |  |
| [`TemperatureToMaterial`](/game-api/types/alta-stats-effects/temperaturetomaterial) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 | [Heat](../game-systems/heat.md): Glow and colour from temperature. Client visuals. |

## Alta.Liquid

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BoilingParticles`](/game-api/types/alta-stats-effects/boilingparticles) | class | `PooledObject` | 5 |  |
| [`BoilingParticlesMaterialCreator`](/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator) | class | `MaterialCreator<LiquidVisualData>` | 3 |  |
| [`BottledLiquid`](/game-api/types/alta-stats-effects/bottledliquid) | class | `LiquidSurfaceVisual` | 0 |  |
| [`BottleLiquidMaterialCreator`](/game-api/types/alta-stats-effects/bottleliquidmaterialcreator) | class | `MaterialCreator<LiquidVisualData>` | 5 |  |
| [`ContainerLiquidReceiver`](/game-api/types/alta-stats-effects/containerliquidreceiver) | class | `MonoBehaviour` | 1 |  |
| [`FixedPouringStrengthController`](/game-api/types/alta-stats-effects/fixedpouringstrengthcontroller) | class | `PouringStrengthController` | 2 |  |
| [`GlobalLiquidContainer`](/game-api/types/alta-stats-effects/globalliquidcontainer) | class | `LiquidContainer` | 4 |  |
| [`ILiquidContainer`](/game-api/types/alta-stats-effects/iliquidcontainer) | interface |  | 22 | [Liquids](../game-systems/liquids.md#iliquidcontainer): Implemented by `LiquidContainer` (the usual one, a network entity), `StaticLiquidContainer` (a plain `MonoBehaviour` one, probably for fixed bodies of water) and whatever the drinking mouth carries. |
| [`ILiquidContainerInternal`](/game-api/types/alta-stats-effects/iliquidcontainerinternal) | interface |  | 6 |  |
| [`ILiquidParticlesMarker`](/game-api/types/alta-stats-effects/iliquidparticlesmarker) | internal interface |  | 1 |  |
| [`ILiquidTransitionController`](/game-api/types/alta-stats-effects/iliquidtransitioncontroller) | interface |  | 0 |  |
| [`IPourableContainer`](/game-api/types/alta-stats-effects/ipourablecontainer) | interface |  | 4 | [Liquids](../game-systems/liquids.md) |
| [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer) | class | `GeneratedNetworkEntityBehaviour`, `ILiquidContainer`, `ILiquidContainerInternal`, +6 more | 24 |  |
| [`LiquidContainerAmountChangedHandler`](/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler) | delegate |  | 0 |  |
| [`LiquidContainerHandler`](/game-api/types/alta-stats-effects/liquidcontainerhandler) | delegate |  | 0 |  |
| [`LiquidContainerLid`](/game-api/types/alta-stats-effects/liquidcontainerlid) | class | `NetworkEntityBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 9 | [Liquids](../game-systems/liquids.md): A lid that opens and closes a container. |
| [`LiquidContainerSaveData`](/game-api/types/alta-stats-effects/liquidcontainersavedata) | class | `NewSaveData<LiquidContainer, LiquidContainerSaveData>` | 7 |  |
| [`LiquidContainerSaveData.CustomData`](/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata) | class |  | 5 |  |
| [`LiquidContainerSaveData.Effect`](/game-api/types/alta-stats-effects/liquidcontainersavedata-effect) | class |  | 2 |  |
| [`LiquidContainerTrigger`](/game-api/types/alta-stats-effects/liquidcontainertrigger) | class | `MonoBehaviour` | 2 | [Liquids](../game-systems/liquids.md#dipping-liquidcontainertrigger) |
| [`LiquidContent`](/game-api/types/alta-stats-effects/liquidcontent) | class |  | 8 | [Liquids](../game-systems/liquids.md#liquiddefinition-liquidcontent-and-liquiddata): What's in a container: `LiquidDefinition Liquid`, `LiquidData Data`, `bool IsCustom`. Stews are custom content with their own data. |
| [`LiquidData`](/game-api/types/alta-stats-effects/liquiddata) | class |  | 19 | [Liquids](../game-systems/liquids.md#liquiddefinition-liquidcontent-and-liquiddata): `[Serializable]` class: `Effects` (`EffectDefinitionApplication`s), `ColorTint`, `LiquidVisual`, `ChunkVisuals`, `CookablesUsed`, `IsConsumableThroughSkin`. |
| [`LiquidDataEventHandler`](/game-api/types/alta-stats-effects/liquiddataeventhandler) | delegate |  | 0 |  |
| [`LiquidDefinition`](/game-api/types/alta-stats-effects/liquiddefinition) | class | `HashedGeneralValue<LiquidDefinition>` | 2 | [Liquids](../game-systems/liquids.md#liquiddefinition-liquidcontent-and-liquiddata): `HashedGeneralValue<LiquidDefinition>` asset under `Cooking/Liquids`: a named liquid (water, a potion). `LiquidData Data`, `LiquidContent GetAsLiquidContent()` (cached). |
| [`LiquidFillFilter`](/game-api/types/alta-stats-effects/liquidfillfilter) | delegate |  | 0 |  |
| [`LiquidFoamMaterialCreator`](/game-api/types/alta-stats-effects/liquidfoammaterialcreator) | class | `MaterialCreator<LiquidVisualData>` | 1 |  |
| [`LiquidGravity`](/game-api/types/alta-stats-effects/liquidgravity) | class |  | 14 |  |
| [`LiquidGravityAdjustment`](/game-api/types/alta-stats-effects/liquidgravityadjustment) | static class |  | 1 |  |
| [`LiquidHeatAreaController`](/game-api/types/alta-stats-effects/liquidheatareacontroller) | class | `MonoBehaviour` | 0 | [Liquids](../game-systems/liquids.md): Links a container's liquid to a heat area and heat point. |
| [`LiquidParticleMarker`](/game-api/types/alta-stats-effects/liquidparticlemarker) | class | `MonoBehaviour`, `ILiquidParticlesMarker` | 1 |  |
| [`LiquidPouringMaterialCreator`](/game-api/types/alta-stats-effects/liquidpouringmaterialcreator) | class | `MaterialCreator<LiquidVisualData>` | 3 |  |
| [`LiquidPouringParticlesMarker`](/game-api/types/alta-stats-effects/liquidpouringparticlesmarker) | class | `MonoBehaviour`, `ILiquidParticlesMarker` | 3 |  |
| [`LiquidSettings`](/game-api/types/alta-stats-effects/liquidsettings) | class | `GlobalSettings<LiquidSettings>` | 4 | [Liquids](../game-systems/liquids.md): `GlobalSettings`: transition speed, splash and pouring particles, `DebugWaterConcoction`. |
| [`LiquidSettings.Create`](/game-api/types/alta-stats-effects/liquidsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<LiquidSettings>` | 0 |  |
| [`LiquidStencilShaderController`](/game-api/types/alta-stats-effects/liquidstencilshadercontroller) | class | `MonoBehaviour` | 0 |  |
| [`LiquidSurfaceMaterialCreator`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator) | class | `MaterialCreator<LiquidVisualData>` | 7 |  |
| [`LiquidSurfaceVisual`](/game-api/types/alta-stats-effects/liquidsurfacevisual) | abstract class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 19 |  |
| [`LiquidTransition`](/game-api/types/alta-stats-effects/liquidtransition) | class |  | 11 |  |
| [`LiquidTypeChangedHandler`](/game-api/types/alta-stats-effects/liquidtypechangedhandler) | delegate |  | 0 |  |
| [`LiquidVisualData`](/game-api/types/alta-stats-effects/liquidvisualdata) | class | `MaterialPropertyBlockSettings<LiquidVisualData>` | 24 |  |
| [`MaterialCreator<T>`](/game-api/types/alta-stats-effects/materialcreator-t) | abstract class |  | 1 |  |
| [`PickupLiquidContainerEnabler`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler) | class | `MonoBehaviour` | 0 | [Liquids](../game-systems/liquids.md): Links a pickup to its container, pouring and surface, and filters what can be added. |
| [`PickupLiquidContainerEnabler.DockingElibility`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler-dockingelibility) | enum |  | 3 |  |
| [`PotionImpactColorer`](/game-api/types/alta-stats-effects/potionimpactcolorer) | class | `MonoBehaviour` | 1 |  |
| [`PourableContainer`](/game-api/types/alta-stats-effects/pourablecontainer) | class | `MonoBehaviour`, `IPourableContainer`, `ILiquidTransitionController` | 5 | [Liquids](../game-systems/liquids.md) |
| [`PouringParticles`](/game-api/types/alta-stats-effects/pouringparticles) | class | `PooledObject` | 7 |  |
| [`PouringStrengthController`](/game-api/types/alta-stats-effects/pouringstrengthcontroller) | class | `MonoBehaviour` | 1 |  |
| [`ShakeablePouringStrengthController`](/game-api/types/alta-stats-effects/shakeablepouringstrengthcontroller) | class | `PouringStrengthController` | 1 |  |
| [`StaticLiquidContainer`](/game-api/types/alta-stats-effects/staticliquidcontainer) | class | `MonoBehaviour`, `ILiquidContainer`, `ILiquidContainerInternal` | 5 |  |

## Alta.StatSystem

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AreaFilter`](/game-api/types/alta-stats-effects/areafilter) | enum |  | 3 |  |
| [`BurnStat`](/game-api/types/alta-stats-effects/burnstat) | class | `ControlledStat` | 2 | [Stats](../game-systems/stats.md) |
| [`BurnStat.Create`](/game-api/types/alta-stats-effects/burnstat-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<BurnStat>` | 0 |  |
| [`ControlledStat`](/game-api/types/alta-stats-effects/controlledstat) | abstract class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md): Cancels itself out against another stat, so one soaks up the other. |
| [`DiscreteStatBar`](/game-api/types/alta-stats-effects/discretestatbar) | class | `StatBarBase` | 3 | [Stats](../game-systems/stats.md) |
| [`DiscreteStatBarVisual`](/game-api/types/alta-stats-effects/discretestatbarvisual) | class | `MonoBehaviour` | 2 |  |
| [`FullEmptyStatTrigger`](/game-api/types/alta-stats-effects/fullemptystattrigger) | class | `MonoBehaviour` | 0 | [Stats](../game-systems/stats.md) |
| [`FullEmptyUpdateModifier`](/game-api/types/alta-stats-effects/fullemptyupdatemodifier) | internal class | `Modifier` | 2 |  |
| [`FullnessStat`](/game-api/types/alta-stats-effects/fullnessstat) | class | `ThresholdStat` | 2 | [Hunger, eating and drinking](../game-systems/hunger-and-eating.md#fullnessstat), [Stats](../game-systems/stats.md): While fullness is above 0, a timer counts down by `1 / tickRatePerHungerThreshold[level]` each tick, where `level` is hunger's current level. |
| [`HealthData`](/game-api/types/alta-stats-effects/healthdata) | class | `ScriptableObject`, `ICollection<Instance>`, `IEnumerable<Instance>`, +1 more | 8 | [Stats](../game-systems/stats.md) |
| [`HealthValidation`](/game-api/types/alta-stats-effects/healthvalidation) | class | `MonoBehaviour` | 4 | [Stats](../game-systems/stats.md) |
| [`HungerStat`](/game-api/types/alta-stats-effects/hungerstat) | class | `ThresholdStat` | 1 | [Hunger, eating and drinking](../game-systems/hunger-and-eating.md#hungerstat), [Stats](../game-systems/stats.md): Server only (its `Applied` only runs on the server). |
| [`HungerStat.Create`](/game-api/types/alta-stats-effects/hungerstat-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<HungerStat>` | 0 |  |
| [`IncrementingStat`](/game-api/types/alta-stats-effects/incrementingstat) | class | `StatDefinition` | 2 | [Stats](../game-systems/stats.md): Adds `statChangePerSecond` on every incremental tick while the value is above 0. |
| [`IncrementingStat.Create`](/game-api/types/alta-stats-effects/incrementingstat-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<IncrementingStat>` | 0 |  |
| [`IndirectModifier`](/game-api/types/alta-stats-effects/indirectmodifier) | class |  | 8 | [Stats](../game-systems/stats.md) |
| [`IndirectModifierSaveData`](/game-api/types/alta-stats-effects/indirectmodifiersavedata) | class |  | 4 |  |
| [`IndirectStatModifier`](/game-api/types/alta-stats-effects/indirectstatmodifier) | class |  | 4 | [Stats](../game-systems/stats.md) |
| [`IndirectStatModifierDefinition`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition) | class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md) |
| [`IndirectStatModifierDefinition.Create`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<IndirectStatModifierDefinition>` | 0 |  |
| [`Instance`](/game-api/types/alta-stats-effects/instance) | class |  | 3 |  |
| [`LevelEffectSize`](/game-api/types/alta-stats-effects/leveleffectsize) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| [`LevelStatModifier`](/game-api/types/alta-stats-effects/levelstatmodifier) | class | `NetworkEntityBehaviour`, `ISavable<LevelStatModifierData>`, `ISavableSave<LevelStatModifierData>`, +1 more | 6 | [Stats](../game-systems/stats.md): Drives a stat from a curve by a level number, and saves that level. |
| [`LevelStatModifierData`](/game-api/types/alta-stats-effects/levelstatmodifierdata) | class | `NewSaveData<LevelStatModifier, LevelStatModifierData>` | 1 |  |
| [`MaxStatDefinition`](/game-api/types/alta-stats-effects/maxstatdefinition) | class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md): Its `Base` becomes the `Maximum` of other stats (applied a frame later through `AltaCoroutine.DelayCall`, and again on death reset). |
| [`MaxStatDefinition.Create`](/game-api/types/alta-stats-effects/maxstatdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<MaxStatDefinition>` | 0 |  |
| [`Modifier`](/game-api/types/alta-stats-effects/modifier) | abstract class |  | 5 | [Stats](../game-systems/stats.md): `Apply()` and `Remove()` call `InternalApply` and `InternalRemove` once each. |
| [`ModifierSet`](/game-api/types/alta-stats-effects/modifierset) | class | `IEnumerable`, `IEnumerable<Modifier>` | 6 | [Stats](../game-systems/stats.md): A group applied and removed together (one per threshold level). |
| [`OnFullAffectTargetStatDefinition`](/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition) | class | `StatDefinition` | 1 |  |
| [`PlayerStatManager`](/game-api/types/alta-stats-effects/playerstatmanager) | class | `StatManager` | 0 |  |
| [`PlayerWeightStat`](/game-api/types/alta-stats-effects/playerweightstat) | class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md) |
| [`PoisonStat`](/game-api/types/alta-stats-effects/poisonstat) | class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md) |
| [`PoisonStat.Create`](/game-api/types/alta-stats-effects/poisonstat-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<PoisonStat>` | 0 |  |
| [`SerializedFullEmptyStatTrigger`](/game-api/types/alta-stats-effects/serializedfullemptystattrigger) | class | `FullEmptyStatTrigger`, `ISavable<SerializedFullEmptyStatTriggerData>`, `ISavableSave<SerializedFullEmptyStatTriggerData>`, +1 more | 0 |  |
| [`SerializedFullEmptyStatTriggerData`](/game-api/types/alta-stats-effects/serializedfullemptystattriggerdata) | class | `NewSaveData<SerializedFullEmptyStatTrigger, SerializedFullEmptyStatTriggerData>` | 1 |  |
| [`SetSwitch`](/game-api/types/alta-stats-effects/setswitch) | internal class |  | 1 |  |
| [`StaminaBarVisibility`](/game-api/types/alta-stats-effects/staminabarvisibility) | class | `MonoBehaviour` | 0 | [Stats](../game-systems/stats.md) |
| [`Stat`](/game-api/types/alta-stats-effects/stat) | class |  | 31 | [Stats](../game-systems/stats.md#stat): Plain class, one per stat per body. |
| [`StatAffectAccessor`](/game-api/types/alta-stats-effects/stataffectaccessor) | class | `MonoBehaviour` | 1 |  |
| [`StatAffectingArea`](/game-api/types/alta-stats-effects/stataffectingarea) | class | `MonoBehaviour` | 0 | [Stats](../game-systems/stats.md): An area that changes a stat by `affectValuePerSecond` on things inside it. |
| [`StatAppliedHandler`](/game-api/types/alta-stats-effects/statappliedhandler) | delegate |  | 0 |  |
| [`StatBar`](/game-api/types/alta-stats-effects/statbar) | class | `StatBarSimple` | 6 | [Stats](../game-systems/stats.md) |
| [`StatBarBase`](/game-api/types/alta-stats-effects/statbarbase) | class | `MonoBehaviour` | 6 |  |
| [`StatBarNotch`](/game-api/types/alta-stats-effects/statbarnotch) | class | `MonoBehaviour` | 4 |  |
| [`StatBarSimple`](/game-api/types/alta-stats-effects/statbarsimple) | class | `StatBarBase` | 6 | [Stats](../game-systems/stats.md) |
| [`StatBarSimple.IsLerping`](/game-api/types/alta-stats-effects/statbarsimple-islerping) | delegate |  | 0 |  |
| [`StatBarVisibilityGroup`](/game-api/types/alta-stats-effects/statbarvisibilitygroup) | class | `MonoBehaviour` | 3 |  |
| [`StatConverter`](/game-api/types/alta-stats-effects/statconverter) | class | `TypeConverter` | 3 |  |
| [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition) | class | `HashedGeneralValue<StatDefinition>` | 12 | [Stats](../game-systems/stats.md#statdefinition), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `ScriptableObject` asset. Get one with `StatDefinition.All`, `StatDefinition.Get(hash)`, or from a stat's `Definition`. |
| [`StatDefinition.Create`](/game-api/types/alta-stats-effects/statdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<StatDefinition>` | 0 |  |
| [`StatDefinitionApplication`](/game-api/types/alta-stats-effects/statdefinitionapplication) | class |  | 8 | [Stats](../game-systems/stats.md#statdefinitionapplication): `[Serializable]` class in a `StatManager`'s list. Holds a definition plus `Default`, `DefaultMinimum` and `DefaultMaximum`. `Stat.Reset` goes back to these. |
| [`StatHandler`](/game-api/types/alta-stats-effects/stathandler) | delegate |  | 0 |  |
| [`StatList`](/game-api/types/alta-stats-effects/statlist) | class | `IEnumerable<StatPlayerPair>`, `IEnumerable` | 3 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`StatListConverter`](/game-api/types/alta-stats-effects/statlistconverter) | class | `TypeConverter` | 3 |  |
| [`StatManager`](/game-api/types/alta-stats-effects/statmanager) | class | `NetworkEntityBehaviour`, `IEnumerable`, `ISavable<StatManagerSaveData>`, +2 more | 17 | [Stats](../game-systems/stats.md#statmanager): Instance, one per body. `PlayerStatManager` is a subclass that also lists stats to keep on death. |
| [`StatManagerSaveData`](/game-api/types/alta-stats-effects/statmanagersavedata) | class | `NewSaveData<StatManager, StatManagerSaveData>` | 3 | [Stats](../game-systems/stats.md): What a body saves: each saved stat's `Base`, timed and indirect modifiers. |
| [`StatManagerSaveData.IndirectStatModifier`](/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier) | class |  | 3 |  |
| [`StatManagerSaveData.TimedModifier`](/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier) | class |  | 4 |  |
| [`StatManagerSaveData1`](/game-api/types/alta-stats-effects/statmanagersavedata1) | class | `OldSaveData` | 4 |  |
| [`StatManagerSaveData1.IndirectStatModifier`](/game-api/types/alta-stats-effects/statmanagersavedata1-indirectstatmodifier) | class |  | 3 |  |
| [`StatManagerSaveData1.TimedModifier`](/game-api/types/alta-stats-effects/statmanagersavedata1-timedmodifier) | class |  | 4 |  |
| [`StatManagerSaveDataStat`](/game-api/types/alta-stats-effects/statmanagersavedatastat) | class |  | 2 |  |
| [`StatModifier`](/game-api/types/alta-stats-effects/statmodifier) | class | `Modifier` | 8 | [Stats](../game-systems/stats.md): Adds `Value` to `Extra` (or `NonBuffExtra`), or multiplies `BuffMultiplier` (or `NonBuffMultiplier`). |
| [`StatModifierConstructor`](/game-api/types/alta-stats-effects/statmodifierconstructor) | internal class |  | 1 |  |
| [`StatPlayerPair`](/game-api/types/alta-stats-effects/statplayerpair) | class |  | 3 |  |
| [`StatTrigger`](/game-api/types/alta-stats-effects/stattrigger) | class | `MonoBehaviour` | 0 | [Stats](../game-systems/stats.md) |
| [`StatUpgradeTarget`](/game-api/types/alta-stats-effects/statupgradetarget) | class | `NetworkEntityBehaviour` | 3 | [Stats](../game-systems/stats.md): Adds a fixed `upgrade` to a stat, with an effect. |
| [`ThresholdStat`](/game-api/types/alta-stats-effects/thresholdstat) | class | `StatDefinition` | 5 | [Stats](../game-systems/stats.md): Has `Levels` (each a name, a `MinThreshold` and stat modifiers). Applies the modifier set of the level the value is in, and swaps sets as it moves. |
| [`ThresholdStat.ThresholdLevel`](/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel) | class |  | 5 |  |
| [`TimedStatModifier`](/game-api/types/alta-stats-effects/timedstatmodifier) | class |  | 9 | [Stats](../game-systems/stats.md): A `StatModifier` removed after a time. Made by `ApplyTimedModifier`. `Cancel()` stops the timer. |
| [`UpdateModifier`](/game-api/types/alta-stats-effects/updatemodifier) | internal class | `Modifier` | 2 | [Stats](../game-systems/stats.md): Runs an action on every `Updated` while applied. |
