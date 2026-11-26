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

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`TokenCommandModule`](/mod/tavernlib-api/types/moduleports/tokencommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TokenInfo()"}</code> | <span className="api-desc">Makes an empty token description.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-access" /><code>{"List<string> Access { get; set; }"}</code> | <span className="api-desc">The paths the token may run, or one line saying a full token has everything but `token` and `repeat`.</span> |
| <Link id="m-created" /><code>{"DateTime? Created { get; set; }"}</code> | <span className="api-desc">When the token was made, in UTC.</span> |
| <Link id="m-expires" /><code>{"DateTime? Expires { get; set; }"}</code> | <span className="api-desc">When it stops working, in UTC, or `null` for never.</span> |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> | <span className="api-desc">The token's id, or `owner` for the owner token in `whoami`.</span> |
| <Link id="m-lastused" /><code>{"DateTime? LastUsed { get; set; }"}</code> | <span className="api-desc">When it last logged in, in UTC, or `null` if never.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The name given at `token create`.</span> |
| <Link id="m-preset" /><code>{"string Preset { get; set; }"}</code> | <span className="api-desc">The preset label: `full`, `custom` or another one-word label.</span> |
| <Link id="m-sessions" /><code>{"int Sessions { get; set; }"}</code> | <span className="api-desc">How many console sessions are open with it right now.</span> |
| <Link id="m-status" /><code>{"string Status { get; set; }"}</code> | <span className="api-desc">`active`, `expired` or `revoked`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The token on one line: id, name, preset, status, access, expiry, last use and sessions.</span> |

## Used in

Members of other types that take, return or hold a `TokenInfo`:

<div className="api-used-in">

[`TokenCommandModule.Info`](/mod/tavernlib-api/types/moduleports/tokencommandmodule#m-info), [`TokenCommandModule.TokenList.Tokens`](/mod/tavernlib-api/types/moduleports/tokencommandmodule-tokenlist#m-tokens).

</div>
