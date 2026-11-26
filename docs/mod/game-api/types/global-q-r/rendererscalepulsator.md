---
title: "RendererScalePulsator"
description: "Scale pulsator with a mesh filter whose mesh can be swapped."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererScalePulsator

A **class** in `Root.Township`, the global namespace.

Scale pulsator with a mesh filter whose mesh can be swapped.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`ScalePulsator`](/mod/game-api/types/global-s/scalepulsator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererScalePulsator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">Mesh filter to update.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatemesh" /><code>{"void UpdateMesh(Mesh mesh)"}</code> | <span className="api-desc">Sets the mesh shown by the filter.</span> |
