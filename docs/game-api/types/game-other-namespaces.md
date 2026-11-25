---
title: "ATT, Features and other game namespaces"
description: "Types in the ATT, Features and Township namespaces and a few other small game namespaces."
sidebar_position: 14
---

# ATT, Features and other game namespaces

Types in the ATT, Features and Township namespaces and a few other small game namespaces. 233 types, 16 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## ATT

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `PrefabReference` | struct |  | 1 |  |

## ATT.Analytics

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaAnalyticsDispatcher` | class | `AbstractAnalyticsDispatcher`, `IIsolate` | 1 | [Alta's web API](../console-and-utilities/alta-web-api.md) |
| `AreaTriggerAnalyticsEvent` | class | `TownshipAnalyticsEvent` | 2 |  |
| `ChallengeAnalyticsEvent` | class | `TownshipAnalyticsEvent` | 9 |  |
| `TownshipAnalyticsEvent` | class | `AnalyticsEvent` | 0 |  |
| `UserSettingsAnalyticsEvent` | class | `TownshipAnalyticsEvent` | 1 |  |

## ATT.Analytics.Instruments

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ServerInfoInstrument` | class | `IAnalyticsInstrument` | 1 |  |

## ATT.Analytics.Social

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BanPlayerSocialAnalyticsEvent` | class | `SocialAnalyticsEvent` | 3 |  |
| `SocialAnalyticsEvent` | class | `AnalyticsEvent` | 7 |  |

## ATT.Character.QuickAccessMenu

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CommandSync` | class | `NetworkEntityBehaviour` | 3 |  |
| `PermissionsHelper` | static class |  | 2 |  |
| `ServerSettingsChangeLogger` | static class |  | 1 |  |
| `ServerSettingsSync` | class | `NetworkEntityBehaviour` | 7 |  |

## ATT.ClimbingTower

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `SpiritModeDoorwaySaveData` | internal class | `NewSaveData<SpiritModeDoorway, SpiritModeDoorwaySaveData>` | 4 |  |
| `SpiritModeDoorwaySaveDataOld1` | internal class | `OldSaveData` | 4 |  |

## ATT.Domains

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Domain` | class | `NetworkEntityBehaviour` | 11 |  |
| `DomainController` | class | `NetworkEntityBehaviour`, `IDomainController` | 6 |  |
| `DomainPlayerSpawnSetter` | class | `MonoBehaviour` | 0 |  |
| `IDomainController` | interface |  | 3 |  |

## ATT.EventBus

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `EventBusLocator` | class |  | 2 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| `ITownshipEventBus` | interface | `IEventBus` | 0 |  |
| `TownshipEventBus` | class | `Alta.Core.EventBus.EventBus`, `ITownshipEventBus`, `IEventBus` | 0 |  |

## ATT.EventBus.TownshipEvents

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ForceCompleteTutorialStepEvent` | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `IEventBusEventData` | interface |  | 0 |  |
| `IPlayerEvent` | interface | `IEventBusEventData` | 1 |  |
| `ItemCraftedEvent` | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| `ItemForgedEvent` | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md): the player and the prefab hash |
| `PlayerGrabbedPrefabEvent` | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `PlayerInPositionEvent` | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `PrefabInPositionEvent` | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `TownshipEventMicroTutorialExtensions` | static class |  | 1 |  |

