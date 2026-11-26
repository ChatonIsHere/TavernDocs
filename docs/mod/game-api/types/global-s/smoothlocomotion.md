---
title: "SmoothLocomotion"
description: "Thumbstick movement for a VR player: moves a character controller with gravity, slopes and fall damage, tracks a last safe position and puts the player back..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmoothLocomotion

A **class** in `Root.Township`, the global namespace.

Thumbstick movement for a VR player: moves a character controller with gravity, slopes and fall damage, tracks a last safe position and puts the player back there after a bad fall. Runs on the local player's client; the result goes through `LocomotionController`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `HasMethodApply`
- **Documented in** [Locomotion](/mod/game-api/networking/locomotion#smoothlocomotion)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmoothLocomotion()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> | <span className="api-desc">Current physics velocity (gravity and momentum) applied on top of input.</span> |

<details className="api-private">
<summary>37 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">The controller's own transform, unparented from the character at start.</span> |
| <Link id="m-character" /><code>{"private "}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" character"}</code> | <span className="api-desc">The player controller this locomotion moves.</span> |
| <Link id="m-charactercontroller" /><code>{"private CharacterController characterController"}</code> | <span className="api-desc">Unity `CharacterController` used for collision and movement.</span> |
| <Link id="m-charactertransform" /><code>{"private Transform characterTransform"}</code> | <span className="api-desc">Transform of the player character, used to measure movement each frame.</span> |
| <Link id="m-clampedspeedsquared" /><code>{"private float clampedSpeedSquared"}</code> | <span className="api-desc">Square of the settings' maximum speed, used to clamp stick movement.</span> |
| <Link id="m-currentbuildupspeed" /><code>{"private Vector2 currentBuildupSpeed"}</code> | <span className="api-desc">Current smoothed horizontal speed that accelerates and decelerates toward the stick input.</span> |
| <Link id="m-currentcollisionflags" /><code>{"private CollisionFlags currentCollisionFlags"}</code> | <span className="api-desc">Collision flags from the last move; `IsGrounded` reads the Below flag.</span> |
| <Link id="m-fallfromheight" /><code>{"private float fallFromHeight"}</code> | <span className="api-desc">Highest point since last grounded, used to work out fall damage.</span> |
| <Link id="m-fallingcontrol" /><code>{"private float fallingControl"}</code> | <span className="api-desc">How much stick control is left while falling, from the settings curve over fall time.</span> |
| <Link id="m-firstforward" /><code>{"private Vector3 firstForward"}</code> | <span className="api-desc">Forward direction locked when movement starts, for the locked head and locked controller direction modes.</span> |
| <Link id="m-fullnessstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" fullnessStat"}</code> | <span className="api-desc">The player's Fullness stat, used to decide if they can run.</span> |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat"}</code> | <span className="api-desc">The player's Hunger stat, used to decide if they can run.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | <span className="api-desc">False until the current chunk has fully loaded; movement and falling wait for it.</span> |
| <Link id="m-isoverridingmovement" /><code>{"private Func<bool> IsOverridingMovement"}</code> | <span className="api-desc">Combined delegate from modifiers; true stops the grounded velocity reset.</span> |
| <Link id="m-isrecovering" /><code>{"private bool isRecovering"}</code> | <span className="api-desc">True during the fade after a safety recovery; stick input is ignored.</span> |
| <Link id="m-lasthungrysound" /><code>{"private float lastHungrySound"}</code> | <span className="api-desc">Time the too-hungry-to-run sound last played, for its cooldown.</span> |
| <Link id="m-lastlocalposition" /><code>{"private Vector3 lastLocalPosition"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-lockrun" /><code>{"private bool lockRun"}</code> | <span className="api-desc">True while toggle-run mode has run locked on.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-minheightfordamage" /><code>{"private float minHeightForDamage"}</code> | <span className="api-desc">Shortest drop that can deal fall damage, from the first key of the fall-damage curve.</span> |
| <Link id="m-movementoverride" /><code>{"private Func<bool> MovementOverride"}</code> | <span className="api-desc">Combined delegate from modifiers; true makes this frame skip normal stick movement and gravity.</span> |
| <Link id="m-nextsafetycheck" /><code>{"private float nextSafetyCheck"}</code> | <span className="api-desc">Time of the next allowed `LastSafePosition` update.</span> |
| <Link id="m-personalspacelayer" /><code>{"private int personalSpaceLayer"}</code> | <span className="api-desc">Layer mask for PlayerPersonalSpace; movement into it is blocked.</span> |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> | <span className="api-desc">Injected player controller lock model.</span> |
| <Link id="m-recovercoroutine" /><code>{"private Coroutine recoverCoroutine"}</code> | <span className="api-desc">The running `RecoverFromSafetyReposition` coroutine, if any.</span> |
| <Link id="m-runninglevel" /><code>{"private int runningLevel"}</code> | <span className="api-desc">1 for walking, 2 for running, 0 with no input.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/global-s/smoothlocomotionsettings">{"SmoothLocomotionSettings"}</Link>{" settings"}</code> | <span className="api-desc">The global `SmoothLocomotionSettings` (speeds, curves, masks, fall damage).</span> |
| <Link id="m-slipvalue" /><code>{"private float slipValue"}</code> | <span className="api-desc">Current slope slip, building from 0 to 1 while on a too-steep surface.</span> |
| <Link id="m-syncfalldistance" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncFallDistance"}</code> | <span className="api-desc">Method sync that sends fall distance to the server.</span> |
| <Link id="m-timefalling" /><code>{"private float timeFalling"}</code> | <span className="api-desc">Seconds spent falling, used for falling control and disabling teleport mid-fall.</span> |
| <Link id="m-unownedheightcheck" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" unownedHeightCheck"}</code> | <span className="api-desc">Update module for unowned height checks; not used by this class in this build.</span> |
| <Link id="m-updateinput" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateInput"}</code> | <span className="api-desc">Registration of `UpdateInput` on the update module; null until linked to the local player.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared update module that runs every instance's `UpdateInput`.</span> |
| <Link id="m-wasapplyinginput" /><code>{"private bool wasApplyingInput"}</code> | <span className="api-desc">Whether stick input was applied last frame.</span> |
| <Link id="m-wasreleased" /><code>{"private bool wasReleased"}</code> | <span className="api-desc">Whether the run button has been released since last pressed, for toggle run.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activehand" /><code><Link to="/mod/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" ActiveHand { get; private set; }"}</code> | <span className="api-desc">Hand used for smooth movement, from the player's settings.</span> |
| <Link id="m-bodycenter" /><code>{"Vector3 BodyCenter { get; }"}</code> | <span className="api-desc">Centre of the character controller in world space.</span> |
| <Link id="m-character-2" /><code><Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" Character { get; }"}</code> | <span className="api-desc">The player controller this belongs to.</span> |
| <Link id="m-charactercontroller-2" /><code>{"CharacterController CharacterController { get; }"}</code> | <span className="api-desc">The Unity character controller used for collision.</span> |
| <Link id="m-currentmovingvelocity" /><code>{"Vector3 CurrentMovingVelocity { get; private set; }"}</code> | <span className="api-desc">Velocity from stick input this frame.</span> |
| <Link id="m-hands" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{"> Hands { get; }"}</code> | <span className="api-desc">The right then left hand handlers.</span> |
| <Link id="m-isdebugmovement" /><code>{"bool IsDebugMovement { get; private set; }"}</code> | <span className="api-desc">True in debug movement mode (no gravity).</span> |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether smooth movement is on. Setting it calls `SetEnableController`.</span> |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; }"}</code> | <span className="api-desc">True if the last move touched something below.</span> |
| <Link id="m-issafe" /><code>{"bool IsSafe { get; set; }"}</code> | <span className="api-desc">Whether the current spot may be saved as a safe position.</span> |
| <Link id="m-lastsafeposition" /><code>{"Vector3 LastSafePosition { get; set; }"}</code> | <span className="api-desc">Last spot judged safe to stand on. Checked every 5 seconds and sent to the server.</span> |
| <Link id="m-lefthand" /><code><Link to="/mod/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" LeftHand { get; private set; }"}</code> | <span className="api-desc">Left hand handler.</span> |
| <Link id="m-otherhand" /><code><Link to="/mod/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" OtherHand { get; private set; }"}</code> | <span className="api-desc">The hand not used for smooth movement.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Position of the locomotion object.</span> |
| <Link id="m-righthand" /><code><Link to="/mod/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" RightHand { get; private set; }"}</code> | <span className="api-desc">Right hand handler.</span> |

