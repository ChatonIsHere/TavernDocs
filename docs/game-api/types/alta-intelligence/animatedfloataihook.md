---
title: "AnimatedFloatAiHook"
description: "AI hook that sets a networked animator float on the creature when the action starts and another value when it ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedFloatAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that sets a networked animator float on the creature when the action starts and another value when it ends.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedFloatAiHook()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-booleans" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{"> booleans"}</code> | The networked float per creature, kept until the action ends (named `booleans` in the code). |
| <Link id="m-endvalue" /><code>{"private float endValue"}</code> | Value set when the action ends. Default 2. |
| <Link id="m-floatname" /><code>{"private string floatName"}</code> | Animator parameter name. |
| <Link id="m-isfloatlerp" /><code>{"private bool isFloatLerp"}</code> | Whether to use the lerping networked float, which blends to new values. |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> | Value set when the action starts. Default 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Sets the float to `endValue` if the creature still exists. |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Sets the float to `startValue`, using the lerping float if `isFloatLerp` is set. |
