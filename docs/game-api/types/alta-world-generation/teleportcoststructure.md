---
title: "TeleportCostStructure"
description: "class TeleportCostStructure in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportCostStructure

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportCostStructure()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basecost" /><code>{"private int baseCost"}</code> |  |
| <Link id="m-distancecorrection" /><code>{"private int distanceCorrection"}</code> |  |
| <Link id="m-frommultiplier" /><code>{"private float fromMultiplier"}</code> |  |
| <Link id="m-layerdistanceincrease" /><code>{"private int layerDistanceIncrease"}</code> |  |
| <Link id="m-tomultiplier" /><code>{"private float toMultiplier"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecost" /><code>{"void CalculateCost(int distance, out int fromCost, out int toCost)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TeleportCostStructure`:

[`CaveTeleportSettings.fromSurface`](/game-api/types/alta-world-generation/caveteleportsettings#m-fromsurface), [`CaveTeleportSettings.toSurface`](/game-api/types/alta-world-generation/caveteleportsettings#m-tosurface), [`CaveTeleportSettings.withinCaves`](/game-api/types/alta-world-generation/caveteleportsettings#m-withincaves).
