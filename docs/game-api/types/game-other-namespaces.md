---
title: "ATT, Features and other game namespaces"
description: "Types in the ATT, Features and Township namespaces and a few other small game namespaces."
sidebar_position: 14
---

# ATT, Features and other game namespaces

Types in the ATT, Features and Township namespaces and a few other small game namespaces. 233 types, 16 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## ATT

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`PrefabReference`](/game-api/types/game-other-namespaces/prefabreference) | struct |  | 1 | Serializable wrapper around a GameObject prefab that converts to `GameObject` implicitly. |

## ATT.Analytics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaAnalyticsDispatcher`](/game-api/types/game-other-namespaces/altaanalyticsdispatcher) | class | `AbstractAnalyticsDispatcher`, `IIsolate` | 1 | [Alta's web API](../console-and-utilities/alta-web-api.md) |
| [`AreaTriggerAnalyticsEvent`](/game-api/types/game-other-namespaces/areatriggeranalyticsevent) | class | `TownshipAnalyticsEvent` | 2 | Analytics event for leaving a trigger area, with the area name and time spent in it. |
| [`ChallengeAnalyticsEvent`](/game-api/types/game-other-namespaces/challengeanalyticsevent) | class | `TownshipAnalyticsEvent` | 9 | Analytics event for challenge progress (start, exit, respawn, checkpoint, complete), with the unlock, orbs collected and checkpoint. |
| [`TownshipAnalyticsEvent`](/game-api/types/game-other-namespaces/townshipanalyticsevent) | class | `AnalyticsEvent` | 0 | Base for the game's analytics events. Adds the player's ID if given and server info to every event. |
| [`UserSettingsAnalyticsEvent`](/game-api/types/game-other-namespaces/usersettingsanalyticsevent) | class | `TownshipAnalyticsEvent` | 1 | Analytics event that copies every entry of a settings dictionary in as properties. |

## ATT.Analytics.Instruments

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ServerInfoInstrument`](/game-api/types/game-other-namespaces/serverinfoinstrument) | class | `IAnalyticsInstrument` | 1 | Analytics instrument that adds the current server's ID to each event. |

## ATT.Analytics.Social

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BanPlayerSocialAnalyticsEvent`](/game-api/types/game-other-namespaces/banplayersocialanalyticsevent) | class | `SocialAnalyticsEvent` | 3 | Social analytics event for banning a player, with where the ban was made and the role chosen. |
| [`SocialAnalyticsEvent`](/game-api/types/game-other-namespaces/socialanalyticsevent) | class | `AnalyticsEvent` | 7 | Analytics event for a social action (friends, reports, bans), always with where in the UI it came from. |

## ATT.Character.QuickAccessMenu

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CommandSync`](/game-api/types/game-other-namespaces/commandsync) | class | `NetworkEntityBehaviour` | 3 | Routes console commands from in-game menus to the server. Singleton `Instance` on a networked entity; the server runs commands directly. |
| [`PermissionsHelper`](/game-api/types/game-other-namespaces/permissionshelper) | static class |  | 2 | Checks whether a user may use the in-game server settings and command menus. |
| [`ServerSettingsChangeLogger`](/game-api/types/game-other-namespaces/serversettingschangelogger) | static class |  | 1 | Raises the console's `ServerSettingsChanged` event with the old and new settings when server settings change. |
| [`ServerSettingsSync`](/game-api/types/game-other-namespaces/serversettingssync) | class | `NetworkEntityBehaviour` | 7 | Syncs server settings between the server and the in-game settings menu. Singleton `Instance` on a networked entity; clients read and send settings, the server applies them. |

## ATT.ClimbingTower

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`SpiritModeDoorwaySaveData`](/game-api/types/game-other-namespaces/spiritmodedoorwaysavedata) | internal class | `NewSaveData<SpiritModeDoorway, SpiritModeDoorwaySaveData>` | 4 | Save data (version 2) for a `SpiritModeDoorway` in the climbing tower. |
| [`SpiritModeDoorwaySaveDataOld1`](/game-api/types/game-other-namespaces/spiritmodedoorwaysavedataold1) | internal class | `OldSaveData` | 4 | Version 1 save data for a `SpiritModeDoorway`, from before one-way doors. |

## ATT.Domains

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Domain`](/game-api/types/game-other-namespaces/domain) | class | `NetworkEntityBehaviour` | 11 | A private space for one player, spawned by `DomainController` below the map (y -200, spaced 400 apart). The micro tutorial uses one: the player's body is despawned and respawned inside, then returned to where they entered. |
| [`DomainController`](/game-api/types/game-other-namespaces/domaincontroller) | class | `NetworkEntityBehaviour`, `IDomainController` | 6 | Creates and destroys per-player domains: private copies of a location spawned in a row under the map. Server creates them; clients get the domain chunk registered by sync. |
| [`DomainPlayerSpawnSetter`](/game-api/types/game-other-namespaces/domainplayerspawnsetter) | class | `MonoBehaviour` | 0 | Marker that sets its parent `Domain`'s player spawn point to its own transform when enabled. Server (or local test) only. |
| [`IDomainController`](/game-api/types/game-other-namespaces/idomaincontroller) | interface |  | 3 | Creates and tracks per-player domains (spawned areas tied to one player). Implemented by `DomainController` and bound in `GameLifetimeScope`. Create and destroy are server only. |

## ATT.EventBus

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`EventBusLocator`](/game-api/types/game-other-namespaces/eventbuslocator) | class |  | 2 | [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`ITownshipEventBus`](/game-api/types/game-other-namespaces/itownshipeventbus) | interface | `IEventBus` | 0 | Marker interface for the game's main event bus. Get it with `EventBusLocator.Get<ITownshipEventBus>()`. |
| [`TownshipEventBus`](/game-api/types/game-other-namespaces/townshipeventbus) | class | `Alta.Core.EventBus.EventBus`, `ITownshipEventBus`, `IEventBus` | 0 | The game's main event bus, a plain `Alta.Core.EventBus.EventBus`. `ProjectLifetimeScope` registers it as `ITownshipEventBus`. |

