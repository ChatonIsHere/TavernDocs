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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructions<SphereInBoxStackingInstructionSetup>`](/mod/game-api/types/alta-items/stackinginstructions-t)
- **Derived types** [`SphereInBoxStackingInstructionSetup`](/mod/game-api/types/alta-items/sphereinboxstackinginstructionsetup)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphereInBoxStackingInstruction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-diameter" /><code>{"private float diameter"}</code> | <span className="api-desc">Backing field for `Diameter`.</span> |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | <span className="api-desc">Backing field for `Spacing`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-diameter-2" /><code>{"float Diameter { get; }"}</code> | <span className="api-desc">Diameter of one sphere.</span> |
| <Link id="m-size" /><code>{"float Size { get; }"}</code> | <span className="api-desc">Space one sphere takes: diameter plus spacing.</span> |
| <Link id="m-spacing-2" /><code>{"float Spacing { get; }"}</code> | <span className="api-desc">Gap between spheres.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos(Transform transform)"}</code> | <span className="api-desc">Editor: draws the sphere and its spacing at the transform.</span> |

## Used in

Members of other types that take, return or hold a `SphereInBoxStackingInstruction`:

<div className="api-used-in">

[`SphereInBoxStackingInstructionSetup.Setup`](/mod/game-api/types/alta-items/sphereinboxstackinginstructionsetup#m-setup).

</div>
