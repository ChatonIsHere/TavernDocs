---
title: "No namespace: A to B"
description: "Root.Township types with no namespace, A to B."
sidebar_position: 15
---

# No namespace: A to B

Types in `Root.Township` with no namespace (the global namespace), from A to B. 195 types, 13 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## A

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AccessibilityFeaturesBoard` | class | `PopupBoard` | 0 |  |
| `AccessibilityFeaturesChecker` | class | `MonoBehaviour` | 0 |  |
| `AccountSetupSceneLoader` | class | `ISceneLoader` | 1 |  |
| `AchievementBoard` | class | `MonoBehaviour` | 0 |  |
| `AchievementEffectHandler` | static class |  | 1 |  |
| `AchievementGroupAchievement` | class | `GameAchievement` | 1 |  |
| `AchievementItem` | class | `MonoBehaviour`, `IAchievementItem` | 1 |  |
| `ActionGlyphAnimator` | class | `PooledObject` | 2 |  |
| `ActionGlyphsPlacer` | class | `MonoBehaviour` | 3 |  |
| `ActionItem` | class | `NetworkEntityBehaviour` | 9 |  |
| `ActionOrb` | class | `HoverPickup` | 4 |  |
| `ActiveHandIndex` | enum |  | 2 |  |
| `AdditionalStaticContent` | class | `NetworkEntityBehaviour`, `ISavable<AdditionalStaticContentSaveData>`, `ISavableSave<AdditionalStaticContentSaveData>`, +2 more | 5 |  |
| `AdditionalStaticContentMarker` | class | `MonoBehaviour` | 0 |  |
| `AdditionalStaticContentSaveData` | class | `NewSaveData<AdditionalStaticContent, AdditionalStaticContentSaveData>` | 1 |  |
| `AddonCraftingPart` | class | `CraftingPart` | 0 | [Crafting](../game-systems/crafting.md): A part that shows an extra visual (`jointAddon`) while it's inserted. |
| `AddressableLoader` | class | `MonoBehaviour` | 0 |  |
| `AddressableSession` | class | `IDisposable` | 5 |  |
| `AddressableSystemWarmer` | class | `MonoBehaviour` | 0 |  |
| `AdjustHeight` | class | `MonoBehaviour` | 2 |  |
| `AdminTool` | abstract class | `LoggedInTool` | 0 |  |
| `Aesthetics` | static class |  | 1 |  |
| `AfkTimer` | class | `MonoBehaviour` | 0 |  |
| `AgonesLogger` | class | `Agones.Utility.ILogger` | 3 |  |
| `AlignWithNormalModifier` | class | `SpawnModifierSpawnParameters` | 1 |  |
| `AlignWithNormalModifier.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<AlignWithNormalModifier>` | 0 |  |
| `AlignWithPath` | class | `GeneratablePart` | 1 |  |
| `AlignWithPathSlope` | class | `GeneratablePart` | 1 |  |
| `AlignWithTerrainSlope` | class | `GeneratablePart` | 1 |  |
| `AlphanumComparator` | class | `IComparer` | 1 |  |
| `AltaEvent` | class | `IAltaEventValidation` | 5 |  |
| `AltaEvent<T, UnityEventT>` | class | `IAltaEvent<T>`, `IAltaEventValidation` | 5 |  |
| `AltaEvent<T1, T2, T3, T4, UnityEventT1T2T3T4>` | class | `IAltaEvent<T1, T2, T3, T4>`, `IAltaEventValidation` | 4 |  |
| `AltaEvent<T1, T2, T3, UnityEventT1T2T3>` | class | `IAltaEvent<T1, T2, T3>`, `IAltaEventValidation` | 4 |  |
| `AltaEvent<T1, T2, UnityEventT1T2>` | class | `IAltaEvent<T1, T2>`, `IAltaEventValidation` | 4 |  |
| `AltaEventValidationExtensions` | static class |  | 1 |  |
| `AltaPxrManagerCameraController` | class | `MonoBehaviour` | 0 |  |
| `AltaSceneManager` | static class |  | 10 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager): Every scene is loaded additively. Main thread; the async methods poll with `Task.Delay` and continue on the main thread. |
| `AltaVisionAttribute` | class | `PropertyAttribute` | 0 |  |
| `AlwaysFacePlayer` | class | `MonoBehaviour` | 0 |  |
| `AmbienceAudio` | class | `SoundSource` | 2 |  |
| `AmbienceManager` | class | `SingletonBehaviour<AmbienceManager>` | 1 |  |
| `AmbientTemperatureChecker` | class |  | 7 |  |
| `AmplifyImpostorAsset` | class | `ScriptableObject` | 17 |  |
| `AmplifyImpostorBakePreset` | class | `ScriptableObject` | 4 |  |
| `AnalyticalButton` | class | `MonoBehaviour`, `IPreventAtlasing` | 8 |  |
| `AnalyticalButtonGroupAutoEnabler` | class | `MonoBehaviour` | 0 |  |
| `AnalyticsTest` | class | `MonoBehaviour` | 0 |  |
| `AndroidLightSettings` | class | `GlobalSettings<AndroidLightSettings>` | 1 |  |
| `AnimatedRagdoll` | class | `MonoBehaviour` | 0 |  |
| `AnimateProgress` | class | `MonoBehaviour` | 2 |  |
| `AnimateScaleOverTime` | class | `TransformScriptAnimation` | 2 |  |
| `AnimateTime` | class | `MonoBehaviour` | 0 |  |
| `AnimationBasedEffect` | class | `AnimationBasedTrigger` | 1 |  |
| `AnimationBasedTrigger` | class | `MonoBehaviour` | 1 |  |
| `AnimationEnded` | class | `StateMachineBehaviour` | 1 |  |
| `AnimationPart` | class |  | 14 |  |
| `AnimationRandomStart` | class | `MonoBehaviour` | 0 |  |
| `AnimationTrigger` | class | `MonoBehaviour` | 2 |  |
| `AnimatorForcerTool` | class | `MonoBehaviour` | 0 |  |
| `AnimatorSetup` | class |  | 1 |  |
| `AnvilArea` | class | `MonoBehaviour` | 0 |  |
| `AnvilFilter` | class | `MonoBehaviour` | 0 |  |
| `AnvilFilterSettings` | class | `ImpactorAreaFilter<AnvilArea>` | 0 |  |
| `AOEDamage` | class | `MonoBehaviour` | 0 | [Health and damage](../items/health-and-damage.md#aoedamage): `AOEDamage`, no namespace, a `MonoBehaviour`. |
| `ApiAccess` | static class |  | 7 | [Alta's web API](../console-and-utilities/alta-web-api.md#apiaccess), [Startup and app state](../console-and-utilities/startup-and-app-state.md): Which client and address it picks: |
| `ApiEndpoint` | enum |  | 6 |  |
| `AppDataCacheHandler` | static class |  | 4 |  |
| `ApplicationManager` | class | `SingletonBehaviour<ApplicationManager>` | 14 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager): Most members are static. (There's an unrelated `Discord.ApplicationManager` too.) |
| `ApplicationShutdownOrderAttribute` | class | `Attribute` | 3 |  |
| `ApplicationStartupManager` | class | `MonoBehaviour` | 8 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager): Runs once at launch. |
| `AreaAttackSkill` | class | `PickupBasedSkill` | 3 |  |
| `AreaAttackSkill.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<AreaAttackSkill>` | 0 |  |
| `AreaOfInfluenceReceiver` | class | `MonoBehaviour`, `ISavable<AreaOfInfluenceReceiverData>`, `ISavableSave<AreaOfInfluenceReceiverData>`, +1 more | 0 |  |
| `AreaOfInfluenceReceiverData` | class | `NewSaveData<AreaOfInfluenceReceiver, AreaOfInfluenceReceiverData>` | 1 |  |
| `AreaOfInfluenceSender` | class | `LogicIntSet` | 0 |  |
| `Arrow` | class | `NetworkEntityBehaviour`, `IShootable`, `IToolHitDependant` | 16 |  |
| `ArrowEvent` | class | `AltaEvent<Arrow, ArrowUnityEvent>` | 0 |  |
| `ArrowFlightModifierComponent` | class | `MonoBehaviour` | 1 |  |
| `ArrowFlightSettings` | class | `ScriptableObject` | 0 |  |
| `ArrowFlightSettingsDevianceMultiplierModifier` | class | `ArrowFlightSettingsModifier` | 1 |  |
| `ArrowFlightSettingsModifier` | abstract class | `ScriptableObject` | 1 |  |
| `ArrowUnityEvent` | class | `UnityEvent<Arrow>` | 0 |  |
| `AssistGrabInteractable` | class | `Interactable`, `ICustomTypeReplace`, `IEntityReplaceHandler` | 0 | [Items, interaction and damage](../items/overview.md) |
| `AStar<TNode, TConnection>` | static class |  | 4 |  |
| `AStarDestinationCondition<TNode, TConnection>` | delegate |  | 0 |  |
| `AStarTravelCondition<TNode, TConnection>` | delegate |  | 0 |  |
| `AStarWorkingNode<TNode, TConnection>` | class |  | 5 |  |
| `ATMMachine` | class | `NetworkEntityBehaviour` | 8 | [Trading](../game-systems/trading.md#atmmachine): A bank teller for one player at a time. |
| `AttackTest` | class | `MonoBehaviour` | 0 |  |
| `AttackTypeMultiplier` | class |  | 2 |  |
| `AttributeCurveRange` | class | `CurveRange<BiomeAttribute>` | 2 |  |
| `AttributeCurveValue` | class | `CurveValue<BiomeAttribute>` | 2 |  |
| `AttributeDoubleValue` | class | `DoubleValue<BiomeAttribute>` | 2 |  |
| `AttributeEvaluation` | static class |  | 1 |  |
| `AttributeSet` | class | `IEnumerable<KeyValuePair<BiomeAttribute, float>>`, `IEnumerable` | 7 | [Caves](../world/caves.md) |
| `AttributeSingleValue` | class | `SingleValue<BiomeAttribute>` | 0 |  |
| `AttributeUsage` | class |  | 1 |  |
| `AudioControl` | class | `SimpleAudioControl` | 8 |  |
| `AudioEnvironmentBlendSettings` | class | `GlobalSettings<AudioEnvironmentBlendSettings>` | 1 |  |
| `AudioEnvironmentBlendSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Audio.ScriptableObject<AudioEnvironmentBlendSettings>` | 0 |  |
| `AudioManager` | class | `SingletonBehaviour<AudioManager>` | 12 |  |
| `AudioMuteEvent` | delegate |  | 0 |  |
| `AutoCamDeviceController` | class | `XrDeviceSdkController` | 4 |  |
| `AutoCamDeviceLifecycle` | class | `DeviceLifecycle` | 3 |  |
| `AutoCamLocomotionController` | class | `LocomotionController` | 0 |  |
| `AutoCamPlayer` | class | `PlayerController` | 10 |  |
| `AutoContainerLid` | class | `NetworkEntityBehaviour` | 1 |  |
| `AutoFindAttribute` | class | `PropertyAttribute` | 2 |  |
| `AvailablePointBar` | class | `MonoBehaviour` | 3 |  |
| `AvailablePointCrystal` | class | `PooledObject` | 1 |  |
| `AvailablePointVisualizerManager` | abstract class | `MonoBehaviour` | 4 |  |
| `AvoidBakingMarker` | class | `MonoBehaviour` | 0 |  |

## B

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BakeableTextureDecimator` | class | `ScriptableObject` | 0 |  |
| `BanRole` | enum |  | 2 |  |
| `BaseImpactChannelProgressionFilter` | abstract class | `ScriptableObject` | 2 |  |
| `BasemapDistanceSet` | class | `MonoBehaviour` | 1 |  |
| `BaseOpenXRInputController` | class | `OpenXRInputController` | 1 |  |
| `BaseReplacer` | abstract class |  | 2 |  |
| `BaseStatisticsMeasurer` | class |  | 6 |  |
| `BasicDecay` | class | `NetworkEntityBehaviour`, `ISavable<BasicDecayData>`, `ISavableSave<BasicDecayData>`, +2 more | 2 |  |
| `BasicDecayData` | class | `NewSaveData<BasicDecay, BasicDecayData>` | 2 |  |
| `BasicDecayData1` | class | `OldSaveData` | 2 |  |
| `BasicDecayData2` | class | `OldSaveData` | 2 |  |
| `BasicDigable` | class | `NetworkEntityBehaviour`, `IDigable` | 3 |  |
| `BasicDynamicPath` | class | `NetworkEntityBehaviour`, `IDynamicPath`, `ISavable<BasicDynamicPathSaveData>`, +2 more | 3 |  |
| `BasicDynamicPathSaveData` | class | `NewSaveData<BasicDynamicPath, BasicDynamicPathSaveData>` | 3 |  |
| `BasicPooledObjectPool` | abstract class |  | 3 |  |
| `BasicSaveData<TData>` | abstract class | `SaveData`, `ISavable<TData>`, `ISavableSave<TData>`, +1 more | 3 |  |
| `BasicTouchScreenButton` | abstract class | `MonoBehaviour`, `ITouchScreenButton` | 12 |  |
| `Beam` | class |  | 9 |  |
| `Bellows` | class | `MonoBehaviour` | 4 | [Smelting and forging](../game-systems/smelting-and-forging.md#bellows): Part of a smelter. Updates while its handle is held and until it settles. |
| `Belt` | class | `Turnable` | 4 | [Items, interaction and damage](../items/overview.md): A drive belt between pulleys in mechanisms. Not the player's belt. |
| `BeltVisual` | class | `MonoBehaviour` | 2 |  |
| `BezierControlPointMode` | enum |  | 3 |  |
| `BillboardParticle` | class | `MonoBehaviour` | 0 |  |
| `BillboardToPlayer` | class | `MonoBehaviour` | 1 |  |
| `BiomeAttribute` | class | `GeneralValue` | 4 | [Caves](../world/caves.md) |
| `BiomeAttribute.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomeAttribute>` | 0 |  |
| `BiomePreset` | class | `HashedGeneralValue<BiomePreset>` | 1 |  |
| `BiomePreset.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomePreset>` | 0 |  |
| `BiomeSphere` | class |  | 9 |  |
| `BiomeSphereComponent` | class | `MonoBehaviour` | 1 |  |
| `BiomeSphereGenerator` | class | `NodeMapModifier` | 3 |  |
| `BiomeSphereManager` | class |  | 6 |  |
| `BiomeSwitchFilter` | class | `SpawnModifierPointNormal` | 2 |  |
| `BiomeSwitchFilter.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomeSwitchFilter>` | 0 |  |
| `BlockingCharge` | class | `ProfessionSkill<BlockingCharge>`, `IStrikeSuccessionModifier` | 1 |  |
| `BlockingCharge.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BlockingCharge>` | 0 |  |
| `BlockLevel` | enum |  | 4 |  |
| `BobbingController` | class | `MonoBehaviour` | 4 |  |
| `Bone` | class | `MonoBehaviour` | 0 |  |
| `BoneIdentifier` | class | `ScriptableObject` | 0 |  |
| `BooleanInput` | class | `InputSource` | 3 |  |
| `BoolEvent` | class | `AltaEvent<bool, BoolUnityEvent>` | 0 |  |
| `BoolUnityEvent` | class | `UnityEvent<bool>` | 0 |  |
| `BoughtSkillCrystal` | class | `MonoBehaviour` | 4 |  |
| `BoughtSkillOrbReplacer` | class | `ProgressionSlotContainer` | 6 |  |
| `BoughtSkillVisualizer` | class | `SkillShrineVisualizer`, `IBuildRendererPostBake`, `IBuildBakeable` | 7 |  |
| `BouncingValue` | class | `MonoBehaviour` | 0 |  |
| `BoundExtensions` | static class |  | 1 |  |
| `BoundsContainer` | class |  | 3 |  |
| `BoundsDisplay` | class | `MonoBehaviour` | 0 |  |
| `Bow` | class | `NetworkEntityBehaviour` | 4 |  |
| `BowString` | class | `NetworkEntityBehaviour` | 8 |  |
| `BowStringPullbackInputMethod` | class | `ISkillInputMethod` | 2 |  |
| `BowStringPullbackStructure` | class | `SkillInputStructure` | 5 |  |
| `BowStringPullbackStructure.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<BowStringPullbackStructure>` | 0 |  |
| `BreakOnImpact` | class | `NetworkEntityBehaviour`, `IToolHitDependant` | 3 |  |
| `BreakOnImpact.TransformProxyEvent` | class | `AltaEvent<TransformProxy, TransformProxyHandler>` | 0 |  |
| `BreakOnImpact.TransformProxyHandler` | class | `UnityEvent<TransformProxy>` | 0 |  |
| `BubbleInspector` | class |  | 3 |  |
| `BubbleInspectorFieldAttribute` | class | `Attribute` | 2 |  |
| `BubbleInspectorMethodAttribute` | class | `Attribute` | 0 |  |
| `BudgetedUpdateModule` | class | `UpdateModule` | 5 | [Update modules](../console-and-utilities/update-modules.md#budgetedupdatemodule): Each frame it calls methods until `MsAllowance` milliseconds have passed, then stops and carries on from there next frame. |
| `BudgetedUpdateModuleProfiler` | class |  | 2 |  |
| `BudgetedUpdateModuleProfiler.BudgetedData` | class |  | 7 |  |
| `BudgetedUpdateModuleProfilerComponent` | class | `MonoBehaviour` | 0 |  |
| `BuildingAnimation` | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 10 |  |
| `BuildingAnimationEvent` | class | `AltaEvent<BuildingAnimation, BuildingAnimationUnityEvent>` | 0 |  |
| `BuildingAnimationUnityEvent` | class | `UnityEvent<BuildingAnimation>` | 0 |  |
| `BuildingAnimationWrapper` | class | `MonoBehaviour`, `IChangeWithChunking` | 5 |  |
| `BuildPipelinePathData` | class | `ScriptableObject` | 3 |  |
| `BuildupChild` | class | `NetworkEntityBehaviour` | 7 |  |
| `BuildupPickup` | class | `NetworkEntityBehaviour`, `ISavable<BuildupPickupSaveData>`, `ISavableSave<BuildupPickupSaveData>`, +1 more | 4 |  |
| `BuildupPickupEvent` | class | `AltaEvent<BuildupPickup, BuildupPickupHandler>` | 0 |  |
| `BuildupPickupHandler` | class | `UnityEvent<BuildupPickup>` | 0 |  |
| `BuildupPickupSaveData` | internal class | `NewSaveData<BuildupPickup, BuildupPickupSaveData>` | 1 |  |
| `BuriedItemTag` | class | `ItemComponent` | 3 |  |
| `ButtonCounter` | class | `NetworkEntityBehaviour`, `ISavable<ButtonCounterSaveData>`, `ISavableSave<ButtonCounterSaveData>`, +1 more | 15 |  |
| `ButtonCounter.AmountChangedHandler` | delegate |  | 0 |  |
| `ButtonCounter.CounterMode` | enum |  | 2 |  |
| `ButtonCounter.CountSyncMode` | enum |  | 2 |  |
| `ButtonCounterSaveData` | class | `NewSaveData<ButtonCounter, ButtonCounterSaveData>` | 1 |  |
| `ButtonSoundSettings` | class | `ButtonSettings` | 2 |  |
