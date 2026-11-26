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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassEditorHolder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-proceduralygenerated" /><code>{"private bool proceduralyGenerated"}</code> | True when the spine came from `ReceiveProceduralBlade`; other edits clear it first. |
| <Link id="m-spinepoints" /><code>{"private List<Vector3> spinePoints"}</code> | Backing field for `SpinePoints`. |
| <Link id="m-width" /><code>{"private List<float> width"}</code> | Backing field for `Width`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxy" /><code>{"float MaxY { get; }"}</code> | Height of the highest spine point. |
| <Link id="m-spinepoints-2" /><code>{"List<Vector3> SpinePoints { get; }"}</code> | Spine points, from the root up. |
| <Link id="m-triangles" /><code>{"int[] Triangles { get; }"}</code> | Always null in this build. |
| <Link id="m-width-2" /><code>{"List<float> Width { get; }"}</code> | Blade width at each spine point. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createblade" /><code>{"void CreateBlade(int numberOfVertices, float width, float height)"}</code> | Adds a straight spine of evenly spaced points up to a height, all with the same width. |
| <Link id="m-loadstructure" /><code>{"void LoadStructure("}<Link to="/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" newMesh)"}</code> | Rebuilds the spine and widths from a saved `GrassBladeMesh`'s vertex pairs. |
| <Link id="m-pushvertices" /><code>{"void PushVertices(int numberOfVertices)"}</code> | Grows or shrinks the spine to a point count, extending upward from the last point. |
| <Link id="m-receiveproceduralblade" /><code>{"void ReceiveProceduralBlade(float frontBend, float sideBend, float height, float width, float widthTop)"}</code> | Replaces the spine with a five-point bent blade from front and side bend, height and widths. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearprocedural" /><code>{"private void ClearProcedural()"}</code> | Clears the spine and widths and the procedural flag. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Empty. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the spine and blade outline in green with yellow spheres at points. |

</details>
