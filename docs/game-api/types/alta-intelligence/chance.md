---
title: "Chance"
description: "class Chance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chance

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Chance(float chance, float success = 1, float failure = 0)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-chance" /><code>{"private float chance"}</code> |
| <Link id="m-failure" /><code>{"private float failure"}</code> |
| <Link id="m-success" /><code>{"private float success"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |
