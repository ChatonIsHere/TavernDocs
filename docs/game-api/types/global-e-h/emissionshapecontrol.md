---
title: "EmissionShapeControl"
description: "EmissionControl that can also scale the shape radius of its particle systems."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmissionShapeControl

A **class** in `Root.Township`, no namespace.

`EmissionControl` that can also scale the shape radius of its particle systems.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`EmissionControl`](/game-api/types/global-e-h/emissioncontrol)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmissionShapeControl()"}</code> |

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
| <Link id="m-resetsystems" /><code>{"protected override void ResetSystems("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Resets like the base and puts the radius multiplier back to 1. |
| <Link id="m-setupsystems" /><code>{"protected override void SetupSystems()"}</code> | Sets up like the base and records each system's original shape radius. |
