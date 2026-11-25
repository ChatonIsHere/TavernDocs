---
title: "No namespace: M to O"
description: "Root.Township types with no namespace, M to O."
sidebar_position: 19
---

# No namespace: M to O

Types in `Root.Township` with no namespace (the global namespace), from M to O. 170 types, 8 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## M

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`MainMenuControllerSpawner`](/game-api/types/global-m-o/mainmenucontrollerspawner) | class | `MonoBehaviour` | 0 |  |
| [`MainMenuCraft`](/game-api/types/global-m-o/mainmenucraft) | class | `NetworkEntityBehaviour` | 1 |  |
| [`MainMenuDesktopController`](/game-api/types/global-m-o/mainmenudesktopcontroller) | class | `PlayerController` | 2 |  |
| [`MainMenuLogger`](/game-api/types/global-m-o/mainmenulogger) | class | `SingletonBehaviour<MainMenuLogger>`, `IMainMenuLogger` | 4 |  |
| [`MainMenuPlayerController`](/game-api/types/global-m-o/mainmenuplayercontroller) | class | `SmoothLocomotionPlayerController`, `IPlatformPlayer`, `IHasFingertips`, +1 more | 9 |  |
| [`MainMenuPlayerLogger`](/game-api/types/global-m-o/mainmenuplayerlogger) | class | `IMainMenuLogger` | 3 |  |
| [`MainMenuPrefabSpawner`](/game-api/types/global-m-o/mainmenuprefabspawner) | class | `MonoBehaviour` | 0 |  |
| [`MainThreadJobHandler`](/game-api/types/global-m-o/mainthreadjobhandler) | class | `SingletonBehaviour<MainThreadJobHandler>` | 2 |  |
| [`MainThreadJobHandler.Entry`](/game-api/types/global-m-o/mainthreadjobhandler-entry) | abstract class |  | 1 |  |
| [`MapMaskPiece`](/game-api/types/global-m-o/mapmaskpiece) | class | `PooledObject` | 2 |  |
| [`MarchingCubes`](/game-api/types/global-m-o/marchingcubes) | static class |  | 2 |  |
| [`MarchingCubes.GridCell`](/game-api/types/global-m-o/marchingcubes-gridcell) | class |  | 3 |  |
| [`MarchingCubes.Point4`](/game-api/types/global-m-o/marchingcubes-point4) | struct |  | 7 |  |
| [`MarchingCubes.Triangle`](/game-api/types/global-m-o/marchingcubes-triangle) | class |  | 2 |  |
| [`MarchingCubesTest`](/game-api/types/global-m-o/marchingcubestest) | class | `MonoBehaviour` | 0 |  |
| [`MassLODSetter`](/game-api/types/global-m-o/masslodsetter) | class | `MonoBehaviour` | 2 |  |
| [`MasterTerrain`](/game-api/types/global-m-o/masterterrain) | class | `MonoBehaviour` | 4 |  |
| [`MaterialGroup`](/game-api/types/global-m-o/materialgroup) | class | `ComponentGroup<Renderer>` | 2 |  |
| [`MaterialInstantiator`](/game-api/types/global-m-o/materialinstantiator) | class | `MonoBehaviour` | 0 |  |
| [`MaterialLOD`](/game-api/types/global-m-o/materiallod) | class |  | 5 |  |
| [`MaterialSwapper`](/game-api/types/global-m-o/materialswapper) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| [`MaterialToggler`](/game-api/types/global-m-o/materialtoggler) | class | `MonoBehaviour` | 6 |  |
| [`MaxLimitPooledObjectPool`](/game-api/types/global-m-o/maxlimitpooledobjectpool) | class | `BasicPooledObjectPool` | 2 |  |
| [`MaxValueTask`](/game-api/types/global-m-o/maxvaluetask) | class | `CustomArgumentGameAction<MaxValueTaskArgument>` | 2 |  |
| [`MaxValueTaskArgument`](/game-api/types/global-m-o/maxvaluetaskargument) | class | `GameTaskActionArgument` | 2 | [Other systems](../game-systems/other-systems.md): `CaveLayerChunk`, the deepest cave layer reached |
| [`MeasureDistance`](/game-api/types/global-m-o/measuredistance) | class | `MonoBehaviour` | 0 |  |
| [`MediumBird`](/game-api/types/global-m-o/mediumbird) | class | `MonoBehaviour` | 1 |  |
| [`MemoizeComponentOne<T>`](/game-api/types/global-m-o/memoizecomponentone-t) | class | `MemoizeOne<Component, T>` | 1 |  |
| [`MemoizeHashset<TIn, TOut>`](/game-api/types/global-m-o/memoizehashset-tin-tout) | class |  | 5 |  |
| [`MemoizeHashset<TIn, TOut>.Evaluate`](/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate) | delegate |  | 0 |  |
| [`MemoizeHashsetCountTracker<TIn, TOut>`](/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout) | class | `IEnumerable<TOut>`, `IEnumerable` | 8 |  |
| [`MemoizeOne<TInput, TOutput>`](/game-api/types/global-m-o/memoizeone-tinput-toutput) | class |  | 3 |  |
| [`MenuSettings`](/game-api/types/global-m-o/menusettings) | class | `GlobalSettings<MenuSettings>` | 37 | Global settings asset for the menu and startup: scene names, server list colours and materials, selection orb tuning and editor-only startup flags. Get it with `GlobalSettings<MenuSettings>.Instance`. |
| [`MenuSettings.AfterStartActionType`](/game-api/types/global-m-o/menusettings-afterstartactiontype) | enum |  | 4 |  |
| [`MenuSettings.Create`](/game-api/types/global-m-o/menusettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<MenuSettings>` | 0 |  |
| [`MeshColorBaker`](/game-api/types/global-m-o/meshcolorbaker) | class | `BuildRendererBakeable` | 3 |  |
| [`MeshColoringRam`](/game-api/types/global-m-o/meshcoloringram) | class | `MonoBehaviour` | 4 |  |
| [`MeshEffect`](/game-api/types/global-m-o/mesheffect) | class | `PooledObject` | 2 |  |
| [`MeshFaceViewer`](/game-api/types/global-m-o/meshfaceviewer) | class | `MonoBehaviour` | 0 |  |
| [`MeshReplacePooledObject`](/game-api/types/global-m-o/meshreplacepooledobject) | abstract class | `PooledObject` | 1 |  |
| [`MeshUtility`](/game-api/types/global-m-o/meshutility) | internal static class |  | 3 |  |
| [`MessageResult`](/game-api/types/global-m-o/messageresult) | class |  | 2 |  |
| [`MessageResult<T>`](/game-api/types/global-m-o/messageresult-t) | class | `MessageResult` | 1 |  |
| [`MethodMember`](/game-api/types/global-m-o/methodmember) | class | `InspectorBase` | 4 |  |
| [`MigrateSoundEffectAttribute`](/game-api/types/global-m-o/migratesoundeffectattribute) | class | `PrefabApplyAttribute` | 2 |  |
| [`MiningBaseGenerator`](/game-api/types/global-m-o/miningbasegenerator) | class | `GeneratedNetworkEntityBehaviour` | 4 |  |
| [`MiningBaseGenerator.PartOption`](/game-api/types/global-m-o/miningbasegenerator-partoption) | class |  | 4 |  |
| [`MiningBaseGenerator.Point`](/game-api/types/global-m-o/miningbasegenerator-point) | struct |  | 6 |  |
| [`MiningBaseGenerator.Possibility`](/game-api/types/global-m-o/miningbasegenerator-possibility) | struct |  | 6 |  |
| [`MiningEcho`](/game-api/types/global-m-o/miningecho) | class | `PickupBasedSkill` | 8 | Progression skill: a strong pickaxe hit sends out an echo pulse whose radius grows over time, shown to the player and passed to `IListenToMiningEcho` listeners (probably to reveal ore). |
| [`MiningEcho.Create`](/game-api/types/global-m-o/miningecho-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<MiningEcho>` | 0 |  |
| [`MiningEchoIntensity`](/game-api/types/global-m-o/miningechointensity) | class | `ProfessionSkill` | 0 |  |
| [`MiningEchoIntensity.Create`](/game-api/types/global-m-o/miningechointensity-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<MiningEchoIntensity>` | 0 |  |
| [`MinMaxValue`](/game-api/types/global-m-o/minmaxvalue) | class |  | 2 |  |
| [`ModBase`](/game-api/types/global-m-o/modbase) | abstract class | `MonoBehaviour` | 1 |  |
| [`ModellingCharacter`](/game-api/types/global-m-o/modellingcharacter) | class | `MonoBehaviour` | 1 |  |
| [`ModellingScene`](/game-api/types/global-m-o/modellingscene) | class | `MonoBehaviour` | 1 |  |
| [`ModHands`](/game-api/types/global-m-o/modhands) | class | `ControllerExtension` | 2 |  |
| [`ModHands.ModEvent`](/game-api/types/global-m-o/modhands-modevent) | delegate |  | 0 |  |
| [`ModifiableAdditionalStaticContent`](/game-api/types/global-m-o/modifiableadditionalstaticcontent) | class | `NetworkEntityBehaviour`, `ISavable<ModifiableAdditionalStaticContentSaveData>`, `ISavableSave<ModifiableAdditionalStaticContentSaveData>`, +2 more | 7 |  |
| [`ModifiableAdditionalStaticContentSaveData`](/game-api/types/global-m-o/modifiableadditionalstaticcontentsavedata) | class | `NewSaveData<ModifiableAdditionalStaticContent, ModifiableAdditionalStaticContentSaveData>` | 2 |  |
| [`MonoBehaviourExtensions`](/game-api/types/global-m-o/monobehaviourextensions) | static class |  | 1 |  |
| [`Month`](/game-api/types/global-m-o/month) | enum |  | 12 |  |
| [`MonthDayHour`](/game-api/types/global-m-o/monthdayhour) | struct | `IComparable<MonthDayHour>`, `IEquatable<MonthDayHour>` | 14 | A point in the year (month, day, hour) with no year, used for seasonal or dated events. Compares in month, day, hour order. |
| [`Motor`](/game-api/types/global-m-o/motor) | class | `MonoBehaviour` | 3 |  |
| [`Mould`](/game-api/types/global-m-o/mould) | class | `GeneratedNetworkEntityBehaviour`, `IBlockGenericDecrafting`, `ISavable<MouldSaveData>`, +2 more | 7 | [Smelting and forging](../game-systems/smelting-and-forging.md): The mould item. `Definition`, `Usage` (uses left; -1 never runs out), `bool Consume()` (uses one, true when used up). |
| [`Mould.IBlockGenericDecrafting`](/game-api/types/global-m-o/mould-iblockgenericdecrafting) | interface |  | 1 |  |
| [`MouldCopyTest`](/game-api/types/global-m-o/mouldcopytest) | class | `NetworkEntityBehaviour` | 1 |  |
| [`MouldDefinition`](/game-api/types/global-m-o/moulddefinition) | class | `HashedGeneralValue<MouldDefinition>` | 14 | [Arguments and results](../console-and-utilities/arguments-and-results.md), [Smelting and forging](../game-systems/smelting-and-forging.md): `Product` (an `Item`), `Cost` (ingots used), `QuantityProduced`, `AllowedMaterials` (an `ItemSet` of ingots), `IsFindable`. |
| [`MouldDefinition.Create`](/game-api/types/global-m-o/moulddefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Blacksmithing.ScriptableObject<MouldDefinition>` | 0 |  |
| [`MouldItemComponent`](/game-api/types/global-m-o/moulditemcomponent) | class | `ItemComponent` | 1 |  |
| [`MouldPress`](/game-api/types/global-m-o/mouldpress) | class | `NetworkEntityBehaviour` | 2 |  |
| [`MouldSaveData`](/game-api/types/global-m-o/mouldsavedata) | internal class | `NewSaveData<Mould, MouldSaveData>` | 2 |  |
| [`MouldSaveData1`](/game-api/types/global-m-o/mouldsavedata1) | internal class | `OldSaveData` | 2 |  |
| [`MovementBendController`](/game-api/types/global-m-o/movementbendcontroller) | class | `MonoBehaviour` | 0 |  |
| [`MovementConfortSpeed`](/game-api/types/global-m-o/movementconfortspeed) | enum |  | 2 |  |
| [`MovementConfortStrength`](/game-api/types/global-m-o/movementconfortstrength) | enum |  | 4 |  |
| [`MovePickup`](/game-api/types/global-m-o/movepickup) | class | `NetworkEntityBehaviour`, `ISavable<MovePickupSaveData>`, `ISavableSave<MovePickupSaveData>`, +2 more | 2 | [Items, interaction and damage](../items/overview.md) |
| [`MovePickupSaveData`](/game-api/types/global-m-o/movepickupsavedata) | internal class | `NewSaveData<MovePickup, MovePickupSaveData>` | 2 |  |
| [`MovePickupSaveData1`](/game-api/types/global-m-o/movepickupsavedata1) | internal class | `OldSaveData` | 11 |  |
| [`MoveQuantityRequestArguments`](/game-api/types/global-m-o/movequantityrequestarguments) | struct |  | 4 |  |
| [`MoveToBone`](/game-api/types/global-m-o/movetobone) | class | `MonoBehaviour` | 1 |  |
| [`MoveToLayer`](/game-api/types/global-m-o/movetolayer) | class | `MonoBehaviour` | 0 |  |
| [`MoveTowardsModifier`](/game-api/types/global-m-o/movetowardsmodifier) | class | `FloatModifier` | 1 |  |
| [`MovingObjectsBetweenDocks`](/game-api/types/global-m-o/movingobjectsbetweendocks) | class | `ObjectVisualDouble` | 1 |  |
| [`MovingPlatform`](/game-api/types/global-m-o/movingplatform) | class | `VolumeTrigger`, `INetworkEntityBehaviour`, `IHasMovementContext` | 5 |  |
| [`MRK_ActivationLever`](/game-api/types/global-m-o/mrk_activationlever) | class | `NetworkEntityBehaviour`, `ISavable<MRK_ActivationLeverSaveData>`, `ISavableSave<MRK_ActivationLeverSaveData>`, +1 more | 4 | [Buttons and levers](../items/buttons-and-levers.md): A networked, saved activation lever used by some puzzles. |
| [`MRK_ActivationLeverSaveData`](/game-api/types/global-m-o/mrk_activationleversavedata) | class | `NewSaveData<MRK_ActivationLever, MRK_ActivationLeverSaveData>` | 1 |  |
| [`MultiDeltaInputController`](/game-api/types/global-m-o/multideltainputcontroller) | class | `NetworkEntityBehaviour`, `IDeltaControl` | 2 |  |
| [`MultiHandPickup`](/game-api/types/global-m-o/multihandpickup) | class | `Pickup` | 5 | [Items, interaction and damage](../items/overview.md) |
| [`MultiLeverPanel`](/game-api/types/global-m-o/multileverpanel) | class | `MonoBehaviour` | 0 | [Buttons and levers](../items/buttons-and-levers.md) |
| [`MultipleInteractionAllowance`](/game-api/types/global-m-o/multipleinteractionallowance) | enum |  | 2 |  |
| [`MultipleInteractionAllowanceHelper`](/game-api/types/global-m-o/multipleinteractionallowancehelper) | static class |  | 2 |  |
| [`MultipleNotAllowedAction`](/game-api/types/global-m-o/multiplenotallowedaction) | enum |  | 3 |  |
| [`MultipleSpawner`](/game-api/types/global-m-o/multiplespawner) | class | `NetworkEntityBehaviour` | 2 |  |
| [`MultipleSpawner.SimpleSpawner`](/game-api/types/global-m-o/multiplespawner-simplespawner) | class |  | 9 |  |
| [`MultiPositionTypeLabel`](/game-api/types/global-m-o/multipositiontypelabel) | enum |  | 3 |  |
| [`MultiSpawner`](/game-api/types/global-m-o/multispawner) | class | `SpawnerBase` | 5 |  |
| [`MushroomCritter`](/game-api/types/global-m-o/mushroomcritter) | class | `NetworkEntityBehaviour` | 25 | Tuning values for a schmeechee (mushroom critter): floor checks, push and turn forces, flipping and planting. A component read by `Schmeechee` and its actions. |

## N

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`NameBoardsSettings`](/game-api/types/global-m-o/nameboardssettings) | class | `GlobalSettings<NameBoardsSettings>` | 3 |  |
| [`NamedProgressBar`](/game-api/types/global-m-o/namedprogressbar) | class | `ProgressBar` | 1 |  |
| [`NearbyPlayerScaler`](/game-api/types/global-m-o/nearbyplayerscaler) | class | `CurveScaler` | 4 |  |
| [`NearbyPlayerTracker`](/game-api/types/global-m-o/nearbyplayertracker) | class | `MonoBehaviour` | 2 |  |
| [`NetworkDestroyTimed`](/game-api/types/global-m-o/networkdestroytimed) | class | `NetworkEntityBehaviour` | 1 |  |
| [`NetworkedEvent`](/game-api/types/global-m-o/networkedevent) | class | `NetworkEntityBehaviour` | 2 |  |
| [`NetworkedFloatStream`](/game-api/types/global-m-o/networkedfloatstream) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `ISavable<NetworkedFloatStreamSaveData>`, +2 more | 10 | Component holding one float between a min and max. The server sets it and it reaches clients in the regular entity stream using a set number of bits. Saved with the entity. |
| [`NetworkedFloatStreamSaveData`](/game-api/types/global-m-o/networkedfloatstreamsavedata) | class | `NewSaveData<NetworkedFloatStream, NetworkedFloatStreamSaveData>` | 1 |  |
| [`NetworkedIKBody`](/game-api/types/global-m-o/networkedikbody) | class | `CharacterComponentController`, `INetworkSerialized`, `INetworkEntityBehaviour`, +1 more | 10 |  |
| [`NetworkedIKBone`](/game-api/types/global-m-o/networkedikbone) | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 6 |  |
| [`NetworkedJointDrivenRig`](/game-api/types/global-m-o/networkedjointdrivenrig) | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 5 |  |
| [`NetworkEntityModifiers`](/game-api/types/global-m-o/networkentitymodifiers) | abstract class | `SpawnModifier<NetworkEntity>` | 0 |  |
| [`NetworkEntityObjectIssueLog`](/game-api/types/global-m-o/networkentityobjectissuelog) | static class |  | 6 |  |
| [`NetworkingUtilities`](/game-api/types/global-m-o/networkingutilities) | static class |  | 1 |  |
| [`NetworkPrefabHashAttribute`](/game-api/types/global-m-o/networkprefabhashattribute) | class | `PropertyAttribute` | 0 |  |
| [`NetworkSceneManager`](/game-api/types/global-m-o/networkscenemanager) | static class |  | 9 |  |
| [`NetworkStarer`](/game-api/types/global-m-o/networkstarer) | class | `NetworkEntityBehaviour` | 7 |  |
| [`NetworkStarer.ChangedDirection`](/game-api/types/global-m-o/networkstarer-changeddirection) | delegate |  | 0 |  |
| [`NetworkStarer.ChangedState`](/game-api/types/global-m-o/networkstarer-changedstate) | delegate |  | 0 |  |
| [`NetworkTransportPackageVersion`](/game-api/types/global-m-o/networktransportpackageversion) | class | `GlobalSettings<NetworkTransportPackageVersion>` | 2 |  |
| [`NewNetworkingProfiler`](/game-api/types/global-m-o/newnetworkingprofiler) | static class |  | 5 |  |
| [`NewSaveData<TSavable, TData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata) | abstract class | `SaveData` | 2 | Base for the current version of a component's save data. `Apply` hands the data to the component's `ISavable<TData>.Load`. |
| [`NoMigrationProvidedException`](/game-api/types/global-m-o/nomigrationprovidedexception) | class | `Exception` | 0 |  |
| [`NonClimbable`](/game-api/types/global-m-o/nonclimbable) | class | `MonoBehaviour`, `IClimbable`, `IIgnoreColliderFlattening`, +1 more | 1 |  |
| [`NonHashedData`](/game-api/types/global-m-o/nonhasheddata) | class | `ScriptableObject` | 1 |  |
| [`NonJointLever`](/game-api/types/global-m-o/nonjointlever) | class | `MonoBehaviour` | 0 | [Buttons and levers](../items/buttons-and-levers.md) |
| [`NonTeleportable`](/game-api/types/global-m-o/nonteleportable) | class | `MonoBehaviour`, `IIgnoreColliderFlattening`, `IDontSplit` | 0 |  |
| [`NormalChunkLoader`](/game-api/types/global-m-o/normalchunkloader) | class | `IChunkLoader` | 1 |  |
| [`NormalFilter`](/game-api/types/global-m-o/normalfilter) | class | `SpawnModifierPointNormal` | 1 |  |
| [`NormalFilter.Create`](/game-api/types/global-m-o/normalfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<NormalFilter>` | 0 |  |
| [`NullChecker`](/game-api/types/global-m-o/nullchecker) | class | `MonoBehaviour` | 1 |  |
| [`NullColorModelPoint`](/game-api/types/global-m-o/nullcolormodelpoint) | class | `IColorModelPoint<NullColorModelPoint>` | 2 | A colour model point that always gives 0 and never changes. A placeholder for when no real point is needed. |
| [`NullConsole`](/game-api/types/global-m-o/nullconsole) | class | `ServerConsole` | 2 |  |
| [`NumericalWidget`](/game-api/types/global-m-o/numericalwidget) | class | `DebugWidget` | 0 |  |

## O

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ObjectDestroyedException`](/game-api/types/global-m-o/objectdestroyedexception) | internal class | `Exception` | 3 |  |
| [`ObjectIssueLog`](/game-api/types/global-m-o/objectissuelog) | class | `GlobalSettings<ObjectIssueLog>` | 5 | Editor-only list of problems found on assets. Its `Add` and assert methods are marked editor-only, so calls to them are compiled out of game builds. |
| [`ObjectIssueLog.Issue`](/game-api/types/global-m-o/objectissuelog-issue) | class |  | 2 |  |
| [`ObjectPipeline`](/game-api/types/global-m-o/objectpipeline) | class |  | 6 | A serializable chain that turns an input object (usually a `Distribution`) into one result, such as picking a random prefab. Used by cave cluster generators and forest encounters. |
| [`ObjectVisualDouble`](/game-api/types/global-m-o/objectvisualdouble) | class | `PooledObject` | 2 |  |
| [`OculusCloudStorage`](/game-api/types/global-m-o/oculuscloudstorage) | static class |  | 2 |  |
| [`OculusDeepLinkService`](/game-api/types/global-m-o/oculusdeeplinkservice) | static class |  | 3 |  |
| [`OculusVirtualInputField`](/game-api/types/global-m-o/oculusvirtualinputfield) | class | `VirtualInputFieldBase` | 0 |  |
| [`OfflinePlayerProgress`](/game-api/types/global-m-o/offlineplayerprogress) | class |  | 2 |  |
| [`OfflinePlayerProgressionHandler`](/game-api/types/global-m-o/offlineplayerprogressionhandler) | class | `NetworkEntityBehaviour`, `ISavable<OfflinePlayerProgressionHandlerSaveData>`, `ISavableSave<OfflinePlayerProgressionHandlerSaveData>`, +1 more | 6 |  |
| [`OfflinePlayerProgressionHandlerSaveData`](/game-api/types/global-m-o/offlineplayerprogressionhandlersavedata) | class | `NewSaveData<OfflinePlayerProgressionHandler, OfflinePlayerProgressionHandlerSaveData>` | 1 |  |
| [`OldSaveData`](/game-api/types/global-m-o/oldsavedata) | abstract class | `SaveData` | 1 | Base for retired save data formats. Its `Apply` refuses to load them. |
| [`OldVisibilityTest`](/game-api/types/global-m-o/oldvisibilitytest) | static class |  | 1 |  |
| [`OnCollidedEventTrigger`](/game-api/types/global-m-o/oncollidedeventtrigger) | class | `MonoBehaviour` | 0 |  |
| [`OnDestroyEvent`](/game-api/types/global-m-o/ondestroyevent) | class | `NetworkEntityBehaviour` | 1 |  |
| [`OneTimeEvent<T>`](/game-api/types/global-m-o/onetimeevent-t) | class | `TrackedEvent<T>` | 5 |  |
| [`OneTimeEventTest`](/game-api/types/global-m-o/onetimeeventtest) | class | `MonoBehaviour` | 0 |  |
| [`OneTimeUnityEvent`](/game-api/types/global-m-o/onetimeunityevent) | class | `MonoBehaviour` | 2 |  |
| [`OneTimeUpgradeInteraction`](/game-api/types/global-m-o/onetimeupgradeinteraction) | class | `StatUpgradeTarget`, `ISavable<OneTimeUpgradeSaveData>`, `ISavableSave<OneTimeUpgradeSaveData>`, +1 more | 2 |  |
| [`OneTimeUpgradeSaveData`](/game-api/types/global-m-o/onetimeupgradesavedata) | internal class | `NewSaveData<OneTimeUpgradeInteraction, OneTimeUpgradeSaveData>` | 1 |  |
| [`OnHeld`](/game-api/types/global-m-o/onheld) | delegate |  | 0 |  |
| [`OnScreenErrorLogger`](/game-api/types/global-m-o/onscreenerrorlogger) | class | `MonoBehaviour` | 0 |  |
| [`OpenClientLogs`](/game-api/types/global-m-o/openclientlogs) | class | `AltaMenuItemBase.Township.Logs` | 1 |  |
| [`OpenServerLogs`](/game-api/types/global-m-o/openserverlogs) | class | `AltaMenuItemBase.Township.Logs` | 1 |  |
| [`OpenXRControllerInput`](/game-api/types/global-m-o/openxrcontrollerinput) | class | `ControllerInput` | 5 |  |
| [`OpenXRDeviceController`](/game-api/types/global-m-o/openxrdevicecontroller) | class | `XrDeviceSdkController` | 4 |  |
| [`OpenXRDeviceLifecycle`](/game-api/types/global-m-o/openxrdevicelifecycle) | class | `VirtualRealityDeviceLifecycle` | 1 |  |
| [`OpenXRInputController`](/game-api/types/global-m-o/openxrinputcontroller) | abstract class | `DeviceInputController` | 3 | Client: reads one hand's controller through OpenXR and fills the game's controller input, including velocity, finger curl and pose. |
| [`OpenXRWrapper`](/game-api/types/global-m-o/openxrwrapper) | class | `InputMap.IPlayingActions`, `InputMap.IPlayingGenericActions`, `InputMap.IPlayingBaseActions`, +1 more | 37 | Receives OpenXR input action callbacks and turns them into per-hand `OpenXRControllerInput` state. Implements the callback interfaces of all four playing action maps; client only. |
| [`OperatedValue`](/game-api/types/global-m-o/operatedvalue) | class | `MonoBehaviour` | 6 |  |
| [`OptimisedChunkLoader`](/game-api/types/global-m-o/optimisedchunkloader) | class | `IChunkLoader` | 1 |  |
| [`OptimizationManager`](/game-api/types/global-m-o/optimizationmanager) | class | `MonoBehaviour` | 4 |  |
| [`OrbitalInspector`](/game-api/types/global-m-o/orbitalinspector) | class | `InteractorInspector` | 1 |  |
| [`OverridableSettings`](/game-api/types/global-m-o/overridablesettings) | abstract class | `ScriptableObject` | 4 |  |
| [`OverrideBodySettings`](/game-api/types/global-m-o/overridebodysettings) | class | `MonoBehaviour` | 0 |  |
| [`OverrideMask`](/game-api/types/global-m-o/overridemask) | enum |  | 6 |  |
| [`OwnedShopItemExtensions`](/game-api/types/global-m-o/ownedshopitemextensions) | static class |  | 1 |  |
