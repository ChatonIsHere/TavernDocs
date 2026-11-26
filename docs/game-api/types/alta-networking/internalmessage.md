---
title: "InternalMessage"
description: "static class InternalMessage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InternalMessage

A **static class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-messagetype" /><code>{"private static uint messageType"}</code> |
| <Link id="m-writemethod" /><code>{"private static "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writeMethod"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-sendtoplayers" /><code>{"static void SendToPlayers("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writeMethod, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> |
| <Link id="m-sendtoserver" /><code>{"static void SendToServer("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writeMethod, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel = null)"}</code> |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/game-api/types/global-i-l/iconnection">{"IConnection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
