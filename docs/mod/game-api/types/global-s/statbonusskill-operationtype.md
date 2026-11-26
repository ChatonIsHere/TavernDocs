---
title: "StatBonusSkill.OperationType"
description: "How a StatBonusSkill applies its value: multiply, add, or set (the old value is kept and restored when the skill is locked)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBonusSkill.OperationType

An **enum** in `Root.Township`, the global namespace.

How a `StatBonusSkill` applies its value: multiply, add, or set (the old value is kept and restored when the skill is locked).

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`StatBonusSkill`](/mod/game-api/types/global-s/statbonusskill)

## Values

| Member |
| --- |
| <Link id="m-additional" /><code>{"Additional = 1"}</code> |
| <Link id="m-multiplier" /><code>{"Multiplier = 0"}</code> |
| <Link id="m-set" /><code>{"Set = 2"}</code> |

## Used in

Members of other types that take, return or hold a `OperationType`:

<div className="api-used-in">

[`StatBonusSkill.operationType`](/mod/game-api/types/global-s/statbonusskill#m-operationtype).

</div>
