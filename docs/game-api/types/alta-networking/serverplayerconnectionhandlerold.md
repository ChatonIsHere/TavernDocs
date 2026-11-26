---
title: "ServerPlayerConnectionHandlerOld"
description: "Server: checks join requests and accepts or refuses players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPlayerConnectionHandlerOld

A **class** in `Root.Township`, `Alta.Networking.Servers`.

Server: checks join requests and accepts or refuses players. Despite the name, `ServerHandler` still creates and uses it.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested types** [`ApiServerJoinResult`](/game-api/types/alta-networking/serverplayerconnectionhandlerold-apiserverjoinresult), [`PlayerJoinResult`](/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerPlayerConnectionHandlerOld("}<Link to="/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{" server)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-userprequisites" /><code>{"Func<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{", Task<bool>> UserPrequisites"}</code> | Async check run after a join is accepted; if it returns false the player is refused. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for join checks. |
| <Link id="m-server" /><code>{"private "}<Link to="/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{" server"}</code> | The `ServerHandler` that owns it. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-userjoined" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{", "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{", "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{"> UserJoined"}</code> | Raised when a player passes all checks and prerequisites, with their mode and platform. |
| <Link id="m-userleft" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> UserLeft"}</code> | Raised after an accepted player disconnects. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeconnection" /><code>{"void InitializeConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Registers `CheckApproved` as the connection's RequestJoin handler. |
| <Link id="m-validateconsoletoken" /><code>{"static async Task<bool> ValidateConsoleToken(JwtSecurityToken token)"}</code> | Checks a token has this server's `server_id` claim and is valid with the API. |
| <Link id="m-checkifplayerisallowed" /><code>{"protected virtual async Task<"}<Link to="/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{"> CheckIfPlayerIsAllowed("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, int playerId, string tokenString, string clientVersion, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> | Checks the join token (user, server id, expiry via the API), platform, player limit, version, allow list, duplicates and VR mode. |
| <Link id="m-checkifplayerisallowedcustom" /><code>{"protected virtual async Task<"}<Link to="/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{"> CheckIfPlayerIsAllowedCustom("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, int playerId, string tokenString, string clientVersion, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> | Used when the server identifier is -1. Reads the token without checking it with the API, then checks limit, version, allow list and duplicates. |
| <Link id="m-onuserleft" /><code>{"protected virtual async Task OnUserLeft("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Logs the player leaving; virtual so subclasses can add cleanup. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkapproved" /><code>{"private async void CheckApproved("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Handles a RequestJoin message: refuses during server locks, checks the player, runs prerequisites and replies with `ConfirmJoinMessage`. |
| <Link id="m-checkconnectionlimit" /><code>{"private bool CheckConnectionLimit("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | True if there is no player limit or the connection count is within it. |
| <Link id="m-connectionremoved" /><code>{"private async void ConnectionRemoved("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Runs `OnUserLeft` then raises `UserLeft` when an accepted connection disconnects. |
| <Link id="m-playeraccepted" /><code>{"private void PlayerAccepted("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" playerSystem)"}</code> | Hooks the disconnect handler and raises `UserJoined`. |
| <Link id="m-playerdenied" /><code>{"private static async Task PlayerDenied("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, string errorMessage)"}</code> | Sends a refusal with the error, waits two seconds and destroys the connection. |

</details>

## Used in

Members of other types that take, return or hold a `ServerPlayerConnectionHandlerOld`:

[`ServerHandler.playerJoinHandler`](/game-api/types/alta-networking/serverhandler#m-playerjoinhandler).
