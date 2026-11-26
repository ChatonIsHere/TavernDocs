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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManagerSaveDataOld()"}</code> | <span className="api-desc">Creates a `CaveLayerManagerSaveDataOld` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-seed" /><code>{"int seed"}</code> | <span className="api-desc">Cave generation seed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to current data with the seed and zero layers.</span> |
