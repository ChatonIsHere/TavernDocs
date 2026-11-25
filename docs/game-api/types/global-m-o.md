---
title: "No namespace: M to O"
description: "Root.Township types with no namespace, M to O."
sidebar_position: 19
---

# No namespace: M to O

Types in `Root.Township` with no namespace (the global namespace), from M to O. 170 types, 8 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## M

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `MainMenuControllerSpawner` | class | `MonoBehaviour` | 0 |  |
| `MainMenuCraft` | class | `NetworkEntityBehaviour` | 1 |  |
| `MainMenuDesktopController` | class | `PlayerController` | 2 |  |
| `MainMenuLogger` | class | `SingletonBehaviour<MainMenuLogger>`, `IMainMenuLogger` | 4 |  |
| `MainMenuPlayerController` | class | `SmoothLocomotionPlayerController`, `IPlatformPlayer`, `IHasFingertips`, +1 more | 9 |  |
| `MainMenuPlayerLogger` | class | `IMainMenuLogger` | 3 |  |
| `MainMenuPrefabSpawner` | class | `MonoBehaviour` | 0 |  |
| `MainThreadJobHandler` | class | `SingletonBehaviour<MainThreadJobHandler>` | 2 |  |
| `MainThreadJobHandler.Entry` | abstract class |  | 1 |  |
| `MapMaskPiece` | class | `PooledObject` | 2 |  |
| `MarchingCubes` | static class |  | 2 |  |
| `MarchingCubes.GridCell` | class |  | 3 |  |
| `MarchingCubes.Point4` | struct |  | 7 |  |
| `MarchingCubes.Triangle` | class |  | 2 |  |
| `MarchingCubesTest` | class | `MonoBehaviour` | 0 |  |
| `MassLODSetter` | class | `MonoBehaviour` | 2 |  |
| `MasterTerrain` | class | `MonoBehaviour` | 4 |  |
| `MaterialGroup` | class | `ComponentGroup<Renderer>` | 2 |  |
| `MaterialInstantiator` | class | `MonoBehaviour` | 0 |  |
| `MaterialLOD` | class |  | 5 |  |
| `MaterialSwapper` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| `MaterialToggler` | class | `MonoBehaviour` | 6 |  |
| `MaxLimitPooledObjectPool` | class | `BasicPooledObjectPool(definition)` | 2 |  |
| `MaxValueTask` | class | `CustomArgumentGameAction<MaxValueTaskArgument>` | 2 |  |
| `MaxValueTaskArgument` | class | `GameTaskActionArgument` | 2 | [Other systems](../game-systems/other-systems.md): `CaveLayerChunk`, the deepest cave layer reached |
| `MeasureDistance` | class | `MonoBehaviour` | 0 |  |
| `MediumBird` | class | `MonoBehaviour` | 1 |  |
| `MemoizeComponentOne<T>` | class | `MemoizeOne<Component, T>` | 1 |  |
| `MemoizeHashset<TIn, TOut>` | class |  | 5 |  |
| `MemoizeHashset<TIn, TOut>.Evaluate` | delegate |  | 0 |  |
| `MemoizeHashsetCountTracker<TIn, TOut>` | class | `IEnumerable<TOut>`, `IEnumerable` | 8 |  |
| `MemoizeOne<TInput, TOutput>` | class |  | 3 |  |
| `MenuSettings` | class | `GlobalSettings<MenuSettings>` | 37 |  |
| `MenuSettings.AfterStartActionType` | enum |  | 4 |  |
| `MenuSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<MenuSettings>` | 0 |  |
| `MeshColorBaker` | class | `BuildRendererBakeable` | 3 |  |
| `MeshColoringRam` | class | `MonoBehaviour` | 4 |  |
| `MeshEffect` | class | `PooledObject` | 2 |  |
| `MeshFaceViewer` | class | `MonoBehaviour` | 0 |  |
| `MeshReplacePooledObject` | abstract class | `PooledObject` | 1 |  |
| `MeshUtility` | internal static class |  | 3 |  |
| `MessageResult` | class |  | 2 |  |
| `MessageResult<T>` | class | `MessageResult` | 1 |  |
| `MethodMember` | class | `InspectorBase` | 4 |  |
| `MigrateSoundEffectAttribute` | class | `PrefabApplyAttribute` | 2 |  |
| `MiningBaseGenerator` | class | `GeneratedNetworkEntityBehaviour` | 4 |  |
| `MiningBaseGenerator.PartOption` | class |  | 4 |  |
| `MiningBaseGenerator.Point` | struct |  | 6 |  |
| `MiningBaseGenerator.Possibility` | struct |  | 6 |  |
| `MiningEcho` | class | `PickupBasedSkill` | 8 |  |
| `MiningEcho.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<MiningEcho>` | 0 |  |
| `MiningEchoIntensity` | class | `ProfessionSkill` | 0 |  |
| `MiningEchoIntensity.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<MiningEchoIntensity>` | 0 |  |
| `MinMaxValue` | class |  | 2 |  |
| `ModBase` | abstract class | `MonoBehaviour` | 1 |  |
| `ModellingCharacter` | class | `MonoBehaviour` | 1 |  |
| `ModellingScene` | class | `MonoBehaviour` | 1 |  |
| `ModHands` | class | `ControllerExtension` | 2 |  |
| `ModHands.ModEvent` | delegate |  | 0 |  |
| `ModifiableAdditionalStaticContent` | class | `NetworkEntityBehaviour`, `ISavable<ModifiableAdditionalStaticContentSaveData>`, `ISavableSave<ModifiableAdditionalStaticContentSaveData>`, +2 more | 7 |  |
| `ModifiableAdditionalStaticContentSaveData` | class | `NewSaveData<ModifiableAdditionalStaticContent, ModifiableAdditionalStaticContentSaveData>` | 2 |  |
| `MonoBehaviourExtensions` | static class |  | 1 |  |
| `Month` | enum |  | 12 |  |
| `MonthDayHour` | struct | `IComparable<MonthDayHour>`, `IEquatable<MonthDayHour>` | 14 |  |
| `Motor` | class | `MonoBehaviour` | 3 |  |
| `Mould` | class | `GeneratedNetworkEntityBehaviour`, `IBlockGenericDecrafting`, `ISavable<MouldSaveData>`, +2 more | 7 | [Smelting and forging](../game-systems/smelting-and-forging.md): The mould item. `Definition`, `Usage` (uses left; -1 never runs out), `bool Consume()` (uses one, true when used up). |
| `Mould.IBlockGenericDecrafting` | interface |  | 1 |  |
| `MouldCopyTest` | class | `NetworkEntityBehaviour` | 1 |  |
| `MouldDefinition` | class | `HashedGeneralValue<MouldDefinition>` | 14 | [Arguments and results](../console-and-utilities/arguments-and-results.md), [Smelting and forging](../game-systems/smelting-and-forging.md): `Product` (an `Item`), `Cost` (ingots used), `QuantityProduced`, `AllowedMaterials` (an `ItemSet` of ingots), `IsFindable`. |
| `MouldDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Blacksmithing.ScriptableObject<MouldDefinition>` | 0 |  |
| `MouldItemComponent` | class | `ItemComponent` | 1 |  |
| `MouldPress` | class | `NetworkEntityBehaviour` | 2 |  |
| `MouldSaveData` | internal class | `NewSaveData<Mould, MouldSaveData>` | 2 |  |
| `MouldSaveData1` | internal class | `OldSaveData` | 2 |  |
| `MovementBendController` | class | `MonoBehaviour` | 0 |  |
| `MovementConfortSpeed` | enum |  | 2 |  |
| `MovementConfortStrength` | enum |  | 4 |  |
| `MovePickup` | class | `NetworkEntityBehaviour`, `ISavable<MovePickupSaveData>`, `ISavableSave<MovePickupSaveData>`, +2 more | 2 | [Items, interaction and damage](../items/overview.md) |
| `MovePickupSaveData` | internal class | `NewSaveData<MovePickup, MovePickupSaveData>` | 2 |  |
| `MovePickupSaveData1` | internal class | `OldSaveData` | 11 |  |
| `MoveQuantityRequestArguments` | struct |  | 4 |  |
| `MoveToBone` | class | `MonoBehaviour` | 1 |  |
| `MoveToLayer` | class | `MonoBehaviour` | 0 |  |
| `MoveTowardsModifier` | class | `FloatModifier` | 1 |  |
| `MovingObjectsBetweenDocks` | class | `ObjectVisualDouble` | 1 |  |
| `MovingPlatform` | class | `VolumeTrigger`, `INetworkEntityBehaviour`, `IHasMovementContext` | 5 |  |
| `MRK_ActivationLever` | class | `NetworkEntityBehaviour`, `ISavable<MRK_ActivationLeverSaveData>`, `ISavableSave<MRK_ActivationLeverSaveData>`, +1 more | 4 | [Buttons and levers](../items/buttons-and-levers.md): A networked, saved activation lever used by some puzzles. |
| `MRK_ActivationLeverSaveData` | class | `NewSaveData<MRK_ActivationLever, MRK_ActivationLeverSaveData>` | 1 |  |
| `MultiDeltaInputController` | class | `NetworkEntityBehaviour`, `IDeltaControl` | 2 |  |
| `MultiHandPickup` | class | `Pickup` | 5 | [Items, interaction and damage](../items/overview.md) |
| `MultiLeverPanel` | class | `MonoBehaviour` | 0 | [Buttons and levers](../items/buttons-and-levers.md) |
| `MultipleInteractionAllowance` | enum |  | 2 |  |
| `MultipleInteractionAllowanceHelper` | static class |  | 2 |  |
| `MultipleNotAllowedAction` | enum |  | 3 |  |
| `MultipleSpawner` | class | `NetworkEntityBehaviour` | 2 |  |
| `MultipleSpawner.SimpleSpawner` | class |  | 9 |  |
| `MultiPositionTypeLabel` | enum |  | 3 |  |
| `MultiSpawner` | class | `SpawnerBase` | 5 |  |
| `MushroomCritter` | class | `NetworkEntityBehaviour` | 25 |  |

