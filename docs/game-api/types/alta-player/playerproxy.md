---
title: "PlayerProxy"
description: "class PlayerProxy in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProxy

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerProxyData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerProxyData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerProxyData`](/game-api/types/alta-player/playerproxydata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerProxy()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"private Transform head"}</code> |  |
| <Link id="m-status" /><code>{"private "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-title" /><code>{"private string title"}</code> |  |
| <Link id="m-username" /><code>{"private string userName"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head-2" /><code>{"Transform Head { get; }"}</code> |  |
| <Link id="m-playerproxies" /><code>{"static HashSet<"}<Link to="/game-api/types/alta-player/playerproxy">{"PlayerProxy"}</Link>{"> PlayerProxies { get; }"}</code> |  |
| <Link id="m-status-2" /><code><Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" Status { get; }"}</code> |  |
| <Link id="m-title-2" /><code>{"string Title { get; }"}</code> |  |
| <Link id="m-username-2" /><code>{"string UserName { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerProxy`:

[`ShowNames.NameBoardHandler.NameBoardHandler`](/game-api/types/alta-player/shownames-nameboardhandler#m-ctor-2).
