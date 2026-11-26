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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`AgentRollUpInPlace`](/game-api/types/alta-intelligence/agentrollupinplace)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Point(Vector3 point)"}</code> |
| <Link id="m-ctor-2" /><code>{"Point(Vector3 point, Vector3 normal)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasnormal" /><code>{"bool hasNormal"}</code> | True when `normal` holds a real surface normal from a raycast. |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | Surface normal at the point, if known. |
| <Link id="m-point" /><code>{"Vector3 point"}</code> | The contact position. |

## Used in

Members of other types that take, return or hold a `Point`:

[`AgentRollUpInPlace.GetClosestPoint`](/game-api/types/alta-intelligence/agentrollupinplace#m-getclosestpoint).
