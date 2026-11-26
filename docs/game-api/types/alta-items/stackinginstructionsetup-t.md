---
title: "StackingInstructionSetup<T>"
description: "Base for a stack layout built from a specific StackingInstructions type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StackingInstructionSetup&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Inventory`.

Base for a stack layout built from a specific `StackingInstructions` type. Subclasses fill `Positions` and `MaxQuantity`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructionSetup`](/game-api/types/alta-items/stackinginstructionsetup)
- **Derived types** [`InvertedTriangleStackingInstructionSetup`](/game-api/types/alta-items/invertedtrianglestackinginstructionsetup), [`JengaStackingInstructionSetup`](/game-api/types/alta-items/jengastackinginstructionsetup), [`SphereInBoxStackingInstructionSetup`](/game-api/types/alta-items/sphereinboxstackinginstructionsetup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StackingInstructionSetup()"}</code> | Creates a `StackingInstructionSetup` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"override void Setup(Bounds bounds, Matrix4x4 localToWorld, "}<Link to="/game-api/types/alta-items/stackinginstructions">{"StackingInstructions"}</Link>{" instructions)"}</code> | Public overload casts the instructions to `T`, calls the typed `Setup`, then works out world positions. |
| <Link id="m-setup-2" /><code>{"protected abstract void Setup(Bounds bounds, T instructions)"}</code> | Public overload casts the instructions to `T`, calls the typed `Setup`, then works out world positions. |
