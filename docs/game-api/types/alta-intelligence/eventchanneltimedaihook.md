---
title: "EventChannelTimedAiHook"
description: "Fires channel events at set delays after the action starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventChannelTimedAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

Fires channel events at set delays after the action starts.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Nested types** [`Delay`](/game-api/types/alta-intelligence/eventchanneltimedaihook-delay)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventChannelTimedAiHook()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-delays" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/eventchanneltimedaihook-delay">{"EventChannelTimedAiHook.Delay"}</Link>{"[] delays"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |  |
