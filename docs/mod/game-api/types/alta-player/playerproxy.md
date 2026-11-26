---
title: "PlayerProxy"
description: "A networked, saved stand-in for a player (a dummy with a name, title and member status) that the Show Names action labels like a real player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProxy

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

A networked, saved stand-in for a player (a dummy with a name, title and member status) that the Show Names action labels like a real player. The server syncs its fields to clients.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerProxyData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerProxyData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerProxyData`](/mod/game-api/types/alta-player/playerproxydata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerProxy()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"private Transform head"}</code> | Backing field for `Head`. |
| <Link id="m-status" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status"}</code> | Backing field for `Status`. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the name, title and status message. |
| <Link id="m-title" /><code>{"private string title"}</code> | Backing field for `Title`. |
| <Link id="m-username" /><code>{"private string userName"}</code> | Backing field for `UserName`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head-2" /><code>{"Transform Head { get; }"}</code> | Transform the name board is placed above. |
| <Link id="m-playerproxies" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/alta-player/playerproxy">{"PlayerProxy"}</Link>{"> PlayerProxies { get; }"}</code> | Every live proxy. Read by Show Names each frame to place name boards. |
| <Link id="m-status-2" /><code><Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" Status { get; }"}</code> | Member status shown on the proxy's shield. |
| <Link id="m-title-2" /><code>{"string Title { get; }"}</code> | Title text for the proxy. Saved and synced. |
| <Link id="m-username-2" /><code>{"string UserName { get; }"}</code> | Name shown for the proxy. Saved and synced. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `SyncNameProxy` method sync used to send the name, title and status. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the name, title and status to a player who just connected. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Adds the proxy to `PlayerProxies`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the proxy from `PlayerProxies`. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes user name, title and status. Remote clients apply the received status. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerProxy`:

[`ShowNames.NameBoardHandler.NameBoardHandler`](/mod/game-api/types/alta-player/shownames-nameboardhandler#m-ctor-2).
