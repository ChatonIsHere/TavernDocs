---
title: "DevGameServerInfo"
description: "A GameServerInfo for a local dev server, with the address given directly instead of coming from the web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DevGameServerInfo

A **class** in `Root.Township`, the global namespace.

A `GameServerInfo` for a local dev server, with the address given directly instead of coming from the web API. Used by `ApplicationStartupManager.JoinLocalServer`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GameServerInfo`](/mod/game-api/types/assembly-api-models/gameserverinfo)
- **Documented in** [Joining a server](/mod/game-api/networking/joining), [Server settings](/mod/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DevGameServerInfo()"}</code> | <span className="api-desc">Creates a `DevGameServerInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code><Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Address and game port to connect to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdevserver" /><code>{"static "}<Link to="/mod/game-api/types/global-c-d/devgameserverinfo">{"DevGameServerInfo"}</Link>{" GetDevServer(string ipAddress, int port, int sceneIndex)"}</code> | <span className="api-desc">Makes an online server entry named Dev Server, id -1, for the given IP, port and scene index.</span> |
