---
title: "ConsoleTokenList"
description: "The contents of console_tokens.json: the named tokens and the owner token's generation."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenList

A **class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`.

The contents of `console_tokens.json`: the named tokens and the owner token's generation. Unknown fields are kept.

- **Listed in** [TavernLib.Backend.RemoteConsole](/mod/tavernlib-api/types/backend-remoteconsole)
- **Derived types** [`ConsoleTokenFile`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenfile)
- **Documented in** [ConsoleTokenList](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenlist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleTokenList()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ownergeneration" /><code>{"int OwnerGeneration { get; set; }"}</code> | Raised by `token rotate owner`, which makes the old owner token stop working. The launcher reads it to write `console_token.txt`. |
| <Link id="m-tokens" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{"> Tokens { get; set; }"}</code> | Every named token, revoked ones included. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | Holds JSON keys TavernLib doesn't model, so they are written back unchanged. |

</details>

## Used in

Members of other types that take, return or hold a `ConsoleTokenList`:

[`ConsoleTokenStore.Rebuild`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-rebuild), [`ConsoleTokenStore.Update`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-update), [`TokenCommandModule.Store`](/mod/tavernlib-api/types/moduleports/tokencommandmodule#m-store).
