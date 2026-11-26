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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Chance(float chance, float success = 1, float failure = 0)"}</code> | <span className="api-desc">Creates a `Chance` from `chance`, `success` and `failure`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"private float chance"}</code> | <span className="api-desc">Probability of success, 0 to 1.</span> |
| <Link id="m-failure" /><code>{"private float failure"}</code> | <span className="api-desc">Value returned on a failed roll (default 0).</span> |
| <Link id="m-success" /><code>{"private float success"}</code> | <span className="api-desc">Value returned on a successful roll (default 1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Rolls `Random.value` and returns `success` if it's below `chance`, else `failure`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns "Chance".</span> |
