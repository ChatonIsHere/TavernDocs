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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`ILiquidParticlesMarker`](/mod/game-api/types/alta-stats-effects/iliquidparticlesmarker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidPouringParticlesMarker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pouringparticles" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/pouringparticles">{"PouringParticles"}</Link>{" pouringParticles"}</code> | <span className="api-desc">The parent `PouringParticles`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; }"}</code> | <span className="api-desc">The pouring container's internal liquid container.</span> |
| <Link id="m-pourable" /><code><Link to="/mod/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" Pourable { get; }"}</code> | <span className="api-desc">The pourable container doing the pouring.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registerpouringparticlehit" /><code>{"void RegisterPouringParticleHit("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> | <span className="api-desc">Tells the pourable container its particles hit the given container.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `PouringParticles` in the parents.</span> |

</details>
