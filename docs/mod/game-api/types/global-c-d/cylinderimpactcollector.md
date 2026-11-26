---
title: "CylinderImpactCollector"
description: "Impact shape asset that collects colliders inside an upright cylinder above the hit point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CylinderImpactCollector

A **class** in `Root.Township`, the global namespace.

Impact shape asset that collects colliders inside an upright cylinder above the hit point. Used for area effects in progression and impacts.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ShapeImpactCollector`](/mod/game-api/types/global-s/shapeimpactcollector)
- **Derived types** [`CylinderImpactCollector.Create`](/mod/game-api/types/global-c-d/cylinderimpactcollector-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/cylinderimpactcollector-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CylinderImpactCollector()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-height" /><code>{"private float height"}</code> | <span className="api-desc">Cylinder height above the hit point.</span> |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> | <span className="api-desc">Cylinder radius squared (entered as a plain radius in the inspector).</span> |
| <Link id="m-sphereradius" /><code>{"private float sphereRadius"}</code> | <span className="api-desc">Radius of the sphere enclosing the cylinder, used for the first overlap test.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sizesquared" /><code>{"override float SizeSquared { get; }"}</code> | <span className="api-desc">The cylinder's radius squared.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-collectcolliders" /><code>{"override IEnumerable<Collider> CollectColliders("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, LayerMask collectionLayer) (iterator)"}</code> | <span className="api-desc">Overlap-sphere around the cylinder, then keeps colliders whose position is within its height and radius from the hit point.</span> |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos()"}</code> | <span className="api-desc">Draws the bounding sphere and the cylinder.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Recomputes `sphereRadius` from the radius and height.</span> |

</details>
