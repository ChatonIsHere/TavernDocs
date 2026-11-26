---
title: "PopulationItem"
description: "Marks an entity as spawned by a PopulationSample, with the spawn point it used."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationItem

A **class** in `Root.Township`, `Alta.Populations`.

Marks an entity as spawned by a `PopulationSample`, with the spawn point it used. Server side.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IPopulationItem`](/game-api/types/alta-world-generation/ipopulationitem)
- **Derived types** [`BoundsPopulationItem`](/game-api/types/alta-world-generation/boundspopulationitem), [`RadialPopulationItem`](/game-api/types/alta-world-generation/radialpopulationitem)
- **Documented in** [Spawning and despawning](/game-api/creatures/spawning-and-despawning#populationitem), [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationItem()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The spawned entity. |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Population { get; set; }"}</code> | The population sample that spawned it. |
| <Link id="m-spawnpoint" /><code><Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" { get; set; }"}</code> | The spawn point the item was spawned at. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | Makes the entity work out its chunk from its own position. |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Asks the population to swap this item for another entity. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getpositionchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GetPositionChunk("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Finds the location chunk that best contains the entity's current position. Installed on the entity by `Initialize`. |

</details>

## Used in

Members of other types that take, return or hold a `PopulationItem`:

[`Agent.PopulationItem`](/game-api/types/alta-intelligence/agent#m-populationitem), [`IAgent.PopulationItem`](/game-api/types/alta-intelligence/iagent#m-populationitem), [`PopulationSample.AddItemTo`](/game-api/types/alta-world-generation/populationsample#m-additemto), [`PopulationSample.Replace`](/game-api/types/alta-world-generation/populationsample#m-replace), [`PopulationSample.SpawnedEntities`](/game-api/types/alta-world-generation/populationsample#m-spawnedentities).
