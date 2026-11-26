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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Derived types** [`StackingInstructionSetup<T>`](/mod/game-api/types/alta-items/stackinginstructionsetup-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StackingInstructionSetup()"}</code> | <span className="api-desc">Creates a `StackingInstructionSetup` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxquantity" /><code>{"int MaxQuantity { get; protected set; }"}</code> | <span className="api-desc">How many items fit.</span> |
| <Link id="m-positions" /><code>{"Matrix4x4[] Positions { get; protected set; }"}</code> | <span className="api-desc">Local placement matrices, one per slot.</span> |
| <Link id="m-worldpositions" /><code>{"Matrix4x4[] WorldPositions { get; protected set; }"}</code> | <span className="api-desc">World placement matrices, one per slot.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"abstract void Setup(Bounds bounds, Matrix4x4 localToWorld, "}<Link to="/mod/game-api/types/alta-items/stackinginstructions">{"StackingInstructions"}</Link>{" instructions)"}</code> | <span className="api-desc">Computes the positions for the bounds and instructions, then the world positions.</span> |
| <Link id="m-setuppositions" /><code>{"void SetupPositions(Matrix4x4 localToWorld)"}</code> | <span className="api-desc">Recomputes the world positions from a local-to-world matrix.</span> |

## Used in

Members of other types that take, return or hold a `StackingInstructionSetup`:

<div className="api-used-in">

[`StackingComponent.GetSetup`](/mod/game-api/types/alta-items/stackingcomponent#m-getsetup), [`StackingInstructions.GetSetup`](/mod/game-api/types/alta-items/stackinginstructions#m-getsetup), [`StackingInstructions<T>.GetSetup`](/mod/game-api/types/alta-items/stackinginstructions-t#m-getsetup), [`StorageOrganizer.stackingSetup`](/mod/game-api/types/alta-items/storageorganizer#m-stackingsetup).

</div>
