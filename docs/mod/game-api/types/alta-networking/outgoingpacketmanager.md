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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OutgoingPacketManager("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Creates an `OutgoingPacketManager` from `connection` and `channel`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" Channel"}</code> | <span className="api-desc">The connection channel this manager sends on.</span> |
| <Link id="m-connection" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link></code> | <span className="api-desc">The connection this manager sends to.</span> |
| <Link id="m-currentpacket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/packet">{"Packet"}</Link>{" CurrentPacket"}</code> | <span className="api-desc">The packet messages are currently being written into.</span> |
| <Link id="m-failedpacketsqueue" /><code>{"private readonly Queue<"}<Link to="/mod/game-api/types/alta-networking/packet">{"Packet"}</Link>{"> FailedPacketsQueue"}</code> | <span className="api-desc">Reliable channels only: packets that could not be sent yet and wait for a retry.</span> |
| <Link id="m-isreliable" /><code>{"private readonly bool isReliable"}</code> | <span className="api-desc">Whether the channel is reliable.</span> |
| <Link id="m-iswarningonnextpacketloss" /><code>{"private bool IsWarningOnNextPacketLoss"}</code> | <span className="api-desc">Whether the next queue overflow should log an error and force a disconnect. Re-armed once the failed queue drops below 32.</span> |
| <Link id="m-lastsceneserialize" /><code>{"private LinkedListNode<"}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> lastSceneSerialize"}</code> | <span className="api-desc">On unreliable channels, the queued scene serialize message (type 28), replaced when a newer one is queued.</span> |
| <Link id="m-lastsendtime" /><code>{"private float LastSendTime"}</code> | <span className="api-desc">Real time of the last full send, checked against the channel's maximum send interval in `Update`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maximumfreepackets" /><code>{"private const int MaximumFreePackets"}</code> | <span className="api-desc">Largest number of spare packets kept in the pool (512).</span> |
| <Link id="m-maximumpacketsize" /><code>{"private static int maximumPacketSize"}</code> | <span className="api-desc">Largest `PacketSize` seen so far; the shared writers are rebuilt when it grows.</span> |
| <Link id="m-maximumpendingpacketspermanager" /><code>{"private const int MaximumPendingPacketsPerManager"}</code> | <span className="api-desc">Failed packets a reliable manager can hold (64) before it disconnects the connection.</span> |
| <Link id="m-queue" /><code>{"private readonly LinkedList<"}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> queue"}</code> | <span className="api-desc">Messages held by `SendWithQueued` until `SendAllQueued` is called.</span> |
| <Link id="m-writermap" /><code>{"private static readonly Dictionary<int, "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{"> writerMap"}</code> | <span className="api-desc">Shared stream writers, one per connection identifier, reused for serializing messages.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-packetsize" /><code>{"static int PacketSize { get; set; }"}</code> | <span className="api-desc">Packet size in bytes for all managers. Set by the socket to the transport packet size minus 100.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-freepackets" /><code>{"private static ConcurrentBag<"}<Link to="/mod/game-api/types/alta-networking/packet">{"Packet"}</Link>{"> FreePackets { get; }"}</code> | <span className="api-desc">Shared pool of spare packets, reused by `PrepareCurrentPacket` and filled by `ReleasePacket`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Returns queued and current packets to the shared packet pool.</span> |
| <Link id="m-send" /><code>{"bool Send("}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | <span className="api-desc">Adds a message to the current packet, sending that packet first if it is full. Refuses messages bigger than `PacketSize`.</span> |
| <Link id="m-send-2" /><code>{"bool Send("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | <span className="api-desc">Adds a message to the current packet, sending that packet first if it is full. Refuses messages bigger than `PacketSize`.</span> |
| <Link id="m-sendall" /><code>{"virtual bool SendAll(bool isSkippingCurrent = false)"}</code> | <span className="api-desc">Sends any failed reliable packets, then the current packet unless told to skip it.</span> |
| <Link id="m-sendallqueued" /><code>{"void SendAllQueued()"}</code> | <span className="api-desc">Sends every message held back by `SendWithQueued`.</span> |
| <Link id="m-sendwithqueued" /><code>{"bool SendWithQueued("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | <span className="api-desc">Holds a copy of the message until `SendAllQueued`, used while the connection queues sends. On unreliable channels only the latest scene serialize message is kept.</span> |
| <Link id="m-sendwithqueued-2" /><code>{"bool SendWithQueued("}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | <span className="api-desc">Holds a copy of the message until `SendAllQueued`, used while the connection queues sends. On unreliable channels only the latest scene serialize message is kept.</span> |
| <Link id="m-serializetowriter" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" SerializeToWriter("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler, out int byteCount)"}</code> | <span className="api-desc">Writes the message type and the handler's body into a shared writer and returns it with its byte count.</span> |
| <Link id="m-startserialize" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" StartSerialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type)"}</code> | <span className="api-desc">Gets the shared writer for the connection, clears it and writes the 5-bit message type.</span> |
| <Link id="m-stopserialize" /><code>{"static int StopSerialize("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type)"}</code> | <span className="api-desc">Aligns and flushes the writer and returns the byte count.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Sends the current packet once the channel's maximum send interval has passed; otherwise only retries failed reliable packets.</span> |
| <Link id="m-releasepacket" /><code>{"protected virtual void ReleasePacket("}<Link to="/mod/game-api/types/alta-networking/packet">{"Packet"}</Link>{" packet)"}</code> | <span className="api-desc">Returns a packet to the shared pool (up to 512 kept).</span> |
| <Link id="m-sendpacket" /><code>{"protected virtual bool SendPacket("}<Link to="/mod/game-api/types/alta-networking/packet">{"Packet"}</Link>{" packet)"}</code> | <span className="api-desc">Sends one packet on the channel. Returns false if the transport refused it.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptsendanyremainingfailedpackets" /><code>{"private bool AttemptSendAnyRemainingFailedPackets()"}</code> | <span className="api-desc">Reliable channels: resends queued packets that failed earlier, in order, stopping at the first that fails again.</span> |
| <Link id="m-createpacket" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/packet">{"Packet"}</Link>{" CreatePacket()"}</code> | <span className="api-desc">Makes a new empty packet of `PacketSize`.</span> |
| <Link id="m-preparecurrentpacket" /><code>{"private void PrepareCurrentPacket()"}</code> | <span className="api-desc">Takes a packet from the pool (or makes one) and sets it as the current packet.</span> |
| <Link id="m-reliableoverflow" /><code>{"private void ReliableOverflow()"}</code> | <span className="api-desc">Disconnects the connection with the reason "Reliable overflow". Called a moment after the failed queue fills up.</span> |
| <Link id="m-writetocurrent" /><code>{"private bool WriteToCurrent("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | <span className="api-desc">Writes a message into the current packet, and sends straight away if the channel has no send interval.</span> |
| <Link id="m-writetoreliable" /><code>{"private bool WriteToReliable("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | <span className="api-desc">Called when the current packet is full on a reliable channel: sends it or queues it as failed, then starts a new one. Disconnects the client when 64 packets are queued.</span> |
| <Link id="m-writetounreliable" /><code>{"private bool WriteToUnreliable("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | <span className="api-desc">Called when the current packet is full on an unreliable channel: sends it and writes the message to the next packet.</span> |

</details>

## Used in

Members of other types that take, return or hold a `OutgoingPacketManager`:

<div className="api-used-in">

[`Connection.outgoingPacketManagers`](/mod/game-api/types/alta-networking/connection#m-outgoingpacketmanagers), [`Connection.packetManagerMap`](/mod/game-api/types/alta-networking/connection#m-packetmanagermap).

</div>
