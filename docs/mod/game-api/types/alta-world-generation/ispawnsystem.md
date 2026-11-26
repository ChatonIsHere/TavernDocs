---
title: "ISpawnSystem"
description: "Something populations spawn through, implemented by PopulationSpawnArea."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISpawnSystem

An **interface** in `Root.Township`, `Alta.Populations`.

Something populations spawn through, implemented by `PopulationSpawnArea`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`Ecosystem`](/mod/game-api/types/alta-world-generation/ecosystem), [`PopulationSpawnArea`](/mod/game-api/types/alta-world-generation/populationspawnarea)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The spawner's network entity. |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" this[uint populationHash] { get; }"}</code> | Spawn information for a population, by population hash. |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> | The spawner's transform. |

## Used in

Members of other types that take, return or hold a `ISpawnSystem`:

[`PopulationFolderBase.Initialize`](/mod/game-api/types/alta-world-generation/populationfolderbase#m-initialize), [`PopulationSample.Initialize`](/mod/game-api/types/alta-world-generation/populationsample#m-initialize), [`PopulationSample.PopulationSample`](/mod/game-api/types/alta-world-generation/populationsample#m-ctor-2), [`PopulationSample.spawner`](/mod/game-api/types/alta-world-generation/populationsample#m-spawner).
