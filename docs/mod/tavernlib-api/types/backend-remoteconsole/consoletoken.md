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

- **Listed in** [TavernLib.Backend.RemoteConsole](/mod/tavernlib-api/types/backend-remoteconsole)
- **Documented in** [ConsoleToken](/mod/tavernlib-api/types/backend-remoteconsole/consoletoken)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleToken()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fullpreset" /><code>{"const string FullPreset"}</code> | <span className="api-desc">`full`, the preset of a token that may run everything but `token` and `repeat`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-access" /><code>{"List<string> Access { get; set; }"}</code> | <span className="api-desc">The command and module paths it may run. Unused for a full token.</span> |
| <Link id="m-created" /><code>{"DateTime Created { get; set; }"}</code> | <span className="api-desc">When it was made, in UTC. Signed into the token as `iat`.</span> |
| <Link id="m-expires" /><code>{"DateTime? Expires { get; set; }"}</code> | <span className="api-desc">When it stops working, in UTC, or `null` for never.</span> |
| <Link id="m-generation" /><code>{"int Generation { get; set; }"}</code> | <span className="api-desc">Starts at 1 and goes up on each `token rotate`, so older text stops working.</span> |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> | <span className="api-desc">Its random id, also signed into the token.</span> |
| <Link id="m-isfull" /><code>{"bool IsFull { get; }"}</code> | <span className="api-desc">True when its preset is `full`, ignoring case.</span> |
| <Link id="m-lastused" /><code>{"DateTime? LastUsed { get; set; }"}</code> | <span className="api-desc">When it last logged in, in UTC.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The name given at `token create`. Active tokens' names are unique, ignoring case.</span> |
| <Link id="m-preset" /><code>{"string Preset { get; set; }"}</code> | <span className="api-desc">Its preset label: `full`, `custom` or another one-word label.</span> |
| <Link id="m-revoked" /><code>{"DateTime? Revoked { get; set; }"}</code> | <span className="api-desc">When it was revoked, in UTC, or `null` while it isn't.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | <span className="api-desc">Holds JSON keys TavernLib doesn't model, so they are written back unchanged.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"string Status(DateTime now)"}</code> | <span className="api-desc">`revoked`, `expired` or `active` at the time given.</span> |

## Used in

Members of other types that take, return or hold a `ConsoleToken`:

<div className="api-used-in">

[`ConsoleAuth.Mint`](/mod/tavernlib-api/types/backend-remoteconsole/consoleauth#m-mint), [`ConsoleTokenList.Tokens`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenlist#m-tokens), [`ConsoleTokenStore.All`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-all), [`ConsoleTokenStore.Find`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-find), [`ConsoleTokenStore.Entry.Entry`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry#m-ctor), [`ConsoleTokenStore.Entry.Token`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry#m-token), [`TokenCommandModule.Info`](/mod/tavernlib-api/types/moduleports/tokencommandmodule#m-info), [`TokenCommandModule.NewId`](/mod/tavernlib-api/types/moduleports/tokencommandmodule#m-newid).

</div>
