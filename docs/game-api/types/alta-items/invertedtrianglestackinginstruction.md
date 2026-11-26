---
title: "InvertedTriangleStackingInstruction"
description: "Stacking instructions asset that piles items in an inverted triangle inside a dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InvertedTriangleStackingInstruction

A **class** in `Root.Township`, `Alta.Inventory`.

Stacking instructions asset that piles items in an inverted triangle inside a dock. Created from the Township/Stacking asset menu.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructions<InvertedTriangleStackingInstructionSetup>`](/game-api/types/alta-items/stackinginstructions-t)
- **Derived types** [`InvertedTriangleStackingInstructionSetup`](/game-api/types/alta-items/invertedtrianglestackinginstructionsetup)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InvertedTriangleStackingInstruction()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basewidth" /><code>{"private float baseWidth"}</code> | Backing field for `BaseWidth`. |
| <Link id="m-defaultrotation" /><code>{"private Quaternion defaultRotation"}</code> | Backing field for `DefaultRotation`. |
| <Link id="m-diameter" /><code>{"private float diameter"}</code> | Backing field for `Diameter`. |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | Backing field for `Spacing`. |
| <Link id="m-tocenter" /><code>{"private Vector3 toCenter"}</code> | Backing field for `ToCenter`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basewidth-2" /><code>{"float BaseWidth { get; }"}</code> | Width of the bottom row of the stack. |
| <Link id="m-defaultrotation-2" /><code>{"Quaternion DefaultRotation { get; }"}</code> | Rotation applied to each stacked item. |
| <Link id="m-diameter-2" /><code>{"float Diameter { get; }"}</code> | Diameter of one item. |
| <Link id="m-size" /><code>{"float Size { get; }"}</code> | Space one item takes: diameter plus spacing. |
| <Link id="m-spacing-2" /><code>{"float Spacing { get; }"}</code> | Gap between items. |
| <Link id="m-tocenter-2" /><code>{"Vector3 ToCenter { get; }"}</code> | Offset from the item's origin to its centre. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Transform transform)"}</code> | Draws nothing in this build. |

## Used in

Members of other types that take, return or hold a `InvertedTriangleStackingInstruction`:

[`InvertedTriangleStackingInstructionSetup.Setup`](/game-api/types/alta-items/invertedtrianglestackinginstructionsetup#m-setup).
