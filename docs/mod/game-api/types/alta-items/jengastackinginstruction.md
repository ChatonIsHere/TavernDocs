---
title: "JengaStackingInstruction"
description: "Stacking instructions that lay items in alternating crossed layers like a Jenga tower (menu Township/Stacking/Jenga Instructions)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JengaStackingInstruction

A **class** in `Root.Township`, `Alta.Inventory`.

Stacking instructions that lay items in alternating crossed layers like a Jenga tower (menu Township/Stacking/Jenga Instructions).

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructions<JengaStackingInstructionSetup>`](/mod/game-api/types/alta-items/stackinginstructions-t)
- **Derived types** [`JengaStackingInstructionSetup`](/mod/game-api/types/alta-items/jengastackinginstructionsetup)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JengaStackingInstruction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | <span className="api-desc">Backing field for `Bounds`.</span> |
| <Link id="m-defaultrotation" /><code>{"private Quaternion defaultRotation"}</code> | <span className="api-desc">Backing field for `DefaultRotation`.</span> |
| <Link id="m-isrotatedbase" /><code>{"private bool isRotatedBase"}</code> | <span className="api-desc">Backing field for `IsRotatedBase`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bounds-2" /><code>{"Bounds Bounds { get; }"}</code> | <span className="api-desc">Size and centre of one stacked item, used for spacing and the gizmo.</span> |
| <Link id="m-defaultrotation-2" /><code>{"Quaternion DefaultRotation { get; }"}</code> | <span className="api-desc">Rotation of an item in the stack before the layer turn is applied.</span> |
| <Link id="m-isrotatedbase-2" /><code>{"bool IsRotatedBase { get; }"}</code> | <span className="api-desc">When true, the bottom layer is turned 90 degrees.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Transform transform)"}</code> | <span className="api-desc">Draws a wire box for one item's bounds at the transform.</span> |

## Used in

Members of other types that take, return or hold a `JengaStackingInstruction`:

<div className="api-used-in">

[`JengaStackingInstructionSetup.instructions`](/mod/game-api/types/alta-items/jengastackinginstructionsetup#m-instructions), [`JengaStackingInstructionSetup.Setup`](/mod/game-api/types/alta-items/jengastackinginstructionsetup#m-setup).

</div>
