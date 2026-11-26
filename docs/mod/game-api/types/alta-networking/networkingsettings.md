---
title: "NetworkingSettings"
description: "Global networking settings: transport (KCP) settings, channels and send and receive limits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingSettings

A **class** in `Root.Township`, `Alta.Networking`.

Global networking settings: transport (KCP) settings, channels and send and receive limits.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`GlobalSettings<NetworkingSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`NetworkingSettings`](/mod/game-api/types/alta-networking/networkingsettings), [`NetworkingSettings.Create`](/mod/game-api/types/alta-networking/networkingsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-networking/networkingsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkingSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels"}</code> | Backing field for `Channels`, the connection channels. |
| <Link id="m-connectionconfiguration" /><code>{"private ConnectionConfig connectionConfiguration"}</code> | Backing field for `ConnectionConfiguration`. |
| <Link id="m-currenttransportsystem" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" currentTransportSystem"}</code> | Transport chosen by `SetTransportSystem`. |
| <Link id="m-defaultchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" defaultChannel"}</code> | Backing field for `DefaultChannel`. |
| <Link id="m-defaultnetworktransport" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" defaultNetworkTransport"}</code> | Transport used when the server info has no override: KCP. |
| <Link id="m-kcpsettings" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" kcpSettings"}</code> | Backing field for `KcpSettings`. |
| <Link id="m-logger" /><code>{"private static Logger Logger"}</code> | Logger for transport selection messages. |
| <Link id="m-maxbitsperserializationmessage" /><code>{"private uint maxBitsPerSerializationMessage"}</code> | Bit limit for one entity sync message (default 1300); `SceneSerializer` stops adding entities past it. |
| <Link id="m-maxconnectionqueuesize" /><code>{"private int maxConnectionQueueSize"}</code> | Outgoing queue size per connection above which further packets are held back for the frame. |
| <Link id="m-maxserverqueuesize" /><code>{"private int maxServerQueueSize"}</code> | Outgoing queue size for the whole socket above which packets are held back for the frame. |
| <Link id="m-maxunreliablereceivedperframe" /><code>{"private int maxUnreliableReceivedPerFrame"}</code> | Size of the server's per-connection unreliable buffer (default 100); older unreliable packets in a frame are dropped. |
| <Link id="m-networkconfiguration" /><code>{"private GlobalConfig networkConfiguration"}</code> | Backing field for `NetworkConfiguration`. |
| <Link id="m-simulatenointernetineditor" /><code>{"private bool simulateNoInternetInEditor"}</code> | Editor only: makes `SimulateNoInternet` true. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] Channels { get; }"}</code> | All channels to create on the transport. |
| <Link id="m-connectionconfiguration-2" /><code>{"ConnectionConfig ConnectionConfiguration { get; }"}</code> | Unity network connection config. Its channel list is cleared on start. |
| <Link id="m-defaultchannel-2" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; }"}</code> | Channel used when none is given. |
| <Link id="m-kcpsettings-2" /><code><Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" { get; }"}</code> | Settings for the KCP transport. |
| <Link id="m-maxbitsperserializationmessage-2" /><code>{"uint MaxBitsPerSerializationMessage { get; }"}</code> | Size limit for one entity serialization message, in bits. 1300 by default. |
| <Link id="m-maxconnectionqueuesize-2" /><code>{"int MaxConnectionQueueSize { get; }"}</code> | Outgoing queue size per connection at which sends start being dropped. |
| <Link id="m-maxserverqueuesize-2" /><code>{"int MaxServerQueueSize { get; }"}</code> | Outgoing queue size across the socket at which sends start being dropped. |
| <Link id="m-maxunreliablereceivedperframe-2" /><code>{"int MaxUnreliableReceivedPerFrame { get; }"}</code> | Most unreliable messages the server handles per connection each frame. 100 by default. |
| <Link id="m-networkconfiguration-2" /><code>{"GlobalConfig NetworkConfiguration { get; }"}</code> | Unity network global config (older UNET settings). |
| <Link id="m-simulatenointernet" /><code>{"bool SimulateNoInternet { get; }"}</code> | Editor only: pretend there's no internet. |
| <Link id="m-transportsystem" /><code><Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" { get; }"}</code> | The transport chosen for this run. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettransportsystem" /><code><Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" GetTransportSystem("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | The transport a server asks for, or KCP if it doesn't say. |
| <Link id="m-settransportsystem" /><code>{"void SetTransportSystem("}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" transport)"}</code> | Sets the transport for this run and logs it. |

## Used in

Members of other types that take, return or hold a `NetworkingSettings`:

[`NetworkManager.Settings`](/mod/game-api/types/alta-networking/networkmanager#m-settings).
