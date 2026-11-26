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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Derived types** [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint), [`IHeatReceiver`](/mod/game-api/types/alta-stats-effects/iheatreceiver)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity the source belongs to. Conduction inside the same entity uses the internal multiplier instead.</span> |
| <Link id="m-receiveconductivitymultiplier" /><code>{"float ReceiveConductivityMultiplier { get; }"}</code> | <span className="api-desc">How readily it takes heat in.</span> |
| <Link id="m-sourceconductivitymultiplier" /><code>{"float SourceConductivityMultiplier { get; }"}</code> | <span className="api-desc">How readily it gives heat out.</span> |
| <Link id="m-temperature" /><code>{"float Temperature { get; }"}</code> | <span className="api-desc">Its current temperature.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conductto" /><code>{"void ConductTo("}<Link to="/mod/game-api/types/alta-stats-effects/iheatreceiver">{"IHeatReceiver"}</Link>{" receiver, bool isSource, bool isIgnoringAmbient = false, float weight = 1)"}</code> | <span className="api-desc">Moves heat between this source and a receiver, scaled by both conductivity multipliers and the weight.</span> |

## Used in

Members of other types that take, return or hold a `IHeatSource`:

<div className="api-used-in">

[`HeatArea.heatSource`](/mod/game-api/types/alta-stats-effects/heatarea#m-heatsource).

</div>
