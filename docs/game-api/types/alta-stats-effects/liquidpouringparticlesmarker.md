---
title: "LiquidPouringParticlesMarker"
description: "Marks a pour's particle system, so a container hit by the particles can find the pourable container they came from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidPouringParticlesMarker

A **class** in `Root.Township`, `Alta.Liquid`.

Marks a pour's particle system, so a container hit by the particles can find the pourable container they came from.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`ILiquidParticlesMarker`](/game-api/types/alta-stats-effects/iliquidparticlesmarker)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidPouringParticlesMarker()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pouringparticles" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/pouringparticles">{"PouringParticles"}</Link>{" pouringParticles"}</code> | The parent `PouringParticles`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; }"}</code> | The pouring container's internal liquid container. |
| <Link id="m-pourable" /><code><Link to="/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" Pourable { get; }"}</code> | The pourable container doing the pouring. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registerpouringparticlehit" /><code>{"void RegisterPouringParticleHit("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> | Tells the pourable container its particles hit the given container. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `PouringParticles` in the parents. |

</details>
