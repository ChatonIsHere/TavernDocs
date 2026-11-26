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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Nested types** [`ApiServerJoinResult`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-apiserverjoinresult), [`PlayerJoinResult`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerPlayerConnectionHandlerOld("}<Link to="/mod/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{" server)"}</code> | <span className="api-desc">Creates a `ServerPlayerConnectionHandlerOld` from `server`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-userprequisites" /><code>{"Func<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{", Task<bool>> UserPrequisites"}</code> | <span className="api-desc">Async check run after a join is accepted; if it returns false the player is refused.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for join checks.</span> |
| <Link id="m-server" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{" server"}</code> | <span className="api-desc">The `ServerHandler` that owns it.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-userjoined" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{"> UserJoined"}</code> | <span className="api-desc">Raised when a player passes all checks and prerequisites, with their mode and platform.</span> |
| <Link id="m-userleft" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> UserLeft"}</code> | <span className="api-desc">Raised after an accepted player disconnects.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeconnection" /><code>{"void InitializeConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Registers `CheckApproved` as the connection's RequestJoin handler.</span> |
| <Link id="m-validateconsoletoken" /><code>{"static async Task<bool> ValidateConsoleToken(JwtSecurityToken token)"}</code> | <span className="api-desc">Checks a token has this server's `server_id` claim and is valid with the API.</span> |
| <Link id="m-checkifplayerisallowed" /><code>{"protected virtual async Task<"}<Link to="/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{"> CheckIfPlayerIsAllowed("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, int playerId, string tokenString, string clientVersion, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> | <span className="api-desc">Checks the join token (user, server id, expiry via the API), platform, player limit, version, allow list, duplicates and VR mode.</span> |
| <Link id="m-checkifplayerisallowedcustom" /><code>{"protected virtual async Task<"}<Link to="/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{"> CheckIfPlayerIsAllowedCustom("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, int playerId, string tokenString, string clientVersion, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> | <span className="api-desc">Used when the server identifier is -1. Reads the token without checking it with the API, then checks limit, version, allow list and duplicates.</span> |
| <Link id="m-onuserleft" /><code>{"protected virtual async Task OnUserLeft("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Logs the player leaving; virtual so subclasses can add cleanup.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkapproved" /><code>{"private async void CheckApproved("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Handles a RequestJoin message: refuses during server locks, checks the player, runs prerequisites and replies with `ConfirmJoinMessage`.</span> |
| <Link id="m-checkconnectionlimit" /><code>{"private bool CheckConnectionLimit("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">True if there is no player limit or the connection count is within it.</span> |
| <Link id="m-connectionremoved" /><code>{"private async void ConnectionRemoved("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Runs `OnUserLeft` then raises `UserLeft` when an accepted connection disconnects.</span> |
| <Link id="m-playeraccepted" /><code>{"private void PlayerAccepted("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" playerSystem)"}</code> | <span className="api-desc">Hooks the disconnect handler and raises `UserJoined`.</span> |
| <Link id="m-playerdenied" /><code>{"private static async Task PlayerDenied("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, string errorMessage)"}</code> | <span className="api-desc">Sends a refusal with the error, waits two seconds and destroys the connection.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerPlayerConnectionHandlerOld`:

<div className="api-used-in">

[`ServerHandler.playerJoinHandler`](/mod/game-api/types/alta-networking/serverhandler#m-playerjoinhandler).

</div>
