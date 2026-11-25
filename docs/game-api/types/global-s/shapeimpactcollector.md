---
title: "ShapeImpactCollector"
description: "abstract class ShapeImpactCollector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShapeImpactCollector

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CylinderImpactCollector`](/game-api/types/global-c-d/cylinderimpactcollector), [`SphereImpactCollector`](/game-api/types/global-s/sphereimpactcollector)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ShapeImpactCollector()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-sizesquared" /><code>{"abstract float SizeSquared { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-collectcolliders" /><code>{"abstract IEnumerable<Collider> CollectColliders("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, LayerMask collectionLayer)"}</code> |
| <Link id="m-drawgizmos" /><code>{"virtual void DrawGizmos()"}</code> |

## Used in

Members of other types that take, return or hold a `ShapeImpactCollector`:

[`AreaAttackSkill.collectionOverLevels`](/game-api/types/global-a-b/areaattackskill#m-collectionoverlevels), [`ShapeCollectorHelper.collector`](/game-api/types/global-s/shapecollectorhelper#m-collector).
