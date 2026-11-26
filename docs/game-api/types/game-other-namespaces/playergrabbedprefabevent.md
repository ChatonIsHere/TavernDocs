---
title: "PlayerGrabbedPrefabEvent"
description: "Township event bus event broadcast when a player grabs a pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerGrabbedPrefabEvent

A **class** in `Root.Township`, `ATT.EventBus.TownshipEvents`.

Township event bus event broadcast when a player grabs a pickup. Server (and local test).

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerEvent`](/game-api/types/game-other-namespaces/iplayerevent), [`IEventBusEventData`](/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Documented in** [Event buses and services](/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerGrabbedPrefabEvent()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-grabbedprefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" GrabbedPrefab { get; set; }"}</code> | Prefab of the grabbed pickup. |
| <Link id="m-source" /><code>{"virtual "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; set; }"}</code> | The player who grabbed it. |
