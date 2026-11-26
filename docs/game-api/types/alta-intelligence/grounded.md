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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Grounded(float groundedValue, float airValue)"}</code> | Creates a `Grounded` from `groundedValue` and `airValue`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-airvalue" /><code>{"private float airValue"}</code> | Value when not grounded. |
| <Link id="m-groundedvalue" /><code>{"private float groundedValue"}</code> | Value when grounded. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Returns `groundedValue` if the creature's walker is grounded, else `airValue`. Needs a walker. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the two values. |
