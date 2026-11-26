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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding#walker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Walker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chosen" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" chosen"}</code> | Static slot for a chosen walker; nothing sets it in this build. |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" current"}</code> | Static, set to the walker clamping itself to the navmesh during that call. |
| <Link id="m-topic" /><code>{"Rigidbody topic"}</code> | The rigidbody being moved. |

<details>
<summary>51 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | Backing field for `Acceleration`. |
| <Link id="m-angulardrag" /><code>{"private float angularDrag"}</code> | Angular drag applied each step at full power. |
| <Link id="m-blockeduntil" /><code>{"private float blockedUntil"}</code> | Time until which `IsBlocked` is true, set when RVO stops all movement. |
| <Link id="m-cacheforward" /><code>{"private Vector2 cacheForward"}</code> | Last flat forward direction used for turning. |
| <Link id="m-cacheup" /><code>{"private Vector3 cacheUp"}</code> | Last up direction used for surface alignment. |
| <Link id="m-currentmoveduration" /><code>{"private float currentMoveDuration"}</code> | Duration of the current normalized move. |
| <Link id="m-currentphysicscallindex" /><code>{"private static int currentPhysicsCallIndex"}</code> | Shared counter of which of the 5 spread slots runs this physics step. |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | Time the current normalized move started. |
| <Link id="m-detatchstrength" /><code>{"private float detatchStrength"}</code> | How much speed drops when the walker is away from the navmesh path (when not clamped). |
| <Link id="m-fixeddeltatime" /><code>{"private static float fixedDeltaTime"}</code> | Cached `Time.fixedDeltaTime`. |
| <Link id="m-gravitymultiplier" /><code>{"private float gravityMultiplier"}</code> | Backing field for `GravityMultiplier`. |
| <Link id="m-ground" /><code>{"private LayerMask ground"}</code> | Backing field for `GroundLayers`. |
| <Link id="m-hasrvo" /><code>{"private bool hasRVO"}</code> | True when an `RVOController` is present for local avoidance. |
| <Link id="m-isalignedwithsurface" /><code>{"private bool isAlignedWithSurface"}</code> | If true, the walker tilts to match the ground normal. |
| <Link id="m-isclampedtonavmesh" /><code>{"private bool isClampedToNavMesh"}</code> | If true, positions are clamped onto the navmesh. |
| <Link id="m-isfinalstretch" /><code>{"private bool isFinalStretch"}</code> | True on the last path segment this step; passed in `WalkerState`. |
| <Link id="m-isflying" /><code>{"private bool isFlying"}</code> | If true, the walker isn't grounded and keeps up to about 2m above ground. |
| <Link id="m-ismovementforwardonly" /><code>{"private bool isMovementForwardOnly"}</code> | If true, speed only counts in the facing direction. |
| <Link id="m-isnormalizedmoving" /><code>{"private bool isNormalizedMoving"}</code> | True while a `NormalizedMove` is active. |
| <Link id="m-ispivoting" /><code>{"private bool isPivoting"}</code> | True while turning in place on a sharp corner. |
| <Link id="m-issloweddownwhennotmovingforward" /><code>{"private bool isSlowedDownWhenNotMovingForward"}</code> | Backing field for `IsSlowedWhenNotMoving`. |
| <Link id="m-iswalking" /><code>{"private bool isWalking"}</code> | True while moving; going false fires `Stopped`. |
| <Link id="m-lastdelta" /><code>{"private float lastDelta"}</code> | Per-step height change used to spread the ground move over the 5 steps. |
| <Link id="m-lastphysicsheight" /><code>{"private float lastPhysicsHeight"}</code> | Ground height found by the last raycast. |
| <Link id="m-lastup" /><code>{"private Vector3 lastUp"}</code> | Ground normal from the last raycast, used for surface alignment. |
| <Link id="m-maximumspeed" /><code>{"private float maximumSpeed"}</code> | Backing field for `MaximumSpeed`. |
| <Link id="m-minimumpivotangle" /><code>{"private float minimumPivotAngle"}</code> | Turn angle above which the walker stops and pivots in place. |
| <Link id="m-navigator" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> | The `Navigator` on the same object that supplies the path. |
| <Link id="m-nextphysicscallindex" /><code>{"private static int nextPhysicsCallIndex"}</code> | Next spread slot to give a new walker. |
| <Link id="m-normalizedpath" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/normalizedpath">{"NormalizedPath"}</Link>{" normalizedPath"}</code> | Timed path used by `NormalizedTravel`. |
| <Link id="m-physicscallindex" /><code>{"private int physicsCallIndex"}</code> | This walker's slot in the 5-step spread, or -1 before it's assigned. |
| <Link id="m-physicsframespread" /><code>{"private const int physicsFrameSpread"}</code> | Number of physics steps ground checks are spread over: 5. |
| <Link id="m-pivotingspeedlimit" /><code>{"private float pivotingSpeedLimit"}</code> | Speed below which pivoting can start. |
| <Link id="m-powerpersecond" /><code>{"private float powerPerSecond"}</code> | Backing field for `PowerPerSecond`. |
| <Link id="m-preventroll" /><code>{"private bool preventRoll"}</code> | If true, surface alignment doesn't roll the walker sideways. |
| <Link id="m-raycastheight" /><code>{"private float raycastHeight"}</code> | Height above the walker the ground raycast starts from. |
| <Link id="m-reevaluationinterval" /><code>{"private float reevaluationInterval"}</code> | Unused in this build. |
| <Link id="m-rotated" /><code>{"private float rotated"}</code> | Turn speed this step, as a fraction of `rotationSpeed`; passed in `WalkerState`. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Backing field for `RotationSpeed`. |
| <Link id="m-rvocontroller" /><code>{"private RVOController rvoController"}</code> | Optional RVO controller for avoiding other agents. |
| <Link id="m-stoppivoting" /><code>{"private float stopPivoting"}</code> | Remaining angle at which a pivot ends. |
| <Link id="m-surfacealignspeed" /><code>{"private float surfaceAlignSpeed"}</code> | Degrees per second the walker tilts toward the ground normal. |
| <Link id="m-targetslowdown" /><code>{"private float targetSlowdown"}</code> | Backing field for `TargetSlowdown`. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | Transform of `topic`, the rigidbody being moved. |
| <Link id="m-updatephysicscallindex" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePhysicsCallIndex"}</code> | Fixed update registration for `UpdatePhysicsCallIndex`, shared by all walkers. |
| <Link id="m-velocitydrag" /><code>{"private float velocityDrag"}</code> | Horizontal velocity drag applied each step at full power. |
| <Link id="m-velocityxz" /><code>{"private Vector2 velocityXZ"}</code> | Current horizontal walking velocity. |
| <Link id="m-velocityy" /><code>{"private float velocityY"}</code> | Stored vertical speed used when the rigidbody is kinematic. |
| <Link id="m-wallavoidancedistance" /><code>{"private float wallAvoidanceDistance"}</code> | How close a navmesh wall must be to push the walker. |
| <Link id="m-wallavoidanceforce" /><code>{"private float wallAvoidanceForce"}</code> | Strength of the push away from walls. |
| <Link id="m-wallbuffer" /><code>{"private List<Vector3> wallBuffer"}</code> | Wall segments near the walker, refreshed on its turn. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration-2" /><code>{"float Acceleration { get; set; }"}</code> | How fast it speeds up. |
| <Link id="m-distancetoground" /><code>{"float DistanceToGround { get; private set; }"}</code> | Distance from the body to the ground below, from the last ground check. |
| <Link id="m-gravitymultiplier-2" /><code>{"float GravityMultiplier { get; set; }"}</code> | Gravity multiplier; jump actions swap it while jumping. |
| <Link id="m-groundlayers" /><code>{"LayerMask GroundLayers { get; }"}</code> | Layers counted as ground. |
| <Link id="m-hasforwarddefined" /><code>{"bool HasForwardDefined { get; set; }"}</code> | Set by circling actions when they set the facing. Not read by the walker itself in this build. |
| <Link id="m-isblocked" /><code>{"bool IsBlocked { get; }"}</code> | True for 0.2 s after RVO avoidance stopped it while it wanted to move. |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; private set; }"}</code> | Whether it was on the ground at the last check. |
| <Link id="m-isovershooting" /><code>{"bool IsOvershooting { get; set; }"}</code> | Lets it keep moving past the target instead of stopping exactly on it. Set by navigation actions. |
| <Link id="m-ispaused" /><code>{"bool IsPaused { get; set; }"}</code> | Holds it still without dropping the path. Cleared when the path finishes. |
| <Link id="m-isslowedwhennotmoving" /><code>{"bool IsSlowedWhenNotMoving { get; set; }"}</code> | Whether it slows while not facing where it is going. |
| <Link id="m-maximumspeed-2" /><code>{"float MaximumSpeed { get; set; }"}</code> | Top speed. |
| <Link id="m-power" /><code>{"float Power { get; set; }"}</code> | How much control it has (1 is full). Below 1 it recovers at `PowerPerSecond`; 0 or less stops it moving itself, as when jumping. |
| <Link id="m-powerpersecond-2" /><code>{"float PowerPerSecond { get; set; }"}</code> | How fast `Power` recovers toward 1. |
| <Link id="m-rotationspeed-2" /><code>{"float RotationSpeed { get; set; }"}</code> | Turn speed in degrees per second. |
| <Link id="m-targetslowdown-2" /><code>{"float TargetSlowdown { get; set; }"}</code> | How much it slows near the target. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-velocityy-2" /><code>{"private float VelocityY { get; set; }"}</code> | Vertical speed: the rigidbody's when not kinematic, otherwise a stored value. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stopped" /><code>{"event Action Stopped"}</code> | Raised when it stops walking because the path finished. |
| <Link id="m-updated" /><code>{"event Action<"}<Link to="/game-api/types/alta-intelligence/walkerstate">{"WalkerState"}</Link>{"> Updated"}</code> | Raised every physics step with its velocity, forward and turn speed, pivoting, final stretch and grounded state. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearblocked" /><code>{"void ClearBlocked()"}</code> | Clears the blocked timer. |
| <Link id="m-normalizedmove" /><code>{"void NormalizedMove(float duration)"}</code> | Makes the next path take a set number of seconds overall instead of moving at normal speed. |
| <Link id="m-stopnormalizedmove" /><code>{"void StopNormalizedMove()"}</code> | Goes back to normal speed movement. |

