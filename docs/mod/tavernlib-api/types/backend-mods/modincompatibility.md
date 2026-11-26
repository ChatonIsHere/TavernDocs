---
title: "ModIncompatibility"
description: "One entry of a mod source's incompatible list: two mods that don't work together while each is below its below version."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModIncompatibility

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

One entry of a mod source's `incompatible` list: two mods that don't work together while each is below its `below` version. Read by `ModRepoClient.IncompatibilitiesFrom`; the reconciler only warns about a clash, since the host chose both mods.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModIncompatibility(Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{"?> below, string note, string sourceRepo)"}</code> | <span className="api-desc">Created by `ModRepoClient.IncompatibilitiesFrom` from one index entry.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-below" /><code>{"Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{"?> Below { get; }"}</code> | <span className="api-desc">The two mod ids, each mapped to the version it stops clashing at, or null if it clashes at every version.</span> |
| <Link id="m-note" /><code>{"string Note { get; }"}</code> | <span className="api-desc">The source's explanation of the clash, shown in the reconcile warning.</span> |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; }"}</code> | <span className="api-desc">Base URL of the source that listed this pair.</span> |

## Used in

Members of other types that take, return or hold a `ModIncompatibility`:

<div className="api-used-in">

[`ModIndex.Clashes`](/mod/tavernlib-api/types/backend-mods/modindex#m-clashes), [`ModIndex.Incompatible`](/mod/tavernlib-api/types/backend-mods/modindex#m-incompatible), [`ModIndex.ModIndex`](/mod/tavernlib-api/types/backend-mods/modindex#m-ctor-2), [`ModRepoClient.FetchRepoIndex`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-fetchrepoindex), [`ModRepoClient.IncompatibilitiesFrom`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-incompatibilitiesfrom).

</div>
