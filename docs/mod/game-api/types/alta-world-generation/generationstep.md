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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ApplyGenerationRule`](/mod/game-api/types/alta-world-generation/applygenerationrule), [`BuildingRooms`](/mod/game-api/types/alta-world-generation/buildingrooms), [`Decay`](/mod/game-api/types/alta-world-generation/decay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GenerationStep()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"abstract void Run("}<Link to="/mod/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> | <span className="api-desc">Does this step's work on the given `GenerationBase`'s grid.</span> |
