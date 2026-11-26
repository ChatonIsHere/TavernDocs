---
title: "PathWalker"
description: "Moves a rigidbody along an A path towards a target transform or position, steering and slowing near the end."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathWalker

A **class** in `Root.Township`, the global namespace.

Moves a rigidbody along an A* path towards a target transform or position, steering and slowing near the end. Uses the A* Pathfinding `Seeker` on the same object; nothing else in the code references it.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`OnTargetReached`](/mod/game-api/types/global-p/pathwalker-ontargetreached)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathWalker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ismoveconstrained" /><code>{"bool isMoveConstrained"}</code> | <span className="api-desc">When true the walker stops moving and stops searching for paths.</span> |
| <Link id="m-onpathendreached" /><code><Link to="/mod/game-api/types/global-p/pathwalker-ontargetreached">{"PathWalker.OnTargetReached"}</Link>{" OnPathEndReached"}</code> | <span className="api-desc">Delegate called once when the walker gets within `EndReachedDistance` of the end.</span> |
| <Link id="m-speed" /><code>{"float speed"}</code> | <span className="api-desc">Maximum walking speed. Defaults to 3.</span> |
| <Link id="m-targetreached" /><code>{"bool targetReached"}</code> | <span className="api-desc">True once the walker is within the end distance of the target.</span> |
| <Link id="m-velocity2d" /><code>{"Vector2 velocity2D"}</code> | <span className="api-desc">Current velocity on the movement plane.</span> |

