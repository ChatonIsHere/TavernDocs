---
title: "ClientSync"
description: "The client side ISync that SyncFactory.Create makes when not on the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientSync

A **class** in `Root.Township`, `Alta.Networking`.

The client side `ISync` that `SyncFactory.Create` makes when not on the server. Only the client read and write handlers are kept; the server calls do nothing.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`BaseSync`](/game-api/types/alta-networking/basesync), [`ISync`](/game-api/types/alta-networking/isync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientSync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> | Creates a `ClientSync` from `entity` and `type`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onclientread" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientRead("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> | Sets the method used to read incoming messages of this type. |
| <Link id="m-onclientwrite" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientWrite("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | Sets the method used to write this sync's data when sending. |
| <Link id="m-onserverread" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerRead("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> | Does nothing on the client. |
| <Link id="m-onserverreadandrelay" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerReadAndRelay("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | Does nothing on the client. |
| <Link id="m-onserverwrite" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerWrite("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | Does nothing on the client. |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Not allowed on the client; logs an error. |
| <Link id="m-setowner" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" SetOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Does nothing on the client. |
