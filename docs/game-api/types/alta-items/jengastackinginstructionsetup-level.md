---
title: "JengaStackingInstructionSetup.Level"
description: "One layer of a jenga stack: how many items fit along X and Z, and the total."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JengaStackingInstructionSetup.Level

A **struct** in `Root.Township`, `Alta.Inventory`.

One layer of a jenga stack: how many items fit along X and Z, and the total.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`JengaStackingInstructionSetup`](/game-api/types/alta-items/jengastackinginstructionsetup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Level(int x, int y)"}</code> | Creates a `JengaStackingInstructionSetup.Level` from `x` and `y`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int count"}</code> | Items in the layer (`x` times `z`). |
| <Link id="m-x" /><code>{"int x"}</code> | Items along X. |
| <Link id="m-z" /><code>{"int z"}</code> | Items along Z. |

## Used in

Members of other types that take, return or hold a `Level`:

[`JengaStackingInstructionSetup.SetupPosition`](/game-api/types/alta-items/jengastackinginstructionsetup#m-setupposition).
