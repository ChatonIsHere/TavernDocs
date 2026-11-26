---
title: "ModReplacement"
description: "One entry of a source's replaced list: a retired mod id and the mod that takes its place."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModReplacement

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

One entry of a source's `replaced` list: a retired mod id and the mod that takes its place.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [ModReplacement](/mod/tavernlib-api/types/backend-mods/modreplacement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModReplacement(string oldId, string by, string note, string sourceRepo)"}</code> | <span className="api-desc">Stores the retired id, the id that replaces it, a note, and the source repo.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-by" /><code>{"string By { get; }"}</code> | <span className="api-desc">The id of the mod that replaces it.</span> |
| <Link id="m-note" /><code>{"string Note { get; }"}</code> | <span className="api-desc">The source's note on why. Empty if none.</span> |
| <Link id="m-oldid" /><code>{"string OldId { get; }"}</code> | <span className="api-desc">The retired mod id.</span> |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; }"}</code> | <span className="api-desc">The source that listed it.</span> |

## Used in

Members of other types that take, return or hold a `ModReplacement`:

<div className="api-used-in">

[`ModIndex.ModIndex`](/mod/tavernlib-api/types/backend-mods/modindex#m-ctor-2), [`ModIndex.Replaced`](/mod/tavernlib-api/types/backend-mods/modindex#m-replaced), [`ModIndex.ReplacementOfUnlisted`](/mod/tavernlib-api/types/backend-mods/modindex#m-replacementofunlisted), [`ModRepoClient.FetchRepoIndex`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-fetchrepoindex), [`ModRepoClient.ReplacementsFrom`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-replacementsfrom).

</div>
