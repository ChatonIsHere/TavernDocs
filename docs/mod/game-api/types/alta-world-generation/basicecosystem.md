---
title: "BasicEcosystem"
description: "Server: per chunk lookup of the BasicPopulations registered in a location chunk, keyed by their PopulationSetup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicEcosystem

A **class** in `Root.Township`, `Alta.Populations`.

Server: per chunk lookup of the `BasicPopulation`s registered in a location chunk, keyed by their `PopulationSetup`. Reached through the chunk's `Environment.Ecosystem`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicEcosystem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Private: logs double registrations. |
| <Link id="m-populations" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{", "}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{"> populations"}</code> | Private: registered populations by `PopulationSetup`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population)"}</code> | Registers a population under its definition. A second one with the same definition is refused with an error. |
| <Link id="m-get" /><code><Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Get("}<Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" setup)"}</code> | Returns the population for a setup in this chunk, or null. |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population)"}</code> | Removes the population registered under its definition. |

## Used in

Members of other types that take, return or hold a `BasicEcosystem`:

[`ChunkEnvironment.Ecosystem`](/mod/game-api/types/alta-world/chunkenvironment#m-ecosystem), [`ChunkEnvironment.Initialize`](/mod/game-api/types/alta-world/chunkenvironment#m-initialize), [`LocationChunk.ecosystem`](/mod/game-api/types/alta-world/locationchunk#m-ecosystem).
