---
title: "CommandSync"
description: "Routes console commands from in-game menus to the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandSync

A **class** in `Root.Township`, `ATT.Character.QuickAccessMenu`.

Routes console commands from in-game menus to the server. Singleton `Instance` on a networked entity; the server runs commands directly.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`CommandSyncInfo`](/game-api/types/game-other-namespaces/commandsync-commandsyncinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandSync()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/game-other-namespaces/commandsync">{"CommandSync"}</Link>{" Instance"}</code> | The current command sync, set in `Initialize`. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commandsynccallback" /><code>{"private Action<string, string> commandSyncCallback"}</code> | Callback waiting for the server's command result. |
| <Link id="m-commandtosync" /><code>{"private string commandToSync"}</code> | Command text being sent. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-synccommand" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCommand"}</code> | Sync that sends a command to the server. |
| <Link id="m-synccommandconfirmation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/commandsync-commandsyncinfo">{"CommandSync.CommandSyncInfo"}</Link>{"> syncCommandConfirmation"}</code> | Sync that carries a command result back. Nothing in this build sends it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets `Instance` and creates the command and confirmation syncs. |
| <Link id="m-routecommand" /><code>{"void RouteCommand(string command, Action<string, string> callback = null)"}</code> | Fills in `{localplayer}`, then runs the command on a dedicated server or sends it to the server from a client. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupplayerforcommand" /><code>{"private static string SetupPlayerForCommand(string command, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Replaces `{localplayer}` in the command with the player's user ID. |
| <Link id="m-synccommand-2" /><code>{"private async void SyncCommand("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the command text. In this build nothing runs a received command here. |
| <Link id="m-synccommandconfirmation-2" /><code>{"private void SyncCommandConfirmation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/game-other-namespaces/commandsync-commandsyncinfo">{"CommandSync.CommandSyncInfo"}</Link>{" commandResult)"}</code> | Reads or writes a command's name and result; on receive, calls and clears the pending callback. |

</details>
