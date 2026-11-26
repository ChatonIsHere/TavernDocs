---
title: "FixedStatChangeHook.OperationType"
description: "How a FixedStatChangeHook applies its value: set, add or multiply."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FixedStatChangeHook.OperationType

An **private enum** in `Root.Township`, `Alta.Intelligence`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

How a `FixedStatChangeHook` applies its value: set, add or multiply.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`FixedStatChangeHook`](/game-api/types/alta-intelligence/fixedstatchangehook)

## Values

| Member |
| --- |
| <Link id="m-add" /><code>{"Add = 1"}</code> |
| <Link id="m-multiply" /><code>{"Multiply = 2"}</code> |
| <Link id="m-set" /><code>{"Set = 0"}</code> |

## Used in

Members of other types that take, return or hold a `OperationType`:

[`FixedStatChangeHook.operationType`](/game-api/types/alta-intelligence/fixedstatchangehook#m-operationtype).
