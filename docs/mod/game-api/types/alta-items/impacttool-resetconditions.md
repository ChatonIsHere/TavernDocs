---
title: "ImpactTool.ResetConditions"
description: "Flags for when an ImpactTool resets its impactors: on being blocked, on a valid hit, or both."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactTool.ResetConditions

An **private enum** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Flags for when an `ImpactTool` resets its impactors: on being blocked, on a valid hit, or both. Defaults to valid hit.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`ImpactTool`](/mod/game-api/types/alta-items/impacttool)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-onblocked" /><code>{"OnBlocked = 1"}</code> |
| <Link id="m-onvalidhit" /><code>{"OnValidHit = 2"}</code> |

## Used in

Members of other types that take, return or hold a `ResetConditions`:

[`ImpactTool.resetConditions`](/mod/game-api/types/alta-items/impacttool#m-resetconditions).
