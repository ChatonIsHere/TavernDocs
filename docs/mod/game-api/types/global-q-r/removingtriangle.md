---
title: "RemovingTriangle"
description: "One mesh triangle with its corners, centre, edges and normal, used when deciding which triangles to strip from combined static meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemovingTriangle

A **class** in `Root.Township`, the global namespace.

One mesh triangle with its corners, centre, edges and normal, used when deciding which triangles to strip from combined static meshes.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemovingTriangle(List<Vector3> vertices, List<int> triangles, int startIndex)"}</code> | <span className="api-desc">Creates a `RemovingTriangle` from `vertices`, `triangles` and `startIndex`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"Vector3 A { get; }"}</code> | <span className="api-desc">First corner.</span> |
| <Link id="m-b" /><code>{"Vector3 B { get; }"}</code> | <span className="api-desc">Second corner.</span> |
| <Link id="m-c" /><code>{"Vector3 C { get; }"}</code> | <span className="api-desc">Third corner.</span> |
| <Link id="m-center" /><code>{"Vector3 Center { get; }"}</code> | <span className="api-desc">Average of the three corners.</span> |
| <Link id="m-indices" /><code>{"int[] Indices { get; }"}</code> | <span className="api-desc">The three vertex indices.</span> |
| <Link id="m-linesegments" /><code>{"Vector3[] LineSegments { get; }"}</code> | <span className="api-desc">The three edge vectors: A minus B, B minus C and C minus A.</span> |
| <Link id="m-normal" /><code>{"Vector3 Normal { get; }"}</code> | <span className="api-desc">Unit normal of the triangle.</span> |
| <Link id="m-startindex" /><code>{"int StartIndex { get; }"}</code> | <span className="api-desc">Index of the triangle's first entry in the triangle list.</span> |
| <Link id="m-willremove" /><code>{"bool WillRemove { get; set; }"}</code> | <span className="api-desc">Whether the triangle will be removed. Starts true.</span> |

## Used in

Members of other types that take, return or hold a `RemovingTriangle`:

<div className="api-used-in">

[`OldVisibilityTest.CalculateOccludedTriangles`](/mod/game-api/types/global-m-o/oldvisibilitytest#m-calculateoccludedtriangles), [`StaticObjectCombiner.ExcludeOccludedTriangles`](/mod/game-api/types/global-s/staticobjectcombiner#m-excludeoccludedtriangles), [`TriangleVisibilityUtility.CalculateOccludedTriangles`](/mod/game-api/types/global-t-x/trianglevisibilityutility#m-calculateoccludedtriangles).

</div>
