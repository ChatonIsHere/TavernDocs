---
title: "TerrainSpline"
description: "Generation part for forest node map edges: builds a Bezier spline along part of the edge, laid on the terrain, and instantiates a prefab on it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainSpline

A **class** in `Root.Township`, the global namespace.

Generation part for forest node map edges: builds a Bezier spline along part of the edge, laid on the terrain, and instantiates a prefab on it.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Derived types** [`SafetySpline`](/mod/game-api/types/global-s/safetyspline)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainSpline()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-edgelengthpercentmaximum" /><code>{"protected float edgeLengthPercentMaximum"}</code> | <span className="api-desc">Largest share of half the edge length the spline reaches each side.</span> |
| <Link id="m-edgelengthpercentminimum" /><code>{"protected float edgeLengthPercentMinimum"}</code> | <span className="api-desc">Smallest share of half the edge length the spline reaches each side.</span> |
| <Link id="m-prefab" /><code>{"protected "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | <span className="api-desc">Pipeline that picks the prefab placed on the spline.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customoffset" /><code>{"protected Vector3 CustomOffset { get; set; }"}</code> | <span className="api-desc">Extra offset added to the spline's start, for subclasses.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | <span className="api-desc">With forest node map spawn data, makes a random-length spline along the edge and instantiates the chosen prefab under it.</span> |
