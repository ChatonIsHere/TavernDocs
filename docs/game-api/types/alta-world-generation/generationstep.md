---
title: "GenerationStep"
description: "Base component for one step of PAGaC generation, such as BuildingRooms, Decay or ApplyGenerationRule."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationStep

An **abstract class** in `Root.Township`, `Alta.PAGaC`.

Base component for one step of PAGaC generation, such as `BuildingRooms`, `Decay` or `ApplyGenerationRule`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ApplyGenerationRule`](/game-api/types/alta-world-generation/applygenerationrule), [`BuildingRooms`](/game-api/types/alta-world-generation/buildingrooms), [`Decay`](/game-api/types/alta-world-generation/decay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GenerationStep()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"abstract void Run("}<Link to="/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> | Does this step's work on the given `GenerationBase`'s grid. |
