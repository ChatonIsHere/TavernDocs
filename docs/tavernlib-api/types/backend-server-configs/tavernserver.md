---
title: "TavernServer"
description: "A class in TavernLib, TavernLib.Backend.Server.Configs."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernServer

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

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
| <Link id="m-defaultauthport" /><code>{"const int DefaultAuthPort"}</code> |  |
| <Link id="m-defaultconsoleport" /><code>{"const int DefaultConsolePort"}</code> |  |
| <Link id="m-defaultgameport" /><code>{"const int DefaultGamePort"}</code> |  |
| <Link id="m-defaultwebport" /><code>{"const int DefaultWebPort"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-auth" /><code>{"int Auth { get; }"}</code> |  |
| <Link id="m-authport" /><code>{"int AuthPort { get; private set; }"}</code> |  |
| <Link id="m-console" /><code>{"int Console { get; }"}</code> |  |
| <Link id="m-consoleport" /><code>{"int ConsolePort { get; private set; }"}</code> |  |
| <Link id="m-game" /><code>{"int Game { get; }"}</code> |  |
| <Link id="m-serverport" /><code>{"int ServerPort { get; private set; }"}</code> |  |
| <Link id="m-web" /><code>{"int Web { get; }"}</code> |  |
| <Link id="m-webport" /><code>{"int WebPort { get; private set; }"}</code> |  |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valid" /><code>{"static int Valid(int port, int fallback)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TavernServer`:

[`AuthManager.Ports`](/tavernlib-api/types/backend-auth/authmanager#m-ports), [`ServerPortPatches.Ports`](/tavernlib-api/types/patches/serverportpatches#m-ports).
