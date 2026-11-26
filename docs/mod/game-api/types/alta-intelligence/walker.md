---
title: "Walker"
description: "Moves a creature's rigidbody along its Navigator path with acceleration, turning, pivoting, gravity and optional RVO avoidance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Walker

A **class** in `Root.Township`, `Alta.Pathfinding`.

Moves a creature's rigidbody along its `Navigator` path with acceleration, turning, pivoting, gravity and optional RVO avoidance. A component on walking creatures; runs in `FixedUpdate`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/mod/game-api/creatures/movement-and-pathfinding#walker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Walker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chosen" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" chosen"}</code> | <span className="api-desc">Static slot for a chosen walker; nothing sets it in this build.</span> |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" current"}</code> | <span className="api-desc">Static, set to the walker clamping itself to the navmesh during that call.</span> |
| <Link id="m-topic" /><code>{"Rigidbody topic"}</code> | <span className="api-desc">The rigidbody being moved.</span> |

<details className="api-private">
<summary>51 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">Backing field for `Acceleration`.</span> |
| <Link id="m-angulardrag" /><code>{"private float angularDrag"}</code> | <span className="api-desc">Angular drag applied each step at full power.</span> |
| <Link id="m-blockeduntil" /><code>{"private float blockedUntil"}</code> | <span className="api-desc">Time until which `IsBlocked` is true, set when RVO stops all movement.</span> |
| <Link id="m-cacheforward" /><code>{"private Vector2 cacheForward"}</code> | <span className="api-desc">Last flat forward direction used for turning.</span> |
| <Link id="m-cacheup" /><code>{"private Vector3 cacheUp"}</code> | <span className="api-desc">Last up direction used for surface alignment.</span> |
| <Link id="m-currentmoveduration" /><code>{"private float currentMoveDuration"}</code> | <span className="api-desc">Duration of the current normalized move.</span> |
| <Link id="m-currentphysicscallindex" /><code>{"private static int currentPhysicsCallIndex"}</code> | <span className="api-desc">Shared counter of which of the 5 spread slots runs this physics step.</span> |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | <span className="api-desc">Time the current normalized move started.</span> |
| <Link id="m-detatchstrength" /><code>{"private float detatchStrength"}</code> | <span className="api-desc">How much speed drops when the walker is away from the navmesh path (when not clamped).</span> |
| <Link id="m-fixeddeltatime" /><code>{"private static float fixedDeltaTime"}</code> | <span className="api-desc">Cached `Time.fixedDeltaTime`.</span> |
| <Link id="m-gravitymultiplier" /><code>{"private float gravityMultiplier"}</code> | <span className="api-desc">Backing field for `GravityMultiplier`.</span> |
| <Link id="m-ground" /><code>{"private LayerMask ground"}</code> | <span className="api-desc">Backing field for `GroundLayers`.</span> |
| <Link id="m-hasrvo" /><code>{"private bool hasRVO"}</code> | <span className="api-desc">True when an `RVOController` is present for local avoidance.</span> |
| <Link id="m-isalignedwithsurface" /><code>{"private bool isAlignedWithSurface"}</code> | <span className="api-desc">If true, the walker tilts to match the ground normal.</span> |
| <Link id="m-isclampedtonavmesh" /><code>{"private bool isClampedToNavMesh"}</code> | <span className="api-desc">If true, positions are clamped onto the navmesh.</span> |
| <Link id="m-isfinalstretch" /><code>{"private bool isFinalStretch"}</code> | <span className="api-desc">True on the last path segment this step; passed in `WalkerState`.</span> |
| <Link id="m-isflying" /><code>{"private bool isFlying"}</code> | <span className="api-desc">If true, the walker isn't grounded and keeps up to about 2m above ground.</span> |
| <Link id="m-ismovementforwardonly" /><code>{"private bool isMovementForwardOnly"}</code> | <span className="api-desc">If true, speed only counts in the facing direction.</span> |
| <Link id="m-isnormalizedmoving" /><code>{"private bool isNormalizedMoving"}</code> | <span className="api-desc">True while a `NormalizedMove` is active.</span> |
| <Link id="m-ispivoting" /><code>{"private bool isPivoting"}</code> | <span className="api-desc">True while turning in place on a sharp corner.</span> |
| <Link id="m-issloweddownwhennotmovingforward" /><code>{"private bool isSlowedDownWhenNotMovingForward"}</code> | <span className="api-desc">Backing field for `IsSlowedWhenNotMoving`.</span> |
| <Link id="m-iswalking" /><code>{"private bool isWalking"}</code> | <span className="api-desc">True while moving; going false fires `Stopped`.</span> |
| <Link id="m-lastdelta" /><code>{"private float lastDelta"}</code> | <span className="api-desc">Per-step height change used to spread the ground move over the 5 steps.</span> |
| <Link id="m-lastphysicsheight" /><code>{"private float lastPhysicsHeight"}</code> | <span className="api-desc">Ground height found by the last raycast.</span> |
| <Link id="m-lastup" /><code>{"private Vector3 lastUp"}</code> | <span className="api-desc">Ground normal from the last raycast, used for surface alignment.</span> |
| <Link id="m-maximumspeed" /><code>{"private float maximumSpeed"}</code> | <span className="api-desc">Backing field for `MaximumSpeed`.</span> |
| <Link id="m-minimumpivotangle" /><code>{"private float minimumPivotAngle"}</code> | <span className="api-desc">Turn angle above which the walker stops and pivots in place.</span> |
| <Link id="m-navigator" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> | <span className="api-desc">The `Navigator` on the same object that supplies the path.</span> |
| <Link id="m-nextphysicscallindex" /><code>{"private static int nextPhysicsCallIndex"}</code> | <span className="api-desc">Next spread slot to give a new walker.</span> |
| <Link id="m-normalizedpath" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/normalizedpath">{"NormalizedPath"}</Link>{" normalizedPath"}</code> | <span className="api-desc">Timed path used by `NormalizedTravel`.</span> |
| <Link id="m-physicscallindex" /><code>{"private int physicsCallIndex"}</code> | <span className="api-desc">This walker's slot in the 5-step spread, or -1 before it's assigned.</span> |
| <Link id="m-physicsframespread" /><code>{"private const int physicsFrameSpread"}</code> | <span className="api-desc">Number of physics steps ground checks are spread over: 5.</span> |
| <Link id="m-pivotingspeedlimit" /><code>{"private float pivotingSpeedLimit"}</code> | <span className="api-desc">Speed below which pivoting can start.</span> |
| <Link id="m-powerpersecond" /><code>{"private float powerPerSecond"}</code> | <span className="api-desc">Backing field for `PowerPerSecond`.</span> |
| <Link id="m-preventroll" /><code>{"private bool preventRoll"}</code> | <span className="api-desc">If true, surface alignment doesn't roll the walker sideways.</span> |
| <Link id="m-raycastheight" /><code>{"private float raycastHeight"}</code> | <span className="api-desc">Height above the walker the ground raycast starts from.</span> |
| <Link id="m-reevaluationinterval" /><code>{"private float reevaluationInterval"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-rotated" /><code>{"private float rotated"}</code> | <span className="api-desc">Turn speed this step, as a fraction of `rotationSpeed`; passed in `WalkerState`.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Backing field for `RotationSpeed`.</span> |
| <Link id="m-rvocontroller" /><code>{"private RVOController rvoController"}</code> | <span className="api-desc">Optional RVO controller for avoiding other agents.</span> |
| <Link id="m-stoppivoting" /><code>{"private float stopPivoting"}</code> | <span className="api-desc">Remaining angle at which a pivot ends.</span> |
| <Link id="m-surfacealignspeed" /><code>{"private float surfaceAlignSpeed"}</code> | <span className="api-desc">Degrees per second the walker tilts toward the ground normal.</span> |
| <Link id="m-targetslowdown" /><code>{"private float targetSlowdown"}</code> | <span className="api-desc">Backing field for `TargetSlowdown`.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Transform of `topic`, the rigidbody being moved.</span> |
| <Link id="m-updatephysicscallindex" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePhysicsCallIndex"}</code> | <span className="api-desc">Fixed update registration for `UpdatePhysicsCallIndex`, shared by all walkers.</span> |
| <Link id="m-velocitydrag" /><code>{"private float velocityDrag"}</code> | <span className="api-desc">Horizontal velocity drag applied each step at full power.</span> |
| <Link id="m-velocityxz" /><code>{"private Vector2 velocityXZ"}</code> | <span className="api-desc">Current horizontal walking velocity.</span> |
| <Link id="m-velocityy" /><code>{"private float velocityY"}</code> | <span className="api-desc">Stored vertical speed used when the rigidbody is kinematic.</span> |
| <Link id="m-wallavoidancedistance" /><code>{"private float wallAvoidanceDistance"}</code> | <span className="api-desc">How close a navmesh wall must be to push the walker.</span> |
| <Link id="m-wallavoidanceforce" /><code>{"private float wallAvoidanceForce"}</code> | <span className="api-desc">Strength of the push away from walls.</span> |
| <Link id="m-wallbuffer" /><code>{"private List<Vector3> wallBuffer"}</code> | <span className="api-desc">Wall segments near the walker, refreshed on its turn.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration-2" /><code>{"float Acceleration { get; set; }"}</code> | <span className="api-desc">How fast it speeds up.</span> |
| <Link id="m-distancetoground" /><code>{"float DistanceToGround { get; private set; }"}</code> | <span className="api-desc">Distance from the body to the ground below, from the last ground check.</span> |
| <Link id="m-gravitymultiplier-2" /><code>{"float GravityMultiplier { get; set; }"}</code> | <span className="api-desc">Gravity multiplier; jump actions swap it while jumping.</span> |
| <Link id="m-groundlayers" /><code>{"LayerMask GroundLayers { get; }"}</code> | <span className="api-desc">Layers counted as ground.</span> |
| <Link id="m-hasforwarddefined" /><code>{"bool HasForwardDefined { get; set; }"}</code> | <span className="api-desc">Set by circling actions when they set the facing. Not read by the walker itself in this build.</span> |
| <Link id="m-isblocked" /><code>{"bool IsBlocked { get; }"}</code> | <span className="api-desc">True for 0.2 s after RVO avoidance stopped it while it wanted to move.</span> |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; private set; }"}</code> | <span className="api-desc">Whether it was on the ground at the last check.</span> |
| <Link id="m-isovershooting" /><code>{"bool IsOvershooting { get; set; }"}</code> | <span className="api-desc">Lets it keep moving past the target instead of stopping exactly on it. Set by navigation actions.</span> |
| <Link id="m-ispaused" /><code>{"bool IsPaused { get; set; }"}</code> | <span className="api-desc">Holds it still without dropping the path. Cleared when the path finishes.</span> |
| <Link id="m-isslowedwhennotmoving" /><code>{"bool IsSlowedWhenNotMoving { get; set; }"}</code> | <span className="api-desc">Whether it slows while not facing where it is going.</span> |
| <Link id="m-maximumspeed-2" /><code>{"float MaximumSpeed { get; set; }"}</code> | <span className="api-desc">Top speed.</span> |
| <Link id="m-power" /><code>{"float Power { get; set; }"}</code> | <span className="api-desc">How much control it has (1 is full). Below 1 it recovers at `PowerPerSecond`; 0 or less stops it moving itself, as when jumping.</span> |
| <Link id="m-powerpersecond-2" /><code>{"float PowerPerSecond { get; set; }"}</code> | <span className="api-desc">How fast `Power` recovers toward 1.</span> |
| <Link id="m-rotationspeed-2" /><code>{"float RotationSpeed { get; set; }"}</code> | <span className="api-desc">Turn speed in degrees per second.</span> |
| <Link id="m-targetslowdown-2" /><code>{"float TargetSlowdown { get; set; }"}</code> | <span className="api-desc">How much it slows near the target.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-velocityy-2" /><code>{"private float VelocityY { get; set; }"}</code> | <span className="api-desc">Vertical speed: the rigidbody's when not kinematic, otherwise a stored value.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stopped" /><code>{"event Action Stopped"}</code> | <span className="api-desc">Raised when it stops walking because the path finished.</span> |
| <Link id="m-updated" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-intelligence/walkerstate">{"WalkerState"}</Link>{"> Updated"}</code> | <span className="api-desc">Raised every physics step with its velocity, forward and turn speed, pivoting, final stretch and grounded state.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearblocked" /><code>{"void ClearBlocked()"}</code> | <span className="api-desc">Clears the blocked timer.</span> |
| <Link id="m-normalizedmove" /><code>{"void NormalizedMove(float duration)"}</code> | <span className="api-desc">Makes the next path take a set number of seconds overall instead of moving at normal speed.</span> |
| <Link id="m-stopnormalizedmove" /><code>{"void StopNormalizedMove()"}</code> | <span className="api-desc">Goes back to normal speed movement.</span> |

