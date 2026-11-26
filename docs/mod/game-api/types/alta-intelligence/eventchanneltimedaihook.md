---
title: "EventChannelTimedAiHook"
description: "AI hook that fires hook event channels on the creature at set delays after the action starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventChannelTimedAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that fires hook event channels on the creature at set delays after the action starts. Any still waiting are cancelled when it ends.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Nested types** [`Delay`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook-delay)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventChannelTimedAiHook()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delays" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/eventchanneltimedaihook-delay">{"EventChannelTimedAiHook.Delay"}</Link>{"[] delays"}</code> | The channels to fire and how many seconds after the start each fires. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Cancels every delayed channel still waiting for this run. |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Schedules each entry in `delays` to fire its channel after its delay. |
