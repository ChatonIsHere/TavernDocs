---
title: "ColoredPooledParticleSpawner"
description: "Spawns a pooled particle effect and colours it to a liquid, for example a potion splash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredPooledParticleSpawner

A **class** in `Root.Township`, no namespace.

Spawns a pooled particle effect and colours it to a liquid, for example a potion splash.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredPooledParticleSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colortoset" /><code>{"private Color colorToSet"}</code> | Inspector colour. Not read by the code in this build. |
| <Link id="m-pooledobjectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition"}</code> | The pooled effect to spawn. It needs a `PotionImpactColorer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isallowedtospawn" /><code>{"bool IsAllowedToSpawn { get; set; }"}</code> | When false, `SpawnAndColorParticles` does nothing. |
| <Link id="m-liquiddata" /><code><Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" { get; set; }"}</code> | The liquid whose colour the spawned particles take. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-spawnedparticles" /><code>{"event Action<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> SpawnedParticles"}</code> | Raised with the pooled object after particles are spawned and coloured. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnandcolorparticles" /><code>{"void SpawnAndColorParticles("}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" spawnAt)"}</code> | Spawns the pooled effect at the given transform, colours it to `LiquidData` and raises `SpawnedParticles`. |
| <Link id="m-spawnandcolorparticles-2" /><code>{"void SpawnAndColorParticles(Transform spawnAt)"}</code> | Spawns the pooled effect at the given transform, colours it to `LiquidData` and raises `SpawnedParticles`. |

## Used in

Members of other types that take, return or hold a `ColoredPooledParticleSpawner`:

[`PotionVisuals.breakParticleSpawner`](/game-api/types/global-p/potionvisuals#m-breakparticlespawner).
