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
| <Link id="m-ctor" /><code>{"PathWalker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ismoveconstrained" /><code>{"bool isMoveConstrained"}</code> | When true the walker stops moving and stops searching for paths. |
| <Link id="m-onpathendreached" /><code><Link to="/mod/game-api/types/global-p/pathwalker-ontargetreached">{"PathWalker.OnTargetReached"}</Link>{" OnPathEndReached"}</code> | Delegate called once when the walker gets within `EndReachedDistance` of the end. |
| <Link id="m-speed" /><code>{"float speed"}</code> | Maximum walking speed. Defaults to 3. |
| <Link id="m-targetreached" /><code>{"bool targetReached"}</code> | True once the walker is within the end distance of the target. |
| <Link id="m-velocity2d" /><code>{"Vector2 velocity2D"}</code> | Current velocity on the movement plane. |

<details>
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | Acceleration towards the path. |
| <Link id="m-cansearchagain" /><code>{"private bool canSearchAgain"}</code> | False while a path request is waiting for its result. |
| <Link id="m-enddistance" /><code>{"private float endDistance"}</code> | Backing field for `EndReachedDistance`. |
| <Link id="m-enddistancesquared" /><code>{"private float endDistanceSquared"}</code> | Squared end distance used for the reached checks. |
| <Link id="m-groundmask" /><code>{"private LayerMask groundMask"}</code> | Layers the ground raycast hits. |
| <Link id="m-interpolator" /><code>{"private PathInterpolator interpolator"}</code> | Tracks the walker's position along the current path. |
| <Link id="m-lastrepath" /><code>{"private float lastRepath"}</code> | Time of the last path request. |
| <Link id="m-minimundistance" /><code>{"private float minimunDistance"}</code> | Unused minimum distance setting. |
| <Link id="m-minturn" /><code>{"private float minTurn"}</code> | Smallest share of sideways acceleration kept when turning. |
| <Link id="m-monomodifier" /><code>{"private MonoModifier monoModifier"}</code> | Path modifier on the same object, enabled with the walker. |
| <Link id="m-movementplane" /><code>{"private IMovementPlane movementPlane"}</code> | Movement plane of the graph the path is on. |
| <Link id="m-path" /><code>{"private Path path"}</code> | The current path from the `Seeker`. |
| <Link id="m-picknextwaypointdist" /><code>{"private float pickNextWaypointDist"}</code> | How far ahead along the path to aim. |
| <Link id="m-repathrate" /><code>{"private float repathRate"}</code> | Seconds between path searches. |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | Rigidbody moved with `MovePosition`. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Turn speed in degrees per second. |
| <Link id="m-searchpath" /><code>{"private Coroutine searchPath"}</code> | The running path search coroutine. |
| <Link id="m-seeker" /><code>{"private Seeker seeker"}</code> | The A* `Seeker` that finds paths. |
| <Link id="m-sharpturn" /><code>{"private float sharpTurn"}</code> | How sharply the walker turns, from 0 to 1. |
| <Link id="m-slowdowndistance" /><code>{"private float slowdownDistance"}</code> | Distance from the end at which the walker starts slowing. |
| <Link id="m-starthasrun" /><code>{"private bool startHasRun"}</code> | True once `Start` has run, so searching can begin. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Backing field for `Target`. |
| <Link id="m-targetedposition" /><code>{"private Vector3? targetedPosition"}</code> | Fixed position to walk to when there is no `Target`. |
| <Link id="m-targetpoint" /><code>{"private Vector3 targetPoint"}</code> | The point on the path being steered at. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | Cached transform. |
| <Link id="m-turningperpendicularratio" /><code>{"private float TurningPerpendicularRatio"}</code> | How much sideways acceleration is kept when turning, from `sharpTurn` and `minTurn`. |
| <Link id="m-verticalvelocity" /><code>{"private float verticalVelocity"}</code> | Vertical speed, reset when the ground ray hits. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-endreacheddistance" /><code>{"float EndReachedDistance { get; set; }"}</code> | How close to the target counts as arrived. |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> | Transform to walk to. Setting it starts a new path. Takes priority over `TargetPosition`. |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; set; }"}</code> | Where the walker is heading: the target's position if there is one, else the set position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"void OnDisable()"}</code> | Cancels the current path request and releases the path. |
| <Link id="m-onpathcomplete" /><code>{"void OnPathComplete(Path _p)"}</code> | Seeker callback. Takes the new path and snaps progress to the closest point. Only handles `ABPath`. |
| <Link id="m-startpath" /><code>{"void StartPath()"}</code> | Drops the current path and starts searching again towards the target. |
| <Link id="m-trysearchpath" /><code>{"float TrySearchPath()"}</code> | Requests a new path if the repath interval has passed. Returns the seconds until the next try. |
| <Link id="m-movementupdate" /><code>{"protected void MovementUpdate(float deltaTime)"}</code> | One movement step: steers along the path, fires `OnPathEndReached` on arrival and moves the rigidbody along the ground. |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | Hooks up the seeker callback and starts the repeating path search. |
| <Link id="m-repeattrysearchpath" /><code>{"protected IEnumerator RepeatTrySearchPath() (iterator)"}</code> | Coroutine that keeps calling `TrySearchPath` and waits the time it returns. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Disables the component and its modifier, and works out the turning ratio. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Moves towards the target each physics step until within the end distance. |
| <Link id="m-initializepath" /><code>{"private void InitializePath()"}</code> | Resets the repath timer and restarts the repeating path search coroutine. |
| <Link id="m-move" /><code>{"private void Move(Vector3 position3D, Vector3 deltaPosition)"}</code> | Moves the rigidbody by the step, snapping down to the ground. |
| <Link id="m-raycastposition" /><code>{"private Vector3 RaycastPosition(Vector3 position, float lastElevation)"}</code> | Casts down from the previous height to find the ground under the new position. |
| <Link id="m-rotatetowards" /><code>{"private void RotateTowards(Vector2 direction, float maxDegrees)"}</code> | Turns the transform towards the movement direction by up to the given degrees. |
| <Link id="m-searchpath-2" /><code>{"private void SearchPath()"}</code> | Asks the `Seeker` for a new path to the target position. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Marks start as run and starts path searching. |

</details>
