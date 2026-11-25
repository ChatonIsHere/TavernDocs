---
title: "No namespace: E to H"
description: "Root.Township types with no namespace, E to H."
sidebar_position: 17
---

# No namespace: E to H

Types in `Root.Township` with no namespace (the global namespace), from E to H. 291 types, 27 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## E

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`EatAmountTask`](/game-api/types/global-e-h/eatamounttask) | class | `TransferAmountTask` | 1 |  |
| [`Eater`](/game-api/types/global-e-h/eater) | class | `MonoBehaviour` | 0 |  |
| [`EatingAmountArgument`](/game-api/types/global-e-h/eatingamountargument) | class | `GameTaskActionArgument` | 3 | [Other systems](../game-systems/other-systems.md): `Eater`, when a player finishes eating (on whichever side ran the bite) |
| [`EcholocationEffect`](/game-api/types/global-e-h/echolocationeffect) | class | `PooledObject` | 1 |  |
| [`EdgeCutFilter`](/game-api/types/global-e-h/edgecutfilter) | class | `SpawnModifierPoint` | 1 |  |
| [`EdgeCutFilter.Create`](/game-api/types/global-e-h/edgecutfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<EdgeCutFilter>` | 0 |  |
| [`EdibleEvent`](/game-api/types/global-e-h/edibleevent) | class | `AltaEvent<EdibleObject, EdibleUnityEvent>` | 0 |  |
| [`EdibleObject`](/game-api/types/global-e-h/edibleobject) | class | `NetworkEntityBehaviour` | 4 | [Hunger, eating and drinking](../game-systems/hunger-and-eating.md#edibleobject): On every food prefab. |
| [`EdibleObject.EatenStage`](/game-api/types/global-e-h/edibleobject-eatenstage) | class |  | 3 |  |
| [`EdiblePageProvider`](/game-api/types/global-e-h/ediblepageprovider) | class | `GeneratedPageProvider<Item>` | 5 |  |
| [`EdiblePageSettings`](/game-api/types/global-e-h/ediblepagesettings) | class | `GlobalSettings<EdiblePageSettings>` | 12 | Global settings for the generated pages that describe an edible item: the page template, where each glyph goes and how effect strength is drawn. Used by `EdiblePageProvider`. |
| [`EdiblePageSettings.Create`](/game-api/types/global-e-h/ediblepagesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<EdiblePageSettings>` | 0 |  |
| [`EdibleUnityEvent`](/game-api/types/global-e-h/edibleunityevent) | class | `UnityEvent<EdibleObject>` | 0 |  |
| [`EditorApiSettings`](/game-api/types/global-e-h/editorapisettings) | class | `GlobalSettings<EditorApiSettings>` | 6 |  |
| [`EditorCommandCaller`](/game-api/types/global-e-h/editorcommandcaller) | class | `MonoBehaviour` | 1 |  |
| [`EditorEventPanel`](/game-api/types/global-e-h/editoreventpanel) | class | `MonoBehaviour` | 0 |  |
| [`EditorFakeFocusEvents`](/game-api/types/global-e-h/editorfakefocusevents) | class | `MonoBehaviour` | 3 |  |
| [`EditorForcedTaskUpdater`](/game-api/types/global-e-h/editorforcedtaskupdater) | static class |  | 1 |  |
| [`EditorHotKeys`](/game-api/types/global-e-h/editorhotkeys) | class | `ScriptableObject` | 1 |  |
| [`EditorHotKeys.Create`](/game-api/types/global-e-h/editorhotkeys-create) | class | `AltaMenuItemBase.Assets.Create.Utility.ScriptableObject<EditorHotKeys>` | 0 |  |
| [`EditorLink`](/game-api/types/global-e-h/editorlink) | class |  | 4 |  |
| [`EditorOnlyAddressableSession`](/game-api/types/global-e-h/editoronlyaddressablesession) | static class |  | 1 |  |
| [`EditorOverrideCredentials`](/game-api/types/global-e-h/editoroverridecredentials) | class |  | 2 |  |
| [`EditorWindowGizmosDrawer`](/game-api/types/global-e-h/editorwindowgizmosdrawer) | class | `MonoBehaviour` | 2 |  |
| [`EffectPlayStatus`](/game-api/types/global-e-h/effectplaystatus) | enum |  | 3 |  |
| [`EffectReleaseOnFade`](/game-api/types/global-e-h/effectreleaseonfade) | class | `PooledObject`, `IBuildRendererPostBake`, `IBuildBakeable` | 2 |  |
| [`EffectToggleColor`](/game-api/types/global-e-h/effecttogglecolor) | class | `MonoBehaviour` | 1 |  |
| [`EffectToggleColor.ParticleLifetimeColor`](/game-api/types/global-e-h/effecttogglecolor-particlelifetimecolor) | class | `ParticleStartColor` | 2 |  |
| [`EffectToggleColor.ParticleStartColor`](/game-api/types/global-e-h/effecttogglecolor-particlestartcolor) | class |  | 3 |  |
| [`ElevationFromPath`](/game-api/types/global-e-h/elevationfrompath) | class | `SpawnModifierPointNormal` | 1 |  |
| [`ElevationFromPath.Create`](/game-api/types/global-e-h/elevationfrompath-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<ElevationFromPath>` | 0 |  |
| [`EmailValidationHelper`](/game-api/types/global-e-h/emailvalidationhelper) | static class |  | 2 |  |
| [`EmailVerificationController`](/game-api/types/global-e-h/emailverificationcontroller) | class | `LoggedInTool` | 0 |  |
| [`EmailVerificationManager`](/game-api/types/global-e-h/emailverificationmanager) | class | `MonoBehaviour` | 1 |  |
| [`EmbedArguments`](/game-api/types/global-e-h/embedarguments) | class |  | 10 | Network state of an `Embeddable` item: whether it is stuck in something and where, or its scale when free. |
| [`Embeddable`](/game-api/types/global-e-h/embeddable) | class | `NetworkEntityBehaviour`, `ISavable<EmbeddableSaveData>`, `ISavableSave<EmbeddableSaveData>`, +2 more | 14 | Lets a pointed item (arrow, knife, spear) stick into what it hits and parents it there, saved across restarts. The server decides when it embeds; clients follow a synced message. Get it with `GetComponent<Embeddable>()` on the item. |
| [`EmbeddableEvent`](/game-api/types/global-e-h/embeddableevent) | class | `AltaEvent<Embeddable, EmbeddableUnityEvent>` | 0 |  |
| [`EmbeddableGlobalSettings`](/game-api/types/global-e-h/embeddableglobalsettings) | class | `GlobalSettings<EmbeddableGlobalSettings>` | 2 |  |
| [`EmbeddableRaycastProjectile`](/game-api/types/global-e-h/embeddableraycastprojectile) | class | `MonoBehaviour` | 0 |  |
| [`EmbeddableSaveData`](/game-api/types/global-e-h/embeddablesavedata) | internal class | `NewSaveData<Embeddable, EmbeddableSaveData>` | 5 |  |
| [`EmbeddableSaveData1`](/game-api/types/global-e-h/embeddablesavedata1) | internal class | `OldSaveData` | 2 |  |
| [`EmbeddableUnityEvent`](/game-api/types/global-e-h/embeddableunityevent) | class | `UnityEvent<Embeddable>` | 0 |  |
| [`EmberComposer`](/game-api/types/global-e-h/embercomposer) | class | `PickupBasedSkill` | 4 |  |
| [`EmberComposer.Create`](/game-api/types/global-e-h/embercomposer-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<EmberComposer>` | 0 |  |
| [`EmberComposerFireEffect`](/game-api/types/global-e-h/embercomposerfireeffect) | class | `PooledObject`, `IBuildRendererPostBake`, `IBuildBakeable` | 5 |  |
| [`EmissionControl`](/game-api/types/global-e-h/emissioncontrol) | class | `DelayedPooledObject`, `IBuildRendererPostBake`, `IBuildBakeable` | 2 |  |
| [`EmissionShapeControl`](/game-api/types/global-e-h/emissionshapecontrol) | class | `EmissionControl` | 1 |  |
| [`EmptyBehaviour`](/game-api/types/global-e-h/emptybehaviour) | class | `MonoBehaviour` | 0 |  |
| [`EmptyChildrenSerializer`](/game-api/types/global-e-h/emptychildrenserializer) | class | `ISerializeChildren` | 1 |  |
| [`EmptyDockAfterTimePeriod`](/game-api/types/global-e-h/emptydockaftertimeperiod) | class | `MonoBehaviour` | 0 | [Items, interaction and damage](../items/overview.md) |
| [`EmptyFolderContents`](/game-api/types/global-e-h/emptyfoldercontents) | class | `ScriptableObject` | 0 |  |
| [`EmptyFolderContents.Create`](/game-api/types/global-e-h/emptyfoldercontents-create) | class | `AltaMenuItemBase.Assets.Create.Utility.ScriptableObject<EmptyFolderContents>` | 1 |  |
| [`EmptyHistory<T>`](/game-api/types/global-e-h/emptyhistory-t) | class | `IHistoryManager<T>`, `IHistoryManager` | 9 |  |
| [`EmptyJoint`](/game-api/types/global-e-h/emptyjoint) | class | `MonoBehaviour` | 2 |  |
| [`EnableAndUnchildIfClose`](/game-api/types/global-e-h/enableandunchildifclose) | class | `MonoBehaviour`, `IDontGetRigibody` | 1 |  |
| [`EnableLerp`](/game-api/types/global-e-h/enablelerp) | class | `MonoBehaviour` | 2 |  |
| [`EnterLocomotionCheck`](/game-api/types/global-e-h/enterlocomotioncheck) | class | `LocomotionModifierCheck` | 3 |  |
| [`EntitySpawnTest`](/game-api/types/global-e-h/entityspawntest) | class | `MonoBehaviour` | 0 |  |
| [`EnumArrayAttribute`](/game-api/types/global-e-h/enumarrayattribute) | class | `PropertyAttribute` | 4 |  |
| [`EnvironmentalPropertyBlock`](/game-api/types/global-e-h/environmentalpropertyblock) | class | `MonoBehaviour` | 2 |  |
| [`EnvironmentHandler`](/game-api/types/global-e-h/environmenthandler) | class | `MonoBehaviour` | 1 |  |
| [`EnvironmentLerp`](/game-api/types/global-e-h/environmentlerp) | class |  | 7 |  |
| [`EnvironmentLerp.Variable`](/game-api/types/global-e-h/environmentlerp-variable) | class |  | 6 |  |
| [`EnvironmentNode`](/game-api/types/global-e-h/environmentnode) | class | `MonoBehaviour` | 1 |  |
| [`EnvironmentNode.Variable`](/game-api/types/global-e-h/environmentnode-variable) | class |  | 1 |  |
| [`EquipmentRoomAnimator`](/game-api/types/global-e-h/equipmentroomanimator) | class | `MonoBehaviour` | 2 |  |
| [`ErrorTrackerSettings`](/game-api/types/global-e-h/errortrackersettings) | class | `ScriptableObject` | 2 |  |
| [`EruptAreaAttack`](/game-api/types/global-e-h/eruptareaattack) | class | `NetworkEntityBehaviour` | 2 |  |
| [`EvaluateWielder`](/game-api/types/global-e-h/evaluatewielder) | delegate |  | 0 |  |
| [`EventAtPosition`](/game-api/types/global-e-h/eventatposition) | class | `MonoBehaviour` | 1 |  |
| [`ExampleEventPlayer`](/game-api/types/global-e-h/exampleeventplayer) | class | `MonoBehaviour` | 0 |  |
| [`ExperienceFillVisualizer`](/game-api/types/global-e-h/experiencefillvisualizer) | class | `SkillShrineVisualizer` | 8 | Skill shrine visual that fills with a player's XP toward the next level on one path, and animates buying and selling skills. The server sends the values; clients animate. |
| [`ExplosionRadius`](/game-api/types/global-e-h/explosionradius) | class | `MonoBehaviour` | 0 |  |
| [`Explosive`](/game-api/types/global-e-h/explosive) | class | `NetworkEntityBehaviour` | 4 |  |
| [`ExposedScriptableObjectAttribute`](/game-api/types/global-e-h/exposedscriptableobjectattribute) | class | `PropertyAttribute` | 0 |  |
| [`ExposurePlayerScreenFader`](/game-api/types/global-e-h/exposureplayerscreenfader) | class | `PlayerScreenFader` | 1 |  |
| [`ExtraArrowUpdater`](/game-api/types/global-e-h/extraarrowupdater) | class | `NetworkEntityBehaviour` | 6 |  |
| [`ExtraArrowUpdater.ExtraArrowData`](/game-api/types/global-e-h/extraarrowupdater-extraarrowdata) | class |  | 3 |  |

## F

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FaceObject`](/game-api/types/global-e-h/faceobject) | class | `MonoBehaviour` | 0 |  |
| [`Facts`](/game-api/types/global-e-h/facts) | class |  | 1 |  |
| [`FadeInOutBase`](/game-api/types/global-e-h/fadeinoutbase) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 4 | Base for objects that fade out using a `_Progress` shader value, or by spawning pooled mesh fader effects in their place. Does nothing on a headless server. |
| [`FadeInOutNetworkEntity`](/game-api/types/global-e-h/fadeinoutnetworkentity) | class | `PracticeAreaShrinkFader` | 1 |  |
| [`FakeHostController`](/game-api/types/global-e-h/fakehostcontroller) | class | `IServerHostController` | 7 |  |
| [`FakePickup`](/game-api/types/global-e-h/fakepickup) | class | `Interactable` | 8 | [Items, interaction and damage](../items/overview.md): An `Interactable` that looks like a pickup but isn't one. |
| [`FakePlayerControllerMultiLockModel`](/game-api/types/global-e-h/fakeplayercontrollermultilockmodel) | class | `IPlayerControllerMultiLockModel` | 3 |  |
| [`FakePlayerHealth`](/game-api/types/global-e-h/fakeplayerhealth) | class | `HealthObject` | 2 | [Items, interaction and damage](../items/overview.md): A `HealthObject` for training targets. |
| [`FakePlayerHelper`](/game-api/types/global-e-h/fakeplayerhelper) | class | `MonoBehaviour` | 0 |  |
| [`FallbackCamera`](/game-api/types/global-e-h/fallbackcamera) | class | `SingletonBehaviour<FallbackCamera>` | 1 |  |
| [`FarAwayController`](/game-api/types/global-e-h/farawaycontroller) | class | `NetworkEntityBehaviour` | 4 |  |
| [`FaucetHandle`](/game-api/types/global-e-h/faucethandle) | class | `NetworkEntityBehaviour` | 4 |  |
| [`FauxRigidbody`](/game-api/types/global-e-h/fauxrigidbody) | class |  | 5 |  |
| [`Feather`](/game-api/types/global-e-h/feather) | class | `MonoBehaviour` | 1 |  |
| [`FestiveFeature`](/game-api/types/global-e-h/festivefeature) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable`, +3 more | 0 |  |
| [`Festivity`](/game-api/types/global-e-h/festivity) | class | `HashedGeneralValue<Festivity>` | 5 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`Festivity.Create`](/game-api/types/global-e-h/festivity-create) | class | `AltaMenuItemBase.Assets.Create.Township.Meta.ScriptableObject<Festivity>` | 0 |  |
| [`FestivityCommandModule`](/game-api/types/global-e-h/festivitycommandmodule) | class |  | 0 |  |
| [`FestivityManager`](/game-api/types/global-e-h/festivitymanager) | class | `NetworkEntityBehaviour` | 4 |  |
| [`Filter`](/game-api/types/global-e-h/filter) | delegate |  | 0 |  |
| [`FingerTipSettings`](/game-api/types/global-e-h/fingertipsettings) | class |  | 2 |  |
| [`FinishSpawnProjectTask`](/game-api/types/global-e-h/finishspawnprojecttask) | class | `CustomArgumentGameAction<FinishSpawnProjectTaskArgument>` | 1 |  |
| [`FinishSpawnProjectTaskArgument`](/game-api/types/global-e-h/finishspawnprojecttaskargument) | class | `GameTaskActionArgument` | 3 | [Other systems](../game-systems/other-systems.md) |
| [`FireLogic`](/game-api/types/global-e-h/firelogic) | class | `MonoBehaviour`, `ISavable<FireLogicSaveData>`, `ISavableSave<FireLogicSaveData>`, +1 more | 1 |  |
| [`FireLogicSaveData`](/game-api/types/global-e-h/firelogicsavedata) | class | `NewSaveData<FireLogic, FireLogicSaveData>` | 1 |  |
| [`FireParticleDivergence`](/game-api/types/global-e-h/fireparticledivergence) | class | `MonoBehaviour` | 0 |  |
| [`FixMod`](/game-api/types/global-e-h/fixmod) | class | `ModBase` | 1 |  |
| [`FlagAnimationManager`](/game-api/types/global-e-h/flaganimationmanager) | class | `NetworkEntityBehaviour` | 3 |  |
| [`FlattenAndCleanEmptyAtBakeTime`](/game-api/types/global-e-h/flattenandcleanemptyatbaketime) | class | `BuildRendererBakeable` | 2 |  |
| [`FlintSpark`](/game-api/types/global-e-h/flintspark) | class | `PooledObject`, `IImpactEffect` | 2 |  |
| [`FloatEvent`](/game-api/types/global-e-h/floatevent) | class | `AltaEvent<float, FloatUnityEvent>` | 0 | A serializable `AltaEvent` carrying a `float`, for wiring in the inspector. |
| [`FloatModifier`](/game-api/types/global-e-h/floatmodifier) | abstract class | `MonoBehaviour` | 1 |  |
| [`FloatUnityEvent`](/game-api/types/global-e-h/floatunityevent) | class | `UnityEvent<float>` | 0 |  |
| [`FlyCamDeviceController`](/game-api/types/global-e-h/flycamdevicecontroller) | class | `XrDeviceSdkController` | 4 |  |
| [`FlyCamDeviceLifecycle`](/game-api/types/global-e-h/flycamdevicelifecycle) | class | `DeviceLifecycle` | 1 |  |
| [`FlyCamHands`](/game-api/types/global-e-h/flycamhands) | class | `ControllerExtension` | 2 |  |
| [`FlyCamInput`](/game-api/types/global-e-h/flycaminput) | class | `IInputActionCollection2`, `IInputActionCollection`, `IEnumerable<InputAction>`, +2 more | 14 | Generated Unity Input System wrapper for the fly cam (spectator camera) controls, with a single `Playing` action map (move, look, elevation, sensitivity, show names, mute and so on). Client only. |
| [`FlyCamInput.IPlayingActions`](/game-api/types/global-e-h/flycaminput-iplayingactions) | interface |  | 13 | Callbacks for the fly camera's "Playing" input action map (generated by Unity's Input System). Pass an implementation to `SetCallbacks`. Nothing in the game code implements it. |
| [`FlyCamInput.PlayingActions`](/game-api/types/global-e-h/flycaminput-playingactions) | struct |  | 19 | The fly cam's generated input action map. Keyboard, mouse and gamepad bindings for moving, looking and fly cam toggles. |
| [`FlyCamInputController`](/game-api/types/global-e-h/flycaminputcontroller) | class | `DeviceInputController` | 2 |  |
| [`FlyCamLocomotionController`](/game-api/types/global-e-h/flycamlocomotioncontroller) | class | `LocomotionController` | 2 |  |
| [`FlyCamPlayer`](/game-api/types/global-e-h/flycamplayer) | class | `PlayerController`, `INetworkEntityBehaviour` | 15 | A keyboard-and-mouse fly camera that acts as a player controller (for spectating or filming). It can hide itself from other players. |
| [`FogAnimator`](/game-api/types/global-e-h/foganimator) | class | `MonoBehaviour` | 3 |  |
| [`FollowCamera`](/game-api/types/global-e-h/followcamera) | class | `MonoBehaviour` | 0 |  |
| [`FoodProcesser`](/game-api/types/global-e-h/foodprocesser) | class | `MonoBehaviour` | 0 |  |
| [`ForcedAtlasDefinition`](/game-api/types/global-e-h/forcedatlasdefinition) | class | `BuildRendererBakeable` | 1 |  |
| [`ForcedChunking`](/game-api/types/global-e-h/forcedchunking) | class | `MonoBehaviour`, `IDestroyOnBake` | 1 |  |
| [`ForceLoadChunk`](/game-api/types/global-e-h/forceloadchunk) | class | `MonoBehaviour` | 0 |  |
| [`ForestBiome`](/game-api/types/global-e-h/forestbiome) | class | `HashedGeneralValue<ForestBiome>` | 11 | A forest generation biome asset, with weighting and noise settings used to score which biome wins at a point. Looked up by hash like other `HashedGeneralValue` assets. |
| [`ForestBiome.Create`](/game-api/types/global-e-h/forestbiome-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<ForestBiome>` | 0 |  |
| [`ForestChunk`](/game-api/types/global-e-h/forestchunk) | class | `MonoBehaviour`, `IProceduralGenerationStreamer` | 3 |  |
| [`ForestNodeMapSpawnData`](/game-api/types/global-e-h/forestnodemapspawndata) | class | `SpawnData` | 4 |  |
| [`ForgedHitEffectOverride`](/game-api/types/global-e-h/forgedhiteffectoverride) | class |  | 5 |  |
| [`ForgedPointCollectionSaveData`](/game-api/types/global-e-h/forgedpointcollectionsavedata) | class | `ChildSyncableCollectionSaveData<ForgedPointCollectionSaveData, ForgedPointCollection, ForgedPointCollectionSaveData.Element>` | 0 |  |
| [`ForgedPointCollectionSaveData.Element`](/game-api/types/global-e-h/forgedpointcollectionsavedata-element) | class |  | 1 |  |
| [`ForgingHeartCall`](/game-api/types/global-e-h/forgingheartcall) | class | `HeartCall` | 1 |  |
| [`ForgingHeartCall.Create`](/game-api/types/global-e-h/forgingheartcall-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<ForgingHeartCall>` | 0 |  |
| [`ForgingHeartCallModifier`](/game-api/types/global-e-h/forgingheartcallmodifier) | class | `PickupBasedSkillModifier`, `IHeartCallModifier` | 0 |  |
| [`FPSCounter`](/game-api/types/global-e-h/fpscounter) | class | `MonoBehaviour` | 2 |  |
| [`FPSLogger`](/game-api/types/global-e-h/fpslogger) | static class |  | 2 |  |
| [`FrequencyLimiter`](/game-api/types/global-e-h/frequencylimiter) | class | `MonoBehaviour` | 1 |  |
| [`FriendRequestToken`](/game-api/types/global-e-h/friendrequesttoken) | class | `ActionItem` | 2 |  |
| [`FriendSelector`](/game-api/types/global-e-h/friendselector) | class | `NetworkEntityBehaviour`, `IProvideEnumerable<string>` | 5 |  |
| [`FriendshipManager`](/game-api/types/global-e-h/friendshipmanager) | class |  | 17 | Each `Player` has one. Holds that player's friend list, and on the client, whether that player is a friend of the local player. Data comes from the Alta social API. |
| [`FromPlayingToCustomization`](/game-api/types/global-e-h/fromplayingtocustomization) | class | `NetworkEntityBehaviour` | 2 |  |
| [`Fuel`](/game-api/types/global-e-h/fuel) | class | `ItemComponent` | 8 | [Heat](../game-systems/heat.md#fuel): On an `Item`, so it's per item type, not per object. |
| [`FunctionKeyDefinition`](/game-api/types/global-e-h/functionkeydefinition) | class |  | 8 |  |
| [`Fuse`](/game-api/types/global-e-h/fuse) | class | `NetworkEntityBehaviour`, `ISavable<FuseSaveData>`, `ISavableSave<FuseSaveData>`, +3 more | 13 | [Other systems](../game-systems/other-systems.md#fuse): Burns down over `fuseTime` once lit, then raises `finishedOnServer` (explosives use this). An `IFlammable`, so fires and sparks can light it. |
| [`Fuse.DockSettings`](/game-api/types/global-e-h/fuse-docksettings) | enum |  | 3 |  |
| [`FuseSaveData`](/game-api/types/global-e-h/fusesavedata) | internal class | `NewSaveData<Fuse, FuseSaveData>` | 3 |  |

## G

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GachaHandle`](/game-api/types/global-e-h/gachahandle) | class | `NetworkEntityBehaviour` | 4 |  |
| [`GameAchievement`](/game-api/types/global-e-h/gameachievement) | class | `PlayerProgressFlag` | 9 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`GameAchievementSettings`](/game-api/types/global-e-h/gameachievementsettings) | class | `GlobalSettings<GameAchievementSettings>` | 5 |  |
| [`GameAction`](/game-api/types/global-e-h/gameaction) | abstract class | `HashedGeneralValue<GameAction>` | 10 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`GameActionChannel`](/game-api/types/global-e-h/gameactionchannel) | enum |  | 10 | Channel a game action is filed under, such as destroying, crafting, repairing, docking, spawning, transferring or eating. |
| [`GameActionStat`](/game-api/types/global-e-h/gameactionstat) | class | `GameAction` | 2 |  |
| [`GameMode`](/game-api/types/global-e-h/gamemode) | abstract class |  | 6 | [Server lifecycle](../networking/server-lifecycle.md): Abstract base: `IsClient`, `IsServer`, `ActivateAsync()`, `StopModeAsync`. Subclasses: `ServerHostingGameMode`, `JoinedServerGameMode`, `LocalTestGameMode`. |
| [`GameModeManager`](/game-api/types/global-e-h/gamemodemanager) | static class |  | 8 | [Server lifecycle](../networking/server-lifecycle.md): `CurrentMode`, `CurrentGameServerInfo`, `StartServer`, `JoinServer`, `StartLocalTest`, `StopCurrentModeAsync`, event `ModeChanged`. |
| [`GameSceneVisuals`](/game-api/types/global-e-h/gamescenevisuals) | class | `MonoBehaviour` | 1 |  |
| [`GameServerInfoExtensions`](/game-api/types/global-e-h/gameserverinfoextensions) | static class |  | 3 |  |
| [`GameTaskActionArgument`](/game-api/types/global-e-h/gametaskactionargument) | class |  | 3 | Describes one action a player did, reported to `GameTaskManager` to update `GameAction` counts. Subclasses add details and pick a channel. |
| [`GameTaskManager`](/game-api/types/global-e-h/gametaskmanager) | class | `NetworkEntityBehaviour`, `IAutoSave` | 14 | [Other systems](../game-systems/other-systems.md#gametaskmanager): The singleton behind achievements, action stats and micro tutorial flags. `static GameTaskManager Instance`. |
| [`GameTimeManager`](/game-api/types/global-e-h/gametimemanager) | class | `NetworkEntityBehaviour`, `ISavable<GameTimeManagerSaveData>`, `ISavableSave<GameTimeManagerSaveData>`, +1 more | 22 | [Time and environment](../world/time-and-environment.md#gametimemanager): A scene `NetworkEntityBehaviour`. `public static GameTimeManager Instance` (a field). |
| [`GameTimeManager.TimeName`](/game-api/types/global-e-h/gametimemanager-timename) | class |  | 2 |  |
| [`GameTimeManagerSaveData`](/game-api/types/global-e-h/gametimemanagersavedata) | internal class | `NewSaveData<GameTimeManager, GameTimeManagerSaveData>` | 1 |  |
| [`GameTimeManagerSaveDataOld`](/game-api/types/global-e-h/gametimemanagersavedataold) | internal class | `OldSaveData` | 2 |  |
| [`GarbageCollectTimer`](/game-api/types/global-e-h/garbagecollecttimer) | class | `MonoBehaviour` | 0 | [Server lifecycle](../networking/server-lifecycle.md): On the scene. Only runs when the process is headless: every interval it asks for a non-blocking, optimized `GC.Collect` of every generation. |
| [`Garnisher`](/game-api/types/global-e-h/garnisher) | class | `ProfessionSkill<Garnisher>` | 0 |  |
| [`Garnisher.Create`](/game-api/types/global-e-h/garnisher-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<Garnisher>` | 0 |  |
| [`Gatherer`](/game-api/types/global-e-h/gatherer) | class | `PickupBasedSkill` | 3 |  |
| [`Gatherer.Create`](/game-api/types/global-e-h/gatherer-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<Gatherer>` | 0 |  |
| [`GaugeProgressBar`](/game-api/types/global-e-h/gaugeprogressbar) | class | `ProgressBar` | 2 |  |
| [`Gear`](/game-api/types/global-e-h/gear) | class | `Turnable` | 3 |  |
| [`GeneralInputType`](/game-api/types/global-e-h/generalinputtype) | enum |  | 21 |  |
| [`GeneratablePart`](/game-api/types/global-e-h/generatablepart) | abstract class | `MonoBehaviour` | 2 | Base for parts of a `GenerationCore` (a procedurally placed static piece) that adjust or add to it when it generates, such as aligning to a path or the terrain slope. |
| [`GeneratedPageProvider<T>`](/game-api/types/global-e-h/generatedpageprovider-t) | abstract class | `PageProvider` | 3 | Base for a page provider that builds a page from a hashed asset (for example an effect or recipe), saving only the asset's hash. |
| [`GeneratedPageSettings`](/game-api/types/global-e-h/generatedpagesettings) | class | `GlobalSettings<GeneratedPageSettings>` | 5 |  |
| [`GeneratedPageSettings.Create`](/game-api/types/global-e-h/generatedpagesettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<GeneratedPageSettings>` | 0 |  |
| [`GeneratedPositioning`](/game-api/types/global-e-h/generatedpositioning) | class | `ScriptableObject` | 1 |  |
| [`GeneratedPositioning.Create`](/game-api/types/global-e-h/generatedpositioning-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<GeneratedPositioning>` | 0 |  |
| [`GeneratedPositioning.Module`](/game-api/types/global-e-h/generatedpositioning-module) | abstract class | `ScriptableObject` | 1 |  |
| [`GeneratedPositioning.PositionModule`](/game-api/types/global-e-h/generatedpositioning-positionmodule) | enum |  | 1 |  |
| [`GeneratedPositioning.RotationModule`](/game-api/types/global-e-h/generatedpositioning-rotationmodule) | enum |  | 2 |  |
| [`GenerateUVPoints`](/game-api/types/global-e-h/generateuvpoints) | class | `MonoBehaviour` | 0 |  |
| [`GenerationCore`](/game-api/types/global-e-h/generationcore) | class | `StaticEnvironmentPieceInstance`, `IDistributionValue` | 12 | A procedural set piece (an encounter, a camp) placed by forest or cave generation. Its `GeneratablePart`s build static content first and, when the chunk is being generated, dynamic content after. |
| [`GenerationStarter`](/game-api/types/global-e-h/generationstarter) | class | `NetworkEntityBehaviour`, `ISavable<GenerationStartSaveData>`, `ISavableSave<GenerationStartSaveData>`, +1 more | 3 |  |
| [`GenerationStartSaveData`](/game-api/types/global-e-h/generationstartsavedata) | class | `NewSaveData<GenerationStarter, GenerationStartSaveData>` | 5 |  |
| [`GenericCraftingRecipePageProvider`](/game-api/types/global-e-h/genericcraftingrecipepageprovider) | class | `GeneratedPageProvider<GenericCraftingRecipe>` | 5 |  |
| [`GenericCraftingRecipePageSettings`](/game-api/types/global-e-h/genericcraftingrecipepagesettings) | class | `GlobalSettings<GenericCraftingRecipePageSettings>` | 6 | Global settings for generated crafting recipe pages: the page template and where the item and material glyphs go. |
| [`GenericCraftingRecipePageSettings.Create`](/game-api/types/global-e-h/genericcraftingrecipepagesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<GenericCraftingRecipePageSettings>` | 0 |  |
| [`GenericOpenXRInputController`](/game-api/types/global-e-h/genericopenxrinputcontroller) | class | `OpenXRInputController` | 1 |  |
| [`GenericReplacer`](/game-api/types/global-e-h/genericreplacer) | class | `NetworkEntityBehaviour` | 1 |  |
| [`GestureMap`](/game-api/types/global-e-h/gesturemap) | class | `ScriptableObject` | 4 |  |
| [`GestureMap.Create`](/game-api/types/global-e-h/gesturemap-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<GestureMap>` | 0 |  |
| [`GetComponentInPrefabRootAttribute`](/game-api/types/global-e-h/getcomponentinprefabrootattribute) | class | `GetComponentAttribute` | 1 |  |
| [`GetInteractionPlayer`](/game-api/types/global-e-h/getinteractionplayer) | class | `MonoBehaviour` | 0 |  |
| [`GetSizeTest`](/game-api/types/global-e-h/getsizetest) | class | `MonoBehaviour` | 1 |  |
| [`GhostBook`](/game-api/types/global-e-h/ghostbook) | class | `PooledObject` | 4 |  |
| [`GhostHandSettings`](/game-api/types/global-e-h/ghosthandsettings) | class | `ScriptableObject` | 2 |  |
| [`GhostHandSettings.Create`](/game-api/types/global-e-h/ghosthandsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<GhostHandSettings>` | 0 |  |
| [`GhostSnapChannel`](/game-api/types/global-e-h/ghostsnapchannel) | class | `ScriptableObject` | 0 |  |
| [`GhostSnapChannel.Create`](/game-api/types/global-e-h/ghostsnapchannel-create) | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<GhostSnapChannel>` | 0 |  |
| [`GhostSnapObject`](/game-api/types/global-e-h/ghostsnapobject) | class | `NetworkEntityBehaviour` | 7 | An item that shows a ghost preview at a matching `GhostSnapSlot` while held, and snaps into it when let go. The server does the snap. |
| [`GhostSnapSlot`](/game-api/types/global-e-h/ghostsnapslot) | class | `MonoBehaviour`, `IChildSyncable<GhostSnapSlot, GhostSnapSlotCollectionSaveData.Element>`, `IChildSyncable<GhostSnapSlot>` | 6 | A slot that shows a ghost preview when a matching `GhostSnapObject` is brought near and holds it when snapped. The held object rides on this entity and saves as its child. |
| [`GhostSnapSlotCollection`](/game-api/types/global-e-h/ghostsnapslotcollection) | class | `ChildSyncableCollection<GhostSnapSlot, GhostSnapSlotCollection, GhostSnapSlotCollectionSaveData, GhostSnapSlotCollectionSaveData.Element>` | 1 |  |
| [`GhostSnapSlotCollectionSaveData`](/game-api/types/global-e-h/ghostsnapslotcollectionsavedata) | class | `ChildSyncableCollectionSaveData<GhostSnapSlotCollectionSaveData, GhostSnapSlotCollection, GhostSnapSlotCollectionSaveData.Element>` | 0 |  |
| [`GhostSnapSlotCollectionSaveData.Element`](/game-api/types/global-e-h/ghostsnapslotcollectionsavedata-element) | class |  | 0 |  |
| [`GizmosExtension`](/game-api/types/global-e-h/gizmosextension) | static class |  | 24 | Static helpers that draw shapes with Unity `Gizmos`, for use inside `OnDrawGizmos`. Each overload with a colour restores the previous gizmo colour. |
| [`GlyphDisplayer`](/game-api/types/global-e-h/glyphdisplayer) | class | `PooledObject` | 4 |  |
| [`GlyphPosition`](/game-api/types/global-e-h/glyphposition) | struct |  | 4 | Where a glyph goes on a page: position, rotation and scale. Used by the generated page settings. |
| [`GrabAssistController`](/game-api/types/global-e-h/grabassistcontroller) | class |  | 8 | [Items, interaction and damage](../items/overview.md) |
| [`GrabAssistEventData`](/game-api/types/global-e-h/grabassisteventdata) | struct |  | 4 |  |
| [`GrabAssistSettings`](/game-api/types/global-e-h/grabassistsettings) | class | `GlobalSettings<GrabAssistSettings>` | 19 | Global settings for grab assist, which searches a short path from the hand to find an item to grab and draws the path and target. Get it with `GlobalSettings<GrabAssistSettings>.Instance`. |
| [`GrabAssistView`](/game-api/types/global-e-h/grabassistview) | class |  | 3 |  |
| [`GrabPoint`](/game-api/types/global-e-h/grabpoint) | class |  | 14 | [Grab points and hand-touch points](../items/grab-points.md#grabpoint): A plain serialized class, not a component. Runs wherever a grab is worked out (the holder's client first, then replayed elsewhere from the synced grab point). |
| [`GrabPointArguments`](/game-api/types/global-e-h/grabpointarguments) | struct | `INetworkInteractArgument` | 7 |  |
| [`GrabPointParameters`](/game-api/types/global-e-h/grabpointparameters) | class |  | 5 | Which grab point of a pickup a hand holds and where along it, so a grab can be sent over the network and reapplied. |
| [`GravityChanger`](/game-api/types/global-e-h/gravitychanger) | class | `MonoBehaviour` | 1 |  |
| [`GridSpawner`](/game-api/types/global-e-h/gridspawner) | class | `MonoBehaviour` | 0 |  |
| [`GrowerComponent`](/game-api/types/global-e-h/growercomponent) | class | `NetworkEntityBehaviour`, `IGrowthStage`, `ISavable<GrowthSaveData>`, +2 more | 9 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md#growercomponent): Each stage, the private `GoToStage` rolls survival and runs the checks. |
| [`GrowerGroup`](/game-api/types/global-e-h/growergroup) | class | `NetworkEntityBehaviour`, `ISavable<GrowerGroupSaveData>`, `ISavableSave<GrowerGroupSaveData>`, +2 more | 7 |  |
| [`GrowerGroupSaveData`](/game-api/types/global-e-h/growergroupsavedata) | class | `NewSaveData<GrowerGroup, GrowerGroupSaveData>` | 1 |  |
| [`GrowerGroupSaveData.Item`](/game-api/types/global-e-h/growergroupsavedata-item) | class |  | 8 |  |
| [`GrowthDefinition`](/game-api/types/global-e-h/growthdefinition) | class | `HashedGeneralValue<GrowthDefinition>` | 2 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md#growthdefinition-and-growthstage) |
| [`GrowthItem`](/game-api/types/global-e-h/growthitem) | class |  | 21 | One growing plant inside a `GrowerGroup`: steps through a `GrowthDefinition`'s stages on timeline timers, spawning each stage's prefab as a child. Server side. |
| [`GrowthSaveData`](/game-api/types/global-e-h/growthsavedata) | class | `NewSaveData<GrowerComponent, GrowthSaveData>` | 8 | Save data for a `GrowerComponent`: definition, stage, start time and which child is the current stage object. |
| [`GrowthStage`](/game-api/types/global-e-h/growthstage) | class |  | 16 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md#growthdefinition-and-growthstage) |
| [`GrowthStageComponent`](/game-api/types/global-e-h/growthstagecomponent) | class | `NetworkEntityBehaviour`, `ISavable<GrowthStageSaveData>`, `ISavableSave<GrowthStageSaveData>`, +2 more | 9 | On a prefab spawned as a growth stage: remembers which grower, definition and stage it belongs to. |
| [`GrowthStageSaveData`](/game-api/types/global-e-h/growthstagesavedata) | class | `NewSaveData<GrowthStageComponent, GrowthStageSaveData>` | 2 |  |
| [`GuidedMovement`](/game-api/types/global-e-h/guidedmovement) | class | `MonoBehaviour` | 2 |  |
| [`GymnasiumChunkResizer`](/game-api/types/global-e-h/gymnasiumchunkresizer) | class | `MonoBehaviour` | 2 |  |
| [`GymnasiumCraftingIngredientSpawner`](/game-api/types/global-e-h/gymnasiumcraftingingredientspawner) | class | `MonoBehaviour` | 0 |  |
| [`GymnasiumOnDemandPrefabSpawnerData`](/game-api/types/global-e-h/gymnasiumondemandprefabspawnerdata) | class | `NewSaveData<GymnasiumOnDemandPrefabSpawner, GymnasiumOnDemandPrefabSpawnerData>` | 2 |  |
| [`GymnasiumStaticContentSpawner`](/game-api/types/global-e-h/gymnasiumstaticcontentspawner) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 3 |  |

## H

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`HandCollisionsController`](/game-api/types/global-e-h/handcollisionscontroller) | class | `MonoBehaviour` | 4 |  |
| [`HandFingers`](/game-api/types/global-e-h/handfingers) | enum |  | 5 |  |
| [`HandGestureController`](/game-api/types/global-e-h/handgesturecontroller) | class | `ControllerExtension`, `INetworkSerialized`, `INetworkEntityBehaviour` | 5 |  |
| [`HandGestureDefinition`](/game-api/types/global-e-h/handgesturedefinition) | class | `ScriptableObject` | 4 | A hand gesture asset (such as pointing), matched to a transition on the hand animator. All of them are loaded from `Resources/Gesture Definitions`. |
| [`HandGestureDefinition.Create`](/game-api/types/global-e-h/handgesturedefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<HandGestureDefinition>` | 0 |  |
| [`HandGestureTrigger`](/game-api/types/global-e-h/handgesturetrigger) | class | `MonoBehaviour` | 0 |  |
| [`HandHandler`](/game-api/types/global-e-h/handhandler) | class |  | 14 | Client: per-hand state for smooth locomotion, with the hand's controller and its teleporter, rotator and gesture input. Get them from `SmoothLocomotion.LeftHand` and `RightHand`. |
| [`HandHoverPoint`](/game-api/types/global-e-h/handhoverpoint) | class | `NetworkEntityBehaviour`, `IGameCondition` | 9 | [Grab points and hand-touch points](../items/grab-points.md#handhoverpoint), [Other systems](../game-systems/other-systems.md): Needs an `Interactable` on the same object. The hand tracking runs on the server and on the hovering player's client; the server decides activation. |
| [`HandIndex`](/game-api/types/global-e-h/handindex) | enum |  | 3 | Which hand: `Left`, `Right` or `Both`. |
| [`HandInteractor`](/game-api/types/global-e-h/handinteractor) | class | `MonoBehaviour` | 4 |  |
| [`HandInteractor.HandInteraction`](/game-api/types/global-e-h/handinteractor-handinteraction) | class |  | 1 |  |
| [`HandleCommand`](/game-api/types/global-e-h/handlecommand) | delegate |  | 0 |  |
| [`HandleEnchantment`](/game-api/types/global-e-h/handleenchantment) | class | `MonoBehaviour` | 0 |  |
| [`HandleHandler`](/game-api/types/global-e-h/handlehandler) | class | `UnityEvent<float>` | 0 |  |
| [`HandleValueEvent`](/game-api/types/global-e-h/handlevalueevent) | class | `AltaEvent<float, HandleHandler>` | 0 |  |
| [`HandOnSideStructure`](/game-api/types/global-e-h/handonsidestructure) | class | `HandPositionStructure` | 0 |  |
| [`HandPositionInput`](/game-api/types/global-e-h/handpositioninput) | class | `ISkillInputMethod` | 3 |  |
| [`HandPositionInputModifier`](/game-api/types/global-e-h/handpositioninputmodifier) | abstract class | `ScriptableObject` | 1 |  |
| [`HandPositionStructure`](/game-api/types/global-e-h/handpositionstructure) | abstract class | `SkillInputStructure` | 4 | Base asset for skill inputs triggered by holding a hand in a set position (such as hand to heart) for a time. Subclasses decide what counts as in position. |
| [`HandSettings`](/game-api/types/global-e-h/handsettings) | class | `ScriptableObject` | 5 | Settings asset for player hands, read by `Hand` from the player controller's settings. |
| [`HandSettings.Create`](/game-api/types/global-e-h/handsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<HandSettings>` | 0 |  |
| [`HandToHeartInputStructure`](/game-api/types/global-e-h/handtoheartinputstructure) | class | `HandPositionStructure` | 0 |  |
| [`HandToHeartInputStructure.Create`](/game-api/types/global-e-h/handtoheartinputstructure-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<HandToHeartInputStructure>` | 0 |  |
| [`HandTouchTask`](/game-api/types/global-e-h/handtouchtask) | class | `CustomArgumentGameAction<HandTouchTaskArgument>` | 1 |  |
| [`HandTouchTaskArgument`](/game-api/types/global-e-h/handtouchtaskargument) | class | `GameTaskActionArgument` | 3 | [Other systems](../game-systems/other-systems.md) |
| [`HandTriangle`](/game-api/types/global-e-h/handtriangle) | class |  | 3 |  |
| [`HashComparer`](/game-api/types/global-e-h/hashcomparer) | class | `IEqualityComparer<uint>` | 1 |  |
| [`HashedGeneralValuesWarmer`](/game-api/types/global-e-h/hashedgeneralvalueswarmer) | class | `MonoBehaviour` | 0 |  |
| [`HashFunction`](/game-api/types/global-e-h/hashfunction) | abstract class |  | 16 | Base for a seeded hash that turns integers into repeatable pseudo-random values. `XXHash` is the one used for cave seeds. |
| [`HashSetAction<T>`](/game-api/types/global-e-h/hashsetaction-t) | abstract class | `CustomArgumentGameAction<T>` | 1 | Base for game task actions whose filters are sets built on first use. An empty set matches anything. |
| [`HealthBasedDigable`](/game-api/types/global-e-h/healthbaseddigable) | class | `BasicDigable`, `ISavable<HealthBasedDigableData>`, `ISavableSave<HealthBasedDigableData>`, +1 more | 3 |  |
| [`HealthBasedDigableData`](/game-api/types/global-e-h/healthbaseddigabledata) | class | `NewSaveData<HealthBasedDigable, HealthBasedDigableData>` | 1 |  |
| [`HealthChannel`](/game-api/types/global-e-h/healthchannel) | class | `ScriptableObject` | 2 |  |
| [`HealthChannel.Create`](/game-api/types/global-e-h/healthchannel-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Impact.ScriptableObject<HealthChannel>` | 0 |  |
| [`HealthObject`](/game-api/types/global-e-h/healthobject) | class | `NetworkEntityBehaviour` | 22 | [Health and damage](../items/health-and-damage.md#healthobject), [Impacts and hit detection](../items/impacts.md): A `NetworkEntityBehaviour` on creatures, players, breakable things, ore and trees. `PlayerHealth` and `FakePlayerHealth` derive from it. |
| [`HealthObject.DeathAnalytics`](/game-api/types/global-e-h/healthobject-deathanalytics) | struct |  | 4 |  |
| [`HealthObject.HealthChangedHandler`](/game-api/types/global-e-h/healthobject-healthchangedhandler) | delegate |  | 0 |  |
| [`HealthObjectEvent`](/game-api/types/global-e-h/healthobjectevent) | class | `AltaEvent<HealthObject, HealthObjectUnityEvent>` | 0 |  |
| [`HealthObjectUnityEvent`](/game-api/types/global-e-h/healthobjectunityevent) | class | `UnityEvent<HealthObject>` | 0 |  |
| [`HeartCall`](/game-api/types/global-e-h/heartcall) | class | `PickupBasedSkill` | 5 |  |
| [`HeartCall.Create`](/game-api/types/global-e-h/heartcall-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<HeartCall>` | 0 |  |
| [`HeatPointCollectionSaveData`](/game-api/types/global-e-h/heatpointcollectionsavedata) | class | `ChildSyncableCollectionSaveData<HeatPointCollectionSaveData, HeatPointCollection, HeatPointCollectionSaveData.Element>` | 0 |  |
| [`HeatPointCollectionSaveData.Element`](/game-api/types/global-e-h/heatpointcollectionsavedata-element) | class |  | 1 |  |
| [`HeatPointTriggerCollector`](/game-api/types/global-e-h/heatpointtriggercollector) | class | `MonoBehaviour` | 2 |  |
| [`HebiosEnchant`](/game-api/types/global-e-h/hebiosenchant) | class | `PickupBasedSkill` | 3 |  |
| [`HebiosEnchant.Create`](/game-api/types/global-e-h/hebiosenchant-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<HebiosEnchant>` | 0 |  |
| [`HeightFilter`](/game-api/types/global-e-h/heightfilter) | class | `SpawnModifierPointNormal` | 1 |  |
| [`HeightFilter.Create`](/game-api/types/global-e-h/heightfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<HeightFilter>` | 0 |  |
| [`HeightProgressFilter`](/game-api/types/global-e-h/heightprogressfilter) | class | `SpawnModifierPointNormal` | 1 |  |
| [`HeightProgressFilter.Create`](/game-api/types/global-e-h/heightprogressfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<HeightProgressFilter>` | 0 |  |
| [`HeldPickupHandler`](/game-api/types/global-e-h/heldpickuphandler) | class |  | 13 | [Items, interaction and damage](../items/overview.md) |
| [`HierarchyInteractionFilter`](/game-api/types/global-e-h/hierarchyinteractionfilter) | class | `MonoBehaviour` | 0 |  |
| [`HistoryAccess`](/game-api/types/global-e-h/historyaccess) | abstract class | `MonoBehaviour`, `IHasHistory`, `IHistoryManager` | 7 | Component front for an undo and redo history, raising bool events when undo or redo becomes possible or not, for buttons. |
| [`HistoryManager<T>`](/game-api/types/global-e-h/historymanager-t) | class | `IHistoryManager<T>`, `IHistoryManager` | 9 |  |
| [`HitboxVisualizer`](/game-api/types/global-e-h/hitboxvisualizer) | class | `MonoBehaviour` | 0 | [Items, interaction and damage](../items/overview.md) |
| [`HitSpawnData`](/game-api/types/global-e-h/hitspawndata) | class | `SpawnData` | 2 |  |
| [`HoverAnimator`](/game-api/types/global-e-h/hoveranimator) | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 2 |  |
| [`HoverPickup`](/game-api/types/global-e-h/hoverpickup) | class | `MonoBehaviour` | 5 | [Items, interaction and damage](../items/overview.md): Floats a pickup back to a target spot when it's let go. |
| [`HsvLerp`](/game-api/types/global-e-h/hsvlerp) | class | `MonoBehaviour` | 0 |  |
