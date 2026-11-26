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
| <Link id="m-ctor" /><code>{"MeshFaceViewer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemax" /><code>{"private int activeMax"}</code> | <span className="api-desc">Last applied end index.</span> |
| <Link id="m-activemin" /><code>{"private int activeMin"}</code> | <span className="api-desc">Last applied start index.</span> |
| <Link id="m-clone" /><code>{"private Mesh clone"}</code> | <span className="api-desc">Preview mesh shown on the filter.</span> |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">Mesh filter that shows the preview.</span> |
| <Link id="m-maxindex" /><code>{"private int maxIndex"}</code> | <span className="api-desc">Triangle index to stop at.</span> |
| <Link id="m-minindex" /><code>{"private int minIndex"}</code> | <span className="api-desc">First triangle to show.</span> |
| <Link id="m-testingmesh" /><code>{"private Mesh testingMesh"}</code> | <span className="api-desc">Mesh being inspected.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Rebuilds the preview mesh from triangles `minIndex` up to `maxIndex` of `testingMesh`.</span> |

</details>
