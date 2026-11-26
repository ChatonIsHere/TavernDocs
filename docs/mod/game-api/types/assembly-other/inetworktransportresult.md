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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`NetworkTransportResult`](/mod/game-api/types/assembly-other/networktransportresult)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; }"}</code> | Error message when the operation failed. |
| <Link id="m-issuccess" /><code>{"bool IsSuccess { get; }"}</code> | True when the operation worked. |

## Used in

Members of other types that take, return or hold a `INetworkTransportResult`:

[`Connection.InternalSend`](/mod/game-api/types/alta-networking/connection#m-internalsend), [`PacketSentHandler.BeginInvoke`](/mod/game-api/types/alta-networking/packetsenthandler#m-begininvoke), [`PacketSentHandler.Invoke`](/mod/game-api/types/alta-networking/packetsenthandler#m-invoke), [`ITransportConnection.Disconnect`](/mod/game-api/types/assembly-other/itransportconnection#m-disconnect), [`ITransportConnection.Send`](/mod/game-api/types/assembly-other/itransportconnection#m-send), [`ITransportSocket.ProcessIncoming`](/mod/game-api/types/assembly-other/itransportsocket#m-processincoming), [`ITransportSocket.ProcessOutgoing`](/mod/game-api/types/assembly-other/itransportsocket#m-processoutgoing), [`ITransportSocket.Terminate`](/mod/game-api/types/assembly-other/itransportsocket#m-terminate), [`KcpClientConnection.Disconnect`](/mod/game-api/types/assembly-other/kcpclientconnection#m-disconnect), [`KcpClientConnection.Send`](/mod/game-api/types/assembly-other/kcpclientconnection#m-send), [`KcpClientWrapper.ProcessIncoming`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-processincoming), [`KcpClientWrapper.ProcessOutgoing`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-processoutgoing), [`KcpClientWrapper.Terminate`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-terminate), [`KcpServerConnection.Disconnect`](/mod/game-api/types/assembly-other/kcpserverconnection#m-disconnect), [`KcpServerConnection.Send`](/mod/game-api/types/assembly-other/kcpserverconnection#m-send), [`KcpServerWrapper.ProcessIncoming`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-processincoming), [`KcpServerWrapper.ProcessOutgoing`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-processoutgoing), [`KcpServerWrapper.Terminate`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-terminate).
