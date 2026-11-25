---
title: "PathWalker"
description: "class PathWalker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathWalker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`OnTargetReached`](/game-api/types/global-p/pathwalker-ontargetreached)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathWalker()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ismoveconstrained" /><code>{"bool isMoveConstrained"}</code> |  |
| <Link id="m-onpathendreached" /><code><Link to="/game-api/types/global-p/pathwalker-ontargetreached">{"PathWalker.OnTargetReached"}</Link>{" OnPathEndReached"}</code> |  |
| <Link id="m-speed" /><code>{"float speed"}</code> |  |
| <Link id="m-targetreached" /><code>{"bool targetReached"}</code> |  |
| <Link id="m-velocity2d" /><code>{"Vector2 velocity2D"}</code> |  |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> |  |
| <Link id="m-cansearchagain" /><code>{"private bool canSearchAgain"}</code> |  |
| <Link id="m-enddistance" /><code>{"private float endDistance"}</code> |  |
| <Link id="m-enddistancesquared" /><code>{"private float endDistanceSquared"}</code> |  |
| <Link id="m-groundmask" /><code>{"private LayerMask groundMask"}</code> |  |
| <Link id="m-interpolator" /><code>{"private PathInterpolator interpolator"}</code> |  |
| <Link id="m-lastrepath" /><code>{"private float lastRepath"}</code> |  |
| <Link id="m-minimundistance" /><code>{"private float minimunDistance"}</code> |  |
| <Link id="m-minturn" /><code>{"private float minTurn"}</code> |  |
| <Link id="m-monomodifier" /><code>{"private MonoModifier monoModifier"}</code> |  |
| <Link id="m-movementplane" /><code>{"private IMovementPlane movementPlane"}</code> |  |
| <Link id="m-path" /><code>{"private Path path"}</code> |  |
| <Link id="m-picknextwaypointdist" /><code>{"private float pickNextWaypointDist"}</code> |  |
| <Link id="m-repathrate" /><code>{"private float repathRate"}</code> |  |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |  |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |  |
| <Link id="m-searchpath" /><code>{"private Coroutine searchPath"}</code> |  |
| <Link id="m-seeker" /><code>{"private Seeker seeker"}</code> |  |
| <Link id="m-sharpturn" /><code>{"private float sharpTurn"}</code> |  |
| <Link id="m-slowdowndistance" /><code>{"private float slowdownDistance"}</code> |  |
| <Link id="m-starthasrun" /><code>{"private bool startHasRun"}</code> |  |
| <Link id="m-target" /><code>{"private Transform target"}</code> |  |
| <Link id="m-targetedposition" /><code>{"private Vector3? targetedPosition"}</code> |  |
| <Link id="m-targetpoint" /><code>{"private Vector3 targetPoint"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |
| <Link id="m-turningperpendicularratio" /><code>{"private float TurningPerpendicularRatio"}</code> |  |
| <Link id="m-verticalvelocity" /><code>{"private float verticalVelocity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-endreacheddistance" /><code>{"float EndReachedDistance { get; set; }"}</code> |  |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> |  |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"void OnDisable()"}</code> |  |
| <Link id="m-onpathcomplete" /><code>{"void OnPathComplete(Path _p)"}</code> |  |
| <Link id="m-startpath" /><code>{"void StartPath()"}</code> |  |
| <Link id="m-trysearchpath" /><code>{"float TrySearchPath()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-initializepath" /><code>{"private void InitializePath()"}</code> |  |
| <Link id="m-move" /><code>{"private void Move(Vector3 position3D, Vector3 deltaPosition)"}</code> |  |
| <Link id="m-movementupdate" /><code>{"protected void MovementUpdate(float deltaTime)"}</code> |  |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> |  |
| <Link id="m-raycastposition" /><code>{"private Vector3 RaycastPosition(Vector3 position, float lastElevation)"}</code> |  |
| <Link id="m-repeattrysearchpath" /><code>{"protected IEnumerator RepeatTrySearchPath() (iterator)"}</code> |  |
| <Link id="m-rotatetowards" /><code>{"private void RotateTowards(Vector2 direction, float maxDegrees)"}</code> |  |
| <Link id="m-searchpath-2" /><code>{"private void SearchPath()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
