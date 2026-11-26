---
title: "PopulationPathSaveData"
description: "Save data for a PopulationPath: its population setup, timer and creature count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationPathSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `PopulationPath`: its population setup, timer and creature count.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PopulationPath, PopulationPathSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PopulationPath`](/mod/game-api/types/global-p/populationpath), [`PopulationPathSaveData`](/mod/game-api/types/global-p/populationpathsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationPathSaveData()"}</code> | <span className="api-desc">Creates a `PopulationPathSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float accumulatedTime"}</code> | <span className="api-desc">The path's accumulated spawn time.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> | <span className="api-desc">The `PopulationSetup` the path uses.</span> |
| <Link id="m-population" /><code>{"int population"}</code> | <span className="api-desc">Total population when saved.</span> |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | <span className="api-desc">Saved population timer value.</span> |
