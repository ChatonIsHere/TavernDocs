---
title: "SphereImpactCollector"
description: "Shape impact collector asset for skills that collects every collider within a sphere around the hit point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphereImpactCollector

A **class** in `Root.Township`, the global namespace.

Shape impact collector asset for skills that collects every collider within a sphere around the hit point.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ShapeImpactCollector`](/mod/game-api/types/global-s/shapeimpactcollector)
- **Derived types** [`SphereImpactCollector.Create`](/mod/game-api/types/global-s/sphereimpactcollector-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/sphereimpactcollector-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphereImpactCollector()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Collection radius around the hit point.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sizesquared" /><code>{"override float SizeSquared { get; }"}</code> | <span className="api-desc">The radius squared.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-collectcolliders" /><code>{"override IEnumerable<Collider> CollectColliders("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, LayerMask collectionLayer)"}</code> | <span className="api-desc">Returns the colliders on the given layers within `radius` of the hit point.</span> |
