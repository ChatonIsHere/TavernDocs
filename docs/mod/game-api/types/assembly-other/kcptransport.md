---
title: "KcpTransport"
description: "The KCP (reliable UDP) network transport the game uses by default."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpTransport

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

The KCP (reliable UDP) network transport the game uses by default. `NetworkManager` creates it from `KcpSettings`; both sides use it to open servers and client connections.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ITransport`](/mod/game-api/types/assembly-other/itransport)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KcpTransport("}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> | Creates a `KcpTransport` from `settings`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channelcount" /><code>{"private int channelCount"}</code> | Number of channels created so far; the next channel ID. |
| <Link id="m-channelreliability" /><code>{"private readonly bool[] channelReliability"}</code> | Whether each channel ID (up to 256) is reliable. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | NLog logger that the KCP library's info, warning and error logs are routed to (warnings log as errors). |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> | The KCP settings passed to every server and client this transport creates. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-byteoffset" /><code>{"int ByteOffset { get; }"}</code> | Bytes reserved at the start of each packet buffer before game data; 1 for KCP. |
| <Link id="m-packetsize" /><code>{"int PacketSize { get; }"}</code> | Maximum packet size in bytes (1200). |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> | Raised when the transport reports a network error. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connect" /><code><Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" Connect(string ipAddress, int port)"}</code> | Client: starts a KCP connection to the given address and port and returns the client wrapper. |
| <Link id="m-createchannel" /><code>{"int CreateChannel(bool isReliable)"}</code> | Registers the next channel ID as reliable or unreliable and returns that ID. |
| <Link id="m-createserver" /><code><Link to="/mod/game-api/types/assembly-other/itransportserver">{"ITransportServer"}</Link>{" CreateServer(int port)"}</code> | Server: starts a KCP server on the given port and returns the server wrapper. |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | Does nothing for KCP. |
| <Link id="m-tokcpchannel" /><code>{"KcpChannel ToKcpChannel(int channelId)"}</code> | Maps a channel ID to KCP's reliable or unreliable channel, as set by `CreateChannel`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixnonalloc" /><code>{"private void FixNonAlloc()"}</code> | Forces the KCP settings to non-allocating mode; called from the constructor. |

</details>

## Used in

Members of other types that take, return or hold a `KcpTransport`:

[`KcpClientConnection.KcpClientConnection`](/mod/game-api/types/assembly-other/kcpclientconnection#m-ctor), [`KcpClientConnection.transport`](/mod/game-api/types/assembly-other/kcpclientconnection#m-transport), [`KcpClientWrapper.KcpClientWrapper`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-ctor), [`KcpServerConnection.KcpServerConnection`](/mod/game-api/types/assembly-other/kcpserverconnection#m-ctor), [`KcpServerConnection.transport`](/mod/game-api/types/assembly-other/kcpserverconnection#m-transport), [`KcpServerWrapper.KcpServerWrapper`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-ctor), [`KcpServerWrapper.transport`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-transport).
