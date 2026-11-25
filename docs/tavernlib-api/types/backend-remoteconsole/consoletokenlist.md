---
title: "ConsoleTokenList"
description: "A class in TavernLib, TavernLib.Backend.RemoteConsole."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenList

A **class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`.

A **class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`.

- **Listed in** [TavernLib.Backend.RemoteConsole](/tavernlib-api/types/backend-remoteconsole)
- **Derived types** [`ConsoleTokenFile`](/tavernlib-api/types/backend-remoteconsole/consoletokenfile)
- **Documented in** [ConsoleTokenList](/tavernlib-api/types/backend-remoteconsole/consoletokenlist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleTokenList()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ownergeneration" /><code>{"int OwnerGeneration { get; set; }"}</code> |  |
| <Link id="m-tokens" /><code>{"List<"}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{"> Tokens { get; set; }"}</code> |  |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `ConsoleTokenList`:

[`ConsoleTokenStore.Rebuild`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-rebuild), [`ConsoleTokenStore.Update`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-update), [`TokenCommandModule.Store`](/tavernlib-api/types/moduleports/tokencommandmodule#m-store).
