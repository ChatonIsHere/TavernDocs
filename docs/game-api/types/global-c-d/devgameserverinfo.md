---
title: "DevGameServerInfo"
description: "A GameServerInfo with a fixed ConnectionInfo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DevGameServerInfo

A **class** in `Root.Township`, no namespace.

A `GameServerInfo` with a fixed `ConnectionInfo`. `GetDevServer(ip, port, sceneIndex)`. TavernLib's `/join_local_server` uses it.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GameServerInfo`](/game-api/types/assembly-api-models/gameserverinfo)
- **Documented in** [Joining a server](/game-api/networking/joining), [Server settings](/game-api/networking/server-settings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DevGameServerInfo()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-connectioninfo" /><code><Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getdevserver" /><code>{"static "}<Link to="/game-api/types/global-c-d/devgameserverinfo">{"DevGameServerInfo"}</Link>{" GetDevServer(string ipAddress, int port, int sceneIndex)"}</code> |
