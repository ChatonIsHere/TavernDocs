---
title: "BasicPopulation.PopulationEventHandler"
description: "Handler for BasicPopulation.PopulationIncreased and PopulationDecreased, given the population and the item that was added or removed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulation.PopulationEventHandler

A **delegate** in `Root.Township`, `Alta.Populations`.

Handler for `BasicPopulation.PopulationIncreased` and `PopulationDecreased`, given the population and the item that was added or removed.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`BasicPopulation`](/game-api/types/alta-world-generation/basicpopulation)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, "}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, "}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> |

## Used in

Members of other types that take, return or hold a `PopulationEventHandler`:

[`BasicPopulation.PopulationDecreased`](/game-api/types/alta-world-generation/basicpopulation#m-populationdecreased), [`BasicPopulation.PopulationIncreased`](/game-api/types/alta-world-generation/basicpopulation#m-populationincreased).
