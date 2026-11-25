---
title: "NetworkManager"
description: "Static owner of the network transport (KCP) and all sockets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkManager

A **static class** in `Root.Township`, `Alta.Networking`.

Static owner of the network transport (KCP) and all sockets. Pumps receiving in Update and sending in LateUpdate, and keeps packet and error counters for profiling.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Documented in** [Sockets and connections](/game-api/networking/connections#networkmanager), [Update modules](/game-api/console-and-utilities/update-modules)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istransportstarted" /><code>{"static bool IsTransportStarted"}</code> | Whether the transport and update loops have started. |
| <Link id="m-receivingms" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ReceivingMs"}</code> | Average time spent receiving per frame. |
| <Link id="m-sendingms" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SendingMs"}</code> | Average time spent sending per frame. |
| <Link id="m-transport" /><code>{"static "}<Link to="/game-api/types/assembly-other/itransport">{"ITransport"}</Link>{" Transport"}</code> | The transport in use, created on first socket. |

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-receive" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" receive"}</code> |
| <Link id="m-receiveupdatemethod" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" receiveUpdateMethod"}</code> |
| <Link id="m-receivingmodule" /><code>{"private static readonly "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" receivingModule"}</code> |
| <Link id="m-send" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" send"}</code> |
| <Link id="m-sendingmodule" /><code>{"private static readonly "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" sendingModule"}</code> |
| <Link id="m-sendupdatemethod" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" sendUpdateMethod"}</code> |
| <Link id="m-sockets" /><code>{"private static readonly List<"}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> sockets"}</code> |
| <Link id="m-timer" /><code>{"private static readonly Stopwatch timer"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-altanetworkerror-congestion" /><code>{"static ulong AltaNetworkError_Congestion { get; set; }"}</code> | Count of congestion errors from the transport. |
| <Link id="m-altanetworkerror-connectionclosed" /><code>{"static ulong AltaNetworkError_ConnectionClosed { get; set; }"}</code> | Count of connection closed errors. |
| <Link id="m-altanetworkerror-dnsresolve" /><code>{"static ulong AltaNetworkError_DnsResolve { get; set; }"}</code> | Count of DNS errors. |
| <Link id="m-altanetworkerror-invalidreceive" /><code>{"static ulong AltaNetworkError_InvalidReceive { get; set; }"}</code> | Count of invalid receive errors. |
| <Link id="m-altanetworkerror-invalidsend" /><code>{"static ulong AltaNetworkError_InvalidSend { get; set; }"}</code> | Count of invalid send errors. |
| <Link id="m-altanetworkerror-none" /><code>{"static ulong AltaNetworkError_None { get; set; }"}</code> | Count of errors reported with code None. |
| <Link id="m-altanetworkerror-timeout" /><code>{"static ulong AltaNetworkError_Timeout { get; set; }"}</code> | Count of timeout errors. |
| <Link id="m-altanetworkerror-unexpected" /><code>{"static ulong AltaNetworkError_Unexpected { get; set; }"}</code> | Count of unexpected errors. |
| <Link id="m-altanetworkerror-wrongconnection" /><code>{"static ulong AltaNetworkError_WrongConnection { get; set; }"}</code> | Count of wrong connection errors. |
| <Link id="m-failedpackets" /><code>{"static ulong FailedPackets { get; set; }"}</code> | Sends the transport refused. |
| <Link id="m-floodedpackets" /><code>{"static ulong FloodedPackets { get; set; }"}</code> | Sends dropped because the transport connection was flooded. |
| <Link id="m-queuelimitpackets" /><code>{"static ulong QueueLimitPackets { get; set; }"}</code> | Sends dropped because the server or connection queue limit was hit. |
| <Link id="m-reliablepacketoverflowdisconnects" /><code>{"static ulong ReliablePacketOverflowDisconnects { get; set; }"}</code> | Disconnects caused by too many queued reliable packets. |
| <Link id="m-sentpackets" /><code>{"static ulong SentPackets { get; set; }"}</code> | Packets sent successfully. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/alta-networking/networkingsettings">{"NetworkingSettings"}</Link>{" Settings { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closesocket" /><code>{"static void CloseSocket("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | Removes and disposes a socket. |
| <Link id="m-createsocket" /><code>{"static "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" CreateSocket(bool isServer, "}<Link to="/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" transportSystem, int socketPort = 0)"}</code> | Starts the transport if needed and creates a socket (server sockets on the given port). |
| <Link id="m-terminate" /><code>{"static void Terminate()"}</code> | Disposes every socket and shuts the transport down. |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-createtransport" /><code>{"private static void CreateTransport()"}</code> |
| <Link id="m-ensurenetworkinghasstarted" /><code>{"private static void EnsureNetworkingHasStarted()"}</code> |
| <Link id="m-receive-2" /><code>{"private static void Receive()"}</code> |
| <Link id="m-send-2" /><code>{"private static void Send()"}</code> |
| <Link id="m-setupsendreceive" /><code>{"private static void SetupSendReceive("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" _ = null)"}</code> |
| <Link id="m-setuptransportchannels" /><code>{"private static void SetupTransportChannels()"}</code> |

</details>
