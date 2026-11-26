---
title: "CaveLayerManagerSaveData"
description: "Current save data for the CaveLayerManager (version 4): seed and per-layer prefab, entrance and depth."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerManagerSaveData

A **internal class** in `Root.Township`, `Alta.Caves`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Current save data for the `CaveLayerManager` (version 4): seed and per-layer prefab, entrance and depth.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<CaveLayerManager, CaveLayerManagerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CaveLayerManager`](/game-api/types/alta-world-generation/cavelayermanager), [`CaveLayerManagerSaveData`](/game-api/types/alta-world-generation/cavelayermanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManagerSaveData()"}</code> | Creates a `CaveLayerManagerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentlayercount" /><code>{"int currentLayerCount"}</code> | Number of cave layers generated so far. |
| <Link id="m-depths" /><code>{"float[] depths"}</code> | Depth of each layer. |
| <Link id="m-entrancedirections" /><code>{"Vector2[] entranceDirections"}</code> | Direction of each layer's entrance on the XZ plane. |
| <Link id="m-entrances" /><code>{"Vector2[] entrances"}</code> | Entrance position of each layer on the XZ plane. |
| <Link id="m-layerprefabs" /><code>{"uint[] layerPrefabs"}</code> | Prefab hash of each layer. |
| <Link id="m-seed" /><code>{"int seed"}</code> | Cave generation seed; -1 or less means not set. |
