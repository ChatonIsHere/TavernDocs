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

- **Listed in** [TavernLib.Backend.RemoteConsole](/tavernlib-api/types/backend-remoteconsole)
- **Derived types** [`ConsoleTokenFile`](/tavernlib-api/types/backend-remoteconsole/consoletokenfile)
- **Documented in** [ConsoleTokenList](/tavernlib-api/types/backend-remoteconsole/consoletokenlist)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleTokenList()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ownergeneration" /><code>{"int OwnerGeneration { get; set; }"}</code> | Raised by `token rotate owner`, which makes the old owner token stop working. The launcher reads it to write `console_token.txt`. |
| <Link id="m-tokens" /><code>{"List<"}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{"> Tokens { get; set; }"}</code> | Every named token, revoked ones included. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ConsoleTokenList`:

[`ConsoleTokenStore.Rebuild`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-rebuild), [`ConsoleTokenStore.Update`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-update), [`TokenCommandModule.Store`](/tavernlib-api/types/moduleports/tokencommandmodule#m-store).
