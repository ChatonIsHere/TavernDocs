---
title: "Gear"
description: "A 2D gear on a Turnable chain that snaps to meshing gears nearby and lines up its teeth with them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Gear

A **class** in `Root.Township`, no namespace.

A 2D gear on a `Turnable` chain that snaps to meshing gears nearby and lines up its teeth with them. Probably an editor or prototype tool.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`Turnable`](/game-api/types/global-t-x/turnable)
- **Attributes** `SelectionBase`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Gear()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collidercheck" /><code>{"private Collider2D[] colliderCheck"}</code> | Reused buffer for the 2D overlap check. |
| <Link id="m-oldposition" /><code>{"private Vector3 oldPosition"}</code> | Unused. |
| <Link id="m-teeth" /><code>{"private int teeth"}</code> | Backing field for `Teeth`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-teeth-2" /><code>{"int Teeth { get; }"}</code> | Number of teeth, used for the turn ratio. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-alignwith" /><code>{"void AlignWith("}<Link to="/game-api/types/global-e-h/gear">{"Gear"}</Link>{" other)"}</code> | Meant to align with another gear; computes a plane intersection but applies nothing. |
| <Link id="m-updateconnected" /><code>{"void UpdateConnected()"}</code> | Finds gears touching by radius, connects them and moves and rotates this gear to mesh. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-planeplaneintersection" /><code>{"private void PlanePlaneIntersection(out Vector3 linePoint, out Vector3 lineVec, Transform plane1, Transform plane2)"}</code> | Line where two transforms' forward planes meet. |

</details>
