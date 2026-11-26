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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`BaseSync`](/mod/game-api/types/alta-networking/basesync), [`ISync`](/mod/game-api/types/alta-networking/isync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSync("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> | <span className="api-desc">Creates a `ServerSync` from `entity` and `type`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrelay" /><code>{"private bool isRelay"}</code> | <span className="api-desc">Set by `OnServerReadAndRelay`; not read anywhere.</span> |
| <Link id="m-owner" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner"}</code> | <span className="api-desc">The only player allowed to send this sync, or null for anyone.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onclientread" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientRead("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> | <span className="api-desc">Does nothing on the server.</span> |
| <Link id="m-onclientwrite" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnClientWrite("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | <span className="api-desc">Does nothing on the server.</span> |
| <Link id="m-onserverread" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerRead("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader)"}</code> | <span className="api-desc">Sets the method that reads messages from clients.</span> |
| <Link id="m-onserverreadandrelay" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerReadAndRelay("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | <span className="api-desc">Sets both the reader and the writer, for data the server reads and passes on.</span> |
| <Link id="m-onserverwrite" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" OnServerWrite("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer)"}</code> | <span className="api-desc">Sets the method that writes data sent to clients.</span> |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Sends this sync's data to one player.</span> |
| <Link id="m-setowner" /><code><Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" SetOwner("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Sets the only player whose messages are accepted.</span> |
| <Link id="m-messagehandler" /><code>{"protected override void MessageHandler("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Runs the reader only for messages from a valid sender.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidmessageorigin" /><code>{"private bool IsValidMessageOrigin("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">True if no owner is set or the sender is the owner; otherwise logs an error.</span> |

</details>
