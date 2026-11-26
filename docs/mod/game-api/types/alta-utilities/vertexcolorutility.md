---
title: "VertexColorUtility"
description: "Makes and caches copies of meshes with every vertex set to one colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VertexColorUtility

A **static class** in `Root.Township`, `Alta.Utilities`.

Makes and caches copies of meshes with every vertex set to one colour. Used for mesh colour baking and nameplates.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private static readonly List<Color> colors"}</code> | <span className="api-desc">Reused colour list to avoid allocations.</span> |
| <Link id="m-meshmap" /><code>{"private static readonly Dictionary<int, Mesh> meshMap"}</code> | <span className="api-desc">Cache of coloured meshes by hash. Entries are never removed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcolouredmesh" /><code>{"static Mesh GetColouredMesh(Mesh mesh, Color color)"}</code> | <span className="api-desc">Returns a cached coloured copy for this mesh and colour, creating one if needed.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createcolouredmesh" /><code>{"private static Mesh CreateColouredMesh(Mesh mesh, Color color)"}</code> | <span className="api-desc">Instantiates a copy of the mesh, names it with the colour, and sets every vertex colour to that colour.</span> |
| <Link id="m-gethash" /><code>{"private static int GetHash(Mesh mesh, Color color)"}</code> | <span className="api-desc">Combines the mesh and colour hash codes into the cache key.</span> |

</details>
