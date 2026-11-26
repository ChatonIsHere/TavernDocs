---
title: "No namespace: S"
description: "Root.Township types with no namespace, S."
sidebar_position: 22
---

# No namespace: S

Types in `Root.Township` with no namespace (the global namespace), from S. 315 types, 16 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## S

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`SABoneCollider`](/game-api/types/global-s/sabonecollider) | class | `MonoBehaviour` | 22 | Editor tool component (from the SAColliderBuilder asset) that holds settings for generating colliders on a bone, and marks the object's name with `*` or `+` when it or its children were edited. |
| [`SABoneColliderBuilder`](/game-api/types/global-s/sabonecolliderbuilder) | class | `MonoBehaviour` | 8 |  |
| [`SABoneColliderChild`](/game-api/types/global-s/sabonecolliderchild) | class | `MonoBehaviour` | 0 |  |
| [`SABoneColliderCommon`](/game-api/types/global-s/sabonecollidercommon) | class |  | 0 |  |
| [`SABoneColliderCommon.BoneProperty`](/game-api/types/global-s/sabonecollidercommon-boneproperty) | class |  | 2 | Per-bone option for the SA bone collider builder (a third-party editor tool for making colliders from skinned meshes). |
| [`SABoneColliderCommon.BoneTriangleExtent`](/game-api/types/global-s/sabonecollidercommon-bonetriangleextent) | enum |  | 3 |  |
| [`SABoneColliderCommon.BoneWeightType`](/game-api/types/global-s/sabonecollidercommon-boneweighttype) | enum |  | 2 |  |
| [`SABoneColliderCommon.SABoneColliderBuilderProperty`](/game-api/types/global-s/sabonecollidercommon-sabonecolliderbuilderproperty) | class |  | 7 | Settings for the SA bone collider builder (third-party editor tool): how to split, reduce and shape colliders for each bone, and what rigidbodies to add. |
| [`SABoneColliderCommon.SABoneColliderProperty`](/game-api/types/global-s/sabonecollidercommon-sabonecolliderproperty) | class |  | 7 | Editor settings for building colliders on one bone (from the SA collider builder tool): bone, split, reducer, collider and rigidbody options. |
| [`SABoneColliderCommon.SplitProperty`](/game-api/types/global-s/sabonecollidercommon-splitproperty) | class |  | 7 | Settings for how the SA collider builder (a third-party editor tool) splits a skinned mesh by bone weight before making bone colliders. Editor data only, nothing in game code reads it. |
| [`SAColliderBuilderCommon`](/game-api/types/global-s/sacolliderbuildercommon) | class |  | 0 |  |
| [`SAColliderBuilderCommon.Bool3`](/game-api/types/global-s/sacolliderbuildercommon-bool3) | struct |  | 4 |  |
| [`SAColliderBuilderCommon.ColliderProperty`](/game-api/types/global-s/sacolliderbuildercommon-colliderproperty) | class |  | 5 | Editor collider builder options for generated colliders. |
| [`SAColliderBuilderCommon.ColliderToChild`](/game-api/types/global-s/sacolliderbuildercommon-collidertochild) | enum |  | 3 |  |
| [`SAColliderBuilderCommon.ElementType`](/game-api/types/global-s/sacolliderbuildercommon-elementtype) | enum |  | 2 | Whether a collider builder setting (scale, minimum thickness, rotation optimisation) uses one value for all axes or one per axis. |
| [`SAColliderBuilderCommon.FitType`](/game-api/types/global-s/sacolliderbuildercommon-fittype) | enum |  | 2 |  |
| [`SAColliderBuilderCommon.MeshType`](/game-api/types/global-s/sacolliderbuildercommon-meshtype) | enum |  | 4 |  |
| [`SAColliderBuilderCommon.ReducerProperty`](/game-api/types/global-s/sacolliderbuildercommon-reducerproperty) | class |  | 17 | Mesh reduction settings for the third-party SA Collider Builder editor tool (how a mesh is simplified into colliders). Editor-time data. |
| [`SAColliderBuilderCommon.RigidbodyProperty`](/game-api/types/global-s/sacolliderbuildercommon-rigidbodyproperty) | class |  | 10 | Editor tool settings from the SAColliderBuilder package: the Rigidbody to add when building colliders. |
| [`SAColliderBuilderCommon.ShapeType`](/game-api/types/global-s/sacolliderbuildercommon-shapetype) | enum |  | 5 |  |
| [`SAColliderBuilderCommon.SliceMode`](/game-api/types/global-s/sacolliderbuildercommon-slicemode) | enum |  | 4 |  |
| [`SafePositionSetter`](/game-api/types/global-s/safepositionsetter) | class | `NetworkEntityBehaviour`, `ISavable<SafePositionSetterData>`, `ISavableSave<SafePositionSetterData>`, +1 more | 3 |  |
| [`SafePositionSetterData`](/game-api/types/global-s/safepositionsetterdata) | class | `NewSaveData<SafePositionSetter, SafePositionSetterData>` | 1 |  |
| [`SafetySpline`](/game-api/types/global-s/safetyspline) | class | `TerrainSpline` | 1 |  |
| [`SAMeshCollider`](/game-api/types/global-s/sameshcollider) | class | `MonoBehaviour` | 26 | Component from the third-party SA Collider Builder editor tool: holds the settings used to build mesh colliders for an object. Editor-time data; nothing in the game reads it at runtime. |
| [`SAMeshColliderBuilder`](/game-api/types/global-s/sameshcolliderbuilder) | class | `MonoBehaviour` | 12 | Editor component from the SA Collider Builder tool that builds mesh colliders for its object. The properties are shortcuts into `meshColliderBuilderProperty`. |
| [`SAMeshColliderCommon`](/game-api/types/global-s/sameshcollidercommon) | class |  | 0 |  |
| [`SAMeshColliderCommon.SAMeshColliderBuilderProperty`](/game-api/types/global-s/sameshcollidercommon-sameshcolliderbuilderproperty) | class |  | 7 | Settings for the SA mesh collider builder (third-party editor tool): how to split, reduce and shape colliders made from a mesh. |
| [`SAMeshColliderCommon.SAMeshColliderProperty`](/game-api/types/global-s/sameshcollidercommon-sameshcolliderproperty) | class |  | 6 | All the settings of one SA mesh collider build (split, reducer, collider and rigidbody options), from the third-party SA collider builder tool. Held by `SAMeshCollider`. |
| [`SAMeshColliderCommon.SplitMesh`](/game-api/types/global-s/sameshcollidercommon-splitmesh) | class |  | 10 |  |
| [`SAMeshColliderCommon.SplitMode`](/game-api/types/global-s/sameshcollidercommon-splitmode) | enum |  | 4 |  |
| [`SAMeshColliderCommon.SplitProperty`](/game-api/types/global-s/sameshcollidercommon-splitproperty) | class |  | 5 | How the SA mesh collider builder (a third-party editor tool) splits a mesh into separate pieces before making a collider for each. |
| [`SaveableTransform`](/game-api/types/global-s/saveabletransform) | abstract class | `ScriptableObject` | 3 |  |
| [`SavePrefabAtButton`](/game-api/types/global-s/saveprefabatbutton) | class | `MonoBehaviour` | 2 |  |
| [`SaveStructureAttribute`](/game-api/types/global-s/savestructureattribute) | class | `Attribute` | 3 |  |
| [`ScaleAnimator`](/game-api/types/global-s/scaleanimator) | class |  | 8 | Helper that scales a behaviour's transform in or out along "on" and "off" curves, using a coroutine on that behaviour. |
| [`ScaledLerpFollow`](/game-api/types/global-s/scaledlerpfollow) | class | `LerpFollowBase<PlayerController>` | 5 |  |
| [`ScaleLerp`](/game-api/types/global-s/scalelerp) | class | `MonoBehaviour` | 1 |  |
| [`ScaleLerpPooledObject`](/game-api/types/global-s/scalelerppooledobject) | class | `PooledObject` | 1 | A pooled object that grows from tiny to its start size when taken from the pool and shrinks away before it goes back. Client-side visual effect. |
| [`ScalePulsator`](/game-api/types/global-s/scalepulsator) | class | `MonoBehaviour` | 7 |  |
| [`ScaleTracker`](/game-api/types/global-s/scaletracker) | class | `MonoBehaviour` | 0 |  |
| [`ScaleWithScoreModifier`](/game-api/types/global-s/scalewithscoremodifier) | class | `SpawnModifierSpawnParameters` | 1 |  |
| [`ScaleWithScoreModifier.Create`](/game-api/types/global-s/scalewithscoremodifier-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<ScaleWithScoreModifier>` | 0 |  |
| [`SceneChangeTimer`](/game-api/types/global-s/scenechangetimer) | class | `MonoBehaviour` | 0 |  |
| [`SceneCubeMaps`](/game-api/types/global-s/scenecubemaps) | class |  | 1 |  |
| [`SceneLoadingProgress`](/game-api/types/global-s/sceneloadingprogress) | class | `MonoBehaviour` | 0 |  |
| [`SceneStaticObjectCombiner`](/game-api/types/global-s/scenestaticobjectcombiner) | class | `StaticObjectCombiner` | 2 |  |
| [`SceneViewCamera`](/game-api/types/global-s/sceneviewcamera) | class | `NetworkEntityBehaviour` | 1 |  |
| [`SceneViewVisualizer`](/game-api/types/global-s/sceneviewvisualizer) | class | `MonoBehaviour` | 0 |  |
| [`ScrapperExtension`](/game-api/types/global-s/scrapperextension) | static class |  | 1 |  |
| [`ScreenShotAlpha`](/game-api/types/global-s/screenshotalpha) | class | `PostProcessEffectSettings` | 3 |  |
| [`ScreenShotAlphaRenderer`](/game-api/types/global-s/screenshotalpharenderer) | internal class | `PostProcessEffectRenderer<ScreenShotAlpha>` | 1 |  |
| [`ScreenShotExtension`](/game-api/types/global-s/screenshotextension) | class | `ControllerExtension` | 0 |  |
| [`ScreenshotTaker`](/game-api/types/global-s/screenshottaker) | class |  | 6 |  |
| [`ScreenshotTaker.ImageFormat`](/game-api/types/global-s/screenshottaker-imageformat) | enum |  | 3 |  |
| [`ScriptedRotation`](/game-api/types/global-s/scriptedrotation) | class | `MonoBehaviour` | 1 |  |
| [`ScrollElement`](/game-api/types/global-s/scrollelement) | class | `MonoBehaviour` | 4 | Base for an item in a scrolling list that is shown or hidden by index. |
| [`ScrollWheel`](/game-api/types/global-s/scrollwheel) | class | `MonoBehaviour` | 0 |  |
| [`SeasonalLeaves`](/game-api/types/global-s/seasonalleaves) | class | `NetworkEntityBehaviour` | 2 |  |
| [`SecondaryCollisionCheck`](/game-api/types/global-s/secondarycollisioncheck) | class | `MonoBehaviour` | 0 |  |
| [`SectorName`](/game-api/types/global-s/sectorname) | class |  | 2 |  |
| [`SectorNames`](/game-api/types/global-s/sectornames) | class |  | 3 |  |
| [`SelectedElementChanged`](/game-api/types/global-s/selectedelementchanged) | delegate |  | 0 | Callback for the selected server changing in the server list, with the old and new `ServerElement`. |
| [`SelectionBase`](/game-api/types/global-s/selectionbase) | class | `MonoBehaviour` | 0 |  |
| [`SelectionLever`](/game-api/types/global-s/selectionlever) | class | `MonoBehaviour` | 9 | [Buttons and levers](../items/buttons-and-levers.md): A lever with several positions. |
| [`SendToSafetyLocoAction`](/game-api/types/global-s/sendtosafetylocoaction) | class | `LocomotionModifierAction` | 2 |  |
| [`SentGift`](/game-api/types/global-s/sentgift) | class | `NetworkEntityBehaviour`, `ISavable<SentGiftData>`, `ISavableSave<SentGiftData>`, +1 more | 5 |  |
| [`SentGiftData`](/game-api/types/global-s/sentgiftdata) | class | `NewSaveData<SentGift, SentGiftData>` | 4 |  |
| [`SentGiftTag`](/game-api/types/global-s/sentgifttag) | class |  | 4 | The sender and receiver of a gift sent by post box, saved with the `SentGift`. |
| [`SerializableServerSettings`](/game-api/types/global-s/serializableserversettings) | class |  | 5 |  |
| [`SerializedImpactHit`](/game-api/types/global-s/serializedimpacthit) | struct |  | 8 | A tool hit packed for the network by `ImpactSystemHitManager`: the tool entity, where it hit and the damage values. |
| [`SerializedRenderTextureDescriptor`](/game-api/types/global-s/serializedrendertexturedescriptor) | class |  | 7 | Inspector-editable render texture settings that can hand out a temporary render texture. |
| [`SerializedSavedDynamicObject`](/game-api/types/global-s/serializedsaveddynamicobject) | class | `SavedDynamicObject` | 11 | A saved object (prefab hash plus its serialized state) in a form Unity can serialize, with the chunk versioning it was saved under. Used for postboxes, set pieces and spawn strings. |
| [`SerializedTimedEvent`](/game-api/types/global-s/serializedtimedevent) | class | `NetworkEntityBehaviour`, `ISavable<TimedEventSaveData>`, `ISavableSave<TimedEventSaveData>`, +1 more | 3 |  |
| [`SerializeValue<T>`](/game-api/types/global-s/serializevalue-t) | delegate |  | 0 |  |
| [`ServerAchievementEvent`](/game-api/types/global-s/serverachievementevent) | class | `MonoBehaviour` | 0 |  |
| [`ServerBoard`](/game-api/types/global-s/serverboard) | class | `MonoBehaviour` | 12 | A server list board in the main menu (public, my servers, open or discover). Fetches its list from the Alta API every `updateInterval` seconds while logged in, filters and shows it. Client only. |
| [`ServerBoardType`](/game-api/types/global-s/serverboardtype) | enum |  | 4 | Which list a server board in the menu shows: public servers, my servers, open servers or discover. |
| [`ServerCacheManager`](/game-api/types/global-s/servercachemanager) | class | `CacheManager` | 4 |  |
| [`ServerConfigFileManager`](/game-api/types/global-s/serverconfigfilemanager) | class |  | 1 |  |
| [`ServerConfiguration`](/game-api/types/global-s/serverconfiguration) | class | `ICloneable` | 3 | A server's join list, saved as JSON in the server's `server_config` file. The old join handler checks it when a player connects. |
| [`ServerConsole`](/game-api/types/global-s/serverconsole) | abstract class |  | 5 | [Logging](../console-and-utilities/logging.md) |
| [`ServerConsoleManager`](/game-api/types/global-s/serverconsolemanager) | class | `SingletonBehaviour<ServerConsoleManager>` | 5 | [Remote console](../console-and-utilities/remote-console.md#serverconsolemanager), [Startup and app state](../console-and-utilities/startup-and-app-state.md): Get it with `SingletonBehaviour<ServerConsoleManager>.Instance`; most of what you need is static. |
| [`ServerCreator`](/game-api/types/global-s/servercreator) | class | `MonoBehaviour` | 1 |  |
| [`ServerCubeMaps`](/game-api/types/global-s/servercubemaps) | class | `ScriptableObject` | 3 |  |
| [`ServerCubeMaps.Create`](/game-api/types/global-s/servercubemaps-create) | class | `AltaMenuItemBase.Assets.Create.Township.Meta.ScriptableObject<ServerCubeMaps>` | 0 |  |
| [`ServerDiagnosticsManager`](/game-api/types/global-s/serverdiagnosticsmanager) | class | `MonoBehaviour` | 3 |  |
| [`ServerDiagnosticsSettings`](/game-api/types/global-s/serverdiagnosticssettings) | class | `GlobalSettings<ServerDiagnosticsSettings>` | 2 |  |
| [`ServerDowntimeData`](/game-api/types/global-s/serverdowntimedata) | class |  | 6 | A date and time split into fields, probably for a planned server downtime. Not used elsewhere in this build. |
| [`ServerElement`](/game-api/types/global-s/serverelement) | class | `Interactable`, `IBuildRendererPostBake`, `IBuildBakeable` | 5 | One entry on the main menu's server list: shows a server's name, player count and playability colour, and can be selected. |
| [`ServerElementEvent`](/game-api/types/global-s/serverelementevent) | class | `AltaEvent<ServerElement, ServerElementUnityEvent>` | 0 | A serializable `AltaEvent` that passes a `ServerElement`, for wiring server list callbacks in the inspector. Client menu UI. |
| [`ServerElementUnityEvent`](/game-api/types/global-s/serverelementunityevent) | class | `UnityEvent<ServerElement>` | 0 |  |
| [`ServerHeartbeat`](/game-api/types/global-s/serverheartbeat) | class |  | 3 | [Startup and app state](../console-and-utilities/startup-and-app-state.md) |
| [`ServerHostingGameMode`](/game-api/types/global-s/serverhostinggamemode) | class | `GameMode` | 7 |  |
| [`ServerInfoBoard`](/game-api/types/global-s/serverinfoboard) | class | `MonoBehaviour` | 2 |  |
| [`ServerListType`](/game-api/types/global-s/serverlisttype) | enum |  | 3 | How `ServerConfiguration` uses its player list: `None` (ignored), `BlackList` (listed players blocked) or `WhiteList` (only listed players allowed). |
| [`ServerProfilingData`](/game-api/types/global-s/serverprofilingdata) | class |  | 61 | A snapshot of server performance numbers (FPS, networking, serialization, entity and creature counts, CPU and RAM) sent out by `ServerDiagnosticsManager` as the `ProfilingData` console event. Obsolete in favour of the analytics system; server only. |
| [`ServerRemoteConsole`](/game-api/types/global-s/serverremoteconsole) | class | `IRemoteConsole` | 7 | [Remote console](../console-and-utilities/remote-console.md) |
| [`ServerSelectionDisplay`](/game-api/types/global-s/serverselectiondisplay) | class | `MonoBehaviour` | 8 | Main menu server list laid out along a spline. Scrolling moves the elements along it; the one nearest the selection point is selected. Client only. |
| [`ServerSelectionMenu`](/game-api/types/global-s/serverselectionmenu) | class | `MonoBehaviour` | 9 | The main menu server picker: switches between server boards (my servers, open servers and so on), scrolls them by rope or wheel, and joins the selected server. Sets up once logged in. |
| [`ServerSelectionOrb`](/game-api/types/global-s/serverselectionorb) | class | `MonoBehaviour` | 1 |  |
| [`ServerSelector`](/game-api/types/global-s/serverselector) | class | `MonoBehaviour` | 0 |  |
| [`ServerUtilities`](/game-api/types/global-s/serverutilities) | class |  | 6 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#serverutilities), [Server settings](../networking/server-settings.md) |
| [`ServerWipeManager`](/game-api/types/global-s/serverwipemanager) | static class |  | 9 | [Saving](../networking/saving.md): `IsWiping` stops saves. |
| [`SetBoolean`](/game-api/types/global-s/setboolean) | class | `StateMachineBehaviour` | 4 |  |
| [`SetBoolParameter`](/game-api/types/global-s/setboolparameter) | class | `MonoBehaviour` | 2 |  |
| [`SetEnableOnGameObjects`](/game-api/types/global-s/setenableongameobjects) | class | `MonoBehaviour` | 0 |  |
| [`SetKinematicModifier`](/game-api/types/global-s/setkinematicmodifier) | class | `NetworkEntityModifiers` | 1 |  |
| [`SetNetworkPrefabModifier`](/game-api/types/global-s/setnetworkprefabmodifier) | class | `SpawnModifierSpawnParameters` | 1 |  |
| [`SetNetworkPrefabModifier.Create`](/game-api/types/global-s/setnetworkprefabmodifier-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<SetNetworkPrefabModifier>` | 0 |  |
| [`SetPiece`](/game-api/types/global-s/setpiece) | class | `NetworkEntityBehaviour`, `ISavable<SetPieceSaveData>`, `ISavableSave<SetPieceSaveData>`, +1 more | 5 |  |
| [`SetPieceData`](/game-api/types/global-s/setpiecedata) | class | `HashedGeneralValue<SetPieceData>` | 1 | An asset holding a saved dynamic object (a set piece) that can be spawned whole. `RepairBox` can spawn one when finished. |
| [`SetPieceSaveData`](/game-api/types/global-s/setpiecesavedata) | class | `NewSaveData<SetPiece, SetPieceSaveData>` | 1 |  |
| [`SetPrefabModifier`](/game-api/types/global-s/setprefabmodifier) | class | `SpawnModifierSpawnParameters` | 1 |  |
| [`SetPrefabModifier.Create`](/game-api/types/global-s/setprefabmodifier-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<SetPrefabModifier>` | 0 |  |
| [`SetStepSoundOverrideLocoAction`](/game-api/types/global-s/setstepsoundoverridelocoaction) | class | `LocomotionModifierAction` | 2 |  |
| [`SettingDescriptionPanel`](/game-api/types/global-s/settingdescriptionpanel) | class | `MonoBehaviour` | 1 | In-world text panel that shows the name and description of the setting a player is looking at on a settings board. Client side; reached through `SettingsPanel.DescriptionPanel`. |
| [`SettingsJsonUtility`](/game-api/types/global-s/settingsjsonutility) | class | `MonoBehaviour` | 0 |  |
| [`SettingsPanel`](/game-api/types/global-s/settingspanel) | class | `MonoBehaviour` | 3 | In-world settings board that slides down when a lever is pulled and shows that lever's board, then slides back up when every lever is off. Client side. |
| [`ShaderVariantWarmer`](/game-api/types/global-s/shadervariantwarmer) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 4 |  |
| [`ShakeDetector`](/game-api/types/global-s/shakedetector) | class | `MonoBehaviour` | 2 |  |
| [`ShakeDetectorFactory`](/game-api/types/global-s/shakedetectorfactory) | class |  | 1 |  |
| [`ShakeDetectorHelper`](/game-api/types/global-s/shakedetectorhelper) | class |  | 4 | Plain helper that tracks how hard a rigidbody is being shaken back and forth and fires an event past a threshold. Made by `ShakeDetector`, `ShakeDetectorFactory` and `ShakeInput`, which call `CalculateShake` each frame. |
| [`ShakeInput`](/game-api/types/global-s/shakeinput) | class | `ISkillInputMethod` | 3 |  |
| [`ShakeInputStructure`](/game-api/types/global-s/shakeinputstructure) | class | `SkillInputStructure` | 6 |  |
| [`ShakeInputStructure.Create`](/game-api/types/global-s/shakeinputstructure-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<ShakeInputStructure>` | 0 |  |
| [`ShapeCollectorHelper`](/game-api/types/global-s/shapecollectorhelper) | class | `MonoBehaviour` | 1 |  |
| [`ShapeImpactCollector`](/game-api/types/global-s/shapeimpactcollector) | abstract class | `ScriptableObject` | 3 | Asset describing a shape (sphere or cylinder) that collects the colliders an area attack hits. `AreaAttackSkill` picks one per skill level. |
| [`ShootArguments`](/game-api/types/global-s/shootarguments) | struct |  | 7 | Network payload for a shot from a bow or `Shooter`: the projectile entity, where it was released and how hard. Sent with a `MethodSyncStruct` in both directions. |
| [`Shooter`](/game-api/types/global-s/shooter) | class | `NetworkEntityBehaviour` | 4 | Launches a pickup (an arrow or any item) from a bow or similar launcher and syncs the shot. Both sides: the shooting client simulates and sends it, the server relays it to the chunk. |
| [`ShowBounds`](/game-api/types/global-s/showbounds) | class | `MonoBehaviour` | 0 |  |
| [`ShrineStructureAvailablePointsVisualizer`](/game-api/types/global-s/shrinestructureavailablepointsvisualizer) | class | `ExperienceFillVisualizer` | 0 |  |
| [`ShutdownOrderComparer`](/game-api/types/global-s/shutdownordercomparer) | class | `IComparer<Delegate>` | 1 |  |
| [`SignPointPart`](/game-api/types/global-s/signpointpart) | class | `GeneratablePart` | 1 |  |
| [`SignPostPanel`](/game-api/types/global-s/signpostpanel) | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 0 |  |
| [`SilenceAnimationEvents`](/game-api/types/global-s/silenceanimationevents) | class | `MonoBehaviour` | 4 |  |
| [`SimpleAudioControl`](/game-api/types/global-s/simpleaudiocontrol) | class |  | 1 |  |
| [`SimpleDummy`](/game-api/types/global-s/simpledummy) | class | `MonoBehaviour` | 2 | Plain holder for a character model's animator and skinned mesh, used by `BonesBaking` in the editor. |
| [`SimpleNetworkedPivot`](/game-api/types/global-s/simplenetworkedpivot) | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 3 |  |
| [`SimpleNoiseFilter`](/game-api/types/global-s/simplenoisefilter) | class | `SpawnModifierPoint` | 1 |  |
| [`SimpleNoiseFilter.Create`](/game-api/types/global-s/simplenoisefilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<SimpleNoiseFilter>` | 0 |  |
| [`SimplexNoise`](/game-api/types/global-s/simplexnoise) | class |  | 7 | Simplex noise in 2, 3 or 4 dimensions, with per-instance offsets added to the inputs. |
| [`SkillHitTarget`](/game-api/types/global-s/skillhittarget) | class | `PooledObject` | 1 |  |
| [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure) | abstract class | `ScriptableObject` | 3 | Asset describing how a tool-based skill is triggered (the input gesture), with default effects for charging, using and cancelling. |
| [`SkillOrb`](/game-api/types/global-s/skillorb) | class | `NetworkEntityBehaviour`, `ISkillOrb` | 18 | One orb at a skill shrine standing for a skill slot. Players grab it to practise the skill and pull it away to buy or sell. Spawned by `SkillShrine` on the server and not saved. |
| [`SkillOrbConnectionline`](/game-api/types/global-s/skillorbconnectionline) | class |  | 4 |  |
| [`SkillOrbDelegate`](/game-api/types/global-s/skillorbdelegate) | delegate |  | 0 |  |
| [`SkillOrbDestroyEffect`](/game-api/types/global-s/skillorbdestroyeffect) | class | `SkillOrbEffect` | 0 |  |
| [`SkillOrbEffect`](/game-api/types/global-s/skillorbeffect) | class | `PooledObject` | 4 |  |
| [`SkillOrbHolder`](/game-api/types/global-s/skillorbholder) | class | `MonoBehaviour` | 2 | Client visual for one orb socket in the bought-skills display: animates rotator pieces open or closed and lerps a colour. Driven by `BoughtSkillVisualizer`. |
| [`SkillOrbInteractionSpline`](/game-api/types/global-s/skillorbinteractionspline) | class | `PooledObject` | 2 |  |
| [`SkillOrbInteractionSpline.SplineParamaters`](/game-api/types/global-s/skillorbinteractionspline-splineparamaters) | enum |  | 4 |  |
| [`SkillOrbMovement`](/game-api/types/global-s/skillorbmovement) | class | `MonoBehaviour` | 6 | Moves a skill orb from its origin up to a midpoint, then out to its target slot, when a skill shrine spawns it. Reached through `SkillOrb.Movement`. |
| [`SkillOrbOperator`](/game-api/types/global-s/skillorboperator) | class | `MonoBehaviour` | 4 | The point on a skill shrine where a player holds a skill orb to buy or swap it. `SkillOrbReplacer` joins to it, drives the fill and breaks the joint when done. |
| [`SkillOrbReplacer`](/game-api/types/global-s/skillorbreplacer) | class | `ProgressionSlotContainer` | 3 | The orb a player pulls from a skill shrine to buy a skill. Holding it at the shrine's operator for a few seconds unlocks the slot; letting go floats it back and destroys it. |
| [`SkillOrbScaler`](/game-api/types/global-s/skillorbscaler) | class | `SkillShrineVisualizer` | 3 |  |
| [`SkillOrbStatusUpdateDelegate`](/game-api/types/global-s/skillorbstatusupdatedelegate) | delegate |  | 0 |  |
| [`SkillShrine`](/game-api/types/global-s/skillshrine) | class | `ProgressionShrine`, `ISavable<SkillShrineSaveData>`, `ISavableSave<SkillShrineSaveData>`, +1 more | 15 | A progression shrine showing one path's skill tree. When a player opens it, the server spawns a `SkillOrb` per slot and lines between them; closing removes them. The current path is saved. |
| [`SkillShrineRotator`](/game-api/types/global-s/skillshrinerotator) | class | `MonoBehaviour` | 0 |  |
| [`SkillShrineSaveData`](/game-api/types/global-s/skillshrinesavedata) | class | `NewSaveData<SkillShrine, SkillShrineSaveData>` | 1 |  |
| [`SkillShrineTestingArea`](/game-api/types/global-s/skillshrinetestingarea) | class | `NetworkEntityBehaviour` | 12 | The practice area of a skill shrine. When a skill orb is opened it spawns that skill's practice objects, shows the border and moves a copy of the orb into place. Get it from `SkillShrine.TestingArea`. |
| [`SkillShrineVisualizer`](/game-api/types/global-s/skillshrinevisualizer) | abstract class | `MonoBehaviour` | 5 | Base for the display on a skill shrine that shows one progression path for the player using it. Server prepares the data, which is then synced to clients. |
| [`SkillsStructureRotator`](/game-api/types/global-s/skillsstructurerotator) | class | `MonoBehaviour` | 0 |  |
| [`SkillStatus`](/game-api/types/global-s/skillstatus) | enum |  | 10 | [Skills and unlocks](../game-systems/skills-and-unlocks.md): The `Testing` values mean the player is practising that orb. |
| [`SkillStatusUtil`](/game-api/types/global-s/skillstatusutil) | static class |  | 1 |  |
| [`SkinnedBatchingHelper`](/game-api/types/global-s/skinnedbatchinghelper) | static class |  | 1 |  |
| [`SkinnedMeshRendererGroup`](/game-api/types/global-s/skinnedmeshrenderergroup) | class | `ComponentGroup<SkinnedMeshRenderer>` | 4 |  |
| [`SlidingDoor`](/game-api/types/global-s/slidingdoor) | class | `Door` | 1 |  |
| [`SmallProjectile`](/game-api/types/global-s/smallprojectile) | class | `MonoBehaviour` | 0 |  |
| [`SmelterRecipeUnlock`](/game-api/types/global-s/smelterrecipeunlock) | class | `MonoBehaviour` | 2 |  |
| [`SmoothLocomotion`](/game-api/types/global-s/smoothlocomotion) | class | `MonoBehaviour` | 29 | [Locomotion](../networking/locomotion.md#smoothlocomotion): On the VR body (and the character room's). |
| [`SmoothLocomotionModifier`](/game-api/types/global-s/smoothlocomotionmodifier) | abstract class | `MonoBehaviour`, `ISmoothLocomotionModifier` | 9 | Base for components next to `SmoothLocomotion` that change the local player's smooth movement: friction, height, upward grip, or taking over movement entirely. Registered with `SmoothLocomotion.InitializeModifier`. |
| [`SmoothLocomotionPlayerController`](/game-api/types/global-s/smoothlocomotionplayercontroller) | abstract class | `VRPlayerController` | 3 | Base VR player controller for players that move with thumbstick (smooth) locomotion, through a `SmoothLocomotion` component. |
| [`SmoothLocomotionSettings`](/game-api/types/global-s/smoothlocomotionsettings) | class | `GlobalSettings<SmoothLocomotionSettings>` | 42 | Global tuning for the player's smooth (stick) locomotion: speeds, step and slope handling, falling, fall damage and safety recovery. Get it with `GlobalSettings<SmoothLocomotionSettings>.Instance`; read by `SmoothLocomotion`. |
| [`SmoothRotationMode`](/game-api/types/global-s/smoothrotationmode) | enum |  | 2 |  |
| [`SmoothRotationSpeed`](/game-api/types/global-s/smoothrotationspeed) | enum |  | 4 |  |
| [`Snappable`](/game-api/types/global-s/snappable) | class | `MonoBehaviour` | 3 |  |
| [`SnapParent`](/game-api/types/global-s/snapparent) | class | `MonoBehaviour` | 0 |  |
| [`SnapRotationMode`](/game-api/types/global-s/snaprotationmode) | enum |  | 2 |  |
| [`SnapToTerrain`](/game-api/types/global-s/snaptoterrain) | class | `GeneratablePart` | 1 |  |
| [`SocialAnalyticsBanMenuPanelOrigin`](/game-api/types/global-s/socialanalyticsbanmenupanelorigin) | enum |  | 3 | Which menu panel a ban was made from (inbox, reports or group page). Sent with the ban player social analytics event. |
| [`SocialAnalyticsEventOrigin`](/game-api/types/global-s/socialanalyticseventorigin) | enum |  | 3 | Where a social analytics event came from: the main menu, the social tablet or a friend request token. |
| [`SocialService`](/game-api/types/global-s/socialservice) | static class |  | 7 |  |
| [`SocialTablet`](/game-api/types/global-s/socialtablet) | class | `ActionItem` | 0 |  |
| [`SoundEffect`](/game-api/types/global-s/soundeffect) | enum |  | 256 | A numbered list of game sound effects (teleport, docking, mining, combat, footsteps and more). |
| [`SoundEffectExtensions`](/game-api/types/global-s/soundeffectextensions) | static class |  | 1 |  |
| [`SoundEffectSet`](/game-api/types/global-s/soundeffectset) | class | `ScriptableObject` | 8 | A ScriptableObject pairing a `SoundEffect` type with a Wwise event. Plays through the `AudioManager` singleton, so it only makes sound where audio runs. |
| [`SoundEffectSet.Create`](/game-api/types/global-s/soundeffectset-create) | class | `AltaMenuItemBase.Assets.Create.Audio.ScriptableObject<SoundEffectSet>` | 0 |  |
| [`SoundEffectsMap`](/game-api/types/global-s/soundeffectsmap) | class | `ScriptableObject` | 1 |  |
| [`SoundEffectsMap.Create`](/game-api/types/global-s/soundeffectsmap-create) | class | `AltaMenuItemBase.Assets.Create.Audio.ScriptableObject<SoundEffectsMap>` | 0 |  |
| [`SoundSource`](/game-api/types/global-s/soundsource) | class | `MonoBehaviour` | 6 | Plays a sound effect on (or at) its object, optionally when enabled, and stops it when disabled. Does nothing when headless. |
| [`SoundSourceEvent`](/game-api/types/global-s/soundsourceevent) | delegate |  | 0 | Parameterless handler for `SoundSource.OnPlay` and `SoundSource.OnStop`. |
| [`SpaceDefinedAttribute<T>`](/game-api/types/global-s/spacedefinedattribute-t) | abstract class | `MonoBehaviour` | 1 | Base for trigger areas whose effect follows a network of connected `SpacePoint`s, such as atmosphere and darkness areas. While the local player is inside, it finds the nearest point pair and reports progress between them. |
| [`SpaceFilter`](/game-api/types/global-s/spacefilter) | class | `SpawnModifierPoint` | 1 |  |
| [`SpaceFilter.Create`](/game-api/types/global-s/spacefilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<SpaceFilter>` | 0 |  |
| [`SpaceFilter.Redirect`](/game-api/types/global-s/spacefilter-redirect) | class |  | 2 |  |
| [`SpacePoint`](/game-api/types/global-s/spacepoint) | class | `MonoBehaviour` | 3 | A point in a network of connected points that defines an area attribute, such as darkness or ambience, by weight. |
| [`SpawnArea`](/game-api/types/global-s/spawnarea) | class | `MonoBehaviour`, `ISavable<SpawnAreaSaveData>`, `ISavableSave<SpawnAreaSaveData>`, +2 more | 5 | A circle on the ground where things (or players) spawn. Gives repeatable positions by index, raycast onto valid ground away from blocking layers. Named areas are listed in `InstanceMap`. |
| [`SpawnAreaIdentifier`](/game-api/types/global-s/spawnareaidentifier) | enum |  | 28 | Names the fixed spawn and teleport points in the world, such as the respawn point, tower checkpoints, shrines and `Home`. Looked up in `SpawnArea.InstanceMap`. |
| [`SpawnAreaSaveData`](/game-api/types/global-s/spawnareasavedata) | internal class | `NewSaveData<SpawnArea, SpawnAreaSaveData>` | 5 |  |
| [`SpawnAsSaveIgnore`](/game-api/types/global-s/spawnassaveignore) | class | `NetworkEntityBehaviour` | 1 |  |
| [`SpawnBuried`](/game-api/types/global-s/spawnburied) | class | `GeneratedNetworkEntityBehaviour`, `ISavable<SpawnBuriedSaveData>`, `ISavableSave<SpawnBuriedSaveData>`, +2 more | 5 |  |
| [`SpawnBuriedSaveData`](/game-api/types/global-s/spawnburiedsavedata) | internal class | `NewSaveData<SpawnBuried, SpawnBuriedSaveData>` | 3 |  |
| [`SpawnData`](/game-api/types/global-s/spawndata) | class |  | 12 | [Spawning](../world/spawning.md#spawndata): Passed to every `InitializeAsServer`. It says whether the thing should generate its contents, and which biome it's in. |
| [`Spawner`](/game-api/types/global-s/spawner) | class | `SpawnerBase` | 2 | Server: spawns `count` copies of one prefab, or random picks from a distribution, at its spawn points. A component on a networked prefab. |
| [`SpawnerBase`](/game-api/types/global-s/spawnerbase) | abstract class | `NetworkEntityBehaviour`, `ISpawner` | 5 | Base for networked spawners that spawn a prefab at themselves, at random or sequential spawn points, or at a forced position, with optional attribute overrides and material. Server side. |
| [`SpawnerGrab`](/game-api/types/global-s/spawnergrab) | class | `NetworkEntityBehaviour` | 2 | [Items, interaction and damage](../items/overview.md): Grabbing it spawns a fresh item into your hand (a dispenser). |
| [`SpawnerPart`](/game-api/types/global-s/spawnerpart) | class | `GeneratablePart`, `ISpawner` | 2 | Generation part that spawns one network prefab at its position (or at a random one of its `randomParent` transforms) when the generator runs. Server side, as part of world generation. |
| [`SpawnHelper`](/game-api/types/global-s/spawnhelper) | static class |  | 16 | [Spawning](../world/spawning.md#spawnhelper): Server only (it calls `SpawnManager.SpawnInternal`, which only works on the server). |
| [`SpawnHelper.SpawningCallback`](/game-api/types/global-s/spawnhelper-spawningcallback) | delegate |  | 0 | Callback used by `SpawnHelper.Spawn`. One is called just after the entity is created (to position it), the other after server initialization and before it is put in a chunk. |
| [`SpawnIfEmpty`](/game-api/types/global-s/spawnifempty) | class | `NetworkEntityBehaviour` | 1 |  |
| [`SpawnIn`](/game-api/types/global-s/spawnin) | class | `MonoBehaviour` | 0 |  |
| [`SpawnInCircle`](/game-api/types/global-s/spawnincircle) | class | `NetworkEntityBehaviour`, `ISavable<SpawnInCircleSaveData>`, `ISavableSave<SpawnInCircleSaveData>`, +1 more | 2 |  |
| [`SpawnInCircleSaveData`](/game-api/types/global-s/spawnincirclesavedata) | class | `NewSaveData<SpawnInCircle, SpawnInCircleSaveData>` | 5 |  |
| [`SpawnInCircleSaveData1`](/game-api/types/global-s/spawnincirclesavedata1) | class | `OldSaveData` | 5 |  |
| [`SpawningLogger`](/game-api/types/global-s/spawninglogger) | static class |  | 2 |  |
| [`SpawningTimer`](/game-api/types/global-s/spawningtimer) | class | `MonoBehaviour` | 0 |  |
| [`SpawningTimerNew`](/game-api/types/global-s/spawningtimernew) | class | `IDisposable` | 2 |  |
| [`SpawnMethod`](/game-api/types/global-s/spawnmethod) | enum |  | 2 | How a spawner picks its next spawn point: in order or at random. |
| [`SpawnModifier<T>`](/game-api/types/global-s/spawnmodifier-t) | abstract class | `ScriptableObject` | 2 | Base asset for filters in the forest fill spawner that adjust a candidate point and its weight before spawning. Subclasses fix `T`, for example `SpawnModifierPoint`. |
| [`SpawnModifierPoint`](/game-api/types/global-s/spawnmodifierpoint) | abstract class | `SpawnModifier<PointEdge>` | 0 | Base for spawn modifiers in forest generation that work on point edges. |
| [`SpawnModifierPointNormal`](/game-api/types/global-s/spawnmodifierpointnormal) | abstract class | `SpawnModifier<PointNormal>` | 0 | Base for a spawn modifier that works on `PointNormal` ground points, as used by forest spawning. |
| [`SpawnModifierPointNormalRedirect`](/game-api/types/global-s/spawnmodifierpointnormalredirect) | class | `SpawnModifierPointNormal` | 2 |  |
| [`SpawnModifierPointRedirect`](/game-api/types/global-s/spawnmodifierpointredirect) | class | `SpawnModifierPoint` | 2 |  |
| [`SpawnModifierSpawnParameters`](/game-api/types/global-s/spawnmodifierspawnparameters) | abstract class | `SpawnModifier<SpawnParameters>` | 0 | Base for spawn modifiers in forest generation that work on spawn parameters. |
| [`SpawnModifierSpawnParametersRedirect`](/game-api/types/global-s/spawnmodifierspawnparametersredirect) | class | `SpawnModifierSpawnParameters` | 2 |  |
| [`SpawnOnDestroyed`](/game-api/types/global-s/spawnondestroyed) | class | `MonoBehaviour` | 1 |  |
| [`SpawnPositions`](/game-api/types/global-s/spawnpositions) | class | `MonoBehaviour`, `ISpawnPositions` | 4 | Fixed list of spawn points for a population, either live child transforms or positions and rotations cached relative to this object. |
| [`SpecialBiomeAttributes`](/game-api/types/global-s/specialbiomeattributes) | class | `GlobalSettings<SpecialBiomeAttributes>` | 9 | Global settings asset listing the biome attributes forest generation fills in for each node and path (depth, radius, elevation, slope and so on). Get it with `GlobalSettings<SpecialBiomeAttributes>.Instance`. |
| [`SpecialBiomeAttributes.Create`](/game-api/types/global-s/specialbiomeattributes-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<SpecialBiomeAttributes>` | 0 |  |
| [`SpecificCraftTask`](/game-api/types/global-s/specificcrafttask) | class | `HashSetAction<SpecificCraftTaskArgument>` | 1 |  |
| [`SpecificCraftTaskArgument`](/game-api/types/global-s/specificcrafttaskargument) | class | `GameTaskActionArgument` | 4 | [Other systems](../game-systems/other-systems.md): `JointSlot.TryConnect`, when a held item gets a part |
| [`SpecificSpawnItemTask`](/game-api/types/global-s/specificspawnitemtask) | class | `HashSetAction<SpecificSpawnItemTaskArgument>` | 1 |  |
| [`SpecificSpawnItemTask.RecipeFilter`](/game-api/types/global-s/specificspawnitemtask-recipefilter) | enum |  | 4 | Flags for which kinds of item creation count towards a spawn-item task: followed or unfollowed recipe, smelting or generic. All flags are on by default. |
| [`SpecificSpawnItemTaskArgument`](/game-api/types/global-s/specificspawnitemtaskargument) | class | `GameTaskActionArgument` | 5 | [Other systems](../game-systems/other-systems.md): `Smelter` (filter `Smelt`), `GenericCraftingProject` (filter `Generic`), `TimberBlock` (chiselling) |
| [`SpectralMaterialTransition`](/game-api/types/global-s/spectralmaterialtransition) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 3 |  |
| [`SpeedModifierLocoAction`](/game-api/types/global-s/speedmodifierlocoaction) | class | `LocomotionModifierAction` | 2 |  |
| [`SphereCastFilter`](/game-api/types/global-s/spherecastfilter) | class | `SpawnModifierPointNormal` | 1 |  |
| [`SphereCastFilter.Create`](/game-api/types/global-s/spherecastfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<SphereCastFilter>` | 0 |  |
| [`SphereImpactCollector`](/game-api/types/global-s/sphereimpactcollector) | class | `ShapeImpactCollector` | 2 |  |
| [`SphereImpactCollector.Create`](/game-api/types/global-s/sphereimpactcollector-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Shape.ScriptableObject<SphereImpactCollector>` | 0 |  |
| [`SphereVisibilityCheck`](/game-api/types/global-s/spherevisibilitycheck) | class | `MonoBehaviour` | 2 |  |
| [`Spinner`](/game-api/types/global-s/spinner) | class | `MonoBehaviour` | 0 |  |
| [`SpiritModeShellAnimator`](/game-api/types/global-s/spiritmodeshellanimator) | class | `ShellAnimator` | 4 |  |
| [`SplineParticlesPooled`](/game-api/types/global-s/splineparticlespooled) | class | `PooledObject` | 3 | Client: a pooled curved line with particles running along it between two transforms, such as the crafting line between parts. |
| [`SplineProfile`](/game-api/types/global-s/splineprofile) | class | `ScriptableObject` | 10 | A preset of river mesh settings that a `RamSpline` can load (from the R.A.M. river tool). |
| [`SplitVector3`](/game-api/types/global-s/splitvector3) | struct |  | 8 | A vector stored as a unit direction plus a length. Used for hand body offsets and grip strength in climbing. |
| [`StageBasedPrefab`](/game-api/types/global-s/stagebasedprefab) | class | `NetworkEntityBehaviour`, `ISavable<StageBasedPrefabSaveData>`, `ISavableSave<StageBasedPrefabSaveData>`, +1 more | 6 | Saved component that shows one stage prefab at a time from a `PrefabStageDefinition`, spawning it as a saved child. Base of `TimeBasedStagedPrefab`. |
| [`StageBasedPrefabSaveData`](/game-api/types/global-s/stagebasedprefabsavedata) | class | `NewSaveData<StageBasedPrefab, StageBasedPrefabSaveData>` | 3 |  |
| [`StalactiteFall`](/game-api/types/global-s/stalactitefall) | class | `MonoBehaviour` | 1 |  |
| [`StandingStillPositionModifier`](/game-api/types/global-s/standingstillpositionmodifier) | class | `HandPositionInputModifier` | 1 |  |
| [`StartupLoader`](/game-api/types/global-s/startuploader) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 |  |
| [`StatBonusSkill`](/game-api/types/global-s/statbonusskill) | class | `ProfessionSkill` | 2 |  |
| [`StatBonusSkill.OperationTarget`](/game-api/types/global-s/statbonusskill-operationtarget) | enum |  | 3 |  |
| [`StatBonusSkill.OperationType`](/game-api/types/global-s/statbonusskill-operationtype) | enum |  | 3 |  |
| [`StaticBatchedRecombiner`](/game-api/types/global-s/staticbatchedrecombiner) | static class |  | 1 |  |
| [`StaticBatchReport`](/game-api/types/global-s/staticbatchreport) | static class |  | 6 |  |
| [`StaticBoundsOverride`](/game-api/types/global-s/staticboundsoverride) | class | `MonoBehaviour` | 1 |  |
| [`StaticDrop`](/game-api/types/global-s/staticdrop) | class | `MonoBehaviour` | 0 |  |
| [`StaticDynamicSpawner`](/game-api/types/global-s/staticdynamicspawner) | class | `MonoBehaviour`, `IStaticGeneration` | 0 |  |
| [`StaticGeneration`](/game-api/types/global-s/staticgeneration) | class | `MonoBehaviour`, `IStaticGeneration` | 0 |  |
| [`StaticGenerationHelper`](/game-api/types/global-s/staticgenerationhelper) | static class |  | 5 |  |
| [`StaticGenerationParent`](/game-api/types/global-s/staticgenerationparent) | class | `MonoBehaviour`, `IStaticGeneration`, `INetworkEntityBehaviour`, +3 more | 1 |  |
| [`StaticGenerationParentSaveData`](/game-api/types/global-s/staticgenerationparentsavedata) | internal class | `NewSaveData<StaticGenerationParent, StaticGenerationParentSaveData>` | 2 |  |
| [`StaticImpactDetector`](/game-api/types/global-s/staticimpactdetector) | class | `MonoBehaviour` | 0 |  |
| [`StaticObjectCombiner`](/game-api/types/global-s/staticobjectcombiner) | class | `MonoBehaviour` | 12 | [Static objects](../world/static-objects.md#staticobjectcombiner): `StaticObjectCombiner` (no namespace) and its subclasses `SceneStaticObjectCombiner` and `DynamicObjectCombiner` merge meshes, join LOD groups, flatten colliders and cut hidden triangles. |
| [`StaticPageProvider`](/game-api/types/global-s/staticpageprovider) | class | `PageProvider` | 6 |  |
| [`StaticPositionSpawner`](/game-api/types/global-s/staticpositionspawner) | class | `MonoBehaviour` | 0 |  |
| [`StatReachedAchievement`](/game-api/types/global-s/statreachedachievement) | class | `GameAchievement` | 2 |  |
| [`StatType`](/game-api/types/global-s/stattype) | enum |  | 2 | Whether a Steam stat is stored as an `Int` or a `Float`; checked by `SteamStats`. |
| [`StatUpgradeEffect`](/game-api/types/global-s/statupgradeeffect) | class | `PooledObject` | 2 |  |
| [`SteamVRDeviceController`](/game-api/types/global-s/steamvrdevicecontroller) | class | `XrDeviceSdkController` | 4 |  |
| [`SteamVRDeviceLifecycle`](/game-api/types/global-s/steamvrdevicelifecycle) | class | `VirtualRealityDeviceLifecycle` | 2 |  |
| [`SteamVRInputController`](/game-api/types/global-s/steamvrinputcontroller) | class | `DeviceInputController` | 3 |  |
| [`SteamVRPose`](/game-api/types/global-s/steamvrpose) | class |  | 13 | Tracks the pose of one SteamVR tracked device index. `SteamVRDeviceLifecycle` keeps a list of these and feeds them new poses each frame. Client only. |
| [`SteelSong`](/game-api/types/global-s/steelsong) | class | `PickupBasedSkill` | 4 |  |
| [`SteelSong.Create`](/game-api/types/global-s/steelsong-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<SteelSong>` | 0 |  |
| [`SteelSongEffect`](/game-api/types/global-s/steelsongeffect) | class | `PooledObject` | 4 |  |
| [`StencilBufferNumberPool`](/game-api/types/global-s/stencilbuffernumberpool) | static class |  | 2 |  |
| [`StewRecipePageProvider`](/game-api/types/global-s/stewrecipepageprovider) | class | `GeneratedPageProvider<StewRecipe>` | 5 |  |
| [`StewRecipePageSettings`](/game-api/types/global-s/stewrecipepagesettings) | class | `GlobalSettings<StewRecipePageSettings>` | 7 | Global settings for generated stew recipe pages: the page template and where ingredient and effect glyphs go. |
| [`StewRecipePageSettings.Create`](/game-api/types/global-s/stewrecipepagesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<StewRecipePageSettings>` | 0 |  |
| [`StorageStatParameters`](/game-api/types/global-s/storagestatparameters) | class | `ItemComponent` | 2 |  |
| [`StoreRotationPopup`](/game-api/types/global-s/storerotationpopup) | class | `LoggedInTool` | 0 |  |
| [`StreamerManager`](/game-api/types/global-s/streamermanager) | class | `MonoBehaviour` | 5 |  |
| [`StreamSettings`](/game-api/types/global-s/streamsettings) | class |  | 6 |  |
| [`StrikeSuccessionInput`](/game-api/types/global-s/strikesuccessioninput) | class | `ISkillInputMethod` | 5 |  |
| [`StrikeSuccessionInputStructure`](/game-api/types/global-s/strikesuccessioninputstructure) | class | `SkillInputStructure` | 9 | Skill input asset for skills that trigger after a number of good strikes in a row (a combo leading to a power strike). |
| [`StrikeSuccessionInputStructure.Create`](/game-api/types/global-s/strikesuccessioninputstructure-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<StrikeSuccessionInputStructure>` | 0 |  |
| [`StringBuilderReplacer`](/game-api/types/global-s/stringbuilderreplacer) | class | `BaseReplacer` | 4 |  |
| [`StringHandler`](/game-api/types/global-s/stringhandler) | class | `UnityEvent<string>` | 0 |  |
| [`StructureCube`](/game-api/types/global-s/structurecube) | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 10 | One grid cell of a `StructurePart` used by the mining base generator. Its side flags say where it connects and what must be next to it. |
| [`StructurePart`](/game-api/types/global-s/structurepart) | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 18 | A piece that `MiningBaseGenerator` can place in a generated mine: its size in tiles, the sides that are gates, solid or air, and limits on how low it can be placed. |
| [`StructurePart.Cube`](/game-api/types/global-s/structurepart-cube) | class |  | 18 | Old per-tile side data for a `StructurePart`. Now only read in the editor to convert into `StructureCube` children. |
| [`StructureSide`](/game-api/types/global-s/structureside) | enum |  | 6 | Flags for the six sides of a `StructureCube`: forward, right, backward, left, up and down. Used by the mining base generator. |
| [`StructureType`](/game-api/types/global-s/structuretype) | class | `ScriptableObject` | 1 | Asset for a kind of mining or cave structure, giving the size of one tile. Used by `StructureCube`, `StructurePart` and `MiningBaseGenerator`. |
| [`StructureType.Create`](/game-api/types/global-s/structuretype-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.ScriptableObject<StructureType>` | 0 |  |
| [`SubscriptionManager`](/game-api/types/global-s/subscriptionmanager) | class | `LoggedInTool` | 0 |  |
| [`SuccessionStrikeDelegate`](/game-api/types/global-s/successionstrikedelegate) | delegate |  | 0 |  |
| [`SureHands`](/game-api/types/global-s/surehands) | class | `ProfessionSkill<SureHands>` | 0 |  |
| [`SureHands.Create`](/game-api/types/global-s/surehands-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<SureHands>` | 0 |  |
| [`Surface`](/game-api/types/global-s/surface) | class | `MonoBehaviour` | 2 | [Grab points and hand-touch points](../items/grab-points.md): Lie flat against a surface. |
| [`SurfaceDefinition`](/game-api/types/global-s/surfacedefinition) | class | `PopupScriptableObject` | 2 | Asset describing how embeddable items (arrows, blades) stick into a surface. Read by `Embeddable` when it hits a collider with this surface. |
| [`SurfaceDefinition.Create`](/game-api/types/global-s/surfacedefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<SurfaceDefinition>` | 0 |  |
| [`SwipeInputSource`](/game-api/types/global-s/swipeinputsource) | class | `InputSource` | 4 |  |
| [`SwipeInteractionController`](/game-api/types/global-s/swipeinteractioncontroller) | class | `MonoBehaviour` | 0 |  |
| [`SwipePromptController`](/game-api/types/global-s/swipepromptcontroller) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| [`SwipeSensitivityLevel`](/game-api/types/global-s/swipesensitivitylevel) | enum |  | 3 |  |
| [`SwordTrail`](/game-api/types/global-s/swordtrail) | class | `MonoBehaviour` | 0 |  |
| [`SyncAttribute`](/game-api/types/global-s/syncattribute) | abstract class | `Attribute` | 1 | Obsolete base attribute for automatic member syncing. |
| [`SyncBoolAttribute`](/game-api/types/global-s/syncboolattribute) | class | `SyncAttribute` | 1 |  |
| [`SyncedColor`](/game-api/types/global-s/syncedcolor) | class | `NetworkEntityBehaviour` | 3 |  |
| [`SyncFloatAttribute`](/game-api/types/global-s/syncfloatattribute) | class | `SyncAttribute` | 3 |  |
| [`SyncHashedAttribute`](/game-api/types/global-s/synchashedattribute) | class | `SyncAttribute` | 1 |  |
| [`SyncUintAttribute`](/game-api/types/global-s/syncuintattribute) | class | `SyncAttribute` | 1 |  |
