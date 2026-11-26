---
title: "ServerPingProfiler"
description: "Networked behaviour that measures round-trip time to every player by sending a ping event and timing the reply."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPingProfiler

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics.ABTesting`.

Networked behaviour that measures round-trip time to every player by sending a ping event and timing the reply. Server reads the result through `ServerProfilingData.AveragePing`; reach it through the static `Instance`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerPingProfiler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxping" /><code>{"private const long maxPing"}</code> | Constant 5000. Not used in this class. |
| <Link id="m-playeridtopingmap" /><code>{"private readonly Dictionary<int, float> playerIdToPingMap"}</code> | Last measured round trip in seconds, keyed by player identifier. |
| <Link id="m-playeridtopingstarttimemap" /><code>{"private readonly Dictionary<int, float> playerIdToPingStartTimeMap"}</code> | Time each player's last ping was sent, keyed by player identifier. |
| <Link id="m-syncpingclienttoserver" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPingClientToServer"}</code> | Method sync (`NetworkedEventB`) the client uses to answer a ping. |
| <Link id="m-syncpingservertoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPingServerToClient"}</code> | Method sync (`NetworkedEventA`) the server uses to send a ping. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-utilities/serverpingprofiler">{"ServerPingProfiler"}</Link>{" Instance { get; private set; }"}</code> | The single profiler in the scene, set in `Initialize`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaverageping" /><code>{"float GetAveragePing()"}</code> | Server: sends a new ping to every player, then returns the average of the last measured round trips in seconds, or -1 if none yet. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets the static `Instance` (logs an error if one already exists) and creates the two ping `MethodSync` events. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettimestamp" /><code>{"private static float GetTimeStamp()"}</code> | Returns `Time.realtimeSinceStartup`, used to time pings. |
| <Link id="m-sendpingmessagestoconnectedclients" /><code>{"private void SendPingMessagesToConnectedClients()"}</code> | Server: sends the ping event to each player in `Player.AllPlayers`. |
| <Link id="m-syncplayerpingclienttoserver" /><code>{"private void SyncPlayerPingClientToServer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server side of the reply: works out the round trip from the stored start time and saves it for that player. |
| <Link id="m-syncplayerpingservertoclient" /><code>{"private void SyncPlayerPingServerToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Ping event handler. When writing it stores the send time for the player; on a remote client it sends the reply event back. |

</details>
