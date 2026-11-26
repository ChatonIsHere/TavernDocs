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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`BasicPopulationManager`](/mod/game-api/types/alta-world-generation/basicpopulationmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-world-generation/ipopulationfolder">{"IPopulationFolder"}</Link>{" folder)"}</code> | <span className="api-desc">Spawns one population item for the given folder and returns it.</span> |

## Used in

Members of other types that take, return or hold a `IPopulationManager`:

<div className="api-used-in">

[`BasicPopulationFolder.Manager`](/mod/game-api/types/alta-world-generation/basicpopulationfolder#m-manager), [`IPopulationFolder.Manager`](/mod/game-api/types/alta-world-generation/ipopulationfolder#m-manager), [`PopulationPath.Manager`](/mod/game-api/types/global-p/populationpath#m-manager).

</div>
