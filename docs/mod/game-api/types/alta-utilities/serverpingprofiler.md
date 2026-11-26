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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerPingProfiler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxping" /><code>{"private const long maxPing"}</code> | <span className="api-desc">Constant 5000. Not used in this class.</span> |
| <Link id="m-playeridtopingmap" /><code>{"private readonly Dictionary<int, float> playerIdToPingMap"}</code> | <span className="api-desc">Last measured round trip in seconds, keyed by player identifier.</span> |
| <Link id="m-playeridtopingstarttimemap" /><code>{"private readonly Dictionary<int, float> playerIdToPingStartTimeMap"}</code> | <span className="api-desc">Time each player's last ping was sent, keyed by player identifier.</span> |
| <Link id="m-syncpingclienttoserver" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPingClientToServer"}</code> | <span className="api-desc">Method sync (`NetworkedEventB`) the client uses to answer a ping.</span> |
| <Link id="m-syncpingservertoclient" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPingServerToClient"}</code> | <span className="api-desc">Method sync (`NetworkedEventA`) the server uses to send a ping.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/serverpingprofiler">{"ServerPingProfiler"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The single profiler in the scene, set in `Initialize`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaverageping" /><code>{"float GetAveragePing()"}</code> | <span className="api-desc">Server: sends a new ping to every player, then returns the average of the last measured round trips in seconds, or -1 if none yet.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets the static `Instance` (logs an error if one already exists) and creates the two ping `MethodSync` events.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettimestamp" /><code>{"private static float GetTimeStamp()"}</code> | <span className="api-desc">Returns `Time.realtimeSinceStartup`, used to time pings.</span> |
| <Link id="m-sendpingmessagestoconnectedclients" /><code>{"private void SendPingMessagesToConnectedClients()"}</code> | <span className="api-desc">Server: sends the ping event to each player in `Player.AllPlayers`.</span> |
| <Link id="m-syncplayerpingclienttoserver" /><code>{"private void SyncPlayerPingClientToServer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server side of the reply: works out the round trip from the stored start time and saves it for that player.</span> |
| <Link id="m-syncplayerpingservertoclient" /><code>{"private void SyncPlayerPingServerToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Ping event handler. When writing it stores the send time for the player; on a remote client it sends the reply event back.</span> |

</details>
