---
title: "IPacketProcessor"
description: "interface IPacketProcessor in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPacketProcessor

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`ClientPacketReceiver`](/game-api/types/alta-networking/clientpacketreceiver), [`ServerPacketReceiver`](/game-api/types/alta-networking/serverpacketreceiver), [`IParallelPacketProcessor`](/game-api/types/assembly-other/iparallelpacketprocessor)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process("}<Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, int connection, ArraySegment<byte> data, int channel)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPacketProcessor`:

[`ITransportSocket.ProcessIncoming`](/game-api/types/assembly-other/itransportsocket#m-processincoming), [`KcpClientWrapper.ProcessIncoming`](/game-api/types/assembly-other/kcpclientwrapper#m-processincoming), [`KcpClientWrapper.processor`](/game-api/types/assembly-other/kcpclientwrapper#m-processor), [`KcpServerWrapper.ProcessIncoming`](/game-api/types/assembly-other/kcpserverwrapper#m-processincoming), [`KcpServerWrapper.processor`](/game-api/types/assembly-other/kcpserverwrapper#m-processor).
