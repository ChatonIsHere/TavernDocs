---
title: "Fire.FuelConsumptionState"
description: "class Fire.FuelConsumptionState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Fire.FuelConsumptionState

A **private class** in `Root.Township`, `Alta.Heat`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`Fire`](/game-api/types/alta-stats-effects/fire)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FuelConsumptionState()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-fuellist" /><code><Link to="/game-api/types/alta-utilities/sortedlist-t">{"SortedList"}</Link>{"<"}<Link to="/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{"> fuelList"}</code> |
| <Link id="m-fuels" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", "}<Link to="/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{"> fuels"}</code> |
| <Link id="m-pool" /><code>{"static Stack<"}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{"> pool"}</code> |
| <Link id="m-remaininglife" /><code>{"Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", float> remainingLife"}</code> |
| <Link id="m-tracked" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", HashSet<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{">> tracked"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" Get()"}</code> |
| <Link id="m-release" /><code>{"static void Release(ref "}<Link to="/game-api/types/alta-stats-effects/fire-fuelconsumptionstate">{"Fire.FuelConsumptionState"}</Link>{" state)"}</code> |

## Used in

Members of other types that take, return or hold a `FuelConsumptionState`:

[`Fire.CalculateEfficiency`](/game-api/types/alta-stats-effects/fire#m-calculateefficiency), [`Fire.ConsumeFuel`](/game-api/types/alta-stats-effects/fire#m-consumefuel), [`Fire.consumptionState`](/game-api/types/alta-stats-effects/fire#m-consumptionstate), [`Fire.HandleFuelAdded`](/game-api/types/alta-stats-effects/fire#m-handlefueladded), [`Fire.HandleFuelRemoved`](/game-api/types/alta-stats-effects/fire#m-handlefuelremoved), [`Fire.TickFuelConsumption`](/game-api/types/alta-stats-effects/fire#m-tickfuelconsumption).
