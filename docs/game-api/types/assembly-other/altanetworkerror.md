---
title: "AltaNetworkError"
description: "Network errors a transport can report, such as DNS failure, timeout, congestion, bad send or receive, and closed connection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaNetworkError

An **enum** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

Network errors a transport can report, such as DNS failure, timeout, congestion, bad send or receive, and closed connection.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Values

| Member |
| --- |
| <Link id="m-congestion" /><code>{"Congestion = 2"}</code> |
| <Link id="m-connectionclosed" /><code>{"ConnectionClosed = 5"}</code> |
| <Link id="m-dnsresolve" /><code>{"DnsResolve = 0"}</code> |
| <Link id="m-invalidreceive" /><code>{"InvalidReceive = 3"}</code> |
| <Link id="m-invalidsend" /><code>{"InvalidSend = 4"}</code> |
| <Link id="m-none" /><code>{"None = -1"}</code> |
| <Link id="m-timeout" /><code>{"Timeout = 1"}</code> |
| <Link id="m-unexpected" /><code>{"Unexpected = 7"}</code> |
| <Link id="m-wrongconnection" /><code>{"WrongConnection = 6"}</code> |

## Used in

Members of other types that take, return or hold a `AltaNetworkError`:

[`Socket.OnTransportSocketError`](/game-api/types/alta-networking/socket#m-ontransportsocketerror), [`ITransportSocket.OnError`](/game-api/types/assembly-other/itransportsocket#m-onerror), [`KcpClientWrapper.OnError`](/game-api/types/assembly-other/kcpclientwrapper#m-onerror), [`KcpErrorConverter.ConvertKcpErrorToAltaError`](/game-api/types/assembly-other/kcperrorconverter#m-convertkcperrortoaltaerror), [`KcpServerWrapper.OnError`](/game-api/types/assembly-other/kcpserverwrapper#m-onerror), [`KcpTransport.OnError`](/game-api/types/assembly-other/kcptransport#m-onerror).
