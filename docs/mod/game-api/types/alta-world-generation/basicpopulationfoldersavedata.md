---
title: "BasicPopulationFolderSaveData"
description: "Save data (version 1) for a BasicPopulationFolder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulationFolderSaveData

A **class** in `Root.Township`, `Alta.Populations`.

Save data (version 1) for a `BasicPopulationFolder`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<BasicPopulationFolder, BasicPopulationFolderSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`BasicPopulationFolder`](/mod/game-api/types/alta-world-generation/basicpopulationfolder), [`BasicPopulationFolderSaveData`](/mod/game-api/types/alta-world-generation/basicpopulationfoldersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulationFolderSaveData()"}</code> | <span className="api-desc">Creates a `BasicPopulationFolderSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float accumulatedTime"}</code> | <span className="api-desc">The folder's `AccumulatedTime`.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> | <span className="api-desc">The population setup asset.</span> |
| <Link id="m-population" /><code>{"int population"}</code> | <span className="api-desc">Total population when saved.</span> |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | <span className="api-desc">The population timer's saved value.</span> |
