---
title: "IPopulationItem"
description: "A spawned population member."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopulationItem

An **interface** in `Root.Township`, `Alta.Populations`.

A spawned population member. Growers use it to hand population membership on when an item turns into its next stage.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`BasicPopulationItem`](/mod/game-api/types/alta-world-generation/basicpopulationitem), [`PopulationItem`](/mod/game-api/types/alta-world-generation/populationitem)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacement)"}</code> | <span className="api-desc">Moves this member's place in its population to the replacement entity.</span> |
