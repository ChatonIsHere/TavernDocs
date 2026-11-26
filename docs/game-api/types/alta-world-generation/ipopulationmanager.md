---
title: "IPopulationManager"
description: "Spawns population items for a population folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopulationManager

An **interface** in `Root.Township`, `Alta.Populations`.

Spawns population items for a population folder. `BasicPopulationManager` implements it; a folder exposes it as `Manager`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`BasicPopulationManager`](/game-api/types/alta-world-generation/basicpopulationmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code><Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" Spawn("}<Link to="/game-api/types/alta-world-generation/ipopulationfolder">{"IPopulationFolder"}</Link>{" folder)"}</code> | Spawns one population item for the given folder and returns it. |

## Used in

Members of other types that take, return or hold a `IPopulationManager`:

[`BasicPopulationFolder.Manager`](/game-api/types/alta-world-generation/basicpopulationfolder#m-manager), [`IPopulationFolder.Manager`](/game-api/types/alta-world-generation/ipopulationfolder#m-manager), [`PopulationPath.Manager`](/game-api/types/global-p/populationpath#m-manager).
