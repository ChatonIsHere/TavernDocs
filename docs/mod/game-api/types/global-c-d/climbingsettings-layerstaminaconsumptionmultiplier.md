---
title: "ClimbingSettings.LayerStaminaConsumptionMultiplier"
description: "Stamina use multiplier for climbing on one physics layer, read by ClimbingSettings.GetLayerStaminaConsumptionMultiplier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingSettings.LayerStaminaConsumptionMultiplier

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Stamina use multiplier for climbing on one physics layer, read by `ClimbingSettings.GetLayerStaminaConsumptionMultiplier`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`ClimbingSettings`](/mod/game-api/types/global-c-d/climbingsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LayerStaminaConsumptionMultiplier()"}</code> | <span className="api-desc">Creates a `ClimbingSettings.LayerStaminaConsumptionMultiplier` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-layer" /><code>{"int layer"}</code> | <span className="api-desc">The physics layer this entry applies to.</span> |
| <Link id="m-multiplier" /><code>{"float multiplier"}</code> | <span className="api-desc">Stamina use multiplier while climbing that layer. At least 0.001.</span> |

## Used in

Members of other types that take, return or hold a `LayerStaminaConsumptionMultiplier`:

<div className="api-used-in">

[`ClimbingSettings.layerStaminaConsumptionMultipliers`](/mod/game-api/types/global-c-d/climbingsettings#m-layerstaminaconsumptionmultipliers).

</div>
