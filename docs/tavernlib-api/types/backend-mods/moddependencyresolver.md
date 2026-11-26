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

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModDependencyResolver](/tavernlib-api/types/backend-mods/moddependencyresolver)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxdepth" /><code>{"private const int MaxDepth"}</code> | Deepest dependency chain allowed before resolving throws. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolvedependencies" /><code>{"static List<"}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> ResolveDependencies("}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" root, IReadOnlyList<"}<Link to="/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{"> index, Func<string, string, string, "}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> fetchManifest, string target)"}</code> | The newest allowed version of each dependency. Prunes ones with no build for the target; throws on conflicts, cycles or a chain deeper than 5. |
