---
title: "AnimatedFloatTransitionAiHook"
description: "class AnimatedFloatTransitionAiHook in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedFloatTransitionAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedFloatTransitionAiHook()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-changepersecond" /><code>{"private float changePerSecond"}</code> |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> |
| <Link id="m-endvalue" /><code>{"private float endValue"}</code> |
| <Link id="m-floatname" /><code>{"private string floatName"}</code> |
| <Link id="m-floats" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{"> floats"}</code> |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-coroutine-2" /><code>{"private IEnumerator Coroutine() (iterator)"}</code> |

</details>
