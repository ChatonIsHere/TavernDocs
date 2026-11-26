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
| <Link id="m-ctor" /><code>{"ItemCraftedEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, List<uint> itemPartHashes)"}</code> | <span className="api-desc">Creates an `ItemCraftedEvent` from `player` and `itemPartHashes`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-itemparthashes" /><code>{"List<uint> ItemPartHashes { get; }"}</code> | <span className="api-desc">Prefab hashes of the two parts joined: the primary part first, then the secondary.</span> |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Source { get; }"}</code> | <span className="api-desc">The player who crafted.</span> |
