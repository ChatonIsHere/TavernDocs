---
title: "ConsoleToken"
description: "A class in TavernLib, TavernLib.Backend.RemoteConsole."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleToken

A **class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`.

A **class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`.

- **Listed in** [TavernLib.Backend.RemoteConsole](/tavernlib-api/types/backend-remoteconsole)
- **Documented in** [ConsoleToken](/tavernlib-api/types/backend-remoteconsole/consoletoken)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleToken()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fullpreset" /><code>{"const string FullPreset"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-access" /><code>{"List<string> Access { get; set; }"}</code> |  |
| <Link id="m-created" /><code>{"DateTime Created { get; set; }"}</code> |  |
| <Link id="m-expires" /><code>{"DateTime? Expires { get; set; }"}</code> |  |
| <Link id="m-generation" /><code>{"int Generation { get; set; }"}</code> |  |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> |  |
| <Link id="m-isfull" /><code>{"bool IsFull { get; }"}</code> |  |
| <Link id="m-lastused" /><code>{"DateTime? LastUsed { get; set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |  |
| <Link id="m-preset" /><code>{"string Preset { get; set; }"}</code> |  |
| <Link id="m-revoked" /><code>{"DateTime? Revoked { get; set; }"}</code> |  |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"string Status(DateTime now)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ConsoleToken`:

[`ConsoleAuth.Mint`](/tavernlib-api/types/backend-remoteconsole/consoleauth#m-mint), [`ConsoleTokenList.Tokens`](/tavernlib-api/types/backend-remoteconsole/consoletokenlist#m-tokens), [`ConsoleTokenStore.All`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-all), [`ConsoleTokenStore.Find`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-find), [`ConsoleTokenStore.Entry.Entry`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry#m-ctor), [`ConsoleTokenStore.Entry.Token`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry#m-token), [`TokenCommandModule.Info`](/tavernlib-api/types/moduleports/tokencommandmodule#m-info), [`TokenCommandModule.NewId`](/tavernlib-api/types/moduleports/tokencommandmodule#m-newid).
