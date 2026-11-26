---
title: "EmissionControl"
description: "Pooled effect that scales the emission rate of a set of particle systems."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmissionControl

A **class** in `Root.Township`, no namespace.

Pooled effect that scales the emission rate of a set of particle systems. It turns emission off when released to the pool and back on when requested again.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`DelayedPooledObject`](/game-api/types/global-c-d/delayedpooledobject), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`EmissionShapeControl`](/game-api/types/global-e-h/emissionshapecontrol)
- **Nested types** [`InitialValues`](/game-api/types/global-e-h/emissioncontrol-initialvalues)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmissionControl()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-systemstochange" /><code>{"protected ParticleSystem[] systemsToChange"}</code> | The particle systems whose emission this component scales. Set in the inspector. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialvalues" /><code>{"private "}<Link to="/game-api/types/global-e-h/emissioncontrol-initialvalues">{"EmissionControl.InitialValues"}</Link>{"[] initialValues"}</code> | Starting rate over time and rate over distance for each system, captured in `SetupSystems`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Sets emission to zero, unparents the object and returns it to the pool. |
| <Link id="m-setemissionmultiplier" /><code>{"void SetEmissionMultiplier(float value)"}</code> | Scales rate over time and rate over distance of every system by the value, relative to their starting rates. |
| <Link id="m-resetsystems" /><code>{"protected virtual void ResetSystems("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Hooked to the pool's `Requested` event; restores emission to full (multiplier 1). |
| <Link id="m-setupsystems" /><code>{"protected virtual void SetupSystems()"}</code> | Subscribes `ResetSystems` to `Requested` and stores each system's starting emission rates. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Calls `SetupSystems` to record the starting emission rates. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: drops null entries from `systemsToChange` and re-runs `SetupSystems` if any were removed. |

</details>

## Used in

Members of other types that take, return or hold a `EmissionControl`:

[`CookingPoint.particles`](/game-api/types/alta-crafting/cookingpoint#m-particles), [`CookingPoint.Particles`](/game-api/types/alta-crafting/cookingpoint#m-particles-2).
