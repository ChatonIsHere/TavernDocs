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
| <Link id="m-ctor" /><code>{"BoundsPopulationItem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distancecheckupdatemodule" /><code>{"static readonly "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" distanceCheckUpdateModule"}</code> | Budgeted update module shared by all items of this type for the distance check. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkbounds" /><code>{"private Bounds chunkBounds"}</code> | The buffer bounds of the population's chunk, set in `Initialize`. |
| <Link id="m-detector" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/chunkdetector">{"ChunkDetector"}</Link>{" detector"}</code> | The entity's chunk detector, off while this item is tracked. |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | True after `Initialize`; the check does nothing before. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered distance check. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: marks the item ready and stores its chunk's buffer bounds. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkinsidebounds" /><code>{"private void CheckInsideBounds()"}</code> | If the item is outside the chunk bounds, removes it from the population, moves it to the best chunk for its position and sets its save mode to Ignore. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the check, turns the chunk detector back on and recalculates the entity's chunk. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Turns off the entity's `ChunkDetector` and registers the distance check with a budgeted update. |

</details>
