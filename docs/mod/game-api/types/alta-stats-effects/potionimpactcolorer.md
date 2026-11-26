---
title: "PotionImpactColorer"
description: "Colours a potion's impact particles to match its liquid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PotionImpactColorer

A **class** in `Root.Township`, `Alta.Liquid`.

Colours a potion's impact particles to match its liquid.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PotionImpactColorer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particlesystemwithliquidcolor" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/coloredparticlesystem">{"ColoredParticleSystem"}</Link>{" particleSystemWithLiquidColor"}</code> | <span className="api-desc">Particles coloured with the liquid colour.</span> |
| <Link id="m-particlesystemwithrimcolor" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/coloredparticlesystem">{"ColoredParticleSystem"}</Link>{" particleSystemWithRimColor"}</code> | <span className="api-desc">Particles coloured with the rim colour.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settoliquid" /><code>{"void SetToLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Sets one particle system to the liquid's tinted colour and the other to its rim colour.</span> |
