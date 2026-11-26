---
title: "IFillSet"
description: "A set of spawn modifiers plus a fail score range, used to decide where forest content spawns or terrain is painted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFillSet

An **interface** in `Root.Township`, `Alta.Forests`.

A set of spawn modifiers plus a fail score range, used to decide where forest content spawns or terrain is painted. `FillSet` implements it.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`FillSet`](/game-api/types/alta-world-generation/fillset), [`PopulationSetup`](/game-api/types/alta-world-generation/populationsetup)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumfailscore" /><code>{"float MaximumFailScore { get; }"}</code> | Highest random fail score a point can roll. |
| <Link id="m-minimumfailscore" /><code>{"float MinimumFailScore { get; }"}</code> | Lowest random fail score a point can roll. |
| <Link id="m-spawnmodifiers" /><code><Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | The modifier chain each candidate point is run through. |
