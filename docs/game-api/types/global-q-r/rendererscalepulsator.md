---
title: "RendererScalePulsator"
description: "Scale pulsator with a mesh filter whose mesh can be swapped."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererScalePulsator

A **class** in `Root.Township`, no namespace.

Scale pulsator with a mesh filter whose mesh can be swapped.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`ScalePulsator`](/game-api/types/global-s/scalepulsator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererScalePulsator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | Mesh filter to update. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatemesh" /><code>{"void UpdateMesh(Mesh mesh)"}</code> | Sets the mesh shown by the filter. |
