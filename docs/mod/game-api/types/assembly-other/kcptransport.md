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
| <Link id="m-ctor" /><code>{"KcpTransport("}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `KcpTransport` from `settings`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channelcount" /><code>{"private int channelCount"}</code> | <span className="api-desc">Number of channels created so far; the next channel ID.</span> |
| <Link id="m-channelreliability" /><code>{"private readonly bool[] channelReliability"}</code> | <span className="api-desc">Whether each channel ID (up to 256) is reliable.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">NLog logger that the KCP library's info, warning and error logs are routed to (warnings log as errors).</span> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> | <span className="api-desc">The KCP settings passed to every server and client this transport creates.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-byteoffset" /><code>{"int ByteOffset { get; }"}</code> | <span className="api-desc">Bytes reserved at the start of each packet buffer before game data; 1 for KCP.</span> |
| <Link id="m-packetsize" /><code>{"int PacketSize { get; }"}</code> | <span className="api-desc">Maximum packet size in bytes (1200).</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> | <span className="api-desc">Raised when the transport reports a network error.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connect" /><code><Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" Connect(string ipAddress, int port)"}</code> | <span className="api-desc">Client: starts a KCP connection to the given address and port and returns the client wrapper.</span> |
| <Link id="m-createchannel" /><code>{"int CreateChannel(bool isReliable)"}</code> | <span className="api-desc">Registers the next channel ID as reliable or unreliable and returns that ID.</span> |
| <Link id="m-createserver" /><code><Link to="/mod/game-api/types/assembly-other/itransportserver">{"ITransportServer"}</Link>{" CreateServer(int port)"}</code> | <span className="api-desc">Server: starts a KCP server on the given port and returns the server wrapper.</span> |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | <span className="api-desc">Does nothing for KCP.</span> |
| <Link id="m-tokcpchannel" /><code>{"KcpChannel ToKcpChannel(int channelId)"}</code> | <span className="api-desc">Maps a channel ID to KCP's reliable or unreliable channel, as set by `CreateChannel`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixnonalloc" /><code>{"private void FixNonAlloc()"}</code> | <span className="api-desc">Forces the KCP settings to non-allocating mode; called from the constructor.</span> |

</details>

## Used in

Members of other types that take, return or hold a `KcpTransport`:

<div className="api-used-in">

[`KcpClientConnection.KcpClientConnection`](/mod/game-api/types/assembly-other/kcpclientconnection#m-ctor), [`KcpClientConnection.transport`](/mod/game-api/types/assembly-other/kcpclientconnection#m-transport), [`KcpClientWrapper.KcpClientWrapper`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-ctor), [`KcpServerConnection.KcpServerConnection`](/mod/game-api/types/assembly-other/kcpserverconnection#m-ctor), [`KcpServerConnection.transport`](/mod/game-api/types/assembly-other/kcpserverconnection#m-transport), [`KcpServerWrapper.KcpServerWrapper`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-ctor), [`KcpServerWrapper.transport`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-transport).

</div>
