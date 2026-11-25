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
| [`PrefabReference`](/game-api/types/game-other-namespaces/prefabreference) | struct |  | 1 |  |

## ATT.Analytics

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AltaAnalyticsDispatcher`](/game-api/types/game-other-namespaces/altaanalyticsdispatcher) | class | `AbstractAnalyticsDispatcher`, `IIsolate` | 1 | [Alta's web API](../console-and-utilities/alta-web-api.md) |
| [`AreaTriggerAnalyticsEvent`](/game-api/types/game-other-namespaces/areatriggeranalyticsevent) | class | `TownshipAnalyticsEvent` | 2 |  |
| [`ChallengeAnalyticsEvent`](/game-api/types/game-other-namespaces/challengeanalyticsevent) | class | `TownshipAnalyticsEvent` | 9 |  |
| [`TownshipAnalyticsEvent`](/game-api/types/game-other-namespaces/townshipanalyticsevent) | class | `AnalyticsEvent` | 0 |  |
| [`UserSettingsAnalyticsEvent`](/game-api/types/game-other-namespaces/usersettingsanalyticsevent) | class | `TownshipAnalyticsEvent` | 1 |  |

## ATT.Analytics.Instruments

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ServerInfoInstrument`](/game-api/types/game-other-namespaces/serverinfoinstrument) | class | `IAnalyticsInstrument` | 1 |  |

## ATT.Analytics.Social

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BanPlayerSocialAnalyticsEvent`](/game-api/types/game-other-namespaces/banplayersocialanalyticsevent) | class | `SocialAnalyticsEvent` | 3 |  |
| [`SocialAnalyticsEvent`](/game-api/types/game-other-namespaces/socialanalyticsevent) | class | `AnalyticsEvent` | 7 |  |

## ATT.Character.QuickAccessMenu

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`CommandSync`](/game-api/types/game-other-namespaces/commandsync) | class | `NetworkEntityBehaviour` | 3 |  |
| [`PermissionsHelper`](/game-api/types/game-other-namespaces/permissionshelper) | static class |  | 2 |  |
| [`ServerSettingsChangeLogger`](/game-api/types/game-other-namespaces/serversettingschangelogger) | static class |  | 1 |  |
| [`ServerSettingsSync`](/game-api/types/game-other-namespaces/serversettingssync) | class | `NetworkEntityBehaviour` | 7 |  |

## ATT.ClimbingTower

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`SpiritModeDoorwaySaveData`](/game-api/types/game-other-namespaces/spiritmodedoorwaysavedata) | internal class | `NewSaveData<SpiritModeDoorway, SpiritModeDoorwaySaveData>` | 4 |  |
| [`SpiritModeDoorwaySaveDataOld1`](/game-api/types/game-other-namespaces/spiritmodedoorwaysavedataold1) | internal class | `OldSaveData` | 4 |  |

## ATT.Domains

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`Domain`](/game-api/types/game-other-namespaces/domain) | class | `NetworkEntityBehaviour` | 11 |  |
| [`DomainController`](/game-api/types/game-other-namespaces/domaincontroller) | class | `NetworkEntityBehaviour`, `IDomainController` | 6 |  |
| [`DomainPlayerSpawnSetter`](/game-api/types/game-other-namespaces/domainplayerspawnsetter) | class | `MonoBehaviour` | 0 |  |
| [`IDomainController`](/game-api/types/game-other-namespaces/idomaincontroller) | interface |  | 3 |  |

## ATT.EventBus

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`EventBusLocator`](/game-api/types/game-other-namespaces/eventbuslocator) | class |  | 2 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`ITownshipEventBus`](/game-api/types/game-other-namespaces/itownshipeventbus) | interface | `IEventBus` | 0 |  |
| [`TownshipEventBus`](/game-api/types/game-other-namespaces/townshipeventbus) | class | `Alta.Core.EventBus.EventBus`, `ITownshipEventBus`, `IEventBus` | 0 |  |

## ATT.EventBus.TownshipEvents

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ForceCompleteTutorialStepEvent`](/game-api/types/game-other-namespaces/forcecompletetutorialstepevent) | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`IEventBusEventData`](/game-api/types/game-other-namespaces/ieventbuseventdata) | interface |  | 0 |  |
| [`IPlayerEvent`](/game-api/types/game-other-namespaces/iplayerevent) | interface | `IEventBusEventData` | 1 |  |
| [`ItemCraftedEvent`](/game-api/types/game-other-namespaces/itemcraftedevent) | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`ItemForgedEvent`](/game-api/types/game-other-namespaces/itemforgedevent) | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md): the player and the prefab hash |
| [`PlayerGrabbedPrefabEvent`](/game-api/types/game-other-namespaces/playergrabbedprefabevent) | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`PlayerInPositionEvent`](/game-api/types/game-other-namespaces/playerinpositionevent) | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`PrefabInPositionEvent`](/game-api/types/game-other-namespaces/prefabinpositionevent) | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`TownshipEventMicroTutorialExtensions`](/game-api/types/game-other-namespaces/townshipeventmicrotutorialextensions) | static class |  | 1 |  |

