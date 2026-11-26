---
title: "NetworkStarer.RotatingStructure"
description: "A chain of neck joints that NetworkStarer bends towards its target, each joint taking up to its own maximum angle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.RotatingStructure

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A chain of neck joints that `NetworkStarer` bends towards its target, each joint taking up to its own maximum angle.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/mod/game-api/types/global-m-o/networkstarer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotatingStructure()"}</code> | <span className="api-desc">Creates a `NetworkStarer.RotatingStructure` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-joints" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/networkstarer-rotatingjoint">{"NetworkStarer.RotatingJoint"}</Link>{"[] joints"}</code> | <span className="api-desc">The joints in the chain, first joint first.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-base" /><code><Link to="/mod/game-api/types/global-m-o/networkstarer-rotatingjoint">{"NetworkStarer.RotatingJoint"}</Link>{" Base { get; }"}</code> | <span className="api-desc">The last joint in the chain.</span> |
| <Link id="m-jointlength" /><code>{"int JointLength { get; private set; }"}</code> | <span className="api-desc">How many joints are in the chain.</span> |
| <Link id="m-maxangle" /><code>{"float MaxAngle { get; private set; }"}</code> | <span className="api-desc">The total angle the chain can turn: the sum of every joint's maximum.</span> |
| <Link id="m-root" /><code>{"Transform Root { get; private set; }"}</code> | <span className="api-desc">The transform of the first joint.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Records each joint's starting rotation and sums their maximum angles. Called from `NetworkStarer.Awake`.</span> |
| <Link id="m-rotate" /><code>{"bool Rotate(Vector3 headDirection)"}</code> | <span className="api-desc">Spreads the turn towards a direction along the joints. Returns true if the turn needed more than all joints allow.</span> |

## Used in

Members of other types that take, return or hold a `RotatingStructure`:

<div className="api-used-in">

[`NetworkStarer.neck`](/mod/game-api/types/global-m-o/networkstarer#m-neck).

</div>
