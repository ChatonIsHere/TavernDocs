---
title: "DynamicObjectCombiner"
description: "A StaticObjectCombiner for moving objects: it keeps results off the terrain layer, skips listed renderers, and can add the combined renderers to a..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicObjectCombiner

A **class** in `Root.Township`, the global namespace.

A `StaticObjectCombiner` for moving objects: it keeps results off the terrain layer, skips listed renderers, and can add the combined renderers to a `RendererGroup`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`StaticObjectCombiner`](/mod/game-api/types/global-s/staticobjectcombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamicObjectCombiner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addresultsto" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" addResultsTo"}</code> | Optional renderer group that gets the combined renderers. |
| <Link id="m-avoidchildrenderersof" /><code>{"private Transform avoidChildRenderersOf"}</code> | Renderers under this transform are left out. |
| <Link id="m-rendererstoavoid" /><code>{"private Renderer[] renderersToAvoid"}</code> | Renderers left out of the combine. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscleaningonjoin" /><code>{"protected override bool IsCleaningOnJoin { get; }"}</code> | Always false. |
| <Link id="m-issettingtoterrainlayer" /><code>{"protected override bool IsSettingToTerrainLayer { get; }"}</code> | Always false, so results stay on their own layer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake()"}</code> | Combines meshes like the base, listening for the created renderers to add them to `addResultsTo`. |
| <Link id="m-validaterenderer" /><code>{"protected override bool ValidateRenderer(Renderer renderer)"}</code> | Rejects renderers under `avoidChildRenderersOf` or in `renderersToAvoid`, then defers to the base check. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrenderers" /><code>{"private void AddRenderers(IEnumerable<Renderer> renderers)"}</code> | Adds the newly combined renderers to `addResultsTo`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Turns off the terrain-occludes-triangles function, which does not suit moving objects. |

</details>
