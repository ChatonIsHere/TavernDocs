---
title: "InvertedTriangleStackingInstructionSetup"
description: "Builds the stacking layout for the inverted triangle instruction: rows that get wider as they go up, with random spacing and spin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InvertedTriangleStackingInstructionSetup

A **class** in `Root.Township`, `Alta.Inventory`.

Builds the stacking layout for the inverted triangle instruction: rows that get wider as they go up, with random spacing and spin.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructionSetup<InvertedTriangleStackingInstruction>`](/game-api/types/alta-items/stackinginstructionsetup-t)
- **Derived types** [`InvertedTriangleStackingInstruction`](/game-api/types/alta-items/invertedtrianglestackinginstruction)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InvertedTriangleStackingInstructionSetup()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"protected override void Setup(Bounds bounds, "}<Link to="/game-api/types/alta-items/invertedtrianglestackinginstruction">{"InvertedTriangleStackingInstruction"}</Link>{" instructions)"}</code> | Fills `Positions` and `MaxQuantity` with rows from `BaseWidth` at the bottom to the full width at the top. |
