---
title: "Lifetime"
description: "Scoring rule on the creature's age: seconds since it was created, mapped from minimum to maximum onto 0 to 1."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Lifetime

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule on the creature's age: seconds since it was created, mapped from minimum to maximum onto 0 to 1. Made by `CreateTargetOperation.Lifetime`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Lifetime(float minimum, float maximum)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | Age in seconds that maps to 1. |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | Age in seconds that maps to 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Returns the inverse lerp of the creature's age between `minimum` and `maximum`. The target is ignored. |
