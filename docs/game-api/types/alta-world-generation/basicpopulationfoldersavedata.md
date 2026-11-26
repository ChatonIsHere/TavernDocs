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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<BasicPopulationFolder, BasicPopulationFolderSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`BasicPopulationFolder`](/game-api/types/alta-world-generation/basicpopulationfolder), [`BasicPopulationFolderSaveData`](/game-api/types/alta-world-generation/basicpopulationfoldersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulationFolderSaveData()"}</code> | Creates a `BasicPopulationFolderSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float accumulatedTime"}</code> | The folder's `AccumulatedTime`. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> | The population setup asset. |
| <Link id="m-population" /><code>{"int population"}</code> | Total population when saved. |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | The population timer's saved value. |
