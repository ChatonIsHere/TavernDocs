---
title: "EmissionControl"
description: "class EmissionControl in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmissionControl

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`DelayedPooledObject`](/game-api/types/global-c-d/delayedpooledobject), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`EmissionShapeControl`](/game-api/types/global-e-h/emissionshapecontrol)
- **Nested types** [`InitialValues`](/game-api/types/global-e-h/emissioncontrol-initialvalues)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmissionControl()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-systemstochange" /><code>{"protected ParticleSystem[] systemsToChange"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-initialvalues" /><code>{"private "}<Link to="/game-api/types/global-e-h/emissioncontrol-initialvalues">{"EmissionControl.InitialValues"}</Link>{"[] initialValues"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |
| <Link id="m-setemissionmultiplier" /><code>{"void SetEmissionMultiplier(float value)"}</code> |
| <Link id="m-resetsystems" /><code>{"protected virtual void ResetSystems("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |
| <Link id="m-setupsystems" /><code>{"protected virtual void SetupSystems()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `EmissionControl`:

[`CookingPoint.particles`](/game-api/types/alta-crafting/cookingpoint#m-particles), [`CookingPoint.Particles`](/game-api/types/alta-crafting/cookingpoint#m-particles-2).