## ATT.EventBus.TownshipEvents

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ForceCompleteTutorialStepEvent`](/game-api/types/game-other-namespaces/forcecompletetutorialstepevent) | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`IEventBusEventData`](/game-api/types/game-other-namespaces/ieventbuseventdata) | interface |  | 0 | Marker interface for data sent on the Township event bus. |
| [`IPlayerEvent`](/game-api/types/game-other-namespaces/iplayerevent) | interface | `IEventBusEventData` | 1 | An event bus event caused by a player. |
| [`ItemCraftedEvent`](/game-api/types/game-other-namespaces/itemcraftedevent) | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md) |
| [`ItemForgedEvent`](/game-api/types/game-other-namespaces/itemforgedevent) | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md): the player and the prefab hash |
| [`PlayerGrabbedPrefabEvent`](/game-api/types/game-other-namespaces/playergrabbedprefabevent) | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`PlayerInPositionEvent`](/game-api/types/game-other-namespaces/playerinpositionevent) | class | `IPlayerEvent`, `IEventBusEventData` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`PrefabInPositionEvent`](/game-api/types/game-other-namespaces/prefabinpositionevent) | class | `IPlayerEvent`, `IEventBusEventData` | 3 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`TownshipEventMicroTutorialExtensions`](/game-api/types/game-other-namespaces/townshipeventmicrotutorialextensions) | static class |  | 1 | Extension methods for player events, used by the micro tutorial. |

## ATT.FeatureTestGymnasium

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ChunkDisplayTool`](/game-api/types/game-other-namespaces/chunkdisplaytool) | class | `SingletonBehaviour<ChunkDisplayTool>` | 2 | Debug tool for the feature test gymnasium that draws coloured quads over chunk bounds: none, all chunks or loaded ones only. Singleton behaviour. |
| [`GymnasiumOnDemandPrefabSpawner`](/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner) | class | `NetworkEntityBehaviour`, `ISavable<GymnasiumOnDemandPrefabSpawnerData>`, `ISavableSave<GymnasiumOnDemandPrefabSpawnerData>`, +1 more | 4 | Board of buttons in the feature test gymnasium, one per configured prefab plus Destroy All. Server spawns the prefabs in a spawn area; the button layout syncs to clients. |
| [`GymnasiumTeleportPointPage`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage) | class | `PanelComponent` | 1 | Client tablet panel in the feature test gymnasium that lists every non-default `SpawnArea` in pages and teleports the local player to the one picked. |
| [`GymnasiumTeleportTablet`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet) | class | `ActionItem` | 0 | Tablet action item in the feature test gymnasium with a page of teleport points. Not saved. |
| [`GymnasiumVisualChunkDisplayMode`](/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode) | enum |  | 3 | Which chunks the gymnasium `ChunkDisplayTool` draws: none, all or only loaded ones. A dev test tool. |
| [`GymnasiumXpStatusDisplay`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay) | class | `NetworkEntityBehaviour` | 2 | Debug panel in the feature test gymnasium that shows and changes the nearest player's XP for one progression path (or all of them). The server handles the buttons and syncs the text to clients. |

## ATT.MainMenu.Scripts

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`EventOrb`](/game-api/types/game-other-namespaces/eventorb) | class | `NetworkEntityBehaviour` | 3 | A menu orb that runs a set action when the player lets go of it in a valid place. Wraps an `ActionOrb`. |

