---
title: "SmoothLocomotion"
description: "Thumbstick movement for a VR player: moves a character controller with gravity, slopes and fall damage, tracks a last safe position and puts the player back..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmoothLocomotion

A **class** in `Root.Township`, no namespace.

Thumbstick movement for a VR player: moves a character controller with gravity, slopes and fall damage, tracks a last safe position and puts the player back there after a bad fall. Runs on the local player's client; the result goes through `LocomotionController`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `HasMethodApply`
- **Documented in** [Locomotion](/game-api/networking/locomotion#smoothlocomotion)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SmoothLocomotion()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> | Current physics velocity (gravity and momentum) applied on top of input. |

<details>
<summary>37 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | The controller's own transform, unparented from the character at start. |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" character"}</code> | The player controller this locomotion moves. |
| <Link id="m-charactercontroller" /><code>{"private CharacterController characterController"}</code> | Unity `CharacterController` used for collision and movement. |
| <Link id="m-charactertransform" /><code>{"private Transform characterTransform"}</code> | Transform of the player character, used to measure movement each frame. |
| <Link id="m-clampedspeedsquared" /><code>{"private float clampedSpeedSquared"}</code> | Square of the settings' maximum speed, used to clamp stick movement. |
| <Link id="m-currentbuildupspeed" /><code>{"private Vector2 currentBuildupSpeed"}</code> | Current smoothed horizontal speed that accelerates and decelerates toward the stick input. |
| <Link id="m-currentcollisionflags" /><code>{"private CollisionFlags currentCollisionFlags"}</code> | Collision flags from the last move; `IsGrounded` reads the Below flag. |
| <Link id="m-fallfromheight" /><code>{"private float fallFromHeight"}</code> | Highest point since last grounded, used to work out fall damage. |
| <Link id="m-fallingcontrol" /><code>{"private float fallingControl"}</code> | How much stick control is left while falling, from the settings curve over fall time. |
| <Link id="m-firstforward" /><code>{"private Vector3 firstForward"}</code> | Forward direction locked when movement starts, for the locked head and locked controller direction modes. |
| <Link id="m-fullnessstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" fullnessStat"}</code> | The player's Fullness stat, used to decide if they can run. |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat"}</code> | The player's Hunger stat, used to decide if they can run. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | False until the current chunk has fully loaded; movement and falling wait for it. |
| <Link id="m-isoverridingmovement" /><code>{"private Func<bool> IsOverridingMovement"}</code> | Combined delegate from modifiers; true stops the grounded velocity reset. |
| <Link id="m-isrecovering" /><code>{"private bool isRecovering"}</code> | True during the fade after a safety recovery; stick input is ignored. |
| <Link id="m-lasthungrysound" /><code>{"private float lastHungrySound"}</code> | Time the too-hungry-to-run sound last played, for its cooldown. |
| <Link id="m-lastlocalposition" /><code>{"private Vector3 lastLocalPosition"}</code> | Unused in this build. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | Unused in this build. |
| <Link id="m-lockrun" /><code>{"private bool lockRun"}</code> | True while toggle-run mode has run locked on. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-minheightfordamage" /><code>{"private float minHeightForDamage"}</code> | Shortest drop that can deal fall damage, from the first key of the fall-damage curve. |
| <Link id="m-movementoverride" /><code>{"private Func<bool> MovementOverride"}</code> | Combined delegate from modifiers; true makes this frame skip normal stick movement and gravity. |
| <Link id="m-nextsafetycheck" /><code>{"private float nextSafetyCheck"}</code> | Time of the next allowed `LastSafePosition` update. |
| <Link id="m-personalspacelayer" /><code>{"private int personalSpaceLayer"}</code> | Layer mask for PlayerPersonalSpace; movement into it is blocked. |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> | Injected player controller lock model. |
| <Link id="m-recovercoroutine" /><code>{"private Coroutine recoverCoroutine"}</code> | The running `RecoverFromSafetyReposition` coroutine, if any. |
| <Link id="m-runninglevel" /><code>{"private int runningLevel"}</code> | 1 for walking, 2 for running, 0 with no input. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-s/smoothlocomotionsettings">{"SmoothLocomotionSettings"}</Link>{" settings"}</code> | The global `SmoothLocomotionSettings` (speeds, curves, masks, fall damage). |
| <Link id="m-slipvalue" /><code>{"private float slipValue"}</code> | Current slope slip, building from 0 to 1 while on a too-steep surface. |
| <Link id="m-syncfalldistance" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncFallDistance"}</code> | Method sync that sends fall distance to the server. |
| <Link id="m-timefalling" /><code>{"private float timeFalling"}</code> | Seconds spent falling, used for falling control and disabling teleport mid-fall. |
| <Link id="m-unownedheightcheck" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" unownedHeightCheck"}</code> | Update module for unowned height checks; not used by this class in this build. |
| <Link id="m-updateinput" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateInput"}</code> | Registration of `UpdateInput` on the update module; null until linked to the local player. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared update module that runs every instance's `UpdateInput`. |
| <Link id="m-wasapplyinginput" /><code>{"private bool wasApplyingInput"}</code> | Whether stick input was applied last frame. |
| <Link id="m-wasreleased" /><code>{"private bool wasReleased"}</code> | Whether the run button has been released since last pressed, for toggle run. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activehand" /><code><Link to="/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" ActiveHand { get; private set; }"}</code> | Hand used for smooth movement, from the player's settings. |
| <Link id="m-bodycenter" /><code>{"Vector3 BodyCenter { get; }"}</code> | Centre of the character controller in world space. |
| <Link id="m-character-2" /><code><Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" Character { get; }"}</code> | The player controller this belongs to. |
| <Link id="m-charactercontroller-2" /><code>{"CharacterController CharacterController { get; }"}</code> | The Unity character controller used for collision. |
| <Link id="m-currentmovingvelocity" /><code>{"Vector3 CurrentMovingVelocity { get; private set; }"}</code> | Velocity from stick input this frame. |
| <Link id="m-hands" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{"> Hands { get; }"}</code> | The right then left hand handlers. |
| <Link id="m-isdebugmovement" /><code>{"bool IsDebugMovement { get; private set; }"}</code> | True in debug movement mode (no gravity). |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether smooth movement is on. Setting it calls `SetEnableController`. |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; }"}</code> | True if the last move touched something below. |
| <Link id="m-issafe" /><code>{"bool IsSafe { get; set; }"}</code> | Whether the current spot may be saved as a safe position. |
| <Link id="m-lastsafeposition" /><code>{"Vector3 LastSafePosition { get; set; }"}</code> | Last spot judged safe to stand on. Checked every 5 seconds and sent to the server. |
| <Link id="m-lefthand" /><code><Link to="/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" LeftHand { get; private set; }"}</code> | Left hand handler. |
| <Link id="m-otherhand" /><code><Link to="/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" OtherHand { get; private set; }"}</code> | The hand not used for smooth movement. |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | Position of the locomotion object. |
| <Link id="m-righthand" /><code><Link to="/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" RightHand { get; private set; }"}</code> | Right hand handler. |