## ATT.FeatureTestGymnasium

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ChunkDisplayTool` | class | `SingletonBehaviour<ChunkDisplayTool>` | 2 |  |
| `GymnasiumOnDemandPrefabSpawner` | class | `NetworkEntityBehaviour`, `ISavable<GymnasiumOnDemandPrefabSpawnerData>`, `ISavableSave<GymnasiumOnDemandPrefabSpawnerData>`, +1 more | 4 |  |
| `GymnasiumTeleportPointPage` | class | `PanelComponent` | 1 |  |
| `GymnasiumTeleportTablet` | class | `ActionItem` | 0 |  |
| `GymnasiumVisualChunkDisplayMode` | enum |  | 3 |  |
| `GymnasiumXpStatusDisplay` | class | `NetworkEntityBehaviour` | 2 |  |

## ATT.MainMenu.Scripts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `EventOrb` | class | `NetworkEntityBehaviour` | 3 |  |

## ATT.MicroTutorial

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClientController` | class |  | 1 |  |
| `ClientStepInstanceMap` | class |  | 5 |  |
| `DespawnStepContentCommand` | struct |  | 1 |  |
| `IMicroTutorial` | interface |  | 16 |  |
| `IMicroTutorialFactory` | interface |  | 1 |  |
| `IMicroTutorialSettings` | interface |  | 4 |  |
| `IMicroTutorialSystem` | interface |  | 4 |  |
| `IServerStepInstance` | interface | `IStepInstance` | 6 |  |
| `IStepInstance` | interface |  | 4 |  |
| `ISyncController` | interface |  | 9 |  |
| `LoadingStatus` | enum |  | 2 |  |
| `MicroTutorial` | class | `IMicroTutorial` | 18 |  |
| `MicroTutorialAnalyticsEvent` | class | `TownshipAnalyticsEvent` | 4 |  |
| `MicroTutorialFaceOrb` | class | `NetworkEntityBehaviour`, `ISavable<MicroTutorialFaceOrbSaveData>`, `ISavableSave<MicroTutorialFaceOrbSaveData>`, +1 more | 3 |  |
| `MicroTutorialFaceOrbSaveData` | internal class | `NewSaveData<MicroTutorialFaceOrb, MicroTutorialFaceOrbSaveData>` | 2 |  |
| `MicroTutorialFaceOrbSpawnSettings` | class | `GlobalSettings<MicroTutorialFaceOrbSpawnSettings>` | 1 |  |
| `MicroTutorialFaceOrbType` | enum |  | 2 |  |
| `MicroTutorialFactory` | class | `IMicroTutorialFactory` | 2 |  |
| `MicroTutorialLogger` | class |  | 7 |  |
| `MicroTutorialModule` | static class |  | 0 |  |
| `MicroTutorialOrbInjector` | class | `NetworkEntityBehaviour` | 1 |  |
| `MicroTutorialOrbSpawner` | class | `NetworkEntityBehaviour` | 1 |  |
| `MicroTutorialSettings` | class | `PlayerProgressFlag`, `IMicroTutorialSettings` | 7 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| `MicroTutorialSystem` | class | `NetworkEntityBehaviour`, `IMicroTutorialSystem` | 5 |  |
| `MicroTutorialSystemSettings` | class | `GlobalSettings<MicroTutorialSystemSettings>` | 2 |  |
| `OrbInjectorData` | struct |  | 2 |  |
| `OrbSpawnData` | struct |  | 2 |  |
| `PlayerEventBuffer` | class |  | 2 |  |
| `ResultExtensions` | static class |  | 1 |  |
| `ServerController` | class |  | 4 |  |
| `ServerStepInstance` | class | `StepInstance`, `IServerStepInstance`, `IStepInstance` | 8 |  |
| `SpawnStepContentCommand` | struct |  | 2 |  |
| `StepInstance` | class | `IStepInstance` | 6 |  |
| `SyncController` | class | `ISyncController` | 10 |  |
| `TutorialCompletedMessage` | class |  | 2 |  |
| `TutorialState` | enum |  | 3 |  |