## ATT.FeatureTestGymnasium

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ChunkDisplayTool`](/game-api/types/game-other-namespaces/chunkdisplaytool) | class | `SingletonBehaviour<ChunkDisplayTool>` | 2 |  |
| [`GymnasiumOnDemandPrefabSpawner`](/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner) | class | `NetworkEntityBehaviour`, `ISavable<GymnasiumOnDemandPrefabSpawnerData>`, `ISavableSave<GymnasiumOnDemandPrefabSpawnerData>`, +1 more | 4 |  |
| [`GymnasiumTeleportPointPage`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage) | class | `PanelComponent` | 1 |  |
| [`GymnasiumTeleportTablet`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet) | class | `ActionItem` | 0 |  |
| [`GymnasiumVisualChunkDisplayMode`](/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode) | enum |  | 3 |  |
| [`GymnasiumXpStatusDisplay`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay) | class | `NetworkEntityBehaviour` | 2 |  |

## ATT.MainMenu.Scripts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`EventOrb`](/game-api/types/game-other-namespaces/eventorb) | class | `NetworkEntityBehaviour` | 3 |  |

## ATT.MicroTutorial

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClientController`](/game-api/types/game-other-namespaces/clientcontroller) | class |  | 1 |  |
| [`ClientStepInstanceMap`](/game-api/types/game-other-namespaces/clientstepinstancemap) | class |  | 5 |  |
| [`DespawnStepContentCommand`](/game-api/types/game-other-namespaces/despawnstepcontentcommand) | struct |  | 1 |  |
| [`IMicroTutorial`](/game-api/types/game-other-namespaces/imicrotutorial) | interface |  | 16 |  |
| [`IMicroTutorialFactory`](/game-api/types/game-other-namespaces/imicrotutorialfactory) | interface |  | 1 |  |
| [`IMicroTutorialSettings`](/game-api/types/game-other-namespaces/imicrotutorialsettings) | interface |  | 4 |  |
| [`IMicroTutorialSystem`](/game-api/types/game-other-namespaces/imicrotutorialsystem) | interface |  | 4 |  |
| [`IServerStepInstance`](/game-api/types/game-other-namespaces/iserverstepinstance) | interface | `IStepInstance` | 6 |  |
| [`IStepInstance`](/game-api/types/game-other-namespaces/istepinstance) | interface |  | 4 |  |
| [`ISyncController`](/game-api/types/game-other-namespaces/isynccontroller) | interface |  | 9 |  |
| [`LoadingStatus`](/game-api/types/game-other-namespaces/loadingstatus) | enum |  | 2 |  |
| [`MicroTutorial`](/game-api/types/game-other-namespaces/microtutorial) | class | `IMicroTutorial` | 18 |  |
| [`MicroTutorialAnalyticsEvent`](/game-api/types/game-other-namespaces/microtutorialanalyticsevent) | class | `TownshipAnalyticsEvent` | 4 |  |
| [`MicroTutorialFaceOrb`](/game-api/types/game-other-namespaces/microtutorialfaceorb) | class | `NetworkEntityBehaviour`, `ISavable<MicroTutorialFaceOrbSaveData>`, `ISavableSave<MicroTutorialFaceOrbSaveData>`, +1 more | 3 |  |
| [`MicroTutorialFaceOrbSaveData`](/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata) | internal class | `NewSaveData<MicroTutorialFaceOrb, MicroTutorialFaceOrbSaveData>` | 2 |  |
| [`MicroTutorialFaceOrbSpawnSettings`](/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings) | class | `GlobalSettings<MicroTutorialFaceOrbSpawnSettings>` | 1 |  |
| [`MicroTutorialFaceOrbType`](/game-api/types/game-other-namespaces/microtutorialfaceorbtype) | enum |  | 2 |  |
| [`MicroTutorialFactory`](/game-api/types/game-other-namespaces/microtutorialfactory) | class | `IMicroTutorialFactory` | 2 |  |
| [`MicroTutorialLogger`](/game-api/types/game-other-namespaces/microtutoriallogger) | class |  | 7 |  |
| [`MicroTutorialModule`](/game-api/types/game-other-namespaces/microtutorialmodule) | static class |  | 0 |  |
| [`MicroTutorialOrbInjector`](/game-api/types/game-other-namespaces/microtutorialorbinjector) | class | `NetworkEntityBehaviour` | 1 |  |
| [`MicroTutorialOrbSpawner`](/game-api/types/game-other-namespaces/microtutorialorbspawner) | class | `NetworkEntityBehaviour` | 1 |  |
| [`MicroTutorialSettings`](/game-api/types/game-other-namespaces/microtutorialsettings) | class | `PlayerProgressFlag`, `IMicroTutorialSettings` | 7 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`MicroTutorialSystem`](/game-api/types/game-other-namespaces/microtutorialsystem) | class | `NetworkEntityBehaviour`, `IMicroTutorialSystem` | 5 |  |
| [`MicroTutorialSystemSettings`](/game-api/types/game-other-namespaces/microtutorialsystemsettings) | class | `GlobalSettings<MicroTutorialSystemSettings>` | 2 |  |
| [`OrbInjectorData`](/game-api/types/game-other-namespaces/orbinjectordata) | struct |  | 2 |  |
| [`OrbSpawnData`](/game-api/types/game-other-namespaces/orbspawndata) | struct |  | 2 |  |
| [`PlayerEventBuffer`](/game-api/types/game-other-namespaces/playereventbuffer) | class |  | 2 |  |
| [`ResultExtensions`](/game-api/types/game-other-namespaces/resultextensions) | static class |  | 1 |  |
| [`ServerController`](/game-api/types/game-other-namespaces/servercontroller) | class |  | 4 |  |
| [`ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance) | class | `StepInstance`, `IServerStepInstance`, `IStepInstance` | 8 |  |
| [`SpawnStepContentCommand`](/game-api/types/game-other-namespaces/spawnstepcontentcommand) | struct |  | 2 |  |
| [`StepInstance`](/game-api/types/game-other-namespaces/stepinstance) | class | `IStepInstance` | 6 |  |
| [`SyncController`](/game-api/types/game-other-namespaces/synccontroller) | class | `ISyncController` | 10 |  |
| [`TutorialCompletedMessage`](/game-api/types/game-other-namespaces/tutorialcompletedmessage) | class |  | 2 |  |
| [`TutorialState`](/game-api/types/game-other-namespaces/tutorialstate) | enum |  | 3 |  |

## ATT.MicroTutorial.Steps

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AutoCompleteAfterDelayStep`](/game-api/types/game-other-namespaces/autocompleteafterdelaystep) | class | `MicroTutorialStep` | 1 |  |
| [`AutoCompleteStep`](/game-api/types/game-other-namespaces/autocompletestep) | class | `MicroTutorialStep` | 1 |  |
| [`DestroyStepContentStep`](/game-api/types/game-other-namespaces/destroystepcontentstep) | class | `MicroTutorialStep` | 2 |  |
| [`ItemCraftedStep`](/game-api/types/game-other-namespaces/itemcraftedstep) | class | `PlayerEventStep` | 3 |  |
| [`ItemForgedStep`](/game-api/types/game-other-namespaces/itemforgedstep) | class | `PlayerEventStep` | 3 |  |
| [`MicroTutorialStep`](/game-api/types/game-other-namespaces/microtutorialstep) | abstract class | `HashedGeneralValue<MicroTutorialStep>` | 10 |  |
| [`PlayerEventStep`](/game-api/types/game-other-namespaces/playereventstep) | class | `MicroTutorialStep` | 1 |  |
| [`PlayerGrabbedPrefab`](/game-api/types/game-other-namespaces/playergrabbedprefab) | class | `PlayerEventStep` | 3 |  |
| [`PlayerInPositionObserver`](/game-api/types/game-other-namespaces/playerinpositionobserver) | class | `MonoBehaviour` | 0 |  |
| [`PlayerInPositionStep`](/game-api/types/game-other-namespaces/playerinpositionstep) | class | `PlayerEventStep` | 3 |  |
| [`PrefabInPositionObserver`](/game-api/types/game-other-namespaces/prefabinpositionobserver) | class | `MonoBehaviour` | 0 |  |
| [`PrefabInPositionStep`](/game-api/types/game-other-namespaces/prefabinpositionstep) | class | `PlayerEventStep` | 3 |  |
| [`SpawnStep`](/game-api/types/game-other-namespaces/spawnstep) | class | `MicroTutorialStep` | 1 |  |