## Events

<details>
<summary>5 private and internal events</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getfrictionmultiplier" /><code>{"private event "}<Link to="/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetFrictionMultiplier"}</code> | Event the modifiers add to, to change friction applied to `velocity`. |
| <Link id="m-getheight" /><code>{"private event "}<Link to="/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetHeight"}</code> | Event the modifiers add to, to change the character controller height. |
| <Link id="m-getteleportationblock" /><code>{"private event "}<Link to="/game-api/types/alta-utilities/generaldelegates-boolupdater">{"GeneralDelegates.BoolUpdater"}</Link>{" GetTeleportationBlock"}</code> | Event from movement-overriding modifiers that can block teleporting. |
| <Link id="m-getupwardgrip" /><code>{"private event "}<Link to="/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetUpwardGrip"}</code> | Event the modifiers add to; a value of 1 cancels gravity (used for climbing and similar). |
| <Link id="m-onfixedupdate" /><code>{"private event Action OnFixedUpdate"}</code> | Event of modifier `LocomotionUpdate` calls, run every physics step. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applymovement" /><code>{"void ApplyMovement(Vector3 velocityXYZ, bool isApplyingGravity)"}</code> | Moves the character controller, with gravity and friction when allowed. Debug mode moves without either. |
| <Link id="m-forcesetisloaded" /><code>{"void ForceSetIsLoaded()"}</code> | Marks the chunk as loaded so movement can start. |
| <Link id="m-getdefaultheight" /><code>{"float GetDefaultHeight(out float headHeight)"}</code> | Controller height from the head height and settings; also returns the head height. |
| <Link id="m-initializemodifier" /><code>{"void InitializeModifier("}<Link to="/game-api/types/global-i-l/ismoothlocomotionmodifier">{"ISmoothLocomotionModifier"}</Link>{" modifier)"}</code> | Adds a modifier (such as climbing) that changes friction, height, upward grip or overrides movement. |
| <Link id="m-movetosafety" /><code>{"void MoveToSafety()"}</code> | Moves the player back to the last safe position (nudged away from edges), or to the respawn point if that is no longer safe. |
| <Link id="m-removemodifier" /><code>{"void RemoveModifier("}<Link to="/game-api/types/global-i-l/ismoothlocomotionmodifier">{"ISmoothLocomotionModifier"}</Link>{" modifier)"}</code> | Removes a modifier's hooks. For a modifier that overrides movement it destroys this object instead. |
| <Link id="m-repositioncharacter" /><code>{"void RepositionCharacter()"}</code> | Moves the player rig so its feet match the character controller, optionally with a head offset or a horizontal limit. |
| <Link id="m-repositioncharacter-2" /><code>{"void RepositionCharacter(Vector3 headOffset)"}</code> | Moves the player rig so its feet match the character controller, optionally with a head offset or a horizontal limit. |
| <Link id="m-repositioncharacter-3" /><code>{"void RepositionCharacter(float xzLimit)"}</code> | Moves the player rig so its feet match the character controller, optionally with a head offset or a horizontal limit. |
| <Link id="m-setenablecontroller" /><code>{"void SetEnableController(bool isEnabled)"}</code> | Turns smooth movement on or off (never in flat modes). Swaps the active hand between teleport or turning and smooth movement. |
| <Link id="m-toggledebug" /><code>{"void ToggleDebug()"}</code> | Toggles debug movement. |
| <Link id="m-treatasgrounded" /><code>{"void TreatAsGrounded()"}</code> | Resets the fall start height to now, so no fall damage is counted from earlier. |
| <Link id="m-waitforchunkfinishload" /><code>{"void WaitForChunkFinishLoad("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Holds movement until the given chunk is fully loaded. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel)"}</code> | Dependency injection hook for the player controller lock model. |

