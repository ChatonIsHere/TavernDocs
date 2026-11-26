---
title: "ConsoleTokenFile"
description: "The ServerConfigFile for console_tokens.json."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenFile

A **class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`.

The `ServerConfigFile` for `console_tokens.json`. Only `ConsoleTokenStore` reads and writes it.

- **Listed in** [TavernLib.Backend.RemoteConsole](/mod/tavernlib-api/types/backend-remoteconsole)
- **Inherits or implements** [`ServerConfigFile<ConsoleTokenList>`](/mod/tavernlib-api/types/backend-server-configs/serverconfigfile-t)
- **Documented in** [ConsoleTokenFile](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenfile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleTokenFile(string filePath)"}</code> | Created by TavernLib to read and write this config file at the given path. |

## Used in

Members of other types that take, return or hold a `ConsoleTokenFile`:

[`ConsoleTokenStore.TokenFile`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-tokenfile).
