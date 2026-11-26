---
title: "MeshColorBaker"
description: "Build step that bakes a flat vertex colour into its mesh filters' meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshColorBaker

A **class** in `Root.Township`, the global namespace.

Build step that bakes a flat vertex colour into its mesh filters' meshes. At runtime it only removes itself, since `Bake` skips play mode.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshColorBaker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | <span className="api-desc">Backing field for `Color`.</span> |
| <Link id="m-filters" /><code>{"private MeshFilter[] filters"}</code> | <span className="api-desc">Backing field for `MeshFilters`.</span> |
| <Link id="m-isconvertingtolinear" /><code>{"private bool isConvertingToLinear"}</code> | <span className="api-desc">Whether the colour is converted to linear space first.</span> |
| <Link id="m-tempassetfolder" /><code>{"private const string TempAssetFolder"}</code> | <span className="api-desc">Editor folder for baked meshes, `Assets/Temporary/BakedColouredMeshes`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> | <span className="api-desc">The colour to bake.</span> |
| <Link id="m-meshfilters" /><code>{"MeshFilter[] MeshFilters { get; set; }"}</code> | <span className="api-desc">The filters to colour; defaults to the ones on this object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | <span className="api-desc">Outside play mode, replaces each filter's mesh with a copy coloured `color` (optionally converted to linear).</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettempassetpath" /><code>{"private static string GetTempAssetPath(Mesh mesh)"}</code> | <span className="api-desc">Builds the asset path for a baked mesh under the temporary folder.</span> |
| <Link id="m-savemesh" /><code>{"private void SaveMesh(Mesh mesh)"}</code> | <span className="api-desc">Empty in this build; probably saved the mesh as an asset in the editor.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `Bake` (which does nothing in play mode) and destroys this component.</span> |
| <Link id="m-validatesavefolder" /><code>{"private static void ValidateSaveFolder()"}</code> | <span className="api-desc">Creates the temporary folder if missing.</span> |

</details>
