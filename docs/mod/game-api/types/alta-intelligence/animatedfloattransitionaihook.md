---
title: "AnimatedFloatTransitionAiHook"
description: "AI hook that sets a networked animator float on start, raises it at a steady rate while the action runs, and sets an end value when it ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedFloatTransitionAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that sets a networked animator float on start, raises it at a steady rate while the action runs, and sets an end value when it ends.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedFloatTransitionAiHook()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changepersecond" /><code>{"private float changePerSecond"}</code> | How much the float goes up each second while the action runs. Default 1. |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> | The running `Coroutine`, or null. |
| <Link id="m-endvalue" /><code>{"private float endValue"}</code> | Value set when the action ends. Default 1. |
| <Link id="m-floatname" /><code>{"private string floatName"}</code> | Animator parameter name. |
| <Link id="m-floats" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{"> floats"}</code> | The networked float per creature currently running the action. |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> | Whether to use the lerping networked float. |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> | Value set when the action starts. Default 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Sets the float to `endValue` and stops tracking that creature. Doesn't check the creature still exists. |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Sets the float to `startValue` and starts the shared coroutine if it isn't running. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine-2" /><code>{"private IEnumerator Coroutine() (iterator)"}</code> | Each frame, adds `changePerSecond` times delta time to every running creature's float, until none are left. |

</details>
