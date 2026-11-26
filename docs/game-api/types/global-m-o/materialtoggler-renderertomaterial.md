---
title: "MaterialToggler.RendererToMaterial"
description: "A mesh renderer and its original shared material, so MaterialToggler can restore it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialToggler.RendererToMaterial

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A mesh renderer and its original shared material, so `MaterialToggler` can restore it.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MaterialToggler`](/game-api/types/global-m-o/materialtoggler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RendererToMaterial(MeshRenderer renderer)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-originalmaterial" /><code>{"Material OriginalMaterial { get; private set; }"}</code> | The renderer's shared material before toggling. |
| <Link id="m-renderer" /><code>{"MeshRenderer Renderer { get; private set; }"}</code> | The mesh renderer. |

## Used in

Members of other types that take, return or hold a `RendererToMaterial`:

[`MaterialToggler.renderersToToggle`](/game-api/types/global-m-o/materialtoggler#m-rendererstotoggle).