## N

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `NameBoardsSettings` | class | `GlobalSettings<NameBoardsSettings>` | 3 |  |
| `NamedProgressBar` | class | `ProgressBar` | 1 |  |
| `NearbyPlayerScaler` | class | `CurveScaler` | 4 |  |
| `NearbyPlayerTracker` | class | `MonoBehaviour` | 2 |  |
| `NetworkDestroyTimed` | class | `NetworkEntityBehaviour` | 1 |  |
| `NetworkedEvent` | class | `NetworkEntityBehaviour` | 2 |  |
| `NetworkedFloatStream` | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `ISavable<NetworkedFloatStreamSaveData>`, +2 more | 10 |  |
| `NetworkedFloatStreamSaveData` | class | `NewSaveData<NetworkedFloatStream, NetworkedFloatStreamSaveData>` | 1 |  |
| `NetworkedIKBody` | class | `CharacterComponentController`, `INetworkSerialized`, `INetworkEntityBehaviour`, +1 more | 10 |  |
| `NetworkedIKBone` | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 6 |  |
| `NetworkedJointDrivenRig` | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 5 |  |
| `NetworkEntityModifiers` | abstract class | `SpawnModifier<NetworkEntity>` | 0 |  |
| `NetworkEntityObjectIssueLog` | static class |  | 6 |  |
| `NetworkingUtilities` | static class |  | 1 |  |
| `NetworkPrefabHashAttribute` | class | `PropertyAttribute` | 0 |  |
| `NetworkSceneManager` | static class |  | 9 |  |
| `NetworkStarer` | class | `NetworkEntityBehaviour` | 7 |  |
| `NetworkStarer.ChangedDirection` | delegate |  | 0 |  |
| `NetworkStarer.ChangedState` | delegate |  | 0 |  |
| `NetworkTransportPackageVersion` | class | `GlobalSettings<NetworkTransportPackageVersion>` | 2 |  |
| `NewNetworkingProfiler` | static class |  | 5 |  |
| `NewSaveData<TSavable, TData>` | abstract class | `SaveData` | 2 |  |
| `NoMigrationProvidedException` | class | `Exception` | 0 |  |
| `NonClimbable` | class | `MonoBehaviour`, `IClimbable`, `IIgnoreColliderFlattening`, +1 more | 1 |  |
| `NonHashedData` | class | `ScriptableObject` | 1 |  |
| `NonJointLever` | class | `MonoBehaviour` | 0 | [Buttons and levers](../items/buttons-and-levers.md) |
| `NonTeleportable` | class | `MonoBehaviour`, `IIgnoreColliderFlattening`, `IDontSplit` | 0 |  |
| `NormalChunkLoader` | class | `IChunkLoader` | 1 |  |
| `NormalFilter` | class | `SpawnModifierPointNormal` | 1 |  |
| `NormalFilter.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<NormalFilter>` | 0 |  |
| `NullChecker` | class | `MonoBehaviour` | 1 |  |
| `NullColorModelPoint` | class | `IColorModelPoint<NullColorModelPoint>` | 2 |  |
| `NullConsole` | class | `ServerConsole` | 2 |  |
| `NumericalWidget` | class | `DebugWidget` | 0 |  |

