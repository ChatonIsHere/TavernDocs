---
title: "DevGameServerInfo"
description: "A GameServerInfo for a local dev server, with the address given directly instead of coming from the web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DevGameServerInfo

A **class** in `Root.Township`, no namespace.

A `GameServerInfo` for a local dev server, with the address given directly instead of coming from the web API. Used by `ApplicationStartupManager.JoinLocalServer`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GameServerInfo`](/game-api/types/assembly-api-models/gameserverinfo)
- **Documented in** [Joining a server](/game-api/networking/joining), [Server settings](/game-api/networking/server-settings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DevGameServerInfo()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code><Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> | Address and game port to connect to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdevserver" /><code>{"static "}<Link to="/game-api/types/global-c-d/devgameserverinfo">{"DevGameServerInfo"}</Link>{" GetDevServer(string ipAddress, int port, int sceneIndex)"}</code> | Makes an online server entry named Dev Server, id -1, for the given IP, port and scene index. |
