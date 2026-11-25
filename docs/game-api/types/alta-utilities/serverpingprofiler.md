---
title: "ServerPingProfiler"
description: "class ServerPingProfiler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPingProfiler

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics.ABTesting`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerPingProfiler()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maxping" /><code>{"private const long maxPing"}</code> |
| <Link id="m-playeridtopingmap" /><code>{"private readonly Dictionary<int, float> playerIdToPingMap"}</code> |
| <Link id="m-playeridtopingstarttimemap" /><code>{"private readonly Dictionary<int, float> playerIdToPingStartTimeMap"}</code> |
| <Link id="m-syncpingclienttoserver" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPingClientToServer"}</code> |
| <Link id="m-syncpingservertoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPingServerToClient"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-utilities/serverpingprofiler">{"ServerPingProfiler"}</Link>{" Instance { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getaverageping" /><code>{"float GetAveragePing()"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gettimestamp" /><code>{"private static float GetTimeStamp()"}</code> |
| <Link id="m-sendpingmessagestoconnectedclients" /><code>{"private void SendPingMessagesToConnectedClients()"}</code> |
| <Link id="m-syncplayerpingclienttoserver" /><code>{"private void SyncPlayerPingClientToServer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncplayerpingservertoclient" /><code>{"private void SyncPlayerPingServerToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