## O

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ObjectDestroyedException` | internal class | `Exception` | 3 |  |
| `ObjectIssueLog` | class | `GlobalSettings<ObjectIssueLog>` | 5 |  |
| `ObjectIssueLog.Issue` | class |  | 2 |  |
| `ObjectPipeline` | class |  | 6 |  |
| `ObjectVisualDouble` | class | `PooledObject` | 2 |  |
| `OculusCloudStorage` | static class |  | 2 |  |
| `OculusDeepLinkService` | static class |  | 3 |  |
| `OculusVirtualInputField` | class | `VirtualInputFieldBase` | 0 |  |
| `OfflinePlayerProgress` | class |  | 2 |  |
| `OfflinePlayerProgressionHandler` | class | `NetworkEntityBehaviour`, `ISavable<OfflinePlayerProgressionHandlerSaveData>`, `ISavableSave<OfflinePlayerProgressionHandlerSaveData>`, +1 more | 6 |  |
| `OfflinePlayerProgressionHandlerSaveData` | class | `NewSaveData<OfflinePlayerProgressionHandler, OfflinePlayerProgressionHandlerSaveData>` | 1 |  |
| `OldSaveData` | abstract class | `SaveData` | 1 |  |
| `OldVisibilityTest` | static class |  | 1 |  |
| `OnCollidedEventTrigger` | class | `MonoBehaviour` | 0 |  |
| `OnDestroyEvent` | class | `NetworkEntityBehaviour` | 1 |  |
| `OneTimeEvent<T>` | class | `TrackedEvent<T>` | 5 |  |
| `OneTimeEventTest` | class | `MonoBehaviour` | 0 |  |
| `OneTimeUnityEvent` | class | `MonoBehaviour` | 2 |  |
| `OneTimeUpgradeInteraction` | class | `StatUpgradeTarget`, `ISavable<OneTimeUpgradeSaveData>`, `ISavableSave<OneTimeUpgradeSaveData>`, +1 more | 2 |  |
| `OneTimeUpgradeSaveData` | internal class | `NewSaveData<OneTimeUpgradeInteraction, OneTimeUpgradeSaveData>` | 1 |  |
| `OnHeld` | delegate |  | 0 |  |
| `OnScreenErrorLogger` | class | `MonoBehaviour` | 0 |  |
| `OpenClientLogs` | class | `AltaMenuItemBase.Township.Logs` | 1 |  |
| `OpenServerLogs` | class | `AltaMenuItemBase.Township.Logs` | 1 |  |
| `OpenXRControllerInput` | class | `ControllerInput` | 5 |  |
| `OpenXRDeviceController` | class | `XrDeviceSdkController` | 4 |  |
| `OpenXRDeviceLifecycle` | class | `VirtualRealityDeviceLifecycle` | 1 |  |
| `OpenXRInputController` | abstract class | `DeviceInputController` | 3 |  |
| `OpenXRWrapper` | class | `InputMap.IPlayingActions`, `InputMap.IPlayingGenericActions`, `InputMap.IPlayingBaseActions`, +1 more | 37 |  |
| `OperatedValue` | class | `MonoBehaviour` | 6 |  |
| `OptimisedChunkLoader` | class | `IChunkLoader` | 1 |  |
| `OptimizationManager` | class | `MonoBehaviour` | 4 |  |
| `OrbitalInspector` | class | `InteractorInspector` | 1 |  |
| `OverridableSettings` | abstract class | `ScriptableObject` | 4 |  |
| `OverrideBodySettings` | class | `MonoBehaviour` | 0 |  |
| `OverrideMask` | enum |  | 6 |  |
| `OwnedShopItemExtensions` | static class |  | 1 |  |
