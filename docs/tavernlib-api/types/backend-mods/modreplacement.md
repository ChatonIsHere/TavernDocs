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

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModReplacement](/tavernlib-api/types/backend-mods/modreplacement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModReplacement(string oldId, string by, string note, string sourceRepo)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-by" /><code>{"string By { get; }"}</code> | The id of the mod that replaces it. |
| <Link id="m-note" /><code>{"string Note { get; }"}</code> | The source's note on why. Empty if none. |
| <Link id="m-oldid" /><code>{"string OldId { get; }"}</code> | The retired mod id. |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; }"}</code> | The source that listed it. |

## Used in

Members of other types that take, return or hold a `ModReplacement`:

[`ModIndex.ModIndex`](/tavernlib-api/types/backend-mods/modindex#m-ctor-2), [`ModIndex.Replaced`](/tavernlib-api/types/backend-mods/modindex#m-replaced), [`ModIndex.ReplacementOfUnlisted`](/tavernlib-api/types/backend-mods/modindex#m-replacementofunlisted), [`ModRepoClient.FetchRepoIndex`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchrepoindex), [`ModRepoClient.ReplacementsFrom`](/tavernlib-api/types/backend-mods/modrepoclient#m-replacementsfrom).
