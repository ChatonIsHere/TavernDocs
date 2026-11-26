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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IPopulationItem`](/mod/game-api/types/alta-world-generation/ipopulationitem)
- **Derived types** [`BoundsPopulationItem`](/mod/game-api/types/alta-world-generation/boundspopulationitem), [`RadialPopulationItem`](/mod/game-api/types/alta-world-generation/radialpopulationitem)
- **Documented in** [Spawning and despawning](/mod/game-api/creatures/spawning-and-despawning#populationitem), [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The spawned entity.</span> |
| <Link id="m-population" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Population { get; set; }"}</code> | <span className="api-desc">The population sample that spawned it.</span> |
| <Link id="m-spawnpoint" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The spawn point the item was spawned at.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | <span className="api-desc">Makes the entity work out its chunk from its own position.</span> |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Asks the population to swap this item for another entity.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getpositionchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GetPositionChunk("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Finds the location chunk that best contains the entity's current position. Installed on the entity by `Initialize`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PopulationItem`:

<div className="api-used-in">

[`Agent.PopulationItem`](/mod/game-api/types/alta-intelligence/agent#m-populationitem), [`IAgent.PopulationItem`](/mod/game-api/types/alta-intelligence/iagent#m-populationitem), [`PopulationSample.AddItemTo`](/mod/game-api/types/alta-world-generation/populationsample#m-additemto), [`PopulationSample.Replace`](/mod/game-api/types/alta-world-generation/populationsample#m-replace), [`PopulationSample.SpawnedEntities`](/mod/game-api/types/alta-world-generation/populationsample#m-spawnedentities).

</div>
