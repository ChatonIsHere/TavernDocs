---
title: "StackingInstructions"
description: "Base asset that describes how items stack in a space."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StackingInstructions

An **abstract class** in `Root.Township`, `Alta.Inventory`.

Base asset that describes how items stack in a space. It makes a `StackingInstructionSetup` for given bounds; the generic subclass creates the setup type for you.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`StackingInstructions<T>`](/game-api/types/alta-items/stackinginstructions-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected StackingInstructions()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"virtual void DrawGizmos(Transform transform)"}</code> | Editor: draws the stacking layout. Does nothing unless a subclass overrides it. |
| <Link id="m-getsetup" /><code>{"abstract "}<Link to="/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" GetSetup(Bounds bounds, Matrix4x4 localToWorld)"}</code> | Creates the stacking setup for a box with these bounds and this local-to-world matrix. |

## Used in

Members of other types that take, return or hold a `StackingInstructions`:

[`StackingComponent.instructions`](/game-api/types/alta-items/stackingcomponent#m-instructions), [`StackingInstructionSetup.Setup`](/game-api/types/alta-items/stackinginstructionsetup#m-setup), [`StackingInstructionSetup<T>.Setup`](/game-api/types/alta-items/stackinginstructionsetup-t#m-setup).
