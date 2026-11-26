---
title: "ClientSync"
description: "class ClientSync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientSync

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`BaseSync`](/game-api/types/alta-networking/basesync), [`ISync`](/game-api/types/alta-networking/isync)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientSync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-onclientread" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientRead("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> |
| <Link id="m-onclientwrite" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientWrite("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> |
| <Link id="m-onserverread" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerRead("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> |
| <Link id="m-onserverreadandrelay" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerReadAndRelay("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> |
| <Link id="m-onserverwrite" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerWrite("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-setowner" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" SetOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