## ATT.MicroTutorial

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClientController`](/game-api/types/game-other-namespaces/clientcontroller) | class |  | 1 | Client side of micro tutorials: creates and removes step instances when the sync controller reports the server spawning or clearing steps. Created by `MicroTutorialSystem`. |
| [`ClientStepInstanceMap`](/game-api/types/game-other-namespaces/clientstepinstancemap) | class |  | 5 | Client-side lookup of micro tutorial step instances by player id and step. Owned by `ClientController`. |
| [`DespawnStepContentCommand`](/game-api/types/game-other-namespaces/despawnstepcontentcommand) | struct |  | 1 | Message the server sends to one player through the micro tutorial `SyncController` to remove a tutorial step's content on their client. |
| [`IMicroTutorial`](/game-api/types/game-other-namespaces/imicrotutorial) | interface |  | 16 | Server: one run of a micro tutorial for one player. It moves the player into a tutorial domain, runs the steps in order and brings them back afterwards. `MicroTutorial` is the implementation. |
| [`IMicroTutorialFactory`](/game-api/types/game-other-namespaces/imicrotutorialfactory) | interface |  | 1 | Makes micro tutorial instances. Implemented by `MicroTutorialFactory` and used by the server controller. |
| [`IMicroTutorialSettings`](/game-api/types/game-other-namespaces/imicrotutorialsettings) | interface |  | 4 | Settings for a micro tutorial: a named set of steps and a message when finished. Implemented by `MicroTutorialSettings`. |
| [`IMicroTutorialSystem`](/game-api/types/game-other-namespaces/imicrotutorialsystem) | interface |  | 4 | The micro tutorial system (short in-game tutorials), giving access to its client, server and sync controllers. Implemented by `MicroTutorialSystem` and bound in the game's dependency injection scope. |
| [`IServerStepInstance`](/game-api/types/game-other-namespaces/iserverstepinstance) | interface | `IStepInstance` | 6 | Server side of one step in a micro tutorial: starts, stops, spawns and removes its content, and reports when done. |
| [`IStepInstance`](/game-api/types/game-other-namespaces/istepinstance) | interface |  | 4 | One step of a running micro tutorial and the content it has spawned. `StepInstance` and its subclass `ServerStepInstance` implement it. |
| [`ISyncController`](/game-api/types/game-other-namespaces/isynccontroller) | interface |  | 9 | Messages between server and client for micro tutorials: the server tells a player's client to spawn, add to or remove step content, and the client says when it has loaded. `SyncController` is the implementation. |
| [`LoadingStatus`](/game-api/types/game-other-namespaces/loadingstatus) | enum |  | 2 | Whether a micro tutorial is still waiting for the client to finish loading it (`InProgress`) or not (`Completed`). |
| [`MicroTutorial`](/game-api/types/game-other-namespaces/microtutorial) | class | `IMicroTutorial` | 18 | Server: one run of a micro tutorial for one player. It moves the player into a private domain, runs the steps in order, and returns them to the overworld when despawned. |
| [`MicroTutorialAnalyticsEvent`](/game-api/types/game-other-namespaces/microtutorialanalyticsevent) | class | `TownshipAnalyticsEvent` | 4 | Analytics event for micro tutorials (enter, exit, step completed), with the tutorial name, session ID, replay flag and step details. |
| [`MicroTutorialFaceOrb`](/game-api/types/game-other-namespaces/microtutorialfaceorb) | class | `NetworkEntityBehaviour`, `ISavable<MicroTutorialFaceOrbSaveData>`, `ISavableSave<MicroTutorialFaceOrbSaveData>`, +1 more | 3 | An action orb that starts a micro tutorial (entry orb) or leaves it (exit orb) when a player pulls it to their face and lets go. The client sends the activation and the server spawns or despawns the tutorial. |
| [`MicroTutorialFaceOrbSaveData`](/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata) | internal class | `NewSaveData<MicroTutorialFaceOrb, MicroTutorialFaceOrbSaveData>` | 2 | Save data for `MicroTutorialFaceOrb`: the orb type and the tutorial it starts. |
| [`MicroTutorialFaceOrbSpawnSettings`](/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings) | class | `GlobalSettings<MicroTutorialFaceOrbSpawnSettings>` | 1 | Global settings listing where micro tutorial orbs are injected. Read by `MicroTutorialOrbInjector`. |
| [`MicroTutorialFaceOrbType`](/game-api/types/game-other-namespaces/microtutorialfaceorbtype) | enum |  | 2 | What a micro tutorial face orb does when used: start the tutorial (Entry) or leave it (Exit). |
| [`MicroTutorialFactory`](/game-api/types/game-other-namespaces/microtutorialfactory) | class | `IMicroTutorialFactory` | 2 | Creates `MicroTutorial` instances for a player. Registered in the DI container. |
| [`MicroTutorialLogger`](/game-api/types/game-other-namespaces/microtutoriallogger) | class |  | 7 | Wrapper around a logger for the micro tutorial code that drops messages below a shared level (Warn by default). |
| [`MicroTutorialModule`](/game-api/types/game-other-namespaces/microtutorialmodule) | static class |  | 0 | Server, dev-only console module `microtutorial` (alias `mt`) for listing, starting, stepping and exiting micro tutorials. |
| [`MicroTutorialOrbInjector`](/game-api/types/game-other-namespaces/microtutorialorbinjector) | class | `NetworkEntityBehaviour` | 1 | Server: spawns micro tutorial entry orbs into chunks listed in `MicroTutorialFaceOrbSpawnSettings` when those chunks load, and removes them when they unload. |
| [`MicroTutorialOrbSpawner`](/game-api/types/game-other-namespaces/microtutorialorbspawner) | class | `NetworkEntityBehaviour` | 1 | Leftover placeholder: it destroys its own GameObject on initialize and does nothing else. |
| [`MicroTutorialSettings`](/game-api/types/game-other-namespaces/microtutorialsettings) | class | `PlayerProgressFlag`, `IMicroTutorialSettings` | 7 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`MicroTutorialSystem`](/game-api/types/game-other-namespaces/microtutorialsystem) | class | `NetworkEntityBehaviour`, `IMicroTutorialSystem` | 5 | Network entity that holds the micro tutorial controllers. VContainer injects it, and it builds the sync, client and server controllers. |
| [`MicroTutorialSystemSettings`](/game-api/types/game-other-namespaces/microtutorialsystemsettings) | class | `GlobalSettings<MicroTutorialSystemSettings>` | 2 | Global settings asset for the micro tutorial system (the tutorial orbs). Get it with `GlobalSettings<MicroTutorialSystemSettings>.Instance`. |
| [`OrbInjectorData`](/game-api/types/game-other-namespaces/orbinjectordata) | struct |  | 2 | One tutorial orb placement: the chunk to put it in and how to spawn it. Listed in `MicroTutorialFaceOrbSpawnSettings` and read by the server's `MicroTutorialOrbInjector`. |
| [`OrbSpawnData`](/game-api/types/game-other-namespaces/orbspawndata) | struct |  | 2 | Where to spawn a micro tutorial orb and which tutorial it starts. Part of an orb injector entry. |
| [`PlayerEventBuffer`](/game-api/types/game-other-namespaces/playereventbuffer) | class |  | 2 | Server: records the tutorial player's events for each step so a step can see events that happened before it started. Created by `ServerStepInstance`. |
| [`ResultExtensions`](/game-api/types/game-other-namespaces/resultextensions) | static class |  | 1 | Extension for logging a failed `IResult` to a micro tutorial logger. |
| [`ServerController`](/game-api/types/game-other-namespaces/servercontroller) | class |  | 4 | Server side of micro tutorials: starts and ends a tutorial per player, tracks the active ones and sends analytics. Created by `MicroTutorialSystem`. |
| [`ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance) | class | `StepInstance`, `IServerStepInstance`, `IStepInstance` | 8 | Server-side run of one micro tutorial step: spawns its content, tells the client to spawn it, listens for player events and completes the step. |
| [`SpawnStepContentCommand`](/game-api/types/game-other-namespaces/spawnstepcontentcommand) | struct |  | 2 | Server-to-client order to spawn a micro tutorial step's content, sent through the tutorial sync controller. |
| [`StepInstance`](/game-api/types/game-other-namespaces/stepinstance) | class | `IStepInstance` | 6 | One running step of a micro tutorial on the client: makes a step object with static and dynamic content folders and spawns the step's static content. |
| [`SyncController`](/game-api/types/game-other-namespaces/synccontroller) | class | `ISyncController` | 10 | Network messages between server and client for micro tutorials: spawn, despawn and clear step content, and the client's load acknowledgement. Built on a sync entity. |
| [`TutorialCompletedMessage`](/game-api/types/game-other-namespaces/tutorialcompletedmessage) | class |  | 2 | Title and description text shown when a micro tutorial is completed. Set in the inspector. |
| [`TutorialState`](/game-api/types/game-other-namespaces/tutorialstate) | enum |  | 3 | Where a micro tutorial is: inactive, started or completed. Included in micro tutorial analytics. |

