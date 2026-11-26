---
title: "VelocityLimit"
description: "Scoring rule on the creature's own speed: one value while its rigidbody is slower than a limit, another when at or above it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocityLimit

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule on the creature's own speed: one value while its rigidbody is slower than a limit, another when at or above it. Made by `CreateTargetOperation.VelocityLimit`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VelocityLimit(float maximimumVelocitySquared, float withinLimitValue, float outsideLimitValue)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-outsidelimitvalue" /><code>{"private float outsideLimitValue"}</code> | Value at or above the limit. |
| <Link id="m-velocitylimitsquared" /><code>{"private float velocityLimitSquared"}</code> | The speed limit, squared. |
| <Link id="m-withinlimitvalue" /><code>{"private float withinLimitValue"}</code> | Value below the limit. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Returns `withinLimitValue` if the rigidbody's squared speed is below the limit, else `outsideLimitValue`. |
