---
title: "PlayerInPositionEvent"
description: "Township event bus event broadcast by PlayerInPositionObserver when the tutorial's target player comes within range of it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInPositionEvent

A **class** in `Root.Township`, `ATT.EventBus.TownshipEvents`.

Township event bus event broadcast by `PlayerInPositionObserver` when the tutorial's target player comes within range of it.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerEvent`](/mod/game-api/types/game-other-namespaces/iplayerevent), [`IEventBusEventData`](/mod/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInPositionEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Creates a `PlayerInPositionEvent` from `player`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | The player who reached the position. |
