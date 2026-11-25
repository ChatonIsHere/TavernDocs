---
title: "TokenCommandModule.TokenList"
description: "The answer to token list: every named token."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TokenCommandModule.TokenList

A **class** in `TavernLib`, `TavernLib.ModulePorts`.

The answer to `token list`: every named token.

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested in** [`TokenCommandModule`](/tavernlib-api/types/moduleports/tokencommandmodule)
- **Documented in** [TokenCommandModule.TokenList](/tavernlib-api/types/moduleports/tokencommandmodule-tokenlist)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TokenList()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-tokens" /><code>{"List<"}<Link to="/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo">{"TokenCommandModule.TokenInfo"}</Link>{"> Tokens { get; set; }"}</code> | Every named token, revoked and expired ones included, oldest first. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | One token per line, or `No named tokens`. |
