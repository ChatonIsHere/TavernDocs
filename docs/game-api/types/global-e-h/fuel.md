---
title: "Fuel"
description: "Fuel values for an item type, used by fuel-burning fires."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Fuel

A **class** in `Root.Township`, no namespace.

Fuel values for an item type, used by fuel-burning fires. An `ItemComponent`, so it is per item (and material), not per object. See Heat.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`ItemComponent`](/game-api/types/global-i-l/itemcomponent)
- **Derived types** [`FuelComparer`](/game-api/types/alta-stats-effects/fuelcomparer)
- **Documented in** [Heat](/game-api/game-systems/heat#fuel)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Fuel()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-burnduration" /><code>{"private float burnDuration"}</code> |
| <Link id="m-burning" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" burning"}</code> |
| <Link id="m-burnprioritymultiplier" /><code>{"private float burnPriorityMultiplier"}</code> |
| <Link id="m-dockedburnduration" /><code>{"private float dockedBurnDuration"}</code> |
| <Link id="m-efficiencycap" /><code>{"private float efficiencyCap"}</code> |
| <Link id="m-efficiencyvalue" /><code>{"private float efficiencyValue"}</code> |
| <Link id="m-parentduration" /><code>{"private float parentDuration"}</code> |
| <Link id="m-volume" /><code>{"private float volume"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-burnduration-2" /><code>{"float BurnDuration { get; }"}</code> | How long the item burns in a fire's fuel area. |
| <Link id="m-burningitem" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" BurningItem { get; }"}</code> | Item the fuel turns into when its life runs out. The server swaps the object for it. Null means it is destroyed. |
| <Link id="m-burnprioritymultiplier-2" /><code>{"float BurnPriorityMultiplier { get; }"}</code> | Share of the fire's burn this fuel takes compared to other fuel in the area. |
| <Link id="m-dockedburnduration-2" /><code>{"float DockedBurnDuration { get; }"}</code> | How long one item lasts in a fire's fuel dock. |
| <Link id="m-efficiencycap-2" /><code>{"float EfficiencyCap { get; }"}</code> | Above this fire efficiency, this fuel burns more slowly. Fuel areas sort fuel by it. |
| <Link id="m-efficiencyvalue-2" /><code>{"float EfficiencyValue { get; }"}</code> | How much heat efficiency each item adds to the fire. |
| <Link id="m-parentduration-2" /><code>{"float ParentDuration { get; }"}</code> |  |
| <Link id="m-volume-2" /><code>{"float Volume { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `Fuel`:

[`Fire.ConsumeFuel`](/game-api/types/alta-stats-effects/fire#m-consumefuel), [`Fire.GetFuel`](/game-api/types/alta-stats-effects/fire#m-getfuel), [`Fire.FuelConsumptionState.fuelList`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuellist), [`Fire.FuelConsumptionState.fuels`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuels), [`FuelComparer.Compare`](/game-api/types/alta-stats-effects/fuelcomparer#m-compare).
