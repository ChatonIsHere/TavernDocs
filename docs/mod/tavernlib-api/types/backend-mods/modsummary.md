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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Derived types** [`ModIndex`](/mod/tavernlib-api/types/backend-mods/modindex)
- **Documented in** [Sources and reconcile](/mod/tavernlib-api/mod-manager/sources-and-reconcile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModSummary()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-highest" /><code><Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" Highest { get; private set; }"}</code> | <span className="api-desc">The highest listed version.</span> |
| <Link id="m-id" /><code>{"string Id { get; private set; }"}</code> | <span className="api-desc">The mod id.</span> |
| <Link id="m-major" /><code>{"int Major { get; }"}</code> | <span className="api-desc">The major version this entry is for, from `Highest`.</span> |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; private set; }"}</code> | <span className="api-desc">The source the index came from.</span> |
| <Link id="m-versions" /><code>{"List<string> Versions { get; private set; }"}</code> | <span className="api-desc">Every valid version listed, as text.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{" FromJson(JObject d, string modId, string sourceRepo)"}</code> | <span className="api-desc">Parses one entry. `null` (with a warning) with no versions list, no valid version or no `parity_required`. Bad versions are skipped.</span> |

## Used in

Members of other types that take, return or hold a `ModSummary`:

<div className="api-used-in">

[`ModDependencyResolver.ResolveDependencies`](/mod/tavernlib-api/types/backend-mods/moddependencyresolver#m-resolvedependencies), [`ModIndex.ModIndex`](/mod/tavernlib-api/types/backend-mods/modindex#m-ctor-2), [`ModIndex.ReplacementOfUnlisted`](/mod/tavernlib-api/types/backend-mods/modindex#m-replacementofunlisted), [`ModRepoClient.FetchRepoIndex`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-fetchrepoindex).

</div>
