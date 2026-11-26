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

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`TokenCommandModule`](/mod/tavernlib-api/types/moduleports/tokencommandmodule)
- **Documented in** [TokenCommandModule.TokenList](/mod/tavernlib-api/types/moduleports/tokencommandmodule-tokenlist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TokenList()"}</code> | <span className="api-desc">Makes an empty token list answer.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-tokens" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo">{"TokenCommandModule.TokenInfo"}</Link>{"> Tokens { get; set; }"}</code> | <span className="api-desc">Every named token, revoked and expired ones included, oldest first.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">One token per line, or `No named tokens`.</span> |
