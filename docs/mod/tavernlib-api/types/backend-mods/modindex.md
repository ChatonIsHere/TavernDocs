---
title: "ModIndex"
description: "Every trusted source's repository.json merged: a list of ModSummary plus the replacements they list."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModIndex

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

Every trusted source's `repository.json` merged: a list of `ModSummary` plus the replacements they list.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Inherits or implements** `List<ModSummary>`
- **Documented in** [ModIndex](/mod/tavernlib-api/types/backend-mods/modindex), [Sources and reconcile](/mod/tavernlib-api/mod-manager/sources-and-reconcile#modindex)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModIndex()"}</code> | <span className="api-desc">Builds the index from the fetched summaries, replacements, incompatible pairs and withdrawn versions; the last two are optional.</span> |
| <Link id="m-ctor-2" /><code>{"ModIndex(IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{"> summaries, IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-mods/modreplacement">{"ModReplacement"}</Link>{"> replaced, IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-mods/modincompatibility">{"ModIncompatibility"}</Link>{"> incompatible = null, IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-mods/modwithdrawal">{"ModWithdrawal"}</Link>{"> withdrawn = null)"}</code> | <span className="api-desc">Builds the index from the fetched summaries, replacements, incompatible pairs and withdrawn versions; the last two are optional.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-incompatible" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modincompatibility">{"ModIncompatibility"}</Link>{"> Incompatible { get; }"}</code> | <span className="api-desc">Every source's incompatible pairs.</span> |
| <Link id="m-replaced" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modreplacement">{"ModReplacement"}</Link>{"> Replaced { get; }"}</code> | <span className="api-desc">Every source's replaced-mod entries.</span> |
| <Link id="m-withdrawn" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modwithdrawal">{"ModWithdrawal"}</Link>{"> Withdrawn { get; }"}</code> | <span className="api-desc">Every source's withdrawn versions.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clashes" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modincompatibility">{"ModIncompatibility"}</Link>{"> Clashes(IReadOnlyDictionary<string, string> versions)"}</code> | <span className="api-desc">The incompatible pairs that apply to a set of installed versions (id to version), each pair once. A version that can't be read counts as below any bound.</span> |
| <Link id="m-replacementofunlisted" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-mods/modreplacement">{"ModReplacement"}</Link>{" ReplacementOfUnlisted(IReadOnlyList<"}<Link to="/mod/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{"> index, string modId)"}</code> | <span className="api-desc">The replacement for an id no source lists any more, if a source lists its replacement. The default source's entry wins.</span> |
| <Link id="m-withdrawalof" /><code><Link to="/mod/tavernlib-api/types/backend-mods/modwithdrawal">{"ModWithdrawal"}</Link>{" WithdrawalOf(string modId, string version)"}</code> | <span className="api-desc">The withdrawal for an exact mod version, preferring the default source's entry, or null if it isn't withdrawn.</span> |

## Used in

Members of other types that take, return or hold a `ModIndex`:

<div className="api-used-in">

[`ModReconciler.Pass._index`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-index), [`ModReconciler.Pass.FetchIndex`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-fetchindex), [`ModReconciler.Pass.Index`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-index-2), [`ModRepoClient.FetchIndexes`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-fetchindexes).

</div>
