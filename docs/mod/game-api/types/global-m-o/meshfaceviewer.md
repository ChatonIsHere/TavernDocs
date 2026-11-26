---
title: "MeshFaceViewer"
description: "Editor debug tool that shows only a range of a mesh's triangles on a mesh filter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshFaceViewer

A **class** in `Root.Township`, the global namespace.

Editor debug tool that shows only a range of a mesh's triangles on a mesh filter.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshFaceViewer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemax" /><code>{"private int activeMax"}</code> | Last applied end index. |
| <Link id="m-activemin" /><code>{"private int activeMin"}</code> | Last applied start index. |
| <Link id="m-clone" /><code>{"private Mesh clone"}</code> | Preview mesh shown on the filter. |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | Mesh filter that shows the preview. |
| <Link id="m-maxindex" /><code>{"private int maxIndex"}</code> | Triangle index to stop at. |
| <Link id="m-minindex" /><code>{"private int minIndex"}</code> | First triangle to show. |
| <Link id="m-testingmesh" /><code>{"private Mesh testingMesh"}</code> | Mesh being inspected. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Rebuilds the preview mesh from triangles `minIndex` up to `maxIndex` of `testingMesh`. |

</details>
