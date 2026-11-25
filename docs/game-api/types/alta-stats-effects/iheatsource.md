---
title: "IHeatSource"
description: "interface IHeatSource in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHeatSource

An **interface** in `Root.Township`, `Alta.Heat`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`IHeatReceiver`](/game-api/types/alta-stats-effects/iheatreceiver)

## Properties

| Member |
| --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |
| <Link id="m-receiveconductivitymultiplier" /><code>{"float ReceiveConductivityMultiplier { get; }"}</code> |
| <Link id="m-sourceconductivitymultiplier" /><code>{"float SourceConductivityMultiplier { get; }"}</code> |
| <Link id="m-temperature" /><code>{"float Temperature { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-conductto" /><code>{"void ConductTo("}<Link to="/game-api/types/alta-stats-effects/iheatreceiver">{"IHeatReceiver"}</Link>{" receiver, bool isSource, bool isIgnoringAmbient = false, float weight = 1)"}</code> |

## Used in

Members of other types that take, return or hold a `IHeatSource`:

[`HeatArea.heatSource`](/game-api/types/alta-stats-effects/heatarea#m-heatsource).
