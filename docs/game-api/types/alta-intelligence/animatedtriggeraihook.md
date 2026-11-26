---
title: "AnimatedTriggerAiHook"
description: "AI hook that fires an animator trigger on the creature when the action starts, ends, or both."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedTriggerAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that fires an animator trigger on the creature when the action starts, ends, or both.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedTriggerAiHook()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | Whether clients see the trigger. Default true. |
| <Link id="m-isonend" /><code>{"private bool isOnEnd"}</code> | Fire when the action ends. Default false. |
| <Link id="m-isonstart" /><code>{"private bool isOnStart"}</code> | Fire when the action starts. Default true. |
| <Link id="m-triggername" /><code>{"private string triggerName"}</code> | Animator trigger name. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Fires the trigger if `isOnEnd` is set and the creature still exists. |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Fires the trigger if `isOnStart` is set. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"private void Trigger("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | Fires the trigger, forced through the network animator if networked, otherwise on the local animator. |

</details>
