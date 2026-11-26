---
title: "TeleportCostStructure"
description: "Asset with the fuel cost formula for one kind of cave teleport (from the surface, to the surface or within caves)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportCostStructure

A **class** in `Root.Township`, `Alta.Caves`.

Asset with the fuel cost formula for one kind of cave teleport (from the surface, to the surface or within caves). Picked by `CaveTeleportSettings.CalculateCost`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportCostStructure()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecost" /><code>{"private int baseCost"}</code> | <span className="api-desc">Fuel cost before distance. Default 5.</span> |
| <Link id="m-distancecorrection" /><code>{"private int distanceCorrection"}</code> | <span className="api-desc">Layer distance per cost step (integer division). Default 10.</span> |
| <Link id="m-frommultiplier" /><code>{"private float fromMultiplier"}</code> | <span className="api-desc">Scales the cost paid at the teleporter you leave from.</span> |
| <Link id="m-layerdistanceincrease" /><code>{"private int layerDistanceIncrease"}</code> | <span className="api-desc">Extra cost per distance step.</span> |
| <Link id="m-tomultiplier" /><code>{"private float toMultiplier"}</code> | <span className="api-desc">Scales the fuel taken from the destination layer's teleporter.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecost" /><code>{"void CalculateCost(int distance, out int fromCost, out int toCost)"}</code> | <span className="api-desc">Cost is `baseCost` plus `layerDistanceIncrease` for every `distanceCorrection` layers, times the from and to multipliers, rounded.</span> |

## Used in

Members of other types that take, return or hold a `TeleportCostStructure`:

<div className="api-used-in">

[`CaveTeleportSettings.fromSurface`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-fromsurface), [`CaveTeleportSettings.toSurface`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-tosurface), [`CaveTeleportSettings.withinCaves`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-withincaves).

</div>
