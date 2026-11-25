---
title: "EventChannelAiHook"
description: "Fires a channel event when the action starts and another when it ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventChannelAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

Fires a channel event when the action starts and another when it ends.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventChannelAiHook()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ended" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" ended"}</code> |  |
| <Link id="m-started" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" started"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |  |
