---
title: "ISync"
description: "interface ISync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISync

An **interface** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`ClientSync`](/game-api/types/alta-networking/clientsync), [`ServerSync`](/game-api/types/alta-networking/serversync)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onclientread" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientRead("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> |  |
| <Link id="m-onclientwrite" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientWrite("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> |  |
| <Link id="m-onserverread" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerRead("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> |  |
| <Link id="m-onserverreadandrelay" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerReadAndRelay("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> |  |
| <Link id="m-onserverwrite" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerWrite("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> |  |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] exceptPlayers)"}</code> |  |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-setowner" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" SetOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ISync`:

[`ClientSync.OnClientRead`](/game-api/types/alta-networking/clientsync#m-onclientread), [`ClientSync.OnClientWrite`](/game-api/types/alta-networking/clientsync#m-onclientwrite), [`ClientSync.OnServerRead`](/game-api/types/alta-networking/clientsync#m-onserverread), [`ClientSync.OnServerReadAndRelay`](/game-api/types/alta-networking/clientsync#m-onserverreadandrelay), [`ClientSync.OnServerWrite`](/game-api/types/alta-networking/clientsync#m-onserverwrite), [`ClientSync.SetOwner`](/game-api/types/alta-networking/clientsync#m-setowner), [`ExampleBehaviour.healthSync`](/game-api/types/alta-networking/examplebehaviour#m-healthsync), [`ExampleBehaviour.lookDirectionSync`](/game-api/types/alta-networking/examplebehaviour#m-lookdirectionsync), [`ServerSync.OnClientRead`](/game-api/types/alta-networking/serversync#m-onclientread), [`ServerSync.OnClientWrite`](/game-api/types/alta-networking/serversync#m-onclientwrite), [`ServerSync.OnServerRead`](/game-api/types/alta-networking/serversync#m-onserverread), [`ServerSync.OnServerReadAndRelay`](/game-api/types/alta-networking/serversync#m-onserverreadandrelay), [`ServerSync.OnServerWrite`](/game-api/types/alta-networking/serversync#m-onserverwrite), [`ServerSync.SetOwner`](/game-api/types/alta-networking/serversync#m-setowner), [`SyncFactory.Create`](/game-api/types/alta-networking/syncfactory#m-create).