## ATT.MicroTutorial.Steps

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AutoCompleteAfterDelayStep`](/game-api/types/game-other-namespaces/autocompleteafterdelaystep) | class | `MicroTutorialStep` | 1 | Micro tutorial step that completes itself after a set delay. |
| [`AutoCompleteStep`](/game-api/types/game-other-namespaces/autocompletestep) | class | `MicroTutorialStep` | 1 | Micro tutorial step that completes as soon as it runs. |
| [`DestroyStepContentStep`](/game-api/types/game-other-namespaces/destroystepcontentstep) | class | `MicroTutorialStep` | 2 | Micro tutorial step that despawns the content of chosen earlier steps, then completes after two seconds. |
| [`ItemCraftedStep`](/game-api/types/game-other-namespaces/itemcraftedstep) | class | `PlayerEventStep` | 3 | Micro tutorial step that completes when the player crafts an item using one of the listed crafting parts. |
| [`ItemForgedStep`](/game-api/types/game-other-namespaces/itemforgedstep) | class | `PlayerEventStep` | 3 | Micro tutorial step that completes when the player finishes forging one of the listed items. |
| [`MicroTutorialStep`](/game-api/types/game-other-namespaces/microtutorialstep) | abstract class | `HashedGeneralValue<MicroTutorialStep>` | 10 | Base asset for one step of a micro tutorial. Subclasses say which player events finish the step or run their own server logic; the server's step instance spawns the step's content and watches for completion. |
| [`PlayerEventStep`](/game-api/types/game-other-namespaces/playereventstep) | class | `MicroTutorialStep` | 1 | A micro tutorial step completed by player events, with a setting for how far back to look for events that already happened. |
| [`PlayerGrabbedPrefab`](/game-api/types/game-other-namespaces/playergrabbedprefab) | class | `PlayerEventStep` | 3 | Micro tutorial step that completes when the player grabs a given prefab. |
| [`PlayerInPositionObserver`](/game-api/types/game-other-namespaces/playerinpositionobserver) | class | `MonoBehaviour` | 0 | Placed in a step's dynamic content. Server: polls the domain's player and broadcasts `PlayerInPositionEvent` once their feet are within range. |
| [`PlayerInPositionStep`](/game-api/types/game-other-namespaces/playerinpositionstep) | class | `PlayerEventStep` | 3 | Micro tutorial step that completes when a `PlayerInPositionObserver` in its dynamic content reports the player in place. |
| [`PrefabInPositionObserver`](/game-api/types/game-other-namespaces/prefabinpositionobserver) | class | `MonoBehaviour` | 0 | Trigger placed in a step's dynamic content. Server: broadcasts `PrefabInPositionEvent` for the domain's player when a network prefab enters it. |
| [`PrefabInPositionStep`](/game-api/types/game-other-namespaces/prefabinpositionstep) | class | `PlayerEventStep` | 3 | Micro tutorial step that completes when one of the listed prefabs enters a `PrefabInPositionObserver` in its dynamic content. |
| [`SpawnStep`](/game-api/types/game-other-namespaces/spawnstep) | class | `MicroTutorialStep` | 1 | Micro tutorial step that only spawns its content and completes at once. |

## ATT.PlayerStates

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AtmBalanceChangeData`](/game-api/types/game-other-namespaces/atmbalancechangedata) | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| [`CommandExecutedData`](/game-api/types/game-other-namespaces/commandexecuteddata) | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| [`CustomizationStateSettings`](/game-api/types/game-other-namespaces/customizationstatesettings) | class | `PlayerStateSettings` | 7 | Settings for the character customization player state: the room prefab to spawn, where, and what happens when the player finishes. |
| [`CustomizationStateSettings.Create`](/game-api/types/game-other-namespaces/customizationstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<CustomizationStateSettings>` | 0 | Editor menu entry for creating a `CustomizationStateSettings` asset. |
| [`DownedStateDebuffManager`](/game-api/types/game-other-namespaces/downedstatedebuffmanager) | class |  | 3 | Tracks the timed stat debuffs a player gets on respawning from the downed state, so they can be removed early. One is made by `PlayerStateFactory` and shared by every `DownedState`. |
| [`DownedStateSettings`](/game-api/types/game-other-namespaces/downedstatesettings) | class | `PlayerStateSettings` | 26 | Asset with the tuning for the downed state: gravestone, revive orbs other players collect, respawn orb, effects, and the health and debuffs a revived player gets back. Read by `DownedState` and the revive activity. |
| [`Gravestone`](/game-api/types/game-other-namespaces/gravestone) | class | `NetworkEntityBehaviour` | 3 | Grave entity left where a player went down. Server assigns the downed player and syncs it; the grave is destroyed when that player disconnects. |
| [`InventoryChangeData`](/game-api/types/game-other-namespaces/inventorychangedata) | class |  | 9 | [Console events](../console-and-utilities/console-events.md) |
| [`InventoryChangeType`](/game-api/types/game-other-namespaces/inventorychangetype) | enum |  | 4 | Kind of inventory change in the pickup event stream log: pickup, drop, dock or undock. |
| [`InventoryType`](/game-api/types/game-other-namespaces/inventorytype) | enum |  | 2 | Whether an inventory change in the pickup event stream log was in a world dock or a dock the player owns. |
| [`PlayerControllerPrefabs`](/game-api/types/game-other-namespaces/playercontrollerprefabs) | class | `GlobalSettings<PlayerControllerPrefabs>` | 5 | Global settings asset ("Player Controller Prefabs") holding the player controller prefabs for each platform and mode. Get it with `GlobalSettings<PlayerControllerPrefabs>.Instance`. |
| [`PlayerControllerPrefabs.Create`](/game-api/types/game-other-namespaces/playercontrollerprefabs-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<PlayerControllerPrefabs>` | 0 | Editor menu entry for creating the `PlayerControllerPrefabs` global settings asset. |
| [`PlayerStatBasedVisualEffect`](/game-api/types/game-other-namespaces/playerstatbasedvisualeffect) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 1 | Client: drives a post-process effect (frost or exposure) from one of the local player's health stats. |
| [`ServerSettingsAge`](/game-api/types/game-other-namespaces/serversettingsage) | enum |  | 3 | Marks server settings in a settings change event as the old values, the new values, or neither. |
| [`ServerSettingsChangeData`](/game-api/types/game-other-namespaces/serversettingschangedata) | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`SocialTabletPlayerBanData`](/game-api/types/game-other-namespaces/socialtabletplayerbandata) | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| [`SocialTabletPlayerReportData`](/game-api/types/game-other-namespaces/socialtabletplayerreportdata) | class |  | 3 | [Console events](../console-and-utilities/console-events.md) |
| [`VisualEffectType`](/game-api/types/game-other-namespaces/visualeffecttype) | enum |  | 2 | Screen effect types for player states: `Frost` and `Exposure`. |

## ATT.Progression

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`PlayerUnlockAnalytics`](/game-api/types/game-other-namespaces/playerunlockanalytics) | class |  | 2 | Sends challenge analytics (start, exit, respawn) for a player's unlock challenge. Created with a `PlayerUnlockManager`; only sends for the local player in `SpiritState`. |

