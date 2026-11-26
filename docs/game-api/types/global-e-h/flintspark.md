---
title: "FlintSpark"
description: "Pooled spark light effect for flint strikes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlintSpark

A **class** in `Root.Township`, no namespace.

Pooled spark light effect for flint strikes. Fades the light over its duration, then returns to the pool. Client visual.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IImpactEffect`](/game-api/types/alta-items/iimpacteffect)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FlintSpark()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Seconds the spark lasts. |
| <Link id="m-intensitymultiplier" /><code>{"private float intensityMultiplier"}</code> | Intensity scale for the current spark. |
| <Link id="m-lightcolor" /><code>{"private Gradient lightColor"}</code> | Light colour over the spark's life. |
| <Link id="m-lightintensity" /><code>{"private AnimationCurve lightIntensity"}</code> | Light intensity over the spark's life. |
| <Link id="m-minimumintensitymultiplier" /><code>{"private float minimumIntensityMultiplier"}</code> | Intensity scale for a hit with zero effectiveness. |
| <Link id="m-sparklight" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" sparkLight"}</code> | The light being animated. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcedtrigger" /><code>{"void ForcedTrigger()"}</code> | Plays the spark at full intensity. Used by the fly cam's spark. |
| <Link id="m-trigger" /><code>{"void Trigger("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | Impact effect entry: plays the spark with intensity scaled by the hit's effectiveness. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatevisual" /><code>{"private IEnumerator UpdateVisual() (iterator)"}</code> | Coroutine that drives the light colour and intensity along the curves, then releases the object. |

</details>
