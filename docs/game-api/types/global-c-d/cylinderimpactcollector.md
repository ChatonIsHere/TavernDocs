---
title: "CylinderImpactCollector"
description: "class CylinderImpactCollector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CylinderImpactCollector

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`ShapeImpactCollector`](/game-api/types/global-s/shapeimpactcollector)
- **Derived types** [`CylinderImpactCollector.Create`](/game-api/types/global-c-d/cylinderimpactcollector-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/cylinderimpactcollector-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CylinderImpactCollector()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-height" /><code>{"private float height"}</code> |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> |
| <Link id="m-sphereradius" /><code>{"private float sphereRadius"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-sizesquared" /><code>{"override float SizeSquared { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-collectcolliders" /><code>{"override IEnumerable<Collider> CollectColliders("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, LayerMask collectionLayer) (iterator)"}</code> |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>
