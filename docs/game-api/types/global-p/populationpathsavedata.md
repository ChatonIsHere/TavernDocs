---
title: "PopulationPathSaveData"
description: "Save data for a PopulationPath: its population setup, timer and creature count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationPathSaveData

A **class** in `Root.Township`, no namespace.

Save data for a `PopulationPath`: its population setup, timer and creature count.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PopulationPath, PopulationPathSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PopulationPath`](/game-api/types/global-p/populationpath), [`PopulationPathSaveData`](/game-api/types/global-p/populationpathsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationPathSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float accumulatedTime"}</code> | The path's accumulated spawn time. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> | The `PopulationSetup` the path uses. |
| <Link id="m-population" /><code>{"int population"}</code> | Total population when saved. |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | Saved population timer value. |