## ATT.MicroTutorial.Steps

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AutoCompleteAfterDelayStep` | class | `MicroTutorialStep` | 1 |  |
| `AutoCompleteStep` | class | `MicroTutorialStep` | 1 |  |
| `DestroyStepContentStep` | class | `MicroTutorialStep` | 2 |  |
| `ItemCraftedStep` | class | `PlayerEventStep` | 3 |  |
| `ItemForgedStep` | class | `PlayerEventStep` | 3 |  |
| `MicroTutorialStep` | abstract class | `HashedGeneralValue<MicroTutorialStep>` | 10 |  |
| `PlayerEventStep` | class | `MicroTutorialStep` | 1 |  |
| `PlayerGrabbedPrefab` | class | `PlayerEventStep` | 3 |  |
| `PlayerInPositionObserver` | class | `MonoBehaviour` | 0 |  |
| `PlayerInPositionStep` | class | `PlayerEventStep` | 3 |  |
| `PrefabInPositionObserver` | class | `MonoBehaviour` | 0 |  |
| `PrefabInPositionStep` | class | `PlayerEventStep` | 3 |  |
| `SpawnStep` | class | `MicroTutorialStep` | 1 |  |

## ATT.PlayerStates

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AtmBalanceChangeData` | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| `CommandExecutedData` | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| `CustomizationStateSettings` | class | `PlayerStateSettings` | 7 |  |
| `CustomizationStateSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<CustomizationStateSettings>` | 0 |  |
| `DownedStateDebuffManager` | class |  | 3 |  |
| `DownedStateSettings` | class | `PlayerStateSettings` | 26 |  |
| `Gravestone` | class | `NetworkEntityBehaviour` | 3 |  |
| `InventoryChangeData` | class |  | 9 | [Console events](../console-and-utilities/console-events.md) |
| `InventoryChangeType` | enum |  | 4 |  |
| `InventoryType` | enum |  | 2 |  |
| `PlayerControllerPrefabs` | class | `GlobalSettings<PlayerControllerPrefabs>` | 5 |  |
| `PlayerControllerPrefabs.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<PlayerControllerPrefabs>` | 0 |  |
| `PlayerStatBasedVisualEffect` | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 1 |  |
| `ServerSettingsAge` | enum |  | 3 |  |
| `ServerSettingsChangeData` | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| `SocialTabletPlayerBanData` | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| `SocialTabletPlayerReportData` | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| `VisualEffectType` | enum |  | 2 |  |

## ATT.Progression

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `PlayerUnlockAnalytics` | class |  | 2 |  |

## ATT.Respawn

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DefaultPlayerRespawnPositionProvider` | class | `IPlayerRespawnPositionProvider` | 1 |  |
| `GlobalRespawnShrine` | class | `RespawnShrine` | 1 |  |
| `IPlayerRespawnPositionProvider` | interface |  | 1 |  |
| `IRespawnBeaconController` | interface |  | 1 |  |
| `IRespawnBeaconView` | interface |  | 2 |  |
| `IRespawnShrine` | interface |  | 1 |  |
| `IRespawnShrineModel` | interface |  | 9 |  |
| `IRespawnShrineSettings` | interface |  | 9 |  |
| `IRespawnSystem` | interface | `IPlayerRespawnPositionProvider` | 8 |  |
| `IRespawnSystemModel` | interface | `IEnumerable<IRespawnShrineModel>`, `IEnumerable` | 12 |  |
| `IRespawnSystemSettings` | interface | `IEnumerable<IRespawnShrineSettings>`, `IEnumerable` | 15 |  |
| `PoweredRespawnShrine` | class | `RespawnShrine`, `ISavable<PoweredRespawnShrineSaveData>`, `ISavableSave<PoweredRespawnShrineSaveData>`, +1 more | 7 |  |
| `PoweredRespawnShrineSaveData` | class | `NewSaveData<PoweredRespawnShrine, PoweredRespawnShrineSaveData>` | 1 |  |
| `RespawnBeaconController` | class | `NetworkEntityBehaviour`, `IRespawnBeaconController` | 2 |  |
| `RespawnBeaconView` | class | `MonoBehaviour`, `IRespawnBeaconView` | 2 |  |
| `RespawnShrine` | abstract class | `NetworkEntityBehaviour`, `IRespawnShrine` | 1 |  |
| `RespawnShrineData` | class | `ScriptableObject`, `IRespawnShrineSettings` | 9 |  |
| `RespawnShrineFuelDisplay` | class | `NetworkEntityBehaviour` | 1 |  |
| `RespawnShrineFuelDockController` | class | `MonoBehaviour` | 0 |  |
| `RespawnShrineModel` | class | `IRespawnShrineModel` | 11 |  |
| `RespawnShrinePowerIndicator` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| `RespawnShrineStaticAudioController` | class | `MonoBehaviour` | 1 |  |
| `RespawnShrineSubscriberMarkController` | class | `MonoBehaviour` | 2 |  |
| `RespawnSystem` | class | `NetworkEntityBehaviour`, `IRespawnSystem`, `IPlayerRespawnPositionProvider`, +3 more | 14 |  |
| `RespawnSystemModel` | class | `IRespawnSystemModel`, `IEnumerable<IRespawnShrineModel>`, `IEnumerable` | 15 |  |
| `RespawnSystemSaveData` | class | `NewSaveData<RespawnSystem, RespawnSystemSaveData>` | 2 |  |
| `RespawnSystemSettings` | class | `GlobalSettings<RespawnSystemSettings>`, `IRespawnSystemSettings`, `IEnumerable<IRespawnShrineSettings>`, +1 more | 16 |  |

## ATT.Saving

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `SaveMode` | enum |  | 5 | [Prefabs and prefab hashes](../world/prefabs.md#savemode): What happens to a spawned instance when its chunk saves or unloads. It's set on the instance (`prefab.SaveMode`); the spawn helpers that take a `SaveMode` set it for you. |

## ATT.TaskTracking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AutoFestiveAchievement` | class | `GameAchievement` | 1 |  |

