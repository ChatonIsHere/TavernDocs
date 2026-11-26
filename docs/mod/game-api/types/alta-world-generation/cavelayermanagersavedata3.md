---
title: "CaveLayerManagerSaveData3"
description: "Old save data for the CaveLayerManager (version 3) with only seed, layer count and entrances."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerManagerSaveData3

A **internal class** in `Root.Township`, `Alta.Caves`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save data for the `CaveLayerManager` (version 3) with only seed, layer count and entrances.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManagerSaveData3()"}</code> | <span className="api-desc">Creates a `CaveLayerManagerSaveData3` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentlayercount" /><code>{"int currentLayerCount"}</code> | <span className="api-desc">Number of cave layers generated.</span> |
| <Link id="m-entrances" /><code>{"Vector2[] entrances"}</code> | <span className="api-desc">Entrance position of each layer.</span> |
| <Link id="m-seed" /><code>{"int seed"}</code> | <span className="api-desc">Cave generation seed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Builds version 4 data with fixed layer depths and seeded entrance directions, then clears the seed. It writes into `layerPrefabs` without creating it, so it probably throws.</span> |
