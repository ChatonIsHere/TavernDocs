---
title: "ModSummary"
description: "One mod's entry in a source's repository.json for one major version: the versions it lists."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModSummary

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

One mod's entry in a source's `repository.json` for one major version: the versions it lists.

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
| <Link id="m-highest" /><code><Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" Highest { get; private set; }"}</code> | The highest listed version. |
| <Link id="m-id" /><code>{"string Id { get; private set; }"}</code> | The mod id. |
| <Link id="m-major" /><code>{"int Major { get; }"}</code> | The major version this entry is for, from `Highest`. |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; private set; }"}</code> | The source the index came from. |
| <Link id="m-versions" /><code>{"List<string> Versions { get; private set; }"}</code> | Every valid version listed, as text. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{" FromJson(JObject d, string modId, string sourceRepo)"}</code> | Parses one entry. `null` (with a warning) with no versions list, no valid version or no `parity_required`. Bad versions are skipped. |

## Used in

Members of other types that take, return or hold a `ModSummary`:

[`ModDependencyResolver.ResolveDependencies`](/tavernlib-api/types/backend-mods/moddependencyresolver#m-resolvedependencies), [`ModIndex.ModIndex`](/tavernlib-api/types/backend-mods/modindex#m-ctor-2), [`ModIndex.ReplacementOfUnlisted`](/tavernlib-api/types/backend-mods/modindex#m-replacementofunlisted), [`ModRepoClient.FetchRepoIndex`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchrepoindex).
