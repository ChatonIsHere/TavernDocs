---
title: "Agent.ChannelEvent"
description: "A Unity event an agent fires on one hook event channel (by array index in Agent.ChannelEvents)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Agent.ChannelEvent

A **class** in `Root.Township`, `Alta.Intelligence`.

A Unity event an agent fires on one hook event channel (by array index in `Agent.ChannelEvents`). Server-only unless marked as networked.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`Agent`](/mod/game-api/types/alta-intelligence/agent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChannelEvent()"}</code> | Creates an `Agent.ChannelEvent` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventfired" /><code>{"private UnityEvent eventFired"}</code> | Backing field for `EventFired`. |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | Backing field for `IsNetworked`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventfired-2" /><code>{"UnityEvent EventFired { get; }"}</code> | Unity event run when the agent fires this channel. |
| <Link id="m-isnetworked-2" /><code>{"bool IsNetworked { get; }"}</code> | If true, the event also runs on clients: the server sends the channel to the chunk when it fires. If false, only the server registers it. |

## Used in

Members of other types that take, return or hold a `ChannelEvent`:

[`Agent.channelEvents`](/mod/game-api/types/alta-intelligence/agent#m-channelevents), [`Agent.ChannelEvents`](/mod/game-api/types/alta-intelligence/agent#m-channelevents-2), [`Agent.eventMap`](/mod/game-api/types/alta-intelligence/agent#m-eventmap).
