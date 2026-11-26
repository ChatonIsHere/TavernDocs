---
title: "Navigator"
description: "Wraps an A Seeker to plan and follow a path for a creature: it requests paths, tracks the current corners and raises events when a path is found or the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Navigator

A **class** in `Root.Township`, `Alta.Pathfinding`.

Wraps an A* `Seeker` to plan and follow a path for a creature: it requests paths, tracks the current corners and raises events when a path is found or the target is reached. A component used by creature `Director`s and walkers.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding#navigator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Navigator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancetonextpointsquared" /><code>{"private float distanceToNextPointSquared"}</code> | Squared distance to the next corner, checked when a path starts on its final stretch. |
| <Link id="m-funnel" /><code>{"private RichFunnel funnel"}</code> | The current part of the path being followed, if it is a funnel. |
| <Link id="m-islastcorner" /><code>{"private bool isLastCorner"}</code> | True when the funnel reports the next corner is the last one. |
| <Link id="m-isrequestingpath" /><code>{"private bool isRequestingPath"}</code> | Backing field for `IsRequestingPath`. |
| <Link id="m-lastpathrequest" /><code>{"private float lastPathRequest"}</code> | Backing field for `LastPathRequest`. |
| <Link id="m-lasttarget" /><code>{"private Vector3 lastTarget"}</code> | Where the navigator is heading; `RemainingDistance` is measured to it. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-nearestconstraint" /><code>{"private static readonly NNConstraint NearestConstraint"}</code> | Nearest-node constraint with no distance limit. Unused in this build. |
| <Link id="m-path" /><code>{"private RichPath path"}</code> | The A* rich path being followed. |
| <Link id="m-preparingpath" /><code>{"private Path preparingPath"}</code> | The wander search in progress, if any. |
| <Link id="m-targetreacheddistancesquared" /><code>{"private float targetReachedDistanceSquared"}</code> | Backing field for `TargetReachedDistanceSquared`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-corners" /><code>{"List<Vector3> Corners { get; }"}</code> | The next corners of the current path, refreshed by `UpdatePosition`. |
| <Link id="m-followingpoint" /><code>{"Vector3? FollowingPoint { get; private set; }"}</code> | The corner after `NextPoint`, or null if there is none. |
| <Link id="m-gettarget" /><code>{"Func<Vector3> GetTarget { get; set; }"}</code> | Function that gives the target to re-path to when the path goes stale. Defaults to the last requested target. |
| <Link id="m-hasfunnel" /><code>{"bool HasFunnel { get; }"}</code> | Whether there is a current path part to follow. |
| <Link id="m-isfinalstretch" /><code>{"bool IsFinalStretch { get; }"}</code> | True when on the last corner of the last path part. |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> | True when there is no path being followed (stopped, reached, or never started). |
| <Link id="m-isrequestingpath-2" /><code>{"bool IsRequestingPath { get; }"}</code> | True while a path request is waiting for the pathfinder. |
| <Link id="m-lastpathrequest-2" /><code>{"float LastPathRequest { get; }"}</code> | `Time.time` of the last navigate or wander request. |
| <Link id="m-nextpoint" /><code>{"Vector3 NextPoint { get; private set; }"}</code> | The next corner to walk towards, refreshed by `UpdatePosition`. |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> | The current position clamped to the path, refreshed by `UpdatePosition`. |
| <Link id="m-remainingdistance" /><code>{"float RemainingDistance { get; }"}</code> | Straight-line distance from here to the last target. |
| <Link id="m-remainingdistancesquared" /><code>{"float RemainingDistanceSquared { get; }"}</code> | Squared straight-line distance to the target, or 0 when finished and not requesting. |
| <Link id="m-seeker" /><code>{"Seeker Seeker { get; private set; }"}</code> | The A* `Seeker` on the same object. |
| <Link id="m-targetfacing" /><code>{"Vector3? TargetFacing { get; set; }"}</code> | Optional direction to face once at the target. Set by callers; not used inside this class. |
| <Link id="m-targetreacheddistancesquared-2" /><code>{"float TargetReachedDistanceSquared { get; }"}</code> | Squared distance at which the target counts as reached, from the last request. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pathfindfailed" /><code>{"event Action PathFindFailed"}</code> | Raised when a path request fails or a wander finds no nodes. |
| <Link id="m-pathfindsucceeded" /><code>{"event Action PathFindSucceeded"}</code> | Raised when a path has been found and started. |
| <Link id="m-targetreached" /><code>{"event Action TargetReached"}</code> | Raised when the path finishes, including when stopped or teleported mid-path. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"bool Clamp(ref Vector3 position)"}</code> | Clamps a position onto the current navmesh node in XZ. Returns false if there is no current path node. |
| <Link id="m-continuepath" /><code>{"void ContinuePath()"}</code> | Moves on to the next part of the path, finishing (and raising `TargetReached`) if all parts are done. |
| <Link id="m-getwalls" /><code>{"void GetWalls(List<Vector3> wallBuffer, float range)"}</code> | Fills the buffer with navmesh wall segments within range of the current path position. |
| <Link id="m-navigateto" /><code>{"void NavigateTo(Vector3 position, float targetReachedDistance = 0.1)"}</code> | Requests a path to a position. Finishes at once if already within the reached distance. |
| <Link id="m-resetposition" /><code>{"void ResetPosition()"}</code> | Zeroes the local position and rotation and teleports the navigator there. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Cancels any pending request and finishes the current path, raising `TargetReached` if one was running. |
| <Link id="m-teleportto" /><code>{"Vector3 TeleportTo(Vector3 position, bool isSnappingY)"}</code> | Drops the current path and finishes at the position. Without Y snapping only X and Z of the target change. |
| <Link id="m-updateposition" /><code>{"void UpdatePosition()"}</code> | Advances along the current path part, refreshing `Position`, `Corners`, `NextPoint` and `FollowingPoint`; re-paths if needed. |
| <Link id="m-wander" /><code>{"void Wander(Vector3 near, int searchLength, Vector3 idealDirection, int bestOf, float targetReachedDistance = 0.1)"}</code> | Picks a random reachable point within a search length (optionally the best of several towards a direction) and paths there. |
| <Link id="m-wander-2" /><code>{"void Wander(Vector3 near, int searchLength, float targetReachedDistance = 0.1)"}</code> | Picks a random reachable point within a search length (optionally the best of several towards a direction) and paths there. |
| <Link id="m-wander-4" /><code>{"void Wander(int searchLength, float targetReachedDistance = 0.2)"}</code> | Picks a random reachable point within a search length (optionally the best of several towards a direction) and paths there. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Grabs the `Seeker` on the same object and sets `GetTarget` to return the last target. |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Stops any path and unhooks from the seeker. |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | Hooks the seeker's path callback. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelrequest" /><code>{"private void CancelRequest()"}</code> | Cancels any pending path or wander search and clears its callback. |
| <Link id="m-finish" /><code>{"private void Finish()"}</code> | Marks navigation finished and fires `TargetReached`, if it wasn't already finished. |
| <Link id="m-getlasttarget" /><code>{"private Vector3 GetLastTarget()"}</code> | Default `GetTarget`: returns the last requested target. |
| <Link id="m-onpathfindfailed" /><code>{"private void OnPathFindFailed(Path path)"}</code> | Fires `PathFindFailed`. |
| <Link id="m-pathfound" /><code>{"private void PathFound(Path path)"}</code> | Seeker callback: starts following the path, or fires `PathFindFailed` on error. |
| <Link id="m-startpath" /><code>{"private void StartPath(Path standardPath)"}</code> | Loads a found path into the rich path, sets up the first funnel and fires `PathFindSucceeded`. |
| <Link id="m-wander-3" /><code>{"private void Wander(Vector3 near, int searchLength, float targetReachedDistance, OnPathDelegate callback)"}</code> | Picks a random reachable point within a search length (optionally the best of several towards a direction) and paths there. |
| <Link id="m-wanderto" /><code>{"private void WanderTo(Path path)"}</code> | Wander callback: picks a reachable point from the search and paths to it. |

</details>

## Used in

Members of other types that take, return or hold a `Navigator`:

[`Director.navigator`](/game-api/types/alta-intelligence/director#m-navigator), [`Director.Navigator`](/game-api/types/alta-intelligence/director#m-navigator-2), [`Follower.Follower`](/game-api/types/alta-intelligence/follower#m-ctor), [`Follower.navigator`](/game-api/types/alta-intelligence/follower#m-navigator), [`IndependentWalker.navigator`](/game-api/types/alta-intelligence/independentwalker#m-navigator), [`Walker.navigator`](/game-api/types/alta-intelligence/walker#m-navigator).
