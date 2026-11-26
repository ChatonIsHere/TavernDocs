---
title: "BasicPopulationManager"
description: "Server population manager that spawns one item into a population folder at a point from the folder's point evaluator, using the forest's spawn modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulationManager

A **class** in `Root.Township`, `Alta.Populations`.

Server population manager that spawns one item into a population folder at a point from the folder's point evaluator, using the forest's spawn modifiers.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`IPopulationManager`](/mod/game-api/types/alta-world-generation/ipopulationmanager)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulationManager("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Creates a `BasicPopulationManager` from `spawnData`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-spawndata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> | Spawn data passed in at construction. Not used by `Spawn`, which builds its own from the point's biome. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-random" /><code>{"private static Random Random { get; }"}</code> | Shared random number generator for the forest spawn setup. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-world-generation/ipopulationfolder">{"IPopulationFolder"}</Link>{" folder)"}</code> | Picks a point, runs the folder definition's spawn modifiers in the matching forest, and spawns the prefab under the folder. Returns null if any step fails. |
