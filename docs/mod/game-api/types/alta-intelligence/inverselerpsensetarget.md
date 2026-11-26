---
title: "InverseLerpSenseTarget"
description: "Scoring rule that reads a sense of the target, mapped onto 0 to 1."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InverseLerpSenseTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule that reads a sense of the target, mapped onto 0 to 1. Made by `CreateTargetOperation.Sense`; most scoring rules on prefabs end up as this.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InverseLerpSenseTarget("}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense, float from, float to)"}</code> | <span className="api-desc">Creates an `InverseLerpSenseTarget` from `sense`, `from` and `to`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | <span className="api-desc">Sense value that maps to 0.</span> |
| <Link id="m-sense" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense"}</code> | <span className="api-desc">The sense asset read.</span> |
| <Link id="m-to" /><code>{"private float to"}</code> | <span className="api-desc">Sense value that maps to 1. Lower than `from` gives "less is better".</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Returns the sense's value for the target, inverse-lerped from `from` to `to` and clamped to 0 to 1.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns "Sense (name)".</span> |
