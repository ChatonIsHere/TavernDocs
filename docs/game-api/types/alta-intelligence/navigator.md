---
title: "Navigator"
description: "A MonoBehaviour that needs a Seeker on the same GameObject."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Navigator

A **class** in `Root.Township`, `Alta.Pathfinding`.

A `MonoBehaviour` that needs a `Seeker` on the same GameObject.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding#navigator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Navigator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distancetonextpointsquared" /><code>{"private float distanceToNextPointSquared"}</code> |  |
| <Link id="m-funnel" /><code>{"private RichFunnel funnel"}</code> |  |
| <Link id="m-islastcorner" /><code>{"private bool isLastCorner"}</code> |  |
| <Link id="m-isrequestingpath" /><code>{"private bool isRequestingPath"}</code> |  |
| <Link id="m-lastpathrequest" /><code>{"private float lastPathRequest"}</code> |  |
| <Link id="m-lasttarget" /><code>{"private Vector3 lastTarget"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-nearestconstraint" /><code>{"private static readonly NNConstraint NearestConstraint"}</code> |  |
| <Link id="m-path" /><code>{"private RichPath path"}</code> |  |
| <Link id="m-preparingpath" /><code>{"private Path preparingPath"}</code> |  |
| <Link id="m-targetreacheddistancesquared" /><code>{"private float targetReachedDistanceSquared"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-corners" /><code>{"List<Vector3> Corners { get; }"}</code> |  |
| <Link id="m-followingpoint" /><code>{"Vector3? FollowingPoint { get; private set; }"}</code> |  |
| <Link id="m-gettarget" /><code>{"Func<Vector3> GetTarget { get; set; }"}</code> |  |
| <Link id="m-hasfunnel" /><code>{"bool HasFunnel { get; }"}</code> |  |
| <Link id="m-isfinalstretch" /><code>{"bool IsFinalStretch { get; }"}</code> |  |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> |  |
| <Link id="m-isrequestingpath-2" /><code>{"bool IsRequestingPath { get; }"}</code> |  |
| <Link id="m-lastpathrequest-2" /><code>{"float LastPathRequest { get; }"}</code> |  |
| <Link id="m-nextpoint" /><code>{"Vector3 NextPoint { get; private set; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> |  |
| <Link id="m-remainingdistance" /><code>{"float RemainingDistance { get; }"}</code> |  |
| <Link id="m-remainingdistancesquared" /><code>{"float RemainingDistanceSquared { get; }"}</code> |  |
| <Link id="m-seeker" /><code>{"Seeker Seeker { get; private set; }"}</code> |  |
| <Link id="m-targetfacing" /><code>{"Vector3? TargetFacing { get; set; }"}</code> |  |
| <Link id="m-targetreacheddistancesquared-2" /><code>{"float TargetReachedDistanceSquared { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pathfindfailed" /><code>{"event Action PathFindFailed"}</code> |  |
| <Link id="m-pathfindsucceeded" /><code>{"event Action PathFindSucceeded"}</code> |  |
| <Link id="m-targetreached" /><code>{"event Action TargetReached"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"bool Clamp(ref Vector3 position)"}</code> |  |
| <Link id="m-continuepath" /><code>{"void ContinuePath()"}</code> |  |
| <Link id="m-getwalls" /><code>{"void GetWalls(List<Vector3> wallBuffer, float range)"}</code> |  |
| <Link id="m-navigateto" /><code>{"void NavigateTo(Vector3 position, float targetReachedDistance = 0.1)"}</code> |  |
| <Link id="m-resetposition" /><code>{"void ResetPosition()"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-teleportto" /><code>{"Vector3 TeleportTo(Vector3 position, bool isSnappingY)"}</code> |  |
| <Link id="m-updateposition" /><code>{"void UpdatePosition()"}</code> |  |
| <Link id="m-wander" /><code>{"void Wander(Vector3 near, int searchLength, Vector3 idealDirection, int bestOf, float targetReachedDistance = 0.1)"}</code> |  |
| <Link id="m-wander-2" /><code>{"void Wander(Vector3 near, int searchLength, float targetReachedDistance = 0.1)"}</code> |  |
| <Link id="m-wander-4" /><code>{"void Wander(int searchLength, float targetReachedDistance = 0.2)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-cancelrequest" /><code>{"private void CancelRequest()"}</code> |  |
| <Link id="m-finish" /><code>{"private void Finish()"}</code> |  |
| <Link id="m-getlasttarget" /><code>{"private Vector3 GetLastTarget()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> |  |
| <Link id="m-onpathfindfailed" /><code>{"private void OnPathFindFailed(Path path)"}</code> |  |
| <Link id="m-pathfound" /><code>{"private void PathFound(Path path)"}</code> |  |
| <Link id="m-startpath" /><code>{"private void StartPath(Path standardPath)"}</code> |  |
| <Link id="m-wander-3" /><code>{"private void Wander(Vector3 near, int searchLength, float targetReachedDistance, OnPathDelegate callback)"}</code> |  |
| <Link id="m-wanderto" /><code>{"private void WanderTo(Path path)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Navigator`:

[`Director.navigator`](/game-api/types/alta-intelligence/director#m-navigator), [`Director.Navigator`](/game-api/types/alta-intelligence/director#m-navigator-2), [`Follower.Follower`](/game-api/types/alta-intelligence/follower#m-ctor), [`Follower.navigator`](/game-api/types/alta-intelligence/follower#m-navigator), [`IndependentWalker.navigator`](/game-api/types/alta-intelligence/independentwalker#m-navigator), [`Walker.navigator`](/game-api/types/alta-intelligence/walker#m-navigator).
