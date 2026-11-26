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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkreadpermission" /><code>{"static bool CheckReadPermission("}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer, "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | True on clients and in local test; on the server, true only if the connection belongs to the serializer's authority player. |
| <Link id="m-logunauthorizedmessage" /><code>{"static void LogUnauthorizedMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Logs an error that a player sent data it had no right to send. |