## ATT.TownshipServer

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `FeatureSetFlags` | enum |  | 2 |  |
| `ServerFeatureSetProvider` | static class |  | 3 |  |

## ATT.Triggers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DebugTriggerEvent` | class | `ZoneEvent` | 1 |  |
| `ITriggerEventData` | interface |  | 1 |  |
| `SetChallengeCheckpointTriggerEvent` | class | `ZoneEvent` | 1 |  |
| `TriggerEventData` | class | `ScriptableObject`, `ITriggerEventData` | 2 |  |
| `TriggerZone` | class | `MonoBehaviour`, `ITeleportAwareTrigger`, `IForcePresenceOnAndroidClient` | 1 |  |
| `ZoneAnalyticsTriggerEvent` | class | `ZoneEvent` | 2 |  |
| `ZoneEvent` | abstract class | `ScriptableObject` | 1 |  |

## ATT.Utilities

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ICompletableActivity` | interface |  | 4 |  |
| `Rotator` | class | `NetworkEntityBehaviour` | 1 |  |

## Features

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `GenericVFXController` | class | `NetworkEntityBehaviour` | 5 |  |
| `HandTouchVfxController` | class | `GenericVFXController` | 2 |  |
| `PooledParticleSystem` | class | `PooledObject` | 2 |  |
| `RepairBoxVfxController` | class | `GenericVFXController` | 5 |  |
| `ServerBoardFilter` | class | `MonoBehaviour` | 3 |  |
| `VariableIntensityPlayerLight` | class | `MonoBehaviour` | 4 |  |

## Features.Analytics.ClimbingTower

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClimbingTowerAnalyticEventType` | enum |  | 6 |  |
| `TowerAnalyticsReporter` | class | `MonoBehaviour` | 2 |  |

## Features.Analytics.Registration

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AccountRequiredPopupAnalytics` | class | `MonoBehaviour` | 0 |  |
| `SignupAnalyticsReporter` | class | `MonoBehaviour` | 10 |  |

## Features.Climbing

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClimbingHand` | class |  | 20 |  |
| `ClimbingHandler` | class |  | 13 |  |
| `ClimbingHandlerAnalytics` | class |  | 2 |  |
| `ClimbingMovementEvent` | internal class | `AnalyticsEvent` | 1 |  |
| `ClimbingPressureCalculator` | class |  | 4 |  |
| `FakeStaminaManager` | class | `IHandStaminaManager` | 2 |  |
| `HandStaminaManager` | class | `IHandStaminaManager` | 5 |  |
| `StaminaUsageRecord` | internal struct |  | 2 |  |

## Features.Core.Device.Pico

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `PicoLoginController` | class | `MonoBehaviour` | 2 |  |

