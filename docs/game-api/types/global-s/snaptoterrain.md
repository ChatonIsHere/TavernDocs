---
title: "SnapToTerrain"
description: "Generatable part that moves its object down or up onto the terrain height during generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SnapToTerrain

A **class** in `Root.Township`, no namespace.

Generatable part that moves its object down or up onto the terrain height during generation.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SnapToTerrain()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Sets the object's Y to the terrain height at its X and Z. |
