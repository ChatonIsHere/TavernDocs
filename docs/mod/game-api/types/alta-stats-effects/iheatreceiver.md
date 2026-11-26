---
title: "IHeatReceiver"
description: "A heat source that can also take in heat, such as HeatPoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHeatReceiver

An **interface** in `Root.Township`, `Alta.Heat`.

A heat source that can also take in heat, such as `HeatPoint`. Heat areas and other heat points conduct into it.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`IHeatSource`](/mod/game-api/types/alta-stats-effects/iheatsource)
- **Derived types** [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalenergy" /><code>{"float InternalEnergy { get; set; }"}</code> | <span className="api-desc">Temperature times volume. Setting it changes the temperature.</span> |
| <Link id="m-isconductionallowed" /><code>{"bool IsConductionAllowed { get; set; }"}</code> | <span className="api-desc">Whether heat can conduct to or from this receiver.</span> |
| <Link id="m-isignoringambient" /><code>{"bool IsIgnoringAmbient { get; set; }"}</code> | <span className="api-desc">When true, the receiver skips cooling towards the ambient temperature this update.</span> |
| <Link id="m-volume" /><code>{"float Volume { get; set; }"}</code> | <span className="api-desc">Heat capacity used when sharing energy between receivers.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conduct" /><code>{"void Conduct(float temperature, bool isIgnoringAmbient, float weight = 1)"}</code> | <span className="api-desc">Moves the receiver's temperature towards the given one, scaled by weight and frame time. On `HeatPoint` this is server only.</span> |

## Used in

Members of other types that take, return or hold a `IHeatReceiver`:

<div className="api-used-in">

[`HeatPoint.ConductTo`](/mod/game-api/types/alta-stats-effects/heatpoint#m-conductto), [`IHeatSource.ConductTo`](/mod/game-api/types/alta-stats-effects/iheatsource#m-conductto).

</div>
