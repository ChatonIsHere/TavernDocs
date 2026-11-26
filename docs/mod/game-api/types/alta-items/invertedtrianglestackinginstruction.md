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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructions<InvertedTriangleStackingInstructionSetup>`](/mod/game-api/types/alta-items/stackinginstructions-t)
- **Derived types** [`InvertedTriangleStackingInstructionSetup`](/mod/game-api/types/alta-items/invertedtrianglestackinginstructionsetup)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InvertedTriangleStackingInstruction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basewidth" /><code>{"private float baseWidth"}</code> | <span className="api-desc">Backing field for `BaseWidth`.</span> |
| <Link id="m-defaultrotation" /><code>{"private Quaternion defaultRotation"}</code> | <span className="api-desc">Backing field for `DefaultRotation`.</span> |
| <Link id="m-diameter" /><code>{"private float diameter"}</code> | <span className="api-desc">Backing field for `Diameter`.</span> |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | <span className="api-desc">Backing field for `Spacing`.</span> |
| <Link id="m-tocenter" /><code>{"private Vector3 toCenter"}</code> | <span className="api-desc">Backing field for `ToCenter`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basewidth-2" /><code>{"float BaseWidth { get; }"}</code> | <span className="api-desc">Width of the bottom row of the stack.</span> |
| <Link id="m-defaultrotation-2" /><code>{"Quaternion DefaultRotation { get; }"}</code> | <span className="api-desc">Rotation applied to each stacked item.</span> |
| <Link id="m-diameter-2" /><code>{"float Diameter { get; }"}</code> | <span className="api-desc">Diameter of one item.</span> |
| <Link id="m-size" /><code>{"float Size { get; }"}</code> | <span className="api-desc">Space one item takes: diameter plus spacing.</span> |
| <Link id="m-spacing-2" /><code>{"float Spacing { get; }"}</code> | <span className="api-desc">Gap between items.</span> |
| <Link id="m-tocenter-2" /><code>{"Vector3 ToCenter { get; }"}</code> | <span className="api-desc">Offset from the item's origin to its centre.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Transform transform)"}</code> | <span className="api-desc">Draws nothing in this build.</span> |

## Used in

Members of other types that take, return or hold a `InvertedTriangleStackingInstruction`:

<div className="api-used-in">

[`InvertedTriangleStackingInstructionSetup.Setup`](/mod/game-api/types/alta-items/invertedtrianglestackinginstructionsetup#m-setup).

</div>
