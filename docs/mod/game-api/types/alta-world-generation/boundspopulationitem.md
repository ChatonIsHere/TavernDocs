---
title: "BoundsPopulationItem"
description: "Population member that leaves its population once it moves outside its chunk's buffer bounds, then gets chunked normally and stops being saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoundsPopulationItem

A **class** in `Root.Township`, `Alta.Populations`.

Population member that leaves its population once it moves outside its chunk's buffer bounds, then gets chunked normally and stops being saved.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationItem`](/mod/game-api/types/alta-world-generation/populationitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoundsPopulationItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distancecheckupdatemodule" /><code>{"static readonly "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" distanceCheckUpdateModule"}</code> | <span className="api-desc">Budgeted update module shared by all items of this type for the distance check.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkbounds" /><code>{"private Bounds chunkBounds"}</code> | <span className="api-desc">The buffer bounds of the population's chunk, set in `Initialize`.</span> |
| <Link id="m-detector" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/chunkdetector">{"ChunkDetector"}</Link>{" detector"}</code> | <span className="api-desc">The entity's chunk detector, off while this item is tracked.</span> |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | <span className="api-desc">True after `Initialize`; the check does nothing before.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered distance check.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Server: marks the item ready and stores its chunk's buffer bounds.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkinsidebounds" /><code>{"private void CheckInsideBounds()"}</code> | <span className="api-desc">If the item is outside the chunk bounds, removes it from the population, moves it to the best chunk for its position and sets its save mode to Ignore.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the check, turns the chunk detector back on and recalculates the entity's chunk.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Turns off the entity's `ChunkDetector` and registers the distance check with a budgeted update.</span> |

</details>
