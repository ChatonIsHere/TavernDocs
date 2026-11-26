---
title: "SphereInBoxStackingInstruction"
description: "Stacking instructions asset that packs spheres in a box grid inside a dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphereInBoxStackingInstruction

A **class** in `Root.Township`, `Alta.Inventory`.

Stacking instructions asset that packs spheres in a box grid inside a dock. Created from the Township/Stacking asset menu.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructions<SphereInBoxStackingInstructionSetup>`](/game-api/types/alta-items/stackinginstructions-t)
- **Derived types** [`SphereInBoxStackingInstructionSetup`](/game-api/types/alta-items/sphereinboxstackinginstructionsetup)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphereInBoxStackingInstruction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-diameter" /><code>{"private float diameter"}</code> | Backing field for `Diameter`. |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | Backing field for `Spacing`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-diameter-2" /><code>{"float Diameter { get; }"}</code> | Diameter of one sphere. |
| <Link id="m-size" /><code>{"float Size { get; }"}</code> | Space one sphere takes: diameter plus spacing. |
| <Link id="m-spacing-2" /><code>{"float Spacing { get; }"}</code> | Gap between spheres. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Transform transform)"}</code> | Editor: draws the sphere and its spacing at the transform. |

## Used in

Members of other types that take, return or hold a `SphereInBoxStackingInstruction`:

[`SphereInBoxStackingInstructionSetup.Setup`](/game-api/types/alta-items/sphereinboxstackinginstructionsetup#m-setup).