<details>
<summary>32 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applygravityandmovement" /><code>{"private void ApplyGravityAndMovement(Vector3 velocityXYZ)"}</code> | Adds the stored `velocity` to a move, applies modifier friction and gravity (reduced by upward grip), and moves the controller. |
| <Link id="m-assignsmoothlocohand" /><code>{"private void AssignSmoothLocoHand()"}</code> | Sets `ActiveHand` and `OtherHand` from the player's smooth locomotion hand setting. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks entity destruction, local player linking and the locomotion controller's `PositionChanged` event. |
| <Link id="m-canteleportwithsamehand" /><code>{"private bool CanTeleportWithSameHand()"}</code> | True on Meta Quest, or when the active controller has no swipe input, so the stick hand can also teleport. |
| <Link id="m-checkforinfinitefall" /><code>{"private void CheckForInfiniteFall(Vector3 position, float height)"}</code> | Raycasts down from the player; if no standable ground is found within the settings distance, calls `MoveToSafety`. |
| <Link id="m-checkinput" /><code>{"private Vector3 CheckInput(ref int runningLevel, ref Vector3 firstForward, ref bool isApplyingInput)"}</code> | Reads the active hand's stick, works out walk or run (with toggle, hunger and speed modifiers) and returns this frame's horizontal move. |
| <Link id="m-checkposition" /><code>{"private bool CheckPosition(Vector3 position, RaycastHit hit)"}</code> | Raycasts 0.3m down against the safety mask. Used by `IsSafePosition`. |
| <Link id="m-checksetenabled" /><code>{"private void CheckSetEnabled()"}</code> | Runs once when linked to the local player: creates the fall-damage sync, hand handlers, hunger stats and the input update. |
| <Link id="m-deaddisable" /><code>{"private void DeadDisable("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> | Turns smooth locomotion off when the player is killed. |
| <Link id="m-dealfalldamage" /><code>{"private void DealFallDamage(float dropHeight)"}</code> | Applies fall damage and cripple damage from the settings curves for a given drop height. |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" characterEntity, bool isUnload)"}</code> | Destroys this object when the character's entity is destroyed by the scene. |
| <Link id="m-fadebackafterrecover" /><code>{"private IEnumerator FadeBackAfterRecover() (iterator)"}</code> | Coroutine that waits, then fades the screen back in after a safety recovery. |
| <Link id="m-finishloading" /><code>{"private void FinishLoading("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Chunk `FullyLoaded` handler that sets `isLoaded` so movement can start. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Invokes the registered modifiers' `LocomotionUpdate` once input updates are running. |
| <Link id="m-generalsetup" /><code>{"private bool GeneralSetup()"}</code> | Editor setup: caches the global settings, squared clamp speed, minimum fall-damage height and character transform. |
| <Link id="m-handleteleport" /><code>{"private void HandleTeleport("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | On any non-smooth reposition, snaps the controller to the player's feet and resets fall height; on `Recovery` it starts the fade-out recovery. |
| <Link id="m-increaseslip" /><code>{"private void IncreaseSlip(Vector3 normal, ref Vector3 gravityAndSlide)"}</code> | Builds up slip on a steep slope and returns a sideways slide vector along the slope normal. |
| <Link id="m-isclosetoground" /><code>{"private bool IsCloseToGround(Vector3 position, out Vector3 gravityAndSlide)"}</code> | Checks for standable ground just below, handles slope sliding and records `LastSafePosition` every 5 seconds on safe ground. |
| <Link id="m-ishitnormalsafe" /><code>{"private bool IsHitNormalSafe(Vector3 normal)"}</code> | True when a surface normal is flat enough to stand on (y above 0.2). |
| <Link id="m-issafeposition" /><code>{"private bool IsSafePosition(Vector3 position)"}</code> | Checks four points around a spot all have safety-mask ground under them. |
| <Link id="m-move" /><code>{"private void Move(Vector3 movement)"}</code> | Moves the character controller and trims `velocity` to match what the controller actually managed after collisions. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the input update and the settings-changed handler. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor gizmos for the last safe position, the ground check sphere and modifiers. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Refreshes the settings and minimum fall-damage height in play mode. |
| <Link id="m-recoverfromsafetyreposition" /><code>{"private IEnumerator RecoverFromSafetyReposition() (iterator)"}</code> | Coroutine that blacks out the screen and blocks input for the recovery duration after `MoveToSafety`. |
| <Link id="m-setuplayer" /><code>{"private bool SetupLayer()"}</code> | Editor setup that caches the PlayerPersonalSpace layer mask. |
| <Link id="m-shouldapplygravityandmovement" /><code>{"private bool ShouldApplyGravityAndMovement(bool isApplyingGravity)"}</code> | True when gravity is wanted and the character is alive and not downed. |
| <Link id="m-shouldignoreinput" /><code>{"private bool ShouldIgnoreInput()"}</code> | True when the player is dead, downed, blocked from locomoting, interrupted by an interaction, or the headset isn't tracking. |
| <Link id="m-syncfalldistance-2" /><code>{"private void SyncFallDistance("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float distance)"}</code> | Fall-distance message: the client sends the drop height and the server applies fall damage if it came from this player. |
| <Link id="m-tryapplyfalldamage" /><code>{"private void TryApplyFallDamage(Vector3 position)"}</code> | On landing, works out the drop and deals damage (server) or sends it to the server (client), plus landing effects. |
| <Link id="m-updateinput-2" /><code>{"private void UpdateInput()"}</code> | Main per-frame movement for the local player: height, stick input, teleport enabling, gravity, falling and fall damage. |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings(Settings obj)"}</code> | Re-applies the smooth locomotion on/off setting when game settings change. |

</details>

## Used in

Members of other types that take, return or hold a `SmoothLocomotion`:

[`Climber.DrawGizmos`](/game-api/types/global-c-d/climber#m-drawgizmos), [`ClimbingHandler.ClimbingHandler`](/game-api/types/game-other-namespaces/climbinghandler#m-ctor), [`ClimbingHandler.SmoothLocomotion`](/game-api/types/game-other-namespaces/climbinghandler#m-smoothlocomotion), [`SmoothLocomotionModifier.DrawGizmos`](/game-api/types/global-s/smoothlocomotionmodifier#m-drawgizmos), [`SmoothLocomotionModifier.locomotion`](/game-api/types/global-s/smoothlocomotionmodifier#m-locomotion), [`SmoothLocomotionPlayerController.smoothLocomotion`](/game-api/types/global-s/smoothlocomotionplayercontroller#m-smoothlocomotion), [`SmoothLocomotionPlayerController.SmoothLocomotion`](/game-api/types/global-s/smoothlocomotionplayercontroller#m-smoothlocomotion-2).
