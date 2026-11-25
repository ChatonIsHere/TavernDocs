---
title: "Director"
description: "Finds its Navigator in its parents on Awake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Director

A **class** in `Root.Township`, `Alta.Pathfinding`.

Finds its `Navigator` in its parents on `Awake`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding#director)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Director()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-follower" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/follower">{"Follower"}</Link>{" follower"}</code> |  |
| <Link id="m-navigator" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> |  |
| <Link id="m-reevaluationinterval" /><code>{"private float reevaluationInterval"}</code> |  |
| <Link id="m-topic" /><code>{"private Rigidbody topic"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-navigator-2" /><code><Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" { get; }"}</code> |  |
| <Link id="m-targetfacing" /><code>{"Vector3? TargetFacing { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-follow" /><code>{"void Follow("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float targetReachedDistance)"}</code> |  |
| <Link id="m-follow-2" /><code>{"void Follow("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-teleportto" /><code>{"void TeleportTo(Transform target)"}</code> |  |
| <Link id="m-teleportto-2" /><code>{"void TeleportTo(Vector3 position)"}</code> |  |
| <Link id="m-teleportto-3" /><code>{"void TeleportTo(Vector3 position, bool isSnappingY)"}</code> |  |
| <Link id="m-walkto" /><code>{"void WalkTo(Transform target, float targetReachedDistance)"}</code> |  |
| <Link id="m-walkto-2" /><code>{"void WalkTo(Transform target)"}</code> |  |
| <Link id="m-walkto-3" /><code>{"void WalkTo(Vector3 position, float targetReachedDistance)"}</code> |  |
| <Link id="m-walkto-4" /><code>{"void WalkTo(Vector3 position)"}</code> |  |
| <Link id="m-wander" /><code>{"void Wander(Vector3 near, int searchLength, Vector3 idealDirection, int bestOf = 1)"}</code> |  |
| <Link id="m-wander-2" /><code>{"void Wander(Vector3 near, int searchLength)"}</code> |  |
| <Link id="m-wander-3" /><code>{"void Wander(int searchLength)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Director`:

[`Agent.director`](/game-api/types/alta-intelligence/agent#m-director), [`Agent.Director`](/game-api/types/alta-intelligence/agent#m-director-2), [`IAgent.Director`](/game-api/types/alta-intelligence/iagent#m-director).
