---
title: "No namespace: T to X"
description: "Root.Township types with no namespace, T to X."
sidebar_position: 23
---

# No namespace: T to X

Types in `Root.Township` with no namespace (the global namespace), from T to X. 249 types, 13 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## T

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`TangentSolver`](/game-api/types/global-t-x/tangentsolver) | static class |  | 1 |  |
| [`TargetBasedSkill`](/game-api/types/global-t-x/targetbasedskill) | abstract class | `PickupBasedSkill` | 5 | Base for charged tool skills that show a target on the struck object and fire when the player hits it, such as `PowerStinger` and `PowerCrossSlash`. The client reports the hit and the server runs the skill. |
| [`TaskCompletedEvent`](/game-api/types/global-t-x/taskcompletedevent) | class | `MonoBehaviour`, `IAchievementItem` | 1 | Component that fires one of two UnityEvents depending on whether the local player has completed an achievement, and shows its description. Client side. |
| [`TaskLock`](/game-api/types/global-t-x/tasklock) | class |  | 3 | Runs one async task at a time: `Run` does nothing if a previous task is still going. Exceptions are logged, not thrown. |
| [`TaskYield`](/game-api/types/global-t-x/taskyield) | class | `CustomYieldInstruction` | 3 | Lets a Unity coroutine wait for a `Task`: yield one and the coroutine resumes when the task finishes. |
| [`TeleportationPoint`](/game-api/types/global-t-x/teleportationpoint) | class | `CustomTeleportation`, `ISavable<TeleportationPointSaveData>`, `ISavableSave<TeleportationPointSaveData>`, +1 more | 7 |  |
| [`TeleportationPointSaveData`](/game-api/types/global-t-x/teleportationpointsavedata) | class | `NewSaveData<TeleportationPoint, TeleportationPointSaveData>` | 2 |  |
| [`TeleportAwareTriggerExample`](/game-api/types/global-t-x/teleportawaretriggerexample) | abstract class | `MonoBehaviour`, `ITeleportAwareTrigger` | 2 |  |
| [`TeleportDefinition`](/game-api/types/global-t-x/teleportdefinition) | class | `ScriptableObject` | 5 | Asset that teleports a player with origin and destination effects, used by climbing tower teleporter nodes. Effects are sent to other clients through a `TeleportDefinitionNetworkMessenger`. |
| [`TeleportDefinitionNetworkMessenger`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger) | class | `NetworkEntityBehaviour` | 3 | Network entity behaviour that syncs teleport start and end effects for its `TeleportDefinition`s, so other players see the origin and destination visuals. |
| [`Teleporter`](/game-api/types/global-t-x/teleporter) | class | `ControllerExtension` | 5 | Hand controller extension for pointer teleporting: shows the pointer while the teleport action is held and moves the player there on release. Local player only, and not in auto cam mode. |
| [`TeleporterBlock`](/game-api/types/global-t-x/teleporterblock) | static class |  | 3 |  |
| [`TeleporterPlatform`](/game-api/types/global-t-x/teleporterplatform) | class | `NetworkEntityBehaviour` | 2 |  |
| [`TeleporterTrailLerper`](/game-api/types/global-t-x/teleportertraillerper) | class | `MonoBehaviour` | 5 | Client effect: a pooled trail that follows a player when they teleport or stream-move. Taken from a pool by `PlayerSpecialEffectsController`. |
| [`TeleportPointElement`](/game-api/types/global-t-x/teleportpointelement) | class | `ListElementWithButton` | 3 | List entry with a button for one spawn area, used by the feature test gymnasium's teleport point page. |
| [`TelescopicPickup`](/game-api/types/global-t-x/telescopicpickup) | class | `NetworkEntityBehaviour` | 4 | [Items, interaction and damage](../items/overview.md) |
| [`TempAbsorber`](/game-api/types/global-t-x/tempabsorber) | class | `PuzzleCondition`, `ILightDetectorTemp` | 2 |  |
| [`TempDoor`](/game-api/types/global-t-x/tempdoor) | class | `MonoBehaviour` | 0 |  |
| [`TemperatureAffected`](/game-api/types/global-t-x/temperatureaffected) | class | `MonoBehaviour` | 0 |  |
| [`TemperatureCheckInput`](/game-api/types/global-t-x/temperaturecheckinput) | class | `ISkillInputMethod` | 4 | Skill input that turns on while a held item touches heat: it copies the item's colliders onto the HeatPoint layer and adds a `HeatPointTriggerCollector`, which calls `SetActive`. |
| [`TemperatureCheckInputStructure`](/game-api/types/global-t-x/temperaturecheckinputstructure) | class | `SkillInputStructure` | 6 | Skill input settings that activate a skill when the held item (or its matching tool parts) is in a hot enough heat area for a set time. |
| [`TemperatureCheckInputStructure.Create`](/game-api/types/global-t-x/temperaturecheckinputstructure-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Input.ScriptableObject<TemperatureCheckInputStructure>` | 0 |  |
| [`TemperatureVisuals`](/game-api/types/global-t-x/temperaturevisuals) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 | Drives a smelter-style fire's look from its temperature: light faders, coal glow and two particle sets. Client only (skipped on a headless server); `Recycler` calls `UpdateVisuals`. |
| [`TempLaser`](/game-api/types/global-t-x/templaser) | class | `MonoBehaviour`, `ILightEmitterTemp` | 0 |  |
| [`TempSceneObject`](/game-api/types/global-t-x/tempsceneobject) | class | `MonoBehaviour` | 0 |  |
| [`TerrainAccess`](/game-api/types/global-t-x/terrainaccess) | class | `ICacheable` | 22 | A copied rectangle of a terrain's heightmap and splat (paint) map that can be edited and written back. Made by `TerrainInfo` for forest generation and cached to disk as an `ICacheable`. |
| [`TerrainInfo`](/game-api/types/global-t-x/terraininfo) | class | `SingletonBehaviour<TerrainInfo>` | 15 | Singleton (`SingletonBehaviour<TerrainInfo>.Instance`) wrapping the world's Unity terrain: height, normal and steepness lookups in world coordinates, and the splat map. The server disables the terrain renderer. |
| [`TerrainModificationRegister`](/game-api/types/global-t-x/terrainmodificationregister) | class | `SingletonBehaviour<TerrainModificationRegister>` | 2 |  |
| [`TerrainOffsetPart`](/game-api/types/global-t-x/terrainoffsetpart) | class | `GeneratablePart` | 1 |  |
| [`TerrainSplatPart`](/game-api/types/global-t-x/terrainsplatpart) | class | `GeneratablePart` | 1 |  |
| [`TerrainSpline`](/game-api/types/global-t-x/terrainspline) | class | `GeneratablePart` | 1 |  |
| [`TestEntity`](/game-api/types/global-t-x/testentity) | class | `NetworkEntityBehaviour` | 0 |  |
| [`TestSerializable`](/game-api/types/global-t-x/testserializable) | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 3 |  |
| [`TestSpawner`](/game-api/types/global-t-x/testspawner) | class | `NetworkEntityBehaviour` | 1 |  |
| [`TestSpawner.Mode`](/game-api/types/global-t-x/testspawner-mode) | enum |  | 4 | Layout `TestSpawner` uses to place spawned objects: a grid, an even or weighted scatter in a circle, or a scatter in a rectangle. |
| [`TestUnitySerializable`](/game-api/types/global-t-x/testunityserializable) | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 3 |  |
| [`TextBoard`](/game-api/types/global-t-x/textboard) | class | `MonoBehaviour` | 0 |  |
| [`TextFont`](/game-api/types/global-t-x/textfont) | class | `ScriptableObject` | 4 | Asset holding the letter meshes for 3D mesh text (used by `TextRenderer`). Letters are looked up by character code. |
| [`TextFont.Create`](/game-api/types/global-t-x/textfont-create) | class | `AltaMenuItemBase.Assets.Create.Utility.ScriptableObject<TextFont>` | 0 |  |
| [`TextFont.TextFontLOD`](/game-api/types/global-t-x/textfont-textfontlod) | class |  | 2 | One LOD level of a `TextFont`: the letter meshes for lower case, upper case, numbers and other characters. |
| [`TextRenderer`](/game-api/types/global-t-x/textrenderer) | class | `MonoBehaviour`, `IBakeable`, `IBuildRendererBakeable`, +1 more | 29 | Draws 3D text in the world (signs, labels, dock counts) by building a mesh per letter from a `TextFont`. Client side visuals only: on a headless server setting `Text` stores the string but builds nothing. |
| [`TextRendererBackground`](/game-api/types/global-t-x/textrendererbackground) | class | `MonoBehaviour` | 0 |  |
| [`TextureChannels`](/game-api/types/global-t-x/texturechannels) | enum |  | 2 | Channels kept when writing a `TextureOutput`: `RGBA` or `RGB`. |
| [`TextureCompression`](/game-api/types/global-t-x/texturecompression) | enum |  | 4 | Compression level for a `TextureOutput`: `None`, `Normal`, `High` or `Low`. |
| [`TextureOffsetAnimator`](/game-api/types/global-t-x/textureoffsetanimator) | class | `MonoBehaviour` | 0 |  |
| [`TextureOutput`](/game-api/types/global-t-x/textureoutput) | class |  | 12 | Settings for one texture a texture-baking tool writes out: name, size, channels, compression and file format. Editor or tool data, not gameplay. |
| [`TextureScale`](/game-api/types/global-t-x/texturescale) | enum |  | 4 | Downscale factor for a `TextureOutput`: full, half, quarter or eighth size (the value is the divisor). |
| [`ThingWithAnimationCurve`](/game-api/types/global-t-x/thingwithanimationcurve) | class | `MonoBehaviour` | 3 |  |
| [`ThrottleCounter`](/game-api/types/global-t-x/throttlecounter) | class | `MonoBehaviour` | 3 | Turns a spring-back `SelectionLever` into a stream of integer steps: the further the lever is pushed from its middle, the faster it counts. Runs where the player holds the lever. |
| [`ThrowableArrow`](/game-api/types/global-t-x/throwablearrow) | class | `MonoBehaviour` | 0 |  |
| [`ThrowablePickup`](/game-api/types/global-t-x/throwablepickup) | abstract class | `MonoBehaviour` | 0 | [Items, interaction and damage](../items/overview.md): Base for custom throw behaviour (`ThrowAlignHelper`). |
| [`ThrowAlignHelper`](/game-api/types/global-t-x/throwalignhelper) | class | `ThrowablePickup` | 0 |  |
| [`ThumbConfiguration`](/game-api/types/global-t-x/thumbconfiguration) | class | `ScriptableObject` | 2 | Asset that sets how the player's thumb rests and which axis it curls around, per hand. |
| [`ThumbConfiguration.Create`](/game-api/types/global-t-x/thumbconfiguration-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<ThumbConfiguration>` | 0 |  |
| [`ThumbPosition`](/game-api/types/global-t-x/thumbposition) | enum |  | 2 | How the hand's thumb is posed on a grab point: around a `Pole` or flat on a `Plane`. Picks the thumb configuration in `HandGripConfiguration`. |
| [`TickTimer`](/game-api/types/global-t-x/ticktimer) | class |  | 6 | Repeating timer on the game `Timeline` that fires `Ticked` at a fixed interval, and can be saved and reloaded with the world. |
| [`TimeBasedStagedPrefab`](/game-api/types/global-t-x/timebasedstagedprefab) | class | `StageBasedPrefab`, `ISavable<TimeBasedStagedPrefabSaveData>`, `ISavableSave<TimeBasedStagedPrefabSaveData>`, +1 more | 4 |  |
| [`TimeBasedStagedPrefabSaveData`](/game-api/types/global-t-x/timebasedstagedprefabsavedata) | internal class | `NewSaveData<TimeBasedStagedPrefab, TimeBasedStagedPrefabSaveData>` | 4 |  |
| [`TimedEvent`](/game-api/types/global-t-x/timedevent) | class | `MonoBehaviour` | 2 |  |
| [`TimedEventSaveData`](/game-api/types/global-t-x/timedeventsavedata) | class | `NewSaveData<SerializedTimedEvent, TimedEventSaveData>` | 2 |  |
| [`TimedEventSaveData.TimerData`](/game-api/types/global-t-x/timedeventsavedata-timerdata) | class |  | 2 | Saved state of one running timer of a `SerializedTimedEvent`. |
| [`TimedPrefabStageDefinition`](/game-api/types/global-t-x/timedprefabstagedefinition) | class | `HashedGeneralValue<TimedPrefabStageDefinition>` | 2 | Asset listing when a `TimeBasedStagedPrefab` moves to each stage, counted from when its timer starts (under Woodcutting/Timed Stage Definitions). |
| [`TimedPrefabStageDefinition.TimeSetup`](/game-api/types/global-t-x/timedprefabstagedefinition-timesetup) | class |  | 2 | One timed stage change: after a number of seconds, switch to a given stage. |
| [`TimedToggle`](/game-api/types/global-t-x/timedtoggle) | class | `MonoBehaviour` | 0 |  |
| [`TimeManager`](/game-api/types/global-t-x/timemanager) | class | `NetworkEntityBehaviour`, `ISavable<TimeManagerSaveData>`, `ISavableSave<TimeManagerSaveData>`, +1 more | 2 | [Time and environment](../world/time-and-environment.md#timemanager): A scene `NetworkEntityBehaviour`; `static TimeManager instance`. |
| [`TimeManagerSaveData`](/game-api/types/global-t-x/timemanagersavedata) | internal class | `NewSaveData<TimeManager, TimeManagerSaveData>` | 2 |  |
| [`TimeManagerSaveDataOld1`](/game-api/types/global-t-x/timemanagersavedataold1) | internal class | `OldSaveData` | 3 |  |
| [`TimeManagerSaveDataOld2`](/game-api/types/global-t-x/timemanagersavedataold2) | internal class | `OldSaveData` | 3 |  |
| [`Timer`](/game-api/types/global-t-x/timer) | class |  | 5 |  |
| [`TimerLogic`](/game-api/types/global-t-x/timerlogic) | class | `MonoBehaviour`, `ISavable<TimerLogicSaveData>`, `ISavableSave<TimerLogicSaveData>`, +1 more | 1 | Saved component that runs a timer for a set duration and fires an event when it ends. Base for `ImpactDetectionLogic`. |
| [`TimerLogicSaveData`](/game-api/types/global-t-x/timerlogicsavedata) | class | `NewSaveData<TimerLogic, TimerLogicSaveData>` | 3 |  |
| [`TimerLogicSaveData1`](/game-api/types/global-t-x/timerlogicsavedata1) | class | `OldSaveData` | 3 |  |
| [`TimeScroller`](/game-api/types/global-t-x/timescroller) | class | `MonoBehaviour` | 0 |  |
| [`TimeTracker`](/game-api/types/global-t-x/timetracker) | class |  | 0 |  |
| [`ToggleBool`](/game-api/types/global-t-x/togglebool) | class |  | 7 | A named on/off setting that registers itself in a static list so console commands can toggle it by name. Examples: `immortals`, `damagepopup`, `xppopup`. |
| [`ToggleCameraDepth`](/game-api/types/global-t-x/togglecameradepth) | class | `MonoBehaviour` | 2 |  |
| [`ToggleChildrenActive`](/game-api/types/global-t-x/togglechildrenactive) | class | `MonoBehaviour` | 1 |  |
| [`ToggleEvent`](/game-api/types/global-t-x/toggleevent) | class | `AltaEvent<bool, ToggleUnityEvent>` | 0 | Serializable event with a bool argument, shown in the inspector as a `ToggleUnityEvent`. |
| [`ToggleKinematicLogic`](/game-api/types/global-t-x/togglekinematiclogic) | class | `MonoBehaviour` | 2 | Small component with methods to turn its rigidbody's `isKinematic` on or off, for wiring to UnityEvents. |
| [`ToggleUnityEvent`](/game-api/types/global-t-x/toggleunityevent) | class | `UnityEvent<bool>` | 0 | A serializable `UnityEvent` with a bool argument, for wiring toggle callbacks in the inspector. |
| [`ToolBasedEffect`](/game-api/types/global-t-x/toolbasedeffect) | class | `ToolBasedEffectBase` | 0 |  |
| [`ToolBasedEffectBase`](/game-api/types/global-t-x/toolbasedeffectbase) | abstract class | `PooledObject` | 3 | Base for pooled skill visuals that copy an object's meshes (skipping docks) and animate a `_Progress` material over them, such as `ToolBasedEffect` and `DissipateToolBasedEffect`. Client side. |
| [`ToolBasedSkillStatus`](/game-api/types/global-t-x/toolbasedskillstatus) | enum |  | 4 | Stage of a tool-based skill use: cancelled, charging started, charged or consumed. `SkillInputStructure.PlaySoundAt` picks its default effect from it. |
| [`TossRandom`](/game-api/types/global-t-x/tossrandom) | class | `NetworkEntityBehaviour` | 2 |  |
| [`TossTest`](/game-api/types/global-t-x/tosstest) | class | `MonoBehaviour` | 0 |  |
| [`TouchScreenButtonGrower`](/game-api/types/global-t-x/touchscreenbuttongrower) | class | `MonoBehaviour` | 0 |  |
| [`TouchScreenButtonOld`](/game-api/types/global-t-x/touchscreenbuttonold) | class | `BasicTouchScreenButton` | 1 | Older touch screen button that just flashes its pressed look for a quarter second when pressed. |
| [`TouchScreenKeyboard`](/game-api/types/global-t-x/touchscreenkeyboard) | class | `TouchScreenMenuBase` | 29 | The in-world virtual keyboard players type on with their fingers. Client only; one shared instance, moved into place with `Get` for whichever text field (`IUseVirtualKeyboard`) is using it. |
| [`TouchScreenKeyboardKey`](/game-api/types/global-t-x/touchscreenkeyboardkey) | class | `BasicTouchScreenButton`, `ILabeledTouchScreenButton`, `ITouchScreenButton` | 11 | One key on the in-game VR touch screen keyboard. Shows its label (changing with shift), sends its key to the `TouchScreenKeyboard` when pressed, and repeats backspace when held. Client only. |
| [`TouchScreenKeyboardKey.KeySizeType`](/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype) | enum |  | 3 | Which size a touch screen keyboard key uses: a normal key, a suggestion key (F5 to F7) or the space bar. |
| [`TouchScreenMenuBase`](/game-api/types/global-t-x/touchscreenmenubase) | class | `MonoBehaviour` | 4 | Base for an in-world touch screen that the local player's fingertips press: maps child buttons to screen rectangles, presses and releases them, and reports swipes. Client side; call `Setup` with true for the local player. |
| [`TrackedEvent<T>`](/game-api/types/global-t-x/trackedevent-t) | class |  | 5 | A delegate list you add to with `+` and fire with `Invoke`, which remembers whether it has fired. Used for the client's entity-spawned listeners and as the base of `OneTimeEvent<T>`. |
| [`Tracker`](/game-api/types/global-t-x/tracker) | class | `MonoBehaviour`, `ISavable<TrackerData>`, `ISavableSave<TrackerData>`, +1 more | 7 |  |
| [`TrackerData`](/game-api/types/global-t-x/trackerdata) | class | `NewSaveData<Tracker, TrackerData>` | 1 | Save data for a `Tracker`, the component that registers a network entity under a name so it can be looked up later. |
| [`TradeCommandModule`](/game-api/types/global-t-x/tradecommandmodule) | static class |  | 0 |  |
| [`TradeCommandModule.ATMCommandModule`](/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule) | static class |  | 3 |  |
| [`TrailLerper`](/game-api/types/global-t-x/traillerper) | class | `PooledObject` | 0 |  |
| [`TrailRendererLerpFollow`](/game-api/types/global-t-x/trailrendererlerpfollow) | class | `LerpFollow` | 1 |  |
| [`TrainingHittingTool`](/game-api/types/global-t-x/traininghittingtool) | class | `NetworkEntityBehaviour` | 2 |  |
| [`TransferAmountArgument`](/game-api/types/global-t-x/transferamountargument) | class | `GameTaskActionArgument` | 3 | [Other systems](../game-systems/other-systems.md) |
| [`TransferAmountTask`](/game-api/types/global-t-x/transferamounttask) | class | `CustomArgumentGameAction<TransferAmountArgument>` | 1 |  |
| [`TransformBone`](/game-api/types/global-t-x/transformbone) | class | `MonoBehaviour` | 1 |  |
| [`TransformConflict`](/game-api/types/global-t-x/transformconflict) | class | `MonoBehaviour` | 3 |  |
| [`TransformDeltaChangeChecker`](/game-api/types/global-t-x/transformdeltachangechecker) | class |  | 4 | Watches a set of transforms and fires `AllTransformsFrozen` once none has moved or turned more than a small amount for long enough. Probably used for pose detection. |
| [`TransformEvent`](/game-api/types/global-t-x/transformevent) | class | `AltaEvent<Transform, TransformHandler>` | 0 | A serialisable `AltaEvent` that passes a `Transform`, for inspector-wired callbacks such as where a skill effect should play. |
| [`TransformHandler`](/game-api/types/global-t-x/transformhandler) | class | `UnityEvent<Transform>` | 0 | A serializable `UnityEvent` that passes a `Transform`. |
| [`TransformMovementContext`](/game-api/types/global-t-x/transformmovementcontext) | class | `IMovementContext`, `IHasMovementContext` | 9 |  |
| [`TransformProxy`](/game-api/types/global-t-x/transformproxy) | class |  | 6 | A plain position and rotation, for sending a place over the network (for example where to play particles) without a Transform. |
| [`TransformSaveCollection`](/game-api/types/global-t-x/transformsavecollection) | class | `SaveableTransform` | 6 | Asset that stores saved transforms for a hierarchy by object name and can load them back. Saving is stubbed out in this build: `Save` only empties the list. |
| [`TransformSaveObject`](/game-api/types/global-t-x/transformsaveobject) | class | `SaveableTransform` | 7 | Asset that stores one transform's saved position, rotation and name, and can load it back onto a transform. Used in `TransformSaveCollection`. |
| [`TransformScaledEvent`](/game-api/types/global-t-x/transformscaledevent) | class | `AltaEvent<Transform, float, TransformScaledHandler>` | 0 | Serializable event with a transform and a scale value, used for the scaled hit-ground effect in `SmoothLocomotionSettings`. |
| [`TransformScaledHandler`](/game-api/types/global-t-x/transformscaledhandler) | class | `UnityEvent<Transform, float>` | 0 |  |
| [`TransformScriptAnimation`](/game-api/types/global-t-x/transformscriptanimation) | abstract class | `MonoBehaviour` | 6 | Base for simple code-driven transform animations that tick through the budgeted update module. By default they don't run on a dedicated server. |
| [`TreeChopDetector`](/game-api/types/global-t-x/treechopdetector) | class | `MonoBehaviour` | 0 |  |
| [`TrialEventData`](/game-api/types/global-t-x/trialeventdata) | class |  | 2 | [Console events](../console-and-utilities/console-events.md) |
| [`TrialLogic`](/game-api/types/global-t-x/triallogic) | class | `NetworkEntityBehaviour` | 9 |  |
| [`TrialReset`](/game-api/types/global-t-x/trialreset) | class | `NetworkEntityBehaviour`, `ITrialReset` | 1 |  |
| [`Triangles`](/game-api/types/global-t-x/triangles) | static class |  | 5 |  |
| [`TriangleVisibilityUtility`](/game-api/types/global-t-x/trianglevisibilityutility) | static class |  | 1 |  |
| [`TriangularDistributionInt`](/game-api/types/global-t-x/triangulardistributionint) | class |  | 1 | Serializable random integer setting with a triangular distribution between a minimum and maximum, peaking at the mode. |
| [`Trigger`](/game-api/types/global-t-x/trigger) | abstract class | `MonoBehaviour`, `ISavable<TriggerSaveData>`, `ISavableSave<TriggerSaveData>`, +1 more | 3 | Base of on/off inputs like `Lever` and `TwoStepLever`. Fires turned on and turned off events and can act as a toggle. Saves its toggle settings. |
| [`TriggerArea`](/game-api/types/global-t-x/triggerarea) | class | `SpaceDefinedAttribute<SpacePoint>` | 1 |  |
| [`TriggerCapsule`](/game-api/types/global-t-x/triggercapsule) | class | `TriggerShape` | 3 |  |
| [`TriggerContainEvents`](/game-api/types/global-t-x/triggercontainevents) | class | `MonoBehaviour` | 0 |  |
| [`TriggerEnterEvents`](/game-api/types/global-t-x/triggerenterevents) | class | `MonoBehaviour` | 0 |  |
| [`TriggerEnterEvents.ColliderEvent`](/game-api/types/global-t-x/triggerenterevents-colliderevent) | class | `AltaEvent<Collider, ColliderUnityEvent>` | 0 | Serializable event that passes a collider, raised by `TriggerEnterEvents` when something enters its trigger. |
| [`TriggerEnterEvents.ColliderUnityEvent`](/game-api/types/global-t-x/triggerenterevents-colliderunityevent) | class | `UnityEvent<Collider>` | 0 |  |
| [`TriggerHandler`](/game-api/types/global-t-x/triggerhandler) | delegate |  | 0 | Handler for `TriggerShape.Entered` and `TriggerShape.Exited`, given the collider. |
| [`TriggerSaveData`](/game-api/types/global-t-x/triggersavedata) | internal class | `NewSaveData<Trigger, TriggerSaveData>` | 2 |  |
| [`TriggerSaveDataOLD1`](/game-api/types/global-t-x/triggersavedataold1) | internal class | `OldSaveData` | 2 |  |
| [`TriggerShape`](/game-api/types/global-t-x/triggershape) | class | `MonoBehaviour` | 4 | Turns a trigger collider's enter and exit messages into C# events, so other scripts can listen without their own collider. |
| [`TriggerShapeEvent`](/game-api/types/global-t-x/triggershapeevent) | class | `TriggerShape` | 0 |  |
| [`TriggerSoundEmitter`](/game-api/types/global-t-x/triggersoundemitter) | class | `MonoBehaviour` | 0 |  |
| [`TriggerSphere`](/game-api/types/global-t-x/triggersphere) | class | `TriggerShape` | 2 |  |
| [`Turnable`](/game-api/types/global-t-x/turnable) | class | `MonoBehaviour`, `ICircle` | 10 | A gear or wheel in a simple torque network: connected turnables share torque, alternate direction, and jam if the loop doesn't fit. Driven by a `Motor`; `Belt` is a subclass. |
| [`TutorialAndDeeplinkRedirector`](/game-api/types/global-t-x/tutorialanddeeplinkredirector) | class | `MonoBehaviour` | 0 |  |
| [`TutorialPromptBoard`](/game-api/types/global-t-x/tutorialpromptboard) | class | `PopupBoard` | 1 | Popup board asking the player whether to play the tutorial. Join loads the tutorial scene; skip closes the board. Client side. |
| [`TwistLimit`](/game-api/types/global-t-x/twistlimit) | class | `RotationLimit` | 1 |  |
| [`TwoStepLever`](/game-api/types/global-t-x/twosteplever) | class | `Trigger`, `INetworkEntityBehaviour` | 3 | [Buttons and levers](../items/buttons-and-levers.md): A lever with an on and off position. `Value`, `ForceVisualSet(float)`. |
| [`TypeSerializationHelper`](/game-api/types/global-t-x/typeserializationhelper) | static class |  | 2 |  |
| [`TypeSerializationHelper.BitSerialization`](/game-api/types/global-t-x/typeserializationhelper-bitserialization) | class | `TypeSerialization<uint>` | 1 |  |
| [`TypeSerializationHelper.BoolSerialization`](/game-api/types/global-t-x/typeserializationhelper-boolserialization) | class | `TypeSerialization<bool>` | 0 |  |
| [`TypeSerializationHelper.ColorSerialization`](/game-api/types/global-t-x/typeserializationhelper-colorserialization) | class | `TypeSerialization<Color>` | 0 |  |
| [`TypeSerializationHelper.DateTimeSerialization`](/game-api/types/global-t-x/typeserializationhelper-datetimeserialization) | class | `TypeSerialization<DateTime>` | 0 |  |
| [`TypeSerializationHelper.EnumSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-enumserialization-t) | class | `TypeSerialization<T>` | 0 |  |
| [`TypeSerializationHelper.FailedTypeSerialization`](/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization) | class | `TypeSerialization<bool>` | 2 |  |
| [`TypeSerializationHelper.FloatBitsSerialization`](/game-api/types/global-t-x/typeserializationhelper-floatbitsserialization) | class | `TypeSerialization<float>` | 1 |  |
| [`TypeSerializationHelper.FloatPrecisionSerialization`](/game-api/types/global-t-x/typeserializationhelper-floatprecisionserialization) | class | `TypeSerialization<float>` | 1 |  |
| [`TypeSerializationHelper.FloatSerialization`](/game-api/types/global-t-x/typeserializationhelper-floatserialization) | class | `TypeSerialization<float>` | 0 |  |
| [`TypeSerializationHelper.HashedSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-hashedserialization-t) | class | `TypeSerialization<T>` | 0 |  |
| [`TypeSerializationHelper.IntSerialization`](/game-api/types/global-t-x/typeserializationhelper-intserialization) | class | `TypeSerialization<int>` | 0 |  |
| [`TypeSerializationHelper.ITypeSerialization`](/game-api/types/global-t-x/typeserializationhelper-itypeserialization) | interface |  | 3 | A serializer for one field type, used to build the network sync and save read/write delegates for a class's fields. Got from `TypeSerializationHelper.GetSerialization`. |
| [`TypeSerializationHelper.LogicManagerSetSerialization`](/game-api/types/global-t-x/typeserializationhelper-logicmanagersetserialization) | class | `TypeSerialization<LogicManagerSet>` | 0 |  |
| [`TypeSerializationHelper.LogicValueDataSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-logicvaluedataserialization-t) | class | `TypeSerialization<T>` | 0 |  |
| [`TypeSerializationHelper.NetworkPrefabSerialization`](/game-api/types/global-t-x/typeserializationhelper-networkprefabserialization) | class | `TypeSerialization<NetworkPrefab>` | 0 |  |
| [`TypeSerializationHelper.ObjectActivator`](/game-api/types/global-t-x/typeserializationhelper-objectactivator) | delegate |  | 0 | Delegate that creates a new object, compiled per type by `TypeSerializationHelper.GetActivator` as a fast constructor call. |
| [`TypeSerializationHelper.QuaternionSerialization`](/game-api/types/global-t-x/typeserializationhelper-quaternionserialization) | class | `TypeSerialization<Quaternion>` | 0 |  |
| [`TypeSerializationHelper.SaveDataSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t) | class | `TypeSerialization<T>` | 2 |  |
| [`TypeSerializationHelper.StringSerialization`](/game-api/types/global-t-x/typeserializationhelper-stringserialization) | class | `TypeSerialization<string>` | 0 |  |
| [`TypeSerializationHelper.SubClassSerialization<T>`](/game-api/types/global-t-x/typeserializationhelper-subclassserialization-t) | class | `TypeSerialization<T>` | 2 |  |
| [`TypeSerializationHelper.TimeSpanSerialization`](/game-api/types/global-t-x/typeserializationhelper-timespanserialization) | class | `TypeSerialization<TimeSpan>` | 0 |  |
| [`TypeSerializationHelper.TypeSerialization<TType>`](/game-api/types/global-t-x/typeserializationhelper-typeserialization-ttype) | abstract class | `ITypeSerialization` | 3 | Base for a serializer of one value type (float, vector, prefab, save data and so on) used to build read and write delegates for synced save fields. |
| [`TypeSerializationHelper.UintSerialization`](/game-api/types/global-t-x/typeserializationhelper-uintserialization) | class | `TypeSerialization<uint>` | 0 |  |
| [`TypeSerializationHelper.Vector2Serialization`](/game-api/types/global-t-x/typeserializationhelper-vector2serialization) | class | `TypeSerialization<Vector2>` | 0 |  |
| [`TypeSerializationHelper.Vector3Serialization`](/game-api/types/global-t-x/typeserializationhelper-vector3serialization) | class | `TypeSerialization<Vector3>` | 0 |  |
| [`TypeSerializationHelper.Vector4Serialization`](/game-api/types/global-t-x/typeserializationhelper-vector4serialization) | class | `TypeSerialization<Vector4>` | 0 |  |

## U

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`UltimateRope`](/game-api/types/global-t-x/ultimaterope) | class | `MonoBehaviour` | 100 | Third-party Ultimate Rope Editor component: builds a physics rope from jointed rigidbody links (procedural mesh, linked objects or imported bones), with optional coil and extension. Runs in edit mode too. |
| [`UltimateRope.EAxis`](/game-api/types/global-t-x/ultimaterope-eaxis) | enum |  | 6 | An axis direction (plus or minus X, Y or Z) used by `UltimateRope` for its coil and link axes. |
| [`UltimateRope.EColliderType`](/game-api/types/global-t-x/ultimaterope-ecollidertype) | enum |  | 3 | Collider shape put on each rope segment of an `UltimateRope`: `None`, `Capsule` or `Box`. |
| [`UltimateRope.ERopeExtensionMode`](/game-api/types/global-t-x/ultimaterope-eropeextensionmode) | enum |  | 2 | How an `UltimateRope` extends: by coil rotation steps or by linear length steps. |
| [`UltimateRope.ERopeType`](/game-api/types/global-t-x/ultimaterope-eropetype) | enum |  | 3 | How an `UltimateRope` is built: procedurally, from linked objects, or from imported bones. |
| [`UltimateRope.RopeBone`](/game-api/types/global-t-x/ultimaterope-ropebone) | class |  | 12 | One imported bone of a skinned rope in the third-party Ultimate Rope asset, with what the rope added to it and its original transform so it can be put back. |
| [`UltimateRope.RopeBreakEventInfo`](/game-api/types/global-t-x/ultimaterope-ropebreakeventinfo) | class |  | 6 |  |
| [`UltimateRope.RopeNode`](/game-api/types/global-t-x/ultimaterope-ropenode) | class |  | 26 | One node of a rope in the third-party Ultimate Rope physics component: a target GameObject and the chain of linked segments and joints running to it. |
| [`UltimateRopeLink`](/game-api/types/global-t-x/ultimateropelink) | class | `MonoBehaviour` | 1 |  |
| [`UnchunkedEffectPlayer`](/game-api/types/global-t-x/unchunkedeffectplayer) | class | `NetworkEntityBehaviour` | 2 |  |
| [`UnityEditorLoggingSettings`](/game-api/types/global-t-x/unityeditorloggingsettings) | class | `GlobalSettings<UnityEditorLoggingSettings>` | 3 |  |
| [`UnityEditorLoggingSettings.Create`](/game-api/types/global-t-x/unityeditorloggingsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<UnityEditorLoggingSettings>` | 0 |  |
| [`UnityLogHandler`](/game-api/types/global-t-x/unityloghandler) | class | `ILogHandler` | 3 |  |
| [`UnityLogUtility`](/game-api/types/global-t-x/unitylogutility) | static class |  | 3 |  |
| [`UnityPickupEvent`](/game-api/types/global-t-x/unitypickupevent) | class | `UnityEvent<Pickup>` | 0 |  |
| [`UnityProfilerSessionQuickAccessAction`](/game-api/types/global-t-x/unityprofilersessionquickaccessaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`UnityUpdateManager`](/game-api/types/global-t-x/unityupdatemanager) | class | `MonoBehaviour` | 10 | [Update modules](../console-and-utilities/update-modules.md#unityupdatemanager): One in the scene; `UnityUpdateManager.Instance`. |
| [`UnlockDockManager`](/game-api/types/global-t-x/unlockdockmanager) | class | `MonoBehaviour` | 0 |  |
| [`UpdateGripEachFrame`](/game-api/types/global-t-x/updategripeachframe) | class | `MonoBehaviour` | 0 |  |
| [`UpdateHandler`](/game-api/types/global-t-x/updatehandler) | delegate |  | 0 | A no-argument callback, used for the IK update events on `CharacterIKController`. |
| [`UpdateModule`](/game-api/types/global-t-x/updatemodule) | class |  | 9 | [Update modules](../console-and-utilities/update-modules.md#updatemodule): Make one with `new UpdateModule(string name, UpdateSegment segment, bool includeInServerProfiling = false)`; it registers itself. |
| [`UpdateModuleInfo`](/game-api/types/global-t-x/updatemoduleinfo) | class |  | 4 | Profiling stats for one update module: average update time and number of registered methods. Read from `UnityUpdateManager.AllModuleInfos` by the server profiling data. |
| [`UpdateSegment`](/game-api/types/global-t-x/updatesegment) | enum | `byte` | 3 | Which Unity loop an `UpdateModule` runs in: `Update`, `LateUpdate` or `FixedUpdate`. |
| [`UpdateStat`](/game-api/types/global-t-x/updatestat) | delegate |  | 0 | Callback with a game action stat, the player it belongs to and the new value. Type of `GameAction.ValueUpdate`. |
| [`UserGreeter`](/game-api/types/global-t-x/usergreeter) | class | `LoggedInTool` | 0 |  |
| [`UserInfoAccess`](/game-api/types/global-t-x/userinfoaccess) | class |  | 8 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`UserInfoAccessConverter`](/game-api/types/global-t-x/userinfoaccessconverter) | class | `TypeConverter` | 2 |  |
| [`UserInfoAndRole`](/game-api/types/global-t-x/userinfoandrole) | class |  | 8 | [Player](../networking/player.md#userinfoandrole): `UserInfoAndRole` (no namespace) is what `Player.UserInfo` and `Connection.UserInfo` hold. |
| [`UserList`](/game-api/types/global-t-x/userlist) | class | `IEnumerable<UserInfoAccess>`, `IEnumerable` | 4 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`UserListConverter`](/game-api/types/global-t-x/userlistconverter) | class | `TypeConverter` | 2 |  |
| [`UvRaycaster`](/game-api/types/global-t-x/uvraycaster) | class | `MonoBehaviour` | 3 | Finds the UV coordinate on a mesh along a ray by rendering one pixel with a special shader from a hidden camera. Client side; `PaintBrush` uses it to paint on character cosmetics. |

## V

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ValueMember`](/game-api/types/global-t-x/valuemember) | class | `InspectorBase` | 9 | Inspector entry for one field or property marked with `BubbleInspectorFieldAttribute`, shown in an `InteractableInspector` bubble. |
| [`ValueOperatedParticleSystem`](/game-api/types/global-t-x/valueoperatedparticlesystem) | class | `MonoBehaviour` | 1 | Drives a particle system's playback speed or emission rates from one 0 to 1 value through curves. Client only; does nothing on a headless server. |
| [`VarianceComponentExtensions`](/game-api/types/global-t-x/variancecomponentextensions) | static class |  | 2 |  |
| [`VelocityJoint`](/game-api/types/global-t-x/velocityjoint) | class | `MonoBehaviour` | 11 |  |
| [`VelocityPickupSettings`](/game-api/types/global-t-x/velocitypickupsettings) | class | `PickupTypeSetting` | 13 | Pickup type settings for items held with a velocity joint: how strongly the item follows the hand and the joint drive values. |
| [`VelocityPickupSettings.Create`](/game-api/types/global-t-x/velocitypickupsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<VelocityPickupSettings>` | 0 |  |
| [`VerticalFlyingController`](/game-api/types/global-t-x/verticalflyingcontroller) | class | `NetworkEntityBehaviour` | 1 |  |
| [`ViewCone`](/game-api/types/global-t-x/viewcone) | class | `MonoBehaviour` | 2 | A cone along the object's forward axis, used by AI to check whether a point is in view. |
| [`VirtualInputField`](/game-api/types/global-t-x/virtualinputfield) | class | `VirtualInputFieldBase`, `IUseVirtualKeyboard` | 9 | Client UI: a text field typed into with the in-game virtual keyboard, with a caret, a character limit, optional hidden (secret) text and links to the previous and next fields. |
| [`VirtualInputFieldBase`](/game-api/types/global-t-x/virtualinputfieldbase) | abstract class | `MonoBehaviour` | 4 | Base for in-world text fields typed into with the virtual keyboard. Shows placeholder text when empty and can mask secret input. |
| [`VirtualKey`](/game-api/types/global-t-x/virtualkey) | class | `MonoBehaviour` | 2 | One key on a `VirtualKeyboard`: shows its character (or shifted one) on a text renderer and sends its key code when pressed. |
| [`VirtualKeyboard`](/game-api/types/global-t-x/virtualkeyboard) | class | `MonoBehaviour` | 10 | In-world VR keyboard that builds keys from a `VirtualKeyboardSetup`, optionally bent around an axis, and keeps the typed text. Client side. |
| [`VirtualKeyboardSetup`](/game-api/types/global-t-x/virtualkeyboardsetup) | class | `ScriptableObject` | 2 | Layout asset for the in-game virtual keyboard: its keys and whether each row is ordered. |
| [`VirtualKeyboardSetup.Virtual_Keyboard_Setup`](/game-api/types/global-t-x/virtualkeyboardsetup-virtual_keyboard_setup) | class | `AltaMenuItemBase.Assets.Create.ScriptableObject<VirtualKeyboardSetup>` | 0 |  |
| [`VirtualKeyInfo`](/game-api/types/global-t-x/virtualkeyinfo) | class |  | 7 | Layout data for one key of the in-game touch screen keyboard: where it sits, which row, and which key it types with and without shift. |
| [`VirtualRealityDeviceLifecycle`](/game-api/types/global-t-x/virtualrealitydevicelifecycle) | abstract class | `DeviceLifecycle` | 3 |  |
| [`VisibilityDetector`](/game-api/types/global-t-x/visibilitydetector) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 3 | Raises events when the renderer on the same object becomes visible to or hidden from any camera. Client side; the build bake fails if there is no renderer. |
| [`VisibilityTimer`](/game-api/types/global-t-x/visibilitytimer) | class | `MonoBehaviour` | 0 |  |
| [`VisibleNetworkRigidbody`](/game-api/types/global-t-x/visiblenetworkrigidbody) | class | `ComponentGroup<NetworkRigidbody>`, `IUpdateOnMove` | 0 |  |
| [`VisualChunkQuickAccessMenuAction`](/game-api/types/global-t-x/visualchunkquickaccessmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`VisualEffectsUtilities`](/game-api/types/global-t-x/visualeffectsutilities) | static class |  | 2 |  |
| [`VisualRotationMimic`](/game-api/types/global-t-x/visualrotationmimic) | class | `MonoBehaviour` | 0 |  |
| [`VolumeTrigger`](/game-api/types/global-t-x/volumetrigger) | abstract class | `MonoBehaviour` | 4 | Base for a trigger volume that tracks what is inside it: rigidbodies, players, pickups and effect handlers, each reported once on first enter and last leave. Subclasses turn on the kinds they need. |
| [`VrMainMenu`](/game-api/types/global-t-x/vrmainmenu) | class | `SingletonBehaviour<VrMainMenu>` | 4 |  |
| [`VRPlayerController`](/game-api/types/global-t-x/vrplayercontroller) | abstract class | `PlayerController` | 1 |  |

## W

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`WalkerStepping`](/game-api/types/global-t-x/walkerstepping) | class | `MonoBehaviour` | 2 |  |
| [`WallCollisionHelper`](/game-api/types/global-t-x/wallcollisionhelper) | static class |  | 1 |  |
| [`WallHookFilter`](/game-api/types/global-t-x/wallhookfilter) | class | `MonoBehaviour` | 0 |  |
| [`WayPointPath`](/game-api/types/global-t-x/waypointpath) | class | `NetworkEntityBehaviour`, `IPositionRotationPath`, `ISavable<WayPointPathData>`, +2 more | 6 |  |
| [`WayPointPathData`](/game-api/types/global-t-x/waypointpathdata) | class | `NewSaveData<WayPointPath, WayPointPathData>` | 2 |  |
| [`WebInterface`](/game-api/types/global-t-x/webinterface) | class |  | 2 |  |
| [`WebRequestHandler`](/game-api/types/global-t-x/webrequesthandler) | delegate |  | 0 |  |
| [`WheelGrab`](/game-api/types/global-t-x/wheelgrab) | class | `MonoBehaviour`, `ISavable<WheelGrabSaveData>`, `ISavableSave<WheelGrabSaveData>`, +1 more | 3 | [Items, interaction and damage](../items/overview.md) |
| [`WheelGrabSaveData`](/game-api/types/global-t-x/wheelgrabsavedata) | internal class | `NewSaveData<WheelGrab, WheelGrabSaveData>` | 3 |  |
| [`WindowsServerConsole`](/game-api/types/global-t-x/windowsserverconsole) | class | `ServerConsole` | 3 | [Remote console](../console-and-utilities/remote-console.md) |
| [`WindPattern`](/game-api/types/global-t-x/windpattern) | class | `ScriptableObject` | 3 | A ScriptableObject holding one wind speed and strength pair, used by the grass and local wind managers. |
| [`WindPattern.CreateInstance`](/game-api/types/global-t-x/windpattern-createinstance) | class | `AltaMenuItemBase.Assets.Create.Township.Environmental.ScriptableObject<WindPattern>` | 0 |  |
| [`WipeManager`](/game-api/types/global-t-x/wipemanager) | class | `SingletonBehaviour<WipeManager>`, `ISavable<WipeManagerData>`, `ISavableSave<WipeManagerData>`, +1 more | 2 |  |
| [`WipeManagerData`](/game-api/types/global-t-x/wipemanagerdata) | class | `NewSaveData<WipeManager, WipeManagerData>` | 1 |  |
| [`WoodcutPointCollection`](/game-api/types/global-t-x/woodcutpointcollection) | class | `ChildSyncableCollection<WoodcutPointData, WoodcutPointCollection, WoodcutPointCollectionSaveData, WoodcutPointCollectionSaveData.Element>` | 1 | The synced list of woodcut points on a tree model (`WoodcutTreeModel`). Points can be generated in the editor from a skinned mesh's bones. |
| [`WoodcutPointCollectionSaveData`](/game-api/types/global-t-x/woodcutpointcollectionsavedata) | class | `ChildSyncableCollectionSaveData<WoodcutPointCollectionSaveData, WoodcutPointCollection, WoodcutPointCollectionSaveData.Element>` | 0 |  |
| [`WoodcutPointCollectionSaveData.Element`](/game-api/types/global-t-x/woodcutpointcollectionsavedata-element) | class |  | 1 |  |
| [`WoodcutPointData`](/game-api/types/global-t-x/woodcutpointdata) | class | `IColorModelPoint<WoodcutPointData>`, `IChildSyncable<WoodcutPointData, WoodcutPointCollectionSaveData.Element>`, `IChildSyncable<WoodcutPointData>` | 12 | One damage point on a woodcut tree: a local position and how far it has been chopped (0 to 1). Synced as a child of the tree, saved with it, and drives the tree's damage colouring. |
| [`WoodcutPooledObject`](/game-api/types/global-t-x/woodcutpooledobject) | class | `DestroyByTime` | 1 |  |
| [`WoodcutPreparer`](/game-api/types/global-t-x/woodcutpreparer) | class | `MonoBehaviour` | 1 |  |
| [`WorldLerpAngle`](/game-api/types/global-t-x/worldlerpangle) | class | `MonoBehaviour` | 0 |  |
| [`WorldSpaceTriangle`](/game-api/types/global-t-x/worldspacetriangle) | struct |  | 7 | Three world positions copied from a `HandTriangle`'s transforms, that can be moved or transformed as one. |
| [`WrapBone`](/game-api/types/global-t-x/wrapbone) | class | `MonoBehaviour` | 1 |  |
| [`WwiseExtensions`](/game-api/types/global-t-x/wwiseextensions) | static class |  | 1 |  |

## X

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`XrDeviceSdkController`](/game-api/types/global-t-x/xrdevicesdkcontroller) | abstract class | `IXrDeviceSdkController` | 11 | Base for a device SDK controller (one per player mode): starts the SDK, makes the device lifecycle and creates input controllers for each hand. Client side. |
| [`XsollaEvent`](/game-api/types/global-t-x/xsollaevent) | enum |  | 3 | Obsolete analytics event names (signup, login, logout). Marked to use the new analytics system instead. |
| [`XXHash`](/game-api/types/global-t-x/xxhash) | class | `HashFunction` | 5 |  |
