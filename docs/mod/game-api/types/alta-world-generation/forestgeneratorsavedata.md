---
title: "ForestGeneratorSaveData"
description: "Save data for a ForestGenerator (save structure version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestGeneratorSaveData

A **class** in `Root.Township`, `Alta.Forests`.

Save data for a `ForestGenerator` (save structure version 1). Holds only the forest's seed.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<ForestGenerator, ForestGeneratorSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ForestGenerator`](/mod/game-api/types/alta-world-generation/forestgenerator), [`ForestGeneratorSaveData`](/mod/game-api/types/alta-world-generation/forestgeneratorsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestGeneratorSaveData()"}</code> | Creates a `ForestGeneratorSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-seed" /><code>{"int seed"}</code> | The saved forest seed, so the same forest is generated again on load. |
