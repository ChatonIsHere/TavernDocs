---
title: "EmissionControl"
description: "Pooled effect that scales the emission rate of a set of particle systems."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmissionControl

A **class** in `Root.Township`, the global namespace.

Pooled effect that scales the emission rate of a set of particle systems. It turns emission off when released to the pool and back on when requested again.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`DelayedPooledObject`](/mod/game-api/types/global-c-d/delayedpooledobject), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`EmissionShapeControl`](/mod/game-api/types/global-e-h/emissionshapecontrol)
- **Nested types** [`InitialValues`](/mod/game-api/types/global-e-h/emissioncontrol-initialvalues)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmissionControl()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-systemstochange" /><code>{"protected ParticleSystem[] systemsToChange"}</code> | <span className="api-desc">The particle systems whose emission this component scales. Set in the inspector.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialvalues" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/emissioncontrol-initialvalues">{"EmissionControl.InitialValues"}</Link>{"[] initialValues"}</code> | <span className="api-desc">Starting rate over time and rate over distance for each system, captured in `SetupSystems`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Sets emission to zero, unparents the object and returns it to the pool.</span> |
| <Link id="m-setemissionmultiplier" /><code>{"void SetEmissionMultiplier(float value)"}</code> | <span className="api-desc">Scales rate over time and rate over distance of every system by the value, relative to their starting rates.</span> |
| <Link id="m-resetsystems" /><code>{"protected virtual void ResetSystems("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Hooked to the pool's `Requested` event; restores emission to full (multiplier 1).</span> |
| <Link id="m-setupsystems" /><code>{"protected virtual void SetupSystems()"}</code> | <span className="api-desc">Subscribes `ResetSystems` to `Requested` and stores each system's starting emission rates.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Calls `SetupSystems` to record the starting emission rates.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: drops null entries from `systemsToChange` and re-runs `SetupSystems` if any were removed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EmissionControl`:

<div className="api-used-in">

[`CookingPoint.particles`](/mod/game-api/types/alta-crafting/cookingpoint#m-particles), [`CookingPoint.Particles`](/mod/game-api/types/alta-crafting/cookingpoint#m-particles-2).

</div>
