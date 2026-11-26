---
title: "No namespace: I to L"
description: "Root.Township types with no namespace, I to L."
sidebar_position: 18
---

# No namespace: I to L

Types in `Root.Township` with no namespace (the global namespace), from I to L. 295 types, 10 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## I

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IAchievementItem`](/game-api/types/global-i-l/iachievementitem) | interface |  | 1 |  |
| [`IAdditionalStaticContent`](/game-api/types/global-i-l/iadditionalstaticcontent) | interface |  | 2 |  |
| [`IAltaEvent<T1, T2, T3, T4>`](/game-api/types/global-i-l/ialtaevent-t1-t2-t3-t4) | interface |  | 1 |  |
| [`IAltaEvent<T1, T2, T3>`](/game-api/types/global-i-l/ialtaevent-t1-t2-t3) | interface |  | 1 |  |
| [`IAltaEvent<T1, T2>`](/game-api/types/global-i-l/ialtaevent-t1-t2) | interface |  | 1 |  |
| [`IAltaEvent<T>`](/game-api/types/global-i-l/ialtaevent-t) | interface |  | 1 |  |
| [`IAltaEventValidation`](/game-api/types/global-i-l/ialtaeventvalidation) | interface |  | 1 | An event wrapper (such as `AltaEvent`) whose Unity event can be checked for broken persistent listeners with the `Validate` extension method. |
| [`IAnimationEndCallbackReceiver`](/game-api/types/global-i-l/ianimationendcallbackreceiver) | interface |  | 1 |  |
| [`IAStarConnection<TNode, TConnection>`](/game-api/types/global-i-l/iastarconnection-tnode-tconnection) | interface |  | 4 |  |
| [`IAStarNode<TNode, TConnection>`](/game-api/types/global-i-l/iastarnode-tnode-tconnection) | interface |  | 4 |  |
| [`IAutoSave`](/game-api/types/global-i-l/iautosave) | interface |  | 1 | [Saving](../networking/saving.md): Add yours to `StreamerManager.AutoSavingBehaviours` to run in every world save. |
| [`IBakeable`](/game-api/types/global-i-l/ibakeable) | interface |  | 2 | Something that precomputes data in the editor, such as text meshes, spline displays or curve walls. |
| [`IChangeWithChunking`](/game-api/types/global-i-l/ichangewithchunking) | interface |  | 2 |  |
| [`ICharacterDummySpecialEffects`](/game-api/types/global-i-l/icharacterdummyspecialeffects) | interface |  | 1 |  |
| [`IChargeableProfessionSkill`](/game-api/types/global-i-l/ichargeableprofessionskill) | internal interface |  | 2 |  |
| [`IChildSyncable<T, TElementSaveData>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata) | interface | `IChildSyncable<T>` | 2 | A child element of a `ChildSyncableCollection` that also saves and loads its own element data (for example `HeatPoint` and `ForgedPoint`). |
| [`IChildSyncable<T>`](/game-api/types/global-i-l/ichildsyncable-t) | interface |  | 8 | An element in a `ChildSyncableCollectionBase` that syncs as part of its parent entity rather than as its own entity. The two-type version also saves and loads. |
| [`IChunker`](/game-api/types/global-i-l/ichunker) | interface |  | 10 | Server: a node in the tree that decides which players a networked object is spawned for, based on chunks. `Chunker` is the implementation. |
| [`IChunkLoader`](/game-api/types/global-i-l/ichunkloader) | interface |  | 1 |  |
| [`ICircle`](/game-api/types/global-i-l/icircle) | interface |  | 3 | A circle in 3D space: a centre, a radius and the direction it faces. |
| [`ICleanOnSerialize`](/game-api/types/global-i-l/icleanonserialize) | interface |  | 1 |  |
| [`IClimbable`](/game-api/types/global-i-l/iclimbable) | interface |  | 12 | Something a climbing hand can grip. `Climbable` is the usual component; anything without one counts as a `DefaultClimbable`, and `NonClimbable` blocks climbing. |
| [`IColorModelPoint<out T>`](/game-api/types/global-i-l/icolormodelpoint-outt) | interface |  | 2 | A point whose value drives one colour channel of a `ColorModel`, written into mesh vertex colours by bone weight. Used for forging and heat (for example `ForgedPoint`). |
| [`IConnection`](/game-api/types/global-i-l/iconnection) | interface |  | 2 | A network connection with its player. `Connection` is the implementation. |
| [`IControllerAction`](/game-api/types/global-i-l/icontrolleraction) | interface |  | 4 |  |
| [`ICraftingIngredientProvider`](/game-api/types/global-i-l/icraftingingredientprovider) | interface |  | 1 |  |
| [`IDeltaControl`](/game-api/types/global-i-l/ideltacontrol) | interface |  | 1 |  |
| [`IDestroyOnBake`](/game-api/types/global-i-l/idestroyonbake) | interface |  | 0 | Marker for components to remove when scenes or prefabs are baked at build time. It has no members. |
| [`IDeviceLifecycle`](/game-api/types/global-i-l/idevicelifecycle) | interface |  | 7 |  |
| [`IDigable`](/game-api/types/global-i-l/idigable) | interface |  | 2 |  |
| [`IDisposablePickup`](/game-api/types/global-i-l/idisposablepickup) | interface |  | 2 |  |
| [`IDockable`](/game-api/types/global-i-l/idockable) | interface |  | 2 |  |
| [`IDontGetRigibody`](/game-api/types/global-i-l/idontgetrigibody) | interface |  | 0 |  |
| [`IDontSplit`](/game-api/types/global-i-l/idontsplit) | interface |  | 0 | Empty marker interface. Components such as `ModifiableStaticObject` and `RotateOverTime` carry it, probably so build-time static splitting leaves their objects whole. Nothing in the server code checks for it. |
| [`IDoubleLinkedListNode<T, TData>`](/game-api/types/global-i-l/idoublelinkedlistnode-t-tdata) | interface |  | 4 |  |
| [`IDynamicPath`](/game-api/types/global-i-l/idynamicpath) | interface |  | 1 |  |
| [`IEditorProcessable`](/game-api/types/global-i-l/ieditorprocessable) | interface |  | 1 |  |
| [`IfEvent`](/game-api/types/global-i-l/ifevent) | class | `MonoBehaviour` | 1 |  |
| [`IGetChild`](/game-api/types/global-i-l/igetchild) | interface |  | 2 |  |
| [`IgnoreForBounds`](/game-api/types/global-i-l/ignoreforbounds) | class | `MonoBehaviour` | 0 |  |
| [`IGrowthManager`](/game-api/types/global-i-l/igrowthmanager) | interface |  | 3 |  |
| [`IGrowthStage`](/game-api/types/global-i-l/igrowthstage) | interface |  | 2 |  |
| [`IHandStaminaManager`](/game-api/types/global-i-l/ihandstaminamanager) | interface |  | 2 | Stamina for one climbing hand, as used by `ClimbingHandler.LeftStamina` and `RightStamina`. Implemented by `HandStaminaManager` and `FakeStaminaManager`. |
| [`IHasFingertips`](/game-api/types/global-i-l/ihasfingertips) | interface |  | 1 |  |
| [`IHasHead`](/game-api/types/global-i-l/ihashead) | interface |  | 1 |  |
| [`IHasHistory`](/game-api/types/global-i-l/ihashistory) | interface |  | 1 |  |
| [`IHasMovementContext`](/game-api/types/global-i-l/ihasmovementcontext) | interface |  | 1 |  |
| [`IHeartCallModifier`](/game-api/types/global-i-l/iheartcallmodifier) | interface |  | 1 | Something that changes a hit while the Heart Call skill is active on a tool. `HeartCall` calls every modifier registered for the hitting tool. Implemented by `ForgingHeartCallModifier`. |
| [`IHistoryAction`](/game-api/types/global-i-l/ihistoryaction) | interface |  | 3 |  |
| [`IHistoryManager`](/game-api/types/global-i-l/ihistorymanager) | interface |  | 6 | An undo and redo history. The cosmetics editor uses one for outfit changes. |
| [`IHistoryManager<T>`](/game-api/types/global-i-l/ihistorymanager-t) | interface | `IHistoryManager` | 2 | Undo and redo history for one kind of action, such as the customization screen's. Implemented by `HistoryManager<T>` and `EmptyHistory<T>`. |
| [`IIgnoreColliderFlattening`](/game-api/types/global-i-l/iignorecolliderflattening) | interface | `IDontSplit` | 0 |  |
| [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer) | interface |  | 1 | Implemented by components on a player controller that need setup only on the local player's own copy, such as docks, impact detectors and `LocomotionController`. |
| [`IInitializeAsRemotePlayer`](/game-api/types/global-i-l/iinitializeasremoteplayer) | interface |  | 1 |  |
| [`IInputBasedSkill`](/game-api/types/global-i-l/iinputbasedskill) | interface |  | 8 | A profession skill driven by an input method (such as a swing or a held button) instead of firing on its own. |
| [`IItemComponent`](/game-api/types/global-i-l/iitemcomponent) | interface |  | 1 |  |
| [`IKControllerMessage`](/game-api/types/global-i-l/ikcontrollermessage) | class |  | 8 |  |
| [`IKControllSettings`](/game-api/types/global-i-l/ikcontrollsettings) | class |  | 6 | Options passed to `CharacterIKController.EnableIKControl` and `DisableIKControl`, for example when the player leaves their body. |
| [`IKeyBoardTriggerHandler`](/game-api/types/global-i-l/ikeyboardtriggerhandler) | interface |  | 0 | An empty marker interface. |
| [`ILabeledTouchScreenButton`](/game-api/types/global-i-l/ilabeledtouchscreenbutton) | interface | `ITouchScreenButton` | 2 |  |
| [`ILightDetector`](/game-api/types/global-i-l/ilightdetector) | interface |  | 2 |  |
| [`ILightDetectorTemp`](/game-api/types/global-i-l/ilightdetectortemp) | interface |  | 2 |  |
| [`ILightEmitter`](/game-api/types/global-i-l/ilightemitter) | interface |  | 2 | A light puzzle beam source, such as `PuzzleLightBeam` or `PuzzleLightMirror`. |
| [`ILightEmitterTemp`](/game-api/types/global-i-l/ilightemittertemp) | interface |  | 0 | Empty marker for a light emitter in the test light detector setup (`TempLaser`, `ILightDetectorTemp`). Probably test or prototype code. |
| [`IListenToMiningEcho`](/game-api/types/global-i-l/ilistentominingecho) | interface |  | 1 | Something that reacts to a mining echo spreading out. Register with `MiningEcho.StartListening`; `Phantom` uses it to crack. |
| [`IListenToPhysicalMaterial`](/game-api/types/global-i-l/ilistentophysicalmaterial) | interface |  | 1 |  |
| [`ImageFormat`](/game-api/types/global-i-l/imageformat) | enum |  | 2 | File formats for screenshots taken by `ScreenshotTaker`. |
| [`IMainMenuLogger`](/game-api/types/global-i-l/imainmenulogger) | interface |  | 3 |  |
| [`IMenuPlayerController`](/game-api/types/global-i-l/imenuplayercontroller) | interface |  | 1 |  |
| [`ImmediateDecay`](/game-api/types/global-i-l/immediatedecay) | class | `NetworkEntityBehaviour` | 1 |  |
| [`IMovementContext`](/game-api/types/global-i-l/imovementcontext) | interface | `IHasMovementContext` | 6 | A moving frame of reference that players move relative to, such as a moving platform. Converts positions and rotations between its local space and the world. |
| [`ImpactChannelProgressionFilter`](/game-api/types/global-i-l/impactchannelprogressionfilter) | class | `BaseImpactChannelProgressionFilter` | 1 |  |
| [`ImpactChannelProgressionFilter.Create`](/game-api/types/global-i-l/impactchannelprogressionfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Filters.ScriptableObject<ImpactChannelProgressionFilter>` | 0 |  |
| [`ImpactDetectionLogic`](/game-api/types/global-i-l/impactdetectionlogic) | class | `TimerLogic` | 0 |  |
| [`ImpactHandler`](/game-api/types/global-i-l/impacthandler) | delegate |  | 0 | Callback that receives an `ImpactHit`. |
| [`ImpactorStatParameters`](/game-api/types/global-i-l/impactorstatparameters) | class | `ItemComponent` | 3 |  |
| [`ImpactSound`](/game-api/types/global-i-l/impactsound) | class | `MonoBehaviour` | 0 |  |
| [`ImpactSoundManager`](/game-api/types/global-i-l/impactsoundmanager) | class | `SingletonBehaviour<ImpactSoundManager>` | 1 |  |
| [`ImpactSoundMap`](/game-api/types/global-i-l/impactsoundmap) | class | `ScriptableObject` | 1 | Asset that maps physic materials to Wwise switches, so impact sounds play the right material sound. |
| [`ImpactSoundSet`](/game-api/types/global-i-l/impactsoundset) | class | `ScriptableObject` | 2 |  |
| [`ImpactSoundSettings`](/game-api/types/global-i-l/impactsoundsettings) | class | `GlobalSettings<ImpactSoundSettings>` | 5 | Global settings for Wwise impact sounds: the send and receive events, velocity RTPC and material sound map. `ImpactSoundManager` holds it, but nothing in this server build reads the values. |
| [`ImpactSoundSettings.Create`](/game-api/types/global-i-l/impactsoundsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<ImpactSoundSettings>` | 0 |  |
| [`ImpactSystemHitManager`](/game-api/types/global-i-l/impactsystemhitmanager) | class | `NetworkEntityBehaviour` | 3 | [Impacts and hit detection](../items/impacts.md), [Items, interaction and damage](../items/overview.md): Debug: sends the server's hits to subscribed clients. |
| [`ImportSettings`](/game-api/types/global-i-l/importsettings) | class | `ScriptableObject` | 4 |  |
| [`ImportSettings.CompressionSettings`](/game-api/types/global-i-l/importsettings-compressionsettings) | class |  | 2 |  |
| [`ImportSettings.Create`](/game-api/types/global-i-l/importsettings-create) | class | `AltaMenuItemBase.Assets.Create.Platform.ScriptableObject<ImportSettings>` | 0 |  |
| [`ImportSettings.Filter`](/game-api/types/global-i-l/importsettings-filter) | class |  | 3 |  |
| [`ImportSettings.PlatformSettings`](/game-api/types/global-i-l/importsettings-platformsettings) | class |  | 7 | Asset import settings for one group of platforms, picked by `ImportSettings.Find` from the last matching filter. |
| [`ImportSettings.Scale`](/game-api/types/global-i-l/importsettings-scale) | enum |  | 4 |  |
| [`ImportSettings.TextureType`](/game-api/types/global-i-l/importsettings-texturetype) | enum |  | 2 |  |
| [`ImportSettings.Type`](/game-api/types/global-i-l/importsettings-type) | enum |  | 2 | Kind of asset an import filter applies to: texture or mesh. |
| [`ImpostorType`](/game-api/types/global-i-l/impostortype) | enum |  | 3 | Projection used when baking an Amplify impostor: spherical, octahedron or hemi-octahedron. |
| [`IncrementStat`](/game-api/types/global-i-l/incrementstat) | delegate |  | 0 |  |
| [`INetworkInteractArgument`](/game-api/types/global-i-l/inetworkinteractargument) | interface |  | 4 | Data sent over the network to start an interaction, such as `GrabPointArguments`. |
| [`InfoDisplayer`](/game-api/types/global-i-l/infodisplayer) | class | `MonoBehaviour` | 0 |  |
| [`InfoDisplayerAccess`](/game-api/types/global-i-l/infodisplayeraccess) | class | `ScriptableObject` | 6 | A debug text asset that code writes a line of text to and an `InfoDisplayer` shows on screen. Wraps the text in a set prefix and suffix. |
| [`InfoDisplayerAccess.AccessUpdate`](/game-api/types/global-i-l/infodisplayeraccess-accessupdate) | delegate |  | 0 | Handler for `InfoDisplayerAccess` changes (`EnabledUpdated`, `TextUpdated`); gets the access asset that changed. |
| [`InGameGizmosSettings`](/game-api/types/global-i-l/ingamegizmossettings) | class | `GlobalSettings<InGameGizmosSettings>` | 5 |  |
| [`InGameGizmosSettings.Create`](/game-api/types/global-i-l/ingamegizmossettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<InGameGizmosSettings>` | 0 |  |
| [`InGameInspector`](/game-api/types/global-i-l/ingameinspector) | class | `NetworkEntityBehaviour` | 10 | A debug tool item with 12 modes (LOD tools, chunk bounds, teleporters, console command runner, cloner, bubble inspector). Only players with the `debug_features` permission can hold it; others are forced to drop it. |
| [`InGameInspectorWheel`](/game-api/types/global-i-l/ingameinspectorwheel) | class | `MonoBehaviour` | 1 |  |
| [`InGameLineGizmo`](/game-api/types/global-i-l/ingamelinegizmo) | class | `PooledObject` | 2 |  |
| [`InGameSphereGizmo`](/game-api/types/global-i-l/ingamespheregizmo) | class | `PooledObject` | 2 |  |
| [`IngredientPageProvider`](/game-api/types/global-i-l/ingredientpageprovider) | class | `GeneratedPageProvider<Item>` | 5 |  |
| [`IngredientPageSettings`](/game-api/types/global-i-l/ingredientpagesettings) | class | `GlobalSettings<IngredientPageSettings>` | 12 | Global settings for the generated pages that describe a cooking ingredient. Same fields as `EdiblePageSettings`, used by `IngredientPageProvider`. |
| [`IngredientPageSettings.Create`](/game-api/types/global-i-l/ingredientpagesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<IngredientPageSettings>` | 0 |  |
| [`InputMap`](/game-api/types/global-i-l/inputmap) | class | `IInputActionCollection2`, `IInputActionCollection`, `IEnumerable<InputAction>`, +2 more | 17 | Unity Input System wrapper generated from the game's input actions asset. It has four action maps: `Playing` (per-device bindings for Oculus, Vive, WMR and Index), `PlayingBase`, `PlayingGeneric` (generic XR controller) and `PlayingPico`. The OpenXR input controller holds one shared instance. |
| [`InputMap.IPlayingActions`](/game-api/types/global-i-l/inputmap-iplayingactions) | interface |  | 25 | Callback interface for the "Playing" action map, one method per action. Register an implementation with `PlayingActions.SetCallbacks`; `OpenXRWrapper` implements it. |
| [`InputMap.IPlayingBaseActions`](/game-api/types/global-i-l/inputmap-iplayingbaseactions) | interface |  | 18 | Callbacks for the core VR controller actions in the generated `InputMap`. `OpenXRWrapper` implements it to fill in each hand's input. |
| [`InputMap.IPlayingGenericActions`](/game-api/types/global-i-l/inputmap-iplayinggenericactions) | interface |  | 20 | Callback receiver for every action in `InputMap`'s `PlayingGeneric` map (generic XR controller). Register one with `PlayingGeneric.SetCallbacks`; each method gets the action's started, performed and cancelled callbacks. |
| [`InputMap.IPlayingPicoActions`](/game-api/types/global-i-l/inputmap-iplayingpicoactions) | interface |  | 20 | Callback receiver for every action in `InputMap`'s `PlayingPico` map. Register one with `PlayingPico.SetCallbacks`; each method gets the action's started, performed and cancelled callbacks. |
| [`InputMap.PlayingActions`](/game-api/types/global-i-l/inputmap-playingactions) | struct |  | 31 | The generated wrapper for the "Playing" input action map: in-game controller actions with bindings for Oculus, Vive, WMR and Index controllers. Get it from an `InputMap` instance's `Playing`; `PlayingOpenXRInputController` reads it. |
| [`InputMap.PlayingBaseActions`](/game-api/types/global-i-l/inputmap-playingbaseactions) | struct |  | 24 | Typed access to the `PlayingBase` action map of `InputMap`, one `InputAction` per input. Get it from `inputMap.PlayingBase`. |
| [`InputMap.PlayingGenericActions`](/game-api/types/global-i-l/inputmap-playinggenericactions) | struct |  | 26 | The generated wrapper for the "PlayingGeneric" input action map: the same in-game actions bound to a generic XR controller. Read by `GenericOpenXRInputController`. |
| [`InputMap.PlayingPicoActions`](/game-api/types/global-i-l/inputmap-playingpicoactions) | struct |  | 26 | The generated wrapper for the "PlayingPico" input action map: in-game actions for a generic XR controller, with Pico trigger bindings for grab assist and trigger axis. Nothing outside `InputMap` reads it in this build. |
| [`InputScaler`](/game-api/types/global-i-l/inputscaler) | class | `MonoBehaviour` | 1 |  |
| [`InputSource`](/game-api/types/global-i-l/inputsource) | abstract class |  | 12 | Base for one button-like input on a controller (see `ControllerInput`). It holds pressed state, notes when it changed, and raises pressed and released events. |
| [`InputSourceHandler`](/game-api/types/global-i-l/inputsourcehandler) | delegate |  | 0 | Handler for `InputSource.InputStarted` and `InputEnded`: gets the input source and the `PlayerInput` it came from. |
| [`InputSourcePair`](/game-api/types/global-i-l/inputsourcepair) | class | `InputSource` | 4 | An input source made of a primary and optional secondary input (for example a key and a button), built by `ControllerAction` from a platform mapping. |
| [`InputToActionMapping`](/game-api/types/global-i-l/inputtoactionmapping) | class |  | 8 | One binding from a VR input or keyboard key (with an optional second input) to a controller action, for one or both hands. |
| [`InputToActionMapping.HandType`](/game-api/types/global-i-l/inputtoactionmapping-handtype) | enum |  | 3 | Which hand an input mapping applies to: both, left or right. |
| [`InsetModifier`](/game-api/types/global-i-l/insetmodifier) | class | `SpawnModifierPointNormal` | 1 |  |
| [`InsetModifier.Create`](/game-api/types/global-i-l/insetmodifier-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<InsetModifier>` | 0 |  |
| [`InspectorBase`](/game-api/types/global-i-l/inspectorbase) | abstract class |  | 11 | Base for the debug bubble inspector's entries (component, method, value and interactor inspectors). Each is shown as a floating bubble you can grab, move and twist. |
| [`InspectorType`](/game-api/types/global-i-l/inspectortype) | enum |  | 4 | What an in-game bubble inspector entry represents: a component, a method, a value or an interactor. Returned by `InspectorBase.InspectorType`. |
| [`InstancedPrefab`](/game-api/types/global-i-l/instancedprefab) | class | `MonoBehaviour` | 6 |  |
| [`Instantiator`](/game-api/types/global-i-l/instantiator) | class | `MonoBehaviour` | 1 |  |
| [`IntegerVisual`](/game-api/types/global-i-l/integervisual) | class | `MonoBehaviour` | 2 |  |
| [`Interactable`](/game-api/types/global-i-l/interactable) | class | `NetworkEntityBehaviour`, `IEntityReplaceHandler` | 28 | [Interactable](../items/interactable.md): Runs on both sides. |
| [`InteractableEvent`](/game-api/types/global-i-l/interactableevent) | class | `AltaEvent<Interactable, Interactor, InteractableUnityEvent>` | 0 | Serializable event with an `Interactable` and the `Interactor` using it, editable in the inspector. |
| [`InteractableEvents`](/game-api/types/global-i-l/interactableevents) | class | `MonoBehaviour` | 2 |  |
| [`InteractableInspector`](/game-api/types/global-i-l/interactableinspector) | class | `PooledObject` | 3 | Debug bubble shown in the world for inspecting a prefab's components, methods and values in game. Pooled, client side, and released when you move more than 5 m away. |
| [`InteractableLastPlayerInteractorHandler`](/game-api/types/global-i-l/interactablelastplayerinteractorhandler) | class | `NetworkEntityBehaviour`, `IEntityReplaceHandler` | 0 |  |
| [`InteractableScoreCalculationSettings`](/game-api/types/global-i-l/interactablescorecalculationsettings) | static class |  | 3 |  |
| [`InteractableUnityEvent`](/game-api/types/global-i-l/interactableunityevent) | class | `UnityEvent<Interactable, Interactor>` | 0 | Serializable `UnityEvent` that passes an `Interactable` and the `Interactor` using it. |
| [`InteractArguments`](/game-api/types/global-i-l/interactarguments) | struct | `INetworkInteractArgument` | 17 | The network message sent when a hand starts holding an entity: the held entity, its velocity and pose, the hand's pose, and force flags. |
| [`InteractionChannel`](/game-api/types/global-i-l/interactionchannel) | enum |  | 5 | Flags for which kinds of interaction an interactor accepts (normal, body customisation, equipment, skill practice, downed character). Interactors can override their channels, for example while downed. |
| [`InteractionChannelHelper`](/game-api/types/global-i-l/interactionchannelhelper) | static class |  | 1 |  |
| [`InteractionFilter`](/game-api/types/global-i-l/interactionfilter) | delegate |  | 0 |  |
| [`InteractionForwarder`](/game-api/types/global-i-l/interactionforwarder) | class | `Interactable` | 0 | [Items, interaction and damage](../items/overview.md): An interactable that passes the grab on to another one. |
| [`InteractionHandler`](/game-api/types/global-i-l/interactionhandler) | delegate |  | 0 | Callback for an interaction between an `Interactor` and an `Interactable`. |
| [`InteractionSwapHandler`](/game-api/types/global-i-l/interactionswaphandler) | delegate |  | 0 |  |
| [`InteractionType`](/game-api/types/global-i-l/interactiontype) | enum |  | 3 | A kind of physical control interaction: none, knob or slider. |
| [`Interactor`](/game-api/types/global-i-l/interactor) | class | `ControllerExtension` | 31 | [Interactor and hands](../items/interactor-and-hands.md): Runs on both sides: the grab is decided on the player's own client, then replayed on the server and on other clients. |
| [`InteractorInspector`](/game-api/types/global-i-l/interactorinspector) | abstract class | `InspectorBase` | 4 |  |
| [`InteriorRendererCollector`](/game-api/types/global-i-l/interiorrenderercollector) | class | `MonoBehaviour` | 0 |  |
| [`IntEvent`](/game-api/types/global-i-l/intevent) | class | `AltaEvent<int, IntUnityEvent>` | 0 | A serializable `AltaEvent` that passes an `int`, so it can be wired up in the inspector. |
| [`IntUnityEvent`](/game-api/types/global-i-l/intunityevent) | class | `UnityEvent<int>` | 0 | A serializable `UnityEvent` with an int argument, for wiring int callbacks in the inspector. |
| [`InvokeEvent`](/game-api/types/global-i-l/invokeevent) | class | `MonoBehaviour` | 2 |  |
| [`IOperateOnWipe`](/game-api/types/global-i-l/ioperateonwipe) | interface |  | 1 |  |
| [`IPerPlayerContent<TSaveFormat>`](/game-api/types/global-i-l/iperplayercontent-tsaveformat) | interface |  | 3 |  |
| [`IPhase`](/game-api/types/global-i-l/iphase) | interface |  | 5 |  |
| [`IPlatformPlayer`](/game-api/types/global-i-l/iplatformplayer) | interface |  | 8 | The platform-specific side of a player (VR rig, fly cam and so on): its hand inputs, transform and player controller. |
| [`IPlayerControllerMultiLockModel`](/game-api/types/global-i-l/iplayercontrollermultilockmodel) | interface |  | 3 | A lock that many objects can hold at once on a player controller feature. It stays locked while any holder remains. |
| [`IPointerPrefabBakable`](/game-api/types/global-i-l/ipointerprefabbakable) | interface |  | 1 |  |
| [`IPointTowards`](/game-api/types/global-i-l/ipointtowards) | interface |  | 2 |  |
| [`IPopupBoard`](/game-api/types/global-i-l/ipopupboard) | interface |  | 5 | A popup board with a title and message that can be closed. |
| [`IPositionRotationPath`](/game-api/types/global-i-l/ipositionrotationpath) | interface |  | 1 |  |
| [`IPostboxPopped`](/game-api/types/global-i-l/ipostboxpopped) | interface |  | 1 |  |
| [`IProfessionSkillTester`](/game-api/types/global-i-l/iprofessionskilltester) | interface |  | 1 |  |
| [`IReferenceRenderer`](/game-api/types/global-i-l/ireferencerenderer) | interface |  | 1 | Implemented by components that keep references to renderers, so they can be updated when renderers are swapped, for example by baking. `StackingComponent` and `DurabilityModule` use it. |
| [`IRemoteConsole`](/game-api/types/global-i-l/iremoteconsole) | interface |  | 4 | A remote console server, such as `WebSocketRemoteConsole` (port 1760) and `ServerRemoteConsole` (port 1758). Started and closed by `ServerConsoleManager`. |
| [`IRemoteConsoleHandler`](/game-api/types/global-i-l/iremoteconsolehandler) | interface |  | 1 | One connected remote console session (WebSocket console or client handler). Passed with the `ConsoleConnected` and `ConsoleDisconnected` events of `ServerRemoteConsole`. |
| [`ISavable<T>`](/game-api/types/global-i-l/isavable-t) | interface | `ISavableSave<T>`, `ISavableSaveBase` | 1 | Implement on a `NetworkEntityBehaviour` to have its state saved with the entity and loaded back. Server only. |
| [`ISavingContext`](/game-api/types/global-i-l/isavingcontext) | interface |  | 2 | A savable component that must be active while its prefab's children are saved or loaded. `NetworkPrefab` pushes every one it finds before handling children and pops them after. `GlobalLogicManager` uses it. |
| [`IServerHostController`](/game-api/types/global-i-l/iserverhostcontroller) | interface |  | 7 | Hook for an outside host to start, reset and stop the server and track player counts. Clients bind `FakeHostController` (all no-ops); the managers that receive it never call it in this build. |
| [`IShootable`](/game-api/types/global-i-l/ishootable) | interface |  | 4 | A projectile a bow can fire, such as `Arrow` or a light beam. Used by `ExtraArrowUpdater` for extra arrows. |
| [`ISkillInputMethod`](/game-api/types/global-i-l/iskillinputmethod) | interface |  | 10 | One gesture a held tool skill waits for (shake, downward swing, strike succession, bow pullback, hand position and so on). Created from a `SkillInputStructure` and owned by a `HeldPickupHandler`. |
| [`ISkillOrb`](/game-api/types/global-i-l/iskillorb) | interface |  | 3 | A skill orb as seen by orb effects. `ProgressionSlotContainer` implements it. |
| [`ISmoothLocomotionModifier`](/game-api/types/global-i-l/ismoothlocomotionmodifier) | interface |  | 8 | Something that changes smooth locomotion, such as `Climber`. `SmoothLocomotion.InitializeModifier` hooks each member into its movement update. Base class `SmoothLocomotionModifier`. |
| [`ISoundProperty`](/game-api/types/global-i-l/isoundproperty) | interface |  | 2 | A Wwise sound setting (switch, RTPC value or trigger) that an audio control applies to a sound's game object before it plays. |
| [`ISpawner`](/game-api/types/global-i-l/ispawner) | interface |  | 1 |  |
| [`ISpawnPositions`](/game-api/types/global-i-l/ispawnpositions) | interface |  | 2 | Something that gives spawn points by index, such as a `PositionSurfaceDefinition`. Used by `PopulationSpawnArea`. |
| [`IStaticGeneration`](/game-api/types/global-i-l/istaticgeneration) | interface |  | 2 | Implemented by scene components that spawn dynamic objects when their parent is generated, such as `StaticDynamicSpawner` and `StaticClusterGenerator`. |
| [`IStrikeSuccessionModifier`](/game-api/types/global-i-l/istrikesuccessionmodifier) | interface |  | 1 |  |
| [`ISyncedListener`](/game-api/types/global-i-l/isyncedlistener) | interface |  | 1 |  |
| [`ITeleportAwareTrigger`](/game-api/types/global-i-l/iteleportawaretrigger) | interface |  | 1 | A trigger that wants to know when a player teleports through it instead of walking in. The teleport pointer collects them along its path. Implemented by `TriggerZone` and `SpiritModeDoorway`. |
| [`ItemComponent`](/game-api/types/global-i-l/itemcomponent) | abstract class | `ScriptableObject`, `IItemComponent` | 2 | Base for an asset that adds data to an `Item`, such as `CookableItem`. Can be limited to some physical materials. |
| [`ItemScroller`](/game-api/types/global-i-l/itemscroller) | class | `MonoBehaviour` | 9 | Client UI: a row of `ScrollElement`s that slides along to show a window of a longer list, reusing a few element copies. Scrolling left moves to higher indices. |
| [`ItemShooter`](/game-api/types/global-i-l/itemshooter) | class | `NetworkEntityBehaviour` | 2 |  |
| [`ItemSmelterRecipeUnlock`](/game-api/types/global-i-l/itemsmelterrecipeunlock) | class | `MonoBehaviour` | 1 |  |
| [`ITouchScreenButton`](/game-api/types/global-i-l/itouchscreenbutton) | interface |  | 7 | A button on an in-world touch screen menu that can be pressed and released. |
| [`ITrialReset`](/game-api/types/global-i-l/itrialreset) | interface |  | 1 |  |
| [`IUnityUpdateMethod`](/game-api/types/global-i-l/iunityupdatemethod) | interface |  | 0 | Opaque handle for a method registered with an `UpdateModule`. Keep it so you can pass it to `UpdateModule.DeregisterMethod` later. |
| [`IUpdateOnMove`](/game-api/types/global-i-l/iupdateonmove) | interface |  | 1 |  |
| [`IUseVirtualKeyboard`](/game-api/types/global-i-l/iusevirtualkeyboard) | interface |  | 7 | Something that takes text from the in-game virtual keyboard, such as a text field. |
| [`IXrDeviceSdkController`](/game-api/types/global-i-l/ixrdevicesdkcontroller) | interface |  | 10 | One device SDK the game can drive the player with: SteamVR, OpenXR, the fly cam or the auto cam. The platform driver starts it and it creates the device lifecycle and per-hand input controllers. Client only. |

## J

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`JoinedServerGameMode`](/game-api/types/global-i-l/joinedservergamemode) | class | `JoinServerGameModeBase` | 5 |  |
| [`JoinServerGameModeBase`](/game-api/types/global-i-l/joinservergamemodebase) | abstract class | `GameMode` | 2 |  |
| [`JoinServerPipeline`](/game-api/types/global-i-l/joinserverpipeline) | class |  | 5 |  |
| [`JointBreakDetector`](/game-api/types/global-i-l/jointbreakdetector) | class | `MonoBehaviour` | 1 | Raises an event when a Unity joint on this object breaks. Add it next to the joint to listen from elsewhere. |
| [`JointBreakHandler`](/game-api/types/global-i-l/jointbreakhandler) | delegate |  | 0 |  |
| [`JointSettings`](/game-api/types/global-i-l/jointsettings) | class |  | 2 |  |
| [`JsonEvent`](/game-api/types/global-i-l/jsonevent) | class |  | 4 |  |

## K

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`KeyboardEventTriggers`](/game-api/types/global-i-l/keyboardeventtriggers) | class | `MonoBehaviour` | 2 |  |
| [`KeyboardEventTriggers.KeyBoardTriggerHandler`](/game-api/types/global-i-l/keyboardeventtriggers-keyboardtriggerhandler) | class | `IKeyBoardTriggerHandler` | 4 |  |
| [`KeyboardInputSource`](/game-api/types/global-i-l/keyboardinputsource) | class | `InputSource` | 4 |  |
| [`KeyboardSet`](/game-api/types/global-i-l/keyboardset) | class | `ScriptableObject` | 3 | Asset listing a set of virtual keyboard layouts, which one is the default, and a completion keyboard. |
| [`KeyEventHandler`](/game-api/types/global-i-l/keyeventhandler) | delegate |  | 0 | Callback for a keyboard key going down or up, used by `KeyboardEventTriggers`. |
| [`KinematicForceMode`](/game-api/types/global-i-l/kinematicforcemode) | enum |  | 3 | How a growth stage sets rigidbodies: leave them, force kinematic, or force non-kinematic. Read by `GrowthItem` and `GrowerComponent`. |
| [`KnobInspector`](/game-api/types/global-i-l/knobinspector) | class | `InteractorInspector` | 4 |  |

## L

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`LabelledButtonWrapper`](/game-api/types/global-i-l/labelledbuttonwrapper) | class | `MonoBehaviour` | 3 | A physical button with a text label that updates when the label changes. |
| [`LayerNameArrayAttribute`](/game-api/types/global-i-l/layernamearrayattribute) | class | `PropertyAttribute` | 0 |  |
| [`LayerValueAttribute`](/game-api/types/global-i-l/layervalueattribute) | class | `PropertyAttribute` | 0 |  |
| [`LayoutHelper2D`](/game-api/types/global-i-l/layouthelper2d) | class |  | 2 |  |
| [`LayoutHelper2D.LayoutInfo`](/game-api/types/global-i-l/layouthelper2d-layoutinfo) | struct |  | 2 |  |
| [`Leaderboard`](/game-api/types/global-i-l/leaderboard) | class | `NetworkEntityBehaviour`, `ISavable<LeaderboardData>`, `ISavableSave<LeaderboardData>`, +1 more | 4 |  |
| [`LeaderboardComparer`](/game-api/types/global-i-l/leaderboardcomparer) | internal class | `IEqualityComparer<LeaderboardDefinitionData>` | 1 |  |
| [`LeaderboardData`](/game-api/types/global-i-l/leaderboarddata) | class | `NewSaveData<Leaderboard, LeaderboardData>` | 1 |  |
| [`LeaderboardDefinition`](/game-api/types/global-i-l/leaderboarddefinition) | class | `HashedGeneralValue<LeaderboardDefinition>` | 2 | Asset for a leaderboard (a course), with its size and whether lower scores are better. |
| [`LeaderboardDefinitionData`](/game-api/types/global-i-l/leaderboarddefinitiondata) | class |  | 12 | A leaderboard's settings: course name, size and whether lower scores win. A static list holds one per `LeaderboardDefinition` asset plus any added by the leaderboard console commands. |
| [`LeaderboardDefinitionDataInfo`](/game-api/types/global-i-l/leaderboarddefinitiondatainfo) | class |  | 1 | Leaderboard info returned by the leaderboard console command list. |
| [`LeaderboardManager`](/game-api/types/global-i-l/leaderboardmanager) | class | `NetworkEntityBehaviour`, `ISavable<LeaderboardManagerData>`, `ISavableSave<LeaderboardManagerData>`, +1 more | 8 |  |
| [`LeaderboardManager.PlayerTracker`](/game-api/types/global-i-l/leaderboardmanager-playertracker) | class |  | 2 | Server side timing state for one player, keyed by user id in `LeaderboardManager`. |
| [`LeaderboardManager.RankedPlayer`](/game-api/types/global-i-l/leaderboardmanager-rankedplayer) | class |  | 5 | One player in a leaderboard ranking: their user info, id and time. |
| [`LeaderboardManagerData`](/game-api/types/global-i-l/leaderboardmanagerdata) | class | `NewSaveData<LeaderboardManager, LeaderboardManagerData>` | 3 |  |
| [`LeaderboardManagerData.LeaderboardEntry`](/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry) | class |  | 4 | Saved ranking for one leaderboard: player IDs and times in rank order. |
| [`LeaderboardManagerData.PlayerBestTimes`](/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes) | class |  | 4 | Saved best times for one player across leaderboards. |
| [`LeaderboardManagerDataOld`](/game-api/types/global-i-l/leaderboardmanagerdataold) | class | `OldSaveData` | 3 |  |
| [`LeaderboardManagerDataOld.LeaderboardEntry`](/game-api/types/global-i-l/leaderboardmanagerdataold-leaderboardentry) | class |  | 4 |  |
| [`LeaderboardManagerDataOld.PlayerBestTimes`](/game-api/types/global-i-l/leaderboardmanagerdataold-playerbesttimes) | class |  | 4 |  |
| [`Legacy`](/game-api/types/global-i-l/legacy) | class | `MonoBehaviour` | 0 |  |
| [`LerpFollow`](/game-api/types/global-i-l/lerpfollow) | class | `LerpFollowBase<Transform>` | 2 | Smoothly moves this object toward a target `Transform`'s position. The movement is in `LerpFollowBase`. |
| [`LerpFollowBase<T>`](/game-api/types/global-i-l/lerpfollowbase-t) | abstract class | `MonoBehaviour` | 3 | Makes an object trail smoothly after a target's position plus an offset, in late update. Off on a dedicated server by default. `LerpFollow` and `ScaledLerpFollow` derive from it. |
| [`LerpModifier`](/game-api/types/global-i-l/lerpmodifier) | class | `FloatModifier` | 1 |  |
| [`LetterMesh`](/game-api/types/global-i-l/lettermesh) | class |  | 3 | One character and its 3D mesh, used by `TextFont` for letters and digits. |
| [`Lever`](/game-api/types/global-i-l/lever) | class | `Trigger` | 2 | [Buttons and levers](../items/buttons-and-levers.md): Reads its handle's angle each physics step while the handle is awake. |
| [`LeverToEvents`](/game-api/types/global-i-l/levertoevents) | class | `MonoBehaviour` | 0 | [Buttons and levers](../items/buttons-and-levers.md) |
| [`LifeTimeEffect`](/game-api/types/global-i-l/lifetimeeffect) | class | `MonoBehaviour` | 4 |  |
| [`LightCluster`](/game-api/types/global-i-l/lightcluster) | class | `Cluster` | 3 |  |
| [`LightFader`](/game-api/types/global-i-l/lightfader) | class | `MonoBehaviour` | 2 | Fades a `PlatformLight` on and off along curves when `IsLit` changes, with an extra intensity multiplier. A component next to the light. |
| [`LightFlicker`](/game-api/types/global-i-l/lightflicker) | class | `MonoBehaviour` | 0 |  |
| [`LightHands`](/game-api/types/global-i-l/lighthands) | class | `ControllerExtension` | 1 |  |
| [`LightModelTester`](/game-api/types/global-i-l/lightmodeltester) | class | `MonoBehaviour` | 2 |  |
| [`LightSettings`](/game-api/types/global-i-l/lightsettings) | class | `MonoBehaviour` | 0 |  |
| [`Limit`](/game-api/types/global-i-l/limit) | class | `MonoBehaviour` | 1 |  |
| [`LimitFrameRate`](/game-api/types/global-i-l/limitframerate) | class | `MonoBehaviour` | 1 |  |
| [`LinearPartCloner`](/game-api/types/global-i-l/linearpartcloner) | class | `NetworkEntityBehaviour`, `ISavable<LinearPartClonerData>`, `ISavableSave<LinearPartClonerData>`, +1 more | 3 |  |
| [`LinearPartClonerData`](/game-api/types/global-i-l/linearpartclonerdata) | class | `NewSaveData<LinearPartCloner, LinearPartClonerData>` | 1 |  |
| [`LinearPartClonerPart`](/game-api/types/global-i-l/linearpartclonerpart) | class | `GeneratablePart` | 2 |  |
| [`LinkedMesh`](/game-api/types/global-i-l/linkedmesh) | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 4 |  |
| [`LinkerPart`](/game-api/types/global-i-l/linkerpart) | class | `GeneratablePart` | 1 |  |
| [`LinuxServerConsole`](/game-api/types/global-i-l/linuxserverconsole) | class | `ServerConsole` | 3 |  |
| [`LiquidGradualDrinker`](/game-api/types/global-i-l/liquidgradualdrinker) | class | `MonoBehaviour`, `ILiquidTransitionController` | 0 |  |
| [`LiquidParticlesRendererColorer`](/game-api/types/global-i-l/liquidparticlesrenderercolorer) | class | `MonoBehaviour` | 1 |  |
| [`LiquidTest`](/game-api/types/global-i-l/liquidtest) | class | `MonoBehaviour` | 0 |  |
| [`ListenerClaimer`](/game-api/types/global-i-l/listenerclaimer) | class | `MonoBehaviour` | 1 |  |
| [`LoadingLogger`](/game-api/types/global-i-l/loadinglogger) | static class |  | 2 |  |
| [`LoadingObject`](/game-api/types/global-i-l/loadingobject) | class | `TempSceneObject` | 0 |  |
| [`LoadingOperation`](/game-api/types/global-i-l/loadingoperation) | static class |  | 0 |  |
| [`LoadingScreenFactory`](/game-api/types/global-i-l/loadingscreenfactory) | class |  | 1 |  |
| [`LoadScenes`](/game-api/types/global-i-l/loadscenes) | class | `MonoBehaviour` | 1 |  |
| [`LocalLinkProvider`](/game-api/types/global-i-l/locallinkprovider) | class | `ILinkProvider` | 5 |  |
| [`LocalMoveTest`](/game-api/types/global-i-l/localmovetest) | class | `MonoBehaviour` | 0 |  |
| [`LocalNetworkScene`](/game-api/types/global-i-l/localnetworkscene) | class | `MonoBehaviour`, `INetworkScene`, `INetworkSceneInternal`, +1 more | 33 | An offline stand-in network scene for the main menu: it pretends to be the server, starts a dummy local server and a fake socket, and initializes every entity under it locally. Most networking members throw `NotImplementedException`. |
| [`LocalPlayer`](/game-api/types/global-i-l/localplayer) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 |  |
| [`LocalPlayerAdvertisingTrophy`](/game-api/types/global-i-l/localplayeradvertisingtrophy) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 5 |  |
| [`LocalPlayerInteractionEvents`](/game-api/types/global-i-l/localplayerinteractionevents) | class | `MonoBehaviour` | 0 |  |
| [`LocalSpawnManager`](/game-api/types/global-i-l/localspawnmanager) | class | `SpawnManager` | 6 | [Spawning](../world/spawning.md) |
| [`LocalTestGameMode`](/game-api/types/global-i-l/localtestgamemode) | class | `JoinServerGameModeBase` | 4 |  |
| [`LocalTestStarter`](/game-api/types/global-i-l/localteststarter) | class | `AdminTool` | 0 |  |
| [`LockedRotationHandle`](/game-api/types/global-i-l/lockedrotationhandle) | class | `NetworkEntityBehaviour` | 3 |  |
| [`LocomotionController`](/game-api/types/global-i-l/locomotioncontroller) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IInitializeAsLocalPlayer` | 31 | [Locomotion](../networking/locomotion.md#locomotioncontroller): A `NetworkEntityBehaviour` and `INetworkSerialized`. |
| [`LocomotionFunction`](/game-api/types/global-i-l/locomotionfunction) | enum |  | 7 | The kinds of player movement (teleport, smooth, reposition, rotation, anchor distance, recovery, forced), used to tell which locomotion system is acting. |
| [`LocomotionlessPlayerController`](/game-api/types/global-i-l/locomotionlessplayercontroller) | class | `VRPlayerController`, `IPlatformPlayer`, `IHasFingertips`, +1 more | 11 | A VR player controller that cannot move, used for menu scenes. Always counts as the local player and alive. Client only. |
| [`LocomotionModifier`](/game-api/types/global-i-l/locomotionmodifier) | class | `MonoBehaviour`, `IDontSplit`, `IBuildRendererBakeable`, +1 more | 3 |  |
| [`LocomotionModifierAction`](/game-api/types/global-i-l/locomotionmodifieraction) | abstract class | `ScriptableObject` | 2 | Base asset for something that changes smooth locomotion for a while, started and ended on the player controller. |
| [`LocomotionModifierCheck`](/game-api/types/global-i-l/locomotionmodifiercheck) | abstract class | `ScriptableObject` | 3 | Asset with rules for a `LocomotionModifier` area: what happens when a player enters or leaves, and where they may teleport. Examples are `DepthCheckLocoCheck` and `EnterLocomotionCheck`. |
| [`LocomotionModifierVolumeTrigger`](/game-api/types/global-i-l/locomotionmodifiervolumetrigger) | class | `VolumeTrigger` | 1 |  |
| [`LocomotionStatSettings`](/game-api/types/global-i-l/locomotionstatsettings) | class | `ScriptableObject` | 3 |  |
| [`LODBaker`](/game-api/types/global-i-l/lodbaker) | class | `MonoBehaviour` | 1 |  |
| [`LODChange`](/game-api/types/global-i-l/lodchange) | class | `ScriptableObject` | 1 |  |
| [`LODChange.Create`](/game-api/types/global-i-l/lodchange-create) | class | `AltaMenuItemBase.Assets.Create.Township.Debug.ScriptableObject<LODChange>` | 0 |  |
| [`LODChange.LODLog`](/game-api/types/global-i-l/lodchange-lodlog) | class |  | 4 | Debug record of an LOD group and its LOD values, kept in a `LODChange` asset for the in-game inspector. |
| [`LODGroupWrapper`](/game-api/types/global-i-l/lodgroupwrapper) | class | `MonoBehaviour` | 2 |  |
| [`LodMeshJoiner`](/game-api/types/global-i-l/lodmeshjoiner) | static class |  | 1 |  |
| [`LoggedInTool`](/game-api/types/global-i-l/loggedintool) | abstract class | `MonoBehaviour` | 0 | Base for menu tools that only work while logged in to Alta's account services, such as the shop and cosmetics interfaces. It follows `LoginManager`'s login and logout events. |
| [`LoggingLevel`](/game-api/types/global-i-l/logginglevel) | enum |  | 6 | Log levels from Trace to Fatal, used by the micro tutorial logger to filter its output. |
| [`LoggingSetup`](/game-api/types/global-i-l/loggingsetup) | class | `MonoBehaviour` | 0 |  |
| [`LogicDisplay`](/game-api/types/global-i-l/logicdisplay) | class | `NetworkEntityBehaviour` | 3 |  |
| [`LogicIntSet`](/game-api/types/global-i-l/logicintset) | class | `MonoBehaviour`, `ISavable<LogicIntSetData>`, `ISavableSave<LogicIntSetData>`, +1 more | 0 |  |
| [`LogicIntSetData`](/game-api/types/global-i-l/logicintsetdata) | class | `NewSaveData<LogicIntSet, LogicIntSetData>` | 1 |  |
| [`LogicReset`](/game-api/types/global-i-l/logicreset) | class | `MonoBehaviour`, `ISavable<LogicResetSaveData>`, `ISavableSave<LogicResetSaveData>`, +1 more | 1 |  |
| [`LogicReset.BoolSenders`](/game-api/types/global-i-l/logicreset-boolsenders) | struct |  | 2 |  |
| [`LogicResetSaveData`](/game-api/types/global-i-l/logicresetsavedata) | class | `NewSaveData<LogicReset, LogicResetSaveData>` | 2 |  |
| [`LoginAndRegisterHelper`](/game-api/types/global-i-l/loginandregisterhelper) | internal abstract class | `MonoBehaviour`, `UIActionLock.ILockUIAction` | 2 |  |
| [`LoginManager`](/game-api/types/global-i-l/loginmanager) | class | `SingletonBehaviour<LoginManager>` | 11 | Logs the client in to the Alta API: automatic login at startup, or username (or email) and password. Raises static events and runs queued actions after login. Get it with `SingletonBehaviour<LoginManager>.Instance`. |
| [`LoginScreen`](/game-api/types/global-i-l/loginscreen) | class | `MonoBehaviour` | 2 |  |
| [`LoginScreenManager`](/game-api/types/global-i-l/loginscreenmanager) | internal class | `MonoBehaviour` | 4 |  |
| [`LogoutAction`](/game-api/types/global-i-l/logoutaction) | class | `LoggedInTool` | 1 |  |
| [`LogsUploader`](/game-api/types/global-i-l/logsuploader) | class |  | 1 |  |
| [`LongHoldInteractable`](/game-api/types/global-i-l/longholdinteractable) | class | `Interactable` | 4 | [Items, interaction and damage](../items/overview.md): An interactable you must hold for a while. |
| [`LookAtPlayer`](/game-api/types/global-i-l/lookatplayer) | class | `MonoBehaviour` | 0 |  |
| [`LoopingSoundEffect`](/game-api/types/global-i-l/loopingsoundeffect) | class | `MonoBehaviour` | 3 |  |
| [`LootValue`](/game-api/types/global-i-l/lootvalue) | class | `PopupScriptableObject`, `IComparable<LootValue>` | 4 | An item's loot value tier, as an asset. Items compare by its number, and it sets the tint of docks holding the item. |
