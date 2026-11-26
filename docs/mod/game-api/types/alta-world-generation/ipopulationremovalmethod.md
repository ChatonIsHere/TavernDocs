---
title: "IPopulationRemovalMethod"
description: "A component that can tell its population sample an entity should no longer count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopulationRemovalMethod

An **interface** in `Root.Township`, `Alta.Populations`.

A component that can tell its population sample an entity should no longer count. `Pickup` implements it, and `PopulationSample` listens.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`Pickup`](/mod/game-api/types/global-p/pickup)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-removefrompopulation" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" RemoveFromPopulation"}</code> | <span className="api-desc">Raised with the entity that should leave its population. `PopulationSample` counts it as lost.</span> |
