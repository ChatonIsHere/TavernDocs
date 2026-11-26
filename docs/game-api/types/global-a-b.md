---
title: "No namespace: A to B"
description: "Root.Township types with no namespace, A to B."
sidebar_position: 15
---

# No namespace: A to B

Types in `Root.Township` with no namespace (the global namespace), from A to B. 195 types, 13 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## A

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccessibilityFeaturesBoard`](/game-api/types/global-a-b/accessibilityfeaturesboard) | class | `PopupBoard` | 0 | Popup board asking the player whether to turn on accessibility features. Saves the choice to the game config. |
| [`AccessibilityFeaturesChecker`](/game-api/types/global-a-b/accessibilityfeatureschecker) | class | `MonoBehaviour` | 0 | Shows the accessibility popup once, if the features are off and the player hasn't been asked before. |
| [`AccountSetupSceneLoader`](/game-api/types/global-a-b/accountsetupsceneloader) | class | `ISceneLoader` | 1 | Scene loader that opens the registration (account setup) scene. |
| [`AchievementBoard`](/game-api/types/global-a-b/achievementboard) | class | `MonoBehaviour` | 0 | Client: a board listing a set of achievements. Hidden until there is a local player, and hidden again once all of them are done. |
| [`AchievementEffectHandler`](/game-api/types/global-a-b/achievementeffecthandler) | static class |  | 1 | Client: plays the quest-complete effect on the player's head for each unlocked achievement, one at a time. |
| [`AchievementGroupAchievement`](/game-api/types/global-a-b/achievementgroupachievement) | class | `GameAchievement` | 1 | Achievement that completes once the player has completed every achievement in its group. |
| [`AchievementItem`](/game-api/types/global-a-b/achievementitem) | class | `MonoBehaviour`, `IAchievementItem` | 1 | One row on an achievement board that shows a `GameAchievement` description as text. Filled by `AchievementBoard`. |
| [`ActionGlyphAnimator`](/game-api/types/global-a-b/actionglyphanimator) | class | `PooledObject` | 2 | Pooled sprite that fades a skill practice glyph in and out. Spawned and placed by `ActionGlyphsPlacer`. |
| [`ActionGlyphsPlacer`](/game-api/types/global-a-b/actionglyphsplacer) | class | `MonoBehaviour` | 3 | Shows a profession skill's practice glyphs as a vertical stack of pooled `ActionGlyphAnimator` objects inside a set area. Used by `SkillShrineTestingArea`. |
| [`ActionItem`](/game-api/types/global-a-b/actionitem) | class | `NetworkEntityBehaviour` | 9 | Base for an item that belongs to one player and fades in and out with a materialize effect (the friend request token, the gymnasium teleport tablet). The server sets the owner and syncs it. |
| [`ActionOrb`](/game-api/types/global-a-b/actionorb) | class | `HoverPickup` | 4 | A hovering orb the player grabs and pulls to their face to trigger an action, with haptics and a screen fade as it gets closer. Used for menu, revive and server selection orbs. |
| [`ActiveHandIndex`](/game-api/types/global-a-b/activehandindex) | enum |  | 2 | Which hand is meant: `Left` or `Right`. |
| [`AdditionalStaticContent`](/game-api/types/global-a-b/additionalstaticcontent) | class | `NetworkEntityBehaviour`, `ISavable<AdditionalStaticContentSaveData>`, `ISavableSave<AdditionalStaticContentSaveData>`, +2 more | 5 | Network entity component that instantiates a list of static prefabs under itself. Clients spawn them from a sync; the server spawns them when asked, for example in micro tutorial dynamic content. |
| [`AdditionalStaticContentMarker`](/game-api/types/global-a-b/additionalstaticcontentmarker) | class | `MonoBehaviour` | 0 | Empty marker added to content that `AdditionalStaticContent` spawns as an editor-only preview. |
| [`AdditionalStaticContentSaveData`](/game-api/types/global-a-b/additionalstaticcontentsavedata) | class | `NewSaveData<AdditionalStaticContent, AdditionalStaticContentSaveData>` | 1 | Save data for `AdditionalStaticContent`. |
| [`AddonCraftingPart`](/game-api/types/global-a-b/addoncraftingpart) | class | `CraftingPart` | 0 | [Crafting](../game-systems/crafting.md): A part that shows an extra visual (`jointAddon`) while it's inserted. |
| [`AddressableLoader`](/game-api/types/global-a-b/addressableloader) | class | `MonoBehaviour` | 0 | Loads an Addressables prefab and instantiates it under itself, only on the chosen platforms. |
| [`AddressableSession`](/game-api/types/global-a-b/addressablesession) | class | `IDisposable` | 5 | Loads Unity Addressable assets and keeps them loaded until every user of the session is removed, then releases them all. |
| [`AddressableSystemWarmer`](/game-api/types/global-a-b/addressablesystemwarmer) | class | `MonoBehaviour` | 0 | Initializes Addressables and checks the purchasable catalog when it wakes. |
| [`AdjustHeight`](/game-api/types/global-a-b/adjustheight) | class | `MonoBehaviour` | 2 | Client: moves target transforms to a fraction of the local player's head height. |
| [`AdminTool`](/game-api/types/global-a-b/admintool) | abstract class | `LoggedInTool` | 0 | Base for tools that are only active for logged-in users with the `debug_features` permission. |
| [`Aesthetics`](/game-api/types/global-a-b/aesthetics) | static class |  | 1 | Static helper for whether visual effects should show. |
| [`AfkTimer`](/game-api/types/global-a-b/afktimer) | class | `MonoBehaviour` | 0 | Server: kicks players who don't move or hit anything for a while, when the server's AFK timer setting is on. |
| [`AgonesLogger`](/game-api/types/global-a-b/agoneslogger) | class | `Agones.Utility.ILogger` | 3 | Passes log calls from the Agones SDK (game server hosting) to NLog. |
| [`AlignWithNormalModifier`](/game-api/types/global-a-b/alignwithnormalmodifier) | class | `SpawnModifierSpawnParameters` | 1 | World generation spawn modifier that rotates spawned objects to face along the ground normal, weighted by how flat the ground is. |
| [`AlignWithNormalModifier.Create`](/game-api/types/global-a-b/alignwithnormalmodifier-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<AlignWithNormalModifier>` | 0 | Editor menu entry for creating an `AlignWithNormalModifier` asset. |
| [`AlignWithPath`](/game-api/types/global-a-b/alignwithpath) | class | `GeneratablePart` | 1 | Generation part that turns the object to face along its forest path, kept level. |
| [`AlignWithPathSlope`](/game-api/types/global-a-b/alignwithpathslope) | class | `GeneratablePart` | 1 | Generation part that turns the object to face along its forest path, tilted with the path's slope. |
| [`AlignWithTerrainSlope`](/game-api/types/global-a-b/alignwithterrainslope) | class | `GeneratablePart` | 1 | Generation part that points the object's forward axis along the terrain normal at its position. |
| [`AlphanumComparator`](/game-api/types/global-a-b/alphanumcomparator) | class | `IComparer` | 1 | Non-generic comparer for natural string sorting, so "item2" sorts before "item10". Non-strings compare as equal. |
| [`AltaEvent`](/game-api/types/global-a-b/altaevent) | class | `IAltaEventValidation` | 5 | A serializable event with no arguments that fires both an inspector UnityEvent and a C# event. Exceptions in either are caught and logged. |
| [`AltaEvent<T, UnityEventT>`](/game-api/types/global-a-b/altaevent-t-unityeventt) | class | `IAltaEvent<T>`, `IAltaEventValidation` | 5 | A serializable event with one argument that fires both an inspector UnityEvent and a C# event. Exceptions in either are caught and logged, so one bad handler does not stop the other side. |
| [`AltaEvent<T1, T2, T3, T4, UnityEventT1T2T3T4>`](/game-api/types/global-a-b/altaevent-t1-t2-t3-t4-unityeventt1t2t3t4) | class | `IAltaEvent<T1, T2, T3, T4>`, `IAltaEventValidation` | 4 |  |
| [`AltaEvent<T1, T2, T3, UnityEventT1T2T3>`](/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3) | class | `IAltaEvent<T1, T2, T3>`, `IAltaEventValidation` | 4 |  |
| [`AltaEvent<T1, T2, UnityEventT1T2>`](/game-api/types/global-a-b/altaevent-t1-t2-unityeventt1t2) | class | `IAltaEvent<T1, T2>`, `IAltaEventValidation` | 4 | Two-argument event that runs both inspector-set UnityEvent listeners and C# listeners, logging errors from either instead of throwing. |
| [`AltaEventValidationExtensions`](/game-api/types/global-a-b/altaeventvalidationextensions) | static class |  | 1 |  |
| [`AltaPxrManagerCameraController`](/game-api/types/global-a-b/altapxrmanagercameracontroller) | class | `MonoBehaviour` | 0 |  |
| [`AltaSceneManager`](/game-api/types/global-a-b/altascenemanager) | static class |  | 10 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#altascenemanager): Every scene is loaded additively. Main thread; the async methods poll with `Task.Delay` and continue on the main thread. |
| [`AltaVisionAttribute`](/game-api/types/global-a-b/altavisionattribute) | class | `PropertyAttribute` | 0 |  |
| [`AlwaysFacePlayer`](/game-api/types/global-a-b/alwaysfaceplayer) | class | `MonoBehaviour` | 0 |  |
| [`AmbienceAudio`](/game-api/types/global-a-b/ambienceaudio) | class | `SoundSource` | 2 | A sound source for ambience that applies its own volume through the `AmbienceManager` volume RTPC and can be muted. Client side; a component on ambience objects. |
| [`AmbienceManager`](/game-api/types/global-a-b/ambiencemanager) | class | `SingletonBehaviour<AmbienceManager>` | 1 |  |
| [`AmbientTemperatureChecker`](/game-api/types/global-a-b/ambienttemperaturechecker) | class |  | 7 | Tracks the ambient temperature for an entity from the location chunk it's in (23 unless the chunk's environment overrides it). Used by heat sources, heat points and recyclers. |
| [`AmplifyImpostorAsset`](/game-api/types/global-a-b/amplifyimpostorasset) | class | `ScriptableObject` | 17 | Asset from the third-party Amplify Impostors tool: the bake settings and result (mesh and material) for a billboard impostor of a model. |
| [`AmplifyImpostorBakePreset`](/game-api/types/global-a-b/amplifyimpostorbakepreset) | class | `ScriptableObject` | 4 | Amplify Impostors bake preset asset: the shaders used to bake and draw an impostor and the textures it outputs. Referenced by `AmplifyImpostorAsset`. |
| [`AnalyticalButton`](/game-api/types/global-a-b/analyticalbutton) | class | `MonoBehaviour`, `IPreventAtlasing` | 8 | A button pressed by the local player's fingertips, worked out geometrically each frame instead of with physics. Client side. |
| [`AnalyticalButtonGroupAutoEnabler`](/game-api/types/global-a-b/analyticalbuttongroupautoenabler) | class | `MonoBehaviour` | 0 |  |
| [`AnalyticsTest`](/game-api/types/global-a-b/analyticstest) | class | `MonoBehaviour` | 0 |  |
| [`AndroidLightSettings`](/game-api/types/global-a-b/androidlightsettings) | class | `GlobalSettings<AndroidLightSettings>` | 1 |  |
| [`AnimatedRagdoll`](/game-api/types/global-a-b/animatedragdoll) | class | `MonoBehaviour` | 0 |  |
| [`AnimateProgress`](/game-api/types/global-a-b/animateprogress) | class | `MonoBehaviour` | 2 |  |
| [`AnimateScaleOverTime`](/game-api/types/global-a-b/animatescaleovertime) | class | `TransformScriptAnimation` | 2 | Script animation that loops a transform's scale along a curve, added per axis on top of a base scale. |
| [`AnimateTime`](/game-api/types/global-a-b/animatetime) | class | `MonoBehaviour` | 0 |  |
| [`AnimationBasedEffect`](/game-api/types/global-a-b/animationbasedeffect) | class | `AnimationBasedTrigger` | 1 |  |
| [`AnimationBasedTrigger`](/game-api/types/global-a-b/animationbasedtrigger) | class | `MonoBehaviour` | 1 |  |
| [`AnimationEnded`](/game-api/types/global-a-b/animationended) | class | `StateMachineBehaviour` | 1 |  |
| [`AnimationPart`](/game-api/types/global-a-b/animationpart) | class |  | 14 | One moving piece in a building animation: it slides in from an offset to its final transform, with optional sound and effect overrides. |
| [`AnimationRandomStart`](/game-api/types/global-a-b/animationrandomstart) | class | `MonoBehaviour` | 0 |  |
| [`AnimationTrigger`](/game-api/types/global-a-b/animationtrigger) | class | `MonoBehaviour` | 2 |  |
| [`AnimatorForcerTool`](/game-api/types/global-a-b/animatorforcertool) | class | `MonoBehaviour` | 0 |  |
| [`AnimatorSetup`](/game-api/types/global-a-b/animatorsetup) | class |  | 1 | Pair of `ScalingFadeAnimator`s, used to fade from one UI panel to another. |
| [`AnvilArea`](/game-api/types/global-a-b/anvilarea) | class | `MonoBehaviour` | 0 |  |
| [`AnvilFilter`](/game-api/types/global-a-b/anvilfilter) | class | `MonoBehaviour` | 0 |  |
| [`AnvilFilterSettings`](/game-api/types/global-a-b/anvilfiltersettings) | class | `ImpactorAreaFilter<AnvilArea>` | 0 |  |
| [`AOEDamage`](/game-api/types/global-a-b/aoedamage) | class | `MonoBehaviour` | 0 | [Health and damage](../items/health-and-damage.md#aoedamage): `AOEDamage`, no namespace, a `MonoBehaviour`. |
| [`ApiAccess`](/game-api/types/global-a-b/apiaccess) | static class |  | 7 | [Alta's web API](../console-and-utilities/alta-web-api.md#apiaccess), [Startup and app state](../console-and-utilities/startup-and-app-state.md): Which client and address it picks: |
| [`ApiEndpoint`](/game-api/types/global-a-b/apiendpoint) | enum |  | 6 | Which Alta web API environment to connect to: production, development, latest, test, local or a custom URL. |
| [`AppDataCacheHandler`](/game-api/types/global-a-b/appdatacachehandler) | static class |  | 4 |  |
| [`ApplicationManager`](/game-api/types/global-a-b/applicationmanager) | class | `SingletonBehaviour<ApplicationManager>` | 14 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationmanager): Most members are static. (There's an unrelated `Discord.ApplicationManager` too.) |
| [`ApplicationShutdownOrderAttribute`](/game-api/types/global-a-b/applicationshutdownorderattribute) | class | `Attribute` | 3 |  |
| [`ApplicationStartupManager`](/game-api/types/global-a-b/applicationstartupmanager) | class | `MonoBehaviour` | 8 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#applicationstartupmanager): Runs once at launch. |
| [`AreaAttackSkill`](/game-api/types/global-a-b/areaattackskill) | class | `PickupBasedSkill` | 3 | Progression skill where a tool hit also damages everything around the hit point, in a shape that grows with skill level. Damage falls off with distance. |
| [`AreaAttackSkill.Create`](/game-api/types/global-a-b/areaattackskill-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<AreaAttackSkill>` | 0 |  |
| [`AreaOfInfluenceReceiver`](/game-api/types/global-a-b/areaofinfluencereceiver) | class | `MonoBehaviour`, `ISavable<AreaOfInfluenceReceiverData>`, `ISavableSave<AreaOfInfluenceReceiverData>`, +1 more | 0 |  |
| [`AreaOfInfluenceReceiverData`](/game-api/types/global-a-b/areaofinfluencereceiverdata) | class | `NewSaveData<AreaOfInfluenceReceiver, AreaOfInfluenceReceiverData>` | 1 |  |
| [`AreaOfInfluenceSender`](/game-api/types/global-a-b/areaofinfluencesender) | class | `LogicIntSet` | 0 |  |
| [`Arrow`](/game-api/types/global-a-b/arrow) | class | `NetworkEntityBehaviour`, `IShootable`, `IToolHitDependant` | 16 | An arrow item's flight: aligns it with its velocity while flying and, with the newer precision mode, applies seeded deviation from `ArrowFlightSettings` that the server syncs so every side flies the same path. |
| [`ArrowEvent`](/game-api/types/global-a-b/arrowevent) | class | `AltaEvent<Arrow, ArrowUnityEvent>` | 0 | Serializable `AltaEvent` that passes an `Arrow`, for hooking arrow callbacks up in the inspector. |
| [`ArrowFlightModifierComponent`](/game-api/types/global-a-b/arrowflightmodifiercomponent) | class | `MonoBehaviour` | 1 |  |
| [`ArrowFlightSettings`](/game-api/types/global-a-b/arrowflightsettings) | class | `ScriptableObject` | 0 | ScriptableObject for how arrows wobble in flight: a deviance curve over time, scaled by speed, arrow weight and flight modifiers. Also draws a debug flight path. |
| [`ArrowFlightSettingsDevianceMultiplierModifier`](/game-api/types/global-a-b/arrowflightsettingsdeviancemultipliermodifier) | class | `ArrowFlightSettingsModifier` | 1 |  |
| [`ArrowFlightSettingsModifier`](/game-api/types/global-a-b/arrowflightsettingsmodifier) | abstract class | `ScriptableObject` | 1 | Base asset for something that changes how an arrow flies. Nothing in this build uses it. |
| [`ArrowUnityEvent`](/game-api/types/global-a-b/arrowunityevent) | class | `UnityEvent<Arrow>` | 0 |  |
| [`AssistGrabInteractable`](/game-api/types/global-a-b/assistgrabinteractable) | class | `Interactable`, `ICustomTypeReplace`, `IEntityReplaceHandler` | 0 | [Items, interaction and damage](../items/overview.md) |
| [`AStar<TNode, TConnection>`](/game-api/types/global-a-b/astar-tnode-tconnection) | static class |  | 4 | Generic A* path search over any node and connection types that implement the A* interfaces. Search state is stored on each node's `WorkingNode`, so don't run two searches over the same nodes at once. |
| [`AStarDestinationCondition<TNode, TConnection>`](/game-api/types/global-a-b/astardestinationcondition-tnode-tconnection) | delegate |  | 0 | Callback passed to `AStar.Pathfind` that returns true when a node is an acceptable end point for the search. |
| [`AStarTravelCondition<TNode, TConnection>`](/game-api/types/global-a-b/astartravelcondition-tnode-tconnection) | delegate |  | 0 | Filter passed to `AStar.Pathfind`: returns whether the path may use a given connection. |
| [`AStarWorkingNode<TNode, TConnection>`](/game-api/types/global-a-b/astarworkingnode-tnode-tconnection) | class |  | 5 | Per-node scratch data that `AStar` keeps while it searches: best cost so far and step count. |
| [`ATMMachine`](/game-api/types/global-a-b/atmmachine) | class | `NetworkEntityBehaviour` | 8 | [Trading](../game-systems/trading.md#atmmachine): A bank teller for one player at a time. |
| [`AttackTest`](/game-api/types/global-a-b/attacktest) | class | `MonoBehaviour` | 0 |  |
| [`AttackTypeMultiplier`](/game-api/types/global-a-b/attacktypemultiplier) | class |  | 2 | A damage multiplier for one impact type, used by armour and health settings. |
| [`AttributeCurveRange`](/game-api/types/global-a-b/attributecurverange) | class | `CurveRange<BiomeAttribute>` | 2 | A curve and value range for one biome attribute, as a serializable `CurveRange` of `BiomeAttribute`. |
| [`AttributeCurveValue`](/game-api/types/global-a-b/attributecurvevalue) | class | `CurveValue<BiomeAttribute>` | 2 | A `CurveValue` keyed by a `BiomeAttribute`: an animation curve tied to one biome attribute, used in world generation. |
| [`AttributeDoubleValue`](/game-api/types/global-a-b/attributedoublevalue) | class | `DoubleValue<BiomeAttribute>` | 2 | Serializable pair of values tied to a `BiomeAttribute`, used in biome generation settings. |
| [`AttributeEvaluation`](/game-api/types/global-a-b/attributeevaluation) | static class |  | 1 |  |
| [`AttributeSet`](/game-api/types/global-a-b/attributeset) | class | `IEnumerable<KeyValuePair<BiomeAttribute, float>>`, `IEnumerable` | 7 | [Caves](../world/caves.md) |
| [`AttributeSingleValue`](/game-api/types/global-a-b/attributesinglevalue) | class | `SingleValue<BiomeAttribute>` | 0 | Serializable single value tied to a `BiomeAttribute`, used in biome generation settings. |
| [`AttributeUsage`](/game-api/types/global-a-b/attributeusage) | class |  | 1 | A float value made from a base value scaled by attribute curves, such as biome attributes in world generation. |
| [`AudioControl`](/game-api/types/global-a-b/audiocontrol) | class | `SimpleAudioControl` | 8 | Plays one Wwise event on a game object and lets you stop, seek or reapply sound properties while it plays. Builds on `SimpleAudioControl`. |
| [`AudioEnvironmentBlendSettings`](/game-api/types/global-a-b/audioenvironmentblendsettings) | class | `GlobalSettings<AudioEnvironmentBlendSettings>` | 1 |  |
| [`AudioEnvironmentBlendSettings.Create`](/game-api/types/global-a-b/audioenvironmentblendsettings-create) | class | `AltaMenuItemBase.Assets.Create.Audio.ScriptableObject<AudioEnvironmentBlendSettings>` | 0 |  |
| [`AudioManager`](/game-api/types/global-a-b/audiomanager) | class | `SingletonBehaviour<AudioManager>` | 12 | Plays Wwise sound effects, one shot at a point, on an object, or on a given Wwise game object. Muted and disabled on a headless server. Get it with `SingletonBehaviour<AudioManager>.Instance`. |
| [`AudioMuteEvent`](/game-api/types/global-a-b/audiomuteevent) | delegate |  | 0 | Delegate for a mute change; the argument says whether audio is now muted. |
| [`AutoCamDeviceController`](/game-api/types/global-a-b/autocamdevicecontroller) | class | `XrDeviceSdkController` | 4 |  |
| [`AutoCamDeviceLifecycle`](/game-api/types/global-a-b/autocamdevicelifecycle) | class | `DeviceLifecycle` | 3 |  |
| [`AutoCamLocomotionController`](/game-api/types/global-a-b/autocamlocomotioncontroller) | class | `LocomotionController` | 0 |  |
| [`AutoCamPlayer`](/game-api/types/global-a-b/autocamplayer) | class | `PlayerController` | 10 | Player controller for the auto camera mode: a camera that orbits and frames nearby players. `AutoCamLocomotionController` moves it, with keys to switch focus and change framing. |
| [`AutoContainerLid`](/game-api/types/global-a-b/autocontainerlid) | class | `NetworkEntityBehaviour` | 1 |  |
| [`AutoFindAttribute`](/game-api/types/global-a-b/autofindattribute) | class | `PropertyAttribute` | 2 |  |
| [`AvailablePointBar`](/game-api/types/global-a-b/availablepointbar) | class | `MonoBehaviour` | 3 | Client: one pip showing an unspent progression point. `PipAvailablePointManager` makes one per possible free point and lights or dims them by fading the material's `_Alpha`. |
| [`AvailablePointCrystal`](/game-api/types/global-a-b/availablepointcrystal) | class | `PooledObject` | 1 |  |
| [`AvailablePointVisualizerManager`](/game-api/types/global-a-b/availablepointvisualizermanager) | abstract class | `MonoBehaviour` | 4 | Base for a component that shows how many skill points are free and which slots are open, including a temporary preview. |
| [`AvoidBakingMarker`](/game-api/types/global-a-b/avoidbakingmarker) | class | `MonoBehaviour` | 0 |  |

## B

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BakeableTextureDecimator`](/game-api/types/global-a-b/bakeabletexturedecimator) | class | `ScriptableObject` | 0 |  |
| [`BanRole`](/game-api/types/global-a-b/banrole) | enum |  | 2 | Whether a ban came from the server owner or a moderator. Returned by `SocialService.BanPlayer` and sent with ban analytics. |
| [`BaseImpactChannelProgressionFilter`](/game-api/types/global-a-b/baseimpactchannelprogressionfilter) | abstract class | `ScriptableObject` | 2 | Base for ScriptableObjects that turn impact hits on one impact channel into progression experience. `ProgressionSettings` maps each channel to one; subclasses include `ImpactChannelProgressionFilter` and `CombatImpactProgressionFilter`. |
| [`BasemapDistanceSet`](/game-api/types/global-a-b/basemapdistanceset) | class | `MonoBehaviour` | 1 |  |
| [`BaseOpenXRInputController`](/game-api/types/global-a-b/baseopenxrinputcontroller) | class | `OpenXRInputController` | 1 |  |
| [`BaseReplacer`](/game-api/types/global-a-b/basereplacer) | abstract class |  | 2 | Base class for a replacer that is tied to a target string given in the constructor. |
| [`BaseStatisticsMeasurer`](/game-api/types/global-a-b/basestatisticsmeasurer) | class |  | 6 |  |
| [`BasicDecay`](/game-api/types/global-a-b/basicdecay) | class | `NetworkEntityBehaviour`, `ISavable<BasicDecayData>`, `ISavableSave<BasicDecayData>`, +2 more | 2 | Server component that destroys its entity after a decay time, using a saved timeline entry so the timer carries over saves. Subclasses add conditions. |
| [`BasicDecayData`](/game-api/types/global-a-b/basicdecaydata) | class | `NewSaveData<BasicDecay, BasicDecayData>` | 2 |  |
| [`BasicDecayData1`](/game-api/types/global-a-b/basicdecaydata1) | class | `OldSaveData` | 2 |  |
| [`BasicDecayData2`](/game-api/types/global-a-b/basicdecaydata2) | class | `OldSaveData` | 2 |  |
| [`BasicDigable`](/game-api/types/global-a-b/basicdigable) | class | `NetworkEntityBehaviour`, `IDigable` | 3 |  |
| [`BasicDynamicPath`](/game-api/types/global-a-b/basicdynamicpath) | class | `NetworkEntityBehaviour`, `IDynamicPath`, `ISavable<BasicDynamicPathSaveData>`, +2 more | 3 |  |
| [`BasicDynamicPathSaveData`](/game-api/types/global-a-b/basicdynamicpathsavedata) | class | `NewSaveData<BasicDynamicPath, BasicDynamicPathSaveData>` | 3 |  |
| [`BasicPooledObjectPool`](/game-api/types/global-a-b/basicpooledobjectpool) | abstract class |  | 3 | Base pool for one `PooledObjectDefinition`. Fills itself with the initial pool size of inactive copies and empties on game reload. `PooledObjectPool` and `MaxLimitPooledObjectPool` derive from it. |
| [`BasicSaveData<TData>`](/game-api/types/global-a-b/basicsavedata-tdata) | abstract class | `SaveData`, `ISavable<TData>`, `ISavableSave<TData>`, +1 more | 3 | Base for save data types that are also their own savable: applying the data copies it onto the target. |
| [`BasicTouchScreenButton`](/game-api/types/global-a-b/basictouchscreenbutton) | abstract class | `MonoBehaviour`, `ITouchScreenButton` | 12 | Base for a button on an in-world touch screen (such as the camera or menus): tracks pressed state, changes the renderer alpha and plays sounds. Pressed by `TouchScreenMenuBase`. |
| [`Beam`](/game-api/types/global-a-b/beam) | class |  | 9 | One light beam cast from an `ILightEmitter`, tracking which `ILightDetector` it is hitting. Plain class, not a component. |
| [`Bellows`](/game-api/types/global-a-b/bellows) | class | `MonoBehaviour` | 4 | [Smelting and forging](../game-systems/smelting-and-forging.md#bellows): Part of a smelter. Updates while its handle is held and until it settles. |
| [`Belt`](/game-api/types/global-a-b/belt) | class | `Turnable` | 4 | [Items, interaction and damage](../items/overview.md): A drive belt between pulleys in mechanisms. Not the player's belt. |
| [`BeltVisual`](/game-api/types/global-a-b/beltvisual) | class | `MonoBehaviour` | 2 |  |
| [`BezierControlPointMode`](/game-api/types/global-a-b/beziercontrolpointmode) | enum |  | 3 | How a bezier spline keeps neighbouring control points in line: free, aligned or mirrored. |
| [`BillboardParticle`](/game-api/types/global-a-b/billboardparticle) | class | `MonoBehaviour` | 0 |  |
| [`BillboardToPlayer`](/game-api/types/global-a-b/billboardtoplayer) | class | `MonoBehaviour` | 1 |  |
| [`BiomeAttribute`](/game-api/types/global-a-b/biomeattribute) | class | `GeneralValue` | 4 | [Caves](../world/caves.md) |
| [`BiomeAttribute.Create`](/game-api/types/global-a-b/biomeattribute-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomeAttribute>` | 0 |  |
| [`BiomePreset`](/game-api/types/global-a-b/biomepreset) | class | `HashedGeneralValue<BiomePreset>` | 1 | Hashed ScriptableObject holding a serialized biome, referenced by `GenerationStarter` to generate an area. The generated biome is built on first use and cached. |
| [`BiomePreset.Create`](/game-api/types/global-a-b/biomepreset-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomePreset>` | 0 |  |
| [`BiomeSphere`](/game-api/types/global-a-b/biomesphere) | class |  | 9 | A sphere of one biome in a procedural forest, with a seed, origin, radius and strength. Can be sent over the network. |
| [`BiomeSphereComponent`](/game-api/types/global-a-b/biomespherecomponent) | class | `MonoBehaviour` | 1 |  |
| [`BiomeSphereGenerator`](/game-api/types/global-a-b/biomespheregenerator) | class | `NodeMapModifier` | 3 | World generation modifier that places biome spheres on the forest's nodes, from child `BiomeSphereComponent`s plus randomly placed ones. |
| [`BiomeSphereManager`](/game-api/types/global-a-b/biomespheremanager) | class |  | 6 | Holds a forest's biome spheres and answers which biome a point belongs to. Owned by the forest generation (`ForestGeneration.BiomeSphereManager`). |
| [`BiomeSwitchFilter`](/game-api/types/global-a-b/biomeswitchfilter) | class | `SpawnModifierPointNormal` | 2 |  |
| [`BiomeSwitchFilter.Create`](/game-api/types/global-a-b/biomeswitchfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomeSwitchFilter>` | 0 |  |
| [`BlockingCharge`](/game-api/types/global-a-b/blockingcharge) | class | `ProfessionSkill<BlockingCharge>`, `IStrikeSuccessionModifier` | 1 |  |
| [`BlockingCharge.Create`](/game-api/types/global-a-b/blockingcharge-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BlockingCharge>` | 0 |  |
| [`BlockLevel`](/game-api/types/global-a-b/blocklevel) | enum |  | 4 | Flags for how much a pickup blocks a hit from an impact tool: can't block, blocks physical only, blocks everything, or unblockable. Set on `Pickup.BlockLevel`. |
| [`BobbingController`](/game-api/types/global-a-b/bobbingcontroller) | class | `MonoBehaviour` | 4 | Makes a list of child objects bob back and forth and slowly spin, each with its own random offset. Runs in edit mode too. |
| [`Bone`](/game-api/types/global-a-b/bone) | class | `MonoBehaviour` | 0 | Editor helper that draws gizmo lines from this transform to each child, to show a bone chain. |
| [`BoneIdentifier`](/game-api/types/global-a-b/boneidentifier) | class | `ScriptableObject` | 0 | An empty asset used as a key to name a bone, looked up through a `RigMap`. |
| [`BooleanInput`](/game-api/types/global-a-b/booleaninput) | class | `InputSource` | 3 | An on or off controller input value (a button), usable directly as a `bool`. |
| [`BoolEvent`](/game-api/types/global-a-b/boolevent) | class | `AltaEvent<bool, BoolUnityEvent>` | 0 | Serializable `AltaEvent` with a bool argument. Runs both inspector-wired listeners and C# `Invoked` handlers. |
| [`BoolUnityEvent`](/game-api/types/global-a-b/boolunityevent) | class | `UnityEvent<bool>` | 0 | A serializable `UnityEvent` with a `bool` argument, for wiring toggles in the inspector. |
| [`BoughtSkillCrystal`](/game-api/types/global-a-b/boughtskillcrystal) | class | `MonoBehaviour` | 4 |  |
| [`BoughtSkillOrbReplacer`](/game-api/types/global-a-b/boughtskillorbreplacer) | class | `ProgressionSlotContainer` | 6 | The orb for a skill a player already owns on the progression board. Pulling it away and holding it for `timeToBreak` seconds sells the skill back. Synced by the server. |
| [`BoughtSkillVisualizer`](/game-api/types/global-a-b/boughtskillvisualizer) | class | `SkillShrineVisualizer`, `IBuildRendererPostBake`, `IBuildBakeable` | 7 | The ring of orb holders on a skill shrine that shows the skills a player has bought, one orb per bought slot. The server spawns the orbs; clients get them through `Serialize`. |
| [`BouncingValue`](/game-api/types/global-a-b/bouncingvalue) | class | `MonoBehaviour` | 0 |  |
| [`BoundExtensions`](/game-api/types/global-a-b/boundextensions) | static class |  | 1 |  |
| [`BoundsContainer`](/game-api/types/global-a-b/boundscontainer) | class |  | 3 |  |
| [`BoundsDisplay`](/game-api/types/global-a-b/boundsdisplay) | class | `MonoBehaviour` | 0 |  |
| [`Bow`](/game-api/types/global-a-b/bow) | class | `NetworkEntityBehaviour` | 4 | Networked bow component on a pickup prefab. Holds the hand rest points used when drawing, mirroring the right rest to make a left one. |
| [`BowString`](/game-api/types/global-a-b/bowstring) | class | `NetworkEntityBehaviour` | 8 | The grabbable string of a bow. Pulling it moves the string within limits, drives the bow's draw animation and haptics, and an arrow docked in it is shot on release. |
| [`BowStringPullbackInputMethod`](/game-api/types/global-a-b/bowstringpullbackinputmethod) | class | `ISkillInputMethod` | 2 |  |
| [`BowStringPullbackStructure`](/game-api/types/global-a-b/bowstringpullbackstructure) | class | `SkillInputStructure` | 5 | Skill input settings for pulling back a bow string; creates a `BowStringPullbackInputMethod`. |
| [`BowStringPullbackStructure.Create`](/game-api/types/global-a-b/bowstringpullbackstructure-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<BowStringPullbackStructure>` | 0 |  |
| [`BreakOnImpact`](/game-api/types/global-a-b/breakonimpact) | class | `NetworkEntityBehaviour`, `IToolHitDependant` | 3 |  |
| [`BreakOnImpact.TransformProxyEvent`](/game-api/types/global-a-b/breakonimpact-transformproxyevent) | class | `AltaEvent<TransformProxy, TransformProxyHandler>` | 0 | Inspector event with a `TransformProxy` argument, used for `BreakOnImpact`'s server and client break events. |
| [`BreakOnImpact.TransformProxyHandler`](/game-api/types/global-a-b/breakonimpact-transformproxyhandler) | class | `UnityEvent<TransformProxy>` | 0 |  |
| [`BubbleInspector`](/game-api/types/global-a-b/bubbleinspector) | class |  | 3 |  |
| [`BubbleInspectorFieldAttribute`](/game-api/types/global-a-b/bubbleinspectorfieldattribute) | class | `Attribute` | 2 |  |
| [`BubbleInspectorMethodAttribute`](/game-api/types/global-a-b/bubbleinspectormethodattribute) | class | `Attribute` | 0 |  |
| [`BudgetedUpdateModule`](/game-api/types/global-a-b/budgetedupdatemodule) | class | `UpdateModule` | 5 | [Update modules](../console-and-utilities/update-modules.md#budgetedupdatemodule): Each frame it calls methods until `MsAllowance` milliseconds have passed, then stops and carries on from there next frame. |
| [`BudgetedUpdateModuleProfiler`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler) | class |  | 2 |  |
| [`BudgetedUpdateModuleProfiler.BudgetedData`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler-budgeteddata) | class |  | 7 | Timing totals for one budgeted update module, kept in `BudgetedUpdateModuleProfiler.ElapsedTime`. |
| [`BudgetedUpdateModuleProfilerComponent`](/game-api/types/global-a-b/budgetedupdatemoduleprofilercomponent) | class | `MonoBehaviour` | 0 |  |
| [`BuildingAnimation`](/game-api/types/global-a-b/buildinganimation) | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 10 | Plays a build-up animation where an object's parts fly in one by one along a direction, with sounds and effects. Parts are set up in the editor. |
| [`BuildingAnimationEvent`](/game-api/types/global-a-b/buildinganimationevent) | class | `AltaEvent<BuildingAnimation, BuildingAnimationUnityEvent>` | 0 | Serializable `AltaEvent` raised with a `BuildingAnimation`, used for its started and finished events. |
| [`BuildingAnimationUnityEvent`](/game-api/types/global-a-b/buildinganimationunityevent) | class | `UnityEvent<BuildingAnimation>` | 0 |  |
| [`BuildingAnimationWrapper`](/game-api/types/global-a-b/buildinganimationwrapper) | class | `MonoBehaviour`, `IChangeWithChunking` | 5 | Swaps an original object for a final object, playing a `BuildingAnimation` spawned from a prefab in between. The spawned animation is created on load and removed before the chunk is saved. |
| [`BuildPipelinePathData`](/game-api/types/global-a-b/buildpipelinepathdata) | class | `ScriptableObject` | 3 |  |
| [`BuildupChild`](/game-api/types/global-a-b/buildupchild) | class | `NetworkEntityBehaviour` | 7 | One slot on a `BuildupPickup` that holds a child entity spawned onto it. It parents and freezes the child, and reports when the child is grabbed or destroyed so the parent can drop it. |
| [`BuildupPickup`](/game-api/types/global-a-b/builduppickup) | class | `NetworkEntityBehaviour`, `ISavable<BuildupPickupSaveData>`, `ISavableSave<BuildupPickupSaveData>`, +1 more | 4 | A pickup with child items attached in slots, which slash hits knock off. While it has children it can't be docked and some components are disabled. Server controlled and saved. |
| [`BuildupPickupEvent`](/game-api/types/global-a-b/builduppickupevent) | class | `AltaEvent<BuildupPickup, BuildupPickupHandler>` | 0 | Serializable `AltaEvent` that passes a `BuildupPickup`, for inspector-wired callbacks. |
| [`BuildupPickupHandler`](/game-api/types/global-a-b/builduppickuphandler) | class | `UnityEvent<BuildupPickup>` | 0 |  |
| [`BuildupPickupSaveData`](/game-api/types/global-a-b/builduppickupsavedata) | internal class | `NewSaveData<BuildupPickup, BuildupPickupSaveData>` | 1 |  |
| [`BuriedItemTag`](/game-api/types/global-a-b/burieditemtag) | class | `ItemComponent` | 3 |  |
| [`ButtonCounter`](/game-api/types/global-a-b/buttoncounter) | class | `NetworkEntityBehaviour`, `ISavable<ButtonCounterSaveData>`, `ISavableSave<ButtonCounterSaveData>`, +1 more | 15 | A networked number set with up and down buttons (or a throttle) and shown on text labels, such as a quantity picker. Either the server or a single active player owns the changes; the value is saved. |
| [`ButtonCounter.AmountChangedHandler`](/game-api/types/global-a-b/buttoncounter-amountchangedhandler) | delegate |  | 0 | Delegate for `ButtonCounter.AmountChanged`, passing the counter whose amount changed. |
| [`ButtonCounter.CounterMode`](/game-api/types/global-a-b/buttoncounter-countermode) | enum |  | 2 | Who owns a `ButtonCounter`'s value: the server, or the single active player's client, whose changes the server accepts and passes on. |
| [`ButtonCounter.CountSyncMode`](/game-api/types/global-a-b/buttoncounter-countsyncmode) | enum |  | 2 | When a `ButtonCounter` syncs its amount: immediately on each change, or after the player stops changing it for a moment (delayed, the default). |
| [`ButtonCounterSaveData`](/game-api/types/global-a-b/buttoncountersavedata) | class | `NewSaveData<ButtonCounter, ButtonCounterSaveData>` | 1 | Save data for a `ButtonCounter`: its current amount. |
| [`ButtonSoundSettings`](/game-api/types/global-a-b/buttonsoundsettings) | class | `ButtonSettings` | 2 | UI button settings asset that adds sounds for press and release. |
