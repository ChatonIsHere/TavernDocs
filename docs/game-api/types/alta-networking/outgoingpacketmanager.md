---
title: "OutgoingPacketManager"
description: "Batches outgoing messages for one connection channel into packets and sends them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutgoingPacketManager

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Batches outgoing messages for one connection channel into packets and sends them. Reliable channels keep up to 64 unsent packets and disconnect the player when that fills up. Each `Connection` has one per channel.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OutgoingPacketManager("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-channel" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" Channel"}</code> |
| <Link id="m-connection" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link></code> |
| <Link id="m-currentpacket" /><code>{"private "}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{" CurrentPacket"}</code> |
| <Link id="m-failedpacketsqueue" /><code>{"private readonly Queue<"}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{"> FailedPacketsQueue"}</code> |
| <Link id="m-isreliable" /><code>{"private readonly bool isReliable"}</code> |
| <Link id="m-iswarningonnextpacketloss" /><code>{"private bool IsWarningOnNextPacketLoss"}</code> |
| <Link id="m-lastsceneserialize" /><code>{"private LinkedListNode<"}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> lastSceneSerialize"}</code> |
| <Link id="m-lastsendtime" /><code>{"private float LastSendTime"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maximumfreepackets" /><code>{"private const int MaximumFreePackets"}</code> |
| <Link id="m-maximumpacketsize" /><code>{"private static int maximumPacketSize"}</code> |
| <Link id="m-maximumpendingpacketspermanager" /><code>{"private const int MaximumPendingPacketsPerManager"}</code> |
| <Link id="m-queue" /><code>{"private readonly LinkedList<"}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> queue"}</code> |
| <Link id="m-writermap" /><code>{"private static readonly Dictionary<int, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> writerMap"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-packetsize" /><code>{"static int PacketSize { get; set; }"}</code> | Packet size in bytes for all managers. Set by the socket to the transport packet size minus 100. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-freepackets" /><code>{"private static ConcurrentBag<"}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{"> FreePackets { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Returns queued and current packets to the shared packet pool. |
| <Link id="m-send" /><code>{"bool Send("}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | Adds a message to the current packet, sending that packet first if it is full. Refuses messages bigger than `PacketSize`. |
| <Link id="m-send-2" /><code>{"bool Send("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | Adds a message to the current packet, sending that packet first if it is full. Refuses messages bigger than `PacketSize`. |
| <Link id="m-sendall" /><code>{"virtual bool SendAll(bool isSkippingCurrent = false)"}</code> | Sends any failed reliable packets, then the current packet unless told to skip it. |
| <Link id="m-sendallqueued" /><code>{"void SendAllQueued()"}</code> | Sends every message held back by `SendWithQueued`. |
| <Link id="m-sendwithqueued" /><code>{"bool SendWithQueued("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | Holds a copy of the message until `SendAllQueued`, used while the connection queues sends. On unreliable channels only the latest scene serialize message is kept. |
| <Link id="m-sendwithqueued-2" /><code>{"bool SendWithQueued("}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | Holds a copy of the message until `SendAllQueued`, used while the connection queues sends. On unreliable channels only the latest scene serialize message is kept. |
| <Link id="m-serializetowriter" /><code>{"static "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" SerializeToWriter("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler, out int byteCount)"}</code> | Writes the message type and the handler's body into a shared writer and returns it with its byte count. |
| <Link id="m-startserialize" /><code>{"static "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" StartSerialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type)"}</code> | Gets the shared writer for the connection, clears it and writes the 5-bit message type. |
| <Link id="m-stopserialize" /><code>{"static int StopSerialize("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type)"}</code> | Aligns and flushes the writer and returns the byte count. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Sends the current packet once the channel's maximum send interval has passed; otherwise only retries failed reliable packets. |
| <Link id="m-releasepacket" /><code>{"protected virtual void ReleasePacket("}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{" packet)"}</code> | Returns a packet to the shared pool (up to 512 kept). |
| <Link id="m-sendpacket" /><code>{"protected virtual bool SendPacket("}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{" packet)"}</code> | Sends one packet on the channel. Returns false if the transport refused it. |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-attemptsendanyremainingfailedpackets" /><code>{"private bool AttemptSendAnyRemainingFailedPackets()"}</code> |
| <Link id="m-createpacket" /><code>{"private static "}<Link to="/game-api/types/alta-networking/packet">{"Packet"}</Link>{" CreatePacket()"}</code> |
| <Link id="m-preparecurrentpacket" /><code>{"private void PrepareCurrentPacket()"}</code> |
| <Link id="m-reliableoverflow" /><code>{"private void ReliableOverflow()"}</code> |
| <Link id="m-writetocurrent" /><code>{"private bool WriteToCurrent("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |
| <Link id="m-writetoreliable" /><code>{"private bool WriteToReliable("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |
| <Link id="m-writetounreliable" /><code>{"private bool WriteToUnreliable("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `OutgoingPacketManager`:

[`Connection.outgoingPacketManagers`](/game-api/types/alta-networking/connection#m-outgoingpacketmanagers), [`Connection.packetManagerMap`](/game-api/types/alta-networking/connection#m-packetmanagermap).
