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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveSwapActionSet`](/game-api/types/alta-intelligence/activeswapactionset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentSwapActionSetSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Backing field for `Duration`. |
| <Link id="m-isusingtarget" /><code>{"private bool isUsingTarget"}</code> | Backing field for `IsUsingTarget`. |
| <Link id="m-set" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set"}</code> | Backing field for `Set`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | How long the swap action lasts after switching sets. |
| <Link id="m-isusingtarget-2" /><code>{"bool IsUsingTarget { get; }"}</code> | Whether the action needs a target. |
| <Link id="m-set-2" /><code><Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" Set { get; }"}</code> | The action set the agent switches to when this action starts. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Returns the `ActiveSwapActionSet` action for these settings. |

## Used in

Members of other types that take, return or hold a `AgentSwapActionSetSettings`:

[`ActiveSwapActionSet.GetAction`](/game-api/types/alta-intelligence/activeswapactionset#m-getaction).