## Events

<details className="api-private">
<summary>5 private and internal events</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getfrictionmultiplier" /><code>{"private event "}<Link to="/mod/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetFrictionMultiplier"}</code> | <span className="api-desc">Event the modifiers add to, to change friction applied to `velocity`.</span> |
| <Link id="m-getheight" /><code>{"private event "}<Link to="/mod/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetHeight"}</code> | <span className="api-desc">Event the modifiers add to, to change the character controller height.</span> |
| <Link id="m-getteleportationblock" /><code>{"private event "}<Link to="/mod/game-api/types/alta-utilities/generaldelegates-boolupdater">{"GeneralDelegates.BoolUpdater"}</Link>{" GetTeleportationBlock"}</code> | <span className="api-desc">Event from movement-overriding modifiers that can block teleporting.</span> |
| <Link id="m-getupwardgrip" /><code>{"private event "}<Link to="/mod/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetUpwardGrip"}</code> | <span className="api-desc">Event the modifiers add to; a value of 1 cancels gravity (used for climbing and similar).</span> |
| <Link id="m-onfixedupdate" /><code>{"private event Action OnFixedUpdate"}</code> | <span className="api-desc">Event of modifier `LocomotionUpdate` calls, run every physics step.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applymovement" /><code>{"void ApplyMovement(Vector3 velocityXYZ, bool isApplyingGravity)"}</code> | <span className="api-desc">Moves the character controller, with gravity and friction when allowed. Debug mode moves without either.</span> |
| <Link id="m-forcesetisloaded" /><code>{"void ForceSetIsLoaded()"}</code> | <span className="api-desc">Marks the chunk as loaded so movement can start.</span> |
| <Link id="m-getdefaultheight" /><code>{"float GetDefaultHeight(out float headHeight)"}</code> | <span className="api-desc">Controller height from the head height and settings; also returns the head height.</span> |
| <Link id="m-initializemodifier" /><code>{"void InitializeModifier("}<Link to="/mod/game-api/types/global-i-l/ismoothlocomotionmodifier">{"ISmoothLocomotionModifier"}</Link>{" modifier)"}</code> | <span className="api-desc">Adds a modifier (such as climbing) that changes friction, height, upward grip or overrides movement.</span> |
| <Link id="m-movetosafety" /><code>{"void MoveToSafety()"}</code> | <span className="api-desc">Moves the player back to the last safe position (nudged away from edges), or to the respawn point if that is no longer safe.</span> |
| <Link id="m-removemodifier" /><code>{"void RemoveModifier("}<Link to="/mod/game-api/types/global-i-l/ismoothlocomotionmodifier">{"ISmoothLocomotionModifier"}</Link>{" modifier)"}</code> | <span className="api-desc">Removes a modifier's hooks. For a modifier that overrides movement it destroys this object instead.</span> |
| <Link id="m-repositioncharacter" /><code>{"void RepositionCharacter()"}</code> | <span className="api-desc">Moves the player rig so its feet match the character controller, optionally with a head offset or a horizontal limit.</span> |
| <Link id="m-repositioncharacter-2" /><code>{"void RepositionCharacter(Vector3 headOffset)"}</code> | <span className="api-desc">Moves the player rig so its feet match the character controller, optionally with a head offset or a horizontal limit.</span> |
| <Link id="m-repositioncharacter-3" /><code>{"void RepositionCharacter(float xzLimit)"}</code> | <span className="api-desc">Moves the player rig so its feet match the character controller, optionally with a head offset or a horizontal limit.</span> |
| <Link id="m-setenablecontroller" /><code>{"void SetEnableController(bool isEnabled)"}</code> | <span className="api-desc">Turns smooth movement on or off (never in flat modes). Swaps the active hand between teleport or turning and smooth movement.</span> |
| <Link id="m-toggledebug" /><code>{"void ToggleDebug()"}</code> | <span className="api-desc">Toggles debug movement.</span> |
| <Link id="m-treatasgrounded" /><code>{"void TreatAsGrounded()"}</code> | <span className="api-desc">Resets the fall start height to now, so no fall damage is counted from earlier.</span> |
| <Link id="m-waitforchunkfinishload" /><code>{"void WaitForChunkFinishLoad("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Holds movement until the given chunk is fully loaded.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel)"}</code> | <span className="api-desc">Dependency injection hook for the player controller lock model.</span> |

