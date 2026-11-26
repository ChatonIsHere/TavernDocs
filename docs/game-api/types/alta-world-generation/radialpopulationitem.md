---
title: "RadialPopulationItem"
description: "Population member that leaves its population once it moves past the definition's disconnect radius, then gets chunked normally and stops being saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RadialPopulationItem

A **class** in `Root.Township`, `Alta.Populations`.

Population member that leaves its population once it moves past the definition's disconnect radius, then gets chunked normally and stops being saved.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationItem`](/game-api/types/alta-world-generation/populationitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RadialPopulationItem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distancecheckupdatemodule" /><code>{"static readonly "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" distanceCheckUpdateModule"}</code> | Budgeted update module shared by all items of this type for the distance check. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Vector3 center"}</code> | Position of the population's parent, set in `Initialize`. |
| <Link id="m-detector" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunkdetector">{"ChunkDetector"}</Link>{" detector"}</code> | The entity's chunk detector, off while this item is tracked. |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | True after `Initialize`; the check does nothing before. |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> | The definition's disconnect radius, squared. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered distance check. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: marks the item ready and stores the parent's position and the squared disconnect radius. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkradius" /><code>{"private void CheckRadius()"}</code> | If the item is past the disconnect radius, removes it from the population, moves it to the best chunk for its position and sets its save mode to Ignore. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the check, turns the chunk detector back on and recalculates the entity's chunk. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Turns off the entity's `ChunkDetector` and registers the distance check with a budgeted update. |

</details>
