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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedTriggerAiHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | <span className="api-desc">Whether clients see the trigger. Default true.</span> |
| <Link id="m-isonend" /><code>{"private bool isOnEnd"}</code> | <span className="api-desc">Fire when the action ends. Default false.</span> |
| <Link id="m-isonstart" /><code>{"private bool isOnStart"}</code> | <span className="api-desc">Fire when the action starts. Default true.</span> |
| <Link id="m-triggername" /><code>{"private string triggerName"}</code> | <span className="api-desc">Animator trigger name.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Fires the trigger if `isOnEnd` is set and the creature still exists.</span> |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Fires the trigger if `isOnStart` is set.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"private void Trigger("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | <span className="api-desc">Fires the trigger, forced through the network animator if networked, otherwise on the local animator.</span> |

</details>
