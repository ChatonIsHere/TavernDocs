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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedFloatAiHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-booleans" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{"> booleans"}</code> | <span className="api-desc">The networked float per creature, kept until the action ends (named `booleans` in the code).</span> |
| <Link id="m-endvalue" /><code>{"private float endValue"}</code> | <span className="api-desc">Value set when the action ends. Default 2.</span> |
| <Link id="m-floatname" /><code>{"private string floatName"}</code> | <span className="api-desc">Animator parameter name.</span> |
| <Link id="m-isfloatlerp" /><code>{"private bool isFloatLerp"}</code> | <span className="api-desc">Whether to use the lerping networked float, which blends to new values.</span> |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> | <span className="api-desc">Value set when the action starts. Default 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Sets the float to `endValue` if the creature still exists.</span> |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Sets the float to `startValue`, using the lerping float if `isFloatLerp` is set.</span> |
