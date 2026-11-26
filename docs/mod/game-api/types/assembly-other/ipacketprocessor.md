---
title: "IPacketProcessor"
description: "Handles packets the network transport receives."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPacketProcessor

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

Handles packets the network transport receives.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`ClientPacketReceiver`](/mod/game-api/types/alta-networking/clientpacketreceiver), [`ServerPacketReceiver`](/mod/game-api/types/alta-networking/serverpacketreceiver), [`IParallelPacketProcessor`](/mod/game-api/types/assembly-other/iparallelpacketprocessor)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process("}<Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, int connection, ArraySegment<byte> data, int channel)"}</code> | Handles one packet from a connection on the given socket and channel. |

## Used in

Members of other types that take, return or hold a `IPacketProcessor`:

[`ITransportSocket.ProcessIncoming`](/mod/game-api/types/assembly-other/itransportsocket#m-processincoming), [`KcpClientWrapper.ProcessIncoming`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-processincoming), [`KcpClientWrapper.processor`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-processor), [`KcpServerWrapper.ProcessIncoming`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-processincoming), [`KcpServerWrapper.processor`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-processor).
