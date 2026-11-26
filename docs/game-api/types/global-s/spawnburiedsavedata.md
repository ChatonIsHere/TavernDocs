---
title: "SpawnBuriedSaveData"
description: "Save data for a SpawnBuried dig spot (version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnBuriedSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `SpawnBuried` dig spot (version 1).

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<SpawnBuried, SpawnBuriedSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SpawnBuried`](/game-api/types/global-s/spawnburied), [`SpawnBuriedSaveData`](/game-api/types/global-s/spawnburiedsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnBuriedSaveData()"}</code> | Creates a `SpawnBuriedSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code><Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | The spot's spawn distribution. |
| <Link id="m-spawnedindex" /><code>{"int spawnedIndex"}</code> | Child index of the buried item in the save, or -1 if there is none. |
| <Link id="m-spawnprefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawnPrefab"}</code> | The spot's fixed spawn prefab. |
