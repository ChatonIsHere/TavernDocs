---
title: "CaveLayerManagerSaveDataOld"
description: "Oldest save data for the CaveLayerManager (version 1), holding only the seed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerManagerSaveDataOld

A **internal class** in `Root.Township`, `Alta.Caves`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Oldest save data for the `CaveLayerManager` (version 1), holding only the seed.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManagerSaveDataOld()"}</code> | Creates a `CaveLayerManagerSaveDataOld` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-seed" /><code>{"int seed"}</code> | Cave generation seed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to current data with the seed and zero layers. |
