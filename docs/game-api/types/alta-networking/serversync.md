---
title: "ServerSync"
description: "The server side ISync that SyncFactory.Create makes on the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSync

A **class** in `Root.Township`, `Alta.Networking`.

The server side `ISync` that `SyncFactory.Create` makes on the server. Keeps the server read and write handlers and can limit incoming messages to one owner player.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`BaseSync`](/game-api/types/alta-networking/basesync), [`ISync`](/game-api/types/alta-networking/isync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> | Creates a `ServerSync` from `entity` and `type`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrelay" /><code>{"private bool isRelay"}</code> | Set by `OnServerReadAndRelay`; not read anywhere. |
| <Link id="m-owner" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner"}</code> | The only player allowed to send this sync, or null for anyone. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onclientread" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientRead("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> | Does nothing on the server. |
| <Link id="m-onclientwrite" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientWrite("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | Does nothing on the server. |
| <Link id="m-onserverread" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerRead("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> | Sets the method that reads messages from clients. |
| <Link id="m-onserverreadandrelay" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerReadAndRelay("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | Sets both the reader and the writer, for data the server reads and passes on. |
| <Link id="m-onserverwrite" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerWrite("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | Sets the method that writes data sent to clients. |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sends this sync's data to one player. |
| <Link id="m-setowner" /><code><Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" SetOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sets the only player whose messages are accepted. |
| <Link id="m-messagehandler" /><code>{"protected override void MessageHandler("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Runs the reader only for messages from a valid sender. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidmessageorigin" /><code>{"private bool IsValidMessageOrigin("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | True if no owner is set or the sender is the owner; otherwise logs an error. |

</details>