## ATT.PlayerStates

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AtmBalanceChangeData`](/game-api/types/game-other-namespaces/atmbalancechangedata) | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| [`CommandExecutedData`](/game-api/types/game-other-namespaces/commandexecuteddata) | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| [`CustomizationStateSettings`](/game-api/types/game-other-namespaces/customizationstatesettings) | class | `PlayerStateSettings` | 7 |  |
| [`CustomizationStateSettings.Create`](/game-api/types/game-other-namespaces/customizationstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<CustomizationStateSettings>` | 0 |  |
| [`DownedStateDebuffManager`](/game-api/types/game-other-namespaces/downedstatedebuffmanager) | class |  | 3 |  |
| [`DownedStateSettings`](/game-api/types/game-other-namespaces/downedstatesettings) | class | `PlayerStateSettings` | 26 |  |
| [`Gravestone`](/game-api/types/game-other-namespaces/gravestone) | class | `NetworkEntityBehaviour` | 3 |  |
| [`InventoryChangeData`](/game-api/types/game-other-namespaces/inventorychangedata) | class |  | 9 | [Console events](../console-and-utilities/console-events.md) |
| [`InventoryChangeType`](/game-api/types/game-other-namespaces/inventorychangetype) | enum |  | 4 |  |
| [`InventoryType`](/game-api/types/game-other-namespaces/inventorytype) | enum |  | 2 |  |
| [`PlayerControllerPrefabs`](/game-api/types/game-other-namespaces/playercontrollerprefabs) | class | `GlobalSettings<PlayerControllerPrefabs>` | 5 |  |
| [`PlayerControllerPrefabs.Create`](/game-api/types/game-other-namespaces/playercontrollerprefabs-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<PlayerControllerPrefabs>` | 0 |  |
| [`PlayerStatBasedVisualEffect`](/game-api/types/game-other-namespaces/playerstatbasedvisualeffect) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 1 |  |
| [`ServerSettingsAge`](/game-api/types/game-other-namespaces/serversettingsage) | enum |  | 3 |  |
| [`ServerSettingsChangeData`](/game-api/types/game-other-namespaces/serversettingschangedata) | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`SocialTabletPlayerBanData`](/game-api/types/game-other-namespaces/socialtabletplayerbandata) | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| [`SocialTabletPlayerReportData`](/game-api/types/game-other-namespaces/socialtabletplayerreportdata) | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| [`VisualEffectType`](/game-api/types/game-other-namespaces/visualeffecttype) | enum |  | 2 |  |

## ATT.Progression

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`PlayerUnlockAnalytics`](/game-api/types/game-other-namespaces/playerunlockanalytics) | class |  | 2 |  |

## ATT.Respawn

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`DefaultPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/defaultplayerrespawnpositionprovider) | class | `IPlayerRespawnPositionProvider` | 1 |  |
| [`GlobalRespawnShrine`](/game-api/types/game-other-namespaces/globalrespawnshrine) | class | `RespawnShrine` | 1 |  |
| [`IPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider) | interface |  | 1 |  |
| [`IRespawnBeaconController`](/game-api/types/game-other-namespaces/irespawnbeaconcontroller) | interface |  | 1 |  |
| [`IRespawnBeaconView`](/game-api/types/game-other-namespaces/irespawnbeaconview) | interface |  | 2 |  |
| [`IRespawnShrine`](/game-api/types/game-other-namespaces/irespawnshrine) | interface |  | 1 |  |
| [`IRespawnShrineModel`](/game-api/types/game-other-namespaces/irespawnshrinemodel) | interface |  | 9 |  |
| [`IRespawnShrineSettings`](/game-api/types/game-other-namespaces/irespawnshrinesettings) | interface |  | 9 |  |
| [`IRespawnSystem`](/game-api/types/game-other-namespaces/irespawnsystem) | interface | `IPlayerRespawnPositionProvider` | 8 |  |
| [`IRespawnSystemModel`](/game-api/types/game-other-namespaces/irespawnsystemmodel) | interface | `IEnumerable<IRespawnShrineModel>`, `IEnumerable` | 12 |  |
| [`IRespawnSystemSettings`](/game-api/types/game-other-namespaces/irespawnsystemsettings) | interface | `IEnumerable<IRespawnShrineSettings>`, `IEnumerable` | 15 |  |
| [`PoweredRespawnShrine`](/game-api/types/game-other-namespaces/poweredrespawnshrine) | class | `RespawnShrine`, `ISavable<PoweredRespawnShrineSaveData>`, `ISavableSave<PoweredRespawnShrineSaveData>`, +1 more | 7 |  |
| [`PoweredRespawnShrineSaveData`](/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata) | class | `NewSaveData<PoweredRespawnShrine, PoweredRespawnShrineSaveData>` | 1 |  |
| [`RespawnBeaconController`](/game-api/types/game-other-namespaces/respawnbeaconcontroller) | class | `NetworkEntityBehaviour`, `IRespawnBeaconController` | 2 |  |
| [`RespawnBeaconView`](/game-api/types/game-other-namespaces/respawnbeaconview) | class | `MonoBehaviour`, `IRespawnBeaconView` | 2 |  |
| [`RespawnShrine`](/game-api/types/game-other-namespaces/respawnshrine) | abstract class | `NetworkEntityBehaviour`, `IRespawnShrine` | 1 |  |
| [`RespawnShrineData`](/game-api/types/game-other-namespaces/respawnshrinedata) | class | `ScriptableObject`, `IRespawnShrineSettings` | 9 |  |
| [`RespawnShrineFuelDisplay`](/game-api/types/game-other-namespaces/respawnshrinefueldisplay) | class | `NetworkEntityBehaviour` | 1 |  |
| [`RespawnShrineFuelDockController`](/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller) | class | `MonoBehaviour` | 0 |  |
| [`RespawnShrineModel`](/game-api/types/game-other-namespaces/respawnshrinemodel) | class | `IRespawnShrineModel` | 11 |  |
| [`RespawnShrinePowerIndicator`](/game-api/types/game-other-namespaces/respawnshrinepowerindicator) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| [`RespawnShrineStaticAudioController`](/game-api/types/game-other-namespaces/respawnshrinestaticaudiocontroller) | class | `MonoBehaviour` | 1 |  |
| [`RespawnShrineSubscriberMarkController`](/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller) | class | `MonoBehaviour` | 2 |  |
| [`RespawnSystem`](/game-api/types/game-other-namespaces/respawnsystem) | class | `NetworkEntityBehaviour`, `IRespawnSystem`, `IPlayerRespawnPositionProvider`, +3 more | 14 |  |
| [`RespawnSystemModel`](/game-api/types/game-other-namespaces/respawnsystemmodel) | class | `IRespawnSystemModel`, `IEnumerable<IRespawnShrineModel>`, `IEnumerable` | 15 |  |
| [`RespawnSystemSaveData`](/game-api/types/game-other-namespaces/respawnsystemsavedata) | class | `NewSaveData<RespawnSystem, RespawnSystemSaveData>` | 2 |  |
| [`RespawnSystemSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings) | class | `GlobalSettings<RespawnSystemSettings>`, `IRespawnSystemSettings`, `IEnumerable<IRespawnShrineSettings>`, +1 more | 16 |  |

