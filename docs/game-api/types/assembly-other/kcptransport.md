---
title: "KcpTransport"
description: "class KcpTransport in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpTransport

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransport`](/game-api/types/assembly-other/itransport)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KcpTransport("}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-channelcount" /><code>{"private int channelCount"}</code> |
| <Link id="m-channelreliability" /><code>{"private readonly bool[] channelReliability"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-byteoffset" /><code>{"int ByteOffset { get; }"}</code> |
| <Link id="m-packetsize" /><code>{"int PacketSize { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-connect" /><code><Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" Connect(string ipAddress, int port)"}</code> |
| <Link id="m-createchannel" /><code>{"int CreateChannel(bool isReliable)"}</code> |
| <Link id="m-createserver" /><code><Link to="/game-api/types/assembly-other/itransportserver">{"ITransportServer"}</Link>{" CreateServer(int port)"}</code> |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> |
| <Link id="m-tokcpchannel" /><code>{"KcpChannel ToKcpChannel(int channelId)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-fixnonalloc" /><code>{"private void FixNonAlloc()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `KcpTransport`:

[`KcpClientConnection.KcpClientConnection`](/game-api/types/assembly-other/kcpclientconnection#m-ctor), [`KcpClientConnection.transport`](/game-api/types/assembly-other/kcpclientconnection#m-transport), [`KcpClientWrapper.KcpClientWrapper`](/game-api/types/assembly-other/kcpclientwrapper#m-ctor), [`KcpServerConnection.KcpServerConnection`](/game-api/types/assembly-other/kcpserverconnection#m-ctor), [`KcpServerConnection.transport`](/game-api/types/assembly-other/kcpserverconnection#m-transport), [`KcpServerWrapper.KcpServerWrapper`](/game-api/types/assembly-other/kcpserverwrapper#m-ctor), [`KcpServerWrapper.transport`](/game-api/types/assembly-other/kcpserverwrapper#m-transport).
