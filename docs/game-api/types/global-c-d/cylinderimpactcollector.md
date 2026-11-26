---
title: "CylinderImpactCollector"
description: "Impact shape asset that collects colliders inside an upright cylinder above the hit point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CylinderImpactCollector

A **class** in `Root.Township`, no namespace.

Impact shape asset that collects colliders inside an upright cylinder above the hit point. Used for area effects in progression and impacts.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`ShapeImpactCollector`](/game-api/types/global-s/shapeimpactcollector)
- **Derived types** [`CylinderImpactCollector.Create`](/game-api/types/global-c-d/cylinderimpactcollector-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/cylinderimpactcollector-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CylinderImpactCollector()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-height" /><code>{"private float height"}</code> | Cylinder height above the hit point. |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> | Cylinder radius squared (entered as a plain radius in the inspector). |
| <Link id="m-sphereradius" /><code>{"private float sphereRadius"}</code> | Radius of the sphere enclosing the cylinder, used for the first overlap test. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sizesquared" /><code>{"override float SizeSquared { get; }"}</code> | The cylinder's radius squared. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-collectcolliders" /><code>{"override IEnumerable<Collider> CollectColliders("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, LayerMask collectionLayer) (iterator)"}</code> | Overlap-sphere around the cylinder, then keeps colliders whose position is within its height and radius from the hit point. |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos()"}</code> | Draws the bounding sphere and the cylinder. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Recomputes `sphereRadius` from the radius and height. |

</details>
