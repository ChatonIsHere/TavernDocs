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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`IHeatSource`](/game-api/types/alta-stats-effects/iheatsource)
- **Derived types** [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalenergy" /><code>{"float InternalEnergy { get; set; }"}</code> | Temperature times volume. Setting it changes the temperature. |
| <Link id="m-isconductionallowed" /><code>{"bool IsConductionAllowed { get; set; }"}</code> | Whether heat can conduct to or from this receiver. |
| <Link id="m-isignoringambient" /><code>{"bool IsIgnoringAmbient { get; set; }"}</code> | When true, the receiver skips cooling towards the ambient temperature this update. |
| <Link id="m-volume" /><code>{"float Volume { get; set; }"}</code> | Heat capacity used when sharing energy between receivers. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conduct" /><code>{"void Conduct(float temperature, bool isIgnoringAmbient, float weight = 1)"}</code> | Moves the receiver's temperature towards the given one, scaled by weight and frame time. On `HeatPoint` this is server only. |

## Used in

Members of other types that take, return or hold a `IHeatReceiver`:

[`HeatPoint.ConductTo`](/game-api/types/alta-stats-effects/heatpoint#m-conductto), [`IHeatSource.ConductTo`](/game-api/types/alta-stats-effects/iheatsource#m-conductto).