<details className="api-private">
<summary>32 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applygravityandmovement" /><code>{"private void ApplyGravityAndMovement(Vector3 velocityXYZ)"}</code> | <span className="api-desc">Adds the stored `velocity` to a move, applies modifier friction and gravity (reduced by upward grip), and moves the controller.</span> |
| <Link id="m-assignsmoothlocohand" /><code>{"private void AssignSmoothLocoHand()"}</code> | <span className="api-desc">Sets `ActiveHand` and `OtherHand` from the player's smooth locomotion hand setting.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks entity destruction, local player linking and the locomotion controller's `PositionChanged` event.</span> |
| <Link id="m-canteleportwithsamehand" /><code>{"private bool CanTeleportWithSameHand()"}</code> | <span className="api-desc">True on Meta Quest, or when the active controller has no swipe input, so the stick hand can also teleport.</span> |
| <Link id="m-checkforinfinitefall" /><code>{"private void CheckForInfiniteFall(Vector3 position, float height)"}</code> | <span className="api-desc">Raycasts down from the player; if no standable ground is found within the settings distance, calls `MoveToSafety`.</span> |
| <Link id="m-checkinput" /><code>{"private Vector3 CheckInput(ref int runningLevel, ref Vector3 firstForward, ref bool isApplyingInput)"}</code> | <span className="api-desc">Reads the active hand's stick, works out walk or run (with toggle, hunger and speed modifiers) and returns this frame's horizontal move.</span> |
| <Link id="m-checkposition" /><code>{"private bool CheckPosition(Vector3 position, RaycastHit hit)"}</code> | <span className="api-desc">Raycasts 0.3m down against the safety mask. Used by `IsSafePosition`.</span> |
| <Link id="m-checksetenabled" /><code>{"private void CheckSetEnabled()"}</code> | <span className="api-desc">Runs once when linked to the local player: creates the fall-damage sync, hand handlers, hunger stats and the input update.</span> |
| <Link id="m-deaddisable" /><code>{"private void DeadDisable("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> | <span className="api-desc">Turns smooth locomotion off when the player is killed.</span> |
| <Link id="m-dealfalldamage" /><code>{"private void DealFallDamage(float dropHeight)"}</code> | <span className="api-desc">Applies fall damage and cripple damage from the settings curves for a given drop height.</span> |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" characterEntity, bool isUnload)"}</code> | <span className="api-desc">Destroys this object when the character's entity is destroyed by the scene.</span> |
| <Link id="m-fadebackafterrecover" /><code>{"private IEnumerator FadeBackAfterRecover() (iterator)"}</code> | <span className="api-desc">Coroutine that waits, then fades the screen back in after a safety recovery.</span> |
| <Link id="m-finishloading" /><code>{"private void FinishLoading("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Chunk `FullyLoaded` handler that sets `isLoaded` so movement can start.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Invokes the registered modifiers' `LocomotionUpdate` once input updates are running.</span> |
| <Link id="m-generalsetup" /><code>{"private bool GeneralSetup()"}</code> | <span className="api-desc">Editor setup: caches the global settings, squared clamp speed, minimum fall-damage height and character transform.</span> |
| <Link id="m-handleteleport" /><code>{"private void HandleTeleport("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">On any non-smooth reposition, snaps the controller to the player's feet and resets fall height; on `Recovery` it starts the fade-out recovery.</span> |
| <Link id="m-increaseslip" /><code>{"private void IncreaseSlip(Vector3 normal, ref Vector3 gravityAndSlide)"}</code> | <span className="api-desc">Builds up slip on a steep slope and returns a sideways slide vector along the slope normal.</span> |
| <Link id="m-isclosetoground" /><code>{"private bool IsCloseToGround(Vector3 position, out Vector3 gravityAndSlide)"}</code> | <span className="api-desc">Checks for standable ground just below, handles slope sliding and records `LastSafePosition` every 5 seconds on safe ground.</span> |
| <Link id="m-ishitnormalsafe" /><code>{"private bool IsHitNormalSafe(Vector3 normal)"}</code> | <span className="api-desc">True when a surface normal is flat enough to stand on (y above 0.2).</span> |
| <Link id="m-issafeposition" /><code>{"private bool IsSafePosition(Vector3 position)"}</code> | <span className="api-desc">Checks four points around a spot all have safety-mask ground under them.</span> |
| <Link id="m-move" /><code>{"private void Move(Vector3 movement)"}</code> | <span className="api-desc">Moves the character controller and trims `velocity` to match what the controller actually managed after collisions.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the input update and the settings-changed handler.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor gizmos for the last safe position, the ground check sphere and modifiers.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Refreshes the settings and minimum fall-damage height in play mode.</span> |
| <Link id="m-recoverfromsafetyreposition" /><code>{"private IEnumerator RecoverFromSafetyReposition() (iterator)"}</code> | <span className="api-desc">Coroutine that blacks out the screen and blocks input for the recovery duration after `MoveToSafety`.</span> |
| <Link id="m-setuplayer" /><code>{"private bool SetupLayer()"}</code> | <span className="api-desc">Editor setup that caches the PlayerPersonalSpace layer mask.</span> |
| <Link id="m-shouldapplygravityandmovement" /><code>{"private bool ShouldApplyGravityAndMovement(bool isApplyingGravity)"}</code> | <span className="api-desc">True when gravity is wanted and the character is alive and not downed.</span> |
| <Link id="m-shouldignoreinput" /><code>{"private bool ShouldIgnoreInput()"}</code> | <span className="api-desc">True when the player is dead, downed, blocked from locomoting, interrupted by an interaction, or the headset isn't tracking.</span> |
| <Link id="m-syncfalldistance-2" /><code>{"private void SyncFallDistance("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float distance)"}</code> | <span className="api-desc">Fall-distance message: the client sends the drop height and the server applies fall damage if it came from this player.</span> |
| <Link id="m-tryapplyfalldamage" /><code>{"private void TryApplyFallDamage(Vector3 position)"}</code> | <span className="api-desc">On landing, works out the drop and deals damage (server) or sends it to the server (client), plus landing effects.</span> |
| <Link id="m-updateinput-2" /><code>{"private void UpdateInput()"}</code> | <span className="api-desc">Main per-frame movement for the local player: height, stick input, teleport enabling, gravity, falling and fall damage.</span> |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings(Settings obj)"}</code> | <span className="api-desc">Re-applies the smooth locomotion on/off setting when game settings change.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SmoothLocomotion`:

<div className="api-used-in">

[`Climber.DrawGizmos`](/mod/game-api/types/global-c-d/climber#m-drawgizmos), [`ClimbingHandler.ClimbingHandler`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-ctor), [`ClimbingHandler.SmoothLocomotion`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-smoothlocomotion), [`SmoothLocomotionModifier.DrawGizmos`](/mod/game-api/types/global-s/smoothlocomotionmodifier#m-drawgizmos), [`SmoothLocomotionModifier.locomotion`](/mod/game-api/types/global-s/smoothlocomotionmodifier#m-locomotion), [`SmoothLocomotionPlayerController.smoothLocomotion`](/mod/game-api/types/global-s/smoothlocomotionplayercontroller#m-smoothlocomotion), [`SmoothLocomotionPlayerController.SmoothLocomotion`](/mod/game-api/types/global-s/smoothlocomotionplayercontroller#m-smoothlocomotion-2).

</div>
