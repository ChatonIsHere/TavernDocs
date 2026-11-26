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
| <Link id="m-ctor" /><code>{"ChannelEvent()"}</code> | <span className="api-desc">Creates an `Agent.ChannelEvent` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventfired" /><code>{"private UnityEvent eventFired"}</code> | <span className="api-desc">Backing field for `EventFired`.</span> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | <span className="api-desc">Backing field for `IsNetworked`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventfired-2" /><code>{"UnityEvent EventFired { get; }"}</code> | <span className="api-desc">Unity event run when the agent fires this channel.</span> |
| <Link id="m-isnetworked-2" /><code>{"bool IsNetworked { get; }"}</code> | <span className="api-desc">If true, the event also runs on clients: the server sends the channel to the chunk when it fires. If false, only the server registers it.</span> |

## Used in

Members of other types that take, return or hold a `ChannelEvent`:

<div className="api-used-in">

[`Agent.channelEvents`](/mod/game-api/types/alta-intelligence/agent#m-channelevents), [`Agent.ChannelEvents`](/mod/game-api/types/alta-intelligence/agent#m-channelevents-2), [`Agent.eventMap`](/mod/game-api/types/alta-intelligence/agent#m-eventmap).

</div>