## ATT.Saving

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`SaveMode`](/game-api/types/game-other-namespaces/savemode) | enum |  | 5 | [Prefabs and prefab hashes](../world/prefabs.md#savemode): What happens to a spawned instance when its chunk saves or unloads. It's set on the instance (`prefab.SaveMode`); the spawn helpers that take a `SaveMode` set it for you. |

## ATT.TaskTracking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AutoFestiveAchievement`](/game-api/types/game-other-namespaces/autofestiveachievement) | class | `GameAchievement` | 1 |  |

## ATT.TownshipServer

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`FeatureSetFlags`](/game-api/types/game-other-namespaces/featuresetflags) | enum |  | 2 |  |
| [`ServerFeatureSetProvider`](/game-api/types/game-other-namespaces/serverfeaturesetprovider) | static class |  | 3 |  |

## ATT.Triggers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`DebugTriggerEvent`](/game-api/types/game-other-namespaces/debugtriggerevent) | class | `ZoneEvent` | 1 |  |
| [`ITriggerEventData`](/game-api/types/game-other-namespaces/itriggereventdata) | interface |  | 1 |  |
| [`SetChallengeCheckpointTriggerEvent`](/game-api/types/game-other-namespaces/setchallengecheckpointtriggerevent) | class | `ZoneEvent` | 1 |  |
| [`TriggerEventData`](/game-api/types/game-other-namespaces/triggereventdata) | class | `ScriptableObject`, `ITriggerEventData` | 2 |  |
| [`TriggerZone`](/game-api/types/game-other-namespaces/triggerzone) | class | `MonoBehaviour`, `ITeleportAwareTrigger`, `IForcePresenceOnAndroidClient` | 1 |  |
| [`ZoneAnalyticsTriggerEvent`](/game-api/types/game-other-namespaces/zoneanalyticstriggerevent) | class | `ZoneEvent` | 2 |  |
| [`ZoneEvent`](/game-api/types/game-other-namespaces/zoneevent) | abstract class | `ScriptableObject` | 1 |  |

