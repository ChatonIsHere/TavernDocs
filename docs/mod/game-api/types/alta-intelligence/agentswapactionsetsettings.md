---
title: "AgentSwapActionSetSettings"
description: "Action component that switches the agent to another ActionComponentSet and then runs for a fixed duration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentSwapActionSetSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Action component that switches the agent to another `ActionComponentSet` and then runs for a fixed duration.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveSwapActionSet`](/mod/game-api/types/alta-intelligence/activeswapactionset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentSwapActionSetSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Backing field for `Duration`.</span> |
| <Link id="m-isusingtarget" /><code>{"private bool isUsingTarget"}</code> | <span className="api-desc">Backing field for `IsUsingTarget`.</span> |
| <Link id="m-set" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set"}</code> | <span className="api-desc">Backing field for `Set`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">How long the swap action lasts after switching sets.</span> |
| <Link id="m-isusingtarget-2" /><code>{"bool IsUsingTarget { get; }"}</code> | <span className="api-desc">Whether the action needs a target.</span> |
| <Link id="m-set-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" Set { get; }"}</code> | <span className="api-desc">The action set the agent switches to when this action starts.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Returns the `ActiveSwapActionSet` action for these settings.</span> |

## Used in

Members of other types that take, return or hold a `AgentSwapActionSetSettings`:

<div className="api-used-in">

[`ActiveSwapActionSet.GetAction`](/mod/game-api/types/alta-intelligence/activeswapactionset#m-getaction).

</div>
