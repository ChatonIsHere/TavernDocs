---
title: "LiquidParticleMarker"
description: "Marks pooled liquid particles with the container they came from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidParticleMarker

A **class** in `Root.Township`, `Alta.Liquid`.

Marks pooled liquid particles with the container they came from. Cleared when the particles go back to the pool.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`ILiquidParticlesMarker`](/mod/game-api/types/alta-stats-effects/iliquidparticlesmarker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidParticleMarker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; set; }"}</code> | The container the particles came from. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pooled object's release to clear the container. |
| <Link id="m-resetcontainer" /><code>{"private void ResetContainer("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Clears `Container` when released to the pool. |

</details>