## ATT.Utilities

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ICompletableActivity`](/game-api/types/game-other-namespaces/icompletableactivity) | interface |  | 4 |  |
| [`Rotator`](/game-api/types/game-other-namespaces/rotator) | class | `NetworkEntityBehaviour` | 1 |  |

## Features

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`GenericVFXController`](/game-api/types/game-other-namespaces/genericvfxcontroller) | class | `NetworkEntityBehaviour` | 5 |  |
| [`HandTouchVfxController`](/game-api/types/game-other-namespaces/handtouchvfxcontroller) | class | `GenericVFXController` | 2 |  |
| [`PooledParticleSystem`](/game-api/types/game-other-namespaces/pooledparticlesystem) | class | `PooledObject` | 2 |  |
| [`RepairBoxVfxController`](/game-api/types/game-other-namespaces/repairboxvfxcontroller) | class | `GenericVFXController` | 5 |  |
| [`ServerBoardFilter`](/game-api/types/game-other-namespaces/serverboardfilter) | class | `MonoBehaviour` | 3 |  |
| [`VariableIntensityPlayerLight`](/game-api/types/game-other-namespaces/variableintensityplayerlight) | class | `MonoBehaviour` | 4 |  |

## Features.Analytics.ClimbingTower

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClimbingTowerAnalyticEventType`](/game-api/types/game-other-namespaces/climbingtoweranalyticeventtype) | enum |  | 6 |  |
| [`TowerAnalyticsReporter`](/game-api/types/game-other-namespaces/toweranalyticsreporter) | class | `MonoBehaviour` | 2 |  |

