---
title: "SameTarget"
description: "Scoring rule that returns one value if the target is the creature's current target and another if not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SameTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule that returns one value if the target is the creature's current target and another if not. Used to make creatures stick to or switch targets.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SameTarget(float sameValue, float differentValue = 1)"}</code> | <span className="api-desc">Creates a `SameTarget` from `sameValue` and `differentValue`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-differentvalue" /><code>{"private float differentValue"}</code> | <span className="api-desc">Value for any other target.</span> |
| <Link id="m-samevalue" /><code>{"private float sameValue"}</code> | <span className="api-desc">Value for the current target.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Returns `sameValue` if the target is `agent.Target`, else `differentValue`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Shows the two values.</span> |
