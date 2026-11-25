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

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Derived types** [`TavernServerConfig`](/tavernlib-api/types/backend-server-configs/tavernserverconfig)
- **Documented in** [TavernServer](/tavernlib-api/types/backend-server-configs/tavernserver), [Ports](/tavernlib-api/config/tavern-server#tavernserver), [Folders](/tavernlib-api/directories)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TavernServer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultauthport" /><code>{"const int DefaultAuthPort"}</code> | 1762. |
| <Link id="m-defaultconsoleport" /><code>{"const int DefaultConsolePort"}</code> | 1760. |
| <Link id="m-defaultgameport" /><code>{"const int DefaultGamePort"}</code> | 1757. |
| <Link id="m-defaultwebport" /><code>{"const int DefaultWebPort"}</code> | 1761. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-auth" /><code>{"int Auth { get; }"}</code> | The auth (login) port, or 1762 if missing or out of range. |
| <Link id="m-authport" /><code>{"int AuthPort { get; private set; }"}</code> | `auth_port` as written. |
| <Link id="m-console" /><code>{"int Console { get; }"}</code> | The websocket console port, or 1760 if missing or out of range. |
| <Link id="m-consoleport" /><code>{"int ConsolePort { get; private set; }"}</code> | `console_port` as written. |
| <Link id="m-game" /><code>{"int Game { get; }"}</code> | The game port, or 1757 if missing or out of range. |
| <Link id="m-serverport" /><code>{"int ServerPort { get; private set; }"}</code> | `server_port` as written: the game port. 0 if the file leaves it out. |
| <Link id="m-web" /><code>{"int Web { get; }"}</code> | The game's web server port, or 1761 if missing or out of range. |
| <Link id="m-webport" /><code>{"int WebPort { get; private set; }"}</code> | `web_port` as written. |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valid" /><code>{"static int Valid(int port, int fallback)"}</code> | The port when it's 1 to 65535, otherwise the fallback. |

## Used in

Members of other types that take, return or hold a `TavernServer`:

[`AuthManager.Ports`](/tavernlib-api/types/backend-auth/authmanager#m-ports), [`ServerPortPatches.Ports`](/tavernlib-api/types/patches/serverportpatches#m-ports).
