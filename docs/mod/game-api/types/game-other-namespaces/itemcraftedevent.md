---
title: "ItemCraftedEvent"
description: "Township event bus event broadcast when a player joins two crafting parts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemCraftedEvent

A **class** in `Root.Township`, `ATT.EventBus.TownshipEvents`.

Township event bus event broadcast when a player joins two crafting parts. Server (and local test).

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerEvent`](/mod/game-api/types/game-other-namespaces/iplayerevent), [`IEventBusEventData`](/mod/game-api/types/game-other-namespaces/ieventbuseventdata)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services), [Console, utilities and Alta assemblies](/mod/game-api/console-and-utilities/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemCraftedEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, List<uint> itemPartHashes)"}</code> | Creates an `ItemCraftedEvent` from `player` and `itemPartHashes`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-itemparthashes" /><code>{"List<uint> ItemPartHashes { get; }"}</code> | Prefab hashes of the two parts joined: the primary part first, then the secondary. |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | The player who crafted. |
