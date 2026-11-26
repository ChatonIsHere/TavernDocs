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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InverseLerpSenseTarget("}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense, float from, float to)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | Sense value that maps to 0. |
| <Link id="m-sense" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense"}</code> | The sense asset read. |
| <Link id="m-to" /><code>{"private float to"}</code> | Sense value that maps to 1. Lower than `from` gives "less is better". |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Returns the sense's value for the target, inverse-lerped from `from` to `to` and clamped to 0 to 1. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns "Sense (name)". |
