---
title: "Fuel"
description: "Fuel values for an item type, used by fuel-burning fires."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Fuel

A **class** in `Root.Township`, the global namespace.

Fuel values for an item type, used by fuel-burning fires. An `ItemComponent`, so it is per item (and material), not per object. See Heat.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`ItemComponent`](/mod/game-api/types/global-i-l/itemcomponent)
- **Derived types** [`FuelComparer`](/mod/game-api/types/alta-stats-effects/fuelcomparer)
- **Documented in** [Heat](/mod/game-api/game-systems/heat#fuel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Fuel()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burnduration" /><code>{"private float burnDuration"}</code> | Seconds this fuel burns before turning into `burning` or being destroyed. Each piece varies by 15 percent. |
| <Link id="m-burning" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" burning"}</code> | Item this fuel turns into as it burns down (for example a burnt stage), or none. |
| <Link id="m-burnprioritymultiplier" /><code>{"private float burnPriorityMultiplier"}</code> | How much of the fire's burn this fuel takes, relative to other fuel in the fire. |
| <Link id="m-dockedburnduration" /><code>{"private float dockedBurnDuration"}</code> | Seconds per item when burnt from a fuel dock. |
| <Link id="m-efficiencycap" /><code>{"private float efficiencyCap"}</code> | Fire efficiency above which this fuel's burn rate is scaled down. Also used to sort fuels. |
| <Link id="m-efficiencyvalue" /><code>{"private float efficiencyValue"}</code> | How much each piece adds to the fire's efficiency. |
| <Link id="m-parentduration" /><code>{"private float parentDuration"}</code> | Backing field for `ParentDuration`. |
| <Link id="m-volume" /><code>{"private float volume"}</code> | Backing field for `Volume`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-burnduration-2" /><code>{"float BurnDuration { get; }"}</code> | How long the item burns in a fire's fuel area. |
| <Link id="m-burningitem" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" BurningItem { get; }"}</code> | Item the fuel turns into when its life runs out. The server swaps the object for it. Null means it is destroyed. |
| <Link id="m-burnprioritymultiplier-2" /><code>{"float BurnPriorityMultiplier { get; }"}</code> | Share of the fire's burn this fuel takes compared to other fuel in the area. |
| <Link id="m-dockedburnduration-2" /><code>{"float DockedBurnDuration { get; }"}</code> | How long one item lasts in a fire's fuel dock. |
| <Link id="m-efficiencycap-2" /><code>{"float EfficiencyCap { get; }"}</code> | Above this fire efficiency, this fuel burns more slowly. Fuel areas sort fuel by it. |
| <Link id="m-efficiencyvalue-2" /><code>{"float EfficiencyValue { get; }"}</code> | How much heat efficiency each item adds to the fire. |
| <Link id="m-parentduration-2" /><code>{"float ParentDuration { get; }"}</code> | Extra burn life added when the fuel is loaded into a fire from a save. |
| <Link id="m-volume-2" /><code>{"float Volume { get; }"}</code> | Heat volume this fuel adds to the fire's heat point while it burns. |

## Used in

Members of other types that take, return or hold a `Fuel`:

[`Fire.ConsumeFuel`](/mod/game-api/types/alta-stats-effects/fire#m-consumefuel), [`Fire.GetFuel`](/mod/game-api/types/alta-stats-effects/fire#m-getfuel), [`Fire.FuelConsumptionState.fuelList`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuellist), [`Fire.FuelConsumptionState.fuels`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuels), [`FuelComparer.Compare`](/mod/game-api/types/alta-stats-effects/fuelcomparer#m-compare).
