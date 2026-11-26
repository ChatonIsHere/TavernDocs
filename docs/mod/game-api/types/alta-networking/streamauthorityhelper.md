---
title: "StreamAuthorityHelper"
description: "Checks whether a connection may send data for an entity, and logs when it may not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamAuthorityHelper

A **static class** in `Root.Township`, `Alta.Networking`.

Checks whether a connection may send data for an entity, and logs when it may not.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkreadpermission" /><code>{"static bool CheckReadPermission("}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer, "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">True on clients and in local test; on the server, true only if the connection belongs to the serializer's authority player.</span> |
| <Link id="m-logunauthorizedmessage" /><code>{"static void LogUnauthorizedMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Logs an error that a player sent data it had no right to send.</span> |
