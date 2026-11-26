---
title: "Chance"
description: "Scoring rule that rolls a dice on every evaluation: returns success with probability chance, otherwise failure."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chance

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule that rolls a dice on every evaluation: returns `success` with probability `chance`, otherwise `failure`. Made by `CreateTargetOperation.Chance`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Chance(float chance, float success = 1, float failure = 0)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"private float chance"}</code> | Probability of success, 0 to 1. |
| <Link id="m-failure" /><code>{"private float failure"}</code> | Value returned on a failed roll (default 0). |
| <Link id="m-success" /><code>{"private float success"}</code> | Value returned on a successful roll (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Rolls `Random.value` and returns `success` if it's below `chance`, else `failure`. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns "Chance". |
