---
title: "No namespace: C to D"
description: "Root.Township types with no namespace, C to D."
sidebar_position: 16
---

# No namespace: C to D

Types in `Root.Township` with no namespace (the global namespace), from C to D. 275 types, 15 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## C

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CachedSyncChannel` | internal class | `IDisposable` | 3 |  |
| `CameraClaimer` | class | `MonoBehaviour` | 0 |  |
| `CameraStabelizer` | class | `MonoBehaviour` | 1 |  |
| `CapPickup` | class | `Pickup` | 2 | [Items, interaction and damage](../items/overview.md) |
| `CaptainsWheel` | class | `MonoBehaviour` | 2 |  |
| `CastToSurfaceEffect` | class | `DestroyByTime`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 |  |
| `CaveSeedArguments` | struct |  | 7 |  |
| `CaveTeleporterReplacer` | class | `GenericReplacer` | 2 |  |
| `CaveTeleporterReplacerAnimator` | class |  | 1 |  |
| `CenterOfMassSetter` | class | `MonoBehaviour` | 4 |  |
| `CentralGoldCoinBank` | class | `PerPlayerManager<CentralGoldCoinBank, PlayerGoldBankAccount, PlayerGoldBankAccountData>` | 0 | [Trading](../game-systems/trading.md) |
| `CharacterControllerEvent` | class | `AltaEvent<PlayerController, CharacterControllerUnityEvent>` | 0 |  |
| `CharacterControllerUnityEvent` | class | `UnityEvent<PlayerController>` | 0 |  |
| `CharacterDummyController` | class | `PlayerController` | 2 |  |
| `CharacterDummyPointer` | class | `MonoBehaviour` | 1 |  |
| `CharacterDummySpawner` | class | `CharacterDummyPointer` | 1 |  |
| `CharacterIKController` | class | `NetworkEntityBehaviour`, `IInitializeAsLocalPlayer` | 13 |  |
| `CharacterInfo` | class |  | 10 |  |
| `CharacterPoseSaver` | class | `ControllerInputButtonPressed` | 0 |  |
| `CharacterRigPoser` | class |  | 2 |  |
| `CharacterShellHelper` | class | `ScriptHelper` | 1 |  |
| `CheckPoint` | class | `NetworkEntityBehaviour`, `ISavable<CheckPointData>`, `ISavableSave<CheckPointData>`, +1 more | 4 |  |
| `CheckPointData` | class | `NewSaveData<CheckPoint, CheckPointData>` | 2 |  |
| `ChildCheckOnOwned` | class | `NetworkEntityBehaviour` | 1 |  |
| `ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData>` | abstract class | `ChildSyncableCollectionBase<T>`, `ISavable<TSaveData>`, `ISavableSave<TSaveData>`, +1 more | 4 |  |
| `ChildSyncableCollectionBase<T>` | abstract class | `NetworkEntityBehaviour` | 7 |  |
| `ChildSyncableCollectionSaveData<TThis, TSavable, TData>` | class | `NewSaveData<TSavable, TThis>` | 1 |  |
| `ChiselRecipePageProvider` | class | `GeneratedPageProvider<ChiselDefinition>` | 5 |  |
| `ChiselRecipePageSettings` | class | `GlobalSettings<ChiselRecipePageSettings>` | 4 |  |
| `ChiselRecipePageSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<ChiselRecipePageSettings>` | 0 |  |
| `ChiselSplineParticlesPooled` | class | `SplineParticlesPooled` | 3 |  |
| `ChooseRandomChild` | class | `MonoBehaviour` | 0 |  |
| `ChunkBasedEnvironment` | class | `MonoBehaviour` | 0 |  |
| `ChunkConverter` | class | `TypeConverter` | 2 |  |
| `ChunkDetector` | class | `NetworkEntityBehaviour` | 4 | [Chunks](../world/chunks.md#chunkdetector): `ChunkDetector` (a `NetworkEntityBehaviour`, no namespace) is how most moving things keep their chunk right. |
| `Chunker` | class | `IChunker` | 17 | [Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk): Every `NetworkEntity` makes one in its constructor. It's `protected` on `NetworkEntity` (reach it as `((IChunkedEntity)entity).Chunker`). |
| `ChunkerChangedHandler` | delegate |  | 0 |  |
| `ChunkerHelper` | static class |  | 2 |  |
| `ChunkEventHandler` | delegate |  | 0 |  |
| `ChunkingParent` | class | `MonoBehaviour` | 0 |  |
| `ChunkingPrefabFolder` | class | `MonoBehaviour`, `IDestroyOnBake` | 0 |  |
| `ChunkingPrefabReplace` | class | `MonoBehaviour`, `IBakeable` | 5 |  |
| `ChunkPhysicsResolver` | class | `NetworkEntityBehaviour` | 3 |  |
| `ChunkSetEventHandler` | delegate |  | 0 |  |
| `ChunksToSync` | internal struct |  | 2 |  |
| `ClassSerializationHelper` | static class |  | 4 |  |
| `ClassSerializationHelper.Finalize<T>` | delegate |  | 0 |  |
| `ClassSerializationHelper.MemberHandler<T>` | delegate |  | 0 |  |
| `ClassSerializer<T>` | class | `Sync` | 3 |  |
| `CleaningHelper` | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 0 |  |
| `ClickedEndEventHandler` | delegate |  | 0 |  |
| `ClickedEventHandler` | delegate |  | 0 |  |
| `ClientCommandHandler` | class |  | 4 |  |
| `ClientHandler` | class | `IRemoteConsoleHandler` | 7 |  |
| `ClientJoinResult` | enum |  | 19 | [Joining a server](../networking/joining.md): Enum of join outcomes, 1 to 13 from Alta's API, 30 to 35 from the connection. |
| `ClientLogSender` | class |  | 2 | [Remote console](../console-and-utilities/remote-console.md) |
| `Climbable` | class | `MonoBehaviour`, `IClimbable` | 12 |  |
| `Climber` | class | `SmoothLocomotionModifier` | 10 |  |
| `ClimberActivator` | class | `MonoBehaviour` | 0 |  |
| `ClimberSettings` | class | `GlobalSettings<ClimberSettings>` | 27 |  |
| `ClimberSettings.Raycast` | class |  | 2 |  |
| `ClimbingSettings` | class | `GlobalSettings<ClimbingSettings>` | 31 |  |
| `ClothManager` | class | `MonoBehaviour` | 0 |  |
| `Cluster` | class | `NetworkEntityBehaviour` | 5 |  |
| `ClusterEntitiesRegisterArguments` | struct |  | 4 |  |
| `CoinPress` | class | `NetworkEntityBehaviour` | 1 | [Smelting and forging](../game-systems/smelting-and-forging.md): A lever press that turns what's in its input dock into its `outputItem`. |
| `CoinPressGear` | class | `MonoBehaviour` | 0 |  |
| `ColliderAltaEvent` | class | `AltaEvent<Collider, ColliderUnityEvent>` | 0 |  |
| `ColliderDebugger` | class | `MonoBehaviour` | 0 |  |
| `ColliderExtension` | static class |  | 2 |  |
| `ColliderGroup` | class | `ComponentGroup<Collider>` | 8 |  |
| `ColliderPositionHelper` | class | `PositionFromOriginHelper` | 1 |  |
| `ColliderUnityEvent` | class | `UnityEvent<Collider>` | 0 |  |
| `CollisionHaptic` | class | `MonoBehaviour` | 1 |  |
| `CollisionSoundEmitter` | class | `MonoBehaviour` | 0 |  |
| `ColorApiResponse` | internal class |  | 1 |  |
| `ColorBoard` | class | `MonoBehaviour` | 0 |  |
| `ColorBoardItem` | class | `MonoBehaviour` | 2 |  |
| `ColoredExplosive` | class | `Explosive`, `ISavable<ColoredExplosiveData>`, `ISavableSave<ColoredExplosiveData>`, +2 more | 3 |  |
| `ColoredExplosiveData` | class | `NewSaveData<ColoredExplosive, ColoredExplosiveData>` | 1 |  |
| `ColoredParticleSystem` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 4 |  |
| `ColoredPooledParticleSpawner` | class | `MonoBehaviour` | 5 |  |
| `ColorEvent` | class | `AltaEvent<Color, ColorUnityEvent>` | 0 |  |
| `ColorFadeRelease` | class | `DelayedPooledObject` | 0 |  |
| `ColorLerp` | class | `MonoBehaviour` | 2 |  |
| `ColorModel<TR, TG, TB, TA>` | class | `NetworkEntityBehaviour` | 7 |  |
| `ColorModelCore<TR, TG, TB, TA>` | class |  | 18 |  |
| `ColorUnityEvent` | class | `UnityEvent<Color>` | 0 |  |
| `CombatEventHandler` | delegate |  | 0 |  |
| `CombatImpactProgressionFilter` | class | `BaseImpactChannelProgressionFilter` | 1 |  |
| `CombatImpactProgressionFilter.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Filters.ScriptableObject<CombatImpactProgressionFilter>` | 0 |  |
| `CombinedMeshSource` | class | `MonoBehaviour`, `IEditorProcessable` | 1 |  |
| `CommonPrefabs` | class | `GlobalSettings<CommonPrefabs>` | 8 |  |
| `CommonPrefabs.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<CommonPrefabs>` | 0 |  |
| `ComponentCounter` | class | `MonoBehaviour` | 0 |  |
| `ComponentEventSubscriber` | class | `IDisposable` | 2 |  |
| `ComponentGroup<T>` | class | `MonoBehaviour`, `IReadOnlyCollection<T>`, `IEnumerable<T>`, +3 more | 8 |  |
| `ComponentGroup<T>.GroupModifiedHandler` | delegate |  | 0 |  |
| `ComponentHistoryAccess` | class | `HistoryAccess` | 1 |  |
| `ComponentInspector` | class | `InspectorBase` | 7 |  |
| `CompressionUtilities` | class | `MonoBehaviour` | 2 |  |
| `ComputeShaderDarknessReader` | class | `DarknessReaderMethod` | 1 |  |
| `ConfigurableJointExtensions` | static class |  | 3 |  |
| `ConglomerateDestroyByTime` | class | `DestroyByTime` | 1 |  |
| `ConsoleDisplay` | class | `MonoBehaviour` | 0 |  |
| `ConsoleOption` | class |  | 5 |  |
| `ConsumptionManager` | class | `MonoBehaviour` | 4 | [Hunger, eating and drinking](../game-systems/hunger-and-eating.md#consumptionmanager): `ConsumptionManager : MonoBehaviour`, top level, no namespace. One per player body. `Player` gives the body's `PlayerController`. |
| `ControlledAnimation` | class | `MonoBehaviour` | 1 |  |
| `ControlledRotateAndShake` | class | `MonoBehaviour` | 2 |  |
| `Controller` | class | `NetworkEntityBehaviour` | 17 |  |
| `ControllerAction` | class | `IControllerAction` | 10 |  |
| `ControllerActionEventHandler` | delegate |  | 0 |  |
| `ControllerActionMode` | class |  | 7 |  |
| `ControllerActionProxy` | class | `IControllerAction` | 10 |  |
| `ControllerActions` | class |  | 8 |  |
| `ControllerActionsManager` | class | `MonoBehaviour` | 7 |  |
| `ControllerActionsManagerProxy` | class |  | 5 |  |
| `ControllerActionType` | enum |  | 35 |  |
| `ControllerDPad` | class |  | 11 |  |
| `ControllerExtension` | abstract class | `MonoBehaviour` | 9 |  |
| `ControllerExtensionGroup` | class | `ComponentGroup<ControllerExtension>` | 0 |  |
| `ControllerInput` | class |  | 33 |  |
| `ControllerInputButtonPressed` | abstract class | `MonoBehaviour` | 0 |  |
| `ControllerMod` | abstract class | `ModBase` | 0 |  |
| `ControllerModeSettings` | class | `ScriptableObject` | 6 |  |
| `ControllerModeType` | enum |  | 11 |  |
| `ControllerOffsetSettings` | class | `ScriptableObject` | 1 |  |
| `CopyBone` | class | `MonoBehaviour` | 0 |  |
| `CopyBoneGroup` | class | `ComponentGroup<CopyBone>` | 1 |  |
| `CopyToRenderTexture` | class | `MonoBehaviour` | 0 |  |
| `CopyTransform` | class | `MonoBehaviour` | 0 |  |
| `CoroutineAwaiter` | static class |  | 2 |  |
| `CorrectedRotationSlerp` | class | `MonoBehaviour` | 1 |  |
| `CosmeticDefinitionSku` | class |  | 4 |  |
| `CosmeticFilterSkuAttribute` | class | `CosmeticFilterAttribute` | 1 |  |
| `CosmeticPackingManager` | class | `MonoBehaviour` | 0 |  |
| `CosmeticParticleColorer` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| `CosmeticSkuAttribute` | class | `PropertyAttribute` | 0 |  |
| `CountTracker<T>` | class | `IEnumerable<T>`, `IEnumerable` | 6 |  |
| `Crank` | class | `NetworkEntityBehaviour`, `ISavable<CrankSaveData>`, `ISavableSave<CrankSaveData>`, +2 more | 5 |  |
| `CrankControlledRope` | class | `MonoBehaviour` | 0 |  |
| `CrankController` | class | `MonoBehaviour` | 0 |  |
| `CrankSaveData` | internal class | `NewSaveData<Crank, CrankSaveData>` | 1 |  |
| `CreateLOD` | class | `MonoBehaviour` | 0 |  |
| `CrippleStatDefinition` | class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md) |
| `CrippleStatDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<CrippleStatDefinition>` | 0 |  |
| `CrystalsAvailablePointManager` | class | `AvailablePointVisualizerManager` | 4 |  |
| `CsvWriter` | static class |  | 2 |  |
| `CubeMapUpdater` | class | `MonoBehaviour` | 1 |  |
| `CullingController` | class | `NetworkEntityBehaviour`, `IInitializeAsLocalPlayer` | 0 |  |
| `CullingGroupHandler` | class | `MonoBehaviour` | 2 |  |
| `CullingPortal` | class | `MonoBehaviour` | 8 |  |
| `Curve` | class | `HashedGeneralValue<Curve>` | 1 |  |
| `Curve.Create` | class | `AltaMenuItemBase.Assets.Create.Utility.ScriptableObject<Curve>` | 0 |  |
| `CurveElevation` | class | `MonoBehaviour` | 1 |  |
| `CurveOutput` | class | `NetworkEntityBehaviour`, `ISavable<CurveOutputSaveData>`, `ISavableSave<CurveOutputSaveData>`, +1 more | 7 |  |
| `CurveOutputSaveData` | class | `NewSaveData<CurveOutput, CurveOutputSaveData>` | 2 |  |
| `CurveScaler` | class | `MonoBehaviour` | 5 |  |
| `CurveWall` | class | `MonoBehaviour`, `IBakeable` | 5 |  |
| `CurveWall.CurvePoint` | class |  | 4 |  |
| `CustomArgumentGameAction<T>` | abstract class | `GameAction` | 1 |  |
| `CustomFixedJoint` | class | `MonoBehaviour` | 4 |  |
| `CustomizationPlayerController` | class | `SmoothLocomotionPlayerController` | 3 |  |
| `CustomTeleportation` | abstract class | `NetworkEntityBehaviour` | 3 |  |
| `CylinderImpactCollector` | class | `ShapeImpactCollector` | 3 |  |
| `CylinderImpactCollector.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Shape.ScriptableObject<CylinderImpactCollector>` | 0 |  |

## D

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DamageDebugDisplay` | class | `MonoBehaviour` | 1 |  |
| `DamageDisplayer` | class |  | 3 | [Items, interaction and damage](../items/overview.md) |
| `DarknessArea` | class | `SpaceDefinedAttribute<SpacePoint>` | 1 |  |
| `DarknessChunkData` | class | `ChunkEffect` | 1 |  |
| `DarknessReader` | class | `NetworkEntityBehaviour`, `IInitializeAsLocalPlayer` | 1 |  |
| `DarknessReaderMethod` | abstract class |  | 4 |  |
| `DarknessSpawnerSettings` | class | `GlobalSettings<DarknessSpawnerSettings>` | 8 |  |
| `DarknessTrigger` | static class |  | 3 |  |
| `DateTimeExtensions` | static class |  | 2 |  |
| `Debug` | static class |  | 15 | [Startup and app state](../console-and-utilities/startup-and-app-state.md), [Connection messages](../networking/messages.md) |
| `DebugClimbable` | class | `Climbable` | 1 |  |
| `DebugExtension` | static class |  | 24 |  |
| `DebugLoader` | class | `MonoBehaviour` | 1 |  |
| `DebugLogger` | class | `MonoBehaviour` | 2 |  |
| `DebugQASetManager` | static class |  | 1 |  |
| `DebugWidget` | abstract class | `MonoBehaviour` | 1 |  |
| `DecaySettings` | class | `ScriptableObject` | 4 |  |
| `DecaySettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Decay.ScriptableObject<DecaySettings>` | 0 |  |
| `DeepLinkAnalyticsService` | class | `MonoBehaviour` | 6 |  |
| `DeepLinkAnalyticsService.DeepLinkEventCancelReason` | enum |  | 2 |  |
| `DeepLinkAnalyticsService.DeeplinkEventCancelReason` | enum |  | 1 |  |
| `DeeplinkEventFailReason` | enum |  | 5 |  |
| `DeepLinkFailureController` | static class |  | 1 |  |
| `DefaultClimbable` | class | `IClimbable` | 12 |  |
| `DeferredBuffers` | enum |  | 4 |  |
| `DeferredSynchronizeInvoke` | class | `ISynchronizeInvoke` | 6 |  |
| `DefineProvider` | static class |  | 1 |  |
| `DelayedEnableLerp` | class | `EnableLerp` | 0 |  |
| `DelayedEvent` | class | `MonoBehaviour` | 1 |  |
| `DelayedHoverPickup` | class | `HoverPickup` | 0 |  |
| `DelayedPooledObject` | class | `PooledObject` | 1 |  |
| `DelayEnable` | class | `MonoBehaviour` | 0 |  |
| `DelayEnable.DelayMode` | enum |  | 2 |  |
| `DeleteMe` | class | `MonoBehaviour` | 0 |  |
| `DepthCheckLocoCheck` | class | `LocomotionModifierCheck` | 3 |  |
| `DestroyActionArgument` | class | `GameTaskActionArgument` | 3 | [Other systems](../game-systems/other-systems.md): `HealthObject`, when a player's tool destroys something |
| `DestroyByTime` | class | `PooledObject` | 3 |  |
| `DestroyedEventCaller` | class | `MonoBehaviour` | 3 |  |
| `DestroyHealthObjectTask` | class | `CustomArgumentGameAction<DestroyActionArgument>` | 1 |  |
| `DestroyIfInIncorrectChunk` | class | `NetworkEntityBehaviour` | 1 |  |
| `DevGameServerInfo` | class | `GameServerInfo` | 2 | [Joining a server](../networking/joining.md), [Server settings](../networking/server-settings.md): A `GameServerInfo` with a fixed `ConnectionInfo`. `GetDevServer(ip, port, sceneIndex)`. TavernLib's `/join_local_server` uses it. |
| `DeviceControllerFactory` | static class |  | 1 |  |
| `DeviceInputController` | abstract class |  | 4 |  |
| `DeviceLifecycle` | abstract class | `IDeviceLifecycle` | 7 |  |
| `DialSetting` | class | `MonoBehaviour` | 2 |  |
| `DiggingImpactor` | class | `NetworkEntityBehaviour`, `ISavable<DiggingImpactorSaveStructure>`, `ISavableSave<DiggingImpactorSaveStructure>`, +2 more | 4 |  |
| `DiggingImpactorSaveStructure` | class | `NewSaveData<DiggingImpactor, DiggingImpactorSaveStructure>` | 2 |  |
| `DiggingImpactorSettings` | class | `ScriptableObject` | 11 |  |
| `DirectionConstrainedRandomMovement` | class | `NetworkEntityBehaviour` | 2 |  |
| `DirectionMode` | enum |  | 4 |  |
| `DirectReplacer` | class | `BaseReplacer` | 2 |  |
| `DiscordController` | class | `MonoBehaviour` | 9 |  |
| `DiscordLarge` | enum |  | 5 |  |
| `DiscordSmall` | enum |  | 1 |  |
| `DisplayMessageType` | enum |  | 4 |  |
| `DisposablePickup` | class | `NetworkEntityBehaviour`, `IDisposablePickup` | 3 |  |
| `DisposablePickupHolder` | class | `MonoBehaviour`, `IDisposablePickup`, `IGetChild` | 1 |  |
| `DissipateToolBasedEffect` | class | `ToolBasedEffectBase` | 0 |  |
| `DissolvingEffect` | class | `DestroyByTime`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 |  |
| `DistanceFilter` | abstract class | `SpawnModifierPoint` | 1 |  |
| `DistanceLOD` | class |  | 4 |  |
| `DistanceLODGroup` | class | `MonoBehaviour` | 10 |  |
| `DistanceLODGroupManager` | class |  | 2 |  |
| `DistanceToEdgeFilter` | class | `DistanceFilter` | 0 |  |
| `DistanceToEdgeFilter.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<DistanceToEdgeFilter>` | 0 |  |
| `DistanceToLine` | static class |  | 12 |  |
| `DistanceToLineTest` | class | `MonoBehaviour` | 0 |  |
| `DistanceToPathFilter` | class | `DistanceFilter` | 0 |  |
| `DistanceToPathFilter.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<DistanceToPathFilter>` | 0 |  |
| `DistanceToRiverFilter` | class | `DistanceFilter` | 0 |  |
| `DistanceToRiverFilter.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<DistanceToRiverFilter>` | 0 |  |
| `DmgTDisplay` | class | `MonoBehaviour` | 0 |  |
| `DockableJoints` | class | `Pickup` | 0 |  |
| `DockByDefault` | class | `GeneratedNetworkEntityBehaviour` | 0 | [Items, interaction and damage](../items/overview.md) |
| `DockCounter` | class | `MonoBehaviour` | 0 |  |
| `DockedFireLogic` | class | `MonoBehaviour` | 1 |  |
| `DockEvents` | class | `AbstractDockEvents` | 0 |  |
| `DockObjectTask` | class | `HashSetAction<DockObjectTaskArgument>` | 1 |  |
| `DockObjectTaskArgument` | class | `GameTaskActionArgument` | 6 | [Other systems](../game-systems/other-systems.md) |
| `DontDestroyOnLoad` | class | `MonoBehaviour` | 1 |  |
| `DontGoThroughObjects` | class | `MonoBehaviour` | 3 |  |
| `Door` | abstract class | `NetworkEntityBehaviour`, `ISavable<DoorSaveData>`, `ISavableSave<DoorSaveData>`, +1 more | 4 |  |
| `DoorSaveData` | internal class | `NewSaveData<Door, DoorSaveData>` | 1 |  |
| `DownwardSwingInput` | class | `ISkillInputMethod` | 4 |  |
| `DownwardSwingInputStructure` | class | `SkillInputStructure` | 6 |  |
| `DownwardSwingInputStructure.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<DownwardSwingInputStructure>` | 0 |  |
| `DPadInputSource` | class | `InputSource` | 4 |  |
| `DragTrigger` | class | `MonoBehaviour` | 1 |  |
| `DrawBridgeLogic` | class | `MonoBehaviour`, `ISavable<DrawBridgeLogicSaveData>`, `ISavableSave<DrawBridgeLogicSaveData>`, +1 more | 2 |  |
| `DrawBridgeLogicSaveData` | class | `NewSaveData<DrawBridgeLogic, DrawBridgeLogicSaveData>` | 3 |  |
| `DrawBridgeRangeLogic` | class | `NetworkEntityBehaviour`, `ISavable<DrawBridgeRangeLogicSaveData>`, `ISavableSave<DrawBridgeRangeLogicSaveData>`, +2 more | 5 |  |
| `DrawBridgeRangeLogicSaveData` | class | `NewSaveData<DrawBridgeRangeLogic, DrawBridgeRangeLogicSaveData>` | 2 |  |
| `DrawBridgeRangeLogicSaveData1` | class | `OldSaveData` | 3 |  |
| `DropTarget` | class | `MonoBehaviour` | 0 |  |
| `DummyArrow` | class | `MonoBehaviour` | 1 |  |
| `DummyPlayerController` | class | `PlayerController` | 2 |  |
| `DurabilityGlobalSettings` | class | `GlobalSettings<DurabilityGlobalSettings>` | 6 |  |
| `DurabilityGlobalSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<DurabilityGlobalSettings>` | 0 |  |
| `DurabilityModule` | class | `NetworkEntityBehaviour`, `ISavable<DurabilityModuleSaveData>`, `ISavableSave<DurabilityModuleSaveData>`, +5 more | 14 |  |
| `DurabilityModule.DurabilityVisual` | class | `IReferenceRenderer` | 5 |  |
| `DurabilityModuleSaveData` | internal class | `NewSaveData<DurabilityModule, DurabilityModuleSaveData>` | 1 |  |
| `DurabilitySettings` | class | `PopupScriptableObject` | 4 |  |
| `DurabilitySettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Durability.ScriptableObject<DurabilitySettings>` | 0 |  |
| `DurabilityStateChangeEffect` | class | `PooledObject` | 2 |  |
| `DurationCurve` | class |  | 3 |  |
| `DynamicObjectCombiner` | class | `StaticObjectCombiner` | 1 |  |
| `DynamicPathPart` | class | `GeneratablePart` | 1 |  |
| `DynamiteStrike` | class | `AreaAttackSkill` | 4 |  |
| `DynamiteStrike.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<DynamiteStrike>` | 0 |  |
