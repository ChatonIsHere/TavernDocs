---
title: "InGameInspector.LODVizualizer.RendererMaterial"
description: "A renderer and its original shared material, so the LOD visualizer can put the material back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODVizualizer.RendererMaterial

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A renderer and its original shared material, so the LOD visualizer can put the material back.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector.LODVizualizer`](/mod/game-api/types/global-i-l/ingameinspector-lodvizualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererMaterial(Renderer renderer)"}</code> | <span className="api-desc">Creates an `InGameInspector.LODVizualizer.RendererMaterial` from `renderer`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"Material Material { get; private set; }"}</code> | <span className="api-desc">The renderer's shared material before the visualizer changed it.</span> |
| <Link id="m-renderer" /><code>{"Renderer Renderer { get; private set; }"}</code> | <span className="api-desc">The renderer.</span> |

## Used in

Members of other types that take, return or hold a `RendererMaterial`:

<div className="api-used-in">

[`InGameInspector.LODVizualizer.references`](/mod/game-api/types/global-i-l/ingameinspector-lodvizualizer#m-references).

</div>
