---
title: "GrassEditorHolder"
description: "class GrassEditorHolder in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassEditorHolder

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassEditorHolder()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-proceduralygenerated" /><code>{"private bool proceduralyGenerated"}</code> |  |
| <Link id="m-spinepoints" /><code>{"private List<Vector3> spinePoints"}</code> |  |
| <Link id="m-width" /><code>{"private List<float> width"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxy" /><code>{"float MaxY { get; }"}</code> |  |
| <Link id="m-spinepoints-2" /><code>{"List<Vector3> SpinePoints { get; }"}</code> |  |
| <Link id="m-triangles" /><code>{"int[] Triangles { get; }"}</code> |  |
| <Link id="m-width-2" /><code>{"List<float> Width { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createblade" /><code>{"void CreateBlade(int numberOfVertices, float width, float height)"}</code> |  |
| <Link id="m-loadstructure" /><code>{"void LoadStructure("}<Link to="/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" newMesh)"}</code> |  |
| <Link id="m-pushvertices" /><code>{"void PushVertices(int numberOfVertices)"}</code> |  |
| <Link id="m-receiveproceduralblade" /><code>{"void ReceiveProceduralBlade(float frontBend, float sideBend, float height, float width, float widthTop)"}</code> |  |
| <Link id="m-clearprocedural" /><code>{"private void ClearProcedural()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
