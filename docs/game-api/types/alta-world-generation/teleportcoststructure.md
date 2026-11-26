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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportCostStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecost" /><code>{"private int baseCost"}</code> | Fuel cost before distance. Default 5. |
| <Link id="m-distancecorrection" /><code>{"private int distanceCorrection"}</code> | Layer distance per cost step (integer division). Default 10. |
| <Link id="m-frommultiplier" /><code>{"private float fromMultiplier"}</code> | Scales the cost paid at the teleporter you leave from. |
| <Link id="m-layerdistanceincrease" /><code>{"private int layerDistanceIncrease"}</code> | Extra cost per distance step. |
| <Link id="m-tomultiplier" /><code>{"private float toMultiplier"}</code> | Scales the fuel taken from the destination layer's teleporter. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecost" /><code>{"void CalculateCost(int distance, out int fromCost, out int toCost)"}</code> | Cost is `baseCost` plus `layerDistanceIncrease` for every `distanceCorrection` layers, times the from and to multipliers, rounded. |

## Used in

Members of other types that take, return or hold a `TeleportCostStructure`:

[`CaveTeleportSettings.fromSurface`](/game-api/types/alta-world-generation/caveteleportsettings#m-fromsurface), [`CaveTeleportSettings.toSurface`](/game-api/types/alta-world-generation/caveteleportsettings#m-tosurface), [`CaveTeleportSettings.withinCaves`](/game-api/types/alta-world-generation/caveteleportsettings#m-withincaves).
