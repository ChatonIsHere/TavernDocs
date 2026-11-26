---
title: "SpawnAreaSaveData"
description: "Save data for a SpawnArea (version 1): its size and placement settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnAreaSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `SpawnArea` (version 1): its size and placement settings.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<SpawnArea, SpawnAreaSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SpawnArea`](/mod/game-api/types/global-s/spawnarea), [`SpawnAreaSaveData`](/mod/game-api/types/global-s/spawnareasavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnAreaSaveData()"}</code> | Creates a `SpawnAreaSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-avoidlayers" /><code>{"int avoidLayers"}</code> | Layer mask of things to avoid spawning on. |
| <Link id="m-groundlayers" /><code>{"int groundLayers"}</code> | Layer mask of ground to spawn on. |
| <Link id="m-isaligningnormal" /><code>{"bool isAligningNormal"}</code> | Whether spawned items align to the ground normal. |
| <Link id="m-maxacceptableangledot" /><code>{"float maxAcceptableAngleDot"}</code> | Steepest ground allowed, as a dot product. |
| <Link id="m-size" /><code>{"float size"}</code> | Size of the spawn area. |
