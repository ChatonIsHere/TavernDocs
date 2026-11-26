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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructionSetup<SphereInBoxStackingInstruction>`](/game-api/types/alta-items/stackinginstructionsetup-t)
- **Derived types** [`SphereInBoxStackingInstruction`](/game-api/types/alta-items/sphereinboxstackinginstruction)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SphereInBoxStackingInstructionSetup()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-levelcount" /><code>{"private int levelCount"}</code> | How many items fit in one layer. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"protected override void Setup(Bounds bounds, "}<Link to="/game-api/types/alta-items/sphereinboxstackinginstruction">{"SphereInBoxStackingInstruction"}</Link>{" instructions)"}</code> | Fills `Positions` and `MaxQuantity` with a 3D grid, bottom layer first. |
