---
title: "TokenCommandModule.TokenInfo"
description: "A named token as token list and token whoami answer it, with JSON names for TavernKeeper and a one-line text form."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TokenCommandModule.TokenInfo

A **class** in `TavernLib`, `TavernLib.ModulePorts`.

A named token as `token list` and `token whoami` answer it, with JSON names for TavernKeeper and a one-line text form. Never holds the token's text.

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested in** [`TokenCommandModule`](/tavernlib-api/types/moduleports/tokencommandmodule)
- **Documented in** [TokenCommandModule.TokenInfo](/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TokenInfo()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-access" /><code>{"List<string> Access { get; set; }"}</code> | The paths the token may run, or one line saying a full token has everything but `token` and `repeat`. |
| <Link id="m-created" /><code>{"DateTime? Created { get; set; }"}</code> | When the token was made, in UTC. |
| <Link id="m-expires" /><code>{"DateTime? Expires { get; set; }"}</code> | When it stops working, in UTC, or `null` for never. |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> | The token's id, or `owner` for the owner token in `whoami`. |
| <Link id="m-lastused" /><code>{"DateTime? LastUsed { get; set; }"}</code> | When it last logged in, in UTC, or `null` if never. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The name given at `token create`. |
| <Link id="m-preset" /><code>{"string Preset { get; set; }"}</code> | The preset label: `full`, `custom` or another one-word label. |
| <Link id="m-sessions" /><code>{"int Sessions { get; set; }"}</code> | How many console sessions are open with it right now. |
| <Link id="m-status" /><code>{"string Status { get; set; }"}</code> | `active`, `expired` or `revoked`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The token on one line: id, name, preset, status, access, expiry, last use and sessions. |

## Used in

Members of other types that take, return or hold a `TokenInfo`:

[`TokenCommandModule.Info`](/tavernlib-api/types/moduleports/tokencommandmodule#m-info), [`TokenCommandModule.TokenList.Tokens`](/tavernlib-api/types/moduleports/tokencommandmodule-tokenlist#m-tokens).
