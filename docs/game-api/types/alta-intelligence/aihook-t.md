---
title: "AiHook<T>"
description: "Base for a component that hooks an effect onto an action: placed next to an ActionComponent, it runs Used whenever any creature starts that action and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AiHook&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a component that hooks an effect onto an action: placed next to an `ActionComponent`, it runs `Used` whenever any creature starts that action and `FinishedOrCancelled` when it ends.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`IAiHook`](/game-api/types/alta-intelligence/iaihook)
- **Derived types** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected AiHook()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isendcalledoncancelled" /><code>{"private bool isEndCalledOnCancelled"}</code> | Whether `FinishedOrCancelled` runs when the action is cancelled. Default true. |
| <Link id="m-isendcalledonfinished" /><code>{"private bool isEndCalledOnFinished"}</code> | Whether `FinishedOrCancelled` runs when the action finishes. Default true. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected virtual void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Called when a creature's run of the action ends. Unhooks itself; subclasses undo their effect here. |
| <Link id="m-used" /><code>{"protected virtual void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Called when a creature starts the action. Hooks `FinishedOrCancelled` onto the finish and cancel events as set. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Alta.Intelligence.IAiHook.Initialize()"}</code> | Subscribes `Used` to the sibling action component's `Used` event. Called on first use of the action. |

</details>
