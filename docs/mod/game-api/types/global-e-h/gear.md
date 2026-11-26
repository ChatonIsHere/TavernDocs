---
title: "Gear"
description: "A 2D gear on a Turnable chain that snaps to meshing gears nearby and lines up its teeth with them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Gear

A **class** in `Root.Township`, the global namespace.

A 2D gear on a `Turnable` chain that snaps to meshing gears nearby and lines up its teeth with them. Probably an editor or prototype tool.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`Turnable`](/mod/game-api/types/global-t-x/turnable)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Gear()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collidercheck" /><code>{"private Collider2D[] colliderCheck"}</code> | <span className="api-desc">Reused buffer for the 2D overlap check.</span> |
| <Link id="m-oldposition" /><code>{"private Vector3 oldPosition"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-teeth" /><code>{"private int teeth"}</code> | <span className="api-desc">Backing field for `Teeth`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-teeth-2" /><code>{"int Teeth { get; }"}</code> | <span className="api-desc">Number of teeth, used for the turn ratio.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-alignwith" /><code>{"void AlignWith("}<Link to="/mod/game-api/types/global-e-h/gear">{"Gear"}</Link>{" other)"}</code> | <span className="api-desc">Meant to align with another gear; computes a plane intersection but applies nothing.</span> |
| <Link id="m-updateconnected" /><code>{"void UpdateConnected()"}</code> | <span className="api-desc">Finds gears touching by radius, connects them and moves and rotates this gear to mesh.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-planeplaneintersection" /><code>{"private void PlanePlaneIntersection(out Vector3 linePoint, out Vector3 lineVec, Transform plane1, Transform plane2)"}</code> | <span className="api-desc">Line where two transforms' forward planes meet.</span> |

</details>
