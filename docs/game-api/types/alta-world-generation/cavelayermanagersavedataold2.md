---
title: "CaveLayerManagerSaveDataOld2"
description: "Old save data for the CaveLayerManager (version 2): seed and layer count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerManagerSaveDataOld2

A **internal class** in `Root.Township`, `Alta.Caves`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save data for the `CaveLayerManager` (version 2): seed and layer count.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManagerSaveDataOld2()"}</code> | Creates a `CaveLayerManagerSaveDataOld2` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentlayercount" /><code>{"int currentLayerCount"}</code> | Number of cave layers generated. |
| <Link id="m-seed" /><code>{"int seed"}</code> | Cave generation seed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to current data, keeping the seed and layer count. |
