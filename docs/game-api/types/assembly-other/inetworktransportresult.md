---
title: "INetworkTransportResult"
description: "Result of a network transport operation such as a send or processing incoming packets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkTransportResult

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

Result of a network transport operation such as a send or processing incoming packets.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`NetworkTransportResult`](/game-api/types/assembly-other/networktransportresult)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; }"}</code> | Error message when the operation failed. |
| <Link id="m-issuccess" /><code>{"bool IsSuccess { get; }"}</code> | True when the operation worked. |

## Used in

Members of other types that take, return or hold a `INetworkTransportResult`:

[`Connection.InternalSend`](/game-api/types/alta-networking/connection#m-internalsend), [`PacketSentHandler.BeginInvoke`](/game-api/types/alta-networking/packetsenthandler#m-begininvoke), [`PacketSentHandler.Invoke`](/game-api/types/alta-networking/packetsenthandler#m-invoke), [`ITransportConnection.Disconnect`](/game-api/types/assembly-other/itransportconnection#m-disconnect), [`ITransportConnection.Send`](/game-api/types/assembly-other/itransportconnection#m-send), [`ITransportSocket.ProcessIncoming`](/game-api/types/assembly-other/itransportsocket#m-processincoming), [`ITransportSocket.ProcessOutgoing`](/game-api/types/assembly-other/itransportsocket#m-processoutgoing), [`ITransportSocket.Terminate`](/game-api/types/assembly-other/itransportsocket#m-terminate), [`KcpClientConnection.Disconnect`](/game-api/types/assembly-other/kcpclientconnection#m-disconnect), [`KcpClientConnection.Send`](/game-api/types/assembly-other/kcpclientconnection#m-send), [`KcpClientWrapper.ProcessIncoming`](/game-api/types/assembly-other/kcpclientwrapper#m-processincoming), [`KcpClientWrapper.ProcessOutgoing`](/game-api/types/assembly-other/kcpclientwrapper#m-processoutgoing), [`KcpClientWrapper.Terminate`](/game-api/types/assembly-other/kcpclientwrapper#m-terminate), [`KcpServerConnection.Disconnect`](/game-api/types/assembly-other/kcpserverconnection#m-disconnect), [`KcpServerConnection.Send`](/game-api/types/assembly-other/kcpserverconnection#m-send), [`KcpServerWrapper.ProcessIncoming`](/game-api/types/assembly-other/kcpserverwrapper#m-processincoming), [`KcpServerWrapper.ProcessOutgoing`](/game-api/types/assembly-other/kcpserverwrapper#m-processoutgoing), [`KcpServerWrapper.Terminate`](/game-api/types/assembly-other/kcpserverwrapper#m-terminate).
