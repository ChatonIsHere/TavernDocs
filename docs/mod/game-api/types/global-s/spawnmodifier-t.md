---
title: "SpawnModifier<T>"
description: "Base asset for filters in the forest fill spawner that adjust a candidate point and its weight before spawning."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnModifier&lt;T&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base asset for filters in the forest fill spawner that adjust a candidate point and its weight before spawning. Subclasses fix `T`, for example `SpawnModifierPoint`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`NetworkEntityModifiers`](/mod/game-api/types/global-m-o/networkentitymodifiers), [`SpawnModifierPoint`](/mod/game-api/types/global-s/spawnmodifierpoint), [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal), [`SpawnModifierSpawnParameters`](/mod/game-api/types/global-s/spawnmodifierspawnparameters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpawnModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-safename" /><code>{"protected string safeName"}</code> | <span className="api-desc">The asset's name, cached in `Initialize`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"abstract void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref T point, ref float weight)"}</code> | <span className="api-desc">Changes the point and its spawn weight for the given fill setup.</span> |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | <span className="api-desc">Caches the asset name in `safeName`.</span> |
