---
title: "TavernServer"
description: "The contents of tavern_server.json: the game, auth, web and console ports."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernServer

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The contents of `tavern_server.json`: the game, auth, web and console ports. Use the checked properties (`Game`, `Auth`, `Web`, `Console`), which fall back to the defaults.

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Derived types** [`TavernServerConfig`](/mod/tavernlib-api/types/backend-server-configs/tavernserverconfig)
- **Documented in** [Ports](/mod/tavernlib-api/config/tavern-server#tavernserver), [Folders](/mod/tavernlib-api/directories)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TavernServer()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultauthport" /><code>{"const int DefaultAuthPort"}</code> | <span className="api-desc">1762.</span> |
| <Link id="m-defaultconsoleport" /><code>{"const int DefaultConsolePort"}</code> | <span className="api-desc">1760.</span> |
| <Link id="m-defaultgameport" /><code>{"const int DefaultGamePort"}</code> | <span className="api-desc">1757.</span> |
| <Link id="m-defaultwebport" /><code>{"const int DefaultWebPort"}</code> | <span className="api-desc">1761.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-auth" /><code>{"int Auth { get; }"}</code> | <span className="api-desc">The auth (login) port, or 1762 if missing or out of range.</span> |
| <Link id="m-authport" /><code>{"int AuthPort { get; private set; }"}</code> | <span className="api-desc">`auth_port` as written.</span> |
| <Link id="m-console" /><code>{"int Console { get; }"}</code> | <span className="api-desc">The websocket console port, or 1760 if missing or out of range.</span> |
| <Link id="m-consoleport" /><code>{"int ConsolePort { get; private set; }"}</code> | <span className="api-desc">`console_port` as written.</span> |
| <Link id="m-game" /><code>{"int Game { get; }"}</code> | <span className="api-desc">The game port, or 1757 if missing or out of range.</span> |
| <Link id="m-serverport" /><code>{"int ServerPort { get; private set; }"}</code> | <span className="api-desc">`server_port` as written: the game port. 0 if the file leaves it out.</span> |
| <Link id="m-web" /><code>{"int Web { get; }"}</code> | <span className="api-desc">The game's web server port, or 1761 if missing or out of range.</span> |
| <Link id="m-webport" /><code>{"int WebPort { get; private set; }"}</code> | <span className="api-desc">`web_port` as written.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | <span className="api-desc">Holds JSON keys TavernLib doesn't model, so they are written back unchanged.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valid" /><code>{"static int Valid(int port, int fallback)"}</code> | <span className="api-desc">The port when it's 1 to 65535, otherwise the fallback.</span> |

## Used in

Members of other types that take, return or hold a `TavernServer`:

<div className="api-used-in">

[`AuthManager.Ports`](/mod/tavernlib-api/types/backend-auth/authmanager#m-ports), [`ServerPortPatches.Ports`](/mod/tavernlib-api/types/patches/serverportpatches#m-ports).

</div>
