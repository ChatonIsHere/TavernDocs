---
title: "ModDependencyResolver"
description: "Works out every mod a mod needs, from the merged index and fetched manifests, for one target."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModDependencyResolver

A **static class** in `TavernLib`, `TavernLib.Backend.Mods`.

Works out every mod a mod needs, from the merged index and fetched manifests, for one target.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxdepth" /><code>{"private const int MaxDepth"}</code> | <span className="api-desc">Deepest dependency chain allowed before resolving throws.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolvedependencies" /><code>{"static List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> ResolveDependencies("}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" root, IReadOnlyList<"}<Link to="/mod/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{"> index, Func<string, string, string, "}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> fetchManifest, string target)"}</code> | <span className="api-desc">The newest allowed version of each dependency. Prunes ones with no build for the target; throws on conflicts, cycles or a chain deeper than 5.</span> |
