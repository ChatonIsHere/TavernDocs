---
title: "PingMessage"
description: "The ping network message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PingMessage

A **static class** in `Root.Township`, `Alta.Networking`.

The ping network message. The client sends a timestamp, the server echoes it back, and the client works out the round trip time.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"private static uint id"}</code> | Backing field for `Id` (sent in 8 bits). |
| <Link id="m-isresponse" /><code>{"private static bool isResponse"}</code> | Set to false by `Set`; not otherwise used. |
| <Link id="m-time" /><code>{"private static uint time"}</code> | Backing field for `Time`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id-2" /><code>{"static uint Id { get; }"}</code> | The id of the last ping set or received. |
| <Link id="m-lastpinginseconds" /><code>{"static float LastPingInSeconds { get; private set; }"}</code> | Client: round trip time of the last answered ping, in seconds. |
| <Link id="m-time-2" /><code>{"static uint Time { get; }"}</code> | The timestamp of the last ping set or received. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the id and time. On read the server replies with the same data; the client updates `LastPingInSeconds`. |
| <Link id="m-set" /><code>{"static void Set(uint sendId = 0)"}</code> | Fills the message with an id and the current time (low 32 bits of UTC ticks). |
| <Link id="m-setelapsedticks" /><code>{"static void SetElapsedTicks()"}</code> | Sets `LastPingInSeconds` from the time since the received timestamp. |
