---
title: "ItemForgedEvent"
description: "Township event bus event broadcast when a player forges an item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemForgedEvent

A **class** in `Root.Township`, `ATT.EventBus.TownshipEvents`.

Township event bus event broadcast when a player forges an item. Server (and local test).

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerEvent`](/mod/game-api/types/game-other-namespaces/iplayerevent), [`IEventBusEventData`](/mod/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemForgedEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, uint itemHash)"}</code> | <span className="api-desc">Creates an `ItemForgedEvent` from `player` and `itemHash`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-itemhash" /><code>{"uint ItemHash { get; }"}</code> | <span className="api-desc">Prefab hash of the forged item.</span> |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | <span className="api-desc">The last player to interact with the item, may be null.</span> |
