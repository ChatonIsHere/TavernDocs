---
title: "Stats, effects, heat and liquid"
description: "Types in Alta.StatSystem, Alta.Alchemy, Alta.Heat and Alta.Liquid."
sidebar_position: 8
---

# Stats, effects, heat and liquid

Types in Alta.StatSystem, Alta.Alchemy, Alta.Heat and Alta.Liquid. 185 types, 72 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Alchemy

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BreathableArea` | class | `EffectArea` | 0 |  |
| `BuildUpconcoctionEffect` | abstract class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md) |
| `BuildupTeleportEffect` | class | `BuildUpconcoctionEffect` | 0 | [Effects](../game-systems/effects.md) |
| `BurnEffect` | class | `EffectDefinition` | 0 | [Effects](../game-systems/effects.md): Positive strength starts adding to the `"burn"` stat every tick, negative stops it. |
| `ChanceBasedEffectDefinition` | abstract class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md) |
| `DamageOverTime` | class | `DurationEffect<DamageOverTime>` | 3 |  |
| `DurationEffect<T>` | abstract class | `Effect` | 5 |  |
| `Effect` | abstract class |  | 4 |  |
| `EffectArea` | class | `MonoBehaviour` | 0 |  |
| `EffectDefinition` | abstract class | `HashedGeneralValue<EffectDefinition>`, `IEffectDefinition` | 2 | [Effects](../game-systems/effects.md#effectdefinition): `Alta.Alchemy.EffectDefinition : HashedGeneralValue<EffectDefinition>`, abstract. Assets live under `Cooking/Effects`. |
| `EffectDefinitionApplication` | class | `IEffectDefinition` | 9 | [Effects](../game-systems/effects.md#effectdefinitionapplication): An effect with a strength and an optional duration. |
| `EffectEventHandler` | delegate |  | 0 |  |
| `EffectEventHandler<T>` | delegate |  | 0 |  |
| `EffectHandler` | class | `MonoBehaviour` | 8 | [Effects](../game-systems/effects.md#effecthandler): On anything effects can reach. |
| `EffectHandler.EffectOverTimeData` | class |  | 3 |  |
| `EffectHandler.TeleportType` | enum |  | 3 |  |
| `EffectVolumeTrigger` | class | `VolumeTrigger` | 2 |  |
| `EnvironmentalEffect<T>` | abstract class | `DurationEffect<T>` | 4 |  |
| `FireExtinguishingFluid` | class | `MonoBehaviour` | 0 | [Heat](../game-systems/heat.md) |
| `IEffectDefinition` | interface |  | 1 |  |
| `InateEffect` | class | `EffectDefinition` | 0 |  |
| `PlayerEffectController` | class | `EffectHandler` | 3 |  |
| `PoisonEffect` | class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md): Positive strength adds a poison stack, negative removes one. Needs `target.Health`. |
| `RevealEffect` | class | `EffectDefinition` | 0 | [Effects](../game-systems/effects.md): Raises the handler's `OnReveal`. |
| `StatChangeEffect` | class | `StatEffect` | 0 | [Effects](../game-systems/effects.md): Adds `strength` to the stat's `Base`. This is how food fills hunger and fullness. |
| `StatEffect` | abstract class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md): Finds `StatToAffect` on the target's `StatManager` and calls `ModifyStat`. |
| `StatMultiplierEffect` | class | `EffectDefinition` | 0 | [Effects](../game-systems/effects.md): Applies a timed `StatModifier` of its own `modifierValue`, lasting `strength` seconds. |
| `StatMultiplierEffect.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<StatMultiplierEffect>` | 0 |  |
| `StatSetEffect` | class | `StatEffect` | 0 | [Effects](../game-systems/effects.md): Sets the stat's `Base` to `strength`. |
| `TeleportEffect` | class | `ChanceBasedEffectDefinition` | 0 | [Effects](../game-systems/effects.md): A `ChanceBasedEffectDefinition`: with chance `strength * chanceMultiplier`, teleports the target home or to a spawn area. |

## Alta.Heat

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CylinderHeatArea` | class | `HeatAreaModifier` | 0 |  |
| `EnergyBasedHeatSource` | class | `HeatSourceBase` | 0 | [Heat](../game-systems/heat.md): A `HeatSourceBase` whose `ConductToHeatPoint` adds nothing. Looks unfinished. |
| `Fire` | class | `HeatSourceBase`, `IFlammable`, `IEntityReplaceHandler`, +3 more | 6 | [Heat](../game-systems/heat.md#fire), [Health and damage](../items/health-and-damage.md): Fires that use fuel (campfires, and the smelter's `innerFire`). |
| `FireDissolve` | class | `Fire`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| `FireExtinguisher` | class | `MonoBehaviour` | 0 | [Heat](../game-systems/heat.md) |
| `FireLighter` | class | `MonoBehaviour` | 1 | [Heat](../game-systems/heat.md) |
| `FireSaveData` | internal class | `NewSaveData<Fire, FireSaveData>` | 1 |  |
| `FireSaveData1` | internal class | `OldSaveData` | 2 |  |
| `FireSettings` | class | `ScriptableObject` | 11 | [Heat](../game-systems/heat.md): Effects and timings for fire. |
| `FireSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<FireSettings>` | 0 |  |
| `FireStatusRaycastCrafter` | class | `RaycastCrafter` | 0 |  |
| `FuelComparer` | class | `IComparer<Fuel>` | 1 |  |
| `HandShakeOffDetector` | class | `NetworkEntityBehaviour` | 4 | [Heat](../game-systems/heat.md): A shake score for a hand, read by `MovementHeatPoint` (heat from moving). |
| `HeatArea` | class | `NetworkEntityBehaviour` | 12 | [Heat](../game-systems/heat.md#heatarea): A trigger volume around a heat source (above a fire, inside a smelter or a pot's base). |
| `HeatArea.PointFilterDelegate` | delegate |  | 0 |  |
| `HeatAreaModifier` | abstract class | `MonoBehaviour` | 0 |  |
| `HeatManager` | class | `MonoBehaviour` | 0 | [Heat](../game-systems/heat.md#heatmanager): Burns a body: it watches a `HeatPointCollection`'s points and, on the server, damages its `HealthObject` when they pass `burnDamageThreshold`, and lights it above `ignitionThreshold`. |
| `HeatPoint` | class | `MonoBehaviour`, `IChildSyncable<HeatPoint, HeatPointCollectionSaveData.Element>`, `IChildSyncable<HeatPoint>`, +4 more | 30 | [Heat](../game-systems/heat.md#heatpoint): Implements `IHeatReceiver` (and so `IHeatSource`). Usually several per item, held by a `HeatPointCollection` on the entity, which saves and syncs them. |
| `HeatPoint.Neighbour` | class |  | 3 |  |
| `HeatPointCollection` | class | `ChildSyncableCollection<HeatPoint, HeatPointCollection, HeatPointCollectionSaveData, HeatPointCollectionSaveData.Element>`, `INetworkSerialized` | 8 |  |
| `HeatPointCollectionAreaFilter` | class | `MonoBehaviour` | 1 |  |
| `HeatPointTemperatureController` | class | `MonoBehaviour` | 0 | [Heat](../game-systems/heat.md): Clamps a point between `minTemperature` and `maxTemperature` through its `TemperatureModifier`, on the server. |
| `HeatPointToHeatAreaLink` | class | `MonoBehaviour` | 0 |  |
| `HeatSourceBase` | class | `NetworkEntityBehaviour`, `ISavableFull<HeatSourceBaseSaveData>`, `ISavable<HeatSourceBaseSaveData>`, +3 more | 13 | [Heat](../game-systems/heat.md#heatsourcebase), [Update modules](../console-and-utilities/update-modules.md): Something that burns: it lights when its attached heat point passes `ignitionTemperature` (100 by default in code) and goes out when it drops below `putOutTemperature` (80). |
| `HeatSourceBaseEventTriggers` | class | `MonoBehaviour` | 1 |  |
| `HeatSourceBaseSaveData` | internal class | `NewSaveData<HeatSourceBase, HeatSourceBaseSaveData>` | 3 |  |
| `HeatSourceBaseSaveData1` | internal class | `OldSaveData` | 4 |  |
| `IFlammable` | interface |  | 2 |  |
| `IHeatReceiver` | interface | `IHeatSource` | 5 |  |
| `IHeatSource` | interface |  | 5 |  |
| `LinearHeatArea` | class | `HeatAreaModifier` | 0 |  |
| `MovementHeatPoint` | class | `HeatPoint` | 1 |  |
| `RadiusHeatArea` | class | `HeatAreaModifier` | 0 |  |
| `TemperatureModifier` | delegate |  | 0 |  |
| `TemperatureToMaterial` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 | [Heat](../game-systems/heat.md): Glow and colour from temperature. Client visuals. |

## Alta.Liquid

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BoilingParticles` | class | `PooledObject` | 5 |  |
| `BoilingParticlesMaterialCreator` | class | `MaterialCreator<LiquidVisualData>` | 3 |  |
| `BottledLiquid` | class | `LiquidSurfaceVisual` | 0 |  |
| `BottleLiquidMaterialCreator` | class | `MaterialCreator<LiquidVisualData>` | 5 |  |
| `ContainerLiquidReceiver` | class | `MonoBehaviour` | 1 |  |
| `FixedPouringStrengthController` | class | `PouringStrengthController` | 2 |  |
| `GlobalLiquidContainer` | class | `LiquidContainer` | 4 |  |
| `ILiquidContainer` | interface |  | 22 | [Liquids](../game-systems/liquids.md#iliquidcontainer): Implemented by `LiquidContainer` (the usual one, a network entity), `StaticLiquidContainer` (a plain `MonoBehaviour` one, probably for fixed bodies of water) and whatever the drinking mouth carries. |
| `ILiquidContainerInternal` | interface |  | 6 |  |
| `ILiquidParticlesMarker` | internal interface |  | 1 |  |
| `ILiquidTransitionController` | interface |  | 0 |  |
| `IPourableContainer` | interface |  | 4 | [Liquids](../game-systems/liquids.md) |
| `LiquidContainer` | class | `GeneratedNetworkEntityBehaviour`, `ILiquidContainer`, `ILiquidContainerInternal`, +6 more | 24 |  |
| `LiquidContainerAmountChangedHandler` | delegate |  | 0 |  |
| `LiquidContainerHandler` | delegate |  | 0 |  |
| `LiquidContainerLid` | class | `NetworkEntityBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 9 | [Liquids](../game-systems/liquids.md): A lid that opens and closes a container. |
| `LiquidContainerSaveData` | class | `NewSaveData<LiquidContainer, LiquidContainerSaveData>` | 7 |  |
| `LiquidContainerSaveData.CustomData` | class |  | 5 |  |
| `LiquidContainerSaveData.Effect` | class |  | 2 |  |
| `LiquidContainerTrigger` | class | `MonoBehaviour` | 2 | [Liquids](../game-systems/liquids.md#dipping-liquidcontainertrigger) |
| `LiquidContent` | class |  | 8 | [Liquids](../game-systems/liquids.md#liquiddefinition-liquidcontent-and-liquiddata): What's in a container: `LiquidDefinition Liquid`, `LiquidData Data`, `bool IsCustom`. Stews are custom content with their own data. |
| `LiquidData` | class |  | 19 | [Liquids](../game-systems/liquids.md#liquiddefinition-liquidcontent-and-liquiddata): `[Serializable]` class: `Effects` (`EffectDefinitionApplication`s), `ColorTint`, `LiquidVisual`, `ChunkVisuals`, `CookablesUsed`, `IsConsumableThroughSkin`. |
| `LiquidDataEventHandler` | delegate |  | 0 |  |
| `LiquidDefinition` | class | `HashedGeneralValue<LiquidDefinition>` | 2 | [Liquids](../game-systems/liquids.md#liquiddefinition-liquidcontent-and-liquiddata): `HashedGeneralValue<LiquidDefinition>` asset under `Cooking/Liquids`: a named liquid (water, a potion). `LiquidData Data`, `LiquidContent GetAsLiquidContent()` (cached). |
| `LiquidFillFilter` | delegate |  | 0 |  |
| `LiquidFoamMaterialCreator` | class | `MaterialCreator<LiquidVisualData>` | 1 |  |
| `LiquidGravity` | class |  | 14 |  |
| `LiquidGravityAdjustment` | static class |  | 1 |  |
| `LiquidHeatAreaController` | class | `MonoBehaviour` | 0 | [Liquids](../game-systems/liquids.md): Links a container's liquid to a heat area and heat point. |
| `LiquidParticleMarker` | class | `MonoBehaviour`, `ILiquidParticlesMarker` | 1 |  |
| `LiquidPouringMaterialCreator` | class | `MaterialCreator<LiquidVisualData>` | 3 |  |
| `LiquidPouringParticlesMarker` | class | `MonoBehaviour`, `ILiquidParticlesMarker` | 3 |  |
| `LiquidSettings` | class | `GlobalSettings<LiquidSettings>` | 4 | [Liquids](../game-systems/liquids.md): `GlobalSettings`: transition speed, splash and pouring particles, `DebugWaterConcoction`. |
| `LiquidSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<LiquidSettings>` | 0 |  |
| `LiquidStencilShaderController` | class | `MonoBehaviour` | 0 |  |
| `LiquidSurfaceMaterialCreator` | class | `MaterialCreator<LiquidVisualData>` | 7 |  |
| `LiquidSurfaceVisual` | abstract class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 19 |  |
| `LiquidTransition` | class |  | 11 |  |
| `LiquidTypeChangedHandler` | delegate |  | 0 |  |
| `LiquidVisualData` | class | `MaterialPropertyBlockSettings<LiquidVisualData>` | 24 |  |
| `MaterialCreator<T>` | abstract class |  | 1 |  |
| `PickupLiquidContainerEnabler` | class | `MonoBehaviour` | 0 | [Liquids](../game-systems/liquids.md): Links a pickup to its container, pouring and surface, and filters what can be added. |
| `PickupLiquidContainerEnabler.DockingElibility` | enum |  | 3 |  |
| `PotionImpactColorer` | class | `MonoBehaviour` | 1 |  |
| `PourableContainer` | class | `MonoBehaviour`, `IPourableContainer`, `ILiquidTransitionController` | 5 | [Liquids](../game-systems/liquids.md) |
| `PouringParticles` | class | `PooledObject` | 7 |  |
| `PouringStrengthController` | class | `MonoBehaviour` | 1 |  |
| `ShakeablePouringStrengthController` | class | `PouringStrengthController` | 1 |  |
| `StaticLiquidContainer` | class | `MonoBehaviour`, `ILiquidContainer`, `ILiquidContainerInternal` | 5 |  |

## Alta.StatSystem

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AreaFilter` | enum |  | 3 |  |
| `BurnStat` | class | `ControlledStat` | 2 | [Stats](../game-systems/stats.md) |
| `BurnStat.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<BurnStat>` | 0 |  |
| `ControlledStat` | abstract class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md): Cancels itself out against another stat, so one soaks up the other. |
| `DiscreteStatBar` | class | `StatBarBase` | 3 | [Stats](../game-systems/stats.md) |
| `DiscreteStatBarVisual` | class | `MonoBehaviour` | 2 |  |
| `FullEmptyStatTrigger` | class | `MonoBehaviour` | 0 | [Stats](../game-systems/stats.md) |
| `FullEmptyUpdateModifier` | internal class | `Modifier` | 2 |  |
| `FullnessStat` | class | `ThresholdStat` | 2 | [Hunger, eating and drinking](../game-systems/hunger-and-eating.md#fullnessstat), [Stats](../game-systems/stats.md): While fullness is above 0, a timer counts down by `1 / tickRatePerHungerThreshold[level]` each tick, where `level` is hunger's current level. |
| `HealthData` | class | `ScriptableObject`, `ICollection<Instance>`, `IEnumerable<Instance>`, +1 more | 8 | [Stats](../game-systems/stats.md) |
| `HealthValidation` | class | `MonoBehaviour` | 4 | [Stats](../game-systems/stats.md) |
| `HungerStat` | class | `ThresholdStat` | 1 | [Hunger, eating and drinking](../game-systems/hunger-and-eating.md#hungerstat), [Stats](../game-systems/stats.md): Server only (its `Applied` only runs on the server). |
| `HungerStat.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<HungerStat>` | 0 |  |
| `IncrementingStat` | class | `StatDefinition` | 2 | [Stats](../game-systems/stats.md): Adds `statChangePerSecond` on every incremental tick while the value is above 0. |
| `IncrementingStat.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<IncrementingStat>` | 0 |  |
| `IndirectModifier` | class |  | 8 | [Stats](../game-systems/stats.md) |
| `IndirectModifierSaveData` | class |  | 4 |  |
| `IndirectStatModifier` | class |  | 4 | [Stats](../game-systems/stats.md) |
| `IndirectStatModifierDefinition` | class | `EffectDefinition` | 1 | [Effects](../game-systems/effects.md) |
| `IndirectStatModifierDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<IndirectStatModifierDefinition>` | 0 |  |
| `Instance` | class |  | 3 |  |
| `LevelEffectSize` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| `LevelStatModifier` | class | `NetworkEntityBehaviour`, `ISavable<LevelStatModifierData>`, `ISavableSave<LevelStatModifierData>`, +1 more | 6 | [Stats](../game-systems/stats.md): Drives a stat from a curve by a level number, and saves that level. |
| `LevelStatModifierData` | class | `NewSaveData<LevelStatModifier, LevelStatModifierData>` | 1 |  |
| `MaxStatDefinition` | class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md): Its `Base` becomes the `Maximum` of other stats (applied a frame later through `AltaCoroutine.DelayCall`, and again on death reset). |
| `MaxStatDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<MaxStatDefinition>` | 0 |  |
| `Modifier` | abstract class |  | 5 | [Stats](../game-systems/stats.md): `Apply()` and `Remove()` call `InternalApply` and `InternalRemove` once each. |
| `ModifierSet` | class | `IEnumerable`, `IEnumerable<Modifier>` | 6 | [Stats](../game-systems/stats.md): A group applied and removed together (one per threshold level). |
| `OnFullAffectTargetStatDefinition` | class | `StatDefinition` | 1 |  |
| `PlayerStatManager` | class | `StatManager` | 0 |  |
| `PlayerWeightStat` | class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md) |
| `PoisonStat` | class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md) |
| `PoisonStat.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<PoisonStat>` | 0 |  |
| `SerializedFullEmptyStatTrigger` | class | `FullEmptyStatTrigger`, `ISavable<SerializedFullEmptyStatTriggerData>`, `ISavableSave<SerializedFullEmptyStatTriggerData>`, +1 more | 0 |  |
| `SerializedFullEmptyStatTriggerData` | class | `NewSaveData<SerializedFullEmptyStatTrigger, SerializedFullEmptyStatTriggerData>` | 1 |  |
| `SetSwitch` | internal class |  | 1 |  |
| `StaminaBarVisibility` | class | `MonoBehaviour` | 0 | [Stats](../game-systems/stats.md) |
| `Stat` | class |  | 31 | [Stats](../game-systems/stats.md#stat): Plain class, one per stat per body. |
| `StatAffectAccessor` | class | `MonoBehaviour` | 1 |  |
| `StatAffectingArea` | class | `MonoBehaviour` | 0 | [Stats](../game-systems/stats.md): An area that changes a stat by `affectValuePerSecond` on things inside it. |
| `StatAppliedHandler` | delegate |  | 0 |  |
| `StatBar` | class | `StatBarSimple` | 6 | [Stats](../game-systems/stats.md) |
| `StatBarBase` | class | `MonoBehaviour` | 6 |  |
| `StatBarNotch` | class | `MonoBehaviour` | 4 |  |
| `StatBarSimple` | class | `StatBarBase` | 6 | [Stats](../game-systems/stats.md) |
| `StatBarSimple.IsLerping` | delegate |  | 0 |  |
| `StatBarVisibilityGroup` | class | `MonoBehaviour` | 3 |  |
| `StatConverter` | class | `TypeConverter` | 3 |  |
| `StatDefinition` | class | `HashedGeneralValue<StatDefinition>` | 12 | [Stats](../game-systems/stats.md#statdefinition), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `ScriptableObject` asset. Get one with `StatDefinition.All`, `StatDefinition.Get(hash)`, or from a stat's `Definition`. |
| `StatDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<StatDefinition>` | 0 |  |
| `StatDefinitionApplication` | class |  | 8 | [Stats](../game-systems/stats.md#statdefinitionapplication): `[Serializable]` class in a `StatManager`'s list. Holds a definition plus `Default`, `DefaultMinimum` and `DefaultMaximum`. `Stat.Reset` goes back to these. |
| `StatHandler` | delegate |  | 0 |  |
| `StatList` | class | `IEnumerable<StatPlayerPair>`, `IEnumerable` | 3 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| `StatListConverter` | class | `TypeConverter` | 3 |  |
| `StatManager` | class | `NetworkEntityBehaviour`, `IEnumerable`, `ISavable<StatManagerSaveData>`, +2 more | 17 | [Stats](../game-systems/stats.md#statmanager): Instance, one per body. `PlayerStatManager` is a subclass that also lists stats to keep on death. |
| `StatManagerSaveData` | class | `NewSaveData<StatManager, StatManagerSaveData>` | 3 | [Stats](../game-systems/stats.md): What a body saves: each saved stat's `Base`, timed and indirect modifiers. |
| `StatManagerSaveData.IndirectStatModifier` | class |  | 3 |  |
| `StatManagerSaveData.TimedModifier` | class |  | 4 |  |
| `StatManagerSaveData1` | class | `OldSaveData` | 4 |  |
| `StatManagerSaveData1.IndirectStatModifier` | class |  | 3 |  |
| `StatManagerSaveData1.TimedModifier` | class |  | 4 |  |
| `StatManagerSaveDataStat` | class |  | 2 |  |
| `StatModifier` | class | `Modifier` | 8 | [Stats](../game-systems/stats.md): Adds `Value` to `Extra` (or `NonBuffExtra`), or multiplies `BuffMultiplier` (or `NonBuffMultiplier`). |
| `StatModifierConstructor` | internal class |  | 1 |  |
| `StatPlayerPair` | class |  | 3 |  |
| `StatTrigger` | class | `MonoBehaviour` | 0 | [Stats](../game-systems/stats.md) |
| `StatUpgradeTarget` | class | `NetworkEntityBehaviour` | 3 | [Stats](../game-systems/stats.md): Adds a fixed `upgrade` to a stat, with an effect. |
| `ThresholdStat` | class | `StatDefinition` | 5 | [Stats](../game-systems/stats.md): Has `Levels` (each a name, a `MinThreshold` and stat modifiers). Applies the modifier set of the level the value is in, and swaps sets as it moves. |
| `ThresholdStat.ThresholdLevel` | class |  | 5 |  |
| `TimedStatModifier` | class |  | 9 | [Stats](../game-systems/stats.md): A `StatModifier` removed after a time. Made by `ApplyTimedModifier`. `Cancel()` stops the timer. |
| `UpdateModifier` | internal class | `Modifier` | 2 | [Stats](../game-systems/stats.md): Runs an action on every `Updated` while applied. |
