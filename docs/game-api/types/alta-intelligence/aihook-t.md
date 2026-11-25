---
title: "AiHook<T>"
description: "Base: runs code when the action starts, finishes or is cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AiHook&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base: runs code when the action starts, finishes or is cancelled.

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

| Member |
| --- |
| <Link id="m-isendcalledoncancelled" /><code>{"private bool isEndCalledOnCancelled"}</code> |
| <Link id="m-isendcalledonfinished" /><code>{"private bool isEndCalledOnFinished"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-finishedorcancelled" /><code>{"protected virtual void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |
| <Link id="m-used" /><code>{"protected virtual void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-initialize" /><code>{"private void Alta.Intelligence.IAiHook.Initialize()"}</code> |

</details>
