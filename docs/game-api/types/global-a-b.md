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
| [`AccessibilityFeaturesBoard`](/game-api/types/global-a-b/accessibilityfeaturesboard) | class | `PopupBoard` | 0 |  |
| [`AccessibilityFeaturesChecker`](/game-api/types/global-a-b/accessibilityfeatureschecker) | class | `MonoBehaviour` | 0 |  |
| [`AccountSetupSceneLoader`](/game-api/types/global-a-b/accountsetupsceneloader) | class | `ISceneLoader` | 1 |  |
| [`AchievementBoard`](/game-api/types/global-a-b/achievementboard) | class | `MonoBehaviour` | 0 |  |
| [`AchievementEffectHandler`](/game-api/types/global-a-b/achievementeffecthandler) | static class |  | 1 |  |
| [`AchievementGroupAchievement`](/game-api/types/global-a-b/achievementgroupachievement) | class | `GameAchievement` | 1 |  |
| [`AchievementItem`](/game-api/types/global-a-b/achievementitem) | class | `MonoBehaviour`, `IAchievementItem` | 1 |  |
| [`ActionGlyphAnimator`](/game-api/types/global-a-b/actionglyphanimator) | class | `PooledObject` | 2 |  |
| [`ActionGlyphsPlacer`](/game-api/types/global-a-b/actionglyphsplacer) | class | `MonoBehaviour` | 3 |  |
| [`ActionItem`](/game-api/types/global-a-b/actionitem) | class | `NetworkEntityBehaviour` | 9 | Base for an item that belongs to one player and fades in and out with a materialize effect (the friend request token, the gymnasium teleport tablet). The server sets the owner and syncs it. |
| [`ActionOrb`](/game-api/types/global-a-b/actionorb) | class | `HoverPickup` | 4 | A hovering orb the player grabs and pulls to their face to trigger an action, with haptics and a screen fade as it gets closer. Used for menu, revive and server selection orbs. |
| [`ActiveHandIndex`](/game-api/types/global-a-b/activehandindex) | enum |  | 2 |  |
| [`AdditionalStaticContent`](/game-api/types/global-a-b/additionalstaticcontent) | class | `NetworkEntityBehaviour`, `ISavable<AdditionalStaticContentSaveData>`, `ISavableSave<AdditionalStaticContentSaveData>`, +2 more | 5 |  |
| [`AdditionalStaticContentMarker`](/game-api/types/global-a-b/additionalstaticcontentmarker) | class | `MonoBehaviour` | 0 |  |
| [`AdditionalStaticContentSaveData`](/game-api/types/global-a-b/additionalstaticcontentsavedata) | class | `NewSaveData<AdditionalStaticContent, AdditionalStaticContentSaveData>` | 1 |  |
| [`AddonCraftingPart`](/game-api/types/global-a-b/addoncraftingpart) | class | `CraftingPart` | 0 | [Crafting](../game-systems/crafting.md): A part that shows an extra visual (`jointAddon`) while it's inserted. |
| [`AddressableLoader`](/game-api/types/global-a-b/addressableloader) | class | `MonoBehaviour` | 0 |  |
| [`AddressableSession`](/game-api/types/global-a-b/addressablesession) | class | `IDisposable` | 5 | Loads Unity Addressable assets and keeps them loaded until every user of the session is removed, then releases them all. |
| [`AddressableSystemWarmer`](/game-api/types/global-a-b/addressablesystemwarmer) | class | `MonoBehaviour` | 0 |  |
| [`AdjustHeight`](/game-api/types/global-a-b/adjustheight) | class | `MonoBehaviour` | 2 |  |
| [`AdminTool`](/game-api/types/global-a-b/admintool) | abstract class | `LoggedInTool` | 0 |  |
| [`Aesthetics`](/game-api/types/global-a-b/aesthetics) | static class |  | 1 |  |
| [`AfkTimer`](/game-api/types/global-a-b/afktimer) | class | `MonoBehaviour` | 0 |  |
| [`AgonesLogger`](/game-api/types/global-a-b/agoneslogger) | class | `Agones.Utility.ILogger` | 3 |  |
| [`AlignWithNormalModifier`](/game-api/types/global-a-b/alignwithnormalmodifier) | class | `SpawnModifierSpawnParameters` | 1 |  |
| [`AlignWithNormalModifier.Create`](/game-api/types/global-a-b/alignwithnormalmodifier-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<AlignWithNormalModifier>` | 0 |  |
| [`AlignWithPath`](/game-api/types/global-a-b/alignwithpath) | class | `GeneratablePart` | 1 |  |
| [`AlignWithPathSlope`](/game-api/types/global-a-b/alignwithpathslope) | class | `GeneratablePart` | 1 |  |
| [`AlignWithTerrainSlope`](/game-api/types/global-a-b/alignwithterrainslope) | class | `GeneratablePart` | 1 |  |
| [`AlphanumComparator`](/game-api/types/global-a-b/alphanumcomparator) | class | `IComparer` | 1 |  |
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
| [`AmbienceAudio`](/game-api/types/global-a-b/ambienceaudio) | class | `SoundSource` | 2 |  |
| [`AmbienceManager`](/game-api/types/global-a-b/ambiencemanager) | class | `SingletonBehaviour<AmbienceManager>` | 1 |  |
| [`AmbientTemperatureChecker`](/game-api/types/global-a-b/ambienttemperaturechecker) | class |  | 7 |  |
| [`AmplifyImpostorAsset`](/game-api/types/global-a-b/amplifyimpostorasset) | class | `ScriptableObject` | 17 | Asset from the third-party Amplify Impostors tool: the bake settings and result (mesh and material) for a billboard impostor of a model. |
| [`AmplifyImpostorBakePreset`](/game-api/types/global-a-b/amplifyimpostorbakepreset) | class | `ScriptableObject` | 4 |  |
| [`AnalyticalButton`](/game-api/types/global-a-b/analyticalbutton) | class | `MonoBehaviour`, `IPreventAtlasing` | 8 | A button pressed by the local player's fingertips, worked out geometrically each frame instead of with physics. Client side. |
| [`AnalyticalButtonGroupAutoEnabler`](/game-api/types/global-a-b/analyticalbuttongroupautoenabler) | class | `MonoBehaviour` | 0 |  |
| [`AnalyticsTest`](/game-api/types/global-a-b/analyticstest) | class | `MonoBehaviour` | 0 |  |
| [`AndroidLightSettings`](/game-api/types/global-a-b/androidlightsettings) | class | `GlobalSettings<AndroidLightSettings>` | 1 |  |
| [`AnimatedRagdoll`](/game-api/types/global-a-b/animatedragdoll) | class | `MonoBehaviour` | 0 |  |
| [`AnimateProgress`](/game-api/types/global-a-b/animateprogress) | class | `MonoBehaviour` | 2 |  |
| [`AnimateScaleOverTime`](/game-api/types/global-a-b/animatescaleovertime) | class | `TransformScriptAnimation` | 2 |  |
| [`AnimateTime`](/game-api/types/global-a-b/animatetime) | class | `MonoBehaviour` | 0 |  |
| [`AnimationBasedEffect`](/game-api/types/global-a-b/animationbasedeffect) | class | `AnimationBasedTrigger` | 1 |  |
| [`AnimationBasedTrigger`](/game-api/types/global-a-b/animationbasedtrigger) | class | `MonoBehaviour` | 1 |  |
| [`AnimationEnded`](/game-api/types/global-a-b/animationended) | class | `StateMachineBehaviour` | 1 |  |
| [`AnimationPart`](/game-api/types/global-a-b/animationpart) | class |  | 14 | One moving piece in a building animation: it slides in from an offset to its final transform, with optional sound and effect overrides. |
| [`AnimationRandomStart`](/game-api/types/global-a-b/animationrandomstart) | class | `MonoBehaviour` | 0 |  |
| [`AnimationTrigger`](/game-api/types/global-a-b/animationtrigger) | class | `MonoBehaviour` | 2 |  |
| [`AnimatorForcerTool`](/game-api/types/global-a-b/animatorforcertool) | class | `MonoBehaviour` | 0 |  |
| [`AnimatorSetup`](/game-api/types/global-a-b/animatorsetup) | class |  | 1 |  |
| [`AnvilArea`](/game-api/types/global-a-b/anvilarea) | class | `MonoBehaviour` | 0 |  |
| [`AnvilFilter`](/game-api/types/global-a-b/anvilfilter) | class | `MonoBehaviour` | 0 |  |
| [`AnvilFilterSettings`](/game-api/types/global-a-b/anvilfiltersettings) | class | `ImpactorAreaFilter<AnvilArea>` | 0 |  |
| [`AOEDamage`](/game-api/types/global-a-b/aoedamage) | class | `MonoBehaviour` | 0 | [Health and damage](../items/health-and-damage.md#aoedamage): `AOEDamage`, no namespace, a `MonoBehaviour`. |
| [`ApiAccess`](/game-api/types/global-a-b/apiaccess) | static class |  | 7 | [Alta's web API](../console-and-utilities/alta-web-api.md#apiaccess), [Startup and app state](../console-and-utilities/startup-and-app-state.md): Which client and address it picks: |
| [`ApiEndpoint`](/game-api/types/global-a-b/apiendpoint) | enum |  | 6 |  |
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
| [`ArrowEvent`](/game-api/types/global-a-b/arrowevent) | class | `AltaEvent<Arrow, ArrowUnityEvent>` | 0 |  |
| [`ArrowFlightModifierComponent`](/game-api/types/global-a-b/arrowflightmodifiercomponent) | class | `MonoBehaviour` | 1 |  |
| [`ArrowFlightSettings`](/game-api/types/global-a-b/arrowflightsettings) | class | `ScriptableObject` | 0 |  |
| [`ArrowFlightSettingsDevianceMultiplierModifier`](/game-api/types/global-a-b/arrowflightsettingsdeviancemultipliermodifier) | class | `ArrowFlightSettingsModifier` | 1 |  |
| [`ArrowFlightSettingsModifier`](/game-api/types/global-a-b/arrowflightsettingsmodifier) | abstract class | `ScriptableObject` | 1 |  |
| [`ArrowUnityEvent`](/game-api/types/global-a-b/arrowunityevent) | class | `UnityEvent<Arrow>` | 0 |  |
| [`AssistGrabInteractable`](/game-api/types/global-a-b/assistgrabinteractable) | class | `Interactable`, `ICustomTypeReplace`, `IEntityReplaceHandler` | 0 | [Items, interaction and damage](../items/overview.md) |
| [`AStar<TNode, TConnection>`](/game-api/types/global-a-b/astar-tnode-tconnection) | static class |  | 4 |  |
| [`AStarDestinationCondition<TNode, TConnection>`](/game-api/types/global-a-b/astardestinationcondition-tnode-tconnection) | delegate |  | 0 |  |
| [`AStarTravelCondition<TNode, TConnection>`](/game-api/types/global-a-b/astartravelcondition-tnode-tconnection) | delegate |  | 0 |  |
| [`AStarWorkingNode<TNode, TConnection>`](/game-api/types/global-a-b/astarworkingnode-tnode-tconnection) | class |  | 5 |  |
| [`ATMMachine`](/game-api/types/global-a-b/atmmachine) | class | `NetworkEntityBehaviour` | 8 | [Trading](../game-systems/trading.md#atmmachine): A bank teller for one player at a time. |
| [`AttackTest`](/game-api/types/global-a-b/attacktest) | class | `MonoBehaviour` | 0 |  |
| [`AttackTypeMultiplier`](/game-api/types/global-a-b/attacktypemultiplier) | class |  | 2 |  |
| [`AttributeCurveRange`](/game-api/types/global-a-b/attributecurverange) | class | `CurveRange<BiomeAttribute>` | 2 |  |
| [`AttributeCurveValue`](/game-api/types/global-a-b/attributecurvevalue) | class | `CurveValue<BiomeAttribute>` | 2 |  |
| [`AttributeDoubleValue`](/game-api/types/global-a-b/attributedoublevalue) | class | `DoubleValue<BiomeAttribute>` | 2 |  |
| [`AttributeEvaluation`](/game-api/types/global-a-b/attributeevaluation) | static class |  | 1 |  |
| [`AttributeSet`](/game-api/types/global-a-b/attributeset) | class | `IEnumerable<KeyValuePair<BiomeAttribute, float>>`, `IEnumerable` | 7 | [Caves](../world/caves.md) |
| [`AttributeSingleValue`](/game-api/types/global-a-b/attributesinglevalue) | class | `SingleValue<BiomeAttribute>` | 0 |  |
| [`AttributeUsage`](/game-api/types/global-a-b/attributeusage) | class |  | 1 |  |
| [`AudioControl`](/game-api/types/global-a-b/audiocontrol) | class | `SimpleAudioControl` | 8 | Plays one Wwise event on a game object and lets you stop, seek or reapply sound properties while it plays. Builds on `SimpleAudioControl`. |
| [`AudioEnvironmentBlendSettings`](/game-api/types/global-a-b/audioenvironmentblendsettings) | class | `GlobalSettings<AudioEnvironmentBlendSettings>` | 1 |  |
| [`AudioEnvironmentBlendSettings.Create`](/game-api/types/global-a-b/audioenvironmentblendsettings-create) | class | `AltaMenuItemBase.Assets.Create.Audio.ScriptableObject<AudioEnvironmentBlendSettings>` | 0 |  |
| [`AudioManager`](/game-api/types/global-a-b/audiomanager) | class | `SingletonBehaviour<AudioManager>` | 12 | Plays Wwise sound effects, one shot at a point, on an object, or on a given Wwise game object. Muted and disabled on a headless server. Get it with `SingletonBehaviour<AudioManager>.Instance`. |
| [`AudioMuteEvent`](/game-api/types/global-a-b/audiomuteevent) | delegate |  | 0 |  |
| [`AutoCamDeviceController`](/game-api/types/global-a-b/autocamdevicecontroller) | class | `XrDeviceSdkController` | 4 |  |
| [`AutoCamDeviceLifecycle`](/game-api/types/global-a-b/autocamdevicelifecycle) | class | `DeviceLifecycle` | 3 |  |
| [`AutoCamLocomotionController`](/game-api/types/global-a-b/autocamlocomotioncontroller) | class | `LocomotionController` | 0 |  |
| [`AutoCamPlayer`](/game-api/types/global-a-b/autocamplayer) | class | `PlayerController` | 10 | Player controller for the auto camera mode: a camera that orbits and frames nearby players. `AutoCamLocomotionController` moves it, with keys to switch focus and change framing. |
| [`AutoContainerLid`](/game-api/types/global-a-b/autocontainerlid) | class | `NetworkEntityBehaviour` | 1 |  |
| [`AutoFindAttribute`](/game-api/types/global-a-b/autofindattribute) | class | `PropertyAttribute` | 2 |  |
| [`AvailablePointBar`](/game-api/types/global-a-b/availablepointbar) | class | `MonoBehaviour` | 3 |  |
| [`AvailablePointCrystal`](/game-api/types/global-a-b/availablepointcrystal) | class | `PooledObject` | 1 |  |
| [`AvailablePointVisualizerManager`](/game-api/types/global-a-b/availablepointvisualizermanager) | abstract class | `MonoBehaviour` | 4 |  |
| [`AvoidBakingMarker`](/game-api/types/global-a-b/avoidbakingmarker) | class | `MonoBehaviour` | 0 |  |

## B

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BakeableTextureDecimator`](/game-api/types/global-a-b/bakeabletexturedecimator) | class | `ScriptableObject` | 0 |  |
| [`BanRole`](/game-api/types/global-a-b/banrole) | enum |  | 2 |  |
| [`BaseImpactChannelProgressionFilter`](/game-api/types/global-a-b/baseimpactchannelprogressionfilter) | abstract class | `ScriptableObject` | 2 |  |
| [`BasemapDistanceSet`](/game-api/types/global-a-b/basemapdistanceset) | class | `MonoBehaviour` | 1 |  |
| [`BaseOpenXRInputController`](/game-api/types/global-a-b/baseopenxrinputcontroller) | class | `OpenXRInputController` | 1 |  |
| [`BaseReplacer`](/game-api/types/global-a-b/basereplacer) | abstract class |  | 2 |  |
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
| [`BezierControlPointMode`](/game-api/types/global-a-b/beziercontrolpointmode) | enum |  | 3 |  |
| [`BillboardParticle`](/game-api/types/global-a-b/billboardparticle) | class | `MonoBehaviour` | 0 |  |
| [`BillboardToPlayer`](/game-api/types/global-a-b/billboardtoplayer) | class | `MonoBehaviour` | 1 |  |
| [`BiomeAttribute`](/game-api/types/global-a-b/biomeattribute) | class | `GeneralValue` | 4 | [Caves](../world/caves.md) |
| [`BiomeAttribute.Create`](/game-api/types/global-a-b/biomeattribute-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomeAttribute>` | 0 |  |
| [`BiomePreset`](/game-api/types/global-a-b/biomepreset) | class | `HashedGeneralValue<BiomePreset>` | 1 |  |
| [`BiomePreset.Create`](/game-api/types/global-a-b/biomepreset-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomePreset>` | 0 |  |
| [`BiomeSphere`](/game-api/types/global-a-b/biomesphere) | class |  | 9 | A sphere of one biome in a procedural forest, with a seed, origin, radius and strength. Can be sent over the network. |
| [`BiomeSphereComponent`](/game-api/types/global-a-b/biomespherecomponent) | class | `MonoBehaviour` | 1 |  |
| [`BiomeSphereGenerator`](/game-api/types/global-a-b/biomespheregenerator) | class | `NodeMapModifier` | 3 |  |
| [`BiomeSphereManager`](/game-api/types/global-a-b/biomespheremanager) | class |  | 6 |  |
| [`BiomeSwitchFilter`](/game-api/types/global-a-b/biomeswitchfilter) | class | `SpawnModifierPointNormal` | 2 |  |
| [`BiomeSwitchFilter.Create`](/game-api/types/global-a-b/biomeswitchfilter-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<BiomeSwitchFilter>` | 0 |  |
| [`BlockingCharge`](/game-api/types/global-a-b/blockingcharge) | class | `ProfessionSkill<BlockingCharge>`, `IStrikeSuccessionModifier` | 1 |  |
| [`BlockingCharge.Create`](/game-api/types/global-a-b/blockingcharge-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BlockingCharge>` | 0 |  |
| [`BlockLevel`](/game-api/types/global-a-b/blocklevel) | enum |  | 4 |  |
| [`BobbingController`](/game-api/types/global-a-b/bobbingcontroller) | class | `MonoBehaviour` | 4 |  |
| [`Bone`](/game-api/types/global-a-b/bone) | class | `MonoBehaviour` | 0 |  |
| [`BoneIdentifier`](/game-api/types/global-a-b/boneidentifier) | class | `ScriptableObject` | 0 | An empty asset used as a key to name a bone, looked up through a `RigMap`. |
| [`BooleanInput`](/game-api/types/global-a-b/booleaninput) | class | `InputSource` | 3 | An on or off controller input value (a button), usable directly as a `bool`. |
| [`BoolEvent`](/game-api/types/global-a-b/boolevent) | class | `AltaEvent<bool, BoolUnityEvent>` | 0 |  |
| [`BoolUnityEvent`](/game-api/types/global-a-b/boolunityevent) | class | `UnityEvent<bool>` | 0 | A serializable `UnityEvent` with a `bool` argument, for wiring toggles in the inspector. |
| [`BoughtSkillCrystal`](/game-api/types/global-a-b/boughtskillcrystal) | class | `MonoBehaviour` | 4 |  |
| [`BoughtSkillOrbReplacer`](/game-api/types/global-a-b/boughtskillorbreplacer) | class | `ProgressionSlotContainer` | 6 | The orb for a skill a player already owns on the progression board. Pulling it away and holding it for `timeToBreak` seconds sells the skill back. Synced by the server. |
| [`BoughtSkillVisualizer`](/game-api/types/global-a-b/boughtskillvisualizer) | class | `SkillShrineVisualizer`, `IBuildRendererPostBake`, `IBuildBakeable` | 7 |  |
| [`BouncingValue`](/game-api/types/global-a-b/bouncingvalue) | class | `MonoBehaviour` | 0 |  |
| [`BoundExtensions`](/game-api/types/global-a-b/boundextensions) | static class |  | 1 |  |
| [`BoundsContainer`](/game-api/types/global-a-b/boundscontainer) | class |  | 3 |  |
| [`BoundsDisplay`](/game-api/types/global-a-b/boundsdisplay) | class | `MonoBehaviour` | 0 |  |
| [`Bow`](/game-api/types/global-a-b/bow) | class | `NetworkEntityBehaviour` | 4 |  |
| [`BowString`](/game-api/types/global-a-b/bowstring) | class | `NetworkEntityBehaviour` | 8 | The grabbable string of a bow. Pulling it moves the string within limits, drives the bow's draw animation and haptics, and an arrow docked in it is shot on release. |
| [`BowStringPullbackInputMethod`](/game-api/types/global-a-b/bowstringpullbackinputmethod) | class | `ISkillInputMethod` | 2 |  |
| [`BowStringPullbackStructure`](/game-api/types/global-a-b/bowstringpullbackstructure) | class | `SkillInputStructure` | 5 |  |
| [`BowStringPullbackStructure.Create`](/game-api/types/global-a-b/bowstringpullbackstructure-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<BowStringPullbackStructure>` | 0 |  |
| [`BreakOnImpact`](/game-api/types/global-a-b/breakonimpact) | class | `NetworkEntityBehaviour`, `IToolHitDependant` | 3 |  |
| [`BreakOnImpact.TransformProxyEvent`](/game-api/types/global-a-b/breakonimpact-transformproxyevent) | class | `AltaEvent<TransformProxy, TransformProxyHandler>` | 0 |  |
| [`BreakOnImpact.TransformProxyHandler`](/game-api/types/global-a-b/breakonimpact-transformproxyhandler) | class | `UnityEvent<TransformProxy>` | 0 |  |
| [`BubbleInspector`](/game-api/types/global-a-b/bubbleinspector) | class |  | 3 |  |
| [`BubbleInspectorFieldAttribute`](/game-api/types/global-a-b/bubbleinspectorfieldattribute) | class | `Attribute` | 2 |  |
| [`BubbleInspectorMethodAttribute`](/game-api/types/global-a-b/bubbleinspectormethodattribute) | class | `Attribute` | 0 |  |
| [`BudgetedUpdateModule`](/game-api/types/global-a-b/budgetedupdatemodule) | class | `UpdateModule` | 5 | [Update modules](../console-and-utilities/update-modules.md#budgetedupdatemodule): Each frame it calls methods until `MsAllowance` milliseconds have passed, then stops and carries on from there next frame. |
| [`BudgetedUpdateModuleProfiler`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler) | class |  | 2 |  |
| [`BudgetedUpdateModuleProfiler.BudgetedData`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler-budgeteddata) | class |  | 7 |  |
| [`BudgetedUpdateModuleProfilerComponent`](/game-api/types/global-a-b/budgetedupdatemoduleprofilercomponent) | class | `MonoBehaviour` | 0 |  |
| [`BuildingAnimation`](/game-api/types/global-a-b/buildinganimation) | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 10 | Plays a build-up animation where an object's parts fly in one by one along a direction, with sounds and effects. Parts are set up in the editor. |
| [`BuildingAnimationEvent`](/game-api/types/global-a-b/buildinganimationevent) | class | `AltaEvent<BuildingAnimation, BuildingAnimationUnityEvent>` | 0 |  |
| [`BuildingAnimationUnityEvent`](/game-api/types/global-a-b/buildinganimationunityevent) | class | `UnityEvent<BuildingAnimation>` | 0 |  |
| [`BuildingAnimationWrapper`](/game-api/types/global-a-b/buildinganimationwrapper) | class | `MonoBehaviour`, `IChangeWithChunking` | 5 |  |
| [`BuildPipelinePathData`](/game-api/types/global-a-b/buildpipelinepathdata) | class | `ScriptableObject` | 3 |  |
| [`BuildupChild`](/game-api/types/global-a-b/buildupchild) | class | `NetworkEntityBehaviour` | 7 |  |
| [`BuildupPickup`](/game-api/types/global-a-b/builduppickup) | class | `NetworkEntityBehaviour`, `ISavable<BuildupPickupSaveData>`, `ISavableSave<BuildupPickupSaveData>`, +1 more | 4 | A pickup with child items attached in slots, which slash hits knock off. While it has children it can't be docked and some components are disabled. Server controlled and saved. |
| [`BuildupPickupEvent`](/game-api/types/global-a-b/builduppickupevent) | class | `AltaEvent<BuildupPickup, BuildupPickupHandler>` | 0 |  |
| [`BuildupPickupHandler`](/game-api/types/global-a-b/builduppickuphandler) | class | `UnityEvent<BuildupPickup>` | 0 |  |
| [`BuildupPickupSaveData`](/game-api/types/global-a-b/builduppickupsavedata) | internal class | `NewSaveData<BuildupPickup, BuildupPickupSaveData>` | 1 |  |
| [`BuriedItemTag`](/game-api/types/global-a-b/burieditemtag) | class | `ItemComponent` | 3 |  |
| [`ButtonCounter`](/game-api/types/global-a-b/buttoncounter) | class | `NetworkEntityBehaviour`, `ISavable<ButtonCounterSaveData>`, `ISavableSave<ButtonCounterSaveData>`, +1 more | 15 | A networked number set with up and down buttons (or a throttle) and shown on text labels, such as a quantity picker. Either the server or a single active player owns the changes; the value is saved. |
| [`ButtonCounter.AmountChangedHandler`](/game-api/types/global-a-b/buttoncounter-amountchangedhandler) | delegate |  | 0 |  |
| [`ButtonCounter.CounterMode`](/game-api/types/global-a-b/buttoncounter-countermode) | enum |  | 2 |  |
| [`ButtonCounter.CountSyncMode`](/game-api/types/global-a-b/buttoncounter-countsyncmode) | enum |  | 2 |  |
| [`ButtonCounterSaveData`](/game-api/types/global-a-b/buttoncountersavedata) | class | `NewSaveData<ButtonCounter, ButtonCounterSaveData>` | 1 |  |
| [`ButtonSoundSettings`](/game-api/types/global-a-b/buttonsoundsettings) | class | `ButtonSettings` | 2 |  |