## Features.Gameplay

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AddUnlockToPlayer` | class | `NetworkEntityBehaviour`, `ISavable<AddUnlockToPlayerSaveData>`, `ISavableSave<AddUnlockToPlayerSaveData>`, +1 more | 3 |  |
| `AddUnlockToPlayerSaveData` | class | `NewSaveData<AddUnlockToPlayer, AddUnlockToPlayerSaveData>` | 1 |  |
| `OrbBasinVfxController` | class | `NetworkEntityBehaviour`, `ISavable<OrbBasinVfxControllerSaveData>`, `ISavableSave<OrbBasinVfxControllerSaveData>`, +1 more | 5 |  |
| `OrbBasinVfxControllerSaveData` | class | `NewSaveData<OrbBasinVfxController, OrbBasinVfxControllerSaveData>` | 3 |  |
| `OrbBasinVfxControllerSaveData1` | class | `OldSaveData` | 5 |  |

## Features.Gameplay.Activities.Carpentry

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BasicChiselable` | class | `NetworkEntityBehaviour`, `IChiselable` | 5 |  |

## Features.Gameplay.ClimbingTower

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClimbingTowerProgressionVisualizer` | class | `NetworkEntityBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable`, +3 more | 4 |  |
| `ClimbingTowerProgressionVisualizerSaveData` | class | `NewSaveData<ClimbingTowerProgressionVisualizer, ClimbingTowerProgressionVisualizerSaveData>` | 2 |  |
| `ClimbingTowerTeleporterNode` | class | `NetworkEntityBehaviour`, `ISavable<ClimbingTowerTeleporterNodeSaveData>`, `ISavableSave<ClimbingTowerTeleporterNodeSaveData>`, +1 more | 5 |  |
| `ClimbingTowerTeleporterNodeSaveData` | class | `NewSaveData<ClimbingTowerTeleporterNode, ClimbingTowerTeleporterNodeSaveData>` | 3 |  |
| `ClimbingTowerTeleporterNodeSaveDataOld1` | class | `OldSaveData` | 3 |  |
| `ClimbingTowerTeleporterNodeSaveDataOld2` | class | `OldSaveData` | 4 |  |
| `ClimbingTowerTeleporterPerPlayerSaveable` | class | `PerPlayerManager<ClimbingTowerTeleporterPerPlayerSaveable, ClimbingTowerTeleporterSave, ClimbingTowerTeleporterSaveData>` | 0 |  |
| `ClimbingTowerTeleporterSave` | class | `PerPlayerContent<ClimbingTowerTeleporterSaveData>` | 0 |  |
| `ClimbingTowerTeleporterSaveData` | class | `IAltaFileFormat` | 5 |  |
| `DisableAfterDuration` | class | `MonoBehaviour` | 0 |  |
| `SpiritModeDoorway` | class | `NetworkEntityBehaviour`, `ITeleportAwareTrigger`, `IDontSplit`, +4 more | 5 |  |
| `SpiritModeDoorwayMode` | enum |  | 2 |  |

## Features.Gameplay.GameConditions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IGameCondition` | interface |  | 2 |  |
| `ManualCondition` | class | `NetworkEntityBehaviour`, `IGameCondition`, `ISavable<ManualConditionSaveData>`, +2 more | 2 |  |
| `ManualConditionSaveData` | class | `NewSaveData<ManualCondition, ManualConditionSaveData>` | 1 |  |
| `NetworkedGameConditionEvaluator` | class | `NetworkEntityBehaviour`, `IGameCondition` | 4 |  |
| `PendingRepairBoxCompletionCondition` | class | `MonoBehaviour`, `IGameCondition` | 2 |  |
| `RepairableObject` | struct |  | 3 |  |
| `RepairableObjectComparisonCondition` | class | `NetworkEntityBehaviour`, `IGameCondition`, `ISavable<RepairableObjectComparisonConditionSaveData>`, +2 more | 2 |  |
| `RepairableObjectComparisonConditionSaveData` | class | `NewSaveData<RepairableObjectComparisonCondition, RepairableObjectComparisonConditionSaveData>` | 2 |  |

## Features.Gameplay.GameConditions.StaticObjectMapped

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `RepairableObjectBuildState` | enum |  | 2 |  |

