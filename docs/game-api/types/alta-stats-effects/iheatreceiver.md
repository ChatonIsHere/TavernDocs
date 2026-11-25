---
title: "IHeatReceiver"
description: "interface IHeatReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHeatReceiver

An **interface** in `Root.Township`, `Alta.Heat`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`IHeatSource`](/game-api/types/alta-stats-effects/iheatsource)
- **Derived types** [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalenergy" /><code>{"float InternalEnergy { get; set; }"}</code> |  |
| <Link id="m-isconductionallowed" /><code>{"bool IsConductionAllowed { get; set; }"}</code> |  |
| <Link id="m-isignoringambient" /><code>{"bool IsIgnoringAmbient { get; set; }"}</code> |  |
| <Link id="m-volume" /><code>{"float Volume { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conduct" /><code>{"void Conduct(float temperature, bool isIgnoringAmbient, float weight = 1)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IHeatReceiver`:

[`HeatPoint.ConductTo`](/game-api/types/alta-stats-effects/heatpoint#m-conductto), [`IHeatSource.ConductTo`](/game-api/types/alta-stats-effects/iheatsource#m-conductto).
