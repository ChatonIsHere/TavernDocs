---
title: "ConnectionChannel"
description: "A ScriptableObject that defines a network message channel: reliable or not, quality of service, and how clients queue what they receive."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionChannel

A **class** in `Root.Township`, `Alta.Networking`.

A ScriptableObject that defines a network message channel: reliable or not, quality of service, and how clients queue what they receive.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ConnectionChannel.Create`](/game-api/types/alta-networking/connectionchannel-create), [`ConnectionChannelStatistics`](/game-api/types/alta-utilities/connectionchannelstatistics)
- **Nested types** [`Create`](/game-api/types/alta-networking/connectionchannel-create)
- **Documented in** [Sockets and connections](/game-api/networking/connections#connectionchannel)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConnectionChannel()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isreliable" /><code>{"private bool isReliable"}</code> | Whether messages on this channel are sent reliably; picks transport channel 0 (reliable) or 1 (unreliable) in `Initialize`. |
| <Link id="m-maximumsendinterval" /><code>{"private float maximumSendInterval"}</code> | Longest time in seconds (default 0.03) between sends on this channel. |
| <Link id="m-qualityofservice" /><code>{"private QosType qualityOfService"}</code> | Unity networking QoS type for the channel, exposed as `QualityOfService`. |
| <Link id="m-receivertype" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionreceivertype">{"ConnectionReceiverType"}</Link>{" receiverType"}</code> | Client: which receiver (timed queue, counted queue or normal) handles incoming messages. The server always uses a normal receiver. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; private set; }"}</code> | Index given to the channel by `Initialize`. |
| <Link id="m-isreliable-2" /><code>{"bool IsReliable { get; }"}</code> | Whether messages on this channel are reliable. |
| <Link id="m-maximumsendinterval-2" /><code>{"float MaximumSendInterval { get; }"}</code> | Longest time in seconds between sends on this channel (default 0.03). |
| <Link id="m-qualityofservice-2" /><code>{"QosType QualityOfService { get; }"}</code> | The Unity networking QoS type set on the asset. |
| <Link id="m-transportchannel" /><code>{"int TransportChannel { get; protected set; }"}</code> | The transport channel used: 0 for reliable, 1 for unreliable. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnectionreceiver" /><code>{"virtual "}<Link to="/game-api/types/alta-networking/connectionreceiver">{"ConnectionReceiver"}</Link>{" CreateConnectionReceiver("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Makes the receiver for a connection. The server always uses a normal receiver; clients use the timed, counted or normal type set on the asset. |
| <Link id="m-initialize" /><code>{"void Initialize(int identifier)"}</code> | Sets the channel's identifier and picks the transport channel (0 for reliable, 1 for unreliable). |

## Used in

Members of other types that take, return or hold a `ConnectionChannel`:

[`Connection.channels`](/game-api/types/alta-networking/connection#m-channels), [`Connection.Connection`](/game-api/types/alta-networking/connection#m-ctor), [`Connection.DefaultChannel`](/game-api/types/alta-networking/connection#m-defaultchannel), [`Connection.InternalSend`](/game-api/types/alta-networking/connection#m-internalsend), [`Connection.packetManagerMap`](/game-api/types/alta-networking/connection#m-packetmanagermap), [`Connection.Send`](/game-api/types/alta-networking/connection#m-send), [`EntityMessageHandler.SendToChunks`](/game-api/types/alta-networking/entitymessagehandler#m-sendtochunks), [`EntityMessageHandler.SendToPlayer`](/game-api/types/alta-networking/entitymessagehandler#m-sendtoplayer), [`FakeSocket.DefaultChannel`](/game-api/types/alta-networking/fakesocket#m-defaultchannel), [`FakeSocket.SendToAll`](/game-api/types/alta-networking/fakesocket#m-sendtoall), [`FakeSocket.SendToPlayers`](/game-api/types/alta-networking/fakesocket#m-sendtoplayers), [`INetworkScene.ChunkSyncChannel`](/game-api/types/alta-networking/inetworkscene#m-chunksyncchannel), [`ConnectionReceiver.channel`](/game-api/types/alta-networking/connectionreceiver#m-channel), [`ConnectionReceiver.ConnectionReceiver`](/game-api/types/alta-networking/connectionreceiver#m-ctor), [`CountedQueuedConnectionReceiver.CountedQueuedConnectionReceiver`](/game-api/types/alta-networking/countedqueuedconnectionreceiver#m-ctor), [`MessageProcessor.HandleMessage`](/game-api/types/alta-networking/messageprocessor#m-handlemessage), [`MessageProcessor.ProcessSingleMessageFromData`](/game-api/types/alta-networking/messageprocessor#m-processsinglemessagefromdata), [`NormalConnectionReceiver.NormalConnectionReceiver`](/game-api/types/alta-networking/normalconnectionreceiver#m-ctor), [`OutgoingPacketManager.Channel`](/game-api/types/alta-networking/outgoingpacketmanager#m-channel), [`OutgoingPacketManager.OutgoingPacketManager`](/game-api/types/alta-networking/outgoingpacketmanager#m-ctor), [`Packet.Send`](/game-api/types/alta-networking/packet#m-send), [`QueuedConnectionReceiver.QueuedConnectionReceiver`](/game-api/types/alta-networking/queuedconnectionreceiver#m-ctor), [`SceneSerializer.SerializationChannel`](/game-api/types/alta-networking/sceneserializer#m-serializationchannel), [`TimedQueuedConnectionReceiver.TimedQueuedConnectionReceiver`](/game-api/types/alta-networking/timedqueuedconnectionreceiver#m-ctor), [`InternalMessage.SendToPlayers`](/game-api/types/alta-networking/internalmessage#m-sendtoplayers), [`InternalMessage.SendToServer`](/game-api/types/alta-networking/internalmessage#m-sendtoserver), [`ISocket.DefaultChannel`](/game-api/types/alta-networking/isocket#m-defaultchannel), [`ISocket.SendToAll`](/game-api/types/alta-networking/isocket#m-sendtoall), [`ISocket.SendToPlayers`](/game-api/types/alta-networking/isocket#m-sendtoplayers), [`NetworkEntity.SyncChannel`](/game-api/types/alta-networking/networkentity#m-syncchannel), [`NetworkingSettings.channels`](/game-api/types/alta-networking/networkingsettings#m-channels), [`NetworkingSettings.Channels`](/game-api/types/alta-networking/networkingsettings#m-channels-2), [`NetworkingSettings.defaultChannel`](/game-api/types/alta-networking/networkingsettings#m-defaultchannel), [`NetworkingSettings.DefaultChannel`](/game-api/types/alta-networking/networkingsettings#m-defaultchannel-2), [`NetworkScene.chunkSyncChannel`](/game-api/types/alta-networking/networkscene#m-chunksyncchannel), [`NetworkScene.ChunkSyncChannel`](/game-api/types/alta-networking/networkscene#m-chunksyncchannel-2), [`NetworkScene.serializationChannel`](/game-api/types/alta-networking/networkscene#m-serializationchannel), [`PacketSentHandler.BeginInvoke`](/game-api/types/alta-networking/packetsenthandler#m-begininvoke), [`PacketSentHandler.Invoke`](/game-api/types/alta-networking/packetsenthandler#m-invoke), [`ServerPacketReceiver.channels`](/game-api/types/alta-networking/serverpacketreceiver#m-channels), [`Socket.Channels`](/game-api/types/alta-networking/socket#m-channels), [`Socket.DefaultChannel`](/game-api/types/alta-networking/socket#m-defaultchannel), [`Socket.SendToAll`](/game-api/types/alta-networking/socket#m-sendtoall), [`Socket.SendToPlayers`](/game-api/types/alta-networking/socket#m-sendtoplayers), [`Socket.Socket`](/game-api/types/alta-networking/socket#m-ctor), [`ConnectionChannelStatistic.channel`](/game-api/types/alta-utilities/connectionchannelstatistic#m-channel), [`ConnectionChannelStatistic.Channel`](/game-api/types/alta-utilities/connectionchannelstatistic#m-channel-2), [`ConnectionChannelStatistics.ConnectionChannelStatistics`](/game-api/types/alta-utilities/connectionchannelstatistics#m-ctor), [`CachedSyncChannel.cache`](/game-api/types/global-c-d/cachedsyncchannel#m-cache), [`CachedSyncChannel.returnTo`](/game-api/types/global-c-d/cachedsyncchannel#m-returnto), [`LocalNetworkScene.ChunkSyncChannel`](/game-api/types/global-i-l/localnetworkscene#m-chunksyncchannel).
