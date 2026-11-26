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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`StackingInstructions<T>`](/mod/game-api/types/alta-items/stackinginstructions-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StackingInstructions()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"virtual void DrawGizmos(Transform transform)"}</code> | <span className="api-desc">Editor: draws the stacking layout. Does nothing unless a subclass overrides it.</span> |
| <Link id="m-getsetup" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" GetSetup(Bounds bounds, Matrix4x4 localToWorld)"}</code> | <span className="api-desc">Creates the stacking setup for a box with these bounds and this local-to-world matrix.</span> |

## Used in

Members of other types that take, return or hold a `StackingInstructions`:

<div className="api-used-in">

[`StackingComponent.instructions`](/mod/game-api/types/alta-items/stackingcomponent#m-instructions), [`StackingInstructionSetup.Setup`](/mod/game-api/types/alta-items/stackinginstructionsetup#m-setup), [`StackingInstructionSetup<T>.Setup`](/mod/game-api/types/alta-items/stackinginstructionsetup-t#m-setup).

</div>
