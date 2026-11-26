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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<CaveLayerManager, CaveLayerManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CaveLayerManager`](/mod/game-api/types/alta-world-generation/cavelayermanager), [`CaveLayerManagerSaveData`](/mod/game-api/types/alta-world-generation/cavelayermanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManagerSaveData()"}</code> | <span className="api-desc">Creates a `CaveLayerManagerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentlayercount" /><code>{"int currentLayerCount"}</code> | <span className="api-desc">Number of cave layers generated so far.</span> |
| <Link id="m-depths" /><code>{"float[] depths"}</code> | <span className="api-desc">Depth of each layer.</span> |
| <Link id="m-entrancedirections" /><code>{"Vector2[] entranceDirections"}</code> | <span className="api-desc">Direction of each layer's entrance on the XZ plane.</span> |
| <Link id="m-entrances" /><code>{"Vector2[] entrances"}</code> | <span className="api-desc">Entrance position of each layer on the XZ plane.</span> |
| <Link id="m-layerprefabs" /><code>{"uint[] layerPrefabs"}</code> | <span className="api-desc">Prefab hash of each layer.</span> |
| <Link id="m-seed" /><code>{"int seed"}</code> | <span className="api-desc">Cave generation seed; -1 or less means not set.</span> |
