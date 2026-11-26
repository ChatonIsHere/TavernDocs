---
title: "AgentRollUpInPlace.Point"
description: "A ground contact point found while working out how a fallen agent should turn upright, with an optional surface normal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentRollUpInPlace.Point

A **private struct** in `Root.Township`, `Alta.Intelligence`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A ground contact point found while working out how a fallen agent should turn upright, with an optional surface normal.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`AgentRollUpInPlace`](/mod/game-api/types/alta-intelligence/agentrollupinplace)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Point(Vector3 point)"}</code> | <span className="api-desc">Creates an `AgentRollUpInPlace.Point` from `point` and `normal`.</span> |
| <Link id="m-ctor-2" /><code>{"Point(Vector3 point, Vector3 normal)"}</code> | <span className="api-desc">Creates an `AgentRollUpInPlace.Point` from `point` and `normal`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasnormal" /><code>{"bool hasNormal"}</code> | <span className="api-desc">True when `normal` holds a real surface normal from a raycast.</span> |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | <span className="api-desc">Surface normal at the point, if known.</span> |
| <Link id="m-point" /><code>{"Vector3 point"}</code> | <span className="api-desc">The contact position.</span> |

## Used in

Members of other types that take, return or hold a `Point`:

<div className="api-used-in">

[`AgentRollUpInPlace.GetClosestPoint`](/mod/game-api/types/alta-intelligence/agentrollupinplace#m-getclosestpoint).

</div>
