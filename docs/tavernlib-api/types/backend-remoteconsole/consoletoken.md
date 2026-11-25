---
title: "ConsoleToken"
description: "One named console token's row in console_tokens.json."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleToken

A **class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`.

One named console token's row in `console_tokens.json`. Only its id and generation travel in the token, so an edit to its access applies at once.

- **Listed in** [TavernLib.Backend.RemoteConsole](/tavernlib-api/types/backend-remoteconsole)
- **Documented in** [ConsoleToken](/tavernlib-api/types/backend-remoteconsole/consoletoken)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleToken()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fullpreset" /><code>{"const string FullPreset"}</code> | `full`, the preset of a token that may run everything but `token` and `repeat`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-access" /><code>{"List<string> Access { get; set; }"}</code> | The command and module paths it may run. Unused for a full token. |
| <Link id="m-created" /><code>{"DateTime Created { get; set; }"}</code> | When it was made, in UTC. Signed into the token as `iat`. |
| <Link id="m-expires" /><code>{"DateTime? Expires { get; set; }"}</code> | When it stops working, in UTC, or `null` for never. |
| <Link id="m-generation" /><code>{"int Generation { get; set; }"}</code> | Starts at 1 and goes up on each `token rotate`, so older text stops working. |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> | Its random id, also signed into the token. |
| <Link id="m-isfull" /><code>{"bool IsFull { get; }"}</code> | True when its preset is `full`, ignoring case. |
| <Link id="m-lastused" /><code>{"DateTime? LastUsed { get; set; }"}</code> | When it last logged in, in UTC. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The name given at `token create`. Active tokens' names are unique, ignoring case. |
| <Link id="m-preset" /><code>{"string Preset { get; set; }"}</code> | Its preset label: `full`, `custom` or another one-word label. |
| <Link id="m-revoked" /><code>{"DateTime? Revoked { get; set; }"}</code> | When it was revoked, in UTC, or `null` while it isn't. |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"string Status(DateTime now)"}</code> | `revoked`, `expired` or `active` at the time given. |

## Used in

Members of other types that take, return or hold a `ConsoleToken`:

[`ConsoleAuth.Mint`](/tavernlib-api/types/backend-remoteconsole/consoleauth#m-mint), [`ConsoleTokenList.Tokens`](/tavernlib-api/types/backend-remoteconsole/consoletokenlist#m-tokens), [`ConsoleTokenStore.All`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-all), [`ConsoleTokenStore.Find`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-find), [`ConsoleTokenStore.Entry.Entry`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry#m-ctor), [`ConsoleTokenStore.Entry.Token`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry#m-token), [`TokenCommandModule.Info`](/tavernlib-api/types/moduleports/tokencommandmodule#m-info), [`TokenCommandModule.NewId`](/tavernlib-api/types/moduleports/tokencommandmodule#m-newid).