## ATT.Respawn

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DefaultPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/defaultplayerrespawnpositionprovider) | class | `IPlayerRespawnPositionProvider` | 1 | Default `IPlayerRespawnPositionProvider`: picks a random point from the current scene's respawn point. |
| [`GlobalRespawnShrine`](/game-api/types/game-other-namespaces/globalrespawnshrine) | class | `RespawnShrine` | 1 | The global respawn shrine. Touching it resets the player's respawn back to the global spawn. |
| [`IPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider) | interface |  | 1 | Gives the position a player respawns at. Implemented by `RespawnSystem` (shrine-based) and `DefaultPlayerRespawnPositionProvider` (the scene's respawn point). |
| [`IRespawnBeaconController`](/game-api/types/game-other-namespaces/irespawnbeaconcontroller) | interface |  | 1 | Something that updates respawn beacons when the respawn system model changes. Implemented by `RespawnBeaconController`. |
| [`IRespawnBeaconView`](/game-api/types/game-other-namespaces/irespawnbeaconview) | interface |  | 2 | A view that shows a respawn shrine's state and is updated when the shrine model changes. |
| [`IRespawnShrine`](/game-api/types/game-other-namespaces/irespawnshrine) | interface |  | 1 | A respawn shrine a player can set as their spawn point. |
| [`IRespawnShrineModel`](/game-api/types/game-other-namespaces/irespawnshrinemodel) | interface |  | 9 | Saved state of one respawn shrine: fuel left and the players who use it as their spawn point. |
| [`IRespawnShrineSettings`](/game-api/types/game-other-namespaces/irespawnshrinesettings) | interface |  | 9 | Fixed settings for one respawn shrine: its id, what it burns as fuel and where players and its beacon appear. |
| [`IRespawnSystem`](/game-api/types/game-other-namespaces/irespawnsystem) | interface | `IPlayerRespawnPositionProvider` | 8 | The respawn shrine system: which shrine each player respawns at and how much fuel each shrine has. Implemented by `RespawnSystem`, a network entity behaviour run by the server. |
| [`IRespawnSystemModel`](/game-api/types/game-other-namespaces/irespawnsystemmodel) | interface | `IEnumerable<IRespawnShrineModel>`, `IEnumerable` | 12 | The respawn shrines' state: fuel per shrine and which players are subscribed to which shrine. `RespawnSystem` owns it, ticks it on the server and syncs it to clients as JSON. |
| [`IRespawnSystemSettings`](/game-api/types/game-other-namespaces/irespawnsystemsettings) | interface | `IEnumerable<IRespawnShrineSettings>`, `IEnumerable` | 15 | Settings for respawn shrines and the respawn system, plus the list of shrine settings by id. `RespawnSystemSettings` is the global settings asset that implements it. |
| [`PoweredRespawnShrine`](/game-api/types/game-other-namespaces/poweredrespawnshrine) | class | `RespawnShrine`, `ISavable<PoweredRespawnShrineSaveData>`, `ISavableSave<PoweredRespawnShrineSaveData>`, +1 more | 7 | A respawn shrine that runs on fuel. Players toggle it as their spawn point, and it only works while it has power. Both sides: the server owns the respawn data, clients update glyphs, fuel display and sounds. |
| [`PoweredRespawnShrineSaveData`](/game-api/types/game-other-namespaces/poweredrespawnshrinesavedata) | class | `NewSaveData<PoweredRespawnShrine, PoweredRespawnShrineSaveData>` | 1 | Save data for a `PoweredRespawnShrine`: which shrine settings it uses. |
| [`RespawnBeaconController`](/game-api/types/game-other-namespaces/respawnbeaconcontroller) | class | `NetworkEntityBehaviour`, `IRespawnBeaconController` | 2 | Client: spawns a beacon view for each powered (non-global) respawn shrine and updates it when the respawn model changes. |
| [`RespawnBeaconView`](/game-api/types/game-other-namespaces/respawnbeaconview) | class | `MonoBehaviour`, `IRespawnBeaconView` | 2 | A respawn shrine beacon in the world. Shows its graphics while the shrine has fuel. |
| [`RespawnShrine`](/game-api/types/game-other-namespaces/respawnshrine) | abstract class | `NetworkEntityBehaviour`, `IRespawnShrine` | 1 | Base for a respawn shrine in the world that players touch to set as their spawn point. Listens to the respawn system model and shows a glyph colour for whether the local player is linked. |
| [`RespawnShrineData`](/game-api/types/game-other-namespaces/respawnshrinedata) | class | `ScriptableObject`, `IRespawnShrineSettings` | 9 | Asset with the settings for one respawn shrine: id, fuel type and use, spawn and beacon positions. Looked up by shrine id through `RespawnSystemSettings`. |
| [`RespawnShrineFuelDisplay`](/game-api/types/game-other-namespaces/respawnshrinefueldisplay) | class | `NetworkEntityBehaviour` | 1 | Shows a respawn shrine's fuel: a frozen copy of the fuel item, the fuel amount, and hover and particle effects while players are subscribed. Driven by `PoweredRespawnShrine`. |
| [`RespawnShrineFuelDockController`](/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller) | class | `MonoBehaviour` | 0 | Server: turns fuel items docked into a powered shrine's pickup dock into shrine fuel, and pushes out anything over the cap. |
| [`RespawnShrineModel`](/game-api/types/game-other-namespaces/respawnshrinemodel) | class | `IRespawnShrineModel` | 11 | Data for one respawn shrine in the respawn system model: its id, fuel, empty flag and the ids of players who respawn there. Serialised with Newtonsoft JSON. |
| [`RespawnShrinePowerIndicator`](/game-api/types/game-other-namespaces/respawnshrinepowerindicator) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 | Fills the shrine's power gauge renderers to show how much fuel is left. |
| [`RespawnShrineStaticAudioController`](/game-api/types/game-other-namespaces/respawnshrinestaticaudiocontroller) | class | `MonoBehaviour` | 1 | Plays a respawn shrine's looping sound while it has at least one subscriber. |
| [`RespawnShrineSubscriberMarkController`](/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller) | class | `MonoBehaviour` | 2 | Client: shows one pooled mark per player subscribed to a respawn shrine, with a separate mark for the local player in the centre and the rest spaced in a circle. |
| [`RespawnSystem`](/game-api/types/game-other-namespaces/respawnsystem) | class | `NetworkEntityBehaviour`, `IRespawnSystem`, `IPlayerRespawnPositionProvider`, +3 more | 14 | The networked object that tracks respawn shrines: which shrine each player is subscribed to, shrine fuel, and where a player respawns. The server burns fuel on a timer and syncs the model to clients. Get it as `IRespawnSystem` through dependency injection. |
| [`RespawnSystemModel`](/game-api/types/game-other-namespaces/respawnsystemmodel) | class | `IRespawnSystemModel`, `IEnumerable<IRespawnShrineModel>`, `IEnumerable` | 15 | State of every respawn shrine (fuel and bound players), saved and sent to clients as JSON. Made from the shrine list in `RespawnSystemSettings` or from a save. |
| [`RespawnSystemSaveData`](/game-api/types/game-other-namespaces/respawnsystemsavedata) | class | `NewSaveData<RespawnSystem, RespawnSystemSaveData>` | 2 | Save data for the `RespawnSystem`: the global shrine and every respawn shrine's model. |
| [`RespawnSystemSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings) | class | `GlobalSettings<RespawnSystemSettings>`, `IRespawnSystemSettings`, `IEnumerable<IRespawnShrineSettings>`, +1 more | 16 | Global settings for respawn shrines: per-shrine data by GUID, tick rates, beacon sizes, subscriber marks, glyph colours and sounds. Get it with `RespawnSystemSettings.Instance`. |

