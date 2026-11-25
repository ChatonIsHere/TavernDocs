---
title: "OutgoingPacketManager"
description: "class OutgoingPacketManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutgoingPacketManager

A **class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OutgoingPacketManager("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" Channel"}</code> |  |
| <Link id="m-connection" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link></code> |  |
| <Link id="m-currentpacket" /><code>{"private "}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{" CurrentPacket"}</code> |  |
| <Link id="m-failedpacketsqueue" /><code>{"private readonly Queue<"}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{"> FailedPacketsQueue"}</code> |  |
| <Link id="m-isreliable" /><code>{"private readonly bool isReliable"}</code> |  |
| <Link id="m-iswarningonnextpacketloss" /><code>{"private bool IsWarningOnNextPacketLoss"}</code> |  |
| <Link id="m-lastsceneserialize" /><code>{"private LinkedListNode<"}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> lastSceneSerialize"}</code> |  |
| <Link id="m-lastsendtime" /><code>{"private float LastSendTime"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maximumfreepackets" /><code>{"private const int MaximumFreePackets"}</code> |  |
| <Link id="m-maximumpacketsize" /><code>{"private static int maximumPacketSize"}</code> |  |
| <Link id="m-maximumpendingpacketspermanager" /><code>{"private const int MaximumPendingPacketsPerManager"}</code> |  |
| <Link id="m-queue" /><code>{"private readonly LinkedList<"}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> queue"}</code> |  |
| <Link id="m-writermap" /><code>{"private static readonly Dictionary<int, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> writerMap"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-packetsize" /><code>{"static int PacketSize { get; set; }"}</code> |  |
| <Link id="m-freepackets" /><code>{"private static ConcurrentBag<"}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{"> FreePackets { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-send" /><code>{"bool Send("}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> |  |
| <Link id="m-send-2" /><code>{"bool Send("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |  |
| <Link id="m-sendall" /><code>{"virtual bool SendAll(bool isSkippingCurrent = false)"}</code> |  |
| <Link id="m-sendallqueued" /><code>{"void SendAllQueued()"}</code> |  |
| <Link id="m-sendwithqueued" /><code>{"bool SendWithQueued("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |  |
| <Link id="m-sendwithqueued-2" /><code>{"bool SendWithQueued("}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> |  |
| <Link id="m-serializetowriter" /><code>{"static "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" SerializeToWriter("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler, out int byteCount)"}</code> |  |
| <Link id="m-startserialize" /><code>{"static "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" StartSerialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type)"}</code> |  |
| <Link id="m-stopserialize" /><code>{"static int StopSerialize("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type)"}</code> |  |
| <Link id="m-update" /><code>{"void Update()"}</code> |  |
| <Link id="m-attemptsendanyremainingfailedpackets" /><code>{"private bool AttemptSendAnyRemainingFailedPackets()"}</code> |  |
| <Link id="m-createpacket" /><code>{"private static "}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{" CreatePacket()"}</code> |  |
| <Link id="m-preparecurrentpacket" /><code>{"private void PrepareCurrentPacket()"}</code> |  |
| <Link id="m-releasepacket" /><code>{"protected virtual void ReleasePacket("}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{" packet)"}</code> |  |
| <Link id="m-reliableoverflow" /><code>{"private void ReliableOverflow()"}</code> |  |
| <Link id="m-sendpacket" /><code>{"protected virtual bool SendPacket("}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{" packet)"}</code> |  |
| <Link id="m-writetocurrent" /><code>{"private bool WriteToCurrent("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |  |
| <Link id="m-writetoreliable" /><code>{"private bool WriteToReliable("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |  |
| <Link id="m-writetounreliable" /><code>{"private bool WriteToUnreliable("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |  |

## Used in

Members of other types that take, return or hold a `OutgoingPacketManager`:

[`Connection.outgoingPacketManagers`](/game-api/types/alta-networking/connection#m-outgoingpacketmanagers), [`Connection.packetManagerMap`](/game-api/types/alta-networking/connection#m-packetmanagermap).
