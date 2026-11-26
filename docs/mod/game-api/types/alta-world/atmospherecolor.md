---
title: "AtmosphereColor"
description: "A colour value in the atmosphere system that blends smoothly to a new target and passes each step to a setter callback."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmosphereColor

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

A colour value in the atmosphere system that blends smoothly to a new target and passes each step to a setter callback.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`LerpingValue<Color>`](/mod/game-api/types/alta-utilities/lerpingvalue-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AtmosphereColor(Action<Color> setValue)"}</code> | <span className="api-desc">Creates an `AtmosphereColor` from `setValue`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"protected override Color Lerp(Color initial, Color target, float progress)"}</code> | <span className="api-desc">Blends between two colours with `Color.Lerp`.</span> |

## Used in

Members of other types that take, return or hold a `AtmosphereColor`:

<div className="api-used-in">

[`AtmosphereManager.AmbientColor`](/mod/game-api/types/alta-world/atmospheremanager#m-ambientcolor), [`AtmosphereManager.FogColor`](/mod/game-api/types/alta-world/atmospheremanager#m-fogcolor).

</div>
