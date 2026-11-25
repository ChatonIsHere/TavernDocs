---
title: "ConnectToServerUtility"
description: "Owns the client socket and the current pipeline. StopCurrentConnectionAttempt(). Registers the in-game message handlers once a join succeeds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectToServerUtility

A **static class** in `Root.Township`, `Alta.Networking.Servers`.

Owns the client socket and the current pipeline. `StopCurrentConnectionAttempt()`. Registers the in-game message handlers once a join succeeds.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Documented in** [Joining a server](/game-api/networking/joining)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-joinserverpipeline" /><code>{"private static "}<Link to="/game-api/types/global-i-l/joinserverpipeline">{"JoinServerPipeline"}</Link>{" joinServerPipeline"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-socket" /><code>{"private static "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connecttoserver" /><code>{"static async Task<"}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> ConnectToServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |
| <Link id="m-stopcurrentconnectionattempt" /><code>{"static void StopCurrentConnectionAttempt()"}</code> |  |
| <Link id="m-cleanstaticsocket" /><code>{"private static void CleanStaticSocket("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" obj)"}</code> |  |
| <Link id="m-handleconnectionresulttoserver" /><code>{"private static void HandleConnectionResultToServer("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> |  |
| <Link id="m-serializepause" /><code>{"private static void SerializePause("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-setupconnectiontoserver" /><code>{"private static void SetupConnectionToServer("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
