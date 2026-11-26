---
title: "No namespace: P"
description: "Root.Township types with no namespace, P."
sidebar_position: 20
---

# No namespace: P

Types in `Root.Township` with no namespace (the global namespace), from P. 327 types, 39 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## P

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`PageAutoAddEffect`](/game-api/types/global-p/pageautoaddeffect) | class | `PooledObject` | 3 | Pooled client effect for a page being added to the player's book automatically: the page dissolves, a ghost book appears in front of the player and takes it. |
| [`PageLootSettings`](/game-api/types/global-p/pagelootsettings) | class | `GlobalSettings<PageLootSettings>` | 1 |  |
| [`PageLootSettings.Create`](/game-api/types/global-p/pagelootsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<PageLootSettings>` | 0 |  |
| [`PageProvider`](/game-api/types/global-p/pageprovider) | abstract class | `MonoBehaviour` | 8 | Base for a kind of page content (for books and notes). Each provider registers itself by `Identifier` on Awake and makes, saves and syncs its own page data. |
| [`PaintBrush`](/game-api/types/global-p/paintbrush) | class | `MonoBehaviour` | 2 |  |
| [`ParticleDestination`](/game-api/types/global-p/particledestination) | enum |  | 3 | Where `PooledParticleSystemManipulator` sends particles: the player's hands, the player's body or custom targets. |
| [`ParticleEffectDistanceController`](/game-api/types/global-p/particleeffectdistancecontroller) | class | `MonoBehaviour` | 1 | Shortens the life of world-space particles that drift too far from this object. Checks every few frames; removed on headless servers. |
| [`ParticleMeshReplacePooledObject`](/game-api/types/global-p/particlemeshreplacepooledobject) | class | `MeshReplacePooledObject` | 1 |  |
| [`ParticleSystemGroup`](/game-api/types/global-p/particlesystemgroup) | class | `MonoBehaviour` | 2 |  |
| [`ParticleSystemToHand`](/game-api/types/global-p/particlesystemtohand) | class | `MonoBehaviour` | 0 |  |
| [`PathEndsPart`](/game-api/types/global-p/pathendspart) | class | `GeneratablePart` | 2 | Generatable part that places two objects at the ends of a forest path edge during generation, facing along the path. |
| [`PathEndsPart.Arrangement`](/game-api/types/global-p/pathendspart-arrangement) | enum |  | 4 | How `PathEndsPart` picks which path end gets which side: fixed direction, side A or B towards the forest entrance, or random. |
| [`PathExperience`](/game-api/types/global-p/pathexperience) | class |  | 18 | [Progression](../game-systems/progression.md#pathexperience): One per player per path. |
| [`PathModelDisplay`](/game-api/types/global-p/pathmodeldisplay) | class | `SkillShrineVisualizer` | 3 |  |
| [`PathWalker`](/game-api/types/global-p/pathwalker) | class | `MonoBehaviour` | 12 | Moves a rigidbody along an A* path towards a target transform or position, steering and slowing near the end. Uses the A* Pathfinding `Seeker` on the same object; nothing else in the code references it. |
| [`PathWalker.OnTargetReached`](/game-api/types/global-p/pathwalker-ontargetreached) | delegate |  | 0 | Handler for `PathWalker.OnPathEndReached`, called when the walker reaches the end of its path. |
| [`PauseEditor`](/game-api/types/global-p/pauseeditor) | class | `ControllerInputButtonPressed` | 0 |  |
| [`PerPlayerContent<TSaveFormat>`](/game-api/types/global-p/perplayercontent-tsaveformat) | class | `IPerPlayerContent<TSaveFormat>` | 10 | Server: a save file that belongs to one player (by user ID), loaded whether or not they're online. Tracks the player while they're in the server. Base of `PlayerPostboxStorage`. |
| [`PerPlayerManager<TThis, TContent, TSaveFormat>`](/game-api/types/global-p/perplayermanager-tthis-tcontent-tsaveformat) | class | `NetworkEntityBehaviour`, `IAutoSave` | 8 | Base for server singletons that load, cache and save one content object per player from that player's data file. Get one with the static `Instance`. |
| [`Phase`](/game-api/types/global-p/phase) | class | `MonoBehaviour`, `IPhase` | 3 | One stage of a phased sequence, driven through the `IPhase` interface and wired to logic bool senders and a receiver. |
| [`PhysicalButton`](/game-api/types/global-p/physicalbutton) | class | `Interactable`, `IPreventAtlasing` | 7 | [Buttons and levers](../items/buttons-and-levers.md#physicalbutton): Runs on every machine that simulates the press; not networked. |
| [`PhysicalMaterial`](/game-api/types/global-p/physicalmaterial) | class | `HashedGeneralValue<PhysicalMaterial>` | 31 | [Items and materials](../items/items-and-materials.md#physicalmaterial): A `HashedGeneralValue<PhysicalMaterial>` asset. Data, same on both sides. |
| [`PhysicalMaterial.Create`](/game-api/types/global-p/physicalmaterial-create) | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<PhysicalMaterial>` | 0 |  |
| [`PhysicalMaterialChannel`](/game-api/types/global-p/physicalmaterialchannel) | enum |  | 6 | Which of a physical material's material slots (A to F) to use. Forging, chiselling and the builder dock mostly ask for A. |
| [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart) | class | `GeneratedNetworkEntityBehaviour`, `ISavable<PhysicalMaterialPartSaveData>`, `ISavableSave<PhysicalMaterialPartSaveData>`, +7 more | 6 | [Items and materials](../items/items-and-materials.md#physicalmaterialpart): A networked behaviour on items that have a material. The server picks and syncs the material; clients follow. |
| [`PhysicalMaterialPart.ChangedMaterial`](/game-api/types/global-p/physicalmaterialpart-changedmaterial) | delegate |  | 0 | Handler for `PhysicalMaterialPart.MaterialChanged`, given the new physical material and the channel it changed on. |
| [`PhysicalMaterialPartSaveData`](/game-api/types/global-p/physicalmaterialpartsavedata) | internal class | `NewSaveData<PhysicalMaterialPart, PhysicalMaterialPartSaveData>` | 1 |  |
| [`PhysicsAcceleration`](/game-api/types/global-p/physicsacceleration) | class | `MonoBehaviour` | 1 |  |
| [`PhysicsLock`](/game-api/types/global-p/physicslock) | class | `MonoBehaviour` | 0 |  |
| [`Pickup`](/game-api/types/global-p/pickup) | class | `Interactable`, `IGetRigidbody`, `IPopulationRemovalMethod`, +5 more | 80 | [Pickup](../items/pickup.md): Runs on both sides; docking on release starts on the holder's client, breaking is the server's. |
| [`Pickup.PickupHandler`](/game-api/types/global-p/pickup-pickuphandler) | delegate |  | 0 | Handler for `Pickup.PickupGrabbed`, given the pickup and the interactor that grabbed it. |
| [`PickupArea`](/game-api/types/global-p/pickuparea) | class | `MonoBehaviour` | 3 | [Items, interaction and damage](../items/overview.md): Tracks the pickups inside a trigger. |
| [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill) | abstract class | `ProfessionSkill`, `IInputBasedSkill`, `IChargeableProfessionSkill` | 15 | [Items, interaction and damage](../items/overview.md) |
| [`PickupBasedSkillModifier`](/game-api/types/global-p/pickupbasedskillmodifier) | abstract class | `ProfessionSkill`, `IInputBasedSkill`, `IChargeableProfessionSkill` | 14 | Base for a skill that changes how a held tool's skill works while active, for example a charged attack. Registers with the player's `PlayerToolBasedSkillHelper` when learnt and syncs its status (charging, charged, consumed, cancelled) to other clients. |
| [`PickupButtons`](/game-api/types/global-p/pickupbuttons) | class | `MonoBehaviour` | 0 |  |
| [`PickupClamp`](/game-api/types/global-p/pickupclamp) | class | `MonoBehaviour` | 1 |  |
| [`PickupContainer`](/game-api/types/global-p/pickupcontainer) | class | `Interactable` | 7 | [Player inventory](../items/player-inventory.md#pouches-and-pickupcontainer), [Other systems](../game-systems/other-systems.md) |
| [`PickupDecay`](/game-api/types/global-p/pickupdecay) | class | `BasicDecay` | 2 | [Items, interaction and damage](../items/overview.md): Server-side decay timer for pickups, paused while held or docked. |
| [`PickupDecaySettings`](/game-api/types/global-p/pickupdecaysettings) | class | `DecaySettings` | 3 | Decay settings asset for pickups, adding rules for crafted and kinematic pickups. Read by `PickupDecay`. |
| [`PickupDecaySettings.Create`](/game-api/types/global-p/pickupdecaysettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Decay.ScriptableObject<PickupDecaySettings>` | 0 |  |
| [`PickupDockedEvent`](/game-api/types/global-p/pickupdockedevent) | class | `AltaEvent<Interactor, Pickup, PickupDock, PickupDockedUnityEvent>` | 0 | Serializable event with the interactor, the pickup and the dock it went into, editable in the inspector. |
| [`PickupDockedFilter`](/game-api/types/global-p/pickupdockedfilter) | class | `MonoBehaviour` | 0 |  |
| [`PickupDockedUnityEvent`](/game-api/types/global-p/pickupdockedunityevent) | class | `UnityEvent<Interactor, Pickup, PickupDock>` | 0 |  |
| [`PickupDockGroup`](/game-api/types/global-p/pickupdockgroup) | class | `ComponentGroup<PickupDock>` | 1 | A group of pickup docks on one object, so they can be handled together. |
| [`PickupDockingChecker`](/game-api/types/global-p/pickupdockingchecker) | class |  | 7 | Tracks which dock a held pickup is hovering over, fires hover events, plays haptics and auto docks. Each `Pickup` creates one; it runs while a local player holds it. |
| [`PickupDockingSoundPlayer`](/game-api/types/global-p/pickupdockingsoundplayer) | class | `MonoBehaviour` | 0 |  |
| [`PickupDockPedestalSpawn`](/game-api/types/global-p/pickupdockpedestalspawn) | class | `PickupDock` | 1 | [Items, interaction and damage](../items/overview.md) |
| [`PickupDockScaleCompare`](/game-api/types/global-p/pickupdockscalecompare) | class | `MonoBehaviour` | 0 |  |
| [`PickupEvent`](/game-api/types/global-p/pickupevent) | class | `AltaEvent<Pickup, UnityPickupEvent>` | 0 | Serializable `AltaEvent` with a `Pickup` argument. Runs inspector-wired listeners and C# `Invoked` handlers. |
| [`PickupExtension`](/game-api/types/global-p/pickupextension) | class | `Interactable` | 2 |  |
| [`PickupFromDockRestriction`](/game-api/types/global-p/pickupfromdockrestriction) | enum |  | 3 | Flags limiting how a pickup can be taken from a dock: fixed, not with the left hand, or not with the right hand. |
| [`PickupGrabInputMethod`](/game-api/types/global-p/pickupgrabinputmethod) | class | `ISkillInputMethod` | 1 |  |
| [`PickupGrabInputStructure`](/game-api/types/global-p/pickupgrabinputstructure) | class | `SkillInputStructure` | 1 |  |
| [`PickupGrabInputStructure.Create`](/game-api/types/global-p/pickupgrabinputstructure-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<PickupGrabInputStructure>` | 0 |  |
| [`PickupHolder`](/game-api/types/global-p/pickupholder) | class | `NetworkEntityBehaviour` | 7 | [Items, interaction and damage](../items/overview.md): Holds one pickup in place (server decides, synced). |
| [`PickupHolderFilter`](/game-api/types/global-p/pickupholderfilter) | delegate |  | 0 | Filter callback that can set `isValid` to false to reject a pickup. |
| [`PickupInteractionScaler`](/game-api/types/global-p/pickupinteractionscaler) | class |  | 2 | Shrinks a pickup while it's held and scales it back up when released, optionally showing a shrunken stand-in visual. `Pickup` creates one when its item scales on grab. |
| [`PickupJoints`](/game-api/types/global-p/pickupjoints) | class |  | 6 | Creates and removes the physics joints that tie a `Pickup` to each hand holding it. The joint kind comes from the pickup's joint type. |
| [`PickUpJointType`](/game-api/types/global-p/pickupjointtype) | enum |  | 6 | How a held pickup is attached to the hand: fixed, spring, velocity-driven or custom joints, or no joint. `Pickup` defaults to `VelocityJoint`. |
| [`PickupOwnershipLogger`](/game-api/types/global-p/pickupownershiplogger) | static class |  | 2 |  |
| [`PickupSaveData`](/game-api/types/global-p/pickupsavedata) | class | `NewSaveData<Pickup, PickupSaveData>` | 2 |  |
| [`PickupSaveDataOld1`](/game-api/types/global-p/pickupsavedataold1) | class | `OldSaveData` | 2 |  |
| [`PickupTypeSetting`](/game-api/types/global-p/pickuptypesetting) | abstract class | `OverridableSettings` | 1 | Base settings asset for one pickup joint type, looked up from `PickupTypeSettings`. |
| [`PickupTypeSettings`](/game-api/types/global-p/pickuptypesettings) | class | `GlobalSettings<PickupTypeSettings>` | 43 | Global settings for held items: per-grip-type settings, damage popups, crafting line visuals, shrink and break effects, and stat definitions used for damage. Get it with `GlobalSettings<PickupTypeSettings>.Instance`. |
| [`PickupTypeSettings.Create`](/game-api/types/global-p/pickuptypesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<PickupTypeSettings>` | 0 |  |
| [`PickupWeightScale`](/game-api/types/global-p/pickupweightscale) | class | `MonoBehaviour` | 0 |  |
| [`PipAvailablePointManager`](/game-api/types/global-p/pipavailablepointmanager) | class | `AvailablePointVisualizerManager` | 4 |  |
| [`PipelineDistribution`](/game-api/types/global-p/pipelinedistribution) | class | `PipelineElement` | 4 |  |
| [`PipelineElement`](/game-api/types/global-p/pipelineelement) | abstract class |  | 4 |  |
| [`PipelineFlattenDistribution`](/game-api/types/global-p/pipelineflattendistribution) | class | `PipelineElement` | 4 |  |
| [`PipelineResultAttribute`](/game-api/types/global-p/pipelineresultattribute) | class | `Attribute` | 2 |  |
| [`PlaceItemNoDockFirePuzzleLogic`](/game-api/types/global-p/placeitemnodockfirepuzzlelogic) | class | `MonoBehaviour`, `ISavable<PlaceItemNoDockFirePuzzleLogicSaveData>`, `ISavableSave<PlaceItemNoDockFirePuzzleLogicSaveData>`, +1 more | 1 |  |
| [`PlaceItemNoDockFirePuzzleLogicSaveData`](/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata) | class | `NewSaveData<PlaceItemNoDockFirePuzzleLogic, PlaceItemNoDockFirePuzzleLogicSaveData>` | 3 |  |
| [`PlaceItemNoDockFirePuzzleLogicSaveData.Option`](/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata-option) | class |  | 1 |  |
| [`PlaceItemNoDockFirePuzzleLogicSaveData1`](/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata1) | class | `OldSaveData` | 1 |  |
| [`PlaceItemNoDockPuzzleLogic`](/game-api/types/global-p/placeitemnodockpuzzlelogic) | class | `MonoBehaviour`, `ISavable<PlaceItemNoDockPuzzleLogicSaveData>`, `ISavableSave<PlaceItemNoDockPuzzleLogicSaveData>`, +1 more | 0 |  |
| [`PlaceItemNoDockPuzzleLogicSaveData`](/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata) | class | `NewSaveData<PlaceItemNoDockPuzzleLogic, PlaceItemNoDockPuzzleLogicSaveData>` | 3 |  |
| [`PlaceItemNoDockPuzzleLogicSaveData.Option`](/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata-option) | class |  | 2 |  |
| [`PlaceItemNoDockPuzzleLogicSaveData1`](/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata1) | class | `OldSaveData` | 2 |  |
| [`PlaceItemPuzzleLogic`](/game-api/types/global-p/placeitempuzzlelogic) | class | `MonoBehaviour`, `ISavable<PlaceItemPuzzleLogicSaveData>`, `ISavableSave<PlaceItemPuzzleLogicSaveData>`, +1 more | 1 |  |
| [`PlaceItemPuzzleLogicSaveData`](/game-api/types/global-p/placeitempuzzlelogicsavedata) | class | `NewSaveData<PlaceItemPuzzleLogic, PlaceItemPuzzleLogicSaveData>` | 3 |  |
| [`PlaceItemPuzzleLogicSaveData.Option`](/game-api/types/global-p/placeitempuzzlelogicsavedata-option) | class |  | 2 |  |
| [`PlaceItemPuzzleLogicSaveData1`](/game-api/types/global-p/placeitempuzzlelogicsavedata1) | class | `OldSaveData` | 2 |  |
| [`PlacementObject`](/game-api/types/global-p/placementobject) | class | `MonoBehaviour` | 1 |  |
| [`PlatformActionMapping`](/game-api/types/global-p/platformactionmapping) | class |  | 10 | The input-to-action mappings for one platform within a controller action mode: which buttons trigger which `ControllerActionType` on each hand. |
| [`PlatformComponents`](/game-api/types/global-p/platformcomponents) | class | `BuildRendererBakeable` | 2 |  |
| [`PlatformDefines`](/game-api/types/global-p/platformdefines) | static class |  | 2 |  |
| [`PlatformDistanceLODModifier`](/game-api/types/global-p/platformdistancelodmodifier) | class | `BuildRendererBakeable` | 1 |  |
| [`PlatformDriver`](/game-api/types/global-p/platformdriver) | class | `SingletonBehaviour<PlatformDriver>` | 5 |  |
| [`PlatformHandler`](/game-api/types/global-p/platformhandler) | delegate |  | 0 |  |
| [`PlatformHeightOffset`](/game-api/types/global-p/platformheightoffset) | struct |  | 3 | A player height offset for one set of platforms, listed in `PlatformHeightOffsetSettings`. |
| [`PlatformHeightOffsetSettings`](/game-api/types/global-p/platformheightoffsetsettings) | class | `ScriptableObject` | 1 |  |
| [`PlatformHierarchyShuffler`](/game-api/types/global-p/platformhierarchyshuffler) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 0 |  |
| [`PlatformLaunchType`](/game-api/types/global-p/platformlaunchtype) | enum |  | 5 | How the game was launched on the platform: normal, invite, coordinated or deep link. Set by Oculus launch details. |
| [`PlatformLightDarknessReader`](/game-api/types/global-p/platformlightdarknessreader) | class | `DarknessReaderMethod` | 1 |  |
| [`PlatformLoader`](/game-api/types/global-p/platformloader) | abstract class | `MonoBehaviour` | 1 |  |
| [`PlatformLODController`](/game-api/types/global-p/platformlodcontroller) | class | `BuildRendererBakeable` | 1 |  |
| [`PlatformLODModifier`](/game-api/types/global-p/platformlodmodifier) | class | `BuildRendererBakeable` | 1 |  |
| [`PlatformMaterial`](/game-api/types/global-p/platformmaterial) | class | `ScriptableObject` | 0 |  |
| [`PlatformMeshController`](/game-api/types/global-p/platformmeshcontroller) | class | `BuildRendererBakeable` | 2 |  |
| [`PlatformModeHandler`](/game-api/types/global-p/platformmodehandler) | delegate |  | 0 |  |
| [`PlatformObjects`](/game-api/types/global-p/platformobjects) | class | `BuildRendererBakeable` | 3 |  |
| [`PlatformObjects.PlatformObjectSetup`](/game-api/types/global-p/platformobjects-platformobjectsetup) | class |  | 3 |  |
| [`PlatformTexture`](/game-api/types/global-p/platformtexture) | class | `ScriptableObject` | 0 |  |
| [`Player`](/game-api/types/global-p/player) | class | `NetworkEntity`, `IPlatformPlayer`, `IPlayer`, +1 more | 66 | [Player](../networking/player.md), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `NetworkEntity`, and it implements `IPlayer` (`Alta.Networking.Scripts.Player`). |
| [`PlayerAdjustableHeightFixerSettings`](/game-api/types/global-p/playeradjustableheightfixersettings) | class | `ScriptableObject` | 5 | Settings asset for the height assist accessibility option: a list of height offsets and the one the player has picked, saved in game settings. |
| [`PlayerChunkManager`](/game-api/types/global-p/playerchunkmanager) | class |  | 5 | Tracks which location chunk a player is in and which chunks they have loaded. The server works it out from position and sends it; clients apply what they receive. One per `Player`. |
| [`PlayerCommunicationManager`](/game-api/types/global-p/playercommunicationmanager) | class | `NetworkEntityBehaviour` | 4 |  |
| [`PlayerCommunityAnalytics`](/game-api/types/global-p/playercommunityanalytics) | static class |  | 9 |  |
| [`PlayerComponent`](/game-api/types/global-p/playercomponent) | class | `NetworkEntityBehaviour` | 2 | Base for components on the `Player` object (the player's network entity, not their body). `Player` calls `InitializeComponent` on each one. |
| [`PlayerController`](/game-api/types/global-p/playercontroller) | abstract class | `NetworkEntityBehaviour`, `IHasHead`, `IBuildRendererBakeable`, +1 more | 57 | [PlayerController and the body](../networking/player-controller.md): A player's body is its own networked entity, spawned by the server after the `Player` and destroyed and respawned around death. |
| [`PlayerControllerHandler`](/game-api/types/global-p/playercontrollerhandler) | delegate |  | 0 | Handler for `Player.PlayerControllerSet`: gets the player and its new `PlayerController` (may be null). |
| [`PlayerControllerLocalityController`](/game-api/types/global-p/playercontrollerlocalitycontroller) | class | `MonoBehaviour` | 4 |  |
| [`PlayerControllerMultiLockModel`](/game-api/types/global-p/playercontrollermultilockmodel) | class | `NetworkEntityBehaviour`, `IPlayerControllerMultiLockModel` | 4 |  |
| [`PlayerConverter`](/game-api/types/global-p/playerconverter) | class | `TypeConverter` | 3 |  |
| [`PlayerCrippleController`](/game-api/types/global-p/playercripplecontroller) | class | `MonoBehaviour` | 0 |  |
| [`PlayerData`](/game-api/types/global-p/playerdata) | struct |  | 5 | A leaderboard entry: player name and time in seconds. Converts to `PlayerDataInfo` for display. |
| [`PlayerDataInfo`](/game-api/types/global-p/playerdatainfo) | class |  | 3 | Leaderboard row returned by the leaderboard console command: player name and time. Made from `PlayerData`. |
| [`PlayerDebugMessager`](/game-api/types/global-p/playerdebugmessager) | class | `MonoBehaviour` | 1 |  |
| [`PlayerDetect`](/game-api/types/global-p/playerdetect) | class | `NetworkEntityBehaviour`, `ISavable<PlayerDetectSaveData>`, `ISavableSave<PlayerDetectSaveData>`, +1 more | 3 |  |
| [`PlayerDetectSaveData`](/game-api/types/global-p/playerdetectsavedata) | internal class | `NewSaveData<PlayerDetect, PlayerDetectSaveData>` | 3 |  |
| [`PlayerDetectSaveDataOld1`](/game-api/types/global-p/playerdetectsavedataold1) | internal class | `OldSaveData` | 2 |  |
| [`PlayerDockDropper`](/game-api/types/global-p/playerdockdropper) | class | `MonoBehaviour` | 0 | [Player inventory](../items/player-inventory.md): Empties a dock when the player's scale changes. |
| [`PlayerDrinkingMouth`](/game-api/types/global-p/playerdrinkingmouth) | class | `NetworkEntityBehaviour` | 1 |  |
| [`PlayerEffectManager`](/game-api/types/global-p/playereffectmanager) | class | `MonoBehaviour` | 1 |  |
| [`PlayerEffectManager.EffectPosition`](/game-api/types/global-p/playereffectmanager-effectposition) | class |  | 8 | A spot on a player's body where heat (smoke, burn) and stat effect particles are placed, tied to a `HeatPoint`. |
| [`PlayerEffectManager.OverrideSettings`](/game-api/types/global-p/playereffectmanager-overridesettings) | enum |  | 3 | Whether a player's effect points are set up for the local player or a remote player; passed to each effect point when the player is linked. |
| [`PlayerEffectParticle`](/game-api/types/global-p/playereffectparticle) | class | `EffectReleaseOnFade` | 2 | Effect on a player that fades and releases, with a radius you can set across all its particle systems. |
| [`PlayerEvent`](/game-api/types/global-p/playerevent) | class | `AltaEvent<IPlayer, PlayerUnityEvent>` | 0 | Serializable `AltaEvent` with an `IPlayer` argument. Runs inspector-wired listeners and C# `Invoked` handlers. |
| [`PlayerEventsManager`](/game-api/types/global-p/playereventsmanager) | class | `PlayerComponent` | 13 | Gameplay events about one player gathered in one place: interactions, tool hits, health, downed, killed, combat and whether they are armed. A component on the player template; get it from `Player.PlayerEventsManager`. |
| [`PlayerEventsManager.OnPathHitGenerated`](/game-api/types/global-p/playereventsmanager-onpathhitgenerated) | delegate |  | 0 |  |
| [`PlayerGoldBankAccount`](/game-api/types/global-p/playergoldbankaccount) | class | `PerPlayerContent<PlayerGoldBankAccountData>` | 0 |  |
| [`PlayerGoldBankAccountData`](/game-api/types/global-p/playergoldbankaccountdata) | class | `IAltaFileFormat` | 5 |  |
| [`PlayerHandler`](/game-api/types/global-p/playerhandler) | delegate |  | 0 | Handler that gets an `IPlayer`, as used by `Player.LocalPlayerSet`. |
| [`PlayerHealth`](/game-api/types/global-p/playerhealth) | class | `HealthObject` | 10 | [Health and damage](../items/health-and-damage.md#playerhealth): `PlayerHealth : HealthObject`, no namespace. Get it with `playerCharacter.Health` (typed `PlayerHealth`) or `playerController.Health as PlayerHealth`. |
| [`PlayerHealthVisualEffectsSettings`](/game-api/types/global-p/playerhealthvisualeffectssettings) | class | `ScriptableObject` | 16 | Asset with the local player's health effects: hurt vignette, saturation by health, hunger blur and stomach sounds, recent damage, and the nightmare fog effect. |
| [`PlayerHeightFixer`](/game-api/types/global-p/playerheightfixer) | class | `MonoBehaviour` | 1 |  |
| [`PlayerInput`](/game-api/types/global-p/playerinput) | class | `MonoBehaviour` | 14 | One hand's input component on the platform player. Holds the hand index, raw button state, the D-pad helper and haptics. Client side; get it from the player's `LeftInput` or `RightInput`. |
| [`PlayerInteractionManager`](/game-api/types/global-p/playerinteractionmanager) | class | `NetworkEntityBehaviour`, `ISavable<PlayerInteractionManagerData>`, `ISavableSave<PlayerInteractionManagerData>`, +1 more | 13 | [Items, interaction and damage](../items/overview.md) |
| [`PlayerInteractionManager.Tracker`](/game-api/types/global-p/playerinteractionmanager-tracker) | class |  | 4 | How many interactions one player has left on one limited object, keyed by id in `PlayerInteractionManager`. The server sends it to that player when it changes; trackers clear once a game day. |
| [`PlayerInteractionManagerData`](/game-api/types/global-p/playerinteractionmanagerdata) | class | `NewSaveData<PlayerInteractionManager, PlayerInteractionManagerData>` | 2 |  |
| [`PlayerInteractionManagerData.PlayerData`](/game-api/types/global-p/playerinteractionmanagerdata-playerdata) | class |  | 4 |  |
| [`PlayerInteractionManagerData.TrackerData`](/game-api/types/global-p/playerinteractionmanagerdata-trackerdata) | class |  | 2 |  |
| [`PlayerInteractionRestrictor`](/game-api/types/global-p/playerinteractionrestrictor) | class | `NetworkEntityBehaviour`, `ISavable<PlayerInteractionRestrictorData>`, `ISavableSave<PlayerInteractionRestrictorData>`, +1 more | 9 | [Items, interaction and damage](../items/overview.md) |
| [`PlayerInteractionRestrictorData`](/game-api/types/global-p/playerinteractionrestrictordata) | class | `NewSaveData<PlayerInteractionRestrictor, PlayerInteractionRestrictorData>` | 2 |  |
| [`PlayerList`](/game-api/types/global-p/playerlist) | class | `IEnumerable<IPlayer>`, `IEnumerable` | 4 | [Arguments and results](../console-and-utilities/arguments-and-results.md): Names or ids separated by commas, or `*` for everyone |
| [`PlayerListConverter`](/game-api/types/global-p/playerlistconverter) | class | `TypeConverter` | 2 |  |
| [`PlayerLocomotionController`](/game-api/types/global-p/playerlocomotioncontroller) | class | `LocomotionController`, `INetworkSerialized` | 8 | [Locomotion](../networking/locomotion.md#playerlocomotioncontroller): The VR body's. |
| [`PlayerMessageDisplay`](/game-api/types/global-p/playermessagedisplay) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 3 | Client text shown in front of the player's view, such as login errors. Messages queue and fade in and out. |
| [`PlayerModeOverride`](/game-api/types/global-p/playermodeoverride) | class | `ScriptableObject` | 1 |  |
| [`PlayerModeOverride.Create`](/game-api/types/global-p/playermodeoverride-create) | class | `AltaMenuItemBase.Assets.Create.Township.Debug.ScriptableObject<PlayerModeOverride>` | 0 |  |
| [`PlayerModeUtilities`](/game-api/types/global-p/playermodeutilities) | static class |  | 3 | [Joining a server](../networking/joining.md), [Startup and app state](../console-and-utilities/startup-and-app-state.md): `PlayerMode` (what this client will join as), `OverrideMode` (set it before joining to join as something else; Rover does), `IsNormalPlayerMode(mode)` (false for Fly and AutoCam, which aren't saved). |
| [`PlayerMoveChunkData`](/game-api/types/global-p/playermovechunkdata) | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`PlayerOrbLight`](/game-api/types/global-p/playerorblight) | class |  | 1 |  |
| [`PlayerPositionHelper`](/game-api/types/global-p/playerpositionhelper) | class | `PositionFromOriginHelper` | 1 |  |
| [`PlayerPositionRestrictor`](/game-api/types/global-p/playerpositionrestrictor) | class | `MonoBehaviour` | 1 |  |
| [`PlayerPostboxStorage`](/game-api/types/global-p/playerpostboxstorage) | class | `PerPlayerContent<PlayerPostboxStorageFileFormat>` | 8 | [Trading](../game-systems/trading.md): The per-player file, above. |
| [`PlayerPostboxStorage.InitialContent`](/game-api/types/global-p/playerpostboxstorage-initialcontent) | class |  | 2 | A set piece that may be placed in a new player postbox, with a chance. |
| [`PlayerPostboxStorageEventHandler`](/game-api/types/global-p/playerpostboxstorageeventhandler) | delegate |  | 0 | Handler for a postbox's `ItemAdded` and `ItemRemoved`: gets the storage and its new item count. |
| [`PlayerPostboxStorageFileFormat`](/game-api/types/global-p/playerpostboxstoragefileformat) | class | `IAltaFileFormat` | 4 |  |
| [`PlayerProgressFlag`](/game-api/types/global-p/playerprogressflag) | abstract class | `HashedGeneralValue<PlayerProgressFlag>` | 2 | Base for per-player completion flags looked up by hash: game achievements and micro tutorials. |
| [`PlayerProgressFlagConverter<T>`](/game-api/types/global-p/playerprogressflagconverter-t) | class | `TypeConverter` | 2 |  |
| [`PlayerProgression`](/game-api/types/global-p/playerprogression) | class |  | 6 |  |
| [`PlayerProgression.EventTypeEnum`](/game-api/types/global-p/playerprogression-eventtypeenum) | enum |  | 3 |  |
| [`PlayerProgressionManager`](/game-api/types/global-p/playerprogressionmanager) | class | `PlayerComponent` | 29 | [Progression](../game-systems/progression.md#playerprogressionmanager): One per `Player` (not per body), so it survives respawns. Get it with `player.ProgressionManager` (it's on `IPlayer` too). |
| [`PlayerProgressionManager.PracticeTuple`](/game-api/types/global-p/playerprogressionmanager-practicetuple) | class |  | 5 | Network argument saying a skill slot on a path was practised. The server sends it; clients mark the slot. |
| [`PlayerRoleProvider`](/game-api/types/global-p/playerroleprovider) | class | `MonoBehaviour` | 1 |  |
| [`PlayerScreenFader`](/game-api/types/global-p/playerscreenfader) | abstract class | `MonoBehaviour` | 10 | Fades the local player's view to and from black. Subclasses draw the fade. Lockers can hold the screen black (and the player controller locked) until all are removed. |
| [`PlayerSmoothManager`](/game-api/types/global-p/playersmoothmanager) | class | `NetworkEntityBehaviour` | 5 |  |
| [`PlayerSpecialEffectsController`](/game-api/types/global-p/playerspecialeffectscontroller) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable`, +1 more | 26 | Visual effects on a player character: teleport and streaming trails, combat wave, shell effects for combat, stat effects and spirit mode, the death animation and level up effects. A component on the player character; most of it does nothing on headless servers. |
| [`PlayerSystemHandler`](/game-api/types/global-p/playersystemhandler) | delegate |  | 0 |  |
| [`PlayerTextMessage`](/game-api/types/global-p/playertextmessage) | struct |  | 4 | A text message and how long to show it, sent from the server to one player by `PlayerCommunicationManager`. |
| [`PlayerTimeUpdate`](/game-api/types/global-p/playertimeupdate) | delegate |  | 0 |  |
| [`PlayerToolBasedSkillHelper`](/game-api/types/global-p/playertoolbasedskillhelper) | class | `PlayerComponent` | 9 | Player component that tracks the pickups a player holds and wires active pickup-based skills and their modifiers to them. Feeds tool hits and per-frame updates to each held pickup's handler. |
| [`PlayerTracker`](/game-api/types/global-p/playertracker) | class |  | 8 |  |
| [`PlayerUnityEvent`](/game-api/types/global-p/playerunityevent) | class | `UnityEvent<IPlayer>` | 0 | Inspector event with an `IPlayer` argument. |
| [`PlayerUnlock`](/game-api/types/global-p/playerunlock) | class | `HashedGeneralValue<PlayerUnlock>` | 5 | [Arguments and results](../console-and-utilities/arguments-and-results.md), [Skills and unlocks](../game-systems/skills-and-unlocks.md): Has `Prerequisites`, `Orbs`, and `UnlockingPermissions` (teleport layer, climb layer, and an optional `MaxStatDefinition` to raise). |
| [`PlayerUnlock.Create`](/game-api/types/global-p/playerunlock-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<PlayerUnlock>` | 0 |  |
| [`PlayerUnlock.OrbProperties`](/game-api/types/global-p/playerunlock-orbproperties) | class |  | 5 | One orb of a `PlayerUnlock`: the prefab, its weight and where it sits on the player's body. Read by `SpiritState` to place belt orbs. |
| [`PlayerUnlock.UnlockingPermissionsSetup`](/game-api/types/global-p/playerunlock-unlockingpermissionssetup) | class |  | 7 | What a `PlayerUnlock` changes while active: optional teleport and climb layer overrides and an optional bump to a max stat. |
| [`PlayerUnlockConverter`](/game-api/types/global-p/playerunlockconverter) | class | `HashedGeneralValueConverter<PlayerUnlock>` | 0 |  |
| [`PlayerUnlockManager`](/game-api/types/global-p/playerunlockmanager) | class | `PlayerComponent`, `ISavable<PlayerUnlockManagerSaveData>`, `ISavableSave<PlayerUnlockManagerSaveData>`, +1 more | 15 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): `PlayerComponent`, one per player (`player.UnlockManager`, also on `IPlayer`). |
| [`PlayerUnlockManagerSaveData`](/game-api/types/global-p/playerunlockmanagersavedata) | class | `NewSaveData<PlayerUnlockManager, PlayerUnlockManagerSaveData>` | 4 |  |
| [`PlayerUnlockStation`](/game-api/types/global-p/playerunlockstation) | class | `NetworkEntityBehaviour`, `ISavable<PlayerUnlockStationSaveData>`, `ISavableSave<PlayerUnlockStationSaveData>`, +1 more | 8 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): A station in the world. Its `UnlockStationType` is `Start`, `Normal`, `Unlock` or `Completion`. |
| [`PlayerUnlockStation.NetworkEffect`](/game-api/types/global-p/playerunlockstation-networkeffect) | enum |  | 3 | Effect a player unlock station plays on clients: unlock given, challenge complete, or unlock cancelled. |
| [`PlayerUnlockStation.UnlockStationType`](/game-api/types/global-p/playerunlockstation-unlockstationtype) | enum |  | 4 | What a `PlayerUnlockStation` does: `Normal`, `Start` (begins a challenge), `Completion` (ends one) or `Unlock`. |
| [`PlayerUnlockStationSaveData`](/game-api/types/global-p/playerunlockstationsavedata) | class | `NewSaveData<PlayerUnlockStation, PlayerUnlockStationSaveData>` | 3 |  |
| [`PlayerUnlockStationSaveDataOld1`](/game-api/types/global-p/playerunlockstationsavedataold1) | class | `OldSaveData` | 5 |  |
| [`PlayerUnlockStationSaveDataOld2`](/game-api/types/global-p/playerunlockstationsavedataold2) | class | `OldSaveData` | 6 |  |
| [`PlayerVisionComfort`](/game-api/types/global-p/playervisioncomfort) | class |  | 2 |  |
| [`PlayerVisionComfortSettings`](/game-api/types/global-p/playervisioncomfortsettings) | class | `GlobalSettings<PlayerVisionComfortSettings>` | 4 |  |
| [`PlayerVisionComfortSettings.Create`](/game-api/types/global-p/playervisioncomfortsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<PlayerVisionComfortSettings>` | 0 |  |
| [`PlayerWeight`](/game-api/types/global-p/playerweight) | class | `NetworkEntityBehaviour` | 5 | Tracks how much a player is carrying: everything in their body docks plus what's in their hands. Server side; `PlayerWeightStat` listens to `WeightChanged`. |
| [`PlayingOpenXRInputController`](/game-api/types/global-p/playingopenxrinputcontroller) | class | `OpenXRInputController` | 1 |  |
| [`PlaySound`](/game-api/types/global-p/playsound) | class | `StateMachineBehaviour` | 1 |  |
| [`PlayTutorialChecker`](/game-api/types/global-p/playtutorialchecker) | class | `LoggedInTool` | 0 |  |
| [`Pointer`](/game-api/types/global-p/pointer) | class | `ControllerExtension` | 11 | The teleport arc on a hand. Each frame it traces a curved arc from the hand, finds where it lands and whether the player may teleport there, and draws the arc and target. Client, local player. |
| [`PointerChunkReference`](/game-api/types/global-p/pointerchunkreference) | class | `MonoBehaviour` | 2 |  |
| [`PointerEventHandler`](/game-api/types/global-p/pointereventhandler) | delegate |  | 0 |  |
| [`PointerGameObjectExtensions`](/game-api/types/global-p/pointergameobjectextensions) | static class |  | 3 |  |
| [`PointTowardsEachotherPart`](/game-api/types/global-p/pointtowardseachotherpart) | class | `GeneratablePart` | 1 |  |
| [`PoolChangedHandler`](/game-api/types/global-p/poolchangedhandler) | delegate |  | 0 | Handler for `PooledObject.Released` and `PooledObject.Requested`, given the pooled object. |
| [`PooledAkGameObj`](/game-api/types/global-p/pooledakgameobj) | class | `AkGameObj` | 1 |  |
| [`PooledEffectParent`](/game-api/types/global-p/pooledeffectparent) | class | `MonoBehaviour` | 0 |  |
| [`PooledFireEffect`](/game-api/types/global-p/pooledfireeffect) | class | `PooledObject` | 8 |  |
| [`PooledLerpFollow`](/game-api/types/global-p/pooledlerpfollow) | class | `LerpFollow` | 1 |  |
| [`PooledMeshReplaceObjectDefinition`](/game-api/types/global-p/pooledmeshreplaceobjectdefinition) | class | `PooledObjectDefinition` | 3 |  |
| [`PooledMeshReplaceObjectDefinition.Create`](/game-api/types/global-p/pooledmeshreplaceobjectdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<PooledMeshReplaceObjectDefinition>` | 0 |  |
| [`PooledObject`](/game-api/types/global-p/pooledobject) | class | `MonoBehaviour` | 9 | Component on a prefab that can be reused through a `PooledObjectDefinition` pool instead of being destroyed. Used for short-lived local effects. |
| [`PooledObjectDefinition`](/game-api/types/global-p/pooledobjectdefinition) | class | `PooledObjectDefinitionBase` | 6 | A ScriptableObject asset describing an object pool: which `PooledObject` prefab to reuse and how many to keep. Call `Get` to take an instance from the pool. |
| [`PooledObjectDefinition.Create`](/game-api/types/global-p/pooledobjectdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<PooledObjectDefinition>` | 0 |  |
| [`PooledObjectDefinitionBase`](/game-api/types/global-p/pooledobjectdefinitionbase) | abstract class | `ScriptableObject` | 15 | Asset for a pooled object (usually a visual effect) with helpers to spawn it at transforms, hits or positions. Most helpers do nothing on a headless server. |
| [`PooledObjectDefinitionTrigger`](/game-api/types/global-p/pooledobjectdefinitiontrigger) | class | `MonoBehaviour` | 0 |  |
| [`PooledObjectPool`](/game-api/types/global-p/pooledobjectpool) | class | `BasicPooledObjectPool` | 3 |  |
| [`PooledObjectSoundHook`](/game-api/types/global-p/pooledobjectsoundhook) | class | `MonoBehaviour` | 0 |  |
| [`PooledParticleSystemMeshEmision`](/game-api/types/global-p/pooledparticlesystemmeshemision) | class | `DestroyByTime`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 | A timed pooled effect whose particle system emits from a target mesh renderer's shape. |
| [`PooledTempWwiseAudio`](/game-api/types/global-p/pooledtempwwiseaudio) | class | `PooledObject` | 1 | A pooled object for a temporary Wwise sound emitter. Deactivates its `AkGameObj` when released back to the pool. |
| [`PooledTextRenderer`](/game-api/types/global-p/pooledtextrenderer) | class | `PooledObject` | 1 |  |
| [`PopulationPath`](/game-api/types/global-p/populationpath) | class | `BasicDynamicPath`, `IPopulationFolder`, `IPointNormalEvaluator`, +3 more | 11 | Server: a path edge that spawns and keeps a population of creatures along it, using a `PopulationSetup` picked at generation. Saves its timer and count. |
| [`PopulationPathSaveData`](/game-api/types/global-p/populationpathsavedata) | class | `NewSaveData<PopulationPath, PopulationPathSaveData>` | 4 |  |
| [`PopupBoard`](/game-api/types/global-p/popupboard) | class | `MonoBehaviour`, `IPopupBoard` | 6 | A world space popup with a title and a message. Destroys its own GameObject when closed, unless set not to. |
| [`PopupManager`](/game-api/types/global-p/popupmanager) | class | `SingletonBehaviour<PopupManager>` | 6 |  |
| [`PopupManager.IPopupConfig`](/game-api/types/global-p/popupmanager-ipopupconfig) | interface |  | 5 | Handle to a popup queued with `PopupManager.Show`. Lets you cancel it or swap its board prefab before it appears. |
| [`PopupScriptableObject`](/game-api/types/global-p/popupscriptableobject) | class | `ScriptableObject` | 1 | Base for assets such as `TreeSize`, `DurabilitySettings` and `LootValue` that name a resource sub folder. |
| [`PortalBasedCullingCamera`](/game-api/types/global-p/portalbasedcullingcamera) | class | `MonoBehaviour` | 4 |  |
| [`PoseChangedHandler`](/game-api/types/global-p/posechangedhandler) | delegate |  | 0 |  |
| [`PosedObject`](/game-api/types/global-p/posedobject) | class | `MonoBehaviour` | 0 | Empty marker component. Player controllers expose a list of them as `ExtraObjects`. |
| [`PositionAndRotationTarget`](/game-api/types/global-p/positionandrotationtarget) | struct |  | 4 | A teleport destination: a position and a facing direction. Used by the climbing tower teleporter nodes. |
| [`PositionedNetworkPrefab`](/game-api/types/global-p/positionednetworkprefab) | class | `PositionedPrefab<NetworkEntity>` | 3 | A saved network prefab with its local position and rotation, for spawning dynamic content such as a skill's demo items or a shrine testing area. |
| [`PositionedPrefab<T>`](/game-api/types/global-p/positionedprefab-t) | abstract class |  | 2 |  |
| [`PositionedStaticPrefab`](/game-api/types/global-p/positionedstaticprefab) | class | `PositionedPrefab<GameObject>` | 2 | A saved plain prefab with a local position and rotation, spawned under a parent transform when a chunk loads it. |
| [`PositionEvent`](/game-api/types/global-p/positionevent) | class | `AltaEvent<Vector3, PositionHandler>` | 0 | A serializable `AltaEvent` that carries a `Vector3` position, for wiring in the inspector. |
| [`PositionFromOriginHandler`](/game-api/types/global-p/positionfromoriginhandler) | class |  | 2 | Wraps how a heat point or health object reports its position relative to an origin: through a `PositionFromOriginHelper` if one is set, else the transform's position. |
| [`PositionFromOriginHelper`](/game-api/types/global-p/positionfromoriginhelper) | abstract class | `MonoBehaviour` | 1 | Base component that works out a position from an origin point; subclasses decide how. |
| [`PositionHandler`](/game-api/types/global-p/positionhandler) | class | `UnityEvent<Vector3>` | 0 | Serializable `UnityEvent` with a `Vector3` argument, for position events wired in the inspector. |
| [`PositioningMode`](/game-api/types/global-p/positioningmode) | enum |  | 3 |  |
| [`PositionLerp`](/game-api/types/global-p/positionlerp) | class | `MonoBehaviour` | 1 |  |
| [`PositionRecord`](/game-api/types/global-p/positionrecord) | struct |  | 5 | A saved position and rotation, either in world space or relative to another transform depending on which constructor made it. |
| [`PositionRecorder`](/game-api/types/global-p/positionrecorder) | class |  | 6 | Ring buffer of recent position and rotation records for an `ImpactTool`, which `Impactor` reads to sweep hits. Pooled through `PickupTypeSettings.GetPositionRecorder`. |
| [`PositionRotationEvent`](/game-api/types/global-p/positionrotationevent) | class | `AltaEvent<Vector3, Quaternion, PositionRotationHandler>` | 0 | Serializable `AltaEvent` with a position and a rotation argument. Runs inspector-wired listeners and C# handlers. |
| [`PositionRotationHandler`](/game-api/types/global-p/positionrotationhandler) | class | `UnityEvent<Vector3, Quaternion>` | 0 |  |
| [`PositionSerializer`](/game-api/types/global-p/positionserializer) | class |  | 10 | Writes and reads an entity's position and rotation for the network, optionally relative to a moving context such as a cart or boat it stands on. `PositionSerializer<T>` adds a typed `FixParent`. |
| [`PositionSerializer<T>`](/game-api/types/global-p/positionserializer-t) | class | `PositionSerializer` | 2 | A `PositionSerializer` that can reparent a target of type `T` itself, through callbacks it was built with. `NetworkRigidbody` uses it to parent a body to the platform it rides on. |
| [`PositionSurfaceDefinitionSettings`](/game-api/types/global-p/positionsurfacedefinitionsettings) | class | `GlobalSettings<PositionSurfaceDefinitionSettings>` | 2 |  |
| [`PositionSwapper`](/game-api/types/global-p/positionswapper) | class | `MonoBehaviour` | 0 |  |
| [`Postbox`](/game-api/types/global-p/postbox) | class | `NetworkEntityBehaviour` | 4 | [Trading](../game-systems/trading.md): Shows each player whether their `PlayerPostboxStorage` has anything, and gives items out when its handle lever is turned (server). |
| [`PostboxManager`](/game-api/types/global-p/postboxmanager) | class | `PerPlayerManager<PostboxManager, PlayerPostboxStorage, PlayerPostboxStorageFileFormat>` | 5 | [Trading](../game-systems/trading.md) |
| [`PostboxManager.TradeVendorData`](/game-api/types/global-p/postboxmanager-tradevendordata) | class |  | 4 |  |
| [`PostboxSender`](/game-api/types/global-p/postboxsender) | class | `NetworkEntityBehaviour` | 4 | [Trading](../game-systems/trading.md): Sends items from its sending docks to another player's postbox, for a coin cost. |
| [`PostBoxSenderManager`](/game-api/types/global-p/postboxsendermanager) | class | `NetworkEntityBehaviour` | 7 | [Trading](../game-systems/trading.md): Tracks how many items one player may still send another (`GetAvailableQuantity(from, to)`). |
| [`PostRenderNotifier`](/game-api/types/global-p/postrendernotifier) | class | `MonoBehaviour` | 2 |  |
| [`PotatoSapling`](/game-api/types/global-p/potatosapling) | class | `GeneratedNetworkEntityBehaviour` | 1 |  |
| [`PotionVisuals`](/game-api/types/global-p/potionvisuals) | class | `MonoBehaviour` | 0 |  |
| [`PouchSpawner`](/game-api/types/global-p/pouchspawner) | class | `SpawnerBase` | 1 |  |
| [`PowerCrossSlash`](/game-api/types/global-p/powercrossslash) | class | `TargetBasedSkill` | 2 |  |
| [`PowerCrossSlash.Create`](/game-api/types/global-p/powercrossslash-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<PowerCrossSlash>` | 0 |  |
| [`PowerHit`](/game-api/types/global-p/powerhit) | class | `PickupBasedSkill` | 3 | [Items, interaction and damage](../items/overview.md) |
| [`PowerHit.Create`](/game-api/types/global-p/powerhit-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<PowerHit>` | 0 |  |
| [`PowerStinger`](/game-api/types/global-p/powerstinger) | class | `TargetBasedSkill` | 4 |  |
| [`PowerStrike`](/game-api/types/global-p/powerstrike) | class | `PickupBasedSkill`, `IStrikeSuccessionModifier` | 4 |  |
| [`PowerStrike.Create`](/game-api/types/global-p/powerstrike-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<PowerStrike>` | 0 |  |
| [`PowerStrikeTester`](/game-api/types/global-p/powerstriketester) | class | `NetworkEntityBehaviour`, `IProfessionSkillTester` | 3 |  |
| [`PracticeAreaShrinkFader`](/game-api/types/global-p/practiceareashrinkfader) | abstract class | `FadeInOutBase` | 2 |  |
| [`PracticeObjectFader`](/game-api/types/global-p/practiceobjectfader) | class | `FadeInOutNetworkEntity`, `INetworkEntityBehaviour` | 1 |  |
| [`PrefabHashAttribute`](/game-api/types/global-p/prefabhashattribute) | class | `PropertyAttribute` | 0 |  |
| [`PrefabLODSettings`](/game-api/types/global-p/prefablodsettings) | class | `ScriptableObject` | 2 |  |
| [`PrefabStageDefinition`](/game-api/types/global-p/prefabstagedefinition) | class | `HashedGeneralValue<PrefabStageDefinition>` | 2 | Asset listing the network prefab for each stage of a staged object (under Woodcutting/Stage Definitions), each with a local offset and rotation. Read by `StageBasedPrefab`. |
| [`PrefabStageDefinition.PrefabSetup`](/game-api/types/global-p/prefabstagedefinition-prefabsetup) | class |  | 3 | One stage of a `PrefabStageDefinition`: the prefab to use and its local offset. |
| [`PresetWayPointPath`](/game-api/types/global-p/presetwaypointpath) | class | `NetworkEntityBehaviour`, `IPositionRotationPath` | 1 |  |
| [`PreventStaticBatchingCollisionSplitting`](/game-api/types/global-p/preventstaticbatchingcollisionsplitting) | class | `MonoBehaviour`, `IDontSplit` | 0 |  |
| [`ProcessDiagnostics`](/game-api/types/global-p/processdiagnostics) | class |  | 4 |  |
| [`ProcessMetrics`](/game-api/types/global-p/processmetrics) | class |  | 4 |  |
| [`ProcessMetrics.MemoryCounters`](/game-api/types/global-p/processmetrics-memorycounters) | struct |  | 10 |  |
| [`ProcessRunner`](/game-api/types/global-p/processrunner) | class | `IDisposable` | 3 |  |
| [`ProfessionDiskAvailablePointsVisualizer`](/game-api/types/global-p/professiondiskavailablepointsvisualizer) | class | `ExperienceFillVisualizer` | 2 |  |
| [`ProfessionSkill`](/game-api/types/global-p/professionskill) | abstract class | `HashedGeneralValue<ProfessionSkill>` | 12 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): The ability itself. `virtual void Unlock(PlayerProgressionManager)` and `Lock(...)` run when a player gains or loses it. |
| [`ProfessionSkill<T>`](/game-api/types/global-p/professionskill-t) | abstract class | `ProfessionSkill` | 6 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): The ability itself. `virtual void Unlock(PlayerProgressionManager)` and `Lock(...)` run when a player gains or loses it. |
| [`ProfessionSkillDelegate`](/game-api/types/global-p/professionskilldelegate) | delegate |  | 0 |  |
| [`ProfessionSkillTree`](/game-api/types/global-p/professionskilltree) | class | `ScriptableObject` | 8 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): `ScriptableObject`, one per path, loaded from `Resources/ProgressionTrees/`. |
| [`ProfessionsProgressShrine`](/game-api/types/global-p/professionsprogressshrine) | class | `ProgressionShrine` | 2 |  |
| [`ProfileChunkLoading`](/game-api/types/global-p/profilechunkloading) | class | `MonoBehaviour` | 3 |  |
| [`ProfileChunkLoading.GameData`](/game-api/types/global-p/profilechunkloading-gamedata) | class |  | 15 | A snapshot of spawned object counts taken when it is created, used by the chunk loading profiler to log how much a load brought in. |
| [`ProfileChunkLoading.ProfileData`](/game-api/types/global-p/profilechunkloading-profiledata) | class |  | 7 |  |
| [`ProfileChunkLoading.ProfilingPosition`](/game-api/types/global-p/profilechunkloading-profilingposition) | class |  | 2 | A named world position that `ProfileChunkLoading` visits when profiling chunk load times. |
| [`ProfilingLoader`](/game-api/types/global-p/profilingloader) | class | `ScriptableObject` | 6 |  |
| [`ProfilingPositionCycler`](/game-api/types/global-p/profilingpositioncycler) | class | `GlobalSettings<ProfilingPositionCycler>` | 5 |  |
| [`ProfilingPositionCycler.Create`](/game-api/types/global-p/profilingpositioncycler-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<ProfilingPositionCycler>` | 0 |  |
| [`ProfilingPositionCycler.ProfilingPosition`](/game-api/types/global-p/profilingpositioncycler-profilingposition) | class |  | 4 |  |
| [`ProfilingTrigger`](/game-api/types/global-p/profilingtrigger) | class | `MonoBehaviour` | 1 |  |
| [`ProgressBar`](/game-api/types/global-p/progressbar) | abstract class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 5 | Base for a shader-driven gauge on one or more renderers. Setting `Progress` writes it to a material property, and the renderers hide when it is at or under a minimum. Client only. |
| [`ProgressCorrection`](/game-api/types/global-p/progresscorrection) | class | `MonoBehaviour` | 1 |  |
| [`ProgressionPath`](/game-api/types/global-p/progressionpath) | enum |  | 8 | [Progression](../game-systems/progression.md#progressionpath): A path only takes XP if its skill tree is enabled (`ProfessionSkillTree.GetProfessionTree(path).IsEnabled`). The trees are loaded from `Resources/ProgressionTrees/`. |
| [`ProgressionSettings`](/game-api/types/global-p/progressionsettings) | class | `GlobalSettings<ProgressionSettings>` | 20 | [Progression](../game-systems/progression.md#progressionsettings): Get it with `GlobalSettings<ProgressionSettings>.Instance` (`Alta.Global`). |
| [`ProgressionSettings.Create`](/game-api/types/global-p/progressionsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<ProgressionSettings>` | 0 |  |
| [`ProgressionSettings.InputSystemSound`](/game-api/types/global-p/progressionsettings-inputsystemsound) | class |  | 2 | Pair of sound sets for a skill input turning on and off, set in `ProgressionSettings` for power strike and raise hand. |
| [`ProgressionShrine`](/game-api/types/global-p/progressionshrine) | abstract class | `NetworkEntityBehaviour` | 11 | Base for the skill shrine a player opens to see and spend progression points. Server opens it for one player and syncs who is using it and the visuals to clients. |
| [`ProgressionSlot`](/game-api/types/global-p/progressionslot) | class |  | 15 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): A node in a tree: `uint Hash`, `uint Cost`, `List<uint> Dependencies` (slot hashes), `ProfessionSkill Skill`, `ProgressionPath Path`. |
| [`ProgressionSlotContainer`](/game-api/types/global-p/progressionslotcontainer) | abstract class | `NetworkEntityBehaviour`, `ISkillOrb` | 8 | Base for a skill orb at a skill shrine that a player holds to buy or sell a skill slot (`SkillOrbReplacer`, `BoughtSkillOrbReplacer`). Only the target player can grab it; the server runs `Operate`. |
| [`ProgressMaterialEffect`](/game-api/types/global-p/progressmaterialeffect) | class | `DestroyByTime` | 2 |  |
| [`Projectile`](/game-api/types/global-p/projectile) | class | `NetworkEntityBehaviour`, `IToolHitDependant`, `IImpactorResetEffect`, +2 more | 13 | [Combat, damage and death](../creatures/combat-and-damage.md): A spawned projectile. Its collisions are handled by the server (`OnCollision` returns early on clients). |
| [`ProjectileAltaEvent`](/game-api/types/global-p/projectilealtaevent) | class | `AltaEvent<Projectile, ProjectileUnityEvent>` | 0 |  |
| [`ProjectileComponent`](/game-api/types/global-p/projectilecomponent) | abstract class | `MonoBehaviour` | 1 |  |
| [`ProjectileEffect`](/game-api/types/global-p/projectileeffect) | class | `ProjectileComponent` | 0 |  |
| [`ProjectileUnityEvent`](/game-api/types/global-p/projectileunityevent) | class | `UnityEvent<Projectile>` | 0 |  |
| [`PropelledProjectile`](/game-api/types/global-p/propelledprojectile) | class | `MonoBehaviour` | 1 |  |
| [`PropertyBlockColorAccessor`](/game-api/types/global-p/propertyblockcoloraccessor) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| [`PullCord`](/game-api/types/global-p/pullcord) | class | `MonoBehaviour` | 0 |  |
| [`PullEvent`](/game-api/types/global-p/pullevent) | class | `AltaEvent<PullPickup, PullEventHandler>` | 0 | Serializable event raised by a `PullPickup` when it is pulled, with separate client and server instances on the pickup. |
| [`PullEventHandler`](/game-api/types/global-p/pulleventhandler) | class | `UnityEvent<PullPickup>` | 0 |  |
| [`PulleyBeltHelper`](/game-api/types/global-p/pulleybelthelper) | static class |  | 2 |  |
| [`PullingHandle`](/game-api/types/global-p/pullinghandle) | class | `NetworkEntityBehaviour` | 1 |  |
| [`PullPickup`](/game-api/types/global-p/pullpickup) | class | `NetworkEntityBehaviour` | 5 | [Items, interaction and damage](../items/overview.md) |
| [`PullPickupGroup`](/game-api/types/global-p/pullpickupgroup) | class | `NetworkEntityBehaviour` | 7 |  |
| [`Pump`](/game-api/types/global-p/pump) | class | `MonoBehaviour` | 0 |  |
| [`PumpingMechanism`](/game-api/types/global-p/pumpingmechanism) | class | `MonoBehaviour` | 4 | Bellows on a forge or recycler: turns the player pumping the handle into a heat-like value and gives forging experience. Runs on both sides; experience is only given on the server. |
| [`Puzzle`](/game-api/types/global-p/puzzle) | class | `PuzzleCondition` | 0 |  |
| [`PuzzleCondition`](/game-api/types/global-p/puzzlecondition) | class | `MonoBehaviour` | 2 | Base for one condition of an in-world puzzle. Subclasses set the completion state, which raises an event when it changes. |
| [`PuzzleConditionHandler`](/game-api/types/global-p/puzzleconditionhandler) | delegate |  | 0 |  |
| [`PuzzleConditionHandlerTemp`](/game-api/types/global-p/puzzleconditionhandlertemp) | delegate |  | 0 |  |
| [`PuzzleConditionsAND`](/game-api/types/global-p/puzzleconditionsand) | class | `PuzzleCondition` | 0 |  |
| [`PuzzleConditionsANDTemp`](/game-api/types/global-p/puzzleconditionsandtemp) | class | `PuzzleConditionTemp` | 0 |  |
| [`PuzzleConditionTemp`](/game-api/types/global-p/puzzleconditiontemp) | class | `MonoBehaviour` | 2 | Base for a simple puzzle condition that is either met or not; subclasses like `PuzzleConditionsANDTemp` set the state. |
| [`PuzzleDoor`](/game-api/types/global-p/puzzledoor) | class | `MonoBehaviour` | 0 |  |
| [`PuzzleLightBeam`](/game-api/types/global-p/puzzlelightbeam) | class | `MonoBehaviour`, `ILightEmitter` | 2 |  |
| [`PuzzleLightMirror`](/game-api/types/global-p/puzzlelightmirror) | class | `PuzzleLightBeam`, `ILightDetector`, `ILightEmitter` | 2 |  |
| [`PuzzleLightReflectExample2`](/game-api/types/global-p/puzzlelightreflectexample2) | class | `MonoBehaviour` | 2 |  |
| [`PuzzleLightTarget`](/game-api/types/global-p/puzzlelighttarget) | class | `PuzzleCondition`, `ILightDetector` | 2 |  |
