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
| <Link id="m-ctor" /><code>{"NetworkingSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels"}</code> | <span className="api-desc">Backing field for `Channels`, the connection channels.</span> |
| <Link id="m-connectionconfiguration" /><code>{"private ConnectionConfig connectionConfiguration"}</code> | <span className="api-desc">Backing field for `ConnectionConfiguration`.</span> |
| <Link id="m-currenttransportsystem" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" currentTransportSystem"}</code> | <span className="api-desc">Transport chosen by `SetTransportSystem`.</span> |
| <Link id="m-defaultchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" defaultChannel"}</code> | <span className="api-desc">Backing field for `DefaultChannel`.</span> |
| <Link id="m-defaultnetworktransport" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" defaultNetworkTransport"}</code> | <span className="api-desc">Transport used when the server info has no override: KCP.</span> |
| <Link id="m-kcpsettings" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" kcpSettings"}</code> | <span className="api-desc">Backing field for `KcpSettings`.</span> |
| <Link id="m-logger" /><code>{"private static Logger Logger"}</code> | <span className="api-desc">Logger for transport selection messages.</span> |
| <Link id="m-maxbitsperserializationmessage" /><code>{"private uint maxBitsPerSerializationMessage"}</code> | <span className="api-desc">Bit limit for one entity sync message (default 1300); `SceneSerializer` stops adding entities past it.</span> |
| <Link id="m-maxconnectionqueuesize" /><code>{"private int maxConnectionQueueSize"}</code> | <span className="api-desc">Outgoing queue size per connection above which further packets are held back for the frame.</span> |
| <Link id="m-maxserverqueuesize" /><code>{"private int maxServerQueueSize"}</code> | <span className="api-desc">Outgoing queue size for the whole socket above which packets are held back for the frame.</span> |
| <Link id="m-maxunreliablereceivedperframe" /><code>{"private int maxUnreliableReceivedPerFrame"}</code> | <span className="api-desc">Size of the server's per-connection unreliable buffer (default 100); older unreliable packets in a frame are dropped.</span> |
| <Link id="m-networkconfiguration" /><code>{"private GlobalConfig networkConfiguration"}</code> | <span className="api-desc">Backing field for `NetworkConfiguration`.</span> |
| <Link id="m-simulatenointernetineditor" /><code>{"private bool simulateNoInternetInEditor"}</code> | <span className="api-desc">Editor only: makes `SimulateNoInternet` true.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] Channels { get; }"}</code> | <span className="api-desc">All channels to create on the transport.</span> |
| <Link id="m-connectionconfiguration-2" /><code>{"ConnectionConfig ConnectionConfiguration { get; }"}</code> | <span className="api-desc">Unity network connection config. Its channel list is cleared on start.</span> |
| <Link id="m-defaultchannel-2" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; }"}</code> | <span className="api-desc">Channel used when none is given.</span> |
| <Link id="m-kcpsettings-2" /><code><Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" { get; }"}</code> | <span className="api-desc">Settings for the KCP transport.</span> |
| <Link id="m-maxbitsperserializationmessage-2" /><code>{"uint MaxBitsPerSerializationMessage { get; }"}</code> | <span className="api-desc">Size limit for one entity serialization message, in bits. 1300 by default.</span> |
| <Link id="m-maxconnectionqueuesize-2" /><code>{"int MaxConnectionQueueSize { get; }"}</code> | <span className="api-desc">Outgoing queue size per connection at which sends start being dropped.</span> |
| <Link id="m-maxserverqueuesize-2" /><code>{"int MaxServerQueueSize { get; }"}</code> | <span className="api-desc">Outgoing queue size across the socket at which sends start being dropped.</span> |
| <Link id="m-maxunreliablereceivedperframe-2" /><code>{"int MaxUnreliableReceivedPerFrame { get; }"}</code> | <span className="api-desc">Most unreliable messages the server handles per connection each frame. 100 by default.</span> |
| <Link id="m-networkconfiguration-2" /><code>{"GlobalConfig NetworkConfiguration { get; }"}</code> | <span className="api-desc">Unity network global config (older UNET settings).</span> |
| <Link id="m-simulatenointernet" /><code>{"bool SimulateNoInternet { get; }"}</code> | <span className="api-desc">Editor only: pretend there's no internet.</span> |
| <Link id="m-transportsystem" /><code><Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" { get; }"}</code> | <span className="api-desc">The transport chosen for this run.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettransportsystem" /><code><Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" GetTransportSystem("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | <span className="api-desc">The transport a server asks for, or KCP if it doesn't say.</span> |
| <Link id="m-settransportsystem" /><code>{"void SetTransportSystem("}<Link to="/mod/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" transport)"}</code> | <span className="api-desc">Sets the transport for this run and logs it.</span> |

## Used in

Members of other types that take, return or hold a `NetworkingSettings`:

<div className="api-used-in">

[`NetworkManager.Settings`](/mod/game-api/types/alta-networking/networkmanager#m-settings).

</div>
