---
title: "SphereInBoxStackingInstructionSetup"
description: "Builds the stacking layout for the sphere in box instruction: a grid of randomly rotated, slightly jittered items filling the bounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphereInBoxStackingInstructionSetup

A **class** in `Root.Township`, `Alta.Inventory`.

Builds the stacking layout for the sphere in box instruction: a grid of randomly rotated, slightly jittered items filling the bounds.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructionSetup<SphereInBoxStackingInstruction>`](/mod/game-api/types/alta-items/stackinginstructionsetup-t)
- **Derived types** [`SphereInBoxStackingInstruction`](/mod/game-api/types/alta-items/sphereinboxstackinginstruction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphereInBoxStackingInstructionSetup()"}</code> | <span className="api-desc">Creates a `SphereInBoxStackingInstructionSetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-levelcount" /><code>{"private int levelCount"}</code> | <span className="api-desc">How many items fit in one layer.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"protected override void Setup(Bounds bounds, "}<Link to="/mod/game-api/types/alta-items/sphereinboxstackinginstruction">{"SphereInBoxStackingInstruction"}</Link>{" instructions)"}</code> | <span className="api-desc">Fills `Positions` and `MaxQuantity` with a 3D grid, bottom layer first.</span> |