## ATT.Saving

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`SaveMode`](/game-api/types/game-other-namespaces/savemode) | enum |  | 5 | [Prefabs and prefab hashes](../world/prefabs.md#savemode): What happens to a spawned instance when its chunk saves or unloads. It's set on the instance (`prefab.SaveMode`); the spawn helpers that take a `SaveMode` set it for you. |

## ATT.TaskTracking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AutoFestiveAchievement`](/game-api/types/game-other-namespaces/autofestiveachievement) | class | `GameAchievement` | 1 | Achievement that can only complete while its festivity is active. |

## ATT.TownshipServer

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FeatureSetFlags`](/game-api/types/game-other-namespaces/featuresetflags) | enum |  | 2 | Flags for which platform feature set a server runs: PC, mobile or both. Chosen by `ServerFeatureSetProvider`. |
| [`ServerFeatureSetProvider`](/game-api/types/game-other-namespaces/serverfeaturesetprovider) | static class |  | 3 | Works out this build's feature set (PC or mobile) and checks whether a server's target feature set matches it. |

## ATT.Triggers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DebugTriggerEvent`](/game-api/types/game-other-namespaces/debugtriggerevent) | class | `ZoneEvent` | 1 | Zone event asset that logs the event name, time spent and a message, for testing trigger zones. |
| [`ITriggerEventData`](/game-api/types/game-other-namespaces/itriggereventdata) | interface |  | 1 | Data for a zone trigger event, passed to `ZoneEvent.Trigger` and used for area analytics events. |
| [`SetChallengeCheckpointTriggerEvent`](/game-api/types/game-other-namespaces/setchallengecheckpointtriggerevent) | class | `ZoneEvent` | 1 | Zone event asset that records the zone as the last challenge checkpoint, for challenge respawn analytics. |
| [`TriggerEventData`](/game-api/types/game-other-namespaces/triggereventdata) | class | `ScriptableObject`, `ITriggerEventData` | 2 | ScriptableObject that names a trigger event. The name is sent to analytics, so the asset says not to change it. |
| [`TriggerZone`](/game-api/types/game-other-namespaces/triggerzone) | class | `MonoBehaviour`, `ITeleportAwareTrigger`, `IForcePresenceOnAndroidClient` | 1 | Client: a box zone that fires its zone events when the local player leaves it (or teleports through it, or logs out inside it), passing how long they were inside. |
| [`ZoneAnalyticsTriggerEvent`](/game-api/types/game-other-namespaces/zoneanalyticstriggerevent) | class | `ZoneEvent` | 2 | Zone trigger event asset that sends an "Area Exited" analytics event with how long the player was in the zone. |
| [`ZoneEvent`](/game-api/types/game-other-namespaces/zoneevent) | abstract class | `ScriptableObject` | 1 | Base ScriptableObject for an action a zone trigger runs, such as an analytics event or setting a challenge checkpoint. |

## ATT.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ICompletableActivity`](/game-api/types/game-other-namespaces/icompletableactivity) | interface |  | 4 | An activity that builds up progress until it completes, and can be cancelled or restarted. |
| [`Rotator`](/game-api/types/game-other-namespaces/rotator) | class | `NetworkEntityBehaviour` | 1 | Spins a `NetworkAxisRotation` at a set speed every physics step, using unscaled time. |

## Features

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GenericVFXController`](/game-api/types/game-other-namespaces/genericvfxcontroller) | class | `NetworkEntityBehaviour` | 5 |  |
| [`HandTouchVfxController`](/game-api/types/game-other-namespaces/handtouchvfxcontroller) | class | `GenericVFXController` | 2 | A `GenericVFXController` with two named effects for something a hand touches: one while activating and one when completed. |
| [`PooledParticleSystem`](/game-api/types/game-other-namespaces/pooledparticlesystem) | class | `PooledObject` | 2 | A pooled VFX object that knows how long it plays. Used by `GenericVFXController` and the downed state effects. |
| [`RepairBoxVfxController`](/game-api/types/game-other-namespaces/repairboxvfxcontroller) | class | `GenericVFXController` | 5 | VFX controller for the repair box. Each method plays or stops one effect from the `GenericVFXController` list by a configured index. |
| [`ServerBoardFilter`](/game-api/types/game-other-namespaces/serverboardfilter) | class | `MonoBehaviour` | 3 | Client: filters the main menu server board by the text typed into its search keyboard. Matching ignores case and spaces. |
| [`VariableIntensityPlayerLight`](/game-api/types/game-other-namespaces/variableintensityplayerlight) | class | `MonoBehaviour` | 4 | Light on the player that brightens with the number of orbs carried. Reached through `PlayerController.PlayerLight`. |

## Features.Analytics.ClimbingTower

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClimbingTowerAnalyticEventType`](/game-api/types/game-other-namespaces/climbingtoweranalyticeventtype) | enum |  | 6 | Kinds of analytics event the climbing tower reports: falls, entering and leaving, checkpoints, and logging in or out in spirit mode. |
| [`TowerAnalyticsReporter`](/game-api/types/game-other-namespaces/toweranalyticsreporter) | class | `MonoBehaviour` | 2 |  |

## Features.Analytics.Registration

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccountRequiredPopupAnalytics`](/game-api/types/game-other-namespaces/accountrequiredpopupanalytics) | class | `MonoBehaviour` | 0 |  |
| [`SignupAnalyticsReporter`](/game-api/types/game-other-namespaces/signupanalyticsreporter) | class | `MonoBehaviour` | 10 |  |

## Features.Climbing

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClimbingHand`](/game-api/types/game-other-namespaces/climbinghand) | class |  | 20 | One hand's climbing state: grabbing a climbable surface, holding the grip and working out how hard the hand pulls the body. Made per hand by `ClimbingHandler`; the grip is synced to other players. |
| [`ClimbingHandler`](/game-api/types/game-other-namespaces/climbinghandler) | class |  | 13 | Runs climbing for one player's smooth locomotion: tracks both hands' grips and stamina, moves and turns the body as the hands move, and holds the body up against gravity. |
| [`ClimbingHandlerAnalytics`](/game-api/types/game-other-namespaces/climbinghandleranalytics) | class |  | 2 |  |
| [`ClimbingMovementEvent`](/game-api/types/game-other-namespaces/climbingmovementevent) | internal class | `AnalyticsEvent` | 1 |  |
| [`ClimbingPressureCalculator`](/game-api/types/game-other-namespaces/climbingpressurecalculator) | class |  | 4 | Works out how hard one climbing hand pushes against a surface and how much pressure it has left to resist with. One per hand, built with the other hand for reference. |
| [`FakeStaminaManager`](/game-api/types/game-other-namespaces/fakestaminamanager) | class | `IHandStaminaManager` | 2 |  |
| [`HandStaminaManager`](/game-api/types/game-other-namespaces/handstaminamanager) | class | `IHandStaminaManager` | 5 |  |
| [`StaminaUsageRecord`](/game-api/types/game-other-namespaces/staminausagerecord) | internal struct |  | 2 | Internal record of one climb for analytics: distance travelled and the larger stamina use of the two hands. |

## Features.Core.Device.Pico

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`PicoLoginController`](/game-api/types/game-other-namespaces/picologincontroller) | class | `MonoBehaviour` | 2 |  |

## Features.Gameplay

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AddUnlockToPlayer`](/game-api/types/game-other-namespaces/addunlocktoplayer) | class | `NetworkEntityBehaviour`, `ISavable<AddUnlockToPlayerSaveData>`, `ISavableSave<AddUnlockToPlayerSaveData>`, +1 more | 3 | Networked behaviour that gives a player a permanent `PlayerUnlock`, usually wired to an interaction. The unlock is saved with the object. |
| [`AddUnlockToPlayerSaveData`](/game-api/types/game-other-namespaces/addunlocktoplayersavedata) | class | `NewSaveData<AddUnlockToPlayer, AddUnlockToPlayerSaveData>` | 1 |  |
| [`OrbBasinVfxController`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller) | class | `NetworkEntityBehaviour`, `ISavable<OrbBasinVfxControllerSaveData>`, `ISavableSave<OrbBasinVfxControllerSaveData>`, +1 more | 5 |  |
| [`OrbBasinVfxControllerSaveData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata) | class | `NewSaveData<OrbBasinVfxController, OrbBasinVfxControllerSaveData>` | 3 | Save data for `OrbBasinVfxController`: the state of its three effects. |
| [`OrbBasinVfxControllerSaveData1`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1) | class | `OldSaveData` | 5 |  |

