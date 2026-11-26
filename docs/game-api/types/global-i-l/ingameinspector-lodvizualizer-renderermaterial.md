---
title: "InGameInspector.LODVizualizer.RendererMaterial"
description: "A renderer and its original shared material, so the LOD visualizer can put the material back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODVizualizer.RendererMaterial

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A renderer and its original shared material, so the LOD visualizer can put the material back.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector.LODVizualizer`](/game-api/types/global-i-l/ingameinspector-lodvizualizer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RendererMaterial(Renderer renderer)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"Material Material { get; private set; }"}</code> | The renderer's shared material before the visualizer changed it. |
| <Link id="m-renderer" /><code>{"Renderer Renderer { get; private set; }"}</code> | The renderer. |

## Used in

Members of other types that take, return or hold a `RendererMaterial`:

[`InGameInspector.LODVizualizer.references`](/game-api/types/global-i-l/ingameinspector-lodvizualizer#m-references).
