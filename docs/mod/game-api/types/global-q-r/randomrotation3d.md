---
title: "RandomRotation3d"
description: "Generation part that gives its object a fully random rotation when the static generation runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomRotation3d

A **class** in `Root.Township`, the global namespace.

Generation part that gives its object a fully random rotation when the static generation runs.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomRotation3d()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Sets the transform to a uniformly random rotation. |
