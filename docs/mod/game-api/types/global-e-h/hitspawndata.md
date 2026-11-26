---
title: "HitSpawnData"
description: "Spawn data that carries the impact hit which caused the spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HitSpawnData

A **class** in `Root.Township`, the global namespace.

Spawn data that carries the impact hit which caused the spawn.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`SpawnData`](/mod/game-api/types/global-s/spawndata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HitSpawnData("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome = null)"}</code> | <span className="api-desc">Creates a `HitSpawnData` from `hit` and `biome`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code><Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" Hit { get; }"}</code> | <span className="api-desc">The hit that caused the spawn.</span> |
