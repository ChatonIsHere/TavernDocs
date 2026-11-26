---
title: "ShapeImpactCollector"
description: "Asset describing a shape (sphere or cylinder) that collects the colliders an area attack hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShapeImpactCollector

An **abstract class** in `Root.Township`, no namespace.

Asset describing a shape (sphere or cylinder) that collects the colliders an area attack hits. `AreaAttackSkill` picks one per skill level.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CylinderImpactCollector`](/game-api/types/global-c-d/cylinderimpactcollector), [`SphereImpactCollector`](/game-api/types/global-s/sphereimpactcollector)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ShapeImpactCollector()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sizesquared" /><code>{"abstract float SizeSquared { get; }"}</code> | Squared radius of the shape; `AreaAttackSkill` divides squared distances by it to scale damage falloff. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-collectcolliders" /><code>{"abstract IEnumerable<Collider> CollectColliders("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, LayerMask collectionLayer)"}</code> | Returns the colliders on the given layers inside the shape at a tool hit. |
| <Link id="m-drawgizmos" /><code>{"virtual void DrawGizmos()"}</code> | Draws the shape in the editor; does nothing by default. |

## Used in

Members of other types that take, return or hold a `ShapeImpactCollector`:

[`AreaAttackSkill.collectionOverLevels`](/game-api/types/global-a-b/areaattackskill#m-collectionoverlevels), [`ShapeCollectorHelper.collector`](/game-api/types/global-s/shapecollectorhelper#m-collector).
