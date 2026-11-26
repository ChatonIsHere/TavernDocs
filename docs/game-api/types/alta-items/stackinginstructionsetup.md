---
title: "StackingInstructionSetup"
description: "Base for working out where stacked copies of an item go inside some bounds, from StackingInstructions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StackingInstructionSetup

An **abstract class** in `Root.Township`, `Alta.Inventory`.

Base for working out where stacked copies of an item go inside some bounds, from `StackingInstructions`. Used by `StorageOrganizer`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`StackingInstructionSetup<T>`](/game-api/types/alta-items/stackinginstructionsetup-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StackingInstructionSetup()"}</code> | Creates a `StackingInstructionSetup` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxquantity" /><code>{"int MaxQuantity { get; protected set; }"}</code> | How many items fit. |
| <Link id="m-positions" /><code>{"Matrix4x4[] Positions { get; protected set; }"}</code> | Local placement matrices, one per slot. |
| <Link id="m-worldpositions" /><code>{"Matrix4x4[] WorldPositions { get; protected set; }"}</code> | World placement matrices, one per slot. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"abstract void Setup(Bounds bounds, Matrix4x4 localToWorld, "}<Link to="/game-api/types/alta-items/stackinginstructions">{"StackingInstructions"}</Link>{" instructions)"}</code> | Computes the positions for the bounds and instructions, then the world positions. |
| <Link id="m-setuppositions" /><code>{"void SetupPositions(Matrix4x4 localToWorld)"}</code> | Recomputes the world positions from a local-to-world matrix. |

## Used in

Members of other types that take, return or hold a `StackingInstructionSetup`:

[`StackingComponent.GetSetup`](/game-api/types/alta-items/stackingcomponent#m-getsetup), [`StackingInstructions.GetSetup`](/game-api/types/alta-items/stackinginstructions#m-getsetup), [`StackingInstructions<T>.GetSetup`](/game-api/types/alta-items/stackinginstructions-t#m-getsetup), [`StorageOrganizer.stackingSetup`](/game-api/types/alta-items/storageorganizer#m-stackingsetup).
