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

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Derived types** [`ModsListConfig`](/tavernlib-api/types/backend-server-configs/modslistconfig)
- **Documented in** [ModsList](/tavernlib-api/types/backend-server-configs/modslist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModsList()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-mods" /><code>{"List<string> Mods { get; set; }"}</code> | The entries, each `id` or `id@version`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-parseentry" /><code>{"static ValueTuple<string, string> ParseEntry(string entry)"}</code> | Splits an entry into the id and the pinned version. A bare `id@` or no `@` means latest (`null`). |

## Used in

Members of other types that take, return or hold a `ModsList`:

[`ModReconciler.Reconcile`](/tavernlib-api/types/backend-mods/modreconciler#m-reconcile), [`ModReconciler.Pass.Run`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-run).