<details className="api-private">
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applygravity" /><code>{"private void ApplyGravity()"}</code> | <span className="api-desc">Adds gravity (times `gravityMultiplier`) to the vertical speed each physics step.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the moved rigidbody's transform, the `Navigator` and the optional `RVOController`.</span> |
| <Link id="m-calculatewallforce" /><code>{"private Vector2 CalculateWallForce(Vector3 position, Vector2 directionToTargetXZ)"}</code> | <span className="api-desc">Works out a sideways push away from nearby navmesh walls, relative to the direction of travel.</span> |
| <Link id="m-callindexmultiplier" /><code>{"private float CallIndexMultiplier()"}</code> | <span className="api-desc">Returns five physics steps' worth of time on this walker's turn in the 5-step spread, else 0, so vertical moves happen every fifth step.</span> |
| <Link id="m-findground" /><code>{"private Vector3 FindGround(Vector3 position, float previousY)"}</code> | <span className="api-desc">On this walker's turn, raycasts for ground and records grounding; on other steps it eases toward the last found height.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Each physics step: stands, travels or follows a normalized path, applies drag, and fires `Updated` with the walker state.</span> |
| <Link id="m-move" /><code>{"private void Move(Vector3 position, Vector3 deltaPosition)"}</code> | <span className="api-desc">Moves the rigidbody by a delta, clamping to the navmesh and ground if set, and scaled by `Power`.</span> |
| <Link id="m-normalizedtravel" /><code>{"private void NormalizedTravel()"}</code> | <span className="api-desc">Moves along a timed path so the whole route takes the duration given to `NormalizedMove`.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws lines to the next and following path corners.</span> |
| <Link id="m-rotatetowards" /><code>{"private void RotateTowards(float speed, Vector2 targetForward, Vector2 direction, float maxDegrees, out Vector2 forward)"}</code> | <span className="api-desc">Turns the rigidbody toward a direction, handles pivoting in place on sharp turns and aligns to the surface if set.</span> |
| <Link id="m-setupnormalizedmovement" /><code>{"private void SetupNormalizedMovement()"}</code> | <span className="api-desc">When the path is found, builds the timed path for `NormalizedMove` and sets the RVO target speed.</span> |
| <Link id="m-stand" /><code>{"private void Stand()"}</code> | <span className="api-desc">Stops horizontal movement, turns toward `TargetFacing` and applies gravity.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Server: snaps the walker to the nearest navmesh point.</span> |
| <Link id="m-travel" /><code>{"private void Travel()"}</code> | <span className="api-desc">Normal path following: accelerates toward the next corner with wall avoidance, slows near the target and uses RVO if present.</span> |
| <Link id="m-updatephysicscallindex-2" /><code>{"private void UpdatePhysicsCallIndex()"}</code> | <span className="api-desc">Advances the shared 0 to 4 counter that decides which walkers do ground checks this physics step.</span> |
| <Link id="m-updatepower" /><code>{"private void UpdatePower()"}</code> | <span className="api-desc">Recovers `Power` toward 1 over time and applies velocity and angular drag scaled by it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Walker`:

<div className="api-used-in">

[`Agent.walker`](/mod/game-api/types/alta-intelligence/agent#m-walker), [`Agent.Walker`](/mod/game-api/types/alta-intelligence/agent#m-walker-2), [`IAgent.Walker`](/mod/game-api/types/alta-intelligence/iagent#m-walker), [`VerticalFlyingController.walker`](/mod/game-api/types/global-t-x/verticalflyingcontroller#m-walker), [`WalkerStepping.walker`](/mod/game-api/types/global-t-x/walkerstepping#m-walker).

</div>
