---
title: "Grounded"
description: "Scoring rule on the creature itself, not the target: one value when its walker is grounded, another when it's in the air."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Grounded

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule on the creature itself, not the target: one value when its walker is grounded, another when it's in the air. Made by `CreateTargetOperation.Grounded`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Grounded(float groundedValue, float airValue)"}</code> | <span className="api-desc">Creates a `Grounded` from `groundedValue` and `airValue`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-airvalue" /><code>{"private float airValue"}</code> | <span className="api-desc">Value when not grounded.</span> |
| <Link id="m-groundedvalue" /><code>{"private float groundedValue"}</code> | <span className="api-desc">Value when grounded.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Returns `groundedValue` if the creature's walker is grounded, else `airValue`. Needs a walker.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Shows the two values.</span> |
