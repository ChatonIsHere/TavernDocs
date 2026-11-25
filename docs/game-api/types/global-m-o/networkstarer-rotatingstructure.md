---
title: "NetworkStarer.RotatingStructure"
description: "class NetworkStarer.RotatingStructure in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.RotatingStructure

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/game-api/types/global-m-o/networkstarer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RotatingStructure()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-joints" /><code>{"private "}<Link to="/game-api/types/global-m-o/networkstarer-rotatingjoint">{"NetworkStarer.RotatingJoint"}</Link>{"[] joints"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-base" /><code><Link to="/game-api/types/global-m-o/networkstarer-rotatingjoint">{"NetworkStarer.RotatingJoint"}</Link>{" Base { get; }"}</code> |
| <Link id="m-jointlength" /><code>{"int JointLength { get; private set; }"}</code> |
| <Link id="m-maxangle" /><code>{"float MaxAngle { get; private set; }"}</code> |
| <Link id="m-root" /><code>{"Transform Root { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |
| <Link id="m-rotate" /><code>{"bool Rotate(Vector3 headDirection)"}</code> |

## Used in

Members of other types that take, return or hold a `RotatingStructure`:

[`NetworkStarer.neck`](/game-api/types/global-m-o/networkstarer#m-neck).
