---
title: "Walker"
description: "A MonoBehaviour with a FixedUpdate. Moves topic (the creature's Rigidbody)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Walker

A **class** in `Root.Township`, `Alta.Pathfinding`.

A `MonoBehaviour` with a `FixedUpdate`. Moves `topic` (the creature's `Rigidbody`).

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding#walker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Walker()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chosen" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" chosen"}</code> |  |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" current"}</code> |  |
| <Link id="m-topic" /><code>{"Rigidbody topic"}</code> |  |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> |  |
| <Link id="m-angulardrag" /><code>{"private float angularDrag"}</code> |  |
| <Link id="m-blockeduntil" /><code>{"private float blockedUntil"}</code> |  |
| <Link id="m-cacheforward" /><code>{"private Vector2 cacheForward"}</code> |  |
| <Link id="m-cacheup" /><code>{"private Vector3 cacheUp"}</code> |  |
| <Link id="m-currentmoveduration" /><code>{"private float currentMoveDuration"}</code> |  |
| <Link id="m-currentphysicscallindex" /><code>{"private static int currentPhysicsCallIndex"}</code> |  |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> |  |
| <Link id="m-detatchstrength" /><code>{"private float detatchStrength"}</code> |  |
| <Link id="m-fixeddeltatime" /><code>{"private static float fixedDeltaTime"}</code> |  |
| <Link id="m-gravitymultiplier" /><code>{"private float gravityMultiplier"}</code> |  |
| <Link id="m-ground" /><code>{"private LayerMask ground"}</code> |  |
| <Link id="m-hasrvo" /><code>{"private bool hasRVO"}</code> |  |
| <Link id="m-isalignedwithsurface" /><code>{"private bool isAlignedWithSurface"}</code> |  |
| <Link id="m-isclampedtonavmesh" /><code>{"private bool isClampedToNavMesh"}</code> |  |
| <Link id="m-isfinalstretch" /><code>{"private bool isFinalStretch"}</code> |  |
| <Link id="m-isflying" /><code>{"private bool isFlying"}</code> |  |
| <Link id="m-ismovementforwardonly" /><code>{"private bool isMovementForwardOnly"}</code> |  |
| <Link id="m-isnormalizedmoving" /><code>{"private bool isNormalizedMoving"}</code> |  |
| <Link id="m-ispivoting" /><code>{"private bool isPivoting"}</code> |  |
| <Link id="m-issloweddownwhennotmovingforward" /><code>{"private bool isSlowedDownWhenNotMovingForward"}</code> |  |
| <Link id="m-iswalking" /><code>{"private bool isWalking"}</code> |  |
| <Link id="m-lastdelta" /><code>{"private float lastDelta"}</code> |  |
| <Link id="m-lastphysicsheight" /><code>{"private float lastPhysicsHeight"}</code> |  |
| <Link id="m-lastup" /><code>{"private Vector3 lastUp"}</code> |  |
| <Link id="m-maximumspeed" /><code>{"private float maximumSpeed"}</code> |  |
| <Link id="m-minimumpivotangle" /><code>{"private float minimumPivotAngle"}</code> |  |
| <Link id="m-navigator" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> |  |
| <Link id="m-nextphysicscallindex" /><code>{"private static int nextPhysicsCallIndex"}</code> |  |
| <Link id="m-normalizedpath" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/normalizedpath">{"NormalizedPath"}</Link>{" normalizedPath"}</code> |  |
| <Link id="m-physicscallindex" /><code>{"private int physicsCallIndex"}</code> |  |
| <Link id="m-physicsframespread" /><code>{"private const int physicsFrameSpread"}</code> |  |
| <Link id="m-pivotingspeedlimit" /><code>{"private float pivotingSpeedLimit"}</code> |  |
| <Link id="m-powerpersecond" /><code>{"private float powerPerSecond"}</code> |  |
| <Link id="m-preventroll" /><code>{"private bool preventRoll"}</code> |  |
| <Link id="m-raycastheight" /><code>{"private float raycastHeight"}</code> |  |
| <Link id="m-reevaluationinterval" /><code>{"private float reevaluationInterval"}</code> |  |
| <Link id="m-rotated" /><code>{"private float rotated"}</code> |  |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |  |
| <Link id="m-rvocontroller" /><code>{"private RVOController rvoController"}</code> |  |
| <Link id="m-stoppivoting" /><code>{"private float stopPivoting"}</code> |  |
| <Link id="m-surfacealignspeed" /><code>{"private float surfaceAlignSpeed"}</code> |  |
| <Link id="m-targetslowdown" /><code>{"private float targetSlowdown"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |
| <Link id="m-updatephysicscallindex" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePhysicsCallIndex"}</code> |  |
| <Link id="m-velocitydrag" /><code>{"private float velocityDrag"}</code> |  |
| <Link id="m-velocityxz" /><code>{"private Vector2 velocityXZ"}</code> |  |
| <Link id="m-velocityy" /><code>{"private float velocityY"}</code> |  |
| <Link id="m-wallavoidancedistance" /><code>{"private float wallAvoidanceDistance"}</code> |  |
| <Link id="m-wallavoidanceforce" /><code>{"private float wallAvoidanceForce"}</code> |  |
| <Link id="m-wallbuffer" /><code>{"private List<Vector3> wallBuffer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration-2" /><code>{"float Acceleration { get; set; }"}</code> |  |
| <Link id="m-distancetoground" /><code>{"float DistanceToGround { get; private set; }"}</code> |  |
| <Link id="m-gravitymultiplier-2" /><code>{"float GravityMultiplier { get; set; }"}</code> |  |
| <Link id="m-groundlayers" /><code>{"LayerMask GroundLayers { get; }"}</code> |  |
| <Link id="m-hasforwarddefined" /><code>{"bool HasForwardDefined { get; set; }"}</code> |  |
| <Link id="m-isblocked" /><code>{"bool IsBlocked { get; }"}</code> |  |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; private set; }"}</code> |  |
| <Link id="m-isovershooting" /><code>{"bool IsOvershooting { get; set; }"}</code> |  |
| <Link id="m-ispaused" /><code>{"bool IsPaused { get; set; }"}</code> |  |
| <Link id="m-isslowedwhennotmoving" /><code>{"bool IsSlowedWhenNotMoving { get; set; }"}</code> |  |
| <Link id="m-maximumspeed-2" /><code>{"float MaximumSpeed { get; set; }"}</code> |  |
| <Link id="m-power" /><code>{"float Power { get; set; }"}</code> |  |
| <Link id="m-powerpersecond-2" /><code>{"float PowerPerSecond { get; set; }"}</code> |  |
| <Link id="m-rotationspeed-2" /><code>{"float RotationSpeed { get; set; }"}</code> |  |
| <Link id="m-targetslowdown-2" /><code>{"float TargetSlowdown { get; set; }"}</code> |  |
| <Link id="m-velocityy-2" /><code>{"private float VelocityY { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stopped" /><code>{"event Action Stopped"}</code> |  |
| <Link id="m-updated" /><code>{"event Action<"}<Link to="/game-api/types/alta-intelligence/walkerstate">{"WalkerState"}</Link>{"> Updated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearblocked" /><code>{"void ClearBlocked()"}</code> |  |
| <Link id="m-normalizedmove" /><code>{"void NormalizedMove(float duration)"}</code> |  |
| <Link id="m-stopnormalizedmove" /><code>{"void StopNormalizedMove()"}</code> |  |
| <Link id="m-applygravity" /><code>{"private void ApplyGravity()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-calculatewallforce" /><code>{"private Vector2 CalculateWallForce(Vector3 position, Vector2 directionToTargetXZ)"}</code> |  |
| <Link id="m-callindexmultiplier" /><code>{"private float CallIndexMultiplier()"}</code> |  |
| <Link id="m-findground" /><code>{"private Vector3 FindGround(Vector3 position, float previousY)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-move" /><code>{"private void Move(Vector3 position, Vector3 deltaPosition)"}</code> |  |
| <Link id="m-normalizedtravel" /><code>{"private void NormalizedTravel()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-rotatetowards" /><code>{"private void RotateTowards(float speed, Vector2 targetForward, Vector2 direction, float maxDegrees, out Vector2 forward)"}</code> |  |
| <Link id="m-setupnormalizedmovement" /><code>{"private void SetupNormalizedMovement()"}</code> |  |
| <Link id="m-stand" /><code>{"private void Stand()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-travel" /><code>{"private void Travel()"}</code> |  |
| <Link id="m-updatephysicscallindex-2" /><code>{"private void UpdatePhysicsCallIndex()"}</code> |  |
| <Link id="m-updatepower" /><code>{"private void UpdatePower()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Walker`:

[`Agent.walker`](/game-api/types/alta-intelligence/agent#m-walker), [`Agent.Walker`](/game-api/types/alta-intelligence/agent#m-walker-2), [`IAgent.Walker`](/game-api/types/alta-intelligence/iagent#m-walker), [`VerticalFlyingController.walker`](/game-api/types/global-t-x/verticalflyingcontroller#m-walker), [`WalkerStepping.walker`](/game-api/types/global-t-x/walkerstepping#m-walker).
