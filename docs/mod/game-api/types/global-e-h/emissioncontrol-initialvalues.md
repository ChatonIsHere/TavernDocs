---
title: "EmissionControl.InitialValues"
description: "A particle system's starting emission rates, saved so EmissionControl can scale them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmissionControl.InitialValues

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A particle system's starting emission rates, saved so `EmissionControl` can scale them.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EmissionControl`](/mod/game-api/types/global-e-h/emissioncontrol)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-rateoverdistance" /><code>{"float rateOverDistance"}</code> | <span className="api-desc">Starting rate-over-distance multiplier.</span> |
| <Link id="m-rateovertime" /><code>{"float rateOverTime"}</code> | <span className="api-desc">Starting rate-over-time multiplier.</span> |

## Used in

Members of other types that take, return or hold a `InitialValues`:

<div className="api-used-in">

[`EmissionControl.initialValues`](/mod/game-api/types/global-e-h/emissioncontrol#m-initialvalues).

</div>
