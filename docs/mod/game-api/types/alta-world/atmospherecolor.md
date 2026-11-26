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
| <Link id="m-ctor" /><code>{"AtmosphereColor(Action<Color> setValue)"}</code> | Creates an `AtmosphereColor` from `setValue`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"protected override Color Lerp(Color initial, Color target, float progress)"}</code> | Blends between two colours with `Color.Lerp`. |

## Used in

Members of other types that take, return or hold a `AtmosphereColor`:

[`AtmosphereManager.AmbientColor`](/mod/game-api/types/alta-world/atmospheremanager#m-ambientcolor), [`AtmosphereManager.FogColor`](/mod/game-api/types/alta-world/atmospheremanager#m-fogcolor).
