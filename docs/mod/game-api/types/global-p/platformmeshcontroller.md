---
title: "PlatformMeshController"
description: "Swaps a renderer's mesh and/or material on chosen platforms, at bake time and again on Awake in play."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformMeshController

A **class** in `Root.Township`, the global namespace.

Swaps a renderer's mesh and/or material on chosen platforms, at bake time and again on `Awake` in play.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformDetails`](/mod/game-api/types/global-p/platformmeshcontroller-platformdetails)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformMeshController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-replacements" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformmeshcontroller-platformdetails">{"PlatformMeshController.PlatformDetails"}</Link>{"[] replacements"}</code> | Replacement mesh and material per platform, with flags to allow null. |
| <Link id="m-targetfilter" /><code>{"private MeshFilter targetFilter"}</code> | Mesh filter whose mesh is replaced. |
| <Link id="m-targetrenderer" /><code>{"private MeshRenderer targetRenderer"}</code> | Mesh renderer whose material is replaced. |
| <Link id="m-targetskinnedmeshrenderer" /><code>{"private SkinnedMeshRenderer targetSkinnedMeshRenderer"}</code> | Skinned mesh renderer whose mesh and material are replaced. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | Applies the first matching platform's replacement mesh and material to the target renderers. |
| <Link id="m-createplatformmeshcontroller" /><code>{"static void CreatePlatformMeshController(Renderer renderer, Material newMaterial)"}</code> | Adds a controller to a renderer that swaps in the given material on Android. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Applies the platform replacement when the game is running. |

</details>
