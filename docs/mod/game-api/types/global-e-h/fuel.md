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
| <Link id="m-ctor" /><code>{"Fuel()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burnduration" /><code>{"private float burnDuration"}</code> | <span className="api-desc">Seconds this fuel burns before turning into `burning` or being destroyed. Each piece varies by 15 percent.</span> |
| <Link id="m-burning" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" burning"}</code> | <span className="api-desc">Item this fuel turns into as it burns down (for example a burnt stage), or none.</span> |
| <Link id="m-burnprioritymultiplier" /><code>{"private float burnPriorityMultiplier"}</code> | <span className="api-desc">How much of the fire's burn this fuel takes, relative to other fuel in the fire.</span> |
| <Link id="m-dockedburnduration" /><code>{"private float dockedBurnDuration"}</code> | <span className="api-desc">Seconds per item when burnt from a fuel dock.</span> |
| <Link id="m-efficiencycap" /><code>{"private float efficiencyCap"}</code> | <span className="api-desc">Fire efficiency above which this fuel's burn rate is scaled down. Also used to sort fuels.</span> |
| <Link id="m-efficiencyvalue" /><code>{"private float efficiencyValue"}</code> | <span className="api-desc">How much each piece adds to the fire's efficiency.</span> |
| <Link id="m-parentduration" /><code>{"private float parentDuration"}</code> | <span className="api-desc">Backing field for `ParentDuration`.</span> |
| <Link id="m-volume" /><code>{"private float volume"}</code> | <span className="api-desc">Backing field for `Volume`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-burnduration-2" /><code>{"float BurnDuration { get; }"}</code> | <span className="api-desc">How long the item burns in a fire's fuel area.</span> |
| <Link id="m-burningitem" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" BurningItem { get; }"}</code> | <span className="api-desc">Item the fuel turns into when its life runs out. The server swaps the object for it. Null means it is destroyed.</span> |
| <Link id="m-burnprioritymultiplier-2" /><code>{"float BurnPriorityMultiplier { get; }"}</code> | <span className="api-desc">Share of the fire's burn this fuel takes compared to other fuel in the area.</span> |
| <Link id="m-dockedburnduration-2" /><code>{"float DockedBurnDuration { get; }"}</code> | <span className="api-desc">How long one item lasts in a fire's fuel dock.</span> |
| <Link id="m-efficiencycap-2" /><code>{"float EfficiencyCap { get; }"}</code> | <span className="api-desc">Above this fire efficiency, this fuel burns more slowly. Fuel areas sort fuel by it.</span> |
| <Link id="m-efficiencyvalue-2" /><code>{"float EfficiencyValue { get; }"}</code> | <span className="api-desc">How much heat efficiency each item adds to the fire.</span> |
| <Link id="m-parentduration-2" /><code>{"float ParentDuration { get; }"}</code> | <span className="api-desc">Extra burn life added when the fuel is loaded into a fire from a save.</span> |
| <Link id="m-volume-2" /><code>{"float Volume { get; }"}</code> | <span className="api-desc">Heat volume this fuel adds to the fire's heat point while it burns.</span> |

## Used in

Members of other types that take, return or hold a `Fuel`:

<div className="api-used-in">

[`Fire.ConsumeFuel`](/mod/game-api/types/alta-stats-effects/fire#m-consumefuel), [`Fire.GetFuel`](/mod/game-api/types/alta-stats-effects/fire#m-getfuel), [`Fire.FuelConsumptionState.fuelList`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuellist), [`Fire.FuelConsumptionState.fuels`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuels), [`FuelComparer.Compare`](/mod/game-api/types/alta-stats-effects/fuelcomparer#m-compare).

</div>
