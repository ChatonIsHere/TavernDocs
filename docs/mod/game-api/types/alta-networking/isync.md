---
title: "ISync"
description: "Fluent helper for one entity message type, with separate server and client read and write methods."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISync

An **interface** in `Root.Township`, `Alta.Networking`.

Fluent helper for one entity message type, with separate server and client read and write methods. Made by `SyncFactory.Create`; only `ExampleBehaviour` uses it in this build. The server and client versions ignore the other side's methods.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`ClientSync`](/mod/game-api/types/alta-networking/clientsync), [`ServerSync`](/mod/game-api/types/alta-networking/serversync)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onclientread" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientRead("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> | <span className="api-desc">Sets the method that reads the message on a client.</span> |
| <Link id="m-onclientwrite" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientWrite("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | <span className="api-desc">Sets the method that writes the message from a client.</span> |
| <Link id="m-onserverread" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerRead("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> | <span className="api-desc">Sets the method that reads the message on the server.</span> |
| <Link id="m-onserverreadandrelay" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerReadAndRelay("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | <span className="api-desc">Sets both the server read and write methods. It does not relay by itself in this build.</span> |
| <Link id="m-onserverwrite" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerWrite("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | <span className="api-desc">Sets the method that writes the message from the server.</span> |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(params "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] exceptPlayers)"}</code> | <span className="api-desc">Sends the message to everyone in the entity's chunks, except the given players.</span> |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the message to one player. The client version only logs an error.</span> |
| <Link id="m-setowner" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" SetOwner("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: only accept the message from this player.</span> |

## Used in

Members of other types that take, return or hold a `ISync`:

<div className="api-used-in">

[`ClientSync.OnClientRead`](/mod/game-api/types/alta-networking/clientsync#m-onclientread), [`ClientSync.OnClientWrite`](/mod/game-api/types/alta-networking/clientsync#m-onclientwrite), [`ClientSync.OnServerRead`](/mod/game-api/types/alta-networking/clientsync#m-onserverread), [`ClientSync.OnServerReadAndRelay`](/mod/game-api/types/alta-networking/clientsync#m-onserverreadandrelay), [`ClientSync.OnServerWrite`](/mod/game-api/types/alta-networking/clientsync#m-onserverwrite), [`ClientSync.SetOwner`](/mod/game-api/types/alta-networking/clientsync#m-setowner), [`ExampleBehaviour.healthSync`](/mod/game-api/types/alta-networking/examplebehaviour#m-healthsync), [`ExampleBehaviour.lookDirectionSync`](/mod/game-api/types/alta-networking/examplebehaviour#m-lookdirectionsync), [`ServerSync.OnClientRead`](/mod/game-api/types/alta-networking/serversync#m-onclientread), [`ServerSync.OnClientWrite`](/mod/game-api/types/alta-networking/serversync#m-onclientwrite), [`ServerSync.OnServerRead`](/mod/game-api/types/alta-networking/serversync#m-onserverread), [`ServerSync.OnServerReadAndRelay`](/mod/game-api/types/alta-networking/serversync#m-onserverreadandrelay), [`ServerSync.OnServerWrite`](/mod/game-api/types/alta-networking/serversync#m-onserverwrite), [`ServerSync.SetOwner`](/mod/game-api/types/alta-networking/serversync#m-setowner), [`SyncFactory.Create`](/mod/game-api/types/alta-networking/syncfactory#m-create).

</div>
