---
title: "PrefabInPositionEvent"
description: "Township event bus event broadcast by PrefabInPositionObserver when an object enters its trigger inside a tutorial domain."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabInPositionEvent

A **class** in `Root.Township`, `ATT.EventBus.TownshipEvents`.

Township event bus event broadcast by `PrefabInPositionObserver` when an object enters its trigger inside a tutorial domain.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerEvent`](/game-api/types/game-other-namespaces/iplayerevent), [`IEventBusEventData`](/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Documented in** [Event buses and services](/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PrefabInPositionEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" networkPrefab)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-networkprefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" { get; }"}</code> | Prefab of the object that entered. |
| <Link id="m-source" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | The player the domain belongs to. |
