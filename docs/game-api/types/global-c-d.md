---
title: "No namespace: C to D"
description: "Root.Township types with no namespace, C to D."
sidebar_position: 16
---

# No namespace: C to D

Types in `Root.Township` with no namespace (the global namespace), from C to D. 275 types, 15 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## C

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CachedSyncChannel`](/game-api/types/global-c-d/cachedsyncchannel) | internal class | `IDisposable` | 3 |  |
| [`CameraClaimer`](/game-api/types/global-c-d/cameraclaimer) | class | `MonoBehaviour` | 0 |  |
| [`CameraStabelizer`](/game-api/types/global-c-d/camerastabelizer) | class | `MonoBehaviour` | 1 |  |
| [`CapPickup`](/game-api/types/global-c-d/cappickup) | class | `Pickup` | 2 | [Items, interaction and damage](../items/overview.md) |
| [`CaptainsWheel`](/game-api/types/global-c-d/captainswheel) | class | `MonoBehaviour` | 2 | A turnable wheel that adds up how far it has been turned into a running value, checked every LateUpdate. The angle is measured to the world origin in the wheel's local XY plane. |
| [`CastToSurfaceEffect`](/game-api/types/global-c-d/casttosurfaceeffect) | class | `DestroyByTime`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 |  |
| [`CaveSeedArguments`](/game-api/types/global-c-d/caveseedarguments) | struct |  | 7 | Message the cave generator (`GenerationBase`) sends to clients so they generate the same cave layer: seed, layer, entrance and the layer's streamer entity. |
| [`CaveTeleporterReplacer`](/game-api/types/global-c-d/caveteleporterreplacer) | class | `GenericReplacer` | 2 |  |
| [`CaveTeleporterReplacerAnimator`](/game-api/types/global-c-d/caveteleporterreplaceranimator) | class |  | 1 |  |
| [`CenterOfMassSetter`](/game-api/types/global-c-d/centerofmasssetter) | class | `MonoBehaviour` | 4 | Sets a rigidbody's centre of mass and keeps its inertia tensor sane. `Hand` adds a temporary one to held pickups and removes it once they're let go. |
| [`CentralGoldCoinBank`](/game-api/types/global-c-d/centralgoldcoinbank) | class | `PerPlayerManager<CentralGoldCoinBank, PlayerGoldBankAccount, PlayerGoldBankAccountData>` | 0 | [Trading](../game-systems/trading.md) |
| [`CharacterControllerEvent`](/game-api/types/global-c-d/charactercontrollerevent) | class | `AltaEvent<PlayerController, CharacterControllerUnityEvent>` | 0 | Serializable `AltaEvent` that passes a `PlayerController`, for inspector-wired callbacks. |
| [`CharacterControllerUnityEvent`](/game-api/types/global-c-d/charactercontrollerunityevent) | class | `UnityEvent<PlayerController>` | 0 |  |
| [`CharacterDummyController`](/game-api/types/global-c-d/characterdummycontroller) | class | `PlayerController` | 2 |  |
| [`CharacterDummyPointer`](/game-api/types/global-c-d/characterdummypointer) | class | `MonoBehaviour` | 1 | Component that points at a `CharacterDummy`, so other code can find the dummy from this object. |
| [`CharacterDummySpawner`](/game-api/types/global-c-d/characterdummyspawner) | class | `CharacterDummyPointer` | 1 |  |
| [`CharacterIKController`](/game-api/types/global-c-d/characterikcontroller) | class | `NetworkEntityBehaviour`, `IInitializeAsLocalPlayer` | 13 | Runs a player character's IK (body following head and hands) and lets it be turned off, for example for out-of-body moments, with the change synced to other players. On every player character. |
| [`CharacterInfo`](/game-api/types/global-c-d/characterinfo) | class |  | 10 | Shortcuts to a player's controller, head, hands and interactors. Each `PlayerController` makes one as `Info`. |
| [`CharacterPoseSaver`](/game-api/types/global-c-d/characterposesaver) | class | `ControllerInputButtonPressed` | 0 |  |
| [`CharacterRigPoser`](/game-api/types/global-c-d/characterrigposer) | class |  | 2 | Copies a player character's pose onto a dummy rig, bone by bone from the root outwards, over a set time. Used by `EquipmentCustomizationRoom`. |
| [`CharacterShellHelper`](/game-api/types/global-c-d/charactershellhelper) | class | `ScriptHelper` | 1 |  |
| [`CheckPoint`](/game-api/types/global-c-d/checkpoint) | class | `NetworkEntityBehaviour`, `ISavable<CheckPointData>`, `ISavableSave<CheckPointData>`, +1 more | 4 |  |
| [`CheckPointData`](/game-api/types/global-c-d/checkpointdata) | class | `NewSaveData<CheckPoint, CheckPointData>` | 2 |  |
| [`ChildCheckOnOwned`](/game-api/types/global-c-d/childcheckonowned) | class | `NetworkEntityBehaviour` | 1 |  |
| [`ChildSyncableCollection<T, TThis, TSaveData, TElementSaveData>`](/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata) | abstract class | `ChildSyncableCollectionBase<T>`, `ISavable<TSaveData>`, `ISavableSave<TSaveData>`, +1 more | 4 | Base for a component that holds a list of small child elements (heat points, forged points, woodcut points, ghost snap slots) and syncs and saves them as one. Sends only changed children, or one value when all are the same. |
| [`ChildSyncableCollectionBase<T>`](/game-api/types/global-c-d/childsyncablecollectionbase-t) | abstract class | `NetworkEntityBehaviour` | 7 | Base for a component that syncs a list of child items (woodcut points, forged points) on its entity, in full or one at a time. |
| [`ChildSyncableCollectionSaveData<TThis, TSavable, TData>`](/game-api/types/global-c-d/childsyncablecollectionsavedata-tthis-tsavable-tdata) | class | `NewSaveData<TSavable, TThis>` | 1 | Save data for a `ChildSyncableCollection`: one saved element per child, in child order. |
| [`ChiselRecipePageProvider`](/game-api/types/global-c-d/chiselrecipepageprovider) | class | `GeneratedPageProvider<ChiselDefinition>` | 5 |  |
| [`ChiselRecipePageSettings`](/game-api/types/global-c-d/chiselrecipepagesettings) | class | `GlobalSettings<ChiselRecipePageSettings>` | 4 |  |
| [`ChiselRecipePageSettings.Create`](/game-api/types/global-c-d/chiselrecipepagesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<ChiselRecipePageSettings>` | 0 |  |
| [`ChiselSplineParticlesPooled`](/game-api/types/global-c-d/chiselsplineparticlespooled) | class | `SplineParticlesPooled` | 3 |  |
| [`ChooseRandomChild`](/game-api/types/global-c-d/chooserandomchild) | class | `MonoBehaviour` | 0 |  |
| [`ChunkBasedEnvironment`](/game-api/types/global-c-d/chunkbasedenvironment) | class | `MonoBehaviour` | 0 |  |
| [`ChunkConverter`](/game-api/types/global-c-d/chunkconverter) | class | `TypeConverter` | 2 |  |
| [`ChunkDetector`](/game-api/types/global-c-d/chunkdetector) | class | `NetworkEntityBehaviour` | 4 | [Chunks](../world/chunks.md#chunkdetector): `ChunkDetector` (a `NetworkEntityBehaviour`, no namespace) is how most moving things keep their chunk right. |
| [`Chunker`](/game-api/types/global-c-d/chunker) | class | `IChunker` | 17 | [Chunks](../world/chunks.md#chunker-how-an-entity-belongs-to-a-chunk): Every `NetworkEntity` makes one in its constructor. It's `protected` on `NetworkEntity` (reach it as `((IChunkedEntity)entity).Chunker`). |
| [`ChunkerChangedHandler`](/game-api/types/global-c-d/chunkerchangedhandler) | delegate |  | 0 | Delegate raised when an object's `Chunker` changes, with the old and new chunker. |
| [`ChunkerHelper`](/game-api/types/global-c-d/chunkerhelper) | static class |  | 2 |  |
| [`ChunkEventHandler`](/game-api/types/global-c-d/chunkeventhandler) | delegate |  | 0 | Callback with a chunk, used by `NetworkEntity.AddedToChunk`, `RemovedFromChunk` and `Chunker.EnteredChunk`. |
| [`ChunkingParent`](/game-api/types/global-c-d/chunkingparent) | class | `MonoBehaviour` | 0 |  |
| [`ChunkingPrefabFolder`](/game-api/types/global-c-d/chunkingprefabfolder) | class | `MonoBehaviour`, `IDestroyOnBake` | 0 |  |
| [`ChunkingPrefabReplace`](/game-api/types/global-c-d/chunkingprefabreplace) | class | `MonoBehaviour`, `IBakeable` | 5 |  |
| [`ChunkPhysicsResolver`](/game-api/types/global-c-d/chunkphysicsresolver) | class | `NetworkEntityBehaviour` | 3 |  |
| [`ChunkSetEventHandler`](/game-api/types/global-c-d/chunkseteventhandler) | delegate |  | 0 |  |
| [`ChunksToSync`](/game-api/types/global-c-d/chunkstosync) | internal struct |  | 2 | Message the server sends a player's `PlayerChunkManager` with the chunk they are in and every chunk loaded for them. Up to 127 loaded chunks. |
| [`ClassSerializationHelper`](/game-api/types/global-c-d/classserializationhelper) | static class |  | 4 |  |
| [`ClassSerializationHelper.Finalize<T>`](/game-api/types/global-c-d/classserializationhelper-finalize-t) | delegate |  | 0 | Callback for `ClassSerializationHelper.Prepare`, called once with the read and write delegates it built for a type. |
| [`ClassSerializationHelper.MemberHandler<T>`](/game-api/types/global-c-d/classserializationhelper-memberhandler-t) | delegate |  | 0 | Handler that builds the stream read and write actions for one reflected field or property, given its type and getter and setter delegates. Used when preparing reflection-based save serializers. |
| [`ClassSerializer<T>`](/game-api/types/global-c-d/classserializer-t) | class | `Sync` | 3 | A `Sync` that writes a plain object to an entity message by calling a serialize delegate you pass in, using the latest chunk versioning. |
| [`CleaningHelper`](/game-api/types/global-c-d/cleaninghelper) | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 0 |  |
| [`ClickedEndEventHandler`](/game-api/types/global-c-d/clickedendeventhandler) | delegate |  | 0 | Callback for a controller action ending, with the player input and whether it ended because the action was disabled. |
| [`ClickedEventHandler`](/game-api/types/global-c-d/clickedeventhandler) | delegate |  | 0 | Callback for when a controller action starts, given the `PlayerInput` it came from. |
| [`ClientCommandHandler`](/game-api/types/global-c-d/clientcommandhandler) | class |  | 4 | Server side handler for one remote console connection: reads framed commands from the socket on its own thread, runs console commands and streams log output back. Created by `ClientHandler`. |
| [`ClientHandler`](/game-api/types/global-c-d/clienthandler) | class | `IRemoteConsoleHandler` | 7 | Server: one connected remote console client. Made by `ServerRemoteConsole` from the socket and the client's JWT, and wraps a command handler and log sender. |
| [`ClientJoinResult`](/game-api/types/global-c-d/clientjoinresult) | enum |  | 19 | [Joining a server](../networking/joining.md): Enum of join outcomes, 1 to 13 from Alta's API, 30 to 35 from the connection. |
| [`ClientLogSender`](/game-api/types/global-c-d/clientlogsender) | class |  | 2 | [Remote console](../console-and-utilities/remote-console.md) |
| [`Climbable`](/game-api/types/global-c-d/climbable) | class | `MonoBehaviour`, `IClimbable` | 12 | Marks a surface players can climb. Hands add pressure each physics step, and the grip breaks if it goes over the maximum. |
| [`Climber`](/game-api/types/global-c-d/climber) | class | `SmoothLocomotionModifier` | 10 |  |
| [`ClimberActivator`](/game-api/types/global-c-d/climberactivator) | class | `MonoBehaviour` | 0 |  |
| [`ClimberSettings`](/game-api/types/global-c-d/climbersettings) | class | `GlobalSettings<ClimberSettings>` | 27 | Global settings for an older climbing setup. Nothing else in this build reads it; climbing now uses `ClimbingSettings` through `ClimbingHandler`. |
| [`ClimberSettings.Raycast`](/game-api/types/global-c-d/climbersettings-raycast) | class |  | 2 | A start and end point for one climbing raycast, listed in `ClimberSettings.raycasts`. |
| [`ClimbingSettings`](/game-api/types/global-c-d/climbingsettings) | class | `GlobalSettings<ClimbingSettings>` | 31 | Global settings for climbing: what can be grabbed, how hands pull the body, hand stamina drain and regen, and grab effects. Get it with `ClimbingSettings.Instance`. |
| [`ClothManager`](/game-api/types/global-c-d/clothmanager) | class | `MonoBehaviour` | 0 |  |
| [`Cluster`](/game-api/types/global-c-d/cluster) | class | `NetworkEntityBehaviour` | 5 | A network entity that groups child entities (its parts) and destroys itself on the server once every part is gone. On server spawn it collects the network prefabs under its transform. |
| [`ClusterEntitiesRegisterArguments`](/game-api/types/global-c-d/clusterentitiesregisterarguments) | struct |  | 4 | Message a `RockCluster` sends a joining player with its boulder definition and the IDs of its part entities, so the client can match them up. |
| [`CoinPress`](/game-api/types/global-c-d/coinpress) | class | `NetworkEntityBehaviour` | 1 | [Smelting and forging](../game-systems/smelting-and-forging.md): A lever press that turns what's in its input dock into its `outputItem`. |
| [`CoinPressGear`](/game-api/types/global-c-d/coinpressgear) | class | `MonoBehaviour` | 0 |  |
| [`ColliderAltaEvent`](/game-api/types/global-c-d/collideraltaevent) | class | `AltaEvent<Collider, ColliderUnityEvent>` | 0 | Serializable `AltaEvent` that passes a `Collider`, for inspector-wired callbacks. |
| [`ColliderDebugger`](/game-api/types/global-c-d/colliderdebugger) | class | `MonoBehaviour` | 0 |  |
| [`ColliderExtension`](/game-api/types/global-c-d/colliderextension) | static class |  | 2 |  |
| [`ColliderGroup`](/game-api/types/global-c-d/collidergroup) | class | `ComponentGroup<Collider>` | 8 | A `ComponentGroup` of colliders with helpers to switch them on and off, set their layer, and ignore collisions with other colliders. |
| [`ColliderPositionHelper`](/game-api/types/global-c-d/colliderpositionhelper) | class | `PositionFromOriginHelper` | 1 |  |
| [`ColliderUnityEvent`](/game-api/types/global-c-d/colliderunityevent) | class | `UnityEvent<Collider>` | 0 |  |
| [`CollisionHaptic`](/game-api/types/global-c-d/collisionhaptic) | class | `MonoBehaviour` | 1 |  |
| [`CollisionSoundEmitter`](/game-api/types/global-c-d/collisionsoundemitter) | class | `MonoBehaviour` | 0 |  |
| [`ColorApiResponse`](/game-api/types/global-c-d/colorapiresponse) | internal class |  | 1 |  |
| [`ColorBoard`](/game-api/types/global-c-d/colorboard) | class | `MonoBehaviour` | 0 |  |
| [`ColorBoardItem`](/game-api/types/global-c-d/colorboarditem) | class | `MonoBehaviour` | 2 | One colour swatch on a cosmetics colour board. Shows its `CosmeticColor` on its own material, and plays an effect when a brush is dipped in it. |
| [`ColoredExplosive`](/game-api/types/global-c-d/coloredexplosive) | class | `Explosive`, `ISavable<ColoredExplosiveData>`, `ISavableSave<ColoredExplosiveData>`, +2 more | 3 |  |
| [`ColoredExplosiveData`](/game-api/types/global-c-d/coloredexplosivedata) | class | `NewSaveData<ColoredExplosive, ColoredExplosiveData>` | 1 |  |
| [`ColoredParticleSystem`](/game-api/types/global-c-d/coloredparticlesystem) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 4 | Client: recolours a set of particle systems, their renderer materials (and trails) and an optional light together. Put on a particle effect prefab; does nothing on the headless server. |
| [`ColoredPooledParticleSpawner`](/game-api/types/global-c-d/coloredpooledparticlespawner) | class | `MonoBehaviour` | 5 | Spawns a pooled particle effect and colours it to a liquid, for example a potion splash. |
| [`ColorEvent`](/game-api/types/global-c-d/colorevent) | class | `AltaEvent<Color, ColorUnityEvent>` | 0 | Inspector event with a `Color` argument. |
| [`ColorFadeRelease`](/game-api/types/global-c-d/colorfaderelease) | class | `DelayedPooledObject` | 0 |  |
| [`ColorLerp`](/game-api/types/global-c-d/colorlerp) | class | `MonoBehaviour` | 2 | Blends between two colours by a value and sends the result to a colour event. Wire it to other components in the inspector. |
| [`ColorModel<TR, TG, TB, TA>`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta) | class | `NetworkEntityBehaviour` | 7 | Base for a networked object whose mesh vertex colours are driven by values on its bones, one channel per point type. Forging's `HeatModel` uses it for metal heat glow. Visual only: does nothing on a headless server. |
| [`ColorModelCore<TR, TG, TB, TA>`](/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta) | class |  | 18 | Works out vertex colours for a mesh from values on its bones, one channel per point list, and reports when any channel leaves its default. Used by `ColorModel` (forging heat) and woodcut trees. |
| [`ColorUnityEvent`](/game-api/types/global-c-d/colorunityevent) | class | `UnityEvent<Color>` | 0 |  |
| [`CombatEventHandler`](/game-api/types/global-c-d/combateventhandler) | delegate |  | 0 | Handler for `CausedCombat` on `PlayerController` and `PlayerEventsManager`: who attacked, what was hit, the squared distance ratio between them, and the damage. |
| [`CombatImpactProgressionFilter`](/game-api/types/global-c-d/combatimpactprogressionfilter) | class | `BaseImpactChannelProgressionFilter` | 1 |  |
| [`CombatImpactProgressionFilter.Create`](/game-api/types/global-c-d/combatimpactprogressionfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Filters.ScriptableObject<CombatImpactProgressionFilter>` | 0 |  |
| [`CombinedMeshSource`](/game-api/types/global-c-d/combinedmeshsource) | class | `MonoBehaviour`, `IEditorProcessable` | 1 |  |
| [`CommonPrefabs`](/game-api/types/global-c-d/commonprefabs) | class | `GlobalSettings<CommonPrefabs>` | 8 | Global settings asset with shortcuts to prefabs and items used everywhere: pouch, coin, pages and the player template. Read through the static properties. |
| [`CommonPrefabs.Create`](/game-api/types/global-c-d/commonprefabs-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<CommonPrefabs>` | 0 |  |
| [`ComponentCounter`](/game-api/types/global-c-d/componentcounter) | class | `MonoBehaviour` | 0 |  |
| [`ComponentEventSubscriber`](/game-api/types/global-c-d/componenteventsubscriber) | class | `IDisposable` | 2 | Subscribes a component's handler to an event and unsubscribes itself, with an error log, if the component has been destroyed when the event fires. Dispose to unsubscribe. |
| [`ComponentGroup<T>`](/game-api/types/global-c-d/componentgroup-t) | class | `MonoBehaviour`, `IReadOnlyCollection<T>`, `IEnumerable<T>`, +3 more | 8 | A component that keeps a list of other components of one type, usually filled from its children in the editor. `ColliderGroup` builds on it. |
| [`ComponentGroup<T>.GroupModifiedHandler`](/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler) | delegate |  | 0 | Handler for a `ComponentGroup`'s `ItemAdded` and `ItemRemoved` events, given the group and the item. |
| [`ComponentHistoryAccess`](/game-api/types/global-c-d/componenthistoryaccess) | class | `HistoryAccess` | 1 |  |
| [`ComponentInspector`](/game-api/types/global-c-d/componentinspector) | class | `InspectorBase` | 7 | In-game bubble inspector node for one component. Interacting with it spreads bubbles for the component's exposed methods and values around it, and interacting again removes them. |
| [`CompressionUtilities`](/game-api/types/global-c-d/compressionutilities) | class | `MonoBehaviour` | 2 |  |
| [`ComputeShaderDarknessReader`](/game-api/types/global-c-d/computeshaderdarknessreader) | class | `DarknessReaderMethod` | 1 |  |
| [`ConfigurableJointExtensions`](/game-api/types/global-c-d/configurablejointextensions) | static class |  | 3 |  |
| [`ConglomerateDestroyByTime`](/game-api/types/global-c-d/conglomeratedestroybytime) | class | `DestroyByTime` | 1 |  |
| [`ConsoleDisplay`](/game-api/types/global-c-d/consoledisplay) | class | `MonoBehaviour` | 0 |  |
| [`ConsoleOption`](/game-api/types/global-c-d/consoleoption) | class |  | 5 |  |
| [`ConsumptionManager`](/game-api/types/global-c-d/consumptionmanager) | class | `MonoBehaviour` | 4 | [Hunger, eating and drinking](../game-systems/hunger-and-eating.md#consumptionmanager): `ConsumptionManager : MonoBehaviour`, top level, no namespace. One per player body. `Player` gives the body's `PlayerController`. |
| [`ControlledAnimation`](/game-api/types/global-c-d/controlledanimation) | class | `MonoBehaviour` | 1 |  |
| [`ControlledRotateAndShake`](/game-api/types/global-c-d/controlledrotateandshake) | class | `MonoBehaviour` | 2 |  |
| [`Controller`](/game-api/types/global-c-d/controller) | class | `NetworkEntityBehaviour` | 17 | One hand of a player: the network behaviour that holds the grip point, the `Hand`, the input and the controller extensions such as the `Interactor`. Both sides; reach one through `PlayerController.LeftController` or `RightController`. |
| [`ControllerAction`](/game-api/types/global-c-d/controlleraction) | class | `IControllerAction` | 10 | Client: one input action (such as interact or jump) for a player's hand, bound to one or more buttons, key pairs, D-pad directions or swipes from the platform mapping. Reads as a bool for whether it is held. |
| [`ControllerActionEventHandler`](/game-api/types/global-c-d/controlleractioneventhandler) | delegate |  | 0 | Handler for a `ControllerActionProxy`'s `Enabled` and `Disabled` events, given the proxy. |
| [`ControllerActionMode`](/game-api/types/global-c-d/controlleractionmode) | class |  | 7 | One controller input mode (for example a held item's mode) with action mappings per player mode (Oculus, OpenVR, fly cam, auto cam) plus a shared all-platform mapping. |
| [`ControllerActionProxy`](/game-api/types/global-c-d/controlleractionproxy) | class | `IControllerAction` | 10 | A stand-in controller action that forwards the state and events of whichever `ControllerAction` it is linked to, and can be switched off on its own. Client input. |
| [`ControllerActions`](/game-api/types/global-c-d/controlleractions) | class |  | 8 | One hand's set of `ControllerAction`s, one per `ControllerActionType`, bound to buttons by `PlatformActionMapping`s. Owned by `PlayerInput`. |
| [`ControllerActionsManager`](/game-api/types/global-c-d/controlleractionsmanager) | class | `MonoBehaviour` | 7 | Per-hand component that holds the hand's `ControllerActions` and adds, sets or removes controller modes (input mapping sets) for the active XR platform. On each `PlayerInput`. |
| [`ControllerActionsManagerProxy`](/game-api/types/global-c-d/controlleractionsmanagerproxy) | class |  | 5 | A stable set of `ControllerActionProxy` objects, one per controller action type, that can be relinked to whichever `ControllerActionsManager` is current. Each `Controller` has one as `ActionsManager`. |
| [`ControllerActionType`](/game-api/types/global-c-d/controlleractiontype) | enum |  | 35 | Every action a hand controller can trigger: interact, grab, teleport, rotate, quick access menu, mute, screenshot, and a set of debug actions. The numbers are fixed IDs. |
| [`ControllerDPad`](/game-api/types/global-c-d/controllerdpad) | class |  | 11 | Turns a hand's touchpad and thumbstick input into numbered directions and four-way swipes. Made by `PlayerInput`; call `OnEnable` and `Update` to drive it. Client side. |
| [`ControllerExtension`](/game-api/types/global-c-d/controllerextension) | abstract class | `MonoBehaviour` | 9 | Base for a component that adds behaviour to a player's hand controller, placed under the ghost hand or the IK hand. Runs on every copy of the player; `IsLocal` tells you if it's yours. |
| [`ControllerExtensionGroup`](/game-api/types/global-c-d/controllerextensiongroup) | class | `ComponentGroup<ControllerExtension>` | 0 | A `ComponentGroup` of `ControllerExtension`s. `Controller` instantiates these groups to add extensions to a hand. |
| [`ControllerInput`](/game-api/types/global-c-d/controllerinput) | class |  | 33 | A snapshot of one hand controller's input: buttons, sticks, finger curl and hand velocity. `SetAndCallEvents` copies a new snapshot in and fires the button events that changed. |
| [`ControllerInputButtonPressed`](/game-api/types/global-c-d/controllerinputbuttonpressed) | abstract class | `MonoBehaviour` | 0 |  |
| [`ControllerMod`](/game-api/types/global-c-d/controllermod) | abstract class | `ModBase` | 0 |  |
| [`ControllerModeSettings`](/game-api/types/global-c-d/controllermodesettings) | class | `ScriptableObject` | 6 | Scriptable object listing `ControllerActionMode`s, looked up by `ControllerModeType`. |
| [`ControllerModeType`](/game-api/types/global-c-d/controllermodetype) | enum |  | 11 | The kinds of controller mode the player's hands can be in, such as play, combat, teleport, interact, customization and debug. |
| [`ControllerOffsetSettings`](/game-api/types/global-c-d/controlleroffsetsettings) | class | `ScriptableObject` | 1 | Scriptable object with per-platform transform offsets for each VR controller hand. |
| [`CopyBone`](/game-api/types/global-c-d/copybone) | class | `MonoBehaviour` | 0 |  |
| [`CopyBoneGroup`](/game-api/types/global-c-d/copybonegroup) | class | `ComponentGroup<CopyBone>` | 1 |  |
| [`CopyToRenderTexture`](/game-api/types/global-c-d/copytorendertexture) | class | `MonoBehaviour` | 0 |  |
| [`CopyTransform`](/game-api/types/global-c-d/copytransform) | class | `MonoBehaviour` | 0 |  |
| [`CoroutineAwaiter`](/game-api/types/global-c-d/coroutineawaiter) | static class |  | 2 |  |
| [`CorrectedRotationSlerp`](/game-api/types/global-c-d/correctedrotationslerp) | class | `MonoBehaviour` | 1 |  |
| [`CosmeticDefinitionSku`](/game-api/types/global-c-d/cosmeticdefinitionsku) | class |  | 4 | A cosmetic store SKU plus the customization arguments that go with it, set in the inspector. |
| [`CosmeticFilterSkuAttribute`](/game-api/types/global-c-d/cosmeticfilterskuattribute) | class | `CosmeticFilterAttribute` | 1 |  |
| [`CosmeticPackingManager`](/game-api/types/global-c-d/cosmeticpackingmanager) | class | `MonoBehaviour` | 0 |  |
| [`CosmeticParticleColorer`](/game-api/types/global-c-d/cosmeticparticlecolorer) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| [`CosmeticSkuAttribute`](/game-api/types/global-c-d/cosmeticskuattribute) | class | `PropertyAttribute` | 0 |  |
| [`CountTracker<T>`](/game-api/types/global-c-d/counttracker-t) | class | `IEnumerable<T>`, `IEnumerable` | 6 | Reference-counted set: tracks how many times each item was added and reports when one first appears or is fully removed. |
| [`Crank`](/game-api/types/global-c-d/crank) | class | `NetworkEntityBehaviour`, `ISavable<CrankSaveData>`, `ISavableSave<CrankSaveData>`, +2 more | 5 | A handle you grab and turn, giving a value from 0 to 1 that changes with each turn. Server side by default; set `isRunningOnClients` to work it out on each client instead. |
| [`CrankControlledRope`](/game-api/types/global-c-d/crankcontrolledrope) | class | `MonoBehaviour` | 0 |  |
| [`CrankController`](/game-api/types/global-c-d/crankcontroller) | class | `MonoBehaviour` | 0 |  |
| [`CrankSaveData`](/game-api/types/global-c-d/cranksavedata) | internal class | `NewSaveData<Crank, CrankSaveData>` | 1 |  |
| [`CreateLOD`](/game-api/types/global-c-d/createlod) | class | `MonoBehaviour` | 0 |  |
| [`CrippleStatDefinition`](/game-api/types/global-c-d/cripplestatdefinition) | class | `StatDefinition` | 1 | [Stats](../game-systems/stats.md) |
| [`CrippleStatDefinition.Create`](/game-api/types/global-c-d/cripplestatdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<CrippleStatDefinition>` | 0 |  |
| [`CrystalsAvailablePointManager`](/game-api/types/global-c-d/crystalsavailablepointmanager) | class | `AvailablePointVisualizerManager` | 4 |  |
| [`CsvWriter`](/game-api/types/global-c-d/csvwriter) | static class |  | 2 |  |
| [`CubeMapUpdater`](/game-api/types/global-c-d/cubemapupdater) | class | `MonoBehaviour` | 1 |  |
| [`CullingController`](/game-api/types/global-c-d/cullingcontroller) | class | `NetworkEntityBehaviour`, `IInitializeAsLocalPlayer` | 0 |  |
| [`CullingGroupHandler`](/game-api/types/global-c-d/cullinggrouphandler) | class | `MonoBehaviour` | 2 |  |
| [`CullingPortal`](/game-api/types/global-c-d/cullingportal) | class | `MonoBehaviour` | 8 | A portal between two chunks (mostly cave layers) that can hide or show the static renderers in a box on either side. Registers itself with both chunks' connections. |
| [`Curve`](/game-api/types/global-c-d/curve) | class | `HashedGeneralValue<Curve>` | 1 | A hashed asset wrapping an `AnimationCurve`, stored under `StatDefinition/Curves`. |
| [`Curve.Create`](/game-api/types/global-c-d/curve-create) | class | `AltaMenuItemBase.Assets.Create.Utility.ScriptableObject<Curve>` | 0 |  |
| [`CurveElevation`](/game-api/types/global-c-d/curveelevation) | class | `MonoBehaviour` | 1 | Drives an "Elevation" animator state from a progress value, so an object rises or lowers with a curve. |
| [`CurveOutput`](/game-api/types/global-c-d/curveoutput) | class | `NetworkEntityBehaviour`, `ISavable<CurveOutputSaveData>`, `ISavableSave<CurveOutputSaveData>`, +1 more | 7 |  |
| [`CurveOutputSaveData`](/game-api/types/global-c-d/curveoutputsavedata) | class | `NewSaveData<CurveOutput, CurveOutputSaveData>` | 2 | Save data for a `CurveOutput` logic component (save structure version 1). |
| [`CurveScaler`](/game-api/types/global-c-d/curvescaler) | class | `MonoBehaviour` | 5 | Animates an object's scale between off and on using curves, for example a dock hint or a fake cork that grows and shrinks. |
| [`CurveWall`](/game-api/types/global-c-d/curvewall) | class | `MonoBehaviour`, `IBakeable` | 5 |  |
| [`CurveWall.CurvePoint`](/game-api/types/global-c-d/curvewall-curvepoint) | class |  | 4 | One node of a `CurveWall` Bezier spline: a position and its back and forward handles, both relative to the position. |
| [`CustomArgumentGameAction<T>`](/game-api/types/global-c-d/customargumentgameaction-t) | abstract class | `GameAction` | 1 | Base for a game task action that only checks one kind of task argument. |
| [`CustomFixedJoint`](/game-api/types/global-c-d/customfixedjoint) | class | `MonoBehaviour` | 4 |  |
| [`CustomizationPlayerController`](/game-api/types/global-c-d/customizationplayercontroller) | class | `SmoothLocomotionPlayerController` | 3 | The player controller used in the character customization room: always local and alive, with smooth locomotion, and it hides ghost hands while holding customization pickups. Client side. |
| [`CustomTeleportation`](/game-api/types/global-c-d/customteleportation) | abstract class | `NetworkEntityBehaviour` | 3 | Base for a networked behaviour that replaces the normal teleport logic of a `Teleporter`. Subclasses decide when a teleport may start and what happens at each end. |
| [`CylinderImpactCollector`](/game-api/types/global-c-d/cylinderimpactcollector) | class | `ShapeImpactCollector` | 3 |  |
| [`CylinderImpactCollector.Create`](/game-api/types/global-c-d/cylinderimpactcollector-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Shape.ScriptableObject<CylinderImpactCollector>` | 0 |  |

## D

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DamageDebugDisplay`](/game-api/types/global-c-d/damagedebugdisplay) | class | `MonoBehaviour` | 1 |  |
| [`DamageDisplayer`](/game-api/types/global-c-d/damagedisplayer) | class |  | 3 | [Items, interaction and damage](../items/overview.md) |
| [`DarknessArea`](/game-api/types/global-c-d/darknessarea) | class | `SpaceDefinedAttribute<SpacePoint>` | 1 |  |
| [`DarknessChunkData`](/game-api/types/global-c-d/darknesschunkdata) | class | `ChunkEffect` | 1 |  |
| [`DarknessReader`](/game-api/types/global-c-d/darknessreader) | class | `NetworkEntityBehaviour`, `IInitializeAsLocalPlayer` | 1 | On the player: the local client checks how dark it is around the player and asks the server to spawn darkness for them. The server spawns them through `DarknessSpawnerSettings`. |
| [`DarknessReaderMethod`](/game-api/types/global-c-d/darknessreadermethod) | abstract class |  | 4 | Base for a way of measuring how dark it is around the local player, which can ask for darkness creatures to spawn. Only runs for the local player on a client. |
| [`DarknessSpawnerSettings`](/game-api/types/global-c-d/darknessspawnersettings) | class | `GlobalSettings<DarknessSpawnerSettings>` | 8 | Global settings for spawning creatures in the dark around players. The local client measures screen darkness and asks the server, which spawns near the player. |
| [`DarknessTrigger`](/game-api/types/global-c-d/darknesstrigger) | static class |  | 3 |  |
| [`DateTimeExtensions`](/game-api/types/global-c-d/datetimeextensions) | static class |  | 2 |  |
| [`Debug`](/game-api/types/global-c-d/debug) | static class |  | 15 | [Startup and app state](../console-and-utilities/startup-and-app-state.md), [Connection messages](../networking/messages.md) |
| [`DebugClimbable`](/game-api/types/global-c-d/debugclimbable) | class | `Climbable` | 1 |  |
| [`DebugExtension`](/game-api/types/global-c-d/debugextension) | static class |  | 24 | Static helpers that draw debug shapes with `Debug.DrawRay` and `Debug.DrawLine`. These only show in the Unity editor (scene view, or game view with gizmos on). |
| [`DebugLoader`](/game-api/types/global-c-d/debugloader) | class | `MonoBehaviour` | 1 |  |
| [`DebugLogger`](/game-api/types/global-c-d/debuglogger) | class | `MonoBehaviour` | 2 |  |
| [`DebugQASetManager`](/game-api/types/global-c-d/debugqasetmanager) | static class |  | 1 |  |
| [`DebugWidget`](/game-api/types/global-c-d/debugwidget) | abstract class | `MonoBehaviour` | 1 |  |
| [`DecaySettings`](/game-api/types/global-c-d/decaysettings) | class | `ScriptableObject` | 4 | Asset with decay timing, used by decay components such as `BasicDecay`. |
| [`DecaySettings.Create`](/game-api/types/global-c-d/decaysettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Decay.ScriptableObject<DecaySettings>` | 0 |  |
| [`DeepLinkAnalyticsService`](/game-api/types/global-c-d/deeplinkanalyticsservice) | class | `MonoBehaviour` | 6 |  |
| [`DeepLinkAnalyticsService.DeepLinkEventCancelReason`](/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason) | enum |  | 2 | Reasons a deep link join was cancelled: skipped for the tutorial, or the player was already on the server. Nothing uses this one in this build; `DeeplinkEventCancelReason` is the one passed to `CreateCancelEvent`. |
| [`DeepLinkAnalyticsService.DeeplinkEventCancelReason`](/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global) | enum |  | 1 | Reason passed to `DeepLinkAnalyticsService.CreateCancelEvent` when a deep link join is cancelled. Only has the skipped-for-tutorial reason. |
| [`DeeplinkEventFailReason`](/game-api/types/global-c-d/deeplinkeventfailreason) | enum |  | 5 | Why joining a server from a deeplink failed: server full, banned, private server, wrong version or another error. |
| [`DeepLinkFailureController`](/game-api/types/global-c-d/deeplinkfailurecontroller) | static class |  | 1 |  |
| [`DefaultClimbable`](/game-api/types/global-c-d/defaultclimbable) | class | `IClimbable` | 12 | The climbable used when a grabbed collider has no climbable of its own, so plain surfaces can be climbed. Held by `ClimbingSettings.DefaultClimbable`. |
| [`DeferredBuffers`](/game-api/types/global-c-d/deferredbuffers) | enum |  | 4 |  |
| [`DeferredSynchronizeInvoke`](/game-api/types/global-c-d/deferredsynchronizeinvoke) | class | `ISynchronizeInvoke` | 6 | An `ISynchronizeInvoke` that queues calls from other threads and runs them on the thread that created it when `ProcessQueue` is called. |
| [`DefineProvider`](/game-api/types/global-c-d/defineprovider) | static class |  | 1 |  |
| [`DelayedEnableLerp`](/game-api/types/global-c-d/delayedenablelerp) | class | `EnableLerp` | 0 |  |
| [`DelayedEvent`](/game-api/types/global-c-d/delayedevent) | class | `MonoBehaviour` | 1 |  |
| [`DelayedHoverPickup`](/game-api/types/global-c-d/delayedhoverpickup) | class | `HoverPickup` | 0 |  |
| [`DelayedPooledObject`](/game-api/types/global-c-d/delayedpooledobject) | class | `PooledObject` | 1 |  |
| [`DelayEnable`](/game-api/types/global-c-d/delayenable) | class | `MonoBehaviour` | 0 |  |
| [`DelayEnable.DelayMode`](/game-api/types/global-c-d/delayenable-delaymode) | enum |  | 2 | How `DelayEnable` picks its delay: a random time in a range, or a random point on a curve. |
| [`DeleteMe`](/game-api/types/global-c-d/deleteme) | class | `MonoBehaviour` | 0 |  |
| [`DepthCheckLocoCheck`](/game-api/types/global-c-d/depthchecklococheck) | class | `LocomotionModifierCheck` | 3 |  |
| [`DestroyActionArgument`](/game-api/types/global-c-d/destroyactionargument) | class | `GameTaskActionArgument` | 3 | [Other systems](../game-systems/other-systems.md): `HealthObject`, when a player's tool destroys something |
| [`DestroyByTime`](/game-api/types/global-c-d/destroybytime) | class | `PooledObject` | 3 | A pooled object that releases itself back to its pool a set time after it is requested. Used for short-lived effects. |
| [`DestroyedEventCaller`](/game-api/types/global-c-d/destroyedeventcaller) | class | `MonoBehaviour` | 3 |  |
| [`DestroyHealthObjectTask`](/game-api/types/global-c-d/destroyhealthobjecttask) | class | `CustomArgumentGameAction<DestroyActionArgument>` | 1 |  |
| [`DestroyIfInIncorrectChunk`](/game-api/types/global-c-d/destroyifinincorrectchunk) | class | `NetworkEntityBehaviour` | 1 |  |
| [`DevGameServerInfo`](/game-api/types/global-c-d/devgameserverinfo) | class | `GameServerInfo` | 2 | [Joining a server](../networking/joining.md), [Server settings](../networking/server-settings.md): A `GameServerInfo` with a fixed `ConnectionInfo`. `GetDevServer(ip, port, sceneIndex)`. TavernLib's `/join_local_server` uses it. |
| [`DeviceControllerFactory`](/game-api/types/global-c-d/devicecontrollerfactory) | static class |  | 1 |  |
| [`DeviceInputController`](/game-api/types/global-c-d/deviceinputcontroller) | abstract class |  | 4 | Base for a VR device or fly cam input source (SteamVR, OpenXR, fly cam). Fills a `ControllerInput` each update and pushes it into a `PlayerInput`. Client side. |
| [`DeviceLifecycle`](/game-api/types/global-c-d/devicelifecycle) | abstract class | `IDeviceLifecycle` | 7 | Base for the game's device lifecycles (VR, fly cam, auto cam): hooks for SDK start and stop and the Unity update loop, plus which platform player the device drives. |
| [`DialSetting`](/game-api/types/global-c-d/dialsetting) | class | `MonoBehaviour` | 2 |  |
| [`DiggingImpactor`](/game-api/types/global-c-d/diggingimpactor) | class | `NetworkEntityBehaviour`, `ISavable<DiggingImpactorSaveStructure>`, `ISavableSave<DiggingImpactorSaveStructure>`, +2 more | 4 |  |
| [`DiggingImpactorSaveStructure`](/game-api/types/global-c-d/diggingimpactorsavestructure) | class | `NewSaveData<DiggingImpactor, DiggingImpactorSaveStructure>` | 2 |  |
| [`DiggingImpactorSettings`](/game-api/types/global-c-d/diggingimpactorsettings) | class | `ScriptableObject` | 11 | Settings for a digging tool's `DiggingImpactor`: which hits dig and how deep, how hard it is to pull out, and durability cost, all scaled by hit efficiency. |
| [`DirectionConstrainedRandomMovement`](/game-api/types/global-c-d/directionconstrainedrandommovement) | class | `NetworkEntityBehaviour` | 2 |  |
| [`DirectionMode`](/game-api/types/global-c-d/directionmode) | enum |  | 4 | What smooth locomotion steers by: the head or the controller, and locked variants of each. Set separately for touch and press movement in game settings. |
| [`DirectReplacer`](/game-api/types/global-c-d/directreplacer) | class | `BaseReplacer` | 2 |  |
| [`DiscordController`](/game-api/types/global-c-d/discordcontroller) | class | `MonoBehaviour` | 9 |  |
| [`DiscordLarge`](/game-api/types/global-c-d/discordlarge) | enum |  | 5 | Large image keys for Discord rich presence (splash, town, caves, forest). The lowercased name is sent as the image key. |
| [`DiscordSmall`](/game-api/types/global-c-d/discordsmall) | enum |  | 1 | Small image keys for Discord rich presence. Only `None` exists in this build. |
| [`DisplayMessageType`](/game-api/types/global-c-d/displaymessagetype) | enum |  | 4 | How a display message is queued: added to the queue, shown next, shown next replacing the current one, or shown only when the queue is empty. |
| [`DisposablePickup`](/game-api/types/global-c-d/disposablepickup) | class | `NetworkEntityBehaviour`, `IDisposablePickup` | 3 | Networked behaviour for a pickup that is used up: once disposed it is destroyed (after the player lets go) and not saved. |
| [`DisposablePickupHolder`](/game-api/types/global-c-d/disposablepickupholder) | class | `MonoBehaviour`, `IDisposablePickup`, `IGetChild` | 1 |  |
| [`DissipateToolBasedEffect`](/game-api/types/global-c-d/dissipatetoolbasedeffect) | class | `ToolBasedEffectBase` | 0 |  |
| [`DissolvingEffect`](/game-api/types/global-c-d/dissolvingeffect) | class | `DestroyByTime`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 |  |
| [`DistanceFilter`](/game-api/types/global-c-d/distancefilter) | abstract class | `SpawnModifierPoint` | 1 |  |
| [`DistanceLOD`](/game-api/types/global-c-d/distancelod) | class |  | 4 | One distance level in a `DistanceLODGroup`: a set of renderers turned on or off together, and the squared distance it applies from. |
| [`DistanceLODGroup`](/game-api/types/global-c-d/distancelodgroup) | class | `MonoBehaviour` | 10 | Client: a simple LOD group that switches renderer sets on and off by the local player's distance, driven by a shared `DistanceLODGroupManager`. Removes itself on a headless server. |
| [`DistanceLODGroupManager`](/game-api/types/global-c-d/distancelodgroupmanager) | class |  | 2 | Client: updates every active `DistanceLODGroup` from the local player's position each time the player camera renders. |
| [`DistanceToEdgeFilter`](/game-api/types/global-c-d/distancetoedgefilter) | class | `DistanceFilter` | 0 |  |
| [`DistanceToEdgeFilter.Create`](/game-api/types/global-c-d/distancetoedgefilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<DistanceToEdgeFilter>` | 0 |  |
| [`DistanceToLine`](/game-api/types/global-c-d/distancetoline) | static class |  | 12 |  |
| [`DistanceToLineTest`](/game-api/types/global-c-d/distancetolinetest) | class | `MonoBehaviour` | 0 |  |
| [`DistanceToPathFilter`](/game-api/types/global-c-d/distancetopathfilter) | class | `DistanceFilter` | 0 |  |
| [`DistanceToPathFilter.Create`](/game-api/types/global-c-d/distancetopathfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<DistanceToPathFilter>` | 0 |  |
| [`DistanceToRiverFilter`](/game-api/types/global-c-d/distancetoriverfilter) | class | `DistanceFilter` | 0 |  |
| [`DistanceToRiverFilter.Create`](/game-api/types/global-c-d/distancetoriverfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<DistanceToRiverFilter>` | 0 |  |
| [`DmgTDisplay`](/game-api/types/global-c-d/dmgtdisplay) | class | `MonoBehaviour` | 0 |  |
| [`DockableJoints`](/game-api/types/global-c-d/dockablejoints) | class | `Pickup` | 0 |  |
| [`DockByDefault`](/game-api/types/global-c-d/dockbydefault) | class | `GeneratedNetworkEntityBehaviour` | 0 | [Items, interaction and damage](../items/overview.md) |
| [`DockCounter`](/game-api/types/global-c-d/dockcounter) | class | `MonoBehaviour` | 0 |  |
| [`DockedFireLogic`](/game-api/types/global-c-d/dockedfirelogic) | class | `MonoBehaviour` | 1 |  |
| [`DockEvents`](/game-api/types/global-c-d/dockevents) | class | `AbstractDockEvents` | 0 |  |
| [`DockObjectTask`](/game-api/types/global-c-d/dockobjecttask) | class | `HashSetAction<DockObjectTaskArgument>` | 1 |  |
| [`DockObjectTaskArgument`](/game-api/types/global-c-d/dockobjecttaskargument) | class | `GameTaskActionArgument` | 6 | [Other systems](../game-systems/other-systems.md) |
| [`DontDestroyOnLoad`](/game-api/types/global-c-d/dontdestroyonload) | class | `MonoBehaviour` | 1 |  |
| [`DontGoThroughObjects`](/game-api/types/global-c-d/dontgothroughobjects) | class | `MonoBehaviour` | 3 |  |
| [`Door`](/game-api/types/global-c-d/door) | abstract class | `NetworkEntityBehaviour`, `ISavable<DoorSaveData>`, `ISavableSave<DoorSaveData>`, +1 more | 4 |  |
| [`DoorSaveData`](/game-api/types/global-c-d/doorsavedata) | internal class | `NewSaveData<Door, DoorSaveData>` | 1 |  |
| [`DownwardSwingInput`](/game-api/types/global-c-d/downwardswinginput) | class | `ISkillInputMethod` | 4 |  |
| [`DownwardSwingInputStructure`](/game-api/types/global-c-d/downwardswinginputstructure) | class | `SkillInputStructure` | 6 | Skill input settings for a downward swing: raise the hand, then bring it down in time. Creates a `DownwardSwingInput`. |
| [`DownwardSwingInputStructure.Create`](/game-api/types/global-c-d/downwardswinginputstructure-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<DownwardSwingInputStructure>` | 0 |  |
| [`DPadInputSource`](/game-api/types/global-c-d/dpadinputsource) | class | `InputSource` | 4 |  |
| [`DragTrigger`](/game-api/types/global-c-d/dragtrigger) | class | `MonoBehaviour` | 1 | Trigger that builds up a drag offset from a solid collider moving through it, and lets it ease back when nothing touches it. Read `DragPull`. |
| [`DrawBridgeLogic`](/game-api/types/global-c-d/drawbridgelogic) | class | `MonoBehaviour`, `ISavable<DrawBridgeLogicSaveData>`, `ISavableSave<DrawBridgeLogicSaveData>`, +1 more | 2 |  |
| [`DrawBridgeLogicSaveData`](/game-api/types/global-c-d/drawbridgelogicsavedata) | class | `NewSaveData<DrawBridgeLogic, DrawBridgeLogicSaveData>` | 3 |  |
| [`DrawBridgeRangeLogic`](/game-api/types/global-c-d/drawbridgerangelogic) | class | `NetworkEntityBehaviour`, `ISavable<DrawBridgeRangeLogicSaveData>`, `ISavableSave<DrawBridgeRangeLogicSaveData>`, +2 more | 5 |  |
| [`DrawBridgeRangeLogicSaveData`](/game-api/types/global-c-d/drawbridgerangelogicsavedata) | class | `NewSaveData<DrawBridgeRangeLogic, DrawBridgeRangeLogicSaveData>` | 2 | Save data for a `DrawBridgeRangeLogic` component (save structure version 2). |
| [`DrawBridgeRangeLogicSaveData1`](/game-api/types/global-c-d/drawbridgerangelogicsavedata1) | class | `OldSaveData` | 3 |  |
| [`DropTarget`](/game-api/types/global-c-d/droptarget) | class | `MonoBehaviour` | 0 |  |
| [`DummyArrow`](/game-api/types/global-c-d/dummyarrow) | class | `MonoBehaviour` | 1 | Visual-only arrow with LODs, used where an arrow is shown but not fired. `Configure` adds the feathers. |
| [`DummyPlayerController`](/game-api/types/global-c-d/dummyplayercontroller) | class | `PlayerController` | 2 |  |
| [`DurabilityGlobalSettings`](/game-api/types/global-c-d/durabilityglobalsettings) | class | `GlobalSettings<DurabilityGlobalSettings>` | 6 | Global settings for item durability feedback: break effects, damage popups and how hit effectiveness turns into durability loss. |
| [`DurabilityGlobalSettings.Create`](/game-api/types/global-c-d/durabilityglobalsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<DurabilityGlobalSettings>` | 0 |  |
| [`DurabilityModule`](/game-api/types/global-c-d/durabilitymodule) | class | `NetworkEntityBehaviour`, `ISavable<DurabilityModuleSaveData>`, `ISavableSave<DurabilityModuleSaveData>`, +5 more | 14 | Wears a tool or weapon down with each hit, swaps its damage stage visuals and breaks it at zero. Wear is worked out on the server; clients get the stage. Get it with `pickup.DurabilityModule`. |
| [`DurabilityModule.DurabilityVisual`](/game-api/types/global-c-d/durabilitymodule-durabilityvisual) | class | `IReferenceRenderer` | 5 | One damage stage of a `DurabilityModule`: the renderers to show and the integrity threshold the stage starts below. |
| [`DurabilityModuleSaveData`](/game-api/types/global-c-d/durabilitymodulesavedata) | internal class | `NewSaveData<DurabilityModule, DurabilityModuleSaveData>` | 1 |  |
| [`DurabilitySettings`](/game-api/types/global-c-d/durabilitysettings) | class | `PopupScriptableObject` | 4 | Scriptable object with an item's durability rules: either a chance to break or a starting durability, and how damage converts to wear. |
| [`DurabilitySettings.Create`](/game-api/types/global-c-d/durabilitysettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Durability.ScriptableObject<DurabilitySettings>` | 0 |  |
| [`DurabilityStateChangeEffect`](/game-api/types/global-c-d/durabilitystatechangeeffect) | class | `PooledObject` | 2 |  |
| [`DurationCurve`](/game-api/types/global-c-d/durationcurve) | class |  | 3 | A serializable animation curve paired with a duration in seconds. |
| [`DynamicObjectCombiner`](/game-api/types/global-c-d/dynamicobjectcombiner) | class | `StaticObjectCombiner` | 1 |  |
| [`DynamicPathPart`](/game-api/types/global-c-d/dynamicpathpart) | class | `GeneratablePart` | 1 |  |
| [`DynamiteStrike`](/game-api/types/global-c-d/dynamitestrike) | class | `AreaAttackSkill` | 4 |  |
| [`DynamiteStrike.Create`](/game-api/types/global-c-d/dynamitestrike-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<DynamiteStrike>` | 0 |  |