## Features.Analytics.Registration

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AccountRequiredPopupAnalytics`](/game-api/types/game-other-namespaces/accountrequiredpopupanalytics) | class | `MonoBehaviour` | 0 |  |
| [`SignupAnalyticsReporter`](/game-api/types/game-other-namespaces/signupanalyticsreporter) | class | `MonoBehaviour` | 10 |  |

## Features.Climbing

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClimbingHand`](/game-api/types/game-other-namespaces/climbinghand) | class |  | 20 |  |
| [`ClimbingHandler`](/game-api/types/game-other-namespaces/climbinghandler) | class |  | 13 |  |
| [`ClimbingHandlerAnalytics`](/game-api/types/game-other-namespaces/climbinghandleranalytics) | class |  | 2 |  |
| [`ClimbingMovementEvent`](/game-api/types/game-other-namespaces/climbingmovementevent) | internal class | `AnalyticsEvent` | 1 |  |
| [`ClimbingPressureCalculator`](/game-api/types/game-other-namespaces/climbingpressurecalculator) | class |  | 4 |  |
| [`FakeStaminaManager`](/game-api/types/game-other-namespaces/fakestaminamanager) | class | `IHandStaminaManager` | 2 |  |
| [`HandStaminaManager`](/game-api/types/game-other-namespaces/handstaminamanager) | class | `IHandStaminaManager` | 5 |  |
| [`StaminaUsageRecord`](/game-api/types/game-other-namespaces/staminausagerecord) | internal struct |  | 2 |  |

## Features.Core.Device.Pico

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`PicoLoginController`](/game-api/types/game-other-namespaces/picologincontroller) | class | `MonoBehaviour` | 2 |  |

## Features.Gameplay

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AddUnlockToPlayer`](/game-api/types/game-other-namespaces/addunlocktoplayer) | class | `NetworkEntityBehaviour`, `ISavable<AddUnlockToPlayerSaveData>`, `ISavableSave<AddUnlockToPlayerSaveData>`, +1 more | 3 |  |
| [`AddUnlockToPlayerSaveData`](/game-api/types/game-other-namespaces/addunlocktoplayersavedata) | class | `NewSaveData<AddUnlockToPlayer, AddUnlockToPlayerSaveData>` | 1 |  |
| [`OrbBasinVfxController`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller) | class | `NetworkEntityBehaviour`, `ISavable<OrbBasinVfxControllerSaveData>`, `ISavableSave<OrbBasinVfxControllerSaveData>`, +1 more | 5 |  |
| [`OrbBasinVfxControllerSaveData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata) | class | `NewSaveData<OrbBasinVfxController, OrbBasinVfxControllerSaveData>` | 3 |  |
| [`OrbBasinVfxControllerSaveData1`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1) | class | `OldSaveData` | 5 |  |

## Features.Gameplay.Activities.Carpentry

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BasicChiselable`](/game-api/types/game-other-namespaces/basicchiselable) | class | `NetworkEntityBehaviour`, `IChiselable` | 5 |  |

## Features.Gameplay.ClimbingTower

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClimbingTowerProgressionVisualizer`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer) | class | `NetworkEntityBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable`, +3 more | 4 |  |
| [`ClimbingTowerProgressionVisualizerSaveData`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata) | class | `NewSaveData<ClimbingTowerProgressionVisualizer, ClimbingTowerProgressionVisualizerSaveData>` | 2 |  |
| [`ClimbingTowerTeleporterNode`](/game-api/types/game-other-namespaces/climbingtowerteleporternode) | class | `NetworkEntityBehaviour`, `ISavable<ClimbingTowerTeleporterNodeSaveData>`, `ISavableSave<ClimbingTowerTeleporterNodeSaveData>`, +1 more | 5 |  |
| [`ClimbingTowerTeleporterNodeSaveData`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedata) | class | `NewSaveData<ClimbingTowerTeleporterNode, ClimbingTowerTeleporterNodeSaveData>` | 3 |  |
| [`ClimbingTowerTeleporterNodeSaveDataOld1`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold1) | class | `OldSaveData` | 3 |  |
| [`ClimbingTowerTeleporterNodeSaveDataOld2`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold2) | class | `OldSaveData` | 4 |  |
| [`ClimbingTowerTeleporterPerPlayerSaveable`](/game-api/types/game-other-namespaces/climbingtowerteleporterperplayersaveable) | class | `PerPlayerManager<ClimbingTowerTeleporterPerPlayerSaveable, ClimbingTowerTeleporterSave, ClimbingTowerTeleporterSaveData>` | 0 |  |
| [`ClimbingTowerTeleporterSave`](/game-api/types/game-other-namespaces/climbingtowerteleportersave) | class | `PerPlayerContent<ClimbingTowerTeleporterSaveData>` | 0 |  |
| [`ClimbingTowerTeleporterSaveData`](/game-api/types/game-other-namespaces/climbingtowerteleportersavedata) | class | `IAltaFileFormat` | 5 |  |
| [`DisableAfterDuration`](/game-api/types/game-other-namespaces/disableafterduration) | class | `MonoBehaviour` | 0 |  |
| [`SpiritModeDoorway`](/game-api/types/game-other-namespaces/spiritmodedoorway) | class | `NetworkEntityBehaviour`, `ITeleportAwareTrigger`, `IDontSplit`, +4 more | 5 |  |
| [`SpiritModeDoorwayMode`](/game-api/types/game-other-namespaces/spiritmodedoorwaymode) | enum |  | 2 |  |

