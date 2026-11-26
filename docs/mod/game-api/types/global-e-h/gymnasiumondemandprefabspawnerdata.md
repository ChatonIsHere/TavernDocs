---
title: "GymnasiumOnDemandPrefabSpawnerData"
description: "Save data for the feature test gymnasium's on-demand prefab spawner."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumOnDemandPrefabSpawnerData

A **class** in `Root.Township`, the global namespace.

Save data for the feature test gymnasium's on-demand prefab spawner.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<GymnasiumOnDemandPrefabSpawner, GymnasiumOnDemandPrefabSpawnerData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GymnasiumOnDemandPrefabSpawner`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner), [`GymnasiumOnDemandPrefabSpawnerData`](/mod/game-api/types/global-e-h/gymnasiumondemandprefabspawnerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumOnDemandPrefabSpawnerData()"}</code> | Creates a `GymnasiumOnDemandPrefabSpawnerData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boardposition" /><code>{"Vector3 boardPosition"}</code> | Saved local position of the spawner's board. |
| <Link id="m-prefabs" /><code>{"uint[] prefabs"}</code> | Saved list of prefab hashes the spawner makes. |

## Used in

Members of other types that take, return or hold a `GymnasiumOnDemandPrefabSpawnerData`:

[`GymnasiumOnDemandPrefabSpawner.Load`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-load), [`GymnasiumOnDemandPrefabSpawner.Save`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-save).