<details className="api-private">
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">Acceleration towards the path.</span> |
| <Link id="m-cansearchagain" /><code>{"private bool canSearchAgain"}</code> | <span className="api-desc">False while a path request is waiting for its result.</span> |
| <Link id="m-enddistance" /><code>{"private float endDistance"}</code> | <span className="api-desc">Backing field for `EndReachedDistance`.</span> |
| <Link id="m-enddistancesquared" /><code>{"private float endDistanceSquared"}</code> | <span className="api-desc">Squared end distance used for the reached checks.</span> |
| <Link id="m-groundmask" /><code>{"private LayerMask groundMask"}</code> | <span className="api-desc">Layers the ground raycast hits.</span> |
| <Link id="m-interpolator" /><code>{"private PathInterpolator interpolator"}</code> | <span className="api-desc">Tracks the walker's position along the current path.</span> |
| <Link id="m-lastrepath" /><code>{"private float lastRepath"}</code> | <span className="api-desc">Time of the last path request.</span> |
| <Link id="m-minimundistance" /><code>{"private float minimunDistance"}</code> | <span className="api-desc">Unused minimum distance setting.</span> |
| <Link id="m-minturn" /><code>{"private float minTurn"}</code> | <span className="api-desc">Smallest share of sideways acceleration kept when turning.</span> |
| <Link id="m-monomodifier" /><code>{"private MonoModifier monoModifier"}</code> | <span className="api-desc">Path modifier on the same object, enabled with the walker.</span> |
| <Link id="m-movementplane" /><code>{"private IMovementPlane movementPlane"}</code> | <span className="api-desc">Movement plane of the graph the path is on.</span> |
| <Link id="m-path" /><code>{"private Path path"}</code> | <span className="api-desc">The current path from the `Seeker`.</span> |
| <Link id="m-picknextwaypointdist" /><code>{"private float pickNextWaypointDist"}</code> | <span className="api-desc">How far ahead along the path to aim.</span> |
| <Link id="m-repathrate" /><code>{"private float repathRate"}</code> | <span className="api-desc">Seconds between path searches.</span> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">Rigidbody moved with `MovePosition`.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Turn speed in degrees per second.</span> |
| <Link id="m-searchpath" /><code>{"private Coroutine searchPath"}</code> | <span className="api-desc">The running path search coroutine.</span> |
| <Link id="m-seeker" /><code>{"private Seeker seeker"}</code> | <span className="api-desc">The A* `Seeker` that finds paths.</span> |
| <Link id="m-sharpturn" /><code>{"private float sharpTurn"}</code> | <span className="api-desc">How sharply the walker turns, from 0 to 1.</span> |
| <Link id="m-slowdowndistance" /><code>{"private float slowdownDistance"}</code> | <span className="api-desc">Distance from the end at which the walker starts slowing.</span> |
| <Link id="m-starthasrun" /><code>{"private bool startHasRun"}</code> | <span className="api-desc">True once `Start` has run, so searching can begin.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |
| <Link id="m-targetedposition" /><code>{"private Vector3? targetedPosition"}</code> | <span className="api-desc">Fixed position to walk to when there is no `Target`.</span> |
| <Link id="m-targetpoint" /><code>{"private Vector3 targetPoint"}</code> | <span className="api-desc">The point on the path being steered at.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Cached transform.</span> |
| <Link id="m-turningperpendicularratio" /><code>{"private float TurningPerpendicularRatio"}</code> | <span className="api-desc">How much sideways acceleration is kept when turning, from `sharpTurn` and `minTurn`.</span> |
| <Link id="m-verticalvelocity" /><code>{"private float verticalVelocity"}</code> | <span className="api-desc">Vertical speed, reset when the ground ray hits.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-endreacheddistance" /><code>{"float EndReachedDistance { get; set; }"}</code> | <span className="api-desc">How close to the target counts as arrived.</span> |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> | <span className="api-desc">Transform to walk to. Setting it starts a new path. Takes priority over `TargetPosition`.</span> |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; set; }"}</code> | <span className="api-desc">Where the walker is heading: the target's position if there is one, else the set position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"void OnDisable()"}</code> | <span className="api-desc">Cancels the current path request and releases the path.</span> |
| <Link id="m-onpathcomplete" /><code>{"void OnPathComplete(Path _p)"}</code> | <span className="api-desc">Seeker callback. Takes the new path and snaps progress to the closest point. Only handles `ABPath`.</span> |
| <Link id="m-startpath" /><code>{"void StartPath()"}</code> | <span className="api-desc">Drops the current path and starts searching again towards the target.</span> |
| <Link id="m-trysearchpath" /><code>{"float TrySearchPath()"}</code> | <span className="api-desc">Requests a new path if the repath interval has passed. Returns the seconds until the next try.</span> |
| <Link id="m-movementupdate" /><code>{"protected void MovementUpdate(float deltaTime)"}</code> | <span className="api-desc">One movement step: steers along the path, fires `OnPathEndReached` on arrival and moves the rigidbody along the ground.</span> |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | <span className="api-desc">Hooks up the seeker callback and starts the repeating path search.</span> |
| <Link id="m-repeattrysearchpath" /><code>{"protected IEnumerator RepeatTrySearchPath() (iterator)"}</code> | <span className="api-desc">Coroutine that keeps calling `TrySearchPath` and waits the time it returns.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Disables the component and its modifier, and works out the turning ratio.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Moves towards the target each physics step until within the end distance.</span> |
| <Link id="m-initializepath" /><code>{"private void InitializePath()"}</code> | <span className="api-desc">Resets the repath timer and restarts the repeating path search coroutine.</span> |
| <Link id="m-move" /><code>{"private void Move(Vector3 position3D, Vector3 deltaPosition)"}</code> | <span className="api-desc">Moves the rigidbody by the step, snapping down to the ground.</span> |
| <Link id="m-raycastposition" /><code>{"private Vector3 RaycastPosition(Vector3 position, float lastElevation)"}</code> | <span className="api-desc">Casts down from the previous height to find the ground under the new position.</span> |
| <Link id="m-rotatetowards" /><code>{"private void RotateTowards(Vector2 direction, float maxDegrees)"}</code> | <span className="api-desc">Turns the transform towards the movement direction by up to the given degrees.</span> |
| <Link id="m-searchpath-2" /><code>{"private void SearchPath()"}</code> | <span className="api-desc">Asks the `Seeker` for a new path to the target position.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Marks start as run and starts path searching.</span> |

</details>
