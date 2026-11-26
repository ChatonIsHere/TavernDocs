---
title: "StatUpgradeTarget.StatIncreaseType"
description: "What a stat upgrade does to the related base stat: nothing, raise it by the upgrade amount, or fill it to its maximum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatUpgradeTarget.StatIncreaseType

An **private enum** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

What a stat upgrade does to the related base stat: nothing, raise it by the upgrade amount, or fill it to its maximum.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StatUpgradeTarget`](/game-api/types/alta-stats-effects/statupgradetarget)

## Values

| Member |
| --- |
| <Link id="m-fill" /><code>{"fill = 2"}</code> |
| <Link id="m-increasedamount" /><code>{"increasedAmount = 1"}</code> |
| <Link id="m-none" /><code>{"none = 0"}</code> |

## Used in

Members of other types that take, return or hold a `StatIncreaseType`:

[`StatUpgradeTarget.onUpgradeIncrease`](/game-api/types/alta-stats-effects/statupgradetarget#m-onupgradeincrease).
