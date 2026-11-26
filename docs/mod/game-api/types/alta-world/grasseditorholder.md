---
title: "GrassEditorHolder"
description: "Editor tool for shaping one grass blade as a spine of points with a width at each."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassEditorHolder

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

Editor tool for shaping one grass blade as a spine of points with a width at each.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassEditorHolder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-proceduralygenerated" /><code>{"private bool proceduralyGenerated"}</code> | <span className="api-desc">True when the spine came from `ReceiveProceduralBlade`; other edits clear it first.</span> |
| <Link id="m-spinepoints" /><code>{"private List<Vector3> spinePoints"}</code> | <span className="api-desc">Backing field for `SpinePoints`.</span> |
| <Link id="m-width" /><code>{"private List<float> width"}</code> | <span className="api-desc">Backing field for `Width`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxy" /><code>{"float MaxY { get; }"}</code> | <span className="api-desc">Height of the highest spine point.</span> |
| <Link id="m-spinepoints-2" /><code>{"List<Vector3> SpinePoints { get; }"}</code> | <span className="api-desc">Spine points, from the root up.</span> |
| <Link id="m-triangles" /><code>{"int[] Triangles { get; }"}</code> | <span className="api-desc">Always null in this build.</span> |
| <Link id="m-width-2" /><code>{"List<float> Width { get; }"}</code> | <span className="api-desc">Blade width at each spine point.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createblade" /><code>{"void CreateBlade(int numberOfVertices, float width, float height)"}</code> | <span className="api-desc">Adds a straight spine of evenly spaced points up to a height, all with the same width.</span> |
| <Link id="m-loadstructure" /><code>{"void LoadStructure("}<Link to="/mod/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" newMesh)"}</code> | <span className="api-desc">Rebuilds the spine and widths from a saved `GrassBladeMesh`'s vertex pairs.</span> |
| <Link id="m-pushvertices" /><code>{"void PushVertices(int numberOfVertices)"}</code> | <span className="api-desc">Grows or shrinks the spine to a point count, extending upward from the last point.</span> |
| <Link id="m-receiveproceduralblade" /><code>{"void ReceiveProceduralBlade(float frontBend, float sideBend, float height, float width, float widthTop)"}</code> | <span className="api-desc">Replaces the spine with a five-point bent blade from front and side bend, height and widths.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearprocedural" /><code>{"private void ClearProcedural()"}</code> | <span className="api-desc">Clears the spine and widths and the procedural flag.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the spine and blade outline in green with yellow spheres at points.</span> |

</details>
