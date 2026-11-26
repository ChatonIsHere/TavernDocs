---
title: "Director"
description: "The high level movement control for a creature: walk to a point, follow a target, wander or teleport."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Director

A **class** in `Root.Township`, `Alta.Pathfinding`.

The high level movement control for a creature: walk to a point, follow a target, wander or teleport. Drives the `Navigator` in its parents.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/mod/game-api/creatures/movement-and-pathfinding#director)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Director()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-follower" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/follower">{"Follower"}</Link>{" follower"}</code> | Private: handles `Follow`, re-pathing to a moving target. |
| <Link id="m-navigator" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> | Backing field for `Navigator`. |
| <Link id="m-reevaluationinterval" /><code>{"private float reevaluationInterval"}</code> | Seconds between path updates while following a target. Defaults to 0.5. |
| <Link id="m-topic" /><code>{"private Rigidbody topic"}</code> | The rigidbody moved by `TeleportTo`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-navigator-2" /><code><Link to="/mod/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" { get; }"}</code> | The navigator that finds and walks paths. |
| <Link id="m-targetfacing" /><code>{"Vector3? TargetFacing { get; set; }"}</code> | A direction the creature should face when it arrives, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-follow" /><code>{"void Follow("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float targetReachedDistance)"}</code> | Keeps walking toward a moving target, rechecking the path every half second by default. |
| <Link id="m-follow-2" /><code>{"void Follow("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Keeps walking toward a moving target, rechecking the path every half second by default. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Stops following and navigating. |
| <Link id="m-teleportto" /><code>{"void TeleportTo(Transform target)"}</code> | Moves the creature's Rigidbody to a valid spot near the position, optionally snapping to the ground height. |
| <Link id="m-teleportto-2" /><code>{"void TeleportTo(Vector3 position)"}</code> | Moves the creature's Rigidbody to a valid spot near the position, optionally snapping to the ground height. |
| <Link id="m-teleportto-3" /><code>{"void TeleportTo(Vector3 position, bool isSnappingY)"}</code> | Moves the creature's Rigidbody to a valid spot near the position, optionally snapping to the ground height. |
| <Link id="m-walkto" /><code>{"void WalkTo(Transform target, float targetReachedDistance)"}</code> | Stops following and walks to a point or a transform's current position, optionally within a reach distance. |
| <Link id="m-walkto-2" /><code>{"void WalkTo(Transform target)"}</code> | Stops following and walks to a point or a transform's current position, optionally within a reach distance. |
| <Link id="m-walkto-3" /><code>{"void WalkTo(Vector3 position, float targetReachedDistance)"}</code> | Stops following and walks to a point or a transform's current position, optionally within a reach distance. |
| <Link id="m-walkto-4" /><code>{"void WalkTo(Vector3 position)"}</code> | Stops following and walks to a point or a transform's current position, optionally within a reach distance. |
| <Link id="m-wander" /><code>{"void Wander(Vector3 near, int searchLength, Vector3 idealDirection, int bestOf = 1)"}</code> | Stops following and walks to a random nearby spot, optionally near a point and toward a direction. |
| <Link id="m-wander-2" /><code>{"void Wander(Vector3 near, int searchLength)"}</code> | Stops following and walks to a random nearby spot, optionally near a point and toward a direction. |
| <Link id="m-wander-3" /><code>{"void Wander(int searchLength)"}</code> | Stops following and walks to a random nearby spot, optionally near a point and toward a direction. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `Navigator` in the parents and makes a `Follower` for it. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Private: stops all movement. |

</details>

## Used in

Members of other types that take, return or hold a `Director`:

[`Agent.director`](/mod/game-api/types/alta-intelligence/agent#m-director), [`Agent.Director`](/mod/game-api/types/alta-intelligence/agent#m-director-2), [`IAgent.Director`](/mod/game-api/types/alta-intelligence/iagent#m-director).
