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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Documented in** [Sockets and connections](/mod/game-api/networking/connections#networkmanager), [Update modules](/mod/game-api/console-and-utilities/update-modules)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istransportstarted" /><code>{"static bool IsTransportStarted"}</code> | <span className="api-desc">Whether the transport and update loops have started.</span> |
| <Link id="m-receivingms" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ReceivingMs"}</code> | <span className="api-desc">Average time spent receiving per frame.</span> |
| <Link id="m-sendingms" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SendingMs"}</code> | <span className="api-desc">Average time spent sending per frame.</span> |
| <Link id="m-transport" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/itransport">{"ITransport"}</Link>{" Transport"}</code> | <span className="api-desc">The transport in use, created on first socket.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-receive" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" receive"}</code> | <span className="api-desc">Update handle cleared by `Terminate`; never set, so `Terminate` does not stop `Receive`.</span> |
| <Link id="m-receiveupdatemethod" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" receiveUpdateMethod"}</code> | <span className="api-desc">Update handle for `Receive`.</span> |
| <Link id="m-receivingmodule" /><code>{"private static readonly "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" receivingModule"}</code> | <span className="api-desc">Update module (Update) that runs `Receive`, included in server profiling.</span> |
| <Link id="m-send" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" send"}</code> | <span className="api-desc">Update handle cleared by `Terminate`; never set, so `Terminate` does not stop `Send`.</span> |
| <Link id="m-sendingmodule" /><code>{"private static readonly "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" sendingModule"}</code> | <span className="api-desc">Update module (LateUpdate) that runs `Send`, included in server profiling.</span> |
| <Link id="m-sendupdatemethod" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" sendUpdateMethod"}</code> | <span className="api-desc">Update handle for `Send`.</span> |
| <Link id="m-sockets" /><code>{"private static readonly List<"}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> sockets"}</code> | <span className="api-desc">All open sockets, updated each frame.</span> |
| <Link id="m-timer" /><code>{"private static readonly Stopwatch timer"}</code> | <span className="api-desc">Stopwatch used to time send and receive.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-altanetworkerror-congestion" /><code>{"static ulong AltaNetworkError_Congestion { get; set; }"}</code> | <span className="api-desc">Count of congestion errors from the transport.</span> |
| <Link id="m-altanetworkerror-connectionclosed" /><code>{"static ulong AltaNetworkError_ConnectionClosed { get; set; }"}</code> | <span className="api-desc">Count of connection closed errors.</span> |
| <Link id="m-altanetworkerror-dnsresolve" /><code>{"static ulong AltaNetworkError_DnsResolve { get; set; }"}</code> | <span className="api-desc">Count of DNS errors.</span> |
| <Link id="m-altanetworkerror-invalidreceive" /><code>{"static ulong AltaNetworkError_InvalidReceive { get; set; }"}</code> | <span className="api-desc">Count of invalid receive errors.</span> |
| <Link id="m-altanetworkerror-invalidsend" /><code>{"static ulong AltaNetworkError_InvalidSend { get; set; }"}</code> | <span className="api-desc">Count of invalid send errors.</span> |
| <Link id="m-altanetworkerror-none" /><code>{"static ulong AltaNetworkError_None { get; set; }"}</code> | <span className="api-desc">Count of errors reported with code None.</span> |
| <Link id="m-altanetworkerror-timeout" /><code>{"static ulong AltaNetworkError_Timeout { get; set; }"}</code> | <span className="api-desc">Count of timeout errors.</span> |
| <Link id="m-altanetworkerror-unexpected" /><code>{"static ulong AltaNetworkError_Unexpected { get; set; }"}</code> | <span className="api-desc">Count of unexpected errors.</span> |
| <Link id="m-altanetworkerror-wrongconnection" /><code>{"static ulong AltaNetworkError_WrongConnection { get; set; }"}</code> | <span className="api-desc">Count of wrong connection errors.</span> |
| <Link id="m-failedpackets" /><code>{"static ulong FailedPackets { get; set; }"}</code> | <span className="api-desc">Sends the transport refused.</span> |
| <Link id="m-floodedpackets" /><code>{"static ulong FloodedPackets { get; set; }"}</code> | <span className="api-desc">Sends dropped because the transport connection was flooded.</span> |
| <Link id="m-queuelimitpackets" /><code>{"static ulong QueueLimitPackets { get; set; }"}</code> | <span className="api-desc">Sends dropped because the server or connection queue limit was hit.</span> |
| <Link id="m-reliablepacketoverflowdisconnects" /><code>{"static ulong ReliablePacketOverflowDisconnects { get; set; }"}</code> | <span className="api-desc">Disconnects caused by too many queued reliable packets.</span> |
| <Link id="m-sentpackets" /><code>{"static ulong SentPackets { get; set; }"}</code> | <span className="api-desc">Packets sent successfully.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/networkingsettings">{"NetworkingSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The global `NetworkingSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closesocket" /><code>{"static void CloseSocket("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | <span className="api-desc">Removes and disposes a socket.</span> |
| <Link id="m-createsocket" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" CreateSocket(bool isServer, "}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" transportSystem, int socketPort = 0)"}</code> | <span className="api-desc">Starts the transport if needed and creates a socket (server sockets on the given port).</span> |
| <Link id="m-terminate" /><code>{"static void Terminate()"}</code> | <span className="api-desc">Disposes every socket and shuts the transport down.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createtransport" /><code>{"private static void CreateTransport()"}</code> | <span className="api-desc">Creates the transport from `NetworkingSettings`; only KCP is supported, anything else throws.</span> |
| <Link id="m-ensurenetworkinghasstarted" /><code>{"private static void EnsureNetworkingHasStarted()"}</code> | <span className="api-desc">On first use, creates the transport, its channels and the send and receive update calls.</span> |
| <Link id="m-receive-2" /><code>{"private static void Receive()"}</code> | <span className="api-desc">Each `Update`, runs every socket's receive and records the time in `ReceivingMs`.</span> |
| <Link id="m-send-2" /><code>{"private static void Send()"}</code> | <span className="api-desc">Each `LateUpdate`, runs every socket's send and records the time in `SendingMs`.</span> |
| <Link id="m-setupsendreceive" /><code>{"private static void SetupSendReceive("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" _ = null)"}</code> | <span className="api-desc">Registers `Receive` and `Send` on their update modules, replacing any earlier registration.</span> |
| <Link id="m-setuptransportchannels" /><code>{"private static void SetupTransportChannels()"}</code> | <span className="api-desc">Creates a transport channel for each channel in the settings.</span> |

</details>
