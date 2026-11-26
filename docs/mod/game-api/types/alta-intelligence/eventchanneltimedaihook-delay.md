---
title: "EventChannelTimedAiHook.Delay"
description: "One delayed event in an EventChannelTimedAiHook: fires a hook event channel a set time after an action starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventChannelTimedAiHook.Delay

A **private class** in `Root.Township`, `Alta.Intelligence`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One delayed event in an `EventChannelTimedAiHook`: fires a hook event channel a set time after an action starts.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`EventChannelTimedAiHook`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Delay()"}</code> | Creates an `EventChannelTimedAiHook.Delay` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-delay" /><code>{"float delay"}</code> | Seconds to wait after the action is used. |
| <Link id="m-started" /><code><Link to="/mod/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" started"}</code> | The event channel fired when the delay ends. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> entries"}</code> | Pending timeline entries per running action. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | Cancels the pending timer for an action, if any. |
| <Link id="m-start" /><code>{"void Start("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | Restarts the timer for an action; when it runs out it fires `started` on the action's topic. |

## Used in

Members of other types that take, return or hold a `Delay`:

[`EventChannelTimedAiHook.delays`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook#m-delays).
