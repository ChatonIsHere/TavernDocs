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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManagerSaveData3()"}</code> | Creates a `CaveLayerManagerSaveData3` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentlayercount" /><code>{"int currentLayerCount"}</code> | Number of cave layers generated. |
| <Link id="m-entrances" /><code>{"Vector2[] entrances"}</code> | Entrance position of each layer. |
| <Link id="m-seed" /><code>{"int seed"}</code> | Cave generation seed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Builds version 4 data with fixed layer depths and seeded entrance directions, then clears the seed. It writes into `layerPrefabs` without creating it, so it probably throws. |
