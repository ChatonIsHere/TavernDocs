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
| <Link id="m-ctor" /><code>{"DynamicObjectCombiner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addresultsto" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" addResultsTo"}</code> | <span className="api-desc">Optional renderer group that gets the combined renderers.</span> |
| <Link id="m-avoidchildrenderersof" /><code>{"private Transform avoidChildRenderersOf"}</code> | <span className="api-desc">Renderers under this transform are left out.</span> |
| <Link id="m-rendererstoavoid" /><code>{"private Renderer[] renderersToAvoid"}</code> | <span className="api-desc">Renderers left out of the combine.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscleaningonjoin" /><code>{"protected override bool IsCleaningOnJoin { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-issettingtoterrainlayer" /><code>{"protected override bool IsSettingToTerrainLayer { get; }"}</code> | <span className="api-desc">Always false, so results stay on their own layer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake()"}</code> | <span className="api-desc">Combines meshes like the base, listening for the created renderers to add them to `addResultsTo`.</span> |
| <Link id="m-validaterenderer" /><code>{"protected override bool ValidateRenderer(Renderer renderer)"}</code> | <span className="api-desc">Rejects renderers under `avoidChildRenderersOf` or in `renderersToAvoid`, then defers to the base check.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrenderers" /><code>{"private void AddRenderers(IEnumerable<Renderer> renderers)"}</code> | <span className="api-desc">Adds the newly combined renderers to `addResultsTo`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Turns off the terrain-occludes-triangles function, which does not suit moving objects.</span> |

</details>