## Features.Gameplay.Activities.Carpentry

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BasicChiselable`](/game-api/types/game-other-namespaces/basicchiselable) | class | `NetworkEntityBehaviour`, `IChiselable` | 5 |  |

## Features.Gameplay.ClimbingTower

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClimbingTowerProgressionVisualizer`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer) | class | `NetworkEntityBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable`, +3 more | 4 |  |
| [`ClimbingTowerProgressionVisualizerSaveData`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata) | class | `NewSaveData<ClimbingTowerProgressionVisualizer, ClimbingTowerProgressionVisualizerSaveData>` | 2 | Save data for `ClimbingTowerProgressionVisualizer`. |
| [`ClimbingTowerTeleporterNode`](/game-api/types/game-other-namespaces/climbingtowerteleporternode) | class | `NetworkEntityBehaviour`, `ISavable<ClimbingTowerTeleporterNodeSaveData>`, `ISavableSave<ClimbingTowerTeleporterNodeSaveData>`, +1 more | 5 |  |
| [`ClimbingTowerTeleporterNodeSaveData`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedata) | class | `NewSaveData<ClimbingTowerTeleporterNode, ClimbingTowerTeleporterNodeSaveData>` | 3 |  |
| [`ClimbingTowerTeleporterNodeSaveDataOld1`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold1) | class | `OldSaveData` | 3 |  |
| [`ClimbingTowerTeleporterNodeSaveDataOld2`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold2) | class | `OldSaveData` | 4 |  |
| [`ClimbingTowerTeleporterPerPlayerSaveable`](/game-api/types/game-other-namespaces/climbingtowerteleporterperplayersaveable) | class | `PerPlayerManager<ClimbingTowerTeleporterPerPlayerSaveable, ClimbingTowerTeleporterSave, ClimbingTowerTeleporterSaveData>` | 0 |  |
| [`ClimbingTowerTeleporterSave`](/game-api/types/game-other-namespaces/climbingtowerteleportersave) | class | `PerPlayerContent<ClimbingTowerTeleporterSaveData>` | 0 |  |
| [`ClimbingTowerTeleporterSaveData`](/game-api/types/game-other-namespaces/climbingtowerteleportersavedata) | class | `IAltaFileFormat` | 5 |  |
| [`DisableAfterDuration`](/game-api/types/game-other-namespaces/disableafterduration) | class | `MonoBehaviour` | 0 |  |
| [`SpiritModeDoorway`](/game-api/types/game-other-namespaces/spiritmodedoorway) | class | `NetworkEntityBehaviour`, `ITeleportAwareTrigger`, `IDontSplit`, +4 more | 5 |  |
| [`SpiritModeDoorwayMode`](/game-api/types/game-other-namespaces/spiritmodedoorwaymode) | enum |  | 2 | Whether a spirit mode doorway removes spirit mode or adds it when a player goes through. |

## Features.Gameplay.GameConditions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IGameCondition`](/game-api/types/game-other-namespaces/igamecondition) | interface |  | 2 | A condition in the game that can be checked and tells listeners when it changes. |
| [`ManualCondition`](/game-api/types/game-other-namespaces/manualcondition) | class | `NetworkEntityBehaviour`, `IGameCondition`, `ISavable<ManualConditionSaveData>`, +2 more | 2 |  |
| [`ManualConditionSaveData`](/game-api/types/game-other-namespaces/manualconditionsavedata) | class | `NewSaveData<ManualCondition, ManualConditionSaveData>` | 1 |  |
| [`NetworkedGameConditionEvaluator`](/game-api/types/game-other-namespaces/networkedgameconditionevaluator) | class | `NetworkEntityBehaviour`, `IGameCondition` | 4 |  |
| [`PendingRepairBoxCompletionCondition`](/game-api/types/game-other-namespaces/pendingrepairboxcompletioncondition) | class | `MonoBehaviour`, `IGameCondition` | 2 |  |
| [`RepairableObject`](/game-api/types/game-other-namespaces/repairableobject) | struct |  | 3 | A game-condition entry naming a repairable object by prefab hash and the build state it must reach. |
| [`RepairableObjectComparisonCondition`](/game-api/types/game-other-namespaces/repairableobjectcomparisoncondition) | class | `NetworkEntityBehaviour`, `IGameCondition`, `ISavable<RepairableObjectComparisonConditionSaveData>`, +2 more | 2 |  |
| [`RepairableObjectComparisonConditionSaveData`](/game-api/types/game-other-namespaces/repairableobjectcomparisonconditionsavedata) | class | `NewSaveData<RepairableObjectComparisonCondition, RepairableObjectComparisonConditionSaveData>` | 2 |  |

## Features.Gameplay.GameConditions.StaticObjectMapped

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`RepairableObjectBuildState`](/game-api/types/game-other-namespaces/repairableobjectbuildstate) | enum |  | 2 | The build state a repairable object condition checks for: not built or built. |

## Features.Gameplay.Inventory.SurfaceDock

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ChiselableSurfaceDock`](/game-api/types/game-other-namespaces/chiselablesurfacedock) | class | `BasicChiselable` | 0 |  |

## Features.Gameplay.Progression.QuestMarkers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`QuestMarker`](/game-api/types/game-other-namespaces/questmarker) | class | `MonoBehaviour` | 1 | A floating quest marker that shows while all its game conditions are met and scales, rises and turns to face the player by distance. Client only; updated by `QuestMarkerDataUpdater`. |

## Features.Main_Menu.Scripts

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccessibilitySeatedStandingBoard`](/game-api/types/game-other-namespaces/accessibilityseatedstandingboard) | class | `PopupBoard` | 0 |  |

