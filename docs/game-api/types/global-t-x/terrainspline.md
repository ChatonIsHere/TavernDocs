---
title: "TerrainSpline"
description: "Generation part for forest node map edges: builds a Bezier spline along part of the edge, laid on the terrain, and instantiates a prefab on it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainSpline

A **class** in `Root.Township`, no namespace.

Generation part for forest node map edges: builds a Bezier spline along part of the edge, laid on the terrain, and instantiates a prefab on it.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart)
- **Derived types** [`SafetySpline`](/game-api/types/global-s/safetyspline)
- **Attributes** `AddComponentMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TerrainSpline()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-edgelengthpercentmaximum" /><code>{"protected float edgeLengthPercentMaximum"}</code> | Largest share of half the edge length the spline reaches each side. |
| <Link id="m-edgelengthpercentminimum" /><code>{"protected float edgeLengthPercentMinimum"}</code> | Smallest share of half the edge length the spline reaches each side. |
| <Link id="m-prefab" /><code>{"protected "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | Pipeline that picks the prefab placed on the spline. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customoffset" /><code>{"protected Vector3 CustomOffset { get; set; }"}</code> | Extra offset added to the spline's start, for subclasses. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | With forest node map spawn data, makes a random-length spline along the edge and instantiates the chosen prefab under it. |
