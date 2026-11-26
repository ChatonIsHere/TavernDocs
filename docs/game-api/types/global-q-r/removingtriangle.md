---
title: "RemovingTriangle"
description: "One mesh triangle with its corners, centre, edges and normal, used when deciding which triangles to strip from combined static meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemovingTriangle

A **class** in `Root.Township`, no namespace.

One mesh triangle with its corners, centre, edges and normal, used when deciding which triangles to strip from combined static meshes.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RemovingTriangle(List<Vector3> vertices, List<int> triangles, int startIndex)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"Vector3 A { get; }"}</code> | First corner. |
| <Link id="m-b" /><code>{"Vector3 B { get; }"}</code> | Second corner. |
| <Link id="m-c" /><code>{"Vector3 C { get; }"}</code> | Third corner. |
| <Link id="m-center" /><code>{"Vector3 Center { get; }"}</code> | Average of the three corners. |
| <Link id="m-indices" /><code>{"int[] Indices { get; }"}</code> | The three vertex indices. |
| <Link id="m-linesegments" /><code>{"Vector3[] LineSegments { get; }"}</code> | The three edge vectors: A minus B, B minus C and C minus A. |
| <Link id="m-normal" /><code>{"Vector3 Normal { get; }"}</code> | Unit normal of the triangle. |
| <Link id="m-startindex" /><code>{"int StartIndex { get; }"}</code> | Index of the triangle's first entry in the triangle list. |
| <Link id="m-willremove" /><code>{"bool WillRemove { get; set; }"}</code> | Whether the triangle will be removed. Starts true. |

## Used in

Members of other types that take, return or hold a `RemovingTriangle`:

[`OldVisibilityTest.CalculateOccludedTriangles`](/game-api/types/global-m-o/oldvisibilitytest#m-calculateoccludedtriangles), [`StaticObjectCombiner.ExcludeOccludedTriangles`](/game-api/types/global-s/staticobjectcombiner#m-excludeoccludedtriangles), [`TriangleVisibilityUtility.CalculateOccludedTriangles`](/game-api/types/global-t-x/trianglevisibilityutility#m-calculateoccludedtriangles).
