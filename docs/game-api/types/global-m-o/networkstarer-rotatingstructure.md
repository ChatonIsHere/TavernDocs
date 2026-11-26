---
title: "NetworkStarer.RotatingStructure"
description: "A chain of neck joints that NetworkStarer bends towards its target, each joint taking up to its own maximum angle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.RotatingStructure

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A chain of neck joints that `NetworkStarer` bends towards its target, each joint taking up to its own maximum angle.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/game-api/types/global-m-o/networkstarer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotatingStructure()"}</code> | Creates a `NetworkStarer.RotatingStructure` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-joints" /><code>{"private "}<Link to="/game-api/types/global-m-o/networkstarer-rotatingjoint">{"NetworkStarer.RotatingJoint"}</Link>{"[] joints"}</code> | The joints in the chain, first joint first. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-base" /><code><Link to="/game-api/types/global-m-o/networkstarer-rotatingjoint">{"NetworkStarer.RotatingJoint"}</Link>{" Base { get; }"}</code> | The last joint in the chain. |
| <Link id="m-jointlength" /><code>{"int JointLength { get; private set; }"}</code> | How many joints are in the chain. |
| <Link id="m-maxangle" /><code>{"float MaxAngle { get; private set; }"}</code> | The total angle the chain can turn: the sum of every joint's maximum. |
| <Link id="m-root" /><code>{"Transform Root { get; private set; }"}</code> | The transform of the first joint. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Records each joint's starting rotation and sums their maximum angles. Called from `NetworkStarer.Awake`. |
| <Link id="m-rotate" /><code>{"bool Rotate(Vector3 headDirection)"}</code> | Spreads the turn towards a direction along the joints. Returns true if the turn needed more than all joints allow. |

## Used in

Members of other types that take, return or hold a `RotatingStructure`:

[`NetworkStarer.neck`](/game-api/types/global-m-o/networkstarer#m-neck).
