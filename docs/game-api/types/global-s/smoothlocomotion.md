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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmoothLocomotion()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> | Current physics velocity (gravity and momentum) applied on top of input. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" character"}</code> |  |
| <Link id="m-charactercontroller" /><code>{"private CharacterController characterController"}</code> |  |
| <Link id="m-charactertransform" /><code>{"private Transform characterTransform"}</code> |  |
| <Link id="m-clampedspeedsquared" /><code>{"private float clampedSpeedSquared"}</code> |  |
| <Link id="m-currentbuildupspeed" /><code>{"private Vector2 currentBuildupSpeed"}</code> |  |
| <Link id="m-currentcollisionflags" /><code>{"private CollisionFlags currentCollisionFlags"}</code> |  |
| <Link id="m-fallfromheight" /><code>{"private float fallFromHeight"}</code> |  |
| <Link id="m-fallingcontrol" /><code>{"private float fallingControl"}</code> |  |
| <Link id="m-firstforward" /><code>{"private Vector3 firstForward"}</code> |  |
| <Link id="m-fullnessstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" fullnessStat"}</code> |  |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> |  |
| <Link id="m-isoverridingmovement" /><code>{"private Func<bool> IsOverridingMovement"}</code> |  |
| <Link id="m-isrecovering" /><code>{"private bool isRecovering"}</code> |  |
| <Link id="m-lasthungrysound" /><code>{"private float lastHungrySound"}</code> |  |
| <Link id="m-lastlocalposition" /><code>{"private Vector3 lastLocalPosition"}</code> |  |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |  |
| <Link id="m-lockrun" /><code>{"private bool lockRun"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-minheightfordamage" /><code>{"private float minHeightForDamage"}</code> |  |
| <Link id="m-movementoverride" /><code>{"private Func<bool> MovementOverride"}</code> |  |
| <Link id="m-nextsafetycheck" /><code>{"private float nextSafetyCheck"}</code> |  |
| <Link id="m-personalspacelayer" /><code>{"private int personalSpaceLayer"}</code> |  |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> |  |
| <Link id="m-recovercoroutine" /><code>{"private Coroutine recoverCoroutine"}</code> |  |
| <Link id="m-runninglevel" /><code>{"private int runningLevel"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-s/smoothlocomotionsettings">{"SmoothLocomotionSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-slipvalue" /><code>{"private float slipValue"}</code> |  |
| <Link id="m-syncfalldistance" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncFallDistance"}</code> |  |
| <Link id="m-timefalling" /><code>{"private float timeFalling"}</code> |  |
| <Link id="m-unownedheightcheck" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" unownedHeightCheck"}</code> |  |
| <Link id="m-updateinput" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateInput"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-wasapplyinginput" /><code>{"private bool wasApplyingInput"}</code> |  |
| <Link id="m-wasreleased" /><code>{"private bool wasReleased"}</code> |  |

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

| Member | What it is |
| --- | --- |
| <Link id="m-getfrictionmultiplier" /><code>{"private event "}<Link to="/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetFrictionMultiplier"}</code> |  |
| <Link id="m-getheight" /><code>{"private event "}<Link to="/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetHeight"}</code> |  |
| <Link id="m-getteleportationblock" /><code>{"private event "}<Link to="/game-api/types/alta-utilities/generaldelegates-boolupdater">{"GeneralDelegates.BoolUpdater"}</Link>{" GetTeleportationBlock"}</code> |  |
| <Link id="m-getupwardgrip" /><code>{"private event "}<Link to="/game-api/types/alta-utilities/generaldelegates-valueupdater">{"GeneralDelegates.ValueUpdater"}</Link>{" GetUpwardGrip"}</code> |  |
| <Link id="m-onfixedupdate" /><code>{"private event Action OnFixedUpdate"}</code> |  |

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
| <Link id="m-applygravityandmovement" /><code>{"private void ApplyGravityAndMovement(Vector3 velocityXYZ)"}</code> |  |
| <Link id="m-assignsmoothlocohand" /><code>{"private void AssignSmoothLocoHand()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-canteleportwithsamehand" /><code>{"private bool CanTeleportWithSameHand()"}</code> |  |
| <Link id="m-checkforinfinitefall" /><code>{"private void CheckForInfiniteFall(Vector3 position, float height)"}</code> |  |
| <Link id="m-checkinput" /><code>{"private Vector3 CheckInput(ref int runningLevel, ref Vector3 firstForward, ref bool isApplyingInput)"}</code> |  |
| <Link id="m-checkposition" /><code>{"private bool CheckPosition(Vector3 position, RaycastHit hit)"}</code> |  |
| <Link id="m-checksetenabled" /><code>{"private void CheckSetEnabled()"}</code> |  |
| <Link id="m-deaddisable" /><code>{"private void DeadDisable("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> |  |
| <Link id="m-dealfalldamage" /><code>{"private void DealFallDamage(float dropHeight)"}</code> |  |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" characterEntity, bool isUnload)"}</code> |  |
| <Link id="m-fadebackafterrecover" /><code>{"private IEnumerator FadeBackAfterRecover() (iterator)"}</code> |  |
| <Link id="m-finishloading" /><code>{"private void FinishLoading("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-generalsetup" /><code>{"private bool GeneralSetup()"}</code> |  |
| <Link id="m-handleteleport" /><code>{"private void HandleTeleport("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-increaseslip" /><code>{"private void IncreaseSlip(Vector3 normal, ref Vector3 gravityAndSlide)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel)"}</code> | Dependency injection hook for the player controller lock model. |
| <Link id="m-isclosetoground" /><code>{"private bool IsCloseToGround(Vector3 position, out Vector3 gravityAndSlide)"}</code> |  |
| <Link id="m-ishitnormalsafe" /><code>{"private bool IsHitNormalSafe(Vector3 normal)"}</code> |  |
| <Link id="m-issafeposition" /><code>{"private bool IsSafePosition(Vector3 position)"}</code> |  |
| <Link id="m-move" /><code>{"private void Move(Vector3 movement)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-recoverfromsafetyreposition" /><code>{"private IEnumerator RecoverFromSafetyReposition() (iterator)"}</code> |  |
| <Link id="m-setuplayer" /><code>{"private bool SetupLayer()"}</code> |  |
| <Link id="m-shouldapplygravityandmovement" /><code>{"private bool ShouldApplyGravityAndMovement(bool isApplyingGravity)"}</code> |  |
| <Link id="m-shouldignoreinput" /><code>{"private bool ShouldIgnoreInput()"}</code> |  |
| <Link id="m-syncfalldistance-2" /><code>{"private void SyncFallDistance("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float distance)"}</code> |  |
| <Link id="m-tryapplyfalldamage" /><code>{"private void TryApplyFallDamage(Vector3 position)"}</code> |  |
| <Link id="m-updateinput-2" /><code>{"private void UpdateInput()"}</code> |  |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings(Settings obj)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SmoothLocomotion`:

[`Climber.DrawGizmos`](/game-api/types/global-c-d/climber#m-drawgizmos), [`ClimbingHandler.ClimbingHandler`](/game-api/types/game-other-namespaces/climbinghandler#m-ctor), [`ClimbingHandler.SmoothLocomotion`](/game-api/types/game-other-namespaces/climbinghandler#m-smoothlocomotion), [`SmoothLocomotionModifier.DrawGizmos`](/game-api/types/global-s/smoothlocomotionmodifier#m-drawgizmos), [`SmoothLocomotionModifier.locomotion`](/game-api/types/global-s/smoothlocomotionmodifier#m-locomotion), [`SmoothLocomotionPlayerController.smoothLocomotion`](/game-api/types/global-s/smoothlocomotionplayercontroller#m-smoothlocomotion), [`SmoothLocomotionPlayerController.SmoothLocomotion`](/game-api/types/global-s/smoothlocomotionplayercontroller#m-smoothlocomotion-2).