<details>
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applygravity" /><code>{"private void ApplyGravity()"}</code> | Adds gravity (times `gravityMultiplier`) to the vertical speed each physics step. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the moved rigidbody's transform, the `Navigator` and the optional `RVOController`. |
| <Link id="m-calculatewallforce" /><code>{"private Vector2 CalculateWallForce(Vector3 position, Vector2 directionToTargetXZ)"}</code> | Works out a sideways push away from nearby navmesh walls, relative to the direction of travel. |
| <Link id="m-callindexmultiplier" /><code>{"private float CallIndexMultiplier()"}</code> | Returns five physics steps' worth of time on this walker's turn in the 5-step spread, else 0, so vertical moves happen every fifth step. |
| <Link id="m-findground" /><code>{"private Vector3 FindGround(Vector3 position, float previousY)"}</code> | On this walker's turn, raycasts for ground and records grounding; on other steps it eases toward the last found height. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Each physics step: stands, travels or follows a normalized path, applies drag, and fires `Updated` with the walker state. |
| <Link id="m-move" /><code>{"private void Move(Vector3 position, Vector3 deltaPosition)"}</code> | Moves the rigidbody by a delta, clamping to the navmesh and ground if set, and scaled by `Power`. |
| <Link id="m-normalizedtravel" /><code>{"private void NormalizedTravel()"}</code> | Moves along a timed path so the whole route takes the duration given to `NormalizedMove`. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws lines to the next and following path corners. |
| <Link id="m-rotatetowards" /><code>{"private void RotateTowards(float speed, Vector2 targetForward, Vector2 direction, float maxDegrees, out Vector2 forward)"}</code> | Turns the rigidbody toward a direction, handles pivoting in place on sharp turns and aligns to the surface if set. |
| <Link id="m-setupnormalizedmovement" /><code>{"private void SetupNormalizedMovement()"}</code> | When the path is found, builds the timed path for `NormalizedMove` and sets the RVO target speed. |
| <Link id="m-stand" /><code>{"private void Stand()"}</code> | Stops horizontal movement, turns toward `TargetFacing` and applies gravity. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Server: snaps the walker to the nearest navmesh point. |
| <Link id="m-travel" /><code>{"private void Travel()"}</code> | Normal path following: accelerates toward the next corner with wall avoidance, slows near the target and uses RVO if present. |
| <Link id="m-updatephysicscallindex-2" /><code>{"private void UpdatePhysicsCallIndex()"}</code> | Advances the shared 0 to 4 counter that decides which walkers do ground checks this physics step. |
| <Link id="m-updatepower" /><code>{"private void UpdatePower()"}</code> | Recovers `Power` toward 1 over time and applies velocity and angular drag scaled by it. |

</details>

## Used in

Members of other types that take, return or hold a `Walker`:

[`Agent.walker`](/game-api/types/alta-intelligence/agent#m-walker), [`Agent.Walker`](/game-api/types/alta-intelligence/agent#m-walker-2), [`IAgent.Walker`](/game-api/types/alta-intelligence/iagent#m-walker), [`VerticalFlyingController.walker`](/game-api/types/global-t-x/verticalflyingcontroller#m-walker), [`WalkerStepping.walker`](/game-api/types/global-t-x/walkerstepping#m-walker).
