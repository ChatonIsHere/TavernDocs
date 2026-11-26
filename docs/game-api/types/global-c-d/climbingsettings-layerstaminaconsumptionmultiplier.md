---
title: "ClimbingSettings.LayerStaminaConsumptionMultiplier"
description: "Stamina use multiplier for climbing on one physics layer, read by ClimbingSettings.GetLayerStaminaConsumptionMultiplier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingSettings.LayerStaminaConsumptionMultiplier

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Stamina use multiplier for climbing on one physics layer, read by `ClimbingSettings.GetLayerStaminaConsumptionMultiplier`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`ClimbingSettings`](/game-api/types/global-c-d/climbingsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LayerStaminaConsumptionMultiplier()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-layer" /><code>{"int layer"}</code> | The physics layer this entry applies to. |
| <Link id="m-multiplier" /><code>{"float multiplier"}</code> | Stamina use multiplier while climbing that layer. At least 0.001. |

## Used in

Members of other types that take, return or hold a `LayerStaminaConsumptionMultiplier`:

[`ClimbingSettings.layerStaminaConsumptionMultipliers`](/game-api/types/global-c-d/climbingsettings#m-layerstaminaconsumptionmultipliers).
