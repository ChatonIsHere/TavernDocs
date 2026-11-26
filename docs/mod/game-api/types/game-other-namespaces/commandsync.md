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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`CommandSyncInfo`](/mod/game-api/types/game-other-namespaces/commandsync-commandsyncinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandSync()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/commandsync">{"CommandSync"}</Link>{" Instance"}</code> | <span className="api-desc">The current command sync, set in `Initialize`.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commandsynccallback" /><code>{"private Action<string, string> commandSyncCallback"}</code> | <span className="api-desc">Callback waiting for the server's command result.</span> |
| <Link id="m-commandtosync" /><code>{"private string commandToSync"}</code> | <span className="api-desc">Command text being sent.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-synccommand" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCommand"}</code> | <span className="api-desc">Sync that sends a command to the server.</span> |
| <Link id="m-synccommandconfirmation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/commandsync-commandsyncinfo">{"CommandSync.CommandSyncInfo"}</Link>{"> syncCommandConfirmation"}</code> | <span className="api-desc">Sync that carries a command result back. Nothing in this build sends it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets `Instance` and creates the command and confirmation syncs.</span> |
| <Link id="m-routecommand" /><code>{"void RouteCommand(string command, Action<string, string> callback = null)"}</code> | <span className="api-desc">Fills in `{localplayer}`, then runs the command on a dedicated server or sends it to the server from a client.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupplayerforcommand" /><code>{"private static string SetupPlayerForCommand(string command, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Replaces `{localplayer}` in the command with the player's user ID.</span> |
| <Link id="m-synccommand-2" /><code>{"private async void SyncCommand("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the command text. In this build nothing runs a received command here.</span> |
| <Link id="m-synccommandconfirmation-2" /><code>{"private void SyncCommandConfirmation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/game-other-namespaces/commandsync-commandsyncinfo">{"CommandSync.CommandSyncInfo"}</Link>{" commandResult)"}</code> | <span className="api-desc">Reads or writes a command's name and result; on receive, calls and clears the pending callback.</span> |

</details>
