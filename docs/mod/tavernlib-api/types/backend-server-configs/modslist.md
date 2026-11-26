---
title: "ModsList"
description: "A modlist file, as /modlist reads it: the mod ids, each optionally pinned to a version."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModsList

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

A modlist file, as `/modlist` reads it: the mod ids, each optionally pinned to a version. Its `repos` and `untracked` keys are not read.

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Derived types** [`ModsListConfig`](/mod/tavernlib-api/types/backend-server-configs/modslistconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModsList()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-mods" /><code>{"List<string> Mods { get; set; }"}</code> | <span className="api-desc">The entries, each `id` or `id@version`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-parseentry" /><code>{"static ValueTuple<string, string> ParseEntry(string entry)"}</code> | <span className="api-desc">Splits an entry into the id and the pinned version. A bare `id@` or no `@` means latest (`null`).</span> |

## Used in

Members of other types that take, return or hold a `ModsList`:

<div className="api-used-in">

[`ModReconciler.Reconcile`](/mod/tavernlib-api/types/backend-mods/modreconciler#m-reconcile), [`ModReconciler.Pass.Run`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-run).

</div>
