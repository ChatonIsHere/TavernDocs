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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SameTarget(float sameValue, float differentValue = 1)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-differentvalue" /><code>{"private float differentValue"}</code> | Value for any other target. |
| <Link id="m-samevalue" /><code>{"private float sameValue"}</code> | Value for the current target. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Returns `sameValue` if the target is `agent.Target`, else `differentValue`. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the two values. |
