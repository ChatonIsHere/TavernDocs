---
title: "MaterialToggler.RendererToMaterial"
description: "A mesh renderer and its original shared material, so MaterialToggler can restore it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialToggler.RendererToMaterial

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A mesh renderer and its original shared material, so `MaterialToggler` can restore it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MaterialToggler`](/mod/game-api/types/global-m-o/materialtoggler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererToMaterial(MeshRenderer renderer)"}</code> | <span className="api-desc">Creates a `MaterialToggler.RendererToMaterial` from `renderer`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-originalmaterial" /><code>{"Material OriginalMaterial { get; private set; }"}</code> | <span className="api-desc">The renderer's shared material before toggling.</span> |
| <Link id="m-renderer" /><code>{"MeshRenderer Renderer { get; private set; }"}</code> | <span className="api-desc">The mesh renderer.</span> |

## Used in

Members of other types that take, return or hold a `RendererToMaterial`:

<div className="api-used-in">

[`MaterialToggler.renderersToToggle`](/mod/game-api/types/global-m-o/materialtoggler#m-rendererstotoggle).

</div>
