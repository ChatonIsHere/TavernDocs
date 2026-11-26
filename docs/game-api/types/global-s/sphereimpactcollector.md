---
title: "SphereImpactCollector"
description: "Shape impact collector asset for skills that collects every collider within a sphere around the hit point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphereImpactCollector

A **class** in `Root.Township`, no namespace.

Shape impact collector asset for skills that collects every collider within a sphere around the hit point.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ShapeImpactCollector`](/game-api/types/global-s/shapeimpactcollector)
- **Derived types** [`SphereImpactCollector.Create`](/game-api/types/global-s/sphereimpactcollector-create)
- **Nested types** [`Create`](/game-api/types/global-s/sphereimpactcollector-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphereImpactCollector()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Collection radius around the hit point. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sizesquared" /><code>{"override float SizeSquared { get; }"}</code> | The radius squared. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-collectcolliders" /><code>{"override IEnumerable<Collider> CollectColliders("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, LayerMask collectionLayer)"}</code> | Returns the colliders on the given layers within `radius` of the hit point. |
