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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`BasicPopulation`](/mod/game-api/types/alta-world-generation/basicpopulation)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationEventHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, "}<Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, "}<Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `PopulationEventHandler`:

<div className="api-used-in">

[`BasicPopulation.PopulationDecreased`](/mod/game-api/types/alta-world-generation/basicpopulation#m-populationdecreased), [`BasicPopulation.PopulationIncreased`](/mod/game-api/types/alta-world-generation/basicpopulation#m-populationincreased).

</div>
