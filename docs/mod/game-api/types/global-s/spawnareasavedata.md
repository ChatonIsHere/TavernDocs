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
| <Link id="m-ctor" /><code>{"SpawnAreaSaveData()"}</code> | <span className="api-desc">Creates a `SpawnAreaSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-avoidlayers" /><code>{"int avoidLayers"}</code> | <span className="api-desc">Layer mask of things to avoid spawning on.</span> |
| <Link id="m-groundlayers" /><code>{"int groundLayers"}</code> | <span className="api-desc">Layer mask of ground to spawn on.</span> |
| <Link id="m-isaligningnormal" /><code>{"bool isAligningNormal"}</code> | <span className="api-desc">Whether spawned items align to the ground normal.</span> |
| <Link id="m-maxacceptableangledot" /><code>{"float maxAcceptableAngleDot"}</code> | <span className="api-desc">Steepest ground allowed, as a dot product.</span> |
| <Link id="m-size" /><code>{"float size"}</code> | <span className="api-desc">Size of the spawn area.</span> |
