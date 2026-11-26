---
title: "ColoredPooledParticleSpawner"
description: "Spawns a pooled particle effect and colours it to a liquid, for example a potion splash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredPooledParticleSpawner

A **class** in `Root.Township`, the global namespace.

Spawns a pooled particle effect and colours it to a liquid, for example a potion splash.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredPooledParticleSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colortoset" /><code>{"private Color colorToSet"}</code> | <span className="api-desc">Inspector colour. Not read by the code in this build.</span> |
| <Link id="m-pooledobjectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition"}</code> | <span className="api-desc">The pooled effect to spawn. It needs a `PotionImpactColorer`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isallowedtospawn" /><code>{"bool IsAllowedToSpawn { get; set; }"}</code> | <span className="api-desc">When false, `SpawnAndColorParticles` does nothing.</span> |
| <Link id="m-liquiddata" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The liquid whose colour the spawned particles take.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-spawnedparticles" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> SpawnedParticles"}</code> | <span className="api-desc">Raised with the pooled object after particles are spawned and coloured.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnandcolorparticles" /><code>{"void SpawnAndColorParticles("}<Link to="/mod/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" spawnAt)"}</code> | <span className="api-desc">Spawns the pooled effect at the given transform, colours it to `LiquidData` and raises `SpawnedParticles`.</span> |
| <Link id="m-spawnandcolorparticles-2" /><code>{"void SpawnAndColorParticles(Transform spawnAt)"}</code> | <span className="api-desc">Spawns the pooled effect at the given transform, colours it to `LiquidData` and raises `SpawnedParticles`.</span> |

## Used in

Members of other types that take, return or hold a `ColoredPooledParticleSpawner`:

<div className="api-used-in">

[`PotionVisuals.breakParticleSpawner`](/mod/game-api/types/global-p/potionvisuals#m-breakparticlespawner).

</div>
