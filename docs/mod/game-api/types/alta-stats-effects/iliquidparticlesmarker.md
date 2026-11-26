---
title: "ILiquidParticlesMarker"
description: "Marks particles that came from a liquid container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILiquidParticlesMarker

An **internal interface** in `Root.Township`, `Alta.Liquid`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Marks particles that came from a liquid container.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Derived types** [`LiquidParticleMarker`](/mod/game-api/types/alta-stats-effects/liquidparticlemarker), [`LiquidPouringParticlesMarker`](/mod/game-api/types/alta-stats-effects/liquidpouringparticlesmarker)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; }"}</code> | The container the particles came from. |