## Features.Main_Menu.Scripts.TalemShop

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IAPViewModel`](/game-api/types/game-other-namespaces/iapviewmodel) | class | `LoggedInTool` | 1 |  |
| [`IShopController`](/game-api/types/game-other-namespaces/ishopcontroller) | interface |  | 2 | Store controller for the Talem shop purchases, got from `InterfaceResolver.IShopController`. In this server build the resolver returns null. |
| [`PurchaseResult`](/game-api/types/game-other-namespaces/purchaseresult) | class |  | 4 | Result of a Talem shop purchase: success, or a `PurchaseError` saying why it failed. |

## Features.Main_Menu.Scripts.TalemShop.Errors

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`NoShopForPlatformError`](/game-api/types/game-other-namespaces/noshopforplatformerror) | internal class | `PurchaseError` | 1 |  |
| [`NotLoggedInOnPlatformError`](/game-api/types/game-other-namespaces/notloggedinonplatformerror) | class | `PurchaseError` | 1 |  |
| [`PendingPurchasesError`](/game-api/types/game-other-namespaces/pendingpurchaseserror) | class | `PurchaseError` | 1 |  |
| [`PurchaseError`](/game-api/types/game-other-namespaces/purchaseerror) | class |  | 2 | Base for an error from the Talem shop (the in-game store), made from an exception or a message. |
| [`UnknownPurchaseError`](/game-api/types/game-other-namespaces/unknownpurchaseerror) | class | `PurchaseError` | 1 |  |
| [`UnknownPurchaseExceptionError`](/game-api/types/game-other-namespaces/unknownpurchaseexceptionerror) | class | `PurchaseError` | 1 |  |
| [`UserCancelledError`](/game-api/types/game-other-namespaces/usercancellederror) | class | `PurchaseError` | 1 |  |

## Features.Meta.Platform.Oculus

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IOculusWrapper`](/game-api/types/game-other-namespaces/ioculuswrapper) | interface |  | 16 | Wraps the Meta Quest platform SDK: user ID and proof, launch details, deep links and rich presence. Reached through `InterfaceResolver.IOculusWrapper`; only does anything on Quest. |

## Features.Meta.Resolvers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AddressableResolverSettings`](/game-api/types/game-other-namespaces/addressableresolversettings) | class | `GlobalSettings<AddressableResolverSettings>` | 1 |  |
| [`InterfaceResolver`](/game-api/types/game-other-namespaces/interfaceresolver) | class |  | 7 |  |

## Features.Shop

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IPurchaseConsumer`](/game-api/types/game-other-namespaces/ipurchaseconsumer) | interface |  | 2 | Consumes completed store purchases, got from `InterfaceResolver.IPurchaseConsumer`. In this server build the resolver returns null. |

## Features.Utility.UnityWrappers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ITestUnityApplicationWrapper`](/game-api/types/game-other-namespaces/itestunityapplicationwrapper) | interface |  | 1 |  |
| [`IUnityApplicationWrapper`](/game-api/types/game-other-namespaces/iunityapplicationwrapper) | interface |  | 1 | Wraps Unity's `Application` so tests can swap it. Get it from `UnityApplicationWrapper.Instance`. |
| [`UnityApplicationWrapper`](/game-api/types/game-other-namespaces/unityapplicationwrapper) | class | `IUnityApplicationWrapper`, `ITestUnityApplicationWrapper` | 2 |  |

## Features.Visual_Effects.General_Scripts

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ParticlesToPlayer`](/game-api/types/game-other-namespaces/particlestoplayer) | class | `NetworkEntityBehaviour`, `ISavable<ParticlesToPlayerSaveData>`, `ISavableSave<ParticlesToPlayerSaveData>`, +1 more | 5 |  |
| [`ParticlesToPlayerSaveData`](/game-api/types/game-other-namespaces/particlestoplayersavedata) | class | `NewSaveData<ParticlesToPlayer, ParticlesToPlayerSaveData>` | 1 | Save data for `ParticlesToPlayer`. |
| [`PooledParticleSystemManipulator`](/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator) | class | `PooledObject`, `IBuildRendererPostBake`, `IBuildBakeable` | 3 |  |

## Features.Visual_Effects.VFXData

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`VfxData`](/game-api/types/game-other-namespaces/vfxdata) | class | `HashedGeneralValue<VfxData>` | 7 | Settings asset for a two-part particle effect: particles that spawn, fly to a destination (usually the player) and trigger an arrival effect. Used for effects like gaining a skill orb. Looked up by hash. |

## Features.World.Environmental.Atmosphere

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`InteriorFogAmbience`](/game-api/types/game-other-namespaces/interiorfogambience) | class | `AtmospherePlugin` | 4 |  |

## GameCommands.Messages

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CommandType`](/game-api/types/game-other-namespaces/commandtype) | enum |  | 1 | Types of game command message. The only value is `PrepareForUpdate`. |
| [`GameCommandMessage`](/game-api/types/game-other-namespaces/gamecommandmessage) | class |  | 1 |  |
| [`GameResponseMessage`](/game-api/types/game-other-namespaces/gameresponsemessage) | class |  | 2 |  |

## TableParser

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`TableOrderAttribute`](/game-api/types/game-other-namespaces/tableorderattribute) | class | `Attribute` | 2 |  |
| [`TableParserExtensions`](/game-api/types/game-other-namespaces/tableparserextensions) | static class |  | 5 |  |

## Township.Climbing

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClimbingEditorSettings`](/game-api/types/game-other-namespaces/climbingeditorsettings) | class | `ScriptableObject` | 4 |  |

## Township.Downed

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`RespawnOrb`](/game-api/types/game-other-namespaces/respawnorb) | class | `EventOrb` | 2 | Orb shown while a player is downed, with a circular timer that fills until they respawn. `DownedState` spawns it and drives the timer. |
| [`ReviveCompletableActivity`](/game-api/types/game-other-namespaces/revivecompletableactivity) | class | `ICompletableActivity` | 9 | The revive minigame for a downed player: spawns a rotating ring of revive orbs around the grave and counts progress as orbs are consumed. Created by `DownedState` on the server. |
| [`ReviveOrb`](/game-api/types/game-other-namespaces/reviveorb) | class | `EventOrb` | 3 | One of the orbs spawned around a downed player. Another player carries it into the gravestone's beam, then the downed player grabs and releases it to add revive progress. Server decides; clients show who can grab it. |
| [`ReviveOrbMovementModifier`](/game-api/types/game-other-namespaces/reviveorbmovementmodifier) | class | `MonoBehaviour` | 2 | Makes a revive orb's anchor drift between random points around its origin, with ease in and out. |

## Township.PostProcessing

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`TextureFormatUtilities`](/game-api/types/game-other-namespaces/textureformatutilities) | static class |  | 0 |  |

## UnityEngine.UI

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CustomOutline`](/game-api/types/game-other-namespaces/customoutline) | class | `Shadow` | 6 |  |

## WindowsConsole

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ConsoleInput`](/game-api/types/game-other-namespaces/consoleinput) | class |  | 8 | Line editor for the Windows server console: keeps a typed line at the bottom while log lines print above it, with cursor keys, word jumps and history. Runs on the console thread. |
| [`ConsoleWindow`](/game-api/types/game-other-namespaces/consolewindow) | class |  | 5 | Opens a native Windows console window for the game process and sends `Console` output to it. `WindowsServerConsole` creates one on its console thread. |
| [`ConsoleWindow.CtrlType`](/game-api/types/game-other-namespaces/consolewindow-ctrltype) | enum |  | 5 | Windows console control signals (Ctrl+C, Ctrl+Break, close, logoff, shutdown) passed to the console control handler. |
| [`ConsoleWindow.HandlerRoutine`](/game-api/types/game-other-namespaces/consolewindow-handlerroutine) | delegate |  | 0 | Callback type for Win32 console control events (Ctrl+C, close, logoff, shutdown). Return true to mark the event handled. |
