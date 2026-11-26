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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`JengaStackingInstructionSetup`](/mod/game-api/types/alta-items/jengastackinginstructionsetup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Level(int x, int y)"}</code> | <span className="api-desc">Creates a `JengaStackingInstructionSetup.Level` from `x` and `y`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int count"}</code> | <span className="api-desc">Items in the layer (`x` times `z`).</span> |
| <Link id="m-x" /><code>{"int x"}</code> | <span className="api-desc">Items along X.</span> |
| <Link id="m-z" /><code>{"int z"}</code> | <span className="api-desc">Items along Z.</span> |

## Used in

Members of other types that take, return or hold a `Level`:

<div className="api-used-in">

[`JengaStackingInstructionSetup.SetupPosition`](/mod/game-api/types/alta-items/jengastackinginstructionsetup#m-setupposition).

</div>
