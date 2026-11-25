---
title: "ISpawnSystem"
description: "interface ISpawnSystem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISpawnSystem

An **interface** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`Ecosystem`](/game-api/types/alta-world-generation/ecosystem), [`PopulationSpawnArea`](/game-api/types/alta-world-generation/populationspawnarea)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" this[uint populationHash] { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `ISpawnSystem`:

[`PopulationFolderBase.Initialize`](/game-api/types/alta-world-generation/populationfolderbase#m-initialize), [`PopulationSample.Initialize`](/game-api/types/alta-world-generation/populationsample#m-initialize), [`PopulationSample.PopulationSample`](/game-api/types/alta-world-generation/populationsample#m-ctor-2), [`PopulationSample.spawner`](/game-api/types/alta-world-generation/populationsample#m-spawner).
