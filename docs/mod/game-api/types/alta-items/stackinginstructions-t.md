---
title: "StackingInstructions<T>"
description: "Base for stacking instructions assets that build their layout with a setup class T."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StackingInstructions&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Inventory`.

Base for stacking instructions assets that build their layout with a setup class `T`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructions`](/mod/game-api/types/alta-items/stackinginstructions)
- **Derived types** [`InvertedTriangleStackingInstruction`](/mod/game-api/types/alta-items/invertedtrianglestackinginstruction), [`JengaStackingInstruction`](/mod/game-api/types/alta-items/jengastackinginstruction), [`SphereInBoxStackingInstruction`](/mod/game-api/types/alta-items/sphereinboxstackinginstruction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StackingInstructions()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsetup" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/stackinginstructionsetup">{"StackingInstructionSetup"}</Link>{" GetSetup(Bounds bounds, Matrix4x4 localToWorld)"}</code> | <span className="api-desc">Creates a new `T` and sets it up for the given bounds and transform.</span> |
