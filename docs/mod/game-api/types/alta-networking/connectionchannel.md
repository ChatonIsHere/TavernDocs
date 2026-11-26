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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ConnectionChannel.Create`](/mod/game-api/types/alta-networking/connectionchannel-create), [`ConnectionChannelStatistics`](/mod/game-api/types/alta-utilities/connectionchannelstatistics)
- **Nested types** [`Create`](/mod/game-api/types/alta-networking/connectionchannel-create)
- **Documented in** [Sockets and connections](/mod/game-api/networking/connections#connectionchannel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionChannel()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isreliable" /><code>{"private bool isReliable"}</code> | <span className="api-desc">Whether messages on this channel are sent reliably; picks transport channel 0 (reliable) or 1 (unreliable) in `Initialize`.</span> |
| <Link id="m-maximumsendinterval" /><code>{"private float maximumSendInterval"}</code> | <span className="api-desc">Longest time in seconds (default 0.03) between sends on this channel.</span> |
| <Link id="m-qualityofservice" /><code>{"private QosType qualityOfService"}</code> | <span className="api-desc">Unity networking QoS type for the channel, exposed as `QualityOfService`.</span> |
| <Link id="m-receivertype" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionreceivertype">{"ConnectionReceiverType"}</Link>{" receiverType"}</code> | <span className="api-desc">Client: which receiver (timed queue, counted queue or normal) handles incoming messages. The server always uses a normal receiver.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; private set; }"}</code> | <span className="api-desc">Index given to the channel by `Initialize`.</span> |
| <Link id="m-isreliable-2" /><code>{"bool IsReliable { get; }"}</code> | <span className="api-desc">Whether messages on this channel are reliable.</span> |
| <Link id="m-maximumsendinterval-2" /><code>{"float MaximumSendInterval { get; }"}</code> | <span className="api-desc">Longest time in seconds between sends on this channel (default 0.03).</span> |
| <Link id="m-qualityofservice-2" /><code>{"QosType QualityOfService { get; }"}</code> | <span className="api-desc">The Unity networking QoS type set on the asset.</span> |
| <Link id="m-transportchannel" /><code>{"int TransportChannel { get; protected set; }"}</code> | <span className="api-desc">The transport channel used: 0 for reliable, 1 for unreliable.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnectionreceiver" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-networking/connectionreceiver">{"ConnectionReceiver"}</Link>{" CreateConnectionReceiver("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Makes the receiver for a connection. The server always uses a normal receiver; clients use the timed, counted or normal type set on the asset.</span> |
| <Link id="m-initialize" /><code>{"void Initialize(int identifier)"}</code> | <span className="api-desc">Sets the channel's identifier and picks the transport channel (0 for reliable, 1 for unreliable).</span> |

## Used in

Members of other types that take, return or hold a `ConnectionChannel`:

<div className="api-used-in">

[`Connection.channels`](/mod/game-api/types/alta-networking/connection#m-channels), [`Connection.Connection`](/mod/game-api/types/alta-networking/connection#m-ctor), [`Connection.DefaultChannel`](/mod/game-api/types/alta-networking/connection#m-defaultchannel), [`Connection.InternalSend`](/mod/game-api/types/alta-networking/connection#m-internalsend), [`Connection.packetManagerMap`](/mod/game-api/types/alta-networking/connection#m-packetmanagermap), [`Connection.Send`](/mod/game-api/types/alta-networking/connection#m-send), [`EntityMessageHandler.SendToChunks`](/mod/game-api/types/alta-networking/entitymessagehandler#m-sendtochunks), [`EntityMessageHandler.SendToPlayer`](/mod/game-api/types/alta-networking/entitymessagehandler#m-sendtoplayer), [`FakeSocket.DefaultChannel`](/mod/game-api/types/alta-networking/fakesocket#m-defaultchannel), [`FakeSocket.SendToAll`](/mod/game-api/types/alta-networking/fakesocket#m-sendtoall), [`FakeSocket.SendToPlayers`](/mod/game-api/types/alta-networking/fakesocket#m-sendtoplayers), [`INetworkScene.ChunkSyncChannel`](/mod/game-api/types/alta-networking/inetworkscene#m-chunksyncchannel), [`ConnectionReceiver.channel`](/mod/game-api/types/alta-networking/connectionreceiver#m-channel), [`ConnectionReceiver.ConnectionReceiver`](/mod/game-api/types/alta-networking/connectionreceiver#m-ctor), [`CountedQueuedConnectionReceiver.CountedQueuedConnectionReceiver`](/mod/game-api/types/alta-networking/countedqueuedconnectionreceiver#m-ctor), [`MessageProcessor.HandleMessage`](/mod/game-api/types/alta-networking/messageprocessor#m-handlemessage), [`MessageProcessor.ProcessSingleMessageFromData`](/mod/game-api/types/alta-networking/messageprocessor#m-processsinglemessagefromdata), [`NormalConnectionReceiver.NormalConnectionReceiver`](/mod/game-api/types/alta-networking/normalconnectionreceiver#m-ctor), [`OutgoingPacketManager.Channel`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-channel), [`OutgoingPacketManager.OutgoingPacketManager`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-ctor), [`Packet.Send`](/mod/game-api/types/alta-networking/packet#m-send), [`QueuedConnectionReceiver.QueuedConnectionReceiver`](/mod/game-api/types/alta-networking/queuedconnectionreceiver#m-ctor), [`SceneSerializer.SerializationChannel`](/mod/game-api/types/alta-networking/sceneserializer#m-serializationchannel), [`TimedQueuedConnectionReceiver.TimedQueuedConnectionReceiver`](/mod/game-api/types/alta-networking/timedqueuedconnectionreceiver#m-ctor), [`InternalMessage.SendToPlayers`](/mod/game-api/types/alta-networking/internalmessage#m-sendtoplayers), [`InternalMessage.SendToServer`](/mod/game-api/types/alta-networking/internalmessage#m-sendtoserver), [`ISocket.DefaultChannel`](/mod/game-api/types/alta-networking/isocket#m-defaultchannel), [`ISocket.SendToAll`](/mod/game-api/types/alta-networking/isocket#m-sendtoall), [`ISocket.SendToPlayers`](/mod/game-api/types/alta-networking/isocket#m-sendtoplayers), [`NetworkEntity.SyncChannel`](/mod/game-api/types/alta-networking/networkentity#m-syncchannel), [`NetworkingSettings.channels`](/mod/game-api/types/alta-networking/networkingsettings#m-channels), [`NetworkingSettings.Channels`](/mod/game-api/types/alta-networking/networkingsettings#m-channels-2), [`NetworkingSettings.defaultChannel`](/mod/game-api/types/alta-networking/networkingsettings#m-defaultchannel), [`NetworkingSettings.DefaultChannel`](/mod/game-api/types/alta-networking/networkingsettings#m-defaultchannel-2), [`NetworkScene.chunkSyncChannel`](/mod/game-api/types/alta-networking/networkscene#m-chunksyncchannel), [`NetworkScene.ChunkSyncChannel`](/mod/game-api/types/alta-networking/networkscene#m-chunksyncchannel-2), [`NetworkScene.serializationChannel`](/mod/game-api/types/alta-networking/networkscene#m-serializationchannel), [`PacketSentHandler.BeginInvoke`](/mod/game-api/types/alta-networking/packetsenthandler#m-begininvoke), [`PacketSentHandler.Invoke`](/mod/game-api/types/alta-networking/packetsenthandler#m-invoke), [`ServerPacketReceiver.channels`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-channels), [`Socket.Channels`](/mod/game-api/types/alta-networking/socket#m-channels), [`Socket.DefaultChannel`](/mod/game-api/types/alta-networking/socket#m-defaultchannel), [`Socket.SendToAll`](/mod/game-api/types/alta-networking/socket#m-sendtoall), [`Socket.SendToPlayers`](/mod/game-api/types/alta-networking/socket#m-sendtoplayers), [`Socket.Socket`](/mod/game-api/types/alta-networking/socket#m-ctor), [`ConnectionChannelStatistic.channel`](/mod/game-api/types/alta-utilities/connectionchannelstatistic#m-channel), [`ConnectionChannelStatistic.Channel`](/mod/game-api/types/alta-utilities/connectionchannelstatistic#m-channel-2), [`ConnectionChannelStatistics.ConnectionChannelStatistics`](/mod/game-api/types/alta-utilities/connectionchannelstatistics#m-ctor), [`CachedSyncChannel.cache`](/mod/game-api/types/global-c-d/cachedsyncchannel#m-cache), [`CachedSyncChannel.returnTo`](/mod/game-api/types/global-c-d/cachedsyncchannel#m-returnto), [`LocalNetworkScene.ChunkSyncChannel`](/mod/game-api/types/global-i-l/localnetworkscene#m-chunksyncchannel).

</div>
