---
title: "SpawnBuriedSaveData"
description: "Save data for a SpawnBuried dig spot (version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnBuriedSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `SpawnBuried` dig spot (version 1).

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<SpawnBuried, SpawnBuriedSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SpawnBuried`](/mod/game-api/types/global-s/spawnburied), [`SpawnBuriedSaveData`](/mod/game-api/types/global-s/spawnburiedsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnBuriedSaveData()"}</code> | <span className="api-desc">Creates a `SpawnBuriedSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | <span className="api-desc">The spot's spawn distribution.</span> |
| <Link id="m-spawnedindex" /><code>{"int spawnedIndex"}</code> | <span className="api-desc">Child index of the buried item in the save, or -1 if there is none.</span> |
| <Link id="m-spawnprefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawnPrefab"}</code> | <span className="api-desc">The spot's fixed spawn prefab.</span> |
