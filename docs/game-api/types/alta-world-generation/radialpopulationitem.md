---
title: "RadialPopulationItem"
description: "class RadialPopulationItem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RadialPopulationItem

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationItem`](/game-api/types/alta-world-generation/populationitem)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RadialPopulationItem()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-distancecheckupdatemodule" /><code>{"static readonly "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" distanceCheckUpdateModule"}</code> |

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-center" /><code>{"private Vector3 center"}</code> |
| <Link id="m-detector" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunkdetector">{"ChunkDetector"}</Link>{" detector"}</code> |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkradius" /><code>{"private void CheckRadius()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |

</details>
