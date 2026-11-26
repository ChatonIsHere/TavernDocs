---
title: "ModParity.RequiredMod"
description: "One mod a joining player is missing or has the wrong version of, as sent in the refusal and written to last_rejection.json."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModParity.RequiredMod

A **class** in `TavernLib`, `TavernLib.Backend.Auth`.

One mod a joining player is missing or has the wrong version of, as sent in the refusal and written to `last_rejection.json`.

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested in** [`ModParity`](/mod/tavernlib-api/types/backend-auth/modparity)
- **Documented in** [ModParity.RequiredMod](/mod/tavernlib-api/types/backend-auth/modparity-requiredmod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RequiredMod()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"string Id"}</code> | The mod id. |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo"}</code> | The source the server installed it from. |
| <Link id="m-version" /><code>{"string Version"}</code> | The version the server has. |

## Used in

Members of other types that take, return or hold a `RequiredMod`:

[`ModParity.CheckJoin`](/mod/tavernlib-api/types/backend-auth/modparity#m-checkjoin), [`ModParity.RefusalReason`](/mod/tavernlib-api/types/backend-auth/modparity#m-refusalreason).
