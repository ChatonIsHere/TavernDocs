---
title: "StackingInstructions"
description: "abstract class StackingInstructions in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StackingInstructions

An **abstract class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`StackingInstructions<T>`](/game-api/types/alta-items/stackinginstructions-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected StackingInstructions()"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-drawgizmos" /><code>{"virtual void DrawGizmos(Transform transform)"}</code> |
| <Link id="m-getsetup" /><code>{"abstract "}<Link to="/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" GetSetup(Bounds bounds, Matrix4x4 localToWorld)"}</code> |

## Used in

Members of other types that take, return or hold a `StackingInstructions`:

[`StackingComponent.instructions`](/game-api/types/alta-items/stackingcomponent#m-instructions), [`StackingInstructionSetup.Setup`](/game-api/types/alta-items/stackinginstructionsetup#m-setup), [`StackingInstructionSetup<T>.Setup`](/game-api/types/alta-items/stackinginstructionsetup-t#m-setup).
