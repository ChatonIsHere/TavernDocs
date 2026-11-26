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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerEvent`](/game-api/types/game-other-namespaces/iplayerevent), [`IEventBusEventData`](/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Documented in** [Event buses and services](/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ItemForgedEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, uint itemHash)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-itemhash" /><code>{"uint ItemHash { get; }"}</code> | Prefab hash of the forged item. |
| <Link id="m-source" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | The last player to interact with the item, may be null. |
