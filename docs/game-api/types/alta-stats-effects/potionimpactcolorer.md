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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PotionImpactColorer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particlesystemwithliquidcolor" /><code>{"private "}<Link to="/game-api/types/global-c-d/coloredparticlesystem">{"ColoredParticleSystem"}</Link>{" particleSystemWithLiquidColor"}</code> | Particles coloured with the liquid colour. |
| <Link id="m-particlesystemwithrimcolor" /><code>{"private "}<Link to="/game-api/types/global-c-d/coloredparticlesystem">{"ColoredParticleSystem"}</Link>{" particleSystemWithRimColor"}</code> | Particles coloured with the rim colour. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settoliquid" /><code>{"void SetToLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Sets one particle system to the liquid's tinted colour and the other to its rim colour. |
