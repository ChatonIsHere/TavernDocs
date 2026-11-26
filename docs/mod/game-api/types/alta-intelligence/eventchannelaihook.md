---
title: "EventChannelAiHook"
description: "AI hook that fires a hook event channel on the creature when the action starts and another when it ends, so other components can react."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventChannelAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that fires a hook event channel on the creature when the action starts and another when it ends, so other components can react.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventChannelAiHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ended" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" ended"}</code> | <span className="api-desc">Channel fired when the action ends.</span> |
| <Link id="m-started" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" started"}</code> | <span className="api-desc">Channel fired when the action starts.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Fires `ended` on the creature unless it's `None`.</span> |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Fires `started` on the creature unless it's `None`.</span> |