## Features.Gameplay.GameConditions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IGameCondition`](/game-api/types/game-other-namespaces/igamecondition) | interface |  | 2 |  |
| [`ManualCondition`](/game-api/types/game-other-namespaces/manualcondition) | class | `NetworkEntityBehaviour`, `IGameCondition`, `ISavable<ManualConditionSaveData>`, +2 more | 2 |  |
| [`ManualConditionSaveData`](/game-api/types/game-other-namespaces/manualconditionsavedata) | class | `NewSaveData<ManualCondition, ManualConditionSaveData>` | 1 |  |
| [`NetworkedGameConditionEvaluator`](/game-api/types/game-other-namespaces/networkedgameconditionevaluator) | class | `NetworkEntityBehaviour`, `IGameCondition` | 4 |  |
| [`PendingRepairBoxCompletionCondition`](/game-api/types/game-other-namespaces/pendingrepairboxcompletioncondition) | class | `MonoBehaviour`, `IGameCondition` | 2 |  |
| [`RepairableObject`](/game-api/types/game-other-namespaces/repairableobject) | struct |  | 3 |  |
| [`RepairableObjectComparisonCondition`](/game-api/types/game-other-namespaces/repairableobjectcomparisoncondition) | class | `NetworkEntityBehaviour`, `IGameCondition`, `ISavable<RepairableObjectComparisonConditionSaveData>`, +2 more | 2 |  |
| [`RepairableObjectComparisonConditionSaveData`](/game-api/types/game-other-namespaces/repairableobjectcomparisonconditionsavedata) | class | `NewSaveData<RepairableObjectComparisonCondition, RepairableObjectComparisonConditionSaveData>` | 2 |  |

## Features.Gameplay.GameConditions.StaticObjectMapped

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`RepairableObjectBuildState`](/game-api/types/game-other-namespaces/repairableobjectbuildstate) | enum |  | 2 |  |

## Features.Gameplay.Inventory.SurfaceDock

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ChiselableSurfaceDock`](/game-api/types/game-other-namespaces/chiselablesurfacedock) | class | `BasicChiselable` | 0 |  |

## Features.Gameplay.Progression.QuestMarkers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`QuestMarker`](/game-api/types/game-other-namespaces/questmarker) | class | `MonoBehaviour` | 1 |  |

## Features.Main_Menu.Scripts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AccessibilitySeatedStandingBoard`](/game-api/types/game-other-namespaces/accessibilityseatedstandingboard) | class | `PopupBoard` | 0 |  |

## Features.Main_Menu.Scripts.TalemShop

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IAPViewModel`](/game-api/types/game-other-namespaces/iapviewmodel) | class | `LoggedInTool` | 1 |  |
| [`IShopController`](/game-api/types/game-other-namespaces/ishopcontroller) | interface |  | 2 |  |
| [`PurchaseResult`](/game-api/types/game-other-namespaces/purchaseresult) | class |  | 4 |  |

## Features.Main_Menu.Scripts.TalemShop.Errors

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`NoShopForPlatformError`](/game-api/types/game-other-namespaces/noshopforplatformerror) | internal class | `PurchaseError` | 1 |  |
| [`NotLoggedInOnPlatformError`](/game-api/types/game-other-namespaces/notloggedinonplatformerror) | class | `PurchaseError` | 1 |  |
| [`PendingPurchasesError`](/game-api/types/game-other-namespaces/pendingpurchaseserror) | class | `PurchaseError` | 1 |  |
| [`PurchaseError`](/game-api/types/game-other-namespaces/purchaseerror) | class |  | 2 |  |
| [`UnknownPurchaseError`](/game-api/types/game-other-namespaces/unknownpurchaseerror) | class | `PurchaseError` | 1 |  |
| [`UnknownPurchaseExceptionError`](/game-api/types/game-other-namespaces/unknownpurchaseexceptionerror) | class | `PurchaseError` | 1 |  |
| [`UserCancelledError`](/game-api/types/game-other-namespaces/usercancellederror) | class | `PurchaseError` | 1 |  |

## Features.Meta.Platform.Oculus

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IOculusWrapper`](/game-api/types/game-other-namespaces/ioculuswrapper) | interface |  | 16 |  |

