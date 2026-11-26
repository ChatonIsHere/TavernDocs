---
title: "RVOBlockedValue"
description: "Scoring rule on whether the creature's walker is blocked by local avoidance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RVOBlockedValue

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule on whether the creature's walker is blocked by local avoidance. Made by `CreateTargetOperation.RVOBlocked`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RVOBlockedValue(float unblocked, float blocked)"}</code> | Creates a `RVOBlockedValue` from `unblocked` and `blocked`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blocked" /><code>{"private float blocked"}</code> | Value when blocked. |
| <Link id="m-unblocked" /><code>{"private float unblocked"}</code> | Value when not blocked, or when the creature has no walker. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Returns `blocked` if the creature has a walker and it's blocked, otherwise `unblocked`. |
