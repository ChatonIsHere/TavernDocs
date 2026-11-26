---
title: "RandomSpawnRectangleSaveData"
description: "Save data for RandomSpawnRectangle: the distribution, box size, count range and tilt limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomSpawnRectangleSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for `RandomSpawnRectangle`: the distribution, box size, count range and tilt limit.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NewSaveData<RandomSpawnRectangle, RandomSpawnRectangleSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RandomSpawnRectangle`](/mod/game-api/types/global-q-r/randomspawnrectangle), [`RandomSpawnRectangleSaveData`](/mod/game-api/types/global-q-r/randomspawnrectanglesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomSpawnRectangleSaveData()"}</code> | Creates a `RandomSpawnRectangleSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | Saved distribution to spawn from. |
| <Link id="m-maximum" /><code>{"int maximum"}</code> | Saved upper bound on the item count. |
| <Link id="m-minimum" /><code>{"int minimum"}</code> | Saved lower bound on the item count. |
| <Link id="m-minimumup" /><code>{"float minimumUp"}</code> | Saved tilt limit. |
| <Link id="m-size" /><code>{"Vector3 size"}</code> | Saved spawn box size. |
