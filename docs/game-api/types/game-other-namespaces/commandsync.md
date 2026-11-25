---
title: "CommandSync"
description: "class CommandSync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandSync

A **class** in `Root.Township`, `ATT.Character.QuickAccessMenu`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`CommandSyncInfo`](/game-api/types/game-other-namespaces/commandsync-commandsyncinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandSync()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/game-other-namespaces/commandsync">{"CommandSync"}</Link>{" Instance"}</code> |  |
| <Link id="m-commandsynccallback" /><code>{"private Action<string, string> commandSyncCallback"}</code> |  |
| <Link id="m-commandtosync" /><code>{"private string commandToSync"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-synccommand" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCommand"}</code> |  |
| <Link id="m-synccommandconfirmation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/commandsync-commandsyncinfo">{"CommandSync.CommandSyncInfo"}</Link>{"> syncCommandConfirmation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-routecommand" /><code>{"void RouteCommand(string command, Action<string, string> callback = null)"}</code> |  |
| <Link id="m-setupplayerforcommand" /><code>{"private static string SetupPlayerForCommand(string command, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-synccommand-2" /><code>{"private async void SyncCommand("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-synccommandconfirmation-2" /><code>{"private void SyncCommandConfirmation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/game-other-namespaces/commandsync-commandsyncinfo">{"CommandSync.CommandSyncInfo"}</Link>{" commandResult)"}</code> |  |
