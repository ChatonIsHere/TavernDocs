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
| <Link id="m-ctor" /><code>{"RandomSpawnRectangleSaveData()"}</code> | <span className="api-desc">Creates a `RandomSpawnRectangleSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | <span className="api-desc">Saved distribution to spawn from.</span> |
| <Link id="m-maximum" /><code>{"int maximum"}</code> | <span className="api-desc">Saved upper bound on the item count.</span> |
| <Link id="m-minimum" /><code>{"int minimum"}</code> | <span className="api-desc">Saved lower bound on the item count.</span> |
| <Link id="m-minimumup" /><code>{"float minimumUp"}</code> | <span className="api-desc">Saved tilt limit.</span> |
| <Link id="m-size" /><code>{"Vector3 size"}</code> | <span className="api-desc">Saved spawn box size.</span> |
