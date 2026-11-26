---
title: "AlignWithTerrainSlope"
description: "Generation part that points the object's forward axis along the terrain normal at its position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AlignWithTerrainSlope

A **class** in `Root.Township`, no namespace.

Generation part that points the object's forward axis along the terrain normal at its position.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AlignWithTerrainSlope()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Sets the rotation to look along the terrain normal under the object. |
