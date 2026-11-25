---
title: "ModSummary"
description: "A class in TavernLib, TavernLib.Backend.Mods."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModSummary

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Derived types** [`ModIndex`](/tavernlib-api/types/backend-mods/modindex)
- **Documented in** [ModSummary](/tavernlib-api/types/backend-mods/modsummary), [Sources and reconcile](/tavernlib-api/mod-manager/sources-and-reconcile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModSummary()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-highest" /><code><Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" Highest { get; private set; }"}</code> |  |
| <Link id="m-id" /><code>{"string Id { get; private set; }"}</code> |  |
| <Link id="m-major" /><code>{"int Major { get; }"}</code> |  |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; private set; }"}</code> |  |
| <Link id="m-versions" /><code>{"List<string> Versions { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{" FromJson(JObject d, string modId, string sourceRepo)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ModSummary`:

[`ModDependencyResolver.ResolveDependencies`](/tavernlib-api/types/backend-mods/moddependencyresolver#m-resolvedependencies), [`ModIndex.ModIndex`](/tavernlib-api/types/backend-mods/modindex#m-ctor-2), [`ModIndex.ReplacementOfUnlisted`](/tavernlib-api/types/backend-mods/modindex#m-replacementofunlisted), [`ModRepoClient.FetchRepoIndex`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchrepoindex).
