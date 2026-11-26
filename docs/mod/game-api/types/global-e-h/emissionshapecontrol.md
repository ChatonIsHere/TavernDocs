---
title: "EmissionShapeControl"
description: "EmissionControl that can also scale the shape radius of its particle systems."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmissionShapeControl

A **class** in `Root.Township`, the global namespace.

`EmissionControl` that can also scale the shape radius of its particle systems.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`EmissionControl`](/mod/game-api/types/global-e-h/emissioncontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmissionShapeControl()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialradii" /><code>{"private float[] initialRadii"}</code> | Original shape radius of each system. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setemissionshaperadius" /><code>{"void SetEmissionShapeRadius(float radiusMultiplier)"}</code> | Sets each system's shape radius to its original radius times the multiplier. |
| <Link id="m-resetsystems" /><code>{"protected override void ResetSystems("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Resets like the base and puts the radius multiplier back to 1. |
| <Link id="m-setupsystems" /><code>{"protected override void SetupSystems()"}</code> | Sets up like the base and records each system's original shape radius. |
