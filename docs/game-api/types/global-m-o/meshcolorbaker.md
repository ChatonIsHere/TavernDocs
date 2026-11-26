---
title: "MeshColorBaker"
description: "Build step that bakes a flat vertex colour into its mesh filters' meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshColorBaker

A **class** in `Root.Township`, no namespace.

Build step that bakes a flat vertex colour into its mesh filters' meshes. At runtime it only removes itself, since `Bake` skips play mode.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshColorBaker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | Backing field for `Color`. |
| <Link id="m-filters" /><code>{"private MeshFilter[] filters"}</code> | Backing field for `MeshFilters`. |
| <Link id="m-isconvertingtolinear" /><code>{"private bool isConvertingToLinear"}</code> | Whether the colour is converted to linear space first. |
| <Link id="m-tempassetfolder" /><code>{"private const string TempAssetFolder"}</code> | Editor folder for baked meshes, `Assets/Temporary/BakedColouredMeshes`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> | The colour to bake. |
| <Link id="m-meshfilters" /><code>{"MeshFilter[] MeshFilters { get; set; }"}</code> | The filters to colour; defaults to the ones on this object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | Outside play mode, replaces each filter's mesh with a copy coloured `color` (optionally converted to linear). |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettempassetpath" /><code>{"private static string GetTempAssetPath(Mesh mesh)"}</code> | Builds the asset path for a baked mesh under the temporary folder. |
| <Link id="m-savemesh" /><code>{"private void SaveMesh(Mesh mesh)"}</code> | Empty in this build; probably saved the mesh as an asset in the editor. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Calls `Bake` (which does nothing in play mode) and destroys this component. |
| <Link id="m-validatesavefolder" /><code>{"private static void ValidateSaveFolder()"}</code> | Creates the temporary folder if missing. |

</details>
