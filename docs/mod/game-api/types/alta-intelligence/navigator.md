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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/mod/game-api/creatures/movement-and-pathfinding#navigator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Navigator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancetonextpointsquared" /><code>{"private float distanceToNextPointSquared"}</code> | <span className="api-desc">Squared distance to the next corner, checked when a path starts on its final stretch.</span> |
| <Link id="m-funnel" /><code>{"private RichFunnel funnel"}</code> | <span className="api-desc">The current part of the path being followed, if it is a funnel.</span> |
| <Link id="m-islastcorner" /><code>{"private bool isLastCorner"}</code> | <span className="api-desc">True when the funnel reports the next corner is the last one.</span> |
| <Link id="m-isrequestingpath" /><code>{"private bool isRequestingPath"}</code> | <span className="api-desc">Backing field for `IsRequestingPath`.</span> |
| <Link id="m-lastpathrequest" /><code>{"private float lastPathRequest"}</code> | <span className="api-desc">Backing field for `LastPathRequest`.</span> |
| <Link id="m-lasttarget" /><code>{"private Vector3 lastTarget"}</code> | <span className="api-desc">Where the navigator is heading; `RemainingDistance` is measured to it.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-nearestconstraint" /><code>{"private static readonly NNConstraint NearestConstraint"}</code> | <span className="api-desc">Nearest-node constraint with no distance limit. Unused in this build.</span> |
| <Link id="m-path" /><code>{"private RichPath path"}</code> | <span className="api-desc">The A* rich path being followed.</span> |
| <Link id="m-preparingpath" /><code>{"private Path preparingPath"}</code> | <span className="api-desc">The wander search in progress, if any.</span> |
| <Link id="m-targetreacheddistancesquared" /><code>{"private float targetReachedDistanceSquared"}</code> | <span className="api-desc">Backing field for `TargetReachedDistanceSquared`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-corners" /><code>{"List<Vector3> Corners { get; }"}</code> | <span className="api-desc">The next corners of the current path, refreshed by `UpdatePosition`.</span> |
| <Link id="m-followingpoint" /><code>{"Vector3? FollowingPoint { get; private set; }"}</code> | <span className="api-desc">The corner after `NextPoint`, or null if there is none.</span> |
| <Link id="m-gettarget" /><code>{"Func<Vector3> GetTarget { get; set; }"}</code> | <span className="api-desc">Function that gives the target to re-path to when the path goes stale. Defaults to the last requested target.</span> |
| <Link id="m-hasfunnel" /><code>{"bool HasFunnel { get; }"}</code> | <span className="api-desc">Whether there is a current path part to follow.</span> |
| <Link id="m-isfinalstretch" /><code>{"bool IsFinalStretch { get; }"}</code> | <span className="api-desc">True when on the last corner of the last path part.</span> |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> | <span className="api-desc">True when there is no path being followed (stopped, reached, or never started).</span> |
| <Link id="m-isrequestingpath-2" /><code>{"bool IsRequestingPath { get; }"}</code> | <span className="api-desc">True while a path request is waiting for the pathfinder.</span> |
| <Link id="m-lastpathrequest-2" /><code>{"float LastPathRequest { get; }"}</code> | <span className="api-desc">`Time.time` of the last navigate or wander request.</span> |
| <Link id="m-nextpoint" /><code>{"Vector3 NextPoint { get; private set; }"}</code> | <span className="api-desc">The next corner to walk towards, refreshed by `UpdatePosition`.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> | <span className="api-desc">The current position clamped to the path, refreshed by `UpdatePosition`.</span> |
| <Link id="m-remainingdistance" /><code>{"float RemainingDistance { get; }"}</code> | <span className="api-desc">Straight-line distance from here to the last target.</span> |
| <Link id="m-remainingdistancesquared" /><code>{"float RemainingDistanceSquared { get; }"}</code> | <span className="api-desc">Squared straight-line distance to the target, or 0 when finished and not requesting.</span> |
| <Link id="m-seeker" /><code>{"Seeker Seeker { get; private set; }"}</code> | <span className="api-desc">The A* `Seeker` on the same object.</span> |
| <Link id="m-targetfacing" /><code>{"Vector3? TargetFacing { get; set; }"}</code> | <span className="api-desc">Optional direction to face once at the target. Set by callers; not used inside this class.</span> |
| <Link id="m-targetreacheddistancesquared-2" /><code>{"float TargetReachedDistanceSquared { get; }"}</code> | <span className="api-desc">Squared distance at which the target counts as reached, from the last request.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pathfindfailed" /><code>{"event Action PathFindFailed"}</code> | <span className="api-desc">Raised when a path request fails or a wander finds no nodes.</span> |
| <Link id="m-pathfindsucceeded" /><code>{"event Action PathFindSucceeded"}</code> | <span className="api-desc">Raised when a path has been found and started.</span> |
| <Link id="m-targetreached" /><code>{"event Action TargetReached"}</code> | <span className="api-desc">Raised when the path finishes, including when stopped or teleported mid-path.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"bool Clamp(ref Vector3 position)"}</code> | <span className="api-desc">Clamps a position onto the current navmesh node in XZ. Returns false if there is no current path node.</span> |
| <Link id="m-continuepath" /><code>{"void ContinuePath()"}</code> | <span className="api-desc">Moves on to the next part of the path, finishing (and raising `TargetReached`) if all parts are done.</span> |
| <Link id="m-getwalls" /><code>{"void GetWalls(List<Vector3> wallBuffer, float range)"}</code> | <span className="api-desc">Fills the buffer with navmesh wall segments within range of the current path position.</span> |
| <Link id="m-navigateto" /><code>{"void NavigateTo(Vector3 position, float targetReachedDistance = 0.1)"}</code> | <span className="api-desc">Requests a path to a position. Finishes at once if already within the reached distance.</span> |
| <Link id="m-resetposition" /><code>{"void ResetPosition()"}</code> | <span className="api-desc">Zeroes the local position and rotation and teleports the navigator there.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Cancels any pending request and finishes the current path, raising `TargetReached` if one was running.</span> |
| <Link id="m-teleportto" /><code>{"Vector3 TeleportTo(Vector3 position, bool isSnappingY)"}</code> | <span className="api-desc">Drops the current path and finishes at the position. Without Y snapping only X and Z of the target change.</span> |
| <Link id="m-updateposition" /><code>{"void UpdatePosition()"}</code> | <span className="api-desc">Advances along the current path part, refreshing `Position`, `Corners`, `NextPoint` and `FollowingPoint`; re-paths if needed.</span> |
| <Link id="m-wander" /><code>{"void Wander(Vector3 near, int searchLength, Vector3 idealDirection, int bestOf, float targetReachedDistance = 0.1)"}</code> | <span className="api-desc">Picks a random reachable point within a search length (optionally the best of several towards a direction) and paths there.</span> |
| <Link id="m-wander-2" /><code>{"void Wander(Vector3 near, int searchLength, float targetReachedDistance = 0.1)"}</code> | <span className="api-desc">Picks a random reachable point within a search length (optionally the best of several towards a direction) and paths there.</span> |
| <Link id="m-wander-4" /><code>{"void Wander(int searchLength, float targetReachedDistance = 0.2)"}</code> | <span className="api-desc">Picks a random reachable point within a search length (optionally the best of several towards a direction) and paths there.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Grabs the `Seeker` on the same object and sets `GetTarget` to return the last target.</span> |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | <span className="api-desc">Stops any path and unhooks from the seeker.</span> |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | <span className="api-desc">Hooks the seeker's path callback.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelrequest" /><code>{"private void CancelRequest()"}</code> | <span className="api-desc">Cancels any pending path or wander search and clears its callback.</span> |
| <Link id="m-finish" /><code>{"private void Finish()"}</code> | <span className="api-desc">Marks navigation finished and fires `TargetReached`, if it wasn't already finished.</span> |
| <Link id="m-getlasttarget" /><code>{"private Vector3 GetLastTarget()"}</code> | <span className="api-desc">Default `GetTarget`: returns the last requested target.</span> |
| <Link id="m-onpathfindfailed" /><code>{"private void OnPathFindFailed(Path path)"}</code> | <span className="api-desc">Fires `PathFindFailed`.</span> |
| <Link id="m-pathfound" /><code>{"private void PathFound(Path path)"}</code> | <span className="api-desc">Seeker callback: starts following the path, or fires `PathFindFailed` on error.</span> |
| <Link id="m-startpath" /><code>{"private void StartPath(Path standardPath)"}</code> | <span className="api-desc">Loads a found path into the rich path, sets up the first funnel and fires `PathFindSucceeded`.</span> |
| <Link id="m-wander-3" /><code>{"private void Wander(Vector3 near, int searchLength, float targetReachedDistance, OnPathDelegate callback)"}</code> | <span className="api-desc">Picks a random reachable point within a search length (optionally the best of several towards a direction) and paths there.</span> |
| <Link id="m-wanderto" /><code>{"private void WanderTo(Path path)"}</code> | <span className="api-desc">Wander callback: picks a reachable point from the search and paths to it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Navigator`:

<div className="api-used-in">

[`Director.navigator`](/mod/game-api/types/alta-intelligence/director#m-navigator), [`Director.Navigator`](/mod/game-api/types/alta-intelligence/director#m-navigator-2), [`Follower.Follower`](/mod/game-api/types/alta-intelligence/follower#m-ctor), [`Follower.navigator`](/mod/game-api/types/alta-intelligence/follower#m-navigator), [`IndependentWalker.navigator`](/mod/game-api/types/alta-intelligence/independentwalker#m-navigator), [`Walker.navigator`](/mod/game-api/types/alta-intelligence/walker#m-navigator).

</div>