## Features.Meta.Resolvers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AddressableResolverSettings`](/game-api/types/game-other-namespaces/addressableresolversettings) | class | `GlobalSettings<AddressableResolverSettings>` | 1 |  |
| [`InterfaceResolver`](/game-api/types/game-other-namespaces/interfaceresolver) | class |  | 7 |  |

## Features.Shop

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IPurchaseConsumer`](/game-api/types/game-other-namespaces/ipurchaseconsumer) | interface |  | 2 |  |

## Features.Utility.UnityWrappers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ITestUnityApplicationWrapper`](/game-api/types/game-other-namespaces/itestunityapplicationwrapper) | interface |  | 1 |  |
| [`IUnityApplicationWrapper`](/game-api/types/game-other-namespaces/iunityapplicationwrapper) | interface |  | 1 |  |
| [`UnityApplicationWrapper`](/game-api/types/game-other-namespaces/unityapplicationwrapper) | class | `IUnityApplicationWrapper`, `ITestUnityApplicationWrapper` | 2 |  |

## Features.Visual_Effects.General_Scripts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ParticlesToPlayer`](/game-api/types/game-other-namespaces/particlestoplayer) | class | `NetworkEntityBehaviour`, `ISavable<ParticlesToPlayerSaveData>`, `ISavableSave<ParticlesToPlayerSaveData>`, +1 more | 5 |  |
| [`ParticlesToPlayerSaveData`](/game-api/types/game-other-namespaces/particlestoplayersavedata) | class | `NewSaveData<ParticlesToPlayer, ParticlesToPlayerSaveData>` | 1 |  |
| [`PooledParticleSystemManipulator`](/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator) | class | `PooledObject`, `IBuildRendererPostBake`, `IBuildBakeable` | 3 |  |

## Features.Visual_Effects.VFXData

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`VfxData`](/game-api/types/game-other-namespaces/vfxdata) | class | `HashedGeneralValue<VfxData>` | 7 |  |

## Features.World.Environmental.Atmosphere

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`InteriorFogAmbience`](/game-api/types/game-other-namespaces/interiorfogambience) | class | `AtmospherePlugin` | 4 |  |

## GameCommands.Messages

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`CommandType`](/game-api/types/game-other-namespaces/commandtype) | enum |  | 1 |  |
| [`GameCommandMessage`](/game-api/types/game-other-namespaces/gamecommandmessage) | class |  | 1 |  |
| [`GameResponseMessage`](/game-api/types/game-other-namespaces/gameresponsemessage) | class |  | 2 |  |

## TableParser

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`TableOrderAttribute`](/game-api/types/game-other-namespaces/tableorderattribute) | class | `Attribute` | 2 |  |
| [`TableParserExtensions`](/game-api/types/game-other-namespaces/tableparserextensions) | static class |  | 5 |  |

## Township.Climbing

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClimbingEditorSettings`](/game-api/types/game-other-namespaces/climbingeditorsettings) | class | `ScriptableObject` | 4 |  |

## Township.Downed

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`RespawnOrb`](/game-api/types/game-other-namespaces/respawnorb) | class | `EventOrb` | 2 |  |
| [`ReviveCompletableActivity`](/game-api/types/game-other-namespaces/revivecompletableactivity) | class | `ICompletableActivity` | 9 |  |
| [`ReviveOrb`](/game-api/types/game-other-namespaces/reviveorb) | class | `EventOrb` | 3 |  |
| [`ReviveOrbMovementModifier`](/game-api/types/game-other-namespaces/reviveorbmovementmodifier) | class | `MonoBehaviour` | 2 |  |

## Township.PostProcessing

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`TextureFormatUtilities`](/game-api/types/game-other-namespaces/textureformatutilities) | static class |  | 0 |  |

## UnityEngine.UI

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`CustomOutline`](/game-api/types/game-other-namespaces/customoutline) | class | `Shadow` | 6 |  |

## WindowsConsole

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ConsoleInput`](/game-api/types/game-other-namespaces/consoleinput) | class |  | 8 |  |
| [`ConsoleWindow`](/game-api/types/game-other-namespaces/consolewindow) | class |  | 5 |  |
| [`ConsoleWindow.CtrlType`](/game-api/types/game-other-namespaces/consolewindow-ctrltype) | enum |  | 5 |  |
| [`ConsoleWindow.HandlerRoutine`](/game-api/types/game-other-namespaces/consolewindow-handlerroutine) | delegate |  | 0 |  |
