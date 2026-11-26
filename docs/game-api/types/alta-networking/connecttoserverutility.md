---
title: "ConnectToServerUtility"
description: "Client: joins a game server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectToServerUtility

A **static class** in `Root.Township`, `Alta.Networking.Servers`.

Client: joins a game server. Keeps one client socket and one join attempt at a time, and sets up message handlers once joined.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Documented in** [Joining a server](/game-api/networking/joining)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-joinserverpipeline" /><code>{"private static "}<Link to="/game-api/types/global-i-l/joinserverpipeline">{"JoinServerPipeline"}</Link>{" joinServerPipeline"}</code> | The join attempt in progress. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Logger for this class. |
| <Link id="m-socket" /><code>{"private static "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> | The client socket. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connecttoserver" /><code>{"static async Task<"}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> ConnectToServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Creates the client socket if needed, cancels any other join in progress, and runs a `JoinServerPipeline` to the server. |
| <Link id="m-stopcurrentconnectionattempt" /><code>{"static void StopCurrentConnectionAttempt()"}</code> | Closes the client socket and cancels the join attempt. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleanstaticsocket" /><code>{"private static void CleanStaticSocket("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" obj)"}</code> | Clears the socket and join attempt when the socket is destroyed. |
| <Link id="m-handleconnectionresulttoserver" /><code>{"private static void HandleConnectionResultToServer("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> | On success, raises the client started event and sets up the connection's message handlers. |
| <Link id="m-serializepause" /><code>{"private static void SerializePause("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes whether the application is paused; not hooked up here. |
| <Link id="m-setupconnectiontoserver" /><code>{"private static void SetupConnectionToServer("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Sets the handlers for server messages such as spawn, destroy, move, entity sync and ping. |

</details>
