---
title: "NetworkingSettings"
description: "class NetworkingSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingSettings

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`GlobalSettings<NetworkingSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`NetworkingSettings`](/game-api/types/alta-networking/networkingsettings), [`NetworkingSettings.Create`](/game-api/types/alta-networking/networkingsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-networking/networkingsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkingSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels"}</code> |  |
| <Link id="m-connectionconfiguration" /><code>{"private ConnectionConfig connectionConfiguration"}</code> |  |
| <Link id="m-currenttransportsystem" /><code>{"private "}<Link to="/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" currentTransportSystem"}</code> |  |
| <Link id="m-defaultchannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" defaultChannel"}</code> |  |
| <Link id="m-defaultnetworktransport" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" defaultNetworkTransport"}</code> |  |
| <Link id="m-kcpsettings" /><code>{"private "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" kcpSettings"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger Logger"}</code> |  |
| <Link id="m-maxbitsperserializationmessage" /><code>{"private uint maxBitsPerSerializationMessage"}</code> |  |
| <Link id="m-maxconnectionqueuesize" /><code>{"private int maxConnectionQueueSize"}</code> |  |
| <Link id="m-maxserverqueuesize" /><code>{"private int maxServerQueueSize"}</code> |  |
| <Link id="m-maxunreliablereceivedperframe" /><code>{"private int maxUnreliableReceivedPerFrame"}</code> |  |
| <Link id="m-networkconfiguration" /><code>{"private GlobalConfig networkConfiguration"}</code> |  |
| <Link id="m-simulatenointernetineditor" /><code>{"private bool simulateNoInternetInEditor"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] Channels { get; }"}</code> |  |
| <Link id="m-connectionconfiguration-2" /><code>{"ConnectionConfig ConnectionConfiguration { get; }"}</code> |  |
| <Link id="m-defaultchannel-2" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; }"}</code> |  |
| <Link id="m-kcpsettings-2" /><code><Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" { get; }"}</code> |  |
| <Link id="m-maxbitsperserializationmessage-2" /><code>{"uint MaxBitsPerSerializationMessage { get; }"}</code> |  |
| <Link id="m-maxconnectionqueuesize-2" /><code>{"int MaxConnectionQueueSize { get; }"}</code> |  |
| <Link id="m-maxserverqueuesize-2" /><code>{"int MaxServerQueueSize { get; }"}</code> |  |
| <Link id="m-maxunreliablereceivedperframe-2" /><code>{"int MaxUnreliableReceivedPerFrame { get; }"}</code> |  |
| <Link id="m-networkconfiguration-2" /><code>{"GlobalConfig NetworkConfiguration { get; }"}</code> |  |
| <Link id="m-simulatenointernet" /><code>{"bool SimulateNoInternet { get; }"}</code> |  |
| <Link id="m-transportsystem" /><code><Link to="/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" "}<Link to="/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettransportsystem" /><code><Link to="/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" GetTransportSystem("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> |  |
| <Link id="m-settransportsystem" /><code>{"void SetTransportSystem("}<Link to="/game-api/types/alta-networking/transportsystem">{"TransportSystem"}</Link>{" transport)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NetworkingSettings`:

[`NetworkManager.Settings`](/game-api/types/alta-networking/networkmanager#m-settings).
