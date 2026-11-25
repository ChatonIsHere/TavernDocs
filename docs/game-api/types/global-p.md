---
title: "No namespace: P"
description: "Root.Township types with no namespace, P."
sidebar_position: 20
---

# No namespace: P

Types in `Root.Township` with no namespace (the global namespace), from P. 327 types, 39 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## P

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `PageAutoAddEffect` | class | `PooledObject` | 3 |  |
| `PageLootSettings` | class | `GlobalSettings<PageLootSettings>` | 1 |  |
| `PageLootSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<PageLootSettings>` | 0 |  |
| `PageProvider` | abstract class | `MonoBehaviour` | 8 |  |
| `PaintBrush` | class | `MonoBehaviour` | 2 |  |
| `ParticleDestination` | enum |  | 3 |  |
| `ParticleEffectDistanceController` | class | `MonoBehaviour` | 1 |  |
| `ParticleMeshReplacePooledObject` | class | `MeshReplacePooledObject` | 1 |  |
| `ParticleSystemGroup` | class | `MonoBehaviour` | 2 |  |
| `ParticleSystemToHand` | class | `MonoBehaviour` | 0 |  |
| `PathEndsPart` | class | `GeneratablePart` | 2 |  |
| `PathEndsPart.Arrangement` | enum |  | 4 |  |
| `PathExperience` | class |  | 18 | [Progression](../game-systems/progression.md#pathexperience): One per player per path. |
| `PathModelDisplay` | class | `SkillShrineVisualizer` | 3 |  |
| `PathWalker` | class | `MonoBehaviour` | 12 |  |
| `PathWalker.OnTargetReached` | delegate |  | 0 |  |
| `PauseEditor` | class | `ControllerInputButtonPressed` | 0 |  |
| `PerPlayerContent<TSaveFormat>` | class | `IPerPlayerContent<TSaveFormat>` | 10 |  |
| `PerPlayerManager<TThis, TContent, TSaveFormat>` | class | `NetworkEntityBehaviour`, `IAutoSave` | 8 |  |
| `Phase` | class | `MonoBehaviour`, `IPhase` | 3 |  |
| `PhysicalButton` | class | `Interactable`, `IPreventAtlasing` | 7 | [Buttons and levers](../items/buttons-and-levers.md#physicalbutton): Runs on every machine that simulates the press; not networked. |
| `PhysicalMaterial` | class | `HashedGeneralValue<PhysicalMaterial>` | 31 | [Items and materials](../items/items-and-materials.md#physicalmaterial): A `HashedGeneralValue<PhysicalMaterial>` asset. Data, same on both sides. |
| `PhysicalMaterial.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<PhysicalMaterial>` | 0 |  |
| `PhysicalMaterialChannel` | enum |  | 6 |  |
| `PhysicalMaterialPart` | class | `GeneratedNetworkEntityBehaviour`, `ISavable<PhysicalMaterialPartSaveData>`, `ISavableSave<PhysicalMaterialPartSaveData>`, +7 more | 6 | [Items and materials](../items/items-and-materials.md#physicalmaterialpart): A networked behaviour on items that have a material. The server picks and syncs the material; clients follow. |
| `PhysicalMaterialPart.ChangedMaterial` | delegate |  | 0 |  |
| `PhysicalMaterialPartSaveData` | internal class | `NewSaveData<PhysicalMaterialPart, PhysicalMaterialPartSaveData>` | 1 |  |
| `PhysicsAcceleration` | class | `MonoBehaviour` | 1 |  |
| `PhysicsLock` | class | `MonoBehaviour` | 0 |  |
| `Pickup` | class | `Interactable`, `IGetRigidbody`, `IPopulationRemovalMethod`, +5 more | 80 | [Pickup](../items/pickup.md): Runs on both sides; docking on release starts on the holder's client, breaking is the server's. |
| `Pickup.PickupHandler` | delegate |  | 0 |  |
| `PickupArea` | class | `MonoBehaviour` | 3 | [Items, interaction and damage](../items/overview.md): Tracks the pickups inside a trigger. |
| `PickupBasedSkill` | abstract class | `ProfessionSkill`, `IInputBasedSkill`, `IChargeableProfessionSkill` | 15 | [Items, interaction and damage](../items/overview.md) |
| `PickupBasedSkillModifier` | abstract class | `ProfessionSkill`, `IInputBasedSkill`, `IChargeableProfessionSkill` | 14 |  |
| `PickupButtons` | class | `MonoBehaviour` | 0 |  |
| `PickupClamp` | class | `MonoBehaviour` | 1 |  |
| `PickupContainer` | class | `Interactable` | 7 | [Player inventory](../items/player-inventory.md#pouches-and-pickupcontainer), [Other systems](../game-systems/other-systems.md) |
| `PickupDecay` | class | `BasicDecay` | 2 | [Items, interaction and damage](../items/overview.md): Server-side decay timer for pickups, paused while held or docked. |
| `PickupDecaySettings` | class | `DecaySettings` | 3 |  |
| `PickupDecaySettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Decay.ScriptableObject<PickupDecaySettings>` | 0 |  |
| `PickupDockedEvent` | class | `AltaEvent<Interactor, Pickup, PickupDock, PickupDockedUnityEvent>` | 0 |  |
| `PickupDockedFilter` | class | `MonoBehaviour` | 0 |  |
| `PickupDockedUnityEvent` | class | `UnityEvent<Interactor, Pickup, PickupDock>` | 0 |  |
| `PickupDockGroup` | class | `ComponentGroup<PickupDock>` | 1 |  |
| `PickupDockingChecker` | class |  | 7 |  |
| `PickupDockingSoundPlayer` | class | `MonoBehaviour` | 0 |  |
| `PickupDockPedestalSpawn` | class | `PickupDock` | 1 | [Items, interaction and damage](../items/overview.md) |
| `PickupDockScaleCompare` | class | `MonoBehaviour` | 0 |  |
| `PickupEvent` | class | `AltaEvent<Pickup, UnityPickupEvent>` | 0 |  |
| `PickupExtension` | class | `Interactable` | 2 |  |
| `PickupFromDockRestriction` | enum |  | 3 |  |
| `PickupGrabInputMethod` | class | `ISkillInputMethod` | 1 |  |
| `PickupGrabInputStructure` | class | `SkillInputStructure` | 1 |  |
| `PickupGrabInputStructure.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<PickupGrabInputStructure>` | 0 |  |
| `PickupHolder` | class | `NetworkEntityBehaviour` | 7 | [Items, interaction and damage](../items/overview.md): Holds one pickup in place (server decides, synced). |
| `PickupHolderFilter` | delegate |  | 0 |  |
| `PickupInteractionScaler` | class |  | 2 |  |
| `PickupJoints` | class |  | 6 |  |
| `PickUpJointType` | enum |  | 6 |  |
| `PickupOwnershipLogger` | static class |  | 2 |  |
| `PickupSaveData` | class | `NewSaveData<Pickup, PickupSaveData>` | 2 |  |
| `PickupSaveDataOld1` | class | `OldSaveData` | 2 |  |
| `PickupTypeSetting` | abstract class | `OverridableSettings` | 1 |  |
| `PickupTypeSettings` | class | `GlobalSettings<PickupTypeSettings>` | 43 |  |
| `PickupTypeSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<PickupTypeSettings>` | 0 |  |
| `PickupWeightScale` | class | `MonoBehaviour` | 0 |  |
| `PipAvailablePointManager` | class | `AvailablePointVisualizerManager` | 4 |  |
| `PipelineDistribution` | class | `PipelineElement` | 4 |  |
| `PipelineElement` | abstract class |  | 4 |  |
| `PipelineFlattenDistribution` | class | `PipelineElement` | 4 |  |
| `PipelineResultAttribute` | class | `Attribute` | 2 |  |
| `PlaceItemNoDockFirePuzzleLogic` | class | `MonoBehaviour`, `ISavable<PlaceItemNoDockFirePuzzleLogicSaveData>`, `ISavableSave<PlaceItemNoDockFirePuzzleLogicSaveData>`, +1 more | 1 |  |
| `PlaceItemNoDockFirePuzzleLogicSaveData` | class | `NewSaveData<PlaceItemNoDockFirePuzzleLogic, PlaceItemNoDockFirePuzzleLogicSaveData>` | 3 |  |
| `PlaceItemNoDockFirePuzzleLogicSaveData.Option` | class |  | 1 |  |
| `PlaceItemNoDockFirePuzzleLogicSaveData1` | class | `OldSaveData` | 1 |  |
| `PlaceItemNoDockPuzzleLogic` | class | `MonoBehaviour`, `ISavable<PlaceItemNoDockPuzzleLogicSaveData>`, `ISavableSave<PlaceItemNoDockPuzzleLogicSaveData>`, +1 more | 0 |  |
| `PlaceItemNoDockPuzzleLogicSaveData` | class | `NewSaveData<PlaceItemNoDockPuzzleLogic, PlaceItemNoDockPuzzleLogicSaveData>` | 3 |  |
| `PlaceItemNoDockPuzzleLogicSaveData.Option` | class |  | 2 |  |
| `PlaceItemNoDockPuzzleLogicSaveData1` | class | `OldSaveData` | 2 |  |
| `PlaceItemPuzzleLogic` | class | `MonoBehaviour`, `ISavable<PlaceItemPuzzleLogicSaveData>`, `ISavableSave<PlaceItemPuzzleLogicSaveData>`, +1 more | 1 |  |
| `PlaceItemPuzzleLogicSaveData` | class | `NewSaveData<PlaceItemPuzzleLogic, PlaceItemPuzzleLogicSaveData>` | 3 |  |
| `PlaceItemPuzzleLogicSaveData.Option` | class |  | 2 |  |
| `PlaceItemPuzzleLogicSaveData1` | class | `OldSaveData` | 2 |  |
| `PlacementObject` | class | `MonoBehaviour` | 1 |  |
| `PlatformActionMapping` | class |  | 10 |  |
| `PlatformComponents` | class | `BuildRendererBakeable` | 2 |  |
| `PlatformDefines` | static class |  | 2 |  |
| `PlatformDistanceLODModifier` | class | `BuildRendererBakeable` | 1 |  |
| `PlatformDriver` | class | `SingletonBehaviour<PlatformDriver>` | 5 |  |
| `PlatformHandler` | delegate |  | 0 |  |
| `PlatformHeightOffset` | struct |  | 3 |  |
| `PlatformHeightOffsetSettings` | class | `ScriptableObject` | 1 |  |
| `PlatformHierarchyShuffler` | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 0 |  |
| `PlatformLaunchType` | enum |  | 5 |  |
| `PlatformLightDarknessReader` | class | `DarknessReaderMethod` | 1 |  |
| `PlatformLoader` | abstract class | `MonoBehaviour` | 1 |  |
| `PlatformLODController` | class | `BuildRendererBakeable` | 1 |  |
| `PlatformLODModifier` | class | `BuildRendererBakeable` | 1 |  |
| `PlatformMaterial` | class | `ScriptableObject` | 0 |  |
| `PlatformMeshController` | class | `BuildRendererBakeable` | 2 |  |
| `PlatformModeHandler` | delegate |  | 0 |  |
| `PlatformObjects` | class | `BuildRendererBakeable` | 3 |  |
| `PlatformObjects.PlatformObjectSetup` | class |  | 3 |  |
| `PlatformTexture` | class | `ScriptableObject` | 0 |  |
| `Player` | class | `NetworkEntity`, `IPlatformPlayer`, `IPlayer`, +1 more | 66 | [Player](../networking/player.md), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `NetworkEntity`, and it implements `IPlayer` (`Alta.Networking.Scripts.Player`). |
| `PlayerAdjustableHeightFixerSettings` | class | `ScriptableObject` | 5 |  |
| `PlayerChunkManager` | class |  | 5 |  |
| `PlayerCommunicationManager` | class | `NetworkEntityBehaviour` | 4 |  |
| `PlayerCommunityAnalytics` | static class |  | 9 |  |
| `PlayerComponent` | class | `NetworkEntityBehaviour` | 2 |  |
| `PlayerController` | abstract class | `NetworkEntityBehaviour`, `IHasHead`, `IBuildRendererBakeable`, +1 more | 57 | [PlayerController and the body](../networking/player-controller.md): A player's body is its own networked entity, spawned by the server after the `Player` and destroyed and respawned around death. |
| `PlayerControllerHandler` | delegate |  | 0 |  |
| `PlayerControllerLocalityController` | class | `MonoBehaviour` | 4 |  |
| `PlayerControllerMultiLockModel` | class | `NetworkEntityBehaviour`, `IPlayerControllerMultiLockModel` | 4 |  |
| `PlayerConverter` | class | `TypeConverter` | 3 |  |
| `PlayerCrippleController` | class | `MonoBehaviour` | 0 |  |
| `PlayerData` | struct |  | 5 |  |
| `PlayerDataInfo` | class |  | 3 |  |
| `PlayerDebugMessager` | class | `MonoBehaviour` | 1 |  |
| `PlayerDetect` | class | `NetworkEntityBehaviour`, `ISavable<PlayerDetectSaveData>`, `ISavableSave<PlayerDetectSaveData>`, +1 more | 3 |  |
| `PlayerDetectSaveData` | internal class | `NewSaveData<PlayerDetect, PlayerDetectSaveData>` | 3 |  |
| `PlayerDetectSaveDataOld1` | internal class | `OldSaveData` | 2 |  |
| `PlayerDockDropper` | class | `MonoBehaviour` | 0 | [Player inventory](../items/player-inventory.md): Empties a dock when the player's scale changes. |
| `PlayerDrinkingMouth` | class | `NetworkEntityBehaviour` | 1 |  |
| `PlayerEffectManager` | class | `MonoBehaviour` | 1 |  |
| `PlayerEffectManager.EffectPosition` | class |  | 8 |  |
| `PlayerEffectManager.OverrideSettings` | enum |  | 3 |  |
| `PlayerEffectParticle` | class | `EffectReleaseOnFade` | 2 |  |
| `PlayerEvent` | class | `AltaEvent<IPlayer, PlayerUnityEvent>` | 0 |  |
| `PlayerEventsManager` | class | `PlayerComponent` | 13 |  |
| `PlayerEventsManager.OnPathHitGenerated` | delegate |  | 0 |  |
| `PlayerGoldBankAccount` | class | `PerPlayerContent<PlayerGoldBankAccountData>` | 0 |  |
| `PlayerGoldBankAccountData` | class | `IAltaFileFormat` | 5 |  |
| `PlayerHandler` | delegate |  | 0 |  |
| `PlayerHealth` | class | `HealthObject` | 10 | [Health and damage](../items/health-and-damage.md#playerhealth): `PlayerHealth : HealthObject`, no namespace. Get it with `playerCharacter.Health` (typed `PlayerHealth`) or `playerController.Health as PlayerHealth`. |
| `PlayerHealthVisualEffectsSettings` | class | `ScriptableObject` | 16 |  |
| `PlayerHeightFixer` | class | `MonoBehaviour` | 1 |  |
| `PlayerInput` | class | `MonoBehaviour` | 14 |  |
| `PlayerInteractionManager` | class | `NetworkEntityBehaviour`, `ISavable<PlayerInteractionManagerData>`, `ISavableSave<PlayerInteractionManagerData>`, +1 more | 13 | [Items, interaction and damage](../items/overview.md) |
| `PlayerInteractionManager.Tracker` | class |  | 4 |  |
| `PlayerInteractionManagerData` | class | `NewSaveData<PlayerInteractionManager, PlayerInteractionManagerData>` | 2 |  |
| `PlayerInteractionManagerData.PlayerData` | class |  | 4 |  |
| `PlayerInteractionManagerData.TrackerData` | class |  | 2 |  |
| `PlayerInteractionRestrictor` | class | `NetworkEntityBehaviour`, `ISavable<PlayerInteractionRestrictorData>`, `ISavableSave<PlayerInteractionRestrictorData>`, +1 more | 9 | [Items, interaction and damage](../items/overview.md) |
| `PlayerInteractionRestrictorData` | class | `NewSaveData<PlayerInteractionRestrictor, PlayerInteractionRestrictorData>` | 2 |  |
| `PlayerList` | class | `IEnumerable<IPlayer>`, `IEnumerable` | 4 | [Arguments and results](../console-and-utilities/arguments-and-results.md): Names or ids separated by commas, or `*` for everyone |
| `PlayerListConverter` | class | `TypeConverter` | 2 |  |
| `PlayerLocomotionController` | class | `LocomotionController`, `INetworkSerialized` | 8 | [Locomotion](../networking/locomotion.md#playerlocomotioncontroller): The VR body's. |
| `PlayerMessageDisplay` | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 3 |  |
| `PlayerModeOverride` | class | `ScriptableObject` | 1 |  |
| `PlayerModeOverride.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Debug.ScriptableObject<PlayerModeOverride>` | 0 |  |
| `PlayerModeUtilities` | static class |  | 3 | [Joining a server](../networking/joining.md), [Startup and app state](../console-and-utilities/startup-and-app-state.md): `PlayerMode` (what this client will join as), `OverrideMode` (set it before joining to join as something else; Rover does), `IsNormalPlayerMode(mode)` (false for Fly and AutoCam, which aren't saved). |
| `PlayerMoveChunkData` | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| `PlayerOrbLight` | class |  | 1 |  |
| `PlayerPositionHelper` | class | `PositionFromOriginHelper` | 1 |  |
| `PlayerPositionRestrictor` | class | `MonoBehaviour` | 1 |  |
| `PlayerPostboxStorage` | class | `PerPlayerContent<PlayerPostboxStorageFileFormat>` | 8 | [Trading](../game-systems/trading.md): The per-player file, above. |
| `PlayerPostboxStorage.InitialContent` | class |  | 2 |  |
| `PlayerPostboxStorageEventHandler` | delegate |  | 0 |  |
| `PlayerPostboxStorageFileFormat` | class | `IAltaFileFormat` | 4 |  |
| `PlayerProgressFlag` | abstract class | `HashedGeneralValue<PlayerProgressFlag>` | 2 |  |
| `PlayerProgressFlagConverter<T>` | class | `TypeConverter` | 2 |  |
| `PlayerProgression` | class |  | 6 |  |
| `PlayerProgression.EventTypeEnum` | enum |  | 3 |  |
| `PlayerProgressionManager` | class | `PlayerComponent` | 29 | [Progression](../game-systems/progression.md#playerprogressionmanager): One per `Player` (not per body), so it survives respawns. Get it with `player.ProgressionManager` (it's on `IPlayer` too). |
| `PlayerProgressionManager.PracticeTuple` | class |  | 5 |  |
| `PlayerRoleProvider` | class | `MonoBehaviour` | 1 |  |
| `PlayerScreenFader` | abstract class | `MonoBehaviour` | 10 |  |
| `PlayerSmoothManager` | class | `NetworkEntityBehaviour` | 5 |  |
| `PlayerSpecialEffectsController` | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable`, +1 more | 26 |  |
| `PlayerSystemHandler` | delegate |  | 0 |  |
| `PlayerTextMessage` | struct |  | 4 |  |
| `PlayerTimeUpdate` | delegate |  | 0 |  |
| `PlayerToolBasedSkillHelper` | class | `PlayerComponent` | 9 |  |
| `PlayerTracker` | class |  | 8 |  |
| `PlayerUnityEvent` | class | `UnityEvent<IPlayer>` | 0 |  |
| `PlayerUnlock` | class | `HashedGeneralValue<PlayerUnlock>` | 5 | [Arguments and results](../console-and-utilities/arguments-and-results.md), [Skills and unlocks](../game-systems/skills-and-unlocks.md): Has `Prerequisites`, `Orbs`, and `UnlockingPermissions` (teleport layer, climb layer, and an optional `MaxStatDefinition` to raise). |
| `PlayerUnlock.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<PlayerUnlock>` | 0 |  |
| `PlayerUnlock.OrbProperties` | class |  | 5 |  |
| `PlayerUnlock.UnlockingPermissionsSetup` | class |  | 7 |  |
| `PlayerUnlockConverter` | class | `HashedGeneralValueConverter<PlayerUnlock>` | 0 |  |
| `PlayerUnlockManager` | class | `PlayerComponent`, `ISavable<PlayerUnlockManagerSaveData>`, `ISavableSave<PlayerUnlockManagerSaveData>`, +1 more | 15 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): `PlayerComponent`, one per player (`player.UnlockManager`, also on `IPlayer`). |
| `PlayerUnlockManagerSaveData` | class | `NewSaveData<PlayerUnlockManager, PlayerUnlockManagerSaveData>` | 4 |  |
| `PlayerUnlockStation` | class | `NetworkEntityBehaviour`, `ISavable<PlayerUnlockStationSaveData>`, `ISavableSave<PlayerUnlockStationSaveData>`, +1 more | 8 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): A station in the world. Its `UnlockStationType` is `Start`, `Normal`, `Unlock` or `Completion`. |
| `PlayerUnlockStation.NetworkEffect` | enum |  | 3 |  |
| `PlayerUnlockStation.UnlockStationType` | enum |  | 4 |  |
| `PlayerUnlockStationSaveData` | class | `NewSaveData<PlayerUnlockStation, PlayerUnlockStationSaveData>` | 3 |  |
| `PlayerUnlockStationSaveDataOld1` | class | `OldSaveData` | 5 |  |
| `PlayerUnlockStationSaveDataOld2` | class | `OldSaveData` | 6 |  |
| `PlayerVisionComfort` | class |  | 2 |  |
| `PlayerVisionComfortSettings` | class | `GlobalSettings<PlayerVisionComfortSettings>` | 4 |  |
| `PlayerVisionComfortSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<PlayerVisionComfortSettings>` | 0 |  |
| `PlayerWeight` | class | `NetworkEntityBehaviour` | 5 |  |
| `PlayingOpenXRInputController` | class | `OpenXRInputController` | 1 |  |
| `PlaySound` | class | `StateMachineBehaviour` | 1 |  |
| `PlayTutorialChecker` | class | `LoggedInTool` | 0 |  |
| `Pointer` | class | `ControllerExtension` | 11 |  |
| `PointerChunkReference` | class | `MonoBehaviour` | 2 |  |
| `PointerEventHandler` | delegate |  | 0 |  |
| `PointerGameObjectExtensions` | static class |  | 3 |  |
| `PointTowardsEachotherPart` | class | `GeneratablePart` | 1 |  |
| `PoolChangedHandler` | delegate |  | 0 |  |
| `PooledAkGameObj` | class | `AkGameObj` | 1 |  |
| `PooledEffectParent` | class | `MonoBehaviour` | 0 |  |
| `PooledFireEffect` | class | `PooledObject` | 8 |  |
| `PooledLerpFollow` | class | `LerpFollow` | 1 |  |
| `PooledMeshReplaceObjectDefinition` | class | `PooledObjectDefinition` | 3 |  |
| `PooledMeshReplaceObjectDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<PooledMeshReplaceObjectDefinition>` | 0 |  |
| `PooledObject` | class | `MonoBehaviour` | 9 |  |
| `PooledObjectDefinition` | class | `PooledObjectDefinitionBase` | 6 |  |
| `PooledObjectDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<PooledObjectDefinition>` | 0 |  |
| `PooledObjectDefinitionBase` | abstract class | `ScriptableObject` | 15 |  |
| `PooledObjectDefinitionTrigger` | class | `MonoBehaviour` | 0 |  |
| `PooledObjectPool` | class | `BasicPooledObjectPool` | 3 |  |
| `PooledObjectSoundHook` | class | `MonoBehaviour` | 0 |  |
| `PooledParticleSystemMeshEmision` | class | `DestroyByTime`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| `PooledTempWwiseAudio` | class | `PooledObject` | 1 |  |
| `PooledTextRenderer` | class | `PooledObject` | 1 |  |
| `PopulationPath` | class | `BasicDynamicPath`, `IPopulationFolder`, `IPointNormalEvaluator`, +3 more | 11 |  |
| `PopulationPathSaveData` | class | `NewSaveData<PopulationPath, PopulationPathSaveData>` | 4 |  |
| `PopupBoard` | class | `MonoBehaviour`, `IPopupBoard` | 6 |  |
| `PopupManager` | class | `SingletonBehaviour<PopupManager>` | 6 |  |
| `PopupManager.IPopupConfig` | interface |  | 5 |  |
| `PopupScriptableObject` | class | `ScriptableObject` | 1 |  |
| `PortalBasedCullingCamera` | class | `MonoBehaviour` | 4 |  |
| `PoseChangedHandler` | delegate |  | 0 |  |
| `PosedObject` | class | `MonoBehaviour` | 0 |  |
| `PositionAndRotationTarget` | struct |  | 4 |  |
| `PositionedNetworkPrefab` | class | `PositionedPrefab<NetworkEntity>` | 3 |  |
| `PositionedPrefab<T>` | abstract class |  | 2 |  |
| `PositionedStaticPrefab` | class | `PositionedPrefab<GameObject>` | 2 |  |
| `PositionEvent` | class | `AltaEvent<Vector3, PositionHandler>` | 0 |  |
| `PositionFromOriginHandler` | class |  | 2 |  |
| `PositionFromOriginHelper` | abstract class | `MonoBehaviour` | 1 |  |
| `PositionHandler` | class | `UnityEvent<Vector3>` | 0 |  |
| `PositioningMode` | enum |  | 3 |  |
| `PositionLerp` | class | `MonoBehaviour` | 1 |  |
| `PositionRecord` | struct |  | 5 |  |
| `PositionRecorder` | class |  | 6 |  |
| `PositionRotationEvent` | class | `AltaEvent<Vector3, Quaternion, PositionRotationHandler>` | 0 |  |
| `PositionRotationHandler` | class | `UnityEvent<Vector3, Quaternion>` | 0 |  |
| `PositionSerializer` | class |  | 10 |  |
| `PositionSerializer<T>` | class | `PositionSerializer` | 2 |  |
| `PositionSurfaceDefinitionSettings` | class | `GlobalSettings<PositionSurfaceDefinitionSettings>` | 2 |  |
| `PositionSwapper` | class | `MonoBehaviour` | 0 |  |
| `Postbox` | class | `NetworkEntityBehaviour` | 4 | [Trading](../game-systems/trading.md): Shows each player whether their `PlayerPostboxStorage` has anything, and gives items out when its handle lever is turned (server). |
| `PostboxManager` | class | `PerPlayerManager<PostboxManager, PlayerPostboxStorage, PlayerPostboxStorageFileFormat>` | 5 | [Trading](../game-systems/trading.md) |
| `PostboxManager.TradeVendorData` | class |  | 4 |  |
| `PostboxSender` | class | `NetworkEntityBehaviour` | 4 | [Trading](../game-systems/trading.md): Sends items from its sending docks to another player's postbox, for a coin cost. |
| `PostBoxSenderManager` | class | `NetworkEntityBehaviour` | 7 | [Trading](../game-systems/trading.md): Tracks how many items one player may still send another (`GetAvailableQuantity(from, to)`). |
| `PostRenderNotifier` | class | `MonoBehaviour` | 2 |  |
| `PotatoSapling` | class | `GeneratedNetworkEntityBehaviour` | 1 |  |
| `PotionVisuals` | class | `MonoBehaviour` | 0 |  |
| `PouchSpawner` | class | `SpawnerBase` | 1 |  |
| `PowerCrossSlash` | class | `TargetBasedSkill` | 2 |  |
| `PowerCrossSlash.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<PowerCrossSlash>` | 0 |  |
| `PowerHit` | class | `PickupBasedSkill` | 3 | [Items, interaction and damage](../items/overview.md) |
| `PowerHit.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<PowerHit>` | 0 |  |
| `PowerStinger` | class | `TargetBasedSkill` | 4 |  |
| `PowerStrike` | class | `PickupBasedSkill`, `IStrikeSuccessionModifier` | 4 |  |
| `PowerStrike.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<PowerStrike>` | 0 |  |
| `PowerStrikeTester` | class | `NetworkEntityBehaviour`, `IProfessionSkillTester` | 3 |  |
| `PracticeAreaShrinkFader` | abstract class | `FadeInOutBase` | 2 |  |
| `PracticeObjectFader` | class | `FadeInOutNetworkEntity`, `INetworkEntityBehaviour` | 1 |  |
| `PrefabHashAttribute` | class | `PropertyAttribute` | 0 |  |
| `PrefabLODSettings` | class | `ScriptableObject` | 2 |  |
| `PrefabStageDefinition` | class | `HashedGeneralValue<PrefabStageDefinition>` | 2 |  |
| `PrefabStageDefinition.PrefabSetup` | class |  | 3 |  |
| `PresetWayPointPath` | class | `NetworkEntityBehaviour`, `IPositionRotationPath` | 1 |  |
| `PreventStaticBatchingCollisionSplitting` | class | `MonoBehaviour`, `IDontSplit` | 0 |  |
| `ProcessDiagnostics` | class |  | 4 |  |
| `ProcessMetrics` | class |  | 4 |  |
| `ProcessMetrics.MemoryCounters` | struct |  | 10 |  |
| `ProcessRunner` | class | `IDisposable` | 3 |  |
| `ProfessionDiskAvailablePointsVisualizer` | class | `ExperienceFillVisualizer` | 2 |  |
| `ProfessionSkill` | abstract class | `HashedGeneralValue<ProfessionSkill>` | 12 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): The ability itself. `virtual void Unlock(PlayerProgressionManager)` and `Lock(...)` run when a player gains or loses it. |
| `ProfessionSkill<T>` | abstract class | `ProfessionSkill` | 6 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): The ability itself. `virtual void Unlock(PlayerProgressionManager)` and `Lock(...)` run when a player gains or loses it. |
| `ProfessionSkillDelegate` | delegate |  | 0 |  |
| `ProfessionSkillTree` | class | `ScriptableObject` | 8 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): `ScriptableObject`, one per path, loaded from `Resources/ProgressionTrees/`. |
| `ProfessionsProgressShrine` | class | `ProgressionShrine` | 2 |  |
| `ProfileChunkLoading` | class | `MonoBehaviour` | 3 |  |
| `ProfileChunkLoading.GameData` | class |  | 15 |  |
| `ProfileChunkLoading.ProfileData` | class |  | 7 |  |
| `ProfileChunkLoading.ProfilingPosition` | class |  | 2 |  |
| `ProfilingLoader` | class | `ScriptableObject` | 6 |  |
| `ProfilingPositionCycler` | class | `GlobalSettings<ProfilingPositionCycler>` | 5 |  |
| `ProfilingPositionCycler.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<ProfilingPositionCycler>` | 0 |  |
| `ProfilingPositionCycler.ProfilingPosition` | class |  | 4 |  |
| `ProfilingTrigger` | class | `MonoBehaviour` | 1 |  |
| `ProgressBar` | abstract class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 5 |  |
| `ProgressCorrection` | class | `MonoBehaviour` | 1 |  |
| `ProgressionPath` | enum |  | 8 | [Progression](../game-systems/progression.md#progressionpath): A path only takes XP if its skill tree is enabled (`ProfessionSkillTree.GetProfessionTree(path).IsEnabled`). The trees are loaded from `Resources/ProgressionTrees/`. |
| `ProgressionSettings` | class | `GlobalSettings<ProgressionSettings>` | 20 | [Progression](../game-systems/progression.md#progressionsettings): Get it with `GlobalSettings<ProgressionSettings>.Instance` (`Alta.Global`). |
| `ProgressionSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<ProgressionSettings>` | 0 |  |
| `ProgressionSettings.InputSystemSound` | class |  | 2 |  |
| `ProgressionShrine` | abstract class | `NetworkEntityBehaviour` | 11 |  |
| `ProgressionSlot` | class |  | 15 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): A node in a tree: `uint Hash`, `uint Cost`, `List<uint> Dependencies` (slot hashes), `ProfessionSkill Skill`, `ProgressionPath Path`. |
| `ProgressionSlotContainer` | abstract class | `NetworkEntityBehaviour`, `ISkillOrb` | 8 |  |
| `ProgressMaterialEffect` | class | `DestroyByTime` | 2 |  |
| `Projectile` | class | `NetworkEntityBehaviour`, `IToolHitDependant`, `IImpactorResetEffect`, +2 more | 13 | [Combat, damage and death](../creatures/combat-and-damage.md): A spawned projectile. Its collisions are handled by the server (`OnCollision` returns early on clients). |
| `ProjectileAltaEvent` | class | `AltaEvent<Projectile, ProjectileUnityEvent>` | 0 |  |
| `ProjectileComponent` | abstract class | `MonoBehaviour` | 1 |  |
| `ProjectileEffect` | class | `ProjectileComponent` | 0 |  |
| `ProjectileUnityEvent` | class | `UnityEvent<Projectile>` | 0 |  |
| `PropelledProjectile` | class | `MonoBehaviour` | 1 |  |
| `PropertyBlockColorAccessor` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| `PullCord` | class | `MonoBehaviour` | 0 |  |
| `PullEvent` | class | `AltaEvent<PullPickup, PullEventHandler>` | 0 |  |
| `PullEventHandler` | class | `UnityEvent<PullPickup>` | 0 |  |
| `PulleyBeltHelper` | static class |  | 2 |  |
| `PullingHandle` | class | `NetworkEntityBehaviour` | 1 |  |
| `PullPickup` | class | `NetworkEntityBehaviour` | 5 | [Items, interaction and damage](../items/overview.md) |
| `PullPickupGroup` | class | `NetworkEntityBehaviour` | 7 |  |
| `Pump` | class | `MonoBehaviour` | 0 |  |
| `PumpingMechanism` | class | `MonoBehaviour` | 4 |  |
| `Puzzle` | class | `PuzzleCondition` | 0 |  |
| `PuzzleCondition` | class | `MonoBehaviour` | 2 |  |
| `PuzzleConditionHandler` | delegate |  | 0 |  |
| `PuzzleConditionHandlerTemp` | delegate |  | 0 |  |
| `PuzzleConditionsAND` | class | `PuzzleCondition` | 0 |  |
| `PuzzleConditionsANDTemp` | class | `PuzzleConditionTemp` | 0 |  |
| `PuzzleConditionTemp` | class | `MonoBehaviour` | 2 |  |
| `PuzzleDoor` | class | `MonoBehaviour` | 0 |  |
| `PuzzleLightBeam` | class | `MonoBehaviour`, `ILightEmitter` | 2 |  |
| `PuzzleLightMirror` | class | `PuzzleLightBeam`, `ILightDetector`, `ILightEmitter` | 2 |  |
| `PuzzleLightReflectExample2` | class | `MonoBehaviour` | 2 |  |
| `PuzzleLightTarget` | class | `PuzzleCondition`, `ILightDetector` | 2 |  |
