---
title: "IHeatSource"
description: "Something with a temperature that can pass heat to a receiver."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHeatSource

An **interface** in `Root.Township`, `Alta.Heat`.

Something with a temperature that can pass heat to a receiver. `HeatPoint` is the main one, through `IHeatReceiver`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`IHeatReceiver`](/game-api/types/alta-stats-effects/iheatreceiver)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity the source belongs to. Conduction inside the same entity uses the internal multiplier instead. |
| <Link id="m-receiveconductivitymultiplier" /><code>{"float ReceiveConductivityMultiplier { get; }"}</code> | How readily it takes heat in. |
| <Link id="m-sourceconductivitymultiplier" /><code>{"float SourceConductivityMultiplier { get; }"}</code> | How readily it gives heat out. |
| <Link id="m-temperature" /><code>{"float Temperature { get; }"}</code> | Its current temperature. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conductto" /><code>{"void ConductTo("}<Link to="/game-api/types/alta-stats-effects/iheatreceiver">{"IHeatReceiver"}</Link>{" receiver, bool isSource, bool isIgnoringAmbient = false, float weight = 1)"}</code> | Moves heat between this source and a receiver, scaled by both conductivity multipliers and the weight. |

## Used in

Members of other types that take, return or hold a `IHeatSource`:

[`HeatArea.heatSource`](/game-api/types/alta-stats-effects/heatarea#m-heatsource).