## Features.Gameplay.Inventory.SurfaceDock

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ChiselableSurfaceDock` | class | `BasicChiselable` | 0 |  |

## Features.Gameplay.Progression.QuestMarkers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `QuestMarker` | class | `MonoBehaviour` | 1 |  |

## Features.Main_Menu.Scripts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AccessibilitySeatedStandingBoard` | class | `PopupBoard` | 0 |  |

## Features.Main_Menu.Scripts.TalemShop

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IAPViewModel` | class | `LoggedInTool` | 1 |  |
| `IShopController` | interface |  | 2 |  |
| `PurchaseResult` | class |  | 4 |  |

## Features.Main_Menu.Scripts.TalemShop.Errors

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `NoShopForPlatformError` | internal class | `PurchaseError` | 1 |  |
| `NotLoggedInOnPlatformError` | class | `PurchaseError` | 1 |  |
| `PendingPurchasesError` | class | `PurchaseError` | 1 |  |
| `PurchaseError` | class |  | 2 |  |
| `UnknownPurchaseError` | class | `PurchaseError` | 1 |  |
| `UnknownPurchaseExceptionError` | class | `PurchaseError` | 1 |  |
| `UserCancelledError` | class | `PurchaseError` | 1 |  |

## Features.Meta.Platform.Oculus

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IOculusWrapper` | interface |  | 16 |  |

## Features.Meta.Resolvers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AddressableResolverSettings` | class | `GlobalSettings<AddressableResolverSettings>` | 1 |  |
| `InterfaceResolver` | class |  | 7 |  |

## Features.Shop

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IPurchaseConsumer` | interface |  | 2 |  |

## Features.Utility.UnityWrappers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ITestUnityApplicationWrapper` | interface |  | 1 |  |
| `IUnityApplicationWrapper` | interface |  | 1 |  |
| `UnityApplicationWrapper` | class | `IUnityApplicationWrapper`, `ITestUnityApplicationWrapper` | 2 |  |

## Features.Visual_Effects.General_Scripts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ParticlesToPlayer` | class | `NetworkEntityBehaviour`, `ISavable<ParticlesToPlayerSaveData>`, `ISavableSave<ParticlesToPlayerSaveData>`, +1 more | 5 |  |
| `ParticlesToPlayerSaveData` | class | `NewSaveData<ParticlesToPlayer, ParticlesToPlayerSaveData>` | 1 |  |
| `PooledParticleSystemManipulator` | class | `PooledObject`, `IBuildRendererPostBake`, `IBuildBakeable` | 3 |  |

## Features.Visual_Effects.VFXData

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `VfxData` | class | `HashedGeneralValue<VfxData>` | 7 |  |

## Features.World.Environmental.Atmosphere

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `InteriorFogAmbience` | class | `AtmospherePlugin` | 4 |  |

## GameCommands.Messages

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CommandType` | enum |  | 1 |  |
| `GameCommandMessage` | class |  | 1 |  |
| `GameResponseMessage` | class |  | 2 |  |

## TableParser

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `TableOrderAttribute` | class | `Attribute` | 2 |  |
| `TableParserExtensions` | static class |  | 5 |  |

## Township.Climbing

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClimbingEditorSettings` | class | `ScriptableObject` | 4 |  |

## Township.Downed

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `RespawnOrb` | class | `EventOrb` | 2 |  |
| `ReviveCompletableActivity` | class | `ICompletableActivity` | 9 |  |
| `ReviveOrb` | class | `EventOrb` | 3 |  |
| `ReviveOrbMovementModifier` | class | `MonoBehaviour` | 2 |  |

## Township.PostProcessing

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `TextureFormatUtilities` | static class |  | 0 |  |

## UnityEngine.UI

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CustomOutline` | class | `Shadow` | 6 |  |

## WindowsConsole

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ConsoleInput` | class |  | 8 |  |
| `ConsoleWindow` | class |  | 5 |  |
| `ConsoleWindow.CtrlType` | enum |  | 5 |  |
| `ConsoleWindow.HandlerRoutine` | delegate |  | 0 |  |
