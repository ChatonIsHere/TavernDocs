---
title: "PopulationSaveDataChild"
description: "Save record linking one saved child of a population folder to the spawn point it came from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSaveDataChild

A **class** in `Root.Township`, `Alta.Populations`.

Save record linking one saved child of a population folder to the spawn point it came from.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSaveDataChild()"}</code> | Creates a `PopulationSaveDataChild` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int index"}</code> | The child's index in the folder's saved children. |
| <Link id="m-pointindex" /><code>{"int pointIndex"}</code> | Index of the spawn point the child was spawned at, or -1 if it had none. |

## Used in

Members of other types that take, return or hold a `PopulationSaveDataChild`:

[`IPopulationFolderSaveDataBase.Children`](/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase#m-children), [`PopulationFolderSaveData.children`](/mod/game-api/types/alta-world-generation/populationfoldersavedata#m-children), [`PopulationFolderSaveData.Children`](/mod/game-api/types/alta-world-generation/populationfoldersavedata#m-children-2), [`PopulationFolderSaveData1.children`](/mod/game-api/types/alta-world-generation/populationfoldersavedata1#m-children), [`PopulationSpawnAreaSaveData.children`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata#m-children), [`PopulationSpawnAreaSaveData.Children`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata#m-children-2), [`PopulationSpawnAreaSaveData1.children`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata1#m-children).
