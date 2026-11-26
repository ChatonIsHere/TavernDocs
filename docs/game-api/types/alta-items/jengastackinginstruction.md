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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructions<JengaStackingInstructionSetup>`](/game-api/types/alta-items/stackinginstructions-t)
- **Derived types** [`JengaStackingInstructionSetup`](/game-api/types/alta-items/jengastackinginstructionsetup)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"JengaStackingInstruction()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | Backing field for `Bounds`. |
| <Link id="m-defaultrotation" /><code>{"private Quaternion defaultRotation"}</code> | Backing field for `DefaultRotation`. |
| <Link id="m-isrotatedbase" /><code>{"private bool isRotatedBase"}</code> | Backing field for `IsRotatedBase`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bounds-2" /><code>{"Bounds Bounds { get; }"}</code> | Size and centre of one stacked item, used for spacing and the gizmo. |
| <Link id="m-defaultrotation-2" /><code>{"Quaternion DefaultRotation { get; }"}</code> | Rotation of an item in the stack before the layer turn is applied. |
| <Link id="m-isrotatedbase-2" /><code>{"bool IsRotatedBase { get; }"}</code> | When true, the bottom layer is turned 90 degrees. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Transform transform)"}</code> | Draws a wire box for one item's bounds at the transform. |

## Used in

Members of other types that take, return or hold a `JengaStackingInstruction`:

[`JengaStackingInstructionSetup.instructions`](/game-api/types/alta-items/jengastackinginstructionsetup#m-instructions), [`JengaStackingInstructionSetup.Setup`](/game-api/types/alta-items/jengastackinginstructionsetup#m-setup).
